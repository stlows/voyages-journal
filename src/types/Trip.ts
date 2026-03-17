import type { Jour } from './Jour'

export interface Trip {
    id: number,
    name: string,
    slug: string,
    description: string,
    countries: string[],
    startDate: string,
    endDate: string,
    cover: string,
    jours: Jour[],
    mapName: string,
    showMap: boolean,
    photosBase: string,
    photosPrefix: string,
    photosExt: string
}
