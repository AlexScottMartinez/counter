// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// Loop which see's what button was pressed
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    
    // checks which button was pressed to change the counter accordingly
    if (styles.contains('decrease')) {
      count--;
    }
    else if (styles.contains('increase')) {
      count++;
    }
    else {
      count = 0;
    }

    // if statements to change the color according to the current count
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count == 0) {
      value.style.color = '#222';
    }

    // apply changes to the count
    value.textContent = count;
  });
});