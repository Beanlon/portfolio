export const achievements = [
  {
    image: '/Certificate/TBhon (3).jpg',
    title: 'Best Innovation Award (Innovision 2026)',
    type: 'Award',
    placed: 'March 2026',
    description:
      `Recognized as the Best Innovation at Innovision 2026 for TBhon, a mobile tuberculosis screening application that combines AI, machine learning, 
      and IoT hardware to support preliminary patient assessment. 
      
      Based on my experience I realized that going beyond and exceeding expectations can always give you great opportunities and gets you to where you want to be. However it doesn't come without challenges so persevering and having patience is also key to become successful in what you want to do. Thinking ahead and surpassing your limits will always be an important part to innovation. Also understanding your team's strengths and weaknesess, their capabilities and their limits will also be important in better collaboration and communication which was vital for our achievements. Knowing how to manage these factors and encorporating these thoughts will change your overall mentality into achieving great things.`,
  },
  {
    image: '/Certificate/TBhon (2).jpg',
    title: 'Best AI & Intelligent System Project (Innovision 2026)',
    type: 'Award',
    placed: 'March 2026',
    description:
      `Awarded Best AI and Intelligent System Project at Innovision 2026 for developing an intelligent screening workflow that integrates predictive risk analysis with mobile and embedded device capture.

      Based on my experience I realized that going beyond and exceeding expectations can always give you great opportunities and gets you to where you want to be. However it doesn't come without challenges so persevering and having patience is also key to become successful in what you want to do. Thinking ahead and surpassing your limits will always be an important part to innovation. Also understanding your team's strengths and weaknesess, their capabilities and their limits will also be important in better collaboration and communication which was vital for our achievements. Knowing how to manage these factors and encorporating these thoughts will change your overall mentality into achieving great things.`,
  },
  {
    image: '/Certificate/TBhon.jpg',
    title: 'Best Data Driven Innovation (Innovision 2026)',
    type: 'Award',
    placed: 'March 2026',
    description:
      `Received Best Data Driven Innovation at Innovision 2026 for applying data-driven methods and model-based insights to improve tuberculosis screening decisions through structured patient data.

      Based on my experience I realized that going beyond and exceeding expectations can always give you great opportunities and gets you to where you want to be. However it doesn't come without challenges so persevering and having patience is also key to become successful in what you want to do. Thinking ahead and surpassing your limits will always be an important part to innovation. Also understanding your team's strengths and weaknesess, their capabilities and their limits will also be important in better collaboration and communication which was vital for our achievements. Knowing how to manage these factors and encorporating these thoughts will change your overall mentality into achieving great things.`,
  },
  {
    image: '/Certificate/Innovision-2026-CCIS-Participation.jpg',
    title: 'CCIS Innovision 2026 Certificate of Participation',
    type: 'Certification',
    placed: 'June 2026',
    description:
      'Recognized for actively participating in CCIS Innovision 2026: College Research, Innovation, and Project Colloquium, held on June 20, 2026 at the RG Birrey Building, Ma-a, Davao City — celebrating academic excellence, innovation, and research.',
  },
  {
    image: '/Certificate/InnoVision.jpg',
    title: 'Innovision 2026 Certificate of Participation (Eventflow)',
    type: 'Certification',
    placed: '2025',
    description:
      'Participated in Innovision 2026, Eventflow certificate is the basis of the attendance, Eventflow is an attendance tracking web app made by fellow students. Using facial recognition technology for easier attendance recording.',
  },
  {
    image: '/Certificate/IT-Specialist.jpg',
    title: 'ITS Java Certiport Certification',
    type: 'Certification',
    placed: '2025',
    description:
      'Earned the IT Specialist Java certification through Certiport, validating foundational knowledge of Java programming, object-oriented concepts, and practical software development skills.',
  },

  {
    image: '/Certificate/Input_And_Interaction.jpg',
    title: 'Input and Interaction',
    type: 'Online Course',
    placed: '2025',
    description:
      'Completed Input and Interaction, a UX-focused course on designing intuitive interfaces, understanding user input methods, and improving interaction patterns across digital products.',
  },
  {
    image: '/Certificate/Introduction_to_User_Experience_Design.jpg',
    title: 'Introduction to User Experience Design',
    type: 'Online Course',
    placed: '2025',
    description:
      'Completed Introduction to User Experience Design, learning core UX principles including user research, wireframing, usability, and designing experiences centered on real user needs.',
  },
]

