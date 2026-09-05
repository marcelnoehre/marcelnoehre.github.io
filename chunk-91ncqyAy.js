import{$ as X$1,B as Sp,C as K$1,Ct as lI,D as MI,Dt as ne,G as Uc,Gt as zc,Ht as xn,I as Rp,It as vp,J as VF,K as Up,Kt as zt,L as Rr,M as PL,N as Pp,Nt as uI,O as Ne$1,Ot as oh,P as QE,Pt as ve$1,Rt as wI,S as J,V as Su,Vt as xi,W as Tp,X as WE,_ as H$1,a as Bp,at as am,b as Ii,c as Cr,ct as bp,d as EI,dt as ds,et as YI,ft as fI,h as Ga,ht as g,k as Np,kt as pI,l as Cu,lt as dI,m as G,nt as _h,p as Fe$1,q as V,qt as zy,r as $d,st as bn,tt as _I,u as Dr,v as I,vt as gv,wt as mf,x as Ip,xt as jL,yt as hI,z as Sg}from"./main-FDRTSF4L.js";import{i as ee,n as Ot$1,o as te,r as at}from"./chunk-BdJhOWqN.js";import{a as bt,c as ge$1,d as ra,f as ta,i as Wn,l as nt,n as Ka,o as f,p as ye$1,r as Wa,s as g$1,t as Ce$1,u as pt$1}from"./chunk-DOuYQMYJ.js";var Ot=class{_document;_textarea;constructor(e,t){this._document=t;let i=this._textarea=this._document.createElement(`textarea`),o=i.style;o.position=`fixed`,o.top=o.opacity=`0`,o.left=`-999em`,i.setAttribute(`aria-hidden`,`true`),i.value=e,i.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(i)}copy(){let e=this._textarea,t=!1;try{if(e){let i=this._document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),t=this._document.execCommand(`copy`),i&&i.focus()}}catch{}return t}destroy(){let e=this._textarea;e&&(e.remove(),this._textarea=void 0)}};var ae=(()=>{class n{_document=g(H$1);copy(t){let i=this.beginCopy(t),o=i.copy();return i.destroy(),o}beginCopy(t){return new Ot(t,this._document)}static ɵfac=function(i){return new(i||n)};static ɵprov=ve$1({token:n,factory:n.ɵfac})}return n})();var K=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}};var X=class extends K{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,i,o,s,d){super(),this.component=e,this.viewContainerRef=t,this.injector=i,this.projectableNodes=o,this.bindings=s||null,this.directives=d||null}};var j=class extends K{templateRef;viewContainerRef;context;injector;constructor(e,t,i,o){super(),this.templateRef=e,this.viewContainerRef=t,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}};var Rt=class extends K{element;constructor(e){super(),this.element=e instanceof Cr?e.nativeElement:e}};var H=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof X)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof j)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Rt)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var pt=class extends H{outletElement;_appRef;_defaultInjector;constructor(e,t,i){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=i}attachComponentPortal(e){let t;if(e.viewContainerRef){let i=e.injector||e.viewContainerRef.injector,o=i.get(xn,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let i=this._appRef,o=e.injector||this._defaultInjector||Ne$1.NULL,s=o.get(ne,i.injector);t=jL(e.component,{elementInjector:o,environmentInjector:s,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),i.attachView(t.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,i=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(i);o!==-1&&t.remove(o)}),this._attachedPortal=e,i}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(i,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var Mt=(()=>{class n extends H{_moduleRef=g(xn,{optional:!0});_document=g(H$1);_viewContainerRef=g(xi);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Fe$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let i=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=i.createComponent(t.component,{index:i.length,injector:t.injector||i.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=t=>{let i=t.element;i.parentNode;let o=this._document.createComment(`dom-portal`);t.setAttachedHost(this),i.parentNode.insertBefore(o,i),this._getRootNode().appendChild(i),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(i,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static ɵfac=(()=>{let t;return function(o){return(t||(t=$d(n)))(o||n)}})();static ɵdir=QE({type:n,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[vp]})}return n})();var _t=class{enable(){}disable(){}attach(){}};var z=class{positionStrategy;scrollStrategy=new _t;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var he=(()=>{class n{_attachedOverlays=[];_document=g(H$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=ve$1({token:n,factory:n.ɵfac})}return n})();var de=(()=>{class n extends he{_ngZone=g(J);_renderer=g(zt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let s=i[o];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=ve$1({token:n,factory:n.ɵfac})}return n})();var pe=(()=>{class n extends he{_platform=g(g$1);_ngZone=g(J);_renderer=g(zt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,o={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(i,`pointerdown`,this._pointerDownListener,o),s.listen(i,`click`,this._clickListener,o),s.listen(i,`auxclick`,this._clickListener,o),s.listen(i,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=f(t)};_clickListener=t=>{let i=f(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let d=s.length-1;d>-1;d--){let p=s[d],_=p._outsidePointerEvents;if(!(!p.hasAttached()||!this.canReceiveEvent(p,t,_))){if(le(p.overlayElement,i)||le(p.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>_.next(t)):_.next(t)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=ve$1({token:n,factory:n.ɵfac})}return n})();function le(n,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,i=e;for(;i;){if(i===n)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var _e=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=WE({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var Ce=(()=>{class n{_platform=g(g$1);_containerElement;_document=g(H$1);_styleLoader=g(at);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Wn()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<o.length;s++)o[s].remove()}let i=this._document.createElement(`div`);i.classList.add(t),Wn()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(_e)}static ɵfac=function(i){return new(i||n)};static ɵprov=ve$1({token:n,factory:n.ɵfac})}return n})();var Dt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,o){this._renderer=t,this._ngZone=i,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ue(n){return n&&n.nodeType===1}var ut=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new X$1;_attachments=new X$1;_detachments=new X$1;_positionStrategy;_scrollStrategy;_locationChanges=G.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new X$1;_outsidePointerEvents=new X$1;_afterNextRenderRef;constructor(e,t,i,o,s,d,p,_,P,f=!1,m,x){this._portalOutlet=e,this._host=t,this._pane=i,this._config=o,this._ngZone=s,this._keyboardDispatcher=d,this._document=p,this._location=_,this._outsideClickDispatcher=P,this._animationsDisabled=f,this._injector=m,this._renderer=x,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=zy(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=V(V({},this._config),e),this._updateElementSize()}setDirection(e){this._config=K$1(V({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=ra(this._config.width),e.height=ra(this._config.height),e.minWidth=ra(this._config.minWidth),e.minHeight=ra(this._config.minHeight),e.maxWidth=ra(this._config.maxWidth),e.maxHeight=ra(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ue(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Dt(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let o=bt(t||[]).filter(s=>!!s);o.length&&(i?e.classList.add(...o):e.classList.remove(...o))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=zy(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var ce=`cdk-global-overlay-wrapper`;function At(n){return new ft}var ft=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(ce),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:s,maxWidth:d,maxHeight:p}=this._overlayRef.getConfig(),_=(o===`100%`||o===`100vw`)&&(!d||d===`100%`||d===`100vw`),P=(s===`100%`||s===`100vh`)&&(!p||p===`100%`||p===`100vh`),f=this._xPosition,m=this._xOffset,x=this._overlayRef.getConfig().direction===`rtl`,Q=``,J=``,A=``;_?A=`flex-start`:f===`center`?(A=`center`,x?J=m:Q=m):x?f===`left`||f===`end`?(A=`flex-end`,Q=m):(f===`right`||f===`start`)&&(A=`flex-start`,J=m):f===`left`||f===`start`?(A=`flex-start`,Q=m):(f===`right`||f===`end`)&&(A=`flex-end`,J=m),e.position=this._cssPosition,e.marginLeft=_?`0`:Q,e.marginTop=P?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=_?`0`:J,t.justifyContent=A,t.alignItems=P?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(ce),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var fe=new I(`OVERLAY_DEFAULT_CONFIG`);function Bt(n,e){n.get(at).load(_e);let t=n.get(Ce),i=n.get(H$1),o=n.get(pt$1),s=n.get(Rr),d=n.get(Ot$1),p=n.get(Ga,null,{optional:!0})||n.get(zt).createRenderer(null,null),_=new z(e),P=n.get(fe,null,{optional:!0})?.usePopover??!0;_.direction=_.direction||d.value,!i.body||!(`showPopover`in i.body)?_.usePopover=!1:_.usePopover=e?.usePopover??P;let f=i.createElement(`div`),m=i.createElement(`div`);f.id=o.getId(`cdk-overlay-`),f.classList.add(`cdk-overlay-pane`),m.appendChild(f),_.usePopover&&(m.setAttribute(`popover`,`manual`),m.classList.add(`cdk-overlay-popover`));let x=_.usePopover?_.positionStrategy?.getPopoverInsertionPoint?.():null;return ue(x)?x.after(m):x?.type===`parent`?x.element.appendChild(m):t.getContainerElement().appendChild(m),new ut(new pt(f,s,n),m,f,_,n.get(J),n.get(de),i,n.get(oh),n.get(pe),e?.disableAnimations??n.get(am,null,{optional:!0})===`NoopAnimations`,n.get(ne),p)}function ke(n,e){if(n&1){let t=EI();Ii(0,`div`,1)(1,`button`,2),Np(`click`,function(){Su(t);return Cu(wI().action())}),YI(2),Uc()()}if(n&2){let t=wI();gv(2),zc(` `,t.data.action,` `)}}var xe=[`label`];function Se(n,e){}var Oe=Math.pow(2,31)-1;var q=class{_overlayRef;instance;containerInstance;_afterDismissed=new X$1;_afterOpened=new X$1;_onAction=new X$1;_durationTimeoutId;_dismissedByAction=!1;constructor(e,t){this._overlayRef=t,this.containerInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,Oe))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var me=new I(`MatSnackBarData`);var W=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Pe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=QE({type:n,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return n})();var Ee=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=QE({type:n,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return n})();var Re=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=QE({type:n,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return n})();var Me=(()=>{class n{snackBarRef=g(q);data=g(me);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(i){return new(i||n)};static ɵcmp=WE({type:n,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(i,o){i&1&&(Ii(0,`div`,0),YI(1),Uc(),lI(2,ke,3,1,`div`,1)),i&2&&(gv(),zc(` `,o.data.message,`
`),gv(),uI(o.hasAction?2:-1))},dependencies:[Ka,Pe,Ee,Re],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})();var Tt=`_mat-snack-bar-enter`;var Nt=`_mat-snack-bar-exit`;var De=(()=>{class n extends H{_ngZone=g(J);_elementRef=g(Cr);_changeDetectorRef=g(PL);_platform=g(g$1);_animationsDisabled=nt();snackBarConfig=g(W);_document=g(H$1);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=g(Ne$1);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new X$1;_onExit=new X$1;_onEnter=new X$1;_animationState=`void`;_live;_label;_role;_liveElementId=g(pt$1).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),i}attachTemplatePortal(t){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),i}attachDomPortal=t=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),i};onAnimationEnd(t){t===Nt?this._completeExit():t===Tt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?zy(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Tt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Tt)},200)))}exit(){return this._destroyed?ds(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?zy(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Nt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Nt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(d=>t.classList.add(d)):t.classList.add(i)),this._exposeToModals();let o=this._label.nativeElement,s=`mdc-snackbar__label`;o.classList.toggle(s,!o.querySelector(`.${s}`))}_exposeToModals(){let t=this._liveElementId,i=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<i.length;o++){let s=i[o],d=s.getAttribute(`aria-owns`);this._trackedModals.add(s),d?d.indexOf(t)===-1&&s.setAttribute(`aria-owns`,d+` `+t):s.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let i=t.getAttribute(`aria-owns`);if(i){let o=i.replace(this._liveElementId,``).trim();o.length>0?t.setAttribute(`aria-owns`,o):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,i=t.querySelector(`[aria-hidden]`),o=t.querySelector(`[aria-live]`);if(i&&o){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(s=document.activeElement),i.removeAttribute(`aria-hidden`),o.appendChild(i),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(i){return new(i||n)};static ɵcmp=WE({type:n,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,o){if(i&1&&Rp(Mt,7)(xe,7),i&2){let s;_I(s=MI())&&(o._portalOutlet=s.first),_I(s=MI())&&(o._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,o){i&1&&Np(`animationend`,function(d){return o.onAnimationEnd(d.animationName)})(`animationcancel`,function(d){return o.onAnimationEnd(d.animationName)}),i&2&&Pp(`mat-snack-bar-container-enter`,o._animationState===`visible`)(`mat-snack-bar-container-exit`,o._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!o._animationsDisabled)},features:[vp],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(Ii(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Ip(4,Se,0,0,`ng-template`,4),Uc(),Sp(5,`div`),Uc()()),i&2&&(gv(5),bp(`aria-live`,o._live)(`role`,o._role)(`id`,o._liveElementId))},dependencies:[Mt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})();var Ae=new I(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new W});var ge=(()=>{class n{_live=g(ye$1);_injector=g(Ne$1);_breakpointObserver=g(ge$1);_parentSnackBar=g(n,{optional:!0,skipSelf:!0});_defaultConfig=g(Ae);_animationsDisabled=nt();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Me;snackBarContainerComponent=De;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,i){return this._attach(t,i)}openFromTemplate(t,i){return this._attach(t,i)}open(t,i=``,o){let s=V(V({},this._defaultConfig),o);return s.data={message:t,action:i},s.announcementMessage===t&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,i){let o=i&&i.viewContainerRef&&i.viewContainerRef.injector,s=Ne$1.create({parent:o||this._injector,providers:[{provide:W,useValue:i}]}),d=new X(this.snackBarContainerComponent,i.viewContainerRef,s),p=t.attach(d);return p.instance.snackBarConfig=i,p.instance}_attach(t,i){let o=V(V(V({},new W),this._defaultConfig),i),s=this._createOverlay(o),d=this._attachSnackBarContainer(s,o),p=new q(d,s);if(t instanceof Dr){let _=new j(t,null,{$implicit:o.data,snackBarRef:p});p.instance=d.attachTemplatePortal(_)}else{let P=new X(t,void 0,this._createInjector(o,p));p.instance=d.attachComponentPortal(P).instance}return this._breakpointObserver.observe(ta.HandsetPortrait).pipe(Sg(s.detachments())).subscribe(_=>{s.overlayElement.classList.toggle(this.handsetCssClass,_.matches)}),o.announcementMessage&&d._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(p,o),this._openedSnackBarRef=p,this._openedSnackBarRef}_animateSnackBar(t,i){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let i=new z;i.direction=t.direction;let o=At(this._injector),s=t.direction===`rtl`,d=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!s||t.horizontalPosition===`end`&&s,p=!d&&t.horizontalPosition!==`center`;return d?o.left(`0`):p?o.right(`0`):o.centerHorizontally(),t.verticalPosition===`top`?o.top(`0`):o.bottom(`0`),i.positionStrategy=o,i.disableAnimations=this._animationsDisabled,Bt(this._injector,i)}_createInjector(t,i){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector;return Ne$1.create({parent:o||this._injector,providers:[{provide:q,useValue:i},{provide:me,useValue:t.data}]})}static ɵfac=function(i){return new(i||n)};static ɵprov=ve$1({token:n,factory:n.ɵfac})}return n})();function Be(n,e){n&1&&Sp(0,`span`,6)}function Te(n,e){if(n&1&&(Ii(0,`span`,9)(1,`mat-icon`),YI(2,`emoji_events`),Uc(),YI(3),Uc()),n&2){let t=wI().$implicit;gv(3),zc(` `,t.award,` `)}}function Ne(n,e){if(n&1){let t=EI();Ii(0,`button`,13),Np(`click`,function(){Su(t);let o=wI().$implicit;return Cu(wI(2).toggleAbstract(o.doi))}),YI(1,` Abstract `),Uc()}}function Fe(n,e){if(n&1&&(Ii(0,`p`),YI(1),Uc()),n&2){let t=e.$implicit;gv(),Up(t)}}function Ie(n,e){if(n&1&&(Ii(0,`div`,16)(1,`div`,19),pI(2,Fe,2,1,`p`,null,dI),Uc()()),n&2){let t=wI().$implicit;Pp(`open`,wI(2).openAbstract().has(t.doi)),gv(2),hI(t.abstract)}}function Ve(n,e){if(n&1){let t=EI();Ii(0,`li`,3)(1,`div`,4),Sp(2,`span`,5),lI(3,Be,1,0,`span`,6),Uc(),Ii(4,`div`,7)(5,`p`,8),YI(6),Uc(),Ii(7,`h3`),YI(8),Uc(),lI(9,Te,4,1,`span`,9),Ii(10,`p`,10),YI(11),Uc(),Ii(12,`div`,11),lI(13,Ne,2,0,`button`,12),Ii(14,`button`,13),Np(`click`,function(){let o=Su(t).$implicit;return Cu(wI(2).toggleBibtex(o.doi))}),YI(15,` BibTeX `),Uc(),Ii(16,`a`,14),YI(17,`DOI`),Uc()(),lI(18,Ie,4,2,`div`,15),Ii(19,`div`,16)(20,`div`,17)(21,`button`,18),Np(`click`,function(){let o=Su(t).$implicit;return Cu(wI(2).copy(o.bibtex))}),Ii(22,`mat-icon`),YI(23,`content_copy`),Uc()(),Ii(24,`pre`)(25,`code`),YI(26),Uc()()()()()()}if(n&2){let t=e.$implicit,i=e.$index,o=e.$count,s=wI(2);gv(3),uI(i!==o-1?3:-1),gv(3),Up(t.authors),gv(2),Up(t.title),gv(),uI(t.award?9:-1),gv(2),Bp(``,t.published,` (`,t.year,`)`),gv(2),uI(t.abstract?13:-1),gv(3),Tp(`href`,t.doi,mf),gv(2),uI(t.abstract?18:-1),gv(),Pp(`open`,s.openBibtex().has(t.doi)),gv(7),Up(t.bibtex)}}function Le(n,e){n&1&&Sp(0,`span`,6)}function Ye(n,e){if(n&1&&(Ii(0,`span`,9)(1,`mat-icon`),YI(2,`emoji_events`),Uc(),YI(3),Uc()),n&2){let t=wI().$implicit;gv(3),zc(` `,t.award,` `)}}function Xe(n,e){if(n&1){let t=EI();Ii(0,`li`,3)(1,`div`,4),Sp(2,`span`,5),lI(3,Le,1,0,`span`,6),Uc(),Ii(4,`div`,7)(5,`p`,8),YI(6),Uc(),Ii(7,`h3`),YI(8),Uc(),lI(9,Ye,4,1,`span`,9),Ii(10,`p`,10),YI(11),Uc(),Ii(12,`div`,11)(13,`button`,13),Np(`click`,function(){let o=Su(t).$implicit;return Cu(wI(2).toggleBibtex(o.doi))}),YI(14,` BibTeX `),Uc(),Ii(15,`a`,14),YI(16,`DOI`),Uc()(),Ii(17,`div`,16)(18,`div`,17)(19,`button`,18),Np(`click`,function(){let o=Su(t).$implicit;return Cu(wI(2).copy(o.bibtex))}),Ii(20,`mat-icon`),YI(21,`content_copy`),Uc()(),Ii(22,`pre`)(23,`code`),YI(24),Uc()()()()()()}if(n&2){let t=e.$implicit,i=e.$index,o=e.$count,s=wI(2);gv(3),uI(i!==o-1?3:-1),gv(3),Up(t.authors),gv(2),Up(t.title),gv(),uI(t.award?9:-1),gv(2),Bp(``,t.published,` (`,t.year,`)`),gv(4),Tp(`href`,t.doi,mf),gv(2),Pp(`open`,s.openBibtex().has(t.doi)),gv(7),Up(t.bibtex)}}function je(n,e){n&1&&Sp(0,`span`,6)}function He(n,e){if(n&1&&(Ii(0,`span`,21),YI(1),Uc()),n&2){let t=wI().$implicit;gv(),Up(t.place)}}function ze(n,e){if(n&1&&(Ii(0,`p`,22),YI(1),Uc()),n&2){let t=wI().$implicit;gv(),Up(t.description)}}function We(n,e){if(n&1&&(Ii(0,`a`,23)(1,`mat-icon`),YI(2,`open_in_new`),Uc(),YI(3,` View related work `),Uc()),n&2){let t=wI().$implicit;Tp(`href`,t.link,mf)}}function $e(n,e){if(n&1&&(Ii(0,`li`,3)(1,`div`,4),Sp(2,`span`,5),lI(3,je,1,0,`span`,6),Uc(),Ii(4,`div`,7)(5,`div`,20)(6,`mat-icon`),YI(7,`emoji_events`),Uc(),Ii(8,`h3`),YI(9),lI(10,He,2,1,`span`,21),Uc()(),Ii(11,`p`,10),YI(12),Uc(),lI(13,ze,2,1,`p`,22),lI(14,We,4,1,`a`,23),Uc()()),n&2){let t=e.$implicit,i=e.$index,o=e.$count;gv(3),uI(i!==o-1?3:-1),gv(6),zc(` `,t.title,` `),gv(),uI(t.place?10:-1),gv(2),Bp(``,t.event,` (`,t.year,`)`),gv(),uI(t.description?13:-1),gv(),uI(t.link?14:-1)}}function Ze(n,e){if(n&1&&(Ii(0,`section`,1)(1,`h2`),YI(2,`Awards`),Uc(),Ii(3,`ol`,2),pI(4,$e,15,7,`li`,3,fI),Uc()()),n&2){let t=wI();gv(4),hI(t.awards)}}function Ue(n,e){if(n&1&&(Ii(0,`div`,0)(1,`h1`),YI(2,`Publications`),Uc(),Ii(3,`section`,1)(4,`h2`),YI(5,`Publications`),Uc(),Ii(6,`ol`,2),pI(7,Ve,27,12,`li`,3,fI),Uc()(),Ii(9,`section`,1)(10,`h2`),YI(11,`Open Data`),Uc(),Ii(12,`ol`,2),pI(13,Xe,25,10,`li`,3,fI),Uc()(),lI(15,Ze,6,0,`section`,1),Uc()),n&2){let t=e;gv(7),hI(t.publications),gv(6),hI(t.openData),gv(2),uI(t.awards.length?15:-1)}}var ye=class n{data=g(_h);clipboard=g(ae);snackBar=g(ge);item=VF(this.data.publications(),{initialValue:null});openAbstract=bn(new Set);openBibtex=bn(new Set);toggleAbstract(e){this.openAbstract.update(t=>ve(t,e))}toggleBibtex(e){this.openBibtex.update(t=>ve(t,e))}copy(e){let t=this.clipboard.copy(e);this.snackBar.open(t?`Copied to clipboard`:`Failed to copy`,void 0,{duration:2500})}static ɵfac=function(t){return new(t||n)};static ɵcmp=WE({type:n,selectors:[[`app-publications`]],decls:1,vars:1,consts:[[1,`page`],[1,`pub-section`],[1,`timeline`],[1,`timeline-item`],[1,`rail`],[1,`node`],[1,`edge`],[1,`entry`],[1,`authors`],[1,`award-badge`],[1,`venue`],[1,`actions`],[`mat-stroked-button`,``,`color`,`primary`],[`mat-stroked-button`,``,`color`,`primary`,3,`click`],[`mat-stroked-button`,``,`color`,`primary`,`target`,`_blank`,`rel`,`noopener`,3,`href`],[1,`expand-block`,3,`open`],[1,`expand-block`],[1,`expand-inner`,`bibtex-inner`],[`mat-icon-button`,``,`aria-label`,`Copy BibTeX`,1,`copy-btn`,3,`click`],[1,`expand-inner`,`abstract-inner`],[1,`award-header`],[1,`award-place`],[1,`award-description`],[`target`,`_blank`,`rel`,`noopener`,1,`link`,3,`href`]],template:function(t,i){if(t&1&&lI(0,Ue,16,1,`div`,0),t&2){let o;uI((o=i.item())?0:-1,o)}},dependencies:[Wa,Ka,Ce$1,ee,te],styles:[`.page[_ngcontent-%COMP%]{max-width:48rem;margin:0 auto;padding:clamp(2rem,6vh,4rem) clamp(1.5rem,5vw,4rem) 5rem}h1[_ngcontent-%COMP%]{margin:0 0 3rem;font-size:clamp(2.25rem,5vw,3rem);font-weight:500;letter-spacing:-.01em}.pub-section[_ngcontent-%COMP%]{margin-bottom:3.5rem}.pub-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1.5rem;font-size:1.4rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--%NS%mat-sys-primary)}.timeline[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.timeline-item[_ngcontent-%COMP%]{display:flex;gap:1.25rem}.rail[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;flex:0 0 auto;padding-top:1.6rem}.node[_ngcontent-%COMP%]{width:.6rem;height:.6rem;flex:0 0 auto;border-radius:50%;background-color:var(--%NS%mat-sys-primary);box-shadow:0 0 0 4px color-mix(in srgb,var(--%NS%mat-sys-primary) 15%,transparent)}.edge[_ngcontent-%COMP%]{width:1px;flex:1 1 auto;margin:.35rem 0;background-color:color-mix(in srgb,var(--%NS%mat-sys-primary) 30%,transparent)}.entry[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.5rem;padding:1.25rem 1.5rem;border-radius:.85rem;background-color:var(--%NS%mat-sys-surface-container);border:1px solid color-mix(in srgb,var(--%NS%mat-sys-on-surface) 8%,transparent)}.timeline-item[_ngcontent-%COMP%]:last-child   .entry[_ngcontent-%COMP%]{margin-bottom:0}.authors[_ngcontent-%COMP%]{margin:0;font-size:.9rem;color:color-mix(in srgb,var(--%NS%mat-sys-on-surface) 70%,transparent)}h3[_ngcontent-%COMP%]{margin:0;font-size:1.1rem;font-weight:500;line-height:1.4}.venue[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.88rem;font-style:italic;color:color-mix(in srgb,var(--%NS%mat-sys-on-surface) 60%,transparent)}.award-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.3rem;width:fit-content;margin:.15rem 0;padding:.15rem .6rem .15rem .5rem;border-radius:999px;font-size:.78rem;font-weight:500;color:var(--%NS%mat-sys-primary);background-color:color-mix(in srgb,var(--%NS%mat-sys-primary) 14%,transparent);border:1px solid color-mix(in srgb,var(--%NS%mat-sys-primary) 30%,transparent)}.award-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:.25rem}.expand-block[_ngcontent-%COMP%]{max-height:0;overflow:hidden;transition:max-height .25s ease}.expand-block.open[_ngcontent-%COMP%]{max-height:32rem;overflow-y:auto}.expand-inner[_ngcontent-%COMP%]{margin-top:.85rem;padding:.85rem 1rem;border-radius:.5rem;border-left:3px solid var(--%NS%mat-sys-primary);background-color:color-mix(in srgb,var(--%NS%mat-sys-on-surface) 4%,transparent)}.abstract-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 .75rem;font-size:.9rem;line-height:1.65;color:color-mix(in srgb,var(--%NS%mat-sys-on-surface) 85%,transparent)}.abstract-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.bibtex-inner[_ngcontent-%COMP%]{position:relative}.bibtex-inner[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;font-family:Roboto Mono,ui-monospace,monospace;font-size:.78rem;line-height:1.5;white-space:pre-wrap;word-break:break-word;padding-right:2rem}.bibtex-inner[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]{position:absolute;top:-.1rem;right:-.35rem}.award-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.award-header[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--%NS%mat-sys-primary)}.award-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.award-place[_ngcontent-%COMP%]{font-size:.72rem;font-weight:500;padding:.1rem .5rem;border-radius:999px;color:var(--%NS%mat-sys-primary);background-color:color-mix(in srgb,var(--%NS%mat-sys-primary) 16%,transparent)}.award-description[_ngcontent-%COMP%]{margin:0;font-size:.9rem;line-height:1.5;color:color-mix(in srgb,var(--%NS%mat-sys-on-surface) 80%,transparent)}.link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;width:fit-content;margin-top:.25rem;font-size:.9rem;color:color-mix(in srgb,var(--%NS%mat-sys-on-surface) 75%,transparent);text-decoration:none}.link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem;color:var(--%NS%mat-sys-primary)}.link[_ngcontent-%COMP%]:hover{color:var(--%NS%mat-sys-on-surface);text-decoration:underline}`]})};function ve(n,e){let t=new Set(n);return t.has(e)?t.delete(e):t.add(e),t}export{ye as Publications};