
const getFirstSelector = function(selector){
   return document.querySelector(selector)
 }


const nestedTarget = function(){
  return document.querySelector("#nested .target");
}

const deepestChild = function(){
  // nestedDivs = document.getElementById("grand-node").children
  let children = document.getElementById("grand-node").children
  return document.querySelector('#grand-node div div div div');
  // while (children[0].tagName === 'div'){
  //   currentEl = currentEl.children[0]
  //   children = currentEl.children
  // }

  // for (let i = 0; i < array.length; i++) {
  // 	console.log('hello')
  // }
}

describe('increaseRankBy(n)', () => {
  it('increases ranks in .ranked-list by n', () => {
    increaseRankBy(3)

    const rankedLists = document.querySelectorAll('.ranked-list')
    const firstList = rankedLists[0]
    const secondList = rankedLists[1]

    let children = firstList.children
    let start = 1
    for (let i = 0, l = children.length; i < l; i++) {
      expect(parseInt(children[i].innerHTML)).to.equal(start + i + 3)
    }

    children = secondList.children
    start = 12

    for (let i = 0, l = children.length; i < l; i++) {
      expect(parseInt(children[i].innerHTML)).to.equal(start - i + 3)
    }
  })
})
