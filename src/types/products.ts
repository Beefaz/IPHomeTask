export interface ProductList {
    [index: number]: Product,
}

export interface Product {
    id: number,
    title: string,
    description: string,
    rating: string,
    price: number
}
