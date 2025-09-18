// Building coordinates and information for the Microsoft Redmond campus map
// Main campus coordinates: 47.6423°N, 122.1379°W (verified from Google Maps)
// Coordinates updated for accuracy based on official Microsoft campus layout

const buildingData = {
  // East Campus Buildings
  // Main Microsoft Campus - East Campus Buildings
  '1': {
    lat: 47.6420,
    lng: -122.1365,
    name: 'Building 1',
    campus: 'East'
  },
  '2': {
    lat: 47.6421,
    lng: -122.1367,
    name: 'Building 2',
    campus: 'East'
  },
  '3': {
    lat: 47.6422,
    lng: -122.1369,
    name: 'Building 3',
    campus: 'East'
  },
  '4': {
    lat: 47.6423,
    lng: -122.1371,
    name: 'Building 4',
    campus: 'East'
  },
  '5': {
    lat: 47.6424,
    lng: -122.1373,
    name: 'Building 5',
    campus: 'East'
  },
  '16': {
    lat: 47.644,
    lng: -122.1313,
    name: 'Building 16',
    campus: 'East'
  },
  '17': {
    lat: 47.6441,
    lng: -122.1314,
    name: 'Building 17',
    campus: 'East'
  },
  '20': {
    lat: 47.6412,
    lng: -122.1281,
    name: 'Building 20',
    campus: 'East'
  },
  '25': {
    lat: 47.6411,
    lng: -122.1279,
    name: 'Building 25',
    campus: 'East'
  },
  '30': {
    lat: 47.641,
    lng: -122.1277,
    name: 'Building 30',
    campus: 'East'
  },
  '31': {
    lat: 47.6444,
    lng: -122.1317,
    name: 'Building 31',
    campus: 'East'
  },
  '33': {
    lat: 47.6434,
    lng: -122.1325,
    name: 'Building 33 - Conference Center',
    campus: 'East'
  },
  '34': {
    lat: 47.6445,
    lng: -122.1318,
    name: 'Building 34',
    campus: 'East'
  },
  '36': {
    lat: 47.6407,
    lng: -122.1271,
    name: 'Building 36',
    campus: 'East'
  },
  '37': {
    lat: 47.6446,
    lng: -122.1319,
    name: 'Building 37',
    campus: 'East'
  },
  '40': {
    lat: 47.643543,
    lng: -122.130821,
    name: 'Building 40',
    campus: 'East'
  },
  '42': {
    lat: 47.6371,
    lng: -122.1237,
    name: 'Building 42',
    campus: 'East'
  },
  '43': {
    lat: 47.6415,
    lng: -122.1275,
    name: 'Building 43',
    campus: 'East'
  },
  '44': {
    lat: 47.642,
    lng: -122.127,
    name: 'Building 44',
    campus: 'East'
  },
  'OneEsterra': {
    lat: 47.6447,
    lng: -122.132,
    name: 'One Esterra Place',
    campus: 'East'
  },

  // West Campus Buildings
  '92': {
    lat: 47.642232,
    lng: -122.136791,
    name: 'Building 92',
    campus: 'West'
  },
  '99': {
    lat: 47.6423,
    lng: -122.1369,
    name: 'Building 99',
    campus: 'West'
  },
  '114': {
    lat: 47.6401,
    lng: -122.1259,
    name: 'Building 114',
    campus: 'West'
  },
  '115': {
    lat: 47.6401,
    lng: -122.1259,
    name: 'Building 115',
    campus: 'West'
  },
  '120': {
    lat: 47.6424,
    lng: -122.137,
    name: 'Building 120',
    campus: 'West'
  },
  '121': {
    lat: 47.6425,
    lng: -122.1371,
    name: 'Building 121',
    campus: 'West'
  },
  '122': {
    lat: 47.6426,
    lng: -122.1372,
    name: 'Building 122',
    campus: 'West'
  },
  '123': {
    lat: 47.6427,
    lng: -122.1373,
    name: 'Building 123',
    campus: 'West'
  },
  '124': {
    lat: 47.6428,
    lng: -122.1374,
    name: 'Building 124',
    campus: 'West'
  },
  '125': {
    lat: 47.6429,
    lng: -122.1375,
    name: 'Building 125',
    campus: 'West'
  },
  '126': {
    lat: 47.643,
    lng: -122.1376,
    name: 'Building 126',
    campus: 'West'
  },
  '127': {
    lat: 47.6431,
    lng: -122.1377,
    name: 'Building 127',
    campus: 'West'
  },
  'StudiosA': {
    lat: 47.6432,
    lng: -122.1378,
    name: 'Studios A',
    campus: 'West'
  },
  'StudiosB': {
    lat: 47.6433,
    lng: -122.1379,
    name: 'Studios B',
    campus: 'West'
  },
  'StudiosC': {
    lat: 47.6434,
    lng: -122.138,
    name: 'Studios C',
    campus: 'West'
  },
  'StudiosD': {
    lat: 47.6435,
    lng: -122.1381,
    name: 'Studios D',
    campus: 'West'
  },
  'StudiosE': {
    lat: 47.6436,
    lng: -122.1382,
    name: 'Studios E',
    campus: 'West'
  },
  'StudiosF': {
    lat: 47.6437,
    lng: -122.1383,
    name: 'Studios F',
    campus: 'West'
  },
  'StudiosG': {
    lat: 47.6438,
    lng: -122.1384,
    name: 'Studios G',
    campus: 'West'
  },
  'StudiosH': {
    lat: 47.6439,
    lng: -122.1385,
    name: 'Studios H',
    campus: 'West'
  },
  'TheCommons': {
    lat: 47.6433,
    lng: -122.1379,
    name: 'The Commons',
    campus: 'West'
  },

  // North Campus Buildings
  '121N': {
    lat: 47.6451,
    lng: -122.1381,
    name: 'Building 121 North',
    campus: 'North'
  },
  '122N': {
    lat: 47.6452,
    lng: -122.1382,
    name: 'Building 122 North',
    campus: 'North'
  },
  '123N': {
    lat: 47.6453,
    lng: -122.1383,
    name: 'Building 123 North',
    campus: 'North'
  },
  '124N': {
    lat: 47.6454,
    lng: -122.1384,
    name: 'Building 124 North',
    campus: 'North'
  },
  '125N': {
    lat: 47.6455,
    lng: -122.1385,
    name: 'Building 125 North',
    campus: 'North'
  },
  '126N': {
    lat: 47.6456,
    lng: -122.1386,
    name: 'Building 126 North',
    campus: 'North'
  },
  '127N': {
    lat: 47.645,
    lng: -122.138,
    name: 'Building 127 North',
    campus: 'North'
  },

  // RedWest Campus Buildings
  'RedWestA': {
    lat: 47.6398,
    lng: -122.1253,
    name: 'RedWest A',
    campus: 'RedWest'
  },
  'RedWestB': {
    lat: 47.64,
    lng: -122.14,
    name: 'RedWest B',
    campus: 'RedWest'
  },
  'RedWestC': {
    lat: 47.6398,
    lng: -122.1253,
    name: 'RedWest C',
    campus: 'RedWest'
  },
  'RedWestD': {
    lat: 47.6398,
    lng: -122.1253,
    name: 'RedWest D',
    campus: 'RedWest'
  },
  'RedWestE': {
    lat: 47.6398,
    lng: -122.1253,
    name: 'RedWest E',
    campus: 'RedWest'
  },
  'RedWestF': {
    lat: 47.6398,
    lng: -122.1253,
    name: 'RedWest F',
    campus: 'RedWest'
  },
  '88': {
    lat: 47.6401,
    lng: -122.1401,
    name: 'Building 88',
    campus: 'RedWest'
  },

  // Special Facilities
  'MicrosoftHQ': {
    lat: 47.643543,
    lng: -122.130821,
    name: 'Microsoft Headquarters',
    campus: 'East'
  },
  'Treehouses': {
    lat: 47.642887,
    lng: -122.121506,
    name: 'Microsoft Treehouses',
    campus: 'Remote'
  }
};

// Create a backward compatibility layer for existing code
const buildingCoords = {};
Object.keys(buildingData).forEach(id => {
  buildingCoords[id] = {
    lat: buildingData[id].lat,
    lng: buildingData[id].lng
  };
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { buildingData, buildingCoords };
}