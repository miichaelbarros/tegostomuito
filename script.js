const STORAGE_KEY = 'romantic-site-config-v3-media';

const AVAILABLE_AUDIO_FILES = [
  {
    "value": "assets/musica1.m4a",
    "label": "musica1.m4a"
  },
  {
    "value": "assets/musica2.mp3",
    "label": "musica2.mp3"
  },
  {
    "value": "assets/musica3.mp3",
    "label": "musica3.mp3"
  },
  {
    "value": "assets/sweet-lady-tyrese.mp3",
    "label": "sweet-lady-tyrese.mp3"
  }
];

const AVAILABLE_COVER_FILES = [
  {
    "value": "assets/banner.jpg",
    "label": "banner.jpg"
  },
  {
    "value": "assets/capa1.jpg",
    "label": "capa1.jpg"
  },
  {
    "value": "assets/capa2.jpg",
    "label": "capa2.jpg"
  },
  {
    "value": "assets/capa3.jpg",
    "label": "capa3.jpg"
  }
];

const AVAILABLE_HERO_IMAGE_FILES = [
  {
    "value": "assets/banner.jpg",
    "label": "banner.jpg"
  },
  {
    "value": "assets/capa1.jpg",
    "label": "capa1.jpg"
  },
  {
    "value": "assets/capa2.jpg",
    "label": "capa2.jpg"
  },
  {
    "value": "assets/capa3.jpg",
    "label": "capa3.jpg"
  },
  {
    "value": "media/img_2026-04-04_at_08.53.57.jpeg",
    "label": "img_2026-04-04_at_08.53.57.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.07.jpeg",
    "label": "img_2026-04-04_at_08.54.07.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.08.jpeg",
    "label": "img_2026-04-04_at_08.54.08.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.14.jpeg",
    "label": "img_2026-04-04_at_08.54.14.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.14_1.jpeg",
    "label": "img_2026-04-04_at_08.54.14_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.14_2.jpeg",
    "label": "img_2026-04-04_at_08.54.14_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.15.jpeg",
    "label": "img_2026-04-04_at_08.54.15.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.15_1.jpeg",
    "label": "img_2026-04-04_at_08.54.15_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.15_2.jpeg",
    "label": "img_2026-04-04_at_08.54.15_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.16.jpeg",
    "label": "img_2026-04-04_at_08.54.16.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.16_1.jpeg",
    "label": "img_2026-04-04_at_08.54.16_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.16_2.jpeg",
    "label": "img_2026-04-04_at_08.54.16_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.17.jpeg",
    "label": "img_2026-04-04_at_08.54.17.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.17_1.jpeg",
    "label": "img_2026-04-04_at_08.54.17_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.17_2.jpeg",
    "label": "img_2026-04-04_at_08.54.17_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.17_3.jpeg",
    "label": "img_2026-04-04_at_08.54.17_3.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.18.jpeg",
    "label": "img_2026-04-04_at_08.54.18.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.18_1.jpeg",
    "label": "img_2026-04-04_at_08.54.18_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.18_2.jpeg",
    "label": "img_2026-04-04_at_08.54.18_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.19.jpeg",
    "label": "img_2026-04-04_at_08.54.19.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.19_1.jpeg",
    "label": "img_2026-04-04_at_08.54.19_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.28.jpeg",
    "label": "img_2026-04-04_at_08.54.28.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.28_1.jpeg",
    "label": "img_2026-04-04_at_08.54.28_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.28_2.jpeg",
    "label": "img_2026-04-04_at_08.54.28_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.29.jpeg",
    "label": "img_2026-04-04_at_08.54.29.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.29_1.jpeg",
    "label": "img_2026-04-04_at_08.54.29_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.30.jpeg",
    "label": "img_2026-04-04_at_08.54.30.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.37.jpeg",
    "label": "img_2026-04-04_at_08.54.37.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.37_1.jpeg",
    "label": "img_2026-04-04_at_08.54.37_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.38.jpeg",
    "label": "img_2026-04-04_at_08.54.38.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.38_1.jpeg",
    "label": "img_2026-04-04_at_08.54.38_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.38_2.jpeg",
    "label": "img_2026-04-04_at_08.54.38_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.39.jpeg",
    "label": "img_2026-04-04_at_08.54.39.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.39_1.jpeg",
    "label": "img_2026-04-04_at_08.54.39_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.39_2.jpeg",
    "label": "img_2026-04-04_at_08.54.39_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.39_3.jpeg",
    "label": "img_2026-04-04_at_08.54.39_3.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.40.jpeg",
    "label": "img_2026-04-04_at_08.54.40.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.40_1.jpeg",
    "label": "img_2026-04-04_at_08.54.40_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.42.jpeg",
    "label": "img_2026-04-04_at_08.54.42.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.42_1.jpeg",
    "label": "img_2026-04-04_at_08.54.42_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.43.jpeg",
    "label": "img_2026-04-04_at_08.54.43.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.43_1.jpeg",
    "label": "img_2026-04-04_at_08.54.43_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.43_2.jpeg",
    "label": "img_2026-04-04_at_08.54.43_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.44.jpeg",
    "label": "img_2026-04-04_at_08.54.44.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.44_1.jpeg",
    "label": "img_2026-04-04_at_08.54.44_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.44_2.jpeg",
    "label": "img_2026-04-04_at_08.54.44_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.45.jpeg",
    "label": "img_2026-04-04_at_08.54.45.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.50.jpeg",
    "label": "img_2026-04-04_at_08.54.50.jpeg"
  }
];

