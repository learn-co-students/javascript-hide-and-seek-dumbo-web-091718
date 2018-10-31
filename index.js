function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list');
  for (let x = 0, y = rankedLists.length; x < y; x++ ) {
    let children = rankedLists[x].children;

  for (let a = 0, b = children.length; a < b; a++) {
    children[a].innerHTML = parseInt(children[a].innerHTML) + n;
  }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

return node;
}
