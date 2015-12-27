// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16841__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16841__auto__){
return or__16841__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16841__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23631_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23631_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23636 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23637 = null;
var count__23638 = (0);
var i__23639 = (0);
while(true){
if((i__23639 < count__23638)){
var n = cljs.core._nth.call(null,chunk__23637,i__23639);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23640 = seq__23636;
var G__23641 = chunk__23637;
var G__23642 = count__23638;
var G__23643 = (i__23639 + (1));
seq__23636 = G__23640;
chunk__23637 = G__23641;
count__23638 = G__23642;
i__23639 = G__23643;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23636);
if(temp__4425__auto__){
var seq__23636__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23636__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__23636__$1);
var G__23644 = cljs.core.chunk_rest.call(null,seq__23636__$1);
var G__23645 = c__17644__auto__;
var G__23646 = cljs.core.count.call(null,c__17644__auto__);
var G__23647 = (0);
seq__23636 = G__23644;
chunk__23637 = G__23645;
count__23638 = G__23646;
i__23639 = G__23647;
continue;
} else {
var n = cljs.core.first.call(null,seq__23636__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23648 = cljs.core.next.call(null,seq__23636__$1);
var G__23649 = null;
var G__23650 = (0);
var G__23651 = (0);
seq__23636 = G__23648;
chunk__23637 = G__23649;
count__23638 = G__23650;
i__23639 = G__23651;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23690_23697 = cljs.core.seq.call(null,deps);
var chunk__23691_23698 = null;
var count__23692_23699 = (0);
var i__23693_23700 = (0);
while(true){
if((i__23693_23700 < count__23692_23699)){
var dep_23701 = cljs.core._nth.call(null,chunk__23691_23698,i__23693_23700);
topo_sort_helper_STAR_.call(null,dep_23701,(depth + (1)),state);

var G__23702 = seq__23690_23697;
var G__23703 = chunk__23691_23698;
var G__23704 = count__23692_23699;
var G__23705 = (i__23693_23700 + (1));
seq__23690_23697 = G__23702;
chunk__23691_23698 = G__23703;
count__23692_23699 = G__23704;
i__23693_23700 = G__23705;
continue;
} else {
var temp__4425__auto___23706 = cljs.core.seq.call(null,seq__23690_23697);
if(temp__4425__auto___23706){
var seq__23690_23707__$1 = temp__4425__auto___23706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23690_23707__$1)){
var c__17644__auto___23708 = cljs.core.chunk_first.call(null,seq__23690_23707__$1);
var G__23709 = cljs.core.chunk_rest.call(null,seq__23690_23707__$1);
var G__23710 = c__17644__auto___23708;
var G__23711 = cljs.core.count.call(null,c__17644__auto___23708);
var G__23712 = (0);
seq__23690_23697 = G__23709;
chunk__23691_23698 = G__23710;
count__23692_23699 = G__23711;
i__23693_23700 = G__23712;
continue;
} else {
var dep_23713 = cljs.core.first.call(null,seq__23690_23707__$1);
topo_sort_helper_STAR_.call(null,dep_23713,(depth + (1)),state);

var G__23714 = cljs.core.next.call(null,seq__23690_23707__$1);
var G__23715 = null;
var G__23716 = (0);
var G__23717 = (0);
seq__23690_23697 = G__23714;
chunk__23691_23698 = G__23715;
count__23692_23699 = G__23716;
i__23693_23700 = G__23717;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23694){
var vec__23696 = p__23694;
var x = cljs.core.nth.call(null,vec__23696,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23696,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23696,x,xs,get_deps__$1){
return (function (p1__23652_SHARP_){
return clojure.set.difference.call(null,p1__23652_SHARP_,x);
});})(vec__23696,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23730 = cljs.core.seq.call(null,provides);
var chunk__23731 = null;
var count__23732 = (0);
var i__23733 = (0);
while(true){
if((i__23733 < count__23732)){
var prov = cljs.core._nth.call(null,chunk__23731,i__23733);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23734_23742 = cljs.core.seq.call(null,requires);
var chunk__23735_23743 = null;
var count__23736_23744 = (0);
var i__23737_23745 = (0);
while(true){
if((i__23737_23745 < count__23736_23744)){
var req_23746 = cljs.core._nth.call(null,chunk__23735_23743,i__23737_23745);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23746,prov);

var G__23747 = seq__23734_23742;
var G__23748 = chunk__23735_23743;
var G__23749 = count__23736_23744;
var G__23750 = (i__23737_23745 + (1));
seq__23734_23742 = G__23747;
chunk__23735_23743 = G__23748;
count__23736_23744 = G__23749;
i__23737_23745 = G__23750;
continue;
} else {
var temp__4425__auto___23751 = cljs.core.seq.call(null,seq__23734_23742);
if(temp__4425__auto___23751){
var seq__23734_23752__$1 = temp__4425__auto___23751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23734_23752__$1)){
var c__17644__auto___23753 = cljs.core.chunk_first.call(null,seq__23734_23752__$1);
var G__23754 = cljs.core.chunk_rest.call(null,seq__23734_23752__$1);
var G__23755 = c__17644__auto___23753;
var G__23756 = cljs.core.count.call(null,c__17644__auto___23753);
var G__23757 = (0);
seq__23734_23742 = G__23754;
chunk__23735_23743 = G__23755;
count__23736_23744 = G__23756;
i__23737_23745 = G__23757;
continue;
} else {
var req_23758 = cljs.core.first.call(null,seq__23734_23752__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23758,prov);

var G__23759 = cljs.core.next.call(null,seq__23734_23752__$1);
var G__23760 = null;
var G__23761 = (0);
var G__23762 = (0);
seq__23734_23742 = G__23759;
chunk__23735_23743 = G__23760;
count__23736_23744 = G__23761;
i__23737_23745 = G__23762;
continue;
}
} else {
}
}
break;
}

var G__23763 = seq__23730;
var G__23764 = chunk__23731;
var G__23765 = count__23732;
var G__23766 = (i__23733 + (1));
seq__23730 = G__23763;
chunk__23731 = G__23764;
count__23732 = G__23765;
i__23733 = G__23766;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23730);
if(temp__4425__auto__){
var seq__23730__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23730__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__23730__$1);
var G__23767 = cljs.core.chunk_rest.call(null,seq__23730__$1);
var G__23768 = c__17644__auto__;
var G__23769 = cljs.core.count.call(null,c__17644__auto__);
var G__23770 = (0);
seq__23730 = G__23767;
chunk__23731 = G__23768;
count__23732 = G__23769;
i__23733 = G__23770;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23730__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23738_23771 = cljs.core.seq.call(null,requires);
var chunk__23739_23772 = null;
var count__23740_23773 = (0);
var i__23741_23774 = (0);
while(true){
if((i__23741_23774 < count__23740_23773)){
var req_23775 = cljs.core._nth.call(null,chunk__23739_23772,i__23741_23774);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23775,prov);

var G__23776 = seq__23738_23771;
var G__23777 = chunk__23739_23772;
var G__23778 = count__23740_23773;
var G__23779 = (i__23741_23774 + (1));
seq__23738_23771 = G__23776;
chunk__23739_23772 = G__23777;
count__23740_23773 = G__23778;
i__23741_23774 = G__23779;
continue;
} else {
var temp__4425__auto___23780__$1 = cljs.core.seq.call(null,seq__23738_23771);
if(temp__4425__auto___23780__$1){
var seq__23738_23781__$1 = temp__4425__auto___23780__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23738_23781__$1)){
var c__17644__auto___23782 = cljs.core.chunk_first.call(null,seq__23738_23781__$1);
var G__23783 = cljs.core.chunk_rest.call(null,seq__23738_23781__$1);
var G__23784 = c__17644__auto___23782;
var G__23785 = cljs.core.count.call(null,c__17644__auto___23782);
var G__23786 = (0);
seq__23738_23771 = G__23783;
chunk__23739_23772 = G__23784;
count__23740_23773 = G__23785;
i__23741_23774 = G__23786;
continue;
} else {
var req_23787 = cljs.core.first.call(null,seq__23738_23781__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23787,prov);

var G__23788 = cljs.core.next.call(null,seq__23738_23781__$1);
var G__23789 = null;
var G__23790 = (0);
var G__23791 = (0);
seq__23738_23771 = G__23788;
chunk__23739_23772 = G__23789;
count__23740_23773 = G__23790;
i__23741_23774 = G__23791;
continue;
}
} else {
}
}
break;
}

