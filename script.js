document.getElementById('yr').textContent=new Date().getFullYear();
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// magnetic CTA
function magnetic(el,strength=0.3){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  if(!matchMedia('(pointer: fine)').matches)return;
  el.addEventListener('pointermove',(e)=>{const r=el.getBoundingClientRect();const x=e.clientX-r.left-r.width/2;const y=e.clientY-r.top-r.height/2;el.style.transform=`skewX(-2deg) translate(${x*strength}px,${y*strength}px)`;});
  el.addEventListener('pointerleave',()=>{el.style.transform='';});
}
document.querySelectorAll('.hero-cta .btn:not(.ghost)').forEach(b=>magnetic(b));