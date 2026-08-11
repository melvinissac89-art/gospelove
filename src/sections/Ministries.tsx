import { ministries } from '../content/ministries';

export default function Ministries(){ return (
<section className="py-16">
  <div className="max-w-[1280px] mx-auto px-6">
    <div className="flex flex-wrap justify-between gap-4 mb-8">
      <h2 className="text-[44px] font-black tracking-[-0.02em]">Love has many languages.</h2>
      <p className="text-[13px] text-black/50 max-w-[320px]">From kids to villages, worship to prayer - same gospel, different doors.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-5">
      {ministries.map(c=>(
        <div key={c.title} className={`${c.color} border rounded-[24px] p-6 relative hover:shadow-lg transition`}>
          <div className="flex justify-between items-start">
            <div className={`w-10 h-10 ${c.icon} rounded-xl grid place-items-center text-white font-bold`}>♥</div>
            <div className="text-[18px]">{c.emoji}</div>
          </div>
          <div className="font-black text-[19px] mt-5">{c.title}</div>
          <div className="text-[13px] text-black/60 mt-2 leading-relaxed">{c.desc}</div>
          <div className="mt-5 text-[12px] font-bold flex items-center gap-1">Learn more →</div>
        </div>
      ))}
    </div>
  </div>
</section>
) }
