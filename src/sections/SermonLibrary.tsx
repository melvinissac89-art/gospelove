import { useState } from 'react';
import { sermons } from '../content/sermons';

export default function SermonLibrary(){
  const [filter,setFilter]=useState('All');
  const filteredSermons = filter==='All'? sermons : sermons.filter(s=>s.cat===filter);
  return (
<section id="sermons" className="bg-[#0A0A0A] text-white mt-16 rounded-t-[32px] py-20">
  <div className="max-w-[1280px] mx-auto px-6">
    <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
      <div><div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[11px] font-bold">Latest Sermons</div><h2 className="text-[44px] font-black mt-4 tracking-[-0.02em]">Truth that feels like home.</h2></div>
      <div className="flex flex-wrap gap-2">{['All','Love','Faith','Hope'].map(f=><button key={f} onClick={()=>setFilter(f)} className={`px-5 py-2.5 rounded-full text-[13px] font-bold border transition ${filter===f?'bg-white text-black border-white':'bg-white/10 border-white/10 text-white/60 hover:bg-white/20'}`}>{f}</button>)}</div>
    </div>
    <div className="grid md:grid-cols-4 gap-6">
      {filteredSermons.map((s,i)=>(
        <div key={i} className="rounded-[24px] overflow-hidden border border-white/10 bg-[#141414] group hover:border-white/20 transition">
          <div className={`h-[180px] bg-gradient-to-br ${s.grad} relative p-4`}>
            <div className="flex justify-between"><span className="bg-black/30 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest">{s.cat}</span><span className="bg-white text-black px-2.5 py-1 rounded-full text-[10px] font-bold">{s.time}</span></div>
            <div className="absolute left-4 bottom-4 w-11 h-11 bg-white rounded-full grid place-items-center text-black shadow-lg group-hover:scale-110 transition">▶</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"/>
          </div>
          <div className="p-5"><div className="font-bold text-[15px] leading-tight">{s.title}</div><div className="text-[12px] text-white/50 mt-1.5">{s.pastor} - {s.date}</div><button className="w-full mt-4 bg-white text-black rounded-full py-2.5 text-[12px] font-bold hover:bg-white/90 transition">Watch Now ↗</button></div>
        </div>
      ))}
    </div>
  </div>
</section>
) }
