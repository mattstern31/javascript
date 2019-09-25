/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* ResourceRequirements describes the compute resource requirements.
*/
export class V1ResourceRequirements {
    /**
    * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
    */
    'limits'?: { [key: string]: string; };
    /**
    * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
    */
    'requests'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return V1ResourceRequirements.attributeTypeMap;
    }
}

