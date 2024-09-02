let item=document.querySelectorAll('.timeline li');
function isElementInViewPort(el){
    var rect=el.getBoundingClientRect();
    return(
        rect.top>=0 && 
        rect.left>=0 && 
        rect.bottom<=(window.innerHeight || document.documentElement.clientHeight) &&
        rect.right<=(window.innerWidth || document.documentElement.clientWidth)
    )
}
function callbackFunc(){
    for(let i=0;i<item.length;i++){
        if(isElementInViewPort(item[i])){
            item[i].classList.add('in-view')
        }
        else{
            item[i].classList.remove('in-view')
        }
    }
}
window.addEventListener('load',callbackFunc);
window.addEventListener('resize',callbackFunc)
window.addEventListener('scroll',callbackFunc)

