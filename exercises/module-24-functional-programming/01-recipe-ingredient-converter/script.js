const conversionTable = {
  cup: {
    gram: 240,
    ounce: 8.0,
    teaspoon: 48,
  },
  gram: {
    cup: 1 / 240,
    ounce: 0.0353,
    teaspoon: 0.2,
  },
  ounce: {
    cup: 0.125,
    gram: 28.35,
    teaspoon: 6,
  },
  teaspoon: {
    cup: 1 / 48,
    gram: 5,
    ounce: 0.167,
  },
};

const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  return conversionTable[fromUnit][toUnit] * quantity;
};

const adjustForServings = (baseQuantity) => (newServings) => {
  return baseQuantity * newServings;
};

const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);
  return convertQuantity(baseUnit)(newUnit)(adjustedQuantity).toFixed(2);
};

const ingredientName = document.getElementById('ingredient');
const ingredientQuantity = document.getElementById('quantity');
const unitToConvert = document.getElementById('unit');
const numberOfServings = document.getElementById('servings');
const recipeForm = document.getElementById('recipe-form');
const resultList = document.getElementById('result-list');

const units = ['cup', 'gram', 'ounce', 'teaspoon'];

const updateResultsList = () => {
  resultList.innerHTML = '';
  units.forEach((unit) => {
    if (unit !== unitToConvert.value) {
      const converted = processIngredient(
        ingredientQuantity.value,
        unitToConvert.value,
        unit,
        numberOfServings.value
      );
      resultList.innerHTML += `<li>${ingredientName.value}: ${converted} ${unit}</li>`;
    }
  });
};

recipeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateResultsList();
});
