(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'javajs.util.P4d','javajs.util.M3d','javajs.util.A4d','javajs.util.P3d','javajs.util.V3d']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Qd");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['q0','q1','q2','q3'],'O',['mat','javajs.util.M3d']]
,['O',['qZero','javajs.util.P4d']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.q0=1;
}, 1);

Clazz.newMeth(C$, 'newQ$javajs_util_Qd',  function (q) {
var q1=Clazz.new_(C$);
q1.set$javajs_util_Qd(q);
return q1;
}, 1);

Clazz.newMeth(C$, 'newVA$javajs_util_T3d$D',  function (v, theta) {
var q=Clazz.new_(C$);
q.setTA$javajs_util_T3d$D(v, theta);
return q;
}, 1);

Clazz.newMeth(C$, 'newM$javajs_util_M3d',  function (mat) {
var q=Clazz.new_(C$);
p$1.setM$javajs_util_M3d.apply(q, [$I$(2).newM3$javajs_util_M3d(mat)]);
return q;
}, 1);

Clazz.newMeth(C$, 'newAA$javajs_util_A4d',  function (a) {
var q=Clazz.new_(C$);
q.setAA$javajs_util_A4d(a);
return q;
}, 1);

Clazz.newMeth(C$, 'newP4$javajs_util_P4d',  function (pt) {
var q=Clazz.new_(C$);
p$1.setP4$javajs_util_P4d.apply(q, [pt]);
return q;
}, 1);

Clazz.newMeth(C$, 'newP4$javajs_util_P4',  function (pt) {
var q=Clazz.new_(C$);
p$1.setP4$javajs_util_P4d.apply(q, [$I$(1).new4$D$D$D$D(pt.x, pt.y, pt.z, pt.w)]);
return q;
}, 1);

Clazz.newMeth(C$, 'new4$D$D$D$D',  function (q1, q2, q3, q0) {
var q=Clazz.new_(C$);
if (q0 < -1 ) {
q.q0=-1;
return q;
}if (q0 > 1 ) {
q.q0=1;
return q;
}q.q0=q0;
q.q1=q1;
q.q2=q2;
q.q3=q3;
return q;
}, 1);

Clazz.newMeth(C$, 'set$javajs_util_Qd',  function (q) {
this.q0=q.q0;
this.q1=q.q1;
this.q2=q.q2;
this.q3=q.q3;
});

Clazz.newMeth(C$, 'setP4$javajs_util_P4d',  function (pt) {
var factor=(pt == null  ? 0 : pt.distance4$javajs_util_P4d(C$.qZero));
if (factor == 0 ) {
this.q0=1;
return;
}this.q0=pt.w / factor;
this.q1=pt.x / factor;
this.q2=pt.y / factor;
this.q3=pt.z / factor;
}, p$1);

Clazz.newMeth(C$, 'setTA$javajs_util_T3d$D',  function (pt, theta) {
if (pt.x == 0  && pt.y == 0   && pt.z == 0  ) {
this.q0=1;
return;
}var fact=(Math.sin(theta / 2 * 0.017453292519943295) / Math.sqrt(pt.x * pt.x + pt.y * pt.y + pt.z * pt.z));
this.q0=(Math.cos(theta / 2 * 0.017453292519943295));
this.q1=(pt.x * fact);
this.q2=(pt.y * fact);
this.q3=(pt.z * fact);
});

Clazz.newMeth(C$, 'setAA$javajs_util_A4d',  function (a) {
var aa=$I$(3).newAA$javajs_util_A4d(a);
if (aa.angle == 0 ) aa.y=1;
p$1.setM$javajs_util_M3d.apply(this, [Clazz.new_($I$(2,1)).setAA$javajs_util_A4d(aa)]);
});

