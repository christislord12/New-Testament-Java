(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EncodedKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['encodedKey','byte[]']]]

Clazz.newMeth(C$, 'c$$BA',  function (encodedKey) {
;C$.$init$.apply(this);
this.encodedKey=encodedKey.clone$();
}, 1);

Clazz.newMeth(C$, 'getEncoded$',  function () {
return this.encodedKey.clone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:49 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
