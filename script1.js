// // Select all buttons and cards
// const buttons = document.querySelectorAll(".filter-buttons button");
// const cards = document.querySelectorAll(".card");

// // Button click event
// buttons.forEach(button => {

//     button.addEventListener("click", () => {

//         // Remove active class from all buttons
//         buttons.forEach(btn => btn.classList.remove("active"));

//         // Add active class to clicked button
//         button.classList.add("active");

//         // Get category
//         const filter = button.getAttribute("data-filter");

//         // Show all cards
//         if(filter === "all"){

//             cards.forEach(card=>{
//                 card.style.display = "block";
//             });

//         }

//         // Show selected category
//         else{

//             cards.forEach(card=>{

//                 if(card.classList.contains(filter)){
//                     card.style.display = "block";
//                 }
//                 else{
//                     card.style.display = "none";
//                 }

//             });

//         }

//     });

// });

// const buttons = document.querySelectorAll(".filter-buttons button");
// const cards = document.querySelectorAll(".card");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {

//         // Active button change
//         buttons.forEach(btn => btn.classList.remove("active"));
//         button.classList.add("active");

//         const filter = button.dataset.filter;

//         cards.forEach(card => {

//             if (filter === "all") {
//                 card.style.display = "block";
//             } 
//             else if (card.classList.contains(filter)) {
//                 card.style.display = "block";
//             } 
//             else {
//                 card.style.display = "none";
//             }

//         });

//     });
// });

const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".menu .card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        cards.forEach(card => {

            if (filter === "all") {
                card.style.display = "block";
            } else if (card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});