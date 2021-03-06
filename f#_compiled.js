if(!lt.util.load.provided_QMARK_('lt.plugins.fsharp')) {
goog.provide('lt.plugins.fsharp');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');

lt.plugins.fsharp.shell = lt.util.load.node_module.call(null,"shelljs");

lt.plugins.fsharp.py_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"fs-src/ltfsclient/ltfsclient.fsx");

lt.plugins.fsharp.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
if((out.indexOf("Connected") > -1))
{lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","on-out","lt.plugins.fsharp/on-out",3715091080),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.plugins.fsharp.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if((new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).indexOf("Connected") > -1))
{return null;
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","on-error","lt.plugins.fsharp/on-error",702575682),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));

lt.plugins.fsharp.__BEH__on_exit = (function __BEH__on_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Looks like there was an issue trying to connect\n                                                      to the project. Here's what we got:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","on-exit","lt.plugins.fsharp/on-exit",3264496788),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","connecting-notifier","lt.plugins.fsharp/connecting-notifier",771649731),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.fsharp","on-exit","lt.plugins.fsharp/on-exit",3264496788),new cljs.core.Keyword("lt.plugins.fsharp","on-error","lt.plugins.fsharp/on-error",702575682),new cljs.core.Keyword("lt.plugins.fsharp","on-out","lt.plugins.fsharp/on-out",3715091080)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));

lt.plugins.fsharp.escape_spaces = (function escape_spaces(s){if(cljs.core._EQ_.call(null,lt.objs.files.separator,"\\"))
{return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
} else
{return s;
}
});

lt.plugins.fsharp.run_py = (function run_py(p__7361){var map__7363 = p__7361;var map__7363__$1 = ((cljs.core.seq_QMARK_.call(null,map__7363))?cljs.core.apply.call(null,cljs.core.hash_map,map__7363):map__7363);var info = map__7363__$1;var client = cljs.core.get.call(null,map__7363__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__7363__$1,new cljs.core.Keyword(null,"name","name",1017277949));var project_path = cljs.core.get.call(null,map__7363__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var path = cljs.core.get.call(null,map__7363__$1,new cljs.core.Keyword(null,"path","path",1017337751));var n = lt.objs.notifos.working.call(null,"Connecting..");var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.fsharp","connecting-notifier","lt.plugins.fsharp/connecting-notifier",771649731),client);var env = cljs.core.PersistentArrayMap.EMPTY;return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),lt.plugins.fsharp.get_fsi_cmd.call(null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--exec",lt.plugins.fsharp.escape_spaces.call(null,lt.plugins.fsharp.py_path),lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client),lt.plugins.fsharp.escape_spaces.call(null,lt.plugins.fsharp.get_fsi.call(null))], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),project_path,new cljs.core.Keyword(null,"env","env",1014004831),env,new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});

lt.plugins.fsharp.get_fsi_cmd = (function get_fsi_cmd(){if(cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null)))
{return "fsi";
} else
{return "fsharpi";
}
});

lt.plugins.fsharp.get_fsi = (function get_fsi(){var or__5799__auto__ = new cljs.core.Keyword(null,"fsharp-exe","fsharp-exe",871321467).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.fsharp.fsharp));if(cljs.core.truth_(or__5799__auto__))
{return or__5799__auto__;
} else
{return lt.plugins.fsharp.shell.which(lt.plugins.fsharp.get_fsi_cmd.call(null));
}
});

lt.plugins.fsharp.check_fsharp = (function check_fsharp(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"fsharp","fsharp",4043477686),lt.plugins.fsharp.get_fsi.call(null));
});

lt.plugins.fsharp.check_client = (function check_client(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"fsharp-client","fsharp-client",984989158),lt.objs.files.exists_QMARK_.call(null,lt.plugins.fsharp.py_path));
});