export const featuredProjects = [
  {
    slug: 'tbhon',
    device: 'mobile',
    download:
      'https://expo.dev/accounts/mika_mika/projects/tbhon/builds/4c8b2666-bb10-40ad-a70b-8ab5ab5c52d5?fbclid=IwY2xjawSyL2lleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEedgF9ps1FJE0E161O_0C-jnHJbHS5MohW-uJuURufPmYiDywOKAeCh50_7Qk_aem_Adnp5WEqSghOhLp3MA1k2Q',
    href: '',
    repository: 'https://github.com/Beanlon/TBhon',
    backendRepository: 'https://github.com/Beanlon/TBhon-Backend',
    figma: 'https://www.figma.com/design/brPxvhfu0E5MfOvL9EyzN7/TBhon-System-Wireframes?m=auto&t=0f68Z8V5r2PoyanT-1',
    previewImages: ['/featured/Tbhon/Screen1.png', '/featured/Tbhon/Screen2.png'],
    images: [
      '/featured/Tbhon/Screen1.png',
      '/featured/Tbhon/Screen2.png',
      '/featured/Tbhon/Screen3.png',
      '/featured/Tbhon/Screen4.png',
      '/featured/Tbhon/Screen5.png',
      '/featured/Tbhon/Screen6.png',
      '/featured/Tbhon/Screen7.png',
    ],
    title: 'TBHON',
    placed: 'June 2026',
    subtitle: 'Staff-Operated TB Screening Support at the Edge',
    shortDescription:
      'Mobile TB pre-screening for community health booths in Davao City—symptom checklists, cough audio, sputum imaging, and optional IoT capture, with staff review before triage results.',
    description:
      'TBhon is a cross-platform mobile application used as a preliminary support screening tool for screening patients for tuberculosis. It uses AI with machine learning capabilities to automatically detect the likely percentage of risk that someone is likely to have tuberculosis. It uses an ESP-32 microcontroller with a camera and microphone module for recording audio and capturing images for microscopic sputum smears. It is developed using React Native so that it can handle both Android and iOS devices and DigitalOcean to host the backend, database, and the AI machine learning module.',
    techStack: [
      {
        category: 'Mobile App',
        repo: 'TBhon',
        items: [
          'React Native',
          'Expo',
          'TypeScript',
          'Expo Router',
          'NativeWind',
          'React Navigation',
          'Expo Camera',
          'Expo AV',
          'BLE (react-native-ble-plx)',
        ],
      },
      {
        category: 'Backend API',
        repo: 'Tbhon-Backend',
        items: [
          'Node.js',
          'Express',
          'TypeScript',
          'Prisma',
          'MariaDB',
          'JWT',
          'Swagger',
          'Multer',
          'Nodemailer',
        ],
      },
      {
        category: 'ML & Inference',
        repo: 'TBhon / ml',
        items: [
          'Python',
          'FastAPI',
          'Uvicorn',
          'PyTorch',
          'torchvision',
          'scikit-learn',
          'NumPy',
          'SciPy',
        ],
      },
      {
        category: 'Infrastructure & IoT',
        repo: 'TBhon / infra',
        items: ['DigitalOcean', 'Cloudflare Tunnel', 'ESP32', 'Camera Module', 'Microphone Module'],
      },
    ],
  },
  {
    slug: 'kelseys-homestay',
    device: 'desktop',
    download: '',
    href: 'https://www.kelseyshomestay.com/',
    repository: 'https://github.com/kelsey-developers',
    figma: 'https://www.figma.com/design/AkHkHoBuvtUg6d6CLAEk8L/Kelsey-s-Homestay?m=auto&t=0f68Z8V5r2PoyanT-1',
    previewImages: ['/featured/Kelsey/Image3.jpg'],
    images: ['/featured/Kelsey/Image3.jpg'],
    title: "Kelsey's Homestay",
    placed: 'March 2026',
    subtitle: 'Vacation rental & booking platform for Davao City',
    shortDescription:
      'A responsive group project for browsing homestay listings, viewing property details, and booking stays through a clean, mobile-friendly web experience.',
    description:
      "Kelsey's Homestay is a responsive vacation rental and booking platform for properties in Davao City, built as a group project with React and TypeScript. It lets visitors browse listings, view property details, and book stays through a clean, mobile-friendly interface focused on a smooth booking experience for travelers.",
    techStack: [
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Tailwind CSS'],
      },
    ],
  },
]

