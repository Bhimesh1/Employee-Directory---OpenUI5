sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("employee.directory.controller.EmployeeDetail", {
    onInit: function () {
      const oRouter = this.getOwnerComponent().getRouter();

      oRouter
        .getRoute("employeeDetail")
        .attachPatternMatched(this.onEmployeeMatched, this);
    },

    onEmployeeMatched: function (oEvent) {
      const sEmployeeId = oEvent.getParameter("arguments").employeeId;

      this.getView().bindElement({
        path: "/employees/" + sEmployeeId
      });
    },

    onBack: function () {
      this.getOwnerComponent().getRouter().navTo("employeeList");
    }
  });
});