// Compiled by ClojureScript 1.7.170 {}
goog.provide('simple_screen_recorder.android.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('simple_screen_recorder.handlers');
goog.require('simple_screen_recorder.subs');
React = require("react-native/Libraries/react-native/react-native.js");
simple_screen_recorder.android.core.icon = reagent.core.adapt_react_class.call(null,require("react-native-vector-icons/FontAwesome"));
simple_screen_recorder.android.core.app_registry = React.AppRegistry;
simple_screen_recorder.android.core.text = reagent.core.adapt_react_class.call(null,React.Text);
simple_screen_recorder.android.core.view = reagent.core.adapt_react_class.call(null,React.View);
simple_screen_recorder.android.core.image = reagent.core.adapt_react_class.call(null,React.Image);
simple_screen_recorder.android.core.touchable_highlight = reagent.core.adapt_react_class.call(null,React.TouchableHighlight);
simple_screen_recorder.android.core.stylesheet = reagent.core.adapt_react_class.call(null,React.StyleSheet);
simple_screen_recorder.android.core.logo_img = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://10.0.3.2:8081/./images/cljs.png"], null);
simple_screen_recorder.android.core.drawer_layout_object = React.DrawerLayoutAndroid;
simple_screen_recorder.android.core.drawer_layout_and = reagent.core.adapt_react_class.call(null,simple_screen_recorder.android.core.drawer_layout_object);
simple_screen_recorder.android.core.drawer_left = simple_screen_recorder.android.core.drawer_layout_object.positions;
simple_screen_recorder.android.core.nav_view = (function simple_screen_recorder$android$core$nav_view(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FFF"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(10),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null)], null),"Test Drawer"], null)], null);
});
});
simple_screen_recorder.android.core.drawer_menu = (function simple_screen_recorder$android$core$drawer_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.drawer_layout_and,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drawerWidth","drawerWidth",1835978943),(300),new cljs.core.Keyword(null,"drawerPosition","drawerPosition",-776605037),simple_screen_recorder.android.core.drawer_left.Left,new cljs.core.Keyword(null,"renderNavigationView","renderNavigationView",1309782076),simple_screen_recorder.android.core.nav_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(15),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right"], null)], null),"Hello"], null)], null)], null);
});
simple_screen_recorder.android.core.header_view = (function simple_screen_recorder$android$core$header_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FFB700",new cljs.core.Keyword(null,"alignSelf","alignSelf",-1666557725),"stretch",new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"space-between",new cljs.core.Keyword(null,"borderBottomWidth","borderBottomWidth",208308982),0.5,new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),"#594626"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"bars",new cljs.core.Keyword(null,"size","size",1098693007),(15),new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(15)], null)], null),"Simple Screen Recorder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"ellipsis-v",new cljs.core.Keyword(null,"size","size",1098693007),(15),new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)], null)], null)], null);
});
simple_screen_recorder.android.core.widget = (function simple_screen_recorder$android$core$widget(){
var greeting = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-greeting","get-greeting",-320717747)], null));
return ((function (greeting){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FFF",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.header_view], null)], null);
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