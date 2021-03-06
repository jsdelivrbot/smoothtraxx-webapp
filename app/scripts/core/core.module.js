(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngTouch',
            'ngResource',
            'ui.router'
        ])
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$stateParams'];
    function appRun($rootScope, $state, $stateParams) {
        $rootScope.playerIsVisible = false; // player always hidden at startup
        $rootScope.sideNavIsVisible = false; // sideNav always hidden at startup
        $rootScope.navTitle = '';
        $rootScope.tunerIsVisible = false;
        $rootScope.poolIsVisible = false;
        $rootScope.headerIsTransparent = false;

        // $rootScope.$state = $state;
        // $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            $rootScope.stateIsLoading = true;
        });


        $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.stateIsLoading = false;
        });

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
