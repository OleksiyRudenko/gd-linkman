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

var module = angular.module('linkman');


module.controller('MainCtrl', ['$scope', '$location', '$routeParams', '$q', '$mdToast', 'drive', 'login', function ($scope, $location, $routeParams, $q,  $mdToast, drive, login) {

  var DEFAULT_FILE = {
    content: '',
    metadata: ''
  };

  $scope.file = null;
  $scope.loading = true;

  /**
   * Displays a short message as a toast
   *
   * @param {String} message Message to display
   */
  var showMessage = function(message) {
    $mdToast.show($mdToast.simple().content(message));
  };

  /**
   * Internal helper to load a file. If no ID given or unable to read the specified file, a blank template
   * is loaded.
   *
   * @param {String} fileId ID of the file to load
   * @return {Promise} promise that resolves once the file is loaded
   */
  var load = function(fileId) {
    var filePromise = fileId ? drive.loadFile(fileId) : $q.when(DEFAULT_FILE);
    return filePromise.then(function(file) {
      $scope.file = file;
      return $scope.file;
    }, function(err) {
      if(fileId) {
        showMessage('Unable to load file');
      }
      return load();
    });
  };

  /**
   * Check to see if the URL should be changed (new doc ID), redirects
   * to the new URL if so.
   *
   * @param {String} id Document ID
   */
  var redirectIfChanged = function(id) {
    if ($scope.file.metadata.id != id) {
      $location.path('/link/' + id);
      $location.search('');
      $location.replace();
    }
  };


  /**
   * Handle the close tab click. Closes current tab (window)
   */
  this.closeTab = function($event) {
    window.close();
  };

  // Authenticate & load doc
  var loadFn = angular.bind($scope.ctrl, load, $routeParams.fileId);
  login.checkAuth($routeParams.user).then(loadFn, function() {
    return login.showLoginDialog(null, $routeParams.user).then(loadFn);
  }).finally(function() {
    $scope.loading = false;
  });

}]);
