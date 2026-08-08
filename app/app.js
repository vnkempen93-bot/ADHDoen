const STORAGE_KEY = 'simple-task-list-v1';
const NOTES_KEY = 'simple-notes-v1';
const WROP_KEY = 'simple-wrop-plans-v1';
const HABITS_KEY = 'simple-habits-v1';
const EMOTIONS_STATS_KEY = 'simple-emoties-vakken-v1';
const COMPARISON_KEY = 'simple-comparison-v1';

const EMOTION_BOXES = [
  { id: 'enthousiast', label: 'Enthousiast', x: 22.5, y: 12.7, w: 9.1, h: 8.0, yOffsetPx: 0.2 },
  { id: 'vrolijk', label: 'Vrolijk', x: 32.3, y: 12.7, w: 9.1, h: 8.0, yOffsetPx: 0.2 },
  { id: 'opgetogen', label: 'Opgetogen', x: 22.5, y: 21.5, w: 9.1, h: 8.0, yOffsetPx: 1 },
  { id: 'geamuseerd', label: 'Geamuseerd', x: 32.3, y: 21.5, w: 9.1, h: 8.0, yOffsetPx: 1 },
  { id: 'verwonderd', label: 'Verwonderd', x: 22.5, y: 30.4, w: 9.1, h: 8.0, yOffsetPx: 1.5 },
  { id: 'geinteresseerd', label: 'Geinteresseerd', x: 32.3, y: 30.4, w: 9.1, h: 8.0, yOffsetPx: 1.5 },
  { id: 'optimistisch', label: 'Optimistisch', x: 22.5, y: 39.2, w: 9.1, h: 8.0, yOffsetPx: 2.1 },
  { id: 'hoop', label: 'Hoop', x: 32.3, y: 39.2, w: 9.1, h: 8.0, yOffsetPx: 2.1 },
  { id: 'energiek', label: 'Energiek', x: 42.0, y: 12.7, w: 9.1, h: 16.8, yOffsetPx: 0.2 },
  { id: 'ontspannen', label: 'Ontspannen', x: 51.8, y: 12.7, w: 9.1, h: 16.8, yOffsetPx: 0.2 },
  { id: 'dankbaar', label: 'Dankbaar', x: 61.6, y: 12.7, w: 9.1, h: 8.0, yOffsetPx: 0.2 },
  { id: 'liefde', label: 'Liefde', x: 71.3, y: 12.7, w: 9.1, h: 8.0, yOffsetPx: 0.2 },
  { id: 'tevreden', label: 'Tevreden', x: 61.6, y: 21.5, w: 9.1, h: 8.0, yOffsetPx: 1 },
  { id: 'geborgen', label: 'Geborgen', x: 71.3, y: 21.5, w: 9.1, h: 8.0, yOffsetPx: 1 },
  { id: 'alert', label: 'Alert', x: 42.0, y: 30.4, w: 9.1, h: 16.8, yOffsetPx: 1.5 },
  { id: 'kalm', label: 'Kalm', x: 51.8, y: 30.4, w: 9.1, h: 16.8, yOffsetPx: 1.5 },
  { id: 'harmonie', label: 'Harmonie', x: 61.6, y: 30.4, w: 9.1, h: 8.0, yOffsetPx: 1.5 },
  { id: 'opgelucht', label: 'Opgelucht', x: 71.3, y: 30.4, w: 9.1, h: 8.0, yOffsetPx: 1.5 },
  { id: 'rust', label: 'Rust', x: 61.6, y: 39.2, w: 9.1, h: 8.0, yOffsetPx: 2.1 },
  { id: 'sereen', label: 'Sereen', x: 71.3, y: 39.2, w: 9.1, h: 8.0, yOffsetPx: 2.1 },
  { id: 'angst', label: 'Angst', x: 22.5, y: 48.1, w: 9.1, h: 8.0, yOffsetPx: 3 },
  { id: 'nerveus', label: 'Nerveus', x: 32.3, y: 48.1, w: 9.1, h: 8.0, yOffsetPx: 3},
  { id: 'gestrest', label: 'Gestrest', x: 22.5, y: 57.0, w: 9.1, h: 8.0, yOffsetPx: 3.5 },
  { id: 'onrust', label: 'Onrust', x: 32.3, y: 57.0, w: 9.1, h: 8.0, yOffsetPx: 3.5 },
  { id: 'gespannen', label: 'Gespannen', x: 42.0, y: 48.1, w: 9.1, h: 16.8, yOffsetPx: 3 },
  { id: 'sloom', label: 'Sloom', x: 51.8, y: 48.1, w: 9.1, h: 16.8, yOffsetPx: 3 },
  { id: 'vermoeid', label: 'Vermoeid', x: 61.6, y: 48.1, w: 9.1, h: 8.0, yOffsetPx: 3 },
  { id: 'uitgeput', label: 'Uitgeput', x: 71.3, y: 48.1, w: 9.1, h: 8.0, yOffsetPx: 3 },
  { id: 'futloos', label: 'Futloos', x: 61.6, y: 57.0, w: 9.1, h: 8.0, yOffsetPx: 3.5 },
  { id: 'lethargisch', label: 'Lethargisch', x: 71.3, y: 57.0, w: 9.1, h: 8.0, yOffsetPx: 3.5 },
  { id: 'boos', label: 'Boos', x: 22.5, y: 65.9, w: 9.1, h: 8.0, yOffsetPx: 4 },
  { id: 'beledigd', label: 'Beledigd', x: 32.3, y: 65.9, w: 9.1, h: 8.0, yOffsetPx: 4 },
  { id: 'afschuw', label: 'Afschuw', x: 22.5, y: 74.8, w: 9.1, h: 8.0, yOffsetPx: 4 },
  { id: 'minachting', label: 'Minachting', x: 32.3, y: 74.8, w: 9.1, h: 8.0, yOffsetPx: 4 },
  { id: 'geirriteerd', label: 'Geirriteerd', x: 42.0, y: 65.9, w: 9.1, h: 16.8, yOffsetPx: 4 },
  { id: 'lusteloos', label: 'Lusteloos', x: 51.8, y: 65.9, w: 9.1, h: 16.8, yOffsetPx: 4 },
  { id: 'schuldgevoel', label: 'Schuldgevoel', x: 61.6, y: 65.9, w: 9.1, h: 8.0, yOffsetPx: 4},
  { id: 'schaamte', label: 'Schaamte', x: 71.3, y: 65.9, w: 9.1, h: 8.0, yOffsetPx: 4 },
  { id: 'verdriet', label: 'Verdriet', x: 61.6, y: 74.8, w: 9.1, h: 8.0, yOffsetPx: 4 },
  { id: 'somber', label: 'Somber', x: 71.3, y: 74.8, w: 9.1, h: 8.0, yOffsetPx: 4 },
];

const EMOTION_BOX_TUNE = { x: 0.3, y: 0.25, w: -0.6, h: -0.5 };

const COMPARISON_CHARTS = [
  {
    id: 'comparison-1',
    title: 'Afbeelding 1',
    subtitle: 'Aangenaam tegenover onaangenaam',
    kind: 'circle',
    axisLabels: {
      top: 'Aangenaam',
      left: 'Geactiveerd',
      right: 'Ingetogen',
      bottom: 'onaangenaam',
    },
    groups: [
      { id: 'vrolijk', label: 'Vrolijk', angle: 236 },
      { id: 'uitgelaten', label: 'Uitgelaten', angle: 245 },
      { id: 'opgewonden', label: 'Opgewonden', angle: 254 },
      { id: 'alert', label: 'Alert', angle: 263 },
      { id: 'voldaan', label: 'Voldaan', angle: 314 },
      { id: 'sereen', label: 'Sereen', angle: 304 },
      { id: 'ontspannen', label: 'Ontspannen', angle: 294 },
      { id: 'kalm', label: 'Kalm', angle: 284 },
      { id: 'gespannen', label: 'Gespannen', angle: 140 },
      { id: 'nerveus', label: 'Nerveus', angle: 150 },
      { id: 'gestrest', label: 'Gestrest', angle: 160 },
      { id: 'van-streek', label: 'Van streek', angle: 170 },
      { id: 'vermoeid', label: 'Vermoeid', angle: 36 },
      { id: 'futloos', label: 'Futloos', angle: 46 },
      { id: 'neerslachtig', label: 'Neerslachtig', angle: 56 },
      { id: 'miserabel', label: 'Miserabel', angle: 66 },
    ],
  },
  {
    id: 'comparison-2',
    title: 'Afbeelding 2',
    subtitle: 'Emotiekaart met meer detail',
    kind: 'circle',
    axisLabels: {
      top: 'Aangenaam',
      left: 'Geactiveerd',
      right: 'Ingetogen',
      bottom: 'onaangenaam',
    },
    groups: [
      { id: 'enthousiast', label: 'Enthousiast', angle: 232 },
      { id: 'blij', label: 'Blij', angle: 241 },
      { id: 'geamuseerd', label: 'Geamuseerd', angle: 250 },
      { id: 'interesse', label: 'Interesse', angle: 259 },
      { id: 'trots', label: 'Trots', angle: 268 },
      { id: 'optimistisch', label: 'Optimistisch', angle: 277 },
      { id: 'verwonderd', label: 'Verwonderd', angle: 286 },
      { id: 'geinteresseerd', label: 'Geïnteresseerd', angle: 295 },
      { id: 'bevredigd', label: 'Bevredigd', angle: 318 },
      { id: 'liefde', label: 'Liefde', angle: 308 },
      { id: 'dankbaar', label: 'Dankbaar', angle: 298 },
      { id: 'hoop', label: 'Hoop', angle: 288 },
      { id: 'ontspannen', label: 'Ontspannen', angle: 278 },
      { id: 'geborgen', label: 'Geborgen', angle: 268 },
      { id: 'rust', label: 'Rust', angle: 258 },
      { id: 'sereen', label: 'Sereen', angle: 248 },
      { id: 'angst', label: 'Angst', angle: 140 },
      { id: 'nerveus', label: 'Nerveus', angle: 150 },
      { id: 'boos', label: 'Boos', angle: 160 },
      { id: 'gestrest', label: 'Gestrest', angle: 170 },
      { id: 'walging', label: 'Walging', angle: 180 },
      { id: 'afschuw', label: 'Afschuw', angle: 190 },
      { id: 'onrust', label: 'Onrust', angle: 200 },
      { id: 'teleurgesteld', label: 'Teleurgesteld', angle: 34 },
      { id: 'verdriet', label: 'Verdriet', angle: 44 },
      { id: 'schuldgevoel', label: 'Schuldgevoel', angle: 54 },
      { id: 'schaamte', label: 'Schaamte', angle: 64 },
      { id: 'verveeld', label: 'Verveeld', angle: 74 },
      { id: 'futloos', label: 'Futloos', angle: 84 },
      { id: 'uitgeput', label: 'Uitgeput', angle: 94 },
      { id: 'lethargisch', label: 'Lethargisch', angle: 104 },
    ],
  },
  {
    id: 'comparison-3',
    title: 'Afbeelding 3',
    subtitle: 'Vlakjes met kleurvakken',
    kind: 'square',
    groups: [
      { id: 'energiek', label: 'Energiek', row: 1, col: 1 },
      { id: 'ontspannen', label: 'Ontspannen', row: 1, col: 2 },
      { id: 'dankbaar', label: 'Dankbaar', row: 1, col: 3 },
      { id: 'liefde', label: 'Liefde', row: 1, col: 4 },
      { id: 'alert', label: 'Alert', row: 2, col: 1 },
      { id: 'kalm', label: 'Kalm', row: 2, col: 2 },
      { id: 'harmonie', label: 'Harmonie', row: 2, col: 3 },
      { id: 'opgelucht', label: 'Opgelucht', row: 2, col: 4 },
      { id: 'gespannen', label: 'Gespannen', row: 3, col: 1 },
      { id: 'sloom', label: 'Sloom', row: 3, col: 2 },
      { id: 'vermoeid', label: 'Vermoeid', row: 3, col: 3 },
      { id: 'uitgeput', label: 'Uitgeput', row: 3, col: 4 },
      { id: 'boos', label: 'Boos', row: 4, col: 1 },
      { id: 'lusteloos', label: 'Lusteloos', row: 4, col: 2 },
      { id: 'verdriet', label: 'Verdriet', row: 4, col: 3 },
      { id: 'schaamte', label: 'Schaamte', row: 4, col: 4 },
    ],
  },
];