lt.plugins.fsharp.find_project = (function find_project(obj){var p = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(obj);var roots = lt.objs.files.get_roots.call(null);var cur = p;var prev = "";while(true){
if(cljs.core.truth_((function (){var or__5799__auto__ = cljs.core.empty_QMARK_.call(null,cur);if(or__5799__auto__)
{return or__5799__auto__;
} else
{var or__5799__auto____$1 = roots.call(null,cur);if(cljs.core.truth_(or__5799__auto____$1))
{return or__5799__auto____$1;
} else
{return cljs.core._EQ_.call(null,cur,prev);
}
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),null);
} else
{if(cljs.core.truth_((function (){var and__5787__auto__ = cljs.core.not.call(null,lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,cur,"__init__.py")));if(and__5787__auto__)
{return lt.objs.files.dir_QMARK_.call(null,cur);
} else
{return and__5787__auto__;
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),cur);
} else
{{
var G__7395 = lt.objs.files.parent.call(null,cur);
var G__7396 = cur;
cur = G__7395;
prev = G__7396;
continue;
}
}
}
break;
}
});

lt.plugins.fsharp.notify = (function notify(obj){var map__7365 = obj;var map__7365__$1 = ((cljs.core.seq_QMARK_.call(null,map__7365))?cljs.core.apply.call(null,cljs.core.hash_map,map__7365):map__7365);var client = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"client","client",3951159101));var fsharp_client = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"fsharp-client","fsharp-client",984989158));var path = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"path","path",1017337751));var project_path = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var fsharp = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"fsharp","fsharp",4043477686));if((cljs.core.not.call(null,fsharp)) || (cljs.core.empty_QMARK_.call(null,fsharp)))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),[cljs.core.str("We couldn't find "),cljs.core.str(lt.plugins.fsharp.get_fsi_cmd.call(null)),cljs.core.str(".")].join(''),new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("In order to evaluate in F# files, a F# interactive ("),cljs.core.str(lt.plugins.fsharp.get_fsi_cmd.call(null)),cljs.core.str(") has to be installed and on your system PATH.")].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Download FSharp",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.objs.platform.open.call(null,"http://www.fsharp.org");
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
} else
{if(cljs.core.not.call(null,project_path))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find this file.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in F# files, the file has to be on disk somewhere.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Save this file",new cljs.core.Keyword(null,"action","action",3885920680),(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.plugins.fsharp.try_connect.call(null,obj);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return null;
})], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.plugins.fsharp.run_py.call(null,obj);
} else
{}
}
}
return obj;
});

lt.plugins.fsharp.check_all = (function check_all(obj){return lt.plugins.fsharp.notify.call(null,lt.plugins.fsharp.find_project.call(null,lt.plugins.fsharp.check_client.call(null,lt.plugins.fsharp.check_fsharp.call(null,obj))));
});

lt.plugins.fsharp.try_connect = (function try_connect(p__7366){var map__7368 = p__7366;var map__7368__$1 = ((cljs.core.seq_QMARK_.call(null,map__7368))?cljs.core.apply.call(null,cljs.core.hash_map,map__7368):map__7368);var info = cljs.core.get.call(null,map__7368__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"fsharp.client","fsharp.client",1872492839));lt.plugins.fsharp.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});

lt.plugins.fsharp.fsharp_watch = (function fsharp_watch(meta,src){var meta__$1 = JSON.stringify(cljs.core.clj__GT_js.call(null,meta));return [cljs.core.str("sys.modules['lttools'].__dict__['watch']("),cljs.core.str(src),cljs.core.str(", "),cljs.core.str(meta__$1),cljs.core.str(")")].join('');
});

lt.plugins.fsharp.__BEH__watch_src = (function __BEH__watch_src(editor,cur,meta,src){return lt.plugins.fsharp.fsharp_watch.call(null,meta,src);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","watch-src","lt.plugins.fsharp/watch-src",4319812606),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__watch_src,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.src+","watch.src+",868749304),null], null), null));

lt.plugins.fsharp.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,lt.plugins.fsharp.fsharp,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.watches.watched_range.call(null,editor,null,null,lt.plugins.fsharp.fsharp_watch))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","on-eval","lt.plugins.fsharp/on-eval",3264494610),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));

lt.plugins.fsharp.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var code = lt.plugins.watches.watched_range.call(null,editor,null,null,lt.plugins.fsharp.fsharp_watch);var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),code));return lt.object.raise.call(null,lt.plugins.fsharp.fsharp,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$1], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","on-eval.one","lt.plugins.fsharp/on-eval.one",2963921562),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));

lt.plugins.fsharp.__BEH__fsharp_watch = (function __BEH__fsharp_watch(editor,res){var temp__4092__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)));if(cljs.core.truth_(temp__4092__auto__))
{var watch = temp__4092__auto__;var str_result = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);return lt.object.raise.call(null,new cljs.core.Keyword(null,"inline-result","inline-result",656479555).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"update!","update!",779473898),str_result);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-watch","lt.plugins.fsharp/fsharp-watch",674371806),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__fsharp_watch,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.fsharp.watch","editor.eval.fsharp.watch",4141431528),null], null), null));

