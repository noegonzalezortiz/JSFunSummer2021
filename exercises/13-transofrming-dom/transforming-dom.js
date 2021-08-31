/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  let alert1 = document.querySelector('.alert.alert-danger');
  alert1.setAttribute("role", "alert");

  let alert2 = document.querySelector('.alert.alert-warning a');
  alert2.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript");

  alert2.removeAttribute("target");


  
})();
