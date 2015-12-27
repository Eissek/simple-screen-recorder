// Compiled by ClojureScript 1.7.170 {}
goog.provide('simple_screen_recorder.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-greeting","get-greeting",-320717747),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"greeting","greeting",462222107));
}));
}));

//# sourceMappingURL=subs.js.map