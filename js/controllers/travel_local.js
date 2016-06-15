myApp.controller('travel_localCtrl', function($scope, $routeParams, $q) {
  
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

    if($routeParams.param) {

      console.log($routeParams.param);

        function getUsers() {
          var defer = $q.defer();
          firebase.database().ref('/user-01/150616/' + $routeParams.param).on('value', function (snapshot) {
             if(!snapshot.val()){
                defer.reject('err no data');
             }else{
                defer.resolve(snapshot.val());
                //return snapshot.val();
             }
          });
        return defer.promise;
        };


        getUsers().then(function(snap){
              $scope.data = snap;
                 console.log($scope.data);
          }, function(err){
               //do something with the error
               console.log(err);
        });

    }


  $scope.eventplan = function(data) {
    console.log(data);
    var userId = $scope.userid;
    var date = '150616';
    /*firebase.database().ref(userId+'/').set({

    })*/
    var newPostKey = firebase.database().ref(userId + '/').child(date).push().key;

    var updates = {};
    updates['/' + userId + '/' + date + '/' + newPostKey + '/type'] = "localTravel";
    updates['/' + userId + '/' + date + '/' + newPostKey + '/planning'] = data.planning;
    //updates['/' + userId + '/' + date + '/' + newPostKey + '/planning/start'] = data.plan.start;
    //updates['/' + userId + '/' + date + '/' + newPostKey + '/planning/end'] = data.plan.end;

    return firebase.database().ref().update(updates);

  };

}); // Controller