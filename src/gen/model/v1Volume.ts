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
import { V1AWSElasticBlockStoreVolumeSource } from './v1AWSElasticBlockStoreVolumeSource';
import { V1AzureDiskVolumeSource } from './v1AzureDiskVolumeSource';
import { V1AzureFileVolumeSource } from './v1AzureFileVolumeSource';
import { V1CSIVolumeSource } from './v1CSIVolumeSource';
import { V1CephFSVolumeSource } from './v1CephFSVolumeSource';
import { V1CinderVolumeSource } from './v1CinderVolumeSource';
import { V1ConfigMapVolumeSource } from './v1ConfigMapVolumeSource';
import { V1DownwardAPIVolumeSource } from './v1DownwardAPIVolumeSource';
import { V1EmptyDirVolumeSource } from './v1EmptyDirVolumeSource';
import { V1FCVolumeSource } from './v1FCVolumeSource';
import { V1FlexVolumeSource } from './v1FlexVolumeSource';
import { V1FlockerVolumeSource } from './v1FlockerVolumeSource';
import { V1GCEPersistentDiskVolumeSource } from './v1GCEPersistentDiskVolumeSource';
import { V1GitRepoVolumeSource } from './v1GitRepoVolumeSource';
import { V1GlusterfsVolumeSource } from './v1GlusterfsVolumeSource';
import { V1HostPathVolumeSource } from './v1HostPathVolumeSource';
import { V1ISCSIVolumeSource } from './v1ISCSIVolumeSource';
import { V1NFSVolumeSource } from './v1NFSVolumeSource';
import { V1PersistentVolumeClaimVolumeSource } from './v1PersistentVolumeClaimVolumeSource';
import { V1PhotonPersistentDiskVolumeSource } from './v1PhotonPersistentDiskVolumeSource';
import { V1PortworxVolumeSource } from './v1PortworxVolumeSource';
import { V1ProjectedVolumeSource } from './v1ProjectedVolumeSource';
import { V1QuobyteVolumeSource } from './v1QuobyteVolumeSource';
import { V1RBDVolumeSource } from './v1RBDVolumeSource';
import { V1ScaleIOVolumeSource } from './v1ScaleIOVolumeSource';
import { V1SecretVolumeSource } from './v1SecretVolumeSource';
import { V1StorageOSVolumeSource } from './v1StorageOSVolumeSource';
import { V1VsphereVirtualDiskVolumeSource } from './v1VsphereVirtualDiskVolumeSource';

