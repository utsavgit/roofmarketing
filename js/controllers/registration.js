myApp.controller('RegistrationController', function($scope) {
  
   $scope.data = {
      group1 : 'Car'
    };


  $scope.eventplan = function(datas) {
    firebase.database().ref('users/' + userId).push({
    username: datas.name,
    email: email
  });
  };

}); // Controller