(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GetPropertyAction", null, null, 'java.security.PrivilegedAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['propertyName']]]

Clazz.newMeth(C$, 'c$$S',  function (propertyName) {
;C$.$init$.apply(this);
this.propertyName=propertyName;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
return System.getProperty$S(this.propertyName);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:22 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
