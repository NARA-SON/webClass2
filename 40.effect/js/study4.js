$(document).ready(function(){

  for (i = 1; i < 21; i++) {
    
    document.write(`<li>
    <img class="small" src="./img/s${i}.jpg" alt="작은이미지${i}">
    <img class="big" src="./img/pic${i}.jpg" alt="큰이미지${i}">
    <h2 class="title">Artwork ${i}</h2>
    <p>Artwork description comes here.<br>2023.06.20</p>
    <span class="btnClose">Close</span>
    </li>`)
    
  }

})