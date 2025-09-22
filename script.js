function ChangeBackgroundImage(image) {
      document.getElementsByClassName("model")[0].style.backgroundImage = `url(${image})`;
    }

ChangeBackgroundImage('Images/Gemera.png');


    const buttons=document.querySelectorAll(".btnn");

   
    buttons.forEach(button =>{
        button.addEventListener("click",function(){

            document.querySelectorAll(".box").forEach(div=>div.classList.remove("active"));
            
            button.parentElement.classList.add('active');
        });
    });

function changeText(text1,text2){
    document.getElementById('head1').innerText=text1;
    document.getElementById('head2').innerHTML=text2;
}


 const navbar = document.querySelector('.fixed-top');
        let lastScrollTop = 0;


        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;

            // Transparent at top
            if (scrollTop === 0) {
                navbar.classList.add('transparent');
                navbar.classList.remove('scrolled');
              
            } else {
                navbar.classList.remove('transparent');
                navbar.classList.add('scrolled');
               
            }
            // Hide when scrolling down, show when scrolling up
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('hide'); // scrolling down
            } else {
                navbar.classList.remove('hide'); // scrolling up
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative
        });

        // set initial state
        navbar.classList.add('transparent');
