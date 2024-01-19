const bg = document.querySelectorAll('.contents')
const link_a = document.querySelectorAll('.btn a')

link_a.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0,bg[i].offsetTop)
    })
})