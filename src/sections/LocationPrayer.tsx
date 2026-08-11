import { useState } from 'react';

export default function LocationPrayer(){
  const [prayer,setPrayer]=useState({name:'',phone:'',msg:''});
  return (
<section id="pray" className="bg-[#FFFBF7] py-16">
  <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-6">
    <div className="bg-white rounded-[28px] border border-black/5 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
      <div className="h-[380px] bg-gradient-to-br from-amber-100 via-rose-100 to-violet-100 grid place-items-center p-8 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)]"/>
        <div className="relative"><div className="w-14 h-14 bg-black text-white rounded-2xl grid place-items-center mx-auto text-xl shadow-lg">📍</div><div className="font-black mt-4 text-[16px]">Adur, Kerala 691552</div><div className="text-[12px] text-black/50 mt-1">GospeLove Main Campus - 10 AM Sundays</div><div className="mt-4 bg-white border border-black/5 rounded-full inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold shadow-sm"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/>Open for prayer - 9 AM - 6 PM</div></div>
      </div>
      <div className="p-5 flex gap-3"><button className="bg-black text-white px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2">📍 Open in Maps</button><button className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-[13px] font-bold">💬 WhatsApp Us</button></div>
    </div>
    <div className="bg-white rounded-[28px] border border-black/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
      <h3 className="text-[30px] font-black leading-[0.9]">We'd love to pray with you.</h3><p className="text-[13px] text-black/50 mt-3 leading-relaxed">New here? Need prayer? Want to volunteer? Leave a note - our team replies within a day.</p>
      <div className="mt-7 space-y-5">
        <div><label className="text-[11px] font-black tracking-widest text-black/40">YOUR NAME</label><input value={prayer.name} onChange={e=>setPrayer({...prayer,name:e.target.value})} placeholder="John Thomas" className="w-full mt-2 bg-[#FFFBF7] border border-black/5 rounded-xl px-4 py-3.5 text-[14px] outline-none focus:border-violet-300 focus:bg-white transition"/></div>
        <div><label className="text-[11px] font-black tracking-widest text-black/40">PHONE / WHATSAPP</label><input value={prayer.phone} onChange={e=>setPrayer({...prayer,phone:e.target.value})} placeholder="+91 98xxx xxxxx" className="w-full mt-2 bg-[#FFFBF7] border border-black/5 rounded-xl px-4 py-3.5 text-[14px] outline-none focus:border-violet-300 focus:bg-white transition"/></div>
        <div><label className="text-[11px] font-black tracking-widest text-black/40">HOW CAN WE PRAY / HELP?</label><textarea value={prayer.msg} onChange={e=>setPrayer({...prayer,msg:e.target.value})} placeholder="Share your prayer request or message..." rows={4} className="w-full mt-2 bg-[#FFFBF7] border border-black/5 rounded-xl px-4 py-3.5 text-[14px] outline-none focus:border-violet-300 focus:bg-white transition resize-none"/></div>
        <button onClick={()=>{if(prayer.name){alert('Prayer request sent! Our team will reply within a day.'); setPrayer({name:'',phone:'',msg:''})}}} className="w-full bg-black text-white rounded-full py-3.5 font-bold text-[14px] hover:bg-black/90 transition">Send Message →</button>
        <div className="flex flex-wrap gap-4 text-[12px] text-black/40 pt-2"><span>📞 +91 98xxx xxxxx</span><span>✉️ hello@gospe.love</span></div>
      </div>
    </div>
  </div>
</section>
) }
