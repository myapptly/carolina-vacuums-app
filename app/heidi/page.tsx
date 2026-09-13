'use client';

import { useState } from 'react';

const PHONE = '3367686068';
const PHONE_DISPLAY = '(336) 768-6068';
const EMAIL = 'carolinavacs02@gmail.com';
const ADDRESS = '1025 Hanes Mall Blvd., Winston-Salem, NC';
const WEBSITE = 'https://carolinavacuums.com';
const CARD_URL = 'https://carolina-vacuums-app.vercel.app/heidi';

export default function HeidiJoyceCard() {
  const [status, setStatus] = useState('');

  async function shareCard() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Heidi Joyce | Carolina Vacuums and More',
          text: 'Heidi Joyce, Store Manager at Carolina Vacuums and More in Winston-Salem.',
          url: CARD_URL,
        });
      } else {
        await navigator.clipboard.writeText(CARD_URL);
        setStatus('Card link copied!');
      }
    } catch {}
  }

  function saveContact() {
    const vcard = [
      'BEGIN:VCARD', 'VERSION:3.0', 'N:Joyce;Heidi;;;', 'FN:Heidi Joyce',
      'ORG:Carolina Vacuums and More', 'TITLE:Store Manager',
      `TEL;TYPE=WORK,VOICE:${PHONE_DISPLAY}`, `EMAIL;TYPE=WORK:${EMAIL}`,
      'ADR;TYPE=WORK:;;1025 Hanes Mall Blvd.;Winston-Salem;NC;;;',
      `URL:${WEBSITE}`, 'END:VCARD',
    ].join('\r\n');
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Heidi-Joyce-Carolina-Vacuums.vcf';
    a.click();
    URL.revokeObjectURL(url);
  }

  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(CARD_URL)}`;
  const buttonBase = 'flex min-w-0 items-center rounded-[14px] px-3 shadow-sm active:scale-[0.99]';

  return (
    <main className="h-[100dvh] overflow-hidden bg-[#eaf4fb] text-[#0a315e]">
      <section className="relative mx-auto h-[100dvh] w-full max-w-[700px] overflow-hidden bg-white shadow-2xl">
        <header className="relative h-[14.5%] overflow-hidden bg-gradient-to-b from-[#f6fbff] via-white to-[#edf7fd] px-[5%] pt-[2.3%]">
          <div className="absolute inset-x-0 bottom-0 h-[26%] bg-[#5da9dc] [clip-path:polygon(0_34%,100%_65%,100%_100%,0_100%)]" />
          <div className="absolute inset-x-0 bottom-[4%] h-[13%] bg-[#b9def3] [clip-path:polygon(0_12%,100%_54%,100%_100%,0_72%)]" />
          <img src="/iconcv.png" alt="Carolina Vacuums and More" className="absolute left-[5%] top-[10%] h-[58%] w-[40%] object-contain" />
          <div className="absolute right-[5%] top-[10%] w-[47%] text-right">
            <div className="font-serif text-[clamp(17px,4.7vw,34px)] italic leading-[0.95] text-[#0c4b84]">A Cleaner Home.<br/>A Healthier You.</div>
            <div className="mt-[4%] text-[clamp(7px,1.85vw,13px)] font-black tracking-[0.18em] text-[#0b3966]">SALES • SERVICE • PARTS • SUPPLIES</div>
          </div>
        </header>
        <section className="relative h-[24.5%] px-[4.5%] py-[2.2%]">
          <img src="/heidi-card.jpg" alt="Heidi Joyce" className="absolute left-[4.5%] top-[6%] h-[88%] w-[30%] rounded-[20px] border-[4px] border-white object-cover object-[center_20%] shadow-[0_10px_28px_rgba(16,67,110,0.18)] ring-1 ring-[#a9cbe0]" />
          <div className="absolute left-[37%] top-[8%] w-[42%]">
            <h1 className="text-[clamp(25px,6vw,46px)] font-black leading-[0.93] tracking-[-0.035em] text-[#073365]">Heidi Joyce</h1>
            <p className="mt-[3%] text-[clamp(16px,4vw,29px)] font-bold leading-none text-[#1874ad]">Store Manager</p>
            <p className="mt-[4%] text-[clamp(11px,2.8vw,20px)] font-bold leading-tight">Carolina Vacuums and More</p>
            <div className="mt-[4.5%] h-[3px] w-[52%] rounded bg-[#4fa770]" />
            <a href={`tel:${PHONE}`} className="mt-[4%] block text-[clamp(15px,3.8vw,27px)] font-semibold">☎ &nbsp;{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-[2.5%] block text-[clamp(10px,2.55vw,18px)]">✉ &nbsp;{EMAIL}</a>
            <a href={directions} target="_blank" rel="noreferrer" className="mt-[2.5%] block text-[clamp(10px,2.5vw,18px)] leading-tight text-[#214c73]">📍 &nbsp;1025 Hanes Mall Blvd.<br/><span className="pl-[9%]">Winston-Salem, NC</span></a>
          </div>
          <div className="absolute right-[2.5%] top-[24%] w-[17%] border-l border-[#bad2e1] pl-[2%] text-center font-serif text-[clamp(10px,3vw,22px)] italic leading-[1.03] text-[#07518d]">
            Local People.<br/>Real Service.<br/>A Cleaner,<br/>Healthier You.
            <div className="mx-auto mt-[9%] h-[3px] w-[72%] -rotate-[12deg] bg-[#4fa770]" />
          </div>
        </section>
        <section className="grid h-[22.5%] grid-cols-2 grid-rows-3 gap-x-[2.2%] gap-y-[5%] px-[4.3%] py-[1.4%]">
          <a href={`tel:${PHONE}`} className={`${buttonBase} bg-gradient-to-r from-[#075a98] to-[#0e6dab] text-white`}><span className="mr-[5%] text-[clamp(22px,5.5vw,42px)]">☎</span><span><b className="block text-[clamp(13px,3.25vw,24px)]">Call Heidi</b><small className="block text-[clamp(9px,2.5vw,18px)] font-normal">{PHONE_DISPLAY}</small></span></a>
          <a href={`sms:${PHONE}`} className={`${buttonBase} bg-gradient-to-r from-[#2587c5] to-[#309add] text-white`}><span className="mr-[5%] text-[clamp(22px,5.5vw,42px)]">💬</span><span><b className="block text-[clamp(13px,3.25vw,24px)]">Text Heidi</b><small className="block text-[clamp(9px,2.5vw,18px)] font-normal">{PHONE_DISPLAY}</small></span></a>
          <a href={`mailto:${EMAIL}`} className={`${buttonBase} bg-gradient-to-r from-[#0f65a1] to-[#177bb8] text-white`}><span className="mr-[5%] text-[clamp(22px,5.5vw,42px)]">✉</span><b className="text-[clamp(13px,3.25vw,24px)]">Email Heidi</b></a>
          <a href={WEBSITE} target="_blank" rel="noreferrer" className={`${buttonBase} bg-gradient-to-r from-[#136da8] to-[#0f64a0] text-white`}><span className="mr-[5%] text-[clamp(22px,5.5vw,42px)]">◎</span><span><b className="block text-[clamp(13px,3.25vw,24px)]">Visit Our Website</b><small className="block text-[clamp(9px,2.5vw,18px)] font-normal">carolinavacuums.com</small></span></a>
          <a href={directions} target="_blank" rel="noreferrer" className={`${buttonBase} bg-gradient-to-r from-[#2c8dca] to-[#3aa3de] text-white`}><span className="mr-[5%] text-[clamp(22px,5.5vw,42px)]">📍</span><span><b className="block text-[clamp(13px,3.25vw,24px)]">Get Directions</b><small className="block text-[clamp(9px,2.5vw,18px)] font-normal">1025 Hanes Mall Blvd.</small></span></a>
          <button onClick={saveContact} className={`${buttonBase} bg-[#dcecf8] text-[#073365]`}><span className="mr-[5%] text-[clamp(22px,5.5vw,42px)]">👤+</span><span className="text-left"><b className="block text-[clamp(13px,3.25vw,24px)]">Save to Contacts</b><small className="block text-[clamp(9px,2.5vw,18px)] font-normal">Add Heidi to your phone</small></span></button>
        </section>
        <section className="relative h-[17%] border-t border-[#d6e6f0] px-[4.5%] py-[2%]">
          <button onClick={shareCard} className="absolute left-[4.5%] top-[11%] h-[77%] w-[21.5%]"><img src={qrUrl} alt="QR code for Heidi's digital card" className="h-full w-full rounded-[9px] border-[3px] border-[#0b548d] bg-white p-[4%]" /></button>
          <button onClick={shareCard} className="absolute left-[28%] top-[13%] w-[24%] text-left"><div className="font-serif text-[clamp(18px,4.7vw,34px)] italic leading-none text-[#07558f]">↩ Scan Me!</div><div className="mt-[11%] text-[clamp(9px,2.55vw,18px)] leading-tight">Open my digital<br/>business card and<br/>share it with anyone.</div></button>
          <div className="absolute left-[54%] top-[14%] h-[72%] border-l border-[#bdd4e3]" />
          <div className="absolute left-[58%] top-[18%] flex w-[38%] items-center gap-[6%]"><div className="flex aspect-square w-[24%] items-center justify-center rounded-full bg-[#eef7fd] text-[clamp(25px,6vw,46px)]">📱</div><div><div className="text-[clamp(11px,3vw,22px)] font-black leading-tight">Keep Me on Your Phone</div><div className="mt-[4%] text-[clamp(8px,2.3vw,16px)] leading-tight text-[#356182]">Add this card to your Home Screen<br/>so I’m always one tap away.</div></div></div>
        </section>
        <section className="grid h-[10.5%] grid-cols-3 items-center gap-[5%] border-t border-[#d6e6f0] px-[7.5%] py-[1.5%] text-center"><div className="flex h-[64%] items-center justify-center bg-[#b71925] text-[clamp(21px,5.5vw,42px)] font-black text-white shadow-sm">Miele</div><div className="text-[clamp(22px,5.7vw,43px)] font-black tracking-[-0.04em] text-[#083b70]">SEBO</div><div className="font-serif text-[clamp(22px,5.4vw,41px)] tracking-[0.04em] text-black">RICCAR</div></section>
        <footer className="relative h-[11%] overflow-hidden bg-gradient-to-r from-[#2a91cf] via-[#1174b5] to-[#09659f] text-white"><div className="absolute inset-x-0 top-0 h-[28%] bg-[#c0e2f4] [clip-path:polygon(0_15%,45%_70%,100%_30%,100%_0%,0_0%)]" /><div className="absolute left-[6.5%] top-[42%] text-[clamp(9px,2.5vw,18px)] font-medium">Quality&nbsp; • &nbsp;Savings&nbsp; • &nbsp;Convenience</div><div className="absolute right-[6.5%] top-[42%] text-[clamp(8px,2.3vw,17px)] italic">Serving the Carolinas since 1995</div><a href="https://www.myapptly.com/" target="_blank" rel="noreferrer" className="absolute bottom-[7%] left-1/2 -translate-x-1/2 text-[clamp(7px,1.8vw,13px)] text-white/90">Built by <span className="font-black">APPTLY</span></a></footer>
        {status && <div className="absolute bottom-[11.4%] left-1/2 z-20 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#267650] shadow-lg">{status}</div>}
      </section>
    </main>
  );
}
