(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RSAPublicKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['modulus','java.math.BigInteger','+publicExponent']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger',  function (modulus, publicExponent) {
;C$.$init$.apply(this);
this.modulus=modulus;
this.publicExponent=publicExponent;
}, 1);

Clazz.newMeth(C$, 'getModulus$',  function () {
return this.modulus;
});

Clazz.newMeth(C$, 'getPublicExponent$',  function () {
return this.publicExponent;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:50 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
