import { Shield, Brain, Heart, MessageCircle, Sparkles, Quote } from 'lucide-react';
import melvinPhoto from '../assets/melvin.png'; // save your photo as src/assets/melvin.png

export default function About() {
  return (
    <section className="relative bg-white border-y border-black/5 py-20 md:py-28 overflow-hidden">
      {/* --- EMBELLISHMENTS --- */}
      <div className="absolute top-[-80px] right-[-80px] w-[600px] h-[600px] bg-violet-100 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-amber-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      
      {/* Large faded quote watermark */}
      <div className="absolute top-10 left-6 text-[160px] md:text-[200px] leading-none font-black text-black/[0.03] select-none pointer-events-none">"</div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[11px] font-black tracking-[0.18em]">PERSONAL MINISTRY</span>
                <span className="w-[1px] h-3 bg-white/20" />
                <span className="text-[11px] font-bold tracking-widest text-white/70">APOLOGETICS • ADUR</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-black tracking-widest">
                <Sparkles size={12} /> REASON + REVELATION
              </span>
            </div>

            <h2 className="font-black leading-[0.85] tracking-[-0.04em] text-[42px] md:text-[60px]">
              Faith is not blind.<br />
              <span className="relative inline-block">
                <span className="relative z-10 text-black/20">Love is not vague.</span>
                {/* scribble underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-black/10" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2 8 Q 50 2, 100 8 T 198 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
                GospeLove defends both.
              </span>
            </h2>

            <p className="text-black/60 mt-6 max-w-[580px] text-[16px] leading-[1.7]">
              GospeLove started as my personal wrestle with hard questions —{' '}
              <span className="font-bold text-black">Is the Bible reliable? Does God exist? Why Jesus alone?</span>{' '}
              Today it is a personal apologetics ministry from Adur, Kerala, helping students, skeptics, and seekers think clearly and believe deeply. Not shouting matches, but{' '}
              <span className="font-bold text-violet-600">loving, reasoned answers for honest doubts.</span>
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1.5 rounded-full bg-[#FFFBF7] border border-black/10 text-[11px] font-bold tracking-widest">DEFENDING FAITH</span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFFBF7] border border-black/10 text-[11px] font-bold tracking-widest">EQUIPPING SAINTS</span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFFBF7] border border-black/10 text-[11px] font-bold tracking-widest">LOVING SKEPTICS</span>
            </div>

            <div className="flex gap-8 mt-10">
              <div><div className="font-black text-[30px] leading-none">500+</div><div className="text-[11px] tracking-widest font-bold text-black/40 mt-1">QUESTIONS ANSWERED</div></div>
              <div className="w-[1px] bg-black/10" />
              <div><div className="font-black text-[30px] leading-none">1K+</div><div className="text-[11px] tracking-widest font-bold text-black/40 mt-1">STUDENTS EQUIPPED</div></div>
              <div className="w-[1px] bg-black/10" />
              <div><div className="font-black text-[30px] leading-none">5+</div><div className="text-[11px] tracking-widest font-bold text-black/40 mt-1">YEARS STUDY</div></div>
            </div>
          </div>

          {/* RIGHT PHOTO */}
          <div className="md:col-span-5 relative">
            {/* floating accent dots */}
            <div className="absolute -top-6 -left-6 w-3 h-3 bg-violet-400 rounded-full blur-[1px] animate-pulse" />
            <div className="absolute -bottom-10 right-10 w-2 h-2 bg-amber-400 rounded-full" />
            <div className="absolute top-20 -right-4 w-4 h-4 bg-emerald-200 rounded-full opacity-60" />

            <div className="relative mx-auto w-[360px] max-w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 rounded-[40px] rotate-3 scale-[0.96] shadow-[0_20px_60px_rgba(124,58,237,0.25)]" />
              
              <div className="relative bg-white rounded-[36px] p-2.5 shadow-[0_25px_80px_rgba(0,0,0,0.18)] border border-black/5">
                <div className="rounded-[26px] overflow-hidden aspect-square bg-gray-100 relative">
                  <img src={melvinPhoto} alt="Melvin Issac - GospeLove Apologetics" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-3"><Quote size={14} className="text-violet-600" /><Quote size={14} className="text-violet-600 opacity-50" /></div>
                  <div className="font-bold text-[16.5px] leading-[1.35]">I don't argue people into heaven. I clear the obstacles so they can see Jesus clearly.</div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-9 h-9 rounded-full bg-black text-white grid place-items-center font-black text-[11px]">MI</div>
                    <div><div className="text-[13px] font-bold leading-none">Melvin Issac</div><div className="text-[11px] text-black/50 mt-1">Apologetics • GospeLove • Adur</div></div>
                    <span className="ml-auto w-7 h-7 rounded-full bg-violet-50 grid place-items-center"><MessageCircle size={14} className="text-violet-600" /></span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-black text-white px-4 py-2.5 rounded-full text-[11px] font-black tracking-widest shadow-xl">
                1 PETER 3:15
              </div>
              <div className="absolute -top-4 -right-4 bg-white border border-black/10 px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-[11px] font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Adur, Kerala
              </div>
            </div>
          </div>
        </div>

        {/* --- EXTRA TINY CARDS ROW --- */}
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="group relative bg-white border border-black/5 rounded-[20px] p-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 grid place-items-center"><Shield size={18} /></div>
            <div className="font-black text-[13px] mt-3">Is the Bible Reliable?</div>
            <div className="text-[11px] text-black/50 mt-1 leading-relaxed">24k manuscripts • 99.5% accuracy • Archaeology</div>
            <div className="mt-3 text-[10px] font-black tracking-widest text-amber-700">EXPLORE →</div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white border border-black/5 rounded-[20px] p-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all">
            <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-700 grid place-items-center"><Brain size={18} /></div>
            <div className="font-black text-[13px] mt-3">Does God Exist?</div>
            <div className="text-[11px] text-black/50 mt-1 leading-relaxed">Kalam • Moral • Design • 5 arguments</div>
            <div className="mt-3 text-[10px] font-black tracking-widest text-violet-700">LEARN →</div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white border border-black/5 rounded-[20px] p-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center"><Heart size={18} /></div>
            <div className="font-black text-[13px] mt-3">Why Jesus Alone?</div>
            <div className="text-[11px] text-black/50 mt-1 leading-relaxed">Resurrection • Eyewitness • Prophecy</div>
            <div className="mt-3 text-[10px] font-black tracking-widest text-emerald-700">SEE EVIDENCE →</div>
          </div>

          {/* Card 4 - CTA */}
          <div className="group relative bg-black text-white rounded-[20px] p-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all">
            <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center"><MessageCircle size={18} /></div>
            <div className="font-black text-[13px] mt-3">Ask Me Anything</div>
            <div className="text-[11px] text-white/50 mt-1 leading-relaxed">DMs open • Fridays 8PM IST Live Q&A</div>
            <div className="mt-3 text-[10px] font-black tracking-widest text-white">ASK NOW →</div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}