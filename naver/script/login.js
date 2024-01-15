//로그인 탭 제목 클릭 시 해당 내용 활성화 JS
//(초기) 로그인내용 0 ,일회용내용x ,qr코드내용x id로그인 제목 활성화css
//1.ID로그인을 클릭하묜 로그인내용 0, 일회용 내용X ,QR코드내용X
//2.일회용내용을클릭하묜 로그인내용 X, 일회용 내용0 ,QR코드내용X
//3.일회용내용을클릭하묜 로그인내용 X, 일회용 내용X ,QR코드내용0
//제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
//내용 변수
const id_login_container = document.querySelector('.login_container .id_login')
const disposable_login_container = document.querySelector('.login_container .disposable_login')
const qr_login_container = document.querySelector('.login_container .qr_login')
console.log(login_title)
console.log(id_login_container)
console.log(disposable_login_container)
console.log(qr_login_container)
//초기 일회용 ,qr내용 숨기기
disposable_login_container.style.display = 'none'
qr_login_container.style.display = 'none'
//1회용 클릭하면 로그인내용x,일회용내용0,qr코드내용x
login_title[1].addEventListener('click',function(){
    disposable_login_container.style.display = 'block'
    qr_login_container.style.display = 'none'
    id_login_container.style.display='none'
})
//id로그인 클릭하면 로그인 내용 0, 일회용내용x qr내용x
login_title[0].addEventListener('click',function(){
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'none'
    id_login_container.style.display='block'
})
login_title[2].addEventListener('click',function(){
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'block'
    id_login_container.style.display='none'
})