const melvinUrl = new URL('../assets/melvin.png', import.meta.url).href;

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-[#FFFBF7] border-b border-black/5 h-[calc(100vh-104px)] min-h-[720px] max-h-[920px] flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[35%] left-[3%] text-[180px] font-black tracking-tighter text-black/[0.03] rotate-[-8deg] select-none leading-none">APOLOGETICS</div>
        <div className="absolute -top-10 -left-10 w-[500px] h-[500px] bg-violet-200 rounded-full blur-[100px] opacity-30" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-amber-100 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 py-4">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-stretch h-full">
          
          {/* LEFT - BIGGER TITLE */}
          <div className="flex flex-col justify-center">
            <div className="flex gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 bg-black text-white px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> APOLOGETICS • 1 PETER 3:15</span>
              <span className="bg-white border border-black/10 px-3 py-1.5 rounded-full text-[10px] font-bold text-black/50">ADUR • EST. 2018</span>
            </div>

            {/* INCREASED TITLE SIZE - VERY BIG */}
            <h1 className="font-black tracking-[-0.07em] leading-[0.78] text-[60px] sm:text-[72px] md:text-[88px] lg:text-[104px] xl:text-[124px]">
              Bring Your<br />
              <span className="relative inline-block">Doubts.
                <svg className="absolute -bottom-2 left-0 w-full h-[12px] md:h-[16px] text-amber-300" viewBox="0 0 200 10" preserveAspectRatio="none"><path d="M2 6 Q 60 1, 120 6 T 198 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.7"/></svg>
              </span><br />
              Faith is<br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent italic">Reasonable.</span>
            </h1>

            <div className="mt-4 flex gap-3 max-w-[500px]">
              <div className="w-[3px] bg-gradient-to-b from-violet-500 to-amber-400 rounded-full shrink-0" />
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-black/60">
                GospeLove is my personal apologetics ministry from Adur, Kerala. I help students, skeptics, and seekers wrestle with hard questions — <b className="text-black">Bible reliability, existence of God, resurrection</b> — with reason, evidence, and love.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <button className="bg-black text-white h-[44px] px-6 rounded-full font-bold text-[13px] shadow-lg">Ask a Hard Question →</button>
              <button className="bg-white border border-black/10 h-[44px] px-5 rounded-full font-bold text-[13px] flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-black text-white grid place-items-center text-[9px]">▶</span> Watch Latest Defense</button>
            </div>
          </div>

          {/* RIGHT - KEEP SIZE EXACTLY SAME AS BEFORE */}
          <div className="relative flex flex-col justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] -z-10"><div className="absolute inset-0 bg-gradient-to-br from-violet-300 via-blue-200 to-amber-200 rounded-full blur-[56px] opacity-60" /></div>
            <div className="absolute -top-2 -left-2 z-20 bg-black text-white rounded-xl px-3.5 py-2.5 shadow-xl rotate-[-2deg]"><div className="text-[8px] tracking-widest text-white/50 font-black">TODAY'S DEFENSE • LIVE</div><div className="text-[12px] font-bold flex items-center gap-1.5 mt-1"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> 500+ Answers • Online</div></div>

            <div className="bg-white rounded-[28px] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.18)] border border-black/5 w-full">
              <div className="rounded-[20px] bg-[#FFFBF7]/90 border border-black/[0.04] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-black/5 bg-white/60"><div className="text-[11px] font-black tracking-widest">DEFENSE LIBRARY</div><div className="flex gap-1.5"><span className="px-2 py-1 rounded-full bg-black text-white text-[9px] font-bold">All</span><span className="px-2 py-1 rounded-full bg-white border text-[9px] font-bold">Bible</span><span className="px-2 py-1 rounded-full bg-white border text-[9px] font-bold">God</span><span className="px-2 py-1 rounded-full bg-white border text-[9px] font-bold">Jesus</span></div></div>
                <div className="p-4 space-y-3">
                  <div className="bg-white rounded-2xl p-4 border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border-l-[3px] border-l-emerald-400"><div className="flex justify-between items-start"><div className="flex gap-3"><div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center font-bold">✓</div><div><div className="font-black text-[13px]">Is the Bible Reliable?</div><div className="text-[11px] text-black/50 mt-0.5">24,000 manuscripts • 99.5% accuracy • Archaeology</div></div></div><span className="text-[8px] font-black bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">VERIFIED</span></div><div className="mt-3 flex gap-2"><div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden"><div className="h-full w-[92%] bg-emerald-400 rounded-full" /></div><span className="text-[10px] font-bold text-black/40">92% Evidence</span></div></div>
                  <div className="bg-white rounded-2xl p-4 border border-black/5 shadow-sm border-l-[3px] border-l-amber-400 ml-2"><div className="flex justify-between"><div className="flex gap-3"><div className="w-9 h-9 rounded-xl bg-amber-50 grid place-items-center">◐</div><div><div className="font-black text-[13px]">Does God Exist?</div><div className="text-[11px] text-black/50">Kalam • Moral • Design • 5 rational arguments</div></div></div><span className="text-[8px] font-black bg-amber-50 text-amber-700 px-2 py-1 rounded-full">REASONED</span></div></div>
                  <div className="bg-white rounded-2xl p-4 border border-black/5 shadow-sm border-l-[3px] border-l-violet-400"><div className="flex justify-between"><div className="flex gap-3"><div className="w-9 h-9 rounded-xl bg-violet-50 grid place-items-center">♥</div><div><div className="font-black text-[13px]">Why Jesus Alone?</div><div className="text-[11px] text-black/50">Resurrection • 500 eyewitnesses • Prophecy</div></div></div><span className="text-[8px] font-black bg-violet-50 text-violet-700 px-2 py-1 rounded-full">PROVEN</span></div></div>
                  <div className="grid grid-cols-4 gap-2 pt-2"><div className="bg-white border border-black/5 rounded-xl p-2.5 text-center"><div className="font-black text-[16px]">24k+</div><div className="text-[9px] text-black/40 font-bold">MSS</div></div><div className="bg-white border border-black/5 rounded-xl p-2.5 text-center"><div className="font-black text-[16px]">500+</div><div className="text-[9px] text-black/40 font-bold">WITNESSES</div></div><div className="bg-white border border-black/5 rounded-xl p-2.5 text-center"><div className="font-black text-[16px]">5</div><div className="text-[9px] text-black/40 font-bold">ARGUMENTS</div></div><div className="bg-white border border-black/5 rounded-xl p-2.5 text-center"><div className="font-black text-[16px]">99.5%</div><div className="text-[9px] text-black/40 font-bold">ACCURACY</div></div></div>
                  <div className="pt-3 border-t border-black/5 space-y-2"><div className="flex justify-end"><div className="bg-black text-white text-[11px] px-3 py-2 rounded-2xl rounded-br-sm">Is faith blind?</div></div><div className="flex gap-2 items-start"><img src={melvinUrl} className="w-6 h-6 rounded-full object-cover" /><div className="bg-white border text-[11px] px-3 py-2 rounded-2xl rounded-bl-sm shadow-sm max-w-[80%] text-left">No, faith seeks understanding — Augustine. Let's look at evidence together.</div></div></div>
                  <button className="w-full mt-2 bg-black text-white h-10 rounded-full font-bold text-[12px]">Explore 500+ Defenses →</button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 right-4 bg-white border border-black/10 rounded-full px-3 py-1.5 shadow-md text-[10px] font-bold flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" /> Reason + Revelation</div>
          </div>
        </div>
      </div>
    </section>
  );
}