let tasks = loadTasks();
let notes = loadNotes();
let wropPlans = loadWropPlans();
let habits = loadHabits();
let emotionsStats = loadEmotionsStats();
let comparisonState = loadComparisonState();
let activeComparison = null;

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const dateInput = document.getElementById('task-date');
const repeatInput = document.getElementById('task-repeat');
const pendingList = document.getElementById('pending-list');
const doneList = document.getElementById('done-list');
const pendingCount = document.getElementById('pending-count');
const doneCount = document.getElementById('done-count');
const noteForm = document.getElementById('note-form');
const noteTitleInput = document.getElementById('note-title');
const noteInput = document.getElementById('note-input');
const notesList = document.getElementById('notes-list');
let voiceNoteButton = document.getElementById('voice-note-btn');
let voiceStatus = document.getElementById('voice-status');
const agendaList = document.getElementById('agenda-list');
const calendarGrid = document.getElementById('calendar-grid');
const agendaTitle = document.getElementById('agenda-title');
const agendaPrev = document.getElementById('agenda-prev');
const agendaNext = document.getElementById('agenda-next');
const viewButtons = document.querySelectorAll('.view-btn');
const topMenu = document.querySelector('.top-menu');
const menuToggleButton = document.getElementById('menu-toggle');
const tabMenu = document.getElementById('tab-menu-list');
const tabButtons = document.querySelectorAll('.tab-btn');
const timerButtons = document.querySelectorAll('.timer-btn');
const timerDisplay = document.getElementById('timer-display');
const timerStartButton = document.getElementById('timer-start');
const timerStopButton = document.getElementById('timer-stop');
const timerTestButton = document.getElementById('timer-test');
const timerAlertToggle = document.getElementById('timer-alert-toggle');
const timerAlertMode = document.getElementById('timer-alert-mode');
const timerLoopToggle = document.getElementById('timer-loop-toggle');
const timerLoopMode = document.getElementById('timer-loop-mode');
const timerAlarm = document.getElementById('timer-alarm');
const timerStatus = document.getElementById('timer-status');
const wropForm = document.getElementById('wrop-form');
const wropWensInput = document.getElementById('wrop-wens');
const wropResultaatInput = document.getElementById('wrop-resultaat');
const wropObstakelInput = document.getElementById('wrop-obstakel');
const wropPlanInput = document.getElementById('wrop-plan');
const wropPlansList = document.getElementById('wrop-plans-list');
const habitForm = document.getElementById('habit-form');
const habitInput = document.getElementById('habit-input');
const habitsList = document.getElementById('habits-list');
const installButton = document.getElementById('install-btn');
const installStatus = document.getElementById('install-status');
const emotionsImage = document.getElementById('emoties-image');
const emotiesOverlay = document.getElementById('emoties-overlay');
const emotiesCountList = document.getElementById('emoties-count-list');
const comparisonGallery = document.getElementById('comparison-gallery');
const comparisonHistoryTitle = document.getElementById('comparison-history-title');
const comparisonHistorySubtitle = document.getElementById('comparison-history-subtitle');
const comparisonHistoryList = document.getElementById('comparison-history-list');
const comparisonExpanded = document.getElementById('comparison-expanded');
const comparisonExpandedTitle = document.getElementById('comparison-expanded-title');
const comparisonExpandedSubtitle = document.getElementById('comparison-expanded-subtitle');
const comparisonExpandedBoard = document.getElementById('comparison-expanded-board');

let recognition = null;
let isListening = false;
let voiceTranscript = '';
let vibrationReady = false;
let comparisonOpenChartId = null;
let activeEmotionHistoryId = null;
let deferredInstallPrompt = null;

function updateInstallUI() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (!installButton) return;

  if (isStandalone) {
    installButton.hidden = true;
    if (installStatus) {
      installStatus.textContent = 'Deze app is geïnstalleerd op je telefoon.';
    }
    return;
  }

  if (isIOS) {
    installButton.hidden = true;
    if (installStatus) {
      installStatus.textContent = 'Op iPhone: open deze site in Safari, tik op Delen en kies “Aan beginscherm toevoegen”.';
    }
    return;
  }

  if (deferredInstallPrompt) {
    installButton.hidden = false;
    installButton.textContent = 'Installeren op telefoon';
    if (installStatus) {
      installStatus.textContent = 'Je kunt deze app nu installeren op je telefoon.';
    }
  } else {
    installButton.hidden = true;
    if (installStatus) {
      installStatus.textContent = 'Open het browser-menu en kies Installeren om deze app als app te gebruiken.';
    }
  }
}

if (installButton) {
  installButton.addEventListener('click', async () => {
    if (!deferredInstallPrompt) {
      updateInstallUI();
      return;
    }

    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    if (choice.outcome === 'accepted' && installStatus) {
      installStatus.textContent = 'Installatie gestart. Je app wordt toegevoegd aan je beginscherm.';
    }
    deferredInstallPrompt = null;
    updateInstallUI();
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallUI();
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  updateInstallUI();
});

function ensureVoiceControls() {
  if (voiceNoteButton && voiceStatus) return;

  if (!noteForm) return;

  const controls = document.createElement('div');
  controls.className = 'voice-controls';
  controls.innerHTML = `
    <button class="voice-btn" id="voice-note-btn" type="button">🎤 Spreek notitie in</button>
    <p class="voice-status" id="voice-status">Tik of spreek je notitie in.</p>
  `;

  noteForm.appendChild(controls);
  voiceNoteButton = document.getElementById('voice-note-btn');
  voiceStatus = document.getElementById('voice-status');
}

function initVoiceRecognition() {
  ensureVoiceControls();

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  if (!SpeechRecognition) {
    if (voiceNoteButton) {
      voiceNoteButton.disabled = true;
      voiceNoteButton.textContent = '🎤 Niet beschikbaar';
    }
    if (voiceStatus) {
      voiceStatus.textContent = isIOS
        ? 'Spraakherkenning werkt in Safari meestal niet in een webapp. Open de app in Safari en probeer opnieuw.'
        : 'Spraakherkenning wordt niet ondersteund in deze browser.';
    }
    return;
  }

  if (isIOS && !isStandalone) {
    if (voiceStatus) {
      voiceStatus.textContent = 'Open deze app vanuit het beginscherm of gebruik Safari op iPhone voor spraaknotities.';
    }
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'nl-NL';
  recognition.continuous = false;
  recognition.interimResults = true;

  recognition.onstart = () => {
    isListening = true;
    if (voiceNoteButton) voiceNoteButton.textContent = '⏹ Stop opname';
    if (voiceStatus) voiceStatus.textContent = 'Luisteren... spreek nu je notitie in.';
  };

  recognition.onresult = (event) => {
    let interimText = '';
    let finalText = '';

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript.trim();
      if (event.results[index].isFinal) {
        finalText += `${finalText ? ' ' : ''}${transcript}`;
      } else {
        interimText += `${interimText ? ' ' : ''}${transcript}`;
      }
    }

    if (finalText) {
      voiceTranscript = `${voiceTranscript} ${finalText}`.trim();
      if (noteInput) noteInput.value = voiceTranscript;
      if (voiceStatus) voiceStatus.textContent = 'Notitie opgenomen. Klik op “Notitie toevoegen” om op te slaan.';
    } else if (interimText) {
      if (noteInput) noteInput.value = `${voiceTranscript} ${interimText}`.trim();
      if (voiceStatus) voiceStatus.textContent = 'Luisteren...';
    }
  };

  recognition.onerror = (event) => {
    console.error(event.error);
    if (voiceStatus) voiceStatus.textContent = 'Spraakherkenning kon niet starten. Probeer het opnieuw.';
  };

  recognition.onend = () => {
    isListening = false;
    if (voiceNoteButton) voiceNoteButton.textContent = '🎤 Spreek notitie in';
    if (!voiceTranscript && voiceStatus) {
      voiceStatus.textContent = 'Geen tekst herkend. Probeer het opnieuw.';
    }
  };
}

function startVoiceNote() {
  ensureVoiceControls();

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  if (!recognition) {
    if (voiceStatus) {
      voiceStatus.textContent = isIOS && !isStandalone
        ? 'Open deze app vanuit het beginscherm of in Safari voor spraaknotities.'
        : 'Spraakherkenning wordt niet ondersteund in deze browser.';
    }
    return;
  }

  if (isListening) {
    recognition.stop();
    return;
  }

  voiceTranscript = noteInput ? noteInput.value.trim() : '';
  if (noteInput) noteInput.focus();
  if (voiceStatus) voiceStatus.textContent = 'Mikrofoon wordt aangevraagd…';

  const startRecognition = () => {
    try {
      recognition.start();
    } catch (error) {
      if (voiceStatus) voiceStatus.textContent = 'De opname kon niet starten. Probeer het opnieuw.';
      console.error(error);
    }
  };

  if (isIOS && !isStandalone) {
    if (voiceStatus) {
      voiceStatus.textContent = 'Open deze app vanuit het beginscherm of gebruik Safari met microfoontoegang voor spraaknotities.';
    }
    return;
  }

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        startRecognition();
      })
      .catch((error) => {
        console.error(error);
        if (voiceStatus) voiceStatus.textContent = 'Geef toegang tot de microfoon en probeer het opnieuw.';
      });
  } else {
    startRecognition();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const dueDate = dateInput.value || '';
  const repeat = repeatInput.value || 'none';

  tasks.unshift({
    id: generateTaskId(),
    text,
    done: false,
    createdAt: Date.now(),
    dueDate,
    repeat,
  });

  try {
    saveTasks();
    input.value = '';
    dateInput.value = '';
    repeatInput.value = 'none';
    input.focus();
    render();
  } catch (error) {
    alert('Er ging iets mis bij het opslaan van je taak. Probeer het opnieuw.');
    console.error(error);
  }
});

