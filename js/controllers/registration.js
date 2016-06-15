myApp.controller('RegistrationController', function($scope) {
  
   $scope.data = {
      group1 : 'Car'
    };


  $scope.eventplan = function(datas) {
    var userId = "user-01";
    var date = new Date();
    var newPostKey = firebase.database().ref().child(date).push().key;
    
    var updates = {};
    updates['/' + userId + '/' + date + '/' + newPostKey] = datas.details;
    updates['/' + userId + '/' + date + '/' + newPostKey + '/planning/start' + ] = datas.plan.start;
    updates['/' + userId + '/' + date + '/' + newPostKey + '/planning/end' + ] = datas.plan.end;

    return firebase.database().ref().update(updates);

  };

}); // Controller