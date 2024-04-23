const e=document.querySelector(".container"),t=document.querySelector(".modal"),a=document.querySelector(".wrapper__modal"),l=document.querySelector(".footer__numbers"),s=document.querySelector(".header__wrapper");let r="";loadCard("1",r,""),e.addEventListener("click",async e=>{if("main__card-title"==e.target.className){let l=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e.target.dataset.id}?apikey=Wrom1SFhmivsqr0qBMcV6NJoa0MTYBhn`);(l=await l.json()).priceRanges=l.priceRanges?l.priceRanges:[{min:0,max:0,currency:"$"}],t.innerHTML=`
        <img src="${l.images[0].url}" alt="" class="modal__icon">
        <div class="modal__content">
          <img src="${l.images[0].url}" class="modal__preview"></img>
          <div class="modal__texts">
            <h2 class="modal__title">INFO</h2>
            <p class="modal__text">${l.info}</p>
            <h2 class="modal__title">WHEN</h2>
            <p class="modal__text">${l.dates.start.localDate} <br> ${l.dates.start.localTime} (${l.dates.timezone})</p>
            <h2 class="modal__title">WHERE</h2>
            <p class="modal__text">${l.dates.timezone}</p>
            <h2 class="modal__title">PRICES</h2>
            <p class="modal__text">Standart ${l.priceRanges[0].min}-${l.priceRanges[0].max} ${l.priceRanges[0].currency}</p>
            <button class="modal__btn">BUY TICKETS</button>
          </div>
        </div>
        `,a.style.display="flex",t.style.display="block",document.body.style.overflowY="hidden"}}),a.addEventListener("click",()=>{a.style.display="none",t.style.display="none",document.body.style.overflowY="scroll"}),l.addEventListener("click",e=>{"footer__numbers-number"==e.target.className&&"..."!=e.target.textContent&&loadCard(e.target.textContent,r,"")}),s.search.addEventListener("input",_.debounce(e=>{r=e.target.value,loadCard("1",e.target.value,s.country.value)},500));
//# sourceMappingURL=index.6cf95956.js.map
