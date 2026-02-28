import { defineStore } from 'pinia'
import type { Trip } from '../types/Trip'

// Auto-detect cover images from each trip folder
const coverImages = import.meta.glob<{ default: string }>('../assets/images/trips/*/cover/*.{jpg,jpeg,png,webp}', { eager: true })
const coversMap = new Map<string, string>()

for (const [path, module] of Object.entries(coverImages)) {
  const pathParts = path.split('/')
  const tripName = pathParts[pathParts.length - 3]
  
  if (tripName) {
    coversMap.set(tripName, module.default)
  }
}

// Auto-detect day images from the trips folder
const dayImages = import.meta.glob<{ default: string }>('../assets/images/trips/*/jour-*/*.{jpg,jpeg,png,webp}', { eager: true })
const dayImagesMap = new Map<string, Map<number, string[]>>()

for (const [path, module] of Object.entries(dayImages)) {
  const pathParts = path.split('/')
  const fileName = pathParts[pathParts.length - 1]
  const jourFolder = pathParts[pathParts.length - 2]
  const tripName = pathParts[pathParts.length - 3]
  
  if (tripName && jourFolder && jourFolder.startsWith('jour-')) {
    const jourMatch = jourFolder.match(/jour-(\d+)/)
    if (jourMatch && jourMatch[1]) {
      const jourId = parseInt(jourMatch[1])
      
      if (!dayImagesMap.has(tripName)) {
        dayImagesMap.set(tripName, new Map<number, string[]>())
      }
      
      const tripMap = dayImagesMap.get(tripName)!
      if (!tripMap.has(jourId)) {
        tripMap.set(jourId, [])
      }
      
      tripMap.get(jourId)?.push(module.default)
    }
  }
}

// Function to get ordered images for a trip
function getTripImages(tripName: string): Map<number, string[]> {
  const tripMap = dayImagesMap.get(tripName) || new Map()
  
  // Sort images within each jour alphabetically
  const sortedMap = new Map<number, string[]>()
  for (const [jourId, images] of tripMap.entries()) {
    sortedMap.set(jourId, [...images].sort())
  }
  
  return sortedMap
}

export const useTripsStore = defineStore('trips', () => {
  // Trip data definitions (without explicit image paths)
  const tripsData = [
    {
      id: 1,
      name: 'Asie',
      slug: 'asie',
      description: 'Un voyage à travers les merveilles de l\'Asie du Sud-Est',
      countries: ['Thaïlande', 'Japon'],
      startDate: '2023-01-15',
      endDate: '2023-03-20',
      mapName: "",
      jours: [
        { 
          id: 1,
          location: 'Bangkok, Thaïlande',
          date: '2023-01-15',
          description: 'Première journée à Bangkok. Visite des temples et exploration du marché flottant.',
          fullTextSearch: 'bananes',
          coordinates: { x: 35, y: 55 }
        },
        { 
          id: 2,
          location: 'Kyoto, Japon',
          date: '2023-02-20',
          description: 'Les magnifiques temples et jardins japonais. Les fleurs de cerisier étaient en pleine floraison.',
          fullTextSearch: '',
          coordinates: { x: 80, y: 30 }
        },
      ]
    },
    {
      id: 2,
      name: 'Ouest USA',
      slug: 'ouest-usa',
      description: 'Découvrez les paysages spectaculaires du grand ouest américain',
      countries: ['États-Unis'],
      startDate: '2023-05-01',
      endDate: '2023-06-15',
      mapName: "",
      jours: [
        { 
          id: 1,
          location: 'Grand Canyon, Arizona',
          date: '2023-05-01',
          description: 'Arrivée au Grand Canyon. Vue époustouflante au coucher de soleil.',
          fullTextSearch: '',
          coordinates: { x: 40, y: 35 }
        },
        { 
          id: 2,
          location: 'Las Vegas, Nevada',
          date: '2023-05-10',
          description: 'L\'énergie vibrante de Las Vegas et ses spectacles impressionnants.',
          fullTextSearch: '',
          coordinates: { x: 30, y: 28 }
        },
      ]
    },
    {
      id: 3,
      name: 'Pérou',
      slug: 'perou',
      description: 'Explorez l\'histoire ancestrale du Pérou et ses paysages andins',
      countries: ['Pérou'],
      startDate: '2023-07-01',
      endDate: '2023-08-30',
      mapName: "perou.webp",
      jours: [
        { 
          id: 1,
          location: 'Lima, Pérou',
          date: '2023-07-01',
          description: 'Bienvenue à Lima, la capitale culinaire de l\'Amérique du Sud.',
          fullTextSearch: '',
          coordinates: { x: 25, y: 70 }
        },
        { 
          id: 2,
          location: 'Machu Picchu, Pérou',
          date: '2023-07-15',
          description: 'L\'ancienne citadelle inca perchée dans les Andes. Magnifique et mystérieux.',
          fullTextSearch: '',
          coordinates: { x: 40, y: 65 }
        },
      ]
    }
  ]

  // Build trips with auto-detected images
  const trips: Trip[] = tripsData.map(tripData => {
    const coverImage = coversMap.get(tripData.slug) || ''
    const jourImages = getTripImages(tripData.slug)
    
    return {
        ...tripData,
      image: coverImage,
      jours: tripData.jours.map(jour => ({
        ...jour,
        images: jourImages.get(jour.id) || [],
      }))
    }
  })

  const getTripByName = (name: string) => {
    return trips.find(trip => trip.name.toLowerCase().replace(/\s+/g, '-') === name)
  }

  return { trips, getTripByName }
})
