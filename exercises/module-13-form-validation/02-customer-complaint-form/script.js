const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');
const complaintsGroup = document.getElementById('complaints-group');
const otherComplaint = document.getElementById('other-complaint');
const complaintDescription = document.getElementById('complaint-description');
const solutionsGroup = document.getElementById('solutions-group');
const otherSolution = document.getElementById('other-solution');
const solutionDescription = document.getElementById('solution-description');
const form = document.getElementById('form');

// 1. Função Central de Validação (Retorna Dicionário de Booleanos)
function validateForm() {
  const isFullNameValid = fullName.value.trim() !== '';
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const isOrderNoValid = /^2024\d{6}$/.test(orderNo.value.trim());
  const isProductCodeValid = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value.trim());
  const isQuantityValid = /^[1-9]\d*$/.test(quantity.value.trim());
  const isComplaintsGroupValid = complaintsGroup.querySelectorAll('input[type="checkbox"]:checked').length > 0;

  let isComplaintDescriptionValid = true;
  if (otherComplaint.checked) {
    isComplaintDescriptionValid = complaintDescription.value.length >= 20;
  }

  const isSolutionsGroupValid = solutionsGroup.querySelectorAll('input[type="radio"]:checked').length > 0;

  let isSolutionDescriptionValid = true;
  if (otherSolution.checked) {
    isSolutionDescriptionValid = solutionDescription.value.length >= 20;
  }

  return {
    'full-name': isFullNameValid,
    'email': isEmailValid,
    'order-no': isOrderNoValid,
    'product-code': isProductCodeValid,
    'quantity': isQuantityValid,
    'complaints-group': isComplaintsGroupValid,
    'complaint-description': isComplaintDescriptionValid,
    'solutions-group': isSolutionsGroupValid,
    'solution-description': isSolutionDescriptionValid
  };
}

// 2. Predicado de Validade Global
function isValid(validationObj) {
  return Object.values(validationObj).every(val => val === true);
}

// 3. Listeners Reativos no Evento 'change' para Feedback Imediato
fullName.addEventListener('change', () => {
  fullName.style.borderColor = validateForm()['full-name'] ? 'green' : 'red';
});

email.addEventListener('change', () => {
  email.style.borderColor = validateForm()['email'] ? 'green' : 'red';
});

orderNo.addEventListener('change', () => {
  orderNo.style.borderColor = validateForm()['order-no'] ? 'green' : 'red';
});

productCode.addEventListener('change', () => {
  productCode.style.borderColor = validateForm()['product-code'] ? 'green' : 'red';
});

quantity.addEventListener('change', () => {
  quantity.style.borderColor = validateForm()['quantity'] ? 'green' : 'red';
});

complaintsGroup.addEventListener('change', () => {
  complaintsGroup.style.borderColor = validateForm()['complaints-group'] ? 'green' : 'red';
});

complaintDescription.addEventListener('change', () => {
  if (otherComplaint.checked) {
    complaintDescription.style.borderColor = validateForm()['complaint-description'] ? 'green' : 'red';
  }
});

solutionsGroup.addEventListener('change', () => {
  solutionsGroup.style.borderColor = validateForm()['solutions-group'] ? 'green' : 'red';
});

solutionDescription.addEventListener('change', () => {
  if (otherSolution.checked) {
    solutionDescription.style.borderColor = validateForm()['solution-description'] ? 'green' : 'red';
  }
});

// 4. Tratamento do Envio com Pintura Completa de Bordas
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const results = validateForm();
  isValid(results);

  fullName.style.borderColor = results['full-name'] ? 'green' : 'red';
  email.style.borderColor = results['email'] ? 'green' : 'red';
  orderNo.style.borderColor = results['order-no'] ? 'green' : 'red';
  productCode.style.borderColor = results['product-code'] ? 'green' : 'red';
  quantity.style.borderColor = results['quantity'] ? 'green' : 'red';
  complaintsGroup.style.borderColor = results['complaints-group'] ? 'green' : 'red';

  if (otherComplaint.checked) {
    complaintDescription.style.borderColor = results['complaint-description'] ? 'green' : 'red';
  }

  solutionsGroup.style.borderColor = results['solutions-group'] ? 'green' : 'red';

  if (otherSolution.checked) {
    solutionDescription.style.borderColor = results['solution-description'] ? 'green' : 'red';
  }
});
