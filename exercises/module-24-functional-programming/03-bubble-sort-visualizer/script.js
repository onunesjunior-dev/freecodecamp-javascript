const arrayContainer = document.getElementById('array-container');
const startingArray = document.getElementById('starting-array');
const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');

let currentArray = [];

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

function generateContainer() {
  return document.createElement('div');
}

function fillArrContainer(element, array) {
  element.innerHTML = '';
  array.forEach((num) => {
    const span = document.createElement('span');
    span.textContent = num;
    element.appendChild(span);
  });
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(array, index) {
  if (!isOrdered(array[index], array[index + 1])) {
    const temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
  }
}

function highlightCurrentEls(element, index) {
  if (element.children && element.children[index]) {
    element.children[index].style.border = '2px dashed red';
  }
  if (element.children && element.children[index + 1]) {
    element.children[index + 1].style.border = '2px dashed red';
  }
}

generateBtn.addEventListener('click', () => {
  const children = Array.from(arrayContainer.children);
  children.forEach((child) => {
    if (child.id !== 'starting-array') {
      child.remove();
    }
  });

  currentArray = generateArray();
  fillArrContainer(startingArray, currentArray);
});

sortBtn.addEventListener('click', () => {
  let arr = Array.from(startingArray.children).map((span) =>
    Number(span.textContent)
  );

  if (arr.length === 0 && currentArray.length > 0) {
    arr = [...currentArray];
    fillArrContainer(startingArray, arr);
  }

  if (arr.length === 0) return;

  const children = Array.from(arrayContainer.children);
  children.forEach((child) => {
    if (child.id !== 'starting-array') {
      child.remove();
    }
  });

  highlightCurrentEls(startingArray, 0);

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (!isOrdered(arr[i], arr[i + 1])) {
        swapped = true;
      }
      swapElements(arr, i);

      const container = generateContainer();
      fillArrContainer(container, arr);
      arrayContainer.appendChild(container);

      if (i < arr.length - 2) {
        highlightCurrentEls(container, i + 1);
      }
    }
    if (swapped) {
      const lastContainer = arrayContainer.lastElementChild;
      highlightCurrentEls(lastContainer, 0);
    }
  } while (swapped);
});
