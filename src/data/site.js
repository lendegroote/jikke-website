// All page content in one place, so copy and photos are easy to swap.
const B = import.meta.env.BASE_URL.replace(/\/$/, '');

export const IG = 'https://www.instagram.com/jikke_vdbx/';
export const WHATSAPP = 'https://wa.me/32468319381';
export const WHATSAPP_TEXT = '+32 468 31 93 81';

export const nav = [
  { href: '#doelen', label: 'Doelen' },
  { href: '#aanpak', label: 'Aanpak' },
  { href: '#over-mij', label: 'Over mij' },
  { href: '#faq', label: 'FAQ' },
  { href: '#intake', label: 'Contact' },
];

// Carousel: lines based on her own Instagram captions, linked to the real posts
export const posts = [
  { href: 'https://www.instagram.com/reel/DX1-x5lMUAC/', img: B + '/img/hero.jpg', alt: 'Jikke traint in de gym', tag: 'Mindset', quote: 'Discipline bouwt het. Consistentie houdt het.' },
  { href: 'https://www.instagram.com/p/DVJnGXdDBqe/', img: B + '/img/herofood.jpg', alt: 'Havermout met banaan op een weegschaal', tag: 'Voeding', quote: 'What I eat in a day: -0,5 kg per week, zonder honger.' },
  { href: 'https://www.instagram.com/reel/DWMdKxVjET0/', img: B + '/img/pump.jpg', alt: 'Jikke toont haar rug in de spiegel', tag: 'Training', quote: 'De gym bouwt niet alleen je lichaam. Hij bouwt je discipline.' },
  { href: 'https://www.instagram.com/reel/DT8UAgWDIJ0/', img: B + '/img/tip.jpg', alt: 'Jikke in de gym', tag: 'Tip', quote: 'Zorg dat je elke dag genoeg eiwitten binnen hebt.' },
  { href: 'https://www.instagram.com/reel/DVWf-I1jICb/', img: B + '/img/gym2.jpg', alt: 'Jikke in de gym', tag: 'Afvallen', quote: 'Calorie deficit works. Als je plan klopt.' },
  { href: 'https://www.instagram.com/p/DZnMtZ-DF4B/', img: B + '/img/car.jpg', alt: 'Jikke bij een sportwagen', tag: 'Progress', quote: 'Surpass your limits. Elke week een stap verder.' },
];

// Goal cards + the detail block they open
export const goals = [
  {
    key: 'afvallen', label: 'Afvallen', num: '01', wide: true,
    card: { img: B + '/img/voorna-afvallen.jpg', alt: 'Voor en na een traject afvallen', text: 'Duurzaam gewicht verliezen, zonder jojo-effect.' },
    title: 'Afvallen <em>zonder crashdieet.</em>',
    body: 'We werken met pure, onbewerkte voeding die je vult en energie geeft. Je leert wat je eet, waarom het werkt en hoe je het volhoudt, ook in drukke weken.',
    list: ['Voedingsplan op maat', 'Wekelijkse check-in en bijsturing', 'Recepten en boodschappenlijsten', 'WhatsApp support'],
    img: B + '/img/food-grid.jpg', alt: 'Vier voedzame kommen met pannenkoeken, fruit en pindakaas',
    cta: 'Start je intake: afvallen',
  },
  {
    key: 'gewicht', label: 'Op gewicht blijven', num: '02',
    card: { img: B + '/img/voorna-gewicht.jpg', alt: 'Voor en na een traject op gewicht blijven', text: 'Je resultaat vasthouden, ontspannen eten.' },
    title: 'Op gewicht blijven, <em>zonder stress.</em>',
    body: 'Je resultaat vasthouden is een vaardigheid. We zoeken een ritme waarin je geniet van etentjes en feestjes, en weet hoe je daarna gewoon weer oppakt.',
    list: ['Onderhoudsplan op maat', 'Tweewekelijkse check-in', 'Flexibele recepten voor elke dag', 'WhatsApp support'],
    img: B + '/img/food.jpg', alt: 'Kom met steak en groenten',
    cta: 'Start je intake: op gewicht blijven',
  },
  {
    key: 'aankomen', label: 'Aankomen', num: '03',
    card: { img: B + '/img/voorna-aankomen.jpg', alt: 'Voor en na een traject aankomen', text: 'Spiermassa opbouwen met de juiste voeding.' },
    title: 'Aankomen en <em>sterker worden.</em>',
    body: 'Gericht aankomen en spiermassa opbouwen met voeding die je training echt ondersteunt. Genoeg eiwitten, genoeg energie en een plan dat meegroeit met je progressie.',
    list: ['Voedingsplan afgestemd op je training', 'Wekelijkse check-in en bijsturing', 'Eiwitrijke recepten', 'WhatsApp support'],
    img: B + '/img/flex2.jpg', alt: 'Jikke toont haar rugspieren',
    cta: 'Start je intake: aankomen',
  },
];

export const steps = [
  { title: 'Gratis intake', text: 'We leren elkaar kennen: je doel, je dag en wat je tot nu toe tegenhield.' },
  { title: 'Plan op maat', text: 'Een voedingsplan dat past bij jouw smaak, ritme en training.' },
  { title: 'Wekelijkse coaching', text: 'Elke week een check-in. We sturen bij waar nodig.' },
  { title: 'Zelfstandig verder', text: 'Je leert zelf de juiste keuzes maken, zodat je resultaat blijft.' },
];

export const faq = [
  { q: 'Voor wie is deze coaching?', a: 'Voor iedereen met een concreet doel: afvallen, op gewicht blijven of aankomen. Je hoeft geen ervaring te hebben, we starten waar jij staat.' },
  { q: 'Hoe lang duurt een traject?', a: 'Ik werk met maandtrajecten. Hoe langer je kiest, hoe voordeliger het wordt en hoe meer resultaat je boekt.' },
  { q: 'Wat kost coaching?', a: 'Ik zet geen prijzen online. Plan een gratis intake in, dan bespreken we je doel en kijk ik welk traject bij jou past.' },
];
