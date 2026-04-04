const STORAGE_KEY = 'romantic-site-config-v2';
const AUTO_CAROUSEL_INTERVAL_MS = 3000; // 5000 = 5 segundos

const demoConfig = {
  publishedTheme: 'clean',
  texts: {
    heroEyebrow: 'Nosso cantinho',
    heroTitle: 'Para você, todo meu amor.',
    heroSubtitle: 'Feito com carinho para guardar nossos momentos, nossas músicas e tudo o que eu sinto por você.',
    momentsEyebrow: 'Momentos',
    momentsTitle: 'O que eu guardo no coração',
    musicEyebrow: 'Nossa trilha',
    musicTitle: 'Músicas que contam a nossa história',
    letterEyebrow: 'Carta',
    letterTitle: 'Minha carta para você',
    nowPlayingLabel: 'Tocando agora',
    emptyTrackText: 'Adicione faixas no painel de edição.',
    closing: 'O que a gente tem... não é só amor. É lar.'
  },
  hero: {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80'
  },
  carousel: [
    { type: 'image', title: 'Nosso abraço', src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80' },
    { type: 'image', title: 'Na praia', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80' },
    { type: 'video', title: 'Um vídeo especial', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
    { type: 'image', title: 'Memória feliz', src: 'https://images.unsplash.com/photo-1517867065801-e20f409696b0?auto=format&fit=crop&w=800&q=80' }
  ],
  tracks: [
    {
      title: 'Minha trilha favorita',
      artist: 'Adicione sua música',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      cover: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Segunda música',
      artist: 'Playlist em sequência',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      cover: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80'
    }
  ],
  letter: `<p>Eu nem sei por onde começar...</p>
<p>Desde que você chegou, meus dias ganharam mais cor, mais calma e mais sentido.</p>
<p><strong>Eu te escolho. Todos os dias.</strong></p>
<p>Nos detalhes, nas risadas, nas conversas e até nos silêncios. Obrigado por existir na minha vida.</p>
<p><em>Eu amo você. Hoje, amanhã e sempre.</em></p>`
};

let config = loadConfig();
let currentTheme = config.publishedTheme || 'clean';
let currentTrackIndex = 0;
let currentSlideIndex = 0;
let autoCarouselTimer = null;
const isEditor = document.body.dataset.mode === 'editor';

const body = document.body;
const heroMedia = document.getElementById('heroMedia');
const heroEyebrowView = document.getElementById('heroEyebrowView');
const heroTitleView = document.getElementById('heroTitleView');
const heroSubtitleView = document.getElementById('heroSubtitleView');
const momentsEyebrowView = document.getElementById('momentsEyebrowView');
const momentsTitleView = document.getElementById('momentsTitleView');
const musicEyebrowView = document.getElementById('musicEyebrowView');
const musicTitleView = document.getElementById('musicTitleView');
const letterEyebrowView = document.getElementById('letterEyebrowView');
const letterTitleView = document.getElementById('letterTitleView');
const nowPlayingLabelView = document.getElementById('nowPlayingLabelView');
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const letterView = document.getElementById('letterView');
const closingTextView = document.getElementById('closingTextView');
const autoplayHint = document.getElementById('autoplayHint');
const trackArt = document.getElementById('trackArt');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const playPauseBtn = document.getElementById('playPauseBtn');

const editorDrawer = document.getElementById('editorDrawer');
const compareOverlay = document.getElementById('compareOverlay');
const cleanFrame = document.getElementById('cleanFrame');
const darkFrame = document.getElementById('darkFrame');

const heroType = document.getElementById('heroType');
const heroFile = document.getElementById('heroFile');
const heroTitleInput = document.getElementById('heroTitle');
const heroSubtitleInput = document.getElementById('heroSubtitle');
const heroEyebrowInput = document.getElementById('heroEyebrowInput');
const momentsEyebrowInput = document.getElementById('momentsEyebrowInput');
const momentsTitleInput = document.getElementById('momentsTitleInput');
const musicEyebrowInput = document.getElementById('musicEyebrowInput');
const musicTitleInput = document.getElementById('musicTitleInput');
const letterEyebrowInput = document.getElementById('letterEyebrowInput');
const letterTitleInput = document.getElementById('letterTitleInput');
const nowPlayingLabelInput = document.getElementById('nowPlayingLabelInput');
const emptyTrackTextInput = document.getElementById('emptyTrackTextInput');
const publishedThemeInput = document.getElementById('publishedTheme');
const carouselItemsEditor = document.getElementById('carouselItemsEditor');
const tracksEditor = document.getElementById('tracksEditor');
const letterInput = document.getElementById('letterInput');
const closingText = document.getElementById('closingText');

init();

function init() {
  bindStaticEvents();
  if (isEditor) populateEditor();
  renderAll();
  startAutoCarousel();
  attemptAutoplay();
}

function bindStaticEvents() {
  document.getElementById('prevSlideBtn')?.addEventListener('click', () => moveCarousel(-1));
  document.getElementById('nextSlideBtn')?.addEventListener('click', () => moveCarousel(1));
  document.getElementById('prevTrackBtn')?.addEventListener('click', prevTrack);
  document.getElementById('nextTrackBtn')?.addEventListener('click', nextTrack);
  playPauseBtn?.addEventListener('click', togglePlayPause);

  audioPlayer?.addEventListener('timeupdate', syncProgress);
  audioPlayer?.addEventListener('loadedmetadata', syncProgress);
  audioPlayer?.addEventListener('ended', nextTrack);
  seekBar?.addEventListener('input', () => {
    if (!audioPlayer.duration) return;
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
  });
  volumeBar?.addEventListener('input', () => {
    audioPlayer.volume = Number(volumeBar.value);
  });

  if (!isEditor) {
    document.addEventListener('click', resumeAutoplayOnce, { once: true });
    document.addEventListener('touchstart', resumeAutoplayOnce, { once: true });
    return;
  }

  document.getElementById('toggleEditorBtn')?.addEventListener('click', openEditor);
  document.getElementById('closeEditorBtn')?.addEventListener('click', closeEditor);
  document.getElementById('saveBtn')?.addEventListener('click', saveFromEditor);
  document.getElementById('resetBtn')?.addEventListener('click', resetConfig);
  document.getElementById('addCarouselItemBtn')?.addEventListener('click', () => addCarouselItem());
  document.getElementById('addTrackBtn')?.addEventListener('click', () => addTrack());
  document.getElementById('compareThemesBtn')?.addEventListener('click', openCompareMode);
  document.getElementById('closeCompareBtn')?.addEventListener('click', closeCompareMode);

  heroType?.addEventListener('change', () => config.hero.type = heroType.value);
  heroTitleInput?.addEventListener('input', e => config.texts.heroTitle = e.target.value);
  heroSubtitleInput?.addEventListener('input', e => config.texts.heroSubtitle = e.target.value);
  heroEyebrowInput?.addEventListener('input', e => config.texts.heroEyebrow = e.target.value);
  momentsEyebrowInput?.addEventListener('input', e => config.texts.momentsEyebrow = e.target.value);
  momentsTitleInput?.addEventListener('input', e => config.texts.momentsTitle = e.target.value);
  musicEyebrowInput?.addEventListener('input', e => config.texts.musicEyebrow = e.target.value);
  musicTitleInput?.addEventListener('input', e => config.texts.musicTitle = e.target.value);
  letterEyebrowInput?.addEventListener('input', e => config.texts.letterEyebrow = e.target.value);
  letterTitleInput?.addEventListener('input', e => config.texts.letterTitle = e.target.value);
  nowPlayingLabelInput?.addEventListener('input', e => config.texts.nowPlayingLabel = e.target.value);
  emptyTrackTextInput?.addEventListener('input', e => config.texts.emptyTrackText = e.target.value);
  publishedThemeInput?.addEventListener('change', e => {
    config.publishedTheme = e.target.value;
    setTheme(e.target.value);
  });
  letterInput?.addEventListener('input', e => config.letter = e.target.value);
  closingText?.addEventListener('input', e => config.texts.closing = e.target.value);
  heroFile?.addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    config.hero.src = await fileToDataUrl(file);
    if (file.type.startsWith('video/')) config.hero.type = 'video';
    if (file.type.startsWith('image/')) config.hero.type = 'image';
    renderHero();
  });

  document.querySelectorAll('[data-theme-select]').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.themeSelect;
      if (!theme) return;
      setTheme(theme);
      config.publishedTheme = theme;
      if (publishedThemeInput) publishedThemeInput.value = theme;
    });
  });

  document.getElementById('letterToolbar')?.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button) return;
    if (button.dataset.wrap) wrapSelection(letterInput, button.dataset.wrap);
    if (button.dataset.block === 'br') insertAtCursor(letterInput, '<br>');
    if (button.dataset.block === 'p') insertAtCursor(letterInput, '<p></p>');
  });
}

function loadConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : structuredClone(demoConfig);
    return mergeConfig(parsed);
  } catch {
    return structuredClone(demoConfig);
  }
}

function mergeConfig(raw) {
  const merged = structuredClone(demoConfig);
  merged.publishedTheme = raw?.publishedTheme || merged.publishedTheme;
  merged.texts = { ...merged.texts, ...(raw?.texts || {}) };
  if (raw?.hero) merged.hero = { ...merged.hero, ...raw.hero };
  if (Array.isArray(raw?.carousel)) merged.carousel = raw.carousel;
  if (Array.isArray(raw?.tracks)) merged.tracks = raw.tracks;
  if (typeof raw?.letter === 'string') merged.letter = raw.letter;
  return merged;
}

function populateEditor() {
  if (!isEditor) return;
  heroType.value = config.hero.type;
  heroTitleInput.value = config.texts.heroTitle;
  heroSubtitleInput.value = config.texts.heroSubtitle;
  heroEyebrowInput.value = config.texts.heroEyebrow;
  momentsEyebrowInput.value = config.texts.momentsEyebrow;
  momentsTitleInput.value = config.texts.momentsTitle;
  musicEyebrowInput.value = config.texts.musicEyebrow;
  musicTitleInput.value = config.texts.musicTitle;
  letterEyebrowInput.value = config.texts.letterEyebrow;
  letterTitleInput.value = config.texts.letterTitle;
  nowPlayingLabelInput.value = config.texts.nowPlayingLabel;
  emptyTrackTextInput.value = config.texts.emptyTrackText;
  publishedThemeInput.value = config.publishedTheme;
  letterInput.value = config.letter;
  closingText.value = config.texts.closing;
  renderCarouselEditor();
  renderTracksEditor();
}