const AVAILABLE_HERO_VIDEO_FILES = [
  {
    "value": "media/vid_2026-04-04_at_08.54.03.mp4",
    "label": "vid_2026-04-04_at_08.54.03.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.07.mp4",
    "label": "vid_2026-04-04_at_08.54.07.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.09.mp4",
    "label": "vid_2026-04-04_at_08.54.09.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.12.mp4",
    "label": "vid_2026-04-04_at_08.54.12.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.13.mp4",
    "label": "vid_2026-04-04_at_08.54.13.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.18.mp4",
    "label": "vid_2026-04-04_at_08.54.18.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.20.mp4",
    "label": "vid_2026-04-04_at_08.54.20.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.38.mp4",
    "label": "vid_2026-04-04_at_08.54.38.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.41.mp4",
    "label": "vid_2026-04-04_at_08.54.41.mp4"
  }
];

const AVAILABLE_IMAGE_FILES = [
  {
    "value": "media/img_2026-04-04_at_08.53.57.jpeg",
    "label": "img_2026-04-04_at_08.53.57.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.07.jpeg",
    "label": "img_2026-04-04_at_08.54.07.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.08.jpeg",
    "label": "img_2026-04-04_at_08.54.08.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.14.jpeg",
    "label": "img_2026-04-04_at_08.54.14.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.14_1.jpeg",
    "label": "img_2026-04-04_at_08.54.14_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.14_2.jpeg",
    "label": "img_2026-04-04_at_08.54.14_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.15.jpeg",
    "label": "img_2026-04-04_at_08.54.15.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.15_1.jpeg",
    "label": "img_2026-04-04_at_08.54.15_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.15_2.jpeg",
    "label": "img_2026-04-04_at_08.54.15_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.16.jpeg",
    "label": "img_2026-04-04_at_08.54.16.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.16_1.jpeg",
    "label": "img_2026-04-04_at_08.54.16_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.16_2.jpeg",
    "label": "img_2026-04-04_at_08.54.16_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.17.jpeg",
    "label": "img_2026-04-04_at_08.54.17.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.17_1.jpeg",
    "label": "img_2026-04-04_at_08.54.17_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.17_2.jpeg",
    "label": "img_2026-04-04_at_08.54.17_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.17_3.jpeg",
    "label": "img_2026-04-04_at_08.54.17_3.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.18.jpeg",
    "label": "img_2026-04-04_at_08.54.18.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.18_1.jpeg",
    "label": "img_2026-04-04_at_08.54.18_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.18_2.jpeg",
    "label": "img_2026-04-04_at_08.54.18_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.19.jpeg",
    "label": "img_2026-04-04_at_08.54.19.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.19_1.jpeg",
    "label": "img_2026-04-04_at_08.54.19_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.28.jpeg",
    "label": "img_2026-04-04_at_08.54.28.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.28_1.jpeg",
    "label": "img_2026-04-04_at_08.54.28_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.28_2.jpeg",
    "label": "img_2026-04-04_at_08.54.28_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.29.jpeg",
    "label": "img_2026-04-04_at_08.54.29.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.29_1.jpeg",
    "label": "img_2026-04-04_at_08.54.29_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.30.jpeg",
    "label": "img_2026-04-04_at_08.54.30.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.37.jpeg",
    "label": "img_2026-04-04_at_08.54.37.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.37_1.jpeg",
    "label": "img_2026-04-04_at_08.54.37_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.38.jpeg",
    "label": "img_2026-04-04_at_08.54.38.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.38_1.jpeg",
    "label": "img_2026-04-04_at_08.54.38_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.38_2.jpeg",
    "label": "img_2026-04-04_at_08.54.38_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.39.jpeg",
    "label": "img_2026-04-04_at_08.54.39.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.39_1.jpeg",
    "label": "img_2026-04-04_at_08.54.39_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.39_2.jpeg",
    "label": "img_2026-04-04_at_08.54.39_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.39_3.jpeg",
    "label": "img_2026-04-04_at_08.54.39_3.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.40.jpeg",
    "label": "img_2026-04-04_at_08.54.40.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.40_1.jpeg",
    "label": "img_2026-04-04_at_08.54.40_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.42.jpeg",
    "label": "img_2026-04-04_at_08.54.42.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.42_1.jpeg",
    "label": "img_2026-04-04_at_08.54.42_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.43.jpeg",
    "label": "img_2026-04-04_at_08.54.43.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.43_1.jpeg",
    "label": "img_2026-04-04_at_08.54.43_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.43_2.jpeg",
    "label": "img_2026-04-04_at_08.54.43_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.44.jpeg",
    "label": "img_2026-04-04_at_08.54.44.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.44_1.jpeg",
    "label": "img_2026-04-04_at_08.54.44_1.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.44_2.jpeg",
    "label": "img_2026-04-04_at_08.54.44_2.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.45.jpeg",
    "label": "img_2026-04-04_at_08.54.45.jpeg"
  },
  {
    "value": "media/img_2026-04-04_at_08.54.50.jpeg",
    "label": "img_2026-04-04_at_08.54.50.jpeg"
  }
];

