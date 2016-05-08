
var userday = prompt("Please enter a day of the week. Cap the first letter and spell out the day like this. 'Monday'");

switch (userday) {
  case "Monday":
    console.log("Depending on how much I drank over the weekend Monday can be terrifing, Monday Scaries!");
    break;
  case "Tuesday":
    console.log("Great Day because I get to go to JS Class!");
    break;
  case "Wednesday":
    console.log("Wednesday is full of Anxiety, as I need to make sure I get my JS homework done");
    break;
  case "Thursday":
    console.log("What a great day, JS class again and I have the weekend to let the knowledge sink in");
    break;
  case "Friday":
  case "Saturday":
    console.log("Weekend!!! Sun & Stuff");
    break;
  case "Sunday":
    console.log("Great TV on Sunday Game of Thrones. Silicon Valley!");
    break;
  default:
    console.log("Sorry, you need to pick a day of the week in this format. 'Monday' Make sure the first letter is CAP " + userday + " Did not work");
}

