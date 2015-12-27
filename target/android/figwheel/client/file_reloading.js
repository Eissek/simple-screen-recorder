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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24728_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24728_SHARP_));
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
var seq__24733 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24734 = null;
var count__24735 = (0);
var i__24736 = (0);
while(true){
if((i__24736 < count__24735)){
var n = cljs.core._nth.call(null,chunk__24734,i__24736);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24737 = seq__24733;
var G__24738 = chunk__24734;
var G__24739 = count__24735;
var G__24740 = (i__24736 + (1));
seq__24733 = G__24737;
chunk__24734 = G__24738;
count__24735 = G__24739;
i__24736 = G__24740;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24733);
if(temp__4425__auto__){
var seq__24733__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24733__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__24733__$1);
var G__24741 = cljs.core.chunk_rest.call(null,seq__24733__$1);
var G__24742 = c__17644__auto__;
var G__24743 = cljs.core.count.call(null,c__17644__auto__);
var G__24744 = (0);
seq__24733 = G__24741;
chunk__24734 = G__24742;
count__24735 = G__24743;
i__24736 = G__24744;
continue;
} else {
var n = cljs.core.first.call(null,seq__24733__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24745 = cljs.core.next.call(null,seq__24733__$1);
var G__24746 = null;
var G__24747 = (0);
var G__24748 = (0);
seq__24733 = G__24745;
chunk__24734 = G__24746;
count__24735 = G__24747;
i__24736 = G__24748;
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

var seq__24787_24794 = cljs.core.seq.call(null,deps);
var chunk__24788_24795 = null;
var count__24789_24796 = (0);
var i__24790_24797 = (0);
while(true){
if((i__24790_24797 < count__24789_24796)){
var dep_24798 = cljs.core._nth.call(null,chunk__24788_24795,i__24790_24797);
topo_sort_helper_STAR_.call(null,dep_24798,(depth + (1)),state);

var G__24799 = seq__24787_24794;
var G__24800 = chunk__24788_24795;
var G__24801 = count__24789_24796;
var G__24802 = (i__24790_24797 + (1));
seq__24787_24794 = G__24799;
chunk__24788_24795 = G__24800;
count__24789_24796 = G__24801;
i__24790_24797 = G__24802;
continue;
} else {
var temp__4425__auto___24803 = cljs.core.seq.call(null,seq__24787_24794);
if(temp__4425__auto___24803){
var seq__24787_24804__$1 = temp__4425__auto___24803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24787_24804__$1)){
var c__17644__auto___24805 = cljs.core.chunk_first.call(null,seq__24787_24804__$1);
var G__24806 = cljs.core.chunk_rest.call(null,seq__24787_24804__$1);
var G__24807 = c__17644__auto___24805;
var G__24808 = cljs.core.count.call(null,c__17644__auto___24805);
var G__24809 = (0);
seq__24787_24794 = G__24806;
chunk__24788_24795 = G__24807;
count__24789_24796 = G__24808;
i__24790_24797 = G__24809;
continue;
} else {
var dep_24810 = cljs.core.first.call(null,seq__24787_24804__$1);
topo_sort_helper_STAR_.call(null,dep_24810,(depth + (1)),state);

var G__24811 = cljs.core.next.call(null,seq__24787_24804__$1);
var G__24812 = null;
var G__24813 = (0);
var G__24814 = (0);
seq__24787_24794 = G__24811;
chunk__24788_24795 = G__24812;
count__24789_24796 = G__24813;
i__24790_24797 = G__24814;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24791){
var vec__24793 = p__24791;
var x = cljs.core.nth.call(null,vec__24793,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24793,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24793,x,xs,get_deps__$1){
return (function (p1__24749_SHARP_){
return clojure.set.difference.call(null,p1__24749_SHARP_,x);
});})(vec__24793,x,xs,get_deps__$1))
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
var seq__24827 = cljs.core.seq.call(null,provides);
var chunk__24828 = null;
var count__24829 = (0);
var i__24830 = (0);
while(true){
if((i__24830 < count__24829)){
var prov = cljs.core._nth.call(null,chunk__24828,i__24830);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24831_24839 = cljs.core.seq.call(null,requires);
var chunk__24832_24840 = null;
var count__24833_24841 = (0);
var i__24834_24842 = (0);
while(true){
if((i__24834_24842 < count__24833_24841)){
var req_24843 = cljs.core._nth.call(null,chunk__24832_24840,i__24834_24842);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24843,prov);

var G__24844 = seq__24831_24839;
var G__24845 = chunk__24832_24840;
var G__24846 = count__24833_24841;
var G__24847 = (i__24834_24842 + (1));
seq__24831_24839 = G__24844;
chunk__24832_24840 = G__24845;
count__24833_24841 = G__24846;
i__24834_24842 = G__24847;
continue;
} else {
var temp__4425__auto___24848 = cljs.core.seq.call(null,seq__24831_24839);
if(temp__4425__auto___24848){
var seq__24831_24849__$1 = temp__4425__auto___24848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24831_24849__$1)){
var c__17644__auto___24850 = cljs.core.chunk_first.call(null,seq__24831_24849__$1);
var G__24851 = cljs.core.chunk_rest.call(null,seq__24831_24849__$1);
var G__24852 = c__17644__auto___24850;
var G__24853 = cljs.core.count.call(null,c__17644__auto___24850);
var G__24854 = (0);
seq__24831_24839 = G__24851;
chunk__24832_24840 = G__24852;
count__24833_24841 = G__24853;
i__24834_24842 = G__24854;
continue;
} else {
var req_24855 = cljs.core.first.call(null,seq__24831_24849__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24855,prov);

var G__24856 = cljs.core.next.call(null,seq__24831_24849__$1);
var G__24857 = null;
var G__24858 = (0);
var G__24859 = (0);
seq__24831_24839 = G__24856;
chunk__24832_24840 = G__24857;
count__24833_24841 = G__24858;
i__24834_24842 = G__24859;
continue;
}
} else {
}
}
break;
}

var G__24860 = seq__24827;
var G__24861 = chunk__24828;
var G__24862 = count__24829;
var G__24863 = (i__24830 + (1));
seq__24827 = G__24860;
chunk__24828 = G__24861;
count__24829 = G__24862;
i__24830 = G__24863;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24827);
if(temp__4425__auto__){
var seq__24827__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24827__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__24827__$1);
var G__24864 = cljs.core.chunk_rest.call(null,seq__24827__$1);
var G__24865 = c__17644__auto__;
var G__24866 = cljs.core.count.call(null,c__17644__auto__);
var G__24867 = (0);
seq__24827 = G__24864;
chunk__24828 = G__24865;
count__24829 = G__24866;
i__24830 = G__24867;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24827__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24835_24868 = cljs.core.seq.call(null,requires);
var chunk__24836_24869 = null;
var count__24837_24870 = (0);
var i__24838_24871 = (0);
while(true){
if((i__24838_24871 < count__24837_24870)){
var req_24872 = cljs.core._nth.call(null,chunk__24836_24869,i__24838_24871);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24872,prov);

var G__24873 = seq__24835_24868;
var G__24874 = chunk__24836_24869;
var G__24875 = count__24837_24870;
var G__24876 = (i__24838_24871 + (1));
seq__24835_24868 = G__24873;
chunk__24836_24869 = G__24874;
count__24837_24870 = G__24875;
i__24838_24871 = G__24876;
continue;
} else {
var temp__4425__auto___24877__$1 = cljs.core.seq.call(null,seq__24835_24868);
if(temp__4425__auto___24877__$1){
var seq__24835_24878__$1 = temp__4425__auto___24877__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24835_24878__$1)){
var c__17644__auto___24879 = cljs.core.chunk_first.call(null,seq__24835_24878__$1);
var G__24880 = cljs.core.chunk_rest.call(null,seq__24835_24878__$1);
var G__24881 = c__17644__auto___24879;
var G__24882 = cljs.core.count.call(null,c__17644__auto___24879);
var G__24883 = (0);
seq__24835_24868 = G__24880;
chunk__24836_24869 = G__24881;
count__24837_24870 = G__24882;
i__24838_24871 = G__24883;
continue;
} else {
var req_24884 = cljs.core.first.call(null,seq__24835_24878__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24884,prov);

var G__24885 = cljs.core.next.call(null,seq__24835_24878__$1);
var G__24886 = null;
var G__24887 = (0);
var G__24888 = (0);
seq__24835_24868 = G__24885;
chunk__24836_24869 = G__24886;
count__24837_24870 = G__24887;
i__24838_24871 = G__24888;
continue;
}
} else {
}
}
break;
}

