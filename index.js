function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('.target')
}

function deepestChild() {
  return document.querySelectorAll('div#grand-node div')[3]
}

// function increaseRankBy(n) {
//   let allList = document.querySelectorAll('.ranked-list li')
//   allList.forEach( function(item, index, array){
//   item = parseInt(item.innerHTML) + n
// }   );
// }

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('.ranked-list');
  const list1 = rankedLists[0];
  const list2 = rankedLists[1];

  let children1 = list1.children;

  for (let i = 0; i < children1.length; i++){
    children1[i].innerHTML = parseInt(children1[i].innerHTML) + n;
  }

    let children2 = list2.children;

  for (let i = 0; i < children2.length; i++){
    children2[i].innerHTML = parseInt(children2[i].innerHTML) + n;
  }
}
