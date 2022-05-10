#!/bin/bash
echo stopping nginx
sudo systemctl stop nginx
cd /var/www/html/
sudo rm -f *
cd /home/ubuntu/dev/build
sudo rm -rf package-lock.json
echo running the build
sudo npm run build
cd build/
sudo cp -rp * /var/www/html/
echo restarting nginx
sudo systemctl start nginx
