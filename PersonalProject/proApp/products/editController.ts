namespace productManagement.Controller {

    class ProductsListController {
        public products

        constructor(ProductServices: Product.Services.ProductServices) {
            this.products = ProductServices.listProducts();
        }
    }
    angular.module('productManagement').controller('ProductsListController', ProductsListController);


    class ProductsAddController {
        public productToCreate

        addProduct() {
            this.ProductServices.addProduct(this.productToCreate).then(
                () => this.$location.path('/'));
        }

        constructor(private ProductServices: Product.Services.ProductServices, private $location: ng.ILocationService) {

        }
    }
    angular.module('productManagement').controller('ProductsAddController', ProductsAddController);


    class ProductsEditController {
        public productToEdit

        EditProducts() {
            this.productService.EditProducts(this.productToEdit).then(
                () => this.$location.path('/')
                );
        }

        constructor(private productService: Product.Services.ProductServices, private $location: ng.ILocationService, $routeParams: ng.route.IRouteParamsService) {
            this.productToEdit = productService.FindProducts($routeParams['id'])
        }
    }
    angular.module('productManagement').controller('ProductsEditController', ProductsEditController);


    class ProductsDeleteController {
        public productToDelet

        deleteProduct() {
            this.productService.DeleteProducts(this.productToDelet).then(
                () => this.$location.path('/ngViews/Delet.html')
                );
        }


        constructor(private productService: Product.Services.ProductServices, private $location: ng.ILocationService, $routeParams: ng.route.IRouteParamsService) {
            this.productToDelet = productService.FindProducts($routeParams['id']);
        }
    }
    angular.module('productManagement').controller('ProductsDeleteController', ProductsDeleteController);

}