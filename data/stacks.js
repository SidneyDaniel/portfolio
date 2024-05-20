/**
 * Representa um item da pilha de tecnologia.
 * @typedef {Object} TechStackItem
 * @property {string} name - O nome da tecnologia.
 * @property {string} link - O link para a documentação oficial ou site da tecnologia.
 * @property {string[]} tags - Uma lista de tags que descrevem a tecnologia (por exemplo, 'framework').
 * @property {string} logo - Um identificador para o logo da tecnologia.
 * @property {Object} description - Uma descrição da tecnologia em diferentes idiomas.
 * @property {string} description.ptBr - A descrição em português.
 * @property {string} description.en - A descrição em inglês.
 */

/**
 * Exemplo de como construir uma lista de itens:
 * export const listaDeItens = [
 * {
 *   name: 'Nome da Tecnologia',
 *   link: 'https://link.para.a.tecnologia.com',
 *   tags: ['framework', 'outra tag'],
 *   logo: 'identificador-do-logo',
 *   description: {
 *     ptBr: 'Descrição em português',
 *     en: 'Descrição em inglês'
 *   }
 * }
 * ]
 */

/**
 * Uma lista de itens da pilha de tecnologia.
 * @type {TechStackItem[]} - Array com uma lista de objetos de tecnologias utilizadas. 
 */

export const techStack = [
  {
    name: 'Nuxt',
    link: 'https://nuxt.com/',
    tags: ['framework'],
    logo: 'i-logos:nuxt-icon',
    description: {
      ptBr: 'Nuxt é um framework Vue.js, meu framework favorito que me fez redescobrir o desenvolvimento e apreciá-lo ainda mais!',
      en: 'Nuxt is a Vue.js framework, my favorite framework that made me rediscover development and appreciate it even more!',
    },
  },
  {
    name: 'Vue',
    link: 'https://vuejs.org/',
    tags: ['framework'],
    logo: 'i-devicon:vuejs',
    description: {
      ptBr: 'Vue é minha linguagem do coração que me permitiu descobrir o desenvolvimento web, terrivelmente eficiente e simples de usar.',
      en: 'Vue is my heart language that allowed me to discover web development, terribly efficient and simple to use.',
    },
  },
  {
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    tags: ['css'],
    logo: 'i-logos:tailwindcss-icon',
    description: {
      ptBr: 'TailwindCSS é um framework CSS que me permite economizar muito tempo no desenvolvimento simplificando o CSS.',
      en: 'TailwindCSS is a CSS framework that allows me to save a lot of time in development by simplifying CSS.',
    },
  },
  {
    name: 'Vercel',
    link: 'https://vercel.com/',
    tags: ['deployment'],
    logo: 'i-logos:vercel-icon',
    description: {
      ptBr: 'Vercel permite implantar sites/aplicações gratuitamente e muito rapidamente.',
      en: 'Vercel allows you to deploy sites/applications for free and very quickly.',
    },
  },
  {
    name: 'Bulma',
    link: 'https://bulma.io/',
    tags: ['css'],
    logo: 'i-logos:bulma',
    description: {
      ptBr: 'Bulma é um framework CSS baseado em Flexbox.',
      en: 'Bulma is a CSS framework based on Flexbox.',
    },
  },
  {
    name: 'Git',
    link: 'https://git-scm.com/',
    tags: ['version control'],
    logo: 'i-logos:git-icon',
    description: {
      ptBr: 'Git é um sistema de controle de versão distribuído.',
      en: 'Git is a distributed version control system.',
    },
  },
  {
    name: 'Node.js',
    link: 'https://nodejs.org/',
    tags: ['runtime'],
    logo: 'i-logos:nodejs-icon',
    description: {
      ptBr: 'Node.js é um ambiente de execução JavaScript construído no motor JavaScript V8 do Chrome.',
      en: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    },
  },
  {
    name: 'Firebase',
    link: 'https://firebase.google.com/',
    tags: ['database', 'backend'],
    logo: 'i-logos:firebase',
    description: {
      ptBr: 'Firebase é uma plataforma de desenvolvimento de aplicativos que fornece infraestrutura, dados de back-end e APIs para o seu aplicativo.',
      en: 'Firebase is an app development platform that provides backend data and APIs for your app.',
    },
  },
  {
    name: 'npm',
    link: 'https://www.npmjs.com/',
    tags: ['package manager', 'node'],
    logo: 'i-logos:npm',
    description: {
      ptBr: 'npm é o gerenciador de pacotes para Node.js. Ele ajuda a instalar e atualizar pacotes de software em seu projeto Node.js.',
      en: 'npm is the package manager for Node.js. It helps to install and update software packages in your Node.js project.',
    },
  }
]


export const productivityStack = [
  {
    name: 'Notion',
    link: 'https://www.notion.so/',
    tags: ['notes'],
    logo: 'i-logos:notion-icon',
    description: {
      ptBr: 'Notion é a melhor ferramenta que já usei, para tomar notas, gerenciar projetos, gerenciar tarefas, etc. É simplesmente incrível.',
      en: 'Notion is the best tool I\'ve ever used, note taking, project management, task management, etc. It\'s just amazing.',
    },
  },
  {
    name: 'Trello',
    link: 'https://www.trello.com/',
    tags: ['notes'],
    logo: 'i-logos:trello',
    description: {
      ptBr: 'Trello é uma ferramenta de gerenciamento de projetos que permite organizar suas tarefas em quadros. É fácil de usar e muito eficiente.',
      en: 'Trello is a project management tool that lets you organize your tasks into boards. It\'s easy to use and very efficient.',
    },
  },
]

