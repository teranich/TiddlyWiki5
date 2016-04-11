/*\
title: $:/plugins/tiddlywiki/codemirror/edit-codemirror.js
type: application/javascript
module-type: widget

Edit-codemirror widget

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var editTextWidgetFactory = require("$:/core/modules/editor/factory.js").editTextWidgetFactory,
	CodeMirrorEngine = require("$:/plugins/tiddlywiki/codemirror/engine.js").CodeMirrorEngine,
	SimpleEngine = require("$:/core/modules/editor/engines/simple.js").SimpleEngine;

exports["edit-codemirror"] = editTextWidgetFactory(CodeMirrorEngine,SimpleEngine);

})();
