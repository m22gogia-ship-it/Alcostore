const categories={beer:'ლუდი',wine:'ღვინო',spirits:'მაგარი ალკოჰოლი',soft:'გაზიანი',juice:'წვენი და ცივი ჩაი',energy:'ენერგეტიკული'};
const catalog=[['ლუდი ლაგერი 0.5ლ','beer',4.5,28,'🍺',true],['ლუდი უალკოჰოლო 0.5ლ','beer',4.2,22,'🍺',false],['ქართული წითელი ღვინო 0.75ლ','wine',24,12,'🍷',true],['თეთრი მშრალი ღვინო 0.75ლ','wine',22,15,'🍾',true],['ვისკი 0.7ლ','spirits',69,8,'🥃',true],['არაყი 0.5ლ','spirits',28,12,'🥃',true],['კოლა 0.5ლ','soft',2.9,52,'🥤',false],['ლიმონათი 0.5ლ','soft',2.7,48,'🥤',false],['ტონიკი 0.33ლ','soft',3.2,27,'🥤',false],['ვაშლის წვენი 1ლ','juice',6.5,32,'🧃',false],['ცივი ჩაი 0.5ლ','juice',3.5,33,'🧋',false],['ენერგეტიკული 0.25ლ','energy',5.5,26,'⚡',false]].map((x,i)=>({id:i+1,name:x[0],category:x[1],price:x[2],stock:x[3],emoji:x[4],alcohol:x[5]}));
const settings={deliveryFee:5,freeDeliveryFrom:80,minOrder:10};
const cities=['თბილისი','რუსთავი','ბათუმი','ზუგდიდი','ქუთაისი','თელავი'];
let selectedCity='თბილისი';
try { const saved=localStorage.getItem('alkostore-city'); if(cities.includes(saved)) selectedCity=saved; } catch(e) {}
function setCity(city){
  if(!cities.includes(city))return;
  selectedCity=city;
  document.getElementById('citySelect').value=city;
  document.getElementById('checkoutCity').value=city;
  document.getElementById('heroCity').textContent=city;
  document.getElementById('district').placeholder=city==='თბილისი'?'მაგ. საბურთალო':'უბანი ან რაიონი';
  try { localStorage.setItem('alkostore-city',city); } catch(e) {}
}
function initCities(){
  const opts=cities.map(city=>`<option value="${city}">${city}</option>`).join('');
  document.getElementById('citySelect').innerHTML=opts;
  document.getElementById('checkoutCity').innerHTML=opts;
  document.getElementById('citySelect').addEventListener('change',e=>setCity(e.target.value));
  document.getElementById('checkoutCity').addEventListener('change',e=>setCity(e.target.value));
  setCity(selectedCity);
}