const AVAILABLE_VIDEO_FILES = [
  {
    "value": "media/vid_2026-04-04_at_08.54.03.mp4",
    "label": "vid_2026-04-04_at_08.54.03.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.07.mp4",
    "label": "vid_2026-04-04_at_08.54.07.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.09.mp4",
    "label": "vid_2026-04-04_at_08.54.09.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.12.mp4",
    "label": "vid_2026-04-04_at_08.54.12.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.13.mp4",
    "label": "vid_2026-04-04_at_08.54.13.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.18.mp4",
    "label": "vid_2026-04-04_at_08.54.18.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.20.mp4",
    "label": "vid_2026-04-04_at_08.54.20.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.38.mp4",
    "label": "vid_2026-04-04_at_08.54.38.mp4"
  },
  {
    "value": "media/vid_2026-04-04_at_08.54.41.mp4",
    "label": "vid_2026-04-04_at_08.54.41.mp4"
  }
];

const CONFIG_DEFAULTS = {
  publishedTheme: 'clean',
  settings: {
    autoCarouselIntervalMs: 5000
  },
  texts: {
    heroEyebrow: '',
    heroTitle: '',
    heroSubtitle: '',
    momentsEyebrow: '',
    momentsTitle: '',
    musicEyebrow: '',
    musicTitle: '',
    letterEyebrow: '',
    letterTitle: '',
    nowPlayingLabel: '',
    emptyTrackText: '',
    closing: ''
  },
  hero: {
    type: 'image',
    src: ''
  },
  carousel: [],
  tracks: [],
  letter: ''
};

