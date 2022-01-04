npm run build
#ssh jeff@192.168.1.55 "rm -rf /home/jeff/lovemire.com/*"
scp -r build/* jeff@192.168.1.55:/home/jeff/lovemire.com
