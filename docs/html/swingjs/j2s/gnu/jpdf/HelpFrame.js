(function(){var P$=Clazz.newPackage("gnu.jpdf"),p$1={},p$2={},I$=[[0,'javax.swing.JPanel','java.io.File','java.io.FileOutputStream','java.awt.event.WindowAdapter','java.awt.BorderLayout','gnu.jpdf.TestMenuBar','gnu.jpdf.PDFJob','gnu.jpdf.TestPanel','javax.swing.JScrollPane','java.awt.Dimension','java.awt.Toolkit','javax.swing.JOptionPane','gnu.jpdf.HelpFrame','java.awt.JobAttributes','java.awt.Color','java.awt.Point','java.awt.Font','gnu.jpdf.BoundingBox','java.awt.MediaTracker','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','javax.swing.JTextArea','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HelpFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setTitle$S("gnupdf Help");
var helpContent=this.getContentPane$();
helpContent.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
var textArea=Clazz.new_($I$(23,1).c$$I$I,[20, 40]);
textArea.setLineWrap$Z(true);
textArea.append$S(p$2.getHelpText.apply(this, []));
var helpScroller=Clazz.new_($I$(9,1).c$$java_awt_Component,[textArea]);
helpContent.add$java_awt_Component(helpScroller);
this.setSize$java_awt_Dimension(helpScroller.getSize$());
this.setLocation$java_awt_Point(Clazz.new_($I$(16,1).c$$I$I,[200, 200]));
this.pack$();
this.toFront$();
this.show$();
textArea.setCaretPosition$I(0);
textArea.setEditable$Z(false);
}, 1);

Clazz.newMeth(C$, 'getHelpText',  function () {
var out=Clazz.new_($I$(24,1));
out.append$S("gnujpdf Help File and Tutorial\n");
out.append$S("\n");
out.append$S("This file contains some general help and a simple tutorial on the\n");
out.append$S("gnujpdf java package (gnu.jpdf.*).  More information can be\n");
out.append$S("obtained from the website, http://gnujpdf.sourceforge.net.\n");
out.append$S("\n");
out.append$S("gnujpdf is a set of Java classes that allows a programmer to use\n");
out.append$S("extended versions of java.awt.Graphics and java.awt.PrintJob to\n");
out.append$S("generate and print pdf files.  The idea is to use methods and\n");
out.append$S("classes that act on a Graphics object to produce the same output\n");
out.append$S("in a pdf file, on the screen, and on the printer.\n");
out.append$S("\n");
out.append$S("The best source of information for a programmer wishing to use\n");
out.append$S("this simple API is the source code in PDFTest.java.  It\n");
out.append$S("demonstrates a simple application that displays various\n");
out.append$S("formatting and simultaneously writes a pdf file that will be an\n");
out.append$S("identical copy of what is seen on the screen.\n");
out.append$S("\n");
out.append$S("The starting point for creating any PDF document with this\n");
out.append$S("library is the PDFJob class.\n");
out.append$S("\n");
out.append$S("PDFJob job = new PDFJob(fileOutputStream);\n");
out.append$S("\n");
out.append$S("The fileOutputStream is normally a stream initialized with the\n");
out.append$S("name of the pdf you wish to generate, such as \"test.pdf\".  A\n");
out.append$S("PDFGraphics object can be obtained from the job by calling:\n");
out.append$S("\n");
out.append$S("Graphics pdfGraphics = job.getGraphics();\n");
out.append$S("\n");
out.append$S("This Graphics object can be passed into the same methods used to\n");
out.append$S("draw to the screen.  Most of the common methods in\n");
out.append$S("java.awt.Graphics have been implemented (with a few important\n");
out.append$S("exceptions - this is a beta product, so there is still plenty of\n");
out.append$S("work to be done - see the source code for more specifics).  When\n");
out.append$S("calling methods such as drawString(..)  or drawImage(..), what is\n");
out.append$S("actually happening is that the PDFGraphics object is writing the\n");
out.append$S("necessary markup to the output stream.\n");
out.append$S("\n");
out.append$S("A new pdf page is initialized by disposing of the exisiting\n");
out.append$S("Graphics object and getting a new one from the job.\n");
out.append$S("\n");
out.append$S("pdfGraphics.dispose(); \n");
out.append$S("pdfGraphics = job.getGraphics();\n");
out.append$S("\n");
out.append$S("Any Graphics operations will now be made on a new page in the pdf\n");
out.append$S("document.  When the document is finished, the job must be closed\n");
out.append$S("out:\n");
out.append$S("\n");
out.append$S("pdfGraphics.dispose();\n");
out.append$S("job.end();\n");
out.append$S("\n");
out.append$S("And the fileOutputStream will need to be closed properly as well,\n");
out.append$S("as this is not guaranteed to be taken care of by the PDF classes.\n");
out.append$S("\n");
out.append$S("----------------\n");
out.append$S("End of Help File\n");
out.append$S("\n");
out.append$S("For more information, see http://gnujpdf.sourceforge.net\n");
out.append$S("\n");
return out.toString();
}, p$2);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:29 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
