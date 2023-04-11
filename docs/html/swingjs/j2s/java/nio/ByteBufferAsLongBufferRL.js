(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.ByteOrder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteBufferAsLongBufferRL", null, 'java.nio.ByteBufferAsLongBufferL');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_ByteBuffer',  function (paramByteBuffer) {
;C$.superclazz.c$$java_nio_ByteBuffer.apply(this,[paramByteBuffer]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_ByteBuffer$I$I$I$I$I',  function (paramByteBuffer, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5) {
;C$.superclazz.c$$java_nio_ByteBuffer$I$I$I$I$I.apply(this,[paramByteBuffer, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'slice$',  function () {
var i=this.position$();
var j=this.limit$();
Clazz.assert(C$, this, function(){return (i <= j)});
var k=i <= j ? j - i : 0;
var m=(i << 3) + this.$offset;
Clazz.assert(C$, this, function(){return (m >= 0)});
return Clazz.new_(C$.c$$java_nio_ByteBuffer$I$I$I$I$I,[this.bb, -1, 0, k, k, m]);
});

Clazz.newMeth(C$, 'duplicate$',  function () {
return Clazz.new_(C$.c$$java_nio_ByteBuffer$I$I$I$I$I,[this.bb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.$offset]);
});

Clazz.newMeth(C$, 'asReadOnlyBuffer$',  function () {
return this.duplicate$();
});

Clazz.newMeth(C$, 'put$J',  function (paramLong) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'put$I$J',  function (paramInt, paramLong) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'compact$',  function () {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'isDirect$',  function () {
return this.bb.isDirect$();
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return true;
});

Clazz.newMeth(C$, 'order$',  function () {
return $I$(1).BIG_ENDIAN;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:44 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
