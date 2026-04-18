# Debug Guide - DetailTeks.html tidak muncul

## Langkah-langkah untuk Debug:

### 1. Buka Browser Console
- **Tekan F12** atau **Ctrl+Shift+I** untuk membuka Developer Tools
- Pilih tab **Console**

### 2. Klik Assignment di Assignments.html
- Buka halaman Assignments.html
- Klik salah satu assignment card
- Amati console untuk error messages

### 3. Cari Informasi di Console

**Catat output console yang muncul:**
- Apakah ada error?
- Apakah ada log dengan `=== LoadTaskDetails Started ===`?
- Apakah ada log dengan `=== DOMContentLoaded Event Fired ===`?
- Apakah URL berubah menjadi `DetailTeks.html?id=1` (atau id yang lain)?

### 4. Screenshot/Lapor Output Console

Silakan copy-paste output dari console, khususnya:
- Error messages (dengan warna merah)
- Log messages yang dimulai dengan `===` 
- URL yang ditampilkan di address bar

## Debugging Checklist:

- [ ] Browser console tidak menampilkan error
- [ ] URL berubah menjadi `DetailTeks.html?id=1`
- [ ] Ada log `=== LoadTaskDetails Started ===`
- [ ] Ada log `=== DOMContentLoaded Event Fired ===`
- [ ] Halaman DetailTeks.html sudah terload (bisa lihat title berubah)
- [ ] Content/konten task sudah ditampilkan

## Common Issues & Solutions:

### Issue 1: URL tidak berubah
- **Penyebab:** JavaScript onclick handler tidak berfungsi
- **Solusi:** Periksa apakah ada JavaScript error di console

### Issue 2: URL berubah tapi halaman tidak muncul
- **Penyebab:** Halaman sedang load atau ada CSS yang menyembunyikan
- **Solusi:** Wait 2-3 detik, refresh halaman (F5)

### Issue 3: Halaman muncul tapi content kosong
- **Penyebab:** Task data tidak ditemukan di localStorage
- **Solusi:** Buka Console > Application > Local Storage, cek apakah ada `classteams_tasks`

### Issue 4: Ada error di console
- **Solusi:** Screenshot error dan lapor

---

## Langkah Troubleshooting Lengkap:

```
1. Buka Assignments.html
2. F12 - buka console
3. Klik salah satu assignment
4. Tunggu halaman load
5. Lihat console untuk error/log
6. Lapor hasil ke sini dengan:
   - Screenshot console
   - URL yang ditampilkan di address bar
   - Apa yang terlihat di halaman (blank, styled, ada error, dll)
```

---

**Informasi yang membantu untuk debugging:**
- Browser dan versi yang digunakan
- Apakah task sudah pernah berhasil ditampilkan sebelumnya?
- Apakah ada custom server/localhost atau file:///?