ensureVoiceControls();
if (voiceNoteButton) {
  voiceNoteButton.addEventListener('click', startVoiceNote);
}
initVoiceRecognition();

noteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = noteTitleInput.value.trim();
  const text = noteInput.value.trim();
  if (!title && !text) return;

  notes.unshift({
    id: generateTaskId(),
    title: title || 'Notitie',
    text,
    createdAt: Date.now(),
  });

  try {
    saveNotes();
    noteTitleInput.value = '';
    noteInput.value = '';
    render();
  } catch (error) {
    alert('Er ging iets mis bij het opslaan van je notitie. Probeer het opnieuw.');
    console.error(error);
  }
});

if (wropForm) {
  wropForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const wens = wropWensInput?.value.trim() || '';
    const resultaat = wropResultaatInput?.value.trim() || '';
    const obstakel = wropObstakelInput?.value.trim() || '';
    const plan = wropPlanInput?.value.trim() || '';

    if (!wens && !resultaat && !obstakel && !plan) return;

    wropPlans.unshift({
      id: generateTaskId(),
      wens,
      resultaat,
      obstakel,
      plan,
      createdAt: Date.now(),
    });

    try {
      saveWropPlans();
      if (wropWensInput) wropWensInput.value = '';
      if (wropResultaatInput) wropResultaatInput.value = '';
      if (wropObstakelInput) wropObstakelInput.value = '';
      if (wropPlanInput) wropPlanInput.value = '';
      render();
    } catch (error) {
      alert('Er ging iets mis bij het opslaan van je WROP-plan. Probeer het opnieuw.');
      console.error(error);
    }
  });
}

if (habitForm) {
  habitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = habitInput?.value.trim();
    if (!name) return;

    habits.unshift({
      id: generateTaskId(),
      name,
      entries: createEmptyHabitEntries(),
      createdAt: Date.now(),
    });

    try {
      saveHabits();
      if (habitInput) habitInput.value = '';
      render();
    } catch (error) {
      alert('Er ging iets mis bij het opslaan van je gewoonte. Probeer het opnieuw.');
      console.error(error);
    }
  });
}

if (emotiesOverlay) {
  renderEmotionsOverlay();
  renderEmotionsCountList();
  emotiesOverlay.addEventListener('click', handleEmotionsOverlayClick);
  if (emotiesCountList) {
    emotiesCountList.addEventListener('click', handleEmotionsCountListClick);
  }
  if (emotiesImage) {
    emotiesImage.addEventListener('load', renderEmotionsOverlay);
  }
}

if (comparisonGallery) {
  comparisonGallery.addEventListener('click', handleComparisonClick);
}

if (comparisonHistoryList) {
  comparisonHistoryList.addEventListener('click', handleComparisonClick);
}

if (comparisonExpanded) {
  comparisonExpanded.addEventListener('click', handleComparisonClick);
}

let timerDuration = 0;
let timerRemaining = 0;
let timerInterval = null;
let timerAlertModeValue = 'ping';
let timerLoopEnabled = false;
let timerAudioContext = null;

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function vibrateQuietly() {
  vibrationReady = true;

  try {
    if (typeof navigator.vibrate === 'function') {
      navigator.vibrate([300, 150, 300, 150, 600]);
      return;
    }
  } catch (error) {
    console.error(error);
  }

  try {
    if ('vibrate' in navigator) {
      navigator.vibrate(500);
      return;
    }
  } catch (error) {
    console.error(error);
  }

  try {
    if (window.AndroidWearable && typeof window.AndroidWearable.vibrate === 'function') {
      window.AndroidWearable.vibrate([300, 150, 300, 150, 600]);
      return;
    }
  } catch (error) {
    console.error(error);
  }

  try {
    if (navigator.wakeLock && typeof navigator.wakeLock.request === 'function') {
      navigator.wakeLock.request('screen').catch(() => {});
    }
  } catch (error) {
    console.error(error);
  }

  if (timerAlarm) {
    timerAlarm.hidden = false;
    timerAlarm.textContent = 'Timer afgelopen!';
  }
  timerStatus.textContent = 'Trilling niet beschikbaar in deze browser.';
}

function playTimerPing() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return false;
  }

  if (!timerAudioContext) {
    timerAudioContext = new AudioContextClass();
  }

  if (timerAudioContext.state === 'suspended') {
    timerAudioContext.resume().catch(() => {});
  }

  const oscillator = timerAudioContext.createOscillator();
  const gainNode = timerAudioContext.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(880, timerAudioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(660, timerAudioContext.currentTime + 0.2);
  gainNode.gain.setValueAtTime(0.0001, timerAudioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.2, timerAudioContext.currentTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, timerAudioContext.currentTime + 0.28);
  oscillator.connect(gainNode);
  gainNode.connect(timerAudioContext.destination);
  oscillator.start();
  oscillator.stop(timerAudioContext.currentTime + 0.3);
  return true;
}

function updateTimerAlertMode() {
  timerAlertModeValue = timerAlertToggle && timerAlertToggle.checked ? 'vibrate' : 'ping';
  if (timerAlertMode) {
    timerAlertMode.textContent = timerAlertModeValue === 'vibrate' ? 'Trillen' : 'Ping';
  }
}

function updateTimerLoopMode() {
  timerLoopEnabled = !!(timerLoopToggle && timerLoopToggle.checked);
  if (timerLoopMode) {
    timerLoopMode.textContent = timerLoopEnabled ? 'Aan' : 'Uit';
  }
}

function triggerTimerAlert() {
  if (timerAlarm) {
    timerAlarm.hidden = false;
    timerAlarm.textContent = 'Timer afgelopen!';
  }

  if (timerAlertModeValue === 'vibrate') {
    vibrateQuietly();
    return;
  }

  if (!playTimerPing()) {
    vibrateQuietly();
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerRemaining / 60);
  const seconds = timerRemaining % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer(duration) {
  stopTimer();
  const durationSeconds = Number(duration);
  timerDuration = durationSeconds;
  timerRemaining = timerDuration;
  updateTimerDisplay();

  const label = durationSeconds < 60
    ? `${durationSeconds} seconden`
    : `${durationSeconds / 60} minuten`;
  timerStatus.textContent = `Timer gestart voor ${label}.`;

  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    updateTimerDisplay();

    if (timerRemaining <= 0) {
      stopTimer();
      timerStatus.textContent = 'Timer afgelopen.';
      triggerTimerAlert();

      if (timerLoopEnabled && timerDuration > 0) {
        timerStatus.textContent = 'Timer afgelopen. Herstart automatisch.';
        startTimer(timerDuration);
      }
    }
  }, 1000);
}

function triggerTimerAlarm() {
  if (!vibrationReady) {
    vibrateQuietly();
  }
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    document.body.classList.toggle('notes-active', target === 'notes');
    document.body.classList.toggle('agenda-active', target === 'agenda');
    document.body.classList.toggle('timer-active', target === 'timer');
    document.body.classList.toggle('wrop-active', target === 'wrop');
    document.body.classList.toggle('habits-active', target === 'habits');
    document.body.classList.toggle('emoties-active', target === 'emoties');
    tabButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    if (topMenu && menuToggleButton) {
      topMenu.classList.remove('open');
      menuToggleButton.setAttribute('aria-expanded', 'false');
      menuToggleButton.textContent = `Menu • ${button.textContent.trim()}`;
    }
  });
});

if (menuToggleButton && topMenu) {
  menuToggleButton.addEventListener('click', () => {
    const isOpen = topMenu.classList.toggle('open');
    menuToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.addEventListener('click', (event) => {
  if (!topMenu || !menuToggleButton || !tabMenu) return;
  if (!topMenu.contains(event.target)) {
    topMenu.classList.remove('open');
    menuToggleButton.setAttribute('aria-expanded', 'false');
  }
});

timerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    timerButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    const durationSeconds = Number(button.dataset.seconds || Number(button.dataset.minutes) * 60);
    startTimer(durationSeconds);
  });
});

timerStartButton.addEventListener('click', () => {
  if (timerDuration > 0) {
    startTimer(timerDuration);
    return;
  }
  timerStatus.textContent = 'Kies eerst een duur.';
});

