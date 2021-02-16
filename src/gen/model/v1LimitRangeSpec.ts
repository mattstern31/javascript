/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1LimitRangeItem } from './v1LimitRangeItem';

/**
* LimitRangeSpec defines a min/max usage limit for resources that match on kind.
*/
export class V1LimitRangeSpec {
    /**
    * Limits is the list of LimitRangeItem objects that are enforced.
    */
    'limits': Array<V1LimitRangeItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limits",
            "baseName": "limits",
            "type": "Array<V1LimitRangeItem>"
        }    ];

    static getAttributeTypeMap() {
        return V1LimitRangeSpec.attributeTypeMap;
    }
}