const FILE_CONFIG = mergeConfig(window.SITE_CONFIG || CONFIG_DEFAULTS);

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
const heroSourceSelect = document.getElementById('heroSourceSelect');
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
  document.getElementById('exportConfigBtn')?.addEventListener('click', exportCurrentConfigFile);
  document.getElementById('resetBtn')?.addEventListener('click', resetConfig);
  document.getElementById('addCarouselItemBtn')?.addEventListener('click', () => addCarouselItem());
  document.getElementById('addTrackBtn')?.addEventListener('click', () => addTrack());
  document.getElementById('compareThemesBtn')?.addEventListener('click', openCompareMode);
  document.getElementById('closeCompareBtn')?.addEventListener('click', closeCompareMode);

  heroType?.addEventListener('change', () => {
    config.hero.type = heroType.value;
    config.hero.src = '';
    fillHeroSourceOptions();
    renderHero();
  });
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
  heroSourceSelect?.addEventListener('change', e => {
    config.hero.src = e.target.value;
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
  return structuredClone(FILE_CONFIG);
}

function mergeConfig(raw, baseConfig = CONFIG_DEFAULTS) {
  const merged = structuredClone(baseConfig);
  merged.publishedTheme = raw?.publishedTheme || merged.publishedTheme;
  merged.settings = { ...(merged.settings || {}), ...(raw?.settings || {}) };
  merged.texts = { ...(merged.texts || {}), ...(raw?.texts || {}) };
  if (raw?.hero) merged.hero = { ...(merged.hero || {}), ...raw.hero };
  if (Array.isArray(raw?.carousel)) merged.carousel = raw.carousel;
  if (Array.isArray(raw?.tracks)) merged.tracks = raw.tracks;
  if (typeof raw?.letter === 'string') merged.letter = raw.letter;
  return merged;
}

function populateEditor() {
  if (!isEditor) return;
  heroType.value = config.hero.type;
  fillHeroSourceOptions();
  if (heroSourceSelect) heroSourceSelect.value = config.hero.src || '';
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
  if (heroEyebrowView) heroEyebrowView.textContent = config.texts.heroEyebrow || '';
  if (heroTitleView) heroTitleView.textContent = config.texts.heroTitle || '';
  if (heroSubtitleView) heroSubtitleView.textContent = config.texts.heroSubtitle || '';
  if (momentsEyebrowView) momentsEyebrowView.textContent = config.texts.momentsEyebrow || '';
  if (momentsTitleView) momentsTitleView.textContent = config.texts.momentsTitle || '';
  if (musicEyebrowView) musicEyebrowView.textContent = config.texts.musicEyebrow || '';
  if (musicTitleView) musicTitleView.textContent = config.texts.musicTitle || '';
  if (letterEyebrowView) letterEyebrowView.textContent = config.texts.letterEyebrow || '';
  if (letterTitleView) letterTitleView.textContent = config.texts.letterTitle || '';
  if (nowPlayingLabelView) nowPlayingLabelView.textContent = config.texts.nowPlayingLabel || '';
}



function fillHeroSourceOptions() {
  if (!heroSourceSelect) return;
  const options = heroType?.value === 'video' ? AVAILABLE_HERO_VIDEO_FILES : AVAILABLE_HERO_IMAGE_FILES;
  fillSelectOptions(heroSourceSelect, options, config.hero.src || '', 'Selecione um arquivo');
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
  const scrollPosition =
    card.offsetLeft - (carouselTrack.offsetWidth / 2) + (card.offsetWidth / 2);

  carouselTrack.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });

  [...carouselDots.children].forEach((dot, i) => dot.classList.toggle('active', i === index));
  if (restartTimer) restartAutoCarousel();
}



