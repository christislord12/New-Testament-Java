(function(){var P$=Clazz.newPackage("javax.imageio.plugins.bmp"),I$=[[0,'com.sun.imageio.plugins.bmp.BMPCompressionTypes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BMPImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.topDown=false;
},1);

C$.$fields$=[['Z',['topDown']]]

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (locale) {
;C$.superclazz.c$$java_util_Locale.apply(this,[locale]);C$.$init$.apply(this);
this.compressionTypes=$I$(1).getCompressionTypes$();
this.canWriteCompressed=true;
this.compressionMode=3;
this.compressionType=this.compressionTypes[0];
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_util_Locale.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'setTopDown$Z',  function (topDown) {
this.topDown=topDown;
});

Clazz.newMeth(C$, 'isTopDown$',  function () {
return this.topDown;
});
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:04 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
