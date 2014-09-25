//Enter event for input fields
menuApp.directive('barMenu', function () {
    return {
        restrict: 'E',
        scope: {
            menuItems: '=',
        },
        link: function($scope, element, attrs){ //
            var menuItems = $scope.menuItems;

            //Determine the height of each bar by dividing height of window by number of menu items
            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            var itemHeight = windowHeight / menuItems.length;
            var fontSize = itemHeight * 0.37;

            //Init menu
            setupMenuList();

            function setupMenuList(){
	            //Build out the menu items HTML
	            var menuHtml = '';
	            for(var i = 0; i < menuItems.length; i++){
	            	var menuItem = menuItems[i];
	            	menuHtml += '<div class="menuBarItem" style="height:'+itemHeight+'px; background-color:'+menuItem.color+';">'+
	            					'<span class="menuBarIcon fa '+menuItem.icon+'" style="line-height:'+itemHeight+'px;font-size:'+fontSize+'px;"/>'+
	            				'</div>';
	            }
				
	            //Add menu items to the page            
	            $(element).html(menuHtml);

	            //Add click/touch event listener
	            $('.menuBarItem').click(function(){
	            	expandMenuItem($(this))
	            });
            }

            function expandMenuItem($menuItem){
            	//Expand this menu item to 100% of window
            	$menuItem.transition({height: windowHeight}).transition({x: windowWidth * -1});

            	//Collapse all the siblings
            	$menuItem.siblings().transition({height: 0});
            }


            //Create a refresh button to reload the demo
            $('<span class="fa fa-refresh resetIcon"></span>').appendTo('body').click(function(){
            	setupMenuList();
            });

        }
    };
});