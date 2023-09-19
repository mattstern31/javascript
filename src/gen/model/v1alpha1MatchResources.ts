/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1LabelSelector } from './v1LabelSelector';
import { V1alpha1NamedRuleWithOperations } from './v1alpha1NamedRuleWithOperations';

/**
* MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
*/
export class V1alpha1MatchResources {
    /**
    * ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
    */
    'excludeResourceRules'?: Array<V1alpha1NamedRuleWithOperations>;
    /**
    * matchPolicy defines how the \"MatchResources\" list is used to match incoming requests. Allowed values are \"Exact\" or \"Equivalent\".  - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but \"rules\" only included `apiGroups:[\"apps\"], apiVersions:[\"v1\"], resources: [\"deployments\"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.  - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and \"rules\" only included `apiGroups:[\"apps\"], apiVersions:[\"v1\"], resources: [\"deployments\"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.  Defaults to \"Equivalent\"
    */
    'matchPolicy'?: string;
    'namespaceSelector'?: V1LabelSelector;
    'objectSelector'?: V1LabelSelector;
    /**
    * ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.
    */
    'resourceRules'?: Array<V1alpha1NamedRuleWithOperations>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "excludeResourceRules",
            "baseName": "excludeResourceRules",
            "type": "Array<V1alpha1NamedRuleWithOperations>"
        },
        {
            "name": "matchPolicy",
            "baseName": "matchPolicy",
            "type": "string"
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "V1LabelSelector"
        },
        {
            "name": "objectSelector",
            "baseName": "objectSelector",
            "type": "V1LabelSelector"
        },
        {
            "name": "resourceRules",
            "baseName": "resourceRules",
            "type": "Array<V1alpha1NamedRuleWithOperations>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1MatchResources.attributeTypeMap;
    }
}

