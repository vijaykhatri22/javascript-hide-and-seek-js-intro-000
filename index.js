function getFirstSelector(selector){
  //console.log(document.querySelector(selector));
  return document.querySelector(selector);
}

function nestedTarget(){
  const id = document.querySelector('#nested');
  return id.querySelector('.target');
}
function increaseRankBy(n) {
  const rank=[];
  const list = document.querySelectorAll(".ranked-list");
  for(var i=0;i<list.length;i++){
    rank[i]=parseInt(list[i].innerHTML,10) + n;

    console.log(rank[i]);
  }


return rank;

}
