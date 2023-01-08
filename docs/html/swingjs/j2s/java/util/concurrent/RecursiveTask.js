(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RecursiveTask", null, 'java.util.concurrent.ForkJoinTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['result','<V>']]]

Clazz.newMeth(C$, 'getRawResult$',  function () {
return this.result;
});

Clazz.newMeth(C$, 'setRawResult$O',  function (value) {
this.result=value;
});

Clazz.newMeth(C$, 'exec$',  function () {
this.result=this.compute$();
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:56 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
