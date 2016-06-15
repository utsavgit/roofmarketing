myApp.controller('travel_localCtrl', function($scope) {
  
   $scope.dats = {
      // group1 : 'Car',
      // start_lat: null,
      // start_lng:null,
      // start_time:null,
      // start_location:null,
      // end_lat: null,
      // end_lng:null,
      // end_time:null,
      // end_location:null,
      // purpose:null,
      // project_id:null,
      // mode:null,
      // active:null,
      availableModes:[
      	{mode:"car"},
      	{mode:"bike"},
      	{mode:"metro"},
      	{mode:"bus"}
      ]
    };
    $scope.repeatSelect;


  $scope.eventplan = function(data) {
    console.log(data);
    var userId = $scope.userid;
    var date = '150616';
    /*firebase.database().ref(userId+'/').set({

    })*/
    var newPostKey = firebase.database().ref(userId + '/').child(date).push().key;

    var updates = {};
    updates['/' + userId + '/' + date + '/' + newPostKey + '/type'] = "localTravel";
    updates['/' + userId + '/' + date + '/' + newPostKey + '/planning'] = data.plan;
    //updates['/' + userId + '/' + date + '/' + newPostKey + '/planning/start'] = data.plan.start;
    //updates['/' + userId + '/' + date + '/' + newPostKey + '/planning/end'] = data.plan.end;

    return firebase.database().ref().update(updates);

  };

}); // Controller