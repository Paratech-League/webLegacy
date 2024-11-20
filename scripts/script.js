// Função do Load;

const start = document.querySelector(".divTitle");
const head = document.querySelector(".divH");
const inter = document.querySelector(".inter");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const loadbox = document.querySelector(".load-box");
const hed = document.querySelector(".head")

const loadingHome = () => {
  document.body.style.height = "100dvh";
  title.style.transform = "translate(-3000px)";
  subtitle.style.transform = "translate(3000px)";
  loadbox.style.opacity = "0";
  head.style.backgroundSize = "cointain";
  hed.style.backgroundSize = "100% 100%";
  hed.style.animation = "none";
  start.classList.remove("closedT");
  start.classList.add("startedT");
  inter.classList.remove("none-class");
  inter.classList.add("open-class");
  title.classList.add("none-class");
  subtitle.classList.add("none-class");
  loadbox.classList.add("none-class");
  setTimeout( () => {
    head.style.height = "240px";
  }, 700);
  start.remove();
}

const loading = () => {
  document.body.style.height = "100dvh";
  title.style.transform = "translate(-3000px)";
  subtitle.style.transform = "translate(3000px)";
  loadbox.style.opacity = "0";
  head.style.backgroundSize = "cointain";
  hed.style.backgroundSize = "100% 100%";
  hed.style.animation = "none";
  start.classList.remove("closedT");
  start.classList.add("startedT");
  inter.classList.remove("none-class");
  inter.classList.add("open-class");
  title.classList.add("none-class");
  subtitle.classList.add("none-class");
  loadbox.classList.add("none-class");
  setTimeout( () => {
    head.style.display = "none";
  }, 700);;
  start.remove();
}

// Funções do Menu;

const burguerButton = document.querySelector(".burguer-box");
const navMenu = document.getElementsByTagName("ul")[0];

const showMenu = () => {
  setTimeout( () => {
    burguerButton.style.display = "flex";
    burguerButton.style.opacity = "1";
  }, 500)
}

burguerButton.addEventListener("click", () => {
  burguerButton.classList.toggle("burguer-close");
  burguerButton.classList.toggle("burguer-open");
  
  navMenu.classList.remove("none-class");
  navMenu.classList.add("nav-menu");
  navMenu.classList.toggle("close-nav");
  navMenu.classList.toggle("open-nav");
  
  animationNav()

})


const animationNav = () => {
  if(navMenu.classList.contains("close-nav")){

    document.querySelector(".home-item").style.transform = "translateX(-80px)";
  
    document.querySelector(".projc-item").style.transform = "translateX(-210px)";
  
    document.querySelector(".docmts-item").style.transform = "translateX(-350px)";
    setTimeout( () => {
  
      document.querySelector(".home-item").style.opacity = "0";
  
      document.querySelector(".projc-item").style.opacity = "0";
    
      document.querySelector(".docmts-item").style.opacity = "0";
        
    }, 200)
    setTimeout( () => {
  
      document.querySelector(".home-item").style.display = "none";
  
      document.querySelector(".projc-item").style.display = "none";
    
      document.querySelector(".docmts-item").style.display = "none";
        
    }, 200)
  } else{
  
    document.querySelector(".home-item").style.display = "flex";

    document.querySelector(".projc-item").style.display = "flex";
  
    document.querySelector(".docmts-item").style.display = "flex";

    setTimeout( () => {
  
      document.querySelector(".home-item").style.opacity = "1";
  
      document.querySelector(".projc-item").style.opacity = "1";
    
      document.querySelector(".docmts-item").style.opacity = "1";
    }, 100)

    setTimeout( () => {

      document.querySelector(".home-item").style.transform = "translateX(0px)";
    
      document.querySelector(".projc-item").style.transform = "translateX(0px)";
    
      document.querySelector(".docmts-item").style.transform = "translateX(0px)";
        
    }, 200)
  }
}

animationNav();


// Funções do Carrossel;

