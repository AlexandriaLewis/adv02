var startHold = {
  openInspect: "Have you inspected the page yet?\n\nyes or no",
  inspectYes: "Aren't you prepared!",
  inspectNo: "No?\n\nWell it's too late now.",
  inspectRandom: "I didn't catch that.\n\nDid you say yes or no?",
  tryAgain: "Error\n\nCould not interpret input.\n\nTry again"

}

var answer;

var browniePnts = 0;

function brownies() {
  browniePnts += 100;
  return browniePnts;
}

function startGame() {

    alert("Hi Hello!");
    answer = prompt(startHold.openInspect).trim().toLowerCase();

    if (answer === "yes") {
      brownies();
      console.log("You have " + browniePnts + " brownie points!");
      alert(startHold.inspectYes);
      inYes();

    } else if (answer === "no") {
      alert(startHold.inspectNo);
      inNo();

    } else {
      answer = prompt(startHold.inspectRandom).trim().toLowerCase();
      inElse(answer);

    }

}

var yesHold = { // Aren't you prepared
  watchMov: "Do you watch movies?\n\nYes or No?",
  watchY: "Sweet. What genre do you prefer?\n\nComedy - Drama - SciFi",
  watchN: "I bet you think you have a life."

}

function inYes() {
  answer = prompt(yesHold.watchMov).trim().toLowerCase();
  if (answer === "yes") {
    brownies();
    console.log("You have " + browniePnts + " brownie points!");
    answer = prompt(yesHold.watchY).trim().toLowerCase();
    pickGenre(answer);

  } else if (answer === "no") {
    answer = confirm(yesHold.watchN);
    hurDur(answer);

  } else {
    alert(startHold.tryAgain);
    inYes();

  }
}

function hurDur(opinions) {
  if (!opinions) {
    alert("Did you try to cancel?\n\nTry my function again");
    inYes();
  } else {
    alert("Agree to disagree.");
  }
}

var genreHold = {
  comedy: "Deadpool is in theaters.\n\nWarning: it is a hard R-rated film",
  drama: "The Revenant is still in theaters.",
  scifi: "Star Wars: The Force Awakens is STILL in theaters."
}

function addBrownies() {
  browniePnts += 200;
  return browniePnts;
}

function subBrownies() {
  browniePnts -= 100;
  return browniePnts;
}

function pickGenre(genreAnswer) {
  if (genreAnswer === "comedy") {
    alert(genreHold.comedy);
    addBrownies();
    console.log("You have " + browniePnts + " brownie points!\n\nAwesome! Great movie ;)");
  } else if (genreAnswer === "drama") {
    alert(genreHold.drama);
    addBrownies();
    console.log("You have " + browniePnts + " brownie points!\n\nAwesome! Great movie ;)");
  }else if (genreAnswer === "scifi") {
    alert(genreHold.scifi);
    subBrownies();
    console.log("You have " + browniePnts + " brownie points!\n\nIt was aite.");
  } else {
    subBrownies();
    alert(startHold.tryAgain);
    inYes();
  }

}


var noHold = { // No? Well it's too late now.
  showPnt: "It doesn't allow right clicks with windows open.\n\nWant to inspect? It shows points.\n\nYes or No"

}

function inNo() {
  answer = prompt(noHold.showPnt).trim().toLowerCase();
  if (answer === "yes") {
    alert("Ok.");
    brownies();

  } else if (answer === "no") {
    alert("Fine.");
    subBrownies();
    inYes();

  } else {
    alert(startHold.tryAgain);
    subBrownies();
    inNo();
  }

}


function inElse(random) {
  if (random === "yes") {
    inYes();

  } else if (random === "no") {
    inNo();

  } else {
    alert("You're being a pain.");
    alert("I quit you.");
  }

}
