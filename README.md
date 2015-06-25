### SmartLiving APPrentice Cordova app

This is the Smartliving APPrentice aplication build in Cordova framework

#### How to setup and start project

1. Install Cordova with node package manager 

	`npm install -g cordova`

	or if you are using MAC

	`sudo npm install -g cordova`

2. Create Cordova project named **smartlivingAPPrentice** in the folder **smartliving-cordova**

	`cordova create smartliving-cordova com.cordova.smartlivingAPPrentice smartlivingAPPrentice`

3. Add suport for platforms
	
	`cordova platform add ios`

	and 

	`cordova platform add android`

	**NOTE:** you will need to install appropriate SDK-s

4. Put contents of this repository in **www** folder of your Cordova Project

5. Run Cordova project with emulator 

	`cordova emulate ios`

	or 

	`cordova emulate android`