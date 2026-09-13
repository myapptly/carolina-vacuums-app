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
      `TEL;TYPE=WORK,VOICE:${PHONE_DISPLAY}`,
      `EMAIL;TYPE=WORK:${EMAIL}`,
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
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(CARD_URL)}`;
  const btn = 'flex min-h-[40px] items-center justify-center rounded-xl px-2 text-center text-[12px] font-extrabold shadow-sm';

  return (
    <main className="min-h-[100dvh] bg-[#eef5fb] p-2 text-[#0b3764]">
      <div className="mx-auto flex min-h-[calc(100dvh-16px)] max-w-md flex-col overflow-hidden rounded-[24px] border border-[#cbddea] bg-white shadow-xl">
        <header className="flex items-center justify-between gap-3 px-4 pb-2 pt-3">
          <img src="/iconcv.png" alt="Carolina Vacuums and More" className="h-14 w-auto max-w-[48%] object-contain" />
          <div className="text-right">
            <p className="font-serif text-[15px] italic leading-4">A Cleaner Home.</p>
            <p className="font-serif text-[15px] italic leading-4">A Healthier You.</p>
            <p className="mt-1 text-[8px] font-bold tracking-[0.14em]">SALES • SERVICE • PARTS • SUPPLIES</p>
          </div>
        </header>

        <section className="grid grid-cols-[42%_58%] gap-3 px-4 pb-2">
          <img src="/heidi-card.jpg" alt="Heidi Joyce" className="h-[188px] w-full rounded-[20px] border-4 border-white object-cover object-top shadow-lg ring-1 ring-[#b8d4ea]" />
          <div className="flex flex-col justify-center pr-1">
            <h1 className="text-[30px] font-black leading-[0.95]">Heidi Joyce</h1>
            <p className="mt-2 text-[17px] font-bold text-[#1870aa]">Store Manager</p>
            <p className="mt-1 text-[12px] font-semibold">Carolina Vacuums and More</p>
            <div className="my-2 h-1 w-20 rounded bg-[#58a477]" />
            <a href={`tel:${PHONE}`} className="text-[16px] font-extrabold no-underline">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-1 break-all text-[11px] no-underline">{EMAIL}</a>
            <a href={directions} target="_blank" rel="noreferrer" className="mt-2 text-[11px] leading-4 text-[#526d82] no-underline">1025 Hanes Mall Blvd.<br/>Winston-Salem, NC</a>
          </div>
        </section>

        <p className="px-4 pb-2 text-center text-[12px] font-semibold italic text-[#1d6399]">Local People. Real Service. A Cleaner, Healthier You.</p>

        <section className="grid grid-cols-2 gap-2 px-4">
          <a href={`tel:${PHONE}`} className={`${btn} bg-[#0b5e9d] text-white`}>☎ Call Heidi</a>
          <a href={`sms:${PHONE}`} className={`${btn} bg-[#2d8fd0] text-white`}>💬 Text Heidi</a>
          <a href={`mailto:${EMAIL}`} className={`${btn} bg-[#0b5e9d] text-white`}>✉ Email Heidi</a>
          <a href={WEBSITE} target="_blank" rel="noreferrer" className={`${btn} bg-[#2d8fd0] text-white`}>◎ Visit Website</a>
          <a href={directions} target="_blank" rel="noreferrer" className={`${btn} bg-[#2d8fd0] text-white`}>⌖ Get Directions</a>
          <button onClick={saveContact} className={`${btn} bg-[#dcebf7] text-[#0b3764]`}>＋ Save Contact</button>
        </section>

        <section className="mt-2 grid grid-cols-[58px_1fr_auto] items-center gap-2 border-t border-[#d9e7f0] px-4 py-2">
          <img src={qrUrl} alt="QR code for Heidi's card" className="h-14 w-14 rounded-md border border-[#0b4f88] bg-white p-1" />
          <div>
            <button onClick={shareCard} className="text-left text-[13px] font-black">↗ Scan or Share My Card</button>
            <p className="mt-0.5 text-[9px] leading-3 text-[#61758a]">Keep Heidi one tap away on your phone.</p>
          </div>
          <span className="text-right text-[9px] font-black leading-4">Miele<br/>SEBO<br/>RICCAR</span>
        </section>

        {status && <p className="px-4 pb-1 text-center text-[10px] font-bold text-[#388166]">{status}</p>}

        <footer className="mt-auto bg-[#0a4d83] px-4 py-2 text-center text-white">
          <p className="text-[10px] font-semibold tracking-wide">QUALITY • SAVINGS • CONVENIENCE</p>
          <p className="mt-0.5 text-[11px] italic">Serving the Carolinas since 1995</p>
        </footer>
        <div className="bg-[#f4f6f8] py-1.5 text-center text-[10px] text-[#66717d]">Built by <span className="font-black text-[#0b4f88]">APPTLY</span></div>
      </div>
    </main>
  );
}
