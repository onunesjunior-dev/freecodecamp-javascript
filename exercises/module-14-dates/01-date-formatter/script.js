// 1. Captura da Data do Sistema
const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

// 2. Formatador Numérico Padrão Americano (MM/DD/YYYY)
function formatDateMMDDYYYY(date) {
  const formattedDate = date.toLocaleDateString("en-US");
  return `Formatted Date (MM/DD/YYYY): ${formattedDate}`;
}

// 3. Formatador Textual por Extenso (Month Day, Year)
function formatDateLong(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}