timerStopButton.addEventListener('click', () => {
  stopTimer();
  if (timerAlarm) timerAlarm.hidden = true;
  timerStatus.textContent = 'Timer gestopt.';
});

timerAlertToggle.addEventListener('change', () => {
  updateTimerAlertMode();
  timerStatus.textContent = timerAlertModeValue === 'vibrate'
    ? 'Testsignaal ingesteld op trillen.'
    : 'Testsignaal ingesteld op ping.';
});

timerLoopToggle.addEventListener('change', () => {
  updateTimerLoopMode();
  timerStatus.textContent = timerLoopEnabled
    ? 'Herhalen ingeschakeld.'
    : 'Herhalen uitgeschakeld.';
});

if (timerAlertToggle) {
  updateTimerAlertMode();
}

if (timerLoopToggle) {
  updateTimerLoopMode();
}

timerTestButton.addEventListener('click', () => {
  triggerTimerAlert();
  timerStatus.textContent = timerAlertModeValue === 'vibrate'
    ? 'Testtrilling gestart.'
    : 'Testping gestart.';
});

let currentView = 'day';
let calendarDate = new Date();

viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentView = button.dataset.view;
    viewButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderAgenda();
  });
});

agendaPrev.addEventListener('click', () => {
  shiftCalendar(-1);
});

agendaNext.addEventListener('click', () => {
  shiftCalendar(1);
});

calendarGrid.addEventListener('click', (event) => {
  const date = event.target.dataset.date;
  const month = event.target.dataset.month;

  if (month) {
    const [year, monthNumber] = month.split('-').map(Number);
    calendarDate = new Date(year, monthNumber - 1, 1);
    currentView = 'month';
    viewButtons.forEach((button) => button.classList.toggle('active', button.dataset.view === 'month'));
    renderAgenda();
    return;
  }

  if (!date) return;
  calendarDate = new Date(`${date}T12:00:00`);
  currentView = 'day';
  viewButtons.forEach((button) => button.classList.toggle('active', button.dataset.view === 'day'));
  renderAgenda();
});

function render() {
  const now = new Date();
  const today = toDateKey(now);

  const pending = tasks.filter((task) => !task.done && (!task.dueDate || task.dueDate >= today));
  const done = tasks.filter((task) => task.done);
  const frogTask = frogTaskId ? tasks.find((task) => task.id === frogTaskId) : null;

  pendingCount.textContent = pending.length;
  doneCount.textContent = done.length;

  pendingList.innerHTML = pending.length ? pending.map(renderTask).join('') : '<li class="empty-state">Geen taken meer. Lekker! 😊</li>';
  doneList.innerHTML = done.length ? done.map(renderTask).join('') : '<li class="empty-state">Nog geen afgeronde taken.</li>';
  document.querySelectorAll('.priority-card').forEach((card) => {
    const priority = Number(card.dataset.priority);
    const list = card.querySelector('.priority-task-list');
    if (!list) return;

    const priorityTasks = pending.filter((task) => Number(task.priority) === priority);
    const isFrogTarget = frogHeaderPriority === priority;
    const frogMarkup = isFrogTarget
      ? `<li class="frog-header-item" data-priority="${priority}"><span class="priority-frog frog-emoji">🐸</span> Eat that frog</li>`
      : '';
    const frogTaskMarkup = frogTask && Number(frogTask.priority) === priority
      ? '<li class="frog-task-complete">✅ Pacman heeft de kikker opgegeten.</li>'
      : '';
    list.innerHTML = `${frogMarkup}${frogTaskMarkup}${priorityTasks.length ? priorityTasks.map(renderTask).join('') : '<li class="empty-state empty-state-small">Nog geen taken.</li>'}`;
  });
  notesList.innerHTML = notes.length ? notes.map(renderNote).join('') : '<li class="empty-state">Nog geen notities.</li>';
  renderWropPlans();
  renderHabits();
  renderComparison();
  renderAgenda();
  attachTaskDragAndDrop();
}

let draggedTaskId = null;
let dragStartPoint = null;
let activeDropTarget = null;
let draggingTaskElement = null;
let dragListenersAttached = false;
let dragMoved = false;
let frogHeaderPriority = null;
let frogTaskId = null;

function clearPriorityCardHighlight() {
  document.querySelectorAll('.priority-card').forEach((card) => card.classList.remove('drag-over'));
  const pendingDropZone = document.getElementById('pending-drop-zone');
  pendingDropZone?.classList.remove('drag-over');
  activeDropTarget = null;
}

function updatePriorityDropHighlight(clientX, clientY) {
  const hoveredCard = document.elementFromPoint(clientX, clientY)?.closest('.priority-card');
  const pendingDropZone = document.getElementById('pending-drop-zone');
  const hoveredPendingZone = document.elementFromPoint(clientX, clientY)?.closest('#pending-drop-zone');
  clearPriorityCardHighlight();

  if (hoveredPendingZone && pendingDropZone) {
    pendingDropZone.classList.add('drag-over');
    activeDropTarget = pendingDropZone;
    return;
  }

  if (hoveredCard) {
    hoveredCard.classList.add('drag-over');
    activeDropTarget = hoveredCard;
  }
}

function finishTaskDrop(clientX, clientY) {
  if (!draggedTaskId || !draggingTaskElement) return;

  const hoveredCard = document.elementFromPoint(clientX, clientY)?.closest('.priority-card');
  const pendingDropZone = document.elementFromPoint(clientX, clientY)?.closest('#pending-drop-zone');
  const frogHeaderTop = document.getElementById('frog-header-top');
  const isFrogHeaderDrop = draggingTaskElement === frogHeaderTop || draggedTaskId === 'frog-header';

  if (hoveredCard) {
    const priority = Number(hoveredCard.dataset.priority);
    if (Number.isFinite(priority) && priority >= 1 && priority <= 3) {
      if (isFrogHeaderDrop) {
        frogHeaderPriority = priority;
      } else {
        tasks = tasks.map((task) => (task.id === draggedTaskId ? { ...task, priority } : task));
        saveTasks();
      }
    }
  } else if (pendingDropZone) {
    if (isFrogHeaderDrop) {
      frogHeaderPriority = null;
    } else {
      tasks = tasks.map((task) => (task.id === draggedTaskId ? { ...task, priority: undefined } : task));
      saveTasks();
    }
  } else if (!isFrogHeaderDrop) {
    tasks = tasks.map((task) => (task.id === draggedTaskId ? { ...task, priority: undefined } : task));
    saveTasks();
  }

  draggingTaskElement.classList.remove('dragging');
  clearPriorityCardHighlight();
  draggedTaskId = null;
  dragStartPoint = null;
  draggingTaskElement = null;
  render();
}

function getClientPoint(event) {
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  return touch ? { x: touch.clientX, y: touch.clientY } : { x: event.clientX, y: event.clientY };
}

function startDragFromEvent(event, element, taskId) {
  if (event.target.closest('button, input, select, textarea, a')) return;

  const point = getClientPoint(event);
  dragStartPoint = { x: point.x, y: point.y };
  draggedTaskId = taskId;
  draggingTaskElement = element;
  dragMoved = false;
}

function handleTaskPointerMove(event) {
  if (!dragStartPoint || !draggedTaskId || !draggingTaskElement) return;

  const point = getClientPoint(event);
  const deltaX = point.x - dragStartPoint.x;
  const deltaY = point.y - dragStartPoint.y;
  if (Math.abs(deltaX) < 2 && Math.abs(deltaY) < 2) return;

  if (!dragMoved) {
    dragMoved = true;
    draggingTaskElement.classList.add('dragging');
  }

  updatePriorityDropHighlight(point.x, point.y);
}

function handleTaskPointerUp(event) {
  if (!dragStartPoint || !draggedTaskId || !draggingTaskElement) return;

  const point = getClientPoint(event);
  if (dragMoved) {
    finishTaskDrop(point.x, point.y);
  } else {
    draggingTaskElement.classList.remove('dragging');
    clearPriorityCardHighlight();
    draggedTaskId = null;
    dragStartPoint = null;
    draggingTaskElement = null;
  }
}

function handleTaskTouchMove(event) {
  if (!dragStartPoint || !draggedTaskId || !draggingTaskElement) return;
  event.preventDefault();
  handleTaskPointerMove(event);
}

function handleTaskTouchEnd(event) {
  if (!dragStartPoint || !draggedTaskId || !draggingTaskElement) return;
  event.preventDefault();
  handleTaskPointerUp(event);
}

function ensureTaskDragListeners() {
  if (dragListenersAttached) return;
  dragListenersAttached = true;
  document.addEventListener('pointermove', handleTaskPointerMove);
  document.addEventListener('pointerup', handleTaskPointerUp);
  document.addEventListener('touchmove', handleTaskTouchMove, { passive: false });
  document.addEventListener('touchend', handleTaskTouchEnd, { passive: false });
  document.addEventListener('touchcancel', handleTaskTouchEnd, { passive: false });
}

function completePriorityFrogTask(priority) {
  const targetTask = tasks.find((task) => !task.done && Number(task.priority) === priority);
  if (!targetTask) return;

  tasks = tasks.map((task) => {
    if (task.id !== targetTask.id) return task;
    return { ...task, done: true, priority: undefined };
  });

  frogTaskId = targetTask.id;
  frogHeaderPriority = null;
  saveTasks();
  render();
}

function handleFrogHeaderClick(priority, frogItem) {
  if (!frogItem) return;

  const frogEmoji = frogItem.querySelector('.frog-emoji');
  if (frogEmoji) {
    frogEmoji.textContent = '👻';
  }
  frogItem.classList.add('pacman-eating');

  completePriorityFrogTask(priority);

  setTimeout(() => {
    if (frogEmoji) {
      frogEmoji.textContent = '🐸';
    }
    frogItem.classList.remove('pacman-eating');
    frogTaskId = null;
    render();
  }, 500);
}

