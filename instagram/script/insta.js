// Q like img "like_off.png" 클릭시 SRC 속성값을 "like_on.png" 변경하기 
const like = document.querySelectorAll('.like')
const comment = document.querySelectorAll('.comment')
const send = document.querySelectorAll('.send')
console.log(like,comment,send)
// like.src = './images/like_on.png'
// 동일 재사용을 위해서
function onOff(name,status){
    return `./images/${name}_${status}.png`
}

function onOff_v2(target,name,status){
    return target.children[0].src = `./images/${name}_${status}.png`
}

like[0].addEventListener('click',function(){
    // console.log(like)
    // console.log(like.children)
    // console.log(like.children[0])
    // console.log(like.children[0].src)
    // like.children[0].src = onOff('like','on')
    //this -> 현재 이벤트 대상 객체 키워드!('이벤트 종류',function() 함수내에서 사용할 때)
    onOff_v2(this,'like','on')
})
comment[0].addEventListener('click',function(){
    onOff_v2(this,'comment','on')
}) 
send[0].addEventListener('click',function(){
    onOff_v2(this,'paper','on')
})

like[1].addEventListener('click',function(){
    onOff_v2(this,'like','on')
})
comment[1].addEventListener('click',function(){
    onOff_v2(this,'comment','on')
}) 
send[1].addEventListener('click',function(){
    onOff_v2(this,'paper','on')
})