function renderAll() {
  renderTexts();
  renderHero();
  renderCarousel();
  renderLetter();
  renderClosing();
  renderPlayer();
  setTheme(config.publishedTheme || currentTheme);
}

function renderTexts() {
  heroEyebrowView.textContent = config.texts.heroEyebrow || '';
  heroTitleView.textContent = config.texts.heroTitle || '';
  heroSubtitleView.textContent = config.texts.heroSubtitle || '';
  momentsEyebrowView.textContent = config.texts.momentsEyebrow || '';
  momentsTitleView.textContent = config.texts.momentsTitle || '';
  musicEyebrowView.textContent = config.texts.musicEyebrow || '';
  musicTitleView.textContent = config.texts.musicTitle || '';
  letterEyebrowView.textContent = config.texts.letterEyebrow || '';
  letterTitleView.textContent = config.texts.letterTitle || '';
  nowPlayingLabelView.textContent = config.texts.nowPlayingLabel || '';
}

function renderHero() {
  heroMedia.innerHTML = '';
  if (!config.hero.src) return;
  if (config.hero.type === 'video') {
    const video = document.createElement('video');
    video.src = config.hero.src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    heroMedia.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = config.hero.src;
    img.alt = 'Banner do site';
    heroMedia.appendChild(img);
  }
}

