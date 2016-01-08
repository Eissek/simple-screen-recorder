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
var args21940 = [];
var len__17899__auto___21946 = arguments.length;
var i__17900__auto___21947 = (0);
while(true){
if((i__17900__auto___21947 < len__17899__auto___21946)){
args21940.push((arguments[i__17900__auto___21947]));

var G__21948 = (i__17900__auto___21947 + (1));
i__17900__auto___21947 = G__21948;
continue;
} else {
}
break;
}

var G__21942 = args21940.length;
switch (G__21942) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21940.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21943 = (function (f,blockable,meta21944){
this.f = f;
this.blockable = blockable;
this.meta21944 = meta21944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21945,meta21944__$1){
var self__ = this;
var _21945__$1 = this;
return (new cljs.core.async.t_cljs$core$async21943(self__.f,self__.blockable,meta21944__$1));
});

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21945){
var self__ = this;
var _21945__$1 = this;
return self__.meta21944;
});

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21944","meta21944",-1083430222,null)], null);
});

cljs.core.async.t_cljs$core$async21943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21943";

cljs.core.async.t_cljs$core$async21943.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async21943");
});

cljs.core.async.__GT_t_cljs$core$async21943 = (function cljs$core$async$__GT_t_cljs$core$async21943(f__$1,blockable__$1,meta21944){
return (new cljs.core.async.t_cljs$core$async21943(f__$1,blockable__$1,meta21944));
});

}

return (new cljs.core.async.t_cljs$core$async21943(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21952 = [];
var len__17899__auto___21955 = arguments.length;
var i__17900__auto___21956 = (0);
while(true){
if((i__17900__auto___21956 < len__17899__auto___21955)){
args21952.push((arguments[i__17900__auto___21956]));

var G__21957 = (i__17900__auto___21956 + (1));
i__17900__auto___21956 = G__21957;
continue;
} else {
}
break;
}

var G__21954 = args21952.length;
switch (G__21954) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21952.length)].join('')));

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
var args21959 = [];
var len__17899__auto___21962 = arguments.length;
var i__17900__auto___21963 = (0);
while(true){
if((i__17900__auto___21963 < len__17899__auto___21962)){
args21959.push((arguments[i__17900__auto___21963]));

var G__21964 = (i__17900__auto___21963 + (1));
i__17900__auto___21963 = G__21964;
continue;
} else {
}
break;
}

var G__21961 = args21959.length;
switch (G__21961) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21959.length)].join('')));

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
var args21966 = [];
var len__17899__auto___21969 = arguments.length;
var i__17900__auto___21970 = (0);
while(true){
if((i__17900__auto___21970 < len__17899__auto___21969)){
args21966.push((arguments[i__17900__auto___21970]));

var G__21971 = (i__17900__auto___21970 + (1));
i__17900__auto___21970 = G__21971;
continue;
} else {
}
break;
}

var G__21968 = args21966.length;
switch (G__21968) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21966.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21973 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21973);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21973,ret){
return (function (){
return fn1.call(null,val_21973);
});})(val_21973,ret))
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
var args21974 = [];
var len__17899__auto___21977 = arguments.length;
var i__17900__auto___21978 = (0);
while(true){
if((i__17900__auto___21978 < len__17899__auto___21977)){
args21974.push((arguments[i__17900__auto___21978]));

var G__21979 = (i__17900__auto___21978 + (1));
i__17900__auto___21978 = G__21979;
continue;
} else {
}
break;
}

var G__21976 = args21974.length;
switch (G__21976) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21974.length)].join('')));

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
var n__17744__auto___21981 = n;
var x_21982 = (0);
while(true){
if((x_21982 < n__17744__auto___21981)){
(a[x_21982] = (0));

var G__21983 = (x_21982 + (1));
x_21982 = G__21983;
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

var G__21984 = (i + (1));
i = G__21984;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21988 = (function (alt_flag,flag,meta21989){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21989 = meta21989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21990,meta21989__$1){
var self__ = this;
var _21990__$1 = this;
return (new cljs.core.async.t_cljs$core$async21988(self__.alt_flag,self__.flag,meta21989__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21990){
var self__ = this;
var _21990__$1 = this;
return self__.meta21989;
});})(flag))
;

cljs.core.async.t_cljs$core$async21988.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21988.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21988.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21989","meta21989",-1421626147,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21988";

cljs.core.async.t_cljs$core$async21988.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async21988");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21988 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21988(alt_flag__$1,flag__$1,meta21989){
return (new cljs.core.async.t_cljs$core$async21988(alt_flag__$1,flag__$1,meta21989));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21988(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21994 = (function (alt_handler,flag,cb,meta21995){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21995 = meta21995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21996,meta21995__$1){
var self__ = this;
var _21996__$1 = this;
return (new cljs.core.async.t_cljs$core$async21994(self__.alt_handler,self__.flag,self__.cb,meta21995__$1));
});

cljs.core.async.t_cljs$core$async21994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21996){
var self__ = this;
var _21996__$1 = this;
return self__.meta21995;
});

cljs.core.async.t_cljs$core$async21994.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21994.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21995","meta21995",522681652,null)], null);
});

cljs.core.async.t_cljs$core$async21994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21994";

cljs.core.async.t_cljs$core$async21994.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async21994");
});

cljs.core.async.__GT_t_cljs$core$async21994 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21994(alt_handler__$1,flag__$1,cb__$1,meta21995){
return (new cljs.core.async.t_cljs$core$async21994(alt_handler__$1,flag__$1,cb__$1,meta21995));
});

}

