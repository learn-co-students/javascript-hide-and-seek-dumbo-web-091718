function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild(){
  let node = document.querySelector('div#grand-node');
  let children = node.children[0]
  while (children){
    node=node.children[0]
    children=node.children[0]
  }
  return node
}


function increaseRankBy(n){
  let list = document.querySelectorAll("ul.ranked-list");
  for(let i=0;i<list.length;i++){
    let children = list[i].children;
    for (let j=0;j<children.length;j++){
      children[j].innerHTML = parseInt(children[j].innerHTML)+n;
    }
  }
} 

