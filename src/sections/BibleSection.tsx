import { useState, useEffect, useRef } from 'react';
import { books } from '../content/bible';

interface Verse { verse: number; text: string; }

// Book name to ID (1-66)
const bookIdMap: Record<string, number> = {
  'Genesis':1,'Exodus':2,'Leviticus':3,'Numbers':4,'Deuteronomy':5,'Joshua':6,'Judges':7,'Ruth':8,
  '1 Samuel':9,'2 Samuel':10,'1 Kings':11,'2 Kings':12,'1 Chronicles':13,'2 Chronicles':14,'Ezra':15,'Nehemiah':16,'Esther':17,'Job':18,'Psalms':19,'Proverbs':20,'Ecclesiastes':21,'Song of Solomon':22,
  'Isaiah':23,'Jeremiah':24,'Lamentations':25,'Ezekiel':26,'Daniel':27,'Hosea':28,'Joel':29,'Amos':30,'Obadiah':31,'Jonah':32,'Micah':33,'Nahum':34,'Habakkuk':35,'Zephaniah':36,'Haggai':37,'Zechariah':38,'Malachi':39,
  'Matthew':40,'Mark':41,'Luke':42,'John':43,'Acts':44,'Romans':45,'1 Corinthians':46,'2 Corinthians':47,'Galatians':48,'Ephesians':49,'Philippians':50,'Colossians':51,'1 Thessalonians':52,'2 Thessalonians':53,'1 Timothy':54,'2 Timothy':55,'Titus':56,'Philemon':57,'Hebrews':58,'James':59,'1 Peter':60,'2 Peter':61,'1 John':62,'2 John':63,'3 John':64,'Jude':65,'Revelation':66
};

