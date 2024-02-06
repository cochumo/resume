import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiX, SiWantedly } from '@icons-pack/react-simple-icons';

const data: Data = {
  name: '伊賀本 衛',
  globalName: 'Mamoru Igamoto',
  lastUpdatedAt: new Date('2024-01-25'),
  status: {
    color: 'active',
    label: '転職活動中',
  },
  location: '岐阜県',
  bio: 'フロントエンドエンジニア',
  summary:
    `Vue.jsやReactを駆使したフロントエンド開発とUI/UXデザインに情熱を注いでいます。過去にはレガシーシステムのフルリプレイスを成功させ、ステークホルダーとの密な連携によりプロジェクトの円滑な進行を実現しました。
    私のスキルセットには技術的な側面だけでなく、ユーザーエクスペリエンスに対する深い理解も含まれています。これまでの経験から得た知識を活かし、使いやすく魅力的なウェブアプリケーションを提供できる自信があります。
    プロフェッショナルな仕事においても私の趣味と特技が影響を与えています。ドライブが趣味で、数年前までサーキットでの走行経験があります。この経験から得た集中力や計画力を仕事にも生かし、新たな挑戦に積極的に取り組んでいます。`,
  avatarUrl: getAssetPath() + '/locale/ja/profile.jpg',
  skills: ['Vue.js', 'Nuxt.js','React', 'Next.js', 'TypeScript', 'PHP', 'Laravel', 'Xd', 'figma'],
  education: [
    {
      school: '岐阜県立岐南工業高等学校',
      degree: '電気科',
      start: '2008',
      end: '2011',
    },
  ],
  work: [
    {
      company: '株式会社Arch',
      link: 'https://arch-dx.co.jp/',
      badges: ['正社員'],
      title: 'フロントエンドエンジニア',
      start: '2023',
      end: '現在',
      description: `- 事業内容: 建機レンタル品にかかわる業務のDX化
      - 業務内容: 建設現場で使用される建機レンタル品に関するSaasやプラットフォームの開発
      - 業務内容詳細: 新規サービスの開発を行っています。主にフロントエンドの開発とデザインを担当しています。
      - 使用技術: React, TypeScript, mui, GraphQL, Vite, vitest, Turborepo Docker, Go, Laravel`,
    },
    {
      company: '株式会社PREVENT',
      link: 'https://prevent.co.jp/',
      badges: ['正社員'],
      title: 'フロントエンドエンジニア',
      start: '2021',
      end: '2023',
      description: `- 事業内容: 医療データ解析、生活習慣病の重症化予防支援事業等
      - 業務内容: 生活習慣病の重症化予防支援サービスのフロントエンド開発、管理画面の開発
      - 業務内容詳細: 管理画面の新規開発、既存のサービスの改修、新規サービスの開発を担当していました。新規開発ではステークホルダーとのコミュニケーションを重視し、要件定義からデザイン、開発、テスト、リリースまでを担当していました。
      - 使用技術: Nuxt.js, TypeScript, Sass, React, Next.js, Tailwind CSS, Storybook, Jest, Testing Library, AWS Amplify, AWS AppSync, AWS Lambda, AWS S3, AWS CloudFront`,
    },
    {
      company: '株式会社シェアリングテクノロジー',
      link: 'https://www.sharing-tech.co.jp/',
      badges: ['正社員'],
      title: 'フロントエンドエンジニア',
      start: '2020',
      end: '2021',
      description: `- 事業内容: 暮らしのお困りごとを対象としたWEB事業
      - 業務内容: WordPressで構築されたサイトの保守、WordPressで構築されたサイトをNuxt.jsとWP REST APIを使用してリプレイス、インフラをAWSにリプレイス、Node.js、Puppeteerを使用し社内向けSEOチェックツールの開発、自動化
      - 業務内容詳細: フロントエンドエンジニアとして入社し、WordPressのサイトの保守、ABテストや新規ページのコーディングを担当し、長年増改築を繰り返されたサイトのメンテナンス性の悪さに疑問を感じ、Nuxt.jsでのリプレイスを企画提案し、承認され、40サイト以上あるバーティカルサイトを構築しています。またインフラに詳しい方の協力を得てステージング環境、本番環境をAWSにリプレイス作業も行っています。
      - 使用技術: HTML, CSS, SCSS, JavaScript, Vue.js, Nuxt.js, Node.js, AWS EC2, S3, Lambda, API Gateway, SES`,
    },
    {
      company: '株式会社PIARY',
      link: 'https://www.piary.jp/',
      badges: ['正社員'],
      title: 'コーダー',
      start: '2018',
      end: '2020',
      description: `- 事業内容: ブライダル用品の通信販売
      - 業務内容: WordPressで構築されたECサイトの保守、新規ページのコーディング、管理システムの機能追加
      - 業務内容詳細: コーダーとして入社し、実務を通してコーディングの基礎を身につけ、徐々にスキルアップし管理システムの機能追加なども担当しました。
      - 使用技術: HTML, CSS, JavaScript, jQuery, PHP, CodeIgniter`,
    },
  ],
  projects: [
    {
      title: 'comming soon',
      description: 'comming soon',
      techStack: ['comming soon'],
    }
    // {
    //   title: 'EcoTrack',
    //   techStack: [
    //     'Side Project',
    //     'JavaScript',
    //     'React',
    //     'Node.js',
    //     'MongoDB',
    //     'REST API',
    //   ],
    //   description:
    //     'An environmental impact tracking app for individuals and small businesses',
    //   link: {
    //     label: 'ecotrack.app',
    //     href: 'https://www.jmdp.or.jp',
    //   },
    // },
    // {
    //   title: 'CodeCollab',
    //   techStack: ['Side Project', 'Python', 'Flask', 'WebSocket', 'Docker'],
    //   description:
    //     'A real-time collaborative coding platform for remote pair programming',
    //   link: {
    //     label: 'codecollab.io',
    //     href: 'https://www.jmdp.or.jp',
    //   },
    // },
  ],
  contacts: [
    // {
    //   label: 'example@example.com',
    //   href: 'mailto:example@example.com',
    //   icon: Mail,
    //   toolbar: true,
    // },
    {
      label: 'DMする',
      href: 'https://twitter.com/cochumo_1128',
      icon: SiX,
      toolbar: true,
    },
    // {
    //   label: 'オンラインミーティング',
    //   href: 'https://cal.com',
    //   icon: Calendar,
    // },
    // {
    //   label: 'フォーム',
    //   href: 'https://tally.so',
    //   icon: Send,
    // },
  ],
  links: [
    {
      label: 'cochumo',
      href: 'https://github.com/cochumo',
      icon: SiGithub,
    },
    {
      label: 'm_igamoto',
      href: 'https://www.wantedly.com/id/m_igamoto',
      icon: SiWantedly,
    },
  ],
};

export default data;
