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
* The V1LabelSelectorRequirement model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1LabelSelectorRequirement
* @version 0.3-SNAPSHOT
*/
export default class V1LabelSelectorRequirement {
    /**
    * Constructs a new <code>V1LabelSelectorRequirement</code>.
    * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1LabelSelectorRequirement
    * @class
    * @param key {String} key is the label key that the selector applies to.
    * @param operator {String} operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
    */

    constructor(key, operator) {
        

        
        

        this['key'] = key;this['operator'] = operator;

        
    }

    /**
    * Constructs a <code>V1LabelSelectorRequirement</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1LabelSelectorRequirement} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1LabelSelectorRequirement} The populated <code>V1LabelSelectorRequirement</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1LabelSelectorRequirement();

            
            
            

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }

    /**
    * key is the label key that the selector applies to.
    * @member {String} key
    */
    key = undefined;
    /**
    * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
    * @member {String} operator
    */
    operator = undefined;
    /**
    * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
    * @member {Array.<String>} values
    */
    values = undefined;








}


