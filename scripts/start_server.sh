#!/bin/bash
sudo systemctl stop nginx
cd /var/www/html/
sudo rm -f index.html
cd /var/www/build/
sudo npm run build
cd build/
sudo cp index.html /var/www/html/
sudo systemctl start nginx
