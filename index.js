const dodger = document.getElementById("dodger")
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
    }
}
function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const currentLeft = parseInt(dodger.style.left);

  // Check if the right edge of the dodger plus the dodger width is less than or equal to the game field width
  const gameFieldWidth = window.innerWidth; // Width of the game field
  const dodgerWidth = 40; // Width of the dodger is 40px

  if (currentLeft + dodgerWidth + 5 <= gameFieldWidth) {
    dodger.style.left = `${currentLeft + 5}px`;
  }
}
document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left);

    // Check if the left edge of the dodger is greater than 0
    if (currentLeft > 0) {
      dodger.style.left = `${currentLeft - 5}px`;
    }
  } else if (event.key === "ArrowRight") {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left);
    const dodgerWidth = 40; // Width of the dodger is 40px

    // Check if the right edge of the dodger plus the dodger width is less than or equal to the game field width
    const gameFieldWidth = window.innerWidth; // Width of the game field
    if (currentLeft + dodgerWidth <= gameFieldWidth - 5) {
      dodger.style.left = `${currentLeft + 5}px`;
    }
  }
});