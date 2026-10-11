// English page content. Every other language file must export an object of
// the same shape (typed as `Dict`), so translating = copying this file and
// translating the strings. Keep plain text: FAQ answers are reused verbatim
// in the FAQPage JSON-LD.
const en = {
  meta: {
    title: 'YouTube to MP4 & MP3 Converter – Free HD Download | YToMP4',
    description:
      'Convert YouTube to MP4 in HD, 1080p or 4K, or to MP3 audio up to 320kbps. Paste a link and download in seconds: free, online, no signup, any device.',
  },

  nav: {
    features: 'Features',
    howTo: 'How it works',
    formats: 'MP4 vs MP3',
    faq: 'FAQ',
    language: 'Language',
    soon: 'soon',
  },

  hero: {
    eyebrow: 'Free online YouTube converter',
    h1: 'YouTube to MP4 & MP3 Converter',
    sub: 'Download any YouTube video as an MP4 in HD, 1080p or 4K, or convert YouTube to MP3 audio at up to 320kbps. Paste the video link, choose a format and save the file. No app, no account.',
    inputLabel: 'YouTube video URL',
    placeholder: 'Paste a YouTube link, e.g. https://youtu.be/…',
    paste: 'Paste',
    clear: 'Clear',
    formatLabel: 'Format',
    qualityLabel: 'Quality',
    convert: 'Convert',
    // Only `available` options can be selected; the rest show `soon`.
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
    soon: 'soon',
    trust: ['No signup', 'No software', 'No watermark', 'Works on iPhone, Android, Mac & PC'],
    preview: 'Video detected',
    playlistDetected: 'Playlist link detected: we will convert the selected video.',
    errorEmpty: 'Paste a YouTube link first.',
    errorInvalid: 'That does not look like a YouTube link. Copy the URL from the address bar or the Share button and try again.',
    pending: 'Preparing your {format} ({quality})…',
    comingSoon: 'The conversion engine is launching soon. Your link is valid and ready to go.',
    disclaimer: 'Only download videos you own or have permission to use.',
  },

  features: {
    h2: 'Why use YToMP4 to convert YouTube videos?',
    intro:
      'YToMP4 is a browser-based YouTube downloader that saves videos as MP4 files and extracts audio as MP3. It runs on our servers, so there is nothing to install and no extension to trust.',
    items: [
      {
        icon: 'hd',
        h3: 'HD, 1080p and 4K MP4 downloads',
        text: 'Save YouTube videos in the resolution you need, from 360p for small files up to 1080p Full HD, 1440p and 4K (2160p). The MP4 keeps the original frame rate, including 60fps gameplay and sports.',
      },
      {
        icon: 'music',
        h3: 'High-quality MP3 up to 320kbps',
        text: 'Turn any YouTube video into an MP3 at 128, 192, 256 or 320kbps. We take the best audio stream YouTube offers, so you get the cleanest possible copy of songs, podcasts and lectures.',
      },
      {
        icon: 'clock',
        h3: 'Long videos, no time limit',
        text: 'Convert long YouTube videos (2-hour podcasts, 3-hour mixes and full lectures) without the 20-minute caps many free converters impose.',
      },
      {
        icon: 'tag',
        h3: 'Title, thumbnail and metadata included',
        text: 'MP3 files are saved with the video title as the file name and the thumbnail embedded as cover art (ID3 tags), so they look right in your music library.',
      },
      {
        icon: 'devices',
        h3: 'Works on every device',
        text: 'Use it in Safari, Chrome, Firefox or Edge on iPhone, iPad, Android, Mac, Windows and Chromebook. The converter adapts to any screen size.',
      },
      {
        icon: 'shield',
        h3: 'Safe, private and free',
        text: 'No signup, no software, no pop-up redirects and no fake download buttons. We do not keep a history of what you convert, and files are removed from our servers shortly after download.',
      },
    ],
  },

  howTo: {
    h2: 'How to convert a YouTube video to MP4 or MP3',
    intro: 'Converting a YouTube link to an MP4 or MP3 file takes about 10 seconds and works the same on every device.',
    totalTime: 'PT1M',
    steps: [
      {
        name: 'Copy the YouTube link',
        text: 'Open the video on YouTube and copy its URL from the address bar, or tap Share › Copy link in the YouTube app. Regular videos, Shorts, YouTube Music and youtu.be short links all work.',
      },
      {
        name: 'Paste the URL into YToMP4',
        text: 'Paste the link into the box at the top of this page. The video thumbnail appears so you can confirm it is the right one.',
      },
      {
        name: 'Choose MP4 or MP3 and the quality',
        text: 'Pick MP4 to keep the video (720p, 1080p or 4K) or MP3 to keep only the audio (128 to 320kbps).',
      },
      {
        name: 'Click Convert and download',
        text: 'Press Convert. When the file is ready, download it straight to your phone or computer. It lands in your Downloads folder (or the Files app on iPhone).',
      },
    ],
  },

  formats: {
    h2: 'MP4 vs MP3: which format should you choose?',
    intro:
      'MP4 (MPEG-4 Part 14) is a video container that holds both picture and sound. MP3 (MPEG-1 Audio Layer III) is an audio-only format. Choose based on whether you need to see the video or only hear it.',
    headers: ['', 'MP4 (video)', 'MP3 (audio)'],
    rows: [
      ['Contains', 'Video + audio (H.264 video, AAC audio)', 'Audio only'],
      ['Typical size, 1 minute', '≈ 15–50 MB (720p–1080p)', '≈ 1–2.4 MB (128–320kbps)'],
      ['Best for', 'Watching offline, editing, sharing clips', 'Music, podcasts, audiobooks, lectures'],
      ['Plays on', 'Any phone, PC, smart TV, video editor', 'Any phone, PC, car stereo, MP3 player'],
      ['Quality setting', 'Resolution: 360p to 4K (2160p)', 'Bitrate: 128 to 320kbps'],
    ],
    outro:
      'YouTube streams many videos as WebM (VP9 or AV1). YToMP4 delivers a standard MP4 with H.264 video and AAC audio because it plays everywhere: iPhone, QuickTime, Windows Media Player, VLC, Premiere Pro, CapCut and iMovie.',
  },

  quality: {
    h2: 'Supported resolutions and bitrates',
    intro: 'Higher settings mean better quality and bigger files. Here is what to expect per minute of video:',
    mp4Caption: 'YouTube to MP4 resolutions',
    mp4Headers: ['Resolution', 'Name', 'Approx. size / min', 'Good for'],
    mp4Rows: [
      ['2160p', '4K Ultra HD', '100–200 MB', '4K TVs and monitors, editing'],
      ['1440p', '2K / QHD', '60–100 MB', 'Large monitors'],
      ['1080p', 'Full HD', '30–50 MB', 'Laptops, TVs, most uses'],
      ['720p', 'HD', '15–25 MB', 'Phones and tablets'],
      ['480p', 'SD', '8–12 MB', 'Saving storage'],
      ['360p', 'Low', '4–6 MB', 'Slow connections'],
    ],
    mp3Caption: 'YouTube to MP3 bitrates',
    mp3Headers: ['Bitrate', 'Quality', 'Size / min'],
    mp3Rows: [
      ['320 kbps', 'Highest MP3 quality', '2.4 MB'],
      ['256 kbps', 'Very high', '1.9 MB'],
      ['192 kbps', 'High', '1.4 MB'],
      ['128 kbps', 'Standard', '1.0 MB'],
    ],
    note: 'A download can never be sharper than the original upload: if a video was uploaded in 720p, a 1080p MP4 will not add detail. Pick the highest option the video offers.',
  },

  devices: {
    h2: 'Download YouTube to MP4 and MP3 on any device',
    intro: 'YToMP4 runs in the browser, so the steps are almost the same everywhere. Here is where your files end up.',
    items: [
      {
        icon: 'phone',
        h3: 'iPhone and iPad',
        text: 'Open YToMP4 in Safari, paste the link and tap Download. iOS saves the MP4 or MP3 to the Files app › Downloads. To move a video to Photos, open it in Files, tap Share › Save Video.',
      },
      {
        icon: 'android',
        h3: 'Android',
        text: 'Use Chrome or any browser. The file appears in your notification bar and in the Downloads folder, where your gallery, music player or file manager can open it.',
      },
      {
        icon: 'laptop',
        h3: 'Mac',
        text: 'Works in Safari, Chrome and Firefox on macOS. Files go to the Downloads folder; MP4s open in QuickTime Player and MP3s can be dragged into the Music app.',
      },
      {
        icon: 'monitor',
        h3: 'Windows PC',
        text: 'Convert YouTube to MP4 on Windows 10 and 11 in Edge, Chrome or Firefox. No desktop program or installer needed; files play in the Media Player app or VLC.',
      },
      {
        icon: 'chromebook',
        h3: 'Chromebook',
        text: 'Since Chromebooks cannot run most desktop downloaders, a web converter is the easiest option. Files are saved to the Files app › Downloads.',
      },
    ],
  },

  useCases: {
    h2: 'What people convert with YToMP4',
    items: [
      { h3: 'Music for offline listening', text: 'Save songs, live sessions and DJ mixes as MP3 for the gym, the car or flights without data.' },
      { h3: 'Podcasts and lectures', text: 'Extract the audio from long talks, courses and interviews and listen at your own pace.' },
      { h3: 'Tutorials and recipes', text: 'Keep how-to videos as MP4 so they play offline in the kitchen, workshop or classroom.' },
      { h3: 'Your own uploads', text: 'Back up videos from your channel, or pull clips into CapCut, Premiere Pro or DaVinci Resolve for editing.' },
      { h3: 'YouTube Shorts', text: 'Save Shorts as vertical MP4 files to rewatch or repost on your own channels.' },
      { h3: 'Ringtones and sounds', text: 'Convert a clip to MP3, then trim it into a ringtone, alarm or notification sound.' },
    ],
  },

  compare: {
    h2: 'Online converter vs desktop apps vs browser extensions',
    intro:
      'There are three ways to save YouTube videos. Desktop apps like 4K Video Downloader or the command-line tool yt-dlp are powerful but must be installed. Extensions need access to every page you visit. An online converter needs neither.',
    headers: ['', 'YToMP4 (online)', 'Desktop software', 'Browser extension'],
    rows: [
      ['Installation', 'None', 'Required', 'Required'],
      ['Works on iPhone & Chromebook', 'Yes', 'No', 'Rarely'],
      ['MP4 up to 4K', 'Yes', 'Yes', 'Varies'],
      ['MP3 up to 320kbps', 'Yes', 'Yes', 'Varies'],
      ['Price', 'Free', 'Often paid for full features', 'Free / ads'],
      ['Access to your device', 'None', 'Full system access', 'Reads pages you visit'],
    ],
  },

  faq: {
    h2: 'Frequently asked questions',
    groups: [
      {
        name: 'Getting started',
        items: [
          {
            q: 'What is a YouTube to MP4 converter?',
            a: 'A YouTube to MP4 converter is a tool that takes a YouTube video link and turns it into a downloadable MP4 file you can keep on your device and watch offline. YToMP4 also converts YouTube to MP3 when you only need the audio.',
          },
          {
            q: 'How do I convert a YouTube video to MP4?',
            a: 'Copy the video URL from YouTube, paste it into the box at the top of this page, select MP4 and a resolution such as 1080p, then click Convert. When the file is ready, click Download.',
          },
          {
            q: 'How do I convert YouTube to MP3?',
            a: 'Paste the YouTube link, switch the format to MP3, choose a bitrate (320kbps gives the highest quality) and click Convert. The audio is saved as an MP3 file with the video title and thumbnail as cover art.',
          },
          {
            q: 'Is YToMP4 free?',
            a: 'Yes. Converting and downloading YouTube videos to MP4 or MP3 is completely free, with no daily limit, no trial and no watermark.',
          },
          {
            q: 'Do I need to install software or create an account?',
            a: 'No. YToMP4 works entirely in your web browser. There is no app, extension or registration: just paste a link and download.',
          },
          {
            q: 'Which YouTube links are supported?',
            a: 'Standard youtube.com/watch links, youtu.be short links, YouTube Shorts, YouTube Music, mobile m.youtube.com links, embedded videos and replays of finished live streams. Links with a playlist parameter convert the selected video.',
          },
        ],
      },
      {
        name: 'Formats & quality',
        items: [
          {
            q: 'Can I download YouTube videos in 1080p or 4K?',
            a: 'Yes. If the video was uploaded in Full HD or higher you can download it as a 1080p, 1440p or 4K (2160p) MP4, with the original frame rate including 60fps.',
          },
          {
            q: 'Which MP3 quality should I pick: 128kbps or 320kbps?',
            a: 'Choose 320kbps for the best sound and the least extra compression; it is the highest bitrate the MP3 format supports. Choose 128kbps if you want small files for speech, such as podcasts and lectures. Note that an MP3 cannot sound better than the audio YouTube streams, so 320kbps preserves quality rather than adding it.',
          },
          {
            q: 'Does the MP4 file include sound?',
            a: 'Yes. YouTube stores high-resolution video and audio separately; YToMP4 merges them into a single MP4 with H.264 video and AAC audio, so the file plays with sound everywhere.',
          },
          {
            q: 'Can I convert long YouTube videos over 2 hours?',
            a: 'Yes. There is no 20-minute or 1-hour cap, so you can convert full podcasts, audiobooks, concerts and lectures that run 2, 3 or even 10 hours. Longer videos simply take a little more time to process.',
          },
          {
            q: 'Can I download a whole YouTube playlist as MP3 or MP4?',
            a: 'Paste a playlist link to convert the selected video. Full playlist conversion, where every video is saved in one go, is on our roadmap.',
          },
          {
            q: 'Can I convert only part of a video?',
            a: 'Trimming is on our roadmap: you will be able to set a start and end time to download just a clip or a single song from a long mix, as MP4 or MP3.',
          },
          {
            q: 'Can I convert YouTube Shorts to MP4?',
            a: 'Yes. Paste the Shorts link (youtube.com/shorts/…) and the video is saved as a vertical MP4, or as an MP3 if you only want the sound.',
          },
        ],
      },
      {
        name: 'Devices',
        items: [
          {
            q: 'How do I download YouTube videos to MP4 on iPhone?',
            a: 'Open ytomp4.com in Safari, paste the YouTube link, choose MP4 and tap Convert, then Download. The video is saved in the Files app under Downloads; open it and tap Share › Save Video to add it to Photos.',
          },
          {
            q: 'Does YToMP4 work on Android?',
            a: 'Yes. Use Chrome or any other Android browser. Downloaded MP4 and MP3 files are saved in the Downloads folder and appear in your gallery or music app.',
          },
          {
            q: 'Can I convert YouTube to MP4 on a Mac or Windows PC?',
            a: 'Yes. YToMP4 works in Safari, Chrome, Firefox and Edge on macOS, Windows 10 and Windows 11, so you do not need a separate YouTube downloader program for Mac or PC.',
          },
          {
            q: 'Does it work on a Chromebook?',
            a: 'Yes. Because it runs in the browser, YToMP4 is one of the easiest ways to convert YouTube to MP4 or MP3 on a Chromebook. Files are saved to the Downloads folder in the Files app.',
          },
          {
            q: 'Where do my downloaded files go?',
            a: 'Files are saved to your browser’s default download location: usually the Downloads folder on computers and Android, and Files › Downloads on iPhone and iPad.',
          },
        ],
      },
      {
        name: 'Safety & legality',
        items: [
          {
            q: 'Is YToMP4 safe to use?',
            a: 'Yes. YToMP4 does not ask you to install anything, does not use pop-up redirects or fake download buttons, and delivers plain MP4 and MP3 files. As with any download, only open files you converted yourself.',
          },
          {
            q: 'Is it legal to convert YouTube videos to MP4 or MP3?',
            a: 'It depends on the video and where you live. Downloading your own uploads, public-domain content or videos with a Creative Commons licence is generally fine. Downloading copyrighted music or films without permission may break copyright law and YouTube’s Terms of Service. YToMP4 is intended for personal use of content you have the rights to.',
          },
          {
            q: 'Do you store my videos or keep a history?',
            a: 'No. We do not keep a record of the links you convert, and converted files are deleted from our servers automatically shortly after you download them.',
          },
          {
            q: 'Why is my video not converting?',
            a: 'Private, members-only, age-restricted and region-blocked videos cannot be converted, and live streams can only be saved after they end. Check that the link opens in a private browser window, then try again.',
          },
          {
            q: 'How is this different from YouTube Premium downloads?',
            a: 'YouTube Premium lets you watch videos offline only inside the YouTube app. YToMP4 gives you a standard MP4 or MP3 file that plays in any player, on any device, without a subscription.',
          },
        ],
      },
    ],
  },

  cta: {
    h2: 'Convert your first YouTube video now',
    text: 'Paste a link, choose MP4 or MP3 and download in seconds. Free, with no signup.',
    button: 'Start converting',
  },

  footer: {
    about: 'YToMP4 is a free online YouTube to MP4 and MP3 converter. Not affiliated with YouTube or Google.',
    links: [
      { href: '/privacy/', label: 'Privacy' },
      { href: '/terms/', label: 'Terms' },
      { href: '/dmca/', label: 'Copyright / DMCA' },
      { href: '/contact/', label: 'Contact' },
    ],
    rights: 'All rights reserved.',
    createdBy: 'Created by',
  },

  schema: {
    appName: 'YToMP4: YouTube to MP4 & MP3 Converter',
    category: 'MultimediaApplication',
    features: [
      'Convert YouTube to MP4 in 360p, 480p, 720p, 1080p, 1440p and 4K',
      'Convert YouTube to MP3 at 128, 192, 256 and 320 kbps',
      'Supports YouTube Shorts, YouTube Music and youtu.be links',
      'Long videos with no time limit',
      'MP3 cover art and title metadata',
      'No signup or installation',
    ],
  },
};

export type Dict = typeof en;
export default en;