Clazz.newMeth(C$, 'setM$javajs_util_M3d',  function (mat) {
this.mat=mat;
var trace=mat.m00 + mat.m11 + mat.m22 ;
var temp;
var w;
var x;
var y;
var z;
if (trace >= 0.5 ) {
w=Math.sqrt(1.0 + trace);
x=(mat.m21 - mat.m12) / w;
y=(mat.m02 - mat.m20) / w;
z=(mat.m10 - mat.m01) / w;
} else if ((temp=mat.m00 + mat.m00 - trace) >= 0.5 ) {
x=Math.sqrt(1.0 + temp);
w=(mat.m21 - mat.m12) / x;
y=(mat.m10 + mat.m01) / x;
z=(mat.m20 + mat.m02) / x;
} else if ((temp=mat.m11 + mat.m11 - trace) >= 0.5  || mat.m11 > mat.m22  ) {
y=Math.sqrt(1.0 + temp);
w=(mat.m02 - mat.m20) / y;
x=(mat.m10 + mat.m01) / y;
z=(mat.m21 + mat.m12) / y;
} else {
z=Math.sqrt(1.0 + mat.m22 + mat.m22  - trace);
w=(mat.m10 - mat.m01) / z;
x=(mat.m20 + mat.m02) / z;
y=(mat.m21 + mat.m12) / z;
}this.q0=(w * 0.5);
this.q1=(x * 0.5);
this.q2=(y * 0.5);
this.q3=(z * 0.5);
}, p$1);

Clazz.newMeth(C$, 'setRef$javajs_util_Qd',  function (qref) {
if (qref == null ) {
this.mul$D(p$1.getFixFactor.apply(this, []));
return;
}if (this.dot$javajs_util_Qd(qref) >= 0 ) return;
this.q0*=-1;
this.q1*=-1;
this.q2*=-1;
this.q3*=-1;
});

Clazz.newMeth(C$, 'getQuaternionFrame$javajs_util_P3d$javajs_util_T3d$javajs_util_T3d',  function (center, x, xy) {
return C$.newFrame$javajs_util_P3d$javajs_util_T3d$javajs_util_T3d$Z(center, x, xy, true);
}, 1);

Clazz.newMeth(C$, 'getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3',  function (center, x, xy) {
return C$.newFrame$javajs_util_P3d$javajs_util_T3d$javajs_util_T3d$Z(center == null  ? null : $I$(4).newPd$javajs_util_T3(center), $I$(5).newV$javajs_util_T3(x), $I$(5).newV$javajs_util_T3(xy), false);
}, 1);

Clazz.newMeth(C$, 'newFrame$javajs_util_P3d$javajs_util_T3d$javajs_util_T3d$Z',  function (center, vA, vB, doCopy) {
if (doCopy) {
vA=$I$(5).newV$javajs_util_T3d(vA);
vB=$I$(5).newV$javajs_util_T3d(vB);
}if (center != null ) {
vA.sub$javajs_util_T3d(center);
vB.sub$javajs_util_T3d(center);
}return C$.getQuaternionFrameV$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$Z(vA, vB, null, false);
}, 1);

Clazz.newMeth(C$, 'getQuaternionFrameV$javajs_util_V3$javajs_util_V3$javajs_util_V3$Z',  function (vA, vB, vC, yBased) {
return C$.getQuaternionFrameV$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$Z($I$(5).newV$javajs_util_T3(vA), $I$(5).newV$javajs_util_T3(vB), $I$(5).newV$javajs_util_T3(vC), yBased);
}, 1);

Clazz.newMeth(C$, 'getQuaternionFrameV$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$Z',  function (vA, vB, vC, yBased) {
if (vC == null ) {
vC=Clazz.new_($I$(5,1));
vC.cross$javajs_util_T3d$javajs_util_T3d(vA, vB);
if (yBased) vA.cross$javajs_util_T3d$javajs_util_T3d(vB, vC);
}var vBprime=Clazz.new_($I$(5,1));
vBprime.cross$javajs_util_T3d$javajs_util_T3d(vC, vA);
vA.normalize$();
vBprime.normalize$();
vC.normalize$();
var mat=Clazz.new_($I$(2,1));
mat.setColumnV$I$javajs_util_T3d(0, vA);
mat.setColumnV$I$javajs_util_T3d(1, vBprime);
mat.setColumnV$I$javajs_util_T3d(2, vC);
var q=C$.newM$javajs_util_M3d(mat);
return q;
}, 1);

Clazz.newMeth(C$, 'getMatrix$',  function () {
if (this.mat == null ) p$1.setMatrix.apply(this, []);
return this.mat;
});

