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
import { V1NodeConfigSource } from './v1NodeConfigSource';

/**
* NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
*/
export class V1NodeConfigStatus {
    'active'?: V1NodeConfigSource;
    'assigned'?: V1NodeConfigSource;
    /**
    * Error describes any problems reconciling the Spec.ConfigSource to the Active config. Errors may occur, for example, attempting to checkpoint Spec.ConfigSource to the local Assigned record, attempting to checkpoint the payload associated with Spec.ConfigSource, attempting to load or validate the Assigned config, etc. Errors may occur at different points while syncing config. Earlier errors (e.g. download or checkpointing errors) will not result in a rollback to LastKnownGood, and may resolve across Kubelet retries. Later errors (e.g. loading or validating a checkpointed config) will result in a rollback to LastKnownGood. In the latter case, it is usually possible to resolve the error by fixing the config assigned in Spec.ConfigSource. You can find additional information for debugging by searching the error message in the Kubelet log. Error is a human-readable description of the error state; machines can check whether or not Error is empty, but should not rely on the stability of the Error text across Kubelet versions.
    */
    'error'?: string;
    'lastKnownGood'?: V1NodeConfigSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "V1NodeConfigSource"
        },
        {
            "name": "assigned",
            "baseName": "assigned",
            "type": "V1NodeConfigSource"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "lastKnownGood",
            "baseName": "lastKnownGood",
            "type": "V1NodeConfigSource"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeConfigStatus.attributeTypeMap;
    }
}

