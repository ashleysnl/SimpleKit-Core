// Idempotent V1 disclosure navigation; no financial/state/storage/network access.
(() => {
 for(const root of document.querySelectorAll('.sk-v2[data-v2-system="1"]')) {
  const button=root.querySelector('[data-v2s-menu]');
  const header=button?.closest('.v2s-header');
  const nav=header?.querySelector('#'+CSS.escape(button.getAttribute('aria-controls')));
  if(!header||!nav||header.hasAttribute('data-v2s-enhanced'))continue;
  const desktop=matchMedia(header.dataset.v2Theme==='1.1'?'(min-width:56.25rem)':'(min-width:48rem)');
  const icon=button.querySelector('use');const iconBase=icon?.getAttribute('href')?.split('#')[0];
  const open=()=>button.getAttribute('aria-expanded')==='true';
  const setOpen=(value,restore=false)=>{
   button.setAttribute('aria-expanded',String(value));button.setAttribute('aria-label',value?'Close navigation menu':'Open navigation menu');
   nav.hidden=!desktop.matches&&!value;
   if(icon)icon.setAttribute('href',iconBase+'#'+(value?'close':'menu'));
   if(restore&&!desktop.matches)button.focus();
  };
  const sync=()=>{const active=document.activeElement;button.hidden=desktop.matches;setOpen(false);if(!desktop.matches&&nav.contains(active))button.focus();else if(desktop.matches&&active===button)nav.querySelector('a')?.focus();};
  header.setAttribute('data-v2s-enhanced','');header.setAttribute('data-menu-enhanced','');sync();
  button.addEventListener('click',()=>setOpen(!open()));
  nav.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false);});
  root.addEventListener('keydown',e=>{if(e.key==='Escape'&&open()){e.preventDefault();setOpen(false,true);}});
  document.addEventListener('pointerdown',e=>{if(!desktop.matches&&open()&&!header.contains(e.target))setOpen(false,nav.contains(document.activeElement));});
  header.addEventListener('focusout',e=>{if(!desktop.matches&&open()&&e.relatedTarget&&!header.contains(e.relatedTarget))setOpen(false);});
  desktop.addEventListener('change',sync);
 }
})();
