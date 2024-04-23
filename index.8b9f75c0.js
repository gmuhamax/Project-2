!function(){let e=document.querySelector(".container"),t=document.querySelector(".footer__numbers"),a=(e,t)=>e||t,s=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;async function r(r,l,n){try{let c=`https://app.ticketmaster.com/discovery/v2/events?apikey=Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn&keyword=${l}&page=${r}&countryCode=${n}`,o=await fetch(c);o=await o.json(),e.innerHTML="",t.innerHTML=function(e,t){let a="",s=e-1,r=e+1;e>2&&(a+='<li class="footer__numbers-number">1</li>',e>3&&(a+='<li class="footer__numbers-number">...</li>')),e==t?s-=2:e==t-1&&(s-=1),1==e?r+=2:2==e&&(r+=1);for(let l=s;l<=r;l++)l>t||(0==l&&(l+=1),a+=`<li class="footer__numbers-number${e==l?" active":""}">${l}</li>`);return e<t-1&&(e<t-2&&(a+='<li class="footer__numbers-number">...</li>'),a+=`<li class="footer__numbers-number">${t}</li>`),a}(Number(r),Number(o.page.totalPages)>49?49:Number(o.page.totalPages)-1);let i=new Date,m=`${i.getFullYear()}-${i.getMonth()}-${i.getDay()}`;o._embedded.events.forEach(t=>{e.innerHTML+=`
                <div class="main__card" style="--from: ${s(-500,500)}px; --time: ${s(500,2e3)}ms;">
                    <img src="${t.images[0].url}" class="main__card-preview">
                    <h2 class="main__card-title" data-id="${t.id}">${t.name}</h2>
                    <span class="main__card-data">${a(t.dates.start.localDate,m)}</span>
                    <span class="main__card-place">${a(t.dates.timezone,"America/New_York")}</span>
                </div>
                `})}catch(t){e.innerHTML="<h2 class='header__title'>NOT FOUND</h2>"}}let l=document.querySelector(".container"),n=document.querySelector(".modal"),c=document.querySelector(".wrapper__modal"),o=document.querySelector(".footer__numbers"),i=document.querySelector(".header__wrapper"),m="";r("1",m,""),l.addEventListener("click",async e=>{if("main__card-title"==e.target.className){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e.target.dataset.id}?apikey=Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn`);(t=await t.json()).priceRanges=t.priceRanges?t.priceRanges:[{min:0,max:0,currency:"$"}],n.innerHTML=`
        <img src="${t.images[0].url}" alt="" class="modal__icon">
        <div class="modal__content">
          <img src="${t.images[0].url}" class="modal__preview"></img>
          <div class="modal__texts">
            <h2 class="modal__title">INFO</h2>
            <p class="modal__text">${t.info}</p>
            <h2 class="modal__title">WHEN</h2>
            <p class="modal__text">${t.dates.start.localDate} <br> ${t.dates.start.localTime} (${t.dates.timezone})</p>
            <h2 class="modal__title">WHERE</h2>
            <p class="modal__text">${t.dates.timezone}</p>
            <h2 class="modal__title">PRICES</h2>
            <p class="modal__text">Standart ${t.priceRanges[0].min}-${t.priceRanges[0].max} ${t.priceRanges[0].currency}</p>
            <button class="modal__btn">BUY TICKETS</button>
          </div>
        </div>
        `,c.style.display="flex",n.style.display="block",document.body.style.overflowY="hidden"}}),c.addEventListener("click",()=>{c.style.display="none",n.style.display="none",document.body.style.overflowY="scroll"}),o.addEventListener("click",e=>{"footer__numbers-number"==e.target.className&&"..."!=e.target.textContent&&r(e.target.textContent,m,"")}),i.search.addEventListener("input",_.debounce(e=>{m=e.target.value,r("1",e.target.value,i.country.value)},500))}();
//# sourceMappingURL=index.8b9f75c0.js.map
