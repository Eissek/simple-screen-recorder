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
var pred__26171 = cljs.core._EQ_;
var expr__26172 = (function (){var or__16841__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26171.call(null,"true",expr__26172))){
return true;
} else {
if(cljs.core.truth_(pred__26171.call(null,"false",expr__26172))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26172)].join('')));
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
var len__17899__auto___26175 = arguments.length;
var i__17900__auto___26176 = (0);
while(true){
if((i__17900__auto___26176 < len__17899__auto___26175)){
args__17906__auto__.push((arguments[i__17900__auto___26176]));

var G__26177 = (i__17900__auto___26176 + (1));
i__17900__auto___26176 = G__26177;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26174){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26174));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26178){
var map__26181 = p__26178;
var map__26181__$1 = ((((!((map__26181 == null)))?((((map__26181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26181):map__26181);
var message = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21895__auto___26343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___26343,ch){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___26343,ch){
return (function (state_26312){
var state_val_26313 = (state_26312[(1)]);
if((state_val_26313 === (7))){
var inst_26308 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26314_26344 = state_26312__$1;
(statearr_26314_26344[(2)] = inst_26308);

(statearr_26314_26344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (1))){
var state_26312__$1 = state_26312;
var statearr_26315_26345 = state_26312__$1;
(statearr_26315_26345[(2)] = null);

(statearr_26315_26345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (4))){
var inst_26265 = (state_26312[(7)]);
var inst_26265__$1 = (state_26312[(2)]);
var state_26312__$1 = (function (){var statearr_26316 = state_26312;
(statearr_26316[(7)] = inst_26265__$1);

return statearr_26316;
})();
if(cljs.core.truth_(inst_26265__$1)){
var statearr_26317_26346 = state_26312__$1;
(statearr_26317_26346[(1)] = (5));

} else {
var statearr_26318_26347 = state_26312__$1;
(statearr_26318_26347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (15))){
var inst_26272 = (state_26312[(8)]);
var inst_26287 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26272);
var inst_26288 = cljs.core.first.call(null,inst_26287);
var inst_26289 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26288);
var inst_26290 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26289)].join('');
var inst_26291 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26290);
var state_26312__$1 = state_26312;
var statearr_26319_26348 = state_26312__$1;
(statearr_26319_26348[(2)] = inst_26291);

(statearr_26319_26348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (13))){
var inst_26296 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26320_26349 = state_26312__$1;
(statearr_26320_26349[(2)] = inst_26296);

(statearr_26320_26349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (6))){
var state_26312__$1 = state_26312;
var statearr_26321_26350 = state_26312__$1;
(statearr_26321_26350[(2)] = null);

(statearr_26321_26350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (17))){
var inst_26294 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26322_26351 = state_26312__$1;
(statearr_26322_26351[(2)] = inst_26294);

(statearr_26322_26351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (3))){
var inst_26310 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26312__$1,inst_26310);
} else {
if((state_val_26313 === (12))){
var inst_26271 = (state_26312[(9)]);
var inst_26285 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26271,opts);
var state_26312__$1 = state_26312;
if(cljs.core.truth_(inst_26285)){
var statearr_26323_26352 = state_26312__$1;
(statearr_26323_26352[(1)] = (15));

} else {
var statearr_26324_26353 = state_26312__$1;
(statearr_26324_26353[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (2))){
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26312__$1,(4),ch);
} else {
if((state_val_26313 === (11))){
var inst_26272 = (state_26312[(8)]);
var inst_26277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26278 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26272);
var inst_26279 = cljs.core.async.timeout.call(null,(1000));
var inst_26280 = [inst_26278,inst_26279];
var inst_26281 = (new cljs.core.PersistentVector(null,2,(5),inst_26277,inst_26280,null));
var state_26312__$1 = state_26312;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26312__$1,(14),inst_26281);
} else {
if((state_val_26313 === (9))){
var inst_26272 = (state_26312[(8)]);
var inst_26298 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26299 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26272);
var inst_26300 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26299);
var inst_26301 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26300)].join('');
var inst_26302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26301);
var state_26312__$1 = (function (){var statearr_26325 = state_26312;
(statearr_26325[(10)] = inst_26298);

return statearr_26325;
})();
var statearr_26326_26354 = state_26312__$1;
(statearr_26326_26354[(2)] = inst_26302);

