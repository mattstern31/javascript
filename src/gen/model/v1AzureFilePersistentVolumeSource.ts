/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
export class V1AzureFilePersistentVolumeSource {
    /**
    * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    /**
    * the name of secret that contains Azure Storage Account Name and Key
    */
    'secretName': string;
    /**
    * the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
    */
    'secretNamespace'?: string;
    /**
    * Share Name
    */
    'shareName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        },
        {
            "name": "secretNamespace",
            "baseName": "secretNamespace",
            "type": "string"
        },
        {
            "name": "shareName",
            "baseName": "shareName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1AzureFilePersistentVolumeSource.attributeTypeMap;
    }
}

