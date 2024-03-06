// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".image-card");

//     cards.forEach(function (card) {
//         card.addEventListener("mouseover", function () {
//             cards.forEach(function (c) {
//                 if (c !== card) {
//                     c.style.display = "none";
//                 }
//             });

//             card.classList.add("center");
//         });

//         card.addEventListener("mouseout", function () {
//             cards.forEach(function (c) {
//                 c.style.display = "inline-block";
//             });

//             card.classList.remove("center");
//         });
//     });
// });


// function changeBackground(imageUrl) {
//     document.body.style.backgroundImage = `url('${imageUrl}')`;
// }

// function restoreBackground() {
//     document.body.style.backgroundImage = 'none';
// }