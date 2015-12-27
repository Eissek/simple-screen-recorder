// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20843 = [];
var len__17899__auto___20849 = arguments.length;
var i__17900__auto___20850 = (0);
while(true){
if((i__17900__auto___20850 < len__17899__auto___20849)){
args20843.push((arguments[i__17900__auto___20850]));

var G__20851 = (i__17900__auto___20850 + (1));
i__17900__auto___20850 = G__20851;
continue;
} else {
}
break;
}

var G__20845 = args20843.length;
switch (G__20845) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20843.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20846 = (function (f,blockable,meta20847){
this.f = f;
this.blockable = blockable;
this.meta20847 = meta20847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20848,meta20847__$1){
var self__ = this;
var _20848__$1 = this;
return (new cljs.core.async.t_cljs$core$async20846(self__.f,self__.blockable,meta20847__$1));
});

cljs.core.async.t_cljs$core$async20846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20848){
var self__ = this;
var _20848__$1 = this;
return self__.meta20847;
});

cljs.core.async.t_cljs$core$async20846.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20847","meta20847",-551815593,null)], null);
});

cljs.core.async.t_cljs$core$async20846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20846";

cljs.core.async.t_cljs$core$async20846.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async20846");
});

cljs.core.async.__GT_t_cljs$core$async20846 = (function cljs$core$async$__GT_t_cljs$core$async20846(f__$1,blockable__$1,meta20847){
return (new cljs.core.async.t_cljs$core$async20846(f__$1,blockable__$1,meta20847));
});

}

return (new cljs.core.async.t_cljs$core$async20846(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20855 = [];
var len__17899__auto___20858 = arguments.length;
var i__17900__auto___20859 = (0);
while(true){
if((i__17900__auto___20859 < len__17899__auto___20858)){
args20855.push((arguments[i__17900__auto___20859]));

var G__20860 = (i__17900__auto___20859 + (1));
i__17900__auto___20859 = G__20860;
continue;
} else {
}
break;
}

var G__20857 = args20855.length;
switch (G__20857) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20855.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20862 = [];
var len__17899__auto___20865 = arguments.length;
var i__17900__auto___20866 = (0);
while(true){
if((i__17900__auto___20866 < len__17899__auto___20865)){
args20862.push((arguments[i__17900__auto___20866]));

var G__20867 = (i__17900__auto___20866 + (1));
i__17900__auto___20866 = G__20867;
continue;
} else {
}
break;
}

var G__20864 = args20862.length;
switch (G__20864) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20862.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20869 = [];
var len__17899__auto___20872 = arguments.length;
var i__17900__auto___20873 = (0);
while(true){
if((i__17900__auto___20873 < len__17899__auto___20872)){
args20869.push((arguments[i__17900__auto___20873]));

var G__20874 = (i__17900__auto___20873 + (1));
i__17900__auto___20873 = G__20874;
continue;
} else {
}
break;
}

var G__20871 = args20869.length;
switch (G__20871) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20869.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20876 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20876);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20876,ret){
return (function (){
return fn1.call(null,val_20876);
});})(val_20876,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20877 = [];
var len__17899__auto___20880 = arguments.length;
var i__17900__auto___20881 = (0);
while(true){
if((i__17900__auto___20881 < len__17899__auto___20880)){
args20877.push((arguments[i__17900__auto___20881]));

var G__20882 = (i__17900__auto___20881 + (1));
i__17900__auto___20881 = G__20882;
continue;
} else {
}
break;
}

var G__20879 = args20877.length;
switch (G__20879) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20877.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17744__auto___20884 = n;
var x_20885 = (0);
while(true){
if((x_20885 < n__17744__auto___20884)){
(a[x_20885] = (0));

var G__20886 = (x_20885 + (1));
x_20885 = G__20886;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20887 = (i + (1));
i = G__20887;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20891 = (function (alt_flag,flag,meta20892){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20892 = meta20892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20893,meta20892__$1){
var self__ = this;
var _20893__$1 = this;
return (new cljs.core.async.t_cljs$core$async20891(self__.alt_flag,self__.flag,meta20892__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20893){
var self__ = this;
var _20893__$1 = this;
return self__.meta20892;
});})(flag))
;

cljs.core.async.t_cljs$core$async20891.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20891.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20892","meta20892",1277300920,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20891";

cljs.core.async.t_cljs$core$async20891.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async20891");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20891 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20891(alt_flag__$1,flag__$1,meta20892){
return (new cljs.core.async.t_cljs$core$async20891(alt_flag__$1,flag__$1,meta20892));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20891(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20897 = (function (alt_handler,flag,cb,meta20898){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20898 = meta20898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20899,meta20898__$1){
var self__ = this;
var _20899__$1 = this;
return (new cljs.core.async.t_cljs$core$async20897(self__.alt_handler,self__.flag,self__.cb,meta20898__$1));
});

cljs.core.async.t_cljs$core$async20897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20899){
var self__ = this;
var _20899__$1 = this;
return self__.meta20898;
});

cljs.core.async.t_cljs$core$async20897.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20898","meta20898",1751857669,null)], null);
});

cljs.core.async.t_cljs$core$async20897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20897";

cljs.core.async.t_cljs$core$async20897.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async20897");
});

cljs.core.async.__GT_t_cljs$core$async20897 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20897(alt_handler__$1,flag__$1,cb__$1,meta20898){
return (new cljs.core.async.t_cljs$core$async20897(alt_handler__$1,flag__$1,cb__$1,meta20898));
});

}

