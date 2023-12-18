const cube = document.getElementById('cube');
const cubeWidth = cube.clientWidth;
const cubeHeight = cube.clientHeight;

let xPosition = (window.innerWidth - cubeWidth) / 2;
let yPosition = (window.innerHeight - cubeHeight) + -50;

let imageIndex = {
  forward: 1,
  backward: 1,
  left: 1,
  right: 1
};

let lastImageChangeTime = 0;

cube.style.transform = `translate(${xPosition}px, ${yPosition}px)`;

document.addEventListener('keydown', (event) => {
  const speed = 15;
  const imageChangeDelay = 75;

  const currentTime = new Date().getTime();

  if (currentTime - lastImageChangeTime < imageChangeDelay) {
    return;
  }

  switch (event.key) {
    case 'w':
      imageIndex.forward = (imageIndex.forward % 3) + 1;
      cube.style.backgroundImage = `url(images/forward${imageIndex.forward}.png)`;
      yPosition = Math.max(yPosition - speed, 0);
      break;
    case 's':
      imageIndex.backward = (imageIndex.backward % 3) + 1;
      cube.style.backgroundImage = `url(images/backward${imageIndex.backward}.png)`;
      const maxY = window.innerHeight - cube.clientHeight;
      yPosition = Math.min(yPosition + speed, maxY);
      break;
    case 'a':
      imageIndex.left = (imageIndex.left % 3) + 1;
      cube.style.backgroundImage = `url(images/left${imageIndex.left}.png)`;
      xPosition = Math.max(xPosition - speed, 0);
      break;
    case 'd':
      imageIndex.right = (imageIndex.right % 3) + 1;
      cube.style.backgroundImage = `url(images/right${imageIndex.right}.png)`;
      const maxX = window.innerWidth - cube.clientWidth;
      xPosition = Math.min(xPosition + speed, maxX);
      break;
  }

  cube.style.transition = 'transform 0.2s ease';
  cube.style.transform = `translate(${xPosition}px, ${yPosition}px)`;

  lastImageChangeTime = currentTime;
});





