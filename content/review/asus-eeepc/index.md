---
title: Install Windows XP on Asus Eee PC
description: 
date: "2009-01-02"
---

**Summary**

1.  Introduction
2.  What do you need
3.  Creating a bootable USB stick (or hdd)
4.  Installing Windows XP from the USB stick
5.  Installing ASUS Eee PC drivers
6.  ASUS Eee PC Tips and Tricks (hardware & software)
7.  Article references

**1\. Introduction**

In December 2008 i bought online with my credit card (thanks to [ePayment](http://www.epayment.ro/)) four [Asus Eee PCs 4G Surf](http://www.asus.com/products.aspx?l1=24&l2=164&l3=0&l4=0&model=2006&modelmenu=1) (two white and two black models) from [PCfun](http://www.pcfun.ro/). I liked the white ones better so i kept one for myself and the rest i gave them to the family members. Being my first gadget, i was and i'm still very excited about its features. All models come with a friendly linux distro from which you can connect to the Internet very fast. When i got my Eee PC out of the box it took me about 1 to 2 minutes at most to connect to a free wireless network and surf the net. Sweet! I downloaded an MP3 and listened to it just to check the sound and the incorporated speakers from the LCD panel.

I like Linux, but running it as a desktop has no use to me, so i quickly decided to install Windows XP. Let's see how i did it.

PS: most of the tips here might also work with any other desktop or notebook as well.

**2\. What do you need**

*   your desktop computer (this is NOT your ASUS Eee PC)
*   one image or a cd with Windows XP
*   a stick (1Gb is fine) or a USB hdd - make sure you don't have partitions on it or you may loose them in the process
*   USB Multiboot software (choose one of the following download locations: [CD Forum download](http://www.911cd.net/forums/index.php?act=attach&type=post&id=1054), [BootLand download](http://www.boot-land.net/forums/index.php?act=attach&type=post&id=5669), [Siginet download](http://shared.siginetsoftware.com/wimb/USB_MultiBoot_10.zip))
*   your ASUS Eee PC later

**3\. Creating a bootable USB stick or USB hdd**

If you are in hurry or know what you are doing but forgot some steps, check out this great video tutorial (go to 02:45 min to skip the chit-chat):

*   Extract USB Multiboot and browse USB\_MultiBoot\_10/ folder and then run USB\_MultiBoot\_10.cmd
*   Press any key
*   Type H and press ENTER
*   [HP USB Disk Storage Format Tool screen](./img/1.gif) will appear. If this does not find your USB device you can format it manually from Windows and press 'Close' or you can go back and try option P. Check 'Quick format' and press 'Start'
*   In the multiple option screen press 0 and hit enter to toggle between USB Stick and USB harddisk. This is very important because the Windows XP will not install proper if you have a USB harddisk [like this one](http://www.pcfun.ro/Flash-USB/Memory-stick-BTC-MOBILE-STORAGE-DRIVE-BTC-6-GB). The 'USB Stick' medium is selected by default.
*   Type 1 and press ENTER and then [select the Windows XP source](./img/3.gif) (this is the CD or a path on the HDD where your have your XP installation files)
*   If you get a message about 'winnt.sif' press 'YES'
*   in the ['Unattended Install' screen](./img/4.gif) fill the fields with values (also with your serial). If you fill the fields now you will not need to complete them later in the Windows XP installation screen. When you're done press 'Cancel (no changes)'
*   Type 2 and press ENTER and [select your USB device](./img/5.gif)
*   Type 3 and press ENTER, you will [see some files copying](./img/6.gif) on the USB drive. During this you might be asked 'Copy XP and extra sources on the USB?' and press 'Yes'. Now wait couple of minutes (this depends on your system and USB drive speed). You will also get the [message 'FileCopy to USB-Drive is Ready - OK - Success'](./img/7.gif) and press YES (Make USB-stick in XP Setup to be Preferred Boot Drive U:)
*   All done just press any key

**4\. Installing Windows XP from the USB stick**

*   Connect the USB drive to your ASUS Eee PC
*   Start your netbook and in the first screen press F2 to enter BIOS.
*   In the BIOS screen go to 'Advanced' tab and change 'OS Installation' to 'Start'.
*   Next in the 'Boot' tab under 'Hard Disk Drives' select the USB drive as the 1st Drive
*   Also in the 'Boot' tab but under 'Boot Device Priority' section you should see the USB drive as the 1st Boot Device
*   'Exit & Save Changes' made in the BIOS.

The netbook will reboot. You wait couple of seconds and see the following screen:

1\. Begin TXT Mode Setup Windows XP, Never unplug USB Drive Until Logon  
2\. and 3. Continue with GUI Mode Setup Windows XP + Start XP from HD 1  
4\. Start GRUB4DOS Menu - DOS FPY IMAGES + Linux + XP Rec Cons + VISTA Attended Setup XP, Never unplug USB Drive Until After Logon

You will select 1 and press ENTER. This will start the standard Windows XP setup install (format quick NTFS, create partitions etc). After the setup finished to copy all the files needed it will reboot. Now select 2 and 3 (it's a single tab option). This will continue your installation (the classic graphical Windows install). This might take 20 to 40 minutes. When this is done the netbook will reboot (DO NOT UNPLUG THE USB DEVICE YET!), select the 4th option then the last 'Start/Boot Windows XP from HDD'.

**5\. Installing ASUS Eee PC drivers**

Now you are logged in in Windows XP but you can't do anything because you need the Asus EEPC drivers which can be found on your CD that is shipped with your Asus package. If you don't have the CD then download the drivers from the following locations: [RapidShare.de](http://rapidshare.de/files/41236796/Drivers.rar.html) , [MegaUpload.com](http://www.megaupload.com/?d=ZWFM6R0J) . You will need to unrar the archive and copy it to the stick (create a folder like asuseeepc_drivers/). This folder will contain the following subfolders: ACPI, Audio, Chipset, LAN, Touchpad, vga, Wireless. I suggest you first install the ACPI and Chipset drivers and then the rest. Try to locate the .exe that triggers the installation to start.

**6\. ASUS Eee PC Tips and Tricks**

**a. Hardware**

There is a big difference between the white and the black models of ASUS Eee PC 4G Surf. The black model Eee PC 4G SURF (4GS-PK008) has a hatch (turn it upside down and you will see it) that allows you to comfortable change the RAM. The white model Eee PC 4G SURF (4GS-W010) lacks of this ability and you will have to disassemble the netbook to upgrade it.

My ASUS Eee PC 4G Surf came with 512Mb of RAM memory and i've succesfuly upgraded it to 2Gb. If you want to upgrade it follow this [nice video tutorial](http://www.youtube.com/watch?v=hrKXEg2_Vos).

My ASUS Eee PC 4G Surf came with a solid state HDD with the capacity of 4Gb (this is the internal harddisk). After you install Windows XP you will have around 3 to 2.5 GB left. You can use an external USB drive as a secondary partition and install software, play games, etc. It has to be an USB device with resonable access speed.

If you find browsing with the Touch Pad hard, then i may suggest you go buy the following [Microsoft Optical Mouse 500](http://www.microsoft.com/hardware/mouseandkeyboard/productdetails.aspx?pid=059) which i tested and it's tiny, it also has a short cable.

**b. Software**

I recommend using Windows XP on the ASUS Eee PC with the following settings: System Restore OFF, System Properties -> Advanced tab -> Performance -> Settings -> Visual Effects set to 'Adjust for best performance', here also on the Advanced tab -> Virtual memory change 128 Mb and maximum 256 Mb if you HAD a memory upgrade on the netbook!

Go to Start -> Cmd and in the command prompt type _sfc.exe /purgecache_. This command does magic, i had 780 mb free space, and after this command i had about 1Gb.

To save space go to _C:\\WINDOWS\\Driver Cache\\i386_ and delete all the files. You can do the same with the files and folders from _C:\\WINDOWS\\Downloaded Installations_ when you're done installing software on your Asus Eee PC. Eg. If you install Dreamweaver 8 you will probabil find there a folder called _Macromedia Dreamweaver 8_ with the main .exe installer and some other files.

Make sure you disabled the system restore from My Computer -> System Restore tab

If you ever install a SHDC card on your netbook i adivse you to format it to NTFS. By default they come in FAT format. It's simple, and you cand do it on the fly without loosing data that is already written on the card: Go to Command Prompt and insert _convert E: /fs:ntfs_ . Replace E: with the letter drive of your card. It can take up to a minute, depending on the card speed.

I was able to run [Heroes3 Complete series](http://www.buygames.ro/heroes3complete.html) directly from an external USB device. In the game you will have a small scroll on the bottom of the screen but that will not bother your on this kind of static games. I also played this game wireless with other ASUS Eee PC (now that's a dream come true!)

I was able to run [Microsoft Virtual PC 2007](http://www.microsoft.com/windows/downloads/virtualpc/default.mspx) ([download here](http://www.microsoft.com/downloads/details.aspx?FamilyId=28C97D22-6EB8-4A09-A7F7-F6C7A1F000B5&displaylang=en#filelist)) being installed on C: and running the .vhd (663Mb) and .vmc (12kb) directly from stick. I installed Windows 98SE, mounted [Hopkins FBI](http://www.hopkinsfbi.com/hopkins.htm) game and succesfully played it.

I have succesfuly played Starcraft BroodWar on my ASUS Eee PC. I ran it directly from an attached USB stick, also played on BattleNet dozens of games. If already bought Starcraft but want a light version, [download this one](http://files.theabyss.ru/sc/starcraft.zip) (100mb) from theabyss.eu.

When you are watching movies on Youtube with Firefox it is recommended to go in Full-Screen mode by pressing F11 or go to 'View' -> 'Full Screen'

If you want to read Word, Excel or Powerpoint files on your Asus Eee PC, download the following free applications from Microsoft's site: [Microsoft Word Viewer 2003](http://www.microsoft.com/downloads/details.aspx?familyid=95E24C87-8732-48D5-8689-AB826E7B8FDF), [Microsoft Excel Viewer 2003](http://office.microsoft.com/downloads/2000/xlviewer.aspx), [Microsoft PowerPoint Viewer 2003](http://www.microsoft.com/downloads/details.aspx?FamilyId=428D5727-43AB-4F24-90B7-A94784AF71A4). Note that you can only read, not write! For that you need the Microsoft Office CD or iso.

**c. General**

Never lift the Eee PC by the display panel

Fully charge the battery before first use and whenever it is depleted to prolong battery life. Be aware that it takes much longer to charge the battery when the Eee PC is in use.

On the lower right of your Eee PC keyboard you will see four LED indicators: ![](./img/8.gif) Power indicator, ![](./img/9.gif) Battery Charge Indicator, ![](./img/10.gif) Solid State Disk (SSD) indicator and ![](./img/11.gif) Wireless indicator. When the Battery Charge Indicator blinks that means that the battery is less than 10% and AC power is not connected.

It is actually not recommended to use your Eee PC on soft surfaces as beds or sofas because it blocks the vents and the bottom of the netbook can get hot. For example if you let it in your bed and you are watching a movie, you might hear a little noise of fans increasing the speed of ventilation - this is normal.

If you want to use you Eee PC with a projector you can use the 15-pin D-sub monitor port, located on the right side, which supports standard VGA devices.

Your Eee Pc has three USB 2.0 slots and 1 memory card slot. This will allow you to attach removable devices such:

*   USB mouse
*   USB external optical disk drive
*   USB external hard disk drive
*   USB flash memory disk
*   MMC (Multimedia Card)
*   MMC Plus
*   RS-MMC (Reduced Size) (with MMC adapter)
*   SD (Secure Digital)
*   MiniSD (with SD adapter)
*   microSD
*   SD adapter

**References**

1.  [Install XP from USB post on BootLand](http://www.boot-land.net/forums/?showtopic=4900)
2.  [Installing Windows XP on a Netbook Via USB (Acer Aspire One)](http://www.youtube.com/watch?v=2Vt_8p0VllY)
3.  [Asus Eee PC 4GB RAM Installation](http://www.youtube.com/watch?v=hrKXEg2_Vos)
4.  [i64X.com - nLite Windows XP Install on Asus Eee PC](http://www.i64x.com/eeexp.php)