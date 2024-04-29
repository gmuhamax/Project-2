!function(){let e=document.querySelector(".container"),t=document.querySelector(".footer__numbers"),a=(e,t)=>e||t,s=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;async function l(l,r,n){try{let c=`https://app.ticketmaster.com/discovery/v2/events?apikey=Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn&keyword=${r}&page=${l}${n?"&countryCode="+n:""}`,o=await fetch(c);o=await o.json(),console.log(c),e.innerHTML="",t.innerHTML=function(e,t){let a="",s=e-1,l=e+1;e>2&&(a+='<li class="footer__numbers-number">1</li>',e>3&&(a+='<li class="footer__numbers-number">...</li>')),e==t?s-=2:e==t-1&&(s-=1),1==e?l+=2:2==e&&(l+=1);for(let r=s;r<=l;r++)r>t||(0==r&&(r+=1),a+=`<li class="footer__numbers-number${e==r?" active":""}">${r}</li>`);return e<t-1&&(e<t-2&&(a+='<li class="footer__numbers-number">...</li>'),a+=`<li class="footer__numbers-number">${t}</li>`),a}(Number(o.page.number)+1,Number(o.page.totalPages)>50?50:Number(o.page.totalPages)-1);let i=new Date,d=`${i.getFullYear()}-${i.getMonth()}-${i.getDay()}`;o._embedded.events.forEach(t=>{e.innerHTML+=`
                <div class="main__card" style="--from: ${s(-500,500)}px; --time: ${s(500,2e3)}ms;">
                    <img src="${t.images[0].url}" class="main__card-preview">
                    <h2 class="main__card-title" data-id="${t.id}">${t.name}</h2>
                    <span class="main__card-data">${a(t.dates.start.localDate,d)}</span>
                    <span class="main__card-place">${a(t._embedded.venues[0].name,"online")}</span>
                </div>
                `})}catch(t){e.innerHTML="<h2 class='header__title'>NOT FOUND</h2>"}}let r=document.querySelector(".container"),n=document.querySelector(".modal"),c=document.querySelector(".wrapper__modal"),o=document.querySelector(".footer__numbers"),i=document.querySelector(".header__wrapper"),d=document.querySelector("span.header__input"),m=document.querySelector(".header__input-wrapper"),u=()=>{c.style.display="none",n.style.display="none",document.body.style.overflowY="scroll"},p="";l("0",p,""),r.addEventListener("click",async e=>{if("main__card-title"==e.target.className){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e.target.dataset.id}?apikey=Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn`);(t=await t.json()).priceRanges=t.priceRanges?t.priceRanges:[{min:0,max:0,currency:"$"}],n.innerHTML=`
        <img class="modal__close" src="/Project-2/close.6a3fa3b0.png">
        <img src="${t.images[0].url}" alt="" class="modal__icon">
        <div class="modal__content">
          <img src="${t.images[0].url}" class="modal__preview"></img>
          <div class="modal__texts">
            <h2 class="modal__title">INFO</h2>
            <p class="modal__text">${t.info}</p>
            <h2 class="modal__title">WHEN</h2>
            <p class="modal__text">${t.dates.start.localDate} <br> ${t.dates.start.localTime} (${t.dates.timezone})</p>
            <h2 class="modal__title">WHERE</h2>
            <p class="modal__text">${t._embedded.venues[0].name}</p>
            <h2 class="modal__title">PRICES</h2>
            <p class="modal__text">Standart ${t.priceRanges[0].min}-${t.priceRanges[0].max} ${t.priceRanges[0].currency}</p>
            <a href="${t.url}" class="modal__btn">BUY TICKETS</a>
          </div>
        </div>
        <a class="modal__author" href="${t.url}">MORE FROM THIS AUTHOR</a>
        `,document.querySelector(".modal__close").addEventListener("click",u),c.style.display="flex",n.style.display="block",document.body.style.overflowY="hidden"}}),c.addEventListener("click",e=>{e.currentTarget==e.target&&u()}),o.addEventListener("click",e=>{"footer__numbers-number"==e.target.className&&"..."!=e.target.textContent&&l(Number(e.target.textContent)-1,p,d.dataset.value)}),i.search.addEventListener("input",_.debounce(e=>{p=e.target.value,l("0",e.target.value,d.dataset.value)},500)),d.addEventListener("input",e=>{l("0",p,d.dataset.value)}),d.addEventListener("click",()=>{d.classList.toggle("active"),m.classList.toggle("active")}),m.addEventListener("click",e=>{"header__input-item"==e.target.className&&(d.innerHTML=e.target.innerHTML,d.dataset.value=e.target.dataset.value,d.classList.toggle("active"),m.classList.toggle("active"),l("0",p,d.dataset.value))});let v=document.querySelector(".loader");document.body.style.overflow="hidden",v.addEventListener("click",()=>{v.classList.add("active"),setTimeout(()=>{v.style.display="none",document.body.style.overflow="scroll",v.remove()},3e3)})}();
//# sourceMappingURL=index.ff8a6796.js.map
