/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* BoundObjectReference is a reference to an object that a token is bound to.
*/
export class V1BoundObjectReference {
    /**
    * API version of the referent.
    */
    'apiVersion'?: string;
    /**
    * Kind of the referent. Valid kinds are \'Pod\' and \'Secret\'.
    */
    'kind'?: string;
    /**
    * Name of the referent.
    */
    'name'?: string;
    /**
    * UID of the referent.
    */
    'uid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1BoundObjectReference.attributeTypeMap;
    }
}

