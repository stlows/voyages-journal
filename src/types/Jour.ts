export interface Jour {
    id: number,
    images: string[],
    location: string,
    date: string,
    description: string,
    fullTextSearch: string,
    coordinates: {
        x: number,
        y: number
    }
}