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
    instance = new KubernetesJsClient.Apiregistration_v1beta1Api();
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

  describe('Apiregistration_v1beta1Api', function() {
    describe('createAPIService', function() {
      it('should call createAPIService successfully', function(done) {
        //uncomment below and update the code to test createAPIService
        //instance.createAPIService(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAPIService', function() {
      it('should call deleteAPIService successfully', function(done) {
        //uncomment below and update the code to test deleteAPIService
        //instance.deleteAPIService(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionAPIService', function() {
      it('should call deleteCollectionAPIService successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionAPIService
        //instance.deleteCollectionAPIService(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIResources', function() {
      it('should call getAPIResources successfully', function(done) {
        //uncomment below and update the code to test getAPIResources
        //instance.getAPIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAPIService', function() {
      it('should call listAPIService successfully', function(done) {
        //uncomment below and update the code to test listAPIService
        //instance.listAPIService(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAPIService', function() {
      it('should call patchAPIService successfully', function(done) {
        //uncomment below and update the code to test patchAPIService
        //instance.patchAPIService(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAPIService', function() {
      it('should call readAPIService successfully', function(done) {
        //uncomment below and update the code to test readAPIService
        //instance.readAPIService(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAPIService', function() {
      it('should call replaceAPIService successfully', function(done) {
        //uncomment below and update the code to test replaceAPIService
        //instance.replaceAPIService(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAPIServiceStatus', function() {
      it('should call replaceAPIServiceStatus successfully', function(done) {
        //uncomment below and update the code to test replaceAPIServiceStatus
        //instance.replaceAPIServiceStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
