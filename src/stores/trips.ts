import { defineStore } from 'pinia'
import type { Trip } from '../types/Trip'

export const useTripsStore = defineStore('trips', () => {
  // Trip data definitions (without explicit image paths)
  const tripsData: Trip[] = [
    {
      id: 1,
      name: 'Asie',
      slug: 'asie',
      description: 'Un voyage à travers les merveilles de l\'Asie du Sud-Est',
      countries: ['Thaïlande', 'Laos', "Vietnam", "Indonésie"],
      startDate: '2017-05-07',
      endDate: '2017-08-08',
      cover: "asie_cover.jpg",
      showMap: false,
      mapName: "",
      photosBase: "asie",
      photosPrefix: "asie",
      photosExt: "jpg",
      jours: [
        {
          id: 0,
          images: ["2", "3"],
          location: 'Montréal',
          date: '2017-05-07',
          description: 'Départ',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 1,
          images: ["4"],
          location: 'Doha',
          date: '2017-05-08',
          description: 'Escale',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 2,
          images: ["5"],
          location: 'Bangkok',
          date: '2017-05-09',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 3,
          images: ["6", "7", "8", "9"],
          location: 'Bangkok',
          date: '2017-05-10',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 4,
          images: ["10", "11", "12"],
          location: 'Bangkok',
          date: '2017-05-11',
          description: 'Railway market',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 5,
          images: ["13", "14", "15"],
          location: 'Bangkok',
          date: '2017-05-12',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 6,
          images: ["16", "17", "18"],
          location: 'Kanchanaburi',
          date: '2017-05-13',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 7,
          images: ["19", "20"],
          location: 'Kanchanaburi',
          date: '2017-05-14',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 8,
          images: ["21", "22"],
          location: 'Kanchanaburi',
          date: '2017-05-15',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 9,
          images: ["23"],
          location: 'Chiang Mai',
          date: '2017-05-16',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 10,
          images: ["24"],
          location: 'Chiang Mai',
          date: '2017-05-17',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 11,
          images: ["25", "26", "27", "28"],
          location: 'Rando de 3 jours',
          date: '2017-05-18',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 14,
          images: ["29", "30"],
          location: 'Chiang Mai',
          date: '2017-05-21',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 15,
          images: ["31"],
          location: 'Pai',
          date: '2017-05-22',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 16,
          images: ["32", "33"],
          location: 'Pai',
          date: '2017-05-23',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 17,
          images: ["34"],
          location: 'Pai',
          date: '2017-05-24',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 18,
          images: ["35", "36"],
          location: 'Pai',
          date: '2017-05-25',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 19,
          images: ["37", "38"],
          location: 'Rando à Pai',
          date: '2017-05-26',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 20,
          images: ["39", "40"],
          location: 'Rando à Pai',
          date: '2017-05-27',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 21,
          images: ["41"],
          location: 'Chiang Rai',
          date: '2017-05-28',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 22,
          images: ["42", "43"],
          location: 'Chiang Rai',
          date: '2017-05-29',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 23,
          images: ["44"],
          location: 'Laos',
          date: '2017-05-30',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 24,
          images: ["45", "46"],
          location: 'Slowboat Laos',
          date: '2017-05-31',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 25,
          images: ["47"],
          location: 'Slowboat Laos',
          date: '2017-06-01',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 26,
          images: ["48"],
          location: 'Luang Prabang',
          date: '2017-06-02',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 27,
          images: ["49", "50"],
          location: '',
          date: '2017-06-03',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 28,
          images: ["51"],
          location: '',
          date: '2017-06-04',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 29,
          images: ["52"],
          location: '',
          date: '2017-06-05',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 30,
          images: ["53", "54"],
          location: '',
          date: '2017-06-06',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 31,
          images: ["55", "56"],
          location: '',
          date: '2017-06-07',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 32,
          images: ["57"],
          location: '',
          date: '2017-06-08',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 33,
          images: ["58", "59"],
          location: '',
          date: '2017-06-09',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 34,
          images: ["60", "61"],
          location: '',
          date: '2017-06-10',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 35,
          images: ["62"],
          location: '',
          date: '2017-06-11',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 36,
          images: ["63"],
          location: '',
          date: '2017-06-12',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 37,
          images: ["64"],
          location: '',
          date: '2017-06-13',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 38,
          images: ["65", "66", "67", "68"],
          location: '',
          date: '2017-06-14',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 39,
          images: ["69", "70"],
          location: '',
          date: '2017-06-15',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 40,
          images: ["71"],
          location: '',
          date: '2017-06-16',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 41,
          images: ["72"],
          location: '',
          date: '2017-06-17',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 42,
          images: ["73"],
          location: '',
          date: '2017-06-18',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 43,
          images: ["74"],
          location: '',
          date: '2017-06-19',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 44,
          images: ["75"],
          location: '',
          date: '2017-06-20',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 45,
          images: ["76"],
          location: '',
          date: '2017-06-21',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 46,
          images: ["77"],
          location: '',
          date: '2017-06-22',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 47,
          images: ["78", "79"],
          location: '',
          date: '2017-06-23',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 48,
          images: ["80"],
          location: '',
          date: '2017-06-24',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 49,
          images: ["81"],
          location: '',
          date: '2017-06-25',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 50,
          images: ["82", "83", "84"],
          location: '',
          date: '2017-06-26',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 51,
          images: ["85"],
          location: '',
          date: '2017-06-27',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 52,
          images: ["86"],
          location: '',
          date: '2017-06-28',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 53,
          images: ["87", "88"],
          location: '',
          date: '2017-06-29',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 54,
          images: ["89"],
          location: '',
          date: '2017-06-30',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 55,
          images: ["90"],
          location: '',
          date: '2017-07-01',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 56,
          images: ["91", "92"],
          location: '',
          date: '2017-07-02',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 57,
          images: ["93", "94"],
          location: '',
          date: '2017-07-03',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 58,
          images: ["95", "96"],
          location: '',
          date: '2017-07-04',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 59,
          images: ["97"],
          location: '',
          date: '2017-07-05',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 60,
          images: ["98", "99"],
          location: '',
          date: '2017-07-06',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 61,
          images: ["100", "101", "102"],
          location: '',
          date: '2017-07-07',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 62,
          images: ["103"],
          location: '',
          date: '2017-07-08',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 63,
          images: ["104", "105"],
          location: '',
          date: '2017-07-09',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 64,
          images: ["106"],
          location: '',
          date: '2017-07-10',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 65,
          images: ["107"],
          location: '',
          date: '2017-07-11',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 66,
          images: ["108"],
          location: '',
          date: '2017-07-12',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 67,
          images: ["109"],
          location: '',
          date: '2017-07-13',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 68,
          images: ["110", "111"],
          location: '',
          date: '2017-07-14',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 69,
          images: ["112"],
          location: '',
          date: '2017-07-15',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 70,
          images: ["113", "114"],
          location: '',
          date: '2017-07-16',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 71,
          images: ["115", "116"],
          location: '',
          date: '2017-07-17',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 72,
          images: ["117"],
          location: '',
          date: '2017-07-18',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 73,
          images: ["118"],
          location: '',
          date: '2017-07-19',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 74,
          images: ["119"],
          location: '',
          date: '2017-07-20',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 75,
          images: ["120", "121"],
          location: '',
          date: '2017-07-21',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 76,
          images: ["122", "123", "124", "125"],
          location: '',
          date: '2017-07-22',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 77,
          images: ["126"],
          location: '',
          date: '2017-07-23',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 78,
          images: ["127", "128"],
          location: '',
          date: '2017-07-24',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 79,
          images: ["129"],
          location: '',
          date: '2017-07-25',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 80,
          images: ["130"],
          location: '',
          date: '2017-07-26',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 81,
          images: ["131"],
          location: '',
          date: '2017-07-27',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 82,
          images: ["132"],
          location: '',
          date: '2017-07-28',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 83,
          images: ["133"],
          location: '',
          date: '2017-07-29',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 84,
          images: ["134"],
          location: '',
          date: '2017-07-30',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 85,
          images: ["135", "136", "137"],
          location: '',
          date: '2017-07-31',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 86,
          images: ["138", "139"],
          location: '',
          date: '2017-08-01',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 87,
          images: ["140"],
          location: '',
          date: '2017-08-02',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 88,
          images: ["141", "142"],
          location: '',
          date: '2017-08-03',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 89,
          images: ["143"],
          location: '',
          date: '2017-08-04',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 90,
          images: ["144", "145", "146"],
          location: '',
          date: '2017-08-05',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 91,
          images: ["147", "148", "149", "150"],
          location: '',
          date: '2017-08-06',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 92,
          images: ["151"],
          location: '',
          date: '2017-08-07',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 93,
          images: ["152", "153"],
          location: '',
          date: '2017-08-08',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
      ]
    },
  ]


  const getTripByName = (name: string) => {
    return tripsData.find(trip => trip.name.toLowerCase().replace(/\s+/g, '-') === name)
  }

  return { tripsData, getTripByName }
})
