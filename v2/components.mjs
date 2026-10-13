const assert = (condition, message) => { if (!condition) throw new Error(message); };
// System v1 compatible theme amendment 1.1. Pure markup; no financial behaviour.
export const themeVersion = '1.1';
export const systemVersion = 1;
export const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function href(value) {
  assert(/^\/(?!\/)/.test(value) || /^#[a-z][\w-]*$/i.test(value), 'Use canonical root-relative routes or local anchors');
  assert(!/[\\\s]/.test(value), 'Unsafe route');
  return escapeHtml(value);
}
export function shellHeader(active = '', prefix = 'v2s', options = {}) {
  assert(/^[a-z][\w-]*$/i.test(prefix), 'Invalid ID prefix');
  const mainId = options.mainId || 'main';
  assert(/^[a-z][\w-]*$/i.test(mainId), 'Invalid main landmark ID');
  const links = [['Home','/'],['Tools','/tools/'],['Learn','/learn/'],['About','/about/'],['Support','/support/']];
  const skip = options.includeSkip === false ? '' : `<a class="v2s-skip v2-button" href="#${mainId}">${escapeHtml(options.skipLabel || 'Skip to content')}</a>`;
  return `${skip}<header class="v2s-header" data-v2-theme="1.1" data-v2-header><div class="v2s-wrap v2s-header-inner"><div class="v2s-identity"><a class="v2s-brand v2-wordmark" href="/" aria-label="SimpleKit home">Simple<span>Kit.</span></a><p class="v2s-tagline">Free planning tools for Canadians</p></div><button type="button" class="v2s-menu" data-v2s-menu data-v2-menu-toggle aria-label="Open navigation menu" aria-controls="${prefix}-nav" aria-expanded="false" hidden><svg class="v2-icon" aria-hidden="true" focusable="false"><use href="/assets/core/v2/icons/sprite.svg#menu"></use></svg></button><nav class="v2s-nav" id="${prefix}-nav" aria-label="Main navigation" data-v2-navigation>${links.map(([label,url])=>`<a href="${url}"${active===label?' aria-current="page"':''}>${label}</a>`).join('')}</nav></div></header>`;
}
export function shellFooter() {
  return `<footer class="v2s-footer" data-v2-theme="1.1">
    <div class="v2s-wrap">
      <div class="v2-footer-top">
        <div class="v2-footer-brand"><a class="v2-wordmark" href="/" aria-label="SimpleKit home">Simple<span>Kit.</span></a><p>Free planning tools for Canadians.</p><p class="v2-footer-maintainer">Independently built and maintained by Ashley Skinner in Canada.</p></div>
        <nav class="v2-footer-navigation" aria-label="Footer navigation"><a href="/tools/">View all tools</a><a href="/learn/">Explore the guides</a><a href="/about/">About SimpleKit</a><a href="/support/">Support &amp; corrections</a></nav>
      </div>
      <div class="v2-footer-bottom">
        <div class="v2-trust-note"><p>Inputs stay local; some tools save on-device. Google Analytics measures usage. Educational estimates; Canadian rules vary.</p><p class="v2-trust-links"><a href="/privacy/">Privacy details</a><a href="/methodology/">Methodology &amp; sources</a></p></div>
        <div class="v2-footer-support"><a href="https://buymeacoffee.com/ashleysnl">Support future tools <svg class="v2-icon" aria-hidden="true" focusable="false"><use href="/assets/core/v2/icons/sprite.svg#arrow-right"></use></svg></a><p>© SimpleKit</p></div>
      </div>
    </div>
  </footer>`;
}
export function breadcrumbs(items) {
  return `<nav class="v2s-breadcrumb" aria-label="Breadcrumb"><ol>${items.map((item,i)=>`<li>${i===items.length-1?`<span aria-current="page">${escapeHtml(item.label)}</span>`:`<a href="${href(item.href)}">${escapeHtml(item.label)}</a>`}</li>`).join('')}</ol></nav>`;
}
export function relatedContent(items) {
  return `<div class="v2s-related">${items.map(item=>`<a href="${href(item.href)}">${escapeHtml(item.label)}<span aria-hidden="true">→</span></a>`).join('')}</div>`;
}

// Build-time adoption of existing source-owned V1 shells, not calculator content.
// Keep nav IDs/current-page state and the original skip/main target intact.
function shellElement(html, tag, className) {
  const start = new RegExp('<'+tag+'\\b[^>]*class="[^"\\n]*\\b'+className+'\\b[^"\\n]*"[^>]*>', 'i').exec(html);
  if (!start) return null;
  const tokens = new RegExp('<\\/?'+tag+'\\b[^>]*>', 'gi');tokens.lastIndex=start.index;
  let depth=0, token;
  while ((token=tokens.exec(html))) {depth+=token[0].startsWith('</')?-1:1;if(!depth)return {start:start.index,end:tokens.lastIndex,html:html.slice(start.index,tokens.lastIndex)};}
  throw new Error('Unclosed shared '+className);
}
export function alignSharedShell(html) {
  if (!/<body\b[^>]*data-v2-system="1"/.test(html)) return html;
  const header=shellElement(html,'header','v2s-header');
  if(header&&!header.html.includes('data-v2-theme="1.1"')) {
    const navId=header.html.match(/aria-controls="([^"]+)"/)?.[1];
    assert(navId?.endsWith('-nav'),'Existing shell nav ID required');
    const active=header.html.match(/<a\b[^>]*aria-current="page"[^>]*>([^<]+)<\/a>/)?.[1]||'';
    html=html.slice(0,header.start)+shellHeader(active,navId.slice(0,-4),{includeSkip:false})+html.slice(header.end);
  }
  const footer=shellElement(html,'footer','v2s-footer');
  if(footer&&!footer.html.includes('data-v2-theme="1.1"')) html=html.slice(0,footer.start)+shellFooter()+html.slice(footer.end);
  return html;
}
