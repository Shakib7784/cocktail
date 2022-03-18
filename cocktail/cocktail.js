

// get spinner
const togglespinner = spin=>{

    document.getElementById("spinner").style.display=spin;
}
const getCocktail= ()=>
{
    togglespinner("block");
    
        const inputfield = document.getElementById("input");
        const inputfieldValue = inputfield.value;
        //removing previous text from input field
        inputfield.value = '';
        // showing error message if user search without anything
        if ( inputfieldValue=='')
        {
            document.getElementById("errorp").style.display="block";
        }
        else
        {
            document.getElementById("errorp").style.display="none";
            
            const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php? s=${inputfieldValue}`;
            fetch(url)
            .then(Response=>Response.json())
            .then(data=> displaydrinks(data.drinks))
            .catch(error=>showerror(error))
        }   
}
//showing error
const showerror = er=>{

    const show = document.getElementById("showerror");
    const p = document.createElement("p");
    p.classList.add("err");
    p.innerHTML=`
    sorry there is some error. <br>
    errors are : ${er}
    `
    show.appendChild(p);
    togglespinner("none");
    
}



const displaydrinks = drinksAll =>{

    console.log(drinksAll);
  
    const callDisplay = document.getElementById("display");
    
     // showing error if user searched by any name which is not avaiable inside therir list
    
    // clear previous searched result
    callDisplay.innerText='';
   

        drinksAll.forEach(drink=>{

            const div = document.createElement("div");
            div.classList.add("col");
            div.innerHTML=`
            
             <div class="col">
                <div class="card" onclick="getconctailID(${drink.idDrink})">
                     <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                     <div class="card-body">
                     <h5 class="card-title">${drink.strDrink}</h5>
                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                 </div>
            </div>
            `
              
            callDisplay.appendChild(div);  
        }) 
        togglespinner("none");
        //stop showing error when we get correct result
        document.getElementById("showerror").style.display="none";
        
}

const getconctailID = cocid=>{
    
    togglespinner("block");

        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocid}`;
        fetch(url)
        .then(response=>response.json())
        .then(json=>showsingle(json.drinks[0]));

}

const showsingle= single=>{

    
            const singledisplay = document.getElementById("singledisplay");
           
            // removing previous data from single display
            singledisplay.innerHTML="";
            const div= document.createElement("div");
            div.classList.add("card");
            div.innerHTML=`
            <img src="${single.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">${single.strDrink}</h5>
              <p class="card-text">${single.strInstructionsDE?single.strInstructionsDE.slice(0,100):"description is not available"}</p>
              <a target="_blank"  href="${single.strImageSource}" class="btn btn-primary">Go somewhere</a>
            </div>
            `;
            singledisplay.appendChild(div);
           /*  singledisplay.addEventListener("click",function(){
                invisible();
            }) */
            togglespinner("none");
           

}

/* const invisible = ()=>{

    document.getElementById("singledisplay").style.display="none";


} */