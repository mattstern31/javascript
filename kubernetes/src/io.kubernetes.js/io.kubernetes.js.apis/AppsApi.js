/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1APIGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../io.kubernetes.js.models/V1APIGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.AppsApi = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1APIGroup);
  }
}(this, function(ApiClient, V1APIGroup) {
  'use strict';

  /**
   * Apps service.
   * @module io.kubernetes.js/io.kubernetes.js.apis/AppsApi
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new AppsApi. 
   * @alias module:io.kubernetes.js/io.kubernetes.js.apis/AppsApi
   * @class
   * @param {module:io.kubernetes.js/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:io.kubernetes.js/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAPIGroup operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/AppsApi~getAPIGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1APIGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get information of a group
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/AppsApi~getAPIGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1APIGroup}
     */
    this.getAPIGroup = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1APIGroup;

      return this.apiClient.callApi(
        '/apis/apps/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
