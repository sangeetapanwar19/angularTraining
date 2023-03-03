export interface rating{
    count: number,
    rate: number
}
export interface product{
    id: number,
    title:string,
    category: string,
    description: string,
    image: string,
    price: number,
    rating: rating
}