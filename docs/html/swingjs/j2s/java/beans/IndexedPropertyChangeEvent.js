(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IndexedPropertyChangeEvent", null, 'java.beans.PropertyChangeEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index']]]

Clazz.newMeth(C$, 'c$$O$S$O$O$I',  function (source, propertyName, oldValue, newValue, index) {
;C$.superclazz.c$$O$S$O$O.apply(this,[source, propertyName, oldValue, newValue]);C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:39 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
