(function(){var P$=Clazz.newPackage("javax.swing.filechooser"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GenericFileSystemView", null, 'javax.swing.filechooser.FileSystemView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createNewFolder$java_io_File',  function (containingDir) {
if (containingDir == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Containing directory is null:"]);
}var newFolder=this.createFileObject$java_io_File$S(containingDir, "newFolder");
if (newFolder.exists$()) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Directory already exists:" + newFolder.getAbsolutePath$()]);
} else {
newFolder.mkdirs$();
}return newFolder;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:15 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
