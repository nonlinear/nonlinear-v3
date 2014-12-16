
DnD.Dropzone=function(){};DnD.Dropzone.DROP_TARGET_ID="dropTargetId";DnD.Dropzone.prototype={getElement:function(){return $(this.id);},getDropzoneOptions:function(){return null;},getDnDDefaultParams:function(){return DnD.getDnDDefaultParams(this.getElement());},getDnDDropParams:function(){return DnD.getDnDDropParams(this.getElement());},accept:function(drag){return DnD.CLIENT_VALIDATION_OFF||this.getAcceptedTypes().indexOf(drag.type)>-1;},getAcceptedTypes:function(){return[];},getTypeMapping:function(){return{};},getCursorTypeMapping:function(){return{};},drop:function(event,drag){},getIconCodeForType:function(type){var types=this.getTypeMapping();if(type&&types){return types[type];}
return null;},getCursorForType:function(type){var types=this.getCursorTypeMapping();if(type&&types){return types[type];}},dragEnter:function(event){var drag=window.drag;drag.dropzone=this;drag.source.ondropover(event,drag);var indicator=drag.indicator;var accepts=this.accept(drag);if(accepts){var cursor=this.getCursorForType(drag.type);if(cursor){this.acceptMappingCursor=new DnD.Cursor(this.getElement(),cursor);this.acceptMappingCursor.showCursor();}else if(this.acceptCursor){this.acceptCursor.showCursor();}}else if(this.rejectCursor){this.rejectCursor.showCursor();}
if(indicator){var icon=this.getIconCodeForType(drag.type);var dndParams=drag.source.getDnDDragParams();if(dndParams){Object.extend(dndParams,this.getDnDDropParams());}else{dndParams=this.getDnDDropParams();}
if(dndParams){if(icon){dndParams['marker']=dndParams[icon];}else{dndParams['marker']=null;}}
var markerType=accepts?"accept":"reject";DnD.setDefaultDnDParams(dndParams);if(drag.source.getDraggableItems&&drag.source.getDraggableItems()>1){indicator.setContent(markerType,false,dndParams);}else{indicator.setContent(markerType,true,dndParams);}
if(accepts){indicator.accept();}else{indicator.reject();}}
var opts=this.getDropzoneOptions();if(opts&&opts.ondragenter){opts.ondragenter.call(event);}},dragLeave:function(event){var drag=window.drag;drag.dropzone=null;drag.source.ondropout(event,drag);drag.source.setIndicator(event);var indicator=drag.indicator;if(indicator){indicator.leave();}
var opts=this.getDropzoneOptions();if(opts&&opts.ondragexit){opts.ondragexit(event);}
if(this.acceptCursor){if(this.acceptCursor.visible){this.acceptCursor.hideCursor();}}
if(this.rejectCursor){if(this.rejectCursor.visible){this.rejectCursor.hideCursor();}}
if(this.acceptMappingCursor){if(this.acceptMappingCursor.visible){this.acceptMappingCursor.hideCursor();}}},dragUp:function(event){this.ondropend(event);if(this.acceptCursor){if(this.acceptCursor.visible){this.acceptCursor.hideCursor();}}
if(this.rejectCursor){if(this.rejectCursor.visible){this.rejectCursor.hideCursor();}}
if(this.acceptMappingCursor){if(this.acceptMappingCursor.visible){this.acceptMappingCursor.hideCursor();}}
var options=this.getDropzoneOptions();if(options&&options.ondropend){options.ondropend();}},enableDropzoneCursors:function(acceptCursor,rejectCursor){if(acceptCursor){this.acceptCursor=new DnD.Cursor(this.getElement(),acceptCursor);}
if(rejectCursor){this.rejectCursor=new DnD.Cursor(this.getElement(),rejectCursor);}},ondropend:function(event){},onafterdrag:function(event){},onbeforedrag:function(event,drag){},ondragenter:function(event){},ondragexit:function(event){}};