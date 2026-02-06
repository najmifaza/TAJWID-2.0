Migrasi dari HTML/CSS/JS murni ke React + Vite adalah langkah yang bagus untuk membuat proyek seperti **TajwidApps** menjadi lebih terstruktur dan mudah dikelola.

Berdasarkan struktur file proyek kamu yang sudah ada (menggunakan banyak file HTML terpisah untuk materi), berikut adalah _to-do list_ langkah demi langkah untuk melakukan migrasi:

### 1. Inisialisasi Proyek Vite

- [x] Jalankan `npm create vite@latest tajwidapps-react` di terminal.
- [x] Pilih framework **React** dan variant **JavaScript** (atau TypeScript jika kamu ingin mencoba).
- [x] Masuk ke folder: `cd tajwidapps-react`.
- [x] Instal dependensi: `npm install`.
- [x] Instal Bootstrap (karena proyek lamamu memakainya): `npm install bootstrap bootstrap-icons`.

### 2. Penataan Aset (Assets Migration)

- [x] Pindahkan folder `assets/img` dari proyek lama ke folder `public/assets/img` di proyek baru (agar _path_ gambar tidak rusak).
- [x] Pindahkan isi file `assets/css/main.css` ke `src/index.css` atau buat file baru di `src/styles/main.css`.

### 3. Konfigurasi Entry Point (Global Import)

- [x] Di file `src/main.jsx`, impor Bootstrap agar aktif di seluruh aplikasi:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css"; // CSS kustom kamu
```

### 4. Membuat Komponen Layout (Shared Components)

- [ ] **Navbar:** Ambil kode `<nav>` dari `index.html` dan buat menjadi komponen `src/components/Navbar.jsx`.
- [ ] **Footer:** Ambil kode `<footer>` dan buat menjadi `src/components/Footer.jsx`.
- [ ] **MateriCard:** Karena kamu punya banyak file materi (Nun Sukun, Mim Sukun, dll), buat satu komponen kartu yang bisa digunakan berulang kali.

### 5. Setup Routing (Sangat Penting)

Di proyek lama, kamu berpindah halaman menggunakan file `.html` yang berbeda. Di React, kita menggunakan **React Router**.

- [ ] Instal library: `npm install react-router-dom`.
- [ ] Di `App.jsx`, definisikan rute untuk setiap halaman:
- `/` -> Home (Isi dari `index.html`)
- `/materi` -> List Materi (`materi-tajwid.html`)
- `/materi/:id` -> Detail materi (Ini akan menggantikan file-file seperti `1Hukum Nun Sukun.html`, dll).

### 6. Migrasi Konten ke Format JSON/Data

Daripada membuat puluhan file `.jsx` untuk setiap hukum tajwid, sebaiknya:

- [ ] Buat file `src/data/materi.json`.
- [ ] Masukkan teks dan penjelasan dari file-file HTML materi kamu ke dalam array objek di JSON tersebut.
- [ ] Gunakan fungsi `.map()` di React untuk menampilkan konten secara dinamis.

### 7. Integrasi JavaScript Kustom

- [ ] Cari logika di `assets/js/main.js` (seperti animasi AOS atau GLightbox).
- [ ] Instal versi React-nya jika tersedia (contoh: `npm install aos`), lalu inisialisasi di dalam `useEffect` pada `App.jsx`.

### 8. Cleanup & Testing

- [ ] Ganti semua tag `class` menjadi `className`.
- [ ] Pastikan semua tag seperti `<img>` dan `<br>` memiliki penutup mandiri (`<img />`, `<br />`).
- [ ] Jalankan `npm run dev` dan cek apakah navigasi antar hukum tajwid sudah berjalan lancar.

**Saran Tambahan:**
Karena proyek **TajwidApps** kamu memiliki banyak konten edukasi, penggunaan **React-Bootstrap** (seperti yang saya tawarkan sebelumnya) akan sangat membantu dalam merapikan komponen _Accordion_ atau _Modal_ untuk penjelasan hukum tajwid yang lebih interaktif.

Mana dari langkah di atas yang ingin kamu bahas kode programnya terlebih dahulu?
