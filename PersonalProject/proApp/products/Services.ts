namespace Product.Services {

    export class ProductServices {
        private ProductResource

        public listProducts() {
            return this.ProductResource.query();
        }
        public addProduct(data) {
            return this.ProductResource.save(data).$promise;
        }
       
        public EditProducts(id){
            return this.ProductResource.save(id).$promise;
        }

        public FindProducts(id) {
            return this.ProductResource.get({ id: id });
        }
        

        public DeleteProducts(id) {
            return this.ProductResource.delete({ id: id }).$promise;
        }

        constructor($resource: ng.resource.IResourceService) {
            this.ProductResource = $resource('/API/products/:id');
        }
    }

    angular.module('productManagement').service('ProductServices', ProductServices);
}