export function getFeaturedProjectBySlug(slug) {
  return featuredProjects.find((project) => project.slug === slug)
}

export const projects = [
  {
    href: 'https://github.com/Beanlon/TransactionLoggingSystem',
    image: '/projects/Image4.jpg',
    title: 'Transaction Logging System',
    description:
      'An individual project made purely out of Java using Java swing and filewriter.',
  },
  {
    href: 'https://restapi-pokedemo-mata-fedd8r8ka-jericmatas-projects.vercel.app/',
    image: '/projects/Image9.jpg',
    title: 'Poke API',
    description:
      'A website implementing REST API using PokeAPI to retrieve a catalog of pokemon',
  },
  {
    href: 'https://gamestack-one.vercel.app/',
    image: '/projects/Image8.jpg',
    title: 'Gamestack',
    description:
      'A website implementing REST API using Rawg.io to retrieve a library of games.',
  },
  {
    href: 'https://healthqueue-ph.vercel.app/',
    image: '/projects/image.png',
    title: 'HealthQueue PH',
    description:
      'A website about hopsital queuing using supabase, and typescript',
  },
]

/*//export const courseProjects = [
  {
    href: 'https://beanlon.github.io/GreenSense/',
    image: '/projects/Image5.jpg',
    title: 'Green Sense',
    description: 'A static website for greenspace farmers utilizing CSS and HTML.',
  },
  {
    href: 'https://beanlon.github.io/MATA_FA3_MachineProblem1/',
    image: '/projects/Image6.jpg',
    title: 'Replace All',
    description:
      'A static website with the fundamentals of javascipt to remove whitespaces of the input.',
  },
  {
    href: 'https://beanlon.github.io/MATA_FA3_MachineProblem4/',
    image: '/projects/Image7.jpg',
    title: 'Email Checker',
    description:
      'A static website with the fundamentals of javascipt to check if the email is valid.',
  },
  {
    href: 'https://restapi-pokedemo-mata-fedd8r8ka-jericmatas-projects.vercel.app/',
    image: '/projects/Image9.jpg',
    title: 'Poke API',
    description:
      'A website implementing REST API using PokeAPI to retrieve a catalog of pokemon',
  },
  {
    href: 'https://gamestack-one.vercel.app/',
    image: '/projects/Image8.jpg',
    title: 'Gamestack',
    description:
      'A website implementing REST API using Rawg.io to retrieve a library of games.',
  },
  {
    href: 'https://mata-fa-4-deploy-to-vercel.vercel.app/',
    image: '/projects/Image10.jpg',
    title: 'Tailwind Blog',
    description:
      'A website blog about using Taiilwind css. Using a tech stack of React and Node',
  },
  {
    href: 'https://healthqueue-ph.vercel.app/',
    image: '/projects/image.png',
    title: 'HealthQueue PH',
    description:
      'A website about hopsital queuing using supabase, and typescript',
  },
]*/
