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
import { IntOrString } from '../../types';

/**
* TCPSocketAction describes an action based on opening a socket
*/
export class V1TCPSocketAction {
    /**
    * Optional: Host name to connect to, defaults to the pod IP.
    */
    'host'?: string;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'port': IntOrString;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "IntOrString"
        }    ];

    static getAttributeTypeMap() {
        return V1TCPSocketAction.attributeTypeMap;
    }
}

