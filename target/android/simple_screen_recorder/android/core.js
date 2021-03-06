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
simple_screen_recorder.android.core.open_please = (function simple_screen_recorder$android$core$open_please(){
return simple_screen_recorder.android.core.drawer_layout_and.openDrawer();
});
simple_screen_recorder.android.core.test_this = (function simple_screen_recorder$android$core$test_this(var_args){
var args22577 = [];
var len__17899__auto___22580 = arguments.length;
var i__17900__auto___22581 = (0);
while(true){
if((i__17900__auto___22581 < len__17899__auto___22580)){
args22577.push((arguments[i__17900__auto___22581]));

var G__22582 = (i__17900__auto___22581 + (1));
i__17900__auto___22581 = G__22582;
continue;
} else {
}
break;
}

var G__22579 = args22577.length;
switch (G__22579) {
case 0:
return simple_screen_recorder.android.core.test_this.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return simple_screen_recorder.android.core.test_this.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22577.length)].join('')));

}
});

simple_screen_recorder.android.core.test_this.cljs$core$IFn$_invoke$arity$0 = (function (){
return simple_screen_recorder.android.core.alert_dialog.alert("Title heress","Message goes here");
});

simple_screen_recorder.android.core.test_this.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return simple_screen_recorder.android.core.alert_dialog.alert("Title heress",msg);
});

simple_screen_recorder.android.core.test_this.cljs$lang$maxFixedArity = 1;
simple_screen_recorder.android.core.navigation_view = (function simple_screen_recorder$android$core$navigation_view(){
var menu_view = reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#1E750E"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null)], null),"Test Drawer WOOOOOOOOOO HSHSHSHHSSNSN"], null)], null));
return ((function (menu_view){
return (function (){
return menu_view;
});
;})(menu_view))
});
simple_screen_recorder.android.core.header_view = (function simple_screen_recorder$android$core$header_view(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FFB700",new cljs.core.Keyword(null,"alignSelf","alignSelf",-1666557725),"stretch",new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"space-between",new cljs.core.Keyword(null,"borderBottomWidth","borderBottomWidth",208308982),0.5,new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),"#594626"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.touch_opacity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPress","onPress",-1383694171),(function (){
return simple_screen_recorder.android.core.test_this.call(null,"Jsnhs");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"bars",new cljs.core.Keyword(null,"size","size",1098693007),(15),new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#FFF"], null)], null)], null).call(null);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(15)], null)], null),"Simple Screen Recorders"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"ellipsis-v",new cljs.core.Keyword(null,"size","size",1098693007),(15),new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)], null)], null)], null);
});
simple_screen_recorder.android.core.drawer_comp = (function simple_screen_recorder$android$core$drawer_comp(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.drawer_layout_and,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drawerWidth","drawerWidth",1835978943),(160),new cljs.core.Keyword(null,"drawerPosition","drawerPosition",-776605037),React.DrawerLayoutAndroid.positions.Left,new cljs.core.Keyword(null,"renderNavigationView","renderNavigationView",1309782076),simple_screen_recorder.android.core.navigation_view.call(null)], null)], null);
});
simple_screen_recorder.android.core.tt = (function simple_screen_recorder$android$core$tt(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.header_view,this$], null);
});
simple_screen_recorder.android.core.drawer = cljs.core.with_meta.call(null,simple_screen_recorder.android.core.drawer_comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return null;
})], null));
simple_screen_recorder.android.core.drawer_mounted = (function simple_screen_recorder$android$core$drawer_mounted(this$){
var this_comp = reagent.core.current_component.call(null);
return simple_screen_recorder.android.core.alert_dialog.alert("title here",[cljs.core.str(React.findNodeHandle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["drawerlayout",null], null), null))))].join(''));
});
simple_screen_recorder.android.core.wrapped_drawer = (function simple_screen_recorder$android$core$wrapped_drawer(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),simple_screen_recorder.android.core.drawer_mounted,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),simple_screen_recorder.android.core.drawer_comp], null));
});
simple_screen_recorder.android.core.app_root = (function simple_screen_recorder$android$core$app_root(){
var greeting = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-greeting","get-greeting",-320717747)], null));
return ((function (greeting){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_screen_recorder.android.core.wrapped_drawer], null);
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