var G__24889 = cljs.core.next.call(null,seq__24827__$1);
var G__24890 = null;
var G__24891 = (0);
var G__24892 = (0);
seq__24827 = G__24889;
chunk__24828 = G__24890;
count__24829 = G__24891;
i__24830 = G__24892;
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
var seq__24897_24901 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24898_24902 = null;
var count__24899_24903 = (0);
var i__24900_24904 = (0);
while(true){
if((i__24900_24904 < count__24899_24903)){
var ns_24905 = cljs.core._nth.call(null,chunk__24898_24902,i__24900_24904);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24905);

var G__24906 = seq__24897_24901;
var G__24907 = chunk__24898_24902;
var G__24908 = count__24899_24903;
var G__24909 = (i__24900_24904 + (1));
seq__24897_24901 = G__24906;
chunk__24898_24902 = G__24907;
count__24899_24903 = G__24908;
i__24900_24904 = G__24909;
continue;
} else {
var temp__4425__auto___24910 = cljs.core.seq.call(null,seq__24897_24901);
if(temp__4425__auto___24910){
var seq__24897_24911__$1 = temp__4425__auto___24910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24897_24911__$1)){
var c__17644__auto___24912 = cljs.core.chunk_first.call(null,seq__24897_24911__$1);
var G__24913 = cljs.core.chunk_rest.call(null,seq__24897_24911__$1);
var G__24914 = c__17644__auto___24912;
var G__24915 = cljs.core.count.call(null,c__17644__auto___24912);
var G__24916 = (0);
seq__24897_24901 = G__24913;
chunk__24898_24902 = G__24914;
count__24899_24903 = G__24915;
i__24900_24904 = G__24916;
continue;
} else {
var ns_24917 = cljs.core.first.call(null,seq__24897_24911__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24917);

var G__24918 = cljs.core.next.call(null,seq__24897_24911__$1);
var G__24919 = null;
var G__24920 = (0);
var G__24921 = (0);
seq__24897_24901 = G__24918;
chunk__24898_24902 = G__24919;
count__24899_24903 = G__24920;
i__24900_24904 = G__24921;
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
var G__24922__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24923__i = 0, G__24923__a = new Array(arguments.length -  0);
while (G__24923__i < G__24923__a.length) {G__24923__a[G__24923__i] = arguments[G__24923__i + 0]; ++G__24923__i;}
  args = new cljs.core.IndexedSeq(G__24923__a,0);
} 
return G__24922__delegate.call(this,args);};
G__24922.cljs$lang$maxFixedArity = 0;
G__24922.cljs$lang$applyTo = (function (arglist__24924){
var args = cljs.core.seq(arglist__24924);
return G__24922__delegate(args);
});
G__24922.cljs$core$IFn$_invoke$arity$variadic = G__24922__delegate;
return G__24922;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24926 = cljs.core._EQ_;
var expr__24927 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24926.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24927))){
var path_parts = ((function (pred__24926,expr__24927){
return (function (p1__24925_SHARP_){
return clojure.string.split.call(null,p1__24925_SHARP_,/[\/\\]/);
});})(pred__24926,expr__24927))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24926,expr__24927){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24929){if((e24929 instanceof Error)){
var e = e24929;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24929;

}
}})());
});
;})(path_parts,sep,root,pred__24926,expr__24927))
} else {
if(cljs.core.truth_(pred__24926.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24927))){
return ((function (pred__24926,expr__24927){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24926,expr__24927){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24926,expr__24927))
);

return deferred.addErrback(((function (deferred,pred__24926,expr__24927){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24926,expr__24927))
);
});
;})(pred__24926,expr__24927))
} else {
return ((function (pred__24926,expr__24927){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24926,expr__24927))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24930,callback){
var map__24933 = p__24930;
var map__24933__$1 = ((((!((map__24933 == null)))?((((map__24933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24933):map__24933);
var file_msg = map__24933__$1;
var request_url = cljs.core.get.call(null,map__24933__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24933,map__24933__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24933,map__24933__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto__){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto__){
return (function (state_24957){
var state_val_24958 = (state_24957[(1)]);
if((state_val_24958 === (7))){
var inst_24953 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
var statearr_24959_24979 = state_24957__$1;
(statearr_24959_24979[(2)] = inst_24953);

(statearr_24959_24979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (1))){
var state_24957__$1 = state_24957;
var statearr_24960_24980 = state_24957__$1;
(statearr_24960_24980[(2)] = null);

(statearr_24960_24980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (4))){
var inst_24937 = (state_24957[(7)]);
var inst_24937__$1 = (state_24957[(2)]);
var state_24957__$1 = (function (){var statearr_24961 = state_24957;
(statearr_24961[(7)] = inst_24937__$1);

return statearr_24961;
})();
if(cljs.core.truth_(inst_24937__$1)){
var statearr_24962_24981 = state_24957__$1;
(statearr_24962_24981[(1)] = (5));

} else {
var statearr_24963_24982 = state_24957__$1;
(statearr_24963_24982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (6))){
var state_24957__$1 = state_24957;
var statearr_24964_24983 = state_24957__$1;
(statearr_24964_24983[(2)] = null);

(statearr_24964_24983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (3))){
var inst_24955 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24957__$1,inst_24955);
} else {
if((state_val_24958 === (2))){
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24957__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24958 === (11))){
var inst_24949 = (state_24957[(2)]);
var state_24957__$1 = (function (){var statearr_24965 = state_24957;
(statearr_24965[(8)] = inst_24949);

return statearr_24965;
})();
var statearr_24966_24984 = state_24957__$1;
(statearr_24966_24984[(2)] = null);

(statearr_24966_24984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (9))){
var inst_24943 = (state_24957[(9)]);
var inst_24941 = (state_24957[(10)]);
var inst_24945 = inst_24943.call(null,inst_24941);
var state_24957__$1 = state_24957;
var statearr_24967_24985 = state_24957__$1;
(statearr_24967_24985[(2)] = inst_24945);

(statearr_24967_24985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (5))){
var inst_24937 = (state_24957[(7)]);
var inst_24939 = figwheel.client.file_reloading.blocking_load.call(null,inst_24937);
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24957__$1,(8),inst_24939);
} else {
if((state_val_24958 === (10))){
var inst_24941 = (state_24957[(10)]);
var inst_24947 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24941);
var state_24957__$1 = state_24957;
var statearr_24968_24986 = state_24957__$1;
(statearr_24968_24986[(2)] = inst_24947);

(statearr_24968_24986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (8))){
var inst_24943 = (state_24957[(9)]);
var inst_24937 = (state_24957[(7)]);
var inst_24941 = (state_24957[(2)]);
var inst_24942 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24943__$1 = cljs.core.get.call(null,inst_24942,inst_24937);
var state_24957__$1 = (function (){var statearr_24969 = state_24957;
(statearr_24969[(9)] = inst_24943__$1);

(statearr_24969[(10)] = inst_24941);

return statearr_24969;
})();
if(cljs.core.truth_(inst_24943__$1)){
var statearr_24970_24987 = state_24957__$1;
(statearr_24970_24987[(1)] = (9));

} else {
var statearr_24971_24988 = state_24957__$1;
(statearr_24971_24988[(1)] = (10));

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
});})(c__21895__auto__))
;
return ((function (switch__21783__auto__,c__21895__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21784__auto__ = null;
var figwheel$client$file_reloading$state_machine__21784__auto____0 = (function (){
var statearr_24975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24975[(0)] = figwheel$client$file_reloading$state_machine__21784__auto__);

(statearr_24975[(1)] = (1));

return statearr_24975;
});
var figwheel$client$file_reloading$state_machine__21784__auto____1 = (function (state_24957){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_24957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e24976){if((e24976 instanceof Object)){
var ex__21787__auto__ = e24976;
var statearr_24977_24989 = state_24957;
(statearr_24977_24989[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24990 = state_24957;
state_24957 = G__24990;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21784__auto__ = function(state_24957){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21784__auto____1.call(this,state_24957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21784__auto____0;
figwheel$client$file_reloading$state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21784__auto____1;
return figwheel$client$file_reloading$state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto__))
})();
var state__21897__auto__ = (function (){var statearr_24978 = f__21896__auto__.call(null);
(statearr_24978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto__);

return statearr_24978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto__))
);

return c__21895__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24991,callback){
var map__24994 = p__24991;
var map__24994__$1 = ((((!((map__24994 == null)))?((((map__24994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24994):map__24994);
var file_msg = map__24994__$1;
var namespace = cljs.core.get.call(null,map__24994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24994,map__24994__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24994,map__24994__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24996){
var map__24999 = p__24996;
var map__24999__$1 = ((((!((map__24999 == null)))?((((map__24999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24999):map__24999);
var file_msg = map__24999__$1;
var namespace = cljs.core.get.call(null,map__24999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25001,callback){
var map__25004 = p__25001;
var map__25004__$1 = ((((!((map__25004 == null)))?((((map__25004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25004):map__25004);
var file_msg = map__25004__$1;
var request_url = cljs.core.get.call(null,map__25004__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21895__auto___25092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto___25092,out){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto___25092,out){
return (function (state_25074){
var state_val_25075 = (state_25074[(1)]);
if((state_val_25075 === (1))){
var inst_25052 = cljs.core.nth.call(null,files,(0),null);
var inst_25053 = cljs.core.nthnext.call(null,files,(1));
var inst_25054 = files;
var state_25074__$1 = (function (){var statearr_25076 = state_25074;
(statearr_25076[(7)] = inst_25054);

(statearr_25076[(8)] = inst_25053);

(statearr_25076[(9)] = inst_25052);

return statearr_25076;
})();
var statearr_25077_25093 = state_25074__$1;
(statearr_25077_25093[(2)] = null);

(statearr_25077_25093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (2))){
var inst_25054 = (state_25074[(7)]);
var inst_25057 = (state_25074[(10)]);
var inst_25057__$1 = cljs.core.nth.call(null,inst_25054,(0),null);
var inst_25058 = cljs.core.nthnext.call(null,inst_25054,(1));
var inst_25059 = (inst_25057__$1 == null);
var inst_25060 = cljs.core.not.call(null,inst_25059);
var state_25074__$1 = (function (){var statearr_25078 = state_25074;
(statearr_25078[(10)] = inst_25057__$1);

(statearr_25078[(11)] = inst_25058);

return statearr_25078;
})();
if(inst_25060){
var statearr_25079_25094 = state_25074__$1;
(statearr_25079_25094[(1)] = (4));

} else {
var statearr_25080_25095 = state_25074__$1;
(statearr_25080_25095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (3))){
var inst_25072 = (state_25074[(2)]);
var state_25074__$1 = state_25074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25074__$1,inst_25072);
} else {
if((state_val_25075 === (4))){
var inst_25057 = (state_25074[(10)]);
var inst_25062 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25057);
var state_25074__$1 = state_25074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25074__$1,(7),inst_25062);
} else {
if((state_val_25075 === (5))){
var inst_25068 = cljs.core.async.close_BANG_.call(null,out);
var state_25074__$1 = state_25074;
var statearr_25081_25096 = state_25074__$1;
(statearr_25081_25096[(2)] = inst_25068);

(statearr_25081_25096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (6))){
var inst_25070 = (state_25074[(2)]);
var state_25074__$1 = state_25074;
var statearr_25082_25097 = state_25074__$1;
(statearr_25082_25097[(2)] = inst_25070);

(statearr_25082_25097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (7))){
var inst_25058 = (state_25074[(11)]);
var inst_25064 = (state_25074[(2)]);
var inst_25065 = cljs.core.async.put_BANG_.call(null,out,inst_25064);
var inst_25054 = inst_25058;
var state_25074__$1 = (function (){var statearr_25083 = state_25074;
(statearr_25083[(7)] = inst_25054);

(statearr_25083[(12)] = inst_25065);

return statearr_25083;
})();
var statearr_25084_25098 = state_25074__$1;
(statearr_25084_25098[(2)] = null);

(statearr_25084_25098[(1)] = (2));


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
});})(c__21895__auto___25092,out))
;
return ((function (switch__21783__auto__,c__21895__auto___25092,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto____0 = (function (){
var statearr_25088 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25088[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto__);

(statearr_25088[(1)] = (1));

return statearr_25088;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto____1 = (function (state_25074){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_25074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e25089){if((e25089 instanceof Object)){
var ex__21787__auto__ = e25089;
var statearr_25090_25099 = state_25074;
(statearr_25090_25099[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25100 = state_25074;
state_25074 = G__25100;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto__ = function(state_25074){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto____1.call(this,state_25074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto___25092,out))
})();
var state__21897__auto__ = (function (){var statearr_25091 = f__21896__auto__.call(null);
(statearr_25091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto___25092);

return statearr_25091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto___25092,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25101,opts){
var map__25105 = p__25101;
var map__25105__$1 = ((((!((map__25105 == null)))?((((map__25105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25105):map__25105);
var eval_body__$1 = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25107){var e = e25107;
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
return (function (p1__25108_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25108_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25113){
var vec__25114 = p__25113;
var k = cljs.core.nth.call(null,vec__25114,(0),null);
var v = cljs.core.nth.call(null,vec__25114,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25115){
var vec__25116 = p__25115;
var k = cljs.core.nth.call(null,vec__25116,(0),null);
var v = cljs.core.nth.call(null,vec__25116,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25120,p__25121){
var map__25368 = p__25120;
var map__25368__$1 = ((((!((map__25368 == null)))?((((map__25368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25368):map__25368);
var opts = map__25368__$1;
var before_jsload = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25369 = p__25121;
var map__25369__$1 = ((((!((map__25369 == null)))?((((map__25369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25369):map__25369);
var msg = map__25369__$1;
var files = cljs.core.get.call(null,map__25369__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25369__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25369__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21896__auto__ = (function (){var switch__21783__auto__ = ((function (c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25522){
var state_val_25523 = (state_25522[(1)]);
if((state_val_25523 === (7))){
var inst_25384 = (state_25522[(7)]);
var inst_25383 = (state_25522[(8)]);
var inst_25385 = (state_25522[(9)]);
var inst_25386 = (state_25522[(10)]);
var inst_25391 = cljs.core._nth.call(null,inst_25384,inst_25386);
var inst_25392 = figwheel.client.file_reloading.eval_body.call(null,inst_25391,opts);
var inst_25393 = (inst_25386 + (1));
var tmp25524 = inst_25384;
var tmp25525 = inst_25383;
var tmp25526 = inst_25385;
var inst_25383__$1 = tmp25525;
var inst_25384__$1 = tmp25524;
var inst_25385__$1 = tmp25526;
var inst_25386__$1 = inst_25393;
var state_25522__$1 = (function (){var statearr_25527 = state_25522;
(statearr_25527[(7)] = inst_25384__$1);

(statearr_25527[(8)] = inst_25383__$1);

(statearr_25527[(9)] = inst_25385__$1);

(statearr_25527[(11)] = inst_25392);

(statearr_25527[(10)] = inst_25386__$1);

return statearr_25527;
})();
var statearr_25528_25614 = state_25522__$1;
(statearr_25528_25614[(2)] = null);

(statearr_25528_25614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (20))){
var inst_25426 = (state_25522[(12)]);
var inst_25434 = figwheel.client.file_reloading.sort_files.call(null,inst_25426);
var state_25522__$1 = state_25522;
var statearr_25529_25615 = state_25522__$1;
(statearr_25529_25615[(2)] = inst_25434);

(statearr_25529_25615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (27))){
var state_25522__$1 = state_25522;
var statearr_25530_25616 = state_25522__$1;
(statearr_25530_25616[(2)] = null);

(statearr_25530_25616[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (1))){
var inst_25375 = (state_25522[(13)]);
var inst_25372 = before_jsload.call(null,files);
var inst_25373 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25374 = (function (){return ((function (inst_25375,inst_25372,inst_25373,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25117_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25117_SHARP_);
});
;})(inst_25375,inst_25372,inst_25373,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25375__$1 = cljs.core.filter.call(null,inst_25374,files);
var inst_25376 = cljs.core.not_empty.call(null,inst_25375__$1);
var state_25522__$1 = (function (){var statearr_25531 = state_25522;
(statearr_25531[(13)] = inst_25375__$1);

(statearr_25531[(14)] = inst_25372);

(statearr_25531[(15)] = inst_25373);

return statearr_25531;
})();
if(cljs.core.truth_(inst_25376)){
var statearr_25532_25617 = state_25522__$1;
(statearr_25532_25617[(1)] = (2));

} else {
var statearr_25533_25618 = state_25522__$1;
(statearr_25533_25618[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (24))){
var state_25522__$1 = state_25522;
var statearr_25534_25619 = state_25522__$1;
(statearr_25534_25619[(2)] = null);

(statearr_25534_25619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (39))){
var inst_25476 = (state_25522[(16)]);
var state_25522__$1 = state_25522;
var statearr_25535_25620 = state_25522__$1;
(statearr_25535_25620[(2)] = inst_25476);

(statearr_25535_25620[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (46))){
var inst_25517 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25536_25621 = state_25522__$1;
(statearr_25536_25621[(2)] = inst_25517);

(statearr_25536_25621[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (4))){
var inst_25420 = (state_25522[(2)]);
var inst_25421 = cljs.core.List.EMPTY;
var inst_25422 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25421);
var inst_25423 = (function (){return ((function (inst_25420,inst_25421,inst_25422,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25118_SHARP_){
var and__16829__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25118_SHARP_);
if(cljs.core.truth_(and__16829__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25118_SHARP_));
} else {
return and__16829__auto__;
}
});
;})(inst_25420,inst_25421,inst_25422,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25424 = cljs.core.filter.call(null,inst_25423,files);
var inst_25425 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25426 = cljs.core.concat.call(null,inst_25424,inst_25425);
var state_25522__$1 = (function (){var statearr_25537 = state_25522;
(statearr_25537[(17)] = inst_25422);

(statearr_25537[(18)] = inst_25420);

(statearr_25537[(12)] = inst_25426);

return statearr_25537;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25538_25622 = state_25522__$1;
(statearr_25538_25622[(1)] = (16));

} else {
var statearr_25539_25623 = state_25522__$1;
(statearr_25539_25623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (15))){
var inst_25410 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25540_25624 = state_25522__$1;
(statearr_25540_25624[(2)] = inst_25410);

(statearr_25540_25624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (21))){
var inst_25436 = (state_25522[(19)]);
var inst_25436__$1 = (state_25522[(2)]);
var inst_25437 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25436__$1);
var state_25522__$1 = (function (){var statearr_25541 = state_25522;
(statearr_25541[(19)] = inst_25436__$1);

return statearr_25541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25522__$1,(22),inst_25437);
} else {
if((state_val_25523 === (31))){
var inst_25520 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25522__$1,inst_25520);
} else {
if((state_val_25523 === (32))){
var inst_25476 = (state_25522[(16)]);
var inst_25481 = inst_25476.cljs$lang$protocol_mask$partition0$;
var inst_25482 = (inst_25481 & (64));
var inst_25483 = inst_25476.cljs$core$ISeq$;
var inst_25484 = (inst_25482) || (inst_25483);
var state_25522__$1 = state_25522;
if(cljs.core.truth_(inst_25484)){
var statearr_25542_25625 = state_25522__$1;
(statearr_25542_25625[(1)] = (35));

} else {
var statearr_25543_25626 = state_25522__$1;
(statearr_25543_25626[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (40))){
var inst_25497 = (state_25522[(20)]);
var inst_25496 = (state_25522[(2)]);
var inst_25497__$1 = cljs.core.get.call(null,inst_25496,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25498 = cljs.core.get.call(null,inst_25496,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25499 = cljs.core.not_empty.call(null,inst_25497__$1);
var state_25522__$1 = (function (){var statearr_25544 = state_25522;
(statearr_25544[(21)] = inst_25498);

(statearr_25544[(20)] = inst_25497__$1);

return statearr_25544;
})();
if(cljs.core.truth_(inst_25499)){
var statearr_25545_25627 = state_25522__$1;
(statearr_25545_25627[(1)] = (41));

} else {
var statearr_25546_25628 = state_25522__$1;
(statearr_25546_25628[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (33))){
var state_25522__$1 = state_25522;
var statearr_25547_25629 = state_25522__$1;
(statearr_25547_25629[(2)] = false);

(statearr_25547_25629[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (13))){
var inst_25396 = (state_25522[(22)]);
var inst_25400 = cljs.core.chunk_first.call(null,inst_25396);
var inst_25401 = cljs.core.chunk_rest.call(null,inst_25396);
var inst_25402 = cljs.core.count.call(null,inst_25400);
var inst_25383 = inst_25401;
var inst_25384 = inst_25400;
var inst_25385 = inst_25402;
var inst_25386 = (0);
var state_25522__$1 = (function (){var statearr_25548 = state_25522;
(statearr_25548[(7)] = inst_25384);

(statearr_25548[(8)] = inst_25383);

(statearr_25548[(9)] = inst_25385);

(statearr_25548[(10)] = inst_25386);

return statearr_25548;
})();
var statearr_25549_25630 = state_25522__$1;
(statearr_25549_25630[(2)] = null);

(statearr_25549_25630[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (22))){
var inst_25436 = (state_25522[(19)]);
var inst_25440 = (state_25522[(23)]);
var inst_25439 = (state_25522[(24)]);
var inst_25444 = (state_25522[(25)]);
var inst_25439__$1 = (state_25522[(2)]);
var inst_25440__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25439__$1);
var inst_25441 = (function (){var all_files = inst_25436;
var res_SINGLEQUOTE_ = inst_25439__$1;
var res = inst_25440__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25436,inst_25440,inst_25439,inst_25444,inst_25439__$1,inst_25440__$1,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25119_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25119_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25436,inst_25440,inst_25439,inst_25444,inst_25439__$1,inst_25440__$1,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25442 = cljs.core.filter.call(null,inst_25441,inst_25439__$1);
var inst_25443 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25444__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25443);
var inst_25445 = cljs.core.not_empty.call(null,inst_25444__$1);
var state_25522__$1 = (function (){var statearr_25550 = state_25522;
(statearr_25550[(23)] = inst_25440__$1);

(statearr_25550[(26)] = inst_25442);

(statearr_25550[(24)] = inst_25439__$1);

(statearr_25550[(25)] = inst_25444__$1);

return statearr_25550;
})();
if(cljs.core.truth_(inst_25445)){
var statearr_25551_25631 = state_25522__$1;
(statearr_25551_25631[(1)] = (23));

} else {
var statearr_25552_25632 = state_25522__$1;
(statearr_25552_25632[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (36))){
var state_25522__$1 = state_25522;
var statearr_25553_25633 = state_25522__$1;
(statearr_25553_25633[(2)] = false);

(statearr_25553_25633[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (41))){
var inst_25497 = (state_25522[(20)]);
var inst_25501 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25502 = cljs.core.map.call(null,inst_25501,inst_25497);
var inst_25503 = cljs.core.pr_str.call(null,inst_25502);
var inst_25504 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25503)].join('');
var inst_25505 = figwheel.client.utils.log.call(null,inst_25504);
var state_25522__$1 = state_25522;
var statearr_25554_25634 = state_25522__$1;
(statearr_25554_25634[(2)] = inst_25505);

(statearr_25554_25634[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (43))){
var inst_25498 = (state_25522[(21)]);
var inst_25508 = (state_25522[(2)]);
var inst_25509 = cljs.core.not_empty.call(null,inst_25498);
var state_25522__$1 = (function (){var statearr_25555 = state_25522;
(statearr_25555[(27)] = inst_25508);

return statearr_25555;
})();
if(cljs.core.truth_(inst_25509)){
var statearr_25556_25635 = state_25522__$1;
(statearr_25556_25635[(1)] = (44));

} else {
var statearr_25557_25636 = state_25522__$1;
(statearr_25557_25636[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (29))){
var inst_25436 = (state_25522[(19)]);
var inst_25440 = (state_25522[(23)]);
var inst_25442 = (state_25522[(26)]);
var inst_25476 = (state_25522[(16)]);
var inst_25439 = (state_25522[(24)]);
var inst_25444 = (state_25522[(25)]);
var inst_25472 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25475 = (function (){var all_files = inst_25436;
var res_SINGLEQUOTE_ = inst_25439;
var res = inst_25440;
var files_not_loaded = inst_25442;
var dependencies_that_loaded = inst_25444;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25436,inst_25440,inst_25442,inst_25476,inst_25439,inst_25444,inst_25472,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25474){
var map__25558 = p__25474;
var map__25558__$1 = ((((!((map__25558 == null)))?((((map__25558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25558):map__25558);
var namespace = cljs.core.get.call(null,map__25558__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25436,inst_25440,inst_25442,inst_25476,inst_25439,inst_25444,inst_25472,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25476__$1 = cljs.core.group_by.call(null,inst_25475,inst_25442);
var inst_25478 = (inst_25476__$1 == null);
var inst_25479 = cljs.core.not.call(null,inst_25478);
var state_25522__$1 = (function (){var statearr_25560 = state_25522;
(statearr_25560[(16)] = inst_25476__$1);

(statearr_25560[(28)] = inst_25472);

return statearr_25560;
})();
if(inst_25479){
var statearr_25561_25637 = state_25522__$1;
(statearr_25561_25637[(1)] = (32));

} else {
var statearr_25562_25638 = state_25522__$1;
(statearr_25562_25638[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (44))){
var inst_25498 = (state_25522[(21)]);
var inst_25511 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25498);
var inst_25512 = cljs.core.pr_str.call(null,inst_25511);
var inst_25513 = [cljs.core.str("not required: "),cljs.core.str(inst_25512)].join('');
var inst_25514 = figwheel.client.utils.log.call(null,inst_25513);
var state_25522__$1 = state_25522;
var statearr_25563_25639 = state_25522__$1;
(statearr_25563_25639[(2)] = inst_25514);

(statearr_25563_25639[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (6))){
var inst_25417 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25564_25640 = state_25522__$1;
(statearr_25564_25640[(2)] = inst_25417);

(statearr_25564_25640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (28))){
var inst_25442 = (state_25522[(26)]);
var inst_25469 = (state_25522[(2)]);
var inst_25470 = cljs.core.not_empty.call(null,inst_25442);
var state_25522__$1 = (function (){var statearr_25565 = state_25522;
(statearr_25565[(29)] = inst_25469);

return statearr_25565;
})();
if(cljs.core.truth_(inst_25470)){
var statearr_25566_25641 = state_25522__$1;
(statearr_25566_25641[(1)] = (29));

} else {
var statearr_25567_25642 = state_25522__$1;
(statearr_25567_25642[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (25))){
var inst_25440 = (state_25522[(23)]);
var inst_25456 = (state_25522[(2)]);
var inst_25457 = cljs.core.not_empty.call(null,inst_25440);
var state_25522__$1 = (function (){var statearr_25568 = state_25522;
(statearr_25568[(30)] = inst_25456);

return statearr_25568;
})();
if(cljs.core.truth_(inst_25457)){
var statearr_25569_25643 = state_25522__$1;
(statearr_25569_25643[(1)] = (26));

} else {
var statearr_25570_25644 = state_25522__$1;
(statearr_25570_25644[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (34))){
var inst_25491 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
if(cljs.core.truth_(inst_25491)){
var statearr_25571_25645 = state_25522__$1;
(statearr_25571_25645[(1)] = (38));

} else {
var statearr_25572_25646 = state_25522__$1;
(statearr_25572_25646[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (17))){
var state_25522__$1 = state_25522;
var statearr_25573_25647 = state_25522__$1;
(statearr_25573_25647[(2)] = recompile_dependents);

(statearr_25573_25647[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (3))){
var state_25522__$1 = state_25522;
var statearr_25574_25648 = state_25522__$1;
(statearr_25574_25648[(2)] = null);

(statearr_25574_25648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (12))){
var inst_25413 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25575_25649 = state_25522__$1;
(statearr_25575_25649[(2)] = inst_25413);

(statearr_25575_25649[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (2))){
var inst_25375 = (state_25522[(13)]);
var inst_25382 = cljs.core.seq.call(null,inst_25375);
var inst_25383 = inst_25382;
var inst_25384 = null;
var inst_25385 = (0);
var inst_25386 = (0);
var state_25522__$1 = (function (){var statearr_25576 = state_25522;
(statearr_25576[(7)] = inst_25384);

(statearr_25576[(8)] = inst_25383);

(statearr_25576[(9)] = inst_25385);

(statearr_25576[(10)] = inst_25386);

return statearr_25576;
})();
var statearr_25577_25650 = state_25522__$1;
(statearr_25577_25650[(2)] = null);

(statearr_25577_25650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (23))){
var inst_25436 = (state_25522[(19)]);
var inst_25440 = (state_25522[(23)]);
var inst_25442 = (state_25522[(26)]);
var inst_25439 = (state_25522[(24)]);
var inst_25444 = (state_25522[(25)]);
var inst_25447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25449 = (function (){var all_files = inst_25436;
var res_SINGLEQUOTE_ = inst_25439;
var res = inst_25440;
var files_not_loaded = inst_25442;
var dependencies_that_loaded = inst_25444;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25436,inst_25440,inst_25442,inst_25439,inst_25444,inst_25447,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25448){
var map__25578 = p__25448;
var map__25578__$1 = ((((!((map__25578 == null)))?((((map__25578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25578):map__25578);
var request_url = cljs.core.get.call(null,map__25578__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25436,inst_25440,inst_25442,inst_25439,inst_25444,inst_25447,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25450 = cljs.core.reverse.call(null,inst_25444);
var inst_25451 = cljs.core.map.call(null,inst_25449,inst_25450);
var inst_25452 = cljs.core.pr_str.call(null,inst_25451);
var inst_25453 = figwheel.client.utils.log.call(null,inst_25452);
var state_25522__$1 = (function (){var statearr_25580 = state_25522;
(statearr_25580[(31)] = inst_25447);

return statearr_25580;
})();
var statearr_25581_25651 = state_25522__$1;
(statearr_25581_25651[(2)] = inst_25453);

(statearr_25581_25651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (35))){
var state_25522__$1 = state_25522;
var statearr_25582_25652 = state_25522__$1;
(statearr_25582_25652[(2)] = true);

(statearr_25582_25652[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (19))){
var inst_25426 = (state_25522[(12)]);
var inst_25432 = figwheel.client.file_reloading.expand_files.call(null,inst_25426);
var state_25522__$1 = state_25522;
var statearr_25583_25653 = state_25522__$1;
(statearr_25583_25653[(2)] = inst_25432);

(statearr_25583_25653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (11))){
var state_25522__$1 = state_25522;
var statearr_25584_25654 = state_25522__$1;
(statearr_25584_25654[(2)] = null);

(statearr_25584_25654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (9))){
var inst_25415 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25585_25655 = state_25522__$1;
(statearr_25585_25655[(2)] = inst_25415);

(statearr_25585_25655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (5))){
var inst_25385 = (state_25522[(9)]);
var inst_25386 = (state_25522[(10)]);
var inst_25388 = (inst_25386 < inst_25385);
var inst_25389 = inst_25388;
var state_25522__$1 = state_25522;
if(cljs.core.truth_(inst_25389)){
var statearr_25586_25656 = state_25522__$1;
(statearr_25586_25656[(1)] = (7));

} else {
var statearr_25587_25657 = state_25522__$1;
(statearr_25587_25657[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (14))){
var inst_25396 = (state_25522[(22)]);
var inst_25405 = cljs.core.first.call(null,inst_25396);
var inst_25406 = figwheel.client.file_reloading.eval_body.call(null,inst_25405,opts);
var inst_25407 = cljs.core.next.call(null,inst_25396);
var inst_25383 = inst_25407;
var inst_25384 = null;
var inst_25385 = (0);
var inst_25386 = (0);
var state_25522__$1 = (function (){var statearr_25588 = state_25522;
(statearr_25588[(7)] = inst_25384);

(statearr_25588[(8)] = inst_25383);

(statearr_25588[(9)] = inst_25385);

(statearr_25588[(32)] = inst_25406);

(statearr_25588[(10)] = inst_25386);

return statearr_25588;
})();
var statearr_25589_25658 = state_25522__$1;
(statearr_25589_25658[(2)] = null);

(statearr_25589_25658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (45))){
var state_25522__$1 = state_25522;
var statearr_25590_25659 = state_25522__$1;
(statearr_25590_25659[(2)] = null);

(statearr_25590_25659[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (26))){
var inst_25436 = (state_25522[(19)]);
var inst_25440 = (state_25522[(23)]);
var inst_25442 = (state_25522[(26)]);
var inst_25439 = (state_25522[(24)]);
var inst_25444 = (state_25522[(25)]);
var inst_25459 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25461 = (function (){var all_files = inst_25436;
var res_SINGLEQUOTE_ = inst_25439;
var res = inst_25440;
var files_not_loaded = inst_25442;
var dependencies_that_loaded = inst_25444;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25436,inst_25440,inst_25442,inst_25439,inst_25444,inst_25459,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25460){
var map__25591 = p__25460;
var map__25591__$1 = ((((!((map__25591 == null)))?((((map__25591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25591):map__25591);
var namespace = cljs.core.get.call(null,map__25591__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25591__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25436,inst_25440,inst_25442,inst_25439,inst_25444,inst_25459,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25462 = cljs.core.map.call(null,inst_25461,inst_25440);
var inst_25463 = cljs.core.pr_str.call(null,inst_25462);
var inst_25464 = figwheel.client.utils.log.call(null,inst_25463);
var inst_25465 = (function (){var all_files = inst_25436;
var res_SINGLEQUOTE_ = inst_25439;
var res = inst_25440;
var files_not_loaded = inst_25442;
var dependencies_that_loaded = inst_25444;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25436,inst_25440,inst_25442,inst_25439,inst_25444,inst_25459,inst_25461,inst_25462,inst_25463,inst_25464,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25436,inst_25440,inst_25442,inst_25439,inst_25444,inst_25459,inst_25461,inst_25462,inst_25463,inst_25464,state_val_25523,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25466 = setTimeout(inst_25465,(10));
var state_25522__$1 = (function (){var statearr_25593 = state_25522;
(statearr_25593[(33)] = inst_25459);

(statearr_25593[(34)] = inst_25464);

return statearr_25593;
})();
var statearr_25594_25660 = state_25522__$1;
(statearr_25594_25660[(2)] = inst_25466);

(statearr_25594_25660[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (16))){
var state_25522__$1 = state_25522;
var statearr_25595_25661 = state_25522__$1;
(statearr_25595_25661[(2)] = reload_dependents);

(statearr_25595_25661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (38))){
var inst_25476 = (state_25522[(16)]);
var inst_25493 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25476);
var state_25522__$1 = state_25522;
var statearr_25596_25662 = state_25522__$1;
(statearr_25596_25662[(2)] = inst_25493);

(statearr_25596_25662[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (30))){
var state_25522__$1 = state_25522;
var statearr_25597_25663 = state_25522__$1;
(statearr_25597_25663[(2)] = null);

(statearr_25597_25663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (10))){
var inst_25396 = (state_25522[(22)]);
var inst_25398 = cljs.core.chunked_seq_QMARK_.call(null,inst_25396);
var state_25522__$1 = state_25522;
if(inst_25398){
var statearr_25598_25664 = state_25522__$1;
(statearr_25598_25664[(1)] = (13));

} else {
var statearr_25599_25665 = state_25522__$1;
(statearr_25599_25665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (18))){
var inst_25430 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
if(cljs.core.truth_(inst_25430)){
var statearr_25600_25666 = state_25522__$1;
(statearr_25600_25666[(1)] = (19));

} else {
var statearr_25601_25667 = state_25522__$1;
(statearr_25601_25667[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (42))){
var state_25522__$1 = state_25522;
var statearr_25602_25668 = state_25522__$1;
(statearr_25602_25668[(2)] = null);

(statearr_25602_25668[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (37))){
var inst_25488 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25603_25669 = state_25522__$1;
(statearr_25603_25669[(2)] = inst_25488);

(statearr_25603_25669[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (8))){
var inst_25383 = (state_25522[(8)]);
var inst_25396 = (state_25522[(22)]);
var inst_25396__$1 = cljs.core.seq.call(null,inst_25383);
var state_25522__$1 = (function (){var statearr_25604 = state_25522;
(statearr_25604[(22)] = inst_25396__$1);

return statearr_25604;
})();
if(inst_25396__$1){
var statearr_25605_25670 = state_25522__$1;
(statearr_25605_25670[(1)] = (10));

} else {
var statearr_25606_25671 = state_25522__$1;
(statearr_25606_25671[(1)] = (11));

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
});})(c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21783__auto__,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto____0 = (function (){
var statearr_25610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25610[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto__);

(statearr_25610[(1)] = (1));

return statearr_25610;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto____1 = (function (state_25522){
while(true){
var ret_value__21785__auto__ = (function (){try{while(true){
var result__21786__auto__ = switch__21783__auto__.call(null,state_25522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21786__auto__;
}
break;
}
}catch (e25611){if((e25611 instanceof Object)){
var ex__21787__auto__ = e25611;
var statearr_25612_25672 = state_25522;
(statearr_25612_25672[(5)] = ex__21787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25673 = state_25522;
state_25522 = G__25673;
continue;
} else {
return ret_value__21785__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto__ = function(state_25522){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto____1.call(this,state_25522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21784__auto__;
})()
;})(switch__21783__auto__,c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21897__auto__ = (function (){var statearr_25613 = f__21896__auto__.call(null);
(statearr_25613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21895__auto__);

return statearr_25613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21897__auto__);
});})(c__21895__auto__,map__25368,map__25368__$1,opts,before_jsload,on_jsload,reload_dependents,map__25369,map__25369__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21895__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25676,link){
var map__25679 = p__25676;
var map__25679__$1 = ((((!((map__25679 == null)))?((((map__25679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25679):map__25679);
var file = cljs.core.get.call(null,map__25679__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25679,map__25679__$1,file){
return (function (p1__25674_SHARP_,p2__25675_SHARP_){
if(cljs.core._EQ_.call(null,p1__25674_SHARP_,p2__25675_SHARP_)){
return p1__25674_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25679,map__25679__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25685){
var map__25686 = p__25685;
var map__25686__$1 = ((((!((map__25686 == null)))?((((map__25686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25686):map__25686);
var match_length = cljs.core.get.call(null,map__25686__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25686__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25681_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25681_SHARP_);
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
var args25688 = [];
var len__17899__auto___25691 = arguments.length;
var i__17900__auto___25692 = (0);
while(true){
if((i__17900__auto___25692 < len__17899__auto___25691)){
args25688.push((arguments[i__17900__auto___25692]));

var G__25693 = (i__17900__auto___25692 + (1));
i__17900__auto___25692 = G__25693;
continue;
} else {
}
break;
}

var G__25690 = args25688.length;
switch (G__25690) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25688.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25695_SHARP_,p2__25696_SHARP_){
return cljs.core.assoc.call(null,p1__25695_SHARP_,cljs.core.get.call(null,p2__25696_SHARP_,key),p2__25696_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25697){
var map__25700 = p__25697;
var map__25700__$1 = ((((!((map__25700 == null)))?((((map__25700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25700):map__25700);
var f_data = map__25700__$1;
var file = cljs.core.get.call(null,map__25700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25702,files_msg){
var map__25709 = p__25702;
var map__25709__$1 = ((((!((map__25709 == null)))?((((map__25709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25709):map__25709);
var opts = map__25709__$1;
var on_cssload = cljs.core.get.call(null,map__25709__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25711_25715 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25712_25716 = null;
var count__25713_25717 = (0);
var i__25714_25718 = (0);
while(true){
if((i__25714_25718 < count__25713_25717)){
var f_25719 = cljs.core._nth.call(null,chunk__25712_25716,i__25714_25718);
figwheel.client.file_reloading.reload_css_file.call(null,f_25719);

var G__25720 = seq__25711_25715;
var G__25721 = chunk__25712_25716;
var G__25722 = count__25713_25717;
var G__25723 = (i__25714_25718 + (1));
seq__25711_25715 = G__25720;
chunk__25712_25716 = G__25721;
count__25713_25717 = G__25722;
i__25714_25718 = G__25723;
continue;
} else {
var temp__4425__auto___25724 = cljs.core.seq.call(null,seq__25711_25715);
if(temp__4425__auto___25724){
var seq__25711_25725__$1 = temp__4425__auto___25724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25711_25725__$1)){
var c__17644__auto___25726 = cljs.core.chunk_first.call(null,seq__25711_25725__$1);
var G__25727 = cljs.core.chunk_rest.call(null,seq__25711_25725__$1);
var G__25728 = c__17644__auto___25726;
var G__25729 = cljs.core.count.call(null,c__17644__auto___25726);
var G__25730 = (0);
seq__25711_25715 = G__25727;
chunk__25712_25716 = G__25728;
count__25713_25717 = G__25729;
i__25714_25718 = G__25730;
continue;
} else {
var f_25731 = cljs.core.first.call(null,seq__25711_25725__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25731);

var G__25732 = cljs.core.next.call(null,seq__25711_25725__$1);
var G__25733 = null;
var G__25734 = (0);
var G__25735 = (0);
seq__25711_25715 = G__25732;
chunk__25712_25716 = G__25733;
count__25713_25717 = G__25734;
i__25714_25718 = G__25735;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25709,map__25709__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25709,map__25709__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map