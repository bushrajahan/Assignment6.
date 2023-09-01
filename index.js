const buttons = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
     const data = await res.json();
    //  console.log(data.data)
    const catagories = data.data;
    // console.log(catagory)
      catagory(catagories);
}

//creating buttons 
const catagory = (catagories) =>{
    const buttonContainer = document.getElementById('button-container');
    let count =0;
    catagories.forEach(item=>{
         ++count;
        //  console.log(item.category_id)
       const div = document.createElement('div');
       
       
       div.innerHTML=`
       
       <button  id="button${count}" class="btn normal-case ">${item.category}</button>
       
       `
        
       buttonContainer?.appendChild(div);
       const buttonhere = document.getElementById(`button${count}`);
       buttonhere?.addEventListener('click',()=>{
           cardContainer(`${item.category_id}`)
           console.log(item.category_id)
       })
        

    })
}

    //now making card and also make catagory wise card 

    const cardContainer= async(id) =>{
        const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
        const data = await res.json();
        console.log(data.data);
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML='';
        const items = data.data;
        items.forEach(item =>{
          const card = document.createElement('div');
          card.classList =`card  bg-base-100 shadow-xl`;
          console.log(item.authors[0].verified)
          let result = (item.authors[0]?.verified)?"fa-solid fa-certificate":'';
          
          card.innerHTML = `
        
          <figure><img src="${item?.thumbnail}" alt="images" class="w-full lg:h-60"  /></figure>
          <div class="card-body">
          <div class="flex flex-col  lg:flex-row justify-between items-center">
          <div>
            <img src="${item.authors[0].profile_picture}" class="rounded-full w-16 h-16">
            </div>
              <div>
                <h2 class='card-title'>${item.title}</h2>
              </div>
            </div>
            <div>
                <p>${item.authors[0].profile_name}
                <span class="px-2"><i class="${result} text-blue-400"></i></span>
                </p>
                <p>${item.others.views}</p>
            </div>
          </div>
           </div>
           </div>
          
          
          `
          cardContainer?.appendChild(card)
          
        })
    
    

}



buttons();