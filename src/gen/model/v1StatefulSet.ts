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
import { V1ObjectMeta } from './v1ObjectMeta';
import { V1StatefulSetSpec } from './v1StatefulSetSpec';
import { V1StatefulSetStatus } from './v1StatefulSetStatus';

/**
* StatefulSet represents a set of pods with consistent identities. Identities are defined as:   - Network: A single stable DNS and hostname.   - Storage: As many VolumeClaims as requested.  The StatefulSet guarantees that a given network identity will always map to the same storage identity.
*/
export class V1StatefulSet {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1StatefulSetSpec;
    'status'?: V1StatefulSetStatus;

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
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1StatefulSetSpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1StatefulSetStatus"
        }    ];

    static getAttributeTypeMap() {
        return V1StatefulSet.attributeTypeMap;
    }
}