return (new cljs.core.async.t_cljs$core$async20897(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20900_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20900_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20901_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20901_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16841__auto__ = wport;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20902 = (i + (1));
i = G__20902;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16841__auto__ = ret;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16829__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16829__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16829__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17906__auto__ = [];
var len__17899__auto___20908 = arguments.length;
var i__17900__auto___20909 = (0);
while(true){
if((i__17900__auto___20909 < len__17899__auto___20908)){
args__17906__auto__.push((arguments[i__17900__auto___20909]));

var G__20910 = (i__17900__auto___20909 + (1));
i__17900__auto___20909 = G__20910;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((1) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17907__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20905){
var map__20906 = p__20905;
var map__20906__$1 = ((((!((map__20906 == null)))?((((map__20906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20906):map__20906);
var opts = map__20906__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20903){
var G__20904 = cljs.core.first.call(null,seq20903);
var seq20903__$1 = cljs.core.next.call(null,seq20903);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20904,seq20903__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20911 = [];
var len__17899__auto___20961 = arguments.length;
var i__17900__auto___20962 = (0);
while(true){
if((i__17900__auto___20962 < len__17899__auto___20961)){
args20911.push((arguments[i__17900__auto___20962]));

var G__20963 = (i__17900__auto___20962 + (1));
i__17900__auto___20962 = G__20963;
continue;
} else {
}
break;
}

var G__20913 = args20911.length;
switch (G__20913) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20911.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20798__auto___20965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___20965){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___20965){
return (function (state_20937){
var state_val_20938 = (state_20937[(1)]);
if((state_val_20938 === (7))){
var inst_20933 = (state_20937[(2)]);
var state_20937__$1 = state_20937;
var statearr_20939_20966 = state_20937__$1;
(statearr_20939_20966[(2)] = inst_20933);

(statearr_20939_20966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (1))){
var state_20937__$1 = state_20937;
var statearr_20940_20967 = state_20937__$1;
(statearr_20940_20967[(2)] = null);

(statearr_20940_20967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (4))){
var inst_20916 = (state_20937[(7)]);
var inst_20916__$1 = (state_20937[(2)]);
var inst_20917 = (inst_20916__$1 == null);
var state_20937__$1 = (function (){var statearr_20941 = state_20937;
(statearr_20941[(7)] = inst_20916__$1);

return statearr_20941;
})();
if(cljs.core.truth_(inst_20917)){
var statearr_20942_20968 = state_20937__$1;
(statearr_20942_20968[(1)] = (5));

} else {
var statearr_20943_20969 = state_20937__$1;
(statearr_20943_20969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (13))){
var state_20937__$1 = state_20937;
var statearr_20944_20970 = state_20937__$1;
(statearr_20944_20970[(2)] = null);

(statearr_20944_20970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (6))){
var inst_20916 = (state_20937[(7)]);
var state_20937__$1 = state_20937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20937__$1,(11),to,inst_20916);
} else {
if((state_val_20938 === (3))){
var inst_20935 = (state_20937[(2)]);
var state_20937__$1 = state_20937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20937__$1,inst_20935);
} else {
if((state_val_20938 === (12))){
var state_20937__$1 = state_20937;
var statearr_20945_20971 = state_20937__$1;
(statearr_20945_20971[(2)] = null);

(statearr_20945_20971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (2))){
var state_20937__$1 = state_20937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20937__$1,(4),from);
} else {
if((state_val_20938 === (11))){
var inst_20926 = (state_20937[(2)]);
var state_20937__$1 = state_20937;
if(cljs.core.truth_(inst_20926)){
var statearr_20946_20972 = state_20937__$1;
(statearr_20946_20972[(1)] = (12));

} else {
var statearr_20947_20973 = state_20937__$1;
(statearr_20947_20973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (9))){
var state_20937__$1 = state_20937;
var statearr_20948_20974 = state_20937__$1;
(statearr_20948_20974[(2)] = null);

(statearr_20948_20974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (5))){
var state_20937__$1 = state_20937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20949_20975 = state_20937__$1;
(statearr_20949_20975[(1)] = (8));

} else {
var statearr_20950_20976 = state_20937__$1;
(statearr_20950_20976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (14))){
var inst_20931 = (state_20937[(2)]);
var state_20937__$1 = state_20937;
var statearr_20951_20977 = state_20937__$1;
(statearr_20951_20977[(2)] = inst_20931);

(statearr_20951_20977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (10))){
var inst_20923 = (state_20937[(2)]);
var state_20937__$1 = state_20937;
var statearr_20952_20978 = state_20937__$1;
(statearr_20952_20978[(2)] = inst_20923);

(statearr_20952_20978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (8))){
var inst_20920 = cljs.core.async.close_BANG_.call(null,to);
var state_20937__$1 = state_20937;
var statearr_20953_20979 = state_20937__$1;
(statearr_20953_20979[(2)] = inst_20920);

(statearr_20953_20979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___20965))
;
return ((function (switch__20686__auto__,c__20798__auto___20965){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_20957 = [null,null,null,null,null,null,null,null];
(statearr_20957[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_20957[(1)] = (1));

return statearr_20957;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_20937){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_20937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e20958){if((e20958 instanceof Object)){
var ex__20690__auto__ = e20958;
var statearr_20959_20980 = state_20937;
(statearr_20959_20980[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20981 = state_20937;
state_20937 = G__20981;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_20937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_20937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___20965))
})();
var state__20800__auto__ = (function (){var statearr_20960 = f__20799__auto__.call(null);
(statearr_20960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___20965);

return statearr_20960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___20965))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21165){
var vec__21166 = p__21165;
var v = cljs.core.nth.call(null,vec__21166,(0),null);
var p = cljs.core.nth.call(null,vec__21166,(1),null);
var job = vec__21166;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20798__auto___21348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___21348,res,vec__21166,v,p,job,jobs,results){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___21348,res,vec__21166,v,p,job,jobs,results){
return (function (state_21171){
var state_val_21172 = (state_21171[(1)]);
if((state_val_21172 === (1))){
var state_21171__$1 = state_21171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21171__$1,(2),res,v);
} else {
if((state_val_21172 === (2))){
var inst_21168 = (state_21171[(2)]);
var inst_21169 = cljs.core.async.close_BANG_.call(null,res);
var state_21171__$1 = (function (){var statearr_21173 = state_21171;
(statearr_21173[(7)] = inst_21168);

return statearr_21173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21171__$1,inst_21169);
} else {
return null;
}
}
});})(c__20798__auto___21348,res,vec__21166,v,p,job,jobs,results))
;
return ((function (switch__20686__auto__,c__20798__auto___21348,res,vec__21166,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0 = (function (){
var statearr_21177 = [null,null,null,null,null,null,null,null];
(statearr_21177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__);

(statearr_21177[(1)] = (1));

return statearr_21177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1 = (function (state_21171){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_21171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e21178){if((e21178 instanceof Object)){
var ex__20690__auto__ = e21178;
var statearr_21179_21349 = state_21171;
(statearr_21179_21349[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21350 = state_21171;
state_21171 = G__21350;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = function(state_21171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1.call(this,state_21171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___21348,res,vec__21166,v,p,job,jobs,results))
})();
var state__20800__auto__ = (function (){var statearr_21180 = f__20799__auto__.call(null);
(statearr_21180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___21348);

return statearr_21180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___21348,res,vec__21166,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21181){
var vec__21182 = p__21181;
var v = cljs.core.nth.call(null,vec__21182,(0),null);
var p = cljs.core.nth.call(null,vec__21182,(1),null);
var job = vec__21182;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17744__auto___21351 = n;
var __21352 = (0);
while(true){
if((__21352 < n__17744__auto___21351)){
var G__21183_21353 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21183_21353) {
case "compute":
var c__20798__auto___21355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21352,c__20798__auto___21355,G__21183_21353,n__17744__auto___21351,jobs,results,process,async){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (__21352,c__20798__auto___21355,G__21183_21353,n__17744__auto___21351,jobs,results,process,async){
return (function (state_21196){
var state_val_21197 = (state_21196[(1)]);
if((state_val_21197 === (1))){
var state_21196__$1 = state_21196;
var statearr_21198_21356 = state_21196__$1;
(statearr_21198_21356[(2)] = null);

(statearr_21198_21356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (2))){
var state_21196__$1 = state_21196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21196__$1,(4),jobs);
} else {
if((state_val_21197 === (3))){
var inst_21194 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21196__$1,inst_21194);
} else {
if((state_val_21197 === (4))){
var inst_21186 = (state_21196[(2)]);
var inst_21187 = process.call(null,inst_21186);
var state_21196__$1 = state_21196;
if(cljs.core.truth_(inst_21187)){
var statearr_21199_21357 = state_21196__$1;
(statearr_21199_21357[(1)] = (5));

} else {
var statearr_21200_21358 = state_21196__$1;
(statearr_21200_21358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (5))){
var state_21196__$1 = state_21196;
var statearr_21201_21359 = state_21196__$1;
(statearr_21201_21359[(2)] = null);

(statearr_21201_21359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (6))){
var state_21196__$1 = state_21196;
var statearr_21202_21360 = state_21196__$1;
(statearr_21202_21360[(2)] = null);

(statearr_21202_21360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (7))){
var inst_21192 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21203_21361 = state_21196__$1;
(statearr_21203_21361[(2)] = inst_21192);

(statearr_21203_21361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21352,c__20798__auto___21355,G__21183_21353,n__17744__auto___21351,jobs,results,process,async))
;
return ((function (__21352,switch__20686__auto__,c__20798__auto___21355,G__21183_21353,n__17744__auto___21351,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0 = (function (){
var statearr_21207 = [null,null,null,null,null,null,null];
(statearr_21207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__);

(statearr_21207[(1)] = (1));

return statearr_21207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1 = (function (state_21196){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_21196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e21208){if((e21208 instanceof Object)){
var ex__20690__auto__ = e21208;
var statearr_21209_21362 = state_21196;
(statearr_21209_21362[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21363 = state_21196;
state_21196 = G__21363;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = function(state_21196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1.call(this,state_21196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__;
})()
;})(__21352,switch__20686__auto__,c__20798__auto___21355,G__21183_21353,n__17744__auto___21351,jobs,results,process,async))
})();
var state__20800__auto__ = (function (){var statearr_21210 = f__20799__auto__.call(null);
(statearr_21210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___21355);

return statearr_21210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(__21352,c__20798__auto___21355,G__21183_21353,n__17744__auto___21351,jobs,results,process,async))
);


break;
case "async":
var c__20798__auto___21364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21352,c__20798__auto___21364,G__21183_21353,n__17744__auto___21351,jobs,results,process,async){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (__21352,c__20798__auto___21364,G__21183_21353,n__17744__auto___21351,jobs,results,process,async){
return (function (state_21223){
var state_val_21224 = (state_21223[(1)]);
if((state_val_21224 === (1))){
var state_21223__$1 = state_21223;
var statearr_21225_21365 = state_21223__$1;
(statearr_21225_21365[(2)] = null);

(statearr_21225_21365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21224 === (2))){
var state_21223__$1 = state_21223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21223__$1,(4),jobs);
} else {
if((state_val_21224 === (3))){
var inst_21221 = (state_21223[(2)]);
var state_21223__$1 = state_21223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21223__$1,inst_21221);
} else {
if((state_val_21224 === (4))){
var inst_21213 = (state_21223[(2)]);
var inst_21214 = async.call(null,inst_21213);
var state_21223__$1 = state_21223;
if(cljs.core.truth_(inst_21214)){
var statearr_21226_21366 = state_21223__$1;
(statearr_21226_21366[(1)] = (5));

} else {
var statearr_21227_21367 = state_21223__$1;
(statearr_21227_21367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21224 === (5))){
var state_21223__$1 = state_21223;
var statearr_21228_21368 = state_21223__$1;
(statearr_21228_21368[(2)] = null);

(statearr_21228_21368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21224 === (6))){
var state_21223__$1 = state_21223;
var statearr_21229_21369 = state_21223__$1;
(statearr_21229_21369[(2)] = null);

(statearr_21229_21369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21224 === (7))){
var inst_21219 = (state_21223[(2)]);
var state_21223__$1 = state_21223;
var statearr_21230_21370 = state_21223__$1;
(statearr_21230_21370[(2)] = inst_21219);

(statearr_21230_21370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21352,c__20798__auto___21364,G__21183_21353,n__17744__auto___21351,jobs,results,process,async))
;
return ((function (__21352,switch__20686__auto__,c__20798__auto___21364,G__21183_21353,n__17744__auto___21351,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0 = (function (){
var statearr_21234 = [null,null,null,null,null,null,null];
(statearr_21234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__);

(statearr_21234[(1)] = (1));

return statearr_21234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1 = (function (state_21223){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_21223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e21235){if((e21235 instanceof Object)){
var ex__20690__auto__ = e21235;
var statearr_21236_21371 = state_21223;
(statearr_21236_21371[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21372 = state_21223;
state_21223 = G__21372;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = function(state_21223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1.call(this,state_21223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__;
})()
;})(__21352,switch__20686__auto__,c__20798__auto___21364,G__21183_21353,n__17744__auto___21351,jobs,results,process,async))
})();
var state__20800__auto__ = (function (){var statearr_21237 = f__20799__auto__.call(null);
(statearr_21237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___21364);

return statearr_21237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(__21352,c__20798__auto___21364,G__21183_21353,n__17744__auto___21351,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21373 = (__21352 + (1));
__21352 = G__21373;
continue;
} else {
}
break;
}

var c__20798__auto___21374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___21374,jobs,results,process,async){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___21374,jobs,results,process,async){
return (function (state_21259){
var state_val_21260 = (state_21259[(1)]);
if((state_val_21260 === (1))){
var state_21259__$1 = state_21259;
var statearr_21261_21375 = state_21259__$1;
(statearr_21261_21375[(2)] = null);

(statearr_21261_21375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (2))){
var state_21259__$1 = state_21259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21259__$1,(4),from);
} else {
if((state_val_21260 === (3))){
var inst_21257 = (state_21259[(2)]);
var state_21259__$1 = state_21259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21259__$1,inst_21257);
} else {
if((state_val_21260 === (4))){
var inst_21240 = (state_21259[(7)]);
var inst_21240__$1 = (state_21259[(2)]);
var inst_21241 = (inst_21240__$1 == null);
var state_21259__$1 = (function (){var statearr_21262 = state_21259;
(statearr_21262[(7)] = inst_21240__$1);

return statearr_21262;
})();
if(cljs.core.truth_(inst_21241)){
var statearr_21263_21376 = state_21259__$1;
(statearr_21263_21376[(1)] = (5));

} else {
var statearr_21264_21377 = state_21259__$1;
(statearr_21264_21377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (5))){
var inst_21243 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21259__$1 = state_21259;
var statearr_21265_21378 = state_21259__$1;
(statearr_21265_21378[(2)] = inst_21243);

(statearr_21265_21378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (6))){
var inst_21245 = (state_21259[(8)]);
var inst_21240 = (state_21259[(7)]);
var inst_21245__$1 = cljs.core.async.chan.call(null,(1));
var inst_21246 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21247 = [inst_21240,inst_21245__$1];
var inst_21248 = (new cljs.core.PersistentVector(null,2,(5),inst_21246,inst_21247,null));
var state_21259__$1 = (function (){var statearr_21266 = state_21259;
(statearr_21266[(8)] = inst_21245__$1);

return statearr_21266;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21259__$1,(8),jobs,inst_21248);
} else {
if((state_val_21260 === (7))){
var inst_21255 = (state_21259[(2)]);
var state_21259__$1 = state_21259;
var statearr_21267_21379 = state_21259__$1;
(statearr_21267_21379[(2)] = inst_21255);

(statearr_21267_21379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (8))){
var inst_21245 = (state_21259[(8)]);
var inst_21250 = (state_21259[(2)]);
var state_21259__$1 = (function (){var statearr_21268 = state_21259;
(statearr_21268[(9)] = inst_21250);

return statearr_21268;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21259__$1,(9),results,inst_21245);
} else {
if((state_val_21260 === (9))){
var inst_21252 = (state_21259[(2)]);
var state_21259__$1 = (function (){var statearr_21269 = state_21259;
(statearr_21269[(10)] = inst_21252);

return statearr_21269;
})();
var statearr_21270_21380 = state_21259__$1;
(statearr_21270_21380[(2)] = null);

(statearr_21270_21380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___21374,jobs,results,process,async))
;
return ((function (switch__20686__auto__,c__20798__auto___21374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0 = (function (){
var statearr_21274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__);

(statearr_21274[(1)] = (1));

return statearr_21274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1 = (function (state_21259){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_21259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e21275){if((e21275 instanceof Object)){
var ex__20690__auto__ = e21275;
var statearr_21276_21381 = state_21259;
(statearr_21276_21381[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21382 = state_21259;
state_21259 = G__21382;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = function(state_21259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1.call(this,state_21259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___21374,jobs,results,process,async))
})();
var state__20800__auto__ = (function (){var statearr_21277 = f__20799__auto__.call(null);
(statearr_21277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___21374);

return statearr_21277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___21374,jobs,results,process,async))
);


var c__20798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto__,jobs,results,process,async){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto__,jobs,results,process,async){
return (function (state_21315){
var state_val_21316 = (state_21315[(1)]);
if((state_val_21316 === (7))){
var inst_21311 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
var statearr_21317_21383 = state_21315__$1;
(statearr_21317_21383[(2)] = inst_21311);

(statearr_21317_21383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (20))){
var state_21315__$1 = state_21315;
var statearr_21318_21384 = state_21315__$1;
(statearr_21318_21384[(2)] = null);

(statearr_21318_21384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (1))){
var state_21315__$1 = state_21315;
var statearr_21319_21385 = state_21315__$1;
(statearr_21319_21385[(2)] = null);

(statearr_21319_21385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (4))){
var inst_21280 = (state_21315[(7)]);
var inst_21280__$1 = (state_21315[(2)]);
var inst_21281 = (inst_21280__$1 == null);
var state_21315__$1 = (function (){var statearr_21320 = state_21315;
(statearr_21320[(7)] = inst_21280__$1);

return statearr_21320;
})();
if(cljs.core.truth_(inst_21281)){
var statearr_21321_21386 = state_21315__$1;
(statearr_21321_21386[(1)] = (5));

} else {
var statearr_21322_21387 = state_21315__$1;
(statearr_21322_21387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (15))){
var inst_21293 = (state_21315[(8)]);
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21315__$1,(18),to,inst_21293);
} else {
if((state_val_21316 === (21))){
var inst_21306 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
var statearr_21323_21388 = state_21315__$1;
(statearr_21323_21388[(2)] = inst_21306);

(statearr_21323_21388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (13))){
var inst_21308 = (state_21315[(2)]);
var state_21315__$1 = (function (){var statearr_21324 = state_21315;
(statearr_21324[(9)] = inst_21308);

return statearr_21324;
})();
var statearr_21325_21389 = state_21315__$1;
(statearr_21325_21389[(2)] = null);

(statearr_21325_21389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (6))){
var inst_21280 = (state_21315[(7)]);
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21315__$1,(11),inst_21280);
} else {
if((state_val_21316 === (17))){
var inst_21301 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
if(cljs.core.truth_(inst_21301)){
var statearr_21326_21390 = state_21315__$1;
(statearr_21326_21390[(1)] = (19));

} else {
var statearr_21327_21391 = state_21315__$1;
(statearr_21327_21391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (3))){
var inst_21313 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21315__$1,inst_21313);
} else {
if((state_val_21316 === (12))){
var inst_21290 = (state_21315[(10)]);
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21315__$1,(14),inst_21290);
} else {
if((state_val_21316 === (2))){
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21315__$1,(4),results);
} else {
if((state_val_21316 === (19))){
var state_21315__$1 = state_21315;
var statearr_21328_21392 = state_21315__$1;
(statearr_21328_21392[(2)] = null);

(statearr_21328_21392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (11))){
var inst_21290 = (state_21315[(2)]);
var state_21315__$1 = (function (){var statearr_21329 = state_21315;
(statearr_21329[(10)] = inst_21290);

return statearr_21329;
})();
var statearr_21330_21393 = state_21315__$1;
(statearr_21330_21393[(2)] = null);

(statearr_21330_21393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (9))){
var state_21315__$1 = state_21315;
var statearr_21331_21394 = state_21315__$1;
(statearr_21331_21394[(2)] = null);

(statearr_21331_21394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (5))){
var state_21315__$1 = state_21315;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21332_21395 = state_21315__$1;
(statearr_21332_21395[(1)] = (8));

} else {
var statearr_21333_21396 = state_21315__$1;
(statearr_21333_21396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (14))){
var inst_21295 = (state_21315[(11)]);
var inst_21293 = (state_21315[(8)]);
var inst_21293__$1 = (state_21315[(2)]);
var inst_21294 = (inst_21293__$1 == null);
var inst_21295__$1 = cljs.core.not.call(null,inst_21294);
var state_21315__$1 = (function (){var statearr_21334 = state_21315;
(statearr_21334[(11)] = inst_21295__$1);

(statearr_21334[(8)] = inst_21293__$1);

return statearr_21334;
})();
if(inst_21295__$1){
var statearr_21335_21397 = state_21315__$1;
(statearr_21335_21397[(1)] = (15));

} else {
var statearr_21336_21398 = state_21315__$1;
(statearr_21336_21398[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (16))){
var inst_21295 = (state_21315[(11)]);
var state_21315__$1 = state_21315;
var statearr_21337_21399 = state_21315__$1;
(statearr_21337_21399[(2)] = inst_21295);

(statearr_21337_21399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (10))){
var inst_21287 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
var statearr_21338_21400 = state_21315__$1;
(statearr_21338_21400[(2)] = inst_21287);

(statearr_21338_21400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (18))){
var inst_21298 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
var statearr_21339_21401 = state_21315__$1;
(statearr_21339_21401[(2)] = inst_21298);

(statearr_21339_21401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (8))){
var inst_21284 = cljs.core.async.close_BANG_.call(null,to);
var state_21315__$1 = state_21315;
var statearr_21340_21402 = state_21315__$1;
(statearr_21340_21402[(2)] = inst_21284);

(statearr_21340_21402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto__,jobs,results,process,async))
;
return ((function (switch__20686__auto__,c__20798__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0 = (function (){
var statearr_21344 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__);

(statearr_21344[(1)] = (1));

return statearr_21344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1 = (function (state_21315){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_21315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e21345){if((e21345 instanceof Object)){
var ex__20690__auto__ = e21345;
var statearr_21346_21403 = state_21315;
(statearr_21346_21403[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21404 = state_21315;
state_21315 = G__21404;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__ = function(state_21315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1.call(this,state_21315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto__,jobs,results,process,async))
})();
var state__20800__auto__ = (function (){var statearr_21347 = f__20799__auto__.call(null);
(statearr_21347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto__);

return statearr_21347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto__,jobs,results,process,async))
);

return c__20798__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21405 = [];
var len__17899__auto___21408 = arguments.length;
var i__17900__auto___21409 = (0);
while(true){
if((i__17900__auto___21409 < len__17899__auto___21408)){
args21405.push((arguments[i__17900__auto___21409]));

var G__21410 = (i__17900__auto___21409 + (1));
i__17900__auto___21409 = G__21410;
continue;
} else {
}
break;
}

var G__21407 = args21405.length;
switch (G__21407) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21405.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21412 = [];
var len__17899__auto___21415 = arguments.length;
var i__17900__auto___21416 = (0);
while(true){
if((i__17900__auto___21416 < len__17899__auto___21415)){
args21412.push((arguments[i__17900__auto___21416]));

var G__21417 = (i__17900__auto___21416 + (1));
i__17900__auto___21416 = G__21417;
continue;
} else {
}
break;
}

var G__21414 = args21412.length;
switch (G__21414) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21412.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21419 = [];
var len__17899__auto___21472 = arguments.length;
var i__17900__auto___21473 = (0);
while(true){
if((i__17900__auto___21473 < len__17899__auto___21472)){
args21419.push((arguments[i__17900__auto___21473]));

var G__21474 = (i__17900__auto___21473 + (1));
i__17900__auto___21473 = G__21474;
continue;
} else {
}
break;
}

var G__21421 = args21419.length;
switch (G__21421) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21419.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20798__auto___21476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___21476,tc,fc){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___21476,tc,fc){
return (function (state_21447){
var state_val_21448 = (state_21447[(1)]);
if((state_val_21448 === (7))){
var inst_21443 = (state_21447[(2)]);
var state_21447__$1 = state_21447;
var statearr_21449_21477 = state_21447__$1;
(statearr_21449_21477[(2)] = inst_21443);

(statearr_21449_21477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (1))){
var state_21447__$1 = state_21447;
var statearr_21450_21478 = state_21447__$1;
(statearr_21450_21478[(2)] = null);

(statearr_21450_21478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (4))){
var inst_21424 = (state_21447[(7)]);
var inst_21424__$1 = (state_21447[(2)]);
var inst_21425 = (inst_21424__$1 == null);
var state_21447__$1 = (function (){var statearr_21451 = state_21447;
(statearr_21451[(7)] = inst_21424__$1);

return statearr_21451;
})();
if(cljs.core.truth_(inst_21425)){
var statearr_21452_21479 = state_21447__$1;
(statearr_21452_21479[(1)] = (5));

} else {
var statearr_21453_21480 = state_21447__$1;
(statearr_21453_21480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (13))){
var state_21447__$1 = state_21447;
var statearr_21454_21481 = state_21447__$1;
(statearr_21454_21481[(2)] = null);

(statearr_21454_21481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (6))){
var inst_21424 = (state_21447[(7)]);
var inst_21430 = p.call(null,inst_21424);
var state_21447__$1 = state_21447;
if(cljs.core.truth_(inst_21430)){
var statearr_21455_21482 = state_21447__$1;
(statearr_21455_21482[(1)] = (9));

} else {
var statearr_21456_21483 = state_21447__$1;
(statearr_21456_21483[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (3))){
var inst_21445 = (state_21447[(2)]);
var state_21447__$1 = state_21447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21447__$1,inst_21445);
} else {
if((state_val_21448 === (12))){
var state_21447__$1 = state_21447;
var statearr_21457_21484 = state_21447__$1;
(statearr_21457_21484[(2)] = null);

(statearr_21457_21484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (2))){
var state_21447__$1 = state_21447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21447__$1,(4),ch);
} else {
if((state_val_21448 === (11))){
var inst_21424 = (state_21447[(7)]);
var inst_21434 = (state_21447[(2)]);
var state_21447__$1 = state_21447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21447__$1,(8),inst_21434,inst_21424);
} else {
if((state_val_21448 === (9))){
var state_21447__$1 = state_21447;
var statearr_21458_21485 = state_21447__$1;
(statearr_21458_21485[(2)] = tc);

(statearr_21458_21485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (5))){
var inst_21427 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21428 = cljs.core.async.close_BANG_.call(null,fc);
var state_21447__$1 = (function (){var statearr_21459 = state_21447;
(statearr_21459[(8)] = inst_21427);

return statearr_21459;
})();
var statearr_21460_21486 = state_21447__$1;
(statearr_21460_21486[(2)] = inst_21428);

(statearr_21460_21486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (14))){
var inst_21441 = (state_21447[(2)]);
var state_21447__$1 = state_21447;
var statearr_21461_21487 = state_21447__$1;
(statearr_21461_21487[(2)] = inst_21441);

(statearr_21461_21487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (10))){
var state_21447__$1 = state_21447;
var statearr_21462_21488 = state_21447__$1;
(statearr_21462_21488[(2)] = fc);

(statearr_21462_21488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (8))){
var inst_21436 = (state_21447[(2)]);
var state_21447__$1 = state_21447;
if(cljs.core.truth_(inst_21436)){
var statearr_21463_21489 = state_21447__$1;
(statearr_21463_21489[(1)] = (12));

} else {
var statearr_21464_21490 = state_21447__$1;
(statearr_21464_21490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___21476,tc,fc))
;
return ((function (switch__20686__auto__,c__20798__auto___21476,tc,fc){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_21468 = [null,null,null,null,null,null,null,null,null];
(statearr_21468[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_21468[(1)] = (1));

return statearr_21468;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_21447){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_21447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e21469){if((e21469 instanceof Object)){
var ex__20690__auto__ = e21469;
var statearr_21470_21491 = state_21447;
(statearr_21470_21491[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21492 = state_21447;
state_21447 = G__21492;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_21447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_21447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___21476,tc,fc))
})();
var state__20800__auto__ = (function (){var statearr_21471 = f__20799__auto__.call(null);
(statearr_21471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___21476);

return statearr_21471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___21476,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto__){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto__){
return (function (state_21556){
var state_val_21557 = (state_21556[(1)]);
if((state_val_21557 === (7))){
var inst_21552 = (state_21556[(2)]);
var state_21556__$1 = state_21556;
var statearr_21558_21579 = state_21556__$1;
(statearr_21558_21579[(2)] = inst_21552);

(statearr_21558_21579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (1))){
var inst_21536 = init;
var state_21556__$1 = (function (){var statearr_21559 = state_21556;
(statearr_21559[(7)] = inst_21536);

return statearr_21559;
})();
var statearr_21560_21580 = state_21556__$1;
(statearr_21560_21580[(2)] = null);

(statearr_21560_21580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (4))){
var inst_21539 = (state_21556[(8)]);
var inst_21539__$1 = (state_21556[(2)]);
var inst_21540 = (inst_21539__$1 == null);
var state_21556__$1 = (function (){var statearr_21561 = state_21556;
(statearr_21561[(8)] = inst_21539__$1);

return statearr_21561;
})();
if(cljs.core.truth_(inst_21540)){
var statearr_21562_21581 = state_21556__$1;
(statearr_21562_21581[(1)] = (5));

} else {
var statearr_21563_21582 = state_21556__$1;
(statearr_21563_21582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (6))){
var inst_21543 = (state_21556[(9)]);
var inst_21536 = (state_21556[(7)]);
var inst_21539 = (state_21556[(8)]);
var inst_21543__$1 = f.call(null,inst_21536,inst_21539);
var inst_21544 = cljs.core.reduced_QMARK_.call(null,inst_21543__$1);
var state_21556__$1 = (function (){var statearr_21564 = state_21556;
(statearr_21564[(9)] = inst_21543__$1);

return statearr_21564;
})();
if(inst_21544){
var statearr_21565_21583 = state_21556__$1;
(statearr_21565_21583[(1)] = (8));

} else {
var statearr_21566_21584 = state_21556__$1;
(statearr_21566_21584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (3))){
var inst_21554 = (state_21556[(2)]);
var state_21556__$1 = state_21556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21556__$1,inst_21554);
} else {
if((state_val_21557 === (2))){
var state_21556__$1 = state_21556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21556__$1,(4),ch);
} else {
if((state_val_21557 === (9))){
var inst_21543 = (state_21556[(9)]);
var inst_21536 = inst_21543;
var state_21556__$1 = (function (){var statearr_21567 = state_21556;
(statearr_21567[(7)] = inst_21536);

return statearr_21567;
})();
var statearr_21568_21585 = state_21556__$1;
(statearr_21568_21585[(2)] = null);

(statearr_21568_21585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (5))){
var inst_21536 = (state_21556[(7)]);
var state_21556__$1 = state_21556;
var statearr_21569_21586 = state_21556__$1;
(statearr_21569_21586[(2)] = inst_21536);

(statearr_21569_21586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (10))){
var inst_21550 = (state_21556[(2)]);
var state_21556__$1 = state_21556;
var statearr_21570_21587 = state_21556__$1;
(statearr_21570_21587[(2)] = inst_21550);

(statearr_21570_21587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (8))){
var inst_21543 = (state_21556[(9)]);
var inst_21546 = cljs.core.deref.call(null,inst_21543);
var state_21556__$1 = state_21556;
var statearr_21571_21588 = state_21556__$1;
(statearr_21571_21588[(2)] = inst_21546);

(statearr_21571_21588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto__))
;
return ((function (switch__20686__auto__,c__20798__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20687__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20687__auto____0 = (function (){
var statearr_21575 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21575[(0)] = cljs$core$async$reduce_$_state_machine__20687__auto__);

(statearr_21575[(1)] = (1));

return statearr_21575;
});
var cljs$core$async$reduce_$_state_machine__20687__auto____1 = (function (state_21556){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_21556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e21576){if((e21576 instanceof Object)){
var ex__20690__auto__ = e21576;
var statearr_21577_21589 = state_21556;
(statearr_21577_21589[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21590 = state_21556;
state_21556 = G__21590;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20687__auto__ = function(state_21556){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20687__auto____1.call(this,state_21556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20687__auto____0;
cljs$core$async$reduce_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20687__auto____1;
return cljs$core$async$reduce_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto__))
})();
var state__20800__auto__ = (function (){var statearr_21578 = f__20799__auto__.call(null);
(statearr_21578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto__);

return statearr_21578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto__))
);

return c__20798__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21591 = [];
var len__17899__auto___21643 = arguments.length;
var i__17900__auto___21644 = (0);
while(true){
if((i__17900__auto___21644 < len__17899__auto___21643)){
args21591.push((arguments[i__17900__auto___21644]));

var G__21645 = (i__17900__auto___21644 + (1));
i__17900__auto___21644 = G__21645;
continue;
} else {
}
break;
}

var G__21593 = args21591.length;
switch (G__21593) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21591.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto__){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto__){
return (function (state_21618){
var state_val_21619 = (state_21618[(1)]);
if((state_val_21619 === (7))){
var inst_21600 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
var statearr_21620_21647 = state_21618__$1;
(statearr_21620_21647[(2)] = inst_21600);

(statearr_21620_21647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (1))){
var inst_21594 = cljs.core.seq.call(null,coll);
var inst_21595 = inst_21594;
var state_21618__$1 = (function (){var statearr_21621 = state_21618;
(statearr_21621[(7)] = inst_21595);

return statearr_21621;
})();
var statearr_21622_21648 = state_21618__$1;
(statearr_21622_21648[(2)] = null);

(statearr_21622_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (4))){
var inst_21595 = (state_21618[(7)]);
var inst_21598 = cljs.core.first.call(null,inst_21595);
var state_21618__$1 = state_21618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21618__$1,(7),ch,inst_21598);
} else {
if((state_val_21619 === (13))){
var inst_21612 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
var statearr_21623_21649 = state_21618__$1;
(statearr_21623_21649[(2)] = inst_21612);

(statearr_21623_21649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (6))){
var inst_21603 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
if(cljs.core.truth_(inst_21603)){
var statearr_21624_21650 = state_21618__$1;
(statearr_21624_21650[(1)] = (8));

} else {
var statearr_21625_21651 = state_21618__$1;
(statearr_21625_21651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (3))){
var inst_21616 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21618__$1,inst_21616);
} else {
if((state_val_21619 === (12))){
var state_21618__$1 = state_21618;
var statearr_21626_21652 = state_21618__$1;
(statearr_21626_21652[(2)] = null);

(statearr_21626_21652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (2))){
var inst_21595 = (state_21618[(7)]);
var state_21618__$1 = state_21618;
if(cljs.core.truth_(inst_21595)){
var statearr_21627_21653 = state_21618__$1;
(statearr_21627_21653[(1)] = (4));

} else {
var statearr_21628_21654 = state_21618__$1;
(statearr_21628_21654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (11))){
var inst_21609 = cljs.core.async.close_BANG_.call(null,ch);
var state_21618__$1 = state_21618;
var statearr_21629_21655 = state_21618__$1;
(statearr_21629_21655[(2)] = inst_21609);

(statearr_21629_21655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (9))){
var state_21618__$1 = state_21618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21630_21656 = state_21618__$1;
(statearr_21630_21656[(1)] = (11));

} else {
var statearr_21631_21657 = state_21618__$1;
(statearr_21631_21657[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (5))){
var inst_21595 = (state_21618[(7)]);
var state_21618__$1 = state_21618;
var statearr_21632_21658 = state_21618__$1;
(statearr_21632_21658[(2)] = inst_21595);

(statearr_21632_21658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (10))){
var inst_21614 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
var statearr_21633_21659 = state_21618__$1;
(statearr_21633_21659[(2)] = inst_21614);

(statearr_21633_21659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (8))){
var inst_21595 = (state_21618[(7)]);
var inst_21605 = cljs.core.next.call(null,inst_21595);
var inst_21595__$1 = inst_21605;
var state_21618__$1 = (function (){var statearr_21634 = state_21618;
(statearr_21634[(7)] = inst_21595__$1);

return statearr_21634;
})();
var statearr_21635_21660 = state_21618__$1;
(statearr_21635_21660[(2)] = null);

(statearr_21635_21660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto__))
;
return ((function (switch__20686__auto__,c__20798__auto__){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_21639 = [null,null,null,null,null,null,null,null];
(statearr_21639[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_21639[(1)] = (1));

return statearr_21639;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_21618){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_21618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e21640){if((e21640 instanceof Object)){
var ex__20690__auto__ = e21640;
var statearr_21641_21661 = state_21618;
(statearr_21641_21661[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21662 = state_21618;
state_21618 = G__21662;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_21618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_21618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto__))
})();
var state__20800__auto__ = (function (){var statearr_21642 = f__20799__auto__.call(null);
(statearr_21642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto__);

return statearr_21642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto__))
);

return c__20798__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17496__auto__ = (((_ == null))?null:_);
var m__17497__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,_);
} else {
var m__17497__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17497__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,ch);
} else {
var m__17497__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m);
} else {
var m__17497__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21884 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21884 = (function (mult,ch,cs,meta21885){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21885 = meta21885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21886,meta21885__$1){
var self__ = this;
var _21886__$1 = this;
return (new cljs.core.async.t_cljs$core$async21884(self__.mult,self__.ch,self__.cs,meta21885__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21886){
var self__ = this;
var _21886__$1 = this;
return self__.meta21885;
});})(cs))
;

cljs.core.async.t_cljs$core$async21884.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21884.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21884.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21884.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21884.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21884.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21884.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21885","meta21885",1344123949,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21884.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21884";

cljs.core.async.t_cljs$core$async21884.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async21884");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21884 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21884(mult__$1,ch__$1,cs__$1,meta21885){
return (new cljs.core.async.t_cljs$core$async21884(mult__$1,ch__$1,cs__$1,meta21885));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21884(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20798__auto___22105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___22105,cs,m,dchan,dctr,done){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___22105,cs,m,dchan,dctr,done){
return (function (state_22017){
var state_val_22018 = (state_22017[(1)]);
if((state_val_22018 === (7))){
var inst_22013 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22019_22106 = state_22017__$1;
(statearr_22019_22106[(2)] = inst_22013);

(statearr_22019_22106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (20))){
var inst_21918 = (state_22017[(7)]);
var inst_21928 = cljs.core.first.call(null,inst_21918);
var inst_21929 = cljs.core.nth.call(null,inst_21928,(0),null);
var inst_21930 = cljs.core.nth.call(null,inst_21928,(1),null);
var state_22017__$1 = (function (){var statearr_22020 = state_22017;
(statearr_22020[(8)] = inst_21929);

return statearr_22020;
})();
if(cljs.core.truth_(inst_21930)){
var statearr_22021_22107 = state_22017__$1;
(statearr_22021_22107[(1)] = (22));

} else {
var statearr_22022_22108 = state_22017__$1;
(statearr_22022_22108[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (27))){
var inst_21958 = (state_22017[(9)]);
var inst_21965 = (state_22017[(10)]);
var inst_21889 = (state_22017[(11)]);
var inst_21960 = (state_22017[(12)]);
var inst_21965__$1 = cljs.core._nth.call(null,inst_21958,inst_21960);
var inst_21966 = cljs.core.async.put_BANG_.call(null,inst_21965__$1,inst_21889,done);
var state_22017__$1 = (function (){var statearr_22023 = state_22017;
(statearr_22023[(10)] = inst_21965__$1);

return statearr_22023;
})();
if(cljs.core.truth_(inst_21966)){
var statearr_22024_22109 = state_22017__$1;
(statearr_22024_22109[(1)] = (30));

} else {
var statearr_22025_22110 = state_22017__$1;
(statearr_22025_22110[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (1))){
var state_22017__$1 = state_22017;
var statearr_22026_22111 = state_22017__$1;
(statearr_22026_22111[(2)] = null);

(statearr_22026_22111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (24))){
var inst_21918 = (state_22017[(7)]);
var inst_21935 = (state_22017[(2)]);
var inst_21936 = cljs.core.next.call(null,inst_21918);
var inst_21898 = inst_21936;
var inst_21899 = null;
var inst_21900 = (0);
var inst_21901 = (0);
var state_22017__$1 = (function (){var statearr_22027 = state_22017;
(statearr_22027[(13)] = inst_21900);

(statearr_22027[(14)] = inst_21901);

(statearr_22027[(15)] = inst_21935);

(statearr_22027[(16)] = inst_21898);

(statearr_22027[(17)] = inst_21899);

return statearr_22027;
})();
var statearr_22028_22112 = state_22017__$1;
(statearr_22028_22112[(2)] = null);

(statearr_22028_22112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (39))){
var state_22017__$1 = state_22017;
var statearr_22032_22113 = state_22017__$1;
(statearr_22032_22113[(2)] = null);

(statearr_22032_22113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (4))){
var inst_21889 = (state_22017[(11)]);
var inst_21889__$1 = (state_22017[(2)]);
var inst_21890 = (inst_21889__$1 == null);
var state_22017__$1 = (function (){var statearr_22033 = state_22017;
(statearr_22033[(11)] = inst_21889__$1);

return statearr_22033;
})();
if(cljs.core.truth_(inst_21890)){
var statearr_22034_22114 = state_22017__$1;
(statearr_22034_22114[(1)] = (5));

} else {
var statearr_22035_22115 = state_22017__$1;
(statearr_22035_22115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (15))){
var inst_21900 = (state_22017[(13)]);
var inst_21901 = (state_22017[(14)]);
var inst_21898 = (state_22017[(16)]);
var inst_21899 = (state_22017[(17)]);
var inst_21914 = (state_22017[(2)]);
var inst_21915 = (inst_21901 + (1));
var tmp22029 = inst_21900;
var tmp22030 = inst_21898;
var tmp22031 = inst_21899;
var inst_21898__$1 = tmp22030;
var inst_21899__$1 = tmp22031;
var inst_21900__$1 = tmp22029;
var inst_21901__$1 = inst_21915;
var state_22017__$1 = (function (){var statearr_22036 = state_22017;
(statearr_22036[(13)] = inst_21900__$1);

(statearr_22036[(18)] = inst_21914);

(statearr_22036[(14)] = inst_21901__$1);

(statearr_22036[(16)] = inst_21898__$1);

(statearr_22036[(17)] = inst_21899__$1);

return statearr_22036;
})();
var statearr_22037_22116 = state_22017__$1;
(statearr_22037_22116[(2)] = null);

(statearr_22037_22116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (21))){
var inst_21939 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22041_22117 = state_22017__$1;
(statearr_22041_22117[(2)] = inst_21939);

(statearr_22041_22117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (31))){
var inst_21965 = (state_22017[(10)]);
var inst_21969 = done.call(null,null);
var inst_21970 = cljs.core.async.untap_STAR_.call(null,m,inst_21965);
var state_22017__$1 = (function (){var statearr_22042 = state_22017;
(statearr_22042[(19)] = inst_21969);

return statearr_22042;
})();
var statearr_22043_22118 = state_22017__$1;
(statearr_22043_22118[(2)] = inst_21970);

(statearr_22043_22118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (32))){
var inst_21959 = (state_22017[(20)]);
var inst_21958 = (state_22017[(9)]);
var inst_21957 = (state_22017[(21)]);
var inst_21960 = (state_22017[(12)]);
var inst_21972 = (state_22017[(2)]);
var inst_21973 = (inst_21960 + (1));
var tmp22038 = inst_21959;
var tmp22039 = inst_21958;
var tmp22040 = inst_21957;
var inst_21957__$1 = tmp22040;
var inst_21958__$1 = tmp22039;
var inst_21959__$1 = tmp22038;
var inst_21960__$1 = inst_21973;
var state_22017__$1 = (function (){var statearr_22044 = state_22017;
(statearr_22044[(20)] = inst_21959__$1);

(statearr_22044[(9)] = inst_21958__$1);

(statearr_22044[(22)] = inst_21972);

(statearr_22044[(21)] = inst_21957__$1);

(statearr_22044[(12)] = inst_21960__$1);

return statearr_22044;
})();
var statearr_22045_22119 = state_22017__$1;
(statearr_22045_22119[(2)] = null);

(statearr_22045_22119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (40))){
var inst_21985 = (state_22017[(23)]);
var inst_21989 = done.call(null,null);
var inst_21990 = cljs.core.async.untap_STAR_.call(null,m,inst_21985);
var state_22017__$1 = (function (){var statearr_22046 = state_22017;
(statearr_22046[(24)] = inst_21989);

return statearr_22046;
})();
var statearr_22047_22120 = state_22017__$1;
(statearr_22047_22120[(2)] = inst_21990);

(statearr_22047_22120[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (33))){
var inst_21976 = (state_22017[(25)]);
var inst_21978 = cljs.core.chunked_seq_QMARK_.call(null,inst_21976);
var state_22017__$1 = state_22017;
if(inst_21978){
var statearr_22048_22121 = state_22017__$1;
(statearr_22048_22121[(1)] = (36));

} else {
var statearr_22049_22122 = state_22017__$1;
(statearr_22049_22122[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (13))){
var inst_21908 = (state_22017[(26)]);
var inst_21911 = cljs.core.async.close_BANG_.call(null,inst_21908);
var state_22017__$1 = state_22017;
var statearr_22050_22123 = state_22017__$1;
(statearr_22050_22123[(2)] = inst_21911);

(statearr_22050_22123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (22))){
var inst_21929 = (state_22017[(8)]);
var inst_21932 = cljs.core.async.close_BANG_.call(null,inst_21929);
var state_22017__$1 = state_22017;
var statearr_22051_22124 = state_22017__$1;
(statearr_22051_22124[(2)] = inst_21932);

(statearr_22051_22124[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (36))){
var inst_21976 = (state_22017[(25)]);
var inst_21980 = cljs.core.chunk_first.call(null,inst_21976);
var inst_21981 = cljs.core.chunk_rest.call(null,inst_21976);
var inst_21982 = cljs.core.count.call(null,inst_21980);
var inst_21957 = inst_21981;
var inst_21958 = inst_21980;
var inst_21959 = inst_21982;
var inst_21960 = (0);
var state_22017__$1 = (function (){var statearr_22052 = state_22017;
(statearr_22052[(20)] = inst_21959);

(statearr_22052[(9)] = inst_21958);

(statearr_22052[(21)] = inst_21957);

(statearr_22052[(12)] = inst_21960);

return statearr_22052;
})();
var statearr_22053_22125 = state_22017__$1;
(statearr_22053_22125[(2)] = null);

(statearr_22053_22125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (41))){
var inst_21976 = (state_22017[(25)]);
var inst_21992 = (state_22017[(2)]);
var inst_21993 = cljs.core.next.call(null,inst_21976);
var inst_21957 = inst_21993;
var inst_21958 = null;
var inst_21959 = (0);
var inst_21960 = (0);
var state_22017__$1 = (function (){var statearr_22054 = state_22017;
(statearr_22054[(20)] = inst_21959);

(statearr_22054[(9)] = inst_21958);

(statearr_22054[(27)] = inst_21992);

(statearr_22054[(21)] = inst_21957);

(statearr_22054[(12)] = inst_21960);

return statearr_22054;
})();
var statearr_22055_22126 = state_22017__$1;
(statearr_22055_22126[(2)] = null);

(statearr_22055_22126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (43))){
var state_22017__$1 = state_22017;
var statearr_22056_22127 = state_22017__$1;
(statearr_22056_22127[(2)] = null);

(statearr_22056_22127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (29))){
var inst_22001 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22057_22128 = state_22017__$1;
(statearr_22057_22128[(2)] = inst_22001);

(statearr_22057_22128[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (44))){
var inst_22010 = (state_22017[(2)]);
var state_22017__$1 = (function (){var statearr_22058 = state_22017;
(statearr_22058[(28)] = inst_22010);

return statearr_22058;
})();
var statearr_22059_22129 = state_22017__$1;
(statearr_22059_22129[(2)] = null);

(statearr_22059_22129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (6))){
var inst_21949 = (state_22017[(29)]);
var inst_21948 = cljs.core.deref.call(null,cs);
var inst_21949__$1 = cljs.core.keys.call(null,inst_21948);
var inst_21950 = cljs.core.count.call(null,inst_21949__$1);
var inst_21951 = cljs.core.reset_BANG_.call(null,dctr,inst_21950);
var inst_21956 = cljs.core.seq.call(null,inst_21949__$1);
var inst_21957 = inst_21956;
var inst_21958 = null;
var inst_21959 = (0);
var inst_21960 = (0);
var state_22017__$1 = (function (){var statearr_22060 = state_22017;
(statearr_22060[(20)] = inst_21959);

(statearr_22060[(9)] = inst_21958);

(statearr_22060[(30)] = inst_21951);

(statearr_22060[(29)] = inst_21949__$1);

(statearr_22060[(21)] = inst_21957);

(statearr_22060[(12)] = inst_21960);

return statearr_22060;
})();
var statearr_22061_22130 = state_22017__$1;
(statearr_22061_22130[(2)] = null);

(statearr_22061_22130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (28))){
var inst_21976 = (state_22017[(25)]);
var inst_21957 = (state_22017[(21)]);
var inst_21976__$1 = cljs.core.seq.call(null,inst_21957);
var state_22017__$1 = (function (){var statearr_22062 = state_22017;
(statearr_22062[(25)] = inst_21976__$1);

return statearr_22062;
})();
if(inst_21976__$1){
var statearr_22063_22131 = state_22017__$1;
(statearr_22063_22131[(1)] = (33));

} else {
var statearr_22064_22132 = state_22017__$1;
(statearr_22064_22132[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (25))){
var inst_21959 = (state_22017[(20)]);
var inst_21960 = (state_22017[(12)]);
var inst_21962 = (inst_21960 < inst_21959);
var inst_21963 = inst_21962;
var state_22017__$1 = state_22017;
if(cljs.core.truth_(inst_21963)){
var statearr_22065_22133 = state_22017__$1;
(statearr_22065_22133[(1)] = (27));

} else {
var statearr_22066_22134 = state_22017__$1;
(statearr_22066_22134[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (34))){
var state_22017__$1 = state_22017;
var statearr_22067_22135 = state_22017__$1;
(statearr_22067_22135[(2)] = null);

(statearr_22067_22135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (17))){
var state_22017__$1 = state_22017;
var statearr_22068_22136 = state_22017__$1;
(statearr_22068_22136[(2)] = null);

(statearr_22068_22136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (3))){
var inst_22015 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22017__$1,inst_22015);
} else {
if((state_val_22018 === (12))){
var inst_21944 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22069_22137 = state_22017__$1;
(statearr_22069_22137[(2)] = inst_21944);

(statearr_22069_22137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (2))){
var state_22017__$1 = state_22017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22017__$1,(4),ch);
} else {
if((state_val_22018 === (23))){
var state_22017__$1 = state_22017;
var statearr_22070_22138 = state_22017__$1;
(statearr_22070_22138[(2)] = null);

(statearr_22070_22138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (35))){
var inst_21999 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22071_22139 = state_22017__$1;
(statearr_22071_22139[(2)] = inst_21999);

(statearr_22071_22139[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (19))){
var inst_21918 = (state_22017[(7)]);
var inst_21922 = cljs.core.chunk_first.call(null,inst_21918);
var inst_21923 = cljs.core.chunk_rest.call(null,inst_21918);
var inst_21924 = cljs.core.count.call(null,inst_21922);
var inst_21898 = inst_21923;
var inst_21899 = inst_21922;
var inst_21900 = inst_21924;
var inst_21901 = (0);
var state_22017__$1 = (function (){var statearr_22072 = state_22017;
(statearr_22072[(13)] = inst_21900);

(statearr_22072[(14)] = inst_21901);

(statearr_22072[(16)] = inst_21898);

(statearr_22072[(17)] = inst_21899);

return statearr_22072;
})();
var statearr_22073_22140 = state_22017__$1;
(statearr_22073_22140[(2)] = null);

(statearr_22073_22140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (11))){
var inst_21918 = (state_22017[(7)]);
var inst_21898 = (state_22017[(16)]);
var inst_21918__$1 = cljs.core.seq.call(null,inst_21898);
var state_22017__$1 = (function (){var statearr_22074 = state_22017;
(statearr_22074[(7)] = inst_21918__$1);

return statearr_22074;
})();
if(inst_21918__$1){
var statearr_22075_22141 = state_22017__$1;
(statearr_22075_22141[(1)] = (16));

} else {
var statearr_22076_22142 = state_22017__$1;
(statearr_22076_22142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (9))){
var inst_21946 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22077_22143 = state_22017__$1;
(statearr_22077_22143[(2)] = inst_21946);

(statearr_22077_22143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (5))){
var inst_21896 = cljs.core.deref.call(null,cs);
var inst_21897 = cljs.core.seq.call(null,inst_21896);
var inst_21898 = inst_21897;
var inst_21899 = null;
var inst_21900 = (0);
var inst_21901 = (0);
var state_22017__$1 = (function (){var statearr_22078 = state_22017;
(statearr_22078[(13)] = inst_21900);

(statearr_22078[(14)] = inst_21901);

(statearr_22078[(16)] = inst_21898);

(statearr_22078[(17)] = inst_21899);

return statearr_22078;
})();
var statearr_22079_22144 = state_22017__$1;
(statearr_22079_22144[(2)] = null);

(statearr_22079_22144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (14))){
var state_22017__$1 = state_22017;
var statearr_22080_22145 = state_22017__$1;
(statearr_22080_22145[(2)] = null);

(statearr_22080_22145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (45))){
var inst_22007 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22081_22146 = state_22017__$1;
(statearr_22081_22146[(2)] = inst_22007);

(statearr_22081_22146[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (26))){
var inst_21949 = (state_22017[(29)]);
var inst_22003 = (state_22017[(2)]);
var inst_22004 = cljs.core.seq.call(null,inst_21949);
var state_22017__$1 = (function (){var statearr_22082 = state_22017;
(statearr_22082[(31)] = inst_22003);

return statearr_22082;
})();
if(inst_22004){
var statearr_22083_22147 = state_22017__$1;
(statearr_22083_22147[(1)] = (42));

} else {
var statearr_22084_22148 = state_22017__$1;
(statearr_22084_22148[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (16))){
var inst_21918 = (state_22017[(7)]);
var inst_21920 = cljs.core.chunked_seq_QMARK_.call(null,inst_21918);
var state_22017__$1 = state_22017;
if(inst_21920){
var statearr_22085_22149 = state_22017__$1;
(statearr_22085_22149[(1)] = (19));

} else {
var statearr_22086_22150 = state_22017__$1;
(statearr_22086_22150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (38))){
var inst_21996 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22087_22151 = state_22017__$1;
(statearr_22087_22151[(2)] = inst_21996);

(statearr_22087_22151[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (30))){
var state_22017__$1 = state_22017;
var statearr_22088_22152 = state_22017__$1;
(statearr_22088_22152[(2)] = null);

(statearr_22088_22152[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (10))){
var inst_21901 = (state_22017[(14)]);
var inst_21899 = (state_22017[(17)]);
var inst_21907 = cljs.core._nth.call(null,inst_21899,inst_21901);
var inst_21908 = cljs.core.nth.call(null,inst_21907,(0),null);
var inst_21909 = cljs.core.nth.call(null,inst_21907,(1),null);
var state_22017__$1 = (function (){var statearr_22089 = state_22017;
(statearr_22089[(26)] = inst_21908);

return statearr_22089;
})();
if(cljs.core.truth_(inst_21909)){
var statearr_22090_22153 = state_22017__$1;
(statearr_22090_22153[(1)] = (13));

} else {
var statearr_22091_22154 = state_22017__$1;
(statearr_22091_22154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (18))){
var inst_21942 = (state_22017[(2)]);
var state_22017__$1 = state_22017;
var statearr_22092_22155 = state_22017__$1;
(statearr_22092_22155[(2)] = inst_21942);

(statearr_22092_22155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (42))){
var state_22017__$1 = state_22017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22017__$1,(45),dchan);
} else {
if((state_val_22018 === (37))){
var inst_21976 = (state_22017[(25)]);
var inst_21985 = (state_22017[(23)]);
var inst_21889 = (state_22017[(11)]);
var inst_21985__$1 = cljs.core.first.call(null,inst_21976);
var inst_21986 = cljs.core.async.put_BANG_.call(null,inst_21985__$1,inst_21889,done);
var state_22017__$1 = (function (){var statearr_22093 = state_22017;
(statearr_22093[(23)] = inst_21985__$1);

return statearr_22093;
})();
if(cljs.core.truth_(inst_21986)){
var statearr_22094_22156 = state_22017__$1;
(statearr_22094_22156[(1)] = (39));

} else {
var statearr_22095_22157 = state_22017__$1;
(statearr_22095_22157[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22018 === (8))){
var inst_21900 = (state_22017[(13)]);
var inst_21901 = (state_22017[(14)]);
var inst_21903 = (inst_21901 < inst_21900);
var inst_21904 = inst_21903;
var state_22017__$1 = state_22017;
if(cljs.core.truth_(inst_21904)){
var statearr_22096_22158 = state_22017__$1;
(statearr_22096_22158[(1)] = (10));

} else {
var statearr_22097_22159 = state_22017__$1;
(statearr_22097_22159[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___22105,cs,m,dchan,dctr,done))
;
return ((function (switch__20686__auto__,c__20798__auto___22105,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20687__auto__ = null;
var cljs$core$async$mult_$_state_machine__20687__auto____0 = (function (){
var statearr_22101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22101[(0)] = cljs$core$async$mult_$_state_machine__20687__auto__);

(statearr_22101[(1)] = (1));

return statearr_22101;
});
var cljs$core$async$mult_$_state_machine__20687__auto____1 = (function (state_22017){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_22017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e22102){if((e22102 instanceof Object)){
var ex__20690__auto__ = e22102;
var statearr_22103_22160 = state_22017;
(statearr_22103_22160[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22161 = state_22017;
state_22017 = G__22161;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20687__auto__ = function(state_22017){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20687__auto____1.call(this,state_22017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20687__auto____0;
cljs$core$async$mult_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20687__auto____1;
return cljs$core$async$mult_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___22105,cs,m,dchan,dctr,done))
})();
var state__20800__auto__ = (function (){var statearr_22104 = f__20799__auto__.call(null);
(statearr_22104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___22105);

return statearr_22104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___22105,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22162 = [];
var len__17899__auto___22165 = arguments.length;
var i__17900__auto___22166 = (0);
while(true){
if((i__17900__auto___22166 < len__17899__auto___22165)){
args22162.push((arguments[i__17900__auto___22166]));

var G__22167 = (i__17900__auto___22166 + (1));
i__17900__auto___22166 = G__22167;
continue;
} else {
}
break;
}

var G__22164 = args22162.length;
switch (G__22164) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22162.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,ch);
} else {
var m__17497__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,ch);
} else {
var m__17497__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m);
} else {
var m__17497__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,state_map);
} else {
var m__17497__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,mode);
} else {
var m__17497__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17906__auto__ = [];
var len__17899__auto___22179 = arguments.length;
var i__17900__auto___22180 = (0);
while(true){
if((i__17900__auto___22180 < len__17899__auto___22179)){
args__17906__auto__.push((arguments[i__17900__auto___22180]));

var G__22181 = (i__17900__auto___22180 + (1));
i__17900__auto___22180 = G__22181;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((3) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17907__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22173){
var map__22174 = p__22173;
var map__22174__$1 = ((((!((map__22174 == null)))?((((map__22174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22174):map__22174);
var opts = map__22174__$1;
var statearr_22176_22182 = state;
(statearr_22176_22182[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22174,map__22174__$1,opts){
return (function (val){
var statearr_22177_22183 = state;
(statearr_22177_22183[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22174,map__22174__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22178_22184 = state;
(statearr_22178_22184[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22169){
var G__22170 = cljs.core.first.call(null,seq22169);
var seq22169__$1 = cljs.core.next.call(null,seq22169);
var G__22171 = cljs.core.first.call(null,seq22169__$1);
var seq22169__$2 = cljs.core.next.call(null,seq22169__$1);
var G__22172 = cljs.core.first.call(null,seq22169__$2);
var seq22169__$3 = cljs.core.next.call(null,seq22169__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22170,G__22171,G__22172,seq22169__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22348 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22349){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22349 = meta22349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22350,meta22349__$1){
var self__ = this;
var _22350__$1 = this;
return (new cljs.core.async.t_cljs$core$async22348(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22349__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22350){
var self__ = this;
var _22350__$1 = this;
return self__.meta22349;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22349","meta22349",-1606935239,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22348";

cljs.core.async.t_cljs$core$async22348.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22348");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22348 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22348(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22349){
return (new cljs.core.async.t_cljs$core$async22348(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22349));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22348(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20798__auto___22511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___22511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___22511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22448){
var state_val_22449 = (state_22448[(1)]);
if((state_val_22449 === (7))){
var inst_22366 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
var statearr_22450_22512 = state_22448__$1;
(statearr_22450_22512[(2)] = inst_22366);

(statearr_22450_22512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (20))){
var inst_22378 = (state_22448[(7)]);
var state_22448__$1 = state_22448;
var statearr_22451_22513 = state_22448__$1;
(statearr_22451_22513[(2)] = inst_22378);

(statearr_22451_22513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (27))){
var state_22448__$1 = state_22448;
var statearr_22452_22514 = state_22448__$1;
(statearr_22452_22514[(2)] = null);

(statearr_22452_22514[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (1))){
var inst_22354 = (state_22448[(8)]);
var inst_22354__$1 = calc_state.call(null);
var inst_22356 = (inst_22354__$1 == null);
var inst_22357 = cljs.core.not.call(null,inst_22356);
var state_22448__$1 = (function (){var statearr_22453 = state_22448;
(statearr_22453[(8)] = inst_22354__$1);

return statearr_22453;
})();
if(inst_22357){
var statearr_22454_22515 = state_22448__$1;
(statearr_22454_22515[(1)] = (2));

} else {
var statearr_22455_22516 = state_22448__$1;
(statearr_22455_22516[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (24))){
var inst_22422 = (state_22448[(9)]);
var inst_22408 = (state_22448[(10)]);
var inst_22401 = (state_22448[(11)]);
var inst_22422__$1 = inst_22401.call(null,inst_22408);
var state_22448__$1 = (function (){var statearr_22456 = state_22448;
(statearr_22456[(9)] = inst_22422__$1);

return statearr_22456;
})();
if(cljs.core.truth_(inst_22422__$1)){
var statearr_22457_22517 = state_22448__$1;
(statearr_22457_22517[(1)] = (29));

} else {
var statearr_22458_22518 = state_22448__$1;
(statearr_22458_22518[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (4))){
var inst_22369 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
if(cljs.core.truth_(inst_22369)){
var statearr_22459_22519 = state_22448__$1;
(statearr_22459_22519[(1)] = (8));

} else {
var statearr_22460_22520 = state_22448__$1;
(statearr_22460_22520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (15))){
var inst_22395 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
if(cljs.core.truth_(inst_22395)){
var statearr_22461_22521 = state_22448__$1;
(statearr_22461_22521[(1)] = (19));

} else {
var statearr_22462_22522 = state_22448__$1;
(statearr_22462_22522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (21))){
var inst_22400 = (state_22448[(12)]);
var inst_22400__$1 = (state_22448[(2)]);
var inst_22401 = cljs.core.get.call(null,inst_22400__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22402 = cljs.core.get.call(null,inst_22400__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22403 = cljs.core.get.call(null,inst_22400__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22448__$1 = (function (){var statearr_22463 = state_22448;
(statearr_22463[(11)] = inst_22401);

(statearr_22463[(12)] = inst_22400__$1);

(statearr_22463[(13)] = inst_22402);

return statearr_22463;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22448__$1,(22),inst_22403);
} else {
if((state_val_22449 === (31))){
var inst_22430 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
if(cljs.core.truth_(inst_22430)){
var statearr_22464_22523 = state_22448__$1;
(statearr_22464_22523[(1)] = (32));

} else {
var statearr_22465_22524 = state_22448__$1;
(statearr_22465_22524[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (32))){
var inst_22407 = (state_22448[(14)]);
var state_22448__$1 = state_22448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22448__$1,(35),out,inst_22407);
} else {
if((state_val_22449 === (33))){
var inst_22400 = (state_22448[(12)]);
var inst_22378 = inst_22400;
var state_22448__$1 = (function (){var statearr_22466 = state_22448;
(statearr_22466[(7)] = inst_22378);

return statearr_22466;
})();
var statearr_22467_22525 = state_22448__$1;
(statearr_22467_22525[(2)] = null);

(statearr_22467_22525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (13))){
var inst_22378 = (state_22448[(7)]);
var inst_22385 = inst_22378.cljs$lang$protocol_mask$partition0$;
var inst_22386 = (inst_22385 & (64));
var inst_22387 = inst_22378.cljs$core$ISeq$;
var inst_22388 = (inst_22386) || (inst_22387);
var state_22448__$1 = state_22448;
if(cljs.core.truth_(inst_22388)){
var statearr_22468_22526 = state_22448__$1;
(statearr_22468_22526[(1)] = (16));

} else {
var statearr_22469_22527 = state_22448__$1;
(statearr_22469_22527[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (22))){
var inst_22408 = (state_22448[(10)]);
var inst_22407 = (state_22448[(14)]);
var inst_22406 = (state_22448[(2)]);
var inst_22407__$1 = cljs.core.nth.call(null,inst_22406,(0),null);
var inst_22408__$1 = cljs.core.nth.call(null,inst_22406,(1),null);
var inst_22409 = (inst_22407__$1 == null);
var inst_22410 = cljs.core._EQ_.call(null,inst_22408__$1,change);
var inst_22411 = (inst_22409) || (inst_22410);
var state_22448__$1 = (function (){var statearr_22470 = state_22448;
(statearr_22470[(10)] = inst_22408__$1);

(statearr_22470[(14)] = inst_22407__$1);

return statearr_22470;
})();
if(cljs.core.truth_(inst_22411)){
var statearr_22471_22528 = state_22448__$1;
(statearr_22471_22528[(1)] = (23));

} else {
var statearr_22472_22529 = state_22448__$1;
(statearr_22472_22529[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (36))){
var inst_22400 = (state_22448[(12)]);
var inst_22378 = inst_22400;
var state_22448__$1 = (function (){var statearr_22473 = state_22448;
(statearr_22473[(7)] = inst_22378);

return statearr_22473;
})();
var statearr_22474_22530 = state_22448__$1;
(statearr_22474_22530[(2)] = null);

(statearr_22474_22530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (29))){
var inst_22422 = (state_22448[(9)]);
var state_22448__$1 = state_22448;
var statearr_22475_22531 = state_22448__$1;
(statearr_22475_22531[(2)] = inst_22422);

(statearr_22475_22531[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (6))){
var state_22448__$1 = state_22448;
var statearr_22476_22532 = state_22448__$1;
(statearr_22476_22532[(2)] = false);

(statearr_22476_22532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (28))){
var inst_22418 = (state_22448[(2)]);
var inst_22419 = calc_state.call(null);
var inst_22378 = inst_22419;
var state_22448__$1 = (function (){var statearr_22477 = state_22448;
(statearr_22477[(7)] = inst_22378);

(statearr_22477[(15)] = inst_22418);

return statearr_22477;
})();
var statearr_22478_22533 = state_22448__$1;
(statearr_22478_22533[(2)] = null);

(statearr_22478_22533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (25))){
var inst_22444 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
var statearr_22479_22534 = state_22448__$1;
(statearr_22479_22534[(2)] = inst_22444);

(statearr_22479_22534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (34))){
var inst_22442 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
var statearr_22480_22535 = state_22448__$1;
(statearr_22480_22535[(2)] = inst_22442);

(statearr_22480_22535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (17))){
var state_22448__$1 = state_22448;
var statearr_22481_22536 = state_22448__$1;
(statearr_22481_22536[(2)] = false);

(statearr_22481_22536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (3))){
var state_22448__$1 = state_22448;
var statearr_22482_22537 = state_22448__$1;
(statearr_22482_22537[(2)] = false);

(statearr_22482_22537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (12))){
var inst_22446 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22448__$1,inst_22446);
} else {
if((state_val_22449 === (2))){
var inst_22354 = (state_22448[(8)]);
var inst_22359 = inst_22354.cljs$lang$protocol_mask$partition0$;
var inst_22360 = (inst_22359 & (64));
var inst_22361 = inst_22354.cljs$core$ISeq$;
var inst_22362 = (inst_22360) || (inst_22361);
var state_22448__$1 = state_22448;
if(cljs.core.truth_(inst_22362)){
var statearr_22483_22538 = state_22448__$1;
(statearr_22483_22538[(1)] = (5));

} else {
var statearr_22484_22539 = state_22448__$1;
(statearr_22484_22539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (23))){
var inst_22407 = (state_22448[(14)]);
var inst_22413 = (inst_22407 == null);
var state_22448__$1 = state_22448;
if(cljs.core.truth_(inst_22413)){
var statearr_22485_22540 = state_22448__$1;
(statearr_22485_22540[(1)] = (26));

} else {
var statearr_22486_22541 = state_22448__$1;
(statearr_22486_22541[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (35))){
var inst_22433 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
if(cljs.core.truth_(inst_22433)){
var statearr_22487_22542 = state_22448__$1;
(statearr_22487_22542[(1)] = (36));

} else {
var statearr_22488_22543 = state_22448__$1;
(statearr_22488_22543[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (19))){
var inst_22378 = (state_22448[(7)]);
var inst_22397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22378);
var state_22448__$1 = state_22448;
var statearr_22489_22544 = state_22448__$1;
(statearr_22489_22544[(2)] = inst_22397);

(statearr_22489_22544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (11))){
var inst_22378 = (state_22448[(7)]);
var inst_22382 = (inst_22378 == null);
var inst_22383 = cljs.core.not.call(null,inst_22382);
var state_22448__$1 = state_22448;
if(inst_22383){
var statearr_22490_22545 = state_22448__$1;
(statearr_22490_22545[(1)] = (13));

} else {
var statearr_22491_22546 = state_22448__$1;
(statearr_22491_22546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (9))){
var inst_22354 = (state_22448[(8)]);
var state_22448__$1 = state_22448;
var statearr_22492_22547 = state_22448__$1;
(statearr_22492_22547[(2)] = inst_22354);

(statearr_22492_22547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (5))){
var state_22448__$1 = state_22448;
var statearr_22493_22548 = state_22448__$1;
(statearr_22493_22548[(2)] = true);

(statearr_22493_22548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (14))){
var state_22448__$1 = state_22448;
var statearr_22494_22549 = state_22448__$1;
(statearr_22494_22549[(2)] = false);

(statearr_22494_22549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (26))){
var inst_22408 = (state_22448[(10)]);
var inst_22415 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22408);
var state_22448__$1 = state_22448;
var statearr_22495_22550 = state_22448__$1;
(statearr_22495_22550[(2)] = inst_22415);

(statearr_22495_22550[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (16))){
var state_22448__$1 = state_22448;
var statearr_22496_22551 = state_22448__$1;
(statearr_22496_22551[(2)] = true);

(statearr_22496_22551[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (38))){
var inst_22438 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
var statearr_22497_22552 = state_22448__$1;
(statearr_22497_22552[(2)] = inst_22438);

(statearr_22497_22552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (30))){
var inst_22408 = (state_22448[(10)]);
var inst_22401 = (state_22448[(11)]);
var inst_22402 = (state_22448[(13)]);
var inst_22425 = cljs.core.empty_QMARK_.call(null,inst_22401);
var inst_22426 = inst_22402.call(null,inst_22408);
var inst_22427 = cljs.core.not.call(null,inst_22426);
var inst_22428 = (inst_22425) && (inst_22427);
var state_22448__$1 = state_22448;
var statearr_22498_22553 = state_22448__$1;
(statearr_22498_22553[(2)] = inst_22428);

(statearr_22498_22553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (10))){
var inst_22354 = (state_22448[(8)]);
var inst_22374 = (state_22448[(2)]);
var inst_22375 = cljs.core.get.call(null,inst_22374,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22376 = cljs.core.get.call(null,inst_22374,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22377 = cljs.core.get.call(null,inst_22374,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22378 = inst_22354;
var state_22448__$1 = (function (){var statearr_22499 = state_22448;
(statearr_22499[(16)] = inst_22377);

(statearr_22499[(17)] = inst_22375);

(statearr_22499[(18)] = inst_22376);

(statearr_22499[(7)] = inst_22378);

return statearr_22499;
})();
var statearr_22500_22554 = state_22448__$1;
(statearr_22500_22554[(2)] = null);

(statearr_22500_22554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (18))){
var inst_22392 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
var statearr_22501_22555 = state_22448__$1;
(statearr_22501_22555[(2)] = inst_22392);

(statearr_22501_22555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (37))){
var state_22448__$1 = state_22448;
var statearr_22502_22556 = state_22448__$1;
(statearr_22502_22556[(2)] = null);

(statearr_22502_22556[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (8))){
var inst_22354 = (state_22448[(8)]);
var inst_22371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22354);
var state_22448__$1 = state_22448;
var statearr_22503_22557 = state_22448__$1;
(statearr_22503_22557[(2)] = inst_22371);

(statearr_22503_22557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___22511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20686__auto__,c__20798__auto___22511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20687__auto__ = null;
var cljs$core$async$mix_$_state_machine__20687__auto____0 = (function (){
var statearr_22507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22507[(0)] = cljs$core$async$mix_$_state_machine__20687__auto__);

(statearr_22507[(1)] = (1));

return statearr_22507;
});
var cljs$core$async$mix_$_state_machine__20687__auto____1 = (function (state_22448){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_22448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e22508){if((e22508 instanceof Object)){
var ex__20690__auto__ = e22508;
var statearr_22509_22558 = state_22448;
(statearr_22509_22558[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22559 = state_22448;
state_22448 = G__22559;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20687__auto__ = function(state_22448){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20687__auto____1.call(this,state_22448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20687__auto____0;
cljs$core$async$mix_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20687__auto____1;
return cljs$core$async$mix_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___22511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20800__auto__ = (function (){var statearr_22510 = f__20799__auto__.call(null);
(statearr_22510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___22511);

return statearr_22510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___22511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17496__auto__ = (((p == null))?null:p);
var m__17497__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17497__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17496__auto__ = (((p == null))?null:p);
var m__17497__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,p,v,ch);
} else {
var m__17497__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22560 = [];
var len__17899__auto___22563 = arguments.length;
var i__17900__auto___22564 = (0);
while(true){
if((i__17900__auto___22564 < len__17899__auto___22563)){
args22560.push((arguments[i__17900__auto___22564]));

var G__22565 = (i__17900__auto___22564 + (1));
i__17900__auto___22564 = G__22565;
continue;
} else {
}
break;
}

var G__22562 = args22560.length;
switch (G__22562) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22560.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17496__auto__ = (((p == null))?null:p);
var m__17497__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,p);
} else {
var m__17497__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17496__auto__ = (((p == null))?null:p);
var m__17497__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,p,v);
} else {
var m__17497__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22568 = [];
var len__17899__auto___22693 = arguments.length;
var i__17900__auto___22694 = (0);
while(true){
if((i__17900__auto___22694 < len__17899__auto___22693)){
args22568.push((arguments[i__17900__auto___22694]));

var G__22695 = (i__17900__auto___22694 + (1));
i__17900__auto___22694 = G__22695;
continue;
} else {
}
break;
}

var G__22570 = args22568.length;
switch (G__22570) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22568.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16841__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16841__auto__,mults){
return (function (p1__22567_SHARP_){
if(cljs.core.truth_(p1__22567_SHARP_.call(null,topic))){
return p1__22567_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22567_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16841__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22571 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22572){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22572 = meta22572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22573,meta22572__$1){
var self__ = this;
var _22573__$1 = this;
return (new cljs.core.async.t_cljs$core$async22571(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22572__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22573){
var self__ = this;
var _22573__$1 = this;
return self__.meta22572;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22571.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22572","meta22572",-14944548,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22571";

cljs.core.async.t_cljs$core$async22571.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22571");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22571 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22571(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22572){
return (new cljs.core.async.t_cljs$core$async22571(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22572));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22571(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20798__auto___22697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___22697,mults,ensure_mult,p){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___22697,mults,ensure_mult,p){
return (function (state_22645){
var state_val_22646 = (state_22645[(1)]);
if((state_val_22646 === (7))){
var inst_22641 = (state_22645[(2)]);
var state_22645__$1 = state_22645;
var statearr_22647_22698 = state_22645__$1;
(statearr_22647_22698[(2)] = inst_22641);

(statearr_22647_22698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (20))){
var state_22645__$1 = state_22645;
var statearr_22648_22699 = state_22645__$1;
(statearr_22648_22699[(2)] = null);

(statearr_22648_22699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (1))){
var state_22645__$1 = state_22645;
var statearr_22649_22700 = state_22645__$1;
(statearr_22649_22700[(2)] = null);

(statearr_22649_22700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (24))){
var inst_22624 = (state_22645[(7)]);
var inst_22633 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22624);
var state_22645__$1 = state_22645;
var statearr_22650_22701 = state_22645__$1;
(statearr_22650_22701[(2)] = inst_22633);

(statearr_22650_22701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (4))){
var inst_22576 = (state_22645[(8)]);
var inst_22576__$1 = (state_22645[(2)]);
var inst_22577 = (inst_22576__$1 == null);
var state_22645__$1 = (function (){var statearr_22651 = state_22645;
(statearr_22651[(8)] = inst_22576__$1);

return statearr_22651;
})();
if(cljs.core.truth_(inst_22577)){
var statearr_22652_22702 = state_22645__$1;
(statearr_22652_22702[(1)] = (5));

} else {
var statearr_22653_22703 = state_22645__$1;
(statearr_22653_22703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (15))){
var inst_22618 = (state_22645[(2)]);
var state_22645__$1 = state_22645;
var statearr_22654_22704 = state_22645__$1;
(statearr_22654_22704[(2)] = inst_22618);

(statearr_22654_22704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (21))){
var inst_22638 = (state_22645[(2)]);
var state_22645__$1 = (function (){var statearr_22655 = state_22645;
(statearr_22655[(9)] = inst_22638);

return statearr_22655;
})();
var statearr_22656_22705 = state_22645__$1;
(statearr_22656_22705[(2)] = null);

(statearr_22656_22705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (13))){
var inst_22600 = (state_22645[(10)]);
var inst_22602 = cljs.core.chunked_seq_QMARK_.call(null,inst_22600);
var state_22645__$1 = state_22645;
if(inst_22602){
var statearr_22657_22706 = state_22645__$1;
(statearr_22657_22706[(1)] = (16));

} else {
var statearr_22658_22707 = state_22645__$1;
(statearr_22658_22707[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (22))){
var inst_22630 = (state_22645[(2)]);
var state_22645__$1 = state_22645;
if(cljs.core.truth_(inst_22630)){
var statearr_22659_22708 = state_22645__$1;
(statearr_22659_22708[(1)] = (23));

} else {
var statearr_22660_22709 = state_22645__$1;
(statearr_22660_22709[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (6))){
var inst_22576 = (state_22645[(8)]);
var inst_22626 = (state_22645[(11)]);
var inst_22624 = (state_22645[(7)]);
var inst_22624__$1 = topic_fn.call(null,inst_22576);
var inst_22625 = cljs.core.deref.call(null,mults);
var inst_22626__$1 = cljs.core.get.call(null,inst_22625,inst_22624__$1);
var state_22645__$1 = (function (){var statearr_22661 = state_22645;
(statearr_22661[(11)] = inst_22626__$1);

(statearr_22661[(7)] = inst_22624__$1);

return statearr_22661;
})();
if(cljs.core.truth_(inst_22626__$1)){
var statearr_22662_22710 = state_22645__$1;
(statearr_22662_22710[(1)] = (19));

} else {
var statearr_22663_22711 = state_22645__$1;
(statearr_22663_22711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (25))){
var inst_22635 = (state_22645[(2)]);
var state_22645__$1 = state_22645;
var statearr_22664_22712 = state_22645__$1;
(statearr_22664_22712[(2)] = inst_22635);

(statearr_22664_22712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (17))){
var inst_22600 = (state_22645[(10)]);
var inst_22609 = cljs.core.first.call(null,inst_22600);
var inst_22610 = cljs.core.async.muxch_STAR_.call(null,inst_22609);
var inst_22611 = cljs.core.async.close_BANG_.call(null,inst_22610);
var inst_22612 = cljs.core.next.call(null,inst_22600);
var inst_22586 = inst_22612;
var inst_22587 = null;
var inst_22588 = (0);
var inst_22589 = (0);
var state_22645__$1 = (function (){var statearr_22665 = state_22645;
(statearr_22665[(12)] = inst_22611);

(statearr_22665[(13)] = inst_22586);

(statearr_22665[(14)] = inst_22588);

(statearr_22665[(15)] = inst_22587);

(statearr_22665[(16)] = inst_22589);

return statearr_22665;
})();
var statearr_22666_22713 = state_22645__$1;
(statearr_22666_22713[(2)] = null);

(statearr_22666_22713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (3))){
var inst_22643 = (state_22645[(2)]);
var state_22645__$1 = state_22645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22645__$1,inst_22643);
} else {
if((state_val_22646 === (12))){
var inst_22620 = (state_22645[(2)]);
var state_22645__$1 = state_22645;
var statearr_22667_22714 = state_22645__$1;
(statearr_22667_22714[(2)] = inst_22620);

(statearr_22667_22714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (2))){
var state_22645__$1 = state_22645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22645__$1,(4),ch);
} else {
if((state_val_22646 === (23))){
var state_22645__$1 = state_22645;
var statearr_22668_22715 = state_22645__$1;
(statearr_22668_22715[(2)] = null);

(statearr_22668_22715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (19))){
var inst_22576 = (state_22645[(8)]);
var inst_22626 = (state_22645[(11)]);
var inst_22628 = cljs.core.async.muxch_STAR_.call(null,inst_22626);
var state_22645__$1 = state_22645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22645__$1,(22),inst_22628,inst_22576);
} else {
if((state_val_22646 === (11))){
var inst_22586 = (state_22645[(13)]);
var inst_22600 = (state_22645[(10)]);
var inst_22600__$1 = cljs.core.seq.call(null,inst_22586);
var state_22645__$1 = (function (){var statearr_22669 = state_22645;
(statearr_22669[(10)] = inst_22600__$1);

return statearr_22669;
})();
if(inst_22600__$1){
var statearr_22670_22716 = state_22645__$1;
(statearr_22670_22716[(1)] = (13));

} else {
var statearr_22671_22717 = state_22645__$1;
(statearr_22671_22717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (9))){
var inst_22622 = (state_22645[(2)]);
var state_22645__$1 = state_22645;
var statearr_22672_22718 = state_22645__$1;
(statearr_22672_22718[(2)] = inst_22622);

(statearr_22672_22718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (5))){
var inst_22583 = cljs.core.deref.call(null,mults);
var inst_22584 = cljs.core.vals.call(null,inst_22583);
var inst_22585 = cljs.core.seq.call(null,inst_22584);
var inst_22586 = inst_22585;
var inst_22587 = null;
var inst_22588 = (0);
var inst_22589 = (0);
var state_22645__$1 = (function (){var statearr_22673 = state_22645;
(statearr_22673[(13)] = inst_22586);

(statearr_22673[(14)] = inst_22588);

(statearr_22673[(15)] = inst_22587);

(statearr_22673[(16)] = inst_22589);

return statearr_22673;
})();
var statearr_22674_22719 = state_22645__$1;
(statearr_22674_22719[(2)] = null);

(statearr_22674_22719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (14))){
var state_22645__$1 = state_22645;
var statearr_22678_22720 = state_22645__$1;
(statearr_22678_22720[(2)] = null);

(statearr_22678_22720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (16))){
var inst_22600 = (state_22645[(10)]);
var inst_22604 = cljs.core.chunk_first.call(null,inst_22600);
var inst_22605 = cljs.core.chunk_rest.call(null,inst_22600);
var inst_22606 = cljs.core.count.call(null,inst_22604);
var inst_22586 = inst_22605;
var inst_22587 = inst_22604;
var inst_22588 = inst_22606;
var inst_22589 = (0);
var state_22645__$1 = (function (){var statearr_22679 = state_22645;
(statearr_22679[(13)] = inst_22586);

(statearr_22679[(14)] = inst_22588);

(statearr_22679[(15)] = inst_22587);

(statearr_22679[(16)] = inst_22589);

return statearr_22679;
})();
var statearr_22680_22721 = state_22645__$1;
(statearr_22680_22721[(2)] = null);

(statearr_22680_22721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (10))){
var inst_22586 = (state_22645[(13)]);
var inst_22588 = (state_22645[(14)]);
var inst_22587 = (state_22645[(15)]);
var inst_22589 = (state_22645[(16)]);
var inst_22594 = cljs.core._nth.call(null,inst_22587,inst_22589);
var inst_22595 = cljs.core.async.muxch_STAR_.call(null,inst_22594);
var inst_22596 = cljs.core.async.close_BANG_.call(null,inst_22595);
var inst_22597 = (inst_22589 + (1));
var tmp22675 = inst_22586;
var tmp22676 = inst_22588;
var tmp22677 = inst_22587;
var inst_22586__$1 = tmp22675;
var inst_22587__$1 = tmp22677;
var inst_22588__$1 = tmp22676;
var inst_22589__$1 = inst_22597;
var state_22645__$1 = (function (){var statearr_22681 = state_22645;
(statearr_22681[(13)] = inst_22586__$1);

(statearr_22681[(14)] = inst_22588__$1);

(statearr_22681[(17)] = inst_22596);

(statearr_22681[(15)] = inst_22587__$1);

(statearr_22681[(16)] = inst_22589__$1);

return statearr_22681;
})();
var statearr_22682_22722 = state_22645__$1;
(statearr_22682_22722[(2)] = null);

(statearr_22682_22722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (18))){
var inst_22615 = (state_22645[(2)]);
var state_22645__$1 = state_22645;
var statearr_22683_22723 = state_22645__$1;
(statearr_22683_22723[(2)] = inst_22615);

(statearr_22683_22723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22646 === (8))){
var inst_22588 = (state_22645[(14)]);
var inst_22589 = (state_22645[(16)]);
var inst_22591 = (inst_22589 < inst_22588);
var inst_22592 = inst_22591;
var state_22645__$1 = state_22645;
if(cljs.core.truth_(inst_22592)){
var statearr_22684_22724 = state_22645__$1;
(statearr_22684_22724[(1)] = (10));

} else {
var statearr_22685_22725 = state_22645__$1;
(statearr_22685_22725[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___22697,mults,ensure_mult,p))
;
return ((function (switch__20686__auto__,c__20798__auto___22697,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_22689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22689[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_22689[(1)] = (1));

return statearr_22689;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_22645){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_22645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e22690){if((e22690 instanceof Object)){
var ex__20690__auto__ = e22690;
var statearr_22691_22726 = state_22645;
(statearr_22691_22726[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22727 = state_22645;
state_22645 = G__22727;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_22645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_22645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___22697,mults,ensure_mult,p))
})();
var state__20800__auto__ = (function (){var statearr_22692 = f__20799__auto__.call(null);
(statearr_22692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___22697);

return statearr_22692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___22697,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22728 = [];
var len__17899__auto___22731 = arguments.length;
var i__17900__auto___22732 = (0);
while(true){
if((i__17900__auto___22732 < len__17899__auto___22731)){
args22728.push((arguments[i__17900__auto___22732]));

var G__22733 = (i__17900__auto___22732 + (1));
i__17900__auto___22732 = G__22733;
continue;
} else {
}
break;
}

var G__22730 = args22728.length;
switch (G__22730) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22728.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22735 = [];
var len__17899__auto___22738 = arguments.length;
var i__17900__auto___22739 = (0);
while(true){
if((i__17900__auto___22739 < len__17899__auto___22738)){
args22735.push((arguments[i__17900__auto___22739]));

var G__22740 = (i__17900__auto___22739 + (1));
i__17900__auto___22739 = G__22740;
continue;
} else {
}
break;
}

var G__22737 = args22735.length;
switch (G__22737) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22735.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22742 = [];
var len__17899__auto___22813 = arguments.length;
var i__17900__auto___22814 = (0);
while(true){
if((i__17900__auto___22814 < len__17899__auto___22813)){
args22742.push((arguments[i__17900__auto___22814]));

var G__22815 = (i__17900__auto___22814 + (1));
i__17900__auto___22814 = G__22815;
continue;
} else {
}
break;
}

var G__22744 = args22742.length;
switch (G__22744) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22742.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20798__auto___22817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___22817,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___22817,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22783){
var state_val_22784 = (state_22783[(1)]);
if((state_val_22784 === (7))){
var state_22783__$1 = state_22783;
var statearr_22785_22818 = state_22783__$1;
(statearr_22785_22818[(2)] = null);

(statearr_22785_22818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (1))){
var state_22783__$1 = state_22783;
var statearr_22786_22819 = state_22783__$1;
(statearr_22786_22819[(2)] = null);

(statearr_22786_22819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (4))){
var inst_22747 = (state_22783[(7)]);
var inst_22749 = (inst_22747 < cnt);
var state_22783__$1 = state_22783;
if(cljs.core.truth_(inst_22749)){
var statearr_22787_22820 = state_22783__$1;
(statearr_22787_22820[(1)] = (6));

} else {
var statearr_22788_22821 = state_22783__$1;
(statearr_22788_22821[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (15))){
var inst_22779 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22789_22822 = state_22783__$1;
(statearr_22789_22822[(2)] = inst_22779);

(statearr_22789_22822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (13))){
var inst_22772 = cljs.core.async.close_BANG_.call(null,out);
var state_22783__$1 = state_22783;
var statearr_22790_22823 = state_22783__$1;
(statearr_22790_22823[(2)] = inst_22772);

(statearr_22790_22823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (6))){
var state_22783__$1 = state_22783;
var statearr_22791_22824 = state_22783__$1;
(statearr_22791_22824[(2)] = null);

(statearr_22791_22824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (3))){
var inst_22781 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22783__$1,inst_22781);
} else {
if((state_val_22784 === (12))){
var inst_22769 = (state_22783[(8)]);
var inst_22769__$1 = (state_22783[(2)]);
var inst_22770 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22769__$1);
var state_22783__$1 = (function (){var statearr_22792 = state_22783;
(statearr_22792[(8)] = inst_22769__$1);

return statearr_22792;
})();
if(cljs.core.truth_(inst_22770)){
var statearr_22793_22825 = state_22783__$1;
(statearr_22793_22825[(1)] = (13));

} else {
var statearr_22794_22826 = state_22783__$1;
(statearr_22794_22826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (2))){
var inst_22746 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22747 = (0);
var state_22783__$1 = (function (){var statearr_22795 = state_22783;
(statearr_22795[(7)] = inst_22747);

(statearr_22795[(9)] = inst_22746);

return statearr_22795;
})();
var statearr_22796_22827 = state_22783__$1;
(statearr_22796_22827[(2)] = null);

(statearr_22796_22827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (11))){
var inst_22747 = (state_22783[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22783,(10),Object,null,(9));
var inst_22756 = chs__$1.call(null,inst_22747);
var inst_22757 = done.call(null,inst_22747);
var inst_22758 = cljs.core.async.take_BANG_.call(null,inst_22756,inst_22757);
var state_22783__$1 = state_22783;
var statearr_22797_22828 = state_22783__$1;
(statearr_22797_22828[(2)] = inst_22758);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (9))){
var inst_22747 = (state_22783[(7)]);
var inst_22760 = (state_22783[(2)]);
var inst_22761 = (inst_22747 + (1));
var inst_22747__$1 = inst_22761;
var state_22783__$1 = (function (){var statearr_22798 = state_22783;
(statearr_22798[(7)] = inst_22747__$1);

(statearr_22798[(10)] = inst_22760);

return statearr_22798;
})();
var statearr_22799_22829 = state_22783__$1;
(statearr_22799_22829[(2)] = null);

(statearr_22799_22829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (5))){
var inst_22767 = (state_22783[(2)]);
var state_22783__$1 = (function (){var statearr_22800 = state_22783;
(statearr_22800[(11)] = inst_22767);

return statearr_22800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22783__$1,(12),dchan);
} else {
if((state_val_22784 === (14))){
var inst_22769 = (state_22783[(8)]);
var inst_22774 = cljs.core.apply.call(null,f,inst_22769);
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22783__$1,(16),out,inst_22774);
} else {
if((state_val_22784 === (16))){
var inst_22776 = (state_22783[(2)]);
var state_22783__$1 = (function (){var statearr_22801 = state_22783;
(statearr_22801[(12)] = inst_22776);

return statearr_22801;
})();
var statearr_22802_22830 = state_22783__$1;
(statearr_22802_22830[(2)] = null);

(statearr_22802_22830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (10))){
var inst_22751 = (state_22783[(2)]);
var inst_22752 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22783__$1 = (function (){var statearr_22803 = state_22783;
(statearr_22803[(13)] = inst_22751);

return statearr_22803;
})();
var statearr_22804_22831 = state_22783__$1;
(statearr_22804_22831[(2)] = inst_22752);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (8))){
var inst_22765 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22805_22832 = state_22783__$1;
(statearr_22805_22832[(2)] = inst_22765);

(statearr_22805_22832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___22817,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20686__auto__,c__20798__auto___22817,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_22809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22809[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_22809[(1)] = (1));

return statearr_22809;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_22783){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_22783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e22810){if((e22810 instanceof Object)){
var ex__20690__auto__ = e22810;
var statearr_22811_22833 = state_22783;
(statearr_22811_22833[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22834 = state_22783;
state_22783 = G__22834;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_22783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_22783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___22817,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20800__auto__ = (function (){var statearr_22812 = f__20799__auto__.call(null);
(statearr_22812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___22817);

return statearr_22812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___22817,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22836 = [];
var len__17899__auto___22892 = arguments.length;
var i__17900__auto___22893 = (0);
while(true){
if((i__17900__auto___22893 < len__17899__auto___22892)){
args22836.push((arguments[i__17900__auto___22893]));

var G__22894 = (i__17900__auto___22893 + (1));
i__17900__auto___22893 = G__22894;
continue;
} else {
}
break;
}

var G__22838 = args22836.length;
switch (G__22838) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22836.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20798__auto___22896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___22896,out){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___22896,out){
return (function (state_22868){
var state_val_22869 = (state_22868[(1)]);
if((state_val_22869 === (7))){
var inst_22847 = (state_22868[(7)]);
var inst_22848 = (state_22868[(8)]);
var inst_22847__$1 = (state_22868[(2)]);
var inst_22848__$1 = cljs.core.nth.call(null,inst_22847__$1,(0),null);
var inst_22849 = cljs.core.nth.call(null,inst_22847__$1,(1),null);
var inst_22850 = (inst_22848__$1 == null);
var state_22868__$1 = (function (){var statearr_22870 = state_22868;
(statearr_22870[(7)] = inst_22847__$1);

(statearr_22870[(8)] = inst_22848__$1);

(statearr_22870[(9)] = inst_22849);

return statearr_22870;
})();
if(cljs.core.truth_(inst_22850)){
var statearr_22871_22897 = state_22868__$1;
(statearr_22871_22897[(1)] = (8));

} else {
var statearr_22872_22898 = state_22868__$1;
(statearr_22872_22898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (1))){
var inst_22839 = cljs.core.vec.call(null,chs);
var inst_22840 = inst_22839;
var state_22868__$1 = (function (){var statearr_22873 = state_22868;
(statearr_22873[(10)] = inst_22840);

return statearr_22873;
})();
var statearr_22874_22899 = state_22868__$1;
(statearr_22874_22899[(2)] = null);

(statearr_22874_22899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (4))){
var inst_22840 = (state_22868[(10)]);
var state_22868__$1 = state_22868;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22868__$1,(7),inst_22840);
} else {
if((state_val_22869 === (6))){
var inst_22864 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22875_22900 = state_22868__$1;
(statearr_22875_22900[(2)] = inst_22864);

(statearr_22875_22900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (3))){
var inst_22866 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22868__$1,inst_22866);
} else {
if((state_val_22869 === (2))){
var inst_22840 = (state_22868[(10)]);
var inst_22842 = cljs.core.count.call(null,inst_22840);
var inst_22843 = (inst_22842 > (0));
var state_22868__$1 = state_22868;
if(cljs.core.truth_(inst_22843)){
var statearr_22877_22901 = state_22868__$1;
(statearr_22877_22901[(1)] = (4));

} else {
var statearr_22878_22902 = state_22868__$1;
(statearr_22878_22902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (11))){
var inst_22840 = (state_22868[(10)]);
var inst_22857 = (state_22868[(2)]);
var tmp22876 = inst_22840;
var inst_22840__$1 = tmp22876;
var state_22868__$1 = (function (){var statearr_22879 = state_22868;
(statearr_22879[(10)] = inst_22840__$1);

(statearr_22879[(11)] = inst_22857);

return statearr_22879;
})();
var statearr_22880_22903 = state_22868__$1;
(statearr_22880_22903[(2)] = null);

(statearr_22880_22903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (9))){
var inst_22848 = (state_22868[(8)]);
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22868__$1,(11),out,inst_22848);
} else {
if((state_val_22869 === (5))){
var inst_22862 = cljs.core.async.close_BANG_.call(null,out);
var state_22868__$1 = state_22868;
var statearr_22881_22904 = state_22868__$1;
(statearr_22881_22904[(2)] = inst_22862);

(statearr_22881_22904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (10))){
var inst_22860 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22882_22905 = state_22868__$1;
(statearr_22882_22905[(2)] = inst_22860);

(statearr_22882_22905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (8))){
var inst_22847 = (state_22868[(7)]);
var inst_22840 = (state_22868[(10)]);
var inst_22848 = (state_22868[(8)]);
var inst_22849 = (state_22868[(9)]);
var inst_22852 = (function (){var cs = inst_22840;
var vec__22845 = inst_22847;
var v = inst_22848;
var c = inst_22849;
return ((function (cs,vec__22845,v,c,inst_22847,inst_22840,inst_22848,inst_22849,state_val_22869,c__20798__auto___22896,out){
return (function (p1__22835_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22835_SHARP_);
});
;})(cs,vec__22845,v,c,inst_22847,inst_22840,inst_22848,inst_22849,state_val_22869,c__20798__auto___22896,out))
})();
var inst_22853 = cljs.core.filterv.call(null,inst_22852,inst_22840);
var inst_22840__$1 = inst_22853;
var state_22868__$1 = (function (){var statearr_22883 = state_22868;
(statearr_22883[(10)] = inst_22840__$1);

return statearr_22883;
})();
var statearr_22884_22906 = state_22868__$1;
(statearr_22884_22906[(2)] = null);

(statearr_22884_22906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___22896,out))
;
return ((function (switch__20686__auto__,c__20798__auto___22896,out){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_22888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22888[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_22888[(1)] = (1));

return statearr_22888;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_22868){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_22868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e22889){if((e22889 instanceof Object)){
var ex__20690__auto__ = e22889;
var statearr_22890_22907 = state_22868;
(statearr_22890_22907[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22908 = state_22868;
state_22868 = G__22908;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_22868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_22868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___22896,out))
})();
var state__20800__auto__ = (function (){var statearr_22891 = f__20799__auto__.call(null);
(statearr_22891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___22896);

return statearr_22891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___22896,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22909 = [];
var len__17899__auto___22958 = arguments.length;
var i__17900__auto___22959 = (0);
while(true){
if((i__17900__auto___22959 < len__17899__auto___22958)){
args22909.push((arguments[i__17900__auto___22959]));

var G__22960 = (i__17900__auto___22959 + (1));
i__17900__auto___22959 = G__22960;
continue;
} else {
}
break;
}

var G__22911 = args22909.length;
switch (G__22911) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22909.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20798__auto___22962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___22962,out){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___22962,out){
return (function (state_22935){
var state_val_22936 = (state_22935[(1)]);
if((state_val_22936 === (7))){
var inst_22917 = (state_22935[(7)]);
var inst_22917__$1 = (state_22935[(2)]);
var inst_22918 = (inst_22917__$1 == null);
var inst_22919 = cljs.core.not.call(null,inst_22918);
var state_22935__$1 = (function (){var statearr_22937 = state_22935;
(statearr_22937[(7)] = inst_22917__$1);

return statearr_22937;
})();
if(inst_22919){
var statearr_22938_22963 = state_22935__$1;
(statearr_22938_22963[(1)] = (8));

} else {
var statearr_22939_22964 = state_22935__$1;
(statearr_22939_22964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (1))){
var inst_22912 = (0);
var state_22935__$1 = (function (){var statearr_22940 = state_22935;
(statearr_22940[(8)] = inst_22912);

return statearr_22940;
})();
var statearr_22941_22965 = state_22935__$1;
(statearr_22941_22965[(2)] = null);

(statearr_22941_22965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (4))){
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22935__$1,(7),ch);
} else {
if((state_val_22936 === (6))){
var inst_22930 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22942_22966 = state_22935__$1;
(statearr_22942_22966[(2)] = inst_22930);

(statearr_22942_22966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (3))){
var inst_22932 = (state_22935[(2)]);
var inst_22933 = cljs.core.async.close_BANG_.call(null,out);
var state_22935__$1 = (function (){var statearr_22943 = state_22935;
(statearr_22943[(9)] = inst_22932);

return statearr_22943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22935__$1,inst_22933);
} else {
if((state_val_22936 === (2))){
var inst_22912 = (state_22935[(8)]);
var inst_22914 = (inst_22912 < n);
var state_22935__$1 = state_22935;
if(cljs.core.truth_(inst_22914)){
var statearr_22944_22967 = state_22935__$1;
(statearr_22944_22967[(1)] = (4));

} else {
var statearr_22945_22968 = state_22935__$1;
(statearr_22945_22968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (11))){
var inst_22912 = (state_22935[(8)]);
var inst_22922 = (state_22935[(2)]);
var inst_22923 = (inst_22912 + (1));
var inst_22912__$1 = inst_22923;
var state_22935__$1 = (function (){var statearr_22946 = state_22935;
(statearr_22946[(8)] = inst_22912__$1);

(statearr_22946[(10)] = inst_22922);

return statearr_22946;
})();
var statearr_22947_22969 = state_22935__$1;
(statearr_22947_22969[(2)] = null);

(statearr_22947_22969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (9))){
var state_22935__$1 = state_22935;
var statearr_22948_22970 = state_22935__$1;
(statearr_22948_22970[(2)] = null);

(statearr_22948_22970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (5))){
var state_22935__$1 = state_22935;
var statearr_22949_22971 = state_22935__$1;
(statearr_22949_22971[(2)] = null);

(statearr_22949_22971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (10))){
var inst_22927 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22950_22972 = state_22935__$1;
(statearr_22950_22972[(2)] = inst_22927);

(statearr_22950_22972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (8))){
var inst_22917 = (state_22935[(7)]);
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22935__$1,(11),out,inst_22917);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___22962,out))
;
return ((function (switch__20686__auto__,c__20798__auto___22962,out){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_22954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22954[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_22954[(1)] = (1));

return statearr_22954;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_22935){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_22935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e22955){if((e22955 instanceof Object)){
var ex__20690__auto__ = e22955;
var statearr_22956_22973 = state_22935;
(statearr_22956_22973[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22974 = state_22935;
state_22935 = G__22974;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_22935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_22935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___22962,out))
})();
var state__20800__auto__ = (function (){var statearr_22957 = f__20799__auto__.call(null);
(statearr_22957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___22962);

return statearr_22957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___22962,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22982 = (function (map_LT_,f,ch,meta22983){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22983 = meta22983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22984,meta22983__$1){
var self__ = this;
var _22984__$1 = this;
return (new cljs.core.async.t_cljs$core$async22982(self__.map_LT_,self__.f,self__.ch,meta22983__$1));
});

cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22984){
var self__ = this;
var _22984__$1 = this;
return self__.meta22983;
});

cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22985 = (function (map_LT_,f,ch,meta22983,_,fn1,meta22986){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22983 = meta22983;
this._ = _;
this.fn1 = fn1;
this.meta22986 = meta22986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22987,meta22986__$1){
var self__ = this;
var _22987__$1 = this;
return (new cljs.core.async.t_cljs$core$async22985(self__.map_LT_,self__.f,self__.ch,self__.meta22983,self__._,self__.fn1,meta22986__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22987){
var self__ = this;
var _22987__$1 = this;
return self__.meta22986;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22975_SHARP_){
return f1.call(null,(((p1__22975_SHARP_ == null))?null:self__.f.call(null,p1__22975_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22985.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22983","meta22983",-2136539694,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22982","cljs.core.async/t_cljs$core$async22982",-1622609386,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22986","meta22986",698785903,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22985";

cljs.core.async.t_cljs$core$async22985.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22985");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22985 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22985(map_LT___$1,f__$1,ch__$1,meta22983__$1,___$2,fn1__$1,meta22986){
return (new cljs.core.async.t_cljs$core$async22985(map_LT___$1,f__$1,ch__$1,meta22983__$1,___$2,fn1__$1,meta22986));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22985(self__.map_LT_,self__.f,self__.ch,self__.meta22983,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16829__auto__ = ret;
if(cljs.core.truth_(and__16829__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16829__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22983","meta22983",-2136539694,null)], null);
});

cljs.core.async.t_cljs$core$async22982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22982";

cljs.core.async.t_cljs$core$async22982.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22982");
});

cljs.core.async.__GT_t_cljs$core$async22982 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22982(map_LT___$1,f__$1,ch__$1,meta22983){
return (new cljs.core.async.t_cljs$core$async22982(map_LT___$1,f__$1,ch__$1,meta22983));
});

}

return (new cljs.core.async.t_cljs$core$async22982(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22991 = (function (map_GT_,f,ch,meta22992){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22992 = meta22992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22993,meta22992__$1){
var self__ = this;
var _22993__$1 = this;
return (new cljs.core.async.t_cljs$core$async22991(self__.map_GT_,self__.f,self__.ch,meta22992__$1));
});

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22993){
var self__ = this;
var _22993__$1 = this;
return self__.meta22992;
});

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22992","meta22992",-701704612,null)], null);
});

cljs.core.async.t_cljs$core$async22991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22991";

cljs.core.async.t_cljs$core$async22991.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22991");
});

cljs.core.async.__GT_t_cljs$core$async22991 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22991(map_GT___$1,f__$1,ch__$1,meta22992){
return (new cljs.core.async.t_cljs$core$async22991(map_GT___$1,f__$1,ch__$1,meta22992));
});

}

return (new cljs.core.async.t_cljs$core$async22991(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22997 = (function (filter_GT_,p,ch,meta22998){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22998 = meta22998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22999,meta22998__$1){
var self__ = this;
var _22999__$1 = this;
return (new cljs.core.async.t_cljs$core$async22997(self__.filter_GT_,self__.p,self__.ch,meta22998__$1));
});

cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22999){
var self__ = this;
var _22999__$1 = this;
return self__.meta22998;
});

cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22998","meta22998",800006780,null)], null);
});

cljs.core.async.t_cljs$core$async22997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22997";

cljs.core.async.t_cljs$core$async22997.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22997");
});

cljs.core.async.__GT_t_cljs$core$async22997 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22997(filter_GT___$1,p__$1,ch__$1,meta22998){
return (new cljs.core.async.t_cljs$core$async22997(filter_GT___$1,p__$1,ch__$1,meta22998));
});

}

return (new cljs.core.async.t_cljs$core$async22997(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23000 = [];
var len__17899__auto___23044 = arguments.length;
var i__17900__auto___23045 = (0);
while(true){
if((i__17900__auto___23045 < len__17899__auto___23044)){
args23000.push((arguments[i__17900__auto___23045]));

var G__23046 = (i__17900__auto___23045 + (1));
i__17900__auto___23045 = G__23046;
continue;
} else {
}
break;
}

var G__23002 = args23000.length;
switch (G__23002) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23000.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20798__auto___23048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___23048,out){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___23048,out){
return (function (state_23023){
var state_val_23024 = (state_23023[(1)]);
if((state_val_23024 === (7))){
var inst_23019 = (state_23023[(2)]);
var state_23023__$1 = state_23023;
var statearr_23025_23049 = state_23023__$1;
(statearr_23025_23049[(2)] = inst_23019);

(statearr_23025_23049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23024 === (1))){
var state_23023__$1 = state_23023;
var statearr_23026_23050 = state_23023__$1;
(statearr_23026_23050[(2)] = null);

(statearr_23026_23050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23024 === (4))){
var inst_23005 = (state_23023[(7)]);
var inst_23005__$1 = (state_23023[(2)]);
var inst_23006 = (inst_23005__$1 == null);
var state_23023__$1 = (function (){var statearr_23027 = state_23023;
(statearr_23027[(7)] = inst_23005__$1);

return statearr_23027;
})();
if(cljs.core.truth_(inst_23006)){
var statearr_23028_23051 = state_23023__$1;
(statearr_23028_23051[(1)] = (5));

} else {
var statearr_23029_23052 = state_23023__$1;
(statearr_23029_23052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23024 === (6))){
var inst_23005 = (state_23023[(7)]);
var inst_23010 = p.call(null,inst_23005);
var state_23023__$1 = state_23023;
if(cljs.core.truth_(inst_23010)){
var statearr_23030_23053 = state_23023__$1;
(statearr_23030_23053[(1)] = (8));

} else {
var statearr_23031_23054 = state_23023__$1;
(statearr_23031_23054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23024 === (3))){
var inst_23021 = (state_23023[(2)]);
var state_23023__$1 = state_23023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23023__$1,inst_23021);
} else {
if((state_val_23024 === (2))){
var state_23023__$1 = state_23023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23023__$1,(4),ch);
} else {
if((state_val_23024 === (11))){
var inst_23013 = (state_23023[(2)]);
var state_23023__$1 = state_23023;
var statearr_23032_23055 = state_23023__$1;
(statearr_23032_23055[(2)] = inst_23013);

(statearr_23032_23055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23024 === (9))){
var state_23023__$1 = state_23023;
var statearr_23033_23056 = state_23023__$1;
(statearr_23033_23056[(2)] = null);

(statearr_23033_23056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23024 === (5))){
var inst_23008 = cljs.core.async.close_BANG_.call(null,out);
var state_23023__$1 = state_23023;
var statearr_23034_23057 = state_23023__$1;
(statearr_23034_23057[(2)] = inst_23008);

(statearr_23034_23057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23024 === (10))){
var inst_23016 = (state_23023[(2)]);
var state_23023__$1 = (function (){var statearr_23035 = state_23023;
(statearr_23035[(8)] = inst_23016);

return statearr_23035;
})();
var statearr_23036_23058 = state_23023__$1;
(statearr_23036_23058[(2)] = null);

(statearr_23036_23058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23024 === (8))){
var inst_23005 = (state_23023[(7)]);
var state_23023__$1 = state_23023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23023__$1,(11),out,inst_23005);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___23048,out))
;
return ((function (switch__20686__auto__,c__20798__auto___23048,out){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_23040 = [null,null,null,null,null,null,null,null,null];
(statearr_23040[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_23040[(1)] = (1));

return statearr_23040;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_23023){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_23023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e23041){if((e23041 instanceof Object)){
var ex__20690__auto__ = e23041;
var statearr_23042_23059 = state_23023;
(statearr_23042_23059[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23060 = state_23023;
state_23023 = G__23060;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_23023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_23023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___23048,out))
})();
var state__20800__auto__ = (function (){var statearr_23043 = f__20799__auto__.call(null);
(statearr_23043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___23048);

return statearr_23043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___23048,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23061 = [];
var len__17899__auto___23064 = arguments.length;
var i__17900__auto___23065 = (0);
while(true){
if((i__17900__auto___23065 < len__17899__auto___23064)){
args23061.push((arguments[i__17900__auto___23065]));

var G__23066 = (i__17900__auto___23065 + (1));
i__17900__auto___23065 = G__23066;
continue;
} else {
}
break;
}

var G__23063 = args23061.length;
switch (G__23063) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23061.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto__){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto__){
return (function (state_23233){
var state_val_23234 = (state_23233[(1)]);
if((state_val_23234 === (7))){
var inst_23229 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
var statearr_23235_23276 = state_23233__$1;
(statearr_23235_23276[(2)] = inst_23229);

(statearr_23235_23276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (20))){
var inst_23199 = (state_23233[(7)]);
var inst_23210 = (state_23233[(2)]);
var inst_23211 = cljs.core.next.call(null,inst_23199);
var inst_23185 = inst_23211;
var inst_23186 = null;
var inst_23187 = (0);
var inst_23188 = (0);
var state_23233__$1 = (function (){var statearr_23236 = state_23233;
(statearr_23236[(8)] = inst_23187);

(statearr_23236[(9)] = inst_23210);

(statearr_23236[(10)] = inst_23186);

(statearr_23236[(11)] = inst_23185);

(statearr_23236[(12)] = inst_23188);

return statearr_23236;
})();
var statearr_23237_23277 = state_23233__$1;
(statearr_23237_23277[(2)] = null);

(statearr_23237_23277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (1))){
var state_23233__$1 = state_23233;
var statearr_23238_23278 = state_23233__$1;
(statearr_23238_23278[(2)] = null);

(statearr_23238_23278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (4))){
var inst_23174 = (state_23233[(13)]);
var inst_23174__$1 = (state_23233[(2)]);
var inst_23175 = (inst_23174__$1 == null);
var state_23233__$1 = (function (){var statearr_23239 = state_23233;
(statearr_23239[(13)] = inst_23174__$1);

return statearr_23239;
})();
if(cljs.core.truth_(inst_23175)){
var statearr_23240_23279 = state_23233__$1;
(statearr_23240_23279[(1)] = (5));

} else {
var statearr_23241_23280 = state_23233__$1;
(statearr_23241_23280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (15))){
var state_23233__$1 = state_23233;
var statearr_23245_23281 = state_23233__$1;
(statearr_23245_23281[(2)] = null);

(statearr_23245_23281[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (21))){
var state_23233__$1 = state_23233;
var statearr_23246_23282 = state_23233__$1;
(statearr_23246_23282[(2)] = null);

(statearr_23246_23282[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (13))){
var inst_23187 = (state_23233[(8)]);
var inst_23186 = (state_23233[(10)]);
var inst_23185 = (state_23233[(11)]);
var inst_23188 = (state_23233[(12)]);
var inst_23195 = (state_23233[(2)]);
var inst_23196 = (inst_23188 + (1));
var tmp23242 = inst_23187;
var tmp23243 = inst_23186;
var tmp23244 = inst_23185;
var inst_23185__$1 = tmp23244;
var inst_23186__$1 = tmp23243;
var inst_23187__$1 = tmp23242;
var inst_23188__$1 = inst_23196;
var state_23233__$1 = (function (){var statearr_23247 = state_23233;
(statearr_23247[(8)] = inst_23187__$1);

(statearr_23247[(14)] = inst_23195);

(statearr_23247[(10)] = inst_23186__$1);

(statearr_23247[(11)] = inst_23185__$1);

(statearr_23247[(12)] = inst_23188__$1);

return statearr_23247;
})();
var statearr_23248_23283 = state_23233__$1;
(statearr_23248_23283[(2)] = null);

(statearr_23248_23283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (22))){
var state_23233__$1 = state_23233;
var statearr_23249_23284 = state_23233__$1;
(statearr_23249_23284[(2)] = null);

(statearr_23249_23284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (6))){
var inst_23174 = (state_23233[(13)]);
var inst_23183 = f.call(null,inst_23174);
var inst_23184 = cljs.core.seq.call(null,inst_23183);
var inst_23185 = inst_23184;
var inst_23186 = null;
var inst_23187 = (0);
var inst_23188 = (0);
var state_23233__$1 = (function (){var statearr_23250 = state_23233;
(statearr_23250[(8)] = inst_23187);

(statearr_23250[(10)] = inst_23186);

(statearr_23250[(11)] = inst_23185);

(statearr_23250[(12)] = inst_23188);

return statearr_23250;
})();
var statearr_23251_23285 = state_23233__$1;
(statearr_23251_23285[(2)] = null);

(statearr_23251_23285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (17))){
var inst_23199 = (state_23233[(7)]);
var inst_23203 = cljs.core.chunk_first.call(null,inst_23199);
var inst_23204 = cljs.core.chunk_rest.call(null,inst_23199);
var inst_23205 = cljs.core.count.call(null,inst_23203);
var inst_23185 = inst_23204;
var inst_23186 = inst_23203;
var inst_23187 = inst_23205;
var inst_23188 = (0);
var state_23233__$1 = (function (){var statearr_23252 = state_23233;
(statearr_23252[(8)] = inst_23187);

(statearr_23252[(10)] = inst_23186);

(statearr_23252[(11)] = inst_23185);

(statearr_23252[(12)] = inst_23188);

return statearr_23252;
})();
var statearr_23253_23286 = state_23233__$1;
(statearr_23253_23286[(2)] = null);

(statearr_23253_23286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (3))){
var inst_23231 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23233__$1,inst_23231);
} else {
if((state_val_23234 === (12))){
var inst_23219 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
var statearr_23254_23287 = state_23233__$1;
(statearr_23254_23287[(2)] = inst_23219);

(statearr_23254_23287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (2))){
var state_23233__$1 = state_23233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23233__$1,(4),in$);
} else {
if((state_val_23234 === (23))){
var inst_23227 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
var statearr_23255_23288 = state_23233__$1;
(statearr_23255_23288[(2)] = inst_23227);

(statearr_23255_23288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (19))){
var inst_23214 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
var statearr_23256_23289 = state_23233__$1;
(statearr_23256_23289[(2)] = inst_23214);

(statearr_23256_23289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (11))){
var inst_23199 = (state_23233[(7)]);
var inst_23185 = (state_23233[(11)]);
var inst_23199__$1 = cljs.core.seq.call(null,inst_23185);
var state_23233__$1 = (function (){var statearr_23257 = state_23233;
(statearr_23257[(7)] = inst_23199__$1);

return statearr_23257;
})();
if(inst_23199__$1){
var statearr_23258_23290 = state_23233__$1;
(statearr_23258_23290[(1)] = (14));

} else {
var statearr_23259_23291 = state_23233__$1;
(statearr_23259_23291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (9))){
var inst_23221 = (state_23233[(2)]);
var inst_23222 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23233__$1 = (function (){var statearr_23260 = state_23233;
(statearr_23260[(15)] = inst_23221);

return statearr_23260;
})();
if(cljs.core.truth_(inst_23222)){
var statearr_23261_23292 = state_23233__$1;
(statearr_23261_23292[(1)] = (21));

} else {
var statearr_23262_23293 = state_23233__$1;
(statearr_23262_23293[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (5))){
var inst_23177 = cljs.core.async.close_BANG_.call(null,out);
var state_23233__$1 = state_23233;
var statearr_23263_23294 = state_23233__$1;
(statearr_23263_23294[(2)] = inst_23177);

(statearr_23263_23294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (14))){
var inst_23199 = (state_23233[(7)]);
var inst_23201 = cljs.core.chunked_seq_QMARK_.call(null,inst_23199);
var state_23233__$1 = state_23233;
if(inst_23201){
var statearr_23264_23295 = state_23233__$1;
(statearr_23264_23295[(1)] = (17));

} else {
var statearr_23265_23296 = state_23233__$1;
(statearr_23265_23296[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (16))){
var inst_23217 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
var statearr_23266_23297 = state_23233__$1;
(statearr_23266_23297[(2)] = inst_23217);

(statearr_23266_23297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (10))){
var inst_23186 = (state_23233[(10)]);
var inst_23188 = (state_23233[(12)]);
var inst_23193 = cljs.core._nth.call(null,inst_23186,inst_23188);
var state_23233__$1 = state_23233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23233__$1,(13),out,inst_23193);
} else {
if((state_val_23234 === (18))){
var inst_23199 = (state_23233[(7)]);
var inst_23208 = cljs.core.first.call(null,inst_23199);
var state_23233__$1 = state_23233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23233__$1,(20),out,inst_23208);
} else {
if((state_val_23234 === (8))){
var inst_23187 = (state_23233[(8)]);
var inst_23188 = (state_23233[(12)]);
var inst_23190 = (inst_23188 < inst_23187);
var inst_23191 = inst_23190;
var state_23233__$1 = state_23233;
if(cljs.core.truth_(inst_23191)){
var statearr_23267_23298 = state_23233__$1;
(statearr_23267_23298[(1)] = (10));

} else {
var statearr_23268_23299 = state_23233__$1;
(statearr_23268_23299[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto__))
;
return ((function (switch__20686__auto__,c__20798__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20687__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20687__auto____0 = (function (){
var statearr_23272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23272[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20687__auto__);

(statearr_23272[(1)] = (1));

return statearr_23272;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20687__auto____1 = (function (state_23233){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_23233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e23273){if((e23273 instanceof Object)){
var ex__20690__auto__ = e23273;
var statearr_23274_23300 = state_23233;
(statearr_23274_23300[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23301 = state_23233;
state_23233 = G__23301;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20687__auto__ = function(state_23233){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20687__auto____1.call(this,state_23233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20687__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20687__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto__))
})();
var state__20800__auto__ = (function (){var statearr_23275 = f__20799__auto__.call(null);
(statearr_23275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto__);

return statearr_23275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto__))
);

return c__20798__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23302 = [];
var len__17899__auto___23305 = arguments.length;
var i__17900__auto___23306 = (0);
while(true){
if((i__17900__auto___23306 < len__17899__auto___23305)){
args23302.push((arguments[i__17900__auto___23306]));

var G__23307 = (i__17900__auto___23306 + (1));
i__17900__auto___23306 = G__23307;
continue;
} else {
}
break;
}

var G__23304 = args23302.length;
switch (G__23304) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23302.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23309 = [];
var len__17899__auto___23312 = arguments.length;
var i__17900__auto___23313 = (0);
while(true){
if((i__17900__auto___23313 < len__17899__auto___23312)){
args23309.push((arguments[i__17900__auto___23313]));

var G__23314 = (i__17900__auto___23313 + (1));
i__17900__auto___23313 = G__23314;
continue;
} else {
}
break;
}

var G__23311 = args23309.length;
switch (G__23311) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23309.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23316 = [];
var len__17899__auto___23367 = arguments.length;
var i__17900__auto___23368 = (0);
while(true){
if((i__17900__auto___23368 < len__17899__auto___23367)){
args23316.push((arguments[i__17900__auto___23368]));

var G__23369 = (i__17900__auto___23368 + (1));
i__17900__auto___23368 = G__23369;
continue;
} else {
}
break;
}

var G__23318 = args23316.length;
switch (G__23318) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23316.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20798__auto___23371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___23371,out){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___23371,out){
return (function (state_23342){
var state_val_23343 = (state_23342[(1)]);
if((state_val_23343 === (7))){
var inst_23337 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23344_23372 = state_23342__$1;
(statearr_23344_23372[(2)] = inst_23337);

(statearr_23344_23372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (1))){
var inst_23319 = null;
var state_23342__$1 = (function (){var statearr_23345 = state_23342;
(statearr_23345[(7)] = inst_23319);

return statearr_23345;
})();
var statearr_23346_23373 = state_23342__$1;
(statearr_23346_23373[(2)] = null);

(statearr_23346_23373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (4))){
var inst_23322 = (state_23342[(8)]);
var inst_23322__$1 = (state_23342[(2)]);
var inst_23323 = (inst_23322__$1 == null);
var inst_23324 = cljs.core.not.call(null,inst_23323);
var state_23342__$1 = (function (){var statearr_23347 = state_23342;
(statearr_23347[(8)] = inst_23322__$1);

return statearr_23347;
})();
if(inst_23324){
var statearr_23348_23374 = state_23342__$1;
(statearr_23348_23374[(1)] = (5));

} else {
var statearr_23349_23375 = state_23342__$1;
(statearr_23349_23375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (6))){
var state_23342__$1 = state_23342;
var statearr_23350_23376 = state_23342__$1;
(statearr_23350_23376[(2)] = null);

(statearr_23350_23376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (3))){
var inst_23339 = (state_23342[(2)]);
var inst_23340 = cljs.core.async.close_BANG_.call(null,out);
var state_23342__$1 = (function (){var statearr_23351 = state_23342;
(statearr_23351[(9)] = inst_23339);

return statearr_23351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23342__$1,inst_23340);
} else {
if((state_val_23343 === (2))){
var state_23342__$1 = state_23342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23342__$1,(4),ch);
} else {
if((state_val_23343 === (11))){
var inst_23322 = (state_23342[(8)]);
var inst_23331 = (state_23342[(2)]);
var inst_23319 = inst_23322;
var state_23342__$1 = (function (){var statearr_23352 = state_23342;
(statearr_23352[(10)] = inst_23331);

(statearr_23352[(7)] = inst_23319);

return statearr_23352;
})();
var statearr_23353_23377 = state_23342__$1;
(statearr_23353_23377[(2)] = null);

(statearr_23353_23377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (9))){
var inst_23322 = (state_23342[(8)]);
var state_23342__$1 = state_23342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23342__$1,(11),out,inst_23322);
} else {
if((state_val_23343 === (5))){
var inst_23322 = (state_23342[(8)]);
var inst_23319 = (state_23342[(7)]);
var inst_23326 = cljs.core._EQ_.call(null,inst_23322,inst_23319);
var state_23342__$1 = state_23342;
if(inst_23326){
var statearr_23355_23378 = state_23342__$1;
(statearr_23355_23378[(1)] = (8));

} else {
var statearr_23356_23379 = state_23342__$1;
(statearr_23356_23379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (10))){
var inst_23334 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23357_23380 = state_23342__$1;
(statearr_23357_23380[(2)] = inst_23334);

(statearr_23357_23380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (8))){
var inst_23319 = (state_23342[(7)]);
var tmp23354 = inst_23319;
var inst_23319__$1 = tmp23354;
var state_23342__$1 = (function (){var statearr_23358 = state_23342;
(statearr_23358[(7)] = inst_23319__$1);

return statearr_23358;
})();
var statearr_23359_23381 = state_23342__$1;
(statearr_23359_23381[(2)] = null);

(statearr_23359_23381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___23371,out))
;
return ((function (switch__20686__auto__,c__20798__auto___23371,out){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_23363 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23363[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_23363[(1)] = (1));

return statearr_23363;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_23342){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_23342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e23364){if((e23364 instanceof Object)){
var ex__20690__auto__ = e23364;
var statearr_23365_23382 = state_23342;
(statearr_23365_23382[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23383 = state_23342;
state_23342 = G__23383;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_23342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_23342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___23371,out))
})();
var state__20800__auto__ = (function (){var statearr_23366 = f__20799__auto__.call(null);
(statearr_23366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___23371);

return statearr_23366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___23371,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23384 = [];
var len__17899__auto___23454 = arguments.length;
var i__17900__auto___23455 = (0);
while(true){
if((i__17900__auto___23455 < len__17899__auto___23454)){
args23384.push((arguments[i__17900__auto___23455]));

var G__23456 = (i__17900__auto___23455 + (1));
i__17900__auto___23455 = G__23456;
continue;
} else {
}
break;
}

var G__23386 = args23384.length;
switch (G__23386) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23384.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20798__auto___23458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___23458,out){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___23458,out){
return (function (state_23424){
var state_val_23425 = (state_23424[(1)]);
if((state_val_23425 === (7))){
var inst_23420 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23426_23459 = state_23424__$1;
(statearr_23426_23459[(2)] = inst_23420);

(statearr_23426_23459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (1))){
var inst_23387 = (new Array(n));
var inst_23388 = inst_23387;
var inst_23389 = (0);
var state_23424__$1 = (function (){var statearr_23427 = state_23424;
(statearr_23427[(7)] = inst_23389);

(statearr_23427[(8)] = inst_23388);

return statearr_23427;
})();
var statearr_23428_23460 = state_23424__$1;
(statearr_23428_23460[(2)] = null);

(statearr_23428_23460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (4))){
var inst_23392 = (state_23424[(9)]);
var inst_23392__$1 = (state_23424[(2)]);
var inst_23393 = (inst_23392__$1 == null);
var inst_23394 = cljs.core.not.call(null,inst_23393);
var state_23424__$1 = (function (){var statearr_23429 = state_23424;
(statearr_23429[(9)] = inst_23392__$1);

return statearr_23429;
})();
if(inst_23394){
var statearr_23430_23461 = state_23424__$1;
(statearr_23430_23461[(1)] = (5));

} else {
var statearr_23431_23462 = state_23424__$1;
(statearr_23431_23462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (15))){
var inst_23414 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23432_23463 = state_23424__$1;
(statearr_23432_23463[(2)] = inst_23414);

(statearr_23432_23463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (13))){
var state_23424__$1 = state_23424;
var statearr_23433_23464 = state_23424__$1;
(statearr_23433_23464[(2)] = null);

(statearr_23433_23464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (6))){
var inst_23389 = (state_23424[(7)]);
var inst_23410 = (inst_23389 > (0));
var state_23424__$1 = state_23424;
if(cljs.core.truth_(inst_23410)){
var statearr_23434_23465 = state_23424__$1;
(statearr_23434_23465[(1)] = (12));

} else {
var statearr_23435_23466 = state_23424__$1;
(statearr_23435_23466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (3))){
var inst_23422 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23424__$1,inst_23422);
} else {
if((state_val_23425 === (12))){
var inst_23388 = (state_23424[(8)]);
var inst_23412 = cljs.core.vec.call(null,inst_23388);
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23424__$1,(15),out,inst_23412);
} else {
if((state_val_23425 === (2))){
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23424__$1,(4),ch);
} else {
if((state_val_23425 === (11))){
var inst_23404 = (state_23424[(2)]);
var inst_23405 = (new Array(n));
var inst_23388 = inst_23405;
var inst_23389 = (0);
var state_23424__$1 = (function (){var statearr_23436 = state_23424;
(statearr_23436[(7)] = inst_23389);

(statearr_23436[(8)] = inst_23388);

(statearr_23436[(10)] = inst_23404);

return statearr_23436;
})();
var statearr_23437_23467 = state_23424__$1;
(statearr_23437_23467[(2)] = null);

(statearr_23437_23467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (9))){
var inst_23388 = (state_23424[(8)]);
var inst_23402 = cljs.core.vec.call(null,inst_23388);
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23424__$1,(11),out,inst_23402);
} else {
if((state_val_23425 === (5))){
var inst_23392 = (state_23424[(9)]);
var inst_23389 = (state_23424[(7)]);
var inst_23388 = (state_23424[(8)]);
var inst_23397 = (state_23424[(11)]);
var inst_23396 = (inst_23388[inst_23389] = inst_23392);
var inst_23397__$1 = (inst_23389 + (1));
var inst_23398 = (inst_23397__$1 < n);
var state_23424__$1 = (function (){var statearr_23438 = state_23424;
(statearr_23438[(11)] = inst_23397__$1);

(statearr_23438[(12)] = inst_23396);

return statearr_23438;
})();
if(cljs.core.truth_(inst_23398)){
var statearr_23439_23468 = state_23424__$1;
(statearr_23439_23468[(1)] = (8));

} else {
var statearr_23440_23469 = state_23424__$1;
(statearr_23440_23469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (14))){
var inst_23417 = (state_23424[(2)]);
var inst_23418 = cljs.core.async.close_BANG_.call(null,out);
var state_23424__$1 = (function (){var statearr_23442 = state_23424;
(statearr_23442[(13)] = inst_23417);

return statearr_23442;
})();
var statearr_23443_23470 = state_23424__$1;
(statearr_23443_23470[(2)] = inst_23418);

(statearr_23443_23470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (10))){
var inst_23408 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23444_23471 = state_23424__$1;
(statearr_23444_23471[(2)] = inst_23408);

(statearr_23444_23471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (8))){
var inst_23388 = (state_23424[(8)]);
var inst_23397 = (state_23424[(11)]);
var tmp23441 = inst_23388;
var inst_23388__$1 = tmp23441;
var inst_23389 = inst_23397;
var state_23424__$1 = (function (){var statearr_23445 = state_23424;
(statearr_23445[(7)] = inst_23389);

(statearr_23445[(8)] = inst_23388__$1);

return statearr_23445;
})();
var statearr_23446_23472 = state_23424__$1;
(statearr_23446_23472[(2)] = null);

(statearr_23446_23472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___23458,out))
;
return ((function (switch__20686__auto__,c__20798__auto___23458,out){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_23450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23450[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_23450[(1)] = (1));

return statearr_23450;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_23424){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_23424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e23451){if((e23451 instanceof Object)){
var ex__20690__auto__ = e23451;
var statearr_23452_23473 = state_23424;
(statearr_23452_23473[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23474 = state_23424;
state_23424 = G__23474;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_23424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_23424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___23458,out))
})();
var state__20800__auto__ = (function (){var statearr_23453 = f__20799__auto__.call(null);
(statearr_23453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___23458);

return statearr_23453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___23458,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23475 = [];
var len__17899__auto___23549 = arguments.length;
var i__17900__auto___23550 = (0);
while(true){
if((i__17900__auto___23550 < len__17899__auto___23549)){
args23475.push((arguments[i__17900__auto___23550]));

var G__23551 = (i__17900__auto___23550 + (1));
i__17900__auto___23550 = G__23551;
continue;
} else {
}
break;
}

var G__23477 = args23475.length;
switch (G__23477) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23475.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20798__auto___23553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___23553,out){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___23553,out){
return (function (state_23519){
var state_val_23520 = (state_23519[(1)]);
if((state_val_23520 === (7))){
var inst_23515 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
var statearr_23521_23554 = state_23519__$1;
(statearr_23521_23554[(2)] = inst_23515);

(statearr_23521_23554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (1))){
var inst_23478 = [];
var inst_23479 = inst_23478;
var inst_23480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23519__$1 = (function (){var statearr_23522 = state_23519;
(statearr_23522[(7)] = inst_23480);

(statearr_23522[(8)] = inst_23479);

return statearr_23522;
})();
var statearr_23523_23555 = state_23519__$1;
(statearr_23523_23555[(2)] = null);

(statearr_23523_23555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (4))){
var inst_23483 = (state_23519[(9)]);
var inst_23483__$1 = (state_23519[(2)]);
var inst_23484 = (inst_23483__$1 == null);
var inst_23485 = cljs.core.not.call(null,inst_23484);
var state_23519__$1 = (function (){var statearr_23524 = state_23519;
(statearr_23524[(9)] = inst_23483__$1);

return statearr_23524;
})();
if(inst_23485){
var statearr_23525_23556 = state_23519__$1;
(statearr_23525_23556[(1)] = (5));

} else {
var statearr_23526_23557 = state_23519__$1;
(statearr_23526_23557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (15))){
var inst_23509 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
var statearr_23527_23558 = state_23519__$1;
(statearr_23527_23558[(2)] = inst_23509);

(statearr_23527_23558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (13))){
var state_23519__$1 = state_23519;
var statearr_23528_23559 = state_23519__$1;
(statearr_23528_23559[(2)] = null);

(statearr_23528_23559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (6))){
var inst_23479 = (state_23519[(8)]);
var inst_23504 = inst_23479.length;
var inst_23505 = (inst_23504 > (0));
var state_23519__$1 = state_23519;
if(cljs.core.truth_(inst_23505)){
var statearr_23529_23560 = state_23519__$1;
(statearr_23529_23560[(1)] = (12));

} else {
var statearr_23530_23561 = state_23519__$1;
(statearr_23530_23561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (3))){
var inst_23517 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23519__$1,inst_23517);
} else {
if((state_val_23520 === (12))){
var inst_23479 = (state_23519[(8)]);
var inst_23507 = cljs.core.vec.call(null,inst_23479);
var state_23519__$1 = state_23519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23519__$1,(15),out,inst_23507);
} else {
if((state_val_23520 === (2))){
var state_23519__$1 = state_23519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23519__$1,(4),ch);
} else {
if((state_val_23520 === (11))){
var inst_23483 = (state_23519[(9)]);
var inst_23487 = (state_23519[(10)]);
var inst_23497 = (state_23519[(2)]);
var inst_23498 = [];
var inst_23499 = inst_23498.push(inst_23483);
var inst_23479 = inst_23498;
var inst_23480 = inst_23487;
var state_23519__$1 = (function (){var statearr_23531 = state_23519;
(statearr_23531[(7)] = inst_23480);

(statearr_23531[(11)] = inst_23497);

(statearr_23531[(12)] = inst_23499);

(statearr_23531[(8)] = inst_23479);

return statearr_23531;
})();
var statearr_23532_23562 = state_23519__$1;
(statearr_23532_23562[(2)] = null);

(statearr_23532_23562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (9))){
var inst_23479 = (state_23519[(8)]);
var inst_23495 = cljs.core.vec.call(null,inst_23479);
var state_23519__$1 = state_23519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23519__$1,(11),out,inst_23495);
} else {
if((state_val_23520 === (5))){
var inst_23480 = (state_23519[(7)]);
var inst_23483 = (state_23519[(9)]);
var inst_23487 = (state_23519[(10)]);
var inst_23487__$1 = f.call(null,inst_23483);
var inst_23488 = cljs.core._EQ_.call(null,inst_23487__$1,inst_23480);
var inst_23489 = cljs.core.keyword_identical_QMARK_.call(null,inst_23480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23490 = (inst_23488) || (inst_23489);
var state_23519__$1 = (function (){var statearr_23533 = state_23519;
(statearr_23533[(10)] = inst_23487__$1);

return statearr_23533;
})();
if(cljs.core.truth_(inst_23490)){
var statearr_23534_23563 = state_23519__$1;
(statearr_23534_23563[(1)] = (8));

} else {
var statearr_23535_23564 = state_23519__$1;
(statearr_23535_23564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (14))){
var inst_23512 = (state_23519[(2)]);
var inst_23513 = cljs.core.async.close_BANG_.call(null,out);
var state_23519__$1 = (function (){var statearr_23537 = state_23519;
(statearr_23537[(13)] = inst_23512);

return statearr_23537;
})();
var statearr_23538_23565 = state_23519__$1;
(statearr_23538_23565[(2)] = inst_23513);

(statearr_23538_23565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (10))){
var inst_23502 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
var statearr_23539_23566 = state_23519__$1;
(statearr_23539_23566[(2)] = inst_23502);

(statearr_23539_23566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (8))){
var inst_23483 = (state_23519[(9)]);
var inst_23479 = (state_23519[(8)]);
var inst_23487 = (state_23519[(10)]);
var inst_23492 = inst_23479.push(inst_23483);
var tmp23536 = inst_23479;
var inst_23479__$1 = tmp23536;
var inst_23480 = inst_23487;
var state_23519__$1 = (function (){var statearr_23540 = state_23519;
(statearr_23540[(7)] = inst_23480);

(statearr_23540[(14)] = inst_23492);

(statearr_23540[(8)] = inst_23479__$1);

return statearr_23540;
})();
var statearr_23541_23567 = state_23519__$1;
(statearr_23541_23567[(2)] = null);

(statearr_23541_23567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20798__auto___23553,out))
;
return ((function (switch__20686__auto__,c__20798__auto___23553,out){
return (function() {
var cljs$core$async$state_machine__20687__auto__ = null;
var cljs$core$async$state_machine__20687__auto____0 = (function (){
var statearr_23545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23545[(0)] = cljs$core$async$state_machine__20687__auto__);

(statearr_23545[(1)] = (1));

return statearr_23545;
});
var cljs$core$async$state_machine__20687__auto____1 = (function (state_23519){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_23519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e23546){if((e23546 instanceof Object)){
var ex__20690__auto__ = e23546;
var statearr_23547_23568 = state_23519;
(statearr_23547_23568[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23569 = state_23519;
state_23519 = G__23569;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
cljs$core$async$state_machine__20687__auto__ = function(state_23519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20687__auto____1.call(this,state_23519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20687__auto____0;
cljs$core$async$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20687__auto____1;
return cljs$core$async$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___23553,out))
})();
var state__20800__auto__ = (function (){var statearr_23548 = f__20799__auto__.call(null);
(statearr_23548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___23553);

return statearr_23548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___23553,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map