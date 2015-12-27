// Compiled by ClojureScript 1.7.170 {}
goog.provide('simple_screen_recorder.ios.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('simple_screen_recorder.handlers');
goog.require('simple_screen_recorder.subs');
React = require("react-native/Libraries/react-native/react-native.js");
simple_screen_recorder.ios.core.app_registry = React.AppRegistry;
simple_screen_recorder.ios.core.text = reagent.core.adapt_react_class.call(null,React.Text);
simple_screen_recorder.ios.core.view = reagent.core.adapt_react_class.call(null,React.View);
simple_screen_recorder.ios.core.image = reagent.core.adapt_react_class.call(null,React.Image);
simple_screen_recorder.ios.core.touchable_highlight = reagent.core.adapt_react_class.call(null,React.TouchableHighlight);
simple_screen_recorder.ios.core.logo_img = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://10.0.3.2:8081/./images/cljs.png"], null);
simple_screen_recorder.ios.core.widget = (function simple_screen_recorder$ios$core$widget(){
var greeting = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-greeting","get-greeting",-320717747)], null));
return ((function (greeting){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.ios.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.ios.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(30),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"100",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(20),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null)], null),cljs.core.deref.call(null,greeting)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.ios.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),simple_screen_recorder.ios.core.logo_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(30)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.ios.core.touchable_highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#999",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.ios.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null),"press me"], null)], null)], null);
});
;})(greeting))
});
simple_screen_recorder.ios.core.mount_root = (function simple_screen_recorder$ios$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.ios.core.widget], null),(1));
});
simple_screen_recorder.ios.core.init = (function simple_screen_recorder$ios$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return simple_screen_recorder.ios.core.app_registry.registerRunnable("SimpleScreenRecorder",(function (){
return simple_screen_recorder.ios.core.mount_root.call(null);
}));
});
goog.exportSymbol('simple_screen_recorder.ios.core.init', simple_screen_recorder.ios.core.init);

//# sourceMappingURL=core.js.map