// DATE OBJECT

const systemdate = new Date();
console.log(systemdate);
console.log(systemdate.getDate());
console.log(systemdate.getDay()); //2 from 0
console.log(systemdate.getFullYear); //2022
console.log(systemdate.getMonth()); //7 from 0
console.log(systemdate.getHours());
console.log(systemdate.getMilliseconds());
console.log(systemdate.getMinutes());
console.log(systemdate.getSeconds());
console.log(systemdate.getTime());
console.log(systemdate.getTimezoneOffset());
console.log(systemdate.getUTCDate());
console.log(systemdate.getUTCDay());

const dateString = new Date("Dec/22/2024");
let month = dateString.getMonth();
let date = dateString.getDate();
let year = dateString.getFullYear();
console.log(month, "/", date, "/", year);
// 11/22/2024

const fullyear = `${month + 1}/${date}/${year}`;
console.log(fullyear);
//  12/22/2024

// Assgn - Tuesday/August/2022
const dateString1 = new Date("August/16/2022");
let month1 = dateString1.getMonth();
let date1 = dateString1.getDate();
let year1 = dateString1.getFullYear();
console.log(date1, "/", month1 + 1, "/", year1);
// const fullyear1 = `${"month"}/${"date"}/${year1}`;
// console.log(fullyear1);
const fulldate = dateString1.toLocaleDateString("en-in", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit",
});
console.log(fulldate);

const datspam = new Date("August/16/2022");
let month2 = datspam.getMonth();
let date2 = datspam.getDate();
let year12 = datspam.getFullYear();
const fulldate2 = datspam.toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit",
});
console.log(fulldate2);

// looping FOR LOOP
let person = ["Avi", 90, "30/july/2000"];
for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}
