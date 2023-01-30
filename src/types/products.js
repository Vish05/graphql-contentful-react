interface IProduct {
    sys:{
        id
    },
    title: string,
    slug: string,
    price: number,
    originalPrice: number,
    shortDescription: string,
    images: { url: string },
    categories: { name: string }
    inventory: { quantity: number }
}

export default IProduct;