Clazz.newMeth(C$, 'setMatrix',  function () {
this.mat=Clazz.new_($I$(2,1));
this.mat.m00=this.q0 * this.q0 + this.q1 * this.q1 - this.q2 * this.q2 - this.q3 * this.q3;
this.mat.m01=2 * this.q1 * this.q2  - 2 * this.q0 * this.q3 ;
this.mat.m02=2 * this.q1 * this.q3  + 2 * this.q0 * this.q2 ;
this.mat.m10=2 * this.q1 * this.q2  + 2 * this.q0 * this.q3 ;
this.mat.m11=this.q0 * this.q0 - this.q1 * this.q1 + this.q2 * this.q2 - this.q3 * this.q3;
this.mat.m12=2 * this.q2 * this.q3  - 2 * this.q0 * this.q1 ;
this.mat.m20=2 * this.q1 * this.q3  - 2 * this.q0 * this.q2 ;
this.mat.m21=2 * this.q2 * this.q3  + 2 * this.q0 * this.q1 ;
this.mat.m22=this.q0 * this.q0 - this.q1 * this.q1 - this.q2 * this.q2 + this.q3 * this.q3;
}, p$1);

Clazz.newMeth(C$, 'add$D',  function (x) {
return C$.newVA$javajs_util_T3d$D(this.getNormal$(), this.getTheta$() + x);
});

Clazz.newMeth(C$, 'mul$D',  function (x) {
return (x == 1  ? C$.new4$D$D$D$D(this.q1, this.q2, this.q3, this.q0) : C$.newVA$javajs_util_T3d$D(this.getNormal$(), this.getTheta$() * x));
});

Clazz.newMeth(C$, 'mulQ$javajs_util_Qd',  function (p) {
return C$.new4$D$D$D$D(this.q0 * p.q1 + this.q1 * p.q0 + this.q2 * p.q3 - this.q3 * p.q2, this.q0 * p.q2 + this.q2 * p.q0 + this.q3 * p.q1 - this.q1 * p.q3, this.q0 * p.q3 + this.q3 * p.q0 + this.q1 * p.q2 - this.q2 * p.q1, this.q0 * p.q0 - this.q1 * p.q1 - this.q2 * p.q2 - this.q3 * p.q3);
});

Clazz.newMeth(C$, 'div$javajs_util_Qd',  function (p) {
return this.mulQ$javajs_util_Qd(p.inv$());
});

Clazz.newMeth(C$, 'divLeft$javajs_util_Qd',  function (p) {
return this.inv$().mulQ$javajs_util_Qd(p);
});

Clazz.newMeth(C$, 'dot$javajs_util_Qd',  function (q) {
return this.q0 * q.q0 + this.q1 * q.q1 + this.q2 * q.q2 + this.q3 * q.q3;
});

Clazz.newMeth(C$, 'inv$',  function () {
return C$.new4$D$D$D$D(-this.q1, -this.q2, -this.q3, this.q0);
});

Clazz.newMeth(C$, 'negate$',  function () {
return C$.new4$D$D$D$D(-this.q1, -this.q2, -this.q3, -this.q0);
});

Clazz.newMeth(C$, 'getFixFactor',  function () {
return (this.q0 < 0  || this.q0 == 0  && (this.q1 < 0  || this.q1 == 0  && (this.q2 < 0  || this.q2 == 0  && this.q3 < 0   )  )   ? -1 : 1);
}, p$1);

Clazz.newMeth(C$, 'getVector$I',  function (i) {
return this.getVectorScaled$I$D(i, 1.0);
});

Clazz.newMeth(C$, 'getVectorScaled$I$D',  function (i, scale) {
if (i == -1) {
scale*=p$1.getFixFactor.apply(this, []);
return $I$(5).new3$D$D$D(this.q1 * scale, this.q2 * scale, this.q3 * scale);
}if (this.mat == null ) p$1.setMatrix.apply(this, []);
var v=Clazz.new_($I$(5,1));
this.mat.getColumnV$I$javajs_util_T3d(i, v);
if (scale != 1.0 ) v.scale$D(scale);
return v;
});

Clazz.newMeth(C$, 'getNormal$',  function () {
var v=C$.getRawNormal$javajs_util_Qd(this);
v.scale$D(p$1.getFixFactor.apply(this, []));
return v;
});

Clazz.newMeth(C$, 'getRawNormal$javajs_util_Qd',  function (q) {
var v=$I$(5).new3$D$D$D(q.q1, q.q2, q.q3);
if (v.length$() == 0 ) return $I$(5).new3$D$D$D(0, 0, 1);
v.normalize$();
return v;
}, 1);

Clazz.newMeth(C$, 'getTheta$',  function () {
return (Math.acos(Math.abs(this.q0)) * 2 * 180  / 3.141592653589793);
});

Clazz.newMeth(C$, 'getThetaRadians$',  function () {
return (Math.acos(Math.abs(this.q0)) * 2);
});

