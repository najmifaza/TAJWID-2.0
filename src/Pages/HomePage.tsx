import { useState } from "react";
function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    // Jika diklik yang sedang aktif, maka tutup (null). Jika beda, set index baru.
    setActiveFaq(activeFaq === index ? null : index);
  };
  return (
    <>
      <main className="main">
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="hero-content"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="company-badge mb-4">
                    <i
                      className="bi bi-circle-fill me-2"
                      style={{ fontSize: "0.5rem" }} // Perbaikan style object
                    ></i>
                    Platform Belajar Tajwid #1
                  </div>

                  <h1 className="mb-4">
                    Baca Al-Qur'an <br />
                    Lebih <br />
                    <span className="accent-text text-gradient">
                      Fasih & Tartil
                    </span>
                  </h1>

                  <p className="mb-4 mb-md-5">
                    Tazakka Tajwid membantu Anda memahami hukum bacaan,
                    makharijul huruf, dan sifat huruf dengan metode interaktif
                    yang mudah dipahami oleh pemula hingga mahir.
                  </p>

                  <div className="hero-buttons">
                    <a
                      href=" materi-tajwid.html"
                      className="btn btn-primary me-0 me-sm-2 mx-1"
                    >
                      Mulai Belajar
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=Xszm9b05ErE"
                      className="btn btn-link mt-2 mt-sm-0 glightbox"
                    >
                      <i className="bi bi-play-circle me-1"></i>
                      Pengenalan Ilmu Tajwid
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="hero-image"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  <img
                    src="assets/img/illustration-1.png"
                    alt="Hero Image"
                    className="img-fluid"
                  />

                  <div className="customers-badge">
                    <h5 className="mb-0 mt-2">⭐⭐⭐⭐⭐</h5>
                    <p className="mb-0 mt-1">
                      4.9/5 Rating rata-rata dari ratusan pengguna yang belajar
                      Tajwid bersama kami
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Penutup Container Hero yang tadinya hilang */}
        </section>

        <section id="kurikulum" className="services section light-background">
          <div className="container section-title" data-aos="fade-up">
            <p style={{ color: "#059669", fontWeight: "bold", margin: "3px" }}>
              Kurikulum
            </p>
            <h2>Materi Belajar Komprehensif</h2>
            <p>
              Kami menyusun materi dari dasar hingga mahir agar mudah diikuti
              oleh siapa saja
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="arabic-text">ن</i>
                  </div>
                  <div>
                    <h3>Nun Mati & Tanwin</h3>
                    <p>
                      Pelajari hukum Izhar, Idgham, Iqlab, dan Ikhfa dengan
                      contoh audio yang jelas.
                    </p>
                    <a href="service-details.html" className="read-more">
                      Read More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="arabic-text">م</i>
                  </div>
                  <div>
                    <h3>Mim Mati</h3>
                    <p>
                      Memahami hukum Ikhfa Syafawi, Idgham Mimi, dan Izhar
                      Syafawi secara mendalam.
                    </p>
                    <a href="service-details.html" className="read-more">
                      Read More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0">
                    <span className="arabic-text">قلے</span>
                  </div>
                  <div>
                    <h3>Waqaf & Ibtida'</h3>
                    <p>
                      Mengenal tanda-tanda berhenti dalam Al-Qur'an agar nafas
                      terjaga dan arti ayat tetap sempurna saat dibaca.
                    </p>
                    <a href="service-details.html" className="read-more">
                      Read More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi-activity"></i>
                  </div>
                  <div>
                    <h3>Hukum Mad</h3>
                    <p>
                      Mengenal panjang pendek bacaan, mulai dari Mad Thabi'i
                      hingga 13 cabang Mad Far'i.
                    </p>
                    <a href="service-details.html" className="read-more">
                      Read More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features-2" className="features-2 section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Belajar Jadi Lebih Mudah & Nyaman</h2>
            <p>
              Kami menghadirkan teknologi terbaik untuk mendukung kenyamanan
              ibadah dan belajar Anda.
            </p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div
                  className="feature-item text-end mb-5"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="d-flex align-items-center justify-content-end gap-4">
                    <div className="feature-content">
                      <h3>Akses di Semua Perangkat</h3>
                      <p>
                        Belajar kapan saja melalui HP, tablet, atau laptop tanpa
                        hambatan.
                      </p>
                    </div>
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-display"></i>
                    </div>
                  </div>
                </div>

                <div
                  className="feature-item text-end mb-5"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="d-flex align-items-center justify-content-end gap-4">
                    <div className="feature-content">
                      <h3>Materi Ringan & Padat</h3>
                      <p>
                        Kurikulum disusun secara sistematis agar materi yang
                        berat terasa ringan dipelajari.
                      </p>
                    </div>
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-feather"></i>
                    </div>
                  </div>
                </div>

                <div
                  className="feature-item text-end"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <div className="d-flex align-items-center justify-content-end gap-4">
                    <div className="feature-content">
                      <h3>Visual Jernih & Tajam</h3>
                      <p>
                        Tampilan interface yang bersih dan tajam, membuat mata
                        tidak lelah saat belajar lama.
                      </p>
                    </div>
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-eye"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="phone-mockup text-center">
                  <img
                    src="assets/img/phone-app-screen.png"
                    alt="Phone Mockup"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="feature-item mb-5"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="d-flex align-items-center gap-4">
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-code-square"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Aplikasi Stabil & Aman</h3>
                      <p>
                        Menggunakan arsitektur kode yang bersih dan valid.
                        Dideploy melalui Vercel untuk uptime tinggi.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="feature-item mb-5"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="d-flex align-items-center gap-4">
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-phone"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Tampilan Responsif</h3>
                      <p>
                        Layout otomatis menyesuaikan ukuran layar Anda untuk
                        kenyamanan membaca optimal.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="feature-item"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className="d-flex align-items-center gap-4">
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-browser-chrome"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Kompatibel Semua Browser</h3>
                      <p>
                        Bisa diakses lancar melalui Chrome, Safari, maupun
                        browser lainnya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="testimonials section light-background"
        >
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}
            </div>
          </div>
        </section>
        {/* <!-- /Testimonials Section --> */}

        {/* <!-- Faq Section --> */}
        <section className="faq-9 faq section light-background" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-5" data-aos="fade-up">
                <h2 className="faq-title">Punya Pertanyaan? Cek FAQ Kami</h2>
                <p className="faq-description">
                  Temukan jawaban atas pertanyaan yang sering diajukan mengenai
                  materi tajwid, fitur aplikasi, dan cara penggunaan TajwidApps
                  untuk memaksimalkan proses belajar Anda Temukan jawaban atas
                  pertanyaan yang sering diajukan mengenai materi tajwid, fitur
                  aplikasi, dan cara penggunaan TajwidApps untuk memaksimalkan
                  proses belajar Anda.
                </p>
                <div
                  className="faq-arrow d-none d-lg-block"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <svg
                    className="faq-arrow"
                    width="200"
                    height="211"
                    viewBox="0 0 200 211"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
                <div className="faq-container">
                  <div
                    className={`faq-item ${activeFaq === 1 ? "faq-active" : ""}`}
                    onClick={() => toggleFaq(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>Apa itu TajwidApps Tazakka?</h3>
                    <div className="faq-content">
                      <p>
                        TajwidApps adalah platform edukasi berbasis web yang
                        dirancang untuk membantu pengguna mempelajari hukum
                        bacaan Al-Qur'an (Tajwid), makharijul huruf, dan sifat
                        huruf secara fasih dan tartil.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                  <div
                    className={`faq-item ${activeFaq === 2 ? "faq-active" : ""}`}
                    onClick={() => toggleFaq(2)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>Materi apa saja yang tersedia di aplikasi ini?</h3>
                    <div className="faq-content">
                      <p>
                        Aplikasi ini menyediakan kurikulum lengkap yang mencakup
                        16 bab utama, mulai dari Hukum Nun Sukun, Mim Sukun,
                        Mad, Idgham, Qalqalah, hingga bacaan Gharib dan Waqaf.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}
                  <div
                    className={`faq-item ${activeFaq === 3 ? "faq-active" : ""}`}
                    onClick={() => toggleFaq(3)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>Apakah aplikasi ini bisa diakses lewat HP?</h3>
                    <div className="faq-content">
                      <p>
                        Ya, aplikasi ini dibangun dengan desain responsif yang
                        menyesuaikan otomatis di berbagai ukuran layar, baik
                        desktop, tablet, maupun ponsel.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                  <div
                    className={`faq-item ${activeFaq === 4 ? "faq-active" : ""}`}
                    onClick={() => toggleFaq(4)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>Apakah tersedia latihan soal?</h3>
                    <div className="faq-content">
                      <p>
                        Ya, di setiap akhir pembahasan materi terdapat sesi
                        latihan untuk menguji pemahaman Anda terhadap hukum
                        bacaan yang telah dipelajari.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                  <div
                    className={`faq-item ${activeFaq === 5 ? "faq-active" : ""}`}
                    onClick={() => toggleFaq(5)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>Bagaimana cara menghubungi pengembang?</h3>
                    <div className="faq-content">
                      <p>
                        Anda dapat mengirimkan pesan melalui formulir kontak
                        yang tersedia di bagian bawah halaman utama atau melalui
                        email yang tertera.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item-->
                <!-- End Faq item--> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Hubungi pengembang web dengan mudah</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-4 g-lg-5">
              <div className="col-lg-5">
                <div
                  className="info-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3>Informasi Kontak</h3>
                  {/* ... isi info box ... */}
                </div>
              </div>

              <div className="col-lg-7">
                <div
                  className="contact-form"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3>Hubungi Kami</h3>
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="php-email-form"
                  >
                    <input
                      type="hidden"
                      name="access_key"
                      value="e96a6699-caaf-4436-ab05-3afdee8fa0ec"
                    />
                    <input
                      type="hidden"
                      name="redirect"
                      value="https://edu-tajwid.vercel.app/"
                    />

                    <div className="row gy-4">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={6}
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
