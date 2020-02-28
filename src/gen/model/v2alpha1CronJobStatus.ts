/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1ObjectReference } from './v1ObjectReference';

/**
* CronJobStatus represents the current state of a cron job.
*/
export class V2alpha1CronJobStatus {
    /**
    * A list of pointers to currently running jobs.
    */
    'active'?: Array<V1ObjectReference>;
    /**
    * Information when was the last time the job was successfully scheduled.
    */
    'lastScheduleTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "Array<V1ObjectReference>"
        },
        {
            "name": "lastScheduleTime",
            "baseName": "lastScheduleTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V2alpha1CronJobStatus.attributeTypeMap;
    }
}

