export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie',
        price: 1.25,
        stock: 20
    },
    {
        id: 2,
        name: 'Water',
        price: 0.99,
        stock: 10
    },
    {
        id: 3,
        name: 'Detergent',
        price: 0.75,
        stock: 54
    },
    {
        id: 4,
        name: 'Milk 1L',
        price: 1.50,
        stock: 30
    }

]

export default Products;