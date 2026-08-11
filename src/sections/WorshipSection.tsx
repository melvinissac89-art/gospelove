import { useState } from 'react';
import { songs } from '../content/songs';

export default function WorshipSection(){
  const [activeSong,setActiveSong]=useState(0);
  return (
<section id="songs" className="py-16 bg-[#FFFBF7]">
  <div className="max-w-[1280px] mx-auto px-6">
    <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
      <div>
        <div className="inline-flex bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-3 py-1 text-[10px] font-black tracking-widest">WORSHIP LAB - HOT</div>
        <h2 className="text-[40px] font-black mt-2">Sing with chords.</h2>
        <p className="text-black/50 text-[13px]">Transpose, change key, follow lyrics - built for worship teams</p>
      </div>
      <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full p-1">
        <button className="w-8 h-8 rounded-full bg-black/5 grid place-items-center">-</button>
        <div className="px-3 text-[12px] font-black">Transpose 0</div>
        <button className="w-8 h-8 rounded-full bg-black text-white grid place-items-center">+</button>
      </div>
    </div>
    <div className="grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-4 space-y-3">{songs.map((s,i)=><button key={i} onClick={()=>setActiveSong(i)} className={`w-full text-left p-4 rounded-[20px] border flex justify-between items-center transition ${activeSong===i?'bg-black text-white border-black shadow-lg':'bg-white border-black/5 hover:border-black/20'}`}><div><div className="font-bold text-[14px]">{s.title}</div><div className={`text-[12px] ${activeSong===i?'text-white/60':'text-black/50'}`}>{s.artist} - {s.bpm} BPM</div></div><div className={`px-2.5 py-1 rounded-full text-[10px] font-black ${activeSong===i?'bg-white text-black':'bg-black text-white'}`}>Key {s.key}</div></button>)}<div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-[20px] p-5 text-white"><div className="font-black">48 songs in library</div><div className="text-[12px] text-white/80">Including Malayalam originals - Add your own</div></div></div>
      <div className="lg:col-span-8 bg-white rounded-[24px] border border-black/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"><div className="flex justify-between"><div><h3 className="text-[24px] font-black">{songs[activeSong].title}</h3><div className="text-[13px] text-black/50 mt-1">{songs[activeSong].artist} - Key {songs[activeSong].key}</div></div><div className="flex gap-2"><span className="w-8 h-8 rounded-full bg-black/5 grid place-items-center text-[12px]">A+</span><span className="w-8 h-8 rounded-full bg-black/5 grid place-items-center">♥</span></div></div><pre className="mt-8 bg-[#FFFBF7] rounded-2xl p-6 font-mono text-[14px] leading-[2] whitespace-pre-wrap font-bold">{songs[activeSong].lyrics}</pre></div>
    </div>
  </div>
</section>
) }
