(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class Qu{constructor({hz:t=60,maxFrame:e=.25,maxSteps:n=5}={}){this.hz=t,this.dt=1/t,this.maxFrame=e,this.maxSteps=n,this.acc=0,this.last=0,this.seeded=!1,this.dropped=0}advance(t){if(!this.seeded)return this.seeded=!0,this.last=t,{steps:0,frameDt:0,alpha:0};const e=Math.min(this.maxFrame,(t-this.last)/1e3);this.last=t,this.acc+=e;let n=Math.floor(this.acc/this.dt);return n>this.maxSteps&&(this.dropped+=n-this.maxSteps,n=this.maxSteps,this.acc=n*this.dt),this.acc-=n*this.dt,{steps:n,frameDt:e,alpha:this.acc/this.dt}}reset(){this.acc=0,this.seeded=!1,this.dropped=0}}function td(i,t,e){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e}class Hr{constructor(t=1){this.seed(t)}seed(t){let e=t>>>0;const n=()=>{e=e+2654435769>>>0;let s=e;return s=Math.imul(s^s>>>16,569420461),s=Math.imul(s^s>>>15,1935289751),(s^s>>>15)>>>0};return this.s0=n(),this.s1=n(),this.s2=n(),this.s3=n(),this.s0|this.s1|this.s2|this.s3||(this.s0=1),this.count=0,this}next(){const t=(s,r)=>(s<<r|s>>>32-r)>>>0,e=Math.imul(t(Math.imul(this.s1,5)>>>0,7),9)>>>0,n=this.s1<<9>>>0;return this.s2=(this.s2^this.s0)>>>0,this.s3=(this.s3^this.s1)>>>0,this.s1=(this.s1^this.s2)>>>0,this.s0=(this.s0^this.s3)>>>0,this.s2=(this.s2^n)>>>0,this.s3=t(this.s3,11),this.count++,e}float(){return this.next()/4294967296}range(t,e){return t+this.float()*(e-t)}int(t,e){return t+Math.floor(this.float()*(e-t+1))}chance(t){return this.float()<t}pick(t){return t[Math.floor(this.float()*t.length)]}weighted(t){let e=0;for(const[,s]of t)e+=s;if(e<=0)return null;let n=this.float()*e;for(const[s,r]of t)if(n-=r,n<=0)return s;return t[t.length-1][0]}getState(){return{s0:this.s0,s1:this.s1,s2:this.s2,s3:this.s3,count:this.count}}setState(t){return this.s0=t.s0,this.s1=t.s1,this.s2=t.s2,this.s3=t.s3,this.count=t.count??0,this}}function Ml(i,...t){let e=i>>>0;for(const n of t)e=Math.imul(e^n>>>0,625341585)>>>0,e=(e^e>>>13)>>>0;return e>>>0}class ed{constructor(){this.local=[],this.remote=[]}on(t){return this.local.push(t),()=>this.off(this.local,t)}onRemote(t){return this.remote.push(t),()=>this.off(this.remote,t)}off(t,e){const n=t.indexOf(e);n>=0&&t.splice(n,1)}emit(t,e){for(const n of this.local)n(t,e);for(const n of this.remote)n(t,e)}emitLocal(t,e){for(const n of this.local)n(t,e)}emitRemote(t,e){for(const n of this.remote)n(t,e)}clear(){this.local.length=0,this.remote.length=0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="169",nd=0,Sl=1,id=2,hh=1,sd=2,An=3,qn=0,Be=1,Rn=2,Vn=0,Oi=1,bl=2,El=3,wl=4,rd=5,oi=100,ad=101,od=102,ld=103,cd=104,hd=200,ud=201,dd=202,fd=203,La=204,Ia=205,pd=206,md=207,gd=208,_d=209,vd=210,xd=211,yd=212,Md=213,Sd=214,Da=0,Ua=1,Na=2,Wi=3,Fa=4,ka=5,Oa=6,Ba=7,uh=0,bd=1,Ed=2,Wn=0,wd=1,Td=2,Ad=3,Rd=4,Cd=5,Pd=6,Ld=7,dh=300,Xi=301,qi=302,za=303,Ha=304,Tr=306,Ga=1e3,ci=1001,Va=1002,Ze=1003,Id=1004,Is=1005,qe=1006,Gr=1007,Pn=1008,Dn=1009,fh=1010,ph=1011,Ms=1012,Oo=1013,ui=1014,Ln=1015,Es=1016,Bo=1017,zo=1018,$i=1020,mh=35902,gh=1021,_h=1022,on=1023,vh=1024,xh=1025,Bi=1026,Yi=1027,yh=1028,Ho=1029,Mh=1030,Go=1031,Vo=1033,ir=33776,sr=33777,rr=33778,ar=33779,Wa=35840,Xa=35841,qa=35842,$a=35843,Ya=36196,ja=37492,Ka=37496,Za=37808,Ja=37809,Qa=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,or=36492,uo=36494,fo=36495,Sh=36283,po=36284,mo=36285,go=36286,Dd=3200,Ud=3201,bh=0,Nd=1,Gn="",Fe="srgb",Kn="srgb-linear",Wo="display-p3",Ar="display-p3-linear",fr="linear",ie="srgb",pr="rec709",mr="p3",_i=7680,Tl=519,Fd=512,kd=513,Od=514,Eh=515,Bd=516,zd=517,Hd=518,Gd=519,Al=35044,Rl="300 es",In=2e3,gr=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,_o=180/Math.PI;function ws(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Vd(i,t){return(i%t+t)%t}function Wr(i,t,e){return(1-e)*i+e*t}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],h=s[3],m=s[6],M=s[1],x=s[4],b=s[7],I=s[2],R=s[5],A=s[8];return r[0]=a*_+o*M+l*I,r[3]=a*h+o*x+l*R,r[6]=a*m+o*b+l*A,r[1]=c*_+f*M+u*I,r[4]=c*h+f*x+u*R,r[7]=c*m+f*b+u*A,r[2]=d*_+p*M+g*I,r[5]=d*h+p*x+g*R,r[8]=d*m+p*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],u=f*a-o*c,d=o*l-f*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-f*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Ft;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){const i=_r("canvas");return i.style.display="block",i}const Cl={};function lr(i){i in Cl||(Cl[i]=!0,console.warn(i))}function Xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $d(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pl=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rs={[Kn]:{transfer:fr,primaries:pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:ie,primaries:pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ar]:{transfer:fr,primaries:mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl)},[Wo]:{transfer:ie,primaries:mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl).convertLinearToSRGB()}},Yd=new Set([Kn,Ar]),Zt={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Yd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=rs[t].toReference,s=rs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return rs[i].primaries},getTransfer:function(i){return i===Gn?fr:rs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(rs[t].luminanceCoefficients)}};function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class jd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=_r("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kd=0;class Th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($r(s[a].image)):r.push($r(s[a]))}else r=$r(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zd=0;class we extends Zi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=ci,s=ci,r=qe,a=Pn,o=on,l=Dn,c=we.DEFAULT_ANISOTROPY,f=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ws(),this.name="",this.source=new Th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=dh;we.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],f=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],h=l[6],m=l[10];if(Math.abs(f-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+h)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,b=(p+1)/2,I=(m+1)/2,R=(f+d)/4,A=(u+_)/4,D=(g+h)/4;return x>b&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=A/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=D/r),this.set(n,s,r,e),this}let M=Math.sqrt((h-g)*(h-g)+(u-_)*(u-_)+(d-f)*(d-f));return Math.abs(M)<.001&&(M=1),this.x=(h-g)/M,this.y=(u-_)/M,this.z=(d-f)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Th(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Jd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ah extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||f!==g){let h=1-o;const m=l*d+c*p+f*g+u*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const I=Math.sqrt(x),R=Math.atan2(I,m*M);h=Math.sin(h*R)/I,o=Math.sin(o*R)/I}const b=o*M;if(l=l*h+d*b,c=c*h+p*b,f=f*h+g*b,u=u*h+_*b,h===1-o){const I=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=I,c*=I,f*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+f*u+l*p-c*d,t[e+1]=l*g+f*d+c*u-o*p,t[e+2]=c*g+f*p+o*d-l*u,t[e+3]=f*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*f*u+c*p*g,this._y=c*p*u-d*f*g,this._z=c*f*g+d*p*u,this._w=c*f*u-d*p*g;break;case"YXZ":this._x=d*f*u+c*p*g,this._y=c*p*u-d*f*g,this._z=c*f*g-d*p*u,this._w=c*f*u+d*p*g;break;case"ZXY":this._x=d*f*u-c*p*g,this._y=c*p*u+d*f*g,this._z=c*f*g+d*p*u,this._w=c*f*u-d*p*g;break;case"ZYX":this._x=d*f*u-c*p*g,this._y=c*p*u+d*f*g,this._z=c*f*g-d*p*u,this._w=c*f*u+d*p*g;break;case"YZX":this._x=d*f*u+c*p*g,this._y=c*p*u+d*f*g,this._z=c*f*g-d*p*u,this._w=c*f*u-d*p*g;break;case"XZY":this._x=d*f*u-c*p*g,this._y=c*p*u-d*f*g,this._z=c*f*g+d*p*u,this._w=c*f*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(f-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),u=Math.sin((1-e)*f)/c,d=Math.sin(e*f)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),f=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*f,this.y=n+l*f+o*c-r*u,this.z=s+l*u+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new U,Il=new mi;class Ts{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Us.subVectors(this.max,as),xi.subVectors(t.a,as),yi.subVectors(t.b,as),Mi.subVectors(t.c,as),Nn.subVectors(yi,xi),Fn.subVectors(Mi,yi),Jn.subVectors(xi,Mi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Jn.z,Jn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Jn.z,0,-Jn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Jn.y,Jn.x,0];return!jr(e,xi,yi,Mi,Us)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,xi,yi,Mi,Us))?!1:(Ns.crossVectors(Nn,Fn),e=[Ns.x,Ns.y,Ns.z],jr(e,xi,yi,Mi,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new U,new U,new U,new U,new U,new U,new U,new U],en=new U,Ds=new Ts,xi=new U,yi=new U,Mi=new U,Nn=new U,Fn=new U,Jn=new U,as=new U,Us=new U,Ns=new U,Qn=new U;function jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);const o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),f=n.dot(Qn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const tf=new Ts,os=new U,Kr=new U;class Xo{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Kr)),this.expandByPoint(os.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new U,Zr=new U,Fs=new U,kn=new U,Jr=new U,ks=new U,Qr=new U;class ef{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zr.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Zr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Fs),o=kn.dot(this.direction),l=-kn.dot(Fs),c=kn.lengthSq(),f=Math.abs(1-a*a);let u,d,p,g;if(f>0)if(u=a*l-o,d=a*o-l,g=r*f,u>=0)if(d>=-g)if(d<=g){const _=1/f;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zr).addScaledVector(Fs,d),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),f>=0?(r=(t.min.y-d.y)*f,a=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,a=(t.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){Jr.subVectors(e,t),ks.subVectors(n,t),Qr.crossVectors(Jr,ks);let a=this.direction.dot(Qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(ks.crossVectors(kn,ks));if(l<0)return null;const c=o*this.direction.dot(Jr.cross(kn));if(c<0||l+c>a)return null;const f=-o*kn.dot(Qr);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,l,c,f,u,d,p,g,_,h){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,f,u,d,p,g,_,h)}set(t,e,n,s,r,a,o,l,c,f,u,d,p,g,_,h){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=f,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*f,p=a*u,g=o*f,_=o*u;e[0]=l*f,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*f,p=l*u,g=c*f,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*f,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*f,p=l*u,g=c*f,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*f,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*f,p=a*u,g=o*f,_=o*u;e[0]=l*f,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*f,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*f,e[4]=-u,e[8]=c*f,e[1]=d*u+_,e[5]=a*f,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*f,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nf,t,sf)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),On.crossVectors(n,We),On.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),On.crossVectors(n,We)),On.normalize(),Os.crossVectors(We,On),s[0]=On.x,s[4]=Os.x,s[8]=We.x,s[1]=On.y,s[5]=Os.y,s[9]=We.y,s[2]=On.z,s[6]=Os.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],h=n[10],m=n[14],M=n[3],x=n[7],b=n[11],I=n[15],R=s[0],A=s[4],D=s[8],X=s[12],v=s[1],E=s[5],B=s[9],z=s[13],q=s[2],Z=s[6],H=s[10],tt=s[14],G=s[3],ct=s[7],dt=s[11],it=s[15];return r[0]=a*R+o*v+l*q+c*G,r[4]=a*A+o*E+l*Z+c*ct,r[8]=a*D+o*B+l*H+c*dt,r[12]=a*X+o*z+l*tt+c*it,r[1]=f*R+u*v+d*q+p*G,r[5]=f*A+u*E+d*Z+p*ct,r[9]=f*D+u*B+d*H+p*dt,r[13]=f*X+u*z+d*tt+p*it,r[2]=g*R+_*v+h*q+m*G,r[6]=g*A+_*E+h*Z+m*ct,r[10]=g*D+_*B+h*H+m*dt,r[14]=g*X+_*z+h*tt+m*it,r[3]=M*R+x*v+b*q+I*G,r[7]=M*A+x*E+b*Z+I*ct,r[11]=M*D+x*B+b*H+I*dt,r[15]=M*X+x*z+b*tt+I*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],h=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*f-r*l*f)+h*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*f-n*c*f)+m*(-s*o*f-e*l*u+e*o*d+s*a*u-n*a*d+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],h=t[14],m=t[15],M=u*h*c-_*d*c+_*l*p-o*h*p-u*l*m+o*d*m,x=g*d*c-f*h*c-g*l*p+a*h*p+f*l*m-a*d*m,b=f*_*c-g*u*c+g*o*p-a*_*p-f*o*m+a*u*m,I=g*u*l-f*_*l-g*o*d+a*_*d+f*o*h-a*u*h,R=e*M+n*x+s*b+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=M*A,t[1]=(_*d*r-u*h*r-_*s*p+n*h*p+u*s*m-n*d*m)*A,t[2]=(o*h*r-_*l*r+_*s*c-n*h*c-o*s*m+n*l*m)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=x*A,t[5]=(f*h*r-g*d*r+g*s*p-e*h*p-f*s*m+e*d*m)*A,t[6]=(g*l*r-a*h*r-g*s*c+e*h*c+a*s*m-e*l*m)*A,t[7]=(a*d*r-f*l*r+f*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=b*A,t[9]=(g*u*r-f*_*r-g*n*p+e*_*p+f*n*m-e*u*m)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*m+e*o*m)*A,t[11]=(f*o*r-a*u*r-f*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=I*A,t[13]=(f*_*s-g*u*s+g*n*d-e*_*d-f*n*h+e*u*h)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*h-e*o*h)*A,t[15]=(a*u*s-f*o*s+f*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,u=o+o,d=r*c,p=r*f,g=r*u,_=a*f,h=a*u,m=o*u,M=l*c,x=l*f,b=l*u,I=n.x,R=n.y,A=n.z;return s[0]=(1-(_+m))*I,s[1]=(p+b)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(p-b)*R,s[5]=(1-(d+m))*R,s[6]=(h+M)*R,s[7]=0,s[8]=(g+x)*A,s[9]=(h-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Si.set(s[0],s[1],s[2]).length();const a=Si.set(s[4],s[5],s[6]).length(),o=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,f=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=f,nn.elements[5]*=f,nn.elements[6]*=f,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=In){const l=this.elements,c=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===In)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===gr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In){const l=this.elements,c=1/(e-t),f=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*f;let g,_;if(o===In)g=(a+r)*u,_=-2*u;else if(o===gr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new U,nn=new le,nf=new U(0,0,0),sf=new U(1,1,1),On=new U,Os=new U,We=new U,Dl=new le,Ul=new mi;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rf=0;const Nl=new U,bi=new mi,bn=new le,Bs=new U,ls=new U,af=new U,of=new mi,Fl=new U(1,0,0),kl=new U(0,1,0),Ol=new U(0,0,1),Bl={type:"added"},lf={type:"removed"},Ei={type:"childadded",child:null},ta={type:"childremoved",child:null};class Te extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new U,e=new gn,n=new mi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ft}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ls,Bs,this.up):bn.lookAt(Bs,ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(bn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lf),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new U(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,En=new U,ea=new U,wn=new U,wi=new U,Ti=new U,zl=new U,na=new U,ia=new U,sa=new U,ra=new oe,aa=new oe,oa=new oe;class an{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),En.subVectors(n,e),ea.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(En),l=sn.dot(ea),c=En.dot(En),f=En.dot(ea),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*f)*d,g=(a*f-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ra.setScalar(0),aa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ra,r.x),a.addScaledVector(aa,r.y),a.addScaledVector(oa,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),En.subVectors(t,e),sn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),sn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;wi.subVectors(s,n),Ti.subVectors(r,n),na.subVectors(t,n);const l=wi.dot(na),c=Ti.dot(na);if(l<=0&&c<=0)return e.copy(n);ia.subVectors(t,s);const f=wi.dot(ia),u=Ti.dot(ia);if(f>=0&&u<=f)return e.copy(s);const d=l*u-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(wi,a);sa.subVectors(t,r);const p=wi.dot(sa),g=Ti.dot(sa);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ti,o);const h=f*g-p*u;if(h<=0&&u-f>=0&&p-g>=0)return zl.subVectors(r,s),o=(u-f)/(u-f+(p-g)),e.copy(s).addScaledVector(zl,o);const m=1/(h+_+d);return a=_*m,o=d*m,e.copy(n).addScaledVector(wi,a).addScaledVector(Ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function la(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Vd(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=la(a,r,t+1/3),this.g=la(a,r,t),this.b=la(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Zt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Oe(Re.r*255,0,255))*65536+Math.round(Oe(Re.g*255,0,255))*256+Math.round(Oe(Re.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Fe){Zt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(zs);const n=Wr(Bn.h,zs.h,e),s=Wr(Bn.s,zs.s,e),r=Wr(Bn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Ot;Ot.NAMES=Ch;let cf=0;class As extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Oi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fi extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new U,Hs=new Dt;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}}class Ph extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lh extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ze extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hf=0;const je=new le,ca=new Te,Ai=new U,Xe=new Ts,cs=new Ts,ye=new U;class xn extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Lh:Ph)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Xe.min,cs.min),Xe.expandByPoint(ye),ye.addVectors(Xe.max,cs.max),Xe.expandByPoint(ye)):(Xe.expandByPoint(cs.min),Xe.expandByPoint(cs.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)ye.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),ye.add(Ai)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new U,l[D]=new U;const c=new U,f=new U,u=new U,d=new Dt,p=new Dt,g=new Dt,_=new U,h=new U;function m(D,X,v){c.fromBufferAttribute(n,D),f.fromBufferAttribute(n,X),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,v),f.sub(c),u.sub(c),p.sub(d),g.sub(d);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),h.copy(u).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(E),o[D].add(_),o[X].add(_),o[v].add(_),l[D].add(h),l[X].add(h),l[v].add(h))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,X=M.length;D<X;++D){const v=M[D],E=v.start,B=v.count;for(let z=E,q=E+B;z<q;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new U,b=new U,I=new U,R=new U;function A(D){I.fromBufferAttribute(s,D),R.copy(I);const X=o[D];x.copy(X),x.sub(I.multiplyScalar(I.dot(X))).normalize(),b.crossVectors(R,X);const E=b.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,E)}for(let D=0,X=M.length;D<X;++D){const v=M[D],E=v.start,B=v.count;for(let z=E,q=E+B;z<q;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,f=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),h=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,h),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,h),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,u=o.normalized,d=new c.constructor(l.length*f);let p=0,g=0;for(let _=0,h=l.length;_<h;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*f;for(let m=0;m<f;m++)d[g++]=c[p++]}return new fn(d,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,u=c.length;f<u;f++){const d=c[f],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],u=r[c];for(let d=0,p=u.length;d<p;d++)f.push(u[d].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new le,ti=new ef,Gs=new Xo,Gl=new U,Vs=new U,Ws=new U,Xs=new U,ha=new U,qs=new U,Vl=new U,$s=new U;class Se extends Te{constructor(t=new xn,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],u=r[l];f!==0&&(ha.fromBufferAttribute(u,t),a?qs.addScaledVector(ha,f):qs.addScaledVector(ha.sub(e),f))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Gs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Gs,Gl)===null||ti.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const h=d[g],m=a[h.materialIndex],M=Math.max(h.start,p.start),x=Math.min(o.count,Math.min(h.start+h.count,p.start+p.count));for(let b=M,I=x;b<I;b+=3){const R=o.getX(b),A=o.getX(b+1),D=o.getX(b+2);s=Ys(this,m,t,n,c,f,u,R,A,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let h=g,m=_;h<m;h+=3){const M=o.getX(h),x=o.getX(h+1),b=o.getX(h+2);s=Ys(this,a,t,n,c,f,u,M,x,b),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const h=d[g],m=a[h.materialIndex],M=Math.max(h.start,p.start),x=Math.min(l.count,Math.min(h.start+h.count,p.start+p.count));for(let b=M,I=x;b<I;b+=3){const R=b,A=b+1,D=b+2;s=Ys(this,m,t,n,c,f,u,R,A,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let h=g,m=_;h<m;h+=3){const M=h,x=h+1,b=h+2;s=Ys(this,a,t,n,c,f,u,M,x,b),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}}function uf(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===qn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function Ys(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Vs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Xs);const f=uf(i,t,e,n,Vs,Ws,Xs,Vl);if(f){const u=new U;an.getBarycoord(Vl,Vs,Ws,Xs,u),s&&(f.uv=an.getInterpolatedAttribute(s,o,l,c,u,new Dt)),r&&(f.uv1=an.getInterpolatedAttribute(r,o,l,c,u,new Dt)),a&&(f.normal=an.getInterpolatedAttribute(a,o,l,c,u,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};an.getNormal(Vs,Ws,Xs,d.normal),f.face=d,f.barycoord=u}return f}class Ji extends xn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(u,2));function g(_,h,m,M,x,b,I,R,A,D,X){const v=b/A,E=I/D,B=b/2,z=I/2,q=R/2,Z=A+1,H=D+1;let tt=0,G=0;const ct=new U;for(let dt=0;dt<H;dt++){const it=dt*E-z;for(let Ut=0;Ut<Z;Ut++){const kt=Ut*v-B;ct[_]=kt*M,ct[h]=it*x,ct[m]=q,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[h]=0,ct[m]=R>0?1:-1,f.push(ct.x,ct.y,ct.z),u.push(Ut/A),u.push(1-dt/D),tt+=1}}for(let dt=0;dt<D;dt++)for(let it=0;it<A;it++){const Ut=d+it+Z*dt,kt=d+it+Z*(dt+1),$=d+(it+1)+Z*(dt+1),Q=d+(it+1)+Z*dt;l.push(Ut,kt,Q),l.push(kt,$,Q),G+=6}o.addGroup(p,G,X),p+=G,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=ji(i[e]);for(const s in n)t[s]=n[s]}return t}function df(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const ff={clone:ji,merge:Pe};var pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new U,Wl=new Dt,Xl=new Dt;class Ke extends Dh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,Wl,Xl),e.subVectors(Xl,Wl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class gf extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const r=new Ke(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const a=new Ke(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const l=new Ke(Ri,Ci,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Ri,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uh extends we{constructor(t,e,n,s,r,a,o,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _f extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Vn});r.uniforms.tEquirect.value=e;const a=new Se(s,r),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=qe),new gf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ua=new U,vf=new U,xf=new Ft;class ri{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ua.subVectors(n,e).cross(vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xf.getNormalMatrix(t),s=this.coplanarPoint(ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Xo,js=new U;class qo{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],f=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],h=s[11],m=s[12],M=s[13],x=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,h-p,b-m).normalize(),n[1].setComponents(l+r,d+c,h+p,b+m).normalize(),n[2].setComponents(l+a,d+f,h+g,b+M).normalize(),n[3].setComponents(l-a,d-f,h-g,b-M).normalize(),n[4].setComponents(l-o,d-u,h-_,b-x).normalize(),e===In)n[5].setComponents(l+o,d+u,h+_,b+x).normalize();else if(e===gr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yf(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const f=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,f);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class _n extends xn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,u=t/o,d=e/l,p=[],g=[],_=[],h=[];for(let m=0;m<f;m++){const M=m*d-a;for(let x=0;x<c;x++){const b=x*u-r;g.push(b,-M,0),_.push(0,0,1),h.push(x/o),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const x=M+c*m,b=M+c*(m+1),I=M+1+c*(m+1),R=M+1+c*m;p.push(x,b,R),p.push(b,I,R)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Nf=`#ifdef USE_BUMPMAP
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qf=`vec3 transformedNormal = objectNormal;
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
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`
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
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
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
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rm=`float getShadowMask() {
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
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,km=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,Gm=`#define PHONG
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define TOON
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
}`,$m=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:bf,alphamap_pars_fragment:Ef,alphatest_fragment:wf,alphatest_pars_fragment:Tf,aomap_fragment:Af,aomap_pars_fragment:Rf,batching_pars_vertex:Cf,batching_vertex:Pf,begin_vertex:Lf,beginnormal_vertex:If,bsdfs:Df,iridescence_fragment:Uf,bumpmap_pars_fragment:Nf,clipping_planes_fragment:Ff,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:Hf,color_pars_vertex:Gf,color_vertex:Vf,common:Wf,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:$f,displacementmap_vertex:Yf,emissivemap_fragment:jf,emissivemap_pars_fragment:Kf,colorspace_fragment:Zf,colorspace_pars_fragment:Jf,envmap_fragment:Qf,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:np,envmap_physical_pars_fragment:fp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:xp,lights_fragment_begin:yp,lights_fragment_maps:Mp,lights_fragment_end:Sp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Tp,map_fragment:Ap,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Dp,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:kp,normal_fragment_begin:Op,normal_fragment_maps:Bp,normal_pars_fragment:zp,normal_pars_vertex:Hp,normal_vertex:Gp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:$p,opaque_fragment:Yp,packing:jp,premultiplied_alpha_fragment:Kp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:Qp,roughnessmap_fragment:tm,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:sm,shadowmask_pars_fragment:rm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:dm,tonemapping_pars_fragment:fm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:xm,background_vert:ym,background_frag:Mm,backgroundCube_vert:Sm,backgroundCube_frag:bm,cube_vert:Em,cube_frag:wm,depth_vert:Tm,depth_frag:Am,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Pm,equirect_frag:Lm,linedashed_vert:Im,linedashed_frag:Dm,meshbasic_vert:Um,meshbasic_frag:Nm,meshlambert_vert:Fm,meshlambert_frag:km,meshmatcap_vert:Om,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:Hm,meshphong_vert:Gm,meshphong_frag:Vm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:$m,points_vert:Ym,points_frag:jm,shadow_vert:Km,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:Qm},st={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},un={basic:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Pe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Pe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Pe([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Pe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Pe([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Pe([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Pe([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Pe([st.lights,st.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};un.physical={uniforms:Pe([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Ks={r:0,b:0,g:0},ni=new gn,tg=new le;function eg(i,t,e,n,s,r,a){const o=new Ot(0);let l=r===!0?0:1,c,f,u=null,d=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const b=g(M);b===null?m(o,l):b&&b.isColor&&(m(b,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(M,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===Tr)?(f===void 0&&(f=new Se(new Ji(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ji(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ni.copy(x.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(ni)),f.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ie,(u!==b||d!==b.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Se(new _n(2,2),new ln({name:"BackgroundMaterial",uniforms:ji(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Ks,Ih(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:_,addToRenderList:h}}function ng(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,E,B,z,q){let Z=!1;const H=u(z,B,E);r!==H&&(r=H,c(r.object)),Z=p(v,z,B,q),Z&&g(v,z,B,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(v,E,B,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function f(v){return i.deleteVertexArray(v)}function u(v,E,B){const z=B.wireframe===!0;let q=n[v.id];q===void 0&&(q={},n[v.id]=q);let Z=q[E.id];Z===void 0&&(Z={},q[E.id]=Z);let H=Z[z];return H===void 0&&(H=d(l()),Z[z]=H),H}function d(v){const E=[],B=[],z=[];for(let q=0;q<e;q++)E[q]=0,B[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:B,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,E,B,z){const q=r.attributes,Z=E.attributes;let H=0;const tt=B.getAttributes();for(const G in tt)if(tt[G].location>=0){const dt=q[G];let it=Z[G];if(it===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),dt===void 0||dt.attribute!==it||it&&dt.data!==it.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function g(v,E,B,z){const q={},Z=E.attributes;let H=0;const tt=B.getAttributes();for(const G in tt)if(tt[G].location>=0){let dt=Z[G];dt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor));const it={};it.attribute=dt,dt&&dt.data&&(it.data=dt.data),q[G]=it,H++}r.attributes=q,r.attributesNum=H,r.index=z}function _(){const v=r.newAttributes;for(let E=0,B=v.length;E<B;E++)v[E]=0}function h(v){m(v,0)}function m(v,E){const B=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;B[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),q[v]!==E&&(i.vertexAttribDivisor(v,E),q[v]=E)}function M(){const v=r.newAttributes,E=r.enabledAttributes;for(let B=0,z=E.length;B<z;B++)E[B]!==v[B]&&(i.disableVertexAttribArray(B),E[B]=0)}function x(v,E,B,z,q,Z,H){H===!0?i.vertexAttribIPointer(v,E,B,q,Z):i.vertexAttribPointer(v,E,B,z,q,Z)}function b(v,E,B,z){_();const q=z.attributes,Z=B.getAttributes(),H=E.defaultAttributeValues;for(const tt in Z){const G=Z[tt];if(G.location>=0){let ct=q[tt];if(ct===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){const dt=ct.normalized,it=ct.itemSize,Ut=t.get(ct);if(Ut===void 0)continue;const kt=Ut.buffer,$=Ut.type,Q=Ut.bytesPerElement,ft=$===i.INT||$===i.UNSIGNED_INT||ct.gpuType===Oo;if(ct.isInterleavedBufferAttribute){const rt=ct.data,Pt=rt.stride,bt=ct.offset;if(rt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)m(G.location+Bt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)h(G.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Bt=0;Bt<G.locationSize;Bt++)x(G.location+Bt,it/G.locationSize,$,dt,Pt*Q,(bt+it/G.locationSize*Bt)*Q,ft)}else{if(ct.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let rt=0;rt<G.locationSize;rt++)h(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let rt=0;rt<G.locationSize;rt++)x(G.location+rt,it/G.locationSize,$,dt,it*Q,it/G.locationSize*rt*Q,ft)}}else if(H!==void 0){const dt=H[tt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(G.location,dt);break;case 3:i.vertexAttrib3fv(G.location,dt);break;case 4:i.vertexAttrib4fv(G.location,dt);break;default:i.vertexAttrib1fv(G.location,dt)}}}}M()}function I(){D();for(const v in n){const E=n[v];for(const B in E){const z=E[B];for(const q in z)f(z[q].object),delete z[q];delete E[B]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const B in E){const z=E[B];for(const q in z)f(z[q].object),delete z[q];delete E[B]}delete n[v.id]}function A(v){for(const E in n){const B=n[E];if(B[v.id]===void 0)continue;const z=B[v.id];for(const q in z)f(z[q].object),delete z[q];delete B[v.id]}}function D(){X(),a=!0,r!==s&&(r=s,c(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:X,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:h,disableUnusedAttributes:M}}function ig(i,t,e){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function a(c,f,u){u!==0&&(i.drawArraysInstanced(n,c,f,u),e.update(f,n,u))}function o(c,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,u);let p=0;for(let g=0;g<u;g++)p+=f[g];e.update(p,n,1)}function l(c,f,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],f[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,f,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=f[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==on&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ln&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:I,maxSamples:R}}function rg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ri,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=f(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,h=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!h)r?f(null):c();else{const M=r?0:n,x=M*4;let b=m.clippingState||null;l.value=b,b=f(g,d,x,p);for(let I=0;I!==x;++I)b[I]=e[I];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,d,p,g){const _=u!==null?u.length:0;let h=null;if(_!==0){if(h=l.value,g!==!0||h===null){const m=p+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(h===null||h.length<m)&&(h=new Float32Array(m));for(let x=0,b=p;x!==_;++x,b+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(h,b),h[b+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,h}}function ag(i){let t=new WeakMap;function e(a,o){return o===za?a.mapping=Xi:o===Ha&&(a.mapping=qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===Ha)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _f(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class $o extends Dh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,ql=[.125,.215,.35,.446,.526,.582],li=20,da=new $o,$l=new Ot;let fa=null,pa=0,ma=0,ga=!1;const ai=(1+Math.sqrt(5))/2,Pi=1/ai,Yl=[new U(-ai,Pi,0),new U(ai,Pi,0),new U(-Pi,0,ai),new U(Pi,0,ai),new U(0,ai,-Pi),new U(0,ai,Pi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,pa,ma),this._renderer.xr.enabled=ga,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Es,format:on,colorSpace:Kn,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=og(r)),this._blurMaterial=lg(r,t,e)}return s}_compileMaterial(t){const e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,s){const o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor($l),f.toneMapping=Wn,f.autoClear=!1;const p=new fi({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Se(new Ji,p);let _=!1;const h=t.background;h?h.isColor&&(p.color.copy(h),t.background=null,_=!0):(p.color.copy($l),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Zs(s,M*x,m>2?x:0,x,x),f.setRenderTarget(s),_&&f.render(g,o),f.render(t,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=u,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xi||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yl[(s-r-1)%Yl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Se(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=r/g,h=isFinite(r)?1+Math.floor(f*_):li;h>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${li}`);const m=[];let M=0;for(let A=0;A<li;++A){const D=A/_,X=Math.exp(-D*D/2);m.push(X),A===0?M+=X:A<h&&(M+=2*X)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;d.envMap.value=t.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[s],I=3*b*(s>x-ki?s-x+ki:0),R=4*(this._cubeSize-b);Zs(e,I,R,3*b,2*b),l.setRenderTarget(e),l.render(u,da)}}function og(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+ql.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ki?l=ql[a-i+ki-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,u=1+c,d=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,g=6,_=3,h=2,m=1,M=new Float32Array(_*g*p),x=new Float32Array(h*g*p),b=new Float32Array(m*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,D=R>2?0:-1,X=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];M.set(X,_*g*R),x.set(d,h*g*R);const v=[R,R,R,R,R,R];b.set(v,m*g*R)}const I=new xn;I.setAttribute("position",new fn(M,_)),I.setAttribute("uv",new fn(x,h)),I.setAttribute("faceIndex",new fn(b,m)),t.push(I),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(i,t,e){const n=new di(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lg(i,t,e){const n=new Float32Array(li),s=new U(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Zl(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Jl(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function cg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===za||l===Ha,f=l===Xi||l===qi;if(c||f){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new jl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&s(p)?(e===null&&(e=new jl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ug(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let h=0,m=_.length;h<m;h++)t.remove(_[h])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let h=0,m=_.length;h<m;h++)t.update(_[h],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let x=0,b=M.length;x<b;x+=3){const I=M[x+0],R=M[x+1],A=M[x+2];d.push(I,R,R,A,A,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,b=M.length/3-1;x<b;x+=3){const I=x+0,R=x+1,A=x+2;d.push(I,R,R,A,A,I)}}else return;const h=new(wh(d)?Lh:Ph)(d,1);h.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,h)}function f(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function dg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function f(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let h=0;for(let m=0;m<g;m++)h+=p[m];e.update(h,n,1)}function u(d,p,g,_){if(g===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],_[m]);else{h.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=p[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function fg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pg(i,t,e){const n=new WeakMap,s=new oe;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let X=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",X)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let b=o.attributes.position.count*x,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*I*4*u),A=new Ah(R,b,I,u);A.type=Ln,A.needsUpdate=!0;const D=x*4;for(let v=0;v<u;v++){const E=h[v],B=m[v],z=M[v],q=b*I*4*v;for(let Z=0;Z<E.count;Z++){const H=Z*D;p===!0&&(s.fromBufferAttribute(E,Z),R[q+H+0]=s.x,R[q+H+1]=s.y,R[q+H+2]=s.z,R[q+H+3]=0),g===!0&&(s.fromBufferAttribute(B,Z),R[q+H+4]=s.x,R[q+H+5]=s.y,R[q+H+6]=s.z,R[q+H+7]=0),_===!0&&(s.fromBufferAttribute(z,Z),R[q+H+8]=s.x,R[q+H+9]=s.y,R[q+H+10]=s.z,R[q+H+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Dt(b,I)},n.set(o,d),o.addEventListener("dispose",X)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function mg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Fh extends we{constructor(t,e,n,s,r,a,o,l,c,f=Bi){if(f!==Bi&&f!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Bi&&(n=ui),n===void 0&&f===Yi&&(n=$i),super(null,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kh=new we,Ql=new Fh(1,1),Oh=new Ah,Bh=new Qd,zh=new Uh,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function Qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function yg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;sc.set(n),i.uniformMatrix2fv(this.addr,!1,sc),xe(e,n)}}function Mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),xe(e,n)}}function Sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),xe(e,n)}}function bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=Eh,r=Ql):r=kh,e.setTexture2D(t||r,s)}function Ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bh,s)}function Dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zh,s)}function Ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oh,s)}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return yg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return bg;case 35667:case 35671:return Eg;case 35668:case 35672:return wg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}function Fg(i,t){i.uniform1fv(this.addr,t)}function kg(i,t){const e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Og(i,t){const e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Bg(i,t){const e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function zg(i,t){const e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hg(i,t){const e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gg(i,t){const e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vg(i,t){i.uniform1iv(this.addr,t)}function Wg(i,t){i.uniform2iv(this.addr,t)}function Xg(i,t){i.uniform3iv(this.addr,t)}function qg(i,t){i.uniform4iv(this.addr,t)}function $g(i,t){i.uniform1uiv(this.addr,t)}function Yg(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function Kg(i,t){i.uniform4uiv(this.addr,t)}function Zg(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||kh,r[a])}function Jg(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bh,r[a])}function Qg(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zh,r[a])}function t0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Oh,r[a])}function e0(i){switch(i){case 5126:return Fg;case 35664:return kg;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return Gg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return $g;case 36294:return Yg;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return t0}}class n0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ng(e.type)}}class i0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e0(e.type)}}class s0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function rc(i,t){i.seq.push(t),i.map[t.id]=t}function r0(i,t,e){const n=i.name,s=n.length;for(_a.lastIndex=0;;){const r=_a.exec(n),a=_a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rc(e,c===void 0?new n0(o,i,t):new i0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new s0(o),rc(e,u)),e=u}}}class cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);r0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const a0=37297;let o0=0;function l0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function c0(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===mr&&e===pr?n="LinearDisplayP3ToLinearSRGB":t===pr&&e===mr&&(n="LinearSRGBToLinearDisplayP3"),i){case Kn:case Ar:return[n,"LinearTransferOETF"];case Fe:case Wo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function oc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+l0(i.getShaderSource(t),a)}else return s}function h0(i,t){const e=c0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function u0(i,t){let e;switch(t){case wd:e="Linear";break;case Td:e="Reinhard";break;case Ad:e="Cineon";break;case Rd:e="ACESFilmic";break;case Pd:e="AgX";break;case Ld:e="Neutral";break;case Cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Js=new U;function d0(){Zt.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function p0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ps(i){return i!==""}function lc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(g0,v0)}const _0=new Map;function v0(i,t){let e=Nt[t];if(e===void 0){const n=_0.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vo(e)}const x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(x0,y0)}function y0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function M0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function S0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:t="ENVMAP_MODE_REFRACTION";break}return t}function E0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:t="ENVMAP_BLENDING_MULTIPLY";break;case bd:t="ENVMAP_BLENDING_MIX";break;case Ed:t="ENVMAP_BLENDING_ADD";break}return t}function w0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function T0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=M0(e),c=S0(e),f=b0(e),u=E0(e),d=w0(e),p=f0(e),g=p0(r),_=s.createProgram();let h,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`)):(h=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),m=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?u0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,h0("linearToOutputTexel",e.outputColorSpace),d0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=vo(a),a=lc(a,e),a=cc(a,e),o=vo(o),o=lc(o,e),o=cc(o,e),a=hc(a),o=hc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+h+a,b=M+m+o,I=ac(s,s.VERTEX_SHADER,x),R=ac(s,s.FRAGMENT_SHADER,b);s.attachShader(_,I),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(E){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(I).trim(),q=s.getShaderInfoLog(R).trim();let Z=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,R);else{const tt=oc(s,I,"vertex"),G=oc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+B+`
`+tt+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||q==="")&&(H=!1);H&&(E.diagnostics={runnable:Z,programLog:B,vertexShader:{log:z,prefix:h},fragmentShader:{log:q,prefix:m}})}s.deleteShader(I),s.deleteShader(R),D=new cr(s,_),X=m0(s,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let X;this.getAttributes=function(){return X===void 0&&A(this),X};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,a0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}let A0=0;class R0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new C0(t),e.set(t,n)),n}}class C0{constructor(t){this.id=A0++,this.code=t,this.usedTimes=0}}function P0(i,t,e,n,s,r,a){const o=new Rh,l=new R0,c=new Set,f=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,B,z,q){const Z=z.fog,H=q.geometry,tt=v.isMeshStandardMaterial?z.environment:null,G=(v.isMeshStandardMaterial?e:t).get(v.envMap||tt),ct=G&&G.mapping===Tr?G.image.height:null,dt=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ut=it!==void 0?it.length:0;let kt=0;H.morphAttributes.position!==void 0&&(kt=1),H.morphAttributes.normal!==void 0&&(kt=2),H.morphAttributes.color!==void 0&&(kt=3);let $,Q,ft,rt;if(dt){const Ue=un[dt];$=Ue.vertexShader,Q=Ue.fragmentShader}else $=v.vertexShader,Q=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),rt=l.getFragmentShaderID(v);const Pt=i.getRenderTarget(),bt=q.isInstancedMesh===!0,Bt=q.isBatchedMesh===!0,Yt=!!v.map,Gt=!!v.matcap,C=!!G,He=!!v.aoMap,zt=!!v.lightMap,Wt=!!v.bumpMap,At=!!v.normalMap,ee=!!v.displacementMap,Lt=!!v.emissiveMap,T=!!v.metalnessMap,y=!!v.roughnessMap,F=v.anisotropy>0,j=v.clearcoat>0,J=v.dispersion>0,Y=v.iridescence>0,yt=v.sheen>0,at=v.transmission>0,pt=F&&!!v.anisotropyMap,Xt=j&&!!v.clearcoatMap,et=j&&!!v.clearcoatNormalMap,mt=j&&!!v.clearcoatRoughnessMap,Rt=Y&&!!v.iridescenceMap,Ct=Y&&!!v.iridescenceThicknessMap,gt=yt&&!!v.sheenColorMap,Ht=yt&&!!v.sheenRoughnessMap,It=!!v.specularMap,Qt=!!v.specularColorMap,P=!!v.specularIntensityMap,ht=at&&!!v.transmissionMap,V=at&&!!v.thicknessMap,K=!!v.gradientMap,ot=!!v.alphaMap,ut=v.alphaTest>0,Vt=!!v.alphaHash,de=!!v.extensions;let De=Wn;v.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(De=i.toneMapping);const $t={shaderID:dt,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:Q,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&q._colorsTexture!==null,instancing:bt,instancingColor:bt&&q.instanceColor!==null,instancingMorph:bt&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Kn,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Gt,envMap:C,envMapMode:C&&G.mapping,envMapCubeUVHeight:ct,aoMap:He,lightMap:zt,bumpMap:Wt,normalMap:At,displacementMap:p&&ee,emissiveMap:Lt,normalMapObjectSpace:At&&v.normalMapType===Nd,normalMapTangentSpace:At&&v.normalMapType===bh,metalnessMap:T,roughnessMap:y,anisotropy:F,anisotropyMap:pt,clearcoat:j,clearcoatMap:Xt,clearcoatNormalMap:et,clearcoatRoughnessMap:mt,dispersion:J,iridescence:Y,iridescenceMap:Rt,iridescenceThicknessMap:Ct,sheen:yt,sheenColorMap:gt,sheenRoughnessMap:Ht,specularMap:It,specularColorMap:Qt,specularIntensityMap:P,transmission:at,transmissionMap:ht,thicknessMap:V,gradientMap:K,opaque:v.transparent===!1&&v.blending===Oi&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:ut,alphaHash:Vt,combine:v.combine,mapUv:Yt&&h(v.map.channel),aoMapUv:He&&h(v.aoMap.channel),lightMapUv:zt&&h(v.lightMap.channel),bumpMapUv:Wt&&h(v.bumpMap.channel),normalMapUv:At&&h(v.normalMap.channel),displacementMapUv:ee&&h(v.displacementMap.channel),emissiveMapUv:Lt&&h(v.emissiveMap.channel),metalnessMapUv:T&&h(v.metalnessMap.channel),roughnessMapUv:y&&h(v.roughnessMap.channel),anisotropyMapUv:pt&&h(v.anisotropyMap.channel),clearcoatMapUv:Xt&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&h(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&h(v.sheenRoughnessMap.channel),specularMapUv:It&&h(v.specularMap.channel),specularColorMapUv:Qt&&h(v.specularColorMap.channel),specularIntensityMapUv:P&&h(v.specularIntensityMap.channel),transmissionMapUv:ht&&h(v.transmissionMap.channel),thicknessMapUv:V&&h(v.thicknessMap.channel),alphaMapUv:ot&&h(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(At||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!H.attributes.uv&&(Yt||ot),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Be,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:de&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&v.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function M(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)E.push(B),E.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(x(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function I(v){const E=_[v.type];let B;if(E){const z=un[E];B=ff.clone(z.uniforms)}else B=v.uniforms;return B}function R(v,E){let B;for(let z=0,q=f.length;z<q;z++){const Z=f[z];if(Z.cacheKey===E){B=Z,++B.usedTimes;break}}return B===void 0&&(B=new T0(i,E,v,r),f.push(B)),B}function A(v){if(--v.usedTimes===0){const E=f.indexOf(v);f[E]=f[f.length-1],f.pop(),v.destroy()}}function D(v){l.remove(v)}function X(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:I,acquireProgram:R,releaseProgram:A,releaseShaderCache:D,programs:f,dispose:X}}function L0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function I0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,h){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:h},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=h),t++,m}function o(u,d,p,g,_,h){const m=a(u,d,p,g,_,h);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(u,d,p,g,_,h){const m=a(u,d,p,g,_,h);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||I0),n.length>1&&n.sort(d||dc),s.length>1&&s.sort(d||dc)}function f(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:f,sort:c}}function D0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fc,i.set(n,[a])):s>=r.length?(a=new fc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function U0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ot};break;case"SpotLight":e={position:new U,direction:new U,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function N0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let F0=0;function k0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function O0(i){const t=new U0,e=N0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new le,a=new le;function o(c){let f=0,u=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let p=0,g=0,_=0,h=0,m=0,M=0,x=0,b=0,I=0,R=0,A=0;c.sort(k0);for(let X=0,v=c.length;X<v;X++){const E=c[X],B=E.color,z=E.intensity,q=E.distance,Z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=B.r*z,u+=B.g*z,d+=B.b*z;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],z);A++}else if(E.isDirectionalLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const tt=E.shadow,G=e.get(E);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=E.shadow.matrix,M++}n.directional[p]=H,p++}else if(E.isSpotLight){const H=t.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(B).multiplyScalar(z),H.distance=q,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[_]=H;const tt=E.shadow;if(E.map&&(n.spotLightMap[I]=E.map,I++,tt.updateMatrices(E),E.castShadow&&R++),n.spotLightMatrix[_]=tt.matrix,E.castShadow){const G=e.get(E);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Z,b++}_++}else if(E.isRectAreaLight){const H=t.get(E);H.color.copy(B).multiplyScalar(z),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[h]=H,h++}else if(E.isPointLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const tt=E.shadow,G=e.get(E);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=H,g++}else if(E.isHemisphereLight){const H=t.get(E);H.skyColor.copy(E.color).multiplyScalar(z),H.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[m]=H,m++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==h||D.hemiLength!==m||D.numDirectionalShadows!==M||D.numPointShadows!==x||D.numSpotShadows!==b||D.numSpotMaps!==I||D.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=h,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=h,D.hemiLength=m,D.numDirectionalShadows=M,D.numPointShadows=x,D.numSpotShadows=b,D.numSpotMaps=I,D.numLightProbes=A,n.version=F0++)}function l(c,f){let u=0,d=0,p=0,g=0,_=0;const h=f.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(h),u++}else if(x.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(h),p++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(h),a.identity(),r.copy(x.matrixWorld),r.premultiply(h),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(h),d++}else if(x.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(h),_++}}}return{setup:o,setupView:l,state:n}}function pc(i){const t=new O0(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function B0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new pc(i),t.set(s,[o])):r>=a.length?(o=new pc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class z0 extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H0 extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function W0(i,t,e){let n=new qo;const s=new Dt,r=new Dt,a=new oe,o=new z0({depthPacking:Ud}),l=new H0,c={},f=e.maxTextureSize,u={[qn]:Be,[Be]:qn,[Rn]:Rn},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:G0,fragmentShader:V0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Se(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let m=this.type;this.render=function(R,A,D){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||R.length===0)return;const X=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=m!==An&&this.type===An,q=m===An&&this.type!==An;for(let Z=0,H=R.length;Z<H;Z++){const tt=R[Z],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ct=G.getFrameExtents();if(s.multiply(ct),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ct.x),s.x=r.x*ct.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ct.y),s.y=r.y*ct.y,G.mapSize.y=r.y)),G.map===null||z===!0||q===!0){const it=this.type!==An?{minFilter:Ze,magFilter:Ze}:{};G.map!==null&&G.map.dispose(),G.map=new di(s.x,s.y,it),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const dt=G.getViewportCount();for(let it=0;it<dt;it++){const Ut=G.getViewport(it);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),B.viewport(a),G.updateMatrices(tt,it),n=G.getFrustum(),b(A,D,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===An&&M(G,D),G.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(X,v,E)};function M(R,A){const D=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,D,p,_,null)}function x(R,A,D,X){let v=null;const E=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)v=E;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=v.uuid,z=A.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let Z=q[z];Z===void 0&&(Z=v.clone(),q[z]=Z,A.addEventListener("dispose",I)),v=Z}if(v.visible=A.visible,v.wireframe=A.wireframe,X===An?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=i.properties.get(v);B.light=D}return v}function b(R,A,D,X,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===An)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const z=t.update(R),q=R.material;if(Array.isArray(q)){const Z=z.groups;for(let H=0,tt=Z.length;H<tt;H++){const G=Z[H],ct=q[G.materialIndex];if(ct&&ct.visible){const dt=x(R,ct,X,v);R.onBeforeShadow(i,R,A,D,z,dt,G),i.renderBufferDirect(D,null,z,dt,R,G),R.onAfterShadow(i,R,A,D,z,dt,G)}}}else if(q.visible){const Z=x(R,q,X,v);R.onBeforeShadow(i,R,A,D,z,Z,null),i.renderBufferDirect(D,null,z,Z,R,null),R.onAfterShadow(i,R,A,D,z,Z,null)}}const B=R.children;for(let z=0,q=B.length;z<q;z++)b(B[z],A,D,X,v)}function I(R){R.target.removeEventListener("dispose",I);for(const D in c){const X=c[D],v=R.target.uuid;v in X&&(X[v].dispose(),delete X[v])}}}const X0={[Da]:Ua,[Na]:Oa,[Fa]:Ba,[Wi]:ka,[Ua]:Da,[Oa]:Na,[Ba]:Fa,[ka]:Wi};function q0(i){function t(){let P=!1;const ht=new oe;let V=null;const K=new oe(0,0,0,0);return{setMask:function(ot){V!==ot&&!P&&(i.colorMask(ot,ot,ot,ot),V=ot)},setLocked:function(ot){P=ot},setClear:function(ot,ut,Vt,de,De){De===!0&&(ot*=de,ut*=de,Vt*=de),ht.set(ot,ut,Vt,de),K.equals(ht)===!1&&(i.clearColor(ot,ut,Vt,de),K.copy(ht))},reset:function(){P=!1,V=null,K.set(-1,0,0,0)}}}function e(){let P=!1,ht=!1,V=null,K=null,ot=null;return{setReversed:function(ut){ht=ut},setTest:function(ut){ut?ft(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(ut){V!==ut&&!P&&(i.depthMask(ut),V=ut)},setFunc:function(ut){if(ht&&(ut=X0[ut]),K!==ut){switch(ut){case Da:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ut}},setLocked:function(ut){P=ut},setClear:function(ut){ot!==ut&&(i.clearDepth(ut),ot=ut)},reset:function(){P=!1,V=null,K=null,ot=null}}}function n(){let P=!1,ht=null,V=null,K=null,ot=null,ut=null,Vt=null,de=null,De=null;return{setTest:function($t){P||($t?ft(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function($t){ht!==$t&&!P&&(i.stencilMask($t),ht=$t)},setFunc:function($t,Ue,yn){(V!==$t||K!==Ue||ot!==yn)&&(i.stencilFunc($t,Ue,yn),V=$t,K=Ue,ot=yn)},setOp:function($t,Ue,yn){(ut!==$t||Vt!==Ue||de!==yn)&&(i.stencilOp($t,Ue,yn),ut=$t,Vt=Ue,de=yn)},setLocked:function($t){P=$t},setClear:function($t){De!==$t&&(i.clearStencil($t),De=$t)},reset:function(){P=!1,ht=null,V=null,K=null,ot=null,ut=null,Vt=null,de=null,De=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},f={},u=new WeakMap,d=[],p=null,g=!1,_=null,h=null,m=null,M=null,x=null,b=null,I=null,R=new Ot(0,0,0),A=0,D=!1,X=null,v=null,E=null,B=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,H=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Z=H>=1):tt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Z=H>=2);let G=null,ct={};const dt=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),Ut=new oe().fromArray(dt),kt=new oe().fromArray(it);function $(P,ht,V,K){const ot=new Uint8Array(4),ut=i.createTexture();i.bindTexture(P,ut),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<V;Vt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ht+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ut}const Q={};Q[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),r.setFunc(Wi),zt(!1),Wt(Sl),ft(i.CULL_FACE),C(Vn);function ft(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function rt(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function Pt(P,ht){return f[P]!==ht?(i.bindFramebuffer(P,ht),f[P]=ht,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function bt(P,ht){let V=d,K=!1;if(P){V=u.get(ht),V===void 0&&(V=[],u.set(ht,V));const ot=P.textures;if(V.length!==ot.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Vt=ot.length;ut<Vt;ut++)V[ut]=i.COLOR_ATTACHMENT0+ut;V.length=ot.length,K=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,K=!0);K&&i.drawBuffers(V)}function Bt(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const Yt={[oi]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[od]:i.FUNC_REVERSE_SUBTRACT};Yt[ld]=i.MIN,Yt[cd]=i.MAX;const Gt={[hd]:i.ZERO,[ud]:i.ONE,[dd]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[_d]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[yd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function C(P,ht,V,K,ot,ut,Vt,de,De,$t){if(P===Vn){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),P!==rd){if(P!==_||$t!==D){if((h!==oi||x!==oi)&&(i.blendEquation(i.FUNC_ADD),h=oi,x=oi),$t)switch(P){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}m=null,M=null,b=null,I=null,R.set(0,0,0),A=0,_=P,D=$t}return}ot=ot||ht,ut=ut||V,Vt=Vt||K,(ht!==h||ot!==x)&&(i.blendEquationSeparate(Yt[ht],Yt[ot]),h=ht,x=ot),(V!==m||K!==M||ut!==b||Vt!==I)&&(i.blendFuncSeparate(Gt[V],Gt[K],Gt[ut],Gt[Vt]),m=V,M=K,b=ut,I=Vt),(de.equals(R)===!1||De!==A)&&(i.blendColor(de.r,de.g,de.b,De),R.copy(de),A=De),_=P,D=!1}function He(P,ht){P.side===Rn?rt(i.CULL_FACE):ft(i.CULL_FACE);let V=P.side===Be;ht&&(V=!V),zt(V),P.blending===Oi&&P.transparent===!1?C(Vn):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const K=P.stencilWrite;a.setTest(K),K&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ee(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(P){X!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),X=P)}function Wt(P){P!==nd?(ft(i.CULL_FACE),P!==v&&(P===Sl?i.cullFace(i.BACK):P===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),v=P}function At(P){P!==E&&(Z&&i.lineWidth(P),E=P)}function ee(P,ht,V){P?(ft(i.POLYGON_OFFSET_FILL),(B!==ht||z!==V)&&(i.polygonOffset(ht,V),B=ht,z=V)):rt(i.POLYGON_OFFSET_FILL)}function Lt(P){P?ft(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+q-1),G!==P&&(i.activeTexture(P),G=P)}function y(P,ht,V){V===void 0&&(G===null?V=i.TEXTURE0+q-1:V=G);let K=ct[V];K===void 0&&(K={type:void 0,texture:void 0},ct[V]=K),(K.type!==P||K.texture!==ht)&&(G!==V&&(i.activeTexture(V),G=V),i.bindTexture(P,ht||Q[P]),K.type=P,K.texture=ht)}function F(){const P=ct[G];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(P){Ut.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ut.copy(P))}function gt(P){kt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),kt.copy(P))}function Ht(P,ht){let V=l.get(ht);V===void 0&&(V=new WeakMap,l.set(ht,V));let K=V.get(P);K===void 0&&(K=i.getUniformBlockIndex(ht,P.name),V.set(P,K))}function It(P,ht){const K=l.get(ht).get(P);o.get(ht)!==K&&(i.uniformBlockBinding(ht,K,P.__bindingPointIndex),o.set(ht,K))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,ct={},f={},u=new WeakMap,d=[],p=null,g=!1,_=null,h=null,m=null,M=null,x=null,b=null,I=null,R=new Ot(0,0,0),A=0,D=!1,X=null,v=null,E=null,B=null,z=null,Ut.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ft,disable:rt,bindFramebuffer:Pt,drawBuffers:bt,useProgram:Bt,setBlending:C,setMaterial:He,setFlipSided:zt,setCullFace:Wt,setLineWidth:At,setPolygonOffset:ee,setScissorTest:Lt,activeTexture:T,bindTexture:y,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Ht,uniformBlockBinding:It,texStorage2D:Xt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Ct,viewport:gt,reset:Qt}}function mc(i,t,e,n){const s=$0(n);switch(e){case gh:return i*t;case vh:return i*t;case xh:return i*t*2;case yh:return i*t/s.components*s.byteLength;case Ho:return i*t/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case Go:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Vo:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case or:case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sh:case po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $0(i){switch(i){case Dn:case fh:return{byteLength:1,components:1};case Ms:case ph:case Es:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case ui:case Oo:case Ln:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Y0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,f=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):_r("canvas")}function _(T,y,F){let j=1;const J=Lt(T);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(j*J.width),yt=Math.floor(j*J.height);u===void 0&&(u=g(Y,yt));const at=y?g(Y,yt):u;return at.width=Y,at.height=yt,at.getContext("2d").drawImage(T,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+yt+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function h(T){return T.generateMipmaps&&T.minFilter!==Ze&&T.minFilter!==qe}function m(T){i.generateMipmap(T)}function M(T,y,F,j,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=y;if(y===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),y===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const yt=J?fr:Zt.getTransfer(j);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=yt===ie?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(T,y){let F;return T?y===null||y===ui||y===$i?F=i.DEPTH24_STENCIL8:y===Ln?F=i.DEPTH32F_STENCIL8:y===Ms&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ui||y===$i?F=i.DEPTH_COMPONENT24:y===Ln?F=i.DEPTH_COMPONENT32F:y===Ms&&(F=i.DEPTH_COMPONENT16),F}function b(T,y){return h(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ze&&T.minFilter!==qe?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function I(T){const y=T.target;y.removeEventListener("dispose",I),A(y),y.isVideoTexture&&f.delete(y)}function R(T){const y=T.target;y.removeEventListener("dispose",R),X(y)}function A(T){const y=n.get(T);if(y.__webglInit===void 0)return;const F=T.source,j=d.get(F);if(j){const J=j[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(T),Object.keys(j).length===0&&d.delete(F)}n.remove(T)}function D(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const F=T.source,j=d.get(F);delete j[y.__cacheKey],a.memory.textures--}function X(T){const y=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let J=0;J<y.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[j][J]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=T.textures;for(let j=0,J=F.length;j<J;j++){const Y=n.get(F[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(T)}let v=0;function E(){v=0}function B(){const T=v;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),v+=1,T}function z(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function q(T,y){const F=n.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kt(F,T,y);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function Z(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){kt(F,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function H(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){kt(F,T,y);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function tt(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){$(F,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const G={[Ga]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},ct={[Ze]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},dt={[Fd]:i.NEVER,[Gd]:i.ALWAYS,[kd]:i.LESS,[Eh]:i.LEQUAL,[Od]:i.EQUAL,[Hd]:i.GEQUAL,[Bd]:i.GREATER,[zd]:i.NOTEQUAL};function it(T,y){if(y.type===Ln&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===qe||y.magFilter===Gr||y.magFilter===Is||y.magFilter===Pn||y.minFilter===qe||y.minFilter===Gr||y.minFilter===Is||y.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,G[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ct[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ct[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ze||y.minFilter!==Is&&y.minFilter!==Pn||y.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ut(T,y){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",I));const j=y.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Y=z(y);if(Y!==T.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[Y].usedTimes++;const yt=J[T.__cacheKey];yt!==void 0&&(J[T.__cacheKey].usedTimes--,yt.usedTimes===0&&D(y)),T.__cacheKey=Y,T.__webglTexture=J[Y].texture}return F}function kt(T,y,F){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);const J=Ut(T,y),Y=y.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+F);const yt=n.get(Y);if(Y.version!==yt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const at=Zt.getPrimaries(Zt.workingColorSpace),pt=y.colorSpace===Gn?null:Zt.getPrimaries(y.colorSpace),Xt=y.colorSpace===Gn||at===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let et=_(y.image,!1,s.maxTextureSize);et=ee(y,et);const mt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type);let Ct=M(y.internalFormat,mt,Rt,y.colorSpace,y.isVideoTexture);it(j,y);let gt;const Ht=y.mipmaps,It=y.isVideoTexture!==!0,Qt=yt.__version===void 0||J===!0,P=Y.dataReady,ht=b(y,et);if(y.isDepthTexture)Ct=x(y.format===Yi,y.type),Qt&&(It?e.texStorage2D(i.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ct,et.width,et.height,0,mt,Rt,null));else if(y.isDataTexture)if(Ht.length>0){It&&Qt&&e.texStorage2D(i.TEXTURE_2D,ht,Ct,Ht[0].width,Ht[0].height);for(let V=0,K=Ht.length;V<K;V++)gt=Ht[V],It?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,V,Ct,gt.width,gt.height,0,mt,Rt,gt.data);y.generateMipmaps=!1}else It?(Qt&&e.texStorage2D(i.TEXTURE_2D,ht,Ct,et.width,et.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Rt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,et.width,et.height,0,mt,Rt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){It&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ct,Ht[0].width,Ht[0].height,et.depth);for(let V=0,K=Ht.length;V<K;V++)if(gt=Ht[V],y.format!==on)if(mt!==null)if(It){if(P)if(y.layerUpdates.size>0){const ot=mc(gt.width,gt.height,y.format,y.type);for(const ut of y.layerUpdates){const Vt=gt.data.subarray(ut*ot/gt.data.BYTES_PER_ELEMENT,(ut+1)*ot/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ut,gt.width,gt.height,1,mt,Vt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,et.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ct,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,et.depth,mt,Rt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Ct,gt.width,gt.height,et.depth,0,mt,Rt,gt.data)}else{It&&Qt&&e.texStorage2D(i.TEXTURE_2D,ht,Ct,Ht[0].width,Ht[0].height);for(let V=0,K=Ht.length;V<K;V++)gt=Ht[V],y.format!==on?mt!==null?It?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,V,Ct,gt.width,gt.height,0,mt,Rt,gt.data)}else if(y.isDataArrayTexture)if(It){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ct,et.width,et.height,et.depth),P)if(y.layerUpdates.size>0){const V=mc(et.width,et.height,y.format,y.type);for(const K of y.layerUpdates){const ot=et.data.subarray(K*V/et.data.BYTES_PER_ELEMENT,(K+1)*V/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,mt,Rt,ot)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Rt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,mt,Rt,et.data);else if(y.isData3DTexture)It?(Qt&&e.texStorage3D(i.TEXTURE_3D,ht,Ct,et.width,et.height,et.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Rt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,mt,Rt,et.data);else if(y.isFramebufferTexture){if(Qt)if(It)e.texStorage2D(i.TEXTURE_2D,ht,Ct,et.width,et.height);else{let V=et.width,K=et.height;for(let ot=0;ot<ht;ot++)e.texImage2D(i.TEXTURE_2D,ot,Ct,V,K,0,mt,Rt,null),V>>=1,K>>=1}}else if(Ht.length>0){if(It&&Qt){const V=Lt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ct,V.width,V.height)}for(let V=0,K=Ht.length;V<K;V++)gt=Ht[V],It?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt,Rt,gt):e.texImage2D(i.TEXTURE_2D,V,Ct,mt,Rt,gt);y.generateMipmaps=!1}else if(It){if(Qt){const V=Lt(et);e.texStorage2D(i.TEXTURE_2D,ht,Ct,V.width,V.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Rt,et)}else e.texImage2D(i.TEXTURE_2D,0,Ct,mt,Rt,et);h(y)&&m(j),yt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function $(T,y,F){if(y.image.length!==6)return;const j=Ut(T,y),J=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const yt=Zt.getPrimaries(Zt.workingColorSpace),at=y.colorSpace===Gn?null:Zt.getPrimaries(y.colorSpace),pt=y.colorSpace===Gn||yt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Xt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Xt&&!et?mt[K]=_(y.image[K],!0,s.maxCubemapSize):mt[K]=et?y.image[K].image:y.image[K],mt[K]=ee(y,mt[K]);const Rt=mt[0],Ct=r.convert(y.format,y.colorSpace),gt=r.convert(y.type),Ht=M(y.internalFormat,Ct,gt,y.colorSpace),It=y.isVideoTexture!==!0,Qt=Y.__version===void 0||j===!0,P=J.dataReady;let ht=b(y,Rt);it(i.TEXTURE_CUBE_MAP,y);let V;if(Xt){It&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ht,Rt.width,Rt.height);for(let K=0;K<6;K++){V=mt[K].mipmaps;for(let ot=0;ot<V.length;ot++){const ut=V[ot];y.format!==on?Ct!==null?It?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,0,0,ut.width,ut.height,Ct,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,Ht,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,0,0,ut.width,ut.height,Ct,gt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,Ht,ut.width,ut.height,0,Ct,gt,ut.data)}}}else{if(V=y.mipmaps,It&&Qt){V.length>0&&ht++;const K=Lt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(et){It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Ct,gt,mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,mt[K].width,mt[K].height,0,Ct,gt,mt[K].data);for(let ot=0;ot<V.length;ot++){const Vt=V[ot].image[K].image;It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,0,0,Vt.width,Vt.height,Ct,gt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,Ht,Vt.width,Vt.height,0,Ct,gt,Vt.data)}}else{It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,gt,mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Ct,gt,mt[K]);for(let ot=0;ot<V.length;ot++){const ut=V[ot];It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,0,0,Ct,gt,ut.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,Ht,Ct,gt,ut.image[K])}}}h(y)&&m(i.TEXTURE_CUBE_MAP),Y.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Q(T,y,F,j,J,Y){const yt=r.convert(F.format,F.colorSpace),at=r.convert(F.type),pt=M(F.internalFormat,yt,at,F.colorSpace);if(!n.get(y).__hasExternalTextures){const et=Math.max(1,y.width>>Y),mt=Math.max(1,y.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,pt,et,mt,y.depth,0,yt,at,null):e.texImage2D(J,Y,pt,et,mt,0,yt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,n.get(F).__webglTexture,0,zt(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,n.get(F).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(T,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const j=y.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=x(y.stencilBuffer,J),yt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(y);Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const j=y.textures;for(let J=0;J<j.length;J++){const Y=j[J],yt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),pt=M(Y.internalFormat,yt,at,Y.colorSpace),Xt=zt(y);F&&Wt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,pt,y.width,y.height):Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const j=n.get(y.depthTexture).__webglTexture,J=zt(y);if(y.depthTexture.format===Bi)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(y.depthTexture.format===Yi)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(T){const y=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=j}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");rt(y.__webglFramebuffer,T)}else if(F){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),ft(y.__webglDepthbuffer[j],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ft(y.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(T,y,F){const j=n.get(T);y!==void 0&&Q(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Pt(T)}function Bt(T){const y=T.texture,F=n.get(T),j=n.get(y);T.addEventListener("dispose",R);const J=T.textures,Y=T.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let pt=0;pt<y.mipmaps.length;pt++)F.__webglFramebuffer[at][pt]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let at=0,pt=J.length;at<pt;at++){const Xt=n.get(J[at]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Wt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const pt=J[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Xt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),mt=M(pt.internalFormat,Xt,et,pt.colorSpace,T.isXRRenderTarget===!0),Rt=zt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),it(i.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)Q(F.__webglFramebuffer[at][pt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else Q(F.__webglFramebuffer[at],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);h(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let at=0,pt=J.length;at<pt;at++){const Xt=J[at],et=n.get(Xt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),it(i.TEXTURE_2D,Xt),Q(F.__webglFramebuffer,T,Xt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),h(Xt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),it(at,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)Q(F.__webglFramebuffer[pt],T,y,i.COLOR_ATTACHMENT0,at,pt);else Q(F.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,at,0);h(y)&&m(at),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Yt(T){const y=T.textures;for(let F=0,j=y.length;F<j;F++){const J=y[F];if(h(J)){const Y=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(J).__webglTexture;e.bindTexture(Y,yt),m(Y),e.unbindTexture()}}}const Gt=[],C=[];function He(T){if(T.samples>0){if(Wt(T)===!1){const y=T.textures,F=T.width,j=T.height;let J=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),at=y.length>1;if(at)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Xt=n.get(y[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,J,i.NEAREST),l===!0&&(Gt.length=0,C.length=0,Gt.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Gt.push(Y),C.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Xt=n.get(y[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function zt(T){return Math.min(s.maxSamples,T.samples)}function Wt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(T){const y=a.render.frame;f.get(T)!==y&&(f.set(T,y),T.update())}function ee(T,y){const F=T.colorSpace,j=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Kn&&F!==Gn&&(Zt.getTransfer(F)===ie?(j!==on||J!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=E,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=tt,this.rebindTextures=bt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Wt}function j0(i,t){function e(n,s=Gn){let r;const a=Zt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Oo)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Es)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===on)return i.RGBA;if(n===vh)return i.LUMINANCE;if(n===xh)return i.LUMINANCE_ALPHA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===yh)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===Mh)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===Vo)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===ja)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===uo||n===fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sh||n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class K0 extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ms extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const h=e.getJointPose(_,n),m=this._getHandJoint(c,_);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=f.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q0=`
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

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new we,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:J0,fragmentShader:Q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e_ extends Zi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,d=null,p=null,g=null;const _=new t_,h=e.getContextAttributes();let m=null,M=null;const x=[],b=[],I=new Dt;let R=null;const A=new Ke;A.layers.enable(1),A.viewport=new oe;const D=new Ke;D.layers.enable(2),D.viewport=new oe;const X=[A,D],v=new K0;v.layers.enable(1),v.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=x[$];return Q===void 0&&(Q=new va,x[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=x[$];return Q===void 0&&(Q=new va,x[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=x[$];return Q===void 0&&(Q=new va,x[$]=Q),Q.getHandSpace()};function z($){const Q=b.indexOf($.inputSource);if(Q===-1)return;const ft=x[Q];ft!==void 0&&(ft.update($.inputSource,$.frame,c||a),ft.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let $=0;$<x.length;$++){const Q=b[$];Q!==null&&(b[$]=null,x[$].disconnect(Q))}E=null,B=null,_.reset(),t.setRenderTarget(m),p=null,d=null,u=null,s=null,M=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),h.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const Q={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new di(p.framebufferWidth,p.framebufferHeight,{format:on,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}else{let Q=null,ft=null,rt=null;h.depth&&(rt=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=h.stencil?Yi:Bi,ft=h.stencil?$i:ui);const Pt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new di(d.textureWidth,d.textureHeight,{format:on,type:Dn,depthTexture:new Fh(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z($){for(let Q=0;Q<$.removed.length;Q++){const ft=$.removed[Q],rt=b.indexOf(ft);rt>=0&&(b[rt]=null,x[rt].disconnect(ft))}for(let Q=0;Q<$.added.length;Q++){const ft=$.added[Q];let rt=b.indexOf(ft);if(rt===-1){for(let bt=0;bt<x.length;bt++)if(bt>=b.length){b.push(ft),rt=bt;break}else if(b[bt]===null){b[bt]=ft,rt=bt;break}if(rt===-1)break}const Pt=x[rt];Pt&&Pt.connect(ft)}}const H=new U,tt=new U;function G($,Q,ft){H.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(ft.matrixWorld);const rt=H.distanceTo(tt),Pt=Q.projectionMatrix.elements,bt=ft.projectionMatrix.elements,Bt=Pt[14]/(Pt[10]-1),Yt=Pt[14]/(Pt[10]+1),Gt=(Pt[9]+1)/Pt[5],C=(Pt[9]-1)/Pt[5],He=(Pt[8]-1)/Pt[0],zt=(bt[8]+1)/bt[0],Wt=Bt*He,At=Bt*zt,ee=rt/(-He+zt),Lt=ee*-He;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const T=Bt+ee,y=Yt+ee,F=Wt-Lt,j=At+(rt-Lt),J=Gt*Yt/y*T,Y=C*Yt/y*T;$.projectionMatrix.makePerspective(F,j,J,Y,T,y),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ct($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,ft=$.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),v.near=D.near=A.near=Q,v.far=D.far=A.far=ft,(E!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,B=v.far);const rt=$.parent,Pt=v.cameras;ct(v,rt);for(let bt=0;bt<Pt.length;bt++)ct(Pt[bt],rt);Pt.length===2?G(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),dt($,v,rt)};function dt($,Q,ft){ft===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ft.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_o*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let it=null;function Ut($,Q){if(f=Q.getViewerPose(c||a),g=Q,f!==null){const ft=f.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let rt=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let bt=0;bt<ft.length;bt++){const Bt=ft[bt];let Yt=null;if(p!==null)Yt=p.getViewport(Bt);else{const C=u.getViewSubImage(d,Bt);Yt=C.viewport,bt===0&&(t.setRenderTargetTextures(M,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(M))}let Gt=X[bt];Gt===void 0&&(Gt=new Ke,Gt.layers.enable(bt),Gt.viewport=new oe,X[bt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),bt===0&&(v.matrix.copy(Gt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Gt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const bt=u.getDepthInformation(ft[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let ft=0;ft<x.length;ft++){const rt=b[ft],Pt=x[ft];rt!==null&&Pt!==void 0&&Pt.update(rt,Q,c||a)}it&&it($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const kt=new Nh;kt.setAnimationLoop(Ut),this.setAnimationLoop=function($){it=$},this.dispose=function(){}}}const ii=new gn,n_=new le;function i_(i,t){function e(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,Ih(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function s(h,m,M,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(h,m):m.isMeshToonMaterial?(r(h,m),u(h,m)):m.isMeshPhongMaterial?(r(h,m),f(h,m)):m.isMeshStandardMaterial?(r(h,m),d(h,m),m.isMeshPhysicalMaterial&&p(h,m,b)):m.isMeshMatcapMaterial?(r(h,m),g(h,m)):m.isMeshDepthMaterial?r(h,m):m.isMeshDistanceMaterial?(r(h,m),_(h,m)):m.isMeshNormalMaterial?r(h,m):m.isLineBasicMaterial?(a(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?l(h,m,M,x):m.isSpriteMaterial?c(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,e(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===Be&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,e(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===Be&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,e(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,e(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const M=t.get(m),x=M.envMap,b=M.envMapRotation;x&&(h.envMap.value=x,ii.copy(b),ii.x*=-1,ii.y*=-1,ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(ii)),h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,h.aoMapTransform))}function a(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform))}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,M,x){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*M,h.scale.value=x*.5,m.map&&(h.map.value=m.map,e(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function f(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function u(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function p(h,m,M){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function _(h,m){const M=t.get(m).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const b=x.program;n.uniformBlockBinding(M,b)}function c(M,x){let b=s[M.id];b===void 0&&(g(M),b=f(M),s[M.id]=b,M.addEventListener("dispose",h));const I=x.program;n.updateUBOMapping(M,I);const R=t.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function f(M){const x=u();M.__bindingPointIndex=x;const b=i.createBuffer(),I=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],b=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=b.length;R<A;R++){const D=Array.isArray(b[R])?b[R]:[b[R]];for(let X=0,v=D.length;X<v;X++){const E=D[X];if(p(E,R,X,I)===!0){const B=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let q=0;for(let Z=0;Z<z.length;Z++){const H=z[Z],tt=_(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,B+q,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,q),q+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,b,I){const R=M.value,A=x+"_"+b;if(I[A]===void 0)return typeof R=="number"||typeof R=="boolean"?I[A]=R:I[A]=R.clone(),!0;{const D=I[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return I[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(M){const x=M.uniforms;let b=0;const I=16;for(let A=0,D=x.length;A<D;A++){const X=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,E=X.length;v<E;v++){const B=X[v],z=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Z=z.length;q<Z;q++){const H=z[q],tt=_(H),G=b%I,ct=G%tt.boundary,dt=G+ct;b+=ct,dt!==0&&I-dt<tt.storage&&(b+=I-dt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=tt.storage}}}const R=b%I;return R>0&&(b+=I-R),M.__size=b,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function h(M){const x=M.target;x.removeEventListener("dispose",h);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class r_{constructor(t={}){const{canvas:e=Wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,h=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let b=!1,I=0,R=0,A=null,D=-1,X=null;const v=new oe,E=new oe;let B=null;const z=new Ot(0);let q=0,Z=e.width,H=e.height,tt=1,G=null,ct=null;const dt=new oe(0,0,Z,H),it=new oe(0,0,Z,H);let Ut=!1;const kt=new qo;let $=!1,Q=!1;const ft=new le,rt=new le,Pt=new U,bt=new oe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Gt(){return A===null?tt:1}let C=n;function He(S,L){return e.getContext(S,L)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",ut,!1),C===null){const L="webgl2";if(C=He(L,S),C===null)throw He(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let zt,Wt,At,ee,Lt,T,y,F,j,J,Y,yt,at,pt,Xt,et,mt,Rt,Ct,gt,Ht,It,Qt,P;function ht(){zt=new hg(C),zt.init(),It=new j0(C,zt),Wt=new sg(C,zt,t,It),At=new q0(C),Wt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),ee=new fg(C),Lt=new L0,T=new Y0(C,zt,At,Lt,Wt,It,ee),y=new ag(x),F=new cg(x),j=new yf(C),Qt=new ng(C,j),J=new ug(C,j,ee,Qt),Y=new mg(C,J,j,ee),Ct=new pg(C,Wt,T),et=new rg(Lt),yt=new P0(x,y,F,zt,Wt,Qt,et),at=new i_(x,Lt),pt=new D0,Xt=new B0(zt),Rt=new eg(x,y,F,At,Y,d,l),mt=new W0(x,Y,Wt),P=new s_(C,ee,Wt,At),gt=new ig(C,zt,ee),Ht=new dg(C,zt,ee),ee.programs=yt.programs,x.capabilities=Wt,x.extensions=zt,x.properties=Lt,x.renderLists=pt,x.shadowMap=mt,x.state=At,x.info=ee}ht();const V=new e_(x,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(Z,H,!1))},this.getSize=function(S){return S.set(Z,H)},this.setSize=function(S,L,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,H=L,e.width=Math.floor(S*tt),e.height=Math.floor(L*tt),k===!0&&(e.style.width=S+"px",e.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(Z*tt,H*tt).floor()},this.setDrawingBufferSize=function(S,L,k){Z=S,H=L,tt=k,e.width=Math.floor(S*k),e.height=Math.floor(L*k),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,L,k,O){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,L,k,O),At.viewport(v.copy(dt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(it)},this.setScissor=function(S,L,k,O){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,L,k,O),At.scissor(E.copy(it).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(S){At.setScissorTest(Ut=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){ct=S},this.getClearColor=function(S){return S.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(S=!0,L=!0,k=!0){let O=0;if(S){let N=!1;if(A!==null){const nt=A.texture.format;N=nt===Vo||nt===Go||nt===Ho}if(N){const nt=A.texture.type,lt=nt===Dn||nt===ui||nt===Ms||nt===$i||nt===Bo||nt===zo,_t=Rt.getClearColor(),vt=Rt.getClearAlpha(),Et=_t.r,wt=_t.g,Mt=_t.b;lt?(p[0]=Et,p[1]=wt,p[2]=Mt,p[3]=vt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Et,g[1]=wt,g[2]=Mt,g[3]=vt,C.clearBufferiv(C.COLOR,0,g))}else O|=C.COLOR_BUFFER_BIT}L&&(O|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Xt.dispose(),Lt.dispose(),y.dispose(),F.dispose(),Y.dispose(),Qt.dispose(),P.dispose(),yt.dispose(),V.dispose(),V.removeEventListener("sessionstart",fl),V.removeEventListener("sessionend",pl),Zn.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=ee.autoReset,L=mt.enabled,k=mt.autoUpdate,O=mt.needsUpdate,N=mt.type;ht(),ee.autoReset=S,mt.enabled=L,mt.autoUpdate=k,mt.needsUpdate=O,mt.type=N}function ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Vt(S){const L=S.target;L.removeEventListener("dispose",Vt),de(L)}function de(S){De(S),Lt.remove(S)}function De(S){const L=Lt.get(S).programs;L!==void 0&&(L.forEach(function(k){yt.releaseProgram(k)}),S.isShaderMaterial&&yt.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,k,O,N,nt){L===null&&(L=Bt);const lt=N.isMesh&&N.matrixWorld.determinant()<0,_t=ju(S,L,k,O,N);At.setMaterial(O,lt);let vt=k.index,Et=1;if(O.wireframe===!0){if(vt=J.getWireframeAttribute(k),vt===void 0)return;Et=2}const wt=k.drawRange,Mt=k.attributes.position;let Jt=wt.start*Et,ne=(wt.start+wt.count)*Et;nt!==null&&(Jt=Math.max(Jt,nt.start*Et),ne=Math.min(ne,(nt.start+nt.count)*Et)),vt!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,vt.count)):Mt!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,Mt.count));const re=ne-Jt;if(re<0||re===1/0)return;Qt.setup(N,O,_t,k,vt);let Ge,jt=gt;if(vt!==null&&(Ge=j.get(vt),jt=Ht,jt.setIndex(Ge)),N.isMesh)O.wireframe===!0?(At.setLineWidth(O.wireframeLinewidth*Gt()),jt.setMode(C.LINES)):jt.setMode(C.TRIANGLES);else if(N.isLine){let St=O.linewidth;St===void 0&&(St=1),At.setLineWidth(St*Gt()),N.isLineSegments?jt.setMode(C.LINES):N.isLineLoop?jt.setMode(C.LINE_LOOP):jt.setMode(C.LINE_STRIP)}else N.isPoints?jt.setMode(C.POINTS):N.isSprite&&jt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const St=N._multiDrawStarts,be=N._multiDrawCounts,Kt=N._multiDrawCount,tn=vt?j.get(vt).bytesPerElement:1,gi=Lt.get(O).currentProgram.getUniforms();for(let Ve=0;Ve<Kt;Ve++)gi.setValue(C,"_gl_DrawID",Ve),jt.render(St[Ve]/tn,be[Ve])}else if(N.isInstancedMesh)jt.renderInstances(Jt,re,N.count);else if(k.isInstancedBufferGeometry){const St=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,be=Math.min(k.instanceCount,St);jt.renderInstances(Jt,re,be)}else jt.render(Jt,re)};function $t(S,L,k){S.transparent===!0&&S.side===Rn&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,Ls(S,L,k),S.side=qn,S.needsUpdate=!0,Ls(S,L,k),S.side=Rn):Ls(S,L,k)}this.compile=function(S,L,k=null){k===null&&(k=S),h=Xt.get(k),h.init(L),M.push(h),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const O=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const _t=nt[lt];$t(_t,k,N),O.add(_t)}else $t(nt,k,N),O.add(nt)}),M.pop(),h=null,O},this.compileAsync=function(S,L,k=null){const O=this.compile(S,L,k);return new Promise(N=>{function nt(){if(O.forEach(function(lt){Lt.get(lt).currentProgram.isReady()&&O.delete(lt)}),O.size===0){N(S);return}setTimeout(nt,10)}zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ue=null;function yn(S){Ue&&Ue(S)}function fl(){Zn.stop()}function pl(){Zn.start()}const Zn=new Nh;Zn.setAnimationLoop(yn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(S){Ue=S,V.setAnimationLoop(S),S===null?Zn.stop():Zn.start()},V.addEventListener("sessionstart",fl),V.addEventListener("sessionend",pl),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,L,A),h=Xt.get(S,M.length),h.init(L),M.push(h),rt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),kt.setFromProjectionMatrix(rt),Q=this.localClippingEnabled,$=et.init(this.clippingPlanes,Q),_=pt.get(S,m.length),_.init(),m.push(_),V.enabled===!0&&V.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&kr(nt,L,-1/0,x.sortObjects)}kr(S,L,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,ct),Yt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Yt&&Rt.addToRenderList(_,S),this.info.render.frame++,$===!0&&et.beginShadows();const k=h.state.shadowsArray;mt.render(k,S,L),$===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,N=_.transmissive;if(h.setupLights(),L.isArrayCamera){const nt=L.cameras;if(N.length>0)for(let lt=0,_t=nt.length;lt<_t;lt++){const vt=nt[lt];gl(O,N,S,vt)}Yt&&Rt.render(S);for(let lt=0,_t=nt.length;lt<_t;lt++){const vt=nt[lt];ml(_,S,vt,vt.viewport)}}else N.length>0&&gl(O,N,S,L),Yt&&Rt.render(S),ml(_,S,L);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,L),Qt.resetDefaultState(),D=-1,X=null,M.pop(),M.length>0?(h=M[M.length-1],$===!0&&et.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function kr(S,L,k,O){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||kt.intersectsSprite(S)){O&&bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(rt);const lt=Y.update(S),_t=S.material;_t.visible&&_.push(S,lt,_t,k,bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||kt.intersectsObject(S))){const lt=Y.update(S),_t=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),bt.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),bt.copy(lt.boundingSphere.center)),bt.applyMatrix4(S.matrixWorld).applyMatrix4(rt)),Array.isArray(_t)){const vt=lt.groups;for(let Et=0,wt=vt.length;Et<wt;Et++){const Mt=vt[Et],Jt=_t[Mt.materialIndex];Jt&&Jt.visible&&_.push(S,lt,Jt,k,bt.z,Mt)}}else _t.visible&&_.push(S,lt,_t,k,bt.z,null)}}const nt=S.children;for(let lt=0,_t=nt.length;lt<_t;lt++)kr(nt[lt],L,k,O)}function ml(S,L,k,O){const N=S.opaque,nt=S.transmissive,lt=S.transparent;h.setupLightsView(k),$===!0&&et.setGlobalState(x.clippingPlanes,k),O&&At.viewport(v.copy(O)),N.length>0&&Ps(N,L,k),nt.length>0&&Ps(nt,L,k),lt.length>0&&Ps(lt,L,k),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function gl(S,L,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[O.id]===void 0&&(h.state.transmissionRenderTarget[O.id]=new di(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Es:Dn,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const nt=h.state.transmissionRenderTarget[O.id],lt=O.viewport||v;nt.setSize(lt.z,lt.w);const _t=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(z),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&Rt.render(k);const vt=x.toneMapping;x.toneMapping=Wn;const Et=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),h.setupLightsView(O),$===!0&&et.setGlobalState(x.clippingPlanes,O),Ps(S,k,O),T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Mt=0,Jt=L.length;Mt<Jt;Mt++){const ne=L[Mt],re=ne.object,Ge=ne.geometry,jt=ne.material,St=ne.group;if(jt.side===Rn&&re.layers.test(O.layers)){const be=jt.side;jt.side=Be,jt.needsUpdate=!0,_l(re,k,O,Ge,jt,St),jt.side=be,jt.needsUpdate=!0,wt=!0}}wt===!0&&(T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt))}x.setRenderTarget(_t),x.setClearColor(z,q),Et!==void 0&&(O.viewport=Et),x.toneMapping=vt}function Ps(S,L,k){const O=L.isScene===!0?L.overrideMaterial:null;for(let N=0,nt=S.length;N<nt;N++){const lt=S[N],_t=lt.object,vt=lt.geometry,Et=O===null?lt.material:O,wt=lt.group;_t.layers.test(k.layers)&&_l(_t,L,k,vt,Et,wt)}}function _l(S,L,k,O,N,nt){S.onBeforeRender(x,L,k,O,N,nt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,L,k,O,S,nt),N.transparent===!0&&N.side===Rn&&N.forceSinglePass===!1?(N.side=Be,N.needsUpdate=!0,x.renderBufferDirect(k,L,O,N,S,nt),N.side=qn,N.needsUpdate=!0,x.renderBufferDirect(k,L,O,N,S,nt),N.side=Rn):x.renderBufferDirect(k,L,O,N,S,nt),S.onAfterRender(x,L,k,O,N,nt)}function Ls(S,L,k){L.isScene!==!0&&(L=Bt);const O=Lt.get(S),N=h.state.lights,nt=h.state.shadowsArray,lt=N.state.version,_t=yt.getParameters(S,N.state,nt,L,k),vt=yt.getProgramCacheKey(_t);let Et=O.programs;O.environment=S.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(S.isMeshStandardMaterial?F:y).get(S.envMap||O.environment),O.envMapRotation=O.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Et===void 0&&(S.addEventListener("dispose",Vt),Et=new Map,O.programs=Et);let wt=Et.get(vt);if(wt!==void 0){if(O.currentProgram===wt&&O.lightsStateVersion===lt)return xl(S,_t),wt}else _t.uniforms=yt.getUniforms(S),S.onBeforeCompile(_t,x),wt=yt.acquireProgram(_t,vt),Et.set(vt,wt),O.uniforms=_t.uniforms;const Mt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=et.uniform),xl(S,_t),O.needsLights=Zu(S),O.lightsStateVersion=lt,O.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=wt,O.uniformsList=null,wt}function vl(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=cr.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function xl(S,L){const k=Lt.get(S);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function ju(S,L,k,O,N){L.isScene!==!0&&(L=Bt),T.resetTextureUnits();const nt=L.fog,lt=O.isMeshStandardMaterial?L.environment:null,_t=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Kn,vt=(O.isMeshStandardMaterial?F:y).get(O.envMap||lt),Et=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,wt=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Mt=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,ne=!!k.morphAttributes.color;let re=Wn;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(re=x.toneMapping);const Ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,jt=Ge!==void 0?Ge.length:0,St=Lt.get(O),be=h.state.lights;if($===!0&&(Q===!0||S!==X)){const Ye=S===X&&O.id===D;et.setState(O,S,Ye)}let Kt=!1;O.version===St.__version?(St.needsLights&&St.lightsStateVersion!==be.state.version||St.outputColorSpace!==_t||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==vt||O.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==et.numPlanes||St.numIntersection!==et.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==wt||St.morphTargets!==Mt||St.morphNormals!==Jt||St.morphColors!==ne||St.toneMapping!==re||St.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,St.__version=O.version);let tn=St.currentProgram;Kt===!0&&(tn=Ls(O,L,N));let gi=!1,Ve=!1,Or=!1;const ce=tn.getUniforms(),Un=St.uniforms;if(At.useProgram(tn.program)&&(gi=!0,Ve=!0,Or=!0),O.id!==D&&(D=O.id,Ve=!0),gi||X!==S){Wt.reverseDepthBuffer?(ft.copy(S.projectionMatrix),qd(ft),$d(ft),ce.setValue(C,"projectionMatrix",ft)):ce.setValue(C,"projectionMatrix",S.projectionMatrix),ce.setValue(C,"viewMatrix",S.matrixWorldInverse);const Ye=ce.map.cameraPosition;Ye!==void 0&&Ye.setValue(C,Pt.setFromMatrixPosition(S.matrixWorld)),Wt.logarithmicDepthBuffer&&ce.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ce.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,Ve=!0,Or=!0)}if(N.isSkinnedMesh){ce.setOptional(C,N,"bindMatrix"),ce.setOptional(C,N,"bindMatrixInverse");const Ye=N.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ce.setValue(C,"boneTexture",Ye.boneTexture,T))}N.isBatchedMesh&&(ce.setOptional(C,N,"batchingTexture"),ce.setValue(C,"batchingTexture",N._matricesTexture,T),ce.setOptional(C,N,"batchingIdTexture"),ce.setValue(C,"batchingIdTexture",N._indirectTexture,T),ce.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(C,"batchingColorTexture",N._colorsTexture,T));const Br=k.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&Ct.update(N,k,tn),(Ve||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,ce.setValue(C,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Un.envMap.value=vt,Un.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Un.envMapIntensity.value=L.environmentIntensity),Ve&&(ce.setValue(C,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&Ku(Un,Or),nt&&O.fog===!0&&at.refreshFogUniforms(Un,nt),at.refreshMaterialUniforms(Un,O,tt,H,h.state.transmissionRenderTarget[S.id]),cr.upload(C,vl(St),Un,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(cr.upload(C,vl(St),Un,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ce.setValue(C,"center",N.center),ce.setValue(C,"modelViewMatrix",N.modelViewMatrix),ce.setValue(C,"normalMatrix",N.normalMatrix),ce.setValue(C,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ye=O.uniformsGroups;for(let zr=0,Ju=Ye.length;zr<Ju;zr++){const yl=Ye[zr];P.update(yl,tn),P.bind(yl,tn)}}return tn}function Ku(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Zu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,L,k){Lt.get(S.texture).__webglTexture=L,Lt.get(S.depthTexture).__webglTexture=k;const O=Lt.get(S);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=k===void 0,O.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const k=Lt.get(S);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,k=0){A=S,I=L,R=k;let O=!0,N=null,nt=!1,lt=!1;if(S){const vt=Lt.get(S);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(C.FRAMEBUFFER,null),O=!1;else if(vt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(vt.__hasExternalTextures)T.rebindTextures(S,Lt.get(S.texture).__webglTexture,Lt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Mt=S.depthTexture;if(vt.__boundDepthTexture!==Mt){if(Mt!==null&&Lt.has(Mt)&&(S.width!==Mt.image.width||S.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(lt=!0);const wt=Lt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[L])?N=wt[L][k]:N=wt[L],nt=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=Lt.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[k]:N=wt,v.copy(S.viewport),E.copy(S.scissor),B=S.scissorTest}else v.copy(dt).multiplyScalar(tt).floor(),E.copy(it).multiplyScalar(tt).floor(),B=Ut;if(At.bindFramebuffer(C.FRAMEBUFFER,N)&&O&&At.drawBuffers(S,N),At.viewport(v),At.scissor(E),At.setScissorTest(B),nt){const vt=Lt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,vt.__webglTexture,k)}else if(lt){const vt=Lt.get(S.texture),Et=L||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.__webglTexture,k||0,Et)}D=-1},this.readRenderTargetPixels=function(S,L,k,O,N,nt,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){At.bindFramebuffer(C.FRAMEBUFFER,_t);try{const vt=S.texture,Et=vt.format,wt=vt.type;if(!Wt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-O&&k>=0&&k<=S.height-N&&C.readPixels(L,k,O,N,It.convert(Et),It.convert(wt),nt)}finally{const vt=A!==null?Lt.get(A).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(S,L,k,O,N,nt,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){const vt=S.texture,Et=vt.format,wt=vt.type;if(!Wt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-O&&k>=0&&k<=S.height-N){At.bindFramebuffer(C.FRAMEBUFFER,_t);const Mt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.bufferData(C.PIXEL_PACK_BUFFER,nt.byteLength,C.STREAM_READ),C.readPixels(L,k,O,N,It.convert(Et),It.convert(wt),0);const Jt=A!==null?Lt.get(A).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,Jt);const ne=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Xd(C,ne,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,nt),C.deleteBuffer(Mt),C.deleteSync(ne),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,k=0){S.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const O=Math.pow(2,-k),N=Math.floor(S.image.width*O),nt=Math.floor(S.image.height*O),lt=L!==null?L.x:0,_t=L!==null?L.y:0;T.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,lt,_t,N,nt),At.unbindTexture()},this.copyTextureToTexture=function(S,L,k=null,O=null,N=0){S.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let nt,lt,_t,vt,Et,wt;k!==null?(nt=k.max.x-k.min.x,lt=k.max.y-k.min.y,_t=k.min.x,vt=k.min.y):(nt=S.image.width,lt=S.image.height,_t=0,vt=0),O!==null?(Et=O.x,wt=O.y):(Et=0,wt=0);const Mt=It.convert(L.format),Jt=It.convert(L.type);T.setTexture2D(L,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const ne=C.getParameter(C.UNPACK_ROW_LENGTH),re=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ge=C.getParameter(C.UNPACK_SKIP_PIXELS),jt=C.getParameter(C.UNPACK_SKIP_ROWS),St=C.getParameter(C.UNPACK_SKIP_IMAGES),be=S.isCompressedTexture?S.mipmaps[N]:S.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,be.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,be.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_t),C.pixelStorei(C.UNPACK_SKIP_ROWS,vt),S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Et,wt,nt,lt,Mt,Jt,be.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Et,wt,be.width,be.height,Mt,be.data):C.texSubImage2D(C.TEXTURE_2D,N,Et,wt,nt,lt,Mt,Jt,be),C.pixelStorei(C.UNPACK_ROW_LENGTH,ne),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,re),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,St),N===0&&L.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(S,L,k=null,O=null,N=0){S.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,O=arguments[1]||null,S=arguments[2],L=arguments[3],N=arguments[4]||0);let nt,lt,_t,vt,Et,wt,Mt,Jt,ne;const re=S.isCompressedTexture?S.mipmaps[N]:S.image;k!==null?(nt=k.max.x-k.min.x,lt=k.max.y-k.min.y,_t=k.max.z-k.min.z,vt=k.min.x,Et=k.min.y,wt=k.min.z):(nt=re.width,lt=re.height,_t=re.depth,vt=0,Et=0,wt=0),O!==null?(Mt=O.x,Jt=O.y,ne=O.z):(Mt=0,Jt=0,ne=0);const Ge=It.convert(L.format),jt=It.convert(L.type);let St;if(L.isData3DTexture)T.setTexture3D(L,0),St=C.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)T.setTexture2DArray(L,0),St=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const be=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),tn=C.getParameter(C.UNPACK_SKIP_PIXELS),gi=C.getParameter(C.UNPACK_SKIP_ROWS),Ve=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Et),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wt),S.isDataTexture||S.isData3DTexture?C.texSubImage3D(St,N,Mt,Jt,ne,nt,lt,_t,Ge,jt,re.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(St,N,Mt,Jt,ne,nt,lt,_t,Ge,re.data):C.texSubImage3D(St,N,Mt,Jt,ne,nt,lt,_t,Ge,jt,re),C.pixelStorei(C.UNPACK_ROW_LENGTH,be),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,tn),C.pixelStorei(C.UNPACK_SKIP_ROWS,gi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ve),N===0&&L.generateMipmaps&&C.generateMipmap(St),At.unbindTexture()},this.initRenderTarget=function(S){Lt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),At.unbindTexture()},this.resetState=function(){I=0,R=0,A=null,At.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wo?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Ar?"display-p3":"srgb"}}class Hh extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gh extends we{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ts extends xn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new U,b=new U,I=new U;for(let R=0;R<e.length;R+=3)p(e[R+0],x),p(e[R+1],b),p(e[R+2],I),l(x,b,I,M)}function l(M,x,b,I){const R=I+1,A=[];for(let D=0;D<=R;D++){A[D]=[];const X=M.clone().lerp(b,D/R),v=x.clone().lerp(b,D/R),E=R-D;for(let B=0;B<=E;B++)B===0&&D===R?A[D][B]=X:A[D][B]=X.clone().lerp(v,B/E)}for(let D=0;D<R;D++)for(let X=0;X<2*(R-D)-1;X++){const v=Math.floor(X/2);X%2===0?(d(A[D][v+1]),d(A[D+1][v]),d(A[D][v])):(d(A[D][v+1]),d(A[D+1][v+1]),d(A[D+1][v]))}}function c(M){const x=new U;for(let b=0;b<r.length;b+=3)x.x=r[b+0],x.y=r[b+1],x.z=r[b+2],x.normalize().multiplyScalar(M),r[b+0]=x.x,r[b+1]=x.y,r[b+2]=x.z}function f(){const M=new U;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const b=h(M)/2/Math.PI+.5,I=m(M)/Math.PI+.5;a.push(b,1-I)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],b=a[M+2],I=a[M+4],R=Math.max(x,b,I),A=Math.min(x,b,I);R>.9&&A<.1&&(x<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),I<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,x){const b=M*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){const M=new U,x=new U,b=new U,I=new U,R=new Dt,A=new Dt,D=new Dt;for(let X=0,v=0;X<r.length;X+=9,v+=6){M.set(r[X+0],r[X+1],r[X+2]),x.set(r[X+3],r[X+4],r[X+5]),b.set(r[X+6],r[X+7],r[X+8]),R.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),D.set(a[v+4],a[v+5]),I.copy(M).add(x).add(b).divideScalar(3);const E=h(I);_(R,v+0,M,E),_(A,v+2,x,E),_(D,v+4,b,E)}}function _(M,x,b,I){I<0&&M.x===1&&(a[x]=M.x-1),b.x===0&&b.z===0&&(a[x]=I/2/Math.PI+.5)}function h(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.vertices,t.indices,t.radius,t.details)}}class jo extends ts{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jo(t.radius,t.detail)}}class Ko extends ts{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ko(t.radius,t.detail)}}class Zo extends ts{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zo(t.radius,t.detail)}}class Jo extends ts{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jo(t.radius,t.detail)}}class a_ extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vh extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class o_ extends Vh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xa=new le,gc=new U,_c=new U;class l_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class c_ extends l_{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h_ extends Vh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new c_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);const u_=new Ot(16777215);class d_{constructor(t,{rotates:e=!1,flashTime:n=.12}={}){this.root=new ms,t.add(this.root),this.rotates=e,this.flashTime=n,this.flashMats=[],this.bar=null}makeFlashable(t=this.root){t.traverse(e=>{!e.isMesh||!e.material||e.material.__noFlash||(e.material=e.material.clone(),e.material.emissive&&(e.material.userData.baseEmissive=e.material.emissive.getHex(),this.flashMats.push(e.material)))})}setHealthBar(t){return this.bar=t,t}sync(t,e,n,s){this.root.position.lerpVectors(t.prevPos,t.pos,n),this.rotates&&(this.root.rotation.y=td(t.prevFacing,t.facing,n)),this.animate(e,t),this.paint(t,s)}snap(t,e,n){this.root.position.copy(t.pos),this.rotates&&(this.root.rotation.y=t.facing),this.animate(e,t),this.paint(t,n)}animate(t,e){}paint(t,e){if(this.flashMats.length){const n=t.flash>0?t.flash/this.flashTime:0,s=t.viewTint?t.viewTint():null;for(const r of this.flashMats)r.emissive.setHex(s??r.userData.baseEmissive),n>0&&r.emissive.lerp(u_,n*.9)}this.bar&&(this.bar.setFraction(t.maxHp?t.hp/t.maxHp:0),e&&this.bar.face(e))}dispose(){var t;(t=this.bar)==null||t.dispose(),this.root.removeFromParent();for(const e of this.flashMats)e.dispose();this.flashMats.length=0}}function f_(i,t,{key:e="config",log:n=!0}={}){return t}const p_={sim:{hz:20},camera:{viewUnits:14,minViewUnits:1.5,maxViewUnits:90,zoomStep:1.12,panMargin:6},grid:{unitPx:140,kind:"square",color:857106,opacity:.34,lineWidth:.9,perUnit:5,unitLabel:"sq",distanceLabel:"ft"},tokens:{defaultSize:1,minSize:.25,maxSize:12,defaultBorder:5219203,slide:{speed:9,min:.2,max:.75},ring:.07,originAlpha:.26,originRingAlpha:.7,layerGap:.002,arrow:{length:.17,gap:.05,alpha:.92,edgeAlpha:.6}},ruler:{color:15923188,widthPx:2.4,dashPx:11,duty:.58,alpha:.85},assets:{maxEdge:2560,quality:.86,maxBytes:48*1024*1024},multiplayer:{appId:"vtt-tabletop",maxPlayers:8,ghostHz:20}},Tt=f_(void 0,p_),Wh=1,Je="gm",$n="player",xo=["bg","token","gm"];function Xh(){return{v:Wh,seq:0,nid:1,scenes:{},sceneOrder:[],activeScene:null,assets:{},roster:{},chat:[]}}function vr(i,t){return`${t}_${i.nid++}`}function m_(i,t="Untitled scene"){return{id:i,name:t,map:null,artW:0,artH:0,grid:{kind:"square",snap:"soft",magnet:.12,measure:"chebyshev",unitLabel:"sq",distanceLabel:"ft",unitPx:140,ox:0,oy:0,color:857106,opacity:.34,perUnit:5},tokens:{},tokenOrder:[],fx:Hi()}}const qh=["rain","snow","fog","embers"],xr=12,Qo=["fade","swirl","curtain","drapes","ink","burn"];function Hi(){return{weather:null,intensity:.6,darkness:0,blackout:!1,transition:"fade"}}function g_(i,t={}){return{id:i,asset:null,name:"",x:0,y:0,size:1,rot:0,facing:null,shape:"circle",border:5219203,tint:16777215,layer:"token",owner:"",hp:0,maxHp:0,hidden:!1,light:!1,lightRange:2,...t}}function yr(i,t,{role:e=$n,color:n=6535316}={}){return{peerId:i,name:t,role:e,color:n,tokens:[]}}function Ee(i){return i.activeScene&&i.scenes[i.activeScene]||null}function __(i,{isGm:t=!0}={}){const e=Ee(i);if(!e)return[];const n=[];for(const s of e.tokenOrder){const r=e.tokens[s];r&&(r.hidden&&!t||r.layer==="gm"&&!t||n.push(r))}return n}const v_={x0:0,y0:0,x1:16,y1:10};function yo(i){if(!i||!i.artW||!i.artH)return{...v_};const t=i.grid.unitPx||1;return{x0:-i.grid.ox/t,y0:-i.grid.oy/t,x1:(i.artW-i.grid.ox)/t,y1:(i.artH-i.grid.oy)/t}}function Mo(i){var t,e;if(!i||typeof i!="object")return Xh();for(const n of Object.values(i.scenes||{}))typeof((t=n.grid)==null?void 0:t.snap)=="boolean"&&(n.grid.snap=n.grid.snap?"grid":"off"),typeof((e=n.grid)==null?void 0:e.magnet)!="number"&&(n.grid.magnet=.12),(!n.fx||typeof n.fx!="object")&&(n.fx=Hi()),typeof n.fx.intensity!="number"&&(n.fx.intensity=Hi().intensity),Qo.includes(n.fx.transition)||(n.fx.transition="fade");return i.v=Wh,i}function Ui(i,t,e,{isGm:n=!0}={}){const s=Ee(i);if(!s)return null;for(let r=s.tokenOrder.length-1;r>=0;r--){const a=s.tokens[s.tokenOrder[r]];if(!a||(a.hidden||a.layer==="gm")&&!n)continue;const o=Math.max(.05,a.size)/2,l=t-a.x,c=e-a.y;if(a.shape==="square"?Math.abs(l)<=o&&Math.abs(c)<=o:l*l+c*c<=o*o)return a}return null}const So=[2,4,6,8,10,12,20,100],dn={dice:30,terms:8,modifier:1e3,expr:64,note:60,input:256};function vc(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim().toLowerCase().replace(/\s*([+-])\s*/g,"$1");if(!t)throw new Error("Type a roll, like 2d6+3.");if(/\s/.test(t))throw new Error(`Cannot read "${i.trim()}".`);if(t.length>dn.expr)throw new Error("That roll is too long.");const e=[],n=/([+-]?)(?:(\d*)d(\d+|%)(?:k([hl])(\d+))?|(\d+))/y;let s=0,r=0;for(;s<t.length;){n.lastIndex=s;const a=n.exec(t);if(!a||e.length&&!a[1])throw new Error(`Cannot read "${i.trim()}".`);s=n.lastIndex;const o=a[1]==="-"?-1:1;if(a[6]!==void 0){const u=Number(a[6]);if(u>dn.modifier)throw new Error(`${u} is a big modifier.`);e.push({flat:u,sign:o});continue}const l=a[2]===""?1:Number(a[2]),c=a[3]==="%"?100:Number(a[3]);if(!So.includes(c))throw new Error(`There is no d${c}. Try ${So.map(u=>`d${u}`).join(", ")}.`);if(l<1)throw new Error("Roll at least one die.");if(r+=l,r>dn.dice)throw new Error(`At most ${dn.dice} dice at once.`);let f=null;if(a[4]){const u=Number(a[5]);if(u<1||u>l)throw new Error(`Cannot keep ${u} of ${l}.`);f={high:a[4]==="h",n:u}}e.push({count:l,sides:c,keep:f,sign:o})}if(e.length>dn.terms)throw new Error("Too many parts to that roll.");if(!e.some(a=>a.sides))throw new Error("There are no dice in that.");return e}function Cr(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim();if(!t)throw new Error("Type a roll, like 2d6+3.");if(t.length>dn.input)throw new Error("That roll is too long.");const e=t.split(/\s+/);for(let n=e.length;n>=1;n--){let s;try{s=vc(e.slice(0,n).join(" "))}catch{continue}return{terms:s,note:x_(e.slice(n).join(" "))}}throw vc(e[0]),new Error(`Cannot read "${t}".`)}function x_(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,dn.note)}function $h(i){return i.map((t,e)=>{const n=t.sign<0?"-":e?"+":"";if(t.flat!==void 0)return`${n}${t.flat}`;const s=t.keep?`k${t.keep.high?"h":"l"}${t.keep.n}`:"";return`${n}${t.count}d${t.sides===100?"%":t.sides}${s}`}).join("")}function xc(i,t,{id:e,by:n,hidden:s=!1}){const{terms:r,note:a}=Cr(t),o=i.count,l=[];let c=0;for(const d of r){if(d.flat!==void 0){c+=d.sign*d.flat;continue}const p=[];for(let g=0;g<d.count;g++)p.push({sides:d.sides,value:i.int(1,d.sides),kept:!0,sign:d.sign});if(d.keep){const g=p.map((h,m)=>m).sort((h,m)=>(d.keep.high?p[m].value-p[h].value:p[h].value-p[m].value)||h-m),_=new Set(g.slice(0,d.keep.n));p.forEach((h,m)=>{h.kept=_.has(m)})}l.push(...p)}const f=i.int(1,2147483647),u=l.reduce((d,p)=>d+(p.kept?p.sign*p.value:0),0)+c;return{id:e,by:n,expr:$h(r),...a?{note:a}:{},...s?{hidden:!0}:{},dice:l,mod:c,total:u,from:o,draws:i.count-o,throw:f}}function y_(i){return!i||typeof i!="object"||typeof i.id!="string"||!Array.isArray(i.dice)||i.dice.length<1||i.dice.length>dn.dice||i.note!==void 0&&(typeof i.note!="string"||i.note.length>dn.note)?!1:i.dice.every(t=>So.includes(t.sides)&&Number.isInteger(t.value)&&t.value>=1&&t.value<=t.sides)}const Ki={keep:200,text:300};function Yh(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,Ki.text)}function M_(i){return!!i&&typeof i=="object"&&typeof i.id=="string"&&i.id.length<=64&&typeof i.by=="string"&&i.by.length<=64&&typeof i.text=="string"&&i.text.length>0&&i.text.length<=Ki.text&&(i.at===void 0||Number.isFinite(i.at))}function yc(i){i.length>Ki.keep&&i.splice(0,i.length-Ki.keep)}const jh="square",tl="hex-pointy",Rs="hex-flat",es="none",Kh=[jh,tl,Rs,es],S_="off",Zh="soft",Jh="grid",b_=[S_,Zh,Jh],E_=.5,Mr=E_/(Math.sqrt(3)/2);function Pr(i){return i===tl||i===Rs}function w_(i,t,e,n=1){if(!e||e.kind===es)return[i,t];if(Pr(e.kind)){const[r,a]=Qh(i,t,e.kind);return[r,a]}return Math.round(n)%2===1||n<1?[Math.floor(i)+.5,Math.floor(t)+.5]:[Math.round(i),Math.round(t)]}function T_(i,t,e,n=.12){if(!e||e.kind===es||!(n>0))return[i,t];if(Pr(e.kind)){const[r,a]=Qh(i,t,e.kind);return Math.hypot(i-r,t-a)<=n?[r,a]:[i,t]}const s=r=>{const a=Math.round(r*2)/2;return Math.abs(r-a)<=n?a:r};return[s(i),s(t)]}function el(i,t,e,n=1){return(e==null?void 0:e.snap)===Jh?w_(i,t,e,n):(e==null?void 0:e.snap)===Zh?T_(i,t,e,e.magnet):[i,t]}function A_(i,t,e,n,s,r="euclid"){if(Pr(s==null?void 0:s.kind))return P_(i,t,e,n,s.kind);const a=Math.abs(e-i),o=Math.abs(n-t);if(r==="chebyshev")return Math.max(a,o);if(r==="alternating"){const l=Math.min(a,o);return Math.max(a,o)-l+Math.floor(l)+Math.floor(l/2)+l%1}return Math.hypot(a,o)}function R_(i,t,e,n,s){const r=!s||s.kind===es,a=A_(i,t,e,n,s,s==null?void 0:s.measure),o=Math.round(a*10)/10,l=Number.isInteger(o)?String(o):o.toFixed(1),c=r?o===1?"unit":"units":s.unitLabel||"sq",f=Math.round(a*((s==null?void 0:s.perUnit)??5)),u=(s==null?void 0:s.distanceLabel)??"ft";return{distance:a,text:u?`${l} ${c} · ${f} ${u}`:`${l} ${c}`}}function bo(i,t,e){const[n,s]=e===Rs?[t,i]:[i,t],r=(Math.sqrt(3)/3*n-s/3)/Mr,a=2/3*s/Mr;return[r,a]}function C_(i,t,e){const n=Mr*(Math.sqrt(3)*i+Math.sqrt(3)/2*t),s=Mr*(3/2*t);return e===Rs?[s,n]:[n,s]}function Eo(i,t){const e=-i-t;let n=Math.round(i),s=Math.round(t);const r=Math.round(e),a=Math.abs(n-i),o=Math.abs(s-t),l=Math.abs(r-e);return a>o&&a>l?n=-s-r:o>l&&(s=-n-r),[n,s]}function Qh(i,t,e){const[n,s]=Eo(...bo(i,t,e));return C_(n,s,e)}function P_(i,t,e,n,s){const[r,a]=Eo(...bo(i,t,s)),[o,l]=Eo(...bo(e,n,s)),c=r-o,f=a-l;return(Math.abs(c)+Math.abs(f)+Math.abs(c+f))/2}function L_(i,t,e){const n=/\((\d{1,3})\s*[x×]\s*(\d{1,3})\)/i.exec(i||"");if(!n)return null;const s=+n[1],r=+n[2];if(!(s>1&&r>1))return null;const a=t/s,o=e/r;if(Math.abs(a-o)>1.5)return null;const l=Math.round((a+o)/2);return l<16||l>1024?null:{unitPx:l,ox:0,oy:0,cols:s,rows:r}}const I_=new Set(["name","size","rot","facing","shape","border","tint","layer","owner","hp","maxHp","hidden","asset","light","lightRange"]),D_=new Set(["kind","snap","magnet","measure","unitPx","ox","oy","color","opacity","perUnit","unitLabel","distanceLabel"]);function Mc(i,t){const e={};for(const n of Object.keys(i||{}))t.has(n)&&(e[n]=i[n]);return e}function Sc(i,t){const e={};for(const n of Object.keys(t))e[n]=i[n];return e}const U_={"scene.add":(i,[t={}])=>{const e=t.id||vr(i,"sc"),n={...m_(e,t.name),...t,id:e};return i.scenes[e]=n,i.sceneOrder.push(e),i.activeScene||(i.activeScene=e),["scene.del",e]},"scene.del":(i,[t])=>{const e=i.scenes[t];return e?(delete i.scenes[t],i.sceneOrder=i.sceneOrder.filter(n=>n!==t),i.activeScene===t&&(i.activeScene=i.sceneOrder[0]||null),["scene.add",e]):null},"scene.activate":(i,[t])=>{if(!i.scenes[t]||i.activeScene===t)return null;const e=i.activeScene;return i.activeScene=t,["scene.activate",e]},"scene.copy":(i,[t,e])=>{var a;const n=i.scenes[t];if(!n)return null;const s=Ec(i,"sc"),r=JSON.parse(JSON.stringify(n));r.id=s,r.name=typeof e=="string"&&e.trim()?e.trim():`${n.name} (copy)`,r.tokens={},r.tokenOrder=[];for(const o of n.tokenOrder){const l=n.tokens[o];if(!l||((a=i.roster[l.owner])==null?void 0:a.role)===$n)continue;const c={...JSON.parse(JSON.stringify(l)),id:Ec(i,"tk")};r.tokens[c.id]=c,r.tokenOrder.push(c.id)}return i.scenes[s]=r,i.sceneOrder.splice(i.sceneOrder.indexOf(t)+1,0,s),["scene.del",s]},"scene.go":(i,[t,e=null,n=null])=>{var f;const s=Ee(i),r=i.scenes[t];if(!s||!r||s.id===t)return null;const a=yo(r),o={};let l=0;for(const u of s.tokenOrder.slice()){const d=s.tokens[u];if(!d||((f=i.roster[d.owner])==null?void 0:f.role)!==$n)continue;o[u]={x:d.x,y:d.y},delete s.tokens[u],s.tokenOrder.splice(s.tokenOrder.indexOf(u),1);const p=d.x>=a.x0&&d.x<=a.x1&&d.y>=a.y0&&d.y<=a.y1,g=(e==null?void 0:e[u])||(p?null:k_(a,l++));g&&(d.x=g.x,d.y=g.y),r.tokens[u]=d,r.tokenOrder.push(u)}s.fx||(s.fx=Hi()),r.fx||(r.fx=Hi());const c={blackout:r.fx.blackout,transition:r.fx.transition};return r.fx.blackout=s.fx.blackout,r.fx.transition=s.fx.transition,n&&Object.assign(s.fx,n),i.activeScene=t,["scene.go",s.id,o,c]},"scene.rename":(i,[t,e])=>{const n=i.scenes[t];if(!n||n.name===e)return null;const s=n.name;return n.name=e,["scene.rename",t,s]},"scene.map":(i,[t,e,n,s])=>{const r=i.scenes[t];if(!r)return null;const a=["scene.map",t,r.map,r.artW,r.artH];return r.map=e||null,r.artW=n||0,r.artH=s||0,a},"scene.grid":(i,[t,e])=>{const n=i.scenes[t];if(!n)return null;const s=Mc(e,D_);if(s.kind&&!Kh.includes(s.kind)&&delete s.kind,s.snap&&!b_.includes(s.snap)&&delete s.snap,"magnet"in s&&(s.magnet=Math.min(.25,Math.max(0,+s.magnet||0))),!Object.keys(s).length)return null;const r=Sc(n.grid,s);return Object.assign(n.grid,s),["scene.grid",t,r]},"scene.fx":(i,[t,e])=>{const n=i.scenes[t];if(!n||!e||typeof e!="object")return null;n.fx||(n.fx=Hi());const s={};"weather"in e&&(s.weather=qh.includes(e.weather)?e.weather:null),"darkness"in e&&(s.darkness=Math.round(Math.min(1,Math.max(0,+e.darkness||0))*100)/100),"intensity"in e&&(s.intensity=Math.round(Math.min(1,Math.max(.1,+e.intensity||.1))*100)/100),"blackout"in e&&(s.blackout=!!e.blackout),"transition"in e&&(s.transition=Qo.includes(e.transition)?e.transition:"fade");const r=Object.keys(s).filter(o=>n.fx[o]!==s[o]);if(!r.length)return null;const a=Object.fromEntries(r.map(o=>[o,n.fx[o]]));for(const o of r)n.fx[o]=s[o];return["scene.fx",t,a]},"tok.add":(i,[t={}])=>{const e=Ee(i);if(!e)return null;const n=t.id||vr(i,"tk"),s=g_(n,t);return s.id=n,xo.includes(s.layer)||(s.layer="token"),e.tokens[n]=s,e.tokenOrder.push(n),["tok.del",n]},"tok.del":(i,[t])=>{const e=Ee(i),n=e==null?void 0:e.tokens[t];if(!n)return null;const s=e.tokenOrder.indexOf(t);return delete e.tokens[t],e.tokenOrder.splice(s,1),["tok.restore",n,s]},"tok.restore":(i,[t,e])=>{const n=Ee(i);return!n||!(t!=null&&t.id)?null:(n.tokens[t.id]=t,n.tokenOrder.splice(Math.min(e??n.tokenOrder.length,n.tokenOrder.length),0,t.id),["tok.del",t.id])},"tok.move":(i,[t,e,n])=>{const s=Ee(i),r=s==null?void 0:s.tokens[t];if(!r||r.x===e&&r.y===n)return null;const a=["tok.move",t,r.x,r.y];return r.x=e,r.y=n,a},"tok.patch":(i,[t,e])=>{const n=Ee(i),s=n==null?void 0:n.tokens[t];if(!s)return null;const r=Mc(e,I_);if(r.layer&&!xo.includes(r.layer)&&delete r.layer,"light"in r&&(r.light=!!r.light),"lightRange"in r&&(r.lightRange=F_(r.lightRange)),!Object.keys(r).length)return null;const a=Sc(s,r);return Object.assign(s,r),["tok.patch",t,a]},"tok.raise":(i,[t,e=!0])=>{const n=Ee(i);if(!(n!=null&&n.tokens[t]))return null;const s=n.tokenOrder.indexOf(t);if(s<0)return null;const r=n.tokenOrder.length-1;if(e?s===r:s===0)return null;const a=n.tokenOrder.slice();return n.tokenOrder.splice(s,1),e?n.tokenOrder.push(t):n.tokenOrder.unshift(t),["tok.order",a]},"tok.order":(i,[t])=>{const e=Ee(i);if(!e)return null;const n=e.tokenOrder.slice();return e.tokenOrder=t.filter(s=>e.tokens[s]),["tok.order",n]},"asset.add":(i,[t])=>!(t!=null&&t.hash)||i.assets[t.hash]?null:(i.assets[t.hash]=t,["asset.del",t.hash]),"asset.del":(i,[t])=>{const e=i.assets[t];return e?(delete i.assets[t],["asset.add",e]):null},"dice.roll":(i,[t])=>y_(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"roll",...t}),yc(i.chat),["dice.drop",t.id]):null,"dice.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(a=>a.id===t);if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["dice.roll",r]},"chat.say":(i,[t])=>M_(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"msg",id:t.id,by:t.by,text:t.text,at:t.at}),yc(i.chat),["chat.drop",t.id]):null,"chat.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(a=>a.id===t&&a.kind==="msg");if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["chat.say",r]},"peer.join":(i,[t])=>{if(!(t!=null&&t.peerId))return null;const e=i.roster[t.peerId];return i.roster[t.peerId]=t,e?["peer.join",e]:["peer.part",t.peerId]},"peer.part":(i,[t])=>{const e=i.roster[t];return e?(delete i.roster[t],["peer.join",e]):null}};function N_(i,t){if(!Array.isArray(t)||!t.length)return null;const e=U_[t[0]];if(!e)return null;const n=e(i,t.slice(1));return n&&i.seq++,n}function Lr(i,t,e,n){const s=Ee(i),r=s==null?void 0:s.tokens[t];if(!r)return null;const[a,o]=el(e,n,s.grid,r.size);return["tok.move",t,bc(a),bc(o)]}const bc=i=>Math.round(i*100)/100;function F_(i){return Math.min(xr,Math.max(1,Math.round(+i)||1))}function k_(i,t){const e=Math.floor((i.x0+i.x1)/2),n=Math.floor((i.y0+i.y1)/2);return{x:e+t%4-2+.5,y:n+Math.floor(t/4)+.5}}function Ec(i,t){const e=s=>!!i.scenes[s]||Object.values(i.scenes).some(r=>r.tokens[s]);let n;do n=vr(i,t);while(e(n));return n}const wc=6210279;class nl{constructor({state:t=null,seed:e=null}={}){this.state=t?Mo(t):Xh(),this.seed=e??nl.newSeed(),this.rng=new Hr(this.seed),this.secretRng=new Hr(Ml(this.seed,wc)),this.secrets=[],this.events=new ed,this.undoStack=[],this.redoStack=[],this.maxUndo=200,this.simTime=0,this.leases=new Map,this.said=0}static newSeed(){return Math.random()*4294967296>>>0}get scene(){return Ee(this.state)}get seq(){return this.state.seq}dispatch(t,{record:e=!0}={}){const n=this.applyOne(t);return n?(e&&(this.undoStack.push(n),this.undoStack.length>this.maxUndo&&this.undoStack.shift(),this.redoStack.length=0),this.events.emit("table.changed",[t[0],this.state.seq]),n):null}batch(t){const e=[];for(const n of t){const s=this.applyOne(n);s&&e.push(s)}return e.length?(this.undoStack.push(["batch",e.reverse()]),this.redoStack.length=0,this.events.emit("table.changed",["batch",this.state.seq]),e):null}applyOne(t){const e=N_(this.state,t);return e&&this.events.emitRemote("op",[t,this.state.seq]),e}load(t){this.state=Mo(t),this.secrets=[],this.undoStack.length=0,this.redoStack.length=0,this.leases.clear(),this.events.emitLocal("table.changed",["load",this.state.seq])}undo(){return this.flip(this.undoStack,this.redoStack)}redo(){return this.flip(this.redoStack,this.undoStack)}flip(t,e){const n=t.pop();if(!n)return null;const s=n[0]==="batch"?n[1].map(r=>this.applyOne(r)).filter(Boolean).reverse():this.applyOne(n);return s?(e.push(n[0]==="batch"?["batch",s]:s),this.events.emit("table.changed",[n[0],this.state.seq]),n):null}claim(t,e,n=6){const s=this.leases.get(t);return s&&s.by!==e&&s.until>this.simTime?!1:(this.leases.set(t,{by:e,until:this.simTime+n}),!0)}release(t,e){const n=this.leases.get(t);n&&n.by===e&&this.leases.delete(t)}heldBy(t){const e=this.leases.get(t);return e&&e.until>this.simTime?e.by:null}step(t){if(this.simTime+=t,this.leases.size)for(const[e,n]of this.leases)n.until<=this.simTime&&this.leases.delete(e)}rollDice(t,e,{hidden:n=!1}={}){const s=`r_${this.seed.toString(36)}_${this.rng.count}`,r=xc(this.rng,t,{id:s,by:e,hidden:n});return this.dispatch(["dice.roll",r],{record:!1}),r}rollSecret(t,e,n){var a;const s=`s_${this.seed.toString(36)}_${this.secretRng.count}`,r={...xc(this.secretRng,t,{id:s,by:e,hidden:!0}),at:n,after:((a=this.feed().at(-1))==null?void 0:a.id)??null};return this.secrets.push(r),this.secrets.length>Ki.keep&&this.secrets.shift(),r}restoreSecrets(t,e){this.secretRng=new Hr(Ml(this.seed,wc)),e&&this.secretRng.setState(e),this.secrets=Array.isArray(t)?t:[]}feedWithSecrets(){const t=this.feed();if(!this.secrets.length)return t;const e=new Set(t.map(r=>r.id)),n=[],s=r=>{for(const a of this.secrets)a.after===r&&n.push({kind:"roll",...a})};for(const r of this.secrets)r.after!==null&&!e.has(r.after)&&n.push({kind:"roll",...r});s(null);for(const r of t)n.push(r),s(r.id);return n}rolls(){return(this.state.chat||[]).filter(t=>t.kind==="roll")}say(t,e,n){const s=Yh(e);if(!s)return!1;const r=`m_${this.seed.toString(36)}_${this.said++}`;return this.dispatch(["chat.say",{id:r,by:t,text:s,at:Number.isFinite(n)?n:void 0}],{record:!1}),!0}feed(){return this.state.chat||[]}id(t){return vr(this.state,t)}snapshot(){return JSON.parse(JSON.stringify(this.state))}}const O_="vtt",B_=1;let hs=null;function z_(){return hs||(hs=new Promise((i,t)=>{let e;try{e=indexedDB.open(O_,B_)}catch(n){t(n);return}e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains("tables")||n.createObjectStore("tables",{keyPath:"id"}),n.objectStoreNames.contains("assets")||n.createObjectStore("assets",{keyPath:"hash"})},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}).catch(i=>(console.warn("[db] storage unavailable; tables will not be kept",i),hs=null,null)),hs)}async function ns(i,t,e,n=null){const s=await z_();return s?new Promise(r=>{let a;try{a=s.transaction(i,t)}catch{r(n);return}const o=e(a.objectStore(i));a.oncomplete=()=>r(o?o.result:!0),a.onerror=()=>r(n),a.onabort=()=>r(n)}):n}async function H_(){return(await ns("tables","readonly",t=>t.getAll(),[])||[]).map(({id:t,name:e,code:n,savedAt:s,tokens:r})=>({id:t,name:e,code:n,savedAt:s,tokens:r})).sort((t,e)=>e.savedAt-t.savedAt)}function tu(i){return ns("tables","readonly",t=>t.get(i))}function eu(i){return ns("tables","readwrite",t=>t.put(i),!1)}function G_(i){return ns("tables","readwrite",t=>t.delete(i),!1)}function Tc(i,t){return ns("assets","readwrite",e=>e.put({hash:i,blob:t}),!1)}async function V_(i){const t=await ns("assets","readonly",e=>e.get(i));return(t==null?void 0:t.blob)||null}class W_{constructor(){this.blobs=new Map,this.bitmaps=new Map,this.pending=new Map}has(t){return this.blobs.has(t)}async put(t){return this.blobs.set(t.hash,t.blob),this.bitmaps.delete(t.hash),Tc(t.hash,t.blob),t.hash}async putBytes(t,e){return this.blobs.set(t,e),this.bitmaps.delete(t),Tc(t,e),t}async restore(t){const e=[];return await Promise.all(t.map(async n=>{if(this.blobs.has(n))return;const s=await V_(n);s?this.blobs.set(n,s):e.push(n)})),e}async blob(t){return this.blobs.get(t)||null}async bitmap(t){if(!t)return null;const e=this.bitmaps.get(t);if(e)return e;const n=this.pending.get(t);if(n)return n;const s=this.blobs.get(t);if(!s)return null;const r=createImageBitmap(s,{imageOrientation:"flipY"}).then(a=>(this.bitmaps.set(t,a),this.pending.delete(t),a)).catch(()=>(this.pending.delete(t),null));return this.pending.set(t,r),r}missing(t){const e=new Set;for(const n of Object.values(t.scenes||{})){n.map&&e.add(n.map);for(const s of Object.values(n.tokens||{}))s.asset&&e.add(s.asset)}return[...e].filter(n=>!this.blobs.has(n))}trimBitmaps(t){var n;const e=new Set;for(const s of Object.values(t.scenes||{})){s.map&&e.add(s.map);for(const r of Object.values(s.tokens||{}))r.asset&&e.add(r.asset)}for(const[s,r]of this.bitmaps)e.has(s)||((n=r.close)==null||n.call(r),this.bitmaps.delete(s))}}const X_=1200,Cs={minPeriod:12,maxPeriod:400,samples:600,scales:[1,2,3],minConfidence:.35};function q_(i,t,e){const n=new Float32Array(t*e);for(let s=0,r=0;s<n.length;s++,r+=4)n[s]=.299*i[r]+.587*i[r+1]+.114*i[r+2];return n}function $_(i,t,e,n,s={}){const{samples:r,scale:a=2}={...Cs,...s},o=n===0?t:e,l=n===0?e:t,c=new Float64Array(o),f=Math.max(1,Math.floor(l/r)),u=n===0?(d,p)=>i[p*t+d]:(d,p)=>i[d*t+p];for(let d=0;d<l;d+=f)for(let p=a;p<o-a;p++)c[p]+=2*u(p,d)-u(p-a,d)-u(p+a,d);return c}function nu(i,t){const e=i.length,s=Math.max(3,t|1)>>1,r=new Float64Array(e);let a=0;for(let c=0;c<Math.min(s,e);c++)a+=i[c];let o=0,l=Math.min(s,e)-1;for(let c=0;c<e;c++){for(;l<Math.min(e-1,c+s);)a+=i[++l];for(;o<Math.max(0,c-s);)a-=i[o++];r[c]=i[c]-a/(l-o+1)}return r}function Y_(i,t=1.6){let e=0;for(let r=0;r<i.length;r++)e+=i[r]*i[r];const n=t*Math.sqrt(e/Math.max(1,i.length));if(!(n>0))return i;const s=new Float64Array(i.length);for(let r=0;r<i.length;r++)s[r]=Math.max(-n,Math.min(n,i[r]));return s}function j_(i,t){const e=i.length-t;if(e<t*2)return 0;let n=0,s=0,r=0;for(let o=0;o<e;o++){const l=i[o],c=i[o+t];n+=l*c,s+=l*l,r+=c*c}const a=Math.sqrt(s*r);return a>0?n/a:0}function K_(i,t={}){const{minPeriod:e,maxPeriod:n}={...Cs,...t},s=Math.min(n,Math.floor(i.length/3));if(s<=e)return{period:0,score:0,prominence:0};const r=new Float64Array(s+2);for(let b=e;b<=s;b++)r[b]=j_(i,b);const a=s-e+1,o=nu(r.subarray(e,s+1),Math.max(11,Math.round(a/6))),l=b=>b>=e&&b<=s?o[b-e]:-1/0;let c=e;for(let b=e;b<=s;b++)l(b)>l(c)&&(c=b);if(l(c)<=0)return{period:0,score:0,prominence:0};let f=0,u=0;for(let b=0;b<a;b++)f+=o[b],u+=o[b]*o[b];const d=f/a,p=Math.sqrt(Math.max(0,u/a-d*d)),g=p>0?(l(c)-d)/p:0,_=l(c-1),h=l(c),m=l(c+1),M=Number.isFinite(_)&&Number.isFinite(m)?_-2*h+m:0,x=M!==0?Math.max(-.5,Math.min(.5,.5*(_-m)/M)):0;return{period:c+x,score:r[c],prominence:g}}function Z_(i,t,e){let n=0,s=0;for(let r=e;r<i.length-1;r+=t)n+=i[Math.round(r)],s++;return s<=2?0:Math.abs(n)/Math.sqrt(s)}function J_(i,t,e){let n=0,s=0,r=0;for(let l=e;l<i.length-1;l+=t,r++)r%2?s+=i[Math.round(l)]:n+=i[Math.round(l)];const a=Math.min(Math.abs(n),Math.abs(s)),o=Math.max(Math.abs(n),Math.abs(s));return o>0?a/o:0}function Q_(i,t,e=.04){let n={period:t,offset:0,score:-1/0};const s=(o,l,c,f,u,d)=>{for(let p=o;p<=l;p+=c){const g=u===null?p:u;for(let _=f;_<g;_+=d){const h=Z_(i,p,_);h>n.score&&(n={period:p,offset:_,score:h})}}};s(t*(1-e),t*(1+e),Math.max(.25,t/150),0,null,1);const r=n.period,a=n.offset;return s(r*.995,r*1.005,Math.max(.01,r/4e3),Math.max(0,a-1.5),a+1.5,.2),n}function tv(i,t,e,n={}){const s={...Cs,...n},r=Math.min(s.maxPeriod,Math.floor(Math.max(t,e)/8),Math.floor(Math.min(t,e)/2.5)),a={...s,maxPeriod:r},o=[];for(const R of[0,1])for(const A of s.scales){const D=nu($_(i,t,e,R,{...a,scale:A}),r*2),X=Y_(D),v=K_(X,a);v.period>0&&o.push({...v,axis:R,scale:A,sig:X,raw:D})}const l={unitPx:0,ox:0,oy:0,confidence:0,readings:o.length,agreed:0,periods:[]};if(o.length<2)return l;const c=[];for(const R of o)for(const A of[1,2])for(let D=1;D<=6;D++){const X=R.period*A/D;X<s.minPeriod||X>r*2||c.some(v=>Math.abs(v-X)/X<.02)||c.push(X)}if(!c.length)return l;const f=R=>{const A=o.map(X=>Q_(X.sig,R,.02)),D=A.reduce((X,v,E)=>X+v.score*J_(o[E].raw,v.period,v.offset),0);return{period:R,fits:A,total:D}};let u=null;for(const R of c){const A=f(R);(!u||A.total>u.total)&&(u=A)}const d=R=>u.fits.filter((D,X)=>o[X].axis===R).reduce((D,X)=>X.score>D.score?X:D),p=d(0),g=d(1),_=(p.period+g.period)/2,h=R=>[1,2,3,4].some(A=>Math.abs(R.period*A-_)/_<.03||Math.abs(R.period/A-_)/_<.03),m=o.filter(h),M=new Set(m.map(R=>R.axis)),x=(m.length-1)/(o.length-1),b=m.length?1-Math.exp(-(m.reduce((R,A)=>R+A.prominence,0)/m.length)/5):0,I=Math.max(0,x*b*(M.size===2?1:0));return{unitPx:_,ox:(p.offset%_+_)%_,oy:(g.offset%_+_)%_,confidence:I,readings:o.length,agreed:m.length,periods:o.map(R=>Math.round(R.period*100)/100)}}async function Ir(i){const t=await crypto.subtle.digest("SHA-256",i);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function iu(i){var d,p;const t=Tt.assets;if(i.size>t.maxBytes)throw new Error(`${i.name} is ${Ac(i.size)}MB — the limit is ${Ac(t.maxBytes)}MB`);let e;try{e=await createImageBitmap(i)}catch{throw new Error(`${i.name} is not an image the browser can decode`)}const n=e.width,s=e.height,r=Math.max(n,s);let a=i,o=i.type||"image/png",l=!1;if(r>t.maxEdge){const g=t.maxEdge/r,_=Math.max(1,Math.round(n*g)),h=Math.max(1,Math.round(s*g)),m=await ev(e,_,h,t.quality);(d=e.close)==null||d.call(e),e=await createImageBitmap(m),a=m,o=m.type||"image/webp",l=!0}const c=await a.arrayBuffer(),f=await Ir(c),u=await su(e,n);return(p=e.close)==null||p.call(e),{hash:f,name:i.name,mime:o,w:n,h:s,size:c.byteLength,scaled:l,bytes:c,blob:a,detected:u}}async function ev(i,t,e,n){if(typeof OffscreenCanvas=="function"){const a=new OffscreenCanvas(t,e),o=a.getContext("2d");return o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(i,0,0,t,e),a.convertToBlob({type:"image/webp",quality:n})}const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");return r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(i,0,0,t,e),new Promise((a,o)=>{s.toBlob(l=>l?a(l):o(new Error("could not re-encode the image")),"image/webp",n)})}function Ac(i){return(i/1048576).toFixed(1)}async function nv(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`Could not read ${t} (${e.status})`);const n=await e.blob();return new File([n],t,{type:n.type||"image/jpeg"})}async function iv(){try{const i=await fetch("maps/index.json");if(!i.ok)return[];const{maps:t}=await i.json();return Array.isArray(t)?t:[]}catch{return[]}}async function su(i,t){const e=Math.min(1,X_/i.width),n=Math.max(1,Math.round(i.width*e)),s=Math.max(1,Math.round(i.height*e)),r=await sv(i,n,s);if(!r)return null;const a=tv(q_(r,n,s),n,s);if(!a.unitPx)return null;const o=t/n;return{unitPx:a.unitPx*o,ox:a.ox*o,oy:a.oy*o,confidence:a.confidence,agreed:a.agreed,readings:a.readings}}async function sv(i,t,e){try{const s=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(t,e):Object.assign(document.createElement("canvas"),{width:t,height:e})).getContext("2d",{willReadFrequently:!0});return s.drawImage(i,0,0,t,e),s.getImageData(0,0,t,e).data}catch{return null}}function ru(i){const{hash:t,name:e,mime:n,w:s,h:r,size:a,scaled:o}=i;return{hash:t,name:e,mime:n,w:s,h:r,size:a,scaled:o}}const Yn={map:0,grid:.01,bg:.02,dragOrigin:.03,token:.04,ruler:.07,gm:.06,ghost:.08,ui:.1};function Gi(i){return-i}function au(i){return-i}function rv(i,t,e){return(Yn[i]??Yn.token)+t*e}class av{constructor(){this.camera=new $o(-1,1,1,-1,.01,100),this.camera.position.set(0,0,10),this.viewUnits=Tt.camera.viewUnits,this.aspect=1,this.bounds=null}resize(t,e){this.aspect=e>0?t/e:1,this.apply()}apply(){const t=this.viewUnits/2,e=t*this.aspect,n=this.camera;n.left=-e,n.right=e,n.top=t,n.bottom=-t,n.updateProjectionMatrix()}toWorld(t,e,n=new Dt){const s=this.viewUnits/2;return n.set(this.camera.position.x+t*s*this.aspect,this.camera.position.y+e*s)}toUnits(t,e,n=new Dt){return this.toWorld(t,e,n),n.y=au(n.y),n}toNdc(t,e,n=new Dt){const s=this.viewUnits/2;return n.set((t-this.camera.position.x)/(s*this.aspect),(e-this.camera.position.y)/s)}pxPerUnit(t){return t/this.viewUnits}panBy(t,e){this.camera.position.x+=t,this.camera.position.y+=e,this.clamp()}zoomAt(t,e,n){const s=Tt.camera,r=this.toWorld(e,n,ov);this.viewUnits=Math.min(s.maxViewUnits,Math.max(s.minViewUnits,this.viewUnits*t)),this.apply();const a=this.toWorld(e,n,lv);this.camera.position.x+=r.x-a.x,this.camera.position.y+=r.y-a.y,this.clamp()}frame({x0:t,y0:e,x1:n,y1:s},r=1.04){const a=Math.max(.001,n-t),o=Math.max(.001,s-e);this.camera.position.x=(t+n)/2,this.camera.position.y=-(e+s)/2;const l=Tt.camera,c=Math.max(o,a/Math.max(.001,this.aspect))*r;this.viewUnits=Math.min(l.maxViewUnits,Math.max(l.minViewUnits,c)),this.apply(),this.clamp()}clamp(){if(!this.bounds)return;const t=Tt.camera.panMargin,e=this.viewUnits/2,n=e*this.aspect,s=this.bounds,r=s.x0-t+n,a=s.x1+t-n,o=-s.y1-t+e,l=-s.y0+t-e,c=this.camera.position;c.x=r>a?(s.x0+s.x1)/2:Math.min(a,Math.max(r,c.x)),c.y=o>l?-(s.y0+s.y1)/2:Math.min(l,Math.max(o,c.y))}}const ov=new Dt,lv=new Dt;class cv{constructor(t,e){this.renderer=e,this.material=new fi({color:16777215,transparent:!1}),this.mesh=new Se(new _n(1,1),this.material),this.mesh.position.z=Yn.map,this.mesh.visible=!1,t.add(this.mesh),this.hash=null,this.texture=null,this.blank=new Se(new _n(1,1),new fi({color:1712671})),this.blank.position.z=Yn.map,t.add(this.blank)}update(t,e,n){const s=(t==null?void 0:t.map)||null;s!==this.hash&&(this.hash=s,this.setTexture(null),this.loading=!1),s&&!this.texture&&!this.loading&&n.has(s)&&(this.loading=!0,n.bitmap(s).then(c=>{this.hash===s&&(c?this.setTexture(c):this.loading="failed")}));const r=Math.max(.001,e.x1-e.x0),a=Math.max(.001,e.y1-e.y0),o=(e.x0+e.x1)/2,l=-(e.y0+e.y1)/2;for(const c of[this.mesh,this.blank])c.scale.set(r,a,1),c.position.x=o,c.position.y=l;this.mesh.visible=!!this.texture,this.blank.visible=!this.texture}setTexture(t){var n;if((n=this.texture)==null||n.dispose(),!t){this.texture=null,this.material.map=null,this.material.needsUpdate=!0;return}const e=new we(t);e.colorSpace=Fe,e.flipY=!1,e.generateMipmaps=!0,e.minFilter=Pn,e.magFilter=qe,e.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),e.needsUpdate=!0,this.texture=e,this.material.map=e,this.material.needsUpdate=!0}dispose(){this.setTexture(null),this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent(),this.blank.geometry.dispose(),this.blank.material.dispose(),this.blank.removeFromParent()}}const hv={[jh]:0,[tl]:1,[Rs]:2,[es]:3},uv=`
  varying vec2 vUnit;
  void main() {
    // The quad is placed and scaled in world space; unit space is that with y
    // flipped, which is the one conversion this whole view agrees on.
    vec4 world = modelMatrix * vec4(position, 1.0);
    vUnit = vec2(world.x, -world.y);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,dv=`
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
`;class fv{constructor(t){this.material=new ln({vertexShader:uv,fragmentShader:dv,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ot(Tt.grid.color)},uOpacity:{value:Tt.grid.opacity},uWidth:{value:Tt.grid.lineWidth},uKind:{value:0}}}),this.mesh=new Se(new _n(1,1),this.material),this.mesh.position.z=Yn.grid,this.mesh.visible=!1,t.add(this.mesh)}update(t,e){if(!t||t.grid.kind===es){this.mesh.visible=!1;return}const n=t.grid,s=this.material.uniforms;s.uKind.value=hv[n.kind]??0,s.uColor.value.setHex(n.color??Tt.grid.color),s.uOpacity.value=n.opacity??Tt.grid.opacity,s.uWidth.value=Tt.grid.lineWidth;const r=Math.max(.001,e.x1-e.x0),a=Math.max(.001,e.y1-e.y0);this.mesh.scale.set(r,a,1),this.mesh.position.x=(e.x0+e.x1)/2,this.mesh.position.y=-(e.y0+e.y1)/2,this.mesh.visible=!0}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent()}}const pv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,mv=`
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
`,Rc=1.3,gv=new _n(1,1),rn=new U,_v=ou([0,.34],[0,-.34],[1,0]),vv=ou([-.09,.46],[-.09,-.46],[1.16,0]);function ou(i,t,e){const n=new xn;return n.setAttribute("position",new ze([i[0],i[1],0,t[0],t[1],0,e[0],e[1],0],3)),n}class Ss extends d_{constructor(t){super(t,{rotates:!1}),this.material=new ln({vertexShader:pv,fragmentShader:mv,transparent:!0,depthWrite:!1,uniforms:{uMap:{value:null},uHasMap:{value:0},uTint:{value:new Ot(16777215)},uBorder:{value:new Ot(Tt.tokens.defaultBorder)},uRing:{value:Tt.tokens.ring},uSelected:{value:0},uHover:{value:0},uShape:{value:0},uAlpha:{value:1},uRingAlpha:{value:1},uRadius:{value:1/Rc},uFit:{value:new Dt(1,1)}}}),this.mesh=new Se(gv,this.material),this.root.add(this.mesh),this.arrowEdge=new Se(vv,new fi({color:659984,transparent:!0,depthWrite:!1})),this.arrow=new Se(_v,new fi({color:Tt.tokens.defaultBorder,transparent:!0,depthWrite:!1})),this.arrowEdge.visible=!1,this.arrow.visible=!1,this.root.add(this.arrowEdge,this.arrow),this.hash=null,this.texture=null,this.placed=!1,this.from=new Dt,this.to=new Dt,this.t=0,this.dur=0}get sliding(){return this.t<this.dur}static worldOf(t,e,n=rn){return n.set(t.x,Gi(t.y),e)}sync(t,e,n){if(Ss.worldOf(t,n.z,rn),!this.placed)return this.snap(t,e,n);if(rn.x!==this.to.x||rn.y!==this.to.y){const s=Tt.tokens.slide;this.from.set(this.root.position.x,this.root.position.y),this.to.set(rn.x,rn.y);const r=this.from.distanceTo(this.to);this.t=0,this.dur=r<1e-4?0:Math.min(s.max,Math.max(s.min,r/s.speed))}if(this.t<this.dur){this.t=Math.min(this.dur,this.t+e);const s=xv(this.t/this.dur);this.root.position.set(this.from.x+(this.to.x-this.from.x)*s,this.from.y+(this.to.y-this.from.y)*s,n.z)}else this.root.position.copy(rn);this.animate(e,t),this.paint(t,n)}snap(t,e,n){Ss.worldOf(t,n.z,rn),this.root.position.copy(rn),this.to.set(rn.x,rn.y),this.t=this.dur=0,this.placed=!0,this.animate(e,t),this.paint(t,n)}paint(t,e){const n=this.material.uniforms;if((t.asset||null)!==this.hash&&(this.hash=t.asset||null,this.setTexture(null,1,1),this.loading=!1),this.hash&&!this.loading&&!this.texture&&e.library.has(this.hash)){const a=this.hash;this.loading=!0,e.library.bitmap(a).then(o=>{this.hash===a&&(o?this.setTexture(o,o.width,o.height):this.loading="failed")})}const s=Math.max(.05,t.size)*Rc;this.mesh.scale.set(s,s,1),this.mesh.rotation.z=-(t.rot||0),this.placeArrow(t,e),n.uTint.value.setHex(t.tint??16777215),n.uBorder.value.setHex(t.border??Tt.tokens.defaultBorder),n.uRing.value=Tt.tokens.ring,n.uShape.value=t.shape==="square"?1:0,n.uSelected.value=e.selected?1:0,n.uHover.value=e.hovered?1:0;const r=t.hidden?.45:1;n.uAlpha.value=r*(e.alpha??1),n.uRingAlpha.value=r*(e.ringAlpha??e.alpha??1)}placeArrow(t,e){const n=typeof t.facing=="number"&&Number.isFinite(t.facing);if(this.arrow.visible=n,this.arrowEdge.visible=n,!n)return;const s=Tt.tokens.arrow,r=Math.max(.05,t.size),a=r*s.length,o=r/2+r*s.gap,l=-t.facing,c=Math.cos(l)*o,f=Math.sin(l)*o,u=(t.hidden?.45:1)*(e.alpha??1);for(const[d,p,g]of[[this.arrowEdge,a,u*s.edgeAlpha],[this.arrow,a,u*s.alpha]])d.position.set(c,f,.001),d.rotation.z=l,d.scale.set(p,p,1),d.material.opacity=g;this.arrow.material.color.setHex(t.border??Tt.tokens.defaultBorder)}setTexture(t,e,n){var o;(o=this.texture)==null||o.dispose();const s=this.material.uniforms;if(!t){this.texture=null,s.uMap.value=null,s.uHasMap.value=0;return}const r=new we(t);r.colorSpace=Fe,r.flipY=!1,r.generateMipmaps=!0,r.minFilter=Pn,r.magFilter=qe,r.needsUpdate=!0,this.texture=r,s.uMap.value=r,s.uHasMap.value=1;const a=e/Math.max(1,n);s.uFit.value.set(Math.min(1,1/a),Math.min(1,a))}dispose(){var t;(t=this.texture)==null||t.dispose(),this.material.dispose(),this.arrow.material.dispose(),this.arrowEdge.material.dispose(),super.dispose()}}function xv(i){return i<.5?4*i*i*i:1-(-2*i+2)**3/2}const yv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Mv=`
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
`,Sv=new _n(1,1);class bv{constructor(t){this.material=new ln({vertexShader:yv,fragmentShader:Mv,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ot(Tt.ruler.color)},uLenPx:{value:1},uDashPx:{value:Tt.ruler.dashPx},uDuty:{value:Tt.ruler.duty},uAlpha:{value:Tt.ruler.alpha}}}),this.mesh=new Se(Sv,this.material),this.mesh.position.z=Yn.ruler,t.add(this.mesh)}set(t,e,n,s,r){const a=t,o=Gi(e),l=n,c=Gi(s),f=l-a,u=c-o,d=Math.hypot(f,u);if(this.mesh.visible=d*r>2,!this.mesh.visible)return;const p=Tt.ruler;this.mesh.position.set(a+f/2,o+u/2,Yn.ruler),this.mesh.rotation.z=Math.atan2(u,f),this.mesh.scale.set(d,p.widthPx/r,1);const g=this.material.uniforms;g.uLenPx.value=d*r,g.uColor.value.setHex(p.color),g.uDashPx.value=p.dashPx,g.uDuty.value=p.duty,g.uAlpha.value=p.alpha}dispose(){this.material.dispose(),this.mesh.removeFromParent()}}const Li={fontPerRadius:.36,minFont:9,maxFont:13,span:{circle:1.2,square:1.45},minRadius:11},Ev="http://www.w3.org/2000/svg";let wv=0;function us(i,t){const e=document.createElementNS(Ev,i);for(const[n,s]of Object.entries(t))e.setAttribute(n,s);return e}class Tv{constructor(t,{onResize:e,onResizeEnd:n}={}){this.el=t,this.onResize=e,this.onResizeEnd=n,this.plates=new Map,this.handle=document.createElement("div"),this.handle.className="handle",this.handle.title="Drag to resize",this.handle.hidden=!0,this.el.appendChild(this.handle),this.resizing=null,this.handle.addEventListener("pointerdown",s=>this.beginResize(s)),this.rulers=new Map}beginResize(t){if(!this.handleFor)return;t.preventDefault(),t.stopPropagation(),this.handle.setPointerCapture(t.pointerId),this.resizing=this.handleFor;const e=s=>{var d;if(!this.resizing||!this.lastCtx)return;const{camera:r,rect:a}=this.lastCtx,o=(s.clientX-a.left)/a.width*2-1,l=-((s.clientY-a.top)/a.height*2-1),c=r.toUnits(o,l),f=Math.hypot(c.x-this.resizing.x,c.y-this.resizing.y)*Math.SQRT2,u=Tt.tokens;(d=this.onResize)==null||d.call(this,this.resizing.id,Qs(f,u.minSize,u.maxSize))},n=()=>{var r;this.handle.removeEventListener("pointermove",e),this.handle.removeEventListener("pointerup",n),this.handle.removeEventListener("pointercancel",n);const s=this.resizing;this.resizing=null,s&&((r=this.onResizeEnd)==null||r.call(this,s.id))};this.handle.addEventListener("pointermove",e),this.handle.addEventListener("pointerup",n),this.handle.addEventListener("pointercancel",n)}sync(t,e){this.lastCtx=e;const{camera:n,rect:s}=e,r=n.pxPerUnit(s.height),a=new Set;for(const o of t){a.add(o.id);const l=this.plates.get(o.id)||this.createPlate(o.id),c=o.maxHp>0,f=n.toNdc(o.x,Gi(o.y)),u=(f.x*.5+.5)*s.width,d=(1-(f.y*.5+.5))*s.height,p=Math.max(.05,o.size)/2*r,g=u>-160&&u<s.width+160&&d>-120&&d<s.height+160,_=this.syncLabel(l,o,u,d,p,g);if(l.last.hp!==o.hp||l.last.maxHp!==o.maxHp){if(l.bar.hidden=!c,c){const m=Qs(o.hp/o.maxHp,0,1);l.fill.style.width=`${(m*100).toFixed(1)}%`,l.fill.dataset.state=m>.5?"ok":m>.2?"hurt":"down",l.bar.title=`${o.hp} / ${o.maxHp}`}l.last.hp=o.hp,l.last.maxHp=o.maxHp}if(!c){l.root.hidden=!0;continue}const h=Math.max(p,_)+4;if(l.root.hidden=!g,g){const m=Qs(r/110,.62,1.25);l.root.style.transform=`translate3d(${Math.round(u)}px, ${Math.round(d+h)}px, 0) scale(${m.toFixed(3)}) translateX(-50%)`,l.root.style.setProperty("--plate-width",`${Math.max(48,o.size*r*1.15).toFixed(0)}px`)}}for(const[o,l]of this.plates)a.has(o)||(l.root.remove(),l.label.svg.remove(),this.plates.delete(o));this.syncHandle(t,e,r),this.syncRulers(e)}syncLabel(t,e,n,s,r,a){const{label:o}=t;if(!e.name||!a||r<Li.minRadius)return o.svg.style.display="none",0;o.svg.style.display="";const l=r/100,c=Qs(r*Li.fontPerRadius,Li.minFont,Li.maxFont),f=Math.round(c/l),u=typeof e.facing=="number"&&Math.sin(e.facing)>.5,d=e.shape==="square",p=`${e.name}|${f}|${u?"t":"b"}|${d?"s":"c"}`;return o.key!==p&&(o.key=p,this.layoutLabel(o,e.name,f,u,d)),o.svg.style.transform=`translate3d(${n.toFixed(1)}px, ${s.toFixed(1)}px, 0) scale(${l.toFixed(4)}) translate(-100px, -100px)`,u?0:o.reach*l}layoutLabel(t,e,n,s,r){const a=100*(1-Tt.tokens.ring/2);let o,l,c;if(r){const g=s?-a:a,_=a*Li.span.square;o=`M ${-_} ${g} L ${_} ${g}`,l=2*_,c=l-n}else{const g=s?-1:1;o=`M 0 ${-g*a} A ${a} ${a} 0 1 ${s?1:0} 0 ${g*a} A ${a} ${a} 0 1 ${s?1:0} 0 ${-g*a}`,l=2*Math.PI*a,c=Math.PI*a*Li.span.circle-n}t.path.setAttribute("d",o),t.text.setAttribute("font-size",n),t.textPath.textContent=e;let f=e;for(;f.length>1&&t.text.getComputedTextLength()>c;)f=f.slice(0,-1),t.textPath.textContent=`${f.trimEnd()}…`;const u=t.text.getComputedTextLength(),d=n*.45,p=Math.min(l,u+d*2);t.path.setAttribute("stroke-width",(n*1.45).toFixed(1)),t.path.setAttribute("stroke-dasharray",`${p.toFixed(1)} ${(l*2).toFixed(1)}`),t.path.setAttribute("stroke-dashoffset",(-(l-p)/2).toFixed(1)),t.svg.setAttribute("aria-label",e),t.reach=a+n*.75}syncRulers({camera:t,rect:e,rulers:n=[]}){const s=new Set;for(const r of n){s.add(r.id);let a=this.rulers.get(r.id);a||(a=document.createElement("div"),a.className="ruler",this.el.appendChild(a),this.rulers.set(r.id,a)),a.textContent!==r.text&&(a.textContent=r.text);const o=t.toNdc((r.ax+r.bx)/2,Gi((r.ay+r.by)/2)),l=(o.x*.5+.5)*e.width,c=(1-(o.y*.5+.5))*e.height;a.style.transform=`translate3d(${Math.round(l)}px, ${Math.round(c)}px, 0) translate(-50%, -160%)`,a.hidden=Math.hypot(r.bx-r.ax,r.by-r.ay)*Av(t,e)<26}for(const[r,a]of this.rulers)s.has(r)||(a.remove(),this.rulers.delete(r))}syncHandle(t,{camera:e,rect:n,selectedId:s,dragging:r},a){const o=s?t.find(d=>d.id===s):null;if(this.handleFor=o||null,!o||r){this.handle.hidden=!0;return}const l=e.toNdc(o.x,Gi(o.y)),c=(l.x*.5+.5)*n.width,f=(1-(l.y*.5+.5))*n.height,u=o.size/2*a*Math.SQRT1_2;this.handle.hidden=!1,this.handle.style.transform=`translate3d(${Math.round(c+u)}px, ${Math.round(f+u)}px, 0) translate(-50%, -50%)`}createPlate(t){const e=document.createElement("div");e.className="plate";const n=document.createElement("div");n.className="plate-bar";const s=document.createElement("i");n.appendChild(s),e.append(n),this.el.appendChild(e);const r=us("svg",{class:"token-label",viewBox:"0 0 200 200",width:200,height:200}),a=us("g",{transform:"translate(100 100)"}),o=`label-${t}-${++wv}`,l=us("path",{id:o,class:"token-label-band"}),c=us("text",{class:"token-label-text","dominant-baseline":"central"}),f=us("textPath",{href:`#${o}`,startOffset:"50%","text-anchor":"middle"});c.appendChild(f),a.append(l,c),r.appendChild(a),this.el.appendChild(r);const d={root:e,bar:n,fill:s,label:{svg:r,path:l,text:c,textPath:f,key:"",reach:0},last:{hp:void 0,maxHp:void 0}};return this.plates.set(t,d),d}clear(){for(const[,t]of this.plates)t.root.remove(),t.label.svg.remove();this.plates.clear();for(const[,t]of this.rulers)t.remove();this.rulers.clear()}}function Qs(i,t,e){return i<t?t:i>e?e:i}function Av(i,t){return i.pxPerUnit(t.height)}const Rv="modulepreload",Cv=function(i,t){return new URL(i,t).href},Cc={},lu=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=Cv(c,n),c in Cc)return;Cc[c]=!0;const f=c.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===c&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":Rv,f||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function Pv(i){return i===100?["d10t","d10u"]:[`d${i}`]}function Lv(i,t){if(i!==100)return[t];const e=t%100;return[Math.floor(e/10)+1,e%10+1]}function cu(i,t){return i==="d10t"?String((t-1)*10).padStart(2,"0"):String(i==="d10u"?t-1:t)}function Iv(i,t){return i!=="d6"&&i!=="d2"&&(t==="6"||t==="9")}const Pc=new Map;function Lc(i){let t=Pc.get(i);return t||(t=Dv(i),Pc.set(i,t)),t}function Dv(i){switch(i){case"d2":return si(i,Nv(.9,.17,24),"caps");case"d4":return si(i,ds(new Jo(1.25)),"vertices");case"d6":return si(i,ds(new Ji(1.25,1.25,1.25)),"faces");case"d8":return si(i,ds(new Zo(1)),"faces");case"d10":case"d10t":case"d10u":return si(i,Uv(.95),"faces");case"d12":return si(i,ds(new jo(1)),"faces");case"d20":return si(i,ds(new Ko(1.05)),"faces");default:throw new Error(`No shape for ${i}`)}}function ds(i){const e=(i.index?i.toNonIndexed():i).getAttribute("position"),n=[];for(let s=0;s<e.count;s+=3)n.push([0,1,2].map(r=>new U().fromBufferAttribute(e,s+r)));return i.dispose(),n}function Uv(i){const t=Math.cos(Math.PI/5),e=.105*i,n=e*(1+t)/(1-t),s=[];for(let l=0;l<10;l++){const c=l*Math.PI/5;s.push(new U(Math.cos(c)*i,Math.sin(c)*i,l%2?-e:e))}const r=new U(0,0,n),a=new U(0,0,-n),o=[];for(let l=0;l<5;l++){const c=s[2*l],f=s[2*l+1],u=s[(2*l+2)%10],d=s[(2*l+3)%10];o.push([r,c,f],[r,f,u]),o.push([a,d,u],[a,u,f])}return o.map(l=>hu(l))}function Nv(i,t,e){const n=[],s=[];for(let a=0;a<e;a++){const o=a/e*Math.PI*2;n.push(new U(Math.cos(o)*i,Math.sin(o)*i,t/2)),s.push(new U(Math.cos(o)*i,Math.sin(o)*i,-t/2))}const r=[];for(let a=1;a<e-1;a++)r.push([n[0],n[a],n[a+1]],[s[0],s[a+1],s[a]]);for(let a=0;a<e;a++){const o=(a+1)%e;r.push([n[a],s[a],s[o]],[n[a],s[o],n[o]])}return r.map(a=>hu(a))}function hu(i){const t=new U().subVectors(i[1],i[0]).cross(new U().subVectors(i[2],i[0])),e=new U().add(i[0]).add(i[1]).add(i[2]).divideScalar(3);return t.dot(e)<0?[i[0],i[2],i[1]]:i}function si(i,t,e){const n=[],s=h=>{for(let m=0;m<n.length;m++)if(n[m].distanceToSquared(h)<1e-10)return m;return n.push(h.clone()),n.length-1},r=[];for(const h of t){const m=new U().subVectors(h[1],h[0]).cross(new U().subVectors(h[2],h[0])).normalize();let M=r.find(x=>x.normal.dot(m)>.9999);M||(M={normal:m,tris:[],ids:new Set},r.push(M)),M.tris.push(h);for(const x of h)M.ids.add(s(x))}for(const h of r){const m=[...h.ids];h.center=m.reduce((x,b)=>x.add(n[b]),new U).divideScalar(m.length),h.u=new U().subVectors(n[m[0]],h.center).projectOnPlane(h.normal).normalize(),h.w=new U().crossVectors(h.normal,h.u);const M=x=>{const b=new U().subVectors(n[x],h.center);return Math.atan2(b.dot(h.w),b.dot(h.u))};if(h.verts=m.sort((x,b)=>M(x)-M(b)),h.radius=Math.max(...m.map(x=>n[x].distanceTo(h.center))),h.verts.length===3||h.verts.length===4){const x=n[h.verts[0]],b=n[h.verts[1]],I=new U().addVectors(x,b).multiplyScalar(.5),R=new U().subVectors(I,h.center).projectOnPlane(h.normal).normalize();h.w=R.clone().negate(),h.u=new U().crossVectors(h.w,h.normal).normalize()}if(i.startsWith("d10")){const x=h.verts.reduce((b,I)=>Math.abs(n[I].z)>Math.abs(n[b].z)?I:b,h.verts[0]);h.w=new U().subVectors(n[x],h.center).projectOnPlane(h.normal).normalize(),h.u=new U().crossVectors(h.w,h.normal).normalize()}}const a=[],o=[],l=[],c=new xn;let f=0;r.forEach((h,m)=>{const M=h.radius*(i==="d2"?1:1.04);for(const x of h.tris)for(const b of x){const I=new U().subVectors(b,h.center);a.push(b.x,b.y,b.z),o.push(h.normal.x,h.normal.y,h.normal.z),l.push(.5+.5*I.dot(h.u)/M,.5+.5*I.dot(h.w)/M)}c.addGroup(f,h.tris.length*3,m),f+=h.tris.length*3}),c.setAttribute("position",new ze(a,3)),c.setAttribute("normal",new ze(o,3)),c.setAttribute("uv",new ze(l,2));let u;e==="vertices"?u=n.map((h,m)=>({vertex:m,dir:h.clone().normalize()})):e==="caps"?u=r.map((h,m)=>({face:m,dir:h.normal})).filter(h=>Math.abs(h.dir.z)>.99):u=r.map((h,m)=>({face:m,dir:h.normal}));const d=u.length,p=new Array(d).fill(0);let g=1;for(let h=0;h<d;h++){if(p[h])continue;p[h]=g;const m=u.findIndex((M,x)=>x!==h&&!p[x]&&M.dir.dot(u[h].dir)<-.999);for(m>=0&&(p[m]=d+1-g),g++;p.includes(g);)g++}const _=r.map((h,m)=>{if(e==="vertices")return h.verts.map(x=>{const b=u.findIndex(A=>A.vertex===x),I=new U().subVectors(n[x],h.center),R=h.radius*1.04;return{slot:b,x:.5*I.dot(h.u)/R,y:.5*I.dot(h.w)/R}});const M=u.findIndex(x=>x.face===m);return M>=0?[{slot:M,x:0,y:0}]:[]});return{kind:i,geometry:c,faces:r,vertices:n,slots:u,standard:p,faceSlots:_,slotKind:e}}function Fv(i,t){let e=-1,n=-1/0;const s=new U;return i.slots.forEach((r,a)=>{s.copy(r.dir).applyQuaternion(t),s.z>n&&(n=s.z,e=a)}),{slot:e,flat:n}}function eM(i,t,e){const n=i.standard.slice(),s=n.indexOf(e);return s>=0&&s!==t&&([n[s],n[t]]=[n[t],n[s]]),n}const Le=128,uu=new Map;function kv(i){const t=i>>16&255,e=i>>8&255,n=i&255;return .2126*t+.7152*e+.0722*n>150?"#14100c":"#fbf8f2"}const Ov=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`;function Bv(i,t,e){const n=`${i}|${t}|${e.map(c=>`${c.text}@${c.x.toFixed(3)},${c.y.toFixed(3)}`).join(";")}`;let s=uu.get(n);if(s)return s;const r=document.createElement("canvas");r.width=Le,r.height=Le;const a=r.getContext("2d");a.fillStyle=Ov(t),a.fillRect(0,0,Le,Le);const o=a.createLinearGradient(0,0,Le,Le);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(1,"rgba(0,0,0,0.10)"),a.fillStyle=o,a.fillRect(0,0,Le,Le);const l=kv(t);if(i==="d6"&&e.length===1)return Hv(a,Number(e[0].text),l),Ic(n,r);for(const c of e){const f=c.x!==0||c.y!==0,u=c.text.length,d=f?30:u>1?i==="d10t"?44:50:Gv(i),p=Le*(.5+c.x),g=Le*(.5-c.y);a.save(),a.translate(p,g),f&&a.rotate(Math.atan2(c.x,c.y)),a.fillStyle=l,a.font=`700 ${d}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(c.text,0,0),Iv(i,c.text)&&a.fillRect(-d*.28,d*.42,d*.56,Math.max(2,d*.07)),a.restore()}return Ic(n,r)}function Ic(i,t){const e=new Gh(t);return e.colorSpace=Fe,e.anisotropy=4,uu.set(i,e),e}const zv={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]};function Hv(i,t,e){const n=Le*.24,s=t===1?Le*.1:Le*.075;i.fillStyle=e;for(const[r,a]of zv[t]||[])i.beginPath(),i.arc(Le/2+r*n,Le/2+a*n,s,0,Math.PI*2),i.fill()}function Gv(i){return{d2:58,d6:64,d8:56,d10:50,d10u:54,d12:54,d20:46}[i]??54}function Vv(i,t){return i.faceSlots.map(e=>e.map(n=>({text:cu(i.kind,t[n.slot]),x:n.x*.62,y:n.y*.62})))}const Tn={fov:34,height:38,rest:2.6,fade:.5,dropped:.38};class Wv{constructor({badgeParent:t}){this.scene=new Hh,this.camera=new Ke(Tn.fov,1,1,200),this.camera.position.set(0,-6,Tn.height),this.camera.lookAt(0,0,0),this.tray={halfW:12,halfH:8},this.scene.add(new o_(16777215,3814184,1.5));const e=new h_(16777215,1.9);e.position.set(-12,-10,30),this.scene.add(e),this.current=null,this.badge=document.createElement("div"),this.badge.className="dice-total",this.badge.hidden=!0,t.appendChild(this.badge),this.rect={width:1,height:1}}resize(t,e){this.rect={width:t,height:e},this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=Math.hypot(Tn.height,6),s=Math.tan(Tn.fov*Math.PI/360)*n;this.tray={halfW:Math.max(4,s*this.camera.aspect-1.2),halfH:Math.max(3,s-1.6)}}get busy(){return!!this.current}play(t,e){if(!hr){Xv().then(()=>this.play(t,e));return}const{toss:n}=hr;this.clear();const s=[];for(const o of t.dice){const l=Pv(o.sides),c=Lv(o.sides,o.value);l.forEach((f,u)=>s.push({kind:f,want:c[u],kept:o.kept}))}let r;try{r=n(s,t.throw>>>0,this.tray)}catch(o){console.warn("[dice] could not animate this roll",o);return}const a=s.map((o,l)=>{const c=Lc(o.kind),f=Vv(c,r.labels[l]).map(p=>new a_({map:Bv(o.kind,e,p),roughness:.42,metalness:.04,transparent:!0})),u=new Se(c.geometry,f);this.scene.add(u);const d=new Se(qv,new fi({map:$v(),transparent:!0,depthWrite:!1,opacity:.55}));return this.scene.add(d),{mesh:u,shadow:d,frames:r.frames[l],kept:o.kept,materials:f,kind:o.kind,labels:r.labels[l]}});this.current={id:t.id,total:t.total,note:t.note||"",dice:a,t:0,steps:r.steps,settledAt:null},this.badge.hidden=!0,this.pose(0)}clear(){if(this.current){for(const t of this.current.dice){this.scene.remove(t.mesh,t.shadow);for(const e of t.materials)e.dispose();t.shadow.material.dispose()}this.current=null,this.badge.hidden=!0}}frame(t){const e=this.current;if(!e)return;e.t+=t;const n=e.t/hr.TOSS.dt;if(n<e.steps-1){this.pose(n);return}if(e.settledAt===null){e.settledAt=e.t,this.pose(e.steps-1);for(const r of e.dice)if(!r.kept)for(const a of r.materials)a.opacity=Tn.dropped;this.showTotal()}const s=e.t-e.settledAt;if(s>Tn.rest){const r=Math.max(0,1-(s-Tn.rest)/Tn.fade);for(const a of e.dice){for(const o of a.materials)o.opacity=r*(a.kept?1:Tn.dropped);a.shadow.material.opacity=.55*r}this.badge.style.opacity=String(r),r===0&&this.clear()}}pose(t){const e=Math.floor(t),n=t-e;for(const s of this.current.dice){const r=Math.min(e,this.current.steps-1)*7,a=Math.min(e+1,this.current.steps-1)*7,o=s.frames;s.mesh.position.set(o[r]+(o[a]-o[r])*n,o[r+1]+(o[a+1]-o[r+1])*n,o[r+2]+(o[a+2]-o[r+2])*n),Uc.set(o[r+3],o[r+4],o[r+5],o[r+6]),Nc.set(o[a+3],o[a+4],o[a+5],o[a+6]),s.mesh.quaternion.slerpQuaternions(Uc,Nc,n);const l=s.mesh.position.z,c=1.9+l*.12;s.shadow.position.set(s.mesh.position.x+l*.18,s.mesh.position.y+l*.12,.01),s.shadow.scale.set(c,c,1),this.current.settledAt===null&&(s.shadow.material.opacity=.55/(1+l*.25))}}showTotal(){const t=this.current;let e=0,n=0,s=1/0;const r=new U;for(const l of t.dice)l.kept&&(r.copy(l.mesh.position),r.y+=1.25,r.z+=1.25,r.project(this.camera),e+=(r.x*.5+.5)*this.rect.width,s=Math.min(s,(1-(r.y*.5+.5))*this.rect.height),n++);if(!n)return;const a=e/n,o=s-6;if(this.badge.replaceChildren(),t.note){const l=document.createElement("span");l.className="note",l.textContent=t.note,this.badge.append(l)}this.badge.append(String(t.total)),this.badge.style.opacity="1",this.badge.style.transform=`translate3d(${Math.round(a)}px, ${Math.round(o)}px, 0) translate(-50%, -100%)`,this.badge.hidden=!1}readout(){return this.current?this.current.dice.map(t=>{const e=Lc(t.kind),{slot:n}=Fv(e,t.mesh.quaternion);return{kind:t.kind,shows:cu(t.kind,t.labels[n]),kept:t.kept}}):[]}render(t){if(!this.current)return;const e=t.autoClear;t.autoClear=!1,t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=e}}let hr=null,Dc=null;function Xv(){return Dc||(Dc=lu(()=>import("./toss-BqJwStiL.js"),[],import.meta.url).then(i=>{hr=i})),Dc}const Uc=new mi,Nc=new mi,qv=new _n(1,1);let tr=null;function $v(){if(tr)return tr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.85)"),e.addColorStop(.55,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),tr=new Gh(i),tr}const Hn=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Fc=.45,ya={fade:1.2,swirl:1.8,curtain:2.2,drapes:1.6,ink:2.2,burn:3.2},Yv=7.5,jv=.045,Kv=1,Ma={rain:{density:700,make:()=>({u:Math.random(),v:Math.random(),s:.75+Math.random()*.5,l:.7+Math.random()*.6})},snow:{density:380,make:()=>({u:Math.random(),v:Math.random(),s:.6+Math.random()*.8,r:Math.random(),p:Math.random()*6.3})},embers:{density:240,make:()=>({u:Math.random(),v:Math.random(),s:.5+Math.random(),r:Math.random(),p:Math.random()*6.3})},fog:{density:26,make:()=>({u:Math.random()*1.4-.2,v:Math.random(),s:.6+Math.random()*.8,r:.22+Math.random()*.2,p:Math.random()*6.3,q:Math.random()*6.3})}};class Zv{constructor(t,e){this.cam=e,this.rect={left:0,top:0,width:1,height:1},this.canvas=document.createElement("canvas"),this.canvas.id="weather",this.g=this.canvas.getContext("2d"),this.dark=document.createElement("canvas"),this.dark.id="darkness",this.dg=this.dark.getContext("2d"),this.darkShown=0,this.cover=Ce("fx-cover"),this.shade=Ce("fx-shade"),this.swirl=document.createElement("canvas"),this.swirl.className="fx-swirl",this.sg=this.swirl.getContext("2d"),this.curtain=Ce("fx-curtain"),this.pool=Ce("fx-pool"),this.curtain.append(this.pool),this.drapes=[Ce("fx-drape left"),Ce("fx-drape right")],this.cover.append(this.shade,this.swirl,this.curtain,...this.drapes,sx()),this.card=Ce("fx-card");const n=Ce("title");n.textContent="Intermission";const s=Ce("sub");s.innerHTML='<span class="player-only">The GM is setting the scene.</span><span class="gm-only">Players see this card. Bring the table back from FX.</span>',this.card.append(Ce("glow"),n,s),this.out=null,this.locked=!1,this.flash=Ce("fx-flash"),this.pingLayer=Ce("fx-pings");const r=t.querySelector("#overlay");t.insertBefore(this.canvas,r),t.insertBefore(this.dark,r),t.insertBefore(this.cover,r),r.after(this.flash,this.pingLayer,this.card),this.board=[t.querySelector("#canvas"),this.canvas,r],this.overlay=r,this.weather=null,this.parts=[],this.pings=[]}resize(t){this.rect=t;const e=Math.min(1.5,window.devicePixelRatio||1);this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e),this.g.setTransform(e,0,0,e,0,0),this.dark.width=this.canvas.width,this.dark.height=this.canvas.height,this.dg.setTransform(e,0,0,e,0,0),this.darkKey="",this.swirl.width=this.canvas.width,this.swirl.height=this.canvas.height,this.sg.setTransform(e,0,0,e,0,0),this.coverKey="",this.reseed()}frame(t,e,{isGm:n,bounds:s,tokens:r=[],scene:a=null}){a!==this.scene&&(this.scene=a,this.out=t!=null&&t.blackout?1:0,this.darkShown=((t==null?void 0:t.darkness)||0)*(n?Fc:1),this.darkKey="",this.coverKey="");const o=(t==null?void 0:t.weather)||null;o!==this.weather&&(this.weather=o,this.parts=[]),this.intensity=(t==null?void 0:t.intensity)??.6,this.t=(this.t||0)+e,this.boardBox=this.boardRect(s),this.drawWeather(Math.min(e,.05),this.boardBox);const l=n?Fc:1;this.drawBlackout(t,e,l),this.locked=!n&&(!!(t!=null&&t.blackout)||this.out>.002),this.overlay.classList.toggle("fx-out",this.locked),document.body.classList.toggle("fx-locked",this.locked);const c=!!(t!=null&&t.blackout)&&(n||this.out>=.999);this.card.classList.toggle("on",c),this.card.classList.toggle("gm",n),this.drawDarkness(((t==null?void 0:t.darkness)||0)*l,e,r),this.drawPings()}reseed(){this.parts=[],this.g.clearRect(0,0,this.rect.width,this.rect.height)}boardRect(t){if(!t)return null;const e=this.cam.toNdc(t.x0,-t.y0),n=this.cam.toNdc(t.x1,-t.y1),{width:s,height:r}=this.rect,a=(e.x*.5+.5)*s,o=(1-(e.y*.5+.5))*r,l=(n.x*.5+.5)*s,c=(1-(n.y*.5+.5))*r;return{x:a,y:o,w:l-a,h:c-o}}fit(t,e){const n=Math.max(0,e.w*e.h),s=t===Ma.fog?1:Math.min(2,n/(1e3*600)),r=t===Ma.fog?8+18*this.intensity:t.density*this.intensity*s,a=Math.round(r*(Hn?.4:1)),o=Math.max(4,Math.round(a*.05));if(this.parts.length<a)for(let l=0;l<o&&this.parts.length<a;l++)this.parts.push(t.make());else this.parts.length>a&&(this.parts.length=Math.max(a,this.parts.length-o))}drawWeather(t,e){const n=this.g,{width:s,height:r}=this.rect;n.clearRect(0,0,s,r);const a=Ma[this.weather];if(!a||!e||e.w<2||e.h<2||(this.fit(a,e),!this.parts.length))return;n.save(),n.beginPath(),n.rect(e.x,e.y,e.w,e.h),n.clip();const o=this.intensity,l=Hn?.5:1,c=p=>e.x+p*e.w,f=p=>e.y+p*e.h,u=p=>p*t*l/e.w,d=p=>p*t*l/e.h;if(this.weather==="rain"){n.strokeStyle=`rgba(190, 210, 235, ${(.22+.38*o).toFixed(2)})`,n.lineWidth=.8+.7*o,n.beginPath();const p=650+650*o;for(const g of this.parts){g.v+=d(p*g.s),g.u+=u(p*g.s*.18),g.v>1.02&&(g.v=-.02,g.u=Math.random()*1.2-.1);const _=c(g.u),h=f(g.v),m=(8+16*o)*g.l;n.moveTo(_,h),n.lineTo(_-m*.18,h-m)}n.stroke()}else if(this.weather==="snow"){n.fillStyle=`rgba(245, 248, 255, ${(.55+.4*o).toFixed(2)})`;for(const p of this.parts)p.p+=t*(.6+p.r),p.v+=d((25+55*o)*p.s),p.u+=u(Math.sin(p.p)*(12+22*o)),p.v>1.02&&(p.v=-.02,p.u=Math.random()),n.beginPath(),n.arc(c(p.u),f(p.v),.8+p.r*(1.4+1.6*o),0,Math.PI*2),n.fill()}else if(this.weather==="embers")for(const p of this.parts){p.p+=t*7,p.v-=d((25+60*o)*p.s),p.u+=u(Math.sin(p.p*.3)*14),p.v<-.02&&(p.v=1.02,p.u=Math.random());const g=(.35+.4*o)*(.6+.4*Math.sin(p.p));n.fillStyle=`rgba(255, ${150+Math.round(60*g)}, 60, ${g.toFixed(2)})`,n.beginPath(),n.arc(c(p.u),f(p.v),1+p.r*(1.6+1.2*o),0,Math.PI*2),n.fill()}else if(this.weather==="fog"){const p=.1+.18*o,g=Math.max(e.w,e.h);for(const _ of this.parts){_.p+=t*.35,_.q+=t*.22,_.u+=u((14+26*o)*_.s),_.v+=Math.sin(_.q)*6e-4*l,_.u-_.r>1.15&&(_.u=-.25,_.v=Math.random());const h=_.r*g*(1+.12*Math.sin(_.p)),m=c(_.u),M=f(_.v),x=p*(.75+.25*Math.sin(_.p*1.3+_.q)),b=n.createRadialGradient(m,M,0,m,M,h);b.addColorStop(0,`rgba(208, 214, 218, ${x.toFixed(3)})`),b.addColorStop(.6,`rgba(208, 214, 218, ${(x*.5).toFixed(3)})`),b.addColorStop(1,"rgba(208, 214, 218, 0)"),n.fillStyle=b,n.fillRect(m-h,M-h,h*2,h*2)}}n.restore()}drawBlackout(t,e,n){var m,M;const s=ya[t==null?void 0:t.transition]?t.transition:"fade",r=t!=null&&t.blackout?1:0;this.out===null&&(this.out=r);const a=this.out>=1&&r===1&&this.closedAs?this.closedAs:s;this.closedAs=a;const o=Math.min(e,.1)/(Hn?.6:ya[a]),l=Math.sign(r-this.out);this.out=r>this.out?Math.min(r,this.out+o):Math.max(r,this.out-o);const c=this.out,f=c*c*(3-2*c),u=l*(6*c*(1-c))/(Hn?.6:ya[a]),d=`${a}:${c}:${u}:${n}`,p=a==="burn"&&(f>0&&f<1||((m=this.sparks)==null?void 0:m.length)>0);if(d===this.coverKey&&!p)return;this.coverKey=d,this.cover.style.opacity=String(n),this.cover.dataset.kind=a,this.shade.style.opacity=a==="fade"?f.toFixed(4):"0",this.drawCurtain(a==="curtain"?c:0);const g=a==="drapes"?(1-f)*104:104,_=a==="drapes"&&!Hn?u*Yv:0;this.drapes[0].style.transform=`translateX(${-g.toFixed(2)}%) skewX(${(-_).toFixed(2)}deg)`,this.drapes[1].style.transform=`translateX(${g.toFixed(2)}%) skewX(${_.toFixed(2)}deg)`;const h={swirl:x=>this.drawSwirl(x),ink:x=>this.drawInk(x),burn:x=>this.drawBurn(x,e)};for(const[x,b]of Object.entries(h))x!==a&&b(0);(M=h[a])==null||M.call(h,f)}drawCurtain(t){const e=this.rect.height,n=1.1*e-Kv,s=2*jv*e,r=(n+s)*t*t*(3-2*t),a=Math.min(r,n);this.curtain.style.transform=`translateY(${(a-1.1*e).toFixed(1)}px)`,this.curtain.classList.toggle("on",t>0);const o=Math.max(0,r-n)/2;this.pool.style.height=`${o.toFixed(1)}px`,t>0&&(this.shade.style.opacity=Math.min(1,o/6).toFixed(3))}drawInk(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.blots=null,this.inked&&(e.clearRect(0,0,n,s),this.inked=!1);return}if(this.blots||(this.blots=ix()),this.inked=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=Math.hypot(n,s);for(const a of this.blots){const o=Math.max(0,Math.min(1,(t-a.at)/(1-a.at)));if(o<=0)continue;const l=r*a.size*(1-Math.pow(1-o,2.2)),c=a.x*n,f=a.y*s;e.beginPath();for(let u=0;u<=96;u++){const d=u/96*Math.PI*2,p=1+a.lobes.reduce((g,_)=>g+_.amp*Math.sin(d*_.n+_.ph),0);e.lineTo(c+Math.cos(d)*l*p,f+Math.sin(d)*l*p)}e.fill();for(const u of a.drops){const d=l*u.dist,p=Math.max(0,Math.min(1,o*3))*u.size*r;e.beginPath(),e.arc(c+Math.cos(u.a)*d,f+Math.sin(u.a)*d,p,0,Math.PI*2),e.fill()}}t>.85&&(e.globalAlpha=(t-.85)/.15,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawBurn(t,e){const n=this.sg,{width:s,height:r}=this.rect;if(t<=0){this.fire=null,this.fireGrid=null,this.sparks=[],this.burned&&(n.clearRect(0,0,s,r),this.burned=!1);return}const a=this.boardBox,o=a&&a.w>2&&a.h>2?a:{x:0,y:0,w:s,h:r};if(this.fire||(this.fire=Jv(o.w/o.h)),this.sparks||(this.sparks=[]),this.burned=!0,n.clearRect(0,0,s,r),t>=1){n.fillStyle="#000",n.fillRect(0,0,s,r),this.drawSparks(e);return}const l=kc((t-.55)/.45);l>0&&(n.fillStyle=`rgba(0, 0, 0, ${l.toFixed(4)})`,n.beginPath(),n.rect(0,0,s,r),n.rect(o.x,o.y,o.w,o.h),n.fill("evenodd"));const c=tx(o,{x:0,y:0,w:s,h:r});if(!c){this.drawSparks(e);return}const f=performance.now();let u=this.fireGrid;(!u||!ex(u.view,c)&&f-u.made>250)&&(u=this.fireGrid=Qv(this.fire,o,c));const{gw:d,gh:p,when:g,img:_,cv:h,u0:m,u1:M,v0:x,v1:b,soft:I}=u,R=.035,A=.05,D=t*(this.fire.span+R),X=this.t||0,v=new Float32Array(d),E=new Float32Array(p);for(let it=0;it<d;it++)v[it]=Math.sin(X*11+(m+it/d*(M-m))*75);for(let it=0;it<p;it++)E[it]=Math.sin(X*7.3+(x+it/p*(b-x))*60);const B=_.data,z=[];for(let it=0;it<g.length;it++){const Ut=D-g[it],kt=it*4;if(Ut<=-A){B[kt+3]=0;continue}if(Ut>=R+I){B[kt]=0,B[kt+1]=0,B[kt+2]=0,B[kt+3]=255;continue}const $=it%d,Q=.75+.25*v[$]*E[(it-$)/d],ft=kc((Ut+I)/(2*I)),rt=ft*Math.max(0,1-Math.max(0,Ut)/R)*Q,Pt=Math.pow(Math.max(0,1+Ut/A),2),bt=255*Math.min(1,.3+rt*1.1),Bt=30+190*rt*rt,Yt=10+70*rt*rt*rt;B[kt]=70+(bt-70)*ft,B[kt+1]=34+(Bt-34)*ft,B[kt+2]=10+(Yt-10)*ft,B[kt+3]=255*Math.max(Pt*.9,ft),rt>.5&&z.push(it)}h.getContext("2d").putImageData(_,0,0);const q=o.x+m*o.w,Z=o.y+x*o.h,H=(M-m)*o.w,tt=(b-x)*o.h;n.save(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.imageSmoothingEnabled=!0,n.drawImage(h,q,Z,H,tt);const G=u.glow,ct=G.getContext("2d");ct.clearRect(0,0,G.width,G.height),ct.drawImage(h,0,0,G.width,G.height),n.globalCompositeOperation="lighter",n.globalAlpha=.5,n.drawImage(G,q,Z,H,tt),n.restore();const dt=Math.min(e,.05);if(!Hn&&z.length)for(let it=180*dt;it>0;it-=1){if(Math.random()>=it)continue;const Ut=z[Math.floor(Math.random()*z.length)];this.sparks.push({x:q+(Ut%d+Math.random())/d*H,y:Z+(Math.floor(Ut/d)+Math.random())/p*tt,vx:(Math.random()-.5)*40,vy:-30-Math.random()*80,life:.6+Math.random()*1.4,age:0,size:.7+Math.random()*2.2})}this.drawSparks(e)}drawSparks(t){const e=this.sg,n=this.t||0,s=Math.min(t,.05);this.sparks=this.sparks.filter(r=>(r.age+=s)<r.life);for(const r of this.sparks){r.x+=(r.vx+Math.sin(n*3+r.y*.05)*12)*s,r.y+=r.vy*s;const a=1-r.age/r.life;e.fillStyle=`rgba(255, ${Math.round(150+80*a)}, 60, ${a.toFixed(2)})`,e.beginPath(),e.arc(r.x,r.y,r.size*(.5+.5*a),0,Math.PI*2),e.fill()}}drawSwirl(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.swirled&&(e.clearRect(0,0,n,s),this.swirled=!1);return}if(this.swirled=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=n/2,a=s/2,o=Math.hypot(r,a)*1.05,l=5,c=5,f=t*2.4,u=t*Math.PI/l,d=o*(1-Math.pow(1-t,1.5)),p=48;for(let g=0;g<l;g++){const _=g/l*Math.PI*2+f;e.beginPath();for(let h=0;h<=p;h++){const m=o-d*h/p,M=_+c*(1-m/o)-u;e.lineTo(r+Math.cos(M)*m,a+Math.sin(M)*m)}for(let h=p;h>=0;h--){const m=o-d*h/p,M=_+c*(1-m/o)+u;e.lineTo(r+Math.cos(M)*m,a+Math.sin(M)*m)}e.closePath(),e.fill()}t>.88&&(e.globalAlpha=(t-.88)/.12,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawDarkness(t,e,n){const s=1-Math.exp(-Math.min(e,.1)*3);this.darkShown+=(t-this.darkShown)*s,Math.abs(t-this.darkShown)<.002&&(this.darkShown=t);const r=this.darkShown,a=this.dg,{width:o,height:l}=this.rect,c=r>.001?n.filter(p=>p.light):[],f=c.length?"":r.toFixed(3);if(f&&f===this.darkKey||(this.darkKey=f,a.clearRect(0,0,o,l),r<=.001)||(a.fillStyle=`rgba(0, 0, 0, ${r.toFixed(3)})`,a.fillRect(0,0,o,l),!c.length))return;a.save();const u=this.boardBox;u&&u.w>2&&u.h>2&&(a.beginPath(),a.rect(u.x,u.y,u.w,u.h),a.clip()),a.globalCompositeOperation="destination-out";const d=this.t||0;for(const p of c){const g=this.toScreen(p.x,p.y),_=this.toScreen(p.x+1,p.y),h=Math.hypot(_.x-g.x,_.y-g.y),m=(p.size||1)/2+(p.lightRange??2),M=rx(p.id),x=Hn?1:1+.008*Math.sin(d*7.3+M)+.005*Math.sin(d*13.1+M*2),b=m*h*x,I=b+.6*h,R=a.createRadialGradient(g.x,g.y,0,g.x,g.y,I);R.addColorStop(0,"rgba(0, 0, 0, 1)"),R.addColorStop(b/I,"rgba(0, 0, 0, 0.92)"),R.addColorStop(1,"rgba(0, 0, 0, 0)"),a.fillStyle=R,a.fillRect(g.x-I,g.y-I,I*2,I*2)}a.restore()}toScreen(t,e){const n=this.cam.toNdc(t,-e);return{x:(n.x*.5+.5)*this.rect.width,y:(1-(n.y*.5+.5))*this.rect.height}}play(t){if(t==="shake"){if(Hn)return;for(const e of this.board)Oc(e,"fx-shake");return}(t==="lightning"||t==="damage")&&(this.flash.dataset.kind=t,Oc(this.flash,"fx-go"))}ping(t,e,n){const s=Ce("fx-ping");s.style.setProperty("--ping",n),s.append(Ce("ring"),Ce("ring"),Ce("dot")),this.pingLayer.append(s),this.pings.push({x:t,y:e,el:s,until:performance.now()+1700})}drawPings(){if(!this.pings.length)return;const t=performance.now();this.pings=this.pings.filter(e=>{if(t>e.until)return e.el.remove(),!1;const n=this.cam.toNdc(e.x,-e.y),s=(n.x*.5+.5)*this.rect.width,r=(1-(n.y*.5+.5))*this.rect.height;return e.el.style.transform=`translate3d(${s.toFixed(1)}px, ${r.toFixed(1)}px, 0)`,!0})}}function Jv(i){const t=Math.random()*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=nx(),r=.45,a=(f,u)=>{const d=u/i,p=s(f*5,d*5)*.5+s(f*13,d*13)*.25+s(f*31,d*31)*.1;return f*e+d*n+p*r},o=[[0,0],[1,0],[0,1],[1,1]].map(([f,u])=>f*e+u/i*n),l=Math.min(...o)-.85*r*.6,c=Math.max(...o)+.85*r*.6;return{at:(f,u)=>a(f,u)-l,span:c-l}}function Qv(i,t,e){let s=Math.max(8,Math.ceil(e.w/2)),r=Math.max(8,Math.ceil(e.h/2));const a=Math.sqrt(s*r/25e4);a>1&&(s=Math.ceil(s/a),r=Math.ceil(r/a));const o=(e.x-t.x)/t.w,l=(e.x+e.w-t.x)/t.w,c=(e.y-t.y)/t.h,f=(e.y+e.h-t.y)/t.h,u=new Float32Array(s*r);for(let h=0;h<r;h++){const m=c+(h+.5)/r*(f-c);for(let M=0;M<s;M++)u[h*s+M]=i.at(o+(M+.5)/s*(l-o),m)}const d=document.createElement("canvas");d.width=s,d.height=r;const p=d.getContext("2d").createImageData(s,r),g=document.createElement("canvas");g.width=Math.max(2,Math.round(s/8)),g.height=Math.max(2,Math.round(r/8));const _=1.5*(l-o)/s;return{gw:s,gh:r,when:u,img:p,cv:d,glow:g,u0:o,u1:l,v0:c,v1:f,soft:_,view:{...e},made:performance.now()}}function tx(i,t){const e=Math.max(i.x,t.x),n=Math.max(i.y,t.y),s=Math.min(i.x+i.w,t.x+t.w)-e,r=Math.min(i.y+i.h,t.y+t.h)-n;return s>1&&r>1?{x:e,y:n,w:s,h:r}:null}function ex(i,t){return Math.abs(i.x-t.x)<1&&Math.abs(i.y-t.y)<1&&Math.abs(i.w-t.w)<1&&Math.abs(i.h-t.h)<1}function kc(i){const t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)}function nx(){const t=Float32Array.from({length:4096},()=>Math.random()*2-1),e=(s,r)=>t[(r%64+64)%64*64+(s%64+64)%64],n=s=>s*s*(3-2*s);return(s,r)=>{const a=Math.floor(s),o=Math.floor(r),l=n(s-a),c=n(r-o),f=e(a,o)+(e(a+1,o)-e(a,o))*l,u=e(a,o+1)+(e(a+1,o+1)-e(a,o+1))*l;return f+(u-f)*c}}function ix(){const i=[];for(let t=0;t<44;t++)i.push({x:Math.random()*1.1-.05,y:Math.random()*1.1-.05,at:Math.random()*.65,size:.07+Math.random()*.12,lobes:[3,5,8,13,19].map(e=>({n:e,amp:(.04+Math.random()*.07)/Math.sqrt(e/3),ph:Math.random()*6.3})),drops:Array.from({length:3+Math.floor(Math.random()*5)},()=>({a:Math.random()*6.3,dist:1.1+Math.random()*.5,size:.002+Math.random()*.006}))});return i}function sx(){const i=document.createElement("div");return i.style.cssText="position:absolute;width:0;height:0;overflow:hidden",i.innerHTML=`<svg width="0" height="0" aria-hidden="true">
    <filter id="fx-hem" x="0" y="-5%" width="100%" height="110%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.009 0" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="matrix" result="map"
        values="0 0 0 0 0.5  0 1 0 0 0  0 0 0 0 0  0 0 0 0 1"/>
      <feDisplacementMap in="SourceGraphic" in2="map" scale="16" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </svg>`,i}function rx(i){let t=0;for(const e of String(i))t=(t*31+e.charCodeAt(0))%997;return t}function Ce(i){const t=document.createElement("div");return t.className=i,t}function Oc(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}class ax{constructor({canvas:t,overlayEl:e,library:n,handlers:s={}}){this.library=n,this.renderer=new r_({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Fe,this.renderer.setClearColor(725006,1),this.scene=new Hh,this.cam=new av,this.map=new cv(this.scene,this.renderer),this.grid=new fv(this.scene),this.views=new Map,this.overlay=new Tv(e,s),this.dice=new Wv({badgeParent:e}),this.fx=new Zv(e.parentElement,this.cam),this.ghosts=new Map,this.turns=new Map,this.origins=new Map,this.originViews=new Map,this.rulerViews=new Map,this.selectedId=null,this.selectedIds=new Set,this.hoveredId=null,this.builtScene=null,this.rect={left:0,top:0,width:1,height:1},this.el=t.parentElement,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(this.el),this.resize()}resize(){var e,n;const t=this.el.getBoundingClientRect();this.rect={left:t.left,top:t.top,width:t.width,height:t.height},!(t.width<1||t.height<1)&&(this.renderer.setSize(t.width,t.height,!1),this.cam.resize(t.width,t.height),(e=this.dice)==null||e.resize(t.width,t.height),(n=this.fx)==null||n.resize(this.rect))}lookAt(t,e){this.cam.camera.position.x=t,this.cam.camera.position.y=-e,this.cam.clamp()}unitsAt(t,e,n){const s=(t-this.rect.left)/this.rect.width*2-1,r=-((e-this.rect.top)/this.rect.height*2-1);return this.cam.toUnits(s,r,n)}ndcAt(t,e){return[(t-this.rect.left)/this.rect.width*2-1,-((e-this.rect.top)/this.rect.height*2-1)]}frame(t,e,{isGm:n=!0,self:s=""}={}){const r=Ee(t),a=yo(r);this.cam.bounds=a,this.map.update(r,a,this.library),this.grid.update(r,a);const o=__(t,{isGm:n}),l=n?null:ox(o,s),c=n?o:lx(o,this.fx.darkShown,s,l);this.reconcile(r,c);const f=Tt.tokens.layerGap,u={library:this.library,selected:!1,hovered:!1,z:0};for(let _=0;_<c.length;_++){const h=c[_],m=this.views.get(h.id);if(!m)continue;u.z=rv(h.layer,_,f),u.selected=this.selectedIds.has(h.id)||h.id===this.selectedId,u.hovered=h.id===this.hoveredId&&!this.ghosts.size;const M=this.ghosts.get(h.id),x=this.turns.get(h.id),b=x===void 0?h:{...h,facing:x};M?m.snap({...b,x:M.x,y:M.y},e,u):m.sync(b,e,u)}const d=this.syncDrags(c,e,r),p=this.displayTokens(c);this.overlay.sync(p,{camera:this.cam,rect:this.rect,selectedId:this.selectedId,dragging:this.ghosts.size>0,rulers:d}),this.renderer.render(this.scene,this.cam.camera);const g=p.map((_,h)=>this.ghosts.has(_.id)?c[h]:_).map(_=>_.light&&l&&!l.has(_.id)?{..._,light:!1}:_);this.fx.frame(r==null?void 0:r.fx,e,{isGm:n,bounds:a,tokens:g,scene:r}),this.dice.frame(e),this.dice.render(this.renderer)}syncDrags(t,e,n){const s=this.cam.pxPerUnit(this.rect.height),r=[];for(const[a,o]of this.origins){const l=t.find(_=>_.id===a);if(!l)continue;let c=this.originViews.get(a);c||(c=new Ss(this.scene),this.originViews.set(a,c)),c.snap({...l,x:o.x,y:o.y},e,{library:this.library,z:Yn.dragOrigin,selected:!1,hovered:!1,alpha:Tt.tokens.originAlpha,ringAlpha:Tt.tokens.originRingAlpha});const f=this.ghosts.get(a)||{x:l.x,y:l.y};let u=this.rulerViews.get(a);u||(u=new bv(this.scene),this.rulerViews.set(a,u)),u.set(o.x,o.y,f.x,f.y,s);const d=n==null?void 0:n.grid,[p,g]=el(f.x,f.y,d,l.size);r.push({id:a,ax:o.x,ay:o.y,bx:f.x,by:f.y,text:R_(o.x,o.y,p,g,d).text})}for(const[a,o]of this.originViews)this.origins.has(a)||(o.dispose(),this.originViews.delete(a));for(const[a,o]of this.rulerViews)this.origins.has(a)||(o.dispose(),this.rulerViews.delete(a));return r}displayTokens(t){return t.map(e=>{const n=this.turns.get(e.id),s=n===void 0?e:{...e,facing:n},r=this.ghosts.get(s.id);if(r)return{...s,x:r.x,y:r.y};const a=this.views.get(s.id);if(!(a!=null&&a.sliding))return s;const o=a.root.position;return{...s,x:o.x,y:au(o.y)}})}reconcile(t,e){const n=new Set;for(const s of e)n.add(s.id),this.views.has(s.id)||this.views.set(s.id,new Ss(this.scene));for(const[s,r]of this.views)n.has(s)||(r.dispose(),this.views.delete(s));if((t==null?void 0:t.id)!==this.builtScene){for(const[,s]of this.views)s.placed=!1;this.builtScene=(t==null?void 0:t.id)??null}}fit(t){const e=yo(Ee(t));this.cam.bounds=e,this.cam.frame(e)}dispose(){this.observer.disconnect();for(const[,t]of this.views)t.dispose();this.views.clear();for(const[,t]of this.originViews)t.dispose();this.originViews.clear();for(const[,t]of this.rulerViews)t.dispose();this.rulerViews.clear(),this.overlay.clear(),this.map.dispose(),this.grid.dispose(),this.renderer.dispose()}}function ur(i){return(i.size||1)/2+(i.lightRange??2)}function ox(i,t){const e=i.filter(a=>a.light),n=i.filter(a=>a.owner&&a.owner===t),s=new Set,r=[];for(const a of e){const o=a.owner&&a.owner===t,l=n.some(c=>Math.hypot(c.x-a.x,c.y-a.y)-(c.size||1)/2<=ur(a));(o||l)&&(s.add(a.id),r.push(a))}for(;r.length;){const a=r.pop();for(const o of e)s.has(o.id)||Math.hypot(a.x-o.x,a.y-o.y)<=ur(a)+ur(o)&&(s.add(o.id),r.push(o))}return s}const Bc=.85;function lx(i,t,e,n){if(t<Bc)return i;const s=i.filter(r=>r.light&&n.has(r.id));return i.filter(r=>{if(r.owner&&r.owner===e)return!0;let a=0;for(const o of s){const l=ur(o),c=Math.hypot(r.x-o.x,r.y-o.y)-(r.size||1)/2;if(a=Math.max(a,c<=l?1:Math.max(0,1-(c-l)/.6)),a>=1)break}return t*(1-a)<Bc})}const Ii=new Dt,cx=4,hx=15,ux=9;class dx{constructor(t,{getState:e,canGrab:n,onSelect:s,onDragMove:r,onDropGroup:a,onContext:o,onTurn:l,onPing:c,isSelected:f=()=>!1,groupOf:u=_=>[_],onToggle:d,locked:p,hasSelection:g=()=>!1}){this.stage=t,this.locked=p,this.getState=e,this.canGrab=n||(()=>!0),this.onSelect=s,this.onDragMove=r,this.onContext=o,this.onTurn=l,this.onDropGroup=a,this.onPing=c,this.isSelected=f,this.groupOf=u,this.onToggle=d,this.hasSelection=g,this.pressAt={x:0,y:0},this.group=[],this.narrowTo=null,this.mode=null,this.pointerId=null,this.dragId=null,this.grabDx=0,this.grabDy=0,this.last={x:0,y:0},this.start={x:0,y:0},this.moved=!1,this.pendingDeselect=!1;const _=t.renderer.domElement;this.el=_,_.addEventListener("pointerdown",h=>this.down(h)),_.addEventListener("pointermove",h=>this.move(h)),_.addEventListener("pointerup",h=>this.up(h)),_.addEventListener("pointercancel",h=>this.up(h)),_.addEventListener("wheel",h=>this.wheel(h),{passive:!1}),_.addEventListener("pointerleave",()=>this.hover(null)),_.addEventListener("contextmenu",h=>this.context(h))}cancel(){var t,e;if(this.pointerId!==null){(e=(t=this.el).releasePointerCapture)==null||e.call(t,this.pointerId),this.pointerId=null,this.dragId&&this.stage.turns.delete(this.dragId);for(const n of this.group)this.stage.ghosts.delete(n.id),this.stage.origins.delete(n.id);this.originAt=null,this.dragId=null,this.group=[],this.narrowTo=null,this.pendingDeselect=!1,this.mode=null}}down(t){var a,o,l,c,f;if(this.pointerId!==null||(a=this.locked)!=null&&a.call(this))return;this.el.setPointerCapture(t.pointerId),this.pointerId=t.pointerId,this.moved=!1,this.start.x=t.clientX,this.start.y=t.clientY,this.last.x=t.clientX,this.last.y=t.clientY;const e=this.stage.unitsAt(t.clientX,t.clientY,Ii);if(t.button===0&&t.altKey){t.preventDefault(),this.mode="ping",(o=this.onPing)==null||o.call(this,e.x,e.y,t.shiftKey);return}if(t.button===0&&t.shiftKey){const u=Ui(this.getState(),e.x,e.y,{isGm:!0});if(u&&this.canGrab(u)){this.mode="toggle",(l=this.onToggle)==null||l.call(this,u.id);return}}if(t.button===1||t.shiftKey){this.mode="pan";return}if(t.button===2)return;const n=this.arrowAt(e);if(n){this.mode="turn",this.dragId=n.id,(c=this.onSelect)==null||c.call(this,n.id),this.stage.turns.set(n.id,n.facing);return}const s=Ui(this.getState(),e.x,e.y,{isGm:!0}),r=s&&this.stage.views.has(s.id)?s:null;if(r&&this.canGrab(r)){this.mode="drag",this.dragId=r.id,this.grabDx=r.x-e.x,this.grabDy=r.y-e.y,this.isSelected(r.id)?this.narrowTo=r.id:(f=this.onSelect)==null||f.call(this,r.id);const u=this.getState(),d=u.scenes[u.activeScene];this.group=this.groupOf(r.id).map(p=>d==null?void 0:d.tokens[p]).filter(p=>p&&this.canGrab(p)).map(p=>({id:p.id,x:p.x,y:p.y})),this.originAt=!0;for(const p of this.group)this.stage.ghosts.set(p.id,{x:p.x,y:p.y})}else this.mode="pan",r||(this.pendingDeselect=!0,this.pressAt.x=e.x,this.pressAt.y=e.y)}move(t){var s,r;if(this.pointerId===null){const a=this.stage.unitsAt(t.clientX,t.clientY,Ii),o=this.arrowAt(a);this.hover((o==null?void 0:o.id)??((s=Ui(this.getState(),a.x,a.y,{isGm:!0}))==null?void 0:s.id)??null,!!o);return}if(t.pointerId!==this.pointerId)return;const e=t.clientX-this.last.x,n=t.clientY-this.last.y;if(this.last.x=t.clientX,this.last.y=t.clientY,this.moved||(this.moved=Math.hypot(t.clientX-this.start.x,t.clientY-this.start.y)>cx),this.mode==="pan"){const a=this.stage.cam.viewUnits/Math.max(1,this.stage.rect.height);this.stage.cam.panBy(-e*a,n*a);return}if(this.mode==="turn"&&this.dragId){const a=this.tokenById(this.dragId);if(!a)return;const o=this.stage.unitsAt(t.clientX,t.clientY,Ii),l=Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI,c=t.altKey?1:hx,f=(Math.round(l/c)*c%360+360)%360;this.stage.turns.set(this.dragId,f*Math.PI/180);return}if(this.mode==="drag"&&this.dragId){const a=this.stage.unitsAt(t.clientX,t.clientY,Ii),o=this.group.find(d=>d.id===this.dragId);if(!o)return;const l=a.x+this.grabDx,c=a.y+this.grabDy,f=l-o.x,u=c-o.y;if(this.originAt){for(const d of this.group)this.stage.origins.set(d.id,{x:d.x,y:d.y});this.originAt=null}for(const d of this.group)this.stage.ghosts.set(d.id,{x:d.x+f,y:d.y+u});(r=this.onDragMove)==null||r.call(this,this.dragId,l,c)}}hover(t,e=!1){const n=e?"crosshair":t?"grab":"";this.stage.hoveredId===t&&this.el.style.cursor===n||(this.stage.hoveredId=t,this.el.style.cursor=n)}tokenById(t){var n;const e=this.getState();return((n=e.scenes[e.activeScene])==null?void 0:n.tokens[t])||null}arrowAt(t){const e=this.getState(),n=e.scenes[e.activeScene];if(!n)return null;const s=Tt.tokens.arrow,r=ux/this.stage.cam.pxPerUnit(Math.max(1,this.stage.rect.height));for(let a=n.tokenOrder.length-1;a>=0;a--){const o=n.tokens[n.tokenOrder[a]];if(!o||typeof o.facing!="number"||!this.canGrab(o))continue;const l=Math.max(.05,o.size),c=l*s.length,f=l/2+l*s.gap,u=t.x-o.x,d=t.y-o.y,p=u*Math.cos(o.facing)+d*Math.sin(o.facing),g=-u*Math.sin(o.facing)+d*Math.cos(o.facing),_=Math.max(l/2,f-r);if(p>=_&&p<=f+c+r&&Math.abs(g)<=c*.46+r)return o}return null}up(t){var n,s,r,a,o,l,c,f;if(t.pointerId!==this.pointerId)return;if((s=(n=this.el).releasePointerCapture)==null||s.call(n,t.pointerId),this.pointerId=null,this.mode==="turn"&&this.dragId){const u=this.stage.turns.get(this.dragId);this.stage.turns.delete(this.dragId),this.moved&&typeof u=="number"&&((r=this.onTurn)==null||r.call(this,this.dragId,u)),this.dragId=null}else if(this.mode==="drag"&&this.dragId){const u=this.group.map(d=>({id:d.id,...this.stage.ghosts.get(d.id)}));for(const d of this.group)this.stage.ghosts.delete(d.id),this.stage.origins.delete(d.id);this.originAt=null,this.moved?(a=this.onDropGroup)==null||a.call(this,u.filter(d=>Number.isFinite(d.x))):this.narrowTo&&((o=this.onSelect)==null||o.call(this,this.narrowTo)),this.dragId=null,this.group=[],this.narrowTo=null}else this.pendingDeselect&&!this.moved&&(this.hasSelection()?(l=this.onSelect)==null||l.call(this,null):(c=this.onPing)==null||c.call(this,this.pressAt.x,this.pressAt.y,!1));this.pendingDeselect=!1,this.mode=null;const e=this.stage.unitsAt(t.clientX,t.clientY,Ii);this.hover(((f=Ui(this.getState(),e.x,e.y,{isGm:!0}))==null?void 0:f.id)??null)}wheel(t){var r;if(t.preventDefault(),(r=this.locked)!=null&&r.call(this)||!t.deltaY)return;const[e,n]=this.stage.ndcAt(t.clientX,t.clientY),s=Tt.camera.zoomStep;this.stage.cam.zoomAt(t.deltaY>0?s:1/s,e,n)}context(t){var s;t.preventDefault();const e=this.stage.unitsAt(t.clientX,t.clientY,Ii),n=Ui(this.getState(),e.x,e.y,{isGm:!0});(s=this.onContext)==null||s.call(this,n,t)}}function w(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s==="html"?n.innerHTML=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="dataset"?Object.assign(n.dataset,r):n.setAttribute(s,r===!0?"":r));for(const s of e.flat())s==null||s===!1||n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function he(i,t,e,n){return e.id=i,w("div",{class:"field"},w("label",{for:i,text:t}),e,n?w("span",{class:"hint",text:n}):null)}function ue(i,t){if(document.activeElement===i)return;const e=String(t);i.value!==e&&(i.value=e)}function Sa(i,t){document.activeElement!==i&&i.checked!==!!t&&(i.checked=!!t)}const is=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`,wo=i=>parseInt(String(i).replace("#",""),16)&16777215,fx={square:"Square","hex-pointy":"Hex — pointy top","hex-flat":"Hex — flat top",none:"No grid"};class du{constructor({onCommand:t,onImportMap:e,onImportToken:n,onAddBlank:s,onFit:r,onPickMap:a,onDetect:o,onClose:l}){this.onCommand=t,this.onClose=l,this.els={},this.els.library=w("select",{onchange:()=>{var d;const u=(d=this.library)==null?void 0:d[this.els.library.selectedIndex-1];this.els.library.selectedIndex=0,u&&a(u)}},w("option",{text:"Map pack…"})),this.els.libraryField=he("g-lib","Library",this.els.library),this.els.libraryField.hidden=!0;const c=w("input",{type:"file",accept:"image/*",class:"file",onchange:u=>{var p;const d=(p=u.target.files)==null?void 0:p[0];u.target.value="",d&&e(d)}}),f=w("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:u=>{const d=[...u.target.files||[]];u.target.value="",d.length&&n(d)}});this.els.kind=w("select",{onchange:()=>this.pushGrid({kind:this.els.kind.value})},...Kh.map(u=>w("option",{value:u,text:fx[u]}))),this.els.unitPx=w("input",{type:"number",min:"16",max:"1024",step:"1",oninput:()=>this.pushGrid({unitPx:er(this.els.unitPx.value,16,1024,Tt.grid.unitPx)})}),this.els.ox=w("input",{type:"number",step:"1",oninput:()=>this.pushGrid({ox:er(this.els.ox.value,-4096,4096,0)})}),this.els.oy=w("input",{type:"number",step:"1",oninput:()=>this.pushGrid({oy:er(this.els.oy.value,-4096,4096,0)})}),this.els.color=w("input",{type:"color",oninput:()=>this.pushGrid({color:wo(this.els.color.value)})}),this.els.opacity=w("input",{type:"range",min:"0",max:"1",step:"0.02",oninput:()=>this.pushGrid({opacity:+this.els.opacity.value})}),this.els.unitLabel=w("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"sq",oninput:()=>this.pushGrid({unitLabel:this.els.unitLabel.value.slice(0,8)})}),this.els.distanceLabel=w("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"ft",oninput:()=>this.pushGrid({distanceLabel:this.els.distanceLabel.value.slice(0,8)})}),this.els.measure=w("select",{onchange:()=>this.pushGrid({measure:this.els.measure.value})},w("option",{value:"chebyshev",text:"Diagonal = 1 (5e)"}),w("option",{value:"euclid",text:"True distance"}),w("option",{value:"alternating",text:"Diagonal 1-2-1"})),this.els.snap=w("select",{id:"g-snap",onchange:()=>this.pushGrid({snap:this.els.snap.value})},w("option",{value:"soft",text:"Soft — pulls when close"}),w("option",{value:"grid",text:"Grid — always on a square"}),w("option",{value:"off",text:"Off — anywhere at all"})),this.els.magnet=w("input",{type:"range",min:"0.02",max:"0.25",step:"0.01",id:"g-magnet",oninput:()=>this.pushGrid({magnet:+this.els.magnet.value})}),this.els.feet=w("input",{type:"number",min:"1",max:"1000",step:"1",oninput:()=>this.pushGrid({perUnit:er(this.els.feet.value,.01,1e5,5)})}),this.els.mapNote=w("p",{class:"note"}),this.root=w("aside",{class:"panel flyout",id:"toolbar",hidden:!0},w("button",{type:"button",class:"ghost close",title:"Close (Esc)","aria-label":"Close",text:"×",onclick:()=>l==null?void 0:l()}),w("div",{class:"tool-sections"},w("section",{dataset:{tool:"map"}},w("h2",{text:"Map"}),this.els.libraryField,w("div",{class:"row"},w("button",{type:"button",class:"primary",text:"Load map…",onclick:()=>c.click()}),w("button",{type:"button",class:"ghost",text:"Fit",title:"Frame the whole map",onclick:r}),w("button",{type:"button",class:"ghost",text:"Detect grid",title:"Measure the square size from the image itself",onclick:o})),c,this.els.mapNote),w("section",{dataset:{tool:"grid"}},w("h2",{text:"Grid"}),he("g-kind","Type",this.els.kind),he("g-unit","Pixels per square",this.els.unitPx,"Read from the filename when a map pack states it, e.g. (33x17)."),w("div",{class:"pair"},he("g-ox","Offset X",this.els.ox),he("g-oy","Offset Y",this.els.oy)),w("div",{class:"pair"},he("g-color","Line",this.els.color),he("g-op","Opacity",this.els.opacity)),he("g-snap","Snapping",this.els.snap),he("g-magnet","Pull",this.els.magnet,"How close a token has to be before the grid takes it."),w("details",{class:"more"},w("summary",{text:"Distance & measuring"}),w("div",{class:"pair"},he("g-per","Distance per cell",this.els.feet),he("g-measure","Measuring",this.els.measure)),w("div",{class:"pair"},he("g-unit-label","Cell called",this.els.unitLabel),he("g-dist-label","Distance called",this.els.distanceLabel)))),w("section",{dataset:{tool:"tokens"}},w("h2",{text:"Tokens"}),w("div",{class:"row"},w("button",{type:"button",class:"primary",text:"Add from file…",onclick:()=>f.click()}),w("button",{type:"button",class:"ghost",text:"Blank",title:"A plain coloured disc",onclick:s})),f,w("p",{class:"note",text:"Drag to move. Shift-drag or middle-drag to pan. Scroll to zoom."}))))}addSection(t){this.root.querySelector(".tool-sections").append(t),t.hidden=this.root.dataset.open!==t.dataset.tool}show(t){this.escBound||(this.root.addEventListener("keydown",e=>{var n;e.key==="Escape"&&(e.stopPropagation(),(n=this.onClose)==null||n.call(this))}),this.escBound=!0),this.root.hidden=!t,this.root.dataset.open=t||"";for(const e of this.root.querySelectorAll("section[data-tool]"))e.hidden=t!=="all"&&e.dataset.tool!==t}setLibrary(t){this.library=t,this.els.libraryField.hidden=!t.length,t.length&&this.els.library.replaceChildren(w("option",{text:`Map pack — ${t.length} maps`}),...t.map(e=>w("option",{text:`${e.name.replace(/\.[a-z0-9]+$/i,"")}  ·  ${(e.size/1048576).toFixed(1)}MB`})))}pushGrid(t){this.sceneId&&this.onCommand(["scene.grid",this.sceneId,t])}refresh(t){const e=t.activeScene?t.scenes[t.activeScene]:null;if(this.sceneId=(e==null?void 0:e.id)||null,this.root.classList.toggle("no-scene",!e),!e)return;const n=e.grid;ue(this.els.kind,n.kind),ue(this.els.unitPx,n.unitPx),ue(this.els.ox,n.ox),ue(this.els.oy,n.oy),ue(this.els.color,is(n.color)),ue(this.els.opacity,n.opacity),ue(this.els.feet,n.perUnit),ue(this.els.unitLabel,n.unitLabel),ue(this.els.distanceLabel,n.distanceLabel),ue(this.els.measure,n.measure),ue(this.els.snap,n.snap),ue(this.els.magnet,n.magnet),this.els.measure.disabled=Pr(n.kind),this.els.snap.disabled=n.kind==="none",this.els.magnet.disabled=n.kind==="none"||n.snap!=="soft";const s=e.map?t.assets[e.map]:null;if(s){const r=(e.artW/(n.unitPx||1)).toFixed(1),a=(e.artH/(n.unitPx||1)).toFixed(1);this.els.mapNote.textContent=`${s.name} — ${e.artW}×${e.artH}px, about ${r}×${a} squares`+(s.scaled?` · sent as ${Math.round(s.size/1024)}KB`:"")}else this.els.mapNote.textContent="No map yet. The grid still works on a blank table."}static gridGuessFor(t,e,n){const s=L_(t,e,n);return s?{unitPx:s.unitPx,ox:s.ox,oy:s.oy,cols:s.cols,rows:s.rows}:null}}function er(i,t,e,n){const s=Number(i);return Number.isFinite(s)?Math.min(e,Math.max(t,s)):n}const px=i=>((i*180/Math.PI+90)%360+360)%360,zc=i=>(i-90)%360*Math.PI/180,ba=15;class mx{constructor({onChange:t,label:e="Facing"}){this.onChange=t,this.degrees=0,this.enabled=!1,this.needle=document.createElement("i"),this.needle.className="dial-needle",this.readout=document.createElement("span"),this.readout.className="dial-readout",this.root=document.createElement("div"),this.root.className="dial",this.root.tabIndex=0,this.root.setAttribute("role","slider"),this.root.setAttribute("aria-label",e),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","359"),this.root.append(this.needle,this.readout),this.root.addEventListener("pointerdown",n=>this.begin(n)),this.root.addEventListener("keydown",n=>this.key(n))}begin(t){if(!this.enabled)return;t.preventDefault(),this.root.focus(),this.root.setPointerCapture(t.pointerId);const e=s=>this.aim(s),n=()=>{this.root.removeEventListener("pointermove",e),this.root.removeEventListener("pointerup",n),this.root.removeEventListener("pointercancel",n)};this.root.addEventListener("pointermove",e),this.root.addEventListener("pointerup",n),this.root.addEventListener("pointercancel",n),this.aim(t)}aim(t){const e=this.root.getBoundingClientRect(),n=t.clientX-(e.left+e.width/2),s=t.clientY-(e.top+e.height/2),r=Math.atan2(n,-s)*180/Math.PI;this.set(Math.round(r/ba)*ba,!0)}key(t){if(!this.enabled)return;const e=t.shiftKey?45:ba,s={ArrowRight:e,ArrowUp:e,ArrowLeft:-e,ArrowDown:-e,Home:-this.degrees,End:180-this.degrees}[t.key];s!==void 0&&(t.preventDefault(),t.stopPropagation(),this.set(this.degrees+s,!0))}set(t,e=!1){var s;const n=(Math.round(t)%360+360)%360;n===this.degrees&&!e||(this.degrees=n,this.paint(),e&&((s=this.onChange)==null||s.call(this,n)))}setEnabled(t){this.enabled=t,this.root.classList.toggle("off",!t),this.root.setAttribute("aria-disabled",t?"false":"true"),this.root.tabIndex=t?0:-1,this.paint()}paint(){this.needle.style.transform=`rotate(${this.degrees}deg)`,this.readout.textContent=this.enabled?`${this.degrees}°`:"—",this.root.setAttribute("aria-valuenow",String(this.degrees)),this.root.setAttribute("aria-valuetext",this.enabled?`${this.degrees} degrees`:"no facing")}}const gx={bg:"Background",token:"Tokens",gm:"GM only"};class _x{constructor({onCommand:t,onDelete:e,onSizeCommitted:n}){this.onCommand=t,this.id=null,this.els={};const s=r=>{this.id&&this.onCommand(["tok.patch",this.id,r])};this.els.name=w("input",{type:"text",maxlength:"48",placeholder:"Unnamed",oninput:()=>s({name:this.els.name.value.slice(0,48)})}),this.els.size=w("input",{type:"number",min:String(Tt.tokens.minSize),max:String(Tt.tokens.maxSize),step:"0.25",oninput:()=>s({size:xx(+this.els.size.value,Tt.tokens.minSize,Tt.tokens.maxSize)}),onchange:()=>{this.id&&(n==null||n(this.id))}}),this.els.border=w("input",{type:"color",oninput:()=>{this.player||s({border:wo(this.els.border.value)})},onchange:()=>{this.player&&this.player.onColor(wo(this.els.border.value))}}),this.els.borderField=he("t-border","Border",this.els.border),this.els.shape=w("select",{onchange:()=>s({shape:this.els.shape.value})},w("option",{value:"circle",text:"Circle"}),w("option",{value:"square",text:"Square"})),this.els.layer=w("select",{onchange:()=>s({layer:this.els.layer.value})},...xo.map(r=>w("option",{value:r,text:gx[r]}))),this.els.hp=w("input",{type:"number",min:"0",step:"1",oninput:()=>s({hp:Math.max(0,Math.round(+this.els.hp.value||0))})}),this.els.maxHp=w("input",{type:"number",min:"0",step:"1",oninput:()=>s({maxHp:Math.max(0,Math.round(+this.els.maxHp.value||0))})}),this.els.rot=w("input",{type:"range",min:"0",max:"359",step:"1",oninput:()=>s({rot:+this.els.rot.value*Math.PI/180})}),this.els.dial=new mx({onChange:r=>s({facing:zc(r)})}),this.els.facingOn=w("input",{type:"checkbox",id:"t-facing",onchange:()=>{const r=this.els.facingOn.checked;this.els.dial.setEnabled(r),s({facing:r?zc(this.els.dial.degrees):null})}}),this.els.lightOn=w("input",{type:"checkbox",id:"t-light",onchange:()=>{this.els.lightRange.disabled=!this.els.lightOn.checked,s({light:this.els.lightOn.checked})}}),this.els.lightRange=w("input",{type:"number",id:"t-light-range",min:"1",max:String(xr),step:"1","aria-label":"Light reach",oninput:()=>{const r=Math.round(+this.els.lightRange.value);r>=1&&s({lightRange:Math.min(xr,r)})}}),this.els.lightUnit=w("span",{class:"hint"}),this.els.hidden=w("input",{type:"checkbox",onchange:()=>s({hidden:this.els.hidden.checked})}),this.els.where=w("p",{class:"note"}),this.root=w("aside",{class:"panel",id:"inspector"},w("div",{class:"panel-head"},w("h1",{text:"Token"})),w("div",{class:"empty",text:"Nothing selected. Click a token; shift-click for more."}),w("div",{class:"multi"},this.els.count=w("p",{class:"count"}),w("p",{class:"note",text:"Drag any of them to move them together, or nudge them with the arrow keys. Shift-click to add or remove one."}),w("button",{type:"button",class:"danger",text:"Delete selected",onclick:()=>e()})),w("div",{class:"body"},he("t-name","Name",this.els.name),w("div",{class:"pair"},he("t-size","Size (squares)",this.els.size),this.els.borderField),w("div",{class:"pair gm-only"},he("t-shape","Shape",this.els.shape),he("t-layer","Layer",this.els.layer)),w("div",{class:"pair gm-only"},he("t-hp","HP",this.els.hp),he("t-maxhp","Max HP",this.els.maxHp)),w("div",{class:"facing-row"},this.els.dial.root,w("div",{class:"col"},w("label",{class:"check",for:"t-facing"},this.els.facingOn," Facing"),w("span",{class:"hint",text:"Which way it is looking. Drag the dial, or use the arrow keys."}))),w("div",{class:"light-row"},w("label",{class:"check",for:"t-light"},this.els.lightOn," Light"),this.els.lightRange,this.els.lightUnit),he("t-rot","Artwork rotation",this.els.rot),w("label",{class:"check gm-only",for:"t-hidden"},this.els.hidden," Hidden from players"),this.els.where,w("div",{class:"row gm-only"},w("button",{type:"button",class:"ghost",text:"To front",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!0])}),w("button",{type:"button",class:"ghost",text:"To back",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!1])})),w("button",{type:"button",class:"danger",text:"Delete token",onclick:()=>this.id&&e()}))),this.els.hidden.id="t-hidden",this.player=null}setPlayer(t){this.player=t,this.root.classList.toggle("player",!!t),this.els.borderField.querySelector("label").textContent=t?"Your colour":"Border"}refresh(t,e,n=e?1:0){const s=t.activeScene?t.scenes[t.activeScene]:null,r=e&&(s==null?void 0:s.tokens[e])||null;this.id=(r==null?void 0:r.id)||null,this.count=n;const a=n>1;if(this.root.classList.toggle("no-token",!r&&!a),this.root.classList.toggle("many",a),a&&(this.els.count.textContent=`${n} tokens selected`),!r||a)return;ue(this.els.name,r.name),ue(this.els.size,Ea(r.size)),ue(this.els.border,is(r.border)),ue(this.els.shape,r.shape),ue(this.els.layer,r.layer),ue(this.els.hp,r.hp),ue(this.els.maxHp,r.maxHp),ue(this.els.rot,Math.round((r.rot||0)*180/Math.PI)%360),Sa(this.els.hidden,r.hidden),Sa(this.els.lightOn,!!r.light),ue(this.els.lightRange,r.lightRange??2),this.els.lightRange.disabled=!r.light,this.els.lightUnit.textContent=`${s.grid.kind.startsWith("hex")?"hexes":"squares"} of light round it`;const o=typeof r.facing=="number"&&Number.isFinite(r.facing);Sa(this.els.facingOn,o),this.els.dial.setEnabled(o),document.activeElement===this.els.dial.root&&this.id===this.dialFor||this.els.dial.set(o?px(r.facing):0),this.dialFor=this.id;const c=s.grid;this.els.where.textContent=`At ${vx(r.x,r.y)} · ${Ea(r.x)}, ${Ea(r.y)} units`+(c.kind==="none"?"":` · ${c.perUnit}${c.distanceLabel} per ${c.unitLabel}`)}}function vx(i,t){const e=Math.floor(i),n=Math.floor(t);return`${e<0?`-${Hc(-e-1)}`:Hc(e)}${n+1}`}function Hc(i){let t="",e=i;do t=String.fromCharCode(65+e%26)+t,e=Math.floor(e/26)-1;while(e>=0);return t}function xx(i,t,e){return Number.isFinite(i)?Math.min(e,Math.max(t,i)):t}function Ea(i){return Math.round(i*100)/100}const yx=new Set(["INPUT","SELECT","TEXTAREA","BUTTON"]),Mx=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown","Home","End"]);function Sx(){const i=document.activeElement;return i?yx.has(i.tagName)||i.isContentEditable:!1}class bx{constructor(t={},e=null){this.actions=new Map(Object.entries(t)),this.held=new Set,this.onDown=n=>{Sx()||(n.repeat||this.held.add(n.code),(e!=null&&e(n.code,n)||Mx.has(n.code))&&n.preventDefault())},this.onUp=n=>this.held.delete(n.code),this.onBlur=()=>this.held.clear(),window.addEventListener("keydown",this.onDown),window.addEventListener("keyup",this.onUp),window.addEventListener("blur",this.onBlur)}action(t){const e=this.actions.get(t);if(!e)return!1;for(const n of e)if(this.held.has(n))return!0;return!1}axis(t,e){return(this.action(e)?1:0)-(this.action(t)?1:0)}vector(t,e,n,s,r={x:0,y:0}){r.x=this.axis(t,e),r.y=this.axis(n,s);const a=Math.hypot(r.x,r.y);return a>1&&(r.x/=a,r.y/=a),r}dispose(){window.removeEventListener("keydown",this.onDown),window.removeEventListener("keyup",this.onUp),window.removeEventListener("blur",this.onBlur),this.held.clear()}}const To=3,vn={name:32,members:16,peerId:64,need:256,req:32,upload:8*1024*1024},gs=[14263361,6003669,12605771,10189528,6535316,14186655,5224624,11909199],fu=i=>typeof i=="string";function Dr(i,t="Player"){return(fu(i)?i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim():"").slice(0,vn.name)||t}function Ex(i){return fu(i)&&i.length>0&&i.length<=vn.peerId}const wx=(i,t)=>({t:"hello",p:To,name:Dr(i),gm:t?1:0});function Tx(i){return!i||i.t!=="hello"?null:{protocol:Number.isInteger(i.p)?i.p:-1,name:Dr(i.name),gm:i.gm===1}}function Ax(i){return{t:"roster",r:i.slice(0,vn.members).map(t=>[t.peerId,t.name,t.role===Je?1:0,t.color])}}function Rx(i){return!i||i.t!=="roster"||!Array.isArray(i.r)?null:i.r.slice(0,vn.members).filter(t=>Array.isArray(t)&&Ex(t[0])).map(([t,e,n,s])=>({peerId:t,name:Dr(e),role:n===1?Je:$n,color:Number.isInteger(s)?s&16777215:gs[0]}))}const Cx=["full","protocol"];function Px(i){return!i||i.t!=="nope"?null:Cx.includes(i.why)?i.why:"full"}function Lx(i){if(!i||i.t!=="doc")return null;const t=i.s;return!t||typeof t!="object"||Array.isArray(t)||!Number.isInteger(t.seq)||t.seq<0||!t.scenes||typeof t.scenes!="object"?null:t}function Ix(i){return!i||i.t!=="op"||!Number.isInteger(i.n)||i.n<1||!Array.isArray(i.c)||typeof i.c[0]!="string"?null:{seq:i.n,cmd:i.c}}const Dx=/^[0-9a-f]{64}$/,Sr=i=>typeof i=="string"&&Dx.test(i);function Ux(i){return!i||i.t!=="need"||!Array.isArray(i.h)?[]:[...new Set(i.h.slice(0,vn.need).filter(Sr))]}function Gc(i){return Array.isArray(i)?i.slice(0,vn.req).filter(t=>Array.isArray(t)&&typeof t[0]=="string"):[]}const Vc=()=>lu(()=>import("./room-D300m2Q-.js"),[],import.meta.url);class bs{constructor(t,e={}){this.role=t,this.handlers=e,this.code="",this.name="",this.selfId=null,this.gmId=null,this.admitted=!1,this.link=null,this.members=new Map,this.pending=new Set,this.backlog=[],this.closed=!1,this.voice=null}get isGm(){return this.role===Je}roster(){return[...this.members.values()]}static async host(t,e,n=null){const s=await Vc(),r=new bs(Je,e);return r.open(s,n?s.normaliseCode(n):s.randomCode(),t),r.members.set(r.selfId,yr(r.selfId,r.name,{role:Je,color:gs[0]})),r.emitRoster(),r}static async join(t,e,n){const s=await Vc(),r=new bs($n,n);return r.open(s,s.normaliseCode(t),e),r}open(t,e,n){const s=Tt.multiplayer;this.code=e,this.name=Dr(n,this.isGm?"GM":"Player"),this.selfId=t.selfId,this.link=t.joinRoom({appId:s.appId,code:e,maxPeers:s.maxPlayers-1},{onPeerJoin:r=>this.peerJoined(r),onPeerLeave:r=>this.peerLeft(r),onMessage:(r,a)=>this.receive(r,a),onRelay:r=>{var a,o;return(o=(a=this.handlers).onRelay)==null?void 0:o.call(a,r)},onAsset:(r,a,o)=>{var l,c;this.entitled(o)&&((c=(l=this.handlers).onAsset)==null||c.call(l,r,a,o))},onPeerStream:(r,a,o)=>{var l;return(l=this.voice)==null?void 0:l.stream(r,a,o)},onAssetProgress:(r,a,o)=>{var l,c;this.entitled(o)&&((c=(l=this.handlers).onAssetProgress)==null||c.call(l,r,a,o))}})}listen(t){if(this.handlers=t,!!t.onMessage)for(const[e,n]of this.backlog.splice(0))t.onMessage(e,n)}entitled(t){return this.isGm?this.members.has(t)&&t!==this.selfId:t===this.gmId}leave(){var t;this.closed||(this.closed=!0,(t=this.link)==null||t.leave())}peerJoined(t){var e;this.pending.add(t),this.link.send(wx(this.name,this.isGm),t),(e=this.voice)==null||e.join(t)}peerLeft(t){var e,n,s,r,a;this.pending.delete(t),(e=this.voice)==null||e.leave(t),this.isGm?this.members.delete(t)&&this.emitRoster():t===this.gmId?(this.gmId=null,(s=(n=this.handlers).onGmLeft)==null||s.call(n)):this.members.delete(t)&&((a=(r=this.handlers).onRoster)==null||a.call(r,this.roster()))}receive(t,e){var n,s,r,a,o,l,c;if(!(this.closed||!t||typeof t.t!="string")){if(t.t==="hello")return this.onHello(Tx(t),e);if((t.t==="voice"||t.t==="music")&&this.members.has(e))return(n=this.voice)==null?void 0:n.message(t,e);if(this.entitled(e)){if(this.isGm||t.t!=="roster"&&t.t!=="nope"){this.handlers.onMessage?this.handlers.onMessage(t,e):this.backlog.push([t,e]);return}if(t.t==="roster"){const f=Rx(t);if(!f)return;this.members=new Map(f.map(u=>[u.peerId,u])),!this.admitted&&this.members.has(this.selfId)&&(this.admitted=!0,(r=(s=this.handlers).onAdmitted)==null||r.call(s)),(o=(a=this.handlers).onRoster)==null||o.call(a,this.roster())}else t.t==="nope"&&((c=(l=this.handlers).onRefused)==null||c.call(l,Px(t)),this.leave())}}}onHello(t,e){var n,s,r,a;if(!(!t||!this.pending.has(e))){if(this.pending.delete(e),this.isGm){if(t.gm)return;if(t.protocol!==To)return this.link.send({t:"nope",why:"protocol"},e);if(this.members.size>=Tt.multiplayer.maxPlayers)return this.link.send({t:"nope",why:"full"},e);const o=new Set(this.roster().map(c=>c.color)),l=gs.find(c=>!o.has(c))??gs[this.members.size%gs.length];this.members.set(e,yr(e,t.name,{role:$n,color:l})),this.emitRoster(),(s=(n=this.handlers).onSeated)==null||s.call(n,e);return}if(!(!t.gm||this.gmId)){if(t.protocol!==To)return(a=(r=this.handlers).onRefused)==null||a.call(r,"protocol"),this.leave();this.gmId=e}}}setColor(t,e){const n=this.members.get(t);!n||n.color===e||(this.members.set(t,{...n,color:e}),this.emitRoster())}emitRoster(){var t,e;this.link.send(Ax(this.roster())),(e=(t=this.handlers).onRoster)==null||e.call(t,this.roster())}}const pu="vtt.name",mu="vtt.recent",Nx=6,gu=8,Fx=14e3;class kx{constructor({onEnter:t,onResume:e,onOpenFile:n}){var r;this.onEnter=t,this.onResume=e,this.onOpenFile=n,this.lobby=null,this.hintTimer=0,this.els={},this.els.name=w("input",{id:"splash-name",maxlength:String(vn.name),autocomplete:"nickname",spellcheck:"false",placeholder:"What the table calls you",value:Bx()}),this.els.code=w("input",{id:"splash-code",class:"code-input",maxlength:String(gu),autocomplete:"off",spellcheck:"false",placeholder:"CODE","aria-label":"Invite code",value:Ox(),oninput:()=>{this.els.code.value=this.els.code.value.toUpperCase().replace(/\s+/g,"")},onkeydown:a=>{a.key==="Enter"&&this.join()}}),this.els.host=w("button",{class:"primary big",text:"Host a new table",onclick:()=>this.host()}),this.els.saved=w("ul",{class:"saved-tables","aria-label":"Saved tables"});const s=w("input",{type:"file",accept:".vtt,application/json",class:"file",onchange:a=>{var l;const o=(l=a.target.files)==null?void 0:l[0];a.target.value="",o&&this.openFile(o)}});if(this.els.openFile=w("button",{class:"ghost small",text:"Open a table file…",onclick:()=>s.click()}),this.els.fileInput=s,this.els.join=w("button",{class:"primary big",text:"Join",onclick:()=>this.join()}),this.els.recent=w("ul",{class:"saved-tables recent","aria-label":"Recently joined"}),this.els.status=w("p",{class:"splash-status",role:"status","aria-live":"polite"}),this.els.cancel=w("button",{class:"ghost",text:"Cancel",hidden:!0,onclick:()=>this.cancel()}),this.root=w("div",{id:"splash"},w("div",{class:"splash-card"},w("header",{},w("h1",{text:"Virtual Tabletop"}),w("p",{class:"tagline",text:"No server. The GM's browser is the table, and players connect straight to it."})),w("div",{class:"field"},w("label",{for:"splash-name",text:"Your name"}),this.els.name),w("div",{class:"splash-choices"},w("section",{},w("h2",{text:"Run a table"}),w("p",{text:"You're the GM. You get an invite code to hand to your players."}),this.els.host,this.els.saved,this.els.openFile,this.els.fileInput),w("section",{},w("h2",{text:"Join a table"}),w("p",{text:"Enter the invite code your GM gave you."}),w("div",{class:"join-row"},this.els.code,this.els.join),this.els.recent)),w("div",{class:"splash-foot"},this.els.status,this.els.cancel))),document.body.append(this.root),this.listSaved(),this.listRecent(),!window.isSecureContext||!((r=globalThis.crypto)!=null&&r.subtle)){for(const a of["host","join","code"])this.els[a].disabled=!0;this.setStatus("This page is not served securely (https), so the browser will not let it connect to other players. Open it over https — or on localhost — to host or join.","error")}(this.els.code.value?this.els.join:this.els.name).focus()}setStatus(t,e=""){this.els.status.textContent=t,this.els.status.dataset.kind=e}setBusy(t){for(const e of["name","code","host","join","openFile"])this.els[e].disabled=t;for(const e of this.root.querySelectorAll(".saved-tables button"))e.disabled=t;this.els.cancel.hidden=!t}async listSaved(){const t=await H_();this.els.saved.replaceChildren(...t.map(e=>{const n=w("button",{class:"ghost small del",text:"×",title:"Delete this saved table","aria-label":`Delete ${e.name}`,onclick:async()=>{if(!n.classList.contains("armed")){n.classList.add("armed"),n.textContent="Delete?",setTimeout(()=>{n.classList.remove("armed"),n.textContent="×"},3e3);return}await G_(e.id),this.listSaved()}});return w("li",{},w("div",{class:"what"},w("b",{text:e.name}),w("span",{text:`${Xc(e.savedAt)}${e.tokens?` · ${e.tokens} token${e.tokens===1?"":"s"}`:""}`})),w("button",{class:"primary small",text:"Resume",onclick:()=>this.resume(e.id)}),n)})),this.els.saved.hidden=!t.length}listRecent(){const t=Ao();this.els.recent.replaceChildren(...t.map(e=>w("li",{},w("div",{class:"what"},w("b",{text:e.gm?`${e.gm}'s table`:"A table"}),w("span",{text:`${e.code} · ${Xc(e.at)}`})),w("button",{class:"primary small",text:"Join","aria-label":`Join ${e.code}`,onclick:()=>{this.els.code.value=e.code,this.join()}}),w("button",{class:"ghost small del",text:"×",title:"Forget this table","aria-label":`Forget ${e.code}`,onclick:()=>{_u(Ao().filter(n=>n.code!==e.code)),this.listRecent()}})))),this.els.recent.hidden=!t.length}async resume(t){this.setBusy(!0),this.setStatus("Setting the table…");let e;try{e=await this.onResume(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not resume that table.","error")}this.host(e.code)}async openFile(t){this.setBusy(!0),this.setStatus(`Reading ${t.name}…`);let e;try{e=await this.onOpenFile(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not open that file.","error")}this.host(e.code)}async host(t=null){const e=this.els.name.value;Wc(e),this.setBusy(!0),this.setStatus("Opening a room…");try{this.lobby=await bs.host(e,void 0,t)}catch(n){return this.setBusy(!1),this.setStatus(`Could not open a room: ${n.message||n}`,"error")}this.enter()}async join(){const t=this.els.code.value.trim();if(!t)return this.els.code.focus(),this.setStatus("Type the invite code your GM gave you.","error");const e=this.els.name.value;Wc(e),this.setBusy(!0);const n=`Looking for the table at ${t.toUpperCase()}…`;this.setStatus(n),this.hintTimer=setTimeout(()=>{var s;this.setStatus((s=this.lobby)!=null&&s.gmId?`${n} The GM is there but hasn't seated you — the table may be full.`:`${n} Still nothing. Connecting can take 10–20 seconds; check the code matches exactly.`,"warn")},Fx);try{this.lobby=await bs.join(t,e,{onAdmitted:()=>this.enter(),onRefused:s=>this.refused(s),onRelay:s=>{var r;(r=this.lobby)!=null&&r.gmId||s.total&&!s.open&&this.setStatus(`No relay reachable (0 of ${s.total}). Your network may be blocking them.`,"error")}})}catch(s){this.reset(),this.setStatus(`Could not join: ${s.message||s}`,"error")}}refused(t){this.reset(),this.setStatus(t==="protocol"?"That table is running a different version. One of you needs to reload.":"That table is full.","error")}cancel(){this.reset(),this.setStatus("")}reset(){var t;clearTimeout(this.hintTimer),(t=this.lobby)==null||t.leave(),this.lobby=null,this.setBusy(!1)}enter(){clearTimeout(this.hintTimer);const t=this.lobby;t.isGm||zx(t),t.handlers={},this.root.remove(),this.onEnter(t)}}function Ox(){return(new URLSearchParams(location.search).get("join")||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,gu)}function Bx(){try{return localStorage.getItem(pu)||""}catch{return""}}function Wc(i){try{localStorage.setItem(pu,i.trim())}catch{}}function Ao(){try{const i=JSON.parse(localStorage.getItem(mu)||"[]");return Array.isArray(i)?i.filter(t=>t&&typeof t.code=="string"&&t.code):[]}catch{return[]}}function _u(i){try{localStorage.setItem(mu,JSON.stringify(i.slice(0,Nx)))}catch{}}function zx(i){var n;const t=String(i.code||"").toUpperCase();if(!t)return;const e=((n=i.roster().find(s=>s.peerId===i.gmId))==null?void 0:n.name)||"";_u([{code:t,gm:e,at:Date.now()},...Ao().filter(s=>s.code!==t)])}function Xc(i){const t=new Date(i),e=new Date,n=Math.round((new Date(e.toDateString())-new Date(t.toDateString()))/864e5),s=t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return n===0?`today, ${s}`:n===1?`yesterday, ${s}`:n<7?t.toLocaleDateString([],{weekday:"long"}):t.toLocaleDateString([],{day:"numeric",month:"short",year:n>300?"numeric":void 0})}async function Hx(i){var t;try{if((t=navigator.clipboard)!=null&&t.writeText)return await navigator.clipboard.writeText(i),!0}catch{}try{const e=document.createElement("textarea");e.value=i,e.setAttribute("readonly",""),e.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.appendChild(e),e.select();const n=document.execCommand("copy");return e.remove(),n}catch{return!1}}function Gx(i){if(!i)return;const t=document.createRange();t.selectNodeContents(i);const e=window.getSelection();e.removeAllRanges(),e.addRange(t)}const nr="Copy invite link";class Vx{constructor(t,{onArmLeave:e,onInvite:n}={}){this.lobby=t,this.onArmLeave=e,this.onInvite=n,this.copyTimer=0,this.els={},this.els.code=w("span",{class:"room-code",text:t.code}),this.els.copyCode=w("button",{class:"ghost",text:"Copy",title:"Copy the room code",onclick:()=>this.copy("code")}),this.els.copyLink=w("button",{class:"ghost",text:nr,onclick:()=>this.copy("link")}),this.els.list=w("ul",{class:"roster"}),this.els.note=w("p",{class:"note"}),this.root=w("aside",{class:"panel",id:"room"},w("div",{class:"panel-head"},w("h1",{text:"At the table"}),this.els.headCopy=w("button",{type:"button",class:"ghost invite-copy",text:nr,title:"Copy an invite to paste to your players",onclick:()=>this.copy("link",this.els.headCopy)})),this.els.list,this.els.note),this.invite=w("section",{class:"invite",dataset:{tool:"invite"}},w("h2",{text:"Invite players"}),w("div",{class:"room-code-row"},this.els.code,this.els.copyCode),this.els.copyLink,w("p",{class:"note",text:"Players type the code on the start screen, or open the link."})),this.setNote(t.isGm?"":"The GM sets up the table. Add and move your own tokens below."),this.render(t.roster())}setNote(t,e=""){this.els.note.hidden=!t,this.els.note.textContent=t,this.els.note.dataset.kind=e}render(t){const e=this.lobby.selfId;this.els.list.replaceChildren(...t.map(n=>w("li",{dataset:{peer:n.peerId}},w("i",{class:"seat",style:{background:is(n.color)}}),w("span",{class:"who",text:n.name}),w("span",{class:"mic",title:"In voice","aria-hidden":"true"}),w("em",{text:[n.role===Je?"GM":"",n.peerId===e?"you":""].filter(Boolean).join(" · ")}))))}setVoice(t){for(const e of this.els.list.children){const n=t.get(e.dataset.peer);e.classList.toggle("in-voice",!!(n!=null&&n.on)),e.classList.toggle("speaking",!!(n!=null&&n.on&&n.speaking)),e.classList.toggle("muted",!!(n!=null&&n.on&&(n.muted||n.silenced)))}}gmLeft(){this.setNote("The GM has left. The table is frozen until they come back.","warn")}inviteLink(){const t=new URL(location.href);return t.search="",t.hash="",t.searchParams.set("join",this.lobby.code),t.href}async copy(t,e=t==="code"?this.els.copyCode:this.els.copyLink){var s;await Hx(t==="code"?this.lobby.code:this.inviteLink())?e.textContent="Copied ✓":((s=this.onInvite)==null||s.call(this,!0),Gx(this.els.code),e.textContent="Press Ctrl+C"),clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>{this.els.copyCode.textContent="Copy",this.els.copyLink.textContent=nr,this.els.headCopy.textContent=nr},1800)}leave(){var e;if(!this.leaveArmed){this.leaveArmed=!0,(e=this.onArmLeave)==null||e.call(this,!0),clearTimeout(this.leaveTimer),this.leaveTimer=setTimeout(()=>{var n;this.leaveArmed=!1,(n=this.onArmLeave)==null||n.call(this,!1)},3500);return}this.lobby.leave();const t=new URL(location.href);t.searchParams.delete("join"),location.href=t.href}}class Wx{constructor({onImportToken:t,onAddBlank:e}){const n=w("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:s=>{const r=[...s.target.files||[]];s.target.value="",r.length&&t(r)}});this.root=w("aside",{class:"panel",id:"player"},w("div",{class:"panel-head"},w("h1",{text:"Your tokens"})),w("section",{},n,w("div",{class:"row"},w("button",{class:"primary",id:"p-add-token",text:"Add from image…",onclick:()=>n.click()}),w("button",{class:"ghost",id:"p-add-blank",text:"Blank",onclick:()=>e()})),w("p",{class:"note",text:"Add a picture of your character, or a blank disc. Your tokens wear your colour; drag one to move it, click it to name it, turn it, resize it or change your colour."})))}}const Xx=[2,4,6,8,10,12,20,100];class qx{constructor({onRoll:t,onError:e}){this.onRoll=t,this.onError=e,this.gm=!0,this.els={},this.els.expr=w("input",{class:"dice-expr",placeholder:"1d20+2 Kick",maxlength:"128",spellcheck:"false",autocomplete:"off","aria-label":"Dice to roll",onkeydown:n=>{n.key==="Enter"&&this.rollTyped()}}),this.els.hide=w("input",{type:"checkbox",id:"dice-hide"}),this.els.hideLabel=w("label",{class:"dice-hide",for:"dice-hide",title:"Roll in secret: players see that you rolled, not what"},this.els.hide," Hide"),this.root=w("div",{class:"dice-bar"},...Xx.map(n=>w("button",{type:"button",class:"die",text:n===100?"d%":`d${n}`,title:`Roll a d${n}`,dataset:{sides:String(n)},onclick:()=>this.onRoll(`1d${n}`)})),this.els.hideLabel,w("div",{class:"dice-typed"},this.els.expr,w("button",{type:"button",class:"primary roll",text:"Roll",onclick:()=>this.rollTyped()})))}get hidden(){return this.gm&&this.els.hide.checked}setGm(t){this.gm=t,this.els.hideLabel.hidden=!t,t||(this.els.hide.checked=!1)}rollTyped(){const t=this.els.expr.value.trim();if(!t)return this.els.expr.focus();try{Cr(t)}catch(e){this.onError(e.message);return}this.onRoll(t)}}class $x{constructor({onSay:t,onRoll:e,onError:n}){this.onSay=t,this.onRoll=e,this.onError=n,this.lastKey="",this.els={},this.els.feed=w("ol",{class:"feed","aria-live":"polite","aria-label":"Table talk"}),this.els.input=w("input",{class:"say",placeholder:"Say something…   /r 1d20+2 Kick to roll",maxlength:String(Ki.text),autocomplete:"off","aria-label":"Say something to the table",onkeydown:s=>{s.key==="Enter"?this.send():s.key==="Escape"&&this.els.input.blur()}}),this.root=w("div",{class:"talk"},this.els.feed,this.els.input)}send(){const t=this.els.input.value.trim();if(!t)return;const e=/^\/r(?:oll)?\s+(.+)$/i.exec(t);if(e){try{Cr(e[1])}catch(n){this.onError(n.message);return}this.onRoll(e[1])}else this.onSay(t);this.els.input.value=""}refresh(t,e){const n=t.slice(-60),s=n.map(o=>o.id).join(",")+Object.values(e).map(o=>o.peerId+o.name+o.color).join();if(s===this.lastKey)return;this.lastKey=s;const r=this.els.feed,a=r.scrollHeight-r.scrollTop-r.clientHeight<24;r.replaceChildren(...n.map((o,l)=>{const c=e[o.by],f=l===n.length-1,u=w("i",{class:"seat",style:{background:is((c==null?void 0:c.color)??9280918)}}),d=w("span",{class:"who",text:(c==null?void 0:c.name)??"Someone"},(c==null?void 0:c.role)===Je?w("em",{class:"gm",text:"GM"}):null);if(o.kind==="roll"){const p=o.dice.map(_=>w("span",{class:_.kept?"kept":"dropped",text:String(_.value),title:`d${_.sides}`})),g=o.mod?w("span",{class:"mod",text:o.mod>0?`+${o.mod}`:String(o.mod)}):null;return w("li",{class:`roll${f?" latest":""}`,title:`${o.expr}${o.note?` — ${o.note}`:""} — draws ${o.from+1}–${o.from+o.draws} of this table's dice`},u,d,o.hidden?w("span",{class:"secret-tag",text:"secret"}):null,o.note?w("span",{class:"note",text:o.note}):null,w("span",{class:"expr",text:o.expr}),w("span",{class:"faces"},...p,g),w("b",{class:"total",text:String(o.total)}))}return w("li",{class:`msg${f?" latest":""}`,title:o.at?new Date(o.at).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):""},u,d,w("span",{class:"text",text:o.text}))})),a&&(r.scrollTop=r.scrollHeight)}}const Yx={map:'<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z"/><path d="M9 4v13.5M15 6.5V20"/>',grid:'<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M9.2 3.5v17M14.8 3.5v17M3.5 9.2h17M3.5 14.8h17"/>',tokens:'<path d="M6 20.5h12"/><path d="M8 20.5c-.3-2.6.9-4.5 3.2-6.1L9.6 13c-1.3.8-2.9.7-3.6-.4-.6-.9-.3-1.9.6-2.6l3.6-3.1.6-3.1 2.1 1.9c3.6.8 5.6 4.3 5.1 8.8-.2 2.2-.7 4.1-1.5 6"/><circle cx="12.6" cy="8.9" r=".7" fill="currentColor" stroke="none"/>',undo:'<path d="M9 7 4.5 11.5 9 16"/><path d="M5 11.5h9a5 5 0 0 1 0 10h-2"/>',redo:'<path d="M15 7l4.5 4.5L15 16"/><path d="M19 11.5h-9a5 5 0 0 0 0 10h2"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><rect x="8.5" y="8.5" width="7" height="7" rx="1"/>',save:'<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M5 19.5h14"/>',fx:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="2.5"/>',scenes:'<path d="M12 3.5 21 8l-9 4.5L3 8z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16l9 4.5 9-4.5"/>',music:'<path d="M9 18V5.5l11-2v12.5"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',voice:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',invite:'<circle cx="10" cy="8.5" r="3.5"/><path d="M3.5 20c.8-3.6 3.3-5.5 6.5-5.5 1.6 0 3 .5 4.1 1.4"/><path d="M18 13v7M14.5 16.5h7"/>',leave:'<path d="M14 4H6.5A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20H14"/><path d="M11 12h10M17.5 8.5 21 12l-3.5 3.5"/>'};function jx(i){const t=document.createElement("span");return t.className="icon",t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Yx[i]}</svg>`,t}class Kx{constructor(t,{onOpen:e}){this.onOpen=e,this.open=null,this.buttons=new Map,this.root=w("nav",{id:"rail","aria-label":"Tools"},...t.map(n=>{if(n==="gap")return w("div",{class:"gap"});if(n==="sep")return w("div",{class:"sep",role:"separator"});const s=n.key?`${n.label} (${n.key})`:n.label,r=w("button",{type:"button",class:"tool",title:s,"aria-label":n.label,dataset:{tool:n.id},"aria-pressed":n.panel?"false":null,onclick:()=>n.panel?this.toggle(n.id):n.run()},jx(n.id));return this.buttons.set(n.id,r),r}))}toggle(t){this.show(this.open===t?null:t)}show(t){this.open=t;for(const[e,n]of this.buttons)n.hasAttribute("aria-pressed")&&n.setAttribute("aria-pressed",String(e===t));this.onOpen(t)}setVisible(t,e){const n=this.buttons.get(t);n&&(n.hidden=!e)}setArmed(t,e,n){const s=this.buttons.get(t);s&&(s.classList.toggle("armed",e),n&&(s.title=n))}setEnabled(t,e){const n=this.buttons.get(t);n&&(n.disabled=!e)}}const Zx={rain:"Rain",snow:"Snow",fog:"Fog",embers:"Embers"},wa={fade:["Fade","Fade to black","Fade back in"],swirl:["Swirl","Swirl to black","Swirl back in"],curtain:["Curtain","Lower the curtain","Raise the curtain"],drapes:["Drapes","Close the curtains","Open the curtains"],ink:["Ink","Ink to black","Ink back out"],burn:["Burn","Burn it away","Unburn"]};class Jx{constructor({onPlay:t,onAmbience:e}){this.onAmbience=e,this.els={};const n=(s,r,a)=>w("button",{type:"button",class:"ghost",text:r,title:a,dataset:{fx:s},onclick:()=>t(s)});this.els.weather=[null,...qh].map(s=>w("button",{type:"button",class:"ghost",text:s?Zx[s]:"None",dataset:{weather:s||"none"},"aria-pressed":"false",onclick:()=>e({weather:s})})),this.els.intensity=w("input",{type:"range",min:"0.1",max:"1",step:"0.05",id:"fx-intensity","aria-label":"Weather intensity",oninput:()=>e({intensity:+this.els.intensity.value})}),this.els.darkness=w("input",{type:"range",min:"0",max:"1",step:"0.05",id:"fx-darkness","aria-label":"Darkness",oninput:()=>e({darkness:+this.els.darkness.value})}),this.els.transitions=Qo.map(s=>w("button",{type:"button",class:"ghost",text:wa[s][0],dataset:{transition:s},"aria-pressed":"false",onclick:()=>e({transition:s})})),this.els.blackout=w("button",{type:"button",class:"ghost wide",id:"fx-blackout","aria-pressed":"false",onclick:()=>e({blackout:this.els.blackout.getAttribute("aria-pressed")!=="true"})}),this.root=w("section",{class:"fx",dataset:{tool:"fx"}},w("h2",{text:"FX"}),w("h3",{class:"sub",text:"For a moment"}),w("div",{class:"fx-buttons"},n("lightning","⚡ Lightning","A flash on every screen"),n("shake","Shake","Shake everyone's board"),n("damage","Damage","A red pulse round the edges")),w("h3",{class:"sub",text:"Transition"}),w("div",{class:"fx-buttons transitions"},...this.els.transitions),this.els.blackout,w("h3",{class:"sub",text:"Weather"}),w("div",{class:"fx-buttons"},...this.els.weather),this.els.intensityField=w("div",{class:"field"},w("label",{for:"fx-intensity",text:"Intensity"}),this.els.intensity),w("div",{class:"field"},w("label",{for:"fx-darkness",text:"Darkness"}),this.els.darkness),w("p",{class:"note",text:"Weather, darkness and the blackout stay on for this scene until you change them, and players who join later see them too. You see them fainter, so you can keep working."}),w("h3",{class:"sub",text:"Pings"}),w("p",{class:"note",text:"Click an empty spot on the map to ping it for everyone (click once more first if something is selected). Alt+Shift-click also brings everyone's view there."}))}refresh(t){const e=t||{};for(const s of this.els.weather)s.setAttribute("aria-pressed",String((e.weather||"none")===s.dataset.weather));document.activeElement!==this.els.darkness&&(this.els.darkness.value=String(e.darkness||0)),document.activeElement!==this.els.intensity&&(this.els.intensity.value=String(e.intensity??.6)),this.els.intensity.disabled=!e.weather,this.els.intensityField.classList.toggle("off",!e.weather),this.els.blackout.setAttribute("aria-pressed",String(!!e.blackout));const n=wa[e.transition]?e.transition:"fade";for(const s of this.els.transitions)s.setAttribute("aria-pressed",String(n===s.dataset.transition));this.els.blackout.textContent=wa[n][e.blackout?2:1]}}class Qx{constructor({onCommand:t,onGo:e,onNew:n}){this.onCommand=t,this.onGo=e,this.list=w("ul",{class:"scene-list","aria-label":"Scenes"}),this.root=w("section",{class:"scenes",dataset:{tool:"scenes"}},w("h2",{text:"Scenes"}),this.list,w("div",{class:"row"},w("button",{type:"button",class:"ghost",id:"scene-new",text:"New scene",onclick:()=>n()}),this.copy=w("button",{type:"button",class:"ghost",id:"scene-copy",text:"Duplicate this one"})),w("p",{class:"note",text:"Build each scene on the board: map, grid, monsters, light and weather. Go moves the table there and the players' tokens come along; everything else stays with its scene. To change scenes out of sight, start an intermission in FX first. Scenes are saved with the table."})),this.key=""}refresh(t){const e=JSON.stringify([t.activeScene,t.sceneOrder.map(s=>{const r=t.scenes[s];return[s,r==null?void 0:r.name,Object.keys((r==null?void 0:r.tokens)||{}).length]})]);if(e===this.key)return;this.key=e;const n=t.activeScene;this.copy.onclick=()=>{var s;return n&&this.onCommand(["scene.copy",n,`${((s=t.scenes[n])==null?void 0:s.name)||"Scene"} (copy)`])},this.copy.disabled=!n,this.list.replaceChildren(...t.sceneOrder.map(s=>{const r=t.scenes[s];if(!r)return null;const a=s===n,o=w("input",{type:"text",value:r.name,maxlength:"48","aria-label":"Scene name",onchange:()=>{const c=o.value.trim();c&&c!==r.name?this.onCommand(["scene.rename",s,c]):o.value=r.name},onkeydown:c=>{c.key==="Enter"&&o.blur()}}),l=w("button",{type:"button",class:"ghost small del",text:"×",title:a?"The players are here — go to another scene first":"Delete this scene","aria-label":`Delete ${r.name}`,disabled:a,onclick:()=>{if(!l.classList.contains("armed")){l.classList.add("armed"),l.textContent="Delete?",setTimeout(()=>{l.classList.remove("armed"),l.textContent="×"},3e3);return}this.onCommand(["scene.del",s])}});return w("li",{class:a?"live":""},o,a?w("span",{class:"badge",text:"Now playing"}):w("button",{type:"button",class:"primary small",text:"Go",onclick:()=>this.onGo(s)}),l)}).filter(Boolean))}}const qc=10;class ty{constructor({onRoll:t}){this.onRoll=t,this.key="vtt.quick.offline",this.items=[],this.root=w("div",{class:"quick","aria-label":"Quick rolls"}),this.load()}useTable(t){this.key=`vtt.quick.${t||"offline"}`,this.load()}load(){try{const t=JSON.parse(localStorage.getItem(this.key)||"[]");this.items=Array.isArray(t)?t.filter(e=>e&&typeof e.note=="string"&&typeof e.expr=="string").slice(0,qc):[]}catch{this.items=[]}this.render()}save(){try{localStorage.setItem(this.key,JSON.stringify(this.items))}catch{}}add(t,e){const n=this.items.find(s=>s.note.toLowerCase()===t.toLowerCase());if(n){if(n.expr===e&&n.note===t)return;n.expr=e,n.note=t}else this.items.push({note:t,expr:e}),this.items.length>qc&&this.items.shift();this.save(),this.render()}remove(t){this.items=this.items.filter(e=>e.note!==t),this.save(),this.render()}render(){this.root.hidden=!this.items.length,this.root.replaceChildren(...this.items.map(t=>w("span",{class:"quick-roll"},w("button",{type:"button",class:"go",text:t.note,title:`Roll ${t.expr} ${t.note}`,onclick:()=>this.onRoll(`${t.expr} ${t.note}`)}),w("button",{type:"button",class:"forget",text:"×",title:`Remove ${t.note}`,"aria-label":`Remove ${t.note}`,onclick:()=>this.remove(t.note)}))))}}const vu="vtt.voice.chimes";function ey(){try{return localStorage.getItem(vu)!=="0"}catch{return!0}}const $c={kind:"voice"},ny=.035;class iy{constructor({lobby:t,onChange:e}){this.lobby=t,this.onChange=e,this.on=!1,this.muted=!1,this.ptt=!1,this.pttDown=!1,this.stream=null,this.error="",this.output="",this.peers=new Map,this.silenced=new Set,this.localSpeaking=!1,this.chimes=ey(),this.ctx=null,this.localAnalyser=null,this.audioRoot=document.createElement("div"),this.audioRoot.hidden=!0,document.body.append(this.audioRoot),this.music=null,t.voice={join:n=>{var s;this.announce(n),(s=this.music)==null||s.peerJoined(n)},leave:n=>this.drop(n),stream:(n,s,r)=>{var a;return(r==null?void 0:r.kind)==="music"?(a=this.music)==null?void 0:a.hear(n,s):this.hear(n,s)},message:(n,s)=>{var r;return n.t==="music"?(r=this.music)==null?void 0:r.message(n,s):this.message(n,s)}},this.meter=setInterval(()=>this.measure(),120)}get isGm(){return this.lobby.isGm}get live(){return this.on&&!this.muted&&!this.silenced.has(this.lobby.selfId)&&(!this.ptt||this.pttDown)}peer(t){let e=this.peers.get(t);return e||(e={on:!1,muted:!1,volume:1,audio:null,analyser:null,speaking:!1},this.peers.set(t,e)),e}async start(t=""){this.error="";try{this.stream=await navigator.mediaDevices.getUserMedia({audio:{deviceId:t?{exact:t}:void 0,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(e){return this.error=(e==null?void 0:e.name)==="NotAllowedError"?"The browser was not allowed to use the microphone. Allow it in the address bar and try again.":`No microphone could be opened (${(e==null?void 0:e.name)||e}).`,this.onChange(),!1}this.on=!0,this.applyTrack(),this.watchLocal(),this.chime("join");for(const[e,n]of this.peers)n.on&&this.lobby.link.addStream(this.stream,e,$c);return this.announce(),this.onChange(),!0}stop(){var t;if(this.on){for(const[e,n]of this.peers)n.on&&this.lobby.link.removeStream(this.stream,e),this.unplug(n);for(const e of((t=this.stream)==null?void 0:t.getTracks())||[])e.stop();this.stream=null,this.on=!1,this.localSpeaking=!1,this.announce(),this.onChange()}}async useMicrophone(t){this.on&&(this.stop(),await this.start(t))}setMuted(t){this.muted=t,this.applyTrack(),this.announce(),this.onChange()}setPtt(t){this.ptt=t,this.applyTrack(),this.announce(),this.onChange()}pushToTalk(t){!this.ptt||this.pttDown===t||(this.pttDown=t,this.applyTrack(),this.onChange())}applyTrack(){var t;for(const e of((t=this.stream)==null?void 0:t.getAudioTracks())||[])e.enabled=this.live}announce(t){var n;const e={t:"voice",on:this.on,muted:this.muted||this.silenced.has(this.lobby.selfId)};this.isGm&&(e.silenced=[...this.silenced]),(n=this.lobby.link)==null||n.send(e,t)}message(t,e){const n=this.peer(e),s=n.on;if(n.on=!!t.on,n.muted=!!t.muted,this.on&&n.on!==s&&this.chime(n.on?"join":"leave"),this.on&&n.on&&!s&&this.lobby.link.addStream(this.stream,e,$c),this.on&&!n.on&&s&&this.lobby.link.removeStream(this.stream,e),n.on||this.unplug(n),Array.isArray(t.silenced)&&e===this.lobby.gmId){this.silenced=new Set(t.silenced.filter(r=>typeof r=="string")),this.applyTrack();for(const[r,a]of this.peers)this.applyVolume(r,a)}this.onChange()}hear(t,e){const n=this.peer(e);if(!this.on)return;this.unplug(n);const s=document.createElement("audio");s.autoplay=!0,s.srcObject=t,this.output&&s.setSinkId&&s.setSinkId(this.output).catch(()=>{}),this.audioRoot.append(s),n.audio=s,this.applyVolume(e,n);try{const r=this.context().createMediaStreamSource(t);n.analyser=this.context().createAnalyser(),n.analyser.fftSize=512,r.connect(n.analyser)}catch{}this.onChange()}setVolume(t,e){const n=this.peer(t);n.volume=e,this.applyVolume(t,n)}applyVolume(t,e){e.audio&&(e.audio.volume=this.silenced.has(t)?0:e.volume)}async setOutput(t){var e,n;this.output=t,(e=this.music)==null||e.setOutput(t);for(const s of this.peers.values())(n=s.audio)!=null&&n.setSinkId&&await s.audio.setSinkId(t).catch(()=>{})}silence(t,e){if(this.isGm){e?this.silenced.add(t):this.silenced.delete(t);for(const[n,s]of this.peers)this.applyVolume(n,s);this.announce(),this.onChange()}}drop(t){const e=this.peers.get(t);e!=null&&e.on&&this.on&&this.chime("leave"),e&&this.unplug(e),this.peers.delete(t),this.onChange()}unplug(t){t.audio&&(t.audio.srcObject=null,t.audio.remove()),t.audio=null,t.analyser=null,t.speaking=!1}setChimes(t){this.chimes=t;try{localStorage.setItem(vu,t?"1":"0")}catch{}this.onChange()}chime(t){if(!this.chimes)return;let e;try{e=this.context()}catch{return}const n=t==="join"?[660,880]:[660,494],s=e.currentTime+.01;n.forEach((r,a)=>{const o=e.createOscillator(),l=e.createGain();o.type="sine",o.frequency.value=r;const c=s+a*.11;l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.12,c+.015),l.gain.exponentialRampToValueAtTime(1e-4,c+.22),o.connect(l).connect(e.destination),o.start(c),o.stop(c+.25)}),this.lastChime=t}context(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}watchLocal(){try{const t=this.context().createMediaStreamSource(this.stream);this.localAnalyser=this.context().createAnalyser(),this.localAnalyser.fftSize=512,t.connect(this.localAnalyser)}catch{this.localAnalyser=null}}measure(){let t=!1;const e=s=>{if(!s)return!1;const r=new Float32Array(s.fftSize);s.getFloatTimeDomainData(r);let a=0;for(const o of r)a+=o*o;return Math.sqrt(a/r.length)>ny},n=this.on&&this.live&&e(this.localAnalyser);n!==this.localSpeaking&&(this.localSpeaking=n,t=!0);for(const[s,r]of this.peers){const a=r.on&&!r.muted&&!this.silenced.has(s)&&e(r.analyser);a!==r.speaking&&(r.speaking=a,t=!0)}t&&this.onChange()}status(){const t=new Map;t.set(this.lobby.selfId,{on:this.on,muted:!this.live,speaking:this.localSpeaking,silenced:this.silenced.has(this.lobby.selfId)});for(const[e,n]of this.peers)t.set(e,{on:n.on,muted:n.muted,speaking:n.speaking,silenced:this.silenced.has(e)});return t}leave(){var t;this.stop(),clearInterval(this.meter),(t=this.ctx)==null||t.close().catch(()=>{})}}async function sy(){try{const i=await navigator.mediaDevices.enumerateDevices();return{inputs:i.filter(t=>t.kind==="audioinput"),outputs:i.filter(t=>t.kind==="audiooutput"),canChooseOutput:typeof HTMLMediaElement<"u"&&"setSinkId"in HTMLMediaElement.prototype}}catch{return{inputs:[],outputs:[],canChooseOutput:!1}}}const Yc="KeyV";class ry{constructor({voice:t,roster:e}){this.voice=t,this.roster=e,this.devices={inputs:[],outputs:[],canChooseOutput:!1},this.root=w("section",{class:"voice",dataset:{tool:"voice"}}),this.render();const n=()=>{var s;return/^(INPUT|TEXTAREA|SELECT)$/.test(((s=document.activeElement)==null?void 0:s.tagName)||"")};addEventListener("keydown",s=>{s.code===Yc&&!s.repeat&&!n()&&t.pushToTalk(!0)}),addEventListener("keyup",s=>{s.code===Yc&&t.pushToTalk(!1)}),addEventListener("blur",()=>t.pushToTalk(!1))}async refreshDevices(){this.devices=await sy(),this.render()}render(){var c,f;const t=this.voice,e=this.roster(),n=u=>e.find(d=>d.peerId===u);if(!t.on){this.root.replaceChildren(...[w("h2",{text:"Voice"}),w("button",{type:"button",class:"primary",id:"voice-join",text:"Join voice",onclick:async()=>{await t.start()&&this.refreshDevices()}}),t.error?w("p",{class:"note",dataset:{kind:"error"},text:t.error}):null,w("p",{class:"note",text:"Your microphone goes straight to the others at the table who have joined — no server in between."}),this.people(n)].filter(Boolean));return}const s=w("select",{onchange:()=>t.useMicrophone(s.value).then(()=>this.refreshDevices())},...this.devices.inputs.map(u=>w("option",{value:u.deviceId,text:u.label||"Microphone"}))),r=(f=(c=t.stream)==null?void 0:c.getAudioTracks()[0])==null?void 0:f.getSettings().deviceId;r&&(s.value=r);const a=this.devices.canChooseOutput?w("select",{onchange:()=>t.setOutput(a.value)},...this.devices.outputs.map(u=>w("option",{value:u.deviceId,text:u.label||"Speakers"}))):null;a&&t.output&&(a.value=t.output);const o=w("input",{type:"checkbox",id:"voice-ptt",onchange:()=>t.setPtt(o.checked)});o.checked=t.ptt;const l=w("input",{type:"checkbox",id:"voice-chimes",onchange:()=>t.setChimes(l.checked)});l.checked=t.chimes,this.root.replaceChildren(...[w("h2",{text:"Voice"}),w("div",{class:"row"},w("button",{type:"button",class:t.muted?"primary":"ghost",id:"voice-mute",text:t.muted?"Unmute":"Mute",onclick:()=>t.setMuted(!t.muted)}),w("button",{type:"button",class:"ghost",id:"voice-leave",text:"Leave voice",onclick:()=>t.stop()})),t.silenced.has(t.lobby.selfId)?w("p",{class:"note",dataset:{kind:"warn"},text:"The GM has muted you for now."}):null,w("label",{class:"check",for:"voice-ptt"},o," Push to talk — hold V"),w("label",{class:"check",for:"voice-chimes"},l," Join and leave sounds"),w("div",{class:"field"},w("label",{text:"Microphone"}),s),a?w("div",{class:"field"},w("label",{text:"Speakers"}),a):null,this.people(n)].filter(Boolean))}people(t){const e=this.voice,n=[...e.peers].filter(([,s])=>s.on).map(([s,r])=>{const a=t(s),o=w("input",{type:"range",min:"0",max:"1",step:"0.05",value:String(r.volume),title:"Volume","aria-label":`Volume for ${(a==null?void 0:a.name)??"them"}`,oninput:()=>e.setVolume(s,+o.value)}),l=e.silenced.has(s);return w("li",{class:r.speaking?"speaking":""},w("i",{class:"seat",style:{background:is((a==null?void 0:a.color)??9280918)}}),w("span",{class:"who",text:(a==null?void 0:a.name)??"Someone"}),e.on?o:null,e.isGm&&(a==null?void 0:a.role)!==Je?w("button",{type:"button",class:`ghost small${l?" armed":""}`,text:l?"Unsilence":"Silence",title:l?"Let them speak again":"Mute them for everyone",onclick:()=>e.silence(s,!l)}):null)});return w("div",{},w("h3",{class:"sub",text:n.length?"In voice":"Nobody else is in voice yet."}),n.length?w("ul",{class:"voice-people"},...n):null)}}const ay={kind:"music"},oy=128e3,xu="vtt.music";class yu{constructor({lobby:t,voice:e,onChange:n}){this.lobby=t,this.onChange=n,this.stream=null,this.source="",this.error="",this.playing=!1,this.audio=null;const s=hy();this.volume=s.volume,this.muted=s.muted,e.music=this}get isGm(){return this.lobby.isGm}get sharing(){return!!this.stream}static get canShare(){var n,s,r;if(!((n=navigator.mediaDevices)!=null&&n.getDisplayMedia))return!1;if((((r=(s=navigator.userAgentData)==null?void 0:s.brands)==null?void 0:r.map(a=>a.brand))||[]).some(a=>/Chromium|Google Chrome|Microsoft Edge/.test(a)))return!0;const e=navigator.userAgent;return/Chrome\/|Chromium\/|Edg\//.test(e)&&!/Firefox\//.test(e)}async share(){var r,a;this.error="";let t;try{t=await ly()}catch(o){return(o==null?void 0:o.name)!=="NotAllowedError"&&(o==null?void 0:o.name)!=="AbortError"&&(this.error=`Could not share that (${(o==null?void 0:o.name)||o}).`),this.onChange(),!1}const e=t.getAudioTracks(),n=t.getVideoTracks()[0],s=(r=n==null?void 0:n.getSettings)==null?void 0:r.call(n).displaySurface;if(!e.length){for(const o of t.getTracks())o.stop();return this.error=cy(s),console.info("[music] share had no audio track; surface was",s),this.onChange(),!1}this.video=n||null,(a=n==null?void 0:n.applyConstraints)==null||a.call(n,{frameRate:1,width:64,height:64}).catch(()=>{}),this.stream=new MediaStream(e),this.source=(n==null?void 0:n.label)||e[0].label||"a tab",e[0].addEventListener("ended",()=>this.stop());for(const o of this.lobby.link.peers())this.sendTo(o);return this.announce(),this.onChange(),!0}stop(){var t;if(this.stream){for(const e of this.lobby.link.peers())this.lobby.link.removeStream(this.stream,e);for(const e of this.stream.getTracks())e.stop();(t=this.video)==null||t.stop(),this.video=null,this.stream=null,this.source="",this.announce(),this.onChange()}}peerJoined(t){this.isGm&&(this.stream&&this.sendTo(t),this.announce(t))}sendTo(t){const e=this.lobby.link.addStream(this.stream,t,ay);Promise.allSettled(e||[]).then(()=>{var o,l,c;const n=this.lobby.link.connection(t),s=(o=this.stream)==null?void 0:o.getAudioTracks()[0],r=(l=n==null?void 0:n.getSenders)==null?void 0:l.call(n).find(f=>f.track===s);if(!r)return;const a=r.getParameters();a.encodings=(c=a.encodings)!=null&&c.length?a.encodings:[{}],a.encodings[0].maxBitrate=oy,r.setParameters(a).catch(()=>{})})}announce(t){var e;this.isGm&&((e=this.lobby.link)==null||e.send({t:"music",on:this.sharing},t))}message(t,e){e===this.lobby.gmId&&(this.playing=!!t.on,this.playing||this.unplug(),this.onChange())}hear(t,e){if(e!==this.lobby.gmId)return;this.unplug();const n=document.createElement("audio");n.autoplay=!0,n.srcObject=t,document.body.append(n),n.hidden=!0,this.audio=n,this.playing=!0,this.apply(),this.onChange()}setVolume(t){this.volume=t,this.apply(),jc(this)}setMuted(t){this.muted=t,this.apply(),jc(this),this.onChange()}setOutput(t){var e,n;(n=(e=this.audio)==null?void 0:e.setSinkId)==null||n.call(e,t).catch(()=>{})}apply(){this.audio&&(this.audio.volume=this.muted?0:this.volume)}unplug(){this.audio&&(this.audio.srcObject=null,this.audio.remove()),this.audio=null}leave(){this.stop(),this.unplug()}}async function ly(){const i=await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:"browser"},audio:!0,selfBrowserSurface:"exclude"});for(const t of i.getAudioTracks())t.applyConstraints({echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}).catch(()=>{});return i}function cy(i){return i==="window"?'That shared a window, and Chrome only sends sound from a tab. Share again, choose the "Chrome Tab" pane at the top of the picker, pick the tab with the music, and keep "Also share tab audio" switched on.':i==="monitor"?'That shared the whole screen, which carries no sound here. Share again and choose the "Chrome Tab" pane, pick the tab with the music, and keep "Also share tab audio" on.':'That tab was shared without its sound. Share again and switch on "Also share tab audio" at the bottom of the picker before pressing Share.'}function hy(){try{const i=JSON.parse(localStorage.getItem(xu)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.6,muted:!!i.muted}}catch{return{volume:.6,muted:!1}}}function jc(i){try{localStorage.setItem(xu,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}class uy{constructor({music:t}){this.music=t,this.root=w("section",{class:"music",dataset:{tool:"music"}}),this.render()}render(){const t=this.music,e=[w("h2",{text:"Music"})];t.sharing?e.push(w("p",{class:"playing",text:"♪ Playing to the table"}),w("p",{class:"note source",text:t.source}),w("button",{type:"button",class:"ghost",id:"music-stop",text:"Stop the music",onclick:()=>t.stop()}),w("p",{class:"note",text:"Change track, volume or playlist in that tab — the table hears whatever it plays. Each player has their own volume."})):yu.canShare?e.push(w("ol",{class:"steps"},w("li",{text:"Start your music in another tab — Spotify, YouTube, anything."}),w("li",{text:`Press the button below. In Chrome's picker choose the "Chrome Tab" pane — not "Window" — and pick that tab.`}),w("li",{text:'Keep "Also share tab audio" switched on, then Share.'})),w("p",{class:"note",text:"Chrome always shares a picture too; the table only ever gets the sound."}),w("button",{type:"button",class:"primary",id:"music-share",text:"Share a tab's sound…",onclick:()=>t.share()})):e.push(w("p",{class:"note",dataset:{kind:"warn"},text:"This browser can share a screen but not its sound — Firefox and Safari have no option for it."}),w("p",{class:"note",text:"To play music to the table, run the table in Chrome or Edge on a computer. Players can listen in any browser."})),t.error&&e.push(w("p",{class:"note",dataset:{kind:"error"},text:t.error})),this.root.replaceChildren(...e)}}class dy{constructor({music:t}){this.music=t,this.els={},this.els.mute=w("button",{type:"button",class:"ghost small",onclick:()=>t.setMuted(!t.muted)}),this.els.volume=w("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Music volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=w("div",{class:"music-control",hidden:!0},w("span",{class:"label",text:"♪ Music"}),this.els.volume,this.els.mute),this.render()}render(){const t=this.music;this.root.hidden=!t.playing||t.isGm,this.els.volume.value=String(t.volume),this.els.volume.disabled=t.muted,this.els.mute.textContent=t.muted?"Unmute":"Mute"}}class Mu{constructor({ambience:t,label:e="☁ Ambience"}){this.ambience=t,this.els={},this.els.mute=w("button",{type:"button",class:"ghost small",onclick:()=>{t.setMuted(!t.muted),this.render()}}),this.els.volume=w("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Ambience volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=w("div",{class:"music-control ambience-control",hidden:!0},w("span",{class:"label",text:e}),this.els.volume,this.els.mute),this.render()}render(t=this.weather){this.weather=t;const e=this.ambience;this.root.hidden=!t,document.activeElement!==this.els.volume&&(this.els.volume.value=String(e.volume)),this.els.volume.disabled=e.muted,this.els.mute.textContent=e.muted?"Unmute":"Mute"}}const Su="vtt.ambience",vs=1.5;class fy{constructor(){this.ctx=null,this.out=null,this.current=null,this.kind=null,this.intensity=.6;const t=My();this.volume=t.volume,this.muted=t.muted,this.unlocked=!1,this.curtain=1;const e=()=>{var n,s;this.unlocked=!0,(s=(n=this.ensure())==null?void 0:n.resume)==null||s.call(n),this.apply(),removeEventListener("pointerdown",e,!0),removeEventListener("keydown",e,!0)};addEventListener("pointerdown",e,!0),addEventListener("keydown",e,!0)}ensure(){if(this.ctx)return this.ctx;try{this.ctx=new AudioContext}catch{return null}return this.out=this.ctx.createGain(),this.out.gain.value=this.level(),this.limiter=this.ctx.createDynamicsCompressor(),this.limiter.threshold.value=-6,this.limiter.knee.value=6,this.limiter.ratio.value=12,this.limiter.attack.value=.003,this.limiter.release.value=.25,this.out.connect(this.limiter).connect(this.ctx.destination),this.meter=this.ctx.createAnalyser(),this.meter.fftSize=2048,this.out.connect(this.meter),this.noise=my(this.ctx),this.brown=gy(this.ctx),this.ready=vy(this.ctx),this.ctx}update(t){const e=(t==null?void 0:t.weather)||null,n=(t==null?void 0:t.intensity)??.6;if(e===this.kind&&Math.abs(n-this.intensity)<.001)return;const s=e!==this.kind;this.kind=e,this.intensity=n,this.unlocked&&this.apply(s)}apply(t=!0){var e,n,s;if(!(!this.unlocked||!this.ensure())){if(!this.hissReady){this.ready.then(()=>{this.hissReady=!0,this.apply(!0)});return}(t||!this.current)&&((e=this.current)==null||e.stop(),this.current=this.kind&&((n=Ta[this.kind])==null?void 0:n.call(Ta,this.ctx,this.noise,this.out))||null),(s=this.current)==null||s.set(this.intensity)}}thunder(t){if(!this.unlocked||!this.ensure())return null;const e=(t==null?void 0:t.weather)==="rain"?t.intensity??.6:.5,n=Math.min(1,Math.max(0,e)),s=.15+(1-n)*8;return py(this.ctx,this.noise,this.brown,this.out,n,this.ctx.currentTime+s),this.lastThunder={delay:Math.round(s*100)/100,near:n},s}level(){return this.muted?0:this.volume*this.curtain}setVolume(t){this.volume=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),Jc(this)}setMuted(t){this.muted=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),Jc(this)}setCurtain(t){const e=Math.min(1,Math.max(0,t));Math.abs(e-this.curtain)<.005&&!(e===0&&this.curtain!==0)||(this.curtain=e,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.05))}status(){var e,n;let t=0;if(this.meter){const s=new Float32Array(this.meter.fftSize);this.meter.getFloatTimeDomainData(s),t=Math.sqrt(s.reduce((r,a)=>r+a*a,0)/s.length)}return{kind:this.current?this.kind:null,intensity:this.intensity,volume:this.volume,muted:this.muted,running:((e=this.ctx)==null?void 0:e.state)==="running",level:Math.round(t*1e3)/1e3,thunder:this.lastThunder??null,hiss:!!((n=this.ctx)!=null&&n.hiss)}}}const Ta={rain(i,t,e){const n=Ro(i,t),s=Cn(i,"lowpass",2600,.4),r=Cn(i,"highpass",400,.5),a=i.createGain();n.node.connect(r).connect(s).connect(a);const o=Co(i,e);a.connect(o);let l=.6;const c=d=>{const p=Math.random()<.08,g=Vi(i,t),_=Cn(i,"bandpass",p?500+Math.random()*700:1400+Math.random()*3600,p?3:1.5+Math.random()*2),h=i.createGain(),m=(p?.35:.08+Math.random()*.18)*(.6+.4*l),M=p?.12+Math.random()*.1:.03+Math.random()*.06;h.gain.setValueAtTime(0,d),h.gain.linearRampToValueAtTime(m,d+.004+Math.random()*.004),h.gain.exponentialRampToValueAtTime(1e-4,d+M);let x=h;if(i.createStereoPanner){const b=i.createStereoPanner();b.pan.value=Math.random()*1.6-.8,h.connect(b),x=b}g.connect(_).connect(h),x.connect(o),g.start(d,Math.random()*Xn),g.stop(d+M+.05)},f=i.hiss?new AudioWorkletNode(i,"vtt-rain",{numberOfInputs:0,outputChannelCount:[2]}):null;f==null||f.connect(o);const u=f?{stop(){setTimeout(()=>{f.port.postMessage("stop"),f.disconnect()},(vs+.2)*1e3)}}:Zc(i,()=>-Math.log(1-Math.random())/(4+26*l),c);return{set(d){l=d,f==null||f.port.postMessage({k:l}),a.gain.setTargetAtTime(.18+.5*l,i.currentTime,.5),s.frequency.setTargetAtTime(1800+2600*l,i.currentTime,.5)},stop(){u.stop(),Po(i,o,[n])}}},embers(i,t,e){const n=Co(i,e),s=Ro(i,t),r=Cn(i,"lowpass",300,.7),a=i.createGain();s.node.connect(r).connect(a).connect(n);let o=.6;const c=Zc(i,()=>(.06+Math.random()*.5)/(.35+o),f=>{const u=Math.random()<.25?2+Math.floor(Math.random()*3):1;for(let d=0;d<u;d++){const p=f+d*(.015+Math.random()*.04),g=Vi(i,t),_=Cn(i,"bandpass",1200+Math.random()*3500,1.5+Math.random()*3),h=i.createGain(),m=(.5+Math.random()*.9)*(.5+.5*o);h.gain.setValueAtTime(0,p),h.gain.linearRampToValueAtTime(m,p+.001),h.gain.exponentialRampToValueAtTime(1e-4,p+.01+Math.random()*.04),g.connect(_).connect(h).connect(n),g.start(p,Math.random()*Xn),g.stop(p+.08)}});return{set(f){o=f,a.gain.setTargetAtTime(.35+.9*o,i.currentTime,.5)},stop(){c.stop(),Po(i,n,[s])}}},snow(i,t,e){return Kc(i,t,e,{base:550,spread:380,level:1.6,rate:.12})},fog(i,t,e){return Kc(i,t,e,{base:320,spread:140,level:1.1,rate:.07})}};function py(i,t,e,n,s,r){const a=1-s,o=.45+.55*s;if(s>.4){const d=.5*(s-.3)*o,p=8+Math.round(8*s);for(let m=0;m<p;m++){const M=r+Math.pow(m/p,1.6)*.55+Math.random()*.03,x=Vi(i,t),b=Cn(i,"lowpass",1800+2600*s*Math.random(),.5),I=i.createGain(),R=d*(1-m/p)*(.5+Math.random()*.5);I.gain.setValueAtTime(0,M),I.gain.linearRampToValueAtTime(R,M+.004),I.gain.exponentialRampToValueAtTime(1e-4,M+.06+Math.random()*.12),x.connect(b).connect(I).connect(n),x.start(M,Math.random()*Xn),x.stop(M+.3)}const g=Vi(i,e),_=Cn(i,"lowpass",140,.7),h=i.createGain();h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(3.2*s*o,r+.02),h.gain.exponentialRampToValueAtTime(1e-4,r+.9),g.connect(_).connect(h).connect(n),g.start(r,Math.random()*Xn),g.stop(r+1)}const l=4+4*a+Math.random()*1.5,c=r+(s>.4?.12:.05),f=.25+.9*a,u=(d,p)=>{const g=Vi(i,e),_=Cn(i,"lowpass",d,.6),h=i.createGain();g.connect(_).connect(h).connect(n),h.gain.setValueAtTime(1e-4,c),h.gain.setTargetAtTime(p,c,f/3);let m=c+f;for(;m<c+l;){const M=Math.pow(1-(m-c)/l,.6+.8*a);h.gain.setTargetAtTime(p*M*(.4+.6*Math.random()),m,.12),m+=.25+Math.random()*.5}h.gain.setTargetAtTime(1e-4,c+l,.3),g.start(c,Math.random()*Xn),g.stop(c+l+1.5)};u(220+700*s,o*(1.6+2.4*s)*(1+.8*a)),u(90,o*(2.4+2.6*s))}function Kc(i,t,e,{base:n,spread:s,level:r,rate:a}){const o=Co(i,e),l=Ro(i,t),c=Cn(i,"bandpass",n,1.2),f=i.createGain();l.node.connect(c).connect(f).connect(o);const u=[a,a*.37].map((g,_)=>{const h=i.createOscillator();h.frequency.value=g;const m=i.createGain();return m.gain.value=_===0?s:s*.5,h.connect(m).connect(c.frequency),h.start(),h}),d=i.createOscillator();d.frequency.value=a*.8;const p=i.createGain();return d.connect(p).connect(f.gain),d.start(),{set(g){const _=r*(.2+.8*g);f.gain.setTargetAtTime(_,i.currentTime,.6),p.gain.setTargetAtTime(_*.6,i.currentTime,.6),c.frequency.setTargetAtTime(n*(.8+.5*g),i.currentTime,.8)},stop(){Po(i,o,[l,...u,d])}}}const Xn=6;function my(i){const t=i.createBuffer(1,i.sampleRate*Xn,i.sampleRate),e=t.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1;return t}function gy(i){const t=i.createBuffer(1,i.sampleRate*Xn,i.sampleRate),e=t.getChannelData(0);let n=0;for(let s=0;s<e.length;s++)n=(n+.02*(Math.random()*2-1))/1.02,e[s]=n*3.5;return t}const _y=`
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
});`;function vy(i){if(!i.audioWorklet)return Promise.resolve();const t=URL.createObjectURL(new Blob([_y],{type:"application/javascript"}));return i.audioWorklet.addModule(t).then(()=>{i.hiss=!0}).catch(()=>{}).finally(()=>URL.revokeObjectURL(t))}function Ro(i,t){if(i.hiss){const n=new AudioWorkletNode(i,"vtt-hiss",{numberOfInputs:0,outputChannelCount:[1]});return{node:n,stop(s){setTimeout(()=>{n.port.postMessage("stop"),n.disconnect()},Math.max(0,s-i.currentTime)*1e3)}}}const e=Vi(i,t);return e.start(0,Math.random()*Xn),{node:e,stop:n=>e.stop(n)}}function Vi(i,t){const e=i.createBufferSource();return e.buffer=t,e.loop=!0,e}function Cn(i,t,e,n){const s=i.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=n,s}function Co(i,t){const e=i.createGain();return e.gain.setValueAtTime(0,i.currentTime),e.gain.linearRampToValueAtTime(1,i.currentTime+vs),e.connect(t),e}function Po(i,t,e){const n=i.currentTime;t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+vs);for(const s of e)try{s.stop(n+vs+.05)}catch{}setTimeout(()=>t.disconnect(),(vs+.2)*1e3)}const xy=1.2,yy=100;function Zc(i,t,e){let n=i.currentTime+t();const s=()=>{const a=i.currentTime;for(n<a&&(n=a+t());n<a+xy;)e(n),n+=t()};s();const r=setInterval(s,yy);return{stop(){clearInterval(r)}}}function My(){try{const i=JSON.parse(localStorage.getItem(Su)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.5,muted:!!i.muted}}catch{return{volume:.5,muted:!1}}}function Jc(i){try{localStorage.setItem(Su,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}const bu="vtt-table";async function Eu(i,t){var o;const e={};for(const l of Object.keys(i.state.assets||{})){const c=await t.blob(l);c&&(e[l]={mime:c.type||((o=i.state.assets[l])==null?void 0:o.mime)||"image/webp",data:await by(c)})}const{id:n,tokens:s,...r}=i,a=JSON.stringify({format:bu,v:1,...r,assets:e});return new Blob([a],{type:"application/json"})}async function Sy(i){let t;try{t=JSON.parse(i)}catch{throw new Error("That is not a table file.")}if(!t||t.format!==bu||typeof t.state!="object")throw new Error("That is not a table file.");if(t.v>1)throw new Error("That table was saved by a newer version. Reload to update, then try again.");const e=[];let n=0;for(const[r,a]of Object.entries(t.assets||{}))try{const o=Ey(a.data);if(await Ir(o.buffer)!==r){n++;continue}e.push({hash:r,blob:new Blob([o],{type:typeof a.mime=="string"?a.mime:"image/webp"})})}catch{n++}return{record:{name:typeof t.name=="string"?t.name.slice(0,80):"Imported table",code:typeof t.code=="string"?t.code.slice(0,8):null,savedAt:Number.isFinite(t.savedAt)?t.savedAt:Date.now(),seed:Number.isInteger(t.seed)?t.seed:void 0,rng:t.rng&&typeof t.rng=="object"?t.rng:void 0,said:Number.isInteger(t.said)?t.said:0,secrets:Array.isArray(t.secrets)?t.secrets.slice(-200):[],secretRng:t.secretRng&&typeof t.secretRng=="object"?t.secretRng:void 0,state:Mo(t.state)},images:e,skipped:n}}async function by(i){const t=new Uint8Array(await i.arrayBuffer());let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}function Ey(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const wy=(i,t)=>typeof i=="string"&&typeof t=="string"&&i.trim().toLowerCase()===t.trim().toLowerCase();function Ty(i,t,e){for(const n of Object.values(i.roster))if(!(n.peerId===e||n.role!==$n||!n.away||n.claimed)&&wy(n.name,t))return n;return null}function wu(i,t,e){const n=[],s=Ee(i);for(const a of Object.values((s==null?void 0:s.tokens)||{}))a.owner===t&&n.push(["tok.patch",a.id,{owner:e}]);const r=i.roster[t];return r&&n.push(["peer.join",{...r,away:!0,claimed:e}]),n}function Ay(i,t){const e=[];for(const n of Object.values(i.roster))n.role!==Je||n.peerId===t||e.push(...wu(i,n.peerId,t));return e}const hn={tokens:40,name:48,minSize:.25,maxSize:12,reach:2e3,assetName:128,artPx:2e4},Qc=/^[0-9a-f]{64}$/,Aa=i=>typeof i=="string"&&i.length>0&&i.length<=64,Ni=i=>typeof i=="number"&&Number.isFinite(i),dr=(i,t,e)=>i<t?t:i>e?e:i,Di=i=>Ni(i)?dr(Math.round(i*100)/100,-2e3,hn.reach):null,Ra=Math.PI*2,th=i=>Math.round((i%Ra+Ra)%Ra*1e4)/1e4,Ca=(i,t)=>typeof i=="string"?i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,t):"";function Ry(i,t){var e;return((e=i.roster[t])==null?void 0:e.role)===Je}function Cy(i,t,e){var s;const n=(s=Ee(i))==null?void 0:s.tokens[e];return!!n&&n.owner===t}function Py(i,t,e){var o;if(!Array.isArray(e)||typeof e[0]!="string")return null;const[n,s,r,a]=e;switch(n){case"asset.add":{if(!s||typeof s!="object"||!Qc.test(s.hash))return null;const l=c=>Number.isInteger(c)&&c>0&&c<=hn.artPx?c:0;return["asset.add",{hash:s.hash,name:Ca(s.name,hn.assetName)||"token",mime:typeof s.mime=="string"&&/^image\/[\w.+-]{1,32}$/.test(s.mime)?s.mime:"image/webp",w:l(s.w),h:l(s.h),size:Number.isInteger(s.size)&&s.size>=0?s.size:0,scaled:!!s.scaled}]}case"tok.add":{if(!s||typeof s!="object")return null;const l=Di(s.x),c=Di(s.y);if(l===null||c===null)return null;const f={name:Ca(s.name,hn.name),x:l,y:c,size:Ni(s.size)?dr(s.size,hn.minSize,hn.maxSize):1,owner:t,layer:"token",hidden:!1};if(s.asset!==void 0&&s.asset!==null){if(!Qc.test(s.asset))return null;f.asset=s.asset}const u=(o=i.roster[t])==null?void 0:o.color;return Number.isInteger(u)?f.border=u:Number.isInteger(s.border)&&(f.border=s.border&16777215),(s.shape==="circle"||s.shape==="square")&&(f.shape=s.shape),["tok.add",f]}case"tok.move":{const l=Di(r),c=Di(a);return!Aa(s)||l===null||c===null?null:["tok.move",s,l,c]}case"tok.del":return Aa(s)?["tok.del",s]:null;case"tok.patch":{if(!Aa(s)||!r||typeof r!="object")return null;const l={};return typeof r.name=="string"&&(l.name=Ca(r.name,hn.name)),Ni(r.size)&&(l.size=dr(Math.round(r.size*100)/100,hn.minSize,hn.maxSize)),Ni(r.rot)&&(l.rot=th(r.rot)),r.facing===null?l.facing=null:Ni(r.facing)&&(l.facing=th(r.facing)),typeof r.light=="boolean"&&(l.light=r.light),Ni(r.lightRange)&&(l.lightRange=dr(Math.round(r.lightRange),1,xr)),Object.keys(l).length?["tok.patch",s,l]:null}case"peer.color":return Number.isInteger(s)?["peer.color",t,s&16777215]:null;case"dice.roll":return typeof s=="string"&&s.length<=dn.input?["dice.roll",t,s]:null;case"fx.ping":{const l=Di(s),c=Di(r);return l===null||c===null?null:["fx.ping",t,l,c]}case"chat.say":{const l=Yh(s);return l?["chat.say",t,l]:null}default:return null}}function Ly(i,t,e){if(!i.roster[t])return!1;if(Ry(i,t))return!0;const n=Ee(i);switch(e[0]){case"asset.add":return!0;case"tok.add":{if(!n||e[1].asset&&!i.assets[e[1].asset])return!1;let s=0;for(const r of Object.values(n.tokens))r.owner===t&&s++;return s<hn.tokens}case"tok.move":case"tok.del":case"tok.patch":return Cy(i,t,e[1]);case"peer.color":case"dice.roll":case"chat.say":case"fx.ping":return e[1]===t;default:return!1}}const Iy=50;class Dy{constructor({lobby:t,table:e,library:n,onRoster:s,onSeat:r,onFx:a}){this.lobby=t,this.table=e,this.library=n,this.onFx=a,this.unsubscribe=e.events.onRemote((o,l)=>{o==="op"&&t.link.send({t:"op",n:l[1],c:l[0]})}),t.listen({onRoster:s,onSeated:o=>{r==null||r(o),this.sendDoc(o)},onMessage:(o,l)=>this.receive(o,l),onAsset:(o,l,c)=>this.upload(o,l,c)})}sendDoc(t){this.lobby.link.send({t:"doc",s:this.table.snapshot()},t)}receive(t,e){if(t.t==="sync")return this.sendDoc(e);if(t.t==="need")return this.sendAssets(Ux(t),e);if(t.t==="req")return this.request(Gc(t.c),e)}request(t,e){var s;let n=0;for(const r of t){const a=Py(this.table.state,e,r);if(!a||!Ly(this.table.state,e,a)){n++;continue}if(a[0]==="asset.add"&&!this.library.has(a[1].hash)){n++;continue}if(a[0]==="peer.color"){this.recolor(a[1],a[2]);continue}if(a[0]==="dice.roll"){try{this.table.rollDice(a[2],a[1])}catch{n++}continue}if(a[0]==="fx.ping"){const o={t:"fx",k:"ping",x:a[2],y:a[3],by:a[1]};(s=this.onFx)==null||s.call(this,o),this.lobby.link.send(o);continue}if(a[0]==="chat.say"){this.table.say(a[1],a[2],Date.now());continue}this.table.dispatch(a,{record:!1})}n&&console.info(`[session] refused ${n} of ${t.length} from ${e}`)}recolor(t,e){this.lobby.setColor(t,e);const n=this.table.scene;for(const s of Object.values((n==null?void 0:n.tokens)||{}))s.owner===t&&s.border!==e&&this.table.dispatch(["tok.patch",s.id,{border:e}],{record:!1})}async upload(t,e,n){const s=e==null?void 0:e.h;if(!Sr(s))return;const r=await Tu(t);if(!(!r||r.byteLength>vn.upload)){if(await Ir(r)!==s){console.warn("[session] upload did not match its hash",s);return}this.library.has(s)||await this.library.putBytes(s,new Blob([r],{type:Au(e)})),this.request(Gc(e.req),n)}}async sendAssets(t,e){for(const n of t){const s=await this.library.blob(n);if(!s||!this.lobby.members.has(e))continue;const r=this.table.state.assets[n];await this.lobby.link.sendAsset(await s.arrayBuffer(),{h:n,mime:(r==null?void 0:r.mime)||s.type},e)}}leave(){this.unsubscribe()}}class Uy{constructor({lobby:t,table:e,library:n,onRoster:s,onGmLeft:r,onProgress:a,onHydrated:o,onFx:l}){this.lobby=t,this.table=e,this.library=n,this.onProgress=a,this.onHydrated=o,this.onFx=l,this.hydrated=!1,this.asked=new Set,this.syncing=!1,this.patches=new Map,this.patchTimer=0,t.listen({onRoster:s,onGmLeft:r,onMessage:c=>this.receive(c),onAsset:(c,f)=>this.adopt(c,f),onAssetProgress:(c,f)=>this.progress(c,f)})}receive(t){var e,n;if(t.t==="fx")return(e=this.onFx)==null?void 0:e.call(this,t);if(t.t==="doc"){const s=Lx(t);if(!s)return;this.table.load(s),this.hydrated=!0,this.syncing=!1,(n=this.onHydrated)==null||n.call(this),this.fetchMissing()}else if(t.t==="op"){const s=Ix(t);if(!s||!this.hydrated||this.syncing||s.seq<=this.table.seq)return;if(s.seq!==this.table.seq+1)return this.resync();if(this.table.dispatch(s.cmd,{record:!1}),this.table.seq!==s.seq)return this.resync();this.fetchMissing()}}resync(){this.syncing=!0,this.lobby.link.send({t:"sync"},this.lobby.gmId)}async fetchMissing(){const t=this.library.missing(this.table.state).filter(n=>!this.asked.has(n));if(!t.length)return;for(const n of t)this.asked.add(n);const e=await this.library.restore(t);for(const n of t)e.includes(n)||this.asked.delete(n);for(let n=0;n<e.length;n+=vn.need)this.lobby.link.send({t:"need",h:e.slice(n,n+vn.need)},this.lobby.gmId)}async adopt(t,e){var s;const n=e==null?void 0:e.h;if(!(!Sr(n)||!this.asked.has(n))){this.asked.delete(n);try{const r=await Tu(t);if(!r||await Ir(r)!==n){console.warn("[session] asset did not match its hash",n);return}await this.library.putBytes(n,new Blob([r],{type:Au(e)}))}finally{this.asked.size||(s=this.onProgress)==null||s.call(this,null,"")}}}request(t){const e=[];for(const n of t)n[0]==="tok.patch"&&typeof n[1]=="string"?this.patches.set(n[1],{...this.patches.get(n[1]),...n[2]}):e.push(n);e.length?(this.flushPatches(),this.lobby.link.send({t:"req",c:e},this.lobby.gmId)):this.patches.size&&!this.patchTimer&&(this.patchTimer=setTimeout(()=>this.flushPatches(),Iy))}flushPatches(){if(clearTimeout(this.patchTimer),this.patchTimer=0,!this.patches.size)return;const t=[...this.patches].map(([e,n])=>["tok.patch",e,n]);this.patches.clear(),this.lobby.link.send({t:"req",c:t},this.lobby.gmId)}async upload(t,e){if(await this.library.put(t),this.table.state.assets[t.hash])return this.request(e);await this.lobby.link.sendAsset(await t.blob.arrayBuffer(),{h:t.hash,mime:t.mime,req:e},this.lobby.gmId)}progress(t,e){var r,a;const n=e==null?void 0:e.h;if(!Sr(n)||!this.asked.has(n))return;const s=((r=this.table.state.assets[n])==null?void 0:r.name)||"art";(a=this.onProgress)==null||a.call(this,Math.max(0,Math.min(1,t)),s)}leave(){}}async function Tu(i){return i instanceof ArrayBuffer?i:i instanceof Blob?i.arrayBuffer():ArrayBuffer.isView(i)?i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength):null}function Au(i){const t=i==null?void 0:i.mime;return typeof t=="string"&&/^image\/[\w.+-]{1,32}$/.test(t)?t:"image/webp"}const W=new nl,$e=new W_;let me="local";W.dispatch(["peer.join",yr(me,"You",{role:Je})],{record:!1});W.dispatch(["scene.add",{name:"Table"}],{record:!1});const Lo=document.getElementById("chrome"),pe=w("div",{id:"busy",hidden:!0}),_s=w("div",{id:"toast",hidden:!0});document.getElementById("stage").append(pe);document.body.append(_s);let eh=0;function ge(i,t="info"){_s.textContent=i,_s.dataset.kind=t,_s.hidden=!1,clearTimeout(eh),eh=setTimeout(()=>{_s.hidden=!0},5200)}let Qe=null,_e=new Set;const cn=i=>i?te?W.dispatch(i):(se==null||se.request([i]),null):null,Ru=i=>te||!!i&&i.owner===me,pn=new du({onCommand:cn,onImportMap:i=>Bu(i),onPickMap:i=>$y(i),onImportToken:i=>zu(i),onAddBlank:()=>Hu({}),onFit:()=>xt.fit(W.state),onDetect:()=>qy(),onClose:()=>ae.show(null)}),ae=new Kx([{id:"map",label:"Map",key:"M",panel:!0},{id:"grid",label:"Grid",key:"G",panel:!0},{id:"tokens",label:"Add tokens",key:"T",panel:!0},{id:"fx",label:"FX — weather, darkness, lightning",key:"X",panel:!0},{id:"scenes",label:"Scenes",key:"N",panel:!0},"gap",{id:"undo",label:"Undo",key:"Ctrl+Z",run:()=>W.undo()},{id:"redo",label:"Redo",key:"Ctrl+Shift+Z",run:()=>W.redo()},{id:"fit",label:"Fit the map to the view",key:"F",run:()=>xt.fit(W.state)},{id:"save",label:"Save the table to a file",run:()=>Zy()},"sep",{id:"music",label:"Music for the table",panel:!0},{id:"voice",label:"Voice",panel:!0},{id:"invite",label:"Invite players",key:"I",panel:!0},{id:"leave",label:"Leave game",run:()=>ke==null?void 0:ke.leave()}],{onOpen:i=>pn.show(i)});document.body.prepend(ae.root);const il=new Jx({onPlay:i=>Pu(i),onAmbience:i=>{W.scene&&cn(["scene.fx",W.scene.id,i])}});pn.addSection(il.root);const Cu=new Qx({onCommand:cn,onGo:i=>nh(i),onNew:()=>{const i=new Set(W.state.sceneOrder);cn(["scene.add",{name:`Scene ${W.state.sceneOrder.length+1}`}]);const t=W.state.sceneOrder.find(e=>!i.has(e));t&&nh(t)}});pn.addSection(Cu.root);function nh(i){!W.scene||W.scene.id===i||!W.state.scenes[i]||cn(["scene.go",i])}const pi=new fy,sl=[new Mu({ambience:pi,label:"Your ambience volume"})];il.root.append(sl[0].root);function Pu(i){Lu(i),qt&&te&&qt.link.send({t:"fx",k:i})}function Lu(i){var t;xt.fx.play(i),i==="lightning"&&pi.thunder((t=W.scene)==null?void 0:t.fx)}const Ny=400;let ih=0;function Iu(i,t,e){const n=performance.now();n-ih<Ny||(ih=n,i=mn(i),t=mn(t),xt.fx.ping(i,t,Du(me)),qt&&(te?qt.link.send({t:"fx",k:"ping",x:i,y:t,by:me,pull:!!e}):se==null||se.request([["fx.ping",i,t]])))}function sh(i){if(i.k==="ping"){if(i.by===me||!Number.isFinite(i.x)||!Number.isFinite(i.y))return;xt.fx.ping(i.x,i.y,Du(i.by)),i.pull&&xt.lookAt(i.x,i.y);return}["lightning","shake","damage"].includes(i.k)&&Lu(i.k)}function Du(i){var t;return is(((t=W.state.roster[i])==null?void 0:t.color)??Tt.tokens.defaultBorder)}ae.setVisible("invite",!1);ae.setVisible("voice",!1);ae.setVisible("music",!1);ae.setVisible("leave",!1);const Fy=["map","grid","tokens","fx","scenes","undo","redo","fit","save","music"],ky={KeyM:"map",KeyG:"grid",KeyT:"tokens",KeyX:"fx",KeyN:"scenes",KeyI:"invite"},hi=new _x({onCommand:cn,onSizeCommitted:i=>Nu(i),onDelete:()=>ku()});Lo.append(hi.root);document.getElementById("stage").append(pn.root);iv().then(i=>pn.setLibrary(i));const xt=new ax({canvas:document.getElementById("canvas"),overlayEl:document.getElementById("overlay"),library:$e,handlers:{onResize:(i,t)=>cn(["tok.patch",i,{size:mn(t)}]),onResizeEnd:i=>Nu(i)}});xt.fit(W.state);const rl=()=>!te&&xt.fx.locked,Oy=new dx(xt,{getState:()=>W.state,locked:rl,canGrab:i=>Ru(i),onSelect:i=>jn(i),isSelected:i=>_e.has(i),hasSelection:()=>_e.size>0,groupOf:i=>_e.has(i)?[..._e]:[i],onToggle:i=>Gy(i),onDropGroup:i=>Fu(i.map(t=>Lr(W.state,t.id,t.x,t.y))),onContext:i=>jn((i==null?void 0:i.id)??null),onPing:(i,t,e)=>Iu(i,t,e),onTurn:(i,t)=>{te||zy(i,t),cn(["tok.patch",i,{facing:t}])}}),br=new Map,Uu=2500;function By(i,t,e){br.set(i,{x:t,y:e,until:performance.now()+Uu}),xt.ghosts.set(i,{x:t,y:e})}const Er=new Map;function zy(i,t){Er.set(i,{facing:t,until:performance.now()+Uu}),xt.turns.set(i,t)}function Hy(i){var t,e;for(const[n,s]of br){const r=(t=W.scene)==null?void 0:t.tokens[n];(!r||r.x===s.x&&r.y===s.y||i>s.until)&&(br.delete(n),xt.ghosts.delete(n))}for(const[n,s]of Er){const r=(e=W.scene)==null?void 0:e.tokens[n];(!r||typeof r.facing=="number"&&Math.abs(r.facing-s.facing)<.001||i>s.until)&&(Er.delete(n),xt.turns.delete(n))}}function Nu(i){var e;const t=(e=W.scene)==null?void 0:e.tokens[i];t&&cn(Lr(W.state,i,t.x,t.y))}function jn(i){Qe=i,_e=new Set(i?[i]:[]),al()}function Gy(i){_e.has(i)?(_e.delete(i),Qe===i&&(Qe=[..._e].pop()??null)):(_e.add(i),Qe=i),al()}function al(){xt.selectedIds=_e,xt.selectedId=_e.size===1?Qe:null}function Vy(){var e;const i=((e=W.scene)==null?void 0:e.tokens)||{};let t=!1;for(const n of _e)i[n]||(_e.delete(n),t=!0);Qe&&!i[Qe]&&(Qe=[..._e].pop()??null,t=!0),t&&al()}function Fu(i){const t=i.filter(Boolean);if(t.length){if(te){t.length===1?W.dispatch(t[0]):W.batch(t);return}for(const[,e,n,s]of t)By(e,n,s);se==null||se.request(t)}}function Io(){var t;const i=((t=W.scene)==null?void 0:t.tokens)||{};return[..._e].map(e=>i[e]).filter(e=>e&&Ru(e))}function ku(){const i=Io().map(t=>["tok.del",t.id]);i.length&&(te?i.length===1?W.dispatch(i[0]):W.batch(i):se==null||se.request(i),jn(null))}const ol=new qx({onRoll:i=>Ur(i),onError:i=>ge(i,"error")}),ll=new $x({onSay:i=>Wy(i),onRoll:i=>Ur(i),onError:i=>ge(i,"error")}),cl=new ty({onRoll:i=>Ur(i)});document.getElementById("stage").append(w("div",{id:"dice"},ll.root,w("div",{class:"dice-row"},ol.root,cl.root)));function Wy(i){if(!te)return se==null?void 0:se.request([["chat.say",i]]);W.say(me,i,Date.now())}function Ur(i){var e;let t;try{t=Cr(i)}catch(n){return ge(n.message,"error")}if(t.note&&cl.add(t.note,$h(t.terms)),!te)return se==null?void 0:se.request([["dice.roll",i]]);try{if(ol.hidden){const n=W.rollSecret(i,me,Date.now());xt.dice.play(n,((e=W.state.roster[me])==null?void 0:e.color)??Tt.tokens.defaultBorder),ll.refresh(W.feedWithSecrets(),W.state.roster),qu();return}W.rollDice(i,me)}catch(n){ge(n.message,"error")}}const Do=new Set;function Ou(){for(const i of W.rolls())Do.add(i.id)}function Xy(){var e;const i=W.rolls().filter(n=>!Do.has(n.id));if(!i.length)return;for(const n of i)Do.add(n.id);const t=i[i.length-1];xt.dice.play(t,((e=W.state.roster[t.by])==null?void 0:e.color)??Tt.tokens.defaultBorder)}async function Bu(i){pe.hidden=!1,pe.textContent=`Reading ${i.name}…`;try{const t=await iu(i);await $e.put(t);const e=W.state.activeScene,n=[["asset.add",ru(t)],["scene.map",e,t.hash,t.w,t.h]],s=du.gridGuessFor(t.name,t.w,t.h),r=t.detected,a=r&&r.confidence>=Cs.minConfidence;if(s?n.push(["scene.grid",e,{unitPx:s.unitPx,ox:s.ox,oy:s.oy}]):a&&n.push(["scene.grid",e,{unitPx:mn(r.unitPx),ox:mn(r.ox),oy:mn(r.oy)}]),W.batch(n),xt.fit(W.state),s){const o=r&&Math.abs(r.unitPx-s.unitPx)/s.unitPx<.03;ge(`${t.name} — grid from the filename: ${s.cols}×${s.rows} at ${s.unitPx}px.`+(o?" Measuring the image agrees.":""))}else a?ge(`${t.name} — grid measured from the image: ${r.unitPx.toFixed(1)}px (${r.agreed} of ${r.readings} readings agreed). Nudge the offset if it sits wrong.`):(ge(`${t.name} loaded. No grid found in the image — set pixels per cell by hand, or press Detect.`),ae.show("grid"))}catch(t){ge(t.message||"Could not load that image.","error")}finally{pe.hidden=!0}}async function qy(){const i=W.scene;if(!(i!=null&&i.map))return ge("Load a map first.");pe.hidden=!1,pe.textContent="Measuring the grid…";try{const t=await $e.bitmap(i.map);if(!t)throw new Error("That map is not loaded.");const e=await su(t,i.artW);if(!e||e.confidence<Cs.minConfidence)return ge(e?`Nothing convincing — the best fit was ${e.unitPx.toFixed(1)}px, and only ${e.agreed} of ${e.readings} readings agreed. Left alone.`:"Could not measure that image.");W.dispatch(["scene.grid",i.id,{unitPx:mn(e.unitPx),ox:mn(e.ox),oy:mn(e.oy)}]),ge(`Measured ${e.unitPx.toFixed(1)}px per cell — ${e.agreed} of ${e.readings} readings agreed.`)}catch(t){ge(t.message||"Could not measure that image.","error")}finally{pe.hidden=!0}}async function $y(i){pe.hidden=!1,pe.textContent=`Fetching ${i.name}…`;try{await Bu(await nv(i.url,i.name))}catch(t){ge(t.message||`Could not load ${i.name}.`,"error")}finally{pe.hidden=!0}}async function zu(i){pe.hidden=!1;let t=0;for(const e of i){pe.textContent=`Reading ${e.name}… (${++t}/${i.length})`;try{const n=await iu(e),s=e.name.replace(/\.[a-z0-9]+$/i,"").slice(0,48),r=[["asset.add",ru(n)],Vu({asset:n.hash,name:s,border:te?Tt.tokens.defaultBorder:tM()},t-1)];te?(await $e.put(n),W.batch(r)):(pe.textContent=`Sending ${e.name} to the GM…`,await se.upload(n,r))}catch(n){ge(n.message||`Could not load ${e.name}.`,"error")}}pe.hidden=!0}function Hu(i){te||Gu();const t=cn(Vu(i,0));t&&jn(t[1])}let Fi=null;function Gu(){var t;const i=Object.values(((t=W.scene)==null?void 0:t.tokens)||{}).filter(e=>e.owner===me);Fi={known:new Set(i.map(e=>e.id)),until:performance.now()+5e3}}function Yy(i){var e;if(!Fi)return;const t=Object.values(((e=W.scene)==null?void 0:e.tokens)||{}).filter(n=>n.owner===me&&!Fi.known.has(n.id));t.length?(jn(t[t.length-1].id),Fi=null):i>Fi.until&&(Fi=null)}function Vu(i,t){var f;const e=xt.cam.camera.position,n=(f=W.scene)==null?void 0:f.grid,s=i.size??Tt.tokens.defaultSize,r=Math.max(1,s),a=u=>el(u,-e.y,n,s).map(mn);let o=e.x+t*r,[l,c]=a(o);for(let u=0;u<24&&Ui(W.state,l,c);u++)o+=r,[l,c]=a(o);return["tok.add",{border:Tt.tokens.defaultBorder,owner:te?"":me,...i,size:s,x:l,y:c}]}let qt=null,ke=null,Me=null,Uo=null,Ie=null,xs=null,ys=null;function jy(){xs==null||xs.render(),ys==null||ys.render()}function Wu(){Me&&(Uo.render(),ke==null||ke.setVoice(Me.status()))}function rh(i){ke.render(i),Me&&(Me.announce(),Wu())}let se=null,te=!0;new URLSearchParams(location.search).has("offline")||new kx({onEnter:i=>Ky(i),onResume:async i=>{const t=await tu(i);if(!t)throw new Error("That table is no longer saved here.");return await dl(t),t},onOpenFile:async i=>$u(i)});addEventListener("pagehide",()=>{Ie==null||Ie.leave(),Me==null||Me.leave(),se==null||se.leave(),qt==null||qt.leave()});function Ky(i){qt=i,te=qt.isGm;const t=me;if(me=qt.selfId,W.dispatch(["peer.join",yr(me,qt.name,{role:te?Je:$n})],{record:!1}),te){for(const n of Ay(W.state,me))W.dispatch(n,{record:!1});Nr=qt.code}W.state.roster[t]&&t!==me&&W.dispatch(["peer.part",t],{record:!1}),cl.useTable(qt.code),ke=new Vx(qt,{onInvite:()=>ae.show("invite"),onArmLeave:n=>{const s=te?"The table is saved; resume it from the start screen.":"";ae.setArmed("leave",n,n?`Click again to leave. ${s}`.trim():"Leave game"),n&&ge(`Click Leave again to go. ${s}`.trim())}}),Lo.prepend(ke.root),pn.addSection(ke.invite),ae.setVisible("invite",!0),ae.setVisible("leave",!0),Me=new iy({lobby:qt,onChange:()=>Wu()}),Uo=new ry({voice:Me,roster:()=>qt.roster()}),pn.addSection(Uo.root),ae.setVisible("voice",!0),Ie=new yu({lobby:qt,voice:Me,onChange:()=>jy()}),ys=new dy({music:Ie}),ke.root.append(ys.root);const e=new Mu({ambience:pi});if(sl.push(e),ke.root.append(e.root),te&&(xs=new uy({music:Ie}),pn.addSection(xs.root),ae.setVisible("music",!0)),ke.render(qt.roster()),te){se=new Dy({lobby:qt,table:W,library:$e,onSeat:n=>Jy(n),onFx:n=>sh(n),onRoster:n=>{rh(n),ah(n)}}),ah(qt.roster());return}ol.setGm(!1);for(const n of Fy)ae.setVisible(n,!1);ae.show(null),jn(null),Lo.insertBefore(new Wx({onImportToken:n=>{Gu(),zu(n)},onAddBlank:()=>Hu({})}).root,hi.root),hi.setPlayer({onColor:n=>se.request([["peer.color",n]])}),pe.hidden=!1,pe.textContent="Fetching the table…",se=new Uy({lobby:qt,table:W,library:$e,onRoster:n=>rh(n),onGmLeft:()=>{ke.gmLeft(),ge("The GM has left the room.","error")},onFx:n=>sh(n),onHydrated:()=>{Ou(),pe.textContent==="Fetching the table…"&&(pe.hidden=!0)},onProgress:(n,s)=>{pe.hidden=n===null,n!==null&&(pe.textContent=`Receiving ${s}… ${Math.round(n*100)}%`)}})}function ah(i){const t=new Set(i.map(e=>e.peerId));for(const[e,n]of Object.entries(W.state.roster))!t.has(e)&&!n.away&&W.dispatch(["peer.join",{...n,away:!0}],{record:!1});for(const e of i){const n=W.state.roster[e.peerId];(!n||n.away||n.name!==e.name||n.color!==e.color||n.role!==e.role)&&W.dispatch(["peer.join",{...e,tokens:(n==null?void 0:n.tokens)??[]}],{record:!1})}}let wr=null,Nr=null,No=0;function hl(){const i=W.scene;return!!i&&(!!i.map||Object.keys(i.tokens).length>0||W.feed().length>0)}function Xu(){var t;const i=(t=W.scene)!=null&&t.map?W.state.assets[W.scene.map]:null;if(i!=null&&i.name){const e=i.name.replace(/\.[a-z0-9]+$/i,"").replace(/\((?:\d+x\d+|free)\)/gi,"").replace(/[_\s]+/g," ").trim();if(e)return e.slice(0,80)}return`Table of ${new Date().toLocaleDateString([],{day:"numeric",month:"short"})}`}function Fr(){var i;return wr||(wr=`t_${Date.now().toString(36)}_${W.seed.toString(36)}`),{id:wr,name:Xu(),code:Nr,savedAt:Date.now(),tokens:Object.keys(((i=W.scene)==null?void 0:i.tokens)||{}).length,state:W.snapshot(),seed:W.seed,rng:W.rng.getState(),said:W.said,secrets:W.secrets,secretRng:W.secretRng.getState()}}function qu(){!te||!hl()||(clearTimeout(No),No=setTimeout(()=>eu(Fr()),700))}function ul(){return clearTimeout(No),te&&hl()?eu(Fr()):Promise.resolve(!1)}async function dl(i){W.load(i.state),Number.isInteger(i.seed)&&(W.seed=i.seed),i.rng?W.rng.setState(i.rng):W.rng.seed(W.seed),W.said=i.said||0,W.restoreSecrets(i.secrets,i.secretRng),wr=i.id,Nr=i.code||null,await $e.restore($e.missing(W.state)),Ou(),jn(null),Fo=null,xt.fit(W.state)}async function $u(i){const{record:t,images:e,skipped:n}=await Sy(await i.text());for(const s of e)await $e.putBytes(s.hash,s.blob);return t.id=null,await dl(t),await ul(),n&&ge(n===1?"One image in that file did not match its name and was left out.":`${n} images in that file did not match their names and were left out.`,"error"),t}async function Zy(){if(!hl())return ge("Nothing on the table to save yet.");const i=Fr(),t=await Eu(i,$e),e=w("a",{href:URL.createObjectURL(t),download:`${i.name}.vtt`});document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),1e4),ge(`Saved ${i.name}.vtt — open it from the start screen to carry on anywhere.`)}function Jy(i){const t=qt==null?void 0:qt.members.get(i),e=t&&Ty(W.state,t.name,i);if(e){qt.setColor(i,e.color);for(const n of wu(W.state,e.peerId,i))W.dispatch(n,{record:!1});ge(`${t.name} is back, with their tokens.`)}}addEventListener("pagehide",()=>{ul()});const Qy=new bx({panLeft:["KeyA"],panRight:["KeyD"],panUp:["KeyW"],panDown:["KeyS"]},(i,t)=>{var r;if(rl())return!1;if(i==="KeyF")return xt.fit(W.state),!0;if(i==="Escape"&&ae.open)return ae.show(null),!0;if(i==="Escape"&&_e.size)return jn(null),!0;const e=ky[i];if(e&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&(te||e==="invite")&&!((r=ae.buttons.get(e))!=null&&r.hidden))return ae.toggle(e),!0;if((t.ctrlKey||t.metaKey)&&i==="KeyZ")return te?(t.shiftKey?W.redo():W.undo(),!0):!1;if(!Io().length)return!1;if(i==="Delete"||i==="Backspace")return ku(),!0;const n=(i==="ArrowRight"?1:0)-(i==="ArrowLeft"?1:0),s=(i==="ArrowDown"?1:0)-(i==="ArrowUp"?1:0);return!n&&!s?!1:(Fu(Io().map(a=>Lr(W.state,a.id,a.x+n,a.y+s))),!0)}),fs={x:0,y:0},oh=new Qu({hz:Tt.sim.hz});let lh=-1,Fo=null,Pa=!1,ch=W.state.activeScene;function Yu(i){var n,s,r,a;requestAnimationFrame(Yu);const{steps:t,frameDt:e}=oh.advance(i);(br.size||Er.size)&&Hy(i);for(let o=0;o<t;o++)W.step(oh.dt);if(Qy.vector("panLeft","panRight","panUp","panDown",fs),rl())Oy.cancel();else if(fs.x||fs.y){const o=xt.cam.viewUnits*e;xt.cam.panBy(fs.x*o,fs.y*o)}if(W.seq!==lh){lh=W.seq,W.state.activeScene!==ch&&(ch=W.state.activeScene,xt.fit(W.state)),Yy(i),qu(),Xy(),ll.refresh(W.feedWithSecrets(),W.state.roster),ae.setEnabled("undo",W.undoStack.length>0),ae.setEnabled("redo",W.redoStack.length>0),pn.refresh(W.state),il.refresh((n=W.scene)==null?void 0:n.fx),Cu.refresh(W.state);for(const o of sl)o.render(((r=(s=W.scene)==null?void 0:s.fx)==null?void 0:r.weather)||null);Vy(),hi.refresh(W.state,Qe,_e.size),Pa=!0}else(hi.id!==Qe||hi.count!==_e.size)&&hi.refresh(W.state,Qe,_e.size);if(!te){const o=W.scene,l=o?`${o.id}:${o.map}:${o.artW}x${o.artH}`:"";l!==Fo&&(Fo=l,xt.fit(W.state))}xt.frame(W.state,e,{isGm:te,self:me}),pi.update((a=W.scene)==null?void 0:a.fx),pi.setCurtain(1-(xt.fx.out??0)),Pa&&(Pa=!1,$e.trimBitmaps(W.state))}requestAnimationFrame(Yu);window.__vtt={tokens:()=>{var i;return Object.values(((i=W.scene)==null?void 0:i.tokens)||{})},cam:()=>({x:xt.cam.camera.position.x,y:xt.cam.camera.position.y,viewUnits:xt.cam.viewUnits}),seq:()=>W.seq,dispatch:i=>cn(i),moveTo:(i,t,e)=>Lr(W.state,i,t,e),origins:()=>xt.originViews.size,zoomTo:(i,t,e)=>{xt.cam.viewUnits=e,xt.cam.apply(),xt.cam.camera.position.set(i,-t,10),xt.cam.clamp()},bounds:()=>{const i=W.scene;return i?[i.artW,i.artH,i.grid.unitPx]:null},selected:()=>Qe,selection:()=>[..._e],saveNow:()=>ul(),tableRecord:()=>({id:wr,code:Nr,name:Xu()}),resumeTable:async i=>dl(await tu(i)),exportText:async()=>(await Eu(Fr(),$e)).text(),importText:async i=>(await $u(new File([i],"table.vtt"))).name,rolls:()=>W.rolls(),feed:()=>W.feed(),darkAt:(i,t)=>{const e=xt.fx.toScreen(i,t),n=xt.fx.dark,s=n.width/xt.fx.rect.width;return n.getContext("2d").getImageData(Math.round(e.x*s),Math.round(e.y*s),1,1).data[3]/255},fx:()=>{var i;return{scene:((i=W.scene)==null?void 0:i.fx)??null,weather:xt.fx.weather,particles:xt.fx.parts.length,shade:xt.fx.darkShown,out:xt.fx.out,cover:xt.fx.cover.dataset.kind,pings:xt.fx.pings.length,flash:xt.fx.flash.classList.contains("fx-go")?xt.fx.flash.dataset.kind:null,shaking:document.getElementById("canvas").classList.contains("fx-shake")}},playFx:i=>Pu(i),ambience:()=>pi.status(),ambienceEngine:()=>pi,ping:(i,t,e)=>Iu(i,t,e),music:()=>Ie?{sharing:Ie.sharing,source:Ie.source,playing:Ie.playing,hearing:!!Ie.audio,volume:Ie.volume,muted:Ie.muted,error:Ie.error}:null,shareTone:async()=>{const i=new AudioContext,t=i.createOscillator(),e=i.createMediaStreamDestination();t.connect(e),t.start();const n=navigator.mediaDevices.getDisplayMedia;navigator.mediaDevices.getDisplayMedia=async()=>e.stream;try{return await Ie.share()}finally{navigator.mediaDevices.getDisplayMedia=n}},voice:()=>Me?{lastChime:Me.lastChime??null,chimes:Me.chimes,on:Me.on,muted:Me.muted,live:Me.live,peers:[...Me.peers].map(([i,t])=>({id:i,on:t.on,muted:t.muted,playing:!!t.audio,speaking:t.speaking,volume:t.volume})),silenced:[...Me.silenced]}:null,diceShown:()=>xt.dice.current?{id:xt.dice.current.id,dice:xt.dice.current.dice.length,settled:xt.dice.current.settledAt!==null}:null,roll:i=>Ur(i),diceReadout:()=>xt.dice.readout(),openTool:i=>i==="all"?pn.show("all"):ae.show(i),room:()=>qt?{code:qt.code,role:qt.role,self:me,roster:qt.roster()}:null,scenes:()=>({active:W.state.activeScene,order:[...W.state.sceneOrder],names:W.state.sceneOrder.map(i=>W.state.scenes[i].name)}),scene:()=>{const i=W.scene;return i?{map:i.map,artW:i.artW,grid:{...i.grid}}:null},hasArt:i=>$e.has(i),mapShown:()=>!!xt.map.texture,roster:()=>Object.values(W.state.roster),hovered:()=>xt.hoveredId,drawn:i=>{var e;const t=(e=xt.views.get(i))==null?void 0:e.root.position;return t?[t.x,-t.y]:null},screenOf:(i,t)=>{const e=xt.cam.toNdc(i,-t);return[xt.rect.left+(e.x*.5+.5)*xt.rect.width,xt.rect.top+(1-(e.y*.5+.5))*xt.rect.height]}};function mn(i){return Math.round(i*100)/100}function tM(){var i;return((i=qt==null?void 0:qt.roster().find(t=>t.peerId===me))==null?void 0:i.color)??Tt.tokens.defaultBorder}export{mi as Q,eM as r,Lc as s,Fv as t};
