const ham = document.querySelector(".hc .ham");

const nav = document.querySelector("nav");
const i = document.querySelector(".ham i");



ham.addEventListener('click', () => {
    if(i.classList.contains("fa-bars"))
    {
        i.classList.remove("fa-bars");
        i.classList.toggle("fa-times");
        nav.classList.toggle('open');
    }
    else{
        i.classList.remove("fa-times");
        i.classList.toggle("fa-bars");
        nav.classList.toggle('open');
    }

})


const links = document.querySelectorAll("li a");
const linkLen = links.length;
const curPage = location.href;
for(let i=0; i<linkLen; i++){
    if(links[i].href === curPage){
        links[i].className=links[i].className+' active';
    }
}