export const designStack = [
  {
    name: 'Figma',
    link: 'https://www.figma.com/',
    tags: ['prototyping'],
    logo: 'i-logos:figma',
    description: {
      ptBr: 'Figma me permite prototipar e projetar todas as minhas ideias e projetos.',
      en: 'Figma allows me to prototype and design all my ideas and projects.',
    },
  },
  {
    name: 'Canva',
    link: 'https://www.canva.com/pt_br/',
    tags: ['illustration'],
    logo: 'i-devicon:canva',
    description: {
      ptBr: 'Canva é uma ferramenta que permite criar designs de diversos tipos, como logos, panfletos, cartazes, currículos e muito mais.',
      en: 'Canva is a tool that allows you to create designs of various types, such as logos, flyers, posters, resumes and much more.',
    },
  }
]

export const toolsStack = [
  {
    name: 'Visual Studio Code ( VSC )',
    link: 'https://code.visualstudio.com/',
    tags: ['code editor', 'IDLE'],
    logo: 'i-logos:visual-studio-code',
    description: {
      ptBr: 'Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.',
      en: 'Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.',
    },
  },
  {
    name: 'Postman',
    link: 'https://www.postman.com/',
    tags: ['API'],
    logo: 'i-logos:postman-icon',
    description: {
      ptBr: 'Postman é uma plataforma de colaboração para desenvolvimento de API. Postman\'s features simplify each step of building an API and streamline collaboration to help create better APIs—faster.',
      en: 'Postman is a collaboration platform for API development. Postman\'s features simplify each step of building an API and streamline collaboration to help create better APIs—faster.',
    },
  },
  {
    name: 'Edge DevTools',
    link: 'https://developer.microsoft.com/en-us/microsoft-edge/tools/',
    tags: ['devtools', 'browser'],
    logo: 'i-logos:microsoft-edge',
    description: {
      ptBr: 'Edge DevTools é um conjunto de ferramentas de desenvolvimento web integradas ao Microsoft Edge. Ele inclui recursos como inspeção de elementos, depuração de JavaScript, análise de desempenho e muito mais.',
      en: 'Edge DevTools is a set of web developer tools built directly into the Microsoft Edge browser. It includes features like element inspection, JavaScript debugging, performance analysis, and more.',
    },
  }
]

// export const productivityStack = [
//     {
//       name: 'Notion',
//       link: 'https://www.notion.so/',
//       tags: ['notes'],
//       logo: 'i-logos:notion-icon',
//       description: {
//         fr: 'Notion est le meilleur outil que j\'ai jamais utilisé, prise de notes, gestion de projet, gestion de tâches, etc. Il est tout simplement incroyable.',
//         en: 'Notion is the best tool I\'ve ever used, note taking, project management, task management, etc. It\'s just amazing.',
//       },
//     },
//     {
//       name: 'Trello',
//       link: 'https://www.notion.so/',
//       tags: ['notes'],
//       logo: 'i-logos:trello',
//       description: {
//         fr: 'Notion est le meilleur outil que j\'ai jamais utilisé, prise de notes, gestion de projet, gestion de tâches, etc. Il est tout simplement incroyable.',
//         en: 'Notion is the best tool I\'ve ever used, note taking, project management, task management, etc. It\'s just amazing.',
//       },
//     },
// ]
  
// export const designStack = [
//     {
//       name: 'Figma',
//       link: 'https://www.figma.com/',
//       tags: ['prototyping'],
//       logo: 'i-logos:figma',
//       description: {
//         fr: 'Figma me permet de prototyper et de designer toutes mes idées et projets.',
//         en: 'Figma allows me to prototype and design all my ideas and projects.',
//       },
//     },
//     {
//       name: 'Canva',
//       link: 'https://www.canva.com/pt_br/',
//       tags: ['illustration'],
//       logo: 'i-devicon:canva',
//       description: {
//         fr: 'Le meilleur logiciel pour créer de sublimes mockups, designs, etc...',
//         en: 'O Canva é uma ferramenta que permite criar designs de diversos tipos, como logos, panfletos, cartazes, currículos e muito mais.',
//       },
//     }
// ]

// export const toolsStack = [
//   {
//     name: 'VSC',
//     link: 'https://www.figma.com/',
//     tags: ['prototyping'],
//     logo: 'i-logos:visual-studio-code',
//     description: {
//       fr: 'Figma me permet de prototyper et de designer toutes mes idées et projets.',
//       en: 'Figma allows me to prototype and design all my ideas and projects.',
//     },
//   },
//   {
//     name: 'Postman',
//     link: 'https://www.canva.com/pt_br/',
//     tags: ['illustration'],
//     logo: 'i-logos:postman-icon',
//     description: {
//       fr: 'Le meilleur logiciel pour créer de sublimes mockups, designs, etc...',
//       en: 'O Canva é uma ferramenta que permite criar designs de diversos tipos, como logos, panfletos, cartazes, currículos e muito mais.',
//     },
//   }
// ]

export const stacks = {
  techStack,
  productivityStack,
  designStack,
  toolsStack
}