lt.plugins.fsharp.__BEH__fsharp_result = (function __BEH__fsharp_result(editor,res){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-result","lt.plugins.fsharp/fsharp-result",692403998),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__fsharp_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.fsharp.result","editor.eval.fsharp.result",3338505672),null], null), null));

lt.plugins.fsharp.__BEH__fsharp_success = (function __BEH__fsharp_success(editor,res){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-success","lt.plugins.fsharp/fsharp-success",969006690),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__fsharp_success,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.fsharp.success","editor.eval.fsharp.success",1392355420),null], null), null));

lt.plugins.fsharp.__BEH__fsharp_exception = (function __BEH__fsharp_exception(editor,ex){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-exception","lt.plugins.fsharp/fsharp-exception",1211511006),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__fsharp_exception,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.fsharp.exception","editor.eval.fsharp.exception",4463696616),null], null), null));

lt.plugins.fsharp.image = (function image(src){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("data:image/png;base64,"),cljs.core.str(src)].join('')], null)], null));var seq__7375_7397 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7376_7398 = null;var count__7377_7399 = 0;var i__7378_7400 = 0;while(true){
if((i__7378_7400 < count__7377_7399))
{var vec__7379_7401 = cljs.core._nth.call(null,chunk__7376_7398,i__7378_7400);var ev__7146__auto___7402 = cljs.core.nth.call(null,vec__7379_7401,0,null);var func__7147__auto___7403 = cljs.core.nth.call(null,vec__7379_7401,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7402,func__7147__auto___7403);
{
var G__7404 = seq__7375_7397;
var G__7405 = chunk__7376_7398;
var G__7406 = count__7377_7399;
var G__7407 = (i__7378_7400 + 1);
seq__7375_7397 = G__7404;
chunk__7376_7398 = G__7405;
count__7377_7399 = G__7406;
i__7378_7400 = G__7407;
continue;
}
} else
{var temp__4092__auto___7408 = cljs.core.seq.call(null,seq__7375_7397);if(temp__4092__auto___7408)
{var seq__7375_7409__$1 = temp__4092__auto___7408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7375_7409__$1))
{var c__6528__auto___7410 = cljs.core.chunk_first.call(null,seq__7375_7409__$1);{
var G__7411 = cljs.core.chunk_rest.call(null,seq__7375_7409__$1);
var G__7412 = c__6528__auto___7410;
var G__7413 = cljs.core.count.call(null,c__6528__auto___7410);
var G__7414 = 0;
seq__7375_7397 = G__7411;
chunk__7376_7398 = G__7412;
count__7377_7399 = G__7413;
i__7378_7400 = G__7414;
continue;
}
} else
{var vec__7380_7415 = cljs.core.first.call(null,seq__7375_7409__$1);var ev__7146__auto___7416 = cljs.core.nth.call(null,vec__7380_7415,0,null);var func__7147__auto___7417 = cljs.core.nth.call(null,vec__7380_7415,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7416,func__7147__auto___7417);
{
var G__7418 = cljs.core.next.call(null,seq__7375_7409__$1);
var G__7419 = null;
var G__7420 = 0;
var G__7421 = 0;
seq__7375_7397 = G__7418;
chunk__7376_7398 = G__7419;
count__7377_7399 = G__7420;
i__7378_7400 = G__7421;
continue;
}
}
} else
{}
}
break;
}
return e__7145__auto__;
});

