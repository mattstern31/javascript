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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1Deployment', 'io.kubernetes.js/io.kubernetes.js.models/V1ListMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AppsV1beta1Deployment'), require('./V1ListMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.AppsV1beta1DeploymentList = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.AppsV1beta1Deployment, root.KubernetesJsClient.V1ListMeta);
  }
}(this, function(ApiClient, AppsV1beta1Deployment, V1ListMeta) {
  'use strict';




  /**
   * The AppsV1beta1DeploymentList model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1DeploymentList
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>AppsV1beta1DeploymentList</code>.
   * DeploymentList is a list of Deployments.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1DeploymentList
   * @class
   * @param items {Array.<module:io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1Deployment>} Items is the list of Deployments.
   */
  var exports = function(items) {
    var _this = this;


    _this['items'] = items;


  };

  /**
   * Constructs a <code>AppsV1beta1DeploymentList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1DeploymentList} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1DeploymentList} The populated <code>AppsV1beta1DeploymentList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [AppsV1beta1Deployment]);
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ListMeta.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources
   * @member {String} apiVersion
   */
  exports.prototype['apiVersion'] = undefined;
  /**
   * Items is the list of Deployments.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1Deployment>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Standard list metadata.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ListMeta} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


