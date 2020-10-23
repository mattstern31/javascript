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
import { V1GroupVersionForDiscovery } from './v1GroupVersionForDiscovery';
import { V1ServerAddressByClientCIDR } from './v1ServerAddressByClientCIDR';

/**
* APIGroup contains the name, the supported versions, and the preferred version of a group.
*/
export class V1APIGroup {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    /**
    * name is the name of the group.
    */
    'name': string;
    'preferredVersion'?: V1GroupVersionForDiscovery;
    /**
    * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
    */
    'serverAddressByClientCIDRs'?: Array<V1ServerAddressByClientCIDR>;
    /**
    * versions are the versions supported in this group.
    */
    'versions': Array<V1GroupVersionForDiscovery>;

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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "preferredVersion",
            "baseName": "preferredVersion",
            "type": "V1GroupVersionForDiscovery"
        },
        {
            "name": "serverAddressByClientCIDRs",
            "baseName": "serverAddressByClientCIDRs",
            "type": "Array<V1ServerAddressByClientCIDR>"
        },
        {
            "name": "versions",
            "baseName": "versions",
            "type": "Array<V1GroupVersionForDiscovery>"
        }    ];

    static getAttributeTypeMap() {
        return V1APIGroup.attributeTypeMap;
    }
}

