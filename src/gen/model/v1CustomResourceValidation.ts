/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1JSONSchemaProps } from './v1JSONSchemaProps';

/**
* CustomResourceValidation is a list of validation methods for CustomResources.
*/
export class V1CustomResourceValidation {
    'openAPIV3Schema'?: V1JSONSchemaProps;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "openAPIV3Schema",
            "baseName": "openAPIV3Schema",
            "type": "V1JSONSchemaProps"
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceValidation.attributeTypeMap;
    }
}

