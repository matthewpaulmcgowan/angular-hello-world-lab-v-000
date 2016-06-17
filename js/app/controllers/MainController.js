function MainController($scope){
  $scope.name = "Matt";
  $scope.number = "1";
  $scope.email = "wow@gmail.com"
};


angular
        .module("app")
        .controller("MainController", MainController);
