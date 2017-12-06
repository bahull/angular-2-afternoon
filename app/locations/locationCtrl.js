angular
  .module("devmtnTravel")
  .controller("locationCtrl", function($scope, mainSrvc) {
    mainSrvc.getTravelInfo().then(response => {
      $scope.locations = response.data;
    });
  });
