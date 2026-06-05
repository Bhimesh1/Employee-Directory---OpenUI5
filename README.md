# Employee Directory - OpenUI5

A simple employee directory application built with OpenUI5. The project demonstrates XML views, MVC structure, JSON data binding, list filtering, and hash-based routing using a lightweight browser-based setup.

## Features

* Employee list view
* Search employees by name, department, or role
* Employee detail view
* Navigation between list and detail pages
* Local JSON data source
* OpenUI5 XML views and MVC pattern
* Vite development server

## Tech Stack

* OpenUI5
* JavaScript
* XML Views
* JSONModel
* Vite
* Node.js

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app using the URL shown by Vite, for example:

```txt
http://localhost:8085/
```

If `localhost` shows stale content in your browser, use the network URL printed by Vite, for example:

```txt
http://192.168.56.1:8085/
```

## Project Structure

```txt
employee-directory-openui5/
  index.html
  Component.js
  manifest.json
  package.json
  model/
    employees.json
  view/
    App.view.xml
    EmployeeList.view.xml
    EmployeeDetail.view.xml
  controller/
    App.controller.js
    EmployeeList.controller.js
    EmployeeDetail.controller.js
```

## How the App Works

The application starts from `index.html`, which loads OpenUI5 from the CDN and starts the `employee.directory` component.

`Component.js` initializes the application, loads employee data into a `JSONModel`, and starts the router.

`manifest.json` defines the root view and routing configuration.

`view/App.view.xml` contains the root `sap.m.App` control. Routed views are placed inside this app container.

`view/EmployeeList.view.xml` displays the employee list and search field.

`controller/EmployeeList.controller.js` handles filtering and navigation to the detail page.

`view/EmployeeDetail.view.xml` displays selected employee information.

`controller/EmployeeDetail.controller.js` reads the route parameter and binds the view to the selected employee.

## Routes

| Route                     | View             | Description                           |
| ------------------------- | ---------------- | ------------------------------------- |
| `/`                       | `EmployeeList`   | Shows the employee list               |
| `/employees/{employeeId}` | `EmployeeDetail` | Shows details for a selected employee |

Example detail route:

```txt
#/employees/0
```

## Learning Goals

This project is designed to understand the basic OpenUI5 application structure:

* Component-based bootstrapping
* XML views
* Controllers
* JSONModel
* Aggregation binding
* Element binding
* Search filtering
* Routing
