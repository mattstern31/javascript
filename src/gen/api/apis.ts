export * from './admissionregistrationApi';
import { AdmissionregistrationApi } from './admissionregistrationApi';
export * from './admissionregistrationV1Api';
import { AdmissionregistrationV1Api } from './admissionregistrationV1Api';
export * from './admissionregistrationV1alpha1Api';
import { AdmissionregistrationV1alpha1Api } from './admissionregistrationV1alpha1Api';
export * from './admissionregistrationV1beta1Api';
import { AdmissionregistrationV1beta1Api } from './admissionregistrationV1beta1Api';
export * from './apiextensionsApi';
import { ApiextensionsApi } from './apiextensionsApi';
export * from './apiextensionsV1Api';
import { ApiextensionsV1Api } from './apiextensionsV1Api';
export * from './apiregistrationApi';
import { ApiregistrationApi } from './apiregistrationApi';
export * from './apiregistrationV1Api';
import { ApiregistrationV1Api } from './apiregistrationV1Api';
export * from './apisApi';
import { ApisApi } from './apisApi';
export * from './appsApi';
import { AppsApi } from './appsApi';
export * from './appsV1Api';
import { AppsV1Api } from './appsV1Api';
export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './authenticationV1Api';
import { AuthenticationV1Api } from './authenticationV1Api';
export * from './authenticationV1alpha1Api';
import { AuthenticationV1alpha1Api } from './authenticationV1alpha1Api';
export * from './authenticationV1beta1Api';
import { AuthenticationV1beta1Api } from './authenticationV1beta1Api';
export * from './authorizationApi';
import { AuthorizationApi } from './authorizationApi';
export * from './authorizationV1Api';
import { AuthorizationV1Api } from './authorizationV1Api';
export * from './autoscalingApi';
import { AutoscalingApi } from './autoscalingApi';
export * from './autoscalingV1Api';
import { AutoscalingV1Api } from './autoscalingV1Api';
export * from './autoscalingV2Api';
import { AutoscalingV2Api } from './autoscalingV2Api';
export * from './batchApi';
import { BatchApi } from './batchApi';
export * from './batchV1Api';
import { BatchV1Api } from './batchV1Api';
export * from './certificatesApi';
import { CertificatesApi } from './certificatesApi';
export * from './certificatesV1Api';
import { CertificatesV1Api } from './certificatesV1Api';
export * from './certificatesV1alpha1Api';
import { CertificatesV1alpha1Api } from './certificatesV1alpha1Api';
export * from './coordinationApi';
import { CoordinationApi } from './coordinationApi';
export * from './coordinationV1Api';
import { CoordinationV1Api } from './coordinationV1Api';
export * from './coreApi';
import { CoreApi } from './coreApi';
export * from './coreV1Api';
import { CoreV1Api } from './coreV1Api';
export * from './customObjectsApi';
import { CustomObjectsApi } from './customObjectsApi';
export * from './discoveryApi';
import { DiscoveryApi } from './discoveryApi';
export * from './discoveryV1Api';
import { DiscoveryV1Api } from './discoveryV1Api';
export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './eventsV1Api';
import { EventsV1Api } from './eventsV1Api';
export * from './flowcontrolApiserverApi';
import { FlowcontrolApiserverApi } from './flowcontrolApiserverApi';
export * from './flowcontrolApiserverV1beta2Api';
import { FlowcontrolApiserverV1beta2Api } from './flowcontrolApiserverV1beta2Api';
export * from './flowcontrolApiserverV1beta3Api';
import { FlowcontrolApiserverV1beta3Api } from './flowcontrolApiserverV1beta3Api';
export * from './internalApiserverApi';
import { InternalApiserverApi } from './internalApiserverApi';
export * from './internalApiserverV1alpha1Api';
import { InternalApiserverV1alpha1Api } from './internalApiserverV1alpha1Api';
export * from './logsApi';
import { LogsApi } from './logsApi';
export * from './networkingApi';
import { NetworkingApi } from './networkingApi';
export * from './networkingV1Api';
import { NetworkingV1Api } from './networkingV1Api';
export * from './networkingV1alpha1Api';
import { NetworkingV1alpha1Api } from './networkingV1alpha1Api';
export * from './nodeApi';
import { NodeApi } from './nodeApi';
export * from './nodeV1Api';
import { NodeV1Api } from './nodeV1Api';
export * from './openidApi';
import { OpenidApi } from './openidApi';
export * from './policyApi';
import { PolicyApi } from './policyApi';
export * from './policyV1Api';
import { PolicyV1Api } from './policyV1Api';
export * from './rbacAuthorizationApi';
import { RbacAuthorizationApi } from './rbacAuthorizationApi';
export * from './rbacAuthorizationV1Api';
import { RbacAuthorizationV1Api } from './rbacAuthorizationV1Api';
export * from './resourceApi';
import { ResourceApi } from './resourceApi';
export * from './resourceV1alpha2Api';
import { ResourceV1alpha2Api } from './resourceV1alpha2Api';
export * from './schedulingApi';
import { SchedulingApi } from './schedulingApi';
export * from './schedulingV1Api';
import { SchedulingV1Api } from './schedulingV1Api';
export * from './storageApi';
import { StorageApi } from './storageApi';
export * from './storageV1Api';
import { StorageV1Api } from './storageV1Api';
export * from './versionApi';
import { VersionApi } from './versionApi';
export * from './wellKnownApi';
import { WellKnownApi } from './wellKnownApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AdmissionregistrationApi, AdmissionregistrationV1Api, AdmissionregistrationV1alpha1Api, AdmissionregistrationV1beta1Api, ApiextensionsApi, ApiextensionsV1Api, ApiregistrationApi, ApiregistrationV1Api, ApisApi, AppsApi, AppsV1Api, AuthenticationApi, AuthenticationV1Api, AuthenticationV1alpha1Api, AuthenticationV1beta1Api, AuthorizationApi, AuthorizationV1Api, AutoscalingApi, AutoscalingV1Api, AutoscalingV2Api, BatchApi, BatchV1Api, CertificatesApi, CertificatesV1Api, CertificatesV1alpha1Api, CoordinationApi, CoordinationV1Api, CoreApi, CoreV1Api, CustomObjectsApi, DiscoveryApi, DiscoveryV1Api, EventsApi, EventsV1Api, FlowcontrolApiserverApi, FlowcontrolApiserverV1beta2Api, FlowcontrolApiserverV1beta3Api, InternalApiserverApi, InternalApiserverV1alpha1Api, LogsApi, NetworkingApi, NetworkingV1Api, NetworkingV1alpha1Api, NodeApi, NodeV1Api, OpenidApi, PolicyApi, PolicyV1Api, RbacAuthorizationApi, RbacAuthorizationV1Api, ResourceApi, ResourceV1alpha2Api, SchedulingApi, SchedulingV1Api, StorageApi, StorageV1Api, VersionApi, WellKnownApi];
