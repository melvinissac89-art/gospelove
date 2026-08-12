import { useState } from 'react';

const realSermons = [
  {
    id: "PTmeWuGY7Oc",
    title: "GOD HOLDS YOU CLOSE FOREVER",
    cat: "Love",
    time: "SHORT",
    pastor: "GospeLove",
    date: "Shorts",
    youtubeId: "PTmeWuGY7Oc",
    link: "https://youtube.com/shorts/PTmeWuGY7Oc",
    thumbnail: "https://img.youtube.com/vi/PTmeWuGY7Oc/hqdefault.jpg"
  },
  {
    id: "WaXxchIcjqc",
    title: "GOD WILL FIGHT FOR YOU",
    cat: "Faith",
    time: "SHORT",
    pastor: "GospeLove",
    date: "Shorts",
    youtubeId: "WaXxchIcjqc",
    link: "https://youtube.com/shorts/WaXxchIcjqc",
    thumbnail: "https://img.youtube.com/vi/WaXxchIcjqc/hqdefault.jpg"
  },
  {
    id: "d7SU6wXklUM",
    title: "WHEN GOD STEPS IN",
    cat: "Hope",
    time: "SHORT",
    pastor: "GospeLove",
    date: "Shorts",
    youtubeId: "d7SU6wXklUM",
    link: "https://youtube.com/shorts/d7SU6wXklUM",
    thumbnail: "https://img.youtube.com/vi/d7SU6wXklUM/hqdefault.jpg"
  },
  {
    id: "qlN_DtyU2kw",
    title: "What is BIBLE? Part A.1",
    cat: "Bible",
    time: "SHORT",
    pastor: "GospeLove",
    date: "Series",
    youtubeId: "qlN_DtyU2kw",
    link: "https://youtube.com/shorts/qlN_DtyU2kw",
    thumbnail: "https://img.youtube.com/vi/qlN_DtyU2kw/hqdefault.jpg"
  }
];

export default function SermonLibrary(){
  const [filter,setFilter]=useState('All');
  const filteredSermons = filter==='All' ? realSermons : realSermons.filter(s=>s.cat===filter);

  return (
<section id="sermons" className="bg-[#0A0A0A] text-white mt-16 rounded-t-[32px] py-20">
  <div className="max-w-[1280px] mx-auto px-6">
    <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
      <div><div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[11px] font-bold">Latest Sermons</div><h2 className="text-[44px] font-black mt-4 tracking-[-0.02em] leading-[0.9]">Truth that feels like home.</h2></div>
      <div className="flex flex-wrap gap-2">{['All','Love','Faith','Hope','Bible'].map(f=><button key={f} onClick={()=>setFilter(f)} className={`px-5 py-2.5 rounded-full text-[13px] font-bold border transition ${filter===f?'bg-white text-black border-white':'bg-white/10 border-white/10 text-white/60 hover:bg-white/20'}`}>{f}</button>)}</div>
    </div>
    <div className="grid md:grid-cols-4 gap-6">
      {filteredSermons.map((s)=>(
        <div key={s.id} className="rounded-[24px] overflow-hidden border border-white/10 bg-[#141414] group hover:border-white/20 transition flex flex-col">
          {/* NORMAL THUMBNAIL - NO COLOR TINT */}
          <div className="h-[220px] relative overflow-hidden bg-black cursor-pointer" onClick={()=>window.open(s.link, '_blank')}>
            {/* Real YouTube image - normal looking */}
            <img 
              src={s.thumbnail} 
              alt={s.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
            />
            {/* Very light gradient only for text readability, not color tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
            
            {/* Top pills */}
            <div className="absolute top-3 left-3 right-3 flex justify-between z-10">
              <span className="bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest border border-white/10">{s.cat.toUpperCase()}</span>
              <span className="bg-white text-black px-2.5 py-1 rounded-full text-[10px] font-bold">{s.time}</span>
            </div>
            
            {/* Play button */}
            <div className="absolute left-4 bottom-4 w-11 h-11 bg-white rounded-full grid place-items-center text-black shadow-lg group-hover:scale-110 transition z-10">
              <span className="ml-[2px] text-[14px]">▶</span>
            </div>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            <div className="font-bold text-[15px] leading-tight line-clamp-2 min-h-[38px]">{s.title}</div>
            <div className="text-[12px] text-white/50 mt-1.5">{s.pastor} • {s.date}</div>
            <button onClick={()=>window.open(s.link, '_blank')} className="w-full mt-4 bg-white text-black rounded-full py-2.5 text-[12px] font-bold hover:bg-white/90 transition">Watch Now ↗</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}