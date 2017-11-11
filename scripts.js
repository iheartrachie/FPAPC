function tappyTappy() {
  var fileCount = 5;
  var image = createImage(fileCount);

  addImage(image);
  animateImage(image.id, event);
  meow();
}

function createImage(fileCount) {
  var image = document.createElement('img');
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
  var body = document.getElementById('body');
  var image = document.getElementById(id);
  var y = event.clientY - 150;
  var x = event.clientX - 150;
  var directionY = Math.round(Math.random() * 20 - 10);
  var directionX = Math.round(Math.random() * 20 - 10);
  var outOfBoundsY = false;
  var outOfBoundsX = false;
  var id = setInterval(frame, 10);

  function frame() {
    if (outOfBoundsY || outOfBoundsX) {
      image.remove();
      clearInterval(id);
    } else {
      y += directionY;
      x += directionX;

      image.style.top = y + 'px';
      image.style.left = x + 'px';

      var positionInfo = image.getBoundingClientRect();

      outOfBoundsY = positionInfo.bottom < 0 || positionInfo.top > body.clientHeight;
      outOfBoundsX = positionInfo.right < 0 || positionInfo.left > body.clientWidth;
    }
  }
}

function meow() {
  console.log('meow');
  //TODO Add meow sound
  //TODO Add ability to toggle sound
}