Clazz.newMeth(C$, 'getNormalDirected$javajs_util_V3d',  function (v0) {
var v=this.getNormal$();
if (v.x * v0.x + v.y * v0.y + v.z * v0.z < 0 ) {
v.scale$D(-1);
}return v;
});

Clazz.newMeth(C$, 'get3dProjection$javajs_util_V3d',  function (v3d) {
v3d.set$D$D$D(this.q1, this.q2, this.q3);
return v3d;
});

Clazz.newMeth(C$, 'getThetaDirected$javajs_util_P4d',  function (axisAngle) {
var theta=this.getTheta$();
var v=this.getNormal$();
if (axisAngle.x * this.q1 + axisAngle.y * this.q2 + axisAngle.z * this.q3 < 0 ) {
v.scale$D(-1);
theta=-theta;
}axisAngle.set4$D$D$D$D(v.x, v.y, v.z, theta);
return axisAngle;
});

Clazz.newMeth(C$, 'getThetaDirectedV$javajs_util_V3d',  function (vector) {
var theta=this.getTheta$();
var v=this.getNormal$();
if (vector.x * this.q1 + vector.y * this.q2 + vector.z * this.q3 < 0 ) {
v.scale$D(-1);
theta=-theta;
}return theta;
});

Clazz.newMeth(C$, 'toPoint4d$',  function () {
return $I$(1).new4$D$D$D$D(this.q1, this.q2, this.q3, this.q0);
});

Clazz.newMeth(C$, 'toAxisAngle4d$',  function () {
var theta=2 * Math.acos(Math.abs(this.q0));
var sinTheta2=Math.sin(theta / 2);
var v=this.getNormal$();
if (sinTheta2 < 0 ) {
v.scale$D(-1);
theta=3.141592653589793 - theta;
}return $I$(3).newVA$javajs_util_V3d$D(v, theta);
});

Clazz.newMeth(C$, 'transform2$javajs_util_T3d$javajs_util_T3d',  function (pt, ptNew) {
if (this.mat == null ) p$1.setMatrix.apply(this, []);
this.mat.rotate2$javajs_util_T3d$javajs_util_T3d(pt, ptNew);
return ptNew;
});

Clazz.newMeth(C$, 'leftDifference$javajs_util_Qd',  function (q2) {
var q2adjusted=(this.dot$javajs_util_Qd(q2) < 0  ? q2.negate$() : q2);
return this.inv$().mulQ$javajs_util_Qd(q2adjusted);
});

Clazz.newMeth(C$, 'rightDifference$javajs_util_Qd',  function (q2) {
var q2adjusted=(this.dot$javajs_util_Qd(q2) < 0  ? q2.negate$() : q2);
return this.mulQ$javajs_util_Qd(q2adjusted.inv$());
});

Clazz.newMeth(C$, 'toString',  function () {
return "{" + new Double(this.q1).toString() + " " + new Double(this.q2).toString() + " " + new Double(this.q3).toString() + " " + new Double(this.q0).toString() + "}" ;
});

Clazz.newMeth(C$, 'div$javajs_util_QdA$javajs_util_QdA$I$Z',  function (data1, data2, nMax, isRelative) {
var n;
if (data1 == null  || data2 == null   || (n=Math.min(data1.length, data2.length)) == 0 ) return null;
if (nMax > 0 && n > nMax ) n=nMax;
var dqs=Clazz.array(C$, [n]);
for (var i=0; i < n; i++) {
if (data1[i] == null  || data2[i] == null  ) return null;
dqs[i]=(isRelative ? data1[i].divLeft$javajs_util_Qd(data2[i]) : data1[i].div$javajs_util_Qd(data2[i]));
}
return dqs;
}, 1);

Clazz.newMeth(C$, 'sphereMean$javajs_util_QdA$DA$D',  function (data, retStddev, criterion) {
if (data == null  || data.length == 0 ) return Clazz.new_(C$);
if (retStddev == null ) retStddev=Clazz.array(Double.TYPE, [1]);
if (data.length == 1) {
retStddev[0]=0;
return C$.newQ$javajs_util_Qd(data[0]);
}var diff=1.7976931348623157E308;
var lastStddev=1.7976931348623157E308;
var qMean=C$.simpleAverage$javajs_util_QdA(data);
var maxIter=100;
var iter=0;
while (diff > criterion  && lastStddev != 0   && iter < maxIter ){
qMean=C$.newMean$javajs_util_QdA$javajs_util_Qd(data, qMean);
retStddev[0]=C$.stdDev$javajs_util_QdA$javajs_util_Qd(data, qMean);
diff=Math.abs(retStddev[0] - lastStddev);
lastStddev=retStddev[0];
}
return qMean;
}, 1);

