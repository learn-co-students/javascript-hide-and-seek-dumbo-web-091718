const getFirstSelector = selector => {
  return document.querySelector(selector);
};

const nestedTarget = () => {
  return document.querySelector('#nested > div > div > div > div');
};

const increaseRankBy = n => {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].textContent = parseInt(lis[i].textContent) + n;
  }
};


function deepestChild() {
  const grandNode = document.getElementById('grand-node');
  let currentChild = null;
  let nextChild = grandNode.firstElementChild;
  while (nextChild) {
    currentChild = nextChild;
    nextChild = currentChild.firstElementChild;
  }
  return currentChild;
}