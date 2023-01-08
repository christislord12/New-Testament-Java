(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontAccess");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['access','sun.font.FontAccess']]]

Clazz.newMeth(C$, 'setFontAccess$sun_font_FontAccess',  function (acc) {
if (C$.access != null ) {
throw Clazz.new_($I$(1,1).c$$S,["Attempt to set FontAccessor twice"]);
}C$.access=acc;
}, 1);

Clazz.newMeth(C$, 'getFontAccess$',  function () {
return C$.access;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:30 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
