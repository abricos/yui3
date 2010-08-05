YUI.add("scrollview-scrollbars",function(A){var J=A.ClassNameManager.getClassName,H,I=A.Transition.useNative,U="scrollbar",X="scrollview",W="verticalNode",K="horizontalNode",P="childCache",R="top",N="left",F="width",Q="height",M="scrollWidth",G="scrollHeight",V="_sbh",O="_sbv",E="translateX(",D="translateY(",T="scaleX(",S="scaleY(",C=")",L="px"+C;function B(){B.superclass.constructor.apply(this,arguments);}B.CLASS_NAMES={showing:J(X,U,"showing"),scrollbar:J(X,U),scrollbarV:J(X,U,"vert"),scrollbarH:J(X,U,"horiz"),scrollbarVB:J(X,U,"vert","basic"),scrollbarHB:J(X,U,"horiz","basic"),child:J(X,"child"),first:J(X,"first"),middle:J(X,"middle"),last:J(X,"last")};H=B.CLASS_NAMES;B.NAME="pluginScrollViewScrollbars";B.NS="scrollbars";B.SCROLLBAR_TEMPLATE=["<div>",'<span class="'+H.child+" "+H.first+'"></span>','<span class="'+H.child+" "+H.middle+'"></span>','<span class="'+H.child+" "+H.last+'"></span>',"</div>"].join("");B.ATTRS={verticalNode:{setter:"_setNode",value:A.Node.create(B.SCROLLBAR_TEMPLATE)},horizontalNode:{setter:"_setNode",value:A.Node.create(B.SCROLLBAR_TEMPLATE)}};A.namespace("Plugin").ScrollViewScrollbars=A.extend(B,A.Plugin.Base,{initializer:function(){this._host=this.get("host");this.afterHostMethod("_uiScrollY",this._update);this.afterHostMethod("_uiScrollX",this._update);this.afterHostMethod("_uiDimensionsChange",this._hostDimensionsChange);this.afterHostEvent("scrollEnd",this.flash);},_hostDimensionsChange:function(){var Y=this._host;this._renderBar(this.get(W),Y._scrollsVertical);this._renderBar(this.get(K),Y._scrollsHorizontal);this._update();A.later(500,this,"flash",true);},_renderBar:function(Z,b){var a=Z.inDoc(),c=this._host._bb,Y=Z.getData("isHoriz")?H.scrollbarHB:H.scrollbarVB;if(b&&!a){c.append(Z);Z.toggleClass(Y,this._basic);this._setChildCache(Z);}else{if(!b&&a){Z.remove();this._clearChildCache(Z);}}},_setChildCache:function(b){var e=b.get("children"),Z=e.item(0),d=e.item(1),a=e.item(2),Y=b.getData("isHoriz")?"offsetWidth":"offsetHeight";b.setData(P,{fc:Z,lc:a,mc:d,fcSize:Z&&Z.get(Y),lcSize:a&&a.get(Y)});},_clearChildCache:function(Y){Y.clearData(P);},_updateBar:function(Y,h,a,r){var f=this._host,b=this._basic,g=f._cb,m=0,i=1,Z=Y.getData(P),n=Z.lc,q=Z.mc,v=Z.fcSize,u=Z.lcSize,j,s,p,e,t,l,c,o,k,d;if(r){l=F;c=N;o=V;k=f.get(l);d=f._scrollWidth||g.get(M);e=E;t=T;}else{l=Q;c=R;o=O;k=f.get(l);d=f._scrollHeight||g.get(G);e=D;t=S;}m=Math.floor(k*(k/d));i=Math.floor((h/(d-k))*(k-m));if(m>k){m=1;}if(i>(k-m)){m=m-(i-(k-m));}else{if(i<0){m=i+m;i=0;}}p={duration:a};if(I){p.transform=e+i+L;}else{p[c]=i;}Y.transition(p);j=(m-(v+u));if(this[o]!==j){this[o]=j;if(j>0){p={duration:a};if(I){p.transform=t+j+C;}else{p[l]=j;}q.transition(p);if(!r||!b){p={duration:a};s=m-u;if(I){p.transform=e+s+L;}else{p[c]=s;}n.transition(p);}}}},_update:function(Z,c,d){var b=this.get(W),Y=this.get(K),a=this._host;c=(c||0)/1000;if(!this._showing){this.show();}if(a._scrollsVertical&&b){this._updateBar(b,Z,c,false);}if(a._scrollsHorizontal&&Y){this._updateBar(Y,Z,c,true);}},show:function(Y){this._show(true,Y);},hide:function(Y){this._show(false,Y);},_show:function(Y,a){var Z=this.get(W),b=this.get(K),c={duration:(a)?0.6:0,opacity:(Y)?1:0};this._showing=Y;if(this._flashTimer){this._flashTimer.cancel();}if(Z){Z.transition(c);}if(b){b.transition(c);}},flash:function(){var Y=false,Z=this._host;if(Z._scrollsVertical&&(Z._scrollHeight>Z.get(Q))){Y=true;}if(Z._scrollsHorizontal&&(Z._scrollWidth>Z.get(F))){Y=true;}if(Y){this.show(true);this._flashTimer=A.later(800,this,"hide",true);}},_setNode:function(Z,Y){var a=(Y==K);Z=A.one(Z);if(Z){Z.addClass(H.scrollbar);Z.addClass((a)?H.scrollbarH:H.scrollbarV);Z.setData("isHoriz",a);}return Z;},_basic:A.UA.ie&&A.UA.ie<=8});},"@VERSION@",{skinnable:true,requires:["plugin"]});