/* Feito por GustavoN-S (https://github.com/GustavoN-S) */

window.BOB_DEMO_DATA = true;

window.BOB_CATEGORIES = [
  {
    id: 'apparel',
    name: 'Apparel',
    tagline: 'Moletons, camisetas e bones desenhados para a cidade.',
    blurb: 'Sweatshirts, tees and caps cut for New England weather.',
    image: 'boston-classic-crewneck.svg'
  },
  {
    id: 'gifts',
    name: 'Gifts',
    tagline: 'Pecas de mesa e cozinha para levar de lembranca.',
    blurb: 'Mugs, totes and glassware worth wrapping.',
    image: 'quincy-market-mug.svg'
  },
  {
    id: 'souvenirs',
    name: 'Souvenirs',
    tagline: 'O classico da vitrine: imas, globos e postais.',
    blurb: 'Magnets, snow globes, postcards and keyrings.',
    image: 'boston-snow-globe.svg'
  },
  {
    id: 'sports',
    name: 'Sports',
    tagline: 'Flamulas e pecas de arquibancada.',
    blurb: 'Felt pennants and game-day pieces.',
    image: 'hockey-felt-pennant.svg'
  },
  {
    id: 'kids',
    name: 'Kids',
    tagline: 'Pelucias e tamanhos pequenos.',
    blurb: 'Plush and small sizes for young travellers.',
    image: 'plush-sacred-cod.svg'
  },
  {
    id: 'local',
    name: 'Local Favorites',
    tagline: 'Doces e produtos da regiao, prontos para presente.',
    blurb: 'Candy and packaged goods made in New England.',
    image: 'salt-water-taffy-tin.svg'
  }
];

