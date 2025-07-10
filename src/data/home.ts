const parentPath = '/assets/icons/services/'
const parentSection1Path = '/assets/images/section1/'
const parentSection2Path = '/assets/images/section2/'
const parentSection3Path = '/assets/images/section3/'
const parentSection4path = '/assets/images/section4/'


export const services = [
    {
        name: "All Hotels & Resorts",
        icon: `${parentPath}hotels.svg`
    },
    {
        name: "Residences",
        icon: `${parentPath}residence.svg`
    },
    {
        name: "Villa & Residence",
        icon: `${parentPath}villa.svg`
    },
    {
        name: "Dining",
        icon: `${parentPath}dining.svg`
    },
    {
        name: "Private Jet",
        icon: `${parentPath}jet.svg`
    },
    {
        name: "Yachts",
        icon: `${parentPath}yacht.svg`
    },
    {
        name: "Summer Travel",
        icon: `${parentPath}summer.svg`
    },
]

export const section1 = [
  {
    title: "Destinations",
    description: "We can arrange remarkable travel experiences on all seven continents. Where do you want to go?",
    image: `${parentSection1Path}destinations.jpg`
  },
  {
    title: "Journeys",
    description: "Find your dream journey, whether you want to travel privately or with a group, by train, boat or plane.",
    image: `${parentSection1Path}journeys.jpg`
  },
  {
    title: "Stays",
    description: "Our collection of inspiring places to stay includes safari lodges, super-villas, and boutique riverboats.",
    image: `${parentSection1Path}stays.jpg`
  }
];

export const section2 = [
  {
    title: "Personalized Luxury Getaways",
    image: `${parentSection2Path}luxury1.jpg`
  },
  {
    title: "The Luxury Stay Collection",
    image: `${parentSection2Path}luxury2.jpg`
  }
]

export const section3 = [
  {
    title: "Hotel Partnerships",
    description: `We collaborate with a handpicked selection of the
    world’s finest hotels and resorts, each chosen for its
    exceptional standards, distinctive character, and
    commitment to excellence. From chic urban
    hideaways to serene beachfront sanctuaries and
    heritage-rich estates, our portfolio reflects a diverse
    array of experiences tailored to suit every traveler’s
    Our longstanding relationships with these esteemed
    properties allow us to offer our clients exclusive
    benefits—such as priority upgrades, late check-outs,
    complimentary amenities, and thoughtfully
    personalized touches.`,
  },
  {
    title: "365 Private Travel",
    description: `is a bespoke travel company specializing in curating
    exceptional, tailor-made journeys for discerning
    travelers. With a global network of elite partners and
    insider access to the world’s finest destinations,
    we offer seamless, personalized experiences whether
    it's a secluded island retreat, a private cultural tour, or
    an unforgettable city escape. Our dedicated travel
    advisors craft every itinerary with care, ensuring that
    every detail reflects your tastes, desires, and lifestyle.
    Discover the world in absolute comfort, privacy, and
    style—with 365 Private Travel, every journey is
    uniquely yours.`,
  },
  {
    title: "Small Group Journeys",
    description: `intimate, curated travel experiences designed for
    those who seek connection, discovery, and comfort.
    explore the world in the company of like-minded.`,
    image: `${parentSection3Path}journey.jpg`
  },
  {
    title: "Safari Experiences",
    description: `journey into the wild with bespoke safari adventures designed for the curious and the bold. from luxury tented
    camps to private game drives, discover untamed landscapes, majestic wildlife, and immersive moments that
    connect you to nature—crafted with comfort, elegance, and authenticity in every detail.`,
    image: `${parentSection3Path}zebra.jpg`
  }
]

export const section4 = [
  `${parentSection4path}img1.png`,
  `${parentSection4path}img2.png`,
  `${parentSection4path}img3.png`,
  `${parentSection4path}img4.png`,
  `${parentSection4path}img5.png`,
]

export interface ICountry {
  name: string, 
  images: string[]
}
export const countries: ICountry[] = [
  {
    name: 'Africa',
  images: [
      '',
      '',
    ],
  },
  {
    name: 'Antarctica & The Arctic',
    images: [
      '',
      '',
    ],
  },
  {
    name: 'Asia',
    images: [
      '',
      '',
    ],
  },
  {
    name: 'Australasia',
    images: [
      '',
      '',
    ],
  },
  {
    name: 'Central America',
    images: [
      '',
      '',
    ],
  },
  {
    name: 'Europe',
    images: [
      '/assets/images/drawer/europe1.jpg',
      '/assets/images/drawer/europe2.jpg',
    ],
  },
  {
    name: 'Indian Ocean',
    images: [
      '',
      '',
    ],
  },
  {
    name: 'Middle East & North Africa',
    images: [
      '',
      '',
    ],
  },
  {
    name: 'North America',
    images: [
      '',
      '',
    ],
  },
  {
    name: 'South America',
    images: [
      '',
      '',
    ],
  },
  {
    name: 'The Caribbean',
    images: [
      '',
      '',
    ],
  },
]

export interface IDestinations {
  country: string,
  image: string,
  cities: string[]
}
export const destinations:IDestinations[] = [
  {
    country: 'Europe',
    image: '',
    cities: ['France', 'Spain', 'Poland', 'Italia', 'Malta', 'Norway']
  }

]