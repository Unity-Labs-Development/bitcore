#!/bin/bash
sudo docker login --username=josh.rogers.node@outlook.com --password=Rcx6cG7a1Bh4 registry-intl.cn-hongkong.aliyuncs.com

sudo docker pull registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-node:vgo-v1.0.0
sudo docker tag registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-node:vgo-v1.0.0 bitcore-node:vgo-v1.0.0

sudo docker pull registry-intl.cn-hongkong.aliyuncs.com/vgo/insight-previous-nginx:vgo-v1.0.0
sudo docker tag registry-intl.cn-hongkong.aliyuncs.com/vgo/insight-previous-nginx:vgo-v1.0.0 insight-previous-nginx:vgo-v1.0.0



