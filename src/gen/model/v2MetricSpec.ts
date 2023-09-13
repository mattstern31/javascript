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
import { V2ContainerResourceMetricSource } from './v2ContainerResourceMetricSource';
import { V2ExternalMetricSource } from './v2ExternalMetricSource';
import { V2ObjectMetricSource } from './v2ObjectMetricSource';
import { V2PodsMetricSource } from './v2PodsMetricSource';
import { V2ResourceMetricSource } from './v2ResourceMetricSource';

/**
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
*/
export class V2MetricSpec {
    'containerResource'?: V2ContainerResourceMetricSource;
    'external'?: V2ExternalMetricSource;
    'object'?: V2ObjectMetricSource;
    'pods'?: V2PodsMetricSource;
    'resource'?: V2ResourceMetricSource;
    /**
    * type is the type of metric source.  It should be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerResource",
            "baseName": "containerResource",
            "type": "V2ContainerResourceMetricSource"
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "V2ExternalMetricSource"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "V2ObjectMetricSource"
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "V2PodsMetricSource"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V2ResourceMetricSource"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2MetricSpec.attributeTypeMap;
    }
}

