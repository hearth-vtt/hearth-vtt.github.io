(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class hd{constructor({hz:t=60,maxFrame:e=.25,maxSteps:n=5}={}){this.hz=t,this.dt=1/t,this.maxFrame=e,this.maxSteps=n,this.acc=0,this.last=0,this.seeded=!1,this.dropped=0}advance(t){if(!this.seeded)return this.seeded=!0,this.last=t,{steps:0,frameDt:0,alpha:0};const e=Math.min(this.maxFrame,(t-this.last)/1e3);this.last=t,this.acc+=e;let n=Math.floor(this.acc/this.dt);return n>this.maxSteps&&(this.dropped+=n-this.maxSteps,n=this.maxSteps,this.acc=n*this.dt),this.acc-=n*this.dt,{steps:n,frameDt:e,alpha:this.acc/this.dt}}reset(){this.acc=0,this.seeded=!1,this.dropped=0}}function ud(i,t,e){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e}class Vr{constructor(t=1){this.seed(t)}seed(t){let e=t>>>0;const n=()=>{e=e+2654435769>>>0;let s=e;return s=Math.imul(s^s>>>16,569420461),s=Math.imul(s^s>>>15,1935289751),(s^s>>>15)>>>0};return this.s0=n(),this.s1=n(),this.s2=n(),this.s3=n(),this.s0|this.s1|this.s2|this.s3||(this.s0=1),this.count=0,this}next(){const t=(s,r)=>(s<<r|s>>>32-r)>>>0,e=Math.imul(t(Math.imul(this.s1,5)>>>0,7),9)>>>0,n=this.s1<<9>>>0;return this.s2=(this.s2^this.s0)>>>0,this.s3=(this.s3^this.s1)>>>0,this.s1=(this.s1^this.s2)>>>0,this.s0=(this.s0^this.s3)>>>0,this.s2=(this.s2^n)>>>0,this.s3=t(this.s3,11),this.count++,e}float(){return this.next()/4294967296}range(t,e){return t+this.float()*(e-t)}int(t,e){return t+Math.floor(this.float()*(e-t+1))}chance(t){return this.float()<t}pick(t){return t[Math.floor(this.float()*t.length)]}weighted(t){let e=0;for(const[,s]of t)e+=s;if(e<=0)return null;let n=this.float()*e;for(const[s,r]of t)if(n-=r,n<=0)return s;return t[t.length-1][0]}getState(){return{s0:this.s0,s1:this.s1,s2:this.s2,s3:this.s3,count:this.count}}setState(t){return this.s0=t.s0,this.s1=t.s1,this.s2=t.s2,this.s3=t.s3,this.count=t.count??0,this}}function Rl(i,...t){let e=i>>>0;for(const n of t)e=Math.imul(e^n>>>0,625341585)>>>0,e=(e^e>>>13)>>>0;return e>>>0}class dd{constructor(){this.local=[],this.remote=[]}on(t){return this.local.push(t),()=>this.off(this.local,t)}onRemote(t){return this.remote.push(t),()=>this.off(this.remote,t)}off(t,e){const n=t.indexOf(e);n>=0&&t.splice(n,1)}emit(t,e){for(const n of this.local)n(t,e);for(const n of this.remote)n(t,e)}emitLocal(t,e){for(const n of this.local)n(t,e)}emitRemote(t,e){for(const n of this.remote)n(t,e)}clear(){this.local.length=0,this.remote.length=0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="169",fd=0,Cl=1,pd=2,yh=1,md=2,Rn=3,qn=0,ze=1,Cn=2,Wn=0,zi=1,Pl=2,Ll=3,Il=4,gd=5,ci=100,vd=101,_d=102,xd=103,yd=104,Md=200,Sd=201,bd=202,wd=203,Ua=204,Na=205,Ed=206,Td=207,Ad=208,Rd=209,Cd=210,Pd=211,Ld=212,Id=213,Dd=214,ka=0,Fa=1,Oa=2,$i=3,Ba=4,za=5,Ha=6,Ga=7,Mh=0,Ud=1,Nd=2,Xn=0,kd=1,Fd=2,Od=3,Bd=4,zd=5,Hd=6,Gd=7,Sh=300,qi=301,Yi=302,Va=303,Wa=304,Rr=306,Xa=1e3,ui=1001,$a=1002,Je=1003,Vd=1004,Ns=1005,$e=1006,Wr=1007,Ln=1008,Un=1009,bh=1010,wh=1011,ws=1012,Wo=1013,fi=1014,In=1015,As=1016,Xo=1017,$o=1018,ji=1020,Eh=35902,Th=1021,Ah=1022,ln=1023,Rh=1024,Ch=1025,Hi=1026,Ki=1027,Ph=1028,qo=1029,Lh=1030,Yo=1031,jo=1033,ar=33776,or=33777,lr=33778,cr=33779,qa=35840,Ya=35841,ja=35842,Ka=35843,Za=36196,Ja=37492,Qa=37496,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,hr=36492,mo=36494,go=36495,Ih=36283,vo=36284,_o=36285,xo=36286,Wd=3200,Xd=3201,Dh=0,$d=1,Vn="",Fe="srgb",Zn="srgb-linear",Ko="display-p3",Cr="display-p3-linear",gr="linear",ie="srgb",vr="rec709",_r="p3",xi=7680,Dl=519,qd=512,Yd=513,jd=514,Uh=515,Kd=516,Zd=517,Jd=518,Qd=519,Ul=35044,Nl="300 es",Dn=2e3,xr=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,yo=180/Math.PI;function Rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function tf(i,t){return(i%t+t)%t}function $r(i,t,e){return(1-e)*i+e*t}function os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],v=s[0],u=s[3],m=s[6],y=s[1],x=s[4],S=s[7],L=s[2],T=s[5],A=s[8];return r[0]=a*v+o*y+l*L,r[3]=a*u+o*x+l*T,r[6]=a*m+o*S+l*A,r[1]=c*v+h*y+f*L,r[4]=c*u+h*x+f*T,r[7]=c*m+h*S+f*A,r[2]=d*v+p*y+g*L,r[5]=d*u+p*x+g*T,r[8]=d*m+p*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Ht;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ef(){const i=yr("canvas");return i.style.display="block",i}const kl={};function ur(i){i in kl||(kl[i]=!0,console.warn(i))}function nf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Fl=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ol=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[Zn]:{transfer:gr,primaries:vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:ie,primaries:vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Cr]:{transfer:gr,primaries:_r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ol),fromReference:i=>i.applyMatrix3(Fl)},[Ko]:{transfer:ie,primaries:_r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ol),fromReference:i=>i.applyMatrix3(Fl).convertLinearToSRGB()}},af=new Set([Zn,Cr]),Zt={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!af.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ls[t].toReference,s=ls[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ls[i].primaries},getTransfer:function(i){return i===Vn?gr:ls[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ls[t].luminanceCoefficients)}};function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class of{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=yr("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lf=0;class kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jr(s[a].image)):r.push(jr(s[a]))}else r=jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cf=0;class Te extends ts{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=ui,s=ui,r=$e,a=Ln,o=ln,l=Un,c=Te.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Rs(),this.name="",this.source=new kh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xa:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xa:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Sh;Te.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],u=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-u)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+u)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(p+1)/2,L=(m+1)/2,T=(h+d)/4,A=(f+v)/4,P=(g+u)/4;return x>S&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):S>L?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((u-g)*(u-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(u-g)/y,this.y=(f-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hf extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends hf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fh extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uf extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(f!==v||l!==d||c!==p||h!==g){let u=1-o;const m=l*d+c*p+h*g+f*v,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const L=Math.sqrt(x),T=Math.atan2(L,m*y);u=Math.sin(u*T)/L,o=Math.sin(o*T)/L}const S=o*y;if(l=l*u+d*S,c=c*u+p*S,h=h*u+g*S,f=f*u+v*S,u===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*p-c*d,t[e+1]=l*g+h*d+c*f-o*p,t[e+2]=c*g+h*p+o*d-l*f,t[e+3]=h*g-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kr.copy(this).projectOnVector(t),this.sub(Kr)}reflect(t){return this.sub(Kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new N,Bl=new vi;class Cs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Fs.subVectors(this.max,cs),Mi.subVectors(t.a,cs),Si.subVectors(t.b,cs),bi.subVectors(t.c,cs),kn.subVectors(Si,Mi),Fn.subVectors(bi,Si),Qn.subVectors(Mi,bi);let e=[0,-kn.z,kn.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,kn.z,0,-kn.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-kn.y,kn.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!Zr(e,Mi,Si,bi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,Mi,Si,bi,Fs))?!1:(Os.crossVectors(kn,Fn),e=[Os.x,Os.y,Os.z],Zr(e,Mi,Si,bi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new N,new N,new N,new N,new N,new N,new N,new N],nn=new N,ks=new Cs,Mi=new N,Si=new N,bi=new N,kn=new N,Fn=new N,Qn=new N,cs=new N,Fs=new N,Os=new N,ti=new N;function Zr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const df=new Cs,hs=new N,Jr=new N;class Zo{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):df.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(Jr)),this.expandByPoint(hs.copy(t.center).sub(Jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new N,Qr=new N,Bs=new N,On=new N,ta=new N,zs=new N,ea=new N;class ff{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qr.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Qr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Bs),o=On.dot(this.direction),l=-On.dot(Bs),c=On.lengthSq(),h=Math.abs(1-a*a);let f,d,p,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qr).addScaledVector(Bs,d),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),zs.subVectors(n,t),ea.crossVectors(ta,zs);let a=this.direction.dot(ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,t);const l=o*this.direction.dot(zs.crossVectors(On,zs));if(l<0)return null;const c=o*this.direction.dot(ta.cross(On));if(c<0||l+c>a)return null;const h=-o*On.dot(ea);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,a,o,l,c,h,f,d,p,g,v,u){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,p,g,v,u)}set(t,e,n,s,r,a,o,l,c,h,f,d,p,g,v,u){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*f,g=c*h,v=c*f;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*f,g=c*h,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+v,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Bn.crossVectors(n,We),Bn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Bn.crossVectors(n,We)),Bn.normalize(),Hs.crossVectors(We,Bn),s[0]=Bn.x,s[4]=Hs.x,s[8]=We.x,s[1]=Bn.y,s[5]=Hs.y,s[9]=We.y,s[2]=Bn.z,s[6]=Hs.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],v=n[6],u=n[10],m=n[14],y=n[3],x=n[7],S=n[11],L=n[15],T=s[0],A=s[4],P=s[8],H=s[12],_=s[1],w=s[5],O=s[9],G=s[13],q=s[2],nt=s[6],X=s[10],V=s[14],D=s[3],Z=s[7],et=s[11],tt=s[15];return r[0]=a*T+o*_+l*q+c*D,r[4]=a*A+o*w+l*nt+c*Z,r[8]=a*P+o*O+l*X+c*et,r[12]=a*H+o*G+l*V+c*tt,r[1]=h*T+f*_+d*q+p*D,r[5]=h*A+f*w+d*nt+p*Z,r[9]=h*P+f*O+d*X+p*et,r[13]=h*H+f*G+d*V+p*tt,r[2]=g*T+v*_+u*q+m*D,r[6]=g*A+v*w+u*nt+m*Z,r[10]=g*P+v*O+u*X+m*et,r[14]=g*H+v*G+u*V+m*tt,r[3]=y*T+x*_+S*q+L*D,r[7]=y*A+x*w+S*nt+L*Z,r[11]=y*P+x*O+S*X+L*et,r[15]=y*H+x*G+S*V+L*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],p=t[14],g=t[3],v=t[7],u=t[11],m=t[15];return g*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+u*(+e*c*f-e*o*p-r*a*f+n*a*p+r*o*h-n*c*h)+m*(-s*o*h-e*l*f+e*o*d+s*a*f-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],g=t[12],v=t[13],u=t[14],m=t[15],y=f*u*c-v*d*c+v*l*p-o*u*p-f*l*m+o*d*m,x=g*d*c-h*u*c-g*l*p+a*u*p+h*l*m-a*d*m,S=h*v*c-g*f*c+g*o*p-a*v*p-h*o*m+a*f*m,L=g*f*l-h*v*l-g*o*d+a*v*d+h*o*u-a*f*u,T=e*y+n*x+s*S+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(v*d*r-f*u*r-v*s*p+n*u*p+f*s*m-n*d*m)*A,t[2]=(o*u*r-v*l*r+v*s*c-n*u*c-o*s*m+n*l*m)*A,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=x*A,t[5]=(h*u*r-g*d*r+g*s*p-e*u*p-h*s*m+e*d*m)*A,t[6]=(g*l*r-a*u*r-g*s*c+e*u*c+a*s*m-e*l*m)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=S*A,t[9]=(g*f*r-h*v*r-g*n*p+e*v*p+h*n*m-e*f*m)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*p-e*o*p)*A,t[12]=L*A,t[13]=(h*v*s-g*f*s+g*n*d-e*v*d-h*n*u+e*f*u)*A,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*u-e*o*u)*A,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,g=r*f,v=a*h,u=a*f,m=o*f,y=l*c,x=l*h,S=l*f,L=n.x,T=n.y,A=n.z;return s[0]=(1-(v+m))*L,s[1]=(p+S)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(d+m))*T,s[6]=(u+y)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(u-y)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const c=1/r,h=1/a,f=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Dn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===Dn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*c,p=(n+s)*h;let g,v;if(o===Dn)g=(a+r)*f,v=-2*f;else if(o===xr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new N,sn=new ce,pf=new N(0,0,0),mf=new N(1,1,1),Bn=new N,Hs=new N,We=new N,zl=new ce,Hl=new vi;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gf=0;const Gl=new N,Ei=new vi,bn=new ce,Gs=new N,us=new N,vf=new N,_f=new vi,Vl=new N(1,0,0),Wl=new N(0,1,0),Xl=new N(0,0,1),$l={type:"added"},xf={type:"removed"},Ti={type:"childadded",child:null},na={type:"childremoved",child:null};class Ae extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new N,e=new gn,n=new vi,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ht}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(us,Gs,this.up):bn.lookAt(Gs,us,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(bn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xf),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,_f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new N(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new N,wn=new N,ia=new N,En=new N,Ai=new N,Ri=new N,ql=new N,sa=new N,ra=new N,aa=new N,oa=new le,la=new le,ca=new le;class on{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),wn.subVectors(n,e),ia.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(wn),l=rn.dot(ia),c=wn.dot(wn),h=wn.dot(ia),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oa,r.x),a.addScaledVector(la,r.y),a.addScaledVector(ca,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),wn.subVectors(t,e),rn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ai.subVectors(s,n),Ri.subVectors(r,n),sa.subVectors(t,n);const l=Ai.dot(sa),c=Ri.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);const h=Ai.dot(ra),f=Ri.dot(ra);if(h>=0&&f<=h)return e.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ai,a);aa.subVectors(t,r);const p=Ai.dot(aa),g=Ri.dot(aa);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ri,o);const u=h*g-p*f;if(u<=0&&f-h>=0&&p-g>=0)return ql.subVectors(r,s),o=(f-h)/(f-h+(p-g)),e.copy(s).addScaledVector(ql,o);const m=1/(u+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=tf(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ha(a,r,t+1/3),this.g=ha(a,r,t),this.b=ha(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Be(Ce.r*255,0,255))*65536+Math.round(Be(Ce.g*255,0,255))*256+Math.round(Be(Ce.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Fe){Zt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Vs);const n=$r(zn.h,Vs.h,e),s=$r(zn.s,Vs.s,e),r=$r(zn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Vt;Vt.NAMES=Bh;let yf=0;class Ps extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=zi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mi extends Ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new N,Ws=new Bt;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}}class zh extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hh extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class He extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mf=0;const Ke=new ce,ua=new Ae,Ci=new N,Xe=new Cs,ds=new Cs,Me=new N;class xn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Hh:zh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Xe.min,ds.min),Xe.expandByPoint(Me),Me.addVectors(Xe.max,ds.max),Xe.expandByPoint(Me)):(Xe.expandByPoint(ds.min),Xe.expandByPoint(ds.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(t,c),Me.add(Ci)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new N,l[P]=new N;const c=new N,h=new N,f=new N,d=new Bt,p=new Bt,g=new Bt,v=new N,u=new N;function m(P,H,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,H),f.fromBufferAttribute(n,_),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,H),g.fromBufferAttribute(r,_),h.sub(c),f.sub(c),p.sub(d),g.sub(d);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(w),u.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),o[P].add(v),o[H].add(v),o[_].add(v),l[P].add(u),l[H].add(u),l[_].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,H=y.length;P<H;++P){const _=y[P],w=_.start,O=_.count;for(let G=w,q=w+O;G<q;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const x=new N,S=new N,L=new N,T=new N;function A(P){L.fromBufferAttribute(s,P),T.copy(L);const H=o[P];x.copy(H),x.sub(L.multiplyScalar(L.dot(H))).normalize(),S.crossVectors(T,H);const w=S.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,H=y.length;P<H;++P){const _=y[P],w=_.start,O=_.count;for(let G=w,q=w+O;G<q;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),u=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,u),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,u),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,u=l.length;v<u;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new pn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new ce,ei=new ff,Xs=new Zo,jl=new N,$s=new N,qs=new N,Ys=new N,da=new N,js=new N,Kl=new N,Ks=new N;class be extends Ae{constructor(t=new xn,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(da.fromBufferAttribute(f,t),a?js.addScaledVector(da,h):js.addScaledVector(da.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Xs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Xs,jl)===null||ei.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const u=d[g],m=a[u.materialIndex],y=Math.max(u.start,p.start),x=Math.min(o.count,Math.min(u.start+u.count,p.start+p.count));for(let S=y,L=x;S<L;S+=3){const T=o.getX(S),A=o.getX(S+1),P=o.getX(S+2);s=Zs(this,m,t,n,c,h,f,T,A,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let u=g,m=v;u<m;u+=3){const y=o.getX(u),x=o.getX(u+1),S=o.getX(u+2);s=Zs(this,a,t,n,c,h,f,y,x,S),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const u=d[g],m=a[u.materialIndex],y=Math.max(u.start,p.start),x=Math.min(l.count,Math.min(u.start+u.count,p.start+p.count));for(let S=y,L=x;S<L;S+=3){const T=S,A=S+1,P=S+2;s=Zs(this,m,t,n,c,h,f,T,A,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let u=g,m=v;u<m;u+=3){const y=u,x=u+1,S=u+2;s=Zs(this,a,t,n,c,h,f,y,x,S),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function Sf(i,t,e,n,s,r,a,o){let l;if(t.side===ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===qn,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:i}}function Zs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$s),i.getVertexPosition(l,qs),i.getVertexPosition(c,Ys);const h=Sf(i,t,e,n,$s,qs,Ys,Kl);if(h){const f=new N;on.getBarycoord(Kl,$s,qs,Ys,f),s&&(h.uv=on.getInterpolatedAttribute(s,o,l,c,f,new Bt)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,l,c,f,new Bt)),a&&(h.normal=on.getInterpolatedAttribute(a,o,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};on.getNormal($s,qs,Ys,d.normal),h.face=d,h.barycoord=f}return h}class es extends xn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(f,2));function g(v,u,m,y,x,S,L,T,A,P,H){const _=S/A,w=L/P,O=S/2,G=L/2,q=T/2,nt=A+1,X=P+1;let V=0,D=0;const Z=new N;for(let et=0;et<X;et++){const tt=et*w-G;for(let pt=0;pt<nt;pt++){const yt=pt*_-O;Z[v]=yt*y,Z[u]=tt*x,Z[m]=q,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[u]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(pt/A),f.push(1-et/P),V+=1}}for(let et=0;et<P;et++)for(let tt=0;tt<A;tt++){const pt=d+tt+nt*et,yt=d+tt+nt*(et+1),W=d+(tt+1)+nt*(et+1),J=d+(tt+1)+nt*et;l.push(pt,yt,J),l.push(yt,W,J),D+=6}o.addGroup(p,D,H),p+=D,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function bf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const wf={clone:Zi,merge:Le};var Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vh extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new N,Zl=new Bt,Jl=new Bt;class Ze extends Vh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,Jl),e.subVectors(Jl,Zl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class Af extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Pi,Li,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Pi,Li,t,e);r.layers=this.layers,this.add(r);const a=new Ze(Pi,Li,t,e);a.layers=this.layers,this.add(a);const o=new Ze(Pi,Li,t,e);o.layers=this.layers,this.add(o);const l=new Ze(Pi,Li,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Pi,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wh extends Te{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rf extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new es(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Wn});r.uniforms.tEquirect.value=e;const a=new be(s,r),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=$e),new Af(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const fa=new N,Cf=new N,Pf=new Ht;class oi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fa.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pf.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Zo,Js=new N;class Jo{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],p=s[8],g=s[9],v=s[10],u=s[11],m=s[12],y=s[13],x=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,u-p,S-m).normalize(),n[1].setComponents(l+r,d+c,u+p,S+m).normalize(),n[2].setComponents(l+a,d+h,u+g,S+y).normalize(),n[3].setComponents(l-a,d-h,u-g,S-y).normalize(),n[4].setComponents(l-o,d-f,u-v,S-x).normalize(),e===Dn)n[5].setComponents(l+o,d+f,u+v,S+x).normalize();else if(e===xr)n[5].setComponents(o,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class vn extends xn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,p=[],g=[],v=[],u=[];for(let m=0;m<h;m++){const y=m*d-a;for(let x=0;x<c;x++){const S=x*f-r;g.push(S,-y,0),v.push(0,0,1),u.push(x/o),u.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,S=y+c*(m+1),L=y+1+c*(m+1),T=y+1+c*m;p.push(x,S,T),p.push(S,L,T)}this.setIndex(p),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.widthSegments,t.heightSegments)}}var If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
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
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
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
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ep=`#define PI 3.141592653589793
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
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ip=`vec3 transformedNormal = objectNormal;
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
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`
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
}`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
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
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Pp=`struct PhysicalMaterial {
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
}`,Lp=`
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gm=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,$m=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Km=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define PHONG
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
}`,tg=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,ng=`#define STANDARD
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
}`,ig=`#define TOON
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
}`,sg=`#define TOON
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
}`,rg=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 color;
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
}`,cg=`uniform float rotation;
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
}`,hg=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:If,alphahash_pars_fragment:Df,alphamap_fragment:Uf,alphamap_pars_fragment:Nf,alphatest_fragment:kf,alphatest_pars_fragment:Ff,aomap_fragment:Of,aomap_pars_fragment:Bf,batching_pars_vertex:zf,batching_vertex:Hf,begin_vertex:Gf,beginnormal_vertex:Vf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:$f,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Kf,color_fragment:Zf,color_pars_fragment:Jf,color_pars_vertex:Qf,color_vertex:tp,common:ep,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:sp,displacementmap_vertex:rp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:hp,envmap_common_pars_fragment:up,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:wp,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:vp,fog_pars_fragment:_p,gradientmap_pars_fragment:xp,lightmap_pars_fragment:yp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:Sp,lights_pars_begin:bp,lights_toon_fragment:Ep,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ap,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Ip,lights_fragment_end:Dp,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:Vp,morphinstance_vertex:Wp,morphcolor_vertex:Xp,morphnormal_vertex:$p,morphtarget_pars_vertex:qp,morphtarget_vertex:Yp,normal_fragment_begin:jp,normal_fragment_maps:Kp,normal_pars_fragment:Zp,normal_pars_vertex:Jp,normal_vertex:Qp,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:sm,opaque_fragment:rm,packing:am,premultiplied_alpha_fragment:om,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:hm,roughnessmap_fragment:um,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:vm,skinning_pars_vertex:_m,skinning_vertex:xm,skinnormal_vertex:ym,specularmap_fragment:Mm,specularmap_pars_fragment:Sm,tonemapping_fragment:bm,tonemapping_pars_fragment:wm,transmission_fragment:Em,transmission_pars_fragment:Tm,uv_pars_fragment:Am,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Pm,background_vert:Lm,background_frag:Im,backgroundCube_vert:Dm,backgroundCube_frag:Um,cube_vert:Nm,cube_frag:km,depth_vert:Fm,depth_frag:Om,distanceRGBA_vert:Bm,distanceRGBA_frag:zm,equirect_vert:Hm,equirect_frag:Gm,linedashed_vert:Vm,linedashed_frag:Wm,meshbasic_vert:Xm,meshbasic_frag:$m,meshlambert_vert:qm,meshlambert_frag:Ym,meshmatcap_vert:jm,meshmatcap_frag:Km,meshnormal_vert:Zm,meshnormal_frag:Jm,meshphong_vert:Qm,meshphong_frag:tg,meshphysical_vert:eg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:sg,points_vert:rg,points_frag:ag,shadow_vert:og,shadow_frag:lg,sprite_vert:cg,sprite_frag:hg},ht={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},dn={basic:{uniforms:Le([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Le([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Le([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Le([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Le([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Le([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Le([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Le([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Le([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Le([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Le([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Le([ht.common,ht.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Le([ht.lights,ht.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};dn.physical={uniforms:Le([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Qs={r:0,b:0,g:0},ii=new gn,ug=new ce;function dg(i,t,e,n,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,h,f=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const S=g(y);S===null?m(o,l):S&&S.isColor&&(m(S,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(y,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Rr)?(h===void 0&&(h=new be(new es(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Zi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(x.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(ii)),h.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ie,(f!==S||d!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new be(new vn(2,2),new hn({name:"BackgroundMaterial",uniforms:Zi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ie,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Qs,Gh(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:u}}function fg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,w,O,G,q){let nt=!1;const X=f(G,O,w);r!==X&&(r=X,c(r.object)),nt=p(_,G,O,q),nt&&g(_,G,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,S(_,w,O,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,w,O){const G=O.wireframe===!0;let q=n[_.id];q===void 0&&(q={},n[_.id]=q);let nt=q[w.id];nt===void 0&&(nt={},q[w.id]=nt);let X=nt[G];return X===void 0&&(X=d(l()),nt[G]=X),X}function d(_){const w=[],O=[],G=[];for(let q=0;q<e;q++)w[q]=0,O[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:G,object:_,attributes:{},index:null}}function p(_,w,O,G){const q=r.attributes,nt=w.attributes;let X=0;const V=O.getAttributes();for(const D in V)if(V[D].location>=0){const et=q[D];let tt=nt[D];if(tt===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor)),et===void 0||et.attribute!==tt||tt&&et.data!==tt.data)return!0;X++}return r.attributesNum!==X||r.index!==G}function g(_,w,O,G){const q={},nt=w.attributes;let X=0;const V=O.getAttributes();for(const D in V)if(V[D].location>=0){let et=nt[D];et===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(et=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(et=_.instanceColor));const tt={};tt.attribute=et,et&&et.data&&(tt.data=et.data),q[D]=tt,X++}r.attributes=q,r.attributesNum=X,r.index=G}function v(){const _=r.newAttributes;for(let w=0,O=_.length;w<O;w++)_[w]=0}function u(_){m(_,0)}function m(_,w){const O=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;O[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),q[_]!==w&&(i.vertexAttribDivisor(_,w),q[_]=w)}function y(){const _=r.newAttributes,w=r.enabledAttributes;for(let O=0,G=w.length;O<G;O++)w[O]!==_[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function x(_,w,O,G,q,nt,X){X===!0?i.vertexAttribIPointer(_,w,O,q,nt):i.vertexAttribPointer(_,w,O,G,q,nt)}function S(_,w,O,G){v();const q=G.attributes,nt=O.getAttributes(),X=w.defaultAttributeValues;for(const V in nt){const D=nt[V];if(D.location>=0){let Z=q[V];if(Z===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){const et=Z.normalized,tt=Z.itemSize,pt=t.get(Z);if(pt===void 0)continue;const yt=pt.buffer,W=pt.type,J=pt.bytesPerElement,ct=W===i.INT||W===i.UNSIGNED_INT||Z.gpuType===Wo;if(Z.isInterleavedBufferAttribute){const at=Z.data,ot=at.stride,lt=Z.offset;if(at.isInstancedInterleavedBuffer){for(let St=0;St<D.locationSize;St++)m(D.location+St,at.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let St=0;St<D.locationSize;St++)u(D.location+St);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let St=0;St<D.locationSize;St++)x(D.location+St,tt/D.locationSize,W,et,ot*J,(lt+tt/D.locationSize*St)*J,ct)}else{if(Z.isInstancedBufferAttribute){for(let at=0;at<D.locationSize;at++)m(D.location+at,Z.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let at=0;at<D.locationSize;at++)u(D.location+at);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let at=0;at<D.locationSize;at++)x(D.location+at,tt/D.locationSize,W,et,tt*J,tt/D.locationSize*at*J,ct)}}else if(X!==void 0){const et=X[V];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(D.location,et);break;case 3:i.vertexAttrib3fv(D.location,et);break;case 4:i.vertexAttrib4fv(D.location,et);break;default:i.vertexAttrib1fv(D.location,et)}}}}y()}function L(){P();for(const _ in n){const w=n[_];for(const O in w){const G=w[O];for(const q in G)h(G[q].object),delete G[q];delete w[O]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const O in w){const G=w[O];for(const q in G)h(G[q].object),delete G[q];delete w[O]}delete n[_.id]}function A(_){for(const w in n){const O=n[w];if(O[_.id]===void 0)continue;const G=O[_.id];for(const q in G)h(G[q].object),delete G[q];delete O[_.id]}}function P(){H(),a=!0,r!==s&&(r=s,c(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:u,disableUnusedAttributes:y}}function pg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function l(c,h,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===As&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:u,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:L,maxSamples:T}}function gg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new oi,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,u=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!u)r?h(null):c();else{const y=r?0:n,x=y*4;let S=m.clippingState||null;l.value=S,S=h(g,d,x,p);for(let L=0;L!==x;++L)S[L]=e[L];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,p,g){const v=f!==null?f.length:0;let u=null;if(v!==0){if(u=l.value,g!==!0||u===null){const m=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(u===null||u.length<m)&&(u=new Float32Array(m));for(let x=0,S=p;x!==v;++x,S+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(u,S),u[S+3]=a.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,u}}function vg(i){let t=new WeakMap;function e(a,o){return o===Va?a.mapping=qi:o===Wa&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Va||o===Wa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qo extends Vh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Oi=4,Ql=[.125,.215,.35,.446,.526,.582],hi=20,pa=new Qo,tc=new Vt;let ma=null,ga=0,va=0,_a=!1;const li=(1+Math.sqrt(5))/2,Ii=1/li,ec=[new N(-li,Ii,0),new N(li,Ii,0),new N(-Ii,0,li),new N(Ii,0,li),new N(0,li,-Ii),new N(0,li,Ii),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,va),this._renderer.xr.enabled=_a,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:As,format:ln,colorSpace:Zn,depthBuffer:!1},s=ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(r)),this._blurMaterial=xg(r,t,e)}return s}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){const o=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(tc),h.toneMapping=Xn,h.autoClear=!1;const p=new mi({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new be(new es,p);let v=!1;const u=t.background;u?u.isColor&&(p.color.copy(u),t.background=null,v=!0):(p.color.copy(tc),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;tr(s,y*x,m>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ec[(s-r-1)%ec.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new be(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hi-1),v=r/g,u=isFinite(r)?1+Math.floor(h*v):hi;u>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${hi}`);const m=[];let y=0;for(let A=0;A<hi;++A){const P=A/v,H=Math.exp(-P*P/2);m.push(H),A===0?y+=H:A<u&&(y+=2*H)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;d.envMap.value=t.texture,d.samples.value=u,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[s],L=3*S*(s>x-Oi?s-x+Oi:0),T=4*(this._cubeSize-S);tr(e,L,T,3*S,2*S),l.setRenderTarget(e),l.render(f,pa)}}function _g(i){const t=[],e=[],n=[];let s=i;const r=i-Oi+1+Ql.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Oi?l=Ql[a-i+Oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,u=2,m=1,y=new Float32Array(v*g*p),x=new Float32Array(u*g*p),S=new Float32Array(m*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,H=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(H,v*g*T),x.set(d,u*g*T);const _=[T,T,T,T,T,T];S.set(_,m*g*T)}const L=new xn;L.setAttribute("position",new pn(y,v)),L.setAttribute("uv",new pn(x,u)),L.setAttribute("faceIndex",new pn(S,m)),t.push(L),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ic(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xg(i,t,e){const n=new Float32Array(hi),s=new N(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function sc(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function rc(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function yg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Va||l===Wa,h=l===qi||l===Yi;if(c||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new nc(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new nc(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Mg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let u=0,m=v.length;u<m;u++)t.remove(v[u])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let u=0,m=v.length;u<m;u++)t.update(v[u],i.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let x=0,S=y.length;x<S;x+=3){const L=y[x+0],T=y[x+1],A=y[x+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const L=x+0,T=x+1,A=x+2;d.push(L,T,T,A,A,L)}}else return;const u=new(Nh(d)?Hh:zh)(d,1);u.version=v;const m=r.get(f);m&&t.remove(m),r.set(f,u)}function h(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function bg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let u=0;for(let m=0;m<g;m++)u+=p[m];e.update(u,n,1)}function f(d,p,g,v){if(g===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],v[m]);else{u.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y];for(let y=0;y<v.length;y++)e.update(m,n,v[y])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function wg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Eg(i,t,e){const n=new WeakMap,s=new le;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let H=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let S=o.attributes.position.count*x,L=1;S>t.maxTextureSize&&(L=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*L*4*f),A=new Fh(T,S,L,f);A.type=In,A.needsUpdate=!0;const P=x*4;for(let _=0;_<f;_++){const w=u[_],O=m[_],G=y[_],q=S*L*4*_;for(let nt=0;nt<w.count;nt++){const X=nt*P;p===!0&&(s.fromBufferAttribute(w,nt),T[q+X+0]=s.x,T[q+X+1]=s.y,T[q+X+2]=s.z,T[q+X+3]=0),g===!0&&(s.fromBufferAttribute(O,nt),T[q+X+4]=s.x,T[q+X+5]=s.y,T[q+X+6]=s.z,T[q+X+7]=0),v===!0&&(s.fromBufferAttribute(G,nt),T[q+X+8]=s.x,T[q+X+9]=s.y,T[q+X+10]=s.z,T[q+X+11]=G.itemSize===4?s.w:1)}}d={count:f,texture:A,size:new Bt(S,L)},n.set(o,d),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Tg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class $h extends Te{constructor(t,e,n,s,r,a,o,l,c,h=Hi){if(h!==Hi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=fi),n===void 0&&h===Ki&&(n=ji),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qh=new Te,ac=new $h(1,1),Yh=new Fh,jh=new uf,Kh=new Wh,oc=[],lc=[],cc=new Float32Array(16),hc=new Float32Array(9),uc=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=oc[s];if(r===void 0&&(r=new Float32Array(s),oc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pr(i,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;uc.set(n),i.uniformMatrix2fv(this.addr,!1,uc),ye(e,n)}}function Ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),ye(e,n)}}function Dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;cc.set(n),i.uniformMatrix4fv(this.addr,!1,cc),ye(e,n)}}function Ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=Uh,r=ac):r=qh,e.setTexture2D(t||r,s)}function Vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jh,s)}function Wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kh,s)}function Xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yh,s)}function $g(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Ig;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return kg;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return Bg;case 36295:return zg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function qg(i,t){i.uniform1fv(this.addr,t)}function Yg(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Kg(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Zg(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jg(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qg(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function t0(i,t){i.uniform1iv(this.addr,t)}function e0(i,t){i.uniform2iv(this.addr,t)}function n0(i,t){i.uniform3iv(this.addr,t)}function i0(i,t){i.uniform4iv(this.addr,t)}function s0(i,t){i.uniform1uiv(this.addr,t)}function r0(i,t){i.uniform2uiv(this.addr,t)}function a0(i,t){i.uniform3uiv(this.addr,t)}function o0(i,t){i.uniform4uiv(this.addr,t)}function l0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qh,r[a])}function c0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jh,r[a])}function h0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Kh,r[a])}function u0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yh,r[a])}function d0(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return jg;case 35666:return Kg;case 35674:return Zg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}class f0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}}class p0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}}class m0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function dc(i,t){i.seq.push(t),i.map[t.id]=t}function g0(i,t,e){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dc(e,c===void 0?new f0(o,i,t):new p0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new m0(o),dc(e,f)),e=f}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);g0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function fc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const v0=37297;let _0=0;function x0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function y0(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===_r&&e===vr?n="LinearDisplayP3ToLinearSRGB":t===vr&&e===_r&&(n="LinearSRGBToLinearDisplayP3"),i){case Zn:case Cr:return[n,"LinearTransferOETF"];case Fe:case Ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+x0(i.getShaderSource(t),a)}else return s}function M0(i,t){const e=y0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function S0(i,t){let e;switch(t){case kd:e="Linear";break;case Fd:e="Reinhard";break;case Od:e="Cineon";break;case Bd:e="ACESFilmic";break;case Hd:e="AgX";break;case Gd:e="Neutral";break;case zd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new N;function b0(){Zt.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function E0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vs(i){return i!==""}function mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(i){return i.replace(A0,C0)}const R0=new Map;function C0(i,t){let e=zt[t];if(e===void 0){const n=R0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mo(e)}const P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(P0,L0)}function L0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _c(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function I0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===md?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function D0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function N0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ud:t="ENVMAP_BLENDING_MIX";break;case Nd:t="ENVMAP_BLENDING_ADD";break}return t}function k0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function F0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=I0(e),c=D0(e),h=U0(e),f=N0(e),d=k0(e),p=w0(e),g=E0(r),v=s.createProgram();let u,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),u.length>0&&(u+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),m.length>0&&(m+=`
`)):(u=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),m=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?S0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,M0("linearToOutputTexel",e.outputColorSpace),b0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=Mo(a),a=mc(a,e),a=gc(a,e),o=Mo(o),o=mc(o,e),o=gc(o,e),a=vc(a),o=vc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,u=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+u+a,S=y+m+o,L=fc(s,s.VERTEX_SHADER,x),T=fc(s,s.FRAGMENT_SHADER,S);s.attachShader(v,L),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(w){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(L).trim(),q=s.getShaderInfoLog(T).trim();let nt=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,T);else{const V=pc(s,L,"vertex"),D=pc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+V+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(G===""||q==="")&&(X=!1);X&&(w.diagnostics={runnable:nt,programLog:O,vertexShader:{log:G,prefix:u},fragmentShader:{log:q,prefix:m}})}s.deleteShader(L),s.deleteShader(T),P=new dr(s,v),H=T0(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let H;this.getAttributes=function(){return H===void 0&&A(this),H};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,v0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=T,this}let O0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new z0(t),e.set(t,n)),n}}class z0{constructor(t){this.id=O0++,this.code=t,this.usedTimes=0}}function H0(i,t,e,n,s,r,a){const o=new Oh,l=new B0,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,w,O,G,q){const nt=G.fog,X=q.geometry,V=_.isMeshStandardMaterial?G.environment:null,D=(_.isMeshStandardMaterial?e:t).get(_.envMap||V),Z=D&&D.mapping===Rr?D.image.height:null,et=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=tt!==void 0?tt.length:0;let yt=0;X.morphAttributes.position!==void 0&&(yt=1),X.morphAttributes.normal!==void 0&&(yt=2),X.morphAttributes.color!==void 0&&(yt=3);let W,J,ct,at;if(et){const Ne=dn[et];W=Ne.vertexShader,J=Ne.fragmentShader}else W=_.vertexShader,J=_.fragmentShader,l.update(_),ct=l.getVertexShaderID(_),at=l.getFragmentShaderID(_);const ot=i.getRenderTarget(),lt=q.isInstancedMesh===!0,St=q.isBatchedMesh===!0,Ct=!!_.map,Nt=!!_.matcap,C=!!D,re=!!_.aoMap,Ft=!!_.lightMap,Gt=!!_.bumpMap,Rt=!!_.normalMap,ee=!!_.displacementMap,kt=!!_.emissiveMap,R=!!_.metalnessMap,M=!!_.roughnessMap,F=_.anisotropy>0,K=_.clearcoat>0,it=_.dispersion>0,j=_.iridescence>0,Et=_.sheen>0,ut=_.transmission>0,vt=F&&!!_.anisotropyMap,$t=K&&!!_.clearcoatMap,st=K&&!!_.clearcoatNormalMap,_t=K&&!!_.clearcoatRoughnessMap,Dt=j&&!!_.iridescenceMap,Ut=j&&!!_.iridescenceThicknessMap,xt=Et&&!!_.sheenColorMap,Wt=Et&&!!_.sheenRoughnessMap,Ot=!!_.specularMap,te=!!_.specularColorMap,I=!!_.specularIntensityMap,mt=ut&&!!_.transmissionMap,Y=ut&&!!_.thicknessMap,Q=!!_.gradientMap,dt=!!_.alphaMap,gt=_.alphaTest>0,Xt=!!_.alphaHash,fe=!!_.extensions;let Ue=Xn;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const Yt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:J,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:St,batchingColor:St&&q._colorsTexture!==null,instancing:lt,instancingColor:lt&&q.instanceColor!==null,instancingMorph:lt&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Zn,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:Nt,envMap:C,envMapMode:C&&D.mapping,envMapCubeUVHeight:Z,aoMap:re,lightMap:Ft,bumpMap:Gt,normalMap:Rt,displacementMap:p&&ee,emissiveMap:kt,normalMapObjectSpace:Rt&&_.normalMapType===$d,normalMapTangentSpace:Rt&&_.normalMapType===Dh,metalnessMap:R,roughnessMap:M,anisotropy:F,anisotropyMap:vt,clearcoat:K,clearcoatMap:$t,clearcoatNormalMap:st,clearcoatRoughnessMap:_t,dispersion:it,iridescence:j,iridescenceMap:Dt,iridescenceThicknessMap:Ut,sheen:Et,sheenColorMap:xt,sheenRoughnessMap:Wt,specularMap:Ot,specularColorMap:te,specularIntensityMap:I,transmission:ut,transmissionMap:mt,thicknessMap:Y,gradientMap:Q,opaque:_.transparent===!1&&_.blending===zi&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:gt,alphaHash:Xt,combine:_.combine,mapUv:Ct&&u(_.map.channel),aoMapUv:re&&u(_.aoMap.channel),lightMapUv:Ft&&u(_.lightMap.channel),bumpMapUv:Gt&&u(_.bumpMap.channel),normalMapUv:Rt&&u(_.normalMap.channel),displacementMapUv:ee&&u(_.displacementMap.channel),emissiveMapUv:kt&&u(_.emissiveMap.channel),metalnessMapUv:R&&u(_.metalnessMap.channel),roughnessMapUv:M&&u(_.roughnessMap.channel),anisotropyMapUv:vt&&u(_.anisotropyMap.channel),clearcoatMapUv:$t&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&u(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&u(_.sheenRoughnessMap.channel),specularMapUv:Ot&&u(_.specularMap.channel),specularColorMapUv:te&&u(_.specularColorMap.channel),specularIntensityMapUv:I&&u(_.specularIntensityMap.channel),transmissionMapUv:mt&&u(_.transmissionMap.channel),thicknessMapUv:Y&&u(_.thicknessMap.channel),alphaMapUv:dt&&u(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Rt||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(Ct||dt),fog:!!nt,useFog:_.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:yt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:fe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&_.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function y(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)w.push(O),w.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(x(w,_),S(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){const w=v[_.type];let O;if(w){const G=dn[w];O=wf.clone(G.uniforms)}else O=_.uniforms;return O}function T(_,w){let O;for(let G=0,q=h.length;G<q;G++){const nt=h[G];if(nt.cacheKey===w){O=nt,++O.usedTimes;break}}return O===void 0&&(O=new F0(i,w,_,r),h.push(O)),O}function A(_){if(--_.usedTimes===0){const w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function P(_){l.remove(_)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:L,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:H}}function G0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,p,g,v,u){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:u},i[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=u),t++,m}function o(f,d,p,g,v,u){const m=a(f,d,p,g,v,u);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(f,d,p,g,v,u){const m=a(f,d,p,g,v,u);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,d){e.length>1&&e.sort(f||V0),n.length>1&&n.sort(d||xc),s.length>1&&s.sort(d||xc)}function h(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function W0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new yc,i.set(n,[a])):s>=r.length?(a=new yc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function X0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Vt};break;case"SpotLight":e={position:new N,direction:new N,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function $0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let q0=0;function Y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function j0(i){const t=new X0,e=$0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ce,a=new ce;function o(c){let h=0,f=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,g=0,v=0,u=0,m=0,y=0,x=0,S=0,L=0,T=0,A=0;c.sort(Y0);for(let H=0,_=c.length;H<_;H++){const w=c[H],O=w.color,G=w.intensity,q=w.distance,nt=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*G,f+=O.g*G,d+=O.b*G;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],G);A++}else if(w.isDirectionalLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const V=w.shadow,D=e.get(w);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=w.shadow.matrix,y++}n.directional[p]=X,p++}else if(w.isSpotLight){const X=t.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(O).multiplyScalar(G),X.distance=q,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[v]=X;const V=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,V.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[v]=V.matrix,w.castShadow){const D=e.get(w);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.spotShadow[v]=D,n.spotShadowMap[v]=nt,S++}v++}else if(w.isRectAreaLight){const X=t.get(w);X.color.copy(O).multiplyScalar(G),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[u]=X,u++}else if(w.isPointLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const V=w.shadow,D=e.get(w);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,D.shadowCameraNear=V.camera.near,D.shadowCameraFar=V.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=X,g++}else if(w.isHemisphereLight){const X=t.get(w);X.skyColor.copy(w.color).multiplyScalar(G),X.groundColor.copy(w.groundColor).multiplyScalar(G),n.hemi[m]=X,m++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==u||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=u,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=u,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=L,P.numLightProbes=A,n.version=q0++)}function l(c,h){let f=0,d=0,p=0,g=0,v=0;const u=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),f++}else if(x.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),p++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),a.identity(),r.copy(x.matrixWorld),r.premultiply(u),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),d++}else if(x.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(u),v++}}}return{setup:o,setupView:l,state:n}}function Mc(i){const t=new j0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function K0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Mc(i),t.set(s,[o])):r>=a.length?(o=new Mc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Z0 extends Ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class J0 extends Ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
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
}`;function ev(i,t,e){let n=new Jo;const s=new Bt,r=new Bt,a=new le,o=new Z0({depthPacking:Xd}),l=new J0,c={},h=e.maxTextureSize,f={[qn]:ze,[ze]:qn,[Cn]:Cn},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Q0,fragmentShader:tv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new be(g,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let m=this.type;this.render=function(T,A,P){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||T.length===0)return;const H=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Wn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=m!==Rn&&this.type===Rn,q=m===Rn&&this.type!==Rn;for(let nt=0,X=T.length;nt<X;nt++){const V=T[nt],D=V.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const Z=D.getFrameExtents();if(s.multiply(Z),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,D.mapSize.y=r.y)),D.map===null||G===!0||q===!0){const tt=this.type!==Rn?{minFilter:Je,magFilter:Je}:{};D.map!==null&&D.map.dispose(),D.map=new pi(s.x,s.y,tt),D.map.texture.name=V.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const et=D.getViewportCount();for(let tt=0;tt<et;tt++){const pt=D.getViewport(tt);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),O.viewport(a),D.updateMatrices(V,tt),n=D.getFrustum(),S(A,P,D.camera,V,this.type)}D.isPointLightShadow!==!0&&this.type===Rn&&y(D,P),D.needsUpdate=!1}m=this.type,u.needsUpdate=!1,i.setRenderTarget(H,_,w)};function y(T,A){const P=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,p,v,null)}function x(T,A,P,H){let _=null;const w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=_.uuid,G=A.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let nt=q[G];nt===void 0&&(nt=_.clone(),q[G]=nt,A.addEventListener("dispose",L)),_=nt}if(_.visible=A.visible,_.wireframe=A.wireframe,H===Rn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:f[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=i.properties.get(_);O.light=P}return _}function S(T,A,P,H,_){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Rn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const G=t.update(T),q=T.material;if(Array.isArray(q)){const nt=G.groups;for(let X=0,V=nt.length;X<V;X++){const D=nt[X],Z=q[D.materialIndex];if(Z&&Z.visible){const et=x(T,Z,H,_);T.onBeforeShadow(i,T,A,P,G,et,D),i.renderBufferDirect(P,null,G,et,T,D),T.onAfterShadow(i,T,A,P,G,et,D)}}}else if(q.visible){const nt=x(T,q,H,_);T.onBeforeShadow(i,T,A,P,G,nt,null),i.renderBufferDirect(P,null,G,nt,T,null),T.onAfterShadow(i,T,A,P,G,nt,null)}}const O=T.children;for(let G=0,q=O.length;G<q;G++)S(O[G],A,P,H,_)}function L(T){T.target.removeEventListener("dispose",L);for(const P in c){const H=c[P],_=T.target.uuid;_ in H&&(H[_].dispose(),delete H[_])}}}const nv={[ka]:Fa,[Oa]:Ha,[Ba]:Ga,[$i]:za,[Fa]:ka,[Ha]:Oa,[Ga]:Ba,[za]:$i};function iv(i){function t(){let I=!1;const mt=new le;let Y=null;const Q=new le(0,0,0,0);return{setMask:function(dt){Y!==dt&&!I&&(i.colorMask(dt,dt,dt,dt),Y=dt)},setLocked:function(dt){I=dt},setClear:function(dt,gt,Xt,fe,Ue){Ue===!0&&(dt*=fe,gt*=fe,Xt*=fe),mt.set(dt,gt,Xt,fe),Q.equals(mt)===!1&&(i.clearColor(dt,gt,Xt,fe),Q.copy(mt))},reset:function(){I=!1,Y=null,Q.set(-1,0,0,0)}}}function e(){let I=!1,mt=!1,Y=null,Q=null,dt=null;return{setReversed:function(gt){mt=gt},setTest:function(gt){gt?ct(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!I&&(i.depthMask(gt),Y=gt)},setFunc:function(gt){if(mt&&(gt=nv[gt]),Q!==gt){switch(gt){case ka:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=gt}},setLocked:function(gt){I=gt},setClear:function(gt){dt!==gt&&(i.clearDepth(gt),dt=gt)},reset:function(){I=!1,Y=null,Q=null,dt=null}}}function n(){let I=!1,mt=null,Y=null,Q=null,dt=null,gt=null,Xt=null,fe=null,Ue=null;return{setTest:function(Yt){I||(Yt?ct(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Yt){mt!==Yt&&!I&&(i.stencilMask(Yt),mt=Yt)},setFunc:function(Yt,Ne,yn){(Y!==Yt||Q!==Ne||dt!==yn)&&(i.stencilFunc(Yt,Ne,yn),Y=Yt,Q=Ne,dt=yn)},setOp:function(Yt,Ne,yn){(gt!==Yt||Xt!==Ne||fe!==yn)&&(i.stencilOp(Yt,Ne,yn),gt=Yt,Xt=Ne,fe=yn)},setLocked:function(Yt){I=Yt},setClear:function(Yt){Ue!==Yt&&(i.clearStencil(Yt),Ue=Yt)},reset:function(){I=!1,mt=null,Y=null,Q=null,dt=null,gt=null,Xt=null,fe=null,Ue=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,d=[],p=null,g=!1,v=null,u=null,m=null,y=null,x=null,S=null,L=null,T=new Vt(0,0,0),A=0,P=!1,H=null,_=null,w=null,O=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),nt=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),nt=X>=2);let D=null,Z={};const et=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),pt=new le().fromArray(et),yt=new le().fromArray(tt);function W(I,mt,Y,Q){const dt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(I,gt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<Y;Xt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(mt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return gt}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),r.setFunc($i),Ft(!1),Gt(Cl),ct(i.CULL_FACE),C(Wn);function ct(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function at(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function ot(I,mt){return h[I]!==mt?(i.bindFramebuffer(I,mt),h[I]=mt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function lt(I,mt){let Y=d,Q=!1;if(I){Y=f.get(mt),Y===void 0&&(Y=[],f.set(mt,Y));const dt=I.textures;if(Y.length!==dt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Xt=dt.length;gt<Xt;gt++)Y[gt]=i.COLOR_ATTACHMENT0+gt;Y.length=dt.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function St(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const Ct={[ci]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};Ct[xd]=i.MIN,Ct[yd]=i.MAX;const Nt={[Md]:i.ZERO,[Sd]:i.ONE,[bd]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Pd]:i.CONSTANT_COLOR,[Ld]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function C(I,mt,Y,Q,dt,gt,Xt,fe,Ue,Yt){if(I===Wn){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(ct(i.BLEND),g=!0),I!==gd){if(I!==v||Yt!==P){if((u!==ci||x!==ci)&&(i.blendEquation(i.FUNC_ADD),u=ci,x=ci),Yt)switch(I){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFunc(i.ONE,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,y=null,S=null,L=null,T.set(0,0,0),A=0,v=I,P=Yt}return}dt=dt||mt,gt=gt||Y,Xt=Xt||Q,(mt!==u||dt!==x)&&(i.blendEquationSeparate(Ct[mt],Ct[dt]),u=mt,x=dt),(Y!==m||Q!==y||gt!==S||Xt!==L)&&(i.blendFuncSeparate(Nt[Y],Nt[Q],Nt[gt],Nt[Xt]),m=Y,y=Q,S=gt,L=Xt),(fe.equals(T)===!1||Ue!==A)&&(i.blendColor(fe.r,fe.g,fe.b,Ue),T.copy(fe),A=Ue),v=I,P=!1}function re(I,mt){I.side===Cn?at(i.CULL_FACE):ct(i.CULL_FACE);let Y=I.side===ze;mt&&(Y=!Y),Ft(Y),I.blending===zi&&I.transparent===!1?C(Wn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){H!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),H=I)}function Gt(I){I!==fd?(ct(i.CULL_FACE),I!==_&&(I===Cl?i.cullFace(i.BACK):I===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),_=I}function Rt(I){I!==w&&(nt&&i.lineWidth(I),w=I)}function ee(I,mt,Y){I?(ct(i.POLYGON_OFFSET_FILL),(O!==mt||G!==Y)&&(i.polygonOffset(mt,Y),O=mt,G=Y)):at(i.POLYGON_OFFSET_FILL)}function kt(I){I?ct(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+q-1),D!==I&&(i.activeTexture(I),D=I)}function M(I,mt,Y){Y===void 0&&(D===null?Y=i.TEXTURE0+q-1:Y=D);let Q=Z[Y];Q===void 0&&(Q={type:void 0,texture:void 0},Z[Y]=Q),(Q.type!==I||Q.texture!==mt)&&(D!==Y&&(i.activeTexture(Y),D=Y),i.bindTexture(I,mt||J[I]),Q.type=I,Q.texture=mt)}function F(){const I=Z[D];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(I){pt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),pt.copy(I))}function xt(I){yt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),yt.copy(I))}function Wt(I,mt){let Y=l.get(mt);Y===void 0&&(Y=new WeakMap,l.set(mt,Y));let Q=Y.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(mt,I.name),Y.set(I,Q))}function Ot(I,mt){const Q=l.get(mt).get(I);o.get(mt)!==Q&&(i.uniformBlockBinding(mt,Q,I.__bindingPointIndex),o.set(mt,Q))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},D=null,Z={},h={},f=new WeakMap,d=[],p=null,g=!1,v=null,u=null,m=null,y=null,x=null,S=null,L=null,T=new Vt(0,0,0),A=0,P=!1,H=null,_=null,w=null,O=null,G=null,pt.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ct,disable:at,bindFramebuffer:ot,drawBuffers:lt,useProgram:St,setBlending:C,setMaterial:re,setFlipSided:Ft,setCullFace:Gt,setLineWidth:Rt,setPolygonOffset:ee,setScissorTest:kt,activeTexture:R,bindTexture:M,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:it,texImage2D:_t,texImage3D:Dt,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:$t,texStorage3D:st,texSubImage2D:j,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Ut,viewport:xt,reset:te}}function Sc(i,t,e,n){const s=sv(n);switch(e){case Th:return i*t;case Rh:return i*t;case Ch:return i*t*2;case Ph:return i*t/s.components*s.byteLength;case qo:return i*t/s.components*s.byteLength;case Lh:return i*t*2/s.components*s.byteLength;case Yo:return i*t*2/s.components*s.byteLength;case Ah:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case jo:return i*t*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case qa:case ja:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hr:case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ih:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _o:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sv(i){switch(i){case Un:case bh:return{byteLength:1,components:1};case ws:case wh:case As:return{byteLength:2,components:1};case Xo:case $o:return{byteLength:2,components:4};case fi:case Wo:case In:return{byteLength:4,components:1};case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):yr("canvas")}function v(R,M,F){let K=1;const it=kt(R);if((it.width>F||it.height>F)&&(K=F/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*it.width),Et=Math.floor(K*it.height);f===void 0&&(f=g(j,Et));const ut=M?g(j,Et):f;return ut.width=j,ut.height=Et,ut.getContext("2d").drawImage(R,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Et+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function u(R){return R.generateMipmaps&&R.minFilter!==Je&&R.minFilter!==$e}function m(R){i.generateMipmap(R)}function y(R,M,F,K,it=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=M;if(M===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),M===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGB8UI),F===i.UNSIGNED_SHORT&&(j=i.RGB16UI),F===i.UNSIGNED_INT&&(j=i.RGB32UI),F===i.BYTE&&(j=i.RGB8I),F===i.SHORT&&(j=i.RGB16I),F===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),F===i.UNSIGNED_INT&&(j=i.RGBA32UI),F===i.BYTE&&(j=i.RGBA8I),F===i.SHORT&&(j=i.RGBA16I),F===i.INT&&(j=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Et=it?gr:Zt.getTransfer(K);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=Et===ie?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(R,M){let F;return R?M===null||M===fi||M===ji?F=i.DEPTH24_STENCIL8:M===In?F=i.DEPTH32F_STENCIL8:M===ws&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fi||M===ji?F=i.DEPTH_COMPONENT24:M===In?F=i.DEPTH_COMPONENT32F:M===ws&&(F=i.DEPTH_COMPONENT16),F}function S(R,M){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==Je&&R.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function L(R){const M=R.target;M.removeEventListener("dispose",L),A(M),M.isVideoTexture&&h.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),H(M)}function A(R){const M=n.get(R);if(M.__webglInit===void 0)return;const F=R.source,K=d.get(F);if(K){const it=K[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&P(R),Object.keys(K).length===0&&d.delete(F)}n.remove(R)}function P(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const F=R.source,K=d.get(F);delete K[M.__cacheKey],a.memory.textures--}function H(R){const M=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let it=0;it<M.__webglFramebuffer[K].length;it++)i.deleteFramebuffer(M.__webglFramebuffer[K][it]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=R.textures;for(let K=0,it=F.length;K<it;K++){const j=n.get(F[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(F[K])}n.remove(R)}let _=0;function w(){_=0}function O(){const R=_;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),_+=1,R}function G(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const F=n.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(F,R,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function nt(R,M){const F=n.get(R);if(R.version>0&&F.__version!==R.version){yt(F,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function X(R,M){const F=n.get(R);if(R.version>0&&F.__version!==R.version){yt(F,R,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function V(R,M){const F=n.get(R);if(R.version>0&&F.__version!==R.version){W(F,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const D={[Xa]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},Z={[Je]:i.NEAREST,[Vd]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},et={[qd]:i.NEVER,[Qd]:i.ALWAYS,[Yd]:i.LESS,[Uh]:i.LEQUAL,[jd]:i.EQUAL,[Jd]:i.GEQUAL,[Kd]:i.GREATER,[Zd]:i.NOTEQUAL};function tt(R,M){if(M.type===In&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$e||M.magFilter===Wr||M.magFilter===Ns||M.magFilter===Ln||M.minFilter===$e||M.minFilter===Wr||M.minFilter===Ns||M.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,D[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,D[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,D[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Z[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Je||M.minFilter!==Ns&&M.minFilter!==Ln||M.type===In&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function pt(R,M){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",L));const K=M.source;let it=d.get(K);it===void 0&&(it={},d.set(K,it));const j=G(M);if(j!==R.__cacheKey){it[j]===void 0&&(it[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),it[j].usedTimes++;const Et=it[R.__cacheKey];Et!==void 0&&(it[R.__cacheKey].usedTimes--,Et.usedTimes===0&&P(M)),R.__cacheKey=j,R.__webglTexture=it[j].texture}return F}function yt(R,M,F){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const it=pt(R,M),j=M.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+F);const Et=n.get(j);if(j.version!==Et.__version||it===!0){e.activeTexture(i.TEXTURE0+F);const ut=Zt.getPrimaries(Zt.workingColorSpace),vt=M.colorSpace===Vn?null:Zt.getPrimaries(M.colorSpace),$t=M.colorSpace===Vn||ut===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let st=v(M.image,!1,s.maxTextureSize);st=ee(M,st);const _t=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type);let Ut=y(M.internalFormat,_t,Dt,M.colorSpace,M.isVideoTexture);tt(K,M);let xt;const Wt=M.mipmaps,Ot=M.isVideoTexture!==!0,te=Et.__version===void 0||it===!0,I=j.dataReady,mt=S(M,st);if(M.isDepthTexture)Ut=x(M.format===Ki,M.type),te&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,_t,Dt,null));else if(M.isDataTexture)if(Wt.length>0){Ot&&te&&e.texStorage2D(i.TEXTURE_2D,mt,Ut,Wt[0].width,Wt[0].height);for(let Y=0,Q=Wt.length;Y<Q;Y++)xt=Wt[Y],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,_t,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,Ut,xt.width,xt.height,0,_t,Dt,xt.data);M.generateMipmaps=!1}else Ot?(te&&e.texStorage2D(i.TEXTURE_2D,mt,Ut,st.width,st.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,_t,Dt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,_t,Dt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ot&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ut,Wt[0].width,Wt[0].height,st.depth);for(let Y=0,Q=Wt.length;Y<Q;Y++)if(xt=Wt[Y],M.format!==ln)if(_t!==null)if(Ot){if(I)if(M.layerUpdates.size>0){const dt=Sc(xt.width,xt.height,M.format,M.type);for(const gt of M.layerUpdates){const Xt=xt.data.subarray(gt*dt/xt.data.BYTES_PER_ELEMENT,(gt+1)*dt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,gt,xt.width,xt.height,1,_t,Xt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,_t,xt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ut,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,_t,Dt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ut,xt.width,xt.height,st.depth,0,_t,Dt,xt.data)}else{Ot&&te&&e.texStorage2D(i.TEXTURE_2D,mt,Ut,Wt[0].width,Wt[0].height);for(let Y=0,Q=Wt.length;Y<Q;Y++)xt=Wt[Y],M.format!==ln?_t!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ut,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,_t,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,Ut,xt.width,xt.height,0,_t,Dt,xt.data)}else if(M.isDataArrayTexture)if(Ot){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ut,st.width,st.height,st.depth),I)if(M.layerUpdates.size>0){const Y=Sc(st.width,st.height,M.format,M.type);for(const Q of M.layerUpdates){const dt=st.data.subarray(Q*Y/st.data.BYTES_PER_ELEMENT,(Q+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,_t,Dt,dt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Dt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,_t,Dt,st.data);else if(M.isData3DTexture)Ot?(te&&e.texStorage3D(i.TEXTURE_3D,mt,Ut,st.width,st.height,st.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Dt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,_t,Dt,st.data);else if(M.isFramebufferTexture){if(te)if(Ot)e.texStorage2D(i.TEXTURE_2D,mt,Ut,st.width,st.height);else{let Y=st.width,Q=st.height;for(let dt=0;dt<mt;dt++)e.texImage2D(i.TEXTURE_2D,dt,Ut,Y,Q,0,_t,Dt,null),Y>>=1,Q>>=1}}else if(Wt.length>0){if(Ot&&te){const Y=kt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Ut,Y.width,Y.height)}for(let Y=0,Q=Wt.length;Y<Q;Y++)xt=Wt[Y],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,_t,Dt,xt):e.texImage2D(i.TEXTURE_2D,Y,Ut,_t,Dt,xt);M.generateMipmaps=!1}else if(Ot){if(te){const Y=kt(st);e.texStorage2D(i.TEXTURE_2D,mt,Ut,Y.width,Y.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Dt,st)}else e.texImage2D(i.TEXTURE_2D,0,Ut,_t,Dt,st);u(M)&&m(K),Et.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function W(R,M,F){if(M.image.length!==6)return;const K=pt(R,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const j=n.get(it);if(it.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+F);const Et=Zt.getPrimaries(Zt.workingColorSpace),ut=M.colorSpace===Vn?null:Zt.getPrimaries(M.colorSpace),vt=M.colorSpace===Vn||Et===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const $t=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!$t&&!st?_t[Q]=v(M.image[Q],!0,s.maxCubemapSize):_t[Q]=st?M.image[Q].image:M.image[Q],_t[Q]=ee(M,_t[Q]);const Dt=_t[0],Ut=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Wt=y(M.internalFormat,Ut,xt,M.colorSpace),Ot=M.isVideoTexture!==!0,te=j.__version===void 0||K===!0,I=it.dataReady;let mt=S(M,Dt);tt(i.TEXTURE_CUBE_MAP,M);let Y;if($t){Ot&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Wt,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){Y=_t[Q].mipmaps;for(let dt=0;dt<Y.length;dt++){const gt=Y[dt];M.format!==ln?Ut!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,gt.width,gt.height,Ut,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,Wt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,gt.width,gt.height,Ut,xt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,Wt,gt.width,gt.height,0,Ut,xt,gt.data)}}}else{if(Y=M.mipmaps,Ot&&te){Y.length>0&&mt++;const Q=kt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Ut,xt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,_t[Q].width,_t[Q].height,0,Ut,xt,_t[Q].data);for(let dt=0;dt<Y.length;dt++){const Xt=Y[dt].image[Q].image;Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Xt.width,Xt.height,Ut,xt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,Wt,Xt.width,Xt.height,0,Ut,xt,Xt.data)}}else{Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut,xt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,Ut,xt,_t[Q]);for(let dt=0;dt<Y.length;dt++){const gt=Y[dt];Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Ut,xt,gt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,Wt,Ut,xt,gt.image[Q])}}}u(M)&&m(i.TEXTURE_CUBE_MAP),j.__version=it.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,F,K,it,j){const Et=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),vt=y(F.internalFormat,Et,ut,F.colorSpace);if(!n.get(M).__hasExternalTextures){const st=Math.max(1,M.width>>j),_t=Math.max(1,M.height>>j);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,j,vt,st,_t,M.depth,0,Et,ut,null):e.texImage2D(it,j,vt,st,_t,0,Et,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,it,n.get(F).__webglTexture,0,Ft(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,it,n.get(F).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,it=K&&K.isDepthTexture?K.type:null,j=x(M.stencilBuffer,it),Et=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Ft(M);Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,j,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const K=M.textures;for(let it=0;it<K.length;it++){const j=K[it],Et=r.convert(j.format,j.colorSpace),ut=r.convert(j.type),vt=y(j.internalFormat,Et,ut,j.colorSpace),$t=Ft(M);F&&Gt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,vt,M.width,M.height):Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,it=Ft(M);if(M.depthTexture.format===Hi)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===Ki)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ot(R){const M=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");at(M.__webglFramebuffer,R)}else if(F){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),ct(M.__webglDepthbuffer[K],R,!1);else{const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ct(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,M,F){const K=n.get(R);M!==void 0&&J(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ot(R)}function St(R){const M=R.texture,F=n.get(R),K=n.get(M);R.addEventListener("dispose",T);const it=R.textures,j=R.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let vt=0;vt<M.mipmaps.length;vt++)F.__webglFramebuffer[ut][vt]=i.createFramebuffer()}else F.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)F.__webglFramebuffer[ut]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ut=0,vt=it.length;ut<vt;ut++){const $t=n.get(it[ut]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Gt(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const vt=it[ut];F.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const $t=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),_t=y(vt.internalFormat,$t,st,vt.colorSpace,R.isXRRenderTarget===!0),Dt=Ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,_t,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),tt(i.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)J(F.__webglFramebuffer[ut][vt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else J(F.__webglFramebuffer[ut],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);u(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,vt=it.length;ut<vt;ut++){const $t=it[ut],st=n.get($t);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),tt(i.TEXTURE_2D,$t),J(F.__webglFramebuffer,R,$t,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),u($t)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),tt(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)J(F.__webglFramebuffer[vt],R,M,i.COLOR_ATTACHMENT0,ut,vt);else J(F.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ut,0);u(M)&&m(ut),e.unbindTexture()}R.depthBuffer&&ot(R)}function Ct(R){const M=R.textures;for(let F=0,K=M.length;F<K;F++){const it=M[F];if(u(it)){const j=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(it).__webglTexture;e.bindTexture(j,Et),m(j),e.unbindTexture()}}}const Nt=[],C=[];function re(R){if(R.samples>0){if(Gt(R)===!1){const M=R.textures,F=R.width,K=R.height;let it=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),ut=M.length>1;if(ut)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const $t=n.get(M[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,it,i.NEAREST),l===!0&&(Nt.length=0,C.length=0,Nt.push(i.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Nt.push(j),C.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const $t=n.get(M[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ft(R){return Math.min(s.maxSamples,R.samples)}function Gt(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ee(R,M){const F=R.colorSpace,K=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Zn&&F!==Vn&&(Zt.getTransfer(F)===ie?(K!==ln||it!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=q,this.setTexture2DArray=nt,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=lt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Gt}function av(i,t){function e(n,s=Vn){let r;const a=Zt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return i.BYTE;if(n===wh)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===As)return i.HALF_FLOAT;if(n===Th)return i.ALPHA;if(n===Ah)return i.RGB;if(n===ln)return i.RGBA;if(n===Rh)return i.LUMINANCE;if(n===Ch)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Ph)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===Lh)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hr)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===vo||n===_o||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ov extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _s extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lv={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const u=e.getJointPose(v,n),m=this._getHandJoint(c,v);u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=u.radius),m.visible=u!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _s;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
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

}`;class uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hn({vertexShader:cv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dv extends ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null;const v=new uv,u=e.getContextAttributes();let m=null,y=null;const x=[],S=[],L=new Bt;let T=null;const A=new Ze;A.layers.enable(1),A.viewport=new le;const P=new Ze;P.layers.enable(2),P.viewport=new le;const H=[A,P],_=new ov;_.layers.enable(1),_.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=x[W];return J===void 0&&(J=new ya,x[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=x[W];return J===void 0&&(J=new ya,x[W]=J),J.getGripSpace()},this.getHand=function(W){let J=x[W];return J===void 0&&(J=new ya,x[W]=J),J.getHandSpace()};function G(W){const J=S.indexOf(W.inputSource);if(J===-1)return;const ct=x[J];ct!==void 0&&(ct.update(W.inputSource,W.frame,c||a),ct.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let W=0;W<x.length;W++){const J=S[W];J!==null&&(S[W]=null,x[W].disconnect(J))}w=null,O=null,v.reset(),t.setRenderTarget(m),p=null,d=null,f=null,s=null,y=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),u.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const J={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new pi(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil})}else{let J=null,ct=null,at=null;u.depth&&(at=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=u.stencil?Ki:Hi,ct=u.stencil?ji:fi);const ot={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new pi(d.textureWidth,d.textureHeight,{format:ln,type:Un,depthTexture:new $h(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function nt(W){for(let J=0;J<W.removed.length;J++){const ct=W.removed[J],at=S.indexOf(ct);at>=0&&(S[at]=null,x[at].disconnect(ct))}for(let J=0;J<W.added.length;J++){const ct=W.added[J];let at=S.indexOf(ct);if(at===-1){for(let lt=0;lt<x.length;lt++)if(lt>=S.length){S.push(ct),at=lt;break}else if(S[lt]===null){S[lt]=ct,at=lt;break}if(at===-1)break}const ot=x[at];ot&&ot.connect(ct)}}const X=new N,V=new N;function D(W,J,ct){X.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(ct.matrixWorld);const at=X.distanceTo(V),ot=J.projectionMatrix.elements,lt=ct.projectionMatrix.elements,St=ot[14]/(ot[10]-1),Ct=ot[14]/(ot[10]+1),Nt=(ot[9]+1)/ot[5],C=(ot[9]-1)/ot[5],re=(ot[8]-1)/ot[0],Ft=(lt[8]+1)/lt[0],Gt=St*re,Rt=St*Ft,ee=at/(-re+Ft),kt=ee*-re;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(kt),W.translateZ(ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ot[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const R=St+ee,M=Ct+ee,F=Gt-kt,K=Rt+(at-kt),it=Nt*Ct/M*R,j=C*Ct/M*R;W.projectionMatrix.makePerspective(F,K,it,j,R,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Z(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,ct=W.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ct=v.depthFar)),_.near=P.near=A.near=J,_.far=P.far=A.far=ct,(w!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,O=_.far);const at=W.parent,ot=_.cameras;Z(_,at);for(let lt=0;lt<ot.length;lt++)Z(ot[lt],at);ot.length===2?D(_,A,P):_.projectionMatrix.copy(A.projectionMatrix),et(W,_,at)};function et(W,J,ct){ct===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ct.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=yo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let tt=null;function pt(W,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let at=!1;ct.length!==_.cameras.length&&(_.cameras.length=0,at=!0);for(let lt=0;lt<ct.length;lt++){const St=ct[lt];let Ct=null;if(p!==null)Ct=p.getViewport(St);else{const C=f.getViewSubImage(d,St);Ct=C.viewport,lt===0&&(t.setRenderTargetTextures(y,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(y))}let Nt=H[lt];Nt===void 0&&(Nt=new Ze,Nt.layers.enable(lt),Nt.viewport=new le,H[lt]=Nt),Nt.matrix.fromArray(St.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(St.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),lt===0&&(_.matrix.copy(Nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),at===!0&&_.cameras.push(Nt)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const lt=f.getDepthInformation(ct[0]);lt&&lt.isValid&&lt.texture&&v.init(t,lt,s.renderState)}}for(let ct=0;ct<x.length;ct++){const at=S[ct],ot=x[ct];at!==null&&ot!==void 0&&ot.update(at,J,c||a)}tt&&tt(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const yt=new Xh;yt.setAnimationLoop(pt),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}}const si=new gn,fv=new ce;function pv(i,t){function e(u,m){u.matrixAutoUpdate===!0&&u.updateMatrix(),m.value.copy(u.matrix)}function n(u,m){m.color.getRGB(u.fogColor.value,Gh(i)),m.isFog?(u.fogNear.value=m.near,u.fogFar.value=m.far):m.isFogExp2&&(u.fogDensity.value=m.density)}function s(u,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(u,m):m.isMeshToonMaterial?(r(u,m),f(u,m)):m.isMeshPhongMaterial?(r(u,m),h(u,m)):m.isMeshStandardMaterial?(r(u,m),d(u,m),m.isMeshPhysicalMaterial&&p(u,m,S)):m.isMeshMatcapMaterial?(r(u,m),g(u,m)):m.isMeshDepthMaterial?r(u,m):m.isMeshDistanceMaterial?(r(u,m),v(u,m)):m.isMeshNormalMaterial?r(u,m):m.isLineBasicMaterial?(a(u,m),m.isLineDashedMaterial&&o(u,m)):m.isPointsMaterial?l(u,m,y,x):m.isSpriteMaterial?c(u,m):m.isShadowMaterial?(u.color.value.copy(m.color),u.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(u,m){u.opacity.value=m.opacity,m.color&&u.diffuse.value.copy(m.color),m.emissive&&u.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(u.map.value=m.map,e(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,e(m.alphaMap,u.alphaMapTransform)),m.bumpMap&&(u.bumpMap.value=m.bumpMap,e(m.bumpMap,u.bumpMapTransform),u.bumpScale.value=m.bumpScale,m.side===ze&&(u.bumpScale.value*=-1)),m.normalMap&&(u.normalMap.value=m.normalMap,e(m.normalMap,u.normalMapTransform),u.normalScale.value.copy(m.normalScale),m.side===ze&&u.normalScale.value.negate()),m.displacementMap&&(u.displacementMap.value=m.displacementMap,e(m.displacementMap,u.displacementMapTransform),u.displacementScale.value=m.displacementScale,u.displacementBias.value=m.displacementBias),m.emissiveMap&&(u.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,u.emissiveMapTransform)),m.specularMap&&(u.specularMap.value=m.specularMap,e(m.specularMap,u.specularMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,S=y.envMapRotation;x&&(u.envMap.value=x,si.copy(S),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.envMapRotation.value.setFromMatrix4(fv.makeRotationFromEuler(si)),u.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=m.reflectivity,u.ior.value=m.ior,u.refractionRatio.value=m.refractionRatio),m.lightMap&&(u.lightMap.value=m.lightMap,u.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,u.lightMapTransform)),m.aoMap&&(u.aoMap.value=m.aoMap,u.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,u.aoMapTransform))}function a(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,m.map&&(u.map.value=m.map,e(m.map,u.mapTransform))}function o(u,m){u.dashSize.value=m.dashSize,u.totalSize.value=m.dashSize+m.gapSize,u.scale.value=m.scale}function l(u,m,y,x){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.size.value=m.size*y,u.scale.value=x*.5,m.map&&(u.map.value=m.map,e(m.map,u.uvTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,e(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function c(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.rotation.value=m.rotation,m.map&&(u.map.value=m.map,e(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,e(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function h(u,m){u.specular.value.copy(m.specular),u.shininess.value=Math.max(m.shininess,1e-4)}function f(u,m){m.gradientMap&&(u.gradientMap.value=m.gradientMap)}function d(u,m){u.metalness.value=m.metalness,m.metalnessMap&&(u.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,u.metalnessMapTransform)),u.roughness.value=m.roughness,m.roughnessMap&&(u.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,u.roughnessMapTransform)),m.envMap&&(u.envMapIntensity.value=m.envMapIntensity)}function p(u,m,y){u.ior.value=m.ior,m.sheen>0&&(u.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),u.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(u.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,u.sheenColorMapTransform)),m.sheenRoughnessMap&&(u.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,u.sheenRoughnessMapTransform))),m.clearcoat>0&&(u.clearcoat.value=m.clearcoat,u.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(u.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,u.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(u.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&u.clearcoatNormalScale.value.negate())),m.dispersion>0&&(u.dispersion.value=m.dispersion),m.iridescence>0&&(u.iridescence.value=m.iridescence,u.iridescenceIOR.value=m.iridescenceIOR,u.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(u.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,u.iridescenceMapTransform)),m.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),m.transmission>0&&(u.transmission.value=m.transmission,u.transmissionSamplerMap.value=y.texture,u.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(u.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,u.transmissionMapTransform)),u.thickness.value=m.thickness,m.thicknessMap&&(u.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=m.attenuationDistance,u.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(u.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(u.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=m.specularIntensity,u.specularColor.value.copy(m.specularColor),m.specularColorMap&&(u.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,u.specularColorMapTransform)),m.specularIntensityMap&&(u.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,m){m.matcap&&(u.matcap.value=m.matcap)}function v(u,m){const y=t.get(m).light;u.referencePosition.value.setFromMatrixPosition(y.matrixWorld),u.nearDistance.value=y.shadow.camera.near,u.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=s[y.id];S===void 0&&(g(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",u));const L=x.program;n.updateUBOMapping(y,L);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const x=f();y.__bindingPointIndex=x;const S=i.createBuffer(),L=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],S=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let H=0,_=P.length;H<_;H++){const w=P[H];if(p(w,T,H,L)===!0){const O=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let q=0;for(let nt=0;nt<G.length;nt++){const X=G[nt],V=v(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+q,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,S,L){const T=y.value,A=x+"_"+S;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const P=L[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const x=y.uniforms;let S=0;const L=16;for(let A=0,P=x.length;A<P;A++){const H=Array.isArray(x[A])?x[A]:[x[A]];for(let _=0,w=H.length;_<w;_++){const O=H[_],G=Array.isArray(O.value)?O.value:[O.value];for(let q=0,nt=G.length;q<nt;q++){const X=G[q],V=v(X),D=S%L,Z=D%V.boundary,et=D+Z;S+=Z,et!==0&&L-et<V.storage&&(S+=L-et),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=V.storage}}}const T=S%L;return T>0&&(S+=L-T),y.__size=S,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function u(y){const x=y.target;x.removeEventListener("dispose",u);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class gv{constructor(t={}){const{canvas:e=ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,u=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Xn,this.toneMappingExposure=1;const x=this;let S=!1,L=0,T=0,A=null,P=-1,H=null;const _=new le,w=new le;let O=null;const G=new Vt(0);let q=0,nt=e.width,X=e.height,V=1,D=null,Z=null;const et=new le(0,0,nt,X),tt=new le(0,0,nt,X);let pt=!1;const yt=new Jo;let W=!1,J=!1;const ct=new ce,at=new ce,ot=new N,lt=new le,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Nt(){return A===null?V:1}let C=n;function re(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),C===null){const U="webgl2";if(C=re(U,b),C===null)throw re(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,Gt,Rt,ee,kt,R,M,F,K,it,j,Et,ut,vt,$t,st,_t,Dt,Ut,xt,Wt,Ot,te,I;function mt(){Ft=new Mg(C),Ft.init(),Ot=new av(C,Ft),Gt=new mg(C,Ft,t,Ot),Rt=new iv(C),Gt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ee=new wg(C),kt=new G0,R=new rv(C,Ft,Rt,kt,Gt,Ot,ee),M=new vg(x),F=new yg(x),K=new Lf(C),te=new fg(C,K),it=new Sg(C,K,ee,te),j=new Tg(C,it,K,ee),Ut=new Eg(C,Gt,R),st=new gg(kt),Et=new H0(x,M,F,Ft,Gt,te,st),ut=new pv(x,kt),vt=new W0,$t=new K0(Ft),Dt=new dg(x,M,F,Rt,j,d,l),_t=new ev(x,j,Gt),I=new mv(C,ee,Gt,Rt),xt=new pg(C,Ft,ee),Wt=new bg(C,Ft,ee),ee.programs=Et.programs,x.capabilities=Gt,x.extensions=Ft,x.properties=kt,x.renderLists=vt,x.shadowMap=_t,x.state=Rt,x.info=ee}mt();const Y=new dv(x,C);this.xr=Y,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(nt,X,!1))},this.getSize=function(b){return b.set(nt,X)},this.setSize=function(b,U,B=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=b,X=U,e.width=Math.floor(b*V),e.height=Math.floor(U*V),B===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(nt*V,X*V).floor()},this.setDrawingBufferSize=function(b,U,B){nt=b,X=U,V=B,e.width=Math.floor(b*B),e.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(et)},this.setViewport=function(b,U,B,z){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,U,B,z),Rt.viewport(_.copy(et).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,U,B,z){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,U,B,z),Rt.scissor(w.copy(tt).multiplyScalar(V).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(b){Rt.setScissorTest(pt=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(b=!0,U=!0,B=!0){let z=0;if(b){let k=!1;if(A!==null){const rt=A.texture.format;k=rt===jo||rt===Yo||rt===qo}if(k){const rt=A.texture.type,ft=rt===Un||rt===fi||rt===ws||rt===ji||rt===Xo||rt===$o,Mt=Dt.getClearColor(),wt=Dt.getClearAlpha(),Pt=Mt.r,Lt=Mt.g,Tt=Mt.b;ft?(p[0]=Pt,p[1]=Lt,p[2]=Tt,p[3]=wt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Pt,g[1]=Lt,g[2]=Tt,g[3]=wt,C.clearBufferiv(C.COLOR,0,g))}else z|=C.COLOR_BUFFER_BIT}U&&(z|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),vt.dispose(),$t.dispose(),kt.dispose(),M.dispose(),F.dispose(),j.dispose(),te.dispose(),I.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",yl),Y.removeEventListener("sessionend",Ml),Jn.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=ee.autoReset,U=_t.enabled,B=_t.autoUpdate,z=_t.needsUpdate,k=_t.type;mt(),ee.autoReset=b,_t.enabled=U,_t.autoUpdate=B,_t.needsUpdate=z,_t.type=k}function gt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const U=b.target;U.removeEventListener("dispose",Xt),fe(U)}function fe(b){Ue(b),kt.remove(b)}function Ue(b){const U=kt.get(b).programs;U!==void 0&&(U.forEach(function(B){Et.releaseProgram(B)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,z,k,rt){U===null&&(U=St);const ft=k.isMesh&&k.matrixWorld.determinant()<0,Mt=ad(b,U,B,z,k);Rt.setMaterial(z,ft);let wt=B.index,Pt=1;if(z.wireframe===!0){if(wt=it.getWireframeAttribute(B),wt===void 0)return;Pt=2}const Lt=B.drawRange,Tt=B.attributes.position;let Jt=Lt.start*Pt,ne=(Lt.start+Lt.count)*Pt;rt!==null&&(Jt=Math.max(Jt,rt.start*Pt),ne=Math.min(ne,(rt.start+rt.count)*Pt)),wt!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,wt.count)):Tt!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,Tt.count));const ae=ne-Jt;if(ae<0||ae===1/0)return;te.setup(k,z,Mt,B,wt);let Ge,jt=xt;if(wt!==null&&(Ge=K.get(wt),jt=Wt,jt.setIndex(Ge)),k.isMesh)z.wireframe===!0?(Rt.setLineWidth(z.wireframeLinewidth*Nt()),jt.setMode(C.LINES)):jt.setMode(C.TRIANGLES);else if(k.isLine){let At=z.linewidth;At===void 0&&(At=1),Rt.setLineWidth(At*Nt()),k.isLineSegments?jt.setMode(C.LINES):k.isLineLoop?jt.setMode(C.LINE_LOOP):jt.setMode(C.LINE_STRIP)}else k.isPoints?jt.setMode(C.POINTS):k.isSprite&&jt.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)jt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))jt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const At=k._multiDrawStarts,we=k._multiDrawCounts,Kt=k._multiDrawCount,en=wt?K.get(wt).bytesPerElement:1,_i=kt.get(z).currentProgram.getUniforms();for(let Ve=0;Ve<Kt;Ve++)_i.setValue(C,"_gl_DrawID",Ve),jt.render(At[Ve]/en,we[Ve])}else if(k.isInstancedMesh)jt.renderInstances(Jt,ae,k.count);else if(B.isInstancedBufferGeometry){const At=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,we=Math.min(B.instanceCount,At);jt.renderInstances(Jt,ae,we)}else jt.render(Jt,ae)};function Yt(b,U,B){b.transparent===!0&&b.side===Cn&&b.forceSinglePass===!1?(b.side=ze,b.needsUpdate=!0,Us(b,U,B),b.side=qn,b.needsUpdate=!0,Us(b,U,B),b.side=Cn):Us(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),u=$t.get(B),u.init(U),y.push(u),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),b!==B&&b.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const z=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const rt=k.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const Mt=rt[ft];Yt(Mt,B,k),z.add(Mt)}else Yt(rt,B,k),z.add(rt)}),y.pop(),u=null,z},this.compileAsync=function(b,U,B=null){const z=this.compile(b,U,B);return new Promise(k=>{function rt(){if(z.forEach(function(ft){kt.get(ft).currentProgram.isReady()&&z.delete(ft)}),z.size===0){k(b);return}setTimeout(rt,10)}Ft.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ne=null;function yn(b){Ne&&Ne(b)}function yl(){Jn.stop()}function Ml(){Jn.start()}const Jn=new Xh;Jn.setAnimationLoop(yn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(b){Ne=b,Y.setAnimationLoop(b),b===null?Jn.stop():Jn.start()},Y.addEventListener("sessionstart",yl),Y.addEventListener("sessionend",Ml),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,A),u=$t.get(b,y.length),u.init(U),y.push(u),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),yt.setFromProjectionMatrix(at),J=this.localClippingEnabled,W=st.init(this.clippingPlanes,J),v=vt.get(b,m.length),v.init(),m.push(v),Y.enabled===!0&&Y.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&Br(rt,U,-1/0,x.sortObjects)}Br(b,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(D,Z),Ct=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ct&&Dt.addToRenderList(v,b),this.info.render.frame++,W===!0&&st.beginShadows();const B=u.state.shadowsArray;_t.render(B,b,U),W===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=v.opaque,k=v.transmissive;if(u.setupLights(),U.isArrayCamera){const rt=U.cameras;if(k.length>0)for(let ft=0,Mt=rt.length;ft<Mt;ft++){const wt=rt[ft];bl(z,k,b,wt)}Ct&&Dt.render(b);for(let ft=0,Mt=rt.length;ft<Mt;ft++){const wt=rt[ft];Sl(v,b,wt,wt.viewport)}}else k.length>0&&bl(z,k,b,U),Ct&&Dt.render(b),Sl(v,b,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,U),te.resetDefaultState(),P=-1,H=null,y.pop(),y.length>0?(u=y[y.length-1],W===!0&&st.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Br(b,U,B,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||yt.intersectsSprite(b)){z&&lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const ft=j.update(b),Mt=b.material;Mt.visible&&v.push(b,ft,Mt,B,lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||yt.intersectsObject(b))){const ft=j.update(b),Mt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),lt.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),lt.copy(ft.boundingSphere.center)),lt.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(Mt)){const wt=ft.groups;for(let Pt=0,Lt=wt.length;Pt<Lt;Pt++){const Tt=wt[Pt],Jt=Mt[Tt.materialIndex];Jt&&Jt.visible&&v.push(b,ft,Jt,B,lt.z,Tt)}}else Mt.visible&&v.push(b,ft,Mt,B,lt.z,null)}}const rt=b.children;for(let ft=0,Mt=rt.length;ft<Mt;ft++)Br(rt[ft],U,B,z)}function Sl(b,U,B,z){const k=b.opaque,rt=b.transmissive,ft=b.transparent;u.setupLightsView(B),W===!0&&st.setGlobalState(x.clippingPlanes,B),z&&Rt.viewport(_.copy(z)),k.length>0&&Ds(k,U,B),rt.length>0&&Ds(rt,U,B),ft.length>0&&Ds(ft,U,B),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function bl(b,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new pi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?As:Un,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=u.state.transmissionRenderTarget[z.id],ft=z.viewport||_;rt.setSize(ft.z,ft.w);const Mt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(G),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ct&&Dt.render(B);const wt=x.toneMapping;x.toneMapping=Xn;const Pt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),W===!0&&st.setGlobalState(x.clippingPlanes,z),Ds(b,B,z),R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Tt=0,Jt=U.length;Tt<Jt;Tt++){const ne=U[Tt],ae=ne.object,Ge=ne.geometry,jt=ne.material,At=ne.group;if(jt.side===Cn&&ae.layers.test(z.layers)){const we=jt.side;jt.side=ze,jt.needsUpdate=!0,wl(ae,B,z,Ge,jt,At),jt.side=we,jt.needsUpdate=!0,Lt=!0}}Lt===!0&&(R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt))}x.setRenderTarget(Mt),x.setClearColor(G,q),Pt!==void 0&&(z.viewport=Pt),x.toneMapping=wt}function Ds(b,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let k=0,rt=b.length;k<rt;k++){const ft=b[k],Mt=ft.object,wt=ft.geometry,Pt=z===null?ft.material:z,Lt=ft.group;Mt.layers.test(B.layers)&&wl(Mt,U,B,wt,Pt,Lt)}}function wl(b,U,B,z,k,rt){b.onBeforeRender(x,U,B,z,k,rt),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(x,U,B,z,b,rt),k.transparent===!0&&k.side===Cn&&k.forceSinglePass===!1?(k.side=ze,k.needsUpdate=!0,x.renderBufferDirect(B,U,z,k,b,rt),k.side=qn,k.needsUpdate=!0,x.renderBufferDirect(B,U,z,k,b,rt),k.side=Cn):x.renderBufferDirect(B,U,z,k,b,rt),b.onAfterRender(x,U,B,z,k,rt)}function Us(b,U,B){U.isScene!==!0&&(U=St);const z=kt.get(b),k=u.state.lights,rt=u.state.shadowsArray,ft=k.state.version,Mt=Et.getParameters(b,k.state,rt,U,B),wt=Et.getProgramCacheKey(Mt);let Pt=z.programs;z.environment=b.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(b.isMeshStandardMaterial?F:M).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",Xt),Pt=new Map,z.programs=Pt);let Lt=Pt.get(wt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===ft)return Tl(b,Mt),Lt}else Mt.uniforms=Et.getUniforms(b),b.onBeforeCompile(Mt,x),Lt=Et.acquireProgram(Mt,wt),Pt.set(wt,Lt),z.uniforms=Mt.uniforms;const Tt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=st.uniform),Tl(b,Mt),z.needsLights=ld(b),z.lightsStateVersion=ft,z.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function El(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=dr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Tl(b,U){const B=kt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function ad(b,U,B,z,k){U.isScene!==!0&&(U=St),R.resetTextureUnits();const rt=U.fog,ft=z.isMeshStandardMaterial?U.environment:null,Mt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zn,wt=(z.isMeshStandardMaterial?F:M).get(z.envMap||ft),Pt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Lt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!B.morphAttributes.position,Jt=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color;let ae=Xn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ae=x.toneMapping);const Ge=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,jt=Ge!==void 0?Ge.length:0,At=kt.get(z),we=u.state.lights;if(W===!0&&(J===!0||b!==H)){const je=b===H&&z.id===P;st.setState(z,b,je)}let Kt=!1;z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==we.state.version||At.outputColorSpace!==Mt||k.isBatchedMesh&&At.batching===!1||!k.isBatchedMesh&&At.batching===!0||k.isBatchedMesh&&At.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&At.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&At.instancing===!1||!k.isInstancedMesh&&At.instancing===!0||k.isSkinnedMesh&&At.skinning===!1||!k.isSkinnedMesh&&At.skinning===!0||k.isInstancedMesh&&At.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&At.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&At.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&At.instancingMorph===!1&&k.morphTexture!==null||At.envMap!==wt||z.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Pt||At.vertexTangents!==Lt||At.morphTargets!==Tt||At.morphNormals!==Jt||At.morphColors!==ne||At.toneMapping!==ae||At.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,At.__version=z.version);let en=At.currentProgram;Kt===!0&&(en=Us(z,U,k));let _i=!1,Ve=!1,zr=!1;const he=en.getUniforms(),Nn=At.uniforms;if(Rt.useProgram(en.program)&&(_i=!0,Ve=!0,zr=!0),z.id!==P&&(P=z.id,Ve=!0),_i||H!==b){Gt.reverseDepthBuffer?(ct.copy(b.projectionMatrix),sf(ct),rf(ct),he.setValue(C,"projectionMatrix",ct)):he.setValue(C,"projectionMatrix",b.projectionMatrix),he.setValue(C,"viewMatrix",b.matrixWorldInverse);const je=he.map.cameraPosition;je!==void 0&&je.setValue(C,ot.setFromMatrixPosition(b.matrixWorld)),Gt.logarithmicDepthBuffer&&he.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&he.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,Ve=!0,zr=!0)}if(k.isSkinnedMesh){he.setOptional(C,k,"bindMatrix"),he.setOptional(C,k,"bindMatrixInverse");const je=k.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),he.setValue(C,"boneTexture",je.boneTexture,R))}k.isBatchedMesh&&(he.setOptional(C,k,"batchingTexture"),he.setValue(C,"batchingTexture",k._matricesTexture,R),he.setOptional(C,k,"batchingIdTexture"),he.setValue(C,"batchingIdTexture",k._indirectTexture,R),he.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&he.setValue(C,"batchingColorTexture",k._colorsTexture,R));const Hr=B.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&Ut.update(k,B,en),(Ve||At.receiveShadow!==k.receiveShadow)&&(At.receiveShadow=k.receiveShadow,he.setValue(C,"receiveShadow",k.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Nn.envMap.value=wt,Nn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Nn.envMapIntensity.value=U.environmentIntensity),Ve&&(he.setValue(C,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&od(Nn,zr),rt&&z.fog===!0&&ut.refreshFogUniforms(Nn,rt),ut.refreshMaterialUniforms(Nn,z,V,X,u.state.transmissionRenderTarget[b.id]),dr.upload(C,El(At),Nn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(dr.upload(C,El(At),Nn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&he.setValue(C,"center",k.center),he.setValue(C,"modelViewMatrix",k.modelViewMatrix),he.setValue(C,"normalMatrix",k.normalMatrix),he.setValue(C,"modelMatrix",k.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const je=z.uniformsGroups;for(let Gr=0,cd=je.length;Gr<cd;Gr++){const Al=je[Gr];I.update(Al,en),I.bind(Al,en)}}return en}function od(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ld(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,B){kt.get(b.texture).__webglTexture=U,kt.get(b.depthTexture).__webglTexture=B;const z=kt.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const B=kt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){A=b,L=U,T=B;let z=!0,k=null,rt=!1,ft=!1;if(b){const wt=kt.get(b);if(wt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(wt.__hasExternalTextures)R.rebindTextures(b,kt.get(b.texture).__webglTexture,kt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&kt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ft=!0);const Lt=kt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?k=Lt[U][B]:k=Lt[U],rt=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?k=kt.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?k=Lt[B]:k=Lt,_.copy(b.viewport),w.copy(b.scissor),O=b.scissorTest}else _.copy(et).multiplyScalar(V).floor(),w.copy(tt).multiplyScalar(V).floor(),O=pt;if(Rt.bindFramebuffer(C.FRAMEBUFFER,k)&&z&&Rt.drawBuffers(b,k),Rt.viewport(_),Rt.scissor(w),Rt.setScissorTest(O),rt){const wt=kt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,B)}else if(ft){const wt=kt.get(b.texture),Pt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,wt.__webglTexture,B||0,Pt)}P=-1},this.readRenderTargetPixels=function(b,U,B,z,k,rt,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Rt.bindFramebuffer(C.FRAMEBUFFER,Mt);try{const wt=b.texture,Pt=wt.format,Lt=wt.type;if(!Gt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&B>=0&&B<=b.height-k&&C.readPixels(U,B,z,k,Ot.convert(Pt),Ot.convert(Lt),rt)}finally{const wt=A!==null?kt.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(C.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,z,k,rt,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const wt=b.texture,Pt=wt.format,Lt=wt.type;if(!Gt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-z&&B>=0&&B<=b.height-k){Rt.bindFramebuffer(C.FRAMEBUFFER,Mt);const Tt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Tt),C.bufferData(C.PIXEL_PACK_BUFFER,rt.byteLength,C.STREAM_READ),C.readPixels(U,B,z,k,Ot.convert(Pt),Ot.convert(Lt),0);const Jt=A!==null?kt.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(C.FRAMEBUFFER,Jt);const ne=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await nf(C,ne,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Tt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,rt),C.deleteBuffer(Tt),C.deleteSync(ne),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const z=Math.pow(2,-B),k=Math.floor(b.image.width*z),rt=Math.floor(b.image.height*z),ft=U!==null?U.x:0,Mt=U!==null?U.y:0;R.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ft,Mt,k,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,z=null,k=0){b.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],U=arguments[2],k=arguments[3]||0,B=null);let rt,ft,Mt,wt,Pt,Lt;B!==null?(rt=B.max.x-B.min.x,ft=B.max.y-B.min.y,Mt=B.min.x,wt=B.min.y):(rt=b.image.width,ft=b.image.height,Mt=0,wt=0),z!==null?(Pt=z.x,Lt=z.y):(Pt=0,Lt=0);const Tt=Ot.convert(U.format),Jt=Ot.convert(U.type);R.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const ne=C.getParameter(C.UNPACK_ROW_LENGTH),ae=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ge=C.getParameter(C.UNPACK_SKIP_PIXELS),jt=C.getParameter(C.UNPACK_SKIP_ROWS),At=C.getParameter(C.UNPACK_SKIP_IMAGES),we=b.isCompressedTexture?b.mipmaps[k]:b.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,we.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,we.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Mt),C.pixelStorei(C.UNPACK_SKIP_ROWS,wt),b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,k,Pt,Lt,rt,ft,Tt,Jt,we.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,k,Pt,Lt,we.width,we.height,Tt,we.data):C.texSubImage2D(C.TEXTURE_2D,k,Pt,Lt,rt,ft,Tt,Jt,we),C.pixelStorei(C.UNPACK_ROW_LENGTH,ne),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,At),k===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,z=null,k=0){b.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,b=arguments[2],U=arguments[3],k=arguments[4]||0);let rt,ft,Mt,wt,Pt,Lt,Tt,Jt,ne;const ae=b.isCompressedTexture?b.mipmaps[k]:b.image;B!==null?(rt=B.max.x-B.min.x,ft=B.max.y-B.min.y,Mt=B.max.z-B.min.z,wt=B.min.x,Pt=B.min.y,Lt=B.min.z):(rt=ae.width,ft=ae.height,Mt=ae.depth,wt=0,Pt=0,Lt=0),z!==null?(Tt=z.x,Jt=z.y,ne=z.z):(Tt=0,Jt=0,ne=0);const Ge=Ot.convert(U.format),jt=Ot.convert(U.type);let At;if(U.isData3DTexture)R.setTexture3D(U,0),At=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),At=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const we=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),en=C.getParameter(C.UNPACK_SKIP_PIXELS),_i=C.getParameter(C.UNPACK_SKIP_ROWS),Ve=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Lt),b.isDataTexture||b.isData3DTexture?C.texSubImage3D(At,k,Tt,Jt,ne,rt,ft,Mt,Ge,jt,ae.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(At,k,Tt,Jt,ne,rt,ft,Mt,Ge,ae.data):C.texSubImage3D(At,k,Tt,Jt,ne,rt,ft,Mt,Ge,jt,ae),C.pixelStorei(C.UNPACK_ROW_LENGTH,we),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,en),C.pixelStorei(C.UNPACK_SKIP_ROWS,_i),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ve),k===0&&U.generateMipmaps&&C.generateMipmap(At),Rt.unbindTexture()},this.initRenderTarget=function(b){kt.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,Rt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ko?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Cr?"display-p3":"srgb"}}class Zh extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jh extends Te{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class is extends xn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new N,S=new N,L=new N;for(let T=0;T<e.length;T+=3)p(e[T+0],x),p(e[T+1],S),p(e[T+2],L),l(x,S,L,y)}function l(y,x,S,L){const T=L+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const H=y.clone().lerp(S,P/T),_=x.clone().lerp(S,P/T),w=T-P;for(let O=0;O<=w;O++)O===0&&P===T?A[P][O]=H:A[P][O]=H.clone().lerp(_,O/w)}for(let P=0;P<T;P++)for(let H=0;H<2*(T-P)-1;H++){const _=Math.floor(H/2);H%2===0?(d(A[P][_+1]),d(A[P+1][_]),d(A[P][_])):(d(A[P][_+1]),d(A[P+1][_+1]),d(A[P+1][_]))}}function c(y){const x=new N;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(y),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){const y=new N;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const S=u(y)/2/Math.PI+.5,L=m(y)/Math.PI+.5;a.push(S,1-L)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){const x=a[y+0],S=a[y+2],L=a[y+4],T=Math.max(x,S,L),A=Math.min(x,S,L);T>.9&&A<.1&&(x<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,x){const S=y*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function g(){const y=new N,x=new N,S=new N,L=new N,T=new Bt,A=new Bt,P=new Bt;for(let H=0,_=0;H<r.length;H+=9,_+=6){y.set(r[H+0],r[H+1],r[H+2]),x.set(r[H+3],r[H+4],r[H+5]),S.set(r[H+6],r[H+7],r[H+8]),T.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),L.copy(y).add(x).add(S).divideScalar(3);const w=u(L);v(T,_+0,y,w),v(A,_+2,x,w),v(P,_+4,S,w)}}function v(y,x,S,L){L<0&&y.x===1&&(a[x]=y.x-1),S.x===0&&S.z===0&&(a[x]=L/2/Math.PI+.5)}function u(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.vertices,t.indices,t.radius,t.details)}}class el extends is{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new el(t.radius,t.detail)}}class nl extends is{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nl(t.radius,t.detail)}}class il extends is{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new il(t.radius,t.detail)}}class sl extends is{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sl(t.radius,t.detail)}}class vv extends Ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qh extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _v extends Qh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new ce,bc=new N,wc=new N;class xv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class yv extends xv{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mv extends Qh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new yv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);const Sv=new Vt(16777215);class bv{constructor(t,{rotates:e=!1,flashTime:n=.12}={}){this.root=new _s,t.add(this.root),this.rotates=e,this.flashTime=n,this.flashMats=[],this.bar=null}makeFlashable(t=this.root){t.traverse(e=>{!e.isMesh||!e.material||e.material.__noFlash||(e.material=e.material.clone(),e.material.emissive&&(e.material.userData.baseEmissive=e.material.emissive.getHex(),this.flashMats.push(e.material)))})}setHealthBar(t){return this.bar=t,t}sync(t,e,n,s){this.root.position.lerpVectors(t.prevPos,t.pos,n),this.rotates&&(this.root.rotation.y=ud(t.prevFacing,t.facing,n)),this.animate(e,t),this.paint(t,s)}snap(t,e,n){this.root.position.copy(t.pos),this.rotates&&(this.root.rotation.y=t.facing),this.animate(e,t),this.paint(t,n)}animate(t,e){}paint(t,e){if(this.flashMats.length){const n=t.flash>0?t.flash/this.flashTime:0,s=t.viewTint?t.viewTint():null;for(const r of this.flashMats)r.emissive.setHex(s??r.userData.baseEmissive),n>0&&r.emissive.lerp(Sv,n*.9)}this.bar&&(this.bar.setFraction(t.maxHp?t.hp/t.maxHp:0),e&&this.bar.face(e))}dispose(){var t;(t=this.bar)==null||t.dispose(),this.root.removeFromParent();for(const e of this.flashMats)e.dispose();this.flashMats.length=0}}function wv(i,t,{key:e="config",log:n=!0}={}){return t}const Ev={sim:{hz:20},camera:{viewUnits:14,minViewUnits:1.5,maxViewUnits:90,zoomStep:1.12,panMargin:6},grid:{unitPx:140,kind:"square",color:857106,opacity:.34,lineWidth:.9,perUnit:5,unitLabel:"sq",distanceLabel:"ft"},tokens:{defaultSize:1,minSize:.25,maxSize:12,defaultBorder:5219203,slide:{speed:9,min:.2,max:.75},ring:.07,originAlpha:.26,originRingAlpha:.7,layerGap:.002,arrow:{length:.17,gap:.05,alpha:.92,edgeAlpha:.6}},ruler:{color:15923188,widthPx:2.4,dashPx:11,duty:.58,alpha:.85},assets:{maxEdge:2560,quality:.86,maxBytes:48*1024*1024},multiplayer:{appId:"vtt-tabletop",maxPlayers:8,ghostHz:20}},It=wv(void 0,Ev),tu=1,Qe="gm",Yn="player",So=["bg","token","gm"];function eu(){return{v:tu,seq:0,nid:1,scenes:{},sceneOrder:[],activeScene:null,assets:{},roster:{},chat:[]}}function Bi(i,t){return`${t}_${i.nid++}`}function Tv(i,t="Untitled scene"){return{id:i,name:t,map:null,artW:0,artH:0,grid:{kind:"square",snap:"soft",magnet:.12,measure:"chebyshev",unitLabel:"sq",distanceLabel:"ft",unitPx:140,ox:0,oy:0,color:857106,opacity:.34,perUnit:5},tokens:{},tokenOrder:[],blocks:[],fx:Vi()}}const nu=["rain","snow","fog","embers"],Mr=12,rl=["fade","swirl","curtain","drapes","ink","burn","freeze"];function Vi(){return{weather:null,intensity:.6,darkness:0,blackout:!1,transition:"fade"}}function Av(i,t={}){return{id:i,asset:null,name:"",x:0,y:0,size:1,rot:0,facing:null,shape:"circle",border:5219203,tint:16777215,layer:"token",owner:"",hp:0,maxHp:0,hidden:!1,light:!1,lightRange:2,...t}}function Sr(i,t,{role:e=Yn,color:n=6535316}={}){return{peerId:i,name:t,role:e,color:n,tokens:[]}}function Ee(i){return i.activeScene&&i.scenes[i.activeScene]||null}function Rv(i,{isGm:t=!0}={}){const e=Ee(i);if(!e)return[];const n=[];for(const s of e.tokenOrder){const r=e.tokens[s];r&&(r.hidden&&!t||r.layer==="gm"&&!t||n.push(r))}return n}const Cv={x0:0,y0:0,x1:16,y1:10};function bo(i){if(!i||!i.artW||!i.artH)return{...Cv};const t=i.grid.unitPx||1;return{x0:-i.grid.ox/t,y0:-i.grid.oy/t,x1:(i.artW-i.grid.ox)/t,y1:(i.artH-i.grid.oy)/t}}function wo(i){var t,e;if(!i||typeof i!="object")return eu();for(const n of Object.values(i.scenes||{}))typeof((t=n.grid)==null?void 0:t.snap)=="boolean"&&(n.grid.snap=n.grid.snap?"grid":"off"),typeof((e=n.grid)==null?void 0:e.magnet)!="number"&&(n.grid.magnet=.12),(!n.fx||typeof n.fx!="object")&&(n.fx=Vi()),typeof n.fx.intensity!="number"&&(n.fx.intensity=Vi().intensity),rl.includes(n.fx.transition)||(n.fx.transition="fade"),Array.isArray(n.blocks)||(n.blocks=[]);return i.v=tu,i}function Ni(i,t,e,{isGm:n=!0}={}){const s=Ee(i);if(!s)return null;for(let r=s.tokenOrder.length-1;r>=0;r--){const a=s.tokens[s.tokenOrder[r]];if(!a||(a.hidden||a.layer==="gm")&&!n)continue;const o=Math.max(.05,a.size)/2,l=t-a.x,c=e-a.y;if(a.shape==="square"?Math.abs(l)<=o&&Math.abs(c)<=o:l*l+c*c<=o*o)return a}return null}const Eo=[2,4,6,8,10,12,20,100],fn={dice:30,terms:8,modifier:1e3,expr:64,note:60,input:256};function Ec(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim().toLowerCase().replace(/\s*([+-])\s*/g,"$1");if(!t)throw new Error("Type a roll, like 2d6+3.");if(/\s/.test(t))throw new Error(`Cannot read "${i.trim()}".`);if(t.length>fn.expr)throw new Error("That roll is too long.");const e=[],n=/([+-]?)(?:(\d*)d(\d+|%)(?:k([hl])(\d+))?|(\d+))/y;let s=0,r=0;for(;s<t.length;){n.lastIndex=s;const a=n.exec(t);if(!a||e.length&&!a[1])throw new Error(`Cannot read "${i.trim()}".`);s=n.lastIndex;const o=a[1]==="-"?-1:1;if(a[6]!==void 0){const f=Number(a[6]);if(f>fn.modifier)throw new Error(`${f} is a big modifier.`);e.push({flat:f,sign:o});continue}const l=a[2]===""?1:Number(a[2]),c=a[3]==="%"?100:Number(a[3]);if(!Eo.includes(c))throw new Error(`There is no d${c}. Try ${Eo.map(f=>`d${f}`).join(", ")}.`);if(l<1)throw new Error("Roll at least one die.");if(r+=l,r>fn.dice)throw new Error(`At most ${fn.dice} dice at once.`);let h=null;if(a[4]){const f=Number(a[5]);if(f<1||f>l)throw new Error(`Cannot keep ${f} of ${l}.`);h={high:a[4]==="h",n:f}}e.push({count:l,sides:c,keep:h,sign:o})}if(e.length>fn.terms)throw new Error("Too many parts to that roll.");if(!e.some(a=>a.sides))throw new Error("There are no dice in that.");return e}function Lr(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim();if(!t)throw new Error("Type a roll, like 2d6+3.");if(t.length>fn.input)throw new Error("That roll is too long.");const e=t.split(/\s+/);for(let n=e.length;n>=1;n--){let s;try{s=Ec(e.slice(0,n).join(" "))}catch{continue}return{terms:s,note:Pv(e.slice(n).join(" "))}}throw Ec(e[0]),new Error(`Cannot read "${t}".`)}function Pv(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,fn.note)}function iu(i){return i.map((t,e)=>{const n=t.sign<0?"-":e?"+":"";if(t.flat!==void 0)return`${n}${t.flat}`;const s=t.keep?`k${t.keep.high?"h":"l"}${t.keep.n}`:"";return`${n}${t.count}d${t.sides===100?"%":t.sides}${s}`}).join("")}function Tc(i,t,{id:e,by:n,hidden:s=!1}){const{terms:r,note:a}=Lr(t),o=i.count,l=[];let c=0;for(const d of r){if(d.flat!==void 0){c+=d.sign*d.flat;continue}const p=[];for(let g=0;g<d.count;g++)p.push({sides:d.sides,value:i.int(1,d.sides),kept:!0,sign:d.sign});if(d.keep){const g=p.map((u,m)=>m).sort((u,m)=>(d.keep.high?p[m].value-p[u].value:p[u].value-p[m].value)||u-m),v=new Set(g.slice(0,d.keep.n));p.forEach((u,m)=>{u.kept=v.has(m)})}l.push(...p)}const h=i.int(1,2147483647),f=l.reduce((d,p)=>d+(p.kept?p.sign*p.value:0),0)+c;return{id:e,by:n,expr:iu(r),...a?{note:a}:{},...s?{hidden:!0}:{},dice:l,mod:c,total:f,from:o,draws:i.count-o,throw:h}}function Lv(i){return!i||typeof i!="object"||typeof i.id!="string"||!Array.isArray(i.dice)||i.dice.length<1||i.dice.length>fn.dice||i.note!==void 0&&(typeof i.note!="string"||i.note.length>fn.note)?!1:i.dice.every(t=>Eo.includes(t.sides)&&Number.isInteger(t.value)&&t.value>=1&&t.value<=t.sides)}const Ji={keep:200,text:300};function su(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,Ji.text)}function Iv(i){return!!i&&typeof i=="object"&&typeof i.id=="string"&&i.id.length<=64&&typeof i.by=="string"&&i.by.length<=64&&typeof i.text=="string"&&i.text.length>0&&i.text.length<=Ji.text&&(i.at===void 0||Number.isFinite(i.at))}function Ac(i){i.length>Ji.keep&&i.splice(0,i.length-Ji.keep)}const al="square",ol="hex-pointy",Ls="hex-flat",ss="none",ru=[al,ol,Ls,ss],Dv="off",au="soft",ou="grid",Uv=[Dv,au,ou],Nv=.5,br=Nv/(Math.sqrt(3)/2);function Ir(i){return i===ol||i===Ls}function kv(i,t,e,n=1){if(!e||e.kind===ss)return[i,t];if(Ir(e.kind)){const[r,a]=lu(i,t,e.kind);return[r,a]}return Math.round(n)%2===1||n<1?[Math.floor(i)+.5,Math.floor(t)+.5]:[Math.round(i),Math.round(t)]}function Fv(i,t,e,n=.12){if(!e||e.kind===ss||!(n>0))return[i,t];if(Ir(e.kind)){const[r,a]=lu(i,t,e.kind);return Math.hypot(i-r,t-a)<=n?[r,a]:[i,t]}const s=r=>{const a=Math.round(r*2)/2;return Math.abs(r-a)<=n?a:r};return[s(i),s(t)]}function ll(i,t,e,n=1){return(e==null?void 0:e.snap)===ou?kv(i,t,e,n):(e==null?void 0:e.snap)===au?Fv(i,t,e,e.magnet):[i,t]}function Ov(i,t,e,n,s,r="euclid"){if(Ir(s==null?void 0:s.kind))return Hv(i,t,e,n,s.kind);const a=Math.abs(e-i),o=Math.abs(n-t);if(r==="chebyshev")return Math.max(a,o);if(r==="alternating"){const l=Math.min(a,o);return Math.max(a,o)-l+Math.floor(l)+Math.floor(l/2)+l%1}return Math.hypot(a,o)}function Bv(i,t,e,n,s){const r=!s||s.kind===ss,a=Ov(i,t,e,n,s,s==null?void 0:s.measure),o=Math.round(a*10)/10,l=Number.isInteger(o)?String(o):o.toFixed(1),c=r?o===1?"unit":"units":s.unitLabel||"sq",h=Math.round(a*((s==null?void 0:s.perUnit)??5)),f=(s==null?void 0:s.distanceLabel)??"ft";return{distance:a,text:f?`${l} ${c} · ${h} ${f}`:`${l} ${c}`}}function To(i,t,e){const[n,s]=e===Ls?[t,i]:[i,t],r=(Math.sqrt(3)/3*n-s/3)/br,a=2/3*s/br;return[r,a]}function zv(i,t,e){const n=br*(Math.sqrt(3)*i+Math.sqrt(3)/2*t),s=br*(3/2*t);return e===Ls?[s,n]:[n,s]}function Ao(i,t){const e=-i-t;let n=Math.round(i),s=Math.round(t);const r=Math.round(e),a=Math.abs(n-i),o=Math.abs(s-t),l=Math.abs(r-e);return a>o&&a>l?n=-s-r:o>l&&(s=-n-r),[n,s]}function lu(i,t,e){const[n,s]=Ao(...To(i,t,e));return zv(n,s,e)}function Hv(i,t,e,n,s){const[r,a]=Ao(...To(i,t,s)),[o,l]=Ao(...To(e,n,s)),c=r-o,h=a-l;return(Math.abs(c)+Math.abs(h)+Math.abs(c+h))/2}function Gv(i,t,e){const n=/\((\d{1,3})\s*[x×]\s*(\d{1,3})\)/i.exec(i||"");if(!n)return null;const s=+n[1],r=+n[2];if(!(s>1&&r>1))return null;const a=t/s,o=e/r;if(Math.abs(a-o)>1.5)return null;const l=Math.round((a+o)/2);return l<16||l>1024?null:{unitPx:l,ox:0,oy:0,cols:s,rows:r}}const Vv=["wall","mask"],Ro={coords:2e3,perScene:2e3};function cu(i){const t=[];for(const e of(i==null?void 0:i.blocks)||[]){const n=e.pts,s=n.length>>1;for(let r=0;r+1<s;r++)t.push(n[r*2],n[r*2+1],n[r*2+2],n[r*2+3]);e.kind==="mask"&&s>2&&t.push(n[s*2-2],n[s*2-1],n[0],n[1])}return t}function hu(i,t,e,n,s,r,a,o){const l=a-s,c=o-r,h=e*c-n*l;if(Math.abs(h)<1e-12)return 1/0;const f=s-i,d=r-t,p=(f*c-d*l)/h,g=(f*n-d*e)/h;return p>=0&&g>=-1e-9&&g<=1+1e-9?p:1/0}function Co(i,t,e,n,s){const r=n-t,a=s-e;for(let o=0;o<i.length;o+=4){const l=hu(t,e,r,a,i[o],i[o+1],i[o+2],i[o+3]);if(l>1e-6&&l<1-1e-6)return!0}return!1}const Rc=64;function Wv(i,t,e,n){const s=[],r=(n+.01)**2;for(let c=0;c<i.length;c+=4){const h=i[c],f=i[c+1],d=i[c+2],p=i[c+3],g=d-h,v=p-f,u=g*g+v*v,m=u>0?Math.max(0,Math.min(1,((t-h)*g+(e-f)*v)/u)):0,y=h+g*m-t,x=f+v*m-e;y*y+x*x<=r&&s.push(h,f,d,p)}const a=[];for(let c=0;c<Rc;c++)a.push(c/Rc*Math.PI*2-Math.PI);const o=1e-4;for(let c=0;c<s.length;c+=2){const h=Math.atan2(s[c+1]-e,s[c]-t);a.push(h-o,h,h+o)}a.sort((c,h)=>c-h);const l=[];for(const c of a){const h=Math.cos(c),f=Math.sin(c);let d=n;for(let p=0;p<s.length;p+=4){const g=hu(t,e,h,f,s[p],s[p+1],s[p+2],s[p+3]);g<d&&(d=g)}l.push(t+h*d,e+f*d)}return l}function Xv(i,t,e){const n=i.pts,s=n.length>>1;let r=1/0;const a=(o,l,c,h)=>{const f=c-o,d=h-l,p=f*f+d*d,g=p>0?Math.max(0,Math.min(1,((t-o)*f+(e-l)*d)/p)):0;r=Math.min(r,Math.hypot(o+f*g-t,l+d*g-e))};for(let o=0;o+1<s;o++)a(n[o*2],n[o*2+1],n[o*2+2],n[o*2+3]);return i.kind==="mask"&&s>2&&(a(n[s*2-2],n[s*2-1],n[0],n[1]),$v(n,t,e))?0:r}function $v(i,t,e){let n=!1;const s=i.length>>1;for(let r=0,a=s-1;r<s;a=r++){const o=i[r*2],l=i[r*2+1],c=i[a*2],h=i[a*2+1];l>e!=h>e&&t<(c-o)*(e-l)/(h-l)+o&&(n=!n)}return n}function Cc(i){if(!i||typeof i!="object"||!Vv.includes(i.kind)||!Array.isArray(i.pts))return null;const t=i.pts.slice(0,Ro.coords);return t.length%2&&t.pop(),!t.every(e=>typeof e=="number"&&Number.isFinite(e)&&Math.abs(e)<=1e5)||t.length<(i.kind==="mask"?6:4)?null:{kind:i.kind,pts:t.map(e=>Math.round(e*100)/100)}}const qv=new Set(["name","size","rot","facing","shape","border","tint","layer","owner","hp","maxHp","hidden","asset","light","lightRange"]),Yv=new Set(["kind","snap","magnet","measure","unitPx","ox","oy","color","opacity","perUnit","unitLabel","distanceLabel"]);function Pc(i,t){const e={};for(const n of Object.keys(i||{}))t.has(n)&&(e[n]=i[n]);return e}function Lc(i,t){const e={};for(const n of Object.keys(t))e[n]=i[n];return e}const jv={"scene.add":(i,[t={}])=>{const e=t.id||Bi(i,"sc"),n={...Tv(e,t.name),...t,id:e};return i.scenes[e]=n,i.sceneOrder.push(e),i.activeScene||(i.activeScene=e),["scene.del",e]},"scene.del":(i,[t])=>{const e=i.scenes[t];return e?(delete i.scenes[t],i.sceneOrder=i.sceneOrder.filter(n=>n!==t),i.activeScene===t&&(i.activeScene=i.sceneOrder[0]||null),["scene.add",e]):null},"scene.activate":(i,[t])=>{if(!i.scenes[t]||i.activeScene===t)return null;const e=i.activeScene;return i.activeScene=t,["scene.activate",e]},"scene.copy":(i,[t,e])=>{var a;const n=i.scenes[t];if(!n)return null;const s=Dc(i,"sc"),r=JSON.parse(JSON.stringify(n));r.id=s,r.name=typeof e=="string"&&e.trim()?e.trim():`${n.name} (copy)`,r.tokens={},r.tokenOrder=[];for(const o of n.tokenOrder){const l=n.tokens[o];if(!l||((a=i.roster[l.owner])==null?void 0:a.role)===Yn)continue;const c={...JSON.parse(JSON.stringify(l)),id:Dc(i,"tk")};r.tokens[c.id]=c,r.tokenOrder.push(c.id)}return i.scenes[s]=r,i.sceneOrder.splice(i.sceneOrder.indexOf(t)+1,0,s),["scene.del",s]},"scene.go":(i,[t,e=null,n=null])=>{var h;const s=Ee(i),r=i.scenes[t];if(!s||!r||s.id===t)return null;const a=bo(r),o={};let l=0;for(const f of s.tokenOrder.slice()){const d=s.tokens[f];if(!d||((h=i.roster[d.owner])==null?void 0:h.role)!==Yn)continue;o[f]={x:d.x,y:d.y},delete s.tokens[f],s.tokenOrder.splice(s.tokenOrder.indexOf(f),1);const p=d.x>=a.x0&&d.x<=a.x1&&d.y>=a.y0&&d.y<=a.y1,g=(e==null?void 0:e[f])||(p?null:Jv(a,l++));g&&(d.x=g.x,d.y=g.y),r.tokens[f]=d,r.tokenOrder.push(f)}s.fx||(s.fx=Vi()),r.fx||(r.fx=Vi());const c={blackout:r.fx.blackout,transition:r.fx.transition};return r.fx.blackout=s.fx.blackout,r.fx.transition=s.fx.transition,n&&Object.assign(s.fx,n),i.activeScene=t,["scene.go",s.id,o,c]},"scene.rename":(i,[t,e])=>{const n=i.scenes[t];if(!n||n.name===e)return null;const s=n.name;return n.name=e,["scene.rename",t,s]},"scene.map":(i,[t,e,n,s])=>{const r=i.scenes[t];if(!r)return null;const a=["scene.map",t,r.map,r.artW,r.artH];return r.map=e||null,r.artW=n||0,r.artH=s||0,a},"scene.grid":(i,[t,e])=>{const n=i.scenes[t];if(!n)return null;const s=Pc(e,Yv);if(s.kind&&!ru.includes(s.kind)&&delete s.kind,s.snap&&!Uv.includes(s.snap)&&delete s.snap,"magnet"in s&&(s.magnet=Math.min(.25,Math.max(0,+s.magnet||0))),!Object.keys(s).length)return null;const r=Lc(n.grid,s);return Object.assign(n.grid,s),["scene.grid",t,r]},"scene.fx":(i,[t,e])=>{const n=i.scenes[t];if(!n||!e||typeof e!="object")return null;n.fx||(n.fx=Vi());const s={};"weather"in e&&(s.weather=nu.includes(e.weather)?e.weather:null),"darkness"in e&&(s.darkness=Math.round(Math.min(1,Math.max(0,+e.darkness||0))*100)/100),"intensity"in e&&(s.intensity=Math.round(Math.min(1,Math.max(.1,+e.intensity||.1))*100)/100),"blackout"in e&&(s.blackout=!!e.blackout),"transition"in e&&(s.transition=rl.includes(e.transition)?e.transition:"fade");const r=Object.keys(s).filter(o=>n.fx[o]!==s[o]);if(!r.length)return null;const a=Object.fromEntries(r.map(o=>[o,n.fx[o]]));for(const o of r)n.fx[o]=s[o];return["scene.fx",t,a]},"block.add":(i,[t,e,n=null])=>{const s=i.scenes[t],r=Cc(e);if(!s||!r||(s.blocks||(s.blocks=[]),s.blocks.length>=Ro.perScene))return null;const a=typeof e.id=="string"&&e.id&&!s.blocks.some(l=>l.id===e.id)?e.id:Bi(i,"bk"),o=Number.isInteger(n)&&n>=0&&n<=s.blocks.length?n:s.blocks.length;return s.blocks.splice(o,0,{id:a,...r}),["block.del",t,a]},"block.del":(i,[t,e])=>{var a;const n=i.scenes[t],s=((a=n==null?void 0:n.blocks)==null?void 0:a.findIndex(o=>o.id===e))??-1;if(s<0)return null;const[r]=n.blocks.splice(s,1);return["block.add",t,r,s]},"block.set":(i,[t,e])=>{const n=i.scenes[t];if(!n||!Array.isArray(e))return null;const s=n.blocks||[],r=[];for(const a of e.slice(0,Ro.perScene)){const o=Cc(a);if(!o)continue;const l=typeof a.id=="string"&&a.id&&!r.some(c=>c.id===a.id)?a.id:Bi(i,"bk");r.push({id:l,...o})}return!s.length&&!r.length?null:(n.blocks=r,["block.set",t,s])},"tok.add":(i,[t={}])=>{const e=Ee(i);if(!e)return null;const n=t.id||Bi(i,"tk"),s=Av(n,t);return s.id=n,So.includes(s.layer)||(s.layer="token"),e.tokens[n]=s,e.tokenOrder.push(n),["tok.del",n]},"tok.del":(i,[t])=>{const e=Ee(i),n=e==null?void 0:e.tokens[t];if(!n)return null;const s=e.tokenOrder.indexOf(t);return delete e.tokens[t],e.tokenOrder.splice(s,1),["tok.restore",n,s]},"tok.restore":(i,[t,e])=>{const n=Ee(i);return!n||!(t!=null&&t.id)?null:(n.tokens[t.id]=t,n.tokenOrder.splice(Math.min(e??n.tokenOrder.length,n.tokenOrder.length),0,t.id),["tok.del",t.id])},"tok.move":(i,[t,e,n])=>{const s=Ee(i),r=s==null?void 0:s.tokens[t];if(!r||r.x===e&&r.y===n)return null;const a=["tok.move",t,r.x,r.y];return r.x=e,r.y=n,a},"tok.patch":(i,[t,e])=>{const n=Ee(i),s=n==null?void 0:n.tokens[t];if(!s)return null;const r=Pc(e,qv);if(r.layer&&!So.includes(r.layer)&&delete r.layer,"light"in r&&(r.light=!!r.light),"lightRange"in r&&(r.lightRange=Zv(r.lightRange)),!Object.keys(r).length)return null;const a=Lc(s,r);return Object.assign(s,r),["tok.patch",t,a]},"tok.raise":(i,[t,e=!0])=>{const n=Ee(i);if(!(n!=null&&n.tokens[t]))return null;const s=n.tokenOrder.indexOf(t);if(s<0)return null;const r=n.tokenOrder.length-1;if(e?s===r:s===0)return null;const a=n.tokenOrder.slice();return n.tokenOrder.splice(s,1),e?n.tokenOrder.push(t):n.tokenOrder.unshift(t),["tok.order",a]},"tok.order":(i,[t])=>{const e=Ee(i);if(!e)return null;const n=e.tokenOrder.slice();return e.tokenOrder=t.filter(s=>e.tokens[s]),["tok.order",n]},"asset.add":(i,[t])=>!(t!=null&&t.hash)||i.assets[t.hash]?null:(i.assets[t.hash]=t,["asset.del",t.hash]),"asset.del":(i,[t])=>{const e=i.assets[t];return e?(delete i.assets[t],["asset.add",e]):null},"dice.roll":(i,[t])=>Lv(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"roll",...t}),Ac(i.chat),["dice.drop",t.id]):null,"dice.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(a=>a.id===t);if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["dice.roll",r]},"chat.say":(i,[t])=>Iv(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"msg",id:t.id,by:t.by,text:t.text,at:t.at}),Ac(i.chat),["chat.drop",t.id]):null,"chat.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(a=>a.id===t&&a.kind==="msg");if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["chat.say",r]},"peer.join":(i,[t])=>{if(!(t!=null&&t.peerId))return null;const e=i.roster[t.peerId];return i.roster[t.peerId]=t,e?["peer.join",e]:["peer.part",t.peerId]},"peer.part":(i,[t])=>{const e=i.roster[t];return e?(delete i.roster[t],["peer.join",e]):null}};function Kv(i,t){if(!Array.isArray(t)||!t.length)return null;const e=jv[t[0]];if(!e)return null;const n=e(i,t.slice(1));return n&&i.seq++,n}function Dr(i,t,e,n){const s=Ee(i),r=s==null?void 0:s.tokens[t];if(!r)return null;const[a,o]=ll(e,n,s.grid,r.size);return["tok.move",t,Ic(a),Ic(o)]}const Ic=i=>Math.round(i*100)/100;function Zv(i){return Math.min(Mr,Math.max(1,Math.round(+i)||1))}function Jv(i,t){const e=Math.floor((i.x0+i.x1)/2),n=Math.floor((i.y0+i.y1)/2);return{x:e+t%4-2+.5,y:n+Math.floor(t/4)+.5}}function Dc(i,t){const e=s=>!!i.scenes[s]||Object.values(i.scenes).some(r=>r.tokens[s]);let n;do n=Bi(i,t);while(e(n));return n}const Uc=6210279;class cl{constructor({state:t=null,seed:e=null}={}){this.state=t?wo(t):eu(),this.seed=e??cl.newSeed(),this.rng=new Vr(this.seed),this.secretRng=new Vr(Rl(this.seed,Uc)),this.secrets=[],this.events=new dd,this.undoStack=[],this.redoStack=[],this.maxUndo=200,this.simTime=0,this.leases=new Map,this.said=0}static newSeed(){return Math.random()*4294967296>>>0}get scene(){return Ee(this.state)}get seq(){return this.state.seq}dispatch(t,{record:e=!0}={}){const n=this.applyOne(t);return n?(e&&(this.undoStack.push(n),this.undoStack.length>this.maxUndo&&this.undoStack.shift(),this.redoStack.length=0),this.events.emit("table.changed",[t[0],this.state.seq]),n):null}batch(t){const e=[];for(const n of t){const s=this.applyOne(n);s&&e.push(s)}return e.length?(this.undoStack.push(["batch",e.reverse()]),this.redoStack.length=0,this.events.emit("table.changed",["batch",this.state.seq]),e):null}applyOne(t){const e=Kv(this.state,t);return e&&this.events.emitRemote("op",[t,this.state.seq]),e}load(t){this.state=wo(t),this.secrets=[],this.undoStack.length=0,this.redoStack.length=0,this.leases.clear(),this.events.emitLocal("table.changed",["load",this.state.seq])}undo(){return this.flip(this.undoStack,this.redoStack)}redo(){return this.flip(this.redoStack,this.undoStack)}flip(t,e){const n=t.pop();if(!n)return null;const s=n[0]==="batch"?n[1].map(r=>this.applyOne(r)).filter(Boolean).reverse():this.applyOne(n);return s?(e.push(n[0]==="batch"?["batch",s]:s),this.events.emit("table.changed",[n[0],this.state.seq]),n):null}claim(t,e,n=6){const s=this.leases.get(t);return s&&s.by!==e&&s.until>this.simTime?!1:(this.leases.set(t,{by:e,until:this.simTime+n}),!0)}release(t,e){const n=this.leases.get(t);n&&n.by===e&&this.leases.delete(t)}heldBy(t){const e=this.leases.get(t);return e&&e.until>this.simTime?e.by:null}step(t){if(this.simTime+=t,this.leases.size)for(const[e,n]of this.leases)n.until<=this.simTime&&this.leases.delete(e)}rollDice(t,e,{hidden:n=!1}={}){const s=`r_${this.seed.toString(36)}_${this.rng.count}`,r=Tc(this.rng,t,{id:s,by:e,hidden:n});return this.dispatch(["dice.roll",r],{record:!1}),r}rollSecret(t,e,n){var a;const s=`s_${this.seed.toString(36)}_${this.secretRng.count}`,r={...Tc(this.secretRng,t,{id:s,by:e,hidden:!0}),at:n,after:((a=this.feed().at(-1))==null?void 0:a.id)??null};return this.secrets.push(r),this.secrets.length>Ji.keep&&this.secrets.shift(),r}restoreSecrets(t,e){this.secretRng=new Vr(Rl(this.seed,Uc)),e&&this.secretRng.setState(e),this.secrets=Array.isArray(t)?t:[]}feedWithSecrets(){const t=this.feed();if(!this.secrets.length)return t;const e=new Set(t.map(r=>r.id)),n=[],s=r=>{for(const a of this.secrets)a.after===r&&n.push({kind:"roll",...a})};for(const r of this.secrets)r.after!==null&&!e.has(r.after)&&n.push({kind:"roll",...r});s(null);for(const r of t)n.push(r),s(r.id);return n}rolls(){return(this.state.chat||[]).filter(t=>t.kind==="roll")}say(t,e,n){const s=su(e);if(!s)return!1;const r=`m_${this.seed.toString(36)}_${this.said++}`;return this.dispatch(["chat.say",{id:r,by:t,text:s,at:Number.isFinite(n)?n:void 0}],{record:!1}),!0}feed(){return this.state.chat||[]}id(t){return Bi(this.state,t)}snapshot(){return JSON.parse(JSON.stringify(this.state))}}const Qv="vtt",t_=1;let fs=null;function e_(){return fs||(fs=new Promise((i,t)=>{let e;try{e=indexedDB.open(Qv,t_)}catch(n){t(n);return}e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains("tables")||n.createObjectStore("tables",{keyPath:"id"}),n.objectStoreNames.contains("assets")||n.createObjectStore("assets",{keyPath:"hash"})},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}).catch(i=>(console.warn("[db] storage unavailable; tables will not be kept",i),fs=null,null)),fs)}async function rs(i,t,e,n=null){const s=await e_();return s?new Promise(r=>{let a;try{a=s.transaction(i,t)}catch{r(n);return}const o=e(a.objectStore(i));a.oncomplete=()=>r(o?o.result:!0),a.onerror=()=>r(n),a.onabort=()=>r(n)}):n}async function n_(){return(await rs("tables","readonly",t=>t.getAll(),[])||[]).map(({id:t,name:e,code:n,savedAt:s,tokens:r})=>({id:t,name:e,code:n,savedAt:s,tokens:r})).sort((t,e)=>e.savedAt-t.savedAt)}function uu(i){return rs("tables","readonly",t=>t.get(i))}function du(i){return rs("tables","readwrite",t=>t.put(i),!1)}function i_(i){return rs("tables","readwrite",t=>t.delete(i),!1)}function Nc(i,t){return rs("assets","readwrite",e=>e.put({hash:i,blob:t}),!1)}async function s_(i){const t=await rs("assets","readonly",e=>e.get(i));return(t==null?void 0:t.blob)||null}class r_{constructor(){this.blobs=new Map,this.bitmaps=new Map,this.pending=new Map}has(t){return this.blobs.has(t)}async put(t){return this.blobs.set(t.hash,t.blob),this.bitmaps.delete(t.hash),Nc(t.hash,t.blob),t.hash}async putBytes(t,e){return this.blobs.set(t,e),this.bitmaps.delete(t),Nc(t,e),t}async restore(t){const e=[];return await Promise.all(t.map(async n=>{if(this.blobs.has(n))return;const s=await s_(n);s?this.blobs.set(n,s):e.push(n)})),e}async blob(t){return this.blobs.get(t)||null}async bitmap(t){if(!t)return null;const e=this.bitmaps.get(t);if(e)return e;const n=this.pending.get(t);if(n)return n;const s=this.blobs.get(t);if(!s)return null;const r=createImageBitmap(s,{imageOrientation:"flipY"}).then(a=>(this.bitmaps.set(t,a),this.pending.delete(t),a)).catch(()=>(this.pending.delete(t),null));return this.pending.set(t,r),r}missing(t){const e=new Set;for(const n of Object.values(t.scenes||{})){n.map&&e.add(n.map);for(const s of Object.values(n.tokens||{}))s.asset&&e.add(s.asset)}return[...e].filter(n=>!this.blobs.has(n))}trimBitmaps(t){var n;const e=new Set;for(const s of Object.values(t.scenes||{})){s.map&&e.add(s.map);for(const r of Object.values(s.tokens||{}))r.asset&&e.add(r.asset)}for(const[s,r]of this.bitmaps)e.has(s)||((n=r.close)==null||n.call(r),this.bitmaps.delete(s))}}const a_=1200,Is={minPeriod:12,maxPeriod:400,samples:600,scales:[1,2,3],minConfidence:.35};function o_(i,t,e){const n=new Float32Array(t*e);for(let s=0,r=0;s<n.length;s++,r+=4)n[s]=.299*i[r]+.587*i[r+1]+.114*i[r+2];return n}function l_(i,t,e,n,s={}){const{samples:r,scale:a=2}={...Is,...s},o=n===0?t:e,l=n===0?e:t,c=new Float64Array(o),h=Math.max(1,Math.floor(l/r)),f=n===0?(d,p)=>i[p*t+d]:(d,p)=>i[d*t+p];for(let d=0;d<l;d+=h)for(let p=a;p<o-a;p++)c[p]+=2*f(p,d)-f(p-a,d)-f(p+a,d);return c}function fu(i,t){const e=i.length,s=Math.max(3,t|1)>>1,r=new Float64Array(e);let a=0;for(let c=0;c<Math.min(s,e);c++)a+=i[c];let o=0,l=Math.min(s,e)-1;for(let c=0;c<e;c++){for(;l<Math.min(e-1,c+s);)a+=i[++l];for(;o<Math.max(0,c-s);)a-=i[o++];r[c]=i[c]-a/(l-o+1)}return r}function c_(i,t=1.6){let e=0;for(let r=0;r<i.length;r++)e+=i[r]*i[r];const n=t*Math.sqrt(e/Math.max(1,i.length));if(!(n>0))return i;const s=new Float64Array(i.length);for(let r=0;r<i.length;r++)s[r]=Math.max(-n,Math.min(n,i[r]));return s}function h_(i,t){const e=i.length-t;if(e<t*2)return 0;let n=0,s=0,r=0;for(let o=0;o<e;o++){const l=i[o],c=i[o+t];n+=l*c,s+=l*l,r+=c*c}const a=Math.sqrt(s*r);return a>0?n/a:0}function u_(i,t={}){const{minPeriod:e,maxPeriod:n}={...Is,...t},s=Math.min(n,Math.floor(i.length/3));if(s<=e)return{period:0,score:0,prominence:0};const r=new Float64Array(s+2);for(let S=e;S<=s;S++)r[S]=h_(i,S);const a=s-e+1,o=fu(r.subarray(e,s+1),Math.max(11,Math.round(a/6))),l=S=>S>=e&&S<=s?o[S-e]:-1/0;let c=e;for(let S=e;S<=s;S++)l(S)>l(c)&&(c=S);if(l(c)<=0)return{period:0,score:0,prominence:0};let h=0,f=0;for(let S=0;S<a;S++)h+=o[S],f+=o[S]*o[S];const d=h/a,p=Math.sqrt(Math.max(0,f/a-d*d)),g=p>0?(l(c)-d)/p:0,v=l(c-1),u=l(c),m=l(c+1),y=Number.isFinite(v)&&Number.isFinite(m)?v-2*u+m:0,x=y!==0?Math.max(-.5,Math.min(.5,.5*(v-m)/y)):0;return{period:c+x,score:r[c],prominence:g}}function d_(i,t,e){let n=0,s=0;for(let r=e;r<i.length-1;r+=t)n+=i[Math.round(r)],s++;return s<=2?0:Math.abs(n)/Math.sqrt(s)}function f_(i,t,e){let n=0,s=0,r=0;for(let l=e;l<i.length-1;l+=t,r++)r%2?s+=i[Math.round(l)]:n+=i[Math.round(l)];const a=Math.min(Math.abs(n),Math.abs(s)),o=Math.max(Math.abs(n),Math.abs(s));return o>0?a/o:0}function p_(i,t,e=.04){let n={period:t,offset:0,score:-1/0};const s=(o,l,c,h,f,d)=>{for(let p=o;p<=l;p+=c){const g=f===null?p:f;for(let v=h;v<g;v+=d){const u=d_(i,p,v);u>n.score&&(n={period:p,offset:v,score:u})}}};s(t*(1-e),t*(1+e),Math.max(.25,t/150),0,null,1);const r=n.period,a=n.offset;return s(r*.995,r*1.005,Math.max(.01,r/4e3),Math.max(0,a-1.5),a+1.5,.2),n}function m_(i,t,e,n={}){const s={...Is,...n},r=Math.min(s.maxPeriod,Math.floor(Math.max(t,e)/8),Math.floor(Math.min(t,e)/2.5)),a={...s,maxPeriod:r},o=[];for(const T of[0,1])for(const A of s.scales){const P=fu(l_(i,t,e,T,{...a,scale:A}),r*2),H=c_(P),_=u_(H,a);_.period>0&&o.push({..._,axis:T,scale:A,sig:H,raw:P})}const l={unitPx:0,ox:0,oy:0,confidence:0,readings:o.length,agreed:0,periods:[]};if(o.length<2)return l;const c=[];for(const T of o)for(const A of[1,2])for(let P=1;P<=6;P++){const H=T.period*A/P;H<s.minPeriod||H>r*2||c.some(_=>Math.abs(_-H)/H<.02)||c.push(H)}if(!c.length)return l;const h=T=>{const A=o.map(H=>p_(H.sig,T,.02)),P=A.reduce((H,_,w)=>H+_.score*f_(o[w].raw,_.period,_.offset),0);return{period:T,fits:A,total:P}};let f=null;for(const T of c){const A=h(T);(!f||A.total>f.total)&&(f=A)}const d=T=>f.fits.filter((P,H)=>o[H].axis===T).reduce((P,H)=>H.score>P.score?H:P),p=d(0),g=d(1),v=(p.period+g.period)/2,u=T=>[1,2,3,4].some(A=>Math.abs(T.period*A-v)/v<.03||Math.abs(T.period/A-v)/v<.03),m=o.filter(u),y=new Set(m.map(T=>T.axis)),x=(m.length-1)/(o.length-1),S=m.length?1-Math.exp(-(m.reduce((T,A)=>T+A.prominence,0)/m.length)/5):0,L=Math.max(0,x*S*(y.size===2?1:0));return{unitPx:v,ox:(p.offset%v+v)%v,oy:(g.offset%v+v)%v,confidence:L,readings:o.length,agreed:m.length,periods:o.map(T=>Math.round(T.period*100)/100)}}async function Ur(i){const t=await crypto.subtle.digest("SHA-256",i);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function pu(i){var d,p;const t=It.assets;if(i.size>t.maxBytes)throw new Error(`${i.name} is ${kc(i.size)}MB — the limit is ${kc(t.maxBytes)}MB`);let e;try{e=await createImageBitmap(i)}catch{throw new Error(`${i.name} is not an image the browser can decode`)}const n=e.width,s=e.height,r=Math.max(n,s);let a=i,o=i.type||"image/png",l=!1;if(r>t.maxEdge){const g=t.maxEdge/r,v=Math.max(1,Math.round(n*g)),u=Math.max(1,Math.round(s*g)),m=await g_(e,v,u,t.quality);(d=e.close)==null||d.call(e),e=await createImageBitmap(m),a=m,o=m.type||"image/webp",l=!0}const c=await a.arrayBuffer(),h=await Ur(c),f=await mu(e,n);return(p=e.close)==null||p.call(e),{hash:h,name:i.name,mime:o,w:n,h:s,size:c.byteLength,scaled:l,bytes:c,blob:a,detected:f}}async function g_(i,t,e,n){if(typeof OffscreenCanvas=="function"){const a=new OffscreenCanvas(t,e),o=a.getContext("2d");return o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(i,0,0,t,e),a.convertToBlob({type:"image/webp",quality:n})}const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");return r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(i,0,0,t,e),new Promise((a,o)=>{s.toBlob(l=>l?a(l):o(new Error("could not re-encode the image")),"image/webp",n)})}function kc(i){return(i/1048576).toFixed(1)}async function v_(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`Could not read ${t} (${e.status})`);const n=await e.blob();return new File([n],t,{type:n.type||"image/jpeg"})}async function __(){try{const i=await fetch("maps/index.json");if(!i.ok)return[];const{maps:t}=await i.json();return Array.isArray(t)?t:[]}catch{return[]}}async function mu(i,t){const e=Math.min(1,a_/i.width),n=Math.max(1,Math.round(i.width*e)),s=Math.max(1,Math.round(i.height*e)),r=await x_(i,n,s);if(!r)return null;const a=m_(o_(r,n,s),n,s);if(!a.unitPx)return null;const o=t/n;return{unitPx:a.unitPx*o,ox:a.ox*o,oy:a.oy*o,confidence:a.confidence,agreed:a.agreed,readings:a.readings}}async function x_(i,t,e){try{const s=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(t,e):Object.assign(document.createElement("canvas"),{width:t,height:e})).getContext("2d",{willReadFrequently:!0});return s.drawImage(i,0,0,t,e),s.getImageData(0,0,t,e).data}catch{return null}}function gu(i){const{hash:t,name:e,mime:n,w:s,h:r,size:a,scaled:o}=i;return{hash:t,name:e,mime:n,w:s,h:r,size:a,scaled:o}}function fr(i){return(i.size||1)/2+(i.lightRange??2)}function y_(i,t,e){const n=i.filter(o=>o.light),s=i.filter(o=>o.owner&&o.owner===t),r=new Set,a=[];for(const o of n){const l=o.owner&&o.owner===t,c=s.some(h=>Math.hypot(h.x-o.x,h.y-o.y)-(h.size||1)/2<=fr(o)&&!Co(e,o.x,o.y,h.x,h.y));(l||c)&&(r.add(o.id),a.push(o))}for(;a.length;){const o=a.pop();for(const l of n)r.has(l.id)||Math.hypot(o.x-l.x,o.y-l.y)<=fr(o)+fr(l)&&!Co(e,o.x,o.y,l.x,l.y)&&(r.add(l.id),a.push(l))}return r}const Fc=.85;function M_(i,t,e,n,s){if(t<Fc)return i;const r=i.filter(a=>a.light&&n.has(a.id));return i.filter(a=>{if(a.owner&&a.owner===e)return!0;let o=0;for(const l of r){if(Co(s,l.x,l.y,a.x,a.y))continue;const c=fr(l),h=Math.hypot(a.x-l.x,a.y-l.y)-(a.size||1)/2;if(o=Math.max(o,h<=c?1:Math.max(0,1-(h-c)/.6)),o>=1)break}return t*(1-o)<Fc})}const jn={map:0,grid:.01,bg:.02,dragOrigin:.03,token:.04,ruler:.07,gm:.06,ghost:.08,ui:.1};function Wi(i){return-i}function vu(i){return-i}function S_(i,t,e){return(jn[i]??jn.token)+t*e}class b_{constructor(){this.camera=new Qo(-1,1,1,-1,.01,100),this.camera.position.set(0,0,10),this.viewUnits=It.camera.viewUnits,this.aspect=1,this.bounds=null}resize(t,e){this.aspect=e>0?t/e:1,this.apply()}apply(){const t=this.viewUnits/2,e=t*this.aspect,n=this.camera;n.left=-e,n.right=e,n.top=t,n.bottom=-t,n.updateProjectionMatrix()}toWorld(t,e,n=new Bt){const s=this.viewUnits/2;return n.set(this.camera.position.x+t*s*this.aspect,this.camera.position.y+e*s)}toUnits(t,e,n=new Bt){return this.toWorld(t,e,n),n.y=vu(n.y),n}toNdc(t,e,n=new Bt){const s=this.viewUnits/2;return n.set((t-this.camera.position.x)/(s*this.aspect),(e-this.camera.position.y)/s)}pxPerUnit(t){return t/this.viewUnits}panBy(t,e){this.camera.position.x+=t,this.camera.position.y+=e,this.clamp()}zoomAt(t,e,n){const s=It.camera,r=this.toWorld(e,n,w_);this.viewUnits=Math.min(s.maxViewUnits,Math.max(s.minViewUnits,this.viewUnits*t)),this.apply();const a=this.toWorld(e,n,E_);this.camera.position.x+=r.x-a.x,this.camera.position.y+=r.y-a.y,this.clamp()}frame({x0:t,y0:e,x1:n,y1:s},r=1.04){const a=Math.max(.001,n-t),o=Math.max(.001,s-e);this.camera.position.x=(t+n)/2,this.camera.position.y=-(e+s)/2;const l=It.camera,c=Math.max(o,a/Math.max(.001,this.aspect))*r;this.viewUnits=Math.min(l.maxViewUnits,Math.max(l.minViewUnits,c)),this.apply(),this.clamp()}clamp(){if(!this.bounds)return;const t=It.camera.panMargin,e=this.viewUnits/2,n=e*this.aspect,s=this.bounds,r=s.x0-t+n,a=s.x1+t-n,o=-s.y1-t+e,l=-s.y0+t-e,c=this.camera.position;c.x=r>a?(s.x0+s.x1)/2:Math.min(a,Math.max(r,c.x)),c.y=o>l?-(s.y0+s.y1)/2:Math.min(l,Math.max(o,c.y))}}const w_=new Bt,E_=new Bt;class T_{constructor(t,e){this.renderer=e,this.material=new mi({color:16777215,transparent:!1}),this.mesh=new be(new vn(1,1),this.material),this.mesh.position.z=jn.map,this.mesh.visible=!1,t.add(this.mesh),this.hash=null,this.texture=null,this.blank=new be(new vn(1,1),new mi({color:1712671})),this.blank.position.z=jn.map,t.add(this.blank)}update(t,e,n){const s=(t==null?void 0:t.map)||null;s!==this.hash&&(this.hash=s,this.setTexture(null),this.loading=!1),s&&!this.texture&&!this.loading&&n.has(s)&&(this.loading=!0,n.bitmap(s).then(c=>{this.hash===s&&(c?this.setTexture(c):this.loading="failed")}));const r=Math.max(.001,e.x1-e.x0),a=Math.max(.001,e.y1-e.y0),o=(e.x0+e.x1)/2,l=-(e.y0+e.y1)/2;for(const c of[this.mesh,this.blank])c.scale.set(r,a,1),c.position.x=o,c.position.y=l;this.mesh.visible=!!this.texture,this.blank.visible=!this.texture}setTexture(t){var n;if((n=this.texture)==null||n.dispose(),!t){this.texture=null,this.material.map=null,this.material.needsUpdate=!0;return}const e=new Te(t);e.colorSpace=Fe,e.flipY=!1,e.generateMipmaps=!0,e.minFilter=Ln,e.magFilter=$e,e.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),e.needsUpdate=!0,this.texture=e,this.material.map=e,this.material.needsUpdate=!0}dispose(){this.setTexture(null),this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent(),this.blank.geometry.dispose(),this.blank.material.dispose(),this.blank.removeFromParent()}}const A_={[al]:0,[ol]:1,[Ls]:2,[ss]:3},R_=`
  varying vec2 vUnit;
  void main() {
    // The quad is placed and scaled in world space; unit space is that with y
    // flipped, which is the one conversion this whole view agrees on.
    vec4 world = modelMatrix * vec4(position, 1.0);
    vUnit = vec2(world.x, -world.y);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,C_=`
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
`;class P_{constructor(t){this.material=new hn({vertexShader:R_,fragmentShader:C_,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Vt(It.grid.color)},uOpacity:{value:It.grid.opacity},uWidth:{value:It.grid.lineWidth},uKind:{value:0}}}),this.mesh=new be(new vn(1,1),this.material),this.mesh.position.z=jn.grid,this.mesh.visible=!1,t.add(this.mesh)}update(t,e){if(!t||t.grid.kind===ss){this.mesh.visible=!1;return}const n=t.grid,s=this.material.uniforms;s.uKind.value=A_[n.kind]??0,s.uColor.value.setHex(n.color??It.grid.color),s.uOpacity.value=n.opacity??It.grid.opacity,s.uWidth.value=It.grid.lineWidth;const r=Math.max(.001,e.x1-e.x0),a=Math.max(.001,e.y1-e.y0);this.mesh.scale.set(r,a,1),this.mesh.position.x=(e.x0+e.x1)/2,this.mesh.position.y=-(e.y0+e.y1)/2,this.mesh.visible=!0}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent()}}const L_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,I_=`
  precision highp float;
  varying vec2 vUv;

  uniform sampler2D uMap;
  uniform float uHasMap;
  uniform vec3  uTint;
  uniform vec3  uBorder;
  uniform float uRing;       // ring thickness, as a fraction of the radius
  uniform float uSelected;
  uniform float uHover;
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
    float fillA = mix(1.0, max(art.a, 0.0), uHasMap);

    // Hover lifts the token's own ring a little; selection is drawn as a separate
    // outline below. Two different signals, so "the cursor is over this" never
    // reads as "this is selected".
    float lift = max(uSelected * 0.45, uHover * 0.4);
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

    if (a <= 0.004) discard;
    gl_FragColor = vec4(rgb, a);
    // See the note in grid-layer.js: a ShaderMaterial does not get three's
    // output conversion for free, and without it every colour darkens twice.
    #include <colorspace_fragment>
  }
`,Oc=1.3,D_=new vn(1,1),an=new N,U_=_u([0,.34],[0,-.34],[1,0]),N_=_u([-.09,.46],[-.09,-.46],[1.16,0]);function _u(i,t,e){const n=new xn;return n.setAttribute("position",new He([i[0],i[1],0,t[0],t[1],0,e[0],e[1],0],3)),n}class Es extends bv{constructor(t){super(t,{rotates:!1}),this.material=new hn({vertexShader:L_,fragmentShader:I_,transparent:!0,depthWrite:!1,uniforms:{uMap:{value:null},uHasMap:{value:0},uTint:{value:new Vt(16777215)},uBorder:{value:new Vt(It.tokens.defaultBorder)},uRing:{value:It.tokens.ring},uSelected:{value:0},uHover:{value:0},uShape:{value:0},uAlpha:{value:1},uRingAlpha:{value:1},uRadius:{value:1/Oc},uFit:{value:new Bt(1,1)}}}),this.mesh=new be(D_,this.material),this.root.add(this.mesh),this.arrowEdge=new be(N_,new mi({color:659984,transparent:!0,depthWrite:!1})),this.arrow=new be(U_,new mi({color:It.tokens.defaultBorder,transparent:!0,depthWrite:!1})),this.arrowEdge.visible=!1,this.arrow.visible=!1,this.root.add(this.arrowEdge,this.arrow),this.hash=null,this.texture=null,this.placed=!1,this.from=new Bt,this.to=new Bt,this.t=0,this.dur=0}get sliding(){return this.t<this.dur}static worldOf(t,e,n=an){return n.set(t.x,Wi(t.y),e)}sync(t,e,n){if(Es.worldOf(t,n.z,an),!this.placed)return this.snap(t,e,n);if(an.x!==this.to.x||an.y!==this.to.y){const s=It.tokens.slide;this.from.set(this.root.position.x,this.root.position.y),this.to.set(an.x,an.y);const r=this.from.distanceTo(this.to);this.t=0,this.dur=r<1e-4?0:Math.min(s.max,Math.max(s.min,r/s.speed))}if(this.t<this.dur){this.t=Math.min(this.dur,this.t+e);const s=k_(this.t/this.dur);this.root.position.set(this.from.x+(this.to.x-this.from.x)*s,this.from.y+(this.to.y-this.from.y)*s,n.z)}else this.root.position.copy(an);this.animate(e,t),this.paint(t,n)}snap(t,e,n){Es.worldOf(t,n.z,an),this.root.position.copy(an),this.to.set(an.x,an.y),this.t=this.dur=0,this.placed=!0,this.animate(e,t),this.paint(t,n)}paint(t,e){const n=this.material.uniforms;if((t.asset||null)!==this.hash&&(this.hash=t.asset||null,this.setTexture(null,1,1),this.loading=!1),this.hash&&!this.loading&&!this.texture&&e.library.has(this.hash)){const a=this.hash;this.loading=!0,e.library.bitmap(a).then(o=>{this.hash===a&&(o?this.setTexture(o,o.width,o.height):this.loading="failed")})}const s=Math.max(.05,t.size)*Oc;this.mesh.scale.set(s,s,1),this.mesh.rotation.z=-(t.rot||0),this.placeArrow(t,e),n.uTint.value.setHex(t.tint??16777215),n.uBorder.value.setHex(t.border??It.tokens.defaultBorder),n.uRing.value=It.tokens.ring,n.uShape.value=t.shape==="square"?1:0,n.uSelected.value=e.selected?1:0,n.uHover.value=e.hovered?1:0;const r=t.hidden?.45:1;n.uAlpha.value=r*(e.alpha??1),n.uRingAlpha.value=r*(e.ringAlpha??e.alpha??1)}placeArrow(t,e){const n=typeof t.facing=="number"&&Number.isFinite(t.facing);if(this.arrow.visible=n,this.arrowEdge.visible=n,!n)return;const s=It.tokens.arrow,r=Math.max(.05,t.size),a=r*s.length,o=r/2+r*s.gap,l=-t.facing,c=Math.cos(l)*o,h=Math.sin(l)*o,f=(t.hidden?.45:1)*(e.alpha??1);for(const[d,p,g]of[[this.arrowEdge,a,f*s.edgeAlpha],[this.arrow,a,f*s.alpha]])d.position.set(c,h,.001),d.rotation.z=l,d.scale.set(p,p,1),d.material.opacity=g;this.arrow.material.color.setHex(t.border??It.tokens.defaultBorder)}setTexture(t,e,n){var o;(o=this.texture)==null||o.dispose();const s=this.material.uniforms;if(!t){this.texture=null,s.uMap.value=null,s.uHasMap.value=0;return}const r=new Te(t);r.colorSpace=Fe,r.flipY=!1,r.generateMipmaps=!0,r.minFilter=Ln,r.magFilter=$e,r.needsUpdate=!0,this.texture=r,s.uMap.value=r,s.uHasMap.value=1;const a=e/Math.max(1,n);s.uFit.value.set(Math.min(1,1/a),Math.min(1,a))}dispose(){var t;(t=this.texture)==null||t.dispose(),this.material.dispose(),this.arrow.material.dispose(),this.arrowEdge.material.dispose(),super.dispose()}}function k_(i){return i<.5?4*i*i*i:1-(-2*i+2)**3/2}const F_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,O_=`
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
`,B_=new vn(1,1);class z_{constructor(t){this.material=new hn({vertexShader:F_,fragmentShader:O_,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Vt(It.ruler.color)},uLenPx:{value:1},uDashPx:{value:It.ruler.dashPx},uDuty:{value:It.ruler.duty},uAlpha:{value:It.ruler.alpha}}}),this.mesh=new be(B_,this.material),this.mesh.position.z=jn.ruler,t.add(this.mesh)}set(t,e,n,s,r){const a=t,o=Wi(e),l=n,c=Wi(s),h=l-a,f=c-o,d=Math.hypot(h,f);if(this.mesh.visible=d*r>2,!this.mesh.visible)return;const p=It.ruler;this.mesh.position.set(a+h/2,o+f/2,jn.ruler),this.mesh.rotation.z=Math.atan2(f,h),this.mesh.scale.set(d,p.widthPx/r,1);const g=this.material.uniforms;g.uLenPx.value=d*r,g.uColor.value.setHex(p.color),g.uDashPx.value=p.dashPx,g.uDuty.value=p.duty,g.uAlpha.value=p.alpha}dispose(){this.material.dispose(),this.mesh.removeFromParent()}}const H_="#f0a24a",G_="rgba(240, 162, 74, 0.22)",V_="#ffd28a",Bc="#ff6b5e";class W_{constructor(t,e){this.cam=e,this.rect={width:1,height:1},this.canvas=document.createElement("canvas"),this.canvas.id="walls",this.g=this.canvas.getContext("2d"),t.insertBefore(this.canvas,t.querySelector("#overlay")),this.shown=!1,this.draft=null,this.doomed=null,this.drew=!1}resize(t){this.rect=t;const e=Math.min(1.5,window.devicePixelRatio||1);this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e),this.g.setTransform(e,0,0,e,0,0)}frame(t){const e=this.g,{width:n,height:s}=this.rect;if(!this.shown){this.drew&&(e.clearRect(0,0,n,s),this.drew=!1);return}this.drew=!0,e.clearRect(0,0,n,s),e.lineJoin="round",e.lineCap="round";for(const a of(t==null?void 0:t.blocks)||[])this.drawBlock(a,a.id===this.doomed?Bc:H_);const r=this.draft;if(r&&r.pts.length){const a=r.cursor?[...r.pts,r.cursor.x,r.cursor.y]:r.pts;this.drawBlock({kind:r.kind,pts:a},V_,!0)}}drawBlock(t,e,n=!1){const s=this.g,r=t.pts,a=r.length>>1;if(!(a<2&&!n)){s.beginPath();for(let o=0;o<a;o++){const l=this.toScreen(r[o*2],r[o*2+1]);o?s.lineTo(l.x,l.y):s.moveTo(l.x,l.y)}if(t.kind==="mask"&&(s.closePath(),s.fillStyle=e===Bc?"rgba(255, 107, 94, 0.3)":G_,s.fill("evenodd")),s.strokeStyle="rgba(0, 0, 0, 0.55)",s.lineWidth=5,s.setLineDash([]),s.stroke(),s.strokeStyle=e,s.lineWidth=2.5,n&&s.setLineDash([7,5]),s.stroke(),s.setLineDash([]),t.kind==="wall"){s.fillStyle=e;for(let o=0;o<a;o++){const l=this.toScreen(r[o*2],r[o*2+1]);s.beginPath(),s.arc(l.x,l.y,3,0,Math.PI*2),s.fill()}}}}toScreen(t,e){const n=this.cam.toNdc(t,-e);return{x:(n.x*.5+.5)*this.rect.width,y:(1-(n.y*.5+.5))*this.rect.height}}}const Di={fontPerRadius:.36,minFont:9,maxFont:13,span:{circle:1.2,square:1.45},minRadius:11},X_="http://www.w3.org/2000/svg";let $_=0;function ps(i,t){const e=document.createElementNS(X_,i);for(const[n,s]of Object.entries(t))e.setAttribute(n,s);return e}class q_{constructor(t,{onResize:e,onResizeEnd:n}={}){this.el=t,this.onResize=e,this.onResizeEnd=n,this.plates=new Map,this.handle=document.createElement("div"),this.handle.className="handle",this.handle.title="Drag to resize",this.handle.hidden=!0,this.el.appendChild(this.handle),this.resizing=null,this.handle.addEventListener("pointerdown",s=>this.beginResize(s)),this.rulers=new Map}beginResize(t){if(!this.handleFor)return;t.preventDefault(),t.stopPropagation(),this.handle.setPointerCapture(t.pointerId),this.resizing=this.handleFor;const e=s=>{var d;if(!this.resizing||!this.lastCtx)return;const{camera:r,rect:a}=this.lastCtx,o=(s.clientX-a.left)/a.width*2-1,l=-((s.clientY-a.top)/a.height*2-1),c=r.toUnits(o,l),h=Math.hypot(c.x-this.resizing.x,c.y-this.resizing.y)*Math.SQRT2,f=It.tokens;(d=this.onResize)==null||d.call(this,this.resizing.id,nr(h,f.minSize,f.maxSize))},n=()=>{var r;this.handle.removeEventListener("pointermove",e),this.handle.removeEventListener("pointerup",n),this.handle.removeEventListener("pointercancel",n);const s=this.resizing;this.resizing=null,s&&((r=this.onResizeEnd)==null||r.call(this,s.id))};this.handle.addEventListener("pointermove",e),this.handle.addEventListener("pointerup",n),this.handle.addEventListener("pointercancel",n)}sync(t,e){this.lastCtx=e;const{camera:n,rect:s}=e,r=n.pxPerUnit(s.height),a=new Set;for(const o of t){a.add(o.id);const l=this.plates.get(o.id)||this.createPlate(o.id),c=o.maxHp>0,h=n.toNdc(o.x,Wi(o.y)),f=(h.x*.5+.5)*s.width,d=(1-(h.y*.5+.5))*s.height,p=Math.max(.05,o.size)/2*r,g=f>-160&&f<s.width+160&&d>-120&&d<s.height+160,v=this.syncLabel(l,o,f,d,p,g);if(l.last.hp!==o.hp||l.last.maxHp!==o.maxHp){if(l.bar.hidden=!c,c){const m=nr(o.hp/o.maxHp,0,1);l.fill.style.width=`${(m*100).toFixed(1)}%`,l.fill.dataset.state=m>.5?"ok":m>.2?"hurt":"down",l.bar.title=`${o.hp} / ${o.maxHp}`}l.last.hp=o.hp,l.last.maxHp=o.maxHp}if(!c){l.root.hidden=!0;continue}const u=Math.max(p,v)+4;if(l.root.hidden=!g,g){const m=nr(r/110,.62,1.25);l.root.style.transform=`translate3d(${Math.round(f)}px, ${Math.round(d+u)}px, 0) scale(${m.toFixed(3)}) translateX(-50%)`,l.root.style.setProperty("--plate-width",`${Math.max(48,o.size*r*1.15).toFixed(0)}px`)}}for(const[o,l]of this.plates)a.has(o)||(l.root.remove(),l.label.svg.remove(),this.plates.delete(o));this.syncHandle(t,e,r),this.syncRulers(e)}syncLabel(t,e,n,s,r,a){const{label:o}=t;if(!e.name||!a||r<Di.minRadius)return o.svg.style.display="none",0;o.svg.style.display="";const l=r/100,c=nr(r*Di.fontPerRadius,Di.minFont,Di.maxFont),h=Math.round(c/l),f=typeof e.facing=="number"&&Math.sin(e.facing)>.5,d=e.shape==="square",p=`${e.name}|${h}|${f?"t":"b"}|${d?"s":"c"}`;return o.key!==p&&(o.key=p,this.layoutLabel(o,e.name,h,f,d)),o.svg.style.transform=`translate3d(${n.toFixed(1)}px, ${s.toFixed(1)}px, 0) scale(${l.toFixed(4)}) translate(-100px, -100px)`,f?0:o.reach*l}layoutLabel(t,e,n,s,r){const a=100*(1-It.tokens.ring/2);let o,l,c;if(r){const g=s?-a:a,v=a*Di.span.square;o=`M ${-v} ${g} L ${v} ${g}`,l=2*v,c=l-n}else{const g=s?-1:1;o=`M 0 ${-g*a} A ${a} ${a} 0 1 ${s?1:0} 0 ${g*a} A ${a} ${a} 0 1 ${s?1:0} 0 ${-g*a}`,l=2*Math.PI*a,c=Math.PI*a*Di.span.circle-n}t.path.setAttribute("d",o),t.text.setAttribute("font-size",n),t.textPath.textContent=e;let h=e;for(;h.length>1&&t.text.getComputedTextLength()>c;)h=h.slice(0,-1),t.textPath.textContent=`${h.trimEnd()}…`;const f=t.text.getComputedTextLength(),d=n*.45,p=Math.min(l,f+d*2);t.path.setAttribute("stroke-width",(n*1.45).toFixed(1)),t.path.setAttribute("stroke-dasharray",`${p.toFixed(1)} ${(l*2).toFixed(1)}`),t.path.setAttribute("stroke-dashoffset",(-(l-p)/2).toFixed(1)),t.svg.setAttribute("aria-label",e),t.reach=a+n*.75}syncRulers({camera:t,rect:e,rulers:n=[]}){const s=new Set;for(const r of n){s.add(r.id);let a=this.rulers.get(r.id);a||(a=document.createElement("div"),a.className="ruler",this.el.appendChild(a),this.rulers.set(r.id,a)),a.textContent!==r.text&&(a.textContent=r.text);const o=t.toNdc((r.ax+r.bx)/2,Wi((r.ay+r.by)/2)),l=(o.x*.5+.5)*e.width,c=(1-(o.y*.5+.5))*e.height;a.style.transform=`translate3d(${Math.round(l)}px, ${Math.round(c)}px, 0) translate(-50%, -160%)`,a.hidden=Math.hypot(r.bx-r.ax,r.by-r.ay)*Y_(t,e)<26}for(const[r,a]of this.rulers)s.has(r)||(a.remove(),this.rulers.delete(r))}syncHandle(t,{camera:e,rect:n,selectedId:s,dragging:r},a){const o=s?t.find(d=>d.id===s):null;if(this.handleFor=o||null,!o||r){this.handle.hidden=!0;return}const l=e.toNdc(o.x,Wi(o.y)),c=(l.x*.5+.5)*n.width,h=(1-(l.y*.5+.5))*n.height,f=o.size/2*a*Math.SQRT1_2;this.handle.hidden=!1,this.handle.style.transform=`translate3d(${Math.round(c+f)}px, ${Math.round(h+f)}px, 0) translate(-50%, -50%)`}createPlate(t){const e=document.createElement("div");e.className="plate";const n=document.createElement("div");n.className="plate-bar";const s=document.createElement("i");n.appendChild(s),e.append(n),this.el.appendChild(e);const r=ps("svg",{class:"token-label",viewBox:"0 0 200 200",width:200,height:200}),a=ps("g",{transform:"translate(100 100)"}),o=`label-${t}-${++$_}`,l=ps("path",{id:o,class:"token-label-band"}),c=ps("text",{class:"token-label-text","dominant-baseline":"central"}),h=ps("textPath",{href:`#${o}`,startOffset:"50%","text-anchor":"middle"});c.appendChild(h),a.append(l,c),r.appendChild(a),this.el.appendChild(r);const d={root:e,bar:n,fill:s,label:{svg:r,path:l,text:c,textPath:h,key:"",reach:0},last:{hp:void 0,maxHp:void 0}};return this.plates.set(t,d),d}clear(){for(const[,t]of this.plates)t.root.remove(),t.label.svg.remove();this.plates.clear();for(const[,t]of this.rulers)t.remove();this.rulers.clear()}}function nr(i,t,e){return i<t?t:i>e?e:i}function Y_(i,t){return i.pxPerUnit(t.height)}const j_="modulepreload",K_=function(i,t){return new URL(i,t).href},zc={},xu=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=K_(c,n),c in zc)return;zc[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const v=a[g];if(v.href===c&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":j_,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function Z_(i){return i===100?["d10t","d10u"]:[`d${i}`]}function J_(i,t){if(i!==100)return[t];const e=t%100;return[Math.floor(e/10)+1,e%10+1]}function yu(i,t){return i==="d10t"?String((t-1)*10).padStart(2,"0"):String(i==="d10u"?t-1:t)}function Q_(i,t){return i!=="d6"&&i!=="d2"&&(t==="6"||t==="9")}const Hc=new Map;function Gc(i){let t=Hc.get(i);return t||(t=tx(i),Hc.set(i,t)),t}function tx(i){switch(i){case"d2":return ri(i,nx(.9,.17,24),"caps");case"d4":return ri(i,ms(new sl(1.25)),"vertices");case"d6":return ri(i,ms(new es(1.25,1.25,1.25)),"faces");case"d8":return ri(i,ms(new il(1)),"faces");case"d10":case"d10t":case"d10u":return ri(i,ex(.95),"faces");case"d12":return ri(i,ms(new el(1)),"faces");case"d20":return ri(i,ms(new nl(1.05)),"faces");default:throw new Error(`No shape for ${i}`)}}function ms(i){const e=(i.index?i.toNonIndexed():i).getAttribute("position"),n=[];for(let s=0;s<e.count;s+=3)n.push([0,1,2].map(r=>new N().fromBufferAttribute(e,s+r)));return i.dispose(),n}function ex(i){const t=Math.cos(Math.PI/5),e=.105*i,n=e*(1+t)/(1-t),s=[];for(let l=0;l<10;l++){const c=l*Math.PI/5;s.push(new N(Math.cos(c)*i,Math.sin(c)*i,l%2?-e:e))}const r=new N(0,0,n),a=new N(0,0,-n),o=[];for(let l=0;l<5;l++){const c=s[2*l],h=s[2*l+1],f=s[(2*l+2)%10],d=s[(2*l+3)%10];o.push([r,c,h],[r,h,f]),o.push([a,d,f],[a,f,h])}return o.map(l=>Mu(l))}function nx(i,t,e){const n=[],s=[];for(let a=0;a<e;a++){const o=a/e*Math.PI*2;n.push(new N(Math.cos(o)*i,Math.sin(o)*i,t/2)),s.push(new N(Math.cos(o)*i,Math.sin(o)*i,-t/2))}const r=[];for(let a=1;a<e-1;a++)r.push([n[0],n[a],n[a+1]],[s[0],s[a+1],s[a]]);for(let a=0;a<e;a++){const o=(a+1)%e;r.push([n[a],s[a],s[o]],[n[a],s[o],n[o]])}return r.map(a=>Mu(a))}function Mu(i){const t=new N().subVectors(i[1],i[0]).cross(new N().subVectors(i[2],i[0])),e=new N().add(i[0]).add(i[1]).add(i[2]).divideScalar(3);return t.dot(e)<0?[i[0],i[2],i[1]]:i}function ri(i,t,e){const n=[],s=u=>{for(let m=0;m<n.length;m++)if(n[m].distanceToSquared(u)<1e-10)return m;return n.push(u.clone()),n.length-1},r=[];for(const u of t){const m=new N().subVectors(u[1],u[0]).cross(new N().subVectors(u[2],u[0])).normalize();let y=r.find(x=>x.normal.dot(m)>.9999);y||(y={normal:m,tris:[],ids:new Set},r.push(y)),y.tris.push(u);for(const x of u)y.ids.add(s(x))}for(const u of r){const m=[...u.ids];u.center=m.reduce((x,S)=>x.add(n[S]),new N).divideScalar(m.length),u.u=new N().subVectors(n[m[0]],u.center).projectOnPlane(u.normal).normalize(),u.w=new N().crossVectors(u.normal,u.u);const y=x=>{const S=new N().subVectors(n[x],u.center);return Math.atan2(S.dot(u.w),S.dot(u.u))};if(u.verts=m.sort((x,S)=>y(x)-y(S)),u.radius=Math.max(...m.map(x=>n[x].distanceTo(u.center))),u.verts.length===3||u.verts.length===4){const x=n[u.verts[0]],S=n[u.verts[1]],L=new N().addVectors(x,S).multiplyScalar(.5),T=new N().subVectors(L,u.center).projectOnPlane(u.normal).normalize();u.w=T.clone().negate(),u.u=new N().crossVectors(u.w,u.normal).normalize()}if(i.startsWith("d10")){const x=u.verts.reduce((S,L)=>Math.abs(n[L].z)>Math.abs(n[S].z)?L:S,u.verts[0]);u.w=new N().subVectors(n[x],u.center).projectOnPlane(u.normal).normalize(),u.u=new N().crossVectors(u.w,u.normal).normalize()}}const a=[],o=[],l=[],c=new xn;let h=0;r.forEach((u,m)=>{const y=u.radius*(i==="d2"?1:1.04);for(const x of u.tris)for(const S of x){const L=new N().subVectors(S,u.center);a.push(S.x,S.y,S.z),o.push(u.normal.x,u.normal.y,u.normal.z),l.push(.5+.5*L.dot(u.u)/y,.5+.5*L.dot(u.w)/y)}c.addGroup(h,u.tris.length*3,m),h+=u.tris.length*3}),c.setAttribute("position",new He(a,3)),c.setAttribute("normal",new He(o,3)),c.setAttribute("uv",new He(l,2));let f;e==="vertices"?f=n.map((u,m)=>({vertex:m,dir:u.clone().normalize()})):e==="caps"?f=r.map((u,m)=>({face:m,dir:u.normal})).filter(u=>Math.abs(u.dir.z)>.99):f=r.map((u,m)=>({face:m,dir:u.normal}));const d=f.length,p=new Array(d).fill(0);let g=1;for(let u=0;u<d;u++){if(p[u])continue;p[u]=g;const m=f.findIndex((y,x)=>x!==u&&!p[x]&&y.dir.dot(f[u].dir)<-.999);for(m>=0&&(p[m]=d+1-g),g++;p.includes(g);)g++}const v=r.map((u,m)=>{if(e==="vertices")return u.verts.map(x=>{const S=f.findIndex(A=>A.vertex===x),L=new N().subVectors(n[x],u.center),T=u.radius*1.04;return{slot:S,x:.5*L.dot(u.u)/T,y:.5*L.dot(u.w)/T}});const y=f.findIndex(x=>x.face===m);return y>=0?[{slot:y,x:0,y:0}]:[]});return{kind:i,geometry:c,faces:r,vertices:n,slots:f,standard:p,faceSlots:v,slotKind:e}}function ix(i,t){let e=-1,n=-1/0;const s=new N;return i.slots.forEach((r,a)=>{s.copy(r.dir).applyQuaternion(t),s.z>n&&(n=s.z,e=a)}),{slot:e,flat:n}}function PM(i,t,e){const n=i.standard.slice(),s=n.indexOf(e);return s>=0&&s!==t&&([n[s],n[t]]=[n[t],n[s]]),n}const Ie=128,Su=new Map;function sx(i){const t=i>>16&255,e=i>>8&255,n=i&255;return .2126*t+.7152*e+.0722*n>150?"#14100c":"#fbf8f2"}const rx=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`;function ax(i,t,e){const n=`${i}|${t}|${e.map(c=>`${c.text}@${c.x.toFixed(3)},${c.y.toFixed(3)}`).join(";")}`;let s=Su.get(n);if(s)return s;const r=document.createElement("canvas");r.width=Ie,r.height=Ie;const a=r.getContext("2d");a.fillStyle=rx(t),a.fillRect(0,0,Ie,Ie);const o=a.createLinearGradient(0,0,Ie,Ie);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(1,"rgba(0,0,0,0.10)"),a.fillStyle=o,a.fillRect(0,0,Ie,Ie);const l=sx(t);if(i==="d6"&&e.length===1)return lx(a,Number(e[0].text),l),Vc(n,r);for(const c of e){const h=c.x!==0||c.y!==0,f=c.text.length,d=h?30:f>1?i==="d10t"?44:50:cx(i),p=Ie*(.5+c.x),g=Ie*(.5-c.y);a.save(),a.translate(p,g),h&&a.rotate(Math.atan2(c.x,c.y)),a.fillStyle=l,a.font=`700 ${d}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(c.text,0,0),Q_(i,c.text)&&a.fillRect(-d*.28,d*.42,d*.56,Math.max(2,d*.07)),a.restore()}return Vc(n,r)}function Vc(i,t){const e=new Jh(t);return e.colorSpace=Fe,e.anisotropy=4,Su.set(i,e),e}const ox={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]};function lx(i,t,e){const n=Ie*.24,s=t===1?Ie*.1:Ie*.075;i.fillStyle=e;for(const[r,a]of ox[t]||[])i.beginPath(),i.arc(Ie/2+r*n,Ie/2+a*n,s,0,Math.PI*2),i.fill()}function cx(i){return{d2:58,d6:64,d8:56,d10:50,d10u:54,d12:54,d20:46}[i]??54}function hx(i,t){return i.faceSlots.map(e=>e.map(n=>({text:yu(i.kind,t[n.slot]),x:n.x*.62,y:n.y*.62})))}const Tn={fov:34,height:38,rest:2.6,fade:.5,dropped:.38};class ux{constructor({badgeParent:t}){this.scene=new Zh,this.camera=new Ze(Tn.fov,1,1,200),this.camera.position.set(0,-6,Tn.height),this.camera.lookAt(0,0,0),this.tray={halfW:12,halfH:8},this.scene.add(new _v(16777215,3814184,1.5));const e=new Mv(16777215,1.9);e.position.set(-12,-10,30),this.scene.add(e),this.current=null,this.badge=document.createElement("div"),this.badge.className="dice-total",this.badge.hidden=!0,t.appendChild(this.badge),this.rect={width:1,height:1}}resize(t,e){this.rect={width:t,height:e},this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=Math.hypot(Tn.height,6),s=Math.tan(Tn.fov*Math.PI/360)*n;this.tray={halfW:Math.max(4,s*this.camera.aspect-1.2),halfH:Math.max(3,s-1.6)}}get busy(){return!!this.current}play(t,e){if(!pr){dx().then(()=>this.play(t,e));return}const{toss:n}=pr;this.clear();const s=[];for(const o of t.dice){const l=Z_(o.sides),c=J_(o.sides,o.value);l.forEach((h,f)=>s.push({kind:h,want:c[f],kept:o.kept}))}let r;try{r=n(s,t.throw>>>0,this.tray)}catch(o){console.warn("[dice] could not animate this roll",o);return}const a=s.map((o,l)=>{const c=Gc(o.kind),h=hx(c,r.labels[l]).map(p=>new vv({map:ax(o.kind,e,p),roughness:.42,metalness:.04,transparent:!0})),f=new be(c.geometry,h);this.scene.add(f);const d=new be(fx,new mi({map:px(),transparent:!0,depthWrite:!1,opacity:.55}));return this.scene.add(d),{mesh:f,shadow:d,frames:r.frames[l],kept:o.kept,materials:h,kind:o.kind,labels:r.labels[l]}});this.current={id:t.id,total:t.total,note:t.note||"",dice:a,t:0,steps:r.steps,settledAt:null},this.badge.hidden=!0,this.pose(0)}clear(){if(this.current){for(const t of this.current.dice){this.scene.remove(t.mesh,t.shadow);for(const e of t.materials)e.dispose();t.shadow.material.dispose()}this.current=null,this.badge.hidden=!0}}frame(t){const e=this.current;if(!e)return;e.t+=t;const n=e.t/pr.TOSS.dt;if(n<e.steps-1){this.pose(n);return}if(e.settledAt===null){e.settledAt=e.t,this.pose(e.steps-1);for(const r of e.dice)if(!r.kept)for(const a of r.materials)a.opacity=Tn.dropped;this.showTotal()}const s=e.t-e.settledAt;if(s>Tn.rest){const r=Math.max(0,1-(s-Tn.rest)/Tn.fade);for(const a of e.dice){for(const o of a.materials)o.opacity=r*(a.kept?1:Tn.dropped);a.shadow.material.opacity=.55*r}this.badge.style.opacity=String(r),r===0&&this.clear()}}pose(t){const e=Math.floor(t),n=t-e;for(const s of this.current.dice){const r=Math.min(e,this.current.steps-1)*7,a=Math.min(e+1,this.current.steps-1)*7,o=s.frames;s.mesh.position.set(o[r]+(o[a]-o[r])*n,o[r+1]+(o[a+1]-o[r+1])*n,o[r+2]+(o[a+2]-o[r+2])*n),Xc.set(o[r+3],o[r+4],o[r+5],o[r+6]),$c.set(o[a+3],o[a+4],o[a+5],o[a+6]),s.mesh.quaternion.slerpQuaternions(Xc,$c,n);const l=s.mesh.position.z,c=1.9+l*.12;s.shadow.position.set(s.mesh.position.x+l*.18,s.mesh.position.y+l*.12,.01),s.shadow.scale.set(c,c,1),this.current.settledAt===null&&(s.shadow.material.opacity=.55/(1+l*.25))}}showTotal(){const t=this.current;let e=0,n=0,s=1/0;const r=new N;for(const l of t.dice)l.kept&&(r.copy(l.mesh.position),r.y+=1.25,r.z+=1.25,r.project(this.camera),e+=(r.x*.5+.5)*this.rect.width,s=Math.min(s,(1-(r.y*.5+.5))*this.rect.height),n++);if(!n)return;const a=e/n,o=s-6;if(this.badge.replaceChildren(),t.note){const l=document.createElement("span");l.className="note",l.textContent=t.note,this.badge.append(l)}this.badge.append(String(t.total)),this.badge.style.opacity="1",this.badge.style.transform=`translate3d(${Math.round(a)}px, ${Math.round(o)}px, 0) translate(-50%, -100%)`,this.badge.hidden=!1}readout(){return this.current?this.current.dice.map(t=>{const e=Gc(t.kind),{slot:n}=ix(e,t.mesh.quaternion);return{kind:t.kind,shows:yu(t.kind,t.labels[n]),kept:t.kept}}):[]}render(t){if(!this.current)return;const e=t.autoClear;t.autoClear=!1,t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=e}}let pr=null,Wc=null;function dx(){return Wc||(Wc=xu(()=>import("./toss-DnaN6quP.js"),[],import.meta.url).then(i=>{pr=i})),Wc}const Xc=new vi,$c=new vi,fx=new vn(1,1);let ir=null;function px(){if(ir)return ir;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.85)"),e.addColorStop(.55,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),ir=new Jh(i),ir}const Gn=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,mx=.78,gx=.16,vx=typeof CanvasRenderingContext2D<"u"&&"filter"in CanvasRenderingContext2D.prototype,qc=.45,Sa={fade:1.2,swirl:1.8,curtain:2.2,drapes:1.6,ink:2.2,burn:3.2,freeze:3.6},_x=7.5,xx=.045,yx=1,ba={rain:{density:700,make:()=>({u:Math.random(),v:Math.random(),s:.75+Math.random()*.5,l:.7+Math.random()*.6})},snow:{density:380,make:()=>({u:Math.random(),v:Math.random(),s:.6+Math.random()*.8,r:Math.random(),p:Math.random()*6.3})},embers:{density:240,make:()=>({u:Math.random(),v:Math.random(),s:.5+Math.random(),r:Math.random(),p:Math.random()*6.3})},fog:{density:26,make:()=>({u:Math.random()*1.4-.2,v:Math.random(),s:.6+Math.random()*.8,r:.22+Math.random()*.2,p:Math.random()*6.3,q:Math.random()*6.3})}};class Mx{constructor(t,e){this.cam=e,this.rect={left:0,top:0,width:1,height:1},this.canvas=document.createElement("canvas"),this.canvas.id="weather",this.g=this.canvas.getContext("2d"),this.dark=document.createElement("canvas"),this.dark.id="darkness",this.dg=this.dark.getContext("2d"),this.darkShown=0,this.cover=Pe("fx-cover"),this.shade=Pe("fx-shade"),this.swirl=document.createElement("canvas"),this.swirl.className="fx-swirl",this.sg=this.swirl.getContext("2d"),this.curtain=Pe("fx-curtain"),this.pool=Pe("fx-pool"),this.curtain.append(this.pool),this.drapes=[Pe("fx-drape left"),Pe("fx-drape right")],this.cover.append(this.shade,this.swirl,this.curtain,...this.drapes,Rx()),this.card=Pe("fx-card");const n=Pe("title");n.textContent="Intermission";const s=Pe("sub");s.innerHTML='<span class="player-only">The GM is setting the scene.</span><span class="gm-only">Players see this card. Bring the table back from FX.</span>',this.card.append(Pe("glow"),n,s),this.out=null,this.locked=!1,this.flash=Pe("fx-flash"),this.pingLayer=Pe("fx-pings");const r=t.querySelector("#overlay");t.insertBefore(this.canvas,r),t.insertBefore(this.dark,r),t.insertBefore(this.cover,r),r.after(this.flash,this.pingLayer,this.card),this.board=[t.querySelector("#canvas"),this.canvas,r],this.overlay=r,this.weather=null,this.parts=[],this.pings=[]}resize(t){this.rect=t;const e=Math.min(1.5,window.devicePixelRatio||1);this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e),this.g.setTransform(e,0,0,e,0,0),this.dark.width=this.canvas.width,this.dark.height=this.canvas.height,this.dg.setTransform(e,0,0,e,0,0),this.darkKey="",this.swirl.width=this.canvas.width,this.swirl.height=this.canvas.height,this.sg.setTransform(e,0,0,e,0,0),this.coverKey="",this.reseed()}frame(t,e,{isGm:n,bounds:s,tokens:r=[],scene:a=null}){a!==this.scene&&(this.scene=a,this.out=t!=null&&t.blackout?1:0,this.darkShown=((t==null?void 0:t.darkness)||0)*(n?qc:1),this.darkKey="",this.coverKey="");const o=(t==null?void 0:t.weather)||null;o!==this.weather&&(this.weather=o,this.parts=[]),this.intensity=(t==null?void 0:t.intensity)??.6,this.t=(this.t||0)+e,this.boardBox=this.boardRect(s),this.drawWeather(Math.min(e,.05),this.boardBox);const l=n?qc:1;this.drawBlackout(t,e,l),this.locked=!n&&(!!(t!=null&&t.blackout)||this.out>.002),this.overlay.classList.toggle("fx-out",this.locked),document.body.classList.toggle("fx-locked",this.locked);const c=!!(t!=null&&t.blackout)&&(n||this.out>=.999);this.card.classList.toggle("on",c),this.card.classList.toggle("gm",n),this.drawDarkness(((t==null?void 0:t.darkness)||0)*l,e,r,a),this.drawPings()}reseed(){this.parts=[],this.g.clearRect(0,0,this.rect.width,this.rect.height)}boardRect(t){if(!t)return null;const e=this.cam.toNdc(t.x0,-t.y0),n=this.cam.toNdc(t.x1,-t.y1),{width:s,height:r}=this.rect,a=(e.x*.5+.5)*s,o=(1-(e.y*.5+.5))*r,l=(n.x*.5+.5)*s,c=(1-(n.y*.5+.5))*r;return{x:a,y:o,w:l-a,h:c-o}}fit(t,e){const n=Math.max(0,e.w*e.h),s=t===ba.fog?1:Math.min(2,n/(1e3*600)),r=t===ba.fog?8+18*this.intensity:t.density*this.intensity*s,a=Math.round(r*(Gn?.4:1)),o=Math.max(4,Math.round(a*.05));if(this.parts.length<a)for(let l=0;l<o&&this.parts.length<a;l++)this.parts.push(t.make());else this.parts.length>a&&(this.parts.length=Math.max(a,this.parts.length-o))}drawWeather(t,e){const n=this.g,{width:s,height:r}=this.rect;n.clearRect(0,0,s,r);const a=ba[this.weather];if(!a||!e||e.w<2||e.h<2||(this.fit(a,e),!this.parts.length))return;n.save(),n.beginPath(),n.rect(e.x,e.y,e.w,e.h),n.clip();const o=this.intensity,l=Gn?.5:1,c=p=>e.x+p*e.w,h=p=>e.y+p*e.h,f=p=>p*t*l/e.w,d=p=>p*t*l/e.h;if(this.weather==="rain"){n.strokeStyle=`rgba(190, 210, 235, ${(.22+.38*o).toFixed(2)})`,n.lineWidth=.8+.7*o,n.beginPath();const p=650+650*o;for(const g of this.parts){g.v+=d(p*g.s),g.u+=f(p*g.s*.18),g.v>1.02&&(g.v=-.02,g.u=Math.random()*1.2-.1);const v=c(g.u),u=h(g.v),m=(8+16*o)*g.l;n.moveTo(v,u),n.lineTo(v-m*.18,u-m)}n.stroke()}else if(this.weather==="snow"){n.fillStyle=`rgba(245, 248, 255, ${(.55+.4*o).toFixed(2)})`;for(const p of this.parts)p.p+=t*(.6+p.r),p.v+=d((25+55*o)*p.s),p.u+=f(Math.sin(p.p)*(12+22*o)),p.v>1.02&&(p.v=-.02,p.u=Math.random()),n.beginPath(),n.arc(c(p.u),h(p.v),.8+p.r*(1.4+1.6*o),0,Math.PI*2),n.fill()}else if(this.weather==="embers")for(const p of this.parts){p.p+=t*7,p.v-=d((25+60*o)*p.s),p.u+=f(Math.sin(p.p*.3)*14),p.v<-.02&&(p.v=1.02,p.u=Math.random());const g=(.35+.4*o)*(.6+.4*Math.sin(p.p));n.fillStyle=`rgba(255, ${150+Math.round(60*g)}, 60, ${g.toFixed(2)})`,n.beginPath(),n.arc(c(p.u),h(p.v),1+p.r*(1.6+1.2*o),0,Math.PI*2),n.fill()}else if(this.weather==="fog"){const p=.1+.18*o,g=Math.max(e.w,e.h);for(const v of this.parts){v.p+=t*.35,v.q+=t*.22,v.u+=f((14+26*o)*v.s),v.v+=Math.sin(v.q)*6e-4*l,v.u-v.r>1.15&&(v.u=-.25,v.v=Math.random());const u=v.r*g*(1+.12*Math.sin(v.p)),m=c(v.u),y=h(v.v),x=p*(.75+.25*Math.sin(v.p*1.3+v.q)),S=n.createRadialGradient(m,y,0,m,y,u);S.addColorStop(0,`rgba(208, 214, 218, ${x.toFixed(3)})`),S.addColorStop(.6,`rgba(208, 214, 218, ${(x*.5).toFixed(3)})`),S.addColorStop(1,"rgba(208, 214, 218, 0)"),n.fillStyle=S,n.fillRect(m-u,y-u,u*2,u*2)}}n.restore()}drawBlackout(t,e,n){var m,y;const s=Sa[t==null?void 0:t.transition]?t.transition:"fade",r=t!=null&&t.blackout?1:0;this.out===null&&(this.out=r);const a=this.out>=1&&r===1&&this.closedAs?this.closedAs:s;this.closedAs=a;const o=Math.min(e,.1)/(Gn?.6:Sa[a]),l=Math.sign(r-this.out);this.out=r>this.out?Math.min(r,this.out+o):Math.max(r,this.out-o);const c=this.out,h=c*c*(3-2*c),f=l*(6*c*(1-c))/(Gn?.6:Sa[a]),d=`${a}:${c}:${f}:${n}`,p=a==="burn"&&(h>0&&h<1||((m=this.sparks)==null?void 0:m.length)>0);if(d===this.coverKey&&!p)return;this.coverKey=d,this.cover.style.opacity=String(n),this.cover.dataset.kind=a,this.shade.style.opacity=a==="fade"?h.toFixed(4):"0",this.drawCurtain(a==="curtain"?c:0);const g=a==="drapes"?(1-h)*104:104,v=a==="drapes"&&!Gn?f*_x:0;this.drapes[0].style.transform=`translateX(${-g.toFixed(2)}%) skewX(${(-v).toFixed(2)}deg)`,this.drapes[1].style.transform=`translateX(${g.toFixed(2)}%) skewX(${v.toFixed(2)}deg)`;const u={swirl:x=>this.drawSwirl(x),ink:x=>this.drawInk(x),burn:x=>this.drawBurn(x,e),freeze:x=>this.drawFreeze(x)};for(const[x,S]of Object.entries(u))x!==a&&S(0);(y=u[a])==null||y.call(u,h)}drawCurtain(t){const e=this.rect.height,n=1.1*e-yx,s=2*xx*e,r=(n+s)*t*t*(3-2*t),a=Math.min(r,n);this.curtain.style.transform=`translateY(${(a-1.1*e).toFixed(1)}px)`,this.curtain.classList.toggle("on",t>0);const o=Math.max(0,r-n)/2;this.pool.style.height=`${o.toFixed(1)}px`,t>0&&(this.shade.style.opacity=Math.min(1,o/6).toFixed(3))}drawInk(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.blots=null,this.inked&&(e.clearRect(0,0,n,s),this.inked=!1);return}if(this.blots||(this.blots=Ax()),this.inked=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=Math.hypot(n,s);for(const a of this.blots){const o=Math.max(0,Math.min(1,(t-a.at)/(1-a.at)));if(o<=0)continue;const l=r*a.size*(1-Math.pow(1-o,2.2)),c=a.x*n,h=a.y*s;e.beginPath();for(let f=0;f<=96;f++){const d=f/96*Math.PI*2,p=1+a.lobes.reduce((g,v)=>g+v.amp*Math.sin(d*v.n+v.ph),0);e.lineTo(c+Math.cos(d)*l*p,h+Math.sin(d)*l*p)}e.fill();for(const f of a.drops){const d=l*f.dist,p=Math.max(0,Math.min(1,o*3))*f.size*r;e.beginPath(),e.arc(c+Math.cos(f.a)*d,h+Math.sin(f.a)*d,p,0,Math.PI*2),e.fill()}}t>.85&&(e.globalAlpha=(t-.85)/.15,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawBurn(t,e){const n=this.sg,{width:s,height:r}=this.rect;if(t<=0){this.fire=null,this.fireGrid=null,this.sparks=[],this.burned&&(n.clearRect(0,0,s,r),this.burned=!1);return}const a=this.boardBox,o=a&&a.w>2&&a.h>2?a:{x:0,y:0,w:s,h:r};if(this.fire||(this.fire=Sx(o.w/o.h)),this.sparks||(this.sparks=[]),this.burned=!0,n.clearRect(0,0,s,r),t>=1){n.fillStyle="#000",n.fillRect(0,0,s,r),this.drawSparks(e);return}const l=An((t-.55)/.45);l>0&&(n.fillStyle=`rgba(0, 0, 0, ${l.toFixed(4)})`,n.beginPath(),n.rect(0,0,s,r),n.rect(o.x,o.y,o.w,o.h),n.fill("evenodd"));const c=wx(o,{x:0,y:0,w:s,h:r});if(!c){this.drawSparks(e);return}const h=performance.now();let f=this.fireGrid;(!f||!Ex(f.view,c)&&h-f.made>250)&&(f=this.fireGrid=bx(this.fire,o,c));const{gw:d,gh:p,when:g,img:v,cv:u,u0:m,u1:y,v0:x,v1:S,soft:L}=f,T=.035,A=.05,P=t*(this.fire.span+T),H=this.t||0,_=new Float32Array(d),w=new Float32Array(p);for(let tt=0;tt<d;tt++)_[tt]=Math.sin(H*11+(m+tt/d*(y-m))*75);for(let tt=0;tt<p;tt++)w[tt]=Math.sin(H*7.3+(x+tt/p*(S-x))*60);const O=v.data,G=[];for(let tt=0;tt<g.length;tt++){const pt=P-g[tt],yt=tt*4;if(pt<=-A){O[yt+3]=0;continue}if(pt>=T+L){O[yt]=0,O[yt+1]=0,O[yt+2]=0,O[yt+3]=255;continue}const W=tt%d,J=.75+.25*_[W]*w[(tt-W)/d],ct=An((pt+L)/(2*L)),at=ct*Math.max(0,1-Math.max(0,pt)/T)*J,ot=Math.pow(Math.max(0,1+pt/A),2),lt=255*Math.min(1,.3+at*1.1),St=30+190*at*at,Ct=10+70*at*at*at;O[yt]=70+(lt-70)*ct,O[yt+1]=34+(St-34)*ct,O[yt+2]=10+(Ct-10)*ct,O[yt+3]=255*Math.max(ot*.9,ct),at>.5&&G.push(tt)}u.getContext("2d").putImageData(v,0,0);const q=o.x+m*o.w,nt=o.y+x*o.h,X=(y-m)*o.w,V=(S-x)*o.h;n.save(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.imageSmoothingEnabled=!0,n.drawImage(u,q,nt,X,V);const D=f.glow,Z=D.getContext("2d");Z.clearRect(0,0,D.width,D.height),Z.drawImage(u,0,0,D.width,D.height),n.globalCompositeOperation="lighter",n.globalAlpha=.5,n.drawImage(D,q,nt,X,V),n.restore();const et=Math.min(e,.05);if(!Gn&&G.length)for(let tt=180*et;tt>0;tt-=1){if(Math.random()>=tt)continue;const pt=G[Math.floor(Math.random()*G.length)];this.sparks.push({x:q+(pt%d+Math.random())/d*X,y:nt+(Math.floor(pt/d)+Math.random())/p*V,vx:(Math.random()-.5)*40,vy:-30-Math.random()*80,life:.6+Math.random()*1.4,age:0,size:.7+Math.random()*2.2})}this.drawSparks(e)}drawSparks(t){const e=this.sg,n=this.t||0,s=Math.min(t,.05);this.sparks=this.sparks.filter(r=>(r.age+=s)<r.life);for(const r of this.sparks){r.x+=(r.vx+Math.sin(n*3+r.y*.05)*12)*s,r.y+=r.vy*s;const a=1-r.age/r.life;e.fillStyle=`rgba(255, ${Math.round(150+80*a)}, 60, ${a.toFixed(2)})`,e.beginPath(),e.arc(r.x,r.y,r.size*(.5+.5*a),0,Math.PI*2),e.fill()}}drawSwirl(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.swirled&&(e.clearRect(0,0,n,s),this.swirled=!1);return}if(this.swirled=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=n/2,a=s/2,o=Math.hypot(r,a)*1.05,l=5,c=5,h=t*2.4,f=t*Math.PI/l,d=o*(1-Math.pow(1-t,1.5)),p=48;for(let g=0;g<l;g++){const v=g/l*Math.PI*2+h;e.beginPath();for(let u=0;u<=p;u++){const m=o-d*u/p,y=v+c*(1-m/o)-f;e.lineTo(r+Math.cos(y)*m,a+Math.sin(y)*m)}for(let u=p;u>=0;u--){const m=o-d*u/p,y=v+c*(1-m/o)+f;e.lineTo(r+Math.cos(y)*m,a+Math.sin(y)*m)}e.closePath(),e.fill()}t>.88&&(e.globalAlpha=(t-.88)/.12,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawFreeze(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.ice=null,this.frozen&&(e.clearRect(0,0,n,s),this.frozen=!1);return}if(this.frozen=!0,e.clearRect(0,0,n,s),t>=1){e.fillStyle="#000",e.fillRect(0,0,n,s);return}(!this.ice||this.ice.w!==n||this.ice.h!==s)&&(this.ice=Tx(n,s));const r=this.ice,a=t*2.4,o=An((t-.42)/.28),l=An((t-.52)/.36),c=An((t-.8)/.2);e.fillStyle=`rgba(150, 190, 230, ${(.14*An(t/.3)).toFixed(4)})`,e.fillRect(0,0,n,s);const{at:h,thick:f,img:d,cv:p}=r,g=d.data;for(let u=0;u<h.length;u++){const m=a-h[u],y=u*4;if(m<=0){g[y+3]=0;continue}const x=An(m/.05),S=An(m/.45),L=f[u];g[y]=214+26*L,g[y+1]=228+20*L,g[y+2]=244+11*L,g[y+3]=255*x*(.28+.5*S*(.6+.4*L))}p.getContext("2d").putImageData(d,0,0),e.imageSmoothingEnabled=!0,e.drawImage(p,0,0,n,s),e.lineCap="round",e.lineWidth=1;const v=.3;for(let u=0;u<4;u++){e.strokeStyle=`rgba(246, 251, 255, ${(.75*(1-u/4)).toFixed(3)})`,e.beginPath();for(const m of r.fronds){const y=a-m.at;if(y<=0||y>=v||Math.floor(y/v*4)!==u)continue;const x=Math.min(1,y/.03);e.moveTo(m.x0,m.y0),e.lineTo(m.x0+(m.x1-m.x0)*x,m.y0+(m.y1-m.y0)*x)}e.stroke()}e.fillStyle="rgba(255, 255, 255, 0.85)";for(const u of r.glints)a>u.at&&e.fillRect(u.x,u.y,u.r,u.r);if(l>0){const u=e.createRadialGradient(n/2,s/2,0,n/2,s/2,Math.hypot(n,s)/2);u.addColorStop(0,`rgba(10, 34, 58, ${(.92*l).toFixed(4)})`),u.addColorStop(1,`rgba(3, 12, 24, ${Math.min(1,.97*l).toFixed(4)})`),e.fillStyle=u,e.fillRect(0,0,n,s)}if(o>0){const u=1-c,m=(T,A)=>Math.round(T-A*l);for(const T of r.hits){const A=An((o-T.at)/.06);if(A<=0)continue;const P=T.r*(.6+.4*A),H=e.createRadialGradient(T.x,T.y,0,T.x,T.y,P);H.addColorStop(0,`rgba(240, 248, 255, ${(.75*A*u).toFixed(4)})`),H.addColorStop(.4,`rgba(210, 232, 250, ${(.3*A*u).toFixed(4)})`),H.addColorStop(1,"rgba(210, 232, 250, 0)"),e.fillStyle=H,e.fillRect(T.x-P,T.y-P,P*2,P*2)}const y=new Path2D,x=new Path2D,S=[new Path2D,new Path2D,new Path2D];for(const T of r.cracks){if(o<T.at)continue;const A=Math.min(1,(o-T.at)/T.dur),P=T.x0+(T.x1-T.x0)*A,H=T.y0+(T.y1-T.y0)*A;y.moveTo(T.x0+T.nx*T.face,T.y0+T.ny*T.face),y.lineTo(P+T.nx*T.face,H+T.ny*T.face),x.moveTo(T.x0-T.nx,T.y0-T.ny),x.lineTo(P-T.nx,H-T.ny),S[T.weight].moveTo(T.x0,T.y0),S[T.weight].lineTo(P,H)}e.lineCap="butt",e.lineWidth=5,e.strokeStyle=`rgba(${m(205,120)}, ${m(228,110)}, ${m(248,60)}, ${(.16*u).toFixed(4)})`,e.stroke(y),e.lineWidth=1.6,e.strokeStyle=`rgba(8, 24, 42, ${(.6*(1-l)).toFixed(4)})`,e.stroke(x),e.lineCap="round";const L=[.6,1,1.7];for(let T=0;T<3;T++)e.lineWidth=L[T],e.strokeStyle=`rgba(${m(240,90)}, ${m(250,50)}, 255, ${((.55+.15*T)*u).toFixed(4)})`,e.stroke(S[T])}c>0&&(e.fillStyle=`rgba(0, 0, 0, ${c.toFixed(4)})`,e.fillRect(0,0,n,s))}drawDarkness(t,e,n,s=null){const r=1-Math.exp(-Math.min(e,.1)*3);this.darkShown+=(t-this.darkShown)*r,Math.abs(t-this.darkShown)<.002&&(this.darkShown=t);const a=this.darkShown,o=this.dg,{width:l,height:c}=this.rect,h=a>.001?n.filter(v=>v.light):[],f=h.length?"":a.toFixed(3);if(f&&f===this.darkKey||(this.darkKey=f,o.clearRect(0,0,l,c),a<=.001)||(o.fillStyle=`rgba(0, 0, 0, ${(a*mx).toFixed(3)})`,o.fillRect(0,0,l,c),!h.length))return;o.save();const d=this.boardBox;d&&d.w>2&&d.h>2&&(o.beginPath(),o.rect(d.x,d.y,d.w,d.h),o.clip()),o.globalCompositeOperation="destination-out";const p=this.t||0,g=this.blockSegments(s);for(const v of h){const u=this.toScreen(v.x,v.y),m=this.toScreen(v.x+1,v.y),y=Math.hypot(m.x-u.x,m.y-u.y),x=(v.size||1)/2+(v.lightRange??2),S=Cx(v.id),L=Gn?1:1+.008*Math.sin(p*7.3+S)+.005*Math.sin(p*13.1+S*2),T=x*y*L,A=T+.6*y,P=o.createRadialGradient(u.x,u.y,0,u.x,u.y,A);P.addColorStop(0,"rgba(0, 0, 0, 1)"),P.addColorStop(T/A,"rgba(0, 0, 0, 0.92)"),P.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=P;const H=g.length?this.reachOf(v,g,x*1.02+.62):null;if(!(H&&this.softLight(v,H,u,y,A,P))){if(H){o.save(),o.beginPath();for(let _=0;_<H.length;_+=2){const w=this.toScreen(H[_],H[_+1]);_?o.lineTo(w.x,w.y):o.moveTo(w.x,w.y)}o.closePath(),o.clip()}o.fillRect(u.x-A,u.y-A,A*2,A*2),H&&o.restore()}}o.restore()}softLight(t,e,n,s,r,a){var m;if(!vx)return!1;const o=Math.max(1.5,Math.min(14,gx*s)),l=Math.ceil(o*2),c=Math.ceil(r)+l,h=c*2;if(h>2400)return!1;const f=n.x-c,d=n.y-c;this.masks||(this.masks=new Map);const p=`${(m=this.reaches.get(t.id))==null?void 0:m.key}|${f.toFixed(1)}|${d.toFixed(1)}|${s.toFixed(3)}|${h}`;let g=this.masks.get(t.id);if(!g||g.key!==p){const y=(g==null?void 0:g.cv)||document.createElement("canvas");y.width=h,y.height=h;const x=y.getContext("2d");x.clearRect(0,0,h,h),x.filter=`blur(${o.toFixed(1)}px)`,x.fillStyle="#000",x.beginPath();for(let S=0;S<e.length;S+=2){const L=this.toScreen(e[S],e[S+1]);S?x.lineTo(L.x-f,L.y-d):x.moveTo(L.x-f,L.y-d)}x.closePath(),x.fill(),x.filter="none",g={key:p,cv:y},this.masks.set(t.id,g)}this.scratch||(this.scratch=document.createElement("canvas"));const v=this.scratch;(v.width<h||v.height<h)&&(v.width=h,v.height=h);const u=v.getContext("2d");return u.globalCompositeOperation="source-over",u.clearRect(0,0,h,h),u.setTransform(1,0,0,1,-f,-d),u.fillStyle=a,u.fillRect(n.x-r,n.y-r,r*2,r*2),u.setTransform(1,0,0,1,0,0),u.globalCompositeOperation="destination-in",u.drawImage(g.cv,0,0),u.globalCompositeOperation="source-over",this.dg.drawImage(v,0,0,h,h,f,d,h,h),!0}blockSegments(t){const e=cu(t),n=this.segs;return(!n||n.length!==e.length||e.some((s,r)=>s!==n[r]))&&(this.segs=e,this.reaches=new Map,this.masks=new Map),this.segs}reachOf(t,e,n){const s=`${t.x}|${t.y}|${n}`;let r=this.reaches.get(t.id);return(!r||r.key!==s)&&(r={key:s,pts:Wv(e,t.x,t.y,n)},this.reaches.set(t.id,r)),r.pts}toScreen(t,e){const n=this.cam.toNdc(t,-e);return{x:(n.x*.5+.5)*this.rect.width,y:(1-(n.y*.5+.5))*this.rect.height}}play(t){if(t==="shake"){if(Gn)return;for(const e of this.board)Yc(e,"fx-shake");return}(t==="lightning"||t==="damage")&&(this.flash.dataset.kind=t,Yc(this.flash,"fx-go"))}ping(t,e,n){const s=Pe("fx-ping");s.style.setProperty("--ping",n),s.append(Pe("ring"),Pe("ring"),Pe("dot")),this.pingLayer.append(s),this.pings.push({x:t,y:e,el:s,until:performance.now()+1700})}drawPings(){if(!this.pings.length)return;const t=performance.now();this.pings=this.pings.filter(e=>{if(t>e.until)return e.el.remove(),!1;const n=this.cam.toNdc(e.x,-e.y),s=(n.x*.5+.5)*this.rect.width,r=(1-(n.y*.5+.5))*this.rect.height;return e.el.style.transform=`translate3d(${s.toFixed(1)}px, ${r.toFixed(1)}px, 0)`,!0})}}function Sx(i){const t=Math.random()*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=Po(),r=.45,a=(h,f)=>{const d=f/i,p=s(h*5,d*5)*.5+s(h*13,d*13)*.25+s(h*31,d*31)*.1;return h*e+d*n+p*r},o=[[0,0],[1,0],[0,1],[1,1]].map(([h,f])=>h*e+f/i*n),l=Math.min(...o)-.85*r*.6,c=Math.max(...o)+.85*r*.6;return{at:(h,f)=>a(h,f)-l,span:c-l}}function bx(i,t,e){let s=Math.max(8,Math.ceil(e.w/2)),r=Math.max(8,Math.ceil(e.h/2));const a=Math.sqrt(s*r/25e4);a>1&&(s=Math.ceil(s/a),r=Math.ceil(r/a));const o=(e.x-t.x)/t.w,l=(e.x+e.w-t.x)/t.w,c=(e.y-t.y)/t.h,h=(e.y+e.h-t.y)/t.h,f=new Float32Array(s*r);for(let u=0;u<r;u++){const m=c+(u+.5)/r*(h-c);for(let y=0;y<s;y++)f[u*s+y]=i.at(o+(y+.5)/s*(l-o),m)}const d=document.createElement("canvas");d.width=s,d.height=r;const p=d.getContext("2d").createImageData(s,r),g=document.createElement("canvas");g.width=Math.max(2,Math.round(s/8)),g.height=Math.max(2,Math.round(r/8));const v=1.5*(l-o)/s;return{gw:s,gh:r,when:f,img:p,cv:d,glow:g,u0:o,u1:l,v0:c,v1:h,soft:v,view:{...e},made:performance.now()}}function wx(i,t){const e=Math.max(i.x,t.x),n=Math.max(i.y,t.y),s=Math.min(i.x+i.w,t.x+t.w)-e,r=Math.min(i.y+i.h,t.y+t.h)-n;return s>1&&r>1?{x:e,y:n,w:s,h:r}:null}function Ex(i,t){return Math.abs(i.x-t.x)<1&&Math.abs(i.y-t.y)<1&&Math.abs(i.w-t.w)<1&&Math.abs(i.h-t.h)<1}function An(i){const t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)}function Po(){const t=Float32Array.from({length:4096},()=>Math.random()*2-1),e=(s,r)=>t[(r%64+64)%64*64+(s%64+64)%64],n=s=>s*s*(3-2*s);return(s,r)=>{const a=Math.floor(s),o=Math.floor(r),l=n(s-a),c=n(r-o),h=e(a,o)+(e(a+1,o)-e(a,o))*l,f=e(a,o+1)+(e(a+1,o+1)-e(a,o+1))*l;return h+(f-h)*c}}function Tx(i,t){const e=Po(),n=Po(),s=16e4;let r=Math.max(8,Math.ceil(i/3)),a=Math.max(8,Math.ceil(t/3));const o=Math.sqrt(r*a/s);o>1&&(r=Math.ceil(r/o),a=Math.ceil(a/o));const l=Math.min(i,t)/2,c=(V,D)=>Math.min(V,D,i-V,t-D)/l,h=(V,D)=>{const Z=V/l,et=D/l;return e(Z*3,et*3)*.5+e(Z*8,et*8)*.3+e(Z*21,et*21)*.15},f=(V,D)=>Math.max(0,c(V,D)*.9+.12+h(V,D)*.3),d=new Float32Array(r*a),p=new Float32Array(r*a);for(let V=0;V<a;V++)for(let D=0;D<r;D++){const Z=(D+.5)/r*i,et=(V+.5)/a*t,tt=V*r+D;d[tt]=f(Z,et);const pt=(Z+et*.6)/1.17,yt=(et-Z*.6)/1.17,W=n(pt/70,yt/70)*.6+n(yt/31,pt/31)*.3+n(pt/13+7,yt/13)*.1;p[tt]=Math.max(0,Math.min(1,.5+W))}const g=document.createElement("canvas");g.width=r,g.height=a;const v=g.getContext("2d").createImageData(r,a),u=[],m=5,y=V=>Math.min(i-1,Math.max(1,V)),x=V=>Math.min(t-1,Math.max(1,V)),S=(V,D)=>f(y(V),x(D))-.04,L=(V,D,Z,et,tt)=>{const pt=V+Math.cos(Z)*et,yt=D+Math.sin(Z)*et;if(u.push({x0:V,y0:D,x1:pt,y1:yt,at:S(pt,yt)}),tt<=0||et<6)return;const W=1+Math.floor(Math.random()*3);for(let J=0;J<W;J++){const ct=.25+Math.random()*.6,at=Math.random()<.5?1:-1;L(V+(pt-V)*ct,D+(yt-D)*ct,Z+at*(Math.PI/3),et*(1-ct)*(.3+Math.random()*.4),tt-1)}},T=(V,D,Z,et,tt)=>{for(let pt=0;pt<et;pt++){Z+=(Math.random()-.5)*.12;const yt=m*(.6+Math.random()*.9),W=V+Math.cos(Z)*yt,J=D+Math.sin(Z)*yt;u.push({x0:V,y0:D,x1:W,y1:J,at:S(W,J)});const ct=(et-pt)*m;for(const at of[-1,1])Math.random()>.3||L(W,J,Z+at*(Math.PI/3),ct*(.12+Math.random()*.35),2);tt>0&&pt>2&&Math.random()<.07&&T(W,J,Z+(Math.random()<.5?1:-1)*(Math.PI/3),Math.round((et-pt)*(.5+Math.random()*.3)),tt-1),V=W,D=J}},A=Math.round(Math.min(110,i*t/9e3));for(let V=0;V<A;V++){const D=Math.random()*i,Z=Math.random()*t,et=i>t?Math.min(i-t/2,Math.max(t/2,D)):i/2,tt=i>t?t/2:Math.min(t-i/2,Math.max(i/2,Z)),pt=Math.atan2(tt-Z,et-D)+(Math.random()-.5)*1.2;T(D,Z,pt,8+Math.floor(Math.random()*18),1)}const P=[],H=Math.round(i*t/2500);for(let V=0;V<H;V++){const D=Math.random()*i,Z=Math.random()*t;P.push({x:D,y:Z,r:Math.random()<.2?2:1,at:f(D,Z)+.08+Math.random()*.2})}const _=[],w=[],O=Math.hypot(i,t),G=2.2,q=(V,D,Z,et,tt,pt)=>{const yt=Math.hypot(Z-V,et-D)||1,W=-(et-D)/yt,J=(Z-V)/yt;_.push({x0:V,y0:D,x1:Z,y1:et,at:tt,dur:Math.max(.004,yt/O/G),nx:W,ny:J,face:2+pt,weight:pt})},nt=(V,D,Z,et,tt,pt,yt)=>{let W=0;for(;W<et;){const J=O*(.03+Math.random()*.06);Math.random()<.3?Z+=(Math.random()-.5)*.7:Z+=(Math.random()-.5)*.12;const ct=V+Math.cos(Z)*J,at=D+Math.sin(Z)*J,ot=tt+W/O/G,lt=Math.max(0,pt-(W>et*.55?1:0));if(q(V,D,ct,at,ot,lt),W+=J,yt>0&&Math.random()<.22){const St=Math.random()<.5?1:-1;nt(ct,at,Z+St*(.3+Math.random()*.3),(et-W)*(.35+Math.random()*.3),tt+W/O/G,Math.max(0,lt-1),yt-1)}if(V=ct,D=at,V<-30||D<-30||V>i+30||D>t+30)return}},X=1+Math.floor(Math.random()*3);for(let V=0;V<X;V++){const D=V===0;let Z,et;for(let ot=0;ot<20&&(Z=i*(D?.35+Math.random()*.3:.12+Math.random()*.76),et=t*(D?.35+Math.random()*.3:.12+Math.random()*.76),!w.every(lt=>Math.hypot(lt.x-Z,lt.y-et)>O*.3));ot++);const tt=D?0:.2+V*.15+Math.random()*.1,pt=D?1:.5+Math.random()*.25;w.push({x:Z,y:et,at:tt,r:O*.025*pt});const yt=D?8+Math.floor(Math.random()*4):5+Math.floor(Math.random()*3),W=Array.from({length:yt},(ot,lt)=>(lt+(Math.random()-.5)*.6)/yt*Math.PI*2),J=W.map(()=>O*pt*(.25+Math.random()*.45)),ct=W.map((ot,lt)=>{const St=[{x:Z,y:et,r:0}];let Ct=Z,Nt=et,C=ot,re=0;for(;re<J[lt];){const Ft=O*(.03+Math.random()*.05)*pt;C+=Math.random()<.25?(Math.random()-.5)*.6:(Math.random()-.5)*.1,Ct+=Math.cos(C)*Ft,Nt+=Math.sin(C)*Ft,re+=Ft,St.push({x:Ct,y:Nt,r:re,ang:C})}return St});for(const ot of ct)for(let lt=1;lt<ot.length;lt++){const St=ot[lt].r<ot[ot.length-1].r*.5;if(q(ot[lt-1].x,ot[lt-1].y,ot[lt].x,ot[lt].y,tt+ot[lt-1].r/O/G,St?2:1),lt>1&&Math.random()<.15){const Ct=Math.random()<.5?1:-1;nt(ot[lt].x,ot[lt].y,ot[lt].ang+Ct*(.3+Math.random()*.35),O*pt*(.05+Math.random()*.12),tt+ot[lt].r/O/G,0,1)}}const at=(ot,lt)=>{for(let St=1;St<ot.length;St++)if(ot[St].r>=lt){const Ct=(lt-ot[St-1].r)/(ot[St].r-ot[St-1].r);return{x:ot[St-1].x+(ot[St].x-ot[St-1].x)*Ct,y:ot[St-1].y+(ot[St].y-ot[St-1].y)*Ct}}return null};for(let ot=0,lt=O*.03*pt;ot<5;ot++,lt*=1.55+Math.random()*.3)for(let St=0;St<yt;St++){if(Math.random()>.75-ot*.1)continue;const Ct=at(ct[St],lt*(.85+Math.random()*.3)),Nt=at(ct[(St+1)%yt],lt*(.85+Math.random()*.3));if(!Ct||!Nt)continue;const C=.35+Math.random()*.3,re=Ct.x+(Nt.x-Ct.x)*C+(Math.random()-.5)*lt*.12,Ft=Ct.y+(Nt.y-Ct.y)*C+(Math.random()-.5)*lt*.12,Gt=tt+lt/O/G+.02,Rt=ot<2?1:0;Math.random()<.5?(q(Ct.x,Ct.y,re,Ft,Gt,Rt),q(re,Ft,Nt.x,Nt.y,Gt+.01,Rt)):(q(Nt.x,Nt.y,re,Ft,Gt,Rt),q(re,Ft,Ct.x,Ct.y,Gt+.01,Rt))}}return{w:i,h:t,gw:r,gh:a,at:d,thick:p,img:v,cv:g,fronds:u,glints:P,cracks:_,hits:w}}function Ax(){const i=[];for(let t=0;t<44;t++)i.push({x:Math.random()*1.1-.05,y:Math.random()*1.1-.05,at:Math.random()*.65,size:.07+Math.random()*.12,lobes:[3,5,8,13,19].map(e=>({n:e,amp:(.04+Math.random()*.07)/Math.sqrt(e/3),ph:Math.random()*6.3})),drops:Array.from({length:3+Math.floor(Math.random()*5)},()=>({a:Math.random()*6.3,dist:1.1+Math.random()*.5,size:.002+Math.random()*.006}))});return i}function Rx(){const i=document.createElement("div");return i.style.cssText="position:absolute;width:0;height:0;overflow:hidden",i.innerHTML=`<svg width="0" height="0" aria-hidden="true">
    <filter id="fx-hem" x="0" y="-5%" width="100%" height="110%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.009 0" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="matrix" result="map"
        values="0 0 0 0 0.5  0 1 0 0 0  0 0 0 0 0  0 0 0 0 1"/>
      <feDisplacementMap in="SourceGraphic" in2="map" scale="16" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </svg>`,i}function Cx(i){let t=0;for(const e of String(i))t=(t*31+e.charCodeAt(0))%997;return t}function Pe(i){const t=document.createElement("div");return t.className=i,t}function Yc(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}class Px{constructor({canvas:t,overlayEl:e,library:n,handlers:s={}}){this.library=n,this.renderer=new gv({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Fe,this.renderer.setClearColor(725006,1),this.scene=new Zh,this.cam=new b_,this.map=new T_(this.scene,this.renderer),this.grid=new P_(this.scene),this.views=new Map,this.overlay=new q_(e,s),this.dice=new ux({badgeParent:e}),this.fx=new Mx(e.parentElement,this.cam),this.walls=new W_(e.parentElement,this.cam),this.ghosts=new Map,this.turns=new Map,this.origins=new Map,this.originViews=new Map,this.rulerViews=new Map,this.selectedId=null,this.selectedIds=new Set,this.hoveredId=null,this.builtScene=null,this.rect={left:0,top:0,width:1,height:1},this.el=t.parentElement,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(this.el),this.resize()}resize(){var e,n,s;const t=this.el.getBoundingClientRect();this.rect={left:t.left,top:t.top,width:t.width,height:t.height},!(t.width<1||t.height<1)&&(this.renderer.setSize(t.width,t.height,!1),this.cam.resize(t.width,t.height),(e=this.dice)==null||e.resize(t.width,t.height),(n=this.fx)==null||n.resize(this.rect),(s=this.walls)==null||s.resize(this.rect))}lookAt(t,e){this.cam.camera.position.x=t,this.cam.camera.position.y=-e,this.cam.clamp()}unitsAt(t,e,n){const s=(t-this.rect.left)/this.rect.width*2-1,r=-((e-this.rect.top)/this.rect.height*2-1);return this.cam.toUnits(s,r,n)}ndcAt(t,e){return[(t-this.rect.left)/this.rect.width*2-1,-((e-this.rect.top)/this.rect.height*2-1)]}frame(t,e,{isGm:n=!0,self:s=""}={}){var u;const r=Ee(t),a=bo(r);this.cam.bounds=a,this.map.update(r,a,this.library),this.grid.update(r,a);const o=Rv(t,{isGm:n}),l=n?null:cu(r),c=n?null:y_(o,s,l),h=n?o:M_(o,this.fx.darkShown,s,c,l);this.reconcile(r,h);const f=It.tokens.layerGap,d={library:this.library,selected:!1,hovered:!1,z:0};for(let m=0;m<h.length;m++){const y=h[m],x=this.views.get(y.id);if(!x)continue;d.z=S_(y.layer,m,f),d.selected=this.selectedIds.has(y.id)||y.id===this.selectedId,d.hovered=y.id===this.hoveredId&&!this.ghosts.size;const S=this.ghosts.get(y.id),L=this.turns.get(y.id),T=L===void 0?y:{...y,facing:L};S?x.snap({...T,x:S.x,y:S.y},e,d):x.sync(T,e,d)}const p=this.syncDrags(h,e,r),g=this.displayTokens(h);this.overlay.sync(g,{camera:this.cam,rect:this.rect,selectedId:this.selectedId,dragging:this.ghosts.size>0,rulers:p}),this.renderer.render(this.scene,this.cam.camera);const v=g.map((m,y)=>this.ghosts.has(m.id)?h[y]:m).map(m=>m.light&&c&&!c.has(m.id)?{...m,light:!1}:m);this.fx.frame(r==null?void 0:r.fx,e,{isGm:n,bounds:a,tokens:v,scene:r}),(u=this.walls).shown&&(u.shown=n),this.walls.frame(r),this.dice.frame(e),this.dice.render(this.renderer)}syncDrags(t,e,n){const s=this.cam.pxPerUnit(this.rect.height),r=[];for(const[a,o]of this.origins){const l=t.find(v=>v.id===a);if(!l)continue;let c=this.originViews.get(a);c||(c=new Es(this.scene),this.originViews.set(a,c)),c.snap({...l,x:o.x,y:o.y},e,{library:this.library,z:jn.dragOrigin,selected:!1,hovered:!1,alpha:It.tokens.originAlpha,ringAlpha:It.tokens.originRingAlpha});const h=this.ghosts.get(a)||{x:l.x,y:l.y};let f=this.rulerViews.get(a);f||(f=new z_(this.scene),this.rulerViews.set(a,f)),f.set(o.x,o.y,h.x,h.y,s);const d=n==null?void 0:n.grid,[p,g]=ll(h.x,h.y,d,l.size);r.push({id:a,ax:o.x,ay:o.y,bx:h.x,by:h.y,text:Bv(o.x,o.y,p,g,d).text})}for(const[a,o]of this.originViews)this.origins.has(a)||(o.dispose(),this.originViews.delete(a));for(const[a,o]of this.rulerViews)this.origins.has(a)||(o.dispose(),this.rulerViews.delete(a));return r}displayTokens(t){return t.map(e=>{const n=this.turns.get(e.id),s=n===void 0?e:{...e,facing:n},r=this.ghosts.get(s.id);if(r)return{...s,x:r.x,y:r.y};const a=this.views.get(s.id);if(!(a!=null&&a.sliding))return s;const o=a.root.position;return{...s,x:o.x,y:vu(o.y)}})}reconcile(t,e){const n=new Set;for(const s of e)n.add(s.id),this.views.has(s.id)||this.views.set(s.id,new Es(this.scene));for(const[s,r]of this.views)n.has(s)||(r.dispose(),this.views.delete(s));if((t==null?void 0:t.id)!==this.builtScene){for(const[,s]of this.views)s.placed=!1;this.builtScene=(t==null?void 0:t.id)??null}}fit(t){const e=bo(Ee(t));this.cam.bounds=e,this.cam.frame(e)}dispose(){this.observer.disconnect();for(const[,t]of this.views)t.dispose();this.views.clear();for(const[,t]of this.originViews)t.dispose();this.originViews.clear();for(const[,t]of this.rulerViews)t.dispose();this.rulerViews.clear(),this.overlay.clear(),this.map.dispose(),this.grid.dispose(),this.renderer.dispose()}}const ai=new Bt,Lx=4,Ix=15,Dx=9;class Ux{constructor(t,{getState:e,canGrab:n,onSelect:s,onDragMove:r,onDropGroup:a,onContext:o,onTurn:l,onPing:c,isSelected:h=()=>!1,groupOf:f=u=>[u],onToggle:d,locked:p,hasSelection:g=()=>!1,drawing:v=()=>null}){this.drawing=v,this.stage=t,this.locked=p,this.getState=e,this.canGrab=n||(()=>!0),this.onSelect=s,this.onDragMove=r,this.onContext=o,this.onTurn=l,this.onDropGroup=a,this.onPing=c,this.isSelected=h,this.groupOf=f,this.onToggle=d,this.hasSelection=g,this.pressAt={x:0,y:0},this.group=[],this.narrowTo=null,this.mode=null,this.pointerId=null,this.dragId=null,this.grabDx=0,this.grabDy=0,this.last={x:0,y:0},this.start={x:0,y:0},this.moved=!1,this.pendingDeselect=!1;const u=t.renderer.domElement;this.el=u,u.addEventListener("pointerdown",m=>this.down(m)),u.addEventListener("pointermove",m=>this.move(m)),u.addEventListener("pointerup",m=>this.up(m)),u.addEventListener("pointercancel",m=>this.up(m)),u.addEventListener("wheel",m=>this.wheel(m),{passive:!1}),u.addEventListener("pointerleave",()=>this.hover(null)),u.addEventListener("contextmenu",m=>this.context(m))}cancel(){var t,e;if(this.pointerId!==null){(e=(t=this.el).releasePointerCapture)==null||e.call(t,this.pointerId),this.pointerId=null,this.dragId&&this.stage.turns.delete(this.dragId);for(const n of this.group)this.stage.ghosts.delete(n.id),this.stage.origins.delete(n.id);this.originAt=null,this.dragId=null,this.group=[],this.narrowTo=null,this.pendingDeselect=!1,this.mode=null}}down(t){var o,l,c,h,f;if(this.pointerId!==null||(o=this.locked)!=null&&o.call(this))return;this.el.setPointerCapture(t.pointerId),this.pointerId=t.pointerId,this.moved=!1,this.start.x=t.clientX,this.start.y=t.clientY,this.last.x=t.clientX,this.last.y=t.clientY;const e=this.stage.unitsAt(t.clientX,t.clientY,ai);if(t.button===0&&t.altKey){t.preventDefault(),this.mode="ping",(l=this.onPing)==null||l.call(this,e.x,e.y,t.shiftKey);return}if(t.button===0&&t.shiftKey){const d=Ni(this.getState(),e.x,e.y,{isGm:!0});if(d&&this.canGrab(d)){this.mode="toggle",(c=this.onToggle)==null||c.call(this,d.id);return}}if(t.button===1||t.shiftKey){this.mode="pan";return}if(t.button===2)return;const n=this.drawing();if(n){this.mode="draw",n.down({x:e.x,y:e.y},t);return}const s=this.arrowAt(e);if(s){this.mode="turn",this.dragId=s.id,(h=this.onSelect)==null||h.call(this,s.id),this.stage.turns.set(s.id,s.facing);return}const r=Ni(this.getState(),e.x,e.y,{isGm:!0}),a=r&&this.stage.views.has(r.id)?r:null;if(a&&this.canGrab(a)){this.mode="drag",this.dragId=a.id,this.grabDx=a.x-e.x,this.grabDy=a.y-e.y,this.isSelected(a.id)?this.narrowTo=a.id:(f=this.onSelect)==null||f.call(this,a.id);const d=this.getState(),p=d.scenes[d.activeScene];this.group=this.groupOf(a.id).map(g=>p==null?void 0:p.tokens[g]).filter(g=>g&&this.canGrab(g)).map(g=>({id:g.id,x:g.x,y:g.y})),this.originAt=!0;for(const g of this.group)this.stage.ghosts.set(g.id,{x:g.x,y:g.y})}else this.mode="pan",a||(this.pendingDeselect=!0,this.pressAt.x=e.x,this.pressAt.y=e.y)}move(t){var s,r,a;if(this.pointerId===null){const o=this.stage.unitsAt(t.clientX,t.clientY,ai),l=this.drawing();if(l){l.hover({x:o.x,y:o.y});return}const c=this.arrowAt(o);this.hover((c==null?void 0:c.id)??((s=Ni(this.getState(),o.x,o.y,{isGm:!0}))==null?void 0:s.id)??null,!!c);return}if(t.pointerId!==this.pointerId)return;const e=t.clientX-this.last.x,n=t.clientY-this.last.y;if(this.last.x=t.clientX,this.last.y=t.clientY,this.moved||(this.moved=Math.hypot(t.clientX-this.start.x,t.clientY-this.start.y)>Lx),this.mode==="draw"){const o=this.stage.unitsAt(t.clientX,t.clientY,ai);(r=this.drawing())==null||r.move({x:o.x,y:o.y});return}if(this.mode==="pan"){const o=this.stage.cam.viewUnits/Math.max(1,this.stage.rect.height);this.stage.cam.panBy(-e*o,n*o);return}if(this.mode==="turn"&&this.dragId){const o=this.tokenById(this.dragId);if(!o)return;const l=this.stage.unitsAt(t.clientX,t.clientY,ai),c=Math.atan2(l.y-o.y,l.x-o.x)*180/Math.PI,h=t.altKey?1:Ix,f=(Math.round(c/h)*h%360+360)%360;this.stage.turns.set(this.dragId,f*Math.PI/180);return}if(this.mode==="drag"&&this.dragId){const o=this.stage.unitsAt(t.clientX,t.clientY,ai),l=this.group.find(p=>p.id===this.dragId);if(!l)return;const c=o.x+this.grabDx,h=o.y+this.grabDy,f=c-l.x,d=h-l.y;if(this.originAt){for(const p of this.group)this.stage.origins.set(p.id,{x:p.x,y:p.y});this.originAt=null}for(const p of this.group)this.stage.ghosts.set(p.id,{x:p.x+f,y:p.y+d});(a=this.onDragMove)==null||a.call(this,this.dragId,c,h)}}hover(t,e=!1){const n=e?"crosshair":t?"grab":"";this.stage.hoveredId===t&&this.el.style.cursor===n||(this.stage.hoveredId=t,this.el.style.cursor=n)}tokenById(t){var n;const e=this.getState();return((n=e.scenes[e.activeScene])==null?void 0:n.tokens[t])||null}arrowAt(t){const e=this.getState(),n=e.scenes[e.activeScene];if(!n)return null;const s=It.tokens.arrow,r=Dx/this.stage.cam.pxPerUnit(Math.max(1,this.stage.rect.height));for(let a=n.tokenOrder.length-1;a>=0;a--){const o=n.tokens[n.tokenOrder[a]];if(!o||typeof o.facing!="number"||!this.canGrab(o))continue;const l=Math.max(.05,o.size),c=l*s.length,h=l/2+l*s.gap,f=t.x-o.x,d=t.y-o.y,p=f*Math.cos(o.facing)+d*Math.sin(o.facing),g=-f*Math.sin(o.facing)+d*Math.cos(o.facing),v=Math.max(l/2,h-r);if(p>=v&&p<=h+c+r&&Math.abs(g)<=c*.46+r)return o}return null}up(t){var n,s,r,a,o,l,c,h,f;if(t.pointerId!==this.pointerId)return;if((s=(n=this.el).releasePointerCapture)==null||s.call(n,t.pointerId),this.pointerId=null,this.mode==="draw"){(r=this.drawing())==null||r.up(),this.mode=null;return}if(this.mode==="turn"&&this.dragId){const d=this.stage.turns.get(this.dragId);this.stage.turns.delete(this.dragId),this.moved&&typeof d=="number"&&((a=this.onTurn)==null||a.call(this,this.dragId,d)),this.dragId=null}else if(this.mode==="drag"&&this.dragId){const d=this.group.map(p=>({id:p.id,...this.stage.ghosts.get(p.id)}));for(const p of this.group)this.stage.ghosts.delete(p.id),this.stage.origins.delete(p.id);this.originAt=null,this.moved?(o=this.onDropGroup)==null||o.call(this,d.filter(p=>Number.isFinite(p.x))):this.narrowTo&&((l=this.onSelect)==null||l.call(this,this.narrowTo)),this.dragId=null,this.group=[],this.narrowTo=null}else this.pendingDeselect&&!this.moved&&(this.hasSelection()?(c=this.onSelect)==null||c.call(this,null):(h=this.onPing)==null||h.call(this,this.pressAt.x,this.pressAt.y,!1));this.pendingDeselect=!1,this.mode=null;const e=this.stage.unitsAt(t.clientX,t.clientY,ai);this.hover(((f=Ni(this.getState(),e.x,e.y,{isGm:!0}))==null?void 0:f.id)??null)}wheel(t){var r;if(t.preventDefault(),(r=this.locked)!=null&&r.call(this)||!t.deltaY)return;const[e,n]=this.stage.ndcAt(t.clientX,t.clientY),s=It.camera.zoomStep;this.stage.cam.zoomAt(t.deltaY>0?s:1/s,e,n)}context(t){var s;t.preventDefault();const e=this.stage.unitsAt(t.clientX,t.clientY,ai),n=Ni(this.getState(),e.x,e.y,{isGm:!0});(s=this.onContext)==null||s.call(this,n,t)}}function E(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s==="html"?n.innerHTML=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="dataset"?Object.assign(n.dataset,r):n.setAttribute(s,r===!0?"":r));for(const s of e.flat())s==null||s===!1||n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function ue(i,t,e,n){return e.id=i,E("div",{class:"field"},E("label",{for:i,text:t}),e,n?E("span",{class:"hint",text:n}):null)}function de(i,t){if(document.activeElement===i)return;const e=String(t);i.value!==e&&(i.value=e)}function wa(i,t){document.activeElement!==i&&i.checked!==!!t&&(i.checked=!!t)}const as=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`,Lo=i=>parseInt(String(i).replace("#",""),16)&16777215,Nx={square:"Square","hex-pointy":"Hex — pointy top","hex-flat":"Hex — flat top",none:"No grid"};class bu{constructor({onCommand:t,onImportMap:e,onImportToken:n,onAddBlank:s,onFit:r,onPickMap:a,onDetect:o,onClose:l}){this.onCommand=t,this.onClose=l,this.els={},this.els.library=E("select",{onchange:()=>{var d;const f=(d=this.library)==null?void 0:d[this.els.library.selectedIndex-1];this.els.library.selectedIndex=0,f&&a(f)}},E("option",{text:"Map pack…"})),this.els.libraryField=ue("g-lib","Library",this.els.library),this.els.libraryField.hidden=!0;const c=E("input",{type:"file",accept:"image/*",class:"file",onchange:f=>{var p;const d=(p=f.target.files)==null?void 0:p[0];f.target.value="",d&&e(d)}}),h=E("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:f=>{const d=[...f.target.files||[]];f.target.value="",d.length&&n(d)}});this.els.kind=E("select",{onchange:()=>this.pushGrid({kind:this.els.kind.value})},...ru.map(f=>E("option",{value:f,text:Nx[f]}))),this.els.unitPx=E("input",{type:"number",min:"16",max:"1024",step:"1",oninput:()=>this.pushGrid({unitPx:sr(this.els.unitPx.value,16,1024,It.grid.unitPx)})}),this.els.ox=E("input",{type:"number",step:"1",oninput:()=>this.pushGrid({ox:sr(this.els.ox.value,-4096,4096,0)})}),this.els.oy=E("input",{type:"number",step:"1",oninput:()=>this.pushGrid({oy:sr(this.els.oy.value,-4096,4096,0)})}),this.els.color=E("input",{type:"color",oninput:()=>this.pushGrid({color:Lo(this.els.color.value)})}),this.els.opacity=E("input",{type:"range",min:"0",max:"1",step:"0.02",oninput:()=>this.pushGrid({opacity:+this.els.opacity.value})}),this.els.unitLabel=E("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"sq",oninput:()=>this.pushGrid({unitLabel:this.els.unitLabel.value.slice(0,8)})}),this.els.distanceLabel=E("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"ft",oninput:()=>this.pushGrid({distanceLabel:this.els.distanceLabel.value.slice(0,8)})}),this.els.measure=E("select",{onchange:()=>this.pushGrid({measure:this.els.measure.value})},E("option",{value:"chebyshev",text:"Diagonal = 1 (5e)"}),E("option",{value:"euclid",text:"True distance"}),E("option",{value:"alternating",text:"Diagonal 1-2-1"})),this.els.snap=E("select",{id:"g-snap",onchange:()=>this.pushGrid({snap:this.els.snap.value})},E("option",{value:"soft",text:"Soft — pulls when close"}),E("option",{value:"grid",text:"Grid — always on a square"}),E("option",{value:"off",text:"Off — anywhere at all"})),this.els.magnet=E("input",{type:"range",min:"0.02",max:"0.25",step:"0.01",id:"g-magnet",oninput:()=>this.pushGrid({magnet:+this.els.magnet.value})}),this.els.feet=E("input",{type:"number",min:"1",max:"1000",step:"1",oninput:()=>this.pushGrid({perUnit:sr(this.els.feet.value,.01,1e5,5)})}),this.els.mapNote=E("p",{class:"note"}),this.root=E("aside",{class:"panel flyout",id:"toolbar",hidden:!0},E("button",{type:"button",class:"ghost close",title:"Close (Esc)","aria-label":"Close",text:"×",onclick:()=>l==null?void 0:l()}),E("div",{class:"tool-sections"},E("section",{dataset:{tool:"map"}},E("h2",{text:"Map"}),this.els.libraryField,E("div",{class:"row"},E("button",{type:"button",class:"primary",text:"Load map…",onclick:()=>c.click()}),E("button",{type:"button",class:"ghost",text:"Fit",title:"Frame the whole map",onclick:r}),E("button",{type:"button",class:"ghost",text:"Detect grid",title:"Measure the square size from the image itself",onclick:o})),c,this.els.mapNote),E("section",{dataset:{tool:"grid"}},E("h2",{text:"Grid"}),ue("g-kind","Type",this.els.kind),ue("g-unit","Pixels per square",this.els.unitPx,"Read from the filename when a map pack states it, e.g. (33x17)."),E("div",{class:"pair"},ue("g-ox","Offset X",this.els.ox),ue("g-oy","Offset Y",this.els.oy)),E("div",{class:"pair"},ue("g-color","Line",this.els.color),ue("g-op","Opacity",this.els.opacity)),ue("g-snap","Snapping",this.els.snap),ue("g-magnet","Pull",this.els.magnet,"How close a token has to be before the grid takes it."),E("details",{class:"more"},E("summary",{text:"Distance & measuring"}),E("div",{class:"pair"},ue("g-per","Distance per cell",this.els.feet),ue("g-measure","Measuring",this.els.measure)),E("div",{class:"pair"},ue("g-unit-label","Cell called",this.els.unitLabel),ue("g-dist-label","Distance called",this.els.distanceLabel)))),E("section",{dataset:{tool:"tokens"}},E("h2",{text:"Tokens"}),E("div",{class:"row"},E("button",{type:"button",class:"primary",text:"Add from file…",onclick:()=>h.click()}),E("button",{type:"button",class:"ghost",text:"Blank",title:"A plain coloured disc",onclick:s})),h,E("p",{class:"note",text:"Drag to move. Shift-drag or middle-drag to pan. Scroll to zoom."}))))}addSection(t){this.root.querySelector(".tool-sections").append(t),t.hidden=this.root.dataset.open!==t.dataset.tool}show(t){this.escBound||(this.root.addEventListener("keydown",e=>{var n;e.key==="Escape"&&(e.stopPropagation(),(n=this.onClose)==null||n.call(this))}),this.escBound=!0),this.root.hidden=!t,this.root.dataset.open=t||"";for(const e of this.root.querySelectorAll("section[data-tool]"))e.hidden=t!=="all"&&e.dataset.tool!==t}setLibrary(t){this.library=t,this.els.libraryField.hidden=!t.length,t.length&&this.els.library.replaceChildren(E("option",{text:`Map pack — ${t.length} maps`}),...t.map(e=>E("option",{text:`${e.name.replace(/\.[a-z0-9]+$/i,"")}  ·  ${(e.size/1048576).toFixed(1)}MB`})))}pushGrid(t){this.sceneId&&this.onCommand(["scene.grid",this.sceneId,t])}refresh(t){const e=t.activeScene?t.scenes[t.activeScene]:null;if(this.sceneId=(e==null?void 0:e.id)||null,this.root.classList.toggle("no-scene",!e),!e)return;const n=e.grid;de(this.els.kind,n.kind),de(this.els.unitPx,n.unitPx),de(this.els.ox,n.ox),de(this.els.oy,n.oy),de(this.els.color,as(n.color)),de(this.els.opacity,n.opacity),de(this.els.feet,n.perUnit),de(this.els.unitLabel,n.unitLabel),de(this.els.distanceLabel,n.distanceLabel),de(this.els.measure,n.measure),de(this.els.snap,n.snap),de(this.els.magnet,n.magnet),this.els.measure.disabled=Ir(n.kind),this.els.snap.disabled=n.kind==="none",this.els.magnet.disabled=n.kind==="none"||n.snap!=="soft";const s=e.map?t.assets[e.map]:null;if(s){const r=(e.artW/(n.unitPx||1)).toFixed(1),a=(e.artH/(n.unitPx||1)).toFixed(1);this.els.mapNote.textContent=`${s.name} — ${e.artW}×${e.artH}px, about ${r}×${a} squares`+(s.scaled?` · sent as ${Math.round(s.size/1024)}KB`:"")}else this.els.mapNote.textContent="No map yet. The grid still works on a blank table."}static gridGuessFor(t,e,n){const s=Gv(t,e,n);return s?{unitPx:s.unitPx,ox:s.ox,oy:s.oy,cols:s.cols,rows:s.rows}:null}}function sr(i,t,e,n){const s=Number(i);return Number.isFinite(s)?Math.min(e,Math.max(t,s)):n}const kx=i=>((i*180/Math.PI+90)%360+360)%360,jc=i=>(i-90)%360*Math.PI/180,Ea=15;class Fx{constructor({onChange:t,label:e="Facing"}){this.onChange=t,this.degrees=0,this.enabled=!1,this.needle=document.createElement("i"),this.needle.className="dial-needle",this.readout=document.createElement("span"),this.readout.className="dial-readout",this.root=document.createElement("div"),this.root.className="dial",this.root.tabIndex=0,this.root.setAttribute("role","slider"),this.root.setAttribute("aria-label",e),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","359"),this.root.append(this.needle,this.readout),this.root.addEventListener("pointerdown",n=>this.begin(n)),this.root.addEventListener("keydown",n=>this.key(n))}begin(t){if(!this.enabled)return;t.preventDefault(),this.root.focus(),this.root.setPointerCapture(t.pointerId);const e=s=>this.aim(s),n=()=>{this.root.removeEventListener("pointermove",e),this.root.removeEventListener("pointerup",n),this.root.removeEventListener("pointercancel",n)};this.root.addEventListener("pointermove",e),this.root.addEventListener("pointerup",n),this.root.addEventListener("pointercancel",n),this.aim(t)}aim(t){const e=this.root.getBoundingClientRect(),n=t.clientX-(e.left+e.width/2),s=t.clientY-(e.top+e.height/2),r=Math.atan2(n,-s)*180/Math.PI;this.set(Math.round(r/Ea)*Ea,!0)}key(t){if(!this.enabled)return;const e=t.shiftKey?45:Ea,s={ArrowRight:e,ArrowUp:e,ArrowLeft:-e,ArrowDown:-e,Home:-this.degrees,End:180-this.degrees}[t.key];s!==void 0&&(t.preventDefault(),t.stopPropagation(),this.set(this.degrees+s,!0))}set(t,e=!1){var s;const n=(Math.round(t)%360+360)%360;n===this.degrees&&!e||(this.degrees=n,this.paint(),e&&((s=this.onChange)==null||s.call(this,n)))}setEnabled(t){this.enabled=t,this.root.classList.toggle("off",!t),this.root.setAttribute("aria-disabled",t?"false":"true"),this.root.tabIndex=t?0:-1,this.paint()}paint(){this.needle.style.transform=`rotate(${this.degrees}deg)`,this.readout.textContent=this.enabled?`${this.degrees}°`:"—",this.root.setAttribute("aria-valuenow",String(this.degrees)),this.root.setAttribute("aria-valuetext",this.enabled?`${this.degrees} degrees`:"no facing")}}const Ox={bg:"Background",token:"Tokens",gm:"GM only"};class Bx{constructor({onCommand:t,onDelete:e,onSizeCommitted:n}){this.onCommand=t,this.id=null,this.els={};const s=r=>{this.id&&this.onCommand(["tok.patch",this.id,r])};this.els.name=E("input",{type:"text",maxlength:"48",placeholder:"Unnamed",oninput:()=>s({name:this.els.name.value.slice(0,48)})}),this.els.size=E("input",{type:"number",min:String(It.tokens.minSize),max:String(It.tokens.maxSize),step:"0.25",oninput:()=>s({size:Hx(+this.els.size.value,It.tokens.minSize,It.tokens.maxSize)}),onchange:()=>{this.id&&(n==null||n(this.id))}}),this.els.border=E("input",{type:"color",oninput:()=>{this.player||s({border:Lo(this.els.border.value)})},onchange:()=>{this.player&&this.player.onColor(Lo(this.els.border.value))}}),this.els.borderField=ue("t-border","Border",this.els.border),this.els.shape=E("select",{onchange:()=>s({shape:this.els.shape.value})},E("option",{value:"circle",text:"Circle"}),E("option",{value:"square",text:"Square"})),this.els.layer=E("select",{onchange:()=>s({layer:this.els.layer.value})},...So.map(r=>E("option",{value:r,text:Ox[r]}))),this.els.hp=E("input",{type:"number",min:"0",step:"1",oninput:()=>s({hp:Math.max(0,Math.round(+this.els.hp.value||0))})}),this.els.maxHp=E("input",{type:"number",min:"0",step:"1",oninput:()=>s({maxHp:Math.max(0,Math.round(+this.els.maxHp.value||0))})}),this.els.rot=E("input",{type:"range",min:"0",max:"359",step:"1",oninput:()=>s({rot:+this.els.rot.value*Math.PI/180})}),this.els.dial=new Fx({onChange:r=>s({facing:jc(r)})}),this.els.facingOn=E("input",{type:"checkbox",id:"t-facing",onchange:()=>{const r=this.els.facingOn.checked;this.els.dial.setEnabled(r),s({facing:r?jc(this.els.dial.degrees):null})}}),this.els.lightOn=E("input",{type:"checkbox",id:"t-light",onchange:()=>{this.els.lightRange.disabled=!this.els.lightOn.checked,s({light:this.els.lightOn.checked})}}),this.els.lightRange=E("input",{type:"number",id:"t-light-range",min:"1",max:String(Mr),step:"1","aria-label":"Light reach",oninput:()=>{const r=Math.round(+this.els.lightRange.value);r>=1&&s({lightRange:Math.min(Mr,r)})}}),this.els.lightUnit=E("span",{class:"hint"}),this.els.hidden=E("input",{type:"checkbox",onchange:()=>s({hidden:this.els.hidden.checked})}),this.els.where=E("p",{class:"note"}),this.root=E("aside",{class:"panel",id:"inspector"},E("div",{class:"panel-head"},E("h1",{text:"Token"})),E("div",{class:"empty",text:"Nothing selected. Click a token; shift-click for more."}),E("div",{class:"multi"},this.els.count=E("p",{class:"count"}),E("p",{class:"note",text:"Drag any of them to move them together, or nudge them with the arrow keys. Shift-click to add or remove one."}),E("button",{type:"button",class:"danger",text:"Delete selected",onclick:()=>e()})),E("div",{class:"body"},ue("t-name","Name",this.els.name),E("div",{class:"pair"},ue("t-size","Size (squares)",this.els.size),this.els.borderField),E("div",{class:"pair gm-only"},ue("t-shape","Shape",this.els.shape),ue("t-layer","Layer",this.els.layer)),E("div",{class:"pair gm-only"},ue("t-hp","HP",this.els.hp),ue("t-maxhp","Max HP",this.els.maxHp)),E("div",{class:"facing-row"},this.els.dial.root,E("div",{class:"col"},E("label",{class:"check",for:"t-facing"},this.els.facingOn," Facing"),E("span",{class:"hint",text:"Which way it is looking. Drag the dial, or use the arrow keys."}))),E("div",{class:"light-row"},E("label",{class:"check",for:"t-light"},this.els.lightOn," Light"),this.els.lightRange,this.els.lightUnit),ue("t-rot","Artwork rotation",this.els.rot),E("label",{class:"check gm-only",for:"t-hidden"},this.els.hidden," Hidden from players"),this.els.where,E("div",{class:"row gm-only"},E("button",{type:"button",class:"ghost",text:"To front",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!0])}),E("button",{type:"button",class:"ghost",text:"To back",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!1])})),E("button",{type:"button",class:"danger",text:"Delete token",onclick:()=>this.id&&e()}))),this.els.hidden.id="t-hidden",this.player=null}setPlayer(t){this.player=t,this.root.classList.toggle("player",!!t),this.els.borderField.querySelector("label").textContent=t?"Your colour":"Border"}refresh(t,e,n=e?1:0){const s=t.activeScene?t.scenes[t.activeScene]:null,r=e&&(s==null?void 0:s.tokens[e])||null;this.id=(r==null?void 0:r.id)||null,this.count=n;const a=n>1;if(this.root.classList.toggle("no-token",!r&&!a),this.root.classList.toggle("many",a),a&&(this.els.count.textContent=`${n} tokens selected`),!r||a)return;de(this.els.name,r.name),de(this.els.size,Ta(r.size)),de(this.els.border,as(r.border)),de(this.els.shape,r.shape),de(this.els.layer,r.layer),de(this.els.hp,r.hp),de(this.els.maxHp,r.maxHp),de(this.els.rot,Math.round((r.rot||0)*180/Math.PI)%360),wa(this.els.hidden,r.hidden),wa(this.els.lightOn,!!r.light),de(this.els.lightRange,r.lightRange??2),this.els.lightRange.disabled=!r.light,this.els.lightUnit.textContent=`${s.grid.kind.startsWith("hex")?"hexes":"squares"} of light round it`;const o=typeof r.facing=="number"&&Number.isFinite(r.facing);wa(this.els.facingOn,o),this.els.dial.setEnabled(o),document.activeElement===this.els.dial.root&&this.id===this.dialFor||this.els.dial.set(o?kx(r.facing):0),this.dialFor=this.id;const c=s.grid;this.els.where.textContent=`At ${zx(r.x,r.y)} · ${Ta(r.x)}, ${Ta(r.y)} units`+(c.kind==="none"?"":` · ${c.perUnit}${c.distanceLabel} per ${c.unitLabel}`)}}function zx(i,t){const e=Math.floor(i),n=Math.floor(t);return`${e<0?`-${Kc(-e-1)}`:Kc(e)}${n+1}`}function Kc(i){let t="",e=i;do t=String.fromCharCode(65+e%26)+t,e=Math.floor(e/26)-1;while(e>=0);return t}function Hx(i,t,e){return Number.isFinite(i)?Math.min(e,Math.max(t,i)):t}function Ta(i){return Math.round(i*100)/100}const Gx=new Set(["INPUT","SELECT","TEXTAREA","BUTTON"]),Vx=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown","Home","End"]);function Wx(){const i=document.activeElement;return i?Gx.has(i.tagName)||i.isContentEditable:!1}class Xx{constructor(t={},e=null){this.actions=new Map(Object.entries(t)),this.held=new Set,this.onDown=n=>{Wx()||(n.repeat||this.held.add(n.code),(e!=null&&e(n.code,n)||Vx.has(n.code))&&n.preventDefault())},this.onUp=n=>this.held.delete(n.code),this.onBlur=()=>this.held.clear(),window.addEventListener("keydown",this.onDown),window.addEventListener("keyup",this.onUp),window.addEventListener("blur",this.onBlur)}action(t){const e=this.actions.get(t);if(!e)return!1;for(const n of e)if(this.held.has(n))return!0;return!1}axis(t,e){return(this.action(e)?1:0)-(this.action(t)?1:0)}vector(t,e,n,s,r={x:0,y:0}){r.x=this.axis(t,e),r.y=this.axis(n,s);const a=Math.hypot(r.x,r.y);return a>1&&(r.x/=a,r.y/=a),r}dispose(){window.removeEventListener("keydown",this.onDown),window.removeEventListener("keyup",this.onUp),window.removeEventListener("blur",this.onBlur),this.held.clear()}}const Io=3,_n={name:32,members:16,peerId:64,need:256,req:32,upload:8*1024*1024},xs=[14263361,6003669,12605771,10189528,6535316,14186655,5224624,11909199],wu=i=>typeof i=="string";function Nr(i,t="Player"){return(wu(i)?i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim():"").slice(0,_n.name)||t}function $x(i){return wu(i)&&i.length>0&&i.length<=_n.peerId}const qx=(i,t)=>({t:"hello",p:Io,name:Nr(i),gm:t?1:0});function Yx(i){return!i||i.t!=="hello"?null:{protocol:Number.isInteger(i.p)?i.p:-1,name:Nr(i.name),gm:i.gm===1}}function jx(i){return{t:"roster",r:i.slice(0,_n.members).map(t=>[t.peerId,t.name,t.role===Qe?1:0,t.color])}}function Kx(i){return!i||i.t!=="roster"||!Array.isArray(i.r)?null:i.r.slice(0,_n.members).filter(t=>Array.isArray(t)&&$x(t[0])).map(([t,e,n,s])=>({peerId:t,name:Nr(e),role:n===1?Qe:Yn,color:Number.isInteger(s)?s&16777215:xs[0]}))}const Zx=["full","protocol"];function Jx(i){return!i||i.t!=="nope"?null:Zx.includes(i.why)?i.why:"full"}function Qx(i){if(!i||i.t!=="doc")return null;const t=i.s;return!t||typeof t!="object"||Array.isArray(t)||!Number.isInteger(t.seq)||t.seq<0||!t.scenes||typeof t.scenes!="object"?null:t}function ty(i){return!i||i.t!=="op"||!Number.isInteger(i.n)||i.n<1||!Array.isArray(i.c)||typeof i.c[0]!="string"?null:{seq:i.n,cmd:i.c}}const ey=/^[0-9a-f]{64}$/,wr=i=>typeof i=="string"&&ey.test(i);function ny(i){return!i||i.t!=="need"||!Array.isArray(i.h)?[]:[...new Set(i.h.slice(0,_n.need).filter(wr))]}function Zc(i){return Array.isArray(i)?i.slice(0,_n.req).filter(t=>Array.isArray(t)&&typeof t[0]=="string"):[]}const Jc=()=>xu(()=>import("./room-D300m2Q-.js"),[],import.meta.url);class Ts{constructor(t,e={}){this.role=t,this.handlers=e,this.code="",this.name="",this.selfId=null,this.gmId=null,this.admitted=!1,this.link=null,this.members=new Map,this.pending=new Set,this.backlog=[],this.closed=!1,this.voice=null}get isGm(){return this.role===Qe}roster(){return[...this.members.values()]}static async host(t,e,n=null){const s=await Jc(),r=new Ts(Qe,e);return r.open(s,n?s.normaliseCode(n):s.randomCode(),t),r.members.set(r.selfId,Sr(r.selfId,r.name,{role:Qe,color:xs[0]})),r.emitRoster(),r}static async join(t,e,n){const s=await Jc(),r=new Ts(Yn,n);return r.open(s,s.normaliseCode(t),e),r}open(t,e,n){const s=It.multiplayer;this.code=e,this.name=Nr(n,this.isGm?"GM":"Player"),this.selfId=t.selfId,this.link=t.joinRoom({appId:s.appId,code:e,maxPeers:s.maxPlayers-1},{onPeerJoin:r=>this.peerJoined(r),onPeerLeave:r=>this.peerLeft(r),onMessage:(r,a)=>this.receive(r,a),onRelay:r=>{var a,o;return(o=(a=this.handlers).onRelay)==null?void 0:o.call(a,r)},onAsset:(r,a,o)=>{var l,c;this.entitled(o)&&((c=(l=this.handlers).onAsset)==null||c.call(l,r,a,o))},onPeerStream:(r,a,o)=>{var l;return(l=this.voice)==null?void 0:l.stream(r,a,o)},onAssetProgress:(r,a,o)=>{var l,c;this.entitled(o)&&((c=(l=this.handlers).onAssetProgress)==null||c.call(l,r,a,o))}})}listen(t){if(this.handlers=t,!!t.onMessage)for(const[e,n]of this.backlog.splice(0))t.onMessage(e,n)}entitled(t){return this.isGm?this.members.has(t)&&t!==this.selfId:t===this.gmId}leave(){var t;this.closed||(this.closed=!0,(t=this.link)==null||t.leave())}peerJoined(t){var e;this.pending.add(t),this.link.send(qx(this.name,this.isGm),t),(e=this.voice)==null||e.join(t)}peerLeft(t){var e,n,s,r,a;this.pending.delete(t),(e=this.voice)==null||e.leave(t),this.isGm?this.members.delete(t)&&this.emitRoster():t===this.gmId?(this.gmId=null,(s=(n=this.handlers).onGmLeft)==null||s.call(n)):this.members.delete(t)&&((a=(r=this.handlers).onRoster)==null||a.call(r,this.roster()))}receive(t,e){var n,s,r,a,o,l,c;if(!(this.closed||!t||typeof t.t!="string")){if(t.t==="hello")return this.onHello(Yx(t),e);if((t.t==="voice"||t.t==="music")&&this.members.has(e))return(n=this.voice)==null?void 0:n.message(t,e);if(this.entitled(e)){if(this.isGm||t.t!=="roster"&&t.t!=="nope"){this.handlers.onMessage?this.handlers.onMessage(t,e):this.backlog.push([t,e]);return}if(t.t==="roster"){const h=Kx(t);if(!h)return;this.members=new Map(h.map(f=>[f.peerId,f])),!this.admitted&&this.members.has(this.selfId)&&(this.admitted=!0,(r=(s=this.handlers).onAdmitted)==null||r.call(s)),(o=(a=this.handlers).onRoster)==null||o.call(a,this.roster())}else t.t==="nope"&&((c=(l=this.handlers).onRefused)==null||c.call(l,Jx(t)),this.leave())}}}onHello(t,e){var n,s,r,a;if(!(!t||!this.pending.has(e))){if(this.pending.delete(e),this.isGm){if(t.gm)return;if(t.protocol!==Io)return this.link.send({t:"nope",why:"protocol"},e);if(this.members.size>=It.multiplayer.maxPlayers)return this.link.send({t:"nope",why:"full"},e);const o=new Set(this.roster().map(c=>c.color)),l=xs.find(c=>!o.has(c))??xs[this.members.size%xs.length];this.members.set(e,Sr(e,t.name,{role:Yn,color:l})),this.emitRoster(),(s=(n=this.handlers).onSeated)==null||s.call(n,e);return}if(!(!t.gm||this.gmId)){if(t.protocol!==Io)return(a=(r=this.handlers).onRefused)==null||a.call(r,"protocol"),this.leave();this.gmId=e}}}setColor(t,e){const n=this.members.get(t);!n||n.color===e||(this.members.set(t,{...n,color:e}),this.emitRoster())}emitRoster(){var t,e;this.link.send(jx(this.roster())),(e=(t=this.handlers).onRoster)==null||e.call(t,this.roster())}}const Eu="vtt.name",Tu="vtt.recent",iy=6,Au=8,sy=14e3;class ry{constructor({onEnter:t,onResume:e,onOpenFile:n}){var r;this.onEnter=t,this.onResume=e,this.onOpenFile=n,this.lobby=null,this.hintTimer=0,this.els={},this.els.name=E("input",{id:"splash-name",maxlength:String(_n.name),autocomplete:"nickname",spellcheck:"false",placeholder:"What the table calls you",value:oy()}),this.els.code=E("input",{id:"splash-code",class:"code-input",maxlength:String(Au),autocomplete:"off",spellcheck:"false",placeholder:"CODE","aria-label":"Invite code",value:ay(),oninput:()=>{this.els.code.value=this.els.code.value.toUpperCase().replace(/\s+/g,"")},onkeydown:a=>{a.key==="Enter"&&this.join()}}),this.els.host=E("button",{class:"primary big",text:"Host a new table",onclick:()=>this.host()}),this.els.saved=E("ul",{class:"saved-tables","aria-label":"Saved tables"});const s=E("input",{type:"file",accept:".vtt,application/json",class:"file",onchange:a=>{var l;const o=(l=a.target.files)==null?void 0:l[0];a.target.value="",o&&this.openFile(o)}});if(this.els.openFile=E("button",{class:"ghost small",text:"Open a table file…",onclick:()=>s.click()}),this.els.fileInput=s,this.els.join=E("button",{class:"primary big",text:"Join",onclick:()=>this.join()}),this.els.recent=E("ul",{class:"saved-tables recent","aria-label":"Recently joined"}),this.els.status=E("p",{class:"splash-status",role:"status","aria-live":"polite"}),this.els.cancel=E("button",{class:"ghost",text:"Cancel",hidden:!0,onclick:()=>this.cancel()}),this.root=E("div",{id:"splash"},E("div",{class:"splash-card"},E("header",{},E("h1",{text:"Virtual Tabletop"}),E("p",{class:"tagline",text:"No server. The GM's browser is the table, and players connect straight to it."})),E("div",{class:"field"},E("label",{for:"splash-name",text:"Your name"}),this.els.name),E("div",{class:"splash-choices"},E("section",{},E("h2",{text:"Run a table"}),E("p",{text:"You're the GM. You get an invite code to hand to your players."}),this.els.host,this.els.saved,this.els.openFile,this.els.fileInput),E("section",{},E("h2",{text:"Join a table"}),E("p",{text:"Enter the invite code your GM gave you."}),E("div",{class:"join-row"},this.els.code,this.els.join),this.els.recent)),E("div",{class:"splash-foot"},this.els.status,this.els.cancel))),document.body.append(this.root),this.listSaved(),this.listRecent(),!window.isSecureContext||!((r=globalThis.crypto)!=null&&r.subtle)){for(const a of["host","join","code"])this.els[a].disabled=!0;this.setStatus("This page is not served securely (https), so the browser will not let it connect to other players. Open it over https — or on localhost — to host or join.","error")}(this.els.code.value?this.els.join:this.els.name).focus()}setStatus(t,e=""){this.els.status.textContent=t,this.els.status.dataset.kind=e}setBusy(t){for(const e of["name","code","host","join","openFile"])this.els[e].disabled=t;for(const e of this.root.querySelectorAll(".saved-tables button"))e.disabled=t;this.els.cancel.hidden=!t}async listSaved(){const t=await n_();this.els.saved.replaceChildren(...t.map(e=>{const n=E("button",{class:"ghost small del",text:"×",title:"Delete this saved table","aria-label":`Delete ${e.name}`,onclick:async()=>{if(!n.classList.contains("armed")){n.classList.add("armed"),n.textContent="Delete?",setTimeout(()=>{n.classList.remove("armed"),n.textContent="×"},3e3);return}await i_(e.id),this.listSaved()}});return E("li",{},E("div",{class:"what"},E("b",{text:e.name}),E("span",{text:`${th(e.savedAt)}${e.tokens?` · ${e.tokens} token${e.tokens===1?"":"s"}`:""}`})),E("button",{class:"primary small",text:"Resume",onclick:()=>this.resume(e.id)}),n)})),this.els.saved.hidden=!t.length}listRecent(){const t=Do();this.els.recent.replaceChildren(...t.map(e=>E("li",{},E("div",{class:"what"},E("b",{text:e.gm?`${e.gm}'s table`:"A table"}),E("span",{text:`${e.code} · ${th(e.at)}`})),E("button",{class:"primary small",text:"Join","aria-label":`Join ${e.code}`,onclick:()=>{this.els.code.value=e.code,this.join()}}),E("button",{class:"ghost small del",text:"×",title:"Forget this table","aria-label":`Forget ${e.code}`,onclick:()=>{Ru(Do().filter(n=>n.code!==e.code)),this.listRecent()}})))),this.els.recent.hidden=!t.length}async resume(t){this.setBusy(!0),this.setStatus("Setting the table…");let e;try{e=await this.onResume(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not resume that table.","error")}this.host(e.code)}async openFile(t){this.setBusy(!0),this.setStatus(`Reading ${t.name}…`);let e;try{e=await this.onOpenFile(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not open that file.","error")}this.host(e.code)}async host(t=null){const e=this.els.name.value;Qc(e),this.setBusy(!0),this.setStatus("Opening a room…");try{this.lobby=await Ts.host(e,void 0,t)}catch(n){return this.setBusy(!1),this.setStatus(`Could not open a room: ${n.message||n}`,"error")}this.enter()}async join(){const t=this.els.code.value.trim();if(!t)return this.els.code.focus(),this.setStatus("Type the invite code your GM gave you.","error");const e=this.els.name.value;Qc(e),this.setBusy(!0);const n=`Looking for the table at ${t.toUpperCase()}…`;this.setStatus(n),this.hintTimer=setTimeout(()=>{var s;this.setStatus((s=this.lobby)!=null&&s.gmId?`${n} The GM is there but hasn't seated you — the table may be full.`:`${n} Still nothing. Connecting can take 10–20 seconds; check the code matches exactly.`,"warn")},sy);try{this.lobby=await Ts.join(t,e,{onAdmitted:()=>this.enter(),onRefused:s=>this.refused(s),onRelay:s=>{var r;(r=this.lobby)!=null&&r.gmId||s.total&&!s.open&&this.setStatus(`No relay reachable (0 of ${s.total}). Your network may be blocking them.`,"error")}})}catch(s){this.reset(),this.setStatus(`Could not join: ${s.message||s}`,"error")}}refused(t){this.reset(),this.setStatus(t==="protocol"?"That table is running a different version. One of you needs to reload.":"That table is full.","error")}cancel(){this.reset(),this.setStatus("")}reset(){var t;clearTimeout(this.hintTimer),(t=this.lobby)==null||t.leave(),this.lobby=null,this.setBusy(!1)}enter(){clearTimeout(this.hintTimer);const t=this.lobby;t.isGm||ly(t),t.handlers={},this.root.remove(),this.onEnter(t)}}function ay(){return(new URLSearchParams(location.search).get("join")||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,Au)}function oy(){try{return localStorage.getItem(Eu)||""}catch{return""}}function Qc(i){try{localStorage.setItem(Eu,i.trim())}catch{}}function Do(){try{const i=JSON.parse(localStorage.getItem(Tu)||"[]");return Array.isArray(i)?i.filter(t=>t&&typeof t.code=="string"&&t.code):[]}catch{return[]}}function Ru(i){try{localStorage.setItem(Tu,JSON.stringify(i.slice(0,iy)))}catch{}}function ly(i){var n;const t=String(i.code||"").toUpperCase();if(!t)return;const e=((n=i.roster().find(s=>s.peerId===i.gmId))==null?void 0:n.name)||"";Ru([{code:t,gm:e,at:Date.now()},...Do().filter(s=>s.code!==t)])}function th(i){const t=new Date(i),e=new Date,n=Math.round((new Date(e.toDateString())-new Date(t.toDateString()))/864e5),s=t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return n===0?`today, ${s}`:n===1?`yesterday, ${s}`:n<7?t.toLocaleDateString([],{weekday:"long"}):t.toLocaleDateString([],{day:"numeric",month:"short",year:n>300?"numeric":void 0})}async function cy(i){var t;try{if((t=navigator.clipboard)!=null&&t.writeText)return await navigator.clipboard.writeText(i),!0}catch{}try{const e=document.createElement("textarea");e.value=i,e.setAttribute("readonly",""),e.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.appendChild(e),e.select();const n=document.execCommand("copy");return e.remove(),n}catch{return!1}}function hy(i){if(!i)return;const t=document.createRange();t.selectNodeContents(i);const e=window.getSelection();e.removeAllRanges(),e.addRange(t)}const rr="Copy invite link";class uy{constructor(t,{onArmLeave:e,onInvite:n}={}){this.lobby=t,this.onArmLeave=e,this.onInvite=n,this.copyTimer=0,this.els={},this.els.code=E("span",{class:"room-code",text:t.code}),this.els.copyCode=E("button",{class:"ghost",text:"Copy",title:"Copy the room code",onclick:()=>this.copy("code")}),this.els.copyLink=E("button",{class:"ghost",text:rr,onclick:()=>this.copy("link")}),this.els.list=E("ul",{class:"roster"}),this.els.note=E("p",{class:"note"}),this.root=E("aside",{class:"panel",id:"room"},E("div",{class:"panel-head"},E("h1",{text:"At the table"}),this.els.headCopy=E("button",{type:"button",class:"ghost invite-copy",text:rr,title:"Copy an invite to paste to your players",onclick:()=>this.copy("link",this.els.headCopy)})),this.els.list,this.els.note),this.invite=E("section",{class:"invite",dataset:{tool:"invite"}},E("h2",{text:"Invite players"}),E("div",{class:"room-code-row"},this.els.code,this.els.copyCode),this.els.copyLink,E("p",{class:"note",text:"Players type the code on the start screen, or open the link."})),this.setNote(t.isGm?"":"The GM sets up the table. Add and move your own tokens below."),this.render(t.roster())}setNote(t,e=""){this.els.note.hidden=!t,this.els.note.textContent=t,this.els.note.dataset.kind=e}render(t){const e=this.lobby.selfId;this.els.list.replaceChildren(...t.map(n=>E("li",{dataset:{peer:n.peerId}},E("i",{class:"seat",style:{background:as(n.color)}}),E("span",{class:"who",text:n.name}),E("span",{class:"mic",title:"In voice","aria-hidden":"true"}),E("em",{text:[n.role===Qe?"GM":"",n.peerId===e?"you":""].filter(Boolean).join(" · ")}))))}setVoice(t){for(const e of this.els.list.children){const n=t.get(e.dataset.peer);e.classList.toggle("in-voice",!!(n!=null&&n.on)),e.classList.toggle("speaking",!!(n!=null&&n.on&&n.speaking)),e.classList.toggle("muted",!!(n!=null&&n.on&&(n.muted||n.silenced)))}}gmLeft(){this.setNote("The GM has left. The table is frozen until they come back.","warn")}inviteLink(){const t=new URL(location.href);return t.search="",t.hash="",t.searchParams.set("join",this.lobby.code),t.href}async copy(t,e=t==="code"?this.els.copyCode:this.els.copyLink){var s;await cy(t==="code"?this.lobby.code:this.inviteLink())?e.textContent="Copied ✓":((s=this.onInvite)==null||s.call(this,!0),hy(this.els.code),e.textContent="Press Ctrl+C"),clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>{this.els.copyCode.textContent="Copy",this.els.copyLink.textContent=rr,this.els.headCopy.textContent=rr},1800)}leave(){var e;if(!this.leaveArmed){this.leaveArmed=!0,(e=this.onArmLeave)==null||e.call(this,!0),clearTimeout(this.leaveTimer),this.leaveTimer=setTimeout(()=>{var n;this.leaveArmed=!1,(n=this.onArmLeave)==null||n.call(this,!1)},3500);return}this.lobby.leave();const t=new URL(location.href);t.searchParams.delete("join"),location.href=t.href}}class dy{constructor({onImportToken:t,onAddBlank:e}){const n=E("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:s=>{const r=[...s.target.files||[]];s.target.value="",r.length&&t(r)}});this.root=E("aside",{class:"panel",id:"player"},E("div",{class:"panel-head"},E("h1",{text:"Your tokens"})),E("section",{},n,E("div",{class:"row"},E("button",{class:"primary",id:"p-add-token",text:"Add from image…",onclick:()=>n.click()}),E("button",{class:"ghost",id:"p-add-blank",text:"Blank",onclick:()=>e()})),E("p",{class:"note",text:"Add a picture of your character, or a blank disc. Your tokens wear your colour; drag one to move it, click it to name it, turn it, resize it or change your colour."})))}}const fy=[2,4,6,8,10,12,20,100];class py{constructor({onRoll:t,onError:e}){this.onRoll=t,this.onError=e,this.gm=!0,this.els={},this.els.expr=E("input",{class:"dice-expr",placeholder:"1d20+2 Kick",maxlength:"128",spellcheck:"false",autocomplete:"off","aria-label":"Dice to roll",onkeydown:n=>{n.key==="Enter"&&this.rollTyped()}}),this.els.hide=E("input",{type:"checkbox",id:"dice-hide"}),this.els.hideLabel=E("label",{class:"dice-hide",for:"dice-hide",title:"Roll in secret: players see that you rolled, not what"},this.els.hide," Hide"),this.root=E("div",{class:"dice-bar"},...fy.map(n=>E("button",{type:"button",class:"die",text:n===100?"d%":`d${n}`,title:`Roll a d${n}`,dataset:{sides:String(n)},onclick:()=>this.onRoll(`1d${n}`)})),this.els.hideLabel,E("div",{class:"dice-typed"},this.els.expr,E("button",{type:"button",class:"primary roll",text:"Roll",onclick:()=>this.rollTyped()})))}get hidden(){return this.gm&&this.els.hide.checked}setGm(t){this.gm=t,this.els.hideLabel.hidden=!t,t||(this.els.hide.checked=!1)}rollTyped(){const t=this.els.expr.value.trim();if(!t)return this.els.expr.focus();try{Lr(t)}catch(e){this.onError(e.message);return}this.onRoll(t)}}class my{constructor({onSay:t,onRoll:e,onError:n}){this.onSay=t,this.onRoll=e,this.onError=n,this.lastKey="",this.els={},this.els.feed=E("ol",{class:"feed","aria-live":"polite","aria-label":"Table talk"}),this.els.input=E("input",{class:"say",placeholder:"Say something…   /r 1d20+2 Kick to roll",maxlength:String(Ji.text),autocomplete:"off","aria-label":"Say something to the table",onkeydown:s=>{s.key==="Enter"?this.send():s.key==="Escape"&&this.els.input.blur()}}),this.root=E("div",{class:"talk"},this.els.feed,this.els.input)}send(){const t=this.els.input.value.trim();if(!t)return;const e=/^\/r(?:oll)?\s+(.+)$/i.exec(t);if(e){try{Lr(e[1])}catch(n){this.onError(n.message);return}this.onRoll(e[1])}else this.onSay(t);this.els.input.value=""}refresh(t,e){const n=t.slice(-60),s=n.map(o=>o.id).join(",")+Object.values(e).map(o=>o.peerId+o.name+o.color).join();if(s===this.lastKey)return;this.lastKey=s;const r=this.els.feed,a=r.scrollHeight-r.scrollTop-r.clientHeight<24;r.replaceChildren(...n.map((o,l)=>{const c=e[o.by],h=l===n.length-1,f=E("i",{class:"seat",style:{background:as((c==null?void 0:c.color)??9280918)}}),d=E("span",{class:"who",text:(c==null?void 0:c.name)??"Someone"},(c==null?void 0:c.role)===Qe?E("em",{class:"gm",text:"GM"}):null);if(o.kind==="roll"){const p=o.dice.map(v=>E("span",{class:v.kept?"kept":"dropped",text:String(v.value),title:`d${v.sides}`})),g=o.mod?E("span",{class:"mod",text:o.mod>0?`+${o.mod}`:String(o.mod)}):null;return E("li",{class:`roll${h?" latest":""}`,title:`${o.expr}${o.note?` — ${o.note}`:""} — draws ${o.from+1}–${o.from+o.draws} of this table's dice`},f,d,o.hidden?E("span",{class:"secret-tag",text:"secret"}):null,o.note?E("span",{class:"note",text:o.note}):null,E("span",{class:"expr",text:o.expr}),E("span",{class:"faces"},...p,g),E("b",{class:"total",text:String(o.total)}))}return E("li",{class:`msg${h?" latest":""}`,title:o.at?new Date(o.at).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):""},f,d,E("span",{class:"text",text:o.text}))})),a&&(r.scrollTop=r.scrollHeight)}}const gy={map:'<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z"/><path d="M9 4v13.5M15 6.5V20"/>',grid:'<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M9.2 3.5v17M14.8 3.5v17M3.5 9.2h17M3.5 14.8h17"/>',tokens:'<path d="M6 20.5h12"/><path d="M8 20.5c-.3-2.6.9-4.5 3.2-6.1L9.6 13c-1.3.8-2.9.7-3.6-.4-.6-.9-.3-1.9.6-2.6l3.6-3.1.6-3.1 2.1 1.9c3.6.8 5.6 4.3 5.1 8.8-.2 2.2-.7 4.1-1.5 6"/><circle cx="12.6" cy="8.9" r=".7" fill="currentColor" stroke="none"/>',undo:'<path d="M9 7 4.5 11.5 9 16"/><path d="M5 11.5h9a5 5 0 0 1 0 10h-2"/>',redo:'<path d="M15 7l4.5 4.5L15 16"/><path d="M19 11.5h-9a5 5 0 0 0 0 10h2"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><rect x="8.5" y="8.5" width="7" height="7" rx="1"/>',save:'<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M5 19.5h14"/>',fx:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="2.5"/>',light:'<path d="M14 3.5v17"/><path d="M14 7.5h6.5M14 12h6.5M14 16.5h6.5M17.3 3.5v4M17.3 12v4.5"/><circle cx="7" cy="12" r="2"/><path d="M7 6.5v1.5M7 16v1.5M2.5 12H4M3.8 8.8l1 1M3.8 15.2l1-1"/>',scenes:'<path d="M12 3.5 21 8l-9 4.5L3 8z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16l9 4.5 9-4.5"/>',music:'<path d="M9 18V5.5l11-2v12.5"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',voice:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',invite:'<circle cx="10" cy="8.5" r="3.5"/><path d="M3.5 20c.8-3.6 3.3-5.5 6.5-5.5 1.6 0 3 .5 4.1 1.4"/><path d="M18 13v7M14.5 16.5h7"/>',leave:'<path d="M14 4H6.5A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20H14"/><path d="M11 12h10M17.5 8.5 21 12l-3.5 3.5"/>'};function vy(i){const t=document.createElement("span");return t.className="icon",t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${gy[i]}</svg>`,t}class _y{constructor(t,{onOpen:e}){this.onOpen=e,this.open=null,this.buttons=new Map,this.root=E("nav",{id:"rail","aria-label":"Tools"},...t.map(n=>{if(n==="gap")return E("div",{class:"gap"});if(n==="sep")return E("div",{class:"sep",role:"separator"});const s=n.key?`${n.label} (${n.key})`:n.label,r=E("button",{type:"button",class:"tool",title:s,"aria-label":n.label,dataset:{tool:n.id},"aria-pressed":n.panel?"false":null,onclick:()=>n.panel?this.toggle(n.id):n.run()},vy(n.id));return this.buttons.set(n.id,r),r}))}toggle(t){this.show(this.open===t?null:t)}show(t){this.open=t;for(const[e,n]of this.buttons)n.hasAttribute("aria-pressed")&&n.setAttribute("aria-pressed",String(e===t));this.onOpen(t)}setVisible(t,e){const n=this.buttons.get(t);n&&(n.hidden=!e)}setArmed(t,e,n){const s=this.buttons.get(t);s&&(s.classList.toggle("armed",e),n&&(s.title=n))}setEnabled(t,e){const n=this.buttons.get(t);n&&(n.disabled=!e)}}const xy={rain:"Rain",snow:"Snow",fog:"Fog",embers:"Embers"};class yy{constructor({onPlay:t,onAmbience:e}){this.onAmbience=e,this.els={};const n=(s,r,a)=>E("button",{type:"button",class:"ghost",text:r,title:a,dataset:{fx:s},onclick:()=>t(s)});this.els.weather=[null,...nu].map(s=>E("button",{type:"button",class:"ghost",text:s?xy[s]:"None",dataset:{weather:s||"none"},"aria-pressed":"false",onclick:()=>e({weather:s})})),this.els.intensity=E("input",{type:"range",min:"0.1",max:"1",step:"0.05",id:"fx-intensity","aria-label":"Weather intensity",oninput:()=>e({intensity:+this.els.intensity.value})}),this.els.darkness=E("input",{type:"range",min:"0",max:"1",step:"0.05",id:"fx-darkness","aria-label":"Darkness",oninput:()=>e({darkness:+this.els.darkness.value})}),this.root=E("section",{class:"fx",dataset:{tool:"fx"}},E("h2",{text:"FX"}),E("h3",{class:"sub",text:"For a moment"}),E("div",{class:"fx-buttons"},n("lightning","⚡ Lightning","A flash on every screen"),n("shake","Shake","Shake everyone's board"),n("damage","Damage","A red pulse round the edges")),E("h3",{class:"sub",text:"Weather"}),E("div",{class:"fx-buttons"},...this.els.weather),this.els.intensityField=E("div",{class:"field"},E("label",{for:"fx-intensity",text:"Intensity"}),this.els.intensity),E("div",{class:"field"},E("label",{for:"fx-darkness",text:"Darkness"}),this.els.darkness),E("p",{class:"note",text:"Weather and darkness stay on for this scene until you change them, and players who join later see them too. You see them fainter, so you can keep working."}),E("h3",{class:"sub",text:"Pings"}),E("p",{class:"note",text:"Click an empty spot on the map to ping it for everyone (click once more first if something is selected). Alt+Shift-click also brings everyone's view there."}))}refresh(t){const e=t||{};for(const n of this.els.weather)n.setAttribute("aria-pressed",String((e.weather||"none")===n.dataset.weather));document.activeElement!==this.els.darkness&&(this.els.darkness.value=String(e.darkness||0)),document.activeElement!==this.els.intensity&&(this.els.intensity.value=String(e.intensity??.6)),this.els.intensity.disabled=!e.weather,this.els.intensityField.classList.toggle("off",!e.weather)}}const Aa={fade:["Fade","Fade to black","Fade back in"],swirl:["Swirl","Swirl to black","Swirl back in"],curtain:["Curtain","Lower the curtain","Raise the curtain"],drapes:["Drapes","Close the curtains","Open the curtains"],ink:["Ink","Ink to black","Ink back out"],burn:["Burn","Burn it away","Unburn"],freeze:["Freeze","Freeze over","Thaw"]};class My{constructor({onCommand:t,onGo:e,onNew:n,onFx:s}){this.onCommand=t,this.onGo=e,this.transitions=rl.map(r=>E("button",{type:"button",class:"ghost",text:Aa[r][0],dataset:{transition:r},"aria-pressed":"false",onclick:()=>s({transition:r})})),this.blackout=E("button",{type:"button",class:"ghost wide",id:"scene-blackout","aria-pressed":"false",onclick:()=>s({blackout:this.blackout.getAttribute("aria-pressed")!=="true"})}),this.list=E("ul",{class:"scene-list","aria-label":"Scenes"}),this.root=E("section",{class:"scenes",dataset:{tool:"scenes"}},E("h2",{text:"Scenes"}),E("h3",{class:"sub",text:"Intermission"}),E("div",{class:"fx-buttons transitions"},...this.transitions),this.blackout,E("h3",{class:"sub",text:"Scenes"}),this.list,E("div",{class:"row"},E("button",{type:"button",class:"ghost",id:"scene-new",text:"New scene",onclick:()=>n()}),this.copy=E("button",{type:"button",class:"ghost",id:"scene-copy",text:"Duplicate this one"})),E("p",{class:"note",text:"Build each scene on the board: map, grid, monsters, light and weather. Go moves the table there and the players' tokens come along; everything else stays with its scene. To change scenes out of sight, start the intermission, go, and lift it when ready. Players who join during one see it too. Scenes are saved with the table."})),this.key=""}refresh(t){var a;const e=((a=t.scenes[t.activeScene])==null?void 0:a.fx)||{},n=Aa[e.transition]?e.transition:"fade";for(const o of this.transitions)o.setAttribute("aria-pressed",String(n===o.dataset.transition));this.blackout.setAttribute("aria-pressed",String(!!e.blackout)),this.blackout.textContent=Aa[n][e.blackout?2:1];const s=JSON.stringify([t.activeScene,t.sceneOrder.map(o=>{const l=t.scenes[o];return[o,l==null?void 0:l.name,Object.keys((l==null?void 0:l.tokens)||{}).length]})]);if(s===this.key)return;this.key=s;const r=t.activeScene;this.copy.onclick=()=>{var o;return r&&this.onCommand(["scene.copy",r,`${((o=t.scenes[r])==null?void 0:o.name)||"Scene"} (copy)`])},this.copy.disabled=!r,this.list.replaceChildren(...t.sceneOrder.map(o=>{const l=t.scenes[o];if(!l)return null;const c=o===r,h=E("input",{type:"text",value:l.name,maxlength:"48","aria-label":"Scene name",onchange:()=>{const d=h.value.trim();d&&d!==l.name?this.onCommand(["scene.rename",o,d]):h.value=l.name},onkeydown:d=>{d.key==="Enter"&&h.blur()}}),f=E("button",{type:"button",class:"ghost small del",text:"×",title:c?"The players are here — go to another scene first":"Delete this scene","aria-label":`Delete ${l.name}`,disabled:c,onclick:()=>{if(!f.classList.contains("armed")){f.classList.add("armed"),f.textContent="Delete?",setTimeout(()=>{f.classList.remove("armed"),f.textContent="×"},3e3);return}this.onCommand(["scene.del",o])}});return E("li",{class:c?"live":""},h,c?E("span",{class:"badge",text:"Now playing"}):E("button",{type:"button",class:"primary small",text:"Go",onclick:()=>this.onGo(o)}),f)}).filter(Boolean))}}const Ra=12,Sy=8,by={wall:"Draw a wall the way you would with a pen. Each stroke is one wall; start or end it on another wall's end to join them.",mask:"Drag round something solid — a pillar, a boulder — and let go: the shape closes itself.",erase:"Click a wall or mask to take it away, or drag across several."};class wy{constructor({stage:t,getScene:e,onCommand:n}){this.stage=t,this.getScene=e,this.onCommand=n,this.layer=t.walls,this.mode="wall",this.snap="free",this.active=!1,this.raw=null,this.erasing=!1,this.modes=["wall","mask","erase"].map(s=>E("button",{type:"button",class:"ghost",dataset:{draw:s},"aria-pressed":"false",text:{wall:"Wall",mask:"Mask",erase:"Erase"}[s],onclick:()=>this.setMode(s)})),this.snaps=["free","grid"].map(s=>E("button",{type:"button",class:"ghost",dataset:{snap:s},"aria-pressed":"false",text:{free:"Free",grid:"Grid"}[s],title:s==="grid"?"Pull strokes onto the grid's corners":"Freehand: the stroke as you draw it",onclick:()=>this.setSnap(s)})),this.note=E("p",{class:"note"}),this.count=E("p",{class:"note light-count"}),this.clear=E("button",{type:"button",class:"ghost wide",id:"light-clear",text:"Clear all",onclick:()=>{if(!this.clear.classList.contains("armed")){this.clear.classList.add("armed"),this.clear.textContent="Clear every wall and mask?",setTimeout(()=>{this.clear.classList.remove("armed"),this.clear.textContent="Clear all"},3e3);return}const s=this.getScene();s&&this.onCommand(["block.set",s.id,[]]),this.clear.classList.remove("armed"),this.clear.textContent="Clear all"}}),this.root=E("section",{class:"light",dataset:{tool:"light"}},E("h2",{text:"Light"}),E("p",{class:"note",text:"Walls and masks stop light. In the dark, a torch lights its own room and not the next, and players cannot see what is behind a wall. Only you see the lines, while this tool is open."}),E("h3",{class:"sub",text:"Pen"}),E("div",{class:"fx-buttons"},...this.modes),this.note,E("h3",{class:"sub",text:"Snap"}),E("div",{class:"fx-buttons two"},...this.snaps),this.count,this.clear),this.setMode("wall"),this.setSnap("free"),window.addEventListener("keydown",s=>{!this.active||!this.raw||s.key!=="Escape"||(this.cancel(),s.preventDefault(),s.stopPropagation())},!0)}setActive(t){this.active=t,this.layer.shown=t,t||this.cancel(),this.cursor()}setMode(t){this.cancel(),this.mode=t;for(const e of this.modes)e.setAttribute("aria-pressed",String(e.dataset.draw===t));this.note.textContent=by[t],this.cursor()}setSnap(t){this.snap=t;for(const e of this.snaps)e.setAttribute("aria-pressed",String(e.dataset.snap===t))}cursor(){const t=this.stage.renderer.domElement,e=this.active?this.mode==="erase"?"pointer":"crosshair":"";t.style.cursor!==e&&(t.style.cursor=e)}refresh(t){const e=(t==null?void 0:t.blocks)||[],n=e.filter(a=>a.kind==="wall").length,s=e.length-n,r=(a,o)=>`${a} ${o}${a===1?"":"s"}`;this.count.textContent=e.length?`${r(n,"wall")} and ${r(s,"mask")} on this scene.`:"Nothing on this scene stops light yet.",this.clear.disabled=!e.length}get drawing(){return this.active}perPx(){return this.stage.cam.viewUnits/Math.max(1,this.stage.rect.height)}down(t){if(this.getScene()){if(this.mode==="erase"){this.erasing=!0,this.eraseAt(t);return}this.raw=[t.x,t.y],this.show()}}move(t){if(this.erasing){this.eraseAt(t);return}if(!this.raw){this.hover(t);return}const e=this.raw;Math.hypot(t.x-e[e.length-2],t.y-e[e.length-1])>2*this.perPx()&&(e.push(t.x,t.y),this.show())}up(){if(this.erasing){this.erasing=!1;return}const t=this.raw,e=this.getScene();if(this.cancel(),!t||!e||Ty(t)<Sy*this.perPx())return;const n=this.shape(t);n.length<(this.mode==="mask"?6:4)||this.onCommand(["block.add",e.id,{kind:this.mode,pts:n}])}hover(t){var e;this.cursor(),this.layer.doomed=this.mode==="erase"?((e=this.blockAt(t))==null?void 0:e.id)??null:null}show(){this.layer.draft=this.raw?{kind:this.mode,pts:this.shape(this.raw)}:null}shape(t){var s,r;const e=this.snap==="grid"&&((r=(s=this.getScene())==null?void 0:s.grid)==null?void 0:r.kind)===al;let n;if(e)n=t.map(a=>Math.round(a));else{const a=Ey(t);let o=.75*this.perPx();for(n=eh(a,o);n.length>1e3;)n=eh(a,o*=1.5)}if(n=Ay(n),this.mode==="wall"&&n.length>=4){const a=n.length,o=this.endNear(n[0],n[1]);o&&(n[0]=o.x,n[1]=o.y);const l=this.endNear(n[a-2],n[a-1]);l&&(n[a-2]=l.x,n[a-1]=l.y)}if(this.mode==="mask"){const a=e?.01:Ra*this.perPx();for(;n.length>6&&Math.hypot(n[n.length-2]-n[0],n[n.length-1]-n[1])<a;)n.length-=2}return Ry(n)}endNear(t,e){var r;let n=Ra*this.perPx(),s=null;for(const a of((r=this.getScene())==null?void 0:r.blocks)||[]){if(a.kind!=="wall")continue;const o=a.pts.length;for(const l of[0,o-2]){const c=Math.hypot(a.pts[l]-t,a.pts[l+1]-e);c<n&&(n=c,s={x:a.pts[l],y:a.pts[l+1]})}}return s}cancel(){this.raw=null,this.erasing=!1,this.layer.draft=null,this.layer.doomed=null}blockAt(t){var s;let e=null,n=Ra*this.perPx();for(const r of((s=this.getScene())==null?void 0:s.blocks)||[]){const a=Xv(r,t.x,t.y);(a<n||a===0&&r.kind==="wall")&&(n=a,e=r)}return e}eraseAt(t){const e=this.blockAt(t),n=this.getScene();e&&n&&this.onCommand(["block.del",n.id,e.id]),this.layer.doomed=null}}function Ey(i){const t=i.length>>1;if(t<5)return i.slice();const e=i.slice(),n=2;for(let s=1;s<t-1;s++){const r=Math.min(n,s,t-1-s);let a=0,o=0;for(let l=-r;l<=r;l++)a+=i[(s+l)*2],o+=i[(s+l)*2+1];e[s*2]=a/(2*r+1),e[s*2+1]=o/(2*r+1)}return e}function Ty(i){let t=0;for(let e=2;e<i.length;e+=2)t+=Math.hypot(i[e]-i[e-2],i[e+1]-i[e-1]);return t}function Ay(i){const t=[i[0],i[1]];for(let e=2;e<i.length;e+=2)Math.hypot(i[e]-t[t.length-2],i[e+1]-t[t.length-1])>1e-6&&t.push(i[e],i[e+1]);return t}function Ry(i){if(i.length<6)return i;const t=[i[0],i[1]];for(let e=2;e+2<i.length;e+=2){const n=t[t.length-2],s=t[t.length-1],r=i[e],a=i[e+1],o=i[e+2],l=i[e+3],c=(r-n)*(l-a)-(a-s)*(o-r),h=(r-n)*(o-r)+(a-s)*(l-a);(Math.abs(c)>1e-9||h<0)&&t.push(r,a)}return t.push(i[i.length-2],i[i.length-1]),t}function eh(i,t){const e=i.length>>1;if(e<3)return i.slice();const n=new Uint8Array(e);n[0]=1,n[e-1]=1;const s=[[0,e-1]];for(;s.length;){const[a,o]=s.pop(),l=i[a*2],c=i[a*2+1],h=i[o*2]-l,f=i[o*2+1]-c,d=Math.hypot(h,f);let p=-1,g=t;for(let v=a+1;v<o;v++){const u=d>1e-9?Math.abs((i[v*2]-l)*f-(i[v*2+1]-c)*h)/d:Math.hypot(i[v*2]-l,i[v*2+1]-c);u>g&&(g=u,p=v)}p>=0&&(n[p]=1,s.push([a,p],[p,o]))}const r=[];for(let a=0;a<e;a++)n[a]&&r.push(i[a*2],i[a*2+1]);return r}const nh=10;class Cy{constructor({onRoll:t}){this.onRoll=t,this.key="vtt.quick.offline",this.items=[],this.root=E("div",{class:"quick","aria-label":"Quick rolls"}),this.load()}useTable(t){this.key=`vtt.quick.${t||"offline"}`,this.load()}load(){try{const t=JSON.parse(localStorage.getItem(this.key)||"[]");this.items=Array.isArray(t)?t.filter(e=>e&&typeof e.note=="string"&&typeof e.expr=="string").slice(0,nh):[]}catch{this.items=[]}this.render()}save(){try{localStorage.setItem(this.key,JSON.stringify(this.items))}catch{}}add(t,e){const n=this.items.find(s=>s.note.toLowerCase()===t.toLowerCase());if(n){if(n.expr===e&&n.note===t)return;n.expr=e,n.note=t}else this.items.push({note:t,expr:e}),this.items.length>nh&&this.items.shift();this.save(),this.render()}remove(t){this.items=this.items.filter(e=>e.note!==t),this.save(),this.render()}render(){this.root.hidden=!this.items.length,this.root.replaceChildren(...this.items.map(t=>E("span",{class:"quick-roll"},E("button",{type:"button",class:"go",text:t.note,title:`Roll ${t.expr} ${t.note}`,onclick:()=>this.onRoll(`${t.expr} ${t.note}`)}),E("button",{type:"button",class:"forget",text:"×",title:`Remove ${t.note}`,"aria-label":`Remove ${t.note}`,onclick:()=>this.remove(t.note)}))))}}const Cu="vtt.voice.chimes";function Py(){try{return localStorage.getItem(Cu)!=="0"}catch{return!0}}const ih={kind:"voice"},Ly=.035;class Iy{constructor({lobby:t,onChange:e}){this.lobby=t,this.onChange=e,this.on=!1,this.muted=!1,this.ptt=!1,this.pttDown=!1,this.stream=null,this.error="",this.output="",this.peers=new Map,this.silenced=new Set,this.localSpeaking=!1,this.chimes=Py(),this.ctx=null,this.localAnalyser=null,this.audioRoot=document.createElement("div"),this.audioRoot.hidden=!0,document.body.append(this.audioRoot),this.music=null,t.voice={join:n=>{var s;this.announce(n),(s=this.music)==null||s.peerJoined(n)},leave:n=>this.drop(n),stream:(n,s,r)=>{var a;return(r==null?void 0:r.kind)==="music"?(a=this.music)==null?void 0:a.hear(n,s):this.hear(n,s)},message:(n,s)=>{var r;return n.t==="music"?(r=this.music)==null?void 0:r.message(n,s):this.message(n,s)}},this.meter=setInterval(()=>this.measure(),120)}get isGm(){return this.lobby.isGm}get live(){return this.on&&!this.muted&&!this.silenced.has(this.lobby.selfId)&&(!this.ptt||this.pttDown)}peer(t){let e=this.peers.get(t);return e||(e={on:!1,muted:!1,volume:1,audio:null,analyser:null,speaking:!1},this.peers.set(t,e)),e}async start(t=""){this.error="";try{this.stream=await navigator.mediaDevices.getUserMedia({audio:{deviceId:t?{exact:t}:void 0,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(e){return this.error=(e==null?void 0:e.name)==="NotAllowedError"?"The browser was not allowed to use the microphone. Allow it in the address bar and try again.":`No microphone could be opened (${(e==null?void 0:e.name)||e}).`,this.onChange(),!1}this.on=!0,this.applyTrack(),this.watchLocal(),this.chime("join");for(const[e,n]of this.peers)n.on&&this.lobby.link.addStream(this.stream,e,ih);return this.announce(),this.onChange(),!0}stop(){var t;if(this.on){for(const[e,n]of this.peers)n.on&&this.lobby.link.removeStream(this.stream,e),this.unplug(n);for(const e of((t=this.stream)==null?void 0:t.getTracks())||[])e.stop();this.stream=null,this.on=!1,this.localSpeaking=!1,this.announce(),this.onChange()}}async useMicrophone(t){this.on&&(this.stop(),await this.start(t))}setMuted(t){this.muted=t,this.applyTrack(),this.announce(),this.onChange()}setPtt(t){this.ptt=t,this.applyTrack(),this.announce(),this.onChange()}pushToTalk(t){!this.ptt||this.pttDown===t||(this.pttDown=t,this.applyTrack(),this.onChange())}applyTrack(){var t;for(const e of((t=this.stream)==null?void 0:t.getAudioTracks())||[])e.enabled=this.live}announce(t){var n;const e={t:"voice",on:this.on,muted:this.muted||this.silenced.has(this.lobby.selfId)};this.isGm&&(e.silenced=[...this.silenced]),(n=this.lobby.link)==null||n.send(e,t)}message(t,e){const n=this.peer(e),s=n.on;if(n.on=!!t.on,n.muted=!!t.muted,this.on&&n.on!==s&&this.chime(n.on?"join":"leave"),this.on&&n.on&&!s&&this.lobby.link.addStream(this.stream,e,ih),this.on&&!n.on&&s&&this.lobby.link.removeStream(this.stream,e),n.on||this.unplug(n),Array.isArray(t.silenced)&&e===this.lobby.gmId){this.silenced=new Set(t.silenced.filter(r=>typeof r=="string")),this.applyTrack();for(const[r,a]of this.peers)this.applyVolume(r,a)}this.onChange()}hear(t,e){const n=this.peer(e);if(!this.on)return;this.unplug(n);const s=document.createElement("audio");s.autoplay=!0,s.srcObject=t,this.output&&s.setSinkId&&s.setSinkId(this.output).catch(()=>{}),this.audioRoot.append(s),n.audio=s,this.applyVolume(e,n);try{const r=this.context().createMediaStreamSource(t);n.analyser=this.context().createAnalyser(),n.analyser.fftSize=512,r.connect(n.analyser)}catch{}this.onChange()}setVolume(t,e){const n=this.peer(t);n.volume=e,this.applyVolume(t,n)}applyVolume(t,e){e.audio&&(e.audio.volume=this.silenced.has(t)?0:e.volume)}async setOutput(t){var e,n;this.output=t,(e=this.music)==null||e.setOutput(t);for(const s of this.peers.values())(n=s.audio)!=null&&n.setSinkId&&await s.audio.setSinkId(t).catch(()=>{})}silence(t,e){if(this.isGm){e?this.silenced.add(t):this.silenced.delete(t);for(const[n,s]of this.peers)this.applyVolume(n,s);this.announce(),this.onChange()}}drop(t){const e=this.peers.get(t);e!=null&&e.on&&this.on&&this.chime("leave"),e&&this.unplug(e),this.peers.delete(t),this.onChange()}unplug(t){t.audio&&(t.audio.srcObject=null,t.audio.remove()),t.audio=null,t.analyser=null,t.speaking=!1}setChimes(t){this.chimes=t;try{localStorage.setItem(Cu,t?"1":"0")}catch{}this.onChange()}chime(t){if(!this.chimes)return;let e;try{e=this.context()}catch{return}const n=t==="join"?[660,880]:[660,494],s=e.currentTime+.01;n.forEach((r,a)=>{const o=e.createOscillator(),l=e.createGain();o.type="sine",o.frequency.value=r;const c=s+a*.11;l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.12,c+.015),l.gain.exponentialRampToValueAtTime(1e-4,c+.22),o.connect(l).connect(e.destination),o.start(c),o.stop(c+.25)}),this.lastChime=t}context(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}watchLocal(){try{const t=this.context().createMediaStreamSource(this.stream);this.localAnalyser=this.context().createAnalyser(),this.localAnalyser.fftSize=512,t.connect(this.localAnalyser)}catch{this.localAnalyser=null}}measure(){let t=!1;const e=s=>{if(!s)return!1;const r=new Float32Array(s.fftSize);s.getFloatTimeDomainData(r);let a=0;for(const o of r)a+=o*o;return Math.sqrt(a/r.length)>Ly},n=this.on&&this.live&&e(this.localAnalyser);n!==this.localSpeaking&&(this.localSpeaking=n,t=!0);for(const[s,r]of this.peers){const a=r.on&&!r.muted&&!this.silenced.has(s)&&e(r.analyser);a!==r.speaking&&(r.speaking=a,t=!0)}t&&this.onChange()}status(){const t=new Map;t.set(this.lobby.selfId,{on:this.on,muted:!this.live,speaking:this.localSpeaking,silenced:this.silenced.has(this.lobby.selfId)});for(const[e,n]of this.peers)t.set(e,{on:n.on,muted:n.muted,speaking:n.speaking,silenced:this.silenced.has(e)});return t}leave(){var t;this.stop(),clearInterval(this.meter),(t=this.ctx)==null||t.close().catch(()=>{})}}async function Dy(){try{const i=await navigator.mediaDevices.enumerateDevices();return{inputs:i.filter(t=>t.kind==="audioinput"),outputs:i.filter(t=>t.kind==="audiooutput"),canChooseOutput:typeof HTMLMediaElement<"u"&&"setSinkId"in HTMLMediaElement.prototype}}catch{return{inputs:[],outputs:[],canChooseOutput:!1}}}const sh="KeyV";class Uy{constructor({voice:t,roster:e}){this.voice=t,this.roster=e,this.devices={inputs:[],outputs:[],canChooseOutput:!1},this.root=E("section",{class:"voice",dataset:{tool:"voice"}}),this.render();const n=()=>{var s;return/^(INPUT|TEXTAREA|SELECT)$/.test(((s=document.activeElement)==null?void 0:s.tagName)||"")};addEventListener("keydown",s=>{s.code===sh&&!s.repeat&&!n()&&t.pushToTalk(!0)}),addEventListener("keyup",s=>{s.code===sh&&t.pushToTalk(!1)}),addEventListener("blur",()=>t.pushToTalk(!1))}async refreshDevices(){this.devices=await Dy(),this.render()}render(){var c,h;const t=this.voice,e=this.roster(),n=f=>e.find(d=>d.peerId===f);if(!t.on){this.root.replaceChildren(...[E("h2",{text:"Voice"}),E("button",{type:"button",class:"primary",id:"voice-join",text:"Join voice",onclick:async()=>{await t.start()&&this.refreshDevices()}}),t.error?E("p",{class:"note",dataset:{kind:"error"},text:t.error}):null,E("p",{class:"note",text:"Your microphone goes straight to the others at the table who have joined — no server in between."}),this.people(n)].filter(Boolean));return}const s=E("select",{onchange:()=>t.useMicrophone(s.value).then(()=>this.refreshDevices())},...this.devices.inputs.map(f=>E("option",{value:f.deviceId,text:f.label||"Microphone"}))),r=(h=(c=t.stream)==null?void 0:c.getAudioTracks()[0])==null?void 0:h.getSettings().deviceId;r&&(s.value=r);const a=this.devices.canChooseOutput?E("select",{onchange:()=>t.setOutput(a.value)},...this.devices.outputs.map(f=>E("option",{value:f.deviceId,text:f.label||"Speakers"}))):null;a&&t.output&&(a.value=t.output);const o=E("input",{type:"checkbox",id:"voice-ptt",onchange:()=>t.setPtt(o.checked)});o.checked=t.ptt;const l=E("input",{type:"checkbox",id:"voice-chimes",onchange:()=>t.setChimes(l.checked)});l.checked=t.chimes,this.root.replaceChildren(...[E("h2",{text:"Voice"}),E("div",{class:"row"},E("button",{type:"button",class:t.muted?"primary":"ghost",id:"voice-mute",text:t.muted?"Unmute":"Mute",onclick:()=>t.setMuted(!t.muted)}),E("button",{type:"button",class:"ghost",id:"voice-leave",text:"Leave voice",onclick:()=>t.stop()})),t.silenced.has(t.lobby.selfId)?E("p",{class:"note",dataset:{kind:"warn"},text:"The GM has muted you for now."}):null,E("label",{class:"check",for:"voice-ptt"},o," Push to talk — hold V"),E("label",{class:"check",for:"voice-chimes"},l," Join and leave sounds"),E("div",{class:"field"},E("label",{text:"Microphone"}),s),a?E("div",{class:"field"},E("label",{text:"Speakers"}),a):null,this.people(n)].filter(Boolean))}people(t){const e=this.voice,n=[...e.peers].filter(([,s])=>s.on).map(([s,r])=>{const a=t(s),o=E("input",{type:"range",min:"0",max:"1",step:"0.05",value:String(r.volume),title:"Volume","aria-label":`Volume for ${(a==null?void 0:a.name)??"them"}`,oninput:()=>e.setVolume(s,+o.value)}),l=e.silenced.has(s);return E("li",{class:r.speaking?"speaking":""},E("i",{class:"seat",style:{background:as((a==null?void 0:a.color)??9280918)}}),E("span",{class:"who",text:(a==null?void 0:a.name)??"Someone"}),e.on?o:null,e.isGm&&(a==null?void 0:a.role)!==Qe?E("button",{type:"button",class:`ghost small${l?" armed":""}`,text:l?"Unsilence":"Silence",title:l?"Let them speak again":"Mute them for everyone",onclick:()=>e.silence(s,!l)}):null)});return E("div",{},E("h3",{class:"sub",text:n.length?"In voice":"Nobody else is in voice yet."}),n.length?E("ul",{class:"voice-people"},...n):null)}}const Ny={kind:"music"},ky=128e3,Pu="vtt.music";class Lu{constructor({lobby:t,voice:e,onChange:n}){this.lobby=t,this.onChange=n,this.stream=null,this.source="",this.error="",this.playing=!1,this.audio=null;const s=By();this.volume=s.volume,this.muted=s.muted,e.music=this}get isGm(){return this.lobby.isGm}get sharing(){return!!this.stream}static get canShare(){var n,s,r;if(!((n=navigator.mediaDevices)!=null&&n.getDisplayMedia))return!1;if((((r=(s=navigator.userAgentData)==null?void 0:s.brands)==null?void 0:r.map(a=>a.brand))||[]).some(a=>/Chromium|Google Chrome|Microsoft Edge/.test(a)))return!0;const e=navigator.userAgent;return/Chrome\/|Chromium\/|Edg\//.test(e)&&!/Firefox\//.test(e)}async share(){var r,a;this.error="";let t;try{t=await Fy()}catch(o){return(o==null?void 0:o.name)!=="NotAllowedError"&&(o==null?void 0:o.name)!=="AbortError"&&(this.error=`Could not share that (${(o==null?void 0:o.name)||o}).`),this.onChange(),!1}const e=t.getAudioTracks(),n=t.getVideoTracks()[0],s=(r=n==null?void 0:n.getSettings)==null?void 0:r.call(n).displaySurface;if(!e.length){for(const o of t.getTracks())o.stop();return this.error=Oy(s),console.info("[music] share had no audio track; surface was",s),this.onChange(),!1}this.video=n||null,(a=n==null?void 0:n.applyConstraints)==null||a.call(n,{frameRate:1,width:64,height:64}).catch(()=>{}),this.stream=new MediaStream(e),this.source=(n==null?void 0:n.label)||e[0].label||"a tab",e[0].addEventListener("ended",()=>this.stop());for(const o of this.lobby.link.peers())this.sendTo(o);return this.announce(),this.onChange(),!0}stop(){var t;if(this.stream){for(const e of this.lobby.link.peers())this.lobby.link.removeStream(this.stream,e);for(const e of this.stream.getTracks())e.stop();(t=this.video)==null||t.stop(),this.video=null,this.stream=null,this.source="",this.announce(),this.onChange()}}peerJoined(t){this.isGm&&(this.stream&&this.sendTo(t),this.announce(t))}sendTo(t){const e=this.lobby.link.addStream(this.stream,t,Ny);Promise.allSettled(e||[]).then(()=>{var o,l,c;const n=this.lobby.link.connection(t),s=(o=this.stream)==null?void 0:o.getAudioTracks()[0],r=(l=n==null?void 0:n.getSenders)==null?void 0:l.call(n).find(h=>h.track===s);if(!r)return;const a=r.getParameters();a.encodings=(c=a.encodings)!=null&&c.length?a.encodings:[{}],a.encodings[0].maxBitrate=ky,r.setParameters(a).catch(()=>{})})}announce(t){var e;this.isGm&&((e=this.lobby.link)==null||e.send({t:"music",on:this.sharing},t))}message(t,e){e===this.lobby.gmId&&(this.playing=!!t.on,this.playing||this.unplug(),this.onChange())}hear(t,e){if(e!==this.lobby.gmId)return;this.unplug();const n=document.createElement("audio");n.autoplay=!0,n.srcObject=t,document.body.append(n),n.hidden=!0,this.audio=n,this.playing=!0,this.apply(),this.onChange()}setVolume(t){this.volume=t,this.apply(),rh(this)}setMuted(t){this.muted=t,this.apply(),rh(this),this.onChange()}setOutput(t){var e,n;(n=(e=this.audio)==null?void 0:e.setSinkId)==null||n.call(e,t).catch(()=>{})}apply(){this.audio&&(this.audio.volume=this.muted?0:this.volume)}unplug(){this.audio&&(this.audio.srcObject=null,this.audio.remove()),this.audio=null}leave(){this.stop(),this.unplug()}}async function Fy(){const i=await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:"browser"},audio:!0,selfBrowserSurface:"exclude"});for(const t of i.getAudioTracks())t.applyConstraints({echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}).catch(()=>{});return i}function Oy(i){return i==="window"?'That shared a window, and Chrome only sends sound from a tab. Share again, choose the "Chrome Tab" pane at the top of the picker, pick the tab with the music, and keep "Also share tab audio" switched on.':i==="monitor"?'That shared the whole screen, which carries no sound here. Share again and choose the "Chrome Tab" pane, pick the tab with the music, and keep "Also share tab audio" on.':'That tab was shared without its sound. Share again and switch on "Also share tab audio" at the bottom of the picker before pressing Share.'}function By(){try{const i=JSON.parse(localStorage.getItem(Pu)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.6,muted:!!i.muted}}catch{return{volume:.6,muted:!1}}}function rh(i){try{localStorage.setItem(Pu,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}class zy{constructor({music:t}){this.music=t,this.root=E("section",{class:"music",dataset:{tool:"music"}}),this.render()}render(){const t=this.music,e=[E("h2",{text:"Music"})];t.sharing?e.push(E("p",{class:"playing",text:"♪ Playing to the table"}),E("p",{class:"note source",text:t.source}),E("button",{type:"button",class:"ghost",id:"music-stop",text:"Stop the music",onclick:()=>t.stop()}),E("p",{class:"note",text:"Change track, volume or playlist in that tab — the table hears whatever it plays. Each player has their own volume."})):Lu.canShare?e.push(E("ol",{class:"steps"},E("li",{text:"Start your music in another tab — Spotify, YouTube, anything."}),E("li",{text:`Press the button below. In Chrome's picker choose the "Chrome Tab" pane — not "Window" — and pick that tab.`}),E("li",{text:'Keep "Also share tab audio" switched on, then Share.'})),E("p",{class:"note",text:"Chrome always shares a picture too; the table only ever gets the sound."}),E("button",{type:"button",class:"primary",id:"music-share",text:"Share a tab's sound…",onclick:()=>t.share()})):e.push(E("p",{class:"note",dataset:{kind:"warn"},text:"This browser can share a screen but not its sound — Firefox and Safari have no option for it."}),E("p",{class:"note",text:"To play music to the table, run the table in Chrome or Edge on a computer. Players can listen in any browser."})),t.error&&e.push(E("p",{class:"note",dataset:{kind:"error"},text:t.error})),this.root.replaceChildren(...e)}}class Hy{constructor({music:t}){this.music=t,this.els={},this.els.mute=E("button",{type:"button",class:"ghost small",onclick:()=>t.setMuted(!t.muted)}),this.els.volume=E("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Music volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=E("div",{class:"music-control",hidden:!0},E("span",{class:"label",text:"♪ Music"}),this.els.volume,this.els.mute),this.render()}render(){const t=this.music;this.root.hidden=!t.playing||t.isGm,this.els.volume.value=String(t.volume),this.els.volume.disabled=t.muted,this.els.mute.textContent=t.muted?"Unmute":"Mute"}}class Iu{constructor({ambience:t,label:e="☁ Ambience"}){this.ambience=t,this.els={},this.els.mute=E("button",{type:"button",class:"ghost small",onclick:()=>{t.setMuted(!t.muted),this.render()}}),this.els.volume=E("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Ambience volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=E("div",{class:"music-control ambience-control",hidden:!0},E("span",{class:"label",text:e}),this.els.volume,this.els.mute),this.render()}render(t=this.weather){this.weather=t;const e=this.ambience;this.root.hidden=!t,document.activeElement!==this.els.volume&&(this.els.volume.value=String(e.volume)),this.els.volume.disabled=e.muted,this.els.mute.textContent=e.muted?"Unmute":"Mute"}}const Du="vtt.ambience",Ms=1.5;class Gy{constructor(){this.ctx=null,this.out=null,this.current=null,this.kind=null,this.intensity=.6;const t=Ky();this.volume=t.volume,this.muted=t.muted,this.unlocked=!1,this.curtain=1;const e=()=>{var n,s;this.unlocked=!0,(s=(n=this.ensure())==null?void 0:n.resume)==null||s.call(n),this.apply(),removeEventListener("pointerdown",e,!0),removeEventListener("keydown",e,!0)};addEventListener("pointerdown",e,!0),addEventListener("keydown",e,!0)}ensure(){if(this.ctx)return this.ctx;try{this.ctx=new AudioContext}catch{return null}return this.out=this.ctx.createGain(),this.out.gain.value=this.level(),this.limiter=this.ctx.createDynamicsCompressor(),this.limiter.threshold.value=-6,this.limiter.knee.value=6,this.limiter.ratio.value=12,this.limiter.attack.value=.003,this.limiter.release.value=.25,this.out.connect(this.limiter).connect(this.ctx.destination),this.meter=this.ctx.createAnalyser(),this.meter.fftSize=2048,this.out.connect(this.meter),this.noise=Wy(this.ctx),this.brown=Xy(this.ctx),this.ready=qy(this.ctx),this.ctx}update(t){const e=(t==null?void 0:t.weather)||null,n=(t==null?void 0:t.intensity)??.6;if(e===this.kind&&Math.abs(n-this.intensity)<.001)return;const s=e!==this.kind;this.kind=e,this.intensity=n,this.unlocked&&this.apply(s)}apply(t=!0){var e,n,s;if(!(!this.unlocked||!this.ensure())){if(!this.hissReady){this.ready.then(()=>{this.hissReady=!0,this.apply(!0)});return}(t||!this.current)&&((e=this.current)==null||e.stop(),this.current=this.kind&&((n=Ca[this.kind])==null?void 0:n.call(Ca,this.ctx,this.noise,this.out))||null),(s=this.current)==null||s.set(this.intensity)}}thunder(t){if(!this.unlocked||!this.ensure())return null;const e=(t==null?void 0:t.weather)==="rain"?t.intensity??.6:.5,n=Math.min(1,Math.max(0,e)),s=.15+(1-n)*8;return Vy(this.ctx,this.noise,this.brown,this.out,n,this.ctx.currentTime+s),this.lastThunder={delay:Math.round(s*100)/100,near:n},s}level(){return this.muted?0:this.volume*this.curtain}setVolume(t){this.volume=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),lh(this)}setMuted(t){this.muted=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),lh(this)}setCurtain(t){const e=Math.min(1,Math.max(0,t));Math.abs(e-this.curtain)<.005&&!(e===0&&this.curtain!==0)||(this.curtain=e,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.05))}status(){var e,n;let t=0;if(this.meter){const s=new Float32Array(this.meter.fftSize);this.meter.getFloatTimeDomainData(s),t=Math.sqrt(s.reduce((r,a)=>r+a*a,0)/s.length)}return{kind:this.current?this.kind:null,intensity:this.intensity,volume:this.volume,muted:this.muted,running:((e=this.ctx)==null?void 0:e.state)==="running",level:Math.round(t*1e3)/1e3,thunder:this.lastThunder??null,hiss:!!((n=this.ctx)!=null&&n.hiss)}}}const Ca={rain(i,t,e){const n=Uo(i,t),s=Pn(i,"lowpass",2600,.4),r=Pn(i,"highpass",400,.5),a=i.createGain();n.node.connect(r).connect(s).connect(a);const o=No(i,e);a.connect(o);let l=.6;const c=d=>{const p=Math.random()<.08,g=Xi(i,t),v=Pn(i,"bandpass",p?500+Math.random()*700:1400+Math.random()*3600,p?3:1.5+Math.random()*2),u=i.createGain(),m=(p?.35:.08+Math.random()*.18)*(.6+.4*l),y=p?.12+Math.random()*.1:.03+Math.random()*.06;u.gain.setValueAtTime(0,d),u.gain.linearRampToValueAtTime(m,d+.004+Math.random()*.004),u.gain.exponentialRampToValueAtTime(1e-4,d+y);let x=u;if(i.createStereoPanner){const S=i.createStereoPanner();S.pan.value=Math.random()*1.6-.8,u.connect(S),x=S}g.connect(v).connect(u),x.connect(o),g.start(d,Math.random()*$n),g.stop(d+y+.05)},h=i.hiss?new AudioWorkletNode(i,"vtt-rain",{numberOfInputs:0,outputChannelCount:[2]}):null;h==null||h.connect(o);const f=h?{stop(){setTimeout(()=>{h.port.postMessage("stop"),h.disconnect()},(Ms+.2)*1e3)}}:oh(i,()=>-Math.log(1-Math.random())/(4+26*l),c);return{set(d){l=d,h==null||h.port.postMessage({k:l}),a.gain.setTargetAtTime(.18+.5*l,i.currentTime,.5),s.frequency.setTargetAtTime(1800+2600*l,i.currentTime,.5)},stop(){f.stop(),ko(i,o,[n])}}},embers(i,t,e){const n=No(i,e),s=Uo(i,t),r=Pn(i,"lowpass",300,.7),a=i.createGain();s.node.connect(r).connect(a).connect(n);let o=.6;const c=oh(i,()=>(.06+Math.random()*.5)/(.35+o),h=>{const f=Math.random()<.25?2+Math.floor(Math.random()*3):1;for(let d=0;d<f;d++){const p=h+d*(.015+Math.random()*.04),g=Xi(i,t),v=Pn(i,"bandpass",1200+Math.random()*3500,1.5+Math.random()*3),u=i.createGain(),m=(.5+Math.random()*.9)*(.5+.5*o);u.gain.setValueAtTime(0,p),u.gain.linearRampToValueAtTime(m,p+.001),u.gain.exponentialRampToValueAtTime(1e-4,p+.01+Math.random()*.04),g.connect(v).connect(u).connect(n),g.start(p,Math.random()*$n),g.stop(p+.08)}});return{set(h){o=h,a.gain.setTargetAtTime(.35+.9*o,i.currentTime,.5)},stop(){c.stop(),ko(i,n,[s])}}},snow(i,t,e){return ah(i,t,e,{base:550,spread:380,level:1.6,rate:.12})},fog(i,t,e){return ah(i,t,e,{base:320,spread:140,level:1.1,rate:.07})}};function Vy(i,t,e,n,s,r){const a=1-s,o=.45+.55*s;if(s>.4){const d=.5*(s-.3)*o,p=8+Math.round(8*s);for(let m=0;m<p;m++){const y=r+Math.pow(m/p,1.6)*.55+Math.random()*.03,x=Xi(i,t),S=Pn(i,"lowpass",1800+2600*s*Math.random(),.5),L=i.createGain(),T=d*(1-m/p)*(.5+Math.random()*.5);L.gain.setValueAtTime(0,y),L.gain.linearRampToValueAtTime(T,y+.004),L.gain.exponentialRampToValueAtTime(1e-4,y+.06+Math.random()*.12),x.connect(S).connect(L).connect(n),x.start(y,Math.random()*$n),x.stop(y+.3)}const g=Xi(i,e),v=Pn(i,"lowpass",140,.7),u=i.createGain();u.gain.setValueAtTime(0,r),u.gain.linearRampToValueAtTime(3.2*s*o,r+.02),u.gain.exponentialRampToValueAtTime(1e-4,r+.9),g.connect(v).connect(u).connect(n),g.start(r,Math.random()*$n),g.stop(r+1)}const l=4+4*a+Math.random()*1.5,c=r+(s>.4?.12:.05),h=.25+.9*a,f=(d,p)=>{const g=Xi(i,e),v=Pn(i,"lowpass",d,.6),u=i.createGain();g.connect(v).connect(u).connect(n),u.gain.setValueAtTime(1e-4,c),u.gain.setTargetAtTime(p,c,h/3);let m=c+h;for(;m<c+l;){const y=Math.pow(1-(m-c)/l,.6+.8*a);u.gain.setTargetAtTime(p*y*(.4+.6*Math.random()),m,.12),m+=.25+Math.random()*.5}u.gain.setTargetAtTime(1e-4,c+l,.3),g.start(c,Math.random()*$n),g.stop(c+l+1.5)};f(220+700*s,o*(1.6+2.4*s)*(1+.8*a)),f(90,o*(2.4+2.6*s))}function ah(i,t,e,{base:n,spread:s,level:r,rate:a}){const o=No(i,e),l=Uo(i,t),c=Pn(i,"bandpass",n,1.2),h=i.createGain();l.node.connect(c).connect(h).connect(o);const f=[a,a*.37].map((g,v)=>{const u=i.createOscillator();u.frequency.value=g;const m=i.createGain();return m.gain.value=v===0?s:s*.5,u.connect(m).connect(c.frequency),u.start(),u}),d=i.createOscillator();d.frequency.value=a*.8;const p=i.createGain();return d.connect(p).connect(h.gain),d.start(),{set(g){const v=r*(.2+.8*g);h.gain.setTargetAtTime(v,i.currentTime,.6),p.gain.setTargetAtTime(v*.6,i.currentTime,.6),c.frequency.setTargetAtTime(n*(.8+.5*g),i.currentTime,.8)},stop(){ko(i,o,[l,...f,d])}}}const $n=6;function Wy(i){const t=i.createBuffer(1,i.sampleRate*$n,i.sampleRate),e=t.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1;return t}function Xy(i){const t=i.createBuffer(1,i.sampleRate*$n,i.sampleRate),e=t.getChannelData(0);let n=0;for(let s=0;s<e.length;s++)n=(n+.02*(Math.random()*2-1))/1.02,e[s]=n*3.5;return t}const $y=`
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
});`;function qy(i){if(!i.audioWorklet)return Promise.resolve();const t=URL.createObjectURL(new Blob([$y],{type:"application/javascript"}));return i.audioWorklet.addModule(t).then(()=>{i.hiss=!0}).catch(()=>{}).finally(()=>URL.revokeObjectURL(t))}function Uo(i,t){if(i.hiss){const n=new AudioWorkletNode(i,"vtt-hiss",{numberOfInputs:0,outputChannelCount:[1]});return{node:n,stop(s){setTimeout(()=>{n.port.postMessage("stop"),n.disconnect()},Math.max(0,s-i.currentTime)*1e3)}}}const e=Xi(i,t);return e.start(0,Math.random()*$n),{node:e,stop:n=>e.stop(n)}}function Xi(i,t){const e=i.createBufferSource();return e.buffer=t,e.loop=!0,e}function Pn(i,t,e,n){const s=i.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=n,s}function No(i,t){const e=i.createGain();return e.gain.setValueAtTime(0,i.currentTime),e.gain.linearRampToValueAtTime(1,i.currentTime+Ms),e.connect(t),e}function ko(i,t,e){const n=i.currentTime;t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+Ms);for(const s of e)try{s.stop(n+Ms+.05)}catch{}setTimeout(()=>t.disconnect(),(Ms+.2)*1e3)}const Yy=1.2,jy=100;function oh(i,t,e){let n=i.currentTime+t();const s=()=>{const a=i.currentTime;for(n<a&&(n=a+t());n<a+Yy;)e(n),n+=t()};s();const r=setInterval(s,jy);return{stop(){clearInterval(r)}}}function Ky(){try{const i=JSON.parse(localStorage.getItem(Du)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.5,muted:!!i.muted}}catch{return{volume:.5,muted:!1}}}function lh(i){try{localStorage.setItem(Du,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}const Uu="vtt-table";async function Nu(i,t){var o;const e={};for(const l of Object.keys(i.state.assets||{})){const c=await t.blob(l);c&&(e[l]={mime:c.type||((o=i.state.assets[l])==null?void 0:o.mime)||"image/webp",data:await Jy(c)})}const{id:n,tokens:s,...r}=i,a=JSON.stringify({format:Uu,v:1,...r,assets:e});return new Blob([a],{type:"application/json"})}async function Zy(i){let t;try{t=JSON.parse(i)}catch{throw new Error("That is not a table file.")}if(!t||t.format!==Uu||typeof t.state!="object")throw new Error("That is not a table file.");if(t.v>1)throw new Error("That table was saved by a newer version. Reload to update, then try again.");const e=[];let n=0;for(const[r,a]of Object.entries(t.assets||{}))try{const o=Qy(a.data);if(await Ur(o.buffer)!==r){n++;continue}e.push({hash:r,blob:new Blob([o],{type:typeof a.mime=="string"?a.mime:"image/webp"})})}catch{n++}return{record:{name:typeof t.name=="string"?t.name.slice(0,80):"Imported table",code:typeof t.code=="string"?t.code.slice(0,8):null,savedAt:Number.isFinite(t.savedAt)?t.savedAt:Date.now(),seed:Number.isInteger(t.seed)?t.seed:void 0,rng:t.rng&&typeof t.rng=="object"?t.rng:void 0,said:Number.isInteger(t.said)?t.said:0,secrets:Array.isArray(t.secrets)?t.secrets.slice(-200):[],secretRng:t.secretRng&&typeof t.secretRng=="object"?t.secretRng:void 0,state:wo(t.state)},images:e,skipped:n}}async function Jy(i){const t=new Uint8Array(await i.arrayBuffer());let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}function Qy(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const tM=(i,t)=>typeof i=="string"&&typeof t=="string"&&i.trim().toLowerCase()===t.trim().toLowerCase();function eM(i,t,e){for(const n of Object.values(i.roster))if(!(n.peerId===e||n.role!==Yn||!n.away||n.claimed)&&tM(n.name,t))return n;return null}function ku(i,t,e){const n=[],s=Ee(i);for(const a of Object.values((s==null?void 0:s.tokens)||{}))a.owner===t&&n.push(["tok.patch",a.id,{owner:e}]);const r=i.roster[t];return r&&n.push(["peer.join",{...r,away:!0,claimed:e}]),n}function nM(i,t){const e=[];for(const n of Object.values(i.roster))n.role!==Qe||n.peerId===t||e.push(...ku(i,n.peerId,t));return e}const un={tokens:40,name:48,minSize:.25,maxSize:12,reach:2e3,assetName:128,artPx:2e4},ch=/^[0-9a-f]{64}$/,Pa=i=>typeof i=="string"&&i.length>0&&i.length<=64,ki=i=>typeof i=="number"&&Number.isFinite(i),mr=(i,t,e)=>i<t?t:i>e?e:i,Ui=i=>ki(i)?mr(Math.round(i*100)/100,-2e3,un.reach):null,La=Math.PI*2,hh=i=>Math.round((i%La+La)%La*1e4)/1e4,Ia=(i,t)=>typeof i=="string"?i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,t):"";function iM(i,t){var e;return((e=i.roster[t])==null?void 0:e.role)===Qe}function sM(i,t,e){var s;const n=(s=Ee(i))==null?void 0:s.tokens[e];return!!n&&n.owner===t}function rM(i,t,e){var o;if(!Array.isArray(e)||typeof e[0]!="string")return null;const[n,s,r,a]=e;switch(n){case"asset.add":{if(!s||typeof s!="object"||!ch.test(s.hash))return null;const l=c=>Number.isInteger(c)&&c>0&&c<=un.artPx?c:0;return["asset.add",{hash:s.hash,name:Ia(s.name,un.assetName)||"token",mime:typeof s.mime=="string"&&/^image\/[\w.+-]{1,32}$/.test(s.mime)?s.mime:"image/webp",w:l(s.w),h:l(s.h),size:Number.isInteger(s.size)&&s.size>=0?s.size:0,scaled:!!s.scaled}]}case"tok.add":{if(!s||typeof s!="object")return null;const l=Ui(s.x),c=Ui(s.y);if(l===null||c===null)return null;const h={name:Ia(s.name,un.name),x:l,y:c,size:ki(s.size)?mr(s.size,un.minSize,un.maxSize):1,owner:t,layer:"token",hidden:!1};if(s.asset!==void 0&&s.asset!==null){if(!ch.test(s.asset))return null;h.asset=s.asset}const f=(o=i.roster[t])==null?void 0:o.color;return Number.isInteger(f)?h.border=f:Number.isInteger(s.border)&&(h.border=s.border&16777215),(s.shape==="circle"||s.shape==="square")&&(h.shape=s.shape),["tok.add",h]}case"tok.move":{const l=Ui(r),c=Ui(a);return!Pa(s)||l===null||c===null?null:["tok.move",s,l,c]}case"tok.del":return Pa(s)?["tok.del",s]:null;case"tok.patch":{if(!Pa(s)||!r||typeof r!="object")return null;const l={};return typeof r.name=="string"&&(l.name=Ia(r.name,un.name)),ki(r.size)&&(l.size=mr(Math.round(r.size*100)/100,un.minSize,un.maxSize)),ki(r.rot)&&(l.rot=hh(r.rot)),r.facing===null?l.facing=null:ki(r.facing)&&(l.facing=hh(r.facing)),typeof r.light=="boolean"&&(l.light=r.light),ki(r.lightRange)&&(l.lightRange=mr(Math.round(r.lightRange),1,Mr)),Object.keys(l).length?["tok.patch",s,l]:null}case"peer.color":return Number.isInteger(s)?["peer.color",t,s&16777215]:null;case"dice.roll":return typeof s=="string"&&s.length<=fn.input?["dice.roll",t,s]:null;case"fx.ping":{const l=Ui(s),c=Ui(r);return l===null||c===null?null:["fx.ping",t,l,c]}case"chat.say":{const l=su(s);return l?["chat.say",t,l]:null}default:return null}}function aM(i,t,e){if(!i.roster[t])return!1;if(iM(i,t))return!0;const n=Ee(i);switch(e[0]){case"asset.add":return!0;case"tok.add":{if(!n||e[1].asset&&!i.assets[e[1].asset])return!1;let s=0;for(const r of Object.values(n.tokens))r.owner===t&&s++;return s<un.tokens}case"tok.move":case"tok.del":case"tok.patch":return sM(i,t,e[1]);case"peer.color":case"dice.roll":case"chat.say":case"fx.ping":return e[1]===t;default:return!1}}const oM=50;class lM{constructor({lobby:t,table:e,library:n,onRoster:s,onSeat:r,onFx:a}){this.lobby=t,this.table=e,this.library=n,this.onFx=a,this.unsubscribe=e.events.onRemote((o,l)=>{o==="op"&&t.link.send({t:"op",n:l[1],c:l[0]})}),t.listen({onRoster:s,onSeated:o=>{r==null||r(o),this.sendDoc(o)},onMessage:(o,l)=>this.receive(o,l),onAsset:(o,l,c)=>this.upload(o,l,c)})}sendDoc(t){this.lobby.link.send({t:"doc",s:this.table.snapshot()},t)}receive(t,e){if(t.t==="sync")return this.sendDoc(e);if(t.t==="need")return this.sendAssets(ny(t),e);if(t.t==="req")return this.request(Zc(t.c),e)}request(t,e){var s;let n=0;for(const r of t){const a=rM(this.table.state,e,r);if(!a||!aM(this.table.state,e,a)){n++;continue}if(a[0]==="asset.add"&&!this.library.has(a[1].hash)){n++;continue}if(a[0]==="peer.color"){this.recolor(a[1],a[2]);continue}if(a[0]==="dice.roll"){try{this.table.rollDice(a[2],a[1])}catch{n++}continue}if(a[0]==="fx.ping"){const o={t:"fx",k:"ping",x:a[2],y:a[3],by:a[1]};(s=this.onFx)==null||s.call(this,o),this.lobby.link.send(o);continue}if(a[0]==="chat.say"){this.table.say(a[1],a[2],Date.now());continue}this.table.dispatch(a,{record:!1})}n&&console.info(`[session] refused ${n} of ${t.length} from ${e}`)}recolor(t,e){this.lobby.setColor(t,e);const n=this.table.scene;for(const s of Object.values((n==null?void 0:n.tokens)||{}))s.owner===t&&s.border!==e&&this.table.dispatch(["tok.patch",s.id,{border:e}],{record:!1})}async upload(t,e,n){const s=e==null?void 0:e.h;if(!wr(s))return;const r=await Fu(t);if(!(!r||r.byteLength>_n.upload)){if(await Ur(r)!==s){console.warn("[session] upload did not match its hash",s);return}this.library.has(s)||await this.library.putBytes(s,new Blob([r],{type:Ou(e)})),this.request(Zc(e.req),n)}}async sendAssets(t,e){for(const n of t){const s=await this.library.blob(n);if(!s||!this.lobby.members.has(e))continue;const r=this.table.state.assets[n];await this.lobby.link.sendAsset(await s.arrayBuffer(),{h:n,mime:(r==null?void 0:r.mime)||s.type},e)}}leave(){this.unsubscribe()}}class cM{constructor({lobby:t,table:e,library:n,onRoster:s,onGmLeft:r,onProgress:a,onHydrated:o,onFx:l}){this.lobby=t,this.table=e,this.library=n,this.onProgress=a,this.onHydrated=o,this.onFx=l,this.hydrated=!1,this.asked=new Set,this.syncing=!1,this.patches=new Map,this.patchTimer=0,t.listen({onRoster:s,onGmLeft:r,onMessage:c=>this.receive(c),onAsset:(c,h)=>this.adopt(c,h),onAssetProgress:(c,h)=>this.progress(c,h)})}receive(t){var e,n;if(t.t==="fx")return(e=this.onFx)==null?void 0:e.call(this,t);if(t.t==="doc"){const s=Qx(t);if(!s)return;this.table.load(s),this.hydrated=!0,this.syncing=!1,(n=this.onHydrated)==null||n.call(this),this.fetchMissing()}else if(t.t==="op"){const s=ty(t);if(!s||!this.hydrated||this.syncing||s.seq<=this.table.seq)return;if(s.seq!==this.table.seq+1)return this.resync();if(this.table.dispatch(s.cmd,{record:!1}),this.table.seq!==s.seq)return this.resync();this.fetchMissing()}}resync(){this.syncing=!0,this.lobby.link.send({t:"sync"},this.lobby.gmId)}async fetchMissing(){const t=this.library.missing(this.table.state).filter(n=>!this.asked.has(n));if(!t.length)return;for(const n of t)this.asked.add(n);const e=await this.library.restore(t);for(const n of t)e.includes(n)||this.asked.delete(n);for(let n=0;n<e.length;n+=_n.need)this.lobby.link.send({t:"need",h:e.slice(n,n+_n.need)},this.lobby.gmId)}async adopt(t,e){var s;const n=e==null?void 0:e.h;if(!(!wr(n)||!this.asked.has(n))){this.asked.delete(n);try{const r=await Fu(t);if(!r||await Ur(r)!==n){console.warn("[session] asset did not match its hash",n);return}await this.library.putBytes(n,new Blob([r],{type:Ou(e)}))}finally{this.asked.size||(s=this.onProgress)==null||s.call(this,null,"")}}}request(t){const e=[];for(const n of t)n[0]==="tok.patch"&&typeof n[1]=="string"?this.patches.set(n[1],{...this.patches.get(n[1]),...n[2]}):e.push(n);e.length?(this.flushPatches(),this.lobby.link.send({t:"req",c:e},this.lobby.gmId)):this.patches.size&&!this.patchTimer&&(this.patchTimer=setTimeout(()=>this.flushPatches(),oM))}flushPatches(){if(clearTimeout(this.patchTimer),this.patchTimer=0,!this.patches.size)return;const t=[...this.patches].map(([e,n])=>["tok.patch",e,n]);this.patches.clear(),this.lobby.link.send({t:"req",c:t},this.lobby.gmId)}async upload(t,e){if(await this.library.put(t),this.table.state.assets[t.hash])return this.request(e);await this.lobby.link.sendAsset(await t.blob.arrayBuffer(),{h:t.hash,mime:t.mime,req:e},this.lobby.gmId)}progress(t,e){var r,a;const n=e==null?void 0:e.h;if(!wr(n)||!this.asked.has(n))return;const s=((r=this.table.state.assets[n])==null?void 0:r.name)||"art";(a=this.onProgress)==null||a.call(this,Math.max(0,Math.min(1,t)),s)}leave(){}}async function Fu(i){return i instanceof ArrayBuffer?i:i instanceof Blob?i.arrayBuffer():ArrayBuffer.isView(i)?i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength):null}function Ou(i){const t=i==null?void 0:i.mime;return typeof t=="string"&&/^image\/[\w.+-]{1,32}$/.test(t)?t:"image/webp"}const $=new cl,Ye=new r_;let ge="local";$.dispatch(["peer.join",Sr(ge,"You",{role:Qe})],{record:!1});$.dispatch(["scene.add",{name:"Table"}],{record:!1});const Fo=document.getElementById("chrome"),me=E("div",{id:"busy",hidden:!0}),ys=E("div",{id:"toast",hidden:!0});document.getElementById("stage").append(me);document.body.append(ys);let uh=0;function ve(i,t="info"){ys.textContent=i,ys.dataset.kind=t,ys.hidden=!1,clearTimeout(uh),uh=setTimeout(()=>{ys.hidden=!0},5200)}let tn=null,_e=new Set;const qe=i=>i?Qt?$.dispatch(i):(se==null||se.request([i]),null):null,Bu=i=>Qt||!!i&&i.owner===ge,cn=new bu({onCommand:qe,onImportMap:i=>Ku(i),onPickMap:i=>SM(i),onImportToken:i=>Zu(i),onAddBlank:()=>Ju({}),onFit:()=>bt.fit($.state),onDetect:()=>MM(),onClose:()=>oe.show(null)}),oe=new _y([{id:"map",label:"Map",key:"M",panel:!0},{id:"grid",label:"Grid",key:"G",panel:!0},{id:"tokens",label:"Add tokens",key:"T",panel:!0},{id:"fx",label:"FX — weather, darkness, lightning",key:"X",panel:!0},{id:"light",label:"Light — walls and masks",key:"L",panel:!0},{id:"scenes",label:"Scenes",key:"N",panel:!0},"gap",{id:"undo",label:"Undo",key:"Ctrl+Z",run:()=>$.undo()},{id:"redo",label:"Redo",key:"Ctrl+Shift+Z",run:()=>$.redo()},{id:"fit",label:"Fit the map to the view",key:"F",run:()=>bt.fit($.state)},{id:"save",label:"Save the table to a file",run:()=>TM()},"sep",{id:"music",label:"Music for the table",panel:!0},{id:"voice",label:"Voice",panel:!0},{id:"invite",label:"Invite players",key:"I",panel:!0},{id:"leave",label:"Leave game",run:()=>Oe==null?void 0:Oe.leave()}],{onOpen:i=>{cn.show(i),Qi.setActive(i==="light")}});document.body.prepend(oe.root);const hl=new yy({onPlay:i=>Hu(i),onAmbience:i=>{$.scene&&qe(["scene.fx",$.scene.id,i])}});cn.addSection(hl.root);const zu=new My({onCommand:qe,onGo:i=>dh(i),onFx:i=>{$.scene&&qe(["scene.fx",$.scene.id,i])},onNew:()=>{const i=new Set($.state.sceneOrder);qe(["scene.add",{name:`Scene ${$.state.sceneOrder.length+1}`}]);const t=$.state.sceneOrder.find(e=>!i.has(e));t&&dh(t)}});cn.addSection(zu.root);function dh(i){!$.scene||$.scene.id===i||!$.state.scenes[i]||qe(["scene.go",i])}const gi=new Gy,ul=[new Iu({ambience:gi,label:"Your ambience volume"})];hl.root.append(ul[0].root);function Hu(i){Gu(i),qt&&Qt&&qt.link.send({t:"fx",k:i})}function Gu(i){var t;bt.fx.play(i),i==="lightning"&&gi.thunder((t=$.scene)==null?void 0:t.fx)}const hM=400;let fh=0;function Vu(i,t,e){const n=performance.now();n-fh<hM||(fh=n,i=mn(i),t=mn(t),bt.fx.ping(i,t,Wu(ge)),qt&&(Qt?qt.link.send({t:"fx",k:"ping",x:i,y:t,by:ge,pull:!!e}):se==null||se.request([["fx.ping",i,t]])))}function ph(i){if(i.k==="ping"){if(i.by===ge||!Number.isFinite(i.x)||!Number.isFinite(i.y))return;bt.fx.ping(i.x,i.y,Wu(i.by)),i.pull&&bt.lookAt(i.x,i.y);return}["lightning","shake","damage"].includes(i.k)&&Gu(i.k)}function Wu(i){var t;return as(((t=$.state.roster[i])==null?void 0:t.color)??It.tokens.defaultBorder)}oe.setVisible("invite",!1);oe.setVisible("voice",!1);oe.setVisible("music",!1);oe.setVisible("leave",!1);const uM=["map","grid","tokens","fx","light","scenes","undo","redo","fit","save","music"],dM={KeyM:"map",KeyG:"grid",KeyT:"tokens",KeyX:"fx",KeyL:"light",KeyN:"scenes",KeyI:"invite"},di=new Bx({onCommand:qe,onSizeCommitted:i=>$u(i),onDelete:()=>Yu()});Fo.append(di.root);document.getElementById("stage").append(cn.root);__().then(i=>cn.setLibrary(i));const bt=new Px({canvas:document.getElementById("canvas"),overlayEl:document.getElementById("overlay"),library:Ye,handlers:{onResize:(i,t)=>qe(["tok.patch",i,{size:mn(t)}]),onResizeEnd:i=>$u(i)}}),Qi=new wy({stage:bt,getScene:()=>$.scene,onCommand:qe});cn.addSection(Qi.root);bt.fit($.state);const dl=()=>!Qt&&bt.fx.locked,fM=new Ux(bt,{getState:()=>$.state,locked:dl,canGrab:i=>Bu(i),onSelect:i=>Kn(i),isSelected:i=>_e.has(i),hasSelection:()=>_e.size>0,drawing:()=>Qt&&Qi.drawing?Qi:null,groupOf:i=>_e.has(i)?[..._e]:[i],onToggle:i=>vM(i),onDropGroup:i=>qu(i.map(t=>Dr($.state,t.id,t.x,t.y))),onContext:i=>Kn((i==null?void 0:i.id)??null),onPing:(i,t,e)=>Vu(i,t,e),onTurn:(i,t)=>{Qt||mM(i,t),qe(["tok.patch",i,{facing:t}])}}),Er=new Map,Xu=2500;function pM(i,t,e){Er.set(i,{x:t,y:e,until:performance.now()+Xu}),bt.ghosts.set(i,{x:t,y:e})}const Tr=new Map;function mM(i,t){Tr.set(i,{facing:t,until:performance.now()+Xu}),bt.turns.set(i,t)}function gM(i){var t,e;for(const[n,s]of Er){const r=(t=$.scene)==null?void 0:t.tokens[n];(!r||r.x===s.x&&r.y===s.y||i>s.until)&&(Er.delete(n),bt.ghosts.delete(n))}for(const[n,s]of Tr){const r=(e=$.scene)==null?void 0:e.tokens[n];(!r||typeof r.facing=="number"&&Math.abs(r.facing-s.facing)<.001||i>s.until)&&(Tr.delete(n),bt.turns.delete(n))}}function $u(i){var e;const t=(e=$.scene)==null?void 0:e.tokens[i];t&&qe(Dr($.state,i,t.x,t.y))}function Kn(i){tn=i,_e=new Set(i?[i]:[]),fl()}function vM(i){_e.has(i)?(_e.delete(i),tn===i&&(tn=[..._e].pop()??null)):(_e.add(i),tn=i),fl()}function fl(){bt.selectedIds=_e,bt.selectedId=_e.size===1?tn:null}function _M(){var e;const i=((e=$.scene)==null?void 0:e.tokens)||{};let t=!1;for(const n of _e)i[n]||(_e.delete(n),t=!0);tn&&!i[tn]&&(tn=[..._e].pop()??null,t=!0),t&&fl()}function qu(i){const t=i.filter(Boolean);if(t.length){if(Qt){t.length===1?$.dispatch(t[0]):$.batch(t);return}for(const[,e,n,s]of t)pM(e,n,s);se==null||se.request(t)}}function Oo(){var t;const i=((t=$.scene)==null?void 0:t.tokens)||{};return[..._e].map(e=>i[e]).filter(e=>e&&Bu(e))}function Yu(){const i=Oo().map(t=>["tok.del",t.id]);i.length&&(Qt?i.length===1?$.dispatch(i[0]):$.batch(i):se==null||se.request(i),Kn(null))}const pl=new py({onRoll:i=>kr(i),onError:i=>ve(i,"error")}),ml=new my({onSay:i=>xM(i),onRoll:i=>kr(i),onError:i=>ve(i,"error")}),gl=new Cy({onRoll:i=>kr(i)});document.getElementById("stage").append(E("div",{id:"dice"},ml.root,E("div",{class:"dice-row"},pl.root,gl.root)));function xM(i){if(!Qt)return se==null?void 0:se.request([["chat.say",i]]);$.say(ge,i,Date.now())}function kr(i){var e;let t;try{t=Lr(i)}catch(n){return ve(n.message,"error")}if(t.note&&gl.add(t.note,iu(t.terms)),!Qt)return se==null?void 0:se.request([["dice.roll",i]]);try{if(pl.hidden){const n=$.rollSecret(i,ge,Date.now());bt.dice.play(n,((e=$.state.roster[ge])==null?void 0:e.color)??It.tokens.defaultBorder),ml.refresh($.feedWithSecrets(),$.state.roster),id();return}$.rollDice(i,ge)}catch(n){ve(n.message,"error")}}const Bo=new Set;function ju(){for(const i of $.rolls())Bo.add(i.id)}function yM(){var e;const i=$.rolls().filter(n=>!Bo.has(n.id));if(!i.length)return;for(const n of i)Bo.add(n.id);const t=i[i.length-1];bt.dice.play(t,((e=$.state.roster[t.by])==null?void 0:e.color)??It.tokens.defaultBorder)}async function Ku(i){me.hidden=!1,me.textContent=`Reading ${i.name}…`;try{const t=await pu(i);await Ye.put(t);const e=$.state.activeScene,n=[["asset.add",gu(t)],["scene.map",e,t.hash,t.w,t.h]],s=bu.gridGuessFor(t.name,t.w,t.h),r=t.detected,a=r&&r.confidence>=Is.minConfidence;if(s?n.push(["scene.grid",e,{unitPx:s.unitPx,ox:s.ox,oy:s.oy}]):a&&n.push(["scene.grid",e,{unitPx:mn(r.unitPx),ox:mn(r.ox),oy:mn(r.oy)}]),$.batch(n),bt.fit($.state),s){const o=r&&Math.abs(r.unitPx-s.unitPx)/s.unitPx<.03;ve(`${t.name} — grid from the filename: ${s.cols}×${s.rows} at ${s.unitPx}px.`+(o?" Measuring the image agrees.":""))}else a?ve(`${t.name} — grid measured from the image: ${r.unitPx.toFixed(1)}px (${r.agreed} of ${r.readings} readings agreed). Nudge the offset if it sits wrong.`):(ve(`${t.name} loaded. No grid found in the image — set pixels per cell by hand, or press Detect.`),oe.show("grid"))}catch(t){ve(t.message||"Could not load that image.","error")}finally{me.hidden=!0}}async function MM(){const i=$.scene;if(!(i!=null&&i.map))return ve("Load a map first.");me.hidden=!1,me.textContent="Measuring the grid…";try{const t=await Ye.bitmap(i.map);if(!t)throw new Error("That map is not loaded.");const e=await mu(t,i.artW);if(!e||e.confidence<Is.minConfidence)return ve(e?`Nothing convincing — the best fit was ${e.unitPx.toFixed(1)}px, and only ${e.agreed} of ${e.readings} readings agreed. Left alone.`:"Could not measure that image.");$.dispatch(["scene.grid",i.id,{unitPx:mn(e.unitPx),ox:mn(e.ox),oy:mn(e.oy)}]),ve(`Measured ${e.unitPx.toFixed(1)}px per cell — ${e.agreed} of ${e.readings} readings agreed.`)}catch(t){ve(t.message||"Could not measure that image.","error")}finally{me.hidden=!0}}async function SM(i){me.hidden=!1,me.textContent=`Fetching ${i.name}…`;try{await Ku(await v_(i.url,i.name))}catch(t){ve(t.message||`Could not load ${i.name}.`,"error")}finally{me.hidden=!0}}async function Zu(i){me.hidden=!1;let t=0;for(const e of i){me.textContent=`Reading ${e.name}… (${++t}/${i.length})`;try{const n=await pu(e),s=e.name.replace(/\.[a-z0-9]+$/i,"").slice(0,48),r=[["asset.add",gu(n)],td({asset:n.hash,name:s,border:Qt?It.tokens.defaultBorder:CM()},t-1)];Qt?(await Ye.put(n),$.batch(r)):(me.textContent=`Sending ${e.name} to the GM…`,await se.upload(n,r))}catch(n){ve(n.message||`Could not load ${e.name}.`,"error")}}me.hidden=!0}function Ju(i){Qt||Qu();const t=qe(td(i,0));t&&Kn(t[1])}let Fi=null;function Qu(){var t;const i=Object.values(((t=$.scene)==null?void 0:t.tokens)||{}).filter(e=>e.owner===ge);Fi={known:new Set(i.map(e=>e.id)),until:performance.now()+5e3}}function bM(i){var e;if(!Fi)return;const t=Object.values(((e=$.scene)==null?void 0:e.tokens)||{}).filter(n=>n.owner===ge&&!Fi.known.has(n.id));t.length?(Kn(t[t.length-1].id),Fi=null):i>Fi.until&&(Fi=null)}function td(i,t){var h;const e=bt.cam.camera.position,n=(h=$.scene)==null?void 0:h.grid,s=i.size??It.tokens.defaultSize,r=Math.max(1,s),a=f=>ll(f,-e.y,n,s).map(mn);let o=e.x+t*r,[l,c]=a(o);for(let f=0;f<24&&Ni($.state,l,c);f++)o+=r,[l,c]=a(o);return["tok.add",{border:It.tokens.defaultBorder,owner:Qt?"":ge,...i,size:s,x:l,y:c}]}let qt=null,Oe=null,Se=null,zo=null,De=null,Ss=null,bs=null;function wM(){Ss==null||Ss.render(),bs==null||bs.render()}function ed(){Se&&(zo.render(),Oe==null||Oe.setVoice(Se.status()))}function mh(i){Oe.render(i),Se&&(Se.announce(),ed())}let se=null,Qt=!0;new URLSearchParams(location.search).has("offline")||new ry({onEnter:i=>EM(i),onResume:async i=>{const t=await uu(i);if(!t)throw new Error("That table is no longer saved here.");return await xl(t),t},onOpenFile:async i=>sd(i)});addEventListener("pagehide",()=>{De==null||De.leave(),Se==null||Se.leave(),se==null||se.leave(),qt==null||qt.leave()});function EM(i){qt=i,Qt=qt.isGm;const t=ge;if(ge=qt.selfId,$.dispatch(["peer.join",Sr(ge,qt.name,{role:Qt?Qe:Yn})],{record:!1}),Qt){for(const n of nM($.state,ge))$.dispatch(n,{record:!1});Fr=qt.code}$.state.roster[t]&&t!==ge&&$.dispatch(["peer.part",t],{record:!1}),gl.useTable(qt.code),Oe=new uy(qt,{onInvite:()=>oe.show("invite"),onArmLeave:n=>{const s=Qt?"The table is saved; resume it from the start screen.":"";oe.setArmed("leave",n,n?`Click again to leave. ${s}`.trim():"Leave game"),n&&ve(`Click Leave again to go. ${s}`.trim())}}),Fo.prepend(Oe.root),cn.addSection(Oe.invite),oe.setVisible("invite",!0),oe.setVisible("leave",!0),Se=new Iy({lobby:qt,onChange:()=>ed()}),zo=new Uy({voice:Se,roster:()=>qt.roster()}),cn.addSection(zo.root),oe.setVisible("voice",!0),De=new Lu({lobby:qt,voice:Se,onChange:()=>wM()}),bs=new Hy({music:De}),Oe.root.append(bs.root);const e=new Iu({ambience:gi});if(ul.push(e),Oe.root.append(e.root),Qt&&(Ss=new zy({music:De}),cn.addSection(Ss.root),oe.setVisible("music",!0)),Oe.render(qt.roster()),Qt){se=new lM({lobby:qt,table:$,library:Ye,onSeat:n=>AM(n),onFx:n=>ph(n),onRoster:n=>{mh(n),gh(n)}}),gh(qt.roster());return}pl.setGm(!1);for(const n of uM)oe.setVisible(n,!1);oe.show(null),Kn(null),Fo.insertBefore(new dy({onImportToken:n=>{Qu(),Zu(n)},onAddBlank:()=>Ju({})}).root,di.root),di.setPlayer({onColor:n=>se.request([["peer.color",n]])}),me.hidden=!1,me.textContent="Fetching the table…",se=new cM({lobby:qt,table:$,library:Ye,onRoster:n=>mh(n),onGmLeft:()=>{Oe.gmLeft(),ve("The GM has left the room.","error")},onFx:n=>ph(n),onHydrated:()=>{ju(),me.textContent==="Fetching the table…"&&(me.hidden=!0)},onProgress:(n,s)=>{me.hidden=n===null,n!==null&&(me.textContent=`Receiving ${s}… ${Math.round(n*100)}%`)}})}function gh(i){const t=new Set(i.map(e=>e.peerId));for(const[e,n]of Object.entries($.state.roster))!t.has(e)&&!n.away&&$.dispatch(["peer.join",{...n,away:!0}],{record:!1});for(const e of i){const n=$.state.roster[e.peerId];(!n||n.away||n.name!==e.name||n.color!==e.color||n.role!==e.role)&&$.dispatch(["peer.join",{...e,tokens:(n==null?void 0:n.tokens)??[]}],{record:!1})}}let Ar=null,Fr=null,Ho=0;function vl(){const i=$.scene;return!!i&&(!!i.map||Object.keys(i.tokens).length>0||$.feed().length>0)}function nd(){var t;const i=(t=$.scene)!=null&&t.map?$.state.assets[$.scene.map]:null;if(i!=null&&i.name){const e=i.name.replace(/\.[a-z0-9]+$/i,"").replace(/\((?:\d+x\d+|free)\)/gi,"").replace(/[_\s]+/g," ").trim();if(e)return e.slice(0,80)}return`Table of ${new Date().toLocaleDateString([],{day:"numeric",month:"short"})}`}function Or(){var i;return Ar||(Ar=`t_${Date.now().toString(36)}_${$.seed.toString(36)}`),{id:Ar,name:nd(),code:Fr,savedAt:Date.now(),tokens:Object.keys(((i=$.scene)==null?void 0:i.tokens)||{}).length,state:$.snapshot(),seed:$.seed,rng:$.rng.getState(),said:$.said,secrets:$.secrets,secretRng:$.secretRng.getState()}}function id(){!Qt||!vl()||(clearTimeout(Ho),Ho=setTimeout(()=>du(Or()),700))}function _l(){return clearTimeout(Ho),Qt&&vl()?du(Or()):Promise.resolve(!1)}async function xl(i){$.load(i.state),ju(),Number.isInteger(i.seed)&&($.seed=i.seed),i.rng?$.rng.setState(i.rng):$.rng.seed($.seed),$.said=i.said||0,$.restoreSecrets(i.secrets,i.secretRng),Ar=i.id,Fr=i.code||null,await Ye.restore(Ye.missing($.state)),Kn(null),Go=null,bt.fit($.state)}async function sd(i){const{record:t,images:e,skipped:n}=await Zy(await i.text());for(const s of e)await Ye.putBytes(s.hash,s.blob);return t.id=null,await xl(t),await _l(),n&&ve(n===1?"One image in that file did not match its name and was left out.":`${n} images in that file did not match their names and were left out.`,"error"),t}async function TM(){if(!vl())return ve("Nothing on the table to save yet.");const i=Or(),t=await Nu(i,Ye),e=E("a",{href:URL.createObjectURL(t),download:`${i.name}.vtt`});document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),1e4),ve(`Saved ${i.name}.vtt — open it from the start screen to carry on anywhere.`)}function AM(i){const t=qt==null?void 0:qt.members.get(i),e=t&&eM($.state,t.name,i);if(e){qt.setColor(i,e.color);for(const n of ku($.state,e.peerId,i))$.dispatch(n,{record:!1});ve(`${t.name} is back, with their tokens.`)}}addEventListener("pagehide",()=>{_l()});const RM=new Xx({panLeft:["KeyA"],panRight:["KeyD"],panUp:["KeyW"],panDown:["KeyS"]},(i,t)=>{var r;if(dl())return!1;if(i==="KeyF")return bt.fit($.state),!0;if(i==="Escape"&&oe.open)return oe.show(null),!0;if(i==="Escape"&&_e.size)return Kn(null),!0;const e=dM[i];if(e&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&(Qt||e==="invite")&&!((r=oe.buttons.get(e))!=null&&r.hidden))return oe.toggle(e),!0;if((t.ctrlKey||t.metaKey)&&i==="KeyZ")return Qt?(t.shiftKey?$.redo():$.undo(),!0):!1;if(!Oo().length)return!1;if(i==="Delete"||i==="Backspace")return Yu(),!0;const n=(i==="ArrowRight"?1:0)-(i==="ArrowLeft"?1:0),s=(i==="ArrowDown"?1:0)-(i==="ArrowUp"?1:0);return!n&&!s?!1:(qu(Oo().map(a=>Dr($.state,a.id,a.x+n,a.y+s))),!0)}),gs={x:0,y:0},vh=new hd({hz:It.sim.hz});let _h=-1,Go=null,Da=!1,xh=$.state.activeScene;function rd(i){var n,s,r,a;requestAnimationFrame(rd);const{steps:t,frameDt:e}=vh.advance(i);(Er.size||Tr.size)&&gM(i);for(let o=0;o<t;o++)$.step(vh.dt);if(RM.vector("panLeft","panRight","panUp","panDown",gs),dl())fM.cancel();else if(gs.x||gs.y){const o=bt.cam.viewUnits*e;bt.cam.panBy(gs.x*o,gs.y*o)}if($.seq!==_h){_h=$.seq,$.state.activeScene!==xh&&(xh=$.state.activeScene,Qi.cancel(),bt.fit($.state)),bM(i),id(),yM(),ml.refresh($.feedWithSecrets(),$.state.roster),oe.setEnabled("undo",$.undoStack.length>0),oe.setEnabled("redo",$.redoStack.length>0),cn.refresh($.state),hl.refresh((n=$.scene)==null?void 0:n.fx),zu.refresh($.state),Qi.refresh($.scene);for(const o of ul)o.render(((r=(s=$.scene)==null?void 0:s.fx)==null?void 0:r.weather)||null);_M(),di.refresh($.state,tn,_e.size),Da=!0}else(di.id!==tn||di.count!==_e.size)&&di.refresh($.state,tn,_e.size);if(!Qt){const o=$.scene,l=o?`${o.id}:${o.map}:${o.artW}x${o.artH}`:"";l!==Go&&(Go=l,bt.fit($.state))}bt.frame($.state,e,{isGm:Qt,self:ge}),gi.update((a=$.scene)==null?void 0:a.fx),gi.setCurtain(1-(bt.fx.out??0)),Da&&(Da=!1,Ye.trimBitmaps($.state))}requestAnimationFrame(rd);window.__vtt={tokens:()=>{var i;return Object.values(((i=$.scene)==null?void 0:i.tokens)||{})},cam:()=>({x:bt.cam.camera.position.x,y:bt.cam.camera.position.y,viewUnits:bt.cam.viewUnits}),seq:()=>$.seq,dispatch:i=>qe(i),moveTo:(i,t,e)=>Dr($.state,i,t,e),origins:()=>bt.originViews.size,zoomTo:(i,t,e)=>{bt.cam.viewUnits=e,bt.cam.apply(),bt.cam.camera.position.set(i,-t,10),bt.cam.clamp()},bounds:()=>{const i=$.scene;return i?[i.artW,i.artH,i.grid.unitPx]:null},selected:()=>tn,selection:()=>[..._e],saveNow:()=>_l(),tableRecord:()=>({id:Ar,code:Fr,name:nd()}),resumeTable:async i=>xl(await uu(i)),exportText:async()=>(await Nu(Or(),Ye)).text(),importText:async i=>(await sd(new File([i],"table.vtt"))).name,rolls:()=>$.rolls(),feed:()=>$.feed(),darkAt:(i,t)=>{const e=bt.fx.toScreen(i,t),n=bt.fx.dark,s=n.width/bt.fx.rect.width;return n.getContext("2d").getImageData(Math.round(e.x*s),Math.round(e.y*s),1,1).data[3]/255},fx:()=>{var i;return{scene:((i=$.scene)==null?void 0:i.fx)??null,weather:bt.fx.weather,particles:bt.fx.parts.length,shade:bt.fx.darkShown,out:bt.fx.out,cover:bt.fx.cover.dataset.kind,pings:bt.fx.pings.length,flash:bt.fx.flash.classList.contains("fx-go")?bt.fx.flash.dataset.kind:null,shaking:document.getElementById("canvas").classList.contains("fx-shake")}},playFx:i=>Hu(i),ambience:()=>gi.status(),ambienceEngine:()=>gi,ping:(i,t,e)=>Vu(i,t,e),music:()=>De?{sharing:De.sharing,source:De.source,playing:De.playing,hearing:!!De.audio,volume:De.volume,muted:De.muted,error:De.error}:null,shareTone:async()=>{const i=new AudioContext,t=i.createOscillator(),e=i.createMediaStreamDestination();t.connect(e),t.start();const n=navigator.mediaDevices.getDisplayMedia;navigator.mediaDevices.getDisplayMedia=async()=>e.stream;try{return await De.share()}finally{navigator.mediaDevices.getDisplayMedia=n}},voice:()=>Se?{lastChime:Se.lastChime??null,chimes:Se.chimes,on:Se.on,muted:Se.muted,live:Se.live,peers:[...Se.peers].map(([i,t])=>({id:i,on:t.on,muted:t.muted,playing:!!t.audio,speaking:t.speaking,volume:t.volume})),silenced:[...Se.silenced]}:null,diceShown:()=>bt.dice.current?{id:bt.dice.current.id,dice:bt.dice.current.dice.length,settled:bt.dice.current.settledAt!==null}:null,roll:i=>kr(i),diceReadout:()=>bt.dice.readout(),openTool:i=>i==="all"?cn.show("all"):oe.show(i),room:()=>qt?{code:qt.code,role:qt.role,self:ge,roster:qt.roster()}:null,scenes:()=>({active:$.state.activeScene,order:[...$.state.sceneOrder],names:$.state.sceneOrder.map(i=>$.state.scenes[i].name)}),scene:()=>{const i=$.scene;return i?{map:i.map,artW:i.artW,grid:{...i.grid}}:null},blocks:()=>{var i;return JSON.parse(JSON.stringify(((i=$.scene)==null?void 0:i.blocks)||[]))},hasArt:i=>Ye.has(i),mapShown:()=>!!bt.map.texture,roster:()=>Object.values($.state.roster),hovered:()=>bt.hoveredId,drawn:i=>{var e;const t=(e=bt.views.get(i))==null?void 0:e.root.position;return t?[t.x,-t.y]:null},screenOf:(i,t)=>{const e=bt.cam.toNdc(i,-t);return[bt.rect.left+(e.x*.5+.5)*bt.rect.width,bt.rect.top+(1-(e.y*.5+.5))*bt.rect.height]}};function mn(i){return Math.round(i*100)/100}function CM(){var i;return((i=qt==null?void 0:qt.roster().find(t=>t.peerId===ge))==null?void 0:i.color)??It.tokens.defaultBorder}export{vi as Q,PM as r,Gc as s,ix as t};
