/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* VolumeMount describes a mounting of a Volume within a container.
*/
export class V1VolumeMount {
    /**
    * Path within the container at which the volume should be mounted.  Must not contain \':\'.
    */
    'mountPath': string;
    /**
    * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
    */
    'mountPropagation'?: string;
    /**
    * This must match the Name of a Volume.
    */
    'name': string;
    /**
    * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
    */
    'readOnly'?: boolean;
    /**
    * Path within the volume from which the container\'s volume should be mounted. Defaults to \"\" (volume\'s root).
    */
    'subPath'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mountPath",
            "baseName": "mountPath",
            "type": "string"
        },
        {
            "name": "mountPropagation",
            "baseName": "mountPropagation",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "subPath",
            "baseName": "subPath",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeMount.attributeTypeMap;
    }
}

