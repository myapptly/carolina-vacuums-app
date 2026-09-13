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
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(CARD_URL)}`;
  const btn = 'flex h-[44px] items-center justify-center rounded-xl px-2 text-center text-[12px] font-extrabold shadow-sm';

  return (
    <>
      <style jsx global>{`
        body > div:last-child { display: none !important; }
      `}</style>

      <main className="min-h-[100dvh] bg-[#eef5fb] p-2 text-[#0b3764]">
        <div className="mx-auto max-w-md overflow-hidden rounded-[24px] border border-[#cbddea] bg-white shadow-xl">
          <header className="flex items-center justify-between gap-3 px-4 pb-1 pt-2.5">
            <img src="/iconcv.png" alt="Carolina Vacuums and More" className="h-12 w-auto max-w-[43%] object-contain" />
            <div className="text-right">
              <p className="font-serif text-[15px] italic leading-[15px]">A Cleaner Home.</p>
              <p className="font-serif text-[15px] italic leading-[15px]">A Healthier You.</p>
              <p className="mt-1 text-[7px] font-bold tracking-[0.14em]">SALES • SERVICE • PARTS • SUPPLIES</p>
            </div>
          </header>

          <section className="grid grid-cols-[41%_59%] gap-3 px-4 pb-1.5">
            <img
              src="/heidi-card.jpg"
              alt="Heidi Joyce"
              className="h-[168px] w-full rounded-[18px] border-4 border-white object-cover object-[center_18%] shadow-lg ring-1 ring-[#b8d4ea]"
            />
            <div className="flex flex-col justify-center pr-1">
              <h1 className="text-[27px] font-black leading-[0.95]">Heidi Joyce</h1>
              <p className="mt-1.5 text-[16px] font-bold text-[#1870aa]">Store Manager</p>
              <p className="mt-1 text-[11px] font-semibold">Carolina Vacuums and More</p>
              <div className="my-1.5 h-1 w-16 rounded bg-[#58a477]" />
              <a href={`tel:${PHONE}`} className="text-[16px] font-extrabold no-underline">{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="mt-1 break-all text-[10px] no-underline">{EMAIL}</a>
              <a href={directions} target="_blank" rel="noreferrer" className="mt-1.5 text-[10px] leading-[13px] text-[#526d82] no-underline">
                1025 Hanes Mall Blvd.<br />Winston-Salem, NC
              </a>
            </div>
          </section>

          <p className="px-4 pb-1.5 text-center text-[11px] font-semibold italic text-[#1d6399]">
            Local People. Real Service. A Cleaner, Healthier You.
          </p>

          <section className="grid grid-cols-2 gap-2 px-4">
            <a href={`tel:${PHONE}`} className={`${btn} bg-[#0b5e9d] text-white`}>☎ Call Heidi</a>
            <a href={`sms:${PHONE}`} className={`${btn} bg-[#2d8fd0] text-white`}>💬 Text Heidi</a>
            <a href={`mailto:${EMAIL}`} className={`${btn} bg-[#0b5e9d] text-white`}>✉ Email Heidi</a>
            <a href={WEBSITE} target="_blank" rel="noreferrer" className={`${btn} bg-[#2d8fd0] text-white`}>◎ Visit Website</a>
            <a href={directions} target="_blank" rel="noreferrer" className={`${btn} bg-[#2d8fd0] text-white`}>⌖ Get Directions</a>
            <button onClick={saveContact} className={`${btn} bg-[#dcebf7] text-[#0b3764]`}>＋ Save Contact</button>
          </section>

          <section className="mt-2 border-t border-[#d9e7f0] px-4 pb-2 pt-2.5">
            <div className="grid grid-cols-[108px_1fr] gap-3">
              <button onClick={shareCard} className="self-start text-left" aria-label="Share Heidi's card">
                <img src={qrUrl} alt="QR code for Heidi's card" className="h-[108px] w-[108px] rounded-lg border-2 border-[#0b4f88] bg-white p-1" />
                <p className="mt-1 text-center text-[14px] font-black italic text-[#17679d]">↗ Scan Me!</p>
              </button>

              <div className="min-w-0">
                <button onClick={shareCard} className="text-left text-[14px] font-black leading-4">Share My Card</button>
                <p className="mt-1 text-[10px] leading-3.5 text-[#61758a]">Open my digital business card and share it with anyone.</p>

                <div className="mt-2 rounded-xl bg-[#eef5fb] px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[27px]">📱</span>
                    <div>
                      <p className="text-[11px] font-black">Keep Me on Your Phone</p>
                      <p className="mt-0.5 text-[9px] leading-3 text-[#61758a]">Add this card to your Home Screen so I’m always one tap away.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2.5 grid grid-cols-3 items-center gap-3 border-t border-[#d9e7f0] pt-2.5 text-center">
              <div className="rounded-md bg-[#b01824] px-2 py-2 text-[19px] font-black tracking-wide text-white">Miele</div>
              <div className="text-[21px] font-black tracking-tight text-[#0b3764]">SEBO</div>
              <div className="font-serif text-[23px] tracking-wide text-black">RICCAR</div>
            </div>

            {status && <p className="mt-1 text-center text-[10px] font-bold text-[#388166]">{status}</p>}
          </section>

          <footer className="bg-[#0a4d83] px-4 py-2 text-white">
            <div className="flex items-center justify-between gap-3 text-[8px] font-semibold tracking-wide">
              <span>QUALITY • SAVINGS • CONVENIENCE</span>
              <span className="italic">Serving the Carolinas since 1995</span>
            </div>
            <div className="mt-1 text-center text-[8px] text-white/85">
              Built by <span className="font-black text-white">APPTLY</span>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