function renderCarousel() {
  carouselTrack.innerHTML = '';
  carouselDots.innerHTML = '';
  if (!config.carousel.length) {
    stopAutoCarousel();
    carouselTrack.innerHTML = '<div class="slide-card" style="display:grid;place-items:center;padding:20px;">Adicione fotos ou vídeos no editor.</div>';
    return;
  }
  if (currentSlideIndex >= config.carousel.length) currentSlideIndex = 0;

  config.carousel.forEach((item, index) => {
    const slide = document.createElement('article');
    slide.className = 'slide-card';

    if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.preload = 'metadata';
      slide.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title || `Momento ${index + 1}`;
      slide.appendChild(img);
    }

    if (item.title) {
      const badge = document.createElement('div');
      badge.className = 'slide-badge';
      badge.textContent = item.title;
      slide.appendChild(badge);
    }

    carouselTrack.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = index === currentSlideIndex ? 'active' : '';
    dot.addEventListener('click', () => scrollToSlide(index, true));
    carouselDots.appendChild(dot);
  });
  [...carouselDots.children].forEach((dot, i) => dot.classList.toggle('active', i === currentSlideIndex));
  startAutoCarousel();
}

function moveCarousel(direction) {
  if (!config.carousel.length) return;
  currentSlideIndex = (currentSlideIndex + direction + config.carousel.length) % config.carousel.length;
  scrollToSlide(currentSlideIndex, true);
}

function scrollToSlide(index, restartTimer = false) {
  const card = carouselTrack.children[index];
  if (!card) return;

  currentSlideIndex = index;

  const trackRect = carouselTrack.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const offset = cardRect.left - trackRect.left;
  carouselTrack.scrollBy({
    left: offset,
    behavior: 'smooth'
  });

  [...carouselDots.children].forEach((dot, i) =>
    dot.classList.toggle('active', i === index)
  );

  if (restartTimer) restartAutoCarousel();
}


function startAutoCarousel() {
  stopAutoCarousel();
  if (!carouselTrack || config.carousel.length <= 1) return;
  autoCarouselTimer = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % config.carousel.length;
    scrollToSlide(currentSlideIndex);
  }, AUTO_CAROUSEL_INTERVAL_MS);
}

function stopAutoCarousel() {
  if (autoCarouselTimer) {
    clearInterval(autoCarouselTimer);
    autoCarouselTimer = null;
  }
}

function restartAutoCarousel() {
  startAutoCarousel();
}

function renderLetter() {
  letterView.innerHTML = sanitizeSimpleHtml(config.letter || '');
}

function renderClosing() {
  closingTextView.textContent = config.texts.closing || '';
}

function renderPlayer() {
  playlist.innerHTML = '';
  if (!config.tracks.length) {
    trackArt.innerHTML = '';
    trackTitle.textContent = 'Sem música carregada';
    trackArtist.textContent = config.texts.emptyTrackText || '';
    audioPlayer.removeAttribute('src');
    return;
  }

  if (currentTrackIndex >= config.tracks.length) currentTrackIndex = 0;
  const track = config.tracks[currentTrackIndex];
  audioPlayer.src = track.src;
  audioPlayer.volume = Number(volumeBar?.value || 0.8);
  trackTitle.textContent = track.title || 'Faixa sem título';
  trackArtist.textContent = track.artist || config.texts.emptyTrackText || 'Artista';
  trackArt.innerHTML = track.cover ? `<img src="${track.cover}" alt="Capa da música">` : '';

  config.tracks.forEach((item, index) => {
    const row = document.createElement('button');
    row.className = 'playlist-item';
    if (index === currentTrackIndex) row.classList.add('active');
    row.innerHTML = `
      <span class="playlist-index">${index + 1}</span>
      <span>
        <div class="playlist-title">${escapeHtml(item.title || 'Faixa sem título')}</div>
        <div class="playlist-artist">${escapeHtml(item.artist || 'Artista')}</div>
      </span>
    `;
    row.addEventListener('click', async () => {
      currentTrackIndex = index;
      renderPlayer();
      try { await audioPlayer.play(); playPauseBtn.textContent = '❚❚'; hideAutoplayHint(); } catch {}
    });
    playlist.appendChild(row);
  });
}

