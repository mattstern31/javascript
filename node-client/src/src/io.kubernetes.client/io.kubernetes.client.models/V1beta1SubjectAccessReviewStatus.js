/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.10.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The V1beta1SubjectAccessReviewStatus model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1beta1SubjectAccessReviewStatus
* @version 0.3-SNAPSHOT
*/
export default class V1beta1SubjectAccessReviewStatus {
    /**
    * Constructs a new <code>V1beta1SubjectAccessReviewStatus</code>.
    * SubjectAccessReviewStatus
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1beta1SubjectAccessReviewStatus
    * @class
    * @param allowed {Boolean} Allowed is required. True if the action would be allowed, false otherwise.
    */

    constructor(allowed) {
        

        
        

        this['allowed'] = allowed;

        
    }

    /**
    * Constructs a <code>V1beta1SubjectAccessReviewStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1SubjectAccessReviewStatus} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1SubjectAccessReviewStatus} The populated <code>V1beta1SubjectAccessReviewStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1SubjectAccessReviewStatus();

            
            
            

            if (data.hasOwnProperty('allowed')) {
                obj['allowed'] = ApiClient.convertToType(data['allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('denied')) {
                obj['denied'] = ApiClient.convertToType(data['denied'], 'Boolean');
            }
            if (data.hasOwnProperty('evaluationError')) {
                obj['evaluationError'] = ApiClient.convertToType(data['evaluationError'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

    /**
    * Allowed is required. True if the action would be allowed, false otherwise.
    * @member {Boolean} allowed
    */
    allowed = undefined;
    /**
    * Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
    * @member {Boolean} denied
    */
    denied = undefined;
    /**
    * EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
    * @member {String} evaluationError
    */
    evaluationError = undefined;
    /**
    * Reason is optional.  It indicates why a request was allowed or denied.
    * @member {String} reason
    */
    reason = undefined;








}


