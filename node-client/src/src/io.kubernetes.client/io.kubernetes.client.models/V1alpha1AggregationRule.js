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
import V1LabelSelector from './V1LabelSelector';





/**
* The V1alpha1AggregationRule model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1alpha1AggregationRule
* @version 0.3-SNAPSHOT
*/
export default class V1alpha1AggregationRule {
    /**
    * Constructs a new <code>V1alpha1AggregationRule</code>.
    * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1AggregationRule
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1alpha1AggregationRule</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1AggregationRule} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1AggregationRule} The populated <code>V1alpha1AggregationRule</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1alpha1AggregationRule();

            
            
            

            if (data.hasOwnProperty('clusterRoleSelectors')) {
                obj['clusterRoleSelectors'] = ApiClient.convertToType(data['clusterRoleSelectors'], [V1LabelSelector]);
            }
        }
        return obj;
    }

    /**
    * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
    * @member {Array.<module:io.kubernetes.client/io.kubernetes.client.models/V1LabelSelector>} clusterRoleSelectors
    */
    clusterRoleSelectors = undefined;








}


