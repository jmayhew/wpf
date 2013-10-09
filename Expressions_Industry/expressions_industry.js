/**
 * Created by jessemayhew on 10/9/13.
 */
var electricity = 140;
var car = 30000;
var cableBill = 57;
var building = 200000;
var assets = [30000, 200000];
var assetsTotal = assets[0]+ assets[1];
var liabilities = [140, 57];
var liabilitiesTotal = liabilities[0]+liabilities[1];
var equity = assetsTotal - liabilitiesTotal;

var assets = liabilities + equity;
var liabilities = equity - assets;
