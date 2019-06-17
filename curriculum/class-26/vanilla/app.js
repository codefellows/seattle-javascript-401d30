const state = {
  clickCounter: 0,
};


const button = document.getElementById('reverseButton');
button.addEventListener('click', handleClick);

function handleClick(event) {
  const input = document.getElementById('wordsInput');
  event.preventDefault();
  // Reverse the string
  state.words = input.value.split('').reverse().join('');

  // Render the string
  const wordsDisplay = document.getElementById('wordsDisplay');
  wordsDisplay.textContent = state.words;
  state.clickCounter += 1;
}

