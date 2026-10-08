(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class df{constructor({hz:t=60,maxFrame:e=.25,maxSteps:n=5}={}){this.hz=t,this.dt=1/t,this.maxFrame=e,this.maxSteps=n,this.acc=0,this.last=0,this.seeded=!1,this.dropped=0}advance(t){if(!this.seeded)return this.seeded=!0,this.last=t,{steps:0,frameDt:0,alpha:0};const e=Math.min(this.maxFrame,(t-this.last)/1e3);this.last=t,this.acc+=e;let n=Math.floor(this.acc/this.dt);return n>this.maxSteps&&(this.dropped+=n-this.maxSteps,n=this.maxSteps,this.acc=n*this.dt),this.acc-=n*this.dt,{steps:n,frameDt:e,alpha:this.acc/this.dt}}reset(){this.acc=0,this.seeded=!1,this.dropped=0}}function ff(i,t,e){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e}class lo{constructor(t=1){this.seed(t)}seed(t){let e=t>>>0;const n=()=>{e=e+2654435769>>>0;let s=e;return s=Math.imul(s^s>>>16,569420461),s=Math.imul(s^s>>>15,1935289751),(s^s>>>15)>>>0};return this.s0=n(),this.s1=n(),this.s2=n(),this.s3=n(),this.s0|this.s1|this.s2|this.s3||(this.s0=1),this.count=0,this}next(){const t=(s,r)=>(s<<r|s>>>32-r)>>>0,e=Math.imul(t(Math.imul(this.s1,5)>>>0,7),9)>>>0,n=this.s1<<9>>>0;return this.s2=(this.s2^this.s0)>>>0,this.s3=(this.s3^this.s1)>>>0,this.s1=(this.s1^this.s2)>>>0,this.s0=(this.s0^this.s3)>>>0,this.s2=(this.s2^n)>>>0,this.s3=t(this.s3,11),this.count++,e}float(){return this.next()/4294967296}range(t,e){return t+this.float()*(e-t)}int(t,e){return t+Math.floor(this.float()*(e-t+1))}chance(t){return this.float()<t}pick(t){return t[Math.floor(this.float()*t.length)]}weighted(t){let e=0;for(const[,s]of t)e+=s;if(e<=0)return null;let n=this.float()*e;for(const[s,r]of t)if(n-=r,n<=0)return s;return t[t.length-1][0]}getState(){return{s0:this.s0,s1:this.s1,s2:this.s2,s3:this.s3,count:this.count}}setState(t){return this.s0=t.s0,this.s1=t.s1,this.s2=t.s2,this.s3=t.s3,this.count=t.count??0,this}}function ac(i,...t){let e=i>>>0;for(const n of t)e=Math.imul(e^n>>>0,625341585)>>>0,e=(e^e>>>13)>>>0;return e>>>0}class pf{constructor(){this.local=[],this.remote=[]}on(t){return this.local.push(t),()=>this.off(this.local,t)}onRemote(t){return this.remote.push(t),()=>this.off(this.remote,t)}off(t,e){const n=t.indexOf(e);n>=0&&t.splice(n,1)}emit(t,e){for(const n of this.local)n(t,e);for(const n of this.remote)n(t,e)}emitLocal(t,e){for(const n of this.local)n(t,e)}emitRemote(t,e){for(const n of this.remote)n(t,e)}clear(){this.local.length=0,this.remote.length=0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="169",mf=0,lc=1,gf=2,lu=1,vf=2,Pn=3,Qn=0,We=1,Dn=2,jn=0,Ki=1,cc=2,hc=3,uc=4,xf=5,mi=100,_f=101,yf=102,Mf=103,Sf=104,bf=200,wf=201,Ef=202,Tf=203,sa=204,ra=205,Af=206,Rf=207,Cf=208,Pf=209,Lf=210,If=211,Df=212,kf=213,Uf=214,oa=0,aa=1,la=2,es=3,ca=4,ha=5,ua=6,da=7,cu=0,Nf=1,Ff=2,Kn=0,Of=1,Bf=2,zf=3,Gf=4,Hf=5,Vf=6,Wf=7,hu=300,ns=301,is=302,fa=303,pa=304,Wr=306,ma=1e3,_i=1001,ga=1002,rn=1003,Xf=1004,Ys=1005,Ce=1006,co=1007,Un=1008,On=1009,uu=1010,du=1011,Ls=1012,gl=1013,Mi=1014,Nn=1015,Ns=1016,vl=1017,xl=1018,ss=1020,fu=35902,pu=1021,mu=1022,dn=1023,gu=1024,vu=1025,Zi=1026,rs=1027,xu=1028,_l=1029,_u=1030,yl=1031,Ml=1033,xr=33776,_r=33777,yr=33778,Mr=33779,va=35840,xa=35841,_a=35842,ya=35843,Ma=36196,Sa=37492,ba=37496,wa=37808,Ea=37809,Ta=37810,Aa=37811,Ra=37812,Ca=37813,Pa=37814,La=37815,Ia=37816,Da=37817,ka=37818,Ua=37819,Na=37820,Fa=37821,Sr=36492,Oa=36494,Ba=36495,yu=36283,za=36284,Ga=36285,Ha=36286,$f=3200,qf=3201,Mu=0,Yf=1,Yn="",Fe="srgb",ii="srgb-linear",Sl="display-p3",Xr="display-p3-linear",Rr="linear",se="srgb",Cr="rec709",Pr="p3",Ri=7680,dc=519,jf=512,Kf=513,Zf=514,Su=515,Jf=516,Qf=517,tp=518,ep=519,fc=35044,pc="300 es",Fn=2e3,Lr=2001;class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ho=Math.PI/180,Va=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function np(i,t){return(i%t+t)%t}function uo(i,t,e){return(1-e)*i+e*t}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],y=s[1],_=s[4],S=s[7],C=s[2],T=s[5],A=s[8];return r[0]=o*v+a*y+l*C,r[3]=o*p+a*_+l*T,r[6]=o*m+a*S+l*A,r[1]=c*v+h*y+d*C,r[4]=c*p+h*_+d*T,r[7]=c*m+h*S+d*A,r[2]=u*v+f*y+g*C,r[5]=u*p+f*_+g*T,r[8]=u*m+f*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fo.makeScale(t,e)),this}rotate(t){return this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Gt;function bu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){const i=Ir("canvas");return i.style.display="block",i}const mc={};function br(i){i in mc||(mc[i]=!0,console.warn(i))}function sp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function op(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const gc=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vc=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[ii]:{transfer:Rr,primaries:Cr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:se,primaries:Cr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xr]:{transfer:Rr,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(vc),fromReference:i=>i.applyMatrix3(gc)},[Sl]:{transfer:se,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(vc),fromReference:i=>i.applyMatrix3(gc).convertLinearToSRGB()}},ap=new Set([ii,Xr]),Zt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ap.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=gs[t].toReference,s=gs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return gs[i].primaries},getTransfer:function(i){return i===Yn?Rr:gs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(gs[t].luminanceCoefficients)}};function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class lp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Ir("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cp=0;class wu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mo(s[o].image)):r.push(mo(s[o]))}else r=mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;class Te extends cs{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=_i,s=_i,r=Ce,o=Un,a=dn,l=On,c=Te.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Fs(),this.name="",this.source=new wu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ma:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ma:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=hu;Te.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,S=(f+1)/2,C=(m+1)/2,T=(h+u)/4,A=(d+v)/4,P=(g+p)/4;return _>S&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class up extends cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends up{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eu extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dp extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let p=1-a;const m=l*u+c*f+h*g+d*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,m*y);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const S=a*y;if(l=l*p+u*S,c=c*p+f*S,h=h*p+g*S,d=d*p+v*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new N,xc=new Ti;class Os{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),Ks.subVectors(this.max,vs),Pi.subVectors(t.a,vs),Li.subVectors(t.b,vs),Ii.subVectors(t.c,vs),Gn.subVectors(Li,Pi),Hn.subVectors(Ii,Li),ri.subVectors(Pi,Ii);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!vo(e,Pi,Li,Ii,Ks)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Pi,Li,Ii,Ks))?!1:(Zs.crossVectors(Gn,Hn),e=[Zs.x,Zs.y,Zs.z],vo(e,Pi,Li,Ii,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new N,new N,new N,new N,new N,new N,new N,new N],an=new N,js=new Os,Pi=new N,Li=new N,Ii=new N,Gn=new N,Hn=new N,ri=new N,vs=new N,Ks=new N,Zs=new N,oi=new N;function vo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fp=new Os,xs=new N,xo=new N;class bl{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);const e=xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(xo)),this.expandByPoint(xs.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new N,_o=new N,Js=new N,Vn=new N,yo=new N,Qs=new N,Mo=new N;class pp{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_o.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(_o);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Js),a=Vn.dot(this.direction),l=-Vn.dot(Js),c=Vn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_o).addScaledVector(Js,u),f}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){yo.subVectors(e,t),Qs.subVectors(n,t),Mo.crossVectors(yo,Qs);let o=this.direction.dot(Mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(Qs.crossVectors(Vn,Qs));if(l<0)return null;const c=a*this.direction.dot(yo.cross(Vn));if(c<0||l+c>o)return null;const h=-a*Vn.dot(Mo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,gp)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Wn.crossVectors(n,je),Wn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Wn.crossVectors(n,je)),Wn.normalize(),tr.crossVectors(je,Wn),s[0]=Wn.x,s[4]=tr.x,s[8]=je.x,s[1]=Wn.y,s[5]=tr.y,s[9]=je.y,s[2]=Wn.z,s[6]=tr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],_=n[7],S=n[11],C=n[15],T=s[0],A=s[4],P=s[8],D=s[12],x=s[1],E=s[5],O=s[9],H=s[13],q=s[2],nt=s[6],$=s[10],W=s[14],k=s[3],Z=s[7],et=s[11],tt=s[15];return r[0]=o*T+a*x+l*q+c*k,r[4]=o*A+a*E+l*nt+c*Z,r[8]=o*P+a*O+l*$+c*et,r[12]=o*D+a*H+l*W+c*tt,r[1]=h*T+d*x+u*q+f*k,r[5]=h*A+d*E+u*nt+f*Z,r[9]=h*P+d*O+u*$+f*et,r[13]=h*D+d*H+u*W+f*tt,r[2]=g*T+v*x+p*q+m*k,r[6]=g*A+v*E+p*nt+m*Z,r[10]=g*P+v*O+p*$+m*et,r[14]=g*D+v*H+p*W+m*tt,r[3]=y*T+_*x+S*q+C*k,r[7]=y*A+_*E+S*nt+C*Z,r[11]=y*P+_*O+S*$+C*et,r[15]=y*D+_*H+S*W+C*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+v*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+p*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=d*p*c-v*u*c+v*l*f-a*p*f-d*l*m+a*u*m,_=g*u*c-h*p*c-g*l*f+o*p*f+h*l*m-o*u*m,S=h*v*c-g*d*c+g*a*f-o*v*f-h*a*m+o*d*m,C=g*d*l-h*v*l-g*a*u+o*v*u+h*a*p-o*d*p,T=e*y+n*_+s*S+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(v*u*r-d*p*r-v*s*f+n*p*f+d*s*m-n*u*m)*A,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*A,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*A,t[4]=_*A,t[5]=(h*p*r-g*u*r+g*s*f-e*p*f-h*s*m+e*u*m)*A,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*A,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*A,t[8]=S*A,t[9]=(g*d*r-h*v*r-g*n*f+e*v*f+h*n*m-e*d*m)*A,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*m+e*a*m)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*A,t[12]=C*A,t[13]=(h*v*s-g*d*s+g*n*u-e*v*u-h*n*p+e*d*p)*A,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*p-e*a*p)*A,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,p=o*d,m=a*d,y=l*c,_=l*h,S=l*d,C=n.x,T=n.y,A=n.z;return s[0]=(1-(v+m))*C,s[1]=(f+S)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(u+m))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(p-y)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const o=Di.set(s[4],s[5],s[6]).length(),a=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,h=1/o,d=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Fn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(a===Fn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Fn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,f=(n+s)*h;let g,v;if(a===Fn)g=(o+r)*d,v=-2*d;else if(a===Lr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new N,ln=new de,mp=new N(0,0,0),gp=new N(1,1,1),Wn=new N,tr=new N,je=new N,_c=new de,yc=new Ti;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vp=0;const Mc=new N,ki=new Ti,Tn=new de,er=new N,_s=new N,xp=new N,_p=new Ti,Sc=new N(1,0,0),bc=new N(0,1,0),wc=new N(0,0,1),Ec={type:"added"},yp={type:"removed"},Ui={type:"childadded",child:null},So={type:"childremoved",child:null};class Pe extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new N,e=new yn,n=new Ti,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Gt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(_s,er,this.up):Tn.lookAt(er,_s,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Tn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,_p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new N(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new N,An=new N,bo=new N,Rn=new N,Ni=new N,Fi=new N,Tc=new N,wo=new N,Eo=new N,To=new N,Ao=new ue,Ro=new ue,Co=new ue;class un{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),An.subVectors(n,e),bo.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(An),l=cn.dot(bo),c=An.dot(An),h=An.dot(bo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ao.setScalar(0),Ro.setScalar(0),Co.setScalar(0),Ao.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ao,r.x),o.addScaledVector(Ro,r.y),o.addScaledVector(Co,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),An.subVectors(t,e),cn.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),cn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,n),Fi.subVectors(r,n),wo.subVectors(t,n);const l=Ni.dot(wo),c=Fi.dot(wo);if(l<=0&&c<=0)return e.copy(n);Eo.subVectors(t,s);const h=Ni.dot(Eo),d=Fi.dot(Eo);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ni,o);To.subVectors(t,r);const f=Ni.dot(To),g=Fi.dot(To);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Fi,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Tc.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Tc,a);const m=1/(p+v+u);return o=v*m,a=u*m,e.copy(n).addScaledVector(Ni,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=np(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Po(o,r,t+1/3),this.g=Po(o,r,t),this.b=Po(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Zt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ve(Ie.r*255,0,255))*65536+Math.round(Ve(Ie.g*255,0,255))*256+Math.round(Ve(Ie.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Fe){Zt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(nr);const n=uo(Xn.h,nr.h,e),s=uo(Xn.s,nr.s,e),r=uo(Xn.l,nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Vt;Vt.NAMES=Au;let Mp=0;class Bs extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=Ki,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bi extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new N,ir=new Bt;class _n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}}class Ru extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cu extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xe extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sp=0;const en=new de,Lo=new Pe,Oi=new N,Ke=new Os,ys=new Os,Se=new N;class Sn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?Cu:Ru)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ke.min,ys.min),Ke.expandByPoint(Se),Se.addVectors(Ke.max,ys.max),Ke.expandByPoint(Se)):(Ke.expandByPoint(ys.min),Ke.expandByPoint(ys.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(t,c),Se.add(Oi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new N,l[P]=new N;const c=new N,h=new N,d=new N,u=new Bt,f=new Bt,g=new Bt,v=new N,p=new N;function m(P,D,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(E),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),a[P].add(v),a[D].add(v),a[x].add(v),l[P].add(p),l[D].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,D=y.length;P<D;++P){const x=y[P],E=x.start,O=x.count;for(let H=E,q=E+O;H<q;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const _=new N,S=new N,C=new N,T=new N;function A(P){C.fromBufferAttribute(s,P),T.copy(C);const D=a[P];_.copy(D),_.sub(C.multiplyScalar(C.dot(D))).normalize(),S.crossVectors(T,D);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,E)}for(let P=0,D=y.length;P<D;++P){const x=y[P],E=x.start,O=x.count;for(let H=E,q=E+O;H<q;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new _n(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new de,ai=new pp,sr=new bl,Rc=new N,rr=new N,or=new N,ar=new N,Io=new N,lr=new N,Cc=new N,cr=new N;class Ee extends Pe{constructor(t=new Sn,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Io.fromBufferAttribute(d,t),o?lr.addScaledVector(Io,h):lr.addScaledVector(Io.sub(e),h))}e.add(lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(sr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(sr,Rc)===null||ai.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,C=_;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);s=hr(this,m,t,n,c,h,d,T,A,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),S=a.getX(p+2);s=hr(this,o,t,n,c,h,d,y,_,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,C=_;S<C;S+=3){const T=S,A=S+1,P=S+2;s=hr(this,m,t,n,c,h,d,T,A,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,S=p+2;s=hr(this,o,t,n,c,h,d,y,_,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function bp(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qn,a),l===null)return null;cr.copy(a),cr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:i}}function hr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,rr),i.getVertexPosition(l,or),i.getVertexPosition(c,ar);const h=bp(i,t,e,n,rr,or,ar,Cc);if(h){const d=new N;un.getBarycoord(Cc,rr,or,ar,d),s&&(h.uv=un.getInterpolatedAttribute(s,a,l,c,d,new Bt)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,l,c,d,new Bt)),o&&(h.normal=un.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};un.getNormal(rr,or,ar,u.normal),h.face=u,h.barycoord=d}return h}class hs extends Sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2));function g(v,p,m,y,_,S,C,T,A,P,D){const x=S/A,E=C/P,O=S/2,H=C/2,q=T/2,nt=A+1,$=P+1;let W=0,k=0;const Z=new N;for(let et=0;et<$;et++){const tt=et*E-H;for(let mt=0;mt<nt;mt++){const Mt=mt*x-O;Z[v]=Mt*y,Z[p]=tt*_,Z[m]=q,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[p]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(mt/A),d.push(1-et/P),W+=1}}for(let et=0;et<P;et++)for(let tt=0;tt<A;tt++){const mt=u+tt+nt*et,Mt=u+tt+nt*(et+1),X=u+(tt+1)+nt*(et+1),J=u+(tt+1)+nt*et;l.push(mt,Mt,J),l.push(Mt,X,J),k+=6}a.addGroup(f,k,D),f+=k,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function wp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ep={clone:os,merge:Ue};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lu extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new N,Pc=new Bt,Lc=new Bt;class sn extends Lu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Pc,Lc),e.subVectors(Lc,Pc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ho*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class Rp extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Bi,zi,t,e);s.layers=this.layers,this.add(s);const r=new sn(Bi,zi,t,e);r.layers=this.layers,this.add(r);const o=new sn(Bi,zi,t,e);o.layers=this.layers,this.add(o);const a=new sn(Bi,zi,t,e);a.layers=this.layers,this.add(a);const l=new sn(Bi,zi,t,e);l.layers=this.layers,this.add(l);const c=new sn(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Iu extends Te{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ns,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cp extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Iu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hs(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:jn});r.uniforms.tEquirect.value=e;const o=new Ee(s,r),a=e.minFilter;return e.minFilter===Un&&(e.minFilter=Ce),new Rp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Do=new N,Pp=new N,Lp=new Gt;class fi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Do.subVectors(n,e).cross(Pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Do),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lp.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new bl,ur=new N;class wl{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],y=s[13],_=s[14],S=s[15];if(n[0].setComponents(l-r,u-c,p-f,S-m).normalize(),n[1].setComponents(l+r,u+c,p+f,S+m).normalize(),n[2].setComponents(l+o,u+h,p+g,S+y).normalize(),n[3].setComponents(l-o,u-h,p-g,S-y).normalize(),n[4].setComponents(l-a,u-d,p-v,S-_).normalize(),e===Fn)n[5].setComponents(l+a,u+d,p+v,S+_).normalize();else if(e===Lr)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ur.x=s.normal.x>0?t.max.x:t.min.x,ur.y=s.normal.y>0?t.max.y:t.min.y,ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ip(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Mn extends Sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*u-o;for(let _=0;_<c;_++){const S=_*d-r;g.push(S,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const _=y+c*m,S=y+c*(m+1),C=y+1+c*(m+1),T=y+1+c*m;f.push(_,S,T),f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
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
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$p=`#ifdef USE_IRIDESCENCE
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
#endif`,qp=`#ifdef USE_BUMPMAP
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`
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
}`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
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
#endif`,Lm=`struct PhysicalMaterial {
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
}`,Im=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,Gg=`#define DISTANCE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Kg=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,o0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Dp,alphahash_pars_fragment:kp,alphamap_fragment:Up,alphamap_pars_fragment:Np,alphatest_fragment:Fp,alphatest_pars_fragment:Op,aomap_fragment:Bp,aomap_pars_fragment:zp,batching_pars_vertex:Gp,batching_vertex:Hp,begin_vertex:Vp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:$p,bumpmap_pars_fragment:qp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Zp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Em,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:vm,fog_fragment:xm,fog_pars_fragment:_m,gradientmap_pars_fragment:ym,lightmap_pars_fragment:Mm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:bm,lights_pars_begin:wm,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Im,lights_fragment_maps:Dm,lights_fragment_end:km,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:Gm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:$m,morphnormal_vertex:qm,morphtarget_pars_vertex:Ym,morphtarget_vertex:jm,normal_fragment_begin:Km,normal_fragment_maps:Zm,normal_pars_fragment:Jm,normal_pars_vertex:Qm,normal_vertex:tg,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:dg,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:vg,skinbase_vertex:xg,skinning_pars_vertex:_g,skinning_vertex:yg,skinnormal_vertex:Mg,specularmap_fragment:Sg,specularmap_pars_fragment:bg,tonemapping_fragment:wg,tonemapping_pars_fragment:Eg,transmission_fragment:Tg,transmission_pars_fragment:Ag,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Lg,background_vert:Ig,background_frag:Dg,backgroundCube_vert:kg,backgroundCube_frag:Ug,cube_vert:Ng,cube_frag:Fg,depth_vert:Og,depth_frag:Bg,distanceRGBA_vert:zg,distanceRGBA_frag:Gg,equirect_vert:Hg,equirect_frag:Vg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:$g,meshbasic_frag:qg,meshlambert_vert:Yg,meshlambert_frag:jg,meshmatcap_vert:Kg,meshmatcap_frag:Zg,meshnormal_vert:Jg,meshnormal_frag:Qg,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:o0,points_frag:a0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},ut={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},gn={basic:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ue([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ue([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ue([ut.points,ut.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ue([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ue([ut.common,ut.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ue([ut.sprite,ut.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ue([ut.common,ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ue([ut.lights,ut.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};gn.physical={uniforms:Ue([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const dr={r:0,b:0,g:0},ci=new yn,d0=new de;function f0(i,t,e,n,s,r,o){const a=new Vt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const S=g(y);S===null?m(a,l):S&&S.isColor&&(m(S,1),_=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===Wr)?(h===void 0&&(h=new Ee(new hs(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:os(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(_.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(ci)),h.material.toneMapped=Zt.getTransfer(S.colorSpace)!==se,(d!==S||u!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ee(new Mn(2,2),new fn({name:"BackgroundMaterial",uniforms:os(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(S.colorSpace)!==se,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(dr,Pu(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:p}}function p0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(x,E,O,H,q){let nt=!1;const $=d(H,O,E);r!==$&&(r=$,c(r.object)),nt=f(x,H,O,q),nt&&g(x,H,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,S(x,E,O,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,E,O){const H=O.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let nt=q[E.id];nt===void 0&&(nt={},q[E.id]=nt);let $=nt[H];return $===void 0&&($=u(l()),nt[H]=$),$}function u(x){const E=[],O=[],H=[];for(let q=0;q<e;q++)E[q]=0,O[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:H,object:x,attributes:{},index:null}}function f(x,E,O,H){const q=r.attributes,nt=E.attributes;let $=0;const W=O.getAttributes();for(const k in W)if(W[k].location>=0){const et=q[k];let tt=nt[k];if(tt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),et===void 0||et.attribute!==tt||tt&&et.data!==tt.data)return!0;$++}return r.attributesNum!==$||r.index!==H}function g(x,E,O,H){const q={},nt=E.attributes;let $=0;const W=O.getAttributes();for(const k in W)if(W[k].location>=0){let et=nt[k];et===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(et=x.instanceColor));const tt={};tt.attribute=et,et&&et.data&&(tt.data=et.data),q[k]=tt,$++}r.attributes=q,r.attributesNum=$,r.index=H}function v(){const x=r.newAttributes;for(let E=0,O=x.length;E<O;E++)x[E]=0}function p(x){m(x,0)}function m(x,E){const O=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;O[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),q[x]!==E&&(i.vertexAttribDivisor(x,E),q[x]=E)}function y(){const x=r.newAttributes,E=r.enabledAttributes;for(let O=0,H=E.length;O<H;O++)E[O]!==x[O]&&(i.disableVertexAttribArray(O),E[O]=0)}function _(x,E,O,H,q,nt,$){$===!0?i.vertexAttribIPointer(x,E,O,q,nt):i.vertexAttribPointer(x,E,O,H,q,nt)}function S(x,E,O,H){v();const q=H.attributes,nt=O.getAttributes(),$=E.defaultAttributeValues;for(const W in nt){const k=nt[W];if(k.location>=0){let Z=q[W];if(Z===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const et=Z.normalized,tt=Z.itemSize,mt=t.get(Z);if(mt===void 0)continue;const Mt=mt.buffer,X=mt.type,J=mt.bytesPerElement,ht=X===i.INT||X===i.UNSIGNED_INT||Z.gpuType===gl;if(Z.isInterleavedBufferAttribute){const ot=Z.data,at=ot.stride,ct=Z.offset;if(ot.isInstancedInterleavedBuffer){for(let bt=0;bt<k.locationSize;bt++)m(k.location+bt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let bt=0;bt<k.locationSize;bt++)p(k.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let bt=0;bt<k.locationSize;bt++)_(k.location+bt,tt/k.locationSize,X,et,at*J,(ct+tt/k.locationSize*bt)*J,ht)}else{if(Z.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)m(k.location+ot,Z.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<k.locationSize;ot++)p(k.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let ot=0;ot<k.locationSize;ot++)_(k.location+ot,tt/k.locationSize,X,et,tt*J,tt/k.locationSize*ot*J,ht)}}else if($!==void 0){const et=$[W];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(k.location,et);break;case 3:i.vertexAttrib3fv(k.location,et);break;case 4:i.vertexAttrib4fv(k.location,et);break;default:i.vertexAttrib1fv(k.location,et)}}}}y()}function C(){P();for(const x in n){const E=n[x];for(const O in E){const H=E[O];for(const q in H)h(H[q].object),delete H[q];delete E[O]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const E=n[x.id];for(const O in E){const H=E[O];for(const q in H)h(H[q].object),delete H[q];delete E[O]}delete n[x.id]}function A(x){for(const E in n){const O=n[E];if(O[x.id]===void 0)continue;const H=O[x.id];for(const q in H)h(H[q].object),delete H[q];delete O[x.id]}}function P(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function m0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<u.length;v++)e.update(g,n,u[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==On&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Nn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:C,maxSamples:T}}function v0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new fi,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,_=y*4;let S=m.clippingState||null;l.value=S,S=h(g,u,_,f);for(let C=0;C!==_;++C)S[C]=e[C];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,S=f;_!==v;++_,S+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function x0(i){let t=new WeakMap;function e(o,a){return a===fa?o.mapping=ns:a===pa&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===pa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cp(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class El extends Lu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,Ic=[.125,.215,.35,.446,.526,.582],gi=20,ko=new El,Dc=new Vt;let Uo=null,No=0,Fo=0,Oo=!1;const pi=(1+Math.sqrt(5))/2,Gi=1/pi,kc=[new N(-pi,Gi,0),new N(pi,Gi,0),new N(-Gi,0,pi),new N(Gi,0,pi),new N(0,pi,-Gi),new N(0,pi,Gi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,No,Fo),this._renderer.xr.enabled=Oo,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Ns,format:dn,colorSpace:ii,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(r)),this._blurMaterial=y0(r,t,e)}return s}_compileMaterial(t){const e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,ko)}_sceneToCubeUV(t,e,n,s){const a=new sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Dc),h.toneMapping=Kn,h.autoClear=!1;const f=new bi({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Ee(new hs,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(Dc),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;fr(s,y*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ns||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ko)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kc[(s-r-1)%kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ee(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):gi;p>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const m=[];let y=0;for(let A=0;A<gi;++A){const P=A/v,D=Math.exp(-P*P/2);m.push(D),A===0?y+=D:A<p&&(y+=2*D)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const S=this._sizeLods[s],C=3*S*(s>_-qi?s-_+qi:0),T=4*(this._cubeSize-S);fr(e,C,T,3*S,2*S),l.setRenderTarget(e),l.render(d,ko)}}function _0(i){const t=[],e=[],n=[];let s=i;const r=i-qi+1+Ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-qi?l=Ic[o-i+qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),_=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,P=T>2?0:-1,D=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(D,v*g*T),_.set(u,p*g*T);const x=[T,T,T,T,T,T];S.set(x,m*g*T)}const C=new Sn;C.setAttribute("position",new _n(y,v)),C.setAttribute("uv",new _n(_,p)),C.setAttribute("faceIndex",new _n(S,m)),t.push(C),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function y0(i,t,e){const n=new Float32Array(gi),s=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Fc(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Oc(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function M0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fa||l===pa,h=l===ns||l===is;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Uc(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Uc(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function S0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function b0(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,S=y.length;_<S;_+=3){const C=y[_+0],T=y[_+1],A=y[_+2];u.push(C,T,T,A,A,C)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const C=_+0,T=_+1,A=_+2;u.push(C,T,T,A,A,C)}}else return;const p=new(bu(u)?Cu:Ru)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function w0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(u,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<v.length;y++)e.update(m,n,v[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function E0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function T0(i,t,e){const n=new WeakMap,s=new ue;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let D=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let S=a.attributes.position.count*_,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*C*4*d),A=new Eu(T,S,C,d);A.type=Nn,A.needsUpdate=!0;const P=_*4;for(let x=0;x<d;x++){const E=p[x],O=m[x],H=y[x],q=S*C*4*x;for(let nt=0;nt<E.count;nt++){const $=nt*P;f===!0&&(s.fromBufferAttribute(E,nt),T[q+$+0]=s.x,T[q+$+1]=s.y,T[q+$+2]=s.z,T[q+$+3]=0),g===!0&&(s.fromBufferAttribute(O,nt),T[q+$+4]=s.x,T[q+$+5]=s.y,T[q+$+6]=s.z,T[q+$+7]=0),v===!0&&(s.fromBufferAttribute(H,nt),T[q+$+8]=s.x,T[q+$+9]=s.y,T[q+$+10]=s.z,T[q+$+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Bt(S,C)},n.set(a,u),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function A0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ku extends Te{constructor(t,e,n,s,r,o,a,l,c,h=Zi){if(h!==Zi&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=Mi),n===void 0&&h===rs&&(n=ss),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uu=new Te,Bc=new ku(1,1),Nu=new Eu,Fu=new dp,Ou=new Iu,zc=[],Gc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $r(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Wc.set(n),i.uniformMatrix2fv(this.addr,!1,Wc),Me(e,n)}}function D0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),Me(e,n)}}function k0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),Me(e,n)}}function U0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=Su,r=Bc):r=Uu,e.setTexture2D(t||r,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fu,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ou,s)}function $0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function q0(i){switch(i){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return k0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return G0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return $0}}function Y0(i,t){i.uniform1fv(this.addr,t)}function j0(i,t){const e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){const e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function Z0(i,t){const e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function J0(i,t){const e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q0(i,t){const e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tv(i,t){const e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ev(i,t){i.uniform1iv(this.addr,t)}function nv(i,t){i.uniform2iv(this.addr,t)}function iv(i,t){i.uniform3iv(this.addr,t)}function sv(i,t){i.uniform4iv(this.addr,t)}function rv(i,t){i.uniform1uiv(this.addr,t)}function ov(i,t){i.uniform2uiv(this.addr,t)}function av(i,t){i.uniform3uiv(this.addr,t)}function lv(i,t){i.uniform4uiv(this.addr,t)}function cv(i,t,e){const n=this.cache,s=t.length,r=$r(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Uu,r[o])}function hv(i,t,e){const n=this.cache,s=t.length,r=$r(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fu,r[o])}function uv(i,t,e){const n=this.cache,s=t.length,r=$r(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ou,r[o])}function dv(i,t,e){const n=this.cache,s=t.length,r=$r(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nu,r[o])}function fv(i){switch(i){case 5126:return Y0;case 35664:return j0;case 35665:return K0;case 35666:return Z0;case 35674:return J0;case 35675:return Q0;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}}class mv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fv(e.type)}}class gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Xc(i,t){i.seq.push(t),i.map[t.id]=t}function vv(i,t,e){const n=i.name,s=n.length;for(Bo.lastIndex=0;;){const r=Bo.exec(n),o=Bo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xc(e,c===void 0?new pv(a,i,t):new mv(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new gv(a),Xc(e,d)),e=d}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);vv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function $c(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xv=37297;let _v=0;function yv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Mv(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===Pr&&e===Cr?n="LinearDisplayP3ToLinearSRGB":t===Cr&&e===Pr&&(n="LinearSRGBToLinearDisplayP3"),i){case ii:case Xr:return[n,"LinearTransferOETF"];case Fe:case Sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yv(i.getShaderSource(t),o)}else return s}function Sv(i,t){const e=Mv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function bv(i,t){let e;switch(t){case Of:e="Linear";break;case Bf:e="Reinhard";break;case zf:e="Cineon";break;case Gf:e="ACESFilmic";break;case Vf:e="AgX";break;case Wf:e="Neutral";break;case Hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pr=new N;function wv(){Zt.getLuminanceCoefficients(pr);const i=pr.x.toFixed(4),t=pr.y.toFixed(4),e=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function Tv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Av(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ws(i){return i!==""}function Yc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(i){return i.replace(Rv,Pv)}const Cv=new Map;function Pv(i,t){let e=zt[t];if(e===void 0){const n=Cv.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(Lv,Iv)}function Iv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function kv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function Nv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cu:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case Ff:t="ENVMAP_BLENDING_ADD";break}return t}function Fv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ov(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Dv(e),c=kv(e),h=Uv(e),d=Nv(e),u=Fv(e),f=Ev(e),g=Tv(r),v=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`)):(p=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Sv("linearToOutputTexel",e.outputColorSpace),wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),o=Wa(o),o=Yc(o,e),o=jc(o,e),a=Wa(a),a=Yc(a,e),a=jc(a,e),o=Kc(o),a=Kc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+p+o,S=y+m+a,C=$c(s,s.VERTEX_SHADER,_),T=$c(s,s.FRAGMENT_SHADER,S);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(E){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(C).trim(),q=s.getShaderInfoLog(T).trim();let nt=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,T);else{const W=qc(s,C,"vertex"),k=qc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+W+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||q==="")&&($=!1);$&&(E.diagnostics={runnable:nt,programLog:O,vertexShader:{log:H,prefix:p},fragmentShader:{log:q,prefix:m}})}s.deleteShader(C),s.deleteShader(T),P=new wr(s,v),D=Av(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let D;this.getAttributes=function(){return D===void 0&&A(this),D};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,xv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_v++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Bv=0;class zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gv(t),e.set(t,n)),n}}class Gv{constructor(t){this.id=Bv++,this.code=t,this.usedTimes=0}}function Hv(i,t,e,n,s,r,o){const a=new Tu,l=new zv,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,O,H,q){const nt=H.fog,$=q.geometry,W=x.isMeshStandardMaterial?H.environment:null,k=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),Z=k&&k.mapping===Wr?k.image.height:null,et=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const tt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,mt=tt!==void 0?tt.length:0;let Mt=0;$.morphAttributes.position!==void 0&&(Mt=1),$.morphAttributes.normal!==void 0&&(Mt=2),$.morphAttributes.color!==void 0&&(Mt=3);let X,J,ht,ot;if(et){const Ge=gn[et];X=Ge.vertexShader,J=Ge.fragmentShader}else X=x.vertexShader,J=x.fragmentShader,l.update(x),ht=l.getVertexShaderID(x),ot=l.getFragmentShaderID(x);const at=i.getRenderTarget(),ct=q.isInstancedMesh===!0,bt=q.isBatchedMesh===!0,Ct=!!x.map,Ut=!!x.matcap,L=!!k,ae=!!x.aoMap,Ft=!!x.lightMap,Ht=!!x.bumpMap,Rt=!!x.normalMap,ne=!!x.displacementMap,Nt=!!x.emissiveMap,R=!!x.metalnessMap,b=!!x.roughnessMap,B=x.anisotropy>0,K=x.clearcoat>0,it=x.dispersion>0,j=x.iridescence>0,Et=x.sheen>0,dt=x.transmission>0,xt=B&&!!x.anisotropyMap,qt=K&&!!x.clearcoatMap,st=K&&!!x.clearcoatNormalMap,_t=K&&!!x.clearcoatRoughnessMap,Dt=j&&!!x.iridescenceMap,kt=j&&!!x.iridescenceThicknessMap,yt=Et&&!!x.sheenColorMap,Xt=Et&&!!x.sheenRoughnessMap,Ot=!!x.specularMap,te=!!x.specularColorMap,I=!!x.specularIntensityMap,gt=dt&&!!x.transmissionMap,Y=dt&&!!x.thicknessMap,Q=!!x.gradientMap,ft=!!x.alphaMap,vt=x.alphaTest>0,$t=!!x.alphaHash,me=!!x.extensions;let ze=Kn;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ze=i.toneMapping);const Yt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:J,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:ot,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:bt,batchingColor:bt&&q._colorsTexture!==null,instancing:ct,instancingColor:ct&&q.instanceColor!==null,instancingMorph:ct&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ii,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:Ut,envMap:L,envMapMode:L&&k.mapping,envMapCubeUVHeight:Z,aoMap:ae,lightMap:Ft,bumpMap:Ht,normalMap:Rt,displacementMap:f&&ne,emissiveMap:Nt,normalMapObjectSpace:Rt&&x.normalMapType===Yf,normalMapTangentSpace:Rt&&x.normalMapType===Mu,metalnessMap:R,roughnessMap:b,anisotropy:B,anisotropyMap:xt,clearcoat:K,clearcoatMap:qt,clearcoatNormalMap:st,clearcoatRoughnessMap:_t,dispersion:it,iridescence:j,iridescenceMap:Dt,iridescenceThicknessMap:kt,sheen:Et,sheenColorMap:yt,sheenRoughnessMap:Xt,specularMap:Ot,specularColorMap:te,specularIntensityMap:I,transmission:dt,transmissionMap:gt,thicknessMap:Y,gradientMap:Q,opaque:x.transparent===!1&&x.blending===Ki&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:vt,alphaHash:$t,combine:x.combine,mapUv:Ct&&p(x.map.channel),aoMapUv:ae&&p(x.aoMap.channel),lightMapUv:Ft&&p(x.lightMap.channel),bumpMapUv:Ht&&p(x.bumpMap.channel),normalMapUv:Rt&&p(x.normalMap.channel),displacementMapUv:ne&&p(x.displacementMap.channel),emissiveMapUv:Nt&&p(x.emissiveMap.channel),metalnessMapUv:R&&p(x.metalnessMap.channel),roughnessMapUv:b&&p(x.roughnessMap.channel),anisotropyMapUv:xt&&p(x.anisotropyMap.channel),clearcoatMapUv:qt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ot&&p(x.specularMap.channel),specularColorMapUv:te&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:gt&&p(x.transmissionMap.channel),thicknessMapUv:Y&&p(x.thicknessMap.channel),alphaMapUv:ft&&p(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Rt||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!$.attributes.uv&&(Ct||ft),fog:!!nt,useFog:x.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Mt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function y(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)E.push(O),E.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(_(E,x),S(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const E=v[x.type];let O;if(E){const H=gn[E];O=Ep.clone(H.uniforms)}else O=x.uniforms;return O}function T(x,E){let O;for(let H=0,q=h.length;H<q;H++){const nt=h[H];if(nt.cacheKey===E){O=nt,++O.usedTimes;break}}return O===void 0&&(O=new Ov(i,E,x,r),h.push(O)),O}function A(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function P(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:D}}function Vv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,v,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),t++,m}function a(d,u,f,g,v,p){const m=o(d,u,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(d,u,f,g,v,p){const m=o(d,u,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Wv),n.length>1&&n.sort(u||Jc),s.length>1&&s.sort(u||Jc)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Xv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qc,i.set(n,[o])):s>=r.length?(o=new Qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $v(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Vt};break;case"SpotLight":e={position:new N,direction:new N,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function qv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yv=0;function jv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kv(i){const t=new $v,e=qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new de,o=new de;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,_=0,S=0,C=0,T=0,A=0;c.sort(jv);for(let D=0,x=c.length;D<x;D++){const E=c[D],O=E.color,H=E.intensity,q=E.distance,nt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=O.r*H,d+=O.g*H,u+=O.b*H;else if(E.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(E.sh.coefficients[$],H);A++}else if(E.isDirectionalLight){const $=t.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const W=E.shadow,k=e.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=nt,n.directionalShadowMatrix[f]=E.shadow.matrix,y++}n.directional[f]=$,f++}else if(E.isSpotLight){const $=t.get(E);$.position.setFromMatrixPosition(E.matrixWorld),$.color.copy(O).multiplyScalar(H),$.distance=q,$.coneCos=Math.cos(E.angle),$.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),$.decay=E.decay,n.spot[v]=$;const W=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,W.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[v]=W.matrix,E.castShadow){const k=e.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=nt,S++}v++}else if(E.isRectAreaLight){const $=t.get(E);$.color.copy(O).multiplyScalar(H),$.halfWidth.set(E.width*.5,0,0),$.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=$,p++}else if(E.isPointLight){const $=t.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),$.distance=E.distance,$.decay=E.decay,E.castShadow){const W=E.shadow,k=e.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=E.shadow.matrix,_++}n.point[g]=$,g++}else if(E.isHemisphereLight){const $=t.get(E);$.skyColor.copy(E.color).multiplyScalar(H),$.groundColor.copy(E.groundColor).multiplyScalar(H),n.hemi[m]=$,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=S+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=A,n.version=Yv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const _=c[m];if(_.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(_.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function th(i){const t=new Kv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new th(i),t.set(s,[a])):r>=o.length?(a=new th(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Jv extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qv extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`;function nx(i,t,e){let n=new wl;const s=new Bt,r=new Bt,o=new ue,a=new Jv({depthPacking:qf}),l=new Qv,c={},h=e.maxTextureSize,d={[Qn]:We,[We]:Qn,[Dn]:Dn},u=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:tx,fragmentShader:ex}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Sn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ee(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let m=this.type;this.render=function(T,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const D=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),O=i.state;O.setBlending(jn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=m!==Pn&&this.type===Pn,q=m===Pn&&this.type!==Pn;for(let nt=0,$=T.length;nt<$;nt++){const W=T[nt],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Z=k.getFrameExtents();if(s.multiply(Z),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,k.mapSize.y=r.y)),k.map===null||H===!0||q===!0){const tt=this.type!==Pn?{minFilter:rn,magFilter:rn}:{};k.map!==null&&k.map.dispose(),k.map=new Si(s.x,s.y,tt),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const et=k.getViewportCount();for(let tt=0;tt<et;tt++){const mt=k.getViewport(tt);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),O.viewport(o),k.updateMatrices(W,tt),n=k.getFrustum(),S(A,P,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Pn&&y(k,P),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,x,E)};function y(T,A){const P=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Si(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,f,v,null)}function _(T,A,P,D){let x=null;const E=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=x.uuid,H=A.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let nt=q[H];nt===void 0&&(nt=x.clone(),q[H]=nt,A.addEventListener("dispose",C)),x=nt}if(x.visible=A.visible,x.wireframe=A.wireframe,D===Pn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=P}return x}function S(T,A,P,D,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Pn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const H=t.update(T),q=T.material;if(Array.isArray(q)){const nt=H.groups;for(let $=0,W=nt.length;$<W;$++){const k=nt[$],Z=q[k.materialIndex];if(Z&&Z.visible){const et=_(T,Z,D,x);T.onBeforeShadow(i,T,A,P,H,et,k),i.renderBufferDirect(P,null,H,et,T,k),T.onAfterShadow(i,T,A,P,H,et,k)}}}else if(q.visible){const nt=_(T,q,D,x);T.onBeforeShadow(i,T,A,P,H,nt,null),i.renderBufferDirect(P,null,H,nt,T,null),T.onAfterShadow(i,T,A,P,H,nt,null)}}const O=T.children;for(let H=0,q=O.length;H<q;H++)S(O[H],A,P,D,x)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const D=c[P],x=T.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}const ix={[oa]:aa,[la]:ua,[ca]:da,[es]:ha,[aa]:oa,[ua]:la,[da]:ca,[ha]:es};function sx(i){function t(){let I=!1;const gt=new ue;let Y=null;const Q=new ue(0,0,0,0);return{setMask:function(ft){Y!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){I=ft},setClear:function(ft,vt,$t,me,ze){ze===!0&&(ft*=me,vt*=me,$t*=me),gt.set(ft,vt,$t,me),Q.equals(gt)===!1&&(i.clearColor(ft,vt,$t,me),Q.copy(gt))},reset:function(){I=!1,Y=null,Q.set(-1,0,0,0)}}}function e(){let I=!1,gt=!1,Y=null,Q=null,ft=null;return{setReversed:function(vt){gt=vt},setTest:function(vt){vt?ht(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(vt){Y!==vt&&!I&&(i.depthMask(vt),Y=vt)},setFunc:function(vt){if(gt&&(vt=ix[vt]),Q!==vt){switch(vt){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=vt}},setLocked:function(vt){I=vt},setClear:function(vt){ft!==vt&&(i.clearDepth(vt),ft=vt)},reset:function(){I=!1,Y=null,Q=null,ft=null}}}function n(){let I=!1,gt=null,Y=null,Q=null,ft=null,vt=null,$t=null,me=null,ze=null;return{setTest:function(Yt){I||(Yt?ht(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Yt){gt!==Yt&&!I&&(i.stencilMask(Yt),gt=Yt)},setFunc:function(Yt,Ge,bn){(Y!==Yt||Q!==Ge||ft!==bn)&&(i.stencilFunc(Yt,Ge,bn),Y=Yt,Q=Ge,ft=bn)},setOp:function(Yt,Ge,bn){(vt!==Yt||$t!==Ge||me!==bn)&&(i.stencilOp(Yt,Ge,bn),vt=Yt,$t=Ge,me=bn)},setLocked:function(Yt){I=Yt},setClear:function(Yt){ze!==Yt&&(i.clearStencil(Yt),ze=Yt)},reset:function(){I=!1,gt=null,Y=null,Q=null,ft=null,vt=null,$t=null,me=null,ze=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,y=null,_=null,S=null,C=null,T=new Vt(0,0,0),A=0,P=!1,D=null,x=null,E=null,O=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,$=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),nt=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),nt=$>=2);let k=null,Z={};const et=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),mt=new ue().fromArray(et),Mt=new ue().fromArray(tt);function X(I,gt,Y,Q){const ft=new Uint8Array(4),vt=i.createTexture();i.bindTexture(I,vt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<Y;$t++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(gt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return vt}const J={};J[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),r.setFunc(es),Ft(!1),Ht(lc),ht(i.CULL_FACE),L(jn);function ht(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function ot(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function at(I,gt){return h[I]!==gt?(i.bindFramebuffer(I,gt),h[I]=gt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function ct(I,gt){let Y=u,Q=!1;if(I){Y=d.get(gt),Y===void 0&&(Y=[],d.set(gt,Y));const ft=I.textures;if(Y.length!==ft.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,$t=ft.length;vt<$t;vt++)Y[vt]=i.COLOR_ATTACHMENT0+vt;Y.length=ft.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function bt(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const Ct={[mi]:i.FUNC_ADD,[_f]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};Ct[Mf]=i.MIN,Ct[Sf]=i.MAX;const Ut={[bf]:i.ZERO,[wf]:i.ONE,[Ef]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[Lf]:i.SRC_ALPHA_SATURATE,[Cf]:i.DST_COLOR,[Af]:i.DST_ALPHA,[Tf]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[Pf]:i.ONE_MINUS_DST_COLOR,[Rf]:i.ONE_MINUS_DST_ALPHA,[If]:i.CONSTANT_COLOR,[Df]:i.ONE_MINUS_CONSTANT_COLOR,[kf]:i.CONSTANT_ALPHA,[Uf]:i.ONE_MINUS_CONSTANT_ALPHA};function L(I,gt,Y,Q,ft,vt,$t,me,ze,Yt){if(I===jn){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(ht(i.BLEND),g=!0),I!==xf){if(I!==v||Yt!==P){if((p!==mi||_!==mi)&&(i.blendEquation(i.FUNC_ADD),p=mi,_=mi),Yt)switch(I){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,y=null,S=null,C=null,T.set(0,0,0),A=0,v=I,P=Yt}return}ft=ft||gt,vt=vt||Y,$t=$t||Q,(gt!==p||ft!==_)&&(i.blendEquationSeparate(Ct[gt],Ct[ft]),p=gt,_=ft),(Y!==m||Q!==y||vt!==S||$t!==C)&&(i.blendFuncSeparate(Ut[Y],Ut[Q],Ut[vt],Ut[$t]),m=Y,y=Q,S=vt,C=$t),(me.equals(T)===!1||ze!==A)&&(i.blendColor(me.r,me.g,me.b,ze),T.copy(me),A=ze),v=I,P=!1}function ae(I,gt){I.side===Dn?ot(i.CULL_FACE):ht(i.CULL_FACE);let Y=I.side===We;gt&&(Y=!Y),Ft(Y),I.blending===Ki&&I.transparent===!1?L(jn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){D!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),D=I)}function Ht(I){I!==mf?(ht(i.CULL_FACE),I!==x&&(I===lc?i.cullFace(i.BACK):I===gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),x=I}function Rt(I){I!==E&&(nt&&i.lineWidth(I),E=I)}function ne(I,gt,Y){I?(ht(i.POLYGON_OFFSET_FILL),(O!==gt||H!==Y)&&(i.polygonOffset(gt,Y),O=gt,H=Y)):ot(i.POLYGON_OFFSET_FILL)}function Nt(I){I?ht(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+q-1),k!==I&&(i.activeTexture(I),k=I)}function b(I,gt,Y){Y===void 0&&(k===null?Y=i.TEXTURE0+q-1:Y=k);let Q=Z[Y];Q===void 0&&(Q={type:void 0,texture:void 0},Z[Y]=Q),(Q.type!==I||Q.texture!==gt)&&(k!==Y&&(i.activeTexture(Y),k=Y),i.bindTexture(I,gt||J[I]),Q.type=I,Q.texture=gt)}function B(){const I=Z[k];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){mt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function yt(I){Mt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Mt.copy(I))}function Xt(I,gt){let Y=l.get(gt);Y===void 0&&(Y=new WeakMap,l.set(gt,Y));let Q=Y.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(gt,I.name),Y.set(I,Q))}function Ot(I,gt){const Q=l.get(gt).get(I);a.get(gt)!==Q&&(i.uniformBlockBinding(gt,Q,I.__bindingPointIndex),a.set(gt,Q))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},k=null,Z={},h={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,y=null,_=null,S=null,C=null,T=new Vt(0,0,0),A=0,P=!1,D=null,x=null,E=null,O=null,H=null,mt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ht,disable:ot,bindFramebuffer:at,drawBuffers:ct,useProgram:bt,setBlending:L,setMaterial:ae,setFlipSided:Ft,setCullFace:Ht,setLineWidth:Rt,setPolygonOffset:ne,setScissorTest:Nt,activeTexture:R,bindTexture:b,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:it,texImage2D:_t,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:qt,texStorage3D:st,texSubImage2D:j,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:kt,viewport:yt,reset:te}}function eh(i,t,e,n){const s=rx(n);switch(e){case pu:return i*t;case gu:return i*t;case vu:return i*t*2;case xu:return i*t/s.components*s.byteLength;case _l:return i*t/s.components*s.byteLength;case _u:return i*t*2/s.components*s.byteLength;case yl:return i*t*2/s.components*s.byteLength;case mu:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case xr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case ya:return Math.max(i,16)*Math.max(t,8)/4;case va:case _a:return Math.max(i,8)*Math.max(t,8)/2;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sr:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yu:case za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ga:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rx(i){switch(i){case On:case uu:return{byteLength:1,components:1};case Ls:case du:case Ns:return{byteLength:2,components:1};case vl:case xl:return{byteLength:2,components:4};case Mi:case gl:case Nn:return{byteLength:4,components:1};case fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ox(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):Ir("canvas")}function v(R,b,B){let K=1;const it=Nt(R);if((it.width>B||it.height>B)&&(K=B/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*it.width),Et=Math.floor(K*it.height);d===void 0&&(d=g(j,Et));const dt=b?g(j,Et):d;return dt.width=j,dt.height=Et,dt.getContext("2d").drawImage(R,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Et+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==rn&&R.minFilter!==Ce}function m(R){i.generateMipmap(R)}function y(R,b,B,K,it=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),b===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),b===i.RGBA){const Et=it?Rr:Zt.getTransfer(K);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Et===se?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(R,b){let B;return R?b===null||b===Mi||b===ss?B=i.DEPTH24_STENCIL8:b===Nn?B=i.DEPTH32F_STENCIL8:b===Ls&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mi||b===ss?B=i.DEPTH_COMPONENT24:b===Nn?B=i.DEPTH_COMPONENT32F:b===Ls&&(B=i.DEPTH_COMPONENT16),B}function S(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==Ce?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&h.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),D(b)}function A(R){const b=n.get(R);if(b.__webglInit===void 0)return;const B=R.source,K=u.get(B);if(K){const it=K[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&P(R),Object.keys(K).length===0&&u.delete(B)}n.remove(R)}function P(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const B=R.source,K=u.get(B);delete K[b.__cacheKey],o.memory.textures--}function D(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let it=0;it<b.__webglFramebuffer[K].length;it++)i.deleteFramebuffer(b.__webglFramebuffer[K][it]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=R.textures;for(let K=0,it=B.length;K<it;K++){const j=n.get(B[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(R)}let x=0;function E(){x=0}function O(){const R=x;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),x+=1,R}function H(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function q(R,b){const B=n.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(B,R,b);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function nt(R,b){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Mt(B,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function $(R,b){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Mt(B,R,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function W(R,b){const B=n.get(R);if(R.version>0&&B.__version!==R.version){X(B,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}const k={[ma]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},Z={[rn]:i.NEAREST,[Xf]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},et={[jf]:i.NEVER,[ep]:i.ALWAYS,[Kf]:i.LESS,[Su]:i.LEQUAL,[Zf]:i.EQUAL,[tp]:i.GEQUAL,[Jf]:i.GREATER,[Qf]:i.NOTEQUAL};function tt(R,b){if(b.type===Nn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ce||b.magFilter===co||b.magFilter===Ys||b.magFilter===Un||b.minFilter===Ce||b.minFilter===co||b.minFilter===Ys||b.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,k[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,k[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,k[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Z[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===rn||b.minFilter!==Ys&&b.minFilter!==Un||b.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function mt(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const K=b.source;let it=u.get(K);it===void 0&&(it={},u.set(K,it));const j=H(b);if(j!==R.__cacheKey){it[j]===void 0&&(it[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),it[j].usedTimes++;const Et=it[R.__cacheKey];Et!==void 0&&(it[R.__cacheKey].usedTimes--,Et.usedTimes===0&&P(b)),R.__cacheKey=j,R.__webglTexture=it[j].texture}return B}function Mt(R,b,B){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const it=mt(R,b),j=b.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+B);const Et=n.get(j);if(j.version!==Et.__version||it===!0){e.activeTexture(i.TEXTURE0+B);const dt=Zt.getPrimaries(Zt.workingColorSpace),xt=b.colorSpace===Yn?null:Zt.getPrimaries(b.colorSpace),qt=b.colorSpace===Yn||dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let st=v(b.image,!1,s.maxTextureSize);st=ne(b,st);const _t=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type);let kt=y(b.internalFormat,_t,Dt,b.colorSpace,b.isVideoTexture);tt(K,b);let yt;const Xt=b.mipmaps,Ot=b.isVideoTexture!==!0,te=Et.__version===void 0||it===!0,I=j.dataReady,gt=S(b,st);if(b.isDepthTexture)kt=_(b.format===rs,b.type),te&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,kt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,kt,st.width,st.height,0,_t,Dt,null));else if(b.isDataTexture)if(Xt.length>0){Ot&&te&&e.texStorage2D(i.TEXTURE_2D,gt,kt,Xt[0].width,Xt[0].height);for(let Y=0,Q=Xt.length;Y<Q;Y++)yt=Xt[Y],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,yt.width,yt.height,_t,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,Y,kt,yt.width,yt.height,0,_t,Dt,yt.data);b.generateMipmaps=!1}else Ot?(te&&e.texStorage2D(i.TEXTURE_2D,gt,kt,st.width,st.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,_t,Dt,st.data)):e.texImage2D(i.TEXTURE_2D,0,kt,st.width,st.height,0,_t,Dt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,kt,Xt[0].width,Xt[0].height,st.depth);for(let Y=0,Q=Xt.length;Y<Q;Y++)if(yt=Xt[Y],b.format!==dn)if(_t!==null)if(Ot){if(I)if(b.layerUpdates.size>0){const ft=eh(yt.width,yt.height,b.format,b.type);for(const vt of b.layerUpdates){const $t=yt.data.subarray(vt*ft/yt.data.BYTES_PER_ELEMENT,(vt+1)*ft/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,vt,yt.width,yt.height,1,_t,$t,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,st.depth,_t,yt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,kt,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,st.depth,_t,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,kt,yt.width,yt.height,st.depth,0,_t,Dt,yt.data)}else{Ot&&te&&e.texStorage2D(i.TEXTURE_2D,gt,kt,Xt[0].width,Xt[0].height);for(let Y=0,Q=Xt.length;Y<Q;Y++)yt=Xt[Y],b.format!==dn?_t!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,kt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,yt.width,yt.height,_t,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,Y,kt,yt.width,yt.height,0,_t,Dt,yt.data)}else if(b.isDataArrayTexture)if(Ot){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,kt,st.width,st.height,st.depth),I)if(b.layerUpdates.size>0){const Y=eh(st.width,st.height,b.format,b.type);for(const Q of b.layerUpdates){const ft=st.data.subarray(Q*Y/st.data.BYTES_PER_ELEMENT,(Q+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,_t,Dt,ft)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Dt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,st.width,st.height,st.depth,0,_t,Dt,st.data);else if(b.isData3DTexture)Ot?(te&&e.texStorage3D(i.TEXTURE_3D,gt,kt,st.width,st.height,st.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Dt,st.data)):e.texImage3D(i.TEXTURE_3D,0,kt,st.width,st.height,st.depth,0,_t,Dt,st.data);else if(b.isFramebufferTexture){if(te)if(Ot)e.texStorage2D(i.TEXTURE_2D,gt,kt,st.width,st.height);else{let Y=st.width,Q=st.height;for(let ft=0;ft<gt;ft++)e.texImage2D(i.TEXTURE_2D,ft,kt,Y,Q,0,_t,Dt,null),Y>>=1,Q>>=1}}else if(Xt.length>0){if(Ot&&te){const Y=Nt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,gt,kt,Y.width,Y.height)}for(let Y=0,Q=Xt.length;Y<Q;Y++)yt=Xt[Y],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,_t,Dt,yt):e.texImage2D(i.TEXTURE_2D,Y,kt,_t,Dt,yt);b.generateMipmaps=!1}else if(Ot){if(te){const Y=Nt(st);e.texStorage2D(i.TEXTURE_2D,gt,kt,Y.width,Y.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Dt,st)}else e.texImage2D(i.TEXTURE_2D,0,kt,_t,Dt,st);p(b)&&m(K),Et.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function X(R,b,B){if(b.image.length!==6)return;const K=mt(R,b),it=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const j=n.get(it);if(it.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const Et=Zt.getPrimaries(Zt.workingColorSpace),dt=b.colorSpace===Yn?null:Zt.getPrimaries(b.colorSpace),xt=b.colorSpace===Yn||Et===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const qt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!qt&&!st?_t[Q]=v(b.image[Q],!0,s.maxCubemapSize):_t[Q]=st?b.image[Q].image:b.image[Q],_t[Q]=ne(b,_t[Q]);const Dt=_t[0],kt=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),Xt=y(b.internalFormat,kt,yt,b.colorSpace),Ot=b.isVideoTexture!==!0,te=j.__version===void 0||K===!0,I=it.dataReady;let gt=S(b,Dt);tt(i.TEXTURE_CUBE_MAP,b);let Y;if(qt){Ot&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Xt,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){Y=_t[Q].mipmaps;for(let ft=0;ft<Y.length;ft++){const vt=Y[ft];b.format!==dn?kt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,vt.width,vt.height,kt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Xt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,vt.width,vt.height,kt,yt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Xt,vt.width,vt.height,0,kt,yt,vt.data)}}}else{if(Y=b.mipmaps,Ot&&te){Y.length>0&&gt++;const Q=Nt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Xt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,kt,yt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,_t[Q].width,_t[Q].height,0,kt,yt,_t[Q].data);for(let ft=0;ft<Y.length;ft++){const $t=Y[ft].image[Q].image;Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,$t.width,$t.height,kt,yt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Xt,$t.width,$t.height,0,kt,yt,$t.data)}}else{Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,kt,yt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,kt,yt,_t[Q]);for(let ft=0;ft<Y.length;ft++){const vt=Y[ft];Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,kt,yt,vt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Xt,kt,yt,vt.image[Q])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),j.__version=it.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,B,K,it,j){const Et=r.convert(B.format,B.colorSpace),dt=r.convert(B.type),xt=y(B.internalFormat,Et,dt,B.colorSpace);if(!n.get(b).__hasExternalTextures){const st=Math.max(1,b.width>>j),_t=Math.max(1,b.height>>j);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,j,xt,st,_t,b.depth,0,Et,dt,null):e.texImage2D(it,j,xt,st,_t,0,Et,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,it,n.get(B).__webglTexture,0,Ft(b)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,it,n.get(B).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(R,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,it=K&&K.isDepthTexture?K.type:null,j=_(b.stencilBuffer,it),Et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Ft(b);Ht(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,j,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const K=b.textures;for(let it=0;it<K.length;it++){const j=K[it],Et=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),xt=y(j.internalFormat,Et,dt,j.colorSpace),qt=Ft(b);B&&Ht(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,xt,b.width,b.height):Ht(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,xt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,it=Ft(b);if(b.depthTexture.format===Zi)Ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===rs)Ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function at(R){const b=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ot(b.__webglFramebuffer,R)}else if(B){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),ht(b.__webglDepthbuffer[K],R,!1);else{const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ht(b.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,b,B){const K=n.get(R);b!==void 0&&J(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&at(R)}function bt(R){const b=R.texture,B=n.get(R),K=n.get(b);R.addEventListener("dispose",T);const it=R.textures,j=R.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)B.__webglFramebuffer[dt][xt]=i.createFramebuffer()}else B.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)B.__webglFramebuffer[dt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Et)for(let dt=0,xt=it.length;dt<xt;dt++){const qt=n.get(it[dt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ht(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){const xt=it[dt];B.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const qt=r.convert(xt.format,xt.colorSpace),st=r.convert(xt.type),_t=y(xt.internalFormat,qt,st,xt.colorSpace,R.isXRRenderTarget===!0),Dt=Ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,_t,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),tt(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)J(B.__webglFramebuffer[dt][xt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else J(B.__webglFramebuffer[dt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,xt=it.length;dt<xt;dt++){const qt=it[dt],st=n.get(qt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),tt(i.TEXTURE_2D,qt),J(B.__webglFramebuffer,R,qt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),p(qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,K.__webglTexture),tt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)J(B.__webglFramebuffer[xt],R,b,i.COLOR_ATTACHMENT0,dt,xt);else J(B.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,dt,0);p(b)&&m(dt),e.unbindTexture()}R.depthBuffer&&at(R)}function Ct(R){const b=R.textures;for(let B=0,K=b.length;B<K;B++){const it=b[B];if(p(it)){const j=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(it).__webglTexture;e.bindTexture(j,Et),m(j),e.unbindTexture()}}}const Ut=[],L=[];function ae(R){if(R.samples>0){if(Ht(R)===!1){const b=R.textures,B=R.width,K=R.height;let it=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),dt=b.length>1;if(dt)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const qt=n.get(b[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,it,i.NEAREST),l===!0&&(Ut.length=0,L.length=0,Ut.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ut.push(j),L.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const qt=n.get(b[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ft(R){return Math.min(s.maxSamples,R.samples)}function Ht(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function ne(R,b){const B=R.colorSpace,K=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ii&&B!==Yn&&(Zt.getTransfer(B)===se?(K!==dn||it!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function Nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=E,this.setTexture2D=q,this.setTexture2DArray=nt,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=ct,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ht}function ax(i,t){function e(n,s=Yn){let r;const o=Zt.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.BYTE;if(n===du)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===dn)return i.RGBA;if(n===gu)return i.LUMINANCE;if(n===vu)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===xu)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===_u)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===xr||n===_r||n===yr||n===Mr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===_a||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===Sa||n===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===Sa)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ba)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Da||n===ka||n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sr||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sr)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===za||n===Ga||n===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class lx extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Es extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cx={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
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

}`;class dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fx extends cs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=new dx,p=e.getContextAttributes();let m=null,y=null;const _=[],S=[],C=new Bt;let T=null;const A=new sn;A.layers.enable(1),A.viewport=new ue;const P=new sn;P.layers.enable(2),P.viewport=new ue;const D=[A,P],x=new lx;x.layers.enable(1),x.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=_[X];return J===void 0&&(J=new zo,_[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=_[X];return J===void 0&&(J=new zo,_[X]=J),J.getGripSpace()},this.getHand=function(X){let J=_[X];return J===void 0&&(J=new zo,_[X]=J),J.getHandSpace()};function H(X){const J=S.indexOf(X.inputSource);if(J===-1)return;const ht=_[J];ht!==void 0&&(ht.update(X.inputSource,X.frame,c||o),ht.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let X=0;X<_.length;X++){const J=S[X];J!==null&&(S[X]=null,_[X].disconnect(J))}E=null,O=null,v.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,y=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Si(f.framebufferWidth,f.framebufferHeight,{format:dn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ht=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?rs:Zi,ht=p.stencil?ss:Mi);const at={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(at),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Si(u.textureWidth,u.textureHeight,{format:dn,type:On,depthTexture:new ku(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function nt(X){for(let J=0;J<X.removed.length;J++){const ht=X.removed[J],ot=S.indexOf(ht);ot>=0&&(S[ot]=null,_[ot].disconnect(ht))}for(let J=0;J<X.added.length;J++){const ht=X.added[J];let ot=S.indexOf(ht);if(ot===-1){for(let ct=0;ct<_.length;ct++)if(ct>=S.length){S.push(ht),ot=ct;break}else if(S[ct]===null){S[ct]=ht,ot=ct;break}if(ot===-1)break}const at=_[ot];at&&at.connect(ht)}}const $=new N,W=new N;function k(X,J,ht){$.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(ht.matrixWorld);const ot=$.distanceTo(W),at=J.projectionMatrix.elements,ct=ht.projectionMatrix.elements,bt=at[14]/(at[10]-1),Ct=at[14]/(at[10]+1),Ut=(at[9]+1)/at[5],L=(at[9]-1)/at[5],ae=(at[8]-1)/at[0],Ft=(ct[8]+1)/ct[0],Ht=bt*ae,Rt=bt*Ft,ne=ot/(-ae+Ft),Nt=ne*-ae;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Nt),X.translateZ(ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),at[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const R=bt+ne,b=Ct+ne,B=Ht-Nt,K=Rt+(ot-Nt),it=Ut*Ct/b*R,j=L*Ct/b*R;X.projectionMatrix.makePerspective(B,K,it,j,R,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,ht=X.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),x.near=P.near=A.near=J,x.far=P.far=A.far=ht,(E!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,O=x.far);const ot=X.parent,at=x.cameras;Z(x,ot);for(let ct=0;ct<at.length;ct++)Z(at[ct],ot);at.length===2?k(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),et(X,x,ot)};function et(X,J,ht){ht===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ht.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Va*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let tt=null;function mt(X,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ot=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let ct=0;ct<ht.length;ct++){const bt=ht[ct];let Ct=null;if(f!==null)Ct=f.getViewport(bt);else{const L=d.getViewSubImage(u,bt);Ct=L.viewport,ct===0&&(t.setRenderTargetTextures(y,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(y))}let Ut=D[ct];Ut===void 0&&(Ut=new sn,Ut.layers.enable(ct),Ut.viewport=new ue,D[ct]=Ut),Ut.matrix.fromArray(bt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(bt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ct===0&&(x.matrix.copy(Ut.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(Ut)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){const ct=d.getDepthInformation(ht[0]);ct&&ct.isValid&&ct.texture&&v.init(t,ct,s.renderState)}}for(let ht=0;ht<_.length;ht++){const ot=S[ht],at=_[ht];ot!==null&&at!==void 0&&at.update(ot,J,c||o)}tt&&tt(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Mt=new Du;Mt.setAnimationLoop(mt),this.setAnimationLoop=function(X){tt=X},this.dispose=function(){}}}const hi=new yn,px=new de;function mx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Pu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,_,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===We&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===We&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,S=y.envMapRotation;_&&(p.envMap.value=_,hi.copy(S),hi.x*=-1,hi.y*=-1,hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),p.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(hi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const S=_.program;n.uniformBlockBinding(y,S)}function c(y,_){let S=s[y.id];S===void 0&&(g(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",p));const C=_.program;n.updateUBOMapping(y,C);const T=t.render.frame;r[y.id]!==T&&(u(y),r[y.id]=T)}function h(y){const _=d();y.__bindingPointIndex=_;const S=i.createBuffer(),C=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=s[y.id],S=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=S.length;T<A;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let D=0,x=P.length;D<x;D++){const E=P[D];if(f(E,T,D,C)===!0){const O=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let q=0;for(let nt=0;nt<H.length;nt++){const $=H[nt],W=v($);typeof $=="number"||typeof $=="boolean"?(E.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,O+q,E.__data)):$.isMatrix3?(E.__data[0]=$.elements[0],E.__data[1]=$.elements[1],E.__data[2]=$.elements[2],E.__data[3]=0,E.__data[4]=$.elements[3],E.__data[5]=$.elements[4],E.__data[6]=$.elements[5],E.__data[7]=0,E.__data[8]=$.elements[6],E.__data[9]=$.elements[7],E.__data[10]=$.elements[8],E.__data[11]=0):($.toArray(E.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,S,C){const T=y.value,A=_+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const _=y.uniforms;let S=0;const C=16;for(let A=0,P=_.length;A<P;A++){const D=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,E=D.length;x<E;x++){const O=D[x],H=Array.isArray(O.value)?O.value:[O.value];for(let q=0,nt=H.length;q<nt;q++){const $=H[q],W=v($),k=S%C,Z=k%W.boundary,et=k+Z;S+=Z,et!==0&&C-et<W.storage&&(S+=C-et),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=W.storage}}}const T=S%C;return T>0&&(S+=C-T),y.__size=S,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class vx{constructor(t={}){const{canvas:e=ip(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Kn,this.toneMappingExposure=1;const _=this;let S=!1,C=0,T=0,A=null,P=-1,D=null;const x=new ue,E=new ue;let O=null;const H=new Vt(0);let q=0,nt=e.width,$=e.height,W=1,k=null,Z=null;const et=new ue(0,0,nt,$),tt=new ue(0,0,nt,$);let mt=!1;const Mt=new wl;let X=!1,J=!1;const ht=new de,ot=new de,at=new N,ct=new ue,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ut(){return A===null?W:1}let L=n;function ae(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ml}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",vt,!1),L===null){const U="webgl2";if(L=ae(U,w),L===null)throw ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ft,Ht,Rt,ne,Nt,R,b,B,K,it,j,Et,dt,xt,qt,st,_t,Dt,kt,yt,Xt,Ot,te,I;function gt(){Ft=new S0(L),Ft.init(),Ot=new ax(L,Ft),Ht=new g0(L,Ft,t,Ot),Rt=new sx(L),Ht.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ne=new E0(L),Nt=new Vv,R=new ox(L,Ft,Rt,Nt,Ht,Ot,ne),b=new x0(_),B=new M0(_),K=new Ip(L),te=new p0(L,K),it=new b0(L,K,ne,te),j=new A0(L,it,K,ne),kt=new T0(L,Ht,R),st=new v0(Nt),Et=new Hv(_,b,B,Ft,Ht,te,st),dt=new mx(_,Nt),xt=new Xv,qt=new Zv(Ft),Dt=new f0(_,b,B,Rt,j,u,l),_t=new nx(_,j,Ht),I=new gx(L,ne,Ht,Rt),yt=new m0(L,Ft,ne),Xt=new w0(L,Ft,ne),ne.programs=Et.programs,_.capabilities=Ht,_.extensions=Ft,_.properties=Nt,_.renderLists=xt,_.shadowMap=_t,_.state=Rt,_.info=ne}gt();const Y=new fx(_,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(nt,$,!1))},this.getSize=function(w){return w.set(nt,$)},this.setSize=function(w,U,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=w,$=U,e.width=Math.floor(w*W),e.height=Math.floor(U*W),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(nt*W,$*W).floor()},this.setDrawingBufferSize=function(w,U,z){nt=w,$=U,W=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,U,z,G){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,U,z,G),Rt.viewport(x.copy(et).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(tt)},this.setScissor=function(w,U,z,G){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,U,z,G),Rt.scissor(E.copy(tt).multiplyScalar(W).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(w){Rt.setScissorTest(mt=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,U=!0,z=!0){let G=0;if(w){let F=!1;if(A!==null){const rt=A.texture.format;F=rt===Ml||rt===yl||rt===_l}if(F){const rt=A.texture.type,pt=rt===On||rt===Mi||rt===Ls||rt===ss||rt===vl||rt===xl,St=Dt.getClearColor(),wt=Dt.getClearAlpha(),Pt=St.r,Lt=St.g,Tt=St.b;pt?(f[0]=Pt,f[1]=Lt,f[2]=Tt,f[3]=wt,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Pt,g[1]=Lt,g[2]=Tt,g[3]=wt,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),xt.dispose(),qt.dispose(),Nt.dispose(),b.dispose(),B.dispose(),j.dispose(),te.dispose(),I.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ql),Y.removeEventListener("sessionend",tc),si.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ne.autoReset,U=_t.enabled,z=_t.autoUpdate,G=_t.needsUpdate,F=_t.type;gt(),ne.autoReset=w,_t.enabled=U,_t.autoUpdate=z,_t.needsUpdate=G,_t.type=F}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $t(w){const U=w.target;U.removeEventListener("dispose",$t),me(U)}function me(w){ze(w),Nt.remove(w)}function ze(w){const U=Nt.get(w).programs;U!==void 0&&(U.forEach(function(z){Et.releaseProgram(z)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,G,F,rt){U===null&&(U=bt);const pt=F.isMesh&&F.matrixWorld.determinant()<0,St=lf(w,U,z,G,F);Rt.setMaterial(G,pt);let wt=z.index,Pt=1;if(G.wireframe===!0){if(wt=it.getWireframeAttribute(z),wt===void 0)return;Pt=2}const Lt=z.drawRange,Tt=z.attributes.position;let Jt=Lt.start*Pt,ie=(Lt.start+Lt.count)*Pt;rt!==null&&(Jt=Math.max(Jt,rt.start*Pt),ie=Math.min(ie,(rt.start+rt.count)*Pt)),wt!==null?(Jt=Math.max(Jt,0),ie=Math.min(ie,wt.count)):Tt!=null&&(Jt=Math.max(Jt,0),ie=Math.min(ie,Tt.count));const le=ie-Jt;if(le<0||le===1/0)return;te.setup(F,G,St,z,wt);let qe,jt=yt;if(wt!==null&&(qe=K.get(wt),jt=Xt,jt.setIndex(qe)),F.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*Ut()),jt.setMode(L.LINES)):jt.setMode(L.TRIANGLES);else if(F.isLine){let At=G.linewidth;At===void 0&&(At=1),Rt.setLineWidth(At*Ut()),F.isLineSegments?jt.setMode(L.LINES):F.isLineLoop?jt.setMode(L.LINE_LOOP):jt.setMode(L.LINE_STRIP)}else F.isPoints?jt.setMode(L.POINTS):F.isSprite&&jt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const At=F._multiDrawStarts,Ae=F._multiDrawCounts,Kt=F._multiDrawCount,on=wt?K.get(wt).bytesPerElement:1,Ai=Nt.get(G).currentProgram.getUniforms();for(let Ye=0;Ye<Kt;Ye++)Ai.setValue(L,"_gl_DrawID",Ye),jt.render(At[Ye]/on,Ae[Ye])}else if(F.isInstancedMesh)jt.renderInstances(Jt,le,F.count);else if(z.isInstancedBufferGeometry){const At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ae=Math.min(z.instanceCount,At);jt.renderInstances(Jt,le,Ae)}else jt.render(Jt,le)};function Yt(w,U,z){w.transparent===!0&&w.side===Dn&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,qs(w,U,z),w.side=Qn,w.needsUpdate=!0,qs(w,U,z),w.side=Dn):qs(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),p=qt.get(z),p.init(U),y.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==z&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const rt=F.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const St=rt[pt];Yt(St,z,F),G.add(St)}else Yt(rt,z,F),G.add(rt)}),y.pop(),p=null,G},this.compileAsync=function(w,U,z=null){const G=this.compile(w,U,z);return new Promise(F=>{function rt(){if(G.forEach(function(pt){Nt.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){F(w);return}setTimeout(rt,10)}Ft.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ge=null;function bn(w){Ge&&Ge(w)}function Ql(){si.stop()}function tc(){si.start()}const si=new Du;si.setAnimationLoop(bn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(w){Ge=w,Y.setAnimationLoop(w),w===null?si.stop():si.start()},Y.addEventListener("sessionstart",Ql),Y.addEventListener("sessionend",tc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,A),p=qt.get(w,y.length),p.init(U),y.push(p),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Mt.setFromProjectionMatrix(ot),J=this.localClippingEnabled,X=st.init(this.clippingPlanes,J),v=xt.get(w,m.length),v.init(),m.push(v),Y.enabled===!0&&Y.isPresenting===!0){const rt=_.xr.getDepthSensingMesh();rt!==null&&so(rt,U,-1/0,_.sortObjects)}so(w,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(k,Z),Ct=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ct&&Dt.addToRenderList(v,w),this.info.render.frame++,X===!0&&st.beginShadows();const z=p.state.shadowsArray;_t.render(z,w,U),X===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,F=v.transmissive;if(p.setupLights(),U.isArrayCamera){const rt=U.cameras;if(F.length>0)for(let pt=0,St=rt.length;pt<St;pt++){const wt=rt[pt];nc(G,F,w,wt)}Ct&&Dt.render(w);for(let pt=0,St=rt.length;pt<St;pt++){const wt=rt[pt];ec(v,w,wt,wt.viewport)}}else F.length>0&&nc(G,F,w,U),Ct&&Dt.render(w),ec(v,w,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,U),te.resetDefaultState(),P=-1,D=null,y.pop(),y.length>0?(p=y[y.length-1],X===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function so(w,U,z,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){G&&ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const pt=j.update(w),St=w.material;St.visible&&v.push(w,pt,St,z,ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const pt=j.update(w),St=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ct.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),ct.copy(pt.boundingSphere.center)),ct.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(St)){const wt=pt.groups;for(let Pt=0,Lt=wt.length;Pt<Lt;Pt++){const Tt=wt[Pt],Jt=St[Tt.materialIndex];Jt&&Jt.visible&&v.push(w,pt,Jt,z,ct.z,Tt)}}else St.visible&&v.push(w,pt,St,z,ct.z,null)}}const rt=w.children;for(let pt=0,St=rt.length;pt<St;pt++)so(rt[pt],U,z,G)}function ec(w,U,z,G){const F=w.opaque,rt=w.transmissive,pt=w.transparent;p.setupLightsView(z),X===!0&&st.setGlobalState(_.clippingPlanes,z),G&&Rt.viewport(x.copy(G)),F.length>0&&$s(F,U,z),rt.length>0&&$s(rt,U,z),pt.length>0&&$s(pt,U,z),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function nc(w,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Si(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Ns:On,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[G.id],pt=G.viewport||x;rt.setSize(pt.z,pt.w);const St=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(H),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Ct&&Dt.render(z);const wt=_.toneMapping;_.toneMapping=Kn;const Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),X===!0&&st.setGlobalState(_.clippingPlanes,G),$s(w,z,G),R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Tt=0,Jt=U.length;Tt<Jt;Tt++){const ie=U[Tt],le=ie.object,qe=ie.geometry,jt=ie.material,At=ie.group;if(jt.side===Dn&&le.layers.test(G.layers)){const Ae=jt.side;jt.side=We,jt.needsUpdate=!0,ic(le,z,G,qe,jt,At),jt.side=Ae,jt.needsUpdate=!0,Lt=!0}}Lt===!0&&(R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt))}_.setRenderTarget(St),_.setClearColor(H,q),Pt!==void 0&&(G.viewport=Pt),_.toneMapping=wt}function $s(w,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,rt=w.length;F<rt;F++){const pt=w[F],St=pt.object,wt=pt.geometry,Pt=G===null?pt.material:G,Lt=pt.group;St.layers.test(z.layers)&&ic(St,U,z,wt,Pt,Lt)}}function ic(w,U,z,G,F,rt){w.onBeforeRender(_,U,z,G,F,rt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(_,U,z,G,w,rt),F.transparent===!0&&F.side===Dn&&F.forceSinglePass===!1?(F.side=We,F.needsUpdate=!0,_.renderBufferDirect(z,U,G,F,w,rt),F.side=Qn,F.needsUpdate=!0,_.renderBufferDirect(z,U,G,F,w,rt),F.side=Dn):_.renderBufferDirect(z,U,G,F,w,rt),w.onAfterRender(_,U,z,G,F,rt)}function qs(w,U,z){U.isScene!==!0&&(U=bt);const G=Nt.get(w),F=p.state.lights,rt=p.state.shadowsArray,pt=F.state.version,St=Et.getParameters(w,F.state,rt,U,z),wt=Et.getProgramCacheKey(St);let Pt=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",$t),Pt=new Map,G.programs=Pt);let Lt=Pt.get(wt);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===pt)return rc(w,St),Lt}else St.uniforms=Et.getUniforms(w),w.onBeforeCompile(St,_),Lt=Et.acquireProgram(St,wt),Pt.set(wt,Lt),G.uniforms=St.uniforms;const Tt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=st.uniform),rc(w,St),G.needsLights=hf(w),G.lightsStateVersion=pt,G.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Lt,G.uniformsList=null,Lt}function sc(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=wr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function rc(w,U){const z=Nt.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function lf(w,U,z,G,F){U.isScene!==!0&&(U=bt),R.resetTextureUnits();const rt=U.fog,pt=G.isMeshStandardMaterial?U.environment:null,St=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ii,wt=(G.isMeshStandardMaterial?B:b).get(G.envMap||pt),Pt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!z.morphAttributes.position,Jt=!!z.morphAttributes.normal,ie=!!z.morphAttributes.color;let le=Kn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(le=_.toneMapping);const qe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,jt=qe!==void 0?qe.length:0,At=Nt.get(G),Ae=p.state.lights;if(X===!0&&(J===!0||w!==D)){const tn=w===D&&G.id===P;st.setState(G,w,tn)}let Kt=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ae.state.version||At.outputColorSpace!==St||F.isBatchedMesh&&At.batching===!1||!F.isBatchedMesh&&At.batching===!0||F.isBatchedMesh&&At.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&At.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&At.instancing===!1||!F.isInstancedMesh&&At.instancing===!0||F.isSkinnedMesh&&At.skinning===!1||!F.isSkinnedMesh&&At.skinning===!0||F.isInstancedMesh&&At.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&At.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&At.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&At.instancingMorph===!1&&F.morphTexture!==null||At.envMap!==wt||G.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Pt||At.vertexTangents!==Lt||At.morphTargets!==Tt||At.morphNormals!==Jt||At.morphColors!==ie||At.toneMapping!==le||At.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,At.__version=G.version);let on=At.currentProgram;Kt===!0&&(on=qs(G,U,F));let Ai=!1,Ye=!1,ro=!1;const fe=on.getUniforms(),zn=At.uniforms;if(Rt.useProgram(on.program)&&(Ai=!0,Ye=!0,ro=!0),G.id!==P&&(P=G.id,Ye=!0),Ai||D!==w){Ht.reverseDepthBuffer?(ht.copy(w.projectionMatrix),rp(ht),op(ht),fe.setValue(L,"projectionMatrix",ht)):fe.setValue(L,"projectionMatrix",w.projectionMatrix),fe.setValue(L,"viewMatrix",w.matrixWorldInverse);const tn=fe.map.cameraPosition;tn!==void 0&&tn.setValue(L,at.setFromMatrixPosition(w.matrixWorld)),Ht.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Ye=!0,ro=!0)}if(F.isSkinnedMesh){fe.setOptional(L,F,"bindMatrix"),fe.setOptional(L,F,"bindMatrixInverse");const tn=F.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),fe.setValue(L,"boneTexture",tn.boneTexture,R))}F.isBatchedMesh&&(fe.setOptional(L,F,"batchingTexture"),fe.setValue(L,"batchingTexture",F._matricesTexture,R),fe.setOptional(L,F,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",F._indirectTexture,R),fe.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",F._colorsTexture,R));const oo=z.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0)&&kt.update(F,z,on),(Ye||At.receiveShadow!==F.receiveShadow)&&(At.receiveShadow=F.receiveShadow,fe.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(zn.envMap.value=wt,zn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(zn.envMapIntensity.value=U.environmentIntensity),Ye&&(fe.setValue(L,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&cf(zn,ro),rt&&G.fog===!0&&dt.refreshFogUniforms(zn,rt),dt.refreshMaterialUniforms(zn,G,W,$,p.state.transmissionRenderTarget[w.id]),wr.upload(L,sc(At),zn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(wr.upload(L,sc(At),zn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(L,"center",F.center),fe.setValue(L,"modelViewMatrix",F.modelViewMatrix),fe.setValue(L,"normalMatrix",F.normalMatrix),fe.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const tn=G.uniformsGroups;for(let ao=0,uf=tn.length;ao<uf;ao++){const oc=tn[ao];I.update(oc,on),I.bind(oc,on)}}return on}function cf(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function hf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,z){Nt.get(w.texture).__webglTexture=U,Nt.get(w.depthTexture).__webglTexture=z;const G=Nt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=Nt.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){A=w,C=U,T=z;let G=!0,F=null,rt=!1,pt=!1;if(w){const wt=Nt.get(w);if(wt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(wt.__hasExternalTextures)R.rebindTextures(w,Nt.get(w.texture).__webglTexture,Nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&Nt.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(pt=!0);const Lt=Nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?F=Lt[U][z]:F=Lt[U],rt=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?F=Nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[z]:F=Lt,x.copy(w.viewport),E.copy(w.scissor),O=w.scissorTest}else x.copy(et).multiplyScalar(W).floor(),E.copy(tt).multiplyScalar(W).floor(),O=mt;if(Rt.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&Rt.drawBuffers(w,F),Rt.viewport(x),Rt.scissor(E),Rt.setScissorTest(O),rt){const wt=Nt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,z)}else if(pt){const wt=Nt.get(w.texture),Pt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,z||0,Pt)}P=-1},this.readRenderTargetPixels=function(w,U,z,G,F,rt,pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){Rt.bindFramebuffer(L.FRAMEBUFFER,St);try{const wt=w.texture,Pt=wt.format,Lt=wt.type;if(!Ht.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&z>=0&&z<=w.height-F&&L.readPixels(U,z,G,F,Ot.convert(Pt),Ot.convert(Lt),rt)}finally{const wt=A!==null?Nt.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,G,F,rt,pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){const wt=w.texture,Pt=wt.format,Lt=wt.type;if(!Ht.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&z>=0&&z<=w.height-F){Rt.bindFramebuffer(L.FRAMEBUFFER,St);const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),L.readPixels(U,z,G,F,Ot.convert(Pt),Ot.convert(Lt),0);const Jt=A!==null?Nt.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,Jt);const ie=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await sp(L,ie,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt),L.deleteBuffer(Tt),L.deleteSync(ie),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-z),F=Math.floor(w.image.width*G),rt=Math.floor(w.image.height*G),pt=U!==null?U.x:0,St=U!==null?U.y:0;R.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,pt,St,F,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(w,U,z=null,G=null,F=0){w.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,z=null);let rt,pt,St,wt,Pt,Lt;z!==null?(rt=z.max.x-z.min.x,pt=z.max.y-z.min.y,St=z.min.x,wt=z.min.y):(rt=w.image.width,pt=w.image.height,St=0,wt=0),G!==null?(Pt=G.x,Lt=G.y):(Pt=0,Lt=0);const Tt=Ot.convert(U.format),Jt=Ot.convert(U.type);R.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ie=L.getParameter(L.UNPACK_ROW_LENGTH),le=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qe=L.getParameter(L.UNPACK_SKIP_PIXELS),jt=L.getParameter(L.UNPACK_SKIP_ROWS),At=L.getParameter(L.UNPACK_SKIP_IMAGES),Ae=w.isCompressedTexture?w.mipmaps[F]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,wt),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Pt,Lt,rt,pt,Tt,Jt,Ae.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Pt,Lt,Ae.width,Ae.height,Tt,Ae.data):L.texSubImage2D(L.TEXTURE_2D,F,Pt,Lt,rt,pt,Tt,Jt,Ae),L.pixelStorei(L.UNPACK_ROW_LENGTH,ie),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At),F===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,G=null,F=0){w.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0);let rt,pt,St,wt,Pt,Lt,Tt,Jt,ie;const le=w.isCompressedTexture?w.mipmaps[F]:w.image;z!==null?(rt=z.max.x-z.min.x,pt=z.max.y-z.min.y,St=z.max.z-z.min.z,wt=z.min.x,Pt=z.min.y,Lt=z.min.z):(rt=le.width,pt=le.height,St=le.depth,wt=0,Pt=0,Lt=0),G!==null?(Tt=G.x,Jt=G.y,ie=G.z):(Tt=0,Jt=0,ie=0);const qe=Ot.convert(U.format),jt=Ot.convert(U.type);let At;if(U.isData3DTexture)R.setTexture3D(U,0),At=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),At=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ae=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),on=L.getParameter(L.UNPACK_SKIP_PIXELS),Ai=L.getParameter(L.UNPACK_SKIP_ROWS),Ye=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(At,F,Tt,Jt,ie,rt,pt,St,qe,jt,le.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(At,F,Tt,Jt,ie,rt,pt,St,qe,le.data):L.texSubImage3D(At,F,Tt,Jt,ie,rt,pt,St,qe,jt,le),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,on),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ai),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye),F===0&&U.generateMipmaps&&L.generateMipmap(At),Rt.unbindTexture()},this.initRenderTarget=function(w){Nt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,Rt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sl?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Xr?"display-p3":"srgb"}}class Bu extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xx extends Te{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Ce,this.magFilter=r!==void 0?r:Ce,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class zu extends Te{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ds extends Sn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new N,S=new N,C=new N;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],S),f(e[T+2],C),l(_,S,C,y)}function l(y,_,S,C){const T=C+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const D=y.clone().lerp(S,P/T),x=_.clone().lerp(S,P/T),E=T-P;for(let O=0;O<=E;O++)O===0&&P===T?A[P][O]=D:A[P][O]=D.clone().lerp(x,O/E)}for(let P=0;P<T;P++)for(let D=0;D<2*(T-P)-1;D++){const x=Math.floor(D/2);D%2===0?(u(A[P][x+1]),u(A[P+1][x]),u(A[P][x])):(u(A[P][x+1]),u(A[P+1][x+1]),u(A[P+1][x]))}}function c(y){const _=new N;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(y),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function h(){const y=new N;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const S=p(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;o.push(S,1-C)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const _=o[y+0],S=o[y+2],C=o[y+4],T=Math.max(_,S,C),A=Math.min(_,S,C);T>.9&&A<.1&&(_<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,_){const S=y*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){const y=new N,_=new N,S=new N,C=new N,T=new Bt,A=new Bt,P=new Bt;for(let D=0,x=0;D<r.length;D+=9,x+=6){y.set(r[D+0],r[D+1],r[D+2]),_.set(r[D+3],r[D+4],r[D+5]),S.set(r[D+6],r[D+7],r[D+8]),T.set(o[x+0],o[x+1]),A.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),C.copy(y).add(_).add(S).divideScalar(3);const E=p(C);v(T,x+0,y,E),v(A,x+2,_,E),v(P,x+4,S,E)}}function v(y,_,S,C){C<0&&y.x===1&&(o[_]=y.x-1),S.x===0&&S.z===0&&(o[_]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.vertices,t.indices,t.radius,t.details)}}class Al extends ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Al(t.radius,t.detail)}}class Rl extends ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rl(t.radius,t.detail)}}class Cl extends ds{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cl(t.radius,t.detail)}}class Pl extends ds{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pl(t.radius,t.detail)}}class _x extends Bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gu extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yx extends Gu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Go=new de,nh=new N,ih=new N;class Mx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sx extends Mx{constructor(){super(new El(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bx extends Gu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Sx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);const wx=new Vt(16777215);class Ex{constructor(t,{rotates:e=!1,flashTime:n=.12}={}){this.root=new Es,t.add(this.root),this.rotates=e,this.flashTime=n,this.flashMats=[],this.bar=null}makeFlashable(t=this.root){t.traverse(e=>{!e.isMesh||!e.material||e.material.__noFlash||(e.material=e.material.clone(),e.material.emissive&&(e.material.userData.baseEmissive=e.material.emissive.getHex(),this.flashMats.push(e.material)))})}setHealthBar(t){return this.bar=t,t}sync(t,e,n,s){this.root.position.lerpVectors(t.prevPos,t.pos,n),this.rotates&&(this.root.rotation.y=ff(t.prevFacing,t.facing,n)),this.animate(e,t),this.paint(t,s)}snap(t,e,n){this.root.position.copy(t.pos),this.rotates&&(this.root.rotation.y=t.facing),this.animate(e,t),this.paint(t,n)}animate(t,e){}paint(t,e){if(this.flashMats.length){const n=t.flash>0?t.flash/this.flashTime:0,s=t.viewTint?t.viewTint():null;for(const r of this.flashMats)r.emissive.setHex(s??r.userData.baseEmissive),n>0&&r.emissive.lerp(wx,n*.9)}this.bar&&(this.bar.setFraction(t.maxHp?t.hp/t.maxHp:0),e&&this.bar.face(e))}dispose(){var t;(t=this.bar)==null||t.dispose(),this.root.removeFromParent();for(const e of this.flashMats)e.dispose();this.flashMats.length=0}}function Tx(i,t,{key:e="config",log:n=!0}={}){return t}const Ax={sim:{hz:20},camera:{viewUnits:14,minViewUnits:1.5,maxViewUnits:90,zoomStep:1.12,panMargin:6},grid:{unitPx:140,kind:"square",color:857106,opacity:.34,lineWidth:.9,perUnit:5,unitLabel:"sq",distanceLabel:"ft"},tokens:{defaultSize:1,minSize:.25,maxSize:12,defaultBorder:5219203,slide:{speed:9,min:.2,max:.75},ring:.07,originAlpha:.26,originRingAlpha:.7,layerGap:.002,arrow:{length:.17,gap:.05,alpha:.92,edgeAlpha:.6}},ruler:{color:15923188,widthPx:2.4,dashPx:11,duty:.58,alpha:.85},assets:{maxEdge:2560,quality:.86,maxBytes:48*1024*1024,maxVideoBytes:30*1024*1024},multiplayer:{appId:"vtt-tabletop",maxPlayers:8,ghostHz:20}},It=Tx(void 0,Ax),Hu=1,Je="gm",ti="player",Xa=["bg","token","gm"];function Vu(){return{v:Hu,seq:0,title:"",nid:1,scenes:{},sceneOrder:[],activeScene:null,assets:{},roster:{},chat:[]}}function Yi(i,t){return`${t}_${i.nid++}`}function Rx(i,t="Untitled scene"){return{id:i,name:t,map:null,artW:0,artH:0,grid:{kind:"square",snap:"soft",magnet:.12,measure:"chebyshev",unitLabel:"sq",distanceLabel:"ft",unitPx:140,ox:0,oy:0,color:857106,opacity:.34,perUnit:5},tokens:{},tokenOrder:[],blocks:[],fx:Qi()}}const Wu=["rain","snow","fog","embers"],Dr=12,$a=["downed","dead","poisoned","stunned","asleep","prone","restrained","blinded","frightened","charmed","burning","bleeding","concentrating","invisible"],Cx=24;function Xu(i){return typeof i!="string"?"":i.replace(/[\u0000-\u001f\u007f]/g,"").replace(/\s+/g," ").trim().slice(0,Cx)}function $u(i){return Array.isArray(i)?$a.filter(t=>i.includes(t)):[]}const Ll=["fade","swirl","curtain","drapes","ink","burn","freeze","flood"];function Qi(){return{weather:null,intensity:.6,darkness:0,blackout:!1,transition:"fade"}}function Px(i,t={}){return{id:i,asset:null,name:"",x:0,y:0,size:1,rot:0,facing:null,shape:"circle",border:5219203,tint:16777215,layer:"token",owner:"",hp:0,maxHp:0,hidden:!1,light:!1,lightRange:2,mark:"",...t}}function kr(i,t,{role:e=ti,color:n=6535316}={}){return{peerId:i,name:t,role:e,color:n,tokens:[]}}function Re(i){return i.activeScene&&i.scenes[i.activeScene]||null}function Lx(i,{isGm:t=!0}={}){const e=Re(i);if(!e)return[];const n=[];for(const s of e.tokenOrder){const r=e.tokens[s];r&&(r.hidden&&!t||r.layer==="gm"&&!t||n.push(r))}return n}const Ix={x0:0,y0:0,x1:16,y1:10};function qa(i){if(!i||!i.artW||!i.artH)return{...Ix};const t=i.grid.unitPx||1;return{x0:-i.grid.ox/t,y0:-i.grid.oy/t,x1:(i.artW-i.grid.ox)/t,y1:(i.artH-i.grid.oy)/t}}function Ya(i){var t,e;if(!i||typeof i!="object")return Vu();for(const n of Object.values(i.scenes||{}))typeof((t=n.grid)==null?void 0:t.snap)=="boolean"&&(n.grid.snap=n.grid.snap?"grid":"off"),typeof((e=n.grid)==null?void 0:e.magnet)!="number"&&(n.grid.magnet=.12),(!n.fx||typeof n.fx!="object")&&(n.fx=Qi()),typeof n.fx.intensity!="number"&&(n.fx.intensity=Qi().intensity),Ll.includes(n.fx.transition)||(n.fx.transition="fade"),Array.isArray(n.blocks)||(n.blocks=[]);return typeof i.title!="string"&&(i.title=""),i.v=Hu,i}function vi(i,t,e,{isGm:n=!0}={}){const s=Re(i);if(!s)return null;for(let r=s.tokenOrder.length-1;r>=0;r--){const o=s.tokens[s.tokenOrder[r]];if(!o||(o.hidden||o.layer==="gm")&&!n)continue;const a=Math.max(.05,o.size)/2,l=t-o.x,c=e-o.y;if(o.shape==="square"?Math.abs(l)<=a&&Math.abs(c)<=a:l*l+c*c<=a*a)return o}return null}const ja=[2,4,6,8,10,12,20,100],vn={dice:30,terms:8,modifier:1e3,expr:64,note:60,input:256};function sh(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim().toLowerCase().replace(/\s*([+-])\s*/g,"$1");if(!t)throw new Error("Type a roll, like 2d6+3.");if(/\s/.test(t))throw new Error(`Cannot read "${i.trim()}".`);if(t.length>vn.expr)throw new Error("That roll is too long.");const e=[],n=/([+-]?)(?:(\d*)d(\d+|%)(?:k([hl])(\d+))?|(\d+))/y;let s=0,r=0;for(;s<t.length;){n.lastIndex=s;const o=n.exec(t);if(!o||e.length&&!o[1])throw new Error(`Cannot read "${i.trim()}".`);s=n.lastIndex;const a=o[1]==="-"?-1:1;if(o[6]!==void 0){const d=Number(o[6]);if(d>vn.modifier)throw new Error(`${d} is a big modifier.`);e.push({flat:d,sign:a});continue}const l=o[2]===""?1:Number(o[2]),c=o[3]==="%"?100:Number(o[3]);if(!ja.includes(c))throw new Error(`There is no d${c}. Try ${ja.map(d=>`d${d}`).join(", ")}.`);if(l<1)throw new Error("Roll at least one die.");if(r+=l,r>vn.dice)throw new Error(`At most ${vn.dice} dice at once.`);let h=null;if(o[4]){const d=Number(o[5]);if(d<1||d>l)throw new Error(`Cannot keep ${d} of ${l}.`);h={high:o[4]==="h",n:d}}e.push({count:l,sides:c,keep:h,sign:a})}if(e.length>vn.terms)throw new Error("Too many parts to that roll.");if(!e.some(o=>o.sides))throw new Error("There are no dice in that.");return e}function Il(i){if(typeof i!="string")throw new Error("Not a roll.");const t=i.trim();if(!t)throw new Error("Type a roll, like 2d6+3.");if(t.length>vn.input)throw new Error("That roll is too long.");const e=t.split(/\s+/);for(let n=e.length;n>=1;n--){let s;try{s=sh(e.slice(0,n).join(" "))}catch{continue}return{terms:s,note:Dx(e.slice(n).join(" "))}}throw sh(e[0]),new Error(`Cannot read "${t}".`)}function Dx(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,vn.note)}function qu(i){return i.map((t,e)=>{const n=t.sign<0?"-":e?"+":"";if(t.flat!==void 0)return`${n}${t.flat}`;const s=t.keep?`k${t.keep.high?"h":"l"}${t.keep.n}`:"";return`${n}${t.count}d${t.sides===100?"%":t.sides}${s}`}).join("")}function rh(i,t,{id:e,by:n,hidden:s=!1}){const{terms:r,note:o}=Il(t),a=i.count,l=[];let c=0;for(const u of r){if(u.flat!==void 0){c+=u.sign*u.flat;continue}const f=[];for(let g=0;g<u.count;g++)f.push({sides:u.sides,value:i.int(1,u.sides),kept:!0,sign:u.sign});if(u.keep){const g=f.map((p,m)=>m).sort((p,m)=>(u.keep.high?f[m].value-f[p].value:f[p].value-f[m].value)||p-m),v=new Set(g.slice(0,u.keep.n));f.forEach((p,m)=>{p.kept=v.has(m)})}l.push(...f)}const h=i.int(1,2147483647),d=l.reduce((u,f)=>u+(f.kept?f.sign*f.value:0),0)+c;return{id:e,by:n,expr:qu(r),...o?{note:o}:{},...s?{hidden:!0}:{},dice:l,mod:c,total:d,from:a,draws:i.count-a,throw:h}}function kx(i){return!i||typeof i!="object"||typeof i.id!="string"||!Array.isArray(i.dice)||i.dice.length<1||i.dice.length>vn.dice||i.note!==void 0&&(typeof i.note!="string"||i.note.length>vn.note)?!1:i.dice.every(t=>ja.includes(t.sides)&&Number.isInteger(t.value)&&t.value>=1&&t.value<=t.sides)}const as={keep:200,text:300};function Yu(i){return typeof i!="string"?"":i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,as.text)}function Ux(i){return!!i&&typeof i=="object"&&typeof i.id=="string"&&i.id.length<=64&&typeof i.by=="string"&&i.by.length<=64&&typeof i.text=="string"&&i.text.length>0&&i.text.length<=as.text&&(i.at===void 0||Number.isFinite(i.at))}function oh(i){i.length>as.keep&&i.splice(0,i.length-as.keep)}const Dl="square",kl="hex-pointy",zs="hex-flat",fs="none",ju=[Dl,kl,zs,fs],Nx="off",Ku="soft",Zu="grid",Fx=[Nx,Ku,Zu],Ox=.5,Ur=Ox/(Math.sqrt(3)/2);function qr(i){return i===kl||i===zs}function Bx(i,t,e){const n=e.unitPx||1;return[(i-e.ox)/n,(t-e.oy)/n]}function zx(i,t,e){const n=e.unitPx||1;return[i*n+e.ox,t*n+e.oy]}function Gx(i,t,e,n=1){if(!e||e.kind===fs)return[i,t];if(qr(e.kind)){const[r,o]=Ju(i,t,e.kind);return[r,o]}return Math.round(n)%2===1||n<1?[Math.floor(i)+.5,Math.floor(t)+.5]:[Math.round(i),Math.round(t)]}function Hx(i,t,e,n=.12){if(!e||e.kind===fs||!(n>0))return[i,t];if(qr(e.kind)){const[r,o]=Ju(i,t,e.kind);return Math.hypot(i-r,t-o)<=n?[r,o]:[i,t]}const s=r=>{const o=Math.round(r*2)/2;return Math.abs(r-o)<=n?o:r};return[s(i),s(t)]}function Ul(i,t,e,n=1){return(e==null?void 0:e.snap)===Zu?Gx(i,t,e,n):(e==null?void 0:e.snap)===Ku?Hx(i,t,e,e.magnet):[i,t]}function Vx(i,t,e,n,s,r="euclid"){if(qr(s==null?void 0:s.kind))return qx(i,t,e,n,s.kind);const o=Math.abs(e-i),a=Math.abs(n-t);if(r==="chebyshev")return Math.max(o,a);if(r==="alternating"){const l=Math.min(o,a);return Math.max(o,a)-l+Math.floor(l)+Math.floor(l/2)+l%1}return Math.hypot(o,a)}function Wx(i,t){let e=0;for(let n=1;n<i.length;n++)e+=Vx(i[n-1][0],i[n-1][1],i[n][0],i[n][1],t,t==null?void 0:t.measure);return Xx(e,t)}function Xx(i,t){const e=!t||t.kind===fs,n=Math.round(i*10)/10,s=Number.isInteger(n)?String(n):n.toFixed(1),r=e?n===1?"unit":"units":t.unitLabel||"sq",o=Math.round(i*((t==null?void 0:t.perUnit)??5)),a=(t==null?void 0:t.distanceLabel)??"ft";return{distance:i,text:a?`${s} ${r} · ${o} ${a}`:`${s} ${r}`}}function Ka(i,t,e){const[n,s]=e===zs?[t,i]:[i,t],r=(Math.sqrt(3)/3*n-s/3)/Ur,o=2/3*s/Ur;return[r,o]}function $x(i,t,e){const n=Ur*(Math.sqrt(3)*i+Math.sqrt(3)/2*t),s=Ur*(3/2*t);return e===zs?[s,n]:[n,s]}function Za(i,t){const e=-i-t;let n=Math.round(i),s=Math.round(t);const r=Math.round(e),o=Math.abs(n-i),a=Math.abs(s-t),l=Math.abs(r-e);return o>a&&o>l?n=-s-r:a>l&&(s=-n-r),[n,s]}function Ju(i,t,e){const[n,s]=Za(...Ka(i,t,e));return $x(n,s,e)}function qx(i,t,e,n,s){const[r,o]=Za(...Ka(i,t,s)),[a,l]=Za(...Ka(e,n,s)),c=r-a,h=o-l;return(Math.abs(c)+Math.abs(h)+Math.abs(c+h))/2}function Yx(i,t,e){const n=/\((\d{1,3})\s*[x×]\s*(\d{1,3})\)/i.exec(i||"");if(!n)return null;const s=+n[1],r=+n[2];if(!(s>1&&r>1))return null;const o=t/s,a=e/r;if(Math.abs(o-a)>1.5)return null;const l=Math.round((o+a)/2);return l<16||l>1024?null:{unitPx:l,ox:0,oy:0,cols:s,rows:r}}const jx=["wall","mask"],ls={coords:2e3,perScene:2e3};function Qu(i){const t=[];for(const e of(i==null?void 0:i.blocks)||[]){const n=e.pts,s=n.length>>1;for(let r=0;r+1<s;r++)t.push(n[r*2],n[r*2+1],n[r*2+2],n[r*2+3]);e.kind==="mask"&&s>2&&t.push(n[s*2-2],n[s*2-1],n[0],n[1])}return t}function Nl(i,t,e,n,s,r,o,a){const l=o-s,c=a-r,h=e*c-n*l;if(Math.abs(h)<1e-12)return 1/0;const d=s-i,u=r-t,f=(d*c-u*l)/h,g=(d*n-u*e)/h;return f>=0&&g>=-1e-9&&g<=1+1e-9?f:1/0}function Ja(i,t,e,n,s){const r=n-t,o=s-e;for(let a=0;a<i.length;a+=4){const l=Nl(t,e,r,o,i[a],i[a+1],i[a+2],i[a+3]);if(l>1e-6&&l<1-1e-6)return!0}return!1}const Fl=.05;function Kx(i,t,e){const n=[];for(const s of(i==null?void 0:i.blocks)||[]){const r=s.pts,o=r.length>>1;if(!(s.kind==="mask"&&o>2&&td(r,t,e))){for(let a=0;a+1<o;a++)n.push(r[a*2],r[a*2+1],r[a*2+2],r[a*2+3]);s.kind==="mask"&&o>2&&n.push(r[o*2-2],r[o*2-1],r[0],r[1])}}return n}function Yr(i,t,e,n,s,r=Fl){let o=t,a=e,l=n-t,c=s-e;for(let h=0;h<4;h++){const d=Math.hypot(l,c);if(d<1e-9)break;let u=1/0,f=0,g=0;for(let y=0;y<i.length;y+=4){const _=Nl(o,a,l,c,i[y],i[y+1],i[y+2],i[y+3]);_>1e-9&&_<u&&(u=_,f=i[y+2]-i[y],g=i[y+3]-i[y+1])}if(u*d>=d+r){o+=l,a+=c;break}const v=Math.max(0,u-r/d);o+=l*v,a+=c*v;const p=Math.hypot(f,g)||1,m=(l*(1-v)*f+c*(1-v)*g)/p;l=f/p*m,c=g/p*m}return[o,a]}function Is(i,t,e,n,s,r=Fl){const[o,a]=Yr(i,t,e,n,s,r);return Math.abs(o-n)<1e-6&&Math.abs(a-s)<1e-6}const ah=.2,lh=500;function Zx(i,t,e,n,s){if(Is(i,t,e,n,s))return[[t,e],[n,s]];const r=Math.max(6,Math.hypot(n-t,s-e)*.75),o=Math.min(t,n)-r,a=Math.max(t,n)+r,l=Math.min(e,s)-r,c=Math.max(e,s)+r,h=[];for(let C=0;C<i.length;C+=4){const T=Math.min(i[C],i[C+2]),A=Math.max(i[C],i[C+2]),P=Math.min(i[C+1],i[C+3]),D=Math.max(i[C+1],i[C+3]);A<o||T>a||D<l||P>c||h.push(i[C],i[C+1],i[C+2],i[C+3])}const d=new Set;let u=[];for(let C=0;C<h.length;C+=2){const T=h[C],A=h[C+1],P=`${T.toFixed(3)},${A.toFixed(3)}`;if(!d.has(P)){d.add(P);for(const[D,x]of[[1,1],[1,-1],[-1,1],[-1,-1]]){const E=T+D*ah,O=A+x*ah;E<o||E>a||O<l||O>c||Jx(h,E,O)||u.push([E,O])}}}if(u.length>lh){const C=(t+n)/2,T=(e+s)/2;u.sort((A,P)=>Math.hypot(A[0]-C,A[1]-T)-Math.hypot(P[0]-C,P[1]-T)),u=u.slice(0,lh)}const f=[[t,e],...u,[n,s]],g=f.length-1,v=f.length,p=new Float64Array(v).fill(1/0),m=new Int32Array(v).fill(-1),y=new Uint8Array(v);p[0]=0;const _=C=>Math.hypot(f[C][0]-n,f[C][1]-s);for(;;){let C=-1,T=1/0;for(let D=0;D<v;D++){if(y[D]||p[D]===1/0)continue;const x=p[D]+_(D);x<T&&(T=x,C=D)}if(C<0)return null;if(C===g)break;y[C]=1;const[A,P]=f[C];for(let D=0;D<v;D++){if(y[D])continue;const x=p[C]+Math.hypot(f[D][0]-A,f[D][1]-P);x>=p[D]||Is(h,A,P,f[D][0],f[D][1])&&(p[D]=x,m[D]=C)}}const S=[];for(let C=g;C>=0;C=m[C])S.push(f[C]);return S.reverse()}function Jx(i,t,e){for(let n=0;n<i.length;n+=4){const s=i[n],r=i[n+1],o=i[n+2]-s,a=i[n+3]-r,l=o*o+a*a,c=l>0?Math.max(0,Math.min(1,((t-s)*o+(e-r)*a)/l)):0;if(Math.hypot(s+o*c-t,r+a*c-e)<Fl*1.5)return!0}return!1}const ch=64;function Qx(i,t,e,n){const s=[],r=(n+.01)**2;for(let c=0;c<i.length;c+=4){const h=i[c],d=i[c+1],u=i[c+2],f=i[c+3],g=u-h,v=f-d,p=g*g+v*v,m=p>0?Math.max(0,Math.min(1,((t-h)*g+(e-d)*v)/p)):0,y=h+g*m-t,_=d+v*m-e;y*y+_*_<=r&&s.push(h,d,u,f)}const o=[];for(let c=0;c<ch;c++)o.push(c/ch*Math.PI*2-Math.PI);const a=1e-4;for(let c=0;c<s.length;c+=2){const h=Math.atan2(s[c+1]-e,s[c]-t);o.push(h-a,h,h+a)}o.sort((c,h)=>c-h);const l=[];for(const c of o){const h=Math.cos(c),d=Math.sin(c);let u=n;for(let f=0;f<s.length;f+=4){const g=Nl(t,e,h,d,s[f],s[f+1],s[f+2],s[f+3]);g<u&&(u=g)}l.push(t+h*u,e+d*u)}return l}function t_(i,t,e){const n=i.pts,s=n.length>>1;let r=1/0;const o=(a,l,c,h)=>{const d=c-a,u=h-l,f=d*d+u*u,g=f>0?Math.max(0,Math.min(1,((t-a)*d+(e-l)*u)/f)):0;r=Math.min(r,Math.hypot(a+d*g-t,l+u*g-e))};for(let a=0;a+1<s;a++)o(n[a*2],n[a*2+1],n[a*2+2],n[a*2+3]);return i.kind==="mask"&&s>2&&(o(n[s*2-2],n[s*2-1],n[0],n[1]),td(n,t,e))?0:r}function td(i,t,e){let n=!1;const s=i.length>>1;for(let r=0,o=s-1;r<s;o=r++){const a=i[r*2],l=i[r*2+1],c=i[o*2],h=i[o*2+1];l>e!=h>e&&t<(c-a)*(e-l)/(h-l)+a&&(n=!n)}return n}function hh(i){if(!i||typeof i!="object"||!jx.includes(i.kind)||!Array.isArray(i.pts))return null;const t=i.pts.slice(0,ls.coords);return t.length%2&&t.pop(),!t.every(e=>typeof e=="number"&&Number.isFinite(e)&&Math.abs(e)<=1e5)||t.length<(i.kind==="mask"?6:4)?null:{kind:i.kind,pts:t.map(e=>Math.round(e*100)/100)}}const e_=new Set(["name","size","rot","facing","shape","border","tint","layer","owner","hp","maxHp","hidden","asset","light","lightRange","status","mark"]),n_=new Set(["kind","snap","magnet","measure","unitPx","ox","oy","color","opacity","perUnit","unitLabel","distanceLabel"]);function uh(i,t){const e={};for(const n of Object.keys(i||{}))t.has(n)&&(e[n]=i[n]);return e}function dh(i,t){const e={};for(const n of Object.keys(t))e[n]=i[n];return e}const i_={"scene.add":(i,[t={}])=>{const e=t.id||Yi(i,"sc"),n={...Rx(e,t.name),...t,id:e};return i.scenes[e]=n,i.sceneOrder.push(e),i.activeScene||(i.activeScene=e),["scene.del",e]},"scene.del":(i,[t])=>{const e=i.scenes[t];return e?(delete i.scenes[t],i.sceneOrder=i.sceneOrder.filter(n=>n!==t),i.activeScene===t&&(i.activeScene=i.sceneOrder[0]||null),["scene.add",e]):null},"scene.activate":(i,[t])=>{if(!i.scenes[t]||i.activeScene===t)return null;const e=i.activeScene;return i.activeScene=t,["scene.activate",e]},"scene.copy":(i,[t,e])=>{var o;const n=i.scenes[t];if(!n)return null;const s=ph(i,"sc"),r=JSON.parse(JSON.stringify(n));r.id=s,r.name=typeof e=="string"&&e.trim()?e.trim():`${n.name} (copy)`,r.tokens={},r.tokenOrder=[];for(const a of n.tokenOrder){const l=n.tokens[a];if(!l||((o=i.roster[l.owner])==null?void 0:o.role)===ti)continue;const c={...JSON.parse(JSON.stringify(l)),id:ph(i,"tk")};r.tokens[c.id]=c,r.tokenOrder.push(c.id)}return i.scenes[s]=r,i.sceneOrder.splice(i.sceneOrder.indexOf(t)+1,0,s),["scene.del",s]},"scene.go":(i,[t,e=null,n=null])=>{var h;const s=Re(i),r=i.scenes[t];if(!s||!r||s.id===t)return null;const o=qa(r),a={};let l=0;for(const d of s.tokenOrder.slice()){const u=s.tokens[d];if(!u||((h=i.roster[u.owner])==null?void 0:h.role)!==ti)continue;a[d]={x:u.x,y:u.y},delete s.tokens[d],s.tokenOrder.splice(s.tokenOrder.indexOf(d),1);const f=u.x>=o.x0&&u.x<=o.x1&&u.y>=o.y0&&u.y<=o.y1,g=(e==null?void 0:e[d])||(f?null:o_(o,l++));g&&(u.x=g.x,u.y=g.y),r.tokens[d]=u,r.tokenOrder.push(d)}s.fx||(s.fx=Qi()),r.fx||(r.fx=Qi());const c={blackout:r.fx.blackout,transition:r.fx.transition};return r.fx.blackout=s.fx.blackout,r.fx.transition=s.fx.transition,n&&Object.assign(s.fx,n),i.activeScene=t,["scene.go",s.id,a,c]},"table.title":(i,[t])=>{const e=(typeof t=="string"?t:"").replace(/\s+/g," ").trim().slice(0,80);if(e===i.title)return null;const n=i.title;return i.title=e,["table.title",n]},"scene.rename":(i,[t,e])=>{const n=i.scenes[t];if(!n||n.name===e)return null;const s=n.name;return n.name=e,["scene.rename",t,s]},"scene.map":(i,[t,e,n,s])=>{const r=i.scenes[t];if(!r)return null;const o=["scene.map",t,r.map,r.artW,r.artH];return r.map=e||null,r.artW=n||0,r.artH=s||0,o},"scene.grid":(i,[t,e])=>{const n=i.scenes[t];if(!n)return null;const s=uh(e,n_);if(s.kind&&!ju.includes(s.kind)&&delete s.kind,s.snap&&!Fx.includes(s.snap)&&delete s.snap,"magnet"in s&&(s.magnet=Math.min(.25,Math.max(0,+s.magnet||0))),!Object.keys(s).length)return null;const r=dh(n.grid,s);return Object.assign(n.grid,s),["scene.grid",t,r]},"scene.fx":(i,[t,e])=>{const n=i.scenes[t];if(!n||!e||typeof e!="object")return null;n.fx||(n.fx=Qi());const s={};"weather"in e&&(s.weather=Wu.includes(e.weather)?e.weather:null),"darkness"in e&&(s.darkness=Math.round(Math.min(1,Math.max(0,+e.darkness||0))*100)/100),"intensity"in e&&(s.intensity=Math.round(Math.min(1,Math.max(.1,+e.intensity||.1))*100)/100),"blackout"in e&&(s.blackout=!!e.blackout),"transition"in e&&(s.transition=Ll.includes(e.transition)?e.transition:"fade");const r=Object.keys(s).filter(a=>n.fx[a]!==s[a]);if(!r.length)return null;const o=Object.fromEntries(r.map(a=>[a,n.fx[a]]));for(const a of r)n.fx[a]=s[a];return["scene.fx",t,o]},"block.add":(i,[t,e,n=null])=>{const s=i.scenes[t],r=hh(e);if(!s||!r||(s.blocks||(s.blocks=[]),s.blocks.length>=ls.perScene))return null;const o=typeof e.id=="string"&&e.id&&!s.blocks.some(l=>l.id===e.id)?e.id:Yi(i,"bk"),a=Number.isInteger(n)&&n>=0&&n<=s.blocks.length?n:s.blocks.length;return s.blocks.splice(a,0,{id:o,...r}),["block.del",t,o]},"block.del":(i,[t,e])=>{var o;const n=i.scenes[t],s=((o=n==null?void 0:n.blocks)==null?void 0:o.findIndex(a=>a.id===e))??-1;if(s<0)return null;const[r]=n.blocks.splice(s,1);return["block.add",t,r,s]},"block.set":(i,[t,e])=>{const n=i.scenes[t];if(!n||!Array.isArray(e))return null;const s=n.blocks||[],r=[];for(const o of e.slice(0,ls.perScene)){const a=hh(o);if(!a)continue;const l=typeof o.id=="string"&&o.id&&!r.some(c=>c.id===o.id)?o.id:Yi(i,"bk");r.push({id:l,...a})}return!s.length&&!r.length?null:(n.blocks=r,["block.set",t,s])},"tok.add":(i,[t={}])=>{const e=Re(i);if(!e)return null;const n=t.id||Yi(i,"tk"),s=Px(n,t);return s.id=n,Xa.includes(s.layer)||(s.layer="token"),e.tokens[n]=s,e.tokenOrder.push(n),["tok.del",n]},"tok.del":(i,[t])=>{const e=Re(i),n=e==null?void 0:e.tokens[t];if(!n)return null;const s=e.tokenOrder.indexOf(t);return delete e.tokens[t],e.tokenOrder.splice(s,1),["tok.restore",n,s]},"tok.restore":(i,[t,e])=>{const n=Re(i);return!n||!(t!=null&&t.id)?null:(n.tokens[t.id]=t,n.tokenOrder.splice(Math.min(e??n.tokenOrder.length,n.tokenOrder.length),0,t.id),["tok.del",t.id])},"tok.move":(i,[t,e,n])=>{const s=Re(i),r=s==null?void 0:s.tokens[t];if(!r||r.x===e&&r.y===n)return null;const o=["tok.move",t,r.x,r.y];return r.x=e,r.y=n,o},"tok.patch":(i,[t,e])=>{const n=Re(i),s=n==null?void 0:n.tokens[t];if(!s)return null;const r=uh(e,e_);if(r.layer&&!Xa.includes(r.layer)&&delete r.layer,"light"in r&&(r.light=!!r.light),"lightRange"in r&&(r.lightRange=r_(r.lightRange)),"status"in r&&(r.status=$u(r.status)),"mark"in r&&(r.mark=Xu(r.mark)),!Object.keys(r).length)return null;const o=dh(s,r);return Object.assign(s,r),["tok.patch",t,o]},"tok.raise":(i,[t,e=!0])=>{const n=Re(i);if(!(n!=null&&n.tokens[t]))return null;const s=n.tokenOrder.indexOf(t);if(s<0)return null;const r=n.tokenOrder.length-1;if(e?s===r:s===0)return null;const o=n.tokenOrder.slice();return n.tokenOrder.splice(s,1),e?n.tokenOrder.push(t):n.tokenOrder.unshift(t),["tok.order",o]},"tok.order":(i,[t])=>{const e=Re(i);if(!e)return null;const n=e.tokenOrder.slice();return e.tokenOrder=t.filter(s=>e.tokens[s]),["tok.order",n]},"asset.add":(i,[t])=>!(t!=null&&t.hash)||i.assets[t.hash]?null:(i.assets[t.hash]=t,["asset.del",t.hash]),"asset.del":(i,[t])=>{const e=i.assets[t];return e?(delete i.assets[t],["asset.add",e]):null},"dice.roll":(i,[t])=>kx(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"roll",...t}),oh(i.chat),["dice.drop",t.id]):null,"dice.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(o=>o.id===t);if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["dice.roll",r]},"chat.say":(i,[t])=>Ux(t)?(Array.isArray(i.chat)||(i.chat=[]),i.chat.push({kind:"msg",id:t.id,by:t.by,text:t.text,at:t.at}),oh(i.chat),["chat.drop",t.id]):null,"chat.drop":(i,[t])=>{const e=(i.chat||[]).findIndex(o=>o.id===t&&o.kind==="msg");if(e<0)return null;const[n]=i.chat.splice(e,1),{kind:s,...r}=n;return["chat.say",r]},"peer.join":(i,[t])=>{if(!(t!=null&&t.peerId))return null;const e=i.roster[t.peerId];return i.roster[t.peerId]=t,e?["peer.join",e]:["peer.part",t.peerId]},"peer.part":(i,[t])=>{const e=i.roster[t];return e?(delete i.roster[t],["peer.join",e]):null}};function s_(i,t){if(!Array.isArray(t)||!t.length)return null;const e=i_[t[0]];if(!e)return null;const n=e(i,t.slice(1));return n&&i.seq++,n}function jr(i,t,e,n){const s=Re(i),r=s==null?void 0:s.tokens[t];if(!r)return null;const[o,a]=Ul(e,n,s.grid,r.size);return["tok.move",t,fh(o),fh(a)]}const fh=i=>Math.round(i*100)/100;function r_(i){return Math.min(Dr,Math.max(1,Math.round(+i)||1))}function o_(i,t){const e=Math.floor((i.x0+i.x1)/2),n=Math.floor((i.y0+i.y1)/2);return{x:e+t%4-2+.5,y:n+Math.floor(t/4)+.5}}function ph(i,t){const e=s=>!!i.scenes[s]||Object.values(i.scenes).some(r=>r.tokens[s]);let n;do n=Yi(i,t);while(e(n));return n}const mh=6210279;class Ol{constructor({state:t=null,seed:e=null}={}){this.state=t?Ya(t):Vu(),this.seed=e??Ol.newSeed(),this.rng=new lo(this.seed),this.secretRng=new lo(ac(this.seed,mh)),this.secrets=[],this.events=new pf,this.undoStack=[],this.redoStack=[],this.maxUndo=200,this.simTime=0,this.leases=new Map,this.said=0}static newSeed(){return Math.random()*4294967296>>>0}get scene(){return Re(this.state)}get seq(){return this.state.seq}dispatch(t,{record:e=!0}={}){const n=this.applyOne(t);return n?(e&&(this.undoStack.push(n),this.undoStack.length>this.maxUndo&&this.undoStack.shift(),this.redoStack.length=0),this.events.emit("table.changed",[t[0],this.state.seq]),n):null}batch(t){const e=[];for(const n of t){const s=this.applyOne(n);s&&e.push(s)}return e.length?(this.undoStack.push(["batch",e.reverse()]),this.redoStack.length=0,this.events.emit("table.changed",["batch",this.state.seq]),e):null}applyOne(t){const e=s_(this.state,t);return e&&this.events.emitRemote("op",[t,this.state.seq]),e}load(t){this.state=Ya(t),this.secrets=[],this.undoStack.length=0,this.redoStack.length=0,this.leases.clear(),this.events.emitLocal("table.changed",["load",this.state.seq])}undo(){return this.flip(this.undoStack,this.redoStack)}redo(){return this.flip(this.redoStack,this.undoStack)}flip(t,e){const n=t.pop();if(!n)return null;const s=n[0]==="batch"?n[1].map(r=>this.applyOne(r)).filter(Boolean).reverse():this.applyOne(n);return s?(e.push(n[0]==="batch"?["batch",s]:s),this.events.emit("table.changed",[n[0],this.state.seq]),n):null}claim(t,e,n=6){const s=this.leases.get(t);return s&&s.by!==e&&s.until>this.simTime?!1:(this.leases.set(t,{by:e,until:this.simTime+n}),!0)}release(t,e){const n=this.leases.get(t);n&&n.by===e&&this.leases.delete(t)}heldBy(t){const e=this.leases.get(t);return e&&e.until>this.simTime?e.by:null}step(t){if(this.simTime+=t,this.leases.size)for(const[e,n]of this.leases)n.until<=this.simTime&&this.leases.delete(e)}rollDice(t,e,{hidden:n=!1}={}){const s=`r_${this.seed.toString(36)}_${this.rng.count}`,r=rh(this.rng,t,{id:s,by:e,hidden:n});return this.dispatch(["dice.roll",r],{record:!1}),r}rollSecret(t,e,n){var o;const s=`s_${this.seed.toString(36)}_${this.secretRng.count}`,r={...rh(this.secretRng,t,{id:s,by:e,hidden:!0}),at:n,after:((o=this.feed().at(-1))==null?void 0:o.id)??null};return this.secrets.push(r),this.secrets.length>as.keep&&this.secrets.shift(),r}restoreSecrets(t,e){this.secretRng=new lo(ac(this.seed,mh)),e&&this.secretRng.setState(e),this.secrets=Array.isArray(t)?t:[]}feedWithSecrets(){const t=this.feed();if(!this.secrets.length)return t;const e=new Set(t.map(r=>r.id)),n=[],s=r=>{for(const o of this.secrets)o.after===r&&n.push({kind:"roll",...o})};for(const r of this.secrets)r.after!==null&&!e.has(r.after)&&n.push({kind:"roll",...r});s(null);for(const r of t)n.push(r),s(r.id);return n}rolls(){return(this.state.chat||[]).filter(t=>t.kind==="roll")}say(t,e,n){const s=Yu(e);if(!s)return!1;const r=`m_${this.seed.toString(36)}_${this.said++}`;return this.dispatch(["chat.say",{id:r,by:t,text:s,at:Number.isFinite(n)?n:void 0}],{record:!1}),!0}feed(){return this.state.chat||[]}id(t){return Yi(this.state,t)}snapshot(){return JSON.parse(JSON.stringify(this.state))}}const In="v0.1.5";function gh(i){const t=/^v?(\d+)\.(\d+)\.(\d+)/.exec(i||"");return t?[+t[1],+t[2],+t[3]]:null}function Qa(i,t){const e=gh(i),n=gh(t);if(!e||!n)return(e?1:0)-(n?1:0);for(let s=0;s<3;s++)if(e[s]!==n[s])return e[s]-n[s];return 0}const tl=3,pn={name:32,members:16,peerId:64,version:48,need:256,req:32,upload:8*1024*1024},Bl=[12605771,14263361,6003669,10189528,6535316,14186655,5224624,11909199],el=Bl[0],zl=i=>typeof i=="string";function Kr(i,t="Player"){return(zl(i)?i.replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f]/g,"").trim():"").slice(0,pn.name)||t}function a_(i){return zl(i)&&i.length>0&&i.length<=pn.peerId}const l_=(i,t)=>({t:"hello",p:tl,v:In,name:Kr(i),gm:t?1:0});function c_(i){return!i||i.t!=="hello"?null:{protocol:Number.isInteger(i.p)?i.p:-1,version:zl(i.v)?i.v.slice(0,pn.version).replace(/[^\w.+-]/g,""):"",name:Kr(i.name),gm:i.gm===1}}function h_(i){return{t:"roster",r:i.slice(0,pn.members).map(t=>[t.peerId,t.name,t.role===Je?1:0,t.color])}}function u_(i){return!i||i.t!=="roster"||!Array.isArray(i.r)?null:i.r.slice(0,pn.members).filter(t=>Array.isArray(t)&&a_(t[0])).map(([t,e,n,s])=>({peerId:t,name:Kr(e),role:n===1?Je:ti,color:Number.isInteger(s)?s&16777215:Bl[0]}))}const d_=["full","protocol"];function f_(i){return!i||i.t!=="nope"?null:d_.includes(i.why)?i.why:"full"}function p_(i){if(!i||i.t!=="doc")return null;const t=i.s;return!t||typeof t!="object"||Array.isArray(t)||!Number.isInteger(t.seq)||t.seq<0||!t.scenes||typeof t.scenes!="object"?null:t}function m_(i){return!i||i.t!=="op"||!Number.isInteger(i.n)||i.n<1||!Array.isArray(i.c)||typeof i.c[0]!="string"?null:{seq:i.n,cmd:i.c}}const g_=/^[0-9a-f]{64}$/,Nr=i=>typeof i=="string"&&g_.test(i);function v_(i){return!i||i.t!=="need"||!Array.isArray(i.h)?[]:[...new Set(i.h.slice(0,pn.need).filter(Nr))]}function vh(i){return Array.isArray(i)?i.slice(0,pn.req).filter(t=>Array.isArray(t)&&typeof t[0]=="string"):[]}const x_="vtt",__=1;let Ms=null;function y_(){return Ms||(Ms=new Promise((i,t)=>{let e;try{e=indexedDB.open(x_,__)}catch(n){t(n);return}e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains("tables")||n.createObjectStore("tables",{keyPath:"id"}),n.objectStoreNames.contains("assets")||n.createObjectStore("assets",{keyPath:"hash"})},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}).catch(i=>(console.warn("[db] storage unavailable; tables will not be kept",i),Ms=null,null)),Ms)}async function ps(i,t,e,n=null){const s=await y_();return s?new Promise(r=>{let o;try{o=s.transaction(i,t)}catch{r(n);return}const a=e(o.objectStore(i));o.oncomplete=()=>r(a?a.result:!0),o.onerror=()=>r(n),o.onabort=()=>r(n)}):n}async function xh(){return(await ps("tables","readonly",t=>t.getAll(),[])||[]).map(({id:t,name:e,code:n,savedAt:s,tokens:r})=>({id:t,name:e,code:n,savedAt:s,tokens:r})).sort((t,e)=>e.savedAt-t.savedAt)}function ed(i){return ps("tables","readonly",t=>t.get(i))}function nd(i){return ps("tables","readwrite",t=>t.put(i),!1)}function M_(i){return ps("tables","readwrite",t=>t.delete(i),!1)}function _h(i,t){return ps("assets","readwrite",e=>e.put({hash:i,blob:t}),!1)}async function S_(i){const t=await ps("assets","readonly",e=>e.get(i));return(t==null?void 0:t.blob)||null}const b_=1200,Gs={minPeriod:12,maxPeriod:400,samples:600,scales:[1,2,3],minConfidence:.35};function w_(i,t,e){const n=new Float32Array(t*e);for(let s=0,r=0;s<n.length;s++,r+=4)n[s]=.299*i[r]+.587*i[r+1]+.114*i[r+2];return n}function E_(i,t,e,n,s={}){const{samples:r,scale:o=2}={...Gs,...s},a=n===0?t:e,l=n===0?e:t,c=new Float64Array(a),h=Math.max(1,Math.floor(l/r)),d=n===0?(u,f)=>i[f*t+u]:(u,f)=>i[u*t+f];for(let u=0;u<l;u+=h)for(let f=o;f<a-o;f++)c[f]+=2*d(f,u)-d(f-o,u)-d(f+o,u);return c}function id(i,t){const e=i.length,s=Math.max(3,t|1)>>1,r=new Float64Array(e);let o=0;for(let c=0;c<Math.min(s,e);c++)o+=i[c];let a=0,l=Math.min(s,e)-1;for(let c=0;c<e;c++){for(;l<Math.min(e-1,c+s);)o+=i[++l];for(;a<Math.max(0,c-s);)o-=i[a++];r[c]=i[c]-o/(l-a+1)}return r}function T_(i,t=1.6){let e=0;for(let r=0;r<i.length;r++)e+=i[r]*i[r];const n=t*Math.sqrt(e/Math.max(1,i.length));if(!(n>0))return i;const s=new Float64Array(i.length);for(let r=0;r<i.length;r++)s[r]=Math.max(-n,Math.min(n,i[r]));return s}function A_(i,t){const e=i.length-t;if(e<t*2)return 0;let n=0,s=0,r=0;for(let a=0;a<e;a++){const l=i[a],c=i[a+t];n+=l*c,s+=l*l,r+=c*c}const o=Math.sqrt(s*r);return o>0?n/o:0}function R_(i,t={}){const{minPeriod:e,maxPeriod:n}={...Gs,...t},s=Math.min(n,Math.floor(i.length/3));if(s<=e)return{period:0,score:0,prominence:0};const r=new Float64Array(s+2);for(let S=e;S<=s;S++)r[S]=A_(i,S);const o=s-e+1,a=id(r.subarray(e,s+1),Math.max(11,Math.round(o/6))),l=S=>S>=e&&S<=s?a[S-e]:-1/0;let c=e;for(let S=e;S<=s;S++)l(S)>l(c)&&(c=S);if(l(c)<=0)return{period:0,score:0,prominence:0};let h=0,d=0;for(let S=0;S<o;S++)h+=a[S],d+=a[S]*a[S];const u=h/o,f=Math.sqrt(Math.max(0,d/o-u*u)),g=f>0?(l(c)-u)/f:0,v=l(c-1),p=l(c),m=l(c+1),y=Number.isFinite(v)&&Number.isFinite(m)?v-2*p+m:0,_=y!==0?Math.max(-.5,Math.min(.5,.5*(v-m)/y)):0;return{period:c+_,score:r[c],prominence:g}}function C_(i,t,e){let n=0,s=0;for(let r=e;r<i.length-1;r+=t)n+=i[Math.round(r)],s++;return s<=2?0:Math.abs(n)/Math.sqrt(s)}function P_(i,t,e){let n=0,s=0,r=0;for(let l=e;l<i.length-1;l+=t,r++)r%2?s+=i[Math.round(l)]:n+=i[Math.round(l)];const o=Math.min(Math.abs(n),Math.abs(s)),a=Math.max(Math.abs(n),Math.abs(s));return a>0?o/a:0}function L_(i,t,e=.04){let n={period:t,offset:0,score:-1/0};const s=(a,l,c,h,d,u)=>{for(let f=a;f<=l;f+=c){const g=d===null?f:d;for(let v=h;v<g;v+=u){const p=C_(i,f,v);p>n.score&&(n={period:f,offset:v,score:p})}}};s(t*(1-e),t*(1+e),Math.max(.25,t/150),0,null,1);const r=n.period,o=n.offset;return s(r*.995,r*1.005,Math.max(.01,r/4e3),Math.max(0,o-1.5),o+1.5,.2),n}function I_(i,t,e,n={}){const s={...Gs,...n},r=Math.min(s.maxPeriod,Math.floor(Math.max(t,e)/8),Math.floor(Math.min(t,e)/2.5)),o={...s,maxPeriod:r},a=[];for(const T of[0,1])for(const A of s.scales){const P=id(E_(i,t,e,T,{...o,scale:A}),r*2),D=T_(P),x=R_(D,o);x.period>0&&a.push({...x,axis:T,scale:A,sig:D,raw:P})}const l={unitPx:0,ox:0,oy:0,confidence:0,readings:a.length,agreed:0,periods:[]};if(a.length<2)return l;const c=[];for(const T of a)for(const A of[1,2])for(let P=1;P<=6;P++){const D=T.period*A/P;D<s.minPeriod||D>r*2||c.some(x=>Math.abs(x-D)/D<.02)||c.push(D)}if(!c.length)return l;const h=T=>{const A=a.map(D=>L_(D.sig,T,.02)),P=A.reduce((D,x,E)=>D+x.score*P_(a[E].raw,x.period,x.offset),0);return{period:T,fits:A,total:P}};let d=null;for(const T of c){const A=h(T);(!d||A.total>d.total)&&(d=A)}const u=T=>d.fits.filter((P,D)=>a[D].axis===T).reduce((P,D)=>D.score>P.score?D:P),f=u(0),g=u(1),v=(f.period+g.period)/2,p=T=>[1,2,3,4].some(A=>Math.abs(T.period*A-v)/v<.03||Math.abs(T.period/A-v)/v<.03),m=a.filter(p),y=new Set(m.map(T=>T.axis)),_=(m.length-1)/(a.length-1),S=m.length?1-Math.exp(-(m.reduce((T,A)=>T+A.prominence,0)/m.length)/5):0,C=Math.max(0,_*S*(y.size===2?1:0));return{unitPx:v,ox:(f.offset%v+v)%v,oy:(g.offset%v+v)%v,confidence:C,readings:a.length,agreed:m.length,periods:a.map(T=>Math.round(T.period*100)/100)}}const D_=1200,yh={tolerance:28,voidLevel:36};function k_(i,t,e){const n=new Uint8ClampedArray(t*e*3);for(let s=0,r=0;s<t*e*4;s+=4,r+=3)n[r]=i[s],n[r+1]=i[s+1],n[r+2]=i[s+2];return{w:t,h:e,raw:n,soft:U_(i,t,e)}}function U_(i,t,e){const n=new Uint8ClampedArray(t*e*3);for(let s=0;s<e;s++)for(let r=0;r<t;r++){let o=0,a=0,l=0,c=0;for(let d=-1;d<=1;d++){const u=s+d;if(!(u<0||u>=e))for(let f=-1;f<=1;f++){const g=r+f;if(g<0||g>=t)continue;const v=(u*t+g)*4;o+=i[v],a+=i[v+1],l+=i[v+2],c++}}const h=(s*t+r)*3;n[h]=o/c,n[h+1]=a/c,n[h+2]=l/c}return n}function N_(i,t,e,n,s=0){const{w:r,h:o,raw:a,soft:l}=i;t=Math.max(0,Math.min(r-1,Math.round(t))),e=Math.max(0,Math.min(o-1,Math.round(e)));const c=(e*r+t)*3,h=l[c],d=l[c+1],u=l[c+2],f=n*n,g=(y,_)=>{const S=y[_]-h,C=y[_+1]-d,T=y[_+2]-u;return S*S+C*C+T*T<=f},v=new Uint8Array(r*o);for(let y=0;y<r*o;y++)v[y]=g(a,y*3)||g(l,y*3)?1:0;const p=s>0?sd(rd(v,r,o,s),r,o,s):v,m=new Uint8Array(r*o);return Gl(m,r,o,[e*r+t],y=>p[y]===1),m}function F_(i,t){const{w:e,h:n,raw:s,soft:r}=i,o=new Uint8Array(e*n),a=(h,d)=>.299*h[d]+.587*h[d+1]+.114*h[d+2],l=h=>a(s,h*3)<=t||a(r,h*3)<=t,c=[];for(let h=0;h<e;h++)c.push(h,(n-1)*e+h);for(let h=0;h<n;h++)c.push(h*e,h*e+e-1);return Gl(o,e,n,c.filter(l),l),o}function O_(i,t,e,n){if(n<1)return i;const s=rd(sd(i,t,e,n),t,e,n),r=new Uint8Array(t*e),o=[];for(let a=0;a<t;a++)o.push(a,(e-1)*t+a);for(let a=0;a<e;a++)o.push(a*t,a*t+t-1);return Gl(r,t,e,o.filter(a=>s[a]),a=>s[a]===1),r}function sd(i,t,e,n){return od(i,t,e,n,!0)}function rd(i,t,e,n){return od(i,t,e,n,!1)}function od(i,t,e,n,s){const r=(a,l,c,h)=>{const d=new Uint8Array(t*e);for(let u=0;u<c;u++){let f=0;const g=s?1:0;for(let v=-n;v<=n;v++)f+=v<0||v>=l?g:a[h(u,v)];for(let v=0;v<l;v++){const p=s?f===2*n+1:f>0;d[h(u,v)]=p?1:0;const m=v-n,y=v+n+1;f-=m<0?g:a[h(u,m)],f+=y>=l?g:a[h(u,y)]}}return d},o=r(i,t,e,(a,l)=>a*t+l);return r(o,e,t,(a,l)=>l*t+a)}function Gl(i,t,e,n,s){const r=[];for(const o of n)i[o]||(i[o]=1,r.push(o));for(;r.length;){const o=r.pop(),a=o%t,l=c=>{!i[c]&&s(c)&&(i[c]=1,r.push(c))};a>0&&l(o-1),a<t-1&&l(o+1),o>=t&&l(o-t),o<t*(e-1)&&l(o+t)}}function B_(i,t,e,n){const s=i.slice();for(const r of nl(s,t,e,0))if(!r.edge&&r.pixels.length<n)for(const o of r.pixels)s[o]=1;for(const r of nl(s,t,e,1))if(r.pixels.length<n)for(const o of r.pixels)s[o]=0;return s}function nl(i,t,e,n){const s=new Uint8Array(t*e),r=[],o=[];for(let a=0;a<t*e;a++){if(s[a]||i[a]!==n)continue;const l=[];let c=!1;for(s[a]=1,o.push(a);o.length;){const h=o.pop();l.push(h);const d=h%t,u=(h-d)/t;(d===0||u===0||d===t-1||u===e-1)&&(c=!0);const f=g=>{!s[g]&&i[g]===n&&(s[g]=1,o.push(g))};d>0&&f(h-1),d<t-1&&f(h+1),u>0&&f(h-t),u<e-1&&f(h+t)}r.push({pixels:l,edge:c})}return r}function z_(i,t,e,n=1){const s=t+1,r=new Map,o=G_(i,t,e),a=(f,g,v,p,m)=>{const y=g*s+f;let _=r.get(y);_||r.set(y,_=[]),_.push({to:p*s+v,dx:v-f,dy:p-g,lab:m,used:!1})},l=(f,g)=>f>=0&&g>=0&&f<t&&g<e?i[g*t+f]:-1;for(let f=0;f<e;f++)for(let g=0;g<t;g++){if(!i[f*t+g])continue;const v=o[f*t+g];l(g,f-1)===0&&a(g,f,g+1,f,v),l(g+1,f)===0&&a(g+1,f,g+1,f+1,v),l(g,f+1)===0&&a(g+1,f+1,g,f+1,v),l(g-1,f)===0&&a(g,f+1,g,f,v)}const c=new Map;for(const f of r.values())for(const g of f)c.set(g.to,(c.get(g.to)||0)+1);const h=(f,g)=>{const v=[f%s,Math.floor(f/s)];let p=g;for(;;){p.used=!0,v.push(p.to%s,Math.floor(p.to/s));const m=(r.get(p.to)||[]).filter(S=>!S.used);if(!m.length)break;const y=m.find(S=>S.dx===-p.dy&&S.dy===p.dx),_=m.find(S=>S.dx===p.dx&&S.dy===p.dy);p=y||_||m[0]}return v},d=[];for(const[f,g]of r)if(!c.get(f))for(const v of g)v.used||d.push({closed:!1,lab:v.lab,pts:h(f,v)});for(const[f,g]of r)for(const v of g)v.used||d.push({closed:!0,lab:v.lab,pts:h(f,v)});const u=new Set;for(const f of d)(!f.closed||Mh(f.pts)<0)&&u.add(f.lab);return d.map(f=>{const g=f.closed?H_(f.pts,n):il(f.pts,n);return{closed:f.closed,solid:f.closed&&!u.has(f.lab)&&Mh(f.pts)>0,pts:g}}).filter(f=>f.pts.length>=(f.closed?8:4))}function G_(i,t,e){const n=new Int32Array(t*e);let s=0;for(const r of nl(i,t,e,1)){s++;for(const o of r.pixels)n[o]=s}return n}function Mh(i){let t=0;const e=i.length>>1;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t}function il(i,t){const e=i.length>>1;if(e<3)return i.slice();const n=new Uint8Array(e);n[0]=1,n[e-1]=1;const s=[[0,e-1]];for(;s.length;){const[o,a]=s.pop(),l=i[o*2],c=i[o*2+1],h=i[a*2]-l,d=i[a*2+1]-c,u=Math.hypot(h,d);let f=-1,g=t;for(let v=o+1;v<a;v++){const p=u>1e-9?Math.abs((i[v*2]-l)*d-(i[v*2+1]-c)*h)/u:Math.hypot(i[v*2]-l,i[v*2+1]-c);p>g&&(g=p,f=v)}f>=0&&(n[f]=1,s.push([o,f],[f,a]))}const r=[];for(let o=0;o<e;o++)n[o]&&r.push(i[o*2],i[o*2+1]);return r}function H_(i,t){const e=(i.length>>1)-1;if(e<4)return i.slice();let n=0;for(let l=1;l<e;l++)(i[l*2]<i[n*2]||i[l*2]===i[n*2]&&i[l*2+1]<i[n*2+1])&&(n=l);if(n){const l=i.slice(0,e*2);i=l.slice(n*2).concat(l.slice(0,n*2),l.slice(n*2,n*2+2))}let s=1,r=-1;for(let l=1;l<e;l++){const c=Math.hypot(i[l*2]-i[0],i[l*2+1]-i[1]);c>r&&(r=c,s=l)}const o=il(i.slice(0,s*2+2),t),a=il(i.slice(s*2),t);return o.concat(a.slice(2))}async function Hs(i){const t=await crypto.subtle.digest("SHA-256",i);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}function Fr(i){return/^video\//.test((i==null?void 0:i.type)||"")||/\.(webm|mp4|m4v)$/i.test((i==null?void 0:i.name)||"")}function V_(i){return Fr(i)?W_(i):ld(i)}function Hl(i){const t=document.createElement("video");return t.muted=!0,t.loop=!0,t.playsInline=!0,t.preload="auto",t.src=URL.createObjectURL(i),new Promise((e,n)=>{const s=setTimeout(()=>{Ds(t),n(new Error("timed out"))},15e3);t.addEventListener("loadeddata",()=>{clearTimeout(s),e(t)},{once:!0}),t.addEventListener("error",()=>{clearTimeout(s),Ds(t),n(new Error("unplayable"))},{once:!0})})}function Ds(i){i.pause(),i.src.startsWith("blob:")&&URL.revokeObjectURL(i.src),i.removeAttribute("src"),i.load()}async function ad(i,t){const e=await Hl(i);try{return await createImageBitmap(e,t)}finally{Ds(e)}}async function W_(i){var d;const t=It.assets;if(i.size>t.maxVideoBytes)throw new Error(`${i.name} is ${Or(i.size)}MB — a moving map can be at most ${Or(t.maxVideoBytes)}MB, since it goes to every player`);let e;try{e=await Hl(i)}catch{throw new Error(`${i.name} is not a video this browser can play`)}const n=e.videoWidth,s=e.videoHeight;let r=null;try{r=await createImageBitmap(e)}catch{}Ds(e);const o=await i.arrayBuffer(),a=await Hs(o),l=i.type||(/\.(mp4|m4v)$/i.test(i.name)?"video/mp4":"video/webm"),c=i.type?i:new Blob([o],{type:l}),h=r?await Vl(r,n):null;return(d=r==null?void 0:r.close)==null||d.call(r),{hash:a,name:i.name,mime:l,w:n,h:s,size:i.size,scaled:!1,bytes:o,blob:c,detected:h}}async function ld(i){var u,f;const t=It.assets;if(i.size>t.maxBytes)throw new Error(`${i.name} is ${Or(i.size)}MB — the limit is ${Or(t.maxBytes)}MB`);let e;try{e=await createImageBitmap(i)}catch{throw new Error(`${i.name} is not an image the browser can decode`)}const n=e.width,s=e.height,r=Math.max(n,s);let o=i,a=i.type||"image/png",l=!1;if(r>t.maxEdge){const g=t.maxEdge/r,v=Math.max(1,Math.round(n*g)),p=Math.max(1,Math.round(s*g)),m=await X_(e,v,p,t.quality);(u=e.close)==null||u.call(e),e=await createImageBitmap(m),o=m,a=m.type||"image/webp",l=!0}const c=await o.arrayBuffer(),h=await Hs(c),d=await Vl(e,n);return(f=e.close)==null||f.call(e),{hash:h,name:i.name,mime:a,w:n,h:s,size:c.byteLength,scaled:l,bytes:c,blob:o,detected:d}}async function X_(i,t,e,n){if(typeof OffscreenCanvas=="function"){const o=new OffscreenCanvas(t,e),a=o.getContext("2d");return a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.drawImage(i,0,0,t,e),o.convertToBlob({type:"image/webp",quality:n})}const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");return r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(i,0,0,t,e),new Promise((o,a)=>{s.toBlob(l=>l?o(l):a(new Error("could not re-encode the image")),"image/webp",n)})}function Or(i){return(i/1048576).toFixed(1)}async function $_(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`Could not read ${t} (${e.status})`);const n=await e.blob(),s=/\.webm$/i.test(t)?"video/webm":/\.(mp4|m4v)$/i.test(t)?"video/mp4":"image/jpeg";return new File([n],t,{type:n.type||s})}async function q_(){try{const i=await fetch("maps/index.json");if(!i.ok)return[];const{maps:t}=await i.json();return Array.isArray(t)?t:[]}catch{return[]}}async function Vl(i,t){const e=Math.min(1,b_/i.width),n=Math.max(1,Math.round(i.width*e)),s=Math.max(1,Math.round(i.height*e)),r=await cd(i,n,s);if(!r)return null;const o=I_(w_(r,n,s),n,s);if(!o.unitPx)return null;const a=t/n;return{unitPx:o.unitPx*a,ox:o.ox*a,oy:o.oy*a,confidence:o.confidence,agreed:o.agreed,readings:o.readings}}async function cd(i,t,e){try{const s=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(t,e):Object.assign(document.createElement("canvas"),{width:t,height:e})).getContext("2d",{willReadFrequently:!0});return s.drawImage(i,0,0,t,e),s.getImageData(0,0,t,e).data}catch{return null}}async function Y_(i){var a;let t;try{t=Fr(i)?await ad(i):await createImageBitmap(i)}catch{return null}const e=Math.min(1,D_/t.width),n=Math.max(1,Math.round(t.width*e)),s=Math.max(1,Math.round(t.height*e)),r=await cd(t,n,s),o=t.width;return(a=t.close)==null||a.call(t),r?{pic:k_(r,n,s),scale:o/n,imageW:o}:null}function hd(i){const{hash:t,name:e,mime:n,w:s,h:r,size:o,scaled:a}=i;return{hash:t,name:e,mime:n,w:s,h:r,size:o,scaled:a}}class j_{constructor(){this.blobs=new Map,this.bitmaps=new Map,this.pending=new Map,this.videos=new Map}isVideo(t){return Fr(this.blobs.get(t))}video(t){const e=this.videos.get(t);if(e)return e;const n=this.blobs.get(t);if(!n)return Promise.resolve(null);const s=Hl(n).then(r=>(r.addEventListener("ended",()=>{r.currentTime=0,r.play().catch(()=>{})}),r)).catch(()=>(this.videos.delete(t),null));return this.videos.set(t,s),s}has(t){return this.blobs.has(t)}async put(t){return this.blobs.set(t.hash,t.blob),this.bitmaps.delete(t.hash),_h(t.hash,t.blob),t.hash}async putBytes(t,e){return this.blobs.set(t,e),this.bitmaps.delete(t),_h(t,e),t}async restore(t){const e=[];return await Promise.all(t.map(async n=>{if(this.blobs.has(n))return;const s=await S_(n);s?this.blobs.set(n,s):e.push(n)})),e}async blob(t){return this.blobs.get(t)||null}async bitmap(t){if(!t)return null;const e=this.bitmaps.get(t);if(e)return e;const n=this.pending.get(t);if(n)return n;const s=this.blobs.get(t);if(!s)return null;const r=(Fr(s)?ad(s,{imageOrientation:"flipY"}):createImageBitmap(s,{imageOrientation:"flipY"})).then(o=>(this.bitmaps.set(t,o),this.pending.delete(t),o)).catch(()=>(this.pending.delete(t),null));return this.pending.set(t,r),r}missing(t){const e=new Set;for(const n of Object.values(t.scenes||{})){n.map&&e.add(n.map);for(const s of Object.values(n.tokens||{}))s.asset&&e.add(s.asset)}return[...e].filter(n=>!this.blobs.has(n))}trimBitmaps(t){var n;const e=new Set;for(const s of Object.values(t.scenes||{})){s.map&&e.add(s.map);for(const r of Object.values(s.tokens||{}))r.asset&&e.add(r.asset)}for(const[s,r]of this.videos)e.has(s)||(this.videos.delete(s),r.then(o=>o&&Ds(o)));for(const[s,r]of this.bitmaps)e.has(s)||((n=r.close)==null||n.call(r),this.bitmaps.delete(s))}}function Er(i){return(i.size||1)/2+(i.lightRange??2)}function K_(i,t,e){const n=i.filter(a=>a.light),s=i.filter(a=>a.owner&&a.owner===t),r=new Set,o=[];for(const a of n){const l=a.owner&&a.owner===t,c=s.some(h=>Math.hypot(h.x-a.x,h.y-a.y)<=Er(a)&&!Ja(e,a.x,a.y,h.x,h.y));(l||c)&&(r.add(a.id),o.push(a))}for(;o.length;){const a=o.pop();for(const l of n)r.has(l.id)||Math.hypot(a.x-l.x,a.y-l.y)<=Er(a)+Er(l)&&!Ja(e,a.x,a.y,l.x,l.y)&&(r.add(l.id),o.push(l))}return r}const Sh=.85;function Z_(i,t,e,n,s){if(t<Sh)return i;const r=i.filter(o=>o.light&&n.has(o.id));return i.filter(o=>{if(o.owner&&o.owner===e)return!0;let a=0;for(const l of r){if(Ja(s,l.x,l.y,o.x,o.y))continue;const c=Er(l),h=Math.hypot(o.x-l.x,o.y-l.y);if(a=Math.max(a,h<=c?1:Math.max(0,1-(h-c)/.6)),a>=1)break}return t*(1-a)<Sh})}const ei={map:0,grid:.01,bg:.02,dragOrigin:.03,token:.04,ruler:.07,gm:.06,ghost:.08,ui:.1};function yi(i){return-i}function ud(i){return-i}function J_(i,t,e){return(ei[i]??ei.token)+t*e}class Q_{constructor(){this.camera=new El(-1,1,1,-1,.01,100),this.camera.position.set(0,0,10),this.viewUnits=It.camera.viewUnits,this.aspect=1,this.bounds=null}resize(t,e){this.aspect=e>0?t/e:1,this.apply()}apply(){const t=this.viewUnits/2,e=t*this.aspect,n=this.camera;n.left=-e,n.right=e,n.top=t,n.bottom=-t,n.updateProjectionMatrix()}toWorld(t,e,n=new Bt){const s=this.viewUnits/2;return n.set(this.camera.position.x+t*s*this.aspect,this.camera.position.y+e*s)}toUnits(t,e,n=new Bt){return this.toWorld(t,e,n),n.y=ud(n.y),n}toNdc(t,e,n=new Bt){const s=this.viewUnits/2;return n.set((t-this.camera.position.x)/(s*this.aspect),(e-this.camera.position.y)/s)}pxPerUnit(t){return t/this.viewUnits}panBy(t,e){this.camera.position.x+=t,this.camera.position.y+=e,this.clamp()}zoomAt(t,e,n){const s=It.camera,r=this.toWorld(e,n,ty);this.viewUnits=Math.min(s.maxViewUnits,Math.max(s.minViewUnits,this.viewUnits*t)),this.apply();const o=this.toWorld(e,n,ey);this.camera.position.x+=r.x-o.x,this.camera.position.y+=r.y-o.y,this.clamp()}frame({x0:t,y0:e,x1:n,y1:s},r=1.04,o=0){const a=Math.max(.001,n-t),l=Math.max(.001,s-e),c=Math.max(.5,1-o),h=It.camera,d=Math.max(l,a/Math.max(.001,this.aspect*c))*r;this.viewUnits=Math.min(h.maxViewUnits,Math.max(h.minViewUnits,d)),this.camera.position.x=(t+n)/2-(1-c)/2*this.viewUnits*this.aspect,this.camera.position.y=-(e+s)/2,this.apply(),this.clamp()}clamp(){if(!this.bounds)return;const t=It.camera.panMargin,e=this.viewUnits/2,n=e*this.aspect,s=this.bounds,r=s.x0-t+n,o=s.x1+t-n,a=-s.y1-t+e,l=-s.y0+t-e,c=this.camera.position;c.x=r>o?(s.x0+s.x1)/2:Math.min(o,Math.max(r,c.x)),c.y=a>l?-(s.y0+s.y1)/2:Math.min(l,Math.max(a,c.y))}}const ty=new Bt,ey=new Bt;class ny{constructor(t,e){this.renderer=e,this.material=new bi({color:16777215,transparent:!1}),this.mesh=new Ee(new Mn(1,1),this.material),this.mesh.position.z=ei.map,this.mesh.visible=!1,t.add(this.mesh),this.hash=null,this.texture=null,this.blank=new Ee(new Mn(1,1),new bi({color:1712671})),this.blank.position.z=ei.map,t.add(this.blank)}update(t,e,n){var c;const s=(t==null?void 0:t.map)||null;s!==this.hash&&(this.hash=s,this.setTexture(null),this.loading=!1),(c=this.video)!=null&&c.paused&&this.texture&&this.video.play().catch(()=>{}),s&&!this.texture&&!this.loading&&n.has(s)&&(this.loading=!0,(n.isVideo(s)?n.video(s):n.bitmap(s)).then(d=>{this.hash===s&&(d?this.setTexture(d):this.loading="failed")}));const r=Math.max(.001,e.x1-e.x0),o=Math.max(.001,e.y1-e.y0),a=(e.x0+e.x1)/2,l=-(e.y0+e.y1)/2;for(const h of[this.mesh,this.blank])h.scale.set(r,o,1),h.position.x=a,h.position.y=l;this.mesh.visible=!!this.texture,this.blank.visible=!this.texture}setTexture(t){var n,s;if((n=this.texture)==null||n.dispose(),(s=this.video)==null||s.pause(),this.video=null,typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement){const r=new xx(t);r.colorSpace=Fe,r.minFilter=Ce,r.magFilter=Ce,r.generateMipmaps=!1,this.video=t,t.play().catch(()=>{}),this.texture=r,this.material.map=r,this.material.needsUpdate=!0;return}if(!t){this.texture=null,this.material.map=null,this.material.needsUpdate=!0;return}const e=new Te(t);e.colorSpace=Fe,e.flipY=!1,e.generateMipmaps=!0,e.minFilter=Un,e.magFilter=Ce,e.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),e.needsUpdate=!0,this.texture=e,this.material.map=e,this.material.needsUpdate=!0}dispose(){this.setTexture(null),this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent(),this.blank.geometry.dispose(),this.blank.material.dispose(),this.blank.removeFromParent()}}const iy={[Dl]:0,[kl]:1,[zs]:2,[fs]:3},sy=`
  varying vec2 vUnit;
  void main() {
    // The quad is placed and scaled in world space; unit space is that with y
    // flipped, which is the one conversion this whole view agrees on.
    vec4 world = modelMatrix * vec4(position, 1.0);
    vUnit = vec2(world.x, -world.y);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,ry=`
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
`;class oy{constructor(t){this.material=new fn({vertexShader:sy,fragmentShader:ry,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Vt(It.grid.color)},uOpacity:{value:It.grid.opacity},uWidth:{value:It.grid.lineWidth},uKind:{value:0}}}),this.mesh=new Ee(new Mn(1,1),this.material),this.mesh.position.z=ei.grid,this.mesh.visible=!1,t.add(this.mesh)}update(t,e){if(!t||t.grid.kind===fs){this.mesh.visible=!1;return}const n=t.grid,s=this.material.uniforms;s.uKind.value=iy[n.kind]??0,s.uColor.value.setHex(n.color??It.grid.color),s.uOpacity.value=n.opacity??It.grid.opacity,s.uWidth.value=It.grid.lineWidth;const r=Math.max(.001,e.x1-e.x0),o=Math.max(.001,e.y1-e.y0);this.mesh.scale.set(r,o,1),this.mesh.position.x=(e.x0+e.x1)/2,this.mesh.position.y=-(e.y0+e.y1)/2,this.mesh.visible=!0}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.removeFromParent()}}const Wl={downed:{label:"Downed",color:"#ffcc80",svg:'<path d="M12 4v10M7.5 9.5 12 14l4.5-4.5"/><path d="M5 19.5h14"/>'},dead:{label:"Dead",color:"#ff8a80",svg:'<path d="M12 3.5a7 7 0 0 0-7 7c0 2.4 1.2 4.1 3 5.2v3.8h8v-3.8c1.8-1.1 3-2.8 3-5.2a7 7 0 0 0-7-7z"/><circle cx="9.3" cy="11" r="1.4" fill="currentColor"/><circle cx="14.7" cy="11" r="1.4" fill="currentColor"/><path d="M10.5 19.5v-2.5M13.5 19.5v-2.5"/>'},poisoned:{label:"Poisoned",color:"#aed581",svg:'<path d="M10 3.5h4M10.5 3.5v5.2L6 17a2.3 2.3 0 0 0 2 3.5h8a2.3 2.3 0 0 0 2-3.5l-4.5-8.3V3.5"/><path d="M8 15h8"/>'},stunned:{label:"Stunned",color:"#ffe082",svg:'<path d="M12 12a1.5 1.5 0 1 1 1.5 1.5 3 3 0 1 1-3-3 4.5 4.5 0 1 1 4.5 4.5 6 6 0 1 1-6-6"/>'},asleep:{label:"Asleep",color:"#90caf9",svg:'<path d="M4.5 6.5h5l-5 6h5M13 11.5h6.5l-6.5 8h6.5"/>'},prone:{label:"Prone",color:"#d7ccc8",svg:'<circle cx="5.5" cy="12.5" r="2"/><path d="M8.5 13h11M3 17.5h18M11 13l2-3"/>'},restrained:{label:"Restrained",color:"#b0bec5",svg:'<rect x="2.5" y="9" width="10.5" height="6" rx="3"/><rect x="11" y="9" width="10.5" height="6" rx="3"/>'},blinded:{label:"Blinded",color:"#cfd8dc",svg:'<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/><path d="M4 4l16 16"/>'},frightened:{label:"Frightened",color:"#ce93d8",svg:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5.5M12 16.4v.1"/>'},charmed:{label:"Charmed",color:"#f48fb1",svg:'<path d="M12 19.5s-7-4.4-7-9.7a3.9 3.9 0 0 1 7-2.4 3.9 3.9 0 0 1 7 2.4c0 5.3-7 9.7-7 9.7z"/>'},burning:{label:"Burning",color:"#ffab40",svg:'<path d="M12 3c1 3.2 4.5 5.2 4.5 9.5a4.5 4.5 0 0 1-9 0c0-2.2 1-3.6 2.2-4.6 0 2 .9 3.2 2.1 3.2 0-3.3-.9-5.4.2-8.1z"/>'},bleeding:{label:"Bleeding",color:"#ef5350",svg:'<path d="M12 3.5c3 4.4 6 7.4 6 11a6 6 0 0 1-12 0c0-3.6 3-6.6 6-11z" fill="currentColor" fill-opacity="0.35"/>'},concentrating:{label:"Concentrating",color:"#80deea",svg:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>'},invisible:{label:"Invisible",color:"#eeeeee",svg:'<path d="M6 20V10.5a6 6 0 0 1 12 0V20l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5z" stroke-dasharray="2.2 2"/><circle cx="10" cy="11" r=".9" fill="currentColor"/><circle cx="14" cy="11" r=".9" fill="currentColor"/>'}};function dd(i){const t=Wl[i];return t?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color:${t.color}">${t.svg}</svg>`:""}function ay(i){return i!=null&&i.includes("dead")?{grey:1,dim:.5}:i!=null&&i.includes("downed")?{grey:.6,dim:.75}:{grey:0,dim:1}}const ly=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,cy=`
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
`,bh=1.3,hy=new Mn(1,1),hn=new N,uy=fd([0,.34],[0,-.34],[1,0]),dy=fd([-.09,.46],[-.09,-.46],[1.16,0]);function fd(i,t,e){const n=new Sn;return n.setAttribute("position",new Xe([i[0],i[1],0,t[0],t[1],0,e[0],e[1],0],3)),n}class ks extends Ex{constructor(t){super(t,{rotates:!1}),this.material=new fn({vertexShader:ly,fragmentShader:cy,transparent:!0,depthWrite:!1,uniforms:{uMap:{value:null},uHasMap:{value:0},uTint:{value:new Vt(16777215)},uBorder:{value:new Vt(It.tokens.defaultBorder)},uRing:{value:It.tokens.ring},uSelected:{value:0},uHover:{value:0},uSpeak:{value:0},uGrey:{value:0},uDim:{value:1},uShape:{value:0},uAlpha:{value:1},uRingAlpha:{value:1},uRadius:{value:1/bh},uFit:{value:new Bt(1,1)}}}),this.mesh=new Ee(hy,this.material),this.root.add(this.mesh),this.arrowEdge=new Ee(dy,new bi({color:659984,transparent:!0,depthWrite:!1})),this.arrow=new Ee(uy,new bi({color:It.tokens.defaultBorder,transparent:!0,depthWrite:!1})),this.arrowEdge.visible=!1,this.arrow.visible=!1,this.root.add(this.arrowEdge,this.arrow),this.hash=null,this.texture=null,this.placed=!1,this.from=new Bt,this.to=new Bt,this.t=0,this.dur=0}get sliding(){return this.t<this.dur}static worldOf(t,e,n=hn){return n.set(t.x,yi(t.y),e)}sync(t,e,n){if(ks.worldOf(t,n.z,hn),!this.placed)return this.snap(t,e,n);if(hn.x!==this.to.x||hn.y!==this.to.y){const s=It.tokens.slide;this.from.set(this.root.position.x,this.root.position.y),this.to.set(hn.x,hn.y);const r=this.from.distanceTo(this.to);this.t=0,this.dur=r<1e-4?0:Math.min(s.max,Math.max(s.min,r/s.speed))}if(this.t<this.dur){this.t=Math.min(this.dur,this.t+e);const s=fy(this.t/this.dur);this.root.position.set(this.from.x+(this.to.x-this.from.x)*s,this.from.y+(this.to.y-this.from.y)*s,n.z)}else this.root.position.copy(hn);this.animate(e,t),this.paint(t,n)}snap(t,e,n){ks.worldOf(t,n.z,hn),this.root.position.copy(hn),this.to.set(hn.x,hn.y),this.t=this.dur=0,this.placed=!0,this.animate(e,t),this.paint(t,n)}animate(t){const e=this.speakTarget||0,n=this.speak||0,s=e>n?14:7;this.speak=n+(e-n)*Math.min(1,t*s),Math.abs(e-this.speak)<.01&&(this.speak=e)}paint(t,e){const n=this.material.uniforms;if((t.asset||null)!==this.hash&&(this.hash=t.asset||null,this.setTexture(null,1,1),this.loading=!1),this.hash&&!this.loading&&!this.texture&&e.library.has(this.hash)){const a=this.hash;this.loading=!0,e.library.bitmap(a).then(l=>{this.hash===a&&(l?this.setTexture(l,l.width,l.height):this.loading="failed")})}const s=Math.max(.05,t.size)*bh;this.mesh.scale.set(s,s,1),this.mesh.rotation.z=-(t.rot||0),this.placeArrow(t,e),n.uTint.value.setHex(t.tint??16777215),n.uBorder.value.setHex(t.border??It.tokens.defaultBorder),n.uRing.value=It.tokens.ring,n.uShape.value=t.shape==="square"?1:0;const r=ay(t.status);n.uGrey.value=r.grey,n.uDim.value=r.dim,n.uSelected.value=e.selected?1:0,n.uHover.value=e.hovered?1:0,this.speakTarget=e.speaking?1:0,n.uSpeak.value=this.speak||0;const o=t.hidden?.45:1;n.uAlpha.value=o*(e.alpha??1),n.uRingAlpha.value=o*(e.ringAlpha??e.alpha??1)}placeArrow(t,e){const n=typeof t.facing=="number"&&Number.isFinite(t.facing);if(this.arrow.visible=n,this.arrowEdge.visible=n,!n)return;const s=It.tokens.arrow,r=Math.max(.05,t.size),o=r*s.length,a=r/2+r*s.gap,l=-t.facing,c=Math.cos(l)*a,h=Math.sin(l)*a,d=(t.hidden?.45:1)*(e.alpha??1);for(const[u,f,g]of[[this.arrowEdge,o,d*s.edgeAlpha],[this.arrow,o,d*s.alpha]])u.position.set(c,h,.001),u.rotation.z=l,u.scale.set(f,f,1),u.material.opacity=g;this.arrow.material.color.setHex(t.border??It.tokens.defaultBorder)}setTexture(t,e,n){var a;(a=this.texture)==null||a.dispose();const s=this.material.uniforms;if(!t){this.texture=null,s.uMap.value=null,s.uHasMap.value=0;return}const r=new Te(t);r.colorSpace=Fe,r.flipY=!1,r.generateMipmaps=!0,r.minFilter=Un,r.magFilter=Ce,r.needsUpdate=!0,this.texture=r,s.uMap.value=r,s.uHasMap.value=1;const o=e/Math.max(1,n);s.uFit.value.set(Math.min(1,1/o),Math.min(1,o))}dispose(){var t;(t=this.texture)==null||t.dispose(),this.material.dispose(),this.arrow.material.dispose(),this.arrowEdge.material.dispose(),super.dispose()}}function fy(i){return i<.5?4*i*i*i:1-(-2*i+2)**3/2}const py=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,my=`
  precision highp float;
  varying vec2 vUv;

  uniform vec3  uColor;
  uniform float uLenPx;    // the segment's length on screen
  uniform float uStartPx;  // how far along the route it begins, so the dashes run on round corners
  uniform float uDashPx;   // one dash plus one gap
  uniform float uDuty;     // how much of that is dash
  uniform float uAlpha;

  void main() {
    float along = vUv.x * uLenPx + uStartPx;
    if (fract(along / uDashPx) > uDuty) discard;

    // Soften the long edges so the line is not a hard-edged bar at any zoom.
    float edge = smoothstep(0.0, 0.35, min(vUv.y, 1.0 - vUv.y) * 2.0);
    gl_FragColor = vec4(uColor, uAlpha * edge);
    #include <colorspace_fragment>
  }
`,gy=new Mn(1,1);class vy{constructor(t){this.scene=t,this.legs=[]}leg(t){for(;this.legs.length<=t;){const e=new fn({vertexShader:py,fragmentShader:my,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Vt(It.ruler.color)},uLenPx:{value:1},uStartPx:{value:0},uDashPx:{value:It.ruler.dashPx},uDuty:{value:It.ruler.duty},uAlpha:{value:It.ruler.alpha}}}),n=new Ee(gy,e);n.position.z=ei.ruler,this.scene.add(n),this.legs.push({mesh:n,material:e})}return this.legs[t]}set(t,e,n,s,r){this.setPath([[t,e],[n,s]],r)}setPath(t,e){const n=It.ruler;let s=0,r=0;for(let o=1;o<t.length;o++){const a=t[o-1][0],l=yi(t[o-1][1]),c=t[o][0],h=yi(t[o][1]),d=c-a,u=h-l,f=Math.hypot(d,u),{mesh:g,material:v}=this.leg(r);if(r++,g.visible=f*e>2,g.visible){g.position.set(a+d/2,l+u/2,ei.ruler),g.rotation.z=Math.atan2(u,d),g.scale.set(f,n.widthPx/e,1);const p=v.uniforms;p.uLenPx.value=f*e,p.uStartPx.value=s,p.uColor.value.setHex(n.color),p.uDashPx.value=n.dashPx,p.uDuty.value=n.duty,p.uAlpha.value=n.alpha}s+=f*e}for(let o=r;o<this.legs.length;o++)this.legs[o].mesh.visible=!1}dispose(){for(const{mesh:t,material:e}of this.legs)e.dispose(),t.removeFromParent();this.legs=[]}}const xy="#f0a24a",_y="rgba(240, 162, 74, 0.22)",yy="#ffd28a",wh="#ff6b5e",Ho="#6fd3ff";class My{constructor(t,e){this.cam=e,this.rect={width:1,height:1},this.canvas=document.createElement("canvas"),this.canvas.id="walls",this.g=this.canvas.getContext("2d"),t.insertBefore(this.canvas,t.querySelector("#overlay")),this.shown=!1,this.draft=null,this.doomed=null,this.preview=null,this.drew=!1}resize(t){this.rect=t;const e=Math.min(1.5,window.devicePixelRatio||1);this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e),this.g.setTransform(e,0,0,e,0,0)}frame(t){const e=this.g,{width:n,height:s}=this.rect;if(!this.shown){this.drew&&(e.clearRect(0,0,n,s),this.drew=!1);return}this.drew=!0,e.clearRect(0,0,n,s),e.lineJoin="round",e.lineCap="round";for(const o of(t==null?void 0:t.blocks)||[])this.drawBlock(o,o.id===this.doomed?wh:xy);for(const o of this.preview||[])this.drawBlock(o,Ho,!0);const r=this.draft;if(r&&r.pts.length){const o=r.cursor?[...r.pts,r.cursor.x,r.cursor.y]:r.pts;this.drawBlock({kind:r.kind,pts:o},yy,!0)}}drawBlock(t,e,n=!1){const s=this.g,r=t.pts,o=r.length>>1;if(!(o<2&&!n)){s.beginPath();for(let a=0;a<o;a++){const l=this.toScreen(r[a*2],r[a*2+1]);a?s.lineTo(l.x,l.y):s.moveTo(l.x,l.y)}if(t.kind==="mask"&&(s.closePath(),s.fillStyle=e===wh?"rgba(255, 107, 94, 0.3)":e===Ho?"rgba(111, 211, 255, 0.22)":_y,s.fill("evenodd")),s.strokeStyle="rgba(0, 0, 0, 0.55)",s.lineWidth=5,s.setLineDash([]),s.stroke(),s.strokeStyle=e,s.lineWidth=2.5,n&&s.setLineDash([7,5]),s.stroke(),s.setLineDash([]),t.kind==="wall"&&e!==Ho){s.fillStyle=e;for(let a=0;a<o;a++){const l=this.toScreen(r[a*2],r[a*2+1]);s.beginPath(),s.arc(l.x,l.y,3,0,Math.PI*2),s.fill()}}}}toScreen(t,e){const n=this.cam.toNdc(t,-e);return{x:(n.x*.5+.5)*this.rect.width,y:(1-(n.y*.5+.5))*this.rect.height}}}const Hi={fontPerRadius:.36,minFont:9,maxFont:13,span:{circle:1.2,square:1.45},minRadius:11},As={max:24,minRadius:8,span:.88,tallest:.7},Vo=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;let Wo="";function Sy(i){return Vo?(Wo||(Wo=`800 100px ${getComputedStyle(document.body).fontFamily||"system-ui, sans-serif"}`),Vo.font=Wo,Vo.measureText(i).width||1):i.length*60}function Eh(i,t){const e=200*t*As.span/Sy(i);return Math.min(t*As.tallest,e)}const by="http://www.w3.org/2000/svg";let wy=0;function Vi(i,t){const e=document.createElementNS(by,i);for(const[n,s]of Object.entries(t))e.setAttribute(n,s);return e}class Ey{constructor(t,{onSettings:e,onMark:n,canEdit:s=()=>!0}={}){this.el=t,this.canEdit=s,this.onMark=n,this.editing=null,this.gear=document.createElement("button"),this.gear.type="button",this.gear.className="token-gear",this.gear.title="Token settings",this.gear.setAttribute("aria-label","Token settings"),this.gear.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/><circle cx="12" cy="12" r="6.5"/></svg>',this.gear.hidden=!0,this.gear.addEventListener("pointerenter",()=>{this.onGear=!0}),this.gear.addEventListener("pointerleave",()=>{this.onGear=!1}),this.gear.addEventListener("click",()=>{this.gearFor&&(e==null||e(this.gearFor))}),this.el.appendChild(this.gear),this.gearFor=null,this.gearUntil=0,this.plates=new Map,this.rulers=new Map}sync(t,e){this.lastCtx=e;const{camera:n,rect:s}=e,r=n.pxPerUnit(s.height),o=new Set;for(const a of t){o.add(a.id);const l=this.plates.get(a.id)||this.createPlate(a.id),c=a.maxHp>0,h=n.toNdc(a.x,yi(a.y)),d=(h.x*.5+.5)*s.width,u=(1-(h.y*.5+.5))*s.height,f=Math.max(.05,a.size)/2*r,g=d>-160&&d<s.width+160&&u>-120&&u<s.height+160,v=this.syncLabel(l,a,d,u,f,g);if(this.syncStatus(l,a,d,u,f,g,r),l.last.hp!==a.hp||l.last.maxHp!==a.maxHp){if(l.bar.hidden=!c,c){const m=mr(a.hp/a.maxHp,0,1);l.fill.style.width=`${(m*100).toFixed(1)}%`,l.fill.dataset.state=m>.5?"ok":m>.2?"hurt":"down",l.bar.title=`${a.hp} / ${a.maxHp}`}l.last.hp=a.hp,l.last.maxHp=a.maxHp}if(!c){l.root.hidden=!0;continue}const p=Math.max(f,v)+4;if(l.root.hidden=!g,g){const m=mr(r/110,.62,1.25);l.root.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(u+p)}px, 0) scale(${m.toFixed(3)}) translateX(-50%)`,l.root.style.setProperty("--plate-width",`${Math.max(48,a.size*r*1.15).toFixed(0)}px`)}}for(const[a,l]of this.plates)o.has(a)||(l.root.remove(),l.label.svg.remove(),l.badges.remove(),this.plates.delete(a));this.syncGear(t,e,r),this.syncRulers(e),this.lastTokens=t,this.placeEditor(t,e,r)}syncGear(t,{camera:e,rect:n,selectedId:s,hoveredId:r,dragging:o},a){const l=performance.now(),c=r&&t.find(p=>p.id===r&&this.canEdit(p));let h=null;c?(h=c.id,this.gearUntil=l+700):this.gearFor&&(this.onGear||l<this.gearUntil)?h=this.gearFor:s&&(h=s);const d=h&&!o?t.find(p=>p.id===h&&this.canEdit(p)):null;if(this.gearFor=(d==null?void 0:d.id)||null,!d){this.gear.hidden=!0;return}const u=e.toNdc(d.x,yi(d.y)),f=(u.x*.5+.5)*n.width,g=(1-(u.y*.5+.5))*n.height,v=Math.max(.05,d.size)/2*a*Math.SQRT1_2;this.gear.hidden=!1,this.gear.style.transform=`translate3d(${Math.round(f+v+7)}px, ${Math.round(g-v-7)}px, 0) translate(-50%, -50%)`}syncStatus(t,e,n,s,r,o,a){const l=e.status||[],c=l.join();if(t.last.status!==c&&(t.badges.replaceChildren(...l.map(d=>{var f;const u=document.createElement("span");return u.className="status-badge",u.dataset.status=d,u.innerHTML=dd(d),u.title=((f=Wl[d])==null?void 0:f.label)||d,u})),t.last.status=c),t.badges.hidden=!l.length||!o,t.badges.hidden)return;const h=mr(a/110,.8,1.2);t.badges.style.transform=`translate3d(${Math.round(n)}px, ${Math.round(s-r*.82)}px, 0) scale(${h.toFixed(3)}) translate(-50%, -100%)`}syncLabel(t,e,n,s,r,o){var f;const{label:a}=t,l=((f=this.editing)==null?void 0:f.id)===e.id?"":e.mark||"",c=!!e.name&&r>=Hi.minRadius,h=!!l&&r>=As.minRadius;if(!o||!c&&!h)return a.svg.style.display="none",0;a.svg.style.display="";const d=r/100;a.text.style.display=c?"":"none",a.path.style.display=c?"":"none";const u=!1;if(c){const g=mr(r*Hi.fontPerRadius,Hi.minFont,Hi.maxFont),v=Math.round(g/d),p=e.shape==="square",m=`${e.name}|${v}|b|${p?"s":"c"}`;a.key!==m&&(a.key=m,this.layoutLabel(a,e.name,v,u,p))}return a.mark.style.display=h?"":"none",h&&a.markKey!==l&&(a.markKey=l,a.mark.textContent=l,a.mark.setAttribute("font-size",Eh(l,100).toFixed(1))),a.svg.style.transform=`translate3d(${n.toFixed(1)}px, ${s.toFixed(1)}px, 0) scale(${d.toFixed(4)}) translate(-100px, -100px)`,c&&!u?a.reach*d:0}beginMark(t){if(this.editing)return;const e=document.createElement("input");e.type="text",e.className="mark-editor",e.maxLength=As.max,e.value=t.mark||"",e.spellcheck=!1,e.autocomplete="off",e.placeholder="Write…",e.setAttribute("aria-label","Write across the token");const n=t.id,s=r=>{var o,a;((o=this.editing)==null?void 0:o.id)===n&&(this.editing=null,e.remove(),r&&e.value.trim()!==(t.mark||"")&&((a=this.onMark)==null||a.call(this,n,e.value)))};e.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),s(!0)):r.key==="Escape"&&(r.preventDefault(),r.stopPropagation(),s(!1)),r.stopPropagation()}),e.addEventListener("blur",()=>s(!0)),e.addEventListener("pointerdown",r=>r.stopPropagation()),this.el.parentElement.appendChild(e),this.editing={id:n,input:e,done:s},this.lastCtx&&this.sync(this.lastTokens||[],this.lastCtx),e.focus(),e.select()}placeEditor(t,{camera:e,rect:n},s){const r=this.editing;if(!r)return;const o=t.find(u=>u.id===r.id);if(!o){r.done(!1);return}const a=e.toNdc(o.x,yi(o.y)),l=(a.x*.5+.5)*n.width,c=(1-(a.y*.5+.5))*n.height,h=Math.max(.05,o.size)/2*s,d=Eh(r.input.value||r.input.placeholder,h);r.input.style.width=`${(2*h*As.span+8).toFixed(0)}px`,r.input.style.fontSize=`${d.toFixed(1)}px`,r.input.style.transform=`translate3d(${l.toFixed(1)}px, ${c.toFixed(1)}px, 0) translate(-50%, -50%)`}layoutLabel(t,e,n,s,r){const o=100*(1-It.tokens.ring/2);let a,l,c;if(r){const g=s?-o:o,v=o*Hi.span.square;a=`M ${-v} ${g} L ${v} ${g}`,l=2*v,c=l-n}else{const g=s?-1:1;a=`M 0 ${-g*o} A ${o} ${o} 0 1 ${s?1:0} 0 ${g*o} A ${o} ${o} 0 1 ${s?1:0} 0 ${-g*o}`,l=2*Math.PI*o,c=Math.PI*o*Hi.span.circle-n}t.path.setAttribute("d",a),t.text.setAttribute("font-size",n),t.textPath.textContent=e;let h=e;for(;h.length>1&&t.text.getComputedTextLength()>c;)h=h.slice(0,-1),t.textPath.textContent=`${h.trimEnd()}…`;const d=t.text.getComputedTextLength(),u=n*.45,f=Math.min(l,d+u*2);t.path.setAttribute("stroke-width",(n*1.45).toFixed(1)),t.path.setAttribute("stroke-dasharray",`${f.toFixed(1)} ${(l*2).toFixed(1)}`),t.path.setAttribute("stroke-dashoffset",(-(l-f)/2).toFixed(1)),t.svg.setAttribute("aria-label",e),t.reach=o+n*.75}syncRulers({camera:t,rect:e,rulers:n=[]}){const s=new Set;for(const r of n){s.add(r.id);let o=this.rulers.get(r.id);o||(o=document.createElement("div"),o.className="ruler",this.el.appendChild(o),this.rulers.set(r.id,o)),o.textContent!==r.text&&(o.textContent=r.text);const a=t.toNdc(r.mx??(r.ax+r.bx)/2,yi(r.my??(r.ay+r.by)/2)),l=(a.x*.5+.5)*e.width,c=(1-(a.y*.5+.5))*e.height;o.style.transform=`translate3d(${Math.round(l)}px, ${Math.round(c)}px, 0) translate(-50%, -160%)`,o.hidden=(r.len??Math.hypot(r.bx-r.ax,r.by-r.ay))*Ty(t,e)<26}for(const[r,o]of this.rulers)s.has(r)||(o.remove(),this.rulers.delete(r))}createPlate(t){const e=document.createElement("div");e.className="plate";const n=document.createElement("div");n.className="plate-bar";const s=document.createElement("i");n.appendChild(s),e.append(n),this.el.appendChild(e);const r=Vi("svg",{class:"token-label",viewBox:"0 0 200 200",width:200,height:200}),o=Vi("g",{transform:"translate(100 100)"}),a=`label-${t}-${++wy}`,l=Vi("path",{id:a,class:"token-label-band"}),c=Vi("text",{class:"token-label-text","dominant-baseline":"central"}),h=Vi("textPath",{href:`#${a}`,startOffset:"50%","text-anchor":"middle"});c.appendChild(h);const d=Vi("text",{class:"token-mark",x:0,y:0,"text-anchor":"middle","dominant-baseline":"central"});o.append(l,c,d),r.appendChild(o),this.el.appendChild(r);const u={svg:r,path:l,text:c,textPath:h,mark:d,key:"",markKey:null,reach:0},f=document.createElement("div");f.className="status-badges",f.hidden=!0,this.el.appendChild(f);const g={root:e,bar:n,fill:s,label:u,badges:f,last:{hp:void 0,maxHp:void 0,status:""}};return this.plates.set(t,g),g}clear(){for(const[,t]of this.plates)t.root.remove(),t.label.svg.remove(),t.badges.remove();this.plates.clear();for(const[,t]of this.rulers)t.remove();this.rulers.clear()}}function mr(i,t,e){return i<t?t:i>e?e:i}function Ty(i,t){return i.pxPerUnit(t.height)}const Ay="modulepreload",Ry=function(i,t){return new URL(i,t).href},Th={},pd=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=Ry(c,n),c in Th)return;Th[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===c&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Ay,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};function Cy(i){return i===100?["d10t","d10u"]:[`d${i}`]}function Py(i,t){if(i!==100)return[t];const e=t%100;return[Math.floor(e/10)+1,e%10+1]}function md(i,t){return i==="d10t"?String((t-1)*10).padStart(2,"0"):String(i==="d10u"?t-1:t)}function Ly(i,t){return i!=="d6"&&i!=="d2"&&(t==="6"||t==="9")}const Ah=new Map;function Rh(i){let t=Ah.get(i);return t||(t=Iy(i),Ah.set(i,t)),t}function Iy(i){switch(i){case"d2":return ui(i,ky(.9,.17,24),"caps");case"d4":return ui(i,Ss(new Pl(1.25)),"vertices");case"d6":return ui(i,Ss(new hs(1.25,1.25,1.25)),"faces");case"d8":return ui(i,Ss(new Cl(1)),"faces");case"d10":case"d10t":case"d10u":return ui(i,Dy(.95),"faces");case"d12":return ui(i,Ss(new Al(1)),"faces");case"d20":return ui(i,Ss(new Rl(1.05)),"faces");default:throw new Error(`No shape for ${i}`)}}function Ss(i){const e=(i.index?i.toNonIndexed():i).getAttribute("position"),n=[];for(let s=0;s<e.count;s+=3)n.push([0,1,2].map(r=>new N().fromBufferAttribute(e,s+r)));return i.dispose(),n}function Dy(i){const t=Math.cos(Math.PI/5),e=.105*i,n=e*(1+t)/(1-t),s=[];for(let l=0;l<10;l++){const c=l*Math.PI/5;s.push(new N(Math.cos(c)*i,Math.sin(c)*i,l%2?-e:e))}const r=new N(0,0,n),o=new N(0,0,-n),a=[];for(let l=0;l<5;l++){const c=s[2*l],h=s[2*l+1],d=s[(2*l+2)%10],u=s[(2*l+3)%10];a.push([r,c,h],[r,h,d]),a.push([o,u,d],[o,d,h])}return a.map(l=>gd(l))}function ky(i,t,e){const n=[],s=[];for(let o=0;o<e;o++){const a=o/e*Math.PI*2;n.push(new N(Math.cos(a)*i,Math.sin(a)*i,t/2)),s.push(new N(Math.cos(a)*i,Math.sin(a)*i,-t/2))}const r=[];for(let o=1;o<e-1;o++)r.push([n[0],n[o],n[o+1]],[s[0],s[o+1],s[o]]);for(let o=0;o<e;o++){const a=(o+1)%e;r.push([n[o],s[o],s[a]],[n[o],s[a],n[a]])}return r.map(o=>gd(o))}function gd(i){const t=new N().subVectors(i[1],i[0]).cross(new N().subVectors(i[2],i[0])),e=new N().add(i[0]).add(i[1]).add(i[2]).divideScalar(3);return t.dot(e)<0?[i[0],i[2],i[1]]:i}function ui(i,t,e){const n=[],s=p=>{for(let m=0;m<n.length;m++)if(n[m].distanceToSquared(p)<1e-10)return m;return n.push(p.clone()),n.length-1},r=[];for(const p of t){const m=new N().subVectors(p[1],p[0]).cross(new N().subVectors(p[2],p[0])).normalize();let y=r.find(_=>_.normal.dot(m)>.9999);y||(y={normal:m,tris:[],ids:new Set},r.push(y)),y.tris.push(p);for(const _ of p)y.ids.add(s(_))}for(const p of r){const m=[...p.ids];p.center=m.reduce((_,S)=>_.add(n[S]),new N).divideScalar(m.length),p.u=new N().subVectors(n[m[0]],p.center).projectOnPlane(p.normal).normalize(),p.w=new N().crossVectors(p.normal,p.u);const y=_=>{const S=new N().subVectors(n[_],p.center);return Math.atan2(S.dot(p.w),S.dot(p.u))};if(p.verts=m.sort((_,S)=>y(_)-y(S)),p.radius=Math.max(...m.map(_=>n[_].distanceTo(p.center))),p.verts.length===3||p.verts.length===4){const _=n[p.verts[0]],S=n[p.verts[1]],C=new N().addVectors(_,S).multiplyScalar(.5),T=new N().subVectors(C,p.center).projectOnPlane(p.normal).normalize();p.w=T.clone().negate(),p.u=new N().crossVectors(p.w,p.normal).normalize()}if(i.startsWith("d10")){const _=p.verts.reduce((S,C)=>Math.abs(n[C].z)>Math.abs(n[S].z)?C:S,p.verts[0]);p.w=new N().subVectors(n[_],p.center).projectOnPlane(p.normal).normalize(),p.u=new N().crossVectors(p.w,p.normal).normalize()}}const o=[],a=[],l=[],c=new Sn;let h=0;r.forEach((p,m)=>{const y=p.radius*(i==="d2"?1:1.04);for(const _ of p.tris)for(const S of _){const C=new N().subVectors(S,p.center);o.push(S.x,S.y,S.z),a.push(p.normal.x,p.normal.y,p.normal.z),l.push(.5+.5*C.dot(p.u)/y,.5+.5*C.dot(p.w)/y)}c.addGroup(h,p.tris.length*3,m),h+=p.tris.length*3}),c.setAttribute("position",new Xe(o,3)),c.setAttribute("normal",new Xe(a,3)),c.setAttribute("uv",new Xe(l,2));let d;e==="vertices"?d=n.map((p,m)=>({vertex:m,dir:p.clone().normalize()})):e==="caps"?d=r.map((p,m)=>({face:m,dir:p.normal})).filter(p=>Math.abs(p.dir.z)>.99):d=r.map((p,m)=>({face:m,dir:p.normal}));const u=d.length,f=new Array(u).fill(0);let g=1;for(let p=0;p<u;p++){if(f[p])continue;f[p]=g;const m=d.findIndex((y,_)=>_!==p&&!f[_]&&y.dir.dot(d[p].dir)<-.999);for(m>=0&&(f[m]=u+1-g),g++;f.includes(g);)g++}const v=r.map((p,m)=>{if(e==="vertices")return p.verts.map(_=>{const S=d.findIndex(A=>A.vertex===_),C=new N().subVectors(n[_],p.center),T=p.radius*1.04;return{slot:S,x:.5*C.dot(p.u)/T,y:.5*C.dot(p.w)/T}});const y=d.findIndex(_=>_.face===m);return y>=0?[{slot:y,x:0,y:0}]:[]});return{kind:i,geometry:c,faces:r,vertices:n,slots:d,standard:f,faceSlots:v,slotKind:e}}function Uy(i,t){let e=-1,n=-1/0;const s=new N;return i.slots.forEach((r,o)=>{s.copy(r.dir).applyQuaternion(t),s.z>n&&(n=s.z,e=o)}),{slot:e,flat:n}}function yb(i,t,e){const n=i.standard.slice(),s=n.indexOf(e);return s>=0&&s!==t&&([n[s],n[t]]=[n[t],n[s]]),n}const Ne=128,vd=new Map;function Ny(i){const t=i>>16&255,e=i>>8&255,n=i&255;return .2126*t+.7152*e+.0722*n>150?"#14100c":"#fbf8f2"}const Fy=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`;function Oy(i,t,e){const n=`${i}|${t}|${e.map(c=>`${c.text}@${c.x.toFixed(3)},${c.y.toFixed(3)}`).join(";")}`;let s=vd.get(n);if(s)return s;const r=document.createElement("canvas");r.width=Ne,r.height=Ne;const o=r.getContext("2d");o.fillStyle=Fy(t),o.fillRect(0,0,Ne,Ne);const a=o.createLinearGradient(0,0,Ne,Ne);a.addColorStop(0,"rgba(255,255,255,0.10)"),a.addColorStop(1,"rgba(0,0,0,0.10)"),o.fillStyle=a,o.fillRect(0,0,Ne,Ne);const l=Ny(t);if(i==="d6"&&e.length===1)return zy(o,Number(e[0].text),l),Ch(n,r);for(const c of e){const h=c.x!==0||c.y!==0,d=c.text.length,u=h?30:d>1?i==="d10t"?44:50:Gy(i),f=Ne*(.5+c.x),g=Ne*(.5-c.y);o.save(),o.translate(f,g),h&&o.rotate(Math.atan2(c.x,c.y)),o.fillStyle=l,o.font=`700 ${u}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(c.text,0,0),Ly(i,c.text)&&o.fillRect(-u*.28,u*.42,u*.56,Math.max(2,u*.07)),o.restore()}return Ch(n,r)}function Ch(i,t){const e=new zu(t);return e.colorSpace=Fe,e.anisotropy=4,vd.set(i,e),e}const By={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]};function zy(i,t,e){const n=Ne*.24,s=t===1?Ne*.1:Ne*.075;i.fillStyle=e;for(const[r,o]of By[t]||[])i.beginPath(),i.arc(Ne/2+r*n,Ne/2+o*n,s,0,Math.PI*2),i.fill()}function Gy(i){return{d2:58,d6:64,d8:56,d10:50,d10u:54,d12:54,d20:46}[i]??54}function Hy(i,t){return i.faceSlots.map(e=>e.map(n=>({text:md(i.kind,t[n.slot]),x:n.x*.62,y:n.y*.62})))}const Cn={fov:34,height:38,rest:2.6,fade:.5,dropped:.38};class Vy{constructor({badgeParent:t}){this.scene=new Bu,this.camera=new sn(Cn.fov,1,1,200),this.camera.position.set(0,-6,Cn.height),this.camera.lookAt(0,0,0),this.tray={halfW:12,halfH:8},this.scene.add(new yx(16777215,3814184,1.5));const e=new bx(16777215,1.9);e.position.set(-12,-10,30),this.scene.add(e),this.current=null,this.badge=document.createElement("div"),this.badge.className="dice-total",this.badge.hidden=!0,t.appendChild(this.badge),this.rect={width:1,height:1}}resize(t,e){this.rect={width:t,height:e},this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=Math.hypot(Cn.height,6),s=Math.tan(Cn.fov*Math.PI/360)*n;this.tray={halfW:Math.max(4,s*this.camera.aspect-1.2),halfH:Math.max(3,s-1.6)}}get busy(){return!!this.current}play(t,e){if(!Tr){Wy().then(()=>this.play(t,e));return}const{toss:n}=Tr;this.clear();const s=[];for(const a of t.dice){const l=Cy(a.sides),c=Py(a.sides,a.value);l.forEach((h,d)=>s.push({kind:h,want:c[d],kept:a.kept}))}let r;try{r=n(s,t.throw>>>0,this.tray)}catch(a){console.warn("[dice] could not animate this roll",a);return}const o=s.map((a,l)=>{const c=Rh(a.kind),h=Hy(c,r.labels[l]).map(f=>new _x({map:Oy(a.kind,e,f),roughness:.42,metalness:.04,transparent:!0})),d=new Ee(c.geometry,h);this.scene.add(d);const u=new Ee(Xy,new bi({map:$y(),transparent:!0,depthWrite:!1,opacity:.55}));return this.scene.add(u),{mesh:d,shadow:u,frames:r.frames[l],kept:a.kept,materials:h,kind:a.kind,labels:r.labels[l]}});this.current={id:t.id,total:t.total,note:t.note||"",dice:o,t:0,steps:r.steps,settledAt:null},this.badge.hidden=!0,this.pose(0)}clear(){if(this.current){for(const t of this.current.dice){this.scene.remove(t.mesh,t.shadow);for(const e of t.materials)e.dispose();t.shadow.material.dispose()}this.current=null,this.badge.hidden=!0}}frame(t){const e=this.current;if(!e)return;e.t+=t;const n=e.t/Tr.TOSS.dt;if(n<e.steps-1){this.pose(n);return}if(e.settledAt===null){e.settledAt=e.t,this.pose(e.steps-1);for(const r of e.dice)if(!r.kept)for(const o of r.materials)o.opacity=Cn.dropped;this.showTotal()}const s=e.t-e.settledAt;if(s>Cn.rest){const r=Math.max(0,1-(s-Cn.rest)/Cn.fade);for(const o of e.dice){for(const a of o.materials)a.opacity=r*(o.kept?1:Cn.dropped);o.shadow.material.opacity=.55*r}this.badge.style.opacity=String(r),r===0&&this.clear()}}pose(t){const e=Math.floor(t),n=t-e;for(const s of this.current.dice){const r=Math.min(e,this.current.steps-1)*7,o=Math.min(e+1,this.current.steps-1)*7,a=s.frames;s.mesh.position.set(a[r]+(a[o]-a[r])*n,a[r+1]+(a[o+1]-a[r+1])*n,a[r+2]+(a[o+2]-a[r+2])*n),Lh.set(a[r+3],a[r+4],a[r+5],a[r+6]),Ih.set(a[o+3],a[o+4],a[o+5],a[o+6]),s.mesh.quaternion.slerpQuaternions(Lh,Ih,n);const l=s.mesh.position.z,c=1.9+l*.12;s.shadow.position.set(s.mesh.position.x+l*.18,s.mesh.position.y+l*.12,.01),s.shadow.scale.set(c,c,1),this.current.settledAt===null&&(s.shadow.material.opacity=.55/(1+l*.25))}}showTotal(){const t=this.current;let e=0,n=0,s=1/0;const r=new N;for(const l of t.dice)l.kept&&(r.copy(l.mesh.position),r.y+=1.25,r.z+=1.25,r.project(this.camera),e+=(r.x*.5+.5)*this.rect.width,s=Math.min(s,(1-(r.y*.5+.5))*this.rect.height),n++);if(!n)return;const o=e/n,a=s-6;if(this.badge.replaceChildren(),t.note){const l=document.createElement("span");l.className="note",l.textContent=t.note,this.badge.append(l)}this.badge.append(String(t.total)),this.badge.style.opacity="1",this.badge.style.transform=`translate3d(${Math.round(o)}px, ${Math.round(a)}px, 0) translate(-50%, -100%)`,this.badge.hidden=!1}readout(){return this.current?this.current.dice.map(t=>{const e=Rh(t.kind),{slot:n}=Uy(e,t.mesh.quaternion);return{kind:t.kind,shows:md(t.kind,t.labels[n]),kept:t.kept}}):[]}render(t){if(!this.current)return;const e=t.autoClear;t.autoClear=!1,t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=e}}let Tr=null,Ph=null;function Wy(){return Ph||(Ph=pd(()=>import("./toss-wm6c9Fpm.js"),[],import.meta.url).then(i=>{Tr=i})),Ph}const Lh=new Ti,Ih=new Ti,Xy=new Mn(1,1);let gr=null;function $y(){if(gr)return gr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.85)"),e.addColorStop(.55,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),gr=new zu(i),gr}const qy=`
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`,Yy=`
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
`;function jy(i){const t=i.getContext("webgl",{premultipliedAlpha:!0,alpha:!0,antialias:!1});if(!t)return null;const e=(l,c)=>{const h=t.createShader(l);if(t.shaderSource(h,c),t.compileShader(h),!t.getShaderParameter(h,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(h));return h},n=t.createProgram();try{t.attachShader(n,e(t.VERTEX_SHADER,qy)),t.attachShader(n,e(t.FRAGMENT_SHADER,Yy))}catch(l){return console.warn("flood: no shader",l),null}if(t.linkProgram(n),!t.getProgramParameter(n,t.LINK_STATUS))return null;t.useProgram(n);const s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);const r=t.getAttribLocation(n,"a");t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0);const o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0);const a={};for(const l of["uMap","uRes","uDpr","uTime","uLevel","uSwell","uDeep","uBlack"])a[l]=t.getUniformLocation(n,l);return t.uniform1i(a.uMap,0),{clear(){t.viewport(0,0,i.width,i.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)},draw(l,{dpr:c,time:h,level:d,swell:u,deep:f,black:g}){t.viewport(0,0,i.width,i.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,l),t.uniform2f(a.uRes,i.width,i.height),t.uniform1f(a.uDpr,c),t.uniform1f(a.uTime,h),t.uniform1f(a.uLevel,d),t.uniform1f(a.uSwell,u),t.uniform1f(a.uDeep,f),t.uniform1f(a.uBlack,g),t.drawArrays(t.TRIANGLES,0,3)}}}const qn=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Ky=1,Zy=.16,Jy=typeof CanvasRenderingContext2D<"u"&&"filter"in CanvasRenderingContext2D.prototype,Dh=.45,Xo={fade:1.2,swirl:1.8,curtain:2.2,drapes:1.6,ink:2.2,burn:3.2,freeze:3.6,flood:3.2},Qy=7.5,tM=.045,eM=1,$o={rain:{density:700,make:()=>({u:Math.random(),v:Math.random(),s:.75+Math.random()*.5,l:.7+Math.random()*.6})},snow:{density:380,make:()=>({u:Math.random(),v:Math.random(),s:.6+Math.random()*.8,r:Math.random(),p:Math.random()*6.3})},embers:{density:240,make:()=>({u:Math.random(),v:Math.random(),s:.5+Math.random(),r:Math.random(),p:Math.random()*6.3})},fog:{density:26,make:()=>({u:Math.random()*1.4-.2,v:Math.random(),s:.6+Math.random()*.8,r:.22+Math.random()*.2,p:Math.random()*6.3,q:Math.random()*6.3})}};class nM{constructor(t,e){this.cam=e,this.rect={left:0,top:0,width:1,height:1},this.canvas=document.createElement("canvas"),this.canvas.id="weather",this.g=this.canvas.getContext("2d"),this.dark=document.createElement("canvas"),this.dark.id="darkness",this.dg=this.dark.getContext("2d"),this.darkShown=0,this.cover=De("fx-cover"),this.shade=De("fx-shade"),this.swirl=document.createElement("canvas"),this.swirl.className="fx-swirl",this.sg=this.swirl.getContext("2d"),this.curtain=De("fx-curtain"),this.pool=De("fx-pool"),this.curtain.append(this.pool),this.drapes=[De("fx-drape left"),De("fx-drape right")],this.floodCv=document.createElement("canvas"),this.floodCv.className="fx-swirl",this.floodCv.hidden=!0,this.cover.append(this.shade,this.swirl,this.floodCv,this.curtain,...this.drapes,cM()),this.card=De("fx-card");const n=De("title");n.textContent="Intermission";const s=De("sub");s.innerHTML='<span class="player-only">The GM is setting the scene.</span><span class="gm-only">Players see this card. Bring the table back from FX.</span>',this.card.append(De("glow"),n,s),this.out=null,this.locked=!1,this.flash=De("fx-flash"),this.pingLayer=De("fx-pings");const r=t.querySelector("#overlay");t.insertBefore(this.canvas,r),t.insertBefore(this.dark,r),t.insertBefore(this.cover,r),r.after(this.flash,this.pingLayer,this.card),this.board=[t.querySelector("#canvas"),this.canvas,r],this.overlay=r,this.weather=null,this.parts=[],this.pings=[]}resize(t){this.rect=t;const e=Math.min(1.5,window.devicePixelRatio||1);this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e),this.g.setTransform(e,0,0,e,0,0),this.dark.width=this.canvas.width,this.dark.height=this.canvas.height,this.dg.setTransform(e,0,0,e,0,0),this.darkKey="",this.swirl.width=this.canvas.width,this.swirl.height=this.canvas.height,this.sg.setTransform(e,0,0,e,0,0),this.floodCv.width=this.canvas.width,this.floodCv.height=this.canvas.height,this.coverKey="",this.reseed()}frame(t,e,{isGm:n,bounds:s,tokens:r=[],scene:o=null}){o!==this.scene&&(this.scene=o,this.out=t!=null&&t.blackout?1:0,this.darkShown=((t==null?void 0:t.darkness)||0)*(n?Dh:1),this.darkKey="",this.coverKey="");const a=(t==null?void 0:t.weather)||null;a!==this.weather&&(this.weather=a,this.parts=[]),this.intensity=(t==null?void 0:t.intensity)??.6,this.t=(this.t||0)+e,this.boardBox=this.boardRect(s),this.drawWeather(Math.min(e,.05),this.boardBox);const l=n?Dh:1;this.drawBlackout(t,e,l),this.locked=!n&&(!!(t!=null&&t.blackout)||this.out>.002),this.overlay.classList.toggle("fx-out",this.locked),document.body.classList.toggle("fx-locked",this.locked);const c=!!(t!=null&&t.blackout)&&(n||this.out>=.999);this.card.classList.toggle("on",c),this.card.classList.toggle("gm",n),this.drawDarkness(((t==null?void 0:t.darkness)||0)*l,e,r,o),this.drawPings()}reseed(){this.parts=[],this.g.clearRect(0,0,this.rect.width,this.rect.height)}boardRect(t){if(!t)return null;const e=this.cam.toNdc(t.x0,-t.y0),n=this.cam.toNdc(t.x1,-t.y1),{width:s,height:r}=this.rect,o=(e.x*.5+.5)*s,a=(1-(e.y*.5+.5))*r,l=(n.x*.5+.5)*s,c=(1-(n.y*.5+.5))*r;return{x:o,y:a,w:l-o,h:c-a}}fit(t,e){const n=Math.max(0,e.w*e.h),s=t===$o.fog?1:Math.min(2,n/(1e3*600)),r=t===$o.fog?8+18*this.intensity:t.density*this.intensity*s,o=Math.round(r*(qn?.4:1)),a=Math.max(4,Math.round(o*.05));if(this.parts.length<o)for(let l=0;l<a&&this.parts.length<o;l++)this.parts.push(t.make());else this.parts.length>o&&(this.parts.length=Math.max(o,this.parts.length-a))}drawWeather(t,e){const n=this.g,{width:s,height:r}=this.rect;n.clearRect(0,0,s,r);const o=$o[this.weather];if(!o||!e||e.w<2||e.h<2||(this.fit(o,e),!this.parts.length))return;n.save(),n.beginPath(),n.rect(e.x,e.y,e.w,e.h),n.clip();const a=this.intensity,l=qn?.5:1,c=f=>e.x+f*e.w,h=f=>e.y+f*e.h,d=f=>f*t*l/e.w,u=f=>f*t*l/e.h;if(this.weather==="rain"){n.strokeStyle=`rgba(190, 210, 235, ${(.22+.38*a).toFixed(2)})`,n.lineWidth=.8+.7*a,n.beginPath();const f=650+650*a;for(const g of this.parts){g.v+=u(f*g.s),g.u+=d(f*g.s*.18),g.v>1.02&&(g.v=-.02,g.u=Math.random()*1.2-.1);const v=c(g.u),p=h(g.v),m=(8+16*a)*g.l;n.moveTo(v,p),n.lineTo(v-m*.18,p-m)}n.stroke()}else if(this.weather==="snow"){n.fillStyle=`rgba(245, 248, 255, ${(.55+.4*a).toFixed(2)})`;for(const f of this.parts)f.p+=t*(.6+f.r),f.v+=u((25+55*a)*f.s),f.u+=d(Math.sin(f.p)*(12+22*a)),f.v>1.02&&(f.v=-.02,f.u=Math.random()),n.beginPath(),n.arc(c(f.u),h(f.v),.8+f.r*(1.4+1.6*a),0,Math.PI*2),n.fill()}else if(this.weather==="embers")for(const f of this.parts){f.p+=t*7,f.v-=u((25+60*a)*f.s),f.u+=d(Math.sin(f.p*.3)*14),f.v<-.02&&(f.v=1.02,f.u=Math.random());const g=(.35+.4*a)*(.6+.4*Math.sin(f.p));n.fillStyle=`rgba(255, ${150+Math.round(60*g)}, 60, ${g.toFixed(2)})`,n.beginPath(),n.arc(c(f.u),h(f.v),1+f.r*(1.6+1.2*a),0,Math.PI*2),n.fill()}else if(this.weather==="fog"){const f=.1+.18*a,g=Math.max(e.w,e.h);for(const v of this.parts){v.p+=t*.35,v.q+=t*.22,v.u+=d((14+26*a)*v.s),v.v+=Math.sin(v.q)*6e-4*l,v.u-v.r>1.15&&(v.u=-.25,v.v=Math.random());const p=v.r*g*(1+.12*Math.sin(v.p)),m=c(v.u),y=h(v.v),_=f*(.75+.25*Math.sin(v.p*1.3+v.q)),S=n.createRadialGradient(m,y,0,m,y,p);S.addColorStop(0,`rgba(208, 214, 218, ${_.toFixed(3)})`),S.addColorStop(.6,`rgba(208, 214, 218, ${(_*.5).toFixed(3)})`),S.addColorStop(1,"rgba(208, 214, 218, 0)"),n.fillStyle=S,n.fillRect(m-p,y-p,p*2,p*2)}}n.restore()}drawBlackout(t,e,n){var m,y;const s=Xo[t==null?void 0:t.transition]?t.transition:"fade",r=t!=null&&t.blackout?1:0;this.out===null&&(this.out=r);const o=this.out>=1&&r===1&&this.closedAs?this.closedAs:s;this.closedAs=o;const a=Math.min(e,.1)/(qn?.6:Xo[o]),l=Math.sign(r-this.out);this.out=r>this.out?Math.min(r,this.out+a):Math.max(r,this.out-a);const c=this.out,h=c*c*(3-2*c),d=l*(6*c*(1-c))/(qn?.6:Xo[o]),u=`${o}:${c}:${d}:${n}`,f=o==="burn"&&(h>0&&h<1||((m=this.sparks)==null?void 0:m.length)>0)||o==="flood"&&h>0&&h<1;if(u===this.coverKey&&!f)return;this.coverKey=u,this.cover.style.opacity=String(n),this.cover.dataset.kind=o,this.shade.style.opacity=o==="fade"?h.toFixed(4):"0",this.drawCurtain(o==="curtain"?c:0);const g=o==="drapes"?(1-h)*104:104,v=o==="drapes"&&!qn?d*Qy:0;this.drapes[0].style.transform=`translateX(${-g.toFixed(2)}%) skewX(${(-v).toFixed(2)}deg)`,this.drapes[1].style.transform=`translateX(${g.toFixed(2)}%) skewX(${v.toFixed(2)}deg)`;const p={swirl:_=>this.drawSwirl(_),ink:_=>this.drawInk(_),burn:_=>this.drawBurn(_,e),freeze:_=>this.drawFreeze(_),flood:_=>this.drawFlood(_,d)};for(const[_,S]of Object.entries(p))_!==o&&S(0);(y=p[o])==null||y.call(p,h)}drawCurtain(t){const e=this.rect.height,n=1.1*e-eM,s=2*tM*e,r=(n+s)*t*t*(3-2*t),o=Math.min(r,n);this.curtain.style.transform=`translateY(${(o-1.1*e).toFixed(1)}px)`,this.curtain.classList.toggle("on",t>0);const a=Math.max(0,r-n)/2;this.pool.style.height=`${a.toFixed(1)}px`,t>0&&(this.shade.style.opacity=Math.min(1,a/6).toFixed(3))}drawInk(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.blots=null,this.inked&&(e.clearRect(0,0,n,s),this.inked=!1);return}if(this.blots||(this.blots=lM()),this.inked=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=Math.hypot(n,s);for(const o of this.blots){const a=Math.max(0,Math.min(1,(t-o.at)/(1-o.at)));if(a<=0)continue;const l=r*o.size*(1-Math.pow(1-a,2.2)),c=o.x*n,h=o.y*s;e.beginPath();for(let d=0;d<=96;d++){const u=d/96*Math.PI*2,f=1+o.lobes.reduce((g,v)=>g+v.amp*Math.sin(u*v.n+v.ph),0);e.lineTo(c+Math.cos(u)*l*f,h+Math.sin(u)*l*f)}e.fill();for(const d of o.drops){const u=l*d.dist,f=Math.max(0,Math.min(1,a*3))*d.size*r;e.beginPath(),e.arc(c+Math.cos(d.a)*u,h+Math.sin(d.a)*u,f,0,Math.PI*2),e.fill()}}t>.85&&(e.globalAlpha=(t-.85)/.15,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawBurn(t,e){const n=this.sg,{width:s,height:r}=this.rect;if(t<=0){this.fire=null,this.fireGrid=null,this.sparks=[],this.burned&&(n.clearRect(0,0,s,r),this.burned=!1);return}const o=this.boardBox,a=o&&o.w>2&&o.h>2?o:{x:0,y:0,w:s,h:r};if(this.fire||(this.fire=iM(a.w/a.h)),this.sparks||(this.sparks=[]),this.burned=!0,n.clearRect(0,0,s,r),t>=1){n.fillStyle="#000",n.fillRect(0,0,s,r),this.drawSparks(e);return}const l=nn((t-.55)/.45);l>0&&(n.fillStyle=`rgba(0, 0, 0, ${l.toFixed(4)})`,n.beginPath(),n.rect(0,0,s,r),n.rect(a.x,a.y,a.w,a.h),n.fill("evenodd"));const c=rM(a,{x:0,y:0,w:s,h:r});if(!c){this.drawSparks(e);return}const h=performance.now();let d=this.fireGrid;(!d||!oM(d.view,c)&&h-d.made>250)&&(d=this.fireGrid=sM(this.fire,a,c));const{gw:u,gh:f,when:g,img:v,cv:p,u0:m,u1:y,v0:_,v1:S,soft:C}=d,T=.035,A=.05,P=t*(this.fire.span+T),D=this.t||0,x=new Float32Array(u),E=new Float32Array(f);for(let tt=0;tt<u;tt++)x[tt]=Math.sin(D*11+(m+tt/u*(y-m))*75);for(let tt=0;tt<f;tt++)E[tt]=Math.sin(D*7.3+(_+tt/f*(S-_))*60);const O=v.data,H=[];for(let tt=0;tt<g.length;tt++){const mt=P-g[tt],Mt=tt*4;if(mt<=-A){O[Mt+3]=0;continue}if(mt>=T+C){O[Mt]=0,O[Mt+1]=0,O[Mt+2]=0,O[Mt+3]=255;continue}const X=tt%u,J=.75+.25*x[X]*E[(tt-X)/u],ht=nn((mt+C)/(2*C)),ot=ht*Math.max(0,1-Math.max(0,mt)/T)*J,at=Math.pow(Math.max(0,1+mt/A),2),ct=255*Math.min(1,.3+ot*1.1),bt=30+190*ot*ot,Ct=10+70*ot*ot*ot;O[Mt]=70+(ct-70)*ht,O[Mt+1]=34+(bt-34)*ht,O[Mt+2]=10+(Ct-10)*ht,O[Mt+3]=255*Math.max(at*.9,ht),ot>.5&&H.push(tt)}p.getContext("2d").putImageData(v,0,0);const q=a.x+m*a.w,nt=a.y+_*a.h,$=(y-m)*a.w,W=(S-_)*a.h;n.save(),n.beginPath(),n.rect(a.x,a.y,a.w,a.h),n.clip(),n.imageSmoothingEnabled=!0,n.drawImage(p,q,nt,$,W);const k=d.glow,Z=k.getContext("2d");Z.clearRect(0,0,k.width,k.height),Z.drawImage(p,0,0,k.width,k.height),n.globalCompositeOperation="lighter",n.globalAlpha=.5,n.drawImage(k,q,nt,$,W),n.restore();const et=Math.min(e,.05);if(!qn&&H.length)for(let tt=180*et;tt>0;tt-=1){if(Math.random()>=tt)continue;const mt=H[Math.floor(Math.random()*H.length)];this.sparks.push({x:q+(mt%u+Math.random())/u*$,y:nt+(Math.floor(mt/u)+Math.random())/f*W,vx:(Math.random()-.5)*40,vy:-30-Math.random()*80,life:.6+Math.random()*1.4,age:0,size:.7+Math.random()*2.2})}this.drawSparks(e)}drawSparks(t){const e=this.sg,n=this.t||0,s=Math.min(t,.05);this.sparks=this.sparks.filter(r=>(r.age+=s)<r.life);for(const r of this.sparks){r.x+=(r.vx+Math.sin(n*3+r.y*.05)*12)*s,r.y+=r.vy*s;const o=1-r.age/r.life;e.fillStyle=`rgba(255, ${Math.round(150+80*o)}, 60, ${o.toFixed(2)})`,e.beginPath(),e.arc(r.x,r.y,r.size*(.5+.5*o),0,Math.PI*2),e.fill()}}drawSwirl(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.swirled&&(e.clearRect(0,0,n,s),this.swirled=!1);return}if(this.swirled=!0,e.clearRect(0,0,n,s),e.fillStyle="#000",t>=1){e.fillRect(0,0,n,s);return}const r=n/2,o=s/2,a=Math.hypot(r,o)*1.05,l=5,c=5,h=t*2.4,d=t*Math.PI/l,u=a*(1-Math.pow(1-t,1.5)),f=48;for(let g=0;g<l;g++){const v=g/l*Math.PI*2+h;e.beginPath();for(let p=0;p<=f;p++){const m=a-u*p/f,y=v+c*(1-m/a)-d;e.lineTo(r+Math.cos(y)*m,o+Math.sin(y)*m)}for(let p=f;p>=0;p--){const m=a-u*p/f,y=v+c*(1-m/a)+d;e.lineTo(r+Math.cos(y)*m,o+Math.sin(y)*m)}e.closePath(),e.fill()}t>.88&&(e.globalAlpha=(t-.88)/.12,e.fillRect(0,0,n,s),e.globalAlpha=1)}drawFreeze(t){const e=this.sg,{width:n,height:s}=this.rect;if(t<=0){this.ice=null,this.frozen&&(e.clearRect(0,0,n,s),this.frozen=!1);return}if(this.frozen=!0,e.clearRect(0,0,n,s),t>=1){e.fillStyle="#000",e.fillRect(0,0,n,s);return}(!this.ice||this.ice.w!==n||this.ice.h!==s)&&(this.ice=aM(n,s));const r=this.ice,o=t*2.4,a=nn((t-.42)/.28),l=nn((t-.52)/.36),c=nn((t-.8)/.2);e.fillStyle=`rgba(150, 190, 230, ${(.14*nn(t/.3)).toFixed(4)})`,e.fillRect(0,0,n,s);const{at:h,thick:d,img:u,cv:f}=r,g=u.data;for(let p=0;p<h.length;p++){const m=o-h[p],y=p*4;if(m<=0){g[y+3]=0;continue}const _=nn(m/.05),S=nn(m/.45),C=d[p];g[y]=214+26*C,g[y+1]=228+20*C,g[y+2]=244+11*C,g[y+3]=255*_*(.28+.5*S*(.6+.4*C))}f.getContext("2d").putImageData(u,0,0),e.imageSmoothingEnabled=!0,e.drawImage(f,0,0,n,s),e.lineCap="round",e.lineWidth=1;const v=.3;for(let p=0;p<4;p++){e.strokeStyle=`rgba(246, 251, 255, ${(.75*(1-p/4)).toFixed(3)})`,e.beginPath();for(const m of r.fronds){const y=o-m.at;if(y<=0||y>=v||Math.floor(y/v*4)!==p)continue;const _=Math.min(1,y/.03);e.moveTo(m.x0,m.y0),e.lineTo(m.x0+(m.x1-m.x0)*_,m.y0+(m.y1-m.y0)*_)}e.stroke()}e.fillStyle="rgba(255, 255, 255, 0.85)";for(const p of r.glints)o>p.at&&e.fillRect(p.x,p.y,p.r,p.r);if(l>0){const p=e.createRadialGradient(n/2,s/2,0,n/2,s/2,Math.hypot(n,s)/2);p.addColorStop(0,`rgba(10, 34, 58, ${(.92*l).toFixed(4)})`),p.addColorStop(1,`rgba(3, 12, 24, ${Math.min(1,.97*l).toFixed(4)})`),e.fillStyle=p,e.fillRect(0,0,n,s)}if(a>0){const p=1-c,m=(T,A)=>Math.round(T-A*l);for(const T of r.hits){const A=nn((a-T.at)/.06);if(A<=0)continue;const P=T.r*(.6+.4*A),D=e.createRadialGradient(T.x,T.y,0,T.x,T.y,P);D.addColorStop(0,`rgba(240, 248, 255, ${(.75*A*p).toFixed(4)})`),D.addColorStop(.4,`rgba(210, 232, 250, ${(.3*A*p).toFixed(4)})`),D.addColorStop(1,"rgba(210, 232, 250, 0)"),e.fillStyle=D,e.fillRect(T.x-P,T.y-P,P*2,P*2)}const y=new Path2D,_=new Path2D,S=[new Path2D,new Path2D,new Path2D];for(const T of r.cracks){if(a<T.at)continue;const A=Math.min(1,(a-T.at)/T.dur),P=T.x0+(T.x1-T.x0)*A,D=T.y0+(T.y1-T.y0)*A;y.moveTo(T.x0+T.nx*T.face,T.y0+T.ny*T.face),y.lineTo(P+T.nx*T.face,D+T.ny*T.face),_.moveTo(T.x0-T.nx,T.y0-T.ny),_.lineTo(P-T.nx,D-T.ny),S[T.weight].moveTo(T.x0,T.y0),S[T.weight].lineTo(P,D)}e.lineCap="butt",e.lineWidth=5,e.strokeStyle=`rgba(${m(205,120)}, ${m(228,110)}, ${m(248,60)}, ${(.16*p).toFixed(4)})`,e.stroke(y),e.lineWidth=1.6,e.strokeStyle=`rgba(8, 24, 42, ${(.6*(1-l)).toFixed(4)})`,e.stroke(_),e.lineCap="round";const C=[.6,1,1.7];for(let T=0;T<3;T++)e.lineWidth=C[T],e.strokeStyle=`rgba(${m(240,90)}, ${m(250,50)}, 255, ${((.55+.15*T)*p).toFixed(4)})`,e.stroke(S[T])}c>0&&(e.fillStyle=`rgba(0, 0, 0, ${c.toFixed(4)})`,e.fillRect(0,0,n,s))}drawFlood(t,e){var a;const n=this.floodCv;if(t<=0){this.flooded&&((a=this.water)==null||a.clear(),n.hidden=!0,this.flooded=!1);return}this.water===void 0&&(this.water=jy(n));const{width:s,height:r}=this.rect;if(!this.water){const l=this.sg;l.clearRect(0,0,s,r),l.fillStyle=`rgba(0, 0, 0, ${t.toFixed(4)})`,l.fillRect(0,0,s,r),this.flooded=!0;return}this.flooded=!0,n.hidden=!1;const o=nn(t/.66);this.water.draw(this.board[0],{dpr:n.width/Math.max(1,s),time:this.t||0,level:r*(-.06+1.2*o),swell:r*(.012+.035*Math.min(1,Math.abs(e)*2)),deep:nn((t-.45)/.45),black:t>=1?1:nn((t-.78)/.22)})}drawDarkness(t,e,n,s=null){const r=1-Math.exp(-Math.min(e,.1)*3);this.darkShown+=(t-this.darkShown)*r,Math.abs(t-this.darkShown)<.002&&(this.darkShown=t);const o=this.darkShown,a=this.dg,{width:l,height:c}=this.rect,h=o>.001?n.filter(v=>v.light):[],d=h.length?"":o.toFixed(3);if(d&&d===this.darkKey||(this.darkKey=d,a.clearRect(0,0,l,c),o<=.001)||(a.fillStyle=`rgba(0, 0, 0, ${(o*Ky).toFixed(3)})`,a.fillRect(0,0,l,c),!h.length))return;a.save();const u=this.boardBox;u&&u.w>2&&u.h>2&&(a.beginPath(),a.rect(u.x,u.y,u.w,u.h),a.clip()),a.globalCompositeOperation="destination-out";const f=this.t||0,g=this.blockSegments(s);for(const v of h){const p=this.toScreen(v.x,v.y),m=this.toScreen(v.x+1,v.y),y=Math.hypot(m.x-p.x,m.y-p.y),_=(v.size||1)/2+(v.lightRange??2),S=hM(v.id),C=qn?1:1+.008*Math.sin(f*7.3+S)+.005*Math.sin(f*13.1+S*2),T=_*y*C,A=T+.6*y,P=a.createRadialGradient(p.x,p.y,0,p.x,p.y,A);P.addColorStop(0,"rgba(0, 0, 0, 1)"),P.addColorStop(T/A,"rgba(0, 0, 0, 0.92)"),P.addColorStop(1,"rgba(0, 0, 0, 0)"),a.fillStyle=P;const D=g.length?this.reachOf(v,g,_*1.02+.62):null;if(!(D&&this.softLight(v,D,p,y,A,P))){if(D){a.save(),a.beginPath();for(let x=0;x<D.length;x+=2){const E=this.toScreen(D[x],D[x+1]);x?a.lineTo(E.x,E.y):a.moveTo(E.x,E.y)}a.closePath(),a.clip()}a.fillRect(p.x-A,p.y-A,A*2,A*2),D&&a.restore()}}a.restore()}softLight(t,e,n,s,r,o){var m;if(!Jy)return!1;const a=Math.max(1.5,Math.min(14,Zy*s)),l=Math.ceil(a*2),c=Math.ceil(r)+l,h=c*2;if(h>2400)return!1;const d=n.x-c,u=n.y-c;this.masks||(this.masks=new Map);const f=`${(m=this.reaches.get(t.id))==null?void 0:m.key}|${d.toFixed(1)}|${u.toFixed(1)}|${s.toFixed(3)}|${h}`;let g=this.masks.get(t.id);if(!g||g.key!==f){const y=(g==null?void 0:g.cv)||document.createElement("canvas");y.width=h,y.height=h;const _=y.getContext("2d");_.clearRect(0,0,h,h),_.filter=`blur(${a.toFixed(1)}px)`,_.fillStyle="#000",_.beginPath();for(let S=0;S<e.length;S+=2){const C=this.toScreen(e[S],e[S+1]);S?_.lineTo(C.x-d,C.y-u):_.moveTo(C.x-d,C.y-u)}_.closePath(),_.fill(),_.filter="none",g={key:f,cv:y},this.masks.set(t.id,g)}this.scratch||(this.scratch=document.createElement("canvas"));const v=this.scratch;(v.width<h||v.height<h)&&(v.width=h,v.height=h);const p=v.getContext("2d");return p.globalCompositeOperation="source-over",p.clearRect(0,0,h,h),p.setTransform(1,0,0,1,-d,-u),p.fillStyle=o,p.fillRect(n.x-r,n.y-r,r*2,r*2),p.setTransform(1,0,0,1,0,0),p.globalCompositeOperation="destination-in",p.drawImage(g.cv,0,0),p.globalCompositeOperation="source-over",this.dg.drawImage(v,0,0,h,h,d,u,h,h),!0}blockSegments(t){const e=Qu(t),n=this.segs;return(!n||n.length!==e.length||e.some((s,r)=>s!==n[r]))&&(this.segs=e,this.reaches=new Map,this.masks=new Map),this.segs}reachOf(t,e,n){const s=`${t.x}|${t.y}|${n}`;let r=this.reaches.get(t.id);return(!r||r.key!==s)&&(r={key:s,pts:Qx(e,t.x,t.y,n)},this.reaches.set(t.id,r)),r.pts}toScreen(t,e){const n=this.cam.toNdc(t,-e);return{x:(n.x*.5+.5)*this.rect.width,y:(1-(n.y*.5+.5))*this.rect.height}}play(t){if(t==="shake"){if(qn)return;for(const e of this.board)kh(e,"fx-shake");return}(t==="lightning"||t==="damage")&&(this.flash.dataset.kind=t,kh(this.flash,"fx-go"))}ping(t,e,n){const s=De("fx-ping");s.style.setProperty("--ping",n),s.append(De("ring"),De("ring"),De("dot")),this.pingLayer.append(s),this.pings.push({x:t,y:e,el:s,until:performance.now()+1700})}drawPings(){if(!this.pings.length)return;const t=performance.now();this.pings=this.pings.filter(e=>{if(t>e.until)return e.el.remove(),!1;const n=this.cam.toNdc(e.x,-e.y),s=(n.x*.5+.5)*this.rect.width,r=(1-(n.y*.5+.5))*this.rect.height;return e.el.style.transform=`translate3d(${s.toFixed(1)}px, ${r.toFixed(1)}px, 0)`,!0})}}function iM(i){const t=Math.random()*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=sl(),r=.45,o=(h,d)=>{const u=d/i,f=s(h*5,u*5)*.5+s(h*13,u*13)*.25+s(h*31,u*31)*.1;return h*e+u*n+f*r},a=[[0,0],[1,0],[0,1],[1,1]].map(([h,d])=>h*e+d/i*n),l=Math.min(...a)-.85*r*.6,c=Math.max(...a)+.85*r*.6;return{at:(h,d)=>o(h,d)-l,span:c-l}}function sM(i,t,e){let s=Math.max(8,Math.ceil(e.w/2)),r=Math.max(8,Math.ceil(e.h/2));const o=Math.sqrt(s*r/25e4);o>1&&(s=Math.ceil(s/o),r=Math.ceil(r/o));const a=(e.x-t.x)/t.w,l=(e.x+e.w-t.x)/t.w,c=(e.y-t.y)/t.h,h=(e.y+e.h-t.y)/t.h,d=new Float32Array(s*r);for(let p=0;p<r;p++){const m=c+(p+.5)/r*(h-c);for(let y=0;y<s;y++)d[p*s+y]=i.at(a+(y+.5)/s*(l-a),m)}const u=document.createElement("canvas");u.width=s,u.height=r;const f=u.getContext("2d").createImageData(s,r),g=document.createElement("canvas");g.width=Math.max(2,Math.round(s/8)),g.height=Math.max(2,Math.round(r/8));const v=1.5*(l-a)/s;return{gw:s,gh:r,when:d,img:f,cv:u,glow:g,u0:a,u1:l,v0:c,v1:h,soft:v,view:{...e},made:performance.now()}}function rM(i,t){const e=Math.max(i.x,t.x),n=Math.max(i.y,t.y),s=Math.min(i.x+i.w,t.x+t.w)-e,r=Math.min(i.y+i.h,t.y+t.h)-n;return s>1&&r>1?{x:e,y:n,w:s,h:r}:null}function oM(i,t){return Math.abs(i.x-t.x)<1&&Math.abs(i.y-t.y)<1&&Math.abs(i.w-t.w)<1&&Math.abs(i.h-t.h)<1}function nn(i){const t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)}function sl(){const t=Float32Array.from({length:4096},()=>Math.random()*2-1),e=(s,r)=>t[(r%64+64)%64*64+(s%64+64)%64],n=s=>s*s*(3-2*s);return(s,r)=>{const o=Math.floor(s),a=Math.floor(r),l=n(s-o),c=n(r-a),h=e(o,a)+(e(o+1,a)-e(o,a))*l,d=e(o,a+1)+(e(o+1,a+1)-e(o,a+1))*l;return h+(d-h)*c}}function aM(i,t){const e=sl(),n=sl(),s=16e4;let r=Math.max(8,Math.ceil(i/3)),o=Math.max(8,Math.ceil(t/3));const a=Math.sqrt(r*o/s);a>1&&(r=Math.ceil(r/a),o=Math.ceil(o/a));const l=Math.min(i,t)/2,c=(W,k)=>Math.min(W,k,i-W,t-k)/l,h=(W,k)=>{const Z=W/l,et=k/l;return e(Z*3,et*3)*.5+e(Z*8,et*8)*.3+e(Z*21,et*21)*.15},d=(W,k)=>Math.max(0,c(W,k)*.9+.12+h(W,k)*.3),u=new Float32Array(r*o),f=new Float32Array(r*o);for(let W=0;W<o;W++)for(let k=0;k<r;k++){const Z=(k+.5)/r*i,et=(W+.5)/o*t,tt=W*r+k;u[tt]=d(Z,et);const mt=(Z+et*.6)/1.17,Mt=(et-Z*.6)/1.17,X=n(mt/70,Mt/70)*.6+n(Mt/31,mt/31)*.3+n(mt/13+7,Mt/13)*.1;f[tt]=Math.max(0,Math.min(1,.5+X))}const g=document.createElement("canvas");g.width=r,g.height=o;const v=g.getContext("2d").createImageData(r,o),p=[],m=5,y=W=>Math.min(i-1,Math.max(1,W)),_=W=>Math.min(t-1,Math.max(1,W)),S=(W,k)=>d(y(W),_(k))-.04,C=(W,k,Z,et,tt)=>{const mt=W+Math.cos(Z)*et,Mt=k+Math.sin(Z)*et;if(p.push({x0:W,y0:k,x1:mt,y1:Mt,at:S(mt,Mt)}),tt<=0||et<6)return;const X=1+Math.floor(Math.random()*3);for(let J=0;J<X;J++){const ht=.25+Math.random()*.6,ot=Math.random()<.5?1:-1;C(W+(mt-W)*ht,k+(Mt-k)*ht,Z+ot*(Math.PI/3),et*(1-ht)*(.3+Math.random()*.4),tt-1)}},T=(W,k,Z,et,tt)=>{for(let mt=0;mt<et;mt++){Z+=(Math.random()-.5)*.12;const Mt=m*(.6+Math.random()*.9),X=W+Math.cos(Z)*Mt,J=k+Math.sin(Z)*Mt;p.push({x0:W,y0:k,x1:X,y1:J,at:S(X,J)});const ht=(et-mt)*m;for(const ot of[-1,1])Math.random()>.3||C(X,J,Z+ot*(Math.PI/3),ht*(.12+Math.random()*.35),2);tt>0&&mt>2&&Math.random()<.07&&T(X,J,Z+(Math.random()<.5?1:-1)*(Math.PI/3),Math.round((et-mt)*(.5+Math.random()*.3)),tt-1),W=X,k=J}},A=Math.round(Math.min(110,i*t/9e3));for(let W=0;W<A;W++){const k=Math.random()*i,Z=Math.random()*t,et=i>t?Math.min(i-t/2,Math.max(t/2,k)):i/2,tt=i>t?t/2:Math.min(t-i/2,Math.max(i/2,Z)),mt=Math.atan2(tt-Z,et-k)+(Math.random()-.5)*1.2;T(k,Z,mt,8+Math.floor(Math.random()*18),1)}const P=[],D=Math.round(i*t/2500);for(let W=0;W<D;W++){const k=Math.random()*i,Z=Math.random()*t;P.push({x:k,y:Z,r:Math.random()<.2?2:1,at:d(k,Z)+.08+Math.random()*.2})}const x=[],E=[],O=Math.hypot(i,t),H=2.2,q=(W,k,Z,et,tt,mt)=>{const Mt=Math.hypot(Z-W,et-k)||1,X=-(et-k)/Mt,J=(Z-W)/Mt;x.push({x0:W,y0:k,x1:Z,y1:et,at:tt,dur:Math.max(.004,Mt/O/H),nx:X,ny:J,face:2+mt,weight:mt})},nt=(W,k,Z,et,tt,mt,Mt)=>{let X=0;for(;X<et;){const J=O*(.03+Math.random()*.06);Math.random()<.3?Z+=(Math.random()-.5)*.7:Z+=(Math.random()-.5)*.12;const ht=W+Math.cos(Z)*J,ot=k+Math.sin(Z)*J,at=tt+X/O/H,ct=Math.max(0,mt-(X>et*.55?1:0));if(q(W,k,ht,ot,at,ct),X+=J,Mt>0&&Math.random()<.22){const bt=Math.random()<.5?1:-1;nt(ht,ot,Z+bt*(.3+Math.random()*.3),(et-X)*(.35+Math.random()*.3),tt+X/O/H,Math.max(0,ct-1),Mt-1)}if(W=ht,k=ot,W<-30||k<-30||W>i+30||k>t+30)return}},$=1+Math.floor(Math.random()*3);for(let W=0;W<$;W++){const k=W===0;let Z,et;for(let at=0;at<20&&(Z=i*(k?.35+Math.random()*.3:.12+Math.random()*.76),et=t*(k?.35+Math.random()*.3:.12+Math.random()*.76),!E.every(ct=>Math.hypot(ct.x-Z,ct.y-et)>O*.3));at++);const tt=k?0:.2+W*.15+Math.random()*.1,mt=k?1:.5+Math.random()*.25;E.push({x:Z,y:et,at:tt,r:O*.025*mt});const Mt=k?8+Math.floor(Math.random()*4):5+Math.floor(Math.random()*3),X=Array.from({length:Mt},(at,ct)=>(ct+(Math.random()-.5)*.6)/Mt*Math.PI*2),J=X.map(()=>O*mt*(.25+Math.random()*.45)),ht=X.map((at,ct)=>{const bt=[{x:Z,y:et,r:0}];let Ct=Z,Ut=et,L=at,ae=0;for(;ae<J[ct];){const Ft=O*(.03+Math.random()*.05)*mt;L+=Math.random()<.25?(Math.random()-.5)*.6:(Math.random()-.5)*.1,Ct+=Math.cos(L)*Ft,Ut+=Math.sin(L)*Ft,ae+=Ft,bt.push({x:Ct,y:Ut,r:ae,ang:L})}return bt});for(const at of ht)for(let ct=1;ct<at.length;ct++){const bt=at[ct].r<at[at.length-1].r*.5;if(q(at[ct-1].x,at[ct-1].y,at[ct].x,at[ct].y,tt+at[ct-1].r/O/H,bt?2:1),ct>1&&Math.random()<.15){const Ct=Math.random()<.5?1:-1;nt(at[ct].x,at[ct].y,at[ct].ang+Ct*(.3+Math.random()*.35),O*mt*(.05+Math.random()*.12),tt+at[ct].r/O/H,0,1)}}const ot=(at,ct)=>{for(let bt=1;bt<at.length;bt++)if(at[bt].r>=ct){const Ct=(ct-at[bt-1].r)/(at[bt].r-at[bt-1].r);return{x:at[bt-1].x+(at[bt].x-at[bt-1].x)*Ct,y:at[bt-1].y+(at[bt].y-at[bt-1].y)*Ct}}return null};for(let at=0,ct=O*.03*mt;at<5;at++,ct*=1.55+Math.random()*.3)for(let bt=0;bt<Mt;bt++){if(Math.random()>.75-at*.1)continue;const Ct=ot(ht[bt],ct*(.85+Math.random()*.3)),Ut=ot(ht[(bt+1)%Mt],ct*(.85+Math.random()*.3));if(!Ct||!Ut)continue;const L=.35+Math.random()*.3,ae=Ct.x+(Ut.x-Ct.x)*L+(Math.random()-.5)*ct*.12,Ft=Ct.y+(Ut.y-Ct.y)*L+(Math.random()-.5)*ct*.12,Ht=tt+ct/O/H+.02,Rt=at<2?1:0;Math.random()<.5?(q(Ct.x,Ct.y,ae,Ft,Ht,Rt),q(ae,Ft,Ut.x,Ut.y,Ht+.01,Rt)):(q(Ut.x,Ut.y,ae,Ft,Ht,Rt),q(ae,Ft,Ct.x,Ct.y,Ht+.01,Rt))}}return{w:i,h:t,gw:r,gh:o,at:u,thick:f,img:v,cv:g,fronds:p,glints:P,cracks:x,hits:E}}function lM(){const i=[];for(let t=0;t<44;t++)i.push({x:Math.random()*1.1-.05,y:Math.random()*1.1-.05,at:Math.random()*.65,size:.07+Math.random()*.12,lobes:[3,5,8,13,19].map(e=>({n:e,amp:(.04+Math.random()*.07)/Math.sqrt(e/3),ph:Math.random()*6.3})),drops:Array.from({length:3+Math.floor(Math.random()*5)},()=>({a:Math.random()*6.3,dist:1.1+Math.random()*.5,size:.002+Math.random()*.006}))});return i}function cM(){const i=document.createElement("div");return i.style.cssText="position:absolute;width:0;height:0;overflow:hidden",i.innerHTML=`<svg width="0" height="0" aria-hidden="true">
    <filter id="fx-hem" x="0" y="-5%" width="100%" height="110%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.009 0" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="matrix" result="map"
        values="0 0 0 0 0.5  0 1 0 0 0  0 0 0 0 0  0 0 0 0 1"/>
      <feDisplacementMap in="SourceGraphic" in2="map" scale="16" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </svg>`,i}function hM(i){let t=0;for(const e of String(i))t=(t*31+e.charCodeAt(0))%997;return t}function De(i){const t=document.createElement("div");return t.className=i,t}function kh(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}class uM{constructor({canvas:t,overlayEl:e,library:n,handlers:s={}}){this.library=n,this.renderer=new vx({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Fe,this.renderer.setClearColor(725006,1),this.scene=new Bu,this.cam=new Q_,this.map=new ny(this.scene,this.renderer),this.grid=new oy(this.scene),this.views=new Map,this.overlay=new Ey(e,s),this.dice=new Vy({badgeParent:e}),this.fx=new nM(e.parentElement,this.cam),this.walls=new My(e.parentElement,this.cam),this.speaking=new Set,this.ghosts=new Map,this.routes=new Map,this.routeFor=null,this.turns=new Map,this.origins=new Map,this.originViews=new Map,this.rulerViews=new Map,this.selectedId=null,this.selectedIds=new Set,this.hoveredId=null,this.builtScene=null,this.rect={left:0,top:0,width:1,height:1},this.el=t.parentElement,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(this.el),this.resize()}resize(){var e,n,s;const t=this.el.getBoundingClientRect();this.rect={left:t.left,top:t.top,width:t.width,height:t.height},!(t.width<1||t.height<1)&&(this.renderer.setSize(t.width,t.height,!1),this.cam.resize(t.width,t.height),(e=this.dice)==null||e.resize(t.width,t.height),(n=this.fx)==null||n.resize(this.rect),(s=this.walls)==null||s.resize(this.rect))}lookAt(t,e){this.cam.camera.position.x=t,this.cam.camera.position.y=-e,this.cam.clamp()}unitsAt(t,e,n){const s=(t-this.rect.left)/this.rect.width*2-1,r=-((e-this.rect.top)/this.rect.height*2-1);return this.cam.toUnits(s,r,n)}ndcAt(t,e){return[(t-this.rect.left)/this.rect.width*2-1,-((e-this.rect.top)/this.rect.height*2-1)]}frame(t,e,{isGm:n=!0,self:s=""}={}){var p;const r=Re(t),o=qa(r);this.cam.bounds=o,this.map.update(r,o,this.library),this.grid.update(r,o);const a=Lx(t,{isGm:n}),l=n?null:Qu(r),c=n?null:K_(a,s,l),h=n?a:Z_(a,this.fx.darkShown,s,c,l);this.reconcile(r,h);const d=It.tokens.layerGap,u={library:this.library,selected:!1,hovered:!1,z:0};for(let m=0;m<h.length;m++){const y=h[m],_=this.views.get(y.id);if(!_)continue;u.z=J_(y.layer,m,d),u.selected=this.selectedIds.has(y.id)||y.id===this.selectedId,u.hovered=y.id===this.hoveredId&&!this.ghosts.size,u.speaking=!!y.owner&&this.speaking.has(y.owner);const S=this.ghosts.get(y.id),C=this.turns.get(y.id),T=C===void 0?y:{...y,facing:C};S?_.snap({...T,x:S.x,y:S.y},e,u):_.sync(T,e,u)}const f=this.syncDrags(h,e,r),g=this.displayTokens(h);this.overlay.sync(g,{camera:this.cam,rect:this.rect,selectedId:this.selectedId,hoveredId:this.hoveredId,dragging:this.ghosts.size>0,rulers:f}),this.renderer.render(this.scene,this.cam.camera),this.map.drawn=this.map.texture?this.map.hash:null;const v=g.map((m,y)=>this.ghosts.has(m.id)?h[y]:m).map(m=>m.light&&c&&!c.has(m.id)?{...m,light:!1}:m);this.fx.frame(r==null?void 0:r.fx,e,{isGm:n,bounds:o,tokens:v,scene:r}),(p=this.walls).shown&&(p.shown=n),this.walls.frame(r),this.dice.frame(e),this.dice.render(this.renderer)}mapReady(t=8e3){const e=performance.now();return new Promise(n=>{const s=()=>{const r=this.map;if(!r.hash||r.drawn===r.hash||r.loading==="failed"||performance.now()-e>t){requestAnimationFrame(()=>n());return}requestAnimationFrame(s)};requestAnimationFrame(()=>requestAnimationFrame(s))})}syncDrags(t,e,n){const s=this.cam.pxPerUnit(this.rect.height),r=[];for(const[o,a]of this.origins){const l=t.find(y=>y.id===o);if(!l)continue;let c=this.originViews.get(o);c||(c=new ks(this.scene),this.originViews.set(o,c)),c.snap({...l,x:a.x,y:a.y},e,{library:this.library,z:ei.dragOrigin,selected:!1,hovered:!1,alpha:It.tokens.originAlpha,ringAlpha:It.tokens.originRingAlpha});const h=this.ghosts.get(o)||{x:l.x,y:l.y};let d=this.rulerViews.get(o);d||(d=new vy(this.scene),this.rulerViews.set(o,d));const u=this.routeOf(o,a,h);d.setPath(u,s);const f=n==null?void 0:n.grid,[g,v]=Ul(h.x,h.y,f,l.size),p=[...u.slice(0,-1),[g,v]],m=dM(u);r.push({id:o,ax:a.x,ay:a.y,bx:h.x,by:h.y,mx:m.x,my:m.y,len:m.length,text:Wx(p,f).text})}for(const[o,a]of this.originViews)this.origins.has(o)||(a.dispose(),this.originViews.delete(o));for(const[o,a]of this.rulerViews)this.origins.has(o)||(a.dispose(),this.rulerViews.delete(o),this.routes.delete(o));return r}routeOf(t,e,n){const s=[[e.x,e.y],[n.x,n.y]];if(!this.routeFor)return s;const r=this.routes.get(t);if(r&&Math.hypot(r.x-n.x,r.y-n.y)<.04&&r.ax===e.x&&r.ay===e.y)return[...r.path.slice(0,-1),[n.x,n.y]];const o=this.routeFor(t,e.x,e.y,n.x,n.y)||s;return this.routes.set(t,{x:n.x,y:n.y,ax:e.x,ay:e.y,path:o}),o}displayTokens(t){return t.map(e=>{const n=this.turns.get(e.id),s=n===void 0?e:{...e,facing:n},r=this.ghosts.get(s.id);if(r)return{...s,x:r.x,y:r.y};const o=this.views.get(s.id);if(!(o!=null&&o.sliding))return s;const a=o.root.position;return{...s,x:a.x,y:ud(a.y)}})}reconcile(t,e){const n=new Set;for(const s of e)n.add(s.id),this.views.has(s.id)||this.views.set(s.id,new ks(this.scene));for(const[s,r]of this.views)n.has(s)||(r.dispose(),this.views.delete(s));if((t==null?void 0:t.id)!==this.builtScene){for(const[,s]of this.views)s.placed=!1;this.builtScene=(t==null?void 0:t.id)??null}}fit(t){const e=qa(Re(t));this.cam.bounds=e;const n=Math.min(.5,Math.max(0,this.leftInset()/Math.max(1,this.rect.width)));this.cam.frame(e,void 0,n)}leftInset(){return 0}dispose(){this.observer.disconnect();for(const[,t]of this.views)t.dispose();this.views.clear();for(const[,t]of this.originViews)t.dispose();this.originViews.clear();for(const[,t]of this.rulerViews)t.dispose();this.rulerViews.clear(),this.overlay.clear(),this.map.dispose(),this.grid.dispose(),this.renderer.dispose()}}function dM(i){let t=0;for(let r=1;r<i.length;r++)t+=Math.hypot(i[r][0]-i[r-1][0],i[r][1]-i[r-1][1]);let e=t/2;for(let r=1;r<i.length;r++){const[o,a]=i[r-1],[l,c]=i[r],h=Math.hypot(l-o,c-a);if(h>=e&&h>0)return{x:o+(l-o)*e/h,y:a+(c-a)*e/h,length:t};e-=h}const[n,s]=i[i.length-1];return{x:n,y:s,length:t}}const di=new Bt,fM=4,pM=15,mM=9,gM=.6;class vM{constructor(t,{getState:e,canGrab:n,onSelect:s,onDragMove:r,onDropGroup:o,onContext:a,onTurn:l,onPing:c,isSelected:h=()=>!1,groupOf:d=y=>[y],onToggle:u,locked:f,hasSelection:g=()=>!1,drawing:v=()=>null,walk:p=null,collides:m=()=>!1}){this.collides=m,this.walk=p,this.drawing=v,this.stage=t,this.locked=f,this.getState=e,this.canGrab=n||(()=>!0),this.onSelect=s,this.onDragMove=r,this.onContext=a,this.onTurn=l,this.onDropGroup=o,this.onPing=c,this.isSelected=h,this.groupOf=d,this.onToggle=u,this.hasSelection=g,this.pressAt={x:0,y:0},this.group=[],this.narrowTo=null,this.mode=null,this.pointerId=null,this.dragId=null,this.grabDx=0,this.grabDy=0,this.last={x:0,y:0},this.start={x:0,y:0},this.moved=!1,this.pendingDeselect=!1;const y=t.renderer.domElement;this.el=y,y.addEventListener("pointerdown",_=>this.down(_)),y.addEventListener("pointermove",_=>this.move(_)),y.addEventListener("pointerup",_=>this.up(_)),y.addEventListener("pointercancel",_=>this.up(_)),y.addEventListener("wheel",_=>this.wheel(_),{passive:!1}),y.addEventListener("pointerleave",()=>this.hover(null)),y.addEventListener("contextmenu",_=>this.context(_))}cancel(){var t,e;if(this.pointerId!==null){(e=(t=this.el).releasePointerCapture)==null||e.call(t,this.pointerId),this.pointerId=null,this.dragId&&this.stage.turns.delete(this.dragId);for(const n of this.group)this.stage.ghosts.delete(n.id),this.stage.origins.delete(n.id);this.originAt=null,this.dragId=null,this.group=[],this.narrowTo=null,this.pendingDeselect=!1,this.mode=null}}down(t){var a,l,c,h,d;if(this.pointerId!==null||(a=this.locked)!=null&&a.call(this))return;this.el.setPointerCapture(t.pointerId),this.pointerId=t.pointerId,this.moved=!1,this.start.x=t.clientX,this.start.y=t.clientY,this.last.x=t.clientX,this.last.y=t.clientY;const e=this.stage.unitsAt(t.clientX,t.clientY,di);if(t.button===0&&t.altKey){t.preventDefault(),this.mode="ping",(l=this.onPing)==null||l.call(this,e.x,e.y,t.shiftKey);return}if(t.button===0&&t.shiftKey){const u=vi(this.getState(),e.x,e.y,{isGm:!0});if(u&&this.canGrab(u)){this.mode="toggle",(c=this.onToggle)==null||c.call(this,u.id);return}}if(t.button===1||t.shiftKey){this.mode="pan";return}if(t.button===2)return;const n=this.drawing();if(n){this.mode="draw",n.down({x:e.x,y:e.y},t);return}const s=this.arrowAt(e);if(s){this.mode="turn",this.dragId=s.id,(h=this.onSelect)==null||h.call(this,s.id),this.stage.turns.set(s.id,s.facing);return}const r=vi(this.getState(),e.x,e.y,{isGm:!0}),o=r&&this.stage.views.has(r.id)?r:null;if(o&&this.canGrab(o)){this.mode="drag",this.dragId=o.id,this.grabDx=o.x-e.x,this.grabDy=o.y-e.y,this.grabAt={x:e.x,y:e.y},this.centring=this.collides(o),this.isSelected(o.id)?this.narrowTo=o.id:(d=this.onSelect)==null||d.call(this,o.id);const u=this.getState(),f=u.scenes[u.activeScene];this.group=this.groupOf(o.id).map(g=>f==null?void 0:f.tokens[g]).filter(g=>g&&this.canGrab(g)).map(g=>({id:g.id,x:g.x,y:g.y})),this.originAt=!0;for(const g of this.group)this.stage.ghosts.set(g.id,{x:g.x,y:g.y})}else this.mode="pan",o||(this.pendingDeselect=!0,this.pressAt.x=e.x,this.pressAt.y=e.y)}move(t){var s,r,o,a;if(this.pointerId===null){const l=this.stage.unitsAt(t.clientX,t.clientY,di),c=this.drawing();if(c){c.hover({x:l.x,y:l.y});return}const h=this.arrowAt(l);this.hover((h==null?void 0:h.id)??((s=vi(this.getState(),l.x,l.y,{isGm:!0}))==null?void 0:s.id)??null,!!h);return}if(t.pointerId!==this.pointerId)return;const e=t.clientX-this.last.x,n=t.clientY-this.last.y;if(this.last.x=t.clientX,this.last.y=t.clientY,this.moved||(this.moved=Math.hypot(t.clientX-this.start.x,t.clientY-this.start.y)>fM),this.mode==="draw"){const l=this.stage.unitsAt(t.clientX,t.clientY,di);(r=this.drawing())==null||r.move({x:l.x,y:l.y});return}if(this.mode==="pan"){const l=this.stage.cam.viewUnits/Math.max(1,this.stage.rect.height);this.stage.cam.panBy(-e*l,n*l);return}if(this.mode==="turn"&&this.dragId){const l=this.tokenById(this.dragId);if(!l)return;const c=this.stage.unitsAt(t.clientX,t.clientY,di),h=Math.atan2(c.y-l.y,c.x-l.x)*180/Math.PI,d=t.altKey?1:pM,u=(Math.round(h/d)*d%360+360)%360;this.stage.turns.set(this.dragId,u*Math.PI/180);return}if(this.mode==="drag"&&this.dragId){const l=this.stage.unitsAt(t.clientX,t.clientY,di),c=this.group.find(v=>v.id===this.dragId);if(!c)return;let h=1;this.centring&&(h=Math.max(0,1-Math.hypot(l.x-this.grabAt.x,l.y-this.grabAt.y)/gM));const d=l.x+this.grabDx*h,u=l.y+this.grabDy*h,f=d-c.x,g=u-c.y;if(this.originAt){for(const v of this.group)this.stage.origins.set(v.id,{x:v.x,y:v.y});this.originAt=null}for(const v of this.group){const p=this.stage.ghosts.get(v.id)||v,m=(o=this.walk)==null?void 0:o.call(this,v.id,p.x,p.y,v.x+f,v.y+g);this.stage.ghosts.set(v.id,m?{x:m[0],y:m[1]}:{x:v.x+f,y:v.y+g})}(a=this.onDragMove)==null||a.call(this,this.dragId,d,u)}}hover(t,e=!1){const n=e?"crosshair":t?"grab":"";this.stage.hoveredId===t&&this.el.style.cursor===n||(this.stage.hoveredId=t,this.el.style.cursor=n)}tokenById(t){var n;const e=this.getState();return((n=e.scenes[e.activeScene])==null?void 0:n.tokens[t])||null}arrowAt(t){const e=this.getState(),n=e.scenes[e.activeScene];if(!n)return null;const s=It.tokens.arrow,r=mM/this.stage.cam.pxPerUnit(Math.max(1,this.stage.rect.height));for(let o=n.tokenOrder.length-1;o>=0;o--){const a=n.tokens[n.tokenOrder[o]];if(!a||typeof a.facing!="number"||!this.canGrab(a))continue;const l=Math.max(.05,a.size),c=l*s.length,h=l/2+l*s.gap,d=t.x-a.x,u=t.y-a.y,f=d*Math.cos(a.facing)+u*Math.sin(a.facing),g=-d*Math.sin(a.facing)+u*Math.cos(a.facing),v=Math.max(l/2,h-r);if(f>=v&&f<=h+c+r&&Math.abs(g)<=c*.46+r)return a}return null}up(t){var n,s,r,o,a,l,c,h,d;if(t.pointerId!==this.pointerId)return;if((s=(n=this.el).releasePointerCapture)==null||s.call(n,t.pointerId),this.pointerId=null,this.mode==="draw"){(r=this.drawing())==null||r.up(),this.mode=null;return}if(this.mode==="turn"&&this.dragId){const u=this.stage.turns.get(this.dragId);this.stage.turns.delete(this.dragId),this.moved&&typeof u=="number"&&((o=this.onTurn)==null||o.call(this,this.dragId,u)),this.dragId=null}else if(this.mode==="drag"&&this.dragId){const u=this.group.map(f=>({id:f.id,...this.stage.ghosts.get(f.id)}));for(const f of this.group)this.stage.ghosts.delete(f.id),this.stage.origins.delete(f.id);this.originAt=null,this.moved?(a=this.onDropGroup)==null||a.call(this,u.filter(f=>Number.isFinite(f.x))):this.narrowTo&&((l=this.onSelect)==null||l.call(this,this.narrowTo)),this.dragId=null,this.group=[],this.narrowTo=null}else this.pendingDeselect&&!this.moved&&(this.hasSelection()?(c=this.onSelect)==null||c.call(this,null):(h=this.onPing)==null||h.call(this,this.pressAt.x,this.pressAt.y,!1));this.pendingDeselect=!1,this.mode=null;const e=this.stage.unitsAt(t.clientX,t.clientY,di);this.hover(((d=vi(this.getState(),e.x,e.y,{isGm:!0}))==null?void 0:d.id)??null)}wheel(t){var r;if(t.preventDefault(),(r=this.locked)!=null&&r.call(this)||!t.deltaY)return;const[e,n]=this.stage.ndcAt(t.clientX,t.clientY),s=It.camera.zoomStep;this.stage.cam.zoomAt(t.deltaY>0?s:1/s,e,n)}context(t){var s;t.preventDefault();const e=this.stage.unitsAt(t.clientX,t.clientY,di),n=vi(this.getState(),e.x,e.y,{isGm:!0});(s=this.onContext)==null||s.call(this,n,t)}}function M(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s==="html"?n.innerHTML=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="dataset"?Object.assign(n.dataset,r):n.setAttribute(s,r===!0?"":r));for(const s of e.flat())s==null||s===!1||n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function ce(i,t,e,n){return e.id=i,M("div",{class:"field"},M("label",{for:i,text:t}),e,n?M("span",{class:"hint",text:n}):null)}function he(i,t){if(document.activeElement===i)return;const e=String(t);i.value!==e&&(i.value=e)}function qo(i,t){document.activeElement!==i&&i.checked!==!!t&&(i.checked=!!t)}const wi=i=>`#${(i&16777215).toString(16).padStart(6,"0")}`,rl=i=>parseInt(String(i).replace("#",""),16)&16777215,xM={square:"Square","hex-pointy":"Hex — pointy top","hex-flat":"Hex — flat top",none:"No grid"};class xd{constructor({onCommand:t,onImportMap:e,onImportToken:n,onAddBlank:s,onFit:r,onPickMap:o,onDetect:a,onClose:l}){this.onCommand=t,this.onClose=l,this.els={},this.els.library=M("select",{onchange:()=>{var u;const d=(u=this.library)==null?void 0:u[this.els.library.selectedIndex-1];this.els.library.selectedIndex=0,d&&o(d)}},M("option",{text:"Map pack…"})),this.els.libraryField=ce("g-lib","Library",this.els.library),this.els.libraryField.hidden=!0;const c=M("input",{type:"file",accept:"image/*,video/webm,video/mp4,.webm,.mp4",class:"file",onchange:d=>{var f;const u=(f=d.target.files)==null?void 0:f[0];d.target.value="",u&&e(u)}}),h=M("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:d=>{const u=[...d.target.files||[]];d.target.value="",u.length&&n(u)}});this.els.kind=M("select",{onchange:()=>this.pushGrid({kind:this.els.kind.value})},...ju.map(d=>M("option",{value:d,text:xM[d]}))),this.els.unitPx=M("input",{type:"number",min:"16",max:"1024",step:"1",oninput:()=>this.pushGrid({unitPx:vr(this.els.unitPx.value,16,1024,It.grid.unitPx)})}),this.els.ox=M("input",{type:"number",step:"1",oninput:()=>this.pushGrid({ox:vr(this.els.ox.value,-4096,4096,0)})}),this.els.oy=M("input",{type:"number",step:"1",oninput:()=>this.pushGrid({oy:vr(this.els.oy.value,-4096,4096,0)})}),this.els.color=M("input",{type:"color",oninput:()=>this.pushGrid({color:rl(this.els.color.value)})}),this.els.opacity=M("input",{type:"range",min:"0",max:"1",step:"0.02",oninput:()=>this.pushGrid({opacity:+this.els.opacity.value})}),this.els.unitLabel=M("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"sq",oninput:()=>this.pushGrid({unitLabel:this.els.unitLabel.value.slice(0,8)})}),this.els.distanceLabel=M("input",{type:"text",maxlength:"8",spellcheck:"false",placeholder:"ft",oninput:()=>this.pushGrid({distanceLabel:this.els.distanceLabel.value.slice(0,8)})}),this.els.measure=M("select",{onchange:()=>this.pushGrid({measure:this.els.measure.value})},M("option",{value:"chebyshev",text:"Diagonal = 1 (5e)"}),M("option",{value:"euclid",text:"True distance"}),M("option",{value:"alternating",text:"Diagonal 1-2-1"})),this.els.snap=M("select",{id:"g-snap",onchange:()=>this.pushGrid({snap:this.els.snap.value})},M("option",{value:"soft",text:"Soft — pulls when close"}),M("option",{value:"grid",text:"Grid — always on a square"}),M("option",{value:"off",text:"Off — anywhere at all"})),this.els.magnet=M("input",{type:"range",min:"0.02",max:"0.25",step:"0.01",id:"g-magnet",oninput:()=>this.pushGrid({magnet:+this.els.magnet.value})}),this.els.feet=M("input",{type:"number",min:"1",max:"1000",step:"1",oninput:()=>this.pushGrid({perUnit:vr(this.els.feet.value,.01,1e5,5)})}),this.els.mapNote=M("p",{class:"note"}),this.root=M("aside",{class:"panel flyout",id:"toolbar",hidden:!0},M("button",{type:"button",class:"ghost close",title:"Close (Esc)","aria-label":"Close",text:"×",onclick:()=>l==null?void 0:l()}),M("div",{class:"tool-sections"},M("section",{dataset:{tool:"map"}},M("h2",{text:"Map"}),this.els.libraryField,M("div",{class:"row"},M("button",{type:"button",class:"primary",text:"Load map…",onclick:()=>c.click()}),M("button",{type:"button",class:"ghost",text:"Fit",title:"Frame the whole map",onclick:r}),M("button",{type:"button",class:"ghost",text:"Detect grid",title:"Measure the square size from the image itself",onclick:a})),c,this.els.mapNote),M("section",{dataset:{tool:"grid"}},M("h2",{text:"Grid"}),ce("g-kind","Type",this.els.kind),ce("g-unit","Pixels per square",this.els.unitPx,"Read from the filename when a map pack states it, e.g. (33x17)."),M("div",{class:"pair"},ce("g-ox","Offset X",this.els.ox),ce("g-oy","Offset Y",this.els.oy)),M("div",{class:"pair"},ce("g-color","Line",this.els.color),ce("g-op","Opacity",this.els.opacity)),ce("g-snap","Snapping",this.els.snap),ce("g-magnet","Pull",this.els.magnet,"How close a token has to be before the grid takes it."),M("details",{class:"more"},M("summary",{text:"Distance & measuring"}),M("div",{class:"pair"},ce("g-per","Distance per cell",this.els.feet),ce("g-measure","Measuring",this.els.measure)),M("div",{class:"pair"},ce("g-unit-label","Cell called",this.els.unitLabel),ce("g-dist-label","Distance called",this.els.distanceLabel)))),M("section",{dataset:{tool:"tokens"}},M("h2",{text:"Tokens"}),M("div",{class:"row"},M("button",{type:"button",class:"primary",text:"Add from file…",onclick:()=>h.click()}),M("button",{type:"button",class:"ghost",text:"Blank",title:"A plain coloured disc",onclick:s})),h,M("p",{class:"note",text:"Drag to move. Shift-drag or middle-drag to pan. Scroll to zoom."}))))}addSection(t){this.root.querySelector(".tool-sections").append(t),t.hidden=this.root.dataset.open!==t.dataset.tool}show(t){this.escBound||(this.root.addEventListener("keydown",e=>{var n;e.key==="Escape"&&(e.stopPropagation(),(n=this.onClose)==null||n.call(this))}),this.escBound=!0),this.root.hidden=!t,this.root.dataset.open=t||"";for(const e of this.root.querySelectorAll("section[data-tool]"))e.hidden=t!=="all"&&e.dataset.tool!==t}setLibrary(t){this.library=t,this.els.libraryField.hidden=!t.length,t.length&&this.els.library.replaceChildren(M("option",{text:`Map pack — ${t.length} maps`}),...t.map(e=>M("option",{text:`${e.name.replace(/\.[a-z0-9]+$/i,"")}  ·  ${(e.size/1048576).toFixed(1)}MB`})))}pushGrid(t){this.sceneId&&this.onCommand(["scene.grid",this.sceneId,t])}refresh(t){const e=t.activeScene?t.scenes[t.activeScene]:null;if(this.sceneId=(e==null?void 0:e.id)||null,this.root.classList.toggle("no-scene",!e),!e)return;const n=e.grid;he(this.els.kind,n.kind),he(this.els.unitPx,n.unitPx),he(this.els.ox,n.ox),he(this.els.oy,n.oy),he(this.els.color,wi(n.color)),he(this.els.opacity,n.opacity),he(this.els.feet,n.perUnit),he(this.els.unitLabel,n.unitLabel),he(this.els.distanceLabel,n.distanceLabel),he(this.els.measure,n.measure),he(this.els.snap,n.snap),he(this.els.magnet,n.magnet),this.els.measure.disabled=qr(n.kind),this.els.snap.disabled=n.kind==="none",this.els.magnet.disabled=n.kind==="none"||n.snap!=="soft";const s=e.map?t.assets[e.map]:null;if(s){const r=(e.artW/(n.unitPx||1)).toFixed(1),o=(e.artH/(n.unitPx||1)).toFixed(1);this.els.mapNote.textContent=`${s.name} — ${e.artW}×${e.artH}px, about ${r}×${o} squares`+(/^video\//.test(s.mime||"")?` · moving map, ${(s.size/1048576).toFixed(1)}MB to each player`:s.scaled?` · sent as ${Math.round(s.size/1024)}KB`:"")}else this.els.mapNote.textContent="No map yet. The grid still works on a blank table."}static gridGuessFor(t,e,n){const s=Yx(t,e,n);return s?{unitPx:s.unitPx,ox:s.ox,oy:s.oy,cols:s.cols,rows:s.rows}:null}}function vr(i,t,e,n){const s=Number(i);return Number.isFinite(s)?Math.min(e,Math.max(t,s)):n}const _M=i=>((i*180/Math.PI+90)%360+360)%360,Uh=i=>(i-90)%360*Math.PI/180,Yo=15;class yM{constructor({onChange:t,label:e="Facing"}){this.onChange=t,this.degrees=0,this.enabled=!1,this.needle=document.createElement("i"),this.needle.className="dial-needle",this.readout=document.createElement("span"),this.readout.className="dial-readout",this.root=document.createElement("div"),this.root.className="dial",this.root.tabIndex=0,this.root.setAttribute("role","slider"),this.root.setAttribute("aria-label",e),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","359"),this.root.append(this.needle,this.readout),this.root.addEventListener("pointerdown",n=>this.begin(n)),this.root.addEventListener("keydown",n=>this.key(n))}begin(t){if(!this.enabled)return;t.preventDefault(),this.root.focus(),this.root.setPointerCapture(t.pointerId);const e=s=>this.aim(s),n=()=>{this.root.removeEventListener("pointermove",e),this.root.removeEventListener("pointerup",n),this.root.removeEventListener("pointercancel",n)};this.root.addEventListener("pointermove",e),this.root.addEventListener("pointerup",n),this.root.addEventListener("pointercancel",n),this.aim(t)}aim(t){const e=this.root.getBoundingClientRect(),n=t.clientX-(e.left+e.width/2),s=t.clientY-(e.top+e.height/2),r=Math.atan2(n,-s)*180/Math.PI;this.set(Math.round(r/Yo)*Yo,!0)}key(t){if(!this.enabled)return;const e=t.shiftKey?45:Yo,s={ArrowRight:e,ArrowUp:e,ArrowLeft:-e,ArrowDown:-e,Home:-this.degrees,End:180-this.degrees}[t.key];s!==void 0&&(t.preventDefault(),t.stopPropagation(),this.set(this.degrees+s,!0))}set(t,e=!1){var s;const n=(Math.round(t)%360+360)%360;n===this.degrees&&!e||(this.degrees=n,this.paint(),e&&((s=this.onChange)==null||s.call(this,n)))}setEnabled(t){this.enabled=t,this.root.classList.toggle("off",!t),this.root.setAttribute("aria-disabled",t?"false":"true"),this.root.tabIndex=t?0:-1,this.paint()}paint(){this.needle.style.transform=`rotate(${this.degrees}deg)`,this.readout.textContent=this.enabled?`${this.degrees}°`:"—",this.root.setAttribute("aria-valuenow",String(this.degrees)),this.root.setAttribute("aria-valuetext",this.enabled?`${this.degrees} degrees`:"no facing")}}const MM={bg:"Background",token:"Tokens",gm:"GM only"};class SM{constructor({onCommand:t,onDelete:e,onSizeCommitted:n}){this.onCommand=t,this.id=null,this.els={};const s=r=>{this.id&&this.onCommand(["tok.patch",this.id,r])};this.els.name=M("input",{type:"text",maxlength:"48",placeholder:"Unnamed",oninput:()=>s({name:this.els.name.value.slice(0,48)})}),this.els.mark=M("input",{type:"text",maxlength:"24",placeholder:"Or select it and press Enter",oninput:()=>s({mark:this.els.mark.value})}),this.els.size=M("input",{type:"number",min:String(It.tokens.minSize),max:String(It.tokens.maxSize),step:"0.25",oninput:()=>s({size:wM(+this.els.size.value,It.tokens.minSize,It.tokens.maxSize)}),onchange:()=>{this.id&&(n==null||n(this.id))}}),this.els.border=M("input",{type:"color",oninput:()=>{this.player||s({border:rl(this.els.border.value)})},onchange:()=>{this.player&&this.player.onColor(rl(this.els.border.value))}}),this.els.borderField=ce("t-border","Border",this.els.border),this.els.shape=M("select",{onchange:()=>s({shape:this.els.shape.value})},M("option",{value:"circle",text:"Circle"}),M("option",{value:"square",text:"Square"})),this.els.layer=M("select",{onchange:()=>s({layer:this.els.layer.value})},...Xa.map(r=>M("option",{value:r,text:MM[r]}))),this.els.hp=M("input",{type:"number",min:"0",step:"1",oninput:()=>s({hp:Math.max(0,Math.round(+this.els.hp.value||0))})}),this.els.maxHp=M("input",{type:"number",min:"0",step:"1",oninput:()=>s({maxHp:Math.max(0,Math.round(+this.els.maxHp.value||0))})}),this.els.rot=M("input",{type:"range",min:"0",max:"359",step:"1",oninput:()=>s({rot:+this.els.rot.value*Math.PI/180})}),this.els.dial=new yM({onChange:r=>s({facing:Uh(r)})}),this.els.facingOn=M("input",{type:"checkbox",id:"t-facing",onchange:()=>{const r=this.els.facingOn.checked;this.els.dial.setEnabled(r),s({facing:r?Uh(this.els.dial.degrees):null})}}),this.els.lightOn=M("input",{type:"checkbox",id:"t-light",onchange:()=>{this.els.lightRange.disabled=!this.els.lightOn.checked,s({light:this.els.lightOn.checked})}}),this.els.lightRange=M("input",{type:"number",id:"t-light-range",min:"1",max:String(Dr),step:"1","aria-label":"Light reach",oninput:()=>{const r=Math.round(+this.els.lightRange.value);r>=1&&s({lightRange:Math.min(Dr,r)})}}),this.els.lightUnit=M("span",{class:"hint"}),this.els.hidden=M("input",{type:"checkbox",onchange:()=>s({hidden:this.els.hidden.checked})}),this.els.status=$a.map(r=>M("button",{type:"button",class:"ghost",dataset:{status:r},"aria-pressed":"false",onclick:()=>{const o=new Set(this.status||[]);o.has(r)?o.delete(r):o.add(r),s({status:$a.filter(a=>o.has(a))})}},M("span",{class:"icon",html:dd(r)}),M("span",{text:Wl[r].label}))),this.els.where=M("p",{class:"note"}),this.root=M("aside",{class:"panel",id:"inspector"},M("div",{class:"panel-head"},M("h1",{text:"Token"})),M("div",{class:"empty",text:"Nothing selected. Click a token; shift-click for more."}),M("div",{class:"multi"},this.els.count=M("p",{class:"count"}),M("p",{class:"note",text:"Drag any of them to move them together, or nudge them with the arrow keys. Shift-click to add or remove one."}),M("button",{type:"button",class:"danger",text:"Delete selected",onclick:()=>e()})),M("div",{class:"body"},ce("t-name","Name",this.els.name),ce("t-mark","Written on it",this.els.mark),M("div",{class:"pair"},ce("t-size","Size (squares)",this.els.size),this.els.borderField),M("div",{class:"pair gm-only"},ce("t-shape","Shape",this.els.shape),ce("t-layer","Layer",this.els.layer)),M("div",{class:"pair gm-only"},ce("t-hp","HP",this.els.hp),ce("t-maxhp","Max HP",this.els.maxHp)),M("div",{class:"facing-row"},this.els.dial.root,M("div",{class:"col"},M("label",{class:"check",for:"t-facing"},this.els.facingOn," Facing"),M("span",{class:"hint",text:"Which way it is looking. Drag the dial, or use the arrow keys."}))),M("div",{class:"light-row"},M("label",{class:"check",for:"t-light"},this.els.lightOn," Light"),this.els.lightRange,this.els.lightUnit),M("div",{class:"field"},M("label",{text:"Status"}),M("div",{class:"status-grid"},...this.els.status)),ce("t-rot","Artwork rotation",this.els.rot),M("label",{class:"check gm-only",for:"t-hidden"},this.els.hidden," Hidden from players"),this.els.where,M("div",{class:"row gm-only"},M("button",{type:"button",class:"ghost",text:"To front",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!0])}),M("button",{type:"button",class:"ghost",text:"To back",onclick:()=>this.id&&this.onCommand(["tok.raise",this.id,!1])})),M("button",{type:"button",class:"danger",text:"Delete token",onclick:()=>this.id&&e()}))),this.els.hidden.id="t-hidden",this.player=null}setPlayer(t){this.player=t,this.root.classList.toggle("player",!!t),this.els.borderField.querySelector("label").textContent=t?"Your colour":"Border"}refresh(t,e,n=e?1:0){const s=t.activeScene?t.scenes[t.activeScene]:null,r=e&&(s==null?void 0:s.tokens[e])||null;this.id=(r==null?void 0:r.id)||null,this.count=n;const o=n>1;if(this.root.classList.toggle("no-token",!r&&!o),this.root.classList.toggle("many",o),o&&(this.els.count.textContent=`${n} tokens selected`),!r||o)return;he(this.els.name,r.name),he(this.els.mark,r.mark||""),he(this.els.size,jo(r.size)),he(this.els.border,wi(r.border)),he(this.els.shape,r.shape),he(this.els.layer,r.layer),he(this.els.hp,r.hp),he(this.els.maxHp,r.maxHp),he(this.els.rot,Math.round((r.rot||0)*180/Math.PI)%360),qo(this.els.hidden,r.hidden),this.status=r.status||[];for(const h of this.els.status)h.setAttribute("aria-pressed",String(this.status.includes(h.dataset.status)));qo(this.els.lightOn,!!r.light),he(this.els.lightRange,r.lightRange??2),this.els.lightRange.disabled=!r.light,this.els.lightUnit.textContent=`${s.grid.kind.startsWith("hex")?"hexes":"squares"} of light round it`;const a=typeof r.facing=="number"&&Number.isFinite(r.facing);qo(this.els.facingOn,a),this.els.dial.setEnabled(a),document.activeElement===this.els.dial.root&&this.id===this.dialFor||this.els.dial.set(a?_M(r.facing):0),this.dialFor=this.id;const c=s.grid;this.els.where.textContent=`At ${bM(r.x,r.y)} · ${jo(r.x)}, ${jo(r.y)} units`+(c.kind==="none"?"":` · ${c.perUnit}${c.distanceLabel} per ${c.unitLabel}`)}}function bM(i,t){const e=Math.floor(i),n=Math.floor(t);return`${e<0?`-${Nh(-e-1)}`:Nh(e)}${n+1}`}function Nh(i){let t="",e=i;do t=String.fromCharCode(65+e%26)+t,e=Math.floor(e/26)-1;while(e>=0);return t}function wM(i,t,e){return Number.isFinite(i)?Math.min(e,Math.max(t,i)):t}function jo(i){return Math.round(i*100)/100}const EM=new Set(["INPUT","SELECT","TEXTAREA"]),TM=new Set(["Enter","NumpadEnter","Space"]),AM=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown","Home","End"]);function RM(i=null){const t=document.activeElement;return t?t.tagName==="BUTTON"?!i||TM.has(i.code):EM.has(t.tagName)||t.isContentEditable:!1}class CM{constructor(t={},e=null){this.actions=new Map(Object.entries(t)),this.held=new Set,this.onDown=n=>{RM(n)||(n.repeat||this.held.add(n.code),(e!=null&&e(n.code,n)||AM.has(n.code))&&n.preventDefault())},this.onUp=n=>this.held.delete(n.code),this.onBlur=()=>this.held.clear(),window.addEventListener("keydown",this.onDown),window.addEventListener("keyup",this.onUp),window.addEventListener("blur",this.onBlur)}action(t){const e=this.actions.get(t);if(!e)return!1;for(const n of e)if(this.held.has(n))return!0;return!1}axis(t,e){return(this.action(e)?1:0)-(this.action(t)?1:0)}vector(t,e,n,s,r={x:0,y:0}){r.x=this.axis(t,e),r.y=this.axis(n,s);const o=Math.hypot(r.x,r.y);return o>1&&(r.x/=o,r.y/=o),r}dispose(){window.removeEventListener("keydown",this.onDown),window.removeEventListener("keyup",this.onUp),window.removeEventListener("blur",this.onBlur),this.held.clear()}}const PM=`# What's new

<!--
  Shown in the app under "What's new" (src/ui/whats-new.js), newest first.
  Written for the people at the table, not for developers: what they can do
  now, or what works differently. Add the entry before tagging the release;
  the heading must be the tag, a dash, and the date.
-->

## v0.1.5 — 8 October 2026

- Moving maps: load an animated battle map (WebM or MP4) and it loops on the board for everyone. The map pack has one to start with, a campfire clearing.
- Walls and masks now stop players' tokens. A token collides as its centre, so a narrow door is never a squeeze, and it slides along a wall rather than sticking.
- The drag ruler measures the way a token would have to walk, round walls and through doorways, not straight through them.
- Arrow keys move a token half a square at a time.
- In the dark, a token is seen when its centre is in the light, not when an edge pokes into it.
- Write on a token: select it, press Enter and type. The text shrinks to fit inside the token.
- Starting and joining show what is happening, step by step, and the table only appears once it is ready. Saved tables open without a stutter.
- An invite link takes a returning player straight to the table, and a reload brings anyone back to where they were.
- The start screen has three cards: host a table, resume one, or join one.
- Hearth tells you when you and the GM are on different versions, and what's new in each one.
- Voice: set each person's volume from silent to twice as loud, and mute anyone for yourself. The GM can silence a player for everyone. Remembered by name.
- Weather sounds are much quieter, and duck while someone is talking.
- The Players card holds voice, music, sound, invite and leave. Click a name for that person's volume. Leaving asks first.
- Name your table in the Scenes panel.
- The GM is red, with red dice and red blank tokens.
- Dice sit in one row with the chat box under them; roll anything else with /r in the chat.
- Bigger condition icons, and names stay along the bottom of a token whichever way it faces.

## v0.1.4 — 7 October 2026

- New transition: Flood. Water rises up the screen, the map sways under it, and it sinks into the dark.
- Full darkness is now truly black for players: they see only what light shows them. Anything less than full is still a shade the map shows through.
- The Players card has a row of buttons under the list. Copy the invite link in one press, and set the ambience volume while there is weather.
- Players have everything they need there: their tokens, voice, and leaving. The tool rail is the GM's alone.
- The chat and dice sit against the left edge of the screen.
- The GM's tool rail now runs Scenes, FX, Tokens, Map, Grid, Light.

## v0.1.3 — 6 October 2026

- More of the screen is map. The tool rail floats over its edge, and the Players card sits in the top-right corner.
- The token panel opens beside the token, from the gear on it or a double-click.
- Find walls automatically: click a wall on the map and the Light tool outlines it and everything joined to it. Mask the void outlines the rooms on maps drawn on black.
- Tokens can have conditions: downed, dead, poisoned and more, shown as badges. The GM sets them, and players can set them on their own tokens.
- A player's tokens glow while they talk.
- W and S pan the right way, and a token walked with the arrow keys is followed when it nears the edge of the screen.

## v0.1.2 — 6 October 2026

- The Light tool: draw walls and paint masks. In the dark they stop light, with soft shadows, and players only see what their light reaches.
- New transition: Freeze. Frost creeps in, the ice cracks, and the light drains away.
- Bring down the intermission, change scene and lift it again, all from the Scenes panel.
- Opening a saved table no longer throws its last roll again.

## v0.1.1 — 5 October 2026

- Scenes: build them ahead and move the table between them. Players' tokens come along; everything else stays with its scene.
- In the dark, players see by their own light and any light their party shares.
- Every transition now ends on the same black, and changing the style while the table is dark no longer shows players anything early.

## v0.1.0 — 5 October 2026

- The first release. Host a table from your browser and invite players with a code: no server and no accounts.
- Maps with a grid that lines itself up, tokens, rulers, dice with secret rolls and quick rolls, and chat.
- GM effects: weather, darkness and torchlight, lightning, and transitions to black between scenes.
- Voice chat, ambient sound, and music shared from one of the GM's tabs.
`,_d="hearth.seen-release";function yd(i=PM){const t=[];let e=null;for(const n of i.replace(/<!--[\s\S]*?-->/g,"").split(`
`)){const s=/^##\s+(\S+)\s*(?:[—–-]\s*(.+))?$/.exec(n.trim());s?(e={version:s[1],date:s[2]||"",items:[],notes:[]},t.push(e)):e&&/^\s*[-*]\s+/.test(n)?e.items.push(n.replace(/^\s*[-*]\s+/,"").trim()):e&&n.trim()&&!n.startsWith("#")&&e.notes.push(n.trim())}return t}const ol=()=>{var i;return((i=yd()[0])==null?void 0:i.version)||""};function LM(){try{return!!ol()&&localStorage.getItem(_d)!==ol()}catch{return!1}}function IM(){try{localStorage.setItem(_d,ol())}catch{}}const Md=new Set;function Sd(i,t=""){const e=M("button",{type:"button",class:`whats-new-link ${t}`.trim(),text:i,title:"What's new",onclick:()=>DM()});return e.classList.toggle("unseen",LM()),Md.add(e),e}function DM(){IM();for(const r of Md)r.classList.remove("unseen");if(document.getElementById("whats-new"))return;const i=()=>{var r;document.removeEventListener("keydown",t,!0),s.remove(),(r=e==null?void 0:e.focus)==null||r.call(e)},t=r=>{r.key==="Escape"&&(r.stopPropagation(),r.preventDefault(),i())},e=document.activeElement,n=M("button",{type:"button",class:"ghost close","aria-label":"Close",title:"Close (Esc)",text:"×",onclick:i}),s=M("div",{id:"whats-new",onclick:r=>{r.target===s&&i()}},M("div",{class:"whats-new-card",role:"dialog","aria-modal":"true","aria-labelledby":"whats-new-title"},M("header",{},M("h2",{id:"whats-new-title",text:"What's new"}),n),M("div",{class:"whats-new-body"},...yd().map(r=>M("section",{},M("h3",{},M("span",{class:"v",text:r.version}),r.date?M("span",{class:"date",text:r.date}):null),...r.notes.map(o=>M("p",{text:o})),r.items.length?M("ul",{},...r.items.map(o=>M("li",{text:o}))):null)))));document.body.append(s),document.addEventListener("keydown",t,!0),n.focus()}const Fh=()=>pd(()=>import("./room-D300m2Q-.js"),[],import.meta.url);class Us{constructor(t,e={}){this.role=t,this.handlers=e,this.code="",this.name="",this.selfId=null,this.gmId=null,this.admitted=!1,this.link=null,this.members=new Map,this.versions=new Map,this.pending=new Set,this.backlog=[],this.closed=!1,this.voice=null}get isGm(){return this.role===Je}roster(){return[...this.members.values()]}static async host(t,e,n=null){const s=await Fh(),r=new Us(Je,e);return r.open(s,n?s.normaliseCode(n):s.randomCode(),t),r.members.set(r.selfId,kr(r.selfId,r.name,{role:Je,color:el})),r.emitRoster(),r}static async join(t,e,n){const s=await Fh(),r=new Us(ti,n);return r.open(s,s.normaliseCode(t),e),r}open(t,e,n){const s=It.multiplayer;this.code=e,this.name=Kr(n,this.isGm?"GM":"Player"),this.selfId=t.selfId,this.link=t.joinRoom({appId:s.appId,code:e,maxPeers:s.maxPlayers-1},{onPeerJoin:r=>this.peerJoined(r),onPeerLeave:r=>this.peerLeft(r),onMessage:(r,o)=>this.receive(r,o),onRelay:r=>{var o,a;return(a=(o=this.handlers).onRelay)==null?void 0:a.call(o,r)},onAsset:(r,o,a)=>{var l,c;this.entitled(a)&&((c=(l=this.handlers).onAsset)==null||c.call(l,r,o,a))},onPeerStream:(r,o,a)=>{var l;return(l=this.voice)==null?void 0:l.stream(r,o,a)},onAssetProgress:(r,o,a)=>{var l,c;this.entitled(a)&&((c=(l=this.handlers).onAssetProgress)==null||c.call(l,r,o,a))}})}listen(t){if(this.handlers=t,!!t.onMessage)for(const[e,n]of this.backlog.splice(0))t.onMessage(e,n)}entitled(t){return this.isGm?this.members.has(t)&&t!==this.selfId:t===this.gmId}leave(){var t;this.closed||(this.closed=!0,(t=this.link)==null||t.leave())}peerJoined(t){var e;this.pending.add(t),this.link.send(l_(this.name,this.isGm),t),(e=this.voice)==null||e.join(t)}peerLeft(t){var e,n,s,r,o;this.pending.delete(t),this.versions.delete(t),(e=this.voice)==null||e.leave(t),this.isGm?this.members.delete(t)&&this.emitRoster():t===this.gmId?(this.gmId=null,(s=(n=this.handlers).onGmLeft)==null||s.call(n)):this.members.delete(t)&&((o=(r=this.handlers).onRoster)==null||o.call(r,this.roster()))}receive(t,e){var n,s,r,o,a,l,c;if(!(this.closed||!t||typeof t.t!="string")){if(t.t==="hello")return this.onHello(c_(t),e);if((t.t==="voice"||t.t==="music")&&this.members.has(e))return(n=this.voice)==null?void 0:n.message(t,e);if(this.entitled(e)){if(this.isGm||t.t!=="roster"&&t.t!=="nope"){this.handlers.onMessage?this.handlers.onMessage(t,e):this.backlog.push([t,e]);return}if(t.t==="roster"){const h=u_(t);if(!h)return;this.members=new Map(h.map(d=>[d.peerId,d])),!this.admitted&&this.members.has(this.selfId)&&(this.admitted=!0,(r=(s=this.handlers).onAdmitted)==null||r.call(s)),(a=(o=this.handlers).onRoster)==null||a.call(o,this.roster())}else t.t==="nope"&&((c=(l=this.handlers).onRefused)==null||c.call(l,f_(t)),this.leave())}}}onHello(t,e){var n,s,r,o,a,l;if(!(!t||!this.pending.has(e))){if(this.pending.delete(e),this.versions.set(e,t.version),this.isGm){if(t.gm)return;if(t.protocol!==tl)return this.link.send({t:"nope",why:"protocol"},e);if(this.members.size>=It.multiplayer.maxPlayers)return this.link.send({t:"nope",why:"full"},e);const c=new Set(this.roster().map(u=>u.color)),h=Bl.filter(u=>u!==el),d=h.find(u=>!c.has(u))??h[this.members.size%h.length];this.members.set(e,kr(e,t.name,{role:ti,color:d})),this.emitRoster(),(s=(n=this.handlers).onSeated)==null||s.call(n,e);return}if(!(!t.gm||this.gmId)){if(t.protocol!==tl)return(o=(r=this.handlers).onRefused)==null||o.call(r,"protocol"),this.leave();this.gmId=e,(l=(a=this.handlers).onGmFound)==null||l.call(a)}}}setColor(t,e){const n=this.members.get(t);!n||n.color===e||(this.members.set(t,{...n,color:e}),this.emitRoster())}emitRoster(){var t,e;this.link.send(h_(this.roster())),(e=(t=this.handlers).onRoster)==null||e.call(t,this.roster())}}const bd="vtt.name",wd="vtt.recent",kM=6,Xl=8,UM=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,NM=14e3;class FM{constructor({onEnter:t,onResume:e,onOpenFile:n}){var a;this.onEnter=t,this.onResume=e,this.onOpenFile=n,this.lobby=null,this.hintTimer=0,this.els={},this.els.name=M("input",{id:"splash-name",maxlength:String(pn.name),autocomplete:"nickname",spellcheck:"false",placeholder:"What the table calls you",value:Oh()}),this.els.code=M("input",{id:"splash-code",class:"code-input",maxlength:String(Xl),autocomplete:"off",spellcheck:"false",placeholder:"CODE","aria-label":"Invite code",value:BM(),oninput:()=>{this.els.code.value=this.els.code.value.toUpperCase().replace(/\s+/g,"")},onkeydown:l=>{l.key==="Enter"&&this.join()}}),this.els.host=M("button",{class:"primary big",text:"Start a table",onclick:()=>this.host()}),this.els.saved=M("ul",{class:"saved-tables","aria-label":"Saved tables"});const s=M("input",{type:"file",accept:".vtt,application/json",class:"file",onchange:l=>{var h;const c=(h=l.target.files)==null?void 0:h[0];l.target.value="",c&&this.openFile(c)}});if(this.els.openFile=M("button",{class:"ghost small",text:"Open a table file…",onclick:()=>s.click()}),this.els.fileInput=s,this.els.join=M("button",{class:"primary big",text:"Join",onclick:()=>this.join()}),this.els.recent=M("ul",{class:"saved-tables recent","aria-label":"Recently joined"}),this.els.status=M("p",{class:"splash-status",role:"status","aria-live":"polite"}),this.els.steps=M("ol",{class:"connect-steps"}),this.els.detail=M("p",{class:"connect-detail","aria-live":"polite"}),this.els.connecting=M("div",{class:"connecting",hidden:!0},M("div",{class:"ember","aria-hidden":"true"},M("i"),M("i"),M("i"),M("i"),M("b")),this.els.steps,this.els.detail),this.els.cancel=M("button",{class:"ghost",text:"Cancel",hidden:!0,onclick:()=>this.cancel()}),this.root=M("div",{id:"splash"},M("div",{class:"splash-card"},M("header",{},M("div",{class:"title-row"},M("h1",{},"Hearth",M("span",{class:"kind",text:"Virtual tabletop"})),M("p",{class:"splash-version"},Sd(In,"version-pill"))),M("p",{class:"tagline",text:"No server. The GM's browser is the table, and players connect straight to it."})),this.els.connecting,this.els.inviteTitle=M("h2",{class:"invite-title"}),M("div",{class:"field"},M("label",{for:"splash-name",text:"Your name"}),this.els.name),M("div",{class:"invite-join"},this.els.inviteJoin=M("button",{class:"primary big",text:"Join the table",onclick:()=>this.join()}),M("button",{class:"ghost small",text:"Other options",onclick:()=>this.showChoices()})),M("div",{class:"splash-choices"},M("section",{class:"choice"},M("h2",{text:"Host a table"}),M("p",{class:"grow",text:"You're the GM. Start a fresh table and get an invite code for your players."}),M("div",{class:"stack"},this.els.host,this.els.openFile),this.els.fileInput),M("section",{class:"choice"},M("h2",{text:"Resume a table"}),this.els.noSaved=M("p",{class:"grow",text:"Tables you host are saved in this browser as you play. Pick one up here where you left off."}),this.els.saved),M("section",{class:"choice"},M("h2",{text:"Join a table"}),M("p",{text:"Enter the invite code your GM gave you."}),M("div",{class:"join-row"},this.els.code,this.els.join),this.els.recent)),M("div",{class:"splash-foot"},this.els.status,this.els.cancel))),document.body.append(this.root),this.listSaved(),this.listRecent(),!window.isSecureContext||!((a=globalThis.crypto)!=null&&a.subtle)){for(const l of["host","join","code"])this.els[l].disabled=!0;this.setStatus("This page is not served securely (https), so the browser will not let it connect to other players. Open it over https — or on localhost — to host or join.","error")}const r=OM();if(r&&!this.els.host.disabled){this.rehost(r);return}const o=this.els.code.value;if(o&&!this.els.join.disabled){if(Oh()){this.join();return}this.root.classList.add("invite"),this.els.inviteTitle.textContent=`Joining the table at ${o}`,this.els.name.addEventListener("keydown",l=>{l.key==="Enter"&&this.root.classList.contains("invite")&&this.join()})}this.els.name.focus()}async rehost(t){const e=(await xh()).find(n=>n.code===t);e?this.resume(e.id):this.host(t)}showChoices(){this.root.classList.remove("invite")}setStatus(t,e=""){this.els.status.textContent=t,this.els.status.dataset.kind=e}setBusy(t){for(const e of["name","code","host","join","openFile","inviteJoin"])this.els[e].disabled=t;for(const e of this.root.querySelectorAll(".saved-tables button"))e.disabled=t;this.els.cancel.hidden=!t,this.root.classList.toggle("busy",t),this.els.connecting.hidden=!t,t||this.detail("")}plan(...t){this.steps=t,this.at=-1,this.els.steps.replaceChildren(...t.map(e=>M("li",{text:e}))),this.advance(0)}advance(t){!this.steps||t<=this.at||(this.at=Math.min(t,this.steps.length-1),[...this.els.steps.children].forEach((e,n)=>{e.dataset.state=n<this.at?"done":n===this.at?"now":"todo",n===this.at?e.setAttribute("aria-current","step"):e.removeAttribute("aria-current")}))}detail(t){this.els.detail.textContent=t||""}async listSaved(){const t=await xh();this.els.saved.replaceChildren(...t.map(e=>{const n=M("button",{class:"ghost small del",text:"×",title:"Delete this saved table","aria-label":`Delete ${e.name}`,onclick:async()=>{if(!n.classList.contains("armed")){n.classList.add("armed"),n.textContent="Delete?",setTimeout(()=>{n.classList.remove("armed"),n.textContent="×"},3e3);return}await M_(e.id),this.listSaved()}});return M("li",{},M("div",{class:"what"},M("b",{text:e.name}),M("span",{text:`${zh(e.savedAt)}${e.tokens?` · ${e.tokens} token${e.tokens===1?"":"s"}`:""}`})),M("button",{class:"primary small",text:"Resume",onclick:()=>this.resume(e.id)}),n)})),this.els.saved.hidden=!t.length,this.els.noSaved.hidden=!!t.length}listRecent(){const t=al();this.els.recent.replaceChildren(...t.map(e=>M("li",{},M("div",{class:"what"},M("b",{text:e.gm?`${e.gm}'s table`:"A table"}),M("span",{text:`${e.code} · ${zh(e.at)}`})),M("button",{class:"primary small",text:"Join","aria-label":`Join ${e.code}`,onclick:()=>{this.els.code.value=e.code,this.join()}}),M("button",{class:"ghost small del",text:"×",title:"Forget this table","aria-label":`Forget ${e.code}`,onclick:()=>{Ed(al().filter(n=>n.code!==e.code)),this.listRecent()}})))),this.els.recent.hidden=!t.length}async resume(t){this.setBusy(!0),this.setStatus(""),this.plan("Setting the table","Opening a room");let e;try{e=await this.onResume(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not resume that table.","error")}this.host(e.code,!0)}async openFile(t){this.setBusy(!0),this.setStatus(""),this.plan(`Reading ${t.name}`,"Setting the table","Opening a room");let e;try{e=await this.onOpenFile(t)}catch(n){return this.setBusy(!1),this.setStatus(n.message||"Could not open that file.","error")}this.host(e.code,!0)}async host(t=null,e=!1){const n=this.els.name.value;Bh(n),this.setBusy(!0),this.setStatus(""),e?this.advance(this.steps.length-1):this.plan("Opening a room","Setting out the table");try{this.lobby=await Us.host(n,void 0,t)}catch(s){return this.setBusy(!1),this.setStatus(`Could not open a room: ${s.message||s}`,"error")}this.enter()}async join(){const t=this.els.code.value.trim();if(!t)return this.els.code.focus(),this.setStatus("Type the invite code your GM gave you.","error");const e=this.els.name.value;Bh(e),this.setBusy(!0),this.setStatus(""),this.plan("Reaching the relays",`Finding the table at ${t.toUpperCase()}`,"Taking a seat","Receiving the table"),this.hintTimer=setTimeout(()=>{var n;this.setStatus((n=this.lobby)!=null&&n.gmId?"The GM is there but hasn't seated you — the table may be full.":"Still nothing. Connecting can take 10–20 seconds; check the code matches exactly.","warn")},NM);try{this.lobby=await Us.join(t,e,{onAdmitted:()=>this.enter(),onRefused:n=>this.refused(n),onGmFound:()=>this.advance(2),onRelay:n=>{var s;n.open&&this.advance(1),!((s=this.lobby)!=null&&s.gmId)&&n.total&&!n.open&&this.setStatus(`No relay reachable (0 of ${n.total}). Your network may be blocking them.`,"error")}})}catch(n){this.reset(),this.setStatus(`Could not join: ${n.message||n}`,"error")}}refused(t){this.reset(),this.setStatus(t==="protocol"?"That table is running a different version. One of you needs to reload.":"That table is full.","error")}cancel(){this.reset(),this.setStatus("")}reset(){var t;clearTimeout(this.hintTimer),(t=this.lobby)==null||t.leave(),this.lobby=null,this.setBusy(!1),this.showChoices()}async enter(){clearTimeout(this.hintTimer);const t=this.lobby;t.isGm||zM(t),t.handlers={},this.advance(this.steps.length-1),this.setStatus(""),this.els.cancel.hidden=!0;try{await this.onEnter(t,{detail:e=>this.detail(e)})}catch(e){console.error(e)}this.advance(this.steps.length),[...this.els.steps.children].forEach(e=>{e.dataset.state="done"}),this.root.classList.add("leaving"),setTimeout(()=>this.root.remove(),UM?0:420)}}function OM(){return(new URLSearchParams(location.search).get("host")||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,Xl)}function BM(){return(new URLSearchParams(location.search).get("join")||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,Xl)}function Oh(){try{return localStorage.getItem(bd)||""}catch{return""}}function Bh(i){try{localStorage.setItem(bd,i.trim())}catch{}}function al(){try{const i=JSON.parse(localStorage.getItem(wd)||"[]");return Array.isArray(i)?i.filter(t=>t&&typeof t.code=="string"&&t.code):[]}catch{return[]}}function Ed(i){try{localStorage.setItem(wd,JSON.stringify(i.slice(0,kM)))}catch{}}function zM(i){var n;const t=String(i.code||"").toUpperCase();if(!t)return;const e=((n=i.roster().find(s=>s.peerId===i.gmId))==null?void 0:n.name)||"";Ed([{code:t,gm:e,at:Date.now()},...al().filter(s=>s.code!==t)])}function zh(i){const t=new Date(i),e=new Date,n=Math.round((new Date(e.toDateString())-new Date(t.toDateString()))/864e5),s=t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return n===0?`today, ${s}`:n===1?`yesterday, ${s}`:n<7?t.toLocaleDateString([],{weekday:"long"}):t.toLocaleDateString([],{day:"numeric",month:"short",year:n>300?"numeric":void 0})}async function GM(i){var t;try{if((t=navigator.clipboard)!=null&&t.writeText)return await navigator.clipboard.writeText(i),!0}catch{}try{const e=document.createElement("textarea");e.value=i,e.setAttribute("readonly",""),e.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.appendChild(e),e.select();const n=document.execCommand("copy");return e.remove(),n}catch{return!1}}function HM(i){if(!i)return;const t=document.createRange();t.selectNodeContents(i);const e=window.getSelection();e.removeAllRanges(),e.addRange(t)}const VM={map:'<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z"/><path d="M9 4v13.5M15 6.5V20"/>',grid:'<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M9.2 3.5v17M14.8 3.5v17M3.5 9.2h17M3.5 14.8h17"/>',tokens:'<path d="M6 20.5h12"/><path d="M8 20.5c-.3-2.6.9-4.5 3.2-6.1L9.6 13c-1.3.8-2.9.7-3.6-.4-.6-.9-.3-1.9.6-2.6l3.6-3.1.6-3.1 2.1 1.9c3.6.8 5.6 4.3 5.1 8.8-.2 2.2-.7 4.1-1.5 6"/><circle cx="12.6" cy="8.9" r=".7" fill="currentColor" stroke="none"/>',undo:'<path d="M9 7 4.5 11.5 9 16"/><path d="M5 11.5h9a5 5 0 0 1 0 10h-2"/>',redo:'<path d="M15 7l4.5 4.5L15 16"/><path d="M19 11.5h-9a5 5 0 0 0 0 10h2"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><rect x="8.5" y="8.5" width="7" height="7" rx="1"/>',save:'<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M5 19.5h14"/>',fx:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="2.5"/>',light:'<path d="M14 3.5v17"/><path d="M14 7.5h6.5M14 12h6.5M14 16.5h6.5M17.3 3.5v4M17.3 12v4.5"/><circle cx="7" cy="12" r="2"/><path d="M7 6.5v1.5M7 16v1.5M2.5 12H4M3.8 8.8l1 1M3.8 15.2l1-1"/>',scenes:'<path d="M12 3.5 21 8l-9 4.5L3 8z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16l9 4.5 9-4.5"/>',music:'<path d="M9 18V5.5l11-2v12.5"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',invite:'<circle cx="10" cy="8.5" r="3.5"/><path d="M3.5 20c.8-3.6 3.3-5.5 6.5-5.5 1.6 0 3 .5 4.1 1.4"/><path d="M18 13v7M14.5 16.5h7"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',check:'<path d="M5 12.5 10 17.5 19.5 7"/>',voice:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',leave:'<path d="M14 4H6.5A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20H14"/><path d="M11 12h10M17.5 8.5 21 12l-3.5 3.5"/>'};function Ln(i){const t=document.createElement("span");return t.className="icon",t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${VM[i]}</svg>`,t}class WM{constructor(t,{onOpen:e}){this.onOpen=e,this.open=null,this.buttons=new Map,this.root=M("nav",{id:"rail","aria-label":"Tools"},...t.map(n=>{if(n==="gap")return M("div",{class:"gap"});if(n==="sep")return M("div",{class:"sep",role:"separator"});const s=n.key?`${n.label} (${n.key})`:n.label,r=M("button",{type:"button",class:"tool",title:s,"aria-label":n.label,dataset:{tool:n.id},"aria-pressed":n.panel?"false":null,onclick:()=>n.panel?this.toggle(n.id):n.run()},Ln(n.id));return this.buttons.set(n.id,r),r}))}toggle(t){this.show(this.open===t?null:t)}show(t){this.open=t;for(const[e,n]of this.buttons)n.hasAttribute("aria-pressed")&&n.setAttribute("aria-pressed",String(e===t));this.onOpen(t)}setVisible(t,e){const n=this.buttons.get(t);n&&(n.hidden=!e);for(const s of this.root.querySelectorAll(".sep")){let r=s.nextElementSibling,o=!1;for(;r&&!r.classList.contains("sep")&&!r.classList.contains("gap");){if(!r.hidden){o=!0;break}r=r.nextElementSibling}s.hidden=!o}}setEnabled(t,e){const n=this.buttons.get(t);n&&(n.disabled=!e)}}function XM({title:i,text:t="",confirm:e="OK",cancel:n="Cancel",danger:s=!1}){return new Promise(r=>{const o=document.activeElement,a=u=>{var f;document.removeEventListener("keydown",l,!0),d.remove(),(f=o==null?void 0:o.focus)==null||f.call(o),r(u)},l=u=>{u.key==="Escape"&&(u.stopPropagation(),u.preventDefault(),a(!1))},c=M("button",{type:"button",class:"ghost",text:n,onclick:()=>a(!1)}),h=M("button",{type:"button",class:s?"danger":"primary",text:e,onclick:()=>a(!0)}),d=M("div",{class:"dialog-backdrop",onclick:u=>{u.target===d&&a(!1)}},M("div",{class:"dialog-card",role:"alertdialog","aria-modal":"true","aria-labelledby":"dialog-title","aria-describedby":"dialog-text"},M("h2",{id:"dialog-title",text:i}),t?M("p",{id:"dialog-text",text:t}):null,M("div",{class:"dialog-buttons"},c,h)));document.body.append(d),document.addEventListener("keydown",l,!0),c.focus()})}const Gh="Copy invite link";class $M{constructor(t,{onBeforeLeave:e,onPerson:n,onInvite:s,onVoice:r,onTokens:o,onMusic:a,onSay:l}={}){this.lobby=t,this.onBeforeLeave=e,this.onPerson=n,this.onInvite=s,this.onSay=l,this.copyTimer=0,this.els={},this.els.code=M("span",{class:"room-code",text:t.code}),this.els.copyCode=M("button",{class:"ghost",text:"Copy",title:"Copy the room code",onclick:()=>this.copy("code")}),this.els.copyLink=M("button",{class:"ghost",text:Gh,onclick:()=>this.copy("link")}),this.els.list=M("ul",{class:"roster"}),this.els.note=M("p",{class:"note"}),this.els.update=M("div",{class:"update",role:"status",hidden:!0},this.els.updateText=M("p",{class:"note"}),this.els.refresh=M("button",{type:"button",class:"primary small",text:"Refresh",onclick:()=>{location.href=this.inviteLink()}})),this.root=M("aside",{class:"panel",id:"room"},M("div",{class:"panel-head"},M("h1",{text:"Hearth Players"}),Sd(In,"version-pill")),this.els.list,this.els.note,this.els.update,this.els.actions=M("div",{class:"room-actions"},...t.isGm?[]:[this.els.tokens=M("button",{type:"button",class:"ghost",title:"Your tokens (T)","aria-label":"Your tokens","aria-expanded":"false",onclick:()=>o==null?void 0:o()},Ln("tokens"))],this.els.voice=M("button",{type:"button",class:"ghost",title:"Voice","aria-label":"Voice","aria-expanded":"false",onclick:()=>r==null?void 0:r()},Ln("voice")),this.els.music=M("button",{type:"button",class:"ghost",title:"Music for the table","aria-label":"Music for the table","aria-expanded":"false",hidden:!0,onclick:()=>a==null?void 0:a()},Ln("music")),this.els.sound=M("button",{type:"button",class:"ghost",title:"Ambience volume","aria-label":"Ambience volume","aria-expanded":"false",hidden:!0,onclick:()=>this.toggleSound()},Ln("sound")),this.els.invite=M("button",{type:"button",class:"ghost",title:"Copy invite link","aria-label":"Copy invite link",onclick:()=>this.copy("link",this.els.invite)},Ln("invite")),this.els.leave=M("button",{type:"button",class:"ghost leave",title:"Leave game","aria-label":"Leave game",onclick:()=>this.leave()},Ln("leave"))),this.els.drawer=M("div",{class:"room-drawer",hidden:!0})),this.invite=M("section",{class:"invite",dataset:{tool:"invite"}},M("h2",{text:"Invite players"}),M("div",{class:"room-code-row"},this.els.code,this.els.copyCode),this.els.copyLink,M("p",{class:"note",text:"Players type the code on the start screen, or open the link."})),this.setNote(t.isGm?"":"The GM sets up the table. Add your own tokens with the button below, and drag them to move."),this.render(t.roster())}showMusic(){this.els.music.hidden=!1}setMusic(t){this.els.music.classList.toggle("on",t),this.els.music.title=t?"Music for the table: playing":"Music for the table"}addControl(t){this.els.actions.before(t)}addSound(t){this.els.drawer.append(t.root);const e=()=>{const n=!t.root.hidden;this.els.sound.hidden=!n,n||this.toggleSound(!1)};new MutationObserver(e).observe(t.root,{attributes:!0,attributeFilter:["hidden"]}),e()}setOpen(t,e=null){var n,s;this.openPerson=t==="person"?e:null;for(const r of this.els.list.children)r.classList.toggle("open",r.dataset.peer===this.openPerson);(n=this.els.voice)==null||n.setAttribute("aria-expanded",String(t==="voice")),(s=this.els.tokens)==null||s.setAttribute("aria-expanded",String(t==="tokens")),this.els.music.setAttribute("aria-expanded",String(t==="music"))}toggleSound(t=this.els.drawer.hidden){this.els.drawer.hidden=!t,this.els.sound.setAttribute("aria-expanded",String(t))}setNote(t,e=""){this.els.note.hidden=!t,this.els.note.textContent=t,this.els.note.dataset.kind=e}render(t){const e=this.lobby.selfId;this.els.list.replaceChildren(...t.map(n=>M("li",{dataset:{peer:n.peerId},class:n.peerId===e?"":`person${n.peerId===this.openPerson?" open":""}`,title:n.peerId===e?null:this.lobby.isGm?`${n.name}: volume and silence`:`${n.name}: volume`,onclick:n.peerId===e?null:()=>{var s;return(s=this.onPerson)==null?void 0:s.call(this,n.peerId)}},M("i",{class:"seat",style:{background:wi(n.color)}}),M("span",{class:"who",text:n.name}),n.role===Je?M("span",{class:"gm-tag",text:"GM"}):null,M("span",{class:"fill"}),M("span",{class:"mic",title:"In voice","aria-hidden":"true"}),n.peerId===e?null:this.versionTag(n.peerId),M("em",{text:n.peerId===e?"you":""})))),this.checkGmVersion()}versionTag(t){if(!this.lobby.versions.has(t))return null;const e=this.lobby.versions.get(t),n=Qa(e,In);return n?M("span",{class:"ver",text:n<0?"older":"newer",title:`On ${e||"an older version"}; this page is ${In}.`}):null}checkGmVersion(){const t=this.lobby.gmId;if(this.lobby.isGm||!t||!this.lobby.versions.has(t))return;const e=this.lobby.versions.get(t),n=Qa(e,In);this.els.update.hidden=!n,this.els.refresh.hidden=n<0,this.els.updateText.dataset.kind="warn",this.els.updateText.textContent=n>0?`The GM is on a newer version (${e}) than this page (${In}). Refresh to update, then press Join to come back to the table.`:`The GM is on an older version (${e||"from before versions"}) than this page (${In}). If anything misbehaves, ask them to refresh.`}setVoice(t){var e,n;(n=this.els.voice)==null||n.classList.toggle("on",!!((e=t.get(this.lobby.selfId))!=null&&e.on));for(const s of this.els.list.children){const r=t.get(s.dataset.peer);s.classList.toggle("in-voice",!!(r!=null&&r.on)),s.classList.toggle("speaking",!!(r!=null&&r.on&&r.speaking)),s.classList.toggle("muted",!!(r!=null&&r.on&&(r.muted||r.silenced)))}}gmLeft(){this.setNote("The GM has left. The table is frozen until they come back.","warn")}inviteLink(){const t=new URL(location.href);return t.search="",t.hash="",t.searchParams.set("join",this.lobby.code),t.href}async copy(t,e=t==="code"?this.els.copyCode:this.els.copyLink){var s,r,o;await GM(t==="code"?this.lobby.code:this.inviteLink())?e===this.els.invite?(e.replaceChildren(Ln("check")),e.classList.add("done"),e.title="Copied",(o=this.onSay)==null||o.call(this,"Invite link copied. Paste it to your players.")):e.textContent="Copied ✓":((s=this.onInvite)==null||s.call(this,!0),HM(this.els.code),e!==this.els.invite?e.textContent="Press Ctrl+C":(r=this.onSay)==null||r.call(this,"Couldn't copy the link. The code is shown instead: press Ctrl+C to copy it.","warn")),clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>{this.els.copyCode.textContent="Copy",this.els.copyLink.textContent=Gh,this.els.invite.replaceChildren(Ln("invite")),this.els.invite.classList.remove("done"),this.els.invite.title="Copy invite link"},1800)}async leave(){var n;if(this.asking)return;this.asking=!0;const t=await XM({title:"Leave the table?",text:this.lobby.isGm?"Everyone at the table is disconnected until you come back. The table is saved: resume it from the start screen, and your players can rejoin with the same link.":"You can come back any time with the same invite link.",confirm:"Leave",cancel:"Stay",danger:!0});if(this.asking=!1,!t)return;await((n=this.onBeforeLeave)==null?void 0:n.call(this)),this.lobby.leave();const e=new URL(location.href);e.searchParams.delete("join"),e.searchParams.delete("host"),location.href=e.href}}class qM{constructor({onImportToken:t,onAddBlank:e}){const n=M("input",{type:"file",accept:"image/*",multiple:!0,class:"file",onchange:s=>{const r=[...s.target.files||[]];s.target.value="",r.length&&t(r)}});this.root=M("section",{id:"player",dataset:{tool:"tokens"}},M("h2",{text:"Your tokens"}),M("div",{},n,M("div",{class:"row"},M("button",{class:"primary",id:"p-add-token",text:"Add from image…",onclick:()=>n.click()}),M("button",{class:"ghost",id:"p-add-blank",text:"Blank",onclick:()=>e()})),M("p",{class:"note",text:"Add a picture of your character, or a blank disc. Your tokens wear your colour; drag one to move it, click it to name it, turn it, resize it or change your colour."})))}}const YM=[2,4,6,8,10,12,20,100],jM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M12 2.5 20.5 7.3v9.4L12 21.5 3.5 16.7V7.3z"/><path d="M12 7.2 16.6 15H7.4z"/><path d="M12 2.5v4.7M20.5 7.3 12 7.2M3.5 7.3 12 7.2M16.6 15l3.9 1.7M7.4 15l-3.9 1.7M7.4 15 12 21.5l4.6-6.5"/></svg>';class KM{constructor({onRoll:t}){this.onRoll=t,this.gm=!0,this.els={},this.els.hide=M("input",{type:"checkbox",id:"dice-hide"}),this.els.hideLabel=M("label",{class:"dice-hide",for:"dice-hide",title:"Roll in secret: players see that you rolled, not what"},this.els.hide," Hide"),this.root=M("div",{class:"dice-bar"},M("span",{class:"dice-icon","aria-hidden":"true",html:jM}),...YM.map(e=>M("button",{type:"button",class:"die",text:e===100?"d%":`d${e}`,title:`Roll a d${e}`,dataset:{sides:String(e)},onclick:()=>this.onRoll(`1d${e}`)})),this.els.hideLabel)}get hidden(){return this.gm&&this.els.hide.checked}setGm(t){this.gm=t,this.els.hideLabel.hidden=!t,t||(this.els.hide.checked=!1),this.fit()}fit(){requestAnimationFrame(()=>{var e;const t=this.root.offsetWidth;t&&((e=this.root.closest("#dice"))==null||e.style.setProperty("--dice-w",`${t}px`))})}}class ZM{constructor({onSay:t,onRoll:e,onError:n}){this.onSay=t,this.onRoll=e,this.onError=n,this.lastKey="",this.els={},this.els.feed=M("ol",{class:"feed","aria-live":"polite","aria-label":"Table talk"}),this.els.input=M("input",{class:"say",placeholder:"Say something…   /r 1d20+2 Kick to roll",maxlength:String(as.text),autocomplete:"off","aria-label":"Say something to the table",onkeydown:s=>{s.key==="Enter"?this.send():s.key==="Escape"&&this.els.input.blur()}}),this.root=M("div",{class:"talk"},this.els.feed),this.inputRow=M("div",{class:"talk say-row"},this.els.input)}send(){const t=this.els.input.value.trim();if(!t)return;const e=/^\/r(?:oll)?\s+(.+)$/i.exec(t);if(e){try{Il(e[1])}catch(n){this.onError(n.message);return}this.onRoll(e[1])}else this.onSay(t);this.els.input.value=""}refresh(t,e){const n=t.slice(-60),s=n.map(a=>a.id).join(",")+Object.values(e).map(a=>a.peerId+a.name+a.color).join();if(s===this.lastKey)return;this.lastKey=s;const r=this.els.feed,o=r.scrollHeight-r.scrollTop-r.clientHeight<24;r.replaceChildren(...n.map((a,l)=>{const c=e[a.by],h=l===n.length-1,d=M("i",{class:"seat",style:{background:wi((c==null?void 0:c.color)??9280918)}}),u=M("span",{class:"who",text:(c==null?void 0:c.name)??"Someone"},(c==null?void 0:c.role)===Je?M("em",{class:"gm",text:"GM"}):null);if(a.kind==="roll"){const f=a.dice.map(v=>M("span",{class:v.kept?"kept":"dropped",text:String(v.value),title:`d${v.sides}`})),g=a.mod?M("span",{class:"mod",text:a.mod>0?`+${a.mod}`:String(a.mod)}):null;return M("li",{class:`roll${h?" latest":""}`,title:`${a.expr}${a.note?` — ${a.note}`:""} — draws ${a.from+1}–${a.from+a.draws} of this table's dice`},d,u,a.hidden?M("span",{class:"secret-tag",text:"secret"}):null,a.note?M("span",{class:"note",text:a.note}):null,M("span",{class:"expr",text:a.expr}),M("span",{class:"faces"},...f,g),M("b",{class:"total",text:String(a.total)}))}return M("li",{class:`msg${h?" latest":""}`,title:a.at?new Date(a.at).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):""},d,u,M("span",{class:"text",text:a.text}))})),o&&(r.scrollTop=r.scrollHeight)}}const JM={rain:"Rain",snow:"Snow",fog:"Fog",embers:"Embers"};class QM{constructor({onPlay:t,onAmbience:e}){this.onAmbience=e,this.els={};const n=(s,r,o)=>M("button",{type:"button",class:"ghost",text:r,title:o,dataset:{fx:s},onclick:()=>t(s)});this.els.weather=[null,...Wu].map(s=>M("button",{type:"button",class:"ghost",text:s?JM[s]:"None",dataset:{weather:s||"none"},"aria-pressed":"false",onclick:()=>e({weather:s})})),this.els.intensity=M("input",{type:"range",min:"0.1",max:"1",step:"0.05",id:"fx-intensity","aria-label":"Weather intensity",oninput:()=>e({intensity:+this.els.intensity.value})}),this.els.darkness=M("input",{type:"range",min:"0",max:"1",step:"0.05",id:"fx-darkness","aria-label":"Darkness",oninput:()=>e({darkness:+this.els.darkness.value})}),this.root=M("section",{class:"fx",dataset:{tool:"fx"}},M("h2",{text:"FX"}),M("h3",{class:"sub",text:"For a moment"}),M("div",{class:"fx-buttons"},n("lightning","⚡ Lightning","A flash on every screen"),n("shake","Shake","Shake everyone's board"),n("damage","Damage","A red pulse round the edges")),M("h3",{class:"sub",text:"Weather"}),M("div",{class:"fx-buttons"},...this.els.weather),this.els.intensityField=M("div",{class:"field"},M("label",{for:"fx-intensity",text:"Intensity"}),this.els.intensity),M("div",{class:"field"},M("label",{for:"fx-darkness",text:"Darkness"}),this.els.darkness),M("p",{class:"note",text:"Weather and darkness stay on for this scene until you change them, and players who join later see them too. You see them fainter, so you can keep working."}),M("h3",{class:"sub",text:"Pings"}),M("p",{class:"note",text:"Click an empty spot on the map to ping it for everyone (click once more first if something is selected). Alt+Shift-click also brings everyone's view there."}))}refresh(t){const e=t||{};for(const n of this.els.weather)n.setAttribute("aria-pressed",String((e.weather||"none")===n.dataset.weather));document.activeElement!==this.els.darkness&&(this.els.darkness.value=String(e.darkness||0)),document.activeElement!==this.els.intensity&&(this.els.intensity.value=String(e.intensity??.6)),this.els.intensity.disabled=!e.weather,this.els.intensityField.classList.toggle("off",!e.weather)}}const Ko={fade:["Fade","Fade to black","Fade back in"],swirl:["Swirl","Swirl to black","Swirl back in"],curtain:["Curtain","Lower the curtain","Raise the curtain"],drapes:["Drapes","Close the curtains","Open the curtains"],ink:["Ink","Ink to black","Ink back out"],burn:["Burn","Burn it away","Unburn"],freeze:["Freeze","Freeze over","Thaw"],flood:["Flood","Flood it","Drain"]};class tS{constructor({onCommand:t,onGo:e,onNew:n,onFx:s,defaultTitle:r}){this.onCommand=t,this.defaultTitle=r,this.title=M("input",{type:"text",id:"table-title",maxlength:"80","aria-label":"Table name",onchange:()=>this.onCommand(["table.title",this.title.value]),onkeydown:o=>{o.key==="Enter"&&this.title.blur()}}),this.onGo=e,this.transitions=Ll.map(o=>M("button",{type:"button",class:"ghost",text:Ko[o][0],dataset:{transition:o},"aria-pressed":"false",onclick:()=>s({transition:o})})),this.blackout=M("button",{type:"button",class:"ghost wide",id:"scene-blackout","aria-pressed":"false",onclick:()=>s({blackout:this.blackout.getAttribute("aria-pressed")!=="true"})}),this.list=M("ul",{class:"scene-list","aria-label":"Scenes"}),this.root=M("section",{class:"scenes",dataset:{tool:"scenes"}},M("h2",{text:"Scenes"}),M("div",{class:"field"},M("label",{for:"table-title",text:"Table name"}),this.title),M("h3",{class:"sub",text:"Intermission"}),M("div",{class:"fx-buttons transitions"},...this.transitions),this.blackout,M("h3",{class:"sub",text:"Scenes"}),this.list,M("div",{class:"row"},M("button",{type:"button",class:"ghost",id:"scene-new",text:"New scene",onclick:()=>n()}),this.copy=M("button",{type:"button",class:"ghost",id:"scene-copy",text:"Duplicate this one"})),M("p",{class:"note",text:"Build each scene on the board: map, grid, monsters, light and weather. Go moves the table there and the players' tokens come along; everything else stays with its scene. To change scenes out of sight, start the intermission, go, and lift it when ready. Players who join during one see it too. Scenes are saved with the table."})),this.key=""}refresh(t){var o,a;document.activeElement!==this.title&&(this.title.value=t.title||"",this.title.placeholder=((o=this.defaultTitle)==null?void 0:o.call(this))||"Untitled table");const e=((a=t.scenes[t.activeScene])==null?void 0:a.fx)||{},n=Ko[e.transition]?e.transition:"fade";for(const l of this.transitions)l.setAttribute("aria-pressed",String(n===l.dataset.transition));this.blackout.setAttribute("aria-pressed",String(!!e.blackout)),this.blackout.textContent=Ko[n][e.blackout?2:1];const s=JSON.stringify([t.activeScene,t.sceneOrder.map(l=>{const c=t.scenes[l];return[l,c==null?void 0:c.name,Object.keys((c==null?void 0:c.tokens)||{}).length]})]);if(s===this.key)return;this.key=s;const r=t.activeScene;this.copy.onclick=()=>{var l;return r&&this.onCommand(["scene.copy",r,`${((l=t.scenes[r])==null?void 0:l.name)||"Scene"} (copy)`])},this.copy.disabled=!r,this.list.replaceChildren(...t.sceneOrder.map(l=>{const c=t.scenes[l];if(!c)return null;const h=l===r,d=M("input",{type:"text",value:c.name,maxlength:"48","aria-label":"Scene name",onchange:()=>{const f=d.value.trim();f&&f!==c.name?this.onCommand(["scene.rename",l,f]):d.value=c.name},onkeydown:f=>{f.key==="Enter"&&d.blur()}}),u=M("button",{type:"button",class:"ghost small del",text:"×",title:h?"The players are here — go to another scene first":"Delete this scene","aria-label":`Delete ${c.name}`,disabled:h,onclick:()=>{if(!u.classList.contains("armed")){u.classList.add("armed"),u.textContent="Delete?",setTimeout(()=>{u.classList.remove("armed"),u.textContent="×"},3e3);return}this.onCommand(["scene.del",l])}});return M("li",{class:h?"live":""},d,h?M("span",{class:"badge",text:"Now playing"}):M("button",{type:"button",class:"primary small",text:"Go",onclick:()=>this.onGo(l)}),u)}).filter(Boolean))}}const Zo=12,eS=8,nS={wall:"Draw a wall the way you would with a pen. Each stroke is one wall; start or end it on another wall's end to join them.",mask:"Drag round something solid — a pillar, a boulder — and let go: the shape closes itself.",wand:"Click a wall on the map: everything joined to it that looks like it is outlined in blue. Click more walls to add them, Backspace to take the last one back. Set the tolerance below until it fits, then Add.",erase:"Click a wall or mask to take it away, or drag across several."};class iS{constructor({stage:t,getScene:e,onCommand:n,getPicture:s}){this.stage=t,this.getScene=e,this.onCommand=n,this.getPicture=s,this.tolerance=yh.tolerance,this.voidLevel=yh.voidLevel,this.sources=null,this.found=null,this.layer=t.walls,this.mode="wall",this.snap="free",this.active=!1,this.raw=null,this.erasing=!1,this.modes=["wall","mask","wand","erase"].map(o=>M("button",{type:"button",class:"ghost",dataset:{draw:o},"aria-pressed":"false",text:{wall:"Wall",mask:"Mask",wand:"Wand",erase:"Erase"}[o],onclick:()=>this.setMode(o)})),this.snaps=["free","grid"].map(o=>M("button",{type:"button",class:"ghost",dataset:{snap:o},"aria-pressed":"false",text:{free:"Free",grid:"Grid"}[o],title:o==="grid"?"Pull strokes onto the grid's corners":"Freehand: the stroke as you draw it",onclick:()=>this.setSnap(o)})),this.note=M("p",{class:"note"}),this.count=M("p",{class:"note light-count"}),this.clear=M("button",{type:"button",class:"ghost wide",id:"light-clear",text:"Clear all",onclick:()=>{if(!this.clear.classList.contains("armed")){this.clear.classList.add("armed"),this.clear.textContent="Clear every wall and mask?",setTimeout(()=>{this.clear.classList.remove("armed"),this.clear.textContent="Clear all"},3e3);return}const o=this.getScene();o&&this.onCommand(["block.set",o.id,[]]),this.clear.classList.remove("armed"),this.clear.textContent="Clear all"}});const r=(o,a,l,c,h)=>{const d=M("input",{type:"range",id:o,min:String(a),max:String(l),step:"1",value:String(c),oninput:()=>{h(+d.value),this.lookAgain()}});return d};this.tolInput=r("light-tolerance",4,140,this.tolerance,o=>{this.tolerance=o}),this.voidInput=r("light-void",4,120,this.voidLevel,o=>{this.voidLevel=o}),this.foundNote=M("p",{class:"note light-found"}),this.addFound=M("button",{type:"button",class:"primary small",id:"light-add",text:"Add",onclick:()=>this.add()}),this.foundRow=M("div",{class:"light-found-row",hidden:!0},this.foundNote,this.addFound,M("button",{type:"button",class:"ghost small",text:"Cancel",onclick:()=>this.drop()})),this.root=M("section",{class:"light",dataset:{tool:"light"}},M("h2",{text:"Light"}),M("p",{class:"note",text:"Walls and masks stop light. In the dark, a torch lights its own room and not the next, and players cannot see what is behind a wall. Only you see the lines, while this tool is open."}),M("h3",{class:"sub",text:"Pen"}),M("div",{class:"fx-buttons four"},...this.modes),this.note,M("h3",{class:"sub",text:"Snap"}),M("div",{class:"fx-buttons two"},...this.snaps),M("h3",{class:"sub",text:"Find walls on the map"}),M("div",{class:"field"},M("label",{for:"light-tolerance",text:"Wand tolerance"}),this.tolInput),M("button",{type:"button",class:"ghost wide",id:"light-void-find",text:"Mask the void",title:"Outline the dark the rooms sit in",onclick:()=>this.pick({kind:"void"})}),M("div",{class:"field"},M("label",{for:"light-void",text:"How dark the void is"}),this.voidInput),this.foundRow,this.count,this.clear),this.setMode("wall"),this.setSnap("free"),window.addEventListener("keydown",o=>{var a,l;if(this.active&&!(o.target instanceof HTMLElement&&o.target.closest('input[type="text"], textarea, [contenteditable]'))){if(o.key==="Escape"&&(this.raw||this.found))this.cancel();else if(o.key==="Enter"&&((a=this.found)!=null&&a.length))this.add();else if(o.key==="Backspace"&&((l=this.sources)!=null&&l.length))this.unpick();else return;o.preventDefault(),o.stopPropagation()}},!0)}setActive(t){this.active=t,this.layer.shown=t,t||this.cancel(),this.cursor()}setMode(t){this.cancel(),this.mode=t;for(const e of this.modes)e.setAttribute("aria-pressed",String(e.dataset.draw===t));this.note.textContent=nS[t],this.cursor()}setSnap(t){this.snap=t;for(const e of this.snaps)e.setAttribute("aria-pressed",String(e.dataset.snap===t))}cursor(){const t=this.stage.renderer.domElement,e=this.active?this.mode==="erase"?"pointer":"crosshair":"";t.style.cursor!==e&&(t.style.cursor=e)}refresh(t){const e=(t==null?void 0:t.blocks)||[],n=e.filter(o=>o.kind==="wall").length,s=e.length-n,r=(o,a)=>`${o} ${a}${o===1?"":"s"}`;this.count.textContent=e.length?`${r(n,"wall")} and ${r(s,"mask")} on this scene.`:"Nothing on this scene stops light yet.",this.clear.disabled=!e.length}get drawing(){return this.active}perPx(){return this.stage.cam.viewUnits/Math.max(1,this.stage.rect.height)}down(t){if(this.getScene()){if(this.mode==="wand"){this.pick({kind:"wand",x:t.x,y:t.y});return}if(this.mode==="erase"){this.erasing=!0,this.eraseAt(t);return}this.raw=[t.x,t.y],this.show()}}move(t){if(this.erasing){this.eraseAt(t);return}if(!this.raw){this.hover(t);return}const e=this.raw;Math.hypot(t.x-e[e.length-2],t.y-e[e.length-1])>2*this.perPx()&&(e.push(t.x,t.y),this.show())}up(){if(this.erasing){this.erasing=!1;return}const t=this.raw,e=this.getScene();if(this.endStroke(),!t||!e||rS(t)<eS*this.perPx())return;const n=this.shape(t);n.length<(this.mode==="mask"?6:4)||this.onCommand(["block.add",e.id,{kind:this.mode,pts:n}])}hover(t){var e;this.cursor(),this.layer.doomed=this.mode==="erase"?((e=this.blockAt(t))==null?void 0:e.id)??null:null}show(){this.layer.draft=this.raw?{kind:this.mode,pts:this.shape(this.raw)}:null}shape(t){var s,r;const e=this.snap==="grid"&&((r=(s=this.getScene())==null?void 0:s.grid)==null?void 0:r.kind)===Dl;let n;if(e)n=t.map(o=>Math.round(o));else{const o=sS(t);let a=.75*this.perPx();for(n=Hh(o,a);n.length>1e3;)n=Hh(o,a*=1.5)}if(n=aS(n),this.mode==="wall"&&n.length>=4){const o=n.length,a=this.endNear(n[0],n[1]);a&&(n[0]=a.x,n[1]=a.y);const l=this.endNear(n[o-2],n[o-1]);l&&(n[o-2]=l.x,n[o-1]=l.y)}if(this.mode==="mask"){const o=e?.01:Zo*this.perPx();for(;n.length>6&&Math.hypot(n[n.length-2]-n[0],n[n.length-1]-n[1])<o;)n.length-=2}return lS(n)}endNear(t,e){var r;let n=Zo*this.perPx(),s=null;for(const o of((r=this.getScene())==null?void 0:r.blocks)||[]){if(o.kind!=="wall")continue;const a=o.pts.length;for(const l of[0,a-2]){const c=Math.hypot(o.pts[l]-t,o.pts[l+1]-e);c<n&&(n=c,s={x:o.pts[l],y:o.pts[l+1]})}}return s}pick(t){this.sources=t.kind==="void"?[...(this.sources||[]).filter(e=>e.kind!=="void"),t]:[...this.sources||[],t],this.look()}async look(){var A;const t=this.run=(this.run||0)+1,e=this.sources||[],n=this.getScene();if(!e.length)return;if(!(n!=null&&n.map))return this.say("This scene has no map to look at.",null);if(this.pictureOf!==n.map){this.say("Looking at the map…",null);const P=await this.getPicture(n.map);if(this.run!==t)return;this.pictureOf=n.map,this.picture=P}if(!this.picture)return this.say("This map could not be read.",null);const{pic:s,scale:r,imageW:o}=this.picture,{w:a,h:l}=s,c=n.grid,h=r*(n.artW&&o?n.artW/o:1),d=(c.unitPx||140)/h,u=new Uint8Array(a*l);for(const P of e){let D;if(P.kind==="wand"){const[x,E]=zx(P.x,P.y,c);if(x<0||E<0||x/h>=a||E/h>=l)continue;D=N_(s,x/h,E/h,this.tolerance,1)}else D=O_(F_(s,this.voidLevel),a,l,Math.round(Math.max(2,d*.08)));for(let x=0;x<u.length;x++)u[x]|=D[x]}let f=0;for(const P of u)f+=P;const g=e.some(P=>P.kind==="wand")&&f>.2*a*l,v=z_(B_(u,a,l,Math.max(12,(.25*d)**2)),a,l,Math.max(1,d*.05)),p=P=>{const D=[];for(let x=0;x<P.length;x+=2)D.push(...Bx(P[x]*h,P[x+1]*h,c));return D},m=[];for(const P of v){const D=p(P.pts);P.solid&&D.length-2<=ls.coords?m.push({kind:"mask",pts:D.slice(0,-2)}):m.push(...oS(D))}const y=ls.perScene-(((A=n.blocks)==null?void 0:A.length)||0),_=m.slice(0,Math.max(0,y)),S=_.filter(P=>P.kind==="wall").length,C=(P,D)=>`${P} ${D}${P===1?"":"s"}`,T=e.some(P=>P.kind==="wand");this.say(_.length?`Found ${C(S,"wall")} and ${C(_.length-S,"mask")}.${g?" That is a lot of the map: try a lower tolerance.":T?" Click more walls to add them.":""}${_.length<m.length?" (The scene is full: not all of them fit.)":""}`:T?"Nothing there to outline. Try a higher tolerance.":"No void found. Try a darker setting.",_.length?_:null)}unpick(){this.sources=this.sources.slice(0,-1),this.sources.length?this.look():this.drop()}lookAgain(){var t;!((t=this.sources)!=null&&t.length)||this.again||(this.again=requestAnimationFrame(()=>{this.again=0,this.look()}))}say(t,e){this.found=e,this.layer.preview=e,this.foundNote.textContent=t,this.foundRow.hidden=!1,this.addFound.disabled=!(e!=null&&e.length)}add(){const t=this.getScene(),e=this.found;this.drop(),!(!t||!(e!=null&&e.length))&&this.onCommand(["block.set",t.id,[...t.blocks||[],...e]])}drop(){this.sources=null,this.run=(this.run||0)+1,this.found=null,this.layer.preview=null,this.foundRow.hidden=!0}cancel(){(this.found||this.sources)&&this.drop(),this.endStroke()}endStroke(){this.raw=null,this.erasing=!1,this.layer.draft=null,this.layer.doomed=null}blockAt(t){var s;let e=null,n=Zo*this.perPx();for(const r of((s=this.getScene())==null?void 0:s.blocks)||[]){const o=t_(r,t.x,t.y);(o<n||o===0&&r.kind==="wall")&&(n=o,e=r)}return e}eraseAt(t){const e=this.blockAt(t),n=this.getScene();e&&n&&this.onCommand(["block.del",n.id,e.id]),this.layer.doomed=null}}function sS(i){const t=i.length>>1;if(t<5)return i.slice();const e=i.slice(),n=2;for(let s=1;s<t-1;s++){const r=Math.min(n,s,t-1-s);let o=0,a=0;for(let l=-r;l<=r;l++)o+=i[(s+l)*2],a+=i[(s+l)*2+1];e[s*2]=o/(2*r+1),e[s*2+1]=a/(2*r+1)}return e}function rS(i){let t=0;for(let e=2;e<i.length;e+=2)t+=Math.hypot(i[e]-i[e-2],i[e+1]-i[e-1]);return t}function oS(i){const t=ls.coords;if(i.length<=t)return[{kind:"wall",pts:i}];const e=[];for(let n=0;n<i.length-2;n+=t-2)e.push({kind:"wall",pts:i.slice(n,n+t)});return e}function aS(i){const t=[i[0],i[1]];for(let e=2;e<i.length;e+=2)Math.hypot(i[e]-t[t.length-2],i[e+1]-t[t.length-1])>1e-6&&t.push(i[e],i[e+1]);return t}function lS(i){if(i.length<6)return i;const t=[i[0],i[1]];for(let e=2;e+2<i.length;e+=2){const n=t[t.length-2],s=t[t.length-1],r=i[e],o=i[e+1],a=i[e+2],l=i[e+3],c=(r-n)*(l-o)-(o-s)*(a-r),h=(r-n)*(a-r)+(o-s)*(l-o);(Math.abs(c)>1e-9||h<0)&&t.push(r,o)}return t.push(i[i.length-2],i[i.length-1]),t}function Hh(i,t){const e=i.length>>1;if(e<3)return i.slice();const n=new Uint8Array(e);n[0]=1,n[e-1]=1;const s=[[0,e-1]];for(;s.length;){const[o,a]=s.pop(),l=i[o*2],c=i[o*2+1],h=i[a*2]-l,d=i[a*2+1]-c,u=Math.hypot(h,d);let f=-1,g=t;for(let v=o+1;v<a;v++){const p=u>1e-9?Math.abs((i[v*2]-l)*d-(i[v*2+1]-c)*h)/u:Math.hypot(i[v*2]-l,i[v*2+1]-c);p>g&&(g=p,f=v)}f>=0&&(n[f]=1,s.push([o,f],[f,a]))}const r=[];for(let o=0;o<e;o++)n[o]&&r.push(i[o*2],i[o*2+1]);return r}const Vh=10;class cS{constructor({onRoll:t}){this.onRoll=t,this.key="vtt.quick.offline",this.items=[],this.root=M("div",{class:"quick","aria-label":"Quick rolls"}),this.load()}useTable(t){this.key=`vtt.quick.${t||"offline"}`,this.load()}load(){try{const t=JSON.parse(localStorage.getItem(this.key)||"[]");this.items=Array.isArray(t)?t.filter(e=>e&&typeof e.note=="string"&&typeof e.expr=="string").slice(0,Vh):[]}catch{this.items=[]}this.render()}save(){try{localStorage.setItem(this.key,JSON.stringify(this.items))}catch{}}add(t,e){const n=this.items.find(s=>s.note.toLowerCase()===t.toLowerCase());if(n){if(n.expr===e&&n.note===t)return;n.expr=e,n.note=t}else this.items.push({note:t,expr:e}),this.items.length>Vh&&this.items.shift();this.save(),this.render()}remove(t){this.items=this.items.filter(e=>e.note!==t),this.save(),this.render()}render(){this.root.hidden=!this.items.length,this.root.replaceChildren(...this.items.map(t=>M("span",{class:"quick-roll"},M("button",{type:"button",class:"go",text:t.note,title:`Roll ${t.expr} ${t.note}`,onclick:()=>this.onRoll(`${t.expr} ${t.note}`)}),M("button",{type:"button",class:"forget",text:"×",title:`Remove ${t.note}`,"aria-label":`Remove ${t.note}`,onclick:()=>this.remove(t.note)}))))}}const Td="vtt.voice.chimes";function hS(){try{return localStorage.getItem(Td)!=="0"}catch{return!0}}const Ad="vtt.voice.people";function uS(){try{return JSON.parse(localStorage.getItem(Ad)||"{}")||{}}catch{return{}}}function dS(i){try{localStorage.setItem(Ad,JSON.stringify(i))}catch{}}const Jo=i=>typeof i=="string"?i.trim().toLowerCase():"",Rd=2,Wh={kind:"voice"},fS=.035;class pS{constructor({lobby:t,onChange:e}){this.lobby=t,this.onChange=e,this.on=!1,this.muted=!1,this.ptt=!1,this.pttDown=!1,this.stream=null,this.error="",this.output="",this.peers=new Map,this.silenced=new Set,this.people=uS(),this.localSpeaking=!1,this.chimes=hS(),this.ctx=null,this.localAnalyser=null,this.audioRoot=document.createElement("div"),this.audioRoot.hidden=!0,document.body.append(this.audioRoot),this.music=null,t.voice={join:n=>{var s;this.announce(n),(s=this.music)==null||s.peerJoined(n)},leave:n=>this.drop(n),stream:(n,s,r)=>{var o;return(r==null?void 0:r.kind)==="music"?(o=this.music)==null?void 0:o.hear(n,s):this.hear(n,s)},message:(n,s)=>{var r;return n.t==="music"?(r=this.music)==null?void 0:r.message(n,s):this.message(n,s)}},this.meter=setInterval(()=>this.measure(),120)}get isGm(){return this.lobby.isGm}get live(){return this.on&&!this.muted&&!this.silenced.has(this.lobby.selfId)&&(!this.ptt||this.pttDown)}peer(t){let e=this.peers.get(t);if(!e){const n=this.people[Jo(this.nameOf(t))];e={on:!1,muted:!1,volume:(n==null?void 0:n.volume)??1,hushed:!!(n!=null&&n.hushed),audio:null,analyser:null,gain:null,boosted:!1,speaking:!1},this.peers.set(t,e)}return e}async start(t=""){this.error="";try{this.stream=await navigator.mediaDevices.getUserMedia({audio:{deviceId:t?{exact:t}:void 0,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(e){return this.error=(e==null?void 0:e.name)==="NotAllowedError"?"The browser was not allowed to use the microphone. Allow it in the address bar and try again.":`No microphone could be opened (${(e==null?void 0:e.name)||e}).`,this.onChange(),!1}this.on=!0,this.applyTrack(),this.watchLocal(),this.chime("join");for(const[e,n]of this.peers)n.on&&this.lobby.link.addStream(this.stream,e,Wh);return this.announce(),this.onChange(),!0}stop(){var t;if(this.on){for(const[e,n]of this.peers)n.on&&this.lobby.link.removeStream(this.stream,e),this.unplug(n);for(const e of((t=this.stream)==null?void 0:t.getTracks())||[])e.stop();this.stream=null,this.on=!1,this.localSpeaking=!1,this.announce(),this.onChange()}}async useMicrophone(t){this.on&&(this.stop(),await this.start(t))}setMuted(t){this.muted=t,this.applyTrack(),this.announce(),this.onChange()}setPtt(t){this.ptt=t,this.applyTrack(),this.announce(),this.onChange()}pushToTalk(t){!this.ptt||this.pttDown===t||(this.pttDown=t,this.applyTrack(),this.onChange())}applyTrack(){var t;for(const e of((t=this.stream)==null?void 0:t.getAudioTracks())||[])e.enabled=this.live}announce(t){var n;const e={t:"voice",on:this.on,muted:this.muted||this.silenced.has(this.lobby.selfId)};this.isGm&&(e.silenced=[...this.silenced]),(n=this.lobby.link)==null||n.send(e,t)}message(t,e){const n=this.peer(e),s=n.on;if(n.on=!!t.on,n.muted=!!t.muted,this.on&&n.on!==s&&this.chime(n.on?"join":"leave"),this.on&&n.on&&!s&&this.lobby.link.addStream(this.stream,e,Wh),this.on&&!n.on&&s&&this.lobby.link.removeStream(this.stream,e),n.on||this.unplug(n),Array.isArray(t.silenced)&&e===this.lobby.gmId){this.silenced=new Set(t.silenced.filter(r=>typeof r=="string")),this.applyTrack();for(const[r,o]of this.peers)this.applyVolume(r,o)}this.onChange()}hear(t,e){const n=this.peer(e);if(!this.on)return;this.unplug(n);const s=document.createElement("audio");s.autoplay=!0,s.srcObject=t,this.output&&s.setSinkId&&s.setSinkId(this.output).catch(()=>{}),this.audioRoot.append(s),n.audio=s,this.applyVolume(e,n);try{const r=this.context().createMediaStreamSource(t);n.analyser=this.context().createAnalyser(),n.analyser.fftSize=512,r.connect(n.analyser),n.gain=this.context().createGain(),r.connect(n.gain)}catch{}this.applyVolume(e,n),this.onChange()}setVolume(t,e){const n=this.peer(t);n.volume=Math.min(Rd,Math.max(0,e)),this.applyVolume(t,n),this.remember(t,{volume:n.volume})}applyVolume(t,e){if(!e.audio)return;const n=this.silenced.has(t)||e.hushed?0:e.volume;if(n<=1||!e.gain){e.audio.muted=!1,e.audio.volume=Math.min(1,n),e.boosted&&(e.gain.disconnect(),e.boosted=!1);return}e.gain.gain.value=n,e.boosted||(e.gain.connect(this.context().destination),e.boosted=!0),e.audio.muted=!0}hush(t,e){const n=this.peer(t);n.hushed=!!e,this.applyVolume(t,n),this.remember(t,{hushed:n.hushed}),this.onChange()}nameOf(t){var e,n,s;return((s=(n=(e=this.lobby).roster)==null?void 0:n.call(e).find(r=>r.peerId===t))==null?void 0:s.name)||""}remember(t,e){const n=Jo(this.nameOf(t));if(!n)return;const s={...this.people[n],...e};s.volume===1&&delete s.volume,s.hushed||delete s.hushed,s.silenced||delete s.silenced,Object.keys(s).length?this.people[n]=s:delete this.people[n],dS(this.people)}recall(){var e,n;let t=!1;for(const s of((n=(e=this.lobby).roster)==null?void 0:n.call(e))||[]){if(s.peerId===this.lobby.selfId)continue;const r=this.people[Jo(s.name)];if(!r)continue;const o=this.peer(s.peerId);((r.volume??1)!==o.volume||!!r.hushed!==o.hushed)&&(o.volume=r.volume??1,o.hushed=!!r.hushed,this.applyVolume(s.peerId,o)),this.isGm&&r.silenced&&!this.silenced.has(s.peerId)&&(this.silenced.add(s.peerId),t=!0)}if(t){for(const[s,r]of this.peers)this.applyVolume(s,r);this.announce(),this.onChange()}}async setOutput(t){var e,n,s,r,o,a;this.output=t,(e=this.music)==null||e.setOutput(t),(o=(s=(n=this.ctx)==null?void 0:n.setSinkId)==null?void 0:(r=s.call(n,t)).catch)==null||o.call(r,()=>{});for(const l of this.peers.values())(a=l.audio)!=null&&a.setSinkId&&await l.audio.setSinkId(t).catch(()=>{})}silence(t,e){if(this.isGm){e?this.silenced.add(t):this.silenced.delete(t);for(const[n,s]of this.peers)this.applyVolume(n,s);this.remember(t,{silenced:e}),this.announce(),this.onChange()}}drop(t){const e=this.peers.get(t);e!=null&&e.on&&this.on&&this.chime("leave"),e&&this.unplug(e),this.peers.delete(t),this.onChange()}unplug(t){var e;t.audio&&(t.audio.srcObject=null,t.audio.remove()),t.audio=null;try{(e=t.gain)==null||e.disconnect()}catch{}t.gain=null,t.boosted=!1,t.analyser=null,t.speaking=!1}setChimes(t){this.chimes=t;try{localStorage.setItem(Td,t?"1":"0")}catch{}this.onChange()}chime(t){if(!this.chimes)return;let e;try{e=this.context()}catch{return}const n=t==="join"?[660,880]:[660,494],s=e.currentTime+.01;n.forEach((r,o)=>{const a=e.createOscillator(),l=e.createGain();a.type="sine",a.frequency.value=r;const c=s+o*.11;l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.12,c+.015),l.gain.exponentialRampToValueAtTime(1e-4,c+.22),a.connect(l).connect(e.destination),a.start(c),a.stop(c+.25)}),this.lastChime=t}context(){var t,e,n,s;return this.ctx||(this.ctx=new AudioContext,this.output&&((s=(e=(t=this.ctx).setSinkId)==null?void 0:(n=e.call(t,this.output)).catch)==null||s.call(n,()=>{}))),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}watchLocal(){try{const t=this.context().createMediaStreamSource(this.stream);this.localAnalyser=this.context().createAnalyser(),this.localAnalyser.fftSize=512,t.connect(this.localAnalyser)}catch{this.localAnalyser=null}}measure(){let t=!1;const e=s=>{if(!s)return!1;const r=new Float32Array(s.fftSize);s.getFloatTimeDomainData(r);let o=0;for(const a of r)o+=a*a;return Math.sqrt(o/r.length)>fS},n=this.on&&this.live&&e(this.localAnalyser);n!==this.localSpeaking&&(this.localSpeaking=n,t=!0);for(const[s,r]of this.peers){const o=r.on&&!r.muted&&!this.silenced.has(s)&&e(r.analyser);o!==r.speaking&&(r.speaking=o,t=!0)}t&&this.onChange()}status(){const t=new Map;t.set(this.lobby.selfId,{on:this.on,muted:!this.live,speaking:this.localSpeaking,silenced:this.silenced.has(this.lobby.selfId)});for(const[e,n]of this.peers)t.set(e,{on:n.on,muted:n.muted,speaking:n.speaking,silenced:this.silenced.has(e)});return t}leave(){var t;this.stop(),clearInterval(this.meter),(t=this.ctx)==null||t.close().catch(()=>{})}}async function mS(){try{const i=await navigator.mediaDevices.enumerateDevices();return{inputs:i.filter(t=>t.kind==="audioinput"),outputs:i.filter(t=>t.kind==="audiooutput"),canChooseOutput:typeof HTMLMediaElement<"u"&&"setSinkId"in HTMLMediaElement.prototype}}catch{return{inputs:[],outputs:[],canChooseOutput:!1}}}const Xh="KeyV";class gS{constructor({voice:t,roster:e}){this.voice=t,this.roster=e,this.devices={inputs:[],outputs:[],canChooseOutput:!1},this.root=M("section",{class:"voice",dataset:{tool:"voice"}}),this.person=M("section",{class:"voice person",dataset:{tool:"person"}}),this.personId=null,this.render();const n=()=>{var s;return/^(INPUT|TEXTAREA|SELECT)$/.test(((s=document.activeElement)==null?void 0:s.tagName)||"")};addEventListener("keydown",s=>{s.code===Xh&&!s.repeat&&!n()&&t.pushToTalk(!0)}),addEventListener("keyup",s=>{s.code===Xh&&t.pushToTalk(!1)}),addEventListener("blur",()=>t.pushToTalk(!1))}async refreshDevices(){this.devices=await mS(),this.render()}render(){var c,h,d;if(this.renderPerson(),((c=document.activeElement)==null?void 0:c.type)==="range"&&this.root.contains(document.activeElement))return;const t=this.voice,e=this.roster(),n=u=>e.find(f=>f.peerId===u);if(!t.on){this.root.replaceChildren(...[M("h2",{text:"Voice"}),M("button",{type:"button",class:"primary",id:"voice-join",text:"Join voice",onclick:async()=>{await t.start()&&this.refreshDevices()}}),t.error?M("p",{class:"note",dataset:{kind:"error"},text:t.error}):null,M("p",{class:"note",text:"Your microphone goes straight to the others at the table who have joined — no server in between."}),this.people(n)].filter(Boolean));return}const s=M("select",{onchange:()=>t.useMicrophone(s.value).then(()=>this.refreshDevices())},...this.devices.inputs.map(u=>M("option",{value:u.deviceId,text:u.label||"Microphone"}))),r=(d=(h=t.stream)==null?void 0:h.getAudioTracks()[0])==null?void 0:d.getSettings().deviceId;r&&(s.value=r);const o=this.devices.canChooseOutput?M("select",{onchange:()=>t.setOutput(o.value)},...this.devices.outputs.map(u=>M("option",{value:u.deviceId,text:u.label||"Speakers"}))):null;o&&t.output&&(o.value=t.output);const a=M("input",{type:"checkbox",id:"voice-ptt",onchange:()=>t.setPtt(a.checked)});a.checked=t.ptt;const l=M("input",{type:"checkbox",id:"voice-chimes",onchange:()=>t.setChimes(l.checked)});l.checked=t.chimes,this.root.replaceChildren(...[M("h2",{text:"Voice"}),M("div",{class:"row"},M("button",{type:"button",class:t.muted?"primary":"ghost",id:"voice-mute",text:t.muted?"Unmute":"Mute",onclick:()=>t.setMuted(!t.muted)}),M("button",{type:"button",class:"ghost",id:"voice-leave",text:"Leave voice",onclick:()=>t.stop()})),t.silenced.has(t.lobby.selfId)?M("p",{class:"note",dataset:{kind:"warn"},text:"The GM has muted you for now."}):null,M("label",{class:"check",for:"voice-ptt"},a," Push to talk — hold V"),M("label",{class:"check",for:"voice-chimes"},l," Join and leave sounds"),M("div",{class:"field"},M("label",{text:"Microphone"}),s),o?M("div",{class:"field"},M("label",{text:"Speakers"}),o):null,this.people(n)].filter(Boolean))}people(t){const e=this.voice,s=this.roster().filter(r=>r.peerId!==e.lobby.selfId).map(r=>{const{p:o,vol:a,pct:l,button:c}=this.controls(r);return M("li",{class:[o.speaking?"speaking":"",o.on?"":"away",o.hushed?"hushed":""].join(" ").trim(),dataset:{peer:r.peerId}},M("i",{class:"seat",style:{background:wi(r.color??9280918)}}),M("span",{class:"who",text:r.name,title:o.on?`${r.name} — in voice`:`${r.name} — not in voice`}),a,l,c)});return M("div",{},M("h3",{class:"sub",text:s.length?"People":"Nobody else is here yet."}),s.length?M("ul",{class:"voice-people"},...s):null,s.length?M("p",{class:"note",text:e.isGm?"How loud each person is to you, and who may speak. Remembered for them next time.":"How loud each person is to you, or muted for you alone. Only the GM can silence someone for everyone. Remembered for them next time."}):null)}controls(t){const e=this.voice,n=t.peerId,s=e.peer(n),r=M("span",{class:"pct",text:`${Math.round(s.volume*100)}%`}),o=M("input",{type:"range",min:"0",max:String(Rd),step:"0.05",value:String(s.volume),title:"How loud they are to you","aria-label":`Volume for ${t.name}`,oninput:()=>{e.setVolume(n,+o.value),r.textContent=`${Math.round(+o.value*100)}%`},ondblclick:()=>{o.value="1",e.setVolume(n,1),r.textContent="100%"}});o.disabled=s.hushed;const a=e.silenced.has(n),l=e.isGm&&t.role!==Je?M("button",{type:"button",class:`ghost small${a?" armed":""}`,text:a?"Silenced":"Silence","aria-pressed":String(a),title:a?"Silenced for everyone — press to let them speak again":"Mute them for everyone at the table",onclick:()=>e.silence(n,!a)}):M("button",{type:"button",class:`ghost small${s.hushed?" armed":""}`,text:s.hushed?"Muted":"Mute","aria-pressed":String(s.hushed),title:s.hushed?"Muted for you — press to hear them again":"Mute them for you only; the table still hears them",onclick:()=>e.hush(n,!s.hushed)});return{p:s,vol:o,pct:r,button:l}}showPerson(t){this.personId=t,this.renderPerson()}renderPerson(){var l;if(!this.personId||((l=document.activeElement)==null?void 0:l.type)==="range"&&this.person.contains(document.activeElement))return;const t=this.voice,e=this.roster().find(c=>c.peerId===this.personId);if(!e){this.person.replaceChildren(M("h2",{text:"Gone"}),M("p",{class:"note",text:"They have left the table."}));return}const{p:n,vol:s,pct:r,button:o}=this.controls(e),a=t.silenced.has(e.peerId)?t.isGm?"Silenced for everyone.":"Silenced by the GM.":n.hushed?"Muted for you.":n.on?n.speaking?"In voice — talking.":"In voice.":"Not in voice right now.";this.person.replaceChildren(M("h2",{},M("i",{class:"seat",style:{background:wi(e.color??9280918)}}),e.name),M("p",{class:"note state",text:a}),M("div",{class:`person-row${n.hushed?" hushed":""}`},s,r,o),M("p",{class:"note",text:t.isGm&&e.role!==Je?"Their volume is for you; Silence mutes them for the whole table. Remembered for them next time.":"Their volume and mute are for you alone. Remembered for them next time."}))}}const vS={kind:"music"},xS=128e3,Cd="vtt.music";class Pd{constructor({lobby:t,voice:e,onChange:n}){this.lobby=t,this.onChange=n,this.stream=null,this.source="",this.error="",this.playing=!1,this.audio=null;const s=MS();this.volume=s.volume,this.muted=s.muted,e.music=this}get isGm(){return this.lobby.isGm}get sharing(){return!!this.stream}static get canShare(){var n,s,r;if(!((n=navigator.mediaDevices)!=null&&n.getDisplayMedia))return!1;if((((r=(s=navigator.userAgentData)==null?void 0:s.brands)==null?void 0:r.map(o=>o.brand))||[]).some(o=>/Chromium|Google Chrome|Microsoft Edge/.test(o)))return!0;const e=navigator.userAgent;return/Chrome\/|Chromium\/|Edg\//.test(e)&&!/Firefox\//.test(e)}async share(){var r,o;this.error="";let t;try{t=await _S()}catch(a){return(a==null?void 0:a.name)!=="NotAllowedError"&&(a==null?void 0:a.name)!=="AbortError"&&(this.error=`Could not share that (${(a==null?void 0:a.name)||a}).`),this.onChange(),!1}const e=t.getAudioTracks(),n=t.getVideoTracks()[0],s=(r=n==null?void 0:n.getSettings)==null?void 0:r.call(n).displaySurface;if(!e.length){for(const a of t.getTracks())a.stop();return this.error=yS(s),console.info("[music] share had no audio track; surface was",s),this.onChange(),!1}this.video=n||null,(o=n==null?void 0:n.applyConstraints)==null||o.call(n,{frameRate:1,width:64,height:64}).catch(()=>{}),this.stream=new MediaStream(e),this.source=(n==null?void 0:n.label)||e[0].label||"a tab",e[0].addEventListener("ended",()=>this.stop());for(const a of this.lobby.link.peers())this.sendTo(a);return this.announce(),this.onChange(),!0}stop(){var t;if(this.stream){for(const e of this.lobby.link.peers())this.lobby.link.removeStream(this.stream,e);for(const e of this.stream.getTracks())e.stop();(t=this.video)==null||t.stop(),this.video=null,this.stream=null,this.source="",this.announce(),this.onChange()}}peerJoined(t){this.isGm&&(this.stream&&this.sendTo(t),this.announce(t))}sendTo(t){const e=this.lobby.link.addStream(this.stream,t,vS);Promise.allSettled(e||[]).then(()=>{var a,l,c;const n=this.lobby.link.connection(t),s=(a=this.stream)==null?void 0:a.getAudioTracks()[0],r=(l=n==null?void 0:n.getSenders)==null?void 0:l.call(n).find(h=>h.track===s);if(!r)return;const o=r.getParameters();o.encodings=(c=o.encodings)!=null&&c.length?o.encodings:[{}],o.encodings[0].maxBitrate=xS,r.setParameters(o).catch(()=>{})})}announce(t){var e;this.isGm&&((e=this.lobby.link)==null||e.send({t:"music",on:this.sharing},t))}message(t,e){e===this.lobby.gmId&&(this.playing=!!t.on,this.playing||this.unplug(),this.onChange())}hear(t,e){if(e!==this.lobby.gmId)return;this.unplug();const n=document.createElement("audio");n.autoplay=!0,n.srcObject=t,document.body.append(n),n.hidden=!0,this.audio=n,this.playing=!0,this.apply(),this.onChange()}setVolume(t){this.volume=t,this.apply(),$h(this)}setMuted(t){this.muted=t,this.apply(),$h(this),this.onChange()}setOutput(t){var e,n;(n=(e=this.audio)==null?void 0:e.setSinkId)==null||n.call(e,t).catch(()=>{})}apply(){this.audio&&(this.audio.volume=this.muted?0:this.volume)}unplug(){this.audio&&(this.audio.srcObject=null,this.audio.remove()),this.audio=null}leave(){this.stop(),this.unplug()}}async function _S(){const i=await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:"browser"},audio:!0,selfBrowserSurface:"exclude"});for(const t of i.getAudioTracks())t.applyConstraints({echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}).catch(()=>{});return i}function yS(i){return i==="window"?'That shared a window, and Chrome only sends sound from a tab. Share again, choose the "Chrome Tab" pane at the top of the picker, pick the tab with the music, and keep "Also share tab audio" switched on.':i==="monitor"?'That shared the whole screen, which carries no sound here. Share again and choose the "Chrome Tab" pane, pick the tab with the music, and keep "Also share tab audio" on.':'That tab was shared without its sound. Share again and switch on "Also share tab audio" at the bottom of the picker before pressing Share.'}function MS(){try{const i=JSON.parse(localStorage.getItem(Cd)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.6,muted:!!i.muted}}catch{return{volume:.6,muted:!1}}}function $h(i){try{localStorage.setItem(Cd,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}class SS{constructor({music:t}){this.music=t,this.root=M("section",{class:"music",dataset:{tool:"music"}}),this.render()}render(){const t=this.music,e=[M("h2",{text:"Music"})];t.sharing?e.push(M("p",{class:"playing",text:"♪ Playing to the table"}),M("p",{class:"note source",text:t.source}),M("button",{type:"button",class:"ghost",id:"music-stop",text:"Stop the music",onclick:()=>t.stop()}),M("p",{class:"note",text:"Change track, volume or playlist in that tab — the table hears whatever it plays. Each player has their own volume."})):Pd.canShare?e.push(M("ol",{class:"steps"},M("li",{text:"Start your music in another tab — Spotify, YouTube, anything."}),M("li",{text:`Press the button below. In Chrome's picker choose the "Chrome Tab" pane — not "Window" — and pick that tab.`}),M("li",{text:'Keep "Also share tab audio" switched on, then Share.'})),M("p",{class:"note",text:"Chrome always shares a picture too; the table only ever gets the sound."}),M("button",{type:"button",class:"primary",id:"music-share",text:"Share a tab's sound…",onclick:()=>t.share()})):e.push(M("p",{class:"note",dataset:{kind:"warn"},text:"This browser can share a screen but not its sound — Firefox and Safari have no option for it."}),M("p",{class:"note",text:"To play music to the table, run the table in Chrome or Edge on a computer. Players can listen in any browser."})),t.error&&e.push(M("p",{class:"note",dataset:{kind:"error"},text:t.error})),this.root.replaceChildren(...e)}}class bS{constructor({music:t}){this.music=t,this.els={},this.els.mute=M("button",{type:"button",class:"ghost small",onclick:()=>t.setMuted(!t.muted)}),this.els.volume=M("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Music volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=M("div",{class:"music-control",hidden:!0},M("span",{class:"label",text:"♪ Music"}),this.els.volume,this.els.mute),this.render()}render(){const t=this.music;this.root.hidden=!t.playing||t.isGm,this.els.volume.value=String(t.volume),this.els.volume.disabled=t.muted,this.els.mute.textContent=t.muted?"Unmute":"Mute"}}class Ld{constructor({ambience:t,label:e="☁ Ambience"}){this.ambience=t,this.els={},this.els.mute=M("button",{type:"button",class:"ghost small",onclick:()=>{t.setMuted(!t.muted),this.render()}}),this.els.volume=M("input",{type:"range",min:"0",max:"1",step:"0.05","aria-label":"Ambience volume",oninput:()=>t.setVolume(+this.els.volume.value)}),this.root=M("div",{class:"music-control ambience-control",hidden:!0},M("span",{class:"label",text:e}),this.els.volume,this.els.mute),this.render()}render(t=this.weather){this.weather=t;const e=this.ambience;this.root.hidden=!t,document.activeElement!==this.els.volume&&(this.els.volume.value=String(e.volume)),this.els.volume.disabled=e.muted,this.els.mute.textContent=e.muted?"Unmute":"Mute"}}const Id="vtt.ambience",Rs=1.5,wS=.35,ES=.3,TS=1.2;class AS{constructor(){this.ctx=null,this.out=null,this.current=null,this.kind=null,this.intensity=.6;const t=US();this.volume=t.volume,this.muted=t.muted,this.unlocked=!1,this.curtain=1,this.duck=1,this.duckTimer=0;const e=()=>{var n,s;this.unlocked=!0,(s=(n=this.ctx)==null?void 0:n.resume)==null||s.call(n),this.kind&&this.apply(),removeEventListener("pointerdown",e,!0),removeEventListener("keydown",e,!0)};addEventListener("pointerdown",e,!0),addEventListener("keydown",e,!0)}ensure(){var t,e,n,s;if(this.ctx)return this.ctx;try{this.ctx=new AudioContext}catch{return null}return(s=(e=(t=this.ctx).resume)==null?void 0:(n=e.call(t)).catch)==null||s.call(n,()=>{}),this.out=this.ctx.createGain(),this.out.gain.value=this.level(),this.limiter=this.ctx.createDynamicsCompressor(),this.limiter.threshold.value=-6,this.limiter.knee.value=6,this.limiter.ratio.value=12,this.limiter.attack.value=.003,this.limiter.release.value=.25,this.out.connect(this.limiter).connect(this.ctx.destination),this.meter=this.ctx.createAnalyser(),this.meter.fftSize=2048,this.out.connect(this.meter),this.noise=CS(this.ctx),this.brown=PS(this.ctx),this.ready=IS(this.ctx),this.ctx}update(t){const e=(t==null?void 0:t.weather)||null,n=(t==null?void 0:t.intensity)??.6;if(e===this.kind&&Math.abs(n-this.intensity)<.001)return;const s=e!==this.kind;this.kind=e,this.intensity=n,this.unlocked&&this.apply(s)}apply(t=!0){var e,n,s;if(!(!this.unlocked||!this.kind&&!this.ctx||!this.ensure())){if(!this.hissReady){this.ready.then(()=>{this.hissReady=!0,this.apply(!0)});return}(t||!this.current)&&((e=this.current)==null||e.stop(),this.current=this.kind&&((n=Qo[this.kind])==null?void 0:n.call(Qo,this.ctx,this.noise,this.out))||null),(s=this.current)==null||s.set(this.intensity)}}thunder(t){if(!this.unlocked||!this.ensure())return null;const e=(t==null?void 0:t.weather)==="rain"?t.intensity??.6:.5,n=Math.min(1,Math.max(0,e)),s=.15+(1-n)*8;return RS(this.ctx,this.noise,this.brown,this.out,n,this.ctx.currentTime+s),this.lastThunder={delay:Math.round(s*100)/100,near:n},s}level(){return this.muted?0:wS*this.volume*this.volume*this.curtain*this.duck}setDucked(t){clearTimeout(this.duckTimer);const e=(n,s)=>{this.duck!==n&&(this.duck=n,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,s))};t?e(ES,.08):this.duckTimer=setTimeout(()=>e(1,.6),TS*1e3)}setVolume(t){this.volume=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),jh(this)}setMuted(t){this.muted=t,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.1),jh(this)}setCurtain(t){const e=Math.min(1,Math.max(0,t));Math.abs(e-this.curtain)<.005&&!(e===0&&this.curtain!==0)||(this.curtain=e,this.out&&this.out.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.05))}status(){var e,n;let t=0;if(this.meter){const s=new Float32Array(this.meter.fftSize);this.meter.getFloatTimeDomainData(s),t=Math.sqrt(s.reduce((r,o)=>r+o*o,0)/s.length)}return{kind:this.current?this.kind:null,intensity:this.intensity,volume:this.volume,muted:this.muted,running:((e=this.ctx)==null?void 0:e.state)==="running",level:Math.round(t*1e3)/1e3,thunder:this.lastThunder??null,hiss:!!((n=this.ctx)!=null&&n.hiss)}}}const Qo={rain(i,t,e){const n=ll(i,t),s=kn(i,"lowpass",2600,.4),r=kn(i,"highpass",400,.5),o=i.createGain();n.node.connect(r).connect(s).connect(o);const a=cl(i,e);o.connect(a);let l=.6;const c=u=>{const f=Math.random()<.08,g=ts(i,t),v=kn(i,"bandpass",f?500+Math.random()*700:1400+Math.random()*3600,f?3:1.5+Math.random()*2),p=i.createGain(),m=(f?.35:.08+Math.random()*.18)*(.6+.4*l),y=f?.12+Math.random()*.1:.03+Math.random()*.06;p.gain.setValueAtTime(0,u),p.gain.linearRampToValueAtTime(m,u+.004+Math.random()*.004),p.gain.exponentialRampToValueAtTime(1e-4,u+y);let _=p;if(i.createStereoPanner){const S=i.createStereoPanner();S.pan.value=Math.random()*1.6-.8,p.connect(S),_=S}g.connect(v).connect(p),_.connect(a),g.start(u,Math.random()*Zn),g.stop(u+y+.05)},h=i.hiss?new AudioWorkletNode(i,"vtt-rain",{numberOfInputs:0,outputChannelCount:[2]}):null;h==null||h.connect(a);const d=h?{stop(){setTimeout(()=>{h.port.postMessage("stop"),h.disconnect()},(Rs+.2)*1e3)}}:Yh(i,()=>-Math.log(1-Math.random())/(4+26*l),c);return{set(u){l=u,h==null||h.port.postMessage({k:l}),o.gain.setTargetAtTime(.18+.5*l,i.currentTime,.5),s.frequency.setTargetAtTime(1800+2600*l,i.currentTime,.5)},stop(){d.stop(),hl(i,a,[n])}}},embers(i,t,e){const n=cl(i,e),s=ll(i,t),r=kn(i,"lowpass",300,.7),o=i.createGain();s.node.connect(r).connect(o).connect(n);let a=.6;const c=Yh(i,()=>(.06+Math.random()*.5)/(.35+a),h=>{const d=Math.random()<.25?2+Math.floor(Math.random()*3):1;for(let u=0;u<d;u++){const f=h+u*(.015+Math.random()*.04),g=ts(i,t),v=kn(i,"bandpass",1200+Math.random()*3500,1.5+Math.random()*3),p=i.createGain(),m=(.5+Math.random()*.9)*(.5+.5*a);p.gain.setValueAtTime(0,f),p.gain.linearRampToValueAtTime(m,f+.001),p.gain.exponentialRampToValueAtTime(1e-4,f+.01+Math.random()*.04),g.connect(v).connect(p).connect(n),g.start(f,Math.random()*Zn),g.stop(f+.08)}});return{set(h){a=h,o.gain.setTargetAtTime(.35+.9*a,i.currentTime,.5)},stop(){c.stop(),hl(i,n,[s])}}},snow(i,t,e){return qh(i,t,e,{base:550,spread:380,level:1.6,rate:.12})},fog(i,t,e){return qh(i,t,e,{base:320,spread:140,level:1.1,rate:.07})}};function RS(i,t,e,n,s,r){const o=1-s,a=.45+.55*s;if(s>.4){const u=.5*(s-.3)*a,f=8+Math.round(8*s);for(let m=0;m<f;m++){const y=r+Math.pow(m/f,1.6)*.55+Math.random()*.03,_=ts(i,t),S=kn(i,"lowpass",1800+2600*s*Math.random(),.5),C=i.createGain(),T=u*(1-m/f)*(.5+Math.random()*.5);C.gain.setValueAtTime(0,y),C.gain.linearRampToValueAtTime(T,y+.004),C.gain.exponentialRampToValueAtTime(1e-4,y+.06+Math.random()*.12),_.connect(S).connect(C).connect(n),_.start(y,Math.random()*Zn),_.stop(y+.3)}const g=ts(i,e),v=kn(i,"lowpass",140,.7),p=i.createGain();p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(3.2*s*a,r+.02),p.gain.exponentialRampToValueAtTime(1e-4,r+.9),g.connect(v).connect(p).connect(n),g.start(r,Math.random()*Zn),g.stop(r+1)}const l=4+4*o+Math.random()*1.5,c=r+(s>.4?.12:.05),h=.25+.9*o,d=(u,f)=>{const g=ts(i,e),v=kn(i,"lowpass",u,.6),p=i.createGain();g.connect(v).connect(p).connect(n),p.gain.setValueAtTime(1e-4,c),p.gain.setTargetAtTime(f,c,h/3);let m=c+h;for(;m<c+l;){const y=Math.pow(1-(m-c)/l,.6+.8*o);p.gain.setTargetAtTime(f*y*(.4+.6*Math.random()),m,.12),m+=.25+Math.random()*.5}p.gain.setTargetAtTime(1e-4,c+l,.3),g.start(c,Math.random()*Zn),g.stop(c+l+1.5)};d(220+700*s,a*(1.6+2.4*s)*(1+.8*o)),d(90,a*(2.4+2.6*s))}function qh(i,t,e,{base:n,spread:s,level:r,rate:o}){const a=cl(i,e),l=ll(i,t),c=kn(i,"bandpass",n,1.2),h=i.createGain();l.node.connect(c).connect(h).connect(a);const d=[o,o*.37].map((g,v)=>{const p=i.createOscillator();p.frequency.value=g;const m=i.createGain();return m.gain.value=v===0?s:s*.5,p.connect(m).connect(c.frequency),p.start(),p}),u=i.createOscillator();u.frequency.value=o*.8;const f=i.createGain();return u.connect(f).connect(h.gain),u.start(),{set(g){const v=r*(.2+.8*g);h.gain.setTargetAtTime(v,i.currentTime,.6),f.gain.setTargetAtTime(v*.6,i.currentTime,.6),c.frequency.setTargetAtTime(n*(.8+.5*g),i.currentTime,.8)},stop(){hl(i,a,[l,...d,u])}}}const Zn=6;function CS(i){const t=i.createBuffer(1,i.sampleRate*Zn,i.sampleRate),e=t.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1;return t}function PS(i){const t=i.createBuffer(1,i.sampleRate*Zn,i.sampleRate),e=t.getChannelData(0);let n=0;for(let s=0;s<e.length;s++)n=(n+.02*(Math.random()*2-1))/1.02,e[s]=n*3.5;return t}const LS=`
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
});`;function IS(i){if(!i.audioWorklet)return Promise.resolve();const t=URL.createObjectURL(new Blob([LS],{type:"application/javascript"}));return i.audioWorklet.addModule(t).then(()=>{i.hiss=!0}).catch(()=>{}).finally(()=>URL.revokeObjectURL(t))}function ll(i,t){if(i.hiss){const n=new AudioWorkletNode(i,"vtt-hiss",{numberOfInputs:0,outputChannelCount:[1]});return{node:n,stop(s){setTimeout(()=>{n.port.postMessage("stop"),n.disconnect()},Math.max(0,s-i.currentTime)*1e3)}}}const e=ts(i,t);return e.start(0,Math.random()*Zn),{node:e,stop:n=>e.stop(n)}}function ts(i,t){const e=i.createBufferSource();return e.buffer=t,e.loop=!0,e}function kn(i,t,e,n){const s=i.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=n,s}function cl(i,t){const e=i.createGain();return e.gain.setValueAtTime(0,i.currentTime),e.gain.linearRampToValueAtTime(1,i.currentTime+Rs),e.connect(t),e}function hl(i,t,e){const n=i.currentTime;t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+Rs);for(const s of e)try{s.stop(n+Rs+.05)}catch{}setTimeout(()=>t.disconnect(),(Rs+.2)*1e3)}const DS=1.2,kS=100;function Yh(i,t,e){let n=i.currentTime+t();const s=()=>{const o=i.currentTime;for(n<o&&(n=o+t());n<o+DS;)e(n),n+=t()};s();const r=setInterval(s,kS);return{stop(){clearInterval(r)}}}function US(){try{const i=JSON.parse(localStorage.getItem(Id)||"{}");return{volume:Number.isFinite(i.volume)?i.volume:.5,muted:!!i.muted}}catch{return{volume:.5,muted:!1}}}function jh(i){try{localStorage.setItem(Id,JSON.stringify({volume:i.volume,muted:i.muted}))}catch{}}const Dd="vtt-table";async function kd(i,t){var a;const e={};for(const l of Object.keys(i.state.assets||{})){const c=await t.blob(l);c&&(e[l]={mime:c.type||((a=i.state.assets[l])==null?void 0:a.mime)||"image/webp",data:await FS(c)})}const{id:n,tokens:s,...r}=i,o=JSON.stringify({format:Dd,v:1,...r,assets:e});return new Blob([o],{type:"application/json"})}async function NS(i){let t;try{t=JSON.parse(i)}catch{throw new Error("That is not a table file.")}if(!t||t.format!==Dd||typeof t.state!="object")throw new Error("That is not a table file.");if(t.v>1)throw new Error("That table was saved by a newer version. Reload to update, then try again.");const e=[];let n=0;for(const[r,o]of Object.entries(t.assets||{}))try{const a=OS(o.data);if(await Hs(a.buffer)!==r){n++;continue}e.push({hash:r,blob:new Blob([a],{type:typeof o.mime=="string"?o.mime:"image/webp"})})}catch{n++}return{record:{name:typeof t.name=="string"?t.name.slice(0,80):"Imported table",code:typeof t.code=="string"?t.code.slice(0,8):null,savedAt:Number.isFinite(t.savedAt)?t.savedAt:Date.now(),seed:Number.isInteger(t.seed)?t.seed:void 0,rng:t.rng&&typeof t.rng=="object"?t.rng:void 0,said:Number.isInteger(t.said)?t.said:0,secrets:Array.isArray(t.secrets)?t.secrets.slice(-200):[],secretRng:t.secretRng&&typeof t.secretRng=="object"?t.secretRng:void 0,state:Ya(t.state)},images:e,skipped:n}}async function FS(i){const t=new Uint8Array(await i.arrayBuffer());let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}function OS(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const BS=(i,t)=>typeof i=="string"&&typeof t=="string"&&i.trim().toLowerCase()===t.trim().toLowerCase();function zS(i,t,e){for(const n of Object.values(i.roster))if(!(n.peerId===e||n.role!==ti||!n.away||n.claimed)&&BS(n.name,t))return n;return null}function Ud(i,t,e){const n=[],s=Re(i);for(const o of Object.values((s==null?void 0:s.tokens)||{}))o.owner===t&&n.push(["tok.patch",o.id,{owner:e}]);const r=i.roster[t];return r&&n.push(["peer.join",{...r,away:!0,claimed:e}]),n}function GS(i,t){const e=[];for(const n of Object.values(i.roster))n.role!==Je||n.peerId===t||e.push(...Ud(i,n.peerId,t));return e}const mn={tokens:40,name:48,minSize:.25,maxSize:12,reach:2e3,assetName:128,artPx:2e4},Kh=/^[0-9a-f]{64}$/,ta=i=>typeof i=="string"&&i.length>0&&i.length<=64,Xi=i=>typeof i=="number"&&Number.isFinite(i),Ar=(i,t,e)=>i<t?t:i>e?e:i,Wi=i=>Xi(i)?Ar(Math.round(i*100)/100,-2e3,mn.reach):null,ea=Math.PI*2,Zh=i=>Math.round((i%ea+ea)%ea*1e4)/1e4,na=(i,t)=>typeof i=="string"?i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,t):"";function HS(i,t){var e;return((e=i.roster[t])==null?void 0:e.role)===Je}function VS(i,t,e){var s;const n=(s=Re(i))==null?void 0:s.tokens[e];return!!n&&n.owner===t}function WS(i,t,e){var a;if(!Array.isArray(e)||typeof e[0]!="string")return null;const[n,s,r,o]=e;switch(n){case"asset.add":{if(!s||typeof s!="object"||!Kh.test(s.hash))return null;const l=c=>Number.isInteger(c)&&c>0&&c<=mn.artPx?c:0;return["asset.add",{hash:s.hash,name:na(s.name,mn.assetName)||"token",mime:typeof s.mime=="string"&&/^image\/[\w.+-]{1,32}$/.test(s.mime)?s.mime:"image/webp",w:l(s.w),h:l(s.h),size:Number.isInteger(s.size)&&s.size>=0?s.size:0,scaled:!!s.scaled}]}case"tok.add":{if(!s||typeof s!="object")return null;const l=Wi(s.x),c=Wi(s.y);if(l===null||c===null)return null;const h={name:na(s.name,mn.name),x:l,y:c,size:Xi(s.size)?Ar(s.size,mn.minSize,mn.maxSize):1,owner:t,layer:"token",hidden:!1};if(s.asset!==void 0&&s.asset!==null){if(!Kh.test(s.asset))return null;h.asset=s.asset}const d=(a=i.roster[t])==null?void 0:a.color;return Number.isInteger(d)?h.border=d:Number.isInteger(s.border)&&(h.border=s.border&16777215),(s.shape==="circle"||s.shape==="square")&&(h.shape=s.shape),["tok.add",h]}case"tok.move":{const l=Wi(r),c=Wi(o);return!ta(s)||l===null||c===null?null:["tok.move",s,l,c]}case"tok.del":return ta(s)?["tok.del",s]:null;case"tok.patch":{if(!ta(s)||!r||typeof r!="object")return null;const l={};return typeof r.name=="string"&&(l.name=na(r.name,mn.name)),Xi(r.size)&&(l.size=Ar(Math.round(r.size*100)/100,mn.minSize,mn.maxSize)),Xi(r.rot)&&(l.rot=Zh(r.rot)),r.facing===null?l.facing=null:Xi(r.facing)&&(l.facing=Zh(r.facing)),typeof r.light=="boolean"&&(l.light=r.light),Xi(r.lightRange)&&(l.lightRange=Ar(Math.round(r.lightRange),1,Dr)),Array.isArray(r.status)&&(l.status=$u(r.status)),typeof r.mark=="string"&&(l.mark=Xu(r.mark)),Object.keys(l).length?["tok.patch",s,l]:null}case"peer.color":return Number.isInteger(s)?["peer.color",t,s&16777215]:null;case"dice.roll":return typeof s=="string"&&s.length<=vn.input?["dice.roll",t,s]:null;case"fx.ping":{const l=Wi(s),c=Wi(r);return l===null||c===null?null:["fx.ping",t,l,c]}case"chat.say":{const l=Yu(s);return l?["chat.say",t,l]:null}default:return null}}function XS(i,t,e){if(!i.roster[t])return!1;if(HS(i,t))return!0;const n=Re(i);switch(e[0]){case"asset.add":return!0;case"tok.add":{if(!n||e[1].asset&&!i.assets[e[1].asset])return!1;let s=0;for(const r of Object.values(n.tokens))r.owner===t&&s++;return s<mn.tokens}case"tok.move":case"tok.del":case"tok.patch":return VS(i,t,e[1]);case"peer.color":case"dice.roll":case"chat.say":case"fx.ping":return e[1]===t;default:return!1}}const $S=50;class qS{constructor({lobby:t,table:e,library:n,onRoster:s,onSeat:r,onFx:o}){this.lobby=t,this.table=e,this.library=n,this.onFx=o,this.unsubscribe=e.events.onRemote((a,l)=>{a==="op"&&t.link.send({t:"op",n:l[1],c:l[0]})}),t.listen({onRoster:s,onSeated:a=>{r==null||r(a),this.sendDoc(a)},onMessage:(a,l)=>this.receive(a,l),onAsset:(a,l,c)=>this.upload(a,l,c)})}sendDoc(t){this.lobby.link.send({t:"doc",s:this.table.snapshot()},t)}receive(t,e){if(t.t==="sync")return this.sendDoc(e);if(t.t==="need")return this.sendAssets(v_(t),e);if(t.t==="req")return this.request(vh(t.c),e)}request(t,e){var s;let n=0;for(const r of t){const o=WS(this.table.state,e,r);if(!o||!XS(this.table.state,e,o)){n++;continue}if(o[0]==="asset.add"&&!this.library.has(o[1].hash)){n++;continue}if(o[0]==="peer.color"){this.recolor(o[1],o[2]);continue}if(o[0]==="dice.roll"){try{this.table.rollDice(o[2],o[1])}catch{n++}continue}if(o[0]==="fx.ping"){const a={t:"fx",k:"ping",x:o[2],y:o[3],by:o[1]};(s=this.onFx)==null||s.call(this,a),this.lobby.link.send(a);continue}if(o[0]==="chat.say"){this.table.say(o[1],o[2],Date.now());continue}this.table.dispatch(o,{record:!1})}n&&console.info(`[session] refused ${n} of ${t.length} from ${e}`)}recolor(t,e){this.lobby.setColor(t,e);const n=this.table.scene;for(const s of Object.values((n==null?void 0:n.tokens)||{}))s.owner===t&&s.border!==e&&this.table.dispatch(["tok.patch",s.id,{border:e}],{record:!1})}async upload(t,e,n){const s=e==null?void 0:e.h;if(!Nr(s))return;const r=await Nd(t);if(!(!r||r.byteLength>pn.upload)){if(await Hs(r)!==s){console.warn("[session] upload did not match its hash",s);return}this.library.has(s)||await this.library.putBytes(s,new Blob([r],{type:Fd(e)})),this.request(vh(e.req),n)}}async sendAssets(t,e){for(const n of t){const s=await this.library.blob(n);if(!s||!this.lobby.members.has(e))continue;const r=this.table.state.assets[n];await this.lobby.link.sendAsset(await s.arrayBuffer(),{h:n,mime:(r==null?void 0:r.mime)||s.type},e)}}leave(){this.unsubscribe()}}class YS{constructor({lobby:t,table:e,library:n,onRoster:s,onGmLeft:r,onProgress:o,onHydrated:a,onFx:l}){this.lobby=t,this.table=e,this.library=n,this.onProgress=o,this.onHydrated=a,this.onFx=l,this.hydrated=!1,this.asked=new Set,this.syncing=!1,this.patches=new Map,this.patchTimer=0,t.listen({onRoster:s,onGmLeft:r,onMessage:c=>this.receive(c),onAsset:(c,h)=>this.adopt(c,h),onAssetProgress:(c,h)=>this.progress(c,h)})}receive(t){var e,n;if(t.t==="fx")return(e=this.onFx)==null?void 0:e.call(this,t);if(t.t==="doc"){const s=p_(t);if(!s)return;this.table.load(s),this.hydrated=!0,this.syncing=!1,(n=this.onHydrated)==null||n.call(this),this.fetchMissing()}else if(t.t==="op"){const s=m_(t);if(!s||!this.hydrated||this.syncing||s.seq<=this.table.seq)return;if(s.seq!==this.table.seq+1)return this.resync();if(this.table.dispatch(s.cmd,{record:!1}),this.table.seq!==s.seq)return this.resync();this.fetchMissing()}}resync(){this.syncing=!0,this.lobby.link.send({t:"sync"},this.lobby.gmId)}async fetchMissing(){const t=this.library.missing(this.table.state).filter(n=>!this.asked.has(n));if(!t.length)return;for(const n of t)this.asked.add(n);const e=await this.library.restore(t);for(const n of t)e.includes(n)||this.asked.delete(n);for(let n=0;n<e.length;n+=pn.need)this.lobby.link.send({t:"need",h:e.slice(n,n+pn.need)},this.lobby.gmId)}async adopt(t,e){var s;const n=e==null?void 0:e.h;if(!(!Nr(n)||!this.asked.has(n))){this.asked.delete(n);try{const r=await Nd(t);if(!r||await Hs(r)!==n){console.warn("[session] asset did not match its hash",n);return}await this.library.putBytes(n,new Blob([r],{type:Fd(e)}))}finally{this.asked.size||(s=this.onProgress)==null||s.call(this,null,"")}}}request(t){const e=[];for(const n of t)n[0]==="tok.patch"&&typeof n[1]=="string"?this.patches.set(n[1],{...this.patches.get(n[1]),...n[2]}):e.push(n);e.length?(this.flushPatches(),this.lobby.link.send({t:"req",c:e},this.lobby.gmId)):this.patches.size&&!this.patchTimer&&(this.patchTimer=setTimeout(()=>this.flushPatches(),$S))}flushPatches(){if(clearTimeout(this.patchTimer),this.patchTimer=0,!this.patches.size)return;const t=[...this.patches].map(([e,n])=>["tok.patch",e,n]);this.patches.clear(),this.lobby.link.send({t:"req",c:t},this.lobby.gmId)}async upload(t,e){if(await this.library.put(t),this.table.state.assets[t.hash])return this.request(e);await this.lobby.link.sendAsset(await t.blob.arrayBuffer(),{h:t.hash,mime:t.mime,req:e},this.lobby.gmId)}progress(t,e){var r,o;const n=e==null?void 0:e.h;if(!Nr(n)||!this.asked.has(n))return;const s=((r=this.table.state.assets[n])==null?void 0:r.name)||"art";(o=this.onProgress)==null||o.call(this,Math.max(0,Math.min(1,t)),s)}leave(){}}async function Nd(i){return i instanceof ArrayBuffer?i:i instanceof Blob?i.arrayBuffer():ArrayBuffer.isView(i)?i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength):null}function Fd(i){const t=i==null?void 0:i.mime;return typeof t=="string"&&/^(image\/[\w.+-]{1,32}|video\/(webm|mp4))$/.test(t)?t:"image/webp"}const V=new Ol,$e=new j_;let pe="local";V.dispatch(["peer.join",kr(pe,"You",{role:Je})],{record:!1});V.dispatch(["scene.add",{name:"Table"}],{record:!1});const Br=document.getElementById("chrome"),xe=M("div",{id:"busy",hidden:!0}),Ts=M("div",{id:"toast",hidden:!0});document.getElementById("stage").append(xe);document.body.append(Ts);let Jh=0;function _e(i,t="info"){Ts.textContent=i,Ts.dataset.kind=t,Ts.hidden=!1,clearTimeout(Jh),Jh=setTimeout(()=>{Ts.hidden=!0},5200)}let Oe=null,oe=new Set;const Qe=i=>i?Qt?V.dispatch(i):(re==null||re.request([i]),null):null,Vs=i=>Qt||!!i&&i.owner===pe,ke=new xd({onCommand:Qe,onImportMap:i=>jd(i),onPickMap:i=>ub(i),onImportToken:i=>Kd(i),onAddBlank:()=>Zd({border:af()}),onFit:()=>lt.fit(V.state),onDetect:()=>hb(),onClose:()=>ee.show(null)});let Od="rail",xi=null;const ee=new WM([{id:"scenes",label:"Scenes",key:"N",panel:!0},{id:"fx",label:"FX — weather, darkness, lightning",key:"X",panel:!0},{id:"tokens",label:"Add tokens",key:"T",panel:!0},{id:"map",label:"Map",key:"M",panel:!0},{id:"grid",label:"Grid",key:"G",panel:!0},{id:"light",label:"Light — walls and masks",key:"L",panel:!0},"gap",{id:"undo",label:"Undo",key:"Ctrl+Z",run:()=>V.undo()},{id:"redo",label:"Redo",key:"Ctrl+Shift+Z",run:()=>V.redo()},{id:"fit",label:"Fit the map to the view",key:"F",run:()=>lt.fit(V.state)},{id:"save",label:"Save the table to a file",run:()=>gb()}],{onOpen:i=>{Od=xi??(ee.root.hidden?"room":"rail"),xi=null,ke.show(i),Zr(),Ei.setActive(i==="light"),we==null||we.setOpen(i,Ze==null?void 0:Ze.personId)}});document.body.prepend(ee.root);function Zr(){var r,o;const i=ke.root;if(!i.hidden&&Od==="room"&&getComputedStyle(Br).position==="fixed"){const a=(r=i.offsetParent)==null?void 0:r.getBoundingClientRect();if(!a)return;const l=Br.getBoundingClientRect();i.style.left="auto",i.style.right=`${Math.round(Math.max(12,a.right-l.right))}px`;const c=l.bottom-a.top+8,h=a.height-i.offsetHeight-12;i.style.top=`${Math.round(Math.max(12,Math.min(c,h)))}px`;return}i.style.left="",i.style.right="";const t=ee.open&&ee.buttons.get(ee.open);if(i.hidden||!t||getComputedStyle(ee.root).position!=="fixed"){i.style.top="";return}const e=(o=i.offsetParent)==null?void 0:o.getBoundingClientRect();if(!e)return;const n=t.getBoundingClientRect().top-e.top-8,s=e.height-i.offsetHeight-12;i.style.top=`${Math.round(Math.max(12,Math.min(n,s)))}px`}new ResizeObserver(()=>Zr()).observe(ke.root);new ResizeObserver(()=>Zr()).observe(Br);addEventListener("resize",()=>Zr());const $l=new QM({onPlay:i=>zd(i),onAmbience:i=>{V.scene&&Qe(["scene.fx",V.scene.id,i])}});ke.addSection($l.root);const Bd=new tS({onCommand:Qe,onGo:i=>Qh(i),onFx:i=>{V.scene&&Qe(["scene.fx",V.scene.id,i])},defaultTitle:()=>nf(),onNew:()=>{const i=new Set(V.state.sceneOrder);Qe(["scene.add",{name:`Scene ${V.state.sceneOrder.length+1}`}]);const t=V.state.sceneOrder.find(e=>!i.has(e));t&&Qh(t)}});ke.addSection(Bd.root);function Qh(i){!V.scene||V.scene.id===i||!V.state.scenes[i]||Qe(["scene.go",i])}const ni=new AS,ql=[new Ld({ambience:ni,label:"Your ambience volume"})];$l.root.append(ql[0].root);function zd(i){Gd(i),Wt&&Qt&&Wt.link.send({t:"fx",k:i})}function Gd(i){var t;lt.fx.play(i),i==="lightning"&&ni.thunder((t=V.scene)==null?void 0:t.fx)}const jS=400;let tu=0;function Hd(i,t,e){const n=performance.now();n-tu<jS||(tu=n,i=Be(i),t=Be(t),lt.fx.ping(i,t,Vd(pe)),Wt&&(Qt?Wt.link.send({t:"fx",k:"ping",x:i,y:t,by:pe,pull:!!e}):re==null||re.request([["fx.ping",i,t]])))}function eu(i){if(i.k==="ping"){if(i.by===pe||!Number.isFinite(i.x)||!Number.isFinite(i.y))return;lt.fx.ping(i.x,i.y,Vd(i.by)),i.pull&&lt.lookAt(i.x,i.y);return}["lightning","shake","damage"].includes(i.k)&&Gd(i.k)}function Vd(i){var t;return wi(((t=V.state.roster[i])==null?void 0:t.color)??It.tokens.defaultBorder)}const KS=["map","grid","tokens","fx","light","scenes","undo","redo","fit","save"],ZS={KeyM:"map",KeyG:"grid",KeyT:"tokens",KeyX:"fx",KeyL:"light",KeyN:"scenes"},ji=new SM({onCommand:Qe,onSizeCommitted:i=>rb(i),onDelete:()=>qd()});document.getElementById("stage").append(ke.root);q_().then(i=>ke.setLibrary(i));const lt=new uM({canvas:document.getElementById("canvas"),overlayEl:document.getElementById("overlay"),library:$e,handlers:{onSettings:i=>Yl(i),onMark:(i,t)=>Qe(["tok.patch",i,{mark:t}]),canEdit:i=>Vs(i)}}),Jn=M("div",{id:"token-pop",hidden:!0,role:"dialog","aria-label":"Token settings"},M("button",{type:"button",class:"pop-close",text:"×",title:"Close (Esc)","aria-label":"Close",onclick:()=>Ws()}),ji.root);document.getElementById("stage").append(Jn);let xn=null;function Yl(i){oe.has(i)||Bn(i),xn=i,Jn.hidden=!1,Wd()}function Ws(){xn=null,Jn.hidden=!0}function Wd(){var u;if(!xn)return;const i=lt.views.get(xn),t=(u=V.scene)==null?void 0:u.tokens[xn];if(!i||!t||!oe.has(xn))return Ws();const e=lt.rect,n=lt.cam.toNdc(i.root.position.x,i.root.position.y),s=(n.x*.5+.5)*e.width,r=(1-(n.y*.5+.5))*e.height,o=Math.max(.05,t.size)/2*lt.cam.pxPerUnit(e.height),a=Jn.offsetWidth,l=Jn.offsetHeight,c=Math.max(8,lt.leftInset());let h=s+o+18;h+a>e.width-8&&(h=s-o-18-a),h=Math.max(c,Math.min(e.width-a-8,h));const d=Math.max(8,Math.min(e.height-l-8,r-48));Jn.style.transform=`translate(${Math.round(h)}px, ${Math.round(d)}px)`}document.addEventListener("pointerdown",i=>{var t,e;xn&&!Jn.contains(i.target)&&!((e=(t=i.target).closest)!=null&&e.call(t,".token-gear"))&&Ws()},!0);Jn.addEventListener("keydown",i=>{i.key==="Escape"&&(Ws(),i.stopPropagation())});lt.renderer.domElement.addEventListener("dblclick",i=>{if(Ei.drawing||Jr())return;const t=lt.unitsAt(i.clientX,i.clientY),e=vi(V.state,t.x,t.y,{isGm:!0});e&&lt.views.has(e.id)&&Vs(e)&&Yl(e.id)});lt.leftInset=()=>{const i=ee.root;return i.hidden||getComputedStyle(i).position!=="fixed"?0:Math.max(0,i.getBoundingClientRect().right+10-lt.rect.left)};const Ei=new iS({stage:lt,getScene:()=>V.scene,onCommand:Qe,getPicture:async i=>{const t=await $e.blob(i);return t?Y_(t):null}});ke.addSection(Ei.root);lt.fit(V.state);const Jr=()=>!Qt&&lt.fx.locked;function Xs(i){var t,e;return Qt||!i||!((e=(t=V.scene)==null?void 0:t.blocks)!=null&&e.length)?null:Kx(V.scene,i.x,i.y)}lt.routeFor=(i,t,e,n,s)=>{var a;const r=(a=V.scene)==null?void 0:a.tokens[i],o=r&&Xs({...r,x:t,y:e});return o?Zx(o,t,e,n,s):null};function JS(i,t,e,n,s){var o;const r=Xs((o=V.scene)==null?void 0:o.tokens[i]);return r?Yr(r,t,e,n,s):null}function QS(i,t){var a;if(!i)return i;const e=(a=V.scene)==null?void 0:a.tokens[i[1]],n=Xs(e);if(!n||Is(n,t.x,t.y,i[2],i[3]))return i;const s=Math.hypot(e.x-t.x,e.y-t.y);if(s>.01){const l=Math.min(1,.5/s),c=jr(V.state,i[1],t.x+(e.x-t.x)*l,t.y+(e.y-t.y)*l);if(c&&Math.hypot(c[2]-t.x,c[3]-t.y)<=.6&&Is(n,t.x,t.y,c[2],c[3]))return c}const[r,o]=Yr(n,t.x,t.y,i[2],i[3]);return["tok.move",i[1],Be(r),Be(o)]}function tb(i,t){const e=t&&Xs(i);if(!e||Is(e,i.x,i.y,t[2],t[3]))return t;const[n,s]=Yr(e,i.x,i.y,t[2],t[3]);return Math.hypot(n-i.x,s-i.y)>.1?["tok.move",t[1],Be(n),Be(s)]:null}const eb=new vM(lt,{getState:()=>V.state,locked:Jr,canGrab:i=>Vs(i),onSelect:i=>Bn(i),isSelected:i=>oe.has(i),hasSelection:()=>oe.size>0,drawing:()=>Qt&&Ei.drawing?Ei:null,groupOf:i=>oe.has(i)?[...oe]:[i],onToggle:i=>ob(i),onDropGroup:i=>$d(i.map(t=>QS(jr(V.state,t.id,t.x,t.y),t))),walk:(i,t,e,n,s)=>JS(i,t,e,n,s),collides:i=>!!Xs(i),onContext:i=>Bn((i==null?void 0:i.id)??null),onPing:(i,t,e)=>Hd(i,t,e),onTurn:(i,t)=>{Qt||ib(i,t),Qe(["tok.patch",i,{facing:t}])}}),zr=new Map,Xd=2500;function nb(i,t,e){zr.set(i,{x:t,y:e,until:performance.now()+Xd}),lt.ghosts.set(i,{x:t,y:e})}const Gr=new Map;function ib(i,t){Gr.set(i,{facing:t,until:performance.now()+Xd}),lt.turns.set(i,t)}function sb(i){var t,e;for(const[n,s]of zr){const r=(t=V.scene)==null?void 0:t.tokens[n];(!r||r.x===s.x&&r.y===s.y||i>s.until)&&(zr.delete(n),lt.ghosts.delete(n))}for(const[n,s]of Gr){const r=(e=V.scene)==null?void 0:e.tokens[n];(!r||typeof r.facing=="number"&&Math.abs(r.facing-s.facing)<.001||i>s.until)&&(Gr.delete(n),lt.turns.delete(n))}}function rb(i){var e;const t=(e=V.scene)==null?void 0:e.tokens[i];t&&Qe(jr(V.state,i,t.x,t.y))}function Bn(i){Oe=i,oe=new Set(i?[i]:[]),jl()}function ob(i){oe.has(i)?(oe.delete(i),Oe===i&&(Oe=[...oe].pop()??null)):(oe.add(i),Oe=i),jl()}function jl(){lt.selectedIds=oe,lt.selectedId=oe.size===1?Oe:null}function ab(){var e;const i=((e=V.scene)==null?void 0:e.tokens)||{};let t=!1;for(const n of oe)i[n]||(oe.delete(n),t=!0);Oe&&!i[Oe]&&(Oe=[...oe].pop()??null,t=!0),t&&jl()}function $d(i){const t=i.filter(Boolean);if(t.length){if(Qt){t.length===1?V.dispatch(t[0]):V.batch(t);return}for(const[,e,n,s]of t)nb(e,n,s);re==null||re.request(t)}}function ul(){var t;const i=((t=V.scene)==null?void 0:t.tokens)||{};return[...oe].map(e=>i[e]).filter(e=>e&&Vs(e))}function qd(){const i=ul().map(t=>["tok.del",t.id]);i.length&&(Qt?i.length===1?V.dispatch(i[0]):V.batch(i):re==null||re.request(i),Bn(null))}const Qr=new KM({onRoll:i=>to(i)}),Hr=new ZM({onSay:i=>lb(i),onRoll:i=>to(i),onError:i=>_e(i,"error")}),Kl=new cS({onRoll:i=>to(i)});document.getElementById("stage").append(M("div",{id:"dice"},Hr.root,M("div",{class:"dice-row"},Qr.root,Kl.root),Hr.inputRow));Qr.fit();function lb(i){if(!Qt)return re==null?void 0:re.request([["chat.say",i]]);V.say(pe,i,Date.now())}function to(i){var e;let t;try{t=Il(i)}catch(n){return _e(n.message,"error")}if(t.note&&Kl.add(t.note,qu(t.terms)),!Qt)return re==null?void 0:re.request([["dice.roll",i]]);try{if(Qr.hidden){const n=V.rollSecret(i,pe,Date.now());lt.dice.play(n,((e=V.state.roster[pe])==null?void 0:e.color)??It.tokens.defaultBorder),Hr.refresh(V.feedWithSecrets(),V.state.roster),sf();return}V.rollDice(i,pe)}catch(n){_e(n.message,"error")}}const dl=new Set;function Yd(){for(const i of V.rolls())dl.add(i.id)}function cb(){var e;const i=V.rolls().filter(n=>!dl.has(n.id));if(!i.length)return;for(const n of i)dl.add(n.id);const t=i[i.length-1];lt.dice.play(t,((e=V.state.roster[t.by])==null?void 0:e.color)??It.tokens.defaultBorder)}async function jd(i){xe.hidden=!1,xe.textContent=`Reading ${i.name}…`;try{const t=await V_(i);await $e.put(t);const e=V.state.activeScene,n=[["asset.add",hd(t)],["scene.map",e,t.hash,t.w,t.h]],s=xd.gridGuessFor(t.name,t.w,t.h),r=t.detected,o=r&&r.confidence>=Gs.minConfidence;if(s?n.push(["scene.grid",e,{unitPx:s.unitPx,ox:s.ox,oy:s.oy}]):o&&n.push(["scene.grid",e,{unitPx:Be(r.unitPx),ox:Be(r.ox),oy:Be(r.oy)}]),V.batch(n),lt.fit(V.state),s){const a=r&&Math.abs(r.unitPx-s.unitPx)/s.unitPx<.03;_e(`${t.name} — grid from the filename: ${s.cols}×${s.rows} at ${s.unitPx}px.`+(a?" Measuring the image agrees.":""))}else o?_e(`${t.name} — grid measured from the image: ${r.unitPx.toFixed(1)}px (${r.agreed} of ${r.readings} readings agreed). Nudge the offset if it sits wrong.`):(_e(`${t.name} loaded. No grid found in the image — set pixels per cell by hand, or press Detect.`),ee.show("grid"))}catch(t){_e(t.message||"Could not load that map.","error")}finally{xe.hidden=!0}}async function hb(){const i=V.scene;if(!(i!=null&&i.map))return _e("Load a map first.");xe.hidden=!1,xe.textContent="Measuring the grid…";try{const t=await $e.bitmap(i.map);if(!t)throw new Error("That map is not loaded.");const e=await Vl(t,i.artW);if(!e||e.confidence<Gs.minConfidence)return _e(e?`Nothing convincing — the best fit was ${e.unitPx.toFixed(1)}px, and only ${e.agreed} of ${e.readings} readings agreed. Left alone.`:"Could not measure that image.");V.dispatch(["scene.grid",i.id,{unitPx:Be(e.unitPx),ox:Be(e.ox),oy:Be(e.oy)}]),_e(`Measured ${e.unitPx.toFixed(1)}px per cell — ${e.agreed} of ${e.readings} readings agreed.`)}catch(t){_e(t.message||"Could not measure that image.","error")}finally{xe.hidden=!0}}async function ub(i){xe.hidden=!1,xe.textContent=`Fetching ${i.name}…`;try{await jd(await $_(i.url,i.name))}catch(t){_e(t.message||`Could not load ${i.name}.`,"error")}finally{xe.hidden=!0}}async function Kd(i){xe.hidden=!1;let t=0;for(const e of i){xe.textContent=`Reading ${e.name}… (${++t}/${i.length})`;try{const n=await ld(e),s=e.name.replace(/\.[a-z0-9]+$/i,"").slice(0,48),r=[["asset.add",hd(n)],Qd({asset:n.hash,name:s,border:Qt?It.tokens.defaultBorder:af()},t-1)];Qt?(await $e.put(n),V.batch(r)):(xe.textContent=`Sending ${e.name} to the GM…`,await re.upload(n,r))}catch(n){_e(n.message||`Could not load ${e.name}.`,"error")}}xe.hidden=!0}function Zd(i){Qt||Jd();const t=Qe(Qd(i,0));t&&Bn(t[1])}let $i=null;function Jd(){var t;const i=Object.values(((t=V.scene)==null?void 0:t.tokens)||{}).filter(e=>e.owner===pe);$i={known:new Set(i.map(e=>e.id)),until:performance.now()+5e3}}function db(i){var e;if(!$i)return;const t=Object.values(((e=V.scene)==null?void 0:e.tokens)||{}).filter(n=>n.owner===pe&&!$i.known.has(n.id));t.length?(Bn(t[t.length-1].id),$i=null):i>$i.until&&($i=null)}function Qd(i,t){var h;const e=lt.cam.camera.position,n=(h=V.scene)==null?void 0:h.grid,s=i.size??It.tokens.defaultSize,r=Math.max(1,s),o=d=>Ul(d,-e.y,n,s).map(Be);let a=e.x+t*r,[l,c]=o(a);for(let d=0;d<24&&vi(V.state,l,c);d++)a+=r,[l,c]=o(a);return["tok.add",{border:It.tokens.defaultBorder,owner:Qt?"":pe,...i,size:s,x:l,y:c}]}let Wt=null,we=null,ve=null,Ze=null,be=null,Cs=null,Ps=null;function fb(){Cs==null||Cs.render(),Ps==null||Ps.render(),we==null||we.setMusic(!!(be!=null&&be.sharing))}function tf(){if(!ve)return;Ze.render();const i=ve.status();we==null||we.setVoice(i),lt.speaking=new Set([...i].filter(([t,e])=>{var n;return e.speaking&&((n=V.state.roster[t])==null?void 0:n.role)==="player"}).map(([t])=>t)),ni.setDucked(ve.on&&[...i].some(([t,e])=>t!==pe&&e.speaking))}function nu(i){we.render(i),ve&&(ve.announce(),ve.recall(),tf())}let re=null,Qt=!0;new URLSearchParams(location.search).has("offline")||new FM({onEnter:(i,t)=>mb(i,t),onResume:async i=>{const t=await ed(i);if(!t)throw new Error("That table is no longer saved here.");return await Jl(t),t},onOpenFile:async i=>rf(i)});addEventListener("pagehide",()=>{be==null||be.leave(),ve==null||ve.leave(),re==null||re.leave(),Wt==null||Wt.leave()});function pb(i){var s;const t=Wt.versions.get(i),e=Qa(t,In);if(!e)return;const n=((s=Wt.members.get(i))==null?void 0:s.name)||"A player";_e(e<0?`${n} is on an older version (${t||"from before versions"}). Ask them to refresh.`:`${n} is on a newer version (${t}). Refresh when you can; your table is saved.`,"warn")}function mb(i,t=null){Wt=i,Qt=Wt.isGm;const e=pe;if(pe=Wt.selfId,V.dispatch(["peer.join",kr(pe,Wt.name,{role:Qt?Je:ti})],{record:!1}),Qt){for(const c of GS(V.state,pe))V.dispatch(c,{record:!1});eo=Wt.code;const l=new URL(location.href);l.searchParams.delete("join"),l.searchParams.set("host",Wt.code),history.replaceState(history.state,"",l)}V.state.roster[e]&&e!==pe&&V.dispatch(["peer.part",e],{record:!1}),Kl.useTable(Wt.code),we=new $M(Wt,{onInvite:()=>{xi="room",ee.show("invite")},onVoice:()=>{xi="room",ee.toggle("voice")},onPerson:l=>{if(ee.open==="person"&&(Ze==null?void 0:Ze.personId)===l){ee.show(null);return}Ze==null||Ze.showPerson(l),xi="room",ee.show("person")},onMusic:()=>{xi="room",ee.toggle("music")},onSay:(l,c)=>_e(l,c),onTokens:()=>{xi="room",ee.toggle("tokens")},onBeforeLeave:()=>io()}),Br.prepend(we.root),ke.addSection(we.invite),ve=new pS({lobby:Wt,onChange:()=>tf()}),Ze=new gS({voice:ve,roster:()=>Wt.roster()}),ke.addSection(Ze.root),ke.addSection(Ze.person),be=new Pd({lobby:Wt,voice:ve,onChange:()=>fb()}),Ps=new bS({music:be}),we.addControl(Ps.root);const n=new Ld({ambience:ni});if(ql.push(n),we.addSound(n),Qt&&(Cs=new SS({music:be}),ke.addSection(Cs.root),we.showMusic()),we.render(Wt.roster()),Qt)return re=new qS({lobby:Wt,table:V,library:$e,onSeat:l=>{vb(l),pb(l)},onFx:l=>eu(l),onRoster:l=>{nu(l),iu(l)}}),iu(Wt.roster()),lt.mapReady();Qr.setGm(!1);const s=new URL(location.href);s.searchParams.delete("host"),s.searchParams.set("join",Wt.code),history.replaceState(history.state,"",s);for(const l of KS)ee.setVisible(l,!1);ee.root.hidden=!0,document.documentElement.style.setProperty("--rail-clear","12px"),ee.show(null),Bn(null),ke.root.querySelector('section[data-tool="tokens"]').remove(),ke.addSection(new qM({onImportToken:l=>{Jd(),Kd(l)},onAddBlank:()=>Zd({})}).root),ji.setPlayer({onColor:l=>re.request([["peer.color",l]])}),xe.hidden=!1,xe.textContent="Fetching the table…";let r;const o=new Promise(l=>{r=l});re=new YS({lobby:Wt,table:V,library:$e,onRoster:l=>nu(l),onGmLeft:()=>{we.gmLeft(),_e("The GM has left the room.","error")},onFx:l=>eu(l),onHydrated:()=>{Yd(),xe.textContent==="Fetching the table…"&&(xe.hidden=!0),r()},onProgress:(l,c)=>{xe.hidden=l===null,l!==null&&(xe.textContent=`Receiving ${c}… ${Math.round(l*100)}%`),t==null||t.detail(l===null?"":`${c}: ${Math.round(l*100)}%`)}});const a=o.then(()=>lt.mapReady(3e4));return Promise.race([a,new Promise(l=>setTimeout(l,4e4))])}function iu(i){const t=new Set(i.map(e=>e.peerId));for(const[e,n]of Object.entries(V.state.roster))!t.has(e)&&!n.away&&V.dispatch(["peer.join",{...n,away:!0}],{record:!1});for(const e of i){const n=V.state.roster[e.peerId];(!n||n.away||n.name!==e.name||n.color!==e.color||n.role!==e.role)&&V.dispatch(["peer.join",{...e,tokens:(n==null?void 0:n.tokens)??[]}],{record:!1})}}let Vr=null,eo=null,fl=0;function Zl(){const i=V.scene;return!!i&&(!!i.map||Object.keys(i.tokens).length>0||V.feed().length>0)}function ef(){return V.state.title||nf()}function nf(){var t;const i=(t=V.scene)!=null&&t.map?V.state.assets[V.scene.map]:null;if(i!=null&&i.name){const e=i.name.replace(/\.[a-z0-9]+$/i,"").replace(/\((?:\d+x\d+|free)\)/gi,"").replace(/[_\s]+/g," ").trim();if(e)return e.slice(0,80)}return`Table of ${new Date().toLocaleDateString([],{day:"numeric",month:"short"})}`}function no(){var i;return Vr||(Vr=`t_${Date.now().toString(36)}_${V.seed.toString(36)}`),{id:Vr,name:ef(),code:eo,savedAt:Date.now(),tokens:Object.keys(((i=V.scene)==null?void 0:i.tokens)||{}).length,state:V.snapshot(),seed:V.seed,rng:V.rng.getState(),said:V.said,secrets:V.secrets,secretRng:V.secretRng.getState()}}function sf(){!Qt||!Zl()||(clearTimeout(fl),fl=setTimeout(()=>nd(no()),700))}function io(){return clearTimeout(fl),Qt&&Zl()?nd(no()):Promise.resolve(!1)}async function Jl(i){V.load(i.state),Yd(),Number.isInteger(i.seed)&&(V.seed=i.seed),i.rng?V.rng.setState(i.rng):V.rng.seed(V.seed),V.said=i.said||0,V.restoreSecrets(i.secrets,i.secretRng),Vr=i.id,eo=i.code||null,await $e.restore($e.missing(V.state)),Bn(null),pl=null,lt.fit(V.state),await lt.mapReady()}async function rf(i){const{record:t,images:e,skipped:n}=await NS(await i.text());for(const s of e)await $e.putBytes(s.hash,s.blob);return t.id=null,await Jl(t),await io(),n&&_e(n===1?"One image in that file did not match its name and was left out.":`${n} images in that file did not match their names and were left out.`,"error"),t}async function gb(){if(!Zl())return _e("Nothing on the table to save yet.");const i=no(),t=await kd(i,$e),e=M("a",{href:URL.createObjectURL(t),download:`${i.name}.vtt`});document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),1e4),_e(`Saved ${i.name}.vtt — open it from the start screen to carry on anywhere.`)}function vb(i){const t=Wt==null?void 0:Wt.members.get(i),e=t&&zS(V.state,t.name,i);if(e){Wt.setColor(i,e.color);for(const n of Ud(V.state,e.peerId,i))V.dispatch(n,{record:!1});_e(`${t.name} is back, with their tokens.`)}}addEventListener("pagehide",()=>{io()});const su=.5,xb=new CM({panLeft:["KeyA"],panRight:["KeyD"],panUp:["KeyW"],panDown:["KeyS"]},(i,t)=>{var c,h;if(Jr())return!1;if(i==="KeyF")return lt.fit(V.state),!0;if((i==="Enter"||i==="NumpadEnter")&&oe.size===1){const d=(c=V.scene)==null?void 0:c.tokens[Oe];if(d&&Vs(d))return lt.overlay.beginMark(d),!0}if(i==="Escape"&&xn)return Ws(),!0;if(i==="Escape"&&ee.open)return ee.show(null),!0;if(i==="Escape"&&oe.size)return Bn(null),!0;const e=ZS[i];if(e&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&(Qt||e==="tokens")&&!((h=ee.buttons.get(e))!=null&&h.hidden))return ee.toggle(e),!0;if((t.ctrlKey||t.metaKey)&&i==="KeyZ")return Qt?(t.shiftKey?V.redo():V.undo(),!0):!1;if(!ul().length)return!1;if(i==="Delete"||i==="Backspace")return qd(),!0;const n=((i==="ArrowRight"?1:0)-(i==="ArrowLeft"?1:0))*su,s=((i==="ArrowDown"?1:0)-(i==="ArrowUp"?1:0))*su;if(!n&&!s)return!1;const r=ul(),o=r.map(d=>tb(d,["tok.move",d.id,Be(d.x+n),Be(d.y+s)])),a=r.find(d=>d.id===Oe)||r[0],l=o.find(d=>(d==null?void 0:d[1])===(a==null?void 0:a.id));return $d(o),a&&l&&_b(l[2],l[3],a.size),!0});function _b(i,t,e=1){const n=lt.rect,s=lt.cam.pxPerUnit(n.height),r=lt.cam.toNdc(i,-t),o=(r.x*.5+.5)*n.width,a=(1-(r.y*.5+.5))*n.height,l=Math.max(60,s*1.5)+e/2*s,c=lt.leftInset()+l,h=n.width-l,d=l,u=n.height-l,f=c>h?o-(c+h)/2:o<c?o-c:o>h?o-h:0,g=d>u?a-n.height/2:a<d?a-d:a>u?a-u:0;(f||g)&&lt.cam.panBy(f/s,-g/s)}const bs={x:0,y:0},ru=new df({hz:It.sim.hz});let ou=-1,pl=null,ia=!1,au=V.state.activeScene;function of(i){var n,s,r,o;requestAnimationFrame(of);const{steps:t,frameDt:e}=ru.advance(i);(zr.size||Gr.size)&&sb(i);for(let a=0;a<t;a++)V.step(ru.dt);if(xb.vector("panLeft","panRight","panUp","panDown",bs),Jr())eb.cancel();else if(bs.x||bs.y){const a=lt.cam.viewUnits*e;lt.cam.panBy(bs.x*a,-bs.y*a)}if(V.seq!==ou){ou=V.seq,V.state.activeScene!==au&&(au=V.state.activeScene,Ei.cancel(),lt.fit(V.state)),db(i),sf(),cb(),Hr.refresh(V.feedWithSecrets(),V.state.roster),ee.setEnabled("undo",V.undoStack.length>0),ee.setEnabled("redo",V.redoStack.length>0),ke.refresh(V.state),$l.refresh((n=V.scene)==null?void 0:n.fx),Bd.refresh(V.state),Ei.refresh(V.scene);for(const a of ql)a.render(((r=(s=V.scene)==null?void 0:s.fx)==null?void 0:r.weather)||null);ab(),ji.refresh(V.state,Oe,oe.size),ia=!0}else(ji.id!==Oe||ji.count!==oe.size)&&ji.refresh(V.state,Oe,oe.size);if(!Qt){const a=V.scene,l=a?`${a.id}:${a.map}:${a.artW}x${a.artH}`:"";l!==pl&&(pl=l,lt.fit(V.state))}lt.frame(V.state,e,{isGm:Qt,self:pe}),xn&&Wd(),ni.update((o=V.scene)==null?void 0:o.fx),ni.setCurtain(1-(lt.fx.out??0)),ia&&(ia=!1,$e.trimBitmaps(V.state))}requestAnimationFrame(of);window.__vtt={tokens:()=>{var i;return Object.values(((i=V.scene)==null?void 0:i.tokens)||{})},cam:()=>({x:lt.cam.camera.position.x,y:lt.cam.camera.position.y,viewUnits:lt.cam.viewUnits}),seq:()=>V.seq,dispatch:i=>Qe(i),moveTo:(i,t,e)=>jr(V.state,i,t,e),origins:()=>lt.originViews.size,zoomTo:(i,t,e)=>{lt.cam.viewUnits=e,lt.cam.apply(),lt.cam.camera.position.set(i,-t,10),lt.cam.clamp()},bounds:()=>{const i=V.scene;return i?[i.artW,i.artH,i.grid.unitPx]:null},selected:()=>Oe,selection:()=>[...oe],saveNow:()=>io(),tableRecord:()=>({id:Vr,code:eo,name:ef()}),resumeTable:async i=>Jl(await ed(i)),exportText:async()=>(await kd(no(),$e)).text(),importText:async i=>(await rf(new File([i],"table.vtt"))).name,rolls:()=>V.rolls(),feed:()=>V.feed(),darkAt:(i,t)=>{const e=lt.fx.toScreen(i,t),n=lt.fx.dark,s=n.width/lt.fx.rect.width;return n.getContext("2d").getImageData(Math.round(e.x*s),Math.round(e.y*s),1,1).data[3]/255},fx:()=>{var i;return{scene:((i=V.scene)==null?void 0:i.fx)??null,weather:lt.fx.weather,particles:lt.fx.parts.length,shade:lt.fx.darkShown,out:lt.fx.out,cover:lt.fx.cover.dataset.kind,pings:lt.fx.pings.length,flash:lt.fx.flash.classList.contains("fx-go")?lt.fx.flash.dataset.kind:null,shaking:document.getElementById("canvas").classList.contains("fx-shake")}},playFx:i=>zd(i),ambience:()=>ni.status(),ambienceEngine:()=>ni,ping:(i,t,e)=>Hd(i,t,e),music:()=>be?{sharing:be.sharing,source:be.source,playing:be.playing,hearing:!!be.audio,volume:be.volume,muted:be.muted,error:be.error}:null,shareTone:async()=>{const i=new AudioContext,t=i.createOscillator(),e=i.createMediaStreamDestination();t.connect(e),t.start();const n=navigator.mediaDevices.getDisplayMedia;navigator.mediaDevices.getDisplayMedia=async()=>e.stream;try{return await be.share()}finally{navigator.mediaDevices.getDisplayMedia=n}},voice:()=>ve?{lastChime:ve.lastChime??null,chimes:ve.chimes,on:ve.on,muted:ve.muted,live:ve.live,peers:[...ve.peers].map(([i,t])=>({id:i,on:t.on,muted:t.muted,playing:!!t.audio,speaking:t.speaking,volume:t.volume})),silenced:[...ve.silenced]}:null,diceShown:()=>lt.dice.current?{id:lt.dice.current.id,dice:lt.dice.current.dice.length,settled:lt.dice.current.settledAt!==null}:null,roll:i=>to(i),diceReadout:()=>lt.dice.readout(),openTool:i=>i==="all"?ke.show("all"):ee.show(i),room:()=>Wt?{code:Wt.code,role:Wt.role,self:pe,roster:Wt.roster()}:null,scenes:()=>({active:V.state.activeScene,order:[...V.state.sceneOrder],names:V.state.sceneOrder.map(i=>V.state.scenes[i].name)}),scene:()=>{const i=V.scene;return i?{map:i.map,artW:i.artW,grid:{...i.grid}}:null},blocks:()=>{var i;return JSON.parse(JSON.stringify(((i=V.scene)==null?void 0:i.blocks)||[]))},openSettings:i=>{const t=i||Oe;t&&Yl(t)},settingsOpen:()=>xn,speaking:i=>{lt.speaking=new Set(i)},speakGlow:i=>{var t;return((t=lt.views.get(i))==null?void 0:t.speak)??null},hasArt:i=>$e.has(i),mapShown:()=>!!lt.map.texture,roster:()=>Object.values(V.state.roster),hovered:()=>lt.hoveredId,drawn:i=>{var e;const t=(e=lt.views.get(i))==null?void 0:e.root.position;return t?[t.x,-t.y]:null},screenOf:(i,t)=>{const e=lt.cam.toNdc(i,-t);return[lt.rect.left+(e.x*.5+.5)*lt.rect.width,lt.rect.top+(1-(e.y*.5+.5))*lt.rect.height]}};function Be(i){return Math.round(i*100)/100}function af(){var i;return((i=Wt==null?void 0:Wt.roster().find(t=>t.peerId===pe))==null?void 0:i.color)??(Qt?el:It.tokens.defaultBorder)}export{Ti as Q,yb as r,Rh as s,Uy as t};
