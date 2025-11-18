import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FireflyEffect } from '@/components/FireflyEffect';
import { SettingSwiper } from '@/components/SettingSwiper';
import { AgeSlider } from '@/components/AgeSlider';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { TypewriterText } from '@/components/TypewriterText';
import { ShareButtons } from '@/components/ShareButtons';
import { STORY_OPTIONS, LANGUAGES } from '@/lib/constants';
import type { StoryRequest, StoryResponse } from '@/types';
import type { GetServerSideProps } from 'next';

interface StorySelections {
  language: string;
  time: string;
  place: string;
  characters: string;
  mood: string;
  ageGroup: string;
}

export default function Home({ initialLanguage }: { initialLanguage: string }) {
  const [selections, setSelections] = useState<StorySelections>({
    language: initialLanguage,
    time: '',
    place: '',
    characters: '',
    mood: '',
    ageGroup: '2'
  });

  const [story, setStory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showStory, setShowStory] = useState<boolean>(false);
  const [showShareButtons, setShowShareButtons] = useState<boolean>(false);
  const [cooldownTime, setCooldownTime] = useState<number>(0);

  // Cooldown timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (cooldownTime > 0) {
      interval = setInterval(() => {
        setCooldownTime(prev => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [cooldownTime]);

  const updateSelection = useCallback((key: keyof StorySelections, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  }, []);

  // Stable callbacks for each setting so child components don't receive a new
  // function reference every render (prevents repeated effect triggers).
  const onLanguageSelection = useCallback((value: string) => updateSelection('language', value), [updateSelection]);
  const onTimeSelection = useCallback((value: string) => updateSelection('time', value), [updateSelection]);
  const onPlaceSelection = useCallback((value: string) => updateSelection('place', value), [updateSelection]);
  const onCharacterSelection = useCallback((value: string) => updateSelection('characters', value), [updateSelection]);
  const onMoodSelection = useCallback((value: string) => updateSelection('mood', value), [updateSelection]);
  const onAgeChange = useCallback((value: string) => updateSelection('ageGroup', value), [updateSelection]);

// UI text translations
const UI_TRANSLATIONS = {
  title: {
    lt: '✨ PasakAI ✨',
    en: '✨ StoryAI ✨',
    es: '✨ CuentoAI ✨',
    fr: '✨ HistoireAI ✨',
    de: '✨ GeschichteAI ✨',
    it: '✨ StoriaAI ✨'
  },
  tagline: {
    lt: 'Atrask savo stebuklingą pasaką 🪄',
    en: 'Discover your magical story 🪄',
    es: 'Descubre tu cuento mágico 🪄',
    fr: 'Découvrez votre histoire magique 🪄',
    de: 'Entdecken Sie Ihre magische Geschichte 🪄',
    it: 'Scopri la tua storia magica 🪄'
  },
  description: {
    lt: 'Pasirink veikėjus, vietą, laiką ir nuotaiką, o mes paversime tavo idėjas magiška istorija!',
    en: 'Choose characters, place, time and mood, and we will turn your ideas into a magical story!',
    es: '¡Elige personajes, lugar, tiempo y ambiente, y convertiremos tus ideas en una historia mágica!',
    fr: 'Choisissez les personnages, le lieu, le temps et l\'ambiance, et nous transformerons vos idées en une histoire magique !',
    de: 'Wählen Sie Charaktere, Ort, Zeit und Stimmung, und wir verwandeln Ihre Ideen in eine magische Geschichte!',
    it: 'Scegli personaggi, luogo, tempo e atmosfera, e trasformeremo le tue idee in una storia magica!'
  },
  languageTitle: {
    lt: '🌍 Kalba',
    en: '🌍 Language',
    es: '🌍 Idioma',
    fr: '🌍 Langue',
    de: '🌍 Sprache',
    it: '🌍 Lingua'
  },
  timeTitle: {
    lt: '🕰️ Kada vyksta pasaka?',
    en: '🕰️ When does the story take place?',
    es: '🕰️ ¿Cuándo ocurre el cuento?',
    fr: '🕰️ Quand l\'histoire se déroule-t-elle ?',
    de: '🕰️ Wann spielt die Geschichte?',
    it: '🕰️ Quando si svolge la storia?'
  },
  placeTitle: {
    lt: '📍 Kur vyksta pasaka?',
    en: '📍 Where does the story take place?',
    es: '📍 ¿Dónde ocurre el cuento?',
    fr: '📍 Où se déroule l\'histoire ?',
    de: '📍 Wo spielt die Geschichte?',
    it: '📍 Dove si svolge la storia?'
  },
  characterTitle: {
    lt: '👥 Kas yra veikėjai?',
    en: '👥 Who are the characters?',
    es: '👥 ¿Quiénes son los personajes?',
    fr: '👥 Qui sont les personnages ?',
    de: '👥 Wer sind die Charaktere?',
    it: '👥 Chi sono i personaggi?'
  },
  moodTitle: {
    lt: '🎭 Kokia nuotaika?',
    en: '🎭 What is the mood?',
    es: '🎭 ¿Cuál es el ambiente?',
    fr: '🎭 Quelle est l\'ambiance ?',
    de: '🎭 Wie ist die Stimmung?',
    it: '🎭 Qual è l\'atmosfera?'
  },
  creating: {
    lt: 'Kuriama... 🌟',
    en: 'Creating... 🌟',
    es: 'Creando... 🌟',
    fr: 'Création... 🌟',
    de: 'Erstellen... 🌟',
    it: 'Creazione... 🌟'
  },
  createButton: {
    lt: 'Sukurti pasaką ✨',
    en: 'Create story ✨',
    es: 'Crear cuento ✨',
    fr: 'Créer l\'histoire ✨',
    de: 'Geschichte erstellen ✨',
    it: 'Crea storia ✨'
  },
  cooldownMessage: {
    lt: '⏳ {time}',
    en: '⏳ {time}',
    es: '⏳ {time}',
    fr: '⏳ {time}',
    de: '⏳ {time}',
    it: '⏳ {time}'
  },
  storyReady: {
    lt: '✨ Tavo pasaka paruošta!',
    en: '✨ Your story is ready!',
    es: '✨ ¡Tu cuento está listo!',
    fr: '✨ Votre histoire est prête !',
    de: '✨ Ihre Geschichte ist fertig!',
    it: '✨ La tua storia è pronta!'
  },
  createNew: {
    lt: 'Kurti naują pasaką 🌟',
    en: 'Create new story 🌟',
    es: 'Crear nuevo cuento 🌟',
    fr: 'Créer une nouvelle histoire 🌟',
    de: 'Neue Geschichte erstellen 🌟',
    it: 'Crea nuova storia 🌟'
  },
  footer: {
    lt: 'Sukurta su 💖 vaikų džiaugsmui',
    en: 'Created with 💖 for children\'s joy',
    es: 'Creado con 💖 para la alegría de los niños',
    fr: 'Créé avec 💖 pour la joie des enfants',
    de: 'Mit 💖 für die Freude der Kinder erstellt',
    it: 'Creato con 💖 per la gioia dei bambini'
  },
  author: {
    lt: '🐈‍⬛ Autorius',
    en: '🐈‍⬛ Author',
    es: '🐈‍⬛ Autor',
    fr: '🐈‍⬛ Auteur',
    de: '🐈‍⬛ Autor',
    it: '🐈‍⬛ Autore'
  },
  ageTitle: {
    lt: '👶 Skaitytojo amžius',
    en: '👶 Reader\'s age',
    es: '👶 Edad del lector',
    fr: '👶 Âge du lecteur',
    de: '👶 Alter des Lesers',
    it: '👶 Età del lettore'
  },
  ageRange1: {
    lt: '3-6 metų vaikams',
    en: 'For 3-6 year olds',
    es: 'Para niños de 3-6 años',
    fr: 'Pour les 3-6 ans',
    de: 'Für 3-6 Jährige',
    it: 'Per bambini di 3-6 anni'
  },
  ageRange2: {
    lt: '7-9 metų vaikams',
    en: 'For 7-9 year olds',
    es: 'Para niños de 7-9 años',
    fr: 'Pour les 7-9 ans',
    de: 'Für 7-9 Jährige',
    it: 'Per bambini di 7-9 anni'
  },
  ageRange3: {
    lt: '10-12 metų vaikams',
    en: 'For 10-12 year olds',
    es: 'Para niños de 10-12 años',
    fr: 'Pour les 10-12 ans',
    de: 'Für 10-12 Jährige',
    it: 'Per bambini di 10-12 anni'
  },
  ageRange4: {
    lt: '13+ metų vaikams',
    en: 'For 13+ year olds',
    es: 'Para niños de 13+ años',
    fr: 'Pour les 13+ ans',
    de: 'Für 13+ Jährige',
    it: 'Per bambini di 13+ anni'
  },
  ageLabels: {
    lt: ['3-6 m.', '7-9 m.', '10-12 m.', '13+ m.'],
    en: ['3-6 y.', '7-9 y.', '10-12 y.', '13+ y.'],
    es: ['3-6 a.', '7-9 a.', '10-12 a.', '13+ a.'],
    fr: ['3-6 a.', '7-9 a.', '10-12 a.', '13+ a.'],
    de: ['3-6 J.', '7-9 J.', '10-12 J.', '13+ J.'],
    it: ['3-6 a.', '7-9 a.', '10-12 a.', '13+ a.']
  }
};

// Validation messages for missing selections
const VALIDATION_MESSAGES = {
  time: {
    lt: 'laiką',
    en: 'time',
    es: 'tiempo',
    fr: 'temps',
    de: 'Zeit',
    it: 'tempo'
  },
  place: {
    lt: 'vietą',
    en: 'place',
    es: 'lugar',
    fr: 'lieu',
    de: 'Ort',
    it: 'luogo'
  },
  characters: {
    lt: 'veikėjus',
    en: 'characters',
    es: 'personajes',
    fr: 'personnages',
    de: 'Charaktere',
    it: 'personaggi'
  },
  mood: {
    lt: 'nuotaiką',
    en: 'mood',
    es: 'ambiente',
    fr: 'ambiance',
    de: 'Stimmung',
    it: 'atmosfera'
  }
};

// Error messages
const ERROR_MESSAGES = {
  lt: 'Įvyko klaida! Bandykite dar kartą. 😔',
  en: 'An error occurred! Please try again. 😔',
  es: '¡Ocurrió un error! Por favor, inténtalo de nuevo. 😔',
  fr: 'Une erreur s\'est produite ! Veuillez réessayer. 😔',
  de: 'Ein Fehler ist aufgetreten! Bitte versuchen Sie es erneut. 😔',
  it: 'Si è verificato un errore! Per favore, riprova. 😔'
};

  // Helper function to get UI text based on language
  const getUIText = (key: string): string => {
    const translations = UI_TRANSLATIONS[key as keyof typeof UI_TRANSLATIONS] as unknown as { [lang: string]: string | string[] };
    const value = translations?.[selections.language];
    return typeof value === 'string' ? value : key;
  };

  // Helper function to get adaptive font size based on text length
  const getAdaptiveFontSize = (text: string): string => {
    const length = text.length;
    if (length > 105) return '0.8rem';
    if (length > 95) return '0.85rem';
    if (length > 85) return '0.9rem';
    if (length > 75) return '0.95rem';
    return '1rem';
  };

  const generateStory = async () => {
    // Validate selections
    const required = ['time', 'place', 'characters', 'mood'] as const;
    const missing = required.filter(key => !selections[key]);
    
    if (missing.length > 0) {
      const labels = missing.map(key => VALIDATION_MESSAGES[key as keyof typeof VALIDATION_MESSAGES]?.[selections.language as keyof typeof VALIDATION_MESSAGES.time] || key);
      alert(`Prašome pasirinkti: ${labels.join(', ')} 🎯`);
      return;
    }

    setIsLoading(true);
    setShowStory(false);
    setShowShareButtons(false);
    setCooldownTime(30); // Start 30 second cooldown

    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selections as StoryRequest)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: StoryResponse = await response.json();
      
      setStory(data.story);
      setIsLoading(false);
      setShowStory(true);

      // Scroll to story
      setTimeout(() => {
        const storyContainer = document.querySelector('.story-container');
        if (storyContainer) {
          storyContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

    } catch (error) {
      console.error('Error:', error);
      alert(ERROR_MESSAGES[selections.language as keyof typeof ERROR_MESSAGES] || ERROR_MESSAGES.en);
      setIsLoading(false);
    }
  };

  const resetStory = () => {
    setShowStory(false);
    setShowShareButtons(false);
    setStory('');
    
    setTimeout(() => {
      const settingsSection = document.querySelector('.story-settings');
      if (settingsSection) {
        settingsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleTypewriterComplete = () => {
    setShowShareButtons(true);
  };

  return (
    <>
      <Head>
        <title>{getUIText('title')}</title>
        <meta name="description" content={getUIText('description') as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta property="og:title" content={getUIText('title')} />
        <meta property="og:description" content={getUIText('description')} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        
  {/* Fonts are loaded globally in _document.tsx */}
      </Head>

      <div className="bg-gradient" aria-hidden="true"></div>
      <div className="stars" aria-hidden="true"></div>
      <FireflyEffect />

      <ThemeToggle />

      <div className="hero">
        <h1>{getUIText('title')}</h1>
        <p className="tagline" style={{ fontSize: getAdaptiveFontSize(getUIText('tagline')) }}>{getUIText('tagline')}</p>
        <p className="hero-description" style={{ fontSize: getAdaptiveFontSize(getUIText('description')) }}>{getUIText('description')}</p>
      </div>

      <div className="container">
        <div className="story-settings">
          <SettingSwiper
            title={getUIText('languageTitle')}
            options={LANGUAGES}
            onSelectionChange={onLanguageSelection}
            className="language-swiper"
          />

          <SettingSwiper
            title={getUIText('timeTitle')}
            options={STORY_OPTIONS[selections.language as keyof typeof STORY_OPTIONS].time}
            onSelectionChange={onTimeSelection}
            className="time-swiper"
          />

          <SettingSwiper
            title={getUIText('placeTitle')}
            options={STORY_OPTIONS[selections.language as keyof typeof STORY_OPTIONS].place}
            onSelectionChange={onPlaceSelection}
            className="place-swiper"
          />

          <SettingSwiper
            title={getUIText('characterTitle')}
            options={STORY_OPTIONS[selections.language as keyof typeof STORY_OPTIONS].character}
            onSelectionChange={onCharacterSelection}
            className="character-swiper"
          />

          <SettingSwiper
            title={getUIText('moodTitle')}
            options={STORY_OPTIONS[selections.language as keyof typeof STORY_OPTIONS].mood}
            onSelectionChange={onMoodSelection}
            className="mood-swiper"
          />

          <AgeSlider
            value={selections.ageGroup}
            onChange={onAgeChange}
            title={getUIText('ageTitle')}
            ranges={{
              '1': getUIText('ageRange1'),
              '2': getUIText('ageRange2'),
              '3': getUIText('ageRange3'),
              '4': getUIText('ageRange4')
            }}
            labels={UI_TRANSLATIONS.ageLabels[selections.language as keyof typeof UI_TRANSLATIONS.ageLabels] || UI_TRANSLATIONS.ageLabels.lt}
          />

          <button 
            className={`generate-button ${cooldownTime > 0 ? 'cooldown' : ''}`} 
            onClick={generateStory}
            disabled={isLoading || cooldownTime > 0}
          >
            <span className="button-text">
              {isLoading 
                ? getUIText('creating') 
                : cooldownTime > 0 
                  ? <><span className="cooldown-icon">⏳</span> <span className="cooldown-time">{cooldownTime}</span></>
                  : getUIText('createButton')
              }
            </span>
            <div className="button-magic" aria-hidden="true"></div>
          </button>
        </div>

        <div className={`story-container ${showStory || isLoading ? 'show' : ''}`}>
          <LoadingAnimation visible={isLoading} language={selections.language} />

          {showStory && (
            <div className="story-content" style={{ display: 'block' }}>
              <div className="story-header">
                <h3>{getUIText('storyReady')}</h3>
              </div>
              
              <TypewriterText 
                text={story} 
                speed={30} 
                onComplete={handleTypewriterComplete}
              />
              <ShareButtons 
                story={story} 
                visible={showShareButtons}
              />
            </div>
          )}
        </div>
      </div>

      <footer>
        <div className="footer-social-links">
          <a href="https://www.nefas.tv/" target="_blank" rel="noopener noreferrer" className="patreon-link">
            <span>{getUIText('author')}</span>
          </a>
        </div>
        <p>{getUIText('footer')}</p>
      </footer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const forwarded = req.headers['x-forwarded-for'];
  const ip = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0] || (req as any).connection?.remoteAddress || '';
  let language = 'en'; // default
  if (ip && ip !== '127.0.0.1' && ip !== '::1') {
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      if (response.ok) {
        const data = await response.json();
        if (data.status === 'success' && data.countryCode === 'LT') {
          language = 'lt';
        }
      }
    } catch (error) {
      console.error('Geolocation error:', error);
    }
  }
  return {
    props: {
      initialLanguage: language,
    },
  };
};