let cart={},filter='all';const $=id=>document.getElementById(id),money=v=>Number(v).toFixed(2)+' ₾';
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let toastTimer;function toast(msg){$('toast').textContent=msg;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3500)}
function renderFilters(){const names={all:'ყველა',...categories};$('categories').innerHTML=Object.entries(names).map(([k,n])=>`<button class="${filter===k?'active':''}" data-category="${k}">${escapeHTML(n)}</button>`).join('');$('categories').querySelectorAll('button').forEach(b=>b.onclick=()=>{filter=b.dataset.category;renderFilters();renderProducts()})}
function renderProducts(){const search=$('search').value.trim().toLocaleLowerCase('ka');const list=catalog.filter(p=>(filter==='all'||p.category===filter)&&p.name.toLocaleLowerCase('ka').includes(search));$('products').innerHTML=list.length?list.map(p=>`<article class="product"><div class="illustration">${p.emoji}</div><div class="pbody"><div class="category">${escapeHTML(categories[p.category])}${p.alcohol?' · 18+':''}</div><h3>${escapeHTML(p.name)}</h3><div class="sub">საჩვენებელი მარაგი: ${p.stock}</div><div class="pfoot"><strong>${money(p.price)}</strong><button data-add="${p.id}" aria-label="კალათაში დამატება">+</button></div></div></article>`).join(''):'<p>პროდუქცია ვერ მოიძებნა.</p>';$('products').querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>addToCart(+b.dataset.add))}
function addToCart(id){const p=catalog.find(x=>x.id===id);if(!p)return;if((cart[id]||0)>=p.stock)return toast('საჩვენებელი მარაგი ამოწურულია');cart[id]=(cart[id]||0)+1;updateCount();toast('დამატებულია კალათაში')}
function updateCount(){$('cartCount').textContent=Object.values(cart).reduce((a,b)=>a+b,0)}
function changeQty(id,step){const p=catalog.find(x=>x.id===id);if(!p)return;cart[id]=Math.max(0,Math.min(p.stock,(cart[id]||0)+step));if(!cart[id])delete cart[id];updateCount();renderCart()}
function currentItems(){return Object.entries(cart).map(([id,qty])=>({product:catalog.find(x=>x.id===+id),qty})).filter(x=>x.product&&x.qty>0)}
function showCart(){$('cartDrawer').hidden=false;renderCart()}
function closeCart(){$('cartDrawer').hidden=true}
function renderCart(){const items=currentItems();$('cartLines').innerHTML=items.length?items.map(({product:p,qty})=>`<div class="cartLine"><span>${p.emoji} ${escapeHTML(p.name)}<br><small>${money(p.price)}</small></span><div class="qty"><button data-id="${p.id}" data-delta="-1">−</button><b>${qty}</b><button data-id="${p.id}" data-delta="1">+</button></div></div>`).join(''):'<p>კალათა ცარიელია.</p>';$('cartLines').querySelectorAll('button').forEach(b=>b.onclick=()=>changeQty(+b.dataset.id,+b.dataset.delta));const subtotal=items.reduce((s,x)=>s+x.product.price*x.qty,0);const delivery=subtotal>=settings.freeDeliveryFrom?0:settings.deliveryFee;$('cartTotals').innerHTML=`<div class="totals"><p>პროდუქცია <b>${money(subtotal)}</b></p><p>მიტანის სავარაუდო საფასური <b>${items.length?money(delivery):'—'}</b></p><p class="final">საჩვენებელი ჯამი <b>${money(items.length?subtotal+delivery:0)}</b></p><small>მინიმალური შეკვეთა ${money(settings.minOrder)} · ${money(settings.freeDeliveryFrom)}-დან უფასო მიტანა (დემო ტარიფები)</small></div>`;$('adultRow').hidden=!items.some(x=>x.product.alcohol);$('checkout').hidden=!items.length}
function placeOrder(e){e.preventDefault();const items=currentItems();if(!items.length)return;const subtotal=items.reduce((s,x)=>s+x.product.price*x.qty,0);if(subtotal<settings.minOrder)return toast('დემო მინიმალური შეკვეთა: '+money(settings.minOrder));if(items.some(x=>x.product.alcohol)&&!e.target.elements.adultConfirmed.checked)return toast('ალკოჰოლისთვის საჭიროა 18+ დადასტურება');const total=subtotal+(subtotal>=settings.freeDeliveryFrom?0:settings.deliveryFee);cart={};updateCount();closeCart();e.target.reset();$('orderConfirmation').hidden=false;$('orderConfirmation').innerHTML=`<strong>✓ დემო კალათა შემოწმებულია</strong><p>ქალაქი: ${escapeHTML(selectedCity)}. საჩვენებელი ჯამი: ${money(total)}. რეალური შეკვეთა არ შექმნილა და მონაცემები სერვერზე არ გაგზავნილა.</p>`;$('orderConfirmation').scrollIntoView({behavior:'smooth',block:'center'});toast('დემო შემოწმება დასრულდა')}
initCities();renderFilters();renderProducts();updateCount();
