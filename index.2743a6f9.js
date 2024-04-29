const e=document.querySelector(".container"),t=document.querySelector(".footer__numbers"),a=(e,t)=>e||t,s=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;async function r(r,l,n){try{let c=`https://app.ticketmaster.com/discovery/v2/events?apikey=Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn&keyword=${l}&page=${r}${n?"&countryCode="+n:""}`,o=await fetch(c);o=await o.json(),e.innerHTML="",t.innerHTML=function(e,t){let a="",s=e-1,r=e+1;e>2&&(a+='<li class="footer__numbers-number">1</li>',e>3&&(a+='<li class="footer__numbers-number">...</li>')),e==t?s-=2:e==t-1&&(s-=1),1==e?r+=2:2==e&&(r+=1);for(let l=s;l<=r;l++)l>t||(0==l&&(l+=1),a+=`<li class="footer__numbers-number${e==l?" active":""}">${l}</li>`);return e<t-1&&(e<t-2&&(a+='<li class="footer__numbers-number">...</li>'),a+=`<li class="footer__numbers-number">${t}</li>`),a}(Number(o.page.number)+1,Number(o.page.totalPages)>50?50:Number(o.page.totalPages)-1);let i=new Date,d=`${i.getFullYear()}-${i.getMonth()}-${i.getDay()}`;o._embedded.events.forEach(t=>{e.innerHTML+=`
                <div data-id="${t.id}" class="main__card" style="--from: ${s(-500,500)}px; --time: ${s(500,2e3)}ms;">
                    <img src="${t.images[0].url}" class="main__card-preview">
                    <h2 class="main__card-title">${t.name}</h2>
                    <span class="main__card-data">${a(t.dates.start.localDate,d)}</span>
                    <span class="main__card-place">${a(t._embedded.venues[0].name,"online")}</span>
                </div>
                `})}catch(t){e.innerHTML="<h2 class='header__title'>NOT FOUND</h2>"}}const l="Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn",n=document.querySelector(".container"),c=document.querySelector(".modal"),o=document.querySelector(".wrapper__modal"),i=document.querySelector(".footer__numbers"),d=document.querySelector(".header__wrapper"),m=document.querySelector("span.header__input"),u=document.querySelector(".header__input-wrapper"),p=()=>{o.style.display="none",c.style.display="none",document.body.style.overflowY="scroll"};let v="";r("0",v,""),n.addEventListener("click",async e=>{if(e.target.className.includes("main__card")){let t="";t=e.target.dataset.id?`https://app.ticketmaster.com/discovery/v2/events/${e.target.dataset.id}?apikey=${l}`:`https://app.ticketmaster.com/discovery/v2/events/${e.target.parentElement.dataset.id}?apikey=${l}`;let a=await fetch(t);(a=await a.json()).priceRanges=a.priceRanges?a.priceRanges:[{min:0,max:0,currency:"$"}],c.innerHTML=`
        <img class="modal__close" src="/Project-2/close.6a3fa3b0.png">
        <img src="${a.images[0].url}" alt="" class="modal__icon">
        <div class="modal__content">
          <img src="${a.images[0].url}" class="modal__preview"></img>
          <div class="modal__texts">
            <h2 class="modal__title">INFO</h2>
            <p class="modal__text">${a.info}</p>
            <h2 class="modal__title">WHEN</h2>
            <p class="modal__text">${a.dates.start.localDate} <br> ${a.dates.start.localTime} (${a.dates.timezone})</p>
            <h2 class="modal__title">WHERE</h2>
            <p class="modal__text">${a._embedded.venues[0].name}</p>
            <h2 class="modal__title">PRICES</h2>
            <p class="modal__text">Standart ${a.priceRanges[0].min}-${a.priceRanges[0].max} ${a.priceRanges[0].currency}</p>
            <a href="${a.url}" class="modal__btn">BUY TICKETS</a>
          </div>
        </div>
        <a class="modal__author" href="${a.url}">MORE FROM THIS AUTHOR</a>
        `,document.querySelector(".modal__close").addEventListener("click",p),o.style.display="flex",c.style.display="block",document.body.style.overflowY="hidden"}}),o.addEventListener("click",e=>{e.currentTarget==e.target&&p()}),i.addEventListener("click",e=>{"footer__numbers-number"==e.target.className&&"..."!=e.target.textContent&&r(Number(e.target.textContent)-1,v,m.dataset.value)}),d.search.addEventListener("input",_.debounce(e=>{v=e.target.value,r("0",e.target.value,m.dataset.value)},500)),m.addEventListener("input",e=>{r("0",v,m.dataset.value)}),m.addEventListener("click",()=>{m.classList.toggle("active"),u.classList.toggle("active")}),u.addEventListener("click",e=>{"header__input-item"==e.target.className&&(m.innerHTML=e.target.innerHTML,m.dataset.value=e.target.dataset.value,m.classList.toggle("active"),u.classList.toggle("active"),r("0",v,m.dataset.value))});const g=document.querySelector(".loader");document.body.style.overflow="hidden",g.addEventListener("click",()=>{g.classList.add("active"),setTimeout(()=>{g.style.display="none",document.body.style.overflow="scroll",g.remove()},2900)});
//# sourceMappingURL=index.2743a6f9.js.map
