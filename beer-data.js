const BEER_DATA = [  
  {  
    "name":"Kentucky Brunch Brand Stout",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Good Morning",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"8.40%"
  },
  {  
    "name":"Very Hazy",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.60%"
  },
  {  
    "name":"King Julius",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.30%"
  },
  {  
    "name":"Hunahpu's Imperial Stout - Double Barrel Aged",
    "brewery":"Cigar City Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"Pliny The Younger",
    "brewery":"Russian River Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"10.25%"
  },
  {  
    "name":"Mornin' Delight",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"King JJJuliusss",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.40%"
  },
  {  
    "name":"Barrel-Aged Abraxas",
    "brewery":"Perennial Artisan Ales",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"Heady Topper",
    "brewery":"The Alchemist",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Marshmallow Handjee (Bourbon Barrel Aged Vanilla Bean Dark Lord)",
    "brewery":"3 Floyds Brewing Co.",
    "style":"Russian Imperial Stout",
    "abv":"15.00%"
  },
  {  
    "name":"Dinner",
    "brewery":"Maine Beer Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.20%"
  },
  {  
    "name":"Juice Machine",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.20%"
  },
  {  
    "name":"Very Green",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.60%"
  },
  {  
    "name":"Julius",
    "brewery":"Tree House Brewing Company",
    "style":"American IPA",
    "abv":"6.80%"
  },
  {  
    "name":"Triple Sunshine IPA",
    "brewery":"Lawson's Finest Liquids",
    "style":"American Double / Imperial IPA",
    "abv":"10.50%"
  },
  {  
    "name":"AleSmith Speedway Stout - Vietnamese Coffee (Bourbon Barrel Aged)",
    "brewery":"AleSmith Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Founders CBS (Canadian Breakfast Stout)",
    "brewery":"Founders Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"10.60%"
  },
  {  
    "name":"Fundamental Observation",
    "brewery":"Bottle Logic Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"14.30%"
  },
  {  
    "name":"Doubleganger",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.20%"
  },
  {  
    "name":"JJJuliusss",
    "brewery":"Tree House Brewing Company",
    "style":"American IPA",
    "abv":"6.80%"
  },
  {  
    "name":"Trappist Westvleteren 12 (XII)",
    "brewery":"Brouwerij Westvleteren (Sint-Sixtusabdij van Westvleteren)",
    "style":"Quadrupel (Quad)",
    "abv":"10.20%"
  },
  {  
    "name":"King Sue",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Pliny The Elder",
    "brewery":"Russian River Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Morning Wood",
    "brewery":"Funky Buddha Brewery",
    "style":"American Porter",
    "abv":"12.00%"
  },
  {  
    "name":"Sunday Brunch",
    "brewery":"Kane Brewing Company",
    "style":"American Porter",
    "abv":"9.20%"
  },
  {  
    "name":"Double Dry Hop PseudoSue (Citra)",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Pale Ale (APA)",
    "abv":"5.80%"
  },
  {  
    "name":"Snowed In - Bourbon Barrel Aged",
    "brewery":"Funky Buddha Brewery",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"Bourbon County Brand Coffee Stout",
    "brewery":"Goose Island Beer Co.",
    "style":"American Double / Imperial Stout",
    "abv":"13.40%"
  },
  {  
    "name":"Abner",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Double / Imperial IPA",
    "abv":"8.20%"
  },
  {  
    "name":"Green",
    "brewery":"Tree House Brewing Company",
    "style":"American IPA",
    "abv":"7.60%"
  },
  {  
    "name":"Focal Banger",
    "brewery":"The Alchemist Brewery and Visitors Center",
    "style":"American IPA",
    "abv":"7.00%"
  },
  {  
    "name":"Founders KBS (Kentucky Breakfast Stout)",
    "brewery":"Founders Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"11.80%"
  },
  {  
    "name":"Double Shot",
    "brewery":"Tree House Brewing Company",
    "style":"American Stout",
    "abv":"7.60%"
  },
  {  
    "name":"Ann",
    "brewery":"Hill Farmstead Brewery",
    "style":"Saison / Farmhouse Ale",
    "abv":"6.50%"
  },
  {  
    "name":"Sip Of Sunshine",
    "brewery":"Lawson's Finest Liquids",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Alter Ego",
    "brewery":"Tree House Brewing Company",
    "style":"American IPA",
    "abv":"6.80%"
  },
  {  
    "name":"Assassin Imperial Stout",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Society & Solitude #4",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Double Dry Hopped Congress Street",
    "brewery":"Trillium Brewing Company",
    "style":"American IPA",
    "abv":"7.20%"
  },
  {  
    "name":"Doppelganger",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.20%"
  },
  {  
    "name":"Double Sunshine IPA",
    "brewery":"Lawson's Finest Liquids",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Nectarine Premiere",
    "brewery":"de Garde Brewing",
    "style":"Saison / Farmhouse Ale",
    "abv":"7.10%"
  },
  {  
    "name":"Fuzzy",
    "brewery":"Side Project Brewing",
    "style":"American Wild Ale",
    "abv":"8.00%"
  },
  {  
    "name":"Citra",
    "brewery":"Kern River Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Headroom",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Parabola",
    "brewery":"Firestone Walker Brewing Co.",
    "style":"Russian Imperial Stout",
    "abv":"14.00%"
  },
  {  
    "name":"Double Galaxy",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Haze",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.20%"
  },
  {  
    "name":"Mexican Brunch",
    "brewery":"Kane Brewing Company",
    "style":"American Porter",
    "abv":"9.20%"
  },
  {  
    "name":"Zombie Dust",
    "brewery":"3 Floyds Brewing Co.",
    "style":"American Pale Ale (APA)",
    "abv":"6.20%"
  },
  {  
    "name":"Trademark Dispute: Hazelnut",
    "brewery":"Peg's Cantina & Brew Pub",
    "style":"American Double / Imperial Stout"
  },
  {  
    "name":"Double Dry Hopped Fort Point Pale Ale",
    "brewery":"Trillium Brewing Company",
    "style":"American Pale Ale (APA)",
    "abv":"6.60%"
  },
  {  
    "name":"Swish",
    "brewery":"Bissell Brothers Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Aaron",
    "brewery":"Hill Farmstead Brewery",
    "style":"English Barleywine"
  },
  {  
    "name":"Duck Duck Gooze",
    "brewery":"The Lost Abbey",
    "style":"Gueuze",
    "abv":"7.00%"
  },
  {  
    "name":"Cantillon Fou' Foune",
    "brewery":"Brasserie Cantillon",
    "style":"Lambic - Fruit",
    "abv":"5.00%"
  },
  {  
    "name":"Bourbon Barrel Aged Abominable: Coffee And Cinnamon",
    "brewery":"Fremont Brewing Company",
    "style":"American Strong Ale",
    "abv":"14.00%"
  },
  {  
    "name":"In Perpetuity",
    "brewery":"Tree House Brewing Company",
    "style":"American IPA",
    "abv":"6.70%"
  },
  {  
    "name":"Beer Geek Vanilla Shake (Bourbon Edition)",
    "brewery":"Mikkeller ApS",
    "style":"American Double / Imperial Stout",
    "abv":"13.00%"
  },
  {  
    "name":"The Rusty Nail",
    "brewery":"Fremont Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"13.20%"
  },
  {  
    "name":"Atrial Rubicite",
    "brewery":"Jester King Brewery",
    "style":"American Wild Ale",
    "abv":"5.80%"
  },
  {  
    "name":"Evil Twin Double Barrel Jesus",
    "brewery":"Evil Twin Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Galaxy Dry Hopped Fort Point Pale Ale",
    "brewery":"Trillium Brewing Company",
    "style":"American Pale Ale (APA)",
    "abv":"6.60%"
  },
  {  
    "name":"Pugachev Royale",
    "brewery":"Hangar 24 Brewery",
    "style":"Russian Imperial Stout",
    "abv":"14.80%"
  },
  {  
    "name":"Brew 1000 - Bourbon Barrel Aged",
    "brewery":"Fremont Brewing Company",
    "style":"English Barleywine",
    "abv":"13.10%"
  },
  {  
    "name":"Hunahpu's Imperial Stout",
    "brewery":"Cigar City Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"Parabajava",
    "brewery":"Firestone Walker Brewing Co.",
    "style":"Russian Imperial Stout",
    "abv":"14.00%"
  },
  {  
    "name":"Double Citra",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Triple Shot",
    "brewery":"Tree House Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"9.00%"
  },
  {  
    "name":"Bourbon County Brand Stout",
    "brewery":"Goose Island Beer Co.",
    "style":"American Double / Imperial Stout",
    "abv":"13.80%"
  },
  {  
    "name":"BDCS",
    "brewery":"Ozark Beer Co.",
    "style":"American Double / Imperial Stout",
    "abv":"10.20%"
  },
  {  
    "name":"Notorious Triple IPA",
    "brewery":"Boneyard Beer Company",
    "style":"American Double / Imperial IPA",
    "abv":"12.00%"
  },
  {  
    "name":"Miami Madness",
    "brewery":"J. Wakefield Brewing",
    "style":"Berliner Weissbier",
    "abv":"5.50%"
  },
  {  
    "name":"Supplication",
    "brewery":"Russian River Brewing Company",
    "style":"American Wild Ale",
    "abv":"7.00%"
  },
  {  
    "name":"The Broken Truck",
    "brewery":"de Garde Brewing",
    "style":"American Wild Ale",
    "abv":"5.00%"
  },
  {  
    "name":"Bell's Black Note Stout",
    "brewery":"Bell's Brewery, Inc.",
    "style":"American Double / Imperial Stout",
    "abv":"10.80%"
  },
  {  
    "name":"Drie Fonteinen Zenne Y Frontera",
    "brewery":"Brouwerij 3 Fonteinen",
    "style":"Lambic - Unblended",
    "abv":"7.00%"
  },
  {  
    "name":"The Peach",
    "brewery":"de Garde Brewing",
    "style":"American Wild Ale",
    "abv":"7.30%"
  },
  {  
    "name":"Cutting Tiles (Mosaic)",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.50%"
  },
  {  
    "name":"Fuzzy Baby Ducks IPA",
    "brewery":"New England Brewing Co.",
    "style":"American IPA",
    "abv":"6.20%"
  },
  {  
    "name":"Caffè Americano",
    "brewery":"Cigar City Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"Bourbon County Brand Barleywine Ale",
    "brewery":"Goose Island Beer Co.",
    "style":"English Barleywine",
    "abv":"13.60%"
  },
  {  
    "name":"Kuhnhenn Bourbon Barrel Fourth Dementia",
    "brewery":"Kuhnhenn Brewing Company",
    "style":"Old Ale",
    "abv":"13.50%"
  },
  {  
    "name":"Westly",
    "brewery":"Sante Adairius Rustic Ales",
    "style":"American Wild Ale",
    "abv":"8.50%"
  },
  {  
    "name":"Bourbon Barrel Aged Dark Lord Imperial Stout",
    "brewery":"3 Floyds Brewing Co.",
    "style":"Russian Imperial Stout",
    "abv":"15.00%"
  },
  {  
    "name":"Cantillon Blåbær Lambik",
    "brewery":"Brasserie Cantillon",
    "style":"Lambic - Fruit",
    "abv":"5.00%"
  },
  {  
    "name":"Society & Solitude #5",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Double / Imperial IPA",
    "abv":"8.10%"
  },
  {  
    "name":"The Abyss",
    "brewery":"Deschutes Brewery",
    "style":"American Double / Imperial Stout",
    "abv":"12.20%"
  },
  {  
    "name":"Sosus",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Keene Idea",
    "brewery":"Alpine Beer Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.88%"
  },
  {  
    "name":"Bomb!",
    "brewery":"Prairie Artisan Ales",
    "style":"American Double / Imperial Stout",
    "abv":"13.00%"
  },
  {  
    "name":"Double Dry Hopped Double Mosaic Dream",
    "brewery":"Other Half Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"8.50%"
  },
  {  
    "name":"Drie Fonteinen Oude Geuze Vintage",
    "brewery":"Brouwerij 3 Fonteinen",
    "style":"Gueuze",
    "abv":"6.00%"
  },
  {  
    "name":"Wide Awake It's Morning",
    "brewery":"Funky Buddha Brewery",
    "style":"American Porter",
    "abv":"10.00%"
  },
  {  
    "name":"Pirate Bomb!",
    "brewery":"Prairie Artisan Ales",
    "style":"American Double / Imperial Stout",
    "abv":"14.00%"
  },
  {  
    "name":"PseudoSue",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Pale Ale (APA)",
    "abv":"5.80%"
  },
  {  
    "name":"Susan",
    "brewery":"Hill Farmstead Brewery",
    "style":"American IPA",
    "abv":"6.20%"
  },
  {  
    "name":"Crusher",
    "brewery":"The Alchemist Brewery and Visitors Center",
    "style":"American Double / Imperial IPA",
    "abv":"9.00%"
  },
  {  
    "name":"Cantillon Lou Pepe - Kriek",
    "brewery":"Brasserie Cantillon",
    "style":"Lambic - Fruit",
    "abv":"5.00%"
  },
  {  
    "name":"Master Of Karate",
    "brewery":"Aslin Beer Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.40%"
  },
  {  
    "name":"Dark Horse Bourbon Barrel Aged Plead The 5th",
    "brewery":"Dark Horse Brewing Company",
    "style":"Russian Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Saison Du Fermier",
    "brewery":"Side Project Brewing",
    "style":"Saison / Farmhouse Ale",
    "abv":"7.00%"
  },
  {  
    "name":"Founders Breakfast Stout",
    "brewery":"Founders Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"8.30%"
  },
  {  
    "name":"Drie Fonteinen Oude Geuze Golden Blend",
    "brewery":"Brouwerij 3 Fonteinen",
    "style":"Gueuze",
    "abv":"7.50%"
  },
  {  
    "name":"Mosaic Dry Hopped Fort Point",
    "brewery":"Trillium Brewing Company",
    "style":"American Pale Ale (APA)",
    "abv":"6.60%"
  },
  {  
    "name":"Ephraim",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Double / Imperial IPA",
    "abv":"10.00%"
  },
  {  
    "name":"Trappistes Rochefort 10",
    "brewery":"Brasserie de Rochefort",
    "style":"Quadrupel (Quad)",
    "abv":"11.30%"
  },
  {  
    "name":"Cable Car",
    "brewery":"The Lost Abbey",
    "style":"American Wild Ale",
    "abv":"7.00%"
  },
  {  
    "name":"Last Buffalo In The Park",
    "brewery":"Funky Buddha Brewery",
    "style":"American Double / Imperial Stout",
    "abv":"11.50%"
  },
  {  
    "name":"Trappist Westvleteren 8 (VIII)",
    "brewery":"Brouwerij Westvleteren (Sint-Sixtusabdij van Westvleteren)",
    "style":"Dubbel",
    "abv":"8.00%"
  },
  {  
    "name":"Montmorency Vs Balaton",
    "brewery":"Jester King Brewery",
    "style":"American Wild Ale",
    "abv":"6.70%"
  },
  {  
    "name":"Congress Street IPA",
    "brewery":"Trillium Brewing Company",
    "style":"American IPA",
    "abv":"7.20%"
  },
  {  
    "name":"Fort Point Pale Ale",
    "brewery":"Trillium Brewing Company",
    "style":"American Pale Ale (APA)",
    "abv":"6.60%"
  },
  {  
    "name":"Saison Bernice",
    "brewery":"Sante Adairius Rustic Ales",
    "style":"Saison / Farmhouse Ale",
    "abv":"6.50%"
  },
  {  
    "name":"Dragon Fruit Passion Fruit Berliner",
    "brewery":"J. Wakefield Brewing",
    "style":"Berliner Weissbier",
    "abv":"3.50%"
  },
  {  
    "name":"Black Tuesday",
    "brewery":"The Bruery",
    "style":"American Double / Imperial Stout",
    "abv":"19.20%"
  },
  {  
    "name":"Imperial Biscotti Break Bourbon Barrel Aged",
    "brewery":"Evil Twin Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"11.50%"
  },
  {  
    "name":"Upper Case",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"9.00%"
  },
  {  
    "name":"Everett Porter",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Porter",
    "abv":"7.50%"
  },
  {  
    "name":"Beatification",
    "brewery":"Russian River Brewing Company",
    "style":"American Wild Ale",
    "abv":"5.50%"
  },
  {  
    "name":"Bourbon Barrel Champion Ground",
    "brewery":"Jackie O's Pub & Brewery",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Bourbon Barrel Aged Dark Star Oatmeal Stout",
    "brewery":"Fremont Brewing Company",
    "style":"Oatmeal Stout",
    "abv":"14.50%"
  },
  {  
    "name":"Bourbon Barrel Aged Dark Star: Coffee Edition",
    "brewery":"Fremont Brewing Company",
    "style":"Oatmeal Stout",
    "abv":"14.50%"
  },
  {  
    "name":"3rd Anniversary Imperial IPA",
    "brewery":"Other Half Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"10.00%"
  },
  {  
    "name":"Ten FIDY Bourbon Barrel Aged",
    "brewery":"Oskar Blues Grill & Brew",
    "style":"Russian Imperial Stout",
    "abv":"12.90%"
  },
  {  
    "name":"AleSmith Speedway Stout - Bourbon Barrel Aged",
    "brewery":"AleSmith Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"§ucaba",
    "brewery":"Firestone Walker Brewing Co.",
    "style":"English Barleywine",
    "abv":"12.50%"
  },
  {  
    "name":"Juicy",
    "brewery":"Hill Farmstead Brewery",
    "style":"Saison / Farmhouse Ale",
    "abv":"7.40%"
  },
  {  
    "name":"Abrasive Ale",
    "brewery":"Surly Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"9.00%"
  },
  {  
    "name":"Permanent Funeral",
    "brewery":"3 Floyds Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"10.50%"
  },
  {  
    "name":"A Deal With The Devil",
    "brewery":"Anchorage Brewing Company",
    "style":"American Barleywine",
    "abv":"17.30%"
  },
  {  
    "name":"Stickee Monkee",
    "brewery":"Firestone Walker Brewing Co.",
    "style":"Quadrupel (Quad)",
    "abv":"11.60%"
  },
  {  
    "name":"Adam From The Wood",
    "brewery":"Hair of the Dog Brewing Company / Brewery and Tasting Room",
    "style":"Old Ale",
    "abv":"12.00%"
  },
  {  
    "name":"Black & Wild",
    "brewery":"Side Project Brewing",
    "style":"American Wild Ale",
    "abv":"10.00%"
  },
  {  
    "name":"Heavy Mettle",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"9.30%"
  },
  {  
    "name":"Abricot Du Fermier",
    "brewery":"Side Project Brewing",
    "style":"Saison / Farmhouse Ale",
    "abv":"8.00%"
  },
  {  
    "name":"Trickery",
    "brewery":"Hardywood Park Craft Brewery",
    "style":"Milk / Sweet Stout",
    "abv":"13.50%"
  },
  {  
    "name":"Imperial Russian Stout - Bourbon Barrel Aged",
    "brewery":"Stone Brewing",
    "style":"Russian Imperial Stout",
    "abv":"13.50%"
  },
  {  
    "name":"Barrel Aged Bomb!",
    "brewery":"Prairie Artisan Ales",
    "style":"American Double / Imperial Stout",
    "abv":"11.20%"
  },
  {  
    "name":"Clare's Thirsty Ale",
    "brewery":"Haymarket Pub & Brewery",
    "style":"American Double / Imperial Stout",
    "abv":"12.50%"
  },
  {  
    "name":"Bourbon Barrel Oro Negro",
    "brewery":"Jackie O's Pub & Brewery",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"Prairie Apple Brandy Noir",
    "brewery":"Prairie Artisan Ales",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Peg's G.O.O.D. RareR D.O.S.",
    "brewery":"Peg's Cantina & Brew Pub",
    "style":"American Double / Imperial Stout",
    "abv":"10.00%"
  },
  {  
    "name":"West Ashley",
    "brewery":"Sante Adairius Rustic Ales",
    "style":"American Wild Ale",
    "abv":"7.30%"
  },
  {  
    "name":"Ground State",
    "brewery":"Bottle Logic Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"13.40%"
  },
  {  
    "name":"Citraquench'l",
    "brewery":"Heist Brewery",
    "style":"American IPA",
    "abv":"6.70%"
  },
  {  
    "name":"Todd The Axe Man",
    "brewery":"Surly Brewing Company",
    "style":"American IPA",
    "abv":"7.20%"
  },
  {  
    "name":"Barrel-Aged Silhouette",
    "brewery":"Lift Bridge Brewery",
    "style":"Russian Imperial Stout",
    "abv":"10.00%"
  },
  {  
    "name":"Society & Solitude #6",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Double / Imperial IPA",
    "abv":"8.10%"
  },
  {  
    "name":"Prairie Barrel Aged Bomb! (Fred's Blend)",
    "brewery":"Prairie Artisan Ales",
    "style":"American Double / Imperial Stout",
    "abv":"13.00%"
  },
  {  
    "name":"Double Dry Hopped Melcher Street",
    "brewery":"Trillium Brewing Company",
    "style":"American IPA",
    "abv":"7.20%"
  },
  {  
    "name":"Dialed In (w/ Sauvignon Blanc Juice)",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.50%"
  },
  {  
    "name":"Maple Bacon Coffee Porter",
    "brewery":"Funky Buddha Brewery",
    "style":"American Porter",
    "abv":"6.40%"
  },
  {  
    "name":"Drie Fonteinen Framboos",
    "brewery":"Brouwerij 3 Fonteinen",
    "style":"Lambic - Fruit",
    "abv":"5.00%"
  },
  {  
    "name":"Last Snow",
    "brewery":"Funky Buddha Brewery",
    "style":"American Porter",
    "abv":"6.40%"
  },
  {  
    "name":"Double Dry Hopped Sleeper Street",
    "brewery":"Trillium Brewing Company",
    "style":"American IPA",
    "abv":"7.20%"
  },
  {  
    "name":"Genealogy Of Morals (Bourbon Barrel Aged)",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Double / Imperial Stout",
    "abv":"10.70%"
  },
  {  
    "name":"Derivation #6 (Cinnamon, Cocoa Nibs And Ugandan Vanilla)",
    "brewery":"Side Project Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"15.00%"
  },
  {  
    "name":"Space Trace",
    "brewery":"Bottle Logic Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"11.10%"
  },
  {  
    "name":"Hopslam Ale",
    "brewery":"Bell's Brewery, Inc.",
    "style":"American Double / Imperial IPA",
    "abv":"10.00%"
  },
  {  
    "name":"Abraxas",
    "brewery":"Perennial Artisan Ales",
    "style":"American Double / Imperial Stout",
    "abv":"10.00%"
  },
  {  
    "name":"Double Dry Hopped Mylar Bags",
    "brewery":"Other Half Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"8.50%"
  },
  {  
    "name":"Trademark Dispute: Pallet 1",
    "brewery":"Peg's Cantina & Brew Pub",
    "style":"American Double / Imperial Stout",
    "abv":"10.40%"
  },
  {  
    "name":"Mosaic IPA",
    "brewery":"Other Half Brewing Co.",
    "style":"American IPA",
    "abv":"7.20%"
  },
  {  
    "name":"Hop JuJu Imperial IPA",
    "brewery":"Fat Head's Brewery & Saloon",
    "style":"American Double / Imperial IPA",
    "abv":"9.00%"
  },
  {  
    "name":"Kentucky Christmas Morning",
    "brewery":"Hardywood Park Craft Brewery",
    "style":"Milk / Sweet Stout",
    "abv":"10.60%"
  },
  {  
    "name":"Cantillon Saint Lamvinus",
    "brewery":"Brasserie Cantillon",
    "style":"Lambic - Fruit",
    "abv":"5.00%"
  },
  {  
    "name":"Second Fiddle",
    "brewery":"Fiddlehead Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"AleSmith Speedway Stout - Vietnamese Coffee",
    "brewery":"AleSmith Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Double Stack",
    "brewery":"Great Notion Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"10.00%"
  },
  {  
    "name":"Sure Bet",
    "brewery":"Pipeworks Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"9.50%"
  },
  {  
    "name":"Lumen",
    "brewery":"Grimm Artisanal Ales",
    "style":"American IPA",
    "abv":"6.40%"
  },
  {  
    "name":"Coriolis",
    "brewery":"New England Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"8.20%"
  },
  {  
    "name":"Columbus Bodhi",
    "brewery":"Columbus Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.50%"
  },
  {  
    "name":"Leche Borracho",
    "brewery":"Bottle Logic Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"Chocolate Rain",
    "brewery":"The Bruery",
    "style":"American Double / Imperial Stout",
    "abv":"18.50%"
  },
  {  
    "name":"Rodenbach Caractère Rouge",
    "brewery":"Brouwerij Rodenbach N.V.",
    "style":"Flanders Red Ale",
    "abv":"7.00%"
  },
  {  
    "name":"St. Bernardus Abt 12",
    "brewery":"Brouwerij St. Bernardus NV",
    "style":"Quadrupel (Quad)",
    "abv":"10.00%"
  },
  {  
    "name":"Epiphany",
    "brewery":"Foundation Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Madagascar",
    "brewery":"4 Hands Brewing Co.",
    "style":"Milk / Sweet Stout",
    "abv":"9.30%"
  },
  {  
    "name":"Cantillon Lou Pepe - Framboise",
    "brewery":"Brasserie Cantillon",
    "style":"Lambic - Fruit",
    "abv":"5.00%"
  },
  {  
    "name":"Damon (Bourbon Barrel Aged)",
    "brewery":"Hill Farmstead Brewery",
    "style":"Russian Imperial Stout",
    "abv":"10.50%"
  },
  {  
    "name":"Imperial Eclipse Stout - Elijah Craig (12 Year)",
    "brewery":"FiftyFifty Brewing Co.",
    "style":"American Double / Imperial Stout",
    "abv":"11.90%"
  },
  {  
    "name":"Trademark Dispute: &+",
    "brewery":"Peg's Cantina & Brew Pub",
    "style":"American Double / Imperial Stout",
    "abv":"10.50%"
  },
  {  
    "name":"Cutting Tiles (Galaxy)",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.50%"
  },
  {  
    "name":"No Rules",
    "brewery":"Perrin Brewery",
    "style":"American Porter",
    "abv":"15.00%"
  },
  {  
    "name":"Clover",
    "brewery":"Hill Farmstead Brewery",
    "style":"Saison / Farmhouse Ale"
  },
  {  
    "name":"Darkness",
    "brewery":"Surly Brewing Company",
    "style":"Russian Imperial Stout",
    "abv":"10.30%"
  },
  {  
    "name":"Double Dry Hopped Scaled",
    "brewery":"Trillium Brewing Company",
    "style":"American IPA",
    "abv":"7.00%"
  },
  {  
    "name":"Orange Starfish",
    "brewery":"Aslin Beer Company",
    "style":"American IPA",
    "abv":"5.70%"
  },
  {  
    "name":"Citra Showers",
    "brewery":"Noble Ale Works",
    "style":"American Double / Imperial IPA",
    "abv":"8.80%"
  },
  {  
    "name":"Oro Negro",
    "brewery":"Jackie O's Pub & Brewery",
    "style":"American Double / Imperial Stout",
    "abv":"10.50%"
  },
  {  
    "name":"Locust Reign",
    "brewery":"New England Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"8.50%"
  },
  {  
    "name":"Scaled Up",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Ghost In The Machine",
    "brewery":"Parish Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Dragonsaddle",
    "brewery":"Hoof Hearted Brewing",
    "style":"American Double / Imperial IPA",
    "abv":"11.20%"
  },
  {  
    "name":"Born Yesterday APA",
    "brewery":"Lagunitas Brewing Company",
    "style":"American Pale Ale (APA)",
    "abv":"7.00%"
  },
  {  
    "name":"Bad Boy",
    "brewery":"Alpine Beer Company",
    "style":"American Double / Imperial IPA",
    "abv":"9.00%"
  },
  {  
    "name":"Mother Of All Storms",
    "brewery":"Pelican Pub & Brewery",
    "style":"English Barleywine",
    "abv":"14.00%"
  },
  {  
    "name":"Consecration",
    "brewery":"Russian River Brewing Company",
    "style":"American Wild Ale",
    "abv":"10.00%"
  },
  {  
    "name":"Dusk Trill Dawn",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"11.50%"
  },
  {  
    "name":"Caffe Americano - Rum Barrel Aged",
    "brewery":"Cigar City Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"9.20%"
  },
  {  
    "name":"Yellow Rose",
    "brewery":"The Lone Pint Brewery",
    "style":"American IPA",
    "abv":"6.80%"
  },
  {  
    "name":"Cascade Sang Noir",
    "brewery":"Cascade Brewing / Raccoon Lodge & Brewpub",
    "style":"American Wild Ale",
    "abv":"9.50%"
  },
  {  
    "name":"Temptation",
    "brewery":"Russian River Brewing Company",
    "style":"American Wild Ale",
    "abv":"7.50%"
  },
  {  
    "name":"Afterimage",
    "brewery":"Grimm Artisanal Ales",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Coffee Abraxas",
    "brewery":"Perennial Artisan Ales",
    "style":"American Double / Imperial Stout",
    "abv":"10.00%"
  },
  {  
    "name":"Snozzberry",
    "brewery":"Green Man Brewery",
    "style":"American Wild Ale",
    "abv":"5.50%"
  },
  {  
    "name":"Alexander",
    "brewery":"Brouwerij Rodenbach N.V.",
    "style":"Flanders Red Ale",
    "abv":"5.00%"
  },
  {  
    "name":"The Streets",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"10.00%"
  },
  {  
    "name":"Sante Adairius / Triple Rock Cellarman Barrel Aged Saison",
    "brewery":"Sante Adairius Rustic Ales",
    "style":"Saison / Farmhouse Ale",
    "abv":"6.50%"
  },
  {  
    "name":"Samuel Adams Utopias",
    "brewery":"Boston Beer Company (Samuel Adams)",
    "style":"American Strong Ale",
    "abv":"29.00%"
  },
  {  
    "name":"XHOPS (Gold Label)",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Pale Ale (APA)",
    "abv":"5.30%"
  },
  {  
    "name":"3 Floyds / The Bruery Rue D'Floyd",
    "brewery":"3 Floyds Brewing Co.",
    "style":"American Porter",
    "abv":"14.40%"
  },
  {  
    "name":"Stone Enjoy By IPA",
    "brewery":"Stone Brewing",
    "style":"American Double / Imperial IPA",
    "abv":"9.40%"
  },
  {  
    "name":"Tweak",
    "brewery":"Avery Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"17.50%"
  },
  {  
    "name":"Weihenstephaner Hefeweissbier",
    "brewery":"Bayerische Staatsbrauerei Weihenstephan",
    "style":"Hefeweizen",
    "abv":"5.40%"
  },
  {  
    "name":"The Pupil",
    "brewery":"Societe Brewing Co.",
    "style":"American IPA",
    "abv":"7.80%"
  },
  {  
    "name":"Oude Fermier",
    "brewery":"Side Project Brewing",
    "style":"Saison / Farmhouse Ale",
    "abv":"7.00%"
  },
  {  
    "name":"Mind The Hop",
    "brewery":"Aslin Beer Company",
    "style":"American Double / Imperial IPA",
    "abv":"9.50%"
  },
  {  
    "name":"Vicinity",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Bourbon Barrel Black Maple",
    "brewery":"Jackie O's Pub & Brewery",
    "style":"American Porter",
    "abv":"11.00%"
  },
  {  
    "name":"Péché Mortel En Fût De Bourbon Américain",
    "brewery":"Brasserie Dieu du Ciel!",
    "style":"American Double / Imperial Stout",
    "abv":"9.50%"
  },
  {  
    "name":"Nut Smasher",
    "brewery":"Willoughby Brewing",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"HOPSMACK!",
    "brewery":"Toppling Goliath Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Mocha Wednesday",
    "brewery":"The Bruery",
    "style":"American Double / Imperial Stout",
    "abv":"19.20%"
  },
  {  
    "name":"Softly Spoken Magic Spells",
    "brewery":"SingleCut Beersmiths",
    "style":"American Double / Imperial IPA",
    "abv":"8.60%"
  },
  {  
    "name":"Double Shot- Batch 500",
    "brewery":"Tree House Brewing Company",
    "style":"American Stout",
    "abv":"8.60%"
  },
  {  
    "name":"Trademark Dispute: Nooner 10",
    "brewery":"Peg's Cantina & Brew Pub",
    "style":"American Double / Imperial Stout",
    "abv":"12.00%"
  },
  {  
    "name":"Dreadnaught IPA",
    "brewery":"3 Floyds Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"9.50%"
  },
  {  
    "name":"Great",
    "brewery":"Alpine Beer Company",
    "style":"American Barleywine",
    "abv":"14.00%"
  },
  {  
    "name":"Matt",
    "brewery":"Hair of the Dog Brewing Company / Brewery and Tasting Room",
    "style":"American Strong Ale",
    "abv":"11.50%"
  },
  {  
    "name":"Dialed In (w/ Pinot Gris Juice)",
    "brewery":"Trillium Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"8.50%"
  },
  {  
    "name":"Péché Mortel",
    "brewery":"Brasserie Dieu du Ciel!",
    "style":"American Double / Imperial Stout",
    "abv":"9.50%"
  },
  {  
    "name":"Darkstar November",
    "brewery":"Bottle Logic Brewing",
    "style":"Russian Imperial Stout",
    "abv":"13.70%"
  },
  {  
    "name":"Grey Monday",
    "brewery":"The Bruery",
    "style":"American Double / Imperial Stout",
    "abv":"19.50%"
  },
  {  
    "name":"Breakfast Exorcism",
    "brewery":"Clown Shoes",
    "style":"American Double / Imperial Stout",
    "abv":"11.00%"
  },
  {  
    "name":"Box Set Track #10 - Bat Out Of Hell",
    "brewery":"The Lost Abbey",
    "style":"American Double / Imperial Stout",
    "abv":"13.50%"
  },
  {  
    "name":"All Green Everything",
    "brewery":"Other Half Brewing Co.",
    "style":"American Double / Imperial IPA",
    "abv":"10.50%"
  },
  {  
    "name":"Pipeworks / 4 Hands Emerald Grouper",
    "brewery":"Pipeworks Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"9.50%"
  },
  {  
    "name":"Rare DOS",
    "brewery":"Peg's Cantina & Brew Pub",
    "style":"American Double / Imperial Stout",
    "abv":"10.00%"
  },
  {  
    "name":"Edward",
    "brewery":"Hill Farmstead Brewery",
    "style":"American Pale Ale (APA)",
    "abv":"5.20%"
  },
  {  
    "name":"Lambo Door",
    "brewery":"Grimm Artisanal Ales",
    "style":"American Double / Imperial IPA",
    "abv":"8.00%"
  },
  {  
    "name":"Peche 'n Brett",
    "brewery":"Logsdon Farmhouse Ales",
    "style":"Saison / Farmhouse Ale",
    "abv":"10.00%"
  },
  {  
    "name":"A Night To End All Dawns",
    "brewery":"Kane Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"12.20%"
  },
  {  
    "name":"Spotted Puffer",
    "brewery":"Pipeworks Brewing Company",
    "style":"American Double / Imperial IPA",
    "abv":"9.50%"
  },
  {  
    "name":"Drie Fonteinen Hommage",
    "brewery":"Brouwerij 3 Fonteinen",
    "style":"Lambic - Fruit",
    "abv":"6.00%"
  },
  {  
    "name":"High West-ified Imperial Coffee Stout",
    "brewery":"Lagunitas Brewing Company",
    "style":"American Double / Imperial Stout",
    "abv":"12.20%"
  },
  {  
    "name":"Cantillon Lou Pepe - Gueuze",
    "brewery":"Brasserie Cantillon",
    "style":"Gueuze",
    "abv":"5.00%"
  }
];

module.exports = { BEER_DATA }
