(function(){var P$=Clazz.newPackage("swingjs.image"),I$=[[0,'swingjs.image.PngImageWriteParam']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PngImageWriter", null, 'swingjs.image.JSImageWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.params.put$O$O("type", "PNG");
}, 1);

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (streamMetadata, image, param) {
this.setMetaData$O(streamMetadata);
if (param == null ) param=this.getDefaultWriteParam$();
this.write$javax_imageio_IIOImage(image);
});

Clazz.newMeth(C$, 'getDefaultWriteParam$',  function () {
return Clazz.new_($I$(1,1).c$$java_util_Locale,[null]);
});
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:43 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
