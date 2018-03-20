function getFirstSelector(selector){
  //console.log(document.querySelector(selector));
  return document.querySelector(selector);
}

function nestedTarget(){
  const id = document.querySelector('#nested');
  return id.querySelector('.target');
}
function increaseRankBy(n) {
  const list = document.querySelectorAll(".ranked-list li");
  //const number = [];
  for(var i=0;i<list.length;i++){
    list[i].innerHTML = parseInt(list[i].innerHTML,10) + n;
  }
}

function deepestChild(){
  const child = document.querySelector('#grand-node');
  const nextChild = [];
  while (child) {
    
    child=child.querySelector('div');
    
    
    
  }


}
