(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UndoableEditEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['myEdit','javax.swing.undo.UndoableEdit']]]

Clazz.newMeth(C$, 'c$$O$javax_swing_undo_UndoableEdit',  function (source, edit) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.myEdit=edit;
}, 1);

Clazz.newMeth(C$, 'getEdit$',  function () {
return this.myEdit;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:15 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
