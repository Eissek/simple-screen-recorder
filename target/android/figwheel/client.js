// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25074 = cljs.core._EQ_;
var expr__25075 = (function (){var or__16841__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25074.call(null,"true",expr__25075))){
return true;
} else {
if(cljs.core.truth_(pred__25074.call(null,"false",expr__25075))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25075)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17906__auto__ = [];
var len__17899__auto___25078 = arguments.length;
var i__17900__auto___25079 = (0);
while(true){
if((i__17900__auto___25079 < len__17899__auto___25078)){
args__17906__auto__.push((arguments[i__17900__auto___25079]));

var G__25080 = (i__17900__auto___25079 + (1));
i__17900__auto___25079 = G__25080;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((0) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17907__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25077){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25077));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25081){
var map__25084 = p__25081;
var map__25084__$1 = ((((!((map__25084 == null)))?((((map__25084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25084):map__25084);
var message = cljs.core.get.call(null,map__25084__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25084__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16841__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16829__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16829__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16829__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20798__auto___25246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___25246,ch){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___25246,ch){
return (function (state_25215){
var state_val_25216 = (state_25215[(1)]);
if((state_val_25216 === (7))){
var inst_25211 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25217_25247 = state_25215__$1;
(statearr_25217_25247[(2)] = inst_25211);

(statearr_25217_25247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (1))){
var state_25215__$1 = state_25215;
var statearr_25218_25248 = state_25215__$1;
(statearr_25218_25248[(2)] = null);

(statearr_25218_25248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (4))){
var inst_25168 = (state_25215[(7)]);
var inst_25168__$1 = (state_25215[(2)]);
var state_25215__$1 = (function (){var statearr_25219 = state_25215;
(statearr_25219[(7)] = inst_25168__$1);

return statearr_25219;
})();
if(cljs.core.truth_(inst_25168__$1)){
var statearr_25220_25249 = state_25215__$1;
(statearr_25220_25249[(1)] = (5));

} else {
var statearr_25221_25250 = state_25215__$1;
(statearr_25221_25250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (15))){
var inst_25175 = (state_25215[(8)]);
var inst_25190 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25175);
var inst_25191 = cljs.core.first.call(null,inst_25190);
var inst_25192 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25191);
var inst_25193 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25192)].join('');
var inst_25194 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25193);
var state_25215__$1 = state_25215;
var statearr_25222_25251 = state_25215__$1;
(statearr_25222_25251[(2)] = inst_25194);

(statearr_25222_25251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (13))){
var inst_25199 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25223_25252 = state_25215__$1;
(statearr_25223_25252[(2)] = inst_25199);

(statearr_25223_25252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (6))){
var state_25215__$1 = state_25215;
var statearr_25224_25253 = state_25215__$1;
(statearr_25224_25253[(2)] = null);

(statearr_25224_25253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (17))){
var inst_25197 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25225_25254 = state_25215__$1;
(statearr_25225_25254[(2)] = inst_25197);

(statearr_25225_25254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (3))){
var inst_25213 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25215__$1,inst_25213);
} else {
if((state_val_25216 === (12))){
var inst_25174 = (state_25215[(9)]);
var inst_25188 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25174,opts);
var state_25215__$1 = state_25215;
if(cljs.core.truth_(inst_25188)){
var statearr_25226_25255 = state_25215__$1;
(statearr_25226_25255[(1)] = (15));

} else {
var statearr_25227_25256 = state_25215__$1;
(statearr_25227_25256[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (2))){
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25215__$1,(4),ch);
} else {
if((state_val_25216 === (11))){
var inst_25175 = (state_25215[(8)]);
var inst_25180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25181 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25175);
var inst_25182 = cljs.core.async.timeout.call(null,(1000));
var inst_25183 = [inst_25181,inst_25182];
var inst_25184 = (new cljs.core.PersistentVector(null,2,(5),inst_25180,inst_25183,null));
var state_25215__$1 = state_25215;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25215__$1,(14),inst_25184);
} else {
if((state_val_25216 === (9))){
var inst_25175 = (state_25215[(8)]);
var inst_25201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25202 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25175);
var inst_25203 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25202);
var inst_25204 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25203)].join('');
var inst_25205 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25204);
var state_25215__$1 = (function (){var statearr_25228 = state_25215;
(statearr_25228[(10)] = inst_25201);

return statearr_25228;
})();
var statearr_25229_25257 = state_25215__$1;
(statearr_25229_25257[(2)] = inst_25205);

(statearr_25229_25257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (5))){
var inst_25168 = (state_25215[(7)]);
var inst_25170 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25171 = (new cljs.core.PersistentArrayMap(null,2,inst_25170,null));
var inst_25172 = (new cljs.core.PersistentHashSet(null,inst_25171,null));
var inst_25173 = figwheel.client.focus_msgs.call(null,inst_25172,inst_25168);
var inst_25174 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25173);
var inst_25175 = cljs.core.first.call(null,inst_25173);
var inst_25176 = figwheel.client.autoload_QMARK_.call(null);
var state_25215__$1 = (function (){var statearr_25230 = state_25215;
(statearr_25230[(8)] = inst_25175);

(statearr_25230[(9)] = inst_25174);

return statearr_25230;
})();
if(cljs.core.truth_(inst_25176)){
var statearr_25231_25258 = state_25215__$1;
(statearr_25231_25258[(1)] = (8));

} else {
var statearr_25232_25259 = state_25215__$1;
(statearr_25232_25259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (14))){
var inst_25186 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25233_25260 = state_25215__$1;
(statearr_25233_25260[(2)] = inst_25186);

(statearr_25233_25260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (16))){
var state_25215__$1 = state_25215;
var statearr_25234_25261 = state_25215__$1;
(statearr_25234_25261[(2)] = null);

(statearr_25234_25261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (10))){
var inst_25207 = (state_25215[(2)]);
var state_25215__$1 = (function (){var statearr_25235 = state_25215;
(statearr_25235[(11)] = inst_25207);

return statearr_25235;
})();
var statearr_25236_25262 = state_25215__$1;
(statearr_25236_25262[(2)] = null);

(statearr_25236_25262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (8))){
var inst_25174 = (state_25215[(9)]);
var inst_25178 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25174,opts);
var state_25215__$1 = state_25215;
if(cljs.core.truth_(inst_25178)){
var statearr_25237_25263 = state_25215__$1;
(statearr_25237_25263[(1)] = (11));

} else {
var statearr_25238_25264 = state_25215__$1;
(statearr_25238_25264[(1)] = (12));

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
});})(c__20798__auto___25246,ch))
;
return ((function (switch__20686__auto__,c__20798__auto___25246,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20687__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20687__auto____0 = (function (){
var statearr_25242 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25242[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20687__auto__);

(statearr_25242[(1)] = (1));

return statearr_25242;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20687__auto____1 = (function (state_25215){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_25215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e25243){if((e25243 instanceof Object)){
var ex__20690__auto__ = e25243;
var statearr_25244_25265 = state_25215;
(statearr_25244_25265[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25266 = state_25215;
state_25215 = G__25266;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20687__auto__ = function(state_25215){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20687__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20687__auto____1.call(this,state_25215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20687__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20687__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___25246,ch))
})();
var state__20800__auto__ = (function (){var statearr_25245 = f__20799__auto__.call(null);
(statearr_25245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___25246);

return statearr_25245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___25246,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25267_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25267_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25274 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25274){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25273 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25273;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25272;
}}catch (e25271){if((e25271 instanceof Error)){
var e = e25271;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25274], null));
} else {
var e = e25271;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25274))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25275){
var map__25282 = p__25275;
var map__25282__$1 = ((((!((map__25282 == null)))?((((map__25282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25282):map__25282);
var opts = map__25282__$1;
var build_id = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25282,map__25282__$1,opts,build_id){
return (function (p__25284){
var vec__25285 = p__25284;
var map__25286 = cljs.core.nth.call(null,vec__25285,(0),null);
var map__25286__$1 = ((((!((map__25286 == null)))?((((map__25286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25286):map__25286);
var msg = map__25286__$1;
var msg_name = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25285,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25285,map__25286,map__25286__$1,msg,msg_name,_,map__25282,map__25282__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25285,map__25286,map__25286__$1,msg,msg_name,_,map__25282,map__25282__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25282,map__25282__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25292){
var vec__25293 = p__25292;
var map__25294 = cljs.core.nth.call(null,vec__25293,(0),null);
var map__25294__$1 = ((((!((map__25294 == null)))?((((map__25294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25294):map__25294);
var msg = map__25294__$1;
var msg_name = cljs.core.get.call(null,map__25294__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25293,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25296){
var map__25306 = p__25296;
var map__25306__$1 = ((((!((map__25306 == null)))?((((map__25306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25306):map__25306);
var on_compile_warning = cljs.core.get.call(null,map__25306__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25306__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25306,map__25306__$1,on_compile_warning,on_compile_fail){
return (function (p__25308){
var vec__25309 = p__25308;
var map__25310 = cljs.core.nth.call(null,vec__25309,(0),null);
var map__25310__$1 = ((((!((map__25310 == null)))?((((map__25310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25310):map__25310);
var msg = map__25310__$1;
var msg_name = cljs.core.get.call(null,map__25310__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25309,(1));
var pred__25312 = cljs.core._EQ_;
var expr__25313 = msg_name;
if(cljs.core.truth_(pred__25312.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25313))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25312.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25313))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25306,map__25306__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto__,msg_hist,msg_names,msg){
return (function (state_25529){
var state_val_25530 = (state_25529[(1)]);
if((state_val_25530 === (7))){
var inst_25453 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25453)){
var statearr_25531_25577 = state_25529__$1;
(statearr_25531_25577[(1)] = (8));

} else {
var statearr_25532_25578 = state_25529__$1;
(statearr_25532_25578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (20))){
var inst_25523 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25533_25579 = state_25529__$1;
(statearr_25533_25579[(2)] = inst_25523);

(statearr_25533_25579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (27))){
var inst_25519 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25534_25580 = state_25529__$1;
(statearr_25534_25580[(2)] = inst_25519);

(statearr_25534_25580[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (1))){
var inst_25446 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25446)){
var statearr_25535_25581 = state_25529__$1;
(statearr_25535_25581[(1)] = (2));

} else {
var statearr_25536_25582 = state_25529__$1;
(statearr_25536_25582[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (24))){
var inst_25521 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25537_25583 = state_25529__$1;
(statearr_25537_25583[(2)] = inst_25521);

(statearr_25537_25583[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (4))){
var inst_25527 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25529__$1,inst_25527);
} else {
if((state_val_25530 === (15))){
var inst_25525 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25538_25584 = state_25529__$1;
(statearr_25538_25584[(2)] = inst_25525);

(statearr_25538_25584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (21))){
var inst_25484 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25539_25585 = state_25529__$1;
(statearr_25539_25585[(2)] = inst_25484);

(statearr_25539_25585[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (31))){
var inst_25508 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25508)){
var statearr_25540_25586 = state_25529__$1;
(statearr_25540_25586[(1)] = (34));

} else {
var statearr_25541_25587 = state_25529__$1;
(statearr_25541_25587[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (32))){
var inst_25517 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25542_25588 = state_25529__$1;
(statearr_25542_25588[(2)] = inst_25517);

(statearr_25542_25588[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (33))){
var inst_25506 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25543_25589 = state_25529__$1;
(statearr_25543_25589[(2)] = inst_25506);

(statearr_25543_25589[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (13))){
var inst_25467 = figwheel.client.heads_up.clear.call(null);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(16),inst_25467);
} else {
if((state_val_25530 === (22))){
var inst_25488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25489 = figwheel.client.heads_up.append_message.call(null,inst_25488);
var state_25529__$1 = state_25529;
var statearr_25544_25590 = state_25529__$1;
(statearr_25544_25590[(2)] = inst_25489);

(statearr_25544_25590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (36))){
var inst_25515 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25545_25591 = state_25529__$1;
(statearr_25545_25591[(2)] = inst_25515);

(statearr_25545_25591[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (29))){
var inst_25499 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25546_25592 = state_25529__$1;
(statearr_25546_25592[(2)] = inst_25499);

(statearr_25546_25592[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (6))){
var inst_25448 = (state_25529[(7)]);
var state_25529__$1 = state_25529;
var statearr_25547_25593 = state_25529__$1;
(statearr_25547_25593[(2)] = inst_25448);

(statearr_25547_25593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (28))){
var inst_25495 = (state_25529[(2)]);
var inst_25496 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25497 = figwheel.client.heads_up.display_warning.call(null,inst_25496);
var state_25529__$1 = (function (){var statearr_25548 = state_25529;
(statearr_25548[(8)] = inst_25495);

return statearr_25548;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(29),inst_25497);
} else {
if((state_val_25530 === (25))){
var inst_25493 = figwheel.client.heads_up.clear.call(null);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(28),inst_25493);
} else {
if((state_val_25530 === (34))){
var inst_25510 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(37),inst_25510);
} else {
if((state_val_25530 === (17))){
var inst_25475 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25549_25594 = state_25529__$1;
(statearr_25549_25594[(2)] = inst_25475);

(statearr_25549_25594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (3))){
var inst_25465 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25465)){
var statearr_25550_25595 = state_25529__$1;
(statearr_25550_25595[(1)] = (13));

} else {
var statearr_25551_25596 = state_25529__$1;
(statearr_25551_25596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (12))){
var inst_25461 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25552_25597 = state_25529__$1;
(statearr_25552_25597[(2)] = inst_25461);

(statearr_25552_25597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (2))){
var inst_25448 = (state_25529[(7)]);
var inst_25448__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25529__$1 = (function (){var statearr_25553 = state_25529;
(statearr_25553[(7)] = inst_25448__$1);

return statearr_25553;
})();
if(cljs.core.truth_(inst_25448__$1)){
var statearr_25554_25598 = state_25529__$1;
(statearr_25554_25598[(1)] = (5));

} else {
var statearr_25555_25599 = state_25529__$1;
(statearr_25555_25599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (23))){
var inst_25491 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25491)){
var statearr_25556_25600 = state_25529__$1;
(statearr_25556_25600[(1)] = (25));

} else {
var statearr_25557_25601 = state_25529__$1;
(statearr_25557_25601[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (35))){
var state_25529__$1 = state_25529;
var statearr_25558_25602 = state_25529__$1;
(statearr_25558_25602[(2)] = null);

(statearr_25558_25602[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (19))){
var inst_25486 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25486)){
var statearr_25559_25603 = state_25529__$1;
(statearr_25559_25603[(1)] = (22));

} else {
var statearr_25560_25604 = state_25529__$1;
(statearr_25560_25604[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (11))){
var inst_25457 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25561_25605 = state_25529__$1;
(statearr_25561_25605[(2)] = inst_25457);

(statearr_25561_25605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (9))){
var inst_25459 = figwheel.client.heads_up.clear.call(null);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(12),inst_25459);
} else {
if((state_val_25530 === (5))){
var inst_25450 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25529__$1 = state_25529;
var statearr_25562_25606 = state_25529__$1;
(statearr_25562_25606[(2)] = inst_25450);

(statearr_25562_25606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (14))){
var inst_25477 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25477)){
var statearr_25563_25607 = state_25529__$1;
(statearr_25563_25607[(1)] = (18));

} else {
var statearr_25564_25608 = state_25529__$1;
(statearr_25564_25608[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (26))){
var inst_25501 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25501)){
var statearr_25565_25609 = state_25529__$1;
(statearr_25565_25609[(1)] = (30));

} else {
var statearr_25566_25610 = state_25529__$1;
(statearr_25566_25610[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (16))){
var inst_25469 = (state_25529[(2)]);
var inst_25470 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25471 = figwheel.client.format_messages.call(null,inst_25470);
var inst_25472 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25473 = figwheel.client.heads_up.display_error.call(null,inst_25471,inst_25472);
var state_25529__$1 = (function (){var statearr_25567 = state_25529;
(statearr_25567[(9)] = inst_25469);

return statearr_25567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(17),inst_25473);
} else {
if((state_val_25530 === (30))){
var inst_25503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25504 = figwheel.client.heads_up.display_warning.call(null,inst_25503);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(33),inst_25504);
} else {
if((state_val_25530 === (10))){
var inst_25463 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25568_25611 = state_25529__$1;
(statearr_25568_25611[(2)] = inst_25463);

(statearr_25568_25611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (18))){
var inst_25479 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25480 = figwheel.client.format_messages.call(null,inst_25479);
var inst_25481 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25482 = figwheel.client.heads_up.display_error.call(null,inst_25480,inst_25481);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(21),inst_25482);
} else {
if((state_val_25530 === (37))){
var inst_25512 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25569_25612 = state_25529__$1;
(statearr_25569_25612[(2)] = inst_25512);

(statearr_25569_25612[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (8))){
var inst_25455 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(11),inst_25455);
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
});})(c__20798__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20686__auto__,c__20798__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto____0 = (function (){
var statearr_25573 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25573[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto__);

(statearr_25573[(1)] = (1));

return statearr_25573;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto____1 = (function (state_25529){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_25529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e25574){if((e25574 instanceof Object)){
var ex__20690__auto__ = e25574;
var statearr_25575_25613 = state_25529;
(statearr_25575_25613[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25614 = state_25529;
state_25529 = G__25614;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto__ = function(state_25529){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto____1.call(this,state_25529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto__,msg_hist,msg_names,msg))
})();
var state__20800__auto__ = (function (){var statearr_25576 = f__20799__auto__.call(null);
(statearr_25576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto__);

return statearr_25576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto__,msg_hist,msg_names,msg))
);

return c__20798__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20798__auto___25677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___25677,ch){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___25677,ch){
return (function (state_25660){
var state_val_25661 = (state_25660[(1)]);
if((state_val_25661 === (1))){
var state_25660__$1 = state_25660;
var statearr_25662_25678 = state_25660__$1;
(statearr_25662_25678[(2)] = null);

(statearr_25662_25678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (2))){
var state_25660__$1 = state_25660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25660__$1,(4),ch);
} else {
if((state_val_25661 === (3))){
var inst_25658 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25660__$1,inst_25658);
} else {
if((state_val_25661 === (4))){
var inst_25648 = (state_25660[(7)]);
var inst_25648__$1 = (state_25660[(2)]);
var state_25660__$1 = (function (){var statearr_25663 = state_25660;
(statearr_25663[(7)] = inst_25648__$1);

return statearr_25663;
})();
if(cljs.core.truth_(inst_25648__$1)){
var statearr_25664_25679 = state_25660__$1;
(statearr_25664_25679[(1)] = (5));

} else {
var statearr_25665_25680 = state_25660__$1;
(statearr_25665_25680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (5))){
var inst_25648 = (state_25660[(7)]);
var inst_25650 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25648);
var state_25660__$1 = state_25660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25660__$1,(8),inst_25650);
} else {
if((state_val_25661 === (6))){
var state_25660__$1 = state_25660;
var statearr_25666_25681 = state_25660__$1;
(statearr_25666_25681[(2)] = null);

(statearr_25666_25681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (7))){
var inst_25656 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
var statearr_25667_25682 = state_25660__$1;
(statearr_25667_25682[(2)] = inst_25656);

(statearr_25667_25682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (8))){
var inst_25652 = (state_25660[(2)]);
var state_25660__$1 = (function (){var statearr_25668 = state_25660;
(statearr_25668[(8)] = inst_25652);

return statearr_25668;
})();
var statearr_25669_25683 = state_25660__$1;
(statearr_25669_25683[(2)] = null);

(statearr_25669_25683[(1)] = (2));


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
});})(c__20798__auto___25677,ch))
;
return ((function (switch__20686__auto__,c__20798__auto___25677,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20687__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20687__auto____0 = (function (){
var statearr_25673 = [null,null,null,null,null,null,null,null,null];
(statearr_25673[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20687__auto__);

(statearr_25673[(1)] = (1));

return statearr_25673;
});
var figwheel$client$heads_up_plugin_$_state_machine__20687__auto____1 = (function (state_25660){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_25660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e25674){if((e25674 instanceof Object)){
var ex__20690__auto__ = e25674;
var statearr_25675_25684 = state_25660;
(statearr_25675_25684[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25685 = state_25660;
state_25660 = G__25685;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20687__auto__ = function(state_25660){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20687__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20687__auto____1.call(this,state_25660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20687__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20687__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___25677,ch))
})();
var state__20800__auto__ = (function (){var statearr_25676 = f__20799__auto__.call(null);
(statearr_25676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___25677);

return statearr_25676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___25677,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto__){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto__){
return (function (state_25706){
var state_val_25707 = (state_25706[(1)]);
if((state_val_25707 === (1))){
var inst_25701 = cljs.core.async.timeout.call(null,(3000));
var state_25706__$1 = state_25706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25706__$1,(2),inst_25701);
} else {
if((state_val_25707 === (2))){
var inst_25703 = (state_25706[(2)]);
var inst_25704 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25706__$1 = (function (){var statearr_25708 = state_25706;
(statearr_25708[(7)] = inst_25703);

return statearr_25708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25706__$1,inst_25704);
} else {
return null;
}
}
});})(c__20798__auto__))
;
return ((function (switch__20686__auto__,c__20798__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20687__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20687__auto____0 = (function (){
var statearr_25712 = [null,null,null,null,null,null,null,null];
(statearr_25712[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20687__auto__);

(statearr_25712[(1)] = (1));

return statearr_25712;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20687__auto____1 = (function (state_25706){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_25706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e25713){if((e25713 instanceof Object)){
var ex__20690__auto__ = e25713;
var statearr_25714_25716 = state_25706;
(statearr_25714_25716[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25717 = state_25706;
state_25706 = G__25717;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20687__auto__ = function(state_25706){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20687__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20687__auto____1.call(this,state_25706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20687__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20687__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto__))
})();
var state__20800__auto__ = (function (){var statearr_25715 = f__20799__auto__.call(null);
(statearr_25715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto__);

return statearr_25715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto__))
);

return c__20798__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25718){
var map__25725 = p__25718;
var map__25725__$1 = ((((!((map__25725 == null)))?((((map__25725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25725):map__25725);
var ed = map__25725__$1;
var formatted_exception = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25727_25731 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25728_25732 = null;
var count__25729_25733 = (0);
var i__25730_25734 = (0);
while(true){
if((i__25730_25734 < count__25729_25733)){
var msg_25735 = cljs.core._nth.call(null,chunk__25728_25732,i__25730_25734);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25735);

var G__25736 = seq__25727_25731;
var G__25737 = chunk__25728_25732;
var G__25738 = count__25729_25733;
var G__25739 = (i__25730_25734 + (1));
seq__25727_25731 = G__25736;
chunk__25728_25732 = G__25737;
count__25729_25733 = G__25738;
i__25730_25734 = G__25739;
continue;
} else {
var temp__4425__auto___25740 = cljs.core.seq.call(null,seq__25727_25731);
if(temp__4425__auto___25740){
var seq__25727_25741__$1 = temp__4425__auto___25740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25727_25741__$1)){
var c__17644__auto___25742 = cljs.core.chunk_first.call(null,seq__25727_25741__$1);
var G__25743 = cljs.core.chunk_rest.call(null,seq__25727_25741__$1);
var G__25744 = c__17644__auto___25742;
var G__25745 = cljs.core.count.call(null,c__17644__auto___25742);
var G__25746 = (0);
seq__25727_25731 = G__25743;
chunk__25728_25732 = G__25744;
count__25729_25733 = G__25745;
i__25730_25734 = G__25746;
continue;
} else {
var msg_25747 = cljs.core.first.call(null,seq__25727_25741__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25747);

var G__25748 = cljs.core.next.call(null,seq__25727_25741__$1);
var G__25749 = null;
var G__25750 = (0);
var G__25751 = (0);
seq__25727_25731 = G__25748;
chunk__25728_25732 = G__25749;
count__25729_25733 = G__25750;
i__25730_25734 = G__25751;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25752){
var map__25755 = p__25752;
var map__25755__$1 = ((((!((map__25755 == null)))?((((map__25755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25755):map__25755);
var w = map__25755__$1;
var message = cljs.core.get.call(null,map__25755__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16829__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16829__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16829__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25763 = cljs.core.seq.call(null,plugins);
var chunk__25764 = null;
var count__25765 = (0);
var i__25766 = (0);
while(true){
if((i__25766 < count__25765)){
var vec__25767 = cljs.core._nth.call(null,chunk__25764,i__25766);
var k = cljs.core.nth.call(null,vec__25767,(0),null);
var plugin = cljs.core.nth.call(null,vec__25767,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25769 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25763,chunk__25764,count__25765,i__25766,pl_25769,vec__25767,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25769.call(null,msg_hist);
});})(seq__25763,chunk__25764,count__25765,i__25766,pl_25769,vec__25767,k,plugin))
);
} else {
}

var G__25770 = seq__25763;
var G__25771 = chunk__25764;
var G__25772 = count__25765;
var G__25773 = (i__25766 + (1));
seq__25763 = G__25770;
chunk__25764 = G__25771;
count__25765 = G__25772;
i__25766 = G__25773;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25763);
if(temp__4425__auto__){
var seq__25763__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25763__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__25763__$1);
var G__25774 = cljs.core.chunk_rest.call(null,seq__25763__$1);
var G__25775 = c__17644__auto__;
var G__25776 = cljs.core.count.call(null,c__17644__auto__);
var G__25777 = (0);
seq__25763 = G__25774;
chunk__25764 = G__25775;
count__25765 = G__25776;
i__25766 = G__25777;
continue;
} else {
var vec__25768 = cljs.core.first.call(null,seq__25763__$1);
var k = cljs.core.nth.call(null,vec__25768,(0),null);
var plugin = cljs.core.nth.call(null,vec__25768,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25778 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25763,chunk__25764,count__25765,i__25766,pl_25778,vec__25768,k,plugin,seq__25763__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25778.call(null,msg_hist);
});})(seq__25763,chunk__25764,count__25765,i__25766,pl_25778,vec__25768,k,plugin,seq__25763__$1,temp__4425__auto__))
);
} else {
}

var G__25779 = cljs.core.next.call(null,seq__25763__$1);
var G__25780 = null;
var G__25781 = (0);
var G__25782 = (0);
seq__25763 = G__25779;
chunk__25764 = G__25780;
count__25765 = G__25781;
i__25766 = G__25782;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25783 = [];
var len__17899__auto___25786 = arguments.length;
var i__17900__auto___25787 = (0);
while(true){
if((i__17900__auto___25787 < len__17899__auto___25786)){
args25783.push((arguments[i__17900__auto___25787]));

var G__25788 = (i__17900__auto___25787 + (1));
i__17900__auto___25787 = G__25788;
continue;
} else {
}
break;
}

var G__25785 = args25783.length;
switch (G__25785) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25783.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17906__auto__ = [];
var len__17899__auto___25794 = arguments.length;
var i__17900__auto___25795 = (0);
while(true){
if((i__17900__auto___25795 < len__17899__auto___25794)){
args__17906__auto__.push((arguments[i__17900__auto___25795]));

var G__25796 = (i__17900__auto___25795 + (1));
i__17900__auto___25795 = G__25796;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((0) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17907__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25791){
var map__25792 = p__25791;
var map__25792__$1 = ((((!((map__25792 == null)))?((((map__25792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25792):map__25792);
var opts = map__25792__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25790){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25790));
});

//# sourceMappingURL=client.js.map