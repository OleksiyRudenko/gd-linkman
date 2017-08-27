'use strict';

/*
 * Copyright 2017 Oleksiy Rudenko
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Configure our app
angular.module('linkman', ['linkman.login', 'linkman.drive', 'ngRoute', 'ngMaterial', 'hc.marked'])
  .constant('apiKey', null) //  AIzaSyC5VUiphYhn2Hq_8rhPoizmLH1H20-SykI
  .constant('clientId', ' 768799796416-doh1ogg8oflvcma5l776u05a2eb267dh.apps.googleusercontent.com')
  .constant('applicationId', '768799796416')
  .constant('scope', ['email', 'profile', 'https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.install'])
  .constant('loadApis', {
    'drive' : 'v2'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/link/:fileId?', {
        templateUrl: 'components/linkman/linkman-main.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl'
      })
      .when('/about/', {
        templateUrl: 'components/doc/about.html'
        // controller: 'MainCtrl',
        // controllerAs: 'ctrl'
      })
      .when('/privacypolicy/', {
        templateUrl: 'components/doc/privacypolicy.html'
        // controller: 'MainCtrl',
        // controllerAs: 'ctrl'
      })
      .when('/tos/', {
        templateUrl: 'components/doc/tos.html'
      })
      .otherwise({
        redirectTo: function() {
          return '/about/';
        }
      });
  });
