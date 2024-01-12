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
let price_info_open_status =false //현제 상태 변수 숨김

price_info_open.style.display = 'none'; /*  html적는법 */
// price_info_open.style= 'display:none'
price_info.addEventListener('click',function(){
    if(price_info_open_status == false){
        price_info_open.style.display = 'block'
        price_info_open_status = !price_info_open_status
    }else{
        price_info_open.style.display = 'none'
        price_info_open_status = !price_info_open_status
    }
    
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
const delivery_menu_open =item_detail.querySelector('.delivery_menu_open')
const delivery_menu =item_detail.querySelector('.delivery_menu')
const delivery_menu_i =item_detail.querySelector('.delivery_menu i[class$=down]')
console.log(delivery_menu_open,delivery_menu,delivery_menu_i)
delivery_menu_open.style.display='none';
//배송1/9(화)도착 예정 94메뉴 클릭시
let delivery_menu_open_status = false//현제 상대 변수 (false == 숨김)
delivery_menu.addEventListener('click',function(){
    if(delivery_menu_open_status == false){
        console.log(delivery_menu_open_status) //open
        delivery_menu_open_status = !delivery_menu_open_status
        delivery_menu_i.style.transform = 'scaleY(-1)' 
        delivery_menu.style = 'boder-bottom-left-radius:0; boder-bottom-right-radius:0;'
        delivery_menu_open.style.display ='flex';
    }else{
        console.log(delivery_menu_open_status)
        delivery_menu_open_status = !delivery_menu_open_status
        delivery_menu_i.style.transform = 'scaleY(1)' 
        delivery_menu.style = 'boder-bottom-left-radius:5px ; boder-bottom-right-radius:0;'
        delivery_menu_open.style.display ='none';
    }
})
//------------------------------------------------------------------------
//상품의 색상, 사이즈 옵션을 선택했을 때 선택 정보가 selectResult에 결과값으로 출력되고 num_result의 구매 수량에 따라order_price에 가격이 출력되는 결과
//상세절차 : 상품 색상 ,사이즈 옵션을 선택했을 때 
// 색상을 선택안하면 사이즈가 안나온다 밑에 일단 세부 색상이 없다가  색상 및 메뉴선택시 색상밑 선택 옵션이 생기며 하나씩 추가할때마다 하나씩 늘어감  동일한 옵션을 두개 이상 담으면 팝업으로 이미 추가된 메뉴라고 뜬다  +버튼 누르면 1씩 추가가댐 
// 1.색상및 사이즈 미선택시 선택바 안나옴
// 
// 3.동일한 옵션 선택시 중복 팝업뜸
// 4.옵션 선택시 하나씩 추가되어간다


// 색상(옵션 1) 선택전 사이즈(옵션2 비활성화)
// 옵션1 선택시 옵션 2 활성화
//2-1 옵션 1에 대한 option데이터에 따라 옵션 2의 각 다른 select활성화
//3. 옵션 1 선택 후 옵션 2 클릭시 결과 출력
//3-1. 위 조건 달성 기준 결과 출력이 되어있는 상태라면 같은 옵션 클릭시 중복데이터 팝업 출력
//3-2 조건 달성 기준 결과 출력과 다른 옵션을 클릭시 추가 데이터 기존 데이터 아래출력
//위조건 달성기준 옵션 1,2 의 선택 데이터는 초기화됨

const colorOpt = document.querySelector('#colorOpt')
const sizeOpt = document.querySelector('#sizeOpt')
const selectResult = document.querySelector('.selectResult')
console.log(colorOpt,sizeOpt);
console.log(colorOpt.options[1].value)
console.log(colorOpt.options[1].value.text)
selectResult.style.display='none'
sizeOpt.ariaDisabled =true
//colorOpt, sizeOpt text데이터를 모두 변수로 수집후 
//createElement, appendChild를 이용해서 opt1, opt2 선택 데이터 출력하기
const optResult1 =document.createElement('span')
const optResult2 = document.createElement('span')
const resultView = document.querySelectorAll('.opt_list span')
let num =1;
let price = 36900;
const num_count = selectResult.querySelector('#num_count')
const order_price = selectResult.querySelector('.order_price')
const priceTotalView = document.querySelector('fieldset:nth-child(2) .order_price')
console.log (optResult1,optResult2,resultView)
colorOpt.addEventListener('change',function(){
    console.log(colorOpt.value)
    console.log(colorOpt.options[colorOpt.selectedIndex].text)
    optResult1.innerHTML =colorOpt.options[colorOpt.selectedIndex].text 
    console.log(colorOpt)
    sizeOpt.disabled =false
})
sizeOpt.addEventListener('change',function(){
    //선택 option 데이터 저장하기
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    optResult2.innerHTML =sizeOpt.options[sizeOpt.selectedIndex].text 
//선택옵션 부모 보이기
    selectResult.style.display ='grid'
    selectResult_stautus =true
    //선택옵션 적용 대상에 위 option데이터값 출력하기
    resultView[0].appendChild(optResult1)
    resultView[1].appendChild(optResult2) 
    //선택옵션의 수량(num) 출력하기
    num_count.value = Number(num)
    //선택옵션의 가격(price) 출력하기
    order_price.innerHTML = price.toLocaleString/* 소수점 새는법 */('ko-kr')+'원'
    priceTotalView.innerHTML = price.toLocaleString/* 소수점 새는법 */('ko-kr')+'원'
})

//selectresult 안 x클릭시 x의 부모 selectResult를 DOM관게로 선택해서 숨기기
const resultClose = selectResult.querySelector('.close')
console.log(resultClose)
resultClose.addEventListener('click',function(){
    console.log(resultClose.parentElement)
    resultClose.parentElement.style.display='none'
    selectResult_stautus = false
})
//수량  -, + 버튼 클릭시 수량값이 변경되며 그에 따라 가격 변동
const pluBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
let total =0
console.log(pluBtn,minusBtn)
//최소 구매수량 1, 최대 구매수량 7
//최소 구매수량 입니다
//재고 7개로 더 구매할 수 없습니다.
num_count.value=num
pluBtn.addEventListener('click',function(){
    if(num<7){
    //1.수량 1증가
    num ++ ;
    //1-1 수량 1 증가한 값 표시
    num_count.value=num
    //2.수량*가격 = 구매가격
    total =num*price
    //3,구매가 세자리 콤마 표시
    num_count.innerHTML = total.toLocaleString('ko-kr')+'원'
    order_price.innerHTML = total.toLocaleString('ko-kr')+'원'
}else{
    alert('재고 7개로 더 구매할 수 없습니다')
}
})
minusBtn.addEventListener('click',function(){
    if(num>1){
    num -- 
    num_count.value=num
    total =num*price
    num_count.innerHTML = total.toLocaleString('ko-kr')+'원'
    order_price.innerHTML = total.toLocaleString('ko-kr')+'원'
    }else{
        alert('최소구매수량입니다')
    }

})
//아무것도 안감긴 상태에서 추가누르면 장바구니에 추가해라,뜨게하기 
const cart_btn =document.querySelector('#cart')
const buy_btn =document.querySelector('#buy')
let selectResult_stautus =false
console.log(cart_btn,buy_btn)
cart_btn.addEventListener('click',()=>{
    // if(selectResult.style.display == 'none'){
    //     alert('옵션을 선택해라')
    // }else alert('장바구니에 담겼다잉?')
    if(selectResult_stautus == false){
        alert('옵션을 선택해라')
    }else {
        alert('장바구니에 추가되었습니다')   
    }
})