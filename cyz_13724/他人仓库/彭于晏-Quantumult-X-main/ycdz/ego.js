/******************************

脚本功能：Ego Reader - RSS阅读器+解锁订阅
下载地址：https://is.gd/jK1kaa
软件版本：4.3.9
脚本作者：彭于晏💞
更新时间：2022-10-26
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.pxmage\.com\/egoreader\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ego.js

[mitm] 

hostname = api.pxmage.com

*******************************/


const _0x5c9c=['error','body','console','debug','stringify','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','info','exception','return\x20(function()\x20','subscription','trace','constructor','apply','expireAt','warn','table'];(function(_0x2a7b6e,_0x5c9cb2){const _0x589596=function(_0xea50eb){while(--_0xea50eb){_0x2a7b6e['push'](_0x2a7b6e['shift']());}};const _0x39b542=function(){const _0x315370={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x230d08,_0x1ee796,_0x28f14f,_0x4da653){_0x4da653=_0x4da653||{};let _0x4ba858=_0x1ee796+'='+_0x28f14f;let _0x194197=0x0;for(let _0x57571d=0x0,_0x2e9f70=_0x230d08['length'];_0x57571d<_0x2e9f70;_0x57571d++){const _0x403fcf=_0x230d08[_0x57571d];_0x4ba858+=';\x20'+_0x403fcf;const _0x4e51ad=_0x230d08[_0x403fcf];_0x230d08['push'](_0x4e51ad);_0x2e9f70=_0x230d08['length'];if(_0x4e51ad!==!![]){_0x4ba858+='='+_0x4e51ad;}}_0x4da653['cookie']=_0x4ba858;},'removeCookie':function(){return'dev';},'getCookie':function(_0x7dea56,_0x42f027){_0x7dea56=_0x7dea56||function(_0x410df6){return _0x410df6;};const _0x5ac960=_0x7dea56(new RegExp('(?:^|;\x20)'+_0x42f027['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3bbb72=function(_0x57ed25,_0xd3987d){_0x57ed25(++_0xd3987d);};_0x3bbb72(_0x589596,_0x5c9cb2);return _0x5ac960?decodeURIComponent(_0x5ac960[0x1]):undefined;}};const _0x35e8ad=function(){const _0x387d07=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x387d07['test'](_0x315370['removeCookie']['toString']());};_0x315370['updateCookie']=_0x35e8ad;let _0x44981d='';const _0x1b4324=_0x315370['updateCookie']();if(!_0x1b4324){_0x315370['setCookie'](['*'],'counter',0x1);}else if(_0x1b4324){_0x44981d=_0x315370['getCookie'](null,'counter');}else{_0x315370['removeCookie']();}};_0x39b542();}(_0x5c9c,0x116));const _0x5895=function(_0x2a7b6e,_0x5c9cb2){_0x2a7b6e=_0x2a7b6e-0x0;let _0x589596=_0x5c9c[_0x2a7b6e];return _0x589596;};const _0x230d08=function(){let _0x4de322=!![];return function(_0x4d51c8,_0x59d279){const _0x4355ac=_0x4de322?function(){if(_0x59d279){const _0x4a7a6e=_0x59d279[_0x5895('0x6')](_0x4d51c8,arguments);_0x59d279=null;return _0x4a7a6e;}}:function(){};_0x4de322=![];return _0x4355ac;};}();const _0x1b4324=_0x230d08(this,function(){const _0x13a00c=function(){const _0xd39a6=_0x13a00c[_0x5895('0x5')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](_0x5895('0xf'));return!_0xd39a6['test'](_0x1b4324);};return _0x13a00c();});_0x1b4324();const _0x315370=function(){let _0x32acd0=!![];return function(_0x4859c9,_0x1e8123){const _0x58e116=_0x32acd0?function(){if(_0x1e8123){const _0x3a44d3=_0x1e8123[_0x5895('0x6')](_0x4859c9,arguments);_0x1e8123=null;return _0x3a44d3;}}:function(){};_0x32acd0=![];return _0x58e116;};}();const _0xea50eb=_0x315370(this,function(){const _0x4942e2=function(){};const _0x51db32=function(){let _0x572657;try{_0x572657=Function(_0x5895('0x2')+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x48b96b){_0x572657=window;}return _0x572657;};const _0x5c88b4=_0x51db32();if(!_0x5c88b4[_0x5895('0xc')]){_0x5c88b4[_0x5895('0xc')]=function(_0x3f9e5a){const _0x30c172={};_0x30c172['log']=_0x3f9e5a;_0x30c172[_0x5895('0x8')]=_0x3f9e5a;_0x30c172[_0x5895('0xd')]=_0x3f9e5a;_0x30c172['info']=_0x3f9e5a;_0x30c172[_0x5895('0xa')]=_0x3f9e5a;_0x30c172[_0x5895('0x1')]=_0x3f9e5a;_0x30c172[_0x5895('0x9')]=_0x3f9e5a;_0x30c172['trace']=_0x3f9e5a;return _0x30c172;}(_0x4942e2);}else{_0x5c88b4[_0x5895('0xc')]['log']=_0x4942e2;_0x5c88b4['console'][_0x5895('0x8')]=_0x4942e2;_0x5c88b4['console'][_0x5895('0xd')]=_0x4942e2;_0x5c88b4[_0x5895('0xc')][_0x5895('0x0')]=_0x4942e2;_0x5c88b4['console'][_0x5895('0xa')]=_0x4942e2;_0x5c88b4[_0x5895('0xc')][_0x5895('0x1')]=_0x4942e2;_0x5c88b4[_0x5895('0xc')][_0x5895('0x9')]=_0x4942e2;_0x5c88b4[_0x5895('0xc')][_0x5895('0x4')]=_0x4942e2;}});_0xea50eb();let obj=JSON['parse']($response[_0x5895('0xb')]);var sub={'username':'@yuanxsxs','membershipType':_0x5895('0x3'),'expireAt':0x184ad138d4b,'serverTime':0x1840d6f4e10};obj['data']=sub;obj['data'][_0x5895('0x7')]=0x3b9cf9b21f3;$done({'body':JSON[_0x5895('0xe')](obj)});











































































// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
// Adding a dummy stoverride commit(24)
