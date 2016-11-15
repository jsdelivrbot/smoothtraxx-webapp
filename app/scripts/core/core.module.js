(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngTouch',
            'ngResource',
            // 'ngMaterial',
            'ui.router',
            // 'duScroll',
            'angularScreenfull'
        ])
        .run(appRun);

        appRun.$inject = ['$rootScope'];
        function appRun($rootScope) {
            $rootScope.playerIsVisible = false; //player always hidden at startup
        }




    // .config(function($mdThemingProvider) {
    //   // $mdThemingProvider.theme('default').dark();
    //   // $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    //   // $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    // //   $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    // //   $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    // //     $mdThemingProvider.theme('default').primaryPalette('pink').accentPalette('orange');
    //     $mdThemingProvider.theme('default')
    //         .primaryPalette('grey',{'default': '900'})
    //         .accentPalette('grey',{'default': '700'})
    //         .backgroundPalette('grey',{'default': '900'})
    //         .dark();
    // })


})();