/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
*/
export class V1Volume {
    'awsElasticBlockStore'?: V1AWSElasticBlockStoreVolumeSource;
    'azureDisk'?: V1AzureDiskVolumeSource;
    'azureFile'?: V1AzureFileVolumeSource;
    'cephfs'?: V1CephFSVolumeSource;
    'cinder'?: V1CinderVolumeSource;
    'configMap'?: V1ConfigMapVolumeSource;
    'csi'?: V1CSIVolumeSource;
    'downwardAPI'?: V1DownwardAPIVolumeSource;
    'emptyDir'?: V1EmptyDirVolumeSource;
    'fc'?: V1FCVolumeSource;
    'flexVolume'?: V1FlexVolumeSource;
    'flocker'?: V1FlockerVolumeSource;
    'gcePersistentDisk'?: V1GCEPersistentDiskVolumeSource;
    'gitRepo'?: V1GitRepoVolumeSource;
    'glusterfs'?: V1GlusterfsVolumeSource;
    'hostPath'?: V1HostPathVolumeSource;
    'iscsi'?: V1ISCSIVolumeSource;
    /**
    * Volume\'s name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name': string;
    'nfs'?: V1NFSVolumeSource;
    'persistentVolumeClaim'?: V1PersistentVolumeClaimVolumeSource;
    'photonPersistentDisk'?: V1PhotonPersistentDiskVolumeSource;
    'portworxVolume'?: V1PortworxVolumeSource;
    'projected'?: V1ProjectedVolumeSource;
    'quobyte'?: V1QuobyteVolumeSource;
    'rbd'?: V1RBDVolumeSource;
    'scaleIO'?: V1ScaleIOVolumeSource;
    'secret'?: V1SecretVolumeSource;
    'storageos'?: V1StorageOSVolumeSource;
    'vsphereVolume'?: V1VsphereVirtualDiskVolumeSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "awsElasticBlockStore",
            "baseName": "awsElasticBlockStore",
            "type": "V1AWSElasticBlockStoreVolumeSource"
        },
        {
            "name": "azureDisk",
            "baseName": "azureDisk",
            "type": "V1AzureDiskVolumeSource"
        },
        {
            "name": "azureFile",
            "baseName": "azureFile",
            "type": "V1AzureFileVolumeSource"
        },
        {
            "name": "cephfs",
            "baseName": "cephfs",
            "type": "V1CephFSVolumeSource"
        },
        {
            "name": "cinder",
            "baseName": "cinder",
            "type": "V1CinderVolumeSource"
        },
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "V1ConfigMapVolumeSource"
        },
        {
            "name": "csi",
            "baseName": "csi",
            "type": "V1CSIVolumeSource"
        },
        {
            "name": "downwardAPI",
            "baseName": "downwardAPI",
            "type": "V1DownwardAPIVolumeSource"
        },
        {
            "name": "emptyDir",
            "baseName": "emptyDir",
            "type": "V1EmptyDirVolumeSource"
        },
        {
            "name": "fc",
            "baseName": "fc",
            "type": "V1FCVolumeSource"
        },
        {
            "name": "flexVolume",
            "baseName": "flexVolume",
            "type": "V1FlexVolumeSource"
        },
        {
            "name": "flocker",
            "baseName": "flocker",
            "type": "V1FlockerVolumeSource"
        },
        {
            "name": "gcePersistentDisk",
            "baseName": "gcePersistentDisk",
            "type": "V1GCEPersistentDiskVolumeSource"
        },
        {
            "name": "gitRepo",
            "baseName": "gitRepo",
            "type": "V1GitRepoVolumeSource"
        },
        {
            "name": "glusterfs",
            "baseName": "glusterfs",
            "type": "V1GlusterfsVolumeSource"
        },
        {
            "name": "hostPath",
            "baseName": "hostPath",
            "type": "V1HostPathVolumeSource"
        },
        {
            "name": "iscsi",
            "baseName": "iscsi",
            "type": "V1ISCSIVolumeSource"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nfs",
            "baseName": "nfs",
            "type": "V1NFSVolumeSource"
        },
        {
            "name": "persistentVolumeClaim",
            "baseName": "persistentVolumeClaim",
            "type": "V1PersistentVolumeClaimVolumeSource"
        },
        {
            "name": "photonPersistentDisk",
            "baseName": "photonPersistentDisk",
            "type": "V1PhotonPersistentDiskVolumeSource"
        },
        {
            "name": "portworxVolume",
            "baseName": "portworxVolume",
            "type": "V1PortworxVolumeSource"
        },
        {
            "name": "projected",
            "baseName": "projected",
            "type": "V1ProjectedVolumeSource"
        },
        {
            "name": "quobyte",
            "baseName": "quobyte",
            "type": "V1QuobyteVolumeSource"
        },
        {
            "name": "rbd",
            "baseName": "rbd",
            "type": "V1RBDVolumeSource"
        },
        {
            "name": "scaleIO",
            "baseName": "scaleIO",
            "type": "V1ScaleIOVolumeSource"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "V1SecretVolumeSource"
        },
        {
            "name": "storageos",
            "baseName": "storageos",
            "type": "V1StorageOSVolumeSource"
        },
        {
            "name": "vsphereVolume",
            "baseName": "vsphereVolume",
            "type": "V1VsphereVirtualDiskVolumeSource"
        }    ];

    static getAttributeTypeMap() {
        return V1Volume.attributeTypeMap;
    }
}

