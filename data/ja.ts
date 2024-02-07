import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiX, SiWantedly } from '@icons-pack/react-simple-icons';

const data: Data = {
  name: '伊賀本 衛',
  globalName: 'Mamoru Igamoto',
  lastUpdatedAt: new Date('2024-02-06'),
  status: {
    color: 'active',
    label: '転職活動中',
  },
  location: '岐阜県',
  bio: 'フロントエンドエンジニア, UI/UXデザイナー',
  summary: `${
    new Date().getFullYear() - 2018 - 1
  }年の経験を持つフロントエンドエンジニアです。React, Vue.js, Next.jsなど、多様なフレームワークを使いこなし、VercelやNetlifyなどのクラウドインフラを活用した効率的な開発を得意としています。また、UIデザインの経験も豊富で、ユーザー体験を考慮した開発が可能です。技術力だけでなく、デザインの視点からもプロジェクトに参加できるため、チーム内でのコミュニケーションも円滑に進められます。これらのスキルを活かし、ユーザーにとって最高の体験を提供するフロントエンド開発を目指しています。`,
  avatarUrl: getAssetPath() + '/locale/ja/profile.jpg',
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
      title: 'フロントエンドリードエンジニア, UI/UXデザイナー',
      start: '2023',
      end: '現在',
      description: `- 事業内容: 建機レンタル品にかかわる業務のDX化
      - 業務内容: 建設現場で使用される建機レンタル品に関するSaasやプラットフォームの開発
      - 業務内容詳細: 新規サービスの技術選定や開発を行っています。主にフロントエンドの開発とデザインを担当しています。
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
      - 使用技術: Vue.js, Nuxt.js, TypeScript, Sass, React, Next.js, Tailwind CSS, Storybook, Jest, Testing Library, AWS Amplify, AWS AppSync, AWS Lambda, AWS S3, AWS CloudFront`,
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
    {
      company: '別業界',
      badges: ['正社員'],
      title: '機械オペレーター',
      start: '2011',
      end: '2018',
      description:
        '高校卒業後、トヨタ系の工場に務めていましたが、自分自身のスキルを持って仕事したい！と思い転職',
    },
  ],
  skills: [
    'Vue.js',
    'Nuxt.js',
    'React',
    'Next.js',
    'TypeScript',
    'PHP',
    'Laravel',
    'Xd',
    'figma',
  ],
  projects: [
    {
      title: '建機レンタル品に関するサービス',
      techStack: [
        'TypeScript',
        'React',
        'Vite',
        'Go',
        'GraphQL',
        'Laravel',
        'Turborepo',
        'figma',
      ],
      description:
        '建設現場で使用される建機レンタル品に関するSaasやプラットフォームの開発およびUI,UXデザイン',
    },
    {
      title: '生活習慣病の重症化予防支援サービス',
      techStack: ['TypeScript', 'Vue.js', 'Nuxt.js', 'Go', 'GraphQL', 'Xd'],
      description:
        '生活習慣病の重症化予防支援サービスのフロントエンド開発,UXデザイン',
    },
    {
      title: '生活習慣病の重症度判定サービス',
      techStack: ['TypeScript', 'React', 'Vite', 'Python', 'AWS Amplify'],
      description:
        '自社の開催するウェビナーで案内する生活習慣病の重症度判定サービスのフロントエンド開発',
    },
    {
      title: 'エンジニアブログ',
      techStack: ['TypeScript', 'React', 'Gatsby'],
      description: 'エンジニアブログのフロントエンド開発',
    },
    {
      title: 'WordPressサイトのリプレイス',
      techStack: [
        'TypeScript',
        'Nuxt.js',
        'WordPress REST API',
        'AWS EC2',
        'S3',
        'Lambda',
        'API Gateway',
        'SES',
      ],
      description:
        '管理の大変だったWordPressサイトをNuxt.jsでリプレイスし、インフラをAWSにリプレイス',
    },
    {
      title: 'WordPressサイトの保守運用',
      techStack: [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'WordPress',
        'PHP',
        'CodeIgniter',
      ],
      description:
        'WordPressで構築されたECサイトの保守、新規ページのコーディング、管理システムの機能追加',
    },
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