return (new cljs.core.async.t_cljs$core$async21994(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21997_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21997_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21998_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21998_SHARP_,port], null));
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
var G__21999 = (i + (1));
i = G__21999;
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
var len__17899__auto___22005 = arguments.length;
var i__17900__auto___22006 = (0);
while(true){
if((i__17900__auto___22006 < len__17899__auto___22005)){
args__17906__auto__.push((arguments[i__17900__auto___22006]));

var G__22007 = (i__17900__auto___22006 + (1));
i__17900__auto___22006 = G__22007;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((1) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17907__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22002){
var map__22003 = p__22002;
var map__22003__$1 = ((((!((map__22003 == null)))?((((map__22003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22003):map__22003);
var opts = map__22003__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22000){
var G__22001 = cljs.core.first.call(null,seq22000);
var seq22000__$1 = cljs.core.next.call(null,seq22000);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22001,seq22000__$1);
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
var args22008 = [];
var len__17899__auto___22058 = arguments.length;
var i__17900__auto___22059 = (0);
while(true){
if((i__17900__auto___22059 < len__17899__auto___22058)){
args22008.push((arguments[i__17900__auto___22059]));

var G__22060 = (i__17900__auto___22059 + (1));
i__17900__auto___22059 = G__22060;
continue;
} else {
}
break;
}

var G__22010 = args22008.length;
switch (G__22010) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22008.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21895__auto___22062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___22062){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___22062){
return (function (state_22034){
var state_val_22035 = (state_22034[(1)]);
if((state_val_22035 === (7))){
var inst_22030 = (state_22034[(2)]);
var state_22034__$1 = state_22034;
var statearr_22036_22063 = state_22034__$1;
(statearr_22036_22063[(2)] = inst_22030);

(statearr_22036_22063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (1))){
var state_22034__$1 = state_22034;
var statearr_22037_22064 = state_22034__$1;
(statearr_22037_22064[(2)] = null);

(statearr_22037_22064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (4))){
var inst_22013 = (state_22034[(7)]);
var inst_22013__$1 = (state_22034[(2)]);
var inst_22014 = (inst_22013__$1 == null);
var state_22034__$1 = (function (){var statearr_22038 = state_22034;
(statearr_22038[(7)] = inst_22013__$1);

return statearr_22038;
})();
if(cljs.core.truth_(inst_22014)){
var statearr_22039_22065 = state_22034__$1;
(statearr_22039_22065[(1)] = (5));

} else {
var statearr_22040_22066 = state_22034__$1;
(statearr_22040_22066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (13))){
var state_22034__$1 = state_22034;
var statearr_22041_22067 = state_22034__$1;
(statearr_22041_22067[(2)] = null);

(statearr_22041_22067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (6))){
var inst_22013 = (state_22034[(7)]);
var state_22034__$1 = state_22034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22034__$1,(11),to,inst_22013);
} else {
if((state_val_22035 === (3))){
var inst_22032 = (state_22034[(2)]);
var state_22034__$1 = state_22034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22034__$1,inst_22032);
} else {
if((state_val_22035 === (12))){
var state_22034__$1 = state_22034;
var statearr_22042_22068 = state_22034__$1;
(statearr_22042_22068[(2)] = null);

(statearr_22042_22068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (2))){
var state_22034__$1 = state_22034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22034__$1,(4),from);
} else {
if((state_val_22035 === (11))){
var inst_22023 = (state_22034[(2)]);
var state_22034__$1 = state_22034;
if(cljs.core.truth_(inst_22023)){
var statearr_22043_22069 = state_22034__$1;
(statearr_22043_22069[(1)] = (12));

} else {
var statearr_22044_22070 = state_22034__$1;
(statearr_22044_22070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (9))){
var state_22034__$1 = state_22034;
var statearr_22045_22071 = state_22034__$1;
(statearr_22045_22071[(2)] = null);

(statearr_22045_22071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (5))){
var state_22034__$1 = state_22034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22046_22072 = state_22034__$1;
(statearr_22046_22072[(1)] = (8));

} else {
var statearr_22047_22073 = state_22034__$1;
(statearr_22047_22073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (14))){
var inst_22028 = (state_22034[(2)]);
var state_22034__$1 = state_22034;
var statearr_22048_22074 = state_22034__$1;
(statearr_22048_22074[(2)] = inst_22028);

(statearr_22048_22074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (10))){
var inst_22020 = (state_22034[(2)]);
var state_22034__$1 = state_22034;
var statearr_22049_22075 = state_22034__$1;
(statearr_22049_22075[(2)] = inst_22020);

(statearr_22049_22075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (8))){
var inst_22017 = cljs.core.async.close_BANG_.call(null,to);
var state_22034__$1 = state_22034;
var statearr_22050_22076 = state_22034__$1;
(statearr_22050_22076[(2)] = inst_22017);

(statearr_22050_22076[(1)] = (10));


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
});})(c__21895__auto___22062))
;
return ((function (switch__21783__auto__,c__21895__auto___22062){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_22054 = [null,null,null,null,null,null,null,null];
(statearr_22054[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_22054[(1)] = (1));

return statearr_22054;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_22034){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object)){
var ex__21787__auto__ = e22055;
var statearr_22056_22077 = state_22034;
(statearr_22056_22077[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22078 = state_22034;
state_22034 = G__22078;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_22034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_22034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___22062))
})();
var state__21897__auto__ = (function (){var statearr_22057 = f__21896__auto__.call(null);
(statearr_22057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___22062);

return statearr_22057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___22062))
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
return (function (p__22262){
var vec__22263 = p__22262;
var v = cljs.core.nth.call(null,vec__22263,(0),null);
var p = cljs.core.nth.call(null,vec__22263,(1),null);
var job = vec__22263;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21895__auto___22445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___22445,res,vec__22263,v,p,job,jobs,results){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___22445,res,vec__22263,v,p,job,jobs,results){
return (function (state_22268){
var state_val_22269 = (state_22268[(1)]);
if((state_val_22269 === (1))){
var state_22268__$1 = state_22268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22268__$1,(2),res,v);
} else {
if((state_val_22269 === (2))){
var inst_22265 = (state_22268[(2)]);
var inst_22266 = cljs.core.async.close_BANG_.call(null,res);
var state_22268__$1 = (function (){var statearr_22270 = state_22268;
(statearr_22270[(7)] = inst_22265);

return statearr_22270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22268__$1,inst_22266);
} else {
return null;
}
}
});})(c__21895__auto___22445,res,vec__22263,v,p,job,jobs,results))
;
return ((function (switch__21783__auto__,c__21895__auto___22445,res,vec__22263,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0 = (function (){
var statearr_22274 = [null,null,null,null,null,null,null,null];
(statearr_22274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__);

(statearr_22274[(1)] = (1));

return statearr_22274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1 = (function (state_22268){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22275){if((e22275 instanceof Object)){
var ex__21787__auto__ = e22275;
var statearr_22276_22446 = state_22268;
(statearr_22276_22446[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22447 = state_22268;
state_22268 = G__22447;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = function(state_22268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1.call(this,state_22268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___22445,res,vec__22263,v,p,job,jobs,results))
})();
var state__21897__auto__ = (function (){var statearr_22277 = f__21896__auto__.call(null);
(statearr_22277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___22445);

return statearr_22277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___22445,res,vec__22263,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22278){
var vec__22279 = p__22278;
var v = cljs.core.nth.call(null,vec__22279,(0),null);
var p = cljs.core.nth.call(null,vec__22279,(1),null);
var job = vec__22279;
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
var n__17744__auto___22448 = n;
var __22449 = (0);
while(true){
if((__22449 < n__17744__auto___22448)){
var G__22280_22450 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22280_22450) {
case "compute":
var c__21895__auto___22452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22449,c__21895__auto___22452,G__22280_22450,n__17744__auto___22448,jobs,results,process,async){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (__22449,c__21895__auto___22452,G__22280_22450,n__17744__auto___22448,jobs,results,process,async){
return (function (state_22293){
var state_val_22294 = (state_22293[(1)]);
if((state_val_22294 === (1))){
var state_22293__$1 = state_22293;
var statearr_22295_22453 = state_22293__$1;
(statearr_22295_22453[(2)] = null);

(statearr_22295_22453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22294 === (2))){
var state_22293__$1 = state_22293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22293__$1,(4),jobs);
} else {
if((state_val_22294 === (3))){
var inst_22291 = (state_22293[(2)]);
var state_22293__$1 = state_22293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22293__$1,inst_22291);
} else {
if((state_val_22294 === (4))){
var inst_22283 = (state_22293[(2)]);
var inst_22284 = process.call(null,inst_22283);
var state_22293__$1 = state_22293;
if(cljs.core.truth_(inst_22284)){
var statearr_22296_22454 = state_22293__$1;
(statearr_22296_22454[(1)] = (5));

} else {
var statearr_22297_22455 = state_22293__$1;
(statearr_22297_22455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22294 === (5))){
var state_22293__$1 = state_22293;
var statearr_22298_22456 = state_22293__$1;
(statearr_22298_22456[(2)] = null);

(statearr_22298_22456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22294 === (6))){
var state_22293__$1 = state_22293;
var statearr_22299_22457 = state_22293__$1;
(statearr_22299_22457[(2)] = null);

(statearr_22299_22457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22294 === (7))){
var inst_22289 = (state_22293[(2)]);
var state_22293__$1 = state_22293;
var statearr_22300_22458 = state_22293__$1;
(statearr_22300_22458[(2)] = inst_22289);

(statearr_22300_22458[(1)] = (3));


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
});})(__22449,c__21895__auto___22452,G__22280_22450,n__17744__auto___22448,jobs,results,process,async))
;
return ((function (__22449,switch__21783__auto__,c__21895__auto___22452,G__22280_22450,n__17744__auto___22448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0 = (function (){
var statearr_22304 = [null,null,null,null,null,null,null];
(statearr_22304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__);

(statearr_22304[(1)] = (1));

return statearr_22304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1 = (function (state_22293){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22305){if((e22305 instanceof Object)){
var ex__21787__auto__ = e22305;
var statearr_22306_22459 = state_22293;
(statearr_22306_22459[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22460 = state_22293;
state_22293 = G__22460;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = function(state_22293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1.call(this,state_22293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__;
})()
;})(__22449,switch__21783__auto__,c__21895__auto___22452,G__22280_22450,n__17744__auto___22448,jobs,results,process,async))
})();
var state__21897__auto__ = (function (){var statearr_22307 = f__21896__auto__.call(null);
(statearr_22307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___22452);

return statearr_22307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(__22449,c__21895__auto___22452,G__22280_22450,n__17744__auto___22448,jobs,results,process,async))
);


break;
case "async":
var c__21895__auto___22461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22449,c__21895__auto___22461,G__22280_22450,n__17744__auto___22448,jobs,results,process,async){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (__22449,c__21895__auto___22461,G__22280_22450,n__17744__auto___22448,jobs,results,process,async){
return (function (state_22320){
var state_val_22321 = (state_22320[(1)]);
if((state_val_22321 === (1))){
var state_22320__$1 = state_22320;
var statearr_22322_22462 = state_22320__$1;
(statearr_22322_22462[(2)] = null);

(statearr_22322_22462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (2))){
var state_22320__$1 = state_22320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22320__$1,(4),jobs);
} else {
if((state_val_22321 === (3))){
var inst_22318 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22320__$1,inst_22318);
} else {
if((state_val_22321 === (4))){
var inst_22310 = (state_22320[(2)]);
var inst_22311 = async.call(null,inst_22310);
var state_22320__$1 = state_22320;
if(cljs.core.truth_(inst_22311)){
var statearr_22323_22463 = state_22320__$1;
(statearr_22323_22463[(1)] = (5));

} else {
var statearr_22324_22464 = state_22320__$1;
(statearr_22324_22464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (5))){
var state_22320__$1 = state_22320;
var statearr_22325_22465 = state_22320__$1;
(statearr_22325_22465[(2)] = null);

(statearr_22325_22465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (6))){
var state_22320__$1 = state_22320;
var statearr_22326_22466 = state_22320__$1;
(statearr_22326_22466[(2)] = null);

(statearr_22326_22466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (7))){
var inst_22316 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22327_22467 = state_22320__$1;
(statearr_22327_22467[(2)] = inst_22316);

(statearr_22327_22467[(1)] = (3));


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
});})(__22449,c__21895__auto___22461,G__22280_22450,n__17744__auto___22448,jobs,results,process,async))
;
return ((function (__22449,switch__21783__auto__,c__21895__auto___22461,G__22280_22450,n__17744__auto___22448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0 = (function (){
var statearr_22331 = [null,null,null,null,null,null,null];
(statearr_22331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__);

(statearr_22331[(1)] = (1));

return statearr_22331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1 = (function (state_22320){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22332){if((e22332 instanceof Object)){
var ex__21787__auto__ = e22332;
var statearr_22333_22468 = state_22320;
(statearr_22333_22468[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22469 = state_22320;
state_22320 = G__22469;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = function(state_22320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1.call(this,state_22320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__;
})()
;})(__22449,switch__21783__auto__,c__21895__auto___22461,G__22280_22450,n__17744__auto___22448,jobs,results,process,async))
})();
var state__21897__auto__ = (function (){var statearr_22334 = f__21896__auto__.call(null);
(statearr_22334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___22461);

return statearr_22334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(__22449,c__21895__auto___22461,G__22280_22450,n__17744__auto___22448,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22470 = (__22449 + (1));
__22449 = G__22470;
continue;
} else {
}
break;
}

var c__21895__auto___22471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___22471,jobs,results,process,async){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___22471,jobs,results,process,async){
return (function (state_22356){
var state_val_22357 = (state_22356[(1)]);
if((state_val_22357 === (1))){
var state_22356__$1 = state_22356;
var statearr_22358_22472 = state_22356__$1;
(statearr_22358_22472[(2)] = null);

(statearr_22358_22472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (2))){
var state_22356__$1 = state_22356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22356__$1,(4),from);
} else {
if((state_val_22357 === (3))){
var inst_22354 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22356__$1,inst_22354);
} else {
if((state_val_22357 === (4))){
var inst_22337 = (state_22356[(7)]);
var inst_22337__$1 = (state_22356[(2)]);
var inst_22338 = (inst_22337__$1 == null);
var state_22356__$1 = (function (){var statearr_22359 = state_22356;
(statearr_22359[(7)] = inst_22337__$1);

return statearr_22359;
})();
if(cljs.core.truth_(inst_22338)){
var statearr_22360_22473 = state_22356__$1;
(statearr_22360_22473[(1)] = (5));

} else {
var statearr_22361_22474 = state_22356__$1;
(statearr_22361_22474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (5))){
var inst_22340 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22356__$1 = state_22356;
var statearr_22362_22475 = state_22356__$1;
(statearr_22362_22475[(2)] = inst_22340);

(statearr_22362_22475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (6))){
var inst_22337 = (state_22356[(7)]);
var inst_22342 = (state_22356[(8)]);
var inst_22342__$1 = cljs.core.async.chan.call(null,(1));
var inst_22343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22344 = [inst_22337,inst_22342__$1];
var inst_22345 = (new cljs.core.PersistentVector(null,2,(5),inst_22343,inst_22344,null));
var state_22356__$1 = (function (){var statearr_22363 = state_22356;
(statearr_22363[(8)] = inst_22342__$1);

return statearr_22363;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22356__$1,(8),jobs,inst_22345);
} else {
if((state_val_22357 === (7))){
var inst_22352 = (state_22356[(2)]);
var state_22356__$1 = state_22356;
var statearr_22364_22476 = state_22356__$1;
(statearr_22364_22476[(2)] = inst_22352);

(statearr_22364_22476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22357 === (8))){
var inst_22342 = (state_22356[(8)]);
var inst_22347 = (state_22356[(2)]);
var state_22356__$1 = (function (){var statearr_22365 = state_22356;
(statearr_22365[(9)] = inst_22347);

return statearr_22365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22356__$1,(9),results,inst_22342);
} else {
if((state_val_22357 === (9))){
var inst_22349 = (state_22356[(2)]);
var state_22356__$1 = (function (){var statearr_22366 = state_22356;
(statearr_22366[(10)] = inst_22349);

return statearr_22366;
})();
var statearr_22367_22477 = state_22356__$1;
(statearr_22367_22477[(2)] = null);

(statearr_22367_22477[(1)] = (2));


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
});})(c__21895__auto___22471,jobs,results,process,async))
;
return ((function (switch__21783__auto__,c__21895__auto___22471,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0 = (function (){
var statearr_22371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__);

(statearr_22371[(1)] = (1));

return statearr_22371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1 = (function (state_22356){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22372){if((e22372 instanceof Object)){
var ex__21787__auto__ = e22372;
var statearr_22373_22478 = state_22356;
(statearr_22373_22478[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22479 = state_22356;
state_22356 = G__22479;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = function(state_22356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1.call(this,state_22356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___22471,jobs,results,process,async))
})();
var state__21897__auto__ = (function (){var statearr_22374 = f__21896__auto__.call(null);
(statearr_22374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___22471);

return statearr_22374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___22471,jobs,results,process,async))
);


var c__21895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto__,jobs,results,process,async){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto__,jobs,results,process,async){
return (function (state_22412){
var state_val_22413 = (state_22412[(1)]);
if((state_val_22413 === (7))){
var inst_22408 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22414_22480 = state_22412__$1;
(statearr_22414_22480[(2)] = inst_22408);

(statearr_22414_22480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (20))){
var state_22412__$1 = state_22412;
var statearr_22415_22481 = state_22412__$1;
(statearr_22415_22481[(2)] = null);

(statearr_22415_22481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (1))){
var state_22412__$1 = state_22412;
var statearr_22416_22482 = state_22412__$1;
(statearr_22416_22482[(2)] = null);

(statearr_22416_22482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (4))){
var inst_22377 = (state_22412[(7)]);
var inst_22377__$1 = (state_22412[(2)]);
var inst_22378 = (inst_22377__$1 == null);
var state_22412__$1 = (function (){var statearr_22417 = state_22412;
(statearr_22417[(7)] = inst_22377__$1);

return statearr_22417;
})();
if(cljs.core.truth_(inst_22378)){
var statearr_22418_22483 = state_22412__$1;
(statearr_22418_22483[(1)] = (5));

} else {
var statearr_22419_22484 = state_22412__$1;
(statearr_22419_22484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (15))){
var inst_22390 = (state_22412[(8)]);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22412__$1,(18),to,inst_22390);
} else {
if((state_val_22413 === (21))){
var inst_22403 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22420_22485 = state_22412__$1;
(statearr_22420_22485[(2)] = inst_22403);

(statearr_22420_22485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (13))){
var inst_22405 = (state_22412[(2)]);
var state_22412__$1 = (function (){var statearr_22421 = state_22412;
(statearr_22421[(9)] = inst_22405);

return statearr_22421;
})();
var statearr_22422_22486 = state_22412__$1;
(statearr_22422_22486[(2)] = null);

(statearr_22422_22486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (6))){
var inst_22377 = (state_22412[(7)]);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22412__$1,(11),inst_22377);
} else {
if((state_val_22413 === (17))){
var inst_22398 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
if(cljs.core.truth_(inst_22398)){
var statearr_22423_22487 = state_22412__$1;
(statearr_22423_22487[(1)] = (19));

} else {
var statearr_22424_22488 = state_22412__$1;
(statearr_22424_22488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (3))){
var inst_22410 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22412__$1,inst_22410);
} else {
if((state_val_22413 === (12))){
var inst_22387 = (state_22412[(10)]);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22412__$1,(14),inst_22387);
} else {
if((state_val_22413 === (2))){
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22412__$1,(4),results);
} else {
if((state_val_22413 === (19))){
var state_22412__$1 = state_22412;
var statearr_22425_22489 = state_22412__$1;
(statearr_22425_22489[(2)] = null);

(statearr_22425_22489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (11))){
var inst_22387 = (state_22412[(2)]);
var state_22412__$1 = (function (){var statearr_22426 = state_22412;
(statearr_22426[(10)] = inst_22387);

return statearr_22426;
})();
var statearr_22427_22490 = state_22412__$1;
(statearr_22427_22490[(2)] = null);

(statearr_22427_22490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (9))){
var state_22412__$1 = state_22412;
var statearr_22428_22491 = state_22412__$1;
(statearr_22428_22491[(2)] = null);

(statearr_22428_22491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (5))){
var state_22412__$1 = state_22412;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22429_22492 = state_22412__$1;
(statearr_22429_22492[(1)] = (8));

} else {
var statearr_22430_22493 = state_22412__$1;
(statearr_22430_22493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (14))){
var inst_22392 = (state_22412[(11)]);
var inst_22390 = (state_22412[(8)]);
var inst_22390__$1 = (state_22412[(2)]);
var inst_22391 = (inst_22390__$1 == null);
var inst_22392__$1 = cljs.core.not.call(null,inst_22391);
var state_22412__$1 = (function (){var statearr_22431 = state_22412;
(statearr_22431[(11)] = inst_22392__$1);

(statearr_22431[(8)] = inst_22390__$1);

return statearr_22431;
})();
if(inst_22392__$1){
var statearr_22432_22494 = state_22412__$1;
(statearr_22432_22494[(1)] = (15));

} else {
var statearr_22433_22495 = state_22412__$1;
(statearr_22433_22495[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (16))){
var inst_22392 = (state_22412[(11)]);
var state_22412__$1 = state_22412;
var statearr_22434_22496 = state_22412__$1;
(statearr_22434_22496[(2)] = inst_22392);

(statearr_22434_22496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (10))){
var inst_22384 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22435_22497 = state_22412__$1;
(statearr_22435_22497[(2)] = inst_22384);

(statearr_22435_22497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (18))){
var inst_22395 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22436_22498 = state_22412__$1;
(statearr_22436_22498[(2)] = inst_22395);

(statearr_22436_22498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (8))){
var inst_22381 = cljs.core.async.close_BANG_.call(null,to);
var state_22412__$1 = state_22412;
var statearr_22437_22499 = state_22412__$1;
(statearr_22437_22499[(2)] = inst_22381);

(statearr_22437_22499[(1)] = (10));


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
});})(c__21895__auto__,jobs,results,process,async))
;
return ((function (switch__21783__auto__,c__21895__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0 = (function (){
var statearr_22441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__);

(statearr_22441[(1)] = (1));

return statearr_22441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1 = (function (state_22412){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22442){if((e22442 instanceof Object)){
var ex__21787__auto__ = e22442;
var statearr_22443_22500 = state_22412;
(statearr_22443_22500[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22501 = state_22412;
state_22412 = G__22501;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__ = function(state_22412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1.call(this,state_22412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto__,jobs,results,process,async))
})();
var state__21897__auto__ = (function (){var statearr_22444 = f__21896__auto__.call(null);
(statearr_22444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto__);

return statearr_22444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto__,jobs,results,process,async))
);

return c__21895__auto__;
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
var args22502 = [];
var len__17899__auto___22505 = arguments.length;
var i__17900__auto___22506 = (0);
while(true){
if((i__17900__auto___22506 < len__17899__auto___22505)){
args22502.push((arguments[i__17900__auto___22506]));

var G__22507 = (i__17900__auto___22506 + (1));
i__17900__auto___22506 = G__22507;
continue;
} else {
}
break;
}

var G__22504 = args22502.length;
switch (G__22504) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22502.length)].join('')));

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
var args22509 = [];
var len__17899__auto___22512 = arguments.length;
var i__17900__auto___22513 = (0);
while(true){
if((i__17900__auto___22513 < len__17899__auto___22512)){
args22509.push((arguments[i__17900__auto___22513]));

var G__22514 = (i__17900__auto___22513 + (1));
i__17900__auto___22513 = G__22514;
continue;
} else {
}
break;
}

var G__22511 = args22509.length;
switch (G__22511) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22509.length)].join('')));

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
var args22516 = [];
var len__17899__auto___22569 = arguments.length;
var i__17900__auto___22570 = (0);
while(true){
if((i__17900__auto___22570 < len__17899__auto___22569)){
args22516.push((arguments[i__17900__auto___22570]));

var G__22571 = (i__17900__auto___22570 + (1));
i__17900__auto___22570 = G__22571;
continue;
} else {
}
break;
}

var G__22518 = args22516.length;
switch (G__22518) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22516.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21895__auto___22573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___22573,tc,fc){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___22573,tc,fc){
return (function (state_22544){
var state_val_22545 = (state_22544[(1)]);
if((state_val_22545 === (7))){
var inst_22540 = (state_22544[(2)]);
var state_22544__$1 = state_22544;
var statearr_22546_22574 = state_22544__$1;
(statearr_22546_22574[(2)] = inst_22540);

(statearr_22546_22574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (1))){
var state_22544__$1 = state_22544;
var statearr_22547_22575 = state_22544__$1;
(statearr_22547_22575[(2)] = null);

(statearr_22547_22575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (4))){
var inst_22521 = (state_22544[(7)]);
var inst_22521__$1 = (state_22544[(2)]);
var inst_22522 = (inst_22521__$1 == null);
var state_22544__$1 = (function (){var statearr_22548 = state_22544;
(statearr_22548[(7)] = inst_22521__$1);

return statearr_22548;
})();
if(cljs.core.truth_(inst_22522)){
var statearr_22549_22576 = state_22544__$1;
(statearr_22549_22576[(1)] = (5));

} else {
var statearr_22550_22577 = state_22544__$1;
(statearr_22550_22577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (13))){
var state_22544__$1 = state_22544;
var statearr_22551_22578 = state_22544__$1;
(statearr_22551_22578[(2)] = null);

(statearr_22551_22578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (6))){
var inst_22521 = (state_22544[(7)]);
var inst_22527 = p.call(null,inst_22521);
var state_22544__$1 = state_22544;
if(cljs.core.truth_(inst_22527)){
var statearr_22552_22579 = state_22544__$1;
(statearr_22552_22579[(1)] = (9));

} else {
var statearr_22553_22580 = state_22544__$1;
(statearr_22553_22580[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (3))){
var inst_22542 = (state_22544[(2)]);
var state_22544__$1 = state_22544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22544__$1,inst_22542);
} else {
if((state_val_22545 === (12))){
var state_22544__$1 = state_22544;
var statearr_22554_22581 = state_22544__$1;
(statearr_22554_22581[(2)] = null);

(statearr_22554_22581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (2))){
var state_22544__$1 = state_22544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22544__$1,(4),ch);
} else {
if((state_val_22545 === (11))){
var inst_22521 = (state_22544[(7)]);
var inst_22531 = (state_22544[(2)]);
var state_22544__$1 = state_22544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22544__$1,(8),inst_22531,inst_22521);
} else {
if((state_val_22545 === (9))){
var state_22544__$1 = state_22544;
var statearr_22555_22582 = state_22544__$1;
(statearr_22555_22582[(2)] = tc);

(statearr_22555_22582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (5))){
var inst_22524 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22525 = cljs.core.async.close_BANG_.call(null,fc);
var state_22544__$1 = (function (){var statearr_22556 = state_22544;
(statearr_22556[(8)] = inst_22524);

return statearr_22556;
})();
var statearr_22557_22583 = state_22544__$1;
(statearr_22557_22583[(2)] = inst_22525);

(statearr_22557_22583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (14))){
var inst_22538 = (state_22544[(2)]);
var state_22544__$1 = state_22544;
var statearr_22558_22584 = state_22544__$1;
(statearr_22558_22584[(2)] = inst_22538);

(statearr_22558_22584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (10))){
var state_22544__$1 = state_22544;
var statearr_22559_22585 = state_22544__$1;
(statearr_22559_22585[(2)] = fc);

(statearr_22559_22585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22545 === (8))){
var inst_22533 = (state_22544[(2)]);
var state_22544__$1 = state_22544;
if(cljs.core.truth_(inst_22533)){
var statearr_22560_22586 = state_22544__$1;
(statearr_22560_22586[(1)] = (12));

} else {
var statearr_22561_22587 = state_22544__$1;
(statearr_22561_22587[(1)] = (13));

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
});})(c__21895__auto___22573,tc,fc))
;
return ((function (switch__21783__auto__,c__21895__auto___22573,tc,fc){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_22565 = [null,null,null,null,null,null,null,null,null];
(statearr_22565[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_22565[(1)] = (1));

return statearr_22565;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_22544){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22566){if((e22566 instanceof Object)){
var ex__21787__auto__ = e22566;
var statearr_22567_22588 = state_22544;
(statearr_22567_22588[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22589 = state_22544;
state_22544 = G__22589;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_22544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_22544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___22573,tc,fc))
})();
var state__21897__auto__ = (function (){var statearr_22568 = f__21896__auto__.call(null);
(statearr_22568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___22573);

return statearr_22568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___22573,tc,fc))
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
var c__21895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto__){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto__){
return (function (state_22653){
var state_val_22654 = (state_22653[(1)]);
if((state_val_22654 === (7))){
var inst_22649 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22655_22676 = state_22653__$1;
(statearr_22655_22676[(2)] = inst_22649);

(statearr_22655_22676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (1))){
var inst_22633 = init;
var state_22653__$1 = (function (){var statearr_22656 = state_22653;
(statearr_22656[(7)] = inst_22633);

return statearr_22656;
})();
var statearr_22657_22677 = state_22653__$1;
(statearr_22657_22677[(2)] = null);

(statearr_22657_22677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (4))){
var inst_22636 = (state_22653[(8)]);
var inst_22636__$1 = (state_22653[(2)]);
var inst_22637 = (inst_22636__$1 == null);
var state_22653__$1 = (function (){var statearr_22658 = state_22653;
(statearr_22658[(8)] = inst_22636__$1);

return statearr_22658;
})();
if(cljs.core.truth_(inst_22637)){
var statearr_22659_22678 = state_22653__$1;
(statearr_22659_22678[(1)] = (5));

} else {
var statearr_22660_22679 = state_22653__$1;
(statearr_22660_22679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (6))){
var inst_22640 = (state_22653[(9)]);
var inst_22633 = (state_22653[(7)]);
var inst_22636 = (state_22653[(8)]);
var inst_22640__$1 = f.call(null,inst_22633,inst_22636);
var inst_22641 = cljs.core.reduced_QMARK_.call(null,inst_22640__$1);
var state_22653__$1 = (function (){var statearr_22661 = state_22653;
(statearr_22661[(9)] = inst_22640__$1);

return statearr_22661;
})();
if(inst_22641){
var statearr_22662_22680 = state_22653__$1;
(statearr_22662_22680[(1)] = (8));

} else {
var statearr_22663_22681 = state_22653__$1;
(statearr_22663_22681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (3))){
var inst_22651 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22653__$1,inst_22651);
} else {
if((state_val_22654 === (2))){
var state_22653__$1 = state_22653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22653__$1,(4),ch);
} else {
if((state_val_22654 === (9))){
var inst_22640 = (state_22653[(9)]);
var inst_22633 = inst_22640;
var state_22653__$1 = (function (){var statearr_22664 = state_22653;
(statearr_22664[(7)] = inst_22633);

return statearr_22664;
})();
var statearr_22665_22682 = state_22653__$1;
(statearr_22665_22682[(2)] = null);

(statearr_22665_22682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (5))){
var inst_22633 = (state_22653[(7)]);
var state_22653__$1 = state_22653;
var statearr_22666_22683 = state_22653__$1;
(statearr_22666_22683[(2)] = inst_22633);

(statearr_22666_22683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (10))){
var inst_22647 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22667_22684 = state_22653__$1;
(statearr_22667_22684[(2)] = inst_22647);

(statearr_22667_22684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (8))){
var inst_22640 = (state_22653[(9)]);
var inst_22643 = cljs.core.deref.call(null,inst_22640);
var state_22653__$1 = state_22653;
var statearr_22668_22685 = state_22653__$1;
(statearr_22668_22685[(2)] = inst_22643);

(statearr_22668_22685[(1)] = (10));


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
});})(c__21895__auto__))
;
return ((function (switch__21783__auto__,c__21895__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21784__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21784__auto____0 = (function (){
var statearr_22672 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22672[(0)] = cljs$core$async$reduce_$_state_machine__21784__auto__);

(statearr_22672[(1)] = (1));

return statearr_22672;
});
var cljs$core$async$reduce_$_state_machine__21784__auto____1 = (function (state_22653){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22673){if((e22673 instanceof Object)){
var ex__21787__auto__ = e22673;
var statearr_22674_22686 = state_22653;
(statearr_22674_22686[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22687 = state_22653;
state_22653 = G__22687;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21784__auto__ = function(state_22653){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21784__auto____1.call(this,state_22653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21784__auto____0;
cljs$core$async$reduce_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21784__auto____1;
return cljs$core$async$reduce_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto__))
})();
var state__21897__auto__ = (function (){var statearr_22675 = f__21896__auto__.call(null);
(statearr_22675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto__);

return statearr_22675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto__))
);

return c__21895__auto__;
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
var args22688 = [];
var len__17899__auto___22740 = arguments.length;
var i__17900__auto___22741 = (0);
while(true){
if((i__17900__auto___22741 < len__17899__auto___22740)){
args22688.push((arguments[i__17900__auto___22741]));

var G__22742 = (i__17900__auto___22741 + (1));
i__17900__auto___22741 = G__22742;
continue;
} else {
}
break;
}

var G__22690 = args22688.length;
switch (G__22690) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22688.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto__){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto__){
return (function (state_22715){
var state_val_22716 = (state_22715[(1)]);
if((state_val_22716 === (7))){
var inst_22697 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22717_22744 = state_22715__$1;
(statearr_22717_22744[(2)] = inst_22697);

(statearr_22717_22744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (1))){
var inst_22691 = cljs.core.seq.call(null,coll);
var inst_22692 = inst_22691;
var state_22715__$1 = (function (){var statearr_22718 = state_22715;
(statearr_22718[(7)] = inst_22692);

return statearr_22718;
})();
var statearr_22719_22745 = state_22715__$1;
(statearr_22719_22745[(2)] = null);

(statearr_22719_22745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (4))){
var inst_22692 = (state_22715[(7)]);
var inst_22695 = cljs.core.first.call(null,inst_22692);
var state_22715__$1 = state_22715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22715__$1,(7),ch,inst_22695);
} else {
if((state_val_22716 === (13))){
var inst_22709 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22720_22746 = state_22715__$1;
(statearr_22720_22746[(2)] = inst_22709);

(statearr_22720_22746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (6))){
var inst_22700 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
if(cljs.core.truth_(inst_22700)){
var statearr_22721_22747 = state_22715__$1;
(statearr_22721_22747[(1)] = (8));

} else {
var statearr_22722_22748 = state_22715__$1;
(statearr_22722_22748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (3))){
var inst_22713 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22715__$1,inst_22713);
} else {
if((state_val_22716 === (12))){
var state_22715__$1 = state_22715;
var statearr_22723_22749 = state_22715__$1;
(statearr_22723_22749[(2)] = null);

(statearr_22723_22749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (2))){
var inst_22692 = (state_22715[(7)]);
var state_22715__$1 = state_22715;
if(cljs.core.truth_(inst_22692)){
var statearr_22724_22750 = state_22715__$1;
(statearr_22724_22750[(1)] = (4));

} else {
var statearr_22725_22751 = state_22715__$1;
(statearr_22725_22751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (11))){
var inst_22706 = cljs.core.async.close_BANG_.call(null,ch);
var state_22715__$1 = state_22715;
var statearr_22726_22752 = state_22715__$1;
(statearr_22726_22752[(2)] = inst_22706);

(statearr_22726_22752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (9))){
var state_22715__$1 = state_22715;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22727_22753 = state_22715__$1;
(statearr_22727_22753[(1)] = (11));

} else {
var statearr_22728_22754 = state_22715__$1;
(statearr_22728_22754[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (5))){
var inst_22692 = (state_22715[(7)]);
var state_22715__$1 = state_22715;
var statearr_22729_22755 = state_22715__$1;
(statearr_22729_22755[(2)] = inst_22692);

(statearr_22729_22755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (10))){
var inst_22711 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22730_22756 = state_22715__$1;
(statearr_22730_22756[(2)] = inst_22711);

(statearr_22730_22756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (8))){
var inst_22692 = (state_22715[(7)]);
var inst_22702 = cljs.core.next.call(null,inst_22692);
var inst_22692__$1 = inst_22702;
var state_22715__$1 = (function (){var statearr_22731 = state_22715;
(statearr_22731[(7)] = inst_22692__$1);

return statearr_22731;
})();
var statearr_22732_22757 = state_22715__$1;
(statearr_22732_22757[(2)] = null);

(statearr_22732_22757[(1)] = (2));


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
});})(c__21895__auto__))
;
return ((function (switch__21783__auto__,c__21895__auto__){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_22736 = [null,null,null,null,null,null,null,null];
(statearr_22736[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_22736[(1)] = (1));

return statearr_22736;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_22715){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_22715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e22737){if((e22737 instanceof Object)){
var ex__21787__auto__ = e22737;
var statearr_22738_22758 = state_22715;
(statearr_22738_22758[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22759 = state_22715;
state_22715 = G__22759;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_22715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_22715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto__))
})();
var state__21897__auto__ = (function (){var statearr_22739 = f__21896__auto__.call(null);
(statearr_22739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto__);

return statearr_22739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto__))
);

return c__21895__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22981 = (function (mult,ch,cs,meta22982){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22982 = meta22982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22983,meta22982__$1){
var self__ = this;
var _22983__$1 = this;
return (new cljs.core.async.t_cljs$core$async22981(self__.mult,self__.ch,self__.cs,meta22982__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22983){
var self__ = this;
var _22983__$1 = this;
return self__.meta22982;
});})(cs))
;

cljs.core.async.t_cljs$core$async22981.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22981.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22981.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22981.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22981.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22981.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22982","meta22982",-1191047900,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22981";

cljs.core.async.t_cljs$core$async22981.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22981");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22981 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22981(mult__$1,ch__$1,cs__$1,meta22982){
return (new cljs.core.async.t_cljs$core$async22981(mult__$1,ch__$1,cs__$1,meta22982));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22981(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21895__auto___23202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___23202,cs,m,dchan,dctr,done){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___23202,cs,m,dchan,dctr,done){
return (function (state_23114){
var state_val_23115 = (state_23114[(1)]);
if((state_val_23115 === (7))){
var inst_23110 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23116_23203 = state_23114__$1;
(statearr_23116_23203[(2)] = inst_23110);

(statearr_23116_23203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (20))){
var inst_23015 = (state_23114[(7)]);
var inst_23025 = cljs.core.first.call(null,inst_23015);
var inst_23026 = cljs.core.nth.call(null,inst_23025,(0),null);
var inst_23027 = cljs.core.nth.call(null,inst_23025,(1),null);
var state_23114__$1 = (function (){var statearr_23117 = state_23114;
(statearr_23117[(8)] = inst_23026);

return statearr_23117;
})();
if(cljs.core.truth_(inst_23027)){
var statearr_23118_23204 = state_23114__$1;
(statearr_23118_23204[(1)] = (22));

} else {
var statearr_23119_23205 = state_23114__$1;
(statearr_23119_23205[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (27))){
var inst_23057 = (state_23114[(9)]);
var inst_23055 = (state_23114[(10)]);
var inst_23062 = (state_23114[(11)]);
var inst_22986 = (state_23114[(12)]);
var inst_23062__$1 = cljs.core._nth.call(null,inst_23055,inst_23057);
var inst_23063 = cljs.core.async.put_BANG_.call(null,inst_23062__$1,inst_22986,done);
var state_23114__$1 = (function (){var statearr_23120 = state_23114;
(statearr_23120[(11)] = inst_23062__$1);

return statearr_23120;
})();
if(cljs.core.truth_(inst_23063)){
var statearr_23121_23206 = state_23114__$1;
(statearr_23121_23206[(1)] = (30));

} else {
var statearr_23122_23207 = state_23114__$1;
(statearr_23122_23207[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (1))){
var state_23114__$1 = state_23114;
var statearr_23123_23208 = state_23114__$1;
(statearr_23123_23208[(2)] = null);

(statearr_23123_23208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (24))){
var inst_23015 = (state_23114[(7)]);
var inst_23032 = (state_23114[(2)]);
var inst_23033 = cljs.core.next.call(null,inst_23015);
var inst_22995 = inst_23033;
var inst_22996 = null;
var inst_22997 = (0);
var inst_22998 = (0);
var state_23114__$1 = (function (){var statearr_23124 = state_23114;
(statearr_23124[(13)] = inst_23032);

(statearr_23124[(14)] = inst_22996);

(statearr_23124[(15)] = inst_22997);

(statearr_23124[(16)] = inst_22995);

(statearr_23124[(17)] = inst_22998);

return statearr_23124;
})();
var statearr_23125_23209 = state_23114__$1;
(statearr_23125_23209[(2)] = null);

(statearr_23125_23209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (39))){
var state_23114__$1 = state_23114;
var statearr_23129_23210 = state_23114__$1;
(statearr_23129_23210[(2)] = null);

(statearr_23129_23210[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (4))){
var inst_22986 = (state_23114[(12)]);
var inst_22986__$1 = (state_23114[(2)]);
var inst_22987 = (inst_22986__$1 == null);
var state_23114__$1 = (function (){var statearr_23130 = state_23114;
(statearr_23130[(12)] = inst_22986__$1);

return statearr_23130;
})();
if(cljs.core.truth_(inst_22987)){
var statearr_23131_23211 = state_23114__$1;
(statearr_23131_23211[(1)] = (5));

} else {
var statearr_23132_23212 = state_23114__$1;
(statearr_23132_23212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (15))){
var inst_22996 = (state_23114[(14)]);
var inst_22997 = (state_23114[(15)]);
var inst_22995 = (state_23114[(16)]);
var inst_22998 = (state_23114[(17)]);
var inst_23011 = (state_23114[(2)]);
var inst_23012 = (inst_22998 + (1));
var tmp23126 = inst_22996;
var tmp23127 = inst_22997;
var tmp23128 = inst_22995;
var inst_22995__$1 = tmp23128;
var inst_22996__$1 = tmp23126;
var inst_22997__$1 = tmp23127;
var inst_22998__$1 = inst_23012;
var state_23114__$1 = (function (){var statearr_23133 = state_23114;
(statearr_23133[(18)] = inst_23011);

(statearr_23133[(14)] = inst_22996__$1);

(statearr_23133[(15)] = inst_22997__$1);

(statearr_23133[(16)] = inst_22995__$1);

(statearr_23133[(17)] = inst_22998__$1);

return statearr_23133;
})();
var statearr_23134_23213 = state_23114__$1;
(statearr_23134_23213[(2)] = null);

(statearr_23134_23213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (21))){
var inst_23036 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23138_23214 = state_23114__$1;
(statearr_23138_23214[(2)] = inst_23036);

(statearr_23138_23214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (31))){
var inst_23062 = (state_23114[(11)]);
var inst_23066 = done.call(null,null);
var inst_23067 = cljs.core.async.untap_STAR_.call(null,m,inst_23062);
var state_23114__$1 = (function (){var statearr_23139 = state_23114;
(statearr_23139[(19)] = inst_23066);

return statearr_23139;
})();
var statearr_23140_23215 = state_23114__$1;
(statearr_23140_23215[(2)] = inst_23067);

(statearr_23140_23215[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (32))){
var inst_23057 = (state_23114[(9)]);
var inst_23054 = (state_23114[(20)]);
var inst_23055 = (state_23114[(10)]);
var inst_23056 = (state_23114[(21)]);
var inst_23069 = (state_23114[(2)]);
var inst_23070 = (inst_23057 + (1));
var tmp23135 = inst_23054;
var tmp23136 = inst_23055;
var tmp23137 = inst_23056;
var inst_23054__$1 = tmp23135;
var inst_23055__$1 = tmp23136;
var inst_23056__$1 = tmp23137;
var inst_23057__$1 = inst_23070;
var state_23114__$1 = (function (){var statearr_23141 = state_23114;
(statearr_23141[(9)] = inst_23057__$1);

(statearr_23141[(22)] = inst_23069);

(statearr_23141[(20)] = inst_23054__$1);

(statearr_23141[(10)] = inst_23055__$1);

(statearr_23141[(21)] = inst_23056__$1);

return statearr_23141;
})();
var statearr_23142_23216 = state_23114__$1;
(statearr_23142_23216[(2)] = null);

(statearr_23142_23216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (40))){
var inst_23082 = (state_23114[(23)]);
var inst_23086 = done.call(null,null);
var inst_23087 = cljs.core.async.untap_STAR_.call(null,m,inst_23082);
var state_23114__$1 = (function (){var statearr_23143 = state_23114;
(statearr_23143[(24)] = inst_23086);

return statearr_23143;
})();
var statearr_23144_23217 = state_23114__$1;
(statearr_23144_23217[(2)] = inst_23087);

(statearr_23144_23217[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (33))){
var inst_23073 = (state_23114[(25)]);
var inst_23075 = cljs.core.chunked_seq_QMARK_.call(null,inst_23073);
var state_23114__$1 = state_23114;
if(inst_23075){
var statearr_23145_23218 = state_23114__$1;
(statearr_23145_23218[(1)] = (36));

} else {
var statearr_23146_23219 = state_23114__$1;
(statearr_23146_23219[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (13))){
var inst_23005 = (state_23114[(26)]);
var inst_23008 = cljs.core.async.close_BANG_.call(null,inst_23005);
var state_23114__$1 = state_23114;
var statearr_23147_23220 = state_23114__$1;
(statearr_23147_23220[(2)] = inst_23008);

(statearr_23147_23220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (22))){
var inst_23026 = (state_23114[(8)]);
var inst_23029 = cljs.core.async.close_BANG_.call(null,inst_23026);
var state_23114__$1 = state_23114;
var statearr_23148_23221 = state_23114__$1;
(statearr_23148_23221[(2)] = inst_23029);

(statearr_23148_23221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (36))){
var inst_23073 = (state_23114[(25)]);
var inst_23077 = cljs.core.chunk_first.call(null,inst_23073);
var inst_23078 = cljs.core.chunk_rest.call(null,inst_23073);
var inst_23079 = cljs.core.count.call(null,inst_23077);
var inst_23054 = inst_23078;
var inst_23055 = inst_23077;
var inst_23056 = inst_23079;
var inst_23057 = (0);
var state_23114__$1 = (function (){var statearr_23149 = state_23114;
(statearr_23149[(9)] = inst_23057);

(statearr_23149[(20)] = inst_23054);

(statearr_23149[(10)] = inst_23055);

(statearr_23149[(21)] = inst_23056);

return statearr_23149;
})();
var statearr_23150_23222 = state_23114__$1;
(statearr_23150_23222[(2)] = null);

(statearr_23150_23222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (41))){
var inst_23073 = (state_23114[(25)]);
var inst_23089 = (state_23114[(2)]);
var inst_23090 = cljs.core.next.call(null,inst_23073);
var inst_23054 = inst_23090;
var inst_23055 = null;
var inst_23056 = (0);
var inst_23057 = (0);
var state_23114__$1 = (function (){var statearr_23151 = state_23114;
(statearr_23151[(9)] = inst_23057);

(statearr_23151[(27)] = inst_23089);

(statearr_23151[(20)] = inst_23054);

(statearr_23151[(10)] = inst_23055);

(statearr_23151[(21)] = inst_23056);

return statearr_23151;
})();
var statearr_23152_23223 = state_23114__$1;
(statearr_23152_23223[(2)] = null);

(statearr_23152_23223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (43))){
var state_23114__$1 = state_23114;
var statearr_23153_23224 = state_23114__$1;
(statearr_23153_23224[(2)] = null);

(statearr_23153_23224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (29))){
var inst_23098 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23154_23225 = state_23114__$1;
(statearr_23154_23225[(2)] = inst_23098);

(statearr_23154_23225[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (44))){
var inst_23107 = (state_23114[(2)]);
var state_23114__$1 = (function (){var statearr_23155 = state_23114;
(statearr_23155[(28)] = inst_23107);

return statearr_23155;
})();
var statearr_23156_23226 = state_23114__$1;
(statearr_23156_23226[(2)] = null);

(statearr_23156_23226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (6))){
var inst_23046 = (state_23114[(29)]);
var inst_23045 = cljs.core.deref.call(null,cs);
var inst_23046__$1 = cljs.core.keys.call(null,inst_23045);
var inst_23047 = cljs.core.count.call(null,inst_23046__$1);
var inst_23048 = cljs.core.reset_BANG_.call(null,dctr,inst_23047);
var inst_23053 = cljs.core.seq.call(null,inst_23046__$1);
var inst_23054 = inst_23053;
var inst_23055 = null;
var inst_23056 = (0);
var inst_23057 = (0);
var state_23114__$1 = (function (){var statearr_23157 = state_23114;
(statearr_23157[(9)] = inst_23057);

(statearr_23157[(20)] = inst_23054);

(statearr_23157[(10)] = inst_23055);

(statearr_23157[(21)] = inst_23056);

(statearr_23157[(30)] = inst_23048);

(statearr_23157[(29)] = inst_23046__$1);

return statearr_23157;
})();
var statearr_23158_23227 = state_23114__$1;
(statearr_23158_23227[(2)] = null);

(statearr_23158_23227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (28))){
var inst_23054 = (state_23114[(20)]);
var inst_23073 = (state_23114[(25)]);
var inst_23073__$1 = cljs.core.seq.call(null,inst_23054);
var state_23114__$1 = (function (){var statearr_23159 = state_23114;
(statearr_23159[(25)] = inst_23073__$1);

return statearr_23159;
})();
if(inst_23073__$1){
var statearr_23160_23228 = state_23114__$1;
(statearr_23160_23228[(1)] = (33));

} else {
var statearr_23161_23229 = state_23114__$1;
(statearr_23161_23229[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (25))){
var inst_23057 = (state_23114[(9)]);
var inst_23056 = (state_23114[(21)]);
var inst_23059 = (inst_23057 < inst_23056);
var inst_23060 = inst_23059;
var state_23114__$1 = state_23114;
if(cljs.core.truth_(inst_23060)){
var statearr_23162_23230 = state_23114__$1;
(statearr_23162_23230[(1)] = (27));

} else {
var statearr_23163_23231 = state_23114__$1;
(statearr_23163_23231[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (34))){
var state_23114__$1 = state_23114;
var statearr_23164_23232 = state_23114__$1;
(statearr_23164_23232[(2)] = null);

(statearr_23164_23232[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (17))){
var state_23114__$1 = state_23114;
var statearr_23165_23233 = state_23114__$1;
(statearr_23165_23233[(2)] = null);

(statearr_23165_23233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (3))){
var inst_23112 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23114__$1,inst_23112);
} else {
if((state_val_23115 === (12))){
var inst_23041 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23166_23234 = state_23114__$1;
(statearr_23166_23234[(2)] = inst_23041);

(statearr_23166_23234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (2))){
var state_23114__$1 = state_23114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23114__$1,(4),ch);
} else {
if((state_val_23115 === (23))){
var state_23114__$1 = state_23114;
var statearr_23167_23235 = state_23114__$1;
(statearr_23167_23235[(2)] = null);

(statearr_23167_23235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (35))){
var inst_23096 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23168_23236 = state_23114__$1;
(statearr_23168_23236[(2)] = inst_23096);

(statearr_23168_23236[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (19))){
var inst_23015 = (state_23114[(7)]);
var inst_23019 = cljs.core.chunk_first.call(null,inst_23015);
var inst_23020 = cljs.core.chunk_rest.call(null,inst_23015);
var inst_23021 = cljs.core.count.call(null,inst_23019);
var inst_22995 = inst_23020;
var inst_22996 = inst_23019;
var inst_22997 = inst_23021;
var inst_22998 = (0);
var state_23114__$1 = (function (){var statearr_23169 = state_23114;
(statearr_23169[(14)] = inst_22996);

(statearr_23169[(15)] = inst_22997);

(statearr_23169[(16)] = inst_22995);

(statearr_23169[(17)] = inst_22998);

return statearr_23169;
})();
var statearr_23170_23237 = state_23114__$1;
(statearr_23170_23237[(2)] = null);

(statearr_23170_23237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (11))){
var inst_22995 = (state_23114[(16)]);
var inst_23015 = (state_23114[(7)]);
var inst_23015__$1 = cljs.core.seq.call(null,inst_22995);
var state_23114__$1 = (function (){var statearr_23171 = state_23114;
(statearr_23171[(7)] = inst_23015__$1);

return statearr_23171;
})();
if(inst_23015__$1){
var statearr_23172_23238 = state_23114__$1;
(statearr_23172_23238[(1)] = (16));

} else {
var statearr_23173_23239 = state_23114__$1;
(statearr_23173_23239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (9))){
var inst_23043 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23174_23240 = state_23114__$1;
(statearr_23174_23240[(2)] = inst_23043);

(statearr_23174_23240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (5))){
var inst_22993 = cljs.core.deref.call(null,cs);
var inst_22994 = cljs.core.seq.call(null,inst_22993);
var inst_22995 = inst_22994;
var inst_22996 = null;
var inst_22997 = (0);
var inst_22998 = (0);
var state_23114__$1 = (function (){var statearr_23175 = state_23114;
(statearr_23175[(14)] = inst_22996);

(statearr_23175[(15)] = inst_22997);

(statearr_23175[(16)] = inst_22995);

(statearr_23175[(17)] = inst_22998);

return statearr_23175;
})();
var statearr_23176_23241 = state_23114__$1;
(statearr_23176_23241[(2)] = null);

(statearr_23176_23241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (14))){
var state_23114__$1 = state_23114;
var statearr_23177_23242 = state_23114__$1;
(statearr_23177_23242[(2)] = null);

(statearr_23177_23242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (45))){
var inst_23104 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23178_23243 = state_23114__$1;
(statearr_23178_23243[(2)] = inst_23104);

(statearr_23178_23243[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (26))){
var inst_23046 = (state_23114[(29)]);
var inst_23100 = (state_23114[(2)]);
var inst_23101 = cljs.core.seq.call(null,inst_23046);
var state_23114__$1 = (function (){var statearr_23179 = state_23114;
(statearr_23179[(31)] = inst_23100);

return statearr_23179;
})();
if(inst_23101){
var statearr_23180_23244 = state_23114__$1;
(statearr_23180_23244[(1)] = (42));

} else {
var statearr_23181_23245 = state_23114__$1;
(statearr_23181_23245[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (16))){
var inst_23015 = (state_23114[(7)]);
var inst_23017 = cljs.core.chunked_seq_QMARK_.call(null,inst_23015);
var state_23114__$1 = state_23114;
if(inst_23017){
var statearr_23182_23246 = state_23114__$1;
(statearr_23182_23246[(1)] = (19));

} else {
var statearr_23183_23247 = state_23114__$1;
(statearr_23183_23247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (38))){
var inst_23093 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23184_23248 = state_23114__$1;
(statearr_23184_23248[(2)] = inst_23093);

(statearr_23184_23248[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (30))){
var state_23114__$1 = state_23114;
var statearr_23185_23249 = state_23114__$1;
(statearr_23185_23249[(2)] = null);

(statearr_23185_23249[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (10))){
var inst_22996 = (state_23114[(14)]);
var inst_22998 = (state_23114[(17)]);
var inst_23004 = cljs.core._nth.call(null,inst_22996,inst_22998);
var inst_23005 = cljs.core.nth.call(null,inst_23004,(0),null);
var inst_23006 = cljs.core.nth.call(null,inst_23004,(1),null);
var state_23114__$1 = (function (){var statearr_23186 = state_23114;
(statearr_23186[(26)] = inst_23005);

return statearr_23186;
})();
if(cljs.core.truth_(inst_23006)){
var statearr_23187_23250 = state_23114__$1;
(statearr_23187_23250[(1)] = (13));

} else {
var statearr_23188_23251 = state_23114__$1;
(statearr_23188_23251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (18))){
var inst_23039 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23189_23252 = state_23114__$1;
(statearr_23189_23252[(2)] = inst_23039);

(statearr_23189_23252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (42))){
var state_23114__$1 = state_23114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23114__$1,(45),dchan);
} else {
if((state_val_23115 === (37))){
var inst_23082 = (state_23114[(23)]);
var inst_22986 = (state_23114[(12)]);
var inst_23073 = (state_23114[(25)]);
var inst_23082__$1 = cljs.core.first.call(null,inst_23073);
var inst_23083 = cljs.core.async.put_BANG_.call(null,inst_23082__$1,inst_22986,done);
var state_23114__$1 = (function (){var statearr_23190 = state_23114;
(statearr_23190[(23)] = inst_23082__$1);

return statearr_23190;
})();
if(cljs.core.truth_(inst_23083)){
var statearr_23191_23253 = state_23114__$1;
(statearr_23191_23253[(1)] = (39));

} else {
var statearr_23192_23254 = state_23114__$1;
(statearr_23192_23254[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23115 === (8))){
var inst_22997 = (state_23114[(15)]);
var inst_22998 = (state_23114[(17)]);
var inst_23000 = (inst_22998 < inst_22997);
var inst_23001 = inst_23000;
var state_23114__$1 = state_23114;
if(cljs.core.truth_(inst_23001)){
var statearr_23193_23255 = state_23114__$1;
(statearr_23193_23255[(1)] = (10));

} else {
var statearr_23194_23256 = state_23114__$1;
(statearr_23194_23256[(1)] = (11));

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
});})(c__21895__auto___23202,cs,m,dchan,dctr,done))
;
return ((function (switch__21783__auto__,c__21895__auto___23202,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21784__auto__ = null;
var cljs$core$async$mult_$_state_machine__21784__auto____0 = (function (){
var statearr_23198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23198[(0)] = cljs$core$async$mult_$_state_machine__21784__auto__);

(statearr_23198[(1)] = (1));

return statearr_23198;
});
var cljs$core$async$mult_$_state_machine__21784__auto____1 = (function (state_23114){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_23114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e23199){if((e23199 instanceof Object)){
var ex__21787__auto__ = e23199;
var statearr_23200_23257 = state_23114;
(statearr_23200_23257[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23258 = state_23114;
state_23114 = G__23258;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21784__auto__ = function(state_23114){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21784__auto____1.call(this,state_23114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21784__auto____0;
cljs$core$async$mult_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21784__auto____1;
return cljs$core$async$mult_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___23202,cs,m,dchan,dctr,done))
})();
var state__21897__auto__ = (function (){var statearr_23201 = f__21896__auto__.call(null);
(statearr_23201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___23202);

return statearr_23201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___23202,cs,m,dchan,dctr,done))
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
var args23259 = [];
var len__17899__auto___23262 = arguments.length;
var i__17900__auto___23263 = (0);
while(true){
if((i__17900__auto___23263 < len__17899__auto___23262)){
args23259.push((arguments[i__17900__auto___23263]));

var G__23264 = (i__17900__auto___23263 + (1));
i__17900__auto___23263 = G__23264;
continue;
} else {
}
break;
}

var G__23261 = args23259.length;
switch (G__23261) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23259.length)].join('')));

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
var len__17899__auto___23276 = arguments.length;
var i__17900__auto___23277 = (0);
while(true){
if((i__17900__auto___23277 < len__17899__auto___23276)){
args__17906__auto__.push((arguments[i__17900__auto___23277]));

var G__23278 = (i__17900__auto___23277 + (1));
i__17900__auto___23277 = G__23278;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((3) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17907__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23270){
var map__23271 = p__23270;
var map__23271__$1 = ((((!((map__23271 == null)))?((((map__23271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23271):map__23271);
var opts = map__23271__$1;
var statearr_23273_23279 = state;
(statearr_23273_23279[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23271,map__23271__$1,opts){
return (function (val){
var statearr_23274_23280 = state;
(statearr_23274_23280[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23271,map__23271__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23275_23281 = state;
(statearr_23275_23281[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23266){
var G__23267 = cljs.core.first.call(null,seq23266);
var seq23266__$1 = cljs.core.next.call(null,seq23266);
var G__23268 = cljs.core.first.call(null,seq23266__$1);
var seq23266__$2 = cljs.core.next.call(null,seq23266__$1);
var G__23269 = cljs.core.first.call(null,seq23266__$2);
var seq23266__$3 = cljs.core.next.call(null,seq23266__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23267,G__23268,G__23269,seq23266__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23445 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23446){
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
this.meta23446 = meta23446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23447,meta23446__$1){
var self__ = this;
var _23447__$1 = this;
return (new cljs.core.async.t_cljs$core$async23445(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23446__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23447){
var self__ = this;
var _23447__$1 = this;
return self__.meta23446;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23445.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23446","meta23446",-1188261893,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23445";

cljs.core.async.t_cljs$core$async23445.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async23445");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23445 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23445(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23446){
return (new cljs.core.async.t_cljs$core$async23445(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23446));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23445(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21895__auto___23608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___23608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___23608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23545){
var state_val_23546 = (state_23545[(1)]);
if((state_val_23546 === (7))){
var inst_23463 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23547_23609 = state_23545__$1;
(statearr_23547_23609[(2)] = inst_23463);

(statearr_23547_23609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (20))){
var inst_23475 = (state_23545[(7)]);
var state_23545__$1 = state_23545;
var statearr_23548_23610 = state_23545__$1;
(statearr_23548_23610[(2)] = inst_23475);

(statearr_23548_23610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (27))){
var state_23545__$1 = state_23545;
var statearr_23549_23611 = state_23545__$1;
(statearr_23549_23611[(2)] = null);

(statearr_23549_23611[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (1))){
var inst_23451 = (state_23545[(8)]);
var inst_23451__$1 = calc_state.call(null);
var inst_23453 = (inst_23451__$1 == null);
var inst_23454 = cljs.core.not.call(null,inst_23453);
var state_23545__$1 = (function (){var statearr_23550 = state_23545;
(statearr_23550[(8)] = inst_23451__$1);

return statearr_23550;
})();
if(inst_23454){
var statearr_23551_23612 = state_23545__$1;
(statearr_23551_23612[(1)] = (2));

} else {
var statearr_23552_23613 = state_23545__$1;
(statearr_23552_23613[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (24))){
var inst_23505 = (state_23545[(9)]);
var inst_23519 = (state_23545[(10)]);
var inst_23498 = (state_23545[(11)]);
var inst_23519__$1 = inst_23498.call(null,inst_23505);
var state_23545__$1 = (function (){var statearr_23553 = state_23545;
(statearr_23553[(10)] = inst_23519__$1);

return statearr_23553;
})();
if(cljs.core.truth_(inst_23519__$1)){
var statearr_23554_23614 = state_23545__$1;
(statearr_23554_23614[(1)] = (29));

} else {
var statearr_23555_23615 = state_23545__$1;
(statearr_23555_23615[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (4))){
var inst_23466 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23466)){
var statearr_23556_23616 = state_23545__$1;
(statearr_23556_23616[(1)] = (8));

} else {
var statearr_23557_23617 = state_23545__$1;
(statearr_23557_23617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (15))){
var inst_23492 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23492)){
var statearr_23558_23618 = state_23545__$1;
(statearr_23558_23618[(1)] = (19));

} else {
var statearr_23559_23619 = state_23545__$1;
(statearr_23559_23619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (21))){
var inst_23497 = (state_23545[(12)]);
var inst_23497__$1 = (state_23545[(2)]);
var inst_23498 = cljs.core.get.call(null,inst_23497__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23499 = cljs.core.get.call(null,inst_23497__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23500 = cljs.core.get.call(null,inst_23497__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23545__$1 = (function (){var statearr_23560 = state_23545;
(statearr_23560[(12)] = inst_23497__$1);

(statearr_23560[(13)] = inst_23499);

(statearr_23560[(11)] = inst_23498);

return statearr_23560;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23545__$1,(22),inst_23500);
} else {
if((state_val_23546 === (31))){
var inst_23527 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23527)){
var statearr_23561_23620 = state_23545__$1;
(statearr_23561_23620[(1)] = (32));

} else {
var statearr_23562_23621 = state_23545__$1;
(statearr_23562_23621[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (32))){
var inst_23504 = (state_23545[(14)]);
var state_23545__$1 = state_23545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23545__$1,(35),out,inst_23504);
} else {
if((state_val_23546 === (33))){
var inst_23497 = (state_23545[(12)]);
var inst_23475 = inst_23497;
var state_23545__$1 = (function (){var statearr_23563 = state_23545;
(statearr_23563[(7)] = inst_23475);

return statearr_23563;
})();
var statearr_23564_23622 = state_23545__$1;
(statearr_23564_23622[(2)] = null);

(statearr_23564_23622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (13))){
var inst_23475 = (state_23545[(7)]);
var inst_23482 = inst_23475.cljs$lang$protocol_mask$partition0$;
var inst_23483 = (inst_23482 & (64));
var inst_23484 = inst_23475.cljs$core$ISeq$;
var inst_23485 = (inst_23483) || (inst_23484);
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23485)){
var statearr_23565_23623 = state_23545__$1;
(statearr_23565_23623[(1)] = (16));

} else {
var statearr_23566_23624 = state_23545__$1;
(statearr_23566_23624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (22))){
var inst_23505 = (state_23545[(9)]);
var inst_23504 = (state_23545[(14)]);
var inst_23503 = (state_23545[(2)]);
var inst_23504__$1 = cljs.core.nth.call(null,inst_23503,(0),null);
var inst_23505__$1 = cljs.core.nth.call(null,inst_23503,(1),null);
var inst_23506 = (inst_23504__$1 == null);
var inst_23507 = cljs.core._EQ_.call(null,inst_23505__$1,change);
var inst_23508 = (inst_23506) || (inst_23507);
var state_23545__$1 = (function (){var statearr_23567 = state_23545;
(statearr_23567[(9)] = inst_23505__$1);

(statearr_23567[(14)] = inst_23504__$1);

return statearr_23567;
})();
if(cljs.core.truth_(inst_23508)){
var statearr_23568_23625 = state_23545__$1;
(statearr_23568_23625[(1)] = (23));

} else {
var statearr_23569_23626 = state_23545__$1;
(statearr_23569_23626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (36))){
var inst_23497 = (state_23545[(12)]);
var inst_23475 = inst_23497;
var state_23545__$1 = (function (){var statearr_23570 = state_23545;
(statearr_23570[(7)] = inst_23475);

return statearr_23570;
})();
var statearr_23571_23627 = state_23545__$1;
(statearr_23571_23627[(2)] = null);

(statearr_23571_23627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (29))){
var inst_23519 = (state_23545[(10)]);
var state_23545__$1 = state_23545;
var statearr_23572_23628 = state_23545__$1;
(statearr_23572_23628[(2)] = inst_23519);

(statearr_23572_23628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (6))){
var state_23545__$1 = state_23545;
var statearr_23573_23629 = state_23545__$1;
(statearr_23573_23629[(2)] = false);

(statearr_23573_23629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (28))){
var inst_23515 = (state_23545[(2)]);
var inst_23516 = calc_state.call(null);
var inst_23475 = inst_23516;
var state_23545__$1 = (function (){var statearr_23574 = state_23545;
(statearr_23574[(7)] = inst_23475);

(statearr_23574[(15)] = inst_23515);

return statearr_23574;
})();
var statearr_23575_23630 = state_23545__$1;
(statearr_23575_23630[(2)] = null);

(statearr_23575_23630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (25))){
var inst_23541 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23576_23631 = state_23545__$1;
(statearr_23576_23631[(2)] = inst_23541);

(statearr_23576_23631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (34))){
var inst_23539 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23577_23632 = state_23545__$1;
(statearr_23577_23632[(2)] = inst_23539);

(statearr_23577_23632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (17))){
var state_23545__$1 = state_23545;
var statearr_23578_23633 = state_23545__$1;
(statearr_23578_23633[(2)] = false);

(statearr_23578_23633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (3))){
var state_23545__$1 = state_23545;
var statearr_23579_23634 = state_23545__$1;
(statearr_23579_23634[(2)] = false);

(statearr_23579_23634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (12))){
var inst_23543 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23545__$1,inst_23543);
} else {
if((state_val_23546 === (2))){
var inst_23451 = (state_23545[(8)]);
var inst_23456 = inst_23451.cljs$lang$protocol_mask$partition0$;
var inst_23457 = (inst_23456 & (64));
var inst_23458 = inst_23451.cljs$core$ISeq$;
var inst_23459 = (inst_23457) || (inst_23458);
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23459)){
var statearr_23580_23635 = state_23545__$1;
(statearr_23580_23635[(1)] = (5));

} else {
var statearr_23581_23636 = state_23545__$1;
(statearr_23581_23636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (23))){
var inst_23504 = (state_23545[(14)]);
var inst_23510 = (inst_23504 == null);
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23510)){
var statearr_23582_23637 = state_23545__$1;
(statearr_23582_23637[(1)] = (26));

} else {
var statearr_23583_23638 = state_23545__$1;
(statearr_23583_23638[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (35))){
var inst_23530 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23530)){
var statearr_23584_23639 = state_23545__$1;
(statearr_23584_23639[(1)] = (36));

} else {
var statearr_23585_23640 = state_23545__$1;
(statearr_23585_23640[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (19))){
var inst_23475 = (state_23545[(7)]);
var inst_23494 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23475);
var state_23545__$1 = state_23545;
var statearr_23586_23641 = state_23545__$1;
(statearr_23586_23641[(2)] = inst_23494);

(statearr_23586_23641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (11))){
var inst_23475 = (state_23545[(7)]);
var inst_23479 = (inst_23475 == null);
var inst_23480 = cljs.core.not.call(null,inst_23479);
var state_23545__$1 = state_23545;
if(inst_23480){
var statearr_23587_23642 = state_23545__$1;
(statearr_23587_23642[(1)] = (13));

} else {
var statearr_23588_23643 = state_23545__$1;
(statearr_23588_23643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (9))){
var inst_23451 = (state_23545[(8)]);
var state_23545__$1 = state_23545;
var statearr_23589_23644 = state_23545__$1;
(statearr_23589_23644[(2)] = inst_23451);

(statearr_23589_23644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (5))){
var state_23545__$1 = state_23545;
var statearr_23590_23645 = state_23545__$1;
(statearr_23590_23645[(2)] = true);

(statearr_23590_23645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (14))){
var state_23545__$1 = state_23545;
var statearr_23591_23646 = state_23545__$1;
(statearr_23591_23646[(2)] = false);

(statearr_23591_23646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (26))){
var inst_23505 = (state_23545[(9)]);
var inst_23512 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23505);
var state_23545__$1 = state_23545;
var statearr_23592_23647 = state_23545__$1;
(statearr_23592_23647[(2)] = inst_23512);

(statearr_23592_23647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (16))){
var state_23545__$1 = state_23545;
var statearr_23593_23648 = state_23545__$1;
(statearr_23593_23648[(2)] = true);

(statearr_23593_23648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (38))){
var inst_23535 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23594_23649 = state_23545__$1;
(statearr_23594_23649[(2)] = inst_23535);

(statearr_23594_23649[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (30))){
var inst_23499 = (state_23545[(13)]);
var inst_23505 = (state_23545[(9)]);
var inst_23498 = (state_23545[(11)]);
var inst_23522 = cljs.core.empty_QMARK_.call(null,inst_23498);
var inst_23523 = inst_23499.call(null,inst_23505);
var inst_23524 = cljs.core.not.call(null,inst_23523);
var inst_23525 = (inst_23522) && (inst_23524);
var state_23545__$1 = state_23545;
var statearr_23595_23650 = state_23545__$1;
(statearr_23595_23650[(2)] = inst_23525);

(statearr_23595_23650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (10))){
var inst_23451 = (state_23545[(8)]);
var inst_23471 = (state_23545[(2)]);
var inst_23472 = cljs.core.get.call(null,inst_23471,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23473 = cljs.core.get.call(null,inst_23471,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23474 = cljs.core.get.call(null,inst_23471,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23475 = inst_23451;
var state_23545__$1 = (function (){var statearr_23596 = state_23545;
(statearr_23596[(16)] = inst_23474);

(statearr_23596[(17)] = inst_23472);

(statearr_23596[(7)] = inst_23475);

(statearr_23596[(18)] = inst_23473);

return statearr_23596;
})();
var statearr_23597_23651 = state_23545__$1;
(statearr_23597_23651[(2)] = null);

(statearr_23597_23651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (18))){
var inst_23489 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23598_23652 = state_23545__$1;
(statearr_23598_23652[(2)] = inst_23489);

(statearr_23598_23652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (37))){
var state_23545__$1 = state_23545;
var statearr_23599_23653 = state_23545__$1;
(statearr_23599_23653[(2)] = null);

(statearr_23599_23653[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (8))){
var inst_23451 = (state_23545[(8)]);
var inst_23468 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23451);
var state_23545__$1 = state_23545;
var statearr_23600_23654 = state_23545__$1;
(statearr_23600_23654[(2)] = inst_23468);

(statearr_23600_23654[(1)] = (10));


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
});})(c__21895__auto___23608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21783__auto__,c__21895__auto___23608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21784__auto__ = null;
var cljs$core$async$mix_$_state_machine__21784__auto____0 = (function (){
var statearr_23604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23604[(0)] = cljs$core$async$mix_$_state_machine__21784__auto__);

(statearr_23604[(1)] = (1));

return statearr_23604;
});
var cljs$core$async$mix_$_state_machine__21784__auto____1 = (function (state_23545){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_23545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e23605){if((e23605 instanceof Object)){
var ex__21787__auto__ = e23605;
var statearr_23606_23655 = state_23545;
(statearr_23606_23655[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23656 = state_23545;
state_23545 = G__23656;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21784__auto__ = function(state_23545){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21784__auto____1.call(this,state_23545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21784__auto____0;
cljs$core$async$mix_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21784__auto____1;
return cljs$core$async$mix_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___23608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21897__auto__ = (function (){var statearr_23607 = f__21896__auto__.call(null);
(statearr_23607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___23608);

return statearr_23607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___23608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23657 = [];
var len__17899__auto___23660 = arguments.length;
var i__17900__auto___23661 = (0);
while(true){
if((i__17900__auto___23661 < len__17899__auto___23660)){
args23657.push((arguments[i__17900__auto___23661]));

var G__23662 = (i__17900__auto___23661 + (1));
i__17900__auto___23661 = G__23662;
continue;
} else {
}
break;
}

var G__23659 = args23657.length;
switch (G__23659) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23657.length)].join('')));

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
var args23665 = [];
var len__17899__auto___23790 = arguments.length;
var i__17900__auto___23791 = (0);
while(true){
if((i__17900__auto___23791 < len__17899__auto___23790)){
args23665.push((arguments[i__17900__auto___23791]));

var G__23792 = (i__17900__auto___23791 + (1));
i__17900__auto___23791 = G__23792;
continue;
} else {
}
break;
}

var G__23667 = args23665.length;
switch (G__23667) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23665.length)].join('')));

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
return (function (p1__23664_SHARP_){
if(cljs.core.truth_(p1__23664_SHARP_.call(null,topic))){
return p1__23664_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23664_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16841__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23668 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23669){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23669 = meta23669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23670,meta23669__$1){
var self__ = this;
var _23670__$1 = this;
return (new cljs.core.async.t_cljs$core$async23668(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23669__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23670){
var self__ = this;
var _23670__$1 = this;
return self__.meta23669;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23668.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23668.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23669","meta23669",1397858749,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23668";

cljs.core.async.t_cljs$core$async23668.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async23668");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23668 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23668(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23669){
return (new cljs.core.async.t_cljs$core$async23668(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23669));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23668(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21895__auto___23794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___23794,mults,ensure_mult,p){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___23794,mults,ensure_mult,p){
return (function (state_23742){
var state_val_23743 = (state_23742[(1)]);
if((state_val_23743 === (7))){
var inst_23738 = (state_23742[(2)]);
var state_23742__$1 = state_23742;
var statearr_23744_23795 = state_23742__$1;
(statearr_23744_23795[(2)] = inst_23738);

(statearr_23744_23795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (20))){
var state_23742__$1 = state_23742;
var statearr_23745_23796 = state_23742__$1;
(statearr_23745_23796[(2)] = null);

(statearr_23745_23796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (1))){
var state_23742__$1 = state_23742;
var statearr_23746_23797 = state_23742__$1;
(statearr_23746_23797[(2)] = null);

(statearr_23746_23797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (24))){
var inst_23721 = (state_23742[(7)]);
var inst_23730 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23721);
var state_23742__$1 = state_23742;
var statearr_23747_23798 = state_23742__$1;
(statearr_23747_23798[(2)] = inst_23730);

(statearr_23747_23798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (4))){
var inst_23673 = (state_23742[(8)]);
var inst_23673__$1 = (state_23742[(2)]);
var inst_23674 = (inst_23673__$1 == null);
var state_23742__$1 = (function (){var statearr_23748 = state_23742;
(statearr_23748[(8)] = inst_23673__$1);

return statearr_23748;
})();
if(cljs.core.truth_(inst_23674)){
var statearr_23749_23799 = state_23742__$1;
(statearr_23749_23799[(1)] = (5));

} else {
var statearr_23750_23800 = state_23742__$1;
(statearr_23750_23800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (15))){
var inst_23715 = (state_23742[(2)]);
var state_23742__$1 = state_23742;
var statearr_23751_23801 = state_23742__$1;
(statearr_23751_23801[(2)] = inst_23715);

(statearr_23751_23801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (21))){
var inst_23735 = (state_23742[(2)]);
var state_23742__$1 = (function (){var statearr_23752 = state_23742;
(statearr_23752[(9)] = inst_23735);

return statearr_23752;
})();
var statearr_23753_23802 = state_23742__$1;
(statearr_23753_23802[(2)] = null);

(statearr_23753_23802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (13))){
var inst_23697 = (state_23742[(10)]);
var inst_23699 = cljs.core.chunked_seq_QMARK_.call(null,inst_23697);
var state_23742__$1 = state_23742;
if(inst_23699){
var statearr_23754_23803 = state_23742__$1;
(statearr_23754_23803[(1)] = (16));

} else {
var statearr_23755_23804 = state_23742__$1;
(statearr_23755_23804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (22))){
var inst_23727 = (state_23742[(2)]);
var state_23742__$1 = state_23742;
if(cljs.core.truth_(inst_23727)){
var statearr_23756_23805 = state_23742__$1;
(statearr_23756_23805[(1)] = (23));

} else {
var statearr_23757_23806 = state_23742__$1;
(statearr_23757_23806[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (6))){
var inst_23721 = (state_23742[(7)]);
var inst_23673 = (state_23742[(8)]);
var inst_23723 = (state_23742[(11)]);
var inst_23721__$1 = topic_fn.call(null,inst_23673);
var inst_23722 = cljs.core.deref.call(null,mults);
var inst_23723__$1 = cljs.core.get.call(null,inst_23722,inst_23721__$1);
var state_23742__$1 = (function (){var statearr_23758 = state_23742;
(statearr_23758[(7)] = inst_23721__$1);

(statearr_23758[(11)] = inst_23723__$1);

return statearr_23758;
})();
if(cljs.core.truth_(inst_23723__$1)){
var statearr_23759_23807 = state_23742__$1;
(statearr_23759_23807[(1)] = (19));

} else {
var statearr_23760_23808 = state_23742__$1;
(statearr_23760_23808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (25))){
var inst_23732 = (state_23742[(2)]);
var state_23742__$1 = state_23742;
var statearr_23761_23809 = state_23742__$1;
(statearr_23761_23809[(2)] = inst_23732);

(statearr_23761_23809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (17))){
var inst_23697 = (state_23742[(10)]);
var inst_23706 = cljs.core.first.call(null,inst_23697);
var inst_23707 = cljs.core.async.muxch_STAR_.call(null,inst_23706);
var inst_23708 = cljs.core.async.close_BANG_.call(null,inst_23707);
var inst_23709 = cljs.core.next.call(null,inst_23697);
var inst_23683 = inst_23709;
var inst_23684 = null;
var inst_23685 = (0);
var inst_23686 = (0);
var state_23742__$1 = (function (){var statearr_23762 = state_23742;
(statearr_23762[(12)] = inst_23708);

(statearr_23762[(13)] = inst_23684);

(statearr_23762[(14)] = inst_23685);

(statearr_23762[(15)] = inst_23686);

(statearr_23762[(16)] = inst_23683);

return statearr_23762;
})();
var statearr_23763_23810 = state_23742__$1;
(statearr_23763_23810[(2)] = null);

(statearr_23763_23810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (3))){
var inst_23740 = (state_23742[(2)]);
var state_23742__$1 = state_23742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23742__$1,inst_23740);
} else {
if((state_val_23743 === (12))){
var inst_23717 = (state_23742[(2)]);
var state_23742__$1 = state_23742;
var statearr_23764_23811 = state_23742__$1;
(statearr_23764_23811[(2)] = inst_23717);

(statearr_23764_23811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (2))){
var state_23742__$1 = state_23742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23742__$1,(4),ch);
} else {
if((state_val_23743 === (23))){
var state_23742__$1 = state_23742;
var statearr_23765_23812 = state_23742__$1;
(statearr_23765_23812[(2)] = null);

(statearr_23765_23812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (19))){
var inst_23673 = (state_23742[(8)]);
var inst_23723 = (state_23742[(11)]);
var inst_23725 = cljs.core.async.muxch_STAR_.call(null,inst_23723);
var state_23742__$1 = state_23742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23742__$1,(22),inst_23725,inst_23673);
} else {
if((state_val_23743 === (11))){
var inst_23697 = (state_23742[(10)]);
var inst_23683 = (state_23742[(16)]);
var inst_23697__$1 = cljs.core.seq.call(null,inst_23683);
var state_23742__$1 = (function (){var statearr_23766 = state_23742;
(statearr_23766[(10)] = inst_23697__$1);

return statearr_23766;
})();
if(inst_23697__$1){
var statearr_23767_23813 = state_23742__$1;
(statearr_23767_23813[(1)] = (13));

} else {
var statearr_23768_23814 = state_23742__$1;
(statearr_23768_23814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (9))){
var inst_23719 = (state_23742[(2)]);
var state_23742__$1 = state_23742;
var statearr_23769_23815 = state_23742__$1;
(statearr_23769_23815[(2)] = inst_23719);

(statearr_23769_23815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (5))){
var inst_23680 = cljs.core.deref.call(null,mults);
var inst_23681 = cljs.core.vals.call(null,inst_23680);
var inst_23682 = cljs.core.seq.call(null,inst_23681);
var inst_23683 = inst_23682;
var inst_23684 = null;
var inst_23685 = (0);
var inst_23686 = (0);
var state_23742__$1 = (function (){var statearr_23770 = state_23742;
(statearr_23770[(13)] = inst_23684);

(statearr_23770[(14)] = inst_23685);

(statearr_23770[(15)] = inst_23686);

(statearr_23770[(16)] = inst_23683);

return statearr_23770;
})();
var statearr_23771_23816 = state_23742__$1;
(statearr_23771_23816[(2)] = null);

(statearr_23771_23816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (14))){
var state_23742__$1 = state_23742;
var statearr_23775_23817 = state_23742__$1;
(statearr_23775_23817[(2)] = null);

(statearr_23775_23817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (16))){
var inst_23697 = (state_23742[(10)]);
var inst_23701 = cljs.core.chunk_first.call(null,inst_23697);
var inst_23702 = cljs.core.chunk_rest.call(null,inst_23697);
var inst_23703 = cljs.core.count.call(null,inst_23701);
var inst_23683 = inst_23702;
var inst_23684 = inst_23701;
var inst_23685 = inst_23703;
var inst_23686 = (0);
var state_23742__$1 = (function (){var statearr_23776 = state_23742;
(statearr_23776[(13)] = inst_23684);

(statearr_23776[(14)] = inst_23685);

(statearr_23776[(15)] = inst_23686);

(statearr_23776[(16)] = inst_23683);

return statearr_23776;
})();
var statearr_23777_23818 = state_23742__$1;
(statearr_23777_23818[(2)] = null);

(statearr_23777_23818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (10))){
var inst_23684 = (state_23742[(13)]);
var inst_23685 = (state_23742[(14)]);
var inst_23686 = (state_23742[(15)]);
var inst_23683 = (state_23742[(16)]);
var inst_23691 = cljs.core._nth.call(null,inst_23684,inst_23686);
var inst_23692 = cljs.core.async.muxch_STAR_.call(null,inst_23691);
var inst_23693 = cljs.core.async.close_BANG_.call(null,inst_23692);
var inst_23694 = (inst_23686 + (1));
var tmp23772 = inst_23684;
var tmp23773 = inst_23685;
var tmp23774 = inst_23683;
var inst_23683__$1 = tmp23774;
var inst_23684__$1 = tmp23772;
var inst_23685__$1 = tmp23773;
var inst_23686__$1 = inst_23694;
var state_23742__$1 = (function (){var statearr_23778 = state_23742;
(statearr_23778[(13)] = inst_23684__$1);

(statearr_23778[(17)] = inst_23693);

(statearr_23778[(14)] = inst_23685__$1);

(statearr_23778[(15)] = inst_23686__$1);

(statearr_23778[(16)] = inst_23683__$1);

return statearr_23778;
})();
var statearr_23779_23819 = state_23742__$1;
(statearr_23779_23819[(2)] = null);

(statearr_23779_23819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (18))){
var inst_23712 = (state_23742[(2)]);
var state_23742__$1 = state_23742;
var statearr_23780_23820 = state_23742__$1;
(statearr_23780_23820[(2)] = inst_23712);

(statearr_23780_23820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23743 === (8))){
var inst_23685 = (state_23742[(14)]);
var inst_23686 = (state_23742[(15)]);
var inst_23688 = (inst_23686 < inst_23685);
var inst_23689 = inst_23688;
var state_23742__$1 = state_23742;
if(cljs.core.truth_(inst_23689)){
var statearr_23781_23821 = state_23742__$1;
(statearr_23781_23821[(1)] = (10));

} else {
var statearr_23782_23822 = state_23742__$1;
(statearr_23782_23822[(1)] = (11));

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
});})(c__21895__auto___23794,mults,ensure_mult,p))
;
return ((function (switch__21783__auto__,c__21895__auto___23794,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_23786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23786[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_23786[(1)] = (1));

return statearr_23786;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_23742){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_23742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e23787){if((e23787 instanceof Object)){
var ex__21787__auto__ = e23787;
var statearr_23788_23823 = state_23742;
(statearr_23788_23823[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23824 = state_23742;
state_23742 = G__23824;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_23742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_23742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___23794,mults,ensure_mult,p))
})();
var state__21897__auto__ = (function (){var statearr_23789 = f__21896__auto__.call(null);
(statearr_23789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___23794);

return statearr_23789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___23794,mults,ensure_mult,p))
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
var args23825 = [];
var len__17899__auto___23828 = arguments.length;
var i__17900__auto___23829 = (0);
while(true){
if((i__17900__auto___23829 < len__17899__auto___23828)){
args23825.push((arguments[i__17900__auto___23829]));

var G__23830 = (i__17900__auto___23829 + (1));
i__17900__auto___23829 = G__23830;
continue;
} else {
}
break;
}

var G__23827 = args23825.length;
switch (G__23827) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23825.length)].join('')));

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
var args23832 = [];
var len__17899__auto___23835 = arguments.length;
var i__17900__auto___23836 = (0);
while(true){
if((i__17900__auto___23836 < len__17899__auto___23835)){
args23832.push((arguments[i__17900__auto___23836]));

var G__23837 = (i__17900__auto___23836 + (1));
i__17900__auto___23836 = G__23837;
continue;
} else {
}
break;
}

var G__23834 = args23832.length;
switch (G__23834) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23832.length)].join('')));

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
var args23839 = [];
var len__17899__auto___23910 = arguments.length;
var i__17900__auto___23911 = (0);
while(true){
if((i__17900__auto___23911 < len__17899__auto___23910)){
args23839.push((arguments[i__17900__auto___23911]));

var G__23912 = (i__17900__auto___23911 + (1));
i__17900__auto___23911 = G__23912;
continue;
} else {
}
break;
}

var G__23841 = args23839.length;
switch (G__23841) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23839.length)].join('')));

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
var c__21895__auto___23914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___23914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___23914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23880){
var state_val_23881 = (state_23880[(1)]);
if((state_val_23881 === (7))){
var state_23880__$1 = state_23880;
var statearr_23882_23915 = state_23880__$1;
(statearr_23882_23915[(2)] = null);

(statearr_23882_23915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (1))){
var state_23880__$1 = state_23880;
var statearr_23883_23916 = state_23880__$1;
(statearr_23883_23916[(2)] = null);

(statearr_23883_23916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (4))){
var inst_23844 = (state_23880[(7)]);
var inst_23846 = (inst_23844 < cnt);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23846)){
var statearr_23884_23917 = state_23880__$1;
(statearr_23884_23917[(1)] = (6));

} else {
var statearr_23885_23918 = state_23880__$1;
(statearr_23885_23918[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (15))){
var inst_23876 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23886_23919 = state_23880__$1;
(statearr_23886_23919[(2)] = inst_23876);

(statearr_23886_23919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (13))){
var inst_23869 = cljs.core.async.close_BANG_.call(null,out);
var state_23880__$1 = state_23880;
var statearr_23887_23920 = state_23880__$1;
(statearr_23887_23920[(2)] = inst_23869);

(statearr_23887_23920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (6))){
var state_23880__$1 = state_23880;
var statearr_23888_23921 = state_23880__$1;
(statearr_23888_23921[(2)] = null);

(statearr_23888_23921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (3))){
var inst_23878 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23880__$1,inst_23878);
} else {
if((state_val_23881 === (12))){
var inst_23866 = (state_23880[(8)]);
var inst_23866__$1 = (state_23880[(2)]);
var inst_23867 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23866__$1);
var state_23880__$1 = (function (){var statearr_23889 = state_23880;
(statearr_23889[(8)] = inst_23866__$1);

return statearr_23889;
})();
if(cljs.core.truth_(inst_23867)){
var statearr_23890_23922 = state_23880__$1;
(statearr_23890_23922[(1)] = (13));

} else {
var statearr_23891_23923 = state_23880__$1;
(statearr_23891_23923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (2))){
var inst_23843 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23844 = (0);
var state_23880__$1 = (function (){var statearr_23892 = state_23880;
(statearr_23892[(9)] = inst_23843);

(statearr_23892[(7)] = inst_23844);

return statearr_23892;
})();
var statearr_23893_23924 = state_23880__$1;
(statearr_23893_23924[(2)] = null);

(statearr_23893_23924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (11))){
var inst_23844 = (state_23880[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23880,(10),Object,null,(9));
var inst_23853 = chs__$1.call(null,inst_23844);
var inst_23854 = done.call(null,inst_23844);
var inst_23855 = cljs.core.async.take_BANG_.call(null,inst_23853,inst_23854);
var state_23880__$1 = state_23880;
var statearr_23894_23925 = state_23880__$1;
(statearr_23894_23925[(2)] = inst_23855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (9))){
var inst_23844 = (state_23880[(7)]);
var inst_23857 = (state_23880[(2)]);
var inst_23858 = (inst_23844 + (1));
var inst_23844__$1 = inst_23858;
var state_23880__$1 = (function (){var statearr_23895 = state_23880;
(statearr_23895[(10)] = inst_23857);

(statearr_23895[(7)] = inst_23844__$1);

return statearr_23895;
})();
var statearr_23896_23926 = state_23880__$1;
(statearr_23896_23926[(2)] = null);

(statearr_23896_23926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (5))){
var inst_23864 = (state_23880[(2)]);
var state_23880__$1 = (function (){var statearr_23897 = state_23880;
(statearr_23897[(11)] = inst_23864);

return statearr_23897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23880__$1,(12),dchan);
} else {
if((state_val_23881 === (14))){
var inst_23866 = (state_23880[(8)]);
var inst_23871 = cljs.core.apply.call(null,f,inst_23866);
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23880__$1,(16),out,inst_23871);
} else {
if((state_val_23881 === (16))){
var inst_23873 = (state_23880[(2)]);
var state_23880__$1 = (function (){var statearr_23898 = state_23880;
(statearr_23898[(12)] = inst_23873);

return statearr_23898;
})();
var statearr_23899_23927 = state_23880__$1;
(statearr_23899_23927[(2)] = null);

(statearr_23899_23927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (10))){
var inst_23848 = (state_23880[(2)]);
var inst_23849 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23880__$1 = (function (){var statearr_23900 = state_23880;
(statearr_23900[(13)] = inst_23848);

return statearr_23900;
})();
var statearr_23901_23928 = state_23880__$1;
(statearr_23901_23928[(2)] = inst_23849);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (8))){
var inst_23862 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23902_23929 = state_23880__$1;
(statearr_23902_23929[(2)] = inst_23862);

(statearr_23902_23929[(1)] = (5));


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
});})(c__21895__auto___23914,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21783__auto__,c__21895__auto___23914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_23906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23906[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_23906[(1)] = (1));

return statearr_23906;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_23880){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_23880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e23907){if((e23907 instanceof Object)){
var ex__21787__auto__ = e23907;
var statearr_23908_23930 = state_23880;
(statearr_23908_23930[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23931 = state_23880;
state_23880 = G__23931;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_23880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_23880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___23914,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21897__auto__ = (function (){var statearr_23909 = f__21896__auto__.call(null);
(statearr_23909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___23914);

return statearr_23909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___23914,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23933 = [];
var len__17899__auto___23989 = arguments.length;
var i__17900__auto___23990 = (0);
while(true){
if((i__17900__auto___23990 < len__17899__auto___23989)){
args23933.push((arguments[i__17900__auto___23990]));

var G__23991 = (i__17900__auto___23990 + (1));
i__17900__auto___23990 = G__23991;
continue;
} else {
}
break;
}

var G__23935 = args23933.length;
switch (G__23935) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23933.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21895__auto___23993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___23993,out){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___23993,out){
return (function (state_23965){
var state_val_23966 = (state_23965[(1)]);
if((state_val_23966 === (7))){
var inst_23945 = (state_23965[(7)]);
var inst_23944 = (state_23965[(8)]);
var inst_23944__$1 = (state_23965[(2)]);
var inst_23945__$1 = cljs.core.nth.call(null,inst_23944__$1,(0),null);
var inst_23946 = cljs.core.nth.call(null,inst_23944__$1,(1),null);
var inst_23947 = (inst_23945__$1 == null);
var state_23965__$1 = (function (){var statearr_23967 = state_23965;
(statearr_23967[(9)] = inst_23946);

(statearr_23967[(7)] = inst_23945__$1);

(statearr_23967[(8)] = inst_23944__$1);

return statearr_23967;
})();
if(cljs.core.truth_(inst_23947)){
var statearr_23968_23994 = state_23965__$1;
(statearr_23968_23994[(1)] = (8));

} else {
var statearr_23969_23995 = state_23965__$1;
(statearr_23969_23995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (1))){
var inst_23936 = cljs.core.vec.call(null,chs);
var inst_23937 = inst_23936;
var state_23965__$1 = (function (){var statearr_23970 = state_23965;
(statearr_23970[(10)] = inst_23937);

return statearr_23970;
})();
var statearr_23971_23996 = state_23965__$1;
(statearr_23971_23996[(2)] = null);

(statearr_23971_23996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (4))){
var inst_23937 = (state_23965[(10)]);
var state_23965__$1 = state_23965;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23965__$1,(7),inst_23937);
} else {
if((state_val_23966 === (6))){
var inst_23961 = (state_23965[(2)]);
var state_23965__$1 = state_23965;
var statearr_23972_23997 = state_23965__$1;
(statearr_23972_23997[(2)] = inst_23961);

(statearr_23972_23997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (3))){
var inst_23963 = (state_23965[(2)]);
var state_23965__$1 = state_23965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23965__$1,inst_23963);
} else {
if((state_val_23966 === (2))){
var inst_23937 = (state_23965[(10)]);
var inst_23939 = cljs.core.count.call(null,inst_23937);
var inst_23940 = (inst_23939 > (0));
var state_23965__$1 = state_23965;
if(cljs.core.truth_(inst_23940)){
var statearr_23974_23998 = state_23965__$1;
(statearr_23974_23998[(1)] = (4));

} else {
var statearr_23975_23999 = state_23965__$1;
(statearr_23975_23999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (11))){
var inst_23937 = (state_23965[(10)]);
var inst_23954 = (state_23965[(2)]);
var tmp23973 = inst_23937;
var inst_23937__$1 = tmp23973;
var state_23965__$1 = (function (){var statearr_23976 = state_23965;
(statearr_23976[(11)] = inst_23954);

(statearr_23976[(10)] = inst_23937__$1);

return statearr_23976;
})();
var statearr_23977_24000 = state_23965__$1;
(statearr_23977_24000[(2)] = null);

(statearr_23977_24000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (9))){
var inst_23945 = (state_23965[(7)]);
var state_23965__$1 = state_23965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23965__$1,(11),out,inst_23945);
} else {
if((state_val_23966 === (5))){
var inst_23959 = cljs.core.async.close_BANG_.call(null,out);
var state_23965__$1 = state_23965;
var statearr_23978_24001 = state_23965__$1;
(statearr_23978_24001[(2)] = inst_23959);

(statearr_23978_24001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (10))){
var inst_23957 = (state_23965[(2)]);
var state_23965__$1 = state_23965;
var statearr_23979_24002 = state_23965__$1;
(statearr_23979_24002[(2)] = inst_23957);

(statearr_23979_24002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (8))){
var inst_23946 = (state_23965[(9)]);
var inst_23945 = (state_23965[(7)]);
var inst_23937 = (state_23965[(10)]);
var inst_23944 = (state_23965[(8)]);
var inst_23949 = (function (){var cs = inst_23937;
var vec__23942 = inst_23944;
var v = inst_23945;
var c = inst_23946;
return ((function (cs,vec__23942,v,c,inst_23946,inst_23945,inst_23937,inst_23944,state_val_23966,c__21895__auto___23993,out){
return (function (p1__23932_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23932_SHARP_);
});
;})(cs,vec__23942,v,c,inst_23946,inst_23945,inst_23937,inst_23944,state_val_23966,c__21895__auto___23993,out))
})();
var inst_23950 = cljs.core.filterv.call(null,inst_23949,inst_23937);
var inst_23937__$1 = inst_23950;
var state_23965__$1 = (function (){var statearr_23980 = state_23965;
(statearr_23980[(10)] = inst_23937__$1);

return statearr_23980;
})();
var statearr_23981_24003 = state_23965__$1;
(statearr_23981_24003[(2)] = null);

(statearr_23981_24003[(1)] = (2));


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
});})(c__21895__auto___23993,out))
;
return ((function (switch__21783__auto__,c__21895__auto___23993,out){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_23985 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23985[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_23985[(1)] = (1));

return statearr_23985;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_23965){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_23965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e23986){if((e23986 instanceof Object)){
var ex__21787__auto__ = e23986;
var statearr_23987_24004 = state_23965;
(statearr_23987_24004[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24005 = state_23965;
state_23965 = G__24005;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_23965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_23965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___23993,out))
})();
var state__21897__auto__ = (function (){var statearr_23988 = f__21896__auto__.call(null);
(statearr_23988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___23993);

return statearr_23988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___23993,out))
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
var args24006 = [];
var len__17899__auto___24055 = arguments.length;
var i__17900__auto___24056 = (0);
while(true){
if((i__17900__auto___24056 < len__17899__auto___24055)){
args24006.push((arguments[i__17900__auto___24056]));

var G__24057 = (i__17900__auto___24056 + (1));
i__17900__auto___24056 = G__24057;
continue;
} else {
}
break;
}

var G__24008 = args24006.length;
switch (G__24008) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24006.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21895__auto___24059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___24059,out){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___24059,out){
return (function (state_24032){
var state_val_24033 = (state_24032[(1)]);
if((state_val_24033 === (7))){
var inst_24014 = (state_24032[(7)]);
var inst_24014__$1 = (state_24032[(2)]);
var inst_24015 = (inst_24014__$1 == null);
var inst_24016 = cljs.core.not.call(null,inst_24015);
var state_24032__$1 = (function (){var statearr_24034 = state_24032;
(statearr_24034[(7)] = inst_24014__$1);

return statearr_24034;
})();
if(inst_24016){
var statearr_24035_24060 = state_24032__$1;
(statearr_24035_24060[(1)] = (8));

} else {
var statearr_24036_24061 = state_24032__$1;
(statearr_24036_24061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24033 === (1))){
var inst_24009 = (0);
var state_24032__$1 = (function (){var statearr_24037 = state_24032;
(statearr_24037[(8)] = inst_24009);

return statearr_24037;
})();
var statearr_24038_24062 = state_24032__$1;
(statearr_24038_24062[(2)] = null);

(statearr_24038_24062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24033 === (4))){
var state_24032__$1 = state_24032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24032__$1,(7),ch);
} else {
if((state_val_24033 === (6))){
var inst_24027 = (state_24032[(2)]);
var state_24032__$1 = state_24032;
var statearr_24039_24063 = state_24032__$1;
(statearr_24039_24063[(2)] = inst_24027);

(statearr_24039_24063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24033 === (3))){
var inst_24029 = (state_24032[(2)]);
var inst_24030 = cljs.core.async.close_BANG_.call(null,out);
var state_24032__$1 = (function (){var statearr_24040 = state_24032;
(statearr_24040[(9)] = inst_24029);

return statearr_24040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24032__$1,inst_24030);
} else {
if((state_val_24033 === (2))){
var inst_24009 = (state_24032[(8)]);
var inst_24011 = (inst_24009 < n);
var state_24032__$1 = state_24032;
if(cljs.core.truth_(inst_24011)){
var statearr_24041_24064 = state_24032__$1;
(statearr_24041_24064[(1)] = (4));

} else {
var statearr_24042_24065 = state_24032__$1;
(statearr_24042_24065[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24033 === (11))){
var inst_24009 = (state_24032[(8)]);
var inst_24019 = (state_24032[(2)]);
var inst_24020 = (inst_24009 + (1));
var inst_24009__$1 = inst_24020;
var state_24032__$1 = (function (){var statearr_24043 = state_24032;
(statearr_24043[(10)] = inst_24019);

(statearr_24043[(8)] = inst_24009__$1);

return statearr_24043;
})();
var statearr_24044_24066 = state_24032__$1;
(statearr_24044_24066[(2)] = null);

(statearr_24044_24066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24033 === (9))){
var state_24032__$1 = state_24032;
var statearr_24045_24067 = state_24032__$1;
(statearr_24045_24067[(2)] = null);

(statearr_24045_24067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24033 === (5))){
var state_24032__$1 = state_24032;
var statearr_24046_24068 = state_24032__$1;
(statearr_24046_24068[(2)] = null);

(statearr_24046_24068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24033 === (10))){
var inst_24024 = (state_24032[(2)]);
var state_24032__$1 = state_24032;
var statearr_24047_24069 = state_24032__$1;
(statearr_24047_24069[(2)] = inst_24024);

(statearr_24047_24069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24033 === (8))){
var inst_24014 = (state_24032[(7)]);
var state_24032__$1 = state_24032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24032__$1,(11),out,inst_24014);
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
});})(c__21895__auto___24059,out))
;
return ((function (switch__21783__auto__,c__21895__auto___24059,out){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_24051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24051[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_24051[(1)] = (1));

return statearr_24051;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_24032){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_24032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e24052){if((e24052 instanceof Object)){
var ex__21787__auto__ = e24052;
var statearr_24053_24070 = state_24032;
(statearr_24053_24070[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24071 = state_24032;
state_24032 = G__24071;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_24032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_24032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___24059,out))
})();
var state__21897__auto__ = (function (){var statearr_24054 = f__21896__auto__.call(null);
(statearr_24054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___24059);

return statearr_24054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___24059,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24079 = (function (map_LT_,f,ch,meta24080){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24080 = meta24080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24081,meta24080__$1){
var self__ = this;
var _24081__$1 = this;
return (new cljs.core.async.t_cljs$core$async24079(self__.map_LT_,self__.f,self__.ch,meta24080__$1));
});

cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24081){
var self__ = this;
var _24081__$1 = this;
return self__.meta24080;
});

cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24082 = (function (map_LT_,f,ch,meta24080,_,fn1,meta24083){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24080 = meta24080;
this._ = _;
this.fn1 = fn1;
this.meta24083 = meta24083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24084,meta24083__$1){
var self__ = this;
var _24084__$1 = this;
return (new cljs.core.async.t_cljs$core$async24082(self__.map_LT_,self__.f,self__.ch,self__.meta24080,self__._,self__.fn1,meta24083__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24084){
var self__ = this;
var _24084__$1 = this;
return self__.meta24083;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24082.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24072_SHARP_){
return f1.call(null,(((p1__24072_SHARP_ == null))?null:self__.f.call(null,p1__24072_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24082.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24080","meta24080",-498081141,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24079","cljs.core.async/t_cljs$core$async24079",1183780380,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24083","meta24083",-1851037069,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24082";

cljs.core.async.t_cljs$core$async24082.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24082");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24082 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24082(map_LT___$1,f__$1,ch__$1,meta24080__$1,___$2,fn1__$1,meta24083){
return (new cljs.core.async.t_cljs$core$async24082(map_LT___$1,f__$1,ch__$1,meta24080__$1,___$2,fn1__$1,meta24083));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24082(self__.map_LT_,self__.f,self__.ch,self__.meta24080,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24080","meta24080",-498081141,null)], null);
});

cljs.core.async.t_cljs$core$async24079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24079";

cljs.core.async.t_cljs$core$async24079.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24079");
});

cljs.core.async.__GT_t_cljs$core$async24079 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24079(map_LT___$1,f__$1,ch__$1,meta24080){
return (new cljs.core.async.t_cljs$core$async24079(map_LT___$1,f__$1,ch__$1,meta24080));
});

}

return (new cljs.core.async.t_cljs$core$async24079(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24088 = (function (map_GT_,f,ch,meta24089){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24089 = meta24089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24090,meta24089__$1){
var self__ = this;
var _24090__$1 = this;
return (new cljs.core.async.t_cljs$core$async24088(self__.map_GT_,self__.f,self__.ch,meta24089__$1));
});

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24090){
var self__ = this;
var _24090__$1 = this;
return self__.meta24089;
});

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24089","meta24089",1721810909,null)], null);
});

cljs.core.async.t_cljs$core$async24088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24088";

cljs.core.async.t_cljs$core$async24088.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24088");
});

cljs.core.async.__GT_t_cljs$core$async24088 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24088(map_GT___$1,f__$1,ch__$1,meta24089){
return (new cljs.core.async.t_cljs$core$async24088(map_GT___$1,f__$1,ch__$1,meta24089));
});

}

return (new cljs.core.async.t_cljs$core$async24088(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24094 = (function (filter_GT_,p,ch,meta24095){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24095 = meta24095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24096,meta24095__$1){
var self__ = this;
var _24096__$1 = this;
return (new cljs.core.async.t_cljs$core$async24094(self__.filter_GT_,self__.p,self__.ch,meta24095__$1));
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24096){
var self__ = this;
var _24096__$1 = this;
return self__.meta24095;
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24095","meta24095",146635240,null)], null);
});

cljs.core.async.t_cljs$core$async24094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24094";

cljs.core.async.t_cljs$core$async24094.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24094");
});

cljs.core.async.__GT_t_cljs$core$async24094 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24094(filter_GT___$1,p__$1,ch__$1,meta24095){
return (new cljs.core.async.t_cljs$core$async24094(filter_GT___$1,p__$1,ch__$1,meta24095));
});

}

return (new cljs.core.async.t_cljs$core$async24094(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24097 = [];
var len__17899__auto___24141 = arguments.length;
var i__17900__auto___24142 = (0);
while(true){
if((i__17900__auto___24142 < len__17899__auto___24141)){
args24097.push((arguments[i__17900__auto___24142]));

var G__24143 = (i__17900__auto___24142 + (1));
i__17900__auto___24142 = G__24143;
continue;
} else {
}
break;
}

var G__24099 = args24097.length;
switch (G__24099) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24097.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21895__auto___24145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___24145,out){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___24145,out){
return (function (state_24120){
var state_val_24121 = (state_24120[(1)]);
if((state_val_24121 === (7))){
var inst_24116 = (state_24120[(2)]);
var state_24120__$1 = state_24120;
var statearr_24122_24146 = state_24120__$1;
(statearr_24122_24146[(2)] = inst_24116);

(statearr_24122_24146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24121 === (1))){
var state_24120__$1 = state_24120;
var statearr_24123_24147 = state_24120__$1;
(statearr_24123_24147[(2)] = null);

(statearr_24123_24147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24121 === (4))){
var inst_24102 = (state_24120[(7)]);
var inst_24102__$1 = (state_24120[(2)]);
var inst_24103 = (inst_24102__$1 == null);
var state_24120__$1 = (function (){var statearr_24124 = state_24120;
(statearr_24124[(7)] = inst_24102__$1);

return statearr_24124;
})();
if(cljs.core.truth_(inst_24103)){
var statearr_24125_24148 = state_24120__$1;
(statearr_24125_24148[(1)] = (5));

} else {
var statearr_24126_24149 = state_24120__$1;
(statearr_24126_24149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24121 === (6))){
var inst_24102 = (state_24120[(7)]);
var inst_24107 = p.call(null,inst_24102);
var state_24120__$1 = state_24120;
if(cljs.core.truth_(inst_24107)){
var statearr_24127_24150 = state_24120__$1;
(statearr_24127_24150[(1)] = (8));

} else {
var statearr_24128_24151 = state_24120__$1;
(statearr_24128_24151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24121 === (3))){
var inst_24118 = (state_24120[(2)]);
var state_24120__$1 = state_24120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24120__$1,inst_24118);
} else {
if((state_val_24121 === (2))){
var state_24120__$1 = state_24120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24120__$1,(4),ch);
} else {
if((state_val_24121 === (11))){
var inst_24110 = (state_24120[(2)]);
var state_24120__$1 = state_24120;
var statearr_24129_24152 = state_24120__$1;
(statearr_24129_24152[(2)] = inst_24110);

(statearr_24129_24152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24121 === (9))){
var state_24120__$1 = state_24120;
var statearr_24130_24153 = state_24120__$1;
(statearr_24130_24153[(2)] = null);

(statearr_24130_24153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24121 === (5))){
var inst_24105 = cljs.core.async.close_BANG_.call(null,out);
var state_24120__$1 = state_24120;
var statearr_24131_24154 = state_24120__$1;
(statearr_24131_24154[(2)] = inst_24105);

(statearr_24131_24154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24121 === (10))){
var inst_24113 = (state_24120[(2)]);
var state_24120__$1 = (function (){var statearr_24132 = state_24120;
(statearr_24132[(8)] = inst_24113);

return statearr_24132;
})();
var statearr_24133_24155 = state_24120__$1;
(statearr_24133_24155[(2)] = null);

(statearr_24133_24155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24121 === (8))){
var inst_24102 = (state_24120[(7)]);
var state_24120__$1 = state_24120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24120__$1,(11),out,inst_24102);
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
});})(c__21895__auto___24145,out))
;
return ((function (switch__21783__auto__,c__21895__auto___24145,out){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_24137 = [null,null,null,null,null,null,null,null,null];
(statearr_24137[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_24137[(1)] = (1));

return statearr_24137;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_24120){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_24120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e24138){if((e24138 instanceof Object)){
var ex__21787__auto__ = e24138;
var statearr_24139_24156 = state_24120;
(statearr_24139_24156[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24157 = state_24120;
state_24120 = G__24157;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_24120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_24120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___24145,out))
})();
var state__21897__auto__ = (function (){var statearr_24140 = f__21896__auto__.call(null);
(statearr_24140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___24145);

return statearr_24140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___24145,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24158 = [];
var len__17899__auto___24161 = arguments.length;
var i__17900__auto___24162 = (0);
while(true){
if((i__17900__auto___24162 < len__17899__auto___24161)){
args24158.push((arguments[i__17900__auto___24162]));

var G__24163 = (i__17900__auto___24162 + (1));
i__17900__auto___24162 = G__24163;
continue;
} else {
}
break;
}

var G__24160 = args24158.length;
switch (G__24160) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24158.length)].join('')));

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
var c__21895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto__){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto__){
return (function (state_24330){
var state_val_24331 = (state_24330[(1)]);
if((state_val_24331 === (7))){
var inst_24326 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24332_24373 = state_24330__$1;
(statearr_24332_24373[(2)] = inst_24326);

(statearr_24332_24373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (20))){
var inst_24296 = (state_24330[(7)]);
var inst_24307 = (state_24330[(2)]);
var inst_24308 = cljs.core.next.call(null,inst_24296);
var inst_24282 = inst_24308;
var inst_24283 = null;
var inst_24284 = (0);
var inst_24285 = (0);
var state_24330__$1 = (function (){var statearr_24333 = state_24330;
(statearr_24333[(8)] = inst_24285);

(statearr_24333[(9)] = inst_24284);

(statearr_24333[(10)] = inst_24307);

(statearr_24333[(11)] = inst_24282);

(statearr_24333[(12)] = inst_24283);

return statearr_24333;
})();
var statearr_24334_24374 = state_24330__$1;
(statearr_24334_24374[(2)] = null);

(statearr_24334_24374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (1))){
var state_24330__$1 = state_24330;
var statearr_24335_24375 = state_24330__$1;
(statearr_24335_24375[(2)] = null);

(statearr_24335_24375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (4))){
var inst_24271 = (state_24330[(13)]);
var inst_24271__$1 = (state_24330[(2)]);
var inst_24272 = (inst_24271__$1 == null);
var state_24330__$1 = (function (){var statearr_24336 = state_24330;
(statearr_24336[(13)] = inst_24271__$1);

return statearr_24336;
})();
if(cljs.core.truth_(inst_24272)){
var statearr_24337_24376 = state_24330__$1;
(statearr_24337_24376[(1)] = (5));

} else {
var statearr_24338_24377 = state_24330__$1;
(statearr_24338_24377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (15))){
var state_24330__$1 = state_24330;
var statearr_24342_24378 = state_24330__$1;
(statearr_24342_24378[(2)] = null);

(statearr_24342_24378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (21))){
var state_24330__$1 = state_24330;
var statearr_24343_24379 = state_24330__$1;
(statearr_24343_24379[(2)] = null);

(statearr_24343_24379[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (13))){
var inst_24285 = (state_24330[(8)]);
var inst_24284 = (state_24330[(9)]);
var inst_24282 = (state_24330[(11)]);
var inst_24283 = (state_24330[(12)]);
var inst_24292 = (state_24330[(2)]);
var inst_24293 = (inst_24285 + (1));
var tmp24339 = inst_24284;
var tmp24340 = inst_24282;
var tmp24341 = inst_24283;
var inst_24282__$1 = tmp24340;
var inst_24283__$1 = tmp24341;
var inst_24284__$1 = tmp24339;
var inst_24285__$1 = inst_24293;
var state_24330__$1 = (function (){var statearr_24344 = state_24330;
(statearr_24344[(8)] = inst_24285__$1);

(statearr_24344[(9)] = inst_24284__$1);

(statearr_24344[(11)] = inst_24282__$1);

(statearr_24344[(12)] = inst_24283__$1);

(statearr_24344[(14)] = inst_24292);

return statearr_24344;
})();
var statearr_24345_24380 = state_24330__$1;
(statearr_24345_24380[(2)] = null);

(statearr_24345_24380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (22))){
var state_24330__$1 = state_24330;
var statearr_24346_24381 = state_24330__$1;
(statearr_24346_24381[(2)] = null);

(statearr_24346_24381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (6))){
var inst_24271 = (state_24330[(13)]);
var inst_24280 = f.call(null,inst_24271);
var inst_24281 = cljs.core.seq.call(null,inst_24280);
var inst_24282 = inst_24281;
var inst_24283 = null;
var inst_24284 = (0);
var inst_24285 = (0);
var state_24330__$1 = (function (){var statearr_24347 = state_24330;
(statearr_24347[(8)] = inst_24285);

(statearr_24347[(9)] = inst_24284);

(statearr_24347[(11)] = inst_24282);

(statearr_24347[(12)] = inst_24283);

return statearr_24347;
})();
var statearr_24348_24382 = state_24330__$1;
(statearr_24348_24382[(2)] = null);

(statearr_24348_24382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (17))){
var inst_24296 = (state_24330[(7)]);
var inst_24300 = cljs.core.chunk_first.call(null,inst_24296);
var inst_24301 = cljs.core.chunk_rest.call(null,inst_24296);
var inst_24302 = cljs.core.count.call(null,inst_24300);
var inst_24282 = inst_24301;
var inst_24283 = inst_24300;
var inst_24284 = inst_24302;
var inst_24285 = (0);
var state_24330__$1 = (function (){var statearr_24349 = state_24330;
(statearr_24349[(8)] = inst_24285);

(statearr_24349[(9)] = inst_24284);

(statearr_24349[(11)] = inst_24282);

(statearr_24349[(12)] = inst_24283);

return statearr_24349;
})();
var statearr_24350_24383 = state_24330__$1;
(statearr_24350_24383[(2)] = null);

(statearr_24350_24383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (3))){
var inst_24328 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24330__$1,inst_24328);
} else {
if((state_val_24331 === (12))){
var inst_24316 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24351_24384 = state_24330__$1;
(statearr_24351_24384[(2)] = inst_24316);

(statearr_24351_24384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (2))){
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24330__$1,(4),in$);
} else {
if((state_val_24331 === (23))){
var inst_24324 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24352_24385 = state_24330__$1;
(statearr_24352_24385[(2)] = inst_24324);

(statearr_24352_24385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (19))){
var inst_24311 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24353_24386 = state_24330__$1;
(statearr_24353_24386[(2)] = inst_24311);

(statearr_24353_24386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (11))){
var inst_24296 = (state_24330[(7)]);
var inst_24282 = (state_24330[(11)]);
var inst_24296__$1 = cljs.core.seq.call(null,inst_24282);
var state_24330__$1 = (function (){var statearr_24354 = state_24330;
(statearr_24354[(7)] = inst_24296__$1);

return statearr_24354;
})();
if(inst_24296__$1){
var statearr_24355_24387 = state_24330__$1;
(statearr_24355_24387[(1)] = (14));

} else {
var statearr_24356_24388 = state_24330__$1;
(statearr_24356_24388[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (9))){
var inst_24318 = (state_24330[(2)]);
var inst_24319 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24330__$1 = (function (){var statearr_24357 = state_24330;
(statearr_24357[(15)] = inst_24318);

return statearr_24357;
})();
if(cljs.core.truth_(inst_24319)){
var statearr_24358_24389 = state_24330__$1;
(statearr_24358_24389[(1)] = (21));

} else {
var statearr_24359_24390 = state_24330__$1;
(statearr_24359_24390[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (5))){
var inst_24274 = cljs.core.async.close_BANG_.call(null,out);
var state_24330__$1 = state_24330;
var statearr_24360_24391 = state_24330__$1;
(statearr_24360_24391[(2)] = inst_24274);

(statearr_24360_24391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (14))){
var inst_24296 = (state_24330[(7)]);
var inst_24298 = cljs.core.chunked_seq_QMARK_.call(null,inst_24296);
var state_24330__$1 = state_24330;
if(inst_24298){
var statearr_24361_24392 = state_24330__$1;
(statearr_24361_24392[(1)] = (17));

} else {
var statearr_24362_24393 = state_24330__$1;
(statearr_24362_24393[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (16))){
var inst_24314 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24363_24394 = state_24330__$1;
(statearr_24363_24394[(2)] = inst_24314);

(statearr_24363_24394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (10))){
var inst_24285 = (state_24330[(8)]);
var inst_24283 = (state_24330[(12)]);
var inst_24290 = cljs.core._nth.call(null,inst_24283,inst_24285);
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24330__$1,(13),out,inst_24290);
} else {
if((state_val_24331 === (18))){
var inst_24296 = (state_24330[(7)]);
var inst_24305 = cljs.core.first.call(null,inst_24296);
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24330__$1,(20),out,inst_24305);
} else {
if((state_val_24331 === (8))){
var inst_24285 = (state_24330[(8)]);
var inst_24284 = (state_24330[(9)]);
var inst_24287 = (inst_24285 < inst_24284);
var inst_24288 = inst_24287;
var state_24330__$1 = state_24330;
if(cljs.core.truth_(inst_24288)){
var statearr_24364_24395 = state_24330__$1;
(statearr_24364_24395[(1)] = (10));

} else {
var statearr_24365_24396 = state_24330__$1;
(statearr_24365_24396[(1)] = (11));

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
});})(c__21895__auto__))
;
return ((function (switch__21783__auto__,c__21895__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21784__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21784__auto____0 = (function (){
var statearr_24369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24369[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21784__auto__);

(statearr_24369[(1)] = (1));

return statearr_24369;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21784__auto____1 = (function (state_24330){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_24330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e24370){if((e24370 instanceof Object)){
var ex__21787__auto__ = e24370;
var statearr_24371_24397 = state_24330;
(statearr_24371_24397[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24398 = state_24330;
state_24330 = G__24398;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21784__auto__ = function(state_24330){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21784__auto____1.call(this,state_24330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21784__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21784__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto__))
})();
var state__21897__auto__ = (function (){var statearr_24372 = f__21896__auto__.call(null);
(statearr_24372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto__);

return statearr_24372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto__))
);

return c__21895__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24399 = [];
var len__17899__auto___24402 = arguments.length;
var i__17900__auto___24403 = (0);
while(true){
if((i__17900__auto___24403 < len__17899__auto___24402)){
args24399.push((arguments[i__17900__auto___24403]));

var G__24404 = (i__17900__auto___24403 + (1));
i__17900__auto___24403 = G__24404;
continue;
} else {
}
break;
}

var G__24401 = args24399.length;
switch (G__24401) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24399.length)].join('')));

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
var args24406 = [];
var len__17899__auto___24409 = arguments.length;
var i__17900__auto___24410 = (0);
while(true){
if((i__17900__auto___24410 < len__17899__auto___24409)){
args24406.push((arguments[i__17900__auto___24410]));

var G__24411 = (i__17900__auto___24410 + (1));
i__17900__auto___24410 = G__24411;
continue;
} else {
}
break;
}

var G__24408 = args24406.length;
switch (G__24408) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24406.length)].join('')));

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
var args24413 = [];
var len__17899__auto___24464 = arguments.length;
var i__17900__auto___24465 = (0);
while(true){
if((i__17900__auto___24465 < len__17899__auto___24464)){
args24413.push((arguments[i__17900__auto___24465]));

var G__24466 = (i__17900__auto___24465 + (1));
i__17900__auto___24465 = G__24466;
continue;
} else {
}
break;
}

var G__24415 = args24413.length;
switch (G__24415) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24413.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21895__auto___24468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___24468,out){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___24468,out){
return (function (state_24439){
var state_val_24440 = (state_24439[(1)]);
if((state_val_24440 === (7))){
var inst_24434 = (state_24439[(2)]);
var state_24439__$1 = state_24439;
var statearr_24441_24469 = state_24439__$1;
(statearr_24441_24469[(2)] = inst_24434);

(statearr_24441_24469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24440 === (1))){
var inst_24416 = null;
var state_24439__$1 = (function (){var statearr_24442 = state_24439;
(statearr_24442[(7)] = inst_24416);

return statearr_24442;
})();
var statearr_24443_24470 = state_24439__$1;
(statearr_24443_24470[(2)] = null);

(statearr_24443_24470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24440 === (4))){
var inst_24419 = (state_24439[(8)]);
var inst_24419__$1 = (state_24439[(2)]);
var inst_24420 = (inst_24419__$1 == null);
var inst_24421 = cljs.core.not.call(null,inst_24420);
var state_24439__$1 = (function (){var statearr_24444 = state_24439;
(statearr_24444[(8)] = inst_24419__$1);

return statearr_24444;
})();
if(inst_24421){
var statearr_24445_24471 = state_24439__$1;
(statearr_24445_24471[(1)] = (5));

} else {
var statearr_24446_24472 = state_24439__$1;
(statearr_24446_24472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24440 === (6))){
var state_24439__$1 = state_24439;
var statearr_24447_24473 = state_24439__$1;
(statearr_24447_24473[(2)] = null);

(statearr_24447_24473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24440 === (3))){
var inst_24436 = (state_24439[(2)]);
var inst_24437 = cljs.core.async.close_BANG_.call(null,out);
var state_24439__$1 = (function (){var statearr_24448 = state_24439;
(statearr_24448[(9)] = inst_24436);

return statearr_24448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24439__$1,inst_24437);
} else {
if((state_val_24440 === (2))){
var state_24439__$1 = state_24439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24439__$1,(4),ch);
} else {
if((state_val_24440 === (11))){
var inst_24419 = (state_24439[(8)]);
var inst_24428 = (state_24439[(2)]);
var inst_24416 = inst_24419;
var state_24439__$1 = (function (){var statearr_24449 = state_24439;
(statearr_24449[(10)] = inst_24428);

(statearr_24449[(7)] = inst_24416);

return statearr_24449;
})();
var statearr_24450_24474 = state_24439__$1;
(statearr_24450_24474[(2)] = null);

(statearr_24450_24474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24440 === (9))){
var inst_24419 = (state_24439[(8)]);
var state_24439__$1 = state_24439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24439__$1,(11),out,inst_24419);
} else {
if((state_val_24440 === (5))){
var inst_24416 = (state_24439[(7)]);
var inst_24419 = (state_24439[(8)]);
var inst_24423 = cljs.core._EQ_.call(null,inst_24419,inst_24416);
var state_24439__$1 = state_24439;
if(inst_24423){
var statearr_24452_24475 = state_24439__$1;
(statearr_24452_24475[(1)] = (8));

} else {
var statearr_24453_24476 = state_24439__$1;
(statearr_24453_24476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24440 === (10))){
var inst_24431 = (state_24439[(2)]);
var state_24439__$1 = state_24439;
var statearr_24454_24477 = state_24439__$1;
(statearr_24454_24477[(2)] = inst_24431);

(statearr_24454_24477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24440 === (8))){
var inst_24416 = (state_24439[(7)]);
var tmp24451 = inst_24416;
var inst_24416__$1 = tmp24451;
var state_24439__$1 = (function (){var statearr_24455 = state_24439;
(statearr_24455[(7)] = inst_24416__$1);

return statearr_24455;
})();
var statearr_24456_24478 = state_24439__$1;
(statearr_24456_24478[(2)] = null);

(statearr_24456_24478[(1)] = (2));


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
});})(c__21895__auto___24468,out))
;
return ((function (switch__21783__auto__,c__21895__auto___24468,out){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_24460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24460[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_24460[(1)] = (1));

return statearr_24460;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_24439){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_24439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e24461){if((e24461 instanceof Object)){
var ex__21787__auto__ = e24461;
var statearr_24462_24479 = state_24439;
(statearr_24462_24479[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24480 = state_24439;
state_24439 = G__24480;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_24439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_24439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___24468,out))
})();
var state__21897__auto__ = (function (){var statearr_24463 = f__21896__auto__.call(null);
(statearr_24463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___24468);

return statearr_24463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___24468,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24481 = [];
var len__17899__auto___24551 = arguments.length;
var i__17900__auto___24552 = (0);
while(true){
if((i__17900__auto___24552 < len__17899__auto___24551)){
args24481.push((arguments[i__17900__auto___24552]));

var G__24553 = (i__17900__auto___24552 + (1));
i__17900__auto___24552 = G__24553;
continue;
} else {
}
break;
}

var G__24483 = args24481.length;
switch (G__24483) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24481.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21895__auto___24555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___24555,out){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___24555,out){
return (function (state_24521){
var state_val_24522 = (state_24521[(1)]);
if((state_val_24522 === (7))){
var inst_24517 = (state_24521[(2)]);
var state_24521__$1 = state_24521;
var statearr_24523_24556 = state_24521__$1;
(statearr_24523_24556[(2)] = inst_24517);

(statearr_24523_24556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (1))){
var inst_24484 = (new Array(n));
var inst_24485 = inst_24484;
var inst_24486 = (0);
var state_24521__$1 = (function (){var statearr_24524 = state_24521;
(statearr_24524[(7)] = inst_24486);

(statearr_24524[(8)] = inst_24485);

return statearr_24524;
})();
var statearr_24525_24557 = state_24521__$1;
(statearr_24525_24557[(2)] = null);

(statearr_24525_24557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (4))){
var inst_24489 = (state_24521[(9)]);
var inst_24489__$1 = (state_24521[(2)]);
var inst_24490 = (inst_24489__$1 == null);
var inst_24491 = cljs.core.not.call(null,inst_24490);
var state_24521__$1 = (function (){var statearr_24526 = state_24521;
(statearr_24526[(9)] = inst_24489__$1);

return statearr_24526;
})();
if(inst_24491){
var statearr_24527_24558 = state_24521__$1;
(statearr_24527_24558[(1)] = (5));

} else {
var statearr_24528_24559 = state_24521__$1;
(statearr_24528_24559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (15))){
var inst_24511 = (state_24521[(2)]);
var state_24521__$1 = state_24521;
var statearr_24529_24560 = state_24521__$1;
(statearr_24529_24560[(2)] = inst_24511);

(statearr_24529_24560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (13))){
var state_24521__$1 = state_24521;
var statearr_24530_24561 = state_24521__$1;
(statearr_24530_24561[(2)] = null);

(statearr_24530_24561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (6))){
var inst_24486 = (state_24521[(7)]);
var inst_24507 = (inst_24486 > (0));
var state_24521__$1 = state_24521;
if(cljs.core.truth_(inst_24507)){
var statearr_24531_24562 = state_24521__$1;
(statearr_24531_24562[(1)] = (12));

} else {
var statearr_24532_24563 = state_24521__$1;
(statearr_24532_24563[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (3))){
var inst_24519 = (state_24521[(2)]);
var state_24521__$1 = state_24521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24521__$1,inst_24519);
} else {
if((state_val_24522 === (12))){
var inst_24485 = (state_24521[(8)]);
var inst_24509 = cljs.core.vec.call(null,inst_24485);
var state_24521__$1 = state_24521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24521__$1,(15),out,inst_24509);
} else {
if((state_val_24522 === (2))){
var state_24521__$1 = state_24521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24521__$1,(4),ch);
} else {
if((state_val_24522 === (11))){
var inst_24501 = (state_24521[(2)]);
var inst_24502 = (new Array(n));
var inst_24485 = inst_24502;
var inst_24486 = (0);
var state_24521__$1 = (function (){var statearr_24533 = state_24521;
(statearr_24533[(10)] = inst_24501);

(statearr_24533[(7)] = inst_24486);

(statearr_24533[(8)] = inst_24485);

return statearr_24533;
})();
var statearr_24534_24564 = state_24521__$1;
(statearr_24534_24564[(2)] = null);

(statearr_24534_24564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (9))){
var inst_24485 = (state_24521[(8)]);
var inst_24499 = cljs.core.vec.call(null,inst_24485);
var state_24521__$1 = state_24521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24521__$1,(11),out,inst_24499);
} else {
if((state_val_24522 === (5))){
var inst_24494 = (state_24521[(11)]);
var inst_24486 = (state_24521[(7)]);
var inst_24485 = (state_24521[(8)]);
var inst_24489 = (state_24521[(9)]);
var inst_24493 = (inst_24485[inst_24486] = inst_24489);
var inst_24494__$1 = (inst_24486 + (1));
var inst_24495 = (inst_24494__$1 < n);
var state_24521__$1 = (function (){var statearr_24535 = state_24521;
(statearr_24535[(11)] = inst_24494__$1);

(statearr_24535[(12)] = inst_24493);

return statearr_24535;
})();
if(cljs.core.truth_(inst_24495)){
var statearr_24536_24565 = state_24521__$1;
(statearr_24536_24565[(1)] = (8));

} else {
var statearr_24537_24566 = state_24521__$1;
(statearr_24537_24566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (14))){
var inst_24514 = (state_24521[(2)]);
var inst_24515 = cljs.core.async.close_BANG_.call(null,out);
var state_24521__$1 = (function (){var statearr_24539 = state_24521;
(statearr_24539[(13)] = inst_24514);

return statearr_24539;
})();
var statearr_24540_24567 = state_24521__$1;
(statearr_24540_24567[(2)] = inst_24515);

(statearr_24540_24567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (10))){
var inst_24505 = (state_24521[(2)]);
var state_24521__$1 = state_24521;
var statearr_24541_24568 = state_24521__$1;
(statearr_24541_24568[(2)] = inst_24505);

(statearr_24541_24568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (8))){
var inst_24494 = (state_24521[(11)]);
var inst_24485 = (state_24521[(8)]);
var tmp24538 = inst_24485;
var inst_24485__$1 = tmp24538;
var inst_24486 = inst_24494;
var state_24521__$1 = (function (){var statearr_24542 = state_24521;
(statearr_24542[(7)] = inst_24486);

(statearr_24542[(8)] = inst_24485__$1);

return statearr_24542;
})();
var statearr_24543_24569 = state_24521__$1;
(statearr_24543_24569[(2)] = null);

(statearr_24543_24569[(1)] = (2));


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
});})(c__21895__auto___24555,out))
;
return ((function (switch__21783__auto__,c__21895__auto___24555,out){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_24547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24547[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_24547[(1)] = (1));

return statearr_24547;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_24521){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_24521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e24548){if((e24548 instanceof Object)){
var ex__21787__auto__ = e24548;
var statearr_24549_24570 = state_24521;
(statearr_24549_24570[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24571 = state_24521;
state_24521 = G__24571;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_24521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_24521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___24555,out))
})();
var state__21897__auto__ = (function (){var statearr_24550 = f__21896__auto__.call(null);
(statearr_24550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___24555);

return statearr_24550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___24555,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24572 = [];
var len__17899__auto___24646 = arguments.length;
var i__17900__auto___24647 = (0);
while(true){
if((i__17900__auto___24647 < len__17899__auto___24646)){
args24572.push((arguments[i__17900__auto___24647]));

var G__24648 = (i__17900__auto___24647 + (1));
i__17900__auto___24647 = G__24648;
continue;
} else {
}
break;
}

var G__24574 = args24572.length;
switch (G__24574) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24572.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21895__auto___24650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___24650,out){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___24650,out){
return (function (state_24616){
var state_val_24617 = (state_24616[(1)]);
if((state_val_24617 === (7))){
var inst_24612 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
var statearr_24618_24651 = state_24616__$1;
(statearr_24618_24651[(2)] = inst_24612);

(statearr_24618_24651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (1))){
var inst_24575 = [];
var inst_24576 = inst_24575;
var inst_24577 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24616__$1 = (function (){var statearr_24619 = state_24616;
(statearr_24619[(7)] = inst_24577);

(statearr_24619[(8)] = inst_24576);

return statearr_24619;
})();
var statearr_24620_24652 = state_24616__$1;
(statearr_24620_24652[(2)] = null);

(statearr_24620_24652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (4))){
var inst_24580 = (state_24616[(9)]);
var inst_24580__$1 = (state_24616[(2)]);
var inst_24581 = (inst_24580__$1 == null);
var inst_24582 = cljs.core.not.call(null,inst_24581);
var state_24616__$1 = (function (){var statearr_24621 = state_24616;
(statearr_24621[(9)] = inst_24580__$1);

return statearr_24621;
})();
if(inst_24582){
var statearr_24622_24653 = state_24616__$1;
(statearr_24622_24653[(1)] = (5));

} else {
var statearr_24623_24654 = state_24616__$1;
(statearr_24623_24654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (15))){
var inst_24606 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
var statearr_24624_24655 = state_24616__$1;
(statearr_24624_24655[(2)] = inst_24606);

(statearr_24624_24655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (13))){
var state_24616__$1 = state_24616;
var statearr_24625_24656 = state_24616__$1;
(statearr_24625_24656[(2)] = null);

(statearr_24625_24656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (6))){
var inst_24576 = (state_24616[(8)]);
var inst_24601 = inst_24576.length;
var inst_24602 = (inst_24601 > (0));
var state_24616__$1 = state_24616;
if(cljs.core.truth_(inst_24602)){
var statearr_24626_24657 = state_24616__$1;
(statearr_24626_24657[(1)] = (12));

} else {
var statearr_24627_24658 = state_24616__$1;
(statearr_24627_24658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (3))){
var inst_24614 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24616__$1,inst_24614);
} else {
if((state_val_24617 === (12))){
var inst_24576 = (state_24616[(8)]);
var inst_24604 = cljs.core.vec.call(null,inst_24576);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24616__$1,(15),out,inst_24604);
} else {
if((state_val_24617 === (2))){
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24616__$1,(4),ch);
} else {
if((state_val_24617 === (11))){
var inst_24580 = (state_24616[(9)]);
var inst_24584 = (state_24616[(10)]);
var inst_24594 = (state_24616[(2)]);
var inst_24595 = [];
var inst_24596 = inst_24595.push(inst_24580);
var inst_24576 = inst_24595;
var inst_24577 = inst_24584;
var state_24616__$1 = (function (){var statearr_24628 = state_24616;
(statearr_24628[(11)] = inst_24596);

(statearr_24628[(12)] = inst_24594);

(statearr_24628[(7)] = inst_24577);

(statearr_24628[(8)] = inst_24576);

return statearr_24628;
})();
var statearr_24629_24659 = state_24616__$1;
(statearr_24629_24659[(2)] = null);

(statearr_24629_24659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (9))){
var inst_24576 = (state_24616[(8)]);
var inst_24592 = cljs.core.vec.call(null,inst_24576);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24616__$1,(11),out,inst_24592);
} else {
if((state_val_24617 === (5))){
var inst_24580 = (state_24616[(9)]);
var inst_24577 = (state_24616[(7)]);
var inst_24584 = (state_24616[(10)]);
var inst_24584__$1 = f.call(null,inst_24580);
var inst_24585 = cljs.core._EQ_.call(null,inst_24584__$1,inst_24577);
var inst_24586 = cljs.core.keyword_identical_QMARK_.call(null,inst_24577,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24587 = (inst_24585) || (inst_24586);
var state_24616__$1 = (function (){var statearr_24630 = state_24616;
(statearr_24630[(10)] = inst_24584__$1);

return statearr_24630;
})();
if(cljs.core.truth_(inst_24587)){
var statearr_24631_24660 = state_24616__$1;
(statearr_24631_24660[(1)] = (8));

} else {
var statearr_24632_24661 = state_24616__$1;
(statearr_24632_24661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (14))){
var inst_24609 = (state_24616[(2)]);
var inst_24610 = cljs.core.async.close_BANG_.call(null,out);
var state_24616__$1 = (function (){var statearr_24634 = state_24616;
(statearr_24634[(13)] = inst_24609);

return statearr_24634;
})();
var statearr_24635_24662 = state_24616__$1;
(statearr_24635_24662[(2)] = inst_24610);

(statearr_24635_24662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (10))){
var inst_24599 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
var statearr_24636_24663 = state_24616__$1;
(statearr_24636_24663[(2)] = inst_24599);

(statearr_24636_24663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (8))){
var inst_24580 = (state_24616[(9)]);
var inst_24576 = (state_24616[(8)]);
var inst_24584 = (state_24616[(10)]);
var inst_24589 = inst_24576.push(inst_24580);
var tmp24633 = inst_24576;
var inst_24576__$1 = tmp24633;
var inst_24577 = inst_24584;
var state_24616__$1 = (function (){var statearr_24637 = state_24616;
(statearr_24637[(14)] = inst_24589);

(statearr_24637[(7)] = inst_24577);

(statearr_24637[(8)] = inst_24576__$1);

return statearr_24637;
})();
var statearr_24638_24664 = state_24616__$1;
(statearr_24638_24664[(2)] = null);

(statearr_24638_24664[(1)] = (2));


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
});})(c__21895__auto___24650,out))
;
return ((function (switch__21783__auto__,c__21895__auto___24650,out){
return (function() {
var cljs$core$async$state_machine__21784__auto__ = null;
var cljs$core$async$state_machine__21784__auto____0 = (function (){
var statearr_24642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24642[(0)] = cljs$core$async$state_machine__21784__auto__);

(statearr_24642[(1)] = (1));

return statearr_24642;
});
var cljs$core$async$state_machine__21784__auto____1 = (function (state_24616){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_24616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e24643){if((e24643 instanceof Object)){
var ex__21787__auto__ = e24643;
var statearr_24644_24665 = state_24616;
(statearr_24644_24665[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24666 = state_24616;
state_24616 = G__24666;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
cljs$core$async$state_machine__21784__auto__ = function(state_24616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21784__auto____1.call(this,state_24616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21784__auto____0;
cljs$core$async$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21784__auto____1;
return cljs$core$async$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___24650,out))
})();
var state__21897__auto__ = (function (){var statearr_24645 = f__21896__auto__.call(null);
(statearr_24645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___24650);

return statearr_24645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___24650,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map