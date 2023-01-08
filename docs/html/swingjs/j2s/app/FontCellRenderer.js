(function(){var P$=Clazz.newPackage("_"),I$=[[0,'javax.swing.JFrame','java.awt.FlowLayout','javax.swing.JComboBox','java.awt.Dimension','javax.swing.JLabel','java.awt.Font','javax.swing.JPanel','java.awt.GridLayout','javax.swing.ImageIcon','java.awt.image.BufferedImage','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontCellRenderer", null, 'javax.swing.DefaultListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z',  function (list, value, index, isSelected, cellHasFocus) {
var label=C$.superclazz.prototype.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z.apply(this, [list, value, index, isSelected, cellHasFocus]);
var font=Clazz.new_($I$(6,1).c$$S$I$I,[value, 0, 20]);
label.setFont$java_awt_Font(font);
return label;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2023-01-07 20:17:29 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
