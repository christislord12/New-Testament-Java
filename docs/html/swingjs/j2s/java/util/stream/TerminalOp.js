(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.StreamShape']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "TerminalOp");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'inputShape$',  function () {
return $I$(1).REFERENCE;
});

Clazz.newMeth(C$, 'getOpFlags$',  function () {
return 0;
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
return this.evaluateSequential$java_util_stream_PipelineHelper$java_util_Spliterator(helper, spliterator);
});
};})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:01 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
