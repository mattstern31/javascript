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
import V1beta2RollingUpdateStatefulSetStrategy from './V1beta2RollingUpdateStatefulSetStrategy';





/**
* The V1beta2StatefulSetUpdateStrategy model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1beta2StatefulSetUpdateStrategy
* @version 0.3-SNAPSHOT
*/
export default class V1beta2StatefulSetUpdateStrategy {
    /**
    * Constructs a new <code>V1beta2StatefulSetUpdateStrategy</code>.
    * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1beta2StatefulSetUpdateStrategy
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta2StatefulSetUpdateStrategy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1beta2StatefulSetUpdateStrategy} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1beta2StatefulSetUpdateStrategy} The populated <code>V1beta2StatefulSetUpdateStrategy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta2StatefulSetUpdateStrategy();

            
            
            

            if (data.hasOwnProperty('rollingUpdate')) {
                obj['rollingUpdate'] = V1beta2RollingUpdateStatefulSetStrategy.constructFromObject(data['rollingUpdate']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
    * @member {module:io.kubernetes.client/io.kubernetes.client.models/V1beta2RollingUpdateStatefulSetStrategy} rollingUpdate
    */
    rollingUpdate = undefined;
    /**
    * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
    * @member {String} type
    */
    type = undefined;








}


