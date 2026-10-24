const soundDescriptions = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH",
};

const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");

// Função universal blindada para tocar o pad
const playPad = (key) => {
  const upperKey = key.toUpperCase();
  const audioElement = document.getElementById(upperKey);
  const pad = audioElement ? audioElement.parentElement : null;

  if (audioElement && soundDescriptions[upperKey]) {
    // 1. Atualizar display com o texto único
    display.textContent = soundDescriptions[upperKey];

    // 2. Resetar e tocar com tratamento seguro de Promise
    audioElement.currentTime = 0;
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Ignora interrupções de cliques rápidos sucessivos
        console.warn("Retrigger normal:", err.message);
      });
    }

    // 3. Efeito visual no botão
    if (pad) {
      pad.classList.add("active");
      setTimeout(() => {
        pad.classList.remove("active");
      }, 120);
    }
  }
};

// 1. Evento de Clique nos Pads
drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio.clip");
    if (audio) {
      playPad(audio.id);
    }
  });
});

// 2. Evento de Teclado Global
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if (soundDescriptions[key]) {
    playPad(key);
  }
});
