





fetch('https://omar-restaurant-api.herokuapp.com/menu')
            .then(response=>response.json())
            .then(json=>{
           var orignalc=`<div class=" filter-starters">
           <div class="menu-content">
             <a href="#">N</a><span>P</span>
           </div>
           <div class="menu-ingredients">
            I
           </div>
         </div>
         `;
            var menu=document.getElementById('menuuu');
            for(var i=0;i<json.length;i++){
                var mycon=document.createElement("div");
            var custc=orignalc;
            custc=custc.replace("N",json[i].name)
            custc=custc.replace("I",json[i].ingredients)
            custc=custc.replace("P",json[i].price);
            mycon.className='col-lg-6 menu-item';
            mycon.innerHTML=custc;
            menu.appendChild(mycon);

            }
})

fetch('https://omar-restaurant-api.herokuapp.com/contact')
.then(response=>response.json())
.then(json=>{
  var l=document.getElementById('locate');
  var g=document.getElementById('mail');
  var p1=document.getElementById('phonehead');
  var p2=document.getElementById('phonecon');
  var h2=document.getElementById('hourcon');
  var h1=document.getElementById('hourhead');


  for(var i=0;i<json.length;i++){

l.innerHTML=json[i].location;
g.innerHTML=json[i].gmail;
p1.innerHTML=json[i].phonenb;
p2.innerHTML=json[i].phonenb;
h1.innerHTML=json[i].workday+" "+json[i].workhour;  
h2.innerHTML=json[i].workday+"<br>"+json[i].workhour;
}

  

})




fetch('https://omar-restaurant-api.herokuapp.com/events')
            .then(response=>response.json())
            .then(json=>{
              var oc=`<div class=" filter-starters">
              <div class="menu-content">
                <a href="#">N</a><span>priceee</span>
              </div>
              <div class="menu-ingredients">
               I
              </div>
            </div>
            `
            ;
            // /* oc=`<div >
            //   <div class="row event-item">
            //     <div class="col-lg-6">
            //       <img src="assets/img/event-birthday.jpg" class="img-fluid" alt="">
            //     </div>

            //     <div class="col-lg-6 pt-4 pt-lg-0 content">
            //       <h3>N</h3>
            //       <div class="price">
            //         <p><span>priceee</span></p>
            //       </div>
            //       <p class="fst-italic">
            //        I
            //       </p>
                
                  
            //     </div>
            //   </div>
            // </div>`*/
               var event=document.getElementById('event');
               for(var i=0;i<json.length;i++){
                   var mycontent=document.createElement("div");
               var cc=oc;
               cc=cc.replace("N",json[i].name)
               cc=cc.replace("I",json[i].information)
               cc=cc.replace("priceee",json[i].price);
               mycontent.className='col-lg-6 menu-item';
              //  mycontent.className='swiper-slide';
               mycontent.innerHTML=cc;
               event.appendChild(mycontent);
               }
        
        })


   
