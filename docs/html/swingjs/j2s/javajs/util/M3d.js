(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'javajs.util.AU','javajs.util.T3d','javajs.util.M3']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "M3d", null, 'javajs.util.M34d', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newA9$DA',  function (v) {
var m=Clazz.new_(C$);
m.setA$DA(v);
return m;
}, 1);

Clazz.newMeth(C$, 'newA9$FA',  function (v) {
return C$.newA9$DA($I$(1).toDoubleA$FA(v));
}, 1);

Clazz.newMeth(C$, 'newM3$javajs_util_M3d',  function (m1) {
var m=Clazz.new_(C$);
if (m1 == null ) {
m.setScale$D(1);
return m;
}m.m00=m1.m00;
m.m01=m1.m01;
m.m02=m1.m02;
m.m10=m1.m10;
m.m11=m1.m11;
m.m12=m1.m12;
m.m20=m1.m20;
m.m21=m1.m21;
m.m22=m1.m22;
return m;
}, 1);

Clazz.newMeth(C$, 'newM3$javajs_util_M3',  function (m1) {
var m=Clazz.new_(C$);
if (m1 == null ) {
m.setScale$D(1);
return m;
}m.m00=m1.m00;
m.m01=m1.m01;
m.m02=m1.m02;
m.m10=m1.m10;
m.m11=m1.m11;
m.m12=m1.m12;
m.m20=m1.m20;
m.m21=m1.m21;
m.m22=m1.m22;
return m;
}, 1);

Clazz.newMeth(C$, 'setScale$D',  function (scale) {
this.clear33$();
this.m00=this.m11=this.m22=scale;
});

Clazz.newMeth(C$, 'setM3$javajs_util_M34d',  function (m1) {
this.setM33$javajs_util_M34d(m1);
});

Clazz.newMeth(C$, 'setA$DA',  function (m) {
this.m00=m[0];
this.m01=m[1];
this.m02=m[2];
this.m10=m[3];
this.m11=m[4];
this.m12=m[5];
this.m20=m[6];
this.m21=m[7];
this.m22=m[8];
});

Clazz.newMeth(C$, 'setElement$I$I$D',  function (row, col, v) {
this.set33$I$I$D(row, col, v);
});

Clazz.newMeth(C$, 'getElement$I$I',  function (row, col) {
return this.get33$I$I(row, col);
});

Clazz.newMeth(C$, 'setRow$I$D$D$D',  function (row, x, y, z) {
switch (row) {
case 0:
this.m00=x;
this.m01=y;
this.m02=z;
return;
case 1:
this.m10=x;
this.m11=y;
this.m12=z;
return;
case 2:
this.m20=x;
this.m21=y;
this.m22=z;
return;
default:
this.err$();
}
});

Clazz.newMeth(C$, 'setRowV$I$javajs_util_T3d',  function (row, v) {
switch (row) {
case 0:
this.m00=v.x;
this.m01=v.y;
this.m02=v.z;
return;
case 1:
this.m10=v.x;
this.m11=v.y;
this.m12=v.z;
return;
case 2:
this.m20=v.x;
this.m21=v.y;
this.m22=v.z;
return;
default:
this.err$();
}
});

Clazz.newMeth(C$, 'setRowA$I$DA',  function (row, v) {
this.setRow33$I$DA(row, v);
});

Clazz.newMeth(C$, 'getRow$I$DA',  function (row, v) {
this.getRow33$I$DA(row, v);
});

Clazz.newMeth(C$, 'setColumn3$I$D$D$D',  function (column, x, y, z) {
switch (column) {
case 0:
this.m00=x;
this.m10=y;
this.m20=z;
break;
case 1:
this.m01=x;
this.m11=y;
this.m21=z;
break;
case 2:
this.m02=x;
this.m12=y;
this.m22=z;
break;
default:
this.err$();
}
});

