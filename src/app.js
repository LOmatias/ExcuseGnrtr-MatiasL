import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "My", "My", "This", "That"];
  let subject = [
    "jogger",
    "racoon",
    "dog",
    "driver",
    "comedian",
    "pincone",
    "pincone",
    "cat",
    "teacher",
    "alien",
    "neighbor",
    "chicken",
    "robot"
  ];
  let action = [
    "took my",
    "threw my",
    "yelled at my",
    "stole my",
    "bit my",
    "ate my",
    "ran away with",
    "exploded my",
    "dropped my",
    "hid my",
    "sabotaged my"
  ];
  let possetion = [
    "homework",
    "toe",
    "car",
    "shoe",
    "laptop",
    "wallet",
    "key",
    "phone",
    "book",
    "report"
  ];
  let where = [
    "on the street",
    "in my house",
    "in my driveway",
    "at the park",
    "in the office",
    "during my lunch",
    "while I was sleeping",
    "right before the meeting",
    "in the bathroom"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex] +
    "."
  );
};