function attachTaskDragAndDrop() {
  ensureTaskDragListeners();
  document.querySelectorAll('.priority-card').forEach((card) => {
    card.addEventListener('dragover', (event) => {
      event.preventDefault();
      card.classList.add('drag-over');
      activeDropTarget = card;
    });

    card.addEventListener('dragleave', () => {
      card.classList.remove('drag-over');
      if (activeDropTarget === card) activeDropTarget = null;
    });

    card.addEventListener('drop', (event) => {
      event.preventDefault();
      card.classList.remove('drag-over');
      if (!draggedTaskId) return;

      const priority = Number(card.dataset.priority);
      if (!Number.isFinite(priority) || priority < 1 || priority > 3) return;

      tasks = tasks.map((task) => (task.id === draggedTaskId ? { ...task, priority } : task));
      saveTasks();
      clearPriorityCardHighlight();
      render();
    });
  });

  const pendingDropZone = document.getElementById('pending-drop-zone');
  if (pendingDropZone) {
    pendingDropZone.addEventListener('dragover', (event) => {
      event.preventDefault();
      pendingDropZone.classList.add('drag-over');
      activeDropTarget = pendingDropZone;
    });

    pendingDropZone.addEventListener('dragleave', () => {
      pendingDropZone.classList.remove('drag-over');
      if (activeDropTarget === pendingDropZone) activeDropTarget = null;
    });

    pendingDropZone.addEventListener('drop', (event) => {
      event.preventDefault();
      pendingDropZone.classList.remove('drag-over');
      if (!draggedTaskId) return;
      tasks = tasks.map((task) => (task.id === draggedTaskId ? { ...task, priority: undefined } : task));
      saveTasks();
      clearPriorityCardHighlight();
      render();
    });
  }

  document.querySelectorAll('.task-item').forEach((item) => {
    item.addEventListener('dragstart', (event) => {
      event.dataTransfer?.setData('text/plain', item.dataset.taskId || '');
      event.dataTransfer && (event.dataTransfer.effectAllowed = 'move');
      draggedTaskId = item.dataset.taskId;
      draggingTaskElement = item;
      item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      clearPriorityCardHighlight();
      draggedTaskId = null;
      dragStartPoint = null;
      draggingTaskElement = null;
    });

    item.addEventListener('pointerdown', (event) => {
      startDragFromEvent(event, item, item.dataset.taskId);
    });

    item.addEventListener('touchstart', (event) => {
      startDragFromEvent(event, item, item.dataset.taskId);
    }, { passive: false });

    item.addEventListener('pointercancel', () => {
      item.classList.remove('dragging');
      clearPriorityCardHighlight();
      draggedTaskId = null;
      dragStartPoint = null;
      draggingTaskElement = null;
    });
  });

  const frogHeaderTop = document.getElementById('frog-header-top');
  if (frogHeaderTop) {
    frogHeaderTop.addEventListener('dragstart', (event) => {
      event.dataTransfer?.setData('text/plain', 'frog-header');
      event.dataTransfer && (event.dataTransfer.effectAllowed = 'move');
      draggedTaskId = 'frog-header';
      draggingTaskElement = frogHeaderTop;
      frogHeaderTop.classList.add('dragging');
    });

    frogHeaderTop.addEventListener('dragend', () => {
      frogHeaderTop.classList.remove('dragging');
      clearPriorityCardHighlight();
      draggedTaskId = null;
      dragStartPoint = null;
      draggingTaskElement = null;
    });

    frogHeaderTop.addEventListener('pointerdown', (event) => {
      startDragFromEvent(event, frogHeaderTop, 'frog-header');
    });

    frogHeaderTop.addEventListener('touchstart', (event) => {
      startDragFromEvent(event, frogHeaderTop, 'frog-header');
    }, { passive: false });

    frogHeaderTop.addEventListener('click', (event) => {
      if (draggedTaskId === 'frog-header' && draggingTaskElement === frogHeaderTop) {
        event.preventDefault();
        return;
      }
    });

    frogHeaderTop.addEventListener('pointercancel', () => {
      frogHeaderTop.classList.remove('dragging');
      clearPriorityCardHighlight();
      draggedTaskId = null;
      dragStartPoint = null;
      draggingTaskElement = null;
    });
  }

  document.querySelectorAll('.frog-header-item').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const priority = Number(item.dataset.priority);
      if (Number.isFinite(priority)) {
        handleFrogHeaderClick(priority, item);
      }
    });
  });
}

function handleEmotionsOverlayClick(event) {
  const button = event.target.closest('[data-emotion-id]');
  if (!button) return;

  const id = button.dataset.emotionId;
  if (!id) return;

  emotionsStats.counts[id] = (emotionsStats.counts[id] || 0) + 1;
  const history = Array.isArray(emotionsStats.history?.[id]) ? emotionsStats.history[id] : [];
  history.unshift(Date.now());
  emotionsStats.history[id] = history.slice(0, 100);
  emotionsStats.selected[id] = !emotionsStats.selected[id];

  saveEmotionsStats();
  renderEmotionsOverlay();
  renderEmotionsCountList();
}

function handleEmotionsCountListClick(event) {
  const button = event.target.closest('[data-emotion-id]');
  if (!button) return;

  const id = button.dataset.emotionId;
  if (!id) return;

  activeEmotionHistoryId = activeEmotionHistoryId === id ? null : id;
  renderEmotionsCountList();
}

function renderEmotionsOverlay() {
  if (!emotiesOverlay) return;

  emotiesOverlay.innerHTML = EMOTION_BOXES.map((box) => {
    const count = emotionsStats.counts[box.id] || 0;
    const isSelected = !!emotionsStats.selected[box.id];
    const tunedX = box.x + EMOTION_BOX_TUNE.x;
    const tunedY = box.y + EMOTION_BOX_TUNE.y;
    const yOffsetPx = Number.isFinite(box.yOffsetPx) ? box.yOffsetPx : 0;
    const tunedW = box.w + EMOTION_BOX_TUNE.w;
    const tunedH = box.h + EMOTION_BOX_TUNE.h;
    return `
      <button
        class="emoties-dot ${isSelected ? 'selected' : ''}"
        type="button"
        style="left:${tunedX}%; top:calc(${tunedY}% + ${yOffsetPx}px); width:${tunedW}%; height:${tunedH}%;"
        data-emotion-id="${box.id}"
        aria-label="${escapeHtml(box.label)} (${count} keer geselecteerd)"
        aria-pressed="${isSelected ? 'true' : 'false'}"
        title="${escapeHtml(box.label)}"
      ></button>
    `;
  }).join('');
}

function renderEmotionsCountList() {
  if (!emotiesCountList) return;

  emotiesCountList.innerHTML = EMOTION_BOXES.map((box) => {
    const count = emotionsStats.counts[box.id] || 0;
    const isSelected = !!emotionsStats.selected[box.id];
    const history = Array.isArray(emotionsStats.history?.[box.id]) ? emotionsStats.history[box.id] : [];
    const isOpen = activeEmotionHistoryId === box.id;
    const historyList = history.length
      ? history.map((entry) => `<li>${escapeHtml(formatEmotionTimestamp(entry))}</li>`).join('')
      : '<li>Nog geen selecties.</li>';

    return `
      <li class="emoties-count-item ${isSelected ? 'selected' : ''} ${isOpen ? 'open' : ''}">
        <button class="emoties-count-btn" type="button" data-emotion-id="${box.id}" aria-expanded="${isOpen ? 'true' : 'false'}">
          <span>${escapeHtml(box.label)}</span>
          <strong>${count}</strong>
        </button>
        <div class="emoties-history ${isOpen ? 'open' : ''}">
          <ul class="emoties-history-list">
            ${historyList}
          </ul>
        </div>
      </li>
    `;
  }).join('');
}

function saveEmotionsStats() {
  localStorage.setItem(EMOTIONS_STATS_KEY, JSON.stringify(emotionsStats));
}

function loadEmotionsStats() {
  try {
    const raw = localStorage.getItem(EMOTIONS_STATS_KEY);
    const parsed = raw ? JSON.parse(raw) : { counts: {}, selected: {}, history: {} };
    return normalizeEmotionsStats(parsed);
  } catch (error) {
    console.error(error);
    return normalizeEmotionsStats({ counts: {}, selected: {}, history: {} });
  }
}

function normalizeEmotionsStats(value) {
  const state = value && typeof value === 'object' ? value : {};
  const counts = state.counts && typeof state.counts === 'object' ? state.counts : {};
  const selected = state.selected && typeof state.selected === 'object' ? state.selected : {};
  const history = state.history && typeof state.history === 'object' ? state.history : {};

  EMOTION_BOXES.forEach((box) => {
    if (typeof counts[box.id] !== 'number') counts[box.id] = 0;
    if (typeof selected[box.id] !== 'boolean') selected[box.id] = false;
    if (!Array.isArray(history[box.id])) history[box.id] = [];
    history[box.id] = history[box.id]
      .filter((entry) => Number.isFinite(Number(entry)))
      .map((entry) => Number(entry))
      .sort((a, b) => b - a)
      .slice(0, 100);
  });

  return {
    counts,
    selected,
    history,
  };
}

