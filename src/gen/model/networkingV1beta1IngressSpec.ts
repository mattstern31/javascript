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
import { NetworkingV1beta1IngressBackend } from './networkingV1beta1IngressBackend';
import { NetworkingV1beta1IngressRule } from './networkingV1beta1IngressRule';
import { NetworkingV1beta1IngressTLS } from './networkingV1beta1IngressTLS';

/**
* IngressSpec describes the Ingress the user wishes to exist.
*/
export class NetworkingV1beta1IngressSpec {
    'backend'?: NetworkingV1beta1IngressBackend;
    /**
    * IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
    */
    'ingressClassName'?: string;
    /**
    * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
    */
    'rules'?: Array<NetworkingV1beta1IngressRule>;
    /**
    * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
    */
    'tls'?: Array<NetworkingV1beta1IngressTLS>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backend",
            "baseName": "backend",
            "type": "NetworkingV1beta1IngressBackend"
        },
        {
            "name": "ingressClassName",
            "baseName": "ingressClassName",
            "type": "string"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<NetworkingV1beta1IngressRule>"
        },
        {
            "name": "tls",
            "baseName": "tls",
            "type": "Array<NetworkingV1beta1IngressTLS>"
        }    ];

    static getAttributeTypeMap() {
        return NetworkingV1beta1IngressSpec.attributeTypeMap;
    }
}

