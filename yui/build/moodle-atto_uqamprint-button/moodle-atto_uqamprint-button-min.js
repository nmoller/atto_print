YUI.add("moodle-atto_uqamprint-button",function(e,t){var n="atto_uqamprint",r="uqamprint_flavor",i="atto_uqamprint",s={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",FLAVORCONTROL:"flavorcontrol"},o={FLAVORCONTROL:".flavorcontrol"},u='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align"><button class="{{CSS.INPUTSUBMIT}}">{{get_string "insert" component}}</button></div></form>';e.namespace("M.atto_uqamprint").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;var t=["print"];e.Array.each(t,function(e){this.addButton({icon:"ed/"+e,iconComponent:"atto_uqamprint",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},this)},_displayDialogue:function(t,r){t.preventDefault();var i=400,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:i+"px",focusAfterHide:r});s.width!==i+"px"&&s.set("width",i+"px");var o=this._getFormContent(r),u=e.Node.create("<div></div>");u.append(o),s.set("bodyContent",u),s.show(),this.markUpdated()},_getFormContent:function(t){var i=e.Handlebars.compile(u),o=e.Node.create(i({elementid:this.get("host").get("elementid"),CSS:s,FLAVORCONTROL:r,component:n,clickedicon:t}));return this._form=o,this._form.one("."+s.INPUTSUBMIT).on("click",this._doInsert,this),o},_doInsert:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var n=e.one(".editor_atto_content_wrap");this.markUpdated();var r=window.open("","Print","height=600,width=800");return r.document.write("<html><head><title>Print</title>"),r.document.write("</head><body >"),r.document.write(n.getHTML()),r.document.write("</body></html>"),r.document.close(),r.focus(),r.print(),r.close(),this.markUpdated(),!0}},{ATTRS:{disabled:{value:!1},usercontextid:{value:null}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
