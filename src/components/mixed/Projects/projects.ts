import chronotube from 'src/assets/projectThumbnail/chronotube.webp'
import ogplink from 'src/assets/projectThumbnail/ogplink.webp'
import liveTracker from 'src/assets/projectThumbnail/liveTracker.webp'

export const projects = [
  {
    name: 'Chronotube',
    thumbnail: chronotube,
    phrase:
      'YouTubeの履歴から、チャンネル登録日や登録のきっかけを調べられるサービス',
    description:
      'YouTubeのチャンネル登録日を取得し、再生履歴と合わせて、登録に至った経緯を調べるサービスです。2020年ごろに中心となる機能を公開し、その後は、専門的な知識がなくても使いやすいサービスを目指して、アップデートを重ねています。',
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
    phrase: '共有リンクのSNS上での表示を上書きできるツール',
    description:
      'Webページのリンクを、TwitterなどのSNS上に貼り付けた際に表示される情報を上書きできます。サムネイル画像にはページ内の他の画像を設定したり、URLを直接指定することもできます。',
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
    description:
      'Webカメラやウィンドウなどの映像を入力として、リアルタイムで特徴点をトラッキングすることができます。アバター側に手を加えずに、小道具を身につけたいときなどの使用を想定しています。',
    links: [
      { url: 'https://livetracker.diawel.me/', text: 'Live Trackerをつかう' },
      {
        url: 'https://note.com/diawel/n/nfa0c88cc847f',
        text: '関連記事：映像をリアルタイムでトラッキングして、PNGの小道具を連動させられるツールを作りました',
      },
    ],
  },
]
