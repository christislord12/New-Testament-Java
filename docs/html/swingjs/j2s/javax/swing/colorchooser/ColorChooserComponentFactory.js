(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),I$=[[0,'javax.swing.colorchooser.AbstractColorChooserPanel','javax.swing.colorchooser.DefaultSwatchChooserPanel','javax.swing.colorchooser.DefaultRGBChooserPanel','javax.swing.colorchooser.DefaultPreviewPanel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorChooserComponentFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDefaultChooserPanels$',  function () {
var choosers=Clazz.array($I$(1), -1, [Clazz.new_($I$(2,1)), Clazz.new_($I$(3,1))]);
return choosers;
}, 1);

Clazz.newMeth(C$, 'getPreviewPanel$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:14 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