window.BOB_PRODUCTS = [
  {
    id: 'boston-classic-crewneck',
    name: 'Boston Classic Crewneck',
    category: 'apparel',
    price: 58,
    image: 'boston-classic-crewneck.svg',
    note: 'Heavyweight fleece, ribbed cuffs and hem.',
    description: 'The store classic. A heavyweight cotton-blend crewneck in harbor navy, ' +
      'with the Boston wordmark set in Caslon across the chest. Cut a little roomy so it ' +
      'wears well over a shirt on a cold walk down the Freedom Trail.',
    details: [
      ['Fabric', '80% cotton / 20% polyester fleece'],
      ['Colour', 'Harbor Navy'],
      ['Print', 'Screen printed chest wordmark'],
      ['Care', 'Machine wash cold, tumble dry low']
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    stock: 'in-store',
    tags: ['classic', 'warm', 'gift-friend', 'bestseller'],
    featured: true
  },
  {
    id: 'faneuil-hall-hoodie',
    name: 'Faneuil Hall Hooded Sweatshirt',
    category: 'apparel',
    price: 68,
    image: 'faneuil-hall-hoodie.svg',
    note: 'Heather fleece with a lined hood and pouch pocket.',
    description: 'A heather grey hooded sweatshirt carrying the Faneuil Hall mark and the ' +
      'hall’s founding year. Lined hood, kangaroo pocket, and a soft brushed interior ' +
      'that makes it the one people actually keep.',
    details: [
      ['Fabric', 'Brushed cotton-blend fleece'],
      ['Colour', 'Heather Grey'],
      ['Detail', 'Lined hood, pouch pocket'],
      ['Care', 'Machine wash cold, tumble dry low']
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    stock: 'in-store',
    tags: ['warm', 'gift-friend', 'bestseller'],
    featured: true
  },
  {
    id: 'freedom-trail-tee',
    name: 'Freedom Trail T-Shirt',
    category: 'apparel',
    price: 28,
    image: 'freedom-trail-tee.svg',
    note: 'The red line, printed where you walked it.',
    description: 'Two and a half miles, sixteen sites, one red line. This tee prints that ' +
      'line across the chest in brick red on a soft washed cotton body — the souvenir ' +
      'people buy the same afternoon they finish the walk.',
    details: [
      ['Fabric', '100% ring-spun cotton'],
      ['Colour', 'Natural'],
      ['Print', 'Two-colour screen print'],
      ['Care', 'Machine wash cold']
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    stock: 'in-store',
    tags: ['freedom-trail', 'light', 'gift-visitor', 'bestseller'],
    featured: true
  },
  {
    id: 'harbor-watch-cap',
    name: 'Boston Harbor Knit Cap',
    category: 'apparel',
    price: 26,
    image: 'harbor-watch-cap.svg',
    note: 'Ribbed knit with a folded cuff and pom.',
    description: 'A proper winter cap for a city that needs one. Ribbed knit in navy with a ' +
      'natural folded cuff, the Boston wordmark stitched across the front, and a pom on top.',
    details: [
      ['Fabric', 'Acrylic knit'],
      ['Colour', 'Navy / Natural'],
      ['Detail', 'Folded cuff, pom'],
      ['Fit', 'One size']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['warm', 'winter', 'gift-friend'],
    featured: false
  },
  {
    id: 'north-end-ball-cap',
    name: 'North End Ball Cap',
    category: 'apparel',
    price: 32,
    image: 'north-end-ball-cap.svg',
    note: 'Six-panel cotton twill, curved brim.',
    description: 'A six-panel cotton twill cap in navy with a curved brim and an embroidered ' +
      'BOS mark. Adjustable strap at the back, structured front, broken in after a week.',
    details: [
      ['Fabric', 'Cotton twill'],
      ['Colour', 'Navy'],
      ['Detail', 'Embroidered front, adjustable strap'],
      ['Fit', 'One size, adjustable']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['everyday', 'gift-friend'],
    featured: false
  },
  {
    id: 'quincy-market-mug',
    name: 'Quincy Market Stoneware Mug',
    category: 'gifts',
    price: 22,
    image: 'quincy-market-mug.svg',
    note: 'Heavy stoneware, 14 oz, double navy rule.',
    description: 'A heavy stoneware mug with a wide handle and two navy rules framing the ' +
      'Boston wordmark. Fourteen ounces, thick walls, the kind that holds heat through a ' +
      'long morning.',
    details: [
      ['Material', 'Glazed stoneware'],
      ['Capacity', '14 oz / 415 ml'],
      ['Colour', 'Cream / Navy'],
      ['Care', 'Dishwasher and microwave safe']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['kitchen', 'gift-home', 'bestseller'],
    featured: true
  },
  {
    id: 'sacred-cod-tote',
    name: 'Sacred Cod Canvas Tote',
    category: 'gifts',
    price: 24,
    image: 'sacred-cod-tote.svg',
    note: 'Cotton canvas with reinforced navy handles.',
    description: 'Heavy cotton canvas, reinforced handles, and the Sacred Cod — the ' +
      'carved fish that has hung in the Massachusetts State House since the eighteenth ' +
      'century. Flat bottom, so it stands up on its own.',
    details: [
      ['Material', '12 oz cotton canvas'],
      ['Size', '15" × 16" with 24" handles'],
      ['Colour', 'Natural / Navy'],
      ['Care', 'Spot clean']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['everyday', 'gift-home', 'packable'],
    featured: false
  },
  {
    id: 'beacon-hill-ornament',
    name: 'Beacon Hill Glass Ornament',
    category: 'gifts',
    price: 19,
    image: 'beacon-hill-ornament.svg',
    note: 'Hand-finished glass with a brass cap.',
    description: 'A navy glass ornament with the Boston skyline in sand and two brass rules ' +
      'circling the body. Comes boxed, which matters when it is going home in a suitcase.',
    details: [
      ['Material', 'Blown glass, brass cap'],
      ['Diameter', '3.25 in'],
      ['Colour', 'Navy / Brass'],
      ['Packing', 'Boxed for travel']
    ],
    sizes: null,
    stock: 'limited',
    tags: ['holiday', 'gift-home', 'packable'],
    featured: false
  },
  {
    id: 'charles-river-pint-glass',
    name: 'Charles River Pint Glass',
    category: 'gifts',
    price: 16,
    image: 'charles-river-pint-glass.svg',
    note: 'Full 16 oz shaker glass, etched mark.',
    description: 'A standard 16 ounce shaker pint with the Boston wordmark and a brick rule ' +
      'above the Charles River line. Thick base, honest weight, stacks in the cupboard.',
    details: [
      ['Material', 'Pressed glass'],
      ['Capacity', '16 oz / 473 ml'],
      ['Print', 'Two-colour applied mark'],
      ['Care', 'Dishwasher safe']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['kitchen', 'gift-home'],
    featured: false
  },
  {
    id: 'boston-snow-globe',
    name: 'Boston Skyline Snow Globe',
    category: 'souvenirs',
    price: 27,
    image: 'boston-snow-globe.svg',
    note: 'Weighted navy base with a brass rule.',
    description: 'The skyline under glass, on a weighted navy base with a brass rule and the ' +
      'Boston wordmark. Shake it and the Custom House tower disappears for a second.',
    details: [
      ['Material', 'Glass dome, resin base'],
      ['Height', '4.5 in'],
      ['Colour', 'Navy / Brass'],
      ['Packing', 'Boxed for travel']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['classic', 'gift-visitor', 'bestseller'],
    featured: true
  },
  {
    id: 'skyline-magnet',
    name: 'Boston Skyline Magnet',
    category: 'souvenirs',
    price: 7,
    image: 'skyline-magnet.svg',
    note: 'Framed enamel magnet, 3 in wide.',
    description: 'The one that goes home in every bag. A framed enamel magnet with the ' +
      'skyline in navy, the Boston wordmark above it and MASSACHUSETTS set small in brick red.',
    details: [
      ['Material', 'Enamel on steel'],
      ['Size', '3 in × 2 in'],
      ['Colour', 'Navy / Sand'],
      ['Packing', 'Carded']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['small', 'gift-visitor', 'packable', 'bestseller'],
    featured: false
  },
  {
    id: 'landmark-postcard-set',
    name: 'Landmark Postcard Set',
    category: 'souvenirs',
    price: 12,
    image: 'landmark-postcard-set.svg',
    note: 'Set of twelve, printed on uncoated stock.',
    description: 'Twelve postcards on heavy uncoated stock, one for each landmark within ' +
      'walking distance of the store. Printed to be written on, not just kept.',
    details: [
      ['Contents', '12 cards, 12 designs'],
      ['Stock', '300 gsm uncoated'],
      ['Size', '4 in × 6 in'],
      ['Packing', 'Banded set']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['small', 'paper', 'gift-visitor', 'packable'],
    featured: false
  },
  {
    id: 'harbor-lobster-keyring',
    name: 'Harbor Lobster Keyring',
    category: 'souvenirs',
    price: 9,
    image: 'harbor-lobster-keyring.svg',
    note: 'Enamel charm on a split steel ring.',
    description: 'A brick-red enamel lobster on a split steel ring. Small enough to forget in ' +
      'a pocket, obvious enough that people ask where you got it.',
    details: [
      ['Material', 'Enamel, steel ring'],
      ['Length', '2.75 in overall'],
      ['Colour', 'Brick Red'],
      ['Packing', 'Carded']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['small', 'harbor', 'gift-visitor', 'packable'],
    featured: false
  },
  {
    id: 'hockey-felt-pennant',
    name: 'Boston Hockey Felt Pennant',
    category: 'sports',
    price: 21,
    image: 'hockey-felt-pennant.svg',
    note: 'Wool-blend felt with a stitched brick band.',
    description: 'A wool-blend felt pennant in navy with a stitched brick band and two ' +
      'grommets. Printed in the old arena style, with BOSTON above HOCKEY CLUB.',
    details: [
      ['Material', 'Wool-blend felt'],
      ['Size', '12 in × 30 in'],
      ['Colour', 'Navy / Brick'],
      ['Detail', 'Two grommets for hanging']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['gameday', 'wall', 'gift-fan'],
    featured: true
  },
  {
    id: 'baseball-ringer-tee',
    name: 'Boston Baseball Ringer Tee',
    category: 'sports',
    price: 30,
    image: 'baseball-ringer-tee.svg',
    note: 'Contrast collar and cuffs, circle B mark.',
    description: 'A natural cotton ringer tee with brick collar and cuffs and a circled B on ' +
      'the chest. Cut straight, printed soft, made to look worn in from the first wash.',
    details: [
      ['Fabric', '100% ring-spun cotton'],
      ['Colour', 'Natural / Brick'],
      ['Print', 'Soft-hand screen print'],
      ['Care', 'Machine wash cold']
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    stock: 'in-store',
    tags: ['gameday', 'light', 'gift-fan'],
    featured: false
  },
  {
    id: 'official-weight-puck',
    name: 'Boston Official Weight Puck',
    category: 'sports',
    price: 14,
    image: 'official-weight-puck.svg',
    note: 'Vulcanised rubber, six ounces.',
    description: 'A regulation six-ounce vulcanised puck stamped with the Boston mark. It ' +
      'works as a paperweight, and it works on ice.',
    details: [
      ['Material', 'Vulcanised rubber'],
      ['Weight', '6 oz, regulation'],
      ['Colour', 'Black / Sand'],
      ['Detail', 'Stamped face']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['gameday', 'small', 'gift-fan', 'packable'],
    featured: false
  },
  {
    id: 'plush-sacred-cod',
    name: 'Plush Sacred Cod',
    category: 'kids',
    price: 23,
    image: 'plush-sacred-cod.svg',
    note: 'Soft-filled, 14 in nose to tail.',
    description: 'A soft-filled cod in harbour blue, fourteen inches nose to tail, with a ' +
      'stitched eye and a friendly face. The one children carry out of the store themselves.',
    details: [
      ['Material', 'Polyester plush'],
      ['Length', '14 in'],
      ['Colour', 'Harbour Blue'],
      ['Care', 'Surface wash']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['kids', 'plush', 'gift-kid'],
    featured: false
  },
  {
    id: 'salt-water-taffy-tin',
    name: 'New England Salt Water Taffy Tin',
    category: 'local',
    price: 18,
    image: 'salt-water-taffy-tin.svg',
    note: 'Refillable tin, eight assorted flavours.',
    description: 'A brick-red tin of assorted salt water taffy, pulled in New England. The ' +
      'tin outlasts the taffy by a decade, which is rather the point.',
    details: [
      ['Contents', 'Assorted taffy, 8 flavours'],
      ['Weight', '10 oz'],
      ['Tin', 'Refillable, 4.5 in'],
      ['Note', 'Contains milk and soy']
    ],
    sizes: null,
    stock: 'in-store',
    tags: ['edible', 'gift-home', 'local'],
    featured: true
  },
  {
    id: 'maple-candy-box',
    name: 'New England Maple Candy Box',
    category: 'local',
    price: 15,
    image: 'maple-candy-box.svg',
    note: 'Pressed maple leaves, boxed by the dozen.',
    description: 'A dozen pressed pure-maple candies in a printed box, made from New England ' +
      'sap. Sweet, brittle, and gone before the plane lands.',
    details: [
      ['Contents', '12 pressed maple candies'],
      ['Weight', '7 oz'],
      ['Origin', 'New England maple'],
      ['Note', 'Contains no artificial colour']
    ],
    sizes: null,
    stock: 'limited',
    tags: ['edible', 'gift-home', 'local', 'packable'],
    featured: false
  }
];

window.BOB_GIFT_EDITS = [
  {
    id: 'visitors',
    title: 'Gifts for Visitors',
    text: 'Primeira vez em Boston: o que conta a cidade em um objeto so.',
    blurb: 'First time in the city. One object that tells the whole story.',
    items: ['boston-snow-globe', 'freedom-trail-tee', 'landmark-postcard-set', 'skyline-magnet']
  },
  {
    id: 'friends',
    title: 'Gifts for Friends',
    text: 'Pecas que a pessoa vai usar de verdade quando voltar para casa.',
    blurb: 'Things people actually wear once they are home.',
    items: ['boston-classic-crewneck', 'faneuil-hall-hoodie', 'north-end-ball-cap', 'harbor-watch-cap']
  },
  {
    id: 'home',
    title: 'For the Kitchen Table',
    text: 'Cozinha e mesa: o souvenir que entra na rotina.',
    blurb: 'Kitchen and table pieces that get daily use.',
    items: ['quincy-market-mug', 'charles-river-pint-glass', 'sacred-cod-tote', 'beacon-hill-ornament']
  },
  {
    id: 'fans',
    title: 'For the Sports Fan',
    text: 'Arquibancada, parede e bolso.',
    blurb: 'Stands, wall and pocket.',
    items: ['hockey-felt-pennant', 'baseball-ringer-tee', 'official-weight-puck']
  },
  {
    id: 'small',
    title: 'Small Things, Under $15',
    text: 'Cabe na mala, cabe no orcamento, resolve a lista inteira.',
    blurb: 'Fits the suitcase and the budget. Clears the whole list.',
    items: ['skyline-magnet', 'harbor-lobster-keyring', 'landmark-postcard-set', 'official-weight-puck']
  },
  {
    id: 'edible',
    title: 'Something to Eat on the Way Home',
    text: 'Doces feitos na regiao, embalados para viagem.',
    blurb: 'New England candy, packed for the trip.',
    items: ['salt-water-taffy-tin', 'maple-candy-box']
  }
];
