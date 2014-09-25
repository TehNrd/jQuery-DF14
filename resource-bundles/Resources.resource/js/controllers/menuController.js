menuApp.controller('MenuController', function($scope){
	$scope.test = 'hi';

	$scope.menuItems = [
		{color: '#28ABE3', icon: 'fa-car'},
		{color: '#1FDA9A', icon: 'fa-database'},
		{color: '#F7EAC8', icon: 'fa-area-chart'},
		{color: '#E8B71A', icon: 'fa-cloud'},
		{color: '#DB3340', icon: 'fa-bug'},
	];

});
