sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("employee.directory.controller.EmployeeList", {
    onSearch: function (oEvent) {
      const sQuery = oEvent.getParameter("newValue");
      const oList = this.byId("employeeList");
      const oBinding = oList.getBinding("items");

      if (!sQuery) {
        oBinding.filter([]);
        return;
      }

      const aFilters = [
        new Filter("name", FilterOperator.Contains, sQuery),
        new Filter("department", FilterOperator.Contains, sQuery),
        new Filter("role", FilterOperator.Contains, sQuery)
      ];

      const oCombinedFilter = new Filter({
        filters: aFilters,
        and: false
      });

      oBinding.filter([oCombinedFilter]);
    },

    onEmployeeSelect: function (oEvent) {
      const oSelectedItem = oEvent.getParameter("listItem");
      const oContext = oSelectedItem.getBindingContext();

      if (!oContext) {
        console.error("No binding context found for selected employee.");
        return;
      }

      const sEmployeePath = oContext.getPath();
      const sEmployeeId = sEmployeePath.split("/").pop();

      this.getOwnerComponent().getRouter().navTo("employeeDetail", {
        employeeId: sEmployeeId
      });
    }
  });
});