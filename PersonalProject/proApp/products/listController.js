var ProductListController = (function () {
    function ProductListController() {
        this.title = "product List";
        this.showImage = false;
        this.products = [
            {
                "Id": 1,
                "productName": "shoulder sash",
                "productId": "ET1",
                "materiel": "cotton",
                "description": "blah blah blah.",
                "price": 19.95,
                "imageUrl": "http://g02.s.alicdn.com/kf/HTB1GwDBHVXXXXc_XVXXq6xXFXXX2/Dondoors-home-textile.jpg"
            },
            {
                "Id": 2,
                "productName": "wrap skirt",
                "productId": "ET2",
                "materiel": "Garment",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "imageUrl": "https://nextnaija.files.wordpress.com/2013/06/11-151.jpg?w=670"
            },
            {
                "Id": 5,
                "productName": "shirt",
                "productId": "ET3",
                "materiel": "Ployester",
                "description": "Curved claw steel hammer",
                "price": 8.99,
                "imageUrl": "http://media-cache-ec0.pinimg.com/736x/e7/96/d6/e796d68ab63967eacc9a16d634f534d8.jpg"
            }
        ];
    }
    return ProductListController;
})();
angular.module("productManagement").controller('ProductListController', ProductListController);
//# sourceMappingURL=listController.js.map