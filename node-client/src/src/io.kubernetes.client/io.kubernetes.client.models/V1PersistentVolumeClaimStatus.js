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
import V1PersistentVolumeClaimCondition from './V1PersistentVolumeClaimCondition';





/**
* The V1PersistentVolumeClaimStatus model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaimStatus
* @version 0.3-SNAPSHOT
*/
export default class V1PersistentVolumeClaimStatus {
    /**
    * Constructs a new <code>V1PersistentVolumeClaimStatus</code>.
    * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaimStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1PersistentVolumeClaimStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaimStatus} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaimStatus} The populated <code>V1PersistentVolumeClaimStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PersistentVolumeClaimStatus();

            
            
            

            if (data.hasOwnProperty('accessModes')) {
                obj['accessModes'] = ApiClient.convertToType(data['accessModes'], ['String']);
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], {'String': 'String'});
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [V1PersistentVolumeClaimCondition]);
            }
            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], 'String');
            }
        }
        return obj;
    }

    /**
    * AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    * @member {Array.<String>} accessModes
    */
    accessModes = undefined;
    /**
    * Represents the actual resources of the underlying volume.
    * @member {Object.<String, String>} capacity
    */
    capacity = undefined;
    /**
    * Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
    * @member {Array.<module:io.kubernetes.client/io.kubernetes.client.models/V1PersistentVolumeClaimCondition>} conditions
    */
    conditions = undefined;
    /**
    * Phase represents the current phase of PersistentVolumeClaim.
    * @member {String} phase
    */
    phase = undefined;








}


