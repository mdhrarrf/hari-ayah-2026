// ===== SEMUA ISI WEBSITE DIUBAH DI FILE INI =====
export const site = {
  fatherName: "Ayah",            // contoh: "Ayah", "Papa", "Bapak"
  date: "12 November 2026",
  title: "Untuk Ayah — Selamat Hari Ayah 2026",
  description: "Sebuah halaman kecil untuk Ayah, dari anaknya.",

  hero: {
    heading: "Untuk Ayah.",
    subheading:
      "Sebuah halaman kecil untuk seseorang yang punya peran besar dalam hidup saya.",
    button: "Lihat Pesan",
    // Foto utama. Kosongkan ("") untuk memakai placeholder.
    photo: "", // contoh: "/photos/hero.jpg"
    photoAlt: "Foto Ayah",
  },

  message: {
    heading: "Sebelum membaca",
    paragraphs: [
      "Terima kasih untuk semua hal yang mungkin tidak selalu sempat saya ucapkan. Untuk waktu, perhatian, usaha, dan banyak hal yang telah Ayah lakukan selama ini.",
    ],
  },

  // Maksimal 3–5 foto. Letakkan file di public/photos/ lalu isi src.
  photos: {
    heading: "Kenangan",
    items: [
      { src: "", alt: "Foto kenangan 1", caption: "" },
      { src: "", alt: "Foto kenangan 2", caption: "" },
      { src: "", alt: "Foto kenangan 3", caption: "" },
    ],
  },

  letter: {
    heading: "Surat untuk Ayah",
    greeting: "Yah,",
    // Satu string = satu paragraf.
    paragraphs: [
      "Mungkin saya tidak selalu pandai menyampaikan apa yang saya rasakan. Tapi saya ingin Ayah tahu bahwa saya menghargai semua yang sudah Ayah lakukan.",
      "Terima kasih sudah menjadi bagian penting dalam perjalanan hidup saya.",
      "Semoga Ayah selalu diberi kesehatan dan kebahagiaan. Saya berharap masih ada banyak waktu untuk berbagi cerita dan menghabiskan waktu bersama.",
    ],
  },

  closing: {
    lines: ["Selamat Hari Ayah, Yah.", "Terima kasih untuk semuanya."],
    signature: "Dari anakmu.",
  },
};
