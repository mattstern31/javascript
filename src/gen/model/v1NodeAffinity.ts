/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1NodeSelector } from './v1NodeSelector';
import { V1PreferredSchedulingTerm } from './v1PreferredSchedulingTerm';

/**
* Node affinity is a group of node affinity scheduling rules.
*/
export class V1NodeAffinity {
    /**
    * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
    */
    'preferredDuringSchedulingIgnoredDuringExecution'?: Array<V1PreferredSchedulingTerm>;
    'requiredDuringSchedulingIgnoredDuringExecution'?: V1NodeSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferredDuringSchedulingIgnoredDuringExecution",
            "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<V1PreferredSchedulingTerm>"
        },
        {
            "name": "requiredDuringSchedulingIgnoredDuringExecution",
            "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
            "type": "V1NodeSelector"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeAffinity.attributeTypeMap;
    }
}

