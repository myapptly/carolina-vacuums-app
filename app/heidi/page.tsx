'use client';

import { useState } from 'react';

const PHONE = '3367686068';
const PHONE_DISPLAY = '(336) 768-6068';
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
        return;
      }

      await navigator.clipboard.writeText(CARD_URL);
      setStatus('Card link copied!');
    } catch {
      // User cancelled sharing or the browser blocked it.
    }
  }

  function saveContact() {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Joyce;Heidi;;;',
      'FN:Heidi Joyce',
      'ORG:Carolina Vacuums and More',
      'TITLE:Store Manager',
      `TEL;TYPE=WORK,VOICE:${PHONE_DISPLAY}`,
      `ADR;TYPE=WORK:;;1025 Hanes Mall Blvd.;Winston-Salem;NC;;;`,
      `URL:${WEBSITE}`,
      'NOTE:Winston-Salem Store Manager. SEBO - Miele - Riccar.',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Heidi-Joyce-Carolina-Vacuums.vcf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="pageShell">
      <section className="card">
        <header className="brandHeader">
          <img
            className="logo"
            src="/carolina%20vacs%20logo.png"
            alt="Carolina Vacuums and More"
          />
          <p className="brandLine">QUALITY • SAVINGS • CONVENIENCE</p>
        </header>

        <section className="profile">
          <div className="initials" aria-hidden="true">HJ</div>
          <div>
            <h1>Heidi Joyce</h1>
            <p className="title">Store Manager</p>
            <p className="company">Carolina Vacuums and More</p>
          </div>
        </section>

        <div className="divider" />

        <section className="storeInfo">
          <p className="storeLabel">WINSTON-SALEM STORE</p>
          <a href={`tel:${PHONE}`} className="infoLink">{PHONE_DISPLAY}</a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=1025%20Hanes%20Mall%20Blvd%20Winston-Salem%20NC"
            target="_blank"
            rel="noopener noreferrer"
            className="address"
          >
            1025 Hanes Mall Blvd.<br />Winston-Salem, NC
          </a>
        </section>

        <section className="actions">
          <a className="action primary" href={`tel:${PHONE}`}>
            <span className="icon">☎</span>
            <span><strong>Call Heidi</strong><small>{PHONE_DISPLAY}</small></span>
          </a>

          <a
            className="action"
            href="https://www.google.com/maps/search/?api=1&query=1025%20Hanes%20Mall%20Blvd%20Winston-Salem%20NC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">⌖</span>
            <span><strong>Directions</strong><small>Winston-Salem Store</small></span>
          </a>

          <a className="action" href={WEBSITE} target="_blank" rel="noopener noreferrer">
            <span className="icon">◎</span>
            <span><strong>Visit Website</strong><small>carolinavacuums.com</small></span>
          </a>

          <button className="action" type="button" onClick={saveContact}>
            <span className="icon">＋</span>
            <span><strong>Save Contact</strong><small>Add Heidi to your phone</small></span>
          </button>

          <button className="action wide share" type="button" onClick={shareCard}>
            <span className="icon">↗</span>
            <span><strong>Share Heidi's Card</strong><small>Text • Email • Quick Share • AirDrop</small></span>
          </button>
        </section>

        {status && <p className="status">{status}</p>}

        <section className="brands" aria-label="Featured brands">
          <span>SEBO</span><i>•</i><span>Miele</span><i>•</i><span>Riccar</span>
        </section>

        <section className="qrSection">
          <img
            className="qr"
            src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(CARD_URL)}`}
            alt="QR code for Heidi Joyce's digital business card"
          />
          <div className="qrCopy">
            <h2>Share My Card</h2>
            <p>Scan this QR code to open Heidi's digital business card.</p>
          </div>
        </section>

        <section className="install">
          <h2>Keep Heidi on Your Phone</h2>
          <p className="installIntro">Open this card in Safari or Chrome, then save it to your Home Screen.</p>
          <details>
            <summary>iPhone / iPad</summary>
            <ol>
              <li>Open this card in Safari.</li>
              <li>Tap the Share button.</li>
              <li>Choose <strong>Add to Home Screen</strong>.</li>
              <li>Tap <strong>Add</strong>.</li>
            </ol>
          </details>
          <details>
            <summary>Android</summary>
            <ol>
              <li>Open this card in Chrome.</li>
              <li>Tap the browser menu (⋮).</li>
              <li>Choose <strong>Add to Home screen</strong> or <strong>Install app</strong>.</li>
              <li>Confirm.</li>
            </ol>
          </details>
        </section>

        <footer>
          <p>Serving the Carolinas since 1995</p>
          <a href="https://www.myapptly.com" target="_blank" rel="noopener noreferrer">Built by APPTLY</a>
        </footer>
      </section>

      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(body) { margin: 0; background: #eef5fb; }
        .pageShell {
          min-height: 100vh;
          padding: 18px 12px 32px;
          display: flex;
          justify-content: center;
          background: linear-gradient(180deg, #f8fbff 0%, #e6f0f8 100%);
          color: #0b3764;
          font-family: Arial, Helvetica, sans-serif;
        }
        .card {
          width: min(100%, 440px);
          overflow: hidden;
          background: #fff;
          border-radius: 26px;
          box-shadow: 0 18px 55px rgba(11, 55, 100, .17);
          border: 1px solid #d7e4ef;
        }
        .brandHeader {
          padding: 24px 24px 20px;
          text-align: center;
          background: linear-gradient(180deg, #ffffff 0%, #f1f8f7 100%);
          border-bottom: 7px solid #7d9fd0;
        }
        .logo { width: min(260px, 82%); height: auto; display: block; margin: 0 auto 12px; }
        .brandLine { margin: 0; font-size: 12px; font-weight: 800; letter-spacing: 1.8px; color: #164d82; }
        .profile { display: flex; gap: 16px; align-items: center; padding: 24px 24px 18px; }
        .initials {
          width: 74px; height: 74px; flex: 0 0 74px; border-radius: 50%;
          display: grid; place-items: center; color: #fff; font-weight: 900; font-size: 25px;
          background: linear-gradient(145deg, #174f86, #80a4d4);
          border: 4px solid #e6f1f8;
        }
        h1 { margin: 0 0 4px; font-size: 30px; line-height: 1; color: #073665; }
        .title { margin: 0 0 3px; font-size: 18px; font-weight: 800; color: #1e6a9f; }
        .company { margin: 0; font-size: 14px; font-weight: 700; color: #526d82; }
        .divider { height: 3px; width: 58px; background: #5aa88a; margin: 0 24px 18px; border-radius: 99px; }
        .storeInfo { padding: 0 24px 20px; }
        .storeLabel { margin: 0 0 7px; font-size: 12px; font-weight: 900; letter-spacing: 1.4px; color: #6687a4; }
        .infoLink { display: inline-block; margin-bottom: 7px; color: #0b3764; font-size: 18px; font-weight: 800; text-decoration: none; }
        .address { display: block; color: #38566f; line-height: 1.45; text-decoration: none; }
        .actions { padding: 0 18px 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .action {
          appearance: none; border: 0; min-height: 72px; border-radius: 16px; padding: 12px;
          display: flex; align-items: center; gap: 10px; text-align: left; text-decoration: none;
          background: #e8f1f8; color: #0b3764; cursor: pointer; font: inherit;
        }
        .action.primary { background: #0b4f88; color: white; }
        .action.share { background: #78a0d2; color: #082e57; }
        .action.wide { grid-column: 1 / -1; }
        .icon { width: 31px; flex: 0 0 31px; text-align: center; font-size: 25px; font-weight: 900; }
        .action strong { display: block; font-size: 15px; line-height: 1.2; }
        .action small { display: block; margin-top: 3px; font-size: 11px; line-height: 1.25; opacity: .84; }
        .status { margin: -8px 18px 12px; text-align: center; color: #388166; font-weight: 800; font-size: 13px; }
        .brands {
          margin: 0 18px 20px; padding: 14px 10px; border-top: 1px solid #dbe7ef; border-bottom: 1px solid #dbe7ef;
          display: flex; align-items: center; justify-content: center; gap: 10px; flex-wrap: wrap;
          color: #0b3764; font-weight: 900;
        }
        .brands i { color: #64a68c; font-style: normal; }
        .qrSection { margin: 0 18px 18px; display: flex; gap: 16px; align-items: center; }
        .qr { width: 118px; height: 118px; padding: 6px; background: white; border: 2px solid #0b4f88; border-radius: 12px; }
        .qrCopy h2, .install h2 { margin: 0 0 6px; font-size: 19px; color: #0b3764; }
        .qrCopy p { margin: 0; font-size: 13px; line-height: 1.45; color: #4d687e; }
        .install { margin: 0 18px 22px; padding: 17px; background: #f1f7fb; border-radius: 17px; border: 1px solid #dce9f2; }
        .installIntro { margin: 0 0 10px; font-size: 13px; line-height: 1.45; color: #4d687e; }
        details { border-top: 1px solid #d6e4ee; padding-top: 10px; margin-top: 10px; }
        summary { cursor: pointer; font-weight: 800; color: #0b4f88; }
        ol { margin: 9px 0 0 20px; padding: 0; color: #4d687e; font-size: 13px; line-height: 1.6; }
        footer { background: #0a3d70; padding: 18px; text-align: center; color: white; }
        footer p { margin: 0 0 7px; font-size: 13px; font-style: italic; }
        footer a { color: white; text-decoration: none; font-size: 12px; font-weight: 800; opacity: .92; }
        @media (max-width: 370px) {
          .actions { grid-template-columns: 1fr; }
          .action.wide { grid-column: auto; }
          .qrSection { align-items: flex-start; }
          .qr { width: 105px; height: 105px; }
          h1 { font-size: 26px; }
        }
      `}</style>
    </main>
  );
}
