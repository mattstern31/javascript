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


import ApiClient from '../ApiClient';





/**
* The V1ServiceReference model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1ServiceReference
* @version 0.3-SNAPSHOT
*/
export default class V1ServiceReference {
    /**
    * Constructs a new <code>V1ServiceReference</code>.
    * ServiceReference holds a reference to Service.legacy.k8s.io
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1ServiceReference
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1ServiceReference</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1ServiceReference} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1ServiceReference} The populated <code>V1ServiceReference</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ServiceReference();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
        }
        return obj;
    }

    /**
    * Name is the name of the service
    * @member {String} name
    */
    name = undefined;
    /**
    * Namespace is the namespace of the service
    * @member {String} namespace
    */
    namespace = undefined;








}


