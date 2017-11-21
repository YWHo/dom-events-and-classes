// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  evt.target.classList.remove('blue') // fix counting bug
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  evt.target.classList.remove('green') // fix counting bug
  updateCounts()
}

// CREATE FUNCTION hide HERE
function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  let dots = document.getElementsByClassName('board')[0].children

  // using modern style looping instead of traditional for-loop
  Array.from(dots).forEach(function (dot) {
    if (dot.classList.contains('green')) {
      totals.green += 1;
    }
    
    if (dot.classList.contains('blue')) {
      totals.blue += 1;
    }
    
    if (dot.classList.contains('invisible')) {
      totals.invisible += 1;
    }
  });

  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}