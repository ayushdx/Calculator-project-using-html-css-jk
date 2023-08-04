// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        // Use eval() to evaluate the expression and limit the result to 2 decimal places
        string = eval(string).toFixed(2);
      } catch (error) {
        string = "Error";
      }
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
