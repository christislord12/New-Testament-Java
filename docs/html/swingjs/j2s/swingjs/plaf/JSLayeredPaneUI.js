(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSLayeredPaneUI", null, 'swingjs.plaf.JSPanelUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.isContainer=this.isLayeredPane=true;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=$I$(1,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
}return this.domNode;
});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z',  function (obj, addCSS) {
return C$.superclazz.prototype.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z.apply(this, [obj, addCSS]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
});
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:45 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
