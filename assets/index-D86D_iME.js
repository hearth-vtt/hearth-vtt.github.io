(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class $u{constructor({hz:t=60,maxFrame:e=.25,maxSteps:n=5}={}){this.hz=t,this.dt=1/t,this.maxFrame=e,this.maxSteps=n,this.acc=0,this.last=0,this.seeded=!1,this.dropped=0}advance(t){if(!this.seeded)return this.seeded=!0,this.last=t,{steps:0,frameDt:0,alpha:0};const e=Math.min(this.maxFrame,(t-this.last)/1e3);this.last=t,this.acc+=e;let n=Math.floor(this.acc/this.dt);return n>this.maxSteps&&(this.dropped+=n-this.maxSteps,n=this.maxSteps,this.acc=n*this.dt),this.acc-=n*this.dt,{steps:n,frameDt:e,alpha:this.acc/this.dt}}reset(){this.acc=0,this.seeded=!1,this.dropped=0}}function Yu(i,t,e){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e}class Br{constructor(t=1){this.seed(t)}seed(t){let e=t>>>0;const n=()=>{e=e+2654435769>>>0;let s=e;return s=Math.imul(s^s>>>16,569420461),s=Math.imul(s^s>>>15,1935289751),(s^s>>>15)>>>0};return this.s0=n(),this.s1=n(),this.s2=n(),this.s3=n(),this.s0|this.s1|this.s2|this.s3||(this.s0=1),this.count=0,this}next(){const t=(s,r)=>(s<<r|s>>>32-r)>>>0,e=Math.imul(t(Math.imul(this.s1,5)>>>0,7),9)>>>0,n=this.s1<<9>>>0;return this.s2=(this.s2^this.s0)>>>0,this.s3=(this.s3^this.s1)>>>0,this.s1=(this.s1^this.s2)>>>0,this.s0=(this.s0^this.s3)>>>0,this.s2=(this.s2^n)>>>0,this.s3=t(this.s3,11),this.count++,e}float(){return this.next()/4294967296}range(t,e){return t+this.float()*(e-t)}int(t,e){return t+Math.floor(this.float()*(e-t+1))}chance(t){return this.float()<t}pick(t){return t[Math.floor(this.float()*t.length)]}weighted(t){let e=0;for(const[,s]of t)e+=s;if(e<=0)return null;let n=this.float()*e;for(const[s,r]of t)if(n-=r,n<=0)return s;return t[t.length-1][0]}getState(){return{s0:this.s0,s1:this.s1,s2:this.s2,s3:this.s3,count:this.count}}setState(t){return this.s0=t.s0,this.s1=t.s1,this.s2=t.s2,this.s3=t.s3,this.count=t.count??0,this}}function xl(i,...t){let e=i>>>0;for(const n of t)e=Math.imul(e^n>>>0,625341585)>>>0,e=(e^e>>>13)>>>0;return e>>>0}class ju{constructor(){this.local=[],this.remote=[]}on(t){return this.local.push(t),()=>this.off(this.local,t)}onRemote(t){return this.remote.push(t),()=>this.off(this.remote,t)}off(t,e){const n=t.indexOf(e);n>=0&&t.splice(n,1)}emit(t,e){for(const n of this.local)n(t,e);for(const n of this.remote)n(t,e)}emitLocal(t,e){for(const n of this.local)n(t,e)}emitRemote(t,e){for(const n of this.remote)n(t,e)}clear(){this.local.length=0,this.remote.length=0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="169",Ku=0,yl=1,Zu=2,rh=1,Ju=2,wn=3,Xn=0,Be=1,Tn=2,Gn=0,ki=1,Ml=2,Sl=3,bl=4,Qu=5,ai=100,td=101,ed=102,nd=103,id=104,sd=200,rd=201,ad=202,od=203,Ca=204,Pa=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,La=0,Ia=1,Da=2,Gi=3,Ua=4,Na=5,Fa=6,ka=7,ah=0,_d=1,vd=2,Vn=0,xd=1,yd=2,Md=3,Sd=4,bd=5,Ed=6,wd=7,oh=300,Vi=301,Wi=302,Oa=303,Ba=304,Er=306,za=1e3,li=1001,Ha=1002,Ze=1003,Td=1004,Ls=1005,qe=1006,zr=1007,Rn=1008,In=1009,lh=1010,ch=1011,ys=1012,Fo=1013,hi=1014,Cn=1015,bs=1016,ko=1017,Oo=1018,Xi=1020,hh=35902,uh=1021,dh=1022,on=1023,fh=1024,ph=1025,Oi=1026,qi=1027,mh=1028,Bo=1029,gh=1030,zo=1031,Ho=1033,nr=33776,ir=33777,sr=33778,rr=33779,Ga=35840,Va=35841,Wa=35842,Xa=35843,qa=36196,$a=37492,Ya=37496,ja=37808,Ka=37809,Za=37810,Ja=37811,Qa=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,ar=36492,co=36494,ho=36495,_h=36283,uo=36284,fo=36285,po=36286,Ad=3200,Rd=3201,vh=0,Cd=1,Hn="",Fe="srgb",Yn="srgb-linear",Go="display-p3",wr="display-p3-linear",ur="linear",ne="srgb",dr="rec709",fr="p3",gi=7680,El=519,Pd=512,Ld=513,Id=514,xh=515,Dd=516,Ud=517,Nd=518,Fd=519,wl=35044,Tl="300 es",Pn=2e3,pr=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,mo=180/Math.PI;function Es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function kd(i,t){return(i%t+t)%t}function Gr(i,t,e){return(1-e)*i+e*t}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],d=s[3],m=s[6],M=s[1],y=s[4],b=s[7],I=s[2],R=s[5],A=s[8];return r[0]=a*_+o*M+l*I,r[3]=a*d+o*y+l*R,r[6]=a*m+o*b+l*A,r[1]=c*_+h*M+u*I,r[4]=c*d+h*y+u*R,r[7]=c*m+h*b+u*A,r[2]=f*_+p*M+g*I,r[5]=f*d+p*y+g*R,r[8]=f*m+p*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Ft;function yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){const i=mr("canvas");return i.style.display="block",i}const Al={};function or(i){i in Al||(Al[i]=!0,console.warn(i))}function Bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Rl=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cl=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ss={[Yn]:{transfer:ur,primaries:dr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:ne,primaries:dr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[wr]:{transfer:ur,primaries:fr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Cl),fromReference:i=>i.applyMatrix3(Rl)},[Go]:{transfer:ne,primaries:fr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cl),fromReference:i=>i.applyMatrix3(Rl).convertLinearToSRGB()}},Gd=new Set([Yn,wr]),Kt={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ss[t].toReference,s=ss[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ss[i].primaries},getTransfer:function(i){return i===Hn?ur:ss[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ss[t].luminanceCoefficients)}};function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class Vd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=mr("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wd=0;class Mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xr(s[a].image)):r.push(Xr(s[a]))}else r=Xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xd=0;class Ee extends Ki{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=li,s=li,r=qe,a=Rn,o=on,l=In,c=Ee.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Es(),this.name="",this.source=new Mh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case za:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case za:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=oh;Ee.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],d=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(p+1)/2,I=(m+1)/2,R=(h+f)/4,A=(u+_)/4,D=(g+d)/4;return y>b&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=A/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=D/r),this.set(n,s,r,e),this}let M=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends qd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sh extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let d=1-o;const m=l*f+c*p+h*g+u*_,M=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const I=Math.sqrt(y),R=Math.atan2(I,m*M);d=Math.sin(d*R)/I,o=Math.sin(o*R)/I}const b=o*M;if(l=l*d+f*b,c=c*d+p*b,h=h*d+g*b,u=u*d+_*b,d===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new U,Pl=new pi;class ws{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Ds.subVectors(this.max,rs),vi.subVectors(t.a,rs),xi.subVectors(t.b,rs),yi.subVectors(t.c,rs),Un.subVectors(xi,vi),Nn.subVectors(yi,xi),Zn.subVectors(vi,yi);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!$r(e,vi,xi,yi,Ds)||(e=[1,0,0,0,1,0,0,0,1],!$r(e,vi,xi,yi,Ds))?!1:(Us.crossVectors(Un,Nn),e=[Us.x,Us.y,Us.z],$r(e,vi,xi,yi,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new U,new U,new U,new U,new U,new U,new U,new U],en=new U,Is=new ws,vi=new U,xi=new U,yi=new U,Un=new U,Nn=new U,Zn=new U,rs=new U,Ds=new U,Us=new U,Jn=new U;function $r(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);const o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yd=new ws,as=new U,Yr=new U;class Vo{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(Yr)),this.expandByPoint(as.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new U,jr=new U,Ns=new U,Fn=new U,Kr=new U,Fs=new U,Zr=new U;class jd{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jr.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(jr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ns),o=Fn.dot(this.direction),l=-Fn.dot(Ns),c=Fn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jr).addScaledVector(Ns,f),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),Fs.subVectors(n,t),Zr.crossVectors(Kr,Fs);let a=this.direction.dot(Zr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);const l=o*this.direction.dot(Fs.crossVectors(Fn,Fs));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(Fn));if(c<0||l+c>a)return null;const h=-o*Fn.dot(Zr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,d){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,d)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Zd)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),kn.crossVectors(n,We),kn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),kn.crossVectors(n,We)),kn.normalize(),ks.crossVectors(We,kn),s[0]=kn.x,s[4]=ks.x,s[8]=We.x,s[1]=kn.y,s[5]=ks.y,s[9]=We.y,s[2]=kn.z,s[6]=ks.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],d=n[10],m=n[14],M=n[3],y=n[7],b=n[11],I=n[15],R=s[0],A=s[4],D=s[8],W=s[12],v=s[1],E=s[5],H=s[9],z=s[13],X=s[2],Z=s[6],B=s[10],tt=s[14],V=s[3],dt=s[7],et=s[11],ct=s[15];return r[0]=a*R+o*v+l*X+c*V,r[4]=a*A+o*E+l*Z+c*dt,r[8]=a*D+o*H+l*B+c*et,r[12]=a*W+o*z+l*tt+c*ct,r[1]=h*R+u*v+f*X+p*V,r[5]=h*A+u*E+f*Z+p*dt,r[9]=h*D+u*H+f*B+p*et,r[13]=h*W+u*z+f*tt+p*ct,r[2]=g*R+_*v+d*X+m*V,r[6]=g*A+_*E+d*Z+m*dt,r[10]=g*D+_*H+d*B+m*et,r[14]=g*W+_*z+d*tt+m*ct,r[3]=M*R+y*v+b*X+I*V,r[7]=M*A+y*E+b*Z+I*dt,r[11]=M*D+y*H+b*B+I*et,r[15]=M*W+y*z+b*tt+I*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],d=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+d*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+m*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],d=t[14],m=t[15],M=u*d*c-_*f*c+_*l*p-o*d*p-u*l*m+o*f*m,y=g*f*c-h*d*c-g*l*p+a*d*p+h*l*m-a*f*m,b=h*_*c-g*u*c+g*o*p-a*_*p-h*o*m+a*u*m,I=g*u*l-h*_*l-g*o*f+a*_*f+h*o*d-a*u*d,R=e*M+n*y+s*b+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=M*A,t[1]=(_*f*r-u*d*r-_*s*p+n*d*p+u*s*m-n*f*m)*A,t[2]=(o*d*r-_*l*r+_*s*c-n*d*c-o*s*m+n*l*m)*A,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*A,t[4]=y*A,t[5]=(h*d*r-g*f*r+g*s*p-e*d*p-h*s*m+e*f*m)*A,t[6]=(g*l*r-a*d*r-g*s*c+e*d*c+a*s*m-e*l*m)*A,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*A,t[8]=b*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*m-e*u*m)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=I*A,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*d+e*u*d)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*d-e*o*d)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,d=a*u,m=o*u,M=l*c,y=l*h,b=l*u,I=n.x,R=n.y,A=n.z;return s[0]=(1-(_+m))*I,s[1]=(p+b)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(p-b)*R,s[5]=(1-(f+m))*R,s[6]=(d+M)*R,s[7]=0,s[8]=(g+y)*A,s[9]=(d-M)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===Pn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===pr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h;let g,_;if(o===Pn)g=(a+r)*u,_=-2*u;else if(o===pr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new U,nn=new le,Kd=new U(0,0,0),Zd=new U(1,1,1),kn=new U,ks=new U,We=new U,Ll=new le,Il=new pi;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jd=0;const Dl=new U,Si=new pi,Mn=new le,Os=new U,os=new U,Qd=new U,tf=new pi,Ul=new U(1,0,0),Nl=new U(0,1,0),Fl=new U(0,0,1),kl={type:"added"},ef={type:"removed"},bi={type:"childadded",child:null},Jr={type:"childremoved",child:null};class we extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new U,e=new pn,n=new pi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ft}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Ul,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ul,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(os,Os,this.up):Mn.lookAt(Os,os,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Mn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kl),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ef),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kl),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}we.DEFAULT_UP=new U(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,Sn=new U,Qr=new U,bn=new U,Ei=new U,wi=new U,Ol=new U,ta=new U,ea=new U,na=new U,ia=new oe,sa=new oe,ra=new oe;class an{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Sn.subVectors(n,e),Qr.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(Sn),l=sn.dot(Qr),c=Sn.dot(Sn),h=Sn.dot(Qr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),wi.subVectors(r,n),ta.subVectors(t,n);const l=Ei.dot(ta),c=wi.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);const h=Ei.dot(ea),u=wi.dot(ea);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ei,a);na.subVectors(t,r);const p=Ei.dot(na),g=wi.dot(na);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(wi,o);const d=h*g-p*u;if(d<=0&&u-h>=0&&p-g>=0)return Ol.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ol,o);const m=1/(d+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(Ei,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=kd(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Kt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Oe(Ae.r*255,0,255))*65536+Math.round(Oe(Ae.g*255,0,255))*256+Math.round(Oe(Ae.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Fe){Kt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Bs);const n=Gr(On.h,Bs.h,e),s=Gr(On.s,Bs.s,e),r=Gr(On.l,Bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new kt;kt.NAMES=Eh;let nf=0;class Ts extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=ki,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class di extends Ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new U,zs=new Dt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),t}}class wh extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Th extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ze extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sf=0;const je=new le,oa=new we,Ti=new U,Xe=new ws,ls=new ws,ye=new U;class _n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yh(t)?Th:wh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Xe.min,ls.min),Xe.expandByPoint(ye),ye.addVectors(Xe.max,ls.max),Xe.expandByPoint(ye)):(Xe.expandByPoint(ls.min),Xe.expandByPoint(ls.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(t,c),ye.add(Ti)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new U,l[D]=new U;const c=new U,h=new U,u=new U,f=new Dt,p=new Dt,g=new Dt,_=new U,d=new U;function m(D,W,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,W),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),d.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),o[D].add(_),o[W].add(_),o[v].add(_),l[D].add(d),l[W].add(d),l[v].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,W=M.length;D<W;++D){const v=M[D],E=v.start,H=v.count;for(let z=E,X=E+H;z<X;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new U,b=new U,I=new U,R=new U;function A(D){I.fromBufferAttribute(s,D),R.copy(I);const W=o[D];y.copy(W),y.sub(I.multiplyScalar(I.dot(W))).normalize(),b.crossVectors(R,W);const E=b.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,E)}for(let D=0,W=M.length;D<W;++D){const v=M[D],E=v.start,H=v.count;for(let z=E,X=E+H;z<X;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new dn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new le,Qn=new jd,Hs=new Vo,zl=new U,Gs=new U,Vs=new U,Ws=new U,la=new U,Xs=new U,Hl=new U,qs=new U;class Se extends we{constructor(t=new _n,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(la.fromBufferAttribute(u,t),a?Xs.addScaledVector(la,h):Xs.addScaledVector(la.sub(e),h))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Hs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Hs,zl)===null||Qn.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Bl.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=a[d.materialIndex],M=Math.max(d.start,p.start),y=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let b=M,I=y;b<I;b+=3){const R=o.getX(b),A=o.getX(b+1),D=o.getX(b+2);s=$s(this,m,t,n,c,h,u,R,A,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const M=o.getX(d),y=o.getX(d+1),b=o.getX(d+2);s=$s(this,a,t,n,c,h,u,M,y,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=a[d.materialIndex],M=Math.max(d.start,p.start),y=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let b=M,I=y;b<I;b+=3){const R=b,A=b+1,D=b+2;s=$s(this,m,t,n,c,h,u,R,A,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const M=d,y=d+1,b=d+2;s=$s(this,a,t,n,c,h,u,M,y,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function rf(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function $s(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Gs),i.getVertexPosition(l,Vs),i.getVertexPosition(c,Ws);const h=rf(i,t,e,n,Gs,Vs,Ws,Hl);if(h){const u=new U;an.getBarycoord(Hl,Gs,Vs,Ws,u),s&&(h.uv=an.getInterpolatedAttribute(s,o,l,c,u,new Dt)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,l,c,u,new Dt)),a&&(h.normal=an.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};an.getNormal(Gs,Vs,Ws,f.normal),h.face=f,h.barycoord=u}return h}class Zi extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function g(_,d,m,M,y,b,I,R,A,D,W){const v=b/A,E=I/D,H=b/2,z=I/2,X=R/2,Z=A+1,B=D+1;let tt=0,V=0;const dt=new U;for(let et=0;et<B;et++){const ct=et*E-z;for(let Ut=0;Ut<Z;Ut++){const Vt=Ut*v-H;dt[_]=Vt*M,dt[d]=ct*y,dt[m]=X,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[d]=0,dt[m]=R>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Ut/A),u.push(1-et/D),tt+=1}}for(let et=0;et<D;et++)for(let ct=0;ct<A;ct++){const Ut=f+ct+Z*et,Vt=f+ct+Z*(et+1),q=f+(ct+1)+Z*(et+1),Q=f+(ct+1)+Z*et;l.push(Ut,Vt,Q),l.push(Vt,q,Q),V+=6}o.addGroup(p,V,W),p+=V,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=$i(i[e]);for(const s in n)t[s]=n[s]}return t}function af(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const of={clone:$i,merge:Pe};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rh extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new U,Gl=new Dt,Vl=new Dt;class Ke extends Rh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Vl),e.subVectors(Vl,Gl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ri=1;class hf extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Ai,Ri,t,e);s.layers=this.layers,this.add(s);const r=new Ke(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const a=new Ke(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const l=new Ke(Ai,Ri,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Ai,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ch extends Ee{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uf extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ch(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zi(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Gn});r.uniforms.tEquirect.value=e;const a=new Se(s,r),o=e.minFilter;return e.minFilter===Rn&&(e.minFilter=qe),new hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ca=new U,df=new U,ff=new Ft;class si{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ca.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Vo,Ys=new U;class Wo{constructor(t=new si,e=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],d=s[11],m=s[12],M=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,d-p,b-m).normalize(),n[1].setComponents(l+r,f+c,d+p,b+m).normalize(),n[2].setComponents(l+a,f+h,d+g,b+M).normalize(),n[3].setComponents(l-a,f-h,d-g,b-M).normalize(),n[4].setComponents(l-o,f-u,d-_,b-y).normalize(),e===Pn)n[5].setComponents(l+o,f+u,d+_,b+y).normalize();else if(e===pr)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ys.x=s.normal.x>0?t.max.x:t.min.x,Ys.y=s.normal.y>0?t.max.y:t.min.y,Ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ph(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class mn extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],d=[];for(let m=0;m<h;m++){const M=m*f-a;for(let y=0;y<c;y++){const b=y*u-r;g.push(b,-M,0),_.push(0,0,1),d.push(y/o),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const y=M+c*m,b=M+c*(m+1),I=M+1+c*(m+1),R=M+1+c*m;p.push(y,b,R),p.push(b,I,R)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
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
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`
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
}`,$f=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:vf,alphatest_fragment:xf,alphatest_pars_fragment:yf,aomap_fragment:Mf,aomap_pars_fragment:Sf,batching_pars_vertex:bf,batching_vertex:Ef,begin_vertex:wf,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:kf,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Gf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:$f,envmap_common_pars_fragment:Yf,envmap_pars_fragment:jf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:op,envmap_vertex:Zf,fog_vertex:Jf,fog_pars_vertex:Qf,fog_fragment:tp,fog_pars_fragment:ep,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:yp,map_fragment:Mp,map_pars_fragment:Sp,map_particle_fragment:bp,map_particle_pars_fragment:Ep,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Lp,normal_fragment_begin:Ip,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Hp,opaque_fragment:Gp,packing:Vp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:$p,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Zp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Qp,skinbase_vertex:tm,skinning_pars_vertex:em,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:vm,cube_frag:xm,depth_vert:ym,depth_frag:Mm,distanceRGBA_vert:Sm,distanceRGBA_frag:bm,equirect_vert:Em,equirect_frag:wm,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Pm,meshlambert_frag:Lm,meshmatcap_vert:Im,meshmatcap_frag:Dm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:km,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:Hm,points_vert:Gm,points_frag:Vm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:$m},st={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},hn={basic:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Pe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Pe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Pe([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Pe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Pe([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Pe([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Pe([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Pe([st.lights,st.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};hn.physical={uniforms:Pe([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const js={r:0,b:0,g:0},ei=new pn,Ym=new le;function jm(i,t,e,n,s,r,a){const o=new kt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const b=g(M);b===null?m(o,l):b&&b.isColor&&(m(b,1),y=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(M,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Er)?(h===void 0&&(h=new Se(new Zi(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:$i(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(y.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(ei)),h.material.toneMapped=Kt.getTransfer(b.colorSpace)!==ne,(u!==b||f!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Se(new mn(2,2),new ln({name:"BackgroundMaterial",uniforms:$i(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(b.colorSpace)!==ne,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(js,Ah(i)),n.buffers.color.setClear(js.r,js.g,js.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:_,addToRenderList:d}}function Km(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,E,H,z,X){let Z=!1;const B=u(z,H,E);r!==B&&(r=B,c(r.object)),Z=p(v,z,H,X),Z&&g(v,z,H,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(v,E,H,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,E,H){const z=H.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let Z=X[E.id];Z===void 0&&(Z={},X[E.id]=Z);let B=Z[z];return B===void 0&&(B=f(l()),Z[z]=B),B}function f(v){const E=[],H=[],z=[];for(let X=0;X<e;X++)E[X]=0,H[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,E,H,z){const X=r.attributes,Z=E.attributes;let B=0;const tt=H.getAttributes();for(const V in tt)if(tt[V].location>=0){const et=X[V];let ct=Z[V];if(ct===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;B++}return r.attributesNum!==B||r.index!==z}function g(v,E,H,z){const X={},Z=E.attributes;let B=0;const tt=H.getAttributes();for(const V in tt)if(tt[V].location>=0){let et=Z[V];et===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(et=v.instanceColor));const ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),X[V]=ct,B++}r.attributes=X,r.attributesNum=B,r.index=z}function _(){const v=r.newAttributes;for(let E=0,H=v.length;E<H;E++)v[E]=0}function d(v){m(v,0)}function m(v,E){const H=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;H[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),X[v]!==E&&(i.vertexAttribDivisor(v,E),X[v]=E)}function M(){const v=r.newAttributes,E=r.enabledAttributes;for(let H=0,z=E.length;H<z;H++)E[H]!==v[H]&&(i.disableVertexAttribArray(H),E[H]=0)}function y(v,E,H,z,X,Z,B){B===!0?i.vertexAttribIPointer(v,E,H,X,Z):i.vertexAttribPointer(v,E,H,z,X,Z)}function b(v,E,H,z){_();const X=z.attributes,Z=H.getAttributes(),B=E.defaultAttributeValues;for(const tt in Z){const V=Z[tt];if(V.location>=0){let dt=X[tt];if(dt===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),dt!==void 0){const et=dt.normalized,ct=dt.itemSize,Ut=t.get(dt);if(Ut===void 0)continue;const Vt=Ut.buffer,q=Ut.type,Q=Ut.bytesPerElement,lt=q===i.INT||q===i.UNSIGNED_INT||dt.gpuType===Fo;if(dt.isInterleavedBufferAttribute){const ft=dt.data,Pt=ft.stride,bt=dt.offset;if(ft.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot,ft.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)d(V.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Ot=0;Ot<V.locationSize;Ot++)y(V.location+Ot,ct/V.locationSize,q,et,Pt*Q,(bt+ct/V.locationSize*Ot)*Q,lt)}else{if(dt.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)m(V.location+ft,dt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ft=0;ft<V.locationSize;ft++)d(V.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let ft=0;ft<V.locationSize;ft++)y(V.location+ft,ct/V.locationSize,q,et,ct*Q,ct/V.locationSize*ft*Q,lt)}}else if(B!==void 0){const et=B[tt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(V.location,et);break;case 3:i.vertexAttrib3fv(V.location,et);break;case 4:i.vertexAttrib4fv(V.location,et);break;default:i.vertexAttrib1fv(V.location,et)}}}}M()}function I(){D();for(const v in n){const E=n[v];for(const H in E){const z=E[H];for(const X in z)h(z[X].object),delete z[X];delete E[H]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const H in E){const z=E[H];for(const X in z)h(z[X].object),delete z[X];delete E[H]}delete n[v.id]}function A(v){for(const E in n){const H=n[E];if(H[v.id]===void 0)continue;const z=H[v.id];for(const X in z)h(z[X].object),delete z[X];delete H[v.id]}}function D(){W(),a=!0,r!==s&&(r=s,c(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:W,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:d,disableUnusedAttributes:M}}function Zm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==on&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==In&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:I,maxSamples:R}}function Qm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new si,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{const M=r?0:n,y=M*4;let b=m.clippingState||null;l.value=b,b=h(g,f,y,p);for(let I=0;I!==y;++I)b[I]=e[I];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const m=p+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<m)&&(d=new Float32Array(m));for(let y=0,b=p;y!==_;++y,b+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function tg(i){let t=new WeakMap;function e(a,o){return o===Oa?a.mapping=Vi:o===Ba&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oa||o===Ba)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new uf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xo extends Rh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,Wl=[.125,.215,.35,.446,.526,.582],oi=20,ha=new Xo,Xl=new kt;let ua=null,da=0,fa=0,pa=!1;const ri=(1+Math.sqrt(5))/2,Ci=1/ri,ql=[new U(-ri,Ci,0),new U(ri,Ci,0),new U(-Ci,0,ri),new U(Ci,0,ri),new U(0,ri,-Ci),new U(0,ri,Ci),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:bs,format:on,colorSpace:Yn,depthBuffer:!1},s=Yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=ng(r,t,e)}return s}_compileMaterial(t){const e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){const o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Xl),h.toneMapping=Vn,h.autoClear=!1;const p=new di({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Se(new Zi,p);let _=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,_=!0):(p.color.copy(Xl),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;Ks(s,M*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Vi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ql[(s-r-1)%ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Se(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):oi;d>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${oi}`);const m=[];let M=0;for(let A=0;A<oi;++A){const D=A/_,W=Math.exp(-D*D/2);m.push(W),A===0?M+=W:A<d&&(M+=2*W)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[s],I=3*b*(s>y-Fi?s-y+Fi:0),R=4*(this._cubeSize-b);Ks(e,I,R,3*b,2*b),l.setRenderTarget(e),l.render(u,ha)}}function eg(i){const t=[],e=[],n=[];let s=i;const r=i-Fi+1+Wl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Fi?l=Wl[a-i+Fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,d=2,m=1,M=new Float32Array(_*g*p),y=new Float32Array(d*g*p),b=new Float32Array(m*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,D=R>2?0:-1,W=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];M.set(W,_*g*R),y.set(f,d*g*R);const v=[R,R,R,R,R,R];b.set(v,m*g*R)}const I=new _n;I.setAttribute("position",new dn(M,_)),I.setAttribute("uv",new dn(y,d)),I.setAttribute("faceIndex",new dn(b,m)),t.push(I),s>Fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yl(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ng(i,t,e){const n=new Float32Array(oi),s=new U(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function jl(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Kl(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function qo(){return`

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
	`}function ig(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Oa||l===Ba,h=l===Vi||l===Wi;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new $l(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new $l(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,m=_.length;d<m;d++)t.remove(_[d])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let d=0,m=_.length;d<m;d++)t.update(_[d],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let y=0,b=M.length;y<b;y+=3){const I=M[y+0],R=M[y+1],A=M[y+2];f.push(I,R,R,A,A,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const I=y+0,R=y+1,A=y+2;f.push(I,R,R,A,A,I)}}else return;const d=new(yh(f)?Th:wh)(f,1);d.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,d)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ag(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];e.update(d,n,1)}function u(f,p,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)c(f[m]/a,p[m],_[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=p[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function og(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,t,e){const n=new WeakMap,s=new oe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let W=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",W)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let b=o.attributes.position.count*y,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*I*4*u),A=new Sh(R,b,I,u);A.type=Cn,A.needsUpdate=!0;const D=y*4;for(let v=0;v<u;v++){const E=d[v],H=m[v],z=M[v],X=b*I*4*v;for(let Z=0;Z<E.count;Z++){const B=Z*D;p===!0&&(s.fromBufferAttribute(E,Z),R[X+B+0]=s.x,R[X+B+1]=s.y,R[X+B+2]=s.z,R[X+B+3]=0),g===!0&&(s.fromBufferAttribute(H,Z),R[X+B+4]=s.x,R[X+B+5]=s.y,R[X+B+6]=s.z,R[X+B+7]=0),_===!0&&(s.fromBufferAttribute(z,Z),R[X+B+8]=s.x,R[X+B+9]=s.y,R[X+B+10]=s.z,R[X+B+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Dt(b,I)},n.set(o,f),o.addEventListener("dispose",W)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Lh extends Ee{constructor(t,e,n,s,r,a,o,l,c,h=Oi){if(h!==Oi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=hi),n===void 0&&h===qi&&(n=Xi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ih=new Ee,Zl=new Lh(1,1),Dh=new Sh,Uh=new $d,Nh=new Ch,Jl=[],Ql=[],tc=new Float32Array(16),ec=new Float32Array(9),nc=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jl[s];if(r===void 0&&(r=new Float32Array(s),Jl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=Ql[t];e===void 0&&(e=new Int32Array(t),Ql[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;nc.set(n),i.uniformMatrix2fv(this.addr,!1,nc),xe(e,n)}}function mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;ec.set(n),i.uniformMatrix3fv(this.addr,!1,ec),xe(e,n)}}function gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;tc.set(n),i.uniformMatrix4fv(this.addr,!1,tc),xe(e,n)}}function _g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zl.compareFunction=xh,r=Zl):r=Ih,e.setTexture2D(t||r,s)}function Tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uh,s)}function Ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nh,s)}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dh,s)}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return Sg;case 36295:return bg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(i,t){i.uniform1fv(this.addr,t)}function Lg(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Ig(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Dg(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Ug(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ng(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fg(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Og(i,t){i.uniform2iv(this.addr,t)}function Bg(i,t){i.uniform3iv(this.addr,t)}function zg(i,t){i.uniform4iv(this.addr,t)}function Hg(i,t){i.uniform1uiv(this.addr,t)}function Gg(i,t){i.uniform2uiv(this.addr,t)}function Vg(i,t){i.uniform3uiv(this.addr,t)}function Wg(i,t){i.uniform4uiv(this.addr,t)}function Xg(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ih,r[a])}function qg(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Uh,r[a])}function $g(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Nh,r[a])}function Yg(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dh,r[a])}function jg(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return kg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Yg}}class Kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cg(e.type)}}class Zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jg(e.type)}}class Jg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function ic(i,t){i.seq.push(t),i.map[t.id]=t}function Qg(i,t,e){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ic(e,c===void 0?new Kg(o,i,t):new Zg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Jg(o),ic(e,u)),e=u}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Qg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function sc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const t0=37297;let e0=0;function n0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function i0(i){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i);let n;switch(t===e?n="":t===fr&&e===dr?n="LinearDisplayP3ToLinearSRGB":t===dr&&e===fr&&(n="LinearSRGBToLinearDisplayP3"),i){case Yn:case wr:return[n,"LinearTransferOETF"];case Fe:case Go:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+n0(i.getShaderSource(t),a)}else return s}function s0(i,t){const e=i0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function r0(i,t){let e;switch(t){case xd:e="Linear";break;case yd:e="Reinhard";break;case Md:e="Cineon";break;case Sd:e="ACESFilmic";break;case Ed:e="AgX";break;case wd:e="Neutral";break;case bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zs=new U;function a0(){Kt.getLuminanceCoefficients(Zs);const i=Zs.x.toFixed(4),t=Zs.y.toFixed(4),e=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function l0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fs(i){return i!==""}function ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(h0,d0)}const u0=new Map;function d0(i,t){let e=Nt[t];if(e===void 0){const n=u0.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(i){return i.replace(f0,p0)}function p0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function m0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ju?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function g0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function v0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ah:t="ENVMAP_BLENDING_MULTIPLY";break;case _d:t="ENVMAP_BLENDING_MIX";break;case vd:t="ENVMAP_BLENDING_ADD";break}return t}function x0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function y0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=m0(e),c=g0(e),h=_0(e),u=v0(e),f=x0(e),p=o0(e),g=l0(r),_=s.createProgram();let d,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`)):(d=[cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),m=[cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?r0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,s0("linearToOutputTexel",e.outputColorSpace),a0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=go(a),a=ac(a,e),a=oc(a,e),o=go(o),o=ac(o,e),o=oc(o,e),a=lc(a),o=lc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=M+d+a,b=M+m+o,I=sc(s,s.VERTEX_SHADER,y),R=sc(s,s.FRAGMENT_SHADER,b);s.attachShader(_,I),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(E){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(R).trim();let Z=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,R);else{const tt=rc(s,I,"vertex"),V=rc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+tt+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||X==="")&&(B=!1);B&&(E.diagnostics={runnable:Z,programLog:H,vertexShader:{log:z,prefix:d},fragmentShader:{log:X,prefix:m}})}s.deleteShader(I),s.deleteShader(R),D=new lr(s,_),W=c0(s,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let W;this.getAttributes=function(){return W===void 0&&A(this),W};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,t0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}let M0=0;class S0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new b0(t),e.set(t,n)),n}}class b0{constructor(t){this.id=M0++,this.code=t,this.usedTimes=0}}function E0(i,t,e,n,s,r,a){const o=new bh,l=new S0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,H,z,X){const Z=z.fog,B=X.geometry,tt=v.isMeshStandardMaterial?z.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||tt),dt=V&&V.mapping===Er?V.image.height:null,et=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ut=ct!==void 0?ct.length:0;let Vt=0;B.morphAttributes.position!==void 0&&(Vt=1),B.morphAttributes.normal!==void 0&&(Vt=2),B.morphAttributes.color!==void 0&&(Vt=3);let q,Q,lt,ft;if(et){const Ue=hn[et];q=Ue.vertexShader,Q=Ue.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),ft=l.getFragmentShaderID(v);const Pt=i.getRenderTarget(),bt=X.isInstancedMesh===!0,Ot=X.isBatchedMesh===!0,Jt=!!v.map,Ht=!!v.matcap,C=!!V,He=!!v.aoMap,Bt=!!v.lightMap,Wt=!!v.bumpMap,At=!!v.normalMap,te=!!v.displacementMap,Lt=!!v.emissiveMap,T=!!v.metalnessMap,x=!!v.roughnessMap,F=v.anisotropy>0,Y=v.clearcoat>0,J=v.dispersion>0,$=v.iridescence>0,yt=v.sheen>0,rt=v.transmission>0,pt=F&&!!v.anisotropyMap,Xt=Y&&!!v.clearcoatMap,nt=Y&&!!v.clearcoatNormalMap,mt=Y&&!!v.clearcoatRoughnessMap,Rt=$&&!!v.iridescenceMap,Ct=$&&!!v.iridescenceThicknessMap,gt=yt&&!!v.sheenColorMap,zt=yt&&!!v.sheenRoughnessMap,It=!!v.specularMap,Qt=!!v.specularColorMap,P=!!v.specularIntensityMap,ht=rt&&!!v.transmissionMap,G=rt&&!!v.thicknessMap,K=!!v.gradientMap,at=!!v.alphaMap,ut=v.alphaTest>0,Gt=!!v.alphaHash,de=!!v.extensions;let De=Vn;v.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(De=i.toneMapping);const $t={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&X._colorsTexture!==null,instancing:bt,instancingColor:bt&&X.instanceColor!==null,instancingMorph:bt&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Yn,alphaToCoverage:!!v.alphaToCoverage,map:Jt,matcap:Ht,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:dt,aoMap:He,lightMap:Bt,bumpMap:Wt,normalMap:At,displacementMap:p&&te,emissiveMap:Lt,normalMapObjectSpace:At&&v.normalMapType===Cd,normalMapTangentSpace:At&&v.normalMapType===vh,metalnessMap:T,roughnessMap:x,anisotropy:F,anisotropyMap:pt,clearcoat:Y,clearcoatMap:Xt,clearcoatNormalMap:nt,clearcoatRoughnessMap:mt,dispersion:J,iridescence:$,iridescenceMap:Rt,iridescenceThicknessMap:Ct,sheen:yt,sheenColorMap:gt,sheenRoughnessMap:zt,specularMap:It,specularColorMap:Qt,specularIntensityMap:P,transmission:rt,transmissionMap:ht,thicknessMap:G,gradientMap:K,opaque:v.transparent===!1&&v.blending===ki&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:ut,alphaHash:Gt,combine:v.combine,mapUv:Jt&&d(v.map.channel),aoMapUv:He&&d(v.aoMap.channel),lightMapUv:Bt&&d(v.lightMap.channel),bumpMapUv:Wt&&d(v.bumpMap.channel),normalMapUv:At&&d(v.normalMap.channel),displacementMapUv:te&&d(v.displacementMap.channel),emissiveMapUv:Lt&&d(v.emissiveMap.channel),metalnessMapUv:T&&d(v.metalnessMap.channel),roughnessMapUv:x&&d(v.roughnessMap.channel),anisotropyMapUv:pt&&d(v.anisotropyMap.channel),clearcoatMapUv:Xt&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:zt&&d(v.sheenRoughnessMap.channel),specularMapUv:It&&d(v.specularMap.channel),specularColorMapUv:Qt&&d(v.specularColorMap.channel),specularIntensityMapUv:P&&d(v.specularIntensityMap.channel),transmissionMapUv:ht&&d(v.transmissionMap.channel),thicknessMapUv:G&&d(v.thicknessMap.channel),alphaMapUv:at&&d(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(At||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!B.attributes.uv&&(Jt||at),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Vt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Jt&&v.map.isVideoTexture===!0&&Kt.getTransfer(v.map.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tn,flipSided:v.side===Be,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:de&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&v.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function M(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)E.push(H),E.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(y(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function I(v){const E=_[v.type];let H;if(E){const z=hn[E];H=of.clone(z.uniforms)}else H=v.uniforms;return H}function R(v,E){let H;for(let z=0,X=h.length;z<X;z++){const Z=h[z];if(Z.cacheKey===E){H=Z,++H.usedTimes;break}}return H===void 0&&(H=new y0(i,E,v,r),h.push(H)),H}function A(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function D(v){l.remove(v)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:I,acquireProgram:R,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:W}}function w0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,d){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=d),t++,m}function o(u,f,p,g,_,d){const m=a(u,f,p,g,_,d);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(u,f,p,g,_,d){const m=a(u,f,p,g,_,d);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||T0),n.length>1&&n.sort(f||hc),s.length>1&&s.sort(f||hc)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function A0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new uc,i.set(n,[a])):s>=r.length?(a=new uc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function R0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function C0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let P0=0;function L0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I0(i){const t=new R0,e=C0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new le,a=new le;function o(c){let h=0,u=0,f=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let p=0,g=0,_=0,d=0,m=0,M=0,y=0,b=0,I=0,R=0,A=0;c.sort(L0);for(let W=0,v=c.length;W<v;W++){const E=c[W],H=E.color,z=E.intensity,X=E.distance,Z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=H.r*z,u+=H.g*z,f+=H.b*z;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],z);A++}else if(E.isDirectionalLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const tt=E.shadow,V=e.get(E);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=E.shadow.matrix,M++}n.directional[p]=B,p++}else if(E.isSpotLight){const B=t.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(H).multiplyScalar(z),B.distance=X,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[_]=B;const tt=E.shadow;if(E.map&&(n.spotLightMap[I]=E.map,I++,tt.updateMatrices(E),E.castShadow&&R++),n.spotLightMatrix[_]=tt.matrix,E.castShadow){const V=e.get(E);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Z,b++}_++}else if(E.isRectAreaLight){const B=t.get(E);B.color.copy(H).multiplyScalar(z),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[d]=B,d++}else if(E.isPointLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const tt=E.shadow,V=e.get(E);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=E.shadow.matrix,y++}n.point[g]=B,g++}else if(E.isHemisphereLight){const B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(z),B.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[m]=B,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==d||D.hemiLength!==m||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==b||D.numSpotMaps!==I||D.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=d,D.hemiLength=m,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=b,D.numSpotMaps=I,D.numLightProbes=A,n.version=P0++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const d=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const y=c[m];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(y.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),p++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),f++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function dc(i){const t=new I0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function D0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new dc(i),t.set(s,[o])):r>=a.length?(o=new dc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class U0 extends Ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N0 extends Ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function O0(i,t,e){let n=new Wo;const s=new Dt,r=new Dt,a=new oe,o=new U0({depthPacking:Rd}),l=new N0,c={},h=e.maxTextureSize,u={[Xn]:Be,[Be]:Xn,[Tn]:Tn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:F0,fragmentShader:k0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Se(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let m=this.type;this.render=function(R,A,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const W=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Gn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=m!==wn&&this.type===wn,X=m===wn&&this.type!==wn;for(let Z=0,B=R.length;Z<B;Z++){const tt=R[Z],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const dt=V.getFrameExtents();if(s.multiply(dt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,V.mapSize.y=r.y)),V.map===null||z===!0||X===!0){const ct=this.type!==wn?{minFilter:Ze,magFilter:Ze}:{};V.map!==null&&V.map.dispose(),V.map=new ui(s.x,s.y,ct),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const et=V.getViewportCount();for(let ct=0;ct<et;ct++){const Ut=V.getViewport(ct);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),H.viewport(a),V.updateMatrices(tt,ct),n=V.getFrustum(),b(A,D,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===wn&&M(V,D),V.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(W,v,E)};function M(R,A){const D=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ui(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,D,p,_,null)}function y(R,A,D,W){let v=null;const E=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)v=E;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=v.uuid,z=A.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let Z=X[z];Z===void 0&&(Z=v.clone(),X[z]=Z,A.addEventListener("dispose",I)),v=Z}if(v.visible=A.visible,v.wireframe=A.wireframe,W===wn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const H=i.properties.get(v);H.light=D}return v}function b(R,A,D,W,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const z=t.update(R),X=R.material;if(Array.isArray(X)){const Z=z.groups;for(let B=0,tt=Z.length;B<tt;B++){const V=Z[B],dt=X[V.materialIndex];if(dt&&dt.visible){const et=y(R,dt,W,v);R.onBeforeShadow(i,R,A,D,z,et,V),i.renderBufferDirect(D,null,z,et,R,V),R.onAfterShadow(i,R,A,D,z,et,V)}}}else if(X.visible){const Z=y(R,X,W,v);R.onBeforeShadow(i,R,A,D,z,Z,null),i.renderBufferDirect(D,null,z,Z,R,null),R.onAfterShadow(i,R,A,D,z,Z,null)}}const H=R.children;for(let z=0,X=H.length;z<X;z++)b(H[z],A,D,W,v)}function I(R){R.target.removeEventListener("dispose",I);for(const D in c){const W=c[D],v=R.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}const B0={[La]:Ia,[Da]:Fa,[Ua]:ka,[Gi]:Na,[Ia]:La,[Fa]:Da,[ka]:Ua,[Na]:Gi};function z0(i){function t(){let P=!1;const ht=new oe;let G=null;const K=new oe(0,0,0,0);return{setMask:function(at){G!==at&&!P&&(i.colorMask(at,at,at,at),G=at)},setLocked:function(at){P=at},setClear:function(at,ut,Gt,de,De){De===!0&&(at*=de,ut*=de,Gt*=de),ht.set(at,ut,Gt,de),K.equals(ht)===!1&&(i.clearColor(at,ut,Gt,de),K.copy(ht))},reset:function(){P=!1,G=null,K.set(-1,0,0,0)}}}function e(){let P=!1,ht=!1,G=null,K=null,at=null;return{setReversed:function(ut){ht=ut},setTest:function(ut){ut?lt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(ut){G!==ut&&!P&&(i.depthMask(ut),G=ut)},setFunc:function(ut){if(ht&&(ut=B0[ut]),K!==ut){switch(ut){case La:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Da:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ut}},setLocked:function(ut){P=ut},setClear:function(ut){at!==ut&&(i.clearDepth(ut),at=ut)},reset:function(){P=!1,G=null,K=null,at=null}}}function n(){let P=!1,ht=null,G=null,K=null,at=null,ut=null,Gt=null,de=null,De=null;return{setTest:function($t){P||($t?lt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function($t){ht!==$t&&!P&&(i.stencilMask($t),ht=$t)},setFunc:function($t,Ue,vn){(G!==$t||K!==Ue||at!==vn)&&(i.stencilFunc($t,Ue,vn),G=$t,K=Ue,at=vn)},setOp:function($t,Ue,vn){(ut!==$t||Gt!==Ue||de!==vn)&&(i.stencilOp($t,Ue,vn),ut=$t,Gt=Ue,de=vn)},setLocked:function($t){P=$t},setClear:function($t){De!==$t&&(i.clearStencil($t),De=$t)},reset:function(){P=!1,ht=null,G=null,K=null,at=null,ut=null,Gt=null,de=null,De=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],p=null,g=!1,_=null,d=null,m=null,M=null,y=null,b=null,I=null,R=new kt(0,0,0),A=0,D=!1,W=null,v=null,E=null,H=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,B=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Z=B>=1):tt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Z=B>=2);let V=null,dt={};const et=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),Ut=new oe().fromArray(et),Vt=new oe().fromArray(ct);function q(P,ht,G,K){const at=new Uint8Array(4),ut=i.createTexture();i.bindTexture(P,ut),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<G;Gt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ht+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ut}const Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),r.setFunc(Gi),Bt(!1),Wt(yl),lt(i.CULL_FACE),C(Gn);function lt(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function ft(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function Pt(P,ht){return h[P]!==ht?(i.bindFramebuffer(P,ht),h[P]=ht,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function bt(P,ht){let G=f,K=!1;if(P){G=u.get(ht),G===void 0&&(G=[],u.set(ht,G));const at=P.textures;if(G.length!==at.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Gt=at.length;ut<Gt;ut++)G[ut]=i.COLOR_ATTACHMENT0+ut;G.length=at.length,K=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,K=!0);K&&i.drawBuffers(G)}function Ot(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const Jt={[ai]:i.FUNC_ADD,[td]:i.FUNC_SUBTRACT,[ed]:i.FUNC_REVERSE_SUBTRACT};Jt[nd]=i.MIN,Jt[id]=i.MAX;const Ht={[sd]:i.ZERO,[rd]:i.ONE,[ad]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[ld]:i.DST_ALPHA,[od]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[cd]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[pd]:i.ONE_MINUS_CONSTANT_COLOR,[md]:i.CONSTANT_ALPHA,[gd]:i.ONE_MINUS_CONSTANT_ALPHA};function C(P,ht,G,K,at,ut,Gt,de,De,$t){if(P===Gn){g===!0&&(ft(i.BLEND),g=!1);return}if(g===!1&&(lt(i.BLEND),g=!0),P!==Qu){if(P!==_||$t!==D){if((d!==ai||y!==ai)&&(i.blendEquation(i.FUNC_ADD),d=ai,y=ai),$t)switch(P){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}m=null,M=null,b=null,I=null,R.set(0,0,0),A=0,_=P,D=$t}return}at=at||ht,ut=ut||G,Gt=Gt||K,(ht!==d||at!==y)&&(i.blendEquationSeparate(Jt[ht],Jt[at]),d=ht,y=at),(G!==m||K!==M||ut!==b||Gt!==I)&&(i.blendFuncSeparate(Ht[G],Ht[K],Ht[ut],Ht[Gt]),m=G,M=K,b=ut,I=Gt),(de.equals(R)===!1||De!==A)&&(i.blendColor(de.r,de.g,de.b,De),R.copy(de),A=De),_=P,D=!1}function He(P,ht){P.side===Tn?ft(i.CULL_FACE):lt(i.CULL_FACE);let G=P.side===Be;ht&&(G=!G),Bt(G),P.blending===ki&&P.transparent===!1?C(Gn):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const K=P.stencilWrite;a.setTest(K),K&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){W!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),W=P)}function Wt(P){P!==Ku?(lt(i.CULL_FACE),P!==v&&(P===yl?i.cullFace(i.BACK):P===Zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),v=P}function At(P){P!==E&&(Z&&i.lineWidth(P),E=P)}function te(P,ht,G){P?(lt(i.POLYGON_OFFSET_FILL),(H!==ht||z!==G)&&(i.polygonOffset(ht,G),H=ht,z=G)):ft(i.POLYGON_OFFSET_FILL)}function Lt(P){P?lt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+X-1),V!==P&&(i.activeTexture(P),V=P)}function x(P,ht,G){G===void 0&&(V===null?G=i.TEXTURE0+X-1:G=V);let K=dt[G];K===void 0&&(K={type:void 0,texture:void 0},dt[G]=K),(K.type!==P||K.texture!==ht)&&(V!==G&&(i.activeTexture(G),V=G),i.bindTexture(P,ht||Q[P]),K.type=P,K.texture=ht)}function F(){const P=dt[V];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(P){Ut.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ut.copy(P))}function gt(P){Vt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Vt.copy(P))}function zt(P,ht){let G=l.get(ht);G===void 0&&(G=new WeakMap,l.set(ht,G));let K=G.get(P);K===void 0&&(K=i.getUniformBlockIndex(ht,P.name),G.set(P,K))}function It(P,ht){const K=l.get(ht).get(P);o.get(ht)!==K&&(i.uniformBlockBinding(ht,K,P.__bindingPointIndex),o.set(ht,K))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,dt={},h={},u=new WeakMap,f=[],p=null,g=!1,_=null,d=null,m=null,M=null,y=null,b=null,I=null,R=new kt(0,0,0),A=0,D=!1,W=null,v=null,E=null,H=null,z=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:lt,disable:ft,bindFramebuffer:Pt,drawBuffers:bt,useProgram:Ot,setBlending:C,setMaterial:He,setFlipSided:Bt,setCullFace:Wt,setLineWidth:At,setPolygonOffset:te,setScissorTest:Lt,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:mt,texImage3D:Rt,updateUBOMapping:zt,uniformBlockBinding:It,texStorage2D:Xt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:pt,scissor:Ct,viewport:gt,reset:Qt}}function fc(i,t,e,n){const s=H0(n);switch(e){case uh:return i*t;case fh:return i*t;case ph:return i*t*2;case mh:return i*t/s.components*s.byteLength;case Bo:return i*t/s.components*s.byteLength;case gh:return i*t*2/s.components*s.byteLength;case zo:return i*t*2/s.components*s.byteLength;case dh:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Ho:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ga:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ar:case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _h:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function H0(i){switch(i){case In:case lh:return{byteLength:1,components:1};case ys:case ch:case bs:return{byteLength:2,components:1};case ko:case Oo:return{byteLength:2,components:4};case hi:case Fo:case Cn:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function G0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):mr("canvas")}function _(T,x,F){let Y=1;const J=Lt(T);if((J.width>F||J.height>F)&&(Y=F/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Y*J.width),yt=Math.floor(Y*J.height);u===void 0&&(u=g($,yt));const rt=x?g($,yt):u;return rt.width=$,rt.height=yt,rt.getContext("2d").drawImage(T,0,0,$,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+yt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function d(T){return T.generateMipmaps&&T.minFilter!==Ze&&T.minFilter!==qe}function m(T){i.generateMipmap(T)}function M(T,x,F,Y,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),x===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),x===i.RGBA){const yt=J?ur:Kt.getTransfer(Y);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=yt===ne?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,x){let F;return T?x===null||x===hi||x===Xi?F=i.DEPTH24_STENCIL8:x===Cn?F=i.DEPTH32F_STENCIL8:x===ys&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===Xi?F=i.DEPTH_COMPONENT24:x===Cn?F=i.DEPTH_COMPONENT32F:x===ys&&(F=i.DEPTH_COMPONENT16),F}function b(T,x){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ze&&T.minFilter!==qe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function I(T){const x=T.target;x.removeEventListener("dispose",I),A(x),x.isVideoTexture&&h.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),W(x)}function A(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,Y=f.get(F);if(Y){const J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(T),Object.keys(Y).length===0&&f.delete(F)}n.remove(T)}function D(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const F=T.source,Y=f.get(F);delete Y[x.__cacheKey],a.memory.textures--}function W(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let Y=0,J=F.length;Y<J;Y++){const $=n.get(F[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(T)}let v=0;function E(){v=0}function H(){const T=v;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),v+=1,T}function z(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function X(T,x){const F=n.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(F,T,x);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Z(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Vt(F,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function B(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Vt(F,T,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function tt(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const V={[za]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},dt={[Ze]:i.NEAREST,[Td]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},et={[Pd]:i.NEVER,[Fd]:i.ALWAYS,[Ld]:i.LESS,[xh]:i.LEQUAL,[Id]:i.EQUAL,[Nd]:i.GEQUAL,[Dd]:i.GREATER,[Ud]:i.NOTEQUAL};function ct(T,x){if(x.type===Cn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===qe||x.magFilter===zr||x.magFilter===Ls||x.magFilter===Rn||x.minFilter===qe||x.minFilter===zr||x.minFilter===Ls||x.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,V[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ze||x.minFilter!==Ls&&x.minFilter!==Rn||x.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ut(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",I));const Y=x.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const $=z(x);if($!==T.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[$].usedTimes++;const yt=J[T.__cacheKey];yt!==void 0&&(J[T.__cacheKey].usedTimes--,yt.usedTimes===0&&D(x)),T.__cacheKey=$,T.__webglTexture=J[$].texture}return F}function Vt(T,x,F){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Ut(T,x),$=x.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+F);const yt=n.get($);if($.version!==yt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const rt=Kt.getPrimaries(Kt.workingColorSpace),pt=x.colorSpace===Hn?null:Kt.getPrimaries(x.colorSpace),Xt=x.colorSpace===Hn||rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let nt=_(x.image,!1,s.maxTextureSize);nt=te(x,nt);const mt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type);let Ct=M(x.internalFormat,mt,Rt,x.colorSpace,x.isVideoTexture);ct(Y,x);let gt;const zt=x.mipmaps,It=x.isVideoTexture!==!0,Qt=yt.__version===void 0||J===!0,P=$.dataReady,ht=b(x,nt);if(x.isDepthTexture)Ct=y(x.format===qi,x.type),Qt&&(It?e.texStorage2D(i.TEXTURE_2D,1,Ct,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,nt.width,nt.height,0,mt,Rt,null));else if(x.isDataTexture)if(zt.length>0){It&&Qt&&e.texStorage2D(i.TEXTURE_2D,ht,Ct,zt[0].width,zt[0].height);for(let G=0,K=zt.length;G<K;G++)gt=zt[G],It?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,G,Ct,gt.width,gt.height,0,mt,Rt,gt.data);x.generateMipmaps=!1}else It?(Qt&&e.texStorage2D(i.TEXTURE_2D,ht,Ct,nt.width,nt.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,Rt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,nt.width,nt.height,0,mt,Rt,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ct,zt[0].width,zt[0].height,nt.depth);for(let G=0,K=zt.length;G<K;G++)if(gt=zt[G],x.format!==on)if(mt!==null)if(It){if(P)if(x.layerUpdates.size>0){const at=fc(gt.width,gt.height,x.format,x.type);for(const ut of x.layerUpdates){const Gt=gt.data.subarray(ut*at/gt.data.BYTES_PER_ELEMENT,(ut+1)*at/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ut,gt.width,gt.height,1,mt,Gt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ct,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,gt.width,gt.height,nt.depth,mt,Rt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Ct,gt.width,gt.height,nt.depth,0,mt,Rt,gt.data)}else{It&&Qt&&e.texStorage2D(i.TEXTURE_2D,ht,Ct,zt[0].width,zt[0].height);for(let G=0,K=zt.length;G<K;G++)gt=zt[G],x.format!==on?mt!==null?It?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,G,Ct,gt.width,gt.height,0,mt,Rt,gt.data)}else if(x.isDataArrayTexture)if(It){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ct,nt.width,nt.height,nt.depth),P)if(x.layerUpdates.size>0){const G=fc(nt.width,nt.height,x.format,x.type);for(const K of x.layerUpdates){const at=nt.data.subarray(K*G/nt.data.BYTES_PER_ELEMENT,(K+1)*G/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,mt,Rt,at)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Rt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,nt.width,nt.height,nt.depth,0,mt,Rt,nt.data);else if(x.isData3DTexture)It?(Qt&&e.texStorage3D(i.TEXTURE_3D,ht,Ct,nt.width,nt.height,nt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Rt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,nt.width,nt.height,nt.depth,0,mt,Rt,nt.data);else if(x.isFramebufferTexture){if(Qt)if(It)e.texStorage2D(i.TEXTURE_2D,ht,Ct,nt.width,nt.height);else{let G=nt.width,K=nt.height;for(let at=0;at<ht;at++)e.texImage2D(i.TEXTURE_2D,at,Ct,G,K,0,mt,Rt,null),G>>=1,K>>=1}}else if(zt.length>0){if(It&&Qt){const G=Lt(zt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ct,G.width,G.height)}for(let G=0,K=zt.length;G<K;G++)gt=zt[G],It?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt,Rt,gt):e.texImage2D(i.TEXTURE_2D,G,Ct,mt,Rt,gt);x.generateMipmaps=!1}else if(It){if(Qt){const G=Lt(nt);e.texStorage2D(i.TEXTURE_2D,ht,Ct,G.width,G.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Rt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,mt,Rt,nt);d(x)&&m(Y),yt.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function q(T,x,F){if(x.image.length!==6)return;const Y=Ut(T,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const $=n.get(J);if(J.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const yt=Kt.getPrimaries(Kt.workingColorSpace),rt=x.colorSpace===Hn?null:Kt.getPrimaries(x.colorSpace),pt=x.colorSpace===Hn||yt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Xt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Xt&&!nt?mt[K]=_(x.image[K],!0,s.maxCubemapSize):mt[K]=nt?x.image[K].image:x.image[K],mt[K]=te(x,mt[K]);const Rt=mt[0],Ct=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),zt=M(x.internalFormat,Ct,gt,x.colorSpace),It=x.isVideoTexture!==!0,Qt=$.__version===void 0||Y===!0,P=J.dataReady;let ht=b(x,Rt);ct(i.TEXTURE_CUBE_MAP,x);let G;if(Xt){It&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,zt,Rt.width,Rt.height);for(let K=0;K<6;K++){G=mt[K].mipmaps;for(let at=0;at<G.length;at++){const ut=G[at];x.format!==on?Ct!==null?It?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,ut.width,ut.height,Ct,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,zt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,ut.width,ut.height,Ct,gt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,zt,ut.width,ut.height,0,Ct,gt,ut.data)}}}else{if(G=x.mipmaps,It&&Qt){G.length>0&&ht++;const K=Lt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,zt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Ct,gt,mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,mt[K].width,mt[K].height,0,Ct,gt,mt[K].data);for(let at=0;at<G.length;at++){const Gt=G[at].image[K].image;It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,Gt.width,Gt.height,Ct,gt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,zt,Gt.width,Gt.height,0,Ct,gt,Gt.data)}}else{It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,gt,mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,Ct,gt,mt[K]);for(let at=0;at<G.length;at++){const ut=G[at];It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,Ct,gt,ut.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,zt,Ct,gt,ut.image[K])}}}d(x)&&m(i.TEXTURE_CUBE_MAP),$.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,F,Y,J,$){const yt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),pt=M(F.internalFormat,yt,rt,F.colorSpace);if(!n.get(x).__hasExternalTextures){const nt=Math.max(1,x.width>>$),mt=Math.max(1,x.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,$,pt,nt,mt,x.depth,0,yt,rt,null):e.texImage2D(J,$,pt,nt,mt,0,yt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,n.get(F).__webglTexture,0,Bt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,n.get(F).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,$=y(x.stencilBuffer,J),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Bt(x);Wt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,$,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const Y=x.textures;for(let J=0;J<Y.length;J++){const $=Y[J],yt=r.convert($.format,$.colorSpace),rt=r.convert($.type),pt=M($.internalFormat,yt,rt,$.colorSpace),Xt=Bt(x);F&&Wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,pt,x.width,x.height):Wt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,pt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,pt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const Y=n.get(x.depthTexture).__webglTexture,J=Bt(x);if(x.depthTexture.format===Oi)Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(x.depthTexture.format===qi)Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Pt(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ft(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),lt(x.__webglDepthbuffer[Y],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),lt(x.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(T,x,F){const Y=n.get(T);x!==void 0&&Q(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Pt(T)}function Ot(T){const x=T.texture,F=n.get(T),Y=n.get(x);T.addEventListener("dispose",R);const J=T.textures,$=T.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let pt=0;pt<x.mipmaps.length;pt++)F.__webglFramebuffer[rt][pt]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let rt=0,pt=J.length;rt<pt;rt++){const Xt=n.get(J[rt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Wt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const pt=J[rt];F.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);const Xt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),mt=M(pt.internalFormat,Xt,nt,pt.colorSpace,T.isXRRenderTarget===!0),Rt=Bt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ct(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)Q(F.__webglFramebuffer[rt][pt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,pt);else Q(F.__webglFramebuffer[rt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);d(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let rt=0,pt=J.length;rt<pt;rt++){const Xt=J[rt],nt=n.get(Xt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),ct(i.TEXTURE_2D,Xt),Q(F.__webglFramebuffer,T,Xt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),d(Xt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),ct(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)Q(F.__webglFramebuffer[pt],T,x,i.COLOR_ATTACHMENT0,rt,pt);else Q(F.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,rt,0);d(x)&&m(rt),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Jt(T){const x=T.textures;for(let F=0,Y=x.length;F<Y;F++){const J=x[F];if(d(J)){const $=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(J).__webglTexture;e.bindTexture($,yt),m($),e.unbindTexture()}}}const Ht=[],C=[];function He(T){if(T.samples>0){if(Wt(T)===!1){const x=T.textures,F=T.width,Y=T.height;let J=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),rt=x.length>1;if(rt)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Xt=n.get(x[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,J,i.NEAREST),l===!0&&(Ht.length=0,C.length=0,Ht.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ht.push($),C.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Xt=n.get(x[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Bt(T){return Math.min(s.maxSamples,T.samples)}function Wt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function At(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function te(T,x){const F=T.colorSpace,Y=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Yn&&F!==Hn&&(Kt.getTransfer(F)===ne?(Y!==on||J!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=bt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Wt}function V0(i,t){function e(n,s=Hn){let r;const a=Kt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return i.BYTE;if(n===ch)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===dh)return i.RGB;if(n===on)return i.RGBA;if(n===fh)return i.LUMINANCE;if(n===ph)return i.LUMINANCE_ALPHA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===mh)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===gh)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===Ho)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Va||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===$a||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===$a)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Ka||n===Za||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===co||n===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ar)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class W0 extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ps extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X0={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),m=this._getHandJoint(c,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ee,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:q0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j0 extends Ki{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new Y0,d=e.getContextAttributes();let m=null,M=null;const y=[],b=[],I=new Dt;let R=null;const A=new Ke;A.layers.enable(1),A.viewport=new oe;const D=new Ke;D.layers.enable(2),D.viewport=new oe;const W=[A,D],v=new W0;v.layers.enable(1),v.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new ga,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new ga,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new ga,y[q]=Q),Q.getHandSpace()};function z(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const lt=y[Q];lt!==void 0&&(lt.update(q.inputSource,q.frame,c||a),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<y.length;q++){const Q=b[q];Q!==null&&(b[q]=null,y[q].disconnect(Q))}E=null,H=null,_.reset(),t.setRenderTarget(m),p=null,f=null,u=null,s=null,M=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ui(p.framebufferWidth,p.framebufferHeight,{format:on,type:In,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,lt=null,ft=null;d.depth&&(ft=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=d.stencil?qi:Oi,lt=d.stencil?Xi:hi);const Pt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ui(f.textureWidth,f.textureHeight,{format:on,type:In,depthTexture:new Lh(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let Q=0;Q<q.removed.length;Q++){const lt=q.removed[Q],ft=b.indexOf(lt);ft>=0&&(b[ft]=null,y[ft].disconnect(lt))}for(let Q=0;Q<q.added.length;Q++){const lt=q.added[Q];let ft=b.indexOf(lt);if(ft===-1){for(let bt=0;bt<y.length;bt++)if(bt>=b.length){b.push(lt),ft=bt;break}else if(b[bt]===null){b[bt]=lt,ft=bt;break}if(ft===-1)break}const Pt=y[ft];Pt&&Pt.connect(lt)}}const B=new U,tt=new U;function V(q,Q,lt){B.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(lt.matrixWorld);const ft=B.distanceTo(tt),Pt=Q.projectionMatrix.elements,bt=lt.projectionMatrix.elements,Ot=Pt[14]/(Pt[10]-1),Jt=Pt[14]/(Pt[10]+1),Ht=(Pt[9]+1)/Pt[5],C=(Pt[9]-1)/Pt[5],He=(Pt[8]-1)/Pt[0],Bt=(bt[8]+1)/bt[0],Wt=Ot*He,At=Ot*Bt,te=ft/(-He+Bt),Lt=te*-He;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Lt),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const T=Ot+te,x=Jt+te,F=Wt-Lt,Y=At+(ft-Lt),J=Ht*Jt/x*T,$=C*Jt/x*T;q.projectionMatrix.makePerspective(F,Y,J,$,T,x),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function dt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,lt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),v.near=D.near=A.near=Q,v.far=D.far=A.far=lt,(E!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,H=v.far);const ft=q.parent,Pt=v.cameras;dt(v,ft);for(let bt=0;bt<Pt.length;bt++)dt(Pt[bt],ft);Pt.length===2?V(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),et(q,v,ft)};function et(q,Q,lt){lt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=mo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ct=null;function Ut(q,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ft=!1;lt.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let bt=0;bt<lt.length;bt++){const Ot=lt[bt];let Jt=null;if(p!==null)Jt=p.getViewport(Ot);else{const C=u.getViewSubImage(f,Ot);Jt=C.viewport,bt===0&&(t.setRenderTargetTextures(M,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(M))}let Ht=W[bt];Ht===void 0&&(Ht=new Ke,Ht.layers.enable(bt),Ht.viewport=new oe,W[bt]=Ht),Ht.matrix.fromArray(Ot.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ot.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),bt===0&&(v.matrix.copy(Ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(Ht)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const bt=u.getDepthInformation(lt[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let lt=0;lt<y.length;lt++){const ft=b[lt],Pt=y[lt];ft!==null&&Pt!==void 0&&Pt.update(ft,Q,c||a)}ct&&ct(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Vt=new Ph;Vt.setAnimationLoop(Ut),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const ni=new pn,K0=new le;function Z0(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Ah(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,M,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),h(d,m)):m.isMeshStandardMaterial?(r(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,b)):m.isMeshMatcapMaterial?(r(d,m),g(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),_(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?l(d,m,M,y):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Be&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Be&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const M=t.get(m),y=M.envMap,b=M.envMapRotation;y&&(d.envMap.value=y,ni.copy(b),ni.x*=-1,ni.y*=-1,ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),d.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(ni)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,M,y){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*M,d.scale.value=y*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,M){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const M=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function c(M,y){let b=s[M.id];b===void 0&&(g(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",d));const I=y.program;n.updateUBOMapping(M,I);const R=t.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function h(M){const y=u();M.__bindingPointIndex=y;const b=i.createBuffer(),I=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],b=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,A=b.length;R<A;R++){const D=Array.isArray(b[R])?b[R]:[b[R]];for(let W=0,v=D.length;W<v;W++){const E=D[W];if(p(E,R,W,I)===!0){const H=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let Z=0;Z<z.length;Z++){const B=z[Z],tt=_(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,H+X,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,y,b,I){const R=M.value,A=y+"_"+b;if(I[A]===void 0)return typeof R=="number"||typeof R=="boolean"?I[A]=R:I[A]=R.clone(),!0;{const D=I[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return I[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(M){const y=M.uniforms;let b=0;const I=16;for(let A=0,D=y.length;A<D;A++){const W=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,E=W.length;v<E;v++){const H=W[v],z=Array.isArray(H.value)?H.value:[H.value];for(let X=0,Z=z.length;X<Z;X++){const B=z[X],tt=_(B),V=b%I,dt=V%tt.boundary,et=V+dt;b+=dt,et!==0&&I-et<tt.storage&&(b+=I-et),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=tt.storage}}}const R=b%I;return R>0&&(b+=I-R),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function d(M){const y=M.target;y.removeEventListener("dispose",d);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Q0{constructor(t={}){const{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Vn,this.toneMappingExposure=1;const y=this;let b=!1,I=0,R=0,A=null,D=-1,W=null;const v=new oe,E=new oe;let H=null;const z=new kt(0);let X=0,Z=e.width,B=e.height,tt=1,V=null,dt=null;const et=new oe(0,0,Z,B),ct=new oe(0,0,Z,B);let Ut=!1;const Vt=new Wo;let q=!1,Q=!1;const lt=new le,ft=new le,Pt=new U,bt=new oe,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Ht(){return A===null?tt:1}let C=n;function He(S,L){return e.getContext(S,L)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${No}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ut,!1),C===null){const L="webgl2";if(C=He(L,S),C===null)throw He(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Bt,Wt,At,te,Lt,T,x,F,Y,J,$,yt,rt,pt,Xt,nt,mt,Rt,Ct,gt,zt,It,Qt,P;function ht(){Bt=new sg(C),Bt.init(),It=new V0(C,Bt),Wt=new Jm(C,Bt,t,It),At=new z0(C),Wt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),te=new og(C),Lt=new w0,T=new G0(C,Bt,At,Lt,Wt,It,te),x=new tg(y),F=new ig(y),Y=new pf(C),Qt=new Km(C,Y),J=new rg(C,Y,te,Qt),$=new cg(C,J,Y,te),Ct=new lg(C,Wt,T),nt=new Qm(Lt),yt=new E0(y,x,F,Bt,Wt,Qt,nt),rt=new Z0(y,Lt),pt=new A0,Xt=new D0(Bt),Rt=new jm(y,x,F,At,$,f,l),mt=new O0(y,$,Wt),P=new J0(C,te,Wt,At),gt=new Zm(C,Bt,te),zt=new ag(C,Bt,te),te.programs=yt.programs,y.capabilities=Wt,y.extensions=Bt,y.properties=Lt,y.renderLists=pt,y.shadowMap=mt,y.state=At,y.info=te}ht();const G=new j0(y,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Bt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Bt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(Z,B,!1))},this.getSize=function(S){return S.set(Z,B)},this.setSize=function(S,L,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,B=L,e.width=Math.floor(S*tt),e.height=Math.floor(L*tt),k===!0&&(e.style.width=S+"px",e.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(Z*tt,B*tt).floor()},this.setDrawingBufferSize=function(S,L,k){Z=S,B=L,tt=k,e.width=Math.floor(S*k),e.height=Math.floor(L*k),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(et)},this.setViewport=function(S,L,k,O){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,L,k,O),At.viewport(v.copy(et).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(ct)},this.setScissor=function(S,L,k,O){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,L,k,O),At.scissor(E.copy(ct).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(S){At.setScissorTest(Ut=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){dt=S},this.getClearColor=function(S){return S.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(S=!0,L=!0,k=!0){let O=0;if(S){let N=!1;if(A!==null){const it=A.texture.format;N=it===Ho||it===zo||it===Bo}if(N){const it=A.texture.type,ot=it===In||it===hi||it===ys||it===Xi||it===ko||it===Oo,_t=Rt.getClearColor(),vt=Rt.getClearAlpha(),Et=_t.r,wt=_t.g,Mt=_t.b;ot?(p[0]=Et,p[1]=wt,p[2]=Mt,p[3]=vt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Et,g[1]=wt,g[2]=Mt,g[3]=vt,C.clearBufferiv(C.COLOR,0,g))}else O|=C.COLOR_BUFFER_BIT}L&&(O|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Xt.dispose(),Lt.dispose(),x.dispose(),F.dispose(),$.dispose(),Qt.dispose(),P.dispose(),yt.dispose(),G.dispose(),G.removeEventListener("sessionstart",ul),G.removeEventListener("sessionend",dl),Kn.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=te.autoReset,L=mt.enabled,k=mt.autoUpdate,O=mt.needsUpdate,N=mt.type;ht(),te.autoReset=S,mt.enabled=L,mt.autoUpdate=k,mt.needsUpdate=O,mt.type=N}function ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gt(S){const L=S.target;L.removeEventListener("dispose",Gt),de(L)}function de(S){De(S),Lt.remove(S)}function De(S){const L=Lt.get(S).programs;L!==void 0&&(L.forEach(function(k){yt.releaseProgram(k)}),S.isShaderMaterial&&yt.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,k,O,N,it){L===null&&(L=Ot);const ot=N.isMesh&&N.matrixWorld.determinant()<0,_t=Vu(S,L,k,O,N);At.setMaterial(O,ot);let vt=k.index,Et=1;if(O.wireframe===!0){if(vt=J.getWireframeAttribute(k),vt===void 0)return;Et=2}const wt=k.drawRange,Mt=k.attributes.position;let Zt=wt.start*Et,ee=(wt.start+wt.count)*Et;it!==null&&(Zt=Math.max(Zt,it.start*Et),ee=Math.min(ee,(it.start+it.count)*Et)),vt!==null?(Zt=Math.max(Zt,0),ee=Math.min(ee,vt.count)):Mt!=null&&(Zt=Math.max(Zt,0),ee=Math.min(ee,Mt.count));const re=ee-Zt;if(re<0||re===1/0)return;Qt.setup(N,O,_t,k,vt);let Ge,Yt=gt;if(vt!==null&&(Ge=Y.get(vt),Yt=zt,Yt.setIndex(Ge)),N.isMesh)O.wireframe===!0?(At.setLineWidth(O.wireframeLinewidth*Ht()),Yt.setMode(C.LINES)):Yt.setMode(C.TRIANGLES);else if(N.isLine){let St=O.linewidth;St===void 0&&(St=1),At.setLineWidth(St*Ht()),N.isLineSegments?Yt.setMode(C.LINES):N.isLineLoop?Yt.setMode(C.LINE_LOOP):Yt.setMode(C.LINE_STRIP)}else N.isPoints?Yt.setMode(C.POINTS):N.isSprite&&Yt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const St=N._multiDrawStarts,be=N._multiDrawCounts,jt=N._multiDrawCount,tn=vt?Y.get(vt).bytesPerElement:1,mi=Lt.get(O).currentProgram.getUniforms();for(let Ve=0;Ve<jt;Ve++)mi.setValue(C,"_gl_DrawID",Ve),Yt.render(St[Ve]/tn,be[Ve])}else if(N.isInstancedMesh)Yt.renderInstances(Zt,re,N.count);else if(k.isInstancedBufferGeometry){const St=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,be=Math.min(k.instanceCount,St);Yt.renderInstances(Zt,re,be)}else Yt.render(Zt,re)};function $t(S,L,k){S.transparent===!0&&S.side===Tn&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,Ps(S,L,k),S.side=Xn,S.needsUpdate=!0,Ps(S,L,k),S.side=Tn):Ps(S,L,k)}this.compile=function(S,L,k=null){k===null&&(k=S),d=Xt.get(k),d.init(L),M.push(d),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const O=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let ot=0;ot<it.length;ot++){const _t=it[ot];$t(_t,k,N),O.add(_t)}else $t(it,k,N),O.add(it)}),M.pop(),d=null,O},this.compileAsync=function(S,L,k=null){const O=this.compile(S,L,k);return new Promise(N=>{function it(){if(O.forEach(function(ot){Lt.get(ot).currentProgram.isReady()&&O.delete(ot)}),O.size===0){N(S);return}setTimeout(it,10)}Bt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ue=null;function vn(S){Ue&&Ue(S)}function ul(){Kn.stop()}function dl(){Kn.start()}const Kn=new Ph;Kn.setAnimationLoop(vn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(S){Ue=S,G.setAnimationLoop(S),S===null?Kn.stop():Kn.start()},G.addEventListener("sessionstart",ul),G.addEventListener("sessionend",dl),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,L,A),d=Xt.get(S,M.length),d.init(L),M.push(d),ft.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Vt.setFromProjectionMatrix(ft),Q=this.localClippingEnabled,q=nt.init(this.clippingPlanes,Q),_=pt.get(S,m.length),_.init(),m.push(_),G.enabled===!0&&G.isPresenting===!0){const it=y.xr.getDepthSensingMesh();it!==null&&Nr(it,L,-1/0,y.sortObjects)}Nr(S,L,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(V,dt),Jt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Jt&&Rt.addToRenderList(_,S),this.info.render.frame++,q===!0&&nt.beginShadows();const k=d.state.shadowsArray;mt.render(k,S,L),q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,N=_.transmissive;if(d.setupLights(),L.isArrayCamera){const it=L.cameras;if(N.length>0)for(let ot=0,_t=it.length;ot<_t;ot++){const vt=it[ot];pl(O,N,S,vt)}Jt&&Rt.render(S);for(let ot=0,_t=it.length;ot<_t;ot++){const vt=it[ot];fl(_,S,vt,vt.viewport)}}else N.length>0&&pl(O,N,S,L),Jt&&Rt.render(S),fl(_,S,L);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,L),Qt.resetDefaultState(),D=-1,W=null,M.pop(),M.length>0?(d=M[M.length-1],q===!0&&nt.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Nr(S,L,k,O){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Vt.intersectsSprite(S)){O&&bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ft);const ot=$.update(S),_t=S.material;_t.visible&&_.push(S,ot,_t,k,bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Vt.intersectsObject(S))){const ot=$.update(S),_t=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),bt.copy(S.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),bt.copy(ot.boundingSphere.center)),bt.applyMatrix4(S.matrixWorld).applyMatrix4(ft)),Array.isArray(_t)){const vt=ot.groups;for(let Et=0,wt=vt.length;Et<wt;Et++){const Mt=vt[Et],Zt=_t[Mt.materialIndex];Zt&&Zt.visible&&_.push(S,ot,Zt,k,bt.z,Mt)}}else _t.visible&&_.push(S,ot,_t,k,bt.z,null)}}const it=S.children;for(let ot=0,_t=it.length;ot<_t;ot++)Nr(it[ot],L,k,O)}function fl(S,L,k,O){const N=S.opaque,it=S.transmissive,ot=S.transparent;d.setupLightsView(k),q===!0&&nt.setGlobalState(y.clippingPlanes,k),O&&At.viewport(v.copy(O)),N.length>0&&Cs(N,L,k),it.length>0&&Cs(it,L,k),ot.length>0&&Cs(ot,L,k),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function pl(S,L,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new ui(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?bs:In,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const it=d.state.transmissionRenderTarget[O.id],ot=O.viewport||v;it.setSize(ot.z,ot.w);const _t=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Jt&&Rt.render(k);const vt=y.toneMapping;y.toneMapping=Vn;const Et=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),q===!0&&nt.setGlobalState(y.clippingPlanes,O),Cs(S,k,O),T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Mt=0,Zt=L.length;Mt<Zt;Mt++){const ee=L[Mt],re=ee.object,Ge=ee.geometry,Yt=ee.material,St=ee.group;if(Yt.side===Tn&&re.layers.test(O.layers)){const be=Yt.side;Yt.side=Be,Yt.needsUpdate=!0,ml(re,k,O,Ge,Yt,St),Yt.side=be,Yt.needsUpdate=!0,wt=!0}}wt===!0&&(T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it))}y.setRenderTarget(_t),y.setClearColor(z,X),Et!==void 0&&(O.viewport=Et),y.toneMapping=vt}function Cs(S,L,k){const O=L.isScene===!0?L.overrideMaterial:null;for(let N=0,it=S.length;N<it;N++){const ot=S[N],_t=ot.object,vt=ot.geometry,Et=O===null?ot.material:O,wt=ot.group;_t.layers.test(k.layers)&&ml(_t,L,k,vt,Et,wt)}}function ml(S,L,k,O,N,it){S.onBeforeRender(y,L,k,O,N,it),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,L,k,O,S,it),N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=Be,N.needsUpdate=!0,y.renderBufferDirect(k,L,O,N,S,it),N.side=Xn,N.needsUpdate=!0,y.renderBufferDirect(k,L,O,N,S,it),N.side=Tn):y.renderBufferDirect(k,L,O,N,S,it),S.onAfterRender(y,L,k,O,N,it)}function Ps(S,L,k){L.isScene!==!0&&(L=Ot);const O=Lt.get(S),N=d.state.lights,it=d.state.shadowsArray,ot=N.state.version,_t=yt.getParameters(S,N.state,it,L,k),vt=yt.getProgramCacheKey(_t);let Et=O.programs;O.environment=S.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(S.isMeshStandardMaterial?F:x).get(S.envMap||O.environment),O.envMapRotation=O.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Et===void 0&&(S.addEventListener("dispose",Gt),Et=new Map,O.programs=Et);let wt=Et.get(vt);if(wt!==void 0){if(O.currentProgram===wt&&O.lightsStateVersion===ot)return _l(S,_t),wt}else _t.uniforms=yt.getUniforms(S),S.onBeforeCompile(_t,y),wt=yt.acquireProgram(_t,vt),Et.set(vt,wt),O.uniforms=_t.uniforms;const Mt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),_l(S,_t),O.needsLights=Xu(S),O.lightsStateVersion=ot,O.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=wt,O.uniformsList=null,wt}function gl(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=lr.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function _l(S,L){const k=Lt.get(S);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Vu(S,L,k,O,N){L.isScene!==!0&&(L=Ot),T.resetTextureUnits();const it=L.fog,ot=O.isMeshStandardMaterial?L.environment:null,_t=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yn,vt=(O.isMeshStandardMaterial?F:x).get(O.envMap||ot),Et=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,wt=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Mt=!!k.morphAttributes.position,Zt=!!k.morphAttributes.normal,ee=!!k.morphAttributes.color;let re=Vn;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(re=y.toneMapping);const Ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Yt=Ge!==void 0?Ge.length:0,St=Lt.get(O),be=d.state.lights;if(q===!0&&(Q===!0||S!==W)){const Ye=S===W&&O.id===D;nt.setState(O,S,Ye)}let jt=!1;O.version===St.__version?(St.needsLights&&St.lightsStateVersion!==be.state.version||St.outputColorSpace!==_t||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==vt||O.fog===!0&&St.fog!==it||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==nt.numPlanes||St.numIntersection!==nt.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==wt||St.morphTargets!==Mt||St.morphNormals!==Zt||St.morphColors!==ee||St.toneMapping!==re||St.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,St.__version=O.version);let tn=St.currentProgram;jt===!0&&(tn=Ps(O,L,N));let mi=!1,Ve=!1,Fr=!1;const ce=tn.getUniforms(),Dn=St.uniforms;if(At.useProgram(tn.program)&&(mi=!0,Ve=!0,Fr=!0),O.id!==D&&(D=O.id,Ve=!0),mi||W!==S){Wt.reverseDepthBuffer?(lt.copy(S.projectionMatrix),zd(lt),Hd(lt),ce.setValue(C,"projectionMatrix",lt)):ce.setValue(C,"projectionMatrix",S.projectionMatrix),ce.setValue(C,"viewMatrix",S.matrixWorldInverse);const Ye=ce.map.cameraPosition;Ye!==void 0&&Ye.setValue(C,Pt.setFromMatrixPosition(S.matrixWorld)),Wt.logarithmicDepthBuffer&&ce.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ce.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,Ve=!0,Fr=!0)}if(N.isSkinnedMesh){ce.setOptional(C,N,"bindMatrix"),ce.setOptional(C,N,"bindMatrixInverse");const Ye=N.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ce.setValue(C,"boneTexture",Ye.boneTexture,T))}N.isBatchedMesh&&(ce.setOptional(C,N,"batchingTexture"),ce.setValue(C,"batchingTexture",N._matricesTexture,T),ce.setOptional(C,N,"batchingIdTexture"),ce.setValue(C,"batchingIdTexture",N._indirectTexture,T),ce.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(C,"batchingColorTexture",N._colorsTexture,T));const kr=k.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&Ct.update(N,k,tn),(Ve||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,ce.setValue(C,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Dn.envMap.value=vt,Dn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Dn.envMapIntensity.value=L.environmentIntensity),Ve&&(ce.setValue(C,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&Wu(Dn,Fr),it&&O.fog===!0&&rt.refreshFogUniforms(Dn,it),rt.refreshMaterialUniforms(Dn,O,tt,B,d.state.transmissionRenderTarget[S.id]),lr.upload(C,gl(St),Dn,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(lr.upload(C,gl(St),Dn,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ce.setValue(C,"center",N.center),ce.setValue(C,"modelViewMatrix",N.modelViewMatrix),ce.setValue(C,"normalMatrix",N.normalMatrix),ce.setValue(C,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ye=O.uniformsGroups;for(let Or=0,qu=Ye.length;Or<qu;Or++){const vl=Ye[Or];P.update(vl,tn),P.bind(vl,tn)}}return tn}function Wu(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Xu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,L,k){Lt.get(S.texture).__webglTexture=L,Lt.get(S.depthTexture).__webglTexture=k;const O=Lt.get(S);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=k===void 0,O.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const k=Lt.get(S);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,k=0){A=S,I=L,R=k;let O=!0,N=null,it=!1,ot=!1;if(S){const vt=Lt.get(S);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(C.FRAMEBUFFER,null),O=!1;else if(vt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(vt.__hasExternalTextures)T.rebindTextures(S,Lt.get(S.texture).__webglTexture,Lt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Mt=S.depthTexture;if(vt.__boundDepthTexture!==Mt){if(Mt!==null&&Lt.has(Mt)&&(S.width!==Mt.image.width||S.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ot=!0);const wt=Lt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[L])?N=wt[L][k]:N=wt[L],it=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=Lt.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[k]:N=wt,v.copy(S.viewport),E.copy(S.scissor),H=S.scissorTest}else v.copy(et).multiplyScalar(tt).floor(),E.copy(ct).multiplyScalar(tt).floor(),H=Ut;if(At.bindFramebuffer(C.FRAMEBUFFER,N)&&O&&At.drawBuffers(S,N),At.viewport(v),At.scissor(E),At.setScissorTest(H),it){const vt=Lt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,vt.__webglTexture,k)}else if(ot){const vt=Lt.get(S.texture),Et=L||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.__webglTexture,k||0,Et)}D=-1},this.readRenderTargetPixels=function(S,L,k,O,N,it,ot){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ot!==void 0&&(_t=_t[ot]),_t){At.bindFramebuffer(C.FRAMEBUFFER,_t);try{const vt=S.texture,Et=vt.format,wt=vt.type;if(!Wt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-O&&k>=0&&k<=S.height-N&&C.readPixels(L,k,O,N,It.convert(Et),It.convert(wt),it)}finally{const vt=A!==null?Lt.get(A).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(S,L,k,O,N,it,ot){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ot!==void 0&&(_t=_t[ot]),_t){const vt=S.texture,Et=vt.format,wt=vt.type;if(!Wt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-O&&k>=0&&k<=S.height-N){At.bindFramebuffer(C.FRAMEBUFFER,_t);const Mt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.bufferData(C.PIXEL_PACK_BUFFER,it.byteLength,C.STREAM_READ),C.readPixels(L,k,O,N,It.convert(Et),It.convert(wt),0);const Zt=A!==null?Lt.get(A).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,Zt);const ee=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Bd(C,ee,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,it),C.deleteBuffer(Mt),C.deleteSync(ee),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,k=0){S.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const O=Math.pow(2,-k),N=Math.floor(S.image.width*O),it=Math.floor(S.image.height*O),ot=L!==null?L.x:0,_t=L!==null?L.y:0;T.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,ot,_t,N,it),At.unbindTexture()},this.copyTextureToTexture=function(S,L,k=null,O=null,N=0){S.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let it,ot,_t,vt,Et,wt;k!==null?(it=k.max.x-k.min.x,ot=k.max.y-k.min.y,_t=k.min.x,vt=k.min.y):(it=S.image.width,ot=S.image.height,_t=0,vt=0),O!==null?(Et=O.x,wt=O.y):(Et=0,wt=0);const Mt=It.convert(L.format),Zt=It.convert(L.type);T.setTexture2D(L,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const ee=C.getParameter(C.UNPACK_ROW_LENGTH),re=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ge=C.getParameter(C.UNPACK_SKIP_PIXELS),Yt=C.getParameter(C.UNPACK_SKIP_ROWS),St=C.getParameter(C.UNPACK_SKIP_IMAGES),be=S.isCompressedTexture?S.mipmaps[N]:S.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,be.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,be.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_t),C.pixelStorei(C.UNPACK_SKIP_ROWS,vt),S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Et,wt,it,ot,Mt,Zt,be.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Et,wt,be.width,be.height,Mt,be.data):C.texSubImage2D(C.TEXTURE_2D,N,Et,wt,it,ot,Mt,Zt,be),C.pixelStorei(C.UNPACK_ROW_LENGTH,ee),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,re),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,St),N===0&&L.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(S,L,k=null,O=null,N=0){S.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,O=arguments[1]||null,S=arguments[2],L=arguments[3],N=arguments[4]||0);let it,ot,_t,vt,Et,wt,Mt,Zt,ee;const re=S.isCompressedTexture?S.mipmaps[N]:S.image;k!==null?(it=k.max.x-k.min.x,ot=k.max.y-k.min.y,_t=k.max.z-k.min.z,vt=k.min.x,Et=k.min.y,wt=k.min.z):(it=re.width,ot=re.height,_t=re.depth,vt=0,Et=0,wt=0),O!==null?(Mt=O.x,Zt=O.y,ee=O.z):(Mt=0,Zt=0,ee=0);const Ge=It.convert(L.format),Yt=It.convert(L.type);let St;if(L.isData3DTexture)T.setTexture3D(L,0),St=C.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)T.setTexture2DArray(L,0),St=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const be=C.getParameter(C.UNPACK_ROW_LENGTH),jt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),tn=C.getParameter(C.UNPACK_SKIP_PIXELS),mi=C.getParameter(C.UNPACK_SKIP_ROWS),Ve=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Et),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wt),S.isDataTexture||S.isData3DTexture?C.texSubImage3D(St,N,Mt,Zt,ee,it,ot,_t,Ge,Yt,re.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(St,N,Mt,Zt,ee,it,ot,_t,Ge,re.data):C.texSubImage3D(St,N,Mt,Zt,ee,it,ot,_t,Ge,Yt,re),C.pixelStorei(C.UNPACK_ROW_LENGTH,be),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,jt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,tn),C.pixelStorei(C.UNPACK_SKIP_ROWS,mi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ve),N===0&&L.generateMipmaps&&C.generateMipmap(St),At.unbindTexture()},this.initRenderTarget=function(S){Lt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),At.unbindTexture()},this.resetState=function(){I=0,R=0,A=null,At.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Go?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===wr?"display-p3":"srgb"}}class Fh extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kh extends Ee{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qi extends _n{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new U,b=new U,I=new U;for(let R=0;R<e.length;R+=3)p(e[R+0],y),p(e[R+1],b),p(e[R+2],I),l(y,b,I,M)}function l(M,y,b,I){const R=I+1,A=[];for(let D=0;D<=R;D++){A[D]=[];const W=M.clone().lerp(b,D/R),v=y.clone().lerp(b,D/R),E=R-D;for(let H=0;H<=E;H++)H===0&&D===R?A[D][H]=W:A[D][H]=W.clone().lerp(v,H/E)}for(let D=0;D<R;D++)for(let W=0;W<2*(R-D)-1;W++){const v=Math.floor(W/2);W%2===0?(f(A[D][v+1]),f(A[D+1][v]),f(A[D][v])):(f(A[D][v+1]),f(A[D+1][v+1]),f(A[D+1][v]))}}function c(M){const y=new U;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(M),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){const M=new U;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const b=d(M)/2/Math.PI+.5,I=m(M)/Math.PI+.5;a.push(b,1-I)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const y=a[M+0],b=a[M+2],I=a[M+4],R=Math.max(y,b,I),A=Math.min(y,b,I);R>.9&&A<.1&&(y<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),I<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,y){const b=M*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){const M=new U,y=new U,b=new U,I=new U,R=new Dt,A=new Dt,D=new Dt;for(let W=0,v=0;W<r.length;W+=9,v+=6){M.set(r[W+0],r[W+1],r[W+2]),y.set(r[W+3],r[W+4],r[W+5]),b.set(r[W+6],r[W+7],r[W+8]),R.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),D.set(a[v+4],a[v+5]),I.copy(M).add(y).add(b).divideScalar(3);const E=d(I);_(R,v+0,M,E),_(A,v+2,y,E),_(D,v+4,b,E)}}function _(M,y,b,I){I<0&&M.x===1&&(a[y]=M.x-1),b.x===0&&b.z===0&&(a[y]=I/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.vertices,t.indices,t.radius,t.details)}}class $o extends Qi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $o(t.radius,t.detail)}}class Yo extends Qi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yo(t.radius,t.detail)}}class jo extends Qi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jo(t.radius,t.detail)}}class Ko extends Qi{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ko(t.radius,t.detail)}}class t_ extends Ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oh extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class e_ extends Oh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _a=new le,pc=new U,mc=new U;class n_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class i_ extends n_{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s_ extends Oh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new i_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);const r_=new kt(16777215);class a_{constructor(t,{rotates:e=!1,flashTime:n=.12}={}){this.root=new ps,t.add(this.root),this.rotates=e,this.flashTime=n,this.flashMats=[],this.bar=null}makeFlashable(t=this.root){t.traverse(e=>{!e.isMesh||!e.material||e.material.__noFlash||(e.material=e.material.clone(),e.material.emissive&&(e.material.userData.baseEmissive=e.material.emissive.getHex(),this.flashMats.push(e.material)))})}setHealthBar(t){return this.bar=t,t}sync(t,e,n,s){this.root.position.lerpVectors(t.prevPos,t.pos,n),this.rotates&&(this.root.rotation.y=Yu(t.prevFacing,t.facing,n)),this.animate(e,t),this.paint(t,s)}snap(t,e,n){this.root.position.copy(t.pos),this.rotates&&(this.root.rotation.y=t.facing),this.animate(e,t),this.paint(t,n)}animate(t,e){}paint(t,e){if(this.flashMats.length){const n=t.flash>0?t.flash/this.flashTime:0,s=t.viewTint?t.viewTint():null;for(const r of this.flashMats)r.emissive.setHex(s??r.userData.baseEmissive),n>0&&r.emissive.lerp(r_,n*.9)}this.bar&&(this.bar.setFraction(t.maxHp?t.hp/t.maxHp:0),e&&this.bar.face(e))}dispose(){var t;(t=this.bar)==null||t.dispose(),this.root.removeFromParent();for(const e of this.flashMats)e.dispose();this.flashMats.length=0}}function o_(i,t,{key:e="config",log:n=!0}={}){return t}const l_={sim:{hz:20},camera:{viewUnits:14,minViewUnits:1.5,maxViewUnits:90,zoomStep:1.12,panMargin:6},grid:{unitPx:140,kind:"square",color:857106,opacity:.34,lineWidth:.9,perUnit:5,unitLabel:"sq",distanceLabel:"ft"},tokens:{defaultSize:1,minSize:.25,maxSize:12,defaultBorder:5219203,slide:{speed:9,min:.2,max:.75},ring:.07,originAlpha:.26,originRingAlpha:.7,layerGap:.002,arrow:{length:.17,gap:.05,alpha:.92,edgeAlpha:.6}},ruler:{color:15923188,widthPx:2.4,dashPx:11,duty:.58,alpha:.85},assets:{maxEdge:2560,quality:.86,maxBytes:48*1024*1024},multiplayer:{appId:"vtt-tabletop",maxPlayers:8,ghostHz:20}},Tt=o_(void 0,l_),Bh=1,Je="gm",Yi="player",_o=["bg","token","gm"];function zh(){return{v:Bh,seq:0,nid:1,scenes:{},sceneOrder:[],activeScene:null,assets:{},roster:{},chat:[]}}function vo(i,t){return`${t}_${i.nid++}`}function c_(i,t="Untitled scene"){return{id:i,name:t,map:null,artW:0,artH:0,grid:{kind:"square",snap:"soft",magnet:.12,measure:"chebyshev",unitLabel:"sq",distanceLabel:"ft",unitPx:140,ox:0,oy:0,color:857106,opacity:.34,perUnit:5},tokens:{},tokenOrder:[],fx:_r()}}const Hh=["rain","snow","fog","embers"],gr=12,Zo=["fade","swirl","curtain","drapes","ink","burn"];function _r(){return{weather:null,intensity:.6,darkness:0,blackout:!1,transition:"fade"}}function h_(i,t={}){return{id:i,asset:null,name:"",x:0,y:0,size:1,rot:0,facing:null,shape:"circle",border:5219203,tint:16777215,layer:"token",owner:"",hp:0,maxHp:0,hidden:!1,light:!1,lightRange:2,...t}}function vr(i,t,{role:e=Yi,color:n=6535316}={}){return{peerId:i,name:t,role:e,color:n,tokens:[]}}function Ce(i){return i.activeScene&&i.scenes[i.activeScene]||null}function u_(i,{isGm:t=!0}={}){const e=Ce(i);if(!e)return[];const n=[];for(const s of e.tokenOrder){const r=e.tokens[s];r&&(r.hidden&&!t||r.layer==="gm"&&!t||n.push(r))}return n}const d_={x0:0,y0:0,x1:16,y1:10};function gc(i){if(!i||!i.artW||!i.artH)return{...d_};const t=i.grid.unitPx||1;return{x0:-i.grid.ox/t,y0:-i.grid.oy/t,x1:(i.artW-i.grid.ox)/t,y1:(i.artH-i.grid.oy)/t}}function xo(i){var t,e;if(!i||typeof i!="object")return zh();for(const n of Object.values(i.scenes||{}))typeof((t=n.grid)==null?void 0:t.snap)=="boolean"&&(n.grid.snap=n.grid.snap?"grid":"off"),typeof((e=n.grid)==null?void 0:e.magnet)!="number"&&(n.grid.magnet=.12),(!n.fx||typeof n.fx!="object")&&(n.fx=_r()),typeof n.fx.intensity!="number"&&(n.fx.intensity=_r().intensity),Zo.includes(n.fx.transition)||(n.fx.transition="fade");return i.v=Bh,i}function Di(i,t,e,{isGm:n=!0}={}){const s=Ce(i);if(!s)return null;for(let r=s.tokenOrder.length-1;r>=0;r--){const a=s.tokens[s.tokenOrder[r]];if(!a||(a.hidden||a.layer==="gm")&&!n)continue;const o=Math.max(.05,a.size)/2,l=t-a.x,c=e-a.y;if(a.shape==="square"?Math.abs(l)<=o&&Math.abs(c)<=o:l*l+c*c<=o*o)return a}return null}const yo=[2,4,6,8,10,12,20,100],un={dice:30,terms:8,modifier:1e3,expr:64,note:60,input:256};function _c(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim().toLowerCase().replace(/\s*([+-])\s*/g,"$1");if(!t)throw new Error("Type a roll, like 2d6+3.");if(/\s/.test(t))throw new Error(`Cannot read "${i.trim()}".`);if(t.length>un.expr)throw new Error("That roll is too long.");const e=[],n=/([+-]?)(?:(\d*)d(\d+|%)(?:k([hl])(\d+))?|(\d+))/y;let s=0,r=0;for(;s<t.length;){n.lastIndex=s;const a=n.exec(t);if(!a||e.length&&!a[1])throw new Error(`Cannot read "${i.trim()}".`);s=n.lastIndex;const o=a[1]==="-"?-1:1;if(a[6]!==void 0){const u=Number(a[6]);if(u>un.modifier)throw new Error(`${u} is a big modifier.`);e.push({flat:u,sign:o});continue}const l=a[2]===""?1:Number(a[2]),c=a[3]==="%"?100:Number(a[3]);if(!yo.includes(c))throw new Error(`There is no d${c}. Try ${yo.map(u=>`d${u}`).join(", ")}.`);if(l<1)throw new Error("Roll at least one die.");if(r+=l,r>un.dice)throw new Error(`At most ${un.dice} dice at once.`);let h=null;if(a[4]){const u=Number(a[5]);if(u<1||u>l)throw new Error(`Cannot keep ${u} of ${l}.`);h={high:a[4]==="h",n:u}}e.push({count:l,sides:c,keep:h,sign:o})}if(e.length>un.terms)throw new Error("Too many parts to that roll.");if(!e.some(a=>a.sides))throw new Error("There are no dice in that.");return e}function Ar(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim();if(!t)throw new Error("Type a roll, like 2d6+3.");if(t.length>un.input)throw new Error("That roll is too long.");const e=t.split(/\s+/);for(let n=e.length;n>=1;n--){let s;try{s=_c(e.slice(0,n).join(" "))}catch{continue}return{terms:s,note:f_(e.slice(n).join(" "))}}throw _c(e[0]),new Error(`Cannot read "${t}".`)}function f_(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,un.note)}function Gh(i){return i.map((t,e)=>{const n=t.sign<0?"-":e?"+":"";if(t.flat!==void 0)return`${n}${t.flat}`;const s=t.keep?`k${t.keep.high?"h":"l"}${t.keep.n}`:"";return`${n}${t.count}d${t.sides===100?"%":t.sides}${s}`}).join("")}function vc(i,t,{id:e,by:n,hidden:s=!1}){const{terms:r,note:a}=Ar(t),o=i.count,l=[];let c=0;for(const f of r){if(f.flat!==void 0){c+=f.sign*f.flat;continue}const p=[];for(let g=0;g<f.count;g++)p.push({sides:f.sides,value:i.int(1,f.sides),kept:!0,sign:f.sign});if(f.keep){const g=p.map((d,m)=>m).sort((d,m)=>(f.keep.high?p[m].value-p[d].value:p[d].value-p[m].value)||d-m),_=new Set(g.slice(0,f.keep.n));p.forEach((d,m)=>{d.kept=_.has(m)})}l.push(...p)}const h=i.int(1,2147483647),u=l.reduce((f,p)=>f+(p.kept?p.sign*p.value:0),0)+c;return{id:e,by:n,expr:Gh(r),...a?{note:a}:{},...s?{hidden:!0}:{},dice:l,mod:c,total:u,from:o,draws:i.count-o,throw:h}}function p_(i){return!i||typeof i!="object"||typeof i.id!="string"||!Array.isArray(i.dice)||i.dice.length<1||i.dice.length>un.dice||i.note!==void 0&&(typeof i.note!="string"||i.note.length>un.note)?!1:i.dice.every(t=>yo.includes(t.sides)&&Number.isInteger(t.value)&&t.value>=1&&t.value<=t.sides)}const ji={keep:200,text:300};function Vh(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,ji.text)}function m_(i){return!!i&&typeof i=="object"&&typeof i.id=="string"&&i.id.length<=64&&typeof i.by=="string"&&i.by.length<=64&&typeof i.text=="string"&&i.text.length>0&&i.text.length<=ji.text&&(i.at===void 0||Number.isFinite(i.at))}function xc(i){i.length>ji.keep&&i.splice(0,i.length-ji.keep)}const Wh="square",Jo="hex-pointy",As="hex-flat",ts="none",Xh=[Wh,Jo,As,ts],g_="off",qh="soft",$h="grid",__=[g_,qh,$h],v_=.5,xr=v_/(Math.sqrt(3)/2);function Rr(i){return i===Jo||i===As}function x_(i,t,e,n=1){if(!e||e.kind===ts)return[i,t];if(Rr(e.kind)){const[r,a]=Yh(i,t,e.kind);return[r,a]}return Math.round(n)%2===1||n<1?[Math.floor(i)+.5,Math.floor(t)+.5]:[Math.round(i),Math.round(t)]}function y_(i,t,e,n=.12){if(!e||e.kind===ts||!(n>0))return[i,t];if(Rr(e.kind)){const[r,a]=Yh(i,t,e.kind);return Math.hypot(i-r,t-a)<=n?[r,a]:[i,t]}const s=r=>{const a=Math.round(r*2)/2;return Math.abs(r-a)<=n?a:r};return[s(i),s(t)]}function Qo(i,t,e,n=1){return(e==null?void 0:e.snap)===$h?x_(i,t,e,n):(e==null?void 0:e.snap)===qh?y_(i,t,e,e.magnet):[i,t]}function M_(i,t,e,n,s,r="euclid"){if(Rr(s==null?void 0:s.kind))return E_(i,t,e,n,s.kind);const a=Math.abs(e-i),o=Math.abs(n-t);if(r==="chebyshev")return Math.max(a,o);if(r==="alternating"){const l=Math.min(a,o);return Math.max(a,o)-l+Math.floor(l)+Math.floor(l/2)+l%1}return Math.hypot(a,o)}function S_(i,t,e,n,s){const r=!s||s.kind===ts,a=M_(i,t,e,n,s,s==null?void 0:s.measure),o=Math.round(a*10)/10,l=Number.isInteger(o)?String(o):o.toFixed(1),c=r?o===1?"unit":"units":s.unitLabel||"sq",h=Math.round(a*((s==null?void 0:s.perUnit)??5)),u=(s==null?void 0:s.distanceLabel)??"ft";return{distance:a,text:u?`${l} ${c} · ${h} ${u}`:`${l} ${c}`}}function Mo(i,t,e){const[n,s]=e===As?[t,i]:[i,t],r=(Math.sqrt(3)/3*n-s/3)/xr,a=2/3*s/xr;return[r,a]}function b_(i,t,e){const n=xr*(Math.sqrt(3)*i+Math.sqrt(3)/2*t),s=xr*(3/2*t);return e===As?[s,n]:[n,s]}function So(i,t){const e=-i-t;let n=Math.round(i),s=Math.round(t);const r=Math.round(e),a=Math.abs(n-i),o=Math.abs(s-t),l=Math.abs(r-e);return a>o&&a>l?n=-s-r:o>l&&(s=-n-r),[n,s]}function Yh(i,t,e){const[n,s]=So(...Mo(i,t,e));return b_(n,s,e)}function E_(i,t,e,n,s){const[r,a]=So(...Mo(i,t,s)),[o,l]=So(...Mo(e,n,s)),c=r-o,h=a-l;return(Math.abs(c)+Math.abs(h)+Math.abs(c+h))/2}function w_(i,t,e){const n=/\((\d{1,3})\s*[x×]\s*(\d{1,3})\)/i.exec(i||"");if(!n)return null;const s=+n[1],r=+n[2];if(!(s>1&&r>1))return null;const a=t/s,o=e/r;if(Math.abs(a-o)>1.5)return null;const l=Math.round((a+o)/2);return l<16||l>1024?null:{unitPx:l,ox:0,oy:0,cols:s,rows:r}}const T_=new Set(["name","size","rot","facing","shape","border","tint","layer","owner","hp","maxHp","hidden","asset","light","lightRange"]),A_=new Set(["kind","snap","magnet","measure","unitPx","ox","oy","color","opacity","perUnit","unitLabel","distanceLabel"]);function yc(i,t){const e={};for(const n of Object.keys(i||{}))t.has(n)&&(e[n]=i[n]);return e}function Mc(i,t){const e={};for(const n of Object.keys(t))e[n]=i[n];return e}const R_={"scene.add":(i,[t={}])=>{const e=t.id||vo(i,"sc"),n={...c_(e,t.name),...t,id:e};return i.scenes[e]=n,i.sceneOrder.push(e),i.activeScene||(i.activeScene=e),["scene.del",e]},"scene.del":(i,[t])=>{const e=i.scenes[t];return e?(delete i.scenes[t],i.sceneOrder=i.sceneOrder.filter(n=>n!==t),i.activeScene===t&&(i.activeScene=i.sceneOrder[0]||null),["scene.add",e]):null},"scene.activate":(i,[t])=>{if(!i.scenes[t]||i.activeScene===t)return null;const e=i.activeScene;return i.activeScene=t,["scene.activate",e]},"scene.rename":(i,[t,e])=>{const n=i.scenes[t];if(!n||n.name===e)return null;const s=n.name;return n.name=e,["scene.rename",t,s]},"scene.map":(i,[t,e,n,s])=>{const r=i.scenes[t];if(!r)return null;const a=["scene.map",t,r.map,r.artW,r.artH];return r.map=e||null,r.artW=n||0,r.artH=s||0,a},"scene.grid":(i,[t,e])=>{const n=i.scenes[t];if(!n)return null;const s=yc(e,A_);if(s.kind&&!Xh.includes(s.kind)&&delete s.kind,s.snap&&!__.includes(s.snap)&&delete s.snap,"magnet"in s&&(s.magnet=Math.min(.25,Math.max(0,+s.magnet||0))),!Object.keys(s).length)return null;const r=Mc(n.grid,s);return Object.assign(n.grid,s),["scene.grid",t,r]},"scene.fx":(i,[t,e])=>{const n=i.scenes[t];if(!n||!e||typeof e!="object")return null;n.fx||(n.fx=_r());const s={};"weather"in e&&(s.weather=Hh.includes(e.weather)?e.weather:null),"darkness"in e&&(s.darkness=Math.round(Math.min(1,Math.max(0,+e.darkness||0))*100)/100),"intensity"in e&&(s.intensity=Math.round(Math.min(1,Math.max(.1,+e.intensity||.1))*100)/100),"blackout"in e&&(s.blackout=!!e.blackout),"transition"in e&&(s.transition=Zo.includes(e.transition)?e.transition:"fade");const r=Object.keys(s).filter(o=>n.fx[o]!==s[o]);if(!r.length)return null;const a=Object.fromEntries(r.map(o=>[o,n.fx[o]]));for(const o of r)n.fx[o]=s[o];return["scene.fx",t,a]},"tok.add":(i,[t={}])=>{const e=Ce(i);if(!e)return null;const n=t.id||vo(i,"tk"),s=h_(n,t);return s.id=n,_o.includes(s.layer)||(s.layer="token"),e.tokens[n]=s,e.tokenOrder.push(n),["tok.del",n]},"tok.del":(i,[t])=>{const e=Ce(i),n=e==null?void 0:e.tokens[t];if(!n)return null;const s=e.tokenOrder.indexOf(t);return delete e.tokens[t],e.tokenOrder.splice(s,1),["tok.restore",n,s]},"tok.restore":(i,[t,e])=>{const n=Ce(i);return!n||!(t!=null&&t.id)?null:(n.tokens[t.id]=t,n.tokenOrder.splice(Math.min(e??n.tokenOrder.length,n.tokenOrder.length),0,t.id),["tok.del",t.id])},"tok.move":(i,[t,e,n])=>{const s=Ce(i),r=s==null?void 0:s.tokens[t];if(!r||r.x===e&&r.y===n)return null;const a=["tok.move",t,r.x,r.y];return r.x=e,r.y=n,a},"tok.patch":(i,[t,e])=>{const n=Ce(i),s=n==null?void 0:n.tokens[t];if(!s)return null;const r=yc(e,T_);if(r.layer&&!_o.includes(r.layer)&&delete r.layer,"light"in r&&(r.light=!!r.light),"lightRange"in r&&(r.lightRange=P_(r.lightRange)),!Object.keys(r).length)return null;const a=Mc(s,r);return Object.assign(s,r),["tok.patch",t,a]},"tok.raise":(i,[t,e=!0])=>{const n=Ce(i);if(!(n!=null&&n.tokens[t]))return null;const s=n.tokenOrder.indexOf(t);if(s<0)return null;const r=n.tokenOrder.length-1;if(e?s===r:s===0)return null;const a=n.tokenOrder.slice();return n.tokenOrder.splice(s,1),e?n.tokenOrder.push(t):n.tokenOrder.unshift(t),["tok.order",a]},"tok.order":(i,[t])=>{const e=Ce(i);if(!e)return null;const n=e.tokenOrder.slice();return e.tokenOrder=t.filter(s=>e.tokens[s]),["tok.order",n]},"asset.add":(i,[t])=>!(t!=null&&t.hash)||i.assets[t.hash]?null:(i.assets[t.hash]=t,["asset.del",t.hash]),"asset.del":(i,[t])=>{const e=i.assets[t];return e?(delete i.assets[t],["asset.add",e]):null},"dice.roll":(i,[t])=>p_(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"roll",...t}),xc(i.chat),["dice.drop",t.id]):null,"dice.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(a=>a.id===t);if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["dice.roll",r]},"chat.say":(i,[t])=>m_(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"msg",id:t.id,by:t.by,text:t.text,at:t.at}),xc(i.chat),["chat.drop",t.id]):null,"chat.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(a=>a.id===t&&a.kind==="msg");if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["chat.say",r]},"peer.join":(i,[t])=>{if(!(t!=null&&t.peerId))return null;const e=i.roster[t.peerId];return i.roster[t.peerId]=t,e?["peer.join",e]:["peer.part",t.peerId]},"peer.part":(i,[t])=>{const e=i.roster[t];return e?(delete i.roster[t],["peer.join",e]):null}};function C_(i,t){if(!Array.isArray(t)||!t.length)return null;const e=R_[t[0]];if(!e)return null;const n=e(i,t.slice(1));return n&&i.seq++,n}function Cr(i,t,e,n){const s=Ce(i),r=s==null?void 0:s.tokens[t];if(!r)return null;const[a,o]=Qo(e,n,s.grid,r.size);return["tok.move",t,Sc(a),Sc(o)]}const Sc=i=>Math.round(i*100)/100;function P_(i){return Math.min(gr,Math.max(1,Math.round(+i)||1))}const bc=6210279;class tl{constructor({state:t=null,seed:e=null}={}){this.state=t?xo(t):zh(),this.seed=e??tl.newSeed(),this.rng=new Br(this.seed),this.secretRng=new Br(xl(this.seed,bc)),this.secrets=[],this.events=new ju,this.undoStack=[],this.redoStack=[],this.maxUndo=200,this.simTime=0,this.leases=new Map,this.said=0}static newSeed(){return Math.random()*4294967296>>>0}get scene(){return Ce(this.state)}get seq(){return this.state.seq}dispatch(t,{record:e=!0}={}){const n=this.applyOne(t);return n?(e&&(this.undoStack.push(n),this.undoStack.length>this.maxUndo&&this.undoStack.shift(),this.redoStack.length=0),this.events.emit("table.changed",[t[0],this.state.seq]),n):null}batch(t){const e=[];for(const n of t){const s=this.applyOne(n);s&&e.push(s)}return e.length?(this.undoStack.push(["batch",e.reverse()]),this.redoStack.length=0,this.events.emit("table.changed",["batch",this.state.seq]),e):null}applyOne(t){const e=C_(this.state,t);return e&&this.events.emitRemote("op",[t,this.state.seq]),e}load(t){this.state=xo(t),this.secrets=[],this.undoStack.length=0,this.redoStack.length=0,this.leases.clear(),this.events.emitLocal("table.changed",["load",this.state.seq])}undo(){return this.flip(this.undoStack,this.redoStack)}redo(){return this.flip(this.redoStack,this.undoStack)}flip(t,e){const n=t.pop();if(!n)return null;const s=n[0]==="batch"?n[1].map(r=>this.applyOne(r)).filter(Boolean).reverse():this.applyOne(n);return s?(e.push(n[0]==="batch"?["batch",s]:s),this.events.emit("table.changed",[n[0],this.state.seq]),n):null}claim(t,e,n=6){const s=this.leases.get(t);return s&&s.by!==e&&s.until>this.simTime?!1:(this.leases.set(t,{by:e,until:this.simTime+n}),!0)}release(t,e){const n=this.leases.get(t);n&&n.by===e&&this.leases.delete(t)}heldBy(t){const e=this.leases.get(t);return e&&e.until>this.simTime?e.by:null}step(t){if(this.simTime+=t,this.leases.size)for(const[e,n]of this.leases)n.until<=this.simTime&&this.leases.delete(e)}rollDice(t,e,{hidden:n=!1}={}){const s=`r_${this.seed.toString(36)}_${this.rng.count}`,r=vc(this.rng,t,{id:s,by:e,hidden:n});return this.dispatch(["dice.roll",r],{record:!1}),r}rollSecret(t,e,n){var a;const s=`s_${this.seed.toString(36)}_${this.secretRng.count}`,r={...vc(this.secretRng,t,{id:s,by:e,hidden:!0}),at:n,after:((a=this.feed().at(-1))==null?void 0:a.id)??null};return this.secrets.push(r),this.secrets.length>ji.keep&&this.secrets.shift(),r}restoreSecrets(t,e){this.secretRng=new Br(xl(this.seed,bc)),e&&this.secretRng.setState(e),this.secrets=Array.isArray(t)?t:[]}feedWithSecrets(){const t=this.feed();if(!this.secrets.length)return t;const e=new Set(t.map(r=>r.id)),n=[],s=r=>{for(const a of this.secrets)a.after===r&&n.push({kind:"roll",...a})};for(const r of this.secrets)r.after!==null&&!e.has(r.after)&&n.push({kind:"roll",...r});s(null);for(const r of t)n.push(r),s(r.id);return n}rolls(){return(this.state.chat||[]).filter(t=>t.kind==="roll")}say(t,e,n){const s=Vh(e);if(!s)return!1;const r=`m_${this.seed.toString(36)}_${this.said++}`;return this.dispatch(["chat.say",{id:r,by:t,text:s,at:Number.isFinite(n)?n:void 0}],{record:!1}),!0}feed(){return this.state.chat||[]}id(t){return vo(this.state,t)}snapshot(){return JSON.parse(JSON.stringify(this.state))}}const L_="vtt",I_=1;let cs=null;function D_(){return cs||(cs=new Promise((i,t)=>{let e;try{e=indexedDB.open(L_,I_)}catch(n){t(n);return}e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains("tables")||n.createObjectStore("tables",{keyPath:"id"}),n.objectStoreNames.contains("assets")||n.createObjectStore("assets",{keyPath:"hash"})},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}).catch(i=>(console.warn("[db] storage unavailable; tables will not be kept",i),cs=null,null)),cs)}async function es(i,t,e,n=null){const s=await D_();return s?new Promise(r=>{let a;try{a=s.transaction(i,t)}catch{r(n);return}const o=e(a.objectStore(i));a.oncomplete=()=>r(o?o.result:!0),a.onerror=()=>r(n),a.onabort=()=>r(n)}):n}async function U_(){return(await es("tables","readonly",t=>t.getAll(),[])||[]).map(({id:t,name:e,code:n,savedAt:s,tokens:r})=>({id:t,name:e,code:n,savedAt:s,tokens:r})).sort((t,e)=>e.savedAt-t.savedAt)}function jh(i){return es("tables","readonly",t=>t.get(i))}function Kh(i){return es("tables","readwrite",t=>t.put(i),!1)}function N_(i){return es("tables","readwrite",t=>t.delete(i),!1)}function Ec(i,t){return es("assets","readwrite",e=>e.put({hash:i,blob:t}),!1)}async function F_(i){const t=await es("assets","readonly",e=>e.get(i));return(t==null?void 0:t.blob)||null}class k_{constructor(){this.blobs=new Map,this.bitmaps=new Map,this.pending=new Map}has(t){return this.blobs.has(t)}async put(t){return this.blobs.set(t.hash,t.blob),this.bitmaps.delete(t.hash),Ec(t.hash,t.blob),t.hash}async putBytes(t,e){return this.blobs.set(t,e),this.bitmaps.delete(t),Ec(t,e),t}async restore(t){const e=[];return await Promise.all(t.map(async n=>{if(this.blobs.has(n))return;const s=await F_(n);s?this.blobs.set(n,s):e.push(n)})),e}async blob(t){return this.blobs.get(t)||null}async bitmap(t){if(!t)return null;const e=this.bitmaps.get(t);if(e)return e;const n=this.pending.get(t);if(n)return n;const s=this.blobs.get(t);if(!s)return null;const r=createImageBitmap(s,{imageOrientation:"flipY"}).then(a=>(this.bitmaps.set(t,a),this.pending.delete(t),a)).catch(()=>(this.pending.delete(t),null));return this.pending.set(t,r),r}missing(t){const e=new Set;for(const n of Object.values(t.scenes||{})){n.map&&e.add(n.map);for(const s of Object.values(n.tokens||{}))s.asset&&e.add(s.asset)}return[...e].filter(n=>!this.blobs.has(n))}trimBitmaps(t){var n;const e=new Set;for(const s of Object.values(t.scenes||{})){s.map&&e.add(s.map);for(const r of Object.values(s.tokens||{}))r.asset&&e.add(r.asset)}for(const[s,r]of this.bitmaps)e.has(s)||((n=r.close)==null||n.call(r),this.bitmaps.delete(s))}}const O_=1200,Rs={minPeriod:12,maxPeriod:400,samples:600,scales:[1,2,3],minConfidence:.35};function B_(i,t,e){const n=new Float32Array(t*e);for(let s=0,r=0;s<n.length;s++,r+=4)n[s]=.299*i[r]+.587*i[r+1]+.114*i[r+2];return n}function z_(i,t,e,n,s={}){const{samples:r,scale:a=2}={...Rs,...s},o=n===0?t:e,l=n===0?e:t,c=new Float64Array(o),h=Math.max(1,Math.floor(l/r)),u=n===0?(f,p)=>i[p*t+f]:(f,p)=>i[f*t+p];for(let f=0;f<l;f+=h)for(let p=a;p<o-a;p++)c[p]+=2*u(p,f)-u(p-a,f)-u(p+a,f);return c}function Zh(i,t){const e=i.length,s=Math.max(3,t|1)>>1,r=new Float64Array(e);let a=0;for(let c=0;c<Math.min(s,e);c++)a+=i[c];let o=0,l=Math.min(s,e)-1;for(let c=0;c<e;c++){for(;l<Math.min(e-1,c+s);)a+=i[++l];for(;o<Math.max(0,c-s);)a-=i[o++];r[c]=i[c]-a/(l-o+1)}return r}function H_(i,t=1.6){let e=0;for(let r=0;r<i.length;r++)e+=i[r]*i[r];const n=t*Math.sqrt(e/Math.max(1,i.length));if(!(n>0))return i;const s=new Float64Array(i.length);for(let r=0;r<i.length;r++)s[r]=Math.max(-n,Math.min(n,i[r]));return s}function G_(i,t){const e=i.length-t;if(e<t*2)return 0;let n=0,s=0,r=0;for(let o=0;o<e;o++){const l=i[o],c=i[o+t];n+=l*c,s+=l*l,r+=c*c}const a=Math.sqrt(s*r);return a>0?n/a:0}function V_(i,t={}){const{minPeriod:e,maxPeriod:n}={...Rs,...t},s=Math.min(n,Math.floor(i.length/3));if(s<=e)return{period:0,score:0,prominence:0};const r=new Float64Array(s+2);for(let b=e;b<=s;b++)r[b]=G_(i,b);const a=s-e+1,o=Zh(r.subarray(e,s+1),Math.max(11,Math.round(a/6))),l=b=>b>=e&&b<=s?o[b-e]:-1/0;let c=e;for(let b=e;b<=s;b++)l(b)>l(c)&&(c=b);if(l(c)<=0)return{period:0,score:0,prominence:0};let h=0,u=0;for(let b=0;b<a;b++)h+=o[b],u+=o[b]*o[b];const f=h/a,p=Math.sqrt(Math.max(0,u/a-f*f)),g=p>0?(l(c)-f)/p:0,_=l(c-1),d=l(c),m=l(c+1),M=Number.isFinite(_)&&Number.isFinite(m)?_-2*d+m:0,y=M!==0?Math.max(-.5,Math.min(.5,.5*(_-m)/M)):0;return{period:c+y,score:r[c],prominence:g}}function W_(i,t,e){let n=0,s=0;for(let r=e;r<i.length-1;r+=t)n+=i[Math.round(r)],s++;return s<=2?0:Math.abs(n)/Math.sqrt(s)}function X_(i,t,e){let n=0,s=0,r=0;for(let l=e;l<i.length-1;l+=t,r++)r%2?s+=i[Math.round(l)]:n+=i[Math.round(l)];const a=Math.min(Math.abs(n),Math.abs(s)),o=Math.max(Math.abs(n),Math.abs(s));return o>0?a/o:0}function q_(i,t,e=.04){let n={period:t,offset:0,score:-1/0};const s=(o,l,c,h,u,f)=>{for(let p=o;p<=l;p+=c){const g=u===null?p:u;for(let _=h;_<g;_+=f){const d=W_(i,p,_);d>n.score&&(n={period:p,offset:_,score:d})}}};s(t*(1-e),t*(1+e),Math.max(.25,t/150),0,null,1);const r=n.period,a=n.offset;return s(r*.995,r*1.005,Math.max(.01,r/4e3),Math.max(0,a-1.5),a+1.5,.2),n}function $_(i,t,e,n={}){const s={...Rs,...n},r=Math.min(s.maxPeriod,Math.floor(Math.max(t,e)/8),Math.floor(Math.min(t,e)/2.5)),a={...s,maxPeriod:r},o=[];for(const R of[0,1])for(const A of s.scales){const D=Zh(z_(i,t,e,R,{...a,scale:A}),r*2),W=H_(D),v=V_(W,a);v.period>0&&o.push({...v,axis:R,scale:A,sig:W,raw:D})}const l={unitPx:0,ox:0,oy:0,confidence:0,readings:o.length,agreed:0,periods:[]};if(o.length<2)return l;const c=[];for(const R of o)for(const A of[1,2])for(let D=1;D<=6;D++){const W=R.period*A/D;W<s.minPeriod||W>r*2||c.some(v=>Math.abs(v-W)/W<.02)||c.push(W)}if(!c.length)return l;const h=R=>{const A=o.map(W=>q_(W.sig,R,.02)),D=A.reduce((W,v,E)=>W+v.score*X_(o[E].raw,v.period,v.offset),0);return{period:R,fits:A,total:D}};let u=null;for(const R of c){const A=h(R);(!u||A.total>u.total)&&(u=A)}const f=R=>u.fits.filter((D,W)=>o[W].axis===R).reduce((D,W)=>W.score>D.score?W:D),p=f(0),g=f(1),_=(p.period+g.period)/2,d=R=>[1,2,3,4].some(A=>Math.abs(R.period*A-_)/_<.03||Math.abs(R.period/A-_)/_<.03),m=o.filter(d),M=new Set(m.map(R=>R.axis)),y=(m.length-1)/(o.length-1),b=m.length?1-Math.exp(-(m.reduce((R,A)=>R+A.prominence,0)/m.length)/5):0,I=Math.max(0,y*b*(M.size===2?1:0));return{unitPx:_,ox:(p.offset%_+_)%_,oy:(g.offset%_+_)%_,confidence:I,readings:o.length,agreed:m.length,periods:o.map(R=>Math.round(R.period*100)/100)}}async function Pr(i){const t=await crypto.subtle.digest("SHA-256",i);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function Jh(i){var f,p;const t=Tt.assets;if(i.size>t.maxBytes)throw new Error(`${i.name} is ${wc(i.size)}MB — the limit is ${wc(t.maxBytes)}MB`);let e;try{e=await createImageBitmap(i)}catch{throw new Error(`${i.name} is not an image the browser can decode`)}const n=e.width,s=e.height,r=Math.max(n,s);let a=i,o=i.type||"image/png",l=!1;if(r>t.maxEdge){const g=t.maxEdge/r,_=Math.max(1,Math.round(n*g)),d=Math.max(1,Math.round(s*g)),m=await Y_(e,_,d,t.quality);(f=e.close)==null||f.call(e),e=await createImageBitmap(m),a=m,o=m.type||"image/webp",l=!0}const c=await a.arrayBuffer(),h=await Pr(c),u=await Qh(e,n);return(p=e.close)==null||p.call(e),{hash:h,name:i.name,mime:o,w:n,h:s,size:c.byteLength,scaled:l,bytes:c,blob:a,detected:u}}async function Y_(i,t,e,n){if(typeof OffscreenCanvas=="function"){const a=new OffscreenCanvas(t,e),o=a.getContext("2d");return o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(i,0,0,t,e),a.convertToBlob({type:"image/webp",quality:n})}const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");return r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(i,0,0,t,e),new Promise((a,o)=>{s.toBlob(l=>l?a(l):o(new Error("could not re-encode the image")),"image/webp",n)})}function wc(i){return(i/1048576).toFixed(1)}async function j_(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`Could not read ${t} (${e.status})`);const n=await e.blob();return new File([n],t,{type:n.type||"image/jpeg"})}async function K_(){try{const i=await fetch("maps/index.json");if(!i.ok)return[];const{maps:t}=await i.json();return Array.isArray(t)?t:[]}catch{return[]}}async function Qh(i,t){const e=Math.min(1,O_/i.width),n=Math.max(1,Math.round(i.width*e)),s=Math.max(1,Math.round(i.height*e)),r=await Z_(i,n,s);if(!r)return null;const a=$_(B_(r,n,s),n,s);if(!a.unitPx)return null;const o=t/n;return{unitPx:a.unitPx*o,ox:a.ox*o,oy:a.oy*o,confidence:a.confidence,agreed:a.agreed,readings:a.readings}}async function Z_(i,t,e){try{const s=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(t,e):Object.assign(document.createElement("canvas"),{width:t,height:e})).getContext("2d",{willReadFrequently:!0});return s.drawImage(i,0,0,t,e),s.getImageData(0,0,t,e).data}catch{return null}}function tu(i){const{hash:t,name:e,mime:n,w:s,h:r,size:a,scaled:o}=i;return{hash:t,name:e,mime:n,w:s,h:r,size:a,scaled:o}}const qn={map:0,grid:.01,bg:.02,dragOrigin:.03,token:.04,ruler:.07,gm:.06,ghost:.08,ui:.1};function zi(i){return-i}function eu(i){return-i}function J_(i,t,e){return(qn[i]??qn.token)+t*e}class Q_{constructor(){this.camera=new Xo(-1,1,1,-1,.01,100),this.camera.position.set(0,0,10),this.viewUnits=Tt.camera.viewUnits,this.aspect=1,this.bounds=null}resize(t,e){this.aspect=e>0?t/e:1,this.apply()}apply(){const t=this.viewUnits/2,e=t*this.aspect,n=this.camera;n.left=-e,n.right=e,n.top=t,n.bottom=-t,n.updateProjectionMatrix()}toWorld(t,e,n=new Dt){const s=this.viewUnits/2;return n.set(this.camera.position.x+t*s*this.aspect,this.camera.position.y+e*s)}toUnits(t,e,n=new Dt){return this.toWorld(t,e,n),n.y=eu(n.y),n}toNdc(t,e,n=new Dt){const s=this.viewUnits/2;return n.set((t-this.camera.position.x)/(s*this.aspect),(e-this.camera.position.y)/s)}pxPerUnit(t){return t/this.viewUnits}panBy(t,e){this.camera.position.x+=t,this.camera.position.y+=e,this.clamp()}zoomAt(t,e,n){const s=Tt.camera,r=this.toWorld(e,n,tv);this.viewUnits=Math.min(s.maxViewUnits,Math.max(s.minViewUnits,this.viewUnits*t)),this.apply();const a=this.toWorld(e,n,ev);this.camera.position.x+=r.x-a.x,this.camera.position.y+=r.y-a.y,this.clamp()}frame({x0:t,y0:e,x1:n,y1:s},r=1.04){const a=Math.max(.001,n-t),o=Math.max(.001,s-e);this.camera.position.x=(t+n)/2,this.camera.position.y=-(e+s)/2;const l=Tt.camera,c=Math.max(o,a/Math.max(.001,this.aspect))*r;this.viewUnits=Math.min(l.maxViewUnits,Math.max(l.minViewUnits,c)),this.apply(),this.clamp()}clamp(){if(!this.bounds)return;const t=Tt.camera.panMargin,e=this.viewUnits/2,n=e*this.aspect,s=this.bounds,r=s.x0-t+n,a=s.x1+t-n,o=-s.y1-t+e,l=-s.y0+t-e,c=this.camera.position;c.x=r>a?(s.x0+s.x1)/2:Math.min(a,Math.max(r,c.x)),c.y=o>l?-(s.y0+s.y1)/2:Math.min(l,Math.max(o,c.y))}}const tv=new Dt,ev=new Dt;class nv{constructor(t,e){this.renderer=e,this.material=new di({color:16777215,transparent:!1}),this.mesh=new Se(new mn(1,1),this.material),this.mesh.position.z=qn.map,this.mesh.visible=!1,t.add(this.mesh),this.hash=null,this.texture=null,this.blank=new Se(new mn(1,1),new di({color:1712671})),this.blank.position.z=qn.map,t.add(this.blank)}update(t,e,n){const s=(t==null?void 0:t.map)||null;s!==this.hash&&(this.hash=s,this.setTexture(null),this.loading=!1),s&&!this.texture&&!this.loading&&n.has(s)&&(this.loading=!0,n.bitmap(s).then(c=>{this.hash===s&&(c?this.setTexture(c):this.loading="failed")}));const r=Math.max(.001,e.x1-e.x0),a=Math.max(.001,e.y1-e.y0),o=(e.x0+e.x1)/2,l=-(e.y0+e.y1)/2;for(const c of[this.mesh,this.blank])c.scale.set(r,a,1),c.position.x=o,c.position.y=l;this.mesh.visible=!!this.texture,this.blank.visible=!this.texture}setTexture(t){var n;if((n=this.texture)==null||n.dispose(),!t){this.texture=null,this.material.map=null,this.material.needsUpdate=!0;return}const e=new Ee(t);e.colorSpace=Fe,e.flipY=!1,e.generateMipmaps=!0,e.minFilter=Rn,e.magFilter=qe,e.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),e.needsUpdate=!0,this.texture=e,this.material.map=e,this.material.needsUpdate=!0}dispose(){this.setTexture(null),this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent(),this.blank.geometry.dispose(),this.blank.material.dispose(),this.blank.removeFromParent()}}const iv={[Wh]:0,[Jo]:1,[As]:2,[ts]:3},sv=`
  varying vec2 vUnit;
  void main() {
    // The quad is placed and scaled in world space; unit space is that with y
    // flipped, which is the one conversion this whole view agrees on.
    vec4 world = modelMatrix * vec4(position, 1.0);
    vUnit = vec2(world.x, -world.y);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,rv=`
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
`;class av{constructor(t){this.material=new ln({vertexShader:sv,fragmentShader:rv,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new kt(Tt.grid.color)},uOpacity:{value:Tt.grid.opacity},uWidth:{value:Tt.grid.lineWidth},uKind:{value:0}}}),this.mesh=new Se(new mn(1,1),this.material),this.mesh.position.z=qn.grid,this.mesh.visible=!1,t.add(this.mesh)}update(t,e){if(!t||t.grid.kind===ts){this.mesh.visible=!1;return}const n=t.grid,s=this.material.uniforms;s.uKind.value=iv[n.kind]??0,s.uColor.value.setHex(n.color??Tt.grid.color),s.uOpacity.value=n.opacity??Tt.grid.opacity,s.uWidth.value=Tt.grid.lineWidth;const r=Math.max(.001,e.x1-e.x0),a=Math.max(.001,e.y1-e.y0);this.mesh.scale.set(r,a,1),this.mesh.position.x=(e.x0+e.x1)/2,this.mesh.position.y=-(e.y0+e.y1)/2,this.mesh.visible=!0}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent()}}const ov=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,lv=`
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
`,Tc=1.3,cv=new mn(1,1),rn=new U,hv=nu([0,.34],[0,-.34],[1,0]),uv=nu([-.09,.46],[-.09,-.46],[1.16,0]);function nu(i,t,e){const n=new _n;return n.setAttribute("position",new ze([i[0],i[1],0,t[0],t[1],0,e[0],e[1],0],3)),n}class Ms extends a_{constructor(t){super(t,{rotates:!1}),this.material=new ln({vertexShader:ov,fragmentShader:lv,transparent:!0,depthWrite:!1,uniforms:{uMap:{value:null},uHasMap:{value:0},uTint:{value:new kt(16777215)},uBorder:{value:new kt(Tt.tokens.defaultBorder)},uRing:{value:Tt.tokens.ring},uSelected:{value:0},uHover:{value:0},uShape:{value:0},uAlpha:{value:1},uRingAlpha:{value:1},uRadius:{value:1/Tc},uFit:{value:new Dt(1,1)}}}),this.mesh=new Se(cv,this.material),this.root.add(this.mesh),this.arrowEdge=new Se(uv,new di({color:659984,transparent:!0,depthWrite:!1})),this.arrow=new Se(hv,new di({color:Tt.tokens.defaultBorder,transparent:!0,depthWrite:!1})),this.arrowEdge.visible=!1,this.arrow.visible=!1,this.root.add(this.arrowEdge,this.arrow),this.hash=null,this.texture=null,this.placed=!1,this.from=new Dt,this.to=new Dt,this.t=0,this.dur=0}get sliding(){return this.t<this.dur}static worldOf(t,e,n=rn){return n.set(t.x,zi(t.y),e)}sync(t,e,n){if(Ms.worldOf(t,n.z,rn),!this.placed)return this.snap(t,e,n);if(rn.x!==this.to.x||rn.y!==this.to.y){const s=Tt.tokens.slide;this.from.set(this.root.position.x,this.root.position.y),this.to.set(rn.x,rn.y);const r=this.from.distanceTo(this.to);this.t=0,this.dur=r<1e-4?0:Math.min(s.max,Math.max(s.min,r/s.speed))}if(this.t<this.dur){this.t=Math.min(this.dur,this.t+e);const s=dv(this.t/this.dur);this.root.position.set(this.from.x+(this.to.x-this.from.x)*s,this.from.y+(this.to.y-this.from.y)*s,n.z)}else this.root.position.copy(rn);this.animate(e,t),this.paint(t,n)}snap(t,e,n){Ms.worldOf(t,n.z,rn),this.root.position.copy(rn),this.to.set(rn.x,rn.y),this.t=this.dur=0,this.placed=!0,this.animate(e,t),this.paint(t,n)}paint(t,e){const n=this.material.uniforms;if((t.asset||null)!==this.hash&&(this.hash=t.asset||null,this.setTexture(null,1,1),this.loading=!1),this.hash&&!this.loading&&!this.texture&&e.library.has(this.hash)){const a=this.hash;this.loading=!0,e.library.bitmap(a).then(o=>{this.hash===a&&(o?this.setTexture(o,o.width,o.height):this.loading="failed")})}const s=Math.max(.05,t.size)*Tc;this.mesh.scale.set(s,s,1),this.mesh.rotation.z=-(t.rot||0),this.placeArrow(t,e),n.uTint.value.setHex(t.tint??16777215),n.uBorder.value.setHex(t.border??Tt.tokens.defaultBorder),n.uRing.value=Tt.tokens.ring,n.uShape.value=t.shape==="square"?1:0,n.uSelected.value=e.selected?1:0,n.uHover.value=e.hovered?1:0;const r=t.hidden?.45:1;n.uAlpha.value=r*(e.alpha??1),n.uRingAlpha.value=r*(e.ringAlpha??e.alpha??1)}placeArrow(t,e){const n=typeof t.facing=="number"&&Number.isFinite(t.facing);if(this.arrow.visible=n,this.arrowEdge.visible=n,!n)return;const s=Tt.tokens.arrow,r=Math.max(.05,t.size),a=r*s.length,o=r/2+r*s.gap,l=-t.facing,c=Math.cos(l)*o,h=Math.sin(l)*o,u=(t.hidden?.45:1)*(e.alpha??1);for(const[f,p,g]of[[this.arrowEdge,a,u*s.edgeAlpha],[this.arrow,a,u*s.alpha]])f.position.set(c,h,.001),f.rotation.z=l,f.scale.set(p,p,1),f.material.opacity=g;this.arrow.material.color.setHex(t.border??Tt.tokens.defaultBorder)}setTexture(t,e,n){var o;(o=this.texture)==null||o.dispose();const s=this.material.uniforms;if(!t){this.texture=null,s.uMap.value=null,s.uHasMap.value=0;return}const r=new Ee(t);r.colorSpace=Fe,r.flipY=!1,r.generateMipmaps=!0,r.minFilter=Rn,r.magFilter=qe,r.needsUpdate=!0,this.texture=r,s.uMap.value=r,s.uHasMap.value=1;const a=e/Math.max(1,n);s.uFit.value.set(Math.min(1,1/a),Math.min(1,a))}dispose(){var t;(t=this.texture)==null||t.dispose(),this.material.dispose(),this.arrow.material.dispose(),this.arrowEdge.material.dispose(),super.dispose()}}function dv(i){return i<.5?4*i*i*i:1-(-2*i+2)**3/2}const fv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,pv=`
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
`,mv=new mn(1,1);class gv{constructor(t){this.material=new ln({vertexShader:fv,fragmentShader:pv,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new kt(Tt.ruler.color)},uLenPx:{value:1},uDashPx:{value:Tt.ruler.dashPx},uDuty:{value:Tt.ruler.duty},uAlpha:{value:Tt.ruler.alpha}}}),this.mesh=new Se(mv,this.material),this.mesh.position.z=qn.ruler,t.add(this.mesh)}set(t,e,n,s,r){const a=t,o=zi(e),l=n,c=zi(s),h=l-a,u=c-o,f=Math.hypot(h,u);if(this.mesh.visible=f*r>2,!this.mesh.visible)return;const p=Tt.ruler;this.mesh.position.set(a+h/2,o+u/2,qn.ruler),this.mesh.rotation.z=Math.atan2(u,h),this.mesh.scale.set(f,p.widthPx/r,1);const g=this.material.uniforms;g.uLenPx.value=f*r,g.uColor.value.setHex(p.color),g.uDashPx.value=p.dashPx,g.uDuty.value=p.duty,g.uAlpha.value=p.alpha}dispose(){this.material.dispose(),this.mesh.removeFromParent()}}const Pi={fontPerRadius:.36,minFont:9,maxFont:13,span:{circle:1.2,square:1.45},minRadius:11},_v="http://www.w3.org/2000/svg";let vv=0;function hs(i,t){const e=document.createElementNS(_v,i);for(const[n,s]of Object.entries(t))e.setAttribute(n,s);return e}class xv{constructor(t,{onResize:e,onResizeEnd:n}={}){this.el=t,this.onResize=e,this.onResizeEnd=n,this.plates=new Map,this.handle=document.createElement("div"),this.handle.className="handle",this.handle.title="Drag to resize",this.handle.hidden=!0,this.el.appendChild(this.handle),this.resizing=null,this.handle.addEventListener("pointerdown",s=>this.beginResize(s)),this.rulers=new Map}beginResize(t){if(!this.handleFor)return;t.preventDefault(),t.stopPropagation(),this.handle.setPointerCapture(t.pointerId),this.resizing=this.handleFor;const e=s=>{var f;if(!this.resizing||!this.lastCtx)return;const{camera:r,rect:a}=this.lastCtx,o=(s.clientX-a.left)/a.width*2-1,l=-((s.clientY-a.top)/a.height*2-1),c=r.toUnits(o,l),h=Math.hypot(c.x-this.resizing.x,c.y-this.resizing.y)*Math.SQRT2,u=Tt.tokens;(f=this.onResize)==null||f.call(this,this.resizing.id,Js(h,u.minSize,u.maxSize))},n=()=>{var r;this.handle.removeEventListener("pointermove",e),this.handle.removeEventListener("pointerup",n),this.handle.removeEventListener("pointercancel",n);const s=this.resizing;this.resizing=null,s&&((r=this.onResizeEnd)==null||r.call(this,s.id))};this.handle.addEventListener("pointermove",e),this.handle.addEventListener("pointerup",n),this.handle.addEventListener("pointercancel",n)}sync(t,e){this.lastCtx=e;const{camera:n,rect:s}=e,r=n.pxPerUnit(s.height),a=new Set;for(const o of t){a.add(o.id);const l=this.plates.get(o.id)||this.createPlate(o.id),c=o.maxHp>0,h=n.toNdc(o.x,zi(o.y)),u=(h.x*.5+.5)*s.width,f=(1-(h.y*.5+.5))*s.height,p=Math.max(.05,o.size)/2*r,g=u>-160&&u<s.width+160&&f>-120&&f<s.height+160,_=this.syncLabel(l,o,u,f,p,g);if(l.last.hp!==o.hp||l.last.maxHp!==o.maxHp){if(l.bar.hidden=!c,c){const m=Js(o.hp/o.maxHp,0,1);l.fill.style.width=`${(m*100).toFixed(1)}%`,l.fill.dataset.state=m>.5?"ok":m>.2?"hurt":"down",l.bar.title=`${o.hp} / ${o.maxHp}`}l.last.hp=o.hp,l.last.maxHp=o.maxHp}if(!c){l.root.hidden=!0;continue}const d=Math.max(p,_)+4;if(l.root.hidden=!g,g){const m=Js(r/110,.62,1.25);l.root.style.transform=`translate3d(${Math.round(u)}px, ${Math.round(f+d)}px, 0) scale(${m.toFixed(3)}) translateX(-50%)`,l.root.style.setProperty("--plate-width",`${Math.max(48,o.size*r*1.15).toFixed(0)}px`)}}for(const[o,l]of this.plates)a.has(o)||(l.root.remove(),l.label.svg.remove(),this.plates.delete(o));this.syncHandle(t,e,r),this.syncRulers(e)}syncLabel(t,e,n,s,r,a){const{label:o}=t;if(!e.name||!a||r<Pi.minRadius)return o.svg.style.display="none",0;o.svg.style.display="";const l=r/100,c=Js(r*Pi.fontPerRadius,Pi.minFont,Pi.maxFont),h=Math.round(c/l),u=typeof e.facing=="number"&&Math.sin(e.facing)>.5,f=e.shape==="square",p=`${e.name}|${h}|${u?"t":"b"}|${f?"s":"c"}`;return o.key!==p&&(o.key=p,this.layoutLabel(o,e.name,h,u,f)),o.svg.style.transform=`translate3d(${n.toFixed(1)}px, ${s.toFixed(1)}px, 0) scale(${l.toFixed(4)}) translate(-100px, -100px)`,u?0:o.reach*l}layoutLabel(t,e,n,s,r){const a=100*(1-Tt.tokens.ring/2);let o,l,c;if(r){const g=s?-a:a,_=a*Pi.span.square;o=`M ${-_} ${g} L ${_} ${g}`,l=2*_,c=l-n}else{const g=s?-1:1;o=`M 0 ${-g*a} A ${a} ${a} 0 1 ${s?1:0} 0 ${g*a} A ${a} ${a} 0 1 ${s?1:0} 0 ${-g*a}`,l=2*Math.PI*a,c=Math.PI*a*Pi.span.circle-n}t.path.setAttribute("d",o),t.text.setAttribute("font-size",n),t.textPath.textContent=e;let h=e;for(;h.length>1&&t.text.getComputedTextLength()>c;)h=h.slice(0,-1),t.textPath.textContent=`${h.trimEnd()}…`;const u=t.text.getComputedTextLength(),f=n*.45,p=Math.min(l,u+f*2);t.path.setAttribute("stroke-width",(n*1.45).toFixed(1)),t.path.setAttribute("stroke-dasharray",`${p.toFixed(1)} ${(l*2).toFixed(1)}`),t.path.setAttribute("stroke-dashoffset",(-(l-p)/2).toFixed(1)),t.svg.setAttribute("aria-label",e),t.reach=a+n*.75}syncRulers({camera:t,rect:e,rulers:n=[]}){const s=new Set;for(const r of n){s.add(r.id);let a=this.rulers.get(r.id);a||(a=document.createElement("div"),a.className="ruler",this.el.appendChild(a),this.rulers.set(r.id,a)),a.textContent!==r.text&&(a.textContent=r.text);const o=t.toNdc((r.ax+r.bx)/2,zi((r.ay+r.by)/2)),l=(o.x*.5+.5)*e.width,c=(1-(o.y*.5+.5))*e.height;a.style.transform=`translate3d(${Math.round(l)}px, ${Math.round(c)}px, 0) translate(-50%, -160%)`,a.hidden=Math.hypot(r.bx-r.ax,r.by-r.ay)*yv(t,e)<26}for(const[r,a]of this.rulers)s.has(r)||(a.remove(),this.rulers.delete(r))}syncHandle(t,{camera:e,rect:n,selectedId:s,dragging:r},a){const o=s?t.find(f=>f.id===s):null;if(this.handleFor=o||null,!o||r){this.handle.hidden=!0;return}const l=e.toNdc(o.x,zi(o.y)),c=(l.x*.5+.5)*n.width,h=(1-(l.y*.5+.5))*n.height,u=o.size/2*a*Math.SQRT1_2;this.handle.hidden=!1,this.handle.style.transform=`translate3d(${Math.round(c+u)}px, ${Math.round(h+u)}px, 0) translate(-50%, -50%)`}createPlate(t){const e=document.createElement("div");e.className="plate";const n=document.createElement("div");n.className="plate-bar";const s=document.createElement("i");n.appendChild(s),e.append(n),this.el.appendChild(e);const r=hs("svg",{class:"token-label",viewBox:"0 0 200 200",width:200,height:200}),a=hs("g",{transform:"translate(100 100)"}),o=`label-${t}-${++vv}`,l=hs("path",{id:o,class:"token-label-band"}),c=hs("text",{class:"token-label-text","dominant-baseline":"central"}),h=hs("textPath",{href:`#${o}`,startOffset:"50%","text-anchor":"middle"});c.appendChild(h),a.append(l,c),r.appendChild(a),this.el.appendChild(r);const f={root:e,bar:n,fill:s,label:{svg:r,path:l,text:c,textPath:h,key:"",reach:0},last:{hp:void 0,maxHp:void 0}};return this.plates.set(t,f),f}clear(){for(const[,t]of this.plates)t.root.remove(),t.label.svg.remove();this.plates.clear();for(const[,t]of this.rulers)t.remove();this.rulers.clear()}}function Js(i,t,e){return i<t?t:i>e?e:i}function yv(i,t){return i.pxPerUnit(t.height)}const Mv="modulepreload",Sv=function(i,t){return new URL(i,t).href},Ac={},iu=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=Sv(c,n),c in Ac)return;Ac[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Mv,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function bv(i){return i===100?["d10t","d10u"]:[`d${i}`]}function Ev(i,t){if(i!==100)return[t];const e=t%100;return[Math.floor(e/10)+1,e%10+1]}function su(i,t){return i==="d10t"?String((t-1)*10).padStart(2,"0"):String(i==="d10u"?t-1:t)}function wv(i,t){return i!=="d6"&&i!=="d2"&&(t==="6"||t==="9")}const Rc=new Map;function Cc(i){let t=Rc.get(i);return t||(t=Tv(i),Rc.set(i,t)),t}function Tv(i){switch(i){case"d2":return ii(i,Rv(.9,.17,24),"caps");case"d4":return ii(i,us(new Ko(1.25)),"vertices");case"d6":return ii(i,us(new Zi(1.25,1.25,1.25)),"faces");case"d8":return ii(i,us(new jo(1)),"faces");case"d10":case"d10t":case"d10u":return ii(i,Av(.95),"faces");case"d12":return ii(i,us(new $o(1)),"faces");case"d20":return ii(i,us(new Yo(1.05)),"faces");default:throw new Error(`No shape for ${i}`)}}function us(i){const e=(i.index?i.toNonIndexed():i).getAttribute("position"),n=[];for(let s=0;s<e.count;s+=3)n.push([0,1,2].map(r=>new U().fromBufferAttribute(e,s+r)));return i.dispose(),n}function Av(i){const t=Math.cos(Math.PI/5),e=.105*i,n=e*(1+t)/(1-t),s=[];for(let l=0;l<10;l++){const c=l*Math.PI/5;s.push(new U(Math.cos(c)*i,Math.sin(c)*i,l%2?-e:e))}const r=new U(0,0,n),a=new U(0,0,-n),o=[];for(let l=0;l<5;l++){const c=s[2*l],h=s[2*l+1],u=s[(2*l+2)%10],f=s[(2*l+3)%10];o.push([r,c,h],[r,h,u]),o.push([a,f,u],[a,u,h])}return o.map(l=>ru(l))}function Rv(i,t,e){const n=[],s=[];for(let a=0;a<e;a++){const o=a/e*Math.PI*2;n.push(new U(Math.cos(o)*i,Math.sin(o)*i,t/2)),s.push(new U(Math.cos(o)*i,Math.sin(o)*i,-t/2))}const r=[];for(let a=1;a<e-1;a++)r.push([n[0],n[a],n[a+1]],[s[0],s[a+1],s[a]]);for(let a=0;a<e;a++){const o=(a+1)%e;r.push([n[a],s[a],s[o]],[n[a],s[o],n[o]])}return r.map(a=>ru(a))}function ru(i){const t=new U().subVectors(i[1],i[0]).cross(new U().subVectors(i[2],i[0])),e=new U().add(i[0]).add(i[1]).add(i[2]).divideScalar(3);return t.dot(e)<0?[i[0],i[2],i[1]]:i}function ii(i,t,e){const n=[],s=d=>{for(let m=0;m<n.length;m++)if(n[m].distanceToSquared(d)<1e-10)return m;return n.push(d.clone()),n.length-1},r=[];for(const d of t){const m=new U().subVectors(d[1],d[0]).cross(new U().subVectors(d[2],d[0])).normalize();let M=r.find(y=>y.normal.dot(m)>.9999);M||(M={normal:m,tris:[],ids:new Set},r.push(M)),M.tris.push(d);for(const y of d)M.ids.add(s(y))}for(const d of r){const m=[...d.ids];d.center=m.reduce((y,b)=>y.add(n[b]),new U).divideScalar(m.length),d.u=new U().subVectors(n[m[0]],d.center).projectOnPlane(d.normal).normalize(),d.w=new U().crossVectors(d.normal,d.u);const M=y=>{const b=new U().subVectors(n[y],d.center);return Math.atan2(b.dot(d.w),b.dot(d.u))};if(d.verts=m.sort((y,b)=>M(y)-M(b)),d.radius=Math.max(...m.map(y=>n[y].distanceTo(d.center))),d.verts.length===3||d.verts.length===4){const y=n[d.verts[0]],b=n[d.verts[1]],I=new U().addVectors(y,b).multiplyScalar(.5),R=new U().subVectors(I,d.center).projectOnPlane(d.normal).normalize();d.w=R.clone().negate(),d.u=new U().crossVectors(d.w,d.normal).normalize()}if(i.startsWith("d10")){const y=d.verts.reduce((b,I)=>Math.abs(n[I].z)>Math.abs(n[b].z)?I:b,d.verts[0]);d.w=new U().subVectors(n[y],d.center).projectOnPlane(d.normal).normalize(),d.u=new U().crossVectors(d.w,d.normal).normalize()}}const a=[],o=[],l=[],c=new _n;let h=0;r.forEach((d,m)=>{const M=d.radius*(i==="d2"?1:1.04);for(const y of d.tris)for(const b of y){const I=new U().subVectors(b,d.center);a.push(b.x,b.y,b.z),o.push(d.normal.x,d.normal.y,d.normal.z),l.push(.5+.5*I.dot(d.u)/M,.5+.5*I.dot(d.w)/M)}c.addGroup(h,d.tris.length*3,m),h+=d.tris.length*3}),c.setAttribute("position",new ze(a,3)),c.setAttribute("normal",new ze(o,3)),c.setAttribute("uv",new ze(l,2));let u;e==="vertices"?u=n.map((d,m)=>({vertex:m,dir:d.clone().normalize()})):e==="caps"?u=r.map((d,m)=>({face:m,dir:d.normal})).filter(d=>Math.abs(d.dir.z)>.99):u=r.map((d,m)=>({face:m,dir:d.normal}));const f=u.length,p=new Array(f).fill(0);let g=1;for(let d=0;d<f;d++){if(p[d])continue;p[d]=g;const m=u.findIndex((M,y)=>y!==d&&!p[y]&&M.dir.dot(u[d].dir)<-.999);for(m>=0&&(p[m]=f+1-g),g++;p.includes(g);)g++}const _=r.map((d,m)=>{if(e==="vertices")return d.verts.map(y=>{const b=u.findIndex(A=>A.vertex===y),I=new U().subVectors(n[y],d.center),R=d.radius*1.04;return{slot:b,x:.5*I.dot(d.u)/R,y:.5*I.dot(d.w)/R}});const M=u.findIndex(y=>y.face===m);return M>=0?[{slot:M,x:0,y:0}]:[]});return{kind:i,geometry:c,faces:r,vertices:n,slots:u,standard:p,faceSlots:_,slotKind:e}}function Cv(i,t){let e=-1,n=-1/0;const s=new U;return i.slots.forEach((r,a)=>{s.copy(r.dir).applyQuaternion(t),s.z>n&&(n=s.z,e=a)}),{slot:e,flat:n}}function $y(i,t,e){const n=i.standard.slice(),s=n.indexOf(e);return s>=0&&s!==t&&([n[s],n[t]]=[n[t],n[s]]),n}const Le=128,au=new Map;function Pv(i){const t=i>>16&255,e=i>>8&255,n=i&255;return .2126*t+.7152*e+.0722*n>150?"#14100c":"#fbf8f2"}const Lv=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`;function Iv(i,t,e){const n=`${i}|${t}|${e.map(c=>`${c.text}@${c.x.toFixed(3)},${c.y.toFixed(3)}`).join(";")}`;let s=au.get(n);if(s)return s;const r=document.createElement("canvas");r.width=Le,r.height=Le;const a=r.getContext("2d");a.fillStyle=Lv(t),a.fillRect(0,0,Le,Le);const o=a.createLinearGradient(0,0,Le,Le);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(1,"rgba(0,0,0,0.10)"),a.fillStyle=o,a.fillRect(0,0,Le,Le);const l=Pv(t);if(i==="d6"&&e.length===1)return Uv(a,Number(e[0].text),l),Pc(n,r);for(const c of e){const h=c.x!==0||c.y!==0,u=c.text.length,f=h?30:u>1?i==="d10t"?44:50:Nv(i),p=Le*(.5+c.x),g=Le*(.5-c.y);a.save(),a.translate(p,g),h&&a.rotate(Math.atan2(c.x,c.y)),a.fillStyle=l,a.font=`700 ${f}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(c.text,0,0),wv(i,c.text)&&a.fillRect(-f*.28,f*.42,f*.56,Math.max(2,f*.07)),a.restore()}return Pc(n,r)}function Pc(i,t){const e=new kh(t);return e.colorSpace=Fe,e.anisotropy=4,au.set(i,e),e}const Dv={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]};function Uv(i,t,e){const n=Le*.24,s=t===1?Le*.1:Le*.075;i.fillStyle=e;for(const[r,a]of Dv[t]||[])i.beginPath(),i.arc(Le/2+r*n,Le/2+a*n,s,0,Math.PI*2),i.fill()}function Nv(i){return{d2:58,d6:64,d8:56,d10:50,d10u:54,d12:54,d20:46}[i]??54}function Fv(i,t){return i.faceSlots.map(e=>e.map(n=>({text:su(i.kind,t[n.slot]),x:n.x*.62,y:n.y*.62})))}const En={fov:34,height:38,rest:2.6,fade:.5,dropped:.38};class kv{constructor({badgeParent:t}){this.scene=new Fh,this.camera=new Ke(En.fov,1,1,200),this.camera.position.set(0,-6,En.height),this.camera.lookAt(0,0,0),this.tray={halfW:12,halfH:8},this.scene.add(new e_(16777215,3814184,1.5));const e=new s_(16777215,1.9);e.position.set(-12,-10,30),this.scene.add(e),this.current=null,this.badge=document.createElement("div"),this.badge.className="dice-total",this.badge.hidden=!0,t.appendChild(this.badge),this.rect={width:1,height:1}}resize(t,e){this.rect={width:t,height:e},this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=Math.hypot(En.height,6),s=Math.tan(En.fov*Math.PI/360)*n;this.tray={halfW:Math.max(4,s*this.camera.aspect-1.2),halfH:Math.max(3,s-1.6)}}get busy(){return!!this.current}play(t,e){if(!cr){Ov().then(()=>this.play(t,e));return}const{toss:n}=cr;this.clear();const s=[];for(const o of t.dice){const l=bv(o.sides),c=Ev(o.sides,o.value);l.forEach((h,u)=>s.push({kind:h,want:c[u],kept:o.kept}))}let r;try{r=n(s,t.throw>>>0,this.tray)}catch(o){console.warn("[dice] could not animate this roll",o);return}const a=s.map((o,l)=>{const c=Cc(o.kind),h=Fv(c,r.labels[l]).map(p=>new t_({map:Iv(o.kind,e,p),roughness:.42,metalness:.04,transparent:!0})),u=new Se(c.geometry,h);this.scene.add(u);const f=new Se(Bv,new di({map:zv(),transparent:!0,depthWrite:!1,opacity:.55}));return this.scene.add(f),{mesh:u,shadow:f,frames:r.frames[l],kept:o.kept,materials:h,kind:o.kind,labels:r.labels[l]}});this.current={id:t.id,total:t.total,note:t.note||"",dice:a,t:0,steps:r.steps,settledAt:null},this.badge.hidden=!0,this.pose(0)}clear(){if(this.current){for(const t of this.current.dice){this.scene.remove(t.mesh,t.shadow);for(const e of t.materials)e.dispose();t.shadow.material.dispose()}this.current=null,this.badge.hidden=!0}}frame(t){const e=this.current;if(!e)return;e.t+=t;const n=e.t/cr.TOSS.dt;if(n<e.steps-1){this.pose(n);return}if(e.settledAt===null){e.settledAt=e.t,this.pose(e.steps-1);for(const r of e.dice)if(!r.kept)for(const a of r.materials)a.opacity=En.dropped;this.showTotal()}const s=e.t-e.settledAt;if(s>En.rest){const r=Math.max(0,1-(s-En.rest)/En.fade);for(const a of e.dice){for(const o of a.materials)o.opacity=r*(a.kept?1:En.dropped);a.shadow.material.opacity=.55*r}this.badge.style.opacity=String(r),r===0&&this.clear()}}pose(t){const e=Math.floor(t),n=t-e;for(const s of this.current.dice){const r=Math.min(e,this.current.steps-1)*7,a=Math.min(e+1,this.current.steps-1)*7,o=s.frames;s.mesh.position.set(o[r]+(o[a]-o[r])*n,o[r+1]+(o[a+1]-o[r+1])*n,o[r+2]+(o[a+2]-o[r+2])*n),Ic.set(o[r+3],o[r+4],o[r+5],o[r+6]),Dc.set(o[a+3],o[a+4],o[a+5],o[a+6]),s.mesh.quaternion.slerpQuaternions(Ic,Dc,n);const l=s.mesh.position.z,c=1.9+l*.12;s.shadow.position.set(s.mesh.position.x+l*.18,s.mesh.position.y+l*.12,.01),s.shadow.scale.set(c,c,1),this.current.settledAt===null&&(s.shadow.material.opacity=.55/(1+l*.25))}}showTotal(){const t=this.current;let e=0,n=0,s=1/0;const r=new U;for(const l of t.dice)l.kept&&(r.copy(l.mesh.position),r.y+=1.25,r.z+=1.25,r.project(this.camera),e+=(r.x*.5+.5)*this.rect.width,s=Math.min(s,(1-(r.y*.5+.5))*this.rect.height),n++);if(!n)return;const a=e/n,o=s-6;if(this.badge.replaceChildren(),t.note){const l=document.createElement("span");l.className="note",l.textContent=t.note,this.badge.append(l)}this.badge.append(String(t.total)),this.badge.style.opacity="1",this.badge.style.transform=`translate3d(${Math.round(a)}px, ${Math.round(o)}px, 0) translate(-50%, -100%)`,this.badge.hidden=!1}readout(){return this.current?this.current.dice.map(t=>{const e=Cc(t.kind),{slot:n}=Cv(e,t.mesh.quaternion);return{kind:t.kind,shows:su(t.kind,t.labels[n]),kept:t.kept}}):[]}render(t){if(!this.current)return;const e=t.autoClear;t.autoClear=!1,t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=e}}let cr=null,Lc=null;function Ov(){return Lc||(Lc=iu(()=>import("./toss-DOldJKQi.js"),[],import.meta.url).then(i=>{cr=i})),Lc}const Ic=new pi,Dc=new pi,Bv=new mn(1,1);let Qs=null;function zv(){if(Qs)return Qs;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.85)"),e.addColorStop(.55,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Qs=new kh(i),Qs}const zn=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Uc=.45,va={fade:1.2,swirl:1.8,curtain:2.2,drapes:1.6,ink:2.2,burn:3.2},Hv=7.5,Gv=.045,Vv=1,xa={rain:{density:700,make:()=>({u:Math.random(),v:Math.random(),s:.75+Math.random()*.5,l:.7+Math.random()*.6})},snow:{density:380,make:()=>({u:Math.random(),v:Math.random(),s:.6+Math.random()*.8,r:Math.random(),p:Math.random()*6.3})},embers:{density:240,make:()=>({u:Math.random(),v:Math.random(),s:.5+Math.random(),r:Math.random(),p:Math.random()*6.3})},fog:{density:26,make:()=>({u:Math.random()*1.4-.2,v:Math.random(),s:.6+Math.random()*.8,r:.22+Math.random()*.2,p:Math.random()*6.3,q:Math.random()*6.3})}};class Wv{constructor(t,e){this.cam=e,this.rect={left:0,top:0,width:1,height:1},this.canvas=document.createElement("canvas"),this.canvas.id="weather",this.g=this.canvas.getContext("2d"),this.dark=document.createElement("canvas"),this.dark.id="darkness",this.dg=this.dark.getContext("2d"),this.darkShown=0,this.cover=Re("fx-cover"),this.shade=Re("fx-shade"),this.swirl=document.createElement("canvas"),this.swirl.className="fx-swirl",this.sg=this.swirl.getContext("2d"),this.curtain=Re("fx-curtain"),this.pool=Re("fx-pool"),this.curtain.append(this.pool),this.drapes=[Re("fx-drape left"),Re("fx-drape right")],this.cover.append(this.shade,this.swirl,this.curtain,...this.drapes,Jv()),this.card=Re("fx-card");const n=Re("title");n.textContent="Intermission";const s=Re("sub");s.innerHTML='<span class="player-only">The GM is setting the scene.</span><span class="gm-only">Players see this card. Bring the table back from FX.</span>',this.card.append(Re("glow"),n,s),this.out=null,this.locked=!1,this.flash=Re("fx-flash"),this.pingLayer=Re("fx-pings");const r=t.querySelector("#overlay");t.insertBefore(this.canvas,r),t.insertBefore(this.dark,r),t.insertBefore(this.cover,r),r.after(this.flash,this.pingLayer,this.card),this.board=[t.querySelector("#canvas"),this.canvas,r],this.overlay=r,this.weather=null,this.parts=[],this.pings=[]}resize(t){this.rect=t;const e=Math.min(1.5,window.devicePixelRatio||1);this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e),this.g.setTransform(e,0,0,e,0,0),this.dark.width=this.canvas.width,this.dark.height=this.canvas.height,this.dg.setTransform(e,0,0,e,0,0),this.darkKey="",this.swirl.width=this.canvas.width,this.swirl.height=this.canvas.height,this.sg.setTransform(e,0,0,e,0,0),this.coverKey="",this.reseed()}frame(t,e,{isGm:n,bounds:s,tokens:r=[],scene:a=null}){a!==this.scene&&(this.scene=a,this.out=t!=null&&t.blackout?1:0,this.darkShown=((t==null?void 0:t.darkness)||0)*(n?Uc:1),this.darkKey="",this.coverKey="");const o=(t==null?void 0:t.weather)||null;o!==this.weather&&(this.weather=o,this.parts=[]),this.intensity=(t==null?void 0:t.intensity)??.6,this.t=(this.t||0)+e,this.boardBox=this.boardRect(s),this.drawWeather(Math.min(e,.05),this.boardBox);const l=n?Uc:1;this.drawBlackout(t,e,l),this.locked=!n&&(!!(t!=null&&t.blackout)||this.out>.002),this.overlay.classList.toggle("fx-out",this.locked),document.body.classList.toggle("fx-locked",this.locked);const c=!!(t!=null&&t.blackout)&&(n||this.out>=.999);this.card.classList.toggle("on",c),this.card.classList.toggle("gm",n),this.drawDarkness(((t==null?void 0:t.darkness)||0)*l,e,r),this.drawPings()}reseed(){this.parts=[],this.g.clearRect(0,0,this.rect.width,this.rect.height)}boardRect(t){if(!t)return null;const e=this.cam.toNdc(t.x0,-t.y0),n=this.cam.toNdc(t.x1,-t.y1),{width:s,height:r}=this.rect,a=(e.x*.5+.5)*s,o=(1-(e.y*.5+.5))*r,l=(n.x*.5+.5)*s,c=(1-(n.y*.5+.5))*r;return{x:a,y:o,w:l-a,h:c-o}}fit(t,e){const n=Math.max(0,e.w*e.h),s=t===xa.fog?1:Math.min(2,n/(1e3*600)),r=t===xa.fog?8+18*this.intensity:t.density*this.intensity*s,a=Math.round(r*(zn?.4:1)),o=Math.max(4,Math.round(a*.05));if(this.parts.length<a)for(let l=0;l<o&&this.parts.length<a;l++)this.parts.push(t.make());else this.parts.length>a&&(this.parts.length=Math.max(a,this.parts.length-o))}drawWeather(t,e){const n=this.g,{width:s,height:r}=this.rect;n.clearRect(0,0,s,r);const a=xa[this.weather];if(!a||!e||e.w<2||e.h<2||(this.fit(a,e),!this.parts.length))return;n.save(),n.beginPath(),n.rect(e.x,e.y,e.w,e.h),n.clip();const o=this.intensity,l=zn?.5:1,c=p=>e.x+p*e.w,h=p=>e.y+p*e.h,u=p=>p*t*l/e.w,f=p=>p*t*l/e.h;if(this.weather==="rain"){n.strokeStyle=`rgba(190, 210, 235, ${(.22+.38*o).toFixed(2)})`,n.lineWidth=.8+.7*o,n.beginPath();const p=650+650*o;for(const g of this.parts){g.v+=f(p*g.s),g.u+=u(p*g.s*.18),g.v>1.02&&(g.v=-.02,g.u=Math.random()*1.2-.1);const _=c(g.u),d=h(g.v),m=(8+16*o)*g.l;n.moveTo(_,d),n.lineTo(_-m*.18,d-m)}n.stroke()}else if(this.weather==="snow"){n.fillStyle=`rgba(245, 248, 255, ${(.55+.4*o).toFixed(2)})`;for(const p of this.parts)p.p+=t*(.6+p.r),p.v+=f((25+55*o)*p.s),p.u+=u(Math.sin(p.p)*(12+22*o)),p.v>1.02&&(p.v=-.02,p.u=Math.random()),n.beginPath(),n.arc(c(p.u),h(p.v),.8+p.r*(1.4+1.6*o),0,Math.PI*2),n.fill()}else if(this.weather==="embers")for(const p of this.parts){p.p+=t*7,p.v-=f((25+60*o)*p.s),p.u+=u(Math.sin(p.p*.3)*14),p.v<-.02&&(p.v=1.02,p.u=Math.random());const g=(.35+.4*o)*(.6+.4*Math.sin(p.p));n.fillStyle=`rgba(255, ${150+Math.round(60*g)}, 60, ${g.toFixed(2)})`,n.beginPath(),n.arc(c(p.u),h(p.v),1+p.r*(1.6+1.2*o),0,Math.PI*2),n.fill()}else if(this.weather==="fog"){const p=.1+.18*o,g=Math.max(e.w,e.h);for(const _ of this.parts){_.p+=t*.35,_.q+=t*.22,_.u+=u((14+26*o)*_.s),_.v+=Math.sin(_.q)*6e-4*l,_.u-_.r>1.15&&(_.u=-.25,_.v=Math.random());const d=_.r*g*(1+.12*Math.sin(_.p)),m=c(_.u),M=h(_.v),y=p*(.75+.25*Math.sin(_.p*1.3+_.q)),b=n.createRadialGradient(m,M,0,m,M,d);b.addColorStop(0,`rgba(208, 214, 218, ${y.toFixed(3)})`),b.addColorStop(.6,`rgba(208, 214, 218, ${(y*.5).toFixed(3)})`),b.addColorStop(1,"rgba(208, 214, 218, 0)"),n.fillStyle=b,n.fillRect(m-d,M-d,d*2,d*2)}}n.restore()}drawBlackout(t,e,n){var _;const s=va[t==null?void 0:t.transition]?t.transition:"fade",r=t!=null&&t.blackout?1:0;this.out===null&&(this.out=r);const a=Math.min(e,.1)/(zn?.6:va[s]),o=Math.sign(r-this.out);this.out=r>this.out?Math.min(r,this.out+a):Math.max(r,this.out-a);const l=this.out,c=l*l*(3-2*l),h=o*(6*l*(1-l))/(zn?.6:va[s]),u=`${s}:${l}:${h}:${n}`,f=s==="burn"&&(c>0&&c<1||((_=this.sparks)==null?void 0:_.length)>0);if(u===this.coverKey&&!f)return;this.coverKey=u,this.cover.style.opacity=String(n),this.cover.dataset.kind=s,this.shade.style.opacity=s==="fade"?c.toFixed(4):"0",this.drawCurtain(s==="curtain"?l:0);const p=s==="drapes"?(1-c)*104:104,g=s==="drapes"&&!zn?h*Hv:0;this.drapes[0].style.transform=`translateX(${-p.toFixed(2)}%) skewX(${(-g).toFixed(2)}deg)`,this.drapes[1].style.transform=`translateX(${p.toFixed(2)}%) skewX(${g.toFixed(2)}deg)`,this.drawSwirl(s==="swirl"?c:0),this.drawInk(s==="ink"?c:0),this.drawBurn(s==="burn"?c:0,e)}drawCurtain(t){const e=this.rect.height,n=1.1*e-Vv,s=2*Gv*e,r=(n+s)*t*t*(3-2*t),a=Math.min(r,n);this.curtain.style.transform=`translateY(${(a-1.1*e).toFixed(1)}px)`,this.curtain.classList.toggle("on",t>0);const o=Math.max(0,r-n)/2;this.pool.style.height=`${o.toFixed(1)}px`,t>0&&(this.shade.style.opacity=Math.min(1,o/6).toFixed(3))}drawInk(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.blots=null,this.inked&&(e.clearRect(0,0,n,s),this.inked=!1);return}if(this.blots||(this.blots=Zv()),this.inked=!0,e.clearRect(0,0,n,s),e.fillStyle="#050608",t>=1){e.fillRect(0,0,n,s);return}const r=Math.hypot(n,s);for(const a of this.blots){const o=Math.max(0,Math.min(1,(t-a.at)/(1-a.at)));if(o<=0)continue;const l=r*a.size*(1-Math.pow(1-o,2.2)),c=a.x*n,h=a.y*s;e.beginPath();for(let u=0;u<=96;u++){const f=u/96*Math.PI*2,p=1+a.lobes.reduce((g,_)=>g+_.amp*Math.sin(f*_.n+_.ph),0);e.lineTo(c+Math.cos(f)*l*p,h+Math.sin(f)*l*p)}e.fill();for(const u of a.drops){const f=l*u.dist,p=Math.max(0,Math.min(1,o*3))*u.size*r;e.beginPath(),e.arc(c+Math.cos(u.a)*f,h+Math.sin(u.a)*f,p,0,Math.PI*2),e.fill()}}t>.85&&(e.globalAlpha=(t-.85)/.15,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawBurn(t,e){const n=this.sg,{width:s,height:r}=this.rect;if(t<=0){this.fire=null,this.fireGrid=null,this.sparks=[],this.burned&&(n.clearRect(0,0,s,r),this.burned=!1);return}const a=this.boardBox,o=a&&a.w>2&&a.h>2?a:{x:0,y:0,w:s,h:r};if(this.fire||(this.fire=Xv(o.w/o.h)),this.sparks||(this.sparks=[]),this.burned=!0,n.clearRect(0,0,s,r),t>=1){n.fillStyle="#000",n.fillRect(o.x,o.y,o.w,o.h),this.drawSparks(e);return}const l=$v(o,{x:0,y:0,w:s,h:r});if(!l){this.drawSparks(e);return}const c=performance.now();let h=this.fireGrid;(!h||!Yv(h.view,l)&&c-h.made>250)&&(h=this.fireGrid=qv(this.fire,o,l));const{gw:u,gh:f,when:p,img:g,cv:_,u0:d,u1:m,v0:M,v1:y,soft:b}=h,I=.035,R=.05,A=t*(this.fire.span+I),D=this.t||0,W=new Float32Array(u),v=new Float32Array(f);for(let et=0;et<u;et++)W[et]=Math.sin(D*11+(d+et/u*(m-d))*75);for(let et=0;et<f;et++)v[et]=Math.sin(D*7.3+(M+et/f*(y-M))*60);const E=g.data,H=[];for(let et=0;et<p.length;et++){const ct=A-p[et],Ut=et*4;if(ct<=-R){E[Ut+3]=0;continue}if(ct>=I+b){E[Ut]=0,E[Ut+1]=0,E[Ut+2]=0,E[Ut+3]=255;continue}const Vt=et%u,q=.75+.25*W[Vt]*v[(et-Vt)/u],Q=jv((ct+b)/(2*b)),lt=Q*Math.max(0,1-Math.max(0,ct)/I)*q,ft=Math.pow(Math.max(0,1+ct/R),2),Pt=255*Math.min(1,.3+lt*1.1),bt=30+190*lt*lt,Ot=10+70*lt*lt*lt;E[Ut]=70+(Pt-70)*Q,E[Ut+1]=34+(bt-34)*Q,E[Ut+2]=10+(Ot-10)*Q,E[Ut+3]=255*Math.max(ft*.9,Q),lt>.5&&H.push(et)}_.getContext("2d").putImageData(g,0,0);const z=o.x+d*o.w,X=o.y+M*o.h,Z=(m-d)*o.w,B=(y-M)*o.h;n.save(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.imageSmoothingEnabled=!0,n.drawImage(_,z,X,Z,B);const tt=h.glow,V=tt.getContext("2d");V.clearRect(0,0,tt.width,tt.height),V.drawImage(_,0,0,tt.width,tt.height),n.globalCompositeOperation="lighter",n.globalAlpha=.5,n.drawImage(tt,z,X,Z,B),n.restore();const dt=Math.min(e,.05);if(!zn&&H.length)for(let et=180*dt;et>0;et-=1){if(Math.random()>=et)continue;const ct=H[Math.floor(Math.random()*H.length)];this.sparks.push({x:z+(ct%u+Math.random())/u*Z,y:X+(Math.floor(ct/u)+Math.random())/f*B,vx:(Math.random()-.5)*40,vy:-30-Math.random()*80,life:.6+Math.random()*1.4,age:0,size:.7+Math.random()*2.2})}this.drawSparks(e)}drawSparks(t){const e=this.sg,n=this.t||0,s=Math.min(t,.05);this.sparks=this.sparks.filter(r=>(r.age+=s)<r.life);for(const r of this.sparks){r.x+=(r.vx+Math.sin(n*3+r.y*.05)*12)*s,r.y+=r.vy*s;const a=1-r.age/r.life;e.fillStyle=`rgba(255, ${Math.round(150+80*a)}, 60, ${a.toFixed(2)})`,e.beginPath(),e.arc(r.x,r.y,r.size*(.5+.5*a),0,Math.PI*2),e.fill()}}drawSwirl(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.swirled&&(e.clearRect(0,0,n,s),this.swirled=!1);return}if(this.swirled=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=n/2,a=s/2,o=Math.hypot(r,a)*1.05,l=5,c=5,h=t*2.4,u=t*Math.PI/l,f=o*(1-Math.pow(1-t,1.5)),p=48;for(let g=0;g<l;g++){const _=g/l*Math.PI*2+h;e.beginPath();for(let d=0;d<=p;d++){const m=o-f*d/p,M=_+c*(1-m/o)-u;e.lineTo(r+Math.cos(M)*m,a+Math.sin(M)*m)}for(let d=p;d>=0;d--){const m=o-f*d/p,M=_+c*(1-m/o)+u;e.lineTo(r+Math.cos(M)*m,a+Math.sin(M)*m)}e.closePath(),e.fill()}t>.88&&(e.globalAlpha=(t-.88)/.12,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawDarkness(t,e,n){const s=1-Math.exp(-Math.min(e,.1)*3);this.darkShown+=(t-this.darkShown)*s,Math.abs(t-this.darkShown)<.002&&(this.darkShown=t);const r=this.darkShown,a=this.dg,{width:o,height:l}=this.rect,c=r>.001?n.filter(p=>p.light):[],h=c.length?"":r.toFixed(3);if(h&&h===this.darkKey||(this.darkKey=h,a.clearRect(0,0,o,l),r<=.001)||(a.fillStyle=`rgba(0, 0, 0, ${r.toFixed(3)})`,a.fillRect(0,0,o,l),!c.length))return;a.save();const u=this.boardBox;u&&u.w>2&&u.h>2&&(a.beginPath(),a.rect(u.x,u.y,u.w,u.h),a.clip()),a.globalCompositeOperation="destination-out";const f=this.t||0;for(const p of c){const g=this.toScreen(p.x,p.y),_=this.toScreen(p.x+1,p.y),d=Math.hypot(_.x-g.x,_.y-g.y),m=(p.size||1)/2+(p.lightRange??2),M=Qv(p.id),y=zn?1:1+.008*Math.sin(f*7.3+M)+.005*Math.sin(f*13.1+M*2),b=m*d*y,I=b+.6*d,R=a.createRadialGradient(g.x,g.y,0,g.x,g.y,I);R.addColorStop(0,"rgba(0, 0, 0, 1)"),R.addColorStop(b/I,"rgba(0, 0, 0, 0.92)"),R.addColorStop(1,"rgba(0, 0, 0, 0)"),a.fillStyle=R,a.fillRect(g.x-I,g.y-I,I*2,I*2)}a.restore()}toScreen(t,e){const n=this.cam.toNdc(t,-e);return{x:(n.x*.5+.5)*this.rect.width,y:(1-(n.y*.5+.5))*this.rect.height}}play(t){if(t==="shake"){if(zn)return;for(const e of this.board)Nc(e,"fx-shake");return}(t==="lightning"||t==="damage")&&(this.flash.dataset.kind=t,Nc(this.flash,"fx-go"))}ping(t,e,n){const s=Re("fx-ping");s.style.setProperty("--ping",n),s.append(Re("ring"),Re("ring"),Re("dot")),this.pingLayer.append(s),this.pings.push({x:t,y:e,el:s,until:performance.now()+1700})}drawPings(){if(!this.pings.length)return;const t=performance.now();this.pings=this.pings.filter(e=>{if(t>e.until)return e.el.remove(),!1;const n=this.cam.toNdc(e.x,-e.y),s=(n.x*.5+.5)*this.rect.width,r=(1-(n.y*.5+.5))*this.rect.height;return e.el.style.transform=`translate3d(${s.toFixed(1)}px, ${r.toFixed(1)}px, 0)`,!0})}}function Xv(i){const t=Math.random()*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=Kv(),r=.45,a=(h,u)=>{const f=u/i,p=s(h*5,f*5)*.5+s(h*13,f*13)*.25+s(h*31,f*31)*.1;return h*e+f*n+p*r},o=[[0,0],[1,0],[0,1],[1,1]].map(([h,u])=>h*e+u/i*n),l=Math.min(...o)-.85*r*.6,c=Math.max(...o)+.85*r*.6;return{at:(h,u)=>a(h,u)-l,span:c-l}}function qv(i,t,e){let s=Math.max(8,Math.ceil(e.w/2)),r=Math.max(8,Math.ceil(e.h/2));const a=Math.sqrt(s*r/25e4);a>1&&(s=Math.ceil(s/a),r=Math.ceil(r/a));const o=(e.x-t.x)/t.w,l=(e.x+e.w-t.x)/t.w,c=(e.y-t.y)/t.h,h=(e.y+e.h-t.y)/t.h,u=new Float32Array(s*r);for(let d=0;d<r;d++){const m=c+(d+.5)/r*(h-c);for(let M=0;M<s;M++)u[d*s+M]=i.at(o+(M+.5)/s*(l-o),m)}const f=document.createElement("canvas");f.width=s,f.height=r;const p=f.getContext("2d").createImageData(s,r),g=document.createElement("canvas");g.width=Math.max(2,Math.round(s/8)),g.height=Math.max(2,Math.round(r/8));const _=1.5*(l-o)/s;return{gw:s,gh:r,when:u,img:p,cv:f,glow:g,u0:o,u1:l,v0:c,v1:h,soft:_,view:{...e},made:performance.now()}}function $v(i,t){const e=Math.max(i.x,t.x),n=Math.max(i.y,t.y),s=Math.min(i.x+i.w,t.x+t.w)-e,r=Math.min(i.y+i.h,t.y+t.h)-n;return s>1&&r>1?{x:e,y:n,w:s,h:r}:null}function Yv(i,t){return Math.abs(i.x-t.x)<1&&Math.abs(i.y-t.y)<1&&Math.abs(i.w-t.w)<1&&Math.abs(i.h-t.h)<1}function jv(i){const t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)}function Kv(){const t=Float32Array.from({length:4096},()=>Math.random()*2-1),e=(s,r)=>t[(r%64+64)%64*64+(s%64+64)%64],n=s=>s*s*(3-2*s);return(s,r)=>{const a=Math.floor(s),o=Math.floor(r),l=n(s-a),c=n(r-o),h=e(a,o)+(e(a+1,o)-e(a,o))*l,u=e(a,o+1)+(e(a+1,o+1)-e(a,o+1))*l;return h+(u-h)*c}}function Zv(){const i=[];for(let t=0;t<44;t++)i.push({x:Math.random()*1.1-.05,y:Math.random()*1.1-.05,at:Math.random()*.65,size:.07+Math.random()*.12,lobes:[3,5,8,13,19].map(e=>({n:e,amp:(.04+Math.random()*.07)/Math.sqrt(e/3),ph:Math.random()*6.3})),drops:Array.from({length:3+Math.floor(Math.random()*5)},()=>({a:Math.random()*6.3,dist:1.1+Math.random()*.5,size:.002+Math.random()*.006}))});return i}function Jv(){const i=document.createElement("div");return i.style.cssText="position:absolute;width:0;height:0;overflow:hidden",i.innerHTML=`<svg width="0" height="0" aria-hidden="true">
    <filter id="fx-hem" x="0" y="-5%" width="100%" height="110%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.009 0" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="matrix" result="map"
        values="0 0 0 0 0.5  0 1 0 0 0  0 0 0 0 0  0 0 0 0 1"/>
      <feDisplacementMap in="SourceGraphic" in2="map" scale="16" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </svg>`,i}function Qv(i){let t=0;for(const e of String(i))t=(t*31+e.charCodeAt(0))%997;return t}function Re(i){const t=document.createElement("div");return t.className=i,t}function Nc(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}class tx{constructor({canvas:t,overlayEl:e,library:n,handlers:s={}}){this.library=n,this.renderer=new Q0({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Fe,this.renderer.setClearColor(725006,1),this.scene=new Fh,this.cam=new Q_,this.map=new nv(this.scene,this.renderer),this.grid=new av(this.scene),this.views=new Map,this.overlay=new xv(e,s),this.dice=new kv({badgeParent:e}),this.fx=new Wv(e.parentElement,this.cam),this.ghosts=new Map,this.turns=new Map,this.origins=new Map,this.originViews=new Map,this.rulerViews=new Map,this.selectedId=null,this.selectedIds=new Set,this.hoveredId=null,this.builtScene=null,this.rect={left:0,top:0,width:1,height:1},this.el=t.parentElement,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(this.el),this.resize()}resize(){var e,n;const t=this.el.getBoundingClientRect();this.rect={left:t.left,top:t.top,width:t.width,height:t.height},!(t.width<1||t.height<1)&&(this.renderer.setSize(t.width,t.height,!1),this.cam.resize(t.width,t.height),(e=this.dice)==null||e.resize(t.width,t.height),(n=this.fx)==null||n.resize(this.rect))}lookAt(t,e){this.cam.camera.position.x=t,this.cam.camera.position.y=-e,this.cam.clamp()}unitsAt(t,e,n){const s=(t-this.rect.left)/this.rect.width*2-1,r=-((e-this.rect.top)/this.rect.height*2-1);return this.cam.toUnits(s,r,n)}ndcAt(t,e){return[(t-this.rect.left)/this.rect.width*2-1,-((e-this.rect.top)/this.rect.height*2-1)]}frame(t,e,{isGm:n=!0,self:s=""}={}){const r=Ce(t),a=gc(r);this.cam.bounds=a,this.map.update(r,a,this.library),this.grid.update(r,a);const o=u_(t,{isGm:n}),l=n?o:ex(o,this.fx.darkShown,s);this.reconcile(r,l);const c=Tt.tokens.layerGap,h={library:this.library,selected:!1,hovered:!1,z:0};for(let g=0;g<l.length;g++){const _=l[g],d=this.views.get(_.id);if(!d)continue;h.z=J_(_.layer,g,c),h.selected=this.selectedIds.has(_.id)||_.id===this.selectedId,h.hovered=_.id===this.hoveredId&&!this.ghosts.size;const m=this.ghosts.get(_.id),M=this.turns.get(_.id),y=M===void 0?_:{..._,facing:M};m?d.snap({...y,x:m.x,y:m.y},e,h):d.sync(y,e,h)}const u=this.syncDrags(l,e,r),f=this.displayTokens(l);this.overlay.sync(f,{camera:this.cam,rect:this.rect,selectedId:this.selectedId,dragging:this.ghosts.size>0,rulers:u}),this.renderer.render(this.scene,this.cam.camera);const p=f.map((g,_)=>this.ghosts.has(g.id)?l[_]:g);this.fx.frame(r==null?void 0:r.fx,e,{isGm:n,bounds:a,tokens:p,scene:r}),this.dice.frame(e),this.dice.render(this.renderer)}syncDrags(t,e,n){const s=this.cam.pxPerUnit(this.rect.height),r=[];for(const[a,o]of this.origins){const l=t.find(_=>_.id===a);if(!l)continue;let c=this.originViews.get(a);c||(c=new Ms(this.scene),this.originViews.set(a,c)),c.snap({...l,x:o.x,y:o.y},e,{library:this.library,z:qn.dragOrigin,selected:!1,hovered:!1,alpha:Tt.tokens.originAlpha,ringAlpha:Tt.tokens.originRingAlpha});const h=this.ghosts.get(a)||{x:l.x,y:l.y};let u=this.rulerViews.get(a);u||(u=new gv(this.scene),this.rulerViews.set(a,u)),u.set(o.x,o.y,h.x,h.y,s);const f=n==null?void 0:n.grid,[p,g]=Qo(h.x,h.y,f,l.size);r.push({id:a,ax:o.x,ay:o.y,bx:h.x,by:h.y,text:S_(o.x,o.y,p,g,f).text})}for(const[a,o]of this.originViews)this.origins.has(a)||(o.dispose(),this.originViews.delete(a));for(const[a,o]of this.rulerViews)this.origins.has(a)||(o.dispose(),this.rulerViews.delete(a));return r}displayTokens(t){return t.map(e=>{const n=this.turns.get(e.id),s=n===void 0?e:{...e,facing:n},r=this.ghosts.get(s.id);if(r)return{...s,x:r.x,y:r.y};const a=this.views.get(s.id);if(!(a!=null&&a.sliding))return s;const o=a.root.position;return{...s,x:o.x,y:eu(o.y)}})}reconcile(t,e){const n=new Set;for(const s of e)n.add(s.id),this.views.has(s.id)||this.views.set(s.id,new Ms(this.scene));for(const[s,r]of this.views)n.has(s)||(r.dispose(),this.views.delete(s));if((t==null?void 0:t.id)!==this.builtScene){for(const[,s]of this.views)s.placed=!1;this.builtScene=(t==null?void 0:t.id)??null}}fit(t){const e=gc(Ce(t));this.cam.bounds=e,this.cam.frame(e)}dispose(){this.observer.disconnect();for(const[,t]of this.views)t.dispose();this.views.clear();for(const[,t]of this.originViews)t.dispose();this.originViews.clear();for(const[,t]of this.rulerViews)t.dispose();this.rulerViews.clear(),this.overlay.clear(),this.map.dispose(),this.grid.dispose(),this.renderer.dispose()}}const Fc=.85;function ex(i,t,e){if(t<Fc)return i;const n=i.filter(s=>s.light);return i.filter(s=>{if(s.owner&&s.owner===e)return!0;let r=0;for(const a of n){const o=(a.size||1)/2+(a.lightRange??2),l=Math.hypot(s.x-a.x,s.y-a.y)-(s.size||1)/2;if(r=Math.max(r,l<=o?1:Math.max(0,1-(l-o)/.6)),r>=1)break}return t*(1-r)<Fc})}const Li=new Dt,nx=4,ix=15,sx=9;class rx{constructor(t,{getState:e,canGrab:n,onSelect:s,onDragMove:r,onDropGroup:a,onContext:o,onTurn:l,onPing:c,isSelected:h=()=>!1,groupOf:u=_=>[_],onToggle:f,locked:p,hasSelection:g=()=>!1}){this.stage=t,this.locked=p,this.getState=e,this.canGrab=n||(()=>!0),this.onSelect=s,this.onDragMove=r,this.onContext=o,this.onTurn=l,this.onDropGroup=a,this.onPing=c,this.isSelected=h,this.groupOf=u,this.onToggle=f,this.hasSelection=g,this.pressAt={x:0,y:0},this.group=[],this.narrowTo=null,this.mode=null,this.pointerId=null,this.dragId=null,this.grabDx=0,this.grabDy=0,this.last={x:0,y:0},this.start={x:0,y:0},this.moved=!1,this.pendingDeselect=!1;const _=t.renderer.domElement;this.el=_,_.addEventListener("pointerdown",d=>this.down(d)),_.addEventListener("pointermove",d=>this.move(d)),_.addEventListener("pointerup",d=>this.up(d)),_.addEventListener("pointercancel",d=>this.up(d)),_.addEventListener("wheel",d=>this.wheel(d),{passive:!1}),_.addEventListener("pointerleave",()=>this.hover(null)),_.addEventListener("contextmenu",d=>this.context(d))}cancel(){var t,e;if(this.pointerId!==null){(e=(t=this.el).releasePointerCapture)==null||e.call(t,this.pointerId),this.pointerId=null,this.dragId&&this.stage.turns.delete(this.dragId);for(const n of this.group)this.stage.ghosts.delete(n.id),this.stage.origins.delete(n.id);this.originAt=null,this.dragId=null,this.group=[],this.narrowTo=null,this.pendingDeselect=!1,this.mode=null}}down(t){var a,o,l,c,h;if(this.pointerId!==null||(a=this.locked)!=null&&a.call(this))return;this.el.setPointerCapture(t.pointerId),this.pointerId=t.pointerId,this.moved=!1,this.start.x=t.clientX,this.start.y=t.clientY,this.last.x=t.clientX,this.last.y=t.clientY;const e=this.stage.unitsAt(t.clientX,t.clientY,Li);if(t.button===0&&t.altKey){t.preventDefault(),this.mode="ping",(o=this.onPing)==null||o.call(this,e.x,e.y,t.shiftKey);return}if(t.button===0&&t.shiftKey){const u=Di(this.getState(),e.x,e.y,{isGm:!0});if(u&&this.canGrab(u)){this.mode="toggle",(l=this.onToggle)==null||l.call(this,u.id);return}}if(t.button===1||t.shiftKey){this.mode="pan";return}if(t.button===2)return;const n=this.arrowAt(e);if(n){this.mode="turn",this.dragId=n.id,(c=this.onSelect)==null||c.call(this,n.id),this.stage.turns.set(n.id,n.facing);return}const s=Di(this.getState(),e.x,e.y,{isGm:!0}),r=s&&this.stage.views.has(s.id)?s:null;if(r&&this.canGrab(r)){this.mode="drag",this.dragId=r.id,this.grabDx=r.x-e.x,this.grabDy=r.y-e.y,this.isSelected(r.id)?this.narrowTo=r.id:(h=this.onSelect)==null||h.call(this,r.id);const u=this.getState(),f=u.scenes[u.activeScene];this.group=this.groupOf(r.id).map(p=>f==null?void 0:f.tokens[p]).filter(p=>p&&this.canGrab(p)).map(p=>({id:p.id,x:p.x,y:p.y})),this.originAt=!0;for(const p of this.group)this.stage.ghosts.set(p.id,{x:p.x,y:p.y})}else this.mode="pan",r||(this.pendingDeselect=!0,this.pressAt.x=e.x,this.pressAt.y=e.y)}move(t){var s,r;if(this.pointerId===null){const a=this.stage.unitsAt(t.clientX,t.clientY,Li),o=this.arrowAt(a);this.hover((o==null?void 0:o.id)??((s=Di(this.getState(),a.x,a.y,{isGm:!0}))==null?void 0:s.id)??null,!!o);return}if(t.pointerId!==this.pointerId)return;const e=t.clientX-this.last.x,n=t.clientY-this.last.y;if(this.last.x=t.clientX,this.last.y=t.clientY,this.moved||(this.moved=Math.hypot(t.clientX-this.start.x,t.clientY-this.start.y)>nx),this.mode==="pan"){const a=this.stage.cam.viewUnits/Math.max(1,this.stage.rect.height);this.stage.cam.panBy(-e*a,n*a);return}if(this.mode==="turn"&&this.dragId){const a=this.tokenById(this.dragId);if(!a)return;const o=this.stage.unitsAt(t.clientX,t.clientY,Li),l=Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI,c=t.altKey?1:ix,h=(Math.round(l/c)*c%360+360)%360;this.stage.turns.set(this.dragId,h*Math.PI/180);return}if(this.mode==="drag"&&this.dragId){const a=this.stage.unitsAt(t.clientX,t.clientY,Li),o=this.group.find(f=>f.id===this.dragId);if(!o)return;const l=a.x+this.grabDx,c=a.y+this.grabDy,h=l-o.x,u=c-o.y;if(this.originAt){for(const f of this.group)this.stage.origins.set(f.id,{x:f.x,y:f.y});this.originAt=null}for(const f of this.group)this.stage.ghosts.set(f.id,{x:f.x+h,y:f.y+u});(r=this.onDragMove)==null||r.call(this,this.dragId,l,c)}}hover(t,e=!1){const n=e?"crosshair":t?"grab":"";this.stage.hoveredId===t&&this.el.style.cursor===n||(this.stage.hoveredId=t,this.el.style.cursor=n)}tokenById(t){var n;const e=this.getState();return((n=e.scenes[e.activeScene])==null?void 0:n.tokens[t])||null}arrowAt(t){const e=this.getState(),n=e.scenes[e.activeScene];if(!n)return null;const s=Tt.tokens.arrow,r=sx/this.stage.cam.pxPerUnit(Math.max(1,this.stage.rect.height));for(let a=n.tokenOrder.length-1;a>=0;a--){const o=n.tokens[n.tokenOrder[a]];if(!o||typeof o.facing!="number"||!this.canGrab(o))continue;const l=Math.max(.05,o.size),c=l*s.length,h=l/2+l*s.gap,u=t.x-o.x,f=t.y-o.y,p=u*Math.cos(o.facing)+f*Math.sin(o.facing),g=-u*Math.sin(o.facing)+f*Math.cos(o.facing),_=Math.max(l/2,h-r);if(p>=_&&p<=h+c+r&&Math.abs(g)<=c*.46+r)return o}return null}up(t){var n,s,r,a,o,l,c,h;if(t.pointerId!==this.pointerId)return;if((s=(n=this.el).releasePointerCapture)==null||s.call(n,t.pointerId),this.pointerId=null,this.mode==="turn"&&this.dragId){const u=this.stage.turns.get(this.dragId);this.stage.turns.delete(this.dragId),this.moved&&typeof u=="number"&&((r=this.onTurn)==null||r.call(this,this.dragId,u)),this.dragId=null}else if(this.mode==="drag"&&this.dragId){const u=this.group.map(f=>({id:f.id,...this.stage.ghosts.get(f.id)}));for(const f of this.group)this.stage.ghosts.delete(f.id),this.stage.origins.delete(f.id);this.originAt=null,this.moved?(a=this.onDropGroup)==null||a.call(this,u.filter(f=>Number.isFinite(f.x))):this.narrowTo&&((o=this.onSelect)==null||o.call(this,this.narrowTo)),this.dragId=null,this.group=[],this.narrowTo=null}else this.pendingDeselect&&!this.moved&&(this.hasSelection()?(l=this.onSelect)==null||l.call(this,null):(c=this.onPing)==null||c.call(this,this.pressAt.x,this.pressAt.y,!1));this.pendingDeselect=!1,this.mode=null;const e=this.stage.unitsAt(t.clientX,t.clientY,Li);this.hover(((h=Di(this.getState(),e.x,e.y,{isGm:!0}))==null?void 0:h.id)??null)}wheel(t){var r;if(t.preventDefault(),(r=this.locked)!=null&&r.call(this)||!t.deltaY)return;const[e,n]=this.stage.ndcAt(t.clientX,t.clientY),s=Tt.camera.zoomStep;this.stage.cam.zoomAt(t.deltaY>0?s:1/s,e,n)}context(t){var s;t.preventDefault();const e=this.stage.unitsAt(t.clientX,t.clientY,Li),n=Di(this.getState(),e.x,e.y,{isGm:!0});(s=this.onContext)==null||s.call(this,n,t)}}function w(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s==="html"?n.innerHTML=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="dataset"?Object.assign(n.dataset,r):n.setAttribute(s,r===!0?"":r));for(const s of e.flat())s==null||s===!1||n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function he(i,t,e,n){return e.id=i,w("div",{class:"field"},w("label",{for:i,text:t}),e,n?w("span",{class:"hint",text:n}):null)}function ue(i,t){if(document.activeElement===i)return;const e=String(t);i.value!==e&&(i.value=e)}function ya(i,t){document.activeElement!==i&&i.checked!==!!t&&(i.checked=!!t)}const ns=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`,bo=i=>parseInt(String(i).replace("#",""),16)&16777215,ax={square:"Square","hex-pointy":"Hex — pointy top","hex-flat":"Hex — flat top",none:"No grid"};class ou{constructor({onCommand:t,onImportMap:e,onImportToken:n,onAddBlank:s,onFit:r,onPickMap:a,onDetect:o,onClose:l}){this.onCommand=t,this.onClose=l,this.els={},this.els.library=w("select",{onchange:()=>{var f;const u=(f=this.library)==null?void 0:f[this.els.library.selectedIndex-1];this.els.library.selectedIndex=0,u&&a(u)}},w("option",{text:"Map pack…"})),this.els.libraryField=he("g-lib","Library",this.els.library),this.els.libraryField.hidden=!0;const c=w("input",{type:"file",accept:"image/*",class:"file",onchange:u=>{var p;const f=(p=u.target.files)==null?void 0:p[0];u.target.value="",f&&e(f)}}),h=w("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:u=>{const f=[...u.target.files||[]];u.target.value="",f.length&&n(f)}});this.els.kind=w("select",{onchange:()=>this.pushGrid({kind:this.els.kind.value})},...Xh.map(u=>w("option",{value:u,text:ax[u]}))),this.els.unitPx=w("input",{type:"number",min:"16",max:"1024",step:"1",oninput:()=>this.pushGrid({unitPx:tr(this.els.unitPx.value,16,1024,Tt.grid.unitPx)})}),this.els.ox=w("input",{type:"number",step:"1",oninput:()=>this.pushGrid({ox:tr(this.els.ox.value,-4096,4096,0)})}),this.els.oy=w("input",{type:"number",step:"1",oninput:()=>this.pushGrid({oy:tr(this.els.oy.value,-4096,4096,0)})}),this.els.color=w("input",{type:"color",oninput:()=>this.pushGrid({color:bo(this.els.color.value)})}),this.els.opacity=w("input",{type:"range",min:"0",max:"1",step:"0.02",oninput:()=>this.pushGrid({opacity:+this.els.opacity.value})}),this.els.unitLabel=w("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"sq",oninput:()=>this.pushGrid({unitLabel:this.els.unitLabel.value.slice(0,8)})}),this.els.distanceLabel=w("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"ft",oninput:()=>this.pushGrid({distanceLabel:this.els.distanceLabel.value.slice(0,8)})}),this.els.measure=w("select",{onchange:()=>this.pushGrid({measure:this.els.measure.value})},w("option",{value:"chebyshev",text:"Diagonal = 1 (5e)"}),w("option",{value:"euclid",text:"True distance"}),w("option",{value:"alternating",text:"Diagonal 1-2-1"})),this.els.snap=w("select",{id:"g-snap",onchange:()=>this.pushGrid({snap:this.els.snap.value})},w("option",{value:"soft",text:"Soft — pulls when close"}),w("option",{value:"grid",text:"Grid — always on a square"}),w("option",{value:"off",text:"Off — anywhere at all"})),this.els.magnet=w("input",{type:"range",min:"0.02",max:"0.25",step:"0.01",id:"g-magnet",oninput:()=>this.pushGrid({magnet:+this.els.magnet.value})}),this.els.feet=w("input",{type:"number",min:"1",max:"1000",step:"1",oninput:()=>this.pushGrid({perUnit:tr(this.els.feet.value,.01,1e5,5)})}),this.els.mapNote=w("p",{class:"note"}),this.root=w("aside",{class:"panel flyout",id:"toolbar",hidden:!0},w("button",{type:"button",class:"ghost close",title:"Close (Esc)","aria-label":"Close",text:"×",onclick:()=>l==null?void 0:l()}),w("div",{class:"tool-sections"},w("section",{dataset:{tool:"map"}},w("h2",{text:"Map"}),this.els.libraryField,w("div",{class:"row"},w("button",{type:"button",class:"primary",text:"Load map…",onclick:()=>c.click()}),w("button",{type:"button",class:"ghost",text:"Fit",title:"Frame the whole map",onclick:r}),w("button",{type:"button",class:"ghost",text:"Detect grid",title:"Measure the square size from the image itself",onclick:o})),c,this.els.mapNote),w("section",{dataset:{tool:"grid"}},w("h2",{text:"Grid"}),he("g-kind","Type",this.els.kind),he("g-unit","Pixels per square",this.els.unitPx,"Read from the filename when a map pack states it, e.g. (33x17)."),w("div",{class:"pair"},he("g-ox","Offset X",this.els.ox),he("g-oy","Offset Y",this.els.oy)),w("div",{class:"pair"},he("g-color","Line",this.els.color),he("g-op","Opacity",this.els.opacity)),he("g-snap","Snapping",this.els.snap),he("g-magnet","Pull",this.els.magnet,"How close a token has to be before the grid takes it."),w("details",{class:"more"},w("summary",{text:"Distance & measuring"}),w("div",{class:"pair"},he("g-per","Distance per cell",this.els.feet),he("g-measure","Measuring",this.els.measure)),w("div",{class:"pair"},he("g-unit-label","Cell called",this.els.unitLabel),he("g-dist-label","Distance called",this.els.distanceLabel)))),w("section",{dataset:{tool:"tokens"}},w("h2",{text:"Tokens"}),w("div",{class:"row"},w("button",{type:"button",class:"primary",text:"Add from file…",onclick:()=>h.click()}),w("button",{type:"button",class:"ghost",text:"Blank",title:"A plain coloured disc",onclick:s})),h,w("p",{class:"note",text:"Drag to move. Shift-drag or middle-drag to pan. Scroll to zoom."}))))}addSection(t){this.root.querySelector(".tool-sections").append(t),t.hidden=this.root.dataset.open!==t.dataset.tool}show(t){this.escBound||(this.root.addEventListener("keydown",e=>{var n;e.key==="Escape"&&(e.stopPropagation(),(n=this.onClose)==null||n.call(this))}),this.escBound=!0),this.root.hidden=!t,this.root.dataset.open=t||"";for(const e of this.root.querySelectorAll("section[data-tool]"))e.hidden=t!=="all"&&e.dataset.tool!==t}setLibrary(t){this.library=t,this.els.libraryField.hidden=!t.length,t.length&&this.els.library.replaceChildren(w("option",{text:`Map pack — ${t.length} maps`}),...t.map(e=>w("option",{text:`${e.name.replace(/\.[a-z0-9]+$/i,"")}  ·  ${(e.size/1048576).toFixed(1)}MB`})))}pushGrid(t){this.sceneId&&this.onCommand(["scene.grid",this.sceneId,t])}refresh(t){const e=t.activeScene?t.scenes[t.activeScene]:null;if(this.sceneId=(e==null?void 0:e.id)||null,this.root.classList.toggle("no-scene",!e),!e)return;const n=e.grid;ue(this.els.kind,n.kind),ue(this.els.unitPx,n.unitPx),ue(this.els.ox,n.ox),ue(this.els.oy,n.oy),ue(this.els.color,ns(n.color)),ue(this.els.opacity,n.opacity),ue(this.els.feet,n.perUnit),ue(this.els.unitLabel,n.unitLabel),ue(this.els.distanceLabel,n.distanceLabel),ue(this.els.measure,n.measure),ue(this.els.snap,n.snap),ue(this.els.magnet,n.magnet),this.els.measure.disabled=Rr(n.kind),this.els.snap.disabled=n.kind==="none",this.els.magnet.disabled=n.kind==="none"||n.snap!=="soft";const s=e.map?t.assets[e.map]:null;if(s){const r=(e.artW/(n.unitPx||1)).toFixed(1),a=(e.artH/(n.unitPx||1)).toFixed(1);this.els.mapNote.textContent=`${s.name} — ${e.artW}×${e.artH}px, about ${r}×${a} squares`+(s.scaled?` · sent as ${Math.round(s.size/1024)}KB`:"")}else this.els.mapNote.textContent="No map yet. The grid still works on a blank table."}static gridGuessFor(t,e,n){const s=w_(t,e,n);return s?{unitPx:s.unitPx,ox:s.ox,oy:s.oy,cols:s.cols,rows:s.rows}:null}}function tr(i,t,e,n){const s=Number(i);return Number.isFinite(s)?Math.min(e,Math.max(t,s)):n}const ox=i=>((i*180/Math.PI+90)%360+360)%360,kc=i=>(i-90)%360*Math.PI/180,Ma=15;class lx{constructor({onChange:t,label:e="Facing"}){this.onChange=t,this.degrees=0,this.enabled=!1,this.needle=document.createElement("i"),this.needle.className="dial-needle",this.readout=document.createElement("span"),this.readout.className="dial-readout",this.root=document.createElement("div"),this.root.className="dial",this.root.tabIndex=0,this.root.setAttribute("role","slider"),this.root.setAttribute("aria-label",e),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","359"),this.root.append(this.needle,this.readout),this.root.addEventListener("pointerdown",n=>this.begin(n)),this.root.addEventListener("keydown",n=>this.key(n))}begin(t){if(!this.enabled)return;t.preventDefault(),this.root.focus(),this.root.setPointerCapture(t.pointerId);const e=s=>this.aim(s),n=()=>{this.root.removeEventListener("pointermove",e),this.root.removeEventListener("pointerup",n),this.root.removeEventListener("pointercancel",n)};this.root.addEventListener("pointermove",e),this.root.addEventListener("pointerup",n),this.root.addEventListener("pointercancel",n),this.aim(t)}aim(t){const e=this.root.getBoundingClientRect(),n=t.clientX-(e.left+e.width/2),s=t.clientY-(e.top+e.height/2),r=Math.atan2(n,-s)*180/Math.PI;this.set(Math.round(r/Ma)*Ma,!0)}key(t){if(!this.enabled)return;const e=t.shiftKey?45:Ma,s={ArrowRight:e,ArrowUp:e,ArrowLeft:-e,ArrowDown:-e,Home:-this.degrees,End:180-this.degrees}[t.key];s!==void 0&&(t.preventDefault(),t.stopPropagation(),this.set(this.degrees+s,!0))}set(t,e=!1){var s;const n=(Math.round(t)%360+360)%360;n===this.degrees&&!e||(this.degrees=n,this.paint(),e&&((s=this.onChange)==null||s.call(this,n)))}setEnabled(t){this.enabled=t,this.root.classList.toggle("off",!t),this.root.setAttribute("aria-disabled",t?"false":"true"),this.root.tabIndex=t?0:-1,this.paint()}paint(){this.needle.style.transform=`rotate(${this.degrees}deg)`,this.readout.textContent=this.enabled?`${this.degrees}°`:"—",this.root.setAttribute("aria-valuenow",String(this.degrees)),this.root.setAttribute("aria-valuetext",this.enabled?`${this.degrees} degrees`:"no facing")}}const cx={bg:"Background",token:"Tokens",gm:"GM only"};class hx{constructor({onCommand:t,onDelete:e,onSizeCommitted:n}){this.onCommand=t,this.id=null,this.els={};const s=r=>{this.id&&this.onCommand(["tok.patch",this.id,r])};this.els.name=w("input",{type:"text",maxlength:"48",placeholder:"Unnamed",oninput:()=>s({name:this.els.name.value.slice(0,48)})}),this.els.size=w("input",{type:"number",min:String(Tt.tokens.minSize),max:String(Tt.tokens.maxSize),step:"0.25",oninput:()=>s({size:dx(+this.els.size.value,Tt.tokens.minSize,Tt.tokens.maxSize)}),onchange:()=>{this.id&&(n==null||n(this.id))}}),this.els.border=w("input",{type:"color",oninput:()=>{this.player||s({border:bo(this.els.border.value)})},onchange:()=>{this.player&&this.player.onColor(bo(this.els.border.value))}}),this.els.borderField=he("t-border","Border",this.els.border),this.els.shape=w("select",{onchange:()=>s({shape:this.els.shape.value})},w("option",{value:"circle",text:"Circle"}),w("option",{value:"square",text:"Square"})),this.els.layer=w("select",{onchange:()=>s({layer:this.els.layer.value})},..._o.map(r=>w("option",{value:r,text:cx[r]}))),this.els.hp=w("input",{type:"number",min:"0",step:"1",oninput:()=>s({hp:Math.max(0,Math.round(+this.els.hp.value||0))})}),this.els.maxHp=w("input",{type:"number",min:"0",step:"1",oninput:()=>s({maxHp:Math.max(0,Math.round(+this.els.maxHp.value||0))})}),this.els.rot=w("input",{type:"range",min:"0",max:"359",step:"1",oninput:()=>s({rot:+this.els.rot.value*Math.PI/180})}),this.els.dial=new lx({onChange:r=>s({facing:kc(r)})}),this.els.facingOn=w("input",{type:"checkbox",id:"t-facing",onchange:()=>{const r=this.els.facingOn.checked;this.els.dial.setEnabled(r),s({facing:r?kc(this.els.dial.degrees):null})}}),this.els.lightOn=w("input",{type:"checkbox",id:"t-light",onchange:()=>{this.els.lightRange.disabled=!this.els.lightOn.checked,s({light:this.els.lightOn.checked})}}),this.els.lightRange=w("input",{type:"number",id:"t-light-range",min:"1",max:String(gr),step:"1","aria-label":"Light reach",oninput:()=>{const r=Math.round(+this.els.lightRange.value);r>=1&&s({lightRange:Math.min(gr,r)})}}),this.els.lightUnit=w("span",{class:"hint"}),this.els.hidden=w("input",{type:"checkbox",onchange:()=>s({hidden:this.els.hidden.checked})}),this.els.where=w("p",{class:"note"}),this.root=w("aside",{class:"panel",id:"inspector"},w("div",{class:"panel-head"},w("h1",{text:"Token"})),w("div",{class:"empty",text:"Nothing selected. Click a token; shift-click for more."}),w("div",{class:"multi"},this.els.count=w("p",{class:"count"}),w("p",{class:"note",text:"Drag any of them to move them together, or nudge them with the arrow keys. Shift-click to add or remove one."}),w("button",{type:"button",class:"danger",text:"Delete selected",onclick:()=>e()})),w("div",{class:"body"},he("t-name","Name",this.els.name),w("div",{class:"pair"},he("t-size","Size (squares)",this.els.size),this.els.borderField),w("div",{class:"pair gm-only"},he("t-shape","Shape",this.els.shape),he("t-layer","Layer",this.els.layer)),w("div",{class:"pair gm-only"},he("t-hp","HP",this.els.hp),he("t-maxhp","Max HP",this.els.maxHp)),w("div",{class:"facing-row"},this.els.dial.root,w("div",{class:"col"},w("label",{class:"check",for:"t-facing"},this.els.facingOn," Facing"),w("span",{class:"hint",text:"Which way it is looking. Drag the dial, or use the arrow keys."}))),w("div",{class:"light-row"},w("label",{class:"check",for:"t-light"},this.els.lightOn," Light"),this.els.lightRange,this.els.lightUnit),he("t-rot","Artwork rotation",this.els.rot),w("label",{class:"check gm-only",for:"t-hidden"},this.els.hidden," Hidden from players"),this.els.where,w("div",{class:"row gm-only"},w("button",{type:"button",class:"ghost",text:"To front",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!0])}),w("button",{type:"button",class:"ghost",text:"To back",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!1])})),w("button",{type:"button",class:"danger",text:"Delete token",onclick:()=>this.id&&e()}))),this.els.hidden.id="t-hidden",this.player=null}setPlayer(t){this.player=t,this.root.classList.toggle("player",!!t),this.els.borderField.querySelector("label").textContent=t?"Your colour":"Border"}refresh(t,e,n=e?1:0){const s=t.activeScene?t.scenes[t.activeScene]:null,r=e&&(s==null?void 0:s.tokens[e])||null;this.id=(r==null?void 0:r.id)||null,this.count=n;const a=n>1;if(this.root.classList.toggle("no-token",!r&&!a),this.root.classList.toggle("many",a),a&&(this.els.count.textContent=`${n} tokens selected`),!r||a)return;ue(this.els.name,r.name),ue(this.els.size,Sa(r.size)),ue(this.els.border,ns(r.border)),ue(this.els.shape,r.shape),ue(this.els.layer,r.layer),ue(this.els.hp,r.hp),ue(this.els.maxHp,r.maxHp),ue(this.els.rot,Math.round((r.rot||0)*180/Math.PI)%360),ya(this.els.hidden,r.hidden),ya(this.els.lightOn,!!r.light),ue(this.els.lightRange,r.lightRange??2),this.els.lightRange.disabled=!r.light,this.els.lightUnit.textContent=`${s.grid.kind.startsWith("hex")?"hexes":"squares"} of light round it`;const o=typeof r.facing=="number"&&Number.isFinite(r.facing);ya(this.els.facingOn,o),this.els.dial.setEnabled(o),document.activeElement===this.els.dial.root&&this.id===this.dialFor||this.els.dial.set(o?ox(r.facing):0),this.dialFor=this.id;const c=s.grid;this.els.where.textContent=`At ${ux(r.x,r.y)} · ${Sa(r.x)}, ${Sa(r.y)} units`+(c.kind==="none"?"":` · ${c.perUnit}${c.distanceLabel} per ${c.unitLabel}`)}}function ux(i,t){const e=Math.floor(i),n=Math.floor(t);return`${e<0?`-${Oc(-e-1)}`:Oc(e)}${n+1}`}function Oc(i){let t="",e=i;do t=String.fromCharCode(65+e%26)+t,e=Math.floor(e/26)-1;while(e>=0);return t}function dx(i,t,e){return Number.isFinite(i)?Math.min(e,Math.max(t,i)):t}function Sa(i){return Math.round(i*100)/100}const fx=new Set(["INPUT","SELECT","TEXTAREA","BUTTON"]),px=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown","Home","End"]);function mx(){const i=document.activeElement;return i?fx.has(i.tagName)||i.isContentEditable:!1}class gx{constructor(t={},e=null){this.actions=new Map(Object.entries(t)),this.held=new Set,this.onDown=n=>{mx()||(n.repeat||this.held.add(n.code),(e!=null&&e(n.code,n)||px.has(n.code))&&n.preventDefault())},this.onUp=n=>this.held.delete(n.code),this.onBlur=()=>this.held.clear(),window.addEventListener("keydown",this.onDown),window.addEventListener("keyup",this.onUp),window.addEventListener("blur",this.onBlur)}action(t){const e=this.actions.get(t);if(!e)return!1;for(const n of e)if(this.held.has(n))return!0;return!1}axis(t,e){return(this.action(e)?1:0)-(this.action(t)?1:0)}vector(t,e,n,s,r={x:0,y:0}){r.x=this.axis(t,e),r.y=this.axis(n,s);const a=Math.hypot(r.x,r.y);return a>1&&(r.x/=a,r.y/=a),r}dispose(){window.removeEventListener("keydown",this.onDown),window.removeEventListener("keyup",this.onUp),window.removeEventListener("blur",this.onBlur),this.held.clear()}}const Eo=3,gn={name:32,members:16,peerId:64,need:256,req:32,upload:8*1024*1024},ms=[14263361,6003669,12605771,10189528,6535316,14186655,5224624,11909199],lu=i=>typeof i=="string";function Lr(i,t="Player"){return(lu(i)?i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim():"").slice(0,gn.name)||t}function _x(i){return lu(i)&&i.length>0&&i.length<=gn.peerId}const vx=(i,t)=>({t:"hello",p:Eo,name:Lr(i),gm:t?1:0});function xx(i){return!i||i.t!=="hello"?null:{protocol:Number.isInteger(i.p)?i.p:-1,name:Lr(i.name),gm:i.gm===1}}function yx(i){return{t:"roster",r:i.slice(0,gn.members).map(t=>[t.peerId,t.name,t.role===Je?1:0,t.color])}}function Mx(i){return!i||i.t!=="roster"||!Array.isArray(i.r)?null:i.r.slice(0,gn.members).filter(t=>Array.isArray(t)&&_x(t[0])).map(([t,e,n,s])=>({peerId:t,name:Lr(e),role:n===1?Je:Yi,color:Number.isInteger(s)?s&16777215:ms[0]}))}const Sx=["full","protocol"];function bx(i){return!i||i.t!=="nope"?null:Sx.includes(i.why)?i.why:"full"}function Ex(i){if(!i||i.t!=="doc")return null;const t=i.s;return!t||typeof t!="object"||Array.isArray(t)||!Number.isInteger(t.seq)||t.seq<0||!t.scenes||typeof t.scenes!="object"?null:t}function wx(i){return!i||i.t!=="op"||!Number.isInteger(i.n)||i.n<1||!Array.isArray(i.c)||typeof i.c[0]!="string"?null:{seq:i.n,cmd:i.c}}const Tx=/^[0-9a-f]{64}$/,yr=i=>typeof i=="string"&&Tx.test(i);function Ax(i){return!i||i.t!=="need"||!Array.isArray(i.h)?[]:[...new Set(i.h.slice(0,gn.need).filter(yr))]}function Bc(i){return Array.isArray(i)?i.slice(0,gn.req).filter(t=>Array.isArray(t)&&typeof t[0]=="string"):[]}const zc=()=>iu(()=>import("./room-D300m2Q-.js"),[],import.meta.url);class Ss{constructor(t,e={}){this.role=t,this.handlers=e,this.code="",this.name="",this.selfId=null,this.gmId=null,this.admitted=!1,this.link=null,this.members=new Map,this.pending=new Set,this.backlog=[],this.closed=!1,this.voice=null}get isGm(){return this.role===Je}roster(){return[...this.members.values()]}static async host(t,e,n=null){const s=await zc(),r=new Ss(Je,e);return r.open(s,n?s.normaliseCode(n):s.randomCode(),t),r.members.set(r.selfId,vr(r.selfId,r.name,{role:Je,color:ms[0]})),r.emitRoster(),r}static async join(t,e,n){const s=await zc(),r=new Ss(Yi,n);return r.open(s,s.normaliseCode(t),e),r}open(t,e,n){const s=Tt.multiplayer;this.code=e,this.name=Lr(n,this.isGm?"GM":"Player"),this.selfId=t.selfId,this.link=t.joinRoom({appId:s.appId,code:e,maxPeers:s.maxPlayers-1},{onPeerJoin:r=>this.peerJoined(r),onPeerLeave:r=>this.peerLeft(r),onMessage:(r,a)=>this.receive(r,a),onRelay:r=>{var a,o;return(o=(a=this.handlers).onRelay)==null?void 0:o.call(a,r)},onAsset:(r,a,o)=>{var l,c;this.entitled(o)&&((c=(l=this.handlers).onAsset)==null||c.call(l,r,a,o))},onPeerStream:(r,a,o)=>{var l;return(l=this.voice)==null?void 0:l.stream(r,a,o)},onAssetProgress:(r,a,o)=>{var l,c;this.entitled(o)&&((c=(l=this.handlers).onAssetProgress)==null||c.call(l,r,a,o))}})}listen(t){if(this.handlers=t,!!t.onMessage)for(const[e,n]of this.backlog.splice(0))t.onMessage(e,n)}entitled(t){return this.isGm?this.members.has(t)&&t!==this.selfId:t===this.gmId}leave(){var t;this.closed||(this.closed=!0,(t=this.link)==null||t.leave())}peerJoined(t){var e;this.pending.add(t),this.link.send(vx(this.name,this.isGm),t),(e=this.voice)==null||e.join(t)}peerLeft(t){var e,n,s,r,a;this.pending.delete(t),(e=this.voice)==null||e.leave(t),this.isGm?this.members.delete(t)&&this.emitRoster():t===this.gmId?(this.gmId=null,(s=(n=this.handlers).onGmLeft)==null||s.call(n)):this.members.delete(t)&&((a=(r=this.handlers).onRoster)==null||a.call(r,this.roster()))}receive(t,e){var n,s,r,a,o,l,c;if(!(this.closed||!t||typeof t.t!="string")){if(t.t==="hello")return this.onHello(xx(t),e);if((t.t==="voice"||t.t==="music")&&this.members.has(e))return(n=this.voice)==null?void 0:n.message(t,e);if(this.entitled(e)){if(this.isGm||t.t!=="roster"&&t.t!=="nope"){this.handlers.onMessage?this.handlers.onMessage(t,e):this.backlog.push([t,e]);return}if(t.t==="roster"){const h=Mx(t);if(!h)return;this.members=new Map(h.map(u=>[u.peerId,u])),!this.admitted&&this.members.has(this.selfId)&&(this.admitted=!0,(r=(s=this.handlers).onAdmitted)==null||r.call(s)),(o=(a=this.handlers).onRoster)==null||o.call(a,this.roster())}else t.t==="nope"&&((c=(l=this.handlers).onRefused)==null||c.call(l,bx(t)),this.leave())}}}onHello(t,e){var n,s,r,a;if(!(!t||!this.pending.has(e))){if(this.pending.delete(e),this.isGm){if(t.gm)return;if(t.protocol!==Eo)return this.link.send({t:"nope",why:"protocol"},e);if(this.members.size>=Tt.multiplayer.maxPlayers)return this.link.send({t:"nope",why:"full"},e);const o=new Set(this.roster().map(c=>c.color)),l=ms.find(c=>!o.has(c))??ms[this.members.size%ms.length];this.members.set(e,vr(e,t.name,{role:Yi,color:l})),this.emitRoster(),(s=(n=this.handlers).onSeated)==null||s.call(n,e);return}if(!(!t.gm||this.gmId)){if(t.protocol!==Eo)return(a=(r=this.handlers).onRefused)==null||a.call(r,"protocol"),this.leave();this.gmId=e}}}setColor(t,e){const n=this.members.get(t);!n||n.color===e||(this.members.set(t,{...n,color:e}),this.emitRoster())}emitRoster(){var t,e;this.link.send(yx(this.roster())),(e=(t=this.handlers).onRoster)==null||e.call(t,this.roster())}}const cu="vtt.name",hu="vtt.recent",Rx=6,uu=8,Cx=14e3;class Px{constructor({onEnter:t,onResume:e,onOpenFile:n}){var r;this.onEnter=t,this.onResume=e,this.onOpenFile=n,this.lobby=null,this.hintTimer=0,this.els={},this.els.name=w("input",{id:"splash-name",maxlength:String(gn.name),autocomplete:"nickname",spellcheck:"false",placeholder:"What the table calls you",value:Ix()}),this.els.code=w("input",{id:"splash-code",class:"code-input",maxlength:String(uu),autocomplete:"off",spellcheck:"false",placeholder:"CODE","aria-label":"Invite code",value:Lx(),oninput:()=>{this.els.code.value=this.els.code.value.toUpperCase().replace(/\s+/g,"")},onkeydown:a=>{a.key==="Enter"&&this.join()}}),this.els.host=w("button",{class:"primary big",text:"Host a new table",onclick:()=>this.host()}),this.els.saved=w("ul",{class:"saved-tables","aria-label":"Saved tables"});const s=w("input",{type:"file",accept:".vtt,application/json",class:"file",onchange:a=>{var l;const o=(l=a.target.files)==null?void 0:l[0];a.target.value="",o&&this.openFile(o)}});if(this.els.openFile=w("button",{class:"ghost small",text:"Open a table file…",onclick:()=>s.click()}),this.els.fileInput=s,this.els.join=w("button",{class:"primary big",text:"Join",onclick:()=>this.join()}),this.els.recent=w("ul",{class:"saved-tables recent","aria-label":"Recently joined"}),this.els.status=w("p",{class:"splash-status",role:"status","aria-live":"polite"}),this.els.cancel=w("button",{class:"ghost",text:"Cancel",hidden:!0,onclick:()=>this.cancel()}),this.root=w("div",{id:"splash"},w("div",{class:"splash-card"},w("header",{},w("h1",{text:"Virtual Tabletop"}),w("p",{class:"tagline",text:"No server. The GM's browser is the table, and players connect straight to it."})),w("div",{class:"field"},w("label",{for:"splash-name",text:"Your name"}),this.els.name),w("div",{class:"splash-choices"},w("section",{},w("h2",{text:"Run a table"}),w("p",{text:"You're the GM. You get an invite code to hand to your players."}),this.els.host,this.els.saved,this.els.openFile,this.els.fileInput),w("section",{},w("h2",{text:"Join a table"}),w("p",{text:"Enter the invite code your GM gave you."}),w("div",{class:"join-row"},this.els.code,this.els.join),this.els.recent)),w("div",{class:"splash-foot"},this.els.status,this.els.cancel))),document.body.append(this.root),this.listSaved(),this.listRecent(),!window.isSecureContext||!((r=globalThis.crypto)!=null&&r.subtle)){for(const a of["host","join","code"])this.els[a].disabled=!0;this.setStatus("This page is not served securely (https), so the browser will not let it connect to other players. Open it over https — or on localhost — to host or join.","error")}(this.els.code.value?this.els.join:this.els.name).focus()}setStatus(t,e=""){this.els.status.textContent=t,this.els.status.dataset.kind=e}setBusy(t){for(const e of["name","code","host","join","openFile"])this.els[e].disabled=t;for(const e of this.root.querySelectorAll(".saved-tables button"))e.disabled=t;this.els.cancel.hidden=!t}async listSaved(){const t=await U_();this.els.saved.replaceChildren(...t.map(e=>{const n=w("button",{class:"ghost small del",text:"×",title:"Delete this saved table","aria-label":`Delete ${e.name}`,onclick:async()=>{if(!n.classList.contains("armed")){n.classList.add("armed"),n.textContent="Delete?",setTimeout(()=>{n.classList.remove("armed"),n.textContent="×"},3e3);return}await N_(e.id),this.listSaved()}});return w("li",{},w("div",{class:"what"},w("b",{text:e.name}),w("span",{text:`${Gc(e.savedAt)}${e.tokens?` · ${e.tokens} token${e.tokens===1?"":"s"}`:""}`})),w("button",{class:"primary small",text:"Resume",onclick:()=>this.resume(e.id)}),n)})),this.els.saved.hidden=!t.length}listRecent(){const t=wo();this.els.recent.replaceChildren(...t.map(e=>w("li",{},w("div",{class:"what"},w("b",{text:e.gm?`${e.gm}'s table`:"A table"}),w("span",{text:`${e.code} · ${Gc(e.at)}`})),w("button",{class:"primary small",text:"Join","aria-label":`Join ${e.code}`,onclick:()=>{this.els.code.value=e.code,this.join()}}),w("button",{class:"ghost small del",text:"×",title:"Forget this table","aria-label":`Forget ${e.code}`,onclick:()=>{du(wo().filter(n=>n.code!==e.code)),this.listRecent()}})))),this.els.recent.hidden=!t.length}async resume(t){this.setBusy(!0),this.setStatus("Setting the table…");let e;try{e=await this.onResume(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not resume that table.","error")}this.host(e.code)}async openFile(t){this.setBusy(!0),this.setStatus(`Reading ${t.name}…`);let e;try{e=await this.onOpenFile(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not open that file.","error")}this.host(e.code)}async host(t=null){const e=this.els.name.value;Hc(e),this.setBusy(!0),this.setStatus("Opening a room…");try{this.lobby=await Ss.host(e,void 0,t)}catch(n){return this.setBusy(!1),this.setStatus(`Could not open a room: ${n.message||n}`,"error")}this.enter()}async join(){const t=this.els.code.value.trim();if(!t)return this.els.code.focus(),this.setStatus("Type the invite code your GM gave you.","error");const e=this.els.name.value;Hc(e),this.setBusy(!0);const n=`Looking for the table at ${t.toUpperCase()}…`;this.setStatus(n),this.hintTimer=setTimeout(()=>{var s;this.setStatus((s=this.lobby)!=null&&s.gmId?`${n} The GM is there but hasn't seated you — the table may be full.`:`${n} Still nothing. Connecting can take 10–20 seconds; check the code matches exactly.`,"warn")},Cx);try{this.lobby=await Ss.join(t,e,{onAdmitted:()=>this.enter(),onRefused:s=>this.refused(s),onRelay:s=>{var r;(r=this.lobby)!=null&&r.gmId||s.total&&!s.open&&this.setStatus(`No relay reachable (0 of ${s.total}). Your network may be blocking them.`,"error")}})}catch(s){this.reset(),this.setStatus(`Could not join: ${s.message||s}`,"error")}}refused(t){this.reset(),this.setStatus(t==="protocol"?"That table is running a different version. One of you needs to reload.":"That table is full.","error")}cancel(){this.reset(),this.setStatus("")}reset(){var t;clearTimeout(this.hintTimer),(t=this.lobby)==null||t.leave(),this.lobby=null,this.setBusy(!1)}enter(){clearTimeout(this.hintTimer);const t=this.lobby;t.isGm||Dx(t),t.handlers={},this.root.remove(),this.onEnter(t)}}function Lx(){return(new URLSearchParams(location.search).get("join")||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,uu)}function Ix(){try{return localStorage.getItem(cu)||""}catch{return""}}function Hc(i){try{localStorage.setItem(cu,i.trim())}catch{}}function wo(){try{const i=JSON.parse(localStorage.getItem(hu)||"[]");return Array.isArray(i)?i.filter(t=>t&&typeof t.code=="string"&&t.code):[]}catch{return[]}}function du(i){try{localStorage.setItem(hu,JSON.stringify(i.slice(0,Rx)))}catch{}}function Dx(i){var n;const t=String(i.code||"").toUpperCase();if(!t)return;const e=((n=i.roster().find(s=>s.peerId===i.gmId))==null?void 0:n.name)||"";du([{code:t,gm:e,at:Date.now()},...wo().filter(s=>s.code!==t)])}function Gc(i){const t=new Date(i),e=new Date,n=Math.round((new Date(e.toDateString())-new Date(t.toDateString()))/864e5),s=t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return n===0?`today, ${s}`:n===1?`yesterday, ${s}`:n<7?t.toLocaleDateString([],{weekday:"long"}):t.toLocaleDateString([],{day:"numeric",month:"short",year:n>300?"numeric":void 0})}async function Ux(i){var t;try{if((t=navigator.clipboard)!=null&&t.writeText)return await navigator.clipboard.writeText(i),!0}catch{}try{const e=document.createElement("textarea");e.value=i,e.setAttribute("readonly",""),e.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.appendChild(e),e.select();const n=document.execCommand("copy");return e.remove(),n}catch{return!1}}function Nx(i){if(!i)return;const t=document.createRange();t.selectNodeContents(i);const e=window.getSelection();e.removeAllRanges(),e.addRange(t)}const er="Copy invite link";class Fx{constructor(t,{onArmLeave:e,onInvite:n}={}){this.lobby=t,this.onArmLeave=e,this.onInvite=n,this.copyTimer=0,this.els={},this.els.code=w("span",{class:"room-code",text:t.code}),this.els.copyCode=w("button",{class:"ghost",text:"Copy",title:"Copy the room code",onclick:()=>this.copy("code")}),this.els.copyLink=w("button",{class:"ghost",text:er,onclick:()=>this.copy("link")}),this.els.list=w("ul",{class:"roster"}),this.els.note=w("p",{class:"note"}),this.root=w("aside",{class:"panel",id:"room"},w("div",{class:"panel-head"},w("h1",{text:"At the table"}),this.els.headCopy=w("button",{type:"button",class:"ghost invite-copy",text:er,title:"Copy an invite to paste to your players",onclick:()=>this.copy("link",this.els.headCopy)})),this.els.list,this.els.note),this.invite=w("section",{class:"invite",dataset:{tool:"invite"}},w("h2",{text:"Invite players"}),w("div",{class:"room-code-row"},this.els.code,this.els.copyCode),this.els.copyLink,w("p",{class:"note",text:"Players type the code on the start screen, or open the link."})),this.setNote(t.isGm?"":"The GM sets up the table. Add and move your own tokens below."),this.render(t.roster())}setNote(t,e=""){this.els.note.hidden=!t,this.els.note.textContent=t,this.els.note.dataset.kind=e}render(t){const e=this.lobby.selfId;this.els.list.replaceChildren(...t.map(n=>w("li",{dataset:{peer:n.peerId}},w("i",{class:"seat",style:{background:ns(n.color)}}),w("span",{class:"who",text:n.name}),w("span",{class:"mic",title:"In voice","aria-hidden":"true"}),w("em",{text:[n.role===Je?"GM":"",n.peerId===e?"you":""].filter(Boolean).join(" · ")}))))}setVoice(t){for(const e of this.els.list.children){const n=t.get(e.dataset.peer);e.classList.toggle("in-voice",!!(n!=null&&n.on)),e.classList.toggle("speaking",!!(n!=null&&n.on&&n.speaking)),e.classList.toggle("muted",!!(n!=null&&n.on&&(n.muted||n.silenced)))}}gmLeft(){this.setNote("The GM has left. The table is frozen until they come back.","warn")}inviteLink(){const t=new URL(location.href);return t.search="",t.hash="",t.searchParams.set("join",this.lobby.code),t.href}async copy(t,e=t==="code"?this.els.copyCode:this.els.copyLink){var s;await Ux(t==="code"?this.lobby.code:this.inviteLink())?e.textContent="Copied ✓":((s=this.onInvite)==null||s.call(this,!0),Nx(this.els.code),e.textContent="Press Ctrl+C"),clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>{this.els.copyCode.textContent="Copy",this.els.copyLink.textContent=er,this.els.headCopy.textContent=er},1800)}leave(){var e;if(!this.leaveArmed){this.leaveArmed=!0,(e=this.onArmLeave)==null||e.call(this,!0),clearTimeout(this.leaveTimer),this.leaveTimer=setTimeout(()=>{var n;this.leaveArmed=!1,(n=this.onArmLeave)==null||n.call(this,!1)},3500);return}this.lobby.leave();const t=new URL(location.href);t.searchParams.delete("join"),location.href=t.href}}class kx{constructor({onImportToken:t,onAddBlank:e}){const n=w("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:s=>{const r=[...s.target.files||[]];s.target.value="",r.length&&t(r)}});this.root=w("aside",{class:"panel",id:"player"},w("div",{class:"panel-head"},w("h1",{text:"Your tokens"})),w("section",{},n,w("div",{class:"row"},w("button",{class:"primary",id:"p-add-token",text:"Add from image…",onclick:()=>n.click()}),w("button",{class:"ghost",id:"p-add-blank",text:"Blank",onclick:()=>e()})),w("p",{class:"note",text:"Add a picture of your character, or a blank disc. Your tokens wear your colour; drag one to move it, click it to name it, turn it, resize it or change your colour."})))}}const Ox=[2,4,6,8,10,12,20,100];class Bx{constructor({onRoll:t,onError:e}){this.onRoll=t,this.onError=e,this.gm=!0,this.els={},this.els.expr=w("input",{class:"dice-expr",placeholder:"1d20+2 Kick",maxlength:"128",spellcheck:"false",autocomplete:"off","aria-label":"Dice to roll",onkeydown:n=>{n.key==="Enter"&&this.rollTyped()}}),this.els.hide=w("input",{type:"checkbox",id:"dice-hide"}),this.els.hideLabel=w("label",{class:"dice-hide",for:"dice-hide",title:"Roll in secret: players see that you rolled, not what"},this.els.hide," Hide"),this.root=w("div",{class:"dice-bar"},...Ox.map(n=>w("button",{type:"button",class:"die",text:n===100?"d%":`d${n}`,title:`Roll a d${n}`,dataset:{sides:String(n)},onclick:()=>this.onRoll(`1d${n}`)})),this.els.hideLabel,w("div",{class:"dice-typed"},this.els.expr,w("button",{type:"button",class:"primary roll",text:"Roll",onclick:()=>this.rollTyped()})))}get hidden(){return this.gm&&this.els.hide.checked}setGm(t){this.gm=t,this.els.hideLabel.hidden=!t,t||(this.els.hide.checked=!1)}rollTyped(){const t=this.els.expr.value.trim();if(!t)return this.els.expr.focus();try{Ar(t)}catch(e){this.onError(e.message);return}this.onRoll(t)}}class zx{constructor({onSay:t,onRoll:e,onError:n}){this.onSay=t,this.onRoll=e,this.onError=n,this.lastKey="",this.els={},this.els.feed=w("ol",{class:"feed","aria-live":"polite","aria-label":"Table talk"}),this.els.input=w("input",{class:"say",placeholder:"Say something…   /r 1d20+2 Kick to roll",maxlength:String(ji.text),autocomplete:"off","aria-label":"Say something to the table",onkeydown:s=>{s.key==="Enter"?this.send():s.key==="Escape"&&this.els.input.blur()}}),this.root=w("div",{class:"talk"},this.els.feed,this.els.input)}send(){const t=this.els.input.value.trim();if(!t)return;const e=/^\/r(?:oll)?\s+(.+)$/i.exec(t);if(e){try{Ar(e[1])}catch(n){this.onError(n.message);return}this.onRoll(e[1])}else this.onSay(t);this.els.input.value=""}refresh(t,e){const n=t.slice(-60),s=n.map(o=>o.id).join(",")+Object.values(e).map(o=>o.peerId+o.name+o.color).join();if(s===this.lastKey)return;this.lastKey=s;const r=this.els.feed,a=r.scrollHeight-r.scrollTop-r.clientHeight<24;r.replaceChildren(...n.map((o,l)=>{const c=e[o.by],h=l===n.length-1,u=w("i",{class:"seat",style:{background:ns((c==null?void 0:c.color)??9280918)}}),f=w("span",{class:"who",text:(c==null?void 0:c.name)??"Someone"},(c==null?void 0:c.role)===Je?w("em",{class:"gm",text:"GM"}):null);if(o.kind==="roll"){const p=o.dice.map(_=>w("span",{class:_.kept?"kept":"dropped",text:String(_.value),title:`d${_.sides}`})),g=o.mod?w("span",{class:"mod",text:o.mod>0?`+${o.mod}`:String(o.mod)}):null;return w("li",{class:`roll${h?" latest":""}`,title:`${o.expr}${o.note?` — ${o.note}`:""} — draws ${o.from+1}–${o.from+o.draws} of this table's dice`},u,f,o.hidden?w("span",{class:"secret-tag",text:"secret"}):null,o.note?w("span",{class:"note",text:o.note}):null,w("span",{class:"expr",text:o.expr}),w("span",{class:"faces"},...p,g),w("b",{class:"total",text:String(o.total)}))}return w("li",{class:`msg${h?" latest":""}`,title:o.at?new Date(o.at).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):""},u,f,w("span",{class:"text",text:o.text}))})),a&&(r.scrollTop=r.scrollHeight)}}const Hx={map:'<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z"/><path d="M9 4v13.5M15 6.5V20"/>',grid:'<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M9.2 3.5v17M14.8 3.5v17M3.5 9.2h17M3.5 14.8h17"/>',tokens:'<path d="M6 20.5h12"/><path d="M8 20.5c-.3-2.6.9-4.5 3.2-6.1L9.6 13c-1.3.8-2.9.7-3.6-.4-.6-.9-.3-1.9.6-2.6l3.6-3.1.6-3.1 2.1 1.9c3.6.8 5.6 4.3 5.1 8.8-.2 2.2-.7 4.1-1.5 6"/><circle cx="12.6" cy="8.9" r=".7" fill="currentColor" stroke="none"/>',undo:'<path d="M9 7 4.5 11.5 9 16"/><path d="M5 11.5h9a5 5 0 0 1 0 10h-2"/>',redo:'<path d="M15 7l4.5 4.5L15 16"/><path d="M19 11.5h-9a5 5 0 0 0 0 10h2"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><rect x="8.5" y="8.5" width="7" height="7" rx="1"/>',save:'<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M5 19.5h14"/>',fx:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="2.5"/>',music:'<path d="M9 18V5.5l11-2v12.5"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',voice:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',invite:'<circle cx="10" cy="8.5" r="3.5"/><path d="M3.5 20c.8-3.6 3.3-5.5 6.5-5.5 1.6 0 3 .5 4.1 1.4"/><path d="M18 13v7M14.5 16.5h7"/>',leave:'<path d="M14 4H6.5A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20H14"/><path d="M11 12h10M17.5 8.5 21 12l-3.5 3.5"/>'};function Gx(i){const t=document.createElement("span");return t.className="icon",t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Hx[i]}</svg>`,t}class Vx{constructor(t,{onOpen:e}){this.onOpen=e,this.open=null,this.buttons=new Map,this.root=w("nav",{id:"rail","aria-label":"Tools"},...t.map(n=>{if(n==="gap")return w("div",{class:"gap"});if(n==="sep")return w("div",{class:"sep",role:"separator"});const s=n.key?`${n.label} (${n.key})`:n.label,r=w("button",{type:"button",class:"tool",title:s,"aria-label":n.label,dataset:{tool:n.id},"aria-pressed":n.panel?"false":null,onclick:()=>n.panel?this.toggle(n.id):n.run()},Gx(n.id));return this.buttons.set(n.id,r),r}))}toggle(t){this.show(this.open===t?null:t)}show(t){this.open=t;for(const[e,n]of this.buttons)n.hasAttribute("aria-pressed")&&n.setAttribute("aria-pressed",String(e===t));this.onOpen(t)}setVisible(t,e){const n=this.buttons.get(t);n&&(n.hidden=!e)}setArmed(t,e,n){const s=this.buttons.get(t);s&&(s.classList.toggle("armed",e),n&&(s.title=n))}setEnabled(t,e){const n=this.buttons.get(t);n&&(n.disabled=!e)}}const Wx={rain:"Rain",snow:"Snow",fog:"Fog",embers:"Embers"},ba={fade:["Fade","Fade to black","Fade back in"],swirl:["Swirl","Swirl to black","Swirl back in"],curtain:["Curtain","Lower the curtain","Raise the curtain"],drapes:["Drapes","Close the curtains","Open the curtains"],ink:["Ink","Ink to black","Ink back out"],burn:["Burn","Burn it away","Unburn"]};class Xx{constructor({onPlay:t,onAmbience:e}){this.onAmbience=e,this.els={};const n=(s,r,a)=>w("button",{type:"button",class:"ghost",text:r,title:a,dataset:{fx:s},onclick:()=>t(s)});this.els.weather=[null,...Hh].map(s=>w("button",{type:"button",class:"ghost",text:s?Wx[s]:"None",dataset:{weather:s||"none"},"aria-pressed":"false",onclick:()=>e({weather:s})})),this.els.intensity=w("input",{type:"range",min:"0.1",max:"1",step:"0.05",id:"fx-intensity","aria-label":"Weather intensity",oninput:()=>e({intensity:+this.els.intensity.value})}),this.els.darkness=w("input",{type:"range",min:"0",max:"1",step:"0.05",id:"fx-darkness","aria-label":"Darkness",oninput:()=>e({darkness:+this.els.darkness.value})}),this.els.transitions=Zo.map(s=>w("button",{type:"button",class:"ghost",text:ba[s][0],dataset:{transition:s},"aria-pressed":"false",onclick:()=>e({transition:s})})),this.els.blackout=w("button",{type:"button",class:"ghost wide",id:"fx-blackout","aria-pressed":"false",onclick:()=>e({blackout:this.els.blackout.getAttribute("aria-pressed")!=="true"})}),this.root=w("section",{class:"fx",dataset:{tool:"fx"}},w("h2",{text:"FX"}),w("h3",{class:"sub",text:"For a moment"}),w("div",{class:"fx-buttons"},n("lightning","⚡ Lightning","A flash on every screen"),n("shake","Shake","Shake everyone's board"),n("damage","Damage","A red pulse round the edges")),w("h3",{class:"sub",text:"Transition"}),w("div",{class:"fx-buttons transitions"},...this.els.transitions),this.els.blackout,w("h3",{class:"sub",text:"Weather"}),w("div",{class:"fx-buttons"},...this.els.weather),this.els.intensityField=w("div",{class:"field"},w("label",{for:"fx-intensity",text:"Intensity"}),this.els.intensity),w("div",{class:"field"},w("label",{for:"fx-darkness",text:"Darkness"}),this.els.darkness),w("p",{class:"note",text:"Weather, darkness and the blackout stay on for this scene until you change them, and players who join later see them too. You see them fainter, so you can keep working."}),w("h3",{class:"sub",text:"Pings"}),w("p",{class:"note",text:"Click an empty spot on the map to ping it for everyone (click once more first if something is selected). Alt+Shift-click also brings everyone's view there."}))}refresh(t){const e=t||{};for(const s of this.els.weather)s.setAttribute("aria-pressed",String((e.weather||"none")===s.dataset.weather));document.activeElement!==this.els.darkness&&(this.els.darkness.value=String(e.darkness||0)),document.activeElement!==this.els.intensity&&(this.els.intensity.value=String(e.intensity??.6)),this.els.intensity.disabled=!e.weather,this.els.intensityField.classList.toggle("off",!e.weather),this.els.blackout.setAttribute("aria-pressed",String(!!e.blackout));const n=ba[e.transition]?e.transition:"fade";for(const s of this.els.transitions)s.setAttribute("aria-pressed",String(n===s.dataset.transition));this.els.blackout.textContent=ba[n][e.blackout?2:1]}}const Vc=10;class qx{constructor({onRoll:t}){this.onRoll=t,this.key="vtt.quick.offline",this.items=[],this.root=w("div",{class:"quick","aria-label":"Quick rolls"}),this.load()}useTable(t){this.key=`vtt.quick.${t||"offline"}`,this.load()}load(){try{const t=JSON.parse(localStorage.getItem(this.key)||"[]");this.items=Array.isArray(t)?t.filter(e=>e&&typeof e.note=="string"&&typeof e.expr=="string").slice(0,Vc):[]}catch{this.items=[]}this.render()}save(){try{localStorage.setItem(this.key,JSON.stringify(this.items))}catch{}}add(t,e){const n=this.items.find(s=>s.note.toLowerCase()===t.toLowerCase());if(n){if(n.expr===e&&n.note===t)return;n.expr=e,n.note=t}else this.items.push({note:t,expr:e}),this.items.length>Vc&&this.items.shift();this.save(),this.render()}remove(t){this.items=this.items.filter(e=>e.note!==t),this.save(),this.render()}render(){this.root.hidden=!this.items.length,this.root.replaceChildren(...this.items.map(t=>w("span",{class:"quick-roll"},w("button",{type:"button",class:"go",text:t.note,title:`Roll ${t.expr} ${t.note}`,onclick:()=>this.onRoll(`${t.expr} ${t.note}`)}),w("button",{type:"button",class:"forget",text:"×",title:`Remove ${t.note}`,"aria-label":`Remove ${t.note}`,onclick:()=>this.remove(t.note)}))))}}const fu="vtt.voice.chimes";function $x(){try{return localStorage.getItem(fu)!=="0"}catch{return!0}}const Wc={kind:"voice"},Yx=.035;class jx{constructor({lobby:t,onChange:e}){this.lobby=t,this.onChange=e,this.on=!1,this.muted=!1,this.ptt=!1,this.pttDown=!1,this.stream=null,this.error="",this.output="",this.peers=new Map,this.silenced=new Set,this.localSpeaking=!1,this.chimes=$x(),this.ctx=null,this.localAnalyser=null,this.audioRoot=document.createElement("div"),this.audioRoot.hidden=!0,document.body.append(this.audioRoot),this.music=null,t.voice={join:n=>{var s;this.announce(n),(s=this.music)==null||s.peerJoined(n)},leave:n=>this.drop(n),stream:(n,s,r)=>{var a;return(r==null?void 0:r.kind)==="music"?(a=this.music)==null?void 0:a.hear(n,s):this.hear(n,s)},message:(n,s)=>{var r;return n.t==="music"?(r=this.music)==null?void 0:r.message(n,s):this.message(n,s)}},this.meter=setInterval(()=>this.measure(),120)}get isGm(){return this.lobby.isGm}get live(){return this.on&&!this.muted&&!this.silenced.has(this.lobby.selfId)&&(!this.ptt||this.pttDown)}peer(t){let e=this.peers.get(t);return e||(e={on:!1,muted:!1,volume:1,audio:null,analyser:null,speaking:!1},this.peers.set(t,e)),e}async start(t=""){this.error="";try{this.stream=await navigator.mediaDevices.getUserMedia({audio:{deviceId:t?{exact:t}:void 0,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(e){return this.error=(e==null?void 0:e.name)==="NotAllowedError"?"The browser was not allowed to use the microphone. Allow it in the address bar and try again.":`No microphone could be opened (${(e==null?void 0:e.name)||e}).`,this.onChange(),!1}this.on=!0,this.applyTrack(),this.watchLocal(),this.chime("join");for(const[e,n]of this.peers)n.on&&this.lobby.link.addStream(this.stream,e,Wc);return this.announce(),this.onChange(),!0}stop(){var t;if(this.on){for(const[e,n]of this.peers)n.on&&this.lobby.link.removeStream(this.stream,e),this.unplug(n);for(const e of((t=this.stream)==null?void 0:t.getTracks())||[])e.stop();this.stream=null,this.on=!1,this.localSpeaking=!1,this.announce(),this.onChange()}}async useMicrophone(t){this.on&&(this.stop(),await this.start(t))}setMuted(t){this.muted=t,this.applyTrack(),this.announce(),this.onChange()}setPtt(t){this.ptt=t,this.applyTrack(),this.announce(),this.onChange()}pushToTalk(t){!this.ptt||this.pttDown===t||(this.pttDown=t,this.applyTrack(),this.onChange())}applyTrack(){var t;for(const e of((t=this.stream)==null?void 0:t.getAudioTracks())||[])e.enabled=this.live}announce(t){var n;const e={t:"voice",on:this.on,muted:this.muted||this.silenced.has(this.lobby.selfId)};this.isGm&&(e.silenced=[...this.silenced]),(n=this.lobby.link)==null||n.send(e,t)}message(t,e){const n=this.peer(e),s=n.on;if(n.on=!!t.on,n.muted=!!t.muted,this.on&&n.on!==s&&this.chime(n.on?"join":"leave"),this.on&&n.on&&!s&&this.lobby.link.addStream(this.stream,e,Wc),this.on&&!n.on&&s&&this.lobby.link.removeStream(this.stream,e),n.on||this.unplug(n),Array.isArray(t.silenced)&&e===this.lobby.gmId){this.silenced=new Set(t.silenced.filter(r=>typeof r=="string")),this.applyTrack();for(const[r,a]of this.peers)this.applyVolume(r,a)}this.onChange()}hear(t,e){const n=this.peer(e);if(!this.on)return;this.unplug(n);const s=document.createElement("audio");s.autoplay=!0,s.srcObject=t,this.output&&s.setSinkId&&s.setSinkId(this.output).catch(()=>{}),this.audioRoot.append(s),n.audio=s,this.applyVolume(e,n);try{const r=this.context().createMediaStreamSource(t);n.analyser=this.context().createAnalyser(),n.analyser.fftSize=512,r.connect(n.analyser)}catch{}this.onChange()}setVolume(t,e){const n=this.peer(t);n.volume=e,this.applyVolume(t,n)}applyVolume(t,e){e.audio&&(e.audio.volume=this.silenced.has(t)?0:e.volume)}async setOutput(t){var e,n;this.output=t,(e=this.music)==null||e.setOutput(t);for(const s of this.peers.values())(n=s.audio)!=null&&n.setSinkId&&await s.audio.setSinkId(t).catch(()=>{})}silence(t,e){if(this.isGm){e?this.silenced.add(t):this.silenced.delete(t);for(const[n,s]of this.peers)this.applyVolume(n,s);this.announce(),this.onChange()}}drop(t){const e=this.peers.get(t);e!=null&&e.on&&this.on&&this.chime("leave"),e&&this.unplug(e),this.peers.delete(t),this.onChange()}unplug(t){t.audio&&(t.audio.srcObject=null,t.audio.remove()),t.audio=null,t.analyser=null,t.speaking=!1}setChimes(t){this.chimes=t;try{localStorage.setItem(fu,t?"1":"0")}catch{}this.onChange()}chime(t){if(!this.chimes)return;let e;try{e=this.context()}catch{return}const n=t==="join"?[660,880]:[660,494],s=e.currentTime+.01;n.forEach((r,a)=>{const o=e.createOscillator(),l=e.createGain();o.type="sine",o.frequency.value=r;const c=s+a*.11;l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.12,c+.015),l.gain.exponentialRampToValueAtTime(1e-4,c+.22),o.connect(l).connect(e.destination),o.start(c),o.stop(c+.25)}),this.lastChime=t}context(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}watchLocal(){try{const t=this.context().createMediaStreamSource(this.stream);this.localAnalyser=this.context().createAnalyser(),this.localAnalyser.fftSize=512,t.connect(this.localAnalyser)}catch{this.localAnalyser=null}}measure(){let t=!1;const e=s=>{if(!s)return!1;const r=new Float32Array(s.fftSize);s.getFloatTimeDomainData(r);let a=0;for(const o of r)a+=o*o;return Math.sqrt(a/r.length)>Yx},n=this.on&&this.live&&e(this.localAnalyser);n!==this.localSpeaking&&(this.localSpeaking=n,t=!0);for(const[s,r]of this.peers){const a=r.on&&!r.muted&&!this.silenced.has(s)&&e(r.analyser);a!==r.speaking&&(r.speaking=a,t=!0)}t&&this.onChange()}status(){const t=new Map;t.set(this.lobby.selfId,{on:this.on,muted:!this.live,speaking:this.localSpeaking,silenced:this.silenced.has(this.lobby.selfId)});for(const[e,n]of this.peers)t.set(e,{on:n.on,muted:n.muted,speaking:n.speaking,silenced:this.silenced.has(e)});return t}leave(){var t;this.stop(),clearInterval(this.meter),(t=this.ctx)==null||t.close().catch(()=>{})}}async function Kx(){try{const i=await navigator.mediaDevices.enumerateDevices();return{inputs:i.filter(t=>t.kind==="audioinput"),outputs:i.filter(t=>t.kind==="audiooutput"),canChooseOutput:typeof HTMLMediaElement<"u"&&"setSinkId"in HTMLMediaElement.prototype}}catch{return{inputs:[],outputs:[],canChooseOutput:!1}}}const Xc="KeyV";class Zx{constructor({voice:t,roster:e}){this.voice=t,this.roster=e,this.devices={inputs:[],outputs:[],canChooseOutput:!1},this.root=w("section",{class:"voice",dataset:{tool:"voice"}}),this.render();const n=()=>{var s;return/^(INPUT|TEXTAREA|SELECT)$/.test(((s=document.activeElement)==null?void 0:s.tagName)||"")};addEventListener("keydown",s=>{s.code===Xc&&!s.repeat&&!n()&&t.pushToTalk(!0)}),addEventListener("keyup",s=>{s.code===Xc&&t.pushToTalk(!1)}),addEventListener("blur",()=>t.pushToTalk(!1))}async refreshDevices(){this.devices=await Kx(),this.render()}render(){var c,h;const t=this.voice,e=this.roster(),n=u=>e.find(f=>f.peerId===u);if(!t.on){this.root.replaceChildren(...[w("h2",{text:"Voice"}),w("button",{type:"button",class:"primary",id:"voice-join",text:"Join voice",onclick:async()=>{await t.start()&&this.refreshDevices()}}),t.error?w("p",{class:"note",dataset:{kind:"error"},text:t.error}):null,w("p",{class:"note",text:"Your microphone goes straight to the others at the table who have joined — no server in between."}),this.people(n)].filter(Boolean));return}const s=w("select",{onchange:()=>t.useMicrophone(s.value).then(()=>this.refreshDevices())},...this.devices.inputs.map(u=>w("option",{value:u.deviceId,text:u.label||"Microphone"}))),r=(h=(c=t.stream)==null?void 0:c.getAudioTracks()[0])==null?void 0:h.getSettings().deviceId;r&&(s.value=r);const a=this.devices.canChooseOutput?w("select",{onchange:()=>t.setOutput(a.value)},...this.devices.outputs.map(u=>w("option",{value:u.deviceId,text:u.label||"Speakers"}))):null;a&&t.output&&(a.value=t.output);const o=w("input",{type:"checkbox",id:"voice-ptt",onchange:()=>t.setPtt(o.checked)});o.checked=t.ptt;const l=w("input",{type:"checkbox",id:"voice-chimes",onchange:()=>t.setChimes(l.checked)});l.checked=t.chimes,this.root.replaceChildren(...[w("h2",{text:"Voice"}),w("div",{class:"row"},w("button",{type:"button",class:t.muted?"primary":"ghost",id:"voice-mute",text:t.muted?"Unmute":"Mute",onclick:()=>t.setMuted(!t.muted)}),w("button",{type:"button",class:"ghost",id:"voice-leave",text:"Leave voice",onclick:()=>t.stop()})),t.silenced.has(t.lobby.selfId)?w("p",{class:"note",dataset:{kind:"warn"},text:"The GM has muted you for now."}):null,w("label",{class:"check",for:"voice-ptt"},o," Push to talk — hold V"),w("label",{class:"check",for:"voice-chimes"},l," Join and leave sounds"),w("div",{class:"field"},w("label",{text:"Microphone"}),s),a?w("div",{class:"field"},w("label",{text:"Speakers"}),a):null,this.people(n)].filter(Boolean))}people(t){const e=this.voice,n=[...e.peers].filter(([,s])=>s.on).map(([s,r])=>{const a=t(s),o=w("input",{type:"range",min:"0",max:"1",step:"0.05",value:String(r.volume),title:"Volume","aria-label":`Volume for ${(a==null?void 0:a.name)??"them"}`,oninput:()=>e.setVolume(s,+o.value)}),l=e.silenced.has(s);return w("li",{class:r.speaking?"speaking":""},w("i",{class:"seat",style:{background:ns((a==null?void 0:a.color)??9280918)}}),w("span",{class:"who",text:(a==null?void 0:a.name)??"Someone"}),e.on?o:null,e.isGm&&(a==null?void 0:a.role)!==Je?w("button",{type:"button",class:`ghost small${l?" armed":""}`,text:l?"Unsilence":"Silence",title:l?"Let them speak again":"Mute them for everyone",onclick:()=>e.silence(s,!l)}):null)});return w("div",{},w("h3",{class:"sub",text:n.length?"In voice":"Nobody else is in voice yet."}),n.length?w("ul",{class:"voice-people"},...n):null)}}const Jx={kind:"music"},Qx=128e3,pu="vtt.music";class mu{constructor({lobby:t,voice:e,onChange:n}){this.lobby=t,this.onChange=n,this.stream=null,this.source="",this.error="",this.playing=!1,this.audio=null;const s=ny();this.volume=s.volume,this.muted=s.muted,e.music=this}get isGm(){return this.lobby.isGm}get sharing(){return!!this.stream}static get canShare(){var n,s,r;if(!((n=navigator.mediaDevices)!=null&&n.getDisplayMedia))return!1;if((((r=(s=navigator.userAgentData)==null?void 0:s.brands)==null?void 0:r.map(a=>a.brand))||[]).some(a=>/Chromium|Google Chrome|Microsoft Edge/.test(a)))return!0;const e=navigator.userAgent;return/Chrome\/|Chromium\/|Edg\//.test(e)&&!/Firefox\//.test(e)}async share(){var r,a;this.error="";let t;try{t=await ty()}catch(o){return(o==null?void 0:o.name)!=="NotAllowedError"&&(o==null?void 0:o.name)!=="AbortError"&&(this.error=`Could not share that (${(o==null?void 0:o.name)||o}).`),this.onChange(),!1}const e=t.getAudioTracks(),n=t.getVideoTracks()[0],s=(r=n==null?void 0:n.getSettings)==null?void 0:r.call(n).displaySurface;if(!e.length){for(const o of t.getTracks())o.stop();return this.error=ey(s),console.info("[music] share had no audio track; surface was",s),this.onChange(),!1}this.video=n||null,(a=n==null?void 0:n.applyConstraints)==null||a.call(n,{frameRate:1,width:64,height:64}).catch(()=>{}),this.stream=new MediaStream(e),this.source=(n==null?void 0:n.label)||e[0].label||"a tab",e[0].addEventListener("ended",()=>this.stop());for(const o of this.lobby.link.peers())this.sendTo(o);return this.announce(),this.onChange(),!0}stop(){var t;if(this.stream){for(const e of this.lobby.link.peers())this.lobby.link.removeStream(this.stream,e);for(const e of this.stream.getTracks())e.stop();(t=this.video)==null||t.stop(),this.video=null,this.stream=null,this.source="",this.announce(),this.onChange()}}peerJoined(t){this.isGm&&(this.stream&&this.sendTo(t),this.announce(t))}sendTo(t){const e=this.lobby.link.addStream(this.stream,t,Jx);Promise.allSettled(e||[]).then(()=>{var o,l,c;const n=this.lobby.link.connection(t),s=(o=this.stream)==null?void 0:o.getAudioTracks()[0],r=(l=n==null?void 0:n.getSenders)==null?void 0:l.call(n).find(h=>h.track===s);if(!r)return;const a=r.getParameters();a.encodings=(c=a.encodings)!=null&&c.length?a.encodings:[{}],a.encodings[0].maxBitrate=Qx,r.setParameters(a).catch(()=>{})})}announce(t){var e;this.isGm&&((e=this.lobby.link)==null||e.send({t:"music",on:this.sharing},t))}message(t,e){e===this.lobby.gmId&&(this.playing=!!t.on,this.playing||this.unplug(),this.onChange())}hear(t,e){if(e!==this.lobby.gmId)return;this.unplug();const n=document.createElement("audio");n.autoplay=!0,n.srcObject=t,document.body.append(n),n.hidden=!0,this.audio=n,this.playing=!0,this.apply(),this.onChange()}setVolume(t){this.volume=t,this.apply(),qc(this)}setMuted(t){this.muted=t,this.apply(),qc(this),this.onChange()}setOutput(t){var e,n;(n=(e=this.audio)==null?void 0:e.setSinkId)==null||n.call(e,t).catch(()=>{})}apply(){this.audio&&(this.audio.volume=this.muted?0:this.volume)}unplug(){this.audio&&(this.audio.srcObject=null,this.audio.remove()),this.audio=null}leave(){this.stop(),this.unplug()}}async function ty(){const i=await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:"browser"},audio:!0,selfBrowserSurface:"exclude"});for(const t of i.getAudioTracks())t.applyConstraints({echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}).catch(()=>{});return i}function ey(i){return i==="window"?'That shared a window, and Chrome only sends sound from a tab. Share again, choose the "Chrome Tab" pane at the top of the picker, pick the tab with the music, and keep "Also share tab audio" switched on.':i==="monitor"?'That shared the whole screen, which carries no sound here. Share again and choose the "Chrome Tab" pane, pick the tab with the music, and keep "Also share tab audio" on.':'That tab was shared without its sound. Share again and switch on "Also share tab audio" at the bottom of the picker before pressing Share.'}function ny(){try{const i=JSON.parse(localStorage.getItem(pu)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.6,muted:!!i.muted}}catch{return{volume:.6,muted:!1}}}function qc(i){try{localStorage.setItem(pu,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}class iy{constructor({music:t}){this.music=t,this.root=w("section",{class:"music",dataset:{tool:"music"}}),this.render()}render(){const t=this.music,e=[w("h2",{text:"Music"})];t.sharing?e.push(w("p",{class:"playing",text:"♪ Playing to the table"}),w("p",{class:"note source",text:t.source}),w("button",{type:"button",class:"ghost",id:"music-stop",text:"Stop the music",onclick:()=>t.stop()}),w("p",{class:"note",text:"Change track, volume or playlist in that tab — the table hears whatever it plays. Each player has their own volume."})):mu.canShare?e.push(w("ol",{class:"steps"},w("li",{text:"Start your music in another tab — Spotify, YouTube, anything."}),w("li",{text:`Press the button below. In Chrome's picker choose the "Chrome Tab" pane — not "Window" — and pick that tab.`}),w("li",{text:'Keep "Also share tab audio" switched on, then Share.'})),w("p",{class:"note",text:"Chrome always shares a picture too; the table only ever gets the sound."}),w("button",{type:"button",class:"primary",id:"music-share",text:"Share a tab's sound…",onclick:()=>t.share()})):e.push(w("p",{class:"note",dataset:{kind:"warn"},text:"This browser can share a screen but not its sound — Firefox and Safari have no option for it."}),w("p",{class:"note",text:"To play music to the table, run the table in Chrome or Edge on a computer. Players can listen in any browser."})),t.error&&e.push(w("p",{class:"note",dataset:{kind:"error"},text:t.error})),this.root.replaceChildren(...e)}}class sy{constructor({music:t}){this.music=t,this.els={},this.els.mute=w("button",{type:"button",class:"ghost small",onclick:()=>t.setMuted(!t.muted)}),this.els.volume=w("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Music volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=w("div",{class:"music-control",hidden:!0},w("span",{class:"label",text:"♪ Music"}),this.els.volume,this.els.mute),this.render()}render(){const t=this.music;this.root.hidden=!t.playing||t.isGm,this.els.volume.value=String(t.volume),this.els.volume.disabled=t.muted,this.els.mute.textContent=t.muted?"Unmute":"Mute"}}class gu{constructor({ambience:t,label:e="☁ Ambience"}){this.ambience=t,this.els={},this.els.mute=w("button",{type:"button",class:"ghost small",onclick:()=>{t.setMuted(!t.muted),this.render()}}),this.els.volume=w("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Ambience volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=w("div",{class:"music-control ambience-control",hidden:!0},w("span",{class:"label",text:e}),this.els.volume,this.els.mute),this.render()}render(t=this.weather){this.weather=t;const e=this.ambience;this.root.hidden=!t,document.activeElement!==this.els.volume&&(this.els.volume.value=String(e.volume)),this.els.volume.disabled=e.muted,this.els.mute.textContent=e.muted?"Unmute":"Mute"}}const _u="vtt.ambience",_s=1.5;class ry{constructor(){this.ctx=null,this.out=null,this.current=null,this.kind=null,this.intensity=.6;const t=fy();this.volume=t.volume,this.muted=t.muted,this.unlocked=!1,this.curtain=1;const e=()=>{var n,s;this.unlocked=!0,(s=(n=this.ensure())==null?void 0:n.resume)==null||s.call(n),this.apply(),removeEventListener("pointerdown",e,!0),removeEventListener("keydown",e,!0)};addEventListener("pointerdown",e,!0),addEventListener("keydown",e,!0)}ensure(){if(this.ctx)return this.ctx;try{this.ctx=new AudioContext}catch{return null}return this.out=this.ctx.createGain(),this.out.gain.value=this.level(),this.limiter=this.ctx.createDynamicsCompressor(),this.limiter.threshold.value=-6,this.limiter.knee.value=6,this.limiter.ratio.value=12,this.limiter.attack.value=.003,this.limiter.release.value=.25,this.out.connect(this.limiter).connect(this.ctx.destination),this.meter=this.ctx.createAnalyser(),this.meter.fftSize=2048,this.out.connect(this.meter),this.noise=oy(this.ctx),this.brown=ly(this.ctx),this.ready=hy(this.ctx),this.ctx}update(t){const e=(t==null?void 0:t.weather)||null,n=(t==null?void 0:t.intensity)??.6;if(e===this.kind&&Math.abs(n-this.intensity)<.001)return;const s=e!==this.kind;this.kind=e,this.intensity=n,this.unlocked&&this.apply(s)}apply(t=!0){var e,n,s;if(!(!this.unlocked||!this.ensure())){if(!this.hissReady){this.ready.then(()=>{this.hissReady=!0,this.apply(!0)});return}(t||!this.current)&&((e=this.current)==null||e.stop(),this.current=this.kind&&((n=Ea[this.kind])==null?void 0:n.call(Ea,this.ctx,this.noise,this.out))||null),(s=this.current)==null||s.set(this.intensity)}}thunder(t){if(!this.unlocked||!this.ensure())return null;const e=(t==null?void 0:t.weather)==="rain"?t.intensity??.6:.5,n=Math.min(1,Math.max(0,e)),s=.15+(1-n)*8;return ay(this.ctx,this.noise,this.brown,this.out,n,this.ctx.currentTime+s),this.lastThunder={delay:Math.round(s*100)/100,near:n},s}level(){return this.muted?0:this.volume*this.curtain}setVolume(t){this.volume=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),jc(this)}setMuted(t){this.muted=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),jc(this)}setCurtain(t){const e=Math.min(1,Math.max(0,t));Math.abs(e-this.curtain)<.005&&!(e===0&&this.curtain!==0)||(this.curtain=e,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.05))}status(){var e,n;let t=0;if(this.meter){const s=new Float32Array(this.meter.fftSize);this.meter.getFloatTimeDomainData(s),t=Math.sqrt(s.reduce((r,a)=>r+a*a,0)/s.length)}return{kind:this.current?this.kind:null,intensity:this.intensity,volume:this.volume,muted:this.muted,running:((e=this.ctx)==null?void 0:e.state)==="running",level:Math.round(t*1e3)/1e3,thunder:this.lastThunder??null,hiss:!!((n=this.ctx)!=null&&n.hiss)}}}const Ea={rain(i,t,e){const n=To(i,t),s=An(i,"lowpass",2600,.4),r=An(i,"highpass",400,.5),a=i.createGain();n.node.connect(r).connect(s).connect(a);const o=Ao(i,e);a.connect(o);let l=.6;const c=f=>{const p=Math.random()<.08,g=Hi(i,t),_=An(i,"bandpass",p?500+Math.random()*700:1400+Math.random()*3600,p?3:1.5+Math.random()*2),d=i.createGain(),m=(p?.35:.08+Math.random()*.18)*(.6+.4*l),M=p?.12+Math.random()*.1:.03+Math.random()*.06;d.gain.setValueAtTime(0,f),d.gain.linearRampToValueAtTime(m,f+.004+Math.random()*.004),d.gain.exponentialRampToValueAtTime(1e-4,f+M);let y=d;if(i.createStereoPanner){const b=i.createStereoPanner();b.pan.value=Math.random()*1.6-.8,d.connect(b),y=b}g.connect(_).connect(d),y.connect(o),g.start(f,Math.random()*Wn),g.stop(f+M+.05)},h=i.hiss?new AudioWorkletNode(i,"vtt-rain",{numberOfInputs:0,outputChannelCount:[2]}):null;h==null||h.connect(o);const u=h?{stop(){setTimeout(()=>{h.port.postMessage("stop"),h.disconnect()},(_s+.2)*1e3)}}:Yc(i,()=>-Math.log(1-Math.random())/(4+26*l),c);return{set(f){l=f,h==null||h.port.postMessage({k:l}),a.gain.setTargetAtTime(.18+.5*l,i.currentTime,.5),s.frequency.setTargetAtTime(1800+2600*l,i.currentTime,.5)},stop(){u.stop(),Ro(i,o,[n])}}},embers(i,t,e){const n=Ao(i,e),s=To(i,t),r=An(i,"lowpass",300,.7),a=i.createGain();s.node.connect(r).connect(a).connect(n);let o=.6;const c=Yc(i,()=>(.06+Math.random()*.5)/(.35+o),h=>{const u=Math.random()<.25?2+Math.floor(Math.random()*3):1;for(let f=0;f<u;f++){const p=h+f*(.015+Math.random()*.04),g=Hi(i,t),_=An(i,"bandpass",1200+Math.random()*3500,1.5+Math.random()*3),d=i.createGain(),m=(.5+Math.random()*.9)*(.5+.5*o);d.gain.setValueAtTime(0,p),d.gain.linearRampToValueAtTime(m,p+.001),d.gain.exponentialRampToValueAtTime(1e-4,p+.01+Math.random()*.04),g.connect(_).connect(d).connect(n),g.start(p,Math.random()*Wn),g.stop(p+.08)}});return{set(h){o=h,a.gain.setTargetAtTime(.35+.9*o,i.currentTime,.5)},stop(){c.stop(),Ro(i,n,[s])}}},snow(i,t,e){return $c(i,t,e,{base:550,spread:380,level:1.6,rate:.12})},fog(i,t,e){return $c(i,t,e,{base:320,spread:140,level:1.1,rate:.07})}};function ay(i,t,e,n,s,r){const a=1-s,o=.45+.55*s;if(s>.4){const f=.5*(s-.3)*o,p=8+Math.round(8*s);for(let m=0;m<p;m++){const M=r+Math.pow(m/p,1.6)*.55+Math.random()*.03,y=Hi(i,t),b=An(i,"lowpass",1800+2600*s*Math.random(),.5),I=i.createGain(),R=f*(1-m/p)*(.5+Math.random()*.5);I.gain.setValueAtTime(0,M),I.gain.linearRampToValueAtTime(R,M+.004),I.gain.exponentialRampToValueAtTime(1e-4,M+.06+Math.random()*.12),y.connect(b).connect(I).connect(n),y.start(M,Math.random()*Wn),y.stop(M+.3)}const g=Hi(i,e),_=An(i,"lowpass",140,.7),d=i.createGain();d.gain.setValueAtTime(0,r),d.gain.linearRampToValueAtTime(3.2*s*o,r+.02),d.gain.exponentialRampToValueAtTime(1e-4,r+.9),g.connect(_).connect(d).connect(n),g.start(r,Math.random()*Wn),g.stop(r+1)}const l=4+4*a+Math.random()*1.5,c=r+(s>.4?.12:.05),h=.25+.9*a,u=(f,p)=>{const g=Hi(i,e),_=An(i,"lowpass",f,.6),d=i.createGain();g.connect(_).connect(d).connect(n),d.gain.setValueAtTime(1e-4,c),d.gain.setTargetAtTime(p,c,h/3);let m=c+h;for(;m<c+l;){const M=Math.pow(1-(m-c)/l,.6+.8*a);d.gain.setTargetAtTime(p*M*(.4+.6*Math.random()),m,.12),m+=.25+Math.random()*.5}d.gain.setTargetAtTime(1e-4,c+l,.3),g.start(c,Math.random()*Wn),g.stop(c+l+1.5)};u(220+700*s,o*(1.6+2.4*s)*(1+.8*a)),u(90,o*(2.4+2.6*s))}function $c(i,t,e,{base:n,spread:s,level:r,rate:a}){const o=Ao(i,e),l=To(i,t),c=An(i,"bandpass",n,1.2),h=i.createGain();l.node.connect(c).connect(h).connect(o);const u=[a,a*.37].map((g,_)=>{const d=i.createOscillator();d.frequency.value=g;const m=i.createGain();return m.gain.value=_===0?s:s*.5,d.connect(m).connect(c.frequency),d.start(),d}),f=i.createOscillator();f.frequency.value=a*.8;const p=i.createGain();return f.connect(p).connect(h.gain),f.start(),{set(g){const _=r*(.2+.8*g);h.gain.setTargetAtTime(_,i.currentTime,.6),p.gain.setTargetAtTime(_*.6,i.currentTime,.6),c.frequency.setTargetAtTime(n*(.8+.5*g),i.currentTime,.8)},stop(){Ro(i,o,[l,...u,f])}}}const Wn=6;function oy(i){const t=i.createBuffer(1,i.sampleRate*Wn,i.sampleRate),e=t.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1;return t}function ly(i){const t=i.createBuffer(1,i.sampleRate*Wn,i.sampleRate),e=t.getChannelData(0);let n=0;for(let s=0;s<e.length;s++)n=(n+.02*(Math.random()*2-1))/1.02,e[s]=n*3.5;return t}const cy=`
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
});`;function hy(i){if(!i.audioWorklet)return Promise.resolve();const t=URL.createObjectURL(new Blob([cy],{type:"application/javascript"}));return i.audioWorklet.addModule(t).then(()=>{i.hiss=!0}).catch(()=>{}).finally(()=>URL.revokeObjectURL(t))}function To(i,t){if(i.hiss){const n=new AudioWorkletNode(i,"vtt-hiss",{numberOfInputs:0,outputChannelCount:[1]});return{node:n,stop(s){setTimeout(()=>{n.port.postMessage("stop"),n.disconnect()},Math.max(0,s-i.currentTime)*1e3)}}}const e=Hi(i,t);return e.start(0,Math.random()*Wn),{node:e,stop:n=>e.stop(n)}}function Hi(i,t){const e=i.createBufferSource();return e.buffer=t,e.loop=!0,e}function An(i,t,e,n){const s=i.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=n,s}function Ao(i,t){const e=i.createGain();return e.gain.setValueAtTime(0,i.currentTime),e.gain.linearRampToValueAtTime(1,i.currentTime+_s),e.connect(t),e}function Ro(i,t,e){const n=i.currentTime;t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+_s);for(const s of e)try{s.stop(n+_s+.05)}catch{}setTimeout(()=>t.disconnect(),(_s+.2)*1e3)}const uy=1.2,dy=100;function Yc(i,t,e){let n=i.currentTime+t();const s=()=>{const a=i.currentTime;for(n<a&&(n=a+t());n<a+uy;)e(n),n+=t()};s();const r=setInterval(s,dy);return{stop(){clearInterval(r)}}}function fy(){try{const i=JSON.parse(localStorage.getItem(_u)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.5,muted:!!i.muted}}catch{return{volume:.5,muted:!1}}}function jc(i){try{localStorage.setItem(_u,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}const vu="vtt-table";async function xu(i,t){var o;const e={};for(const l of Object.keys(i.state.assets||{})){const c=await t.blob(l);c&&(e[l]={mime:c.type||((o=i.state.assets[l])==null?void 0:o.mime)||"image/webp",data:await my(c)})}const{id:n,tokens:s,...r}=i,a=JSON.stringify({format:vu,v:1,...r,assets:e});return new Blob([a],{type:"application/json"})}async function py(i){let t;try{t=JSON.parse(i)}catch{throw new Error("That is not a table file.")}if(!t||t.format!==vu||typeof t.state!="object")throw new Error("That is not a table file.");if(t.v>1)throw new Error("That table was saved by a newer version. Reload to update, then try again.");const e=[];let n=0;for(const[r,a]of Object.entries(t.assets||{}))try{const o=gy(a.data);if(await Pr(o.buffer)!==r){n++;continue}e.push({hash:r,blob:new Blob([o],{type:typeof a.mime=="string"?a.mime:"image/webp"})})}catch{n++}return{record:{name:typeof t.name=="string"?t.name.slice(0,80):"Imported table",code:typeof t.code=="string"?t.code.slice(0,8):null,savedAt:Number.isFinite(t.savedAt)?t.savedAt:Date.now(),seed:Number.isInteger(t.seed)?t.seed:void 0,rng:t.rng&&typeof t.rng=="object"?t.rng:void 0,said:Number.isInteger(t.said)?t.said:0,secrets:Array.isArray(t.secrets)?t.secrets.slice(-200):[],secretRng:t.secretRng&&typeof t.secretRng=="object"?t.secretRng:void 0,state:xo(t.state)},images:e,skipped:n}}async function my(i){const t=new Uint8Array(await i.arrayBuffer());let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}function gy(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const _y=(i,t)=>typeof i=="string"&&typeof t=="string"&&i.trim().toLowerCase()===t.trim().toLowerCase();function vy(i,t,e){for(const n of Object.values(i.roster))if(!(n.peerId===e||n.role!==Yi||!n.away||n.claimed)&&_y(n.name,t))return n;return null}function yu(i,t,e){const n=[],s=Ce(i);for(const a of Object.values((s==null?void 0:s.tokens)||{}))a.owner===t&&n.push(["tok.patch",a.id,{owner:e}]);const r=i.roster[t];return r&&n.push(["peer.join",{...r,away:!0,claimed:e}]),n}function xy(i,t){const e=[];for(const n of Object.values(i.roster))n.role!==Je||n.peerId===t||e.push(...yu(i,n.peerId,t));return e}const cn={tokens:40,name:48,minSize:.25,maxSize:12,reach:2e3,assetName:128,artPx:2e4},Kc=/^[0-9a-f]{64}$/,wa=i=>typeof i=="string"&&i.length>0&&i.length<=64,Ui=i=>typeof i=="number"&&Number.isFinite(i),hr=(i,t,e)=>i<t?t:i>e?e:i,Ii=i=>Ui(i)?hr(Math.round(i*100)/100,-2e3,cn.reach):null,Ta=Math.PI*2,Zc=i=>Math.round((i%Ta+Ta)%Ta*1e4)/1e4,Aa=(i,t)=>typeof i=="string"?i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,t):"";function yy(i,t){var e;return((e=i.roster[t])==null?void 0:e.role)===Je}function My(i,t,e){var s;const n=(s=Ce(i))==null?void 0:s.tokens[e];return!!n&&n.owner===t}function Sy(i,t,e){var o;if(!Array.isArray(e)||typeof e[0]!="string")return null;const[n,s,r,a]=e;switch(n){case"asset.add":{if(!s||typeof s!="object"||!Kc.test(s.hash))return null;const l=c=>Number.isInteger(c)&&c>0&&c<=cn.artPx?c:0;return["asset.add",{hash:s.hash,name:Aa(s.name,cn.assetName)||"token",mime:typeof s.mime=="string"&&/^image\/[\w.+-]{1,32}$/.test(s.mime)?s.mime:"image/webp",w:l(s.w),h:l(s.h),size:Number.isInteger(s.size)&&s.size>=0?s.size:0,scaled:!!s.scaled}]}case"tok.add":{if(!s||typeof s!="object")return null;const l=Ii(s.x),c=Ii(s.y);if(l===null||c===null)return null;const h={name:Aa(s.name,cn.name),x:l,y:c,size:Ui(s.size)?hr(s.size,cn.minSize,cn.maxSize):1,owner:t,layer:"token",hidden:!1};if(s.asset!==void 0&&s.asset!==null){if(!Kc.test(s.asset))return null;h.asset=s.asset}const u=(o=i.roster[t])==null?void 0:o.color;return Number.isInteger(u)?h.border=u:Number.isInteger(s.border)&&(h.border=s.border&16777215),(s.shape==="circle"||s.shape==="square")&&(h.shape=s.shape),["tok.add",h]}case"tok.move":{const l=Ii(r),c=Ii(a);return!wa(s)||l===null||c===null?null:["tok.move",s,l,c]}case"tok.del":return wa(s)?["tok.del",s]:null;case"tok.patch":{if(!wa(s)||!r||typeof r!="object")return null;const l={};return typeof r.name=="string"&&(l.name=Aa(r.name,cn.name)),Ui(r.size)&&(l.size=hr(Math.round(r.size*100)/100,cn.minSize,cn.maxSize)),Ui(r.rot)&&(l.rot=Zc(r.rot)),r.facing===null?l.facing=null:Ui(r.facing)&&(l.facing=Zc(r.facing)),typeof r.light=="boolean"&&(l.light=r.light),Ui(r.lightRange)&&(l.lightRange=hr(Math.round(r.lightRange),1,gr)),Object.keys(l).length?["tok.patch",s,l]:null}case"peer.color":return Number.isInteger(s)?["peer.color",t,s&16777215]:null;case"dice.roll":return typeof s=="string"&&s.length<=un.input?["dice.roll",t,s]:null;case"fx.ping":{const l=Ii(s),c=Ii(r);return l===null||c===null?null:["fx.ping",t,l,c]}case"chat.say":{const l=Vh(s);return l?["chat.say",t,l]:null}default:return null}}function by(i,t,e){if(!i.roster[t])return!1;if(yy(i,t))return!0;const n=Ce(i);switch(e[0]){case"asset.add":return!0;case"tok.add":{if(!n||e[1].asset&&!i.assets[e[1].asset])return!1;let s=0;for(const r of Object.values(n.tokens))r.owner===t&&s++;return s<cn.tokens}case"tok.move":case"tok.del":case"tok.patch":return My(i,t,e[1]);case"peer.color":case"dice.roll":case"chat.say":case"fx.ping":return e[1]===t;default:return!1}}const Ey=50;class wy{constructor({lobby:t,table:e,library:n,onRoster:s,onSeat:r,onFx:a}){this.lobby=t,this.table=e,this.library=n,this.onFx=a,this.unsubscribe=e.events.onRemote((o,l)=>{o==="op"&&t.link.send({t:"op",n:l[1],c:l[0]})}),t.listen({onRoster:s,onSeated:o=>{r==null||r(o),this.sendDoc(o)},onMessage:(o,l)=>this.receive(o,l),onAsset:(o,l,c)=>this.upload(o,l,c)})}sendDoc(t){this.lobby.link.send({t:"doc",s:this.table.snapshot()},t)}receive(t,e){if(t.t==="sync")return this.sendDoc(e);if(t.t==="need")return this.sendAssets(Ax(t),e);if(t.t==="req")return this.request(Bc(t.c),e)}request(t,e){var s;let n=0;for(const r of t){const a=Sy(this.table.state,e,r);if(!a||!by(this.table.state,e,a)){n++;continue}if(a[0]==="asset.add"&&!this.library.has(a[1].hash)){n++;continue}if(a[0]==="peer.color"){this.recolor(a[1],a[2]);continue}if(a[0]==="dice.roll"){try{this.table.rollDice(a[2],a[1])}catch{n++}continue}if(a[0]==="fx.ping"){const o={t:"fx",k:"ping",x:a[2],y:a[3],by:a[1]};(s=this.onFx)==null||s.call(this,o),this.lobby.link.send(o);continue}if(a[0]==="chat.say"){this.table.say(a[1],a[2],Date.now());continue}this.table.dispatch(a,{record:!1})}n&&console.info(`[session] refused ${n} of ${t.length} from ${e}`)}recolor(t,e){this.lobby.setColor(t,e);const n=this.table.scene;for(const s of Object.values((n==null?void 0:n.tokens)||{}))s.owner===t&&s.border!==e&&this.table.dispatch(["tok.patch",s.id,{border:e}],{record:!1})}async upload(t,e,n){const s=e==null?void 0:e.h;if(!yr(s))return;const r=await Mu(t);if(!(!r||r.byteLength>gn.upload)){if(await Pr(r)!==s){console.warn("[session] upload did not match its hash",s);return}this.library.has(s)||await this.library.putBytes(s,new Blob([r],{type:Su(e)})),this.request(Bc(e.req),n)}}async sendAssets(t,e){for(const n of t){const s=await this.library.blob(n);if(!s||!this.lobby.members.has(e))continue;const r=this.table.state.assets[n];await this.lobby.link.sendAsset(await s.arrayBuffer(),{h:n,mime:(r==null?void 0:r.mime)||s.type},e)}}leave(){this.unsubscribe()}}class Ty{constructor({lobby:t,table:e,library:n,onRoster:s,onGmLeft:r,onProgress:a,onHydrated:o,onFx:l}){this.lobby=t,this.table=e,this.library=n,this.onProgress=a,this.onHydrated=o,this.onFx=l,this.hydrated=!1,this.asked=new Set,this.syncing=!1,this.patches=new Map,this.patchTimer=0,t.listen({onRoster:s,onGmLeft:r,onMessage:c=>this.receive(c),onAsset:(c,h)=>this.adopt(c,h),onAssetProgress:(c,h)=>this.progress(c,h)})}receive(t){var e,n;if(t.t==="fx")return(e=this.onFx)==null?void 0:e.call(this,t);if(t.t==="doc"){const s=Ex(t);if(!s)return;this.table.load(s),this.hydrated=!0,this.syncing=!1,(n=this.onHydrated)==null||n.call(this),this.fetchMissing()}else if(t.t==="op"){const s=wx(t);if(!s||!this.hydrated||this.syncing||s.seq<=this.table.seq)return;if(s.seq!==this.table.seq+1)return this.resync();if(this.table.dispatch(s.cmd,{record:!1}),this.table.seq!==s.seq)return this.resync();this.fetchMissing()}}resync(){this.syncing=!0,this.lobby.link.send({t:"sync"},this.lobby.gmId)}async fetchMissing(){const t=this.library.missing(this.table.state).filter(n=>!this.asked.has(n));if(!t.length)return;for(const n of t)this.asked.add(n);const e=await this.library.restore(t);for(const n of t)e.includes(n)||this.asked.delete(n);for(let n=0;n<e.length;n+=gn.need)this.lobby.link.send({t:"need",h:e.slice(n,n+gn.need)},this.lobby.gmId)}async adopt(t,e){var s;const n=e==null?void 0:e.h;if(!(!yr(n)||!this.asked.has(n))){this.asked.delete(n);try{const r=await Mu(t);if(!r||await Pr(r)!==n){console.warn("[session] asset did not match its hash",n);return}await this.library.putBytes(n,new Blob([r],{type:Su(e)}))}finally{this.asked.size||(s=this.onProgress)==null||s.call(this,null,"")}}}request(t){const e=[];for(const n of t)n[0]==="tok.patch"&&typeof n[1]=="string"?this.patches.set(n[1],{...this.patches.get(n[1]),...n[2]}):e.push(n);e.length?(this.flushPatches(),this.lobby.link.send({t:"req",c:e},this.lobby.gmId)):this.patches.size&&!this.patchTimer&&(this.patchTimer=setTimeout(()=>this.flushPatches(),Ey))}flushPatches(){if(clearTimeout(this.patchTimer),this.patchTimer=0,!this.patches.size)return;const t=[...this.patches].map(([e,n])=>["tok.patch",e,n]);this.patches.clear(),this.lobby.link.send({t:"req",c:t},this.lobby.gmId)}async upload(t,e){if(await this.library.put(t),this.table.state.assets[t.hash])return this.request(e);await this.lobby.link.sendAsset(await t.blob.arrayBuffer(),{h:t.hash,mime:t.mime,req:e},this.lobby.gmId)}progress(t,e){var r,a;const n=e==null?void 0:e.h;if(!yr(n)||!this.asked.has(n))return;const s=((r=this.table.state.assets[n])==null?void 0:r.name)||"art";(a=this.onProgress)==null||a.call(this,Math.max(0,Math.min(1,t)),s)}leave(){}}async function Mu(i){return i instanceof ArrayBuffer?i:i instanceof Blob?i.arrayBuffer():ArrayBuffer.isView(i)?i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength):null}function Su(i){const t=i==null?void 0:i.mime;return typeof t=="string"&&/^image\/[\w.+-]{1,32}$/.test(t)?t:"image/webp"}const j=new tl,$e=new k_;let me="local";j.dispatch(["peer.join",vr(me,"You",{role:Je})],{record:!1});j.dispatch(["scene.add",{name:"Table"}],{record:!1});const Co=document.getElementById("chrome"),pe=w("div",{id:"busy",hidden:!0}),gs=w("div",{id:"toast",hidden:!0});document.getElementById("stage").append(pe);document.body.append(gs);let Jc=0;function ge(i,t="info"){gs.textContent=i,gs.dataset.kind=t,gs.hidden=!1,clearTimeout(Jc),Jc=setTimeout(()=>{gs.hidden=!0},5200)}let Qe=null,_e=new Set;const jn=i=>i?ie?j.dispatch(i):(se==null||se.request([i]),null):null,bu=i=>ie||!!i&&i.owner===me,Ln=new ou({onCommand:jn,onImportMap:i=>Du(i),onPickMap:i=>By(i),onImportToken:i=>Uu(i),onAddBlank:()=>Nu({}),onFit:()=>xt.fit(j.state),onDetect:()=>Oy(),onClose:()=>ae.show(null)}),ae=new Vx([{id:"map",label:"Map",key:"M",panel:!0},{id:"grid",label:"Grid",key:"G",panel:!0},{id:"tokens",label:"Add tokens",key:"T",panel:!0},{id:"fx",label:"FX — weather, darkness, lightning",key:"X",panel:!0},"gap",{id:"undo",label:"Undo",key:"Ctrl+Z",run:()=>j.undo()},{id:"redo",label:"Redo",key:"Ctrl+Shift+Z",run:()=>j.redo()},{id:"fit",label:"Fit the map to the view",key:"F",run:()=>xt.fit(j.state)},{id:"save",label:"Save the table to a file",run:()=>Vy()},"sep",{id:"music",label:"Music for the table",panel:!0},{id:"voice",label:"Voice",panel:!0},{id:"invite",label:"Invite players",key:"I",panel:!0},{id:"leave",label:"Leave game",run:()=>ke==null?void 0:ke.leave()}],{onOpen:i=>Ln.show(i)});document.body.prepend(ae.root);const el=new Xx({onPlay:i=>Eu(i),onAmbience:i=>{j.scene&&jn(["scene.fx",j.scene.id,i])}});Ln.addSection(el.root);const fi=new ry,nl=[new gu({ambience:fi,label:"Your ambience volume"})];el.root.append(nl[0].root);function Eu(i){wu(i),qt&&ie&&qt.link.send({t:"fx",k:i})}function wu(i){var t;xt.fx.play(i),i==="lightning"&&fi.thunder((t=j.scene)==null?void 0:t.fx)}const Ay=400;let Qc=0;function Tu(i,t,e){const n=performance.now();n-Qc<Ay||(Qc=n,i=fn(i),t=fn(t),xt.fx.ping(i,t,Au(me)),qt&&(ie?qt.link.send({t:"fx",k:"ping",x:i,y:t,by:me,pull:!!e}):se==null||se.request([["fx.ping",i,t]])))}function th(i){if(i.k==="ping"){if(i.by===me||!Number.isFinite(i.x)||!Number.isFinite(i.y))return;xt.fx.ping(i.x,i.y,Au(i.by)),i.pull&&xt.lookAt(i.x,i.y);return}["lightning","shake","damage"].includes(i.k)&&wu(i.k)}function Au(i){var t;return ns(((t=j.state.roster[i])==null?void 0:t.color)??Tt.tokens.defaultBorder)}ae.setVisible("invite",!1);ae.setVisible("voice",!1);ae.setVisible("music",!1);ae.setVisible("leave",!1);const Ry=["map","grid","tokens","fx","undo","redo","fit","save","music"],Cy={KeyM:"map",KeyG:"grid",KeyT:"tokens",KeyX:"fx",KeyI:"invite"},ci=new hx({onCommand:jn,onSizeCommitted:i=>Cu(i),onDelete:()=>Lu()});Co.append(ci.root);document.getElementById("stage").append(Ln.root);K_().then(i=>Ln.setLibrary(i));const xt=new tx({canvas:document.getElementById("canvas"),overlayEl:document.getElementById("overlay"),library:$e,handlers:{onResize:(i,t)=>jn(["tok.patch",i,{size:fn(t)}]),onResizeEnd:i=>Cu(i)}});xt.fit(j.state);const il=()=>!ie&&xt.fx.locked,Py=new rx(xt,{getState:()=>j.state,locked:il,canGrab:i=>bu(i),onSelect:i=>$n(i),isSelected:i=>_e.has(i),hasSelection:()=>_e.size>0,groupOf:i=>_e.has(i)?[..._e]:[i],onToggle:i=>Uy(i),onDropGroup:i=>Pu(i.map(t=>Cr(j.state,t.id,t.x,t.y))),onContext:i=>$n((i==null?void 0:i.id)??null),onPing:(i,t,e)=>Tu(i,t,e),onTurn:(i,t)=>{ie||Iy(i,t),jn(["tok.patch",i,{facing:t}])}}),Mr=new Map,Ru=2500;function Ly(i,t,e){Mr.set(i,{x:t,y:e,until:performance.now()+Ru}),xt.ghosts.set(i,{x:t,y:e})}const Sr=new Map;function Iy(i,t){Sr.set(i,{facing:t,until:performance.now()+Ru}),xt.turns.set(i,t)}function Dy(i){var t,e;for(const[n,s]of Mr){const r=(t=j.scene)==null?void 0:t.tokens[n];(!r||r.x===s.x&&r.y===s.y||i>s.until)&&(Mr.delete(n),xt.ghosts.delete(n))}for(const[n,s]of Sr){const r=(e=j.scene)==null?void 0:e.tokens[n];(!r||typeof r.facing=="number"&&Math.abs(r.facing-s.facing)<.001||i>s.until)&&(Sr.delete(n),xt.turns.delete(n))}}function Cu(i){var e;const t=(e=j.scene)==null?void 0:e.tokens[i];t&&jn(Cr(j.state,i,t.x,t.y))}function $n(i){Qe=i,_e=new Set(i?[i]:[]),sl()}function Uy(i){_e.has(i)?(_e.delete(i),Qe===i&&(Qe=[..._e].pop()??null)):(_e.add(i),Qe=i),sl()}function sl(){xt.selectedIds=_e,xt.selectedId=_e.size===1?Qe:null}function Ny(){var e;const i=((e=j.scene)==null?void 0:e.tokens)||{};let t=!1;for(const n of _e)i[n]||(_e.delete(n),t=!0);Qe&&!i[Qe]&&(Qe=[..._e].pop()??null,t=!0),t&&sl()}function Pu(i){const t=i.filter(Boolean);if(t.length){if(ie){t.length===1?j.dispatch(t[0]):j.batch(t);return}for(const[,e,n,s]of t)Ly(e,n,s);se==null||se.request(t)}}function Po(){var t;const i=((t=j.scene)==null?void 0:t.tokens)||{};return[..._e].map(e=>i[e]).filter(e=>e&&bu(e))}function Lu(){const i=Po().map(t=>["tok.del",t.id]);i.length&&(ie?i.length===1?j.dispatch(i[0]):j.batch(i):se==null||se.request(i),$n(null))}const rl=new Bx({onRoll:i=>Ir(i),onError:i=>ge(i,"error")}),al=new zx({onSay:i=>Fy(i),onRoll:i=>Ir(i),onError:i=>ge(i,"error")}),ol=new qx({onRoll:i=>Ir(i)});document.getElementById("stage").append(w("div",{id:"dice"},al.root,w("div",{class:"dice-row"},rl.root,ol.root)));function Fy(i){if(!ie)return se==null?void 0:se.request([["chat.say",i]]);j.say(me,i,Date.now())}function Ir(i){var e;let t;try{t=Ar(i)}catch(n){return ge(n.message,"error")}if(t.note&&ol.add(t.note,Gh(t.terms)),!ie)return se==null?void 0:se.request([["dice.roll",i]]);try{if(rl.hidden){const n=j.rollSecret(i,me,Date.now());xt.dice.play(n,((e=j.state.roster[me])==null?void 0:e.color)??Tt.tokens.defaultBorder),al.refresh(j.feedWithSecrets(),j.state.roster),zu();return}j.rollDice(i,me)}catch(n){ge(n.message,"error")}}const Lo=new Set;function Iu(){for(const i of j.rolls())Lo.add(i.id)}function ky(){var e;const i=j.rolls().filter(n=>!Lo.has(n.id));if(!i.length)return;for(const n of i)Lo.add(n.id);const t=i[i.length-1];xt.dice.play(t,((e=j.state.roster[t.by])==null?void 0:e.color)??Tt.tokens.defaultBorder)}async function Du(i){pe.hidden=!1,pe.textContent=`Reading ${i.name}…`;try{const t=await Jh(i);await $e.put(t);const e=j.state.activeScene,n=[["asset.add",tu(t)],["scene.map",e,t.hash,t.w,t.h]],s=ou.gridGuessFor(t.name,t.w,t.h),r=t.detected,a=r&&r.confidence>=Rs.minConfidence;if(s?n.push(["scene.grid",e,{unitPx:s.unitPx,ox:s.ox,oy:s.oy}]):a&&n.push(["scene.grid",e,{unitPx:fn(r.unitPx),ox:fn(r.ox),oy:fn(r.oy)}]),j.batch(n),xt.fit(j.state),s){const o=r&&Math.abs(r.unitPx-s.unitPx)/s.unitPx<.03;ge(`${t.name} — grid from the filename: ${s.cols}×${s.rows} at ${s.unitPx}px.`+(o?" Measuring the image agrees.":""))}else a?ge(`${t.name} — grid measured from the image: ${r.unitPx.toFixed(1)}px (${r.agreed} of ${r.readings} readings agreed). Nudge the offset if it sits wrong.`):(ge(`${t.name} loaded. No grid found in the image — set pixels per cell by hand, or press Detect.`),ae.show("grid"))}catch(t){ge(t.message||"Could not load that image.","error")}finally{pe.hidden=!0}}async function Oy(){const i=j.scene;if(!(i!=null&&i.map))return ge("Load a map first.");pe.hidden=!1,pe.textContent="Measuring the grid…";try{const t=await $e.bitmap(i.map);if(!t)throw new Error("That map is not loaded.");const e=await Qh(t,i.artW);if(!e||e.confidence<Rs.minConfidence)return ge(e?`Nothing convincing — the best fit was ${e.unitPx.toFixed(1)}px, and only ${e.agreed} of ${e.readings} readings agreed. Left alone.`:"Could not measure that image.");j.dispatch(["scene.grid",i.id,{unitPx:fn(e.unitPx),ox:fn(e.ox),oy:fn(e.oy)}]),ge(`Measured ${e.unitPx.toFixed(1)}px per cell — ${e.agreed} of ${e.readings} readings agreed.`)}catch(t){ge(t.message||"Could not measure that image.","error")}finally{pe.hidden=!0}}async function By(i){pe.hidden=!1,pe.textContent=`Fetching ${i.name}…`;try{await Du(await j_(i.url,i.name))}catch(t){ge(t.message||`Could not load ${i.name}.`,"error")}finally{pe.hidden=!0}}async function Uu(i){pe.hidden=!1;let t=0;for(const e of i){pe.textContent=`Reading ${e.name}… (${++t}/${i.length})`;try{const n=await Jh(e),s=e.name.replace(/\.[a-z0-9]+$/i,"").slice(0,48),r=[["asset.add",tu(n)],ku({asset:n.hash,name:s,border:ie?Tt.tokens.defaultBorder:qy()},t-1)];ie?(await $e.put(n),j.batch(r)):(pe.textContent=`Sending ${e.name} to the GM…`,await se.upload(n,r))}catch(n){ge(n.message||`Could not load ${e.name}.`,"error")}}pe.hidden=!0}function Nu(i){ie||Fu();const t=jn(ku(i,0));t&&$n(t[1])}let Ni=null;function Fu(){var t;const i=Object.values(((t=j.scene)==null?void 0:t.tokens)||{}).filter(e=>e.owner===me);Ni={known:new Set(i.map(e=>e.id)),until:performance.now()+5e3}}function zy(i){var e;if(!Ni)return;const t=Object.values(((e=j.scene)==null?void 0:e.tokens)||{}).filter(n=>n.owner===me&&!Ni.known.has(n.id));t.length?($n(t[t.length-1].id),Ni=null):i>Ni.until&&(Ni=null)}function ku(i,t){var h;const e=xt.cam.camera.position,n=(h=j.scene)==null?void 0:h.grid,s=i.size??Tt.tokens.defaultSize,r=Math.max(1,s),a=u=>Qo(u,-e.y,n,s).map(fn);let o=e.x+t*r,[l,c]=a(o);for(let u=0;u<24&&Di(j.state,l,c);u++)o+=r,[l,c]=a(o);return["tok.add",{border:Tt.tokens.defaultBorder,owner:me,...i,size:s,x:l,y:c}]}let qt=null,ke=null,Me=null,Io=null,Ie=null,vs=null,xs=null;function Hy(){vs==null||vs.render(),xs==null||xs.render()}function Ou(){Me&&(Io.render(),ke==null||ke.setVoice(Me.status()))}function eh(i){ke.render(i),Me&&(Me.announce(),Ou())}let se=null,ie=!0;new URLSearchParams(location.search).has("offline")||new Px({onEnter:i=>Gy(i),onResume:async i=>{const t=await jh(i);if(!t)throw new Error("That table is no longer saved here.");return await hl(t),t},onOpenFile:async i=>Hu(i)});addEventListener("pagehide",()=>{Ie==null||Ie.leave(),Me==null||Me.leave(),se==null||se.leave(),qt==null||qt.leave()});function Gy(i){qt=i,ie=qt.isGm;const t=me;if(me=qt.selfId,j.dispatch(["peer.join",vr(me,qt.name,{role:ie?Je:Yi})],{record:!1}),ie){for(const n of xy(j.state,me))j.dispatch(n,{record:!1});Dr=qt.code}j.state.roster[t]&&t!==me&&j.dispatch(["peer.part",t],{record:!1}),ol.useTable(qt.code),ke=new Fx(qt,{onInvite:()=>ae.show("invite"),onArmLeave:n=>{const s=ie?"The table is saved; resume it from the start screen.":"";ae.setArmed("leave",n,n?`Click again to leave. ${s}`.trim():"Leave game"),n&&ge(`Click Leave again to go. ${s}`.trim())}}),Co.prepend(ke.root),Ln.addSection(ke.invite),ae.setVisible("invite",!0),ae.setVisible("leave",!0),Me=new jx({lobby:qt,onChange:()=>Ou()}),Io=new Zx({voice:Me,roster:()=>qt.roster()}),Ln.addSection(Io.root),ae.setVisible("voice",!0),Ie=new mu({lobby:qt,voice:Me,onChange:()=>Hy()}),xs=new sy({music:Ie}),ke.root.append(xs.root);const e=new gu({ambience:fi});if(nl.push(e),ke.root.append(e.root),ie&&(vs=new iy({music:Ie}),Ln.addSection(vs.root),ae.setVisible("music",!0)),ke.render(qt.roster()),ie){se=new wy({lobby:qt,table:j,library:$e,onSeat:n=>Wy(n),onFx:n=>th(n),onRoster:n=>{eh(n),nh(n)}}),nh(qt.roster());return}rl.setGm(!1);for(const n of Ry)ae.setVisible(n,!1);ae.show(null),$n(null),Co.insertBefore(new kx({onImportToken:n=>{Fu(),Uu(n)},onAddBlank:()=>Nu({})}).root,ci.root),ci.setPlayer({onColor:n=>se.request([["peer.color",n]])}),pe.hidden=!1,pe.textContent="Fetching the table…",se=new Ty({lobby:qt,table:j,library:$e,onRoster:n=>eh(n),onGmLeft:()=>{ke.gmLeft(),ge("The GM has left the room.","error")},onFx:n=>th(n),onHydrated:()=>{Iu(),pe.textContent==="Fetching the table…"&&(pe.hidden=!0)},onProgress:(n,s)=>{pe.hidden=n===null,n!==null&&(pe.textContent=`Receiving ${s}… ${Math.round(n*100)}%`)}})}function nh(i){const t=new Set(i.map(e=>e.peerId));for(const[e,n]of Object.entries(j.state.roster))!t.has(e)&&!n.away&&j.dispatch(["peer.join",{...n,away:!0}],{record:!1});for(const e of i){const n=j.state.roster[e.peerId];(!n||n.away||n.name!==e.name||n.color!==e.color||n.role!==e.role)&&j.dispatch(["peer.join",{...e,tokens:(n==null?void 0:n.tokens)??[]}],{record:!1})}}let br=null,Dr=null,Do=0;function ll(){const i=j.scene;return!!i&&(!!i.map||Object.keys(i.tokens).length>0||j.feed().length>0)}function Bu(){var t;const i=(t=j.scene)!=null&&t.map?j.state.assets[j.scene.map]:null;if(i!=null&&i.name){const e=i.name.replace(/\.[a-z0-9]+$/i,"").replace(/\((?:\d+x\d+|free)\)/gi,"").replace(/[_\s]+/g," ").trim();if(e)return e.slice(0,80)}return`Table of ${new Date().toLocaleDateString([],{day:"numeric",month:"short"})}`}function Ur(){var i;return br||(br=`t_${Date.now().toString(36)}_${j.seed.toString(36)}`),{id:br,name:Bu(),code:Dr,savedAt:Date.now(),tokens:Object.keys(((i=j.scene)==null?void 0:i.tokens)||{}).length,state:j.snapshot(),seed:j.seed,rng:j.rng.getState(),said:j.said,secrets:j.secrets,secretRng:j.secretRng.getState()}}function zu(){!ie||!ll()||(clearTimeout(Do),Do=setTimeout(()=>Kh(Ur()),700))}function cl(){return clearTimeout(Do),ie&&ll()?Kh(Ur()):Promise.resolve(!1)}async function hl(i){j.load(i.state),Number.isInteger(i.seed)&&(j.seed=i.seed),i.rng?j.rng.setState(i.rng):j.rng.seed(j.seed),j.said=i.said||0,j.restoreSecrets(i.secrets,i.secretRng),br=i.id,Dr=i.code||null,await $e.restore($e.missing(j.state)),Iu(),$n(null),Uo=null,xt.fit(j.state)}async function Hu(i){const{record:t,images:e,skipped:n}=await py(await i.text());for(const s of e)await $e.putBytes(s.hash,s.blob);return t.id=null,await hl(t),await cl(),n&&ge(n===1?"One image in that file did not match its name and was left out.":`${n} images in that file did not match their names and were left out.`,"error"),t}async function Vy(){if(!ll())return ge("Nothing on the table to save yet.");const i=Ur(),t=await xu(i,$e),e=w("a",{href:URL.createObjectURL(t),download:`${i.name}.vtt`});document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),1e4),ge(`Saved ${i.name}.vtt — open it from the start screen to carry on anywhere.`)}function Wy(i){const t=qt==null?void 0:qt.members.get(i),e=t&&vy(j.state,t.name,i);if(e){qt.setColor(i,e.color);for(const n of yu(j.state,e.peerId,i))j.dispatch(n,{record:!1});ge(`${t.name} is back, with their tokens.`)}}addEventListener("pagehide",()=>{cl()});const Xy=new gx({panLeft:["KeyA"],panRight:["KeyD"],panUp:["KeyW"],panDown:["KeyS"]},(i,t)=>{var r;if(il())return!1;if(i==="KeyF")return xt.fit(j.state),!0;if(i==="Escape"&&ae.open)return ae.show(null),!0;if(i==="Escape"&&_e.size)return $n(null),!0;const e=Cy[i];if(e&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&(ie||e==="invite")&&!((r=ae.buttons.get(e))!=null&&r.hidden))return ae.toggle(e),!0;if((t.ctrlKey||t.metaKey)&&i==="KeyZ")return ie?(t.shiftKey?j.redo():j.undo(),!0):!1;if(!Po().length)return!1;if(i==="Delete"||i==="Backspace")return Lu(),!0;const n=(i==="ArrowRight"?1:0)-(i==="ArrowLeft"?1:0),s=(i==="ArrowDown"?1:0)-(i==="ArrowUp"?1:0);return!n&&!s?!1:(Pu(Po().map(a=>Cr(j.state,a.id,a.x+n,a.y+s))),!0)}),ds={x:0,y:0},ih=new $u({hz:Tt.sim.hz});let sh=-1,Uo=null,Ra=!1;function Gu(i){var n,s,r,a;requestAnimationFrame(Gu);const{steps:t,frameDt:e}=ih.advance(i);(Mr.size||Sr.size)&&Dy(i);for(let o=0;o<t;o++)j.step(ih.dt);if(Xy.vector("panLeft","panRight","panUp","panDown",ds),il())Py.cancel();else if(ds.x||ds.y){const o=xt.cam.viewUnits*e;xt.cam.panBy(ds.x*o,ds.y*o)}if(j.seq!==sh){sh=j.seq,zy(i),zu(),ky(),al.refresh(j.feedWithSecrets(),j.state.roster),ae.setEnabled("undo",j.undoStack.length>0),ae.setEnabled("redo",j.redoStack.length>0),Ln.refresh(j.state),el.refresh((n=j.scene)==null?void 0:n.fx);for(const o of nl)o.render(((r=(s=j.scene)==null?void 0:s.fx)==null?void 0:r.weather)||null);Ny(),ci.refresh(j.state,Qe,_e.size),Ra=!0}else(ci.id!==Qe||ci.count!==_e.size)&&ci.refresh(j.state,Qe,_e.size);if(!ie){const o=j.scene,l=o?`${o.id}:${o.map}:${o.artW}x${o.artH}`:"";l!==Uo&&(Uo=l,xt.fit(j.state))}xt.frame(j.state,e,{isGm:ie,self:me}),fi.update((a=j.scene)==null?void 0:a.fx),fi.setCurtain(1-(xt.fx.out??0)),Ra&&(Ra=!1,$e.trimBitmaps(j.state))}requestAnimationFrame(Gu);window.__vtt={tokens:()=>{var i;return Object.values(((i=j.scene)==null?void 0:i.tokens)||{})},cam:()=>({x:xt.cam.camera.position.x,y:xt.cam.camera.position.y,viewUnits:xt.cam.viewUnits}),seq:()=>j.seq,dispatch:i=>jn(i),moveTo:(i,t,e)=>Cr(j.state,i,t,e),origins:()=>xt.originViews.size,zoomTo:(i,t,e)=>{xt.cam.viewUnits=e,xt.cam.apply(),xt.cam.camera.position.set(i,-t,10),xt.cam.clamp()},bounds:()=>{const i=j.scene;return i?[i.artW,i.artH,i.grid.unitPx]:null},selected:()=>Qe,selection:()=>[..._e],saveNow:()=>cl(),tableRecord:()=>({id:br,code:Dr,name:Bu()}),resumeTable:async i=>hl(await jh(i)),exportText:async()=>(await xu(Ur(),$e)).text(),importText:async i=>(await Hu(new File([i],"table.vtt"))).name,rolls:()=>j.rolls(),feed:()=>j.feed(),darkAt:(i,t)=>{const e=xt.fx.toScreen(i,t),n=xt.fx.dark,s=n.width/xt.fx.rect.width;return n.getContext("2d").getImageData(Math.round(e.x*s),Math.round(e.y*s),1,1).data[3]/255},fx:()=>{var i;return{scene:((i=j.scene)==null?void 0:i.fx)??null,weather:xt.fx.weather,particles:xt.fx.parts.length,shade:xt.fx.darkShown,out:xt.fx.out,cover:xt.fx.cover.dataset.kind,pings:xt.fx.pings.length,flash:xt.fx.flash.classList.contains("fx-go")?xt.fx.flash.dataset.kind:null,shaking:document.getElementById("canvas").classList.contains("fx-shake")}},playFx:i=>Eu(i),ambience:()=>fi.status(),ambienceEngine:()=>fi,ping:(i,t,e)=>Tu(i,t,e),music:()=>Ie?{sharing:Ie.sharing,source:Ie.source,playing:Ie.playing,hearing:!!Ie.audio,volume:Ie.volume,muted:Ie.muted,error:Ie.error}:null,shareTone:async()=>{const i=new AudioContext,t=i.createOscillator(),e=i.createMediaStreamDestination();t.connect(e),t.start();const n=navigator.mediaDevices.getDisplayMedia;navigator.mediaDevices.getDisplayMedia=async()=>e.stream;try{return await Ie.share()}finally{navigator.mediaDevices.getDisplayMedia=n}},voice:()=>Me?{lastChime:Me.lastChime??null,chimes:Me.chimes,on:Me.on,muted:Me.muted,live:Me.live,peers:[...Me.peers].map(([i,t])=>({id:i,on:t.on,muted:t.muted,playing:!!t.audio,speaking:t.speaking,volume:t.volume})),silenced:[...Me.silenced]}:null,diceShown:()=>xt.dice.current?{id:xt.dice.current.id,dice:xt.dice.current.dice.length,settled:xt.dice.current.settledAt!==null}:null,roll:i=>Ir(i),diceReadout:()=>xt.dice.readout(),openTool:i=>i==="all"?Ln.show("all"):ae.show(i),room:()=>qt?{code:qt.code,role:qt.role,self:me,roster:qt.roster()}:null,scene:()=>{const i=j.scene;return i?{map:i.map,artW:i.artW,grid:{...i.grid}}:null},hasArt:i=>$e.has(i),mapShown:()=>!!xt.map.texture,roster:()=>Object.values(j.state.roster),hovered:()=>xt.hoveredId,drawn:i=>{var e;const t=(e=xt.views.get(i))==null?void 0:e.root.position;return t?[t.x,-t.y]:null},screenOf:(i,t)=>{const e=xt.cam.toNdc(i,-t);return[xt.rect.left+(e.x*.5+.5)*xt.rect.width,xt.rect.top+(1-(e.y*.5+.5))*xt.rect.height]}};function fn(i){return Math.round(i*100)/100}function qy(){var i;return((i=qt==null?void 0:qt.roster().find(t=>t.peerId===me))==null?void 0:i.color)??Tt.tokens.defaultBorder}export{pi as Q,$y as r,Cc as s,Cv as t};
