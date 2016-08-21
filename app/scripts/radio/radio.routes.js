(function () {
  'use strict';

  angular
    .module('app.radio')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('radio', {
          url: '/radio/soulful',
          templateUrl: '/scripts/radio/radio-view.html',
          controller: 'RadioController',
          controllerAs: 'vm',
          resolve: {
            homeResolve: getTrackInfo
          }
        })
        .state('radios', {
          url: '/radio',
          templateUrl: '/scripts/radio/radio-list.html',
          controller: 'RadioController',
          controllerAs: 'vm',
          resolve: {
            homeResolve: getTrackInfo
          }
        })
        .state('track', {
          url: '/track',
          templateUrl: '/scripts/radio/track.html',
          controller: 'RadioController',
          controllerAs: 'vm',
          resolve: {
            homeResolve: getTrackInfo
          }
        })
    });

  getTrackInfo.$inject = ['$q', 'Icecast', 'Track'];

  /* @ngInject */
  function getTrackInfo($q, Icecast, Track) {

    return Icecast.nowPlaying().then(function (data) {

      var chlFullTitle,
        slfFullTitle,
        promises,
        trackInfo = {};

      chlFullTitle = data.icestats.source[0].title.split('__');
      slfFullTitle = data.icestats.source[1].title.split('__');

      promises = [getChlInfo(), getSlfInfo()];

      return $q.all(promises).then(function () {
        return trackInfo;
      });

      function getChlInfo() {

        return Track.trackInfo(chlFullTitle[0], chlFullTitle[1], chlFullTitle[2]).then(function (info) {
          trackInfo.chl = info[0];
          trackInfo.chl.coverUrl = 'https://s3.eu-central-1.amazonaws.com/smx-static/RaiNAS_1/RaiNAS/music/live/covers/' + info[0].cover;
        });

      }

      function getSlfInfo() {

        return Track.trackInfo(slfFullTitle[0], slfFullTitle[1], slfFullTitle[2]).then(function (info) {
          trackInfo.slf = info[0];
          trackInfo.slf.coverUrl = 'https://s3.eu-central-1.amazonaws.com/smx-static/RaiNAS_1/RaiNAS/music/live/covers/' + info[0].cover;
        });

      }

    });

  }

})();
