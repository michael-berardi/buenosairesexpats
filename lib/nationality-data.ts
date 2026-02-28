/**
 * Argentina visa requirements by nationality
 * 
 * Data sources:
 * - Argentine National Directorate of Migration: https://www.migraciones.gov.ar
 * - Ministry of Foreign Affairs: https://www.cancilleria.gob.ar
 * - Mercosur agreements and bilateral treaties
 * 
 * Last verified: 2026-02-28
 * 
 * IMPORTANT: Visa requirements change frequently. Always verify current 
 * requirements on official government websites before traveling.
 */

export type VisaStatus = "exempt" | "required";
export type StayDuration = 30 | 60 | 90;
export type Region = "americas" | "europe" | "asia-pacific" | "africa-middle-east";

export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  region: Region;
  visaStatus: VisaStatus;
  stayDuration: StayDuration;
  specialConditions?: string[];
  commonConcerns: string[];
  consulateInfo?: {
    hasConsulate: boolean;
    cities?: string[];
    notes?: string;
  };
  processingTime?: string;
  visaFee?: string;
  notes?: string;
  image?: string;
  imageAlt?: string;
  /** URL to official source for verification */
  sourceUrl?: string;
}

// Top 50 priority countries based on tourism data and search potential
export const countries: CountryData[] = [
  // MERCOSUR & South America (highest visitor volume)
  {
    slug: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Mercosur member - can enter with ID card", "No passport required for land border crossings"],
    commonConcerns: [
      "Can I enter with just my Brazilian ID (RG)?",
      "Do I need a passport to fly to Argentina?",
      "How long can I stay as a Mercosur citizen?",
      "Can I work in Argentina with just my ID?",
      "What documents do I need to cross the border by bus?"
    ],
    notes: "As a Mercosur member, Brazilian citizens enjoy simplified entry procedures and can enter Argentina using only their national ID card (RG). This applies to land, sea, and air borders.",
    image: "/images/countries/brazil-landmark.jpg",
    imageAlt: "Rio de Janeiro with Christ the Redeemer - representing Brazilian travelers to Argentina"
  },
  {
    slug: "chile",
    name: "Chile",
    flag: "🇨🇱",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Mercosur member - can enter with ID card", "Cristo Redentor border crossing popular for land entry"],
    commonConcerns: [
      "Can I use my Chilean ID (Cedula) instead of passport?",
      "What's the best border crossing from Santiago?",
      "Do I need anything besides my ID for entry?",
      "Can I stay longer than 90 days?",
      "What about the reciprocity fee - is it still required?"
    ],
    notes: "Chilean citizens can enter Argentina with just their Cedula de Identidad. The Cristo Redentor pass is the most popular land border crossing between Santiago and Mendoza.",
    image: "/images/countries/chile-landmark.jpg",
    imageAlt: "Santiago skyline with Andes mountains - representing Chilean travelers to Argentina"
  },
  {
    slug: "uruguay",
    name: "Uruguay",
    flag: "🇺🇾",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Mercosur member - can enter with ID card", "Ferry connections from Colonia and Montevideo"],
    commonConcerns: [
      "Can I take the ferry from Colonia with just my ID?",
      "Do I need a passport to fly from Montevideo?",
      "How long can Uruguayans stay in Argentina?",
      "Can I live in Argentina while working in Uruguay?",
      "What documents do I need for the Buquebus ferry?"
    ],
    notes: "Uruguayan citizens enjoy the easiest access to Argentina, with frequent ferry services from Colonia and Montevideo to Buenos Aires accepting national ID cards.",
    image: "/images/countries/uruguay-landmark.jpg",
    imageAlt: "Montevideo waterfront and old city - representing Uruguayan travelers to Argentina"
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    flag: "🇵🇾",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Mercosur member - can enter with ID card"],
    commonConcerns: [
      "Can I enter with my Paraguayan ID?",
      "What border crossings are available?",
      "Do I need a passport for flights?",
      "Can I work legally in Argentina?"
    ],
    notes: "Paraguayan citizens can enter with their Cedula de Identidad and enjoy Mercosur privileges including simplified residency pathways."
  },
  {
    slug: "bolivia",
    name: "Bolivia",
    flag: "🇧🇴",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Mercosur member - can enter with ID card"],
    commonConcerns: [
      "Can I use my Bolivian ID to enter Argentina?",
      "What are the border crossing options?",
      "Do I need a yellow fever certificate?",
      "Can I extend my stay beyond 90 days?"
    ],
    notes: "Bolivian citizens benefit from Mercosur membership, allowing entry with national ID card. Popular border crossings include Villazon-La Quiaca and Yacuiba."
  },
  {
    slug: "peru",
    name: "Peru",
    flag: "🇵🇪",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Can enter with ID card if arriving from Mercosur country"],
    commonConcerns: [
      "Do I need a visa for Argentina?",
      "Can I enter with my DNI?",
      "How long can Peruvians stay?",
      "Do I need a yellow fever certificate?",
      "What if I'm flying directly from Lima?"
    ],
    notes: "Peruvian citizens can enter Argentina visa-free for up to 90 days. If arriving from a Mercosur country, they may use their DNI; otherwise, a passport is required.",
    image: "/images/countries/peru-landmark.jpg",
    imageAlt: "Machu Picchu with Andes mountains - representing Peruvian travelers to Argentina"
  },
  {
    slug: "ecuador",
    name: "Ecuador",
    flag: "🇪🇨",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Can enter with ID card if arriving from Mercosur country"],
    commonConcerns: [
      "Is a visa required for Ecuadorians?",
      "Can I use my Ecuadorian ID?",
      "How long can I stay in Argentina?",
      "Do I need to show proof of funds?"
    ],
    notes: "Ecuadorian citizens enjoy visa-free entry for 90 days. ID card entry is permitted when arriving from Mercosur countries."
  },
  {
    slug: "colombia",
    name: "Colombia",
    flag: "🇨🇴",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Can enter with ID card if arriving from Mercosur country"],
    commonConcerns: [
      "Do Colombian citizens need a visa?",
      "Can I enter with my Colombian ID?",
      "How long can I stay?",
      "Is there a reciprocity fee?",
      "Can I extend my tourist stay?"
    ],
    notes: "Colombian citizens can visit Argentina visa-free for up to 90 days. Direct flights from Bogota to Buenos Aires are available with multiple carriers.",
    image: "/images/countries/colombia-landmark.jpg",
    imageAlt: "Bogota cityscape with mountains - representing Colombian travelers to Argentina"
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    flag: "🇻🇪",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 60,
    specialConditions: ["Mercosur member - can enter with ID card (even expired in some cases)", "60 days stay (shorter than other Mercosur members)"],
    commonConcerns: [
      "Can I enter with an expired Venezuelan passport?",
      "Can I use my Venezuelan ID (Cedula)?",
      "Why is the stay only 60 days?",
      "Can I extend my stay?",
      "What if I have a temporary passport?"
    ],
    notes: "Venezuelan citizens receive 60 days (not 90) but can enter with national ID. Argentina recognizes expired Venezuelan passports under certain conditions due to the ongoing crisis."
  },
  // North America
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Reciprocity fee no longer required as of 2016", "ESTA not required for Argentina"],
    commonConcerns: [
      "Do US citizens need a visa for Argentina?",
      "Is there a reciprocity fee?",
      "How long can Americans stay?",
      "Do I need 6 months passport validity?",
      "Can I extend my 90-day stay?",
      "What about dual citizenship with children?",
      "Do minors need special documentation?"
    ],
    notes: "US citizens enjoy visa-free entry for 90 days. The reciprocity fee was eliminated in 2016. Passport should be valid for the duration of stay. Parents traveling alone with children may need notarized permission from the other parent.",
    image: "/images/countries/usa-landmark.jpg",
    imageAlt: "New York City skyline with Statue of Liberty - representing United States travelers to Argentina"
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Reciprocity fee no longer required"],
    commonConcerns: [
      "Do Canadians need a visa for Argentina?",
      "Is there a reciprocity fee for Canadians?",
      "How long can Canadian tourists stay?",
      "Do I need 6 months on my passport?",
      "Can I extend my stay?",
      "What about dual Canadian-Argentine citizens?"
    ],
    notes: "Canadian citizens can visit Argentina visa-free for 90 days. The reciprocity fee was eliminated. Dual citizens should note that Argentine citizens must enter and exit Argentina on their Argentine passport.",
    image: "/images/countries/canada-landmark.jpg",
    imageAlt: "Toronto skyline with CN Tower - representing Canadian travelers to Argentina"
  },
  {
    slug: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Mexican citizens need a visa?",
      "How long can Mexicans stay in Argentina?",
      "Are there direct flights from Mexico City?",
      "Can I work on a tourist visa?",
      "How do I extend my stay?"
    ],
    notes: "Mexican citizens enjoy visa-free entry for 90 days. Multiple airlines offer direct flights from Mexico City to Buenos Aires.",
    image: "/images/countries/mexico-landmark.jpg",
    imageAlt: "Mexico City skyline with historic center - representing Mexican travelers to Argentina"
  },
  // Europe (Major markets)
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Spanish citizens need a visa?",
      "How long can EU citizens stay?",
      "Can I work in Argentina as a Spaniard?",
      "Do I need to register somewhere?",
      "Can I use my Spanish ID (DNI) instead of passport?"
    ],
    notes: "Spanish citizens, as EU members, enjoy visa-free entry for 90 days. Strong historical and cultural ties exist between Spain and Argentina, making it a popular destination for Spanish travelers.",
    image: "/images/countries/spain-landmark.jpg",
    imageAlt: "Barcelona skyline with Sagrada Familia - representing Spanish travelers to Argentina"
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["British Subject or British Protected Person passports NOT eligible for visa exemption"],
    commonConcerns: [
      "Do UK citizens need a visa for Argentina?",
      "How long can British tourists stay?",
      "What about Brexit - did anything change?",
      "Do I need 6 months passport validity?",
      "Can I extend my stay beyond 90 days?",
      "What if I have a British National (Overseas) passport?"
    ],
    notes: "British citizens can visit visa-free for 90 days. Brexit did not affect visa requirements. Passport must be valid for the proposed duration of stay. British National (Overseas) passport holders from Hong Kong have different requirements.",
    image: "/images/countries/uk-landmark.jpg",
    imageAlt: "London skyline with Big Ben and Thames - representing UK travelers to Argentina"
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do German citizens need a visa?",
      "How long can Germans stay in Argentina?",
      "Can I work on a tourist visa?",
      "Do I need to register with authorities?",
      "Are there German-speaking communities in Buenos Aires?"
    ],
    notes: "German citizens enjoy visa-free entry for 90 days. Buenos Aires has a significant German expat community, particularly in neighborhoods like Belgrano.",
    image: "/images/countries/germany-landmark.jpg",
    imageAlt: "Berlin skyline with Brandenburg Gate - representing German travelers to Argentina"
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do French citizens need a visa?",
      "How long can French tourists stay?",
      "Is there a French community in Buenos Aires?",
      "Can I extend my stay?",
      "Do I need proof of onward travel?"
    ],
    notes: "French citizens can visit Argentina visa-free for 90 days. Buenos Aires has strong French cultural influence and an active French community.",
    image: "/images/countries/france-landmark.jpg",
    imageAlt: "Paris skyline with Eiffel Tower - representing French travelers to Argentina"
  },
  {
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Italians need a visa for Argentina?",
      "How long can Italian citizens stay?",
      "Can I get Italian citizenship through ancestry?",
      "Is there a large Italian community?",
      "Can I extend my stay?"
    ],
    notes: "Italian citizens enjoy visa-free entry for 90 days. Argentina has the largest Italian population outside of Italy, with deep cultural connections. Many Argentines have Italian ancestry and can claim Italian citizenship.",
    image: "/images/countries/italy-landmark.jpg",
    imageAlt: "Rome skyline with Colosseum - representing Italian travelers to Argentina"
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Dutch citizens need a visa?",
      "How long can Dutch tourists stay?",
      "Can I work remotely from Argentina?",
      "Do I need health insurance?"
    ],
    notes: "Dutch citizens can visit visa-free for 90 days. The Netherlands and Argentina maintain strong diplomatic and trade relations.",
    image: "/images/countries/netherlands-landmark.jpg",
    imageAlt: "Amsterdam canals with traditional houses - representing Dutch travelers to Argentina"
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Swiss citizens need a visa?",
      "How long can Swiss tourists stay?",
      "Can I extend my stay?",
      "Do I need to register?"
    ],
    notes: "Swiss citizens enjoy visa-free entry for 90 days. Switzerland and Argentina have strong economic ties and a double taxation agreement.",
    image: "/images/countries/switzerland-landmark.jpg",
    imageAlt: "Swiss Alps with Matterhorn - representing Swiss travelers to Argentina"
  },
  // Asia-Pacific
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Australians need a visa for Argentina?",
      "How long can Australians stay?",
      "Are there direct flights from Australia?",
      "Do I need 6 months passport validity?",
      "Can I extend my stay?"
    ],
    notes: "Australian citizens enjoy visa-free entry for 90 days. No direct flights exist; common routes transit through Santiago, Auckland, or Los Angeles.",
    image: "/images/countries/australia-landmark.jpg",
    imageAlt: "Sydney Opera House and Harbour Bridge - representing Australian travelers to Argentina"
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Japanese citizens need a visa?",
      "How long can Japanese tourists stay?",
      "Are there direct flights from Tokyo?",
      "Can I extend my stay?",
      "Do I need to register somewhere?"
    ],
    notes: "Japanese citizens can visit Argentina visa-free for 90 days. ANA operates direct flights between Tokyo and Buenos Aires.",
    image: "/images/countries/japan-landmark.jpg",
    imageAlt: "Tokyo skyline with Mount Fuji - representing Japanese travelers to Argentina"
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do New Zealanders need a visa?",
      "How long can Kiwis stay?",
      "Are there direct flights?"
    ],
    notes: "New Zealand citizens can visit visa-free for 90 days.",
    image: "/images/countries/new-zealand-landmark.jpg",
    imageAlt: "Auckland skyline with Sky Tower - representing New Zealand travelers to Argentina"
  },
  {
    slug: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do South Koreans need a visa?",
      "How long can Koreans stay?",
      "Are there direct flights from Seoul?"
    ],
    notes: "South Korean citizens enjoy visa-free entry for 90 days.",
    image: "/images/countries/south-korea-landmark.jpg",
    imageAlt: "Seoul skyline with modern architecture - representing South Korean travelers to Argentina"
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Singaporeans need a visa?",
      "How long can Singaporeans stay?"
    ],
    notes: "Singaporean citizens can visit visa-free for 90 days."
  },
  // Additional European Countries (Batch 2)
  {
    slug: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Portuguese citizens need a visa?",
      "How long can Portuguese tourists stay?",
      "Can I extend my stay?"
    ],
    notes: "Portuguese citizens enjoy visa-free entry for 90 days as EU members.",
    image: "/images/countries/portugal-landmark.jpg",
    imageAlt: "Lisbon skyline with historic trams - representing Portuguese travelers to Argentina"
  },
  {
    slug: "belgium",
    name: "Belgium",
    flag: "🇧🇪",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Belgian citizens need a visa?",
      "How long can Belgians stay?"
    ],
    notes: "Belgian citizens can visit visa-free for 90 days.",
    image: "/images/countries/belgium-landmark.jpg",
    imageAlt: "Brussels Grand Place with historic buildings - representing Belgian travelers to Argentina"
  },
  {
    slug: "austria",
    name: "Austria",
    flag: "🇦🇹",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Austrian citizens need a visa?",
      "How long can Austrians stay?"
    ],
    notes: "Austrian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Swedish citizens need a visa?",
      "How long can Swedes stay?"
    ],
    notes: "Swedish citizens can visit visa-free for 90 days."
  },
  {
    slug: "norway",
    name: "Norway",
    flag: "🇳🇴",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Norwegian citizens need a visa?",
      "How long can Norwegians stay?"
    ],
    notes: "Norwegian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Danish citizens need a visa?",
      "How long can Danes stay?"
    ],
    notes: "Danish citizens can visit visa-free for 90 days."
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Finnish citizens need a visa?",
      "How long can Finns stay?"
    ],
    notes: "Finnish citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Irish citizens need a visa?",
      "How long can Irish tourists stay?"
    ],
    notes: "Irish citizens can visit visa-free for 90 days.",
    image: "/images/countries/ireland-landmark.jpg",
    imageAlt: "Dublin with historic Georgian architecture - representing Irish travelers to Argentina"
  },
  {
    slug: "poland",
    name: "Poland",
    flag: "🇵🇱",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Polish citizens need a visa?",
      "How long can Poles stay?"
    ],
    notes: "Polish citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "czech-republic",
    name: "Czech Republic",
    flag: "🇨🇿",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Czech citizens need a visa?",
      "How long can Czechs stay?"
    ],
    notes: "Czech citizens can visit visa-free for 90 days."
  },
  {
    slug: "greece",
    name: "Greece",
    flag: "🇬🇷",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Greek citizens need a visa?",
      "How long can Greeks stay?"
    ],
    notes: "Greek citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Hungarian citizens need a visa?",
      "How long can Hungarians stay?"
    ],
    notes: "Hungarian citizens can visit visa-free for 90 days."
  },
  {
    slug: "romania",
    name: "Romania",
    flag: "🇷🇴",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Romanian citizens need a visa?",
      "How long can Romanians stay?"
    ],
    notes: "Romanian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "bulgaria",
    name: "Bulgaria",
    flag: "🇧🇬",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Bulgarian citizens need a visa?",
      "How long can Bulgarians stay?"
    ],
    notes: "Bulgarian citizens can visit visa-free for 90 days."
  },
  {
    slug: "croatia",
    name: "Croatia",
    flag: "🇭🇷",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Croatian citizens need a visa?",
      "How long can Croatians stay?"
    ],
    notes: "Croatian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "slovakia",
    name: "Slovakia",
    flag: "🇸🇰",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Slovak citizens need a visa?",
      "How long can Slovaks stay?"
    ],
    notes: "Slovak citizens can visit visa-free for 90 days."
  },
  {
    slug: "slovenia",
    name: "Slovenia",
    flag: "🇸🇮",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Slovenian citizens need a visa?",
      "How long can Slovenians stay?"
    ],
    notes: "Slovenian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "luxembourg",
    name: "Luxembourg",
    flag: "🇱🇺",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Luxembourgish citizens need a visa?",
      "How long can Luxembourgish tourists stay?"
    ],
    notes: "Luxembourgish citizens can visit visa-free for 90 days."
  },
  {
    slug: "estonia",
    name: "Estonia",
    flag: "🇪🇪",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Estonian citizens need a visa?",
      "How long can Estonians stay?"
    ],
    notes: "Estonian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "latvia",
    name: "Latvia",
    flag: "🇱🇻",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Latvian citizens need a visa?",
      "How long can Latvians stay?"
    ],
    notes: "Latvian citizens can visit visa-free for 90 days."
  },
  {
    slug: "lithuania",
    name: "Lithuania",
    flag: "🇱🇹",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Lithuanian citizens need a visa?",
      "How long can Lithuanians stay?"
    ],
    notes: "Lithuanian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "malta",
    name: "Malta",
    flag: "🇲🇹",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member"],
    commonConcerns: [
      "Do Maltese citizens need a visa?",
      "How long can Maltese tourists stay?"
    ],
    notes: "Maltese citizens can visit visa-free for 90 days."
  },
  {
    slug: "iceland",
    name: "Iceland",
    flag: "🇮🇸",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Icelandic citizens need a visa?",
      "How long can Icelanders stay?"
    ],
    notes: "Icelandic citizens can visit visa-free for 90 days."
  },
  {
    slug: "liechtenstein",
    name: "Liechtenstein",
    flag: "🇱🇮",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Liechtenstein citizens need a visa?",
      "How long can they stay?"
    ],
    notes: "Liechtenstein citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "monaco",
    name: "Monaco",
    flag: "🇲🇨",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Monegasque citizens need a visa?",
      "How long can Monegasque tourists stay?"
    ],
    notes: "Monegasque citizens can visit visa-free for 90 days."
  },
  {
    slug: "andorra",
    name: "Andorra",
    flag: "🇦🇩",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Andorran citizens need a visa?",
      "How long can Andorrans stay?"
    ],
    notes: "Andorran citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "san-marino",
    name: "San Marino",
    flag: "🇸🇲",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Sammarinese citizens need a visa?",
      "How long can they stay?"
    ],
    notes: "Sammarinese citizens can visit visa-free for 90 days."
  },
  {
    slug: "vatican-city",
    name: "Vatican City",
    flag: "🇻🇦",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Vatican citizens need a visa?",
      "How long can they stay?"
    ],
    notes: "Vatican citizens enjoy visa-free entry for 90 days."
  },
  // Additional Asia-Pacific Countries
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 30,
    specialConditions: ["30 days only (shorter than most exempt countries)"],
    commonConcerns: [
      "Do Malaysians need a visa?",
      "Why is the stay only 30 days?",
      "Can I extend my stay?"
    ],
    notes: "Malaysian citizens receive 30 days visa-free (shorter than the standard 90 days)."
  },
  {
    slug: "thailand",
    name: "Thailand",
    flag: "🇹🇭",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Thai citizens need a visa?",
      "How long can Thais stay?"
    ],
    notes: "Thai citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "hong-kong",
    name: "Hong Kong",
    flag: "🇭🇰",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 30,
    specialConditions: ["30 days for HKSAR passport holders", "Must be resident of Hong Kong"],
    commonConcerns: [
      "Do Hong Kong residents need a visa?",
      "What about BNO passport holders?",
      "Why only 30 days?"
    ],
    notes: "Hong Kong Special Administrative Region passport holders receive 30 days. British National (Overseas) passport holders may have different requirements."
  },
  {
    slug: "macao",
    name: "Macao",
    flag: "🇲🇴",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 30,
    specialConditions: ["30 days for MSAR passport holders"],
    commonConcerns: [
      "Do Macao residents need a visa?",
      "How long can Macao passport holders stay?"
    ],
    notes: "Macao Special Administrative Region passport holders receive 30 days visa-free."
  },
  {
    slug: "israel",
    name: "Israel",
    flag: "🇮🇱",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Israeli citizens need a visa?",
      "How long can Israelis stay?",
      "Are there any special security procedures?"
    ],
    notes: "Israeli citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Turkish citizens need a visa?",
      "How long can Turkish tourists stay?"
    ],
    notes: "Turkish citizens can visit visa-free for 90 days."
  },
  {
    slug: "south-africa",
    name: "South Africa",
    flag: "🇿🇦",
    region: "africa-middle-east",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do South Africans need a visa?",
      "How long can South Africans stay?",
      "Do I need a yellow fever certificate?"
    ],
    notes: "South African citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "qatar",
    name: "Qatar",
    flag: "🇶🇦",
    region: "africa-middle-east",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Qatari citizens need a visa?",
      "How long can Qataris stay?"
    ],
    notes: "Qatari citizens can visit visa-free for 90 days."
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    region: "africa-middle-east",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do UAE citizens need a visa?",
      "How long can Emiratis stay?"
    ],
    notes: "UAE citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "georgia",
    name: "Georgia",
    flag: "🇬🇪",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Georgian citizens need a visa?",
      "How long can Georgians stay?"
    ],
    notes: "Georgian citizens can visit visa-free for 90 days."
  },
  {
    slug: "barbados",
    name: "Barbados",
    flag: "🇧🇧",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Barbadians need a visa?",
      "How long can Barbadians stay?"
    ],
    notes: "Barbadian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "trinidad-and-tobago",
    name: "Trinidad and Tobago",
    flag: "🇹🇹",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Trinidadians need a visa?",
      "How long can Trinidadians stay?"
    ],
    notes: "Trinidadian and Tobagonian citizens can visit visa-free for 90 days."
  },
  {
    slug: "jamaica",
    name: "Jamaica",
    flag: "🇯🇲",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 30,
    specialConditions: ["30 days only"],
    commonConcerns: [
      "Do Jamaicans need a visa?",
      "Why is the stay only 30 days?",
      "Can I extend my stay?"
    ],
    notes: "Jamaican citizens receive 30 days visa-free."
  },
  {
    slug: "grenada",
    name: "Grenada",
    flag: "🇬🇩",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 30,
    specialConditions: ["30 days only"],
    commonConcerns: [
      "Do Grenadians need a visa?",
      "How long can Grenadians stay?"
    ],
    notes: "Grenadian citizens receive 30 days visa-free."
  },
  {
    slug: "saint-lucia",
    name: "Saint Lucia",
    flag: "🇱🇨",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Saint Lucians need a visa?",
      "How long can Saint Lucians stay?"
    ],
    notes: "Saint Lucian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "saint-vincent-and-the-grenadines",
    name: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Vincentians need a visa?",
      "How long can they stay?"
    ],
    notes: "Citizens of Saint Vincent and the Grenadines can visit visa-free for 90 days."
  },
  {
    slug: "saint-kitts-and-nevis",
    name: "Saint Kitts and Nevis",
    flag: "🇰🇳",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Kittitians need a visa?",
      "How long can they stay?"
    ],
    notes: "Citizens of Saint Kitts and Nevis enjoy visa-free entry for 90 days."
  },
  {
    slug: "dominica",
    name: "Dominica",
    flag: "🇩🇲",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Dominicans need a visa?",
      "How long can Dominicans stay?"
    ],
    notes: "Dominican citizens (Commonwealth of Dominica) can visit visa-free for 90 days."
  },
  {
    slug: "fiji",
    name: "Fiji",
    flag: "🇫🇯",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Fijians need a visa?",
      "How long can Fijians stay?"
    ],
    notes: "Fijian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "kazakhstan",
    name: "Kazakhstan",
    flag: "🇰🇿",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 30,
    specialConditions: ["30 days within any 1 calendar year"],
    commonConcerns: [
      "Do Kazakhstan citizens need a visa?",
      "How long can Kazakhstanis stay?",
      "What does 30 days in a year mean?"
    ],
    notes: "Kazakhstani citizens receive 30 days visa-free within any calendar year."
  },
  {
    slug: "mongolia",
    name: "Mongolia",
    flag: "🇲🇳",
    region: "asia-pacific",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Mongolian citizens need a visa?",
      "How long can Mongolians stay?"
    ],
    notes: "Mongolian citizens can visit visa-free for 90 days."
  },
  {
    slug: "russia",
    name: "Russia",
    flag: "🇷🇺",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["90 days within any 180-day period"],
    commonConcerns: [
      "Do Russian citizens need a visa?",
      "How long can Russians stay?",
      "What does 90 in 180 days mean?",
      "Are there any current restrictions?"
    ],
    notes: "Russian citizens enjoy visa-free entry for 90 days within any 180-day period."
  },
  {
    slug: "ukraine",
    name: "Ukraine",
    flag: "🇺🇦",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["90 days within any 180-day period"],
    commonConcerns: [
      "Do Ukrainian citizens need a visa?",
      "How long can Ukrainians stay?",
      "What does 90 days within 180 days mean?"
    ],
    notes: "Ukrainian citizens enjoy visa-free entry for 90 days within any 180-day period."
  },
  {
    slug: "belarus",
    name: "Belarus",
    flag: "🇧🇾",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["90 days within any 1 calendar year"],
    commonConcerns: [
      "Do Belarusian citizens need a visa?",
      "How long can Belarusians stay?",
      "What does 90 days in a year mean?"
    ],
    notes: "Belarusian citizens enjoy visa-free entry for 90 days within any calendar year."
  },
  {
    slug: "serbia",
    name: "Serbia",
    flag: "🇷🇸",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Serbian citizens need a visa?",
      "How long can Serbians stay?"
    ],
    notes: "Serbian citizens can visit visa-free for 90 days."
  },
  {
    slug: "montenegro",
    name: "Montenegro",
    flag: "🇲🇪",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Montenegrin citizens need a visa?",
      "How long can Montenegrins stay?"
    ],
    notes: "Montenegrin citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "north-macedonia",
    name: "North Macedonia",
    flag: "🇲🇰",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Macedonian citizens need a visa?",
      "How long can Macedonians stay?"
    ],
    notes: "Macedonian citizens can visit visa-free for 90 days."
  },
  {
    slug: "bosnia-and-herzegovina",
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Bosnian citizens need a visa?",
      "How long can Bosnians stay?"
    ],
    notes: "Bosnian citizens enjoy visa-free entry for 90 days."
  },
  {
    slug: "albania",
    name: "Albania",
    flag: "🇦🇱",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Albanian citizens need a visa?",
      "How long can Albanians stay?"
    ],
    notes: "Albanian citizens can visit visa-free for 90 days."
  },
  {
    slug: "armenia",
    name: "Armenia",
    flag: "🇦🇲",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["90 days within any 180-day period"],
    commonConcerns: [
      "Do Armenian citizens need a visa?",
      "How long can Armenians stay?"
    ],
    notes: "Armenian citizens enjoy visa-free entry for 90 days within any 180-day period."
  },
  // Visa-Required Countries (Batch 5 - to reach 100 total)
  {
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    region: "asia-pacific",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Indians apply for an Argentina visa?",
      "What documents are required for Indian citizens?",
      "How long does visa processing take?",
      "Where is the Argentine consulate in India?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["New Delhi", "Mumbai"],
      notes: "Argentine Embassy in New Delhi and Consulate General in Mumbai process visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Indian citizens must obtain a visa before traveling to Argentina. Apply at the Argentine Embassy in New Delhi or Consulate General in Mumbai."
  },
  {
    slug: "china",
    name: "China",
    flag: "🇨🇳",
    region: "asia-pacific",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Chinese citizens apply for an Argentina visa?",
      "What documents are required?",
      "How long does processing take?",
      "Where are the Argentine consulates in China?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Beijing", "Shanghai", "Guangzhou"],
      notes: "Argentine Embassy in Beijing and Consulates General in Shanghai and Guangzhou."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Chinese citizens must obtain a visa before traveling. Argentina has an embassy in Beijing and consulates in Shanghai and Guangzhou."
  },
  {
    slug: "pakistan",
    name: "Pakistan",
    flag: "🇵🇰",
    region: "asia-pacific",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Pakistanis apply for an Argentina visa?",
      "What documents are required?",
      "How long does processing take?",
      "Is there an Argentine consulate in Pakistan?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Pakistani citizens should contact the Argentine embassy in New Delhi, India or Beijing, China."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Pakistani citizens must obtain a visa before traveling. The nearest Argentine diplomatic mission is in New Delhi or Beijing."
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "🇧🇩",
    region: "asia-pacific",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Bangladeshis apply for an Argentina visa?",
      "What documents are required?",
      "Where is the nearest Argentine consulate?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Bangladeshi citizens should contact the Argentine embassy in New Delhi, India."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Bangladeshi citizens must obtain a visa before traveling. The nearest Argentine diplomatic mission is in New Delhi."
  },
  {
    slug: "philippines",
    name: "Philippines",
    flag: "🇵🇭",
    region: "asia-pacific",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "Do Filipinos need a visa for Argentina?",
      "How do I apply from the Philippines?",
      "What documents are required?",
      "How long does processing take?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Filipino citizens should contact the Argentine embassy in Tokyo, Japan or Canberra, Australia."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Filipino citizens must obtain a visa before traveling. The nearest Argentine diplomatic missions are in Tokyo or Canberra."
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    flag: "🇻🇳",
    region: "asia-pacific",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Vietnamese apply for an Argentina visa?",
      "What documents are required?",
      "Where is the nearest Argentine consulate?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Vietnamese citizens should contact the Argentine embassy in Beijing, China or Bangkok, Thailand."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Vietnamese citizens must obtain a visa before traveling."
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    region: "asia-pacific",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "Do Indonesians need a visa for Argentina?",
      "How do I apply from Indonesia?",
      "What documents are required?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Indonesian citizens should contact the Argentine embassy in Canberra, Australia or Tokyo, Japan."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Indonesian citizens must obtain a visa before traveling."
  },
  {
    slug: "nigeria",
    name: "Nigeria",
    flag: "🇳🇬",
    region: "africa-middle-east",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Nigerians apply for an Argentina visa?",
      "What documents are required?",
      "Where is the Argentine consulate in Nigeria?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Abuja"],
      notes: "Argentine Embassy in Abuja processes visa applications for Nigerian citizens."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Nigerian citizens must obtain a visa before traveling. Argentina has an embassy in Abuja."
  },
  {
    slug: "egypt",
    name: "Egypt",
    flag: "🇪🇬",
    region: "africa-middle-east",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Egyptians apply for an Argentina visa?",
      "What documents are required?",
      "Where is the Argentine consulate in Egypt?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Cairo"],
      notes: "Argentine Embassy in Cairo processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Egyptian citizens must obtain a visa before traveling. Argentina has an embassy in Cairo."
  },
  {
    slug: "kenya",
    name: "Kenya",
    flag: "🇰🇪",
    region: "africa-middle-east",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Kenyans apply for an Argentina visa?",
      "What documents are required?",
      "Where is the nearest Argentine consulate?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Kenyan citizens should contact the Argentine embassy in Pretoria, South Africa."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Kenyan citizens must obtain a visa before traveling."
  },
  {
    slug: "morocco",
    name: "Morocco",
    flag: "🇲🇦",
    region: "africa-middle-east",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Moroccans apply for an Argentina visa?",
      "What documents are required?",
      "Where is the Argentine consulate in Morocco?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Rabat"],
      notes: "Argentine Embassy in Rabat processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Moroccan citizens must obtain a visa before traveling. Argentina has an embassy in Rabat."
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    region: "africa-middle-east",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Saudis apply for an Argentina visa?",
      "What documents are required?",
      "Where is the Argentine consulate in Saudi Arabia?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Riyadh"],
      notes: "Argentine Embassy in Riyadh processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Saudi citizens must obtain a visa before traveling. Argentina has an embassy in Riyadh."
  },
  {
    slug: "iran",
    name: "Iran",
    flag: "🇮🇷",
    region: "africa-middle-east",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Iranians apply for an Argentina visa?",
      "What documents are required?",
      "Are there any special requirements?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Iranian citizens should contact the Argentine embassy in a neighboring country."
    },
    processingTime: "4-6 weeks",
    visaFee: "$150-200 USD",
    notes: "Iranian citizens must obtain a visa before traveling. Additional security screening may apply."
  },
  {
    slug: "algeria",
    name: "Algeria",
    flag: "🇩🇿",
    region: "africa-middle-east",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Algerians apply for an Argentina visa?",
      "What documents are required?",
      "Where is the nearest Argentine consulate?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Algerian citizens should contact the Argentine embassy in Madrid, Spain or Paris, France."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Algerian citizens must obtain a visa before traveling."
  },
  {
    slug: "cuba",
    name: "Cuba",
    flag: "🇨🇺",
    region: "americas",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Cubans apply for an Argentina visa?",
      "What documents are required?",
      "Where is the Argentine consulate in Cuba?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Havana"],
      notes: "Argentine Embassy in Havana processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Cuban citizens must obtain a visa before traveling. Argentina has an embassy in Havana."
  },
  {
    slug: "dominican-republic",
    name: "Dominican Republic",
    flag: "🇩🇴",
    region: "americas",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "Do Dominicans need a visa for Argentina?",
      "How do I apply from the Dominican Republic?",
      "What documents are required?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Santo Domingo"],
      notes: "Argentine Embassy in Santo Domingo processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Dominican citizens must obtain a visa before traveling. Argentina has an embassy in Santo Domingo."
  },
  {
    slug: "haiti",
    name: "Haiti",
    flag: "🇭🇹",
    region: "americas",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Haitians apply for an Argentina visa?",
      "What documents are required?",
      "Where is the nearest Argentine consulate?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Haitian citizens should contact the Argentine embassy in Santo Domingo, Dominican Republic."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Haitian citizens must obtain a visa before traveling."
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    flag: "🇨🇷",
    region: "americas",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Costa Ricans need a visa for Argentina?",
      "How long can Costa Ricans stay?",
      "Can I extend my stay?"
    ],
    notes: "Costa Rican citizens enjoy visa-free entry for 90 days."
  }
];

// Helper functions
export const getCountriesByRegion = (region: Region) => 
  countries.filter(c => c.region === region);

export const getCountriesByVisaStatus = (status: VisaStatus) =>
  countries.filter(c => c.visaStatus === status);

export const getCountryBySlug = (slug: string) =>
  countries.find(c => c.slug === slug);

export const getAllSlugs = () =>
  countries.map(c => c.slug);

// Regions for filtering
export const regions: { id: Region; name: string }[] = [
  { id: "americas", name: "Americas" },
  { id: "europe", name: "Europe" },
  { id: "asia-pacific", name: "Asia-Pacific" },
  { id: "africa-middle-east", name: "Africa & Middle East" }
];
