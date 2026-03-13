import { applyFactOverridesBySlug } from "./source-of-truth-sync";
import { countriesFactOverrides } from "../content-sync/generated/source-of-truth-fact-overrides";

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
export const countriesBase: CountryData[] = [
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
    image: "/images/countries/united-kingdom-landmark.jpg",
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
      "Do Singaporean citizens need a visa for Argentina?",
      "How long can Singaporeans stay in Argentina?",
      "What is the best flight route from Singapore to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Do I need travel insurance for Argentina?"
    ],
    notes: "Singaporean citizens enjoy visa-free entry for 90 days. Most flights connect through Dubai, Doha, or European hubs such as Madrid. Argentina and Singapore maintain growing trade relations, and Buenos Aires is an increasingly popular destination for Southeast Asian travelers exploring South America."
  },
  // Additional European Countries (Batch 2)
  {
    slug: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member", "Working Holiday Visa program available"],
    commonConcerns: [
      "Do Portuguese citizens need a visa for Argentina?",
      "How long can Portuguese tourists stay?",
      "Is there a Working Holiday Visa for Portuguese citizens?",
      "Are there direct flights from Lisbon to Buenos Aires?",
      "Can I extend my stay beyond 90 days?"
    ],
    notes: "Portuguese citizens enjoy visa-free entry for 90 days as EU members. Argentina and Portugal have a bilateral Working Holiday Visa agreement allowing young adults aged 18-35 to live and work in Argentina for up to one year. As a fellow Romance-language nation, Portuguese speakers find Spanish relatively easy to pick up, and flights typically connect through Madrid or Sao Paulo.",
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
    specialConditions: ["EU member", "Working Holiday Visa program available"],
    commonConcerns: [
      "Do Belgian citizens need a visa for Argentina?",
      "How long can Belgians stay in Argentina?",
      "Is there a Working Holiday Visa for Belgian citizens?",
      "What is the best flight route from Brussels to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Belgian citizens can visit visa-free for 90 days. Argentina and Belgium have a bilateral Working Holiday Visa agreement for young adults aged 18-30. Most flights from Brussels connect through Madrid or Paris. Belgium and Argentina share historical ties through European immigration waves, and Belgian chocolate and beer culture have small but dedicated followings in Buenos Aires.",
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
    specialConditions: ["EU member", "Working Holiday Visa program available"],
    commonConcerns: [
      "Do Austrian citizens need a visa for Argentina?",
      "How long can Austrians stay in Argentina?",
      "Is there a Working Holiday Visa for Austrians?",
      "What flights connect Vienna to Buenos Aires?",
      "Do I need to register with local authorities?"
    ],
    notes: "Austrian citizens enjoy visa-free entry for 90 days. Argentina and Austria have a bilateral Working Holiday Visa agreement allowing young adults to live and work in Argentina for up to one year. Flights from Vienna typically connect through Madrid or Frankfurt. A small Austrian-Argentine community exists, particularly in Patagonia, with historical ties dating back to 19th-century immigration."
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
      "Do Swedish citizens need a visa for Argentina?",
      "How long can Swedes stay in Argentina?",
      "What is the best flight route from Stockholm to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Is there a Swedish community in Argentina?"
    ],
    notes: "Swedish citizens can visit visa-free for 90 days. There are no direct flights from Scandinavia; most routes connect through Madrid, London, or Frankfurt. A small Swedish community existed historically in Misiones province, and Buenos Aires hosts a Scandinavian social club. Sweden and Argentina cooperate on renewable energy and sustainability initiatives."
  },
  {
    slug: "norway",
    name: "Norway",
    flag: "🇳🇴",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["Working Holiday Visa program available"],
    commonConcerns: [
      "Do Norwegian citizens need a visa for Argentina?",
      "How long can Norwegians stay in Argentina?",
      "Is there a Working Holiday Visa for Norwegian citizens?",
      "What is the best flight route from Oslo to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Norwegian citizens enjoy visa-free entry for 90 days. Argentina and Norway have a bilateral Working Holiday Visa agreement for young adults aged 18-30. There are no direct flights from Norway; most routes connect through Madrid or London. Norway and Argentina share interests in fisheries, energy, and Antarctic research, with both countries maintaining scientific bases in Antarctica."
  },
  {
    slug: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: ["EU member", "Working Holiday Visa program available"],
    commonConcerns: [
      "Do Danish citizens need a visa for Argentina?",
      "How long can Danes stay in Argentina?",
      "Is there a Working Holiday Visa for Danish citizens?",
      "What is the best flight route from Copenhagen to Buenos Aires?",
      "Can I work remotely from Argentina as a Dane?"
    ],
    notes: "Danish citizens can visit visa-free for 90 days. Argentina and Denmark have a bilateral Working Holiday Visa agreement allowing young adults to live and work in Argentina for up to one year. No direct flights exist from Copenhagen; most travelers connect through Madrid or London. Denmark and Argentina maintain trade relations particularly in agriculture and renewable energy."
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
      "Do Finnish citizens need a visa for Argentina?",
      "How long can Finns stay in Argentina?",
      "What is the best flight route from Helsinki to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Is Argentina safe for Finnish travelers?"
    ],
    notes: "Finnish citizens enjoy visa-free entry for 90 days. There are no direct flights from Finland; travelers typically connect through Madrid, London, or Frankfurt. Finland and Argentina share diplomatic ties and cooperate on technology and innovation. Patagonia is a particularly popular destination for Finnish travelers drawn to outdoor adventures and glacier trekking."
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
      "Do Irish citizens need a visa for Argentina?",
      "How long can Irish tourists stay in Argentina?",
      "Are there direct flights from Dublin to Buenos Aires?",
      "Is there an Irish community in Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Irish citizens can visit visa-free for 90 days. Argentina has a notable Irish-Argentine community, particularly in the province of Buenos Aires, descended from 19th-century immigrants. The Hurling Club in Hurlingham (a Buenos Aires suburb named by Irish settlers) is one of the oldest in South America. Flights from Dublin typically connect through Madrid or London.",
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
      "Do Polish citizens need a visa for Argentina?",
      "How long can Poles stay in Argentina?",
      "Is there a Polish community in Buenos Aires?",
      "What is the best flight route from Warsaw to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Polish citizens enjoy visa-free entry for 90 days. Argentina is home to a large Polish diaspora, especially concentrated in the suburbs of Berazategui and Dock Sud in Greater Buenos Aires. Polish cultural centers, churches, and community organizations maintain active ties to Poland. Flights from Warsaw typically connect through Madrid or Frankfurt."
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
      "Do Czech citizens need a visa for Argentina?",
      "How long can Czechs stay in Argentina?",
      "What is the best flight route from Prague to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Are there any Czech communities in Argentina?"
    ],
    notes: "Czech citizens can visit visa-free for 90 days. A small but historic Czech community exists in Argentina, part of the broader Central European immigration wave of the 19th and early 20th centuries. Flights from Prague connect through Madrid, Frankfurt, or Paris. Czech and Argentine beer cultures have surprising parallels, with craft brewing thriving in both countries."
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
      "Do Greek citizens need a visa for Argentina?",
      "How long can Greeks stay in Argentina?",
      "Is there a Greek community in Buenos Aires?",
      "What is the best flight route from Athens to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Greek citizens enjoy visa-free entry for 90 days. A small Greek community has been present in Buenos Aires since the early 20th century, maintaining cultural organizations and an Orthodox church. Flights from Athens typically connect through Madrid or Rome. Both Greece and Argentina share Mediterranean-influenced food cultures and a passion for football."
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
      "Do Hungarian citizens need a visa for Argentina?",
      "How long can Hungarians stay in Argentina?",
      "Is there a Hungarian community in Buenos Aires?",
      "What is the best flight route from Budapest to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Hungarian citizens can visit visa-free for 90 days. A small Hungarian-Argentine community exists, with roots in immigration waves from the late 19th century through post-World War II. Flights from Budapest connect through Madrid, Frankfurt, or Rome. Both countries share a strong cafe culture tradition and a passion for chess and classical music."
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
      "Do Romanian citizens need a visa for Argentina?",
      "How long can Romanians stay in Argentina?",
      "Will I find Spanish easy to learn as a Romanian speaker?",
      "What is the best flight route from Bucharest to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Romanian citizens enjoy visa-free entry for 90 days. Romanian and Spanish share Latin roots, making it significantly easier for Romanian speakers to learn Spanish compared to other European language backgrounds. Flights from Bucharest typically connect through Madrid or Rome. A small Romanian community in Argentina dates back to early 20th-century immigration."
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
      "Do Bulgarian citizens need a visa for Argentina?",
      "How long can Bulgarians stay in Argentina?",
      "What is the best flight route from Sofia to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Are there any Bulgarian communities in Argentina?"
    ],
    notes: "Bulgarian citizens can visit visa-free for 90 days. Flights from Sofia typically connect through Madrid, Rome, or Frankfurt. While there is no large Bulgarian diaspora in Argentina, both countries share a history of European immigration influences and maintain diplomatic relations. Buenos Aires is increasingly popular among Eastern European digital nomads."
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
      "Do Croatian citizens need a visa for Argentina?",
      "How long can Croatians stay in Argentina?",
      "Is there a Croatian community in Buenos Aires?",
      "What is the best flight route from Zagreb to Buenos Aires?",
      "Can I connect with the Croatian diaspora in Argentina?"
    ],
    notes: "Croatian citizens enjoy visa-free entry for 90 days. Argentina is home to one of the largest Croatian diasporas in the world, with communities concentrated in Buenos Aires and throughout Patagonia. Croatian cultural clubs, churches, and organizations are active across the country, and many Argentines of Croatian descent maintain strong ties to their heritage. Flights from Zagreb connect through Madrid or Frankfurt."
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
      "Do Slovak citizens need a visa for Argentina?",
      "How long can Slovaks stay in Argentina?",
      "What is the best flight route from Bratislava to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Are there Slovak communities in Argentina?"
    ],
    notes: "Slovak citizens can visit visa-free for 90 days. A small Slovak community exists in Argentina as part of the broader Central European immigration history. Flights from Bratislava connect through Vienna and then Madrid or Frankfurt. Both countries share strong agricultural traditions, and Argentine wine is increasingly popular in Slovakia."
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
      "Do Slovenian citizens need a visa for Argentina?",
      "How long can Slovenians stay in Argentina?",
      "Is there a Slovenian community in Buenos Aires?",
      "What is the best flight route from Ljubljana to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Slovenian citizens enjoy visa-free entry for 90 days. Argentina has a notable Slovenian community, primarily in Buenos Aires and Mendoza, with cultural organizations and community centers maintaining ties to Slovenia. Flights from Ljubljana connect through major European hubs such as Frankfurt or Madrid. Both countries share a love of outdoor sports and wine culture."
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
      "Do Luxembourgish citizens need a visa for Argentina?",
      "How long can Luxembourgish tourists stay in Argentina?",
      "What is the best flight route from Luxembourg to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Luxembourgish citizens can visit visa-free for 90 days. Flights from Luxembourg typically connect through Paris, Madrid, or Frankfurt. Luxembourg and Argentina maintain diplomatic and financial ties, and Buenos Aires is a popular South American destination for Luxembourgish travelers seeking cultural experiences and Patagonian adventures."
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
      "Do Estonian citizens need a visa for Argentina?",
      "How long can Estonians stay in Argentina?",
      "What is the best flight route from Tallinn to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Can I use my Estonian digital residency documents?"
    ],
    notes: "Estonian citizens enjoy visa-free entry for 90 days. Flights from Tallinn connect through major European hubs such as Frankfurt, Madrid, or London. While there is no significant Estonian diaspora in Argentina, both countries have embraced digital innovation, and Buenos Aires is an increasingly attractive destination for Estonian digital nomads and tech professionals."
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
      "Do Latvian citizens need a visa for Argentina?",
      "How long can Latvians stay in Argentina?",
      "What is the best flight route from Riga to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Are there any Baltic communities in Argentina?"
    ],
    notes: "Latvian citizens can visit visa-free for 90 days. Flights from Riga connect through Madrid, Frankfurt, or London. A small Baltic community exists in Argentina from early 20th-century immigration, though the Latvian presence is modest. Buenos Aires offers an appealing combination of European-influenced culture and South American warmth for Latvian travelers."
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
      "Do Lithuanian citizens need a visa for Argentina?",
      "How long can Lithuanians stay in Argentina?",
      "Is there a Lithuanian community in Argentina?",
      "What is the best flight route from Vilnius to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Lithuanian citizens enjoy visa-free entry for 90 days. Argentina has a notable Lithuanian community, particularly concentrated in the city of Berisso near La Plata, where Lithuanian cultural festivals and organizations remain active to this day. Flights from Vilnius connect through Madrid, Frankfurt, or London. Berisso hosts an annual immigration festival celebrating its Lithuanian heritage."
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
      "Do Maltese citizens need a visa for Argentina?",
      "How long can Maltese tourists stay in Argentina?",
      "What is the best flight route from Malta to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Maltese citizens can visit visa-free for 90 days. Flights from Malta connect through Rome, Madrid, or other European hubs. While there is no large Maltese community in Argentina, both countries share Mediterranean cultural influences, and Buenos Aires offers a familiar blend of European architecture and cafe culture for Maltese visitors."
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
      "Do Icelandic citizens need a visa for Argentina?",
      "How long can Icelanders stay in Argentina?",
      "What is the best flight route from Reykjavik to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Is Patagonia a popular destination for Icelandic travelers?"
    ],
    notes: "Icelandic citizens can visit visa-free for 90 days. There are no direct flights; travelers typically connect through London, Madrid, or other European hubs. Patagonia is particularly appealing to Icelandic visitors who appreciate dramatic landscapes, glaciers, and outdoor adventure. Both countries share interests in sustainable energy and natural resource conservation."
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
      "Do Liechtenstein citizens need a visa for Argentina?",
      "How long can they stay in Argentina?",
      "What is the best flight route to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Liechtenstein citizens enjoy visa-free entry for 90 days. As a microstate, Liechtenstein has no airport of its own; travelers fly from Zurich or other nearby Swiss or Austrian airports, connecting through Madrid or Frankfurt to Buenos Aires."
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
      "Do Monegasque citizens need a visa for Argentina?",
      "How long can Monegasque tourists stay in Argentina?",
      "What is the best flight route from Monaco to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Monegasque citizens can visit visa-free for 90 days. Travelers fly from Nice airport, typically connecting through Paris or Madrid to Buenos Aires. Monaco and Argentina share connections through motorsport culture, with the Argentine Grand Prix historically drawing interest from Monaco-based racing enthusiasts."
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
      "Do Andorran citizens need a visa for Argentina?",
      "How long can Andorrans stay in Argentina?",
      "What is the best flight route to Buenos Aires?",
      "Can I extend my tourist stay?"
    ],
    notes: "Andorran citizens enjoy visa-free entry for 90 days. As Andorra has no airport, travelers fly from Barcelona or Toulouse, connecting through Madrid or Paris to Buenos Aires. Both Andorra and Argentina share Catalan and Spanish cultural influences."
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
      "Do Sammarinese citizens need a visa for Argentina?",
      "How long can they stay in Argentina?",
      "What is the best flight route to Buenos Aires?",
      "Are there San Marino community ties in Argentina?"
    ],
    notes: "Sammarinese citizens can visit visa-free for 90 days. Travelers fly from nearby Italian airports such as Bologna or Rimini, connecting through Rome or Madrid. Given Argentina's massive Italian diaspora, Sammarinese visitors find a culturally familiar environment in Buenos Aires."
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
      "Do Vatican citizens need a visa for Argentina?",
      "How long can they stay in Argentina?",
      "What documentation does a Vatican passport require?",
      "Are there special considerations for Vatican diplomatic travel?"
    ],
    notes: "Vatican citizens enjoy visa-free entry for 90 days. Pope Francis (Jorge Mario Bergoglio) is Argentine, born and raised in Buenos Aires, making Argentina the first country in the Americas to produce a pope. Vatican passport holders typically travel through Rome's airports, connecting through Madrid or directly to Buenos Aires."
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
      "Do Malaysians need a visa for Argentina?",
      "Why is the stay only 30 days instead of 90?",
      "Can I extend my 30-day stay in Argentina?",
      "What is the best flight route from Kuala Lumpur to Buenos Aires?",
      "Do I need to show proof of return travel?"
    ],
    notes: "Malaysian citizens receive 30 days visa-free, which is shorter than the standard 90 days granted to most exempt countries. Flights from Kuala Lumpur typically connect through Dubai, Doha, or a European hub. Malaysia and Argentina maintain trade relations, and Buenos Aires is an emerging destination for Malaysian travelers exploring South America."
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
      "Do Thai citizens need a visa for Argentina?",
      "How long can Thais stay in Argentina?",
      "What is the best flight route from Bangkok to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Do I need a yellow fever certificate?"
    ],
    notes: "Thai citizens enjoy visa-free entry for 90 days. Flights from Bangkok typically connect through Dubai, Doha, or a European hub such as Madrid. Thailand and Argentina share a growing mutual interest in food culture, with Thai cuisine gaining popularity in Buenos Aires and Argentine beef finding markets in Thailand."
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
      "Do Hong Kong residents need a visa for Argentina?",
      "What about BNO passport holders - do they get the same treatment?",
      "Why is the stay only 30 days?",
      "Can I extend my 30-day stay in Argentina?",
      "What is the best flight route from Hong Kong to Buenos Aires?"
    ],
    notes: "Hong Kong Special Administrative Region passport holders receive 30 days visa-free. British National (Overseas) passport holders may have different requirements and should verify before travel. Flights from Hong Kong typically connect through Dubai, Doha, or a European hub. Buenos Aires has a small but growing East Asian expat community."
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
      "Do Macao residents need a visa for Argentina?",
      "How long can Macao passport holders stay in Argentina?",
      "What is the best flight route from Macao to Buenos Aires?",
      "Can I extend my 30-day stay?"
    ],
    notes: "Macao Special Administrative Region passport holders receive 30 days visa-free. Flights connect through Hong Kong or mainland Chinese hubs, then via Dubai, Doha, or a European city to Buenos Aires. Both Macao and Buenos Aires share Portuguese colonial heritage, offering an interesting cultural connection for travelers."
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
      "Do Israeli citizens need a visa for Argentina?",
      "How long can Israelis stay in Argentina?",
      "Is there a Jewish community in Buenos Aires?",
      "Are there direct flights from Tel Aviv to Buenos Aires?",
      "Are there any special security procedures for Israeli travelers?"
    ],
    notes: "Israeli citizens enjoy visa-free entry for 90 days. Argentina is home to the largest Jewish community in Latin America, with over 200,000 members concentrated in Buenos Aires neighborhoods like Once and Belgrano. The community maintains synagogues, schools, cultural centers, and kosher restaurants. Flights from Tel Aviv typically connect through Madrid, Rome, or Sao Paulo."
  },
  {
    slug: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    region: "europe",
    visaStatus: "exempt",
    stayDuration: 90,
    specialConditions: [],
    commonConcerns: [
      "Do Turkish citizens need a visa for Argentina?",
      "How long can Turkish tourists stay in Argentina?",
      "Are there direct flights from Istanbul to Buenos Aires?",
      "Is there a Turkish community in Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Turkish citizens can visit visa-free for 90 days. Turkish Airlines operates direct flights from Istanbul to Buenos Aires, making Argentina one of the most accessible South American destinations for Turkish travelers. Argentina has a significant population of Arab descent (approximately 3.5 million of Syrian and Lebanese origin), sharing cultural overlap with Turkey's Ottoman-era connections to the Levant."
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
      "Do South Africans need a visa for Argentina?",
      "How long can South Africans stay in Argentina?",
      "Do I need a yellow fever certificate to enter Argentina?",
      "What is the best flight route from Johannesburg to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "South African citizens enjoy visa-free entry for 90 days. There are no direct flights from South Africa; most routes connect through Sao Paulo, with a total journey time of approximately 14-16 hours. Both countries are major wine-producing nations, and Argentine Malbec and South African Pinotage represent complementary New World wine traditions. Rugby and polo also provide shared sporting connections."
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
      "Do Qatari citizens need a visa for Argentina?",
      "How long can Qataris stay in Argentina?",
      "Are there flights from Doha to Buenos Aires?",
      "Is there a halal food scene in Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Qatari citizens can visit visa-free for 90 days. Qatar Airways connects Doha to Buenos Aires via Sao Paulo, offering premium service on this route. Argentina has approximately 3.5 million residents of Arab descent (primarily Syrian and Lebanese origin), which has fostered a culture that includes Middle Eastern food, customs, and an appreciation for Arab heritage. Halal dining options are available in Buenos Aires."
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
      "Do UAE citizens need a visa for Argentina?",
      "How long can Emiratis stay in Argentina?",
      "Are there direct flights from Dubai to Buenos Aires?",
      "Is there halal food available in Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "UAE citizens enjoy visa-free entry for 90 days. Emirates connects Dubai to Buenos Aires via Sao Paulo, and Etihad offers similar routing from Abu Dhabi. Argentina's large Arab-descent population (approximately 3.5 million of Syrian and Lebanese origin) means visitors from the Gulf will find cultural familiarity, including Middle Eastern restaurants and mosques in Buenos Aires."
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
      "Do Georgian citizens need a visa for Argentina?",
      "How long can Georgians stay in Argentina?",
      "What is the best flight route from Tbilisi to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Are there any Georgian communities in Argentina?"
    ],
    notes: "Georgian citizens can visit visa-free for 90 days. Flights from Tbilisi connect through Istanbul (Turkish Airlines offers the most convenient routing) or through European hubs such as Frankfurt or Madrid. While there is no significant Georgian diaspora in Argentina, both countries share a deep wine culture, with Georgia being one of the oldest wine-producing regions in the world and Argentina being a New World leader."
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
      "Do Barbadians need a visa for Argentina?",
      "How long can Barbadians stay in Argentina?",
      "What is the best flight route from Barbados to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Barbadian citizens enjoy visa-free entry for 90 days. Flights from Barbados connect through Miami, Panama City, or Bogota to Buenos Aires. Buenos Aires offers Caribbean visitors a culturally rich alternative destination in the Americas."
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
      "Do Trinidadians need a visa for Argentina?",
      "How long can Trinidadians stay in Argentina?",
      "What is the best flight route from Port of Spain to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Trinidadian and Tobagonian citizens can visit visa-free for 90 days. Flights from Port of Spain connect through Miami, Panama City, or Bogota to Buenos Aires. Both Trinidad and Argentina share a lively carnival culture, with Buenos Aires hosting its own murga and carnival celebrations."
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
      "Do Jamaicans need a visa for Argentina?",
      "Why is the stay only 30 days instead of 90?",
      "Can I extend my 30-day stay in Argentina?",
      "What is the best flight route from Kingston to Buenos Aires?"
    ],
    notes: "Jamaican citizens receive 30 days visa-free, shorter than the 90 days granted to most exempt countries. Flights from Kingston connect through Miami or Panama City to Buenos Aires. Both Jamaica and Argentina share a deep musical heritage, with reggae and tango representing distinct but equally passionate cultural expressions."
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
      "Do Grenadians need a visa for Argentina?",
      "How long can Grenadians stay in Argentina?",
      "Can I extend my 30-day stay?",
      "What is the best flight route from Grenada to Buenos Aires?"
    ],
    notes: "Grenadian citizens receive 30 days visa-free. Flights from Grenada connect through Miami, Bogota, or Panama City to Buenos Aires. Argentina offers Caribbean travelers a unique South American cultural experience with its European-influenced architecture and cuisine."
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
      "Do Saint Lucians need a visa for Argentina?",
      "How long can Saint Lucians stay in Argentina?",
      "What is the best flight route from Saint Lucia to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Saint Lucian citizens enjoy visa-free entry for 90 days. Flights from Saint Lucia connect through Miami or Caribbean hubs to Buenos Aires. Both islands and Argentina share French and Spanish colonial influences in their cultural heritage."
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
      "Do Vincentians need a visa for Argentina?",
      "How long can they stay in Argentina?",
      "What is the best flight route to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Citizens of Saint Vincent and the Grenadines can visit visa-free for 90 days. Flights connect through Barbados, Miami, or Panama City to Buenos Aires. Argentina represents an accessible and culturally rich South American destination for Eastern Caribbean travelers."
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
      "Do Kittitians need a visa for Argentina?",
      "How long can they stay in Argentina?",
      "What is the best flight route to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Citizens of Saint Kitts and Nevis enjoy visa-free entry for 90 days. Flights connect through Miami, San Juan, or Caribbean hubs to Buenos Aires. Buenos Aires offers a sophisticated urban experience with European architecture and world-class dining."
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
      "Do Dominicans (Commonwealth of Dominica) need a visa for Argentina?",
      "How long can Dominicans stay in Argentina?",
      "What is the best flight route from Dominica to Buenos Aires?",
      "Is Dominica different from the Dominican Republic for visa purposes?"
    ],
    notes: "Dominican citizens (Commonwealth of Dominica, not to be confused with the Dominican Republic) can visit visa-free for 90 days. Flights connect through Barbados, Miami, or other Caribbean hubs to Buenos Aires. Dominica passport holders should note that the Dominican Republic has different, visa-required status."
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
      "Do Fijians need a visa for Argentina?",
      "How long can Fijians stay in Argentina?",
      "What is the best flight route from Fiji to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Fijian citizens enjoy visa-free entry for 90 days. Flights from Fiji typically route through Auckland, then connect to Buenos Aires via Santiago or directly. Argentina is one of the more accessible South American destinations for Pacific Islanders, and Patagonia offers landscapes that appeal to travelers from Oceania."
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
      "Do Kazakhstan citizens need a visa for Argentina?",
      "How long can Kazakhstanis stay in Argentina?",
      "What does 30 days in a calendar year mean - is it cumulative?",
      "What is the best flight route from Almaty or Nur-Sultan to Buenos Aires?",
      "Can I extend beyond 30 days?"
    ],
    notes: "Kazakhstani citizens receive 30 days visa-free within any calendar year, meaning multiple visits cannot exceed 30 days total per year. Flights from Kazakhstan connect through Istanbul (Turkish Airlines), Dubai, or European hubs to Buenos Aires. Both countries are major agricultural producers with growing trade relations in grain and livestock."
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
      "Do Mongolian citizens need a visa for Argentina?",
      "How long can Mongolians stay in Argentina?",
      "What is the best flight route from Ulaanbaatar to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Mongolian citizens can visit visa-free for 90 days. Flights from Ulaanbaatar connect through Beijing, Seoul, or Istanbul to Buenos Aires. Both Mongolia and Patagonia share vast steppe landscapes and strong equestrian traditions, making the Argentine pampas a culturally resonant destination for Mongolian travelers."
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
      "Do Russian citizens need a visa for Argentina?",
      "How long can Russians stay in Argentina?",
      "What does 90 days in 180 days mean - how is it calculated?",
      "Are there any current travel restrictions for Russian citizens?",
      "Is there a Russian community in Buenos Aires?"
    ],
    notes: "Russian citizens enjoy visa-free entry for 90 days within any 180-day period. Buenos Aires has seen a growing Russian-speaking community since 2022, with concentrations in Palermo and Puerto Madero. Flights connect through Istanbul (Turkish Airlines) or Dubai, as direct European routing may be limited. Argentina maintains diplomatic relations with Russia and has not imposed travel restrictions on Russian citizens."
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
      "Do Ukrainian citizens need a visa for Argentina?",
      "How long can Ukrainians stay in Argentina?",
      "What does 90 days within 180 days mean?",
      "Is there a Ukrainian community in Buenos Aires?",
      "What documents do I need with a wartime-issued passport?"
    ],
    notes: "Ukrainian citizens enjoy visa-free entry for 90 days within any 180-day period. Argentina has a significant Ukrainian diaspora, with Ukrainian Orthodox churches, schools, and cultural centers in Buenos Aires and Misiones province. The Ukrainian community in Argentina dates back to the late 19th century and maintains active cultural organizations. Flights currently connect through European hubs or Istanbul to Buenos Aires."
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
      "Do Belarusian citizens need a visa for Argentina?",
      "How long can Belarusians stay in Argentina?",
      "What does 90 days in a calendar year mean - is it cumulative?",
      "What is the best flight route from Minsk to Buenos Aires?",
      "Are there any travel restrictions for Belarusian citizens?"
    ],
    notes: "Belarusian citizens enjoy visa-free entry for 90 days within any calendar year. Flights from Minsk connect through Istanbul, Dubai, or available European hubs to Buenos Aires. While there is no large Belarusian diaspora in Argentina, the broader Eastern European community in Buenos Aires provides a welcoming environment for Slavic-speaking travelers."
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
      "Do Serbian citizens need a visa for Argentina?",
      "How long can Serbians stay in Argentina?",
      "Is there a Serbian community in Buenos Aires?",
      "What is the best flight route from Belgrade to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Serbian citizens can visit visa-free for 90 days. Argentina has a notable Serbian diaspora, part of the broader Yugoslav immigration to Buenos Aires and Patagonia throughout the 20th century. Serbian cultural clubs and Orthodox churches exist in Buenos Aires. Flights from Belgrade connect through Madrid, Istanbul, or other European hubs."
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
      "Do Montenegrin citizens need a visa for Argentina?",
      "How long can Montenegrins stay in Argentina?",
      "What is the best flight route from Podgorica to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Is there a Montenegrin community in Argentina?"
    ],
    notes: "Montenegrin citizens enjoy visa-free entry for 90 days. Montenegrins share the broader Yugoslav diaspora presence in Argentina, with communities in Buenos Aires and Patagonia. Flights from Podgorica connect through Belgrade, Istanbul, or other European hubs to Buenos Aires. Both countries share a coastal culture and appreciation for Mediterranean-style cuisine."
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
      "Do Macedonian citizens need a visa for Argentina?",
      "How long can Macedonians stay in Argentina?",
      "What is the best flight route from Skopje to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Are there Macedonian communities in Argentina?"
    ],
    notes: "Macedonian citizens can visit visa-free for 90 days. Part of the broader Balkan diaspora in Argentina, small Macedonian communities exist within the Yugoslav immigrant networks in Buenos Aires. Flights from Skopje connect through Istanbul, Vienna, or other European hubs to Buenos Aires."
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
      "Do Bosnian citizens need a visa for Argentina?",
      "How long can Bosnians stay in Argentina?",
      "Is there a Bosnian community in Buenos Aires?",
      "What is the best flight route from Sarajevo to Buenos Aires?",
      "Can I extend my 90-day stay?"
    ],
    notes: "Bosnian citizens enjoy visa-free entry for 90 days. Argentina received Bosnian refugees during the 1990s Yugoslav wars, and a small but active Bosnian community exists in Buenos Aires. Flights from Sarajevo connect through Istanbul, Vienna, or other European hubs. The community maintains cultural ties through social organizations and occasional cultural events."
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
      "Do Albanian citizens need a visa for Argentina?",
      "How long can Albanians stay in Argentina?",
      "What is the best flight route from Tirana to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Are there Albanian communities in Argentina?"
    ],
    notes: "Albanian citizens can visit visa-free for 90 days. While there is no large Albanian diaspora in Argentina, a small community exists within the broader Balkan immigrant networks. Flights from Tirana connect through Istanbul, Rome, or Madrid to Buenos Aires. Both countries share Mediterranean cultural influences and a strong tradition of hospitality."
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
      "Do Armenian citizens need a visa for Argentina?",
      "How long can Armenians stay in Argentina?",
      "Is there an Armenian community in Buenos Aires?",
      "What is the best flight route from Yerevan to Buenos Aires?",
      "Can I connect with the Armenian diaspora in Argentina?"
    ],
    notes: "Armenian citizens enjoy visa-free entry for 90 days within any 180-day period. Argentina is home to one of the largest Armenian diaspora communities in the world, concentrated primarily in Buenos Aires, especially the Palermo neighborhood. Armenian churches, schools, cultural centers, newspapers, and community organizations thrive across the city. Flights from Yerevan connect through Istanbul, Dubai, or European hubs to Buenos Aires."
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
      "Where is the Argentine consulate in India?",
      "Can I apply for an e-visa or must I visit the embassy in person?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["New Delhi", "Mumbai"],
      notes: "Argentine Embassy in New Delhi and Consulate General in Mumbai process visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Indian citizens must obtain a visa before traveling to Argentina. Apply at the Argentine Embassy in New Delhi or Consulate General in Mumbai. The application process requires proof of financial means, travel itinerary, and accommodation details. While there is no large Indian diaspora in Argentina, Buenos Aires has a growing Indian cultural presence with yoga centers, Indian restaurants, and Bollywood film screenings."
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
      "Where are the Argentine consulates in China?",
      "Is there a Chinese community in Buenos Aires?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Beijing", "Shanghai", "Guangzhou"],
      notes: "Argentine Embassy in Beijing and Consulates General in Shanghai and Guangzhou."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Chinese citizens must obtain a visa before traveling. Argentina has an embassy in Beijing and consulates in Shanghai and Guangzhou, providing multiple application points. Buenos Aires has an established Chinatown (Barrio Chino) in Belgrano, with Chinese supermarkets, restaurants, and cultural celebrations including Chinese New Year. The Chinese-Argentine community has grown significantly since the 1990s and is one of the largest in South America."
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
      "Is there an Argentine consulate in Pakistan?",
      "Can I apply through a third country's Argentine embassy?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Pakistani citizens should contact the Argentine embassy in New Delhi, India or Beijing, China."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Pakistani citizens must obtain a visa before traveling. There is no Argentine embassy or consulate in Pakistan, so applicants must apply through the nearest diplomatic mission in New Delhi, India or Beijing, China, which adds complexity and time to the process. Courier services or in-person visits may be required for biometric submission. Argentina's large Arab-descent population provides some cultural familiarity for Pakistani visitors."
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
      "Where is the nearest Argentine consulate?",
      "How long does the visa process take without a local embassy?",
      "Can I apply by mail or do I need to visit in person?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Bangladeshi citizens should contact the Argentine embassy in New Delhi, India."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Bangladeshi citizens must obtain a visa before traveling. The nearest Argentine diplomatic mission is in New Delhi, India, requiring either travel to India for in-person application or use of courier services. The process can be more time-consuming due to the absence of a local embassy. Applicants should begin the process well in advance of planned travel dates and prepare comprehensive financial documentation."
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
      "How long does processing take?",
      "Where is the nearest Argentine embassy for Filipino applicants?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Filipino citizens should contact the Argentine embassy in Tokyo, Japan or Canberra, Australia."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Filipino citizens must obtain a visa before traveling. The nearest Argentine diplomatic missions are in Tokyo or Canberra, requiring either travel to Japan or Australia for in-person application or use of courier services. Both the Philippines and Argentina were Spanish colonies, sharing linguistic roots and Catholic cultural traditions. Flights from Manila connect through long-haul routes via Dubai, Doha, or transpacific through Los Angeles."
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    flag: "🇻🇳",
    region: "asia-pacific",
    visaStatus: "required",
    stayDuration: 90,
    commonConcerns: [
      "How do Vietnamese citizens apply for an Argentina visa?",
      "What documents are required?",
      "Where is the nearest Argentine consulate for Vietnamese applicants?",
      "How long does processing take?",
      "Can I transit through a visa-free country on the way?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Vietnamese citizens should contact the Argentine embassy in Beijing, China or Bangkok, Thailand."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Vietnamese citizens must obtain a visa before traveling. The nearest Argentine diplomatic missions are in Beijing, China or Bangkok, Thailand, adding complexity to the application process. Applicants should plan ahead and allow extra time for document submission and processing. Flights from Vietnam connect through Dubai, Doha, or East Asian hubs to reach Buenos Aires."
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
      "What documents are required?",
      "Where is the nearest Argentine embassy for Indonesian applicants?",
      "How long does the visa process take?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Indonesian citizens should contact the Argentine embassy in Canberra, Australia or Tokyo, Japan."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Indonesian citizens must obtain a visa before traveling. The nearest Argentine diplomatic missions are in Canberra, Australia or Tokyo, Japan. The absence of a local embassy means applicants may need to travel or use courier services for document submission. Flights from Jakarta connect through Dubai, Doha, or Singapore, then through a European hub or Sao Paulo to Buenos Aires."
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
      "Where is the Argentine consulate in Nigeria?",
      "How long does visa processing take?",
      "Do I need a yellow fever certificate for Argentina?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Abuja"],
      notes: "Argentine Embassy in Abuja processes visa applications for Nigerian citizens."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Nigerian citizens must obtain a visa before traveling. Argentina has an embassy in Abuja that handles visa applications directly, making the process more straightforward than for countries without local representation. A yellow fever vaccination certificate is required for travelers arriving from Nigeria. Flights connect through Addis Ababa, Dubai, or European hubs such as Madrid to Buenos Aires."
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
      "Where is the Argentine consulate in Egypt?",
      "How long does visa processing take?",
      "Is there an Arab community in Buenos Aires?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Cairo"],
      notes: "Argentine Embassy in Cairo processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Egyptian citizens must obtain a visa before traveling. Argentina has an embassy in Cairo for direct visa applications. Argentina is home to approximately 3.5 million people of Arab descent (primarily Syrian and Lebanese origin), making it one of the largest Arab diaspora communities outside the Middle East. Egyptian visitors will find Arabic cultural influences in Buenos Aires, including Middle Eastern restaurants, mosques, and cultural centers."
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
      "Where is the nearest Argentine consulate for Kenyan applicants?",
      "How long does the visa process take?",
      "Do I need a yellow fever certificate?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Kenyan citizens should contact the Argentine embassy in Pretoria, South Africa."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Kenyan citizens must obtain a visa before traveling. The nearest Argentine diplomatic mission is in Pretoria, South Africa, requiring either travel to South Africa or use of courier services for document submission. A yellow fever certificate may be required. Flights from Nairobi connect through Addis Ababa, Dubai, or Johannesburg, then via Sao Paulo to Buenos Aires."
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
      "Where is the Argentine consulate in Morocco?",
      "How long does visa processing take?",
      "Is there an Arab community in Buenos Aires?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Rabat"],
      notes: "Argentine Embassy in Rabat processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Moroccan citizens must obtain a visa before traveling. Argentina has an embassy in Rabat for direct visa applications. Argentina's massive Arab-descent population (approximately 3.5 million of Syrian and Lebanese origin) means Moroccan visitors will find cultural familiarity in Buenos Aires, including Arabic-influenced cuisine, mosques, and cultural centers. Flights from Casablanca connect through Madrid or Paris to Buenos Aires."
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
      "Where is the Argentine consulate in Saudi Arabia?",
      "How long does visa processing take?",
      "Is halal food available in Buenos Aires?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Riyadh"],
      notes: "Argentine Embassy in Riyadh processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Saudi citizens must obtain a visa before traveling. Argentina has an embassy in Riyadh for direct visa processing. Argentina's approximately 3.5 million residents of Arab descent (primarily Syrian and Lebanese origin) have created a welcoming environment for Arab visitors, with mosques, halal restaurants, and Arabic cultural institutions in Buenos Aires. Flights from Riyadh connect through Sao Paulo to Buenos Aires."
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
      "Are there any special requirements or restrictions for Iranian citizens?",
      "Where is the nearest Argentine consulate for Iranian applicants?",
      "How long does the visa process take?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Iranian citizens should contact the Argentine embassy in a neighboring country such as Turkey (Ankara) or the UAE (Abu Dhabi)."
    },
    processingTime: "4-6 weeks",
    visaFee: "$150-200 USD",
    notes: "Iranian citizens must obtain a visa before traveling. There is no Argentine embassy in Iran, so applicants must apply through the nearest diplomatic mission, such as in Ankara (Turkey) or Abu Dhabi (UAE). Additional security screening may apply, and processing times tend to be longer than for other nationalities. Applicants should prepare comprehensive documentation and begin the process well in advance."
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
      "Where is the nearest Argentine consulate for Algerian applicants?",
      "How long does the visa process take?",
      "Can I apply through the embassy in Paris or Madrid?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Algerian citizens should contact the Argentine embassy in Madrid, Spain or Paris, France."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Algerian citizens must obtain a visa before traveling. There is no Argentine embassy in Algeria; the nearest diplomatic missions are in Madrid, Spain or Paris, France, which may be more accessible given French-language ties. Argentina's large Arab-descent population provides cultural familiarity for Algerian visitors. Flights from Algiers connect through Madrid or Paris to Buenos Aires."
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
      "Where is the Argentine consulate in Cuba?",
      "How long does visa processing take?",
      "Are there any special considerations for Cuban nationals?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Havana"],
      notes: "Argentine Embassy in Havana processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Cuban citizens must obtain a visa before traveling. Argentina has an embassy in Havana for direct visa applications. Both countries share a Spanish-speaking heritage and historical political connections. A growing Cuban community in Buenos Aires has formed since the 2000s, and Cuban music and culture have a strong presence in the Argentine capital. Flights from Havana connect through Panama City or Mexico City to Buenos Aires."
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
      "What documents are required?",
      "How long does visa processing take?",
      "Is it different from the Commonwealth of Dominica's requirements?"
    ],
    consulateInfo: {
      hasConsulate: true,
      cities: ["Santo Domingo"],
      notes: "Argentine Embassy in Santo Domingo processes visa applications."
    },
    processingTime: "2-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Dominican citizens must obtain a visa before traveling. Argentina has an embassy in Santo Domingo for direct visa processing. Both countries share Spanish language and Caribbean-Latin cultural connections. Dominican baseball culture has some parallels with Argentina's passion for sports, and merengue music has found audiences in Buenos Aires. Flights from Santo Domingo connect through Miami, Panama City, or Bogota."
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
      "Where is the nearest Argentine consulate for Haitian applicants?",
      "How long does the visa process take?",
      "Can I apply through the embassy in Santo Domingo?"
    ],
    consulateInfo: {
      hasConsulate: false,
      notes: "Haitian citizens should contact the Argentine embassy in Santo Domingo, Dominican Republic."
    },
    processingTime: "3-4 weeks",
    visaFee: "$150-200 USD",
    notes: "Haitian citizens must obtain a visa before traveling. There is no Argentine embassy in Haiti; the nearest diplomatic mission is in Santo Domingo, Dominican Republic. This requires Haitian applicants to either travel to the Dominican Republic or use courier services. The application process requires comprehensive documentation including financial proof, travel itinerary, and accommodation details. Flights connect through Santo Domingo, Miami, or Panama City."
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
      "How long can Costa Ricans stay in Argentina?",
      "Are there direct flights from San Jose to Buenos Aires?",
      "Can I extend my 90-day stay?",
      "Do I need proof of return travel?"
    ],
    notes: "Costa Rican citizens enjoy visa-free entry for 90 days. Both countries share Spanish language and strong environmental conservation values. Flights from San Jose connect through Panama City, Bogota, or Lima to Buenos Aires. Costa Rica and Argentina maintain cordial diplomatic relations, and Buenos Aires offers Costa Rican travelers a rich cultural experience with its European-influenced architecture and world-class gastronomy."
  }
];

export const countries = applyFactOverridesBySlug(countriesBase, countriesFactOverrides);

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
