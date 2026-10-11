import type { Dict } from './en';

const es: Dict = {
  meta: {
    title: 'Convertidor de YouTube a MP4 y MP3 – Gratis en HD | YToMP4',
    description:
      'Convierte YouTube a MP4 en HD, 1080p o 4K, o a MP3 hasta 320 kbps. Pega el enlace y descarga en segundos: gratis, online, sin registro y en cualquier dispositivo.',
  },

  nav: {
    features: 'Funciones',
    howTo: 'Cómo funciona',
    formats: 'MP4 vs MP3',
    faq: 'Preguntas',
    language: 'Idioma',
    skip: 'Saltar al contenido',
    soon: 'pronto',
  },

  hero: {
    eyebrow: 'Convertidor de YouTube online y gratis',
    h1: 'Convertidor de YouTube a MP4 y MP3',
    sub: 'Descarga cualquier video de YouTube en MP4 en HD, 1080p o 4K, o convierte YouTube a MP3 con audio de hasta 320 kbps. Pega el enlace del video, elige un formato y guarda el archivo. Sin app y sin cuenta.',
    inputLabel: 'URL del video de YouTube',
    placeholder: 'Pega un enlace de YouTube, p. ej. https://youtu.be/…',
    paste: 'Pegar',
    clear: 'Borrar',
    formatLabel: 'Formato',
    qualityLabel: 'Calidad',
    convert: 'Convertir',
    mp4Qualities: [
      { value: '360', label: '360p', available: true },
      { value: '480', label: '480p' },
      { value: '720', label: '720p HD' },
      { value: '1080', label: '1080p Full HD' },
      { value: '1440', label: '1440p (2K)' },
      { value: '2160', label: '4K (2160p)' },
    ],
    mp3Qualities: [
      { value: '128', label: '128 kbps', available: true },
      { value: '192', label: '192 kbps' },
      { value: '256', label: '256 kbps' },
      { value: '320', label: '320 kbps' },
    ],
    soon: 'pronto',
    trust: ['Sin registro', 'Sin programas', 'Sin marca de agua', 'Funciona en iPhone, Android, Mac y PC'],
    preview: 'Video detectado',
    playlistDetected: 'Enlace de lista de reproducción detectado: convertiremos el video seleccionado.',
    errorEmpty: 'Primero pega un enlace de YouTube.',
    errorInvalid: 'Eso no parece un enlace de YouTube. Copia la URL de la barra de direcciones o del botón Compartir e inténtalo de nuevo.',
    pending: 'Preparando tu {format} ({quality})…',
    comingSoon: 'El motor de conversión estará disponible muy pronto. Tu enlace es válido y está listo.',
    disclaimer: 'Descarga solo videos que sean tuyos o que tengas permiso para usar.',
  },

  features: {
    h2: '¿Por qué usar YToMP4 para convertir videos de YouTube?',
    intro:
      'YToMP4 es un descargador de YouTube que funciona en el navegador: guarda los videos como archivos MP4 y extrae el audio en MP3. Todo se procesa en nuestros servidores, así que no hay nada que instalar ni extensiones en las que confiar.',
    items: [
      {
        icon: 'hd',
        h3: 'Descargas MP4 en HD, 1080p y 4K',
        text: 'Guarda videos de YouTube en la resolución que necesites, desde 360p para archivos pequeños hasta 1080p Full HD, 1440p y 4K (2160p). El MP4 conserva la tasa de fotogramas original, incluidos los 60 fps de partidas y deportes.',
      },
      {
        icon: 'music',
        h3: 'MP3 de alta calidad hasta 320 kbps',
        text: 'Convierte cualquier video de YouTube a MP3 a 128, 192, 256 o 320 kbps. Usamos la mejor pista de audio que ofrece YouTube para que obtengas la copia más limpia posible de canciones, podcasts y clases.',
      },
      {
        icon: 'clock',
        h3: 'Videos largos, sin límite de duración',
        text: 'Convierte videos largos de YouTube (podcasts de 2 horas, mezclas de 3 horas y clases completas) sin el límite de 20 minutos que imponen muchos convertidores gratuitos.',
      },
      {
        icon: 'tag',
        h3: 'Título, miniatura y metadatos incluidos',
        text: 'Los MP3 se guardan con el título del video como nombre de archivo y la miniatura como portada (etiquetas ID3), para que se vean bien en tu biblioteca de música.',
      },
      {
        icon: 'devices',
        h3: 'Funciona en todos los dispositivos',
        text: 'Úsalo en Safari, Chrome, Firefox o Edge en iPhone, iPad, Android, Mac, Windows y Chromebook. El convertidor se adapta a cualquier tamaño de pantalla.',
      },
      {
        icon: 'shield',
        h3: 'Seguro, privado y gratis',
        text: 'Sin registro, sin programas, sin ventanas emergentes y sin botones de descarga falsos. No guardamos un historial de lo que conviertes y los archivos se eliminan de nuestros servidores poco después de la descarga.',
      },
    ],
  },

  howTo: {
    h2: 'Cómo convertir un video de YouTube a MP4 o MP3',
    intro: 'Convertir un enlace de YouTube a un archivo MP4 o MP3 tarda unos 10 segundos y funciona igual en cualquier dispositivo.',
    totalTime: 'PT1M',
    steps: [
      {
        name: 'Copia el enlace de YouTube',
        text: 'Abre el video en YouTube y copia la URL de la barra de direcciones, o toca Compartir › Copiar enlace en la app de YouTube. Funcionan videos normales, Shorts, YouTube Music y enlaces cortos youtu.be.',
      },
      {
        name: 'Pega la URL en YToMP4',
        text: 'Pega el enlace en el cuadro de la parte superior de esta página. Aparecerá la miniatura del video para que confirmes que es el correcto.',
      },
      {
        name: 'Elige MP4 o MP3 y la calidad',
        text: 'Elige MP4 para conservar el video (720p, 1080p o 4K) o MP3 para quedarte solo con el audio (de 128 a 320 kbps).',
      },
      {
        name: 'Pulsa Convertir y descarga',
        text: 'Pulsa Convertir. Cuando el archivo esté listo, descárgalo directamente a tu teléfono u ordenador. Se guarda en la carpeta Descargas (o en la app Archivos en iPhone).',
      },
    ],
  },

  formats: {
    h2: 'MP4 vs MP3: ¿qué formato elegir?',
    intro:
      'MP4 (MPEG-4 Parte 14) es un contenedor de video que guarda imagen y sonido. MP3 (MPEG-1 Audio Layer III) es un formato solo de audio. Elige según necesites ver el video o solo escucharlo.',
    headers: ['', 'MP4 (video)', 'MP3 (audio)'],
    rows: [
      ['Contiene', 'Video + audio (video H.264, audio AAC)', 'Solo audio'],
      ['Tamaño típico, 1 minuto', '≈ 15–50 MB (720p–1080p)', '≈ 1–2,4 MB (128–320 kbps)'],
      ['Ideal para', 'Ver sin conexión, editar, compartir clips', 'Música, podcasts, audiolibros, clases'],
      ['Se reproduce en', 'Cualquier móvil, PC, smart TV o editor de video', 'Cualquier móvil, PC, radio del coche o reproductor MP3'],
      ['Ajuste de calidad', 'Resolución: de 360p a 4K (2160p)', 'Tasa de bits: de 128 a 320 kbps'],
    ],
    outro:
      'YouTube transmite muchos videos en WebM (VP9 o AV1). YToMP4 entrega un MP4 estándar con video H.264 y audio AAC porque se reproduce en todas partes: iPhone, QuickTime, Windows Media Player, VLC, Premiere Pro, CapCut e iMovie.',
  },

  quality: {
    h2: 'Resoluciones y tasas de bits compatibles',
    intro: 'Cuanto mayor es el ajuste, mejor es la calidad y más pesado el archivo. Esto es lo que puedes esperar por minuto de video:',
    mp4Caption: 'Resoluciones de YouTube a MP4',
    mp4Headers: ['Resolución', 'Nombre', 'Tamaño aprox. / min', 'Ideal para'],
    mp4Rows: [
      ['2160p', '4K Ultra HD', '100–200 MB', 'Televisores y monitores 4K, edición'],
      ['1440p', '2K / QHD', '60–100 MB', 'Monitores grandes'],
      ['1080p', 'Full HD', '30–50 MB', 'Portátiles, televisores, uso general'],
      ['720p', 'HD', '15–25 MB', 'Móviles y tabletas'],
      ['480p', 'SD', '8–12 MB', 'Ahorrar espacio'],
      ['360p', 'Baja', '4–6 MB', 'Conexiones lentas'],
    ],
    mp3Caption: 'Tasas de bits de YouTube a MP3',
    mp3Headers: ['Tasa de bits', 'Calidad', 'Tamaño / min'],
    mp3Rows: [
      ['320 kbps', 'Máxima calidad MP3', '2,4 MB'],
      ['256 kbps', 'Muy alta', '1,9 MB'],
      ['192 kbps', 'Alta', '1,4 MB'],
      ['128 kbps', 'Estándar', '1,0 MB'],
    ],
    note: 'Una descarga nunca puede ser más nítida que el video original: si se subió en 720p, un MP4 en 1080p no añadirá detalle. Elige la opción más alta que ofrezca el video.',
  },

  devices: {
    h2: 'Descarga YouTube a MP4 y MP3 en cualquier dispositivo',
    intro: 'YToMP4 funciona en el navegador, así que los pasos son casi iguales en todas partes. Aquí es donde se guardan tus archivos.',
    items: [
      {
        icon: 'phone',
        h3: 'iPhone y iPad',
        text: 'Abre YToMP4 en Safari, pega el enlace y toca Descargar. iOS guarda el MP4 o MP3 en la app Archivos › Descargas. Para pasar un video a Fotos, ábrelo en Archivos y toca Compartir › Guardar video.',
      },
      {
        icon: 'android',
        h3: 'Android',
        text: 'Usa Chrome o cualquier navegador. El archivo aparece en la barra de notificaciones y en la carpeta Descargas, desde donde puedes abrirlo con la galería, el reproductor de música o el gestor de archivos.',
      },
      {
        icon: 'laptop',
        h3: 'Mac',
        text: 'Funciona en Safari, Chrome y Firefox en macOS. Los archivos van a la carpeta Descargas; los MP4 se abren en QuickTime Player y los MP3 se pueden arrastrar a la app Música.',
      },
      {
        icon: 'monitor',
        h3: 'PC con Windows',
        text: 'Convierte YouTube a MP4 en Windows 10 y 11 con Edge, Chrome o Firefox. No necesitas programas ni instaladores; los archivos se reproducen en la app Reproductor multimedia o en VLC.',
      },
      {
        icon: 'chromebook',
        h3: 'Chromebook',
        text: 'Como los Chromebook no pueden ejecutar la mayoría de los descargadores de escritorio, un convertidor web es la opción más fácil. Los archivos se guardan en la app Archivos › Descargas.',
      },
    ],
  },

  useCases: {
    h2: 'Qué convierte la gente con YToMP4',
    items: [
      { h3: 'Música sin conexión', text: 'Guarda canciones, sesiones en vivo y mezclas de DJ en MP3 para el gimnasio, el coche o los vuelos sin datos.' },
      { h3: 'Podcasts y clases', text: 'Extrae el audio de charlas, cursos y entrevistas largas y escúchalos a tu ritmo.' },
      { h3: 'Tutoriales y recetas', text: 'Guarda videos de tutoriales en MP4 para verlos sin conexión en la cocina, el taller o el aula.' },
      { h3: 'Tus propios videos', text: 'Haz copias de seguridad de los videos de tu canal o lleva clips a CapCut, Premiere Pro o DaVinci Resolve para editarlos.' },
      { h3: 'YouTube Shorts', text: 'Guarda Shorts como archivos MP4 verticales para volver a verlos o publicarlos en tus propios canales.' },
      { h3: 'Tonos y sonidos', text: 'Convierte un clip a MP3 y recórtalo para usarlo como tono de llamada, alarma o sonido de notificación.' },
    ],
  },

  compare: {
    h2: 'Convertidor online vs programas de escritorio vs extensiones',
    intro:
      'Hay tres formas de guardar videos de YouTube. Los programas de escritorio como 4K Video Downloader o la herramienta de línea de comandos yt-dlp son potentes, pero hay que instalarlos. Las extensiones necesitan acceso a todas las páginas que visitas. Un convertidor online no necesita ninguna de las dos cosas.',
    headers: ['', 'YToMP4 (online)', 'Programa de escritorio', 'Extensión del navegador'],
    rows: [
      ['Instalación', 'Ninguna', 'Necesaria', 'Necesaria'],
      ['Funciona en iPhone y Chromebook', 'Sí', 'No', 'Rara vez'],
      ['MP4 hasta 4K', 'Sí', 'Sí', 'Depende'],
      ['MP3 hasta 320 kbps', 'Sí', 'Sí', 'Depende'],
      ['Precio', 'Gratis', 'A menudo de pago para todas las funciones', 'Gratis / con anuncios'],
      ['Acceso a tu dispositivo', 'Ninguno', 'Acceso total al sistema', 'Lee las páginas que visitas'],
    ],
  },

  faq: {
    h2: 'Preguntas frecuentes',
    groups: [
      {
        name: 'Primeros pasos',
        items: [
          {
            q: '¿Qué es un convertidor de YouTube a MP4?',
            a: 'Un convertidor de YouTube a MP4 es una herramienta que toma el enlace de un video de YouTube y lo convierte en un archivo MP4 descargable que puedes guardar en tu dispositivo y ver sin conexión. YToMP4 también convierte YouTube a MP3 cuando solo necesitas el audio.',
          },
          {
            q: '¿Cómo convierto un video de YouTube a MP4?',
            a: 'Copia la URL del video de YouTube, pégala en el cuadro de la parte superior de esta página, selecciona MP4 y una resolución como 1080p y pulsa Convertir. Cuando el archivo esté listo, pulsa Descargar.',
          },
          {
            q: '¿Cómo convierto YouTube a MP3?',
            a: 'Pega el enlace de YouTube, cambia el formato a MP3, elige una tasa de bits (320 kbps ofrece la máxima calidad) y pulsa Convertir. El audio se guarda como archivo MP3 con el título del video y la miniatura como portada.',
          },
          {
            q: '¿YToMP4 es gratis?',
            a: 'Sí. Convertir y descargar videos de YouTube a MP4 o MP3 es totalmente gratis, sin límite diario, sin periodo de prueba y sin marca de agua.',
          },
          {
            q: '¿Tengo que instalar algo o crear una cuenta?',
            a: 'No. YToMP4 funciona completamente en tu navegador. No hay app, extensión ni registro: solo pega un enlace y descarga.',
          },
          {
            q: '¿Qué enlaces de YouTube son compatibles?',
            a: 'Enlaces normales youtube.com/watch, enlaces cortos youtu.be, YouTube Shorts, YouTube Music, enlaces móviles m.youtube.com, videos insertados y repeticiones de directos ya terminados. Los enlaces con lista de reproducción convierten el video seleccionado.',
          },
        ],
      },
      {
        name: 'Formatos y calidad',
        items: [
          {
            q: '¿Puedo descargar videos de YouTube en 1080p o 4K?',
            a: 'Sí. Si el video se subió en Full HD o superior, puedes descargarlo como MP4 en 1080p, 1440p o 4K (2160p), con la tasa de fotogramas original, incluidos 60 fps.',
          },
          {
            q: '¿Qué calidad de MP3 elijo: 128 kbps o 320 kbps?',
            a: 'Elige 320 kbps para el mejor sonido y la menor compresión adicional; es la tasa de bits más alta que admite el formato MP3. Elige 128 kbps si quieres archivos pequeños para voz, como podcasts y clases. Ten en cuenta que un MP3 no puede sonar mejor que el audio que transmite YouTube, así que 320 kbps conserva la calidad, no la aumenta.',
          },
          {
            q: '¿El archivo MP4 incluye sonido?',
            a: 'Sí. YouTube guarda por separado el video en alta resolución y el audio; YToMP4 los une en un solo MP4 con video H.264 y audio AAC, para que el archivo se reproduzca con sonido en cualquier parte.',
          },
          {
            q: '¿Puedo convertir videos de YouTube de más de 2 horas?',
            a: 'Sí. No hay límite de 20 minutos ni de 1 hora, así que puedes convertir podcasts, audiolibros, conciertos y clases completos de 2, 3 o incluso 10 horas. Los videos más largos solo tardan un poco más en procesarse.',
          },
          {
            q: '¿Puedo descargar una lista de reproducción completa de YouTube en MP3 o MP4?',
            a: 'Pega el enlace de una lista para convertir el video seleccionado. La conversión de listas completas, guardando todos los videos de una vez, está en nuestros planes.',
          },
          {
            q: '¿Puedo convertir solo una parte de un video?',
            a: 'El recorte está en nuestros planes: podrás fijar un inicio y un final para descargar solo un fragmento o una canción de una mezcla larga, en MP4 o MP3.',
          },
          {
            q: '¿Puedo convertir YouTube Shorts a MP4?',
            a: 'Sí. Pega el enlace del Short (youtube.com/shorts/…) y el video se guarda como MP4 vertical, o como MP3 si solo quieres el sonido.',
          },
        ],
      },
      {
        name: 'Dispositivos',
        items: [
          {
            q: '¿Cómo descargo videos de YouTube en MP4 en el iPhone?',
            a: 'Abre ytomp4.com en Safari, pega el enlace de YouTube, elige MP4, toca Convertir y luego Descargar. El video se guarda en la app Archivos, en Descargas; ábrelo y toca Compartir › Guardar video para añadirlo a Fotos.',
          },
          {
            q: '¿YToMP4 funciona en Android?',
            a: 'Sí. Usa Chrome o cualquier otro navegador de Android. Los MP4 y MP3 descargados se guardan en la carpeta Descargas y aparecen en tu galería o app de música.',
          },
          {
            q: '¿Puedo convertir YouTube a MP4 en un Mac o un PC con Windows?',
            a: 'Sí. YToMP4 funciona en Safari, Chrome, Firefox y Edge en macOS, Windows 10 y Windows 11, así que no necesitas un programa aparte para descargar YouTube en Mac o PC.',
          },
          {
            q: '¿Funciona en un Chromebook?',
            a: 'Sí. Como funciona en el navegador, YToMP4 es una de las formas más fáciles de convertir YouTube a MP4 o MP3 en un Chromebook. Los archivos se guardan en la carpeta Descargas de la app Archivos.',
          },
          {
            q: '¿Dónde se guardan los archivos descargados?',
            a: 'Los archivos se guardan en la ubicación de descarga predeterminada de tu navegador: normalmente la carpeta Descargas en ordenadores y Android, y Archivos › Descargas en iPhone y iPad.',
          },
        ],
      },
      {
        name: 'Seguridad y legalidad',
        items: [
          {
            q: '¿Es seguro usar YToMP4?',
            a: 'Sí. YToMP4 no te pide instalar nada, no usa ventanas emergentes ni botones de descarga falsos y entrega archivos MP4 y MP3 normales. Como con cualquier descarga, abre solo los archivos que hayas convertido tú.',
          },
          {
            q: '¿Es legal convertir videos de YouTube a MP4 o MP3?',
            a: 'Depende del video y del país donde vivas. Descargar tus propios videos, contenido de dominio público o videos con licencia Creative Commons suele estar permitido. Descargar música o películas protegidas por derechos de autor sin permiso puede infringir la ley y los Términos de servicio de YouTube. YToMP4 está pensado para el uso personal de contenido sobre el que tienes derechos.',
          },
          {
            q: '¿Guardáis mis videos o un historial?',
            a: 'No. No guardamos registro de los enlaces que conviertes, y los archivos convertidos se eliminan automáticamente de nuestros servidores poco después de descargarlos.',
          },
          {
            q: '¿Por qué no se convierte mi video?',
            a: 'Los videos privados, solo para miembros, con restricción de edad o bloqueados por región no se pueden convertir, y los directos solo se pueden guardar cuando terminan. Comprueba que el enlace se abre en una ventana privada del navegador y vuelve a intentarlo.',
          },
          {
            q: '¿En qué se diferencia de las descargas de YouTube Premium?',
            a: 'YouTube Premium solo permite ver videos sin conexión dentro de la app de YouTube. YToMP4 te da un archivo MP4 o MP3 estándar que se reproduce en cualquier reproductor y dispositivo, sin suscripción.',
          },
        ],
      },
    ],
  },

  cta: {
    h2: 'Convierte tu primer video de YouTube ahora',
    text: 'Pega un enlace, elige MP4 o MP3 y descarga en segundos. Gratis y sin registro.',
    button: 'Empezar a convertir',
  },

  footer: {
    about: 'YToMP4 es un convertidor online y gratuito de YouTube a MP4 y MP3. No está afiliado a YouTube ni a Google.',
    links: [
      { href: '/privacy/', label: 'Privacidad' },
      { href: '/terms/', label: 'Términos' },
      { href: '/dmca/', label: 'Derechos de autor / DMCA' },
      { href: '/contact/', label: 'Contacto' },
    ],
    rights: 'Todos los derechos reservados.',
    createdBy: 'Creado por',
  },

  consent: {
    label: 'Consentimiento de cookies',
    text: 'Usamos cookies de Google Analytics para entender cómo se usa el convertidor y mejorarlo. Sin anuncios ni seguimiento entre sitios.',
    privacy: 'Política de privacidad',
    accept: 'Aceptar',
    reject: 'Rechazar',
    settings: 'Configuración de cookies',
  },

  schema: {
    appName: 'YToMP4: convertidor de YouTube a MP4 y MP3',
    category: 'MultimediaApplication',
    features: [
      'Convierte YouTube a MP4 en 360p, 480p, 720p, 1080p, 1440p y 4K',
      'Convierte YouTube a MP3 a 128, 192, 256 y 320 kbps',
      'Compatible con YouTube Shorts, YouTube Music y enlaces youtu.be',
      'Videos largos sin límite de duración',
      'Portada y título en los metadatos del MP3',
      'Sin registro ni instalación',
    ],
  },
};

export default es;
