(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{15615:function(e,t,n){Promise.resolve().then(n.bind(n,69605))},69605:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var i=n(57437),l=n(12337),a=n(3090),r=n(49835),c=n(1839),s=n(78604),o=n(80711),d=n(74530),h=n(53082),u=n(96732),p=n(75562),m=n(34738),f=n(2265),x=n(24830);function g(e){let[t,n]=(0,f.useState)([]),[l,a]=(0,f.useState)(!0);if((0,f.useEffect)(()=>{var t=e.video.creationDate;t.setHours(0,0,0,0);var i=t.toISOString();t.setDate(t.getDate()+1);var l=t.toISOString();e.apiClient.clips.getClipsForBroadcasterPaginated(e.video.userId,{startDate:i,endDate:l}).getAll().then(e=>{n(e),a(!1)})},[e.video.userId,e.video.creationDate,e.video.userId,e.apiClient.clips]),l)return(0,i.jsx)("p",{children:"Loading..."});if(!t.length)return(0,i.jsx)("p",{children:"No clips"});t.filter(t=>-1===t.title.indexOf(e.video.title));let r=s.vM(t,e=>Math.floor((e.vodOffset||0)/60)+"");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Button,{leftSection:(0,i.jsx)(x.Z,{size:14}),variant:"default",onClick:e.unselectVideo,children:"Back"}),(0,i.jsx)(d.Space,{h:"md"}),(0,i.jsx)(h.Timeline,{bulletSize:24,lineWidth:2,align:"left",children:Object.keys(r).map(t=>(0,i.jsx)(h.Timeline.Item,{title:"Minute ".concat(t),c:"dimmed",bullet:r[t].length>1?r[t].length:" ",children:r[t].map((t,n)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.Card,{padding:"sm",component:"a",onClick:()=>{e.selectClip(t)},children:[(0,i.jsx)(p.Text,{fw:50,size:"m",c:"cyan",lineClamp:1,children:t.title}),(0,i.jsx)(m.Group,{justify:"space-between",children:(0,i.jsxs)(p.Text,{size:"xs",c:"orange",mt:4,children:[t.creatorDisplayName," - ",Math.floor(t.duration).toString(),"s"]})})]},n),(0,i.jsx)(d.Space,{h:"md"})]}))},t))})]})}function j(e){let[t,n]=(0,f.useState)([]),[l,a]=(0,f.useState)(!0);return((0,f.useEffect)(()=>{e.apiClient.videos.getVideosByUser(531019578,{}).then(e=>{n(e.data),a(!1)})},[e.apiClient.videos]),l)?(0,i.jsx)("p",{children:"Loading..."}):t.length?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(h.Timeline,{bulletSize:24,lineWidth:2,align:"left",children:t.map(t=>{var n;let l,a;return(0,i.jsx)(h.Timeline.Item,{title:(l=(n=t.creationDate).getDate(),a=n.getMonth()+1,l<10&&(l="0"+l),a<10&&(a="0"+a),l+"."+a+"."+n.getFullYear()),c:"dimmed",component:"a",onClick:()=>{e.selectVideo(t)},children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.Card,{padding:"sm",children:[(0,i.jsx)(p.Text,{fw:50,size:"m",c:"cyan",lineClamp:1,children:t.title}),(0,i.jsx)(p.Text,{fw:50,size:"s",c:"orange",lineClamp:1,children:t.userDisplayName})]},t.id),(0,i.jsx)(d.Space,{h:"md"})]})},t.id)})})}):(0,i.jsx)("p",{children:"No streams"})}function S(e){return(0,i.jsx)("video",{id:"player",style:{width:"100%"},controls:!0,autoPlay:!0,src:e.clip.thumbnailUrl.replaceAll("-preview-480x272.jpg",".mp4")})}var v=n(62490);function C(e){let[t,n]=(0,f.useState)();(0,f.useEffect)(()=>{n(encodeURI(window.location.origin+window.location.pathname.replace("index.html","")))},[]);let l=encodeURIComponent("clips:edit"),a=encodeURIComponent("token"),r="https://id.twitch.tv/oauth2/authorize?response_type=".concat(a,"&client_id=").concat(e.clientId,"&redirect_uri=").concat(t,"&scope=").concat(l,"&state=").concat("");return(0,i.jsx)(o.Button,{component:"a",href:r,rightSection:(0,i.jsx)(v.Z,{size:14}),children:"Login with Twitch"})}var w=n(43128),k=n(56752);function I(){let e="75agrccykaptlezbeekh44d7lw4tog",t=window.location.hash?window.location.hash.substring(1):"",n=t?function(e,t){for(var n=e.split("&"),i=0;i<n.length;i++){var l=n[i].split("=");if(decodeURIComponent(l[0])==t)return decodeURIComponent(l[1])}console.log("Query variable %s not found",t)}(t,"access_token"):"";(0,f.useEffect)(()=>{n&&localStorage.setItem("StreamRecap2000#authToken",n||"")},[n]);let[s,o]=(0,f.useState)(""),[d,h]=(0,f.useState)(null),[u,p]=(0,f.useState)(null);if((0,f.useEffect)(()=>{o(localStorage.getItem("StreamRecap2000#authToken")||"")},[]),!s)return(0,i.jsx)(C,{clientId:e});let m=new w.B(e,s),x=new k.S({authProvider:m});return x?(0,i.jsx)(l.MantineProvider,{defaultColorScheme:"dark",children:(0,i.jsxs)(a.AppShell,{header:{height:60},navbar:{width:300,breakpoint:"sm"},padding:"md",layout:"alt",children:[(0,i.jsx)(a.AppShell.Header,{p:"lg",children:(0,i.jsx)(r.Title,{order:2,children:d?d.title:""})}),(0,i.jsx)(a.AppShell.Navbar,{p:"md",children:(0,i.jsx)(c.ScrollArea,{children:d?(0,i.jsx)(g,{apiClient:x,unselectVideo:()=>{h(null),p(null)},selectClip:e=>{p(e)},video:d}):(0,i.jsx)(j,{apiClient:x,selectVideo:e=>{h(e)}})})}),(0,i.jsx)(a.AppShell.Main,{children:d&&u?(0,i.jsx)(S,{clip:u}):""})]})}):""}}},function(e){e.O(0,[20,621,971,69,744],function(){return e(e.s=15615)}),_N_E=e.O()}]);