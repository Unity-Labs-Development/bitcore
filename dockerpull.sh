#!/bin/bash
sudo docker login --username=josh.rogers.node@outlook.com --password=Rcx6cG7a1Bh4 registry-intl.cn-hongkong.aliyuncs.com

sudo docker pull registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-node:latest
sudo docker tag registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-node:latest bitcore-node:latest

sudo docker pull registry-intl.cn-hongkong.aliyuncs.com/vgo/insight-previous-nginx:latest
sudo docker tag registry-intl.cn-hongkong.aliyuncs.com/vgo/insight-previous-nginx:latest insight-previous-nginx:latest



