/*global QUnit*/

sap.ui.define([
	"thisisui5/controller/ThisIsUI5.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ThisIsUI5 Controller");

	QUnit.test("I should test the ThisIsUI5 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
