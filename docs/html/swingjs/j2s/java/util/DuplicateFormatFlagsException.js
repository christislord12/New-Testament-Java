(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "DuplicateFormatFlagsException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['flags']]]

Clazz.newMeth(C$, 'c$$S',  function (f) {
Clazz.super_(C$, this);
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.flags=f;
}, 1);

Clazz.newMeth(C$, 'getFlags$',  function () {
return this.flags;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return String.format$S$OA("Flags = \'%s\'", Clazz.array(java.lang.Object, -1, [this.flags]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:52 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