function prevTrack() {
  if (!config.tracks.length) return;
  currentTrackIndex = (currentTrackIndex - 1 + config.tracks.length) % config.tracks.length;
  renderPlayer();
  audioPlayer.play().then(() => { playPauseBtn.textContent = '❚❚'; hideAutoplayHint(); }).catch(() => {});
}

function nextTrack() {
  if (!config.tracks.length) return;
  currentTrackIndex = (currentTrackIndex + 1) % config.tracks.length;
  renderPlayer();
  audioPlayer.play().then(() => { playPauseBtn.textContent = '❚❚'; hideAutoplayHint(); }).catch(() => {});
}

function togglePlayPause() {
  if (!config.tracks.length) return;
  if (audioPlayer.paused) {
    audioPlayer.play().then(() => {
      playPauseBtn.textContent = '❚❚';
      hideAutoplayHint();
    }).catch(() => {
      showAutoplayHint();
    });
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶';
  }
}

function syncProgress() {
  const duration = audioPlayer.duration || 0;
  const current = audioPlayer.currentTime || 0;
  if (seekBar) seekBar.value = duration ? String((current / duration) * 100) : '0';
  if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
  if (durationEl) durationEl.textContent = formatTime(duration);
}

function renderCarouselEditor() {
  if (!isEditor) return;
  carouselItemsEditor.innerHTML = '';
  config.carousel.forEach((item, index) => {
    const template = document.getElementById('carouselItemTemplate');
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.item-type').value = item.type;
    node.querySelector('.item-title').value = item.title || '';

    node.querySelector('.item-type').addEventListener('change', e => config.carousel[index].type = e.target.value);
    node.querySelector('.item-title').addEventListener('input', e => config.carousel[index].title = e.target.value);
    node.querySelector('.item-file').addEventListener('change', async e => {
      const file = e.target.files[0];
      if (!file) return;
      config.carousel[index].src = await fileToDataUrl(file);
      if (file.type.startsWith('video/')) config.carousel[index].type = 'video';
      if (file.type.startsWith('image/')) config.carousel[index].type = 'image';
      renderCarousel();
      renderCarouselEditor();
    });

    bindMoveActions(node, config.carousel, index, () => {
      renderCarouselEditor();
      renderCarousel();
    });

    carouselItemsEditor.appendChild(node);
  });
}

function renderTracksEditor() {
  if (!isEditor) return;
  tracksEditor.innerHTML = '';
  config.tracks.forEach((track, index) => {
    const template = document.getElementById('trackTemplate');
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.track-title').value = track.title || '';
    node.querySelector('.track-artist').value = track.artist || '';

    node.querySelector('.track-title').addEventListener('input', e => config.tracks[index].title = e.target.value);
    node.querySelector('.track-artist').addEventListener('input', e => config.tracks[index].artist = e.target.value);
    node.querySelector('.track-cover').addEventListener('change', async e => {
      const file = e.target.files[0];
      if (!file) return;
      config.tracks[index].cover = await fileToDataUrl(file);
      renderPlayer();
    });
    node.querySelector('.track-file').addEventListener('change', async e => {
      const file = e.target.files[0];
      if (!file) return;
      config.tracks[index].src = await fileToDataUrl(file);
      renderPlayer();
    });

    bindMoveActions(node, config.tracks, index, () => {
      renderTracksEditor();
      renderPlayer();
    });

    tracksEditor.appendChild(node);
  });
}

