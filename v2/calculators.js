// Shared presentation only: identify scrollable result tables for keyboard users.
// Financial inputs, calculation state, storage, downloads and network are untouched.
(() => {
  const root=document.querySelector('[data-v2-calculator]'); if(!root)return;
  const prepared=new WeakSet();
  const refine=()=>{
    for(const region of root.querySelectorAll('.v2c-table,.table-shell,.table-scroll,.table-wrap,.debt-table-wrap,.schedule-table-wrap,.sensitivity-table-wrap,.projection-table-wrap')) {
      if(prepared.has(region)||!region.querySelector('table'))continue;
      if(!region.hasAttribute('tabindex'))region.tabIndex=0;
      if(!region.hasAttribute('role'))region.setAttribute('role','region');
      if(!region.hasAttribute('aria-label')&&!region.hasAttribute('aria-labelledby')) {
        const heading=region.closest('section,aside')?.querySelector('h2,h3');
        if(heading?.id)region.setAttribute('aria-labelledby',heading.id);
        else region.setAttribute('aria-label',region.querySelector('caption')?.textContent.trim()||'Calculator results table');
      }
      // WebKit does not consistently scroll a focused region with arrow keys.
      // Handle only the region itself; nested controls keep their native keys.
      region.addEventListener('keydown',event=>{
        if(event.target!==region||event.defaultPrevented||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey)return;
        if(!['ArrowLeft','ArrowRight'].includes(event.key)||region.scrollWidth<=region.clientWidth+1)return;
        event.preventDefault();
        region.scrollLeft+=(event.key==='ArrowRight'?1:-1)*Math.max(40,region.clientWidth/4);
      });
      prepared.add(region);
    }
  };
  refine();new MutationObserver(refine).observe(root,{childList:true,subtree:true});
})();
