// Conditional Statements

// let rainy = true;
// let cloudy = false;
// if (rainy || cloudy) {
//   console.log("Take umbrella !");
// } else {
//   console.log("No need umbrella !");
// }

// If hour is between 12am(0) to 12pm(12) is Breakfast time
// If hour is between 12pm(12) to 5pm(17) is Lunch time
// If hour is between 5pm(17) to 12am(0) is Dinner time

// let hour = 12;
//    or

let hour = new Date().getHours();

if (hour >= 0 && hour <= 12) {
  console.log("BreakFast Time");
} else if (hour >= 12 && hour <= 17) {
  console.log("Lunch Time");
} else console.log("Dinner Time");
