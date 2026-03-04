import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/bigtree";

const TreeSchema = new mongoose.Schema({
  name: String,
  species: String,
  lat: Number,
  lng: Number,
  height: Number,
  circumference: Number,
  description: String,
});

const Tree = mongoose.model("Tree", TreeSchema);

const trees = [
  // === LARGEST BY VOLUME (Giant Sequoias) ===
  {
    name: "General Sherman",
    species: "Giant Sequoia",
    lat: 36.5819,
    lng: -118.7511,
    height: 83.8,
    circumference: 31.3,
    description:
      "Largest living tree on Earth by volume at 1,487 cubic meters. Sequoia National Park, California.",
  },
  {
    name: "General Grant",
    species: "Giant Sequoia",
    lat: 36.7466,
    lng: -118.9759,
    height: 81.4,
    circumference: 32.8,
    description:
      "Third largest tree by volume and designated the U.S. National Christmas Tree. Kings Canyon National Park, California.",
  },
  {
    name: "President",
    species: "Giant Sequoia",
    lat: 36.5624,
    lng: -118.7515,
    height: 73.4,
    circumference: 28.0,
    description:
      "Second largest tree by total wood volume (trunk + branches), ~3,240 years old. Sequoia National Park, California.",
  },
  {
    name: "Lincoln",
    species: "Giant Sequoia",
    lat: 36.5715,
    lng: -118.7574,
    height: 77.7,
    circumference: 29.8,
    description:
      "Fourth largest giant sequoia by trunk volume at 1,259 cubic meters. Giant Forest, Sequoia National Park.",
  },
  {
    name: "Stagg",
    species: "Giant Sequoia",
    lat: 36.186,
    lng: -118.622,
    height: 74.1,
    circumference: 33.2,
    description:
      "Fifth largest tree in the world, over 3,000 years old. Alder Creek Grove, southern Sierra Nevada, California.",
  },
  {
    name: "Boole Tree",
    species: "Giant Sequoia",
    lat: 36.821,
    lng: -118.9428,
    height: 81.7,
    circumference: 34.0,
    description:
      "Sixth largest giant sequoia with the largest base circumference of any sequoia. Giant Sequoia National Monument, California.",
  },
  {
    name: "Genesis Tree",
    species: "Giant Sequoia",
    lat: 36.0372,
    lng: -118.5267,
    height: 77,
    circumference: 26.0,
    description:
      "One of the largest giant sequoias, located in the Mountain Home Grove, California.",
  },

  // === TALLEST TREES (Coast Redwoods) ===
  {
    name: "Hyperion",
    species: "Coast Redwood",
    lat: 41.2049,
    lng: -124.0156,
    height: 116.07,
    circumference: 15.5,
    description:
      "Tallest known living tree on Earth at 116.07 m. Discovered in 2006 in Redwood National Park, California. Area closed to public since 2022.",
  },
  {
    name: "Helios",
    species: "Coast Redwood",
    lat: 41.21,
    lng: -124.02,
    height: 114.58,
    circumference: null,
    description:
      "Second tallest tree in the world at ~114.6 m. Discovered in 2006 in Redwood National Park near Hyperion.",
  },
  {
    name: "Icarus",
    species: "Coast Redwood",
    lat: 41.21,
    lng: -124.02,
    height: 113.14,
    circumference: 12.0,
    description:
      "Third tallest tree in the world at ~113 m. Discovered in 2006 in Redwood National Park, California.",
  },
  {
    name: "Stratosphere Giant",
    species: "Coast Redwood",
    lat: 40.3493,
    lng: -123.9756,
    height: 113.61,
    circumference: null,
    description:
      "Fourth tallest tree in the world at 113.6 m. Humboldt Redwoods State Park, California.",
  },
  {
    name: "Mendocino Tree",
    species: "Coast Redwood",
    lat: 39.2345,
    lng: -123.396,
    height: 112.0,
    circumference: null,
    description:
      "Former world's tallest tree (1996-2000) at 112 m. Montgomery Woods State Natural Reserve, California.",
  },

  // === WIDEST / STOUTEST TREES ===
  {
    name: "Arbol del Tule",
    species: "Montezuma Cypress",
    lat: 17.0464,
    lng: -96.6364,
    height: 40,
    circumference: 42.0,
    description:
      "Widest tree trunk in the world at 42 m circumference (14 m diameter). Over 1,400 years old. Santa Maria del Tule, Oaxaca, Mexico.",
  },
  {
    name: "Sunland Baobab",
    species: "African Baobab",
    lat: -23.6217,
    lng: 30.0117,
    height: 22,
    circumference: 47.0,
    description:
      "Once had a bar inside its hollow trunk. Partially collapsed in 2017, formerly one of the largest baobabs. Limpopo, South Africa.",
  },
  {
    name: "Sagole Baobab",
    species: "African Baobab",
    lat: -22.5002,
    lng: 30.6331,
    height: 20.5,
    circumference: 34.35,
    description:
      "Largest living baobab in South Africa at over 34 m circumference. Estimated 800-900 years old. Limpopo Province.",
  },
  {
    name: "The Great Banyan",
    species: "Indian Banyan",
    lat: 22.5608,
    lng: 88.2868,
    height: 24.5,
    circumference: null,
    description:
      "Covers nearly 19,000 square meters with 3,772 aerial prop roots — looks like a forest, not a single tree. Kolkata Botanical Garden, India.",
  },
  {
    name: "Thimmamma Marrimanu",
    species: "Indian Banyan",
    lat: 14.028,
    lng: 78.3251,
    height: null,
    circumference: null,
    description:
      "Guinness World Record holder for largest canopy coverage at 19,107 square meters (4.7 acres), over 550 years old. Andhra Pradesh, India.",
  },
  {
    name: "Hundred Horse Chestnut",
    species: "Sweet Chestnut",
    lat: 37.7502,
    lng: 15.1304,
    height: null,
    circumference: 57.9,
    description:
      "Largest and oldest known chestnut tree, 2,000-4,000 years old. Historic circumference of 57.9 m. Slopes of Mount Etna, Sicily, Italy.",
  },

  // === OLDEST / MOST FAMOUS TREES WORLDWIDE ===
  {
    name: "Methuselah",
    species: "Great Basin Bristlecone Pine",
    lat: 37.3861,
    lng: -118.1775,
    height: null,
    circumference: null,
    description:
      "One of the oldest known non-clonal trees at 4,857 years old. Ancient Bristlecone Pine Forest, White Mountains, California. Exact location secret.",
  },
  {
    name: "Jomon Sugi",
    species: "Japanese Cedar (Cryptomeria)",
    lat: 30.3613,
    lng: 130.5322,
    height: 25.3,
    circumference: 16.4,
    description:
      "Estimated 2,170-7,200 years old. Oldest and largest cryptomeria on Yakushima Island, Japan. UNESCO World Heritage Site.",
  },
  {
    name: "Tane Mahuta",
    species: "Kauri",
    lat: -35.6003,
    lng: 173.528,
    height: 51.0,
    circumference: 13.77,
    description:
      "Largest known living kauri tree, 'Lord of the Forest' in Maori. Estimated 1,250-2,500 years old. Waipoua Forest, New Zealand.",
  },
  {
    name: "Te Matua Ngahere",
    species: "Kauri",
    lat: -35.6288,
    lng: 173.5283,
    height: 29.9,
    circumference: 16.4,
    description:
      "The widest kauri tree in New Zealand and the second largest. 'Father of the Forest.' Waipoua Forest, Northland.",
  },
  {
    name: "Major Oak",
    species: "English Oak",
    lat: 53.2028,
    lng: -1.0701,
    height: 16.0,
    circumference: 10.0,
    description:
      "Legendary 800-1,000 year old oak associated with Robin Hood folklore. Voted Britain's favourite tree. Sherwood Forest, England.",
  },
  {
    name: "Alerce Milenario (Gran Abuelo)",
    species: "Patagonian Cypress",
    lat: -40.1737,
    lng: -73.4739,
    height: 28,
    circumference: 11.0,
    description:
      "Possibly the oldest tree on Earth — estimated up to 5,000+ years old. Alerce Costero National Park, Chile.",
  },
  {
    name: "Centurion",
    species: "Mountain Ash (Eucalyptus regnans)",
    lat: -43.0773,
    lng: 146.7687,
    height: 100.5,
    circumference: 12.0,
    description:
      "Tallest flowering plant on Earth and tallest tree in the Southern Hemisphere at 100.5 m. Arve Valley, Tasmania, Australia.",
  },
  {
    name: "Fortingall Yew",
    species: "European Yew",
    lat: 56.598,
    lng: -4.0507,
    height: null,
    circumference: null,
    description:
      "Estimated 2,000-5,000 years old, one of the oldest trees in Europe. Churchyard in Perthshire, Scotland.",
  },
  {
    name: "Llangernyw Yew",
    species: "Common Yew",
    lat: 53.2258,
    lng: -3.572,
    height: 13,
    circumference: 10.8,
    description:
      "Estimated 4,000-5,000 years old, one of the oldest known trees in the world. St. Digain's Church, Llangernyw, Wales.",
  },
  {
    name: "Angel Oak",
    species: "Southern Live Oak",
    lat: 32.7173,
    lng: -80.0743,
    height: 20,
    circumference: 8.5,
    description:
      "Estimated 400-500 years old with a canopy covering 17,200 sq ft and a branch reaching 187 ft. Johns Island, South Carolina.",
  },
  {
    name: "Pando (Quaking Aspen)",
    species: "Quaking Aspen",
    lat: 38.525,
    lng: -111.75,
    height: null,
    circumference: null,
    description:
      "The heaviest known organism — a clonal colony of ~47,000 stems spanning 43 hectares, weighing ~6,000 tonnes. Fishlake National Forest, Utah.",
  },
  {
    name: "Olive Tree of Vouves",
    species: "Olive",
    lat: 35.4742,
    lng: 23.7825,
    height: 12.5,
    circumference: 12.5,
    description:
      "One of the oldest olive trees in the world, estimated 2,000-4,000 years old and still producing olives. Vouves, Crete, Greece.",
  },
  {
    name: "Cypress of Abarkuh",
    species: "Mediterranean Cypress",
    lat: 31.1266,
    lng: 53.2756,
    height: 25,
    circumference: 18.0,
    description:
      "Estimated over 4,000 years old, one of the oldest living organisms in Asia. Abarkuh, Yazd Province, Iran.",
  },
  {
    name: "Avenue of the Baobabs",
    species: "Grandidier's Baobab",
    lat: -20.2504,
    lng: 44.4196,
    height: 30,
    circumference: null,
    description:
      "Iconic group of ~20 ancient baobabs lining a road in western Madagascar. Some estimated at 800+ years old. A national natural monument.",
  },
  {
    name: "Drago Milenario",
    species: "Canary Islands Dragon Tree",
    lat: 28.3666,
    lng: -16.7221,
    height: 17,
    circumference: 20.0,
    description:
      "Largest and oldest Canary Islands dragon tree, estimated 800-1,000 years old, weighing ~150 tonnes. Icod de los Vinos, Tenerife.",
  },
  {
    name: "Dragon Blood Trees of Socotra",
    species: "Socotra Dragon Tree",
    lat: 12.47,
    lng: 53.87,
    height: null,
    circumference: null,
    description:
      "Unique umbrella-shaped trees found only on Socotra Island, Yemen, producing blood-red sap. Threatened by climate change.",
  },
  {
    name: "Black River Bald Cypress",
    species: "Bald Cypress",
    lat: 34.41,
    lng: -78.32,
    height: null,
    circumference: null,
    description:
      "At least 2,624 years old, the oldest known living tree in eastern North America and oldest known wetland tree. Black River, North Carolina.",
  },
  {
    name: "Kongeegen (King Oak)",
    species: "Pedunculate Oak",
    lat: 55.9056,
    lng: 11.9791,
    height: null,
    circumference: null,
    description:
      "Estimated 1,500-2,000 years old, possibly the oldest oak in northern Europe. Jaegerspris Nordskov forest, Denmark.",
  },
  {
    name: "Fitzroya — Parque Alerce Andino",
    species: "Patagonian Cypress",
    lat: -41.6,
    lng: -72.6167,
    height: 60,
    circumference: 14.0,
    description:
      "One of the tallest specimens of Fitzroya cupressoides, the largest tree species in South America. Alerce Andino National Park, Chile.",
  },
  {
    name: "Cedro de la Sabina",
    species: "Canary Island Juniper",
    lat: 27.7383,
    lng: -17.9875,
    height: 8,
    circumference: 7.7,
    description:
      "A dramatically wind-twisted ancient juniper tree, over 1,000 years old. El Hierro, Canary Islands, Spain.",
  },
  {
    name: "Grogan's Fault Kauri",
    species: "Kauri",
    lat: -36.8071,
    lng: 174.523,
    height: 41.4,
    circumference: 12.5,
    description:
      "Third largest kauri in New Zealand. Located in the Waitakere Ranges near Auckland.",
  },

  // === ITALIAN MONUMENTAL TREES (from Italian Ministry of Agriculture registry) ===
  {
    name: "Fico magnolioide di Palermo",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 38.1175,
    lng: 13.3696,
    height: 21.0,
    circumference: 36.0,
    description:
      "Ficus macrophylla. Trunk circumference: 36.0m. Height: 21.0m. Notable for exceptional age and/or size. Located in Villa Garibaldi - Piazza Marina, Palermo, Palermo, Italy.",
  },
  {
    name: "Fico magnolioide di Palermo #2",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 38.183,
    lng: 13.321,
    height: 25.0,
    circumference: 34.0,
    description:
      "Ficus macrophylla. Trunk circumference: 34.0m. Height: 25.0m. Notable for exceptional age and/or size. Located in Zen - Viale Sandro Pertini, 710, Palermo, Palermo, Italy.",
  },
  {
    name: "Fico magnolioide di Palermo #3",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 38.1229,
    lng: 13.3415,
    height: 16.0,
    circumference: 21.0,
    description:
      "Ficus macrophylla. Trunk circumference: 21.0m. Height: 16.0m. Notable for exceptional age and/or size. Located in Villa Malfitano Whitaker, Palermo, Palermo, Italy.",
  },
  {
    name: "Fico magnolioide di Catania",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 37.5125,
    lng: 15.0828,
    height: 30.0,
    circumference: 14.0,
    description:
      "Ficus macrophylla. Trunk circumference: 14.0m. Height: 30.0m. Notable for exceptional age and/or size. Located in Villa Bellini, Catania, Catania, Italy.",
  },
  {
    name: "Castagno di Laion",
    species: "Castagno (Castanea sativa)",
    lat: 46.6337,
    lng: 11.5687,
    height: 15.5,
    circumference: 13.2,
    description:
      "Castanea sativa. Trunk circumference: 13.2m. Height: 15.5m. Notable for exceptional age and/or size. Located in Albions, Laion, Bolzano, Italy.",
  },
  {
    name: "Cedro dell\'Atlante di Montalenghe",
    species: "Cedro dell\'Atlante (Cedrus atlantica)",
    lat: 45.3386,
    lng: 7.8375,
    height: 36.0,
    circumference: 13.0,
    description:
      "Cedrus atlantica. Trunk circumference: 13.0m. Height: 36.0m. Notable for exceptional age and/or size. Located in Villa della Ass. San Giuseppe Cafasso, Montalenghe, Torino, Italy.",
  },
  {
    name: "Platano orientale di Curinga",
    species: "Platano orientale (Platanus orientalis)",
    lat: 39.8231,
    lng: 16.3325,
    height: 21.0,
    circumference: 12.0,
    description:
      "Platanus orientalis. Trunk circumference: 12.0m. Height: 21.0m. Notable for exceptional age and/or size. Located in Sant\'Elia - Vrisi, Curinga, Catanzaro, Italy.",
  },
  {
    name: "Fico magnolioide di Cagliari",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 39.2149,
    lng: 9.1097,
    height: 22.0,
    circumference: 12.0,
    description:
      "Ficus macrophylla. Trunk circumference: 12.0m. Height: 22.0m. Notable for exceptional age and/or size. Located in Piazza Giacomo Matteotti, Cagliari, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Fico magnolioide di Catania #2",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 37.5175,
    lng: 15.0736,
    height: 25.0,
    circumference: 12.0,
    description:
      "Ficus macrophylla. Trunk circumference: 12.0m. Height: 25.0m. Notable for exceptional age and/or size. Located in Istituto Superiore di Catania - Via Valdisavoia, 9, Catania, Catania, Italy.",
  },
  {
    name: "Castagno di Cornedo all\'Isarco",
    species: "Castagno (Castanea sativa)",
    lat: 46.4898,
    lng: 11.4076,
    height: 16.0,
    circumference: 11.9,
    description:
      "Castanea sativa. Trunk circumference: 11.9m. Height: 16.0m. Notable for exceptional age and/or size. Located in Via Cornedo, Cornedo all\'Isarco, Bolzano, Italy.",
  },
  {
    name: "Fico magnolioide di Bordighera",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 43.7794,
    lng: 7.6726,
    height: 14.0,
    circumference: 11.8,
    description:
      "Ficus macrophylla. Trunk circumference: 11.8m. Height: 14.0m. Notable for exceptional age and/or size. Located in Palazzo comunale, Bordighera, Imperia, Italy.",
  },
  {
    name: "Olivastro di Luras",
    species: "Olivastro (Olea europaea)",
    lat: 41.0066,
    lng: 9.255,
    height: 14.0,
    circumference: 11.5,
    description:
      "Olea europaea. Trunk circumference: 11.5m. Height: 14.0m. Notable for exceptional age and/or size. Located in Santu Baltolu, Luras, Sassari (Olbia Tempio), Italy.",
  },
  {
    name: "Fico magnolioide di Riposto",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 37.7278,
    lng: 15.1986,
    height: 18.0,
    circumference: 11.0,
    description:
      "Ficus macrophylla. Trunk circumference: 11.0m. Height: 18.0m. Notable for exceptional age and/or size. Located in Villa Puglisi, Riposto, Catania, Italy.",
  },
  {
    name: "Platano orientale di Caprino Veronese",
    species: "Platano orientale (Platanus orientalis)",
    lat: 45.6081,
    lng: 10.8163,
    height: 18.0,
    circumference: 11.0,
    description:
      "Platanus orientalis. Trunk circumference: 11.0m. Height: 18.0m. Notable for exceptional age and/or size. Located in Platano, Caprino Veronese, Verona, Italy.",
  },
  {
    name: "Olivo di Navelli",
    species: "Olivo (Olea europaea)",
    lat: 42.2695,
    lng: 13.7378,
    height: 10.0,
    circumference: 10.7,
    description:
      "Olea europaea. Trunk circumference: 10.7m. Height: 10.0m. Notable for exceptional age and/or size. Located in La Francesca, Navelli, L\'Aquila, Italy.",
  },
  {
    name: "Castagno di Acquapendente",
    species: "Castagno (Castanea sativa)",
    lat: 42.7037,
    lng: 11.9181,
    height: 15.0,
    circumference: 10.4,
    description:
      "Castanea sativa. Trunk circumference: 10.4m. Height: 15.0m. Notable for exceptional age and/or size. Located in Spina Cassia - La Canala, Acquapendente, Viterbo, Italy.",
  },
  {
    name: "Fico magnolioide di Bordighera #2",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 43.782,
    lng: 7.6673,
    height: 22.0,
    circumference: 10.2,
    description:
      "Ficus macrophylla. Trunk circumference: 10.2m. Height: 22.0m. Notable for exceptional age and/or size. Located in Museo Bcknell -Via Romana, 39, Bordighera, Imperia, Italy.",
  },
  {
    name: "Fico magnolioide di Palermo #4",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 38.1196,
    lng: 13.3643,
    height: 17.0,
    circumference: 10.1,
    description:
      "Ficus macrophylla. Trunk circumference: 10.1m. Height: 17.0m. Notable for exceptional age and/or size. Located in Palazzo Pantelleria - Piazza Giovanni Meli, Palermo, Palermo, Italy.",
  },
  {
    name: "Olivastro di Cuglieri",
    species: "Olivastro (Olea europaea)",
    lat: 40.1971,
    lng: 8.5491,
    height: 16.5,
    circumference: 10.0,
    description:
      "Olea europaea. Trunk circumference: 10.0m. Height: 16.5m. Notable for exceptional age and/or size. Located in Tanca Manna, Cuglieri, Oristano (Oristano), Italy.",
  },
  {
    name: "Olivo di Villamassargia",
    species: "Olivo (Olea europaea)",
    lat: 39.2657,
    lng: 8.6818,
    height: 8.0,
    circumference: 10.0,
    description:
      "Olea europaea. Trunk circumference: 10.0m. Height: 8.0m. Notable for exceptional age and/or size. Located in S\'Ortu Mannu, Villamassargia, Sud Sardegna (Carbonia-Iglesias), Italy.",
  },
  {
    name: "Fico bianco di Palermo",
    species: "Fico bianco (Ficus virens)",
    lat: 38.1236,
    lng: 13.3488,
    height: 20.0,
    circumference: 10.0,
    description:
      "Ficus virens. Trunk circumference: 10.0m. Height: 20.0m. Notable for exceptional age and/or size. Located in Piazza Virgilio, Palermo, Palermo, Italy.",
  },
  {
    name: "Carrubo di Noto",
    species: "Carrubo (Ceratonia siliqua)",
    lat: 36.8443,
    lng: 14.9789,
    height: 10.0,
    circumference: 10.0,
    description:
      "Ceratonia siliqua. Trunk circumference: 10.0m. Height: 10.0m. Notable for exceptional age and/or size. Located in Cava Candelaro, Noto, Siracusa, Italy.",
  },
  {
    name: "Castagno di Corigliano Calabro",
    species: "Castagno (Castanea sativa)",
    lat: 39.5224,
    lng: 16.5205,
    height: 15.0,
    circumference: 9.9,
    description:
      "Castanea sativa. Trunk circumference: 9.9m. Height: 15.0m. Notable for exceptional age and/or size. Located in Baraccone, Corigliano Calabro, Cosenza, Italy.",
  },
  {
    name: "Fico magnolioide di Bordighera #3",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 43.782,
    lng: 7.6674,
    height: 20.0,
    circumference: 9.8,
    description:
      "Ficus macrophylla. Trunk circumference: 9.8m. Height: 20.0m. Notable for exceptional age and/or size. Located in Museo Bcknell -Via Romana, 39, Bordighera, Imperia, Italy.",
  },
  {
    name: "Castagno di Monteu Roero",
    species: "Castagno (Castanea sativa)",
    lat: 44.793,
    lng: 7.9175,
    height: 18.5,
    circumference: 9.7,
    description:
      "Castanea sativa. Trunk circumference: 9.7m. Height: 18.5m. Notable for exceptional age and/or size. Located in Cascina Avai, Monteu Roero, Cuneo, Italy.",
  },
  {
    name: "Castagno di Melle",
    species: "Castagno (Castanea sativa)",
    lat: 44.5625,
    lng: 7.2972,
    height: 32.0,
    circumference: 9.6,
    description:
      "Castanea sativa. Trunk circumference: 9.6m. Height: 32.0m. Notable for exceptional age and/or size. Located in Borgata Pratolungo, Melle, Cuneo, Italy.",
  },
  {
    name: "Carrubo di Modica",
    species: "Carrubo (Ceratonia siliqua)",
    lat: 36.8824,
    lng: 14.8868,
    height: 9.5,
    circumference: 9.6,
    description:
      "Ceratonia siliqua. Trunk circumference: 9.6m. Height: 9.5m. Notable for exceptional age and/or size. Located in Cammaratini Cava Palomberi, Modica, Ragusa, Italy.",
  },
  {
    name: "Castagno di San Luca",
    species: "Castagno (Castanea sativa)",
    lat: 38.175,
    lng: 16.0217,
    height: 16.0,
    circumference: 9.5,
    description:
      "Castanea sativa. Trunk circumference: 9.5m. Height: 16.0m. Notable for exceptional age and/or size. Located in Fontanelle, San Luca, Reggio Calabria, Italy.",
  },
  {
    name: "Fico magnolioide di Ragusa",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 36.8817,
    lng: 14.5649,
    height: 25.0,
    circumference: 9.5,
    description:
      "Ficus macrophylla. Trunk circumference: 9.5m. Height: 25.0m. Notable for exceptional age and/or size. Located in Castello di Donnafugata, Ragusa, Ragusa, Italy.",
  },
  {
    name: "Sequoia gigante di Torre Pellice",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 44.8222,
    lng: 7.2136,
    height: 37.0,
    circumference: 9.4,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 9.4m. Height: 37.0m. Notable for exceptional age and/or size. Located in Concentrico, Torre Pellice, Torino, Italy.",
  },
  {
    name: "Castagno di Cerva",
    species: "Castagno (Castanea sativa)",
    lat: 39.0408,
    lng: 16.7229,
    height: 25.0,
    circumference: 9.3,
    description:
      "Castanea sativa. Trunk circumference: 9.3m. Height: 25.0m. Notable for exceptional age and/or size. Located in Melitani, Cerva, Catanzaro, Italy.",
  },
  {
    name: "Carrubo di Modica #2",
    species: "Carrubo (Ceratonia siliqua)",
    lat: 36.885,
    lng: 14.8895,
    height: 13.0,
    circumference: 9.3,
    description:
      "Ceratonia siliqua. Trunk circumference: 9.3m. Height: 13.0m. Notable for exceptional age and/or size. Located in Cammaratini, Modica, Ragusa, Italy.",
  },
  {
    name: "Castagno di Calizzano",
    species: "Castagno (Castanea sativa)",
    lat: 44.2294,
    lng: 8.1139,
    height: 18.5,
    circumference: 9.2,
    description:
      "Castanea sativa. Trunk circumference: 9.2m. Height: 18.5m. Notable for exceptional age and/or size. Located in Rio Nero, Calizzano, Savona, Italy.",
  },
  {
    name: "Olivastro di Baunei",
    species: "Olivastro (Olea europaea)",
    lat: 39.9886,
    lng: 9.689,
    height: 10.0,
    circumference: 9.1,
    description:
      "Olea europaea. Trunk circumference: 9.1m. Height: 10.0m. Notable for exceptional age and/or size. Located in Santa Maria Navarrese - Piazza Principessa di Navarra, Baunei, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Fico magnolioide di Ragusa #2",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 36.882,
    lng: 14.5646,
    height: 25.0,
    circumference: 9.0,
    description:
      "Ficus macrophylla. Trunk circumference: 9.0m. Height: 25.0m. Notable for exceptional age and/or size. Located in Castello di Donnafugata, Ragusa, Ragusa, Italy.",
  },
  {
    name: "Olivastro di Luras #2",
    species: "Olivastro (Olea europaea)",
    lat: 41.009,
    lng: 9.2669,
    height: 11.0,
    circumference: 8.8,
    description:
      "Olea europaea. Trunk circumference: 8.8m. Height: 11.0m. Notable for exceptional age and/or size. Located in Li Espi, Luras, Sassari (Olbia Tempio), Italy.",
  },
  {
    name: "Olivo di Noto",
    species: "Olivo (Olea europaea)",
    lat: 36.8927,
    lng: 15.0368,
    height: 9.0,
    circumference: 8.8,
    description:
      "Olea europaea. Trunk circumference: 8.8m. Height: 9.0m. Notable for exceptional age and/or size. Located in Busulmone, Noto, Siracusa, Italy.",
  },
  {
    name: "Castagno di Crodo",
    species: "Castagno (Castanea sativa)",
    lat: 46.2306,
    lng: 8.3383,
    height: 17.5,
    circumference: 8.7,
    description:
      "Castanea sativa. Trunk circumference: 8.7m. Height: 17.5m. Notable for exceptional age and/or size. Located in Maglioggio, Crodo, Verbano Cusio Osssola, Italy.",
  },
  {
    name: "Castagno di Bressanone",
    species: "Castagno (Castanea sativa)",
    lat: 46.7157,
    lng: 11.676,
    height: 19.5,
    circumference: 8.6,
    description:
      "Castanea sativa. Trunk circumference: 8.6m. Height: 19.5m. Notable for exceptional age and/or size. Located in Maso Gebreitner - Cornale - Sant\'Andrea in monte, Bressanone, Bolzano, Italy.",
  },
  {
    name: "Castagno di Renon",
    species: "Castagno (Castanea sativa)",
    lat: 46.5466,
    lng: 11.3759,
    height: 15.0,
    circumference: 8.6,
    description:
      "Castanea sativa. Trunk circumference: 8.6m. Height: 15.0m. Notable for exceptional age and/or size. Located in Maso Maggner - Vanga, Renon, Bolzano, Italy.",
  },
  {
    name: "Castagno di Sante Marie",
    species: "Castagno (Castanea sativa)",
    lat: 42.1136,
    lng: 13.1958,
    height: 25.0,
    circumference: 8.6,
    description:
      "Castanea sativa. Trunk circumference: 8.6m. Height: 25.0m. Notable for exceptional age and/or size. Located in Colle Civitella, Sante Marie, L\'Aquila, Italy.",
  },
  {
    name: "Castagno di Tonara",
    species: "Castagno (Castanea sativa)",
    lat: 40.02,
    lng: 9.1439,
    height: 10.0,
    circumference: 8.6,
    description:
      "Castanea sativa. Trunk circumference: 8.6m. Height: 10.0m. Notable for exceptional age and/or size. Located in Bau De Carru - Curadore, Tonara, Nuoro (Nuoro), Italy.",
  },
  {
    name: "Castagno di Sant\'Alfio",
    species: "Castagno (Castanea sativa)",
    lat: 37.7624,
    lng: 15.1051,
    height: 16.0,
    circumference: 8.6,
    description:
      "Castanea sativa. Trunk circumference: 8.6m. Height: 16.0m. Notable for exceptional age and/or size. Located in Tramazzi, Sant\'Alfio, Catania, Italy.",
  },
  {
    name: "Castagno di Marzi",
    species: "Castagno (Castanea sativa)",
    lat: 39.153,
    lng: 16.3706,
    height: 20.0,
    circumference: 8.5,
    description:
      "Castanea sativa. Trunk circumference: 8.5m. Height: 20.0m. Notable for exceptional age and/or size. Located in Orsara, Marzi, Cosenza, Italy.",
  },
  {
    name: "Platano orientale di Ascoli Piceno",
    species: "Platano orientale (Platanus orientalis)",
    lat: 42.85,
    lng: 13.5311,
    height: 26.0,
    circumference: 8.5,
    description:
      "Platanus orientalis. Trunk circumference: 8.5m. Height: 26.0m. Notable for exceptional age and/or size. Located in Strada Salaria - Case Piccioni, Ascoli Piceno, Ascoli Piceno, Italy.",
  },
  {
    name: "Carrubo di Modica #3",
    species: "Carrubo (Ceratonia siliqua)",
    lat: 36.8797,
    lng: 14.865,
    height: 12.0,
    circumference: 8.5,
    description:
      "Ceratonia siliqua. Trunk circumference: 8.5m. Height: 12.0m. Notable for exceptional age and/or size. Located in Miglifulo, Modica, Ragusa, Italy.",
  },
  {
    name: "Farnia di Fossalta di Portogruaro",
    species: "Farnia (Quercus robur)",
    lat: 45.7744,
    lng: 12.909,
    height: 17.0,
    circumference: 8.5,
    description:
      "Quercus robur. Trunk circumference: 8.5m. Height: 17.0m. Notable for exceptional age and/or size. Located in Villanova Sant\'Antonio, Fossalta di Portogruaro, Venezia, Italy.",
  },
  {
    name: "Sequoia sempreverde di Reggello",
    species: "Sequoia sempreverde (Sequoia sempervirens)",
    lat: 43.7018,
    lng: 11.4755,
    height: 40.0,
    circumference: 8.4,
    description:
      "Sequoia sempervirens. Trunk circumference: 8.4m. Height: 40.0m. Notable for exceptional age and/or size. Located in Castello di Sammezzano - Leccio, Reggello, Firenze, Italy.",
  },
  {
    name: "Roverella di Laurenzana",
    species: "Roverella (Quercus pubescens)",
    lat: 40.4742,
    lng: 15.9853,
    height: 20.0,
    circumference: 8.3,
    description:
      "Quercus pubescens. Trunk circumference: 8.3m. Height: 20.0m. Notable for exceptional age and/or size. Located in Masseria Battaglia, Laurenzana, Potenza, Italy.",
  },
  {
    name: "Cedro del Libano di Forlimpopoli",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 44.1699,
    lng: 12.1011,
    height: 27.5,
    circumference: 8.3,
    description:
      "Cedrus libani. Trunk circumference: 8.3m. Height: 27.5m. Notable for exceptional age and/or size. Located in Villa Paolucci - Selbagnone - Via Meldola, 1930, Forlimpopoli, Forlì-Cesena, Italy.",
  },
  {
    name: "Palma del Senegal di Sanremo",
    species: "Palma del Senegal (Phoenix reclinata)",
    lat: 43.8213,
    lng: 7.7896,
    height: 19.0,
    circumference: 8.3,
    description:
      "Phoenix reclinata. Trunk circumference: 8.3m. Height: 19.0m. Notable for exceptional age and/or size. Located in Giardini A. Nobel, Sanremo, Imperia, Italy.",
  },
  {
    name: "Platano comune di Milano",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.4735,
    lng: 9.1972,
    height: 24.0,
    circumference: 8.3,
    description:
      "Platanus acerifolia. Trunk circumference: 8.3m. Height: 24.0m. Notable for exceptional age and/or size. Located in Giardini Montanelli - Corso Venezia, Milano, Milano, Italy.",
  },
  {
    name: "Tiglio nostrale di Macugnaga",
    species: "Tiglio nostrale (Tilia platyphyllos)",
    lat: 45.9707,
    lng: 7.9642,
    height: 15.0,
    circumference: 8.3,
    description:
      "Tilia platyphyllos. Trunk circumference: 8.3m. Height: 15.0m. Notable for exceptional age and/or size. Located in Cimitero comunale, Macugnaga, Verbano Cusio Osssola, Italy.",
  },
  {
    name: "Olivo di Motta Sant\'Anastasia",
    species: "Olivo (Olea europaea)",
    lat: 37.5083,
    lng: 14.9703,
    height: 8.0,
    circumference: 8.3,
    description:
      "Olea europaea. Trunk circumference: 8.3m. Height: 8.0m. Notable for exceptional age and/or size. Located in Contrada Gebbia, Motta Sant\'Anastasia, Catania, Italy.",
  },
  {
    name: "Olivo di Palermo",
    species: "Olivo (Olea europaea)",
    lat: 38.1663,
    lng: 13.3079,
    height: 15.0,
    circumference: 8.3,
    description:
      "Olea europaea. Trunk circumference: 8.3m. Height: 15.0m. Notable for exceptional age and/or size. Located in Via Ugo la Malfa, 169, Palermo, Palermo, Italy.",
  },
  {
    name: "Sequoia gigante di Champdepraz",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 45.692,
    lng: 7.663,
    height: 37.0,
    circumference: 8.3,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 8.3m. Height: 37.0m. Notable for exceptional age and/or size. Located in Villa Binel - Viering, Champdepraz, Aosta, Italy.",
  },
  {
    name: "Cedro del Libano di Como",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 45.8188,
    lng: 9.0647,
    height: 25.0,
    circumference: 8.2,
    description:
      "Cedrus libani. Trunk circumference: 8.2m. Height: 25.0m. Notable for exceptional age and/or size. Located in Villa Olmo - Via Cantoni, 1, Como, Como, Italy.",
  },
  {
    name: "Carrubo di Polignano a Mare",
    species: "Carrubo (Ceratonia siliqua)",
    lat: 40.9863,
    lng: 17.2081,
    height: 9.5,
    circumference: 8.2,
    description:
      "Ceratonia siliqua. Trunk circumference: 8.2m. Height: 9.5m. Notable for exceptional age and/or size. Located in La Grave, Polignano a Mare, Bari, Italy.",
  },
  {
    name: "Leccio di Urzulei",
    species: "Leccio (Quercus ilex)",
    lat: 40.1742,
    lng: 9.5047,
    height: 25.0,
    circumference: 8.2,
    description:
      "Quercus ilex. Trunk circumference: 8.2m. Height: 25.0m. Notable for exceptional age and/or size. Located in Costa \'e Silana, Urzulei, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Fico di Banyan di Palermo",
    species: "Fico di Banyan (Ficus benghalensis)",
    lat: 38.1315,
    lng: 13.3518,
    height: 11.0,
    circumference: 8.2,
    description:
      "Ficus benghalensis. Trunk circumference: 8.2m. Height: 11.0m. Notable for exceptional age and/or size. Located in Giardino inglese, Palermo, Palermo, Italy.",
  },
  {
    name: "Olivo di Palermo #2",
    species: "Olivo (Olea europaea)",
    lat: 38.1701,
    lng: 13.3353,
    height: 10.5,
    circumference: 8.2,
    description:
      "Olea europaea. Trunk circumference: 8.2m. Height: 10.5m. Notable for exceptional age and/or size. Located in Pallavicino - Via Cesenatico, Palermo, Palermo, Italy.",
  },
  {
    name: "Castagno di Giaglione",
    species: "Castagno (Castanea sativa)",
    lat: 45.1425,
    lng: 7.0148,
    height: 10.5,
    circumference: 8.1,
    description:
      "Castanea sativa. Trunk circumference: 8.1m. Height: 10.5m. Notable for exceptional age and/or size. Located in Chiesa di San Vincenzo, Giaglione, Torino, Italy.",
  },
  {
    name: "Castagno di Zocca",
    species: "Castagno (Castanea sativa)",
    lat: 44.3794,
    lng: 11.0117,
    height: 9.0,
    circumference: 8.0,
    description:
      "Castanea sativa. Trunk circumference: 8.0m. Height: 9.0m. Notable for exceptional age and/or size. Located in Costa di Monteombraro - Via Fontaneda, 11, Zocca, Modena, Italy.",
  },
  {
    name: "Castagno di Borzonasca",
    species: "Castagno (Castanea sativa)",
    lat: 44.5328,
    lng: 9.3431,
    height: 11.0,
    circumference: 8.0,
    description:
      "Castanea sativa. Trunk circumference: 8.0m. Height: 11.0m. Notable for exceptional age and/or size. Located in Il Poggio, Borzonasca, Genova, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Stresa",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.8847,
    lng: 8.5387,
    height: 35.0,
    circumference: 8.0,
    description:
      "Cedrus deodara. Trunk circumference: 8.0m. Height: 35.0m. Notable for exceptional age and/or size. Located in Corso Re Umberto l, 15, Stresa, Verbano Cusio Osssola, Italy.",
  },
  {
    name: "Olivo di Jerzu",
    species: "Olivo (Olea europaea)",
    lat: 39.7979,
    lng: 9.5843,
    height: 10.0,
    circumference: 8.0,
    description:
      "Olea europaea. Trunk circumference: 8.0m. Height: 10.0m. Notable for exceptional age and/or size. Located in S\'Ungroni is Murtas, Jerzu, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Villagrande Strisaili",
    species: "Leccio (Quercus ilex)",
    lat: 39.9775,
    lng: 9.4654,
    height: 21.0,
    circumference: 7.9,
    description:
      "Quercus ilex. Trunk circumference: 7.9m. Height: 21.0m. Notable for exceptional age and/or size. Located in Sa Menta, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Castagno di Pulfero",
    species: "Castagno (Castanea sativa)",
    lat: 46.173,
    lng: 13.4595,
    height: 19.0,
    circumference: 7.8,
    description:
      "Castanea sativa. Trunk circumference: 7.8m. Height: 19.0m. Notable for exceptional age and/or size. Located in Coceanzi - Pegliano, Pulfero, Udine, Italy.",
  },
  {
    name: "Farnia di Bertiolo",
    species: "Farnia (Quercus robur)",
    lat: 45.905,
    lng: 13.0517,
    height: 21.0,
    circumference: 7.8,
    description:
      "Quercus robur. Trunk circumference: 7.8m. Height: 21.0m. Notable for exceptional age and/or size. Located in Villa Colloredo Venier - Sterpo, Bertiolo, Udine, Italy.",
  },
  {
    name: "Olivo di Sini",
    species: "Olivo (Olea europaea)",
    lat: 39.7516,
    lng: 8.9041,
    height: 8.0,
    circumference: 7.8,
    description:
      "Olea europaea. Trunk circumference: 7.8m. Height: 8.0m. Notable for exceptional age and/or size. Located in Parco comunale - Via Argiolas, Sini, Oristano (Oristano), Italy.",
  },
  {
    name: "Ibrido Cerro-Roverella di Brienza",
    species: "Ibrido Cerro-Roverella (Quercus cerris)",
    lat: 40.4467,
    lng: 15.5956,
    height: 25.0,
    circumference: 7.7,
    description:
      "Quercus cerris. Trunk circumference: 7.7m. Height: 25.0m. Notable for exceptional age and/or size. Located in Valle Cerasa, Brienza, Potenza, Italy.",
  },
  {
    name: "Tasso di Bolotana",
    species: "Tasso (Taxus baccata)",
    lat: 40.3488,
    lng: 8.8778,
    height: 15.0,
    circumference: 7.7,
    description:
      "Taxus baccata. Trunk circumference: 7.7m. Height: 15.0m. Notable for exceptional age and/or size. Located in Badde Salighes, Bolotana, Nuoro (Nuoro), Italy.",
  },
  {
    name: "Roverella di Illorai",
    species: "Roverella (Quercus pubescens)",
    lat: 40.3891,
    lng: 8.9264,
    height: 30.0,
    circumference: 7.7,
    description:
      "Quercus pubescens. Trunk circumference: 7.7m. Height: 30.0m. Notable for exceptional age and/or size. Located in Bilinzanas - Sa Melabrina, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Castagno di La Salle",
    species: "Castagno (Castanea sativa)",
    lat: 45.7266,
    lng: 7.0942,
    height: 23.0,
    circumference: 7.6,
    description:
      "Castanea sativa. Trunk circumference: 7.6m. Height: 23.0m. Notable for exceptional age and/or size. Located in Derby, La Salle, Aosta, Italy.",
  },
  {
    name: "Castagno di Lagonegro",
    species: "Castagno (Castanea sativa)",
    lat: 40.1314,
    lng: 15.7914,
    height: 18.0,
    circumference: 7.6,
    description:
      "Castanea sativa. Trunk circumference: 7.6m. Height: 18.0m. Notable for exceptional age and/or size. Located in Bonfilio, Lagonegro, Potenza, Italy.",
  },
  {
    name: "Castagno di Acquasanta Terme",
    species: "Castagno (Castanea sativa)",
    lat: 42.7382,
    lng: 13.4051,
    height: 24.0,
    circumference: 7.6,
    description:
      "Castanea sativa. Trunk circumference: 7.6m. Height: 24.0m. Notable for exceptional age and/or size. Located in Umito, Acquasanta Terme, Ascoli Piceno, Italy.",
  },
  {
    name: "Platano comune di Alessandria",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.9079,
    lng: 8.6401,
    height: 37.0,
    circumference: 7.6,
    description:
      "Platanus acerifolia. Trunk circumference: 7.6m. Height: 37.0m. Notable for exceptional age and/or size. Located in Strada regionale n. 10, Alessandria, Alessandria, Italy.",
  },
  {
    name: "Carrubo di Modica #4",
    species: "Carrubo (Ceratonia siliqua)",
    lat: 36.8952,
    lng: 14.8775,
    height: 10.0,
    circumference: 7.6,
    description:
      "Ceratonia siliqua. Trunk circumference: 7.6m. Height: 10.0m. Notable for exceptional age and/or size. Located in Favarottella, Modica, Ragusa, Italy.",
  },
  {
    name: "Castagno di Frassilongo",
    species: "Castagno (Castanea sativa)",
    lat: 46.0862,
    lng: 11.29,
    height: 19.0,
    circumference: 7.5,
    description:
      "Castanea sativa. Trunk circumference: 7.5m. Height: 19.0m. Notable for exceptional age and/or size. Located in Maso Pizzi-Stalete, Frassilongo, Trento, Italy.",
  },
  {
    name: "Castagno di Francavilla in Sinni",
    species: "Castagno (Castanea sativa)",
    lat: 40.048,
    lng: 16.2165,
    height: 12.0,
    circumference: 7.5,
    description:
      "Castanea sativa. Trunk circumference: 7.5m. Height: 12.0m. Notable for exceptional age and/or size. Located in San Biase, Francavilla in Sinni, Potenza, Italy.",
  },
  {
    name: "Eucalitto rostrato di Capoterra",
    species: "Eucalitto rostrato (Eucalyptus camaldulensis)",
    lat: 39.1391,
    lng: 9.0124,
    height: 25.0,
    circumference: 7.5,
    description:
      "Eucalyptus camaldulensis. Trunk circumference: 7.5m. Height: 25.0m. Notable for exceptional age and/or size. Located in Su Loy, Capoterra, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Olivo di Ferrandina",
    species: "Olivo (Olea europaea)",
    lat: 40.4884,
    lng: 16.4684,
    height: 4.5,
    circumference: 7.5,
    description:
      "Olea europaea. Trunk circumference: 7.5m. Height: 4.5m. Notable for exceptional age and/or size. Located in Fosso di Carpatiello, Ferrandina, Matera, Italy.",
  },
  {
    name: "Olivo di Ferrandina #2",
    species: "Olivo (Olea europaea)",
    lat: 40.4884,
    lng: 16.4684,
    height: 7.0,
    circumference: 7.5,
    description:
      "Olea europaea. Trunk circumference: 7.5m. Height: 7.0m. Notable for exceptional age and/or size. Located in Fosso di Carpatiello, Ferrandina, Matera, Italy.",
  },
  {
    name: "Tiglio selvatico di Pescopagano",
    species: "Tiglio selvatico (Tilia cordata)",
    lat: 40.8514,
    lng: 15.4181,
    height: 7.0,
    circumference: 7.5,
    description:
      "Tilia cordata. Trunk circumference: 7.5m. Height: 7.0m. Notable for exceptional age and/or size. Located in Abbazia di San Lorenzo, Pescopagano, Potenza, Italy.",
  },
  {
    name: "Leccio di Seui",
    species: "Leccio (Quercus ilex)",
    lat: 39.8922,
    lng: 9.3408,
    height: 18.0,
    circumference: 7.5,
    description:
      "Quercus ilex. Trunk circumference: 7.5m. Height: 18.0m. Notable for exceptional age and/or size. Located in Ardasai, Seui, Sud Sardegna (Ogliastra), Italy.",
  },
  {
    name: "Sequoia gigante di Châtillon",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 45.7449,
    lng: 7.6118,
    height: 35.0,
    circumference: 7.5,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 7.5m. Height: 35.0m. Notable for exceptional age and/or size. Located in Castello Barone Gamba, Châtillon, Aosta, Italy.",
  },
  {
    name: "Castagno di Vignola Falesina",
    species: "Castagno (Castanea sativa)",
    lat: 46.072,
    lng: 11.2705,
    height: 20.0,
    circumference: 7.4,
    description:
      "Castanea sativa. Trunk circumference: 7.4m. Height: 20.0m. Notable for exceptional age and/or size. Located in Maso Agnellini, Vignola Falesina, Trento, Italy.",
  },
  {
    name: "Platano orientale di Lendinara",
    species: "Platano orientale (Platanus orientalis)",
    lat: 45.0859,
    lng: 11.5888,
    height: 40.0,
    circumference: 7.4,
    description:
      "Platanus orientalis. Trunk circumference: 7.4m. Height: 40.0m. Notable for exceptional age and/or size. Located in Via San Rocco, Lendinara, Rovigo, Italy.",
  },
  {
    name: "Castagno di Chiusa",
    species: "Castagno (Castanea sativa)",
    lat: 46.6468,
    lng: 11.5548,
    height: 21.0,
    circumference: 7.4,
    description:
      "Castanea sativa. Trunk circumference: 7.4m. Height: 21.0m. Notable for exceptional age and/or size. Located in Maso Moar in Ums - Fraghes, Chiusa, Bolzano, Italy.",
  },
  {
    name: "Castagno di Varna",
    species: "Castagno (Castanea sativa)",
    lat: 46.7478,
    lng: 11.6306,
    height: 25.5,
    circumference: 7.4,
    description:
      "Castanea sativa. Trunk circumference: 7.4m. Height: 25.5m. Notable for exceptional age and/or size. Located in Gatsch, Varna, Bolzano, Italy.",
  },
  {
    name: "Leccio di Villagrande Strisaili #2",
    species: "Leccio (Quercus ilex)",
    lat: 39.9773,
    lng: 9.4664,
    height: 11.0,
    circumference: 7.3,
    description:
      "Quercus ilex. Trunk circumference: 7.3m. Height: 11.0m. Notable for exceptional age and/or size. Located in Sa Menta, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Roverella di Grumento Nova",
    species: "Roverella (Quercus pubescens)",
    lat: 40.2805,
    lng: 15.9055,
    height: 27.0,
    circumference: 7.3,
    description:
      "Quercus pubescens. Trunk circumference: 7.3m. Height: 27.0m. Notable for exceptional age and/or size. Located in Spineta, Grumento Nova, Potenza, Italy.",
  },
  {
    name: "Olivo di Portocannone",
    species: "Olivo (Olea europaea)",
    lat: 41.9107,
    lng: 15.0073,
    height: 8.5,
    circumference: 7.3,
    description:
      "Olea europaea. Trunk circumference: 7.3m. Height: 8.5m. Notable for exceptional age and/or size. Located in Becciata - Zona Artigianale, Portocannone, Campobasso, Italy.",
  },
  {
    name: "Roverella di Trivento",
    species: "Roverella (Quercus pubescens)",
    lat: 41.7925,
    lng: 14.5822,
    height: 23.0,
    circumference: 7.3,
    description:
      "Quercus pubescens. Trunk circumference: 7.3m. Height: 23.0m. Notable for exceptional age and/or size. Located in Uomo morto - Cacchieto, Trivento, Campobasso, Italy.",
  },
  {
    name: "Roverella di Illorai #2",
    species: "Roverella (Quercus pubescens)",
    lat: 40.3872,
    lng: 8.9303,
    height: 25.0,
    circumference: 7.3,
    description:
      "Quercus pubescens. Trunk circumference: 7.3m. Height: 25.0m. Notable for exceptional age and/or size. Located in Bilinzanas, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Olivo di Palermo #3",
    species: "Olivo (Olea europaea)",
    lat: 38.1662,
    lng: 13.3077,
    height: 15.0,
    circumference: 7.3,
    description:
      "Olea europaea. Trunk circumference: 7.3m. Height: 15.0m. Notable for exceptional age and/or size. Located in Via Ugo la Malfa, 169, Palermo, Palermo, Italy.",
  },
  {
    name: "Castagno di Telve",
    species: "Castagno (Castanea sativa)",
    lat: 46.0768,
    lng: 11.4646,
    height: 23.0,
    circumference: 7.3,
    description:
      "Castanea sativa. Trunk circumference: 7.3m. Height: 23.0m. Notable for exceptional age and/or size. Located in Parise, Telve, Trento, Italy.",
  },
  {
    name: "Cipresso calvo di Milano",
    species: "Cipresso calvo (Taxodium disticum)",
    lat: 45.4746,
    lng: 9.2,
    height: 25.0,
    circumference: 7.2,
    description:
      "Taxodium disticum. Trunk circumference: 7.2m. Height: 25.0m. Notable for exceptional age and/or size. Located in Giardini Indro Montanelli - Corso Venezia, Milano, Milano, Italy.",
  },
  {
    name: "Platano orientale di Forlì",
    species: "Platano orientale (Platanus orientalis)",
    lat: 44.2367,
    lng: 12.1285,
    height: 31.0,
    circumference: 7.2,
    description:
      "Platanus orientalis. Trunk circumference: 7.2m. Height: 31.0m. Notable for exceptional age and/or size. Located in Carpinello - Via Cervese, 231, Forlì, Forlì-Cesena, Italy.",
  },
  {
    name: "Platano comune di Savigliano",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.644,
    lng: 7.6595,
    height: 20.0,
    circumference: 7.2,
    description:
      "Platanus acerifolia. Trunk circumference: 7.2m. Height: 20.0m. Notable for exceptional age and/or size. Located in Piazza Nizza, Savigliano, Cuneo, Italy.",
  },
  {
    name: "Albero della Canfora di Stresa",
    species: "Albero della Canfora (Cinnamomum camphora)",
    lat: 45.8955,
    lng: 8.5272,
    height: 30.0,
    circumference: 7.2,
    description:
      "Cinnamomum camphora. Trunk circumference: 7.2m. Height: 30.0m. Notable for exceptional age and/or size. Located in Isola Bella Lago Maggiore, Stresa, Verbano Cusio Osssola, Italy.",
  },
  {
    name: "Leccio di Orune",
    species: "Leccio (Quercus ilex)",
    lat: 40.3883,
    lng: 9.3583,
    height: 16.0,
    circumference: 7.2,
    description:
      "Quercus ilex. Trunk circumference: 7.2m. Height: 16.0m. Notable for exceptional age and/or size. Located in Schina sos Settiles, Orune, Nuoro (Nuoro), Italy.",
  },
  {
    name: "Cipresso comune di Palazzolo Acreide",
    species: "Cipresso comune (Cupressus sempervirens)",
    lat: 37.0584,
    lng: 14.9089,
    height: 19.0,
    circumference: 7.2,
    description:
      "Cupressus sempervirens. Trunk circumference: 7.2m. Height: 19.0m. Notable for exceptional age and/or size. Located in Villa comunale, Palazzolo Acreide, Siracusa, Italy.",
  },
  {
    name: "Olmo del Caucaso di Bra",
    species: "Olmo del Caucaso (Zelkova carpinifolia)",
    lat: 44.7126,
    lng: 7.8404,
    height: 38.0,
    circumference: 7.2,
    description:
      "Zelkova carpinifolia. Trunk circumference: 7.2m. Height: 38.0m. Notable for exceptional age and/or size. Located in Lo Monte - Strada Bria, 50, Bra, Cuneo, Italy.",
  },
  {
    name: "Platano occidentale di Como",
    species: "Platano occidentale (Platanus occidentalis)",
    lat: 45.8089,
    lng: 9.0868,
    height: 32.0,
    circumference: 7.1,
    description:
      "Platanus occidentalis. Trunk circumference: 7.1m. Height: 32.0m. Notable for exceptional age and/or size. Located in Museo Giovio - Piazza Medaglie d\'Oro, 1, Como, Como, Italy.",
  },
  {
    name: "Cerro di Amatrice",
    species: "Cerro (Quercus cerris)",
    lat: 42.6509,
    lng: 13.3086,
    height: 23.0,
    circumference: 7.1,
    description:
      "Quercus cerris. Trunk circumference: 7.1m. Height: 23.0m. Notable for exceptional age and/or size. Located in Sant\'Angelo - Cimitero, Amatrice, Rieti, Italy.",
  },
  {
    name: "Olivo di Pontecagnano Faiano",
    species: "Olivo (Olea europaea)",
    lat: 40.6444,
    lng: 14.8736,
    height: 6.0,
    circumference: 7.0,
    description:
      "Olea europaea. Trunk circumference: 7.0m. Height: 6.0m. Notable for exceptional age and/or size. Located in Piazza Felice Sabbato, Pontecagnano Faiano, Salerno, Italy.",
  },
  {
    name: "Pioppo nero di Calolziocorte",
    species: "Pioppo nero (Populus nigra)",
    lat: 45.7968,
    lng: 9.4284,
    height: 26.0,
    circumference: 7.0,
    description:
      "Populus nigra. Trunk circumference: 7.0m. Height: 26.0m. Notable for exceptional age and/or size. Located in Lavello - Via Alcide de Gasperi, Calolziocorte, Lecco, Italy.",
  },
  {
    name: "Castagno di Villarfocchiardo",
    species: "Castagno (Castanea sativa)",
    lat: 45.0997,
    lng: 7.2317,
    height: 14.0,
    circumference: 7.0,
    description:
      "Castanea sativa. Trunk circumference: 7.0m. Height: 14.0m. Notable for exceptional age and/or size. Located in Borgata La Doussa, Villarfocchiardo, Torino, Italy.",
  },
  {
    name: "Olivastro di Tertenia",
    species: "Olivastro (Olea europaea)",
    lat: 39.6887,
    lng: 9.5716,
    height: 8.0,
    circumference: 7.0,
    description:
      "Olea europaea. Trunk circumference: 7.0m. Height: 8.0m. Notable for exceptional age and/or size. Located in Corongiu, Tertenia, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Illorai",
    species: "Leccio (Quercus ilex)",
    lat: 40.3891,
    lng: 8.9335,
    height: 13.0,
    circumference: 7.0,
    description:
      "Quercus ilex. Trunk circumference: 7.0m. Height: 13.0m. Notable for exceptional age and/or size. Located in Bilinzanas, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Olivastro di Padru",
    species: "Olivastro (Olea europaea)",
    lat: 40.784,
    lng: 9.566,
    height: 10.0,
    circumference: 7.0,
    description:
      "Olea europaea. Trunk circumference: 7.0m. Height: 10.0m. Notable for exceptional age and/or size. Located in Budò, Padru, Sassari (Olbia Tempio), Italy.",
  },
  {
    name: "Olivo di Fluminimaggiore",
    species: "Olivo (Olea europaea)",
    lat: 39.4484,
    lng: 8.4924,
    height: 7.0,
    circumference: 7.0,
    description:
      "Olea europaea. Trunk circumference: 7.0m. Height: 7.0m. Notable for exceptional age and/or size. Located in Genna Cinixiu, Fluminimaggiore, Sud Sardegna (Carbonia-Iglesias), Italy.",
  },
  {
    name: "Albero del Drago di Palermo",
    species: "Albero del Drago (Dracaena draco)",
    lat: 38.1053,
    lng: 13.3387,
    height: 7.0,
    circumference: 7.0,
    description:
      "Dracaena draco. Trunk circumference: 7.0m. Height: 7.0m. Notable for exceptional age and/or size. Located in Vivai Lo Porto, Palermo, Palermo, Italy.",
  },
  {
    name: "Olivo di Ispica",
    species: "Olivo (Olea europaea)",
    lat: 36.7737,
    lng: 14.8993,
    height: 8.0,
    circumference: 7.0,
    description:
      "Olea europaea. Trunk circumference: 7.0m. Height: 8.0m. Notable for exceptional age and/or size. Located in Palazzelli, Ispica, Ragusa, Italy.",
  },
  {
    name: "Libocedro di Udine",
    species: "Libocedro (Calocedrus decurrens)",
    lat: 46.0638,
    lng: 13.2393,
    height: 20.0,
    circumference: 6.9,
    description:
      "Calocedrus decurrens. Trunk circumference: 6.9m. Height: 20.0m. Notable for exceptional age and/or size. Located in Piazza del Patriarcato, Udine, Udine, Italy.",
  },
  {
    name: "Sequoia gigante di Merano",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 46.6699,
    lng: 11.1667,
    height: 40.0,
    circumference: 6.9,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 6.9m. Height: 40.0m. Notable for exceptional age and/or size. Located in Palazzo Seisenegg - Via dei Giardini, 1, Merano, Bolzano, Italy.",
  },
  {
    name: "Cedro del Libano di Cassano Magnago",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 45.676,
    lng: 8.819,
    height: 30.0,
    circumference: 6.9,
    description:
      "Cedrus libani. Trunk circumference: 6.9m. Height: 30.0m. Notable for exceptional age and/or size. Located in Via Cesare Cantù, 11, Cassano Magnago, Varese, Italy.",
  },
  {
    name: "Roverella di Villagrande Strisaili",
    species: "Roverella (Quercus pubescens)",
    lat: 39.9644,
    lng: 9.4553,
    height: 23.0,
    circumference: 6.9,
    description:
      "Quercus pubescens. Trunk circumference: 6.9m. Height: 23.0m. Notable for exceptional age and/or size. Located in Sarcerie, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Cedro libano di Montalto Dora",
    species: "Cedro libano (Cedrus libani)",
    lat: 45.4965,
    lng: 7.8654,
    height: 35.0,
    circumference: 6.8,
    description:
      "Cedrus libani. Trunk circumference: 6.8m. Height: 35.0m. Notable for exceptional age and/or size. Located in Parco del Castello, Montalto Dora, Torino, Italy.",
  },
  {
    name: "Pioppo nero di Castrovillari",
    species: "Pioppo nero (Populus nigra)",
    lat: 39.8013,
    lng: 16.2169,
    height: 36.5,
    circumference: 6.8,
    description:
      "Populus nigra. Trunk circumference: 6.8m. Height: 36.5m. Notable for exceptional age and/or size. Located in San Rocco, Castrovillari, Cosenza, Italy.",
  },
  {
    name: "Pioppo canescente di Berra",
    species: "Pioppo canescente (Populus canescens)",
    lat: 44.9704,
    lng: 12.0008,
    height: 23.0,
    circumference: 6.8,
    description:
      "Populus canescens. Trunk circumference: 6.8m. Height: 23.0m. Notable for exceptional age and/or size. Located in Via Alberano, 141, Berra, Ferrara, Italy.",
  },
  {
    name: "Castagno di Ottone",
    species: "Castagno (Castanea sativa)",
    lat: 44.6131,
    lng: 9.2744,
    height: 23.0,
    circumference: 6.8,
    description:
      "Castanea sativa. Trunk circumference: 6.8m. Height: 23.0m. Notable for exceptional age and/or size. Located in Barchi - Chiostro di San Francesco, Ottone, Piacenza, Italy.",
  },
  {
    name: "Platano comune di Santena",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.9506,
    lng: 7.7764,
    height: 40.0,
    circumference: 6.8,
    description:
      "Platanus acerifolia. Trunk circumference: 6.8m. Height: 40.0m. Notable for exceptional age and/or size. Located in Parco Cavour - Piazza Visconte Venosta, Santena, Torino, Italy.",
  },
  {
    name: "Fico magnolioide di Palermo #5",
    species: "Fico magnolioide (Ficus macrophylla)",
    lat: 38.1295,
    lng: 13.3465,
    height: 20.0,
    circumference: 6.8,
    description:
      "Ficus macrophylla. Trunk circumference: 6.8m. Height: 20.0m. Notable for exceptional age and/or size. Located in Villa Trabia alle Terre Rosse, Palermo, Palermo, Italy.",
  },
  {
    name: "Olivo di Acate",
    species: "Olivo (Olea europaea)",
    lat: 37.0275,
    lng: 14.4865,
    height: 8.0,
    circumference: 6.8,
    description:
      "Olea europaea. Trunk circumference: 6.8m. Height: 8.0m. Notable for exceptional age and/or size. Located in Lippia Litteri, Acate, Ragusa, Italy.",
  },
  {
    name: "Eucalitto rostrato di Napoli",
    species: "Eucalitto rostrato (Eucalyptus camaldulensis)",
    lat: 40.8334,
    lng: 14.2353,
    height: 25.0,
    circumference: 6.8,
    description:
      "Eucalyptus camaldulensis. Trunk circumference: 6.8m. Height: 25.0m. Notable for exceptional age and/or size. Located in Piazza Vittoria - Villa Comunale, Napoli, Napoli, Italy.",
  },
  {
    name: "Farnia di Borgo Val Sugana",
    species: "Farnia (Quercus robur)",
    lat: 46.006,
    lng: 11.3752,
    height: 20.0,
    circumference: 6.8,
    description:
      "Quercus robur. Trunk circumference: 6.8m. Height: 20.0m. Notable for exceptional age and/or size. Located in Malga Costa, Borgo Val Sugana, Trento, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Preganziol",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.6254,
    lng: 12.2397,
    height: 31.0,
    circumference: 6.8,
    description:
      "Cedrus deodara. Trunk circumference: 6.8m. Height: 31.0m. Notable for exceptional age and/or size. Located in Villa Albrizzi Franchetti - Via Terraglio, 203, Preganziol, Treviso, Italy.",
  },
  {
    name: "Cedro dell\'Atlante di Mogliano Veneto",
    species: "Cedro dell\'Atlante (Cedrus atlantica)",
    lat: 45.577,
    lng: 12.2657,
    height: 28.5,
    circumference: 6.7,
    description:
      "Cedrus atlantica. Trunk circumference: 6.7m. Height: 28.5m. Notable for exceptional age and/or size. Located in Villa Coldumer, Mogliano Veneto, Treviso, Italy.",
  },
  {
    name: "Acero di monte di Cappadocia",
    species: "Acero di monte (Acer pseudoplatanus)",
    lat: 41.97,
    lng: 13.2906,
    height: 35.0,
    circumference: 6.7,
    description:
      "Acer pseudoplatanus. Trunk circumference: 6.7m. Height: 35.0m. Notable for exceptional age and/or size. Located in Valle di Camporotondo, Cappadocia, L\'Aquila, Italy.",
  },
  {
    name: "Castagno di Belmonte Calabro",
    species: "Castagno (Castanea sativa)",
    lat: 39.1945,
    lng: 16.1128,
    height: 26.5,
    circumference: 6.7,
    description:
      "Castanea sativa. Trunk circumference: 6.7m. Height: 26.5m. Notable for exceptional age and/or size. Located in Iannizzi - Casalini, Belmonte Calabro, Cosenza, Italy.",
  },
  {
    name: "Roverella di Brisighella",
    species: "Roverella (Quercus pubescens)",
    lat: 44.1976,
    lng: 11.7372,
    height: 25.0,
    circumference: 6.7,
    description:
      "Quercus pubescens. Trunk circumference: 6.7m. Height: 25.0m. Notable for exceptional age and/or size. Located in Ghiozzano - Via Campiume, 1, Brisighella, Ravenna, Italy.",
  },
  {
    name: "Acero campestre di Aviano",
    species: "Acero campestre (Acer campestre)",
    lat: 46.0767,
    lng: 12.57,
    height: 12.0,
    circumference: 6.7,
    description:
      "Acer campestre. Trunk circumference: 6.7m. Height: 12.0m. Notable for exceptional age and/or size. Located in Colle San Giorgio, Aviano, Pordenone, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Biella",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.5628,
    lng: 8.0552,
    height: 37.5,
    circumference: 6.7,
    description:
      "Cedrus deodara. Trunk circumference: 6.7m. Height: 37.5m. Notable for exceptional age and/or size. Located in Giardino pubblico A.M. Zumaglini - Piazza Vittorio Veneto, Biella, Biella, Italy.",
  },
  {
    name: "Olivo di Jerzu #2",
    species: "Olivo (Olea europaea)",
    lat: 39.7808,
    lng: 9.5598,
    height: 7.0,
    circumference: 6.7,
    description:
      "Olea europaea. Trunk circumference: 6.7m. Height: 7.0m. Notable for exceptional age and/or size. Located in Sa Medada, Jerzu, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Olivastro di Laconi",
    species: "Olivastro (Olea europaea)",
    lat: 39.8984,
    lng: 9.0057,
    height: 15.0,
    circumference: 6.7,
    description:
      "Olea europaea. Trunk circumference: 6.7m. Height: 15.0m. Notable for exceptional age and/or size. Located in Nuraghe Orrubiu, Laconi, Oristano (Oristano), Italy.",
  },
  {
    name: "Leccio di Vinci",
    species: "Leccio (Quercus ilex)",
    lat: 43.797,
    lng: 10.9524,
    height: 18.0,
    circumference: 6.7,
    description:
      "Quercus ilex. Trunk circumference: 6.7m. Height: 18.0m. Notable for exceptional age and/or size. Located in Faltognano, Vinci, Firenze, Italy.",
  },
  {
    name: "Platano comune di Torino",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.0759,
    lng: 7.6382,
    height: 28.0,
    circumference: 6.7,
    description:
      "Platanus acerifolia. Trunk circumference: 6.7m. Height: 28.0m. Notable for exceptional age and/or size. Located in Parco Tesoriera - Corso Francia, Torino, Torino, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Merano",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 46.6699,
    lng: 11.1668,
    height: 33.5,
    circumference: 6.6,
    description:
      "Cedrus deodara. Trunk circumference: 6.6m. Height: 33.5m. Notable for exceptional age and/or size. Located in Palazzo Seisenegg - Via dei Giardini, 1, Merano, Bolzano, Italy.",
  },
  {
    name: "Tiglio selvatico di Malborghetto",
    species: "Tiglio selvatico (Tilia cordata)",
    lat: 46.5067,
    lng: 13.4388,
    height: 22.0,
    circumference: 6.6,
    description:
      "Tilia cordata. Trunk circumference: 6.6m. Height: 22.0m. Notable for exceptional age and/or size. Located in Palazzo Veneziano, Malborghetto, Udine, Italy.",
  },
  {
    name: "Roverella di Patrica",
    species: "Roverella (Quercus pubescens)",
    lat: 41.6017,
    lng: 13.2575,
    height: 34.5,
    circumference: 6.6,
    description:
      "Quercus pubescens. Trunk circumference: 6.6m. Height: 34.5m. Notable for exceptional age and/or size. Located in Tufo - Via Casetta del Colle, 50, Patrica, Frosinone, Italy.",
  },
  {
    name: "Faggio di Ala",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.7134,
    lng: 10.9932,
    height: 21.5,
    circumference: 6.6,
    description:
      "Fagus sylvatica. Trunk circumference: 6.6m. Height: 21.5m. Notable for exceptional age and/or size. Located in Malga Revoltello, Ala, Trento, Italy.",
  },
  {
    name: "Pioppo nero di Lauria",
    species: "Pioppo nero (Populus nigra)",
    lat: 40.0481,
    lng: 15.8382,
    height: 31.0,
    circumference: 6.6,
    description:
      "Populus nigra. Trunk circumference: 6.6m. Height: 31.0m. Notable for exceptional age and/or size. Located in Via Roma, Lauria, Potenza, Italy.",
  },
  {
    name: "Quercia ibrida di Samo",
    species: "Quercia ibrida (Quercus cerris)",
    lat: 38.1179,
    lng: 15.9624,
    height: 20.0,
    circumference: 6.6,
    description:
      "Quercus cerris. Trunk circumference: 6.6m. Height: 20.0m. Notable for exceptional age and/or size. Located in Croce di Belli, Samo, Reggio Calabria, Italy.",
  },
  {
    name: "Farnia di Attimis",
    species: "Farnia (Quercus robur)",
    lat: 46.1914,
    lng: 13.3041,
    height: 31.0,
    circumference: 6.6,
    description:
      "Quercus robur. Trunk circumference: 6.6m. Height: 31.0m. Notable for exceptional age and/or size. Located in Borgo di sopra, Attimis, Udine, Italy.",
  },
  {
    name: "Platano comune di Motta Visconti",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.288,
    lng: 8.9941,
    height: 48.0,
    circumference: 6.6,
    description:
      "Platanus acerifolia. Trunk circumference: 6.6m. Height: 48.0m. Notable for exceptional age and/or size. Located in Via Soriani, 31, Motta Visconti, Milano, Italy.",
  },
  {
    name: "Pioppo bianco di Voghera",
    species: "Pioppo bianco (Populus alba)",
    lat: 45.0018,
    lng: 9.0622,
    height: 32.0,
    circumference: 6.6,
    description:
      "Populus alba. Trunk circumference: 6.6m. Height: 32.0m. Notable for exceptional age and/or size. Located in Campo ferro - Strada Brignolo, Voghera, Pavia, Italy.",
  },
  {
    name: "Larice di Pietraporzio",
    species: "Larice (Larix decidua)",
    lat: 44.3079,
    lng: 6.999,
    height: 23.0,
    circumference: 6.6,
    description:
      "Larix decidua. Trunk circumference: 6.6m. Height: 23.0m. Notable for exceptional age and/or size. Located in Vallone del Piz, Pietraporzio, Cuneo, Italy.",
  },
  {
    name: "Platano comune di Parma",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.806,
    lng: 10.3226,
    height: 47.0,
    circumference: 6.5,
    description:
      "Platanus acerifolia. Trunk circumference: 6.5m. Height: 47.0m. Notable for exceptional age and/or size. Located in Palazzo Ducale, Parma, Parma, Italy.",
  },
  {
    name: "Platano occidentale di Faenza",
    species: "Platano occidentale (Platanus occidentalis)",
    lat: 44.3306,
    lng: 11.8594,
    height: 33.0,
    circumference: 6.5,
    description:
      "Platanus occidentalis. Trunk circumference: 6.5m. Height: 33.0m. Notable for exceptional age and/or size. Located in San Pier Laguna - Via Lugo, 153, Faenza, Ravenna, Italy.",
  },
  {
    name: "Cedro dell\'Atlante di Torre Boldone",
    species: "Cedro dell\'Atlante (Cedrus atlantica)",
    lat: 45.7137,
    lng: 9.7034,
    height: 37.0,
    circumference: 6.5,
    description:
      "Cedrus atlantica. Trunk circumference: 6.5m. Height: 37.0m. Notable for exceptional age and/or size. Located in Parco Fondazione I.S.B. - Via Reich, 49, Torre Boldone, Bergamo, Italy.",
  },
  {
    name: "Cedro del Libano di Roncade",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 45.6274,
    lng: 12.3763,
    height: 27.5,
    circumference: 6.5,
    description:
      "Cedrus libani. Trunk circumference: 6.5m. Height: 27.5m. Notable for exceptional age and/or size. Located in Castello di Roncade, Roncade, Treviso, Italy.",
  },
  {
    name: "Castagno di San Giovanni in Fiore",
    species: "Castagno (Castanea sativa)",
    lat: 39.3051,
    lng: 16.6568,
    height: 16.0,
    circumference: 6.5,
    description:
      "Castanea sativa. Trunk circumference: 6.5m. Height: 16.0m. Notable for exceptional age and/or size. Located in Serrisi, San Giovanni in Fiore, Cosenza, Italy.",
  },
  {
    name: "Faggio di Verghereto",
    species: "Faggio (Fagus sylvatica)",
    lat: 43.81,
    lng: 12.0542,
    height: 16.5,
    circumference: 6.5,
    description:
      "Fagus sylvatica. Trunk circumference: 6.5m. Height: 16.5m. Notable for exceptional age and/or size. Located in Monte Fumaiolo – La Casetta, Verghereto, Forlì-Cesena, Italy.",
  },
  {
    name: "Sequoia gigante di Campobasso",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 41.5601,
    lng: 14.6616,
    height: 30.0,
    circumference: 6.5,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 6.5m. Height: 30.0m. Notable for exceptional age and/or size. Located in Convitto Mario Pagano - Viale Giuseppe Mazzini, 1, Campobasso, Campobasso, Italy.",
  },
  {
    name: "Sughera di Caltagirone",
    species: "Sughera (Quercus suber)",
    lat: 37.0983,
    lng: 14.4686,
    height: 11.0,
    circumference: 6.5,
    description:
      "Quercus suber. Trunk circumference: 6.5m. Height: 11.0m. Notable for exceptional age and/or size. Located in Molara, Caltagirone, Catania, Italy.",
  },
  {
    name: "Sequoia gigante di Reggello",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 43.7328,
    lng: 11.5563,
    height: 30.0,
    circumference: 6.5,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 6.5m. Height: 30.0m. Notable for exceptional age and/or size. Located in Vallombrosa - Arboreto, Reggello, Firenze, Italy.",
  },
  {
    name: "Platano comune di Vescovana",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.1336,
    lng: 11.7072,
    height: 40.0,
    circumference: 6.5,
    description:
      "Platanus acerifolia. Trunk circumference: 6.5m. Height: 40.0m. Notable for exceptional age and/or size. Located in Villa Pisani Scalabrin - Via Roma, 19, Vescovana, Padova, Italy.",
  },
  {
    name: "Platano comune di Mogliano Veneto",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.5773,
    lng: 12.2645,
    height: 35.0,
    circumference: 6.5,
    description:
      "Platanus acerifolia. Trunk circumference: 6.5m. Height: 35.0m. Notable for exceptional age and/or size. Located in Villa Coldumer, Mogliano Veneto, Treviso, Italy.",
  },
  {
    name: "Leccio di Villagrande Strisaili #3",
    species: "Leccio (Quercus ilex)",
    lat: 39.9764,
    lng: 9.4664,
    height: 24.0,
    circumference: 6.5,
    description:
      "Quercus ilex. Trunk circumference: 6.5m. Height: 24.0m. Notable for exceptional age and/or size. Located in Sa Menta, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Roverella di Treia",
    species: "Roverella (Quercus pubescens)",
    lat: 43.2893,
    lng: 13.3381,
    height: 30.0,
    circumference: 6.5,
    description:
      "Quercus pubescens. Trunk circumference: 6.5m. Height: 30.0m. Notable for exceptional age and/or size. Located in San Marco Vecchio, Treia, Macerata, Italy.",
  },
  {
    name: "Cedro del Libano di Montebello della Battaglia",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 44.9975,
    lng: 9.1022,
    height: 28.5,
    circumference: 6.5,
    description:
      "Cedrus libani. Trunk circumference: 6.5m. Height: 28.5m. Notable for exceptional age and/or size. Located in Villa Lomellini - Via Cavour, 3, Montebello della Battaglia, Pavia, Italy.",
  },
  {
    name: "Platano comune di Milano #2",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.517,
    lng: 9.1714,
    height: 20.0,
    circumference: 6.4,
    description:
      "Platanus acerifolia. Trunk circumference: 6.4m. Height: 20.0m. Notable for exceptional age and/or size. Located in Viale Affori ang. Viale Astesani, Milano, Milano, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Tregnago",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.5195,
    lng: 11.1661,
    height: 33.5,
    circumference: 6.4,
    description:
      "Cedrus deodara. Trunk circumference: 6.4m. Height: 33.5m. Notable for exceptional age and/or size. Located in Villa Adelia - Via dei Bandi, 54, Tregnago, Verona, Italy.",
  },
  {
    name: "Sequoia gigante di Trento",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 46.066,
    lng: 11.1553,
    height: 34.0,
    circumference: 6.4,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 6.4m. Height: 34.0m. Notable for exceptional age and/or size. Located in Povo - ex Villa Thun, Trento, Trento, Italy.",
  },
  {
    name: "Roverella di Pietragalla",
    species: "Roverella (Quercus pubescens)",
    lat: 40.775,
    lng: 15.8849,
    height: 19.0,
    circumference: 6.4,
    description:
      "Quercus pubescens. Trunk circumference: 6.4m. Height: 19.0m. Notable for exceptional age and/or size. Located in Fosso della Pila, Pietragalla, Potenza, Italy.",
  },
  {
    name: "Castagno di San Luca #2",
    species: "Castagno (Castanea sativa)",
    lat: 38.1781,
    lng: 16.0263,
    height: 14.0,
    circumference: 6.4,
    description:
      "Castanea sativa. Trunk circumference: 6.4m. Height: 14.0m. Notable for exceptional age and/or size. Located in San Giorgio di Pietracappa, San Luca, Reggio Calabria, Italy.",
  },
  {
    name: "Platano comune di Torino #2",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.0643,
    lng: 7.7196,
    height: 13.5,
    circumference: 6.4,
    description:
      "Platanus acerifolia. Trunk circumference: 6.4m. Height: 13.5m. Notable for exceptional age and/or size. Located in Villa Rey, Torino, Torino, Italy.",
  },
  {
    name: "Agrifoglio di Desulo",
    species: "Agrifoglio (Ilex aquifolium)",
    lat: 40.0317,
    lng: 9.2472,
    height: 10.0,
    circumference: 6.4,
    description:
      "Ilex aquifolium. Trunk circumference: 6.4m. Height: 10.0m. Notable for exceptional age and/or size. Located in Funtanas, Desulo, Nuoro (Nuoro), Italy.",
  },
  {
    name: "Roverella di Talana",
    species: "Roverella (Quercus pubescens)",
    lat: 40.0054,
    lng: 9.4341,
    height: 19.0,
    circumference: 6.4,
    description:
      "Quercus pubescens. Trunk circumference: 6.4m. Height: 19.0m. Notable for exceptional age and/or size. Located in Su Fundale, Talana, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Roverella di Illorai #3",
    species: "Roverella (Quercus pubescens)",
    lat: 40.3924,
    lng: 8.9391,
    height: 23.0,
    circumference: 6.4,
    description:
      "Quercus pubescens. Trunk circumference: 6.4m. Height: 23.0m. Notable for exceptional age and/or size. Located in Bia \'e Fustes – Sa Mandrade Sant\'Ainzu, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Roverella di Loreto Aprutino",
    species: "Roverella (Quercus pubescens)",
    lat: 42.4021,
    lng: 13.9549,
    height: 24.0,
    circumference: 6.3,
    description:
      "Quercus pubescens. Trunk circumference: 6.3m. Height: 24.0m. Notable for exceptional age and/or size. Located in Passo Cordone - Strada Statale 81, Loreto Aprutino, Pescara, Italy.",
  },
  {
    name: "Cedro del Libano di Caserta",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 41.0893,
    lng: 14.3412,
    height: 30.0,
    circumference: 6.3,
    description:
      "Cedrus libani. Trunk circumference: 6.3m. Height: 30.0m. Notable for exceptional age and/or size. Located in Cimitero comunale, Caserta, Caserta, Italy.",
  },
  {
    name: "Tiglio selvatico di Naz-Sciaves",
    species: "Tiglio selvatico (Tilia cordata)",
    lat: 46.7762,
    lng: 11.6417,
    height: 17.0,
    circumference: 6.3,
    description:
      "Tilia cordata. Trunk circumference: 6.3m. Height: 17.0m. Notable for exceptional age and/or size. Located in Aica, Naz-Sciaves, Bolzano, Italy.",
  },
  {
    name: "Cipresso di Monterey di Rapallo",
    species: "Cipresso di Monterey (Cupressus macrocarpa)",
    lat: 44.3467,
    lng: 9.2397,
    height: 25.0,
    circumference: 6.3,
    description:
      "Cupressus macrocarpa. Trunk circumference: 6.3m. Height: 25.0m. Notable for exceptional age and/or size. Located in Villa Tigullio - Parco Comunale L. Casale, Rapallo, Genova, Italy.",
  },
  {
    name: "Roverella di Laurenzana #2",
    species: "Roverella (Quercus pubescens)",
    lat: 40.4969,
    lng: 15.9794,
    height: 19.5,
    circumference: 6.3,
    description:
      "Quercus pubescens. Trunk circumference: 6.3m. Height: 19.5m. Notable for exceptional age and/or size. Located in Casiline, Laurenzana, Potenza, Italy.",
  },
  {
    name: "Castagno di Piana Crixia",
    species: "Castagno (Castanea sativa)",
    lat: 44.5195,
    lng: 8.2581,
    height: 11.0,
    circumference: 6.3,
    description:
      "Castanea sativa. Trunk circumference: 6.3m. Height: 11.0m. Notable for exceptional age and/or size. Located in Erche - Case Tappe, Piana Crixia, Savona, Italy.",
  },
  {
    name: "Cipresso di Monterey di Sassari",
    species: "Cipresso di Monterey (Cupressus macrocarpa)",
    lat: 40.7685,
    lng: 8.5148,
    height: 12.0,
    circumference: 6.3,
    description:
      "Cupressus macrocarpa. Trunk circumference: 6.3m. Height: 12.0m. Notable for exceptional age and/or size. Located in Mandra di la Giua, Sassari, Sassari (Sassari), Italy.",
  },
  {
    name: "Olivo di Turri",
    species: "Olivo (Olea europaea)",
    lat: 39.703,
    lng: 8.9243,
    height: 12.5,
    circumference: 6.3,
    description:
      "Olea europaea. Trunk circumference: 6.3m. Height: 12.5m. Notable for exceptional age and/or size. Located in Molino, Turri, Sud Sardegna (Medio Campidano), Italy.",
  },
  {
    name: "Faggio di Zafferana Etnea",
    species: "Faggio (Fagus sylvatica)",
    lat: 37.7052,
    lng: 15.0468,
    height: 13.0,
    circumference: 6.3,
    description:
      "Fagus sylvatica. Trunk circumference: 6.3m. Height: 13.0m. Notable for exceptional age and/or size. Located in Acquarocca degli Zappini, Zafferana Etnea, Catania, Italy.",
  },
  {
    name: "Castagno di Faedo",
    species: "Castagno (Castanea sativa)",
    lat: 46.1953,
    lng: 11.1701,
    height: 14.0,
    circumference: 6.3,
    description:
      "Castanea sativa. Trunk circumference: 6.3m. Height: 14.0m. Notable for exceptional age and/or size. Located in Maso Togn, Faedo, Trento, Italy.",
  },
  {
    name: "Castagno di Grisolia",
    species: "Castagno (Castanea sativa)",
    lat: 39.7228,
    lng: 15.9064,
    height: 20.0,
    circumference: 6.3,
    description:
      "Castanea sativa. Trunk circumference: 6.3m. Height: 20.0m. Notable for exceptional age and/or size. Located in Monte, Grisolia, Cosenza, Italy.",
  },
  {
    name: "Pioppo nero di Imola",
    species: "Pioppo nero (Populus nigra)",
    lat: 44.3194,
    lng: 11.6711,
    height: 24.0,
    circumference: 6.2,
    description:
      "Populus nigra. Trunk circumference: 6.2m. Height: 24.0m. Notable for exceptional age and/or size. Located in Ponticelli - Via del Canale, 37, Imola, Bologna, Italy.",
  },
  {
    name: "Platano comune di Milano #3",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.4758,
    lng: 9.1982,
    height: 28.0,
    circumference: 6.2,
    description:
      "Platanus acerifolia. Trunk circumference: 6.2m. Height: 28.0m. Notable for exceptional age and/or size. Located in Giardini Montanelli - Corso Venezia, Milano, Milano, Italy.",
  },
  {
    name: "Olmo montano di Demonte",
    species: "Olmo montano (Ulmus glabra)",
    lat: 44.2955,
    lng: 7.2854,
    height: 25.0,
    circumference: 6.2,
    description:
      "Ulmus glabra. Trunk circumference: 6.2m. Height: 25.0m. Notable for exceptional age and/or size. Located in località Bergemolo, Demonte, Cuneo, Italy.",
  },
  {
    name: "Leccio di Seulo",
    species: "Leccio (Quercus ilex)",
    lat: 39.8582,
    lng: 9.1935,
    height: 12.5,
    circumference: 6.2,
    description:
      "Quercus ilex. Trunk circumference: 6.2m. Height: 12.5m. Notable for exceptional age and/or size. Located in Fundu de Toni, Seulo, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Leccio di Seulo #2",
    species: "Leccio (Quercus ilex)",
    lat: 40.9029,
    lng: 9.2173,
    height: 22.5,
    circumference: 6.2,
    description:
      "Quercus ilex. Trunk circumference: 6.2m. Height: 22.5m. Notable for exceptional age and/or size. Located in Sedda de sa Era - Olissa, Seulo, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Roverella di Cheremule",
    species: "Roverella (Quercus pubescens)",
    lat: 40.4759,
    lng: 8.6705,
    height: 11.0,
    circumference: 6.2,
    description:
      "Quercus pubescens. Trunk circumference: 6.2m. Height: 11.0m. Notable for exceptional age and/or size. Located in Saludus a Deus, Cheremule, Sassari (Sassari), Italy.",
  },
  {
    name: "Platano comune di Vigodarzere",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.4558,
    lng: 11.8628,
    height: 32.0,
    circumference: 6.2,
    description:
      "Platanus acerifolia. Trunk circumference: 6.2m. Height: 32.0m. Notable for exceptional age and/or size. Located in Certosa di Vigodarzere - Lungargine Brenta, Vigodarzere, Padova, Italy.",
  },
  {
    name: "Libocedro di Pavullo nel Frignano",
    species: "Libocedro (Calocedrus decurrens)",
    lat: 44.3414,
    lng: 10.8358,
    height: 32.0,
    circumference: 6.2,
    description:
      "Calocedrus decurrens. Trunk circumference: 6.2m. Height: 32.0m. Notable for exceptional age and/or size. Located in Parco Ducale, Pavullo nel Frignano, Modena, Italy.",
  },
  {
    name: "Rovere di Samo",
    species: "Rovere (Quercus petraea)",
    lat: 38.1157,
    lng: 15.953,
    height: 23.0,
    circumference: 6.2,
    description:
      "Quercus petraea. Trunk circumference: 6.2m. Height: 23.0m. Notable for exceptional age and/or size. Located in Ferraina, Samo, Reggio Calabria, Italy.",
  },
  {
    name: "Platano comune di Budrio",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.5297,
    lng: 11.5008,
    height: 27.5,
    circumference: 6.2,
    description:
      "Platanus acerifolia. Trunk circumference: 6.2m. Height: 27.5m. Notable for exceptional age and/or size. Located in Vigorso - Via 36 martiri, 3, Budrio, Bologna, Italy.",
  },
  {
    name: "Platano comune di Milano #4",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.4719,
    lng: 9.1984,
    height: 30.0,
    circumference: 6.2,
    description:
      "Platanus acerifolia. Trunk circumference: 6.2m. Height: 30.0m. Notable for exceptional age and/or size. Located in Villa Belgiojoso Bonaparte - Via Palestro, Milano, Milano, Italy.",
  },
  {
    name: "Larice di Albosaggia",
    species: "Larice (Larix decidua)",
    lat: 46.1208,
    lng: 9.8672,
    height: 29.0,
    circumference: 6.2,
    description:
      "Larix decidua. Trunk circumference: 6.2m. Height: 29.0m. Notable for exceptional age and/or size. Located in Alpe Campelli, Albosaggia, Sondrio, Italy.",
  },
  {
    name: "Tiglio nostrale di Bioglio",
    species: "Tiglio nostrale (Tilia platyphyllos)",
    lat: 45.6153,
    lng: 8.139,
    height: 35.0,
    circumference: 6.2,
    description:
      "Tilia platyphyllos. Trunk circumference: 6.2m. Height: 35.0m. Notable for exceptional age and/or size. Located in Parco della ex Villa Sella, Bioglio, Biella, Italy.",
  },
  {
    name: "Platano comune di Cavallermaggiore",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.7116,
    lng: 7.731,
    height: 33.0,
    circumference: 6.2,
    description:
      "Platanus acerifolia. Trunk circumference: 6.2m. Height: 33.0m. Notable for exceptional age and/or size. Located in Madonna del Prone, Cavallermaggiore, Cuneo, Italy.",
  },
  {
    name: "Sughera di Orune",
    species: "Sughera (Quercus suber)",
    lat: 40.413,
    lng: 9.2901,
    height: 21.5,
    circumference: 6.2,
    description:
      "Quercus suber. Trunk circumference: 6.2m. Height: 21.5m. Notable for exceptional age and/or size. Located in Sa Tuppa, Orune, Nuoro (Nuoro), Italy.",
  },
  {
    name: "Leccio di Ulassai",
    species: "Leccio (Quercus ilex)",
    lat: 39.8069,
    lng: 9.4325,
    height: 17.0,
    circumference: 6.2,
    description:
      "Quercus ilex. Trunk circumference: 6.2m. Height: 17.0m. Notable for exceptional age and/or size. Located in Su Stainu – Funtana Abba Frida, Ulassai, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Olivo di Genuri",
    species: "Olivo (Olea europaea)",
    lat: 39.7397,
    lng: 8.9238,
    height: 6.0,
    circumference: 6.2,
    description:
      "Olea europaea. Trunk circumference: 6.2m. Height: 6.0m. Notable for exceptional age and/or size. Located in Porcilis, Genuri, Sud Sardegna (Medio Campidano), Italy.",
  },
  {
    name: "Eucalitto rostrato di Santadi",
    species: "Eucalitto rostrato (Eucalyptus camaldulensis)",
    lat: 39.09,
    lng: 8.7975,
    height: 24.0,
    circumference: 6.2,
    description:
      "Eucalyptus camaldulensis. Trunk circumference: 6.2m. Height: 24.0m. Notable for exceptional age and/or size. Located in Pantaleo, Santadi, Sud Sardegna (Carbonia-Iglesias), Italy.",
  },
  {
    name: "Castagno di Santa Fiora",
    species: "Castagno (Castanea sativa)",
    lat: 42.8334,
    lng: 11.582,
    height: 12.5,
    circumference: 6.2,
    description:
      "Castanea sativa. Trunk circumference: 6.2m. Height: 12.5m. Notable for exceptional age and/or size. Located in Case Dondolini -Via Fratelli Cervi, Santa Fiora, Grosseto, Italy.",
  },
  {
    name: "Sequoia gigante di Trento #2",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 46.0666,
    lng: 11.1603,
    height: 30.0,
    circumference: 6.2,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 6.2m. Height: 30.0m. Notable for exceptional age and/or size. Located in Povo – Villa Lubich, Trento, Trento, Italy.",
  },
  {
    name: "Olmo del Caucaso di Colorno",
    species: "Olmo del Caucaso (Zelkova carpinifolia)",
    lat: 44.9287,
    lng: 10.3777,
    height: 26.0,
    circumference: 6.1,
    description:
      "Zelkova carpinifolia. Trunk circumference: 6.1m. Height: 26.0m. Notable for exceptional age and/or size. Located in Reggia di Colorno, Colorno, Parma, Italy.",
  },
  {
    name: "Cerro di Forenza",
    species: "Cerro (Quercus cerris)",
    lat: 40.8583,
    lng: 15.7761,
    height: 35.0,
    circumference: 6.1,
    description:
      "Quercus cerris. Trunk circumference: 6.1m. Height: 35.0m. Notable for exceptional age and/or size. Located in Bosco Grande Derricelle, Forenza, Potenza, Italy.",
  },
  {
    name: "Roverella di Cerchiara di Calabria",
    species: "Roverella (Quercus pubescens)",
    lat: 39.8454,
    lng: 16.3598,
    height: 15.0,
    circumference: 6.1,
    description:
      "Quercus pubescens. Trunk circumference: 6.1m. Height: 15.0m. Notable for exceptional age and/or size. Located in Venaglie, Cerchiara di Calabria, Cosenza, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Udine",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 46.0633,
    lng: 13.2282,
    height: 35.0,
    circumference: 6.1,
    description:
      "Cedrus deodara. Trunk circumference: 6.1m. Height: 35.0m. Notable for exceptional age and/or size. Located in Via Marco Volpe, Udine, Udine, Italy.",
  },
  {
    name: "Castagno di Monterosso Grana",
    species: "Castagno (Castanea sativa)",
    lat: 44.3969,
    lng: 7.3103,
    height: 27.0,
    circumference: 6.1,
    description:
      "Castanea sativa. Trunk circumference: 6.1m. Height: 27.0m. Notable for exceptional age and/or size. Located in Borgata Techè - San Pietro Monterosso, Monterosso Grana, Cuneo, Italy.",
  },
  {
    name: "Platano comune di Aglié",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.3607,
    lng: 7.7689,
    height: 55.0,
    circumference: 6.1,
    description:
      "Platanus acerifolia. Trunk circumference: 6.1m. Height: 55.0m. Notable for exceptional age and/or size. Located in Parco del Castello, Aglié, Torino, Italy.",
  },
  {
    name: "Leccio di Seui #2",
    species: "Leccio (Quercus ilex)",
    lat: 39.8821,
    lng: 9.367,
    height: 30.0,
    circumference: 6.1,
    description:
      "Quercus ilex. Trunk circumference: 6.1m. Height: 30.0m. Notable for exceptional age and/or size. Located in Funtana su Canali, Seui, Sud Sardegna (Ogliastra), Italy.",
  },
  {
    name: "Sequoia gigante di Reggello #2",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 43.7048,
    lng: 11.4691,
    height: 28.0,
    circumference: 6.1,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 6.1m. Height: 28.0m. Notable for exceptional age and/or size. Located in Castello di Sammezzano - Leccio, Reggello, Firenze, Italy.",
  },
  {
    name: "Abete bianco di Avio",
    species: "Abete bianco (Abies alba)",
    lat: 46.7223,
    lng: 11.8815,
    height: 31.0,
    circumference: 6.1,
    description:
      "Abies alba. Trunk circumference: 6.1m. Height: 31.0m. Notable for exceptional age and/or size. Located in Val della Sega - Malga Fassole, Avio, Trento, Italy.",
  },
  {
    name: "Quercia rossa di Cittadella",
    species: "Quercia rossa (Quercus rubra)",
    lat: 45.6089,
    lng: 11.7963,
    height: 27.0,
    circumference: 6.1,
    description:
      "Quercus rubra. Trunk circumference: 6.1m. Height: 27.0m. Notable for exceptional age and/or size. Located in Villa Bolzonella - Via Bolzonella, Cittadella, Padova, Italy.",
  },
  {
    name: "Pino del Qeensland di Genova",
    species: "Pino del Qeensland (Araucaria bidwillii)",
    lat: 44.3826,
    lng: 9.0435,
    height: 28.0,
    circumference: 6.1,
    description:
      "Araucaria bidwillii. Trunk circumference: 6.1m. Height: 28.0m. Notable for exceptional age and/or size. Located in Nervi - Villa Groppallo, Genova, Genova, Italy.",
  },
  {
    name: "Pino strobo di Chiusa di Pesio",
    species: "Pino strobo (Pinus strobus)",
    lat: 44.2407,
    lng: 7.6631,
    height: 38.0,
    circumference: 6.0,
    description:
      "Pinus strobus. Trunk circumference: 6.0m. Height: 38.0m. Notable for exceptional age and/or size. Located in Certosa, Chiusa di Pesio, Cuneo, Italy.",
  },
  {
    name: "Noce del Caucaso di Torino",
    species: "Noce del Caucaso (Pterocarya fraxinifolia(Lam.))",
    lat: 45.0637,
    lng: 7.6795,
    height: 27.0,
    circumference: 6.0,
    description:
      "Pterocarya fraxinifolia(Lam.). Trunk circumference: 6.0m. Height: 27.0m. Notable for exceptional age and/or size. Located in Giardino Sambuy - Piazza Carlo Felice, Torino, Torino, Italy.",
  },
  {
    name: "Leccio di Seulo #3",
    species: "Leccio (Quercus ilex)",
    lat: 39.8645,
    lng: 9.2636,
    height: 22.0,
    circumference: 6.0,
    description:
      "Quercus ilex. Trunk circumference: 6.0m. Height: 22.0m. Notable for exceptional age and/or size. Located in Taccu Sui, Seulo, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Acero di monte di Cappadocia #2",
    species: "Acero di monte (Acer pseudoplatanus)",
    lat: 41.9711,
    lng: 13.29,
    height: 30.0,
    circumference: 6.0,
    description:
      "Acer pseudoplatanus. Trunk circumference: 6.0m. Height: 30.0m. Notable for exceptional age and/or size. Located in Valle di Camporotondo, Cappadocia, L\'Aquila, Italy.",
  },
  {
    name: "Abete bianco di Taverna",
    species: "Abete bianco (Abies alba)",
    lat: 39.095,
    lng: 16.6161,
    height: 40.0,
    circumference: 6.0,
    description:
      "Abies alba. Trunk circumference: 6.0m. Height: 40.0m. Notable for exceptional age and/or size. Located in Frainella - Colle del Telegrafo, Taverna, Catanzaro, Italy.",
  },
  {
    name: "Tiglio comune di Summonte",
    species: "Tiglio comune (Tilia ×)",
    lat: 40.9489,
    lng: 14.7452,
    height: 34.0,
    circumference: 6.0,
    description:
      "Tilia ×. Trunk circumference: 6.0m. Height: 34.0m. Notable for exceptional age and/or size. Located in Strada Statale n. 374 - Paese, Summonte, Avellino, Italy.",
  },
  {
    name: "Platano comune di Calderara di Reno",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.5722,
    lng: 11.2404,
    height: 32.0,
    circumference: 6.0,
    description:
      "Platanus acerifolia. Trunk circumference: 6.0m. Height: 32.0m. Notable for exceptional age and/or size. Located in Tavernelle - Sacerno - Via Persicetana, 52, Calderara di Reno, Bologna, Italy.",
  },
  {
    name: "Tuia gigante di Attimis",
    species: "Tuia gigante (Thuja plicata)",
    lat: 46.1907,
    lng: 13.3062,
    height: 35.0,
    circumference: 6.0,
    description:
      "Thuja plicata. Trunk circumference: 6.0m. Height: 35.0m. Notable for exceptional age and/or size. Located in Villa d\' Attimis, Attimis, Udine, Italy.",
  },
  {
    name: "Cedro del Libano di Roma",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 41.9152,
    lng: 12.511,
    height: 28.0,
    circumference: 6.0,
    description:
      "Cedrus libani. Trunk circumference: 6.0m. Height: 28.0m. Notable for exceptional age and/or size. Located in Villa Torlonia - Obelisco, Roma, Roma, Italy.",
  },
  {
    name: "Platano comune di Milano #5",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.4545,
    lng: 9.1971,
    height: 16.0,
    circumference: 6.0,
    description:
      "Platanus acerifolia. Trunk circumference: 6.0m. Height: 16.0m. Notable for exceptional age and/or size. Located in Giardino Roberto Balzen - Corso di Porta Romana, 112-116, Milano, Milano, Italy.",
  },
  {
    name: "Pioppo nero di Acqui Terme",
    species: "Pioppo nero (Populus nigra)",
    lat: 44.6687,
    lng: 8.4634,
    height: 32.0,
    circumference: 6.0,
    description:
      "Populus nigra. Trunk circumference: 6.0m. Height: 32.0m. Notable for exceptional age and/or size. Located in Bagni - Via Trieste, 34, Acqui Terme, Alessandria, Italy.",
  },
  {
    name: "Pioppo nero di Coniolo",
    species: "Pioppo nero (Populus nigra)",
    lat: 45.1589,
    lng: 8.3697,
    height: 28.5,
    circumference: 6.0,
    description:
      "Populus nigra. Trunk circumference: 6.0m. Height: 28.5m. Notable for exceptional age and/or size. Located in Argine Morano-Area sportiva di Morano, Coniolo, Alessandria, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Comignago",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.7118,
    lng: 8.5628,
    height: 33.0,
    circumference: 6.0,
    description:
      "Cedrus deodara. Trunk circumference: 6.0m. Height: 33.0m. Notable for exceptional age and/or size. Located in Concentrico - Via Principale, 4, Comignago, Novara, Italy.",
  },
  {
    name: "Platano comune di Torino #3",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.0512,
    lng: 7.6864,
    height: 26.0,
    circumference: 6.0,
    description:
      "Platanus acerifolia. Trunk circumference: 6.0m. Height: 26.0m. Notable for exceptional age and/or size. Located in Parco del Valentino - Viale Virgilio, Torino, Torino, Italy.",
  },
  {
    name: "Leccio di Gairo",
    species: "Leccio (Quercus ilex)",
    lat: 39.9086,
    lng: 9.424,
    height: 11.0,
    circumference: 6.0,
    description:
      "Quercus ilex. Trunk circumference: 6.0m. Height: 11.0m. Notable for exceptional age and/or size. Located in Su Sammuccu, Gairo, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Olivo di Tertenia",
    species: "Olivo (Olea europaea)",
    lat: 39.6921,
    lng: 9.5687,
    height: 6.0,
    circumference: 6.0,
    description:
      "Olea europaea. Trunk circumference: 6.0m. Height: 6.0m. Notable for exceptional age and/or size. Located in Pardesua – Corongiu, Tertenia, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Olivo di Tertenia #2",
    species: "Olivo (Olea europaea)",
    lat: 39.6808,
    lng: 9.6439,
    height: 5.0,
    circumference: 6.0,
    description:
      "Olea europaea. Trunk circumference: 6.0m. Height: 5.0m. Notable for exceptional age and/or size. Located in Su Concali, Tertenia, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Olivastro di Villanova Truschedu",
    species: "Olivastro (Olea europaea)",
    lat: 40.0004,
    lng: 8.7501,
    height: 12.0,
    circumference: 6.0,
    description:
      "Olea europaea. Trunk circumference: 6.0m. Height: 12.0m. Notable for exceptional age and/or size. Located in San Gemiliano, Villanova Truschedu, Oristano (Oristano), Italy.",
  },
  {
    name: "Olivo di Genuri #2",
    species: "Olivo (Olea europaea)",
    lat: 39.7439,
    lng: 8.9185,
    height: 4.0,
    circumference: 6.0,
    description:
      "Olea europaea. Trunk circumference: 6.0m. Height: 4.0m. Notable for exceptional age and/or size. Located in Zinnigas - Cungiau Antoni Casu, Genuri, Sud Sardegna (Medio Campidano), Italy.",
  },
  {
    name: "Pino laricio di Linguaglossa",
    species: "Pino laricio (Pinus nigra)",
    lat: 37.8073,
    lng: 14.9508,
    height: 24.0,
    circumference: 6.0,
    description:
      "Pinus nigra. Trunk circumference: 6.0m. Height: 24.0m. Notable for exceptional age and/or size. Located in Pernicana, Linguaglossa, Catania, Italy.",
  },
  {
    name: "Sequoia gigante di Longarone",
    species: "Sequoia gigante (Sequoiadendron giganteum)",
    lat: 46.2437,
    lng: 12.3018,
    height: 33.0,
    circumference: 6.0,
    description:
      "Sequoiadendron giganteum. Trunk circumference: 6.0m. Height: 33.0m. Notable for exceptional age and/or size. Located in Faè, Longarone, Belluno, Italy.",
  },
  {
    name: "Roverella di Marcetelli",
    species: "Roverella (Quercus pubescens)",
    lat: 42.2182,
    lng: 13.0531,
    height: 22.5,
    circumference: 6.0,
    description:
      "Quercus pubescens. Trunk circumference: 6.0m. Height: 22.5m. Notable for exceptional age and/or size. Located in Chiesa di Santa Maria, Marcetelli, Rieti, Italy.",
  },
  {
    name: "Cedro del Libano di Como #2",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 45.8228,
    lng: 9.0672,
    height: 36.0,
    circumference: 6.0,
    description:
      "Cedrus libani. Trunk circumference: 6.0m. Height: 36.0m. Notable for exceptional age and/or size. Located in Villa del Grumello - Via per Cernobbio, 11, Como, Como, Italy.",
  },
  {
    name: "Cedro dell\'Atlante di Barasso",
    species: "Cedro dell\'Atlante (Cedrus atlantica)",
    lat: 45.8402,
    lng: 8.7582,
    height: 26.0,
    circumference: 6.0,
    description:
      "Cedrus atlantica. Trunk circumference: 6.0m. Height: 26.0m. Notable for exceptional age and/or size. Located in Via Roma, 26, Barasso, Varese, Italy.",
  },
  {
    name: "Roverella di Ascoli Piceno",
    species: "Roverella (Quercus pubescens)",
    lat: 42.894,
    lng: 13.554,
    height: 26.5,
    circumference: 6.0,
    description:
      "Quercus pubescens. Trunk circumference: 6.0m. Height: 26.5m. Notable for exceptional age and/or size. Located in Polesio, Ascoli Piceno, Ascoli Piceno, Italy.",
  },
  {
    name: "Roverella di Illorai #4",
    species: "Roverella (Quercus pubescens)",
    lat: 40.389,
    lng: 8.9313,
    height: 25.0,
    circumference: 5.9,
    description:
      "Quercus pubescens. Trunk circumference: 5.9m. Height: 25.0m. Notable for exceptional age and/or size. Located in Bilinzanas, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Olivo di Cicciano",
    species: "Olivo (Olea europaea)",
    lat: 40.9694,
    lng: 14.5375,
    height: 15.0,
    circumference: 5.9,
    description:
      "Olea europaea. Trunk circumference: 5.9m. Height: 15.0m. Notable for exceptional age and/or size. Located in Via Sandro Pertini, 58, Cicciano, Napoli, Italy.",
  },
  {
    name: "Cedro del Libano di Cassano Magnago #2",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 45.6738,
    lng: 8.828,
    height: 25.0,
    circumference: 5.9,
    description:
      "Cedrus libani. Trunk circumference: 5.9m. Height: 25.0m. Notable for exceptional age and/or size. Located in Via IV Novembre, 60, Cassano Magnago, Varese, Italy.",
  },
  {
    name: "Ginco di Casalbeltrame",
    species: "Ginco (Ginkgo biloba)",
    lat: 45.4374,
    lng: 8.4669,
    height: 24.0,
    circumference: 5.9,
    description:
      "Ginkgo biloba. Trunk circumference: 5.9m. Height: 24.0m. Notable for exceptional age and/or size. Located in Via Gautieri,1, Casalbeltrame, Novara, Italy.",
  },
  {
    name: "Cipresso del Bhutan di Rivara",
    species: "Cipresso del Bhutan (Cupressus torulosa)",
    lat: 45.333,
    lng: 7.6252,
    height: 20.0,
    circumference: 5.9,
    description:
      "Cupressus torulosa. Trunk circumference: 5.9m. Height: 20.0m. Notable as a botanical rarity. Located in Palazzo comunale - Corso Ogliani,9, Rivara, Torino, Italy.",
  },
  {
    name: "Ontano nero di Seulo",
    species: "Ontano nero (Alnus glutinosa)",
    lat: 39.8952,
    lng: 9.2746,
    height: 15.0,
    circumference: 5.9,
    description:
      "Alnus glutinosa. Trunk circumference: 5.9m. Height: 15.0m. Notable for exceptional age and/or size. Located in Perdedu, Seulo, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Leccio di Villagrande Strisaili #4",
    species: "Leccio (Quercus ilex)",
    lat: 39.9884,
    lng: 9.4524,
    height: 25.0,
    circumference: 5.9,
    description:
      "Quercus ilex. Trunk circumference: 5.9m. Height: 25.0m. Notable for exceptional age and/or size. Located in Pirasola, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Tergu",
    species: "Leccio (Quercus ilex)",
    lat: 40.864,
    lng: 8.6932,
    height: 11.0,
    circumference: 5.9,
    description:
      "Quercus ilex. Trunk circumference: 5.9m. Height: 11.0m. Notable for exceptional age and/or size. Located in Ciricu, Tergu, Sassari (Sassari), Italy.",
  },
  {
    name: "Leccio di Seui #3",
    species: "Leccio (Quercus ilex)",
    lat: 39.8856,
    lng: 9.3263,
    height: 22.0,
    circumference: 5.9,
    description:
      "Quercus ilex. Trunk circumference: 5.9m. Height: 22.0m. Notable for exceptional age and/or size. Located in Trattalas, Seui, Sud Sardegna (Ogliastra), Italy.",
  },
  {
    name: "Albero del Drago di Palermo #2",
    species: "Albero del Drago (Dracaena draco)",
    lat: 38.1242,
    lng: 13.3419,
    height: 12.0,
    circumference: 5.9,
    description:
      "Dracaena draco. Trunk circumference: 5.9m. Height: 12.0m. Notable for exceptional age and/or size. Located in Villa Malfitano Whitaker, Palermo, Palermo, Italy.",
  },
  {
    name: "Castagno di Castel Ivano (ex Strigno)",
    species: "Castagno (Castanea sativa)",
    lat: 46.0762,
    lng: 11.5335,
    height: 20.0,
    circumference: 5.9,
    description:
      "Castanea sativa. Trunk circumference: 5.9m. Height: 20.0m. Notable for exceptional age and/or size. Located in Campazzo, Castel Ivano (ex Strigno), Trento, Italy.",
  },
  {
    name: "Castagno di Acquasanta Terme #2",
    species: "Castagno (Castanea sativa)",
    lat: 42.7336,
    lng: 13.4186,
    height: 15.0,
    circumference: 5.9,
    description:
      "Castanea sativa. Trunk circumference: 5.9m. Height: 15.0m. Notable for exceptional age and/or size. Located in Pozza - Lu Pià, Acquasanta Terme, Ascoli Piceno, Italy.",
  },
  {
    name: "Roverella di Celenza Sul Trigno",
    species: "Roverella (Quercus pubescens)",
    lat: 41.8914,
    lng: 14.5958,
    height: 15.0,
    circumference: 5.8,
    description:
      "Quercus pubescens. Trunk circumference: 5.8m. Height: 15.0m. Notable for exceptional age and/or size. Located in Vallone vecchio, Celenza Sul Trigno, Chieti, Italy.",
  },
  {
    name: "Castagno di Bortigiadas",
    species: "Castagno (Castanea sativa)",
    lat: 40.8953,
    lng: 9.0493,
    height: 19.0,
    circumference: 5.8,
    description:
      "Castanea sativa. Trunk circumference: 5.8m. Height: 19.0m. Notable for exceptional age and/or size. Located in Filigheddu Comunali, Bortigiadas, Sassari (Olbia Tempio), Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Lovere",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.8194,
    lng: 10.079,
    height: 25.0,
    circumference: 5.8,
    description:
      "Cedrus deodara. Trunk circumference: 5.8m. Height: 25.0m. Notable for exceptional age and/or size. Located in Villa Milesi, Lovere, Bergamo, Italy.",
  },
  {
    name: "Faggio di Monte Sant\'Angelo",
    species: "Faggio (Fagus sylvatica)",
    lat: 41.8206,
    lng: 15.9992,
    height: 21.0,
    circumference: 5.8,
    description:
      "Fagus sylvatica. Trunk circumference: 5.8m. Height: 21.0m. Notable for exceptional age and/or size. Located in Foresta Umbra - I Baracconi, Monte Sant\'Angelo, Foggia, Italy.",
  },
  {
    name: "Tasso di Castel del Monte",
    species: "Tasso (Taxus baccata)",
    lat: 42.3922,
    lng: 13.7706,
    height: 7.0,
    circumference: 5.8,
    description:
      "Taxus baccata. Trunk circumference: 5.8m. Height: 7.0m. Notable for exceptional age and/or size. Located in Codorama, Castel del Monte, L\'Aquila, Italy.",
  },
  {
    name: "Roverella di Pietragalla #2",
    species: "Roverella (Quercus pubescens)",
    lat: 40.7548,
    lng: 15.8421,
    height: 18.0,
    circumference: 5.8,
    description:
      "Quercus pubescens. Trunk circumference: 5.8m. Height: 18.0m. Notable for exceptional age and/or size. Located in Vallone Canneto, Pietragalla, Potenza, Italy.",
  },
  {
    name: "Tiglio nostrale di Magrè",
    species: "Tiglio nostrale (Tilia platyphyllos)",
    lat: 46.2724,
    lng: 11.1816,
    height: 23.5,
    circumference: 5.8,
    description:
      "Tilia platyphyllos. Trunk circumference: 5.8m. Height: 23.5m. Notable for exceptional age and/or size. Located in Favogna di Sotto, Magrè, Bolzano, Italy.",
  },
  {
    name: "Pino laricio di Longobucco",
    species: "Pino laricio (Pinus nigra)",
    lat: 39.3867,
    lng: 16.6272,
    height: 21.0,
    circumference: 5.8,
    description:
      "Pinus nigra. Trunk circumference: 5.8m. Height: 21.0m. Notable for exceptional age and/or size. Located in Santa Barbara, Longobucco, Cosenza, Italy.",
  },
  {
    name: "Farnia di Varmo",
    species: "Farnia (Quercus robur)",
    lat: 45.8886,
    lng: 12.9886,
    height: 29.0,
    circumference: 5.8,
    description:
      "Quercus robur. Trunk circumference: 5.8m. Height: 29.0m. Notable for exceptional age and/or size. Located in Villa Canciani, Varmo, Udine, Italy.",
  },
  {
    name: "Castagno di Amatrice",
    species: "Castagno (Castanea sativa)",
    lat: 42.6251,
    lng: 13.3287,
    height: 20.0,
    circumference: 5.8,
    description:
      "Castanea sativa. Trunk circumference: 5.8m. Height: 20.0m. Notable for exceptional age and/or size. Located in Ferrazza, Amatrice, Rieti, Italy.",
  },
  {
    name: "Leccio di Calice Ligure",
    species: "Leccio (Quercus ilex)",
    lat: 44.2206,
    lng: 8.3022,
    height: 22.0,
    circumference: 5.8,
    description:
      "Quercus ilex. Trunk circumference: 5.8m. Height: 22.0m. Notable for exceptional age and/or size. Located in Carbuta, Calice Ligure, Savona, Italy.",
  },
  {
    name: "Platano comune di Vaprio d\'Adda",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.5875,
    lng: 9.5333,
    height: 38.0,
    circumference: 5.8,
    description:
      "Platanus acerifolia. Trunk circumference: 5.8m. Height: 38.0m. Notable for exceptional age and/or size. Located in Via Alzaia Nord pressi Villa Castelbarco, Vaprio d\'Adda, Milano, Italy.",
  },
  {
    name: "Roverella di Campobasso",
    species: "Roverella (Quercus pubescens)",
    lat: 41.5429,
    lng: 14.6868,
    height: 20.5,
    circumference: 5.8,
    description:
      "Quercus pubescens. Trunk circumference: 5.8m. Height: 20.5m. Notable for exceptional age and/or size. Located in Contrada Fonte Coda, Campobasso, Campobasso, Italy.",
  },
  {
    name: "Leccio di Gairo #2",
    species: "Leccio (Quercus ilex)",
    lat: 39.9134,
    lng: 9.4191,
    height: 14.0,
    circumference: 5.8,
    description:
      "Quercus ilex. Trunk circumference: 5.8m. Height: 14.0m. Notable for exceptional age and/or size. Located in Su Sammuccu, Gairo, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Villagrande Strisaili #5",
    species: "Leccio (Quercus ilex)",
    lat: 39.9961,
    lng: 9.4154,
    height: 14.5,
    circumference: 5.8,
    description:
      "Quercus ilex. Trunk circumference: 5.8m. Height: 14.5m. Notable for exceptional age and/or size. Located in Porcu Abba, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Seneghe",
    species: "Leccio (Quercus ilex)",
    lat: 40.1146,
    lng: 8.5772,
    height: 13.0,
    circumference: 5.8,
    description:
      "Quercus ilex. Trunk circumference: 5.8m. Height: 13.0m. Notable for exceptional age and/or size. Located in Birdambulis, Seneghe, Oristano (Oristano), Italy.",
  },
  {
    name: "Cedro del Libano di Ferrara",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 44.8424,
    lng: 11.6233,
    height: 23.0,
    circumference: 5.8,
    description:
      "Cedrus libani. Trunk circumference: 5.8m. Height: 23.0m. Notable for exceptional age and/or size. Located in Parco Massari - Corso Porta Mare, Ferrara, Ferrara, Italy.",
  },
  {
    name: "Leccio di Villagrande Strisaili #6",
    species: "Leccio (Quercus ilex)",
    lat: 39.9933,
    lng: 9.4472,
    height: 19.0,
    circumference: 5.8,
    description:
      "Quercus ilex. Trunk circumference: 5.8m. Height: 19.0m. Notable for exceptional age and/or size. Located in Luli, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Pioppo canescente di Albidona",
    species: "Pioppo canescente (Populus canescens)",
    lat: 39.9034,
    lng: 16.4839,
    height: 21.5,
    circumference: 5.8,
    description:
      "Populus canescens. Trunk circumference: 5.8m. Height: 21.5m. Notable for exceptional age and/or size. Located in Fontana Lungro, Albidona, Cosenza, Italy.",
  },
  {
    name: "Olivo di Portocannone #2",
    species: "Olivo (Olea europaea)",
    lat: 41.6766,
    lng: 14.707,
    height: 7.5,
    circumference: 5.8,
    description:
      "Olea europaea. Trunk circumference: 5.8m. Height: 7.5m. Notable for exceptional age and/or size. Located in Becciata - Zona Artigianale, Portocannone, Campobasso, Italy.",
  },
  {
    name: "Farnia di Biella",
    species: "Farnia (Quercus robur)",
    lat: 45.5761,
    lng: 8.06,
    height: 25.0,
    circumference: 5.8,
    description:
      "Quercus robur. Trunk circumference: 5.8m. Height: 25.0m. Notable for exceptional age and/or size. Located in Chiavazza, Biella, Biella, Italy.",
  },
  {
    name: "Liriodendro di Campiglione Fenile",
    species: "Liriodendro (Liriodendron tulipifera)",
    lat: 44.8004,
    lng: 7.324,
    height: 40.0,
    circumference: 5.8,
    description:
      "Liriodendron tulipifera. Trunk circumference: 5.8m. Height: 40.0m. Notable for exceptional age and/or size. Located in Piazza San Germano, 9, Campiglione Fenile, Torino, Italy.",
  },
  {
    name: "Noce del Caucaso di Campiglione Fenile",
    species: "Noce del Caucaso (Pterocarya fraxinifolia)",
    lat: 44.8024,
    lng: 7.3291,
    height: 30.0,
    circumference: 5.8,
    description:
      "Pterocarya fraxinifolia. Trunk circumference: 5.8m. Height: 30.0m. Notable for exceptional age and/or size. Located in Concentrico, Campiglione Fenile, Torino, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Talmassons",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.9217,
    lng: 13.1389,
    height: 28.0,
    circumference: 5.7,
    description:
      "Cedrus deodara. Trunk circumference: 5.7m. Height: 28.0m. Notable for exceptional age and/or size. Located in Villa Mangilli, Talmassons, Udine, Italy.",
  },
  {
    name: "Castagno di Tirolo",
    species: "Castagno (Castanea sativa)",
    lat: 46.6963,
    lng: 11.1546,
    height: 23.0,
    circumference: 5.7,
    description:
      "Castanea sativa. Trunk circumference: 5.7m. Height: 23.0m. Notable for exceptional age and/or size. Located in Maso Bamer - Via Asiago, Tirolo, Bolzano, Italy.",
  },
  {
    name: "Larice di Valgrisenche",
    species: "Larice (Larix decidua)",
    lat: 45.5881,
    lng: 7.0419,
    height: 35.0,
    circumference: 5.7,
    description:
      "Larix decidua. Trunk circumference: 5.7m. Height: 35.0m. Notable for exceptional age and/or size. Located in Bosco di protezione di Arolla (particella economica n. 23), Valgrisenche, Aosta, Italy.",
  },
  {
    name: "Faggio di Bosco Chiesanuova",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.6692,
    lng: 11.0453,
    height: 24.5,
    circumference: 5.7,
    description:
      "Fagus sylvatica. Trunk circumference: 5.7m. Height: 24.5m. Notable for exceptional age and/or size. Located in Malga Broletto, Bosco Chiesanuova, Verona, Italy.",
  },
  {
    name: "Pino loricato di Terranova di Pollino",
    species: "Pino loricato (Pinus leucodermis)",
    lat: 39.9282,
    lng: 16.2117,
    height: 10.0,
    circumference: 5.7,
    description:
      "Pinus leucodermis. Trunk circumference: 5.7m. Height: 10.0m. Notable for exceptional age and/or size. Located in Serra Crispo - Grande Porta, Terranova di Pollino, Potenza, Italy.",
  },
  {
    name: "Eucalitto rostrato di Reggio Calabria",
    species: "Eucalitto rostrato (Eucalyptus camaldulensis)",
    lat: 38.1634,
    lng: 15.8077,
    height: 34.0,
    circumference: 5.7,
    description:
      "Eucalyptus camaldulensis. Trunk circumference: 5.7m. Height: 34.0m. Notable for exceptional age and/or size. Located in Due Fiumare, Reggio Calabria, Reggio Calabria, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di San Giorgio Piacentino",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 44.8783,
    lng: 9.7317,
    height: 18.0,
    circumference: 5.7,
    description:
      "Cedrus deodara. Trunk circumference: 5.7m. Height: 18.0m. Notable for exceptional age and/or size. Located in Villa Rocca di Corneliano - Ronco, San Giorgio Piacentino, Piacenza, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Udine #2",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 46.0711,
    lng: 13.2295,
    height: 31.0,
    circumference: 5.7,
    description:
      "Cedrus deodara. Trunk circumference: 5.7m. Height: 31.0m. Notable for exceptional age and/or size. Located in Piazzale Diacono, Udine, Udine, Italy.",
  },
  {
    name: "Sequoia sempreverde di Altare",
    species: "Sequoia sempreverde (Sequoia sempervirens)",
    lat: 44.3292,
    lng: 8.3352,
    height: 38.0,
    circumference: 5.7,
    description:
      "Sequoia sempervirens. Trunk circumference: 5.7m. Height: 38.0m. Notable for exceptional age and/or size. Located in Li Piani, Altare, Savona, Italy.",
  },
  {
    name: "Platano comune di Casirate d\'Adda",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.4884,
    lng: 9.5684,
    height: 24.02,
    circumference: 5.7,
    description:
      "Platanus acerifolia. Trunk circumference: 5.7m. Height: 24.02m. Notable for exceptional age and/or size. Located in Via Cimitero, Casirate d\'Adda, Bergamo, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Toscolano Maderno",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.6425,
    lng: 10.6122,
    height: 34.0,
    circumference: 5.7,
    description:
      "Cedrus deodara. Trunk circumference: 5.7m. Height: 34.0m. Notable for exceptional age and/or size. Located in Parco Bernini - Via Trento, Toscolano Maderno, Brescia, Italy.",
  },
  {
    name: "Frassino maggiore di Moncenisio",
    species: "Frassino maggiore (Fraxinus excelsior)",
    lat: 45.2053,
    lng: 6.9823,
    height: 11.0,
    circumference: 5.7,
    description:
      "Fraxinus excelsior. Trunk circumference: 5.7m. Height: 11.0m. Notable for exceptional age and/or size. Located in Piazza Parrocchiale, Moncenisio, Torino, Italy.",
  },
  {
    name: "Pino d\'Aleppo di Bari",
    species: "Pino d\'Aleppo (Pinus halepensis)",
    lat: 41.0986,
    lng: 16.8713,
    height: 17.0,
    circumference: 5.7,
    description:
      "Pinus halepensis. Trunk circumference: 5.7m. Height: 17.0m. Notable for exceptional age and/or size. Located in Corso Alcide De Gasperi angolo Via Ugo La Malfa, Bari, Bari, Italy.",
  },
  {
    name: "Leccio di Seulo #4",
    species: "Leccio (Quercus ilex)",
    lat: 39.8967,
    lng: 9.2321,
    height: 25.0,
    circumference: 5.7,
    description:
      "Quercus ilex. Trunk circumference: 5.7m. Height: 25.0m. Notable for exceptional age and/or size. Located in Sedda e Laccu, Seulo, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Ontano nero di Seui",
    species: "Ontano nero (Alnus glutinosa)",
    lat: 39.8839,
    lng: 9.3205,
    height: 12.0,
    circumference: 5.7,
    description:
      "Alnus glutinosa. Trunk circumference: 5.7m. Height: 12.0m. Notable for exceptional age and/or size. Located in Trattalas, Seui, Sud Sardegna (Ogliastra), Italy.",
  },
  {
    name: "Roverella di Arezzo",
    species: "Roverella (Quercus pubescens)",
    lat: 43.4969,
    lng: 11.8625,
    height: 24.0,
    circumference: 5.7,
    description:
      "Quercus pubescens. Trunk circumference: 5.7m. Height: 24.0m. Notable for exceptional age and/or size. Located in Casa Fredda, Arezzo, Arezzo, Italy.",
  },
  {
    name: "Castagno di Montemurlo",
    species: "Castagno (Castanea sativa)",
    lat: 43.9568,
    lng: 11.0726,
    height: 7.0,
    circumference: 5.7,
    description:
      "Castanea sativa. Trunk circumference: 5.7m. Height: 7.0m. Notable for exceptional age and/or size. Located in Fattoria di Javello - Castagnetino, Montemurlo, Prato, Italy.",
  },
  {
    name: "Frassino maggiore di Gressoney-Saint-Jean",
    species: "Frassino maggiore (Fraxinus excelsior)",
    lat: 45.74,
    lng: 7.8519,
    height: 23.0,
    circumference: 5.7,
    description:
      "Fraxinus excelsior. Trunk circumference: 5.7m. Height: 23.0m. Notable for exceptional age and/or size. Located in Pont-Sec, Gressoney-Saint-Jean, Aosta, Italy.",
  },
  {
    name: "Farnia di Meduna di Livenza",
    species: "Farnia (Quercus robur)",
    lat: 45.7975,
    lng: 12.6503,
    height: 26.0,
    circumference: 5.7,
    description:
      "Quercus robur. Trunk circumference: 5.7m. Height: 26.0m. Notable for exceptional age and/or size. Located in Villa Wiel - Via dei Wiel, Meduna di Livenza, Treviso, Italy.",
  },
  {
    name: "Olivastro di Baunei #2",
    species: "Olivastro (Olea europaea)",
    lat: 40.0904,
    lng: 9.668,
    height: 17.0,
    circumference: 5.7,
    description:
      "Olea europaea. Trunk circumference: 5.7m. Height: 17.0m. Notable for exceptional age and/or size. Located in San Pietro – Golgo, Baunei, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Castagno di Fabrizia",
    species: "Castagno (Castanea sativa)",
    lat: 38.4745,
    lng: 16.3306,
    height: 26.0,
    circumference: 5.7,
    description:
      "Castanea sativa. Trunk circumference: 5.7m. Height: 26.0m. Notable for exceptional age and/or size. Located in Sierru, Fabrizia, Vibo Valentia, Italy.",
  },
  {
    name: "Platano comune di Motta Visconti #2",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.2881,
    lng: 8.9942,
    height: 45.0,
    circumference: 5.7,
    description:
      "Platanus acerifolia. Trunk circumference: 5.7m. Height: 45.0m. Notable for exceptional age and/or size. Located in Via Soriani, 31, Motta Visconti, Milano, Italy.",
  },
  {
    name: "Leccio di Palazzolo Acreide",
    species: "Leccio (Quercus ilex)",
    lat: 37.0577,
    lng: 14.9104,
    height: 24.0,
    circumference: 5.7,
    description:
      "Quercus ilex. Trunk circumference: 5.7m. Height: 24.0m. Notable for exceptional age and/or size. Located in Villa comunale, Palazzolo Acreide, Siracusa, Italy.",
  },
  {
    name: "Platano comune di Bolzano",
    species: "Platano comune (Platanus acerifolia)",
    lat: 46.4967,
    lng: 11.3577,
    height: 35.5,
    circumference: 5.6,
    description:
      "Platanus acerifolia. Trunk circumference: 5.6m. Height: 35.5m. Notable for exceptional age and/or size. Located in Piazzale della Stazione, Bolzano, Bolzano, Italy.",
  },
  {
    name: "Roverella di Pescopagano",
    species: "Roverella (Quercus pubescens)",
    lat: 40.8461,
    lng: 15.4289,
    height: 18.0,
    circumference: 5.6,
    description:
      "Quercus pubescens. Trunk circumference: 5.6m. Height: 18.0m. Notable for exceptional age and/or size. Located in Valle del Mulino, Pescopagano, Potenza, Italy.",
  },
  {
    name: "Larice di San Genesio Atesino",
    species: "Larice (Larix decidua)",
    lat: 46.5576,
    lng: 11.2947,
    height: 24.5,
    circumference: 5.6,
    description:
      "Larix decidua. Trunk circumference: 5.6m. Height: 24.5m. Notable for exceptional age and/or size. Located in Montoppio, San Genesio Atesino, Bolzano, Italy.",
  },
  {
    name: "Farnia di Castrovillari",
    species: "Farnia (Quercus robur)",
    lat: 39.8167,
    lng: 16.2111,
    height: 16.5,
    circumference: 5.6,
    description:
      "Quercus robur. Trunk circumference: 5.6m. Height: 16.5m. Notable for exceptional age and/or size. Located in Via Pasquale Laghi, 7, Castrovillari, Cosenza, Italy.",
  },
  {
    name: "Rovere di Rogliano",
    species: "Rovere (Quercus petraea)",
    lat: 39.1882,
    lng: 16.4095,
    height: 24.5,
    circumference: 5.6,
    description:
      "Quercus petraea. Trunk circumference: 5.6m. Height: 24.5m. Notable for exceptional age and/or size. Located in Fravica, Rogliano, Cosenza, Italy.",
  },
  {
    name: "Faggio di Reggio Calabria",
    species: "Faggio (Fagus sylvatica)",
    lat: 38.1516,
    lng: 15.8318,
    height: 20.0,
    circumference: 5.6,
    description:
      "Fagus sylvatica. Trunk circumference: 5.6m. Height: 20.0m. Notable for exceptional age and/or size. Located in Tre Aie, Reggio Calabria, Reggio Calabria, Italy.",
  },
  {
    name: "Platano orientale di Cava de\' Tirreni",
    species: "Platano orientale (Platanus orientalis)",
    lat: 40.6847,
    lng: 14.7049,
    height: 8.0,
    circumference: 5.6,
    description:
      "Platanus orientalis. Trunk circumference: 5.6m. Height: 8.0m. Notable for exceptional age and/or size. Located in Villa Comunale - Club Universitario, Cava de\' Tirreni, Salerno, Italy.",
  },
  {
    name: "Pioppo nero di Bagnacavallo",
    species: "Pioppo nero (Populus nigra)",
    lat: 44.4282,
    lng: 11.9726,
    height: 27.0,
    circumference: 5.6,
    description:
      "Populus nigra. Trunk circumference: 5.6m. Height: 27.0m. Notable for exceptional age and/or size. Located in Podere Pantaleone - Vicolo Pantaleone, 1, Bagnacavallo, Ravenna, Italy.",
  },
  {
    name: "Castagno di San Leonardo",
    species: "Castagno (Castanea sativa)",
    lat: 46.1472,
    lng: 13.5322,
    height: 24.0,
    circumference: 5.6,
    description:
      "Castanea sativa. Trunk circumference: 5.6m. Height: 24.0m. Notable for exceptional age and/or size. Located in Trivio, San Leonardo, Udine, Italy.",
  },
  {
    name: "Cerro-sughera di Varese Ligure",
    species: "Cerro-sughera (Quercus crenata)",
    lat: 44.4171,
    lng: 9.5359,
    height: 16.0,
    circumference: 5.6,
    description:
      "Quercus crenata. Trunk circumference: 5.6m. Height: 16.0m. Notable for exceptional age and/or size. Located in Casareggio, Varese Ligure, La Spezia, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Como",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.8226,
    lng: 9.0782,
    height: 25.0,
    circumference: 5.6,
    description:
      "Cedrus deodara. Trunk circumference: 5.6m. Height: 25.0m. Notable for exceptional age and/or size. Located in Villa Geno - Viale Geno, 12, Como, Como, Italy.",
  },
  {
    name: "Ippocastano di Como",
    species: "Ippocastano (Aesculus hippocastanum)",
    lat: 45.8028,
    lng: 9.0914,
    height: 16.0,
    circumference: 5.6,
    description:
      "Aesculus hippocastanum. Trunk circumference: 5.6m. Height: 16.0m. Notable for exceptional age and/or size. Located in Borghi - Via Aldo Moro - Parcheggio, Como, Como, Italy.",
  },
  {
    name: "Roverella di Monsampietro Morico",
    species: "Roverella (Quercus pubescens)",
    lat: 43.0771,
    lng: 13.563,
    height: 24.0,
    circumference: 5.6,
    description:
      "Quercus pubescens. Trunk circumference: 5.6m. Height: 24.0m. Notable for exceptional age and/or size. Located in Rivo, Monsampietro Morico, Fermo, Italy.",
  },
  {
    name: "Faggio di Piobbico",
    species: "Faggio (Fagus sylvatica)",
    lat: 43.5618,
    lng: 12.5175,
    height: 12.0,
    circumference: 5.6,
    description:
      "Fagus sylvatica. Trunk circumference: 5.6m. Height: 12.0m. Notable for exceptional age and/or size. Located in Casciaia di Monte Nerone, Piobbico, Pesaro e Urbino, Italy.",
  },
  {
    name: "Leccio di Osini",
    species: "Leccio (Quercus ilex)",
    lat: 39.8208,
    lng: 9.4371,
    height: 10.5,
    circumference: 5.6,
    description:
      "Quercus ilex. Trunk circumference: 5.6m. Height: 10.5m. Notable for exceptional age and/or size. Located in Geducci, Osini, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Olivo di Fluminimaggiore #2",
    species: "Olivo (Olea europaea)",
    lat: 39.4415,
    lng: 8.514,
    height: 8.0,
    circumference: 5.6,
    description:
      "Olea europaea. Trunk circumference: 5.6m. Height: 8.0m. Notable for exceptional age and/or size. Located in Caunsedda, Fluminimaggiore, Sud Sardegna (Carbonia-Iglesias), Italy.",
  },
  {
    name: "Cerro di Milo",
    species: "Cerro (Quercus cerris)",
    lat: 37.7389,
    lng: 15.0861,
    height: 18.0,
    circumference: 5.6,
    description:
      "Quercus cerris. Trunk circumference: 5.6m. Height: 18.0m. Notable for exceptional age and/or size. Located in Monte Fontana, Milo, Catania, Italy.",
  },
  {
    name: "Yucca di Palermo",
    species: "Yucca (Yucca gigantea)",
    lat: 38.1221,
    lng: 13.3419,
    height: 12.0,
    circumference: 5.6,
    description:
      "Yucca gigantea. Trunk circumference: 5.6m. Height: 12.0m. Notable for exceptional age and/or size. Located in Villa Malfitano Whitaker, Palermo, Palermo, Italy.",
  },
  {
    name: "Abete rosso di Levico Terme",
    species: "Abete rosso (Picea abies)",
    lat: 45.9695,
    lng: 11.3673,
    height: 34.0,
    circumference: 5.6,
    description:
      "Picea abies. Trunk circumference: 5.6m. Height: 34.0m. Notable for exceptional age and/or size. Located in Malga Costo di Sopra, Levico Terme, Trento, Italy.",
  },
  {
    name: "Faggio di Bassano del Grappa",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.8031,
    lng: 11.6657,
    height: 17.0,
    circumference: 5.6,
    description:
      "Fagus sylvatica. Trunk circumference: 5.6m. Height: 17.0m. Notable for exceptional age and/or size. Located in Rubbio/Gritti, Bassano del Grappa, Vicenza, Italy.",
  },
  {
    name: "Cedro del Libano di Reggio Emilia",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 44.6606,
    lng: 10.5931,
    height: 29.0,
    circumference: 5.6,
    description:
      "Cedrus libani. Trunk circumference: 5.6m. Height: 29.0m. Notable for exceptional age and/or size. Located in Palazzo Ducale di Rivalta - Via dei Combattenti, Reggio Emilia, Reggio Emilia, Italy.",
  },
  {
    name: "Platano comune di Traversetolo",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.6669,
    lng: 10.3486,
    height: 35.0,
    circumference: 5.5,
    description:
      "Platanus acerifolia. Trunk circumference: 5.5m. Height: 35.0m. Notable for exceptional age and/or size. Located in Museo Magnani Rocca - Via Fondazione Magnani Rocca, 4, Traversetolo, Parma, Italy.",
  },
  {
    name: "Gelso nero di Massalombarda",
    species: "Gelso nero (Morus nigra)",
    lat: 44.4842,
    lng: 11.8186,
    height: 26.0,
    circumference: 5.5,
    description:
      "Morus nigra. Trunk circumference: 5.5m. Height: 26.0m. Notable for exceptional age and/or size. Located in San Patrizio - Via Merlo, 2, Massalombarda, Ravenna, Italy.",
  },
  {
    name: "Roverella di San Buono",
    species: "Roverella (Quercus pubescens)",
    lat: 41.9878,
    lng: 14.5783,
    height: 10.5,
    circumference: 5.5,
    description:
      "Quercus pubescens. Trunk circumference: 5.5m. Height: 10.5m. Notable for exceptional age and/or size. Located in Vallone dei Valloni, San Buono, Chieti, Italy.",
  },
  {
    name: "Platano comune di Roma",
    species: "Platano comune (Platanus acerifolia)",
    lat: 41.9453,
    lng: 12.5334,
    height: 32.0,
    circumference: 5.5,
    description:
      "Platanus acerifolia. Trunk circumference: 5.5m. Height: 32.0m. Notable for exceptional age and/or size. Located in Viale Jonio angolo Via Monte Cassino, Roma, Roma, Italy.",
  },
  {
    name: "Cedro dell\'Atlante di Barasso #2",
    species: "Cedro dell\'Atlante (Cedrus atlantica)",
    lat: 45.8402,
    lng: 8.7579,
    height: 30.0,
    circumference: 5.5,
    description:
      "Cedrus atlantica. Trunk circumference: 5.5m. Height: 30.0m. Notable for exceptional age and/or size. Located in Via Roma, 26, Barasso, Varese, Italy.",
  },
  {
    name: "Cerro di Laurenzana",
    species: "Cerro (Quercus cerris)",
    lat: 40.4594,
    lng: 15.8697,
    height: 19.0,
    circumference: 5.5,
    description:
      "Quercus cerris. Trunk circumference: 5.5m. Height: 19.0m. Notable for exceptional age and/or size. Located in Ponte Pasquini, Laurenzana, Potenza, Italy.",
  },
  {
    name: "Platano comune di Ferrara",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.8093,
    lng: 11.5428,
    height: 24.0,
    circumference: 5.5,
    description:
      "Platanus acerifolia. Trunk circumference: 5.5m. Height: 24.0m. Notable for exceptional age and/or size. Located in Fondo Reno - Via Catena, 63, Ferrara, Ferrara, Italy.",
  },
  {
    name: "Roverella di Civitella Casanova",
    species: "Roverella (Quercus pubescens)",
    lat: 42.3817,
    lng: 13.8964,
    height: 18.0,
    circumference: 5.5,
    description:
      "Quercus pubescens. Trunk circumference: 5.5m. Height: 18.0m. Notable for exceptional age and/or size. Located in Colle Tabernacolo, Civitella Casanova, Pescara, Italy.",
  },
  {
    name: "Olivo di Ferrandina #3",
    species: "Olivo (Olea europaea)",
    lat: 40.4841,
    lng: 16.4833,
    height: 6.5,
    circumference: 5.5,
    description:
      "Olea europaea. Trunk circumference: 5.5m. Height: 6.5m. Notable for exceptional age and/or size. Located in Fosso di Carpatiello, Ferrandina, Matera, Italy.",
  },
  {
    name: "Cerro di Laurenzana #2",
    species: "Cerro (Quercus cerris)",
    lat: 40.4097,
    lng: 15.9572,
    height: 20.5,
    circumference: 5.5,
    description:
      "Quercus cerris. Trunk circumference: 5.5m. Height: 20.5m. Notable for exceptional age and/or size. Located in Abetina di Laurenzana, Laurenzana, Potenza, Italy.",
  },
  {
    name: "Roverella di Pietragalla #3",
    species: "Roverella (Quercus pubescens)",
    lat: 40.7708,
    lng: 15.8622,
    height: 19.0,
    circumference: 5.5,
    description:
      "Quercus pubescens. Trunk circumference: 5.5m. Height: 19.0m. Notable for exceptional age and/or size. Located in Case Cillis, Pietragalla, Potenza, Italy.",
  },
  {
    name: "Faggio di Tizzano Val Parma",
    species: "Faggio (Fagus sylvatica)",
    lat: 44.4792,
    lng: 10.1452,
    height: 31.0,
    circumference: 5.5,
    description:
      "Fagus sylvatica. Trunk circumference: 5.5m. Height: 31.0m. Notable for exceptional age and/or size. Located in Grande Faggio, Tizzano Val Parma, Parma, Italy.",
  },
  {
    name: "Platano orientale di Tarcento",
    species: "Platano orientale (Platanus orientalis)",
    lat: 46.2156,
    lng: 13.2228,
    height: 30.0,
    circumference: 5.5,
    description:
      "Platanus orientalis. Trunk circumference: 5.5m. Height: 30.0m. Notable for exceptional age and/or size. Located in Via Giuseppe Garibaldi, 1, Tarcento, Udine, Italy.",
  },
  {
    name: "Platano occidentale di Como #2",
    species: "Platano occidentale (Platanus occidentalis)",
    lat: 45.8243,
    lng: 9.0791,
    height: 33.0,
    circumference: 5.5,
    description:
      "Platanus occidentalis. Trunk circumference: 5.5m. Height: 33.0m. Notable for exceptional age and/or size. Located in Villa Geno - Viale Geno, 14, Como, Como, Italy.",
  },
  {
    name: "Noce del Caucaso di Milano",
    species: "Noce del Caucaso (Pterocarya fraxinifolia)",
    lat: 45.4739,
    lng: 9.1963,
    height: 20.0,
    circumference: 5.5,
    description:
      "Pterocarya fraxinifolia. Trunk circumference: 5.5m. Height: 20.0m. Notable for exceptional age and/or size. Located in Giardini Montanelli - Corso Venezia, Milano, Milano, Italy.",
  },
  {
    name: "Platano comune di Torino #4",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.0632,
    lng: 7.6895,
    height: 33.5,
    circumference: 5.5,
    description:
      "Platanus acerifolia. Trunk circumference: 5.5m. Height: 33.5m. Notable for exceptional age and/or size. Located in Giardini Cavour - Piazza Cavour, Torino, Torino, Italy.",
  },
  {
    name: "Platano comune di Torino #5",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.0465,
    lng: 7.6835,
    height: 39.5,
    circumference: 5.5,
    description:
      "Platanus acerifolia. Trunk circumference: 5.5m. Height: 39.5m. Notable for exceptional age and/or size. Located in Parco del Valentino -Viale Sclopis, Torino, Torino, Italy.",
  },
  {
    name: "Olmo campestre di Mergozzo",
    species: "Olmo campestre (Ulmus minor)",
    lat: 45.9604,
    lng: 8.4489,
    height: 13.0,
    circumference: 5.5,
    description:
      "Ulmus minor. Trunk circumference: 5.5m. Height: 13.0m. Notable for exceptional age and/or size. Located in Piazza Vittorio Veneto, Mergozzo, Verbano Cusio Osssola, Italy.",
  },
  {
    name: "Larice di Rima San Giuseppe",
    species: "Larice (Larix decidua)",
    lat: 45.8844,
    lng: 8.0003,
    height: 45.0,
    circumference: 5.5,
    description:
      "Larix decidua. Trunk circumference: 5.5m. Height: 45.0m. Notable for exceptional age and/or size. Located in Ingresso paese, Rima San Giuseppe, Vercelli, Italy.",
  },
  {
    name: "Leccio di Seulo #5",
    species: "Leccio (Quercus ilex)",
    lat: 39.8967,
    lng: 9.2321,
    height: 15.0,
    circumference: 5.5,
    description:
      "Quercus ilex. Trunk circumference: 5.5m. Height: 15.0m. Notable for exceptional age and/or size. Located in Sedda e Laccu bis, Seulo, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Olivo di Villanovatulo",
    species: "Olivo (Olea europaea)",
    lat: 39.7682,
    lng: 9.2156,
    height: 9.5,
    circumference: 5.5,
    description:
      "Olea europaea. Trunk circumference: 5.5m. Height: 9.5m. Notable for exceptional age and/or size. Located in Stuppara, Villanovatulo, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Leccio di Gairo #3",
    species: "Leccio (Quercus ilex)",
    lat: 39.8956,
    lng: 9.4653,
    height: 21.0,
    circumference: 5.5,
    description:
      "Quercus ilex. Trunk circumference: 5.5m. Height: 21.0m. Notable for exceptional age and/or size. Located in Genna Perd\'aria, Gairo, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Ulassai #2",
    species: "Leccio (Quercus ilex)",
    lat: 39.8007,
    lng: 9.4264,
    height: 16.0,
    circumference: 5.5,
    description:
      "Quercus ilex. Trunk circumference: 5.5m. Height: 16.0m. Notable for exceptional age and/or size. Located in Su Stainu, Ulassai, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Illorai #2",
    species: "Leccio (Quercus ilex)",
    lat: 40.3958,
    lng: 8.9271,
    height: 19.0,
    circumference: 5.5,
    description:
      "Quercus ilex. Trunk circumference: 5.5m. Height: 19.0m. Notable for exceptional age and/or size. Located in Sa Cariasa - Caddile, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Faggio di Ronchi Valsugana",
    species: "Faggio (Fagus sylvatica)",
    lat: 46.075,
    lng: 11.427,
    height: 14.0,
    circumference: 5.5,
    description:
      "Fagus sylvatica. Trunk circumference: 5.5m. Height: 14.0m. Notable for exceptional age and/or size. Located in Buse dei sassi, Ronchi Valsugana, Trento, Italy.",
  },
  {
    name: "Castagno di Storo",
    species: "Castagno (Castanea sativa)",
    lat: 45.8518,
    lng: 10.5591,
    height: 19.0,
    circumference: 5.5,
    description:
      "Castanea sativa. Trunk circumference: 5.5m. Height: 19.0m. Notable for exceptional age and/or size. Located in Sotto Villo, Storo, Trento, Italy.",
  },
  {
    name: "Faggio di Roana",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.8316,
    lng: 11.3904,
    height: 25.0,
    circumference: 5.5,
    description:
      "Fagus sylvatica. Trunk circumference: 5.5m. Height: 25.0m. Notable for exceptional age and/or size. Located in Forte Corbin, Roana, Vicenza, Italy.",
  },
  {
    name: "Cipresso calvo di Santorso",
    species: "Cipresso calvo (Taxodium disticum)",
    lat: 45.7378,
    lng: 11.3933,
    height: 32.0,
    circumference: 5.5,
    description:
      "Taxodium disticum. Trunk circumference: 5.5m. Height: 32.0m. Notable for exceptional age and/or size. Located in Parco Rossi - Via Santa Maria, Santorso, Vicenza, Italy.",
  },
  {
    name: "Pino cembro di Valfloriana",
    species: "Pino cembro (Pinus cembra)",
    lat: 46.2194,
    lng: 11.3959,
    height: 26.0,
    circumference: 5.5,
    description:
      "Pinus cembra. Trunk circumference: 5.5m. Height: 26.0m. Notable for exceptional age and/or size. Located in Zochi Alti, Valfloriana, Trento, Italy.",
  },
  {
    name: "Cedro dell\'Atlante di Bologna",
    species: "Cedro dell\'Atlante (Cedrus atlantica)",
    lat: 44.4898,
    lng: 11.3143,
    height: 32.0,
    circumference: 5.5,
    description:
      "Cedrus atlantica. Trunk circumference: 5.5m. Height: 32.0m. Notable for exceptional age and/or size. Located in Villa delle Rose - Via Saragozza, 228-230, Bologna, Bologna, Italy.",
  },
  {
    name: "Platano comune di San Giorgio Piacentino",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.945,
    lng: 9.7911,
    height: 20.0,
    circumference: 5.5,
    description:
      "Platanus acerifolia. Trunk circumference: 5.5m. Height: 20.0m. Notable for exceptional age and/or size. Located in Palazzo Marazzini Visconti Terzi -Montanaro, San Giorgio Piacentino, Piacenza, Italy.",
  },
  {
    name: "Farnia di Fiume Veneto",
    species: "Farnia (Quercus robur)",
    lat: 45.9211,
    lng: 12.6743,
    height: 25.0,
    circumference: 5.5,
    description:
      "Quercus robur. Trunk circumference: 5.5m. Height: 25.0m. Notable for exceptional age and/or size. Located in Guarda di Sotto, Fiume Veneto, Pordenone, Italy.",
  },
  {
    name: "Abete rosso di Tarvisio",
    species: "Abete rosso (Picea abies)",
    lat: 46.4755,
    lng: 13.5357,
    height: 32.0,
    circumference: 5.5,
    description:
      "Picea abies. Trunk circumference: 5.5m. Height: 32.0m. Notable for exceptional age and/or size. Located in Malga Lussari - Monte Lussari, Tarvisio, Udine, Italy.",
  },
  {
    name: "Roverella di Trivento #2",
    species: "Roverella (Quercus pubescens)",
    lat: 41.7917,
    lng: 14.5805,
    height: 19.5,
    circumference: 5.5,
    description:
      "Quercus pubescens. Trunk circumference: 5.5m. Height: 19.5m. Notable for exceptional age and/or size. Located in Uomo morto - Cacchieto, Trivento, Campobasso, Italy.",
  },
  {
    name: "Cedro del Libano di Torre Pellice",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 44.8217,
    lng: 7.2268,
    height: 25.0,
    circumference: 5.5,
    description:
      "Cedrus libani. Trunk circumference: 5.5m. Height: 25.0m. Notable for exceptional age and/or size. Located in Scuola Mauriziana, Torre Pellice, Torino, Italy.",
  },
  {
    name: "Tiglio selvatico di Villa Lagarina",
    species: "Tiglio selvatico (Tilia cordata)",
    lat: 45.9495,
    lng: 11.0311,
    height: 30.0,
    circumference: 5.4,
    description:
      "Tilia cordata. Trunk circumference: 5.4m. Height: 30.0m. Notable for exceptional age and/or size. Located in Prà dell\'Albi, Villa Lagarina, Trento, Italy.",
  },
  {
    name: "Tiglio comune di Forino",
    species: "Tiglio comune (Tilia ×)",
    lat: 40.8666,
    lng: 14.7526,
    height: 32.0,
    circumference: 5.4,
    description:
      "Tilia ×. Trunk circumference: 5.4m. Height: 32.0m. Notable for exceptional age and/or size. Located in Chiesa di San Felicissimo - Petruro, Forino, Avellino, Italy.",
  },
  {
    name: "Roverella di Gallicchio",
    species: "Roverella (Quercus pubescens)",
    lat: 40.3064,
    lng: 16.1541,
    height: 18.0,
    circumference: 5.4,
    description:
      "Quercus pubescens. Trunk circumference: 5.4m. Height: 18.0m. Notable for exceptional age and/or size. Located in Santa Lucia, Gallicchio, Potenza, Italy.",
  },
  {
    name: "Acero opalo di Lagonegro",
    species: "Acero opalo (Acer opalus)",
    lat: 40.1414,
    lng: 15.7736,
    height: 25.0,
    circumference: 5.4,
    description:
      "Acer opalus. Trunk circumference: 5.4m. Height: 25.0m. Notable for exceptional age and/or size. Located in Castagnareto, Lagonegro, Potenza, Italy.",
  },
  {
    name: "Pino d\'Aleppo di Ripacandida",
    species: "Pino d\'Aleppo (Pinus halepensis)",
    lat: 40.9131,
    lng: 15.7305,
    height: 30.0,
    circumference: 5.4,
    description:
      "Pinus halepensis. Trunk circumference: 5.4m. Height: 30.0m. Notable for exceptional age and/or size. Located in Santuario San Donato, Ripacandida, Potenza, Italy.",
  },
  {
    name: "Abete bianco di Mesoraca",
    species: "Abete bianco (Abies alba)",
    lat: 39.1108,
    lng: 16.669,
    height: 33.0,
    circumference: 5.4,
    description:
      "Abies alba. Trunk circumference: 5.4m. Height: 33.0m. Notable for exceptional age and/or size. Located in Timpone Cocumilia - Monte Femminamorta, Mesoraca, Crotone, Italy.",
  },
  {
    name: "Ontano nero di Roghudi",
    species: "Ontano nero (Alnus glutinosa)",
    lat: 38.1211,
    lng: 15.9047,
    height: 20.0,
    circumference: 5.4,
    description:
      "Alnus glutinosa. Trunk circumference: 5.4m. Height: 20.0m. Notable for exceptional age and/or size. Located in Piscopio, Roghudi, Reggio Calabria, Italy.",
  },
  {
    name: "Tuia gigante di Attimis #2",
    species: "Tuia gigante (Thuja plicata)",
    lat: 46.1907,
    lng: 13.3062,
    height: 35.0,
    circumference: 5.4,
    description:
      "Thuja plicata. Trunk circumference: 5.4m. Height: 35.0m. Notable for exceptional age and/or size. Located in Villa d\'Attimis, Attimis, Udine, Italy.",
  },
  {
    name: "Roverella di Roccavivara",
    species: "Roverella (Quercus pubescens)",
    lat: 41.8339,
    lng: 14.6014,
    height: 22.0,
    circumference: 5.4,
    description:
      "Quercus pubescens. Trunk circumference: 5.4m. Height: 22.0m. Notable for exceptional age and/or size. Located in Via Municipio, Roccavivara, Campobasso, Italy.",
  },
  {
    name: "Libocedro di Campiglione Fenile",
    species: "Libocedro (Calocedrus decurrens)",
    lat: 44.8,
    lng: 7.3238,
    height: 36.0,
    circumference: 5.4,
    description:
      "Calocedrus decurrens. Trunk circumference: 5.4m. Height: 36.0m. Notable for exceptional age and/or size. Located in Piazza San Germano, 9, Campiglione Fenile, Torino, Italy.",
  },
  {
    name: "Frassino maggiore di Carcoforo",
    species: "Frassino maggiore (Fraxinus excelsior)",
    lat: 45.9107,
    lng: 8.0493,
    height: 21.0,
    circumference: 5.4,
    description:
      "Fraxinus excelsior. Trunk circumference: 5.4m. Height: 21.0m. Notable for exceptional age and/or size. Located in Sentiero n.122, Carcoforo, Vercelli, Italy.",
  },
  {
    name: "Leccio di Martina Franca",
    species: "Leccio (Quercus ilex)",
    lat: 40.6741,
    lng: 17.302,
    height: 26.0,
    circumference: 5.4,
    description:
      "Quercus ilex. Trunk circumference: 5.4m. Height: 26.0m. Notable for exceptional age and/or size. Located in Masseria Palesi - Strada Minco di Tata, Martina Franca, Taranto, Italy.",
  },
  {
    name: "Roverella di Illorai #5",
    species: "Roverella (Quercus pubescens)",
    lat: 40.3996,
    lng: 8.9449,
    height: 18.5,
    circumference: 5.4,
    description:
      "Quercus pubescens. Trunk circumference: 5.4m. Height: 18.5m. Notable for exceptional age and/or size. Located in Nuraghe Olostru, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Olivastro di Luras #3",
    species: "Olivastro (Olea europaea)",
    lat: 41.0073,
    lng: 9.2552,
    height: 8.0,
    circumference: 5.4,
    description:
      "Olea europaea. Trunk circumference: 5.4m. Height: 8.0m. Notable for exceptional age and/or size. Located in Santu Baltolu, Luras, Sassari (Olbia Tempio), Italy.",
  },
  {
    name: "Tiglio selvatico di Villa Lagarina #2",
    species: "Tiglio selvatico (Tilia cordata)",
    lat: 45.9358,
    lng: 11.0122,
    height: 27.0,
    circumference: 5.4,
    description:
      "Tilia cordata. Trunk circumference: 5.4m. Height: 27.0m. Notable for exceptional age and/or size. Located in Marcoiano, Villa Lagarina, Trento, Italy.",
  },
  {
    name: "Larice di Bionaz",
    species: "Larice (Larix decidua)",
    lat: 45.9373,
    lng: 7.5594,
    height: 23.0,
    circumference: 5.4,
    description:
      "Larix decidua. Trunk circumference: 5.4m. Height: 23.0m. Notable for exceptional age and/or size. Located in Gordzé, Bionaz, Aosta, Italy.",
  },
  {
    name: "Platano comune di Feltre",
    species: "Platano comune (Platanus acerifolia)",
    lat: 46.0204,
    lng: 11.915,
    height: 34.0,
    circumference: 5.4,
    description:
      "Platanus acerifolia. Trunk circumference: 5.4m. Height: 34.0m. Notable for exceptional age and/or size. Located in Via Borgo Ruga, Feltre, Belluno, Italy.",
  },
  {
    name: "Platano comune di Mira",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.435,
    lng: 12.1294,
    height: 40.0,
    circumference: 5.4,
    description:
      "Platanus acerifolia. Trunk circumference: 5.4m. Height: 40.0m. Notable for exceptional age and/or size. Located in Villa Leoni - Via Nazionale, Mira, Venezia, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Affi",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 45.5531,
    lng: 10.7756,
    height: 27.0,
    circumference: 5.4,
    description:
      "Cedrus deodara. Trunk circumference: 5.4m. Height: 27.0m. Notable for exceptional age and/or size. Located in Villa Poggi - Via Elena da Persico, Affi, Verona, Italy.",
  },
  {
    name: "Acero di monte di Alfedena",
    species: "Acero di monte (Acer pseudoplatanus)",
    lat: 41.7111,
    lng: 13.9689,
    height: 25.0,
    circumference: 5.4,
    description:
      "Acer pseudoplatanus. Trunk circumference: 5.4m. Height: 25.0m. Notable for exceptional age and/or size. Located in Valle Porcile, Alfedena, L\'Aquila, Italy.",
  },
  {
    name: "Faggio di Fanano",
    species: "Faggio (Fagus sylvatica)",
    lat: 44.1711,
    lng: 10.8153,
    height: 20.5,
    circumference: 5.4,
    description:
      "Fagus sylvatica. Trunk circumference: 5.4m. Height: 20.5m. Notable for exceptional age and/or size. Located in Lago di Pratignana, Fanano, Modena, Italy.",
  },
  {
    name: "Cipresso comune di Verucchio",
    species: "Cipresso comune (Cupressus sempervirens)",
    lat: 43.9986,
    lng: 12.4336,
    height: 24.0,
    circumference: 5.4,
    description:
      "Cupressus sempervirens. Trunk circumference: 5.4m. Height: 24.0m. Notable for exceptional age and/or size. Located in Convento della Santa Croce - Via Convento, 150, Verucchio, Rimini, Italy.",
  },
  {
    name: "Faggio di Reggio Calabria #2",
    species: "Faggio (Fagus sylvatica)",
    lat: 38.1384,
    lng: 15.8354,
    height: 24.0,
    circumference: 5.4,
    description:
      "Fagus sylvatica. Trunk circumference: 5.4m. Height: 24.0m. Notable for exceptional age and/or size. Located in Gornelle, Reggio Calabria, Reggio Calabria, Italy.",
  },
  {
    name: "Farnia di Bassiano",
    species: "Farnia (Quercus robur)",
    lat: 41.5696,
    lng: 13.0373,
    height: 25.0,
    circumference: 5.4,
    description:
      "Quercus robur. Trunk circumference: 5.4m. Height: 25.0m. Notable for exceptional age and/or size. Located in Fonte della Fota, Bassiano, Latina, Italy.",
  },
  {
    name: "Pioppo nero di Alfedena",
    species: "Pioppo nero (Populus nigra)",
    lat: 41.7346,
    lng: 14.0331,
    height: 30.0,
    circumference: 5.3,
    description:
      "Populus nigra. Trunk circumference: 5.3m. Height: 30.0m. Notable for exceptional age and/or size. Located in Piazza Umberto I, Alfedena, L\'Aquila, Italy.",
  },
  {
    name: "Eucalitto rostrato di Cirò Marina",
    species: "Eucalitto rostrato (Eucalyptus camaldulensis)",
    lat: 39.3578,
    lng: 17.1251,
    height: 22.0,
    circumference: 5.3,
    description:
      "Eucalyptus camaldulensis. Trunk circumference: 5.3m. Height: 22.0m. Notable for exceptional age and/or size. Located in Torrenova, Cirò Marina, Crotone, Italy.",
  },
  {
    name: "Cipresso di Grizzana Morandi",
    species: "Cipresso (Cupressus sempervirens)",
    lat: 44.215,
    lng: 11.0712,
    height: 23.5,
    circumference: 5.3,
    description:
      "Cupressus sempervirens. Trunk circumference: 5.3m. Height: 23.5m. Notable for exceptional age and/or size. Located in Borgo La Scola, Grizzana Morandi, Bologna, Italy.",
  },
  {
    name: "Roverella di Cingoli",
    species: "Roverella (Quercus pubescens)",
    lat: 43.3638,
    lng: 13.303,
    height: 23.0,
    circumference: 5.3,
    description:
      "Quercus pubescens. Trunk circumference: 5.3m. Height: 23.0m. Notable for exceptional age and/or size. Located in Palazzo Castiglioni - Botontano, Cingoli, Macerata, Italy.",
  },
  {
    name: "Roverella di Illorai #6",
    species: "Roverella (Quercus pubescens)",
    lat: 40.3958,
    lng: 8.9285,
    height: 20.0,
    circumference: 5.3,
    description:
      "Quercus pubescens. Trunk circumference: 5.3m. Height: 20.0m. Notable for exceptional age and/or size. Located in Sa Cariasa - Caddile, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Larice di Tarvisio",
    species: "Larice (Larix decidua)",
    lat: 46.4748,
    lng: 13.5352,
    height: 27.0,
    circumference: 5.3,
    description:
      "Larix decidua. Trunk circumference: 5.3m. Height: 27.0m. Notable for exceptional age and/or size. Located in Malga Lussari - Monte Lussari, Tarvisio, Udine, Italy.",
  },
  {
    name: "Roverella di Bomba",
    species: "Roverella (Quercus pubescens)",
    lat: 42.0522,
    lng: 14.3634,
    height: 16.0,
    circumference: 5.3,
    description:
      "Quercus pubescens. Trunk circumference: 5.3m. Height: 16.0m. Notable for exceptional age and/or size. Located in Cementificio, Bomba, Chieti, Italy.",
  },
  {
    name: "Pino laricio di Taverna",
    species: "Pino laricio (Pinus nigra)",
    lat: 39.1028,
    lng: 16.58,
    height: 23.0,
    circumference: 5.3,
    description:
      "Pinus nigra. Trunk circumference: 5.3m. Height: 23.0m. Notable for exceptional age and/or size. Located in Pomo, Taverna, Catanzaro, Italy.",
  },
  {
    name: "Pioppo nero di Condofuri",
    species: "Pioppo nero (Populus nigra)",
    lat: 38.0172,
    lng: 15.8897,
    height: 30.0,
    circumference: 5.3,
    description:
      "Populus nigra. Trunk circumference: 5.3m. Height: 30.0m. Notable for exceptional age and/or size. Located in Gallicianò, Condofuri, Reggio Calabria, Italy.",
  },
  {
    name: "Quercia ibrida di Samo #2",
    species: "Quercia ibrida (Quercus cerris)",
    lat: 38.1167,
    lng: 15.965,
    height: 13.0,
    circumference: 5.3,
    description:
      "Quercus cerris. Trunk circumference: 5.3m. Height: 13.0m. Notable for exceptional age and/or size. Located in Croce di Dio Lodato, Samo, Reggio Calabria, Italy.",
  },
  {
    name: "Cedro del Libano di Modena",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 44.6112,
    lng: 10.8634,
    height: 36.0,
    circumference: 5.3,
    description:
      "Cedrus libani. Trunk circumference: 5.3m. Height: 36.0m. Notable for exceptional age and/or size. Located in Baggiovara - Via Jacopo da Porto Sud, 490, Modena, Modena, Italy.",
  },
  {
    name: "Roverella di Scandiano",
    species: "Roverella (Quercus pubescens)",
    lat: 44.5644,
    lng: 10.6644,
    height: 20.0,
    circumference: 5.3,
    description:
      "Quercus pubescens. Trunk circumference: 5.3m. Height: 20.0m. Notable for exceptional age and/or size. Located in Il Monte - Via Bottegaro, Scandiano, Reggio Emilia, Italy.",
  },
  {
    name: "Cipresso comune di Premariacco",
    species: "Cipresso comune (Cupressus sempervirens)",
    lat: 46.0237,
    lng: 13.429,
    height: 20.5,
    circumference: 5.3,
    description:
      "Cupressus sempervirens. Trunk circumference: 5.3m. Height: 20.5m. Notable for exceptional age and/or size. Located in Villa Valvasone Maniago Perusini - Rocca Bernarda, Premariacco, Udine, Italy.",
  },
  {
    name: "Eucalitto di Rapallo",
    species: "Eucalitto (Eucaliptus globulus)",
    lat: 44.3463,
    lng: 9.2386,
    height: 30.0,
    circumference: 5.3,
    description:
      "Eucaliptus globulus. Trunk circumference: 5.3m. Height: 30.0m. Notable for exceptional age and/or size. Located in Villa Tigullio - Parco Comunale L. Casale, Rapallo, Genova, Italy.",
  },
  {
    name: "Faggio a foglie di asplenio di Calolziocorte",
    species: "Faggio a foglie di asplenio (Fagus sylvatica)",
    lat: 45.8041,
    lng: 9.4313,
    height: 16.0,
    circumference: 5.3,
    description:
      "Fagus sylvatica. Trunk circumference: 5.3m. Height: 16.0m. Notable for exceptional age and/or size. Located in Villa Guagnellini - Via Alessandro Volta, 21, Calolziocorte, Lecco, Italy.",
  },
  {
    name: "Roverella di Macerata Feltria",
    species: "Roverella (Quercus pubescens)",
    lat: 43.8203,
    lng: 12.4763,
    height: 25.0,
    circumference: 5.3,
    description:
      "Quercus pubescens. Trunk circumference: 5.3m. Height: 25.0m. Notable for exceptional age and/or size. Located in La Castellina, Macerata Feltria, Pesaro e Urbino, Italy.",
  },
  {
    name: "Roverella di San Giovanni in Galdo",
    species: "Roverella (Quercus pubescens)",
    lat: 41.5834,
    lng: 14.7349,
    height: 22.0,
    circumference: 5.3,
    description:
      "Quercus pubescens. Trunk circumference: 5.3m. Height: 22.0m. Notable for exceptional age and/or size. Located in Contrada Aia Rufina, San Giovanni in Galdo, Campobasso, Italy.",
  },
  {
    name: "Salice bianco di Fontanile",
    species: "Salice bianco (Salix alba)",
    lat: 44.7581,
    lng: 8.4217,
    height: 17.0,
    circumference: 5.3,
    description:
      "Salix alba. Trunk circumference: 5.3m. Height: 17.0m. Notable for exceptional age and/or size. Located in Cornaleja, Fontanile, Asti, Italy.",
  },
  {
    name: "Acero minore di Arzana",
    species: "Acero minore (Acer monspessolanum)",
    lat: 39.947,
    lng: 9.3137,
    height: 20.0,
    circumference: 5.3,
    description:
      "Acer monspessolanum. Trunk circumference: 5.3m. Height: 20.0m. Notable for exceptional age and/or size. Located in Coile S\'Orroale, Arzana, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Tasso di Bono",
    species: "Tasso (Taxus baccata)",
    lat: 40.4233,
    lng: 8.9953,
    height: 19.0,
    circumference: 5.3,
    description:
      "Taxus baccata. Trunk circumference: 5.3m. Height: 19.0m. Notable for exceptional age and/or size. Located in Sos Nibberos, Bono, Sassari (Sassari), Italy.",
  },
  {
    name: "Roverella di Illorai #7",
    species: "Roverella (Quercus pubescens)",
    lat: 40.4038,
    lng: 8.9429,
    height: 8.5,
    circumference: 5.3,
    description:
      "Quercus pubescens. Trunk circumference: 5.3m. Height: 8.5m. Notable for exceptional age and/or size. Located in Fonte Ladorza, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Pioppo canescente di Seui",
    species: "Pioppo canescente (Populus canescens)",
    lat: 39.8848,
    lng: 9.3443,
    height: 30.0,
    circumference: 5.3,
    description:
      "Populus canescens. Trunk circumference: 5.3m. Height: 30.0m. Notable for exceptional age and/or size. Located in Pauli, Seui, Sud Sardegna (Ogliastra), Italy.",
  },
  {
    name: "Cipresso di Monterey di Città di Castello",
    species: "Cipresso di Monterey (Cupressus macrocarpa)",
    lat: 43.4515,
    lng: 12.2273,
    height: 21.0,
    circumference: 5.3,
    description:
      "Cupressus macrocarpa. Trunk circumference: 5.3m. Height: 21.0m. Notable for exceptional age and/or size. Located in Villa Montesca - Montesca, Città di Castello, Perugia, Italy.",
  },
  {
    name: "Farnia di Ficarolo",
    species: "Farnia (Quercus robur)",
    lat: 44.9523,
    lng: 11.4473,
    height: 28.0,
    circumference: 5.3,
    description:
      "Quercus robur. Trunk circumference: 5.3m. Height: 28.0m. Notable for exceptional age and/or size. Located in Via Roma, Ficarolo, Rovigo, Italy.",
  },
  {
    name: "Pioppo nero di Crevalcore",
    species: "Pioppo nero (Populus nigra)",
    lat: 44.7496,
    lng: 11.1327,
    height: 21.0,
    circumference: 5.3,
    description:
      "Populus nigra. Trunk circumference: 5.3m. Height: 21.0m. Notable for exceptional age and/or size. Located in Ronchi - Via Argini Nord, Crevalcore, Bologna, Italy.",
  },
  {
    name: "Olivastro di Villaputzu",
    species: "Olivastro (Olea europaea)",
    lat: 39.4456,
    lng: 9.6143,
    height: 13.0,
    circumference: 5.3,
    description:
      "Olea europaea. Trunk circumference: 5.3m. Height: 13.0m. Notable for exceptional age and/or size. Located in Murerau - Chiesa San Giovanni, Villaputzu, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Faggio di Nago-Torbole",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.8247,
    lng: 10.8785,
    height: 27.0,
    circumference: 5.3,
    description:
      "Fagus sylvatica. Trunk circumference: 5.3m. Height: 27.0m. Notable for exceptional age and/or size. Located in Selva di Nago, Nago-Torbole, Trento, Italy.",
  },
  {
    name: "Cedro del Libano di Mirano",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 45.495,
    lng: 12.1114,
    height: 27.0,
    circumference: 5.3,
    description:
      "Cedrus libani. Trunk circumference: 5.3m. Height: 27.0m. Notable for exceptional age and/or size. Located in Villa Morosini - Via Luigi Mariutto, 4, Mirano, Venezia, Italy.",
  },
  {
    name: "Platano comune di Trieste",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.654,
    lng: 13.7844,
    height: 31.0,
    circumference: 5.2,
    description:
      "Platanus acerifolia. Trunk circumference: 5.2m. Height: 31.0m. Notable for exceptional age and/or size. Located in Giardini Muzio de Tommasini, Trieste, Trieste, Italy.",
  },
  {
    name: "Faggio di Tarvisio",
    species: "Faggio (Fagus sylvatica)",
    lat: 46.5107,
    lng: 13.5264,
    height: 32.0,
    circumference: 5.2,
    description:
      "Fagus sylvatica. Trunk circumference: 5.2m. Height: 32.0m. Notable for exceptional age and/or size. Located in Camporosso, Tarvisio, Udine, Italy.",
  },
  {
    name: "Sughera di Monte San Biagio",
    species: "Sughera (Quercus suber)",
    lat: 41.3708,
    lng: 13.3225,
    height: 27.0,
    circumference: 5.2,
    description:
      "Quercus suber. Trunk circumference: 5.2m. Height: 27.0m. Notable for exceptional age and/or size. Located in San Vito - Via Dupante, Monte San Biagio, Latina, Italy.",
  },
  {
    name: "Bagolaro di Baunei",
    species: "Bagolaro (Celtis australis)",
    lat: 40.0902,
    lng: 9.668,
    height: 20.0,
    circumference: 5.2,
    description:
      "Celtis australis. Trunk circumference: 5.2m. Height: 20.0m. Notable for exceptional age and/or size. Located in San Pietro – Golgo, Baunei, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Talana",
    species: "Leccio (Quercus ilex)",
    lat: 40.0054,
    lng: 9.4346,
    height: 17.0,
    circumference: 5.2,
    description:
      "Quercus ilex. Trunk circumference: 5.2m. Height: 17.0m. Notable for exceptional age and/or size. Located in Su Fundale, Talana, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Sughera di Usellus",
    species: "Sughera (Quercus suber)",
    lat: 39.8477,
    lng: 8.8282,
    height: 16.0,
    circumference: 5.2,
    description:
      "Quercus suber. Trunk circumference: 5.2m. Height: 16.0m. Notable for exceptional age and/or size. Located in Pitixi, Usellus, Oristano (Oristano), Italy.",
  },
  {
    name: "Faggio di Ala #2",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.7034,
    lng: 10.9818,
    height: 35.0,
    circumference: 5.2,
    description:
      "Fagus sylvatica. Trunk circumference: 5.2m. Height: 35.0m. Notable for exceptional age and/or size. Located in Segheria – Riservetta Maia (La Regina), Ala, Trento, Italy.",
  },
  {
    name: "Faggio di Castel Ivano (ex Ivano-Fracena)",
    species: "Faggio (Fagus sylvatica)",
    lat: 46.0598,
    lng: 11.5602,
    height: 29.5,
    circumference: 5.2,
    description:
      "Fagus sylvatica. Trunk circumference: 5.2m. Height: 29.5m. Notable for exceptional age and/or size. Located in Monte Lefre, Castel Ivano (ex Ivano-Fracena), Trento, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Udine #3",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 46.0643,
    lng: 13.2365,
    height: 30.0,
    circumference: 5.2,
    description:
      "Cedrus deodara. Trunk circumference: 5.2m. Height: 30.0m. Notable for exceptional age and/or size. Located in Giardini del Castello, Udine, Udine, Italy.",
  },
  {
    name: "Roverella di Serra de\' Conti",
    species: "Roverella (Quercus pubescens)",
    lat: 43.5425,
    lng: 13.0231,
    height: 23.0,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 23.0m. Notable for exceptional age and/or size. Located in Osteria di Serra de Conti, Serra de\' Conti, Ancona, Italy.",
  },
  {
    name: "Leccio di Seui #4",
    species: "Leccio (Quercus ilex)",
    lat: 39.8691,
    lng: 9.5158,
    height: 30.0,
    circumference: 5.2,
    description:
      "Quercus ilex. Trunk circumference: 5.2m. Height: 30.0m. Notable for exceptional age and/or size. Located in Rio Ermolinus, Seui, Sud Sardegna (Ogliastra), Italy.",
  },
  {
    name: "Faggio di Villa Lagarina",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.9573,
    lng: 11.0328,
    height: 23.0,
    circumference: 5.2,
    description:
      "Fagus sylvatica. Trunk circumference: 5.2m. Height: 23.0m. Notable for exceptional age and/or size. Located in Bellaria, Villa Lagarina, Trento, Italy.",
  },
  {
    name: "Roverella di Pietrapertosa",
    species: "Roverella (Quercus pubescens)",
    lat: 40.4764,
    lng: 16.0728,
    height: 16.5,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 16.5m. Notable for exceptional age and/or size. Located in Castagna, Pietrapertosa, Potenza, Italy.",
  },
  {
    name: "Roverella di Aquilonia",
    species: "Roverella (Quercus pubescens)",
    lat: 40.9931,
    lng: 15.4711,
    height: 17.0,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 17.0m. Notable for exceptional age and/or size. Located in Badia di San Vito, Aquilonia, Avellino, Italy.",
  },
  {
    name: "Sequoia sempreverde di Bologna",
    species: "Sequoia sempreverde (Sequoia sempervirens)",
    lat: 44.4839,
    lng: 11.3519,
    height: 37.5,
    circumference: 5.2,
    description:
      "Sequoia sempervirens. Trunk circumference: 5.2m. Height: 37.5m. Notable for exceptional age and/or size. Located in Giardini Margherita - Viale Gozzadini, Bologna, Bologna, Italy.",
  },
  {
    name: "Cedro dell\'Himalaya di Bologna",
    species: "Cedro dell\'Himalaya (Cedrus deodara)",
    lat: 44.4809,
    lng: 11.3408,
    height: 29.0,
    circumference: 5.2,
    description:
      "Cedrus deodara. Trunk circumference: 5.2m. Height: 29.0m. Notable for exceptional age and/or size. Located in Istituto Ortopedico Rizzoli - Via Pupilli, 1, Bologna, Bologna, Italy.",
  },
  {
    name: "Platano orientale di Bologna",
    species: "Platano orientale (Platanus orientalis)",
    lat: 44.4937,
    lng: 11.3364,
    height: 36.0,
    circumference: 5.2,
    description:
      "Platanus orientalis. Trunk circumference: 5.2m. Height: 36.0m. Notable for exceptional age and/or size. Located in Palazzo Rusconi - Piazza Malpighi, 16, Bologna, Bologna, Italy.",
  },
  {
    name: "Roverella di Bagno di Romagna",
    species: "Roverella (Quercus pubescens)",
    lat: 43.8937,
    lng: 11.903,
    height: 25.0,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 25.0m. Notable for exceptional age and/or size. Located in Poggio alla Lastra - Poggetto, Bagno di Romagna, Forlì-Cesena, Italy.",
  },
  {
    name: "Pioppo bianco di Faenza",
    species: "Pioppo bianco (Populus alba)",
    lat: 44.3286,
    lng: 12.0231,
    height: 27.0,
    circumference: 5.2,
    description:
      "Populus alba. Trunk circumference: 5.2m. Height: 27.0m. Notable for exceptional age and/or size. Located in Prada - Via Corleto, 174, Faenza, Ravenna, Italy.",
  },
  {
    name: "Platano comune di Trieste #2",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.6539,
    lng: 13.7841,
    height: 28.0,
    circumference: 5.2,
    description:
      "Platanus acerifolia. Trunk circumference: 5.2m. Height: 28.0m. Notable for exceptional age and/or size. Located in Giardini Muzio de Tommasini, Trieste, Trieste, Italy.",
  },
  {
    name: "Castagno di Pulfero #2",
    species: "Castagno (Castanea sativa)",
    lat: 46.1682,
    lng: 13.4643,
    height: 24.0,
    circumference: 5.2,
    description:
      "Castanea sativa. Trunk circumference: 5.2m. Height: 24.0m. Notable for exceptional age and/or size. Located in Coceanzi - Pegliano, Pulfero, Udine, Italy.",
  },
  {
    name: "Platano comune di Cassino",
    species: "Platano comune (Platanus acerifolia)",
    lat: 41.4955,
    lng: 13.8318,
    height: 22.0,
    circumference: 5.2,
    description:
      "Platanus acerifolia. Trunk circumference: 5.2m. Height: 22.0m. Notable for exceptional age and/or size. Located in Largo Molise, Cassino, Frosinone, Italy.",
  },
  {
    name: "Leccio di Patrica",
    species: "Leccio (Quercus ilex)",
    lat: 41.5695,
    lng: 13.2325,
    height: 15.0,
    circumference: 5.2,
    description:
      "Quercus ilex. Trunk circumference: 5.2m. Height: 15.0m. Notable for exceptional age and/or size. Located in Fonte Scocciapane - Fontana Cerasa, Patrica, Frosinone, Italy.",
  },
  {
    name: "Cipresso messicano di Ventimiglia",
    species: "Cipresso messicano (Cupressus lusitanica)",
    lat: 43.7835,
    lng: 7.555,
    height: 17.0,
    circumference: 5.2,
    description:
      "Cupressus lusitanica. Trunk circumference: 5.2m. Height: 17.0m. Notable for exceptional age and/or size. Located in Villa Hanbury - pressi casa padronale, Ventimiglia, Imperia, Italy.",
  },
  {
    name: "Cedro dell\'Atlante di Como",
    species: "Cedro dell\'Atlante (Cedrus atlantica)",
    lat: 45.8145,
    lng: 9.066,
    height: 30.0,
    circumference: 5.2,
    description:
      "Cedrus atlantica. Trunk circumference: 5.2m. Height: 30.0m. Notable for exceptional age and/or size. Located in Istituto Ugo Foscolo - Via Borgovico, 193, Como, Como, Italy.",
  },
  {
    name: "Roverella di Montalto Marche",
    species: "Roverella (Quercus pubescens)",
    lat: 42.9785,
    lng: 13.6488,
    height: 26.0,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 26.0m. Notable for exceptional age and/or size. Located in Cerquatonda, Montalto Marche, Ascoli Piceno, Italy.",
  },
  {
    name: "Roverella di Urbino",
    species: "Roverella (Quercus pubescens)",
    lat: 43.7392,
    lng: 12.7398,
    height: 22.0,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 22.0m. Notable for exceptional age and/or size. Located in Palazzo del Piano, Urbino, Pesaro e Urbino, Italy.",
  },
  {
    name: "Roverella di Trivento #3",
    species: "Roverella (Quercus pubescens)",
    lat: 41.8084,
    lng: 14.6113,
    height: 24.0,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 24.0m. Notable for exceptional age and/or size. Located in Pontoni, Trivento, Campobasso, Italy.",
  },
  {
    name: "Platano comune di Asti",
    species: "Platano comune (Platanus acerifolia)",
    lat: 44.8994,
    lng: 8.1978,
    height: 37.0,
    circumference: 5.2,
    description:
      "Platanus acerifolia. Trunk circumference: 5.2m. Height: 37.0m. Notable for exceptional age and/or size. Located in Palazzo Alfieri - Corso Alfieri, Asti, Asti, Italy.",
  },
  {
    name: "Eucalitto blu di Dolianova",
    species: "Eucalitto blu (Eucalyptus globulus)",
    lat: 39.3555,
    lng: 9.2201,
    height: 36.0,
    circumference: 5.2,
    description:
      "Eucalyptus globulus. Trunk circumference: 5.2m. Height: 36.0m. Notable for exceptional age and/or size. Located in Vivaio F. D. Monte Arrubiu, Dolianova, Città metropolitana Cagliari (Cagliari), Italy.",
  },
  {
    name: "Leccio di Gairo #4",
    species: "Leccio (Quercus ilex)",
    lat: 39.9145,
    lng: 9.4184,
    height: 16.0,
    circumference: 5.2,
    description:
      "Quercus ilex. Trunk circumference: 5.2m. Height: 16.0m. Notable for exceptional age and/or size. Located in Su Sammuccu, Gairo, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Olivastro di Ulassai",
    species: "Olivastro (Olea europaea)",
    lat: 39.7294,
    lng: 9.4248,
    height: 6.5,
    circumference: 5.2,
    description:
      "Olea europaea. Trunk circumference: 5.2m. Height: 6.5m. Notable for exceptional age and/or size. Located in Bruncu Ogliastu, Ulassai, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Villagrande Strisaili #7",
    species: "Leccio (Quercus ilex)",
    lat: 39.9925,
    lng: 9.4502,
    height: 15.0,
    circumference: 5.2,
    description:
      "Quercus ilex. Trunk circumference: 5.2m. Height: 15.0m. Notable for exceptional age and/or size. Located in Sa Omo e s\'Ulimu, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Sughera di Iglesias",
    species: "Sughera (Quercus suber)",
    lat: 39.3412,
    lng: 8.467,
    height: 12.0,
    circumference: 5.2,
    description:
      "Quercus suber. Trunk circumference: 5.2m. Height: 12.0m. Notable for exceptional age and/or size. Located in Genna Mustazzus, Iglesias, Sud Sardegna (Carbonia-Iglesias), Italy.",
  },
  {
    name: "Frassino meridionale di Teulada",
    species: "Frassino meridionale (Fraxinus angustifolia)",
    lat: 38.9481,
    lng: 8.7228,
    height: 22.0,
    circumference: 5.2,
    description:
      "Fraxinus angustifolia. Trunk circumference: 5.2m. Height: 22.0m. Notable for exceptional age and/or size. Located in Tuerra, Teulada, Sud Sardegna (Cagliari), Italy.",
  },
  {
    name: "Leccio di Montevarchi",
    species: "Leccio (Quercus ilex)",
    lat: 43.5197,
    lng: 11.5572,
    height: 20.0,
    circumference: 5.2,
    description:
      "Quercus ilex. Trunk circumference: 5.2m. Height: 20.0m. Notable for exceptional age and/or size. Located in Colle dei Cappuccini, Montevarchi, Arezzo, Italy.",
  },
  {
    name: "Abete rosso di Valdaone",
    species: "Abete rosso (Picea abies)",
    lat: 45.9679,
    lng: 10.5381,
    height: 36.0,
    circumference: 5.2,
    description:
      "Picea abies. Trunk circumference: 5.2m. Height: 36.0m. Notable for exceptional age and/or size. Located in Prà del Vittorio, Valdaone, Trento, Italy.",
  },
  {
    name: "Platano comune di Caprino Veronese",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.6081,
    lng: 10.8152,
    height: 42.0,
    circumference: 5.2,
    description:
      "Platanus acerifolia. Trunk circumference: 5.2m. Height: 42.0m. Notable for exceptional age and/or size. Located in Villa Nichesola Rigo - Platano, Caprino Veronese, Verona, Italy.",
  },
  {
    name: "Platano comune di San Bonifacio",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.397,
    lng: 11.2731,
    height: 18.0,
    circumference: 5.2,
    description:
      "Platanus acerifolia. Trunk circumference: 5.2m. Height: 18.0m. Notable for exceptional age and/or size. Located in Via IV Novembre angolo Via Fratelli Mazzotto, San Bonifacio, Verona, Italy.",
  },
  {
    name: "Frassino maggiore di Roana",
    species: "Frassino maggiore (Fraxinus excelsior)",
    lat: 45.8479,
    lng: 11.4416,
    height: 28.0,
    circumference: 5.2,
    description:
      "Fraxinus excelsior. Trunk circumference: 5.2m. Height: 28.0m. Notable for exceptional age and/or size. Located in Malga Colpi, Roana, Vicenza, Italy.",
  },
  {
    name: "Roverella di Illorai #8",
    species: "Roverella (Quercus pubescens)",
    lat: 40.3943,
    lng: 8.9472,
    height: 9.5,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 9.5m. Notable for exceptional age and/or size. Located in Nuraghe Olostru, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Larice di Caderzone Terme",
    species: "Larice (Larix decidua)",
    lat: 46.138,
    lng: 10.7059,
    height: 21.0,
    circumference: 5.2,
    description:
      "Larix decidua. Trunk circumference: 5.2m. Height: 21.0m. Notable for exceptional age and/or size. Located in Malga Garzonè, Caderzone Terme, Trento, Italy.",
  },
  {
    name: "Tiglio selvatico di Bieno",
    species: "Tiglio selvatico (Tilia cordata)",
    lat: 46.0797,
    lng: 11.5434,
    height: 25.0,
    circumference: 5.2,
    description:
      "Tilia cordata. Trunk circumference: 5.2m. Height: 25.0m. Notable for exceptional age and/or size. Located in Maso Weiss, Bieno, Trento, Italy.",
  },
  {
    name: "Faggio di Borgo Lares (ex Bolbeno)",
    species: "Faggio (Fagus sylvatica)",
    lat: 46.0185,
    lng: 10.72,
    height: 29.0,
    circumference: 5.2,
    description:
      "Fagus sylvatica. Trunk circumference: 5.2m. Height: 29.0m. Notable for exceptional age and/or size. Located in D\'Avre – Doss Borèl, Borgo Lares (ex Bolbeno), Trento, Italy.",
  },
  {
    name: "Tiglio nostrale di Châtillon",
    species: "Tiglio nostrale (Tilia platyphyllos)",
    lat: 45.7505,
    lng: 7.6121,
    height: 27.0,
    circumference: 5.2,
    description:
      "Tilia platyphyllos. Trunk circumference: 5.2m. Height: 27.0m. Notable for exceptional age and/or size. Located in Castello Passerin d\'Entrèves, Châtillon, Aosta, Italy.",
  },
  {
    name: "Abete bianco di Taverna #2",
    species: "Abete bianco (Abies alba)",
    lat: 39.1328,
    lng: 16.6389,
    height: 25.0,
    circumference: 5.2,
    description:
      "Abies alba. Trunk circumference: 5.2m. Height: 25.0m. Notable for exceptional age and/or size. Located in Gariglione, Taverna, Catanzaro, Italy.",
  },
  {
    name: "Roverella di Acquapendente",
    species: "Roverella (Quercus pubescens)",
    lat: 42.7441,
    lng: 11.9283,
    height: 10.0,
    circumference: 5.2,
    description:
      "Quercus pubescens. Trunk circumference: 5.2m. Height: 10.0m. Notable for exceptional age and/or size. Located in Giardino - Strada per il Museo del Fiore, Acquapendente, Viterbo, Italy.",
  },
  {
    name: "Pino di Lambert di Reggello",
    species: "Pino di Lambert (Pinus lambertiana)",
    lat: 43.7318,
    lng: 11.5552,
    height: 40.0,
    circumference: 5.2,
    description:
      "Pinus lambertiana. Trunk circumference: 5.2m. Height: 40.0m. Notable for exceptional age and/or size. Located in Vallombrosa - Arboreto, Reggello, Firenze, Italy.",
  },
  {
    name: "Platano orientale di Capannori",
    species: "Platano orientale (Platanus orientalis)",
    lat: 43.7988,
    lng: 10.5074,
    height: 25.0,
    circumference: 5.2,
    description:
      "Platanus orientalis. Trunk circumference: 5.2m. Height: 25.0m. Notable for exceptional age and/or size. Located in Vorno, Capannori, Lucca, Italy.",
  },
  {
    name: "Leccio di Capannori",
    species: "Leccio (Quercus ilex)",
    lat: 43.9006,
    lng: 10.639,
    height: 18.0,
    circumference: 5.2,
    description:
      "Quercus ilex. Trunk circumference: 5.2m. Height: 18.0m. Notable for exceptional age and/or size. Located in San Gennaro, Capannori, Lucca, Italy.",
  },
  {
    name: "Leccio di Illorai #3",
    species: "Leccio (Quercus ilex)",
    lat: 40.407,
    lng: 8.9285,
    height: 14.0,
    circumference: 5.1,
    description:
      "Quercus ilex. Trunk circumference: 5.1m. Height: 14.0m. Notable for exceptional age and/or size. Located in Nuraghe Muronese, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Roverella di Rocchetta di Vara",
    species: "Roverella (Quercus pubescens)",
    lat: 44.2823,
    lng: 9.7812,
    height: 14.5,
    circumference: 5.1,
    description:
      "Quercus pubescens. Trunk circumference: 5.1m. Height: 14.5m. Notable for exceptional age and/or size. Located in Molino Rotato - Pirolo, Rocchetta di Vara, La Spezia, Italy.",
  },
  {
    name: "Roverella di San Marcello",
    species: "Roverella (Quercus pubescens)",
    lat: 43.5492,
    lng: 13.1744,
    height: 17.0,
    circumference: 5.1,
    description:
      "Quercus pubescens. Trunk circumference: 5.1m. Height: 17.0m. Notable for exceptional age and/or size. Located in Via Acquasanta, San Marcello, Ancona, Italy.",
  },
  {
    name: "Roverella di Illorai #9",
    species: "Roverella (Quercus pubescens)",
    lat: 40.3543,
    lng: 8.9745,
    height: 30.0,
    circumference: 5.1,
    description:
      "Quercus pubescens. Trunk circumference: 5.1m. Height: 30.0m. Notable for exceptional age and/or size. Located in Nuraghe Mannuri, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Abete bianco di San Severino Lucano",
    species: "Abete bianco (Abies alba)",
    lat: 39.9536,
    lng: 16.2011,
    height: 37.0,
    circumference: 5.1,
    description:
      "Abies alba. Trunk circumference: 5.1m. Height: 37.0m. Notable for exceptional age and/or size. Located in Piano di San Francesco, San Severino Lucano, Potenza, Italy.",
  },
  {
    name: "Pino laricio di Longobucco #2",
    species: "Pino laricio (Pinus nigra)",
    lat: 39.4344,
    lng: 16.5997,
    height: 28.0,
    circumference: 5.1,
    description:
      "Pinus nigra. Trunk circumference: 5.1m. Height: 28.0m. Notable for exceptional age and/or size. Located in Maddalena, Longobucco, Cosenza, Italy.",
  },
  {
    name: "Pino laricio di Petilia Policastro",
    species: "Pino laricio (Pinus nigra)",
    lat: 39.1288,
    lng: 16.6741,
    height: 37.5,
    circumference: 5.1,
    description:
      "Pinus nigra. Trunk circumference: 5.1m. Height: 37.5m. Notable for exceptional age and/or size. Located in Macinello, Petilia Policastro, Crotone, Italy.",
  },
  {
    name: "Faggio di Molochio",
    species: "Faggio (Fagus sylvatica)",
    lat: 38.2781,
    lng: 16.05,
    height: 25.0,
    circumference: 5.1,
    description:
      "Fagus sylvatica. Trunk circumference: 5.1m. Height: 25.0m. Notable for exceptional age and/or size. Located in Trepidò, Molochio, Reggio Calabria, Italy.",
  },
  {
    name: "Olmo campestre di San Lorenzo",
    species: "Olmo campestre (Ulmus minor)",
    lat: 38.0109,
    lng: 15.8331,
    height: 10.0,
    circumference: 5.1,
    description:
      "Ulmus minor. Trunk circumference: 5.1m. Height: 10.0m. Notable for exceptional age and/or size. Located in Piazza Regina Margherita, San Lorenzo, Reggio Calabria, Italy.",
  },
  {
    name: "Gelso bianco di Mesola",
    species: "Gelso bianco (Morus alba)",
    lat: 44.9055,
    lng: 12.1802,
    height: 14.0,
    circumference: 5.1,
    description:
      "Morus alba. Trunk circumference: 5.1m. Height: 14.0m. Notable for exceptional age and/or size. Located in Monticelli – Gorgo Zanantoni - Via Roberto dall\'Oca, 50, Mesola, Ferrara, Italy.",
  },
  {
    name: "Ginco di Forlimpopoli",
    species: "Ginco (Gingko biloba)",
    lat: 44.1701,
    lng: 12.1008,
    height: 32.5,
    circumference: 5.1,
    description:
      "Gingko biloba. Trunk circumference: 5.1m. Height: 32.5m. Notable for exceptional age and/or size. Located in Villa Paolucci - Selbagnone - Via Meldola, 1930, Forlimpopoli, Forlì-Cesena, Italy.",
  },
  {
    name: "Faggio di Arquata del Tronto",
    species: "Faggio (Fagus sylvatica)",
    lat: 42.7604,
    lng: 13.2121,
    height: 14.5,
    circumference: 5.1,
    description:
      "Fagus sylvatica. Trunk circumference: 5.1m. Height: 14.5m. Notable for exceptional age and/or size. Located in Colle le Cese, Arquata del Tronto, Ascoli Piceno, Italy.",
  },
  {
    name: "Roverella di Falerone",
    species: "Roverella (Quercus pubescens)",
    lat: 43.1024,
    lng: 13.4998,
    height: 35.0,
    circumference: 5.1,
    description:
      "Quercus pubescens. Trunk circumference: 5.1m. Height: 35.0m. Notable for exceptional age and/or size. Located in Teatro romano, Falerone, Fermo, Italy.",
  },
  {
    name: "Roverella di Trivento #4",
    species: "Roverella (Quercus pubescens)",
    lat: 41.8097,
    lng: 14.5891,
    height: 17.0,
    circumference: 5.1,
    description:
      "Quercus pubescens. Trunk circumference: 5.1m. Height: 17.0m. Notable for exceptional age and/or size. Located in Casalotti, Trivento, Campobasso, Italy.",
  },
  {
    name: "Sequoia sempreverde di Caluso",
    species: "Sequoia sempreverde (Sequoia sempervirens)",
    lat: 45.3073,
    lng: 7.8917,
    height: 38.0,
    circumference: 5.1,
    description:
      "Sequoia sempervirens. Trunk circumference: 5.1m. Height: 38.0m. Notable for exceptional age and/or size. Located in Piazza Valperga, 2, Caluso, Torino, Italy.",
  },
  {
    name: "Platano comune di Torino #6",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.0481,
    lng: 7.6841,
    height: 36.0,
    circumference: 5.1,
    description:
      "Platanus acerifolia. Trunk circumference: 5.1m. Height: 36.0m. Notable for exceptional age and/or size. Located in Parco del Valentino - Viale Matteo Maria Boiardo, Torino, Torino, Italy.",
  },
  {
    name: "Leccio di Villagrande Strisaili #8",
    species: "Leccio (Quercus ilex)",
    lat: 39.9859,
    lng: 9.453,
    height: 7.0,
    circumference: 5.1,
    description:
      "Quercus ilex. Trunk circumference: 5.1m. Height: 7.0m. Notable for exceptional age and/or size. Located in Pirasola, Villagrande Strisaili, Nuoro (Ogliastra), Italy.",
  },
  {
    name: "Leccio di Laconi",
    species: "Leccio (Quercus ilex)",
    lat: 39.8803,
    lng: 8.9969,
    height: 22.5,
    circumference: 5.1,
    description:
      "Quercus ilex. Trunk circumference: 5.1m. Height: 22.5m. Notable for exceptional age and/or size. Located in Sinzilesu, Laconi, Oristano (Oristano), Italy.",
  },
  {
    name: "Pino domestico di Buggerru",
    species: "Pino domestico (Pinus pinea)",
    lat: 39.4424,
    lng: 8.4214,
    height: 17.0,
    circumference: 5.1,
    description:
      "Pinus pinea. Trunk circumference: 5.1m. Height: 17.0m. Notable for exceptional age and/or size. Located in Su Landiri Marru, Buggerru, Sud Sardegna (Carbonia-Iglesias), Italy.",
  },
  {
    name: "Olivo di Turri #2",
    species: "Olivo (Olea europaea)",
    lat: 39.703,
    lng: 8.9236,
    height: 12.0,
    circumference: 5.1,
    description:
      "Olea europaea. Trunk circumference: 5.1m. Height: 12.0m. Notable for exceptional age and/or size. Located in Molino, Turri, Sud Sardegna (Medio Campidano), Italy.",
  },
  {
    name: "Tiglio selvatico di Castiglione d’Orcia",
    species: "Tiglio selvatico (Tilia cordata)",
    lat: 42.9412,
    lng: 11.6349,
    height: 19.0,
    circumference: 5.1,
    description:
      "Tilia cordata. Trunk circumference: 5.1m. Height: 19.0m. Notable for exceptional age and/or size. Located in Podere Porcareccia - Via 4 novembre, Castiglione d’Orcia, Siena, Italy.",
  },
  {
    name: "Olmo campestre di Pincara",
    species: "Olmo campestre (Ulmus minor)",
    lat: 44.9856,
    lng: 11.5996,
    height: 18.0,
    circumference: 5.1,
    description:
      "Ulmus minor. Trunk circumference: 5.1m. Height: 18.0m. Notable for exceptional age and/or size. Located in Via Traversagno, Pincara, Rovigo, Italy.",
  },
  {
    name: "Platano comune di Udine",
    species: "Platano comune (Platanus acerifolia)",
    lat: 46.0546,
    lng: 13.2465,
    height: 32.0,
    circumference: 5.1,
    description:
      "Platanus acerifolia. Trunk circumference: 5.1m. Height: 32.0m. Notable for exceptional age and/or size. Located in Viale Palmanova, Udine, Udine, Italy.",
  },
  {
    name: "Larice di Morgex",
    species: "Larice (Larix decidua)",
    lat: 45.7817,
    lng: 7.0498,
    height: 31.0,
    circumference: 5.1,
    description:
      "Larix decidua. Trunk circumference: 5.1m. Height: 31.0m. Notable for exceptional age and/or size. Located in Grigne Rosse, Morgex, Aosta, Italy.",
  },
  {
    name: "Cedro dell\'Atlante di Châtillon",
    species: "Cedro dell\'Atlante (Cedrus atlantica)",
    lat: 45.7514,
    lng: 7.6124,
    height: 31.0,
    circumference: 5.1,
    description:
      "Cedrus atlantica. Trunk circumference: 5.1m. Height: 31.0m. Notable for exceptional age and/or size. Located in Castello Passerin d\'Entrèves, Châtillon, Aosta, Italy.",
  },
  {
    name: "Pioppo nero di Nonantola",
    species: "Pioppo nero (Populus nigra)",
    lat: 44.6903,
    lng: 11.1049,
    height: 36.0,
    circumference: 5.0,
    description:
      "Populus nigra. Trunk circumference: 5.0m. Height: 36.0m. Notable for exceptional age and/or size. Located in Torrazzuolo - Via Imperiale, Nonantola, Modena, Italy.",
  },
  {
    name: "Cedro del Libano di Fano",
    species: "Cedro del Libano (Cedrus libani)",
    lat: 43.8431,
    lng: 12.9878,
    height: 21.0,
    circumference: 5.0,
    description:
      "Cedrus libani. Trunk circumference: 5.0m. Height: 21.0m. Notable for exceptional age and/or size. Located in Villa Borgogelli Avveduti - Strada comunale Belgatto a Carmine, 48, Fano, Pesaro e Urbino, Italy.",
  },
  {
    name: "Platano comune di Valmacca",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.1197,
    lng: 8.6046,
    height: 41.0,
    circumference: 5.0,
    description:
      "Platanus acerifolia. Trunk circumference: 5.0m. Height: 41.0m. Notable for exceptional age and/or size. Located in Cascina Mezzano, Valmacca, Alessandria, Italy.",
  },
  {
    name: "Leccio di Illorai #4",
    species: "Leccio (Quercus ilex)",
    lat: 40.3864,
    lng: 8.9339,
    height: 18.0,
    circumference: 5.0,
    description:
      "Quercus ilex. Trunk circumference: 5.0m. Height: 18.0m. Notable for exceptional age and/or size. Located in Bilinzanas, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Roverella di Illorai #10",
    species: "Roverella (Quercus pubescens)",
    lat: 40.4036,
    lng: 8.9359,
    height: 18.0,
    circumference: 5.0,
    description:
      "Quercus pubescens. Trunk circumference: 5.0m. Height: 18.0m. Notable for exceptional age and/or size. Located in Fonte Ladorza, Illorai, Sassari (Sassari), Italy.",
  },
  {
    name: "Leccio di Seui #5",
    species: "Leccio (Quercus ilex)",
    lat: 39.8697,
    lng: 9.3989,
    height: 22.0,
    circumference: 5.0,
    description:
      "Quercus ilex. Trunk circumference: 5.0m. Height: 22.0m. Notable for exceptional age and/or size. Located in Rio Ermolinus, Seui, Sud Sardegna (Ogliastra), Italy.",
  },
  {
    name: "Pino cembro di Castello Molina di Fiemme",
    species: "Pino cembro (Pinus cembra)",
    lat: 46.184,
    lng: 11.4625,
    height: 23.0,
    circumference: 5.0,
    description:
      "Pinus cembra. Trunk circumference: 5.0m. Height: 23.0m. Notable for exceptional age and/or size. Located in Pian dela Fava - Re Leone, Castello Molina di Fiemme, Trento, Italy.",
  },
  {
    name: "Faggio di Villa Lagarina #2",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.9594,
    lng: 11.0386,
    height: 30.0,
    circumference: 5.0,
    description:
      "Fagus sylvatica. Trunk circumference: 5.0m. Height: 30.0m. Notable for exceptional age and/or size. Located in Bellaria, Villa Lagarina, Trento, Italy.",
  },
  {
    name: "Faggio di Erbezzo",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.6902,
    lng: 10.9964,
    height: 25.0,
    circumference: 5.0,
    description:
      "Fagus sylvatica. Trunk circumference: 5.0m. Height: 25.0m. Notable for exceptional age and/or size. Located in Roccopiano, Erbezzo, Verona, Italy.",
  },
  {
    name: "Platano comune di Verona",
    species: "Platano comune (Platanus acerifolia)",
    lat: 45.4426,
    lng: 11.0001,
    height: 35.5,
    circumference: 5.0,
    description:
      "Platanus acerifolia. Trunk circumference: 5.0m. Height: 35.5m. Notable for exceptional age and/or size. Located in Piazza Indipendenza, Verona, Verona, Italy.",
  },
  {
    name: "Olivo di Pozzilli",
    species: "Olivo (Olea europaea)",
    lat: 41.4979,
    lng: 14.0561,
    height: 8.5,
    circumference: 5.0,
    description:
      "Olea europaea. Trunk circumference: 5.0m. Height: 8.5m. Notable for exceptional age and/or size. Located in Via Croce di Pozzilli - Costa del Finoccio, Pozzilli, Isernia, Italy.",
  },
  {
    name: "Ippocastano di Trento",
    species: "Ippocastano (Aesculus hippocastanum)",
    lat: 46.09,
    lng: 11.1403,
    height: 19.5,
    circumference: 5.0,
    description:
      "Aesculus hippocastanum. Trunk circumference: 5.0m. Height: 19.5m. Notable for exceptional age and/or size. Located in Maderno – Villa Maria, Trento, Trento, Italy.",
  },
  {
    name: "Faggio di Bosco Chiesanuova #2",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.6747,
    lng: 11.0802,
    height: 30.0,
    circumference: 5.0,
    description:
      "Fagus sylvatica. Trunk circumference: 5.0m. Height: 30.0m. Notable for exceptional age and/or size. Located in Malga Bazerna, Bosco Chiesanuova, Verona, Italy.",
  },
  {
    name: "Platano comune di Pesaro",
    species: "Platano comune (Platanus acerifolia)",
    lat: 43.9093,
    lng: 12.8761,
    height: 26.0,
    circumference: 5.0,
    description:
      "Platanus acerifolia. Trunk circumference: 5.0m. Height: 26.0m. Notable for exceptional age and/or size. Located in Via Gagarin, 76, Pesaro, Pesaro e Urbino, Italy.",
  },
  {
    name: "Faggio di Bosco Chiesanuova #3",
    species: "Faggio (Fagus sylvatica)",
    lat: 45.6679,
    lng: 11.0507,
    height: 24.4,
    circumference: 5.0,
    description:
      "Fagus sylvatica. Trunk circumference: 5.0m. Height: 24.4m. Notable for exceptional age and/or size. Located in Tracchi, Bosco Chiesanuova, Verona, Italy.",
  },
  {
    name: "Roverella di Roccamontepiano",
    species: "Roverella (Quercus pubescens)",
    lat: 42.2703,
    lng: 14.1511,
    height: 15.0,
    circumference: 5.0,
    description:
      "Quercus pubescens. Trunk circumference: 5.0m. Height: 15.0m. Notable for exceptional age and/or size. Located in Pomaro, Roccamontepiano, Chieti, Italy.",
  },
  {
    name: "Roverella di Pietragalla #4",
    species: "Roverella (Quercus pubescens)",
    lat: 40.7738,
    lng: 15.8594,
    height: 20.0,
    circumference: 5.0,
    description:
      "Quercus pubescens. Trunk circumference: 5.0m. Height: 20.0m. Notable for exceptional age and/or size. Located in Pafundi, Pietragalla, Potenza, Italy.",
  },
  {
    name: "Roverella di Pietragalla #5",
    species: "Roverella (Quercus pubescens)",
    lat: 40.7708,
    lng: 15.8625,
    height: 21.0,
    circumference: 5.0,
    description:
      "Quercus pubescens. Trunk circumference: 5.0m. Height: 21.0m. Notable for exceptional age and/or size. Located in Case Cillis, Pietragalla, Potenza, Italy.",
  },
  {
    name: "Roverella di Fiumara",
    species: "Roverella (Quercus pubescens)",
    lat: 38.2233,
    lng: 15.7094,
    height: 26.0,
    circumference: 5.0,
    description:
      "Quercus pubescens. Trunk circumference: 5.0m. Height: 26.0m. Notable for exceptional age and/or size. Located in Contrada Baglio, Fiumara, Reggio Calabria, Italy.",
  },
  {
    name: "Albero della canfora di Caserta",
    species: "Albero della canfora (Cinnamomun camphora)",
    lat: 41.0892,
    lng: 14.3414,
    height: 25.0,
    circumference: 5.0,
    description:
      "Cinnamomun camphora. Trunk circumference: 5.0m. Height: 25.0m. Notable for exceptional age and/or size. Located in Cimitero comunale, Caserta, Caserta, Italy.",
  },

  // === TALLO GLOBAL TREE DATABASE (Jucker et al. 2022, CC-BY-4.0) ===
  // Largest trees from 498,839 georeferenced records across 234 species worldwide
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -43.1511,
    lng: 146.836,
    height: 79.3,
    circumference: 20.5,
    description:
      "Trunk diameter: 652cm. Height: 79m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -43.1511, 146.836 (Oceania).",
  },
  {
    name: "Sequoia sempervirens (Cupressaceae)",
    species: "Sequoia sempervirens",
    lat: 40.0,
    lng: -123.8,
    height: 102.5,
    circumference: 20.4,
    description:
      "Trunk diameter: 648cm. Height: 102m. Family: Cupressaceae. Recorded in the Tallo global tree database. Location: 40.0, -123.8 (North America).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -41.2273,
    lng: 147.9892,
    height: 59.0,
    circumference: 19.0,
    description:
      "Trunk diameter: 605cm. Height: 59m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.2273, 147.9892 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.8132,
    lng: 146.7073,
    height: 75.3,
    circumference: 18.2,
    description:
      "Trunk diameter: 580cm. Height: 75m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.8132, 146.7073 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.816,
    lng: 146.6081,
    height: 65.0,
    circumference: 18.0,
    description:
      "Trunk diameter: 573cm. Height: 65m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.816, 146.6081 (Oceania).",
  },
  {
    name: "Eucalyptus globulus (Myrtaceae)",
    species: "Eucalyptus globulus",
    lat: -43.2561,
    lng: 146.919,
    height: 82.3,
    circumference: 17.4,
    description:
      "Trunk diameter: 554cm. Height: 82m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -43.2561, 146.919 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.495,
    lng: 146.4292,
    height: 70.0,
    circumference: 17.1,
    description:
      "Trunk diameter: 544cm. Height: 70m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.495, 146.4292 (Oceania).",
  },
  {
    name: "Eucalyptus delegatensis (Myrtaceae)",
    species: "Eucalyptus delegatensis",
    lat: -42.7888,
    lng: 146.7066,
    height: 72.0,
    circumference: 17.0,
    description:
      "Trunk diameter: 541cm. Height: 72m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.7888, 146.7066 (Oceania).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -42.8166,
    lng: 146.7052,
    height: 53.0,
    circumference: 16.9,
    description:
      "Trunk diameter: 539cm. Height: 53m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.8166, 146.7052 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -43.1309,
    lng: 146.7332,
    height: 67.0,
    circumference: 16.9,
    description:
      "Trunk diameter: 538cm. Height: 67m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -43.1309, 146.7332 (Oceania).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -42.3869,
    lng: 146.4619,
    height: 78.0,
    circumference: 16.4,
    description:
      "Trunk diameter: 521cm. Height: 78m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.3869, 146.4619 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.4232,
    lng: 146.4777,
    height: 80.0,
    circumference: 16.2,
    description:
      "Trunk diameter: 516cm. Height: 80m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.4232, 146.4777 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.4834,
    lng: 146.4507,
    height: 82.0,
    circumference: 16.2,
    description:
      "Trunk diameter: 515cm. Height: 82m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.4834, 146.4507 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 7.65,
    lng: -10.89,
    height: 53.0,
    circumference: 14.9,
    description:
      "Trunk diameter: 475cm. Height: 53m. Family: NA. Recorded in the Tallo global tree database. Location: 7.65, -10.89 (Africa).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.7691,
    lng: 146.5294,
    height: 85.0,
    circumference: 14.1,
    description:
      "Trunk diameter: 448cm. Height: 85m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.7691, 146.5294 (Oceania).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -43.3109,
    lng: 146.8633,
    height: 72.0,
    circumference: 13.8,
    description:
      "Trunk diameter: 440cm. Height: 72m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -43.3109, 146.8633 (Oceania).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -42.3833,
    lng: 146.4489,
    height: 86.0,
    circumference: 12.8,
    description:
      "Trunk diameter: 407cm. Height: 86m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.3833, 146.4489 (Oceania).",
  },
  {
    name: "Eucalyptus jacksonii (Myrtaceae)",
    species: "Eucalyptus jacksonii",
    lat: -34.981,
    lng: 116.879,
    height: 48.5,
    circumference: 12.7,
    description:
      "Trunk diameter: 403cm. Height: 48m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.981, 116.879 (Oceania).",
  },
  {
    name: "Eucalyptus jacksonii (Myrtaceae)",
    species: "Eucalyptus jacksonii",
    lat: -34.996,
    lng: 116.65,
    height: 43.0,
    circumference: 12.5,
    description:
      "Trunk diameter: 397cm. Height: 43m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.996, 116.65 (Oceania).",
  },
  {
    name: "Eucalyptus globulus (Myrtaceae)",
    species: "Eucalyptus globulus",
    lat: -42.9639,
    lng: 146.756,
    height: 90.7,
    circumference: 12.2,
    description:
      "Trunk diameter: 388cm. Height: 91m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.9639, 146.756 (Oceania).",
  },
  {
    name: "Eucalyptus salmonophloia (Myrtaceae)",
    species: "Eucalyptus salmonophloia",
    lat: -30.186,
    lng: 120.67,
    height: 17.2,
    circumference: 12.1,
    description:
      "Trunk diameter: 385cm. Height: 17m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.186, 120.67 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -37.421,
    lng: 145.216,
    height: 87.0,
    circumference: 12.0,
    description:
      "Trunk diameter: 382cm. Height: 87m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.421, 145.216 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -30.191,
    lng: 120.664,
    height: 14.9,
    circumference: 11.9,
    description:
      "Trunk diameter: 380cm. Height: 15m. Family: NA. Recorded in the Tallo global tree database. Location: -30.191, 120.664 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.6195,
    lng: 146.4665,
    height: 85.0,
    circumference: 11.5,
    description:
      "Trunk diameter: 365cm. Height: 85m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.6195, 146.4665 (Oceania).",
  },
  {
    name: "Pseudotsuga menziesii (Pinaceae)",
    species: "Pseudotsuga menziesii",
    lat: 43.18,
    lng: -123.811,
    height: 99.7,
    circumference: 11.0,
    description:
      "Trunk diameter: 350cm. Height: 100m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 43.18, -123.811 (North America).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -35.676,
    lng: 148.166,
    height: 43.8,
    circumference: 11.0,
    description:
      "Trunk diameter: 349cm. Height: 44m. Family: NA. Recorded in the Tallo global tree database. Location: -35.676, 148.166 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.7702,
    lng: 146.7552,
    height: 92.9,
    circumference: 10.6,
    description:
      "Trunk diameter: 339cm. Height: 93m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.7702, 146.7552 (Oceania).",
  },
  {
    name: "Eucalyptus viminalis (Myrtaceae)",
    species: "Eucalyptus viminalis",
    lat: -41.4023,
    lng: 147.975,
    height: 89.0,
    circumference: 10.4,
    description:
      "Trunk diameter: 330cm. Height: 89m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.4023, 147.975 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -41.4565,
    lng: 147.7316,
    height: 88.7,
    circumference: 10.1,
    description:
      "Trunk diameter: 320cm. Height: 89m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.4565, 147.7316 (Oceania).",
  },
  {
    name: "Eucalyptus salubris (Myrtaceae)",
    species: "Eucalyptus salubris",
    lat: -30.192,
    lng: 120.651,
    height: 11.2,
    circumference: 9.9,
    description:
      "Trunk diameter: 316cm. Height: 11m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.192, 120.651 (Oceania).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -40.952,
    lng: 144.843,
    height: 51.3,
    circumference: 9.8,
    description:
      "Trunk diameter: 313cm. Height: 51m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -40.952, 144.843 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -37.0,
    lng: 145.0,
    height: 91.3,
    circumference: 9.8,
    description:
      "Trunk diameter: 312cm. Height: 91m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.0, 145.0 (Oceania).",
  },
  {
    name: "Eucalyptus delegatensis (Myrtaceae)",
    species: "Eucalyptus delegatensis",
    lat: -42.4846,
    lng: 146.4081,
    height: 87.9,
    circumference: 9.6,
    description:
      "Trunk diameter: 307cm. Height: 88m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.4846, 146.4081 (Oceania).",
  },
  {
    name: "Eucalyptus diversicolor (Myrtaceae)",
    species: "Eucalyptus diversicolor",
    lat: -34.546,
    lng: 115.952,
    height: 51.6,
    circumference: 9.6,
    description:
      "Trunk diameter: 305cm. Height: 52m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.546, 115.952 (Oceania).",
  },
  {
    name: "Picea sitchensis (Pinaceae)",
    species: "Picea sitchensis",
    lat: 48.616,
    lng: -124.718,
    height: 96.0,
    circumference: 9.6,
    description:
      "Trunk diameter: 305cm. Height: 96m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 48.616, -124.718 (North America).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -43.089,
    lng: 146.644,
    height: 50.2,
    circumference: 9.3,
    description:
      "Trunk diameter: 296cm. Height: 50m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -43.089, 146.644 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 5.3,
    lng: -7.3,
    height: 68.0,
    circumference: 9.2,
    description:
      "Trunk diameter: 293cm. Height: 68m. Family: NA. Recorded in the Tallo global tree database. Location: 5.3, -7.3 (Africa).",
  },
  {
    name: "Eucalyptus pilularis (Myrtaceae)",
    species: "Eucalyptus pilularis",
    lat: -31.686,
    lng: 152.684,
    height: 57.4,
    circumference: 9.1,
    description:
      "Trunk diameter: 291cm. Height: 57m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -31.686, 152.684 (Oceania).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -41.034,
    lng: 145.406,
    height: 53.3,
    circumference: 9.0,
    description:
      "Trunk diameter: 288cm. Height: 53m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.034, 145.406 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -35.64,
    lng: 148.145,
    height: 54.4,
    circumference: 9.0,
    description:
      "Trunk diameter: 286cm. Height: 54m. Family: NA. Recorded in the Tallo global tree database. Location: -35.64, 148.145 (Oceania).",
  },
  {
    name: "Eucalyptus microcorys (Myrtaceae)",
    species: "Eucalyptus microcorys",
    lat: -31.686,
    lng: 152.684,
    height: 66.5,
    circumference: 9.0,
    description:
      "Trunk diameter: 285cm. Height: 66m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -31.686, 152.684 (Oceania).",
  },
  {
    name: "Entandrophragma cylindricum (Meliaceae)",
    species: "Entandrophragma cylindricum",
    lat: 3.88,
    lng: 14.39,
    height: 50.9,
    circumference: 8.8,
    description:
      "Trunk diameter: 280cm. Height: 51m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 3.88, 14.39 (Africa).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -37.693,
    lng: 145.806,
    height: 90.4,
    circumference: 8.7,
    description:
      "Trunk diameter: 277cm. Height: 90m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.693, 145.806 (Oceania).",
  },
  {
    name: "Eucalyptus delegatensis (Myrtaceae)",
    species: "Eucalyptus delegatensis",
    lat: -41.63,
    lng: 146.259,
    height: 51.2,
    circumference: 8.4,
    description:
      "Trunk diameter: 269cm. Height: 51m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.63, 146.259 (Oceania).",
  },
  {
    name: "Podocarpus totara (Podocarpaceae)",
    species: "Podocarpus totara",
    lat: -38.67,
    lng: 176.72,
    height: 37.4,
    circumference: 8.4,
    description:
      "Trunk diameter: 266cm. Height: 37m. Family: Podocarpaceae. Recorded in the Tallo global tree database. Location: -38.67, 176.72 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -27.625,
    lng: 153.087,
    height: 30.3,
    circumference: 8.0,
    description:
      "Trunk diameter: 256cm. Height: 30m. Family: NA. Recorded in the Tallo global tree database. Location: -27.625, 153.087 (Oceania).",
  },
  {
    name: "Quercus marilandica (Fagaceae)",
    species: "Quercus marilandica",
    lat: 33.37,
    lng: -97.595,
    height: null,
    circumference: 8.0,
    description:
      "Trunk diameter: 255cm. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 33.37, -97.595 (North America).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 0.29,
    lng: 25.33,
    height: 48.8,
    circumference: 8.0,
    description:
      "Trunk diameter: 253cm. Height: 49m. Family: NA. Recorded in the Tallo global tree database. Location: 0.29, 25.33 (Africa).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -0.17,
    lng: 11.57,
    height: 44.2,
    circumference: 7.9,
    description:
      "Trunk diameter: 251cm. Height: 44m. Family: NA. Recorded in the Tallo global tree database. Location: -0.17, 11.57 (Africa).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -35.671,
    lng: 148.144,
    height: 33.8,
    circumference: 7.9,
    description:
      "Trunk diameter: 251cm. Height: 34m. Family: NA. Recorded in the Tallo global tree database. Location: -35.671, 148.144 (Oceania).",
  },
  {
    name: "Dinizia excelsa (Fabaceae)",
    species: "Dinizia excelsa",
    lat: 0.694,
    lng: -53.221,
    height: 82.0,
    circumference: 7.9,
    description:
      "Trunk diameter: 250cm. Height: 82m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 0.694, -53.221 (North America).",
  },
  {
    name: "Cavanillesia platanifolia (Malvaceae)",
    species: "Cavanillesia platanifolia",
    lat: 9.151,
    lng: -79.855,
    height: 44.4,
    circumference: 7.8,
    description:
      "Trunk diameter: 248cm. Height: 44m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Pachyelasma tessmannii (Fabaceae)",
    species: "Pachyelasma tessmannii",
    lat: 3.317,
    lng: 17.267,
    height: 30.2,
    circumference: 7.7,
    description:
      "Trunk diameter: 246cm. Height: 30m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Eucalyptus salmonophloia (Myrtaceae)",
    species: "Eucalyptus salmonophloia",
    lat: -30.192,
    lng: 120.642,
    height: 21.8,
    circumference: 7.7,
    description:
      "Trunk diameter: 245cm. Height: 22m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.192, 120.642 (Oceania).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -37.275,
    lng: 143.241,
    height: 27.5,
    circumference: 7.7,
    description:
      "Trunk diameter: 244cm. Height: 28m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.275, 143.241 (Oceania).",
  },
  {
    name: "Eucalyptus transcontinentalis (Myrtaceae)",
    species: "Eucalyptus transcontinentalis",
    lat: -30.192,
    lng: 120.642,
    height: 14.0,
    circumference: 7.6,
    description:
      "Trunk diameter: 242cm. Height: 14m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.192, 120.642 (Oceania).",
  },
  {
    name: "Eucalyptus pilularis (Myrtaceae)",
    species: "Eucalyptus pilularis",
    lat: -31.592,
    lng: 152.62,
    height: 36.6,
    circumference: 7.6,
    description:
      "Trunk diameter: 242cm. Height: 37m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -31.592, 152.62 (Oceania).",
  },
  {
    name: "Eucalyptus diversicolor (Myrtaceae)",
    species: "Eucalyptus diversicolor",
    lat: -34.508,
    lng: 116.124,
    height: 54.0,
    circumference: 7.6,
    description:
      "Trunk diameter: 240cm. Height: 54m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.508, 116.124 (Oceania).",
  },
  {
    name: "Cylicodiscus gabunensis (Fabaceae)",
    species: "Cylicodiscus gabunensis",
    lat: 2.916,
    lng: 11.15,
    height: 39.6,
    circumference: 7.5,
    description:
      "Trunk diameter: 240cm. Height: 40m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.916, 11.15 (Africa).",
  },
  {
    name: "Citronella moorei (Cardiopteridaceae)",
    species: "Citronella moorei",
    lat: -27.337,
    lng: 152.766,
    height: 28.0,
    circumference: 7.5,
    description:
      "Trunk diameter: 239cm. Height: 28m. Family: Cardiopteridaceae. Recorded in the Tallo global tree database. Location: -27.337, 152.766 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -35.639,
    lng: 148.17,
    height: 34.5,
    circumference: 7.3,
    description:
      "Trunk diameter: 233cm. Height: 34m. Family: NA. Recorded in the Tallo global tree database. Location: -35.639, 148.17 (Oceania).",
  },
  {
    name: "Eucalyptus transcontinentalis (Myrtaceae)",
    species: "Eucalyptus transcontinentalis",
    lat: -30.199,
    lng: 120.654,
    height: 16.9,
    circumference: 7.3,
    description:
      "Trunk diameter: 233cm. Height: 17m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.199, 120.654 (Oceania).",
  },
  {
    name: "Eucalyptus pilularis (Myrtaceae)",
    species: "Eucalyptus pilularis",
    lat: -31.208,
    lng: 152.526,
    height: 56.4,
    circumference: 7.3,
    description:
      "Trunk diameter: 233cm. Height: 56m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -31.208, 152.526 (Oceania).",
  },
  {
    name: "Ceiba pentandra (Malvaceae)",
    species: "Ceiba pentandra",
    lat: 9.151,
    lng: -79.855,
    height: 33.8,
    circumference: 7.2,
    description:
      "Trunk diameter: 230cm. Height: 34m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Ficus costaricana (Moraceae)",
    species: "Ficus costaricana",
    lat: 9.151,
    lng: -79.855,
    height: 36.2,
    circumference: 7.2,
    description:
      "Trunk diameter: 228cm. Height: 36m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Eucalyptus diversicolor (Myrtaceae)",
    species: "Eucalyptus diversicolor",
    lat: -34.449,
    lng: 116.249,
    height: 55.9,
    circumference: 7.2,
    description:
      "Trunk diameter: 228cm. Height: 56m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.449, 116.249 (Oceania).",
  },
  {
    name: "Eucalyptus diversicolor (Myrtaceae)",
    species: "Eucalyptus diversicolor",
    lat: -34.825,
    lng: 116.786,
    height: 58.3,
    circumference: 7.1,
    description:
      "Trunk diameter: 227cm. Height: 58m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.825, 116.786 (Oceania).",
  },
  {
    name: "Eucalyptus diversicolor (Myrtaceae)",
    species: "Eucalyptus diversicolor",
    lat: -34.981,
    lng: 116.879,
    height: 52.8,
    circumference: 7.1,
    description:
      "Trunk diameter: 225cm. Height: 53m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.981, 116.879 (Oceania).",
  },
  {
    name: "Eucalyptus dalrympleana (Myrtaceae)",
    species: "Eucalyptus dalrympleana",
    lat: -41.311,
    lng: 147.539,
    height: 51.3,
    circumference: 7.1,
    description:
      "Trunk diameter: 225cm. Height: 51m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.311, 147.539 (Oceania).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -36.997,
    lng: 149.383,
    height: 58.8,
    circumference: 7.0,
    description:
      "Trunk diameter: 224cm. Height: 59m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.997, 149.383 (Oceania).",
  },
  {
    name: "Dacrydium cupressinum (Podocarpaceae)",
    species: "Dacrydium cupressinum",
    lat: -38.62,
    lng: 176.87,
    height: 45.0,
    circumference: 7.0,
    description:
      "Trunk diameter: 224cm. Height: 45m. Family: Podocarpaceae. Recorded in the Tallo global tree database. Location: -38.62, 176.87 (Oceania).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.568,
    lng: -6.905,
    height: 12.5,
    circumference: 7.0,
    description:
      "Trunk diameter: 223cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.568, -6.905 (Europe).",
  },
  {
    name: "Eucalyptus fastigata (Myrtaceae)",
    species: "Eucalyptus fastigata",
    lat: -36.997,
    lng: 149.383,
    height: 44.7,
    circumference: 7.0,
    description:
      "Trunk diameter: 222cm. Height: 45m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.997, 149.383 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -37.683,
    lng: 145.589,
    height: 62.3,
    circumference: 6.9,
    description:
      "Trunk diameter: 220cm. Height: 62m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.683, 145.589 (Oceania).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.176,
    lng: -7.826,
    height: 14.0,
    circumference: 6.9,
    description:
      "Trunk diameter: 220cm. Height: 14m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.176, -7.826 (Europe).",
  },
  {
    name: "Eucalyptus microcorys (Myrtaceae)",
    species: "Eucalyptus microcorys",
    lat: -31.592,
    lng: 152.62,
    height: 57.9,
    circumference: 6.9,
    description:
      "Trunk diameter: 219cm. Height: 58m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -31.592, 152.62 (Oceania).",
  },
  {
    name: "Eucalyptus diversicolor (Myrtaceae)",
    species: "Eucalyptus diversicolor",
    lat: -34.996,
    lng: 116.65,
    height: 47.9,
    circumference: 6.9,
    description:
      "Trunk diameter: 218cm. Height: 48m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.996, 116.65 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 0.38,
    lng: 13.11,
    height: 58.3,
    circumference: 6.8,
    description:
      "Trunk diameter: 217cm. Height: 58m. Family: NA. Recorded in the Tallo global tree database. Location: 0.38, 13.11 (Africa).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -37.841,
    lng: 146.204,
    height: 28.5,
    circumference: 6.8,
    description:
      "Trunk diameter: 216cm. Height: 28m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.841, 146.204 (Oceania).",
  },
  {
    name: "Eucalyptus pilularis (Myrtaceae)",
    species: "Eucalyptus pilularis",
    lat: -30.195,
    lng: 120.633,
    height: 13.5,
    circumference: 6.7,
    description:
      "Trunk diameter: 213cm. Height: 14m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.195, 120.633 (Oceania).",
  },
  {
    name: "Eucalyptus rubida (Myrtaceae)",
    species: "Eucalyptus rubida",
    lat: -37.264,
    lng: 147.391,
    height: 29.5,
    circumference: 6.7,
    description:
      "Trunk diameter: 213cm. Height: 30m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.264, 147.391 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -2.85,
    lng: -54.95,
    height: 62.2,
    circumference: 6.7,
    description:
      "Trunk diameter: 212cm. Height: 62m. Family: NA. Recorded in the Tallo global tree database. Location: -2.85, -54.95 (unknown).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 3.94,
    lng: 14.81,
    height: 52.7,
    circumference: 6.7,
    description:
      "Trunk diameter: 212cm. Height: 53m. Family: NA. Recorded in the Tallo global tree database. Location: 3.94, 14.81 (Africa).",
  },
  {
    name: "Triplochiton scleroxylon (Malvaceae)",
    species: "Triplochiton scleroxylon",
    lat: 4.7,
    lng: 14.32,
    height: 52.7,
    circumference: 6.7,
    description:
      "Trunk diameter: 212cm. Height: 53m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 4.7, 14.32 (Africa).",
  },
  {
    name: "Shorea faguetiana (Dipterocarpaceae)",
    species: "Shorea faguetiana",
    lat: 4.917,
    lng: 117.667,
    height: 100.8,
    circumference: 6.7,
    description:
      "Trunk diameter: 212cm. Height: 101m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.917, 117.667 (Asia).",
  },
  {
    name: "Eucalyptus andrewsii (Myrtaceae)",
    species: "Eucalyptus andrewsii",
    lat: -30.157,
    lng: 152.727,
    height: 50.9,
    circumference: 6.6,
    description:
      "Trunk diameter: 209cm. Height: 51m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.157, 152.727 (Oceania).",
  },
  {
    name: "Sterculia apetala (Malvaceae)",
    species: "Sterculia apetala",
    lat: 9.151,
    lng: -79.855,
    height: 40.9,
    circumference: 6.5,
    description:
      "Trunk diameter: 208cm. Height: 41m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Nothofagus fusca (Nothofagaceae)",
    species: "Nothofagus fusca",
    lat: -42.36,
    lng: 172.23,
    height: 28.5,
    circumference: 6.5,
    description:
      "Trunk diameter: 206cm. Height: 28m. Family: Nothofagaceae. Recorded in the Tallo global tree database. Location: -42.36, 172.23 (Oceania).",
  },
  {
    name: "Ficus elasticoides (Moraceae)",
    species: "Ficus elasticoides",
    lat: 2.333,
    lng: 17.533,
    height: 38.8,
    circumference: 6.4,
    description:
      "Trunk diameter: 204cm. Height: 39m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 43.187,
    lng: -3.898,
    height: 14.0,
    circumference: 6.4,
    description:
      "Trunk diameter: 204cm. Height: 14m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.187, -3.898 (Europe).",
  },
  {
    name: "Quercus petraea (Fagaceae)",
    species: "Quercus petraea",
    lat: 42.307,
    lng: 2.454,
    height: 21.0,
    circumference: 6.4,
    description:
      "Trunk diameter: 204cm. Height: 21m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.307, 2.454 (Europe).",
  },
  {
    name: "Dinizia excelsa (Fabaceae)",
    species: "Dinizia excelsa",
    lat: -3.75,
    lng: -48.47,
    height: 63.9,
    circumference: 6.3,
    description:
      "Trunk diameter: 200cm. Height: 64m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -3.75, -48.47 (unknown).",
  },
  {
    name: "Triplochiton scleroxylon (Malvaceae)",
    species: "Triplochiton scleroxylon",
    lat: 3.88,
    lng: 14.39,
    height: 53.7,
    circumference: 6.3,
    description:
      "Trunk diameter: 200cm. Height: 54m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 3.88, 14.39 (Africa).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -0.116,
    lng: 34.608,
    height: 36.3,
    circumference: 6.2,
    description:
      "Trunk diameter: 198cm. Height: 36m. Family: NA. Recorded in the Tallo global tree database. Location: -0.116, 34.608 (Africa).",
  },
  {
    name: "Gilbertiodendron dewevrei (Fabaceae)",
    species: "Gilbertiodendron dewevrei",
    lat: 2.333,
    lng: 17.533,
    height: 22.5,
    circumference: 6.2,
    description:
      "Trunk diameter: 198cm. Height: 22m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Anacardium excelsum (Anacardiaceae)",
    species: "Anacardium excelsum",
    lat: 9.151,
    lng: -79.855,
    height: 38.9,
    circumference: 6.2,
    description:
      "Trunk diameter: 198cm. Height: 39m. Family: Anacardiaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Ocotea usambarensis (Lauraceae)",
    species: "Ocotea usambarensis",
    lat: -3.142,
    lng: 37.242,
    height: 29.5,
    circumference: 6.1,
    description:
      "Trunk diameter: 195cm. Height: 30m. Family: Lauraceae. Recorded in the Tallo global tree database. Location: -3.142, 37.242 (Africa).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 4.18,
    lng: 114.02,
    height: 55.2,
    circumference: 6.1,
    description:
      "Trunk diameter: 195cm. Height: 55m. Family: NA. Recorded in the Tallo global tree database. Location: 4.18, 114.02 (Asia).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 5.41,
    lng: -7.63,
    height: 60.5,
    circumference: 6.1,
    description:
      "Trunk diameter: 195cm. Height: 60m. Family: NA. Recorded in the Tallo global tree database. Location: 5.41, -7.63 (Africa).",
  },
  {
    name: "Prumnopitys taxifolia (Podocarpaceae)",
    species: "Prumnopitys taxifolia",
    lat: -38.62,
    lng: 176.87,
    height: 31.6,
    circumference: 6.1,
    description:
      "Trunk diameter: 193cm. Height: 32m. Family: Podocarpaceae. Recorded in the Tallo global tree database. Location: -38.62, 176.87 (Oceania).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.063,
    lng: -7.417,
    height: 12.5,
    circumference: 6.1,
    description:
      "Trunk diameter: 193cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.063, -7.417 (Europe).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 10.429,
    lng: -84.016,
    height: 36.9,
    circumference: 6.0,
    description:
      "Trunk diameter: 192cm. Height: 37m. Family: NA. Recorded in the Tallo global tree database. Location: 10.429, -84.016 (North America).",
  },
  {
    name: "Ocotea usambarensis (Lauraceae)",
    species: "Ocotea usambarensis",
    lat: -3.148,
    lng: 37.289,
    height: 23.2,
    circumference: 6.0,
    description:
      "Trunk diameter: 191cm. Height: 23m. Family: Lauraceae. Recorded in the Tallo global tree database. Location: -3.148, 37.289 (Africa).",
  },
  {
    name: "Terminalia superba (Combretaceae)",
    species: "Terminalia superba",
    lat: 3.89,
    lng: 14.4,
    height: 46.7,
    circumference: 6.0,
    description:
      "Trunk diameter: 191cm. Height: 47m. Family: Combretaceae. Recorded in the Tallo global tree database. Location: 3.89, 14.4 (Africa).",
  },
  {
    name: "Acer pensylvanicum (Sapindaceae)",
    species: "Acer pensylvanicum",
    lat: 42.542,
    lng: -72.173,
    height: 16.8,
    circumference: 6.0,
    description:
      "Trunk diameter: 190cm. Height: 17m. Family: Sapindaceae. Recorded in the Tallo global tree database. Location: 42.542, -72.173 (North America).",
  },
  {
    name: "Hopea sangal (Dipterocarpaceae)",
    species: "Hopea sangal",
    lat: 4.747,
    lng: 116.97,
    height: 51.0,
    circumference: 6.0,
    description:
      "Trunk diameter: 190cm. Height: 51m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.747, 116.97 (Asia).",
  },
  {
    name: "Syzygium resa (Myrtaceae)",
    species: "Syzygium resa",
    lat: -17.112,
    lng: 145.565,
    height: 44.0,
    circumference: 5.9,
    description:
      "Trunk diameter: 189cm. Height: 44m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -17.112, 145.565 (Oceania).",
  },
  {
    name: "Quercus petraea (Fagaceae)",
    species: "Quercus petraea",
    lat: 43.045,
    lng: -5.136,
    height: 13.5,
    circumference: 5.9,
    description:
      "Trunk diameter: 188cm. Height: 14m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.045, -5.136 (Europe).",
  },
  {
    name: "Dyera costulata (Apocynaceae)",
    species: "Dyera costulata",
    lat: 2.58,
    lng: 102.18,
    height: 40.3,
    circumference: 5.8,
    description:
      "Trunk diameter: 186cm. Height: 40m. Family: Apocynaceae. Recorded in the Tallo global tree database. Location: 2.58, 102.18 (Asia).",
  },
  {
    name: "Bertholletia excelsa (Lecythidaceae)",
    species: "Bertholletia excelsa",
    lat: -3.02,
    lng: -54.96,
    height: 60.2,
    circumference: 5.8,
    description:
      "Trunk diameter: 186cm. Height: 60m. Family: Lecythidaceae. Recorded in the Tallo global tree database. Location: -3.02, -54.96 (unknown).",
  },
  {
    name: "Pterocarpus mildbraedii (Fabaceae)",
    species: "Pterocarpus mildbraedii",
    lat: -0.82,
    lng: 13.285,
    height: 52.2,
    circumference: 5.8,
    description:
      "Trunk diameter: 184cm. Height: 52m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Ctenolophon englerianus (Ctenolophonaceae)",
    species: "Ctenolophon englerianus",
    lat: -0.85,
    lng: 9.46,
    height: 43.8,
    circumference: 5.8,
    description:
      "Trunk diameter: 184cm. Height: 44m. Family: Ctenolophonaceae. Recorded in the Tallo global tree database. Location: -0.85, 9.46 (Africa).",
  },
  {
    name: "Syzygium canicortex (Myrtaceae)",
    species: "Syzygium canicortex",
    lat: -17.12,
    lng: 145.632,
    height: 38.0,
    circumference: 5.8,
    description:
      "Trunk diameter: 184cm. Height: 38m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Ceiba pentandra (Malvaceae)",
    species: "Ceiba pentandra",
    lat: 16.898,
    lng: -90.98,
    height: 51.0,
    circumference: 5.7,
    description:
      "Trunk diameter: 183cm. Height: 51m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 16.898, -90.98 (North America).",
  },
  {
    name: "Ficus trigonata (Moraceae)",
    species: "Ficus trigonata",
    lat: 9.151,
    lng: -79.855,
    height: 39.1,
    circumference: 5.7,
    description:
      "Trunk diameter: 183cm. Height: 39m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Entandrophragma cylindricum (Meliaceae)",
    species: "Entandrophragma cylindricum",
    lat: 3.551,
    lng: 13.411,
    height: 46.5,
    circumference: 5.7,
    description:
      "Trunk diameter: 182cm. Height: 46m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 3.551, 13.411 (Africa).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.005,
    lng: -7.117,
    height: 15.5,
    circumference: 5.7,
    description:
      "Trunk diameter: 181cm. Height: 16m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.005, -7.117 (Europe).",
  },
  {
    name: "Entandrophragma excelsum (Meliaceae)",
    species: "Entandrophragma excelsum",
    lat: -3.246,
    lng: 37.41,
    height: 62.4,
    circumference: 5.7,
    description:
      "Trunk diameter: 181cm. Height: 62m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: -3.246, 37.41 (Africa).",
  },
  {
    name: "Cedrus deodara (Pinaceae)",
    species: "Cedrus deodara",
    lat: 35.65,
    lng: 73.777,
    height: 24.7,
    circumference: 5.7,
    description:
      "Trunk diameter: 181cm. Height: 25m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.65, 73.777 (Asia).",
  },
  {
    name: "Kibara macrophylla (Monimiaceae)",
    species: "Kibara macrophylla",
    lat: -27.337,
    lng: 152.766,
    height: 25.0,
    circumference: 5.7,
    description:
      "Trunk diameter: 181cm. Height: 25m. Family: Monimiaceae. Recorded in the Tallo global tree database. Location: -27.337, 152.766 (Oceania).",
  },
  {
    name: "Dipteryx oleifera (Fabaceae)",
    species: "Dipteryx oleifera",
    lat: 9.151,
    lng: -79.855,
    height: 46.9,
    circumference: 5.7,
    description:
      "Trunk diameter: 180cm. Height: 47m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Tieghemella heckelii (Sapotaceae)",
    species: "Tieghemella heckelii",
    lat: 5.49,
    lng: -2.64,
    height: 61.0,
    circumference: 5.7,
    description:
      "Trunk diameter: 180cm. Height: 61m. Family: Sapotaceae. Recorded in the Tallo global tree database. Location: 5.49, -2.64 (Africa).",
  },
  {
    name: "Gironniera subaequalis (Cannabaceae)",
    species: "Gironniera subaequalis",
    lat: 5.28,
    lng: -2.42,
    height: 61.0,
    circumference: 5.7,
    description:
      "Trunk diameter: 180cm. Height: 61m. Family: Cannabaceae. Recorded in the Tallo global tree database. Location: 5.28, -2.42 (Africa).",
  },
  {
    name: "Pseudobombax ellipticum (Malvaceae)",
    species: "Pseudobombax ellipticum",
    lat: 16.898,
    lng: -90.98,
    height: 30.0,
    circumference: 5.7,
    description:
      "Trunk diameter: 180cm. Height: 30m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 16.898, -90.98 (North America).",
  },
  {
    name: "Acacia koa (Fabaceae)",
    species: "Acacia koa",
    lat: 19.554,
    lng: -155.319,
    height: 18.7,
    circumference: 5.7,
    description:
      "Trunk diameter: 180cm. Height: 19m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 19.554, -155.319 (North America).",
  },
  {
    name: "Aspidosperma excelsum (Apocynaceae)",
    species: "Aspidosperma excelsum",
    lat: -3.02,
    lng: -54.96,
    height: 54.6,
    circumference: 5.6,
    description:
      "Trunk diameter: 179cm. Height: 55m. Family: Apocynaceae. Recorded in the Tallo global tree database. Location: -3.02, -54.96 (unknown).",
  },
  {
    name: "Metrosideros robusta (Myrtaceae)",
    species: "Metrosideros robusta",
    lat: -38.61,
    lng: 176.96,
    height: 38.5,
    circumference: 5.5,
    description:
      "Trunk diameter: 176cm. Height: 38m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -38.61, 176.96 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -13.17,
    lng: 130.777,
    height: 24.9,
    circumference: 5.5,
    description:
      "Trunk diameter: 176cm. Height: 25m. Family: NA. Recorded in the Tallo global tree database. Location: -13.17, 130.777 (Oceania).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: -15.47,
    lng: -62.55,
    height: 45.8,
    circumference: 5.5,
    description:
      "Trunk diameter: 175cm. Height: 46m. Family: NA. Recorded in the Tallo global tree database. Location: -15.47, -62.55 (South America).",
  },
  {
    name: "Irvingia excelsa (Irvingiaceae)",
    species: "Irvingia excelsa",
    lat: 3.317,
    lng: 17.267,
    height: 32.1,
    circumference: 5.5,
    description:
      "Trunk diameter: 174cm. Height: 32m. Family: Irvingiaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 42.906,
    lng: -6.256,
    height: 10.0,
    circumference: 5.4,
    description:
      "Trunk diameter: 172cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.906, -6.256 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 42.906,
    lng: -6.256,
    height: 10.0,
    circumference: 5.4,
    description:
      "Trunk diameter: 172cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.906, -6.256 (Europe).",
  },
  {
    name: "Quercus robur (Fagaceae)",
    species: "Quercus robur",
    lat: 42.941,
    lng: -7.811,
    height: 19.0,
    circumference: 5.4,
    description:
      "Trunk diameter: 172cm. Height: 19m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.941, -7.811 (Europe).",
  },
  {
    name: "Cylicodiscus gabunensis (Fabaceae)",
    species: "Cylicodiscus gabunensis",
    lat: 3.551,
    lng: 13.411,
    height: 48.3,
    circumference: 5.4,
    description:
      "Trunk diameter: 172cm. Height: 48m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 3.551, 13.411 (Africa).",
  },
  {
    name: "Balanites wilsoniana (Zygophyllaceae)",
    species: "Balanites wilsoniana",
    lat: 2.333,
    lng: 17.533,
    height: 42.6,
    circumference: 5.4,
    description:
      "Trunk diameter: 171cm. Height: 43m. Family: Zygophyllaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Ceiba pentandra (Malvaceae)",
    species: "Ceiba pentandra",
    lat: 5.49,
    lng: -2.64,
    height: 51.0,
    circumference: 5.3,
    description:
      "Trunk diameter: 170cm. Height: 51m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 5.49, -2.64 (Africa).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 43.29,
    lng: -6.141,
    height: 18.0,
    circumference: 5.3,
    description:
      "Trunk diameter: 170cm. Height: 18m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.29, -6.141 (Europe).",
  },
  {
    name: "Choerospondias axillaris (Anacardiaceae)",
    species: "Choerospondias axillaris",
    lat: 5.28,
    lng: -2.42,
    height: 51.0,
    circumference: 5.3,
    description:
      "Trunk diameter: 170cm. Height: 51m. Family: Anacardiaceae. Recorded in the Tallo global tree database. Location: 5.28, -2.42 (Africa).",
  },
  {
    name: "Handroanthus guayacan (Bignoniaceae)",
    species: "Handroanthus guayacan",
    lat: 9.151,
    lng: -79.855,
    height: 38.0,
    circumference: 5.3,
    description:
      "Trunk diameter: 170cm. Height: 38m. Family: Bignoniaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Eucalyptus saligna (Myrtaceae)",
    species: "Eucalyptus saligna",
    lat: -35.42,
    lng: 150.3,
    height: 49.1,
    circumference: 5.3,
    description:
      "Trunk diameter: 169cm. Height: 49m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -35.42, 150.3 (Oceania).",
  },
  {
    name: "Luehea cymulosa (Malvaceae)",
    species: "Luehea cymulosa",
    lat: -10.95,
    lng: -69.58,
    height: 41.3,
    circumference: 5.3,
    description:
      "Trunk diameter: 169cm. Height: 41m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: -10.95, -69.58 (South America).",
  },
  {
    name: "Quercus petraea (Fagaceae)",
    species: "Quercus petraea",
    lat: 43.137,
    lng: -5.029,
    height: null,
    circumference: 5.3,
    description:
      "Trunk diameter: 169cm. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.137, -5.029 (Europe).",
  },
  {
    name: "Triplochiton scleroxylon (Malvaceae)",
    species: "Triplochiton scleroxylon",
    lat: 3.92,
    lng: 14.93,
    height: 48.7,
    circumference: 5.3,
    description:
      "Trunk diameter: 168cm. Height: 49m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 3.92, 14.93 (Africa).",
  },
  {
    name: "NA (NA)",
    species: "NA",
    lat: 4.98,
    lng: 117.8,
    height: 65.0,
    circumference: 5.3,
    description:
      "Trunk diameter: 167cm. Height: 65m. Family: NA. Recorded in the Tallo global tree database. Location: 4.98, 117.8 (Asia).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -43.2,
    lng: 146.8,
    height: 56.3,
    circumference: 5.2,
    description:
      "Trunk diameter: 167cm. Height: 56m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -43.2, 146.8 (Oceania).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -42.5521,
    lng: 146.3834,
    height: 86.0,
    circumference: 5.2,
    description:
      "Trunk diameter: 166cm. Height: 86m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -42.5521, 146.3834 (Oceania).",
  },
  {
    name: "Tilia dasystyla (Malvaceae)",
    species: "Tilia dasystyla",
    lat: 37.644,
    lng: 48.828,
    height: 39.7,
    circumference: 5.2,
    description:
      "Trunk diameter: 166cm. Height: 40m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 37.644, 48.828 (Africa).",
  },
  {
    name: "Parashorea malaanonan (Dipterocarpaceae)",
    species: "Parashorea malaanonan",
    lat: 5.851,
    lng: 117.951,
    height: 53.3,
    circumference: 5.2,
    description:
      "Trunk diameter: 165cm. Height: 53m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Piptadeniastrum africanum (Fabaceae)",
    species: "Piptadeniastrum africanum",
    lat: 3.92,
    lng: 14.92,
    height: 53.7,
    circumference: 5.2,
    description:
      "Trunk diameter: 165cm. Height: 54m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 3.92, 14.92 (Africa).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 43.329,
    lng: -4.196,
    height: 10.5,
    circumference: 5.2,
    description:
      "Trunk diameter: 165cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.329, -4.196 (Europe).",
  },
  {
    name: "Eucalyptus diversicolor (Myrtaceae)",
    species: "Eucalyptus diversicolor",
    lat: -34.578,
    lng: 115.983,
    height: 54.2,
    circumference: 5.2,
    description:
      "Trunk diameter: 164cm. Height: 54m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.578, 115.983 (Oceania).",
  },
  {
    name: "Caryocar villosum (Caryocaraceae)",
    species: "Caryocar villosum",
    lat: -3.75,
    lng: -48.47,
    height: 41.2,
    circumference: 5.2,
    description:
      "Trunk diameter: 164cm. Height: 41m. Family: Caryocaraceae. Recorded in the Tallo global tree database. Location: -3.75, -48.47 (unknown).",
  },
  {
    name: "Eucalyptus pilularis (Myrtaceae)",
    species: "Eucalyptus pilularis",
    lat: -31.28,
    lng: 152.537,
    height: 45.9,
    circumference: 5.1,
    description:
      "Trunk diameter: 164cm. Height: 46m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -31.28, 152.537 (Oceania).",
  },
  {
    name: "Dipterocarpus acutangulus (Dipterocarpaceae)",
    species: "Dipterocarpus acutangulus",
    lat: 5.851,
    lng: 117.951,
    height: 52.8,
    circumference: 5.1,
    description:
      "Trunk diameter: 163cm. Height: 53m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Quercus robur (Fagaceae)",
    species: "Quercus robur",
    lat: 43.177,
    lng: -6.318,
    height: 17.0,
    circumference: 5.1,
    description:
      "Trunk diameter: 163cm. Height: 17m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.177, -6.318 (Europe).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -38.639,
    lng: 143.703,
    height: 80.7,
    circumference: 5.1,
    description:
      "Trunk diameter: 163cm. Height: 81m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -38.639, 143.703 (Oceania).",
  },
  {
    name: "Mammea africana (Calophyllaceae)",
    species: "Mammea africana",
    lat: 3.317,
    lng: 17.267,
    height: 35.5,
    circumference: 5.1,
    description:
      "Trunk diameter: 163cm. Height: 36m. Family: Calophyllaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Nothofagus fusca (Nothofagaceae)",
    species: "Nothofagus fusca",
    lat: -42.34,
    lng: 172.22,
    height: 36.4,
    circumference: 5.1,
    description:
      "Trunk diameter: 162cm. Height: 36m. Family: Nothofagaceae. Recorded in the Tallo global tree database. Location: -42.34, 172.22 (Oceania).",
  },
  {
    name: "Entandrophragma cylindricum (Meliaceae)",
    species: "Entandrophragma cylindricum",
    lat: 2.333,
    lng: 17.533,
    height: 38.4,
    circumference: 5.1,
    description:
      "Trunk diameter: 162cm. Height: 38m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Ocotea usambarensis (Lauraceae)",
    species: "Ocotea usambarensis",
    lat: -3.181,
    lng: 37.357,
    height: 21.4,
    circumference: 5.1,
    description:
      "Trunk diameter: 162cm. Height: 21m. Family: Lauraceae. Recorded in the Tallo global tree database. Location: -3.181, 37.357 (Africa).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 51.767,
    lng: -1.333,
    height: 39.0,
    circumference: 5.1,
    description:
      "Trunk diameter: 162cm. Height: 39m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 51.767, -1.333 (Europe).",
  },
  {
    name: "Eucalyptus acmenoides (Myrtaceae)",
    species: "Eucalyptus acmenoides",
    lat: -27.311,
    lng: 152.746,
    height: 36.0,
    circumference: 5.1,
    description:
      "Trunk diameter: 162cm. Height: 36m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -27.311, 152.746 (Oceania).",
  },
  {
    name: "Eucalyptus tetrodonta (Myrtaceae)",
    species: "Eucalyptus tetrodonta",
    lat: -13.17,
    lng: 130.777,
    height: 21.3,
    circumference: 5.1,
    description:
      "Trunk diameter: 162cm. Height: 21m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -13.17, 130.777 (Oceania).",
  },
  {
    name: "Bikinia grisea (Fabaceae)",
    species: "Bikinia grisea",
    lat: -0.82,
    lng: 13.285,
    height: 55.9,
    circumference: 5.1,
    description:
      "Trunk diameter: 162cm. Height: 56m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Quercus pagoda (Fagaceae)",
    species: "Quercus pagoda",
    lat: 31.826,
    lng: -88.183,
    height: 37.4,
    circumference: 5.1,
    description:
      "Trunk diameter: 162cm. Height: 37m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 31.826, -88.183 (North America).",
  },
  {
    name: "Eucalyptus fastigata (Myrtaceae)",
    species: "Eucalyptus fastigata",
    lat: -36.759,
    lng: 149.436,
    height: 42.2,
    circumference: 5.1,
    description:
      "Trunk diameter: 161cm. Height: 42m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.759, 149.436 (Oceania).",
  },
  {
    name: "Eucalyptus cypellocarpa (Myrtaceae)",
    species: "Eucalyptus cypellocarpa",
    lat: -36.903,
    lng: 149.719,
    height: 43.5,
    circumference: 5.0,
    description:
      "Trunk diameter: 161cm. Height: 44m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.903, 149.719 (Oceania).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 36.592,
    lng: -5.258,
    height: 8.0,
    circumference: 5.0,
    description:
      "Trunk diameter: 160cm. Height: 8m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.592, -5.258 (Europe).",
  },
  {
    name: "Piptadeniastrum africanum (Fabaceae)",
    species: "Piptadeniastrum africanum",
    lat: 3.317,
    lng: 17.267,
    height: 36.2,
    circumference: 5.0,
    description:
      "Trunk diameter: 160cm. Height: 36m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Quercus faginea (Fagaceae)",
    species: "Quercus faginea",
    lat: 36.806,
    lng: -5.393,
    height: 7.0,
    circumference: 5.0,
    description:
      "Trunk diameter: 160cm. Height: 7m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.806, -5.393 (Europe).",
  },
  {
    name: "Eucalyptus cypellocarpa (Myrtaceae)",
    species: "Eucalyptus cypellocarpa",
    lat: -36.863,
    lng: 149.595,
    height: 49.3,
    circumference: 5.0,
    description:
      "Trunk diameter: 160cm. Height: 49m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.863, 149.595 (Oceania).",
  },
  {
    name: "Marquesia macroura (Dipterocarpaceae)",
    species: "Marquesia macroura",
    lat: -11.483,
    lng: 27.672,
    height: 25.4,
    circumference: 5.0,
    description:
      "Trunk diameter: 158cm. Height: 25m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: -11.483, 27.672 (Africa).",
  },
  {
    name: "Dipteryx micrantha (Fabaceae)",
    species: "Dipteryx micrantha",
    lat: -10.95,
    lng: -69.58,
    height: 44.1,
    circumference: 5.0,
    description:
      "Trunk diameter: 158cm. Height: 44m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -10.95, -69.58 (South America).",
  },
  {
    name: "Dacrycarpus dacrydioides (Podocarpaceae)",
    species: "Dacrycarpus dacrydioides",
    lat: -38.62,
    lng: 176.87,
    height: 33.0,
    circumference: 4.9,
    description:
      "Trunk diameter: 157cm. Height: 33m. Family: Podocarpaceae. Recorded in the Tallo global tree database. Location: -38.62, 176.87 (Oceania).",
  },
  {
    name: "Ocotea usambarensis (Lauraceae)",
    species: "Ocotea usambarensis",
    lat: -3.219,
    lng: 37.454,
    height: 20.7,
    circumference: 4.9,
    description:
      "Trunk diameter: 157cm. Height: 21m. Family: Lauraceae. Recorded in the Tallo global tree database. Location: -3.219, 37.454 (Africa).",
  },
  {
    name: "Syzygium resa (Myrtaceae)",
    species: "Syzygium resa",
    lat: -21.235,
    lng: 148.552,
    height: 38.0,
    circumference: 4.9,
    description:
      "Trunk diameter: 157cm. Height: 38m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -21.235, 148.552 (Oceania).",
  },
  {
    name: "Entandrophragma cylindricum (Meliaceae)",
    species: "Entandrophragma cylindricum",
    lat: 3.37,
    lng: 13.8,
    height: 49.6,
    circumference: 4.9,
    description:
      "Trunk diameter: 156cm. Height: 50m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 3.37, 13.8 (Africa).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.903,
    lng: -6.979,
    height: 19.0,
    circumference: 4.9,
    description:
      "Trunk diameter: 156cm. Height: 19m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.903, -6.979 (Europe).",
  },
  {
    name: "Dipterocarpus crinitus (Dipterocarpaceae)",
    species: "Dipterocarpus crinitus",
    lat: 2.58,
    lng: 102.18,
    height: 40.2,
    circumference: 4.9,
    description:
      "Trunk diameter: 154cm. Height: 40m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 2.58, 102.18 (Asia).",
  },
  {
    name: "Sloanea woollsii (Elaeocarpaceae)",
    species: "Sloanea woollsii",
    lat: -27.337,
    lng: 152.766,
    height: 25.0,
    circumference: 4.9,
    description:
      "Trunk diameter: 154cm. Height: 25m. Family: Elaeocarpaceae. Recorded in the Tallo global tree database. Location: -27.337, 152.766 (Oceania).",
  },
  {
    name: "Quercus robur (Fagaceae)",
    species: "Quercus robur",
    lat: 51.767,
    lng: -1.333,
    height: 35.5,
    circumference: 4.8,
    description:
      "Trunk diameter: 154cm. Height: 36m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 51.767, -1.333 (Europe).",
  },
  {
    name: "Shorea pauciflora (Dipterocarpaceae)",
    species: "Shorea pauciflora",
    lat: 4.957,
    lng: 117.792,
    height: null,
    circumference: 4.8,
    description:
      "Trunk diameter: 154cm. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.957, 117.792 (Asia).",
  },
  {
    name: "Pseudotsuga menziesii (Pinaceae)",
    species: "Pseudotsuga menziesii",
    lat: 42.41,
    lng: -122.68,
    height: 63.3,
    circumference: 4.8,
    description:
      "Trunk diameter: 153cm. Height: 63m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 42.41, -122.68 (North America).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.311,
    lng: -7.107,
    height: 10.5,
    circumference: 4.8,
    description:
      "Trunk diameter: 153cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.311, -7.107 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.648,
    lng: -5.176,
    height: 6.0,
    circumference: 4.8,
    description:
      "Trunk diameter: 152cm. Height: 6m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.648, -5.176 (Europe).",
  },
  {
    name: "Eucalyptus delegatensis (Myrtaceae)",
    species: "Eucalyptus delegatensis",
    lat: -41.367,
    lng: 147.603,
    height: 40.4,
    circumference: 4.8,
    description:
      "Trunk diameter: 152cm. Height: 40m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.367, 147.603 (Oceania).",
  },
  {
    name: "Pouteria altissima (Sapotaceae)",
    species: "Pouteria altissima",
    lat: 3.88,
    lng: 14.39,
    height: 38.7,
    circumference: 4.8,
    description:
      "Trunk diameter: 151cm. Height: 39m. Family: Sapotaceae. Recorded in the Tallo global tree database. Location: 3.88, 14.39 (Africa).",
  },
  {
    name: "Eucalyptus regnans (Myrtaceae)",
    species: "Eucalyptus regnans",
    lat: -37.429,
    lng: 145.949,
    height: 48.4,
    circumference: 4.7,
    description:
      "Trunk diameter: 151cm. Height: 48m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.429, 145.949 (Oceania).",
  },
  {
    name: "Autranella congolensis (Sapotaceae)",
    species: "Autranella congolensis",
    lat: 3.317,
    lng: 17.267,
    height: 34.2,
    circumference: 4.7,
    description:
      "Trunk diameter: 151cm. Height: 34m. Family: Sapotaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.388,
    lng: -7.433,
    height: 9.0,
    circumference: 4.7,
    description:
      "Trunk diameter: 151cm. Height: 9m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.388, -7.433 (Europe).",
  },
  {
    name: "Shorea faguetiana (Dipterocarpaceae)",
    species: "Shorea faguetiana",
    lat: 4.747,
    lng: 116.97,
    height: 44.0,
    circumference: 4.7,
    description:
      "Trunk diameter: 151cm. Height: 44m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.747, 116.97 (Asia).",
  },
  {
    name: "Aucoumea klaineana (Burseraceae)",
    species: "Aucoumea klaineana",
    lat: -0.82,
    lng: 13.285,
    height: 60.0,
    circumference: 4.7,
    description:
      "Trunk diameter: 151cm. Height: 60m. Family: Burseraceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Quercus petraea (Fagaceae)",
    species: "Quercus petraea",
    lat: 43.02,
    lng: -5.872,
    height: 21.5,
    circumference: 4.7,
    description:
      "Trunk diameter: 150cm. Height: 22m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.02, -5.872 (Europe).",
  },
  {
    name: "Quercus infectoria (Fagaceae)",
    species: "Quercus infectoria",
    lat: 36.425,
    lng: 45.358,
    height: null,
    circumference: 4.7,
    description:
      "Trunk diameter: 150cm. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.425, 45.358 (Africa).",
  },
  {
    name: "Shorea johorensis (Dipterocarpaceae)",
    species: "Shorea johorensis",
    lat: 4.957,
    lng: 117.792,
    height: 70.6,
    circumference: 4.7,
    description:
      "Trunk diameter: 150cm. Height: 71m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.957, 117.792 (Asia).",
  },
  {
    name: "Lecomtedoxa klaineana (Sapotaceae)",
    species: "Lecomtedoxa klaineana",
    lat: 5.06,
    lng: 8.86,
    height: 49.0,
    circumference: 4.7,
    description:
      "Trunk diameter: 150cm. Height: 49m. Family: Sapotaceae. Recorded in the Tallo global tree database. Location: 5.06, 8.86 (Africa).",
  },
  {
    name: "Dussia mexicana (Fabaceae)",
    species: "Dussia mexicana",
    lat: 18.57,
    lng: -95.13,
    height: 35.0,
    circumference: 4.7,
    description:
      "Trunk diameter: 150cm. Height: 35m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 18.57, -95.13 (North America).",
  },
  {
    name: "Quercus suber (Fagaceae)",
    species: "Quercus suber",
    lat: 36.513,
    lng: -5.591,
    height: 8.5,
    circumference: 4.7,
    description:
      "Trunk diameter: 150cm. Height: 8m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.513, -5.591 (Europe).",
  },
  {
    name: "Bertholletia excelsa (Lecythidaceae)",
    species: "Bertholletia excelsa",
    lat: -9.09,
    lng: -63.07,
    height: 56.5,
    circumference: 4.7,
    description:
      "Trunk diameter: 149cm. Height: 56m. Family: Lecythidaceae. Recorded in the Tallo global tree database. Location: -9.09, -63.07 (unknown).",
  },
  {
    name: "Agarista salicifolia (Ericaceae)",
    species: "Agarista salicifolia",
    lat: -3.226,
    lng: 37.519,
    height: 15.0,
    circumference: 4.7,
    description:
      "Trunk diameter: 149cm. Height: 15m. Family: Ericaceae. Recorded in the Tallo global tree database. Location: -3.226, 37.519 (Africa).",
  },
  {
    name: "Haldina cordifolia (Rubiaceae)",
    species: "Haldina cordifolia",
    lat: 7.194,
    lng: 80.971,
    height: 27.0,
    circumference: 4.7,
    description:
      "Trunk diameter: 149cm. Height: 27m. Family: Rubiaceae. Recorded in the Tallo global tree database. Location: 7.194, 80.971 (Asia).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 43.188,
    lng: -4.661,
    height: 13.0,
    circumference: 4.7,
    description:
      "Trunk diameter: 149cm. Height: 13m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.188, -4.661 (Europe).",
  },
  {
    name: "Shorea johorensis (Dipterocarpaceae)",
    species: "Shorea johorensis",
    lat: 5.851,
    lng: 117.951,
    height: 68.8,
    circumference: 4.7,
    description:
      "Trunk diameter: 148cm. Height: 69m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Grewia tiliifolia (Malvaceae)",
    species: "Grewia tiliifolia",
    lat: 7.202,
    lng: 80.965,
    height: null,
    circumference: 4.6,
    description:
      "Trunk diameter: 148cm. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 7.202, 80.965 (Asia).",
  },
  {
    name: "Blepharocarya involucrigera (Anacardiaceae)",
    species: "Blepharocarya involucrigera",
    lat: -17.12,
    lng: 145.632,
    height: 37.0,
    circumference: 4.6,
    description:
      "Trunk diameter: 148cm. Height: 37m. Family: Anacardiaceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Eucalyptus cypellocarpa (Myrtaceae)",
    species: "Eucalyptus cypellocarpa",
    lat: -37.013,
    lng: 149.382,
    height: 47.3,
    circumference: 4.6,
    description:
      "Trunk diameter: 148cm. Height: 47m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.013, 149.382 (Oceania).",
  },
  {
    name: "Cedrus deodara (Pinaceae)",
    species: "Cedrus deodara",
    lat: 35.666,
    lng: 73.676,
    height: 41.7,
    circumference: 4.6,
    description:
      "Trunk diameter: 147cm. Height: 42m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.666, 73.676 (Asia).",
  },
  {
    name: "Irvingia grandifolia (Irvingiaceae)",
    species: "Irvingia grandifolia",
    lat: 3.31,
    lng: 13.66,
    height: 44.7,
    circumference: 4.6,
    description:
      "Trunk diameter: 147cm. Height: 45m. Family: Irvingiaceae. Recorded in the Tallo global tree database. Location: 3.31, 13.66 (Africa).",
  },
  {
    name: "Quercus faginea (Fagaceae)",
    species: "Quercus faginea",
    lat: 36.687,
    lng: -4.998,
    height: 11.0,
    circumference: 4.6,
    description:
      "Trunk diameter: 146cm. Height: 11m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.687, -4.998 (Europe).",
  },
  {
    name: "Quercus petraea (Fagaceae)",
    species: "Quercus petraea",
    lat: 43.162,
    lng: -5.94,
    height: 24.5,
    circumference: 4.6,
    description:
      "Trunk diameter: 145cm. Height: 24m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.162, -5.94 (Europe).",
  },
  {
    name: "Carpinus betulus (Betulaceae)",
    species: "Carpinus betulus",
    lat: 37.668,
    lng: 48.735,
    height: 25.0,
    circumference: 4.6,
    description:
      "Trunk diameter: 145cm. Height: 25m. Family: Betulaceae. Recorded in the Tallo global tree database. Location: 37.668, 48.735 (Africa).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.116,
    lng: -8.154,
    height: 22.5,
    circumference: 4.5,
    description:
      "Trunk diameter: 145cm. Height: 22m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.116, -8.154 (Europe).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 43.119,
    lng: -6.149,
    height: 16.0,
    circumference: 4.5,
    description:
      "Trunk diameter: 144cm. Height: 16m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.119, -6.149 (Europe).",
  },
  {
    name: "Albizia gummifera (Fabaceae)",
    species: "Albizia gummifera",
    lat: -3.245,
    lng: 37.319,
    height: 32.9,
    circumference: 4.5,
    description:
      "Trunk diameter: 144cm. Height: 33m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -3.245, 37.319 (Africa).",
  },
  {
    name: "Gilletiodendron pierreanum (Fabaceae)",
    species: "Gilletiodendron pierreanum",
    lat: -0.82,
    lng: 13.285,
    height: 42.1,
    circumference: 4.5,
    description:
      "Trunk diameter: 144cm. Height: 42m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Ceratopetalum succirubrum (Cunoniaceae)",
    species: "Ceratopetalum succirubrum",
    lat: -17.12,
    lng: 145.632,
    height: 40.0,
    circumference: 4.5,
    description:
      "Trunk diameter: 144cm. Height: 40m. Family: Cunoniaceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Irvingia smithii (Irvingiaceae)",
    species: "Irvingia smithii",
    lat: 3.31,
    lng: 13.66,
    height: 40.4,
    circumference: 4.5,
    description:
      "Trunk diameter: 144cm. Height: 40m. Family: Irvingiaceae. Recorded in the Tallo global tree database. Location: 3.31, 13.66 (Africa).",
  },
  {
    name: "Haldina cordifolia (Rubiaceae)",
    species: "Haldina cordifolia",
    lat: 28.786,
    lng: 80.891,
    height: 20.0,
    circumference: 4.5,
    description:
      "Trunk diameter: 143cm. Height: 20m. Family: Rubiaceae. Recorded in the Tallo global tree database. Location: 28.786, 80.891 (Asia).",
  },
  {
    name: "Piptadeniastrum africanum (Fabaceae)",
    species: "Piptadeniastrum africanum",
    lat: 2.484,
    lng: 16.97,
    height: 57.3,
    circumference: 4.5,
    description:
      "Trunk diameter: 143cm. Height: 57m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.484, 16.97 (Africa).",
  },
  {
    name: "Nothofagus menziesii (Nothofagaceae)",
    species: "Nothofagus menziesii",
    lat: -45.98,
    lng: 167.56,
    height: 34.9,
    circumference: 4.5,
    description:
      "Trunk diameter: 143cm. Height: 35m. Family: Nothofagaceae. Recorded in the Tallo global tree database. Location: -45.98, 167.56 (Oceania).",
  },
  {
    name: "Dipterocarpus caudiferus (Dipterocarpaceae)",
    species: "Dipterocarpus caudiferus",
    lat: 5.851,
    lng: 117.951,
    height: 43.5,
    circumference: 4.5,
    description:
      "Trunk diameter: 143cm. Height: 44m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Couratari stellata (Lecythidaceae)",
    species: "Couratari stellata",
    lat: -3.02,
    lng: -54.96,
    height: 58.2,
    circumference: 4.5,
    description:
      "Trunk diameter: 143cm. Height: 58m. Family: Lecythidaceae. Recorded in the Tallo global tree database. Location: -3.02, -54.96 (unknown).",
  },
  {
    name: "Quercus robur (Fagaceae)",
    species: "Quercus robur",
    lat: 43.035,
    lng: -4.633,
    height: 12.0,
    circumference: 4.5,
    description:
      "Trunk diameter: 142cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.035, -4.633 (Europe).",
  },
  {
    name: "Copaifera mildbraedii (Fabaceae)",
    species: "Copaifera mildbraedii",
    lat: 2.333,
    lng: 17.533,
    height: 44.7,
    circumference: 4.5,
    description:
      "Trunk diameter: 142cm. Height: 45m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Piptadeniastrum africanum (Fabaceae)",
    species: "Piptadeniastrum africanum",
    lat: 2.916,
    lng: 11.15,
    height: 36.3,
    circumference: 4.5,
    description:
      "Trunk diameter: 142cm. Height: 36m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.916, 11.15 (Africa).",
  },
  {
    name: "Shorea falciferoides (Dipterocarpaceae)",
    species: "Shorea falciferoides",
    lat: 5.851,
    lng: 117.951,
    height: 47.2,
    circumference: 4.5,
    description:
      "Trunk diameter: 142cm. Height: 47m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Fillaeopsis discophora (Fabaceae)",
    species: "Fillaeopsis discophora",
    lat: -0.82,
    lng: 13.285,
    height: 50.7,
    circumference: 4.5,
    description:
      "Trunk diameter: 142cm. Height: 51m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Eperua bijuga (Fabaceae)",
    species: "Eperua bijuga",
    lat: -2.55,
    lng: -46.84,
    height: null,
    circumference: 4.5,
    description:
      "Trunk diameter: 142cm. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -2.55, -46.84 (unknown).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.588,
    lng: -5.032,
    height: 8.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 142cm. Height: 8m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.588, -5.032 (Europe).",
  },
  {
    name: "Canarium muelleri (Burseraceae)",
    species: "Canarium muelleri",
    lat: -17.12,
    lng: 145.632,
    height: 36.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 141cm. Height: 36m. Family: Burseraceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Blighia welwitschii (Sapindaceae)",
    species: "Blighia welwitschii",
    lat: 2.333,
    lng: 17.533,
    height: 32.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 141cm. Height: 32m. Family: Sapindaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Eucalyptus salubris (Myrtaceae)",
    species: "Eucalyptus salubris",
    lat: -30.192,
    lng: 120.642,
    height: 11.4,
    circumference: 4.4,
    description:
      "Trunk diameter: 141cm. Height: 11m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.192, 120.642 (Oceania).",
  },
  {
    name: "Quercus suber (Fagaceae)",
    species: "Quercus suber",
    lat: 39.853,
    lng: -0.265,
    height: 9.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 141cm. Height: 9m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 39.853, -0.265 (Europe).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 43.298,
    lng: -6.461,
    height: 20.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 141cm. Height: 20m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.298, -6.461 (Europe).",
  },
  {
    name: "Caryocar villosum (Caryocaraceae)",
    species: "Caryocar villosum",
    lat: -3.02,
    lng: -54.96,
    height: 40.5,
    circumference: 4.4,
    description:
      "Trunk diameter: 140cm. Height: 40m. Family: Caryocaraceae. Recorded in the Tallo global tree database. Location: -3.02, -54.96 (unknown).",
  },
  {
    name: "Prioria copaifera (Fabaceae)",
    species: "Prioria copaifera",
    lat: 9.151,
    lng: -79.855,
    height: 35.1,
    circumference: 4.4,
    description:
      "Trunk diameter: 140cm. Height: 35m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Tetragastris altissima (Burseraceae)",
    species: "Tetragastris altissima",
    lat: -1.64,
    lng: -56.27,
    height: 46.3,
    circumference: 4.4,
    description:
      "Trunk diameter: 140cm. Height: 46m. Family: Burseraceae. Recorded in the Tallo global tree database. Location: -1.64, -56.27 (unknown).",
  },
  {
    name: "Shorea stipularis (Dipterocarpaceae)",
    species: "Shorea stipularis",
    lat: 6.407,
    lng: 80.432,
    height: 45.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 140cm. Height: 45m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 6.407, 80.432 (Asia).",
  },
  {
    name: "Shorea stipularis (Dipterocarpaceae)",
    species: "Shorea stipularis",
    lat: 7.738,
    lng: 80.517,
    height: 65.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 140cm. Height: 65m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 7.738, 80.517 (Asia).",
  },
  {
    name: "Acer velutinum (Sapindaceae)",
    species: "Acer velutinum",
    lat: 37.642,
    lng: 48.863,
    height: 39.5,
    circumference: 4.4,
    description:
      "Trunk diameter: 140cm. Height: 40m. Family: Sapindaceae. Recorded in the Tallo global tree database. Location: 37.642, 48.863 (Africa).",
  },
  {
    name: "Erythrophleum suaveolens (Fabaceae)",
    species: "Erythrophleum suaveolens",
    lat: 3.551,
    lng: 13.411,
    height: 43.8,
    circumference: 4.4,
    description:
      "Trunk diameter: 140cm. Height: 44m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 3.551, 13.411 (Africa).",
  },
  {
    name: "Corymbia maculata (Myrtaceae)",
    species: "Corymbia maculata",
    lat: -35.45,
    lng: 150.2,
    height: 26.1,
    circumference: 4.4,
    description:
      "Trunk diameter: 140cm. Height: 26m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -35.45, 150.2 (Oceania).",
  },
  {
    name: "Pseudotsuga menziesii (Pinaceae)",
    species: "Pseudotsuga menziesii",
    lat: 45.823,
    lng: -121.963,
    height: 52.4,
    circumference: 4.4,
    description:
      "Trunk diameter: 139cm. Height: 52m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 45.823, -121.963 (North America).",
  },
  {
    name: "Prioria oxyphylla (Fabaceae)",
    species: "Prioria oxyphylla",
    lat: 3.317,
    lng: 17.267,
    height: 33.3,
    circumference: 4.4,
    description:
      "Trunk diameter: 139cm. Height: 33m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Flindersia pimenteliana (Rutaceae)",
    species: "Flindersia pimenteliana",
    lat: -17.12,
    lng: 145.632,
    height: 41.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 139cm. Height: 41m. Family: Rutaceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Cedrus deodara (Pinaceae)",
    species: "Cedrus deodara",
    lat: 35.672,
    lng: 73.803,
    height: 23.6,
    circumference: 4.4,
    description:
      "Trunk diameter: 139cm. Height: 24m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.672, 73.803 (Asia).",
  },
  {
    name: "Acer velutinum (Sapindaceae)",
    species: "Acer velutinum",
    lat: 37.658,
    lng: 48.859,
    height: 42.5,
    circumference: 4.4,
    description:
      "Trunk diameter: 139cm. Height: 42m. Family: Sapindaceae. Recorded in the Tallo global tree database. Location: 37.658, 48.859 (Africa).",
  },
  {
    name: "Lovoa trichilioides (Meliaceae)",
    species: "Lovoa trichilioides",
    lat: 2.916,
    lng: 11.15,
    height: 37.6,
    circumference: 4.4,
    description:
      "Trunk diameter: 139cm. Height: 38m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 2.916, 11.15 (Africa).",
  },
  {
    name: "Dacrydium cupressinum (Podocarpaceae)",
    species: "Dacrydium cupressinum",
    lat: -38.61,
    lng: 176.96,
    height: 43.0,
    circumference: 4.4,
    description:
      "Trunk diameter: 138cm. Height: 43m. Family: Podocarpaceae. Recorded in the Tallo global tree database. Location: -38.61, 176.96 (Oceania).",
  },
  {
    name: "Schefflera volkensii (Araliaceae)",
    species: "Schefflera volkensii",
    lat: -3.191,
    lng: 37.441,
    height: 27.4,
    circumference: 4.3,
    description:
      "Trunk diameter: 138cm. Height: 27m. Family: Araliaceae. Recorded in the Tallo global tree database. Location: -3.191, 37.441 (Africa).",
  },
  {
    name: "Schefflera volkensii (Araliaceae)",
    species: "Schefflera volkensii",
    lat: -3.226,
    lng: 37.519,
    height: 18.5,
    circumference: 4.3,
    description:
      "Trunk diameter: 138cm. Height: 18m. Family: Araliaceae. Recorded in the Tallo global tree database. Location: -3.226, 37.519 (Africa).",
  },
  {
    name: "Cardwellia sublimis (Proteaceae)",
    species: "Cardwellia sublimis",
    lat: -17.12,
    lng: 145.632,
    height: 30.0,
    circumference: 4.3,
    description:
      "Trunk diameter: 138cm. Height: 30m. Family: Proteaceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Syncarpia glomulifera (Myrtaceae)",
    species: "Syncarpia glomulifera",
    lat: -31.208,
    lng: 152.526,
    height: 57.6,
    circumference: 4.3,
    description:
      "Trunk diameter: 138cm. Height: 58m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -31.208, 152.526 (Oceania).",
  },
  {
    name: "Manilkara mabokeensis (Sapotaceae)",
    species: "Manilkara mabokeensis",
    lat: 3.317,
    lng: 17.267,
    height: 31.4,
    circumference: 4.3,
    description:
      "Trunk diameter: 138cm. Height: 31m. Family: Sapotaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Jacaranda copaia (Bignoniaceae)",
    species: "Jacaranda copaia",
    lat: 9.151,
    lng: -79.855,
    height: 30.1,
    circumference: 4.3,
    description:
      "Trunk diameter: 137cm. Height: 30m. Family: Bignoniaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Elaeocarpus coriaceus (Elaeocarpaceae)",
    species: "Elaeocarpus coriaceus",
    lat: 6.913,
    lng: 80.792,
    height: null,
    circumference: 4.3,
    description:
      "Trunk diameter: 137cm. Family: Elaeocarpaceae. Recorded in the Tallo global tree database. Location: 6.913, 80.792 (Asia).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.462,
    lng: -6.531,
    height: 12.5,
    circumference: 4.3,
    description:
      "Trunk diameter: 137cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.462, -6.531 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.647,
    lng: -5.271,
    height: 10.5,
    circumference: 4.3,
    description:
      "Trunk diameter: 137cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.647, -5.271 (Europe).",
  },
  {
    name: "Pseudotsuga menziesii (Pinaceae)",
    species: "Pseudotsuga menziesii",
    lat: 43.29,
    lng: -123.15,
    height: 54.6,
    circumference: 4.3,
    description:
      "Trunk diameter: 137cm. Height: 55m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 43.29, -123.15 (North America).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.418,
    lng: -7.688,
    height: 12.5,
    circumference: 4.3,
    description:
      "Trunk diameter: 137cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.418, -7.688 (Europe).",
  },
  {
    name: "Scyphocephalium mannii (Myristicaceae)",
    species: "Scyphocephalium mannii",
    lat: -0.82,
    lng: 13.285,
    height: 46.0,
    circumference: 4.3,
    description:
      "Trunk diameter: 137cm. Height: 46m. Family: Myristicaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 42.875,
    lng: -6.478,
    height: 19.0,
    circumference: 4.3,
    description:
      "Trunk diameter: 136cm. Height: 19m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.875, -6.478 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 42.875,
    lng: -6.478,
    height: 19.0,
    circumference: 4.3,
    description:
      "Trunk diameter: 136cm. Height: 19m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.875, -6.478 (Europe).",
  },
  {
    name: "Distemonanthus benthamianus (Fabaceae)",
    species: "Distemonanthus benthamianus",
    lat: 2.916,
    lng: 11.15,
    height: 35.5,
    circumference: 4.3,
    description:
      "Trunk diameter: 136cm. Height: 36m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.916, 11.15 (Africa).",
  },
  {
    name: "Dryobalanops lanceolata (Dipterocarpaceae)",
    species: "Dryobalanops lanceolata",
    lat: 4.747,
    lng: 116.97,
    height: 41.0,
    circumference: 4.3,
    description:
      "Trunk diameter: 136cm. Height: 41m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.747, 116.97 (Asia).",
  },
  {
    name: "Eucalyptus diversicolor (Myrtaceae)",
    species: "Eucalyptus diversicolor",
    lat: -34.85,
    lng: 116.687,
    height: 44.8,
    circumference: 4.3,
    description:
      "Trunk diameter: 135cm. Height: 45m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.85, 116.687 (Oceania).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 43.259,
    lng: -6.339,
    height: 21.0,
    circumference: 4.3,
    description:
      "Trunk diameter: 135cm. Height: 21m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.259, -6.339 (Europe).",
  },
  {
    name: "Julbernardia pellegriniana (Fabaceae)",
    species: "Julbernardia pellegriniana",
    lat: -0.82,
    lng: 13.285,
    height: 52.8,
    circumference: 4.2,
    description:
      "Trunk diameter: 135cm. Height: 53m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Shorea mecistopteryx (Dipterocarpaceae)",
    species: "Shorea mecistopteryx",
    lat: 5.851,
    lng: 117.951,
    height: 55.5,
    circumference: 4.2,
    description:
      "Trunk diameter: 135cm. Height: 56m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Platypodium elegans (Fabaceae)",
    species: "Platypodium elegans",
    lat: 9.151,
    lng: -79.855,
    height: 35.4,
    circumference: 4.2,
    description:
      "Trunk diameter: 134cm. Height: 35m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 42.101,
    lng: -3.133,
    height: 18.5,
    circumference: 4.2,
    description:
      "Trunk diameter: 134cm. Height: 18m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.101, -3.133 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 42.101,
    lng: -3.133,
    height: 18.5,
    circumference: 4.2,
    description:
      "Trunk diameter: 134cm. Height: 18m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.101, -3.133 (Europe).",
  },
  {
    name: "Aspidosperma desmanthum (Apocynaceae)",
    species: "Aspidosperma desmanthum",
    lat: 9.151,
    lng: -79.855,
    height: 32.9,
    circumference: 4.2,
    description:
      "Trunk diameter: 134cm. Height: 33m. Family: Apocynaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Eucalyptus pilularis (Myrtaceae)",
    species: "Eucalyptus pilularis",
    lat: -30.157,
    lng: 152.727,
    height: 56.8,
    circumference: 4.2,
    description:
      "Trunk diameter: 134cm. Height: 57m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -30.157, 152.727 (Oceania).",
  },
  {
    name: "Prioria oxyphylla (Fabaceae)",
    species: "Prioria oxyphylla",
    lat: -0.82,
    lng: 13.285,
    height: 56.3,
    circumference: 4.2,
    description:
      "Trunk diameter: 133cm. Height: 56m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 48.2674,
    lng: 23.6226,
    height: 44.5,
    circumference: 4.2,
    description:
      "Trunk diameter: 133cm. Height: 44m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 48.2674, 23.6226 (Europe).",
  },
  {
    name: "Holoptelea integrifolia (Ulmaceae)",
    species: "Holoptelea integrifolia",
    lat: 8.157,
    lng: 80.453,
    height: 25.0,
    circumference: 4.2,
    description:
      "Trunk diameter: 133cm. Height: 25m. Family: Ulmaceae. Recorded in the Tallo global tree database. Location: 8.157, 80.453 (Asia).",
  },
  {
    name: "Eucalyptus viminalis (Myrtaceae)",
    species: "Eucalyptus viminalis",
    lat: -36.997,
    lng: 149.383,
    height: 48.7,
    circumference: 4.2,
    description:
      "Trunk diameter: 133cm. Height: 49m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.997, 149.383 (Oceania).",
  },
  {
    name: "Eucalyptus fastigata (Myrtaceae)",
    species: "Eucalyptus fastigata",
    lat: -36.903,
    lng: 149.719,
    height: 39.8,
    circumference: 4.2,
    description:
      "Trunk diameter: 133cm. Height: 40m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.903, 149.719 (Oceania).",
  },
  {
    name: "Karrabina biagiana (Cunoniaceae)",
    species: "Karrabina biagiana",
    lat: -17.35,
    lng: 145.479,
    height: 34.0,
    circumference: 4.2,
    description:
      "Trunk diameter: 133cm. Height: 34m. Family: Cunoniaceae. Recorded in the Tallo global tree database. Location: -17.35, 145.479 (Oceania).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 42.128,
    lng: -3.242,
    height: 12.0,
    circumference: 4.2,
    description:
      "Trunk diameter: 132cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.128, -3.242 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 42.128,
    lng: -3.242,
    height: 12.0,
    circumference: 4.2,
    description:
      "Trunk diameter: 132cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.128, -3.242 (Europe).",
  },
  {
    name: "Lophira alata (Ochnaceae)",
    species: "Lophira alata",
    lat: 3.551,
    lng: 13.411,
    height: 38.5,
    circumference: 4.2,
    description:
      "Trunk diameter: 132cm. Height: 38m. Family: Ochnaceae. Recorded in the Tallo global tree database. Location: 3.551, 13.411 (Africa).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -36.863,
    lng: 149.595,
    height: 48.4,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 48m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.863, 149.595 (Oceania).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 43.079,
    lng: -2.066,
    height: 22.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 22m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.079, -2.066 (Europe).",
  },
  {
    name: "Brosimum alicastrum (Moraceae)",
    species: "Brosimum alicastrum",
    lat: -10.95,
    lng: -69.58,
    height: 43.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 43m. Family: Moraceae. Recorded in the Tallo global tree database. Location: -10.95, -69.58 (South America).",
  },
  {
    name: "Pouteria adolfi-friedericii (Sapotaceae)",
    species: "Pouteria adolfi-friedericii",
    lat: -3.246,
    lng: 37.41,
    height: 45.3,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 45m. Family: Sapotaceae. Recorded in the Tallo global tree database. Location: -3.246, 37.41 (Africa).",
  },
  {
    name: "Phoebe tavoyana (Lauraceae)",
    species: "Phoebe tavoyana",
    lat: 5.28,
    lng: -2.42,
    height: 45.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 45m. Family: Lauraceae. Recorded in the Tallo global tree database. Location: 5.28, -2.42 (Africa).",
  },
  {
    name: "Pinus wallichiana (Pinaceae)",
    species: "Pinus wallichiana",
    lat: 35.666,
    lng: 73.676,
    height: 43.1,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 43m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.666, 73.676 (Asia).",
  },
  {
    name: "Fagus orientalis (Fagaceae)",
    species: "Fagus orientalis",
    lat: 37.67,
    lng: 48.868,
    height: 41.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 41m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 37.67, 48.868 (Africa).",
  },
  {
    name: "Eucalyptus miniata (Myrtaceae)",
    species: "Eucalyptus miniata",
    lat: -13.17,
    lng: 130.777,
    height: 22.4,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 22m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -13.17, 130.777 (Oceania).",
  },
  {
    name: "Entandrophragma cylindricum (Meliaceae)",
    species: "Entandrophragma cylindricum",
    lat: 3.317,
    lng: 17.267,
    height: 32.4,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 32m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Albizia schimperiana (Fabaceae)",
    species: "Albizia schimperiana",
    lat: -3.24,
    lng: 37.25,
    height: 27.8,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 28m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -3.24, 37.25 (Africa).",
  },
  {
    name: "Dacrydium cupressinum (Podocarpaceae)",
    species: "Dacrydium cupressinum",
    lat: -42.6,
    lng: 171.58,
    height: 33.8,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 34m. Family: Podocarpaceae. Recorded in the Tallo global tree database. Location: -42.6, 171.58 (Oceania).",
  },
  {
    name: "Dysoxylum fraserianum (Meliaceae)",
    species: "Dysoxylum fraserianum",
    lat: -27.337,
    lng: 152.766,
    height: 28.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 28m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: -27.337, 152.766 (Oceania).",
  },
  {
    name: "Shorea parvifolia (Dipterocarpaceae)",
    species: "Shorea parvifolia",
    lat: 4.957,
    lng: 117.792,
    height: 43.5,
    circumference: 4.1,
    description:
      "Trunk diameter: 132cm. Height: 44m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.957, 117.792 (Asia).",
  },
  {
    name: "Pseudotsuga menziesii (Pinaceae)",
    species: "Pseudotsuga menziesii",
    lat: 42.47,
    lng: -124.21,
    height: 35.8,
    circumference: 4.1,
    description:
      "Trunk diameter: 131cm. Height: 36m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 42.47, -124.21 (North America).",
  },
  {
    name: "Cedrus deodara (Pinaceae)",
    species: "Cedrus deodara",
    lat: 35.721,
    lng: 73.605,
    height: 23.3,
    circumference: 4.1,
    description:
      "Trunk diameter: 131cm. Height: 23m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.721, 73.605 (Asia).",
  },
  {
    name: "Entandrophragma candollei (Meliaceae)",
    species: "Entandrophragma candollei",
    lat: 3.551,
    lng: 13.411,
    height: 48.9,
    circumference: 4.1,
    description:
      "Trunk diameter: 131cm. Height: 49m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 3.551, 13.411 (Africa).",
  },
  {
    name: "Quararibea asterolepis (Malvaceae)",
    species: "Quararibea asterolepis",
    lat: 9.151,
    lng: -79.855,
    height: 33.6,
    circumference: 4.1,
    description:
      "Trunk diameter: 131cm. Height: 34m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.556,
    lng: -4.807,
    height: 9.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 9m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.556, -4.807 (Europe).",
  },
  {
    name: "Dryobalanops lanceolata (Dipterocarpaceae)",
    species: "Dryobalanops lanceolata",
    lat: 4.754,
    lng: 116.95,
    height: 59.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 59m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.754, 116.95 (Asia).",
  },
  {
    name: "Pseudobombax septenatum (Malvaceae)",
    species: "Pseudobombax septenatum",
    lat: 9.151,
    lng: -79.855,
    height: 35.6,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 36m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Shorea laevis (Dipterocarpaceae)",
    species: "Shorea laevis",
    lat: -1.08,
    lng: 116.97,
    height: 70.7,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 71m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: -1.08, 116.97 (Oceania).",
  },
  {
    name: "Quercus canariensis (Fagaceae)",
    species: "Quercus canariensis",
    lat: 36.532,
    lng: -5.58,
    height: 10.5,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.532, -5.58 (Europe).",
  },
  {
    name: "Pinus pinea (Pinaceae)",
    species: "Pinus pinea",
    lat: 40.355,
    lng: -4.342,
    height: 19.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 19m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 40.355, -4.342 (Europe).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 41.988,
    lng: -7.214,
    height: 12.5,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 41.988, -7.214 (Europe).",
  },
  {
    name: "Flindersia brayleyana (Rutaceae)",
    species: "Flindersia brayleyana",
    lat: -17.12,
    lng: 145.632,
    height: 36.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 36m. Family: Rutaceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Dinizia excelsa (Fabaceae)",
    species: "Dinizia excelsa",
    lat: -9.17,
    lng: -62.98,
    height: 71.5,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 72m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -9.17, -62.98 (unknown).",
  },
  {
    name: "Quercus faginea (Fagaceae)",
    species: "Quercus faginea",
    lat: 42.367,
    lng: -0.328,
    height: 11.5,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.367, -0.328 (Europe).",
  },
  {
    name: "Acer velutinum (Sapindaceae)",
    species: "Acer velutinum",
    lat: 36.551,
    lng: 51.627,
    height: 35.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 35m. Family: Sapindaceae. Recorded in the Tallo global tree database. Location: 36.551, 51.627 (Africa).",
  },
  {
    name: "Swietenia macrophylla (Meliaceae)",
    species: "Swietenia macrophylla",
    lat: -10.95,
    lng: -69.58,
    height: 46.7,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 47m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: -10.95, -69.58 (South America).",
  },
  {
    name: "Picea smithiana (Pinaceae)",
    species: "Picea smithiana",
    lat: 36.262,
    lng: 74.246,
    height: 45.8,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 46m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 36.262, 74.246 (Asia).",
  },
  {
    name: "Amphimas pterocarpoides (Fabaceae)",
    species: "Amphimas pterocarpoides",
    lat: 2.333,
    lng: 17.533,
    height: 44.6,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 45m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Dialium pachyphyllum (Fabaceae)",
    species: "Dialium pachyphyllum",
    lat: -0.82,
    lng: 13.285,
    height: 46.3,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 46m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Alstonia boonei (Apocynaceae)",
    species: "Alstonia boonei",
    lat: 3.08,
    lng: 13.56,
    height: 37.9,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 38m. Family: Apocynaceae. Recorded in the Tallo global tree database. Location: 3.08, 13.56 (Africa).",
  },
  {
    name: "Parkia gigantocarpa (Fabaceae)",
    species: "Parkia gigantocarpa",
    lat: -6.41,
    lng: -52.9,
    height: 38.8,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 39m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -6.41, -52.9 (unknown).",
  },
  {
    name: "Calophyllum polyanthum (Calophyllaceae)",
    species: "Calophyllum polyanthum",
    lat: 12.54,
    lng: 75.66,
    height: 28.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 28m. Family: Calophyllaceae. Recorded in the Tallo global tree database. Location: 12.54, 75.66 (Asia).",
  },
  {
    name: "Ficus insipida (Moraceae)",
    species: "Ficus insipida",
    lat: -10.95,
    lng: -69.58,
    height: 42.1,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 42m. Family: Moraceae. Recorded in the Tallo global tree database. Location: -10.95, -69.58 (South America).",
  },
  {
    name: "Eucalyptus delegatensis (Myrtaceae)",
    species: "Eucalyptus delegatensis",
    lat: -41.311,
    lng: 147.539,
    height: 40.4,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 40m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.311, 147.539 (Oceania).",
  },
  {
    name: "Syzygium wesa (Myrtaceae)",
    species: "Syzygium wesa",
    lat: -16.523,
    lng: 145.267,
    height: 32.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 130cm. Height: 32m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -16.523, 145.267 (Oceania).",
  },
  {
    name: "Eucalyptus dalrympleana (Myrtaceae)",
    species: "Eucalyptus dalrympleana",
    lat: -36.359,
    lng: 147.585,
    height: 55.2,
    circumference: 4.1,
    description:
      "Trunk diameter: 129cm. Height: 55m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.359, 147.585 (Oceania).",
  },
  {
    name: "Brosimum alicastrum (Moraceae)",
    species: "Brosimum alicastrum",
    lat: 9.151,
    lng: -79.855,
    height: 38.4,
    circumference: 4.1,
    description:
      "Trunk diameter: 129cm. Height: 38m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Stemonocoleus micranthus (Fabaceae)",
    species: "Stemonocoleus micranthus",
    lat: 2.333,
    lng: 17.533,
    height: 39.2,
    circumference: 4.1,
    description:
      "Trunk diameter: 129cm. Height: 39m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Castanea sativa (Fagaceae)",
    species: "Castanea sativa",
    lat: 42.358,
    lng: -7.288,
    height: 20.5,
    circumference: 4.1,
    description:
      "Trunk diameter: 129cm. Height: 20m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.358, -7.288 (Europe).",
  },
  {
    name: "Parashorea malaanonan (Dipterocarpaceae)",
    species: "Parashorea malaanonan",
    lat: 4.747,
    lng: 116.97,
    height: 37.0,
    circumference: 4.1,
    description:
      "Trunk diameter: 129cm. Height: 37m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.747, 116.97 (Asia).",
  },
  {
    name: "Entandrophragma cylindricum (Meliaceae)",
    species: "Entandrophragma cylindricum",
    lat: 4.7,
    lng: 14.32,
    height: 48.2,
    circumference: 4.1,
    description:
      "Trunk diameter: 129cm. Height: 48m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 4.7, 14.32 (Africa).",
  },
  {
    name: "Piptadeniastrum africanum (Fabaceae)",
    species: "Piptadeniastrum africanum",
    lat: 5.22,
    lng: 13.41,
    height: 43.2,
    circumference: 4.0,
    description:
      "Trunk diameter: 128cm. Height: 43m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 5.22, 13.41 (Africa).",
  },
  {
    name: "Terminalia tomentosa (Combretaceae)",
    species: "Terminalia tomentosa",
    lat: 28.799,
    lng: 80.895,
    height: 22.0,
    circumference: 4.0,
    description:
      "Trunk diameter: 128cm. Height: 22m. Family: Combretaceae. Recorded in the Tallo global tree database. Location: 28.799, 80.895 (Asia).",
  },
  {
    name: "Eucalyptus microcorys (Myrtaceae)",
    species: "Eucalyptus microcorys",
    lat: -27.414,
    lng: 152.779,
    height: 22.0,
    circumference: 4.0,
    description:
      "Trunk diameter: 128cm. Height: 22m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -27.414, 152.779 (Oceania).",
  },
  {
    name: "Quercus petraea (Fagaceae)",
    species: "Quercus petraea",
    lat: 43.01,
    lng: -2.755,
    height: 20.0,
    circumference: 4.0,
    description:
      "Trunk diameter: 127cm. Height: 20m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.01, -2.755 (Europe).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 42.121,
    lng: -7.065,
    height: 19.5,
    circumference: 4.0,
    description:
      "Trunk diameter: 127cm. Height: 20m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.121, -7.065 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 42.121,
    lng: -7.065,
    height: 19.5,
    circumference: 4.0,
    description:
      "Trunk diameter: 127cm. Height: 20m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.121, -7.065 (Europe).",
  },
  {
    name: "Erythrophleum ivorense (Fabaceae)",
    species: "Erythrophleum ivorense",
    lat: 2.916,
    lng: 11.15,
    height: 34.1,
    circumference: 4.0,
    description:
      "Trunk diameter: 127cm. Height: 34m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.916, 11.15 (Africa).",
  },
  {
    name: "Dipterocarpus crinitus (Dipterocarpaceae)",
    species: "Dipterocarpus crinitus",
    lat: -1.08,
    lng: 116.97,
    height: 46.5,
    circumference: 4.0,
    description:
      "Trunk diameter: 127cm. Height: 46m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: -1.08, 116.97 (Oceania).",
  },
  {
    name: "Dipterocarpus crinitus (Dipterocarpaceae)",
    species: "Dipterocarpus crinitus",
    lat: -1.4,
    lng: 116.55,
    height: 46.5,
    circumference: 4.0,
    description:
      "Trunk diameter: 127cm. Height: 46m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: -1.4, 116.55 (Oceania).",
  },
  {
    name: "Karrabina biagiana (Cunoniaceae)",
    species: "Karrabina biagiana",
    lat: -17.12,
    lng: 145.632,
    height: 28.0,
    circumference: 4.0,
    description:
      "Trunk diameter: 127cm. Height: 28m. Family: Cunoniaceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Entandrophragma candollei (Meliaceae)",
    species: "Entandrophragma candollei",
    lat: 2.333,
    lng: 17.533,
    height: 37.6,
    circumference: 4.0,
    description:
      "Trunk diameter: 127cm. Height: 38m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Dipterocarpus humeratus (Dipterocarpaceae)",
    species: "Dipterocarpus humeratus",
    lat: 5.851,
    lng: 117.951,
    height: 43.9,
    circumference: 4.0,
    description:
      "Trunk diameter: 126cm. Height: 44m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Detarium macrocarpum (Fabaceae)",
    species: "Detarium macrocarpum",
    lat: 2.333,
    lng: 17.533,
    height: 32.9,
    circumference: 4.0,
    description:
      "Trunk diameter: 126cm. Height: 33m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Afzelia africana (Fabaceae)",
    species: "Afzelia africana",
    lat: 5.22,
    lng: 13.41,
    height: 30.0,
    circumference: 4.0,
    description:
      "Trunk diameter: 126cm. Height: 30m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 5.22, 13.41 (Africa).",
  },
  {
    name: "Quercus robur (Fagaceae)",
    species: "Quercus robur",
    lat: 42.935,
    lng: -2.081,
    height: 13.0,
    circumference: 4.0,
    description:
      "Trunk diameter: 126cm. Height: 13m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.935, -2.081 (Europe).",
  },
  {
    name: "Milicia excelsa (Moraceae)",
    species: "Milicia excelsa",
    lat: 4.7,
    lng: 14.32,
    height: 55.6,
    circumference: 4.0,
    description:
      "Trunk diameter: 126cm. Height: 56m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 4.7, 14.32 (Africa).",
  },
  {
    name: "Isolona hexaloba (Annonaceae)",
    species: "Isolona hexaloba",
    lat: -0.82,
    lng: 9.46,
    height: null,
    circumference: 4.0,
    description:
      "Trunk diameter: 126cm. Family: Annonaceae. Recorded in the Tallo global tree database. Location: -0.82, 9.46 (Africa).",
  },
  {
    name: "Dipterocarpus confertus (Dipterocarpaceae)",
    species: "Dipterocarpus confertus",
    lat: 5.851,
    lng: 117.951,
    height: 52.4,
    circumference: 4.0,
    description:
      "Trunk diameter: 126cm. Height: 52m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 42.108,
    lng: -2.286,
    height: 15.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 126cm. Height: 15m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.108, -2.286 (Europe).",
  },
  {
    name: "Erismadelphus exsul (Vochysiaceae)",
    species: "Erismadelphus exsul",
    lat: 3.09,
    lng: 13.56,
    height: 37.2,
    circumference: 3.9,
    description:
      "Trunk diameter: 126cm. Height: 37m. Family: Vochysiaceae. Recorded in the Tallo global tree database. Location: 3.09, 13.56 (Africa).",
  },
  {
    name: "Quercus robur (Fagaceae)",
    species: "Quercus robur",
    lat: 42.911,
    lng: -7.481,
    height: 19.5,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 20m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.911, -7.481 (Europe).",
  },
  {
    name: "Aspidosperma parvifolium (Apocynaceae)",
    species: "Aspidosperma parvifolium",
    lat: -6.41,
    lng: -52.9,
    height: 41.1,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 41m. Family: Apocynaceae. Recorded in the Tallo global tree database. Location: -6.41, -52.9 (unknown).",
  },
  {
    name: "Fagus orientalis (Fagaceae)",
    species: "Fagus orientalis",
    lat: 36.549,
    lng: 51.625,
    height: 37.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 37m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.549, 51.625 (Africa).",
  },
  {
    name: "Fagus orientalis (Fagaceae)",
    species: "Fagus orientalis",
    lat: 36.552,
    lng: 51.627,
    height: 30.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 30m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.552, 51.627 (Africa).",
  },
  {
    name: "Fagus orientalis (Fagaceae)",
    species: "Fagus orientalis",
    lat: 37.741,
    lng: 48.848,
    height: 33.8,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 34m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 37.741, 48.848 (Africa).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.835,
    lng: -6.272,
    height: 9.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 9m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.835, -6.272 (Europe).",
  },
  {
    name: "Dipteryx odorata (Fabaceae)",
    species: "Dipteryx odorata",
    lat: -1.64,
    lng: -56.27,
    height: 46.1,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 46m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -1.64, -56.27 (unknown).",
  },
  {
    name: "Sloanea terniflora (Elaeocarpaceae)",
    species: "Sloanea terniflora",
    lat: 9.151,
    lng: -79.855,
    height: 36.4,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 36m. Family: Elaeocarpaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Eucalyptus polyanthemos (Myrtaceae)",
    species: "Eucalyptus polyanthemos",
    lat: -36.0,
    lng: 147.0,
    height: 17.9,
    circumference: 3.9,
    description:
      "Trunk diameter: 125cm. Height: 18m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.0, 147.0 (Oceania).",
  },
  {
    name: "Parashorea malaanonan (Dipterocarpaceae)",
    species: "Parashorea malaanonan",
    lat: 4.957,
    lng: 117.792,
    height: 54.8,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 55m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.957, 117.792 (Asia).",
  },
  {
    name: "Terminalia superba (Combretaceae)",
    species: "Terminalia superba",
    lat: 3.93,
    lng: 14.92,
    height: 52.7,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 53m. Family: Combretaceae. Recorded in the Tallo global tree database. Location: 3.93, 14.92 (Africa).",
  },
  {
    name: "Pycnanthus angolensis (Myristicaceae)",
    species: "Pycnanthus angolensis",
    lat: 4.7,
    lng: 14.32,
    height: 34.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 34m. Family: Myristicaceae. Recorded in the Tallo global tree database. Location: 4.7, 14.32 (Africa).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 40.596,
    lng: -5.104,
    height: 4.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 4m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.596, -5.104 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 40.596,
    lng: -5.104,
    height: 4.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 4m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.596, -5.104 (Europe).",
  },
  {
    name: "Quercus faginea (Fagaceae)",
    species: "Quercus faginea",
    lat: 36.785,
    lng: -5.533,
    height: 10.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.785, -5.533 (Europe).",
  },
  {
    name: "Shorea stenoptera (Dipterocarpaceae)",
    species: "Shorea stenoptera",
    lat: 0.13,
    lng: 110.6,
    height: 27.3,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 27m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 0.13, 110.6 (Asia).",
  },
  {
    name: "Aspidosperma excelsum (Apocynaceae)",
    species: "Aspidosperma excelsum",
    lat: -3.75,
    lng: -48.47,
    height: 42.5,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 42m. Family: Apocynaceae. Recorded in the Tallo global tree database. Location: -3.75, -48.47 (unknown).",
  },
  {
    name: "Tilia dasystyla (Malvaceae)",
    species: "Tilia dasystyla",
    lat: 37.658,
    lng: 48.859,
    height: 35.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 35m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 37.658, 48.859 (Africa).",
  },
  {
    name: "Picea smithiana (Pinaceae)",
    species: "Picea smithiana",
    lat: 35.536,
    lng: 74.308,
    height: 60.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 60m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.536, 74.308 (Asia).",
  },
  {
    name: "Picea smithiana (Pinaceae)",
    species: "Picea smithiana",
    lat: 35.692,
    lng: 73.796,
    height: 45.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 45m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.692, 73.796 (Asia).",
  },
  {
    name: "Xanthophyllum octandrum (Polygalaceae)",
    species: "Xanthophyllum octandrum",
    lat: -17.12,
    lng: 145.632,
    height: 37.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 37m. Family: Polygalaceae. Recorded in the Tallo global tree database. Location: -17.12, 145.632 (Oceania).",
  },
  {
    name: "Bertholletia excelsa (Lecythidaceae)",
    species: "Bertholletia excelsa",
    lat: -12.838,
    lng: -69.296,
    height: 34.1,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 34m. Family: Lecythidaceae. Recorded in the Tallo global tree database. Location: -12.838, -69.296 (South America).",
  },
  {
    name: "Quercus canariensis (Fagaceae)",
    species: "Quercus canariensis",
    lat: 36.561,
    lng: -5.481,
    height: 13.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 124cm. Height: 13m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.561, -5.481 (Europe).",
  },
  {
    name: "Lophira alata (Ochnaceae)",
    species: "Lophira alata",
    lat: 2.916,
    lng: 11.15,
    height: 37.8,
    circumference: 3.9,
    description:
      "Trunk diameter: 123cm. Height: 38m. Family: Ochnaceae. Recorded in the Tallo global tree database. Location: 2.916, 11.15 (Africa).",
  },
  {
    name: "Quercus suber (Fagaceae)",
    species: "Quercus suber",
    lat: 41.176,
    lng: -5.766,
    height: 6.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 123cm. Height: 6m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 41.176, -5.766 (Europe).",
  },
  {
    name: "Cedrus deodara (Pinaceae)",
    species: "Cedrus deodara",
    lat: 35.812,
    lng: 73.682,
    height: 27.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 123cm. Height: 27m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.812, 73.682 (Asia).",
  },
  {
    name: "Albizia schimperiana (Fabaceae)",
    species: "Albizia schimperiana",
    lat: -3.266,
    lng: 37.307,
    height: 25.8,
    circumference: 3.9,
    description:
      "Trunk diameter: 123cm. Height: 26m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -3.266, 37.307 (Africa).",
  },
  {
    name: "Canarium schweinfurtii (Burseraceae)",
    species: "Canarium schweinfurtii",
    lat: 3.551,
    lng: 13.411,
    height: 49.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 123cm. Height: 49m. Family: Burseraceae. Recorded in the Tallo global tree database. Location: 3.551, 13.411 (Africa).",
  },
  {
    name: "Aucoumea klaineana (Burseraceae)",
    species: "Aucoumea klaineana",
    lat: -0.84,
    lng: 9.45,
    height: 39.2,
    circumference: 3.9,
    description:
      "Trunk diameter: 123cm. Height: 39m. Family: Burseraceae. Recorded in the Tallo global tree database. Location: -0.84, 9.45 (Africa).",
  },
  {
    name: "Ficus insipida (Moraceae)",
    species: "Ficus insipida",
    lat: 18.57,
    lng: -95.13,
    height: 35.0,
    circumference: 3.9,
    description:
      "Trunk diameter: 123cm. Height: 35m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 18.57, -95.13 (North America).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 43.097,
    lng: -6.776,
    height: 22.5,
    circumference: 3.8,
    description:
      "Trunk diameter: 122cm. Height: 22m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.097, -6.776 (Europe).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 43.144,
    lng: -2.299,
    height: 28.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 122cm. Height: 28m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.144, -2.299 (Europe).",
  },
  {
    name: "Trilepisium madagascariense (Moraceae)",
    species: "Trilepisium madagascariense",
    lat: 3.93,
    lng: 14.92,
    height: 46.7,
    circumference: 3.8,
    description:
      "Trunk diameter: 122cm. Height: 47m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 3.93, 14.92 (Africa).",
  },
  {
    name: "Cylicodiscus gabunensis (Fabaceae)",
    species: "Cylicodiscus gabunensis",
    lat: 4.7,
    lng: 14.32,
    height: 45.9,
    circumference: 3.8,
    description:
      "Trunk diameter: 122cm. Height: 46m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 4.7, 14.32 (Africa).",
  },
  {
    name: "Cedrus deodara (Pinaceae)",
    species: "Cedrus deodara",
    lat: 35.303,
    lng: 74.076,
    height: 19.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 122cm. Height: 19m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.303, 74.076 (Asia).",
  },
  {
    name: "Eucalyptus viminalis (Myrtaceae)",
    species: "Eucalyptus viminalis",
    lat: -37.64,
    lng: 146.496,
    height: 42.1,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 42m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.64, 146.496 (Oceania).",
  },
  {
    name: "Quercus faginea (Fagaceae)",
    species: "Quercus faginea",
    lat: 42.988,
    lng: -1.246,
    height: 15.5,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 16m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.988, -1.246 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 37.109,
    lng: -2.854,
    height: 18.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 18m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 37.109, -2.854 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.176,
    lng: -4.867,
    height: 8.5,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 8m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.176, -4.867 (Europe).",
  },
  {
    name: "Quercus suber (Fagaceae)",
    species: "Quercus suber",
    lat: 37.928,
    lng: -5.606,
    height: 12.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 37.928, -5.606 (Europe).",
  },
  {
    name: "Acer velutinum (Sapindaceae)",
    species: "Acer velutinum",
    lat: 37.689,
    lng: 48.746,
    height: 30.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 30m. Family: Sapindaceae. Recorded in the Tallo global tree database. Location: 37.689, 48.746 (Africa).",
  },
  {
    name: "Pinus pinea (Pinaceae)",
    species: "Pinus pinea",
    lat: 40.508,
    lng: -4.357,
    height: 21.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 21m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 40.508, -4.357 (Europe).",
  },
  {
    name: "Alstonia boonei (Apocynaceae)",
    species: "Alstonia boonei",
    lat: 3.317,
    lng: 17.267,
    height: 38.9,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 39m. Family: Apocynaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Eucalyptus muelleriana (Myrtaceae)",
    species: "Eucalyptus muelleriana",
    lat: -37.565,
    lng: 146.675,
    height: 27.5,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 28m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.565, 146.675 (Oceania).",
  },
  {
    name: "Vateria indica (Dipterocarpaceae)",
    species: "Vateria indica",
    lat: 12.54,
    lng: 75.66,
    height: 36.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 121cm. Height: 36m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 12.54, 75.66 (Asia).",
  },
  {
    name: "Eucalyptus delegatensis (Myrtaceae)",
    species: "Eucalyptus delegatensis",
    lat: -37.252,
    lng: 147.931,
    height: 43.2,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 43m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.252, 147.931 (Oceania).",
  },
  {
    name: "Parashorea tomentella (Dipterocarpaceae)",
    species: "Parashorea tomentella",
    lat: 5.851,
    lng: 117.951,
    height: 65.3,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 65m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 5.851, 117.951 (Asia).",
  },
  {
    name: "Caryocar glabrum (Caryocaraceae)",
    species: "Caryocar glabrum",
    lat: -3.75,
    lng: -48.47,
    height: 27.3,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 27m. Family: Caryocaraceae. Recorded in the Tallo global tree database. Location: -3.75, -48.47 (unknown).",
  },
  {
    name: "Argyrodendron peralatum (Malvaceae)",
    species: "Argyrodendron peralatum",
    lat: -17.409,
    lng: 145.771,
    height: 44.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 44m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: -17.409, 145.771 (Oceania).",
  },
  {
    name: "Terminalia superba (Combretaceae)",
    species: "Terminalia superba",
    lat: 4.7,
    lng: 14.32,
    height: 42.4,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 42m. Family: Combretaceae. Recorded in the Tallo global tree database. Location: 4.7, 14.32 (Africa).",
  },
  {
    name: "Carpinus betulus (Betulaceae)",
    species: "Carpinus betulus",
    lat: 36.552,
    lng: 51.627,
    height: 27.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 27m. Family: Betulaceae. Recorded in the Tallo global tree database. Location: 36.552, 51.627 (Africa).",
  },
  {
    name: "Couratari stellata (Lecythidaceae)",
    species: "Couratari stellata",
    lat: -9.17,
    lng: -62.98,
    height: 60.4,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 60m. Family: Lecythidaceae. Recorded in the Tallo global tree database. Location: -9.17, -62.98 (unknown).",
  },
  {
    name: "Corymbia maculata (Myrtaceae)",
    species: "Corymbia maculata",
    lat: -35.42,
    lng: 150.3,
    height: 44.4,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 44m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -35.42, 150.3 (Oceania).",
  },
  {
    name: "Calophyllum longifolium (Calophyllaceae)",
    species: "Calophyllum longifolium",
    lat: 9.151,
    lng: -79.855,
    height: 29.9,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 30m. Family: Calophyllaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Euxylophora paraensis (Rutaceae)",
    species: "Euxylophora paraensis",
    lat: -3.75,
    lng: -48.47,
    height: 38.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 38m. Family: Rutaceae. Recorded in the Tallo global tree database. Location: -3.75, -48.47 (unknown).",
  },
  {
    name: "Retrophyllum rospigliosii (Podocarpaceae)",
    species: "Retrophyllum rospigliosii",
    lat: -13.047,
    lng: -71.542,
    height: 34.3,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 34m. Family: Podocarpaceae. Recorded in the Tallo global tree database. Location: -13.047, -71.542 (South America).",
  },
  {
    name: "Petersianthus macrocarpus (Lecythidaceae)",
    species: "Petersianthus macrocarpus",
    lat: 2.333,
    lng: 17.533,
    height: 42.2,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 42m. Family: Lecythidaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Eucalyptus obliqua (Myrtaceae)",
    species: "Eucalyptus obliqua",
    lat: -41.045,
    lng: 145.567,
    height: 43.0,
    circumference: 3.8,
    description:
      "Trunk diameter: 120cm. Height: 43m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.045, 145.567 (Oceania).",
  },
  {
    name: "Pterocarpus soyauxii (Fabaceae)",
    species: "Pterocarpus soyauxii",
    lat: 2.916,
    lng: 11.15,
    height: 37.8,
    circumference: 3.7,
    description:
      "Trunk diameter: 119cm. Height: 38m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.916, 11.15 (Africa).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 40.632,
    lng: -5.909,
    height: 13.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 119cm. Height: 14m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.632, -5.909 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 40.632,
    lng: -5.909,
    height: 13.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 119cm. Height: 14m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.632, -5.909 (Europe).",
  },
  {
    name: "Cedrus deodara (Pinaceae)",
    species: "Cedrus deodara",
    lat: 35.642,
    lng: 73.991,
    height: 24.8,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 25m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.642, 73.991 (Asia).",
  },
  {
    name: "Piptadeniastrum africanum (Fabaceae)",
    species: "Piptadeniastrum africanum",
    lat: 2.333,
    lng: 17.533,
    height: 34.8,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 35m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 41.912,
    lng: -3.205,
    height: 18.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 18m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 41.912, -3.205 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 41.912,
    lng: -3.205,
    height: 18.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 18m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 41.912, -3.205 (Europe).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 42.443,
    lng: -0.106,
    height: 15.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 15m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.443, -0.106 (Europe).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 43.327,
    lng: -4.973,
    height: 25.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 26m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.327, -4.973 (Europe).",
  },
  {
    name: "Shorea parvifolia (Dipterocarpaceae)",
    species: "Shorea parvifolia",
    lat: 4.747,
    lng: 116.97,
    height: 47.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 47m. Family: Dipterocarpaceae. Recorded in the Tallo global tree database. Location: 4.747, 116.97 (Asia).",
  },
  {
    name: "Xanthostemon chrysanthus (Myrtaceae)",
    species: "Xanthostemon chrysanthus",
    lat: -13.739,
    lng: 143.348,
    height: 23.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 23m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -13.739, 143.348 (Oceania).",
  },
  {
    name: "Abies pindrow (Pinaceae)",
    species: "Abies pindrow",
    lat: 35.69,
    lng: 73.79,
    height: 33.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 33m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.69, 73.79 (Asia).",
  },
  {
    name: "Duboscia macrocarpa (Malvaceae)",
    species: "Duboscia macrocarpa",
    lat: 3.92,
    lng: 14.93,
    height: 30.7,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 31m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 3.92, 14.93 (Africa).",
  },
  {
    name: "Couratari guianensis (Lecythidaceae)",
    species: "Couratari guianensis",
    lat: -9.17,
    lng: -62.98,
    height: 52.3,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 52m. Family: Lecythidaceae. Recorded in the Tallo global tree database. Location: -9.17, -62.98 (unknown).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 41.423,
    lng: -6.009,
    height: 7.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 7m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 41.423, -6.009 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.193,
    lng: -4.328,
    height: 7.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 8m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.193, -4.328 (Europe).",
  },
  {
    name: "Flindersia pimenteliana (Rutaceae)",
    species: "Flindersia pimenteliana",
    lat: -17.309,
    lng: 145.437,
    height: 25.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 25m. Family: Rutaceae. Recorded in the Tallo global tree database. Location: -17.309, 145.437 (Oceania).",
  },
  {
    name: "Pinus pinea (Pinaceae)",
    species: "Pinus pinea",
    lat: 40.404,
    lng: -3.943,
    height: 22.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 22m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 40.404, -3.943 (Europe).",
  },
  {
    name: "Caryocar glabrum (Caryocaraceae)",
    species: "Caryocar glabrum",
    lat: -5.3,
    lng: -53.5,
    height: 38.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 38m. Family: Caryocaraceae. Recorded in the Tallo global tree database. Location: -5.3, -53.5 (unknown).",
  },
  {
    name: "Ficus colubrinae (Moraceae)",
    species: "Ficus colubrinae",
    lat: 18.57,
    lng: -95.13,
    height: 29.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 118cm. Height: 29m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 18.57, -95.13 (North America).",
  },
  {
    name: "Manilkara mabokeensis (Sapotaceae)",
    species: "Manilkara mabokeensis",
    lat: 2.333,
    lng: 17.533,
    height: 37.2,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 37m. Family: Sapotaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Copaifera reticulata (Fabaceae)",
    species: "Copaifera reticulata",
    lat: -10.95,
    lng: -69.58,
    height: 33.8,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 34m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -10.95, -69.58 (South America).",
  },
  {
    name: "Hymenaea courbaril (Fabaceae)",
    species: "Hymenaea courbaril",
    lat: -3.75,
    lng: -48.47,
    height: 47.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 47m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -3.75, -48.47 (unknown).",
  },
  {
    name: "Quercus stellata (Fagaceae)",
    species: "Quercus stellata",
    lat: 33.404,
    lng: -97.571,
    height: null,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 33.404, -97.571 (North America).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 41.92,
    lng: -2.578,
    height: 12.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 41.92, -2.578 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 41.92,
    lng: -2.578,
    height: 12.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 41.92, -2.578 (Europe).",
  },
  {
    name: "Quercus canariensis (Fagaceae)",
    species: "Quercus canariensis",
    lat: 36.502,
    lng: -5.278,
    height: 13.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 13m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.502, -5.278 (Europe).",
  },
  {
    name: "Ricinodendron heudelotii (Euphorbiaceae)",
    species: "Ricinodendron heudelotii",
    lat: 3.92,
    lng: 14.93,
    height: 41.6,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 42m. Family: Euphorbiaceae. Recorded in the Tallo global tree database. Location: 3.92, 14.93 (Africa).",
  },
  {
    name: "Eucalyptus populnea (Myrtaceae)",
    species: "Eucalyptus populnea",
    lat: -25.4,
    lng: 148.6,
    height: 23.2,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 23m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -25.4, 148.6 (Oceania).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 42.974,
    lng: -2.571,
    height: 18.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 18m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.974, -2.571 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 38.43,
    lng: -6.732,
    height: 7.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 7m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 38.43, -6.732 (Europe).",
  },
  {
    name: "Eucalyptus falciformis (Myrtaceae)",
    species: "Eucalyptus falciformis",
    lat: -37.92,
    lng: 141.405,
    height: 17.2,
    circumference: 3.7,
    description:
      "Trunk diameter: 117cm. Height: 17m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -37.92, 141.405 (Oceania).",
  },
  {
    name: "Eucalyptus camaldulensis (Myrtaceae)",
    species: "Eucalyptus camaldulensis",
    lat: -36.063,
    lng: 144.867,
    height: 19.6,
    circumference: 3.7,
    description:
      "Trunk diameter: 116cm. Height: 20m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.063, 144.867 (Oceania).",
  },
  {
    name: "Eucalyptus delegatensis (Myrtaceae)",
    species: "Eucalyptus delegatensis",
    lat: -41.67,
    lng: 146.502,
    height: 36.1,
    circumference: 3.7,
    description:
      "Trunk diameter: 116cm. Height: 36m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -41.67, 146.502 (Oceania).",
  },
  {
    name: "Ganophyllum giganteum (Sapindaceae)",
    species: "Ganophyllum giganteum",
    lat: 3.317,
    lng: 17.267,
    height: 28.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 116cm. Height: 28m. Family: Sapindaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Fagus sylvatica (Fagaceae)",
    species: "Fagus sylvatica",
    lat: 43.292,
    lng: -4.282,
    height: 28.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 116cm. Height: 28m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 43.292, -4.282 (Europe).",
  },
  {
    name: "Quercus faginea (Fagaceae)",
    species: "Quercus faginea",
    lat: 40.414,
    lng: -2.21,
    height: 8.0,
    circumference: 3.7,
    description:
      "Trunk diameter: 116cm. Height: 8m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.414, -2.21 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 39.838,
    lng: -5.162,
    height: 6.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 116cm. Height: 6m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 39.838, -5.162 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.907,
    lng: -6.27,
    height: 9.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 116cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.907, -6.27 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 39.078,
    lng: -6.665,
    height: 7.5,
    circumference: 3.7,
    description:
      "Trunk diameter: 116cm. Height: 8m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 39.078, -6.665 (Europe).",
  },
  {
    name: "Eucalyptus dalrympleana (Myrtaceae)",
    species: "Eucalyptus dalrympleana",
    lat: -36.602,
    lng: 147.996,
    height: 34.3,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 34m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.602, 147.996 (Oceania).",
  },
  {
    name: "Acer velutinum (Sapindaceae)",
    species: "Acer velutinum",
    lat: 37.644,
    lng: 48.828,
    height: 42.4,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 42m. Family: Sapindaceae. Recorded in the Tallo global tree database. Location: 37.644, 48.828 (Africa).",
  },
  {
    name: "Picea smithiana (Pinaceae)",
    species: "Picea smithiana",
    lat: 36.259,
    lng: 74.254,
    height: 36.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 36m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 36.259, 74.254 (Asia).",
  },
  {
    name: "Klainedoxa gabonensis (Irvingiaceae)",
    species: "Klainedoxa gabonensis",
    lat: 3.317,
    lng: 17.267,
    height: 31.6,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 32m. Family: Irvingiaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Eucalyptus guilfoylei (Myrtaceae)",
    species: "Eucalyptus guilfoylei",
    lat: -34.996,
    lng: 116.65,
    height: 44.6,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 45m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.996, 116.65 (Oceania).",
  },
  {
    name: "Taxodium distichum (Cupressaceae)",
    species: "Taxodium distichum",
    lat: 32.542,
    lng: -87.802,
    height: 22.9,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 23m. Family: Cupressaceae. Recorded in the Tallo global tree database. Location: 32.542, -87.802 (North America).",
  },
  {
    name: "Milicia excelsa (Moraceae)",
    species: "Milicia excelsa",
    lat: 3.551,
    lng: 13.411,
    height: 44.5,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 44m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 3.551, 13.411 (Africa).",
  },
  {
    name: "Picea smithiana (Pinaceae)",
    species: "Picea smithiana",
    lat: 35.462,
    lng: 74.769,
    height: 31.1,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 31m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.462, 74.769 (Asia).",
  },
  {
    name: "Caryocar glabrum (Caryocaraceae)",
    species: "Caryocar glabrum",
    lat: -2.95,
    lng: -59.97,
    height: 59.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 59m. Family: Caryocaraceae. Recorded in the Tallo global tree database. Location: -2.95, -59.97 (unknown).",
  },
  {
    name: "Agathis atropurpurea (Araucariaceae)",
    species: "Agathis atropurpurea",
    lat: -17.088,
    lng: 145.592,
    height: 38.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 38m. Family: Araucariaceae. Recorded in the Tallo global tree database. Location: -17.088, 145.592 (Oceania).",
  },
  {
    name: "Pentaclethra macrophylla (Fabaceae)",
    species: "Pentaclethra macrophylla",
    lat: 3.3,
    lng: 13.81,
    height: 36.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 36m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 3.3, 13.81 (Africa).",
  },
  {
    name: "Apuleia leiocarpa (Fabaceae)",
    species: "Apuleia leiocarpa",
    lat: -3.02,
    lng: -54.96,
    height: 51.4,
    circumference: 3.6,
    description:
      "Trunk diameter: 116cm. Height: 51m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -3.02, -54.96 (unknown).",
  },
  {
    name: "Eucalyptus cypellocarpa (Myrtaceae)",
    species: "Eucalyptus cypellocarpa",
    lat: -36.759,
    lng: 149.436,
    height: 34.2,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 34m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.759, 149.436 (Oceania).",
  },
  {
    name: "Quercus canariensis (Fagaceae)",
    species: "Quercus canariensis",
    lat: 36.38,
    lng: -5.508,
    height: 16.5,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 16m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.38, -5.508 (Europe).",
  },
  {
    name: "Fagus orientalis (Fagaceae)",
    species: "Fagus orientalis",
    lat: 37.692,
    lng: 48.69,
    height: 32.5,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 32m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 37.692, 48.69 (Africa).",
  },
  {
    name: "Pterocarpus soyauxii (Fabaceae)",
    species: "Pterocarpus soyauxii",
    lat: 3.317,
    lng: 17.267,
    height: 32.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 32m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 3.317, 17.267 (Africa).",
  },
  {
    name: "Cavanillesia umbellata (Malvaceae)",
    species: "Cavanillesia umbellata",
    lat: -10.95,
    lng: -69.58,
    height: 27.7,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 28m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: -10.95, -69.58 (South America).",
  },
  {
    name: "Quercus castaneifolia (Fagaceae)",
    species: "Quercus castaneifolia",
    lat: 36.548,
    lng: 51.626,
    height: 32.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 32m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 36.548, 51.626 (Africa).",
  },
  {
    name: "Ficus fergusonii (Moraceae)",
    species: "Ficus fergusonii",
    lat: 8.326,
    lng: 80.514,
    height: 18.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 18m. Family: Moraceae. Recorded in the Tallo global tree database. Location: 8.326, 80.514 (Asia).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 42.272,
    lng: -3.315,
    height: 17.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 17m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.272, -3.315 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 42.272,
    lng: -3.315,
    height: 17.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 17m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.272, -3.315 (Europe).",
  },
  {
    name: "Luehea seemannii (Malvaceae)",
    species: "Luehea seemannii",
    lat: 9.151,
    lng: -79.855,
    height: 34.1,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 34m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Lophira alata (Ochnaceae)",
    species: "Lophira alata",
    lat: -0.79,
    lng: 10.6,
    height: 46.6,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 47m. Family: Ochnaceae. Recorded in the Tallo global tree database. Location: -0.79, 10.6 (Africa).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 37.966,
    lng: -6.109,
    height: 13.5,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 14m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 37.966, -6.109 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 38.658,
    lng: -5.597,
    height: 6.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 6m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 38.658, -5.597 (Europe).",
  },
  {
    name: "Apeiba membranacea (Malvaceae)",
    species: "Apeiba membranacea",
    lat: 9.151,
    lng: -79.855,
    height: 32.4,
    circumference: 3.6,
    description:
      "Trunk diameter: 115cm. Height: 32m. Family: Malvaceae. Recorded in the Tallo global tree database. Location: 9.151, -79.855 (North America).",
  },
  {
    name: "Dysoxylum pettigrewianum (Meliaceae)",
    species: "Dysoxylum pettigrewianum",
    lat: -17.286,
    lng: 145.572,
    height: 41.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 41m. Family: Meliaceae. Recorded in the Tallo global tree database. Location: -17.286, 145.572 (Oceania).",
  },
  {
    name: "Flindersia brayleyana (Rutaceae)",
    species: "Flindersia brayleyana",
    lat: -17.35,
    lng: 145.479,
    height: 26.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 26m. Family: Rutaceae. Recorded in the Tallo global tree database. Location: -17.35, 145.479 (Oceania).",
  },
  {
    name: "Cedrelinga cateniformis (Fabaceae)",
    species: "Cedrelinga cateniformis",
    lat: -12.838,
    lng: -69.296,
    height: 40.3,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 40m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -12.838, -69.296 (South America).",
  },
  {
    name: "Fagus orientalis (Fagaceae)",
    species: "Fagus orientalis",
    lat: 37.642,
    lng: 48.863,
    height: 36.2,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 36m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 37.642, 48.863 (Africa).",
  },
  {
    name: "Stemonocoleus micranthus (Fabaceae)",
    species: "Stemonocoleus micranthus",
    lat: -0.82,
    lng: 13.285,
    height: 43.1,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 43m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -0.82, 13.285 (Africa).",
  },
  {
    name: "Newtonia buchananii (Fabaceae)",
    species: "Newtonia buchananii",
    lat: -3.249,
    lng: 37.408,
    height: 45.3,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 45m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: -3.249, 37.408 (Africa).",
  },
  {
    name: "Angophora costata (Myrtaceae)",
    species: "Angophora costata",
    lat: -34.086,
    lng: 151.138,
    height: 22.4,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 22m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -34.086, 151.138 (Oceania).",
  },
  {
    name: "Eucalyptus resinifera (Myrtaceae)",
    species: "Eucalyptus resinifera",
    lat: -17.108,
    lng: 145.553,
    height: 26.4,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 26m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -17.108, 145.553 (Oceania).",
  },
  {
    name: "Pterocarpus soyauxii (Fabaceae)",
    species: "Pterocarpus soyauxii",
    lat: 2.333,
    lng: 17.533,
    height: 35.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 35m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Agathis robusta (Araucariaceae)",
    species: "Agathis robusta",
    lat: -16.28,
    lng: 145.102,
    height: 40.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 114cm. Height: 40m. Family: Araucariaceae. Recorded in the Tallo global tree database. Location: -16.28, 145.102 (Oceania).",
  },
  {
    name: "Anopyxis klaineana (Rhizophoraceae)",
    species: "Anopyxis klaineana",
    lat: 2.333,
    lng: 17.533,
    height: 43.6,
    circumference: 3.6,
    description:
      "Trunk diameter: 113cm. Height: 44m. Family: Rhizophoraceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Eucalyptus delegatensis (Myrtaceae)",
    species: "Eucalyptus delegatensis",
    lat: -36.781,
    lng: 148.026,
    height: 43.8,
    circumference: 3.6,
    description:
      "Trunk diameter: 113cm. Height: 44m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -36.781, 148.026 (Oceania).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.724,
    lng: -6.159,
    height: 9.5,
    circumference: 3.6,
    description:
      "Trunk diameter: 113cm. Height: 10m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.724, -6.159 (Europe).",
  },
  {
    name: "Aspidosperma excelsum (Apocynaceae)",
    species: "Aspidosperma excelsum",
    lat: -1.64,
    lng: -56.27,
    height: 38.9,
    circumference: 3.6,
    description:
      "Trunk diameter: 113cm. Height: 39m. Family: Apocynaceae. Recorded in the Tallo global tree database. Location: -1.64, -56.27 (unknown).",
  },
  {
    name: "Flindersia brayleyana (Rutaceae)",
    species: "Flindersia brayleyana",
    lat: -16.523,
    lng: 145.267,
    height: 35.0,
    circumference: 3.6,
    description:
      "Trunk diameter: 113cm. Height: 35m. Family: Rutaceae. Recorded in the Tallo global tree database. Location: -16.523, 145.267 (Oceania).",
  },
  {
    name: "Eucalyptus dalrympleana (Myrtaceae)",
    species: "Eucalyptus dalrympleana",
    lat: -35.1,
    lng: 148.7,
    height: 47.6,
    circumference: 3.5,
    description:
      "Trunk diameter: 113cm. Height: 48m. Family: Myrtaceae. Recorded in the Tallo global tree database. Location: -35.1, 148.7 (Oceania).",
  },
  {
    name: "Quercus pyrenaica (Fagaceae)",
    species: "Quercus pyrenaica",
    lat: 42.974,
    lng: -2.779,
    height: 20.5,
    circumference: 3.5,
    description:
      "Trunk diameter: 113cm. Height: 20m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.974, -2.779 (Europe).",
  },
  {
    name: "Quercus pubescens (Fagaceae)",
    species: "Quercus pubescens",
    lat: 42.974,
    lng: -2.779,
    height: 20.5,
    circumference: 3.5,
    description:
      "Trunk diameter: 113cm. Height: 20m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 42.974, -2.779 (Europe).",
  },
  {
    name: "Quercus ilex (Fagaceae)",
    species: "Quercus ilex",
    lat: 40.216,
    lng: -4.657,
    height: 12.0,
    circumference: 3.5,
    description:
      "Trunk diameter: 113cm. Height: 12m. Family: Fagaceae. Recorded in the Tallo global tree database. Location: 40.216, -4.657 (Europe).",
  },
  {
    name: "Pinus wallichiana (Pinaceae)",
    species: "Pinus wallichiana",
    lat: 35.343,
    lng: 74.791,
    height: 20.0,
    circumference: 3.5,
    description:
      "Trunk diameter: 113cm. Height: 20m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 35.343, 74.791 (Asia).",
  },
  {
    name: "Pinus pinaster (Pinaceae)",
    species: "Pinus pinaster",
    lat: 40.554,
    lng: -4.276,
    height: 23.0,
    circumference: 3.5,
    description:
      "Trunk diameter: 113cm. Height: 23m. Family: Pinaceae. Recorded in the Tallo global tree database. Location: 40.554, -4.276 (Europe).",
  },
  {
    name: "Albizia ferruginea (Fabaceae)",
    species: "Albizia ferruginea",
    lat: 2.333,
    lng: 17.533,
    height: 38.0,
    circumference: 3.5,
    description:
      "Trunk diameter: 113cm. Height: 38m. Family: Fabaceae. Recorded in the Tallo global tree database. Location: 2.333, 17.533 (Africa).",
  },
  {
    name: "Liriodendron tulipifera (Magnoliaceae)",
    species: "Liriodendron tulipifera",
    lat: 38.893,
    lng: -78.136,
    height: 31.4,
    circumference: 3.5,
    description:
      "Trunk diameter: 113cm. Height: 31m. Family: Magnoliaceae. Recorded in the Tallo global tree database. Location: 38.893, -78.136 (North America).",
  },
  {
    name: "Fraxinus excelsior (Oleaceae)",
    species: "Fraxinus excelsior",
    lat: 48.2674,
    lng: 23.6226,
    height: 46.9,
    circumference: 3.5,
    description:
      "Trunk diameter: 112cm. Height: 47m. Family: Oleaceae. Recorded in the Tallo global tree database. Location: 48.2674, 23.6226 (Europe).",
  },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");
  await Tree.deleteMany({});
  console.log("Cleared existing trees");
  await Tree.insertMany(trees);
  console.log(`Seeded ${trees.length} trees`);
  await mongoose.disconnect();
  console.log("Done");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
