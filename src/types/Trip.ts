import type { Jour } from './Jour'

export interface Trip {
    id: number,
    name: string,
    description: string,
    countries: string[],
    startDate: string,
    endDate: string,
    image: string,
    jours: Jour[],
    mapName: string
}
