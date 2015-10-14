namespace productManagement.Controller {

    class ProductsController {
        public products;

        constructor(ProductServices: Product.Services.ProductServices) {
           
            this.products = ProductServices.listProducts();
           
        }
    }
    angular.module('productManagement').controller('ProductsController', ProductsController);
    const authenticateURL = '/token';

    class AccountController {
        username: string
        password: string
        loginMessage: string
        newUser



        login() {
            let data = "grant_type=password&username=" + this.username + "&password=" + this.password;
            this.$http.post('/api/account/login', data,
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success((result: any) => {
                    this.$window.sessionStorage.setItem('token', result.access_token);
                    this.$location.path('/');
                }).error(() => {
                    this.loginMessage = 'Invalid user name/password';
                });
        }

        logout() {
            this.$window.sessionStorage.removeItem('token');
        }

        isLoggedIn() {
            return this.$window.sessionStorage.getItem('token');
        }

        userRegister() {

            this.$http.post('/api/account/register', this.newUser);
        }

        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $location: ng.ILocationService) { }
    }

    angular.module('productManagement').controller('AccountController', AccountController);

}
   
