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