(statearr_26326_26354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (5))){
var inst_26265 = (state_26312[(7)]);
var inst_26267 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26268 = (new cljs.core.PersistentArrayMap(null,2,inst_26267,null));
var inst_26269 = (new cljs.core.PersistentHashSet(null,inst_26268,null));
var inst_26270 = figwheel.client.focus_msgs.call(null,inst_26269,inst_26265);
var inst_26271 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26270);
var inst_26272 = cljs.core.first.call(null,inst_26270);
var inst_26273 = figwheel.client.autoload_QMARK_.call(null);
var state_26312__$1 = (function (){var statearr_26327 = state_26312;
(statearr_26327[(9)] = inst_26271);

(statearr_26327[(8)] = inst_26272);

return statearr_26327;
})();
if(cljs.core.truth_(inst_26273)){
var statearr_26328_26355 = state_26312__$1;
(statearr_26328_26355[(1)] = (8));

} else {
var statearr_26329_26356 = state_26312__$1;
(statearr_26329_26356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (14))){
var inst_26283 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26330_26357 = state_26312__$1;
(statearr_26330_26357[(2)] = inst_26283);

(statearr_26330_26357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (16))){
var state_26312__$1 = state_26312;
var statearr_26331_26358 = state_26312__$1;
(statearr_26331_26358[(2)] = null);

(statearr_26331_26358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (10))){
var inst_26304 = (state_26312[(2)]);
var state_26312__$1 = (function (){var statearr_26332 = state_26312;
(statearr_26332[(11)] = inst_26304);

return statearr_26332;
})();
var statearr_26333_26359 = state_26312__$1;
(statearr_26333_26359[(2)] = null);

(statearr_26333_26359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (8))){
var inst_26271 = (state_26312[(9)]);
var inst_26275 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26271,opts);
var state_26312__$1 = state_26312;
if(cljs.core.truth_(inst_26275)){
var statearr_26334_26360 = state_26312__$1;
(statearr_26334_26360[(1)] = (11));

} else {
var statearr_26335_26361 = state_26312__$1;
(statearr_26335_26361[(1)] = (12));

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
});})(c__21895__auto___26343,ch))
;
return ((function (switch__21783__auto__,c__21895__auto___26343,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21784__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21784__auto____0 = (function (){
var statearr_26339 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26339[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21784__auto__);

(statearr_26339[(1)] = (1));

return statearr_26339;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21784__auto____1 = (function (state_26312){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_26312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e26340){if((e26340 instanceof Object)){
var ex__21787__auto__ = e26340;
var statearr_26341_26362 = state_26312;
(statearr_26341_26362[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26363 = state_26312;
state_26312 = G__26363;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21784__auto__ = function(state_26312){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21784__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21784__auto____1.call(this,state_26312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21784__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21784__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___26343,ch))
})();
var state__21897__auto__ = (function (){var statearr_26342 = f__21896__auto__.call(null);
(statearr_26342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___26343);

return statearr_26342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___26343,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26364_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26364_SHARP_));
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
var base_path_26371 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26371){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26370 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26370;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26369;
}}catch (e26368){if((e26368 instanceof Error)){
var e = e26368;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26371], null));
} else {
var e = e26368;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26371))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26372){
var map__26379 = p__26372;
var map__26379__$1 = ((((!((map__26379 == null)))?((((map__26379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26379):map__26379);
var opts = map__26379__$1;
var build_id = cljs.core.get.call(null,map__26379__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26379,map__26379__$1,opts,build_id){
return (function (p__26381){
var vec__26382 = p__26381;
var map__26383 = cljs.core.nth.call(null,vec__26382,(0),null);
var map__26383__$1 = ((((!((map__26383 == null)))?((((map__26383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26383):map__26383);
var msg = map__26383__$1;
var msg_name = cljs.core.get.call(null,map__26383__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26382,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26382,map__26383,map__26383__$1,msg,msg_name,_,map__26379,map__26379__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26382,map__26383,map__26383__$1,msg,msg_name,_,map__26379,map__26379__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26379,map__26379__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26389){
var vec__26390 = p__26389;
var map__26391 = cljs.core.nth.call(null,vec__26390,(0),null);
var map__26391__$1 = ((((!((map__26391 == null)))?((((map__26391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26391):map__26391);
var msg = map__26391__$1;
var msg_name = cljs.core.get.call(null,map__26391__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26390,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26393){
var map__26403 = p__26393;
var map__26403__$1 = ((((!((map__26403 == null)))?((((map__26403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403):map__26403);
var on_compile_warning = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26403,map__26403__$1,on_compile_warning,on_compile_fail){
return (function (p__26405){
var vec__26406 = p__26405;
var map__26407 = cljs.core.nth.call(null,vec__26406,(0),null);
var map__26407__$1 = ((((!((map__26407 == null)))?((((map__26407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26407):map__26407);
var msg = map__26407__$1;
var msg_name = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26406,(1));
var pred__26409 = cljs.core._EQ_;
var expr__26410 = msg_name;
if(cljs.core.truth_(pred__26409.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26410))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26409.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26410))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26403,map__26403__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto__,msg_hist,msg_names,msg){
return (function (state_26626){
var state_val_26627 = (state_26626[(1)]);
if((state_val_26627 === (7))){
var inst_26550 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26550)){
var statearr_26628_26674 = state_26626__$1;
(statearr_26628_26674[(1)] = (8));

} else {
var statearr_26629_26675 = state_26626__$1;
(statearr_26629_26675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (20))){
var inst_26620 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26630_26676 = state_26626__$1;
(statearr_26630_26676[(2)] = inst_26620);

(statearr_26630_26676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (27))){
var inst_26616 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26631_26677 = state_26626__$1;
(statearr_26631_26677[(2)] = inst_26616);

(statearr_26631_26677[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (1))){
var inst_26543 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26543)){
var statearr_26632_26678 = state_26626__$1;
(statearr_26632_26678[(1)] = (2));

} else {
var statearr_26633_26679 = state_26626__$1;
(statearr_26633_26679[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (24))){
var inst_26618 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26634_26680 = state_26626__$1;
(statearr_26634_26680[(2)] = inst_26618);

(statearr_26634_26680[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (4))){
var inst_26624 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26626__$1,inst_26624);
} else {
if((state_val_26627 === (15))){
var inst_26622 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26635_26681 = state_26626__$1;
(statearr_26635_26681[(2)] = inst_26622);

(statearr_26635_26681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (21))){
var inst_26581 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26636_26682 = state_26626__$1;
(statearr_26636_26682[(2)] = inst_26581);

(statearr_26636_26682[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (31))){
var inst_26605 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26605)){
var statearr_26637_26683 = state_26626__$1;
(statearr_26637_26683[(1)] = (34));

} else {
var statearr_26638_26684 = state_26626__$1;
(statearr_26638_26684[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (32))){
var inst_26614 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26639_26685 = state_26626__$1;
(statearr_26639_26685[(2)] = inst_26614);

(statearr_26639_26685[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (33))){
var inst_26603 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26640_26686 = state_26626__$1;
(statearr_26640_26686[(2)] = inst_26603);

(statearr_26640_26686[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (13))){
var inst_26564 = figwheel.client.heads_up.clear.call(null);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(16),inst_26564);
} else {
if((state_val_26627 === (22))){
var inst_26585 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26586 = figwheel.client.heads_up.append_message.call(null,inst_26585);
var state_26626__$1 = state_26626;
var statearr_26641_26687 = state_26626__$1;
(statearr_26641_26687[(2)] = inst_26586);

(statearr_26641_26687[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (36))){
var inst_26612 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26642_26688 = state_26626__$1;
(statearr_26642_26688[(2)] = inst_26612);

(statearr_26642_26688[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (29))){
var inst_26596 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26643_26689 = state_26626__$1;
(statearr_26643_26689[(2)] = inst_26596);

(statearr_26643_26689[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (6))){
var inst_26545 = (state_26626[(7)]);
var state_26626__$1 = state_26626;
var statearr_26644_26690 = state_26626__$1;
(statearr_26644_26690[(2)] = inst_26545);

(statearr_26644_26690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (28))){
var inst_26592 = (state_26626[(2)]);
var inst_26593 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26594 = figwheel.client.heads_up.display_warning.call(null,inst_26593);
var state_26626__$1 = (function (){var statearr_26645 = state_26626;
(statearr_26645[(8)] = inst_26592);

return statearr_26645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(29),inst_26594);
} else {
if((state_val_26627 === (25))){
var inst_26590 = figwheel.client.heads_up.clear.call(null);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(28),inst_26590);
} else {
if((state_val_26627 === (34))){
var inst_26607 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(37),inst_26607);
} else {
if((state_val_26627 === (17))){
var inst_26572 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26646_26691 = state_26626__$1;
(statearr_26646_26691[(2)] = inst_26572);

(statearr_26646_26691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (3))){
var inst_26562 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26562)){
var statearr_26647_26692 = state_26626__$1;
(statearr_26647_26692[(1)] = (13));

} else {
var statearr_26648_26693 = state_26626__$1;
(statearr_26648_26693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (12))){
var inst_26558 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26649_26694 = state_26626__$1;
(statearr_26649_26694[(2)] = inst_26558);

(statearr_26649_26694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (2))){
var inst_26545 = (state_26626[(7)]);
var inst_26545__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26626__$1 = (function (){var statearr_26650 = state_26626;
(statearr_26650[(7)] = inst_26545__$1);

return statearr_26650;
})();
if(cljs.core.truth_(inst_26545__$1)){
var statearr_26651_26695 = state_26626__$1;
(statearr_26651_26695[(1)] = (5));

} else {
var statearr_26652_26696 = state_26626__$1;
(statearr_26652_26696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (23))){
var inst_26588 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26588)){
var statearr_26653_26697 = state_26626__$1;
(statearr_26653_26697[(1)] = (25));

} else {
var statearr_26654_26698 = state_26626__$1;
(statearr_26654_26698[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (35))){
var state_26626__$1 = state_26626;
var statearr_26655_26699 = state_26626__$1;
(statearr_26655_26699[(2)] = null);

(statearr_26655_26699[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (19))){
var inst_26583 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26583)){
var statearr_26656_26700 = state_26626__$1;
(statearr_26656_26700[(1)] = (22));

} else {
var statearr_26657_26701 = state_26626__$1;
(statearr_26657_26701[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (11))){
var inst_26554 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26658_26702 = state_26626__$1;
(statearr_26658_26702[(2)] = inst_26554);

(statearr_26658_26702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (9))){
var inst_26556 = figwheel.client.heads_up.clear.call(null);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(12),inst_26556);
} else {
if((state_val_26627 === (5))){
var inst_26547 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26626__$1 = state_26626;
var statearr_26659_26703 = state_26626__$1;
(statearr_26659_26703[(2)] = inst_26547);

(statearr_26659_26703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (14))){
var inst_26574 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26574)){
var statearr_26660_26704 = state_26626__$1;
(statearr_26660_26704[(1)] = (18));

} else {
var statearr_26661_26705 = state_26626__$1;
(statearr_26661_26705[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (26))){
var inst_26598 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26598)){
var statearr_26662_26706 = state_26626__$1;
(statearr_26662_26706[(1)] = (30));

} else {
var statearr_26663_26707 = state_26626__$1;
(statearr_26663_26707[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (16))){
var inst_26566 = (state_26626[(2)]);
var inst_26567 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26568 = figwheel.client.format_messages.call(null,inst_26567);
var inst_26569 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26570 = figwheel.client.heads_up.display_error.call(null,inst_26568,inst_26569);
var state_26626__$1 = (function (){var statearr_26664 = state_26626;
(statearr_26664[(9)] = inst_26566);

return statearr_26664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(17),inst_26570);
} else {
if((state_val_26627 === (30))){
var inst_26600 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26601 = figwheel.client.heads_up.display_warning.call(null,inst_26600);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(33),inst_26601);
} else {
if((state_val_26627 === (10))){
var inst_26560 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26665_26708 = state_26626__$1;
(statearr_26665_26708[(2)] = inst_26560);

(statearr_26665_26708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (18))){
var inst_26576 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26577 = figwheel.client.format_messages.call(null,inst_26576);
var inst_26578 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26579 = figwheel.client.heads_up.display_error.call(null,inst_26577,inst_26578);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(21),inst_26579);
} else {
if((state_val_26627 === (37))){
var inst_26609 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26666_26709 = state_26626__$1;
(statearr_26666_26709[(2)] = inst_26609);

(statearr_26666_26709[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (8))){
var inst_26552 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(11),inst_26552);
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
});})(c__21895__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21783__auto__,c__21895__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto____0 = (function (){
var statearr_26670 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26670[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto__);

(statearr_26670[(1)] = (1));

return statearr_26670;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto____1 = (function (state_26626){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_26626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e26671){if((e26671 instanceof Object)){
var ex__21787__auto__ = e26671;
var statearr_26672_26710 = state_26626;
(statearr_26672_26710[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26711 = state_26626;
state_26626 = G__26711;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto__ = function(state_26626){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto____1.call(this,state_26626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto__,msg_hist,msg_names,msg))
})();
var state__21897__auto__ = (function (){var statearr_26673 = f__21896__auto__.call(null);
(statearr_26673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto__);

return statearr_26673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto__,msg_hist,msg_names,msg))
);

return c__21895__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21895__auto___26774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___26774,ch){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___26774,ch){
return (function (state_26757){
var state_val_26758 = (state_26757[(1)]);
if((state_val_26758 === (1))){
var state_26757__$1 = state_26757;
var statearr_26759_26775 = state_26757__$1;
(statearr_26759_26775[(2)] = null);

(statearr_26759_26775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26758 === (2))){
var state_26757__$1 = state_26757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,(4),ch);
} else {
if((state_val_26758 === (3))){
var inst_26755 = (state_26757[(2)]);
var state_26757__$1 = state_26757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26757__$1,inst_26755);
} else {
if((state_val_26758 === (4))){
var inst_26745 = (state_26757[(7)]);
var inst_26745__$1 = (state_26757[(2)]);
var state_26757__$1 = (function (){var statearr_26760 = state_26757;
(statearr_26760[(7)] = inst_26745__$1);

return statearr_26760;
})();
if(cljs.core.truth_(inst_26745__$1)){
var statearr_26761_26776 = state_26757__$1;
(statearr_26761_26776[(1)] = (5));

} else {
var statearr_26762_26777 = state_26757__$1;
(statearr_26762_26777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26758 === (5))){
var inst_26745 = (state_26757[(7)]);
var inst_26747 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26745);
var state_26757__$1 = state_26757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,(8),inst_26747);
} else {
if((state_val_26758 === (6))){
var state_26757__$1 = state_26757;
var statearr_26763_26778 = state_26757__$1;
(statearr_26763_26778[(2)] = null);

(statearr_26763_26778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26758 === (7))){
var inst_26753 = (state_26757[(2)]);
var state_26757__$1 = state_26757;
var statearr_26764_26779 = state_26757__$1;
(statearr_26764_26779[(2)] = inst_26753);

(statearr_26764_26779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26758 === (8))){
var inst_26749 = (state_26757[(2)]);
var state_26757__$1 = (function (){var statearr_26765 = state_26757;
(statearr_26765[(8)] = inst_26749);

return statearr_26765;
})();
var statearr_26766_26780 = state_26757__$1;
(statearr_26766_26780[(2)] = null);

(statearr_26766_26780[(1)] = (2));


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
});})(c__21895__auto___26774,ch))
;
return ((function (switch__21783__auto__,c__21895__auto___26774,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21784__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21784__auto____0 = (function (){
var statearr_26770 = [null,null,null,null,null,null,null,null,null];
(statearr_26770[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21784__auto__);

(statearr_26770[(1)] = (1));

return statearr_26770;
});
var figwheel$client$heads_up_plugin_$_state_machine__21784__auto____1 = (function (state_26757){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_26757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e26771){if((e26771 instanceof Object)){
var ex__21787__auto__ = e26771;
var statearr_26772_26781 = state_26757;
(statearr_26772_26781[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26782 = state_26757;
state_26757 = G__26782;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21784__auto__ = function(state_26757){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21784__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21784__auto____1.call(this,state_26757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21784__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21784__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___26774,ch))
})();
var state__21897__auto__ = (function (){var statearr_26773 = f__21896__auto__.call(null);
(statearr_26773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___26774);

return statearr_26773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___26774,ch))
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
var c__21895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto__){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto__){
return (function (state_26803){
var state_val_26804 = (state_26803[(1)]);
if((state_val_26804 === (1))){
var inst_26798 = cljs.core.async.timeout.call(null,(3000));
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26803__$1,(2),inst_26798);
} else {
if((state_val_26804 === (2))){
var inst_26800 = (state_26803[(2)]);
var inst_26801 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26803__$1 = (function (){var statearr_26805 = state_26803;
(statearr_26805[(7)] = inst_26800);

return statearr_26805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26803__$1,inst_26801);
} else {
return null;
}
}
});})(c__21895__auto__))
;
return ((function (switch__21783__auto__,c__21895__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21784__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21784__auto____0 = (function (){
var statearr_26809 = [null,null,null,null,null,null,null,null];
(statearr_26809[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21784__auto__);

(statearr_26809[(1)] = (1));

return statearr_26809;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21784__auto____1 = (function (state_26803){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_26803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e26810){if((e26810 instanceof Object)){
var ex__21787__auto__ = e26810;
var statearr_26811_26813 = state_26803;
(statearr_26811_26813[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_26803;
state_26803 = G__26814;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21784__auto__ = function(state_26803){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21784__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21784__auto____1.call(this,state_26803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21784__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21784__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto__))
})();
var state__21897__auto__ = (function (){var statearr_26812 = f__21896__auto__.call(null);
(statearr_26812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto__);

return statearr_26812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto__))
);

return c__21895__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26815){
var map__26822 = p__26815;
var map__26822__$1 = ((((!((map__26822 == null)))?((((map__26822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26822):map__26822);
var ed = map__26822__$1;
var formatted_exception = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26824_26828 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26825_26829 = null;
var count__26826_26830 = (0);
var i__26827_26831 = (0);
while(true){
if((i__26827_26831 < count__26826_26830)){
var msg_26832 = cljs.core._nth.call(null,chunk__26825_26829,i__26827_26831);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26832);

var G__26833 = seq__26824_26828;
var G__26834 = chunk__26825_26829;
var G__26835 = count__26826_26830;
var G__26836 = (i__26827_26831 + (1));
seq__26824_26828 = G__26833;
chunk__26825_26829 = G__26834;
count__26826_26830 = G__26835;
i__26827_26831 = G__26836;
continue;
} else {
var temp__4425__auto___26837 = cljs.core.seq.call(null,seq__26824_26828);
if(temp__4425__auto___26837){
var seq__26824_26838__$1 = temp__4425__auto___26837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26824_26838__$1)){
var c__17644__auto___26839 = cljs.core.chunk_first.call(null,seq__26824_26838__$1);
var G__26840 = cljs.core.chunk_rest.call(null,seq__26824_26838__$1);
var G__26841 = c__17644__auto___26839;
var G__26842 = cljs.core.count.call(null,c__17644__auto___26839);
var G__26843 = (0);
seq__26824_26828 = G__26840;
chunk__26825_26829 = G__26841;
count__26826_26830 = G__26842;
i__26827_26831 = G__26843;
continue;
} else {
var msg_26844 = cljs.core.first.call(null,seq__26824_26838__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26844);

var G__26845 = cljs.core.next.call(null,seq__26824_26838__$1);
var G__26846 = null;
var G__26847 = (0);
var G__26848 = (0);
seq__26824_26828 = G__26845;
chunk__26825_26829 = G__26846;
count__26826_26830 = G__26847;
i__26827_26831 = G__26848;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26849){
var map__26852 = p__26849;
var map__26852__$1 = ((((!((map__26852 == null)))?((((map__26852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26852):map__26852);
var w = map__26852__$1;
var message = cljs.core.get.call(null,map__26852__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26860 = cljs.core.seq.call(null,plugins);
var chunk__26861 = null;
var count__26862 = (0);
var i__26863 = (0);
while(true){
if((i__26863 < count__26862)){
var vec__26864 = cljs.core._nth.call(null,chunk__26861,i__26863);
var k = cljs.core.nth.call(null,vec__26864,(0),null);
var plugin = cljs.core.nth.call(null,vec__26864,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26866 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26860,chunk__26861,count__26862,i__26863,pl_26866,vec__26864,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26866.call(null,msg_hist);
});})(seq__26860,chunk__26861,count__26862,i__26863,pl_26866,vec__26864,k,plugin))
);
} else {
}

var G__26867 = seq__26860;
var G__26868 = chunk__26861;
var G__26869 = count__26862;
var G__26870 = (i__26863 + (1));
seq__26860 = G__26867;
chunk__26861 = G__26868;
count__26862 = G__26869;
i__26863 = G__26870;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26860);
if(temp__4425__auto__){
var seq__26860__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26860__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__26860__$1);
var G__26871 = cljs.core.chunk_rest.call(null,seq__26860__$1);
var G__26872 = c__17644__auto__;
var G__26873 = cljs.core.count.call(null,c__17644__auto__);
var G__26874 = (0);
seq__26860 = G__26871;
chunk__26861 = G__26872;
count__26862 = G__26873;
i__26863 = G__26874;
continue;
} else {
var vec__26865 = cljs.core.first.call(null,seq__26860__$1);
var k = cljs.core.nth.call(null,vec__26865,(0),null);
var plugin = cljs.core.nth.call(null,vec__26865,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26875 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26860,chunk__26861,count__26862,i__26863,pl_26875,vec__26865,k,plugin,seq__26860__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26875.call(null,msg_hist);
});})(seq__26860,chunk__26861,count__26862,i__26863,pl_26875,vec__26865,k,plugin,seq__26860__$1,temp__4425__auto__))
);
} else {
}

var G__26876 = cljs.core.next.call(null,seq__26860__$1);
var G__26877 = null;
var G__26878 = (0);
var G__26879 = (0);
seq__26860 = G__26876;
chunk__26861 = G__26877;
count__26862 = G__26878;
i__26863 = G__26879;
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
var args26880 = [];
var len__17899__auto___26883 = arguments.length;
var i__17900__auto___26884 = (0);
while(true){
if((i__17900__auto___26884 < len__17899__auto___26883)){
args26880.push((arguments[i__17900__auto___26884]));

var G__26885 = (i__17900__auto___26884 + (1));
i__17900__auto___26884 = G__26885;
continue;
} else {
}
break;
}

var G__26882 = args26880.length;
switch (G__26882) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26880.length)].join('')));

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
var len__17899__auto___26891 = arguments.length;
var i__17900__auto___26892 = (0);
while(true){
if((i__17900__auto___26892 < len__17899__auto___26891)){
args__17906__auto__.push((arguments[i__17900__auto___26892]));

var G__26893 = (i__17900__auto___26892 + (1));
i__17900__auto___26892 = G__26893;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((0) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17907__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26888){
var map__26889 = p__26888;
var map__26889__$1 = ((((!((map__26889 == null)))?((((map__26889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26889):map__26889);
var opts = map__26889__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26887){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26887));
});

//# sourceMappingURL=client.js.map