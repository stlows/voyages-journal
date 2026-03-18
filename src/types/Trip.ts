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
    map: string,
    photosBase: string,
    photosPrefix: string,
    photosExt: string
}
