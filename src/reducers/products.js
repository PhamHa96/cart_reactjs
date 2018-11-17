var initialState = [
    {
        id: 1,
        name: 'Iphone 7s',
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: '1This is a long long description1',
        price: 400,
        inventory: 15,
        rating: 2
    },
    {
        id: 2,
        name: 'Xiaomi Mi8',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: '2This is a long long description2',
        price: 400,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: '3This is a long long description3',
        price: 200,
        inventory: 5,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}
export default products;