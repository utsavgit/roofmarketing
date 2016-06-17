myApp.controller('travel_localCtrl', function($scope, $routeParams, $q) {
  
   $scope.dats = {
     
      availableModes:[
        {mode:"car"},
        {mode:"bike"},
        {mode:"metro"},
        {mode:"bus"}
      ]
    };
    $scope.repeatSelect;
    
    if($routeParams.activityid) {

      console.log($routeParams);

        function getUsers() {
          var defer = $q.defer();
          firebase.database().ref('/'+$routeParams.userid+'/'+$routeParams.date+'/' + $routeParams.activityid).on('value', function (snapshot) {
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
    console.log($routeParams.date);
    //var userId = $scope.userid;
    //var date = '150616';
    /*firebase.database().ref(userId+'/').set({

    })*/
    if(!$routeParams.activityid) {
        var newPostKey = firebase.database().ref($routeParams.userid + '/').child($routeParams.date).push().key;
      }
      else var newPostKey = $routeParams.activityid;
      
        var updates = {};
        updates['/' + $routeParams.userid  + '/' + $routeParams.date + '/' + newPostKey + '/type'] = "localTravel";
        updates['/' + $routeParams.userid  + '/' + $routeParams.date + '/' + newPostKey + '/planning'] = data.planning;
        //updates['/' + userId + '/' + date + '/' + newPostKey + '/planning/start'] = data.plan.start;
        //updates['/' + userId + '/' + date + '/' + newPostKey + '/planning/end'] = data.plan.end;

        return firebase.database().ref().update(updates);
    
  };

}); // Controller