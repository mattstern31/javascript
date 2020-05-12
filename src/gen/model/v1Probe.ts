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
import { V1ExecAction } from './v1ExecAction';
import { V1HTTPGetAction } from './v1HTTPGetAction';
import { V1TCPSocketAction } from './v1TCPSocketAction';

/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
*/
export class V1Probe {
    'exec'?: V1ExecAction;
    /**
    * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
    */
    'failureThreshold'?: number;
    'httpGet'?: V1HTTPGetAction;
    /**
    * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'initialDelaySeconds'?: number;
    /**
    * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
    */
    'periodSeconds'?: number;
    /**
    * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
    */
    'successThreshold'?: number;
    'tcpSocket'?: V1TCPSocketAction;
    /**
    * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'timeoutSeconds'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "V1ExecAction"
        },
        {
            "name": "failureThreshold",
            "baseName": "failureThreshold",
            "type": "number"
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "V1HTTPGetAction"
        },
        {
            "name": "initialDelaySeconds",
            "baseName": "initialDelaySeconds",
            "type": "number"
        },
        {
            "name": "periodSeconds",
            "baseName": "periodSeconds",
            "type": "number"
        },
        {
            "name": "successThreshold",
            "baseName": "successThreshold",
            "type": "number"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "V1TCPSocketAction"
        },
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1Probe.attributeTypeMap;
    }
}

