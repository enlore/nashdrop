angular.module('nashdrop')
  .controller('homeCtrl', function($scope, $state, resultsService) {
    $scope.searchSubmit = item => {
      resultsService.getItem(item);//.then(result => {
        //$state.go('results');
      //});
    };
  });
