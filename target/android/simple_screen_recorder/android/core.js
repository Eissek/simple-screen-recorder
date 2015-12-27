// Compiled by ClojureScript 1.7.170 {}
goog.provide('simple_screen_recorder.android.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('simple_screen_recorder.handlers');
goog.require('simple_screen_recorder.subs');
React = require("react-native/Libraries/react-native/react-native.js");
simple_screen_recorder.android.core.app_registry = React.AppRegistry;
simple_screen_recorder.android.core.text = reagent.core.adapt_react_class.call(null,React.Text);
simple_screen_recorder.android.core.view = reagent.core.adapt_react_class.call(null,React.View);
simple_screen_recorder.android.core.image = reagent.core.adapt_react_class.call(null,React.Image);
simple_screen_recorder.android.core.touchable_highlight = reagent.core.adapt_react_class.call(null,React.TouchableHighlight);
simple_screen_recorder.android.core.toolbar_android = reagent.core.adapt_react_class.call(null,React.ToolbarAndroid);
simple_screen_recorder.android.core.logo_img = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://10.0.3.2:8081/./images/cljs.png"], null);
simple_screen_recorder.android.core.widget = (function simple_screen_recorder$android$core$widget(){
var greeting = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-greeting","get-greeting",-320717747)], null));
return ((function (greeting){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FFF",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.toolbar_android,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"HEY man",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#000",new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"width","width",-384071477),(300)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"hey",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null)], null)], null);
});
;})(greeting))
});
simple_screen_recorder.android.core.mount_root = (function simple_screen_recorder$android$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.widget], null),(1));
});
simple_screen_recorder.android.core.init = (function simple_screen_recorder$android$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return simple_screen_recorder.android.core.app_registry.registerRunnable("SimpleScreenRecorder",(function (){
return simple_screen_recorder.android.core.mount_root.call(null);
}));
});
goog.exportSymbol('simple_screen_recorder.android.core.init', simple_screen_recorder.android.core.init);

//# sourceMappingURL=core.js.map