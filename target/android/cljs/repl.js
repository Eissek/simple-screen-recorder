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
var seq__24655_24669 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24656_24670 = null;
var count__24657_24671 = (0);
var i__24658_24672 = (0);
while(true){
if((i__24658_24672 < count__24657_24671)){
var f_24673 = cljs.core._nth.call(null,chunk__24656_24670,i__24658_24672);
cljs.core.println.call(null,"  ",f_24673);

var G__24674 = seq__24655_24669;
var G__24675 = chunk__24656_24670;
var G__24676 = count__24657_24671;
var G__24677 = (i__24658_24672 + (1));
seq__24655_24669 = G__24674;
chunk__24656_24670 = G__24675;
count__24657_24671 = G__24676;
i__24658_24672 = G__24677;
continue;
} else {
var temp__4425__auto___24678 = cljs.core.seq.call(null,seq__24655_24669);
if(temp__4425__auto___24678){
var seq__24655_24679__$1 = temp__4425__auto___24678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24655_24679__$1)){
var c__17644__auto___24680 = cljs.core.chunk_first.call(null,seq__24655_24679__$1);
var G__24681 = cljs.core.chunk_rest.call(null,seq__24655_24679__$1);
var G__24682 = c__17644__auto___24680;
var G__24683 = cljs.core.count.call(null,c__17644__auto___24680);
var G__24684 = (0);
seq__24655_24669 = G__24681;
chunk__24656_24670 = G__24682;
count__24657_24671 = G__24683;
i__24658_24672 = G__24684;
continue;
} else {
var f_24685 = cljs.core.first.call(null,seq__24655_24679__$1);
cljs.core.println.call(null,"  ",f_24685);

var G__24686 = cljs.core.next.call(null,seq__24655_24679__$1);
var G__24687 = null;
var G__24688 = (0);
var G__24689 = (0);
seq__24655_24669 = G__24686;
chunk__24656_24670 = G__24687;
count__24657_24671 = G__24688;
i__24658_24672 = G__24689;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24690 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16841__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24690);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24690)))?cljs.core.second.call(null,arglists_24690):arglists_24690));
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
var seq__24659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24660 = null;
var count__24661 = (0);
var i__24662 = (0);
while(true){
if((i__24662 < count__24661)){
var vec__24663 = cljs.core._nth.call(null,chunk__24660,i__24662);
var name = cljs.core.nth.call(null,vec__24663,(0),null);
var map__24664 = cljs.core.nth.call(null,vec__24663,(1),null);
var map__24664__$1 = ((((!((map__24664 == null)))?((((map__24664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24664):map__24664);
var doc = cljs.core.get.call(null,map__24664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24664__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24691 = seq__24659;
var G__24692 = chunk__24660;
var G__24693 = count__24661;
var G__24694 = (i__24662 + (1));
seq__24659 = G__24691;
chunk__24660 = G__24692;
count__24661 = G__24693;
i__24662 = G__24694;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24659);
if(temp__4425__auto__){
var seq__24659__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24659__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__24659__$1);
var G__24695 = cljs.core.chunk_rest.call(null,seq__24659__$1);
var G__24696 = c__17644__auto__;
var G__24697 = cljs.core.count.call(null,c__17644__auto__);
var G__24698 = (0);
seq__24659 = G__24695;
chunk__24660 = G__24696;
count__24661 = G__24697;
i__24662 = G__24698;
continue;
} else {
var vec__24666 = cljs.core.first.call(null,seq__24659__$1);
var name = cljs.core.nth.call(null,vec__24666,(0),null);
var map__24667 = cljs.core.nth.call(null,vec__24666,(1),null);
var map__24667__$1 = ((((!((map__24667 == null)))?((((map__24667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24667):map__24667);
var doc = cljs.core.get.call(null,map__24667__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24667__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24699 = cljs.core.next.call(null,seq__24659__$1);
var G__24700 = null;
var G__24701 = (0);
var G__24702 = (0);
seq__24659 = G__24699;
chunk__24660 = G__24700;
count__24661 = G__24701;
i__24662 = G__24702;
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