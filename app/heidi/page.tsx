'use client';

import { useState } from 'react';

const PHONE = '3367686068';
const PHONE_DISPLAY = '(336) 768-6068';
const EMAIL = 'heidi@carolinavacuums.com';
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

  const action = 'flex h-full items-center rounded-[13px] px-[5%] text-white shadow-sm';

  return (
    <main className="bg-[#eef6fb] text-[#082f5c]">
      <section className="relative mx-auto aspect-[2/3] w-full max-w-[700px] overflow-hidden bg-white shadow-xl">

        {/* TOP BRAND AREA */}
        <div className="absolute inset-x-0 top-0 h-[17.4%] overflow-hidden bg-gradient-to-b from-[#eef8ff] via-white to-white">
          <div className="absolute inset-x-0 bottom-0 h-[21%] bg-[#4b9bd3] [clip-path:polygon(0_30%,100%_63%,100%_100%,0_100%)] opacity-95" />
          <div className="absolute inset-x-0 bottom-[4%] h-[10%] bg-[#a9d5ef] [clip-path:polygon(0_12%,100%_55%,100%_100%,0_72%)]" />
          <img src="/iconcv.png" alt="Carolina Vacuums & more" className="absolute left-[6%] top-[11%] h-[53%] w-[39%] object-contain" />
          <div className="absolute right-[5%] top-[9%] w-[47%] text-right">
            <div className="font-serif text-[clamp(17px,4.8vw,34px)] italic leading-[0.95] text-[#0d4d87]">A Cleaner Home.<br/>A Healthier You.</div>
            <div className="mt-[4%] text-[clamp(7px,1.8vw,13px)] font-black tracking-[0.19em] text-[#0b3966]">SALES • SERVICE • PARTS • SUPPLIES</div>
          </div>
        </div>

        {/* PROFILE AREA */}
        <div className="absolute inset-x-0 top-[17.4%] h-[27.1%] bg-white">
          <img src="/heidi-card.jpg" alt="Heidi Joyce" className="absolute left-[4.3%] top-[4.5%] h-[89%] w-[29.2%] rounded-[18px] border-[4px] border-white object-cover object-[center_20%] shadow-lg ring-1 ring-[#a9cbe0]" />

          <div className="absolute left-[36%] top-[8%] w-[42%]">
            <h1 className="text-[clamp(25px,6.2vw,47px)] font-black leading-[0.92] tracking-[-0.035em] text-[#072f63]">Heidi Joyce</h1>
            <p className="mt-[3%] text-[clamp(16px,4vw,30px)] font-semibold leading-none text-[#176eaa]">Store Manager</p>
            <p className="mt-[4%] text-[clamp(11px,2.75vw,21px)] font-bold leading-tight text-[#092f5d]">Carolina Vacuums and More</p>
            <div className="mt-[5%] h-[3px] w-[53%] bg-[#4ca76e]" />
            <div className="mt-[4%] space-y-[2.5%] text-[#0b315e]">
              <a href={`tel:${PHONE}`} className="block text-[clamp(15px,3.8vw,28px)] font-medium">☎ &nbsp;{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="block text-[clamp(10px,2.55vw,19px)]">✉ &nbsp;{EMAIL}</a>
              <a href={directions} target="_blank" rel="noreferrer" className="block text-[clamp(10px,2.55vw,19px)] leading-tight">📍 &nbsp;1025 Hanes Mall Blvd.<br/><span className="pl-[9%]">Winston-Salem, NC</span></a>
            </div>
          </div>

          <div className="absolute right-[3%] top-[25%] w-[17%] border-l border-[#aac8dc] pl-[2.5%] text-center font-serif text-[clamp(11px,3.2vw,24px)] italic leading-[1.05] text-[#07528e]">
            Local People.<br/>Real Service.<br/>A Cleaner,<br/>Healthier You.
            <div className="mx-auto mt-[9%] h-[3px] w-[72%] -rotate-[12deg] bg-[#4ca76e]" />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="absolute inset-x-[3.6%] top-[44.5%] h-[22.2%] grid grid-cols-2 grid-rows-3 gap-x-[2.5%] gap-y-[4.4%]">
          <a href={`tel:${PHONE}`} className={`${action} bg-gradient-to-r from-[#065a9c] to-[#0f6fac]`}>
            <span className="mr-[6%] text-[clamp(25px,6vw,46px)]">☎</span><span><b className="block text-[clamp(13px,3.35vw,25px)]">Call Heidi</b><small className="block text-[clamp(10px,2.55vw,19px)] font-normal">{PHONE_DISPLAY}</small></span>
          </a>
          <a href={`sms:${PHONE}`} className={`${action} bg-gradient-to-r from-[#2588c9] to-[#2d9add]`}>
            <span className="mr-[6%] text-[clamp(25px,6vw,46px)]">💬</span><span><b className="block text-[clamp(13px,3.35vw,25px)]">Text Heidi</b><small className="block text-[clamp(10px,2.55vw,19px)] font-normal">{PHONE_DISPLAY}</small></span>
          </a>
          <a href={`mailto:${EMAIL}`} className={`${action} bg-gradient-to-r from-[#0d64a2] to-[#177db8]`}>
            <span className="mr-[6%] text-[clamp(25px,6vw,46px)]">✉</span><b className="text-[clamp(13px,3.35vw,25px)]">Email Heidi</b>
          </a>
          <a href={WEBSITE} target="_blank" rel="noreferrer" className={`${action} bg-gradient-to-r from-[#156da8] to-[#0e63a0]`}>
            <span className="mr-[6%] text-[clamp(25px,6vw,46px)]">◎</span><span><b className="block text-[clamp(13px,3.35vw,25px)]">Visit Our Website</b><small className="block text-[clamp(10px,2.55vw,19px)] font-normal">carolinavacuums.com</small></span>
          </a>
          <a href={directions} target="_blank" rel="noreferrer" className={`${action} bg-gradient-to-r from-[#2b8fca] to-[#3aa4de]`}>
            <span className="mr-[6%] text-[clamp(25px,6vw,46px)]">📍</span><span><b className="block text-[clamp(13px,3.35vw,25px)]">Get Directions</b><small className="block text-[clamp(10px,2.55vw,19px)] font-normal">1025 Hanes Mall Blvd.</small></span>
          </a>
          <button onClick={saveContact} className={`${action} bg-[#d9ebf8] text-[#072f63]`}>
            <span className="mr-[6%] text-[clamp(25px,6vw,46px)]">👤+</span><span className="text-left"><b className="block text-[clamp(13px,3.35vw,25px)]">Save to Contacts</b><small className="block text-[clamp(10px,2.55vw,19px)] font-normal">Add Heidi to your phone</small></span>
          </button>
        </div>

        {/* QR / KEEP SECTION */}
        <div className="absolute inset-x-[4.5%] top-[68.3%] h-[13.4%]">
          <button onClick={shareCard} className="absolute left-0 top-0 h-[90%] w-[22%]">
            <img src={qrUrl} alt="QR code for Heidi's digital card" className="h-full w-full rounded-[8px] border-[3px] border-[#0b548d] bg-white p-[4%]" />
          </button>
          <button onClick={shareCard} className="absolute left-[24.5%] top-[3%] w-[26%] text-left">
            <div className="font-serif text-[clamp(19px,4.7vw,35px)] italic leading-none text-[#07558f]">↩ Scan Me!</div>
            <div className="mt-[10%] text-[clamp(10px,2.6vw,19px)] leading-tight text-[#0b315e]">Open my digital<br/>business card and<br/>share it with anyone.</div>
          </button>
          <div className="absolute left-[52%] top-[5%] h-[83%] border-l border-[#b4d0e2]" />
          <div className="absolute left-[56%] top-[12%] flex w-[42%] items-center gap-[6%]">
            <div className="flex aspect-square w-[25%] items-center justify-center rounded-full bg-[#eef7fd] text-[clamp(27px,6.5vw,48px)]">📱</div>
            <div>
              <div className="text-[clamp(12px,3.2vw,24px)] font-black leading-tight">Keep Me on Your Phone</div>
              <div className="mt-[4%] text-[clamp(9px,2.35vw,17px)] leading-tight text-[#315f83]">Add this card to your Home Screen<br/>so I’m always one tap away.</div>
            </div>
          </div>
        </div>

        {/* BRAND LOGOS */}
        <div className="absolute inset-x-[7.5%] top-[82.3%] h-[8.6%] grid grid-cols-3 items-center gap-[5%] border-t border-[#c9deeb] pt-[2%]">
          <div className="flex h-[67%] items-center justify-center bg-[#b31520] text-[clamp(22px,5.7vw,43px)] font-black text-white">Miele</div>
          <div className="flex h-full items-center justify-center text-[clamp(23px,5.7vw,43px)] font-black tracking-[-0.04em] text-[#083b70]">SEBO</div>
          <div className="flex h-full items-center justify-center font-serif text-[clamp(22px,5.4vw,41px)] tracking-[0.04em] text-black">RICCAR</div>
        </div>

        {/* FOOTER */}
        <div className="absolute inset-x-0 bottom-0 h-[8.9%] overflow-hidden bg-gradient-to-r from-[#2a91cf] via-[#1174b5] to-[#09659f] text-white">
          <div className="absolute inset-x-0 top-0 h-[28%] bg-[#b9def2] [clip-path:polygon(0_15%,45%_70%,100%_30%,100%_0%,0_0%)]" />
          <div className="absolute left-[6.5%] top-[42%] text-[clamp(10px,2.7vw,20px)] font-medium">Quality&nbsp; • &nbsp;Savings&nbsp; • &nbsp;Convenience</div>
          <div className="absolute right-[6.5%] top-[42%] text-[clamp(9px,2.45vw,18px)] italic">Serving the Carolinas since 1995</div>
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-[clamp(7px,1.75vw,13px)] text-white/90">Built by <span className="font-black">APPTLY</span></div>
        </div>

        {status && <div className="absolute bottom-[9.3%] left-1/2 z-20 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#267650] shadow">{status}</div>}
      </section>
    </main>
  );
}
