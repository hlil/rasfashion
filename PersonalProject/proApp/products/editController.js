var productManagement;
(function (productManagement) {
    var Controller;
    (function (Controller) {
        var ProductsListController = (function () {
            function ProductsListController(ProductServices) {
                this.products = ProductServices.listProducts();
            }
            return ProductsListController;
        })();
        angular.module('productManagement').controller('ProductsListController', ProductsListController);
        var ProductsAddController = (function () {
            function ProductsAddController(ProductServices, $location) {
                this.ProductServices = ProductServices;
                this.$location = $location;
            }
            ProductsAddController.prototype.addProduct = function () {
                var _this = this;
                this.ProductServices.addProduct(this.productToCreate).then(function () { return _this.$location.path('/'); });
            };
            return ProductsAddController;
        })();
        angular.module('productManagement').controller('ProductsAddController', ProductsAddController);
        var ProductsEditController = (function () {
            function ProductsEditController(productService, $location, $routeParams) {
                this.productService = productService;
                this.$location = $location;
                this.productToEdit = productService.FindProducts($routeParams['id']);
            }
            ProductsEditController.prototype.EditProducts = function () {
                var _this = this;
                this.productService.EditProducts(this.productToEdit).then(function () { return _this.$location.path('/'); });
            };
            return ProductsEditController;
        })();
        angular.module('productManagement').controller('ProductsEditController', ProductsEditController);
        var ProductsDeleteController = (function () {
            function ProductsDeleteController(productService, $location, $routeParams) {
                this.productService = productService;
                this.$location = $location;
                this.productToDelet = productService.FindProducts($routeParams['id']);
            }
            ProductsDeleteController.prototype.deleteProduct = function () {
                var _this = this;
                this.productService.DeleteProducts(this.productToDelet).then(function () { return _this.$location.path('/ngViews/Delet.html'); });
            };
            return ProductsDeleteController;
        })();
        angular.module('productManagement').controller('ProductsDeleteController', ProductsDeleteController);
    })(Controller = productManagement.Controller || (productManagement.Controller = {}));
})(productManagement || (productManagement = {}));
//# sourceMappingURL=editController.js.map