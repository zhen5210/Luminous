# 新手入门

## Loon 下载地址

<a href="https://apps.apple.com/app/id1373567447"><img width="200px" alt="Download on App Store" src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png"/></a>  

***

## 导入配置

> 配置参数解释见：应用内**示例配置**及[Loon官方文档](https://nsloon.app/docs/intro)

### 1.导入 **配置文件** ：
* 点击 [链接](https://www.nsloon.com/openloon/import?sub=https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Loon.conf) 一键导入配置文件

!> 注意导入时点击`替换并保留节点和证书`！



### 2.为配置文件生成证书
* 点击 **设置** ，在下方 **MitM** 区域，点击 **证书管理**
* 点击 **生成新的CA证书** -**安装CA证书**
* 弹出提示后，在Safari中 **允许** 下载配置文件
![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/IMG_2112.PNG) 

### 3.设置中安装描述文件
* 在 **系统设置** 中，点击 **已下载描述文件** ，并 **安装**
![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/%E8%AE%BE%E7%BD%AE-%E5%AE%89%E8%A3%85%E8%AF%81%E4%B9%A6.jpg)

### 4.设置中信任描述文件
* 在 **系统设置** - **通用** - **关于本机** - **证书信任设置** 中，勾选已安装的描述文件
* 安装完成后，返回Loon，勾选以启用 **MitM** 和 **复写** 和 **脚本**
![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/%E8%AE%BE%E7%BD%AE-%E4%BF%A1%E4%BB%BB%E8%AF%81%E4%B9%A6.jpg)

### 5.导入机场订阅
* 点击 **设置** ，在最上方 **节点** 区域，点击 **所有节点**
* 点击右上角加号，复制 **机场订阅** 链接，并粘贴到 **URL**，别名可以写机场名称
* 如果是不兼容Loon的节点订阅，可尝试开启下方的 **资源解析器**
![1](https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/IMG_1368.PNG)

### 6.修改部分默认设置
* 点击 [链接](https://www.nsloon.com/openloon/proxymode=tun) 自动跳转Loon修改代理模式为 **TUN Only**
* 点击底部「配置」按钮 → 点击「MitM」区域下的**域名**按钮，开启 `MitM over HTTP/2` 和 `QUIC　回退保护`
* 点击底部「配置」按钮 → 点击「其他」区域下的**高级配置**按钮，开启 `SNI　辅助规则切换`





