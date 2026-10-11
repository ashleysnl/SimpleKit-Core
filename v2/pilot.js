// Presentation/accessibility only. No financial state, inputs, storage or network.
(() => {
 const root=document.querySelector('[data-v2-pilot]'); if(!root)return;
 const refine=()=>{
  for(const group of root.querySelectorAll('.toggle-row-group[role=tablist]'))group.setAttribute('role','group');
  for(const button of root.querySelectorAll('[data-schedule-view]'))button.setAttribute('aria-pressed',String(button.classList.contains('active')));
  for(const region of root.querySelectorAll('.table-shell,.table-scroll')){
   if(!region.querySelector('table'))continue;
   region.tabIndex=0;region.setAttribute('role','region');
   if(!region.hasAttribute('aria-label'))region.setAttribute('aria-label',region.querySelector('caption')?.textContent.trim()||'Planning results table');
  }
  for(const button of root.querySelectorAll('summary .tooltip-trigger')){
   const summary=button.closest('summary');summary.after(button);
  }
 };
 refine();new MutationObserver(refine).observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
})();
