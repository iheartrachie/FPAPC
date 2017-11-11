function tappyTappy() {
  var image = createImage();

  addImage(image);
  animateImage(image.id, event);
  meow();
}

function createImage() {
  var image = document.createElement('img');
  var min = 0;
  var fileCount = 5;
  var file = Math.ceil(Math.random() * fileCount);
  var id = Math.ceil(Math.random() * 10000);

  image.setAttribute('id', id);
  image.style.position = 'absolute';
  image.src = './cat_pics/' + file + '.jpg';

  return image;
}

function addImage(image) {
  var src = document.getElementById('body');

  src.appendChild(image);
}

function animateImage(id, event) {
  var elem = document.getElementById(id);
  var top = event.clientY;
  var left = event.clientX;
  var directionY = Math.round(Math.random() * 10 - 10);
  var directionX = Math.round(Math.random() * 10 - 10);
  //TODO: Add offset
  var id = setInterval(frame, 1);

  function frame() {
    if (top == 3500) {
      clearInterval(id);
    } else {
      top += directionY;
      left += directionX;
      elem.style.top = top + 'px';
      elem.style.left = left + 'px';
    }
  }
}

function meow() {
  console.log('meow');
  //TODO Add meow sound
  //TODO Add ability to toggle sound
}
