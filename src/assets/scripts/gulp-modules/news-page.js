var showMoreButton = document.getElementById("show-more-button");
var newsContainer = document.querySelector(".news__list");
var newsItems = newsContainer.querySelectorAll(".news");
var itemsPerLoad = 4;
let visibleCardCount = 4; // Початкова кількість видимих карток
var startIndex = 0;

// Функція, яка приховує всі карточки новин
function hideAllNews() {
  newsItems.forEach(function (item) {
    item.classList.add("news-hidden");
  });
}

// Функція, яка відображає карточки новин відповідно до індексу
function showNews(startIndex, endIndex) {
  for (var i = startIndex; i < endIndex; i++) {
    if (newsItems[i]) {
      newsItems[i].classList.remove("news-hidden");
    }
  }

  if (visibleCardCount == newsItems.length) {
    showMoreButton.style.display = 'none';
  }
}

// Функція, яка обробляє клік на кнопці "Більше"
function showMoreNews() {
  var nextIndex = startIndex + itemsPerLoad;
  showNews(startIndex, nextIndex);
  startIndex = nextIndex;

  // Перевіряємо, чи всі карточки новин вже відображені
  if (startIndex >= newsItems.length) {
    showMoreButton.style.display = "none"; // Приховуємо кнопку "Більше"
  }
}

// Приховуємо всі карточки новин при завантаженні сторінки
hideAllNews();

showMoreButton.addEventListener('click', function () {
  const cards = document.querySelectorAll('.news__list .news');

  // Перевірка, чи є ще картки, які можна показати
  if (visibleCardCount < cards.length) {
    for (let i = visibleCardCount; i < visibleCardCount + 4; i++) {
      // Перевірка, чи існують картки, які слід показати
      if (cards[i]) {
        cards[i].style.display = 'block';
      }
    }

    // Збільшення кількості видимих карток
    visibleCardCount += 4;

    // Перевірка, чи більше не залишилося карток для показу
    if (visibleCardCount >= cards.length) {
      showMoreButton.style.display = 'none';
    }
  }
});

// Показуємо перші 4 карточки новин
showNews(startIndex, startIndex + itemsPerLoad);
