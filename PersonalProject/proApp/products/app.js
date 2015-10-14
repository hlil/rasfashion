var productManagement;
(function (productManagement) {
    angular.module('productManagement', ['ngRoute', 'ui.bootstrap', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/products', {
            templateUrl: '/proApp/products/productListView.html',
            controller: 'ProductsController as vm'
        }).when('/', {
            templateUrl: '/ngViews/Home.html',
            controller: 'UserControlPanelCtrl as vm'
        }).when('/register', {
            templateUrl: "/ngViews/Register.html",
            controller: 'AccountController as account'
        }).when('/login', {
            templateUrl: "/ngViews/Login.html",
            controller: "AccountController as account"
        }).when('/detail', {
            templateUrl: "/ngViews/Detail.html",
            controller: 'ProductsController as vm'
        }).when('/edit/:id', {
            templateUrl: "/ngViews/Edit.html",
            controller: "ProductsEditController as modal"
        }).when('/delet/:id', {
            templateUrl: "/ngViews/Delet.html",
            controller: "ProductsDeleteController as modal"
        }).when('/cart', {
            templateUrl: "/ngViews/Cart.html",
            controller: "ProductsController as modal"
        }).when('/create', {
            templateUrl: "/ngViews/Create.html",
            controller: "ProductsAddController as modal"
        }).when('/about', {
            templateUrl: "/ngViews/about.html"
        });
        $locationProvider.html5Mode(true);
    });
})(productManagement || (productManagement = {}));
//# sourceMappingURL=app.js.map