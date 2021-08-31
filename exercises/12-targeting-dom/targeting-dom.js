/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  const liNum1 = document.querySelector("li");
    console.log("firstLi", liNum1);

  const id = document.querySelector("#myId");
    console.log("myId", id);

  const allLi = document.querySelectorAll("li");
  for (let i = 0; i < allLi.length; i++) {
    console.log("allLi", allLi[i]);
  }

  const bgWarning = document.querySelectorAll(".bg-warning");
  for (let li of bgWarning) {
    console.log(".bg-warning", li);
  }

  const cells = document.querySelectorAll("#myRow > .col");
    cells.forEach((cell) => console.log("cell", cell));

  const dataAttributes = document.querySelectorAll("[data-target]");
    dataAttributes.forEach((attribute) =>
    console.log("dataAttribute", attribute)
    );
})();
