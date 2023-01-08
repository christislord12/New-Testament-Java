(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Principal");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'implies$javax_security_auth_Subject',  function (subject) {
if (subject == null ) return false;
return subject.getPrincipals$().contains$O(this);
});
};})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:48 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
