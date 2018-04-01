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
* The V1HostPathVolumeSource model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1HostPathVolumeSource
* @version 0.3-SNAPSHOT
*/
export default class V1HostPathVolumeSource {
    /**
    * Constructs a new <code>V1HostPathVolumeSource</code>.
    * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1HostPathVolumeSource
    * @class
    * @param path {String} Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
    */

    constructor(path) {
        

        
        

        this['path'] = path;

        
    }

    /**
    * Constructs a <code>V1HostPathVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1HostPathVolumeSource} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1HostPathVolumeSource} The populated <code>V1HostPathVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1HostPathVolumeSource();

            
            
            

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
    * @member {String} path
    */
    path = undefined;
    /**
    * Type for HostPath Volume Defaults to \"\" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
    * @member {String} type
    */
    type = undefined;








}


