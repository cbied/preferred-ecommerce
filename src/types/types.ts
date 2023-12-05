export type Item = {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
    quantity?: number
}

export type CategoryProduct = {
    id: number,
    imageUrl: string,
    title: string
}

export type Categories = {
    title: string,
    items: Item[]
}

