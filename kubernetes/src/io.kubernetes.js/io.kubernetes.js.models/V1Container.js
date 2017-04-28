/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ContainerPort', 'io.kubernetes.js/io.kubernetes.js.models/V1EnvFromSource', 'io.kubernetes.js/io.kubernetes.js.models/V1EnvVar', 'io.kubernetes.js/io.kubernetes.js.models/V1Lifecycle', 'io.kubernetes.js/io.kubernetes.js.models/V1Probe', 'io.kubernetes.js/io.kubernetes.js.models/V1ResourceRequirements', 'io.kubernetes.js/io.kubernetes.js.models/V1SecurityContext', 'io.kubernetes.js/io.kubernetes.js.models/V1VolumeMount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ContainerPort'), require('./V1EnvFromSource'), require('./V1EnvVar'), require('./V1Lifecycle'), require('./V1Probe'), require('./V1ResourceRequirements'), require('./V1SecurityContext'), require('./V1VolumeMount'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1Container = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ContainerPort, root.KubernetesJsClient.V1EnvFromSource, root.KubernetesJsClient.V1EnvVar, root.KubernetesJsClient.V1Lifecycle, root.KubernetesJsClient.V1Probe, root.KubernetesJsClient.V1ResourceRequirements, root.KubernetesJsClient.V1SecurityContext, root.KubernetesJsClient.V1VolumeMount);
  }
}(this, function(ApiClient, V1ContainerPort, V1EnvFromSource, V1EnvVar, V1Lifecycle, V1Probe, V1ResourceRequirements, V1SecurityContext, V1VolumeMount) {
  'use strict';




  /**
   * The V1Container model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1Container
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1Container</code>.
   * A single application container that you want to run within a pod.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1Container
   * @class
   * @param name {String} Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
   */
  var exports = function(name) {
    var _this = this;









    _this['name'] = name;











  };

  /**
   * Constructs a <code>V1Container</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1Container} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1Container} The populated <code>V1Container</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('args')) {
        obj['args'] = ApiClient.convertToType(data['args'], ['String']);
      }
      if (data.hasOwnProperty('command')) {
        obj['command'] = ApiClient.convertToType(data['command'], ['String']);
      }
      if (data.hasOwnProperty('env')) {
        obj['env'] = ApiClient.convertToType(data['env'], [V1EnvVar]);
      }
      if (data.hasOwnProperty('envFrom')) {
        obj['envFrom'] = ApiClient.convertToType(data['envFrom'], [V1EnvFromSource]);
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('imagePullPolicy')) {
        obj['imagePullPolicy'] = ApiClient.convertToType(data['imagePullPolicy'], 'String');
      }
      if (data.hasOwnProperty('lifecycle')) {
        obj['lifecycle'] = V1Lifecycle.constructFromObject(data['lifecycle']);
      }
      if (data.hasOwnProperty('livenessProbe')) {
        obj['livenessProbe'] = V1Probe.constructFromObject(data['livenessProbe']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ports')) {
        obj['ports'] = ApiClient.convertToType(data['ports'], [V1ContainerPort]);
      }
      if (data.hasOwnProperty('readinessProbe')) {
        obj['readinessProbe'] = V1Probe.constructFromObject(data['readinessProbe']);
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = V1ResourceRequirements.constructFromObject(data['resources']);
      }
      if (data.hasOwnProperty('securityContext')) {
        obj['securityContext'] = V1SecurityContext.constructFromObject(data['securityContext']);
      }
      if (data.hasOwnProperty('stdin')) {
        obj['stdin'] = ApiClient.convertToType(data['stdin'], 'Boolean');
      }
      if (data.hasOwnProperty('stdinOnce')) {
        obj['stdinOnce'] = ApiClient.convertToType(data['stdinOnce'], 'Boolean');
      }
      if (data.hasOwnProperty('terminationMessagePath')) {
        obj['terminationMessagePath'] = ApiClient.convertToType(data['terminationMessagePath'], 'String');
      }
      if (data.hasOwnProperty('terminationMessagePolicy')) {
        obj['terminationMessagePolicy'] = ApiClient.convertToType(data['terminationMessagePolicy'], 'String');
      }
      if (data.hasOwnProperty('tty')) {
        obj['tty'] = ApiClient.convertToType(data['tty'], 'Boolean');
      }
      if (data.hasOwnProperty('volumeMounts')) {
        obj['volumeMounts'] = ApiClient.convertToType(data['volumeMounts'], [V1VolumeMount]);
      }
      if (data.hasOwnProperty('workingDir')) {
        obj['workingDir'] = ApiClient.convertToType(data['workingDir'], 'String');
      }
    }
    return obj;
  }

  /**
   * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
   * @member {Array.<String>} args
   */
  exports.prototype['args'] = undefined;
  /**
   * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
   * @member {Array.<String>} command
   */
  exports.prototype['command'] = undefined;
  /**
   * List of environment variables to set in the container. Cannot be updated.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1EnvVar>} env
   */
  exports.prototype['env'] = undefined;
  /**
   * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1EnvFromSource>} envFrom
   */
  exports.prototype['envFrom'] = undefined;
  /**
   * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
   * @member {String} imagePullPolicy
   */
  exports.prototype['imagePullPolicy'] = undefined;
  /**
   * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1Lifecycle} lifecycle
   */
  exports.prototype['lifecycle'] = undefined;
  /**
   * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1Probe} livenessProbe
   */
  exports.prototype['livenessProbe'] = undefined;
  /**
   * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default \"0.0.0.0\" address inside a container will be accessible from the network. Cannot be updated.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerPort>} ports
   */
  exports.prototype['ports'] = undefined;
  /**
   * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1Probe} readinessProbe
   */
  exports.prototype['readinessProbe'] = undefined;
  /**
   * Compute Resources required by this container. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#resources
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ResourceRequirements} resources
   */
  exports.prototype['resources'] = undefined;
  /**
   * Security options the pod should run with. More info: http://releases.k8s.io/HEAD/docs/design/security_context.md
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1SecurityContext} securityContext
   */
  exports.prototype['securityContext'] = undefined;
  /**
   * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
   * @member {Boolean} stdin
   */
  exports.prototype['stdin'] = undefined;
  /**
   * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
   * @member {Boolean} stdinOnce
   */
  exports.prototype['stdinOnce'] = undefined;
  /**
   * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
   * @member {String} terminationMessagePath
   */
  exports.prototype['terminationMessagePath'] = undefined;
  /**
   * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
   * @member {String} terminationMessagePolicy
   */
  exports.prototype['terminationMessagePolicy'] = undefined;
  /**
   * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
   * @member {Boolean} tty
   */
  exports.prototype['tty'] = undefined;
  /**
   * Pod volumes to mount into the container's filesystem. Cannot be updated.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1VolumeMount>} volumeMounts
   */
  exports.prototype['volumeMounts'] = undefined;
  /**
   * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
   * @member {String} workingDir
   */
  exports.prototype['workingDir'] = undefined;



  return exports;
}));