Clazz.newMeth(C$, 'setColumnV$I$javajs_util_T3d',  function (column, v) {
switch (column) {
case 0:
this.m00=v.x;
this.m10=v.y;
this.m20=v.z;
break;
case 1:
this.m01=v.x;
this.m11=v.y;
this.m21=v.z;
break;
case 2:
this.m02=v.x;
this.m12=v.y;
this.m22=v.z;
break;
default:
this.err$();
}
});

Clazz.newMeth(C$, 'setColumnV$I$javajs_util_T3',  function (column, v) {
switch (column) {
case 0:
this.m00=v.x;
this.m10=v.y;
this.m20=v.z;
break;
case 1:
this.m01=v.x;
this.m11=v.y;
this.m21=v.z;
break;
case 2:
this.m02=v.x;
this.m12=v.y;
this.m22=v.z;
break;
default:
this.err$();
}
});

Clazz.newMeth(C$, 'getColumnV$I$javajs_util_T3d',  function (column, v) {
switch (column) {
case 0:
v.x=this.m00;
v.y=this.m10;
v.z=this.m20;
break;
case 1:
v.x=this.m01;
v.y=this.m11;
v.z=this.m21;
break;
case 2:
v.x=this.m02;
v.y=this.m12;
v.z=this.m22;
break;
default:
this.err$();
}
});

Clazz.newMeth(C$, 'setColumnA$I$DA',  function (column, v) {
this.setColumn33$I$DA(column, v);
});

Clazz.newMeth(C$, 'getColumn$I$DA',  function (column, v) {
this.getColumn33$I$DA(column, v);
});

Clazz.newMeth(C$, 'add$javajs_util_M3d',  function (m1) {
this.add33$javajs_util_M34d(m1);
});

Clazz.newMeth(C$, 'sub$javajs_util_M3d',  function (m1) {
this.sub33$javajs_util_M34d(m1);
});

Clazz.newMeth(C$, 'transpose$',  function () {
this.transpose33$();
});

Clazz.newMeth(C$, 'transposeM$javajs_util_M3d',  function (m1) {
this.setM33$javajs_util_M34d(m1);
this.transpose33$();
});

Clazz.newMeth(C$, 'invertM$javajs_util_M3d',  function (m1) {
this.setM33$javajs_util_M34d(m1);
this.invert$();
});

Clazz.newMeth(C$, 'invert$',  function () {
var s=this.determinant3$();
if (s == 0.0 ) return;
s=1 / s;
p$1.set9$D$D$D$D$D$D$D$D$D.apply(this, [this.m11 * this.m22 - this.m12 * this.m21, this.m02 * this.m21 - this.m01 * this.m22, this.m01 * this.m12 - this.m02 * this.m11, this.m12 * this.m20 - this.m10 * this.m22, this.m00 * this.m22 - this.m02 * this.m20, this.m02 * this.m10 - this.m00 * this.m12, this.m10 * this.m21 - this.m11 * this.m20, this.m01 * this.m20 - this.m00 * this.m21, this.m00 * this.m11 - this.m01 * this.m10]);
this.scale$D(s);
});

Clazz.newMeth(C$, 'setAsXRotation$D',  function (angle) {
this.setXRot$D(angle);
return this;
});

Clazz.newMeth(C$, 'setAsYRotation$D',  function (angle) {
this.setYRot$D(angle);
return this;
});

Clazz.newMeth(C$, 'setAsZRotation$D',  function (angle) {
this.setZRot$D(angle);
return this;
});

Clazz.newMeth(C$, 'scale$D',  function (scalar) {
this.mul33$D(scalar);
});

Clazz.newMeth(C$, 'mul$javajs_util_M3d',  function (m1) {
this.mul2$javajs_util_M3d$javajs_util_M3d(this, m1);
});

