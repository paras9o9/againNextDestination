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