#The thing on the left is the target:
#The lines below it are the commands being executed, which can be run individually if you dont have make

#if you want to install make, I used chocolatey, the windows package manager, > choco install make < using powershell with administrative priveleges

dev:
	npm run lint
	npm run dev

initialize: 
	npm install

deploy:
	npm run build