function formatEmotionTimestamp(value) {
  const date = new Date(Number(value));
  if (Number.isNaN(date.getTime())) return 'Onbekend moment';
  return new Intl.DateTimeFormat('nl-NL', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function renderWropPlans() {
  if (!wropPlansList) return;

  if (!wropPlans.length) {
    wropPlansList.innerHTML = '<div class="empty-state">Nog geen WROP-plannen opgeslagen.</div>';
    return;
  }

  wropPlansList.innerHTML = wropPlans.map((plan) => `
    <article class="wrop-plan-card">
      <div class="wrop-plan-grid">
        <div><span class="wrop-plan-label">Wens</span><p class="wrop-plan-value">${escapeHtml(plan.wens || '—')}</p></div>
        <div><span class="wrop-plan-label">Resultaat</span><p class="wrop-plan-value">${escapeHtml(plan.resultaat || '—')}</p></div>
        <div><span class="wrop-plan-label">Obstakel</span><p class="wrop-plan-value">${escapeHtml(plan.obstakel || '—')}</p></div>
        <div><span class="wrop-plan-label">Plan</span><p class="wrop-plan-value">${escapeHtml(plan.plan || '—')}</p></div>
      </div>
      <div class="wrop-plan-meta">
        <span>${formatDate(plan.createdAt ? toDateKey(new Date(plan.createdAt)) : '') || 'Onbekend'}</span>
        <button class="icon-btn" type="button" data-action="delete-wrop" data-id="${plan.id}">Verwijder</button>
      </div>
    </article>
  `).join('');
}

function renderHabits() {
  if (!habitsList) return;

  if (!habits.length) {
    habitsList.innerHTML = '<div class="empty-state">Nog geen gewoontes toegevoegd.</div>';
    return;
  }

  habitsList.innerHTML = habits.map(renderHabitCard).join('');
}

function renderHabitCard(habit) {
  const dayLabels = ['M', 'D', 'W', 'D', 'V', 'Z', 'Z'];
  const dayKeys = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'];
  const rows = Array.from({ length: 5 }, (_, slotIndex) => {
    const cells = dayKeys.map((dayKey) => {
      const status = habit.entries?.[dayKey]?.[slotIndex] || 'empty';
      const icon = status === 'done' ? '✓' : status === 'missed' ? '✕' : '';
      return `<button class="habit-cell ${status}" type="button" data-action="toggle-habit-slot" data-habit-id="${habit.id}" data-day="${dayKey}" data-slot="${slotIndex}">${icon}</button>`;
    }).join('');
    return `<div class="habit-row">${cells}</div>`;
  }).join('');

  return `
    <article class="wrop-plan-card">
      <div class="habit-title-row">
        <strong>${escapeHtml(habit.name || 'Gewoonte')}</strong>
        <span class="habit-hint">Klik om te wisselen</span>
      </div>
      <div class="habit-grid">
        <div class="habit-row habit-header-row">
          ${dayLabels.map((label) => `<div class="habit-day-label">${label}</div>`).join('')}
        </div>
        ${rows}
      </div>
    </article>
  `;
}

function renderComparison() {
  if (!comparisonGallery || !comparisonHistoryList || !comparisonHistoryTitle || !comparisonHistorySubtitle) return;

  normalizeComparisonState();
  comparisonGallery.innerHTML = COMPARISON_CHARTS.map(renderComparisonPreview).join('');

  if (comparisonExpanded && comparisonExpandedTitle && comparisonExpandedSubtitle && comparisonExpandedBoard) {
    const chart = COMPARISON_CHARTS.find((item) => item.id === comparisonOpenChartId) || null;
    comparisonExpanded.hidden = !chart;
    if (chart) {
      comparisonExpandedTitle.textContent = chart.title;
      comparisonExpandedSubtitle.textContent = chart.subtitle;
      comparisonExpandedBoard.innerHTML = renderComparisonBoard(chart, true);
    } else {
      comparisonExpandedBoard.innerHTML = '';
    }
  }

  const historyTarget = resolveComparisonHistoryTarget();
  if (!historyTarget) {
    renderComparisonHistoryEmpty();
    return;
  }

  const chart = COMPARISON_CHARTS.find((item) => item.id === historyTarget.chartId);
  const group = chart?.groups.find((item) => item.id === historyTarget.groupId);
  const slotState = getComparisonSlotState(historyTarget.chartId, historyTarget.groupId, historyTarget.slotIndex);
  comparisonHistoryTitle.textContent = `${chart?.title || 'Afbeelding'} - ${group?.label || 'Selectie'}`;
  comparisonHistorySubtitle.textContent = `${slotState.count} keer geselecteerd`;

  if (!slotState.history.length) {
    comparisonHistoryList.innerHTML = '<li class="empty-state">Nog geen selectie-geschiedenis.</li>';
    return;
  }

  comparisonHistoryList.innerHTML = slotState.history.map((entry) => `
    <li class="comparison-history-item">
      <span>${escapeHtml(formatComparisonTimestamp(entry))}</span>
    </li>
  `).join('');
}

function renderComparisonPreview(chart) {
  const totalSelections = chart.groups.reduce((sum, group) => sum + getComparisonGroupTotal(chart.id, group.id), 0);

  return `
    <button class="comparison-preview" type="button" data-action="open-comparison-board" data-chart-id="${chart.id}">
      <div class="comparison-chart-head">
        <div>
          <h3>${escapeHtml(chart.title)}</h3>
          <p>${escapeHtml(chart.subtitle)}</p>
        </div>
        <span class="comparison-total">${totalSelections} keuzes</span>
      </div>
      <div class="comparison-preview-board ${chart.kind}">
        ${renderComparisonMiniature(chart)}
      </div>
      <span class="comparison-preview-hint">Klik om te openen</span>
    </button>
  `;
}

function renderComparisonBoard(chart, isModal = false) {
  if (chart.kind === 'square') {
    return `
      <div class="comparison-board comparison-board-square ${isModal ? 'is-modal' : ''}">
        ${chart.groups.map((group) => renderComparisonSquareGroup(chart, group, isModal)).join('')}
      </div>
    `;
  }

  return `
    <div class="comparison-board comparison-board-circle ${isModal ? 'is-modal' : ''}">
      <div class="comparison-board-axis comparison-board-axis-horizontal"></div>
      <div class="comparison-board-axis comparison-board-axis-vertical"></div>
      <div class="comparison-board-center"></div>
      ${chart.axisLabels ? renderComparisonAxisLabels(chart.axisLabels) : ''}
      ${chart.groups.map((group, index) => renderComparisonRadialGroup(chart, group, index, isModal)).join('')}
    </div>
  `;
}

function renderComparisonAxisLabels(axisLabels) {
  return `
    <div class="comparison-axis-label top">${escapeHtml(axisLabels.top || '')}</div>
    <div class="comparison-axis-label left">${escapeHtml(axisLabels.left || '')}</div>
    <div class="comparison-axis-label right">${escapeHtml(axisLabels.right || '')}</div>
    <div class="comparison-axis-label bottom">${escapeHtml(axisLabels.bottom || '')}</div>
  `;
}

function renderComparisonMiniature(chart) {
  if (chart.kind === 'square') {
    return `<div class="comparison-mini-grid">${chart.groups.slice(0, 8).map((group) => `<span class="comparison-mini-tile">${escapeHtml(group.label)}</span>`).join('')}</div>`;
  }

  return `<div class="comparison-mini-circles">${chart.groups.slice(0, 8).map((group) => `<span class="comparison-mini-circle ${group.side}">${escapeHtml(group.label.slice(0, 1))}</span>`).join('')}</div>`;
}

function renderComparisonRadialGroup(chart, group, index, isModal) {
  const slotStates = getComparisonGroupSlotStates(chart.id, group.id);
  const angle = typeof group.angle === 'number' ? group.angle : (-90 + index * (360 / chart.groups.length));
  const labelRadius = isModal ? 46 : 41;
  const slotRadii = isModal ? [36, 29, 22, 15, 8] : [34, 28, 22, 16, 10];
  const labelX = 50 + Math.cos((angle * Math.PI) / 180) * labelRadius;
  const labelY = 50 + Math.sin((angle * Math.PI) / 180) * labelRadius;

  return `
    <div class="comparison-radial-group" style="--angle: ${angle}deg;">
      ${slotStates.map((slotState, slotIndex) => {
        const radius = slotRadii[slotIndex];
        const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
        const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;
        return renderComparisonSlot(chart, group, slotIndex, slotState, x, y);
      }).join('')}
      <div class="comparison-radial-label" style="left: ${labelX}%; top: ${labelY}%">${escapeHtml(group.label)}</div>
    </div>
  `;
}

function renderComparisonSquareGroup(chart, group, isModal) {
  const slotStates = getComparisonGroupSlotStates(chart.id, group.id);
  return `
    <div class="comparison-square-group ${isModal ? 'large' : ''}" data-action="show-comparison-history" data-chart-id="${chart.id}" data-group-id="${group.id}" data-slot-index="0" role="button" tabindex="0" aria-label="${escapeHtml(group.label)}">
      <span class="comparison-square-group-title">${escapeHtml(group.label)}</span>
      <span class="comparison-square-group-grid ${isModal ? 'large' : ''}">
        ${slotStates.map((slotState, slotIndex) => renderComparisonSlot(chart, group, slotIndex, slotState)).join('')}
      </span>
    </div>
  `;
}

function renderComparisonSlot(chart, group, slotIndex, slotState, x = null, y = null) {
  const isActive = activeComparison && activeComparison.chartId === chart.id && activeComparison.groupId === group.id && activeComparison.slotIndex === slotIndex;
  const symbol = slotState.type === 'missed' ? '✕' : slotState.type === 'done' ? '✓' : '';
  const positionStyle = x === null || y === null ? '' : `left: ${x}%; top: ${y}%;`;
  const kindClass = chart.kind === 'circle' ? 'circle' : 'square';
  return `
    <button
      class="comparison-slot ${kindClass} ${slotState.type} ${isActive ? 'active' : ''}"
      type="button"
      data-action="select-comparison-slot"
      data-chart-id="${chart.id}"
      data-group-id="${group.id}"
      data-slot-index="${slotIndex}"
      aria-label="${escapeHtml(group.label)} vakje ${slotIndex + 1}"
      title="${escapeHtml(group.label)} vakje ${slotIndex + 1}"
      style="${positionStyle}"
    >
      <span class="comparison-slot-symbol">${symbol}</span>
    </button>
  `;
}

function handleComparisonClick(event) {
  const actionElement = event.target.closest('[data-action]');
  if (!actionElement) return;

  const action = actionElement.dataset.action;
  const chartId = actionElement.dataset.chartId;
  const groupId = actionElement.dataset.groupId;
  const slotIndex = Number(actionElement.dataset.slotIndex);

  if (action === 'close-comparison-board') {
    comparisonOpenChartId = null;
    activeComparison = null;
    renderComparison();
    return;
  }

  if (!chartId) return;

  if (action === 'open-comparison-board') {
    comparisonOpenChartId = chartId;
    renderComparison();
    return;
  }

  if (action === 'select-comparison-slot' && groupId && Number.isInteger(slotIndex)) {
    recordComparisonSelection(chartId, groupId, slotIndex);
    return;
  }

  if (action === 'show-comparison-history' && groupId) {
    setActiveComparison(chartId, groupId, Number.isInteger(slotIndex) ? slotIndex : 0);
    comparisonOpenChartId = chartId;
  }
}

function recordComparisonSelection(chartId, groupId, slotIndex) {
  normalizeComparisonState();
  const slotState = getComparisonSlotState(chartId, groupId, slotIndex);
  slotState.type = slotState.type === 'done' ? 'missed' : slotState.type === 'missed' ? 'empty' : 'done';
  slotState.count += 1;
  slotState.history.unshift(new Date().toISOString());
  activeComparison = { chartId, groupId, slotIndex };
  comparisonOpenChartId = chartId;
  saveComparisonState();
  renderComparison();
}

function setActiveComparison(chartId, groupId, slotIndex) {
  activeComparison = { chartId, groupId, slotIndex };
  renderComparison();
}

function resolveComparisonHistoryTarget() {
  return activeComparison;
}

function getComparisonSlotState(chartId, groupId, slotIndex) {
  normalizeComparisonState();
  const chartState = comparisonState.charts[chartId];
  return chartState.groups[groupId].slots[slotIndex];
}

function getComparisonGroupSlotStates(chartId, groupId) {
  normalizeComparisonState();
  const chartState = comparisonState.charts[chartId];
  return chartState.groups[groupId].slots;
}

function getComparisonGroupTotal(chartId, groupId) {
  return getComparisonGroupSlotStates(chartId, groupId).reduce((sum, slot) => sum + slot.count, 0);
}

function normalizeComparisonState() {
  if (!comparisonState || typeof comparisonState !== 'object') {
    comparisonState = { charts: {} };
  }

  if (!comparisonState.charts || typeof comparisonState.charts !== 'object') {
    comparisonState.charts = {};
  }

  COMPARISON_CHARTS.forEach((chart) => {
    if (!comparisonState.charts[chart.id]) {
      comparisonState.charts[chart.id] = { groups: {} };
    }

    const chartState = comparisonState.charts[chart.id];
    if (!chartState.groups || typeof chartState.groups !== 'object') {
      chartState.groups = {};
    }

    chart.groups.forEach((group) => {
      if (!chartState.groups[group.id]) {
        chartState.groups[group.id] = { slots: [] };
      }

      if (!Array.isArray(chartState.groups[group.id].slots)) {
        chartState.groups[group.id].slots = [];
      }

      while (chartState.groups[group.id].slots.length < 5) {
        chartState.groups[group.id].slots.push({ type: 'empty', count: 0, history: [] });
      }

      chartState.groups[group.id].slots = chartState.groups[group.id].slots.slice(0, 5).map((slot) => ({
        type: slot.type === 'done' || slot.type === 'missed' || slot.type === 'empty' ? slot.type : 'empty',
        count: typeof slot.count === 'number' ? slot.count : 0,
        history: Array.isArray(slot.history) ? slot.history : [],
      }));

      chartState.groups[group.id].slots.forEach((slot) => {
        if (!Array.isArray(slot.history)) slot.history = [];
        if (typeof slot.count !== 'number') slot.count = 0;
        if (!slot.type) slot.type = 'empty';
      });
    });
  });
}

function saveComparisonState() {
  localStorage.setItem(COMPARISON_KEY, JSON.stringify(comparisonState));
}

function formatComparisonTimestamp(value) {
  const date = new Date(value);
  return date.toLocaleString('nl-NL', { dateStyle: 'medium', timeStyle: 'short' });
}

function renderComparisonHistoryEmpty() {
  comparisonHistoryTitle.textContent = 'Geschiedenis';
  comparisonHistorySubtitle.textContent = 'Selecteer een vakje om de momenten te zien.';
  comparisonHistoryList.innerHTML = '<li class="empty-state">Nog geen selectie gekozen.</li>';
}

function renderAgenda() {
  const title = getAgendaTitle();
  agendaTitle.textContent = title;

  const items = getAgendaItems();
  const selectedDate = toDateKey(calendarDate);

  if (currentView === 'day') {
    calendarGrid.innerHTML = renderDayView(selectedDate, items);
    agendaList.innerHTML = items.filter((item) => item.occurrenceDate === selectedDate).length
      ? items.filter((item) => item.occurrenceDate === selectedDate).map(renderAgendaItem).join('')
      : '<li class="empty-state">Geen agenda-items voor deze dag.</li>';
    return;
  }

  if (currentView === 'week') {
    calendarGrid.innerHTML = renderWeekView(calendarDate, items);
    agendaList.innerHTML = items.filter((item) => isInCurrentWeek(item.occurrenceDate)).length
      ? items.filter((item) => isInCurrentWeek(item.occurrenceDate)).map(renderAgendaItem).join('')
      : '<li class="empty-state">Geen agenda-items voor deze week.</li>';
    return;
  }

  if (currentView === 'month') {
    calendarGrid.innerHTML = renderMonthView(calendarDate, items);
    agendaList.innerHTML = items.filter((item) => item.occurrenceDate.startsWith(getYearMonthKey(calendarDate))).length
      ? items.filter((item) => item.occurrenceDate.startsWith(getYearMonthKey(calendarDate))).map(renderAgendaItem).join('')
      : '<li class="empty-state">Geen agenda-items voor deze maand.</li>';
    return;
  }

  calendarGrid.innerHTML = renderYearView(calendarDate, items);
  agendaList.innerHTML = items.filter((item) => item.occurrenceDate.startsWith(String(calendarDate.getFullYear()))).length
    ? items.filter((item) => item.occurrenceDate.startsWith(String(calendarDate.getFullYear()))).map(renderAgendaItem).join('')
    : '<li class="empty-state">Geen agenda-items voor dit jaar.</li>';
}

function renderDayView(selectedDate, items) {
  const dayItems = items.filter((item) => item.occurrenceDate === selectedDate);
  return `
    <div class="calendar-day active has-items">${formatDateShort(selectedDate)}</div>
    <div class="agenda-item"><strong>${escapeHtml(dayItems.length ? dayItems[0].text : 'Geen taken')}</strong></div>
  `;
}

function renderWeekView(date, items) {
  const start = new Date(date);
  start.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  const weekdays = ['M', 'D', 'W', 'D', 'V', 'Z', 'Z'];
  const header = weekdays.map((day) => `<div class="calendar-weekday">${day}</div>`).join('');
  const cells = [];
  for (let i = 0; i < 7; i += 1) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);
    const key = toDateKey(current);
    const hasItems = items.some((item) => item.occurrenceDate === key);
    cells.push(`<button class="calendar-day ${key === toDateKey(calendarDate) ? 'active' : ''} ${hasItems ? 'has-items' : ''}" type="button" data-date="${key}">${current.getDate()}</button>`);
  }
  return `<div class="calendar-week-row">${header}</div><div class="calendar-week-row">${cells.join('')}</div>`;
}

