(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Lock");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.locked=false;
},1);

C$.$fields$=[['Z',['locked']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'lock$',  function () {
while (this.locked){
this.wait$();
}
this.locked=true;
});

Clazz.newMeth(C$, 'unlock$',  function () {
this.locked=false;
this.notifyAll$();
});
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:31 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
