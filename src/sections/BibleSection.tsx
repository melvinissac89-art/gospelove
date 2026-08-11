import { useState, useEffect, useRef } from 'react';
import { books } from '../content/bible';

interface Verse { verse: number; text: string; }

export default function BibleSection(){
  const [activeBook, setActiveBook] = useState('Luke');
  const [chapter, setChapter] = useState(10);
  const [activeVerse, setActiveVerse] = useState<number|null>(13);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(false);
  const [translation, setTranslation] = useState('kjv');
  const [showBooks, setShowBooks] = useState(false);
  const [showTrans, setShowTrans] = useState(false);
  const [bookSearch, setBookSearch] = useState('');
  const [testament, setTestament] = useState<'OT' | 'NT'>('NT');
  const bookRef = useRef<HTMLDivElement>(null);
  const transRef = useRef<HTMLDivElement>(null);
  const verseRefs = useRef<{[k:number]: HTMLSpanElement | null}>({});
  const readerRef = useRef<HTMLDivElement>(null);

  const bookData = books.find(b=>b.name===activeBook)!;
  const translations = [
    { id: 'web', label: 'WEB' }, { id: 'kjv', label: 'KJV' },
    { id: 'nasb', label: 'NASB 2020' }, { id: 'niv', label: 'NIV' }, { id: 'nkjv', label: 'NKJV' },
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
      try{
        const apiTrans = ['web','kjv'].includes(translation)? translation : 'web';
        const res = await fetch(`https://bible-api.com/${activeBook}+${chapter}?translation=${apiTrans}`);
        const data = await res.json();
        setVerses(data.verses || [{verse:1, text:data.text}]);
      }catch{ 
        setVerses(Array.from({length:42},(_,i)=>({verse:i+1, text:`Verse ${i+1} text for ${activeBook} ${chapter}. Sample text to demonstrate scrolling to highlighted verse.`})));
      }
      setLoading(false);
    };
    fetchChapter();
  },[activeBook, chapter, translation]);

  // FIX: Auto-scroll to exact highlighted verse whenever book/chapter/verse changes
  useEffect(()=>{
    if(!activeVerse || !verses.length || loading) return;
    // Wait for DOM to render verses, then scroll
    const scrollToVerse = ()=>{
      const el = verseRefs.current[activeVerse];
      if(el && readerRef.current){
        el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }
    };
    // Immediate + delayed to ensure render
    scrollToVerse();
    const t1 = setTimeout(scrollToVerse, 80);
    const t2 = setTimeout(scrollToVerse, 250);
    return ()=>{ clearTimeout(t1); clearTimeout(t2); };
  },[activeVerse, verses, chapter, activeBook, loading]);

  return (
    <section id="bible" className="bg-white py-10 border-y border-black/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-[#FFFBF7]/70 backdrop-blur-2xl rounded-[32px] border border-white/50 shadow-[0_24px_80px_rgba(0,0,0,0.06)] p-4 md:p-6 h-[760px] max-h-[calc(100vh-80px)] flex flex-col relative overflow-visible">
          
          <div className="flex flex-col gap-3 mb-5 shrink-0 relative z-[100]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-black/90 backdrop-blur-xl text-white rounded-full px-3.5 py-1.5 text-[10px] font-black tracking-[0.14em] border border-white/10">BIBLE OS</div>
                <div className="hidden md:block text-[10px] font-bold text-black/30 tracking-widest">READ • MEDITATE • LIVE</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative z-[110]" ref={transRef}>
                  <button onClick={()=>setShowTrans(!showTrans)} className="bg-white/75 backdrop-blur-xl border border-white/60 rounded-full px-4 py-1.5 text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                    {translations.find(t=>t.id===translation)?.label} <span className="text-[9px] opacity-60">▼</span>
                  </button>
                  {showTrans && (
                    <div className="absolute right-0 mt-2 w-[160px] bg-white rounded-2xl border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-1.5 z-[200]">
                      {translations.map(t=>(
                        <button key={t.id} onClick={()=>{setTranslation(t.id); setShowTrans(false);}} className={`w-full text-left px-3 py-2 rounded-full text-[12px] font-bold ${translation===t.id?'bg-black text-white':'hover:bg-black/5'}`}>{t.label}</button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="bg-black/90 backdrop-blur-xl text-white rounded-full px-4 py-1.5 text-[11px] font-black border border-white/10">{activeBook} {chapter}:{activeVerse||1}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/60 rounded-full p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative z-[90]">
              <div className="relative flex-1 min-w-[180px] z-[100]" ref={bookRef}>
                <button onClick={()=>setShowBooks(!showBooks)} className="w-full bg-white/90 border border-black/5 rounded-full px-4 py-2 text-left flex justify-between items-center shadow-sm">
                  <span className="text-[13px] font-bold">{activeBook}</span>
                  <span className="w-5 h-5 rounded-full bg-black text-white grid place-items-center text-[9px]">▼</span>
                </button>
                {showBooks && (
                  <div className="absolute left-0 top-[calc(100%+10px)] z-[200] w-full md:w-[320px] bg-white rounded-[20px] border border-black/10 shadow-[0_32px_100px_rgba(0,0,0,0.30),0_8px_24px_rgba(0,0,0,0.15)] p-3 max-h-[380px] flex flex-col">
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45" />
                    <div className="relative bg-white rounded-[16px]">
                      <div className="flex gap-1.5 mb-3 bg-black/5 rounded-full p-1">
                        <button onClick={()=>setTestament('OT')} className={`flex-1 py-1.5 rounded-full text-[10px] font-black tracking-widest ${testament==='OT'?'bg-black text-white shadow-md':'text-black/50'}`}>OT • 39</button>
                        <button onClick={()=>setTestament('NT')} className={`flex-1 py-1.5 rounded-full text-[10px] font-black tracking-widest ${testament==='NT'?'bg-black text-white shadow-md':'text-black/50'}`}>NT • 27</button>
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
                <select value={chapter} onChange={e=>{const c=Number(e.target.value); setChapter(c); setActiveVerse(1);}} className="bg-white/80 border border-black/5 rounded-full px-3 py-2 text-[12px] font-bold outline-none shadow-sm min-w-[72px]">
                  {Array.from({length: bookData.chapters}, (_,i)=>i+1).map(c=><option key={c} value={c}>Ch {c}</option>)}
                </select>
                <select value={activeVerse||''} onChange={e=>{const v=Number(e.target.value); setActiveVerse(v);}} className="bg-white/80 border border-black/5 rounded-full px-3 py-2 text-[12px] font-bold outline-none shadow-sm min-w-[72px]">
                  {verses.map(v=><option key={v.verse} value={v.verse}>v{v.verse}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* READER */}
          <div className="flex-1 bg-white/90 backdrop-blur-xl rounded-[20px] border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col min-h-0 z-10">
            <button onClick={()=>{if(chapter>1){setChapter(c=>c-1); setActiveVerse(1);} }} className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-black/10 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] grid place-items-center z-10">‹</button>
            <button onClick={()=>{if(chapter<bookData.chapters){setChapter(c=>c+1); setActiveVerse(1);} }} className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-black/10 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] grid place-items-center z-10">›</button>

            <div ref={readerRef} className="flex-1 overflow-y-auto py-10 px-6 md:px-16 min-h-0 scroll-smooth">
              <div className="max-w-[640px] mx-auto">
                <div className="text-center mb-10">
                  <div className="text-[11px] font-black tracking-[0.2em] mb-8">{activeBook.toUpperCase()} {chapter}</div>
                  <h2 className="text-[17px] font-bold">The Covenant of Faith</h2>
                </div>
                {loading? <div className="text-center text-black/40">Loading...</div> : (
                  <p className="text-[16.5px] leading-[1.95] font-[Georgia,serif] text-[#1a1a1a]">
                    {verses.map(v=>(
                      <span 
                        key={v.verse} 
                        ref={el=>{verseRefs.current[v.verse]=el}}
                        onClick={()=>setActiveVerse(v.verse)} 
                        className={`cursor-pointer rounded-[4px] transition-all ${activeVerse===v.verse?'bg-amber-100/90 shadow-[inset_0_0_0_1px_rgba(245,158,11,0.15)]':''}`}
                      >
                        <sup className="text-[10px] font-bold text-black/50 mr-1 select-none">{v.verse}</sup>{v.text}{' '}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-black/5 bg-[#FFFBF7]/50 backdrop-blur-xl px-4 py-2.5 flex justify-between items-center shrink-0">
              <div className="text-[10px] font-bold text-black/40 tracking-widest">{verses.length} VERSES</div>
              <div className="flex gap-1 flex-wrap max-w-[70%] justify-end">
                {verses.slice(0,14).map(v=>(
                  <button key={v.verse} onClick={()=>setActiveVerse(v.verse)} className={`w-6 h-6 rounded-full text-[10px] font-bold transition ${activeVerse===v.verse?'bg-black text-white shadow-md scale-110':'bg-white border border-black/10 hover:border-black/20'}`}>{v.verse}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}