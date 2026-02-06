function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <img src="assets/img/logo.png" alt="" />
          <h1 className="sitename"></h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#kurikulum">Kurikulum</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="dropdown">
              <a href="materi-tajwid.html">
                <span>Materi</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="1Hukum Nun Sukun Dan Tanwin.html">
                    Hukum Nun Sukun Dan Tanwin
                  </a>
                </li>
                <li>
                  <a href="2Hukum Mim Sukun.html">Hukum Mim Sukun</a>
                </li>
                <li>
                  <a href="3Hukum Mim Tasydid Dan Nun Tasydid.html">
                    Hukum Mim Tasydid Dan Nun Tasydid
                  </a>
                </li>
                <li>
                  <a href="4Hukum Lam Tarif .html">Hukum Lam Tarif </a>
                </li>
                <li>
                  <a href="5Hukum Lam Tebal dan Tipis.html">
                    Hukum Lam Tebal Dan Tipis
                  </a>
                </li>
                <li>
                  <a href="6Idgham Mutamatsilain.html">Idgham Mutamatsilain </a>
                </li>
                <li>
                  <a href="7Idgham Mutaqaribain.html">Idgham Mutaqaribain </a>
                </li>
                <li>
                  <a href="8Idgham Mutajanisain.html">Idgham Mutajanisain </a>
                </li>
                <li>
                  <a href="9Hukum Bacaan Panjang.html">
                    Hukum Bacaan Panjang (Mad)
                  </a>
                </li>
                <li>
                  <a href="10Hukum Membaca Ra.html">Hukum Membaca Ra</a>
                </li>
                <li>
                  <a href="11Hukum Qalqalah.html">Hukum Qalqalah </a>
                </li>
                <li>
                  <a href="12Bacaan Imalah Dan Isymam.html">
                    Bacaan Imalah Dan Isymam
                  </a>
                </li>
                <li>
                  <a href="13Bacaan Naql Dan Tashil.html">
                    Bacaan Naql Dan Tashil
                  </a>
                </li>
                <li>
                  <a href="14Bacaan Saktah Dan Hukum Sad Dibaca Sin.html">
                    Bacaan Saktah Dan Hukum Sad Dibaca Sin
                  </a>
                </li>
                <li>
                  <a href="15Mad Fathah Dibaca Pendek.html">
                    Mad Fathah Dibaca Pendek
                  </a>
                </li>
                <li>
                  <a href="16Hukum Waqaf Dan Ibtida'.html">
                    Hukum Waqaf Dan Ibtida'
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="materi-tajwid.html">
          <i className="bi bi-play-fill"></i>
          Mulai Belajar
        </a>
      </div>
    </header>
  );
}

export default Header;
