//왼쪽 썸네일 이미지 js
//1. small_thimnail_a 마우스를 올리면
//2. big_thumnail -img(src) 값이 변경된다. (ex) big1 이 big 2 이미지 변경
const item_detail = document.querySelector ('.item_detail')
const small_thum =item_detail.querySelectorAll('.small_thumnail a')
const big_thum = item_detail.querySelector('.big_thumnail img')
console.log(item_detail,small_thum,big_thum)

small_thum[0].addEventListener('mouseover',function(){
    big_thum.src = "./dog_img/big1.jpg";
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src = "./dog_img/big2.jpg";
})


//가격 할인 정보 클릭 시 나오는 정보 팝업
//1.팝업 숨기기
//2. i클릭하면 팝업 보이기
const price_info = item_detail.querySelector('.price i[class$=info]')
const price_info_open =item_detail.querySelector('.price .open')
console.log(price_info,price_info_open)

price_info_open.style.display = 'none'; /*  html적는법 */
// price_info_open.style= 'display:none'
price_info.addEventListener('click',function(){
    price_info_open.style.display = 'block'
})

// 내일 출발  i 클릭시 팝업 출력하고 팝업 내 X클릭 시 팝업 닫히기 jS
//. 1팝업 숨기기
//2. x클릭시 팝업 닫히기
const delevery_info = item_detail.querySelector('.benefit_shipping i[class$=info]')
const delevery_popup = item_detail.querySelector('.benefit_shipping .open')
const delevery_popup_close =delevery_popup.querySelector('.close')
console.log(delevery_info,delevery_popup,delevery_popup_close)

delevery_popup.style.display = 'none';

delevery_info.addEventListener('click',function(){
    delevery_popup.style.display ='block';
})
delevery_popup_close.addEventListener('click',function(){
    delevery_popup.style.display = 'none';
})

