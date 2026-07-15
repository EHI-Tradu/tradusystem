const langButton=document.querySelector('.lang-toggle');
const translatable=[...document.querySelectorAll('[data-en][data-es]')];
let language=localStorage.getItem('tradusystem-language')||'en';
function setLanguage(lang){language=lang;document.documentElement.lang=lang;translatable.forEach(el=>{el.textContent=el.dataset[lang]});langButton.textContent=lang==='en'?'ES':'EN';localStorage.setItem('tradusystem-language',lang)}
langButton.addEventListener('click',()=>setLanguage(language==='en'?'es':'en'));
setLanguage(language);
document.getElementById('year').textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
