function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){
    let rankedList = document.querySelectorAll('.ranked-list li')
    rankedList.forEach(function(li) {
        li.innerText = parseInt(li.innerText) + n
    })
}

function deepestChild(){
    return document.querySelector('#grand-node div div div div')
}
