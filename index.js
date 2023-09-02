const buttons = async() =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
   const data = await res.json();
  //  const arr = Object.values(data);
  //  console.log(data.data)
  const catagories = data.data;
  // console.log(catagory)
  const items = data.data;

    catagory(catagories);
    console.log(data)


}

  let x=false;
  const sortButton = document.getElementById('sort');
  sortButton?.addEventListener('click',  () => {
       x=true;
       console.log(x);
  })
  // Re-append the sorted card elements to the container



//creating buttons 
const catagory = (catagories ) =>{
  const buttonContainer = document.getElementById('button-container');
  let count =0;
  catagories.forEach(item=>{
       ++count;
      //  console.log(item.category_id)
     const div = document.createElement('div');

     
     div.innerHTML=`
     
     <button  id="button${count}" class="btn normal-case  active:bg-red-600">${item.category}</button>
       
     `
   
 


     buttonContainer?.appendChild(div);
     const buttonhere = document.getElementById(`button${count}`);
  
     buttonhere?.addEventListener('click',()=>{
      
      cardContainer(`${item.category_id}`)
      // display(`${item.category_id}`)
     

      //  x(`${item.category_id}`)
         console.log(item.category_id)
     })
   
 

  })
}
  
   
  
   
 
  //now making card and also make catagory wise card 
  const cardContainer= async (id) =>{
    
      const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
      const data = await res.json();
      console.log(data);

       const items = data.data;
      const cardContainer = document.getElementById('card-container');
      const nai = document.getElementById('nai-container');
      nai.innerHTML='';
      cardContainer.innerHTML='';
      // const items = data.data;
  


       const r= items.length===0?'':'hidden';
          const div = document.createElement('div');
          div.classList=`flex flex-col justify-center items-center`;
          div.innerHTML=`
            <img src="./images/Icon.png">
            
             <h1 class="card-title text-center">Oops!! Sorry, There is no <br> content here</h1>
          ` 
        
          nai?.appendChild(div);
          nai.classList=`${r}`;
       console.log(items);
       
      items.forEach(item =>{
             
            // console.log(arr);
        const card = document.createElement('div');
        card.classList =`card`;
        // console.log(item.authors[0].verified)
        let result = (item.authors[0]?.verified)?"fa-solid fa-certificate":'';
        let seconds = (item.others?.posted_date);
        // console.log(seconds);
        seconds=parseFloat(seconds)
        // console.log(seconds);
        
          seconds=parseFloat(seconds);
          const hours=seconds/3600;
          const NowHour = parseInt(hours);
          const Minitues = (hours-NowHour)*60;
          const NowMinitues = parseInt(Minitues);
          // console.log(NowHour,NowMinitues)
          const res = isNaN(NowHour)?'hidden':'';
          // console.log(res)
        card.innerHTML = `
      
        <div class="relative"><img src="${item?.thumbnail}" alt="images" class="w-full lg:h-60"  />
        
        <div class="absolute bottom-0 right-0  ">
         <button class="${res} btn btn-neutral normal-case" >${NowHour}Hours ${NowMinitues}Minitues</button>
         
         </div> 
         </div>
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
              <p id="view">${item.others.views}</p>
          </div>
        </div>
         </div>
         </div>
        
        
        `
    
        
        cardContainer?.appendChild(card)
        
      })

  
    }


    

  







cardContainer(1000)

buttons();