(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Function");

Clazz.newMeth(C$, 'identity$',  function () {
return (P$.Function$lambda3$||(P$.Function$lambda3$=(((P$.Function$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Function$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O',  function (t) { return (t);});
})()
), Clazz.new_(P$.Function$lambda3.$init$,[this, null])))));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_Function',  function (before) {
$I$(1).requireNonNull$O(before);
return ((P$.Function$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Function$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O',  function (v) { return (this.apply$O(this.$finals$.before.apply$O(v)));});
})()
), Clazz.new_(P$.Function$lambda1.$init$,[this, {before:before}]));
});

Clazz.newMeth(C$, 'andThen$java_util_function_Function',  function (after) {
$I$(1).requireNonNull$O(after);
return ((P$.Function$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Function$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O',  function (t) { return (this.$finals$.after.apply$O(this.apply$O(t)));});
})()
), Clazz.new_(P$.Function$lambda2.$init$,[this, {after:after}]));
});
};})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:57 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
