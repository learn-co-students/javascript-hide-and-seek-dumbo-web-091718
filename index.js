function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested .target');
}

function deepestChild() {
  return document.querySelector('div#grand-node').getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0];
}

function increaseRankBy(n) {
  let rank = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i < rank.length; i++ ) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}
