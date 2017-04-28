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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressPath'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1beta1HTTPIngressPath'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1HTTPIngressRuleValue = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1beta1HTTPIngressPath);
  }
}(this, function(ApiClient, V1beta1HTTPIngressPath) {
  'use strict';




  /**
   * The V1beta1HTTPIngressRuleValue model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressRuleValue
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1HTTPIngressRuleValue</code>.
   * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://&lt;host&gt;/&lt;path&gt;?&lt;searchpart&gt; -&gt; backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last &#39;/&#39; and before the first &#39;?&#39; or &#39;#&#39;.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressRuleValue
   * @class
   * @param paths {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressPath>} A collection of paths that map requests to backends.
   */
  var exports = function(paths) {
    var _this = this;

    _this['paths'] = paths;
  };

  /**
   * Constructs a <code>V1beta1HTTPIngressRuleValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressRuleValue} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressRuleValue} The populated <code>V1beta1HTTPIngressRuleValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paths')) {
        obj['paths'] = ApiClient.convertToType(data['paths'], [V1beta1HTTPIngressPath]);
      }
    }
    return obj;
  }

  /**
   * A collection of paths that map requests to backends.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressPath>} paths
   */
  exports.prototype['paths'] = undefined;



  return exports;
}));


