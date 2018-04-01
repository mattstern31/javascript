/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.10.1
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
    instance = new KubernetesJsClient.V1ServiceSpec();
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

  describe('V1ServiceSpec', function() {
    it('should create an instance of V1ServiceSpec', function() {
      // uncomment below and update the code to test V1ServiceSpec
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be.a(KubernetesJsClient.V1ServiceSpec);
    });

    it('should have the property clusterIP (base name: "clusterIP")', function() {
      // uncomment below and update the code to test the property clusterIP
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property externalIPs (base name: "externalIPs")', function() {
      // uncomment below and update the code to test the property externalIPs
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property externalName (base name: "externalName")', function() {
      // uncomment below and update the code to test the property externalName
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property externalTrafficPolicy (base name: "externalTrafficPolicy")', function() {
      // uncomment below and update the code to test the property externalTrafficPolicy
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property healthCheckNodePort (base name: "healthCheckNodePort")', function() {
      // uncomment below and update the code to test the property healthCheckNodePort
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property loadBalancerIP (base name: "loadBalancerIP")', function() {
      // uncomment below and update the code to test the property loadBalancerIP
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property loadBalancerSourceRanges (base name: "loadBalancerSourceRanges")', function() {
      // uncomment below and update the code to test the property loadBalancerSourceRanges
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property ports (base name: "ports")', function() {
      // uncomment below and update the code to test the property ports
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property publishNotReadyAddresses (base name: "publishNotReadyAddresses")', function() {
      // uncomment below and update the code to test the property publishNotReadyAddresses
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property selector (base name: "selector")', function() {
      // uncomment below and update the code to test the property selector
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property sessionAffinity (base name: "sessionAffinity")', function() {
      // uncomment below and update the code to test the property sessionAffinity
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property sessionAffinityConfig (base name: "sessionAffinityConfig")', function() {
      // uncomment below and update the code to test the property sessionAffinityConfig
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KubernetesJsClient.V1ServiceSpec();
      //expect(instance).to.be();
    });

  });

}));
