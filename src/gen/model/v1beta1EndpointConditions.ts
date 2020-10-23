/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.19.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* EndpointConditions represents the current condition of an endpoint.
*/
export class V1beta1EndpointConditions {
    /**
    * ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready.
    */
    'ready'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ready",
            "baseName": "ready",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1EndpointConditions.attributeTypeMap;
    }
}