function renderMonthView(date, items) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startDay = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weekdays = ['M', 'D', 'W', 'D', 'V', 'Z', 'Z'];
  const header = weekdays.map((day) => `<div class="calendar-weekday">${day}</div>`).join('');
  const cells = [];

  for (let i = 0; i < startDay; i += 1) {
    cells.push('<div class="calendar-day"></div>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const current = new Date(year, month, day);
    const key = toDateKey(current);
    const hasItems = items.some((item) => item.occurrenceDate === key);
    cells.push(`<button class="calendar-day ${key === toDateKey(calendarDate) ? 'active' : ''} ${hasItems ? 'has-items' : ''}" type="button" data-date="${key}">${day}</button>`);
  }

  return `<div class="calendar-week-row">${header}</div>${Array.from({ length: Math.ceil(cells.length / 7) }, (_, index) => `<div class="calendar-week-row">${cells.slice(index * 7, (index + 1) * 7).join('')}</div>`).join('')}`;
}

function renderYearView(date, items) {
  const months = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  const year = date.getFullYear();
  return `<div class="calendar-year-grid">${months.map((month, index) => {
    const key = `${year}-${String(index + 1).padStart(2, '0')}`;
    const hasItems = items.some((item) => item.occurrenceDate.startsWith(key));
    const isActiveMonth = calendarDate.getFullYear() === year && calendarDate.getMonth() === index;
    return `<button class="calendar-month-cell ${hasItems ? 'has-items' : ''} ${isActiveMonth ? 'active' : ''}" type="button" data-month="${key}">${month}</button>`;
  }).join('')}</div>`;
}

function shiftCalendar(step) {
  if (currentView === 'day') {
    calendarDate.setDate(calendarDate.getDate() + step);
  } else if (currentView === 'week') {
    calendarDate.setDate(calendarDate.getDate() + step * 7);
  } else if (currentView === 'month') {
    calendarDate.setMonth(calendarDate.getMonth() + step);
  } else {
    calendarDate.setFullYear(calendarDate.getFullYear() + step);
  }
  renderAgenda();
}

function isInCurrentWeek(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  const start = new Date(calendarDate);
  start.setDate(calendarDate.getDate() - ((calendarDate.getDay() + 6) % 7));
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return date >= start && date <= end;
}

function getViewRange() {
  if (currentView === 'day') {
    const start = new Date(calendarDate);
    const end = new Date(calendarDate);
    return { start, end };
  }

  if (currentView === 'week') {
    const start = new Date(calendarDate);
    start.setDate(calendarDate.getDate() - ((calendarDate.getDay() + 6) % 7));
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start, end };
  }

  if (currentView === 'month') {
    const start = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
    const end = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0);
    return { start, end };
  }

  const start = new Date(calendarDate.getFullYear(), 0, 1);
  const end = new Date(calendarDate.getFullYear(), 11, 31);
  return { start, end };
}

function getYearMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function getAgendaTitle() {
  if (currentView === 'day') return calendarDate.toLocaleDateString('nl-NL', { day: '2-digit', month: 'long', year: 'numeric' });
  if (currentView === 'week') return `Week ${getWeekNumber(calendarDate)}`;
  if (currentView === 'month') return calendarDate.toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' });
  return `${calendarDate.getFullYear()}`;
}

