#!/bin/bash
sudo systemctl stop nginx
cd /var/www/
sudo mv build /home/ubuntu/backup/
cd /var/www/html/
sudo rm -f index.html
