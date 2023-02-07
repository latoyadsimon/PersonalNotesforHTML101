// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// answered:
function toCamelCase(str) {
  //see the data we are working with
  console.log("start with this:", str);
  //if the string is empty, return the phrase
  if (str.length < 1) {
    return str;
  }
  //see if the string contains a "_" or "-"
  let splitUp = [];
  let first = "";
  let second = "";
  let third = "";
  let forth = "";
  if (str.includes("_")) {
    first = str.split("_").join(",");
    console.log("first:", first);
    splitUp[0] = first;
  }
  if (first.includes("-")) {
    second = first.split("-");
    console.log("second", second);
    splitUp[0] = second;
  }
  if (str.includes("-")) {
    third = str.split("-").join(",");
    console.log("third:", third);
    splitUp[0] = third;
  }
  if (third.includes("_")) {
    forth = third.split("_");
    console.log("forth", forth);
    splitUp[0] = forth;
  }
  // use the split method to remove them from the string
  //split.join(",");
  console.log("the final split:", splitUp.join(",").split(","));
  let split = splitUp.join(",").split(",");

  //separate the first word into a new array; use let firstWord = split.shift();

  let camelCased = [];
  let firstWord = split.shift();
  camelCased.push(firstWord);
  //capitalize the first letter of the remaining words
  let restOfIt = split.map((word) => {
    let broken = word.split("");
    let tocap = broken.shift();
    let capital = tocap.toUpperCase();
    let fixed = [];
    fixed.push(capital);
    fixed.push(...broken);

    let fixedUp = fixed.join("");
    camelCased.push(fixedUp);
  });
  //console.log(camelCased.join(""));
  return camelCased.join("");
}

// ------------------------------------------------------------------

function toCamelCase(str) {
  //see the data we are working with
  console.log("start with this:", str);
  if (str.length === "") {
    return "An empty string was provided but not returned";
  }
  //separate the dashes and underscores out
  //console.log(str.includes("_"));
  //console.log(str.includes("-"));

  ///*******try a filter method next time
  //   let dash = "";
  //   let other ="";
  let split = "";

  if (str.includes("_")) {
    split = str.split("_");
  } else if (str.includes("-")) {
    split = str.split("-");
  }

  console.log("str really right now", split);
  // console.log("dash is now:", dash);
  //   let splited = str.split("_");
  //   console.log(splited)
  //   let split = splited.join(" ").split("-");
  //   console.log("again", split)

  //    let dash = str.split("_");
  //   console.log("dash",dash);
  //   let split = "placeholder";
  //   if(dash.length < 1) {
  //    split = str.split("-");
  //   }
  //   console.log("newsplit:", split);

  //     let split = str.split(dash);
  //       console.log("newsplit:", split)

  //console.log("this is split up", split);
  //separate the words
  //push the first word into a new array
  //capitalize the first letter of the following words
  let camelCased = [];
  //console.log(split[0]);

  let firstWord = split.shift();
  //console.log("first:", firstWord);
  //console.log(split);
  camelCased.push(firstWord);

  let restOfIt = split.map((word) => {
    let broken = word.split("");
    //console.log(word.split(""));
    let tocap = broken.shift();
    let capital = tocap.toUpperCase();
    //console.log("capital:", capital);
    let fixed = [];
    fixed.push(capital);
    fixed.push(...broken);
    // console.log("fixed", fixed);
    //console.log("fixedup", fixed.join(""));
    let fixedUp = fixed.join("");
    camelCased.push(fixedUp);
  });
  // console.log(camelCased.join(""));
  return camelCased.join("");

  //return str;
}
