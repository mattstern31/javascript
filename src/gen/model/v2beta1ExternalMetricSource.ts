/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1LabelSelector } from './v1LabelSelector';

/**
* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one \"target\" type should be set.
*/
export class V2beta1ExternalMetricSource {
    /**
    * metricName is the name of the metric in question.
    */
    'metricName': string;
    'metricSelector'?: V1LabelSelector;
    /**
    * targetAverageValue is the target per-pod value of global metric (as a quantity). Mutually exclusive with TargetValue.
    */
    'targetAverageValue'?: string;
    /**
    * targetValue is the target value of the metric (as a quantity). Mutually exclusive with TargetAverageValue.
    */
    'targetValue'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metricName",
            "baseName": "metricName",
            "type": "string"
        },
        {
            "name": "metricSelector",
            "baseName": "metricSelector",
            "type": "V1LabelSelector"
        },
        {
            "name": "targetAverageValue",
            "baseName": "targetAverageValue",
            "type": "string"
        },
        {
            "name": "targetValue",
            "baseName": "targetValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2beta1ExternalMetricSource.attributeTypeMap;
    }
}

