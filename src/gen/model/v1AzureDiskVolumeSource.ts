/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
*/
export class V1AzureDiskVolumeSource {
    /**
    * cachingMode is the Host Caching mode: None, Read Only, Read Write.
    */
    'cachingMode'?: string;
    /**
    * diskName is the Name of the data disk in the blob storage
    */
    'diskName': string;
    /**
    * diskURI is the URI of data disk in the blob storage
    */
    'diskURI': string;
    /**
    * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
    */
    'fsType'?: string;
    /**
    * kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
    */
    'kind'?: string;
    /**
    * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cachingMode",
            "baseName": "cachingMode",
            "type": "string"
        },
        {
            "name": "diskName",
            "baseName": "diskName",
            "type": "string"
        },
        {
            "name": "diskURI",
            "baseName": "diskURI",
            "type": "string"
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1AzureDiskVolumeSource.attributeTypeMap;
    }
}

