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
import V1RollingUpdateDeployment from './V1RollingUpdateDeployment';





/**
* The V1DeploymentStrategy model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1DeploymentStrategy
* @version 0.3-SNAPSHOT
*/
export default class V1DeploymentStrategy {
    /**
    * Constructs a new <code>V1DeploymentStrategy</code>.
    * DeploymentStrategy describes how to replace existing pods with new ones.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1DeploymentStrategy
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1DeploymentStrategy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1DeploymentStrategy} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1DeploymentStrategy} The populated <code>V1DeploymentStrategy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1DeploymentStrategy();

            
            
            

            if (data.hasOwnProperty('rollingUpdate')) {
                obj['rollingUpdate'] = V1RollingUpdateDeployment.constructFromObject(data['rollingUpdate']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1RollingUpdateDeployment} rollingUpdate
    */
    rollingUpdate = undefined;
    /**
    * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
    * @member {String} type
    */
    type = undefined;








}


