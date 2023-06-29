import chronotube from 'src/assets/projectThumbnail/chronotube.webp'
import ogplink from 'src/assets/projectThumbnail/ogplink.webp'
import liveTracker from 'src/assets/projectThumbnail/liveTracker.webp'

export const works = [
  {
    name: 'Chronotube',
    thumbnail: chronotube,
    phrase:
      'YouTubeの履歴から、チャンネル登録日や登録のきっかけを調べられるサービス',
    description: [
      'YouTubeのチャンネル登録日を取得し、再生履歴と合わせて、登録に至った経緯を調べるサービスです。Google アカウントでのログインだけから、利用を開始できます。',
      '私がこれまでに開発したものの中で、現在最も多くの方にご利用いただいています。開発当初は、ユーザーの導線などはあまり意識していなかったものの、その後アップデートを重ね、現在ではユーザーにとっての分かりやすさを最優先に考えた設計となっています。',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'PHP'],
    links: [
      { url: 'https://chronotube.diawel.me/', text: 'Chronotubeをつかう' },
      { url: 'https://github.com/diawel/Chronotube', text: 'GitHub' },
      {
        url: 'https://www.wantedly.com/id/diawel/items/69901812-1319-4b2e-a346-dec169e32909',
        text: '関連記事：推し履歴分析サービス「Chronotube」を、UXにこだわって改善しました。',
      },
    ],
  },
  {
    name: 'OGPlink',
    thumbnail: ogplink,
    phrase: '共有リンクのSNS上での表示を上書きできるサービス',
    description: [
      'Webページのリンクを、TwitterなどのSNS上に貼り付けた際に表示される情報を上書きできます。サムネイル画像にはページ内の他の画像を設定したり、URLを直接指定することもできます。',
      '現在提供しているサービスの中で、最もバックエンド寄りなサービスです。具体的には、入力されたURLに既に設定されているOGP情報を取得する、上書きの候補となる画像を取得する、上書き済みのURLを生成して、アクセスした各種SNSのbotにはOGP情報を返し、ユーザーに対しては本来のページへのリダイレクトを行うなどの処理をしています。',
    ],
    technologies: ['HTML', 'JavaScript', 'CSS', 'PHP'],
    links: [
      { url: 'https://ogplink.diawel.me/', text: 'OGPlinkをつかう' },
      {
        url: 'https://note.com/diawel/n/n70fb1c72614b',
        text: '関連記事：外部サイトをシェアしたときに表示される見出しを編集するツールを作りました',
      },
    ],
  },
  {
    name: 'Live Tracker',
    thumbnail: liveTracker,
    phrase: 'リアルタイムで映像をトラッキング、画像を重ねられるツール',
    description: [
      'Webカメラやウィンドウなどの映像を入力として、リアルタイムで特徴点をトラッキングすることができます。アバター側に手を加えずに、小道具を身につけたいときなどの使用を想定しています。',
      '操作画面が煩雑になりそうなツールですが、メインとなるユーザーがある程度PC操作に慣れていることも踏まえたうえで、ユーザーの導線を明確にしています。',
    ],
    technologies: ['HTML', 'JavaScript', 'CSS'],
    links: [
      { url: 'https://livetracker.diawel.me/', text: 'Live Trackerをつかう' },
      {
        url: 'https://note.com/diawel/n/nfa0c88cc847f',
        text: '関連記事：映像をリアルタイムでトラッキングして、PNGの小道具を連動させられるツールを作りました',
      },
    ],
  },
]
