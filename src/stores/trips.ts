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
      map: "sea.png",
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
          coordinates: { x: 13, y: 29 }
        },
        {
          id: 3,
          images: ["6", "7", "8", "9"],
          location: 'Bangkok',
          date: '2017-05-10',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 13, y: 29 }
        },
        {
          id: 4,
          images: ["10", "11", "12"],
          location: 'Bangkok',
          date: '2017-05-11',
          description: 'Railway market',
          fullTextSearch: '',
          coordinates: { x: 13, y: 29 }
        },
        {
          id: 5,
          images: ["13", "14", "15"],
          location: 'Bangkok',
          date: '2017-05-12',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 13, y: 29 }
        },
        {
          id: 6,
          images: ["16", "17", "18"],
          location: 'Kanchanaburi',
          date: '2017-05-13',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 12, y: 27 }
        },
        {
          id: 7,
          images: ["19", "20"],
          location: 'Kanchanaburi',
          date: '2017-05-14',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 12, y: 27 }
        },
        {
          id: 8,
          images: ["21", "22"],
          location: 'Kanchanaburi',
          date: '2017-05-15',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 12, y: 27 }
        },
        {
          id: 9,
          images: ["23"],
          location: 'Chiang Mai',
          date: '2017-05-16',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 9, y: 16 }
        },
        {
          id: 10,
          images: ["24"],
          location: 'Chiang Mai',
          date: '2017-05-17',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 9, y: 16 }
        },
        {
          id: 11,
          images: ["25", "26", "27", "28"],
          location: 'Rando de 3 jours',
          date: '2017-05-18',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 9, y: 16 }
        },
        {
          id: 14,
          images: ["29", "30"],
          location: 'Chiang Mai',
          date: '2017-05-21',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 9, y: 16 }
        },
        {
          id: 15,
          images: ["31"],
          location: 'Pai',
          date: '2017-05-22',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 5, y: 13 }
        },
        {
          id: 16,
          images: ["32", "33"],
          location: 'Pai',
          date: '2017-05-23',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 5, y: 13 }
        },
        {
          id: 17,
          images: ["34"],
          location: 'Pai',
          date: '2017-05-24',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 5, y: 13 }
        },
        {
          id: 18,
          images: ["35", "36"],
          location: 'Pai',
          date: '2017-05-25',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 5, y: 13 }
        },
        {
          id: 19,
          images: ["37", "38"],
          location: 'Rando à Pai',
          date: '2017-05-26',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 5, y: 13 }
        },
        {
          id: 20,
          images: ["39", "40"],
          location: 'Rando à Pai',
          date: '2017-05-27',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 5, y: 13 }
        },
        {
          id: 21,
          images: ["41"],
          location: 'Chiang Rai',
          date: '2017-05-28',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 8.5, y: 10.5 }
        },
        {
          id: 22,
          images: ["42", "43"],
          location: 'Chiang Rai',
          date: '2017-05-29',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 8.5, y: 10.5 }
        },
        {
          id: 23,
          images: ["44"],
          location: 'Slowboat Laos',
          date: '2017-05-30',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 12, y: 10 }
        },
        {
          id: 24,
          images: ["45", "46"],
          location: 'Slowboat Laos',
          date: '2017-05-31',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 12, y: 10 }
        },
        {
          id: 25,
          images: ["47"],
          location: 'Slowboat Laos',
          date: '2017-06-01',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 12, y: 10 }
        },
        {
          id: 26,
          images: ["48"],
          location: 'Luang Prabang',
          date: '2017-06-02',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 16, y: 10 }
        },
        {
          id: 27,
          images: ["49", "50"],
          location: 'Kuang Si Waterfalls',
          date: '2017-06-03',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 16, y: 10 }
        },
        {
          id: 28,
          images: ["51"],
          location: 'Vang Vieng',
          date: '2017-06-04',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 16, y: 14 }
        },
        {
          id: 29,
          images: ["52"],
          location: 'Blue Lagoon',
          date: '2017-06-05',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 16, y: 14 }
        },
        {
          id: 30,
          images: ["53", "54"],
          location: 'Vang Vieng',
          date: '2017-06-06',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 16, y: 14 }
        },
        {
          id: 31,
          images: ["55", "56"],
          location: 'Vang Vieng',
          date: '2017-06-07',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 16, y: 14 }
        },
        {
          id: 32,
          images: ["57"],
          location: 'Bus vers Pakse',
          date: '2017-06-08',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 24, y: 17 }
        },
        {
          id: 33,
          images: ["58", "59"],
          location: 'Bolaven Plateau',
          date: '2017-06-09',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 30, y: 23 }
        },
        {
          id: 34,
          images: ["60", "61"],
          location: 'Bolaven Plateau',
          date: '2017-06-10',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 30, y: 23 }
        },
        {
          id: 35,
          images: ["62"],
          location: 'Bolaven Plateau',
          date: '2017-06-11',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 30, y: 23 }
        },
        {
          id: 36,
          images: ["63"],
          location: 'Bolaven Plateau',
          date: '2017-06-12',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 30, y: 23 }
        },
        {
          id: 37,
          images: ["64"],
          location: 'Champasak',
          date: '2017-06-13',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 28, y: 25 }
        },
        {
          id: 38,
          images: ["65", "66", "67", "68"],
          location: '4000 Islands',
          date: '2017-06-14',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 28, y: 27 }
        },
        {
          id: 39,
          images: ["69", "70"],
          location: '4000 Islands',
          date: '2017-06-15',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 28, y: 27 }
        },
        {
          id: 40,
          images: ["71"],
          location: 'Transport vers Vientiane',
          date: '2017-06-16',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 17, y: 16 }
        },
        {
          id: 41,
          images: ["72"],
          location: 'Vientiane',
          date: '2017-06-17',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 17, y: 16 }
        },
        {
          id: 42,
          images: ["73"],
          location: 'Hanoi',
          date: '2017-06-18',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 25, y: 7 }
        },
        {
          id: 43,
          images: ["74"],
          location: 'Mai Chau',
          date: '2017-06-19',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 23, y: 8 }
        },
        {
          id: 44,
          images: ["75"],
          location: 'Mai Chau',
          date: '2017-06-20',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 23, y: 8 }
        },
        {
          id: 45,
          images: ["76"],
          location: 'Sapa',
          date: '2017-06-21',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 20, y: 3 }
        },
        {
          id: 46,
          images: ["77"],
          location: 'Rando Sapa',
          date: '2017-06-22',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 20, y: 3 }
        },
        {
          id: 47,
          images: ["78", "79"],
          location: 'Rando Sapa',
          date: '2017-06-23',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 20, y: 3 }
        },
        {
          id: 48,
          images: ["80"],
          location: 'Rando Sapa',
          date: '2017-06-24',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 20, y: 3 }
        },
        {
          id: 49,
          images: ["81"],
          location: 'Mu Cang Chai',
          date: '2017-06-25',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 20, y: 5 }
        },
        {
          id: 50,
          images: ["82", "83", "84"],
          location: 'Mu Cang Chai',
          date: '2017-06-26',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 20, y: 5 }
        },
        {
          id: 51,
          images: ["85"],
          location: 'Mu Cang Chai à Hanoi',
          date: '2017-06-27',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 20, y: 5 }
        },
        {
          id: 52,
          images: ["86"],
          location: 'Cat Ba',
          date: '2017-06-28',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 29, y: 8 }
        },
        {
          id: 53,
          images: ["87", "88"],
          location: 'Halong Bay',
          date: '2017-06-29',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 29, y: 8 }
        },
        {
          id: 54,
          images: ["89"],
          location: 'Halong Bay',
          date: '2017-06-30',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 29, y: 8 }
        },
        {
          id: 55,
          images: ["90"],
          location: 'Cat Ba à Ninh Binh',
          date: '2017-07-01',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 25, y: 10 }
        },
        {
          id: 56,
          images: ["91", "92"],
          location: 'Ninh Binh',
          date: '2017-07-02',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 25, y: 10 }
        },
        {
          id: 57,
          images: ["93", "94"],
          location: 'Ninh Binh',
          date: '2017-07-03',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 25, y: 10 }
        },
        {
          id: 58,
          images: ["95", "96"],
          location: 'Phong Nha',
          date: '2017-07-04',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 28, y: 17 }
        },
        {
          id: 59,
          images: ["97"],
          location: 'Hue',
          date: '2017-07-05',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 34, y: 22 }
        },
        {
          id: 60,
          images: ["98", "99"],
          location: 'Moto vers Hoi An',
          date: '2017-07-06',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 35, y: 23 }
        },
        {
          id: 61,
          images: ["100", "101", "102"],
          location: 'Hoi An',
          date: '2017-07-07',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 35.5, y: 24 }
        },
        {
          id: 62,
          images: ["103"],
          location: 'Hoi An',
          date: '2017-07-08',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 35.5, y: 24 }
        },
        {
          id: 63,
          images: ["104", "105"],
          location: 'Hoi An',
          date: '2017-07-09',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 35.5, y: 24 }
        },
        {
          id: 64,
          images: ["106"],
          location: 'Transport vers Bali',
          date: '2017-07-10',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 65,
          images: ["107"],
          location: 'Canggu',
          date: '2017-07-11',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 60, y: 69 }
        },
        {
          id: 66,
          images: ["108"],
          location: 'Canggu',
          date: '2017-07-12',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 60, y: 69 }
        },
        {
          id: 67,
          images: ["109"],
          location: 'Vers Sanur',
          date: '2017-07-13',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 63, y: 69 }
        },
        {
          id: 68,
          images: ["110", "111"],
          location: 'Sanur',
          date: '2017-07-14',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 63, y: 69 }
        },
        {
          id: 69,
          images: ["112"],
          location: 'Sanur et Ubud',
          date: '2017-07-15',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 62, y: 68 }
        },
        {
          id: 70,
          images: ["113", "114"],
          location: 'Ubud en scooter',
          date: '2017-07-16',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 62, y: 68 }
        },
        {
          id: 71,
          images: ["115", "116"],
          location: 'Mont Batur',
          date: '2017-07-17',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 62, y: 68 }
        },
        {
          id: 72,
          images: ["117"],
          location: 'Ubud',
          date: '2017-07-18',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 62, y: 68 }
        },
        {
          id: 73,
          images: ["118"],
          location: 'Legian',
          date: '2017-07-19',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 61, y: 71 }
        },
        {
          id: 74,
          images: ["119"],
          location: 'Bali vers Lombok',
          date: '2017-07-20',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 72, y: 66 }
        },
        {
          id: 75,
          images: ["120", "121"],
          location: 'Rinjani 1',
          date: '2017-07-21',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 72, y: 68 }
        },
        {
          id: 76,
          images: ["122", "123", "124", "125"],
          location: 'Rinjani 2',
          date: '2017-07-22',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 72, y: 68 }
        },
        {
          id: 77,
          images: ["126"],
          location: 'Rinjani 3',
          date: '2017-07-23',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 72, y: 68 }
        },
        {
          id: 78,
          images: ["127", "128"],
          location: 'Gili Meno',
          date: '2017-07-24',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 68, y: 68 }
        },
        {
          id: 79,
          images: ["129"],
          location: 'Gili Meno',
          date: '2017-07-25',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 80,
          images: ["130"],
          location: 'Gili Meno',
          date: '2017-07-26',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 81,
          images: ["131"],
          location: 'Gili vers Amed',
          date: '2017-07-27',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 66, y: 67 }
        },
        {
          id: 82,
          images: ["132"],
          location: 'Amed',
          date: '2017-07-28',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 66, y: 67 }
        },
        {
          id: 83,
          images: ["133"],
          location: 'Amed',
          date: '2017-07-29',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 66, y: 67 }
        },
        {
          id: 84,
          images: ["134"],
          location: 'Amed vers Lovina',
          date: '2017-07-30',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 59, y: 66 }
        },
        {
          id: 85,
          images: ["135", "136", "137"],
          location: 'Lovina et Bedugul',
          date: '2017-07-31',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 59, y: 66 }
        },
        {
          id: 86,
          images: ["138", "139"],
          location: 'Bedugul et Munduk',
          date: '2017-08-01',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 60.5, y: 67 }
        },
        {
          id: 87,
          images: ["140"],
          location: 'Menjangan',
          date: '2017-08-02',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 56, y: 65 }
        },
        {
          id: 88,
          images: ["141", "142"],
          location: 'Menjangan',
          date: '2017-08-03',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 56, y: 65 }
        },
        {
          id: 89,
          images: ["143"],
          location: 'Bali vers Java',
          date: '2017-08-04',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 90,
          images: ["144", "145", "146"],
          location: 'Kawah Ijen',
          date: '2017-08-05',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 52, y: 65 }
        },
        {
          id: 91,
          images: ["147", "148", "149", "150"],
          location: 'Bromo',
          date: '2017-08-06',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 42, y: 64 }
        },
        {
          id: 92,
          images: ["151"],
          location: 'Surabaya',
          date: '2017-08-07',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 40, y: 58 }
        },
        {
          id: 93,
          images: ["152", "153"],
          location: 'Transport vers Montréal',
          date: '2017-08-08',
          description: '',
          fullTextSearch: '',
          coordinates: { x: 0, y: 0 }
        },
      ]
    },
    {
      id: 2,
      name: "Pérou",
      description: "Voyage au Pérou",
      slug: "perou",
      countries: ["Pérou"],
      cover: "",
      startDate: "2018-08-13",
      endDate: "2018-09-09",
      map: "",
      photosBase: "perou",
      photosPrefix: "perou",
      photosExt: "jpg",
      jours: [
        {
          id: 1,
          date: "2018-08-13",
          images: ["4"],
          location: "Montréal",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 2,
          date: "2018-08-14",
          images: ["5", "6", "7"],
          location: "Lima",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 3,
          date: "2018-08-15",
          images: ["8", "9"],
          location: "Arequipa",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 4,
          date: "2018-08-16",
          images: ["10", "11"],
          location: "Arequipa",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 5,
          date: "2018-08-17",
          images: ["12", "13", "14"],
          location: "Colca Canyon",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 6,
          date: "2018-08-18",
          images: ["15", "16", "17"],
          location: "Colca Canyon",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 7,
          date: "2018-08-19",
          images: ["18", "19", "20"],
          location: "Lac Titicaca",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 8,
          date: "2018-08-20",
          images: ["21", "22"],
          location: "Lac Titicaca",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 9,
          date: "2018-08-21",
          images: ["23", "24", "25", "26", "27"],
          location: "Vallée Sacrée",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 10,
          date: "2018-08-22",
          images: ["28", "29", "30", "31"],
          location: "Ollantaytambo et Aguas Caliente",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 11,
          date: "2018-08-23",
          images: ["32", "33", "34", "35"],
          location: "Machu Picchu",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 12,
          date: "2018-08-24",
          images: ["36", "37"],
          location: "Cusco",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 13,
          date: "2018-08-25",
          images: ["38", "39"],
          location: "Ausangate 1",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 14,
          date: "2018-08-26",
          images: ["40", "41", "42"],
          location: "Ausangate 2",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 15,
          date: "2018-08-27",
          images: ["43", "44", "45"],
          location: "Ausangate 3",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 16,
          date: "2018-08-28",
          images: ["46", "47"],
          location: "Ausangate 4",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 17,
          date: "2018-08-29",
          images: ["48", "49"],
          location: "Ausangate 5",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 18,
          date: "2018-08-30",
          images: ["50", "51"],
          location: "Cusco",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 19,
          date: "2018-08-31",
          images: ["52", "53", "54"],
          location: "Laguna Churup",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 20,
          date: "2018-09-01",
          images: ["55", "56", "57", "58"],
          location: "Glacier Pastoruri",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 21,
          date: "2018-09-02",
          images: ["59", "60"],
          location: "Lac Paron",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 22,
          date: "2018-09-03",
          images: ["61", "62", "63", "64"],
          location: "Santa Cruz 1",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 23,
          date: "2018-09-04",
          images: ["65", "66"],
          location: "Santa Cruz 2",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 24,
          date: "2018-09-05",
          images: ["67", "68"],
          location: "Santa Cruz 3",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 25,
          date: "2018-09-06",
          images: ["69", "70"],
          location: "Santa Cruz 4",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 26,
          date: "2018-09-07",
          images: ["71", "72"],
          location: "Cruz del Sur",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 27,
          date: "2018-09-08",
          images: ["73", "74"],
          location: "Avions",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
        {
          id: 28,
          date: "2018-09-09",
          images: ["75"],
          location: "Montréal",
          description: "",
          fullTextSearch: "",
          coordinates: { x: 0, y: 0 }
        },
      ]
    }
  ]








  const getTripByName = (name: string) => {
    return tripsData.find(trip => trip.name.toLowerCase().replace(/\s+/g, '-') === name)
  }

  return { tripsData, getTripByName }
})
