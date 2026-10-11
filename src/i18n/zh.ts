import type { Dict } from './en';

const zh: Dict = {
  meta: {
    title: 'YouTube 转 MP4 和 MP3 转换器 – 免费高清下载 | YToMP4',
    description:
      '将 YouTube 视频转换为 HD、1080p 或 4K 的 MP4，或最高 320 kbps 的 MP3。粘贴链接，几秒即可下载：免费、在线、无需注册，任何设备都能用。',
  },

  nav: {
    features: '功能',
    howTo: '使用方法',
    formats: 'MP4 与 MP3',
    faq: '常见问题',
    language: '语言',
    skip: '跳到主要内容',
    soon: '即将推出',
  },

  hero: {
    eyebrow: '免费在线 YouTube 转换器',
    h1: 'YouTube 转 MP4 和 MP3 转换器',
    sub: '将任意 YouTube 视频下载为 HD、1080p 或 4K 的 MP4，或把 YouTube 转换成最高 320 kbps 的 MP3 音频。粘贴视频链接，选择格式，保存文件即可。无需应用，无需账号。',
    inputLabel: 'YouTube 视频链接',
    placeholder: '粘贴 YouTube 链接，例如 https://youtu.be/…',
    paste: '粘贴',
    clear: '清除',
    formatLabel: '格式',
    qualityLabel: '画质',
    convert: '转换',
    mp4Qualities: [
      { value: '360', label: '360p', available: true },
      { value: '480', label: '480p' },
      { value: '720', label: '720p 高清' },
      { value: '1080', label: '1080p 全高清' },
      { value: '1440', label: '1440p (2K)' },
      { value: '2160', label: '4K (2160p)' },
    ],
    mp3Qualities: [
      { value: '128', label: '128 kbps', available: true },
      { value: '192', label: '192 kbps' },
      { value: '256', label: '256 kbps' },
      { value: '320', label: '320 kbps' },
    ],
    soon: '即将推出',
    trust: ['无需注册', '无需安装软件', '无水印', '支持 iPhone、Android、Mac 和 PC'],
    preview: '已识别视频',
    playlistDetected: '检测到播放列表链接：我们将转换当前选中的视频。',
    errorEmpty: '请先粘贴 YouTube 链接。',
    errorInvalid: '这似乎不是 YouTube 链接。请从地址栏或“分享”按钮复制链接后重试。',
    pending: '正在准备您的 {format}（{quality}）…',
    comingSoon: '转换引擎即将上线。您的链接有效，已准备就绪。',
    disclaimer: '请仅下载您拥有或已获授权使用的视频。',
  },

  features: {
    h2: '为什么用 YToMP4 转换 YouTube 视频？',
    intro:
      'YToMP4 是一款在浏览器中使用的 YouTube 下载工具，可将视频保存为 MP4 文件，并将音频提取为 MP3。所有处理都在我们的服务器上完成，无需安装任何软件，也无需信任任何浏览器扩展。',
    items: [
      {
        icon: 'hd',
        h3: '高清、1080p 和 4K MP4 下载',
        text: '按需选择分辨率保存 YouTube 视频：从体积小巧的 360p，到 1080p 全高清、1440p 和 4K (2160p)。MP4 保留原始帧率，包括游戏和体育视频的 60fps。',
      },
      {
        icon: 'music',
        h3: '最高 320 kbps 的高品质 MP3',
        text: '将任意 YouTube 视频转换为 128、192、256 或 320 kbps 的 MP3。我们使用 YouTube 提供的最佳音轨，让歌曲、播客和讲座的音质尽可能纯净。',
      },
      {
        icon: 'clock',
        h3: '支持长视频，没有时长限制',
        text: '转换 2 小时的播客、3 小时的混音和完整的课程等长视频，不受许多免费转换器 20 分钟时长上限的限制。',
      },
      {
        icon: 'tag',
        h3: '自带标题、封面和元数据',
        text: 'MP3 文件以视频标题命名，并将缩略图嵌入为专辑封面（ID3 标签），在您的音乐库中整齐美观。',
      },
      {
        icon: 'devices',
        h3: '所有设备都能用',
        text: '可在 iPhone、iPad、Android、Mac、Windows 和 Chromebook 上的 Safari、Chrome、Firefox 或 Edge 中使用。转换器自动适配各种屏幕尺寸。',
      },
      {
        icon: 'shield',
        h3: '安全、私密、免费',
        text: '无需注册，无需安装软件，没有弹窗跳转，也没有虚假下载按钮。我们不保存您的转换记录，文件在下载后不久即从服务器删除。',
      },
    ],
  },

  howTo: {
    h2: '如何将 YouTube 视频转换为 MP4 或 MP3',
    intro: '把 YouTube 链接转换成 MP4 或 MP3 文件只需约 10 秒，在任何设备上的操作都一样。',
    totalTime: 'PT1M',
    steps: [
      {
        name: '复制 YouTube 链接',
        text: '在 YouTube 上打开视频，从地址栏复制链接，或在 YouTube 应用中点按“分享” › “复制链接”。普通视频、Shorts、YouTube Music 和 youtu.be 短链接均可使用。',
      },
      {
        name: '将链接粘贴到 YToMP4',
        text: '把链接粘贴到本页顶部的输入框中。视频缩略图会显示出来，方便您确认是否正确。',
      },
      {
        name: '选择 MP4 或 MP3 及画质',
        text: '选择 MP4 保留视频（720p、1080p 或 4K），或选择 MP3 只保留音频（128 至 320 kbps）。',
      },
      {
        name: '点击“转换”并下载',
        text: '点击“转换”。文件准备好后，即可直接下载到手机或电脑，保存在“下载”文件夹中（iPhone 上为“文件”应用）。',
      },
    ],
  },

  formats: {
    h2: 'MP4 与 MP3：应该选择哪种格式？',
    intro:
      'MP4（MPEG-4 第 14 部分）是同时包含画面和声音的视频容器格式。MP3（MPEG-1 Audio Layer III）是纯音频格式。根据您是需要观看视频还是只需收听来选择。',
    headers: ['', 'MP4（视频）', 'MP3（音频）'],
    rows: [
      ['包含内容', '视频 + 音频（H.264 视频，AAC 音频）', '仅音频'],
      ['每分钟典型大小', '≈ 15–50 MB（720p–1080p）', '≈ 1–2.4 MB（128–320 kbps）'],
      ['适用场景', '离线观看、剪辑、分享片段', '音乐、播客、有声书、讲座'],
      ['播放设备', '任意手机、电脑、智能电视、视频编辑软件', '任意手机、电脑、车载音响、MP3 播放器'],
      ['画质 / 音质设置', '分辨率：360p 至 4K (2160p)', '比特率：128 至 320 kbps'],
    ],
    outro:
      'YouTube 上的许多视频以 WebM（VP9 或 AV1）格式传输。YToMP4 提供采用 H.264 视频和 AAC 音频的标准 MP4，因为它几乎在任何地方都能播放：iPhone、QuickTime、Windows Media Player、VLC、Premiere Pro、CapCut 和 iMovie。',
  },

  quality: {
    h2: '支持的分辨率和比特率',
    intro: '设置越高，质量越好，文件也越大。以下是每分钟视频的大致情况：',
    mp4Caption: 'YouTube 转 MP4 分辨率',
    mp4Headers: ['分辨率', '名称', '每分钟大约大小', '适用于'],
    mp4Rows: [
      ['2160p', '4K 超高清', '100–200 MB', '4K 电视和显示器、剪辑'],
      ['1440p', '2K / QHD', '60–100 MB', '大尺寸显示器'],
      ['1080p', '全高清', '30–50 MB', '笔记本、电视、大多数场景'],
      ['720p', '高清', '15–25 MB', '手机和平板'],
      ['480p', '标清', '8–12 MB', '节省存储空间'],
      ['360p', '低', '4–6 MB', '网速较慢时'],
    ],
    mp3Caption: 'YouTube 转 MP3 比特率',
    mp3Headers: ['比特率', '音质', '每分钟大小'],
    mp3Rows: [
      ['320 kbps', 'MP3 最高音质', '2.4 MB'],
      ['256 kbps', '很高', '1.9 MB'],
      ['192 kbps', '高', '1.4 MB'],
      ['128 kbps', '标准', '1.0 MB'],
    ],
    note: '下载的文件不可能比原始上传更清晰：如果视频以 720p 上传，1080p 的 MP4 并不会增加细节。请选择该视频提供的最高选项。',
  },

  devices: {
    h2: '在任何设备上将 YouTube 下载为 MP4 和 MP3',
    intro: 'YToMP4 在浏览器中运行，因此各设备上的步骤几乎相同。以下是文件的保存位置。',
    items: [
      {
        icon: 'phone',
        h3: 'iPhone 和 iPad',
        text: '在 Safari 中打开 YToMP4，粘贴链接并点按“下载”。iOS 会将 MP4 或 MP3 保存到“文件”应用 › “下载”。如需将视频存入“照片”，请在“文件”中打开它，然后点按“分享” › “存储视频”。',
      },
      {
        icon: 'android',
        h3: 'Android',
        text: '使用 Chrome 或任意浏览器。文件会出现在通知栏和“下载”文件夹中，可用相册、音乐播放器或文件管理器打开。',
      },
      {
        icon: 'laptop',
        h3: 'Mac',
        text: '支持 macOS 上的 Safari、Chrome 和 Firefox。文件保存在“下载”文件夹；MP4 可用 QuickTime Player 打开，MP3 可拖入“音乐”应用。',
      },
      {
        icon: 'monitor',
        h3: 'Windows 电脑',
        text: '在 Windows 10 和 11 上使用 Edge、Chrome 或 Firefox 将 YouTube 转换为 MP4。无需安装桌面程序；文件可用“媒体播放器”应用或 VLC 播放。',
      },
      {
        icon: 'chromebook',
        h3: 'Chromebook',
        text: 'Chromebook 无法运行大多数桌面下载工具，因此网页转换器是最简单的选择。文件保存在“文件”应用 › “下载”中。',
      },
    ],
  },

  useCases: {
    h2: '大家用 YToMP4 转换什么',
    items: [
      { h3: '离线听音乐', text: '将歌曲、现场演出和 DJ 混音保存为 MP3，健身、开车或乘飞机时无需流量也能听。' },
      { h3: '播客和讲座', text: '从长篇演讲、课程和访谈中提取音频，按自己的节奏收听。' },
      { h3: '教程和食谱', text: '将教程视频保存为 MP4，在厨房、工作间或教室里离线观看。' },
      { h3: '您自己的视频', text: '备份您频道中的视频，或将片段导入 CapCut、Premiere Pro 或 DaVinci Resolve 进行剪辑。' },
      { h3: 'YouTube Shorts', text: '将 Shorts 保存为竖屏 MP4 文件，方便重温或在您自己的频道重新发布。' },
      { h3: '铃声和音效', text: '将片段转换为 MP3，再剪成手机铃声、闹钟或通知提示音。' },
    ],
  },

  compare: {
    h2: '在线转换器、桌面软件还是浏览器扩展？',
    intro:
      '保存 YouTube 视频有三种方式。4K Video Downloader 等桌面软件或命令行工具 yt-dlp 功能强大，但必须安装。浏览器扩展需要访问您浏览的每个网页。在线转换器两者都不需要。',
    headers: ['', 'YToMP4（在线）', '桌面软件', '浏览器扩展'],
    rows: [
      ['安装', '无需', '需要', '需要'],
      ['支持 iPhone 和 Chromebook', '是', '否', '很少'],
      ['MP4 最高 4K', '是', '是', '视情况而定'],
      ['MP3 最高 320 kbps', '是', '是', '视情况而定'],
      ['价格', '免费', '完整功能通常需付费', '免费 / 含广告'],
      ['对设备的访问权限', '无', '完整系统权限', '读取您访问的网页'],
    ],
  },

  faq: {
    h2: '常见问题',
    groups: [
      {
        name: '入门',
        items: [
          {
            q: '什么是 YouTube 转 MP4 转换器？',
            a: 'YouTube 转 MP4 转换器是一种工具，可以把 YouTube 视频链接转换为可下载的 MP4 文件，保存在您的设备上离线观看。如果您只需要音频，YToMP4 也能将 YouTube 转换为 MP3。',
          },
          {
            q: '如何将 YouTube 视频转换为 MP4？',
            a: '从 YouTube 复制视频链接，粘贴到本页顶部的输入框中，选择 MP4 和分辨率（例如 1080p），然后点击“转换”。文件准备好后，点击“下载”。',
          },
          {
            q: '如何将 YouTube 转换为 MP3？',
            a: '粘贴 YouTube 链接，将格式切换为 MP3，选择比特率（320 kbps 音质最高），然后点击“转换”。音频会保存为 MP3 文件，并带有视频标题和缩略图封面。',
          },
          {
            q: 'YToMP4 免费吗？',
            a: '是的。将 YouTube 视频转换并下载为 MP4 或 MP3 完全免费，没有每日次数限制，没有试用期，也没有水印。',
          },
          {
            q: '需要安装软件或注册账号吗？',
            a: '不需要。YToMP4 完全在浏览器中运行，无需应用、扩展或注册：粘贴链接即可下载。',
          },
          {
            q: '支持哪些 YouTube 链接？',
            a: '支持标准 youtube.com/watch 链接、youtu.be 短链接、YouTube Shorts、YouTube Music、移动版 m.youtube.com 链接、嵌入视频以及已结束直播的回放。带播放列表参数的链接会转换当前选中的视频。',
          },
        ],
      },
      {
        name: '格式与画质',
        items: [
          {
            q: '可以下载 1080p 或 4K 的 YouTube 视频吗？',
            a: '可以。如果视频以全高清或更高分辨率上传，您可以将其下载为 1080p、1440p 或 4K (2160p) 的 MP4，并保留包括 60fps 在内的原始帧率。',
          },
          {
            q: 'MP3 应该选 128 kbps 还是 320 kbps？',
            a: '想要最佳音质、尽量减少额外压缩，请选择 320 kbps，这是 MP3 格式支持的最高比特率。如果想让播客、讲座等语音文件更小，请选择 128 kbps。请注意，MP3 的音质不会超过 YouTube 传输的音频，因此 320 kbps 是保留音质，而不是提升音质。',
          },
          {
            q: 'MP4 文件有声音吗？',
            a: '有。YouTube 将高分辨率视频和音频分开存储；YToMP4 会将它们合并为一个采用 H.264 视频和 AAC 音频的 MP4，因此文件在任何地方播放都有声音。',
          },
          {
            q: '可以转换超过 2 小时的 YouTube 长视频吗？',
            a: '可以。没有 20 分钟或 1 小时的限制，您可以转换时长 2 小时、3 小时甚至 10 小时的完整播客、有声书、演唱会和讲座。视频越长，处理时间只会稍长一些。',
          },
          {
            q: '可以把整个 YouTube 播放列表下载为 MP3 或 MP4 吗？',
            a: '粘贴播放列表链接会转换当前选中的视频。一次性保存播放列表中全部视频的功能已在我们的开发计划中。',
          },
          {
            q: '可以只转换视频的一部分吗？',
            a: '剪辑功能已在我们的开发计划中：您将可以设置开始和结束时间，只下载长混音中的某个片段或某首歌曲，格式可选 MP4 或 MP3。',
          },
          {
            q: '可以将 YouTube Shorts 转换为 MP4 吗？',
            a: '可以。粘贴 Shorts 链接（youtube.com/shorts/…），视频会保存为竖屏 MP4；如果只想要声音，也可以保存为 MP3。',
          },
        ],
      },
      {
        name: '设备',
        items: [
          {
            q: '如何在 iPhone 上将 YouTube 视频下载为 MP4？',
            a: '在 Safari 中打开 ytomp4.com，粘贴 YouTube 链接，选择 MP4，点按“转换”，然后点按“下载”。视频会保存在“文件”应用的“下载”中；打开它并点按“分享” › “存储视频”即可添加到“照片”。',
          },
          {
            q: 'YToMP4 支持 Android 吗？',
            a: '支持。使用 Chrome 或任何其他 Android 浏览器即可。下载的 MP4 和 MP3 文件保存在“下载”文件夹中，并会出现在相册或音乐应用里。',
          },
          {
            q: '可以在 Mac 或 Windows 电脑上将 YouTube 转换为 MP4 吗？',
            a: '可以。YToMP4 支持 macOS、Windows 10 和 Windows 11 上的 Safari、Chrome、Firefox 和 Edge，因此无需为 Mac 或 PC 单独安装 YouTube 下载软件。',
          },
          {
            q: '能在 Chromebook 上使用吗？',
            a: '能。由于在浏览器中运行，YToMP4 是在 Chromebook 上将 YouTube 转换为 MP4 或 MP3 最简单的方式之一。文件保存在“文件”应用的“下载”文件夹中。',
          },
          {
            q: '下载的文件保存在哪里？',
            a: '文件保存在浏览器的默认下载位置：电脑和 Android 上通常是“下载”文件夹，iPhone 和 iPad 上是“文件” › “下载”。',
          },
        ],
      },
      {
        name: '安全与合法性',
        items: [
          {
            q: 'YToMP4 安全吗？',
            a: '安全。YToMP4 不要求安装任何东西，不使用弹窗跳转或虚假下载按钮，只提供普通的 MP4 和 MP3 文件。与任何下载一样，请只打开您自己转换的文件。',
          },
          {
            q: '将 YouTube 视频转换为 MP4 或 MP3 合法吗？',
            a: '这取决于具体视频和您所在的地区。下载您自己上传的视频、公有领域内容或采用知识共享（Creative Commons）许可的视频通常没有问题。未经许可下载受版权保护的音乐或电影可能违反版权法和 YouTube 服务条款。YToMP4 仅供个人使用您拥有权利的内容。',
          },
          {
            q: '你们会保存我的视频或转换记录吗？',
            a: '不会。我们不记录您转换的链接，转换后的文件会在您下载后不久自动从服务器删除。',
          },
          {
            q: '为什么我的视频无法转换？',
            a: '私享视频、仅限会员的视频、有年龄限制的视频和受地区限制的视频无法转换；直播只能在结束后保存。请确认该链接能在浏览器的无痕窗口中打开，然后重试。',
          },
          {
            q: '这和 YouTube Premium 的下载有什么不同？',
            a: 'YouTube Premium 只能在 YouTube 应用内离线观看视频。YToMP4 提供标准的 MP4 或 MP3 文件，可在任何播放器和设备上播放，无需订阅。',
          },
        ],
      },
    ],
  },

  cta: {
    h2: '立即转换您的第一个 YouTube 视频',
    text: '粘贴链接，选择 MP4 或 MP3，几秒即可下载。免费，无需注册。',
    button: '开始转换',
  },

  footer: {
    about: 'YToMP4 是一款免费的在线 YouTube 转 MP4 和 MP3 转换器，与 YouTube 或 Google 无关联。',
    links: [
      { href: '/privacy/', label: '隐私政策' },
      { href: '/terms/', label: '使用条款' },
      { href: '/dmca/', label: '版权 / DMCA' },
      { href: '/contact/', label: '联系我们' },
    ],
    rights: '保留所有权利。',
    createdBy: '开发者：',
  },

  consent: {
    label: 'Cookie 同意',
    text: '我们使用 Google Analytics Cookie 来了解转换器的使用情况并加以改进。无广告，不进行跨站跟踪。',
    privacy: '隐私政策',
    accept: '接受',
    reject: '拒绝',
    settings: 'Cookie 设置',
  },

  schema: {
    appName: 'YToMP4：YouTube 转 MP4 和 MP3 转换器',
    category: 'MultimediaApplication',
    features: [
      '将 YouTube 转换为 360p、480p、720p、1080p、1440p 和 4K 的 MP4',
      '将 YouTube 转换为 128、192、256 和 320 kbps 的 MP3',
      '支持 YouTube Shorts、YouTube Music 和 youtu.be 链接',
      '长视频无时长限制',
      'MP3 自带封面和标题元数据',
      '无需注册或安装',
    ],
  },
};

export default zh;
