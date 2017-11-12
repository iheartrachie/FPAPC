var soundOn = false;
var quietCats = 0;
var loudCats = 0;

function tappyTappy() {
  var target = event.target.id;

  if (target === 'audioText') { return }

  var imageFileCount = 5;
  var soundFileCount = 5;
  var image = createImage(imageFileCount);

  countCat();
  addImage(image);
  animateImage(image.id, event);
  meow(soundFileCount);
}

function countCat() {
  if (soundOn) {
    loudCats++;
    document.getElementById('loudCount').innerHTML = 'loud cats: ' + loudCats;
  } else {
    quietCats++;
    document.getElementById('quietCount').innerHTML = 'quiet cats: ' + quietCats;
  }
}

function toggleSound() {
  soundOn = !soundOn;

  var audioText = document.getElementById('audioText');
  var textDecoration = soundOn ? 'none' : 'line-through';

  audioText.style.textDecoration = textDecoration;
}

function createImage(fileCount) {
  var image = document.createElement('img');
  var file = Math.ceil(Math.random() * fileCount);
  var id = Math.ceil(Math.random() * 10000);

  image.setAttribute('id', id);
  image.class = 'noselect';
  image.style.position = 'absolute';
  image.style.display = 'none';
  image.src = './cat_pics/' + file + '.png';

  return image;
}

function addImage(image) {
  var src = document.getElementById('container');

  src.appendChild(image);
}

function animateImage(id, event) {
  var container = document.getElementById('container');
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

      image.style.display = 'block';
      image.style.top = y + 'px';
      image.style.left = x + 'px';

      var positionInfo = image.getBoundingClientRect();

      outOfBoundsY = positionInfo.bottom < 0 || positionInfo.top > container.clientHeight;
      outOfBoundsX = positionInfo.right < 0 || positionInfo.left > container.clientWidth;
    }
  }
}

function meow(fileCount) {
  if (!soundOn) { return }
  var file = Math.ceil(Math.random() * fileCount);
  var audio = new Audio('./meows/' + file + '.mp3');

  audio.play();
}
