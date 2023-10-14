// const reviews = [

//     {
//         id: 1,
//         name: 'susan smith',
//         job: 'web developer',
//         img: 'https://www.course-api.com/images/people/person-1.jpeg',
//         text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//     },
//     {
//         id: 2,
//         name: 'anna johnson',
//         job: 'web designer',
//         img: 'https://www.course-api.com/images/people/person-2.jpeg',
//         text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
//     },
//     {
//         id: 3,
//         name: 'peter jones',
//         job: 'intern',
//         img: 'https://www.course-api.com/images/people/person-4.jpeg',
//         text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
//     },
//     {
//         id: 4,
//         name: 'bill anderson',
//         job: 'the boss',
//         img: 'https://www.course-api.com/images/people/person-3.jpeg',
//         text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
//     },
// ];

const travelReviews = [
    {
        id: 1,
        name: "Alice",
        travelDestination: "Paris, France",
        img: 'https://www.course-api.com/images/people/person-1.jpeg',

        shortReview: "Paris was absolutely breathtaking! The Eiffel Tower at night is a must-see."
    },
    {
        id: 2,
        name: "Bob",
        travelDestination: "Kyoto, Japan",
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        shortReview: "Kyoto's temples and gardens are serene and beautiful. I loved every moment."
    },
    {
        id: 3,
        name: "Charlie",
        travelDestination: "New York City, USA",
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        shortReview: "New York City is a city that never sleeps, and I had a blast exploring its vibrant culture."
    },
    {
        id: 4,
        name: "David",
        travelDestination: "Barcelona, Spain",
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        shortReview: "Barcelona's architecture and food are amazing. The Sagrada Familia is a masterpiece."
    }
];

console.log(travelReviews);

const img = document.getElementById("person-img");
const author = document.getElementById("person");
const travelDestination = document.getElementById("destination");
const text = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item 
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
})

// show peroson based on item 
function showPerson() {
    const item = travelReviews[currentItem];
    img.src = item.img;
    person.textContent = item.name;
    destination.textContent = item.travelDestination;
    text.textContent = item.shortReview;
}

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > travelReviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener("click", function () {
    console.log("hello");
    currentItem--;
    if (currentItem < 0) {
        currentItem = travelReviews.length - 1;
    };
    showPerson();
});

// show random peroson 
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * travelReviews.length);
    showPerson();
})