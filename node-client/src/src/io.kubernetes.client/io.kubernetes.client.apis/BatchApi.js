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


import ApiClient from "../ApiClient";
import V1APIGroup from '../io.kubernetes.client.models/V1APIGroup';

/**
* Batch service.
* @module io.kubernetes.client/io.kubernetes.client.apis/BatchApi
* @version 0.3-SNAPSHOT
*/
export default class BatchApi {

    /**
    * Constructs a new BatchApi. 
    * @alias module:io.kubernetes.client/io.kubernetes.client.apis/BatchApi
    * @class
    * @param {module:io.kubernetes.client/ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:io.kubernetes.client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAPIGroup operation.
     * @callback module:io.kubernetes.client/io.kubernetes.client.apis/BatchApi~getAPIGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1APIGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get information of a group
     * @param {module:io.kubernetes.client/io.kubernetes.client.apis/BatchApi~getAPIGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.client/io.kubernetes.client.models/V1APIGroup}
     */
    getAPIGroup(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1APIGroup;

      return this.apiClient.callApi(
        '/apis/batch/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
