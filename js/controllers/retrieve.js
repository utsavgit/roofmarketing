myApp.controller('retrieveData', function($scope) {

	firebase.database().ref('posts/' + postId + '/starCount').on('value', function(snapshot) {
		console.log(snapshot.val());
	});

}); // Controller
