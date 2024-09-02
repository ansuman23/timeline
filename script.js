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
document.querySelectorAll('.timeline ul li').forEach(function(item) {
    item.addEventListener('click', function() {
        // Remove the highlight class from all divs and imgs
        document.querySelectorAll('.timeline ul li div').forEach(function(div) {
            div.classList.remove('highlight');
            div.querySelector('img').classList.remove('highlight'); // Remove from img
        });

        // Add the highlight class to the clicked item's div and img
        const div = this.querySelector('div');
        div.classList.add('highlight');
        div.querySelector('img').classList.add('highlight'); // Add to img
    });
});
window.addEventListener('load',callbackFunc);
window.addEventListener('resize',callbackFunc)
window.addEventListener('scroll',callbackFunc)

