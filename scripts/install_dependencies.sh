#!/bin/bash
echo installing npm
sudo apt update
sudo apt install npm -y
sudo mkdir -p /var/www/build
cd /var/www/build/
sudo npm install
