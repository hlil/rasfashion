var Product;
(function (Product) {
    var Services;
    (function (Services) {
        var ProductServices = (function () {
            function ProductServices($resource) {
                this.ProductResource = $resource('/API/products/:id');
            }
            ProductServices.prototype.listProducts = function () {
                return this.ProductResource.query();
            };
            ProductServices.prototype.addProduct = function (data) {
                return this.ProductResource.save(data).$promise;
            };
            ProductServices.prototype.EditProducts = function (id) {
                return this.ProductResource.save(id).$promise;
            };
            ProductServices.prototype.FindProducts = function (id) {
                return this.ProductResource.get({ id: id });
            };
            ProductServices.prototype.DeleteProducts = function (id) {
                return this.ProductResource.delete({ id: id }).$promise;
            };
            return ProductServices;
        })();
        Services.ProductServices = ProductServices;
        angular.module('productManagement').service('ProductServices', ProductServices);
    })(Services = Product.Services || (Product.Services = {}));
})(Product || (Product = {}));
//# sourceMappingURL=Services.js.map