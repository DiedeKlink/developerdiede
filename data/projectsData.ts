export type Project = {
  title: string
  description: string
  descriptionEn?: string
  href: string
  imgSrc?: string
  slug?: string
  tech: string
  github?: string
  category?: string
}

const projectsData: Project[] = [
  {
    title: 'Fancy Counter',
    tech: 'React',
    descriptionEn: `
    A simple counter app built with React. It features a button to increment the count and another button to decrement the count. The count can also be reset to zero.`,
    description: `
    Een eenvoudige teller-app gebouwd met React. Het bevat een knop om de telling te verhogen en een andere knop om de telling te verlagen. De telling kan ook worden teruggezet naar nul.`,
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
    Een eenvoudige woordanalyse-app gebouwd met React. Het bevat een tekstvak waarin je tekst kunt invoeren. De app toont vervolgens het aantal woorden, tekens en zinnen in de tekst.
    `,
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
    TrekBag is a to-do stijl app gebouwd met React. Het helpt je bij het bijhouden van items die je moet inpakken voor je roadtrip. Je kunt items toevoegen aan je inpaklijst, ze markeren als ingepakt en ze verwijderen zodra je klaar bent. Dit zorgt ervoor dat je nooit essentiële items voor je reis vergeet.
    `,
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
    CorpComment is een platform gebouwd met React. Gebruikers kunnen opmerkingen achterlaten over bedrijven met behulp van hashtags. Dit maakt eenvoudige categorisatie en zoeken van opmerkingen mogelijk. Gebruikers kunnen hun ervaringen, feedback en meningen over verschillende bedrijven delen, waardoor anderen weloverwogen beslissingen kunnen nemen. De app ondersteunt realtime updates en toont trending hashtags gerelateerd aan bedrijven.
    `,
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
    RMTDEV is een jobplatform gebouwd met React en TypeScript. Het stelt gebruikers in staat om naar vacatures te zoeken specifiek op het gebied van programmeren, inclusief React en andere gerelateerde technologieën. 
    `,
    imgSrc: '/static/images/rmtdev-01.png',
    href: 'https://rmtdev-react.vercel.app/',
    github: 'https://github.com/DiedeKlink/rmtdev-react',
    slug: 'rmtdev',
    category: 'cursus',
  },
  {
    title: 'EVENTO',
    tech: 'React, Next.js, TypeScript',
    descriptionEn: `
      EVENTO is a full-stack application built with React and Next.js. It allows users to find events happening near them. Users can search for events based on their location, view event details, and even get directions to the event venue. The app provides a seamless experience for discovering local events and staying updated with what's happening around them.
      `,
    description: `
      EVENTO is een full-stack applicatie gebouwd met React en Next.js. Het stelt gebruikers in staat om evenementen bij hen in de buurt te vinden. Gebruikers kunnen zoeken naar evenementen op basis van hun locatie, evenementdetails bekijken en zelfs routebeschrijvingen naar de evenementlocatie krijgen. De app biedt een naadloze ervaring voor het ontdekken van lokale evenementen en het op de hoogte blijven van wat er in de buurt gebeurt.
      `,
    imgSrc: '/static/images/evento-01.png',
    href: 'https://evento-five-sage.vercel.app/',
    github: 'https://github.com/DiedeKlink/evento',
    slug: 'evento',
    category: 'cursus',
  },
  {
    title: 'PetSoft',
    tech: 'React, Next.js, TypeScript',
    descriptionEn: `
    PetSoft is a cutting-edge application built with React and Next.js for pet daycares. It allows users to keep track of the pets currently checked in at the daycare. Users can add new pets, edit pet information, and check out pets when they leave. This ensures efficient management of pet records and provides a seamless experience for daycare staff.
    `,
    description: `
    PetSoft is een geavanceerde applicatie gebouwd met React en Next.js voor dierenopvangcentra. Het stelt gebruikers in staat om bij te houden welke huisdieren momenteel in de opvang zijn ingecheckt. Gebruikers kunnen nieuwe huisdieren toevoegen, informatie over huisdieren bewerken en huisdieren uitchecken wanneer ze vertrekken. Dit zorgt voor een efficiënte administratie van huisdiergegevens en biedt een naadloze ervaring voor het opvangpersoneel.
    `,
    imgSrc: '/static/images/petsoft-01.png',
    href: 'https://petsoft-zeta.vercel.app/',
    github: 'https://github.com/DiedeKlink/petsoft',
    slug: 'petsoft',
    category: 'cursus',
  },
  {
    title: 'CorpComment (JS)',
    tech: 'Javascript',
    descriptionEn: `
    CorpComment is a platform built with Javascript. Users can leave comments about corporations using hashtags. This allows for easy categorization and searching of comments. Users can share their experiences, feedback, and opinions about different companies, helping others make informed decisions. The app supports real-time updates and displays trending hashtags related to corporations.
    `,
    description: `
    CorpComment is een platform gebouwd met Javascript. Gebruikers kunnen opmerkingen achterlaten over bedrijven met behulp van hashtags. Dit maakt eenvoudige categorisatie en zoeken van opmerkingen mogelijk. Gebruikers kunnen hun ervaringen, feedback en meningen over verschillende bedrijven delen, waardoor anderen weloverwogen beslissingen kunnen nemen. De app ondersteunt realtime updates en toont trending hashtags gerelateerd aan bedrijven.
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
    RMTDEV is een jobplatform gebouwd met Javascript. Het stelt gebruikers in staat om naar vacatures te zoeken specifiek op het gebied van programmeren, inclusief React en andere gerelateerde technologieën. 
    `,
    imgSrc: '/static/images/rmtdev-01.png',
    href: 'https://rmtdev-javascript.vercel.app/',
    github: 'https://github.com/DiedeKlink/RMTDEV',
    slug: 'rmtdev-js',
    category: 'cursus',
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
    imgSrc: '/static/images/rmtdev-01.png',
    href: '/LiftTracker.apk',
    github: 'https://github.com/DiedeKlink/LiftTracker',
    slug: 'lifttracker',
    category: 'hobby',
  },
]

export default projectsData
