angular
  .module("devmtnTravel")
  .controller("packagesCtrl", function($scope, $stateParams, mainSrvc) {
    mainSrvc.getPackageInfo().then(response => {
      $scope.allPackages = response.data;
      //   $scope.packages = $scope.allPackages.filter(
      //     curr => curr === $stateParams.id
      //   );
      //   console.log();
      if ($stateParams.country) {
        $scope.packages = $scope.allPackages.filter(function(package) {
          return package.country === $stateParams.country;
        });
      }
    });
  });
