# 🚀 Web Sitesini Yayınlama Talimatları

## 📋 Adım Adım Rehber

### 1️⃣ GitHub Repository Oluştur

1. https://github.com adresine git ve giriş yap
2. Sağ üst köşeden **"+" → "New repository"**
3. Repository ayarları:
   - **Name**: `special-memories` (veya istediğin isim)
   - **Visibility**: ✅ **Public** (önemli! GitHub Pages için gerekli)
   - ❌ README veya başka dosya ekleme
4. **"Create repository"** butonuna tıkla

### 2️⃣ Kodu GitHub'a Yükle

Terminal veya Git Bash'de şu komutları çalıştır:

```bash
cd /c/Users/emrem/special-memories-site

# GitHub kullanıcı adını değiştir!
git remote add origin https://github.com/KULLANICI-ADIN/special-memories.git

git branch -M main
git push -u origin main
```

💡 **Önemli**: `KULLANICI-ADIN` yerine kendi GitHub kullanıcı adını yaz!

### 3️⃣ GitHub Pages'i Aktif Et

1. GitHub'da yeni oluşturduğun repository sayfasına git
2. **"Settings"** (Ayarlar) sekmesine tıkla
3. Sol menüden **"Pages"** bölümünü bul
4. **"Source"** altında:
   - Branch: **main** seç
   - Folder: **/ (root)** seç
5. **"Save"** butonuna tıkla
6. ⏳ 1-2 dakika bekle
7. 🎉 Sayfayı yenile, üstte yeşil bir kutu ile site URL'ini göreceksin:
   ```
   Your site is live at https://KULLANICI-ADIN.github.io/special-memories/
   ```

### 4️⃣ QR Kod Oluştur

Site yayına alındıktan sonra:

1. **QR Kod Oluşturma Siteleri** (ücretsiz):
   - https://qr.io
   - https://www.qr-code-generator.com
   - https://www.qrcode-monkey.com

2. Site URL'ni yapıştır (örnek: `https://kullaniciadin.github.io/special-memories/`)

3. **Özelleştir** (isteğe bağlı):
   - QR kod rengini değiştir (mor, pembe gibi romantik renkler)
   - Logo ekle (kalp ikonu gibi)
   - Kenar stilini değiştir

4. **İndir**:
   - PNG formatında indir (en yüksek kalitede)
   - Yazdırabilirsin veya dijital olarak paylaşabilirsin

### 5️⃣ Siteyi Özelleştir

#### 📸 Fotoğraf Eklemek

1. Fotoğrafları `special-memories-site` klasörüne koy (örn: `images/` klasörü oluştur)
2. `index.html` dosyasını aç
3. `.photo-placeholder` div'lerini şununla değiştir:
   ```html
   <img src="images/foto1.jpg" alt="Özel anımız" style="width: 100%; height: 200px; object-fit: cover;">
   ```

#### 📅 Tarihleri Güncelle

1. **`script.js`** dosyasını aç
2. İlk satırları bul:
   ```javascript
   const startDate = new Date(2024, 0, 1, 0, 0);
   ```
3. Kendi tarihinle değiştir:
   ```javascript
   // Ay değerleri: 0=Ocak, 1=Şubat, ..., 11=Aralık
   const startDate = new Date(2024, 5, 15, 18, 30); // 15 Haziran 2024, 18:30
   ```

4. **`index.html`** dosyasında timeline tarihlerini doldur

#### 💝 Metinleri Kişiselleştir

`index.html` dosyasındaki:
- Mesajları kendi sözlerinizle değiştir
- Anıları ekle/çıkar
- İsimleri güncelle

### 6️⃣ Değişiklikleri Yayınla

Değişiklik yaptıktan sonra:

```bash
cd /c/Users/emrem/special-memories-site
git add .
git commit -m "Site içeriği güncellendi ❤️"
git push
```

2-3 dakika sonra değişiklikler sitede görünür!

---

## 🎁 Hediye Etme Fikirleri

### Dijital Sunum
- QR kodu telefonuna kaydet
- Özel bir mesajla birlikte gönder

### Fiziksel Sunum
- QR kodu yazdır
- Güzel bir karta yapıştır
- Kart içine romantik bir not yaz
- Hediye olarak sun

### Sürpriz Sunum
- QR kodu güzel bir çerçeveye koy
- Küçük bir hediye kutusuna koy
- Özel bir yemekte telefonu göster

---

## ❓ Sorun Çözme

### Site açılmıyor?
- GitHub Pages'in aktif olduğunu kontrol et
- URL'in doğru olduğundan emin ol
- 5-10 dakika bekle (ilk yayınlama zaman alabilir)

### Değişiklikler görünmüyor?
- Git push yaptığından emin ol
- Tarayıcı cache'ini temizle (Ctrl+Shift+R)
- 2-3 dakika bekle

### Fotoğraflar yüklenmiyor?
- Fotoğraf yollarını kontrol et
- Fotoğraf dosya isimlerinde Türkçe karakter olmasın
- Git add . yaparak fotoğrafları da commit ettiğinden emin ol

---

## 💌 İpuçları

1. **Gizli tut**: Repository'yi private yapmak istersen (ücretli), Netlify veya Vercel kullanabilirsin
2. **Özel domain**: İstersen özel bir domain adı satın alıp bağlayabilirsin
3. **Müzik ekle**: `index.html`'e `<audio>` etiketi ile romantik bir müzik ekleyebilirsin
4. **Video ekle**: Özel bir video mesajı eklemek için `<video>` kullanabilirsin

---

🎊 **İyi Eğlenceler ve Mutluluklar!** ❤️
