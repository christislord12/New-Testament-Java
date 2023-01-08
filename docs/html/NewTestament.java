import java.awt.event.*;
import java.awt.*;
import javax.swing.*;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;

import java.io.IOException;
import java.io.*;
class NewTestament extends JFrame implements ItemListener {
	// frame
	static JFrame f;
	// label
	static JLabel l, l1, l3;
	// combobox
	static JComboBox c1;
	static JComboBox c2;
	static JPanel p;
	// textbox
	static JTextArea textArea;
	// main class
	public static void main(String[] args) throws IOException 
	{
		// create a new frame
		f = new JFrame("New Testament and Psalms");
		// create a object
		NewTestament s = new NewTestament();
		// set layout of frame
		f.getContentPane().setLayout(new FlowLayout());
		String s1[] = {"NewTestament1","NewTestament2","NewTestament3","NewTestament4","NewTestament5","NewTestament6","NewTestament7","NewTestament8","NewTestament9","NewTestament10","NewTestament11","NewTestament12","NewTestament13","NewTestament14","NewTestament15","NewTestament16","NewTestament17","NewTestament18","NewTestament19","NewTestament20","NewTestament21","NewTestament22","NewTestament23","NewTestament24","NewTestament25","NewTestament26","NewTestament27","NewTestament28","NewTestament29","NewTestament30","NewTestament31","NewTestament32","NewTestament33","NewTestament34","NewTestament35","NewTestament36","NewTestament37","NewTestament38","NewTestament39","NewTestament40","NewTestament41","NewTestament42","NewTestament43","NewTestament44","NewTestament45","NewTestament46","NewTestament47","NewTestament48","NewTestament49","NewTestament50","NewTestament51","NewTestament52","NewTestament53","NewTestament54","NewTestament55","NewTestament56","NewTestament57","NewTestament58","NewTestament59","NewTestament60","NewTestament61","NewTestament62","NewTestament63","NewTestament64","NewTestament65","NewTestament66","NewTestament67","NewTestament68","NewTestament69","NewTestament70","NewTestament71","NewTestament72","NewTestament73","NewTestament74","NewTestament75","NewTestament76","NewTestament77","NewTestament78","NewTestament79","NewTestament80","NewTestament81","NewTestament82","NewTestament83","NewTestament84","NewTestament85","NewTestament86","NewTestament87","NewTestament88","NewTestament89","NewTestament90","NewTestament91","NewTestament92","NewTestament93","NewTestament94","NewTestament95","NewTestament96","NewTestament97","NewTestament98","NewTestament99","NewTestament100","NewTestament101","NewTestament102","NewTestament103","NewTestament104","NewTestament105","NewTestament106","NewTestament107","NewTestament108","NewTestament109","NewTestament110","NewTestament111","NewTestament112","NewTestament113","NewTestament114","NewTestament115","NewTestament116","NewTestament117","NewTestament118","NewTestament119","NewTestament120","NewTestament121","NewTestament122","NewTestament123","NewTestament124","NewTestament125","NewTestament126","NewTestament127","NewTestament128","NewTestament129","NewTestament130","NewTestament131","NewTestament132","NewTestament133","NewTestament134","NewTestament135","NewTestament136","NewTestament137","NewTestament138","NewTestament139","NewTestament140","NewTestament141","NewTestament142","NewTestament143","NewTestament144","NewTestament145","NewTestament146","NewTestament147","NewTestament148","NewTestament149","NewTestament150","NewTestament151","NewTestament152","NewTestament153","NewTestament154","NewTestament155","NewTestament156","NewTestament157","NewTestament158","NewTestament159","NewTestament160","NewTestament161","NewTestament162","NewTestament163","NewTestament164","NewTestament165","NewTestament166","NewTestament167","NewTestament168","NewTestament169","NewTestament170","NewTestament171","NewTestament172","NewTestament173","NewTestament174","NewTestament175","NewTestament176","NewTestament177","NewTestament178","NewTestament179","NewTestament180","NewTestament181","NewTestament182","NewTestament183","NewTestament184","NewTestament185","NewTestament186","NewTestament187","NewTestament188","NewTestament189","NewTestament190","NewTestament191","NewTestament192","NewTestament193","NewTestament194","NewTestament195","NewTestament196","NewTestament197","NewTestament198","NewTestament199","NewTestament200","NewTestament201","NewTestament202","NewTestament203","NewTestament204","NewTestament205","NewTestament206","NewTestament207","NewTestament208","NewTestament209","NewTestament210","NewTestament211","NewTestament212","NewTestament213","NewTestament214","NewTestament215","NewTestament216","NewTestament217","NewTestament218","NewTestament219","NewTestament220","NewTestament221","NewTestament222","NewTestament223","NewTestament224","NewTestament225","NewTestament226","NewTestament227","NewTestament228","NewTestament229","NewTestament230","NewTestament231","NewTestament232","NewTestament233","NewTestament234","NewTestament235","NewTestament236","NewTestament237","NewTestament238","NewTestament239","NewTestament240","NewTestament241","NewTestament242","NewTestament243","NewTestament244","NewTestament245","NewTestament246","NewTestament247","NewTestament248","NewTestament249","NewTestament250","NewTestament251","NewTestament252","NewTestament253","NewTestament254","NewTestament255","NewTestament256","NewTestament257","NewTestament258","NewTestament259","NewTestament260","NewTestament261","NewTestament262","NewTestament263","NewTestament264","NewTestament265","NewTestament266","NewTestament267","NewTestament268","NewTestament269","NewTestament270","NewTestament271","NewTestament272","NewTestament273","NewTestament274","NewTestament275","NewTestament276","NewTestament277","NewTestament278","NewTestament279","NewTestament280","NewTestament281","NewTestament282","NewTestament283","NewTestament284","NewTestament285","NewTestament286","NewTestament287","NewTestament288","NewTestament289","NewTestament290","NewTestament291","NewTestament292","NewTestament293","NewTestament294","NewTestament295","NewTestament296","NewTestament297","NewTestament298","NewTestament299","NewTestament300","NewTestament301","NewTestament302","NewTestament303","NewTestament304","NewTestament305","NewTestament306","NewTestament307","NewTestament308","NewTestament309","NewTestament310","NewTestament311","NewTestament312","NewTestament313","NewTestament314","NewTestament315","NewTestament316","NewTestament317","NewTestament318","NewTestament319","NewTestament320","NewTestament321","NewTestament322","NewTestament323","NewTestament324","NewTestament325","NewTestament326","NewTestament327","NewTestament328","NewTestament329","NewTestament330","NewTestament331","NewTestament332","NewTestament333","NewTestament334","NewTestament335","NewTestament336","NewTestament337","NewTestament338","NewTestament339","NewTestament340","NewTestament341","NewTestament342","NewTestament343","NewTestament344","NewTestament345","NewTestament346","NewTestament347","NewTestament348","NewTestament349","NewTestament350","NewTestament351","NewTestament352","NewTestament353","NewTestament354","NewTestament355","NewTestament356","NewTestament357","NewTestament358","NewTestament359","NewTestament360","NewTestament361","NewTestament362","NewTestament363","NewTestament364","NewTestament365","NewTestament366","NewTestament367","NewTestament368","NewTestament369","NewTestament370","NewTestament371","NewTestament372","NewTestament373","NewTestament374","NewTestament375","NewTestament376","NewTestament377","NewTestament378","NewTestament379","NewTestament380","NewTestament381","NewTestament382","NewTestament383","NewTestament384","NewTestament385","NewTestament386","NewTestament387","NewTestament388","NewTestament389","NewTestament390","NewTestament391","NewTestament392","NewTestament393","NewTestament394","NewTestament395","NewTestament396","NewTestament397","NewTestament398","NewTestament399","NewTestament400","NewTestament401","NewTestament402"};
		// create checkbox
		c1 = new JComboBox(s1);
		// add ItemListener
		c1.addItemListener(s);
		c1.setPreferredSize(new Dimension(300, 100));
		c1.setFont(new Font("Serif", Font.PLAIN, 35));
		
		// create labels
		l = new JLabel("New Testament");
		l.setFont(new Font("Serif", Font.PLAIN, 40));
		
		l1 = new JLabel("Book Of Psalms");
		l1.setFont(new Font("Serif", Font.PLAIN, 40));
		
		String s2[] = {"Psalms1","Psalms2","Psalms3","Psalms4","Psalms5","Psalms6","Psalms7","Psalms8","Psalms9","Psalms10","Psalms11","Psalms12","Psalms13","Psalms14","Psalms15","Psalms16","Psalms17","Psalms18","Psalms19","Psalms20","Psalms21","Psalms22","Psalms23","Psalms24","Psalms25","Psalms26","Psalms27","Psalms28","Psalms29","Psalms30","Psalms31","Psalms32","Psalms33","Psalms34","Psalms35","Psalms36","Psalms37","Psalms38","Psalms39","Psalms40","Psalms41","Psalms42","Psalms43","Psalms44","Psalms45","Psalms46","Psalms47","Psalms48","Psalms49","Psalms50","Psalms51","Psalms52","Psalms53","Psalms54","Psalms55","Psalms56","Psalms57","Psalms58","Psalms59","Psalms60","Psalms61","Psalms62","Psalms63","Psalms64","Psalms65","Psalms66","Psalms67","Psalms68","Psalms69","Psalms70","Psalms71","Psalms72","Psalms73","Psalms74","Psalms75","Psalms76","Psalms77","Psalms78","Psalms79","Psalms80","Psalms81","Psalms82","Psalms83","Psalms84","Psalms85","Psalms86","Psalms87","Psalms88","Psalms89","Psalms90","Psalms91","Psalms92","Psalms93","Psalms94","Psalms95","Psalms96","Psalms97","Psalms98","Psalms99","Psalms100","Psalms101","Psalms102","Psalms103","Psalms104","Psalms105","Psalms106","Psalms107","Psalms108"};
		// create checkbox
		c2 = new JComboBox(s2);
		c2.setPreferredSize(new Dimension(300, 100));
	  // c2.setRenderer(new FontCellRenderer());
		c2.setFont(new Font("Serif", Font.PLAIN, 35));
		
		c2.setSelectedItem(null);
		// add ItemListener
		c2.addItemListener(s);
		// create a new panel
		p = new JPanel();
		p.setLayout(new GridLayout(4,0,2,2));
		p.add(l);
		// add combobox to panel
		p.add(c1);
		p.add(l1);
		p.add(c2);
		// add panel to frame
		f.getContentPane().add(p,BorderLayout.WEST);		
		// image view
		l3 = new JLabel("");
		//ImageIcon iconLogo = new ImageIcon("NewTestament1.JPG");
		ImageIcon imageIcon = new ImageIcon(new ImageIcon(NewTestament.class.getResource("NewTestament1.JPG")).getImage());
		l3.setIcon(imageIcon);	
		f.getContentPane().add(l3);
		// frame code
		f.pack();
		// set the size of frame
		f.setSize(1800, 2500);
		f.show();
	}
	public void itemStateChanged(ItemEvent e) 
    {
		// if the state combobox is changed
		if (e.getSource() == c1)  {
			ImageIcon imageIcon = new ImageIcon(new ImageIcon(getClass().getResource(c1.getSelectedItem() + ".JPG")).getImage());
			l3.setIcon(imageIcon);			
		}
		if (e.getSource() == c2) {
			ImageIcon imageIcon = new ImageIcon(new ImageIcon(getClass().getResource(c2.getSelectedItem() + ".JPG")).getImage());
			l3.setIcon(imageIcon);	
			}

	}
	public static BufferedImage getScaledImage(Image srcImg, int w, int h){
	    BufferedImage resizedImg = new BufferedImage(w, h, BufferedImage.TYPE_INT_ARGB);
	    Graphics2D g2 = resizedImg.createGraphics();

	    g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
	    g2.drawImage(srcImg, 0, 0, w, h, null);
	    g2.dispose();

	    return resizedImg;
	}

}