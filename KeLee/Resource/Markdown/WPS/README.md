# 使用说明

#### 申请文字识别API
1. 先[申请百度智能云的手写文字识别](https://console.bce.baidu.com/ai/?_=1728621005908#/ai/ocr/overview/index)`API Key`，计费方式选择`按量后付费`，每月赠送500次的免费调用，此申请需要实名认证；
2. 实名认证通过后，回到百度智能云的控制台，点击`手写文字识别`的`管理`进入`API Key`的创建页面，点击`创建应用`；
3. 创建完毕后点击`查看应用详情`，此时在此页面即可看到`API Key`和`Secret Key`，复制这两个Key待后面的步骤备用；

#### 配置插件
1. 登录WPS应用；
2. 返回插件的自定义页面，填写申请获得的`API Key`和`Secret Key`；
3. 其余参数按需求改；
4. 打开此插件`捕获Cookie`的开关
5. 打开登陆好账号的WPS应用，会自动`捕获Cookie`，看到捕获成功即可关闭`捕获Cookie`的开关。
6. 待当前时间符合你设置的运行时间时，此插件会自动执行签到任务，**请勿手动执行脚本**；
7. 默认每天早上8点签到，可在`定时参数`中修改，需要遵循CRON表达式。

#### 特别说明
由于百度的OCR识别验证码的成功率并不高，可能会导致多次签到失败，可适当调整`失败重试次数`的数值。