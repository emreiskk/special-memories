// Love Counter - Birlikte geçirilen zamanı hesaplar
// BURAYA İLK BULUŞMA TARİHİNİZİ GİRİN (Yıl, Ay-1, Gün, Saat, Dakika)
// Örnek: new Date(2024, 0, 15, 14, 30) = 15 Ocak 2024, Saat 14:30
const startDate = new Date(2025, 7, 10, 8, 0); // 10 Ağustos 2025, Sabah 08:00

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    // Zamanı hesapla
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    // DOM'u güncelle
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// Sayacı başlat ve her dakika güncelle
updateCounter();
setInterval(updateCounter, 60000);

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.photo-card, .timeline-item, .memory-card, .counter');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Rastgele romantik sözler (isteğe bağlı)
const loveQuotes = [
    "Seninle her an özel...",
    "Gülüşün benim en sevdiğim şey...",
    "Seninle geleceğe bakıyorum...",
    "Her gün seni daha çok seviyorum...",
    "Seninle hayat daha güzel..."
];

// Console'a gizli mesaj (tarayıcı geliştirici araçlarını açanlara sürpriz)
console.log("%c❤️ Bu siteyi sevgiyle yaptım ❤️", "color: #e74c3c; font-size: 20px; font-weight: bold;");
console.log("%cSeni seviyorum! 💕", "color: #667eea; font-size: 16px;");

// Sayfa yüklendiğinde özel efektler
document.addEventListener('DOMContentLoaded', () => {
    // Kalp tıklama efekti
    document.addEventListener('click', (e) => {
        // Eğer flip card tıklanıyorsa kalp oluşturma
        if (!e.target.closest('.flip-card')) {
            createClickHeart(e.pageX, e.pageY);
        }
    });

    // Flip card tıklama efekti
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Bucket list checkbox'ları - localStorage ile kaydet
    const bucketCheckboxes = document.querySelectorAll('.bucket-checkbox');

    // Sayfa yüklendiğinde kaydedilmiş durumları yükle
    bucketCheckboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === 'true') {
            checkbox.checked = true;
        }

        // Checkbox değiştiğinde kaydet
        checkbox.addEventListener('change', function() {
            localStorage.setItem(this.id, this.checked);
        });
    });
});

// Tıklandığında kalp oluştur
function createClickHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 2s ease-out forwards';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// CSS animasyonu ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);