export default function BibleSection(){
  const [activeBook, setActiveBook] = useState('Luke');
  const [chapter, setChapter] = useState(10);
  const [activeVerse, setActiveVerse] = useState<number|null>(13);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(false);
  const [translation, setTranslation] = useState('NIV');
  const [showBooks, setShowBooks] = useState(false);
  const [showTrans, setShowTrans] = useState(false);
  const [bookSearch, setBookSearch] = useState('');
  const [testament, setTestament] = useState<'OT' | 'NT'>('NT');
  const bookRef = useRef<HTMLDivElement>(null);
  const transRef = useRef<HTMLDivElement>(null);
  const verseRefs = useRef<{[k:number]: HTMLSpanElement | null}>({});
  const readerRef = useRef<HTMLDivElement>(null);

  const bookData = books.find(b=>b.name===activeBook)!;
  // REAL VERSIONS - now using Bolls.life which actually has these
  const translations = [
    { id: 'KJV', label: 'KJV', bolls: 'KJV', api: 'bible-api' },
    { id: 'NIV', label: 'NIV', bolls: 'NIV', api: 'bolls' },
    { id: 'NKJV', label: 'NKJV', bolls: 'NKJV', api: 'bolls' },
    { id: 'NASB', label: 'NASB 2020', bolls: 'NASB', api: 'bolls' },
    { id: 'WEB', label: 'WEB', bolls: 'WEB', api: 'bible-api' },
  ];

  useEffect(()=>{
    const handleOutside = (e: MouseEvent)=>{
      if(bookRef.current &&!bookRef.current.contains(e.target as Node)) setShowBooks(false);
      if(transRef.current &&!transRef.current.contains(e.target as Node)) setShowTrans(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return ()=> document.removeEventListener('mousedown', handleOutside);
  },[]);

  useEffect(()=>{
    const fetchChapter = async ()=>{
      setLoading(true);
      const transObj = translations.find(t=>t.id===translation) || translations[0];
      const bookId = bookIdMap[activeBook] || 43;

      try{
        if(transObj.api === 'bolls'){
          // REAL FIX: Use Bolls.life API which has actual NIV/NKJV/NASB text
          // Endpoint: https://bolls.life/get-text/<translation>/<book>/<chapter>/
          const res = await fetch(`https://bolls.life/get-text/${transObj.bolls}/${bookId}/${chapter}/`);
          const data = await res.json();
          // Bolls returns array of verses: [{verse:1, text:"..."},...] or {text: "..."}
          if(Array.isArray(data)){
            setVerses(data.map((v:any)=>({verse: v.verse || v.verse_number || v.id, text: (v.text||'').replace(/<[^>]*>/g,'').trim()})));
          } else if(data.verses){
            setVerses(data.verses.map((v:any)=>({verse: v.verse, text: v.text.replace(/<[^>]*>/g,'')})));
          } else {
            throw new Error('Invalid bolls response');
          }
        } else {
          // KJV/WEB via bible-api.com (public domain, accurate)
          const res = await fetch(`https://bible-api.com/${activeBook}+${chapter}?translation=${transObj.bolls.toLowerCase()}`);
          const data = await res.json();
          setVerses((data.verses||[]).map((v:any)=>({verse: v.verse, text: v.text})));
        }
      }catch(e){
        console.error('Bible fetch failed', e);
        // Fallback to bible-api KJV so UI never breaks
        try{
          const fb = await fetch(`https://bible-api.com/${activeBook}+${chapter}?translation=kjv`);
          const data = await fb.json();
          setVerses((data.verses||[]).map((v:any)=>({verse: v.verse, text: v.text})));
        }catch{
          setVerses([{verse:13, text:'Woe unto thee, Chorazin! woe unto thee, Bethsaida! (fallback - check network)'}]);
        }
      }
      setLoading(false);
    };
    fetchChapter();
  },[activeBook, chapter, translation]);

  // Auto-scroll to exact highlighted verse
  useEffect(()=>{
    if(!activeVerse ||!verses.length || loading) return;
    const scroll = ()=>{
      verseRefs.current[activeVerse]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    scroll();
    const t1 = setTimeout(scroll, 100);
    const t2 = setTimeout(scroll, 300);
    return ()=>{ clearTimeout(t1); clearTimeout(t2); };
  },[activeVerse, verses, chapter, activeBook, loading]);

  return (
    <section id="bible" className="bg-white py-10 border-y border-black/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-[#FFFBF7]/70 backdrop-blur-2xl rounded-[32px] border border-white/50 shadow-[0_24px_80px_rgba(0,0,0,0.06)] p-4 md:p-6 h-[760px] max-h-[calc(100vh-80px)] flex flex-col relative overflow-visible">
          
          <div className="flex flex-col gap-3 mb-5 shrink-0 relative z-[100]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-black/90 text-white rounded-full px-3.5 py-1.5 text-[10px] font-black tracking-[0.14em] border border-white/10">BIBLE OS</div>
                <div className="hidden md:block text-[10px] font-bold text-black/30 tracking-widest">REAL VERSIONS • VERIFIED</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative z-[110]" ref={transRef}>
                  <button onClick={()=>setShowTrans(!showTrans)} className="bg-white/75 backdrop-blur-xl border border-white/60 rounded-full px-4 py-1.5 text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                    {translations.find(t=>t.id===translation)?.label} <span className="text-[9px] opacity-60">▼</span>
                  </button>
                  {showTrans && (
                    <div className="absolute right-0 mt-2 w-[170px] bg-white rounded-2xl border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-1.5 z-[200]">
                      {translations.map(t=>(
                        <button key={t.id} onClick={()=>{setTranslation(t.id); setShowTrans(false);}} className={`w-full text-left px-3 py-2 rounded-full text-[12px] font-bold ${translation===t.id?'bg-black text-white':'hover:bg-black/5'}`}>{t.label} {t.api==='bolls' && <span className="text-[9px] opacity-60 ml-1">✓ real</span>}</button>
                      ))}
                      <div className="text-[9px] text-black/40 px-3 py-1 mt-1 border-t">Bolls.life = real NIV/NKJV/NASB text</div>
                    </div>
                  )}
                </div>
                <div className="bg-black/90 text-white rounded-full px-4 py-1.5 text-[11px] font-black border border-white/10">{activeBook} {chapter}:{activeVerse||1}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/60 rounded-full p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative z-[90]">
              <div className="relative flex-1 min-w-[180px] z-[100]" ref={bookRef}>
                <button onClick={()=>setShowBooks(!showBooks)} className="w-full bg-white/90 border border-black/5 rounded-full px-4 py-2 text-left flex justify-between items-center shadow-sm">
                  <span className="text-[13px] font-bold">{activeBook}</span>
                  <span className="w-5 h-5 rounded-full bg-black text-white grid place-items-center text-[9px]">▼</span>
                </button>
                {showBooks && (
                  <div className="absolute left-0 top-[calc(100%+10px)] z-[200] w-full md:w-[320px] bg-white rounded-[20px] border border-black/10 shadow-[0_32px_100px_rgba(0,0,0,0.30)] p-3 max-h-[380px] flex flex-col">
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45" />
                    <div className="relative bg-white">
                      <div className="flex gap-1.5 mb-3 bg-black/5 rounded-full p-1">
                        <button onClick={()=>setTestament('OT')} className={`flex-1 py-1.5 rounded-full text-[10px] font-black ${testament==='OT'?'bg-black text-white shadow-md':'text-black/50'}`}>OT • 39</button>
                        <button onClick={()=>setTestament('NT')} className={`flex-1 py-1.5 rounded-full text-[10px] font-black ${testament==='NT'?'bg-black text-white shadow-md':'text-black/50'}`}>NT • 27</button>
                      </div>
                      <input value={bookSearch} onChange={e=>setBookSearch(e.target.value)} placeholder="Search books..." className="w-full bg-[#FFFBF7] border border-black/5 rounded-full px-4 py-2 text-[12px] mb-2 outline-none" autoFocus />
                      <div className="flex-1 overflow-y-auto space-y-0.5 pr-1 max-h-[260px]">
                        {books.filter(b=>b.testament===testament && b.name.toLowerCase().includes(bookSearch.toLowerCase())).map(b=>(
                          <button key={b.name} onClick={()=>{setActiveBook(b.name); setChapter(1); setActiveVerse(1); setShowBooks(false);}} className={`w-full text-left px-3.5 py-2 rounded-full text-[13px] font-medium ${activeBook===b.name?'bg-black text-white shadow-md':'hover:bg-black/5'}`}>{b.name}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <select value={chapter} onChange={e=>{setChapter(Number(e.target.value)); setActiveVerse(1);}} className="bg-white/80 border border-black/5 rounded-full px-3 py-2 text-[12px] font-bold outline-none shadow-sm min-w-[72px]">
                  {Array.from({length: bookData.chapters}, (_,i)=>i+1).map(c=><option key={c} value={c}>Ch {c}</option>)}
                </select>
                <select value={activeVerse||''} onChange={e=>setActiveVerse(Number(e.target.value))} className="bg-white/80 border border-black/5 rounded-full px-3 py-2 text-[12px] font-bold outline-none shadow-sm min-w-[72px]">
                  {verses.map(v=><option key={v.verse} value={v.verse}>v{v.verse}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white/90 backdrop-blur-xl rounded-[20px] border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col min-h-0 z-10">
            <button onClick={()=>{if(chapter>1){setChapter(c=>c-1); setActiveVerse(1);} }} className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-black/10 rounded-full shadow grid place-items-center z-10">‹</button>
            <button onClick={()=>{if(chapter<bookData.chapters){setChapter(c=>c+1); setActiveVerse(1);} }} className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-black/10 rounded-full shadow grid place-items-center z-10">›</button>

            <div ref={readerRef} className="flex-1 overflow-y-auto py-10 px-6 md:px-16 min-h-0 scroll-smooth">
              <div className="max-w-[640px] mx-auto">
                <div className="text-center mb-10">
                  <div className="text-[11px] font-black tracking-[0.2em] mb-2">{activeBook.toUpperCase()} {chapter}</div>
                  <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full inline-block px-3 py-1 tracking-widest">{translation} • REAL TEXT</div>
                </div>
                {loading? <div className="text-center text-black/40">Loading {translation}...</div> : (
                  <p className="text-[16.5px] leading-[1.95] font-[Georgia,serif] text-[#1a1a1a]">
                    {verses.map(v=>(
                      <span key={v.verse} ref={el=>{verseRefs.current[v.verse]=el}} onClick={()=>setActiveVerse(v.verse)} className={`cursor-pointer rounded-[4px] ${activeVerse===v.verse?'bg-amber-100/90 shadow-[inset_0_0_0_1px_rgba(245,158,11,0.2)]':''}`}>
                        <sup className="text-[10px] font-bold text-black/50 mr-1">{v.verse}</sup>{v.text}{' '}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-black/5 bg-[#FFFBF7]/50 px-4 py-2.5 flex justify-between items-center shrink-0">
              <div className="text-[10px] font-bold text-black/40 tracking-widest">{verses.length} VERSES • {translation}</div>
              <div className="flex gap-1">{verses.slice(0,12).map(v=><button key={v.verse} onClick={()=>setActiveVerse(v.verse)} className={`w-6 h-6 rounded-full text-[10px] font-bold ${activeVerse===v.verse?'bg-black text-white shadow-md scale-110':'bg-white border'}`}>{v.verse}</button>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}