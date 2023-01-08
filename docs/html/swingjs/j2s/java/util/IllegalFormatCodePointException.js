(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllegalFormatCodePointException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['c']]]

Clazz.newMeth(C$, 'c$$I',  function (c) {
Clazz.super_(C$, this);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getCodePoint$',  function () {
return this.c;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return String.format$S$OA("Code point = %#x", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.c)]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:53 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
