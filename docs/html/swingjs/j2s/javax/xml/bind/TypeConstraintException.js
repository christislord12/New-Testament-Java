(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TypeConstraintException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['errorCode'],'O',['linkedException','Throwable']]]

Clazz.newMeth(C$, 'c$$S',  function (message) {
C$.c$$S$S$Throwable.apply(this, [message, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (message, errorCode) {
C$.c$$S$S$Throwable.apply(this, [message, errorCode, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable',  function (exception) {
C$.c$$S$S$Throwable.apply(this, [null, null, exception]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable',  function (message, exception) {
C$.c$$S$S$Throwable.apply(this, [message, null, exception]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Throwable',  function (message, errorCode, exception) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.errorCode=errorCode;
this.linkedException=exception;
}, 1);

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.errorCode;
});

Clazz.newMeth(C$, 'getLinkedException$',  function () {
return this.linkedException;
});

Clazz.newMeth(C$, 'setLinkedException$Throwable',  function (exception) {
this.linkedException=exception;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.linkedException == null  ? C$.superclazz.prototype.toString.apply(this, []) : C$.superclazz.prototype.toString.apply(this, []) + "\n - with linked exception:\n[" + this.linkedException.toString() + "]" ;
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintStream',  function (s) {
if (this.linkedException != null ) {
this.linkedException.printStackTrace$java_io_PrintStream(s);
s.println$S("--------------- linked to ------------------");
}C$.superclazz.prototype.printStackTrace$java_io_PrintStream.apply(this, [s]);
});

Clazz.newMeth(C$, 'printStackTrace$',  function () {
this.printStackTrace$java_io_PrintStream(System.err);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:22 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
