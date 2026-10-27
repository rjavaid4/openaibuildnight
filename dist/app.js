import { propertyPhotos } from './property-photos.js';
import { extraPlaces } from './extra-listings.js';
const rateSource = 'https://www.housing.illinois.edu/cost';
export const places = [
  {id:'here',name:'HERE Champaign',area:'Campustown',city:'Champaign',address:'308 E Green St, Champaign, IL',beds:[2,4],layouts:[],tags:['Furnished','In-unit laundry','Fitness center'],features:['furnished','laundry'],type:'private',badge:'The city-life chapter',photo:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',illustration:true,source:'https://www.herechampaign.com/',description:'A Green Street community with furnished two- and four-bedroom floor plans. The official website lists in-apartment washer/dryer appliances, a fitness center, and shared study spaces.',eligibility:'Privately operated student housing. Ask the provider about lease eligibility.',included:'Confirm utilities, fees, parking, and lease pricing with the property.',rateNote:'No reliable rent could be verified. Confirm the rate per person or per unit, mandatory fees, and current availability directly.'},
  {id:'orchard',name:'Orchard Downs',area:'Southeast Urbana',city:'Urbana',address:'Orchard Downs Apartments, Urbana, IL',beds:[1,2],layouts:[{beds:1,price:750,label:'1-bedroom unfurnished'},{beds:1,price:810,label:'1-bedroom furnished'},{beds:2,price:680,label:'Orchard South 2-bedroom unfurnished'},{beds:2,price:800,label:'2-bedroom unfurnished'},{beds:2,price:860,label:'2-bedroom furnished'}],tags:['Parking included','Furnished options','Laundry included'],features:['parking','furnished','laundry','university'],type:'university',badge:'Room for your people',photo:'https://www.housing.illinois.edu/sites/default/files/2022-12/Orchard_Downs-500.jpg',illustration:false,source:'https://www.housing.illinois.edu/node/49',description:'University apartments set among green spaces southeast of campus, with one- and two-bedroom layouts. Furnished and unfurnished options are available; rates vary by layout and renovation.',eligibility:'Graduate students, families, visiting scholars, and other qualifying university affiliates. Check the official eligibility rules.',included:'Water, trash, sewer, internet, cable service, and parking. Confirm all charges and utility responsibilities.',rateNote:'Published 2026–27 student rates for the whole apartment. The $680 starting option is a two-bedroom unfurnished apartment at Orchard South; furnished options cost more.'},
  {id:'seven07',name:'Seven07',area:'Campustown',city:'Champaign',address:'707 S 4th St, Champaign, IL 61820',beds:[0,1,2,3,4],layouts:[],tags:['Furnished','In-unit laundry','Pool & fitness'],features:['furnished','laundry'],type:'private',badge:'A campus-side kind of life',photo:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',illustration:true,source:'https://liveseven07.com/',description:'A Campustown student community with studios through four-bedroom apartments. Its official site lists furnished interiors, in-home laundry, an outdoor pool deck, and a fitness center.',eligibility:'Privately operated student housing. Ask the provider about lease eligibility.',included:'Confirm utilities, internet, parking, fees, and lease terms directly.',rateNote:'Published pricing was not verified. Floor plan selection and lease dates can change the final quote.'},
  {id:'goodwin',name:'Goodwin–Green',area:'Campus / Urbana',city:'Urbana',address:'Goodwin-Green Apartments, Urbana, IL',beds:[0,1],layouts:[{beds:0,price:860,label:'Furnished efficiency'},{beds:1,price:950,label:'1-bedroom unfurnished'}],tags:['Heat included','Furnished options','University managed'],features:['furnished','university'],type:'university',badge:'Your own little corner',photo:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',illustration:true,source:'https://housing.illinois.edu/node/48',description:'University-managed living near the campus core, offering sleeping rooms, furnished efficiencies, and unfurnished one-bedroom apartments. This directory compares independent apartment options; sleeping rooms are not included in its price filter.',eligibility:'Graduate students and other eligible university affiliates. Review official eligibility before applying.',included:'Water, trash, sewer, heat, internet, and streaming services. Parking costs extra.',rateNote:'Published 2026–27 student whole-unit rates: furnished efficiency $860; one-bedroom unfurnished $950. Sleeping rooms are a different housing type and are excluded from apartment starting prices.'},
  {id:'dean',name:'The Dean Campustown',area:'Campustown',city:'Champaign',address:'The Dean Campustown, Champaign, IL',beds:[],layouts:[],tags:['Furnished','Study spaces','Rooftop pool'],features:['furnished'],type:'private',badge:'A fresh perspective',photo:'https://www.thedean.com/campustown/wp-content/uploads/2025/08/home-photos_0000_1.webp',illustration:false,source:'https://www.thedean.com/campustown/',description:'A furnished student apartment community in Campustown. The official website highlights a rooftop pool deck, meeting and study rooms, and fitness facilities. Open the official floor plans to confirm available bedroom configurations.',eligibility:'Privately operated student housing, unaffiliated with UIUC. Confirm lease requirements with the provider.',included:'Ask for the exact unit rate, required fees, utility allowances, and parking charges.',rateNote:'Rates and available bedroom configurations have not been verified. Check current floor plans and availability with the provider.'},
  {id:'ashton',name:'Ashton Woods',area:'South campus / Urbana',city:'Urbana',address:'Ashton Woods Apartments, Urbana, IL',beds:[2],layouts:[{beds:2,price:820,label:'2-bedroom unfurnished'},{beds:2,price:930,label:'2-bedroom furnished'},{beds:2,price:870,label:'Galley kitchen unfurnished'},{beds:2,price:920,label:'Open kitchen unfurnished'}],tags:['Parking included','Laundry included','Furnished options'],features:['parking','laundry','furnished','university'],type:'university',badge:'A little more breathing room',photo:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80',illustration:true,source:'https://www.housing.illinois.edu/Living-Communities/Apartments',description:'University-managed two-bedroom apartments southwest of campus in Champaign, with furnished and unfurnished options and several kitchen layouts. Published student rates vary by apartment configuration.',eligibility:'Sophomores and above, graduate students, families, and other eligible university affiliates. Check official criteria.',included:'Water, trash, sewer, internet, cable service, on-site laundry fees, and parking.',rateNote:'Published 2026–27 student whole-apartment rates start at $820 for a two-bedroom unfurnished apartment. Furnished and upgraded kitchen options cost more.'}
];
places.push(...extraPlaces);
for (const place of places) {
  const photo = propertyPhotos[place.id];
  if (photo) Object.assign(place, {photo: photo.path, photoAlt: photo.alt || place.name + ' property photo', photoSource: photo.source, illustration: false, imageLabel: 'Photo: official property website'});
}
const ashton = places.find(p => p.id === 'ashton');
Object.assign(ashton, {city:'Champaign', area:'Southwest campus / Research Park', address:'2221 S First St, Champaign, IL', source:'https://www.housing.illinois.edu/Living-Communities/Apartments/Ashton-Woods'});

export function listingSummary(place, {beds='any', filter='all'}={}) {
  const layout = [...matchingLayouts(place, beds, filter)].sort((a,b)=>a.price-b.price)[0] || null;
  return {price:layout?.price ?? null, layout, people:layout ? Math.max(1,layout.beds) : null,
    perPerson:layout ? layout.price / Math.max(1,layout.beds) : null,
    leaseYear:place.type==='university' ? '2026–27 published rates' : 'Confirm lease year',
    availability:'Not confirmed', checked:'Oct 26, 2026'};
}

export function matchingLayouts(place,beds='any',filter='all') {
  return place.layouts.filter(l=>(beds==='any'||l.beds===Number(beds))&&(filter!=='furnished'||l.label.includes('furnished')&&!l.label.includes('unfurnished')));
}
export function startingPrice(place,beds='any',filter='all') {
  const values=matchingLayouts(place,beds,filter).map(l=>l.price);
  return values.length?Math.min(...values):null;
}
export function filterPlaces(items,{query='',budget='any',beds='any',filter='all',savedOnly=false,saved=[],sort='recommended'}={}) {
  const q=query.trim().toLocaleLowerCase();
  const found=items.filter(p=>{
    const price=startingPrice(p,beds,filter);
    return (!q||[p.name,p.area,p.city,p.address,...p.tags].join(' ').toLocaleLowerCase().includes(q))
      &&(beds==='any'||p.beds.includes(Number(beds)))
      &&(filter==='all'||p.features.includes(filter))
      &&(budget==='any'||(price!==null&&price<=Number(budget)))
      &&(!savedOnly||saved.includes(p.id));
  });
  if(sort==='price')found.sort((a,b)=>(startingPrice(a,beds,filter)??Infinity)-(startingPrice(b,beds,filter)??Infinity));
  if(sort==='name')found.sort((a,b)=>a.name.localeCompare(b.name));
  return found;
}

if(typeof document!=='undefined'){
  const $=s=>document.querySelector(s);
  const welcome=$('#welcome');
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  let welcomeTimer;
  function finishWelcome(){if(!welcome||welcome.classList.contains('leaving'))return;clearTimeout(welcomeTimer);welcome.classList.add('leaving');document.body.classList.remove('welcoming');setTimeout(()=>welcome.remove(),reducedMotion.matches?0:550);}
  if(welcome){if(reducedMotion.matches){welcome.remove();}else{document.body.classList.add('welcoming');welcomeTimer=setTimeout(finishWelcome,2300);$('#welcome-skip').addEventListener('click',finishWelcome);}}
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const money=n=>'$'+n.toLocaleString('en-US');
  let saved=[];
  try{const value=JSON.parse(localStorage.getItem('porch-saved')||'[]');if(Array.isArray(value))saved=value.filter(id=>places.some(p=>p.id===id));}catch{}
  let selected=[],filter='all',savedOnly=false,toastTimer;
  let lastFocus=null;
  const state=()=>({query:$('#query').value,budget:$('#budget').value,beds:$('#beds').value,sort:$('#sort').value,filter,savedOnly,saved});
  function toast(message){$('#toast').textContent=message;$('#toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').hidden=true,3000);}
  function save(id){saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];try{localStorage.setItem('porch-saved',JSON.stringify(saved));}catch{toast('Saved for this visit. Browser storage is unavailable.');}render();}
  function priceHtml(p,beds='any',active='all'){
    const {price,layout}=listingSummary(p,{beds,filter:active});
    return price===null?'<div class="price check-price">Check rates <small>↗</small></div><div class="price-label">Confirm directly with the provider</div>':`<div class="price">${money(price)}<small> / mo</small></div><div class="price-label">From · whole unit · student rate</div><div class="quote-layout">${layout.beds===0?'Studio':layout.beds+' bed'} · ${layout.label.includes('unfurnished')?'Unfurnished':'Furnished'}</div>`;
  }
  function card(p){const label=p.beds.length?p.beds.map(n=>n===0?'Studio':n).join(', ')+' beds':'See floor plans';return `<article class="card" data-place="${p.id}"><div class="card-visual"><button class="photo-open" data-detail="${p.id}" aria-label="View ${escape(p.name)} photos and details"><img src="${escape(p.photo)}" alt="${escape(p.photoAlt || (p.illustration?'Illustrative apartment interior, not a photo of this property':p.name+' property photo'))}" loading="lazy" width="600" height="400"></button><span class="card-tag">${p.badge}</span><button class="save-button" data-save="${p.id}" aria-label="${saved.includes(p.id)?'Unsave':'Save'} ${escape(p.name)}" aria-pressed="${saved.includes(p.id)}">${saved.includes(p.id)?'♥':'♡'}</button><span class="art-label">${p.imageLabel||(p.illustration?'Interior inspiration · not property photo':'Photo: official property website')}</span></div><div class="card-body"><div class="card-location">${p.area} · ${p.city}</div><h3 class="card-name"><button data-detail="${p.id}">${p.name}</button><span aria-hidden="true">↗</span></h3><div class="specs"><span>⌂ ${label}</span><span>${p.type==='university'?'Eligibility applies':(p.audience||'Student community')}</span></div><div class="amenities">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="listing-status"><span>Baths: confirm layout</span><span>${listingSummary(p).leaseYear}</span></div><div class="availability-line"><span class="availability-dot"></span> Availability: not confirmed <span class="checked-date">Checked Oct 26</span></div><div class="card-bottom"><div>${priceHtml(p,$('#beds').value,filter)}</div><label class="compare-label"><input type="checkbox" data-compare="${p.id}" ${selected.includes(p.id)?'checked':''} aria-label="Compare ${escape(p.name)}"> Compare</label></div></div></article>`;}
  function render(){
    const s=state(),found=filterPlaces(places,s);
    $('#cards').innerHTML=found.map(card).join('');
    $('#empty').hidden=found.length>0;
    $('#result-count').textContent=`${found.length} ${found.length===1?'place':'places'} ${savedOnly?'in your shortlist':'to make your own'}`;
    $('#saved-count').textContent=saved.length;
    $('#saved-nav').setAttribute('aria-pressed',String(savedOnly));
    $('#reset').hidden=!(s.query||s.budget!=='any'||s.beds!=='any'||filter!=='all'||savedOnly);
    $('#budget-note').hidden=s.budget==='any';
    $('#compare-bar').hidden=selected.length===0;
    $('#compare-count').textContent=`${selected.length} ${selected.length===1?'place':'places'} selected`;
    $('#compare-open').disabled=selected.length<2;
    $('.empty h3').textContent=savedOnly?'Your next chapter starts with a little heart.':'No places in this little corner. Yet.';
    $('.empty p').textContent=savedOnly?'Tap a heart on any apartment to keep it in your shortlist.':'Try a wider budget, fewer filters, or another neighborhood.';
    document.querySelectorAll('.card img').forEach(img=>img.addEventListener('error',()=>{img.src='neighborhood.svg';img.alt='Illustrative neighborhood architecture';img.closest('.card-visual').querySelector('.art-label').textContent='Neighborhood illustration';},{once:true}));
  }
  let closingDialog=false;
  function open(html){lastFocus=document.activeElement;const dialog=$('#detail-dialog');dialog.classList.remove('closing');closingDialog=false;$('#dialog-content').innerHTML=html;dialog.showModal();document.body.classList.add('dialog-open');const img=dialog.querySelector('.detail-photo');if(img)img.addEventListener('error',()=>{img.src='neighborhood.svg';img.alt='Property photo unavailable; neighborhood illustration';},{once:true});}
  function close(){if(closingDialog)return;closingDialog=true;const dialog=$('#detail-dialog');dialog.classList.add('closing');setTimeout(()=>{dialog.close();dialog.classList.remove('closing');document.body.classList.remove('dialog-open');closingDialog=false;if(lastFocus?.isConnected)lastFocus.focus();},reducedMotion.matches?0:200);}
  function detail(id){
    const context={beds:$('#beds').value,filter}, quote=listingSummary(places.find(p=>p.id===id),context);
    const p=places.find(p=>p.id===id),map='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.address);
    open(`<img class="detail-photo" src="${escape(p.photo)}" alt="${escape(p.photoAlt||p.name)}"><div class="detail-body"><div class="eyebrow small">${p.area} · ${p.city}</div><h2 id="dialog-title">${p.name}</h2>${priceHtml(p,context.beds,context.filter)}<div class="cost-context">${quote.layout?`<strong>Your rent, made clear.</strong><span>Whole unit: ${money(quote.price)} / month</span><span>Equal split with ${quote.people} ${quote.people===1?'person':'people'}: ${money(Math.round(quote.perPerson*100)/100)} each / month</span><small>Rent-only illustration; assumes one person per bedroom. Utilities, fees, and lease terms may add costs.</small>`:'<strong>Ask for the full picture.</strong><span>Per-person rent, whole-unit rent, utilities, and fees: confirm with provider.</span>'}</div><p>${p.description}</p><div class="detail-facts"><div><span>BEDROOMS</span>${p.beds.length?p.beds.map(n=>n===0?'Studio':n+' bedroom').join(' / '):'Confirm official floor plans'}</div><div><span>AVAILABILITY</span>Not verified · contact provider</div><div><span>PRICING BASIS</span>${p.type==='university'?'Whole apartment · 2026–27 student rates':'Ask whether per person or whole unit'}</div><div><span>PHOTOGRAPHY</span>${p.imageLabel||(p.illustration?'Interior inspiration; not this property':'Official property website')}</div><div><span>BATHROOMS</span>Confirm exact floor plan</div><div><span>LEASE YEAR</span>${quote.leaseYear}</div></div><details class="fact-disclosure"><summary>Pricing, included costs & eligibility</summary><h3>Rate details</h3><p>${p.rateNote}</p><h3>Included costs</h3><p>${p.included}</p><h3>Who can apply?</h3><p>${p.eligibility}</p></details>${p.layouts.length?`<h3>Published starting options</h3><div class="table-scroll"><table><thead><tr><th>Layout</th><th>Student rent / whole unit</th></tr></thead><tbody>${p.layouts.map(l=>`<tr><td>${l.label}</td><td>${money(l.price)} / month</td></tr>`).join('')}</tbody></table></div>`:''}<p class="detail-source">Sources checked October 26, 2026. Availability is not live. <a href="${p.photoSource||p.source}" target="_blank" rel="noopener noreferrer">Photo source ↗</a> ${p.type==='university'?`<a href="${rateSource}" target="_blank" rel="noopener noreferrer">Official university rate table ↗</a>`:''}</p><div class="detail-actions"><a class="primary" href="${p.source}" target="_blank" rel="noopener noreferrer">Official website ↗</a><a href="${map}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></div></div>`);
  }
  function compare(){const items=selected.map(id=>places.find(p=>p.id===id));open(`<div class="comparison-wrap"><div class="eyebrow small">A LITTLE PERSPECTIVE</div><h2 id="dialog-title">Side by side. Closer to home.</h2><p>Compare the details that make a place work for you. Rates below are starting student whole-unit rates, not live offers.</p><div class="table-scroll"><table><thead><tr><th>THE DETAILS</th>${items.map(p=>`<th>${p.name}</th>`).join('')}</tr></thead><tbody>${[
    ['Neighborhood',p=>p.area],['Starting rent',p=>priceHtml(p,$('#beds').value,filter)],['Bedrooms',p=>p.beds.length?p.beds.map(n=>n===0?'Studio':n).join(', '):'Confirm floor plans'],['Amenities',p=>p.tags.join('<br>')],['Included costs',p=>p.included],['Eligibility',p=>p.eligibility],['Bathrooms',()=> 'Confirm exact floor plan'],['Lease year',p=>listingSummary(p).leaseYear],['Availability',()=> 'Not confirmed · contact provider'],['Last checked',()=> 'Oct 26, 2026'],['Source',p=>`<a href="${p.source}" target="_blank" rel="noopener noreferrer">Official website ↗</a>`]
  ].map(([label,fn])=>`<tr><td>${label}</td>${items.map(p=>`<td>${fn(p)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`);}
  function reset(){filter='all';savedOnly=false;$('#query').value='';$('#budget').value='any';$('#beds').value='any';$('#sort').value='recommended';document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter==='all');b.setAttribute('aria-pressed',String(b.dataset.filter==='all'));});render();}
  $('#search-form').addEventListener('submit',e=>{e.preventDefault();render();$('#results').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
  ['#query','#budget','#beds','#sort'].forEach(sel=>$(sel).addEventListener(sel==='#query'?'input':'change',render));
  $('.chips').addEventListener('click',e=>{const btn=e.target.closest('[data-filter]');if(!btn)return;filter=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});render();});
  $('#cards').addEventListener('click',e=>{const saveBtn=e.target.closest('[data-save]'),detailBtn=e.target.closest('[data-detail]');if(saveBtn)save(saveBtn.dataset.save);if(detailBtn)detail(detailBtn.dataset.detail);});
  $('#cards').addEventListener('change',e=>{if(!e.target.matches('[data-compare]'))return;const id=e.target.dataset.compare;if(e.target.checked){if(selected.length===3){e.target.checked=false;toast('Compare up to 3 places. Remove one to add another.');return;}selected.push(id);}else selected=selected.filter(x=>x!==id);render();});
  $('#saved-nav').addEventListener('click',()=>{savedOnly=!savedOnly;render();$('#results').scrollIntoView();});
  $('#reset').addEventListener('click',reset);$('#empty-reset').addEventListener('click',reset);
  $('#clear-compare').addEventListener('click',()=>{selected=[];render();});$('#compare-open').addEventListener('click',compare);
  $('.dialog-close').addEventListener('click',close);$('#detail-dialog').addEventListener('click',e=>{if(e.target===$('#detail-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
  $('#detail-dialog').addEventListener('cancel',e=>{e.preventDefault();close();});
  render();
}
