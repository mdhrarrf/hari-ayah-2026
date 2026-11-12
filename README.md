# Website Hari Ayah

## Menjalankan
    npm install
    npm run dev      # http://localhost:3000
    npm run build    # cek build produksi

## Struktur
    content/site.js        <- SEMUA teks, nama panggilan, surat, tanda tangan, daftar foto
    public/photos/         <- taruh foto di sini
    app/page.jsx           <- susunan section
    app/layout.jsx         <- judul, meta description, Open Graph, font
    app/icon.svg           <- favicon
    components/            <- Reveal (fade-in), Gallery (galeri + tampilan besar)
    tailwind.config.js     <- palet warna

## Mengganti konten
- Teks & surat: edit content/site.js (satu string = satu paragraf).
- Foto: salin ke public/photos/, isi `src: "/photos/nama.jpg"` (hero.photo dan photos.items). Kosong = placeholder.
- Warna: tailwind.config.js. Favicon: app/icon.svg.

## Deploy ke Vercel
1. Upload folder ini ke repository GitHub (jangan sertakan node_modules).
2. Buka vercel.com -> Add New -> Project -> pilih repository.
3. Framework terdeteksi otomatis (Next.js). Klik Deploy. Tidak perlu environment variable.
Alternatif: `npx vercel` di folder proyek.