function bindMoveActions(node, list, index, rerender) {
  node.querySelector('.move-up').addEventListener('click', () => {
    if (index === 0) return;
    [list[index - 1], list[index]] = [list[index], list[index - 1]];
    rerender();
  });
  node.querySelector('.move-down').addEventListener('click', () => {
    if (index === list.length - 1) return;
    [list[index + 1], list[index]] = [list[index], list[index + 1]];
    rerender();
  });
  node.querySelector('.remove-item').addEventListener('click', () => {
    list.splice(index, 1);
    rerender();
  });
}

function addCarouselItem() {
  config.carousel.push({ type: 'image', title: '', src: '' });
  renderCarouselEditor();
  renderCarousel();
}

function addTrack() {
  config.tracks.push({ title: '', artist: '', cover: '', src: '' });
  renderTracksEditor();
  renderPlayer();
}

function openEditor() {
  editorDrawer?.classList.add('open');
  editorDrawer?.setAttribute('aria-hidden', 'false');
}

function closeEditor() {
  editorDrawer?.classList.remove('open');
  editorDrawer?.setAttribute('aria-hidden', 'true');
}

function saveFromEditor() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  renderAll();
  populateEditor();
  attemptAutoplay();
  alert('Conteúdo salvo no navegador. A versão final vai ler exatamente esse conteúdo.');
}

function resetConfig() {
  if (!confirm('Restaurar o conteúdo de exemplo?')) return;
  config = structuredClone(demoConfig);
  currentTrackIndex = 0;
  currentSlideIndex = 0;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  populateEditor();
  renderAll();
  startAutoCarousel();
  attemptAutoplay();
}

function setTheme(theme) {
  currentTheme = theme;
  body.dataset.theme = theme;
  document.querySelectorAll('[data-theme-select]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.themeSelect === theme);
  });
}

function openCompareMode() {
  compareOverlay.hidden = false;
  cleanFrame.src = `index.html?theme=clean`;
  darkFrame.src = `index.html?theme=dark`;
}

function closeCompareMode() {
  compareOverlay.hidden = true;
  cleanFrame.src = 'about:blank';
  darkFrame.src = 'about:blank';
}

async function attemptAutoplay() {
  if (!config.tracks.length || !audioPlayer.src) return;
  const forcedTheme = new URLSearchParams(window.location.search).get('theme');
  if (forcedTheme) setTheme(forcedTheme);
  try {
    await audioPlayer.play();
    playPauseBtn.textContent = '❚❚';
    hideAutoplayHint();
  } catch {
    showAutoplayHint();
  }
}

function resumeAutoplayOnce() {
  audioPlayer.play().then(() => {
    playPauseBtn.textContent = '❚❚';
    hideAutoplayHint();
  }).catch(() => {});
}

function showAutoplayHint() {
  autoplayHint?.classList.add('show');
}

function hideAutoplayHint() {
  autoplayHint?.classList.remove('show');
}

function sanitizeSimpleHtml(html) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  const allowed = new Set(['STRONG', 'EM', 'U', 'BR', 'P']);
  [...wrapper.querySelectorAll('*')].forEach(node => {
    if (!allowed.has(node.tagName)) {
      const text = document.createTextNode(node.textContent || '');
      node.replaceWith(text);
    } else {
      [...node.attributes].forEach(attr => node.removeAttribute(attr.name));
    }
  });
  return wrapper.innerHTML;
}

function wrapSelection(textarea, tag) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = textarea.value.slice(start, end) || 'texto';
  const wrapped = `<${tag}>${selected}</${tag}>`;
  textarea.setRangeText(wrapped, start, end, 'end');
  textarea.dispatchEvent(new Event('input'));
}

function insertAtCursor(textarea, text) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.setRangeText(text, start, end, 'end');
  textarea.dispatchEvent(new Event('input'));
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
