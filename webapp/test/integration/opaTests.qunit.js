/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"org/sap/demo/Simpleui5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});