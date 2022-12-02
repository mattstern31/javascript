/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1beta1QueuingConfiguration } from './v1beta1QueuingConfiguration';

/**
* LimitResponse defines how to handle requests that can not be executed right now.
*/
export class V1beta1LimitResponse {
    'queuing'?: V1beta1QueuingConfiguration;
    /**
    * `type` is \"Queue\" or \"Reject\". \"Queue\" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. \"Reject\" means that requests that can not be executed upon arrival are rejected. Required.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "queuing",
            "baseName": "queuing",
            "type": "V1beta1QueuingConfiguration"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1LimitResponse.attributeTypeMap;
    }
}

