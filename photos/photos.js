

const loadphotos = ()=>
{
    const url="https://jsonplaceholder.typicode.com/photos";
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>showPhotos(data))
}
// loadphotos();

const showPhotos = photos=>{

 const something = document.getElementById("section")

  photos.forEach(pic=>{

    const div = document.createElement("div")
    div.classList.add("design");
    div.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${pic.thumbnailUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pic.title}</h5>
      
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

    `;

  something.appendChild(div);

    
  })



}
