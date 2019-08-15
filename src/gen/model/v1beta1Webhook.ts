/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AdmissionregistrationV1beta1WebhookClientConfig } from './admissionregistrationV1beta1WebhookClientConfig';
import { V1LabelSelector } from './v1LabelSelector';
import { V1beta1RuleWithOperations } from './v1beta1RuleWithOperations';

/**
* Webhook describes an admission webhook and the resources and operations it applies to.
*/
export class V1beta1Webhook {
    'clientConfig': AdmissionregistrationV1beta1WebhookClientConfig;
    /**
    * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore.
    */
    'failurePolicy'?: string;
    /**
    * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where \"imagepolicy\" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
    */
    'name': string;
    'namespaceSelector'?: V1LabelSelector;
    /**
    * Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
    */
    'rules'?: Array<V1beta1RuleWithOperations>;
    /**
    * SideEffects states whether this webhookk has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission change and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown.
    */
    'sideEffects'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientConfig",
            "baseName": "clientConfig",
            "type": "AdmissionregistrationV1beta1WebhookClientConfig"
        },
        {
            "name": "failurePolicy",
            "baseName": "failurePolicy",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "V1LabelSelector"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<V1beta1RuleWithOperations>"
        },
        {
            "name": "sideEffects",
            "baseName": "sideEffects",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1Webhook.attributeTypeMap;
    }
}

