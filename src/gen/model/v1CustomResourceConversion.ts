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
import { V1WebhookConversion } from './v1WebhookConversion';

/**
* CustomResourceConversion describes how to convert different versions of a CR.
*/
export class V1CustomResourceConversion {
    /**
    * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
    */
    'strategy': string;
    'webhook'?: V1WebhookConversion;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "string"
        },
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "V1WebhookConversion"
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceConversion.attributeTypeMap;
    }
}

