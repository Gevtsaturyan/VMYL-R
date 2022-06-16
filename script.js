window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav_style").style.top = 10 +'px';
      document.getElementById('logotiv').style.backgroundImage='url(./img/IMG_20220615_124331.jpg)'
      document.getElementById('pageNames').style.color='black'
      document.getElementById('a_page').style.color='black'
      document.getElementById('icon').style.color='black'
    } else {
      document.getElementById("nav_style").style.top = (-120) +"px";
      document.getElementById('logotiv').style.backgroundImage='url(./img/IMG_20220615_124012.jpg)'
      document.getElementById('pageNames').style.color='white'
      document.getElementById('a_page').style.color='white'
      document.getElementById('icon').style.color='white'
    }
  };
  scrollFunction()
 
  var icon=document.getElementById('icon')
  icon.onclick=()=>{

        document.getElementById('menud').style.right=0+'px';
        document.getElementById('menud').style.display='block';
 
  }
  document.getElementById('divx').onclick=()=>{
    document.getElementById('menud').style.right=-250+'px'
    document.getElementById('menud').style.display='none'
    
  }
  var x=0
  document.getElementById('h3about').onclick=()=>{
      x++
      if(x%2==0){
        document.getElementById('divabout').style.display='none'
      }else{document.getElementById('divabout').style.display='block'}
  }

  document.getElementById('h3about2').onclick=()=>{
    x++
    if(x%2==0){
      document.getElementById('divabout2').style.display='none'
    }else{document.getElementById('divabout2').style.display='block'}
}
document.getElementById('h3about3').onclick=()=>{
  x++
  if(x%2==0){
    document.getElementById('divabout3').style.display='none'
  }else{document.getElementById('divabout3').style.display='block'}
}

 
