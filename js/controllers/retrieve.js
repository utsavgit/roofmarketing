myApp.controller('retrieveData', function($scope) {

	firebase.database().ref('posts/' + postId + '/starCount').on('value', function(snapshot) {
	  updateStarCount(postElement, snapshot.val());
	});

}); // Controller
