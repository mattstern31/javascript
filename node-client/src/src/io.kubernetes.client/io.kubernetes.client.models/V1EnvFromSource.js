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
import V1ConfigMapEnvSource from './V1ConfigMapEnvSource';
import V1SecretEnvSource from './V1SecretEnvSource';





/**
* The V1EnvFromSource model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1EnvFromSource
* @version 0.3-SNAPSHOT
*/
export default class V1EnvFromSource {
    /**
    * Constructs a new <code>V1EnvFromSource</code>.
    * EnvFromSource represents the source of a set of ConfigMaps
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1EnvFromSource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1EnvFromSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1EnvFromSource} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1EnvFromSource} The populated <code>V1EnvFromSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EnvFromSource();

            
            
            

            if (data.hasOwnProperty('configMapRef')) {
                obj['configMapRef'] = V1ConfigMapEnvSource.constructFromObject(data['configMapRef']);
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('secretRef')) {
                obj['secretRef'] = V1SecretEnvSource.constructFromObject(data['secretRef']);
            }
        }
        return obj;
    }

    /**
    * The ConfigMap to select from
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1ConfigMapEnvSource} configMapRef
    */
    configMapRef = undefined;
    /**
    * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
    * @member {String} prefix
    */
    prefix = undefined;
    /**
    * The Secret to select from
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1SecretEnvSource} secretRef
    */
    secretRef = undefined;








}


