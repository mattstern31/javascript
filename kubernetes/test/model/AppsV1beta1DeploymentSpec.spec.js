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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AppsV1beta1DeploymentSpec', function() {
    it('should create an instance of AppsV1beta1DeploymentSpec', function() {
      // uncomment below and update the code to test AppsV1beta1DeploymentSpec
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be.a(KubernetesJsClient.AppsV1beta1DeploymentSpec);
    });

    it('should have the property minReadySeconds (base name: "minReadySeconds")', function() {
      // uncomment below and update the code to test the property minReadySeconds
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property paused (base name: "paused")', function() {
      // uncomment below and update the code to test the property paused
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property progressDeadlineSeconds (base name: "progressDeadlineSeconds")', function() {
      // uncomment below and update the code to test the property progressDeadlineSeconds
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property replicas (base name: "replicas")', function() {
      // uncomment below and update the code to test the property replicas
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property revisionHistoryLimit (base name: "revisionHistoryLimit")', function() {
      // uncomment below and update the code to test the property revisionHistoryLimit
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property rollbackTo (base name: "rollbackTo")', function() {
      // uncomment below and update the code to test the property rollbackTo
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property selector (base name: "selector")', function() {
      // uncomment below and update the code to test the property selector
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property strategy (base name: "strategy")', function() {
      // uncomment below and update the code to test the property strategy
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KubernetesJsClient.AppsV1beta1DeploymentSpec();
      //expect(instance).to.be();
    });

  });

}));
