(function(){var P$=Clazz.newPackage("javax.print.attribute.standard"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JobName", null, 'javax.print.attribute.TextSyntax', ['javax.print.attribute.PrintRequestAttribute', 'javax.print.attribute.PrintJobAttribute']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale',  function (jobName, locale) {
;C$.superclazz.c$$S$java_util_Locale.apply(this,[jobName, locale]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (object) {
return (C$.superclazz.prototype.equals$O.apply(this, [object]) && Clazz.instanceOf(object, "javax.print.attribute.standard.JobName") );
});

Clazz.newMeth(C$, 'getCategory$',  function () {
return Clazz.getClass(C$);
});

Clazz.newMeth(C$, 'getName$',  function () {
return "job-name";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:05 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
