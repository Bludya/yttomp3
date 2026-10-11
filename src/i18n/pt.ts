import type { Dict } from './en';

const pt: Dict = {
  meta: {
    title: 'Conversor de YouTube para MP4 e MP3 – Grátis em HD | YToMP4',
    description:
      'Converta YouTube para MP4 em HD, 1080p ou 4K, ou para MP3 até 320 kbps. Cole o link e baixe em segundos: grátis, online, sem cadastro e em qualquer aparelho.',
  },

  nav: {
    features: 'Recursos',
    howTo: 'Como funciona',
    formats: 'MP4 vs MP3',
    faq: 'Perguntas',
    language: 'Idioma',
    skip: 'Pular para o conteúdo',
    soon: 'em breve',
  },

  hero: {
    eyebrow: 'Conversor de YouTube online e grátis',
    h1: 'Conversor de YouTube para MP4 e MP3',
    sub: 'Baixe qualquer vídeo do YouTube em MP4 em HD, 1080p ou 4K, ou converta YouTube para MP3 com áudio de até 320 kbps. Cole o link do vídeo, escolha um formato e salve o arquivo. Sem app e sem conta.',
    inputLabel: 'URL do vídeo do YouTube',
    placeholder: 'Cole um link do YouTube, ex.: https://youtu.be/…',
    paste: 'Colar',
    clear: 'Limpar',
    formatLabel: 'Formato',
    qualityLabel: 'Qualidade',
    convert: 'Converter',
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
    soon: 'em breve',
    trust: ['Sem cadastro', 'Sem programas', 'Sem marca d’água', 'Funciona no iPhone, Android, Mac e PC'],
    preview: 'Vídeo detectado',
    playlistDetected: 'Link de playlist detectado: vamos converter o vídeo selecionado.',
    errorEmpty: 'Cole um link do YouTube primeiro.',
    errorInvalid: 'Isso não parece um link do YouTube. Copie a URL da barra de endereços ou do botão Compartilhar e tente de novo.',
    pending: 'Preparando seu {format} ({quality})…',
    comingSoon: 'O mecanismo de conversão será lançado em breve. Seu link é válido e está pronto.',
    disclaimer: 'Baixe apenas vídeos que sejam seus ou que você tenha permissão para usar.',
  },

  features: {
    h2: 'Por que usar o YToMP4 para converter vídeos do YouTube?',
    intro:
      'O YToMP4 é um baixador de YouTube que funciona no navegador: salva vídeos como arquivos MP4 e extrai o áudio em MP3. Tudo roda nos nossos servidores, então não há nada para instalar nem extensões em que confiar.',
    items: [
      {
        icon: 'hd',
        h3: 'Downloads em MP4 HD, 1080p e 4K',
        text: 'Salve vídeos do YouTube na resolução que você precisa, de 360p para arquivos leves até 1080p Full HD, 1440p e 4K (2160p). O MP4 mantém a taxa de quadros original, inclusive 60 fps em games e esportes.',
      },
      {
        icon: 'music',
        h3: 'MP3 de alta qualidade até 320 kbps',
        text: 'Transforme qualquer vídeo do YouTube em MP3 a 128, 192, 256 ou 320 kbps. Usamos a melhor faixa de áudio que o YouTube oferece, para você ter a cópia mais limpa possível de músicas, podcasts e aulas.',
      },
      {
        icon: 'clock',
        h3: 'Vídeos longos, sem limite de tempo',
        text: 'Converta vídeos longos do YouTube (podcasts de 2 horas, mixes de 3 horas e aulas completas) sem o limite de 20 minutos que muitos conversores grátis impõem.',
      },
      {
        icon: 'tag',
        h3: 'Título, miniatura e metadados incluídos',
        text: 'Os MP3 são salvos com o título do vídeo como nome do arquivo e a miniatura como capa (tags ID3), para ficarem bonitos na sua biblioteca de músicas.',
      },
      {
        icon: 'devices',
        h3: 'Funciona em qualquer aparelho',
        text: 'Use no Safari, Chrome, Firefox ou Edge no iPhone, iPad, Android, Mac, Windows e Chromebook. O conversor se adapta a qualquer tamanho de tela.',
      },
      {
        icon: 'shield',
        h3: 'Seguro, privado e grátis',
        text: 'Sem cadastro, sem programas, sem pop-ups e sem botões de download falsos. Não guardamos histórico do que você converte, e os arquivos são removidos dos nossos servidores pouco depois do download.',
      },
    ],
  },

  howTo: {
    h2: 'Como converter um vídeo do YouTube para MP4 ou MP3',
    intro: 'Converter um link do YouTube em arquivo MP4 ou MP3 leva cerca de 10 segundos e funciona igual em qualquer aparelho.',
    totalTime: 'PT1M',
    steps: [
      {
        name: 'Copie o link do YouTube',
        text: 'Abra o vídeo no YouTube e copie a URL da barra de endereços, ou toque em Compartilhar › Copiar link no app do YouTube. Funcionam vídeos normais, Shorts, YouTube Music e links curtos youtu.be.',
      },
      {
        name: 'Cole a URL no YToMP4',
        text: 'Cole o link na caixa no topo desta página. A miniatura do vídeo aparece para você confirmar que é o vídeo certo.',
      },
      {
        name: 'Escolha MP4 ou MP3 e a qualidade',
        text: 'Escolha MP4 para manter o vídeo (720p, 1080p ou 4K) ou MP3 para ficar só com o áudio (de 128 a 320 kbps).',
      },
      {
        name: 'Clique em Converter e baixe',
        text: 'Clique em Converter. Quando o arquivo estiver pronto, baixe direto no celular ou computador. Ele vai para a pasta Downloads (ou para o app Arquivos no iPhone).',
      },
    ],
  },

  formats: {
    h2: 'MP4 vs MP3: qual formato escolher?',
    intro:
      'MP4 (MPEG-4 Parte 14) é um contêiner de vídeo que guarda imagem e som. MP3 (MPEG-1 Audio Layer III) é um formato só de áudio. Escolha conforme você precise ver o vídeo ou só ouvir.',
    headers: ['', 'MP4 (vídeo)', 'MP3 (áudio)'],
    rows: [
      ['Contém', 'Vídeo + áudio (vídeo H.264, áudio AAC)', 'Só áudio'],
      ['Tamanho típico, 1 minuto', '≈ 15–50 MB (720p–1080p)', '≈ 1–2,4 MB (128–320 kbps)'],
      ['Ideal para', 'Assistir offline, editar, compartilhar trechos', 'Músicas, podcasts, audiolivros, aulas'],
      ['Toca em', 'Qualquer celular, PC, smart TV ou editor de vídeo', 'Qualquer celular, PC, som do carro ou MP3 player'],
      ['Ajuste de qualidade', 'Resolução: de 360p a 4K (2160p)', 'Taxa de bits: de 128 a 320 kbps'],
    ],
    outro:
      'O YouTube transmite muitos vídeos em WebM (VP9 ou AV1). O YToMP4 entrega um MP4 padrão com vídeo H.264 e áudio AAC porque ele toca em qualquer lugar: iPhone, QuickTime, Windows Media Player, VLC, Premiere Pro, CapCut e iMovie.',
  },

  quality: {
    h2: 'Resoluções e taxas de bits suportadas',
    intro: 'Quanto maior o ajuste, melhor a qualidade e maior o arquivo. Veja o que esperar por minuto de vídeo:',
    mp4Caption: 'Resoluções de YouTube para MP4',
    mp4Headers: ['Resolução', 'Nome', 'Tamanho aprox. / min', 'Ideal para'],
    mp4Rows: [
      ['2160p', '4K Ultra HD', '100–200 MB', 'TVs e monitores 4K, edição'],
      ['1440p', '2K / QHD', '60–100 MB', 'Monitores grandes'],
      ['1080p', 'Full HD', '30–50 MB', 'Notebooks, TVs, uso geral'],
      ['720p', 'HD', '15–25 MB', 'Celulares e tablets'],
      ['480p', 'SD', '8–12 MB', 'Economizar espaço'],
      ['360p', 'Baixa', '4–6 MB', 'Conexões lentas'],
    ],
    mp3Caption: 'Taxas de bits de YouTube para MP3',
    mp3Headers: ['Taxa de bits', 'Qualidade', 'Tamanho / min'],
    mp3Rows: [
      ['320 kbps', 'Qualidade MP3 máxima', '2,4 MB'],
      ['256 kbps', 'Muito alta', '1,9 MB'],
      ['192 kbps', 'Alta', '1,4 MB'],
      ['128 kbps', 'Padrão', '1,0 MB'],
    ],
    note: 'Um download nunca fica mais nítido que o vídeo original: se o vídeo foi enviado em 720p, um MP4 em 1080p não vai acrescentar detalhes. Escolha a opção mais alta que o vídeo oferece.',
  },

  devices: {
    h2: 'Baixe YouTube em MP4 e MP3 em qualquer aparelho',
    intro: 'O YToMP4 funciona no navegador, então os passos são quase iguais em todo lugar. Veja onde seus arquivos ficam salvos.',
    items: [
      {
        icon: 'phone',
        h3: 'iPhone e iPad',
        text: 'Abra o YToMP4 no Safari, cole o link e toque em Baixar. O iOS salva o MP4 ou MP3 no app Arquivos › Downloads. Para mandar um vídeo para Fotos, abra-o em Arquivos e toque em Compartilhar › Salvar Vídeo.',
      },
      {
        icon: 'android',
        h3: 'Android',
        text: 'Use o Chrome ou qualquer navegador. O arquivo aparece na barra de notificações e na pasta Downloads, de onde a galeria, o player de música ou o gerenciador de arquivos podem abri-lo.',
      },
      {
        icon: 'laptop',
        h3: 'Mac',
        text: 'Funciona no Safari, Chrome e Firefox no macOS. Os arquivos vão para a pasta Downloads; os MP4 abrem no QuickTime Player e os MP3 podem ser arrastados para o app Música.',
      },
      {
        icon: 'monitor',
        h3: 'PC com Windows',
        text: 'Converta YouTube para MP4 no Windows 10 e 11 pelo Edge, Chrome ou Firefox. Não precisa de programa nem instalador; os arquivos tocam no app Media Player ou no VLC.',
      },
      {
        icon: 'chromebook',
        h3: 'Chromebook',
        text: 'Como o Chromebook não roda a maioria dos baixadores para desktop, um conversor web é a opção mais fácil. Os arquivos são salvos no app Arquivos › Downloads.',
      },
    ],
  },

  useCases: {
    h2: 'O que as pessoas convertem com o YToMP4',
    items: [
      { h3: 'Música para ouvir offline', text: 'Salve músicas, sessões ao vivo e sets de DJ em MP3 para a academia, o carro ou viagens sem internet.' },
      { h3: 'Podcasts e aulas', text: 'Extraia o áudio de palestras, cursos e entrevistas longas e ouça no seu ritmo.' },
      { h3: 'Tutoriais e receitas', text: 'Guarde vídeos de tutorial em MP4 para assistir offline na cozinha, na oficina ou na sala de aula.' },
      { h3: 'Seus próprios vídeos', text: 'Faça backup dos vídeos do seu canal ou leve trechos para o CapCut, Premiere Pro ou DaVinci Resolve para editar.' },
      { h3: 'YouTube Shorts', text: 'Salve Shorts como arquivos MP4 verticais para rever ou repostar nos seus próprios canais.' },
      { h3: 'Toques e sons', text: 'Converta um trecho em MP3 e corte-o para usar como toque de celular, alarme ou som de notificação.' },
    ],
  },

  compare: {
    h2: 'Conversor online vs programas para PC vs extensões',
    intro:
      'Existem três formas de salvar vídeos do YouTube. Programas para desktop como o 4K Video Downloader ou a ferramenta de linha de comando yt-dlp são poderosos, mas precisam ser instalados. Extensões precisam de acesso a todas as páginas que você visita. Um conversor online não precisa de nada disso.',
    headers: ['', 'YToMP4 (online)', 'Programa para desktop', 'Extensão do navegador'],
    rows: [
      ['Instalação', 'Nenhuma', 'Necessária', 'Necessária'],
      ['Funciona no iPhone e Chromebook', 'Sim', 'Não', 'Raramente'],
      ['MP4 até 4K', 'Sim', 'Sim', 'Depende'],
      ['MP3 até 320 kbps', 'Sim', 'Sim', 'Depende'],
      ['Preço', 'Grátis', 'Muitas vezes pago para todos os recursos', 'Grátis / com anúncios'],
      ['Acesso ao seu aparelho', 'Nenhum', 'Acesso total ao sistema', 'Lê as páginas que você visita'],
    ],
  },

  faq: {
    h2: 'Perguntas frequentes',
    groups: [
      {
        name: 'Primeiros passos',
        items: [
          {
            q: 'O que é um conversor de YouTube para MP4?',
            a: 'Um conversor de YouTube para MP4 é uma ferramenta que pega o link de um vídeo do YouTube e o transforma em um arquivo MP4 para baixar, guardar no seu aparelho e assistir offline. O YToMP4 também converte YouTube para MP3 quando você só precisa do áudio.',
          },
          {
            q: 'Como converto um vídeo do YouTube para MP4?',
            a: 'Copie a URL do vídeo no YouTube, cole na caixa no topo desta página, selecione MP4 e uma resolução como 1080p e clique em Converter. Quando o arquivo estiver pronto, clique em Baixar.',
          },
          {
            q: 'Como converto YouTube para MP3?',
            a: 'Cole o link do YouTube, mude o formato para MP3, escolha uma taxa de bits (320 kbps dá a melhor qualidade) e clique em Converter. O áudio é salvo como arquivo MP3 com o título do vídeo e a miniatura como capa.',
          },
          {
            q: 'O YToMP4 é grátis?',
            a: 'Sim. Converter e baixar vídeos do YouTube em MP4 ou MP3 é totalmente grátis, sem limite diário, sem período de teste e sem marca d’água.',
          },
          {
            q: 'Preciso instalar algum programa ou criar uma conta?',
            a: 'Não. O YToMP4 funciona inteiramente no seu navegador. Não há app, extensão nem cadastro: é só colar um link e baixar.',
          },
          {
            q: 'Quais links do YouTube são compatíveis?',
            a: 'Links normais youtube.com/watch, links curtos youtu.be, YouTube Shorts, YouTube Music, links mobile m.youtube.com, vídeos incorporados e gravações de lives já encerradas. Links com playlist convertem o vídeo selecionado.',
          },
        ],
      },
      {
        name: 'Formatos e qualidade',
        items: [
          {
            q: 'Posso baixar vídeos do YouTube em 1080p ou 4K?',
            a: 'Sim. Se o vídeo foi enviado em Full HD ou mais, você pode baixá-lo como MP4 em 1080p, 1440p ou 4K (2160p), com a taxa de quadros original, inclusive 60 fps.',
          },
          {
            q: 'Qual qualidade de MP3 escolher: 128 kbps ou 320 kbps?',
            a: 'Escolha 320 kbps para o melhor som e a menor compressão extra; é a maior taxa de bits que o formato MP3 suporta. Escolha 128 kbps se quiser arquivos pequenos para fala, como podcasts e aulas. Lembre que um MP3 não pode soar melhor que o áudio transmitido pelo YouTube, então 320 kbps preserva a qualidade em vez de aumentá-la.',
          },
          {
            q: 'O arquivo MP4 tem som?',
            a: 'Sim. O YouTube guarda separadamente o vídeo em alta resolução e o áudio; o YToMP4 junta os dois em um único MP4 com vídeo H.264 e áudio AAC, para o arquivo tocar com som em qualquer lugar.',
          },
          {
            q: 'Posso converter vídeos do YouTube com mais de 2 horas?',
            a: 'Sim. Não há limite de 20 minutos nem de 1 hora, então você pode converter podcasts, audiolivros, shows e aulas completos de 2, 3 ou até 10 horas. Vídeos mais longos só demoram um pouco mais para processar.',
          },
          {
            q: 'Posso baixar uma playlist inteira do YouTube em MP3 ou MP4?',
            a: 'Cole o link de uma playlist para converter o vídeo selecionado. A conversão de playlists inteiras, salvando todos os vídeos de uma vez, está nos nossos planos.',
          },
          {
            q: 'Posso converter só uma parte de um vídeo?',
            a: 'O corte está nos nossos planos: você vai poder definir início e fim para baixar só um trecho ou uma música de um mix longo, em MP4 ou MP3.',
          },
          {
            q: 'Posso converter YouTube Shorts para MP4?',
            a: 'Sim. Cole o link do Short (youtube.com/shorts/…) e o vídeo é salvo como MP4 vertical, ou como MP3 se você só quiser o som.',
          },
        ],
      },
      {
        name: 'Aparelhos',
        items: [
          {
            q: 'Como baixo vídeos do YouTube em MP4 no iPhone?',
            a: 'Abra ytomp4.com no Safari, cole o link do YouTube, escolha MP4, toque em Converter e depois em Baixar. O vídeo fica no app Arquivos, em Downloads; abra-o e toque em Compartilhar › Salvar Vídeo para enviá-lo para Fotos.',
          },
          {
            q: 'O YToMP4 funciona no Android?',
            a: 'Sim. Use o Chrome ou qualquer outro navegador do Android. Os MP4 e MP3 baixados ficam na pasta Downloads e aparecem na galeria ou no app de música.',
          },
          {
            q: 'Posso converter YouTube para MP4 no Mac ou no PC com Windows?',
            a: 'Sim. O YToMP4 funciona no Safari, Chrome, Firefox e Edge no macOS, Windows 10 e Windows 11, então você não precisa de um programa separado para baixar YouTube no Mac ou PC.',
          },
          {
            q: 'Funciona no Chromebook?',
            a: 'Sim. Como roda no navegador, o YToMP4 é uma das formas mais fáceis de converter YouTube para MP4 ou MP3 no Chromebook. Os arquivos ficam na pasta Downloads do app Arquivos.',
          },
          {
            q: 'Onde ficam os arquivos baixados?',
            a: 'Os arquivos são salvos no local de download padrão do navegador: normalmente a pasta Downloads no computador e no Android, e Arquivos › Downloads no iPhone e iPad.',
          },
        ],
      },
      {
        name: 'Segurança e legalidade',
        items: [
          {
            q: 'O YToMP4 é seguro?',
            a: 'Sim. O YToMP4 não pede para instalar nada, não usa pop-ups nem botões de download falsos e entrega arquivos MP4 e MP3 comuns. Como em qualquer download, abra só os arquivos que você mesmo converteu.',
          },
          {
            q: 'É legal converter vídeos do YouTube para MP4 ou MP3?',
            a: 'Depende do vídeo e do país onde você mora. Baixar seus próprios vídeos, conteúdo em domínio público ou vídeos com licença Creative Commons geralmente é permitido. Baixar músicas ou filmes protegidos por direitos autorais sem permissão pode violar a lei e os Termos de Serviço do YouTube. O YToMP4 é destinado ao uso pessoal de conteúdo sobre o qual você tem direitos.',
          },
          {
            q: 'Vocês guardam meus vídeos ou um histórico?',
            a: 'Não. Não registramos os links que você converte, e os arquivos convertidos são apagados automaticamente dos nossos servidores pouco depois do download.',
          },
          {
            q: 'Por que meu vídeo não converte?',
            a: 'Vídeos privados, exclusivos para membros, com restrição de idade ou bloqueados por região não podem ser convertidos, e lives só podem ser salvas depois que terminam. Verifique se o link abre em uma janela anônima do navegador e tente de novo.',
          },
          {
            q: 'Qual a diferença para os downloads do YouTube Premium?',
            a: 'O YouTube Premium só permite assistir offline dentro do app do YouTube. O YToMP4 entrega um arquivo MP4 ou MP3 padrão que toca em qualquer player e aparelho, sem assinatura.',
          },
        ],
      },
    ],
  },

  cta: {
    h2: 'Converta seu primeiro vídeo do YouTube agora',
    text: 'Cole um link, escolha MP4 ou MP3 e baixe em segundos. Grátis e sem cadastro.',
    button: 'Começar a converter',
  },

  footer: {
    about: 'O YToMP4 é um conversor online e gratuito de YouTube para MP4 e MP3. Não é afiliado ao YouTube nem ao Google.',
    links: [
      { href: '/privacy/', label: 'Privacidade' },
      { href: '/terms/', label: 'Termos' },
      { href: '/dmca/', label: 'Direitos autorais / DMCA' },
      { href: '/contact/', label: 'Contato' },
    ],
    rights: 'Todos os direitos reservados.',
    createdBy: 'Criado por',
  },

  consent: {
    label: 'Consentimento de cookies',
    text: 'Usamos cookies do Google Analytics para entender como o conversor é usado e melhorá-lo. Sem anúncios e sem rastreamento entre sites.',
    privacy: 'Política de privacidade',
    accept: 'Aceitar',
    reject: 'Recusar',
    settings: 'Configurações de cookies',
  },

  schema: {
    appName: 'YToMP4: conversor de YouTube para MP4 e MP3',
    category: 'MultimediaApplication',
    features: [
      'Converta YouTube para MP4 em 360p, 480p, 720p, 1080p, 1440p e 4K',
      'Converta YouTube para MP3 a 128, 192, 256 e 320 kbps',
      'Compatível com YouTube Shorts, YouTube Music e links youtu.be',
      'Vídeos longos sem limite de tempo',
      'Capa e título nos metadados do MP3',
      'Sem cadastro e sem instalação',
    ],
  },
};

export default pt;
