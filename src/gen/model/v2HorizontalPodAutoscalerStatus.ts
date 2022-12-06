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
import { V2HorizontalPodAutoscalerCondition } from './v2HorizontalPodAutoscalerCondition';
import { V2MetricStatus } from './v2MetricStatus';

/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
*/
export class V2HorizontalPodAutoscalerStatus {
    /**
    * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
    */
    'conditions'?: Array<V2HorizontalPodAutoscalerCondition>;
    /**
    * currentMetrics is the last read state of the metrics used by this autoscaler.
    */
    'currentMetrics'?: Array<V2MetricStatus>;
    /**
    * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
    */
    'currentReplicas'?: number;
    /**
    * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
    */
    'desiredReplicas': number;
    /**
    * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
    */
    'lastScaleTime'?: Date;
    /**
    * observedGeneration is the most recent generation observed by this autoscaler.
    */
    'observedGeneration'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V2HorizontalPodAutoscalerCondition>"
        },
        {
            "name": "currentMetrics",
            "baseName": "currentMetrics",
            "type": "Array<V2MetricStatus>"
        },
        {
            "name": "currentReplicas",
            "baseName": "currentReplicas",
            "type": "number"
        },
        {
            "name": "desiredReplicas",
            "baseName": "desiredReplicas",
            "type": "number"
        },
        {
            "name": "lastScaleTime",
            "baseName": "lastScaleTime",
            "type": "Date"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V2HorizontalPodAutoscalerStatus.attributeTypeMap;
    }
}

