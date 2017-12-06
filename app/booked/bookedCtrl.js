angular
  .module("devmtnTravel")
  .controller("bookedCtrl", function($scope, $stateParams, mainSrvc) {
    mainSrvc
      .getPackageInfo()
      .then(response => ($scope.allPackages = response.data));

    if ($stateParams.id) {
      $scope.packageIndex = $scope.allPackages.findIndex(package => {
        return package.id === parseInt($state.params.id);
      });
    }

    if ($scope.packageIndex !== -1) {
      $scope.package = $scope.allPackages[$scope.packageIndex];
    }
  });