Clazz.newMeth(C$, 'mul2$javajs_util_M3d$javajs_util_M3d',  function (m1, m2) {
p$1.set9$D$D$D$D$D$D$D$D$D.apply(this, [m1.m00 * m2.m00 + m1.m01 * m2.m10 + m1.m02 * m2.m20, m1.m00 * m2.m01 + m1.m01 * m2.m11 + m1.m02 * m2.m21, m1.m00 * m2.m02 + m1.m01 * m2.m12 + m1.m02 * m2.m22, m1.m10 * m2.m00 + m1.m11 * m2.m10 + m1.m12 * m2.m20, m1.m10 * m2.m01 + m1.m11 * m2.m11 + m1.m12 * m2.m21, m1.m10 * m2.m02 + m1.m11 * m2.m12 + m1.m12 * m2.m22, m1.m20 * m2.m00 + m1.m21 * m2.m10 + m1.m22 * m2.m20, m1.m20 * m2.m01 + m1.m21 * m2.m11 + m1.m22 * m2.m21, m1.m20 * m2.m02 + m1.m21 * m2.m12 + m1.m22 * m2.m22]);
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "javajs.util.M3d"))) return false;
var m=o;
return this.m00 == m.m00  && this.m01 == m.m01   && this.m02 == m.m02   && this.m10 == m.m10   && this.m11 == m.m11   && this.m12 == m.m12   && this.m20 == m.m20   && this.m21 == m.m21   && this.m22 == m.m22  ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(2).doubleToIntBits$D(this.m00) ^ $I$(2).doubleToIntBits$D(this.m01) ^ $I$(2).doubleToIntBits$D(this.m02) ^ $I$(2).doubleToIntBits$D(this.m10) ^ $I$(2).doubleToIntBits$D(this.m11) ^ $I$(2).doubleToIntBits$D(this.m12) ^ $I$(2).doubleToIntBits$D(this.m20) ^ $I$(2).doubleToIntBits$D(this.m21) ^ $I$(2).doubleToIntBits$D(this.m22) ;
});

Clazz.newMeth(C$, 'setZero$',  function () {
this.clear33$();
});

Clazz.newMeth(C$, 'set9$D$D$D$D$D$D$D$D$D',  function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
this.m00=m00;
this.m01=m01;
this.m02=m02;
this.m10=m10;
this.m11=m11;
this.m12=m12;
this.m20=m20;
this.m21=m21;
this.m22=m22;
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
return "[\n  [" + new Double(this.m00).toString() + "\t" + new Double(this.m01).toString() + "\t" + new Double(this.m02).toString() + "]" + "\n  [" + new Double(this.m10).toString() + "\t" + new Double(this.m11).toString() + "\t" + new Double(this.m12).toString() + "]" + "\n  [" + new Double(this.m20).toString() + "\t" + new Double(this.m21).toString() + "\t" + new Double(this.m22).toString() + "] ]" ;
});

Clazz.newMeth(C$, 'setAA$javajs_util_A4d',  function (a) {
this.setAA33$javajs_util_A4d(a);
return this;
});

Clazz.newMeth(C$, 'setAA$javajs_util_A4',  function (a) {
this.setAA33$javajs_util_A4(a);
return this;
});

Clazz.newMeth(C$, 'setAsBallRotation$D$D$D',  function (responseFactor, dx, dy) {
var r=Math.sqrt(dx * dx + dy * dy);
var th=r * responseFactor;
if (th == 0 ) {
this.setScale$D(1);
return false;
}var c=Math.cos(th);
var s=Math.sin(th);
var nx=-dy / r;
var ny=dx / r;
var c1=c - 1;
this.m00=1 + c1 * nx * nx ;
this.m01=this.m10=c1 * nx * ny ;
this.m20=-(this.m02=s * nx);
this.m11=1 + c1 * ny * ny ;
this.m21=-(this.m12=s * ny);
this.m22=c;
return true;
});

Clazz.newMeth(C$, 'isRotation$',  function () {
return (Math.abs(this.determinant3$() - 1) < 0.001 );
});

Clazz.newMeth(C$, 'toM3$',  function () {
var m3=Clazz.new_($I$(3,1));
m3.setA$FA(Clazz.array(Float.TYPE, -1, [this.m00, this.m01, this.m02, this.m10, this.m11, this.m12, this.m20, this.m21, this.m22]));
return m3;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
