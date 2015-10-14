var productManagement;
(function (productManagement) {
    var Controller;
    (function (Controller) {
        var ProductsController = (function () {
            function ProductsController(ProductServices) {
                this.products = ProductServices.listProducts();
            }
            return ProductsController;
        })();
        angular.module('productManagement').controller('ProductsController', ProductsController);
        var authenticateURL = '/token';
        var AccountController = (function () {
            function AccountController($http, $window, $location) {
                this.$http = $http;
                this.$window = $window;
                this.$location = $location;
            }
            AccountController.prototype.login = function () {
                var _this = this;
                var data = "grant_type=password&username=" + this.username + "&password=" + this.password;
                this.$http.post('/api/account/login', data, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (result) {
                    _this.$window.sessionStorage.setItem('token', result.access_token);
                    _this.$location.path('/');
                }).error(function () {
                    _this.loginMessage = 'Invalid user name/password';
                });
            };
            AccountController.prototype.logout = function () {
                this.$window.sessionStorage.removeItem('token');
            };
            AccountController.prototype.isLoggedIn = function () {
                return this.$window.sessionStorage.getItem('token');
            };
            AccountController.prototype.userRegister = function () {
                this.$http.post('/api/account/register', this.newUser);
            };
            return AccountController;
        })();
        angular.module('productManagement').controller('AccountController', AccountController);
    })(Controller = productManagement.Controller || (productManagement.Controller = {}));
})(productManagement || (productManagement = {}));
//# sourceMappingURL=Controller.js.map