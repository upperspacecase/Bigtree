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
