var controllers;
(function (controllers) {
    angular.module('productManagement').controller('CarouselDemoCtrl', function ($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];
        slides.push({ image: "http://www.marcussamuelsson.com/wp-content/uploads/2012/08/dsc_0600-Resize.jpg", text: "" });
        slides.push({ image: "http://www.marcussamuelsson.com/wp-content/uploads/2012/08/dsc_0600-Resize.jpg", text: "" });
        slides.push({ image: "http://www.marcussamuelsson.com/wp-content/uploads/2012/08/dsc_0600-Resize.jpg", text: "" });
        slides.push({ image: "http://www.marcussamuelsson.com/wp-content/uploads/2012/08/dsc_0600-Resize.jpg", text: "" });
    });
    angular.module('productManagement').controller('UserControlPanelCtrl', function () {
    });
})(controllers || (controllers = {}));
//# sourceMappingURL=CarouselController.js.map