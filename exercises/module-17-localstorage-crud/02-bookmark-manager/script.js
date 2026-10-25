// 1. Elementos do DOM
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");
const categoryNameHeaders = document.querySelectorAll(".category-name");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

const viewCategoryButton = document.getElementById("view-category-button");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const categoryList = document.getElementById("category-list");

// 2. Persistência
const getBookmarks = () => {
  try {
    const rawData = localStorage.getItem("bookmarks");
    if (!rawData) return [];

    const parsedData = JSON.parse(rawData);
    if (!Array.isArray(parsedData)) return [];

    const isValidArray = parsedData.every(
      (item) =>
        item &&
        typeof item === "object" &&
        typeof item.name === "string" &&
        typeof item.category === "string" &&
        typeof item.url === "string"
    );

    return isValidArray ? parsedData : [];
  } catch (error) {
    return [];
  }
};

// 3. Controles de Visibilidade
const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

// 4. Renderização
const renderCategoryList = () => {
  const selectedCategory = categoryDropdown.value;
  const bookmarks = getBookmarks();
  const filteredBookmarks = bookmarks.filter(
    (bookmark) => bookmark.category === selectedCategory
  );

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    categoryList.innerHTML = filteredBookmarks
      .map(
        ({ name, url }) => `
        <input type="radio" id="${name}" value="${name}" name="bookmark">
        <label for="${name}"><a href="${url}">${name}</a></label>
      `
      )
      .join("");
  }
};

// 5. Event Listeners
addBookmarkButton.addEventListener("click", () => {
  categoryNameHeaders.forEach((header) => {
    header.innerText = categoryDropdown.value;
  });
  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();
  const newBookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  };

  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

viewCategoryButton.addEventListener("click", () => {
  categoryNameHeaders.forEach((header) => {
    header.innerText = categoryDropdown.value;
  });
  renderCategoryList();
  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkButton.addEventListener("click", () => {
  const selectedRadio = categoryList.querySelector(
    'input[type="radio"]:checked'
  );
  if (!selectedRadio) return;

  const bookmarks = getBookmarks();
  const bookmarkIndex = bookmarks.findIndex(
    (bookmark) =>
      bookmark.name === selectedRadio.value &&
      bookmark.category === categoryDropdown.value
  );

  if (bookmarkIndex !== -1) {
    bookmarks.splice(bookmarkIndex, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderCategoryList();
  }
});