var G__23792 = cljs.core.next.call(null,seq__23730__$1);
var G__23793 = null;
var G__23794 = (0);
var G__23795 = (0);
seq__23730 = G__23792;
chunk__23731 = G__23793;
count__23732 = G__23794;
i__23733 = G__23795;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23800_23804 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23801_23805 = null;
var count__23802_23806 = (0);
var i__23803_23807 = (0);
while(true){
if((i__23803_23807 < count__23802_23806)){
var ns_23808 = cljs.core._nth.call(null,chunk__23801_23805,i__23803_23807);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23808);

var G__23809 = seq__23800_23804;
var G__23810 = chunk__23801_23805;
var G__23811 = count__23802_23806;
var G__23812 = (i__23803_23807 + (1));
seq__23800_23804 = G__23809;
chunk__23801_23805 = G__23810;
count__23802_23806 = G__23811;
i__23803_23807 = G__23812;
continue;
} else {
var temp__4425__auto___23813 = cljs.core.seq.call(null,seq__23800_23804);
if(temp__4425__auto___23813){
var seq__23800_23814__$1 = temp__4425__auto___23813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23800_23814__$1)){
var c__17644__auto___23815 = cljs.core.chunk_first.call(null,seq__23800_23814__$1);
var G__23816 = cljs.core.chunk_rest.call(null,seq__23800_23814__$1);
var G__23817 = c__17644__auto___23815;
var G__23818 = cljs.core.count.call(null,c__17644__auto___23815);
var G__23819 = (0);
seq__23800_23804 = G__23816;
chunk__23801_23805 = G__23817;
count__23802_23806 = G__23818;
i__23803_23807 = G__23819;
continue;
} else {
var ns_23820 = cljs.core.first.call(null,seq__23800_23814__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23820);

var G__23821 = cljs.core.next.call(null,seq__23800_23814__$1);
var G__23822 = null;
var G__23823 = (0);
var G__23824 = (0);
seq__23800_23804 = G__23821;
chunk__23801_23805 = G__23822;
count__23802_23806 = G__23823;
i__23803_23807 = G__23824;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16841__auto__ = goog.require__;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23825__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23826__i = 0, G__23826__a = new Array(arguments.length -  0);
while (G__23826__i < G__23826__a.length) {G__23826__a[G__23826__i] = arguments[G__23826__i + 0]; ++G__23826__i;}
  args = new cljs.core.IndexedSeq(G__23826__a,0);
} 
return G__23825__delegate.call(this,args);};
G__23825.cljs$lang$maxFixedArity = 0;
G__23825.cljs$lang$applyTo = (function (arglist__23827){
var args = cljs.core.seq(arglist__23827);
return G__23825__delegate(args);
});
G__23825.cljs$core$IFn$_invoke$arity$variadic = G__23825__delegate;
return G__23825;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23829 = cljs.core._EQ_;
var expr__23830 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23829.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23830))){
var path_parts = ((function (pred__23829,expr__23830){
return (function (p1__23828_SHARP_){
return clojure.string.split.call(null,p1__23828_SHARP_,/[\/\\]/);
});})(pred__23829,expr__23830))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23829,expr__23830){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23832){if((e23832 instanceof Error)){
var e = e23832;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23832;

}
}})());
});
;})(path_parts,sep,root,pred__23829,expr__23830))
} else {
if(cljs.core.truth_(pred__23829.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23830))){
return ((function (pred__23829,expr__23830){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23829,expr__23830){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23829,expr__23830))
);

return deferred.addErrback(((function (deferred,pred__23829,expr__23830){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23829,expr__23830))
);
});
;})(pred__23829,expr__23830))
} else {
return ((function (pred__23829,expr__23830){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23829,expr__23830))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23833,callback){
var map__23836 = p__23833;
var map__23836__$1 = ((((!((map__23836 == null)))?((((map__23836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23836):map__23836);
var file_msg = map__23836__$1;
var request_url = cljs.core.get.call(null,map__23836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23836,map__23836__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23836,map__23836__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto__){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto__){
return (function (state_23860){
var state_val_23861 = (state_23860[(1)]);
if((state_val_23861 === (7))){
var inst_23856 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23862_23882 = state_23860__$1;
(statearr_23862_23882[(2)] = inst_23856);

(statearr_23862_23882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (1))){
var state_23860__$1 = state_23860;
var statearr_23863_23883 = state_23860__$1;
(statearr_23863_23883[(2)] = null);

(statearr_23863_23883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (4))){
var inst_23840 = (state_23860[(7)]);
var inst_23840__$1 = (state_23860[(2)]);
var state_23860__$1 = (function (){var statearr_23864 = state_23860;
(statearr_23864[(7)] = inst_23840__$1);

return statearr_23864;
})();
if(cljs.core.truth_(inst_23840__$1)){
var statearr_23865_23884 = state_23860__$1;
(statearr_23865_23884[(1)] = (5));

} else {
var statearr_23866_23885 = state_23860__$1;
(statearr_23866_23885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (6))){
var state_23860__$1 = state_23860;
var statearr_23867_23886 = state_23860__$1;
(statearr_23867_23886[(2)] = null);

(statearr_23867_23886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (3))){
var inst_23858 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23860__$1,inst_23858);
} else {
if((state_val_23861 === (2))){
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23861 === (11))){
var inst_23852 = (state_23860[(2)]);
var state_23860__$1 = (function (){var statearr_23868 = state_23860;
(statearr_23868[(8)] = inst_23852);

return statearr_23868;
})();
var statearr_23869_23887 = state_23860__$1;
(statearr_23869_23887[(2)] = null);

(statearr_23869_23887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (9))){
var inst_23846 = (state_23860[(9)]);
var inst_23844 = (state_23860[(10)]);
var inst_23848 = inst_23846.call(null,inst_23844);
var state_23860__$1 = state_23860;
var statearr_23870_23888 = state_23860__$1;
(statearr_23870_23888[(2)] = inst_23848);

(statearr_23870_23888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (5))){
var inst_23840 = (state_23860[(7)]);
var inst_23842 = figwheel.client.file_reloading.blocking_load.call(null,inst_23840);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(8),inst_23842);
} else {
if((state_val_23861 === (10))){
var inst_23844 = (state_23860[(10)]);
var inst_23850 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23844);
var state_23860__$1 = state_23860;
var statearr_23871_23889 = state_23860__$1;
(statearr_23871_23889[(2)] = inst_23850);

(statearr_23871_23889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (8))){
var inst_23840 = (state_23860[(7)]);
var inst_23846 = (state_23860[(9)]);
var inst_23844 = (state_23860[(2)]);
var inst_23845 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23846__$1 = cljs.core.get.call(null,inst_23845,inst_23840);
var state_23860__$1 = (function (){var statearr_23872 = state_23860;
(statearr_23872[(9)] = inst_23846__$1);

(statearr_23872[(10)] = inst_23844);

return statearr_23872;
})();
if(cljs.core.truth_(inst_23846__$1)){
var statearr_23873_23890 = state_23860__$1;
(statearr_23873_23890[(1)] = (9));

} else {
var statearr_23874_23891 = state_23860__$1;
(statearr_23874_23891[(1)] = (10));

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
});})(c__20798__auto__))
;
return ((function (switch__20686__auto__,c__20798__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20687__auto__ = null;
var figwheel$client$file_reloading$state_machine__20687__auto____0 = (function (){
var statearr_23878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23878[(0)] = figwheel$client$file_reloading$state_machine__20687__auto__);

(statearr_23878[(1)] = (1));

return statearr_23878;
});
var figwheel$client$file_reloading$state_machine__20687__auto____1 = (function (state_23860){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_23860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e23879){if((e23879 instanceof Object)){
var ex__20690__auto__ = e23879;
var statearr_23880_23892 = state_23860;
(statearr_23880_23892[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23893 = state_23860;
state_23860 = G__23893;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20687__auto__ = function(state_23860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20687__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20687__auto____1.call(this,state_23860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20687__auto____0;
figwheel$client$file_reloading$state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20687__auto____1;
return figwheel$client$file_reloading$state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto__))
})();
var state__20800__auto__ = (function (){var statearr_23881 = f__20799__auto__.call(null);
(statearr_23881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto__);

return statearr_23881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto__))
);

return c__20798__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23894,callback){
var map__23897 = p__23894;
var map__23897__$1 = ((((!((map__23897 == null)))?((((map__23897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23897):map__23897);
var file_msg = map__23897__$1;
var namespace = cljs.core.get.call(null,map__23897__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23897,map__23897__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23897,map__23897__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23899){
var map__23902 = p__23899;
var map__23902__$1 = ((((!((map__23902 == null)))?((((map__23902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23902):map__23902);
var file_msg = map__23902__$1;
var namespace = cljs.core.get.call(null,map__23902__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16829__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16829__auto__){
var or__16841__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
var or__16841__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16841__auto____$1)){
return or__16841__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16829__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23904,callback){
var map__23907 = p__23904;
var map__23907__$1 = ((((!((map__23907 == null)))?((((map__23907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23907):map__23907);
var file_msg = map__23907__$1;
var request_url = cljs.core.get.call(null,map__23907__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23907__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20798__auto___23995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto___23995,out){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto___23995,out){
return (function (state_23977){
var state_val_23978 = (state_23977[(1)]);
if((state_val_23978 === (1))){
var inst_23955 = cljs.core.nth.call(null,files,(0),null);
var inst_23956 = cljs.core.nthnext.call(null,files,(1));
var inst_23957 = files;
var state_23977__$1 = (function (){var statearr_23979 = state_23977;
(statearr_23979[(7)] = inst_23957);

(statearr_23979[(8)] = inst_23956);

(statearr_23979[(9)] = inst_23955);

return statearr_23979;
})();
var statearr_23980_23996 = state_23977__$1;
(statearr_23980_23996[(2)] = null);

(statearr_23980_23996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23978 === (2))){
var inst_23957 = (state_23977[(7)]);
var inst_23960 = (state_23977[(10)]);
var inst_23960__$1 = cljs.core.nth.call(null,inst_23957,(0),null);
var inst_23961 = cljs.core.nthnext.call(null,inst_23957,(1));
var inst_23962 = (inst_23960__$1 == null);
var inst_23963 = cljs.core.not.call(null,inst_23962);
var state_23977__$1 = (function (){var statearr_23981 = state_23977;
(statearr_23981[(10)] = inst_23960__$1);

(statearr_23981[(11)] = inst_23961);

return statearr_23981;
})();
if(inst_23963){
var statearr_23982_23997 = state_23977__$1;
(statearr_23982_23997[(1)] = (4));

} else {
var statearr_23983_23998 = state_23977__$1;
(statearr_23983_23998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23978 === (3))){
var inst_23975 = (state_23977[(2)]);
var state_23977__$1 = state_23977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23977__$1,inst_23975);
} else {
if((state_val_23978 === (4))){
var inst_23960 = (state_23977[(10)]);
var inst_23965 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23960);
var state_23977__$1 = state_23977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23977__$1,(7),inst_23965);
} else {
if((state_val_23978 === (5))){
var inst_23971 = cljs.core.async.close_BANG_.call(null,out);
var state_23977__$1 = state_23977;
var statearr_23984_23999 = state_23977__$1;
(statearr_23984_23999[(2)] = inst_23971);

(statearr_23984_23999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23978 === (6))){
var inst_23973 = (state_23977[(2)]);
var state_23977__$1 = state_23977;
var statearr_23985_24000 = state_23977__$1;
(statearr_23985_24000[(2)] = inst_23973);

(statearr_23985_24000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23978 === (7))){
var inst_23961 = (state_23977[(11)]);
var inst_23967 = (state_23977[(2)]);
var inst_23968 = cljs.core.async.put_BANG_.call(null,out,inst_23967);
var inst_23957 = inst_23961;
var state_23977__$1 = (function (){var statearr_23986 = state_23977;
(statearr_23986[(7)] = inst_23957);

(statearr_23986[(12)] = inst_23968);

return statearr_23986;
})();
var statearr_23987_24001 = state_23977__$1;
(statearr_23987_24001[(2)] = null);

(statearr_23987_24001[(1)] = (2));


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
});})(c__20798__auto___23995,out))
;
return ((function (switch__20686__auto__,c__20798__auto___23995,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto____0 = (function (){
var statearr_23991 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23991[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto__);

(statearr_23991[(1)] = (1));

return statearr_23991;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto____1 = (function (state_23977){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_23977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e23992){if((e23992 instanceof Object)){
var ex__20690__auto__ = e23992;
var statearr_23993_24002 = state_23977;
(statearr_23993_24002[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24003 = state_23977;
state_23977 = G__24003;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto__ = function(state_23977){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto____1.call(this,state_23977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto___23995,out))
})();
var state__20800__auto__ = (function (){var statearr_23994 = f__20799__auto__.call(null);
(statearr_23994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto___23995);

return statearr_23994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto___23995,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24004,opts){
var map__24008 = p__24004;
var map__24008__$1 = ((((!((map__24008 == null)))?((((map__24008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24008):map__24008);
var eval_body__$1 = cljs.core.get.call(null,map__24008__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24008__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16829__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16829__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16829__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24010){var e = e24010;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24011_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24011_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24016){
var vec__24017 = p__24016;
var k = cljs.core.nth.call(null,vec__24017,(0),null);
var v = cljs.core.nth.call(null,vec__24017,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24018){
var vec__24019 = p__24018;
var k = cljs.core.nth.call(null,vec__24019,(0),null);
var v = cljs.core.nth.call(null,vec__24019,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24023,p__24024){
var map__24271 = p__24023;
var map__24271__$1 = ((((!((map__24271 == null)))?((((map__24271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24271):map__24271);
var opts = map__24271__$1;
var before_jsload = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24272 = p__24024;
var map__24272__$1 = ((((!((map__24272 == null)))?((((map__24272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24272):map__24272);
var msg = map__24272__$1;
var files = cljs.core.get.call(null,map__24272__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24272__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24272__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20799__auto__ = (function (){var switch__20686__auto__ = ((function (c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24425){
var state_val_24426 = (state_24425[(1)]);
if((state_val_24426 === (7))){
var inst_24289 = (state_24425[(7)]);
var inst_24286 = (state_24425[(8)]);
var inst_24288 = (state_24425[(9)]);
var inst_24287 = (state_24425[(10)]);
var inst_24294 = cljs.core._nth.call(null,inst_24287,inst_24289);
var inst_24295 = figwheel.client.file_reloading.eval_body.call(null,inst_24294,opts);
var inst_24296 = (inst_24289 + (1));
var tmp24427 = inst_24286;
var tmp24428 = inst_24288;
var tmp24429 = inst_24287;
var inst_24286__$1 = tmp24427;
var inst_24287__$1 = tmp24429;
var inst_24288__$1 = tmp24428;
var inst_24289__$1 = inst_24296;
var state_24425__$1 = (function (){var statearr_24430 = state_24425;
(statearr_24430[(7)] = inst_24289__$1);

(statearr_24430[(8)] = inst_24286__$1);

(statearr_24430[(9)] = inst_24288__$1);

(statearr_24430[(10)] = inst_24287__$1);

(statearr_24430[(11)] = inst_24295);

return statearr_24430;
})();
var statearr_24431_24517 = state_24425__$1;
(statearr_24431_24517[(2)] = null);

(statearr_24431_24517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (20))){
var inst_24329 = (state_24425[(12)]);
var inst_24337 = figwheel.client.file_reloading.sort_files.call(null,inst_24329);
var state_24425__$1 = state_24425;
var statearr_24432_24518 = state_24425__$1;
(statearr_24432_24518[(2)] = inst_24337);

(statearr_24432_24518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (27))){
var state_24425__$1 = state_24425;
var statearr_24433_24519 = state_24425__$1;
(statearr_24433_24519[(2)] = null);

(statearr_24433_24519[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (1))){
var inst_24278 = (state_24425[(13)]);
var inst_24275 = before_jsload.call(null,files);
var inst_24276 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24277 = (function (){return ((function (inst_24278,inst_24275,inst_24276,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24020_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24020_SHARP_);
});
;})(inst_24278,inst_24275,inst_24276,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24278__$1 = cljs.core.filter.call(null,inst_24277,files);
var inst_24279 = cljs.core.not_empty.call(null,inst_24278__$1);
var state_24425__$1 = (function (){var statearr_24434 = state_24425;
(statearr_24434[(14)] = inst_24275);

(statearr_24434[(15)] = inst_24276);

(statearr_24434[(13)] = inst_24278__$1);

return statearr_24434;
})();
if(cljs.core.truth_(inst_24279)){
var statearr_24435_24520 = state_24425__$1;
(statearr_24435_24520[(1)] = (2));

} else {
var statearr_24436_24521 = state_24425__$1;
(statearr_24436_24521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (24))){
var state_24425__$1 = state_24425;
var statearr_24437_24522 = state_24425__$1;
(statearr_24437_24522[(2)] = null);

(statearr_24437_24522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (39))){
var inst_24379 = (state_24425[(16)]);
var state_24425__$1 = state_24425;
var statearr_24438_24523 = state_24425__$1;
(statearr_24438_24523[(2)] = inst_24379);

(statearr_24438_24523[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (46))){
var inst_24420 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24439_24524 = state_24425__$1;
(statearr_24439_24524[(2)] = inst_24420);

(statearr_24439_24524[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (4))){
var inst_24323 = (state_24425[(2)]);
var inst_24324 = cljs.core.List.EMPTY;
var inst_24325 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24324);
var inst_24326 = (function (){return ((function (inst_24323,inst_24324,inst_24325,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24021_SHARP_){
var and__16829__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24021_SHARP_);
if(cljs.core.truth_(and__16829__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24021_SHARP_));
} else {
return and__16829__auto__;
}
});
;})(inst_24323,inst_24324,inst_24325,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24327 = cljs.core.filter.call(null,inst_24326,files);
var inst_24328 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24329 = cljs.core.concat.call(null,inst_24327,inst_24328);
var state_24425__$1 = (function (){var statearr_24440 = state_24425;
(statearr_24440[(17)] = inst_24325);

(statearr_24440[(12)] = inst_24329);

(statearr_24440[(18)] = inst_24323);

return statearr_24440;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24441_24525 = state_24425__$1;
(statearr_24441_24525[(1)] = (16));

} else {
var statearr_24442_24526 = state_24425__$1;
(statearr_24442_24526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (15))){
var inst_24313 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24443_24527 = state_24425__$1;
(statearr_24443_24527[(2)] = inst_24313);

(statearr_24443_24527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (21))){
var inst_24339 = (state_24425[(19)]);
var inst_24339__$1 = (state_24425[(2)]);
var inst_24340 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24339__$1);
var state_24425__$1 = (function (){var statearr_24444 = state_24425;
(statearr_24444[(19)] = inst_24339__$1);

return statearr_24444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24425__$1,(22),inst_24340);
} else {
if((state_val_24426 === (31))){
var inst_24423 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24425__$1,inst_24423);
} else {
if((state_val_24426 === (32))){
var inst_24379 = (state_24425[(16)]);
var inst_24384 = inst_24379.cljs$lang$protocol_mask$partition0$;
var inst_24385 = (inst_24384 & (64));
var inst_24386 = inst_24379.cljs$core$ISeq$;
var inst_24387 = (inst_24385) || (inst_24386);
var state_24425__$1 = state_24425;
if(cljs.core.truth_(inst_24387)){
var statearr_24445_24528 = state_24425__$1;
(statearr_24445_24528[(1)] = (35));

} else {
var statearr_24446_24529 = state_24425__$1;
(statearr_24446_24529[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (40))){
var inst_24400 = (state_24425[(20)]);
var inst_24399 = (state_24425[(2)]);
var inst_24400__$1 = cljs.core.get.call(null,inst_24399,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24401 = cljs.core.get.call(null,inst_24399,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24402 = cljs.core.not_empty.call(null,inst_24400__$1);
var state_24425__$1 = (function (){var statearr_24447 = state_24425;
(statearr_24447[(21)] = inst_24401);

(statearr_24447[(20)] = inst_24400__$1);

return statearr_24447;
})();
if(cljs.core.truth_(inst_24402)){
var statearr_24448_24530 = state_24425__$1;
(statearr_24448_24530[(1)] = (41));

} else {
var statearr_24449_24531 = state_24425__$1;
(statearr_24449_24531[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (33))){
var state_24425__$1 = state_24425;
var statearr_24450_24532 = state_24425__$1;
(statearr_24450_24532[(2)] = false);

(statearr_24450_24532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (13))){
var inst_24299 = (state_24425[(22)]);
var inst_24303 = cljs.core.chunk_first.call(null,inst_24299);
var inst_24304 = cljs.core.chunk_rest.call(null,inst_24299);
var inst_24305 = cljs.core.count.call(null,inst_24303);
var inst_24286 = inst_24304;
var inst_24287 = inst_24303;
var inst_24288 = inst_24305;
var inst_24289 = (0);
var state_24425__$1 = (function (){var statearr_24451 = state_24425;
(statearr_24451[(7)] = inst_24289);

(statearr_24451[(8)] = inst_24286);

(statearr_24451[(9)] = inst_24288);

(statearr_24451[(10)] = inst_24287);

return statearr_24451;
})();
var statearr_24452_24533 = state_24425__$1;
(statearr_24452_24533[(2)] = null);

(statearr_24452_24533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (22))){
var inst_24343 = (state_24425[(23)]);
var inst_24339 = (state_24425[(19)]);
var inst_24347 = (state_24425[(24)]);
var inst_24342 = (state_24425[(25)]);
var inst_24342__$1 = (state_24425[(2)]);
var inst_24343__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24342__$1);
var inst_24344 = (function (){var all_files = inst_24339;
var res_SINGLEQUOTE_ = inst_24342__$1;
var res = inst_24343__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24343,inst_24339,inst_24347,inst_24342,inst_24342__$1,inst_24343__$1,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24022_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24022_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24343,inst_24339,inst_24347,inst_24342,inst_24342__$1,inst_24343__$1,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24345 = cljs.core.filter.call(null,inst_24344,inst_24342__$1);
var inst_24346 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24347__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24346);
var inst_24348 = cljs.core.not_empty.call(null,inst_24347__$1);
var state_24425__$1 = (function (){var statearr_24453 = state_24425;
(statearr_24453[(23)] = inst_24343__$1);

(statearr_24453[(24)] = inst_24347__$1);

(statearr_24453[(26)] = inst_24345);

(statearr_24453[(25)] = inst_24342__$1);

return statearr_24453;
})();
if(cljs.core.truth_(inst_24348)){
var statearr_24454_24534 = state_24425__$1;
(statearr_24454_24534[(1)] = (23));

} else {
var statearr_24455_24535 = state_24425__$1;
(statearr_24455_24535[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (36))){
var state_24425__$1 = state_24425;
var statearr_24456_24536 = state_24425__$1;
(statearr_24456_24536[(2)] = false);

(statearr_24456_24536[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (41))){
var inst_24400 = (state_24425[(20)]);
var inst_24404 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24405 = cljs.core.map.call(null,inst_24404,inst_24400);
var inst_24406 = cljs.core.pr_str.call(null,inst_24405);
var inst_24407 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24406)].join('');
var inst_24408 = figwheel.client.utils.log.call(null,inst_24407);
var state_24425__$1 = state_24425;
var statearr_24457_24537 = state_24425__$1;
(statearr_24457_24537[(2)] = inst_24408);

(statearr_24457_24537[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (43))){
var inst_24401 = (state_24425[(21)]);
var inst_24411 = (state_24425[(2)]);
var inst_24412 = cljs.core.not_empty.call(null,inst_24401);
var state_24425__$1 = (function (){var statearr_24458 = state_24425;
(statearr_24458[(27)] = inst_24411);

return statearr_24458;
})();
if(cljs.core.truth_(inst_24412)){
var statearr_24459_24538 = state_24425__$1;
(statearr_24459_24538[(1)] = (44));

} else {
var statearr_24460_24539 = state_24425__$1;
(statearr_24460_24539[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (29))){
var inst_24343 = (state_24425[(23)]);
var inst_24339 = (state_24425[(19)]);
var inst_24347 = (state_24425[(24)]);
var inst_24345 = (state_24425[(26)]);
var inst_24379 = (state_24425[(16)]);
var inst_24342 = (state_24425[(25)]);
var inst_24375 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24378 = (function (){var all_files = inst_24339;
var res_SINGLEQUOTE_ = inst_24342;
var res = inst_24343;
var files_not_loaded = inst_24345;
var dependencies_that_loaded = inst_24347;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24343,inst_24339,inst_24347,inst_24345,inst_24379,inst_24342,inst_24375,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24377){
var map__24461 = p__24377;
var map__24461__$1 = ((((!((map__24461 == null)))?((((map__24461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24461):map__24461);
var namespace = cljs.core.get.call(null,map__24461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24343,inst_24339,inst_24347,inst_24345,inst_24379,inst_24342,inst_24375,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24379__$1 = cljs.core.group_by.call(null,inst_24378,inst_24345);
var inst_24381 = (inst_24379__$1 == null);
var inst_24382 = cljs.core.not.call(null,inst_24381);
var state_24425__$1 = (function (){var statearr_24463 = state_24425;
(statearr_24463[(28)] = inst_24375);

(statearr_24463[(16)] = inst_24379__$1);

return statearr_24463;
})();
if(inst_24382){
var statearr_24464_24540 = state_24425__$1;
(statearr_24464_24540[(1)] = (32));

} else {
var statearr_24465_24541 = state_24425__$1;
(statearr_24465_24541[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (44))){
var inst_24401 = (state_24425[(21)]);
var inst_24414 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24401);
var inst_24415 = cljs.core.pr_str.call(null,inst_24414);
var inst_24416 = [cljs.core.str("not required: "),cljs.core.str(inst_24415)].join('');
var inst_24417 = figwheel.client.utils.log.call(null,inst_24416);
var state_24425__$1 = state_24425;
var statearr_24466_24542 = state_24425__$1;
(statearr_24466_24542[(2)] = inst_24417);

(statearr_24466_24542[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (6))){
var inst_24320 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24467_24543 = state_24425__$1;
(statearr_24467_24543[(2)] = inst_24320);

(statearr_24467_24543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (28))){
var inst_24345 = (state_24425[(26)]);
var inst_24372 = (state_24425[(2)]);
var inst_24373 = cljs.core.not_empty.call(null,inst_24345);
var state_24425__$1 = (function (){var statearr_24468 = state_24425;
(statearr_24468[(29)] = inst_24372);

return statearr_24468;
})();
if(cljs.core.truth_(inst_24373)){
var statearr_24469_24544 = state_24425__$1;
(statearr_24469_24544[(1)] = (29));

} else {
var statearr_24470_24545 = state_24425__$1;
(statearr_24470_24545[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (25))){
var inst_24343 = (state_24425[(23)]);
var inst_24359 = (state_24425[(2)]);
var inst_24360 = cljs.core.not_empty.call(null,inst_24343);
var state_24425__$1 = (function (){var statearr_24471 = state_24425;
(statearr_24471[(30)] = inst_24359);

return statearr_24471;
})();
if(cljs.core.truth_(inst_24360)){
var statearr_24472_24546 = state_24425__$1;
(statearr_24472_24546[(1)] = (26));

} else {
var statearr_24473_24547 = state_24425__$1;
(statearr_24473_24547[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (34))){
var inst_24394 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
if(cljs.core.truth_(inst_24394)){
var statearr_24474_24548 = state_24425__$1;
(statearr_24474_24548[(1)] = (38));

} else {
var statearr_24475_24549 = state_24425__$1;
(statearr_24475_24549[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (17))){
var state_24425__$1 = state_24425;
var statearr_24476_24550 = state_24425__$1;
(statearr_24476_24550[(2)] = recompile_dependents);

(statearr_24476_24550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (3))){
var state_24425__$1 = state_24425;
var statearr_24477_24551 = state_24425__$1;
(statearr_24477_24551[(2)] = null);

(statearr_24477_24551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (12))){
var inst_24316 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24478_24552 = state_24425__$1;
(statearr_24478_24552[(2)] = inst_24316);

(statearr_24478_24552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (2))){
var inst_24278 = (state_24425[(13)]);
var inst_24285 = cljs.core.seq.call(null,inst_24278);
var inst_24286 = inst_24285;
var inst_24287 = null;
var inst_24288 = (0);
var inst_24289 = (0);
var state_24425__$1 = (function (){var statearr_24479 = state_24425;
(statearr_24479[(7)] = inst_24289);

(statearr_24479[(8)] = inst_24286);

(statearr_24479[(9)] = inst_24288);

(statearr_24479[(10)] = inst_24287);

return statearr_24479;
})();
var statearr_24480_24553 = state_24425__$1;
(statearr_24480_24553[(2)] = null);

(statearr_24480_24553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (23))){
var inst_24343 = (state_24425[(23)]);
var inst_24339 = (state_24425[(19)]);
var inst_24347 = (state_24425[(24)]);
var inst_24345 = (state_24425[(26)]);
var inst_24342 = (state_24425[(25)]);
var inst_24350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24352 = (function (){var all_files = inst_24339;
var res_SINGLEQUOTE_ = inst_24342;
var res = inst_24343;
var files_not_loaded = inst_24345;
var dependencies_that_loaded = inst_24347;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24343,inst_24339,inst_24347,inst_24345,inst_24342,inst_24350,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24351){
var map__24481 = p__24351;
var map__24481__$1 = ((((!((map__24481 == null)))?((((map__24481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24481):map__24481);
var request_url = cljs.core.get.call(null,map__24481__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24343,inst_24339,inst_24347,inst_24345,inst_24342,inst_24350,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24353 = cljs.core.reverse.call(null,inst_24347);
var inst_24354 = cljs.core.map.call(null,inst_24352,inst_24353);
var inst_24355 = cljs.core.pr_str.call(null,inst_24354);
var inst_24356 = figwheel.client.utils.log.call(null,inst_24355);
var state_24425__$1 = (function (){var statearr_24483 = state_24425;
(statearr_24483[(31)] = inst_24350);

return statearr_24483;
})();
var statearr_24484_24554 = state_24425__$1;
(statearr_24484_24554[(2)] = inst_24356);

(statearr_24484_24554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (35))){
var state_24425__$1 = state_24425;
var statearr_24485_24555 = state_24425__$1;
(statearr_24485_24555[(2)] = true);

(statearr_24485_24555[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (19))){
var inst_24329 = (state_24425[(12)]);
var inst_24335 = figwheel.client.file_reloading.expand_files.call(null,inst_24329);
var state_24425__$1 = state_24425;
var statearr_24486_24556 = state_24425__$1;
(statearr_24486_24556[(2)] = inst_24335);

(statearr_24486_24556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (11))){
var state_24425__$1 = state_24425;
var statearr_24487_24557 = state_24425__$1;
(statearr_24487_24557[(2)] = null);

(statearr_24487_24557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (9))){
var inst_24318 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24488_24558 = state_24425__$1;
(statearr_24488_24558[(2)] = inst_24318);

(statearr_24488_24558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (5))){
var inst_24289 = (state_24425[(7)]);
var inst_24288 = (state_24425[(9)]);
var inst_24291 = (inst_24289 < inst_24288);
var inst_24292 = inst_24291;
var state_24425__$1 = state_24425;
if(cljs.core.truth_(inst_24292)){
var statearr_24489_24559 = state_24425__$1;
(statearr_24489_24559[(1)] = (7));

} else {
var statearr_24490_24560 = state_24425__$1;
(statearr_24490_24560[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (14))){
var inst_24299 = (state_24425[(22)]);
var inst_24308 = cljs.core.first.call(null,inst_24299);
var inst_24309 = figwheel.client.file_reloading.eval_body.call(null,inst_24308,opts);
var inst_24310 = cljs.core.next.call(null,inst_24299);
var inst_24286 = inst_24310;
var inst_24287 = null;
var inst_24288 = (0);
var inst_24289 = (0);
var state_24425__$1 = (function (){var statearr_24491 = state_24425;
(statearr_24491[(7)] = inst_24289);

(statearr_24491[(8)] = inst_24286);

(statearr_24491[(9)] = inst_24288);

(statearr_24491[(10)] = inst_24287);

(statearr_24491[(32)] = inst_24309);

return statearr_24491;
})();
var statearr_24492_24561 = state_24425__$1;
(statearr_24492_24561[(2)] = null);

(statearr_24492_24561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (45))){
var state_24425__$1 = state_24425;
var statearr_24493_24562 = state_24425__$1;
(statearr_24493_24562[(2)] = null);

(statearr_24493_24562[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (26))){
var inst_24343 = (state_24425[(23)]);
var inst_24339 = (state_24425[(19)]);
var inst_24347 = (state_24425[(24)]);
var inst_24345 = (state_24425[(26)]);
var inst_24342 = (state_24425[(25)]);
var inst_24362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24364 = (function (){var all_files = inst_24339;
var res_SINGLEQUOTE_ = inst_24342;
var res = inst_24343;
var files_not_loaded = inst_24345;
var dependencies_that_loaded = inst_24347;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24343,inst_24339,inst_24347,inst_24345,inst_24342,inst_24362,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24363){
var map__24494 = p__24363;
var map__24494__$1 = ((((!((map__24494 == null)))?((((map__24494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24494):map__24494);
var namespace = cljs.core.get.call(null,map__24494__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24494__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24343,inst_24339,inst_24347,inst_24345,inst_24342,inst_24362,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24365 = cljs.core.map.call(null,inst_24364,inst_24343);
var inst_24366 = cljs.core.pr_str.call(null,inst_24365);
var inst_24367 = figwheel.client.utils.log.call(null,inst_24366);
var inst_24368 = (function (){var all_files = inst_24339;
var res_SINGLEQUOTE_ = inst_24342;
var res = inst_24343;
var files_not_loaded = inst_24345;
var dependencies_that_loaded = inst_24347;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24343,inst_24339,inst_24347,inst_24345,inst_24342,inst_24362,inst_24364,inst_24365,inst_24366,inst_24367,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24343,inst_24339,inst_24347,inst_24345,inst_24342,inst_24362,inst_24364,inst_24365,inst_24366,inst_24367,state_val_24426,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24369 = setTimeout(inst_24368,(10));
var state_24425__$1 = (function (){var statearr_24496 = state_24425;
(statearr_24496[(33)] = inst_24367);

(statearr_24496[(34)] = inst_24362);

return statearr_24496;
})();
var statearr_24497_24563 = state_24425__$1;
(statearr_24497_24563[(2)] = inst_24369);

(statearr_24497_24563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (16))){
var state_24425__$1 = state_24425;
var statearr_24498_24564 = state_24425__$1;
(statearr_24498_24564[(2)] = reload_dependents);

(statearr_24498_24564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (38))){
var inst_24379 = (state_24425[(16)]);
var inst_24396 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24379);
var state_24425__$1 = state_24425;
var statearr_24499_24565 = state_24425__$1;
(statearr_24499_24565[(2)] = inst_24396);

(statearr_24499_24565[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (30))){
var state_24425__$1 = state_24425;
var statearr_24500_24566 = state_24425__$1;
(statearr_24500_24566[(2)] = null);

(statearr_24500_24566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (10))){
var inst_24299 = (state_24425[(22)]);
var inst_24301 = cljs.core.chunked_seq_QMARK_.call(null,inst_24299);
var state_24425__$1 = state_24425;
if(inst_24301){
var statearr_24501_24567 = state_24425__$1;
(statearr_24501_24567[(1)] = (13));

} else {
var statearr_24502_24568 = state_24425__$1;
(statearr_24502_24568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (18))){
var inst_24333 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
if(cljs.core.truth_(inst_24333)){
var statearr_24503_24569 = state_24425__$1;
(statearr_24503_24569[(1)] = (19));

} else {
var statearr_24504_24570 = state_24425__$1;
(statearr_24504_24570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (42))){
var state_24425__$1 = state_24425;
var statearr_24505_24571 = state_24425__$1;
(statearr_24505_24571[(2)] = null);

(statearr_24505_24571[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (37))){
var inst_24391 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24506_24572 = state_24425__$1;
(statearr_24506_24572[(2)] = inst_24391);

(statearr_24506_24572[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (8))){
var inst_24286 = (state_24425[(8)]);
var inst_24299 = (state_24425[(22)]);
var inst_24299__$1 = cljs.core.seq.call(null,inst_24286);
var state_24425__$1 = (function (){var statearr_24507 = state_24425;
(statearr_24507[(22)] = inst_24299__$1);

return statearr_24507;
})();
if(inst_24299__$1){
var statearr_24508_24573 = state_24425__$1;
(statearr_24508_24573[(1)] = (10));

} else {
var statearr_24509_24574 = state_24425__$1;
(statearr_24509_24574[(1)] = (11));

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
}
});})(c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20686__auto__,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto____0 = (function (){
var statearr_24513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24513[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto__);

(statearr_24513[(1)] = (1));

return statearr_24513;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto____1 = (function (state_24425){
while(true){
var ret_value__20688__auto__ = (function (){try{while(true){
var result__20689__auto__ = switch__20686__auto__.call(null,state_24425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20689__auto__;
}
break;
}
}catch (e24514){if((e24514 instanceof Object)){
var ex__20690__auto__ = e24514;
var statearr_24515_24575 = state_24425;
(statearr_24515_24575[(5)] = ex__20690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24576 = state_24425;
state_24425 = G__24576;
continue;
} else {
return ret_value__20688__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto__ = function(state_24425){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto____1.call(this,state_24425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20687__auto__;
})()
;})(switch__20686__auto__,c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20800__auto__ = (function (){var statearr_24516 = f__20799__auto__.call(null);
(statearr_24516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20798__auto__);

return statearr_24516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20800__auto__);
});})(c__20798__auto__,map__24271,map__24271__$1,opts,before_jsload,on_jsload,reload_dependents,map__24272,map__24272__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20798__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24579,link){
var map__24582 = p__24579;
var map__24582__$1 = ((((!((map__24582 == null)))?((((map__24582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24582):map__24582);
var file = cljs.core.get.call(null,map__24582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24582,map__24582__$1,file){
return (function (p1__24577_SHARP_,p2__24578_SHARP_){
if(cljs.core._EQ_.call(null,p1__24577_SHARP_,p2__24578_SHARP_)){
return p1__24577_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24582,map__24582__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24588){
var map__24589 = p__24588;
var map__24589__$1 = ((((!((map__24589 == null)))?((((map__24589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24589):map__24589);
var match_length = cljs.core.get.call(null,map__24589__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24589__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24584_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24584_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24591 = [];
var len__17899__auto___24594 = arguments.length;
var i__17900__auto___24595 = (0);
while(true){
if((i__17900__auto___24595 < len__17899__auto___24594)){
args24591.push((arguments[i__17900__auto___24595]));

var G__24596 = (i__17900__auto___24595 + (1));
i__17900__auto___24595 = G__24596;
continue;
} else {
}
break;
}

var G__24593 = args24591.length;
switch (G__24593) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24591.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24598_SHARP_,p2__24599_SHARP_){
return cljs.core.assoc.call(null,p1__24598_SHARP_,cljs.core.get.call(null,p2__24599_SHARP_,key),p2__24599_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24600){
var map__24603 = p__24600;
var map__24603__$1 = ((((!((map__24603 == null)))?((((map__24603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24603):map__24603);
var f_data = map__24603__$1;
var file = cljs.core.get.call(null,map__24603__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24605,files_msg){
var map__24612 = p__24605;
var map__24612__$1 = ((((!((map__24612 == null)))?((((map__24612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24612):map__24612);
var opts = map__24612__$1;
var on_cssload = cljs.core.get.call(null,map__24612__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24614_24618 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24615_24619 = null;
var count__24616_24620 = (0);
var i__24617_24621 = (0);
while(true){
if((i__24617_24621 < count__24616_24620)){
var f_24622 = cljs.core._nth.call(null,chunk__24615_24619,i__24617_24621);
figwheel.client.file_reloading.reload_css_file.call(null,f_24622);

var G__24623 = seq__24614_24618;
var G__24624 = chunk__24615_24619;
var G__24625 = count__24616_24620;
var G__24626 = (i__24617_24621 + (1));
seq__24614_24618 = G__24623;
chunk__24615_24619 = G__24624;
count__24616_24620 = G__24625;
i__24617_24621 = G__24626;
continue;
} else {
var temp__4425__auto___24627 = cljs.core.seq.call(null,seq__24614_24618);
if(temp__4425__auto___24627){
var seq__24614_24628__$1 = temp__4425__auto___24627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24614_24628__$1)){
var c__17644__auto___24629 = cljs.core.chunk_first.call(null,seq__24614_24628__$1);
var G__24630 = cljs.core.chunk_rest.call(null,seq__24614_24628__$1);
var G__24631 = c__17644__auto___24629;
var G__24632 = cljs.core.count.call(null,c__17644__auto___24629);
var G__24633 = (0);
seq__24614_24618 = G__24630;
chunk__24615_24619 = G__24631;
count__24616_24620 = G__24632;
i__24617_24621 = G__24633;
continue;
} else {
var f_24634 = cljs.core.first.call(null,seq__24614_24628__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24634);

var G__24635 = cljs.core.next.call(null,seq__24614_24628__$1);
var G__24636 = null;
var G__24637 = (0);
var G__24638 = (0);
seq__24614_24618 = G__24635;
chunk__24615_24619 = G__24636;
count__24616_24620 = G__24637;
i__24617_24621 = G__24638;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24612,map__24612__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24612,map__24612__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map