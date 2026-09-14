const q=(s,c=document)=>c.querySelector(s),qa=(s,c=document)=>[...c.querySelectorAll(s)];
const header=q('.header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
const menu=q('.menu'),nav=q('.header nav');
menu.onclick=()=>{const o=nav.classList.toggle('open');
menu.setAttribute('aria-expanded',o)};
qa('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');
obs.unobserve(e.target)}}),{threshold:.08});
qa('.reveal').forEach(x=>obs.observe(x));

qa('.filters button').forEach(b=>b.onclick=()=>{qa('.filters button').forEach(x=>x.classList.remove('active'));
b.classList.add('active');
qa('.model-card').forEach(c=>c.hidden=b.dataset.filter!=='all'&&!c.dataset.cat.includes(b.dataset.filter))});
const pp={expand20:q('#expand20-plan'),expand30:q('#expand30-plan'),expand40:q('#expand40-plan')};
qa('.plan-tabs button').forEach(b=>b.onclick=()=>{qa('.plan-tabs button').forEach(x=>x.classList.remove('active'));
Object.values(pp).forEach(x=>x.classList.remove('active'));
b.classList.add('active');
pp[b.dataset.plan].classList.add('active')});

const light=q('.lightbox'),li=q('.lightbox img');
qa('[data-full]').forEach(b=>b.onclick=()=>{li.src=b.dataset.full;
li.alt=b.querySelector('img')?.alt||'Nagyított kép';
light.showModal()});
qa('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
light.onclick=e=>{if(e.target===light)light.close()};

const data={family:['40 LÁBAS KINYITHATÓ','MOBLUX Family 40','Tágas, több helyiséges otthon családoknak, apartmanprojektnek vagy befektetési célra. Galvanizált acélvázra épül.',[['11 800 mm','hossz'],['6 300 mm','kinyitott szélesség'],['akár 3','hálószoba']]],
expand30home:['30 LÁBAS KINYITHATÓ','MOBLUX Expand 30','Két oldalra nyitható, családi méretű modell akár három hálószobával, nappalival, konyhával és komplett fürdőszobával.',[['9 000 mm','hossz'],['6 300 mm','kinyitott szélesség'],['kb. 56,7 m²','alapterület']]],
apple:['PRÉMIUM ÚJDONSÁG','Apple Cabin 40','Ikonikus, lekerekített forma panorámafelületekkel, komplett konyhával és fürdőszobával.',[['11,8 m','hossz'],['2,2 m','szélesség'],['26 m²','hasznos alapterület']]],
apple20:['KOMPAKT ÚJDONSÁG','Apple Cabin 20','Az Apple Cabin karakteres formája kompakt, jól berendezhető kivitelben.',[['5,9 m','hossz'],['2,2 m','szélesség'],['20 láb','modell']]],
natura:['TERMÉSZETKÖZELI OTTHON','MOBLUX Natura 35','Meleg fa hatású külső, fedett terasz és egész évben használható, otthonos tér.',[['35','modell'],['fedett','terasz'],['4 évszak','kivitel']]],
lumina:['FÉNY. TÉR. SZABADSÁG.','MOBLUX Lumina 35','Világos, modern, négy évszakos konténerház panorámás üvegfelületekkel, két szobával, komplett konyhával és fürdőszobával.',[['34,6 m²','hasznos alapterület'],['2','szoba'],['8 cm EPS','opcionálisan 10 cm PUR']]],
grand:['KÉTSZINTES OTTHON','MOBLUX Grand 70','Különleges térélmény két terasszal, nagy dupla üvegezésű nyílászárókkal.',[['kb. 70 m²','hasznos tér'],['2','szint'],['2','terasz']]]};
const modal=q('.model-modal');
qa('[data-model]').forEach(b=>b.onclick=()=>{const d=data[b.dataset.model];
q('#modal-kicker').textContent=d[0];
q('#modal-title').textContent=d[1];
q('#modal-copy').textContent=d[2];
q('#modal-specs').innerHTML=d[3].map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('');
modal.showModal()});

const quote=q('#quote-form');
if(quote)quote.onsubmit=e=>{e.preventDefault();
const f=new FormData(e.currentTarget),o=f.getAll('opcio').join(', ')||'nincs megjelölve',t=`Kedves MOBLUX!\n\nSzemélyre szabott ajánlatot szeretnék kérni.\n\nModell: ${f.get('modell')}\nFelhasználás: ${f.get('cel')}\nOpciók: ${o}\nNév: ${f.get('nev')}\nElérhetőség: ${f.get('elerhetoseg')}\nMegjegyzés: ${f.get('megjegyzes')||'-'}`;
location.href=`https://wa.me/36306338825?text=${encodeURIComponent(t)}`};

const siting=q('#siting-form');
if(siting)siting.onsubmit=e=>{e.preventDefault();
const f=new FormData(e.currentTarget),t=`Kedves MOBLUX!\n\nElőzetes telepíthetőségi vizsgálatot szeretnék kérni.\n\nTelepülés: ${f.get('telepules')}\nHelyrajzi szám: ${f.get('hrsz')}\nTervezett használat: ${f.get('cel')}\nKívánt modell vagy méret: ${f.get('modell')||'-'}\nNév: ${f.get('nev')}\nElérhetőség: ${f.get('elerhetoseg')}\nMegjegyzés: ${f.get('megjegyzes')||'-'}`;
location.href=`https://wa.me/36306338825?text=${encodeURIComponent(t)}`};
