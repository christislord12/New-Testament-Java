(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.util.HashMap','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractAclFileAttributeView", null, null, ['java.nio.file.attribute.AclFileAttributeView', 'sun.nio.fs.DynamicFileAttributeView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'name$',  function () {
return "acl";
});

Clazz.newMeth(C$, 'setAttribute$S$O',  function (attribute, value) {
if (attribute.equals$O("owner")) {
this.setOwner$java_nio_file_attribute_UserPrincipal(value);
return;
}if (attribute.equals$O("acl")) {
this.setAcl$java_util_List(value);
return;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'" + this.name$() + ":" + attribute + "' not recognized" ]);
});

Clazz.newMeth(C$, 'readAttributes$SA',  function (attributes) {
var acl=false;
var owner=false;
for (var attribute, $attribute = 0, $$attribute = attributes; $attribute<$$attribute.length&&((attribute=($$attribute[$attribute])),1);$attribute++) {
if (attribute.equals$O("*")) {
owner=true;
acl=true;
continue;
}if (attribute.equals$O("acl")) {
acl=true;
continue;
}if (attribute.equals$O("owner")) {
owner=true;
continue;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'" + this.name$() + ":" + attribute + "' not recognized" ]);
}
var result=Clazz.new_($I$(1,1).c$$I,[2]);
if (acl) result.put$O$O("acl", this.getAcl$());
if (owner) result.put$O$O("owner", this.getOwner$());
return $I$(2).unmodifiableMap$java_util_Map(result);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:32 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
