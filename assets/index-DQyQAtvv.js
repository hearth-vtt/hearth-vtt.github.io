(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class Cd{constructor({hz:t=60,maxFrame:e=.25,maxSteps:n=5}={}){this.hz=t,this.dt=1/t,this.maxFrame=e,this.maxSteps=n,this.acc=0,this.last=0,this.seeded=!1,this.dropped=0}advance(t){if(!this.seeded)return this.seeded=!0,this.last=t,{steps:0,frameDt:0,alpha:0};const e=Math.min(this.maxFrame,(t-this.last)/1e3);this.last=t,this.acc+=e;let n=Math.floor(this.acc/this.dt);return n>this.maxSteps&&(this.dropped+=n-this.maxSteps,n=this.maxSteps,this.acc=n*this.dt),this.acc-=n*this.dt,{steps:n,frameDt:e,alpha:this.acc/this.dt}}reset(){this.acc=0,this.seeded=!1,this.dropped=0}}function Pd(i,t,e){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e}class jr{constructor(t=1){this.seed(t)}seed(t){let e=t>>>0;const n=()=>{e=e+2654435769>>>0;let s=e;return s=Math.imul(s^s>>>16,569420461),s=Math.imul(s^s>>>15,1935289751),(s^s>>>15)>>>0};return this.s0=n(),this.s1=n(),this.s2=n(),this.s3=n(),this.s0|this.s1|this.s2|this.s3||(this.s0=1),this.count=0,this}next(){const t=(s,r)=>(s<<r|s>>>32-r)>>>0,e=Math.imul(t(Math.imul(this.s1,5)>>>0,7),9)>>>0,n=this.s1<<9>>>0;return this.s2=(this.s2^this.s0)>>>0,this.s3=(this.s3^this.s1)>>>0,this.s1=(this.s1^this.s2)>>>0,this.s0=(this.s0^this.s3)>>>0,this.s2=(this.s2^n)>>>0,this.s3=t(this.s3,11),this.count++,e}float(){return this.next()/4294967296}range(t,e){return t+this.float()*(e-t)}int(t,e){return t+Math.floor(this.float()*(e-t+1))}chance(t){return this.float()<t}pick(t){return t[Math.floor(this.float()*t.length)]}weighted(t){let e=0;for(const[,s]of t)e+=s;if(e<=0)return null;let n=this.float()*e;for(const[s,r]of t)if(n-=r,n<=0)return s;return t[t.length-1][0]}getState(){return{s0:this.s0,s1:this.s1,s2:this.s2,s3:this.s3,count:this.count}}setState(t){return this.s0=t.s0,this.s1=t.s1,this.s2=t.s2,this.s3=t.s3,this.count=t.count??0,this}}function Bl(i,...t){let e=i>>>0;for(const n of t)e=Math.imul(e^n>>>0,625341585)>>>0,e=(e^e>>>13)>>>0;return e>>>0}class Ld{constructor(){this.local=[],this.remote=[]}on(t){return this.local.push(t),()=>this.off(this.local,t)}onRemote(t){return this.remote.push(t),()=>this.off(this.remote,t)}off(t,e){const n=t.indexOf(e);n>=0&&t.splice(n,1)}emit(t,e){for(const n of this.local)n(t,e);for(const n of this.remote)n(t,e)}emitLocal(t,e){for(const n of this.local)n(t,e)}emitRemote(t,e){for(const n of this.remote)n(t,e)}clear(){this.local.length=0,this.remote.length=0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="169",Id=0,zl=1,Dd=2,Uh=1,Ud=2,Rn=3,Zn=0,Ge=1,Cn=2,qn=0,Wi=1,Gl=2,Hl=3,Vl=4,kd=5,di=100,Nd=101,Fd=102,Od=103,Bd=104,zd=200,Gd=201,Hd=202,Vd=203,Ga=204,Ha=205,Wd=206,Xd=207,$d=208,qd=209,Yd=210,jd=211,Kd=212,Zd=213,Jd=214,Va=0,Wa=1,Xa=2,Ki=3,$a=4,qa=5,Ya=6,ja=7,kh=0,Qd=1,tf=2,Yn=0,ef=1,nf=2,sf=3,rf=4,af=5,of=6,lf=7,Nh=300,Zi=301,Ji=302,Ka=303,Za=304,Ir=306,Ja=1e3,mi=1001,Qa=1002,tn=1003,cf=1004,zs=1005,je=1006,Kr=1007,Ln=1008,kn=1009,Fh=1010,Oh=1011,Rs=1012,Jo=1013,gi=1014,In=1015,Ls=1016,Qo=1017,tl=1018,Qi=1020,Bh=35902,zh=1021,Gh=1022,hn=1023,Hh=1024,Vh=1025,Xi=1026,ts=1027,Wh=1028,el=1029,Xh=1030,nl=1031,il=1033,hr=33776,ur=33777,dr=33778,fr=33779,to=35840,eo=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,xo=37818,_o=37819,yo=37820,Mo=37821,pr=36492,So=36494,bo=36495,$h=36283,wo=36284,Eo=36285,To=36286,hf=3200,uf=3201,qh=0,df=1,$n="",Be="srgb",ti="srgb-linear",sl="display-p3",Dr="display-p3-linear",yr="linear",se="srgb",Mr="rec709",Sr="p3",bi=7680,Wl=519,ff=512,pf=513,mf=514,Yh=515,gf=516,vf=517,xf=518,_f=519,Xl=35044,$l="300 es",Dn=2e3,br=2001;class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,Ao=180/Math.PI;function Is(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function yf(i,t){return(i%t+t)%t}function Jr(i,t,e){return(1-e)*i+e*t}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,r,a,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],y=s[1],_=s[4],M=s[7],L=s[2],T=s[5],A=s[8];return r[0]=a*v+o*y+l*L,r[3]=a*p+o*_+l*T,r[6]=a*m+o*M+l*A,r[1]=c*v+h*y+d*L,r[4]=c*p+h*_+d*T,r[7]=c*m+h*M+d*A,r[2]=u*v+f*y+g*L,r[5]=u*p+f*_+g*T,r[8]=u*m+f*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Gt;function jh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mf(){const i=wr("canvas");return i.style.display="block",i}const ql={};function mr(i){i in ql||(ql[i]=!0,console.warn(i))}function Sf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yl=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jl=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[ti]:{transfer:yr,primaries:Mr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Be]:{transfer:se,primaries:Mr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Dr]:{transfer:yr,primaries:Sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(jl),fromReference:i=>i.applyMatrix3(Yl)},[sl]:{transfer:se,primaries:Sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(jl),fromReference:i=>i.applyMatrix3(Yl).convertLinearToSRGB()}},Ef=new Set([ti,Dr]),Zt={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ef.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ds[t].toReference,s=ds[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ds[i].primaries},getTransfer:function(i){return i===$n?yr:ds[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ds[t].luminanceCoefficients)}};function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class Tf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=wr("canvas")),wi.width=t.width,wi.height=t.height;const n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Af=0;class Kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ea(s[a].image)):r.push(ea(s[a]))}else r=ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rf=0;class Ae extends ss{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=mi,s=mi,r=je,a=Ln,o=hn,l=kn,c=Ae.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Is(),this.name="",this.source=new Kh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ja:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ja:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Nh;Ae.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(f+1)/2,L=(m+1)/2,T=(h+u)/4,A=(d+v)/4,C=(g+p)/4;return _>M&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=C/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Kh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Cf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zh extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let p=1-o;const m=l*u+c*f+h*g+d*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const L=Math.sqrt(_),T=Math.atan2(L,m*y);p=Math.sin(p*T)/L,o=Math.sin(o*T)/L}const M=o*y;if(l=l*p+u*M,c=c*p+f*M,h=h*p+g*M,d=d*p+v*M,p===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new k,Kl=new Mi;class Ds{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(t.matrixWorld),this.union(Gs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Hs.subVectors(this.max,fs),Ei.subVectors(t.a,fs),Ti.subVectors(t.b,fs),Ai.subVectors(t.c,fs),On.subVectors(Ti,Ei),Bn.subVectors(Ai,Ti),ni.subVectors(Ei,Ai);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ni.z,ni.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ni.z,0,-ni.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ni.y,ni.x,0];return!ia(e,Ei,Ti,Ai,Hs)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,Ei,Ti,Ai,Hs))?!1:(Vs.crossVectors(On,Bn),e=[Vs.x,Vs.y,Vs.z],ia(e,Ei,Ti,Ai,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new k,new k,new k,new k,new k,new k,new k,new k],rn=new k,Gs=new Ds,Ei=new k,Ti=new k,Ai=new k,On=new k,Bn=new k,ni=new k,fs=new k,Hs=new k,Vs=new k,ii=new k;function ia(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lf=new Ds,ps=new k,sa=new k;class rl{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(sa)),this.expandByPoint(ps.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new k,ra=new k,Ws=new k,zn=new k,aa=new k,Xs=new k,oa=new k;class If{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ra.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(ra);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ws),o=zn.dot(this.direction),l=-zn.dot(Ws),c=zn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ra).addScaledVector(Ws,u),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){aa.subVectors(e,t),Xs.subVectors(n,t),oa.crossVectors(aa,Xs);let a=this.direction.dot(oa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);const l=o*this.direction.dot(Xs.crossVectors(zn,Xs));if(l<0)return null;const c=o*this.direction.dot(aa.cross(zn));if(c<0||l+c>a)return null;const h=-o*zn.dot(oa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,Uf)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Gn.crossVectors(n,qe),Gn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Gn.crossVectors(n,qe)),Gn.normalize(),$s.crossVectors(qe,Gn),s[0]=Gn.x,s[4]=$s.x,s[8]=qe.x,s[1]=Gn.y,s[5]=$s.y,s[9]=qe.y,s[2]=Gn.z,s[6]=$s.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],_=n[7],M=n[11],L=n[15],T=s[0],A=s[4],C=s[8],F=s[12],x=s[1],E=s[5],B=s[9],H=s[13],q=s[2],nt=s[6],X=s[10],V=s[14],D=s[3],Z=s[7],et=s[11],tt=s[15];return r[0]=a*T+o*x+l*q+c*D,r[4]=a*A+o*E+l*nt+c*Z,r[8]=a*C+o*B+l*X+c*et,r[12]=a*F+o*H+l*V+c*tt,r[1]=h*T+d*x+u*q+f*D,r[5]=h*A+d*E+u*nt+f*Z,r[9]=h*C+d*B+u*X+f*et,r[13]=h*F+d*H+u*V+f*tt,r[2]=g*T+v*x+p*q+m*D,r[6]=g*A+v*E+p*nt+m*Z,r[10]=g*C+v*B+p*X+m*et,r[14]=g*F+v*H+p*V+m*tt,r[3]=y*T+_*x+M*q+L*D,r[7]=y*A+_*E+M*nt+L*Z,r[11]=y*C+_*B+M*X+L*et,r[15]=y*F+_*H+M*V+L*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+v*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+p*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=d*p*c-v*u*c+v*l*f-o*p*f-d*l*m+o*u*m,_=g*u*c-h*p*c-g*l*f+a*p*f+h*l*m-a*u*m,M=h*v*c-g*d*c+g*o*f-a*v*f-h*o*m+a*d*m,L=g*d*l-h*v*l-g*o*u+a*v*u+h*o*p-a*d*p,T=e*y+n*_+s*M+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(v*u*r-d*p*r-v*s*f+n*p*f+d*s*m-n*u*m)*A,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*m+n*l*m)*A,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*A,t[4]=_*A,t[5]=(h*p*r-g*u*r+g*s*f-e*p*f-h*s*m+e*u*m)*A,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*A,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*A,t[8]=M*A,t[9]=(g*d*r-h*v*r-g*n*f+e*v*f+h*n*m-e*d*m)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*A,t[12]=L*A,t[13]=(h*v*s-g*d*s+g*n*u-e*v*u-h*n*p+e*d*p)*A,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*p-e*o*p)*A,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,p=a*d,m=o*d,y=l*c,_=l*h,M=l*d,L=n.x,T=n.y,A=n.z;return s[0]=(1-(v+m))*L,s[1]=(f+M)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+m))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(p-y)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const c=1/r,h=1/a,d=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Dn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(o===Dn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===br)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h;let g,v;if(o===Dn)g=(a+r)*d,v=-2*d;else if(o===br)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new k,an=new he,Df=new k(0,0,0),Uf=new k(1,1,1),Gn=new k,$s=new k,qe=new k,Zl=new he,Jl=new Mi;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kf=0;const Ql=new k,Ci=new Mi,wn=new he,qs=new k,ms=new k,Nf=new k,Ff=new Mi,tc=new k(1,0,0),ec=new k(0,1,0),nc=new k(0,0,1),ic={type:"added"},Of={type:"removed"},Pi={type:"childadded",child:null},la={type:"childremoved",child:null};class Re extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new k,e=new vn,n=new Mi,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Gt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ms,qs,this.up):wn.lookAt(qs,ms,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(wn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new k(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new k,En=new k,ca=new k,Tn=new k,Li=new k,Ii=new k,sc=new k,ha=new k,ua=new k,da=new k,fa=new le,pa=new le,ma=new le;class cn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),En.subVectors(n,e),ca.subVectors(t,e);const a=on.dot(on),o=on.dot(En),l=on.dot(ca),c=En.dot(En),h=En.dot(ca),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,n),ma.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fa,r.x),a.addScaledVector(pa,r.y),a.addScaledVector(ma,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),En.subVectors(t,e),on.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Li.subVectors(s,n),Ii.subVectors(r,n),ha.subVectors(t,n);const l=Li.dot(ha),c=Ii.dot(ha);if(l<=0&&c<=0)return e.copy(n);ua.subVectors(t,s);const h=Li.dot(ua),d=Ii.dot(ua);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Li,a);da.subVectors(t,r);const f=Li.dot(da),g=Ii.dot(da);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ii,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return sc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(sc,o);const m=1/(p+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(Li,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=yf(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ga(a,r,t+1/3),this.g=ga(a,r,t),this.b=ga(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=ta(t.r),this.g=ta(t.g),this.b=ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Zt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(ze(Pe.r*255,0,255))*65536+Math.round(ze(Pe.g*255,0,255))*256+Math.round(ze(Pe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Be){Zt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Ys);const n=Jr(Hn.h,Ys.h,e),s=Jr(Hn.s,Ys.s,e),r=Jr(Hn.l,Ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Vt;Vt.NAMES=Qh;let Bf=0;class Us extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Wi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Ha,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xi extends Us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new k,js=new Bt;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class tu extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class He extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zf=0;const Ze=new he,va=new Re,Di=new k,Ye=new Ds,gs=new Ds,Me=new k;class yn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jh(t)?eu:tu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ye.min,gs.min),Ye.expandByPoint(Me),Me.addVectors(Ye.max,gs.max),Ye.expandByPoint(Me)):(Ye.expandByPoint(gs.min),Ye.expandByPoint(gs.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(t,c),Me.add(Di)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new k,l[C]=new k;const c=new k,h=new k,d=new k,u=new Bt,f=new Bt,g=new Bt,v=new k,p=new k;function m(C,F,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(E),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),o[C].add(v),o[F].add(v),o[x].add(v),l[C].add(p),l[F].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,F=y.length;C<F;++C){const x=y[C],E=x.start,B=x.count;for(let H=E,q=E+B;H<q;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const _=new k,M=new k,L=new k,T=new k;function A(C){L.fromBufferAttribute(s,C),T.copy(L);const F=o[C];_.copy(F),_.sub(L.multiplyScalar(L.dot(F))).normalize(),M.crossVectors(T,F);const E=M.dot(l[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,E)}for(let C=0,F=y.length;C<F;++C){const x=y[C],E=x.start,B=x.count;for(let H=E,q=E+B;H<q;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new gn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new he,si=new If,Ks=new rl,ac=new k,Zs=new k,Js=new k,Qs=new k,xa=new k,tr=new k,oc=new k,er=new k;class be extends Re{constructor(t=new yn,e=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(xa.fromBufferAttribute(d,t),a?tr.addScaledVector(xa,h):tr.addScaledVector(xa.sub(e),h))}e.add(tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Ks.containsPoint(si.origin)===!1&&(si.intersectSphere(Ks,ac)===null||si.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),si.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,L=_;M<L;M+=3){const T=o.getX(M),A=o.getX(M+1),C=o.getX(M+2);s=nr(this,m,t,n,c,h,d,T,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=o.getX(p),_=o.getX(p+1),M=o.getX(p+2);s=nr(this,a,t,n,c,h,d,y,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,L=_;M<L;M+=3){const T=M,A=M+1,C=M+2;s=nr(this,m,t,n,c,h,d,T,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,M=p+2;s=nr(this,a,t,n,c,h,d,y,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Gf(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Zn,o),l===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(er);return c<e.near||c>e.far?null:{distance:c,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Zs),i.getVertexPosition(l,Js),i.getVertexPosition(c,Qs);const h=Gf(i,t,e,n,Zs,Js,Qs,oc);if(h){const d=new k;cn.getBarycoord(oc,Zs,Js,Qs,d),s&&(h.uv=cn.getInterpolatedAttribute(s,o,l,c,d,new Bt)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,d,new Bt)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new k,materialIndex:0};cn.getNormal(Zs,Js,Qs,u.normal),h.face=u,h.barycoord=d}return h}class rs extends yn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2));function g(v,p,m,y,_,M,L,T,A,C,F){const x=M/A,E=L/C,B=M/2,H=L/2,q=T/2,nt=A+1,X=C+1;let V=0,D=0;const Z=new k;for(let et=0;et<X;et++){const tt=et*E-H;for(let mt=0;mt<nt;mt++){const Mt=mt*x-B;Z[v]=Mt*y,Z[p]=tt*_,Z[m]=q,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[p]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(mt/A),d.push(1-et/C),V+=1}}for(let et=0;et<C;et++)for(let tt=0;tt<A;tt++){const mt=u+tt+nt*et,Mt=u+tt+nt*(et+1),W=u+(tt+1)+nt*(et+1),J=u+(tt+1)+nt*et;l.push(mt,Mt,J),l.push(Mt,W,J),D+=6}o.addGroup(f,D,F),f+=D,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=es(i[e]);for(const s in n)t[s]=n[s]}return t}function Hf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Vf={clone:es,merge:Ie};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class iu extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new k,lc=new Bt,cc=new Bt;class Qe extends iu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,lc,cc),e.subVectors(cc,lc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,ki=1;class $f extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Ui,ki,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Ui,ki,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Ui,ki,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Ui,ki,t,e);o.layers=this.layers,this.add(o);const l=new Qe(Ui,ki,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Ui,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class su extends Ae{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qf extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new su(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:qn});r.uniforms.tEquirect.value=e;const a=new be(s,r),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=je),new $f(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const _a=new k,Yf=new k,jf=new Gt;class hi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_a.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jf.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new rl,ir=new k;class al{constructor(t=new hi,e=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],y=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,u-c,p-f,M-m).normalize(),n[1].setComponents(l+r,u+c,p+f,M+m).normalize(),n[2].setComponents(l+a,u+h,p+g,M+y).normalize(),n[3].setComponents(l-a,u-h,p-g,M-y).normalize(),n[4].setComponents(l-o,u-d,p-v,M-_).normalize(),e===Dn)n[5].setComponents(l+o,u+d,p+v,M+_).normalize();else if(e===br)n[5].setComponents(o,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class xn extends yn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*u-a;for(let _=0;_<c;_++){const M=_*d-r;g.push(M,-y,0),v.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const _=y+c*m,M=y+c*(m+1),L=y+1+c*(m+1),T=y+1+c*m;f.push(_,M,T),f.push(M,L,T)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,am=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:ap,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:vp,color_pars_vertex:xp,color_vertex:_p,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:bp,displacementmap_vertex:wp,emissivemap_fragment:Ep,emissivemap_pars_fragment:Tp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Vp,envmap_vertex:Dp,fog_vertex:Up,fog_pars_vertex:kp,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Hp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:$p,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:jp,lights_fragment_begin:Kp,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:am,metalnessmap_fragment:om,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:vm,normal_vertex:xm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:bm,opaque_fragment:wm,packing:Em,premultiplied_alpha_fragment:Tm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Um,shadowmask_pars_fragment:km,skinbase_vertex:Nm,skinning_pars_vertex:Fm,skinning_vertex:Om,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:Gm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:$m,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:jm,background_vert:Km,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:vg,meshphong_vert:xg,meshphong_frag:_g,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:bg,points_vert:wg,points_frag:Eg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},ut={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},fn={basic:{uniforms:Ie([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ie([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ie([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ie([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ie([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ie([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ie([ut.points,ut.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ie([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ie([ut.common,ut.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ie([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ie([ut.sprite,ut.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ie([ut.common,ut.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ie([ut.lights,ut.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};fn.physical={uniforms:Ie([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const sr={r:0,b:0,g:0},ai=new vn,Pg=new he;function Lg(i,t,e,n,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const M=g(y);M===null?m(o,l):M&&M.isColor&&(m(M,1),_=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Ir)?(h===void 0&&(h=new be(new rs(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:es(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(_.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(ai)),h.material.toneMapped=Zt.getTransfer(M.colorSpace)!==se,(d!==M||u!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new be(new xn(2,2),new un({name:"BackgroundMaterial",uniforms:es(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==se,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(sr,nu(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:p}}function Ig(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(x,E,B,H,q){let nt=!1;const X=d(H,B,E);r!==X&&(r=X,c(r.object)),nt=f(x,H,B,q),nt&&g(x,H,B,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,M(x,E,B,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,E,B){const H=B.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let nt=q[E.id];nt===void 0&&(nt={},q[E.id]=nt);let X=nt[H];return X===void 0&&(X=u(l()),nt[H]=X),X}function u(x){const E=[],B=[],H=[];for(let q=0;q<e;q++)E[q]=0,B[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:B,attributeDivisors:H,object:x,attributes:{},index:null}}function f(x,E,B,H){const q=r.attributes,nt=E.attributes;let X=0;const V=B.getAttributes();for(const D in V)if(V[D].location>=0){const et=q[D];let tt=nt[D];if(tt===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),et===void 0||et.attribute!==tt||tt&&et.data!==tt.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function g(x,E,B,H){const q={},nt=E.attributes;let X=0;const V=B.getAttributes();for(const D in V)if(V[D].location>=0){let et=nt[D];et===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(et=x.instanceColor));const tt={};tt.attribute=et,et&&et.data&&(tt.data=et.data),q[D]=tt,X++}r.attributes=q,r.attributesNum=X,r.index=H}function v(){const x=r.newAttributes;for(let E=0,B=x.length;E<B;E++)x[E]=0}function p(x){m(x,0)}function m(x,E){const B=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;B[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),q[x]!==E&&(i.vertexAttribDivisor(x,E),q[x]=E)}function y(){const x=r.newAttributes,E=r.enabledAttributes;for(let B=0,H=E.length;B<H;B++)E[B]!==x[B]&&(i.disableVertexAttribArray(B),E[B]=0)}function _(x,E,B,H,q,nt,X){X===!0?i.vertexAttribIPointer(x,E,B,q,nt):i.vertexAttribPointer(x,E,B,H,q,nt)}function M(x,E,B,H){v();const q=H.attributes,nt=B.getAttributes(),X=E.defaultAttributeValues;for(const V in nt){const D=nt[V];if(D.location>=0){let Z=q[V];if(Z===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const et=Z.normalized,tt=Z.itemSize,mt=t.get(Z);if(mt===void 0)continue;const Mt=mt.buffer,W=mt.type,J=mt.bytesPerElement,ct=W===i.INT||W===i.UNSIGNED_INT||Z.gpuType===Jo;if(Z.isInterleavedBufferAttribute){const at=Z.data,ot=at.stride,lt=Z.offset;if(at.isInstancedInterleavedBuffer){for(let bt=0;bt<D.locationSize;bt++)m(D.location+bt,at.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let bt=0;bt<D.locationSize;bt++)p(D.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let bt=0;bt<D.locationSize;bt++)_(D.location+bt,tt/D.locationSize,W,et,ot*J,(lt+tt/D.locationSize*bt)*J,ct)}else{if(Z.isInstancedBufferAttribute){for(let at=0;at<D.locationSize;at++)m(D.location+at,Z.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let at=0;at<D.locationSize;at++)p(D.location+at);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let at=0;at<D.locationSize;at++)_(D.location+at,tt/D.locationSize,W,et,tt*J,tt/D.locationSize*at*J,ct)}}else if(X!==void 0){const et=X[V];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(D.location,et);break;case 3:i.vertexAttrib3fv(D.location,et);break;case 4:i.vertexAttrib4fv(D.location,et);break;default:i.vertexAttrib1fv(D.location,et)}}}}y()}function L(){C();for(const x in n){const E=n[x];for(const B in E){const H=E[B];for(const q in H)h(H[q].object),delete H[q];delete E[B]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const E=n[x.id];for(const B in E){const H=E[B];for(const q in H)h(H[q].object),delete H[q];delete E[B]}delete n[x.id]}function A(x){for(const E in n){const B=n[E];if(B[x.id]===void 0)continue;const H=B[x.id];for(const q in H)h(H[q].object),delete H[q];delete B[x.id]}}function C(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Dg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<u.length;v++)e.update(g,n,u[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ug(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:L,maxSamples:T}}function kg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hi,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,_=y*4;let M=m.clippingState||null;l.value=M,M=h(g,u,_,f);for(let L=0;L!==_;++L)M[L]=e[L];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=f;_!==v;++_,M+=4)a.copy(d[_]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Ng(i){let t=new WeakMap;function e(a,o){return o===Ka?a.mapping=Zi:o===Za&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ka||o===Za)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ol extends iu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,hc=[.125,.215,.35,.446,.526,.582],fi=20,ya=new ol,uc=new Vt;let Ma=null,Sa=0,ba=0,wa=!1;const ui=(1+Math.sqrt(5))/2,Ni=1/ui,dc=[new k(-ui,Ni,0),new k(ui,Ni,0),new k(-Ni,0,ui),new k(Ni,0,ui),new k(0,ui,-Ni),new k(0,ui,Ni),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,Sa,ba),this._renderer.xr.enabled=wa,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Ls,format:hn,colorSpace:ti,depthBuffer:!1},s=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Og(r,t,e)}return s}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,s){const o=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(uc),h.toneMapping=Yn,h.autoClear=!1;const f=new xi({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new be(new rs,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(uc),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const _=this._cubeSize;rr(s,y*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zi||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dc[(s-r-1)%dc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new be(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):fi;p>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const m=[];let y=0;for(let A=0;A<fi;++A){const C=A/v,F=Math.exp(-C*C/2);m.push(F),A===0?y+=F:A<p&&(y+=2*F)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const M=this._sizeLods[s],L=3*M*(s>_-Gi?s-_+Gi:0),T=4*(this._cubeSize-M);rr(e,L,T,3*M,2*M),l.setRenderTarget(e),l.render(d,ya)}}function Fg(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+hc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Gi?l=hc[a-i+Gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),_=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,C=T>2?0:-1,F=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(F,v*g*T),_.set(u,p*g*T);const x=[T,T,T,T,T,T];M.set(x,m*g*T)}const L=new yn;L.setAttribute("position",new gn(y,v)),L.setAttribute("uv",new gn(_,p)),L.setAttribute("faceIndex",new gn(M,m)),t.push(L),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(i,t,e){const n=new vi(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Og(i,t,e){const n=new Float32Array(fi),s=new k(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function mc(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function gc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ka||l===Za,h=l===Zi||l===Ji;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new fc(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new fc(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function zg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gg(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,M=y.length;_<M;_+=3){const L=y[_+0],T=y[_+1],A=y[_+2];u.push(L,T,T,A,A,L)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,M=y.length/3-1;_<M;_+=3){const L=_+0,T=_+1,A=_+2;u.push(L,T,T,A,A,L)}}else return;const p=new(jh(u)?eu:tu)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Hg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(u,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<v.length;y++)e.update(m,n,v[y])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Vg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){const n=new WeakMap,s=new le;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let F=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let M=o.attributes.position.count*_,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const T=new Float32Array(M*L*4*d),A=new Zh(T,M,L,d);A.type=In,A.needsUpdate=!0;const C=_*4;for(let x=0;x<d;x++){const E=p[x],B=m[x],H=y[x],q=M*L*4*x;for(let nt=0;nt<E.count;nt++){const X=nt*C;f===!0&&(s.fromBufferAttribute(E,nt),T[q+X+0]=s.x,T[q+X+1]=s.y,T[q+X+2]=s.z,T[q+X+3]=0),g===!0&&(s.fromBufferAttribute(B,nt),T[q+X+4]=s.x,T[q+X+5]=s.y,T[q+X+6]=s.z,T[q+X+7]=0),v===!0&&(s.fromBufferAttribute(H,nt),T[q+X+8]=s.x,T[q+X+9]=s.y,T[q+X+10]=s.z,T[q+X+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Bt(M,L)},n.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Xg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class au extends Ae{constructor(t,e,n,s,r,a,o,l,c,h=Xi){if(h!==Xi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=gi),n===void 0&&h===ts&&(n=Qi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ou=new Ae,vc=new au(1,1),lu=new Zh,cu=new Pf,hu=new su,xc=[],_c=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function as(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=xc[s];if(r===void 0&&(r=new Float32Array(s),xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Sc.set(n),i.uniformMatrix2fv(this.addr,!1,Sc),ye(e,n)}}function Zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),ye(e,n)}}function Jg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),ye(e,n)}}function Qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function i0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function o0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vc.compareFunction=Yh,r=vc):r=ou,e.setTexture2D(t||r,s)}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function c0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hu,s)}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function u0(i){switch(i){case 5126:return $g;case 35664:return qg;case 35665:return Yg;case 35666:return jg;case 35674:return Kg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(i,t){i.uniform1fv(this.addr,t)}function f0(i,t){const e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function p0(i,t){const e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function m0(i,t){const e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function g0(i,t){const e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v0(i,t){const e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x0(i,t){const e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _0(i,t){i.uniform1iv(this.addr,t)}function y0(i,t){i.uniform2iv(this.addr,t)}function M0(i,t){i.uniform3iv(this.addr,t)}function S0(i,t){i.uniform4iv(this.addr,t)}function b0(i,t){i.uniform1uiv(this.addr,t)}function w0(i,t){i.uniform2uiv(this.addr,t)}function E0(i,t){i.uniform3uiv(this.addr,t)}function T0(i,t){i.uniform4uiv(this.addr,t)}function A0(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ou,r[a])}function R0(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cu,r[a])}function C0(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hu,r[a])}function P0(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lu,r[a])}function L0(i){switch(i){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return _0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return w0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class I0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u0(e.type)}}class D0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L0(e.type)}}class U0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function bc(i,t){i.seq.push(t),i.map[t.id]=t}function k0(i,t,e){const n=i.name,s=n.length;for(Ea.lastIndex=0;;){const r=Ea.exec(n),a=Ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bc(e,c===void 0?new I0(o,i,t):new D0(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new U0(o),bc(e,d)),e=d}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);k0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const N0=37297;let F0=0;function O0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function B0(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===Sr&&e===Mr?n="LinearDisplayP3ToLinearSRGB":t===Mr&&e===Sr&&(n="LinearSRGBToLinearDisplayP3"),i){case ti:case Dr:return[n,"LinearTransferOETF"];case Be:case sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ec(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+O0(i.getShaderSource(t),a)}else return s}function z0(i,t){const e=B0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function G0(i,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case sf:e="Cineon";break;case rf:e="ACESFilmic";break;case of:e="AgX";break;case lf:e="Neutral";break;case af:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new k;function H0(){Zt.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function W0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ms(i){return i!==""}function Tc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(i){return i.replace($0,Y0)}const q0=new Map;function Y0(i,t){let e=zt[t];if(e===void 0){const n=q0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ro(e)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(j0,K0)}function K0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Z0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function J0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ji:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Q0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function tv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kh:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function ev(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function nv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Z0(e),c=J0(e),h=Q0(e),d=tv(e),u=ev(e),f=V0(e),g=W0(r),v=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`)):(p=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),m=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?G0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),H0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Ro(a),a=Tc(a,e),a=Ac(a,e),o=Ro(o),o=Tc(o,e),o=Ac(o,e),a=Rc(a),o=Rc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+p+a,M=y+m+o,L=wc(s,s.VERTEX_SHADER,_),T=wc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,L),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(E){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(L).trim(),q=s.getShaderInfoLog(T).trim();let nt=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,T);else{const V=Ec(s,L,"vertex"),D=Ec(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+B+`
`+V+`
`+D)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||q==="")&&(X=!1);X&&(E.diagnostics={runnable:nt,programLog:B,vertexShader:{log:H,prefix:p},fragmentShader:{log:q,prefix:m}})}s.deleteShader(L),s.deleteShader(T),C=new gr(s,v),F=X0(s,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let F;this.getAttributes=function(){return F===void 0&&A(this),F};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,N0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=T,this}let iv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rv(t),e.set(t,n)),n}}class rv{constructor(t){this.id=iv++,this.code=t,this.usedTimes=0}}function av(i,t,e,n,s,r,a){const o=new Jh,l=new sv,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,B,H,q){const nt=H.fog,X=q.geometry,V=x.isMeshStandardMaterial?H.environment:null,D=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),Z=D&&D.mapping===Ir?D.image.height:null,et=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=tt!==void 0?tt.length:0;let Mt=0;X.morphAttributes.position!==void 0&&(Mt=1),X.morphAttributes.normal!==void 0&&(Mt=2),X.morphAttributes.color!==void 0&&(Mt=3);let W,J,ct,at;if(et){const Fe=fn[et];W=Fe.vertexShader,J=Fe.fragmentShader}else W=x.vertexShader,J=x.fragmentShader,l.update(x),ct=l.getVertexShaderID(x),at=l.getFragmentShaderID(x);const ot=i.getRenderTarget(),lt=q.isInstancedMesh===!0,bt=q.isBatchedMesh===!0,Ct=!!x.map,kt=!!x.matcap,P=!!D,ae=!!x.aoMap,Ft=!!x.lightMap,Ht=!!x.bumpMap,Rt=!!x.normalMap,ne=!!x.displacementMap,Nt=!!x.emissiveMap,R=!!x.metalnessMap,S=!!x.roughnessMap,O=x.anisotropy>0,K=x.clearcoat>0,it=x.dispersion>0,j=x.iridescence>0,Et=x.sheen>0,dt=x.transmission>0,xt=O&&!!x.anisotropyMap,$t=K&&!!x.clearcoatMap,st=K&&!!x.clearcoatNormalMap,_t=K&&!!x.clearcoatRoughnessMap,It=j&&!!x.iridescenceMap,Dt=j&&!!x.iridescenceThicknessMap,yt=Et&&!!x.sheenColorMap,Wt=Et&&!!x.sheenRoughnessMap,Ot=!!x.specularMap,ee=!!x.specularColorMap,I=!!x.specularIntensityMap,gt=dt&&!!x.transmissionMap,Y=dt&&!!x.thicknessMap,Q=!!x.gradientMap,ft=!!x.alphaMap,vt=x.alphaTest>0,Xt=!!x.alphaHash,pe=!!x.extensions;let Ne=Yn;x.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const Yt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:J,defines:x.defines,customVertexShaderID:ct,customFragmentShaderID:at,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:bt,batchingColor:bt&&q._colorsTexture!==null,instancing:lt,instancingColor:lt&&q.instanceColor!==null,instancingMorph:lt&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ti,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:kt,envMap:P,envMapMode:P&&D.mapping,envMapCubeUVHeight:Z,aoMap:ae,lightMap:Ft,bumpMap:Ht,normalMap:Rt,displacementMap:f&&ne,emissiveMap:Nt,normalMapObjectSpace:Rt&&x.normalMapType===df,normalMapTangentSpace:Rt&&x.normalMapType===qh,metalnessMap:R,roughnessMap:S,anisotropy:O,anisotropyMap:xt,clearcoat:K,clearcoatMap:$t,clearcoatNormalMap:st,clearcoatRoughnessMap:_t,dispersion:it,iridescence:j,iridescenceMap:It,iridescenceThicknessMap:Dt,sheen:Et,sheenColorMap:yt,sheenRoughnessMap:Wt,specularMap:Ot,specularColorMap:ee,specularIntensityMap:I,transmission:dt,transmissionMap:gt,thicknessMap:Y,gradientMap:Q,opaque:x.transparent===!1&&x.blending===Wi&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:vt,alphaHash:Xt,combine:x.combine,mapUv:Ct&&p(x.map.channel),aoMapUv:ae&&p(x.aoMap.channel),lightMapUv:Ft&&p(x.lightMap.channel),bumpMapUv:Ht&&p(x.bumpMap.channel),normalMapUv:Rt&&p(x.normalMap.channel),displacementMapUv:ne&&p(x.displacementMap.channel),emissiveMapUv:Nt&&p(x.emissiveMap.channel),metalnessMapUv:R&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:xt&&p(x.anisotropyMap.channel),clearcoatMapUv:$t&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ot&&p(x.specularMap.channel),specularColorMapUv:ee&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:gt&&p(x.transmissionMap.channel),thicknessMapUv:Y&&p(x.thicknessMap.channel),alphaMapUv:ft&&p(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Rt||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(Ct||ft),fog:!!nt,useFog:x.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Mt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Cn,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function y(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)E.push(B),E.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(_(E,x),M(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),x.push(o.mask)}function L(x){const E=v[x.type];let B;if(E){const H=fn[E];B=Vf.clone(H.uniforms)}else B=x.uniforms;return B}function T(x,E){let B;for(let H=0,q=h.length;H<q;H++){const nt=h[H];if(nt.cacheKey===E){B=nt,++B.usedTimes;break}}return B===void 0&&(B=new nv(i,E,x,r),h.push(B)),B}function A(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function C(x){l.remove(x)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:L,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:F}}function ov(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function lv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,g,v,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),t++,m}function o(d,u,f,g,v,p){const m=a(d,u,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(d,u,f,g,v,p){const m=a(d,u,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||lv),n.length>1&&n.sort(u||Pc),s.length>1&&s.sort(u||Pc)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function cv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Lc,i.set(n,[a])):s>=r.length?(a=new Lc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function hv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Vt};break;case"SpotLight":e={position:new k,direction:new k,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function uv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dv=0;function fv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pv(i){const t=new hv,e=uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new he,a=new he;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,_=0,M=0,L=0,T=0,A=0;c.sort(fv);for(let F=0,x=c.length;F<x;F++){const E=c[F],B=E.color,H=E.intensity,q=E.distance,nt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=B.r*H,d+=B.g*H,u+=B.b*H;else if(E.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(E.sh.coefficients[X],H);A++}else if(E.isDirectionalLight){const X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const V=E.shadow,D=e.get(E);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.directionalShadow[f]=D,n.directionalShadowMap[f]=nt,n.directionalShadowMatrix[f]=E.shadow.matrix,y++}n.directional[f]=X,f++}else if(E.isSpotLight){const X=t.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=q,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,n.spot[v]=X;const V=E.shadow;if(E.map&&(n.spotLightMap[L]=E.map,L++,V.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[v]=V.matrix,E.castShadow){const D=e.get(E);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.spotShadow[v]=D,n.spotShadowMap[v]=nt,M++}v++}else if(E.isRectAreaLight){const X=t.get(E);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=X,p++}else if(E.isPointLight){const X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){const V=E.shadow,D=e.get(E);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,D.shadowCameraNear=V.camera.near,D.shadowCameraFar=V.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=E.shadow.matrix,_++}n.point[g]=X,g++}else if(E.isHemisphereLight){const X=t.get(E);X.skyColor.copy(E.color).multiplyScalar(H),X.groundColor.copy(E.groundColor).multiplyScalar(H),n.hemi[m]=X,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==_||C.numSpotShadows!==M||C.numSpotMaps!==L||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=_,C.numSpotShadows=M,C.numSpotMaps=L,C.numLightProbes=A,n.version=dv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const _=c[m];if(_.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(_.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Ic(i){const t=new pv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function mv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ic(i),t.set(s,[o])):r>=a.length?(o=new Ic(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class gv extends Us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vv extends Us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yv(i,t,e){let n=new al;const s=new Bt,r=new Bt,a=new le,o=new gv({depthPacking:uf}),l=new vv,c={},h=e.maxTextureSize,d={[Zn]:Ge,[Ge]:Zn,[Cn]:Cn},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:xv,fragmentShader:_v}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new be(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let m=this.type;this.render=function(T,A,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const F=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),B=i.state;B.setBlending(qn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=m!==Rn&&this.type===Rn,q=m===Rn&&this.type!==Rn;for(let nt=0,X=T.length;nt<X;nt++){const V=T[nt],D=V.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const Z=D.getFrameExtents();if(s.multiply(Z),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,D.mapSize.y=r.y)),D.map===null||H===!0||q===!0){const tt=this.type!==Rn?{minFilter:tn,magFilter:tn}:{};D.map!==null&&D.map.dispose(),D.map=new vi(s.x,s.y,tt),D.map.texture.name=V.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const et=D.getViewportCount();for(let tt=0;tt<et;tt++){const mt=D.getViewport(tt);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),B.viewport(a),D.updateMatrices(V,tt),n=D.getFrustum(),M(A,C,D.camera,V,this.type)}D.isPointLightShadow!==!0&&this.type===Rn&&y(D,C),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(F,x,E)};function y(T,A){const C=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,f,v,null)}function _(T,A,C,F){let x=null;const E=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)x=E;else if(x=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=x.uuid,H=A.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let nt=q[H];nt===void 0&&(nt=x.clone(),q[H]=nt,A.addEventListener("dispose",L)),x=nt}if(x.visible=A.visible,x.wireframe=A.wireframe,F===Rn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=C}return x}function M(T,A,C,F,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Rn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const H=t.update(T),q=T.material;if(Array.isArray(q)){const nt=H.groups;for(let X=0,V=nt.length;X<V;X++){const D=nt[X],Z=q[D.materialIndex];if(Z&&Z.visible){const et=_(T,Z,F,x);T.onBeforeShadow(i,T,A,C,H,et,D),i.renderBufferDirect(C,null,H,et,T,D),T.onAfterShadow(i,T,A,C,H,et,D)}}}else if(q.visible){const nt=_(T,q,F,x);T.onBeforeShadow(i,T,A,C,H,nt,null),i.renderBufferDirect(C,null,H,nt,T,null),T.onAfterShadow(i,T,A,C,H,nt,null)}}const B=T.children;for(let H=0,q=B.length;H<q;H++)M(B[H],A,C,F,x)}function L(T){T.target.removeEventListener("dispose",L);for(const C in c){const F=c[C],x=T.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}const Mv={[Va]:Wa,[Xa]:Ya,[$a]:ja,[Ki]:qa,[Wa]:Va,[Ya]:Xa,[ja]:$a,[qa]:Ki};function Sv(i){function t(){let I=!1;const gt=new le;let Y=null;const Q=new le(0,0,0,0);return{setMask:function(ft){Y!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){I=ft},setClear:function(ft,vt,Xt,pe,Ne){Ne===!0&&(ft*=pe,vt*=pe,Xt*=pe),gt.set(ft,vt,Xt,pe),Q.equals(gt)===!1&&(i.clearColor(ft,vt,Xt,pe),Q.copy(gt))},reset:function(){I=!1,Y=null,Q.set(-1,0,0,0)}}}function e(){let I=!1,gt=!1,Y=null,Q=null,ft=null;return{setReversed:function(vt){gt=vt},setTest:function(vt){vt?ct(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(vt){Y!==vt&&!I&&(i.depthMask(vt),Y=vt)},setFunc:function(vt){if(gt&&(vt=Mv[vt]),Q!==vt){switch(vt){case Va:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=vt}},setLocked:function(vt){I=vt},setClear:function(vt){ft!==vt&&(i.clearDepth(vt),ft=vt)},reset:function(){I=!1,Y=null,Q=null,ft=null}}}function n(){let I=!1,gt=null,Y=null,Q=null,ft=null,vt=null,Xt=null,pe=null,Ne=null;return{setTest:function(Yt){I||(Yt?ct(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Yt){gt!==Yt&&!I&&(i.stencilMask(Yt),gt=Yt)},setFunc:function(Yt,Fe,Mn){(Y!==Yt||Q!==Fe||ft!==Mn)&&(i.stencilFunc(Yt,Fe,Mn),Y=Yt,Q=Fe,ft=Mn)},setOp:function(Yt,Fe,Mn){(vt!==Yt||Xt!==Fe||pe!==Mn)&&(i.stencilOp(Yt,Fe,Mn),vt=Yt,Xt=Fe,pe=Mn)},setLocked:function(Yt){I=Yt},setClear:function(Yt){Ne!==Yt&&(i.clearStencil(Yt),Ne=Yt)},reset:function(){I=!1,gt=null,Y=null,Q=null,ft=null,vt=null,Xt=null,pe=null,Ne=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,y=null,_=null,M=null,L=null,T=new Vt(0,0,0),A=0,C=!1,F=null,x=null,E=null,B=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),nt=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),nt=X>=2);let D=null,Z={};const et=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),mt=new le().fromArray(et),Mt=new le().fromArray(tt);function W(I,gt,Y,Q){const ft=new Uint8Array(4),vt=i.createTexture();i.bindTexture(I,vt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<Y;Xt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(gt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return vt}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),r.setFunc(Ki),Ft(!1),Ht(zl),ct(i.CULL_FACE),P(qn);function ct(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function at(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function ot(I,gt){return h[I]!==gt?(i.bindFramebuffer(I,gt),h[I]=gt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function lt(I,gt){let Y=u,Q=!1;if(I){Y=d.get(gt),Y===void 0&&(Y=[],d.set(gt,Y));const ft=I.textures;if(Y.length!==ft.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Xt=ft.length;vt<Xt;vt++)Y[vt]=i.COLOR_ATTACHMENT0+vt;Y.length=ft.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function bt(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const Ct={[di]:i.FUNC_ADD,[Nd]:i.FUNC_SUBTRACT,[Fd]:i.FUNC_REVERSE_SUBTRACT};Ct[Od]=i.MIN,Ct[Bd]=i.MAX;const kt={[zd]:i.ZERO,[Gd]:i.ONE,[Hd]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Wd]:i.DST_ALPHA,[Vd]:i.ONE_MINUS_SRC_COLOR,[Ha]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[jd]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[Jd]:i.ONE_MINUS_CONSTANT_ALPHA};function P(I,gt,Y,Q,ft,vt,Xt,pe,Ne,Yt){if(I===qn){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(ct(i.BLEND),g=!0),I!==kd){if(I!==v||Yt!==C){if((p!==di||_!==di)&&(i.blendEquation(i.FUNC_ADD),p=di,_=di),Yt)switch(I){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gl:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,y=null,M=null,L=null,T.set(0,0,0),A=0,v=I,C=Yt}return}ft=ft||gt,vt=vt||Y,Xt=Xt||Q,(gt!==p||ft!==_)&&(i.blendEquationSeparate(Ct[gt],Ct[ft]),p=gt,_=ft),(Y!==m||Q!==y||vt!==M||Xt!==L)&&(i.blendFuncSeparate(kt[Y],kt[Q],kt[vt],kt[Xt]),m=Y,y=Q,M=vt,L=Xt),(pe.equals(T)===!1||Ne!==A)&&(i.blendColor(pe.r,pe.g,pe.b,Ne),T.copy(pe),A=Ne),v=I,C=!1}function ae(I,gt){I.side===Cn?at(i.CULL_FACE):ct(i.CULL_FACE);let Y=I.side===Ge;gt&&(Y=!Y),Ft(Y),I.blending===Wi&&I.transparent===!1?P(qn):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){F!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),F=I)}function Ht(I){I!==Id?(ct(i.CULL_FACE),I!==x&&(I===zl?i.cullFace(i.BACK):I===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),x=I}function Rt(I){I!==E&&(nt&&i.lineWidth(I),E=I)}function ne(I,gt,Y){I?(ct(i.POLYGON_OFFSET_FILL),(B!==gt||H!==Y)&&(i.polygonOffset(gt,Y),B=gt,H=Y)):at(i.POLYGON_OFFSET_FILL)}function Nt(I){I?ct(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+q-1),D!==I&&(i.activeTexture(I),D=I)}function S(I,gt,Y){Y===void 0&&(D===null?Y=i.TEXTURE0+q-1:Y=D);let Q=Z[Y];Q===void 0&&(Q={type:void 0,texture:void 0},Z[Y]=Q),(Q.type!==I||Q.texture!==gt)&&(D!==Y&&(i.activeTexture(Y),D=Y),i.bindTexture(I,gt||J[I]),Q.type=I,Q.texture=gt)}function O(){const I=Z[D];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){mt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function yt(I){Mt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Mt.copy(I))}function Wt(I,gt){let Y=l.get(gt);Y===void 0&&(Y=new WeakMap,l.set(gt,Y));let Q=Y.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(gt,I.name),Y.set(I,Q))}function Ot(I,gt){const Q=l.get(gt).get(I);o.get(gt)!==Q&&(i.uniformBlockBinding(gt,Q,I.__bindingPointIndex),o.set(gt,Q))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},D=null,Z={},h={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,y=null,_=null,M=null,L=null,T=new Vt(0,0,0),A=0,C=!1,F=null,x=null,E=null,B=null,H=null,mt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ct,disable:at,bindFramebuffer:ot,drawBuffers:lt,useProgram:bt,setBlending:P,setMaterial:ae,setFlipSided:Ft,setCullFace:Ht,setLineWidth:Rt,setPolygonOffset:ne,setScissorTest:Nt,activeTexture:R,bindTexture:S,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:it,texImage2D:_t,texImage3D:It,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:$t,texStorage3D:st,texSubImage2D:j,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:Dt,viewport:yt,reset:ee}}function Dc(i,t,e,n){const s=bv(n);switch(e){case zh:return i*t;case Hh:return i*t;case Vh:return i*t*2;case Wh:return i*t/s.components*s.byteLength;case el:return i*t/s.components*s.byteLength;case Xh:return i*t*2/s.components*s.byteLength;case nl:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case il:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:case io:return Math.max(i,16)*Math.max(t,8)/4;case to:case no:return Math.max(i,8)*Math.max(t,8)/2;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case So:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $h:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Eo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bv(i){switch(i){case kn:case Fh:return{byteLength:1,components:1};case Rs:case Oh:case Ls:return{byteLength:2,components:1};case Qo:case tl:return{byteLength:2,components:4};case gi:case Jo:case In:return{byteLength:4,components:1};case Bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):wr("canvas")}function v(R,S,O){let K=1;const it=Nt(R);if((it.width>O||it.height>O)&&(K=O/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*it.width),Et=Math.floor(K*it.height);d===void 0&&(d=g(j,Et));const dt=S?g(j,Et):d;return dt.width=j,dt.height=Et,dt.getContext("2d").drawImage(R,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Et+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==tn&&R.minFilter!==je}function m(R){i.generateMipmap(R)}function y(R,S,O,K,it=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),S===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RG8UI),O===i.UNSIGNED_SHORT&&(j=i.RG16UI),O===i.UNSIGNED_INT&&(j=i.RG32UI),O===i.BYTE&&(j=i.RG8I),O===i.SHORT&&(j=i.RG16I),O===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGB8UI),O===i.UNSIGNED_SHORT&&(j=i.RGB16UI),O===i.UNSIGNED_INT&&(j=i.RGB32UI),O===i.BYTE&&(j=i.RGB8I),O===i.SHORT&&(j=i.RGB16I),O===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),O===i.UNSIGNED_INT&&(j=i.RGBA32UI),O===i.BYTE&&(j=i.RGBA8I),O===i.SHORT&&(j=i.RGBA16I),O===i.INT&&(j=i.RGBA32I)),S===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),S===i.RGBA){const Et=it?yr:Zt.getTransfer(K);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=Et===se?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(R,S){let O;return R?S===null||S===gi||S===Qi?O=i.DEPTH24_STENCIL8:S===In?O=i.DEPTH32F_STENCIL8:S===Rs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===Qi?O=i.DEPTH_COMPONENT24:S===In?O=i.DEPTH_COMPONENT32F:S===Rs&&(O=i.DEPTH_COMPONENT16),O}function M(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==je?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){const S=R.target;S.removeEventListener("dispose",L),A(S),S.isVideoTexture&&h.delete(S)}function T(R){const S=R.target;S.removeEventListener("dispose",T),F(S)}function A(R){const S=n.get(R);if(S.__webglInit===void 0)return;const O=R.source,K=u.get(O);if(K){const it=K[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&C(R),Object.keys(K).length===0&&u.delete(O)}n.remove(R)}function C(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const O=R.source,K=u.get(O);delete K[S.__cacheKey],a.memory.textures--}function F(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let it=0;it<S.__webglFramebuffer[K].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[K][it]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=R.textures;for(let K=0,it=O.length;K<it;K++){const j=n.get(O[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(R)}let x=0;function E(){x=0}function B(){const R=x;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),x+=1,R}function H(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const O=n.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(O,R,S);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function nt(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Mt(O,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function X(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Mt(O,R,S);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function V(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){W(O,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const D={[Ja]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},Z={[tn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},et={[ff]:i.NEVER,[_f]:i.ALWAYS,[pf]:i.LESS,[Yh]:i.LEQUAL,[mf]:i.EQUAL,[xf]:i.GEQUAL,[gf]:i.GREATER,[vf]:i.NOTEQUAL};function tt(R,S){if(S.type===In&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===je||S.magFilter===Kr||S.magFilter===zs||S.magFilter===Ln||S.minFilter===je||S.minFilter===Kr||S.minFilter===zs||S.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,D[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,D[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,D[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Z[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==zs&&S.minFilter!==Ln||S.type===In&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function mt(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));const K=S.source;let it=u.get(K);it===void 0&&(it={},u.set(K,it));const j=H(S);if(j!==R.__cacheKey){it[j]===void 0&&(it[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),it[j].usedTimes++;const Et=it[R.__cacheKey];Et!==void 0&&(it[R.__cacheKey].usedTimes--,Et.usedTimes===0&&C(S)),R.__cacheKey=j,R.__webglTexture=it[j].texture}return O}function Mt(R,S,O){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const it=mt(R,S),j=S.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+O);const Et=n.get(j);if(j.version!==Et.__version||it===!0){e.activeTexture(i.TEXTURE0+O);const dt=Zt.getPrimaries(Zt.workingColorSpace),xt=S.colorSpace===$n?null:Zt.getPrimaries(S.colorSpace),$t=S.colorSpace===$n||dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let st=v(S.image,!1,s.maxTextureSize);st=ne(S,st);const _t=r.convert(S.format,S.colorSpace),It=r.convert(S.type);let Dt=y(S.internalFormat,_t,It,S.colorSpace,S.isVideoTexture);tt(K,S);let yt;const Wt=S.mipmaps,Ot=S.isVideoTexture!==!0,ee=Et.__version===void 0||it===!0,I=j.dataReady,gt=M(S,st);if(S.isDepthTexture)Dt=_(S.format===ts,S.type),ee&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Dt,st.width,st.height,0,_t,It,null));else if(S.isDataTexture)if(Wt.length>0){Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,gt,Dt,Wt[0].width,Wt[0].height);for(let Y=0,Q=Wt.length;Y<Q;Y++)yt=Wt[Y],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,yt.width,yt.height,_t,It,yt.data):e.texImage2D(i.TEXTURE_2D,Y,Dt,yt.width,yt.height,0,_t,It,yt.data);S.generateMipmaps=!1}else Ot?(ee&&e.texStorage2D(i.TEXTURE_2D,gt,Dt,st.width,st.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,_t,It,st.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,st.width,st.height,0,_t,It,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ot&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Dt,Wt[0].width,Wt[0].height,st.depth);for(let Y=0,Q=Wt.length;Y<Q;Y++)if(yt=Wt[Y],S.format!==hn)if(_t!==null)if(Ot){if(I)if(S.layerUpdates.size>0){const ft=Dc(yt.width,yt.height,S.format,S.type);for(const vt of S.layerUpdates){const Xt=yt.data.subarray(vt*ft/yt.data.BYTES_PER_ELEMENT,(vt+1)*ft/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,vt,yt.width,yt.height,1,_t,Xt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,st.depth,_t,yt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Dt,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,st.depth,_t,It,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Dt,yt.width,yt.height,st.depth,0,_t,It,yt.data)}else{Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,gt,Dt,Wt[0].width,Wt[0].height);for(let Y=0,Q=Wt.length;Y<Q;Y++)yt=Wt[Y],S.format!==hn?_t!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,yt.width,yt.height,_t,It,yt.data):e.texImage2D(i.TEXTURE_2D,Y,Dt,yt.width,yt.height,0,_t,It,yt.data)}else if(S.isDataArrayTexture)if(Ot){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Dt,st.width,st.height,st.depth),I)if(S.layerUpdates.size>0){const Y=Dc(st.width,st.height,S.format,S.type);for(const Q of S.layerUpdates){const ft=st.data.subarray(Q*Y/st.data.BYTES_PER_ELEMENT,(Q+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,_t,It,ft)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,It,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,_t,It,st.data);else if(S.isData3DTexture)Ot?(ee&&e.texStorage3D(i.TEXTURE_3D,gt,Dt,st.width,st.height,st.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,It,st.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,_t,It,st.data);else if(S.isFramebufferTexture){if(ee)if(Ot)e.texStorage2D(i.TEXTURE_2D,gt,Dt,st.width,st.height);else{let Y=st.width,Q=st.height;for(let ft=0;ft<gt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Dt,Y,Q,0,_t,It,null),Y>>=1,Q>>=1}}else if(Wt.length>0){if(Ot&&ee){const Y=Nt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Dt,Y.width,Y.height)}for(let Y=0,Q=Wt.length;Y<Q;Y++)yt=Wt[Y],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,_t,It,yt):e.texImage2D(i.TEXTURE_2D,Y,Dt,_t,It,yt);S.generateMipmaps=!1}else if(Ot){if(ee){const Y=Nt(st);e.texStorage2D(i.TEXTURE_2D,gt,Dt,Y.width,Y.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,It,st)}else e.texImage2D(i.TEXTURE_2D,0,Dt,_t,It,st);p(S)&&m(K),Et.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function W(R,S,O){if(S.image.length!==6)return;const K=mt(R,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const j=n.get(it);if(it.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const Et=Zt.getPrimaries(Zt.workingColorSpace),dt=S.colorSpace===$n?null:Zt.getPrimaries(S.colorSpace),xt=S.colorSpace===$n||Et===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const $t=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!$t&&!st?_t[Q]=v(S.image[Q],!0,s.maxCubemapSize):_t[Q]=st?S.image[Q].image:S.image[Q],_t[Q]=ne(S,_t[Q]);const It=_t[0],Dt=r.convert(S.format,S.colorSpace),yt=r.convert(S.type),Wt=y(S.internalFormat,Dt,yt,S.colorSpace),Ot=S.isVideoTexture!==!0,ee=j.__version===void 0||K===!0,I=it.dataReady;let gt=M(S,It);tt(i.TEXTURE_CUBE_MAP,S);let Y;if($t){Ot&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Wt,It.width,It.height);for(let Q=0;Q<6;Q++){Y=_t[Q].mipmaps;for(let ft=0;ft<Y.length;ft++){const vt=Y[ft];S.format!==hn?Dt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,vt.width,vt.height,Dt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Wt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,vt.width,vt.height,Dt,yt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Wt,vt.width,vt.height,0,Dt,yt,vt.data)}}}else{if(Y=S.mipmaps,Ot&&ee){Y.length>0&&gt++;const Q=Nt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Dt,yt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,_t[Q].width,_t[Q].height,0,Dt,yt,_t[Q].data);for(let ft=0;ft<Y.length;ft++){const Xt=Y[ft].image[Q].image;Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Xt.width,Xt.height,Dt,yt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Wt,Xt.width,Xt.height,0,Dt,yt,Xt.data)}}else{Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt,yt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,Dt,yt,_t[Q]);for(let ft=0;ft<Y.length;ft++){const vt=Y[ft];Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Dt,yt,vt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Wt,Dt,yt,vt.image[Q])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),j.__version=it.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,O,K,it,j){const Et=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),xt=y(O.internalFormat,Et,dt,O.colorSpace);if(!n.get(S).__hasExternalTextures){const st=Math.max(1,S.width>>j),_t=Math.max(1,S.height>>j);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,j,xt,st,_t,S.depth,0,Et,dt,null):e.texImage2D(it,j,xt,st,_t,0,Et,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,it,n.get(O).__webglTexture,0,Ft(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,it,n.get(O).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,it=K&&K.isDepthTexture?K.type:null,j=_(S.stencilBuffer,it),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Ft(S);Ht(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,j,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const K=S.textures;for(let it=0;it<K.length;it++){const j=K[it],Et=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),xt=y(j.internalFormat,Et,dt,j.colorSpace),$t=Ft(S);O&&Ht(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,xt,S.width,S.height):Ht(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,xt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,it=Ft(S);if(S.depthTexture.format===Xi)Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===ts)Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ot(R){const S=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),ct(S.__webglDepthbuffer[K],R,!1);else{const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ct(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,S,O){const K=n.get(R);S!==void 0&&J(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ot(R)}function bt(R){const S=R.texture,O=n.get(R),K=n.get(S);R.addEventListener("dispose",T);const it=R.textures,j=R.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)O.__webglFramebuffer[dt][xt]=i.createFramebuffer()}else O.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)O.__webglFramebuffer[dt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let dt=0,xt=it.length;dt<xt;dt++){const $t=n.get(it[dt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ht(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){const xt=it[dt];O.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);const $t=r.convert(xt.format,xt.colorSpace),st=r.convert(xt.type),_t=y(xt.internalFormat,$t,st,xt.colorSpace,R.isXRRenderTarget===!0),It=Ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,_t,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),tt(i.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)J(O.__webglFramebuffer[dt][xt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else J(O.__webglFramebuffer[dt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,xt=it.length;dt<xt;dt++){const $t=it[dt],st=n.get($t);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),tt(i.TEXTURE_2D,$t),J(O.__webglFramebuffer,R,$t,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),p($t)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,K.__webglTexture),tt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)J(O.__webglFramebuffer[xt],R,S,i.COLOR_ATTACHMENT0,dt,xt);else J(O.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,dt,0);p(S)&&m(dt),e.unbindTexture()}R.depthBuffer&&ot(R)}function Ct(R){const S=R.textures;for(let O=0,K=S.length;O<K;O++){const it=S[O];if(p(it)){const j=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(it).__webglTexture;e.bindTexture(j,Et),m(j),e.unbindTexture()}}}const kt=[],P=[];function ae(R){if(R.samples>0){if(Ht(R)===!1){const S=R.textures,O=R.width,K=R.height;let it=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),dt=S.length>1;if(dt)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const $t=n.get(S[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,it,i.NEAREST),l===!0&&(kt.length=0,P.length=0,kt.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(kt.push(j),P.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const $t=n.get(S[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ft(R){return Math.min(s.maxSamples,R.samples)}function Ht(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ne(R,S){const O=R.colorSpace,K=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==ti&&O!==$n&&(Zt.getTransfer(O)===se?(K!==hn||it!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=E,this.setTexture2D=q,this.setTexture2DArray=nt,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=lt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ht}function Ev(i,t){function e(n,s=$n){let r;const a=Zt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.BYTE;if(n===Oh)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===zh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===hn)return i.RGBA;if(n===Hh)return i.LUMINANCE;if(n===Vh)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Wh)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Xh)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===xo||n===_o||n===yo||n===Mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===So||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===wo||n===Eo||n===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Tv extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ss extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Av={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:Rv,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends ss{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=new Pv,p=e.getContextAttributes();let m=null,y=null;const _=[],M=[],L=new Bt;let T=null;const A=new Qe;A.layers.enable(1),A.viewport=new le;const C=new Qe;C.layers.enable(2),C.viewport=new le;const F=[A,C],x=new Tv;x.layers.enable(1),x.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=_[W];return J===void 0&&(J=new Ta,_[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=_[W];return J===void 0&&(J=new Ta,_[W]=J),J.getGripSpace()},this.getHand=function(W){let J=_[W];return J===void 0&&(J=new Ta,_[W]=J),J.getHandSpace()};function H(W){const J=M.indexOf(W.inputSource);if(J===-1)return;const ct=_[J];ct!==void 0&&(ct.update(W.inputSource,W.frame,c||a),ct.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let W=0;W<_.length;W++){const J=M[W];J!==null&&(M[W]=null,_[W].disconnect(J))}E=null,B=null,v.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,y=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new vi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ct=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?ts:Xi,ct=p.stencil?Qi:gi);const ot={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new vi(u.textureWidth,u.textureHeight,{format:hn,type:kn,depthTexture:new au(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function nt(W){for(let J=0;J<W.removed.length;J++){const ct=W.removed[J],at=M.indexOf(ct);at>=0&&(M[at]=null,_[at].disconnect(ct))}for(let J=0;J<W.added.length;J++){const ct=W.added[J];let at=M.indexOf(ct);if(at===-1){for(let lt=0;lt<_.length;lt++)if(lt>=M.length){M.push(ct),at=lt;break}else if(M[lt]===null){M[lt]=ct,at=lt;break}if(at===-1)break}const ot=_[at];ot&&ot.connect(ct)}}const X=new k,V=new k;function D(W,J,ct){X.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(ct.matrixWorld);const at=X.distanceTo(V),ot=J.projectionMatrix.elements,lt=ct.projectionMatrix.elements,bt=ot[14]/(ot[10]-1),Ct=ot[14]/(ot[10]+1),kt=(ot[9]+1)/ot[5],P=(ot[9]-1)/ot[5],ae=(ot[8]-1)/ot[0],Ft=(lt[8]+1)/lt[0],Ht=bt*ae,Rt=bt*Ft,ne=at/(-ae+Ft),Nt=ne*-ae;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Nt),W.translateZ(ne),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ot[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const R=bt+ne,S=Ct+ne,O=Ht-Nt,K=Rt+(at-Nt),it=kt*Ct/S*R,j=P*Ct/S*R;W.projectionMatrix.makePerspective(O,K,it,j,R,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Z(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,ct=W.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ct=v.depthFar)),x.near=C.near=A.near=J,x.far=C.far=A.far=ct,(E!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,B=x.far);const at=W.parent,ot=x.cameras;Z(x,at);for(let lt=0;lt<ot.length;lt++)Z(ot[lt],at);ot.length===2?D(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),et(W,x,at)};function et(W,J,ct){ct===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ct.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ao*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let tt=null;function mt(W,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;ct.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let lt=0;lt<ct.length;lt++){const bt=ct[lt];let Ct=null;if(f!==null)Ct=f.getViewport(bt);else{const P=d.getViewSubImage(u,bt);Ct=P.viewport,lt===0&&(t.setRenderTargetTextures(y,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(y))}let kt=F[lt];kt===void 0&&(kt=new Qe,kt.layers.enable(lt),kt.viewport=new le,F[lt]=kt),kt.matrix.fromArray(bt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(bt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),lt===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(kt)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const lt=d.getDepthInformation(ct[0]);lt&&lt.isValid&&lt.texture&&v.init(t,lt,s.renderState)}}for(let ct=0;ct<_.length;ct++){const at=M[ct],ot=_[ct];at!==null&&ot!==void 0&&ot.update(at,J,c||a)}tt&&tt(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Mt=new ru;Mt.setAnimationLoop(mt),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}}const oi=new vn,Iv=new he;function Dv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,nu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,M=y.envMapRotation;_&&(p.envMap.value=_,oi.copy(M),oi.x*=-1,oi.y*=-1,oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),p.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(oi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Uv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const M=_.program;n.uniformBlockBinding(y,M)}function c(y,_){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",p));const L=_.program;n.updateUBOMapping(y,L);const T=t.render.frame;r[y.id]!==T&&(u(y),r[y.id]=T)}function h(y){const _=d();y.__bindingPointIndex=_;const M=i.createBuffer(),L=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=s[y.id],M=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=M.length;T<A;T++){const C=Array.isArray(M[T])?M[T]:[M[T]];for(let F=0,x=C.length;F<x;F++){const E=C[F];if(f(E,T,F,L)===!0){const B=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let q=0;for(let nt=0;nt<H.length;nt++){const X=H[nt],V=v(X);typeof X=="number"||typeof X=="boolean"?(E.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+q,E.__data)):X.isMatrix3?(E.__data[0]=X.elements[0],E.__data[1]=X.elements[1],E.__data[2]=X.elements[2],E.__data[3]=0,E.__data[4]=X.elements[3],E.__data[5]=X.elements[4],E.__data[6]=X.elements[5],E.__data[7]=0,E.__data[8]=X.elements[6],E.__data[9]=X.elements[7],E.__data[10]=X.elements[8],E.__data[11]=0):(X.toArray(E.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,M,L){const T=y.value,A=_+"_"+M;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const C=L[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return L[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){const _=y.uniforms;let M=0;const L=16;for(let A=0,C=_.length;A<C;A++){const F=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,E=F.length;x<E;x++){const B=F[x],H=Array.isArray(B.value)?B.value:[B.value];for(let q=0,nt=H.length;q<nt;q++){const X=H[q],V=v(X),D=M%L,Z=D%V.boundary,et=D+Z;M+=Z,et!==0&&L-et<V.storage&&(M+=L-et),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=V.storage}}}const T=M%L;return T>0&&(M+=L-T),y.__size=M,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class kv{constructor(t={}){const{canvas:e=Mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Yn,this.toneMappingExposure=1;const _=this;let M=!1,L=0,T=0,A=null,C=-1,F=null;const x=new le,E=new le;let B=null;const H=new Vt(0);let q=0,nt=e.width,X=e.height,V=1,D=null,Z=null;const et=new le(0,0,nt,X),tt=new le(0,0,nt,X);let mt=!1;const Mt=new al;let W=!1,J=!1;const ct=new he,at=new he,ot=new k,lt=new le,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function kt(){return A===null?V:1}let P=n;function ae(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",vt,!1),P===null){const U="webgl2";if(P=ae(U,b),P===null)throw ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,Ht,Rt,ne,Nt,R,S,O,K,it,j,Et,dt,xt,$t,st,_t,It,Dt,yt,Wt,Ot,ee,I;function gt(){Ft=new zg(P),Ft.init(),Ot=new Ev(P,Ft),Ht=new Ug(P,Ft,t,Ot),Rt=new Sv(P),Ht.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ne=new Vg(P),Nt=new ov,R=new wv(P,Ft,Rt,Nt,Ht,Ot,ne),S=new Ng(_),O=new Bg(_),K=new Kf(P),ee=new Ig(P,K),it=new Gg(P,K,ne,ee),j=new Xg(P,it,K,ne),Dt=new Wg(P,Ht,R),st=new kg(Nt),Et=new av(_,S,O,Ft,Ht,ee,st),dt=new Dv(_,Nt),xt=new cv,$t=new mv(Ft),It=new Lg(_,S,O,Rt,j,u,l),_t=new yv(_,j,Ht),I=new Uv(P,ne,Ht,Rt),yt=new Dg(P,Ft,ne),Wt=new Hg(P,Ft,ne),ne.programs=Et.programs,_.capabilities=Ht,_.extensions=Ft,_.properties=Nt,_.renderLists=xt,_.shadowMap=_t,_.state=Rt,_.info=ne}gt();const Y=new Lv(_,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(nt,X,!1))},this.getSize=function(b){return b.set(nt,X)},this.setSize=function(b,U,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=b,X=U,e.width=Math.floor(b*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(nt*V,X*V).floor()},this.setDrawingBufferSize=function(b,U,z){nt=b,X=U,V=z,e.width=Math.floor(b*z),e.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(et)},this.setViewport=function(b,U,z,G){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,U,z,G),Rt.viewport(x.copy(et).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,U,z,G){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,U,z,G),Rt.scissor(E.copy(tt).multiplyScalar(V).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(b){Rt.setScissorTest(mt=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,U=!0,z=!0){let G=0;if(b){let N=!1;if(A!==null){const rt=A.texture.format;N=rt===il||rt===nl||rt===el}if(N){const rt=A.texture.type,pt=rt===kn||rt===gi||rt===Rs||rt===Qi||rt===Qo||rt===tl,St=It.getClearColor(),wt=It.getClearAlpha(),Pt=St.r,Lt=St.g,Tt=St.b;pt?(f[0]=Pt,f[1]=Lt,f[2]=Tt,f[3]=wt,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Pt,g[1]=Lt,g[2]=Tt,g[3]=wt,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),xt.dispose(),$t.dispose(),Nt.dispose(),S.dispose(),O.dispose(),j.dispose(),ee.dispose(),I.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ll),Y.removeEventListener("sessionend",Il),ei.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=ne.autoReset,U=_t.enabled,z=_t.autoUpdate,G=_t.needsUpdate,N=_t.type;gt(),ne.autoReset=b,_t.enabled=U,_t.autoUpdate=z,_t.needsUpdate=G,_t.type=N}function vt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const U=b.target;U.removeEventListener("dispose",Xt),pe(U)}function pe(b){Ne(b),Nt.remove(b)}function Ne(b){const U=Nt.get(b).programs;U!==void 0&&(U.forEach(function(z){Et.releaseProgram(z)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,G,N,rt){U===null&&(U=bt);const pt=N.isMesh&&N.matrixWorld.determinant()<0,St=Ed(b,U,z,G,N);Rt.setMaterial(G,pt);let wt=z.index,Pt=1;if(G.wireframe===!0){if(wt=it.getWireframeAttribute(z),wt===void 0)return;Pt=2}const Lt=z.drawRange,Tt=z.attributes.position;let Jt=Lt.start*Pt,ie=(Lt.start+Lt.count)*Pt;rt!==null&&(Jt=Math.max(Jt,rt.start*Pt),ie=Math.min(ie,(rt.start+rt.count)*Pt)),wt!==null?(Jt=Math.max(Jt,0),ie=Math.min(ie,wt.count)):Tt!=null&&(Jt=Math.max(Jt,0),ie=Math.min(ie,Tt.count));const oe=ie-Jt;if(oe<0||oe===1/0)return;ee.setup(N,G,St,z,wt);let Xe,jt=yt;if(wt!==null&&(Xe=K.get(wt),jt=Wt,jt.setIndex(Xe)),N.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*kt()),jt.setMode(P.LINES)):jt.setMode(P.TRIANGLES);else if(N.isLine){let At=G.linewidth;At===void 0&&(At=1),Rt.setLineWidth(At*kt()),N.isLineSegments?jt.setMode(P.LINES):N.isLineLoop?jt.setMode(P.LINE_LOOP):jt.setMode(P.LINE_STRIP)}else N.isPoints?jt.setMode(P.POINTS):N.isSprite&&jt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const At=N._multiDrawStarts,we=N._multiDrawCounts,Kt=N._multiDrawCount,sn=wt?K.get(wt).bytesPerElement:1,Si=Nt.get(G).currentProgram.getUniforms();for(let $e=0;$e<Kt;$e++)Si.setValue(P,"_gl_DrawID",$e),jt.render(At[$e]/sn,we[$e])}else if(N.isInstancedMesh)jt.renderInstances(Jt,oe,N.count);else if(z.isInstancedBufferGeometry){const At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,we=Math.min(z.instanceCount,At);jt.renderInstances(Jt,oe,we)}else jt.render(Jt,oe)};function Yt(b,U,z){b.transparent===!0&&b.side===Cn&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,Bs(b,U,z),b.side=Zn,b.needsUpdate=!0,Bs(b,U,z),b.side=Cn):Bs(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),p=$t.get(z),p.init(U),y.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const St=rt[pt];Yt(St,z,N),G.add(St)}else Yt(rt,z,N),G.add(rt)}),y.pop(),p=null,G},this.compileAsync=function(b,U,z=null){const G=this.compile(b,U,z);return new Promise(N=>{function rt(){if(G.forEach(function(pt){Nt.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){N(b);return}setTimeout(rt,10)}Ft.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Fe=null;function Mn(b){Fe&&Fe(b)}function Ll(){ei.stop()}function Il(){ei.start()}const ei=new ru;ei.setAnimationLoop(Mn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(b){Fe=b,Y.setAnimationLoop(b),b===null?ei.stop():ei.start()},Y.addEventListener("sessionstart",Ll),Y.addEventListener("sessionend",Il),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,A),p=$t.get(b,y.length),p.init(U),y.push(p),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Mt.setFromProjectionMatrix(at),J=this.localClippingEnabled,W=st.init(this.clippingPlanes,J),v=xt.get(b,m.length),v.init(),m.push(v),Y.enabled===!0&&Y.isPresenting===!0){const rt=_.xr.getDepthSensingMesh();rt!==null&&Xr(rt,U,-1/0,_.sortObjects)}Xr(b,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(D,Z),Ct=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ct&&It.addToRenderList(v,b),this.info.render.frame++,W===!0&&st.beginShadows();const z=p.state.shadowsArray;_t.render(z,b,U),W===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,N=v.transmissive;if(p.setupLights(),U.isArrayCamera){const rt=U.cameras;if(N.length>0)for(let pt=0,St=rt.length;pt<St;pt++){const wt=rt[pt];Ul(G,N,b,wt)}Ct&&It.render(b);for(let pt=0,St=rt.length;pt<St;pt++){const wt=rt[pt];Dl(v,b,wt,wt.viewport)}}else N.length>0&&Ul(G,N,b,U),Ct&&It.render(b),Dl(v,b,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,U),ee.resetDefaultState(),C=-1,F=null,y.pop(),y.length>0?(p=y[y.length-1],W===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Xr(b,U,z,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Mt.intersectsSprite(b)){G&&lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const pt=j.update(b),St=b.material;St.visible&&v.push(b,pt,St,z,lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Mt.intersectsObject(b))){const pt=j.update(b),St=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),lt.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),lt.copy(pt.boundingSphere.center)),lt.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(St)){const wt=pt.groups;for(let Pt=0,Lt=wt.length;Pt<Lt;Pt++){const Tt=wt[Pt],Jt=St[Tt.materialIndex];Jt&&Jt.visible&&v.push(b,pt,Jt,z,lt.z,Tt)}}else St.visible&&v.push(b,pt,St,z,lt.z,null)}}const rt=b.children;for(let pt=0,St=rt.length;pt<St;pt++)Xr(rt[pt],U,z,G)}function Dl(b,U,z,G){const N=b.opaque,rt=b.transmissive,pt=b.transparent;p.setupLightsView(z),W===!0&&st.setGlobalState(_.clippingPlanes,z),G&&Rt.viewport(x.copy(G)),N.length>0&&Os(N,U,z),rt.length>0&&Os(rt,U,z),pt.length>0&&Os(pt,U,z),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Ul(b,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new vi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Ls:kn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[G.id],pt=G.viewport||x;rt.setSize(pt.z,pt.w);const St=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(H),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Ct&&It.render(z);const wt=_.toneMapping;_.toneMapping=Yn;const Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),W===!0&&st.setGlobalState(_.clippingPlanes,G),Os(b,z,G),R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Tt=0,Jt=U.length;Tt<Jt;Tt++){const ie=U[Tt],oe=ie.object,Xe=ie.geometry,jt=ie.material,At=ie.group;if(jt.side===Cn&&oe.layers.test(G.layers)){const we=jt.side;jt.side=Ge,jt.needsUpdate=!0,kl(oe,z,G,Xe,jt,At),jt.side=we,jt.needsUpdate=!0,Lt=!0}}Lt===!0&&(R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt))}_.setRenderTarget(St),_.setClearColor(H,q),Pt!==void 0&&(G.viewport=Pt),_.toneMapping=wt}function Os(b,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=b.length;N<rt;N++){const pt=b[N],St=pt.object,wt=pt.geometry,Pt=G===null?pt.material:G,Lt=pt.group;St.layers.test(z.layers)&&kl(St,U,z,wt,Pt,Lt)}}function kl(b,U,z,G,N,rt){b.onBeforeRender(_,U,z,G,N,rt),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(_,U,z,G,b,rt),N.transparent===!0&&N.side===Cn&&N.forceSinglePass===!1?(N.side=Ge,N.needsUpdate=!0,_.renderBufferDirect(z,U,G,N,b,rt),N.side=Zn,N.needsUpdate=!0,_.renderBufferDirect(z,U,G,N,b,rt),N.side=Cn):_.renderBufferDirect(z,U,G,N,b,rt),b.onAfterRender(_,U,z,G,N,rt)}function Bs(b,U,z){U.isScene!==!0&&(U=bt);const G=Nt.get(b),N=p.state.lights,rt=p.state.shadowsArray,pt=N.state.version,St=Et.getParameters(b,N.state,rt,U,z),wt=Et.getProgramCacheKey(St);let Pt=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?O:S).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",Xt),Pt=new Map,G.programs=Pt);let Lt=Pt.get(wt);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===pt)return Fl(b,St),Lt}else St.uniforms=Et.getUniforms(b),b.onBeforeCompile(St,_),Lt=Et.acquireProgram(St,wt),Pt.set(wt,Lt),G.uniforms=St.uniforms;const Tt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=st.uniform),Fl(b,St),G.needsLights=Ad(b),G.lightsStateVersion=pt,G.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Lt,G.uniformsList=null,Lt}function Nl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=gr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Fl(b,U){const z=Nt.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Ed(b,U,z,G,N){U.isScene!==!0&&(U=bt),R.resetTextureUnits();const rt=U.fog,pt=G.isMeshStandardMaterial?U.environment:null,St=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ti,wt=(G.isMeshStandardMaterial?O:S).get(G.envMap||pt),Pt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!z.morphAttributes.position,Jt=!!z.morphAttributes.normal,ie=!!z.morphAttributes.color;let oe=Yn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(oe=_.toneMapping);const Xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,jt=Xe!==void 0?Xe.length:0,At=Nt.get(G),we=p.state.lights;if(W===!0&&(J===!0||b!==F)){const Ke=b===F&&G.id===C;st.setState(G,b,Ke)}let Kt=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==we.state.version||At.outputColorSpace!==St||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==wt||G.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Pt||At.vertexTangents!==Lt||At.morphTargets!==Tt||At.morphNormals!==Jt||At.morphColors!==ie||At.toneMapping!==oe||At.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,At.__version=G.version);let sn=At.currentProgram;Kt===!0&&(sn=Bs(G,U,N));let Si=!1,$e=!1,$r=!1;const ue=sn.getUniforms(),Fn=At.uniforms;if(Rt.useProgram(sn.program)&&(Si=!0,$e=!0,$r=!0),G.id!==C&&(C=G.id,$e=!0),Si||F!==b){Ht.reverseDepthBuffer?(ct.copy(b.projectionMatrix),bf(ct),wf(ct),ue.setValue(P,"projectionMatrix",ct)):ue.setValue(P,"projectionMatrix",b.projectionMatrix),ue.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ke=ue.map.cameraPosition;Ke!==void 0&&Ke.setValue(P,ot.setFromMatrixPosition(b.matrixWorld)),Ht.logarithmicDepthBuffer&&ue.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ue.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),F!==b&&(F=b,$e=!0,$r=!0)}if(N.isSkinnedMesh){ue.setOptional(P,N,"bindMatrix"),ue.setOptional(P,N,"bindMatrixInverse");const Ke=N.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ue.setValue(P,"boneTexture",Ke.boneTexture,R))}N.isBatchedMesh&&(ue.setOptional(P,N,"batchingTexture"),ue.setValue(P,"batchingTexture",N._matricesTexture,R),ue.setOptional(P,N,"batchingIdTexture"),ue.setValue(P,"batchingIdTexture",N._indirectTexture,R),ue.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(P,"batchingColorTexture",N._colorsTexture,R));const qr=z.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&Dt.update(N,z,sn),($e||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,ue.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fn.envMap.value=wt,Fn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Fn.envMapIntensity.value=U.environmentIntensity),$e&&(ue.setValue(P,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&Td(Fn,$r),rt&&G.fog===!0&&dt.refreshFogUniforms(Fn,rt),dt.refreshMaterialUniforms(Fn,G,V,X,p.state.transmissionRenderTarget[b.id]),gr.upload(P,Nl(At),Fn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(gr.upload(P,Nl(At),Fn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ue.setValue(P,"center",N.center),ue.setValue(P,"modelViewMatrix",N.modelViewMatrix),ue.setValue(P,"normalMatrix",N.normalMatrix),ue.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ke=G.uniformsGroups;for(let Yr=0,Rd=Ke.length;Yr<Rd;Yr++){const Ol=Ke[Yr];I.update(Ol,sn),I.bind(Ol,sn)}}return sn}function Td(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ad(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,z){Nt.get(b.texture).__webglTexture=U,Nt.get(b.depthTexture).__webglTexture=z;const G=Nt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const z=Nt.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,z=0){A=b,L=U,T=z;let G=!0,N=null,rt=!1,pt=!1;if(b){const wt=Nt.get(b);if(wt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(wt.__hasExternalTextures)R.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&Nt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(pt=!0);const Lt=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?N=Lt[U][z]:N=Lt[U],rt=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?N=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?N=Lt[z]:N=Lt,x.copy(b.viewport),E.copy(b.scissor),B=b.scissorTest}else x.copy(et).multiplyScalar(V).floor(),E.copy(tt).multiplyScalar(V).floor(),B=mt;if(Rt.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&Rt.drawBuffers(b,N),Rt.viewport(x),Rt.scissor(E),Rt.setScissorTest(B),rt){const wt=Nt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,z)}else if(pt){const wt=Nt.get(b.texture),Pt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,wt.__webglTexture,z||0,Pt)}C=-1},this.readRenderTargetPixels=function(b,U,z,G,N,rt,pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){Rt.bindFramebuffer(P.FRAMEBUFFER,St);try{const wt=b.texture,Pt=wt.format,Lt=wt.type;if(!Ht.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&z>=0&&z<=b.height-N&&P.readPixels(U,z,G,N,Ot.convert(Pt),Ot.convert(Lt),rt)}finally{const wt=A!==null?Nt.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(P.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,G,N,rt,pt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){const wt=b.texture,Pt=wt.format,Lt=wt.type;if(!Ht.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&z>=0&&z<=b.height-N){Rt.bindFramebuffer(P.FRAMEBUFFER,St);const Tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.bufferData(P.PIXEL_PACK_BUFFER,rt.byteLength,P.STREAM_READ),P.readPixels(U,z,G,N,Ot.convert(Pt),Ot.convert(Lt),0);const Jt=A!==null?Nt.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(P.FRAMEBUFFER,Jt);const ie=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Sf(P,ie,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,rt),P.deleteBuffer(Tt),P.deleteSync(ie),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,z=0){b.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-z),N=Math.floor(b.image.width*G),rt=Math.floor(b.image.height*G),pt=U!==null?U.x:0,St=U!==null?U.y:0;R.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,pt,St,N,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(b,U,z=null,G=null,N=0){b.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let rt,pt,St,wt,Pt,Lt;z!==null?(rt=z.max.x-z.min.x,pt=z.max.y-z.min.y,St=z.min.x,wt=z.min.y):(rt=b.image.width,pt=b.image.height,St=0,wt=0),G!==null?(Pt=G.x,Lt=G.y):(Pt=0,Lt=0);const Tt=Ot.convert(U.format),Jt=Ot.convert(U.type);R.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ie=P.getParameter(P.UNPACK_ROW_LENGTH),oe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xe=P.getParameter(P.UNPACK_SKIP_PIXELS),jt=P.getParameter(P.UNPACK_SKIP_ROWS),At=P.getParameter(P.UNPACK_SKIP_IMAGES),we=b.isCompressedTexture?b.mipmaps[N]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,we.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,we.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,St),P.pixelStorei(P.UNPACK_SKIP_ROWS,wt),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Pt,Lt,rt,pt,Tt,Jt,we.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Pt,Lt,we.width,we.height,Tt,we.data):P.texSubImage2D(P.TEXTURE_2D,N,Pt,Lt,rt,pt,Tt,Jt,we),P.pixelStorei(P.UNPACK_ROW_LENGTH,ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,At),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,z=null,G=null,N=0){b.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0);let rt,pt,St,wt,Pt,Lt,Tt,Jt,ie;const oe=b.isCompressedTexture?b.mipmaps[N]:b.image;z!==null?(rt=z.max.x-z.min.x,pt=z.max.y-z.min.y,St=z.max.z-z.min.z,wt=z.min.x,Pt=z.min.y,Lt=z.min.z):(rt=oe.width,pt=oe.height,St=oe.depth,wt=0,Pt=0,Lt=0),G!==null?(Tt=G.x,Jt=G.y,ie=G.z):(Tt=0,Jt=0,ie=0);const Xe=Ot.convert(U.format),jt=Ot.convert(U.type);let At;if(U.isData3DTexture)R.setTexture3D(U,0),At=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),At=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const we=P.getParameter(P.UNPACK_ROW_LENGTH),Kt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),Si=P.getParameter(P.UNPACK_SKIP_ROWS),$e=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,oe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(At,N,Tt,Jt,ie,rt,pt,St,Xe,jt,oe.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(At,N,Tt,Jt,ie,rt,pt,St,Xe,oe.data):P.texSubImage3D(At,N,Tt,Jt,ie,rt,pt,St,Xe,jt,oe),P.pixelStorei(P.UNPACK_ROW_LENGTH,we),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Kt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Si),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$e),N===0&&U.generateMipmaps&&P.generateMipmap(At),Rt.unbindTexture()},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,Rt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===sl?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Dr?"display-p3":"srgb"}}class uu extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class du extends Ae{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class os extends yn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new k,M=new k,L=new k;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],M),f(e[T+2],L),l(_,M,L,y)}function l(y,_,M,L){const T=L+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const F=y.clone().lerp(M,C/T),x=_.clone().lerp(M,C/T),E=T-C;for(let B=0;B<=E;B++)B===0&&C===T?A[C][B]=F:A[C][B]=F.clone().lerp(x,B/E)}for(let C=0;C<T;C++)for(let F=0;F<2*(T-C)-1;F++){const x=Math.floor(F/2);F%2===0?(u(A[C][x+1]),u(A[C+1][x]),u(A[C][x])):(u(A[C][x+1]),u(A[C+1][x+1]),u(A[C+1][x]))}}function c(y){const _=new k;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(y),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){const y=new k;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const M=p(y)/2/Math.PI+.5,L=m(y)/Math.PI+.5;a.push(M,1-L)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const _=a[y+0],M=a[y+2],L=a[y+4],T=Math.max(_,M,L),A=Math.min(_,M,L);T>.9&&A<.1&&(_<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,_){const M=y*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const y=new k,_=new k,M=new k,L=new k,T=new Bt,A=new Bt,C=new Bt;for(let F=0,x=0;F<r.length;F+=9,x+=6){y.set(r[F+0],r[F+1],r[F+2]),_.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),T.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),L.copy(y).add(_).add(M).divideScalar(3);const E=p(L);v(T,x+0,y,E),v(A,x+2,_,E),v(C,x+4,M,E)}}function v(y,_,M,L){L<0&&y.x===1&&(a[_]=y.x-1),M.x===0&&M.z===0&&(a[_]=L/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.vertices,t.indices,t.radius,t.details)}}class cl extends os{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cl(t.radius,t.detail)}}class hl extends os{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hl(t.radius,t.detail)}}class ul extends os{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ul(t.radius,t.detail)}}class dl extends os{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new dl(t.radius,t.detail)}}class Nv extends Us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fu extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fv extends fu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Aa=new he,Uc=new k,kc=new k;class Ov{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kc),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bv extends Ov{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zv extends fu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Bv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);const Gv=new Vt(16777215);class Hv{constructor(t,{rotates:e=!1,flashTime:n=.12}={}){this.root=new Ss,t.add(this.root),this.rotates=e,this.flashTime=n,this.flashMats=[],this.bar=null}makeFlashable(t=this.root){t.traverse(e=>{!e.isMesh||!e.material||e.material.__noFlash||(e.material=e.material.clone(),e.material.emissive&&(e.material.userData.baseEmissive=e.material.emissive.getHex(),this.flashMats.push(e.material)))})}setHealthBar(t){return this.bar=t,t}sync(t,e,n,s){this.root.position.lerpVectors(t.prevPos,t.pos,n),this.rotates&&(this.root.rotation.y=Pd(t.prevFacing,t.facing,n)),this.animate(e,t),this.paint(t,s)}snap(t,e,n){this.root.position.copy(t.pos),this.rotates&&(this.root.rotation.y=t.facing),this.animate(e,t),this.paint(t,n)}animate(t,e){}paint(t,e){if(this.flashMats.length){const n=t.flash>0?t.flash/this.flashTime:0,s=t.viewTint?t.viewTint():null;for(const r of this.flashMats)r.emissive.setHex(s??r.userData.baseEmissive),n>0&&r.emissive.lerp(Gv,n*.9)}this.bar&&(this.bar.setFraction(t.maxHp?t.hp/t.maxHp:0),e&&this.bar.face(e))}dispose(){var t;(t=this.bar)==null||t.dispose(),this.root.removeFromParent();for(const e of this.flashMats)e.dispose();this.flashMats.length=0}}function Vv(i,t,{key:e="config",log:n=!0}={}){return t}const Wv={sim:{hz:20},camera:{viewUnits:14,minViewUnits:1.5,maxViewUnits:90,zoomStep:1.12,panMargin:6},grid:{unitPx:140,kind:"square",color:857106,opacity:.34,lineWidth:.9,perUnit:5,unitLabel:"sq",distanceLabel:"ft"},tokens:{defaultSize:1,minSize:.25,maxSize:12,defaultBorder:5219203,slide:{speed:9,min:.2,max:.75},ring:.07,originAlpha:.26,originRingAlpha:.7,layerGap:.002,arrow:{length:.17,gap:.05,alpha:.92,edgeAlpha:.6}},ruler:{color:15923188,widthPx:2.4,dashPx:11,duty:.58,alpha:.85},assets:{maxEdge:2560,quality:.86,maxBytes:48*1024*1024},multiplayer:{appId:"vtt-tabletop",maxPlayers:8,ghostHz:20}},Ut=Vv(void 0,Wv),pu=1,en="gm",Jn="player",Co=["bg","token","gm"];function mu(){return{v:pu,seq:0,nid:1,scenes:{},sceneOrder:[],activeScene:null,assets:{},roster:{},chat:[]}}function Hi(i,t){return`${t}_${i.nid++}`}function Xv(i,t="Untitled scene"){return{id:i,name:t,map:null,artW:0,artH:0,grid:{kind:"square",snap:"soft",magnet:.12,measure:"chebyshev",unitLabel:"sq",distanceLabel:"ft",unitPx:140,ox:0,oy:0,color:857106,opacity:.34,perUnit:5},tokens:{},tokenOrder:[],blocks:[],fx:qi()}}const gu=["rain","snow","fog","embers"],Er=12,Po=["downed","dead","poisoned","stunned","asleep","prone","restrained","blinded","frightened","charmed","burning","bleeding","concentrating","invisible"];function vu(i){return Array.isArray(i)?Po.filter(t=>i.includes(t)):[]}const fl=["fade","swirl","curtain","drapes","ink","burn","freeze","flood"];function qi(){return{weather:null,intensity:.6,darkness:0,blackout:!1,transition:"fade"}}function $v(i,t={}){return{id:i,asset:null,name:"",x:0,y:0,size:1,rot:0,facing:null,shape:"circle",border:5219203,tint:16777215,layer:"token",owner:"",hp:0,maxHp:0,hidden:!1,light:!1,lightRange:2,...t}}function Tr(i,t,{role:e=Jn,color:n=6535316}={}){return{peerId:i,name:t,role:e,color:n,tokens:[]}}function Ee(i){return i.activeScene&&i.scenes[i.activeScene]||null}function qv(i,{isGm:t=!0}={}){const e=Ee(i);if(!e)return[];const n=[];for(const s of e.tokenOrder){const r=e.tokens[s];r&&(r.hidden&&!t||r.layer==="gm"&&!t||n.push(r))}return n}const Yv={x0:0,y0:0,x1:16,y1:10};function Lo(i){if(!i||!i.artW||!i.artH)return{...Yv};const t=i.grid.unitPx||1;return{x0:-i.grid.ox/t,y0:-i.grid.oy/t,x1:(i.artW-i.grid.ox)/t,y1:(i.artH-i.grid.oy)/t}}function Io(i){var t,e;if(!i||typeof i!="object")return mu();for(const n of Object.values(i.scenes||{}))typeof((t=n.grid)==null?void 0:t.snap)=="boolean"&&(n.grid.snap=n.grid.snap?"grid":"off"),typeof((e=n.grid)==null?void 0:e.magnet)!="number"&&(n.grid.magnet=.12),(!n.fx||typeof n.fx!="object")&&(n.fx=qi()),typeof n.fx.intensity!="number"&&(n.fx.intensity=qi().intensity),fl.includes(n.fx.transition)||(n.fx.transition="fade"),Array.isArray(n.blocks)||(n.blocks=[]);return i.v=pu,i}function pi(i,t,e,{isGm:n=!0}={}){const s=Ee(i);if(!s)return null;for(let r=s.tokenOrder.length-1;r>=0;r--){const a=s.tokens[s.tokenOrder[r]];if(!a||(a.hidden||a.layer==="gm")&&!n)continue;const o=Math.max(.05,a.size)/2,l=t-a.x,c=e-a.y;if(a.shape==="square"?Math.abs(l)<=o&&Math.abs(c)<=o:l*l+c*c<=o*o)return a}return null}const Do=[2,4,6,8,10,12,20,100],pn={dice:30,terms:8,modifier:1e3,expr:64,note:60,input:256};function Nc(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim().toLowerCase().replace(/\s*([+-])\s*/g,"$1");if(!t)throw new Error("Type a roll, like 2d6+3.");if(/\s/.test(t))throw new Error(`Cannot read "${i.trim()}".`);if(t.length>pn.expr)throw new Error("That roll is too long.");const e=[],n=/([+-]?)(?:(\d*)d(\d+|%)(?:k([hl])(\d+))?|(\d+))/y;let s=0,r=0;for(;s<t.length;){n.lastIndex=s;const a=n.exec(t);if(!a||e.length&&!a[1])throw new Error(`Cannot read "${i.trim()}".`);s=n.lastIndex;const o=a[1]==="-"?-1:1;if(a[6]!==void 0){const d=Number(a[6]);if(d>pn.modifier)throw new Error(`${d} is a big modifier.`);e.push({flat:d,sign:o});continue}const l=a[2]===""?1:Number(a[2]),c=a[3]==="%"?100:Number(a[3]);if(!Do.includes(c))throw new Error(`There is no d${c}. Try ${Do.map(d=>`d${d}`).join(", ")}.`);if(l<1)throw new Error("Roll at least one die.");if(r+=l,r>pn.dice)throw new Error(`At most ${pn.dice} dice at once.`);let h=null;if(a[4]){const d=Number(a[5]);if(d<1||d>l)throw new Error(`Cannot keep ${d} of ${l}.`);h={high:a[4]==="h",n:d}}e.push({count:l,sides:c,keep:h,sign:o})}if(e.length>pn.terms)throw new Error("Too many parts to that roll.");if(!e.some(a=>a.sides))throw new Error("There are no dice in that.");return e}function kr(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim();if(!t)throw new Error("Type a roll, like 2d6+3.");if(t.length>pn.input)throw new Error("That roll is too long.");const e=t.split(/\s+/);for(let n=e.length;n>=1;n--){let s;try{s=Nc(e.slice(0,n).join(" "))}catch{continue}return{terms:s,note:jv(e.slice(n).join(" "))}}throw Nc(e[0]),new Error(`Cannot read "${t}".`)}function jv(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,pn.note)}function xu(i){return i.map((t,e)=>{const n=t.sign<0?"-":e?"+":"";if(t.flat!==void 0)return`${n}${t.flat}`;const s=t.keep?`k${t.keep.high?"h":"l"}${t.keep.n}`:"";return`${n}${t.count}d${t.sides===100?"%":t.sides}${s}`}).join("")}function Fc(i,t,{id:e,by:n,hidden:s=!1}){const{terms:r,note:a}=kr(t),o=i.count,l=[];let c=0;for(const u of r){if(u.flat!==void 0){c+=u.sign*u.flat;continue}const f=[];for(let g=0;g<u.count;g++)f.push({sides:u.sides,value:i.int(1,u.sides),kept:!0,sign:u.sign});if(u.keep){const g=f.map((p,m)=>m).sort((p,m)=>(u.keep.high?f[m].value-f[p].value:f[p].value-f[m].value)||p-m),v=new Set(g.slice(0,u.keep.n));f.forEach((p,m)=>{p.kept=v.has(m)})}l.push(...f)}const h=i.int(1,2147483647),d=l.reduce((u,f)=>u+(f.kept?f.sign*f.value:0),0)+c;return{id:e,by:n,expr:xu(r),...a?{note:a}:{},...s?{hidden:!0}:{},dice:l,mod:c,total:d,from:o,draws:i.count-o,throw:h}}function Kv(i){return!i||typeof i!="object"||typeof i.id!="string"||!Array.isArray(i.dice)||i.dice.length<1||i.dice.length>pn.dice||i.note!==void 0&&(typeof i.note!="string"||i.note.length>pn.note)?!1:i.dice.every(t=>Do.includes(t.sides)&&Number.isInteger(t.value)&&t.value>=1&&t.value<=t.sides)}const ns={keep:200,text:300};function _u(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,ns.text)}function Zv(i){return!!i&&typeof i=="object"&&typeof i.id=="string"&&i.id.length<=64&&typeof i.by=="string"&&i.by.length<=64&&typeof i.text=="string"&&i.text.length>0&&i.text.length<=ns.text&&(i.at===void 0||Number.isFinite(i.at))}function Oc(i){i.length>ns.keep&&i.splice(0,i.length-ns.keep)}const pl="square",ml="hex-pointy",ks="hex-flat",ls="none",yu=[pl,ml,ks,ls],Jv="off",Mu="soft",Su="grid",Qv=[Jv,Mu,Su],tx=.5,Ar=tx/(Math.sqrt(3)/2);function Nr(i){return i===ml||i===ks}function ex(i,t,e){const n=e.unitPx||1;return[(i-e.ox)/n,(t-e.oy)/n]}function nx(i,t,e){const n=e.unitPx||1;return[i*n+e.ox,t*n+e.oy]}function ix(i,t,e,n=1){if(!e||e.kind===ls)return[i,t];if(Nr(e.kind)){const[r,a]=bu(i,t,e.kind);return[r,a]}return Math.round(n)%2===1||n<1?[Math.floor(i)+.5,Math.floor(t)+.5]:[Math.round(i),Math.round(t)]}function sx(i,t,e,n=.12){if(!e||e.kind===ls||!(n>0))return[i,t];if(Nr(e.kind)){const[r,a]=bu(i,t,e.kind);return Math.hypot(i-r,t-a)<=n?[r,a]:[i,t]}const s=r=>{const a=Math.round(r*2)/2;return Math.abs(r-a)<=n?a:r};return[s(i),s(t)]}function gl(i,t,e,n=1){return(e==null?void 0:e.snap)===Su?ix(i,t,e,n):(e==null?void 0:e.snap)===Mu?sx(i,t,e,e.magnet):[i,t]}function rx(i,t,e,n,s,r="euclid"){if(Nr(s==null?void 0:s.kind))return lx(i,t,e,n,s.kind);const a=Math.abs(e-i),o=Math.abs(n-t);if(r==="chebyshev")return Math.max(a,o);if(r==="alternating"){const l=Math.min(a,o);return Math.max(a,o)-l+Math.floor(l)+Math.floor(l/2)+l%1}return Math.hypot(a,o)}function ax(i,t,e,n,s){const r=!s||s.kind===ls,a=rx(i,t,e,n,s,s==null?void 0:s.measure),o=Math.round(a*10)/10,l=Number.isInteger(o)?String(o):o.toFixed(1),c=r?o===1?"unit":"units":s.unitLabel||"sq",h=Math.round(a*((s==null?void 0:s.perUnit)??5)),d=(s==null?void 0:s.distanceLabel)??"ft";return{distance:a,text:d?`${l} ${c} · ${h} ${d}`:`${l} ${c}`}}function Uo(i,t,e){const[n,s]=e===ks?[t,i]:[i,t],r=(Math.sqrt(3)/3*n-s/3)/Ar,a=2/3*s/Ar;return[r,a]}function ox(i,t,e){const n=Ar*(Math.sqrt(3)*i+Math.sqrt(3)/2*t),s=Ar*(3/2*t);return e===ks?[s,n]:[n,s]}function ko(i,t){const e=-i-t;let n=Math.round(i),s=Math.round(t);const r=Math.round(e),a=Math.abs(n-i),o=Math.abs(s-t),l=Math.abs(r-e);return a>o&&a>l?n=-s-r:o>l&&(s=-n-r),[n,s]}function bu(i,t,e){const[n,s]=ko(...Uo(i,t,e));return ox(n,s,e)}function lx(i,t,e,n,s){const[r,a]=ko(...Uo(i,t,s)),[o,l]=ko(...Uo(e,n,s)),c=r-o,h=a-l;return(Math.abs(c)+Math.abs(h)+Math.abs(c+h))/2}function cx(i,t,e){const n=/\((\d{1,3})\s*[x×]\s*(\d{1,3})\)/i.exec(i||"");if(!n)return null;const s=+n[1],r=+n[2];if(!(s>1&&r>1))return null;const a=t/s,o=e/r;if(Math.abs(a-o)>1.5)return null;const l=Math.round((a+o)/2);return l<16||l>1024?null:{unitPx:l,ox:0,oy:0,cols:s,rows:r}}const hx=["wall","mask"],is={coords:2e3,perScene:2e3};function wu(i){const t=[];for(const e of(i==null?void 0:i.blocks)||[]){const n=e.pts,s=n.length>>1;for(let r=0;r+1<s;r++)t.push(n[r*2],n[r*2+1],n[r*2+2],n[r*2+3]);e.kind==="mask"&&s>2&&t.push(n[s*2-2],n[s*2-1],n[0],n[1])}return t}function Eu(i,t,e,n,s,r,a,o){const l=a-s,c=o-r,h=e*c-n*l;if(Math.abs(h)<1e-12)return 1/0;const d=s-i,u=r-t,f=(d*c-u*l)/h,g=(d*n-u*e)/h;return f>=0&&g>=-1e-9&&g<=1+1e-9?f:1/0}function No(i,t,e,n,s){const r=n-t,a=s-e;for(let o=0;o<i.length;o+=4){const l=Eu(t,e,r,a,i[o],i[o+1],i[o+2],i[o+3]);if(l>1e-6&&l<1-1e-6)return!0}return!1}const Bc=64;function ux(i,t,e,n){const s=[],r=(n+.01)**2;for(let c=0;c<i.length;c+=4){const h=i[c],d=i[c+1],u=i[c+2],f=i[c+3],g=u-h,v=f-d,p=g*g+v*v,m=p>0?Math.max(0,Math.min(1,((t-h)*g+(e-d)*v)/p)):0,y=h+g*m-t,_=d+v*m-e;y*y+_*_<=r&&s.push(h,d,u,f)}const a=[];for(let c=0;c<Bc;c++)a.push(c/Bc*Math.PI*2-Math.PI);const o=1e-4;for(let c=0;c<s.length;c+=2){const h=Math.atan2(s[c+1]-e,s[c]-t);a.push(h-o,h,h+o)}a.sort((c,h)=>c-h);const l=[];for(const c of a){const h=Math.cos(c),d=Math.sin(c);let u=n;for(let f=0;f<s.length;f+=4){const g=Eu(t,e,h,d,s[f],s[f+1],s[f+2],s[f+3]);g<u&&(u=g)}l.push(t+h*u,e+d*u)}return l}function dx(i,t,e){const n=i.pts,s=n.length>>1;let r=1/0;const a=(o,l,c,h)=>{const d=c-o,u=h-l,f=d*d+u*u,g=f>0?Math.max(0,Math.min(1,((t-o)*d+(e-l)*u)/f)):0;r=Math.min(r,Math.hypot(o+d*g-t,l+u*g-e))};for(let o=0;o+1<s;o++)a(n[o*2],n[o*2+1],n[o*2+2],n[o*2+3]);return i.kind==="mask"&&s>2&&(a(n[s*2-2],n[s*2-1],n[0],n[1]),fx(n,t,e))?0:r}function fx(i,t,e){let n=!1;const s=i.length>>1;for(let r=0,a=s-1;r<s;a=r++){const o=i[r*2],l=i[r*2+1],c=i[a*2],h=i[a*2+1];l>e!=h>e&&t<(c-o)*(e-l)/(h-l)+o&&(n=!n)}return n}function zc(i){if(!i||typeof i!="object"||!hx.includes(i.kind)||!Array.isArray(i.pts))return null;const t=i.pts.slice(0,is.coords);return t.length%2&&t.pop(),!t.every(e=>typeof e=="number"&&Number.isFinite(e)&&Math.abs(e)<=1e5)||t.length<(i.kind==="mask"?6:4)?null:{kind:i.kind,pts:t.map(e=>Math.round(e*100)/100)}}const px=new Set(["name","size","rot","facing","shape","border","tint","layer","owner","hp","maxHp","hidden","asset","light","lightRange","status"]),mx=new Set(["kind","snap","magnet","measure","unitPx","ox","oy","color","opacity","perUnit","unitLabel","distanceLabel"]);function Gc(i,t){const e={};for(const n of Object.keys(i||{}))t.has(n)&&(e[n]=i[n]);return e}function Hc(i,t){const e={};for(const n of Object.keys(t))e[n]=i[n];return e}const gx={"scene.add":(i,[t={}])=>{const e=t.id||Hi(i,"sc"),n={...Xv(e,t.name),...t,id:e};return i.scenes[e]=n,i.sceneOrder.push(e),i.activeScene||(i.activeScene=e),["scene.del",e]},"scene.del":(i,[t])=>{const e=i.scenes[t];return e?(delete i.scenes[t],i.sceneOrder=i.sceneOrder.filter(n=>n!==t),i.activeScene===t&&(i.activeScene=i.sceneOrder[0]||null),["scene.add",e]):null},"scene.activate":(i,[t])=>{if(!i.scenes[t]||i.activeScene===t)return null;const e=i.activeScene;return i.activeScene=t,["scene.activate",e]},"scene.copy":(i,[t,e])=>{var a;const n=i.scenes[t];if(!n)return null;const s=Wc(i,"sc"),r=JSON.parse(JSON.stringify(n));r.id=s,r.name=typeof e=="string"&&e.trim()?e.trim():`${n.name} (copy)`,r.tokens={},r.tokenOrder=[];for(const o of n.tokenOrder){const l=n.tokens[o];if(!l||((a=i.roster[l.owner])==null?void 0:a.role)===Jn)continue;const c={...JSON.parse(JSON.stringify(l)),id:Wc(i,"tk")};r.tokens[c.id]=c,r.tokenOrder.push(c.id)}return i.scenes[s]=r,i.sceneOrder.splice(i.sceneOrder.indexOf(t)+1,0,s),["scene.del",s]},"scene.go":(i,[t,e=null,n=null])=>{var h;const s=Ee(i),r=i.scenes[t];if(!s||!r||s.id===t)return null;const a=Lo(r),o={};let l=0;for(const d of s.tokenOrder.slice()){const u=s.tokens[d];if(!u||((h=i.roster[u.owner])==null?void 0:h.role)!==Jn)continue;o[d]={x:u.x,y:u.y},delete s.tokens[d],s.tokenOrder.splice(s.tokenOrder.indexOf(d),1);const f=u.x>=a.x0&&u.x<=a.x1&&u.y>=a.y0&&u.y<=a.y1,g=(e==null?void 0:e[d])||(f?null:_x(a,l++));g&&(u.x=g.x,u.y=g.y),r.tokens[d]=u,r.tokenOrder.push(d)}s.fx||(s.fx=qi()),r.fx||(r.fx=qi());const c={blackout:r.fx.blackout,transition:r.fx.transition};return r.fx.blackout=s.fx.blackout,r.fx.transition=s.fx.transition,n&&Object.assign(s.fx,n),i.activeScene=t,["scene.go",s.id,o,c]},"scene.rename":(i,[t,e])=>{const n=i.scenes[t];if(!n||n.name===e)return null;const s=n.name;return n.name=e,["scene.rename",t,s]},"scene.map":(i,[t,e,n,s])=>{const r=i.scenes[t];if(!r)return null;const a=["scene.map",t,r.map,r.artW,r.artH];return r.map=e||null,r.artW=n||0,r.artH=s||0,a},"scene.grid":(i,[t,e])=>{const n=i.scenes[t];if(!n)return null;const s=Gc(e,mx);if(s.kind&&!yu.includes(s.kind)&&delete s.kind,s.snap&&!Qv.includes(s.snap)&&delete s.snap,"magnet"in s&&(s.magnet=Math.min(.25,Math.max(0,+s.magnet||0))),!Object.keys(s).length)return null;const r=Hc(n.grid,s);return Object.assign(n.grid,s),["scene.grid",t,r]},"scene.fx":(i,[t,e])=>{const n=i.scenes[t];if(!n||!e||typeof e!="object")return null;n.fx||(n.fx=qi());const s={};"weather"in e&&(s.weather=gu.includes(e.weather)?e.weather:null),"darkness"in e&&(s.darkness=Math.round(Math.min(1,Math.max(0,+e.darkness||0))*100)/100),"intensity"in e&&(s.intensity=Math.round(Math.min(1,Math.max(.1,+e.intensity||.1))*100)/100),"blackout"in e&&(s.blackout=!!e.blackout),"transition"in e&&(s.transition=fl.includes(e.transition)?e.transition:"fade");const r=Object.keys(s).filter(o=>n.fx[o]!==s[o]);if(!r.length)return null;const a=Object.fromEntries(r.map(o=>[o,n.fx[o]]));for(const o of r)n.fx[o]=s[o];return["scene.fx",t,a]},"block.add":(i,[t,e,n=null])=>{const s=i.scenes[t],r=zc(e);if(!s||!r||(s.blocks||(s.blocks=[]),s.blocks.length>=is.perScene))return null;const a=typeof e.id=="string"&&e.id&&!s.blocks.some(l=>l.id===e.id)?e.id:Hi(i,"bk"),o=Number.isInteger(n)&&n>=0&&n<=s.blocks.length?n:s.blocks.length;return s.blocks.splice(o,0,{id:a,...r}),["block.del",t,a]},"block.del":(i,[t,e])=>{var a;const n=i.scenes[t],s=((a=n==null?void 0:n.blocks)==null?void 0:a.findIndex(o=>o.id===e))??-1;if(s<0)return null;const[r]=n.blocks.splice(s,1);return["block.add",t,r,s]},"block.set":(i,[t,e])=>{const n=i.scenes[t];if(!n||!Array.isArray(e))return null;const s=n.blocks||[],r=[];for(const a of e.slice(0,is.perScene)){const o=zc(a);if(!o)continue;const l=typeof a.id=="string"&&a.id&&!r.some(c=>c.id===a.id)?a.id:Hi(i,"bk");r.push({id:l,...o})}return!s.length&&!r.length?null:(n.blocks=r,["block.set",t,s])},"tok.add":(i,[t={}])=>{const e=Ee(i);if(!e)return null;const n=t.id||Hi(i,"tk"),s=$v(n,t);return s.id=n,Co.includes(s.layer)||(s.layer="token"),e.tokens[n]=s,e.tokenOrder.push(n),["tok.del",n]},"tok.del":(i,[t])=>{const e=Ee(i),n=e==null?void 0:e.tokens[t];if(!n)return null;const s=e.tokenOrder.indexOf(t);return delete e.tokens[t],e.tokenOrder.splice(s,1),["tok.restore",n,s]},"tok.restore":(i,[t,e])=>{const n=Ee(i);return!n||!(t!=null&&t.id)?null:(n.tokens[t.id]=t,n.tokenOrder.splice(Math.min(e??n.tokenOrder.length,n.tokenOrder.length),0,t.id),["tok.del",t.id])},"tok.move":(i,[t,e,n])=>{const s=Ee(i),r=s==null?void 0:s.tokens[t];if(!r||r.x===e&&r.y===n)return null;const a=["tok.move",t,r.x,r.y];return r.x=e,r.y=n,a},"tok.patch":(i,[t,e])=>{const n=Ee(i),s=n==null?void 0:n.tokens[t];if(!s)return null;const r=Gc(e,px);if(r.layer&&!Co.includes(r.layer)&&delete r.layer,"light"in r&&(r.light=!!r.light),"lightRange"in r&&(r.lightRange=xx(r.lightRange)),"status"in r&&(r.status=vu(r.status)),!Object.keys(r).length)return null;const a=Hc(s,r);return Object.assign(s,r),["tok.patch",t,a]},"tok.raise":(i,[t,e=!0])=>{const n=Ee(i);if(!(n!=null&&n.tokens[t]))return null;const s=n.tokenOrder.indexOf(t);if(s<0)return null;const r=n.tokenOrder.length-1;if(e?s===r:s===0)return null;const a=n.tokenOrder.slice();return n.tokenOrder.splice(s,1),e?n.tokenOrder.push(t):n.tokenOrder.unshift(t),["tok.order",a]},"tok.order":(i,[t])=>{const e=Ee(i);if(!e)return null;const n=e.tokenOrder.slice();return e.tokenOrder=t.filter(s=>e.tokens[s]),["tok.order",n]},"asset.add":(i,[t])=>!(t!=null&&t.hash)||i.assets[t.hash]?null:(i.assets[t.hash]=t,["asset.del",t.hash]),"asset.del":(i,[t])=>{const e=i.assets[t];return e?(delete i.assets[t],["asset.add",e]):null},"dice.roll":(i,[t])=>Kv(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"roll",...t}),Oc(i.chat),["dice.drop",t.id]):null,"dice.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(a=>a.id===t);if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["dice.roll",r]},"chat.say":(i,[t])=>Zv(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"msg",id:t.id,by:t.by,text:t.text,at:t.at}),Oc(i.chat),["chat.drop",t.id]):null,"chat.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(a=>a.id===t&&a.kind==="msg");if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["chat.say",r]},"peer.join":(i,[t])=>{if(!(t!=null&&t.peerId))return null;const e=i.roster[t.peerId];return i.roster[t.peerId]=t,e?["peer.join",e]:["peer.part",t.peerId]},"peer.part":(i,[t])=>{const e=i.roster[t];return e?(delete i.roster[t],["peer.join",e]):null}};function vx(i,t){if(!Array.isArray(t)||!t.length)return null;const e=gx[t[0]];if(!e)return null;const n=e(i,t.slice(1));return n&&i.seq++,n}function Fr(i,t,e,n){const s=Ee(i),r=s==null?void 0:s.tokens[t];if(!r)return null;const[a,o]=gl(e,n,s.grid,r.size);return["tok.move",t,Vc(a),Vc(o)]}const Vc=i=>Math.round(i*100)/100;function xx(i){return Math.min(Er,Math.max(1,Math.round(+i)||1))}function _x(i,t){const e=Math.floor((i.x0+i.x1)/2),n=Math.floor((i.y0+i.y1)/2);return{x:e+t%4-2+.5,y:n+Math.floor(t/4)+.5}}function Wc(i,t){const e=s=>!!i.scenes[s]||Object.values(i.scenes).some(r=>r.tokens[s]);let n;do n=Hi(i,t);while(e(n));return n}const Xc=6210279;class vl{constructor({state:t=null,seed:e=null}={}){this.state=t?Io(t):mu(),this.seed=e??vl.newSeed(),this.rng=new jr(this.seed),this.secretRng=new jr(Bl(this.seed,Xc)),this.secrets=[],this.events=new Ld,this.undoStack=[],this.redoStack=[],this.maxUndo=200,this.simTime=0,this.leases=new Map,this.said=0}static newSeed(){return Math.random()*4294967296>>>0}get scene(){return Ee(this.state)}get seq(){return this.state.seq}dispatch(t,{record:e=!0}={}){const n=this.applyOne(t);return n?(e&&(this.undoStack.push(n),this.undoStack.length>this.maxUndo&&this.undoStack.shift(),this.redoStack.length=0),this.events.emit("table.changed",[t[0],this.state.seq]),n):null}batch(t){const e=[];for(const n of t){const s=this.applyOne(n);s&&e.push(s)}return e.length?(this.undoStack.push(["batch",e.reverse()]),this.redoStack.length=0,this.events.emit("table.changed",["batch",this.state.seq]),e):null}applyOne(t){const e=vx(this.state,t);return e&&this.events.emitRemote("op",[t,this.state.seq]),e}load(t){this.state=Io(t),this.secrets=[],this.undoStack.length=0,this.redoStack.length=0,this.leases.clear(),this.events.emitLocal("table.changed",["load",this.state.seq])}undo(){return this.flip(this.undoStack,this.redoStack)}redo(){return this.flip(this.redoStack,this.undoStack)}flip(t,e){const n=t.pop();if(!n)return null;const s=n[0]==="batch"?n[1].map(r=>this.applyOne(r)).filter(Boolean).reverse():this.applyOne(n);return s?(e.push(n[0]==="batch"?["batch",s]:s),this.events.emit("table.changed",[n[0],this.state.seq]),n):null}claim(t,e,n=6){const s=this.leases.get(t);return s&&s.by!==e&&s.until>this.simTime?!1:(this.leases.set(t,{by:e,until:this.simTime+n}),!0)}release(t,e){const n=this.leases.get(t);n&&n.by===e&&this.leases.delete(t)}heldBy(t){const e=this.leases.get(t);return e&&e.until>this.simTime?e.by:null}step(t){if(this.simTime+=t,this.leases.size)for(const[e,n]of this.leases)n.until<=this.simTime&&this.leases.delete(e)}rollDice(t,e,{hidden:n=!1}={}){const s=`r_${this.seed.toString(36)}_${this.rng.count}`,r=Fc(this.rng,t,{id:s,by:e,hidden:n});return this.dispatch(["dice.roll",r],{record:!1}),r}rollSecret(t,e,n){var a;const s=`s_${this.seed.toString(36)}_${this.secretRng.count}`,r={...Fc(this.secretRng,t,{id:s,by:e,hidden:!0}),at:n,after:((a=this.feed().at(-1))==null?void 0:a.id)??null};return this.secrets.push(r),this.secrets.length>ns.keep&&this.secrets.shift(),r}restoreSecrets(t,e){this.secretRng=new jr(Bl(this.seed,Xc)),e&&this.secretRng.setState(e),this.secrets=Array.isArray(t)?t:[]}feedWithSecrets(){const t=this.feed();if(!this.secrets.length)return t;const e=new Set(t.map(r=>r.id)),n=[],s=r=>{for(const a of this.secrets)a.after===r&&n.push({kind:"roll",...a})};for(const r of this.secrets)r.after!==null&&!e.has(r.after)&&n.push({kind:"roll",...r});s(null);for(const r of t)n.push(r),s(r.id);return n}rolls(){return(this.state.chat||[]).filter(t=>t.kind==="roll")}say(t,e,n){const s=_u(e);if(!s)return!1;const r=`m_${this.seed.toString(36)}_${this.said++}`;return this.dispatch(["chat.say",{id:r,by:t,text:s,at:Number.isFinite(n)?n:void 0}],{record:!1}),!0}feed(){return this.state.chat||[]}id(t){return Hi(this.state,t)}snapshot(){return JSON.parse(JSON.stringify(this.state))}}const yx="vtt",Mx=1;let vs=null;function Sx(){return vs||(vs=new Promise((i,t)=>{let e;try{e=indexedDB.open(yx,Mx)}catch(n){t(n);return}e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains("tables")||n.createObjectStore("tables",{keyPath:"id"}),n.objectStoreNames.contains("assets")||n.createObjectStore("assets",{keyPath:"hash"})},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}).catch(i=>(console.warn("[db] storage unavailable; tables will not be kept",i),vs=null,null)),vs)}async function cs(i,t,e,n=null){const s=await Sx();return s?new Promise(r=>{let a;try{a=s.transaction(i,t)}catch{r(n);return}const o=e(a.objectStore(i));a.oncomplete=()=>r(o?o.result:!0),a.onerror=()=>r(n),a.onabort=()=>r(n)}):n}async function bx(){return(await cs("tables","readonly",t=>t.getAll(),[])||[]).map(({id:t,name:e,code:n,savedAt:s,tokens:r})=>({id:t,name:e,code:n,savedAt:s,tokens:r})).sort((t,e)=>e.savedAt-t.savedAt)}function Tu(i){return cs("tables","readonly",t=>t.get(i))}function Au(i){return cs("tables","readwrite",t=>t.put(i),!1)}function wx(i){return cs("tables","readwrite",t=>t.delete(i),!1)}function $c(i,t){return cs("assets","readwrite",e=>e.put({hash:i,blob:t}),!1)}async function Ex(i){const t=await cs("assets","readonly",e=>e.get(i));return(t==null?void 0:t.blob)||null}class Tx{constructor(){this.blobs=new Map,this.bitmaps=new Map,this.pending=new Map}has(t){return this.blobs.has(t)}async put(t){return this.blobs.set(t.hash,t.blob),this.bitmaps.delete(t.hash),$c(t.hash,t.blob),t.hash}async putBytes(t,e){return this.blobs.set(t,e),this.bitmaps.delete(t),$c(t,e),t}async restore(t){const e=[];return await Promise.all(t.map(async n=>{if(this.blobs.has(n))return;const s=await Ex(n);s?this.blobs.set(n,s):e.push(n)})),e}async blob(t){return this.blobs.get(t)||null}async bitmap(t){if(!t)return null;const e=this.bitmaps.get(t);if(e)return e;const n=this.pending.get(t);if(n)return n;const s=this.blobs.get(t);if(!s)return null;const r=createImageBitmap(s,{imageOrientation:"flipY"}).then(a=>(this.bitmaps.set(t,a),this.pending.delete(t),a)).catch(()=>(this.pending.delete(t),null));return this.pending.set(t,r),r}missing(t){const e=new Set;for(const n of Object.values(t.scenes||{})){n.map&&e.add(n.map);for(const s of Object.values(n.tokens||{}))s.asset&&e.add(s.asset)}return[...e].filter(n=>!this.blobs.has(n))}trimBitmaps(t){var n;const e=new Set;for(const s of Object.values(t.scenes||{})){s.map&&e.add(s.map);for(const r of Object.values(s.tokens||{}))r.asset&&e.add(r.asset)}for(const[s,r]of this.bitmaps)e.has(s)||((n=r.close)==null||n.call(r),this.bitmaps.delete(s))}}const Ax=1200,Ns={minPeriod:12,maxPeriod:400,samples:600,scales:[1,2,3],minConfidence:.35};function Rx(i,t,e){const n=new Float32Array(t*e);for(let s=0,r=0;s<n.length;s++,r+=4)n[s]=.299*i[r]+.587*i[r+1]+.114*i[r+2];return n}function Cx(i,t,e,n,s={}){const{samples:r,scale:a=2}={...Ns,...s},o=n===0?t:e,l=n===0?e:t,c=new Float64Array(o),h=Math.max(1,Math.floor(l/r)),d=n===0?(u,f)=>i[f*t+u]:(u,f)=>i[u*t+f];for(let u=0;u<l;u+=h)for(let f=a;f<o-a;f++)c[f]+=2*d(f,u)-d(f-a,u)-d(f+a,u);return c}function Ru(i,t){const e=i.length,s=Math.max(3,t|1)>>1,r=new Float64Array(e);let a=0;for(let c=0;c<Math.min(s,e);c++)a+=i[c];let o=0,l=Math.min(s,e)-1;for(let c=0;c<e;c++){for(;l<Math.min(e-1,c+s);)a+=i[++l];for(;o<Math.max(0,c-s);)a-=i[o++];r[c]=i[c]-a/(l-o+1)}return r}function Px(i,t=1.6){let e=0;for(let r=0;r<i.length;r++)e+=i[r]*i[r];const n=t*Math.sqrt(e/Math.max(1,i.length));if(!(n>0))return i;const s=new Float64Array(i.length);for(let r=0;r<i.length;r++)s[r]=Math.max(-n,Math.min(n,i[r]));return s}function Lx(i,t){const e=i.length-t;if(e<t*2)return 0;let n=0,s=0,r=0;for(let o=0;o<e;o++){const l=i[o],c=i[o+t];n+=l*c,s+=l*l,r+=c*c}const a=Math.sqrt(s*r);return a>0?n/a:0}function Ix(i,t={}){const{minPeriod:e,maxPeriod:n}={...Ns,...t},s=Math.min(n,Math.floor(i.length/3));if(s<=e)return{period:0,score:0,prominence:0};const r=new Float64Array(s+2);for(let M=e;M<=s;M++)r[M]=Lx(i,M);const a=s-e+1,o=Ru(r.subarray(e,s+1),Math.max(11,Math.round(a/6))),l=M=>M>=e&&M<=s?o[M-e]:-1/0;let c=e;for(let M=e;M<=s;M++)l(M)>l(c)&&(c=M);if(l(c)<=0)return{period:0,score:0,prominence:0};let h=0,d=0;for(let M=0;M<a;M++)h+=o[M],d+=o[M]*o[M];const u=h/a,f=Math.sqrt(Math.max(0,d/a-u*u)),g=f>0?(l(c)-u)/f:0,v=l(c-1),p=l(c),m=l(c+1),y=Number.isFinite(v)&&Number.isFinite(m)?v-2*p+m:0,_=y!==0?Math.max(-.5,Math.min(.5,.5*(v-m)/y)):0;return{period:c+_,score:r[c],prominence:g}}function Dx(i,t,e){let n=0,s=0;for(let r=e;r<i.length-1;r+=t)n+=i[Math.round(r)],s++;return s<=2?0:Math.abs(n)/Math.sqrt(s)}function Ux(i,t,e){let n=0,s=0,r=0;for(let l=e;l<i.length-1;l+=t,r++)r%2?s+=i[Math.round(l)]:n+=i[Math.round(l)];const a=Math.min(Math.abs(n),Math.abs(s)),o=Math.max(Math.abs(n),Math.abs(s));return o>0?a/o:0}function kx(i,t,e=.04){let n={period:t,offset:0,score:-1/0};const s=(o,l,c,h,d,u)=>{for(let f=o;f<=l;f+=c){const g=d===null?f:d;for(let v=h;v<g;v+=u){const p=Dx(i,f,v);p>n.score&&(n={period:f,offset:v,score:p})}}};s(t*(1-e),t*(1+e),Math.max(.25,t/150),0,null,1);const r=n.period,a=n.offset;return s(r*.995,r*1.005,Math.max(.01,r/4e3),Math.max(0,a-1.5),a+1.5,.2),n}function Nx(i,t,e,n={}){const s={...Ns,...n},r=Math.min(s.maxPeriod,Math.floor(Math.max(t,e)/8),Math.floor(Math.min(t,e)/2.5)),a={...s,maxPeriod:r},o=[];for(const T of[0,1])for(const A of s.scales){const C=Ru(Cx(i,t,e,T,{...a,scale:A}),r*2),F=Px(C),x=Ix(F,a);x.period>0&&o.push({...x,axis:T,scale:A,sig:F,raw:C})}const l={unitPx:0,ox:0,oy:0,confidence:0,readings:o.length,agreed:0,periods:[]};if(o.length<2)return l;const c=[];for(const T of o)for(const A of[1,2])for(let C=1;C<=6;C++){const F=T.period*A/C;F<s.minPeriod||F>r*2||c.some(x=>Math.abs(x-F)/F<.02)||c.push(F)}if(!c.length)return l;const h=T=>{const A=o.map(F=>kx(F.sig,T,.02)),C=A.reduce((F,x,E)=>F+x.score*Ux(o[E].raw,x.period,x.offset),0);return{period:T,fits:A,total:C}};let d=null;for(const T of c){const A=h(T);(!d||A.total>d.total)&&(d=A)}const u=T=>d.fits.filter((C,F)=>o[F].axis===T).reduce((C,F)=>F.score>C.score?F:C),f=u(0),g=u(1),v=(f.period+g.period)/2,p=T=>[1,2,3,4].some(A=>Math.abs(T.period*A-v)/v<.03||Math.abs(T.period/A-v)/v<.03),m=o.filter(p),y=new Set(m.map(T=>T.axis)),_=(m.length-1)/(o.length-1),M=m.length?1-Math.exp(-(m.reduce((T,A)=>T+A.prominence,0)/m.length)/5):0,L=Math.max(0,_*M*(y.size===2?1:0));return{unitPx:v,ox:(f.offset%v+v)%v,oy:(g.offset%v+v)%v,confidence:L,readings:o.length,agreed:m.length,periods:o.map(T=>Math.round(T.period*100)/100)}}const Fx=1200,qc={tolerance:28,voidLevel:36};function Ox(i,t,e){const n=new Uint8ClampedArray(t*e*3);for(let s=0,r=0;s<t*e*4;s+=4,r+=3)n[r]=i[s],n[r+1]=i[s+1],n[r+2]=i[s+2];return{w:t,h:e,raw:n,soft:Bx(i,t,e)}}function Bx(i,t,e){const n=new Uint8ClampedArray(t*e*3);for(let s=0;s<e;s++)for(let r=0;r<t;r++){let a=0,o=0,l=0,c=0;for(let d=-1;d<=1;d++){const u=s+d;if(!(u<0||u>=e))for(let f=-1;f<=1;f++){const g=r+f;if(g<0||g>=t)continue;const v=(u*t+g)*4;a+=i[v],o+=i[v+1],l+=i[v+2],c++}}const h=(s*t+r)*3;n[h]=a/c,n[h+1]=o/c,n[h+2]=l/c}return n}function zx(i,t,e,n,s=0){const{w:r,h:a,raw:o,soft:l}=i;t=Math.max(0,Math.min(r-1,Math.round(t))),e=Math.max(0,Math.min(a-1,Math.round(e)));const c=(e*r+t)*3,h=l[c],d=l[c+1],u=l[c+2],f=n*n,g=(y,_)=>{const M=y[_]-h,L=y[_+1]-d,T=y[_+2]-u;return M*M+L*L+T*T<=f},v=new Uint8Array(r*a);for(let y=0;y<r*a;y++)v[y]=g(o,y*3)||g(l,y*3)?1:0;const p=s>0?Cu(Pu(v,r,a,s),r,a,s):v,m=new Uint8Array(r*a);return xl(m,r,a,[e*r+t],y=>p[y]===1),m}function Gx(i,t){const{w:e,h:n,raw:s,soft:r}=i,a=new Uint8Array(e*n),o=(h,d)=>.299*h[d]+.587*h[d+1]+.114*h[d+2],l=h=>o(s,h*3)<=t||o(r,h*3)<=t,c=[];for(let h=0;h<e;h++)c.push(h,(n-1)*e+h);for(let h=0;h<n;h++)c.push(h*e,h*e+e-1);return xl(a,e,n,c.filter(l),l),a}function Hx(i,t,e,n){if(n<1)return i;const s=Pu(Cu(i,t,e,n),t,e,n),r=new Uint8Array(t*e),a=[];for(let o=0;o<t;o++)a.push(o,(e-1)*t+o);for(let o=0;o<e;o++)a.push(o*t,o*t+t-1);return xl(r,t,e,a.filter(o=>s[o]),o=>s[o]===1),r}function Cu(i,t,e,n){return Lu(i,t,e,n,!0)}function Pu(i,t,e,n){return Lu(i,t,e,n,!1)}function Lu(i,t,e,n,s){const r=(o,l,c,h)=>{const d=new Uint8Array(t*e);for(let u=0;u<c;u++){let f=0;const g=s?1:0;for(let v=-n;v<=n;v++)f+=v<0||v>=l?g:o[h(u,v)];for(let v=0;v<l;v++){const p=s?f===2*n+1:f>0;d[h(u,v)]=p?1:0;const m=v-n,y=v+n+1;f-=m<0?g:o[h(u,m)],f+=y>=l?g:o[h(u,y)]}}return d},a=r(i,t,e,(o,l)=>o*t+l);return r(a,e,t,(o,l)=>l*t+o)}function xl(i,t,e,n,s){const r=[];for(const a of n)i[a]||(i[a]=1,r.push(a));for(;r.length;){const a=r.pop(),o=a%t,l=c=>{!i[c]&&s(c)&&(i[c]=1,r.push(c))};o>0&&l(a-1),o<t-1&&l(a+1),a>=t&&l(a-t),a<t*(e-1)&&l(a+t)}}function Vx(i,t,e,n){const s=i.slice();for(const r of Fo(s,t,e,0))if(!r.edge&&r.pixels.length<n)for(const a of r.pixels)s[a]=1;for(const r of Fo(s,t,e,1))if(r.pixels.length<n)for(const a of r.pixels)s[a]=0;return s}function Fo(i,t,e,n){const s=new Uint8Array(t*e),r=[],a=[];for(let o=0;o<t*e;o++){if(s[o]||i[o]!==n)continue;const l=[];let c=!1;for(s[o]=1,a.push(o);a.length;){const h=a.pop();l.push(h);const d=h%t,u=(h-d)/t;(d===0||u===0||d===t-1||u===e-1)&&(c=!0);const f=g=>{!s[g]&&i[g]===n&&(s[g]=1,a.push(g))};d>0&&f(h-1),d<t-1&&f(h+1),u>0&&f(h-t),u<e-1&&f(h+t)}r.push({pixels:l,edge:c})}return r}function Wx(i,t,e,n=1){const s=t+1,r=new Map,a=Xx(i,t,e),o=(f,g,v,p,m)=>{const y=g*s+f;let _=r.get(y);_||r.set(y,_=[]),_.push({to:p*s+v,dx:v-f,dy:p-g,lab:m,used:!1})},l=(f,g)=>f>=0&&g>=0&&f<t&&g<e?i[g*t+f]:-1;for(let f=0;f<e;f++)for(let g=0;g<t;g++){if(!i[f*t+g])continue;const v=a[f*t+g];l(g,f-1)===0&&o(g,f,g+1,f,v),l(g+1,f)===0&&o(g+1,f,g+1,f+1,v),l(g,f+1)===0&&o(g+1,f+1,g,f+1,v),l(g-1,f)===0&&o(g,f+1,g,f,v)}const c=new Map;for(const f of r.values())for(const g of f)c.set(g.to,(c.get(g.to)||0)+1);const h=(f,g)=>{const v=[f%s,Math.floor(f/s)];let p=g;for(;;){p.used=!0,v.push(p.to%s,Math.floor(p.to/s));const m=(r.get(p.to)||[]).filter(M=>!M.used);if(!m.length)break;const y=m.find(M=>M.dx===-p.dy&&M.dy===p.dx),_=m.find(M=>M.dx===p.dx&&M.dy===p.dy);p=y||_||m[0]}return v},d=[];for(const[f,g]of r)if(!c.get(f))for(const v of g)v.used||d.push({closed:!1,lab:v.lab,pts:h(f,v)});for(const[f,g]of r)for(const v of g)v.used||d.push({closed:!0,lab:v.lab,pts:h(f,v)});const u=new Set;for(const f of d)(!f.closed||Yc(f.pts)<0)&&u.add(f.lab);return d.map(f=>{const g=f.closed?$x(f.pts,n):Oo(f.pts,n);return{closed:f.closed,solid:f.closed&&!u.has(f.lab)&&Yc(f.pts)>0,pts:g}}).filter(f=>f.pts.length>=(f.closed?8:4))}function Xx(i,t,e){const n=new Int32Array(t*e);let s=0;for(const r of Fo(i,t,e,1)){s++;for(const a of r.pixels)n[a]=s}return n}function Yc(i){let t=0;const e=i.length>>1;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t}function Oo(i,t){const e=i.length>>1;if(e<3)return i.slice();const n=new Uint8Array(e);n[0]=1,n[e-1]=1;const s=[[0,e-1]];for(;s.length;){const[a,o]=s.pop(),l=i[a*2],c=i[a*2+1],h=i[o*2]-l,d=i[o*2+1]-c,u=Math.hypot(h,d);let f=-1,g=t;for(let v=a+1;v<o;v++){const p=u>1e-9?Math.abs((i[v*2]-l)*d-(i[v*2+1]-c)*h)/u:Math.hypot(i[v*2]-l,i[v*2+1]-c);p>g&&(g=p,f=v)}f>=0&&(n[f]=1,s.push([a,f],[f,o]))}const r=[];for(let a=0;a<e;a++)n[a]&&r.push(i[a*2],i[a*2+1]);return r}function $x(i,t){const e=(i.length>>1)-1;if(e<4)return i.slice();let n=0;for(let l=1;l<e;l++)(i[l*2]<i[n*2]||i[l*2]===i[n*2]&&i[l*2+1]<i[n*2+1])&&(n=l);if(n){const l=i.slice(0,e*2);i=l.slice(n*2).concat(l.slice(0,n*2),l.slice(n*2,n*2+2))}let s=1,r=-1;for(let l=1;l<e;l++){const c=Math.hypot(i[l*2]-i[0],i[l*2+1]-i[1]);c>r&&(r=c,s=l)}const a=Oo(i.slice(0,s*2+2),t),o=Oo(i.slice(s*2),t);return a.concat(o.slice(2))}async function Or(i){const t=await crypto.subtle.digest("SHA-256",i);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function Iu(i){var u,f;const t=Ut.assets;if(i.size>t.maxBytes)throw new Error(`${i.name} is ${jc(i.size)}MB — the limit is ${jc(t.maxBytes)}MB`);let e;try{e=await createImageBitmap(i)}catch{throw new Error(`${i.name} is not an image the browser can decode`)}const n=e.width,s=e.height,r=Math.max(n,s);let a=i,o=i.type||"image/png",l=!1;if(r>t.maxEdge){const g=t.maxEdge/r,v=Math.max(1,Math.round(n*g)),p=Math.max(1,Math.round(s*g)),m=await qx(e,v,p,t.quality);(u=e.close)==null||u.call(e),e=await createImageBitmap(m),a=m,o=m.type||"image/webp",l=!0}const c=await a.arrayBuffer(),h=await Or(c),d=await Du(e,n);return(f=e.close)==null||f.call(e),{hash:h,name:i.name,mime:o,w:n,h:s,size:c.byteLength,scaled:l,bytes:c,blob:a,detected:d}}async function qx(i,t,e,n){if(typeof OffscreenCanvas=="function"){const a=new OffscreenCanvas(t,e),o=a.getContext("2d");return o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(i,0,0,t,e),a.convertToBlob({type:"image/webp",quality:n})}const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");return r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(i,0,0,t,e),new Promise((a,o)=>{s.toBlob(l=>l?a(l):o(new Error("could not re-encode the image")),"image/webp",n)})}function jc(i){return(i/1048576).toFixed(1)}async function Yx(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`Could not read ${t} (${e.status})`);const n=await e.blob();return new File([n],t,{type:n.type||"image/jpeg"})}async function jx(){try{const i=await fetch("maps/index.json");if(!i.ok)return[];const{maps:t}=await i.json();return Array.isArray(t)?t:[]}catch{return[]}}async function Du(i,t){const e=Math.min(1,Ax/i.width),n=Math.max(1,Math.round(i.width*e)),s=Math.max(1,Math.round(i.height*e)),r=await Uu(i,n,s);if(!r)return null;const a=Nx(Rx(r,n,s),n,s);if(!a.unitPx)return null;const o=t/n;return{unitPx:a.unitPx*o,ox:a.ox*o,oy:a.oy*o,confidence:a.confidence,agreed:a.agreed,readings:a.readings}}async function Uu(i,t,e){try{const s=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(t,e):Object.assign(document.createElement("canvas"),{width:t,height:e})).getContext("2d",{willReadFrequently:!0});return s.drawImage(i,0,0,t,e),s.getImageData(0,0,t,e).data}catch{return null}}async function Kx(i){var o;let t;try{t=await createImageBitmap(i)}catch{return null}const e=Math.min(1,Fx/t.width),n=Math.max(1,Math.round(t.width*e)),s=Math.max(1,Math.round(t.height*e)),r=await Uu(t,n,s),a=t.width;return(o=t.close)==null||o.call(t),r?{pic:Ox(r,n,s),scale:a/n,imageW:a}:null}function ku(i){const{hash:t,name:e,mime:n,w:s,h:r,size:a,scaled:o}=i;return{hash:t,name:e,mime:n,w:s,h:r,size:a,scaled:o}}function vr(i){return(i.size||1)/2+(i.lightRange??2)}function Zx(i,t,e){const n=i.filter(o=>o.light),s=i.filter(o=>o.owner&&o.owner===t),r=new Set,a=[];for(const o of n){const l=o.owner&&o.owner===t,c=s.some(h=>Math.hypot(h.x-o.x,h.y-o.y)-(h.size||1)/2<=vr(o)&&!No(e,o.x,o.y,h.x,h.y));(l||c)&&(r.add(o.id),a.push(o))}for(;a.length;){const o=a.pop();for(const l of n)r.has(l.id)||Math.hypot(o.x-l.x,o.y-l.y)<=vr(o)+vr(l)&&!No(e,o.x,o.y,l.x,l.y)&&(r.add(l.id),a.push(l))}return r}const Kc=.85;function Jx(i,t,e,n,s){if(t<Kc)return i;const r=i.filter(a=>a.light&&n.has(a.id));return i.filter(a=>{if(a.owner&&a.owner===e)return!0;let o=0;for(const l of r){if(No(s,l.x,l.y,a.x,a.y))continue;const c=vr(l),h=Math.hypot(a.x-l.x,a.y-l.y)-(a.size||1)/2;if(o=Math.max(o,h<=c?1:Math.max(0,1-(h-c)/.6)),o>=1)break}return t*(1-o)<Kc})}const Qn={map:0,grid:.01,bg:.02,dragOrigin:.03,token:.04,ruler:.07,gm:.06,ghost:.08,ui:.1};function Yi(i){return-i}function Nu(i){return-i}function Qx(i,t,e){return(Qn[i]??Qn.token)+t*e}class t_{constructor(){this.camera=new ol(-1,1,1,-1,.01,100),this.camera.position.set(0,0,10),this.viewUnits=Ut.camera.viewUnits,this.aspect=1,this.bounds=null}resize(t,e){this.aspect=e>0?t/e:1,this.apply()}apply(){const t=this.viewUnits/2,e=t*this.aspect,n=this.camera;n.left=-e,n.right=e,n.top=t,n.bottom=-t,n.updateProjectionMatrix()}toWorld(t,e,n=new Bt){const s=this.viewUnits/2;return n.set(this.camera.position.x+t*s*this.aspect,this.camera.position.y+e*s)}toUnits(t,e,n=new Bt){return this.toWorld(t,e,n),n.y=Nu(n.y),n}toNdc(t,e,n=new Bt){const s=this.viewUnits/2;return n.set((t-this.camera.position.x)/(s*this.aspect),(e-this.camera.position.y)/s)}pxPerUnit(t){return t/this.viewUnits}panBy(t,e){this.camera.position.x+=t,this.camera.position.y+=e,this.clamp()}zoomAt(t,e,n){const s=Ut.camera,r=this.toWorld(e,n,e_);this.viewUnits=Math.min(s.maxViewUnits,Math.max(s.minViewUnits,this.viewUnits*t)),this.apply();const a=this.toWorld(e,n,n_);this.camera.position.x+=r.x-a.x,this.camera.position.y+=r.y-a.y,this.clamp()}frame({x0:t,y0:e,x1:n,y1:s},r=1.04,a=0){const o=Math.max(.001,n-t),l=Math.max(.001,s-e),c=Math.max(.5,1-a),h=Ut.camera,d=Math.max(l,o/Math.max(.001,this.aspect*c))*r;this.viewUnits=Math.min(h.maxViewUnits,Math.max(h.minViewUnits,d)),this.camera.position.x=(t+n)/2-(1-c)/2*this.viewUnits*this.aspect,this.camera.position.y=-(e+s)/2,this.apply(),this.clamp()}clamp(){if(!this.bounds)return;const t=Ut.camera.panMargin,e=this.viewUnits/2,n=e*this.aspect,s=this.bounds,r=s.x0-t+n,a=s.x1+t-n,o=-s.y1-t+e,l=-s.y0+t-e,c=this.camera.position;c.x=r>a?(s.x0+s.x1)/2:Math.min(a,Math.max(r,c.x)),c.y=o>l?-(s.y0+s.y1)/2:Math.min(l,Math.max(o,c.y))}}const e_=new Bt,n_=new Bt;class i_{constructor(t,e){this.renderer=e,this.material=new xi({color:16777215,transparent:!1}),this.mesh=new be(new xn(1,1),this.material),this.mesh.position.z=Qn.map,this.mesh.visible=!1,t.add(this.mesh),this.hash=null,this.texture=null,this.blank=new be(new xn(1,1),new xi({color:1712671})),this.blank.position.z=Qn.map,t.add(this.blank)}update(t,e,n){const s=(t==null?void 0:t.map)||null;s!==this.hash&&(this.hash=s,this.setTexture(null),this.loading=!1),s&&!this.texture&&!this.loading&&n.has(s)&&(this.loading=!0,n.bitmap(s).then(c=>{this.hash===s&&(c?this.setTexture(c):this.loading="failed")}));const r=Math.max(.001,e.x1-e.x0),a=Math.max(.001,e.y1-e.y0),o=(e.x0+e.x1)/2,l=-(e.y0+e.y1)/2;for(const c of[this.mesh,this.blank])c.scale.set(r,a,1),c.position.x=o,c.position.y=l;this.mesh.visible=!!this.texture,this.blank.visible=!this.texture}setTexture(t){var n;if((n=this.texture)==null||n.dispose(),!t){this.texture=null,this.material.map=null,this.material.needsUpdate=!0;return}const e=new Ae(t);e.colorSpace=Be,e.flipY=!1,e.generateMipmaps=!0,e.minFilter=Ln,e.magFilter=je,e.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),e.needsUpdate=!0,this.texture=e,this.material.map=e,this.material.needsUpdate=!0}dispose(){this.setTexture(null),this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent(),this.blank.geometry.dispose(),this.blank.material.dispose(),this.blank.removeFromParent()}}const s_={[pl]:0,[ml]:1,[ks]:2,[ls]:3},r_=`
  varying vec2 vUnit;
  void main() {
    // The quad is placed and scaled in world space; unit space is that with y
    // flipped, which is the one conversion this whole view agrees on.
    vec4 world = modelMatrix * vec4(position, 1.0);
    vUnit = vec2(world.x, -world.y);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,a_=`
  /*
   * three converts colours and sRGB textures to linear on the way *in* — a
   * MeshBasicMaterial then converts back on the way out, but a ShaderMaterial
   * is on its own. Without this the whole scene is written to an sRGB
   * framebuffer still linear, which darkens every colour twice over and made a
   * mid-green token look nearly black.
   */
  precision highp float;
  varying vec2 vUnit;

  uniform vec3  uColor;
  uniform float uOpacity;
  uniform float uWidth;     // half-width, in device pixels
  uniform int   uKind;

  // A hex's inradius in unit space is fixed at 0.5, so one unit is the
  // centre-to-centre step across a flat edge — the same definition grid.js uses.
  const float HEX_IN = 0.5;
  const float HEX_R  = HEX_IN / 0.86602540378;   // inradius -> circumradius
  const float SQ3    = 1.73205080757;

  /** Nearest hex centre, by rounding in cube space. */
  vec2 hexCenter(vec2 p) {
    float q = (SQ3 / 3.0 * p.x - p.y / 3.0) / HEX_R;
    float r = (2.0 / 3.0 * p.y) / HEX_R;
    float s = -q - r;
    vec3 ri = vec3(floor(q + 0.5), floor(r + 0.5), floor(s + 0.5));
    vec3 d  = abs(ri - vec3(q, r, s));
    // Discard whichever coordinate moved furthest, so the three still sum to zero.
    if (d.x > d.y && d.x > d.z)      ri.x = -ri.y - ri.z;
    else if (d.y > d.z)              ri.y = -ri.x - ri.z;
    return vec2(
      HEX_R * (SQ3 * ri.x + SQ3 / 2.0 * ri.y),
      HEX_R * (1.5 * ri.y)
    );
  }

  void main() {
    if (uKind == 3) discard;

    // Screen-space scale of one unit. The gradient of every distance below has
    // magnitude 1 in unit space, so this is the right width for all of them.
    float fw = max(fwidth(vUnit.x), fwidth(vUnit.y));
    float dist;

    if (uKind == 0) {
      // Distance to the nearest integer line, on whichever axis is closer.
      vec2 d = 0.5 - abs(fract(vUnit) - 0.5);
      dist = min(d.x, d.y);
    } else {
      // Flat-top is pointy-top with the axes swapped, which is the standard trick
      // and saves carrying two sets of constants that can drift apart.
      vec2 p = (uKind == 2) ? vUnit.yx : vUnit;
      vec2 l = p - hexCenter(p);
      // A hexagon is the intersection of three slabs. Distance to its boundary is
      // the inradius less the furthest of the three projections.
      float m = max(
        abs(l.x),
        max(abs(dot(l, vec2(0.5, 0.86602540378))),
            abs(dot(l, vec2(-0.5, 0.86602540378))))
      );
      dist = HEX_IN - m;
    }

    float a = 1.0 - smoothstep(0.0, fw * uWidth, dist);
    if (a <= 0.002) discard;
    gl_FragColor = vec4(uColor, a * uOpacity);
    #include <colorspace_fragment>
  }
`;class o_{constructor(t){this.material=new un({vertexShader:r_,fragmentShader:a_,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Vt(Ut.grid.color)},uOpacity:{value:Ut.grid.opacity},uWidth:{value:Ut.grid.lineWidth},uKind:{value:0}}}),this.mesh=new be(new xn(1,1),this.material),this.mesh.position.z=Qn.grid,this.mesh.visible=!1,t.add(this.mesh)}update(t,e){if(!t||t.grid.kind===ls){this.mesh.visible=!1;return}const n=t.grid,s=this.material.uniforms;s.uKind.value=s_[n.kind]??0,s.uColor.value.setHex(n.color??Ut.grid.color),s.uOpacity.value=n.opacity??Ut.grid.opacity,s.uWidth.value=Ut.grid.lineWidth;const r=Math.max(.001,e.x1-e.x0),a=Math.max(.001,e.y1-e.y0);this.mesh.scale.set(r,a,1),this.mesh.position.x=(e.x0+e.x1)/2,this.mesh.position.y=-(e.y0+e.y1)/2,this.mesh.visible=!0}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent()}}const _l={downed:{label:"Downed",color:"#ffcc80",svg:'<path d="M12 4v10M7.5 9.5 12 14l4.5-4.5"/><path d="M5 19.5h14"/>'},dead:{label:"Dead",color:"#ff8a80",svg:'<path d="M12 3.5a7 7 0 0 0-7 7c0 2.4 1.2 4.1 3 5.2v3.8h8v-3.8c1.8-1.1 3-2.8 3-5.2a7 7 0 0 0-7-7z"/><circle cx="9.3" cy="11" r="1.4" fill="currentColor"/><circle cx="14.7" cy="11" r="1.4" fill="currentColor"/><path d="M10.5 19.5v-2.5M13.5 19.5v-2.5"/>'},poisoned:{label:"Poisoned",color:"#aed581",svg:'<path d="M10 3.5h4M10.5 3.5v5.2L6 17a2.3 2.3 0 0 0 2 3.5h8a2.3 2.3 0 0 0 2-3.5l-4.5-8.3V3.5"/><path d="M8 15h8"/>'},stunned:{label:"Stunned",color:"#ffe082",svg:'<path d="M12 12a1.5 1.5 0 1 1 1.5 1.5 3 3 0 1 1-3-3 4.5 4.5 0 1 1 4.5 4.5 6 6 0 1 1-6-6"/>'},asleep:{label:"Asleep",color:"#90caf9",svg:'<path d="M4.5 6.5h5l-5 6h5M13 11.5h6.5l-6.5 8h6.5"/>'},prone:{label:"Prone",color:"#d7ccc8",svg:'<circle cx="5.5" cy="12.5" r="2"/><path d="M8.5 13h11M3 17.5h18M11 13l2-3"/>'},restrained:{label:"Restrained",color:"#b0bec5",svg:'<rect x="2.5" y="9" width="10.5" height="6" rx="3"/><rect x="11" y="9" width="10.5" height="6" rx="3"/>'},blinded:{label:"Blinded",color:"#cfd8dc",svg:'<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/><path d="M4 4l16 16"/>'},frightened:{label:"Frightened",color:"#ce93d8",svg:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5.5M12 16.4v.1"/>'},charmed:{label:"Charmed",color:"#f48fb1",svg:'<path d="M12 19.5s-7-4.4-7-9.7a3.9 3.9 0 0 1 7-2.4 3.9 3.9 0 0 1 7 2.4c0 5.3-7 9.7-7 9.7z"/>'},burning:{label:"Burning",color:"#ffab40",svg:'<path d="M12 3c1 3.2 4.5 5.2 4.5 9.5a4.5 4.5 0 0 1-9 0c0-2.2 1-3.6 2.2-4.6 0 2 .9 3.2 2.1 3.2 0-3.3-.9-5.4.2-8.1z"/>'},bleeding:{label:"Bleeding",color:"#ef5350",svg:'<path d="M12 3.5c3 4.4 6 7.4 6 11a6 6 0 0 1-12 0c0-3.6 3-6.6 6-11z" fill="currentColor" fill-opacity="0.35"/>'},concentrating:{label:"Concentrating",color:"#80deea",svg:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>'},invisible:{label:"Invisible",color:"#eeeeee",svg:'<path d="M6 20V10.5a6 6 0 0 1 12 0V20l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5z" stroke-dasharray="2.2 2"/><circle cx="10" cy="11" r=".9" fill="currentColor"/><circle cx="14" cy="11" r=".9" fill="currentColor"/>'}};function Fu(i){const t=_l[i];return t?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color:${t.color}">${t.svg}</svg>`:""}function l_(i){return i!=null&&i.includes("dead")?{grey:1,dim:.5}:i!=null&&i.includes("downed")?{grey:.6,dim:.75}:{grey:0,dim:1}}const c_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,h_=`
  precision highp float;
  varying vec2 vUv;

  uniform sampler2D uMap;
  uniform float uHasMap;
  uniform vec3  uTint;
  uniform vec3  uBorder;
  uniform float uRing;       // ring thickness, as a fraction of the radius
  uniform float uSelected;
  uniform float uHover;
  uniform float uSpeak;      // 0..1: its player is talking
  uniform float uGrey;       // colour taken out: down, or dead
  uniform float uDim;        // light left
  uniform float uShape;      // 0 circle, 1 square
  uniform float uAlpha;      // the body
  uniform float uRingAlpha;  // the border, which a ghost leans on
  uniform float uRadius;     // the token's radius inside this padded quad
  uniform vec2  uFit;        // aspect correction, so art is covered not squashed

  void main() {
    vec2 p = vUv * 2.0 - 1.0;

    // Distance from the centre under the shape's own metric: a circle measures by
    // length, a square by the larger axis. One expression, both tokens.
    float d = mix(length(p), max(abs(p.x), abs(p.y)), uShape);

    float aa = max(fwidth(d), 1e-5);
    float outer = uRadius;
    float inner = uRadius * (1.0 - uRing);

    float body = 1.0 - smoothstep(inner - aa, inner + aa, d);
    float disc = 1.0 - smoothstep(outer - aa, outer + aa, d);
    float ring = clamp(disc - body, 0.0, 1.0);

    // Art, fitted so the short edge fills the token and the long edge is cropped.
    vec2 uv = (p / outer) * uFit * 0.5 + 0.5;
    vec4 art = texture2D(uMap, uv);
    // With no art, the token is a disc of its own border colour. A near-black
    // default reads as a hole in the map; "the red one" reads as a token.
    vec3 fill = mix(uBorder * 0.55, art.rgb * uTint, uHasMap * art.a);
    // Down or dead: the colour drains out of it, art and all.
    fill = mix(fill, vec3(dot(fill, vec3(0.299, 0.587, 0.114))), uGrey) * uDim;
    float fillA = mix(1.0, max(art.a, 0.0), uHasMap);

    // Hover lifts the token's own ring a little; selection is drawn as a separate
    // outline below. Two different signals, so "the cursor is over this" never
    // reads as "this is selected".
    float lift = max(max(uSelected * 0.45, uHover * 0.4), uSpeak * 0.6);
    vec3 border = mix(uBorder, mix(uBorder, vec3(1.0), 0.55), lift);

    vec3 rgb = mix(fill, border, ring);
    float a = max(body * fillA * uAlpha, ring * uRingAlpha);

    /**
     * Selection is a thin outline standing off the token, not a glow around it.
     *
     * It was a soft white halo, which was legible and far too loud: a token left
     * selected after being moved went on shining like a light source, and reads
     * as the table still doing something. An outline says "this one" just as
     * clearly and then stops talking.
     */
    float selIn = outer + 0.055;
    float selOut = selIn + 0.045;
    float band = smoothstep(selIn - aa, selIn + aa, d) - smoothstep(selOut - aa, selOut + aa, d);
    // One mark, two strengths: hover is the same outline at about a third of the
    // weight. A hierarchy of one thing is easier to read than two different
    // effects competing to mean different states.
    float mark = max(uSelected, uHover * 0.42);
    rgb = mix(rgb, vec3(0.93, 0.97, 0.95), band * mark);
    a = max(a, band * mark * 0.92);

    // Talking: a soft glow in the player's own colour, out from the ring —
    // brightest against it, gone a little way off. Under the selection mark,
    // which still has to be read through it.
    float halo = (1.0 - smoothstep(outer, outer + 0.2, d)) * step(outer - aa, d);
    float glow = halo * halo * uSpeak;
    vec3 glowRgb = mix(uBorder, vec3(1.0), 0.35);
    rgb = mix(rgb, glowRgb, glow * (1.0 - band * mark));
    a = max(a, glow * 0.85);

    if (a <= 0.004) discard;
    gl_FragColor = vec4(rgb, a);
    // See the note in grid-layer.js: a ShaderMaterial does not get three's
    // output conversion for free, and without it every colour darkens twice.
    #include <colorspace_fragment>
  }
`,Zc=1.3,u_=new xn(1,1),ln=new k,d_=Ou([0,.34],[0,-.34],[1,0]),f_=Ou([-.09,.46],[-.09,-.46],[1.16,0]);function Ou(i,t,e){const n=new yn;return n.setAttribute("position",new He([i[0],i[1],0,t[0],t[1],0,e[0],e[1],0],3)),n}class Cs extends Hv{constructor(t){super(t,{rotates:!1}),this.material=new un({vertexShader:c_,fragmentShader:h_,transparent:!0,depthWrite:!1,uniforms:{uMap:{value:null},uHasMap:{value:0},uTint:{value:new Vt(16777215)},uBorder:{value:new Vt(Ut.tokens.defaultBorder)},uRing:{value:Ut.tokens.ring},uSelected:{value:0},uHover:{value:0},uSpeak:{value:0},uGrey:{value:0},uDim:{value:1},uShape:{value:0},uAlpha:{value:1},uRingAlpha:{value:1},uRadius:{value:1/Zc},uFit:{value:new Bt(1,1)}}}),this.mesh=new be(u_,this.material),this.root.add(this.mesh),this.arrowEdge=new be(f_,new xi({color:659984,transparent:!0,depthWrite:!1})),this.arrow=new be(d_,new xi({color:Ut.tokens.defaultBorder,transparent:!0,depthWrite:!1})),this.arrowEdge.visible=!1,this.arrow.visible=!1,this.root.add(this.arrowEdge,this.arrow),this.hash=null,this.texture=null,this.placed=!1,this.from=new Bt,this.to=new Bt,this.t=0,this.dur=0}get sliding(){return this.t<this.dur}static worldOf(t,e,n=ln){return n.set(t.x,Yi(t.y),e)}sync(t,e,n){if(Cs.worldOf(t,n.z,ln),!this.placed)return this.snap(t,e,n);if(ln.x!==this.to.x||ln.y!==this.to.y){const s=Ut.tokens.slide;this.from.set(this.root.position.x,this.root.position.y),this.to.set(ln.x,ln.y);const r=this.from.distanceTo(this.to);this.t=0,this.dur=r<1e-4?0:Math.min(s.max,Math.max(s.min,r/s.speed))}if(this.t<this.dur){this.t=Math.min(this.dur,this.t+e);const s=p_(this.t/this.dur);this.root.position.set(this.from.x+(this.to.x-this.from.x)*s,this.from.y+(this.to.y-this.from.y)*s,n.z)}else this.root.position.copy(ln);this.animate(e,t),this.paint(t,n)}snap(t,e,n){Cs.worldOf(t,n.z,ln),this.root.position.copy(ln),this.to.set(ln.x,ln.y),this.t=this.dur=0,this.placed=!0,this.animate(e,t),this.paint(t,n)}animate(t){const e=this.speakTarget||0,n=this.speak||0,s=e>n?14:7;this.speak=n+(e-n)*Math.min(1,t*s),Math.abs(e-this.speak)<.01&&(this.speak=e)}paint(t,e){const n=this.material.uniforms;if((t.asset||null)!==this.hash&&(this.hash=t.asset||null,this.setTexture(null,1,1),this.loading=!1),this.hash&&!this.loading&&!this.texture&&e.library.has(this.hash)){const o=this.hash;this.loading=!0,e.library.bitmap(o).then(l=>{this.hash===o&&(l?this.setTexture(l,l.width,l.height):this.loading="failed")})}const s=Math.max(.05,t.size)*Zc;this.mesh.scale.set(s,s,1),this.mesh.rotation.z=-(t.rot||0),this.placeArrow(t,e),n.uTint.value.setHex(t.tint??16777215),n.uBorder.value.setHex(t.border??Ut.tokens.defaultBorder),n.uRing.value=Ut.tokens.ring,n.uShape.value=t.shape==="square"?1:0;const r=l_(t.status);n.uGrey.value=r.grey,n.uDim.value=r.dim,n.uSelected.value=e.selected?1:0,n.uHover.value=e.hovered?1:0,this.speakTarget=e.speaking?1:0,n.uSpeak.value=this.speak||0;const a=t.hidden?.45:1;n.uAlpha.value=a*(e.alpha??1),n.uRingAlpha.value=a*(e.ringAlpha??e.alpha??1)}placeArrow(t,e){const n=typeof t.facing=="number"&&Number.isFinite(t.facing);if(this.arrow.visible=n,this.arrowEdge.visible=n,!n)return;const s=Ut.tokens.arrow,r=Math.max(.05,t.size),a=r*s.length,o=r/2+r*s.gap,l=-t.facing,c=Math.cos(l)*o,h=Math.sin(l)*o,d=(t.hidden?.45:1)*(e.alpha??1);for(const[u,f,g]of[[this.arrowEdge,a,d*s.edgeAlpha],[this.arrow,a,d*s.alpha]])u.position.set(c,h,.001),u.rotation.z=l,u.scale.set(f,f,1),u.material.opacity=g;this.arrow.material.color.setHex(t.border??Ut.tokens.defaultBorder)}setTexture(t,e,n){var o;(o=this.texture)==null||o.dispose();const s=this.material.uniforms;if(!t){this.texture=null,s.uMap.value=null,s.uHasMap.value=0;return}const r=new Ae(t);r.colorSpace=Be,r.flipY=!1,r.generateMipmaps=!0,r.minFilter=Ln,r.magFilter=je,r.needsUpdate=!0,this.texture=r,s.uMap.value=r,s.uHasMap.value=1;const a=e/Math.max(1,n);s.uFit.value.set(Math.min(1,1/a),Math.min(1,a))}dispose(){var t;(t=this.texture)==null||t.dispose(),this.material.dispose(),this.arrow.material.dispose(),this.arrowEdge.material.dispose(),super.dispose()}}function p_(i){return i<.5?4*i*i*i:1-(-2*i+2)**3/2}const m_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,g_=`
  precision highp float;
  varying vec2 vUv;

  uniform vec3  uColor;
  uniform float uLenPx;    // the segment's length on screen
  uniform float uDashPx;   // one dash plus one gap
  uniform float uDuty;     // how much of that is dash
  uniform float uAlpha;

  void main() {
    float along = vUv.x * uLenPx;
    if (fract(along / uDashPx) > uDuty) discard;

    // Soften the long edges so the line is not a hard-edged bar at any zoom.
    float edge = smoothstep(0.0, 0.35, min(vUv.y, 1.0 - vUv.y) * 2.0);
    gl_FragColor = vec4(uColor, uAlpha * edge);
    #include <colorspace_fragment>
  }
`,v_=new xn(1,1);class x_{constructor(t){this.material=new un({vertexShader:m_,fragmentShader:g_,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Vt(Ut.ruler.color)},uLenPx:{value:1},uDashPx:{value:Ut.ruler.dashPx},uDuty:{value:Ut.ruler.duty},uAlpha:{value:Ut.ruler.alpha}}}),this.mesh=new be(v_,this.material),this.mesh.position.z=Qn.ruler,t.add(this.mesh)}set(t,e,n,s,r){const a=t,o=Yi(e),l=n,c=Yi(s),h=l-a,d=c-o,u=Math.hypot(h,d);if(this.mesh.visible=u*r>2,!this.mesh.visible)return;const f=Ut.ruler;this.mesh.position.set(a+h/2,o+d/2,Qn.ruler),this.mesh.rotation.z=Math.atan2(d,h),this.mesh.scale.set(u,f.widthPx/r,1);const g=this.material.uniforms;g.uLenPx.value=u*r,g.uColor.value.setHex(f.color),g.uDashPx.value=f.dashPx,g.uDuty.value=f.duty,g.uAlpha.value=f.alpha}dispose(){this.material.dispose(),this.mesh.removeFromParent()}}const __="#f0a24a",y_="rgba(240, 162, 74, 0.22)",M_="#ffd28a",Jc="#ff6b5e",Ra="#6fd3ff";class S_{constructor(t,e){this.cam=e,this.rect={width:1,height:1},this.canvas=document.createElement("canvas"),this.canvas.id="walls",this.g=this.canvas.getContext("2d"),t.insertBefore(this.canvas,t.querySelector("#overlay")),this.shown=!1,this.draft=null,this.doomed=null,this.preview=null,this.drew=!1}resize(t){this.rect=t;const e=Math.min(1.5,window.devicePixelRatio||1);this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e),this.g.setTransform(e,0,0,e,0,0)}frame(t){const e=this.g,{width:n,height:s}=this.rect;if(!this.shown){this.drew&&(e.clearRect(0,0,n,s),this.drew=!1);return}this.drew=!0,e.clearRect(0,0,n,s),e.lineJoin="round",e.lineCap="round";for(const a of(t==null?void 0:t.blocks)||[])this.drawBlock(a,a.id===this.doomed?Jc:__);for(const a of this.preview||[])this.drawBlock(a,Ra,!0);const r=this.draft;if(r&&r.pts.length){const a=r.cursor?[...r.pts,r.cursor.x,r.cursor.y]:r.pts;this.drawBlock({kind:r.kind,pts:a},M_,!0)}}drawBlock(t,e,n=!1){const s=this.g,r=t.pts,a=r.length>>1;if(!(a<2&&!n)){s.beginPath();for(let o=0;o<a;o++){const l=this.toScreen(r[o*2],r[o*2+1]);o?s.lineTo(l.x,l.y):s.moveTo(l.x,l.y)}if(t.kind==="mask"&&(s.closePath(),s.fillStyle=e===Jc?"rgba(255, 107, 94, 0.3)":e===Ra?"rgba(111, 211, 255, 0.22)":y_,s.fill("evenodd")),s.strokeStyle="rgba(0, 0, 0, 0.55)",s.lineWidth=5,s.setLineDash([]),s.stroke(),s.strokeStyle=e,s.lineWidth=2.5,n&&s.setLineDash([7,5]),s.stroke(),s.setLineDash([]),t.kind==="wall"&&e!==Ra){s.fillStyle=e;for(let o=0;o<a;o++){const l=this.toScreen(r[o*2],r[o*2+1]);s.beginPath(),s.arc(l.x,l.y,3,0,Math.PI*2),s.fill()}}}}toScreen(t,e){const n=this.cam.toNdc(t,-e);return{x:(n.x*.5+.5)*this.rect.width,y:(1-(n.y*.5+.5))*this.rect.height}}}const Fi={fontPerRadius:.36,minFont:9,maxFont:13,span:{circle:1.2,square:1.45},minRadius:11},b_="http://www.w3.org/2000/svg";let w_=0;function xs(i,t){const e=document.createElementNS(b_,i);for(const[n,s]of Object.entries(t))e.setAttribute(n,s);return e}class E_{constructor(t,{onSettings:e,canEdit:n=()=>!0}={}){this.el=t,this.canEdit=n,this.gear=document.createElement("button"),this.gear.type="button",this.gear.className="token-gear",this.gear.title="Token settings",this.gear.setAttribute("aria-label","Token settings"),this.gear.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/><circle cx="12" cy="12" r="6.5"/></svg>',this.gear.hidden=!0,this.gear.addEventListener("pointerenter",()=>{this.onGear=!0}),this.gear.addEventListener("pointerleave",()=>{this.onGear=!1}),this.gear.addEventListener("click",()=>{this.gearFor&&(e==null||e(this.gearFor))}),this.el.appendChild(this.gear),this.gearFor=null,this.gearUntil=0,this.plates=new Map,this.rulers=new Map}sync(t,e){this.lastCtx=e;const{camera:n,rect:s}=e,r=n.pxPerUnit(s.height),a=new Set;for(const o of t){a.add(o.id);const l=this.plates.get(o.id)||this.createPlate(o.id),c=o.maxHp>0,h=n.toNdc(o.x,Yi(o.y)),d=(h.x*.5+.5)*s.width,u=(1-(h.y*.5+.5))*s.height,f=Math.max(.05,o.size)/2*r,g=d>-160&&d<s.width+160&&u>-120&&u<s.height+160,v=this.syncLabel(l,o,d,u,f,g);if(this.syncStatus(l,o,d,u,f,g,r),l.last.hp!==o.hp||l.last.maxHp!==o.maxHp){if(l.bar.hidden=!c,c){const m=or(o.hp/o.maxHp,0,1);l.fill.style.width=`${(m*100).toFixed(1)}%`,l.fill.dataset.state=m>.5?"ok":m>.2?"hurt":"down",l.bar.title=`${o.hp} / ${o.maxHp}`}l.last.hp=o.hp,l.last.maxHp=o.maxHp}if(!c){l.root.hidden=!0;continue}const p=Math.max(f,v)+4;if(l.root.hidden=!g,g){const m=or(r/110,.62,1.25);l.root.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(u+p)}px, 0) scale(${m.toFixed(3)}) translateX(-50%)`,l.root.style.setProperty("--plate-width",`${Math.max(48,o.size*r*1.15).toFixed(0)}px`)}}for(const[o,l]of this.plates)a.has(o)||(l.root.remove(),l.label.svg.remove(),l.badges.remove(),this.plates.delete(o));this.syncGear(t,e,r),this.syncRulers(e)}syncGear(t,{camera:e,rect:n,selectedId:s,hoveredId:r,dragging:a},o){const l=performance.now(),c=r&&t.find(p=>p.id===r&&this.canEdit(p));let h=null;c?(h=c.id,this.gearUntil=l+700):this.gearFor&&(this.onGear||l<this.gearUntil)?h=this.gearFor:s&&(h=s);const d=h&&!a?t.find(p=>p.id===h&&this.canEdit(p)):null;if(this.gearFor=(d==null?void 0:d.id)||null,!d){this.gear.hidden=!0;return}const u=e.toNdc(d.x,Yi(d.y)),f=(u.x*.5+.5)*n.width,g=(1-(u.y*.5+.5))*n.height,v=Math.max(.05,d.size)/2*o*Math.SQRT1_2;this.gear.hidden=!1,this.gear.style.transform=`translate3d(${Math.round(f+v+7)}px, ${Math.round(g-v-7)}px, 0) translate(-50%, -50%)`}syncStatus(t,e,n,s,r,a,o){const l=e.status||[],c=l.join();if(t.last.status!==c&&(t.badges.replaceChildren(...l.map(d=>{var f;const u=document.createElement("span");return u.className="status-badge",u.dataset.status=d,u.innerHTML=Fu(d),u.title=((f=_l[d])==null?void 0:f.label)||d,u})),t.last.status=c),t.badges.hidden=!l.length||!a,t.badges.hidden)return;const h=or(o/110,.62,1.25);t.badges.style.transform=`translate3d(${Math.round(n)}px, ${Math.round(s-r*.82)}px, 0) scale(${h.toFixed(3)}) translate(-50%, -100%)`}syncLabel(t,e,n,s,r,a){const{label:o}=t;if(!e.name||!a||r<Fi.minRadius)return o.svg.style.display="none",0;o.svg.style.display="";const l=r/100,c=or(r*Fi.fontPerRadius,Fi.minFont,Fi.maxFont),h=Math.round(c/l),d=typeof e.facing=="number"&&Math.sin(e.facing)>.5,u=e.shape==="square",f=`${e.name}|${h}|${d?"t":"b"}|${u?"s":"c"}`;return o.key!==f&&(o.key=f,this.layoutLabel(o,e.name,h,d,u)),o.svg.style.transform=`translate3d(${n.toFixed(1)}px, ${s.toFixed(1)}px, 0) scale(${l.toFixed(4)}) translate(-100px, -100px)`,d?0:o.reach*l}layoutLabel(t,e,n,s,r){const a=100*(1-Ut.tokens.ring/2);let o,l,c;if(r){const g=s?-a:a,v=a*Fi.span.square;o=`M ${-v} ${g} L ${v} ${g}`,l=2*v,c=l-n}else{const g=s?-1:1;o=`M 0 ${-g*a} A ${a} ${a} 0 1 ${s?1:0} 0 ${g*a} A ${a} ${a} 0 1 ${s?1:0} 0 ${-g*a}`,l=2*Math.PI*a,c=Math.PI*a*Fi.span.circle-n}t.path.setAttribute("d",o),t.text.setAttribute("font-size",n),t.textPath.textContent=e;let h=e;for(;h.length>1&&t.text.getComputedTextLength()>c;)h=h.slice(0,-1),t.textPath.textContent=`${h.trimEnd()}…`;const d=t.text.getComputedTextLength(),u=n*.45,f=Math.min(l,d+u*2);t.path.setAttribute("stroke-width",(n*1.45).toFixed(1)),t.path.setAttribute("stroke-dasharray",`${f.toFixed(1)} ${(l*2).toFixed(1)}`),t.path.setAttribute("stroke-dashoffset",(-(l-f)/2).toFixed(1)),t.svg.setAttribute("aria-label",e),t.reach=a+n*.75}syncRulers({camera:t,rect:e,rulers:n=[]}){const s=new Set;for(const r of n){s.add(r.id);let a=this.rulers.get(r.id);a||(a=document.createElement("div"),a.className="ruler",this.el.appendChild(a),this.rulers.set(r.id,a)),a.textContent!==r.text&&(a.textContent=r.text);const o=t.toNdc((r.ax+r.bx)/2,Yi((r.ay+r.by)/2)),l=(o.x*.5+.5)*e.width,c=(1-(o.y*.5+.5))*e.height;a.style.transform=`translate3d(${Math.round(l)}px, ${Math.round(c)}px, 0) translate(-50%, -160%)`,a.hidden=Math.hypot(r.bx-r.ax,r.by-r.ay)*T_(t,e)<26}for(const[r,a]of this.rulers)s.has(r)||(a.remove(),this.rulers.delete(r))}createPlate(t){const e=document.createElement("div");e.className="plate";const n=document.createElement("div");n.className="plate-bar";const s=document.createElement("i");n.appendChild(s),e.append(n),this.el.appendChild(e);const r=xs("svg",{class:"token-label",viewBox:"0 0 200 200",width:200,height:200}),a=xs("g",{transform:"translate(100 100)"}),o=`label-${t}-${++w_}`,l=xs("path",{id:o,class:"token-label-band"}),c=xs("text",{class:"token-label-text","dominant-baseline":"central"}),h=xs("textPath",{href:`#${o}`,startOffset:"50%","text-anchor":"middle"});c.appendChild(h),a.append(l,c),r.appendChild(a),this.el.appendChild(r);const d={svg:r,path:l,text:c,textPath:h,key:"",reach:0},u=document.createElement("div");u.className="status-badges",u.hidden=!0,this.el.appendChild(u);const f={root:e,bar:n,fill:s,label:d,badges:u,last:{hp:void 0,maxHp:void 0,status:""}};return this.plates.set(t,f),f}clear(){for(const[,t]of this.plates)t.root.remove(),t.label.svg.remove(),t.badges.remove();this.plates.clear();for(const[,t]of this.rulers)t.remove();this.rulers.clear()}}function or(i,t,e){return i<t?t:i>e?e:i}function T_(i,t){return i.pxPerUnit(t.height)}const A_="modulepreload",R_=function(i,t){return new URL(i,t).href},Qc={},Bu=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=R_(c,n),c in Qc)return;Qc[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const v=a[g];if(v.href===c&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":A_,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function C_(i){return i===100?["d10t","d10u"]:[`d${i}`]}function P_(i,t){if(i!==100)return[t];const e=t%100;return[Math.floor(e/10)+1,e%10+1]}function zu(i,t){return i==="d10t"?String((t-1)*10).padStart(2,"0"):String(i==="d10u"?t-1:t)}function L_(i,t){return i!=="d6"&&i!=="d2"&&(t==="6"||t==="9")}const th=new Map;function eh(i){let t=th.get(i);return t||(t=I_(i),th.set(i,t)),t}function I_(i){switch(i){case"d2":return li(i,U_(.9,.17,24),"caps");case"d4":return li(i,_s(new dl(1.25)),"vertices");case"d6":return li(i,_s(new rs(1.25,1.25,1.25)),"faces");case"d8":return li(i,_s(new ul(1)),"faces");case"d10":case"d10t":case"d10u":return li(i,D_(.95),"faces");case"d12":return li(i,_s(new cl(1)),"faces");case"d20":return li(i,_s(new hl(1.05)),"faces");default:throw new Error(`No shape for ${i}`)}}function _s(i){const e=(i.index?i.toNonIndexed():i).getAttribute("position"),n=[];for(let s=0;s<e.count;s+=3)n.push([0,1,2].map(r=>new k().fromBufferAttribute(e,s+r)));return i.dispose(),n}function D_(i){const t=Math.cos(Math.PI/5),e=.105*i,n=e*(1+t)/(1-t),s=[];for(let l=0;l<10;l++){const c=l*Math.PI/5;s.push(new k(Math.cos(c)*i,Math.sin(c)*i,l%2?-e:e))}const r=new k(0,0,n),a=new k(0,0,-n),o=[];for(let l=0;l<5;l++){const c=s[2*l],h=s[2*l+1],d=s[(2*l+2)%10],u=s[(2*l+3)%10];o.push([r,c,h],[r,h,d]),o.push([a,u,d],[a,d,h])}return o.map(l=>Gu(l))}function U_(i,t,e){const n=[],s=[];for(let a=0;a<e;a++){const o=a/e*Math.PI*2;n.push(new k(Math.cos(o)*i,Math.sin(o)*i,t/2)),s.push(new k(Math.cos(o)*i,Math.sin(o)*i,-t/2))}const r=[];for(let a=1;a<e-1;a++)r.push([n[0],n[a],n[a+1]],[s[0],s[a+1],s[a]]);for(let a=0;a<e;a++){const o=(a+1)%e;r.push([n[a],s[a],s[o]],[n[a],s[o],n[o]])}return r.map(a=>Gu(a))}function Gu(i){const t=new k().subVectors(i[1],i[0]).cross(new k().subVectors(i[2],i[0])),e=new k().add(i[0]).add(i[1]).add(i[2]).divideScalar(3);return t.dot(e)<0?[i[0],i[2],i[1]]:i}function li(i,t,e){const n=[],s=p=>{for(let m=0;m<n.length;m++)if(n[m].distanceToSquared(p)<1e-10)return m;return n.push(p.clone()),n.length-1},r=[];for(const p of t){const m=new k().subVectors(p[1],p[0]).cross(new k().subVectors(p[2],p[0])).normalize();let y=r.find(_=>_.normal.dot(m)>.9999);y||(y={normal:m,tris:[],ids:new Set},r.push(y)),y.tris.push(p);for(const _ of p)y.ids.add(s(_))}for(const p of r){const m=[...p.ids];p.center=m.reduce((_,M)=>_.add(n[M]),new k).divideScalar(m.length),p.u=new k().subVectors(n[m[0]],p.center).projectOnPlane(p.normal).normalize(),p.w=new k().crossVectors(p.normal,p.u);const y=_=>{const M=new k().subVectors(n[_],p.center);return Math.atan2(M.dot(p.w),M.dot(p.u))};if(p.verts=m.sort((_,M)=>y(_)-y(M)),p.radius=Math.max(...m.map(_=>n[_].distanceTo(p.center))),p.verts.length===3||p.verts.length===4){const _=n[p.verts[0]],M=n[p.verts[1]],L=new k().addVectors(_,M).multiplyScalar(.5),T=new k().subVectors(L,p.center).projectOnPlane(p.normal).normalize();p.w=T.clone().negate(),p.u=new k().crossVectors(p.w,p.normal).normalize()}if(i.startsWith("d10")){const _=p.verts.reduce((M,L)=>Math.abs(n[L].z)>Math.abs(n[M].z)?L:M,p.verts[0]);p.w=new k().subVectors(n[_],p.center).projectOnPlane(p.normal).normalize(),p.u=new k().crossVectors(p.w,p.normal).normalize()}}const a=[],o=[],l=[],c=new yn;let h=0;r.forEach((p,m)=>{const y=p.radius*(i==="d2"?1:1.04);for(const _ of p.tris)for(const M of _){const L=new k().subVectors(M,p.center);a.push(M.x,M.y,M.z),o.push(p.normal.x,p.normal.y,p.normal.z),l.push(.5+.5*L.dot(p.u)/y,.5+.5*L.dot(p.w)/y)}c.addGroup(h,p.tris.length*3,m),h+=p.tris.length*3}),c.setAttribute("position",new He(a,3)),c.setAttribute("normal",new He(o,3)),c.setAttribute("uv",new He(l,2));let d;e==="vertices"?d=n.map((p,m)=>({vertex:m,dir:p.clone().normalize()})):e==="caps"?d=r.map((p,m)=>({face:m,dir:p.normal})).filter(p=>Math.abs(p.dir.z)>.99):d=r.map((p,m)=>({face:m,dir:p.normal}));const u=d.length,f=new Array(u).fill(0);let g=1;for(let p=0;p<u;p++){if(f[p])continue;f[p]=g;const m=d.findIndex((y,_)=>_!==p&&!f[_]&&y.dir.dot(d[p].dir)<-.999);for(m>=0&&(f[m]=u+1-g),g++;f.includes(g);)g++}const v=r.map((p,m)=>{if(e==="vertices")return p.verts.map(_=>{const M=d.findIndex(A=>A.vertex===_),L=new k().subVectors(n[_],p.center),T=p.radius*1.04;return{slot:M,x:.5*L.dot(p.u)/T,y:.5*L.dot(p.w)/T}});const y=d.findIndex(_=>_.face===m);return y>=0?[{slot:y,x:0,y:0}]:[]});return{kind:i,geometry:c,faces:r,vertices:n,slots:d,standard:f,faceSlots:v,slotKind:e}}function k_(i,t){let e=-1,n=-1/0;const s=new k;return i.slots.forEach((r,a)=>{s.copy(r.dir).applyQuaternion(t),s.z>n&&(n=s.z,e=a)}),{slot:e,flat:n}}function mS(i,t,e){const n=i.standard.slice(),s=n.indexOf(e);return s>=0&&s!==t&&([n[s],n[t]]=[n[t],n[s]]),n}const De=128,Hu=new Map;function N_(i){const t=i>>16&255,e=i>>8&255,n=i&255;return .2126*t+.7152*e+.0722*n>150?"#14100c":"#fbf8f2"}const F_=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`;function O_(i,t,e){const n=`${i}|${t}|${e.map(c=>`${c.text}@${c.x.toFixed(3)},${c.y.toFixed(3)}`).join(";")}`;let s=Hu.get(n);if(s)return s;const r=document.createElement("canvas");r.width=De,r.height=De;const a=r.getContext("2d");a.fillStyle=F_(t),a.fillRect(0,0,De,De);const o=a.createLinearGradient(0,0,De,De);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(1,"rgba(0,0,0,0.10)"),a.fillStyle=o,a.fillRect(0,0,De,De);const l=N_(t);if(i==="d6"&&e.length===1)return z_(a,Number(e[0].text),l),nh(n,r);for(const c of e){const h=c.x!==0||c.y!==0,d=c.text.length,u=h?30:d>1?i==="d10t"?44:50:G_(i),f=De*(.5+c.x),g=De*(.5-c.y);a.save(),a.translate(f,g),h&&a.rotate(Math.atan2(c.x,c.y)),a.fillStyle=l,a.font=`700 ${u}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(c.text,0,0),L_(i,c.text)&&a.fillRect(-u*.28,u*.42,u*.56,Math.max(2,u*.07)),a.restore()}return nh(n,r)}function nh(i,t){const e=new du(t);return e.colorSpace=Be,e.anisotropy=4,Hu.set(i,e),e}const B_={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]};function z_(i,t,e){const n=De*.24,s=t===1?De*.1:De*.075;i.fillStyle=e;for(const[r,a]of B_[t]||[])i.beginPath(),i.arc(De/2+r*n,De/2+a*n,s,0,Math.PI*2),i.fill()}function G_(i){return{d2:58,d6:64,d8:56,d10:50,d10u:54,d12:54,d20:46}[i]??54}function H_(i,t){return i.faceSlots.map(e=>e.map(n=>({text:zu(i.kind,t[n.slot]),x:n.x*.62,y:n.y*.62})))}const An={fov:34,height:38,rest:2.6,fade:.5,dropped:.38};class V_{constructor({badgeParent:t}){this.scene=new uu,this.camera=new Qe(An.fov,1,1,200),this.camera.position.set(0,-6,An.height),this.camera.lookAt(0,0,0),this.tray={halfW:12,halfH:8},this.scene.add(new Fv(16777215,3814184,1.5));const e=new zv(16777215,1.9);e.position.set(-12,-10,30),this.scene.add(e),this.current=null,this.badge=document.createElement("div"),this.badge.className="dice-total",this.badge.hidden=!0,t.appendChild(this.badge),this.rect={width:1,height:1}}resize(t,e){this.rect={width:t,height:e},this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=Math.hypot(An.height,6),s=Math.tan(An.fov*Math.PI/360)*n;this.tray={halfW:Math.max(4,s*this.camera.aspect-1.2),halfH:Math.max(3,s-1.6)}}get busy(){return!!this.current}play(t,e){if(!xr){W_().then(()=>this.play(t,e));return}const{toss:n}=xr;this.clear();const s=[];for(const o of t.dice){const l=C_(o.sides),c=P_(o.sides,o.value);l.forEach((h,d)=>s.push({kind:h,want:c[d],kept:o.kept}))}let r;try{r=n(s,t.throw>>>0,this.tray)}catch(o){console.warn("[dice] could not animate this roll",o);return}const a=s.map((o,l)=>{const c=eh(o.kind),h=H_(c,r.labels[l]).map(f=>new Nv({map:O_(o.kind,e,f),roughness:.42,metalness:.04,transparent:!0})),d=new be(c.geometry,h);this.scene.add(d);const u=new be(X_,new xi({map:$_(),transparent:!0,depthWrite:!1,opacity:.55}));return this.scene.add(u),{mesh:d,shadow:u,frames:r.frames[l],kept:o.kept,materials:h,kind:o.kind,labels:r.labels[l]}});this.current={id:t.id,total:t.total,note:t.note||"",dice:a,t:0,steps:r.steps,settledAt:null},this.badge.hidden=!0,this.pose(0)}clear(){if(this.current){for(const t of this.current.dice){this.scene.remove(t.mesh,t.shadow);for(const e of t.materials)e.dispose();t.shadow.material.dispose()}this.current=null,this.badge.hidden=!0}}frame(t){const e=this.current;if(!e)return;e.t+=t;const n=e.t/xr.TOSS.dt;if(n<e.steps-1){this.pose(n);return}if(e.settledAt===null){e.settledAt=e.t,this.pose(e.steps-1);for(const r of e.dice)if(!r.kept)for(const a of r.materials)a.opacity=An.dropped;this.showTotal()}const s=e.t-e.settledAt;if(s>An.rest){const r=Math.max(0,1-(s-An.rest)/An.fade);for(const a of e.dice){for(const o of a.materials)o.opacity=r*(a.kept?1:An.dropped);a.shadow.material.opacity=.55*r}this.badge.style.opacity=String(r),r===0&&this.clear()}}pose(t){const e=Math.floor(t),n=t-e;for(const s of this.current.dice){const r=Math.min(e,this.current.steps-1)*7,a=Math.min(e+1,this.current.steps-1)*7,o=s.frames;s.mesh.position.set(o[r]+(o[a]-o[r])*n,o[r+1]+(o[a+1]-o[r+1])*n,o[r+2]+(o[a+2]-o[r+2])*n),sh.set(o[r+3],o[r+4],o[r+5],o[r+6]),rh.set(o[a+3],o[a+4],o[a+5],o[a+6]),s.mesh.quaternion.slerpQuaternions(sh,rh,n);const l=s.mesh.position.z,c=1.9+l*.12;s.shadow.position.set(s.mesh.position.x+l*.18,s.mesh.position.y+l*.12,.01),s.shadow.scale.set(c,c,1),this.current.settledAt===null&&(s.shadow.material.opacity=.55/(1+l*.25))}}showTotal(){const t=this.current;let e=0,n=0,s=1/0;const r=new k;for(const l of t.dice)l.kept&&(r.copy(l.mesh.position),r.y+=1.25,r.z+=1.25,r.project(this.camera),e+=(r.x*.5+.5)*this.rect.width,s=Math.min(s,(1-(r.y*.5+.5))*this.rect.height),n++);if(!n)return;const a=e/n,o=s-6;if(this.badge.replaceChildren(),t.note){const l=document.createElement("span");l.className="note",l.textContent=t.note,this.badge.append(l)}this.badge.append(String(t.total)),this.badge.style.opacity="1",this.badge.style.transform=`translate3d(${Math.round(a)}px, ${Math.round(o)}px, 0) translate(-50%, -100%)`,this.badge.hidden=!1}readout(){return this.current?this.current.dice.map(t=>{const e=eh(t.kind),{slot:n}=k_(e,t.mesh.quaternion);return{kind:t.kind,shows:zu(t.kind,t.labels[n]),kept:t.kept}}):[]}render(t){if(!this.current)return;const e=t.autoClear;t.autoClear=!1,t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=e}}let xr=null,ih=null;function W_(){return ih||(ih=Bu(()=>import("./toss-C_vsGC2l.js"),[],import.meta.url).then(i=>{xr=i})),ih}const sh=new Mi,rh=new Mi,X_=new xn(1,1);let lr=null;function $_(){if(lr)return lr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.85)"),e.addColorStop(.55,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),lr=new du(i),lr}const q_=`
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`,Y_=`
precision highp float;
uniform sampler2D uMap;
uniform vec2 uRes;      // canvas size, device pixels
uniform float uDpr;
uniform float uTime;
uniform float uLevel;   // the still-water line, CSS px up from the bottom
uniform float uSwell;   // how high the surface heaves, CSS px
uniform float uDeep;    // 0..1, the light going out of the water
uniform float uBlack;   // 0..1, the last of it to black

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = r * p * 2.03; a *= 0.5; }
  return v;
}

// The water's own surface, seen from above: broad, slow swells crossing, smooth
// enough that what is under them sways rather than breaks up.
float ripple(vec2 p) {
  return noise(p * 0.009 + vec2(uTime * 0.16, uTime * 0.07))
       + 0.7 * noise(p * 0.016 - vec2(uTime * 0.10, -uTime * 0.19))
       + 0.25 * sin(p.x * 0.021 + p.y * 0.013 + uTime * 1.4);
}

// Light focused by the ripples onto what lies under them: a bright, shifting net.
float caustic(vec2 p) {
  vec2 q = mod(p * 6.28318, 6.28318) - 250.0;
  vec2 i = q;
  float c = 1.0;
  for (int n = 0; n < 5; n++) {
    float t = uTime * 0.5 * (1.0 - 3.5 / float(n + 1));
    i = q + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
    c += 1.0 / length(vec2(q.x / (sin(i.x + t) / 0.005), q.y / (cos(i.y + t) / 0.005)));
  }
  c /= 5.0;
  c = 1.17 - pow(c, 1.4);
  return pow(abs(c), 8.0);
}

// The waterline at x: long swells, a shorter chop on them, and an unevenness
// that drifts, so it never reads as a drawn wave.
float surface(float x) {
  return uLevel
    + uSwell * (0.55 * sin(x * 0.0061 + uTime * 1.25)
              + 0.30 * sin(x * 0.0149 - uTime * 1.9 + 1.3)
              + 0.90 * (fbm(vec2(x * 0.0035, uTime * 0.22)) - 0.5));
}

void main() {
  vec2 px = gl_FragCoord.xy / uDpr;                 // CSS px, y up
  vec2 size = uRes / uDpr;
  float s = surface(px.x);
  float d = s - px.y;                               // how far under, px
  if (d < -1.5) { gl_FragColor = vec4(0.0); return; }

  // Bend the board by the slope of the ripples; most at the surface, where it
  // is churned, settling a little below.
  float e = 2.0;
  float h0 = ripple(px);
  vec2 grad = vec2(ripple(px + vec2(e, 0.0)) - h0, ripple(px + vec2(0.0, e)) - h0) / e;
  float churn = 1.0 + 1.5 * exp(-max(d, 0.0) / 40.0);
  vec2 bend = grad * 380.0 * churn;
  vec3 board = texture2D(uMap, clamp((px + bend) / size, 0.001, 0.999)).rgb;

  // Water: the board seen through it, tinted, taking on more of the water's
  // colour the further down it is.
  float depth = 1.0 - exp(-max(d, 0.0) / (size.y * 0.55));
  vec3 shallow = vec3(0.09, 0.30, 0.33);
  vec3 deepC = vec3(0.015, 0.06, 0.10);
  vec3 col = board * vec3(0.78, 0.95, 0.98);
  col = mix(col, shallow, 0.16 + 0.5 * depth);

  // Light coming down through the surface, strongest in the shallows.
  float lit = (1.0 - uDeep) * (1.0 - 0.6 * depth);
  vec2 cp = (px + bend * 0.5) / 260.0;
  float c = caustic(cp) * 0.7 + caustic(cp * 1.37 + 3.1) * 0.5;
  col += vec3(0.55, 0.85, 0.80) * min(c, 1.2) * 0.45 * lit;
  // And brighter just under the surface, where it is thinnest.
  col += vec3(0.25, 0.42, 0.42) * exp(-max(d, 0.0) / 28.0) * (1.0 - uDeep) * 0.5;

  // The surface itself: a sheen along the line, and foam riding it, broken up.
  float slope = (surface(px.x + 1.0) - surface(px.x - 1.0)) * 0.5;
  float sheen = exp(-abs(d - 2.0) / 2.2) * (0.55 + 0.45 * clamp(-slope * 1.5 + 0.5, 0.0, 1.0));
  float froth = fbm(vec2(px.x * 0.045 + uTime * 0.3, d * 0.09 - uTime * 0.6));
  float foam = smoothstep(0.48, 0.66, froth) * exp(-max(d, 0.0) / 11.0);
  col = mix(col, vec3(0.86, 0.95, 0.95), clamp(sheen * 0.7 + foam * 0.85, 0.0, 1.0) * (1.0 - uDeep));

  col = mix(col, deepC, uDeep * 0.92);
  col *= 1.0 - uBlack;
  float alpha = smoothstep(-1.5, 1.0, d);
  gl_FragColor = vec4(col * alpha, alpha);
}
`;function j_(i){const t=i.getContext("webgl",{premultipliedAlpha:!0,alpha:!0,antialias:!1});if(!t)return null;const e=(l,c)=>{const h=t.createShader(l);if(t.shaderSource(h,c),t.compileShader(h),!t.getShaderParameter(h,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(h));return h},n=t.createProgram();try{t.attachShader(n,e(t.VERTEX_SHADER,q_)),t.attachShader(n,e(t.FRAGMENT_SHADER,Y_))}catch(l){return console.warn("flood: no shader",l),null}if(t.linkProgram(n),!t.getProgramParameter(n,t.LINK_STATUS))return null;t.useProgram(n);const s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);const r=t.getAttribLocation(n,"a");t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0);const a=t.createTexture();t.bindTexture(t.TEXTURE_2D,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0);const o={};for(const l of["uMap","uRes","uDpr","uTime","uLevel","uSwell","uDeep","uBlack"])o[l]=t.getUniformLocation(n,l);return t.uniform1i(o.uMap,0),{clear(){t.viewport(0,0,i.width,i.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)},draw(l,{dpr:c,time:h,level:d,swell:u,deep:f,black:g}){t.viewport(0,0,i.width,i.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.bindTexture(t.TEXTURE_2D,a),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,l),t.uniform2f(o.uRes,i.width,i.height),t.uniform1f(o.uDpr,c),t.uniform1f(o.uTime,h),t.uniform1f(o.uLevel,d),t.uniform1f(o.uSwell,u),t.uniform1f(o.uDeep,f),t.uniform1f(o.uBlack,g),t.drawArrays(t.TRIANGLES,0,3)}}}const Wn=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,K_=1,Z_=.16,J_=typeof CanvasRenderingContext2D<"u"&&"filter"in CanvasRenderingContext2D.prototype,ah=.45,Ca={fade:1.2,swirl:1.8,curtain:2.2,drapes:1.6,ink:2.2,burn:3.2,freeze:3.6,flood:3.2},Q_=7.5,ty=.045,ey=1,Pa={rain:{density:700,make:()=>({u:Math.random(),v:Math.random(),s:.75+Math.random()*.5,l:.7+Math.random()*.6})},snow:{density:380,make:()=>({u:Math.random(),v:Math.random(),s:.6+Math.random()*.8,r:Math.random(),p:Math.random()*6.3})},embers:{density:240,make:()=>({u:Math.random(),v:Math.random(),s:.5+Math.random(),r:Math.random(),p:Math.random()*6.3})},fog:{density:26,make:()=>({u:Math.random()*1.4-.2,v:Math.random(),s:.6+Math.random()*.8,r:.22+Math.random()*.2,p:Math.random()*6.3,q:Math.random()*6.3})}};class ny{constructor(t,e){this.cam=e,this.rect={left:0,top:0,width:1,height:1},this.canvas=document.createElement("canvas"),this.canvas.id="weather",this.g=this.canvas.getContext("2d"),this.dark=document.createElement("canvas"),this.dark.id="darkness",this.dg=this.dark.getContext("2d"),this.darkShown=0,this.cover=Le("fx-cover"),this.shade=Le("fx-shade"),this.swirl=document.createElement("canvas"),this.swirl.className="fx-swirl",this.sg=this.swirl.getContext("2d"),this.curtain=Le("fx-curtain"),this.pool=Le("fx-pool"),this.curtain.append(this.pool),this.drapes=[Le("fx-drape left"),Le("fx-drape right")],this.floodCv=document.createElement("canvas"),this.floodCv.className="fx-swirl",this.floodCv.hidden=!0,this.cover.append(this.shade,this.swirl,this.floodCv,this.curtain,...this.drapes,cy()),this.card=Le("fx-card");const n=Le("title");n.textContent="Intermission";const s=Le("sub");s.innerHTML='<span class="player-only">The GM is setting the scene.</span><span class="gm-only">Players see this card. Bring the table back from FX.</span>',this.card.append(Le("glow"),n,s),this.out=null,this.locked=!1,this.flash=Le("fx-flash"),this.pingLayer=Le("fx-pings");const r=t.querySelector("#overlay");t.insertBefore(this.canvas,r),t.insertBefore(this.dark,r),t.insertBefore(this.cover,r),r.after(this.flash,this.pingLayer,this.card),this.board=[t.querySelector("#canvas"),this.canvas,r],this.overlay=r,this.weather=null,this.parts=[],this.pings=[]}resize(t){this.rect=t;const e=Math.min(1.5,window.devicePixelRatio||1);this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e),this.g.setTransform(e,0,0,e,0,0),this.dark.width=this.canvas.width,this.dark.height=this.canvas.height,this.dg.setTransform(e,0,0,e,0,0),this.darkKey="",this.swirl.width=this.canvas.width,this.swirl.height=this.canvas.height,this.sg.setTransform(e,0,0,e,0,0),this.floodCv.width=this.canvas.width,this.floodCv.height=this.canvas.height,this.coverKey="",this.reseed()}frame(t,e,{isGm:n,bounds:s,tokens:r=[],scene:a=null}){a!==this.scene&&(this.scene=a,this.out=t!=null&&t.blackout?1:0,this.darkShown=((t==null?void 0:t.darkness)||0)*(n?ah:1),this.darkKey="",this.coverKey="");const o=(t==null?void 0:t.weather)||null;o!==this.weather&&(this.weather=o,this.parts=[]),this.intensity=(t==null?void 0:t.intensity)??.6,this.t=(this.t||0)+e,this.boardBox=this.boardRect(s),this.drawWeather(Math.min(e,.05),this.boardBox);const l=n?ah:1;this.drawBlackout(t,e,l),this.locked=!n&&(!!(t!=null&&t.blackout)||this.out>.002),this.overlay.classList.toggle("fx-out",this.locked),document.body.classList.toggle("fx-locked",this.locked);const c=!!(t!=null&&t.blackout)&&(n||this.out>=.999);this.card.classList.toggle("on",c),this.card.classList.toggle("gm",n),this.drawDarkness(((t==null?void 0:t.darkness)||0)*l,e,r,a),this.drawPings()}reseed(){this.parts=[],this.g.clearRect(0,0,this.rect.width,this.rect.height)}boardRect(t){if(!t)return null;const e=this.cam.toNdc(t.x0,-t.y0),n=this.cam.toNdc(t.x1,-t.y1),{width:s,height:r}=this.rect,a=(e.x*.5+.5)*s,o=(1-(e.y*.5+.5))*r,l=(n.x*.5+.5)*s,c=(1-(n.y*.5+.5))*r;return{x:a,y:o,w:l-a,h:c-o}}fit(t,e){const n=Math.max(0,e.w*e.h),s=t===Pa.fog?1:Math.min(2,n/(1e3*600)),r=t===Pa.fog?8+18*this.intensity:t.density*this.intensity*s,a=Math.round(r*(Wn?.4:1)),o=Math.max(4,Math.round(a*.05));if(this.parts.length<a)for(let l=0;l<o&&this.parts.length<a;l++)this.parts.push(t.make());else this.parts.length>a&&(this.parts.length=Math.max(a,this.parts.length-o))}drawWeather(t,e){const n=this.g,{width:s,height:r}=this.rect;n.clearRect(0,0,s,r);const a=Pa[this.weather];if(!a||!e||e.w<2||e.h<2||(this.fit(a,e),!this.parts.length))return;n.save(),n.beginPath(),n.rect(e.x,e.y,e.w,e.h),n.clip();const o=this.intensity,l=Wn?.5:1,c=f=>e.x+f*e.w,h=f=>e.y+f*e.h,d=f=>f*t*l/e.w,u=f=>f*t*l/e.h;if(this.weather==="rain"){n.strokeStyle=`rgba(190, 210, 235, ${(.22+.38*o).toFixed(2)})`,n.lineWidth=.8+.7*o,n.beginPath();const f=650+650*o;for(const g of this.parts){g.v+=u(f*g.s),g.u+=d(f*g.s*.18),g.v>1.02&&(g.v=-.02,g.u=Math.random()*1.2-.1);const v=c(g.u),p=h(g.v),m=(8+16*o)*g.l;n.moveTo(v,p),n.lineTo(v-m*.18,p-m)}n.stroke()}else if(this.weather==="snow"){n.fillStyle=`rgba(245, 248, 255, ${(.55+.4*o).toFixed(2)})`;for(const f of this.parts)f.p+=t*(.6+f.r),f.v+=u((25+55*o)*f.s),f.u+=d(Math.sin(f.p)*(12+22*o)),f.v>1.02&&(f.v=-.02,f.u=Math.random()),n.beginPath(),n.arc(c(f.u),h(f.v),.8+f.r*(1.4+1.6*o),0,Math.PI*2),n.fill()}else if(this.weather==="embers")for(const f of this.parts){f.p+=t*7,f.v-=u((25+60*o)*f.s),f.u+=d(Math.sin(f.p*.3)*14),f.v<-.02&&(f.v=1.02,f.u=Math.random());const g=(.35+.4*o)*(.6+.4*Math.sin(f.p));n.fillStyle=`rgba(255, ${150+Math.round(60*g)}, 60, ${g.toFixed(2)})`,n.beginPath(),n.arc(c(f.u),h(f.v),1+f.r*(1.6+1.2*o),0,Math.PI*2),n.fill()}else if(this.weather==="fog"){const f=.1+.18*o,g=Math.max(e.w,e.h);for(const v of this.parts){v.p+=t*.35,v.q+=t*.22,v.u+=d((14+26*o)*v.s),v.v+=Math.sin(v.q)*6e-4*l,v.u-v.r>1.15&&(v.u=-.25,v.v=Math.random());const p=v.r*g*(1+.12*Math.sin(v.p)),m=c(v.u),y=h(v.v),_=f*(.75+.25*Math.sin(v.p*1.3+v.q)),M=n.createRadialGradient(m,y,0,m,y,p);M.addColorStop(0,`rgba(208, 214, 218, ${_.toFixed(3)})`),M.addColorStop(.6,`rgba(208, 214, 218, ${(_*.5).toFixed(3)})`),M.addColorStop(1,"rgba(208, 214, 218, 0)"),n.fillStyle=M,n.fillRect(m-p,y-p,p*2,p*2)}}n.restore()}drawBlackout(t,e,n){var m,y;const s=Ca[t==null?void 0:t.transition]?t.transition:"fade",r=t!=null&&t.blackout?1:0;this.out===null&&(this.out=r);const a=this.out>=1&&r===1&&this.closedAs?this.closedAs:s;this.closedAs=a;const o=Math.min(e,.1)/(Wn?.6:Ca[a]),l=Math.sign(r-this.out);this.out=r>this.out?Math.min(r,this.out+o):Math.max(r,this.out-o);const c=this.out,h=c*c*(3-2*c),d=l*(6*c*(1-c))/(Wn?.6:Ca[a]),u=`${a}:${c}:${d}:${n}`,f=a==="burn"&&(h>0&&h<1||((m=this.sparks)==null?void 0:m.length)>0)||a==="flood"&&h>0&&h<1;if(u===this.coverKey&&!f)return;this.coverKey=u,this.cover.style.opacity=String(n),this.cover.dataset.kind=a,this.shade.style.opacity=a==="fade"?h.toFixed(4):"0",this.drawCurtain(a==="curtain"?c:0);const g=a==="drapes"?(1-h)*104:104,v=a==="drapes"&&!Wn?d*Q_:0;this.drapes[0].style.transform=`translateX(${-g.toFixed(2)}%) skewX(${(-v).toFixed(2)}deg)`,this.drapes[1].style.transform=`translateX(${g.toFixed(2)}%) skewX(${v.toFixed(2)}deg)`;const p={swirl:_=>this.drawSwirl(_),ink:_=>this.drawInk(_),burn:_=>this.drawBurn(_,e),freeze:_=>this.drawFreeze(_),flood:_=>this.drawFlood(_,d)};for(const[_,M]of Object.entries(p))_!==a&&M(0);(y=p[a])==null||y.call(p,h)}drawCurtain(t){const e=this.rect.height,n=1.1*e-ey,s=2*ty*e,r=(n+s)*t*t*(3-2*t),a=Math.min(r,n);this.curtain.style.transform=`translateY(${(a-1.1*e).toFixed(1)}px)`,this.curtain.classList.toggle("on",t>0);const o=Math.max(0,r-n)/2;this.pool.style.height=`${o.toFixed(1)}px`,t>0&&(this.shade.style.opacity=Math.min(1,o/6).toFixed(3))}drawInk(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.blots=null,this.inked&&(e.clearRect(0,0,n,s),this.inked=!1);return}if(this.blots||(this.blots=ly()),this.inked=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=Math.hypot(n,s);for(const a of this.blots){const o=Math.max(0,Math.min(1,(t-a.at)/(1-a.at)));if(o<=0)continue;const l=r*a.size*(1-Math.pow(1-o,2.2)),c=a.x*n,h=a.y*s;e.beginPath();for(let d=0;d<=96;d++){const u=d/96*Math.PI*2,f=1+a.lobes.reduce((g,v)=>g+v.amp*Math.sin(u*v.n+v.ph),0);e.lineTo(c+Math.cos(u)*l*f,h+Math.sin(u)*l*f)}e.fill();for(const d of a.drops){const u=l*d.dist,f=Math.max(0,Math.min(1,o*3))*d.size*r;e.beginPath(),e.arc(c+Math.cos(d.a)*u,h+Math.sin(d.a)*u,f,0,Math.PI*2),e.fill()}}t>.85&&(e.globalAlpha=(t-.85)/.15,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawBurn(t,e){const n=this.sg,{width:s,height:r}=this.rect;if(t<=0){this.fire=null,this.fireGrid=null,this.sparks=[],this.burned&&(n.clearRect(0,0,s,r),this.burned=!1);return}const a=this.boardBox,o=a&&a.w>2&&a.h>2?a:{x:0,y:0,w:s,h:r};if(this.fire||(this.fire=iy(o.w/o.h)),this.sparks||(this.sparks=[]),this.burned=!0,n.clearRect(0,0,s,r),t>=1){n.fillStyle="#000",n.fillRect(0,0,s,r),this.drawSparks(e);return}const l=Je((t-.55)/.45);l>0&&(n.fillStyle=`rgba(0, 0, 0, ${l.toFixed(4)})`,n.beginPath(),n.rect(0,0,s,r),n.rect(o.x,o.y,o.w,o.h),n.fill("evenodd"));const c=ry(o,{x:0,y:0,w:s,h:r});if(!c){this.drawSparks(e);return}const h=performance.now();let d=this.fireGrid;(!d||!ay(d.view,c)&&h-d.made>250)&&(d=this.fireGrid=sy(this.fire,o,c));const{gw:u,gh:f,when:g,img:v,cv:p,u0:m,u1:y,v0:_,v1:M,soft:L}=d,T=.035,A=.05,C=t*(this.fire.span+T),F=this.t||0,x=new Float32Array(u),E=new Float32Array(f);for(let tt=0;tt<u;tt++)x[tt]=Math.sin(F*11+(m+tt/u*(y-m))*75);for(let tt=0;tt<f;tt++)E[tt]=Math.sin(F*7.3+(_+tt/f*(M-_))*60);const B=v.data,H=[];for(let tt=0;tt<g.length;tt++){const mt=C-g[tt],Mt=tt*4;if(mt<=-A){B[Mt+3]=0;continue}if(mt>=T+L){B[Mt]=0,B[Mt+1]=0,B[Mt+2]=0,B[Mt+3]=255;continue}const W=tt%u,J=.75+.25*x[W]*E[(tt-W)/u],ct=Je((mt+L)/(2*L)),at=ct*Math.max(0,1-Math.max(0,mt)/T)*J,ot=Math.pow(Math.max(0,1+mt/A),2),lt=255*Math.min(1,.3+at*1.1),bt=30+190*at*at,Ct=10+70*at*at*at;B[Mt]=70+(lt-70)*ct,B[Mt+1]=34+(bt-34)*ct,B[Mt+2]=10+(Ct-10)*ct,B[Mt+3]=255*Math.max(ot*.9,ct),at>.5&&H.push(tt)}p.getContext("2d").putImageData(v,0,0);const q=o.x+m*o.w,nt=o.y+_*o.h,X=(y-m)*o.w,V=(M-_)*o.h;n.save(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.imageSmoothingEnabled=!0,n.drawImage(p,q,nt,X,V);const D=d.glow,Z=D.getContext("2d");Z.clearRect(0,0,D.width,D.height),Z.drawImage(p,0,0,D.width,D.height),n.globalCompositeOperation="lighter",n.globalAlpha=.5,n.drawImage(D,q,nt,X,V),n.restore();const et=Math.min(e,.05);if(!Wn&&H.length)for(let tt=180*et;tt>0;tt-=1){if(Math.random()>=tt)continue;const mt=H[Math.floor(Math.random()*H.length)];this.sparks.push({x:q+(mt%u+Math.random())/u*X,y:nt+(Math.floor(mt/u)+Math.random())/f*V,vx:(Math.random()-.5)*40,vy:-30-Math.random()*80,life:.6+Math.random()*1.4,age:0,size:.7+Math.random()*2.2})}this.drawSparks(e)}drawSparks(t){const e=this.sg,n=this.t||0,s=Math.min(t,.05);this.sparks=this.sparks.filter(r=>(r.age+=s)<r.life);for(const r of this.sparks){r.x+=(r.vx+Math.sin(n*3+r.y*.05)*12)*s,r.y+=r.vy*s;const a=1-r.age/r.life;e.fillStyle=`rgba(255, ${Math.round(150+80*a)}, 60, ${a.toFixed(2)})`,e.beginPath(),e.arc(r.x,r.y,r.size*(.5+.5*a),0,Math.PI*2),e.fill()}}drawSwirl(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.swirled&&(e.clearRect(0,0,n,s),this.swirled=!1);return}if(this.swirled=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=n/2,a=s/2,o=Math.hypot(r,a)*1.05,l=5,c=5,h=t*2.4,d=t*Math.PI/l,u=o*(1-Math.pow(1-t,1.5)),f=48;for(let g=0;g<l;g++){const v=g/l*Math.PI*2+h;e.beginPath();for(let p=0;p<=f;p++){const m=o-u*p/f,y=v+c*(1-m/o)-d;e.lineTo(r+Math.cos(y)*m,a+Math.sin(y)*m)}for(let p=f;p>=0;p--){const m=o-u*p/f,y=v+c*(1-m/o)+d;e.lineTo(r+Math.cos(y)*m,a+Math.sin(y)*m)}e.closePath(),e.fill()}t>.88&&(e.globalAlpha=(t-.88)/.12,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawFreeze(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.ice=null,this.frozen&&(e.clearRect(0,0,n,s),this.frozen=!1);return}if(this.frozen=!0,e.clearRect(0,0,n,s),t>=1){e.fillStyle="#000",e.fillRect(0,0,n,s);return}(!this.ice||this.ice.w!==n||this.ice.h!==s)&&(this.ice=oy(n,s));const r=this.ice,a=t*2.4,o=Je((t-.42)/.28),l=Je((t-.52)/.36),c=Je((t-.8)/.2);e.fillStyle=`rgba(150, 190, 230, ${(.14*Je(t/.3)).toFixed(4)})`,e.fillRect(0,0,n,s);const{at:h,thick:d,img:u,cv:f}=r,g=u.data;for(let p=0;p<h.length;p++){const m=a-h[p],y=p*4;if(m<=0){g[y+3]=0;continue}const _=Je(m/.05),M=Je(m/.45),L=d[p];g[y]=214+26*L,g[y+1]=228+20*L,g[y+2]=244+11*L,g[y+3]=255*_*(.28+.5*M*(.6+.4*L))}f.getContext("2d").putImageData(u,0,0),e.imageSmoothingEnabled=!0,e.drawImage(f,0,0,n,s),e.lineCap="round",e.lineWidth=1;const v=.3;for(let p=0;p<4;p++){e.strokeStyle=`rgba(246, 251, 255, ${(.75*(1-p/4)).toFixed(3)})`,e.beginPath();for(const m of r.fronds){const y=a-m.at;if(y<=0||y>=v||Math.floor(y/v*4)!==p)continue;const _=Math.min(1,y/.03);e.moveTo(m.x0,m.y0),e.lineTo(m.x0+(m.x1-m.x0)*_,m.y0+(m.y1-m.y0)*_)}e.stroke()}e.fillStyle="rgba(255, 255, 255, 0.85)";for(const p of r.glints)a>p.at&&e.fillRect(p.x,p.y,p.r,p.r);if(l>0){const p=e.createRadialGradient(n/2,s/2,0,n/2,s/2,Math.hypot(n,s)/2);p.addColorStop(0,`rgba(10, 34, 58, ${(.92*l).toFixed(4)})`),p.addColorStop(1,`rgba(3, 12, 24, ${Math.min(1,.97*l).toFixed(4)})`),e.fillStyle=p,e.fillRect(0,0,n,s)}if(o>0){const p=1-c,m=(T,A)=>Math.round(T-A*l);for(const T of r.hits){const A=Je((o-T.at)/.06);if(A<=0)continue;const C=T.r*(.6+.4*A),F=e.createRadialGradient(T.x,T.y,0,T.x,T.y,C);F.addColorStop(0,`rgba(240, 248, 255, ${(.75*A*p).toFixed(4)})`),F.addColorStop(.4,`rgba(210, 232, 250, ${(.3*A*p).toFixed(4)})`),F.addColorStop(1,"rgba(210, 232, 250, 0)"),e.fillStyle=F,e.fillRect(T.x-C,T.y-C,C*2,C*2)}const y=new Path2D,_=new Path2D,M=[new Path2D,new Path2D,new Path2D];for(const T of r.cracks){if(o<T.at)continue;const A=Math.min(1,(o-T.at)/T.dur),C=T.x0+(T.x1-T.x0)*A,F=T.y0+(T.y1-T.y0)*A;y.moveTo(T.x0+T.nx*T.face,T.y0+T.ny*T.face),y.lineTo(C+T.nx*T.face,F+T.ny*T.face),_.moveTo(T.x0-T.nx,T.y0-T.ny),_.lineTo(C-T.nx,F-T.ny),M[T.weight].moveTo(T.x0,T.y0),M[T.weight].lineTo(C,F)}e.lineCap="butt",e.lineWidth=5,e.strokeStyle=`rgba(${m(205,120)}, ${m(228,110)}, ${m(248,60)}, ${(.16*p).toFixed(4)})`,e.stroke(y),e.lineWidth=1.6,e.strokeStyle=`rgba(8, 24, 42, ${(.6*(1-l)).toFixed(4)})`,e.stroke(_),e.lineCap="round";const L=[.6,1,1.7];for(let T=0;T<3;T++)e.lineWidth=L[T],e.strokeStyle=`rgba(${m(240,90)}, ${m(250,50)}, 255, ${((.55+.15*T)*p).toFixed(4)})`,e.stroke(M[T])}c>0&&(e.fillStyle=`rgba(0, 0, 0, ${c.toFixed(4)})`,e.fillRect(0,0,n,s))}drawFlood(t,e){var o;const n=this.floodCv;if(t<=0){this.flooded&&((o=this.water)==null||o.clear(),n.hidden=!0,this.flooded=!1);return}this.water===void 0&&(this.water=j_(n));const{width:s,height:r}=this.rect;if(!this.water){const l=this.sg;l.clearRect(0,0,s,r),l.fillStyle=`rgba(0, 0, 0, ${t.toFixed(4)})`,l.fillRect(0,0,s,r),this.flooded=!0;return}this.flooded=!0,n.hidden=!1;const a=Je(t/.66);this.water.draw(this.board[0],{dpr:n.width/Math.max(1,s),time:this.t||0,level:r*(-.06+1.2*a),swell:r*(.012+.035*Math.min(1,Math.abs(e)*2)),deep:Je((t-.45)/.45),black:t>=1?1:Je((t-.78)/.22)})}drawDarkness(t,e,n,s=null){const r=1-Math.exp(-Math.min(e,.1)*3);this.darkShown+=(t-this.darkShown)*r,Math.abs(t-this.darkShown)<.002&&(this.darkShown=t);const a=this.darkShown,o=this.dg,{width:l,height:c}=this.rect,h=a>.001?n.filter(v=>v.light):[],d=h.length?"":a.toFixed(3);if(d&&d===this.darkKey||(this.darkKey=d,o.clearRect(0,0,l,c),a<=.001)||(o.fillStyle=`rgba(0, 0, 0, ${(a*K_).toFixed(3)})`,o.fillRect(0,0,l,c),!h.length))return;o.save();const u=this.boardBox;u&&u.w>2&&u.h>2&&(o.beginPath(),o.rect(u.x,u.y,u.w,u.h),o.clip()),o.globalCompositeOperation="destination-out";const f=this.t||0,g=this.blockSegments(s);for(const v of h){const p=this.toScreen(v.x,v.y),m=this.toScreen(v.x+1,v.y),y=Math.hypot(m.x-p.x,m.y-p.y),_=(v.size||1)/2+(v.lightRange??2),M=hy(v.id),L=Wn?1:1+.008*Math.sin(f*7.3+M)+.005*Math.sin(f*13.1+M*2),T=_*y*L,A=T+.6*y,C=o.createRadialGradient(p.x,p.y,0,p.x,p.y,A);C.addColorStop(0,"rgba(0, 0, 0, 1)"),C.addColorStop(T/A,"rgba(0, 0, 0, 0.92)"),C.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=C;const F=g.length?this.reachOf(v,g,_*1.02+.62):null;if(!(F&&this.softLight(v,F,p,y,A,C))){if(F){o.save(),o.beginPath();for(let x=0;x<F.length;x+=2){const E=this.toScreen(F[x],F[x+1]);x?o.lineTo(E.x,E.y):o.moveTo(E.x,E.y)}o.closePath(),o.clip()}o.fillRect(p.x-A,p.y-A,A*2,A*2),F&&o.restore()}}o.restore()}softLight(t,e,n,s,r,a){var m;if(!J_)return!1;const o=Math.max(1.5,Math.min(14,Z_*s)),l=Math.ceil(o*2),c=Math.ceil(r)+l,h=c*2;if(h>2400)return!1;const d=n.x-c,u=n.y-c;this.masks||(this.masks=new Map);const f=`${(m=this.reaches.get(t.id))==null?void 0:m.key}|${d.toFixed(1)}|${u.toFixed(1)}|${s.toFixed(3)}|${h}`;let g=this.masks.get(t.id);if(!g||g.key!==f){const y=(g==null?void 0:g.cv)||document.createElement("canvas");y.width=h,y.height=h;const _=y.getContext("2d");_.clearRect(0,0,h,h),_.filter=`blur(${o.toFixed(1)}px)`,_.fillStyle="#000",_.beginPath();for(let M=0;M<e.length;M+=2){const L=this.toScreen(e[M],e[M+1]);M?_.lineTo(L.x-d,L.y-u):_.moveTo(L.x-d,L.y-u)}_.closePath(),_.fill(),_.filter="none",g={key:f,cv:y},this.masks.set(t.id,g)}this.scratch||(this.scratch=document.createElement("canvas"));const v=this.scratch;(v.width<h||v.height<h)&&(v.width=h,v.height=h);const p=v.getContext("2d");return p.globalCompositeOperation="source-over",p.clearRect(0,0,h,h),p.setTransform(1,0,0,1,-d,-u),p.fillStyle=a,p.fillRect(n.x-r,n.y-r,r*2,r*2),p.setTransform(1,0,0,1,0,0),p.globalCompositeOperation="destination-in",p.drawImage(g.cv,0,0),p.globalCompositeOperation="source-over",this.dg.drawImage(v,0,0,h,h,d,u,h,h),!0}blockSegments(t){const e=wu(t),n=this.segs;return(!n||n.length!==e.length||e.some((s,r)=>s!==n[r]))&&(this.segs=e,this.reaches=new Map,this.masks=new Map),this.segs}reachOf(t,e,n){const s=`${t.x}|${t.y}|${n}`;let r=this.reaches.get(t.id);return(!r||r.key!==s)&&(r={key:s,pts:ux(e,t.x,t.y,n)},this.reaches.set(t.id,r)),r.pts}toScreen(t,e){const n=this.cam.toNdc(t,-e);return{x:(n.x*.5+.5)*this.rect.width,y:(1-(n.y*.5+.5))*this.rect.height}}play(t){if(t==="shake"){if(Wn)return;for(const e of this.board)oh(e,"fx-shake");return}(t==="lightning"||t==="damage")&&(this.flash.dataset.kind=t,oh(this.flash,"fx-go"))}ping(t,e,n){const s=Le("fx-ping");s.style.setProperty("--ping",n),s.append(Le("ring"),Le("ring"),Le("dot")),this.pingLayer.append(s),this.pings.push({x:t,y:e,el:s,until:performance.now()+1700})}drawPings(){if(!this.pings.length)return;const t=performance.now();this.pings=this.pings.filter(e=>{if(t>e.until)return e.el.remove(),!1;const n=this.cam.toNdc(e.x,-e.y),s=(n.x*.5+.5)*this.rect.width,r=(1-(n.y*.5+.5))*this.rect.height;return e.el.style.transform=`translate3d(${s.toFixed(1)}px, ${r.toFixed(1)}px, 0)`,!0})}}function iy(i){const t=Math.random()*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=Bo(),r=.45,a=(h,d)=>{const u=d/i,f=s(h*5,u*5)*.5+s(h*13,u*13)*.25+s(h*31,u*31)*.1;return h*e+u*n+f*r},o=[[0,0],[1,0],[0,1],[1,1]].map(([h,d])=>h*e+d/i*n),l=Math.min(...o)-.85*r*.6,c=Math.max(...o)+.85*r*.6;return{at:(h,d)=>a(h,d)-l,span:c-l}}function sy(i,t,e){let s=Math.max(8,Math.ceil(e.w/2)),r=Math.max(8,Math.ceil(e.h/2));const a=Math.sqrt(s*r/25e4);a>1&&(s=Math.ceil(s/a),r=Math.ceil(r/a));const o=(e.x-t.x)/t.w,l=(e.x+e.w-t.x)/t.w,c=(e.y-t.y)/t.h,h=(e.y+e.h-t.y)/t.h,d=new Float32Array(s*r);for(let p=0;p<r;p++){const m=c+(p+.5)/r*(h-c);for(let y=0;y<s;y++)d[p*s+y]=i.at(o+(y+.5)/s*(l-o),m)}const u=document.createElement("canvas");u.width=s,u.height=r;const f=u.getContext("2d").createImageData(s,r),g=document.createElement("canvas");g.width=Math.max(2,Math.round(s/8)),g.height=Math.max(2,Math.round(r/8));const v=1.5*(l-o)/s;return{gw:s,gh:r,when:d,img:f,cv:u,glow:g,u0:o,u1:l,v0:c,v1:h,soft:v,view:{...e},made:performance.now()}}function ry(i,t){const e=Math.max(i.x,t.x),n=Math.max(i.y,t.y),s=Math.min(i.x+i.w,t.x+t.w)-e,r=Math.min(i.y+i.h,t.y+t.h)-n;return s>1&&r>1?{x:e,y:n,w:s,h:r}:null}function ay(i,t){return Math.abs(i.x-t.x)<1&&Math.abs(i.y-t.y)<1&&Math.abs(i.w-t.w)<1&&Math.abs(i.h-t.h)<1}function Je(i){const t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)}function Bo(){const t=Float32Array.from({length:4096},()=>Math.random()*2-1),e=(s,r)=>t[(r%64+64)%64*64+(s%64+64)%64],n=s=>s*s*(3-2*s);return(s,r)=>{const a=Math.floor(s),o=Math.floor(r),l=n(s-a),c=n(r-o),h=e(a,o)+(e(a+1,o)-e(a,o))*l,d=e(a,o+1)+(e(a+1,o+1)-e(a,o+1))*l;return h+(d-h)*c}}function oy(i,t){const e=Bo(),n=Bo(),s=16e4;let r=Math.max(8,Math.ceil(i/3)),a=Math.max(8,Math.ceil(t/3));const o=Math.sqrt(r*a/s);o>1&&(r=Math.ceil(r/o),a=Math.ceil(a/o));const l=Math.min(i,t)/2,c=(V,D)=>Math.min(V,D,i-V,t-D)/l,h=(V,D)=>{const Z=V/l,et=D/l;return e(Z*3,et*3)*.5+e(Z*8,et*8)*.3+e(Z*21,et*21)*.15},d=(V,D)=>Math.max(0,c(V,D)*.9+.12+h(V,D)*.3),u=new Float32Array(r*a),f=new Float32Array(r*a);for(let V=0;V<a;V++)for(let D=0;D<r;D++){const Z=(D+.5)/r*i,et=(V+.5)/a*t,tt=V*r+D;u[tt]=d(Z,et);const mt=(Z+et*.6)/1.17,Mt=(et-Z*.6)/1.17,W=n(mt/70,Mt/70)*.6+n(Mt/31,mt/31)*.3+n(mt/13+7,Mt/13)*.1;f[tt]=Math.max(0,Math.min(1,.5+W))}const g=document.createElement("canvas");g.width=r,g.height=a;const v=g.getContext("2d").createImageData(r,a),p=[],m=5,y=V=>Math.min(i-1,Math.max(1,V)),_=V=>Math.min(t-1,Math.max(1,V)),M=(V,D)=>d(y(V),_(D))-.04,L=(V,D,Z,et,tt)=>{const mt=V+Math.cos(Z)*et,Mt=D+Math.sin(Z)*et;if(p.push({x0:V,y0:D,x1:mt,y1:Mt,at:M(mt,Mt)}),tt<=0||et<6)return;const W=1+Math.floor(Math.random()*3);for(let J=0;J<W;J++){const ct=.25+Math.random()*.6,at=Math.random()<.5?1:-1;L(V+(mt-V)*ct,D+(Mt-D)*ct,Z+at*(Math.PI/3),et*(1-ct)*(.3+Math.random()*.4),tt-1)}},T=(V,D,Z,et,tt)=>{for(let mt=0;mt<et;mt++){Z+=(Math.random()-.5)*.12;const Mt=m*(.6+Math.random()*.9),W=V+Math.cos(Z)*Mt,J=D+Math.sin(Z)*Mt;p.push({x0:V,y0:D,x1:W,y1:J,at:M(W,J)});const ct=(et-mt)*m;for(const at of[-1,1])Math.random()>.3||L(W,J,Z+at*(Math.PI/3),ct*(.12+Math.random()*.35),2);tt>0&&mt>2&&Math.random()<.07&&T(W,J,Z+(Math.random()<.5?1:-1)*(Math.PI/3),Math.round((et-mt)*(.5+Math.random()*.3)),tt-1),V=W,D=J}},A=Math.round(Math.min(110,i*t/9e3));for(let V=0;V<A;V++){const D=Math.random()*i,Z=Math.random()*t,et=i>t?Math.min(i-t/2,Math.max(t/2,D)):i/2,tt=i>t?t/2:Math.min(t-i/2,Math.max(i/2,Z)),mt=Math.atan2(tt-Z,et-D)+(Math.random()-.5)*1.2;T(D,Z,mt,8+Math.floor(Math.random()*18),1)}const C=[],F=Math.round(i*t/2500);for(let V=0;V<F;V++){const D=Math.random()*i,Z=Math.random()*t;C.push({x:D,y:Z,r:Math.random()<.2?2:1,at:d(D,Z)+.08+Math.random()*.2})}const x=[],E=[],B=Math.hypot(i,t),H=2.2,q=(V,D,Z,et,tt,mt)=>{const Mt=Math.hypot(Z-V,et-D)||1,W=-(et-D)/Mt,J=(Z-V)/Mt;x.push({x0:V,y0:D,x1:Z,y1:et,at:tt,dur:Math.max(.004,Mt/B/H),nx:W,ny:J,face:2+mt,weight:mt})},nt=(V,D,Z,et,tt,mt,Mt)=>{let W=0;for(;W<et;){const J=B*(.03+Math.random()*.06);Math.random()<.3?Z+=(Math.random()-.5)*.7:Z+=(Math.random()-.5)*.12;const ct=V+Math.cos(Z)*J,at=D+Math.sin(Z)*J,ot=tt+W/B/H,lt=Math.max(0,mt-(W>et*.55?1:0));if(q(V,D,ct,at,ot,lt),W+=J,Mt>0&&Math.random()<.22){const bt=Math.random()<.5?1:-1;nt(ct,at,Z+bt*(.3+Math.random()*.3),(et-W)*(.35+Math.random()*.3),tt+W/B/H,Math.max(0,lt-1),Mt-1)}if(V=ct,D=at,V<-30||D<-30||V>i+30||D>t+30)return}},X=1+Math.floor(Math.random()*3);for(let V=0;V<X;V++){const D=V===0;let Z,et;for(let ot=0;ot<20&&(Z=i*(D?.35+Math.random()*.3:.12+Math.random()*.76),et=t*(D?.35+Math.random()*.3:.12+Math.random()*.76),!E.every(lt=>Math.hypot(lt.x-Z,lt.y-et)>B*.3));ot++);const tt=D?0:.2+V*.15+Math.random()*.1,mt=D?1:.5+Math.random()*.25;E.push({x:Z,y:et,at:tt,r:B*.025*mt});const Mt=D?8+Math.floor(Math.random()*4):5+Math.floor(Math.random()*3),W=Array.from({length:Mt},(ot,lt)=>(lt+(Math.random()-.5)*.6)/Mt*Math.PI*2),J=W.map(()=>B*mt*(.25+Math.random()*.45)),ct=W.map((ot,lt)=>{const bt=[{x:Z,y:et,r:0}];let Ct=Z,kt=et,P=ot,ae=0;for(;ae<J[lt];){const Ft=B*(.03+Math.random()*.05)*mt;P+=Math.random()<.25?(Math.random()-.5)*.6:(Math.random()-.5)*.1,Ct+=Math.cos(P)*Ft,kt+=Math.sin(P)*Ft,ae+=Ft,bt.push({x:Ct,y:kt,r:ae,ang:P})}return bt});for(const ot of ct)for(let lt=1;lt<ot.length;lt++){const bt=ot[lt].r<ot[ot.length-1].r*.5;if(q(ot[lt-1].x,ot[lt-1].y,ot[lt].x,ot[lt].y,tt+ot[lt-1].r/B/H,bt?2:1),lt>1&&Math.random()<.15){const Ct=Math.random()<.5?1:-1;nt(ot[lt].x,ot[lt].y,ot[lt].ang+Ct*(.3+Math.random()*.35),B*mt*(.05+Math.random()*.12),tt+ot[lt].r/B/H,0,1)}}const at=(ot,lt)=>{for(let bt=1;bt<ot.length;bt++)if(ot[bt].r>=lt){const Ct=(lt-ot[bt-1].r)/(ot[bt].r-ot[bt-1].r);return{x:ot[bt-1].x+(ot[bt].x-ot[bt-1].x)*Ct,y:ot[bt-1].y+(ot[bt].y-ot[bt-1].y)*Ct}}return null};for(let ot=0,lt=B*.03*mt;ot<5;ot++,lt*=1.55+Math.random()*.3)for(let bt=0;bt<Mt;bt++){if(Math.random()>.75-ot*.1)continue;const Ct=at(ct[bt],lt*(.85+Math.random()*.3)),kt=at(ct[(bt+1)%Mt],lt*(.85+Math.random()*.3));if(!Ct||!kt)continue;const P=.35+Math.random()*.3,ae=Ct.x+(kt.x-Ct.x)*P+(Math.random()-.5)*lt*.12,Ft=Ct.y+(kt.y-Ct.y)*P+(Math.random()-.5)*lt*.12,Ht=tt+lt/B/H+.02,Rt=ot<2?1:0;Math.random()<.5?(q(Ct.x,Ct.y,ae,Ft,Ht,Rt),q(ae,Ft,kt.x,kt.y,Ht+.01,Rt)):(q(kt.x,kt.y,ae,Ft,Ht,Rt),q(ae,Ft,Ct.x,Ct.y,Ht+.01,Rt))}}return{w:i,h:t,gw:r,gh:a,at:u,thick:f,img:v,cv:g,fronds:p,glints:C,cracks:x,hits:E}}function ly(){const i=[];for(let t=0;t<44;t++)i.push({x:Math.random()*1.1-.05,y:Math.random()*1.1-.05,at:Math.random()*.65,size:.07+Math.random()*.12,lobes:[3,5,8,13,19].map(e=>({n:e,amp:(.04+Math.random()*.07)/Math.sqrt(e/3),ph:Math.random()*6.3})),drops:Array.from({length:3+Math.floor(Math.random()*5)},()=>({a:Math.random()*6.3,dist:1.1+Math.random()*.5,size:.002+Math.random()*.006}))});return i}function cy(){const i=document.createElement("div");return i.style.cssText="position:absolute;width:0;height:0;overflow:hidden",i.innerHTML=`<svg width="0" height="0" aria-hidden="true">
    <filter id="fx-hem" x="0" y="-5%" width="100%" height="110%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.009 0" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="matrix" result="map"
        values="0 0 0 0 0.5  0 1 0 0 0  0 0 0 0 0  0 0 0 0 1"/>
      <feDisplacementMap in="SourceGraphic" in2="map" scale="16" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </svg>`,i}function hy(i){let t=0;for(const e of String(i))t=(t*31+e.charCodeAt(0))%997;return t}function Le(i){const t=document.createElement("div");return t.className=i,t}function oh(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}class uy{constructor({canvas:t,overlayEl:e,library:n,handlers:s={}}){this.library=n,this.renderer=new kv({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Be,this.renderer.setClearColor(725006,1),this.scene=new uu,this.cam=new t_,this.map=new i_(this.scene,this.renderer),this.grid=new o_(this.scene),this.views=new Map,this.overlay=new E_(e,s),this.dice=new V_({badgeParent:e}),this.fx=new ny(e.parentElement,this.cam),this.walls=new S_(e.parentElement,this.cam),this.speaking=new Set,this.ghosts=new Map,this.turns=new Map,this.origins=new Map,this.originViews=new Map,this.rulerViews=new Map,this.selectedId=null,this.selectedIds=new Set,this.hoveredId=null,this.builtScene=null,this.rect={left:0,top:0,width:1,height:1},this.el=t.parentElement,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(this.el),this.resize()}resize(){var e,n,s;const t=this.el.getBoundingClientRect();this.rect={left:t.left,top:t.top,width:t.width,height:t.height},!(t.width<1||t.height<1)&&(this.renderer.setSize(t.width,t.height,!1),this.cam.resize(t.width,t.height),(e=this.dice)==null||e.resize(t.width,t.height),(n=this.fx)==null||n.resize(this.rect),(s=this.walls)==null||s.resize(this.rect))}lookAt(t,e){this.cam.camera.position.x=t,this.cam.camera.position.y=-e,this.cam.clamp()}unitsAt(t,e,n){const s=(t-this.rect.left)/this.rect.width*2-1,r=-((e-this.rect.top)/this.rect.height*2-1);return this.cam.toUnits(s,r,n)}ndcAt(t,e){return[(t-this.rect.left)/this.rect.width*2-1,-((e-this.rect.top)/this.rect.height*2-1)]}frame(t,e,{isGm:n=!0,self:s=""}={}){var p;const r=Ee(t),a=Lo(r);this.cam.bounds=a,this.map.update(r,a,this.library),this.grid.update(r,a);const o=qv(t,{isGm:n}),l=n?null:wu(r),c=n?null:Zx(o,s,l),h=n?o:Jx(o,this.fx.darkShown,s,c,l);this.reconcile(r,h);const d=Ut.tokens.layerGap,u={library:this.library,selected:!1,hovered:!1,z:0};for(let m=0;m<h.length;m++){const y=h[m],_=this.views.get(y.id);if(!_)continue;u.z=Qx(y.layer,m,d),u.selected=this.selectedIds.has(y.id)||y.id===this.selectedId,u.hovered=y.id===this.hoveredId&&!this.ghosts.size,u.speaking=!!y.owner&&this.speaking.has(y.owner);const M=this.ghosts.get(y.id),L=this.turns.get(y.id),T=L===void 0?y:{...y,facing:L};M?_.snap({...T,x:M.x,y:M.y},e,u):_.sync(T,e,u)}const f=this.syncDrags(h,e,r),g=this.displayTokens(h);this.overlay.sync(g,{camera:this.cam,rect:this.rect,selectedId:this.selectedId,hoveredId:this.hoveredId,dragging:this.ghosts.size>0,rulers:f}),this.renderer.render(this.scene,this.cam.camera);const v=g.map((m,y)=>this.ghosts.has(m.id)?h[y]:m).map(m=>m.light&&c&&!c.has(m.id)?{...m,light:!1}:m);this.fx.frame(r==null?void 0:r.fx,e,{isGm:n,bounds:a,tokens:v,scene:r}),(p=this.walls).shown&&(p.shown=n),this.walls.frame(r),this.dice.frame(e),this.dice.render(this.renderer)}syncDrags(t,e,n){const s=this.cam.pxPerUnit(this.rect.height),r=[];for(const[a,o]of this.origins){const l=t.find(v=>v.id===a);if(!l)continue;let c=this.originViews.get(a);c||(c=new Cs(this.scene),this.originViews.set(a,c)),c.snap({...l,x:o.x,y:o.y},e,{library:this.library,z:Qn.dragOrigin,selected:!1,hovered:!1,alpha:Ut.tokens.originAlpha,ringAlpha:Ut.tokens.originRingAlpha});const h=this.ghosts.get(a)||{x:l.x,y:l.y};let d=this.rulerViews.get(a);d||(d=new x_(this.scene),this.rulerViews.set(a,d)),d.set(o.x,o.y,h.x,h.y,s);const u=n==null?void 0:n.grid,[f,g]=gl(h.x,h.y,u,l.size);r.push({id:a,ax:o.x,ay:o.y,bx:h.x,by:h.y,text:ax(o.x,o.y,f,g,u).text})}for(const[a,o]of this.originViews)this.origins.has(a)||(o.dispose(),this.originViews.delete(a));for(const[a,o]of this.rulerViews)this.origins.has(a)||(o.dispose(),this.rulerViews.delete(a));return r}displayTokens(t){return t.map(e=>{const n=this.turns.get(e.id),s=n===void 0?e:{...e,facing:n},r=this.ghosts.get(s.id);if(r)return{...s,x:r.x,y:r.y};const a=this.views.get(s.id);if(!(a!=null&&a.sliding))return s;const o=a.root.position;return{...s,x:o.x,y:Nu(o.y)}})}reconcile(t,e){const n=new Set;for(const s of e)n.add(s.id),this.views.has(s.id)||this.views.set(s.id,new Cs(this.scene));for(const[s,r]of this.views)n.has(s)||(r.dispose(),this.views.delete(s));if((t==null?void 0:t.id)!==this.builtScene){for(const[,s]of this.views)s.placed=!1;this.builtScene=(t==null?void 0:t.id)??null}}fit(t){const e=Lo(Ee(t));this.cam.bounds=e;const n=Math.min(.5,Math.max(0,this.leftInset()/Math.max(1,this.rect.width)));this.cam.frame(e,void 0,n)}leftInset(){return 0}dispose(){this.observer.disconnect();for(const[,t]of this.views)t.dispose();this.views.clear();for(const[,t]of this.originViews)t.dispose();this.originViews.clear();for(const[,t]of this.rulerViews)t.dispose();this.rulerViews.clear(),this.overlay.clear(),this.map.dispose(),this.grid.dispose(),this.renderer.dispose()}}const ci=new Bt,dy=4,fy=15,py=9;class my{constructor(t,{getState:e,canGrab:n,onSelect:s,onDragMove:r,onDropGroup:a,onContext:o,onTurn:l,onPing:c,isSelected:h=()=>!1,groupOf:d=p=>[p],onToggle:u,locked:f,hasSelection:g=()=>!1,drawing:v=()=>null}){this.drawing=v,this.stage=t,this.locked=f,this.getState=e,this.canGrab=n||(()=>!0),this.onSelect=s,this.onDragMove=r,this.onContext=o,this.onTurn=l,this.onDropGroup=a,this.onPing=c,this.isSelected=h,this.groupOf=d,this.onToggle=u,this.hasSelection=g,this.pressAt={x:0,y:0},this.group=[],this.narrowTo=null,this.mode=null,this.pointerId=null,this.dragId=null,this.grabDx=0,this.grabDy=0,this.last={x:0,y:0},this.start={x:0,y:0},this.moved=!1,this.pendingDeselect=!1;const p=t.renderer.domElement;this.el=p,p.addEventListener("pointerdown",m=>this.down(m)),p.addEventListener("pointermove",m=>this.move(m)),p.addEventListener("pointerup",m=>this.up(m)),p.addEventListener("pointercancel",m=>this.up(m)),p.addEventListener("wheel",m=>this.wheel(m),{passive:!1}),p.addEventListener("pointerleave",()=>this.hover(null)),p.addEventListener("contextmenu",m=>this.context(m))}cancel(){var t,e;if(this.pointerId!==null){(e=(t=this.el).releasePointerCapture)==null||e.call(t,this.pointerId),this.pointerId=null,this.dragId&&this.stage.turns.delete(this.dragId);for(const n of this.group)this.stage.ghosts.delete(n.id),this.stage.origins.delete(n.id);this.originAt=null,this.dragId=null,this.group=[],this.narrowTo=null,this.pendingDeselect=!1,this.mode=null}}down(t){var o,l,c,h,d;if(this.pointerId!==null||(o=this.locked)!=null&&o.call(this))return;this.el.setPointerCapture(t.pointerId),this.pointerId=t.pointerId,this.moved=!1,this.start.x=t.clientX,this.start.y=t.clientY,this.last.x=t.clientX,this.last.y=t.clientY;const e=this.stage.unitsAt(t.clientX,t.clientY,ci);if(t.button===0&&t.altKey){t.preventDefault(),this.mode="ping",(l=this.onPing)==null||l.call(this,e.x,e.y,t.shiftKey);return}if(t.button===0&&t.shiftKey){const u=pi(this.getState(),e.x,e.y,{isGm:!0});if(u&&this.canGrab(u)){this.mode="toggle",(c=this.onToggle)==null||c.call(this,u.id);return}}if(t.button===1||t.shiftKey){this.mode="pan";return}if(t.button===2)return;const n=this.drawing();if(n){this.mode="draw",n.down({x:e.x,y:e.y},t);return}const s=this.arrowAt(e);if(s){this.mode="turn",this.dragId=s.id,(h=this.onSelect)==null||h.call(this,s.id),this.stage.turns.set(s.id,s.facing);return}const r=pi(this.getState(),e.x,e.y,{isGm:!0}),a=r&&this.stage.views.has(r.id)?r:null;if(a&&this.canGrab(a)){this.mode="drag",this.dragId=a.id,this.grabDx=a.x-e.x,this.grabDy=a.y-e.y,this.isSelected(a.id)?this.narrowTo=a.id:(d=this.onSelect)==null||d.call(this,a.id);const u=this.getState(),f=u.scenes[u.activeScene];this.group=this.groupOf(a.id).map(g=>f==null?void 0:f.tokens[g]).filter(g=>g&&this.canGrab(g)).map(g=>({id:g.id,x:g.x,y:g.y})),this.originAt=!0;for(const g of this.group)this.stage.ghosts.set(g.id,{x:g.x,y:g.y})}else this.mode="pan",a||(this.pendingDeselect=!0,this.pressAt.x=e.x,this.pressAt.y=e.y)}move(t){var s,r,a;if(this.pointerId===null){const o=this.stage.unitsAt(t.clientX,t.clientY,ci),l=this.drawing();if(l){l.hover({x:o.x,y:o.y});return}const c=this.arrowAt(o);this.hover((c==null?void 0:c.id)??((s=pi(this.getState(),o.x,o.y,{isGm:!0}))==null?void 0:s.id)??null,!!c);return}if(t.pointerId!==this.pointerId)return;const e=t.clientX-this.last.x,n=t.clientY-this.last.y;if(this.last.x=t.clientX,this.last.y=t.clientY,this.moved||(this.moved=Math.hypot(t.clientX-this.start.x,t.clientY-this.start.y)>dy),this.mode==="draw"){const o=this.stage.unitsAt(t.clientX,t.clientY,ci);(r=this.drawing())==null||r.move({x:o.x,y:o.y});return}if(this.mode==="pan"){const o=this.stage.cam.viewUnits/Math.max(1,this.stage.rect.height);this.stage.cam.panBy(-e*o,n*o);return}if(this.mode==="turn"&&this.dragId){const o=this.tokenById(this.dragId);if(!o)return;const l=this.stage.unitsAt(t.clientX,t.clientY,ci),c=Math.atan2(l.y-o.y,l.x-o.x)*180/Math.PI,h=t.altKey?1:fy,d=(Math.round(c/h)*h%360+360)%360;this.stage.turns.set(this.dragId,d*Math.PI/180);return}if(this.mode==="drag"&&this.dragId){const o=this.stage.unitsAt(t.clientX,t.clientY,ci),l=this.group.find(f=>f.id===this.dragId);if(!l)return;const c=o.x+this.grabDx,h=o.y+this.grabDy,d=c-l.x,u=h-l.y;if(this.originAt){for(const f of this.group)this.stage.origins.set(f.id,{x:f.x,y:f.y});this.originAt=null}for(const f of this.group)this.stage.ghosts.set(f.id,{x:f.x+d,y:f.y+u});(a=this.onDragMove)==null||a.call(this,this.dragId,c,h)}}hover(t,e=!1){const n=e?"crosshair":t?"grab":"";this.stage.hoveredId===t&&this.el.style.cursor===n||(this.stage.hoveredId=t,this.el.style.cursor=n)}tokenById(t){var n;const e=this.getState();return((n=e.scenes[e.activeScene])==null?void 0:n.tokens[t])||null}arrowAt(t){const e=this.getState(),n=e.scenes[e.activeScene];if(!n)return null;const s=Ut.tokens.arrow,r=py/this.stage.cam.pxPerUnit(Math.max(1,this.stage.rect.height));for(let a=n.tokenOrder.length-1;a>=0;a--){const o=n.tokens[n.tokenOrder[a]];if(!o||typeof o.facing!="number"||!this.canGrab(o))continue;const l=Math.max(.05,o.size),c=l*s.length,h=l/2+l*s.gap,d=t.x-o.x,u=t.y-o.y,f=d*Math.cos(o.facing)+u*Math.sin(o.facing),g=-d*Math.sin(o.facing)+u*Math.cos(o.facing),v=Math.max(l/2,h-r);if(f>=v&&f<=h+c+r&&Math.abs(g)<=c*.46+r)return o}return null}up(t){var n,s,r,a,o,l,c,h,d;if(t.pointerId!==this.pointerId)return;if((s=(n=this.el).releasePointerCapture)==null||s.call(n,t.pointerId),this.pointerId=null,this.mode==="draw"){(r=this.drawing())==null||r.up(),this.mode=null;return}if(this.mode==="turn"&&this.dragId){const u=this.stage.turns.get(this.dragId);this.stage.turns.delete(this.dragId),this.moved&&typeof u=="number"&&((a=this.onTurn)==null||a.call(this,this.dragId,u)),this.dragId=null}else if(this.mode==="drag"&&this.dragId){const u=this.group.map(f=>({id:f.id,...this.stage.ghosts.get(f.id)}));for(const f of this.group)this.stage.ghosts.delete(f.id),this.stage.origins.delete(f.id);this.originAt=null,this.moved?(o=this.onDropGroup)==null||o.call(this,u.filter(f=>Number.isFinite(f.x))):this.narrowTo&&((l=this.onSelect)==null||l.call(this,this.narrowTo)),this.dragId=null,this.group=[],this.narrowTo=null}else this.pendingDeselect&&!this.moved&&(this.hasSelection()?(c=this.onSelect)==null||c.call(this,null):(h=this.onPing)==null||h.call(this,this.pressAt.x,this.pressAt.y,!1));this.pendingDeselect=!1,this.mode=null;const e=this.stage.unitsAt(t.clientX,t.clientY,ci);this.hover(((d=pi(this.getState(),e.x,e.y,{isGm:!0}))==null?void 0:d.id)??null)}wheel(t){var r;if(t.preventDefault(),(r=this.locked)!=null&&r.call(this)||!t.deltaY)return;const[e,n]=this.stage.ndcAt(t.clientX,t.clientY),s=Ut.camera.zoomStep;this.stage.cam.zoomAt(t.deltaY>0?s:1/s,e,n)}context(t){var s;t.preventDefault();const e=this.stage.unitsAt(t.clientX,t.clientY,ci),n=pi(this.getState(),e.x,e.y,{isGm:!0});(s=this.onContext)==null||s.call(this,n,t)}}function w(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s==="html"?n.innerHTML=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="dataset"?Object.assign(n.dataset,r):n.setAttribute(s,r===!0?"":r));for(const s of e.flat())s==null||s===!1||n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function de(i,t,e,n){return e.id=i,w("div",{class:"field"},w("label",{for:i,text:t}),e,n?w("span",{class:"hint",text:n}):null)}function fe(i,t){if(document.activeElement===i)return;const e=String(t);i.value!==e&&(i.value=e)}function La(i,t){document.activeElement!==i&&i.checked!==!!t&&(i.checked=!!t)}const hs=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`,zo=i=>parseInt(String(i).replace("#",""),16)&16777215,gy={square:"Square","hex-pointy":"Hex — pointy top","hex-flat":"Hex — flat top",none:"No grid"};class Vu{constructor({onCommand:t,onImportMap:e,onImportToken:n,onAddBlank:s,onFit:r,onPickMap:a,onDetect:o,onClose:l}){this.onCommand=t,this.onClose=l,this.els={},this.els.library=w("select",{onchange:()=>{var u;const d=(u=this.library)==null?void 0:u[this.els.library.selectedIndex-1];this.els.library.selectedIndex=0,d&&a(d)}},w("option",{text:"Map pack…"})),this.els.libraryField=de("g-lib","Library",this.els.library),this.els.libraryField.hidden=!0;const c=w("input",{type:"file",accept:"image/*",class:"file",onchange:d=>{var f;const u=(f=d.target.files)==null?void 0:f[0];d.target.value="",u&&e(u)}}),h=w("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:d=>{const u=[...d.target.files||[]];d.target.value="",u.length&&n(u)}});this.els.kind=w("select",{onchange:()=>this.pushGrid({kind:this.els.kind.value})},...yu.map(d=>w("option",{value:d,text:gy[d]}))),this.els.unitPx=w("input",{type:"number",min:"16",max:"1024",step:"1",oninput:()=>this.pushGrid({unitPx:cr(this.els.unitPx.value,16,1024,Ut.grid.unitPx)})}),this.els.ox=w("input",{type:"number",step:"1",oninput:()=>this.pushGrid({ox:cr(this.els.ox.value,-4096,4096,0)})}),this.els.oy=w("input",{type:"number",step:"1",oninput:()=>this.pushGrid({oy:cr(this.els.oy.value,-4096,4096,0)})}),this.els.color=w("input",{type:"color",oninput:()=>this.pushGrid({color:zo(this.els.color.value)})}),this.els.opacity=w("input",{type:"range",min:"0",max:"1",step:"0.02",oninput:()=>this.pushGrid({opacity:+this.els.opacity.value})}),this.els.unitLabel=w("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"sq",oninput:()=>this.pushGrid({unitLabel:this.els.unitLabel.value.slice(0,8)})}),this.els.distanceLabel=w("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"ft",oninput:()=>this.pushGrid({distanceLabel:this.els.distanceLabel.value.slice(0,8)})}),this.els.measure=w("select",{onchange:()=>this.pushGrid({measure:this.els.measure.value})},w("option",{value:"chebyshev",text:"Diagonal = 1 (5e)"}),w("option",{value:"euclid",text:"True distance"}),w("option",{value:"alternating",text:"Diagonal 1-2-1"})),this.els.snap=w("select",{id:"g-snap",onchange:()=>this.pushGrid({snap:this.els.snap.value})},w("option",{value:"soft",text:"Soft — pulls when close"}),w("option",{value:"grid",text:"Grid — always on a square"}),w("option",{value:"off",text:"Off — anywhere at all"})),this.els.magnet=w("input",{type:"range",min:"0.02",max:"0.25",step:"0.01",id:"g-magnet",oninput:()=>this.pushGrid({magnet:+this.els.magnet.value})}),this.els.feet=w("input",{type:"number",min:"1",max:"1000",step:"1",oninput:()=>this.pushGrid({perUnit:cr(this.els.feet.value,.01,1e5,5)})}),this.els.mapNote=w("p",{class:"note"}),this.root=w("aside",{class:"panel flyout",id:"toolbar",hidden:!0},w("button",{type:"button",class:"ghost close",title:"Close (Esc)","aria-label":"Close",text:"×",onclick:()=>l==null?void 0:l()}),w("div",{class:"tool-sections"},w("section",{dataset:{tool:"map"}},w("h2",{text:"Map"}),this.els.libraryField,w("div",{class:"row"},w("button",{type:"button",class:"primary",text:"Load map…",onclick:()=>c.click()}),w("button",{type:"button",class:"ghost",text:"Fit",title:"Frame the whole map",onclick:r}),w("button",{type:"button",class:"ghost",text:"Detect grid",title:"Measure the square size from the image itself",onclick:o})),c,this.els.mapNote),w("section",{dataset:{tool:"grid"}},w("h2",{text:"Grid"}),de("g-kind","Type",this.els.kind),de("g-unit","Pixels per square",this.els.unitPx,"Read from the filename when a map pack states it, e.g. (33x17)."),w("div",{class:"pair"},de("g-ox","Offset X",this.els.ox),de("g-oy","Offset Y",this.els.oy)),w("div",{class:"pair"},de("g-color","Line",this.els.color),de("g-op","Opacity",this.els.opacity)),de("g-snap","Snapping",this.els.snap),de("g-magnet","Pull",this.els.magnet,"How close a token has to be before the grid takes it."),w("details",{class:"more"},w("summary",{text:"Distance & measuring"}),w("div",{class:"pair"},de("g-per","Distance per cell",this.els.feet),de("g-measure","Measuring",this.els.measure)),w("div",{class:"pair"},de("g-unit-label","Cell called",this.els.unitLabel),de("g-dist-label","Distance called",this.els.distanceLabel)))),w("section",{dataset:{tool:"tokens"}},w("h2",{text:"Tokens"}),w("div",{class:"row"},w("button",{type:"button",class:"primary",text:"Add from file…",onclick:()=>h.click()}),w("button",{type:"button",class:"ghost",text:"Blank",title:"A plain coloured disc",onclick:s})),h,w("p",{class:"note",text:"Drag to move. Shift-drag or middle-drag to pan. Scroll to zoom."}))))}addSection(t){this.root.querySelector(".tool-sections").append(t),t.hidden=this.root.dataset.open!==t.dataset.tool}show(t){this.escBound||(this.root.addEventListener("keydown",e=>{var n;e.key==="Escape"&&(e.stopPropagation(),(n=this.onClose)==null||n.call(this))}),this.escBound=!0),this.root.hidden=!t,this.root.dataset.open=t||"";for(const e of this.root.querySelectorAll("section[data-tool]"))e.hidden=t!=="all"&&e.dataset.tool!==t}setLibrary(t){this.library=t,this.els.libraryField.hidden=!t.length,t.length&&this.els.library.replaceChildren(w("option",{text:`Map pack — ${t.length} maps`}),...t.map(e=>w("option",{text:`${e.name.replace(/\.[a-z0-9]+$/i,"")}  ·  ${(e.size/1048576).toFixed(1)}MB`})))}pushGrid(t){this.sceneId&&this.onCommand(["scene.grid",this.sceneId,t])}refresh(t){const e=t.activeScene?t.scenes[t.activeScene]:null;if(this.sceneId=(e==null?void 0:e.id)||null,this.root.classList.toggle("no-scene",!e),!e)return;const n=e.grid;fe(this.els.kind,n.kind),fe(this.els.unitPx,n.unitPx),fe(this.els.ox,n.ox),fe(this.els.oy,n.oy),fe(this.els.color,hs(n.color)),fe(this.els.opacity,n.opacity),fe(this.els.feet,n.perUnit),fe(this.els.unitLabel,n.unitLabel),fe(this.els.distanceLabel,n.distanceLabel),fe(this.els.measure,n.measure),fe(this.els.snap,n.snap),fe(this.els.magnet,n.magnet),this.els.measure.disabled=Nr(n.kind),this.els.snap.disabled=n.kind==="none",this.els.magnet.disabled=n.kind==="none"||n.snap!=="soft";const s=e.map?t.assets[e.map]:null;if(s){const r=(e.artW/(n.unitPx||1)).toFixed(1),a=(e.artH/(n.unitPx||1)).toFixed(1);this.els.mapNote.textContent=`${s.name} — ${e.artW}×${e.artH}px, about ${r}×${a} squares`+(s.scaled?` · sent as ${Math.round(s.size/1024)}KB`:"")}else this.els.mapNote.textContent="No map yet. The grid still works on a blank table."}static gridGuessFor(t,e,n){const s=cx(t,e,n);return s?{unitPx:s.unitPx,ox:s.ox,oy:s.oy,cols:s.cols,rows:s.rows}:null}}function cr(i,t,e,n){const s=Number(i);return Number.isFinite(s)?Math.min(e,Math.max(t,s)):n}const vy=i=>((i*180/Math.PI+90)%360+360)%360,lh=i=>(i-90)%360*Math.PI/180,Ia=15;class xy{constructor({onChange:t,label:e="Facing"}){this.onChange=t,this.degrees=0,this.enabled=!1,this.needle=document.createElement("i"),this.needle.className="dial-needle",this.readout=document.createElement("span"),this.readout.className="dial-readout",this.root=document.createElement("div"),this.root.className="dial",this.root.tabIndex=0,this.root.setAttribute("role","slider"),this.root.setAttribute("aria-label",e),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","359"),this.root.append(this.needle,this.readout),this.root.addEventListener("pointerdown",n=>this.begin(n)),this.root.addEventListener("keydown",n=>this.key(n))}begin(t){if(!this.enabled)return;t.preventDefault(),this.root.focus(),this.root.setPointerCapture(t.pointerId);const e=s=>this.aim(s),n=()=>{this.root.removeEventListener("pointermove",e),this.root.removeEventListener("pointerup",n),this.root.removeEventListener("pointercancel",n)};this.root.addEventListener("pointermove",e),this.root.addEventListener("pointerup",n),this.root.addEventListener("pointercancel",n),this.aim(t)}aim(t){const e=this.root.getBoundingClientRect(),n=t.clientX-(e.left+e.width/2),s=t.clientY-(e.top+e.height/2),r=Math.atan2(n,-s)*180/Math.PI;this.set(Math.round(r/Ia)*Ia,!0)}key(t){if(!this.enabled)return;const e=t.shiftKey?45:Ia,s={ArrowRight:e,ArrowUp:e,ArrowLeft:-e,ArrowDown:-e,Home:-this.degrees,End:180-this.degrees}[t.key];s!==void 0&&(t.preventDefault(),t.stopPropagation(),this.set(this.degrees+s,!0))}set(t,e=!1){var s;const n=(Math.round(t)%360+360)%360;n===this.degrees&&!e||(this.degrees=n,this.paint(),e&&((s=this.onChange)==null||s.call(this,n)))}setEnabled(t){this.enabled=t,this.root.classList.toggle("off",!t),this.root.setAttribute("aria-disabled",t?"false":"true"),this.root.tabIndex=t?0:-1,this.paint()}paint(){this.needle.style.transform=`rotate(${this.degrees}deg)`,this.readout.textContent=this.enabled?`${this.degrees}°`:"—",this.root.setAttribute("aria-valuenow",String(this.degrees)),this.root.setAttribute("aria-valuetext",this.enabled?`${this.degrees} degrees`:"no facing")}}const _y={bg:"Background",token:"Tokens",gm:"GM only"};class yy{constructor({onCommand:t,onDelete:e,onSizeCommitted:n}){this.onCommand=t,this.id=null,this.els={};const s=r=>{this.id&&this.onCommand(["tok.patch",this.id,r])};this.els.name=w("input",{type:"text",maxlength:"48",placeholder:"Unnamed",oninput:()=>s({name:this.els.name.value.slice(0,48)})}),this.els.size=w("input",{type:"number",min:String(Ut.tokens.minSize),max:String(Ut.tokens.maxSize),step:"0.25",oninput:()=>s({size:Sy(+this.els.size.value,Ut.tokens.minSize,Ut.tokens.maxSize)}),onchange:()=>{this.id&&(n==null||n(this.id))}}),this.els.border=w("input",{type:"color",oninput:()=>{this.player||s({border:zo(this.els.border.value)})},onchange:()=>{this.player&&this.player.onColor(zo(this.els.border.value))}}),this.els.borderField=de("t-border","Border",this.els.border),this.els.shape=w("select",{onchange:()=>s({shape:this.els.shape.value})},w("option",{value:"circle",text:"Circle"}),w("option",{value:"square",text:"Square"})),this.els.layer=w("select",{onchange:()=>s({layer:this.els.layer.value})},...Co.map(r=>w("option",{value:r,text:_y[r]}))),this.els.hp=w("input",{type:"number",min:"0",step:"1",oninput:()=>s({hp:Math.max(0,Math.round(+this.els.hp.value||0))})}),this.els.maxHp=w("input",{type:"number",min:"0",step:"1",oninput:()=>s({maxHp:Math.max(0,Math.round(+this.els.maxHp.value||0))})}),this.els.rot=w("input",{type:"range",min:"0",max:"359",step:"1",oninput:()=>s({rot:+this.els.rot.value*Math.PI/180})}),this.els.dial=new xy({onChange:r=>s({facing:lh(r)})}),this.els.facingOn=w("input",{type:"checkbox",id:"t-facing",onchange:()=>{const r=this.els.facingOn.checked;this.els.dial.setEnabled(r),s({facing:r?lh(this.els.dial.degrees):null})}}),this.els.lightOn=w("input",{type:"checkbox",id:"t-light",onchange:()=>{this.els.lightRange.disabled=!this.els.lightOn.checked,s({light:this.els.lightOn.checked})}}),this.els.lightRange=w("input",{type:"number",id:"t-light-range",min:"1",max:String(Er),step:"1","aria-label":"Light reach",oninput:()=>{const r=Math.round(+this.els.lightRange.value);r>=1&&s({lightRange:Math.min(Er,r)})}}),this.els.lightUnit=w("span",{class:"hint"}),this.els.hidden=w("input",{type:"checkbox",onchange:()=>s({hidden:this.els.hidden.checked})}),this.els.status=Po.map(r=>w("button",{type:"button",class:"ghost",dataset:{status:r},"aria-pressed":"false",onclick:()=>{const a=new Set(this.status||[]);a.has(r)?a.delete(r):a.add(r),s({status:Po.filter(o=>a.has(o))})}},w("span",{class:"icon",html:Fu(r)}),w("span",{text:_l[r].label}))),this.els.where=w("p",{class:"note"}),this.root=w("aside",{class:"panel",id:"inspector"},w("div",{class:"panel-head"},w("h1",{text:"Token"})),w("div",{class:"empty",text:"Nothing selected. Click a token; shift-click for more."}),w("div",{class:"multi"},this.els.count=w("p",{class:"count"}),w("p",{class:"note",text:"Drag any of them to move them together, or nudge them with the arrow keys. Shift-click to add or remove one."}),w("button",{type:"button",class:"danger",text:"Delete selected",onclick:()=>e()})),w("div",{class:"body"},de("t-name","Name",this.els.name),w("div",{class:"pair"},de("t-size","Size (squares)",this.els.size),this.els.borderField),w("div",{class:"pair gm-only"},de("t-shape","Shape",this.els.shape),de("t-layer","Layer",this.els.layer)),w("div",{class:"pair gm-only"},de("t-hp","HP",this.els.hp),de("t-maxhp","Max HP",this.els.maxHp)),w("div",{class:"facing-row"},this.els.dial.root,w("div",{class:"col"},w("label",{class:"check",for:"t-facing"},this.els.facingOn," Facing"),w("span",{class:"hint",text:"Which way it is looking. Drag the dial, or use the arrow keys."}))),w("div",{class:"light-row"},w("label",{class:"check",for:"t-light"},this.els.lightOn," Light"),this.els.lightRange,this.els.lightUnit),w("div",{class:"field"},w("label",{text:"Status"}),w("div",{class:"status-grid"},...this.els.status)),de("t-rot","Artwork rotation",this.els.rot),w("label",{class:"check gm-only",for:"t-hidden"},this.els.hidden," Hidden from players"),this.els.where,w("div",{class:"row gm-only"},w("button",{type:"button",class:"ghost",text:"To front",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!0])}),w("button",{type:"button",class:"ghost",text:"To back",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!1])})),w("button",{type:"button",class:"danger",text:"Delete token",onclick:()=>this.id&&e()}))),this.els.hidden.id="t-hidden",this.player=null}setPlayer(t){this.player=t,this.root.classList.toggle("player",!!t),this.els.borderField.querySelector("label").textContent=t?"Your colour":"Border"}refresh(t,e,n=e?1:0){const s=t.activeScene?t.scenes[t.activeScene]:null,r=e&&(s==null?void 0:s.tokens[e])||null;this.id=(r==null?void 0:r.id)||null,this.count=n;const a=n>1;if(this.root.classList.toggle("no-token",!r&&!a),this.root.classList.toggle("many",a),a&&(this.els.count.textContent=`${n} tokens selected`),!r||a)return;fe(this.els.name,r.name),fe(this.els.size,Da(r.size)),fe(this.els.border,hs(r.border)),fe(this.els.shape,r.shape),fe(this.els.layer,r.layer),fe(this.els.hp,r.hp),fe(this.els.maxHp,r.maxHp),fe(this.els.rot,Math.round((r.rot||0)*180/Math.PI)%360),La(this.els.hidden,r.hidden),this.status=r.status||[];for(const h of this.els.status)h.setAttribute("aria-pressed",String(this.status.includes(h.dataset.status)));La(this.els.lightOn,!!r.light),fe(this.els.lightRange,r.lightRange??2),this.els.lightRange.disabled=!r.light,this.els.lightUnit.textContent=`${s.grid.kind.startsWith("hex")?"hexes":"squares"} of light round it`;const o=typeof r.facing=="number"&&Number.isFinite(r.facing);La(this.els.facingOn,o),this.els.dial.setEnabled(o),document.activeElement===this.els.dial.root&&this.id===this.dialFor||this.els.dial.set(o?vy(r.facing):0),this.dialFor=this.id;const c=s.grid;this.els.where.textContent=`At ${My(r.x,r.y)} · ${Da(r.x)}, ${Da(r.y)} units`+(c.kind==="none"?"":` · ${c.perUnit}${c.distanceLabel} per ${c.unitLabel}`)}}function My(i,t){const e=Math.floor(i),n=Math.floor(t);return`${e<0?`-${ch(-e-1)}`:ch(e)}${n+1}`}function ch(i){let t="",e=i;do t=String.fromCharCode(65+e%26)+t,e=Math.floor(e/26)-1;while(e>=0);return t}function Sy(i,t,e){return Number.isFinite(i)?Math.min(e,Math.max(t,i)):t}function Da(i){return Math.round(i*100)/100}const by=new Set(["INPUT","SELECT","TEXTAREA"]),wy=new Set(["Enter","NumpadEnter","Space"]),Ey=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown","Home","End"]);function Ty(i=null){const t=document.activeElement;return t?t.tagName==="BUTTON"?!i||wy.has(i.code):by.has(t.tagName)||t.isContentEditable:!1}class Ay{constructor(t={},e=null){this.actions=new Map(Object.entries(t)),this.held=new Set,this.onDown=n=>{Ty(n)||(n.repeat||this.held.add(n.code),(e!=null&&e(n.code,n)||Ey.has(n.code))&&n.preventDefault())},this.onUp=n=>this.held.delete(n.code),this.onBlur=()=>this.held.clear(),window.addEventListener("keydown",this.onDown),window.addEventListener("keyup",this.onUp),window.addEventListener("blur",this.onBlur)}action(t){const e=this.actions.get(t);if(!e)return!1;for(const n of e)if(this.held.has(n))return!0;return!1}axis(t,e){return(this.action(e)?1:0)-(this.action(t)?1:0)}vector(t,e,n,s,r={x:0,y:0}){r.x=this.axis(t,e),r.y=this.axis(n,s);const a=Math.hypot(r.x,r.y);return a>1&&(r.x/=a,r.y/=a),r}dispose(){window.removeEventListener("keydown",this.onDown),window.removeEventListener("keyup",this.onUp),window.removeEventListener("blur",this.onBlur),this.held.clear()}}const Go=3,_n={name:32,members:16,peerId:64,need:256,req:32,upload:8*1024*1024},bs=[14263361,6003669,12605771,10189528,6535316,14186655,5224624,11909199],Wu=i=>typeof i=="string";function Br(i,t="Player"){return(Wu(i)?i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim():"").slice(0,_n.name)||t}function Ry(i){return Wu(i)&&i.length>0&&i.length<=_n.peerId}const Cy=(i,t)=>({t:"hello",p:Go,name:Br(i),gm:t?1:0});function Py(i){return!i||i.t!=="hello"?null:{protocol:Number.isInteger(i.p)?i.p:-1,name:Br(i.name),gm:i.gm===1}}function Ly(i){return{t:"roster",r:i.slice(0,_n.members).map(t=>[t.peerId,t.name,t.role===en?1:0,t.color])}}function Iy(i){return!i||i.t!=="roster"||!Array.isArray(i.r)?null:i.r.slice(0,_n.members).filter(t=>Array.isArray(t)&&Ry(t[0])).map(([t,e,n,s])=>({peerId:t,name:Br(e),role:n===1?en:Jn,color:Number.isInteger(s)?s&16777215:bs[0]}))}const Dy=["full","protocol"];function Uy(i){return!i||i.t!=="nope"?null:Dy.includes(i.why)?i.why:"full"}function ky(i){if(!i||i.t!=="doc")return null;const t=i.s;return!t||typeof t!="object"||Array.isArray(t)||!Number.isInteger(t.seq)||t.seq<0||!t.scenes||typeof t.scenes!="object"?null:t}function Ny(i){return!i||i.t!=="op"||!Number.isInteger(i.n)||i.n<1||!Array.isArray(i.c)||typeof i.c[0]!="string"?null:{seq:i.n,cmd:i.c}}const Fy=/^[0-9a-f]{64}$/,Rr=i=>typeof i=="string"&&Fy.test(i);function Oy(i){return!i||i.t!=="need"||!Array.isArray(i.h)?[]:[...new Set(i.h.slice(0,_n.need).filter(Rr))]}function hh(i){return Array.isArray(i)?i.slice(0,_n.req).filter(t=>Array.isArray(t)&&typeof t[0]=="string"):[]}const uh=()=>Bu(()=>import("./room-D300m2Q-.js"),[],import.meta.url);class Ps{constructor(t,e={}){this.role=t,this.handlers=e,this.code="",this.name="",this.selfId=null,this.gmId=null,this.admitted=!1,this.link=null,this.members=new Map,this.pending=new Set,this.backlog=[],this.closed=!1,this.voice=null}get isGm(){return this.role===en}roster(){return[...this.members.values()]}static async host(t,e,n=null){const s=await uh(),r=new Ps(en,e);return r.open(s,n?s.normaliseCode(n):s.randomCode(),t),r.members.set(r.selfId,Tr(r.selfId,r.name,{role:en,color:bs[0]})),r.emitRoster(),r}static async join(t,e,n){const s=await uh(),r=new Ps(Jn,n);return r.open(s,s.normaliseCode(t),e),r}open(t,e,n){const s=Ut.multiplayer;this.code=e,this.name=Br(n,this.isGm?"GM":"Player"),this.selfId=t.selfId,this.link=t.joinRoom({appId:s.appId,code:e,maxPeers:s.maxPlayers-1},{onPeerJoin:r=>this.peerJoined(r),onPeerLeave:r=>this.peerLeft(r),onMessage:(r,a)=>this.receive(r,a),onRelay:r=>{var a,o;return(o=(a=this.handlers).onRelay)==null?void 0:o.call(a,r)},onAsset:(r,a,o)=>{var l,c;this.entitled(o)&&((c=(l=this.handlers).onAsset)==null||c.call(l,r,a,o))},onPeerStream:(r,a,o)=>{var l;return(l=this.voice)==null?void 0:l.stream(r,a,o)},onAssetProgress:(r,a,o)=>{var l,c;this.entitled(o)&&((c=(l=this.handlers).onAssetProgress)==null||c.call(l,r,a,o))}})}listen(t){if(this.handlers=t,!!t.onMessage)for(const[e,n]of this.backlog.splice(0))t.onMessage(e,n)}entitled(t){return this.isGm?this.members.has(t)&&t!==this.selfId:t===this.gmId}leave(){var t;this.closed||(this.closed=!0,(t=this.link)==null||t.leave())}peerJoined(t){var e;this.pending.add(t),this.link.send(Cy(this.name,this.isGm),t),(e=this.voice)==null||e.join(t)}peerLeft(t){var e,n,s,r,a;this.pending.delete(t),(e=this.voice)==null||e.leave(t),this.isGm?this.members.delete(t)&&this.emitRoster():t===this.gmId?(this.gmId=null,(s=(n=this.handlers).onGmLeft)==null||s.call(n)):this.members.delete(t)&&((a=(r=this.handlers).onRoster)==null||a.call(r,this.roster()))}receive(t,e){var n,s,r,a,o,l,c;if(!(this.closed||!t||typeof t.t!="string")){if(t.t==="hello")return this.onHello(Py(t),e);if((t.t==="voice"||t.t==="music")&&this.members.has(e))return(n=this.voice)==null?void 0:n.message(t,e);if(this.entitled(e)){if(this.isGm||t.t!=="roster"&&t.t!=="nope"){this.handlers.onMessage?this.handlers.onMessage(t,e):this.backlog.push([t,e]);return}if(t.t==="roster"){const h=Iy(t);if(!h)return;this.members=new Map(h.map(d=>[d.peerId,d])),!this.admitted&&this.members.has(this.selfId)&&(this.admitted=!0,(r=(s=this.handlers).onAdmitted)==null||r.call(s)),(o=(a=this.handlers).onRoster)==null||o.call(a,this.roster())}else t.t==="nope"&&((c=(l=this.handlers).onRefused)==null||c.call(l,Uy(t)),this.leave())}}}onHello(t,e){var n,s,r,a;if(!(!t||!this.pending.has(e))){if(this.pending.delete(e),this.isGm){if(t.gm)return;if(t.protocol!==Go)return this.link.send({t:"nope",why:"protocol"},e);if(this.members.size>=Ut.multiplayer.maxPlayers)return this.link.send({t:"nope",why:"full"},e);const o=new Set(this.roster().map(c=>c.color)),l=bs.find(c=>!o.has(c))??bs[this.members.size%bs.length];this.members.set(e,Tr(e,t.name,{role:Jn,color:l})),this.emitRoster(),(s=(n=this.handlers).onSeated)==null||s.call(n,e);return}if(!(!t.gm||this.gmId)){if(t.protocol!==Go)return(a=(r=this.handlers).onRefused)==null||a.call(r,"protocol"),this.leave();this.gmId=e}}}setColor(t,e){const n=this.members.get(t);!n||n.color===e||(this.members.set(t,{...n,color:e}),this.emitRoster())}emitRoster(){var t,e;this.link.send(Ly(this.roster())),(e=(t=this.handlers).onRoster)==null||e.call(t,this.roster())}}const Xu="vtt.name",$u="vtt.recent",By=6,qu=8,zy=14e3;class Gy{constructor({onEnter:t,onResume:e,onOpenFile:n}){var r;this.onEnter=t,this.onResume=e,this.onOpenFile=n,this.lobby=null,this.hintTimer=0,this.els={},this.els.name=w("input",{id:"splash-name",maxlength:String(_n.name),autocomplete:"nickname",spellcheck:"false",placeholder:"What the table calls you",value:Vy()}),this.els.code=w("input",{id:"splash-code",class:"code-input",maxlength:String(qu),autocomplete:"off",spellcheck:"false",placeholder:"CODE","aria-label":"Invite code",value:Hy(),oninput:()=>{this.els.code.value=this.els.code.value.toUpperCase().replace(/\s+/g,"")},onkeydown:a=>{a.key==="Enter"&&this.join()}}),this.els.host=w("button",{class:"primary big",text:"Host a new table",onclick:()=>this.host()}),this.els.saved=w("ul",{class:"saved-tables","aria-label":"Saved tables"});const s=w("input",{type:"file",accept:".vtt,application/json",class:"file",onchange:a=>{var l;const o=(l=a.target.files)==null?void 0:l[0];a.target.value="",o&&this.openFile(o)}});if(this.els.openFile=w("button",{class:"ghost small",text:"Open a table file…",onclick:()=>s.click()}),this.els.fileInput=s,this.els.join=w("button",{class:"primary big",text:"Join",onclick:()=>this.join()}),this.els.recent=w("ul",{class:"saved-tables recent","aria-label":"Recently joined"}),this.els.status=w("p",{class:"splash-status",role:"status","aria-live":"polite"}),this.els.cancel=w("button",{class:"ghost",text:"Cancel",hidden:!0,onclick:()=>this.cancel()}),this.root=w("div",{id:"splash"},w("div",{class:"splash-card"},w("header",{},w("h1",{text:"Virtual Tabletop"}),w("p",{class:"tagline",text:"No server. The GM's browser is the table, and players connect straight to it."})),w("div",{class:"field"},w("label",{for:"splash-name",text:"Your name"}),this.els.name),w("div",{class:"splash-choices"},w("section",{},w("h2",{text:"Run a table"}),w("p",{text:"You're the GM. You get an invite code to hand to your players."}),this.els.host,this.els.saved,this.els.openFile,this.els.fileInput),w("section",{},w("h2",{text:"Join a table"}),w("p",{text:"Enter the invite code your GM gave you."}),w("div",{class:"join-row"},this.els.code,this.els.join),this.els.recent)),w("div",{class:"splash-foot"},this.els.status,this.els.cancel))),document.body.append(this.root),this.listSaved(),this.listRecent(),!window.isSecureContext||!((r=globalThis.crypto)!=null&&r.subtle)){for(const a of["host","join","code"])this.els[a].disabled=!0;this.setStatus("This page is not served securely (https), so the browser will not let it connect to other players. Open it over https — or on localhost — to host or join.","error")}(this.els.code.value?this.els.join:this.els.name).focus()}setStatus(t,e=""){this.els.status.textContent=t,this.els.status.dataset.kind=e}setBusy(t){for(const e of["name","code","host","join","openFile"])this.els[e].disabled=t;for(const e of this.root.querySelectorAll(".saved-tables button"))e.disabled=t;this.els.cancel.hidden=!t}async listSaved(){const t=await bx();this.els.saved.replaceChildren(...t.map(e=>{const n=w("button",{class:"ghost small del",text:"×",title:"Delete this saved table","aria-label":`Delete ${e.name}`,onclick:async()=>{if(!n.classList.contains("armed")){n.classList.add("armed"),n.textContent="Delete?",setTimeout(()=>{n.classList.remove("armed"),n.textContent="×"},3e3);return}await wx(e.id),this.listSaved()}});return w("li",{},w("div",{class:"what"},w("b",{text:e.name}),w("span",{text:`${fh(e.savedAt)}${e.tokens?` · ${e.tokens} token${e.tokens===1?"":"s"}`:""}`})),w("button",{class:"primary small",text:"Resume",onclick:()=>this.resume(e.id)}),n)})),this.els.saved.hidden=!t.length}listRecent(){const t=Ho();this.els.recent.replaceChildren(...t.map(e=>w("li",{},w("div",{class:"what"},w("b",{text:e.gm?`${e.gm}'s table`:"A table"}),w("span",{text:`${e.code} · ${fh(e.at)}`})),w("button",{class:"primary small",text:"Join","aria-label":`Join ${e.code}`,onclick:()=>{this.els.code.value=e.code,this.join()}}),w("button",{class:"ghost small del",text:"×",title:"Forget this table","aria-label":`Forget ${e.code}`,onclick:()=>{Yu(Ho().filter(n=>n.code!==e.code)),this.listRecent()}})))),this.els.recent.hidden=!t.length}async resume(t){this.setBusy(!0),this.setStatus("Setting the table…");let e;try{e=await this.onResume(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not resume that table.","error")}this.host(e.code)}async openFile(t){this.setBusy(!0),this.setStatus(`Reading ${t.name}…`);let e;try{e=await this.onOpenFile(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not open that file.","error")}this.host(e.code)}async host(t=null){const e=this.els.name.value;dh(e),this.setBusy(!0),this.setStatus("Opening a room…");try{this.lobby=await Ps.host(e,void 0,t)}catch(n){return this.setBusy(!1),this.setStatus(`Could not open a room: ${n.message||n}`,"error")}this.enter()}async join(){const t=this.els.code.value.trim();if(!t)return this.els.code.focus(),this.setStatus("Type the invite code your GM gave you.","error");const e=this.els.name.value;dh(e),this.setBusy(!0);const n=`Looking for the table at ${t.toUpperCase()}…`;this.setStatus(n),this.hintTimer=setTimeout(()=>{var s;this.setStatus((s=this.lobby)!=null&&s.gmId?`${n} The GM is there but hasn't seated you — the table may be full.`:`${n} Still nothing. Connecting can take 10–20 seconds; check the code matches exactly.`,"warn")},zy);try{this.lobby=await Ps.join(t,e,{onAdmitted:()=>this.enter(),onRefused:s=>this.refused(s),onRelay:s=>{var r;(r=this.lobby)!=null&&r.gmId||s.total&&!s.open&&this.setStatus(`No relay reachable (0 of ${s.total}). Your network may be blocking them.`,"error")}})}catch(s){this.reset(),this.setStatus(`Could not join: ${s.message||s}`,"error")}}refused(t){this.reset(),this.setStatus(t==="protocol"?"That table is running a different version. One of you needs to reload.":"That table is full.","error")}cancel(){this.reset(),this.setStatus("")}reset(){var t;clearTimeout(this.hintTimer),(t=this.lobby)==null||t.leave(),this.lobby=null,this.setBusy(!1)}enter(){clearTimeout(this.hintTimer);const t=this.lobby;t.isGm||Wy(t),t.handlers={},this.root.remove(),this.onEnter(t)}}function Hy(){return(new URLSearchParams(location.search).get("join")||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,qu)}function Vy(){try{return localStorage.getItem(Xu)||""}catch{return""}}function dh(i){try{localStorage.setItem(Xu,i.trim())}catch{}}function Ho(){try{const i=JSON.parse(localStorage.getItem($u)||"[]");return Array.isArray(i)?i.filter(t=>t&&typeof t.code=="string"&&t.code):[]}catch{return[]}}function Yu(i){try{localStorage.setItem($u,JSON.stringify(i.slice(0,By)))}catch{}}function Wy(i){var n;const t=String(i.code||"").toUpperCase();if(!t)return;const e=((n=i.roster().find(s=>s.peerId===i.gmId))==null?void 0:n.name)||"";Yu([{code:t,gm:e,at:Date.now()},...Ho().filter(s=>s.code!==t)])}function fh(i){const t=new Date(i),e=new Date,n=Math.round((new Date(e.toDateString())-new Date(t.toDateString()))/864e5),s=t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return n===0?`today, ${s}`:n===1?`yesterday, ${s}`:n<7?t.toLocaleDateString([],{weekday:"long"}):t.toLocaleDateString([],{day:"numeric",month:"short",year:n>300?"numeric":void 0})}async function Xy(i){var t;try{if((t=navigator.clipboard)!=null&&t.writeText)return await navigator.clipboard.writeText(i),!0}catch{}try{const e=document.createElement("textarea");e.value=i,e.setAttribute("readonly",""),e.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.appendChild(e),e.select();const n=document.execCommand("copy");return e.remove(),n}catch{return!1}}function $y(i){if(!i)return;const t=document.createRange();t.selectNodeContents(i);const e=window.getSelection();e.removeAllRanges(),e.addRange(t)}const qy={map:'<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z"/><path d="M9 4v13.5M15 6.5V20"/>',grid:'<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M9.2 3.5v17M14.8 3.5v17M3.5 9.2h17M3.5 14.8h17"/>',tokens:'<path d="M6 20.5h12"/><path d="M8 20.5c-.3-2.6.9-4.5 3.2-6.1L9.6 13c-1.3.8-2.9.7-3.6-.4-.6-.9-.3-1.9.6-2.6l3.6-3.1.6-3.1 2.1 1.9c3.6.8 5.6 4.3 5.1 8.8-.2 2.2-.7 4.1-1.5 6"/><circle cx="12.6" cy="8.9" r=".7" fill="currentColor" stroke="none"/>',undo:'<path d="M9 7 4.5 11.5 9 16"/><path d="M5 11.5h9a5 5 0 0 1 0 10h-2"/>',redo:'<path d="M15 7l4.5 4.5L15 16"/><path d="M19 11.5h-9a5 5 0 0 0 0 10h2"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><rect x="8.5" y="8.5" width="7" height="7" rx="1"/>',save:'<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M5 19.5h14"/>',fx:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="2.5"/>',light:'<path d="M14 3.5v17"/><path d="M14 7.5h6.5M14 12h6.5M14 16.5h6.5M17.3 3.5v4M17.3 12v4.5"/><circle cx="7" cy="12" r="2"/><path d="M7 6.5v1.5M7 16v1.5M2.5 12H4M3.8 8.8l1 1M3.8 15.2l1-1"/>',scenes:'<path d="M12 3.5 21 8l-9 4.5L3 8z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16l9 4.5 9-4.5"/>',music:'<path d="M9 18V5.5l11-2v12.5"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',invite:'<circle cx="10" cy="8.5" r="3.5"/><path d="M3.5 20c.8-3.6 3.3-5.5 6.5-5.5 1.6 0 3 .5 4.1 1.4"/><path d="M18 13v7M14.5 16.5h7"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',check:'<path d="M5 12.5 10 17.5 19.5 7"/>',voice:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',leave:'<path d="M14 4H6.5A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20H14"/><path d="M11 12h10M17.5 8.5 21 12l-3.5 3.5"/>'};function Xn(i){const t=document.createElement("span");return t.className="icon",t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${qy[i]}</svg>`,t}class Yy{constructor(t,{onOpen:e}){this.onOpen=e,this.open=null,this.buttons=new Map,this.root=w("nav",{id:"rail","aria-label":"Tools"},...t.map(n=>{if(n==="gap")return w("div",{class:"gap"});if(n==="sep")return w("div",{class:"sep",role:"separator"});const s=n.key?`${n.label} (${n.key})`:n.label,r=w("button",{type:"button",class:"tool",title:s,"aria-label":n.label,dataset:{tool:n.id},"aria-pressed":n.panel?"false":null,onclick:()=>n.panel?this.toggle(n.id):n.run()},Xn(n.id));return this.buttons.set(n.id,r),r}))}toggle(t){this.show(this.open===t?null:t)}show(t){this.open=t;for(const[e,n]of this.buttons)n.hasAttribute("aria-pressed")&&n.setAttribute("aria-pressed",String(e===t));this.onOpen(t)}setVisible(t,e){const n=this.buttons.get(t);n&&(n.hidden=!e);for(const s of this.root.querySelectorAll(".sep")){let r=s.nextElementSibling,a=!1;for(;r&&!r.classList.contains("sep")&&!r.classList.contains("gap");){if(!r.hidden){a=!0;break}r=r.nextElementSibling}s.hidden=!a}}setArmed(t,e,n){const s=this.buttons.get(t);s&&(s.classList.toggle("armed",e),n&&(s.title=n))}setEnabled(t,e){const n=this.buttons.get(t);n&&(n.disabled=!e)}}const ph="Copy invite link";class jy{constructor(t,{onArmLeave:e,onInvite:n,onVoice:s,onTokens:r}={}){this.lobby=t,this.onArmLeave=e,this.onInvite=n,this.copyTimer=0,this.els={},this.els.code=w("span",{class:"room-code",text:t.code}),this.els.copyCode=w("button",{class:"ghost",text:"Copy",title:"Copy the room code",onclick:()=>this.copy("code")}),this.els.copyLink=w("button",{class:"ghost",text:ph,onclick:()=>this.copy("link")}),this.els.list=w("ul",{class:"roster"}),this.els.note=w("p",{class:"note"}),this.root=w("aside",{class:"panel",id:"room"},w("div",{class:"panel-head"},w("h1",{text:"Players"})),this.els.list,this.els.note,w("div",{class:"room-actions"},...t.isGm?[]:[this.els.tokens=w("button",{type:"button",class:"ghost",title:"Your tokens (T)","aria-label":"Your tokens","aria-expanded":"false",onclick:()=>r==null?void 0:r()},Xn("tokens")),this.els.voice=w("button",{type:"button",class:"ghost",title:"Voice","aria-label":"Voice","aria-expanded":"false",onclick:()=>s==null?void 0:s()},Xn("voice"))],this.els.sound=w("button",{type:"button",class:"ghost",title:"Ambience volume","aria-label":"Ambience volume","aria-expanded":"false",hidden:!0,onclick:()=>this.toggleSound()},Xn("sound")),this.els.invite=w("button",{type:"button",class:"ghost",title:"Copy invite link","aria-label":"Copy invite link",onclick:()=>this.copy("link",this.els.invite)},Xn("invite")),...t.isGm?[]:[this.els.leave=w("button",{type:"button",class:"ghost leave",title:"Leave game","aria-label":"Leave game",onclick:()=>this.leave()},Xn("leave"))]),this.els.drawer=w("div",{class:"room-drawer",hidden:!0})),this.invite=w("section",{class:"invite",dataset:{tool:"invite"}},w("h2",{text:"Invite players"}),w("div",{class:"room-code-row"},this.els.code,this.els.copyCode),this.els.copyLink,w("p",{class:"note",text:"Players type the code on the start screen, or open the link."})),this.setNote(t.isGm?"":"The GM sets up the table. Add your own tokens with the button below, and drag them to move."),this.render(t.roster())}addSound(t){this.els.drawer.append(t.root);const e=()=>{const n=!t.root.hidden;this.els.sound.hidden=!n,n||this.toggleSound(!1)};new MutationObserver(e).observe(t.root,{attributes:!0,attributeFilter:["hidden"]}),e()}setOpen(t){var e,n;(e=this.els.voice)==null||e.setAttribute("aria-expanded",String(t==="voice")),(n=this.els.tokens)==null||n.setAttribute("aria-expanded",String(t==="tokens"))}toggleSound(t=this.els.drawer.hidden){this.els.drawer.hidden=!t,this.els.sound.setAttribute("aria-expanded",String(t))}setNote(t,e=""){this.els.note.hidden=!t,this.els.note.textContent=t,this.els.note.dataset.kind=e}render(t){const e=this.lobby.selfId;this.els.list.replaceChildren(...t.map(n=>w("li",{dataset:{peer:n.peerId}},w("i",{class:"seat",style:{background:hs(n.color)}}),w("span",{class:"who",text:n.name}),w("span",{class:"mic",title:"In voice","aria-hidden":"true"}),w("em",{text:[n.role===en?"GM":"",n.peerId===e?"you":""].filter(Boolean).join(" · ")}))))}setVoice(t){var e,n;(n=this.els.voice)==null||n.classList.toggle("on",!!((e=t.get(this.lobby.selfId))!=null&&e.on));for(const s of this.els.list.children){const r=t.get(s.dataset.peer);s.classList.toggle("in-voice",!!(r!=null&&r.on)),s.classList.toggle("speaking",!!(r!=null&&r.on&&r.speaking)),s.classList.toggle("muted",!!(r!=null&&r.on&&(r.muted||r.silenced)))}}gmLeft(){this.setNote("The GM has left. The table is frozen until they come back.","warn")}inviteLink(){const t=new URL(location.href);return t.search="",t.hash="",t.searchParams.set("join",this.lobby.code),t.href}async copy(t,e=t==="code"?this.els.copyCode:this.els.copyLink){var s;await Xy(t==="code"?this.lobby.code:this.inviteLink())?e===this.els.invite?(e.replaceChildren(Xn("check")),e.classList.add("done"),e.title="Copied"):e.textContent="Copied ✓":((s=this.onInvite)==null||s.call(this,!0),$y(this.els.code),e!==this.els.invite&&(e.textContent="Press Ctrl+C")),clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>{this.els.copyCode.textContent="Copy",this.els.copyLink.textContent=ph,this.els.invite.replaceChildren(Xn("invite")),this.els.invite.classList.remove("done"),this.els.invite.title="Copy invite link"},1800)}armLeave(t){var e,n;this.leaveArmed=t,(e=this.els.leave)==null||e.classList.toggle("armed",t),this.els.leave&&(this.els.leave.title=t?"Click again to leave":"Leave game"),(n=this.onArmLeave)==null||n.call(this,t)}leave(){if(!this.leaveArmed){this.armLeave(!0),clearTimeout(this.leaveTimer),this.leaveTimer=setTimeout(()=>this.armLeave(!1),3500);return}this.lobby.leave();const t=new URL(location.href);t.searchParams.delete("join"),location.href=t.href}}class Ky{constructor({onImportToken:t,onAddBlank:e}){const n=w("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:s=>{const r=[...s.target.files||[]];s.target.value="",r.length&&t(r)}});this.root=w("section",{id:"player",dataset:{tool:"tokens"}},w("h2",{text:"Your tokens"}),w("div",{},n,w("div",{class:"row"},w("button",{class:"primary",id:"p-add-token",text:"Add from image…",onclick:()=>n.click()}),w("button",{class:"ghost",id:"p-add-blank",text:"Blank",onclick:()=>e()})),w("p",{class:"note",text:"Add a picture of your character, or a blank disc. Your tokens wear your colour; drag one to move it, click it to name it, turn it, resize it or change your colour."})))}}const Zy=[2,4,6,8,10,12,20,100];class Jy{constructor({onRoll:t,onError:e}){this.onRoll=t,this.onError=e,this.gm=!0,this.els={},this.els.expr=w("input",{class:"dice-expr",placeholder:"1d20+2 Kick",maxlength:"128",spellcheck:"false",autocomplete:"off","aria-label":"Dice to roll",onkeydown:n=>{n.key==="Enter"&&this.rollTyped()}}),this.els.hide=w("input",{type:"checkbox",id:"dice-hide"}),this.els.hideLabel=w("label",{class:"dice-hide",for:"dice-hide",title:"Roll in secret: players see that you rolled, not what"},this.els.hide," Hide"),this.root=w("div",{class:"dice-bar"},...Zy.map(n=>w("button",{type:"button",class:"die",text:n===100?"d%":`d${n}`,title:`Roll a d${n}`,dataset:{sides:String(n)},onclick:()=>this.onRoll(`1d${n}`)})),this.els.hideLabel,w("div",{class:"dice-typed"},this.els.expr,w("button",{type:"button",class:"primary roll",text:"Roll",onclick:()=>this.rollTyped()})))}get hidden(){return this.gm&&this.els.hide.checked}setGm(t){this.gm=t,this.els.hideLabel.hidden=!t,t||(this.els.hide.checked=!1)}rollTyped(){const t=this.els.expr.value.trim();if(!t)return this.els.expr.focus();try{kr(t)}catch(e){this.onError(e.message);return}this.onRoll(t)}}class Qy{constructor({onSay:t,onRoll:e,onError:n}){this.onSay=t,this.onRoll=e,this.onError=n,this.lastKey="",this.els={},this.els.feed=w("ol",{class:"feed","aria-live":"polite","aria-label":"Table talk"}),this.els.input=w("input",{class:"say",placeholder:"Say something…   /r 1d20+2 Kick to roll",maxlength:String(ns.text),autocomplete:"off","aria-label":"Say something to the table",onkeydown:s=>{s.key==="Enter"?this.send():s.key==="Escape"&&this.els.input.blur()}}),this.root=w("div",{class:"talk"},this.els.feed,this.els.input)}send(){const t=this.els.input.value.trim();if(!t)return;const e=/^\/r(?:oll)?\s+(.+)$/i.exec(t);if(e){try{kr(e[1])}catch(n){this.onError(n.message);return}this.onRoll(e[1])}else this.onSay(t);this.els.input.value=""}refresh(t,e){const n=t.slice(-60),s=n.map(o=>o.id).join(",")+Object.values(e).map(o=>o.peerId+o.name+o.color).join();if(s===this.lastKey)return;this.lastKey=s;const r=this.els.feed,a=r.scrollHeight-r.scrollTop-r.clientHeight<24;r.replaceChildren(...n.map((o,l)=>{const c=e[o.by],h=l===n.length-1,d=w("i",{class:"seat",style:{background:hs((c==null?void 0:c.color)??9280918)}}),u=w("span",{class:"who",text:(c==null?void 0:c.name)??"Someone"},(c==null?void 0:c.role)===en?w("em",{class:"gm",text:"GM"}):null);if(o.kind==="roll"){const f=o.dice.map(v=>w("span",{class:v.kept?"kept":"dropped",text:String(v.value),title:`d${v.sides}`})),g=o.mod?w("span",{class:"mod",text:o.mod>0?`+${o.mod}`:String(o.mod)}):null;return w("li",{class:`roll${h?" latest":""}`,title:`${o.expr}${o.note?` — ${o.note}`:""} — draws ${o.from+1}–${o.from+o.draws} of this table's dice`},d,u,o.hidden?w("span",{class:"secret-tag",text:"secret"}):null,o.note?w("span",{class:"note",text:o.note}):null,w("span",{class:"expr",text:o.expr}),w("span",{class:"faces"},...f,g),w("b",{class:"total",text:String(o.total)}))}return w("li",{class:`msg${h?" latest":""}`,title:o.at?new Date(o.at).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):""},d,u,w("span",{class:"text",text:o.text}))})),a&&(r.scrollTop=r.scrollHeight)}}const tM={rain:"Rain",snow:"Snow",fog:"Fog",embers:"Embers"};class eM{constructor({onPlay:t,onAmbience:e}){this.onAmbience=e,this.els={};const n=(s,r,a)=>w("button",{type:"button",class:"ghost",text:r,title:a,dataset:{fx:s},onclick:()=>t(s)});this.els.weather=[null,...gu].map(s=>w("button",{type:"button",class:"ghost",text:s?tM[s]:"None",dataset:{weather:s||"none"},"aria-pressed":"false",onclick:()=>e({weather:s})})),this.els.intensity=w("input",{type:"range",min:"0.1",max:"1",step:"0.05",id:"fx-intensity","aria-label":"Weather intensity",oninput:()=>e({intensity:+this.els.intensity.value})}),this.els.darkness=w("input",{type:"range",min:"0",max:"1",step:"0.05",id:"fx-darkness","aria-label":"Darkness",oninput:()=>e({darkness:+this.els.darkness.value})}),this.root=w("section",{class:"fx",dataset:{tool:"fx"}},w("h2",{text:"FX"}),w("h3",{class:"sub",text:"For a moment"}),w("div",{class:"fx-buttons"},n("lightning","⚡ Lightning","A flash on every screen"),n("shake","Shake","Shake everyone's board"),n("damage","Damage","A red pulse round the edges")),w("h3",{class:"sub",text:"Weather"}),w("div",{class:"fx-buttons"},...this.els.weather),this.els.intensityField=w("div",{class:"field"},w("label",{for:"fx-intensity",text:"Intensity"}),this.els.intensity),w("div",{class:"field"},w("label",{for:"fx-darkness",text:"Darkness"}),this.els.darkness),w("p",{class:"note",text:"Weather and darkness stay on for this scene until you change them, and players who join later see them too. You see them fainter, so you can keep working."}),w("h3",{class:"sub",text:"Pings"}),w("p",{class:"note",text:"Click an empty spot on the map to ping it for everyone (click once more first if something is selected). Alt+Shift-click also brings everyone's view there."}))}refresh(t){const e=t||{};for(const n of this.els.weather)n.setAttribute("aria-pressed",String((e.weather||"none")===n.dataset.weather));document.activeElement!==this.els.darkness&&(this.els.darkness.value=String(e.darkness||0)),document.activeElement!==this.els.intensity&&(this.els.intensity.value=String(e.intensity??.6)),this.els.intensity.disabled=!e.weather,this.els.intensityField.classList.toggle("off",!e.weather)}}const Ua={fade:["Fade","Fade to black","Fade back in"],swirl:["Swirl","Swirl to black","Swirl back in"],curtain:["Curtain","Lower the curtain","Raise the curtain"],drapes:["Drapes","Close the curtains","Open the curtains"],ink:["Ink","Ink to black","Ink back out"],burn:["Burn","Burn it away","Unburn"],freeze:["Freeze","Freeze over","Thaw"],flood:["Flood","Flood it","Drain"]};class nM{constructor({onCommand:t,onGo:e,onNew:n,onFx:s}){this.onCommand=t,this.onGo=e,this.transitions=fl.map(r=>w("button",{type:"button",class:"ghost",text:Ua[r][0],dataset:{transition:r},"aria-pressed":"false",onclick:()=>s({transition:r})})),this.blackout=w("button",{type:"button",class:"ghost wide",id:"scene-blackout","aria-pressed":"false",onclick:()=>s({blackout:this.blackout.getAttribute("aria-pressed")!=="true"})}),this.list=w("ul",{class:"scene-list","aria-label":"Scenes"}),this.root=w("section",{class:"scenes",dataset:{tool:"scenes"}},w("h2",{text:"Scenes"}),w("h3",{class:"sub",text:"Intermission"}),w("div",{class:"fx-buttons transitions"},...this.transitions),this.blackout,w("h3",{class:"sub",text:"Scenes"}),this.list,w("div",{class:"row"},w("button",{type:"button",class:"ghost",id:"scene-new",text:"New scene",onclick:()=>n()}),this.copy=w("button",{type:"button",class:"ghost",id:"scene-copy",text:"Duplicate this one"})),w("p",{class:"note",text:"Build each scene on the board: map, grid, monsters, light and weather. Go moves the table there and the players' tokens come along; everything else stays with its scene. To change scenes out of sight, start the intermission, go, and lift it when ready. Players who join during one see it too. Scenes are saved with the table."})),this.key=""}refresh(t){var a;const e=((a=t.scenes[t.activeScene])==null?void 0:a.fx)||{},n=Ua[e.transition]?e.transition:"fade";for(const o of this.transitions)o.setAttribute("aria-pressed",String(n===o.dataset.transition));this.blackout.setAttribute("aria-pressed",String(!!e.blackout)),this.blackout.textContent=Ua[n][e.blackout?2:1];const s=JSON.stringify([t.activeScene,t.sceneOrder.map(o=>{const l=t.scenes[o];return[o,l==null?void 0:l.name,Object.keys((l==null?void 0:l.tokens)||{}).length]})]);if(s===this.key)return;this.key=s;const r=t.activeScene;this.copy.onclick=()=>{var o;return r&&this.onCommand(["scene.copy",r,`${((o=t.scenes[r])==null?void 0:o.name)||"Scene"} (copy)`])},this.copy.disabled=!r,this.list.replaceChildren(...t.sceneOrder.map(o=>{const l=t.scenes[o];if(!l)return null;const c=o===r,h=w("input",{type:"text",value:l.name,maxlength:"48","aria-label":"Scene name",onchange:()=>{const u=h.value.trim();u&&u!==l.name?this.onCommand(["scene.rename",o,u]):h.value=l.name},onkeydown:u=>{u.key==="Enter"&&h.blur()}}),d=w("button",{type:"button",class:"ghost small del",text:"×",title:c?"The players are here — go to another scene first":"Delete this scene","aria-label":`Delete ${l.name}`,disabled:c,onclick:()=>{if(!d.classList.contains("armed")){d.classList.add("armed"),d.textContent="Delete?",setTimeout(()=>{d.classList.remove("armed"),d.textContent="×"},3e3);return}this.onCommand(["scene.del",o])}});return w("li",{class:c?"live":""},h,c?w("span",{class:"badge",text:"Now playing"}):w("button",{type:"button",class:"primary small",text:"Go",onclick:()=>this.onGo(o)}),d)}).filter(Boolean))}}const ka=12,iM=8,sM={wall:"Draw a wall the way you would with a pen. Each stroke is one wall; start or end it on another wall's end to join them.",mask:"Drag round something solid — a pillar, a boulder — and let go: the shape closes itself.",wand:"Click a wall on the map: everything joined to it that looks like it is outlined in blue. Click more walls to add them, Backspace to take the last one back. Set the tolerance below until it fits, then Add.",erase:"Click a wall or mask to take it away, or drag across several."};class rM{constructor({stage:t,getScene:e,onCommand:n,getPicture:s}){this.stage=t,this.getScene=e,this.onCommand=n,this.getPicture=s,this.tolerance=qc.tolerance,this.voidLevel=qc.voidLevel,this.sources=null,this.found=null,this.layer=t.walls,this.mode="wall",this.snap="free",this.active=!1,this.raw=null,this.erasing=!1,this.modes=["wall","mask","wand","erase"].map(a=>w("button",{type:"button",class:"ghost",dataset:{draw:a},"aria-pressed":"false",text:{wall:"Wall",mask:"Mask",wand:"Wand",erase:"Erase"}[a],onclick:()=>this.setMode(a)})),this.snaps=["free","grid"].map(a=>w("button",{type:"button",class:"ghost",dataset:{snap:a},"aria-pressed":"false",text:{free:"Free",grid:"Grid"}[a],title:a==="grid"?"Pull strokes onto the grid's corners":"Freehand: the stroke as you draw it",onclick:()=>this.setSnap(a)})),this.note=w("p",{class:"note"}),this.count=w("p",{class:"note light-count"}),this.clear=w("button",{type:"button",class:"ghost wide",id:"light-clear",text:"Clear all",onclick:()=>{if(!this.clear.classList.contains("armed")){this.clear.classList.add("armed"),this.clear.textContent="Clear every wall and mask?",setTimeout(()=>{this.clear.classList.remove("armed"),this.clear.textContent="Clear all"},3e3);return}const a=this.getScene();a&&this.onCommand(["block.set",a.id,[]]),this.clear.classList.remove("armed"),this.clear.textContent="Clear all"}});const r=(a,o,l,c,h)=>{const d=w("input",{type:"range",id:a,min:String(o),max:String(l),step:"1",value:String(c),oninput:()=>{h(+d.value),this.lookAgain()}});return d};this.tolInput=r("light-tolerance",4,140,this.tolerance,a=>{this.tolerance=a}),this.voidInput=r("light-void",4,120,this.voidLevel,a=>{this.voidLevel=a}),this.foundNote=w("p",{class:"note light-found"}),this.addFound=w("button",{type:"button",class:"primary small",id:"light-add",text:"Add",onclick:()=>this.add()}),this.foundRow=w("div",{class:"light-found-row",hidden:!0},this.foundNote,this.addFound,w("button",{type:"button",class:"ghost small",text:"Cancel",onclick:()=>this.drop()})),this.root=w("section",{class:"light",dataset:{tool:"light"}},w("h2",{text:"Light"}),w("p",{class:"note",text:"Walls and masks stop light. In the dark, a torch lights its own room and not the next, and players cannot see what is behind a wall. Only you see the lines, while this tool is open."}),w("h3",{class:"sub",text:"Pen"}),w("div",{class:"fx-buttons four"},...this.modes),this.note,w("h3",{class:"sub",text:"Snap"}),w("div",{class:"fx-buttons two"},...this.snaps),w("h3",{class:"sub",text:"Find walls on the map"}),w("div",{class:"field"},w("label",{for:"light-tolerance",text:"Wand tolerance"}),this.tolInput),w("button",{type:"button",class:"ghost wide",id:"light-void-find",text:"Mask the void",title:"Outline the dark the rooms sit in",onclick:()=>this.pick({kind:"void"})}),w("div",{class:"field"},w("label",{for:"light-void",text:"How dark the void is"}),this.voidInput),this.foundRow,this.count,this.clear),this.setMode("wall"),this.setSnap("free"),window.addEventListener("keydown",a=>{var o,l;if(this.active&&!(a.target instanceof HTMLElement&&a.target.closest('input[type="text"], textarea, [contenteditable]'))){if(a.key==="Escape"&&(this.raw||this.found))this.cancel();else if(a.key==="Enter"&&((o=this.found)!=null&&o.length))this.add();else if(a.key==="Backspace"&&((l=this.sources)!=null&&l.length))this.unpick();else return;a.preventDefault(),a.stopPropagation()}},!0)}setActive(t){this.active=t,this.layer.shown=t,t||this.cancel(),this.cursor()}setMode(t){this.cancel(),this.mode=t;for(const e of this.modes)e.setAttribute("aria-pressed",String(e.dataset.draw===t));this.note.textContent=sM[t],this.cursor()}setSnap(t){this.snap=t;for(const e of this.snaps)e.setAttribute("aria-pressed",String(e.dataset.snap===t))}cursor(){const t=this.stage.renderer.domElement,e=this.active?this.mode==="erase"?"pointer":"crosshair":"";t.style.cursor!==e&&(t.style.cursor=e)}refresh(t){const e=(t==null?void 0:t.blocks)||[],n=e.filter(a=>a.kind==="wall").length,s=e.length-n,r=(a,o)=>`${a} ${o}${a===1?"":"s"}`;this.count.textContent=e.length?`${r(n,"wall")} and ${r(s,"mask")} on this scene.`:"Nothing on this scene stops light yet.",this.clear.disabled=!e.length}get drawing(){return this.active}perPx(){return this.stage.cam.viewUnits/Math.max(1,this.stage.rect.height)}down(t){if(this.getScene()){if(this.mode==="wand"){this.pick({kind:"wand",x:t.x,y:t.y});return}if(this.mode==="erase"){this.erasing=!0,this.eraseAt(t);return}this.raw=[t.x,t.y],this.show()}}move(t){if(this.erasing){this.eraseAt(t);return}if(!this.raw){this.hover(t);return}const e=this.raw;Math.hypot(t.x-e[e.length-2],t.y-e[e.length-1])>2*this.perPx()&&(e.push(t.x,t.y),this.show())}up(){if(this.erasing){this.erasing=!1;return}const t=this.raw,e=this.getScene();if(this.endStroke(),!t||!e||oM(t)<iM*this.perPx())return;const n=this.shape(t);n.length<(this.mode==="mask"?6:4)||this.onCommand(["block.add",e.id,{kind:this.mode,pts:n}])}hover(t){var e;this.cursor(),this.layer.doomed=this.mode==="erase"?((e=this.blockAt(t))==null?void 0:e.id)??null:null}show(){this.layer.draft=this.raw?{kind:this.mode,pts:this.shape(this.raw)}:null}shape(t){var s,r;const e=this.snap==="grid"&&((r=(s=this.getScene())==null?void 0:s.grid)==null?void 0:r.kind)===pl;let n;if(e)n=t.map(a=>Math.round(a));else{const a=aM(t);let o=.75*this.perPx();for(n=mh(a,o);n.length>1e3;)n=mh(a,o*=1.5)}if(n=cM(n),this.mode==="wall"&&n.length>=4){const a=n.length,o=this.endNear(n[0],n[1]);o&&(n[0]=o.x,n[1]=o.y);const l=this.endNear(n[a-2],n[a-1]);l&&(n[a-2]=l.x,n[a-1]=l.y)}if(this.mode==="mask"){const a=e?.01:ka*this.perPx();for(;n.length>6&&Math.hypot(n[n.length-2]-n[0],n[n.length-1]-n[1])<a;)n.length-=2}return hM(n)}endNear(t,e){var r;let n=ka*this.perPx(),s=null;for(const a of((r=this.getScene())==null?void 0:r.blocks)||[]){if(a.kind!=="wall")continue;const o=a.pts.length;for(const l of[0,o-2]){const c=Math.hypot(a.pts[l]-t,a.pts[l+1]-e);c<n&&(n=c,s={x:a.pts[l],y:a.pts[l+1]})}}return s}pick(t){this.sources=t.kind==="void"?[...(this.sources||[]).filter(e=>e.kind!=="void"),t]:[...this.sources||[],t],this.look()}async look(){var A;const t=this.run=(this.run||0)+1,e=this.sources||[],n=this.getScene();if(!e.length)return;if(!(n!=null&&n.map))return this.say("This scene has no map to look at.",null);if(this.pictureOf!==n.map){this.say("Looking at the map…",null);const C=await this.getPicture(n.map);if(this.run!==t)return;this.pictureOf=n.map,this.picture=C}if(!this.picture)return this.say("This map could not be read.",null);const{pic:s,scale:r,imageW:a}=this.picture,{w:o,h:l}=s,c=n.grid,h=r*(n.artW&&a?n.artW/a:1),d=(c.unitPx||140)/h,u=new Uint8Array(o*l);for(const C of e){let F;if(C.kind==="wand"){const[x,E]=nx(C.x,C.y,c);if(x<0||E<0||x/h>=o||E/h>=l)continue;F=zx(s,x/h,E/h,this.tolerance,1)}else F=Hx(Gx(s,this.voidLevel),o,l,Math.round(Math.max(2,d*.08)));for(let x=0;x<u.length;x++)u[x]|=F[x]}let f=0;for(const C of u)f+=C;const g=e.some(C=>C.kind==="wand")&&f>.2*o*l,v=Wx(Vx(u,o,l,Math.max(12,(.25*d)**2)),o,l,Math.max(1,d*.05)),p=C=>{const F=[];for(let x=0;x<C.length;x+=2)F.push(...ex(C[x]*h,C[x+1]*h,c));return F},m=[];for(const C of v){const F=p(C.pts);C.solid&&F.length-2<=is.coords?m.push({kind:"mask",pts:F.slice(0,-2)}):m.push(...lM(F))}const y=is.perScene-(((A=n.blocks)==null?void 0:A.length)||0),_=m.slice(0,Math.max(0,y)),M=_.filter(C=>C.kind==="wall").length,L=(C,F)=>`${C} ${F}${C===1?"":"s"}`,T=e.some(C=>C.kind==="wand");this.say(_.length?`Found ${L(M,"wall")} and ${L(_.length-M,"mask")}.${g?" That is a lot of the map: try a lower tolerance.":T?" Click more walls to add them.":""}${_.length<m.length?" (The scene is full: not all of them fit.)":""}`:T?"Nothing there to outline. Try a higher tolerance.":"No void found. Try a darker setting.",_.length?_:null)}unpick(){this.sources=this.sources.slice(0,-1),this.sources.length?this.look():this.drop()}lookAgain(){var t;!((t=this.sources)!=null&&t.length)||this.again||(this.again=requestAnimationFrame(()=>{this.again=0,this.look()}))}say(t,e){this.found=e,this.layer.preview=e,this.foundNote.textContent=t,this.foundRow.hidden=!1,this.addFound.disabled=!(e!=null&&e.length)}add(){const t=this.getScene(),e=this.found;this.drop(),!(!t||!(e!=null&&e.length))&&this.onCommand(["block.set",t.id,[...t.blocks||[],...e]])}drop(){this.sources=null,this.run=(this.run||0)+1,this.found=null,this.layer.preview=null,this.foundRow.hidden=!0}cancel(){(this.found||this.sources)&&this.drop(),this.endStroke()}endStroke(){this.raw=null,this.erasing=!1,this.layer.draft=null,this.layer.doomed=null}blockAt(t){var s;let e=null,n=ka*this.perPx();for(const r of((s=this.getScene())==null?void 0:s.blocks)||[]){const a=dx(r,t.x,t.y);(a<n||a===0&&r.kind==="wall")&&(n=a,e=r)}return e}eraseAt(t){const e=this.blockAt(t),n=this.getScene();e&&n&&this.onCommand(["block.del",n.id,e.id]),this.layer.doomed=null}}function aM(i){const t=i.length>>1;if(t<5)return i.slice();const e=i.slice(),n=2;for(let s=1;s<t-1;s++){const r=Math.min(n,s,t-1-s);let a=0,o=0;for(let l=-r;l<=r;l++)a+=i[(s+l)*2],o+=i[(s+l)*2+1];e[s*2]=a/(2*r+1),e[s*2+1]=o/(2*r+1)}return e}function oM(i){let t=0;for(let e=2;e<i.length;e+=2)t+=Math.hypot(i[e]-i[e-2],i[e+1]-i[e-1]);return t}function lM(i){const t=is.coords;if(i.length<=t)return[{kind:"wall",pts:i}];const e=[];for(let n=0;n<i.length-2;n+=t-2)e.push({kind:"wall",pts:i.slice(n,n+t)});return e}function cM(i){const t=[i[0],i[1]];for(let e=2;e<i.length;e+=2)Math.hypot(i[e]-t[t.length-2],i[e+1]-t[t.length-1])>1e-6&&t.push(i[e],i[e+1]);return t}function hM(i){if(i.length<6)return i;const t=[i[0],i[1]];for(let e=2;e+2<i.length;e+=2){const n=t[t.length-2],s=t[t.length-1],r=i[e],a=i[e+1],o=i[e+2],l=i[e+3],c=(r-n)*(l-a)-(a-s)*(o-r),h=(r-n)*(o-r)+(a-s)*(l-a);(Math.abs(c)>1e-9||h<0)&&t.push(r,a)}return t.push(i[i.length-2],i[i.length-1]),t}function mh(i,t){const e=i.length>>1;if(e<3)return i.slice();const n=new Uint8Array(e);n[0]=1,n[e-1]=1;const s=[[0,e-1]];for(;s.length;){const[a,o]=s.pop(),l=i[a*2],c=i[a*2+1],h=i[o*2]-l,d=i[o*2+1]-c,u=Math.hypot(h,d);let f=-1,g=t;for(let v=a+1;v<o;v++){const p=u>1e-9?Math.abs((i[v*2]-l)*d-(i[v*2+1]-c)*h)/u:Math.hypot(i[v*2]-l,i[v*2+1]-c);p>g&&(g=p,f=v)}f>=0&&(n[f]=1,s.push([a,f],[f,o]))}const r=[];for(let a=0;a<e;a++)n[a]&&r.push(i[a*2],i[a*2+1]);return r}const gh=10;class uM{constructor({onRoll:t}){this.onRoll=t,this.key="vtt.quick.offline",this.items=[],this.root=w("div",{class:"quick","aria-label":"Quick rolls"}),this.load()}useTable(t){this.key=`vtt.quick.${t||"offline"}`,this.load()}load(){try{const t=JSON.parse(localStorage.getItem(this.key)||"[]");this.items=Array.isArray(t)?t.filter(e=>e&&typeof e.note=="string"&&typeof e.expr=="string").slice(0,gh):[]}catch{this.items=[]}this.render()}save(){try{localStorage.setItem(this.key,JSON.stringify(this.items))}catch{}}add(t,e){const n=this.items.find(s=>s.note.toLowerCase()===t.toLowerCase());if(n){if(n.expr===e&&n.note===t)return;n.expr=e,n.note=t}else this.items.push({note:t,expr:e}),this.items.length>gh&&this.items.shift();this.save(),this.render()}remove(t){this.items=this.items.filter(e=>e.note!==t),this.save(),this.render()}render(){this.root.hidden=!this.items.length,this.root.replaceChildren(...this.items.map(t=>w("span",{class:"quick-roll"},w("button",{type:"button",class:"go",text:t.note,title:`Roll ${t.expr} ${t.note}`,onclick:()=>this.onRoll(`${t.expr} ${t.note}`)}),w("button",{type:"button",class:"forget",text:"×",title:`Remove ${t.note}`,"aria-label":`Remove ${t.note}`,onclick:()=>this.remove(t.note)}))))}}const ju="vtt.voice.chimes";function dM(){try{return localStorage.getItem(ju)!=="0"}catch{return!0}}const vh={kind:"voice"},fM=.035;class pM{constructor({lobby:t,onChange:e}){this.lobby=t,this.onChange=e,this.on=!1,this.muted=!1,this.ptt=!1,this.pttDown=!1,this.stream=null,this.error="",this.output="",this.peers=new Map,this.silenced=new Set,this.localSpeaking=!1,this.chimes=dM(),this.ctx=null,this.localAnalyser=null,this.audioRoot=document.createElement("div"),this.audioRoot.hidden=!0,document.body.append(this.audioRoot),this.music=null,t.voice={join:n=>{var s;this.announce(n),(s=this.music)==null||s.peerJoined(n)},leave:n=>this.drop(n),stream:(n,s,r)=>{var a;return(r==null?void 0:r.kind)==="music"?(a=this.music)==null?void 0:a.hear(n,s):this.hear(n,s)},message:(n,s)=>{var r;return n.t==="music"?(r=this.music)==null?void 0:r.message(n,s):this.message(n,s)}},this.meter=setInterval(()=>this.measure(),120)}get isGm(){return this.lobby.isGm}get live(){return this.on&&!this.muted&&!this.silenced.has(this.lobby.selfId)&&(!this.ptt||this.pttDown)}peer(t){let e=this.peers.get(t);return e||(e={on:!1,muted:!1,volume:1,audio:null,analyser:null,speaking:!1},this.peers.set(t,e)),e}async start(t=""){this.error="";try{this.stream=await navigator.mediaDevices.getUserMedia({audio:{deviceId:t?{exact:t}:void 0,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(e){return this.error=(e==null?void 0:e.name)==="NotAllowedError"?"The browser was not allowed to use the microphone. Allow it in the address bar and try again.":`No microphone could be opened (${(e==null?void 0:e.name)||e}).`,this.onChange(),!1}this.on=!0,this.applyTrack(),this.watchLocal(),this.chime("join");for(const[e,n]of this.peers)n.on&&this.lobby.link.addStream(this.stream,e,vh);return this.announce(),this.onChange(),!0}stop(){var t;if(this.on){for(const[e,n]of this.peers)n.on&&this.lobby.link.removeStream(this.stream,e),this.unplug(n);for(const e of((t=this.stream)==null?void 0:t.getTracks())||[])e.stop();this.stream=null,this.on=!1,this.localSpeaking=!1,this.announce(),this.onChange()}}async useMicrophone(t){this.on&&(this.stop(),await this.start(t))}setMuted(t){this.muted=t,this.applyTrack(),this.announce(),this.onChange()}setPtt(t){this.ptt=t,this.applyTrack(),this.announce(),this.onChange()}pushToTalk(t){!this.ptt||this.pttDown===t||(this.pttDown=t,this.applyTrack(),this.onChange())}applyTrack(){var t;for(const e of((t=this.stream)==null?void 0:t.getAudioTracks())||[])e.enabled=this.live}announce(t){var n;const e={t:"voice",on:this.on,muted:this.muted||this.silenced.has(this.lobby.selfId)};this.isGm&&(e.silenced=[...this.silenced]),(n=this.lobby.link)==null||n.send(e,t)}message(t,e){const n=this.peer(e),s=n.on;if(n.on=!!t.on,n.muted=!!t.muted,this.on&&n.on!==s&&this.chime(n.on?"join":"leave"),this.on&&n.on&&!s&&this.lobby.link.addStream(this.stream,e,vh),this.on&&!n.on&&s&&this.lobby.link.removeStream(this.stream,e),n.on||this.unplug(n),Array.isArray(t.silenced)&&e===this.lobby.gmId){this.silenced=new Set(t.silenced.filter(r=>typeof r=="string")),this.applyTrack();for(const[r,a]of this.peers)this.applyVolume(r,a)}this.onChange()}hear(t,e){const n=this.peer(e);if(!this.on)return;this.unplug(n);const s=document.createElement("audio");s.autoplay=!0,s.srcObject=t,this.output&&s.setSinkId&&s.setSinkId(this.output).catch(()=>{}),this.audioRoot.append(s),n.audio=s,this.applyVolume(e,n);try{const r=this.context().createMediaStreamSource(t);n.analyser=this.context().createAnalyser(),n.analyser.fftSize=512,r.connect(n.analyser)}catch{}this.onChange()}setVolume(t,e){const n=this.peer(t);n.volume=e,this.applyVolume(t,n)}applyVolume(t,e){e.audio&&(e.audio.volume=this.silenced.has(t)?0:e.volume)}async setOutput(t){var e,n;this.output=t,(e=this.music)==null||e.setOutput(t);for(const s of this.peers.values())(n=s.audio)!=null&&n.setSinkId&&await s.audio.setSinkId(t).catch(()=>{})}silence(t,e){if(this.isGm){e?this.silenced.add(t):this.silenced.delete(t);for(const[n,s]of this.peers)this.applyVolume(n,s);this.announce(),this.onChange()}}drop(t){const e=this.peers.get(t);e!=null&&e.on&&this.on&&this.chime("leave"),e&&this.unplug(e),this.peers.delete(t),this.onChange()}unplug(t){t.audio&&(t.audio.srcObject=null,t.audio.remove()),t.audio=null,t.analyser=null,t.speaking=!1}setChimes(t){this.chimes=t;try{localStorage.setItem(ju,t?"1":"0")}catch{}this.onChange()}chime(t){if(!this.chimes)return;let e;try{e=this.context()}catch{return}const n=t==="join"?[660,880]:[660,494],s=e.currentTime+.01;n.forEach((r,a)=>{const o=e.createOscillator(),l=e.createGain();o.type="sine",o.frequency.value=r;const c=s+a*.11;l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.12,c+.015),l.gain.exponentialRampToValueAtTime(1e-4,c+.22),o.connect(l).connect(e.destination),o.start(c),o.stop(c+.25)}),this.lastChime=t}context(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}watchLocal(){try{const t=this.context().createMediaStreamSource(this.stream);this.localAnalyser=this.context().createAnalyser(),this.localAnalyser.fftSize=512,t.connect(this.localAnalyser)}catch{this.localAnalyser=null}}measure(){let t=!1;const e=s=>{if(!s)return!1;const r=new Float32Array(s.fftSize);s.getFloatTimeDomainData(r);let a=0;for(const o of r)a+=o*o;return Math.sqrt(a/r.length)>fM},n=this.on&&this.live&&e(this.localAnalyser);n!==this.localSpeaking&&(this.localSpeaking=n,t=!0);for(const[s,r]of this.peers){const a=r.on&&!r.muted&&!this.silenced.has(s)&&e(r.analyser);a!==r.speaking&&(r.speaking=a,t=!0)}t&&this.onChange()}status(){const t=new Map;t.set(this.lobby.selfId,{on:this.on,muted:!this.live,speaking:this.localSpeaking,silenced:this.silenced.has(this.lobby.selfId)});for(const[e,n]of this.peers)t.set(e,{on:n.on,muted:n.muted,speaking:n.speaking,silenced:this.silenced.has(e)});return t}leave(){var t;this.stop(),clearInterval(this.meter),(t=this.ctx)==null||t.close().catch(()=>{})}}async function mM(){try{const i=await navigator.mediaDevices.enumerateDevices();return{inputs:i.filter(t=>t.kind==="audioinput"),outputs:i.filter(t=>t.kind==="audiooutput"),canChooseOutput:typeof HTMLMediaElement<"u"&&"setSinkId"in HTMLMediaElement.prototype}}catch{return{inputs:[],outputs:[],canChooseOutput:!1}}}const xh="KeyV";class gM{constructor({voice:t,roster:e}){this.voice=t,this.roster=e,this.devices={inputs:[],outputs:[],canChooseOutput:!1},this.root=w("section",{class:"voice",dataset:{tool:"voice"}}),this.render();const n=()=>{var s;return/^(INPUT|TEXTAREA|SELECT)$/.test(((s=document.activeElement)==null?void 0:s.tagName)||"")};addEventListener("keydown",s=>{s.code===xh&&!s.repeat&&!n()&&t.pushToTalk(!0)}),addEventListener("keyup",s=>{s.code===xh&&t.pushToTalk(!1)}),addEventListener("blur",()=>t.pushToTalk(!1))}async refreshDevices(){this.devices=await mM(),this.render()}render(){var c,h;const t=this.voice,e=this.roster(),n=d=>e.find(u=>u.peerId===d);if(!t.on){this.root.replaceChildren(...[w("h2",{text:"Voice"}),w("button",{type:"button",class:"primary",id:"voice-join",text:"Join voice",onclick:async()=>{await t.start()&&this.refreshDevices()}}),t.error?w("p",{class:"note",dataset:{kind:"error"},text:t.error}):null,w("p",{class:"note",text:"Your microphone goes straight to the others at the table who have joined — no server in between."}),this.people(n)].filter(Boolean));return}const s=w("select",{onchange:()=>t.useMicrophone(s.value).then(()=>this.refreshDevices())},...this.devices.inputs.map(d=>w("option",{value:d.deviceId,text:d.label||"Microphone"}))),r=(h=(c=t.stream)==null?void 0:c.getAudioTracks()[0])==null?void 0:h.getSettings().deviceId;r&&(s.value=r);const a=this.devices.canChooseOutput?w("select",{onchange:()=>t.setOutput(a.value)},...this.devices.outputs.map(d=>w("option",{value:d.deviceId,text:d.label||"Speakers"}))):null;a&&t.output&&(a.value=t.output);const o=w("input",{type:"checkbox",id:"voice-ptt",onchange:()=>t.setPtt(o.checked)});o.checked=t.ptt;const l=w("input",{type:"checkbox",id:"voice-chimes",onchange:()=>t.setChimes(l.checked)});l.checked=t.chimes,this.root.replaceChildren(...[w("h2",{text:"Voice"}),w("div",{class:"row"},w("button",{type:"button",class:t.muted?"primary":"ghost",id:"voice-mute",text:t.muted?"Unmute":"Mute",onclick:()=>t.setMuted(!t.muted)}),w("button",{type:"button",class:"ghost",id:"voice-leave",text:"Leave voice",onclick:()=>t.stop()})),t.silenced.has(t.lobby.selfId)?w("p",{class:"note",dataset:{kind:"warn"},text:"The GM has muted you for now."}):null,w("label",{class:"check",for:"voice-ptt"},o," Push to talk — hold V"),w("label",{class:"check",for:"voice-chimes"},l," Join and leave sounds"),w("div",{class:"field"},w("label",{text:"Microphone"}),s),a?w("div",{class:"field"},w("label",{text:"Speakers"}),a):null,this.people(n)].filter(Boolean))}people(t){const e=this.voice,n=[...e.peers].filter(([,s])=>s.on).map(([s,r])=>{const a=t(s),o=w("input",{type:"range",min:"0",max:"1",step:"0.05",value:String(r.volume),title:"Volume","aria-label":`Volume for ${(a==null?void 0:a.name)??"them"}`,oninput:()=>e.setVolume(s,+o.value)}),l=e.silenced.has(s);return w("li",{class:r.speaking?"speaking":""},w("i",{class:"seat",style:{background:hs((a==null?void 0:a.color)??9280918)}}),w("span",{class:"who",text:(a==null?void 0:a.name)??"Someone"}),e.on?o:null,e.isGm&&(a==null?void 0:a.role)!==en?w("button",{type:"button",class:`ghost small${l?" armed":""}`,text:l?"Unsilence":"Silence",title:l?"Let them speak again":"Mute them for everyone",onclick:()=>e.silence(s,!l)}):null)});return w("div",{},w("h3",{class:"sub",text:n.length?"In voice":"Nobody else is in voice yet."}),n.length?w("ul",{class:"voice-people"},...n):null)}}const vM={kind:"music"},xM=128e3,Ku="vtt.music";class Zu{constructor({lobby:t,voice:e,onChange:n}){this.lobby=t,this.onChange=n,this.stream=null,this.source="",this.error="",this.playing=!1,this.audio=null;const s=MM();this.volume=s.volume,this.muted=s.muted,e.music=this}get isGm(){return this.lobby.isGm}get sharing(){return!!this.stream}static get canShare(){var n,s,r;if(!((n=navigator.mediaDevices)!=null&&n.getDisplayMedia))return!1;if((((r=(s=navigator.userAgentData)==null?void 0:s.brands)==null?void 0:r.map(a=>a.brand))||[]).some(a=>/Chromium|Google Chrome|Microsoft Edge/.test(a)))return!0;const e=navigator.userAgent;return/Chrome\/|Chromium\/|Edg\//.test(e)&&!/Firefox\//.test(e)}async share(){var r,a;this.error="";let t;try{t=await _M()}catch(o){return(o==null?void 0:o.name)!=="NotAllowedError"&&(o==null?void 0:o.name)!=="AbortError"&&(this.error=`Could not share that (${(o==null?void 0:o.name)||o}).`),this.onChange(),!1}const e=t.getAudioTracks(),n=t.getVideoTracks()[0],s=(r=n==null?void 0:n.getSettings)==null?void 0:r.call(n).displaySurface;if(!e.length){for(const o of t.getTracks())o.stop();return this.error=yM(s),console.info("[music] share had no audio track; surface was",s),this.onChange(),!1}this.video=n||null,(a=n==null?void 0:n.applyConstraints)==null||a.call(n,{frameRate:1,width:64,height:64}).catch(()=>{}),this.stream=new MediaStream(e),this.source=(n==null?void 0:n.label)||e[0].label||"a tab",e[0].addEventListener("ended",()=>this.stop());for(const o of this.lobby.link.peers())this.sendTo(o);return this.announce(),this.onChange(),!0}stop(){var t;if(this.stream){for(const e of this.lobby.link.peers())this.lobby.link.removeStream(this.stream,e);for(const e of this.stream.getTracks())e.stop();(t=this.video)==null||t.stop(),this.video=null,this.stream=null,this.source="",this.announce(),this.onChange()}}peerJoined(t){this.isGm&&(this.stream&&this.sendTo(t),this.announce(t))}sendTo(t){const e=this.lobby.link.addStream(this.stream,t,vM);Promise.allSettled(e||[]).then(()=>{var o,l,c;const n=this.lobby.link.connection(t),s=(o=this.stream)==null?void 0:o.getAudioTracks()[0],r=(l=n==null?void 0:n.getSenders)==null?void 0:l.call(n).find(h=>h.track===s);if(!r)return;const a=r.getParameters();a.encodings=(c=a.encodings)!=null&&c.length?a.encodings:[{}],a.encodings[0].maxBitrate=xM,r.setParameters(a).catch(()=>{})})}announce(t){var e;this.isGm&&((e=this.lobby.link)==null||e.send({t:"music",on:this.sharing},t))}message(t,e){e===this.lobby.gmId&&(this.playing=!!t.on,this.playing||this.unplug(),this.onChange())}hear(t,e){if(e!==this.lobby.gmId)return;this.unplug();const n=document.createElement("audio");n.autoplay=!0,n.srcObject=t,document.body.append(n),n.hidden=!0,this.audio=n,this.playing=!0,this.apply(),this.onChange()}setVolume(t){this.volume=t,this.apply(),_h(this)}setMuted(t){this.muted=t,this.apply(),_h(this),this.onChange()}setOutput(t){var e,n;(n=(e=this.audio)==null?void 0:e.setSinkId)==null||n.call(e,t).catch(()=>{})}apply(){this.audio&&(this.audio.volume=this.muted?0:this.volume)}unplug(){this.audio&&(this.audio.srcObject=null,this.audio.remove()),this.audio=null}leave(){this.stop(),this.unplug()}}async function _M(){const i=await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:"browser"},audio:!0,selfBrowserSurface:"exclude"});for(const t of i.getAudioTracks())t.applyConstraints({echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}).catch(()=>{});return i}function yM(i){return i==="window"?'That shared a window, and Chrome only sends sound from a tab. Share again, choose the "Chrome Tab" pane at the top of the picker, pick the tab with the music, and keep "Also share tab audio" switched on.':i==="monitor"?'That shared the whole screen, which carries no sound here. Share again and choose the "Chrome Tab" pane, pick the tab with the music, and keep "Also share tab audio" on.':'That tab was shared without its sound. Share again and switch on "Also share tab audio" at the bottom of the picker before pressing Share.'}function MM(){try{const i=JSON.parse(localStorage.getItem(Ku)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.6,muted:!!i.muted}}catch{return{volume:.6,muted:!1}}}function _h(i){try{localStorage.setItem(Ku,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}class SM{constructor({music:t}){this.music=t,this.root=w("section",{class:"music",dataset:{tool:"music"}}),this.render()}render(){const t=this.music,e=[w("h2",{text:"Music"})];t.sharing?e.push(w("p",{class:"playing",text:"♪ Playing to the table"}),w("p",{class:"note source",text:t.source}),w("button",{type:"button",class:"ghost",id:"music-stop",text:"Stop the music",onclick:()=>t.stop()}),w("p",{class:"note",text:"Change track, volume or playlist in that tab — the table hears whatever it plays. Each player has their own volume."})):Zu.canShare?e.push(w("ol",{class:"steps"},w("li",{text:"Start your music in another tab — Spotify, YouTube, anything."}),w("li",{text:`Press the button below. In Chrome's picker choose the "Chrome Tab" pane — not "Window" — and pick that tab.`}),w("li",{text:'Keep "Also share tab audio" switched on, then Share.'})),w("p",{class:"note",text:"Chrome always shares a picture too; the table only ever gets the sound."}),w("button",{type:"button",class:"primary",id:"music-share",text:"Share a tab's sound…",onclick:()=>t.share()})):e.push(w("p",{class:"note",dataset:{kind:"warn"},text:"This browser can share a screen but not its sound — Firefox and Safari have no option for it."}),w("p",{class:"note",text:"To play music to the table, run the table in Chrome or Edge on a computer. Players can listen in any browser."})),t.error&&e.push(w("p",{class:"note",dataset:{kind:"error"},text:t.error})),this.root.replaceChildren(...e)}}class bM{constructor({music:t}){this.music=t,this.els={},this.els.mute=w("button",{type:"button",class:"ghost small",onclick:()=>t.setMuted(!t.muted)}),this.els.volume=w("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Music volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=w("div",{class:"music-control",hidden:!0},w("span",{class:"label",text:"♪ Music"}),this.els.volume,this.els.mute),this.render()}render(){const t=this.music;this.root.hidden=!t.playing||t.isGm,this.els.volume.value=String(t.volume),this.els.volume.disabled=t.muted,this.els.mute.textContent=t.muted?"Unmute":"Mute"}}class Ju{constructor({ambience:t,label:e="☁ Ambience"}){this.ambience=t,this.els={},this.els.mute=w("button",{type:"button",class:"ghost small",onclick:()=>{t.setMuted(!t.muted),this.render()}}),this.els.volume=w("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Ambience volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=w("div",{class:"music-control ambience-control",hidden:!0},w("span",{class:"label",text:e}),this.els.volume,this.els.mute),this.render()}render(t=this.weather){this.weather=t;const e=this.ambience;this.root.hidden=!t,document.activeElement!==this.els.volume&&(this.els.volume.value=String(e.volume)),this.els.volume.disabled=e.muted,this.els.mute.textContent=e.muted?"Unmute":"Mute"}}const Qu="vtt.ambience",Es=1.5;class wM{constructor(){this.ctx=null,this.out=null,this.current=null,this.kind=null,this.intensity=.6;const t=IM();this.volume=t.volume,this.muted=t.muted,this.unlocked=!1,this.curtain=1;const e=()=>{var n,s;this.unlocked=!0,(s=(n=this.ensure())==null?void 0:n.resume)==null||s.call(n),this.apply(),removeEventListener("pointerdown",e,!0),removeEventListener("keydown",e,!0)};addEventListener("pointerdown",e,!0),addEventListener("keydown",e,!0)}ensure(){if(this.ctx)return this.ctx;try{this.ctx=new AudioContext}catch{return null}return this.out=this.ctx.createGain(),this.out.gain.value=this.level(),this.limiter=this.ctx.createDynamicsCompressor(),this.limiter.threshold.value=-6,this.limiter.knee.value=6,this.limiter.ratio.value=12,this.limiter.attack.value=.003,this.limiter.release.value=.25,this.out.connect(this.limiter).connect(this.ctx.destination),this.meter=this.ctx.createAnalyser(),this.meter.fftSize=2048,this.out.connect(this.meter),this.noise=TM(this.ctx),this.brown=AM(this.ctx),this.ready=CM(this.ctx),this.ctx}update(t){const e=(t==null?void 0:t.weather)||null,n=(t==null?void 0:t.intensity)??.6;if(e===this.kind&&Math.abs(n-this.intensity)<.001)return;const s=e!==this.kind;this.kind=e,this.intensity=n,this.unlocked&&this.apply(s)}apply(t=!0){var e,n,s;if(!(!this.unlocked||!this.ensure())){if(!this.hissReady){this.ready.then(()=>{this.hissReady=!0,this.apply(!0)});return}(t||!this.current)&&((e=this.current)==null||e.stop(),this.current=this.kind&&((n=Na[this.kind])==null?void 0:n.call(Na,this.ctx,this.noise,this.out))||null),(s=this.current)==null||s.set(this.intensity)}}thunder(t){if(!this.unlocked||!this.ensure())return null;const e=(t==null?void 0:t.weather)==="rain"?t.intensity??.6:.5,n=Math.min(1,Math.max(0,e)),s=.15+(1-n)*8;return EM(this.ctx,this.noise,this.brown,this.out,n,this.ctx.currentTime+s),this.lastThunder={delay:Math.round(s*100)/100,near:n},s}level(){return this.muted?0:this.volume*this.curtain}setVolume(t){this.volume=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),Sh(this)}setMuted(t){this.muted=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),Sh(this)}setCurtain(t){const e=Math.min(1,Math.max(0,t));Math.abs(e-this.curtain)<.005&&!(e===0&&this.curtain!==0)||(this.curtain=e,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.05))}status(){var e,n;let t=0;if(this.meter){const s=new Float32Array(this.meter.fftSize);this.meter.getFloatTimeDomainData(s),t=Math.sqrt(s.reduce((r,a)=>r+a*a,0)/s.length)}return{kind:this.current?this.kind:null,intensity:this.intensity,volume:this.volume,muted:this.muted,running:((e=this.ctx)==null?void 0:e.state)==="running",level:Math.round(t*1e3)/1e3,thunder:this.lastThunder??null,hiss:!!((n=this.ctx)!=null&&n.hiss)}}}const Na={rain(i,t,e){const n=Vo(i,t),s=Pn(i,"lowpass",2600,.4),r=Pn(i,"highpass",400,.5),a=i.createGain();n.node.connect(r).connect(s).connect(a);const o=Wo(i,e);a.connect(o);let l=.6;const c=u=>{const f=Math.random()<.08,g=ji(i,t),v=Pn(i,"bandpass",f?500+Math.random()*700:1400+Math.random()*3600,f?3:1.5+Math.random()*2),p=i.createGain(),m=(f?.35:.08+Math.random()*.18)*(.6+.4*l),y=f?.12+Math.random()*.1:.03+Math.random()*.06;p.gain.setValueAtTime(0,u),p.gain.linearRampToValueAtTime(m,u+.004+Math.random()*.004),p.gain.exponentialRampToValueAtTime(1e-4,u+y);let _=p;if(i.createStereoPanner){const M=i.createStereoPanner();M.pan.value=Math.random()*1.6-.8,p.connect(M),_=M}g.connect(v).connect(p),_.connect(o),g.start(u,Math.random()*jn),g.stop(u+y+.05)},h=i.hiss?new AudioWorkletNode(i,"vtt-rain",{numberOfInputs:0,outputChannelCount:[2]}):null;h==null||h.connect(o);const d=h?{stop(){setTimeout(()=>{h.port.postMessage("stop"),h.disconnect()},(Es+.2)*1e3)}}:Mh(i,()=>-Math.log(1-Math.random())/(4+26*l),c);return{set(u){l=u,h==null||h.port.postMessage({k:l}),a.gain.setTargetAtTime(.18+.5*l,i.currentTime,.5),s.frequency.setTargetAtTime(1800+2600*l,i.currentTime,.5)},stop(){d.stop(),Xo(i,o,[n])}}},embers(i,t,e){const n=Wo(i,e),s=Vo(i,t),r=Pn(i,"lowpass",300,.7),a=i.createGain();s.node.connect(r).connect(a).connect(n);let o=.6;const c=Mh(i,()=>(.06+Math.random()*.5)/(.35+o),h=>{const d=Math.random()<.25?2+Math.floor(Math.random()*3):1;for(let u=0;u<d;u++){const f=h+u*(.015+Math.random()*.04),g=ji(i,t),v=Pn(i,"bandpass",1200+Math.random()*3500,1.5+Math.random()*3),p=i.createGain(),m=(.5+Math.random()*.9)*(.5+.5*o);p.gain.setValueAtTime(0,f),p.gain.linearRampToValueAtTime(m,f+.001),p.gain.exponentialRampToValueAtTime(1e-4,f+.01+Math.random()*.04),g.connect(v).connect(p).connect(n),g.start(f,Math.random()*jn),g.stop(f+.08)}});return{set(h){o=h,a.gain.setTargetAtTime(.35+.9*o,i.currentTime,.5)},stop(){c.stop(),Xo(i,n,[s])}}},snow(i,t,e){return yh(i,t,e,{base:550,spread:380,level:1.6,rate:.12})},fog(i,t,e){return yh(i,t,e,{base:320,spread:140,level:1.1,rate:.07})}};function EM(i,t,e,n,s,r){const a=1-s,o=.45+.55*s;if(s>.4){const u=.5*(s-.3)*o,f=8+Math.round(8*s);for(let m=0;m<f;m++){const y=r+Math.pow(m/f,1.6)*.55+Math.random()*.03,_=ji(i,t),M=Pn(i,"lowpass",1800+2600*s*Math.random(),.5),L=i.createGain(),T=u*(1-m/f)*(.5+Math.random()*.5);L.gain.setValueAtTime(0,y),L.gain.linearRampToValueAtTime(T,y+.004),L.gain.exponentialRampToValueAtTime(1e-4,y+.06+Math.random()*.12),_.connect(M).connect(L).connect(n),_.start(y,Math.random()*jn),_.stop(y+.3)}const g=ji(i,e),v=Pn(i,"lowpass",140,.7),p=i.createGain();p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(3.2*s*o,r+.02),p.gain.exponentialRampToValueAtTime(1e-4,r+.9),g.connect(v).connect(p).connect(n),g.start(r,Math.random()*jn),g.stop(r+1)}const l=4+4*a+Math.random()*1.5,c=r+(s>.4?.12:.05),h=.25+.9*a,d=(u,f)=>{const g=ji(i,e),v=Pn(i,"lowpass",u,.6),p=i.createGain();g.connect(v).connect(p).connect(n),p.gain.setValueAtTime(1e-4,c),p.gain.setTargetAtTime(f,c,h/3);let m=c+h;for(;m<c+l;){const y=Math.pow(1-(m-c)/l,.6+.8*a);p.gain.setTargetAtTime(f*y*(.4+.6*Math.random()),m,.12),m+=.25+Math.random()*.5}p.gain.setTargetAtTime(1e-4,c+l,.3),g.start(c,Math.random()*jn),g.stop(c+l+1.5)};d(220+700*s,o*(1.6+2.4*s)*(1+.8*a)),d(90,o*(2.4+2.6*s))}function yh(i,t,e,{base:n,spread:s,level:r,rate:a}){const o=Wo(i,e),l=Vo(i,t),c=Pn(i,"bandpass",n,1.2),h=i.createGain();l.node.connect(c).connect(h).connect(o);const d=[a,a*.37].map((g,v)=>{const p=i.createOscillator();p.frequency.value=g;const m=i.createGain();return m.gain.value=v===0?s:s*.5,p.connect(m).connect(c.frequency),p.start(),p}),u=i.createOscillator();u.frequency.value=a*.8;const f=i.createGain();return u.connect(f).connect(h.gain),u.start(),{set(g){const v=r*(.2+.8*g);h.gain.setTargetAtTime(v,i.currentTime,.6),f.gain.setTargetAtTime(v*.6,i.currentTime,.6),c.frequency.setTargetAtTime(n*(.8+.5*g),i.currentTime,.8)},stop(){Xo(i,o,[l,...d,u])}}}const jn=6;function TM(i){const t=i.createBuffer(1,i.sampleRate*jn,i.sampleRate),e=t.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1;return t}function AM(i){const t=i.createBuffer(1,i.sampleRate*jn,i.sampleRate),e=t.getChannelData(0);let n=0;for(let s=0;s<e.length;s++)n=(n+.02*(Math.random()*2-1))/1.02,e[s]=n*3.5;return t}const RM=`
registerProcessor('vtt-hiss', class extends AudioWorkletProcessor {
  constructor() { super(); this.on = true; this.port.onmessage = () => { this.on = false; }; }
  process(_, outputs) {
    for (const ch of outputs[0]) for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
    return this.on;
  }
});

// Raindrops, made here on the audio thread: each a burst of noise through its
// own band-pass, a quick rise and an exponential fall, placed left or right. The
// same sound the node version makes, without building four nodes per drop.
registerProcessor('vtt-rain', class extends AudioWorkletProcessor {
  constructor() {
    super();
    this.on = true;
    this.k = 0.6;
    this.drops = [];
    this.wait = 0;
    this.port.onmessage = (e) => {
      if (e.data === 'stop') this.on = false;
      else if (typeof e.data?.k === 'number') this.k = e.data.k;
    };
  }
  gap() { return -Math.log(1 - Math.random()) / (4 + 26 * this.k) * sampleRate; }
  spawn() {
    const k = this.k;
    const big = Math.random() < 0.08;
    const f = big ? 500 + Math.random() * 700 : 1400 + Math.random() * 3600;
    const q = big ? 3 : 1.5 + Math.random() * 2;
    // RBJ band-pass, constant 0 dB peak: what a BiquadFilterNode 'bandpass' is.
    const w = 2 * Math.PI * f / sampleRate;
    const alpha = Math.sin(w) / (2 * q);
    const a0 = 1 + alpha;
    const pan = Math.random() * 1.6 - 0.8;
    const angle = (pan + 1) * Math.PI / 4;
    const decay = (big ? 0.12 + Math.random() * 0.1 : 0.03 + Math.random() * 0.06) * sampleRate;
    const attack = (0.004 + Math.random() * 0.004) * sampleRate;
    this.drops.push({
      b0: alpha / a0, b2: -alpha / a0, a1: -2 * Math.cos(w) / a0, a2: (1 - alpha) / a0,
      x1: 0, x2: 0, y1: 0, y2: 0,
      peak: (big ? 0.35 : 0.08 + Math.random() * 0.18) * (0.6 + 0.4 * k),
      attack, decay, age: 0, end: attack + decay,
      fall: Math.log(0.0001) / decay,
      l: Math.cos(angle), r: Math.sin(angle),
    });
  }
  process(_, outputs) {
    const [L, R] = outputs[0];
    const n = L.length;
    L.fill(0);
    if (R) R.fill(0);
    for (let i = 0; i < n; i++) {
      if (--this.wait <= 0) { this.spawn(); this.wait = this.gap(); }
    }
    // Spawned for the whole block at once is within 3ms: nobody hears that.
    for (const d of this.drops) {
      for (let i = 0; i < n && d.age < d.end; i++, d.age++) {
        const x = Math.random() * 2 - 1;
        const y = d.b0 * x + d.b2 * d.x2 - d.a1 * d.y1 - d.a2 * d.y2;
        d.x2 = d.x1; d.x1 = x; d.y2 = d.y1; d.y1 = y;
        const g = d.age < d.attack ? d.peak * d.age / d.attack : d.peak * Math.exp(d.fall * (d.age - d.attack));
        const v = y * g;
        L[i] += v * d.l;
        if (R) R[i] += v * d.r;
      }
    }
    this.drops = this.drops.filter((d) => d.age < d.end);
    return this.on;
  }
});`;function CM(i){if(!i.audioWorklet)return Promise.resolve();const t=URL.createObjectURL(new Blob([RM],{type:"application/javascript"}));return i.audioWorklet.addModule(t).then(()=>{i.hiss=!0}).catch(()=>{}).finally(()=>URL.revokeObjectURL(t))}function Vo(i,t){if(i.hiss){const n=new AudioWorkletNode(i,"vtt-hiss",{numberOfInputs:0,outputChannelCount:[1]});return{node:n,stop(s){setTimeout(()=>{n.port.postMessage("stop"),n.disconnect()},Math.max(0,s-i.currentTime)*1e3)}}}const e=ji(i,t);return e.start(0,Math.random()*jn),{node:e,stop:n=>e.stop(n)}}function ji(i,t){const e=i.createBufferSource();return e.buffer=t,e.loop=!0,e}function Pn(i,t,e,n){const s=i.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=n,s}function Wo(i,t){const e=i.createGain();return e.gain.setValueAtTime(0,i.currentTime),e.gain.linearRampToValueAtTime(1,i.currentTime+Es),e.connect(t),e}function Xo(i,t,e){const n=i.currentTime;t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+Es);for(const s of e)try{s.stop(n+Es+.05)}catch{}setTimeout(()=>t.disconnect(),(Es+.2)*1e3)}const PM=1.2,LM=100;function Mh(i,t,e){let n=i.currentTime+t();const s=()=>{const a=i.currentTime;for(n<a&&(n=a+t());n<a+PM;)e(n),n+=t()};s();const r=setInterval(s,LM);return{stop(){clearInterval(r)}}}function IM(){try{const i=JSON.parse(localStorage.getItem(Qu)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.5,muted:!!i.muted}}catch{return{volume:.5,muted:!1}}}function Sh(i){try{localStorage.setItem(Qu,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}const td="vtt-table";async function ed(i,t){var o;const e={};for(const l of Object.keys(i.state.assets||{})){const c=await t.blob(l);c&&(e[l]={mime:c.type||((o=i.state.assets[l])==null?void 0:o.mime)||"image/webp",data:await UM(c)})}const{id:n,tokens:s,...r}=i,a=JSON.stringify({format:td,v:1,...r,assets:e});return new Blob([a],{type:"application/json"})}async function DM(i){let t;try{t=JSON.parse(i)}catch{throw new Error("That is not a table file.")}if(!t||t.format!==td||typeof t.state!="object")throw new Error("That is not a table file.");if(t.v>1)throw new Error("That table was saved by a newer version. Reload to update, then try again.");const e=[];let n=0;for(const[r,a]of Object.entries(t.assets||{}))try{const o=kM(a.data);if(await Or(o.buffer)!==r){n++;continue}e.push({hash:r,blob:new Blob([o],{type:typeof a.mime=="string"?a.mime:"image/webp"})})}catch{n++}return{record:{name:typeof t.name=="string"?t.name.slice(0,80):"Imported table",code:typeof t.code=="string"?t.code.slice(0,8):null,savedAt:Number.isFinite(t.savedAt)?t.savedAt:Date.now(),seed:Number.isInteger(t.seed)?t.seed:void 0,rng:t.rng&&typeof t.rng=="object"?t.rng:void 0,said:Number.isInteger(t.said)?t.said:0,secrets:Array.isArray(t.secrets)?t.secrets.slice(-200):[],secretRng:t.secretRng&&typeof t.secretRng=="object"?t.secretRng:void 0,state:Io(t.state)},images:e,skipped:n}}async function UM(i){const t=new Uint8Array(await i.arrayBuffer());let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}function kM(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const NM=(i,t)=>typeof i=="string"&&typeof t=="string"&&i.trim().toLowerCase()===t.trim().toLowerCase();function FM(i,t,e){for(const n of Object.values(i.roster))if(!(n.peerId===e||n.role!==Jn||!n.away||n.claimed)&&NM(n.name,t))return n;return null}function nd(i,t,e){const n=[],s=Ee(i);for(const a of Object.values((s==null?void 0:s.tokens)||{}))a.owner===t&&n.push(["tok.patch",a.id,{owner:e}]);const r=i.roster[t];return r&&n.push(["peer.join",{...r,away:!0,claimed:e}]),n}function OM(i,t){const e=[];for(const n of Object.values(i.roster))n.role!==en||n.peerId===t||e.push(...nd(i,n.peerId,t));return e}const dn={tokens:40,name:48,minSize:.25,maxSize:12,reach:2e3,assetName:128,artPx:2e4},bh=/^[0-9a-f]{64}$/,Fa=i=>typeof i=="string"&&i.length>0&&i.length<=64,Bi=i=>typeof i=="number"&&Number.isFinite(i),_r=(i,t,e)=>i<t?t:i>e?e:i,Oi=i=>Bi(i)?_r(Math.round(i*100)/100,-2e3,dn.reach):null,Oa=Math.PI*2,wh=i=>Math.round((i%Oa+Oa)%Oa*1e4)/1e4,Ba=(i,t)=>typeof i=="string"?i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,t):"";function BM(i,t){var e;return((e=i.roster[t])==null?void 0:e.role)===en}function zM(i,t,e){var s;const n=(s=Ee(i))==null?void 0:s.tokens[e];return!!n&&n.owner===t}function GM(i,t,e){var o;if(!Array.isArray(e)||typeof e[0]!="string")return null;const[n,s,r,a]=e;switch(n){case"asset.add":{if(!s||typeof s!="object"||!bh.test(s.hash))return null;const l=c=>Number.isInteger(c)&&c>0&&c<=dn.artPx?c:0;return["asset.add",{hash:s.hash,name:Ba(s.name,dn.assetName)||"token",mime:typeof s.mime=="string"&&/^image\/[\w.+-]{1,32}$/.test(s.mime)?s.mime:"image/webp",w:l(s.w),h:l(s.h),size:Number.isInteger(s.size)&&s.size>=0?s.size:0,scaled:!!s.scaled}]}case"tok.add":{if(!s||typeof s!="object")return null;const l=Oi(s.x),c=Oi(s.y);if(l===null||c===null)return null;const h={name:Ba(s.name,dn.name),x:l,y:c,size:Bi(s.size)?_r(s.size,dn.minSize,dn.maxSize):1,owner:t,layer:"token",hidden:!1};if(s.asset!==void 0&&s.asset!==null){if(!bh.test(s.asset))return null;h.asset=s.asset}const d=(o=i.roster[t])==null?void 0:o.color;return Number.isInteger(d)?h.border=d:Number.isInteger(s.border)&&(h.border=s.border&16777215),(s.shape==="circle"||s.shape==="square")&&(h.shape=s.shape),["tok.add",h]}case"tok.move":{const l=Oi(r),c=Oi(a);return!Fa(s)||l===null||c===null?null:["tok.move",s,l,c]}case"tok.del":return Fa(s)?["tok.del",s]:null;case"tok.patch":{if(!Fa(s)||!r||typeof r!="object")return null;const l={};return typeof r.name=="string"&&(l.name=Ba(r.name,dn.name)),Bi(r.size)&&(l.size=_r(Math.round(r.size*100)/100,dn.minSize,dn.maxSize)),Bi(r.rot)&&(l.rot=wh(r.rot)),r.facing===null?l.facing=null:Bi(r.facing)&&(l.facing=wh(r.facing)),typeof r.light=="boolean"&&(l.light=r.light),Bi(r.lightRange)&&(l.lightRange=_r(Math.round(r.lightRange),1,Er)),Array.isArray(r.status)&&(l.status=vu(r.status)),Object.keys(l).length?["tok.patch",s,l]:null}case"peer.color":return Number.isInteger(s)?["peer.color",t,s&16777215]:null;case"dice.roll":return typeof s=="string"&&s.length<=pn.input?["dice.roll",t,s]:null;case"fx.ping":{const l=Oi(s),c=Oi(r);return l===null||c===null?null:["fx.ping",t,l,c]}case"chat.say":{const l=_u(s);return l?["chat.say",t,l]:null}default:return null}}function HM(i,t,e){if(!i.roster[t])return!1;if(BM(i,t))return!0;const n=Ee(i);switch(e[0]){case"asset.add":return!0;case"tok.add":{if(!n||e[1].asset&&!i.assets[e[1].asset])return!1;let s=0;for(const r of Object.values(n.tokens))r.owner===t&&s++;return s<dn.tokens}case"tok.move":case"tok.del":case"tok.patch":return zM(i,t,e[1]);case"peer.color":case"dice.roll":case"chat.say":case"fx.ping":return e[1]===t;default:return!1}}const VM=50;class WM{constructor({lobby:t,table:e,library:n,onRoster:s,onSeat:r,onFx:a}){this.lobby=t,this.table=e,this.library=n,this.onFx=a,this.unsubscribe=e.events.onRemote((o,l)=>{o==="op"&&t.link.send({t:"op",n:l[1],c:l[0]})}),t.listen({onRoster:s,onSeated:o=>{r==null||r(o),this.sendDoc(o)},onMessage:(o,l)=>this.receive(o,l),onAsset:(o,l,c)=>this.upload(o,l,c)})}sendDoc(t){this.lobby.link.send({t:"doc",s:this.table.snapshot()},t)}receive(t,e){if(t.t==="sync")return this.sendDoc(e);if(t.t==="need")return this.sendAssets(Oy(t),e);if(t.t==="req")return this.request(hh(t.c),e)}request(t,e){var s;let n=0;for(const r of t){const a=GM(this.table.state,e,r);if(!a||!HM(this.table.state,e,a)){n++;continue}if(a[0]==="asset.add"&&!this.library.has(a[1].hash)){n++;continue}if(a[0]==="peer.color"){this.recolor(a[1],a[2]);continue}if(a[0]==="dice.roll"){try{this.table.rollDice(a[2],a[1])}catch{n++}continue}if(a[0]==="fx.ping"){const o={t:"fx",k:"ping",x:a[2],y:a[3],by:a[1]};(s=this.onFx)==null||s.call(this,o),this.lobby.link.send(o);continue}if(a[0]==="chat.say"){this.table.say(a[1],a[2],Date.now());continue}this.table.dispatch(a,{record:!1})}n&&console.info(`[session] refused ${n} of ${t.length} from ${e}`)}recolor(t,e){this.lobby.setColor(t,e);const n=this.table.scene;for(const s of Object.values((n==null?void 0:n.tokens)||{}))s.owner===t&&s.border!==e&&this.table.dispatch(["tok.patch",s.id,{border:e}],{record:!1})}async upload(t,e,n){const s=e==null?void 0:e.h;if(!Rr(s))return;const r=await id(t);if(!(!r||r.byteLength>_n.upload)){if(await Or(r)!==s){console.warn("[session] upload did not match its hash",s);return}this.library.has(s)||await this.library.putBytes(s,new Blob([r],{type:sd(e)})),this.request(hh(e.req),n)}}async sendAssets(t,e){for(const n of t){const s=await this.library.blob(n);if(!s||!this.lobby.members.has(e))continue;const r=this.table.state.assets[n];await this.lobby.link.sendAsset(await s.arrayBuffer(),{h:n,mime:(r==null?void 0:r.mime)||s.type},e)}}leave(){this.unsubscribe()}}class XM{constructor({lobby:t,table:e,library:n,onRoster:s,onGmLeft:r,onProgress:a,onHydrated:o,onFx:l}){this.lobby=t,this.table=e,this.library=n,this.onProgress=a,this.onHydrated=o,this.onFx=l,this.hydrated=!1,this.asked=new Set,this.syncing=!1,this.patches=new Map,this.patchTimer=0,t.listen({onRoster:s,onGmLeft:r,onMessage:c=>this.receive(c),onAsset:(c,h)=>this.adopt(c,h),onAssetProgress:(c,h)=>this.progress(c,h)})}receive(t){var e,n;if(t.t==="fx")return(e=this.onFx)==null?void 0:e.call(this,t);if(t.t==="doc"){const s=ky(t);if(!s)return;this.table.load(s),this.hydrated=!0,this.syncing=!1,(n=this.onHydrated)==null||n.call(this),this.fetchMissing()}else if(t.t==="op"){const s=Ny(t);if(!s||!this.hydrated||this.syncing||s.seq<=this.table.seq)return;if(s.seq!==this.table.seq+1)return this.resync();if(this.table.dispatch(s.cmd,{record:!1}),this.table.seq!==s.seq)return this.resync();this.fetchMissing()}}resync(){this.syncing=!0,this.lobby.link.send({t:"sync"},this.lobby.gmId)}async fetchMissing(){const t=this.library.missing(this.table.state).filter(n=>!this.asked.has(n));if(!t.length)return;for(const n of t)this.asked.add(n);const e=await this.library.restore(t);for(const n of t)e.includes(n)||this.asked.delete(n);for(let n=0;n<e.length;n+=_n.need)this.lobby.link.send({t:"need",h:e.slice(n,n+_n.need)},this.lobby.gmId)}async adopt(t,e){var s;const n=e==null?void 0:e.h;if(!(!Rr(n)||!this.asked.has(n))){this.asked.delete(n);try{const r=await id(t);if(!r||await Or(r)!==n){console.warn("[session] asset did not match its hash",n);return}await this.library.putBytes(n,new Blob([r],{type:sd(e)}))}finally{this.asked.size||(s=this.onProgress)==null||s.call(this,null,"")}}}request(t){const e=[];for(const n of t)n[0]==="tok.patch"&&typeof n[1]=="string"?this.patches.set(n[1],{...this.patches.get(n[1]),...n[2]}):e.push(n);e.length?(this.flushPatches(),this.lobby.link.send({t:"req",c:e},this.lobby.gmId)):this.patches.size&&!this.patchTimer&&(this.patchTimer=setTimeout(()=>this.flushPatches(),VM))}flushPatches(){if(clearTimeout(this.patchTimer),this.patchTimer=0,!this.patches.size)return;const t=[...this.patches].map(([e,n])=>["tok.patch",e,n]);this.patches.clear(),this.lobby.link.send({t:"req",c:t},this.lobby.gmId)}async upload(t,e){if(await this.library.put(t),this.table.state.assets[t.hash])return this.request(e);await this.lobby.link.sendAsset(await t.blob.arrayBuffer(),{h:t.hash,mime:t.mime,req:e},this.lobby.gmId)}progress(t,e){var r,a;const n=e==null?void 0:e.h;if(!Rr(n)||!this.asked.has(n))return;const s=((r=this.table.state.assets[n])==null?void 0:r.name)||"art";(a=this.onProgress)==null||a.call(this,Math.max(0,Math.min(1,t)),s)}leave(){}}async function id(i){return i instanceof ArrayBuffer?i:i instanceof Blob?i.arrayBuffer():ArrayBuffer.isView(i)?i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength):null}function sd(i){const t=i==null?void 0:i.mime;return typeof t=="string"&&/^image\/[\w.+-]{1,32}$/.test(t)?t:"image/webp"}const $=new vl,We=new Tx;let ve="local";$.dispatch(["peer.join",Tr(ve,"You",{role:en})],{record:!1});$.dispatch(["scene.add",{name:"Table"}],{record:!1});const $M=document.getElementById("chrome"),ge=w("div",{id:"busy",hidden:!0}),ws=w("div",{id:"toast",hidden:!0});document.getElementById("stage").append(ge);document.body.append(ws);let Eh=0;function xe(i,t="info"){ws.textContent=i,ws.dataset.kind=t,ws.hidden=!1,clearTimeout(Eh),Eh=setTimeout(()=>{ws.hidden=!0},5200)}let Ve=null,ce=new Set;const nn=i=>i?Qt?$.dispatch(i):(re==null||re.request([i]),null):null,zr=i=>Qt||!!i&&i.owner===ve,ke=new Vu({onCommand:nn,onImportMap:i=>md(i),onPickMap:i=>aS(i),onImportToken:i=>gd(i),onAddBlank:()=>vd({}),onFit:()=>ht.fit($.state),onDetect:()=>rS(),onClose:()=>te.show(null)}),te=new Yy([{id:"scenes",label:"Scenes",key:"N",panel:!0},{id:"fx",label:"FX — weather, darkness, lightning",key:"X",panel:!0},{id:"tokens",label:"Add tokens",key:"T",panel:!0},{id:"map",label:"Map",key:"M",panel:!0},{id:"grid",label:"Grid",key:"G",panel:!0},{id:"light",label:"Light — walls and masks",key:"L",panel:!0},"gap",{id:"undo",label:"Undo",key:"Ctrl+Z",run:()=>$.undo()},{id:"redo",label:"Redo",key:"Ctrl+Shift+Z",run:()=>$.redo()},{id:"fit",label:"Fit the map to the view",key:"F",run:()=>ht.fit($.state)},{id:"save",label:"Save the table to a file",run:()=>hS()},"sep",{id:"music",label:"Music for the table",panel:!0},{id:"voice",label:"Voice",panel:!0},{id:"leave",label:"Leave game",run:()=>Te==null?void 0:Te.leave()}],{onOpen:i=>{ke.show(i),yl(),yi.setActive(i==="light"),Te==null||Te.setOpen(i)}});document.body.prepend(te.root);function yl(){var r;const i=ke.root,t=te.open&&te.buttons.get(te.open);if(i.hidden||!t||getComputedStyle(te.root).position!=="fixed"){i.style.top="";return}const e=(r=i.offsetParent)==null?void 0:r.getBoundingClientRect();if(!e)return;const n=t.getBoundingClientRect().top-e.top-8,s=e.height-i.offsetHeight-12;i.style.top=`${Math.round(Math.max(12,Math.min(n,s)))}px`}new ResizeObserver(()=>yl()).observe(ke.root);addEventListener("resize",()=>yl());const Ml=new eM({onPlay:i=>ad(i),onAmbience:i=>{$.scene&&nn(["scene.fx",$.scene.id,i])}});ke.addSection(Ml.root);const rd=new nM({onCommand:nn,onGo:i=>Th(i),onFx:i=>{$.scene&&nn(["scene.fx",$.scene.id,i])},onNew:()=>{const i=new Set($.state.sceneOrder);nn(["scene.add",{name:`Scene ${$.state.sceneOrder.length+1}`}]);const t=$.state.sceneOrder.find(e=>!i.has(e));t&&Th(t)}});ke.addSection(rd.root);function Th(i){!$.scene||$.scene.id===i||!$.state.scenes[i]||nn(["scene.go",i])}const _i=new wM,Sl=[new Ju({ambience:_i,label:"Your ambience volume"})];Ml.root.append(Sl[0].root);function ad(i){od(i),qt&&Qt&&qt.link.send({t:"fx",k:i})}function od(i){var t;ht.fx.play(i),i==="lightning"&&_i.thunder((t=$.scene)==null?void 0:t.fx)}const qM=400;let Ah=0;function ld(i,t,e){const n=performance.now();n-Ah<qM||(Ah=n,i=Un(i),t=Un(t),ht.fx.ping(i,t,cd(ve)),qt&&(Qt?qt.link.send({t:"fx",k:"ping",x:i,y:t,by:ve,pull:!!e}):re==null||re.request([["fx.ping",i,t]])))}function Rh(i){if(i.k==="ping"){if(i.by===ve||!Number.isFinite(i.x)||!Number.isFinite(i.y))return;ht.fx.ping(i.x,i.y,cd(i.by)),i.pull&&ht.lookAt(i.x,i.y);return}["lightning","shake","damage"].includes(i.k)&&od(i.k)}function cd(i){var t;return hs(((t=$.state.roster[i])==null?void 0:t.color)??Ut.tokens.defaultBorder)}te.setVisible("voice",!1);te.setVisible("music",!1);te.setVisible("leave",!1);const YM=["map","grid","tokens","fx","light","scenes","undo","redo","fit","save","music"],jM={KeyM:"map",KeyG:"grid",KeyT:"tokens",KeyX:"fx",KeyL:"light",KeyN:"scenes"},Vi=new yy({onCommand:nn,onSizeCommitted:i=>tS(i),onDelete:()=>fd()});document.getElementById("stage").append(ke.root);jx().then(i=>ke.setLibrary(i));const ht=new uy({canvas:document.getElementById("canvas"),overlayEl:document.getElementById("overlay"),library:We,handlers:{onSettings:i=>bl(i),canEdit:i=>zr(i)}}),Kn=w("div",{id:"token-pop",hidden:!0,role:"dialog","aria-label":"Token settings"},w("button",{type:"button",class:"pop-close",text:"×",title:"Close (Esc)","aria-label":"Close",onclick:()=>Fs()}),Vi.root);document.getElementById("stage").append(Kn);let mn=null;function bl(i){ce.has(i)||Nn(i),mn=i,Kn.hidden=!1,hd()}function Fs(){mn=null,Kn.hidden=!0}function hd(){var u;if(!mn)return;const i=ht.views.get(mn),t=(u=$.scene)==null?void 0:u.tokens[mn];if(!i||!t||!ce.has(mn))return Fs();const e=ht.rect,n=ht.cam.toNdc(i.root.position.x,i.root.position.y),s=(n.x*.5+.5)*e.width,r=(1-(n.y*.5+.5))*e.height,a=Math.max(.05,t.size)/2*ht.cam.pxPerUnit(e.height),o=Kn.offsetWidth,l=Kn.offsetHeight,c=Math.max(8,ht.leftInset());let h=s+a+18;h+o>e.width-8&&(h=s-a-18-o),h=Math.max(c,Math.min(e.width-o-8,h));const d=Math.max(8,Math.min(e.height-l-8,r-48));Kn.style.transform=`translate(${Math.round(h)}px, ${Math.round(d)}px)`}document.addEventListener("pointerdown",i=>{var t,e;mn&&!Kn.contains(i.target)&&!((e=(t=i.target).closest)!=null&&e.call(t,".token-gear"))&&Fs()},!0);Kn.addEventListener("keydown",i=>{i.key==="Escape"&&(Fs(),i.stopPropagation())});ht.renderer.domElement.addEventListener("dblclick",i=>{if(yi.drawing||Gr())return;const t=ht.unitsAt(i.clientX,i.clientY),e=pi($.state,t.x,t.y,{isGm:!0});e&&ht.views.has(e.id)&&zr(e)&&bl(e.id)});ht.leftInset=()=>{const i=te.root;return i.hidden||getComputedStyle(i).position!=="fixed"?0:Math.max(0,i.getBoundingClientRect().right+10-ht.rect.left)};const yi=new rM({stage:ht,getScene:()=>$.scene,onCommand:nn,getPicture:async i=>{const t=await We.blob(i);return t?Kx(t):null}});ke.addSection(yi.root);ht.fit($.state);const Gr=()=>!Qt&&ht.fx.locked,KM=new my(ht,{getState:()=>$.state,locked:Gr,canGrab:i=>zr(i),onSelect:i=>Nn(i),isSelected:i=>ce.has(i),hasSelection:()=>ce.size>0,drawing:()=>Qt&&yi.drawing?yi:null,groupOf:i=>ce.has(i)?[...ce]:[i],onToggle:i=>eS(i),onDropGroup:i=>dd(i.map(t=>Fr($.state,t.id,t.x,t.y))),onContext:i=>Nn((i==null?void 0:i.id)??null),onPing:(i,t,e)=>ld(i,t,e),onTurn:(i,t)=>{Qt||JM(i,t),nn(["tok.patch",i,{facing:t}])}}),Cr=new Map,ud=2500;function ZM(i,t,e){Cr.set(i,{x:t,y:e,until:performance.now()+ud}),ht.ghosts.set(i,{x:t,y:e})}const Pr=new Map;function JM(i,t){Pr.set(i,{facing:t,until:performance.now()+ud}),ht.turns.set(i,t)}function QM(i){var t,e;for(const[n,s]of Cr){const r=(t=$.scene)==null?void 0:t.tokens[n];(!r||r.x===s.x&&r.y===s.y||i>s.until)&&(Cr.delete(n),ht.ghosts.delete(n))}for(const[n,s]of Pr){const r=(e=$.scene)==null?void 0:e.tokens[n];(!r||typeof r.facing=="number"&&Math.abs(r.facing-s.facing)<.001||i>s.until)&&(Pr.delete(n),ht.turns.delete(n))}}function tS(i){var e;const t=(e=$.scene)==null?void 0:e.tokens[i];t&&nn(Fr($.state,i,t.x,t.y))}function Nn(i){Ve=i,ce=new Set(i?[i]:[]),wl()}function eS(i){ce.has(i)?(ce.delete(i),Ve===i&&(Ve=[...ce].pop()??null)):(ce.add(i),Ve=i),wl()}function wl(){ht.selectedIds=ce,ht.selectedId=ce.size===1?Ve:null}function nS(){var e;const i=((e=$.scene)==null?void 0:e.tokens)||{};let t=!1;for(const n of ce)i[n]||(ce.delete(n),t=!0);Ve&&!i[Ve]&&(Ve=[...ce].pop()??null,t=!0),t&&wl()}function dd(i){const t=i.filter(Boolean);if(t.length){if(Qt){t.length===1?$.dispatch(t[0]):$.batch(t);return}for(const[,e,n,s]of t)ZM(e,n,s);re==null||re.request(t)}}function $o(){var t;const i=((t=$.scene)==null?void 0:t.tokens)||{};return[...ce].map(e=>i[e]).filter(e=>e&&zr(e))}function fd(){const i=$o().map(t=>["tok.del",t.id]);i.length&&(Qt?i.length===1?$.dispatch(i[0]):$.batch(i):re==null||re.request(i),Nn(null))}const El=new Jy({onRoll:i=>Hr(i),onError:i=>xe(i,"error")}),Tl=new Qy({onSay:i=>iS(i),onRoll:i=>Hr(i),onError:i=>xe(i,"error")}),Al=new uM({onRoll:i=>Hr(i)});document.getElementById("stage").append(w("div",{id:"dice"},Tl.root,w("div",{class:"dice-row"},El.root,Al.root)));function iS(i){if(!Qt)return re==null?void 0:re.request([["chat.say",i]]);$.say(ve,i,Date.now())}function Hr(i){var e;let t;try{t=kr(i)}catch(n){return xe(n.message,"error")}if(t.note&&Al.add(t.note,xu(t.terms)),!Qt)return re==null?void 0:re.request([["dice.roll",i]]);try{if(El.hidden){const n=$.rollSecret(i,ve,Date.now());ht.dice.play(n,((e=$.state.roster[ve])==null?void 0:e.color)??Ut.tokens.defaultBorder),Tl.refresh($.feedWithSecrets(),$.state.roster),Sd();return}$.rollDice(i,ve)}catch(n){xe(n.message,"error")}}const qo=new Set;function pd(){for(const i of $.rolls())qo.add(i.id)}function sS(){var e;const i=$.rolls().filter(n=>!qo.has(n.id));if(!i.length)return;for(const n of i)qo.add(n.id);const t=i[i.length-1];ht.dice.play(t,((e=$.state.roster[t.by])==null?void 0:e.color)??Ut.tokens.defaultBorder)}async function md(i){ge.hidden=!1,ge.textContent=`Reading ${i.name}…`;try{const t=await Iu(i);await We.put(t);const e=$.state.activeScene,n=[["asset.add",ku(t)],["scene.map",e,t.hash,t.w,t.h]],s=Vu.gridGuessFor(t.name,t.w,t.h),r=t.detected,a=r&&r.confidence>=Ns.minConfidence;if(s?n.push(["scene.grid",e,{unitPx:s.unitPx,ox:s.ox,oy:s.oy}]):a&&n.push(["scene.grid",e,{unitPx:Un(r.unitPx),ox:Un(r.ox),oy:Un(r.oy)}]),$.batch(n),ht.fit($.state),s){const o=r&&Math.abs(r.unitPx-s.unitPx)/s.unitPx<.03;xe(`${t.name} — grid from the filename: ${s.cols}×${s.rows} at ${s.unitPx}px.`+(o?" Measuring the image agrees.":""))}else a?xe(`${t.name} — grid measured from the image: ${r.unitPx.toFixed(1)}px (${r.agreed} of ${r.readings} readings agreed). Nudge the offset if it sits wrong.`):(xe(`${t.name} loaded. No grid found in the image — set pixels per cell by hand, or press Detect.`),te.show("grid"))}catch(t){xe(t.message||"Could not load that image.","error")}finally{ge.hidden=!0}}async function rS(){const i=$.scene;if(!(i!=null&&i.map))return xe("Load a map first.");ge.hidden=!1,ge.textContent="Measuring the grid…";try{const t=await We.bitmap(i.map);if(!t)throw new Error("That map is not loaded.");const e=await Du(t,i.artW);if(!e||e.confidence<Ns.minConfidence)return xe(e?`Nothing convincing — the best fit was ${e.unitPx.toFixed(1)}px, and only ${e.agreed} of ${e.readings} readings agreed. Left alone.`:"Could not measure that image.");$.dispatch(["scene.grid",i.id,{unitPx:Un(e.unitPx),ox:Un(e.ox),oy:Un(e.oy)}]),xe(`Measured ${e.unitPx.toFixed(1)}px per cell — ${e.agreed} of ${e.readings} readings agreed.`)}catch(t){xe(t.message||"Could not measure that image.","error")}finally{ge.hidden=!0}}async function aS(i){ge.hidden=!1,ge.textContent=`Fetching ${i.name}…`;try{await md(await Yx(i.url,i.name))}catch(t){xe(t.message||`Could not load ${i.name}.`,"error")}finally{ge.hidden=!0}}async function gd(i){ge.hidden=!1;let t=0;for(const e of i){ge.textContent=`Reading ${e.name}… (${++t}/${i.length})`;try{const n=await Iu(e),s=e.name.replace(/\.[a-z0-9]+$/i,"").slice(0,48),r=[["asset.add",ku(n)],_d({asset:n.hash,name:s,border:Qt?Ut.tokens.defaultBorder:pS()},t-1)];Qt?(await We.put(n),$.batch(r)):(ge.textContent=`Sending ${e.name} to the GM…`,await re.upload(n,r))}catch(n){xe(n.message||`Could not load ${e.name}.`,"error")}}ge.hidden=!0}function vd(i){Qt||xd();const t=nn(_d(i,0));t&&Nn(t[1])}let zi=null;function xd(){var t;const i=Object.values(((t=$.scene)==null?void 0:t.tokens)||{}).filter(e=>e.owner===ve);zi={known:new Set(i.map(e=>e.id)),until:performance.now()+5e3}}function oS(i){var e;if(!zi)return;const t=Object.values(((e=$.scene)==null?void 0:e.tokens)||{}).filter(n=>n.owner===ve&&!zi.known.has(n.id));t.length?(Nn(t[t.length-1].id),zi=null):i>zi.until&&(zi=null)}function _d(i,t){var h;const e=ht.cam.camera.position,n=(h=$.scene)==null?void 0:h.grid,s=i.size??Ut.tokens.defaultSize,r=Math.max(1,s),a=d=>gl(d,-e.y,n,s).map(Un);let o=e.x+t*r,[l,c]=a(o);for(let d=0;d<24&&pi($.state,l,c);d++)o+=r,[l,c]=a(o);return["tok.add",{border:Ut.tokens.defaultBorder,owner:Qt?"":ve,...i,size:s,x:l,y:c}]}let qt=null,Te=null,Se=null,Yo=null,Ue=null,Ts=null,As=null;function lS(){Ts==null||Ts.render(),As==null||As.render()}function yd(){if(!Se)return;Yo.render();const i=Se.status();Te==null||Te.setVoice(i),ht.speaking=new Set([...i].filter(([t,e])=>{var n;return e.speaking&&((n=$.state.roster[t])==null?void 0:n.role)==="player"}).map(([t])=>t))}function Ch(i){Te.render(i),Se&&(Se.announce(),yd())}let re=null,Qt=!0;new URLSearchParams(location.search).has("offline")||new Gy({onEnter:i=>cS(i),onResume:async i=>{const t=await Tu(i);if(!t)throw new Error("That table is no longer saved here.");return await Pl(t),t},onOpenFile:async i=>bd(i)});addEventListener("pagehide",()=>{Ue==null||Ue.leave(),Se==null||Se.leave(),re==null||re.leave(),qt==null||qt.leave()});function cS(i){qt=i,Qt=qt.isGm;const t=ve;if(ve=qt.selfId,$.dispatch(["peer.join",Tr(ve,qt.name,{role:Qt?en:Jn})],{record:!1}),Qt){for(const n of OM($.state,ve))$.dispatch(n,{record:!1});Vr=qt.code}$.state.roster[t]&&t!==ve&&$.dispatch(["peer.part",t],{record:!1}),Al.useTable(qt.code),Te=new jy(qt,{onInvite:()=>te.show("invite"),onVoice:()=>te.toggle("voice"),onTokens:()=>te.toggle("tokens"),onArmLeave:n=>{const s=Qt?"The table is saved; resume it from the start screen.":"";te.setArmed("leave",n,n?`Click again to leave. ${s}`.trim():"Leave game"),n&&xe(`Click Leave again to go. ${s}`.trim())}}),$M.prepend(Te.root),ke.addSection(Te.invite),te.setVisible("leave",Qt),Se=new pM({lobby:qt,onChange:()=>yd()}),Yo=new gM({voice:Se,roster:()=>qt.roster()}),ke.addSection(Yo.root),te.setVisible("voice",Qt),Ue=new Zu({lobby:qt,voice:Se,onChange:()=>lS()}),As=new bM({music:Ue}),Te.root.append(As.root);const e=new Ju({ambience:_i});if(Sl.push(e),Te.addSound(e),Qt&&(Ts=new SM({music:Ue}),ke.addSection(Ts.root),te.setVisible("music",!0)),Te.render(qt.roster()),Qt){re=new WM({lobby:qt,table:$,library:We,onSeat:n=>uS(n),onFx:n=>Rh(n),onRoster:n=>{Ch(n),Ph(n)}}),Ph(qt.roster());return}El.setGm(!1);for(const n of YM)te.setVisible(n,!1);te.root.hidden=!0,document.documentElement.style.setProperty("--rail-clear","12px"),te.show(null),Nn(null),ke.root.querySelector('section[data-tool="tokens"]').remove(),ke.addSection(new Ky({onImportToken:n=>{xd(),gd(n)},onAddBlank:()=>vd({})}).root),Vi.setPlayer({onColor:n=>re.request([["peer.color",n]])}),ge.hidden=!1,ge.textContent="Fetching the table…",re=new XM({lobby:qt,table:$,library:We,onRoster:n=>Ch(n),onGmLeft:()=>{Te.gmLeft(),xe("The GM has left the room.","error")},onFx:n=>Rh(n),onHydrated:()=>{pd(),ge.textContent==="Fetching the table…"&&(ge.hidden=!0)},onProgress:(n,s)=>{ge.hidden=n===null,n!==null&&(ge.textContent=`Receiving ${s}… ${Math.round(n*100)}%`)}})}function Ph(i){const t=new Set(i.map(e=>e.peerId));for(const[e,n]of Object.entries($.state.roster))!t.has(e)&&!n.away&&$.dispatch(["peer.join",{...n,away:!0}],{record:!1});for(const e of i){const n=$.state.roster[e.peerId];(!n||n.away||n.name!==e.name||n.color!==e.color||n.role!==e.role)&&$.dispatch(["peer.join",{...e,tokens:(n==null?void 0:n.tokens)??[]}],{record:!1})}}let Lr=null,Vr=null,jo=0;function Rl(){const i=$.scene;return!!i&&(!!i.map||Object.keys(i.tokens).length>0||$.feed().length>0)}function Md(){var t;const i=(t=$.scene)!=null&&t.map?$.state.assets[$.scene.map]:null;if(i!=null&&i.name){const e=i.name.replace(/\.[a-z0-9]+$/i,"").replace(/\((?:\d+x\d+|free)\)/gi,"").replace(/[_\s]+/g," ").trim();if(e)return e.slice(0,80)}return`Table of ${new Date().toLocaleDateString([],{day:"numeric",month:"short"})}`}function Wr(){var i;return Lr||(Lr=`t_${Date.now().toString(36)}_${$.seed.toString(36)}`),{id:Lr,name:Md(),code:Vr,savedAt:Date.now(),tokens:Object.keys(((i=$.scene)==null?void 0:i.tokens)||{}).length,state:$.snapshot(),seed:$.seed,rng:$.rng.getState(),said:$.said,secrets:$.secrets,secretRng:$.secretRng.getState()}}function Sd(){!Qt||!Rl()||(clearTimeout(jo),jo=setTimeout(()=>Au(Wr()),700))}function Cl(){return clearTimeout(jo),Qt&&Rl()?Au(Wr()):Promise.resolve(!1)}async function Pl(i){$.load(i.state),pd(),Number.isInteger(i.seed)&&($.seed=i.seed),i.rng?$.rng.setState(i.rng):$.rng.seed($.seed),$.said=i.said||0,$.restoreSecrets(i.secrets,i.secretRng),Lr=i.id,Vr=i.code||null,await We.restore(We.missing($.state)),Nn(null),Ko=null,ht.fit($.state)}async function bd(i){const{record:t,images:e,skipped:n}=await DM(await i.text());for(const s of e)await We.putBytes(s.hash,s.blob);return t.id=null,await Pl(t),await Cl(),n&&xe(n===1?"One image in that file did not match its name and was left out.":`${n} images in that file did not match their names and were left out.`,"error"),t}async function hS(){if(!Rl())return xe("Nothing on the table to save yet.");const i=Wr(),t=await ed(i,We),e=w("a",{href:URL.createObjectURL(t),download:`${i.name}.vtt`});document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),1e4),xe(`Saved ${i.name}.vtt — open it from the start screen to carry on anywhere.`)}function uS(i){const t=qt==null?void 0:qt.members.get(i),e=t&&FM($.state,t.name,i);if(e){qt.setColor(i,e.color);for(const n of nd($.state,e.peerId,i))$.dispatch(n,{record:!1});xe(`${t.name} is back, with their tokens.`)}}addEventListener("pagehide",()=>{Cl()});const dS=new Ay({panLeft:["KeyA"],panRight:["KeyD"],panUp:["KeyW"],panDown:["KeyS"]},(i,t)=>{var c;if(Gr())return!1;if(i==="KeyF")return ht.fit($.state),!0;if(i==="Escape"&&mn)return Fs(),!0;if(i==="Escape"&&te.open)return te.show(null),!0;if(i==="Escape"&&ce.size)return Nn(null),!0;const e=jM[i];if(e&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&(Qt||e==="tokens")&&!((c=te.buttons.get(e))!=null&&c.hidden))return te.toggle(e),!0;if((t.ctrlKey||t.metaKey)&&i==="KeyZ")return Qt?(t.shiftKey?$.redo():$.undo(),!0):!1;if(!$o().length)return!1;if(i==="Delete"||i==="Backspace")return fd(),!0;const n=(i==="ArrowRight"?1:0)-(i==="ArrowLeft"?1:0),s=(i==="ArrowDown"?1:0)-(i==="ArrowUp"?1:0);if(!n&&!s)return!1;const r=$o(),a=r.map(h=>Fr($.state,h.id,h.x+n,h.y+s)),o=r.find(h=>h.id===Ve)||r[0],l=a.find(h=>(h==null?void 0:h[1])===(o==null?void 0:o.id));return dd(a),o&&l&&fS(l[2],l[3],o.size),!0});function fS(i,t,e=1){const n=ht.rect,s=ht.cam.pxPerUnit(n.height),r=ht.cam.toNdc(i,-t),a=(r.x*.5+.5)*n.width,o=(1-(r.y*.5+.5))*n.height,l=Math.max(60,s*1.5)+e/2*s,c=ht.leftInset()+l,h=n.width-l,d=l,u=n.height-l,f=c>h?a-(c+h)/2:a<c?a-c:a>h?a-h:0,g=d>u?o-n.height/2:o<d?o-d:o>u?o-u:0;(f||g)&&ht.cam.panBy(f/s,-g/s)}const ys={x:0,y:0},Lh=new Cd({hz:Ut.sim.hz});let Ih=-1,Ko=null,za=!1,Dh=$.state.activeScene;function wd(i){var n,s,r,a;requestAnimationFrame(wd);const{steps:t,frameDt:e}=Lh.advance(i);(Cr.size||Pr.size)&&QM(i);for(let o=0;o<t;o++)$.step(Lh.dt);if(dS.vector("panLeft","panRight","panUp","panDown",ys),Gr())KM.cancel();else if(ys.x||ys.y){const o=ht.cam.viewUnits*e;ht.cam.panBy(ys.x*o,-ys.y*o)}if($.seq!==Ih){Ih=$.seq,$.state.activeScene!==Dh&&(Dh=$.state.activeScene,yi.cancel(),ht.fit($.state)),oS(i),Sd(),sS(),Tl.refresh($.feedWithSecrets(),$.state.roster),te.setEnabled("undo",$.undoStack.length>0),te.setEnabled("redo",$.redoStack.length>0),ke.refresh($.state),Ml.refresh((n=$.scene)==null?void 0:n.fx),rd.refresh($.state),yi.refresh($.scene);for(const o of Sl)o.render(((r=(s=$.scene)==null?void 0:s.fx)==null?void 0:r.weather)||null);nS(),Vi.refresh($.state,Ve,ce.size),za=!0}else(Vi.id!==Ve||Vi.count!==ce.size)&&Vi.refresh($.state,Ve,ce.size);if(!Qt){const o=$.scene,l=o?`${o.id}:${o.map}:${o.artW}x${o.artH}`:"";l!==Ko&&(Ko=l,ht.fit($.state))}ht.frame($.state,e,{isGm:Qt,self:ve}),mn&&hd(),_i.update((a=$.scene)==null?void 0:a.fx),_i.setCurtain(1-(ht.fx.out??0)),za&&(za=!1,We.trimBitmaps($.state))}requestAnimationFrame(wd);window.__vtt={tokens:()=>{var i;return Object.values(((i=$.scene)==null?void 0:i.tokens)||{})},cam:()=>({x:ht.cam.camera.position.x,y:ht.cam.camera.position.y,viewUnits:ht.cam.viewUnits}),seq:()=>$.seq,dispatch:i=>nn(i),moveTo:(i,t,e)=>Fr($.state,i,t,e),origins:()=>ht.originViews.size,zoomTo:(i,t,e)=>{ht.cam.viewUnits=e,ht.cam.apply(),ht.cam.camera.position.set(i,-t,10),ht.cam.clamp()},bounds:()=>{const i=$.scene;return i?[i.artW,i.artH,i.grid.unitPx]:null},selected:()=>Ve,selection:()=>[...ce],saveNow:()=>Cl(),tableRecord:()=>({id:Lr,code:Vr,name:Md()}),resumeTable:async i=>Pl(await Tu(i)),exportText:async()=>(await ed(Wr(),We)).text(),importText:async i=>(await bd(new File([i],"table.vtt"))).name,rolls:()=>$.rolls(),feed:()=>$.feed(),darkAt:(i,t)=>{const e=ht.fx.toScreen(i,t),n=ht.fx.dark,s=n.width/ht.fx.rect.width;return n.getContext("2d").getImageData(Math.round(e.x*s),Math.round(e.y*s),1,1).data[3]/255},fx:()=>{var i;return{scene:((i=$.scene)==null?void 0:i.fx)??null,weather:ht.fx.weather,particles:ht.fx.parts.length,shade:ht.fx.darkShown,out:ht.fx.out,cover:ht.fx.cover.dataset.kind,pings:ht.fx.pings.length,flash:ht.fx.flash.classList.contains("fx-go")?ht.fx.flash.dataset.kind:null,shaking:document.getElementById("canvas").classList.contains("fx-shake")}},playFx:i=>ad(i),ambience:()=>_i.status(),ambienceEngine:()=>_i,ping:(i,t,e)=>ld(i,t,e),music:()=>Ue?{sharing:Ue.sharing,source:Ue.source,playing:Ue.playing,hearing:!!Ue.audio,volume:Ue.volume,muted:Ue.muted,error:Ue.error}:null,shareTone:async()=>{const i=new AudioContext,t=i.createOscillator(),e=i.createMediaStreamDestination();t.connect(e),t.start();const n=navigator.mediaDevices.getDisplayMedia;navigator.mediaDevices.getDisplayMedia=async()=>e.stream;try{return await Ue.share()}finally{navigator.mediaDevices.getDisplayMedia=n}},voice:()=>Se?{lastChime:Se.lastChime??null,chimes:Se.chimes,on:Se.on,muted:Se.muted,live:Se.live,peers:[...Se.peers].map(([i,t])=>({id:i,on:t.on,muted:t.muted,playing:!!t.audio,speaking:t.speaking,volume:t.volume})),silenced:[...Se.silenced]}:null,diceShown:()=>ht.dice.current?{id:ht.dice.current.id,dice:ht.dice.current.dice.length,settled:ht.dice.current.settledAt!==null}:null,roll:i=>Hr(i),diceReadout:()=>ht.dice.readout(),openTool:i=>i==="all"?ke.show("all"):te.show(i),room:()=>qt?{code:qt.code,role:qt.role,self:ve,roster:qt.roster()}:null,scenes:()=>({active:$.state.activeScene,order:[...$.state.sceneOrder],names:$.state.sceneOrder.map(i=>$.state.scenes[i].name)}),scene:()=>{const i=$.scene;return i?{map:i.map,artW:i.artW,grid:{...i.grid}}:null},blocks:()=>{var i;return JSON.parse(JSON.stringify(((i=$.scene)==null?void 0:i.blocks)||[]))},openSettings:i=>{const t=i||Ve;t&&bl(t)},settingsOpen:()=>mn,speaking:i=>{ht.speaking=new Set(i)},speakGlow:i=>{var t;return((t=ht.views.get(i))==null?void 0:t.speak)??null},hasArt:i=>We.has(i),mapShown:()=>!!ht.map.texture,roster:()=>Object.values($.state.roster),hovered:()=>ht.hoveredId,drawn:i=>{var e;const t=(e=ht.views.get(i))==null?void 0:e.root.position;return t?[t.x,-t.y]:null},screenOf:(i,t)=>{const e=ht.cam.toNdc(i,-t);return[ht.rect.left+(e.x*.5+.5)*ht.rect.width,ht.rect.top+(1-(e.y*.5+.5))*ht.rect.height]}};function Un(i){return Math.round(i*100)/100}function pS(){var i;return((i=qt==null?void 0:qt.roster().find(t=>t.peerId===ve))==null?void 0:i.color)??Ut.tokens.defaultBorder}export{Mi as Q,mS as r,eh as s,k_ as t};
