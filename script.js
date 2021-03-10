let img=document.querySelector('.img');
let box=document.querySelectorAll('.box');
img.addEventListener('dragstart',(e)=>{
    e.target.className+=' hold';
    setTimeout(() => {
        e.target.className='hide';
    }, 0);
})
img.addEventListener('dragend',(e)=>{
    e.target.className='img';
})
for(b of box)
{
    b.addEventListener('dragenter',(e)=>{
        e.target.className+=' dash';
    })
    b.addEventListener('dragleave',(e)=>{
        e.target.classList.remove('dash');
    })
    b.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
    b.addEventListener('drop',(e)=>{
        e.target.appendChild(img);
        e.target.classList.remove('dash');
    })
}