function getWeekNumber(date) {
  const current = new Date(date);
  current.setHours(0, 0, 0, 0);
  current.setDate(current.getDate() + 3 - ((current.getDay() + 6) % 7));
  const week1 = new Date(current.getFullYear(), 0, 4);
  return 1 + Math.round(((current - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
}

function formatDateShort(dateKey) {
  if (!dateKey) return '';
  const [year, month, day] = dateKey.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('nl-NL', { day: '2-digit', month: 'short' });
}

function renderTask(task) {
  const meta = [];
  if (task.dueDate) {
    meta.push(`Deadline: ${formatDate(task.dueDate)}`);
  }
  if (task.repeat && task.repeat !== 'none') {
    meta.push(`Herhaal: ${labelForRepeat(task.repeat)}`);
  }

  const priorityBadge = Number.isInteger(task.priority) && task.priority >= 1 && task.priority <= 3
    ? `<span class="task-priority-pill">P${task.priority}</span>`
    : '';

  return `
    <li class="task-item ${task.done ? 'done' : ''}" draggable="true" data-task-id="${task.id}">
      <label class="task-main">
        <input class="checkbox" type="checkbox" ${task.done ? 'checked' : ''} data-action="toggle" data-id="${task.id}" />
        <span class="task-text">
          ${escapeHtml(task.text)}
          ${priorityBadge}
          ${meta.length ? `<span class="task-meta">${meta.join(' • ')}</span>` : ''}
        </span>
      </label>
      <button class="icon-btn" type="button" data-action="delete" data-id="${task.id}">Verwijder</button>
    </li>
  `;
}

function renderNote(note) {
  return `
    <li class="note-item">
      <div class="note-content">
        <div class="note-title">${escapeHtml(note.title || 'Notitie')}</div>
        <div class="note-text">${escapeHtml(note.text || 'Geen inhoud')}</div>
      </div>
      <div class="note-actions">
        <button class="icon-btn" type="button" data-action="speak-note" data-id="${note.id}">Luister</button>
        <button class="icon-btn" type="button" data-action="read-note" data-id="${note.id}">Lees</button>
        <button class="icon-btn" type="button" data-action="delete-note" data-id="${note.id}">Verwijder</button>
      </div>
    </li>
  `;
}

function getAgendaItems() {
  const { start, end } = getViewRange();
  const occurrences = [];

  tasks
    .filter((task) => task.dueDate && !task.done)
    .forEach((task) => {
      if (!task.repeat || task.repeat === 'none') {
        occurrences.push({ ...task, occurrenceDate: task.dueDate });
        return;
      }

      const baseDate = new Date(`${task.dueDate}T12:00:00`);
      let currentDate = new Date(baseDate);
      const endDate = new Date(end);

      while (currentDate <= endDate) {
        const dateKey = toDateKey(currentDate);
        if (dateKey >= toDateKey(start) && dateKey <= toDateKey(end)) {
          occurrences.push({ ...task, occurrenceDate: dateKey });
        }

        if (task.repeat === 'daily') {
          currentDate.setDate(currentDate.getDate() + 1);
        } else if (task.repeat === 'weekly') {
          currentDate.setDate(currentDate.getDate() + 7);
        } else if (task.repeat === 'monthly') {
          currentDate.setMonth(currentDate.getMonth() + 1);
        } else {
          break;
        }
      }
    });

  return occurrences.sort((a, b) => a.occurrenceDate.localeCompare(b.occurrenceDate));
}

function renderAgendaItem(item) {
  return `
    <li class="agenda-item">
      <span class="agenda-date">${escapeHtml(formatDate(item.occurrenceDate))}</span>
      <span>${escapeHtml(item.text)}</span>
      ${item.repeat && item.repeat !== 'none' ? `<small>${escapeHtml(labelForRepeat(item.repeat))}</small>` : ''}
    </li>
  `;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function handleListClick(event) {
  const trigger = event.target.closest('[data-action]');
  if (!trigger) return;

  const action = trigger.dataset.action;
  const id = trigger.dataset.id;
  if (!action || !id) return;

  if (action === 'toggle') {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;

    const wasDone = task.done;
    const toggledDone = !task.done;
    tasks = tasks.map((item) => {
      if (item.id !== id) return item;
      if (wasDone && item.repeat && item.repeat !== 'none') {
        return createRepeatedTask(item);
      }
      return { ...item, done: toggledDone, priority: toggledDone ? undefined : item.priority };
    });

    if (toggledDone) {
      frogTaskId = null;
      frogHeaderPriority = null;
    }
  }

  if (action === 'delete') {
    tasks = tasks.filter((task) => task.id !== id);
  }

  if (action === 'delete-note') {
    notes = notes.filter((note) => note.id !== id);
    saveNotes();
    render();
    return;
  }

  if (action === 'delete-wrop') {
    openConfirmModal('Weet je zeker dat je dit WROP-plan wilt verwijderen?', () => {
      wropPlans = wropPlans.filter((plan) => plan.id !== id);
      saveWropPlans();
      render();
    });
    return;
  }

  if (action === 'speak-note') {
    const note = notes.find((item) => item.id === id);
    if (!note) return;
    speakNote(note);
    return;
  }

  if (action === 'read-note') {
    const note = notes.find((item) => item.id === id);
    if (!note) return;
    openNoteModal(note);
    return;
  }

  saveTasks();
  render();
}

pendingList.addEventListener('click', handleListClick);
doneList.addEventListener('click', handleListClick);
notesList.addEventListener('click', handleListClick);
const prioritySection = document.querySelector('.priority-section');
if (prioritySection) {
  prioritySection.addEventListener('click', handleListClick);
}
if (wropPlansList) {
  wropPlansList.addEventListener('click', handleListClick);
}
if (habitsList) {
  habitsList.addEventListener('click', handleHabitsClick);
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function saveNotes() {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

function saveWropPlans() {
  localStorage.setItem(WROP_KEY, JSON.stringify(wropPlans));
}

function saveHabits() {
  localStorage.setItem(HABITS_KEY, JSON.stringify(habits));
}

function speakNote(note) {
  const text = `${note.title || 'Notitie'}. ${note.text || ''}`.trim();
  if (!text || !('speechSynthesis' in window)) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'nl-NL';
  utterance.rate = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function openNoteModal(note) {
  const existing = document.querySelector('.note-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'note-modal';
  modal.innerHTML = `
    <div class="note-modal-card">
      <h3 class="note-modal-title">${escapeHtml(note.title || 'Notitie')}</h3>
      <div class="note-modal-body">${escapeHtml(note.text || 'Geen inhoud')}</div>
    </div>
  `;

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });

  document.body.appendChild(modal);
}

function openConfirmModal(message, onConfirm) {
  const existing = document.querySelector('.confirm-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'confirm-modal';
  modal.innerHTML = `
    <div class="confirm-modal-card">
      <h3 class="confirm-modal-title">${escapeHtml(message)}</h3>
      <div class="confirm-modal-actions">
        <button class="confirm-modal-btn cancel" type="button" data-action="cancel">Annuleren</button>
        <button class="confirm-modal-btn confirm" type="button" data-action="confirm">Verwijderen</button>
      </div>
    </div>
  `;

  const confirmButton = modal.querySelector('[data-action="confirm"]');
  const cancelButton = modal.querySelector('[data-action="cancel"]');

  const close = () => modal.remove();

  confirmButton?.addEventListener('click', () => {
    close();
    onConfirm();
  });

  cancelButton?.addEventListener('click', close);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      close();
    }
  });

  document.body.appendChild(modal);
}

function handleHabitsClick(event) {
  const button = event.target.closest('button[data-action="toggle-habit-slot"]');
  if (!button) return;

  const habit = habits.find((item) => item.id === button.dataset.habitId);
  if (!habit) return;

  const day = button.dataset.day;
  const slot = Number(button.dataset.slot);
  const current = habit.entries?.[day]?.[slot] || 'empty';
  const next = current === 'done' ? 'missed' : current === 'missed' ? 'empty' : 'done';

  const updatedEntries = { ...(habit.entries || {}) };
  const dayEntries = [...(updatedEntries[day] || Array(5).fill('empty'))];
  dayEntries[slot] = next;
  updatedEntries[day] = dayEntries;

  habits = habits.map((item) => item.id === habit.id ? { ...item, entries: updatedEntries } : item);
  saveHabits();
  render();
}

function createRepeatedTask(task) {
  const nextDate = getNextRepeatDate(task.dueDate, task.repeat);
  return {
    ...task,
    id: generateTaskId(),
    done: false,
    dueDate: nextDate,
    createdAt: Date.now(),
  };
}

function getNextRepeatDate(currentDate, repeat) {
  if (!currentDate || !repeat || repeat === 'none') return currentDate;

  const date = new Date(`${currentDate}T12:00:00`);
  if (repeat === 'daily') {
    date.setDate(date.getDate() + 1);
  } else if (repeat === 'weekly') {
    date.setDate(date.getDate() + 7);
  } else if (repeat === 'monthly') {
    date.setMonth(date.getMonth() + 1);
  }

  return toDateKey(date);
}

function toDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function formatDate(dateKey) {
  if (!dateKey) return '';
  const [year, month, day] = dateKey.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('nl-NL', { day: '2-digit', month: 'short', year: 'numeric' });
}

function labelForRepeat(value) {
  if (value === 'daily') return 'Dagelijks';
  if (value === 'weekly') return 'Wekelijks';
  if (value === 'monthly') return 'Maandelijks';
  return 'Geen';
}

function generateTaskId() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function loadNotes() {
  try {
    const stored = localStorage.getItem(NOTES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function loadWropPlans() {
  try {
    const stored = localStorage.getItem(WROP_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function loadHabits() {
  try {
    const stored = localStorage.getItem(HABITS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function loadComparisonState() {
  try {
    const stored = localStorage.getItem(COMPARISON_KEY);
    return stored ? JSON.parse(stored) : { charts: {} };
  } catch {
    return { charts: {} };
  }
}

function createEmptyHabitEntries() {
  return {
    ma: Array(5).fill('empty'),
    di: Array(5).fill('empty'),
    wo: Array(5).fill('empty'),
    do: Array(5).fill('empty'),
    vr: Array(5).fill('empty'),
    za: Array(5).fill('empty'),
    zo: Array(5).fill('empty'),
  };
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((registration) => {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    }).catch(() => {
      // Ignore registration failures in this simple demo.
    });
  });
}

updateInstallUI();
render();