Clazz.newMeth(C$, 'simpleAverage$javajs_util_QdA',  function (ndata) {
var mean=$I$(5).new3$D$D$D(0, 0, 1);
var v=ndata[0].getNormal$();
mean.add$javajs_util_T3d(v);
for (var i=ndata.length; --i >= 0; ) mean.add$javajs_util_T3d(ndata[i].getNormalDirected$javajs_util_V3d(mean));

mean.sub$javajs_util_T3d(v);
mean.normalize$();
var f=0;
for (var i=ndata.length; --i >= 0; ) f+=Math.abs(ndata[i].get3dProjection$javajs_util_V3d(v).dot$javajs_util_T3d(mean));

if (f != 0 ) mean.scale$D(f / ndata.length);
f=Math.sqrt(1 - mean.lengthSquared$());
if (Double.isNaN$D(f)) f=0;
return C$.newP4$javajs_util_P4d($I$(1).new4$D$D$D$D(mean.x, mean.y, mean.z, f));
}, 1);

Clazz.newMeth(C$, 'newMean$javajs_util_QdA$javajs_util_Qd',  function (data, mean) {
var sum=Clazz.new_($I$(5,1));
var v;
var q;
var dq;
for (var i=data.length; --i >= 0; ) {
q=data[i];
dq=q.div$javajs_util_Qd(mean);
v=dq.getNormal$();
v.scale$D(dq.getTheta$());
sum.add$javajs_util_T3d(v);
}
sum.scale$D(1.0 / data.length);
var dqMean=C$.newVA$javajs_util_T3d$D(sum, sum.length$());
return dqMean.mulQ$javajs_util_Qd(mean);
}, 1);

Clazz.newMeth(C$, 'stdDev$javajs_util_QdA$javajs_util_Qd',  function (data, mean) {
var sum2=0;
var n=data.length;
for (var i=n; --i >= 0; ) {
var theta=data[i].div$javajs_util_Qd(mean).getTheta$();
sum2+=theta * theta;
}
return Math.sqrt(sum2 / n);
}, 1);

Clazz.newMeth(C$, 'getEulerZYZ$',  function () {
var rA;
var rB;
var rG;
if (this.q1 == 0  && this.q2 == 0  ) {
var theta=this.getTheta$();
return Clazz.array(Double.TYPE, -1, [this.q3 < 0  ? -theta : theta, 0, 0]);
}rA=Math.atan2(2 * (this.q2 * this.q3 + this.q0 * this.q1), 2 * (-this.q1 * this.q3 + this.q0 * this.q2));
rB=Math.acos(this.q3 * this.q3 - this.q2 * this.q2 - this.q1 * this.q1 + this.q0 * this.q0);
rG=Math.atan2(2 * (this.q2 * this.q3 - this.q0 * this.q1), 2 * (this.q0 * this.q2 + this.q1 * this.q3));
return Clazz.array(Double.TYPE, -1, [(rA / 0.017453292519943295), (rB / 0.017453292519943295), (rG / 0.017453292519943295)]);
});

Clazz.newMeth(C$, 'getEulerZXZ$',  function () {
var rA;
var rB;
var rG;
if (this.q1 == 0  && this.q2 == 0  ) {
var theta=this.getTheta$();
return Clazz.array(Double.TYPE, -1, [this.q3 < 0  ? -theta : theta, 0, 0]);
}rA=Math.atan2(2 * (this.q1 * this.q3 - this.q0 * this.q2), 2 * (this.q0 * this.q1 + this.q2 * this.q3));
rB=Math.acos(this.q3 * this.q3 - this.q2 * this.q2 - this.q1 * this.q1 + this.q0 * this.q0);
rG=Math.atan2(2 * (this.q1 * this.q3 + this.q0 * this.q2), 2 * (-this.q2 * this.q3 + this.q0 * this.q1));
return Clazz.array(Double.TYPE, -1, [(rA / 0.017453292519943295), (rB / 0.017453292519943295), (rG / 0.017453292519943295)]);
});

C$.$static$=function(){C$.$static$=0;
C$.qZero=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:03 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