lt.plugins.fsharp.canvas = (function canvas(){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null));var seq__7387_7422 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7388_7423 = null;var count__7389_7424 = 0;var i__7390_7425 = 0;while(true){
if((i__7390_7425 < count__7389_7424))
{var vec__7391_7426 = cljs.core._nth.call(null,chunk__7388_7423,i__7390_7425);var ev__7146__auto___7427 = cljs.core.nth.call(null,vec__7391_7426,0,null);var func__7147__auto___7428 = cljs.core.nth.call(null,vec__7391_7426,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7427,func__7147__auto___7428);
{
var G__7429 = seq__7387_7422;
var G__7430 = chunk__7388_7423;
var G__7431 = count__7389_7424;
var G__7432 = (i__7390_7425 + 1);
seq__7387_7422 = G__7429;
chunk__7388_7423 = G__7430;
count__7389_7424 = G__7431;
i__7390_7425 = G__7432;
continue;
}
} else
{var temp__4092__auto___7433 = cljs.core.seq.call(null,seq__7387_7422);if(temp__4092__auto___7433)
{var seq__7387_7434__$1 = temp__4092__auto___7433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7387_7434__$1))
{var c__6528__auto___7435 = cljs.core.chunk_first.call(null,seq__7387_7434__$1);{
var G__7436 = cljs.core.chunk_rest.call(null,seq__7387_7434__$1);
var G__7437 = c__6528__auto___7435;
var G__7438 = cljs.core.count.call(null,c__6528__auto___7435);
var G__7439 = 0;
seq__7387_7422 = G__7436;
chunk__7388_7423 = G__7437;
count__7389_7424 = G__7438;
i__7390_7425 = G__7439;
continue;
}
} else
{var vec__7392_7440 = cljs.core.first.call(null,seq__7387_7434__$1);var ev__7146__auto___7441 = cljs.core.nth.call(null,vec__7392_7440,0,null);var func__7147__auto___7442 = cljs.core.nth.call(null,vec__7392_7440,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7441,func__7147__auto___7442);
{
var G__7443 = cljs.core.next.call(null,seq__7387_7434__$1);
var G__7444 = null;
var G__7445 = 0;
var G__7446 = 0;
seq__7387_7422 = G__7443;
chunk__7388_7423 = G__7444;
count__7389_7424 = G__7445;
i__7390_7425 = G__7446;
continue;
}
}
} else
{}
}
break;
}
return e__7145__auto__;
});

lt.plugins.fsharp.__BEH__fsharp_image = (function __BEH__fsharp_image(editor,img){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.fsharp.image.call(null,new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(img)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(img)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(img))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-image","lt.plugins.fsharp/fsharp-image",686947658),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__fsharp_image,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.fsharp.image","editor.eval.fsharp.image",4128841588),null], null), null));

lt.plugins.fsharp.__BEH__fsharp_printer = (function __BEH__fsharp_printer(editor,p){return lt.objs.console.loc_log.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",1017047278),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"line","line",1017226086),"stdout",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(p)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-printer","lt.plugins.fsharp/fsharp-printer",2624218697),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__fsharp_printer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.fsharp.print","editor.eval.fsharp.print",4135463110),null], null), null));

lt.plugins.fsharp.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__7394 = event;var map__7394__$1 = ((cljs.core.seq_QMARK_.call(null,map__7394))?cljs.core.apply.call(null,cljs.core.hash_map,map__7394):map__7394);var origin = cljs.core.get.call(null,map__7394__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7394__$1,new cljs.core.Keyword(null,"info","info",1017141280));var client = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,origin)));lt.objs.notifos.working.call(null,"");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.fsharp","editor.eval.fsharp",2667248967),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.fsharp.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.fsharp","editor.eval.fsharp",2667248967),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","eval!","lt.plugins.fsharp/eval!",4767318749),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.plugins.fsharp.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.fsharp.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","connect","lt.plugins.fsharp/connect",1224318194),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-lang","lt.plugins.fsharp/fsharp-lang",4436598543),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fsharp.lang","fsharp.lang",889915850),null], null), null));

lt.plugins.fsharp.fsharp = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-lang","lt.plugins.fsharp/fsharp-lang",4436598543));

lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"F#",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your F# project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.fsharp.fsharp,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));

lt.plugins.fsharp.__BEH__fsharp_exe = (function __BEH__fsharp_exe(this$,exe){return lt.object.merge_BANG_.call(null,lt.plugins.fsharp.fsharp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fsharp-exe","fsharp-exe",871321467),exe], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","fsharp-exe","lt.plugins.fsharp/fsharp-exe",4450516945),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__fsharp_exe,new cljs.core.Keyword(null,"desc","desc",1016984067),"F#: Set the path to the F# executable for clients",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"path","path",1017337751)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);

lt.plugins.fsharp.__BEH__ifsharp_exe = (function __BEH__ifsharp_exe(this$,exe){return lt.object.merge_BANG_.call(null,lt.plugins.fsharp.fsharp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ifsharp-exe","ifsharp-exe",1169989796),exe], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.fsharp","ifsharp-exe","lt.plugins.fsharp/ifsharp-exe",4692464042),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.fsharp.__BEH__ifsharp_exe,new cljs.core.Keyword(null,"desc","desc",1016984067),"F#: Set the path to ifsharp for clients",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"path","path",1017337751)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);

}

//# sourceMappingURL=