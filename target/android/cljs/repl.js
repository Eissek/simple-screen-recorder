// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25752_25766 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25753_25767 = null;
var count__25754_25768 = (0);
var i__25755_25769 = (0);
while(true){
if((i__25755_25769 < count__25754_25768)){
var f_25770 = cljs.core._nth.call(null,chunk__25753_25767,i__25755_25769);
cljs.core.println.call(null,"  ",f_25770);

var G__25771 = seq__25752_25766;
var G__25772 = chunk__25753_25767;
var G__25773 = count__25754_25768;
var G__25774 = (i__25755_25769 + (1));
seq__25752_25766 = G__25771;
chunk__25753_25767 = G__25772;
count__25754_25768 = G__25773;
i__25755_25769 = G__25774;
continue;
} else {
var temp__4425__auto___25775 = cljs.core.seq.call(null,seq__25752_25766);
if(temp__4425__auto___25775){
var seq__25752_25776__$1 = temp__4425__auto___25775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25752_25776__$1)){
var c__17644__auto___25777 = cljs.core.chunk_first.call(null,seq__25752_25776__$1);
var G__25778 = cljs.core.chunk_rest.call(null,seq__25752_25776__$1);
var G__25779 = c__17644__auto___25777;
var G__25780 = cljs.core.count.call(null,c__17644__auto___25777);
var G__25781 = (0);
seq__25752_25766 = G__25778;
chunk__25753_25767 = G__25779;
count__25754_25768 = G__25780;
i__25755_25769 = G__25781;
continue;
} else {
var f_25782 = cljs.core.first.call(null,seq__25752_25776__$1);
cljs.core.println.call(null,"  ",f_25782);

var G__25783 = cljs.core.next.call(null,seq__25752_25776__$1);
var G__25784 = null;
var G__25785 = (0);
var G__25786 = (0);
seq__25752_25766 = G__25783;
chunk__25753_25767 = G__25784;
count__25754_25768 = G__25785;
i__25755_25769 = G__25786;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25787 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16841__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25787);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25787)))?cljs.core.second.call(null,arglists_25787):arglists_25787));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25756 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25757 = null;
var count__25758 = (0);
var i__25759 = (0);
while(true){
if((i__25759 < count__25758)){
var vec__25760 = cljs.core._nth.call(null,chunk__25757,i__25759);
var name = cljs.core.nth.call(null,vec__25760,(0),null);
var map__25761 = cljs.core.nth.call(null,vec__25760,(1),null);
var map__25761__$1 = ((((!((map__25761 == null)))?((((map__25761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25761):map__25761);
var doc = cljs.core.get.call(null,map__25761__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25761__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25788 = seq__25756;
var G__25789 = chunk__25757;
var G__25790 = count__25758;
var G__25791 = (i__25759 + (1));
seq__25756 = G__25788;
chunk__25757 = G__25789;
count__25758 = G__25790;
i__25759 = G__25791;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25756);
if(temp__4425__auto__){
var seq__25756__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25756__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__25756__$1);
var G__25792 = cljs.core.chunk_rest.call(null,seq__25756__$1);
var G__25793 = c__17644__auto__;
var G__25794 = cljs.core.count.call(null,c__17644__auto__);
var G__25795 = (0);
seq__25756 = G__25792;
chunk__25757 = G__25793;
count__25758 = G__25794;
i__25759 = G__25795;
continue;
} else {
var vec__25763 = cljs.core.first.call(null,seq__25756__$1);
var name = cljs.core.nth.call(null,vec__25763,(0),null);
var map__25764 = cljs.core.nth.call(null,vec__25763,(1),null);
var map__25764__$1 = ((((!((map__25764 == null)))?((((map__25764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25764):map__25764);
var doc = cljs.core.get.call(null,map__25764__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25764__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25796 = cljs.core.next.call(null,seq__25756__$1);
var G__25797 = null;
var G__25798 = (0);
var G__25799 = (0);
seq__25756 = G__25796;
chunk__25757 = G__25797;
count__25758 = G__25798;
i__25759 = G__25799;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map