'use client'

import Image from 'next/image'

import logo from './iconcv.png'
import sebo from './sebo.png'
import miele from './miele.png'
import riccar from './riccar.png'

const site = 'https://www.carolinavacuums.com'

function shareApp() {
  const url = 'https://carolina-vacuums-app.vercel.app'

  if (navigator.share) {
    navigator.share({
      title: 'Carolina Vacuums & More',
      url,
    })
  } else {
    navigator.clipboard.writeText(url)
    alert('Link copied!')
  }
}

export default function Home() {
  return (
    <main className="page">

      {/* TOP NAVIGATION */}
      <header className="topBar">
        <nav className="topNav">
          <a href={site}>Home</a>
          <a href={`${site}/flyers`}>Promotions</a>
          <a href={`${site}/review-showcase`}>Reviews</a>
          <a href={`${site}/email-savings`}>Email Savings</a>
          <a href={`${site}/synchrony-financing`}>Financing</a>
          <a href={`${site}/brands`}>Shop By Brand</a>
        </nav>
      </header>

      {/* MAIN HEADER */}
      <section className="mainHeader">

        <a href={site} className="searchBox">
          <span>What can we help you find?</span>
          <span className="searchIcon">⌕</span>
        </a>

        <div className="logoBox">
          <Image
            src={logo}
            alt="Carolina Vacuums & More"
            priority
            style={{
              width: '220px',
              height: '105px',
              objectFit: 'contain',
            }}
          />
        </div>

        <div className="headerRight">

          <a href={`${site}/locations`} className="storeBlock">
            <span className="storeIcon">▰</span>

            <div>
              <small>Locations:</small>
              <strong>Find a Store</strong>
            </div>
          </a>

          <div className="miniLinks">
            <a href={site}>
              <span>♟</span>
              <small>Account</small>
            </a>

            <a href={site}>
              <span>♥</span>
              <small>Wishlist</small>
            </a>

            <a href={site}>
              <span>🛒</span>
              <small>Cart</small>
            </a>
          </div>

        </div>

      </section>

      {/* CATEGORY NAVIGATION */}
      <nav className="categoryNav">
  <a href="https://www.carolinavacuums.com/_CGI/SEARCH3.HTML?MAJOR=VAC">
    Vacuum Cleaners
  </a>

  <a href="https://www.carolinavacuums.com/">
    Floor Care
  </a>

  <a href="https://www.carolinavacuums.com/">
    Air Care
  </a>

  <a href="https://www.carolinavacuums.com/">
    Accessories
  </a>

  <a href="https://www.carolinavacuums.com/vacuum-service-repair.html">
    Service and Repair
  </a>
</nav> 

      {/* MAIN HERO */}
      <section className="hero">

        <div className="heroTop">

          <div className="heroLeft">

            <h1>Serving the Carolinas since 1995</h1>

            <div className="heroButtons">

  <a href="https://www.carolinavacuums.com/locations">
    Find A Location
  </a>

  <a href="https://www.carolinavacuums.com/home-appliances/vacuum-cleaners">
    Shop Our Catalog
  </a>

  <a href="https://www.carolinavacuums.com/vacuum-service-repair.html">
    Service Request
  </a>

  <a href="https://www.carolinavacuums.com/" className="centralVac">
    Central Vacuums
    <span>Sales Service</span>
    <span>Installation</span>
  </a>

</div> 

          </div>

          <div className="heroRight">

            <h2>Discover the Difference!</h2>

            <ul>
              <li>Try it FREE Before You Buy It</li>
              <li>30 DAY IN-HOME TRIAL</li>
              <li>Expert In-Store Service Department</li>
              <li>Free Annual Inspection</li>
              <li>Warranty Service</li>
            </ul>

          </div>

        </div>

        {/* WAVY QUALITY BANNER */}
        <div className="qualityWave">
          <div className="waveBack" />
          <div className="waveFront">
            <span>QUALITY</span>
            <b>•</b>
            <span>SAVINGS</span>
            <b>•</b>
            <span>CONVENIENCE</span>
          </div>
        </div>

      </section>

      {/* FEATURED BRANDS */}
      <section className="featuredBrands">

        <h2>Featured Brands</h2>

        <div className="brandGrid">

        <a

    href="https://www.carolinavacuums.com/home-appliances/vacuum-cleaners?brand=miele"
    className="brandCard"
  >
    <Image
      src={miele}
      alt="Miele"
      style={{
        width: '150px',
        height: '75px',
        objectFit: 'contain',
      }}
    />
  </a>

  <a
    href="https://www.carolinavacuums.com/home-appliances/vacuum-cleaners?brand=sebo"
    className="brandCard"
  >
    <Image
      src={sebo}
      alt="SEBO"
      style={{
        width: '150px',
        height: '75px',
        objectFit: 'contain',
      }}
    />
  </a>

  <a
    href="https://www.carolinavacuums.com/home-appliances/vacuum-cleaners?brand=riccar"
    className="brandCard"
  >
    <Image
      src={riccar}
      alt="Riccar"
      style={{
        width: '150px',
        height: '75px',
        objectFit: 'contain',
      }}
    />
  </a>

</div> 

      </section>

      {/* SALES STRIP */}
      <section className="salesStrip">
        <strong>
          Vacuum Sales & Repair in North Carolina & South Carolina
        </strong>
        <span>Carolina Vacuums</span>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="products">

        <h2>Featured Products</h2>

        <div className="productGrid">

  <a
    href="https://www.carolinavacuums.com/_CGI/SEARCH3?FEATUREDBRAND=TRUE"
    className="productCard"
  >
    <div className="productVisual">Featured Products</div>
    <strong>Shop Featured Products</strong>
    <span>View Products</span>
  </a>

  <a
    href="https://www.carolinavacuums.com/_CGI/SEARCH3?FEATUREDBRAND=TRUE"
    className="productCard"
  >
    <div className="productVisual">Upright</div>
    <strong>Upright Vacuums</strong>
    <span>View Products</span>
  </a>

  <a
    href="https://www.carolinavacuums.com/_CGI/SEARCH3?FEATUREDBRAND=TRUEC"
    className="productCard"
  >
    <div className="productVisual">Canister</div>
    <strong>Canister Vacuums</strong>
    <span>View Products</span>
  </a>

  <a
    href="https://www.carolinavacuums.com/_CGI/SEARCH3?FEATUREDBRAND=TRUE"
    className="productCard"
  >
    <div className="productVisual">Cordless</div>
    <strong>Cordless Vacuums</strong>
    <span>View Products</span>
  </a>

</div> 

      </section>

      {/* BRAND STRIP */}
      <section className="logoStrip">

        <a href={`${site}/brands`}>
          <Image
            src={sebo}
            alt="SEBO"
            style={{
              width: '90px',
              height: '52px',
              objectFit: 'contain',
            }}
          />
        </a>

        <a href={site} className="textLogo nellies">
          Nellie&apos;s
        </a>

        <a href={`${site}/brands`}>
          <Image
            src={miele}
            alt="Miele"
            style={{
              width: '90px',
              height: '52px',
              objectFit: 'contain',
            }}
          />
        </a>

        <a href={site} className="textLogo oreck">
          ORECK
        </a>

        <a href={`${site}/brands`}>
          <Image
            src={riccar}
            alt="Riccar"
            style={{
              width: '90px',
              height: '52px',
              objectFit: 'contain',
            }}
          />
        </a>

        <a href={site} className="textLogo simplicity">
          SIMPLICITY
          <br />
          VACUUMS
        </a>

      </section>

      {/* POPULAR CATEGORIES */}
      <section className="popular">

        <h2>POPULAR CATEGORIES</h2>

        <a href={`${site}/locations`} className="visitLink">
          Visit any of our 6 Locations »
        </a>

        <div className="popularGrid">

  <a href="https://www.carolinavacuums.com/_CGI/SEARCH3.HTML?MAJOR=VAC">
    <div className="categoryIcon">▥</div>
    <strong>UPRIGHT<br />VACUUMS</strong>
    <span>View All »</span>
  </a>

  <a href="https://www.carolinavacuums.com/_CGI/SEARCH3.HTML?MAJOR=VAC">
    <div className="categoryIcon">◉</div>
    <strong>CANISTER<br />VACUUMS</strong>
    <span>View All »</span>
  </a>

  <a href="https://www.carolinavacuums.com/_CGI/SEARCH3.HTML?MAJOR=VAC">
    <div className="categoryIcon">⚡</div>
    <strong>CORDLESS<br />VACUUMS</strong>
    <span>View All »</span>
  </a>

  <a href="https://www.carolinavacuums.com/">
    <div className="categoryIcon">▣</div>
    <strong>AIR CARE</strong>
    <span>View All »</span>
  </a>

  <a href="https://www.carolinavacuums.com/">
    <div className="categoryIcon">⌁</div>
    <strong>FLOOR CARE</strong>
    <span>View All »</span>
  </a>

</div> 

      </section>

      {/* WHY BUY LOCAL */}
      <section className="whyLocal">

        <h2>Why Buy Local</h2>

        <a href={`${site}/locations`} className="localLink">
          Visit any of our 6 Locations »
        </a>

        <div className="whyGrid">

          <div className="whyText">

            <h3>
              Our sales staff is professional, knowledgeable and ready to help
              you find the best products for your home business!
            </h3>

            <p>
              You can depend on us to provide the best and most professional
              service in our industry. Carolina Vacuums & More has the solution
              to all your cleaning needs.
            </p>

            <h3>
              We offer a complete selection of quality Miele, Sebo, Riccar,
              Simplicity & Oreck vacuums!
            </h3>

            <p>
              Shop premium vacuum and home-care products from brands Carolina
              Vacuums customers know and trust.
            </p>

            <h3>We service what we sell!</h3>

            <p>
              Highly trained service technicians help keep vacuums and cleaning
              products in top working condition.
            </p>

            <h3>We are locally owned and operated!</h3>

            <p>
              Carolina Vacuums & More has served customers throughout the
              Carolinas since 1995.
            </p>

            <h3>We guarantee the best price!</h3>

          </div>

          <div className="localCard">

            <Image
              src={logo}
              alt="Carolina Vacuums"
              style={{
                width: '230px',
                height: '150px',
                objectFit: 'contain',
              }}
            />

            <strong>Professional Local Service</strong>

            <a href={`${site}/locations`}>
              Visit A Store
            </a>

          </div>

        </div>

      </section>

      {/* WHY SHOP */}
      <section className="whyShop">

        <h2>WHY SHOP WITH US</h2>

        <a href={`${site}/locations`}>
          Visit any of our 6 Locations »
        </a>

      </section>

      {/* SERVICE */}
      <section className="serviceHero">

        <Image
          src={logo}
          alt="Carolina Vacuums"
          style={{
            width: '220px',
            height: '130px',
            objectFit: 'contain',
          }}
        />

        <h2>Vacuum Service, Sales & Repair</h2>

        <p>
          We can handle vacuum service questions and vacuum repair for
          vacuum brands and models.
        </p>

        <a href={`${site}/vacuum-service-repair`}>
          Service Request
        </a>

      </section>

      {/* REVIEWS */}
      <section className="reviews">

        <div className="reviewTitle">
          <h2>See what our customers are saying...</h2>

          <a href={`${site}/review-showcase`}>
            View More
          </a>
        </div>

        <div className="reviewGrid">

          <div>
            <strong>Customer Review</strong>
            <span>★★★★★</span>
            <p>See recent customer experiences and ratings.</p>
          </div>

          <div>
            <strong>Friendly Local Service</strong>
            <span>★★★★★</span>
            <p>Read what customers say about Carolina Vacuums.</p>
          </div>

          <div>
            <strong>Professional Repair</strong>
            <span>★★★★★</span>
            <p>View customer feedback about service and repairs.</p>
          </div>

        </div>

      </section>

      {/* LOCATIONS */}
      <section className="locationTitle">

        <h2>VISIT ANY ONE OF OUR 6 LOCATIONS!</h2>

        <a href={`${site}/locations`}>
          Find a Store »
        </a>

      </section>

      <section className="locations">

        <div className="locationGrid">

  <a href="https://www.carolinavacuums.com/locations/concord">
    <strong>Concord, NC</strong>
    <span>704-910-4634</span>
    <small>carolinavacs05@gmail.com</small>
  </a>

  <a href="https://www.carolinavacuums.com/locations/greenville">
    <strong>Greenville, SC</strong>
    <span>864-286-6505</span>
    <small>carolinavacs09@gmail.com</small>
  </a>

  <a href="https://www.carolinavacuums.com/locations/mooresville">
    <strong>Mooresville, NC</strong>
    <span>704-660-0556</span>
    <small>carolinavacs12@gmail.com</small>
  </a>

  <a href="https://www.carolinavacuums.com/locations/raleigh">
    <strong>Raleigh, NC</strong>
    <span>919-484-2288</span>
    <small>carolinavacs15@gmail.com</small>
  </a>

  <a href="https://www.carolinavacuums.com/locations/charlotte">
    <strong>Charlotte, NC</strong>
    <span>704-341-9700</span>
    <small>carolinavacs04@gmail.com</small>
  </a>

  <a href="https://www.carolinavacuums.com/locations/winston-salem">
    <strong>Winston-Salem, NC</strong>
    <span>336-768-6068</span>
    <small>carolinavacs02@gmail.com</small>
  </a>

</div> 

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <Image
          src={logo}
          alt="Carolina Vacuums"
          style={{
            width: '180px',
            height: '110px',
            objectFit: 'contain',
          }}
        />

        <p>
          Carolina Vacuums & More
        </p>

      </footer>

      {/* CHEKKIT-STYLE CHAT LAUNCHER */}
      <a
        href={site}
        className="chatLauncher"
        aria-label="Chat with Carolina Vacuums"
      >
        <div className="chatAvatar">
          CV
        </div>

        <div className="chatText">
          Hi there, how can I
          <br />
          help you today?
        </div>
      </a>

      <a
        href={site}
        className="chatBubble"
        aria-label="Open chat"
      >
        ●
      </a>

      {/* APP NAVIGATION BAR */}
      <section className="appBar">

        <a href="tel:+13367686068">
          ☎
          <span>Call</span>
        </a>

        <a href={`${site}/locations`}>
          📍
          <span>Locations</span>
        </a>

        <a href={`${site}/vacuum-service-repair`}>
          🔧
          <span>Service</span>
        </a>

        <button onClick={shareApp}>
          ↗
          <span>Share</span>
        </button>

      </section>

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .page {
          margin: 0;
          min-height: 100vh;
          background: #fff;
          color: #111;
          font-family: Arial, Helvetica, sans-serif;
          padding-bottom: 66px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* TOP BLUE BAR */

        .topBar {
          background: #073774;
          color: white;
        }

        .topNav {
          max-width: 1280px;
          height: 43px;
          margin: auto;
          padding: 0 18px;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .topNav a {
          padding: 12px 13px;
          font-size: 14px;
          font-weight: 600;
        }

        .topNav a:hover {
          background: #0d4c93;
        }

        /* COMPACT HEADER */

        .mainHeader {
          max-width: 1280px;
          height: 116px;
          margin: auto;
          padding: 7px 22px;
          display: grid;
          grid-template-columns: 1fr 310px 1fr;
          gap: 16px;
          align-items: center;
        }

        .searchBox {
          height: 55px;
          max-width: 455px;
          border: 1px solid #777;
          border-radius: 5px;
          padding: 0 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #333;
          font-size: 16px;
        }

        .searchIcon {
          color: #073774;
          font-size: 26px;
          font-weight: 900;
        }

        .logoBox {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .headerRight {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 25px;
        }

        .storeBlock {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-right: 20px;
          border-right: 1px solid #aaa;
        }

        .storeBlock div {
          display: flex;
          flex-direction: column;
        }

        .storeBlock small {
          font-size: 12px;
        }

        .storeBlock strong {
          font-size: 16px;
        }

        .storeIcon {
          color: #073774;
          font-size: 27px;
        }

        .miniLinks {
          display: flex;
          gap: 15px;
        }

        .miniLinks a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .miniLinks span {
          color: #073774;
          font-size: 22px;
        }

        .miniLinks small {
          font-size: 11px;
        }

        /* BLUE CATEGORY ROW */

        .categoryNav {
          height: 56px;
          border-top: 1px solid #bfc7d1;
          border-bottom: 1px solid #bfc7d1;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          background: white;
        }

        .categoryNav a {
          text-align: center;
          color: #06479a;
          font-size: 16px;
          font-weight: 800;
        }

        /* HERO */

        .hero {
          max-width: 1280px;
          margin: 0 auto;
          overflow: hidden;
          background:
            linear-gradient(
              115deg,
              #d7f1fb 0%,
              #b5e4f6 45%,
              #ccecf8 100%
            );
        }

        .heroTop {
          height: 270px;
          padding: 28px 70px 8px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
        }

        .heroLeft h1 {
          margin: 0 0 20px;
          font-size: 30px;
          line-height: 1.1;
          font-weight: 900;
          font-style: italic;
          color: #050505;
        }

        .heroButtons {
          max-width: 565px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .heroButtons a {
          min-height: 54px;
          border: 3px solid #0753ae;
          border-radius: 3px;
          background: rgba(255,255,255,.22);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #063c87;
          font-size: 14px;
          font-weight: 700;
          padding: 8px;
        }

        .heroButtons .centralVac {
          grid-column: 2;
          min-height: 95px;
          flex-direction: column;
          line-height: 1.35;
        }

        .centralVac span {
          display: block;
        }

        .heroRight h2 {
          margin: -4px 0 15px;
          color: #c01616;
          font-family:
            "Brush Script MT",
            "Segoe Script",
            "Lucida Handwriting",
            cursive;
          font-size: 48px;
          line-height: 1;
          font-style: italic;
          font-weight: 900;
        }

        .heroRight ul {
          margin: 0;
          padding-left: 27px;
        }

        .heroRight li {
          margin: 4px 0;
          font-size: 20px;
          line-height: 1.16;
          font-weight: 700;
        }

        /* WAVY QUALITY BANNER */

        .qualityWave {
          position: relative;
          height: 112px;
          overflow: hidden;
        }

        .waveBack {
          position: absolute;
          left: -4%;
          right: -4%;
          top: 19px;
          height: 85px;
          background: #91c8f1;
          border-radius: 50% 50% 10% 10% / 36% 36% 8% 8%;
          transform: rotate(-1deg);
        }

        .waveFront {
          position: absolute;
          left: -3%;
          right: -3%;
          top: 36px;
          min-height: 72px;
          padding: 17px 6%;
          background:
            linear-gradient(
              180deg,
              #78b6eb,
              #408ed4
            );
          border-radius: 45% 45% 0 0 / 30% 30% 0 0;
          transform: rotate(1deg);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          color: white;
          text-shadow: 0 2px 3px rgba(0,0,0,.22);
        }

        .waveFront span {
          font-size: clamp(25px, 3.1vw, 40px);
          font-weight: 900;
          letter-spacing: 4px;
        }

        .waveFront b {
          font-size: 30px;
        }

        /* FEATURED BRANDS */

        .featuredBrands {
          max-width: 1280px;
          margin: auto;
          padding: 18px 30px 38px;
          background: linear-gradient(#51a5df, #236bb4);
          color: white;
          text-align: center;
        }

        .featuredBrands h2 {
          margin: 0 0 20px;
          font-size: 28px;
        }

        .featuredGrid {
          max-width: 820px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
        }

        .brandCard {
          height: 110px;
          border: 3px solid #333;
          border-radius: 9px;
          background: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* SALES STRIP */

        .salesStrip {
          padding: 17px;
          text-align: center;
          background: #20202f;
          color: white;
          font-size: 21px;
        }

        .salesStrip span {
          display: block;
          font-weight: 700;
        }

        /* PRODUCTS */

        .products {
          max-width: 1100px;
          margin: auto;
          padding: 35px 16px;
          text-align: center;
        }

        .products h2 {
          font-size: 26px;
        }

        .productGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .productCard {
          border: 1px solid #bbb;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
        }

        .productVisual {
          height: 150px;
          background: #f1f3f5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .productCard > span {
          padding: 10px;
          background: #252538;
          color: white;
          text-align: center;
        }

        /* LOGO STRIP */

        .logoStrip {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
          align-items: center;
        }

        .logoStrip > a {
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .textLogo {
          font-weight: 800;
          text-align: center;
        }

        .nellies {
          color: #3371a7;
          font-size: 19px;
          font-style: italic;
        }

        .oreck {
          font-size: 23px;
        }

        .simplicity {
          font-size: 12px;
          font-weight: 500;
        }

        /* POPULAR */

        .popular {
          max-width: 1200px;
          margin: auto;
          padding: 40px 35px 50px;
          background: linear-gradient(#2869b0, #091534);
          color: white;
          text-align: center;
        }

        .popular h2 {
          margin: 0;
          font-size: 35px;
          letter-spacing: 2px;
        }

        .visitLink {
          display: inline-block;
          margin: 10px 0 32px;
          text-decoration: underline;
        }

        .popularGrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .popularGrid a {
          min-height: 215px;
          background: white;
          color: #222;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 14px;
        }

        .categoryIcon {
          margin-bottom: 18px;
          font-size: 44px;
        }

        .popularGrid strong {
          font-size: 17px;
        }

        .popularGrid span {
          margin-top: 10px;
          font-size: 12px;
          font-style: italic;
        }

        /* WHY BUY LOCAL */

        .whyLocal {
          max-width: 1150px;
          margin: auto;
          padding: 45px 40px;
          background: #f7f7f7;
          text-align: center;
        }

        .whyLocal h2 {
          margin: 0;
          color: #165093;
          font-size: 30px;
        }

        .localLink {
          display: inline-block;
          margin: 8px 0 35px;
          color: #3979b6;
          font-style: italic;
        }

        .whyGrid {
          display: grid;
          grid-template-columns: 1.5fr .8fr;
          gap: 35px;
          text-align: left;
        }

        .whyText h3 {
          margin: 0 0 8px;
          color: #536d5c;
          font-size: 22px;
        }

        .whyText p {
          margin: 0 0 23px;
          line-height: 1.55;
        }

        .localCard {
          min-height: 330px;
          padding: 25px;
          background: #dce7ea;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .localCard strong {
          margin: 18px 0;
        }

        .localCard a {
          padding: 11px 22px;
          background: #2468a6;
          color: white;
        }

        .whyShop {
          padding: 32px;
          background: #67b689;
          color: white;
          text-align: center;
        }

        .whyShop h2 {
          margin: 0 0 7px;
          font-size: 37px;
        }

        .whyShop a {
          text-decoration: underline;
        }

        /* SERVICE */

        .serviceHero {
          min-height: 340px;
          background: #292929;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 45px 20px;
        }

        .serviceHero h2 {
          margin: 10px;
          font-size: 36px;
        }

        .serviceHero p {
          max-width: 700px;
        }

        .serviceHero a {
          margin-top: 15px;
          border: 1px solid white;
          padding: 10px 20px;
        }

        /* REVIEWS */

        .reviews {
          max-width: 1150px;
          margin: auto;
          padding: 40px 30px;
        }

        .reviewTitle {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          margin-bottom: 30px;
        }

        .reviewTitle h2 {
          margin: 0;
          font-size: 28px;
        }

        .reviewTitle a {
          padding: 10px 18px;
          background: #26263a;
          color: white;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .reviewGrid span {
          display: block;
          margin: 18px 0;
          color: #c79513;
          letter-spacing: 3px;
        }

        /* LOCATIONS */

        .locationTitle {
          padding: 32px 20px;
          background: #286ab0;
          color: white;
          text-align: center;
        }

        .locationTitle h2 {
          margin: 0 0 7px;
          font-size: 34px;
        }

        .locationTitle a {
          text-decoration: underline;
        }

        .locations {
          padding: 50px 25px;
          background: linear-gradient(#282942, #1266b5);
          color: white;
        }

        .locationGrid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px 30px;
        }

        .locationGrid div {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 12px;
        }

        .locationGrid span {
          font-size: 25px;
        }

        /* FOOTER */

        .footer {
          min-height: 180px;
          background: linear-gradient(#18223d, #1471c3);
          color: white;
          text-align: center;
          padding: 30px;
        }

        /* CHAT */

        .chatLauncher {
          position: fixed;
          right: 72px;
          bottom: 88px;
          z-index: 90;
          min-width: 225px;
          min-height: 72px;
          padding: 10px 16px;
          border-radius: 10px;
          background: white;
          box-shadow: 0 4px 18px rgba(0,0,0,.22);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chatAvatar {
          width: 45px;
          height: 45px;
          flex: 0 0 45px;
          border-radius: 50%;
          background: #143f74;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          font-weight: 900;
        }

        .chatText {
          color: #444;
          font-size: 14px;
          line-height: 1.3;
        }

        .chatBubble {
          position: fixed;
          right: 22px;
          bottom: 75px;
          z-index: 91;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #e6a400;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0,0,0,.2);
        }

        /* APP BAR */

        .appBar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 100;
          height: 66px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #ccc;
          background: white;
        }

        .appBar a,
        .appBar button {
          border: none;
          border-right: 1px solid #ddd;
          background: white;
          color: #074796;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3px;
          cursor: pointer;
          font-size: 18px;
        }

        .appBar span {
          font-size: 11px;
          font-weight: 700;
        }

        /* TABLET */

        @media (max-width: 900px) {

          .mainHeader {
            height: auto;
            min-height: 110px;
            grid-template-columns: 1fr;
          }

          .logoBox {
            order: 1;
          }

          .searchBox {
            order: 2;
            max-width: none;
          }

          .headerRight {
            order: 3;
            justify-content: center;
          }

          .heroTop {
            height: auto;
            grid-template-columns: 1fr;
          }

          .waveFront {
            gap: 10px;
          }

          .productGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .popularGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .whyGrid {
            grid-template-columns: 1fr;
          }

          .reviewGrid {
            grid-template-columns: 1fr;
          }

          .locationGrid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        /* PHONE */

        @media (max-width: 600px) {

  /* HIDE DESKTOP TOP MENU ON PHONE */
  .topBar {
    display: none;
  }

  /* MOBILE HEADER - LIKE CAROLINA VACUUMS WEBSITE */
  .mainHeader {
    position: relative;
    height: auto;
    min-height: 205px;
    padding: 15px 12px 10px;
    display: grid;
    grid-template-columns: 52px 1fr 105px;
    grid-template-rows: 65px 58px 48px;
    gap: 8px 6px;
    align-items: center;
    background: white;
  }

  /* hamburger */
  .mainHeader::before {
    content: "☰";
    grid-column: 1;
    grid-row: 1;
    color: #06447f;
    font-size: 27px;
    font-weight: 800;
    text-align: center;
  }

  .logoBox {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logoBox :global(img) {
    width: 135px !important;
    height: 65px !important;
    object-fit: contain !important;
  }

  .headerRight {
    display: contents;
  }

  /* ACCOUNT / CART */
  .miniLinks {
    grid-column: 3;
    grid-row: 1;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
  }

  .miniLinks a {
    font-size: 11px;
  }

  .miniLinks a:nth-child(2) {
    display: none;
  }

  .miniLinks span {
    font-size: 22px;
  }

  .miniLinks small {
    display: block;
    font-size: 11px;
  }

  /* SEARCH ACROSS FULL WIDTH */
  .searchBox {
    grid-column: 1 / -1;
    grid-row: 2;
    max-width: none;
    width: 100%;
    height: 52px;
    border-radius: 5px;
    font-size: 16px;
  }

  /* STORE ROW */
  .storeBlock {
    grid-column: 1 / -1;
    grid-row: 3;
    width: 100%;
    height: 38px;
    padding: 0 6px;
    border-right: none;
    border-top: 1px solid #e1e4e8;
    justify-content: flex-start;
  }

  .storeBlock small {
    display: none;
  }

  .storeBlock strong {
    font-size: 16px;
  }

  .storeIcon {
    font-size: 23px;
  }

  /* HIDE DESKTOP CATEGORY BAR ON PHONE */
  .categoryNav {
    display: none;
  }

  /* HERO - KEEP BOTH SIDES TOGETHER LIKE THE WEBSITE */
  .hero {
    width: 100%;
    margin: 0;
    background:
      linear-gradient(
        115deg,
        #d9f4ef 0%,
        #c7efe6 42%,
        #edf8e7 100%
      );
  }

  .heroTop {
    position: relative;
    min-height: 285px;
    height: auto;
    padding: 24px 14px 42px;
    display: grid;
    grid-template-columns: 42% 58%;
    gap: 10px;
  }

  .heroLeft {
    min-width: 0;
  }

  /* serving line moves to lower right like original */
  .heroLeft h1 {
    position: absolute;
    right: 15px;
    bottom: 24px;
    margin: 0;
    max-width: 58%;
    text-align: right;
    color: #111;
    font-size: 15px;
    line-height: 1.15;
    font-weight: 900;
    font-style: italic;
  }

  .heroButtons {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .heroButtons a {
    min-height: 34px;
    padding: 4px 4px;
    border: 3px solid #0753a9;
    background: #7da2d2;
    color: white;
    font-size: 11px;
    font-weight: 800;
    border-radius: 3px;
  }

  .heroButtons .centralVac {
    grid-column: auto;
    min-height: 42px;
    line-height: 1.15;
  }

  .heroRight {
    min-width: 0;
  }

  .heroRight h2 {
    margin: -3px 0 10px;
    color: #d51d28;
    font-family:
      "Brush Script MT",
      "Segoe Script",
      "Lucida Handwriting",
      cursive;
    font-size: 29px;
    line-height: 1;
    font-style: italic;
    font-weight: 900;
    text-align: left;
    white-space: nowrap;
  }

  .heroRight ul {
    margin: 0;
    padding-left: 17px;
  }

  .heroRight li {
    margin: 3px 0;
    font-size: 11px;
    line-height: 1.15;
    font-weight: 500;
  }

  /* WAVY QUALITY BANNER */
  .qualityWave {
    height: 75px;
    margin-top: -4px;
    position: relative;
    overflow: hidden;
  }

  .waveBack {
    top: 11px;
    height: 62px;
    left: -8%;
    right: -8%;
    border-radius: 50% 50% 5% 5% / 38% 38% 5% 5%;
  }

  .waveFront {
    top: 25px;
    left: -7%;
    right: -7%;
    min-height: 52px;
    padding: 10px 5%;
    gap: 5px;
  }

  .waveFront span {
    font-size: 14px;
    letter-spacing: 1.5px;
    font-weight: 900;
    white-space: nowrap;
  }

  .waveFront b {
    font-size: 13px;
  }

  /* FEATURED BRANDS LIKE ORIGINAL MOBILE SITE */
  .featuredBrands {
    padding: 22px 10px 30px;
    background: #6f99d0;
  }

  .featuredBrands h2 {
    margin-bottom: 14px;
    font-size: 24px;
  }

  .featuredGrid {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .brandCard {
    height: 95px;
    border: 3px solid #063f77;
    border-radius: 8px;
    overflow: hidden;
  }

  .brandCard:nth-child(3) {
    grid-column: 1 / -1;
    width: 50%;
    justify-self: center;
  }

  .brandCard :global(img) {
    max-width: 90% !important;
    max-height: 75px !important;
    object-fit: contain !important;
  }

  /* KEEP SALES STRIP TIGHT */
  .salesStrip {
    padding: 10px 6px;
    font-size: 13px;
  }

  /* REST OF PAGE */
  .productGrid {
    grid-template-columns: 1fr 1fr;
    gap: 7px;
  }

  .productVisual {
    height: 105px;
  }

  .logoStrip {
    grid-template-columns: repeat(3, 1fr);
    padding: 14px 8px;
  }

  .popular {
    padding: 32px 12px;
  }

  .popular h2 {
    font-size: 26px;
  }

  .popularGrid {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .popularGrid a {
    min-height: 175px;
  }

  .whyLocal {
    padding: 38px 18px;
  }

  .whyGrid {
    grid-template-columns: 1fr;
  }

  .whyText h3 {
    font-size: 19px;
  }

  .reviewTitle {
    flex-direction: column;
  }

  .reviewGrid {
    grid-template-columns: 1fr;
  }

  .locationGrid {
    grid-template-columns: 1fr 1fr;
    gap: 30px 8px;
  }

  .locationGrid span {
    font-size: 19px;
  }

  .locationGrid small {
    font-size: 10px;
  }

  /* CHAT */
  .chatLauncher {
    right: 58px;
    bottom: 79px;
    min-width: 190px;
    min-height: 60px;
    padding: 8px 10px;
  }

  .chatAvatar {
    width: 38px;
    height: 38px;
    flex-basis: 38px;
  }

  .chatText {
    font-size: 12px;
  }

  .chatBubble {
    right: 10px;
    bottom: 72px;
    width: 45px;
    height: 45px;
  }

} 

      `}</style>

    </main>
  )
}