function startAutoCarousel() {
  stopAutoCarousel();
  const isMobile = window.innerWidth <= 768;
  if (isMobile) return;
  if (!carouselTrack || config.carousel.length <= 1) return;
  autoCarouselTimer = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % config.carousel.length;
    scrollToSlide(currentSlideIndex);
  }, Number(config?.settings?.autoCarouselIntervalMs || FILE_CONFIG?.settings?.autoCarouselIntervalMs || 5000));
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

    const typeSelect = node.querySelector('.item-type');
    const titleInput = node.querySelector('.item-title');
    const mediaSelect = node.querySelector('.item-media-select');

    typeSelect.value = item.type || 'image';
    titleInput.value = item.title || '';

    const syncMediaOptions = () => {
      const options = typeSelect.value === 'video' ? AVAILABLE_VIDEO_FILES : AVAILABLE_IMAGE_FILES;
      const currentValue = config.carousel[index].type === typeSelect.value ? (config.carousel[index].src || '') : '';
      fillSelectOptions(mediaSelect, options, currentValue, 'Selecione um arquivo');
    };

    syncMediaOptions();

    typeSelect.addEventListener('change', e => {
      config.carousel[index].type = e.target.value;
      config.carousel[index].src = '';
      syncMediaOptions();
      renderCarousel();
    });

    titleInput.addEventListener('input', e => {
      config.carousel[index].title = e.target.value;
      renderCarousel();
    });

    mediaSelect.addEventListener('change', e => {
      config.carousel[index].src = e.target.value;
      config.carousel[index].type = typeSelect.value;
      renderCarousel();
    });

    bindMoveActions(node, config.carousel, index, () => {
      renderCarouselEditor();
      renderCarousel();
    });

    carouselItemsEditor.appendChild(node);
  });
}

function fillSelectOptions(select, options, currentValue, placeholderText) {
  select.innerHTML = '';
  if (placeholderText) {
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = placeholderText;
    select.appendChild(placeholder);
  }
  options.forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.value;
    option.textContent = optionData.label;
    if (optionData.value === currentValue) option.selected = true;
    select.appendChild(option);
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

    const coverSelect = node.querySelector('.track-cover-select');
    const fileSelect = node.querySelector('.track-file-select');

    fillSelectOptions(coverSelect, AVAILABLE_COVER_FILES, track.cover || '', 'Sem capa');
    fillSelectOptions(fileSelect, AVAILABLE_AUDIO_FILES, track.src || '', 'Selecione uma música');

    node.querySelector('.track-title').addEventListener('input', e => config.tracks[index].title = e.target.value);
    node.querySelector('.track-artist').addEventListener('input', e => config.tracks[index].artist = e.target.value);

    coverSelect.addEventListener('change', e => {
      config.tracks[index].cover = e.target.value;
      renderPlayer();
    });

    fileSelect.addEventListener('change', e => {
      config.tracks[index].src = e.target.value;
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
  downloadConfigFile(config);
  alert('O site sempre abre a partir do config.js. As alterações foram salvas no navegador e um novo config.js foi exportado para backup/publicação.');
}



function downloadConfigFile(configToExport) {
  const exportText = 'window.SITE_CONFIG = ' + JSON.stringify(configToExport, null, 2) + ';\n';
  const blob = new Blob([exportText], { type: 'application/javascript' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'config.js';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function exportCurrentConfigFile() {
  downloadConfigFile(config);
}


function resetConfig() {
  if (!confirm('Restaurar a configuração do arquivo config.js?')) return;
  config = structuredClone(FILE_CONFIG);
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
