(function(){var P$=Clazz.newPackage("sun.security.action"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GetPropertyAction");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['theProp','defaultVal']]]

Clazz.newMeth(C$, 'c$$S',  function (theProp) {
;C$.$init$.apply(this);
this.theProp=theProp;
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (theProp, defaultVal) {
;C$.$init$.apply(this);
this.theProp=theProp;
this.defaultVal=defaultVal;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
var value=System.getProperty$S(this.theProp);
return (value == null  ? this.defaultVal : value);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:33 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
