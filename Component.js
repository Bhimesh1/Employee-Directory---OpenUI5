sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
  "use strict";

  return UIComponent.extend("employee.directory.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      const oEmployeeModel = new JSONModel();
      oEmployeeModel.loadData("model/employees.json");

      this.setModel(oEmployeeModel);
    }
  });
});