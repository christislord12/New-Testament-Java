(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BogusColorSpace", null, 'java.awt.color.ColorSpace');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getType$I',  function (numComponents) {
if (numComponents < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["numComponents < 1!"]);
}var type;
switch (numComponents) {
case 1:
type=6;
break;
default:
type=numComponents + 10;
}
return type;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (numComponents) {
;C$.superclazz.c$$I$I.apply(this,[C$.getType$I(numComponents), numComponents]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toRGB$FA',  function (colorvalue) {
if (colorvalue.length < this.getNumComponents$()) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["colorvalue.length < getNumComponents()"]);
}var rgbvalue=Clazz.array(Float.TYPE, [3]);
System.arraycopy$O$I$O$I$I(colorvalue, 0, rgbvalue, 0, Math.min(3, this.getNumComponents$()));
return colorvalue;
});

Clazz.newMeth(C$, 'fromRGB$FA',  function (rgbvalue) {
if (rgbvalue.length < 3) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["rgbvalue.length < 3"]);
}var colorvalue=Clazz.array(Float.TYPE, [this.getNumComponents$()]);
System.arraycopy$O$I$O$I$I(rgbvalue, 0, colorvalue, 0, Math.min(3, colorvalue.length));
return rgbvalue;
});

Clazz.newMeth(C$, 'toCIEXYZ$FA',  function (colorvalue) {
if (colorvalue.length < this.getNumComponents$()) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["colorvalue.length < getNumComponents()"]);
}var xyzvalue=Clazz.array(Float.TYPE, [3]);
System.arraycopy$O$I$O$I$I(colorvalue, 0, xyzvalue, 0, Math.min(3, this.getNumComponents$()));
return colorvalue;
});

Clazz.newMeth(C$, 'fromCIEXYZ$FA',  function (xyzvalue) {
if (xyzvalue.length < 3) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["xyzvalue.length < 3"]);
}var colorvalue=Clazz.array(Float.TYPE, [this.getNumComponents$()]);
System.arraycopy$O$I$O$I$I(xyzvalue, 0, colorvalue, 0, Math.min(3, colorvalue.length));
return xyzvalue;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:24 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
