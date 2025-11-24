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
    // Çiçek patlaması sayacı
    let flowerBurstCount = 0;
    const maxFlowerBursts = 3;

    // Kalp ve çiçek tıklama efekti
    document.addEventListener('click', (e) => {
        // Eğer flip card tıklanıyorsa kalp oluşturma
        if (!e.target.closest('.flip-card')) {
            createClickHeart(e.pageX, e.pageY);

            // Her 3 tıklamada bir çiçek patlaması
            flowerBurstCount++;
            if (flowerBurstCount >= maxFlowerBursts) {
                createFlowerBurst(e.pageX, e.pageY);
                flowerBurstCount = 0;
            }
        }
    });

    // Flip card tıklama efekti
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Love reasons kartları - tıklayınca toggle
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => {
        card.addEventListener('click', function() {
            // Diğer kartların active'ini kaldır (mobil için)
            reasonCards.forEach(c => {
                if (c !== this) {
                    c.classList.remove('active');
                }
            });
            // Bu kartı toggle et
            this.classList.toggle('active');
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

// Çiçek patlaması efekti
function createFlowerBurst(x, y) {
    const flowers = ['🌺', '🌸', '🌼', '🌻', '🌷', '🌹', '💐', '💜'];
    const burstCount = 12;

    for (let i = 0; i < burstCount; i++) {
        const flower = document.createElement('div');
        const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
        flower.innerHTML = randomFlower;
        flower.className = 'flower-burst';

        const angle = (Math.PI * 2 * i) / burstCount;
        const distance = 80 + Math.random() * 40;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        flower.style.left = x + 'px';
        flower.style.top = y + 'px';
        flower.style.setProperty('--tx', tx + 'px');
        flower.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(flower);

        setTimeout(() => flower.remove(), 1500);
    }

    // Işıltı efektleri ekle
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createSparkle(x, y), i * 50);
    }
}

// Işıltı efekti
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-effect';

    const dx = (Math.random() - 0.5) * 100;
    const dy = (Math.random() - 0.5) * 100;

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.setProperty('--dx', dx + 'px');
    sparkle.style.setProperty('--dy', dy + 'px');

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
}

// Otomatik çiçek yağmuru - belirli aralıklarla
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createFlowerBurst(x, y);
}, 15000); // Her 15 saniyede bir rastgele çiçek patlaması
