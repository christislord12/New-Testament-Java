(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ECPrivateKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['s','java.math.BigInteger','params','java.security.spec.ECParameterSpec']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_security_spec_ECParameterSpec',  function (s, params) {
;C$.$init$.apply(this);
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["s is null"]);
}if (params == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["params is null"]);
}this.s=s;
this.params=params;
}, 1);

Clazz.newMeth(C$, 'getS$',  function () {
return this.s;
});

Clazz.newMeth(C$, 'getParams$',  function () {
return this.params;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:49 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
