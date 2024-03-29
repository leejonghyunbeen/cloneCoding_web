//로그인 탭 제목 클릭 시 해당 내용 활성화 JS
//(초기) 로그인내용 0 ,일회용내용x ,qr코드내용x id로그인 제목 활성화css
//1.ID로그인을 클릭하묜 로그인내용 0, 일회용 내용X ,QR코드내용X
//2.일회용내용을클릭하묜 로그인내용 X, 일회용 내용0 ,QR코드내용X
//3.일회용내용을클릭하묜 로그인내용 X, 일회용 내용X ,QR코드내용0
//제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
//내용 변수
const login_container = document.querySelectorAll('.login_container .login_c')

//초기 모든 내용 숨기기 - > id로그인만 보이기
const hide = ()=>{
    for(let i of login_container){i.style.display='none'}
}
hide()
login_container[0].style.display = 'block'

//초기값 ID로그인 활성화 시키기 (active)*클릭전
login_title[0].parentElement.classList.add('active')

// 초기 탭 제목 디자인 숨기기
const title_active_remove = () =>{
    for(let rr of login_title){rr.parentElement.classList.remove('active')}
}

//탭 제목 클릭 시 클릭한 대상에만 디자인 적용하기
login_title.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener('click',()=>{
        title_active_remove() // 호출해서 원하는 곳만 활성화
        t.parentElement.classList.add('active')
        hide()
        login_container[i].style.display = 'block'
    })
})
// ===================================================
console.log('로그인 메세지 출력 ================')
//ID로그인시 틀린 정보 또는 입력되지 않은 정보에 따라 message 출력하기
//1. 아이디 미입력 후 로그인 버튼 클릭 -> ' 아이디를 입력해주세요'
//2. 아이디 입력 , 비밀번호 미입력 후 로그인 버튼 클릭 -> '비밀번호를 입력해 주세요'
//3. 아이디 ,비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않다면 =>아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다 ."입력하신 내용을 확인해주세여."
//4. 아이디,비번 입력후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 "어서오세요 oo님"
const userIdInput = document.querySelector('#userId')
const userPwInput = document.querySelector('#userpW')
const error_message = document.querySelector('.error_message')
const loginBtn =document.querySelector('#loginBtn')
console.log(userIdInput,userPwInput,error_message,loginBtn)
const userList = [{
    id:'admin',
    pw:'1234'
}]

console.log(userIdInput.value)
console.log(userIdInput.value == '')
loginBtn.addEventListener('click',()=>{
    if(userIdInput.value ===''){/* 아이디 빈 문자열 검사 -> 참이라면 */
        error_message.innerHTML = '아이디를 입력해주세요'/* 참일 때 실행 */
    }else if(userPwInput.value ===''){
        error_message.innerHTML = '비밀번호를 입력해주세요'
    }else if(userIdInput.value == userList[0].id && userPwInput.value == userList[0].pw){
        alert(' 맞아여!어서오세요') 
    }else {
        error_message.innerHTML = '아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다 ."입력하신 내용을 확인해주세여'
        userPwInput.value= ''
    }
})
console.log(userIdInput.value == 'a')
console.log(userIdInput.value)
console.log(userList[0])
const number = document.querySelector('#number')
const login_btn = document.querySelector('#login_btn')
const error = document.querySelector('.error')
console.log(number,login_btn,error)
login_btn.addEventListener ('click',()=>{
    if(number.value ===''){
        error.innerHTML = '번호를 입력해 주겠니? ㅎ'
    }
})