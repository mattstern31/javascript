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
import { V1JobSpec } from './v1JobSpec';
import { V1ObjectMeta } from './v1ObjectMeta';

/**
* JobTemplateSpec describes the data a Job should have when created from a template
*/
export class V1JobTemplateSpec {
    'metadata'?: V1ObjectMeta;
    'spec'?: V1JobSpec;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1JobSpec"
        }    ];

    static getAttributeTypeMap() {
        return V1JobTemplateSpec.attributeTypeMap;
    }
}

