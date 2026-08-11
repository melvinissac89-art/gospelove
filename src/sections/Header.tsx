export default function Header(){ return <>
<div className="w-full bg-gradient-to-r from-amber-400 via-orange-500 to-violet-600 text-white text-[11px] font-bold tracking-widest text-center py-2 flex items-center justify-center gap-2">
  <span className="w-2 h-2 bg-white rounded-full animate-pulse inline-block"></span>
  LIVE - THIS SUNDAY 10:00 AM IST - Worship at Adur & Online - Join Us
</div>
<nav className="sticky top-0 z-50 bg-[#FFFBF7]/80 backdrop-blur-xl border-b border-black/5">
  <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-black text-white grid place-items-center rounded-lg font-black">G</div>
      <div className="font-black text-[15px] leading-none">GospeLove <span className="text-[#EC4899]">♥</span>
        <div className="text-[8px] tracking-widest text-black/40">LOVE SHARED. LIVES TRANSFORMED.</div>
      </div>
    </div>
    <div className="hidden md:flex gap-6 text-[13px] font-semibold text-black/60">
      <a href="#bible">Bible</a><a href="#songs">Songs</a><a href="#sermons">Sermons</a><a href="#pray">Prayer</a>
    </div>
    <button className="bg-black text-white px-4 py-2 rounded-full text-[12px] font-bold flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> Watch Live
    </button>
  </div>
</nav>
</> }
