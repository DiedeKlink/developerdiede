export type Project = {
  title: string
  description: string
  descriptionEn?: string
  subjects?: string[]
  href: string
  imgSrc?: string
  imgGallery?: string[]
  slug?: string
  tech: string
  github?: string
  category?: string
}

const projectsData: Project[] = [
  {
    title: 'PetSoft',
    tech: 'React, Next.js, TypeScript, Tailwind CSS',
    descriptionEn: `
    PetSoft is a cutting-edge application built with React and Next.js for pet daycares. It allows users to keep track of the pets currently checked in at the daycare. Users can add new pets, edit pet information, and check out pets when they leave. This ensures efficient management of pet records and provides a seamless experience for daycare staff.
    `,
    description: `
    Dit is de zesde en laatste app gebouwd aan de hand van de Professional React & Next.js cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-react-nextjs" target="blank" title="ByteGrad">ByteGrad</a>. PetSoft is een geavanceerde applicatie gebouwd met React en Next.js voor dierenopvangcentra. De app bevat volledige CRUD functionaliteit, optimistic UI, server actions, auth, betalingen en meer! Het stelt gebruikers in staat om bij te houden welke huisdieren momenteel in de opvang zijn ingecheckt. Gebruikers kunnen nieuwe huisdieren toevoegen, informatie over huisdieren bewerken en huisdieren uitchecken wanneer ze vertrekken. Dit zorgt voor een efficiënte administratie van huisdiergegevens en biedt een naadloze ervaring voor het opvangpersoneel.
    `,
    subjects: [
      'Shadcn UI',
      'Grid Layout',
      'Fetching Data in a server component',
      'Server Vs Client Components',
      'CRUD Actions',
      'Shadcn UI Modal',
      'Prisma Setup + Seed',
      'Get Data from Database (Prisma Client)',
      'Server Actions',
      'RevalidatePath',
      'UseFormStatus',
      'Error State (Sonner Toast)',
      'UseTransition for Server Actions',
      'UseOptimistic for Optimistic UI',
      'React-Hook-Form',
      'Validation with Zod',
      'Infer TypeScript Types from Zod',
      'Zod on Server (Reuse Schema)',
      'Auth Pages (Nested Layout)',
      'JWT (JSON Web Tokens) And Cookies',
      'Sessions',
      'JWT Vs Database Sessions',
      'Edge Network (Middleware)',
      'Middleware In NExtJS',
      'Add User To Database',
      'Next-Auth Configuration',
      'Redirect Rules',
      'Authorization on CRUD Actions',
      'Payments In NextJS With Stripe',
      'Stripe Webhooks',
      'Change SQLite To Vercel Postgres For Production',
      'Deploy To Vercel',
    ],
    imgSrc: '/static/images/petsoft-01.png',
    href: 'https://petsoft-zeta.vercel.app/',
    github: 'https://github.com/DiedeKlink/petsoft',
    slug: 'petsoft',
    category: 'cursus',
  },
  {
    title: 'EVENTO',
    tech: 'React, Next.js, TypeScript, Tailwind CSS',
    descriptionEn: `
      EVENTO is a full-stack application built with React and Next.js. It allows users to find events happening near them. Users can search for events based on their location, view event details, and even get directions to the event venue. The app provides a seamless experience for discovering local events and staying updated with what's happening around them.
      `,
    description: `
      Dit is de vijfde app gebouwd aan de hand van de Professional React & Next.js cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-react-nextjs" target="blank" title="ByteGrad">ByteGrad</a>. Tijdens dit project worden Next.js fundamentals behandeld, maar wordt er ook kennis gemaakt met geavanceerde patronen. EVENTO is een full-stack applicatie gebouwd met React, Next.js en Tailwind CSS. Het stelt gebruikers in staat om evenementen bij hen in de buurt te vinden. Gebruikers kunnen zoeken naar evenementen op basis van hun locatie, evenementdetails bekijken en zelfs routebeschrijvingen naar de evenementlocatie krijgen. De app biedt een naadloze ervaring voor het ontdekken van lokale evenementen en het op de hoogte blijven van wat er in de buurt gebeurt.
      `,
    subjects: [
      'Routing Strategy (Layout & Pages, Dynamic Routes, <Link>)',
      'Tailwind Styling',
      'NextJS Image Component',
      'Accent Color (Tailwind Config)',
      'Metadata (TypeScript Metadata Type)',
      'Active Link (Clsx, Framer Motion)',
      'When To Convert Server Component To Client Component',
      'NextJS <Link /> Component',
      'Page Params For Dynamic H1',
      'Fetch Data In Server Component',
      'Cn() Utility Function (Replace Clsx And Tailwind Merge)',
      'Get Slug from URL',
      'Reusable Hover Effect (Tailwind @Apple Rule)',
      'Client-Side Cache In NextJS (Router Cache)',
      'Cache And Loading.Tsx',
      'Data Cache And Revalidate',
      'Fetch Memoization In React and NextJS',
      'Setup SQLite With Prisma',
      'Replace Fetch API With Prisma Client',
      'Server-Side Pagination In NextJS',
      'Zod Validation',
      'Middleware (Redirecting)',
      'Static Vs Dynamic Rendering',
      'Pre Generating Popular Routes',
      'Prisma / ORM Caching with Unstable_cache',
      'Server-Only Utilities',
      'Using Postgres In Production',
      'Deployment To Vercel',
    ],
    imgSrc: '/static/images/evento-01.png',
    href: 'https://evento-five-sage.vercel.app/',
    github: 'https://github.com/DiedeKlink/evento',
    slug: 'evento',
    category: 'cursus',
  },
  {
    title: 'BotenWebManager',
    tech: 'Javascript',
    description: `
      Dit is een project dat ik samen met collega's mocht ontwikkelen als medewerker van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://arimpex.nl/" target="blank" title="Arimpex">Arimpex Media Services</a>. BotenWebManager is een uitgebreide webapplicatie die speciaal is ontworpen voor het beheren van botenadvertenties. De applicatie biedt functies zoals het bijhouden van bootgegevens, en het doorplaatsen van advertenties naar verschillende botenplatforms. Het doel van BotenWebManager is om eigenaren en beheerders van jachthavens te helpen bij het efficiënt beheren van hun vloot en faciliteiten.
      `,

    imgSrc: '/static/images/Botenbeheer-01.png',
    href: 'https://botenwebmanager.nl/',

    slug: 'botenwebmanager',
    category: 'dienstverband',
  },
  {
    title: 'Botentekoop.nl',
    tech: 'Javascript',
    description: `
      Dit is een project dat ik samen met collega's mocht ontwikkelen als medewerker van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://arimpex.nl/" target="blank" title="Arimpex">Arimpex Media Services</a>. 

      Botentekoop.nl is een toonaangevend platform voor het kopen en verkopen van boten in Nederland. Het biedt een uitgebreide database van botenadvertenties, variërend van kleine sloepen tot luxe jachten. Gebruikers kunnen eenvoudig zoeken naar boten op basis van verschillende criteria zoals type, prijs, en locatie. Het platform biedt ook tools voor het beheren van advertenties, het bijhouden van favorieten, en het direct contact opnemen met verkopers. Botentekoop.nl streeft ernaar om de beste ervaring te bieden voor zowel kopers als verkopers in de botenmarkt. Botentekoop is verkocht aan een andere partij dus de look en feel van de website is inmiddels veranderd.
      `,

    imgSrc: '/static/images/Botentekoop-01.jpg',
    href: 'https://botentekoop.nl/',

    slug: 'botentekoop',
    category: 'dienstverband',
  },
  {
    title: 'Camperscaravans.nl',
    tech: 'Javascript',
    description: `
      Dit is een project dat ik samen met collega's mocht ontwikkelen als medewerker van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://arimpex.nl/" target="blank" title="Arimpex">Arimpex Media Services</a>. 

      Camperscaravans.nl is een toonaangevend platform voor het kopen en verkopen van campers en caravans in Nederland. Het biedt een uitgebreide database van advertenties, variërend van compacte campers tot luxe caravans. Gebruikers kunnen eenvoudig zoeken naar voertuigen op basis van verschillende criteria zoals type, prijs, en bouwjaar. Het platform biedt ook tools voor het beheren van advertenties, het bijhouden van favorieten, en het direct contact opnemen met verkopers. Camperscaravans.nl streeft ernaar om de beste ervaring te bieden voor zowel kopers als verkopers in de markt voor recreatievoertuigen.
      `,

    imgSrc: '/static/images/Camperscaravans-01.jpg',
    href: 'https://camperscaravans.nl/',

    slug: 'camperscaravans',
    category: 'dienstverband',
  },
  {
    title: 'LiftTracker',
    tech: 'React Native',
    descriptionEn: `
    LiftTracker is a fitness app built with React Native. It allows users to track their sets, weight, and reps for various exercises. Users can log their workouts per day and utilize the calendar functionality to view their workout history and plan future sessions. This app helps users stay organized and motivated in their fitness journey.
    `,
    description: `
    LiftTracker is een fitness-app gebouwd met React Native. Het stelt gebruikers in staat om hun sets, gewicht en herhalingen voor verschillende oefeningen bij te houden. Gebruikers kunnen hun trainingen per dag loggen en de kalenderfunctionaliteit gebruiken om hun trainingsgeschiedenis te bekijken. Deze app helpt gebruikers georganiseerd en gemotiveerd te blijven in hun fitnessreis.
    `,
    imgSrc: '/static/images/rmtdev-02.png',
    imgGallery: [
      '/static/images/lifttracker/lifttracker-01.jpg',
      '/static/images/lifttracker/lifttracker-02.jpg',
      '/static/images/lifttracker/lifttracker-03.jpg',
    ],
    href: '/LiftTracker.apk',
    github: 'https://github.com/DiedeKlink/LiftTracker',
    slug: 'lifttracker',
    category: 'hobby',
  },
  {
    title: 'Fancy Counter',
    tech: 'React',
    descriptionEn: `
    A simple counter app built with React. It features a button to increment the count and another button to decrement the count. The count can also be reset to zero.`,
    description: `
    Dit is de eerste app gebouwd aan de hand van de Professional React & Next.js cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-react-nextjs" target="blank" title="ByteGrad">ByteGrad</a>. Door middel van het bouwen van een simpele moderne React app wordt de basis van React bijgebracht. De app bevat een knop om de telling te verhogen en een andere knop om de telling te verlagen. De telling kan ook worden teruggezet naar nul.

    `,
    subjects: [
      'React Component Fundamentals',
      'useState',
      'useEffect',
      'Event Handler Functions',
      'Conditional Rendering',
      'Derived State',
      'Children Composition',
    ],
    imgSrc: '/static/images/fancy-counter-01.png',
    href: 'https://fancy-counter-neon.vercel.app/',
    github: 'https://github.com/DiedeKlink/fancy-counter',
    slug: 'fancy-counter',
    category: 'cursus',
  },
  {
    title: 'Word Analytics',
    tech: 'React',

    descriptionEn: `
    A simple word analytics app built with React. It features a text area where you can input text. The app will then display the number of words, characters, and sentences in the text.
    `,
    description: `
    Dit is de tweede app gebouwd aan de hand van de Professional React & Next.js cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-react-nextjs" target="blank" title="ByteGrad">ByteGrad</a>. Een eenvoudige woordanalyse-app gebouwd met React. Het bevat een tekstvak waarin je tekst kunt invoeren. De app toont vervolgens het aantal woorden, tekens en zinnen in de tekst.
    `,
    subjects: [
      'Uncontrolled Vs Controlled text inputs',
      'Basic Validation',
      'Lifting State Up',
      'Manipulate CSS in React',
      'Folder Structure',
      'Derived State',
    ],
    imgSrc: '/static/images/word-analytics-01.png',
    href: 'https://word-analytics-mocha.vercel.app/',
    github: 'https://github.com/DiedeKlink/word-analytics',
    slug: 'word-analytics',
    category: 'cursus',
  },
  {
    title: 'TrekBag',
    tech: 'React',
    descriptionEn: `
    TrekBag is a to-do style app built with React. It helps you keep track of items to pack for your road trip. You can add items to your packing list, mark them as packed, and remove them once you're done. This ensures you never forget any essential items for your journey.
    `,
    description: `
    Dit is de derde app gebouwd aan de hand van de Professional React & Next.js cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-react-nextjs" target="blank" title="ByteGrad">ByteGrad</a>. Tijdens dit project worden er gevorderde en geavanceerde React technieken behandeld. Zoals het gebruik van de Context API, en deze vergelijken met een dedicated state management library zoals Zustand. TrekBag is een to-do stijl app gebouwd met React. Het helpt je bij het bijhouden van items die je moet inpakken voor je roadtrip. Je kunt items toevoegen aan je inpaklijst, ze markeren als ingepakt en ze verwijderen zodra je klaar bent. Dit zorgt ervoor dat je nooit essentiële items voor je reis vergeet.

      
    `,
    subjects: [
      'Mapping Over Array, Key Prop',
      'Create a form (useState, Array of Objects, Spread Operator)',
      'Best Practices: Naming Props',
      'Sorting Items (React-Select Component)',
      'LocalStorage with UseState',
      'Best Practices: UseMemo',
      'Context API with Custom Hook',
      'Zustand (Replace Context API with Zustand)',
    ],
    imgSrc: '/static/images/trekbag-01.png',
    href: 'https://trekbag-theta.vercel.app/',
    github: 'https://github.com/DiedeKlink/trekbag',
    slug: 'trekbag',
    category: 'cursus',
  },
  {
    title: 'CorpComment',
    tech: 'React, TypeScript',
    descriptionEn: `
    CorpComment is a platform built with React. Users can leave comments about corporations using hashtags. This allows for easy categorization and searching of comments. Users can share their experiences, feedback, and opinions about different companies, helping others make informed decisions. The app supports real-time updates and displays trending hashtags related to corporations.
    `,
    description: `
    Dit is de vierde app gebouwd aan de hand van de Professional React & Next.js cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-react-nextjs" target="blank" title="ByteGrad">ByteGrad</a>. CorpComment is een platform gebouwd met React en Typescript. Gebruikers kunnen opmerkingen achterlaten over bedrijven met behulp van hashtags. Dit maakt eenvoudige categorisatie en zoeken van opmerkingen mogelijk. Gebruikers kunnen hun ervaringen, feedback en meningen over verschillende bedrijven delen, waardoor anderen weloverwogen beslissingen kunnen nemen. De app ondersteunt realtime updates en toont trending hashtags gerelateerd aan bedrijven.
    `,
    subjects: [
      'TypeScript Introduction',
      'Radix UI Icons',
      'UseState, Controlled Input, Derived State',
      'TypeScript For UseState',
      'TypeScript For Events',
      'TypeScript For Props',
      'Data Fetching',
      'Loading State while Fetching Data',
      'Async/Await',
      'Conditional Rendering, Short Circuiting',
      'Post Item to Backend (Optimistic UI)',
      'UseMemo Performance Optimization',
      'Prevent Event Bubbling in The DOM',
      'Context API in TypeScript',
      'Custom Hooks',
      'Zustand (Replace Context API with Zustand)',
    ],
    imgSrc: '/static/images/corpcomment-01.png',
    href: 'https://corpcomment-react.vercel.app/',
    github: 'https://github.com/DiedeKlink/corpcomment-react',
    slug: 'corpcomment',
    category: 'cursus',
  },
  {
    title: 'RMTDEV',
    tech: 'React, TypeScript',
    descriptionEn: `
    
    RMTDEV is a job platform built with React and TypeScript. It allows users to search for job offers specifically in the field of programming, including React and other related technologies. `,
    description: `
    Dit is de vijfde app gebouwd aan de hand van de Professional React & Next.js cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-react-nextjs" target="blank" title="ByteGrad">ByteGrad</a>. RMTDEV is een cutting-edge React app met moderne best practices, React-Query, TypeScript en Context API. Deze app is een jobplatform. Het stelt gebruikers in staat om naar vacatures te zoeken specifiek op het gebied van programmeren, inclusief React en andere gerelateerde technologieën. 
    `,
    subjects: [
      'Composing app with Components',
      'Implement the searching feature',
      'Data (Search Query Params Vs Path Params)',
      'Where to Fetch Data? (UseEffect Vs Event Handler)',
      'Fetch API Anatomy',
      'Typing API Response (TypeScript)',
      'Prevent Prop Drilling',
      'Custom Hook Rules & Benefits',
      'Pagination with Derived State',
      'Benefits of Data in URL instead of State',
      'Rendering items, Loading State',
      'Debounce Search Text',
      'React Query',
      'Error Handling when Fetching Data',
      'Toast Messages',
      'Search result sorting',
      'Persist Data in LocalStorage',
      'UseRef',
      'State Management In Context API (Multiple Contexts, Dependency Between Them)',
      'UseMemo (Derived State, Context Value)',
      'UseCallback for Event Handler Functions',
    ],
    imgSrc: '/static/images/rmtdev-01.png',
    href: 'https://rmtdev-react.vercel.app/',
    github: 'https://github.com/DiedeKlink/rmtdev-react',
    slug: 'rmtdev',
    category: 'cursus',
  },

  {
    title: 'CorpComment (JS)',
    tech: 'Javascript',
    descriptionEn: `
    
    CorpComment is a platform built with Javascript. Users can leave comments about corporations using hashtags. This allows for easy categorization and searching of comments. Users can share their experiences, feedback, and opinions about different companies, helping others make informed decisions. The app supports real-time updates and displays trending hashtags related to corporations.
    `,
    description: `
    Dit is een app gebouwd aan de hand van de Professional Javascript cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-javascript" target="blank" title="ByteGrad">ByteGrad</a>. CorpComment is een platform gebouwd met Javascript. Gebruikers kunnen opmerkingen achterlaten over bedrijven met behulp van hashtags. Dit maakt eenvoudige categorisatie en zoeken van opmerkingen mogelijk. Gebruikers kunnen hun ervaringen, feedback en meningen over verschillende bedrijven delen, waardoor anderen weloverwogen beslissingen kunnen nemen. De app ondersteunt realtime updates en toont trending hashtags gerelateerd aan bedrijven.
    `,
    imgSrc: '/static/images/corpcomment-01.png',
    href: 'https://corpcomment-javascript.vercel.app/',
    github: 'https://github.com/DiedeKlink/CorpComment',
    slug: 'corpcomment-js',
    category: 'cursus',
  },
  {
    title: 'RMTDEV (JS)',
    tech: 'Javascript',
    descriptionEn: `
    
    RMTDEV is a job platform built with Javascript. It allows users to search for job offers specifically in the field of programming, including React and other related technologies. `,
    description: `
    Dit is een app gebouwd aan de hand van de Professional Javascript cursus van <a class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://bytegrad.com/courses/professional-javascript" target="blank" title="ByteGrad">ByteGrad</a>. RMTDEV is een jobplatform gebouwd met Javascript. Het stelt gebruikers in staat om naar vacatures te zoeken specifiek op het gebied van programmeren, inclusief React en andere gerelateerde technologieën. 
    `,
    imgSrc: '/static/images/rmtdev-01.png',
    href: 'https://rmtdev-javascript.vercel.app/',
    github: 'https://github.com/DiedeKlink/RMTDEV',
    slug: 'rmtdev-js',
    category: 'cursus',
  },
]

export default projectsData
