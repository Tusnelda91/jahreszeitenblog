!function(){"use strict";var e=function(n){var t=n,i=function(){return t};return{get:i,set:function(e){t=e},clone:function(){return e(i())}}},n=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e){return{isFullscreen:function(){return null!==e.get()}}},i=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),r=function(e,n){e.fire("FullscreenStateChanged",{state:n})},l=i.DOM,o=function(e,n){var t,i,o,c,s,u,d=document.body,a=document.documentElement,h=n.get(),f=function(){var e,n,t,r;l.setStyle(o,"height",(t=window,r=document.body,r.offsetWidth&&(e=r.offsetWidth,n=r.offsetHeight),t.innerWidth&&t.innerHeight&&(e=t.innerWidth,n=t.innerHeight),{w:e,h:n}).h-(i.clientHeight-o.clientHeight))},m=function(){l.unbind(window,"resize",f)};if(t=(i=e.getContainer()).style,c=(o=e.getContentAreaContainer().firstChild).style,h)c.width=h.iframeWidth,c.height=h.iframeHeight,h.containerWidth&&(t.width=h.containerWidth),h.containerHeight&&(t.height=h.containerHeight),l.removeClass(d,"mce-fullscreen"),l.removeClass(a,"mce-fullscreen"),l.removeClass(i,"mce-fullscreen"),s=h.scrollPos,window.scrollTo(s.x,s.y),l.unbind(window,"resize",h.resizeHandler),e.off("remove",h.removeHandler),n.set(null),r(e,!1);else{var g={scrollPos:(u=l.getViewPort(),{x:u.x,y:u.y}),containerWidth:t.width,containerHeight:t.height,iframeWidth:c.width,iframeHeight:c.height,resizeHandler:f,removeHandler:m};c.width=c.height="100%",t.width=t.height="",l.addClass(d,"mce-fullscreen"),l.addClass(a,"mce-fullscreen"),l.addClass(i,"mce-fullscreen"),l.bind(window,"resize",f),e.on("remove",m),f(),n.set(g),r(e,!0)}},c=function(e,n){e.addCommand("mceFullScreen",function(){o(e,n)})},s=function(e){return function(n){var t=n.control;e.on("FullscreenStateChanged",function(e){t.active(e.state)})}},u=function(e){e.addMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Ctrl+Shift+F",selectable:!0,cmd:"mceFullScreen",onPostRender:s(e),context:"view"}),e.addButton("fullscreen",{active:!1,tooltip:"Fullscreen",cmd:"mceFullScreen",onPostRender:s(e)})};n.add("fullscreen",function(n){var i=e(null);return n.settings.inline?t(i):(c(n,i),u(n),n.addShortcut("Ctrl+Shift+F","","mceFullScreen"),t(i))})}();
