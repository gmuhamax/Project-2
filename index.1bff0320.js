const e=document.querySelector(".container"),t=document.querySelector(".footer__numbers"),a=(e,t)=>e||t,s=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;async function r(r,l,o){try{let c=`https://app.ticketmaster.com/discovery/v2/events?apikey=Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn&keyword=${l}&page=${r}&countryCode=${o}`,n=await fetch(c);n=await n.json(),e.innerHTML="",t.innerHTML=function(e,t){let a="",s=e-1,r=e+1;e>2&&(a+='<li class="footer__numbers-number">1</li>',e>3&&(a+='<li class="footer__numbers-number">...</li>')),e==t?s-=2:e==t-1&&(s-=1),1==e?r+=2:2==e&&(r+=1);for(let l=s;l<=r;l++)l>t||(0==l&&(l+=1),a+=`<li class="footer__numbers-number${e==l?" active":""}">${l}</li>`);return e<t-1&&(e<t-2&&(a+='<li class="footer__numbers-number">...</li>'),a+=`<li class="footer__numbers-number">${t}</li>`),a}(Number(r),Number(n.page.totalPages)>49?49:Number(n.page.totalPages)-1);let i=new Date,d=`${i.getFullYear()}-${i.getMonth()}-${i.getDay()}`;n._embedded.events.forEach(t=>{e.innerHTML+=`
                <div class="main__card" style="--from: ${s(-500,500)}px; --time: ${s(500,2e3)}ms;">
                    <img src="${t.images[0].url}" class="main__card-preview">
                    <h2 class="main__card-title" data-id="${t.id}">${t.name}</h2>
                    <span class="main__card-data">${a(t.dates.start.localDate,d)}</span>
                    <span class="main__card-place">${a(t.dates.timezone,"America/New_York")}</span>
                </div>
                `})}catch(t){e.innerHTML="<h2 class='header__title'>NOT FOUND</h2>"}}const l=document.querySelector(".container"),o=document.querySelector(".modal"),c=document.querySelector(".wrapper__modal"),n=document.querySelector(".footer__numbers"),i=document.querySelector(".header__wrapper"),d=()=>{c.style.display="none",o.style.display="none",document.body.style.overflowY="scroll"};let m="";r("1",m,""),l.addEventListener("click",async e=>{if("main__card-title"==e.target.className){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e.target.dataset.id}?apikey=Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn`);(t=await t.json()).priceRanges=t.priceRanges?t.priceRanges:[{min:0,max:0,currency:"$"}],o.innerHTML=`
        <img class="modal__close" src="/close.d7789fe2.png">
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
        <a class="modal__author" src="#">MORE FROM THIS AUTHOR</a>
        `,document.querySelector(".modal__close").addEventListener("click",d),c.style.display="flex",o.style.display="block",document.body.style.overflowY="hidden"}}),c.addEventListener("click",e=>{e.currentTarget==e.target&&d()}),n.addEventListener("click",e=>{"footer__numbers-number"==e.target.className&&"..."!=e.target.textContent&&r(e.target.textContent,m,"")}),i.search.addEventListener("input",_.debounce(e=>{m=e.target.value,r("1",e.target.value,i.country.value)},500));const u=document.querySelector(".loader");document.body.style.overflow="hidden",u.addEventListener("click",()=>{u.classList.add("active"),setTimeout(()=>{u.style.display="none",document.body.style.overflow="scroll"},3e3)});
//# sourceMappingURL=index.1bff0320.js.map
