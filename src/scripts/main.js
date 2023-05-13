import humanizeDate from './utils/humanize'
import sortByDate from './utils/sortByDate'

function humanizeArticlesDate() {
  const $dates = document.querySelectorAll("time");
  $dates.forEach(humanizeDate);
}

function sortArticlesByDate() {
  const $cards = document.querySelectorAll('.post-list .card');
  const $sortedCards = [...$cards].sort(sortByDate);
  const $postList = document.querySelector('.post-list');

  [...$postList.children].forEach($child => $child.remove());
  $postList.append(...$sortedCards)
}

function main() {
  humanizeArticlesDate();
  sortArticlesByDate();
}

main();