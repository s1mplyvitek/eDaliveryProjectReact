import { createSlice } from "@reduxjs/toolkit";

const data = [
    {
        id: 1,
        name: 'Double Cheeseburger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        price: '$$$$',
        price2: 200
    },
    {
        id: 2,
        name: 'Bacon Cheeseburger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
        price: '$',
        price2: 200
    },
    {
        id: 3,
        name: 'Mushroom Burger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
        price: '$$',
        price2: 200
    },
    {
        id: 4,
        name: 'Loaded Burger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        price: '$$$',
        price2: 200
    },
    {
        id: 5,
        name: 'Double Cheeseburger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        price: '$$$$',
        price2: 200
    },
    {
        id: 6,
        name: 'Bacon Cheeseburger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
        price: '$',
        price2: 200
    },
    {
        id: 7,
        name: 'Mushroom Burger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
        price: '$$',
        price2: 200
    },
    {
        id: 8,
        name: 'Loaded Burger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        price: '$$$',
        price2: 200
    },
    {
        id: 9,
        name: 'Double Cheeseburger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        price: '$$$$',
        price2: 200
    },
    {
        id: 10,
        name: 'Bacon Cheeseburger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
        price: '$',
        price2: 200
    },
    {
        id: 11,
        name: 'Mushroom Burger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
        price: '$$',
        price2: 200
    },
    {
        id: 12,
        name: 'Loaded Burger',
        category: 'burger',
        image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        price: '$$$',
        price2: 200
    },
    {
        id: 13,
        name: 'Feta & Spinnach',
        category: 'pizza',
        image:
            'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$',
        price2: 300
    },
    {
        id: 14,
        name: 'Supreme Pizza',
        category: 'pizza',
        image:
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$$',
        price2: 300
    },
    {
        id: 15,
        name: 'Meat Lovers',
        category: 'pizza',
        image:
            'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$$$$',
        price2: 300
    },
    {
        id: 16,
        name: 'Cheese Pizza',
        category: 'pizza',
        image:
            'https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$',
        price2: 300
    },
    {
        id: 17,
        name: 'Feta & Spinnach',
        category: 'pizza',
        image:
            'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$',
        price2: 300
    },
    {
        id: 18,
        name: 'Supreme Pizza',
        category: 'pizza',
        image:
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$$',
        price2: 300
    },
    {
        id: 19,
        name: 'Meat Lovers',
        category: 'pizza',
        image:
            'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$$$$',
        price2: 300
    },
    {
        id: 20,
        name: 'Cheese Pizza',
        category: 'pizza',
        image:
            'https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$',
        price2: 300
    },
    {
        id: 21,
        name: 'Kale Salad',
        category: 'salad',
        image:
            'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$',
        price2: 300
    },
    {
        id: 22,
        name: 'Ceasar Salad',
        category: 'salad',
        image:
            'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$$',
        price2: 300
    },
    {
        id: 23,
        name: 'Loaded Salad',
        category: 'salad',
        image:
            'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$$$',
        price2: 300
    },
    {
        id: 24,
        name: 'Fruit Salad',
        category: 'salad',
        image:
            'https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        price: '$',
        price2: 300
    },
    {
        id: 25,
        name: 'Kale Salad',
        category: 'salad',
        image:
            'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$',
        price2: 300
    },
    {
        id: 26,
        name: 'Ceasar Salad',
        category: 'salad',
        image:
            'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$$',
        price2: 300
    },
    {
        id: 27,
        name: 'Loaded Salad',
        category: 'salad',
        image:
            'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$$$',
        price2: 300
    },
    {
        id: 28,
        name: 'Fruit Salad',
        category: 'salad',
        image:
            'https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        price: '$',
        price2: 300
    },
    {
        id: 29,
        name: 'Wings',
        category: 'chicken',
        image:
            'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$',
        price2: 300
    },
    {
        id: 30,
        name: 'Baked Chicken',
        category: 'chicken',
        image:
            'https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$$$',
        price2: 300
    },
    {
        id: 31,
        name: 'Chicken Tenders',
        category: 'chicken',
        image:
            'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$',
        price2: 300
    },
    {
        id: 32,
        name: 'Chicken Kabob',
        category: 'chicken',
        image:
            'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$$$',
        price2: 300
    },
    {
        id: 33,
        name: 'Wings',
        category: 'chicken',
        image:
            'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$',
        price2: 300
    },
    {
        id: 34,
        name: 'Baked Chicken',
        category: 'chicken',
        image:
            'https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: '$$$$',
        price2: 300
    },
    {
        id: 35,
        name: 'Chicken Tenders',
        category: 'chicken',
        image:
            'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$',
        price2: 300
    },
    {
        id: 36,
        name: 'Chicken Kabob',
        category: 'chicken',
        image:
            'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$$$',
        price2: 300
    },
    {
        id: 37,
        name: 'Картошка фри',
        category: 'free',
        image: "https://img.freepik.com/free-photo/top-view-delicious-fries-and-sauce_23-2149235944.jpg?w=740&t=st=1693020795~exp=1693021395~hmac=1d25a3f60addd30a4dcbc408713da7d3d2ad9a5a19fa629f41086669b7701e2e",
        price: '$$$',
        price2: 300
    },
];

export const dataSlice = createSlice({
    name: "data",
    initialState: data,
    reducers: {

    },
});

export const { } = dataSlice.actions;

export default dataSlice.reducer;