// === Kategorien & Buttons ===
const navButtons = document.querySelectorAll(".nav-btn");
const categories = document.querySelectorAll(".category");
const buyButtons = document.querySelectorAll(".buy-btn");
const clickSound = document.getElementById("clickSound");

// === Kategorie-Wechsel mit sanftem Fade-/Slide-Effekt ===
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Aktiven Button markieren
    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    // Kategorie-Wechsel mit Animation
    categories.forEach(cat => {
      if (cat.id === category) {
        cat.classList.add("active");
      } else {
        cat.classList.remove("active");
      }
    });
  });
});

// === Soundeffekt + Button-Animation beim Kauf ===
buyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Animation abspielen
    btn.classList.add("clicked");

    // Sound abspielen (sofern vorhanden)
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {}); // verhindert Fehler, falls Autoplay blockiert ist
    }

    // Animation nach kurzer Zeit zurücksetzen
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });
});

// === Hintergrundmusik Steuerung ===
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let musicPlaying = false;

if (musicBtn && bgMusic) {
  musicBtn.addEventListener("click", () => {
    if (!musicPlaying) {
      bgMusic.volume = 0.3; // leiser (0.0 - 1.0)
      bgMusic.play();
      musicBtn.textContent = "🔇 Musik ausschalten";
      musicPlaying = true;
    } else {
      bgMusic.pause();
      musicBtn.textContent = "🎵 Musik einschalten";
      musicPlaying = false;
    }
  });
}
