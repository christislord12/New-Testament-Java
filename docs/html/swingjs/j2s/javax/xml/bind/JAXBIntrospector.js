(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JAXBIntrospector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getValue$O',  function (jaxbElement) {
if (Clazz.instanceOf(jaxbElement, "javax.xml.bind.JAXBElement")) {
return (jaxbElement).getValue$();
} else {
return jaxbElement;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:22 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
