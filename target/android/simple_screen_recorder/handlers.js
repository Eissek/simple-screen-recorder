// Compiled by ClojureScript 1.7.170 {}
goog.provide('simple_screen_recorder.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('schema.core');
goog.require('simple_screen_recorder.db');
/**
 * throw an exception if db doesn't match the schema.
 */
simple_screen_recorder.handlers.check_and_throw = (function simple_screen_recorder$handlers$check_and_throw(a_schema,db){
var temp__4423__auto__ = schema.core.check.call(null,a_schema,db);
if(cljs.core.truth_(temp__4423__auto__)){
var problems = temp__4423__auto__;
throw (new Error([cljs.core.str("schema check failed: "),cljs.core.str(problems)].join('')));
} else {
return null;
}
});
simple_screen_recorder.handlers.validate_schema_mw = re_frame.core.after.call(null,cljs.core.partial.call(null,simple_screen_recorder.handlers.check_and_throw,simple_screen_recorder.db.schema));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),simple_screen_recorder.handlers.validate_schema_mw,(function (_,___$1){
return simple_screen_recorder.db.app_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-greeting","set-greeting",-653540063),simple_screen_recorder.handlers.validate_schema_mw,(function (db,p__12566){
var vec__12567 = p__12566;
var _ = cljs.core.nth.call(null,vec__12567,(0),null);
var value = cljs.core.nth.call(null,vec__12567,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"greeting","greeting",462222107),value);
}));
