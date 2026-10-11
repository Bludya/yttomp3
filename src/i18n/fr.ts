import type { Dict } from './en';

const fr: Dict = {
  meta: {
    title: 'Convertisseur YouTube MP4 et MP3 – Gratuit en HD | YToMP4',
    description:
      'Convertissez YouTube en MP4 en HD, 1080p ou 4K, ou en MP3 jusqu’à 320 kbps. Collez le lien et téléchargez en quelques secondes : gratuit, en ligne, sans inscription.',
  },

  nav: {
    features: 'Fonctionnalités',
    howTo: 'Comment ça marche',
    formats: 'MP4 ou MP3',
    faq: 'FAQ',
    language: 'Langue',
    skip: 'Aller au contenu',
    soon: 'bientôt',
  },

  hero: {
    eyebrow: 'Convertisseur YouTube gratuit en ligne',
    h1: 'Convertisseur YouTube en MP4 et MP3',
    sub: 'Téléchargez n’importe quelle vidéo YouTube en MP4 en HD, 1080p ou 4K, ou convertissez YouTube en MP3 jusqu’à 320 kbps. Collez le lien de la vidéo, choisissez un format et enregistrez le fichier. Sans appli, sans compte.',
    inputLabel: 'URL de la vidéo YouTube',
    placeholder: 'Collez un lien YouTube, ex. https://youtu.be/…',
    paste: 'Coller',
    clear: 'Effacer',
    formatLabel: 'Format',
    qualityLabel: 'Qualité',
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
    soon: 'bientôt',
    trust: ['Sans inscription', 'Sans logiciel', 'Sans filigrane', 'Fonctionne sur iPhone, Android, Mac et PC'],
    preview: 'Vidéo détectée',
    playlistDetected: 'Lien de playlist détecté : nous convertirons la vidéo sélectionnée.',
    errorEmpty: 'Collez d’abord un lien YouTube.',
    errorInvalid: 'Ce lien ne ressemble pas à un lien YouTube. Copiez l’URL depuis la barre d’adresse ou le bouton Partager, puis réessayez.',
    pending: 'Préparation de votre {format} ({quality})…',
    comingSoon: 'Le moteur de conversion arrive très bientôt. Votre lien est valide et prêt.',
    disclaimer: 'Ne téléchargez que des vidéos qui vous appartiennent ou que vous avez le droit d’utiliser.',
  },

  features: {
    h2: 'Pourquoi utiliser YToMP4 pour convertir des vidéos YouTube ?',
    intro:
      'YToMP4 est un téléchargeur YouTube qui fonctionne dans le navigateur : il enregistre les vidéos en MP4 et extrait l’audio en MP3. Tout est traité sur nos serveurs, donc rien à installer et aucune extension à laquelle faire confiance.',
    items: [
      {
        icon: 'hd',
        h3: 'Téléchargements MP4 en HD, 1080p et 4K',
        text: 'Enregistrez les vidéos YouTube dans la résolution qu’il vous faut, de 360p pour des fichiers légers jusqu’à 1080p Full HD, 1440p et 4K (2160p). Le MP4 conserve la fréquence d’images d’origine, y compris le 60 fps des jeux et du sport.',
      },
      {
        icon: 'music',
        h3: 'MP3 haute qualité jusqu’à 320 kbps',
        text: 'Transformez n’importe quelle vidéo YouTube en MP3 à 128, 192, 256 ou 320 kbps. Nous utilisons la meilleure piste audio proposée par YouTube pour obtenir la copie la plus propre possible de vos musiques, podcasts et cours.',
      },
      {
        icon: 'clock',
        h3: 'Vidéos longues, sans limite de durée',
        text: 'Convertissez de longues vidéos YouTube (podcasts de 2 heures, mixes de 3 heures, cours complets) sans la limite de 20 minutes imposée par de nombreux convertisseurs gratuits.',
      },
      {
        icon: 'tag',
        h3: 'Titre, miniature et métadonnées inclus',
        text: 'Les MP3 sont enregistrés avec le titre de la vidéo comme nom de fichier et la miniature comme pochette (tags ID3), pour un rendu propre dans votre bibliothèque musicale.',
      },
      {
        icon: 'devices',
        h3: 'Fonctionne sur tous les appareils',
        text: 'Utilisez-le dans Safari, Chrome, Firefox ou Edge sur iPhone, iPad, Android, Mac, Windows et Chromebook. Le convertisseur s’adapte à toutes les tailles d’écran.',
      },
      {
        icon: 'shield',
        h3: 'Sûr, privé et gratuit',
        text: 'Pas d’inscription, pas de logiciel, pas de pop-ups ni de faux boutons de téléchargement. Nous ne gardons aucun historique de vos conversions et les fichiers sont supprimés de nos serveurs peu après le téléchargement.',
      },
    ],
  },

  howTo: {
    h2: 'Comment convertir une vidéo YouTube en MP4 ou MP3',
    intro: 'Convertir un lien YouTube en fichier MP4 ou MP3 prend environ 10 secondes et fonctionne de la même façon sur tous les appareils.',
    totalTime: 'PT1M',
    steps: [
      {
        name: 'Copiez le lien YouTube',
        text: 'Ouvrez la vidéo sur YouTube et copiez son URL depuis la barre d’adresse, ou appuyez sur Partager › Copier le lien dans l’appli YouTube. Vidéos classiques, Shorts, YouTube Music et liens courts youtu.be fonctionnent tous.',
      },
      {
        name: 'Collez l’URL dans YToMP4',
        text: 'Collez le lien dans le champ en haut de cette page. La miniature de la vidéo s’affiche pour vérifier qu’il s’agit de la bonne.',
      },
      {
        name: 'Choisissez MP4 ou MP3 et la qualité',
        text: 'Choisissez MP4 pour garder la vidéo (720p, 1080p ou 4K) ou MP3 pour ne garder que l’audio (de 128 à 320 kbps).',
      },
      {
        name: 'Cliquez sur Convertir et téléchargez',
        text: 'Cliquez sur Convertir. Quand le fichier est prêt, téléchargez-le directement sur votre téléphone ou votre ordinateur. Il arrive dans le dossier Téléchargements (ou l’appli Fichiers sur iPhone).',
      },
    ],
  },

  formats: {
    h2: 'MP4 ou MP3 : quel format choisir ?',
    intro:
      'Le MP4 (MPEG-4 Partie 14) est un conteneur vidéo qui contient l’image et le son. Le MP3 (MPEG-1 Audio Layer III) est un format uniquement audio. Choisissez selon que vous voulez voir la vidéo ou seulement l’écouter.',
    headers: ['', 'MP4 (vidéo)', 'MP3 (audio)'],
    rows: [
      ['Contient', 'Vidéo + audio (vidéo H.264, audio AAC)', 'Audio uniquement'],
      ['Taille type, 1 minute', '≈ 15–50 Mo (720p–1080p)', '≈ 1–2,4 Mo (128–320 kbps)'],
      ['Idéal pour', 'Regarder hors ligne, monter, partager des extraits', 'Musique, podcasts, livres audio, cours'],
      ['Lisible sur', 'Tout téléphone, PC, smart TV ou logiciel de montage', 'Tout téléphone, PC, autoradio ou lecteur MP3'],
      ['Réglage de qualité', 'Résolution : de 360p à 4K (2160p)', 'Débit : de 128 à 320 kbps'],
    ],
    outro:
      'YouTube diffuse de nombreuses vidéos en WebM (VP9 ou AV1). YToMP4 fournit un MP4 standard avec vidéo H.264 et audio AAC, car il se lit partout : iPhone, QuickTime, Lecteur Windows Media, VLC, Premiere Pro, CapCut et iMovie.',
  },

  quality: {
    h2: 'Résolutions et débits pris en charge',
    intro: 'Plus le réglage est élevé, meilleure est la qualité et plus le fichier est lourd. Voici ce qu’il faut prévoir par minute de vidéo :',
    mp4Caption: 'Résolutions YouTube en MP4',
    mp4Headers: ['Résolution', 'Nom', 'Taille approx. / min', 'Idéal pour'],
    mp4Rows: [
      ['2160p', '4K Ultra HD', '100–200 Mo', 'Téléviseurs et écrans 4K, montage'],
      ['1440p', '2K / QHD', '60–100 Mo', 'Grands écrans'],
      ['1080p', 'Full HD', '30–50 Mo', 'Ordinateurs portables, TV, usage courant'],
      ['720p', 'HD', '15–25 Mo', 'Téléphones et tablettes'],
      ['480p', 'SD', '8–12 Mo', 'Économiser de l’espace'],
      ['360p', 'Basse', '4–6 Mo', 'Connexions lentes'],
    ],
    mp3Caption: 'Débits YouTube en MP3',
    mp3Headers: ['Débit', 'Qualité', 'Taille / min'],
    mp3Rows: [
      ['320 kbps', 'Qualité MP3 maximale', '2,4 Mo'],
      ['256 kbps', 'Très haute', '1,9 Mo'],
      ['192 kbps', 'Haute', '1,4 Mo'],
      ['128 kbps', 'Standard', '1,0 Mo'],
    ],
    note: 'Un téléchargement ne peut jamais être plus net que la vidéo d’origine : si elle a été mise en ligne en 720p, un MP4 en 1080p n’ajoutera aucun détail. Choisissez l’option la plus haute proposée par la vidéo.',
  },

  devices: {
    h2: 'Téléchargez YouTube en MP4 et MP3 sur tous vos appareils',
    intro: 'YToMP4 fonctionne dans le navigateur, les étapes sont donc presque identiques partout. Voici où arrivent vos fichiers.',
    items: [
      {
        icon: 'phone',
        h3: 'iPhone et iPad',
        text: 'Ouvrez YToMP4 dans Safari, collez le lien et appuyez sur Télécharger. iOS enregistre le MP4 ou le MP3 dans l’appli Fichiers › Téléchargements. Pour ajouter une vidéo à Photos, ouvrez-la dans Fichiers puis appuyez sur Partager › Enregistrer la vidéo.',
      },
      {
        icon: 'android',
        h3: 'Android',
        text: 'Utilisez Chrome ou n’importe quel navigateur. Le fichier apparaît dans la barre de notifications et dans le dossier Téléchargements, où la galerie, le lecteur de musique ou le gestionnaire de fichiers peuvent l’ouvrir.',
      },
      {
        icon: 'laptop',
        h3: 'Mac',
        text: 'Fonctionne dans Safari, Chrome et Firefox sur macOS. Les fichiers vont dans le dossier Téléchargements ; les MP4 s’ouvrent dans QuickTime Player et les MP3 se glissent dans l’app Musique.',
      },
      {
        icon: 'monitor',
        h3: 'PC Windows',
        text: 'Convertissez YouTube en MP4 sous Windows 10 et 11 avec Edge, Chrome ou Firefox. Aucun logiciel ni installation ; les fichiers se lisent dans l’app Lecteur multimédia ou VLC.',
      },
      {
        icon: 'chromebook',
        h3: 'Chromebook',
        text: 'Les Chromebook ne pouvant pas exécuter la plupart des téléchargeurs de bureau, un convertisseur web est l’option la plus simple. Les fichiers sont enregistrés dans l’appli Fichiers › Téléchargements.',
      },
    ],
  },

  useCases: {
    h2: 'Ce que les gens convertissent avec YToMP4',
    items: [
      { h3: 'Musique hors ligne', text: 'Enregistrez chansons, sessions live et mixes de DJ en MP3 pour la salle de sport, la voiture ou l’avion, sans données mobiles.' },
      { h3: 'Podcasts et cours', text: 'Extrayez l’audio de conférences, formations et interviews longues et écoutez-les à votre rythme.' },
      { h3: 'Tutoriels et recettes', text: 'Gardez les tutoriels en MP4 pour les regarder hors ligne en cuisine, à l’atelier ou en classe.' },
      { h3: 'Vos propres vidéos', text: 'Sauvegardez les vidéos de votre chaîne ou importez des extraits dans CapCut, Premiere Pro ou DaVinci Resolve pour les monter.' },
      { h3: 'YouTube Shorts', text: 'Enregistrez des Shorts en MP4 vertical pour les revoir ou les republier sur vos propres chaînes.' },
      { h3: 'Sonneries et sons', text: 'Convertissez un extrait en MP3, puis coupez-le pour en faire une sonnerie, une alarme ou un son de notification.' },
    ],
  },

  compare: {
    h2: 'Convertisseur en ligne, logiciel ou extension de navigateur ?',
    intro:
      'Il existe trois façons d’enregistrer des vidéos YouTube. Les logiciels comme 4K Video Downloader ou l’outil en ligne de commande yt-dlp sont puissants mais doivent être installés. Les extensions ont besoin d’accéder à toutes les pages que vous visitez. Un convertisseur en ligne n’a besoin ni de l’un ni de l’autre.',
    headers: ['', 'YToMP4 (en ligne)', 'Logiciel de bureau', 'Extension de navigateur'],
    rows: [
      ['Installation', 'Aucune', 'Obligatoire', 'Obligatoire'],
      ['Fonctionne sur iPhone et Chromebook', 'Oui', 'Non', 'Rarement'],
      ['MP4 jusqu’en 4K', 'Oui', 'Oui', 'Variable'],
      ['MP3 jusqu’à 320 kbps', 'Oui', 'Oui', 'Variable'],
      ['Prix', 'Gratuit', 'Souvent payant pour toutes les fonctions', 'Gratuit / publicités'],
      ['Accès à votre appareil', 'Aucun', 'Accès complet au système', 'Lit les pages que vous visitez'],
    ],
  },

  faq: {
    h2: 'Questions fréquentes',
    groups: [
      {
        name: 'Premiers pas',
        items: [
          {
            q: 'Qu’est-ce qu’un convertisseur YouTube en MP4 ?',
            a: 'Un convertisseur YouTube en MP4 est un outil qui transforme le lien d’une vidéo YouTube en fichier MP4 téléchargeable, à garder sur votre appareil et à regarder hors ligne. YToMP4 convertit aussi YouTube en MP3 quand vous n’avez besoin que de l’audio.',
          },
          {
            q: 'Comment convertir une vidéo YouTube en MP4 ?',
            a: 'Copiez l’URL de la vidéo sur YouTube, collez-la dans le champ en haut de cette page, sélectionnez MP4 et une résolution comme 1080p, puis cliquez sur Convertir. Quand le fichier est prêt, cliquez sur Télécharger.',
          },
          {
            q: 'Comment convertir YouTube en MP3 ?',
            a: 'Collez le lien YouTube, passez le format sur MP3, choisissez un débit (320 kbps donne la meilleure qualité) et cliquez sur Convertir. L’audio est enregistré en MP3 avec le titre de la vidéo et la miniature en pochette.',
          },
          {
            q: 'YToMP4 est-il gratuit ?',
            a: 'Oui. Convertir et télécharger des vidéos YouTube en MP4 ou MP3 est entièrement gratuit, sans limite quotidienne, sans essai et sans filigrane.',
          },
          {
            q: 'Faut-il installer un logiciel ou créer un compte ?',
            a: 'Non. YToMP4 fonctionne entièrement dans votre navigateur. Pas d’appli, pas d’extension, pas d’inscription : collez un lien et téléchargez.',
          },
          {
            q: 'Quels liens YouTube sont pris en charge ?',
            a: 'Les liens classiques youtube.com/watch, les liens courts youtu.be, les YouTube Shorts, YouTube Music, les liens mobiles m.youtube.com, les vidéos intégrées et les rediffusions de lives terminés. Les liens contenant une playlist convertissent la vidéo sélectionnée.',
          },
        ],
      },
      {
        name: 'Formats et qualité',
        items: [
          {
            q: 'Puis-je télécharger des vidéos YouTube en 1080p ou en 4K ?',
            a: 'Oui. Si la vidéo a été mise en ligne en Full HD ou plus, vous pouvez la télécharger en MP4 1080p, 1440p ou 4K (2160p), avec la fréquence d’images d’origine, y compris 60 fps.',
          },
          {
            q: 'Quelle qualité MP3 choisir : 128 kbps ou 320 kbps ?',
            a: 'Choisissez 320 kbps pour le meilleur son et le moins de compression supplémentaire : c’est le débit maximal du format MP3. Choisissez 128 kbps pour des fichiers légers de parole, comme les podcasts et les cours. Un MP3 ne peut pas sonner mieux que l’audio diffusé par YouTube : 320 kbps préserve la qualité, il ne l’améliore pas.',
          },
          {
            q: 'Le fichier MP4 contient-il le son ?',
            a: 'Oui. YouTube stocke séparément la vidéo haute résolution et l’audio ; YToMP4 les fusionne en un seul MP4 avec vidéo H.264 et audio AAC, pour que le fichier se lise avec le son partout.',
          },
          {
            q: 'Puis-je convertir des vidéos YouTube de plus de 2 heures ?',
            a: 'Oui. Il n’y a pas de limite de 20 minutes ni d’une heure : vous pouvez convertir des podcasts, livres audio, concerts et cours complets de 2, 3 voire 10 heures. Les vidéos plus longues demandent simplement un peu plus de temps de traitement.',
          },
          {
            q: 'Puis-je télécharger toute une playlist YouTube en MP3 ou MP4 ?',
            a: 'Collez un lien de playlist pour convertir la vidéo sélectionnée. La conversion de playlists complètes, avec toutes les vidéos en une fois, est prévue.',
          },
          {
            q: 'Puis-je convertir seulement une partie d’une vidéo ?',
            a: 'Le découpage est prévu : vous pourrez définir un début et une fin pour ne télécharger qu’un extrait ou un seul morceau d’un long mix, en MP4 ou en MP3.',
          },
          {
            q: 'Puis-je convertir des YouTube Shorts en MP4 ?',
            a: 'Oui. Collez le lien du Short (youtube.com/shorts/…) et la vidéo est enregistrée en MP4 vertical, ou en MP3 si vous ne voulez que le son.',
          },
        ],
      },
      {
        name: 'Appareils',
        items: [
          {
            q: 'Comment télécharger une vidéo YouTube en MP4 sur iPhone ?',
            a: 'Ouvrez ytomp4.com dans Safari, collez le lien YouTube, choisissez MP4, appuyez sur Convertir puis sur Télécharger. La vidéo est enregistrée dans l’appli Fichiers, dans Téléchargements ; ouvrez-la et appuyez sur Partager › Enregistrer la vidéo pour l’ajouter à Photos.',
          },
          {
            q: 'YToMP4 fonctionne-t-il sur Android ?',
            a: 'Oui. Utilisez Chrome ou tout autre navigateur Android. Les MP4 et MP3 téléchargés sont enregistrés dans le dossier Téléchargements et apparaissent dans votre galerie ou votre appli de musique.',
          },
          {
            q: 'Puis-je convertir YouTube en MP4 sur Mac ou sur PC Windows ?',
            a: 'Oui. YToMP4 fonctionne dans Safari, Chrome, Firefox et Edge sous macOS, Windows 10 et Windows 11 : inutile d’installer un logiciel de téléchargement YouTube pour Mac ou PC.',
          },
          {
            q: 'Est-ce que ça marche sur Chromebook ?',
            a: 'Oui. Comme il fonctionne dans le navigateur, YToMP4 est l’un des moyens les plus simples de convertir YouTube en MP4 ou MP3 sur Chromebook. Les fichiers sont enregistrés dans le dossier Téléchargements de l’appli Fichiers.',
          },
          {
            q: 'Où vont les fichiers téléchargés ?',
            a: 'Les fichiers sont enregistrés à l’emplacement de téléchargement par défaut de votre navigateur : en général le dossier Téléchargements sur ordinateur et Android, et Fichiers › Téléchargements sur iPhone et iPad.',
          },
        ],
      },
      {
        name: 'Sécurité et légalité',
        items: [
          {
            q: 'YToMP4 est-il sûr ?',
            a: 'Oui. YToMP4 ne vous demande rien d’installer, n’utilise ni pop-ups ni faux boutons de téléchargement et fournit de simples fichiers MP4 et MP3. Comme pour tout téléchargement, n’ouvrez que les fichiers que vous avez convertis vous-même.',
          },
          {
            q: 'Est-il légal de convertir des vidéos YouTube en MP4 ou MP3 ?',
            a: 'Cela dépend de la vidéo et de votre pays. Télécharger vos propres vidéos, des contenus du domaine public ou des vidéos sous licence Creative Commons est généralement autorisé. Télécharger de la musique ou des films protégés sans autorisation peut enfreindre le droit d’auteur et les Conditions d’utilisation de YouTube. YToMP4 est destiné à un usage personnel de contenus sur lesquels vous avez des droits.',
          },
          {
            q: 'Conservez-vous mes vidéos ou un historique ?',
            a: 'Non. Nous ne gardons aucune trace des liens que vous convertissez, et les fichiers convertis sont supprimés automatiquement de nos serveurs peu après leur téléchargement.',
          },
          {
            q: 'Pourquoi ma vidéo ne se convertit-elle pas ?',
            a: 'Les vidéos privées, réservées aux membres, soumises à une limite d’âge ou bloquées dans certains pays ne peuvent pas être converties, et les lives ne peuvent être enregistrés qu’une fois terminés. Vérifiez que le lien s’ouvre dans une fenêtre de navigation privée, puis réessayez.',
          },
          {
            q: 'Quelle différence avec les téléchargements YouTube Premium ?',
            a: 'YouTube Premium permet de regarder des vidéos hors ligne uniquement dans l’appli YouTube. YToMP4 vous donne un fichier MP4 ou MP3 standard, lisible dans n’importe quel lecteur et sur n’importe quel appareil, sans abonnement.',
          },
        ],
      },
    ],
  },

  cta: {
    h2: 'Convertissez votre première vidéo YouTube maintenant',
    text: 'Collez un lien, choisissez MP4 ou MP3 et téléchargez en quelques secondes. Gratuit et sans inscription.',
    button: 'Commencer',
  },

  footer: {
    about: 'YToMP4 est un convertisseur YouTube en MP4 et MP3 gratuit et en ligne. Non affilié à YouTube ni à Google.',
    links: [
      { href: '/privacy/', label: 'Confidentialité' },
      { href: '/terms/', label: 'Conditions' },
      { href: '/dmca/', label: 'Droits d’auteur / DMCA' },
      { href: '/contact/', label: 'Contact' },
    ],
    rights: 'Tous droits réservés.',
    createdBy: 'Créé par',
  },

  consent: {
    label: 'Consentement aux cookies',
    text: 'Nous utilisons des cookies Google Analytics pour comprendre l’utilisation du convertisseur et l’améliorer. Pas de publicité, pas de suivi entre sites.',
    privacy: 'Politique de confidentialité',
    accept: 'Accepter',
    reject: 'Refuser',
    settings: 'Paramètres des cookies',
  },

  schema: {
    appName: 'YToMP4 : convertisseur YouTube en MP4 et MP3',
    category: 'MultimediaApplication',
    features: [
      'Convertir YouTube en MP4 en 360p, 480p, 720p, 1080p, 1440p et 4K',
      'Convertir YouTube en MP3 à 128, 192, 256 et 320 kbps',
      'Compatible YouTube Shorts, YouTube Music et liens youtu.be',
      'Vidéos longues sans limite de durée',
      'Pochette et titre dans les métadonnées MP3',
      'Sans inscription ni installation',
    ],
  },
};

export default fr;
