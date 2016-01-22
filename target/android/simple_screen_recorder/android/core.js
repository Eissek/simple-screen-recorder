// Compiled by ClojureScript 1.7.170 {}
goog.provide('simple_screen_recorder.android.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('simple_screen_recorder.handlers');
goog.require('simple_screen_recorder.subs');
React = require("react-native");
simple_screen_recorder.android.core.icon = reagent.core.adapt_react_class.call(null,require("react-native-vector-icons/FontAwesome"));
simple_screen_recorder.android.core.app_registry = React.AppRegistry;
simple_screen_recorder.android.core.text = reagent.core.adapt_react_class.call(null,React.Text);
simple_screen_recorder.android.core.view = reagent.core.adapt_react_class.call(null,React.View);
simple_screen_recorder.android.core.image = reagent.core.adapt_react_class.call(null,React.Image);
simple_screen_recorder.android.core.touchable_highlight = reagent.core.adapt_react_class.call(null,React.TouchableHighlight);
simple_screen_recorder.android.core.stylesheet = reagent.core.adapt_react_class.call(null,React.StyleSheet);
simple_screen_recorder.android.core.drawer_layout_object = React.DrawerLayoutAndroid;
simple_screen_recorder.android.core.drawer_layout_and = reagent.core.adapt_react_class.call(null,simple_screen_recorder.android.core.drawer_layout_object);
simple_screen_recorder.android.core.drawer_left = simple_screen_recorder.android.core.drawer_layout_object.positions;
simple_screen_recorder.android.core.touch_opacity = reagent.core.adapt_react_class.call(null,React.TouchableOpacity);
simple_screen_recorder.android.core.alert_dialog = React.Alert;
simple_screen_recorder.android.core.the_view = (function simple_screen_recorder$android$core$the_view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"the-view",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#1E750E"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null)], null),"Test Drawer WOOOOOOOOOO HSHSHSHHSSNSN"], null)], null);
})], null));
});
simple_screen_recorder.android.core.test_view = (function simple_screen_recorder$android$core$test_view(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FFFFFF"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null)], null),"Test Drawer WOOOOOOOOOO HSHSHSHHSSNSN"], null)], null);
});
});
simple_screen_recorder.android.core.a_nav_view = (function simple_screen_recorder$android$core$a_nav_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FFFFFF"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null)], null),"Test Drawer WOOOOOOOOOO HSHSHSHHSSNSN"], null)], null);
});
simple_screen_recorder.android.core.test_view2 = (function simple_screen_recorder$android$core$test_view2(){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#1E750E"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null)], null),"Test Drawer WOOOOOOOOOO HSHSHSHHSSNSN"], null)], null));
});
simple_screen_recorder.android.core.view3 = (function simple_screen_recorder$android$core$view3(){
var menu_view = reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#1E750E"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null)], null),"Test Drawer WOOOOOOOOOO HSHSHSHHSSNSN"], null)], null));
return ((function (menu_view){
return (function (){
return menu_view;
});
;})(menu_view))
});
simple_screen_recorder.android.core.side_view = cljs.core.with_meta.call(null,simple_screen_recorder.android.core.a_nav_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (this$){
return this$.call(null);
})], null));
simple_screen_recorder.android.core.app_root = (function simple_screen_recorder$android$core$app_root(){
var greeting = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-greeting","get-greeting",-320717747)], null));
return ((function (greeting){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.drawer_layout_and,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drawerWidth","drawerWidth",1835978943),(300),new cljs.core.Keyword(null,"drawerPosition","drawerPosition",-776605037),React.DrawerLayoutAndroid.positions.Left,new cljs.core.Keyword(null,"renderNavigationView","renderNavigationView",1309782076),simple_screen_recorder.android.core.view3.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(24),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null)], null),"Hello World"], null)], null)], null);
});
;})(greeting))
});
simple_screen_recorder.android.core.init = (function simple_screen_recorder$android$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return simple_screen_recorder.android.core.app_registry.registerComponent("SimpleScreenRecorder",(function (){
return reagent.core.reactify_component.call(null,simple_screen_recorder.android.core.app_root);
}));
});

//# sourceMappingURL=core.js.map