/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_object_base_object_module_js__ = __webpack_require__(6);
// ES6 imports


class TextObject extends __WEBPACK_IMPORTED_MODULE_0__base_object_base_object_module_js__["a" /* default */] {

    constructor(elemSelectorRef) {
        super();

        // Element selector
        this.elemSelectorRef = elemSelectorRef || '';

        var self = this;

        // Getting Text properties values

        this.getProperty = Object.assign(this.getProperty, {
            'Font size': (objName) => {
                return this.getTextElemFromName(objName).css('font-size');
            },
            Alpha: (objName) => {
                return this.getTextElemFromName(objName).css('opacity') * 100;
            },
            'Text Alignment': (objName) => {
                return this.getTextElemFromName(objName).css('text-align');
            },
            'Vertical Alignment': (objName) => {
                return this.getTextElemFromName(objName).css('vertical-align');
            },
            'Font style': (objName) => {
                return this.getTextElemFromName(objName).css('font-style');
            },
            'Font family': (objName) => {
                return this.getTextElemFromName(objName).css('font-family');
            },
            'Background color': (objName) => {
                return this.getTextElemFromName(objName).css('background-color');
            },
            'Text color': (objName) => {
                return this.getTextElemFromName(objName).css('color');
            },
            Text: (objName) => {
                return this.getTextElemFromName(objName).html();
            }
        });

        this.setProperty = Object.assign(this.setProperty, {
            Text: (objName, value) => {
                this.getTextElemFromName(objName).html(value);
            },
            'Font size': (objName, value) => {
                this.getTextElemFromName(objName).css('font-size',value+'px');
            },
            Alpha: (objName, value) => {
                this.getTextElemFromName(objName).css('opacity',value/100);
            },
            'Text Alignment': (objName, value) => {
                this.getTextElemFromName(objName).css('text-align',value.toLowerCase());
            },
            'Vertical Alignment': (objName, value) => {
                this.getTextElemFromName(objName).css('vertical-align',value.toLowerCase());
            },
            'Font style': (objName, value) => {
                this.getTextElemFromName(objName).css('font-style',value.toLowerCase());
            },
            'Font family': (objName, value) => {
                this.getTextElemFromName(objName).css('font-style',value.toLowerCase());
            },
            'Background color': (objName, value) => {
                this.getTextElemFromName(objName).css('background-color',value);
            },
            'Text color': (objName, value) => {
                this.getTextElemFromName(objName).css('color',value);
            }
        });
    };

    /**
     * Retrieves the text element with a given object-name attribute
     * @param objName
     * @returns {*|jQuery|HTMLElement}
     */
    getTextElemFromName (objName) {
        return $('[obj-name= "' + objName + '"]' + this.elemSelectorRef);
    }

    init ( elemSelectorRefValue) {
        this.elemSelectorRef = elemSelectorRefValue;
    };

}

/* harmony default export */ __webpack_exports__["a"] = TextObject;





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_object_text_object_module_js__ = __webpack_require__(0);
// ES6 imports


class ButtonObject extends __WEBPACK_IMPORTED_MODULE_0__text_object_text_object_module_js__["a" /* default */] {
    constructor() {
        super(' button');
    }
}

// ES6 exports
/* harmony default export */ __webpack_exports__["a"] = ButtonObject;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* Stub for connio object
** Created by Harish Shanthi Kumar on 16/12/2016
*/

class ConnioObject extends com.fc.JavaScriptDistLib.ConnioCore {

  constructor() {
    super();
  }

  configureMQTT() {
    let parent = this;
    if ( !this.config.MQTTClient ) {
      try {
        if( this.config.BaseURL === '' || this.config.KEY === '' || this.config.Secret === '' ) {
          console.log("Please go to File -> Connio Properties and set credentials.");
        }

        if( this.config.MQTTHost !== '' && this.config.MQTTPort !== '' && this.config.MQTTCientID !== '' &&
          this.config.MQTTUsername !== '' && this.config.MQTTPassword !== '' && this.config.App !== '' ) {
          this.connioMQTTClient = new Paho.MQTT.Client(this.config.MQTTHost, this.config.MQTTPort, this.config.MQTTCientID);
          // set callback handlers
          this.config.MQTTClient.onConnectionLost = function(responseObject) {
            parent.handleMQTTConnectionLost(responseObject);
          };
          this.config.MQTTClient.onMessageArrived = function(message) {
            parent.handleMQTTMessage(message);
          };
        }
        else {
          console.log("Please go to File -> Connio Properties and set credentials.");
        }
      }
      catch(e) {
        console.log("Some of the properties are missing. Go to File->Connio Properties");
      }
    }

  }
  //HS: Deploy Alert!! All runtime objects needs to be reset here!
  reset() {
    this.config.MQTTClient = null;
    this.connioMQTTMessageRecvCallback = null;
  }

  connioStartTrackingPropertyChanges(callback) {
    this.configure();
    this.configureMQTT();
    this.connioMQTTMessageRecvCallback = callback;
    this.connio_mqtt_connect();
  }

  connioStopTrackingPropertyChanges() {
    this.connio_mqtt_disconnect();
  }


  connioReadData(device, successcallback, failurecallback) {
    let parent = this;
    this.configure();
    let url = this.config.BaseURL + "/v2/data/devices/" + device;
    $.ajax(
      {
        url: url,
        type: 'GET',
        headers: {
          "Authorization": "Basic " + btoa(this.config.KEY + ":" + this.config.Secret)
        },
        success: (response) => {
          successcallback(response);
        },
        error: (xhr, code, msg) => {
          failurecallback(msg);
          console.log("Could not read data.");
        }
      });
  }

  connionGetValue(data, valueType, propertyName) {
    this.configure();
    let properties = data.properties;
    if( (properties !== undefined) && (properties.length>0) ) {
      for(let i=0; i<properties.length; i++) {
        let property = properties[i];
        let qname = property.descriptors.qname;

        if( qname.indexOf(propertyName) !== -1)  {
          let value = property.value[valueType];
          if( value!==undefined ) {
            return value;
          }
        }
      }
    }
    return "";
  }

  connioGetDeviceName(data, id) {
    this.configure();
    let devices = data.results;
    try {
      for(let i=0; i<devices.length; i++) {
        let device = devices[i];
        if( device.id === id ) {
          return device.name;
        }
      }
    }
    catch(e) {

    }

    return "";
  }

  connioGetDeviceLocation(data, id) {
    this.configure();
    let devices = data.results;
    try {
      for(let i=0; i<devices.length; i++) {
        let device = devices[i];
        if( (device.id === id) || (device.name === id) ) {
          let locationObj = {lat: device.location.geo.lat, lng: device.location.geo.lon};
          return locationObj;
        }
      }
    }
    catch(e) {
    }

    return "";
  }

  connioWriteData(device, value, property, successcallback, failurecallback) {
    let parent = this;
    this.configure();
    let url = this.config.BaseURL + "/v2/data/devices/" + device + "/properties/" + property;
    let data = {};
    data.dps = [];
    let val = {};
    val.t = new Date().toISOString();
    val.v = value;
    data.dps.push(val);

    $.ajax(
      {
        url: url,
        type: 'POST',
        headers: {
          "Authorization": "Basic " + btoa(this.config.KEY + ":" + this.config.Secret),
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        dataType: "json",
        data: JSON.stringify(data),
        success: function (response) {
          successcallback(response);
        },
        error: function(xhr, code, msg) {
          failurecallback(msg);
          console.log("Could not write data.");
        }
      });
  }

  connioExecuteMethod(device, method, data, successcallback, failurecallback) {
    this.configure();
  }

  connioReadHistorical(device, property, timeStart, timeEnd, descending, limit, successcallback, failurecallback) {
    let parent = this;
    this.configure();
    let url = this.config.BaseURL + "/v2/data/devices/" + device + "/properties/" + property + "?";

    if( descending ) {
      let sorting = (descending ? "-" : "") + "source.time";
      url += "sort=" + sorting;
    }
    else {
      url += "sort=-source.time";
    }

    if( limit ) {
      url += "&limit=" + limit;
    }

    if (timeStart && timeEnd) {
      url += "&q=source.time:(" + timeStart.toISOString() + "+TO+" + timeEnd.toISOString() + ")";
    }

    $.ajax(
      {
        url: url,
        type: 'GET',
        headers: {
          "Authorization": "Basic " + btoa(this.config.KEY + ":" + this.config.Secret)
        },
        success: (response) => {
          let timeList = jsonPath(response, "$.results[:].t");
          let valueList = jsonPath(response, "$.results[:].v");
          let formattedTimeList = [];
          for (let i=0;i<timeList.length;i++) {
            formattedTimeList.push(com.fc.dateFormat(new Date (timeList[i]),'MMM-d HH:mm a'));
          }
          timeList.reverse();
          formattedTimeList.reverse();
          successcallback(formattedTimeList, valueList);
        },
        error: (xhr, code, msg) => {
          failurecallback(msg);
          console.log("Could not read historical.");
        }
      });
  }

  connio_mqtt_connect() {
    console.log("Connecting to Connio MQTT...");
    let parent = this;
    try {
      this.connioMQTTClient.connect( {
        onSuccess: function() {
          console.log("Connected to Connio MQTT...");
          parent.subscribeToTopic();
        },
        userName : this.config.MQTTUsername,
        password : this.config.MQTTPassword,
        keepAliveInterval: 25,
        timeout: 60,
        useSSL: true
      });
    }
    catch(e) {
      console.log("Connio MQTT connection already exists. Coming out...")
    }
  }

  connio_mqtt_disconnect() {
    console.log("Disconnecting Connio MQTT...");
    this.connioMQTTClient.disconnect();
  }

  subscribeToTopic() {
    console.log("Subscribing to topic...");
    let parent = this;
    let subscribeOptions = {
      qos: 0,  // QoS
      invocationContext: {foo: true},
      onSuccess: (context) => {
        parent.handleMQTTSubscribeSuccess(context);
      },
      onFailure: (context) => {
        parent.handleMQTTSubscribeFailed(context);
        console.log("Could not subscribe to topic");
      },
      timeout: 10
    };

    this.connioMQTTClient.subscribe(this.config.MQTTTopic, subscribeOptions);
  }

  handleMQTTConnectionLost(responseObject) {
    console.log("Connection Lost: " + responseObject.errorMessage);
  }

  handleMQTTSubscribeSuccess(context) {
    console.log("Subscribe success");
  }

  handleMQTTSubscribeFailed(context) {
    console.log("Subscribe failed");
  }

  handleMQTTMessage(message) {
    //console.log("Connio MQTT Message Arrived: " + message.destinationName + " " + message.payloadString);
    if( this.connioMQTTMessageRecvCallback ) {
      let messageArray = message.destinationName.split("/");
      this.connioMQTTMessageRecvCallback(messageArray[4], messageArray[6], message.payloadString);
    }
  }

  ConnioConfigException(snappMessage, msg) {
    this.name = "ConnioConfigException";
    this.snappMessage = snappMessage;
    //custom message from smapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
  }

  ConnioNetworkException(snappMessage, msg) {
    this.name = "ConnioNetworkException";
    this.snappMessage = snappMessage;
    //custom message from smapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
  }


  ConnioMQTTException(snappMessage, msg) {
    this.name = "ConnioMQTTException";
    this.snappMessage = snappMessage;
    //custom message from smapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
  }

}

// ES6 exports
/* harmony default export */ __webpack_exports__["a"] = ConnioObject;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class JsonObject {

  constructor() {}

  parseJSONDataForPath (data, path) {
    let jsonObject = {};
    if( typeof(data) == 'string' ) {
      try {
        jsonObject = JSON.parse(data);
      }
      catch(e) {
      }
    }
    else if( typeof(data) == 'object') {
      jsonObject = data;
    }
    let jsonPathObject = jsonPath(jsonObject, path);
    //=== is very important. Otherwise 0 will be treated as false as well.
    if( jsonPathObject === false ) {
      jsonObject = {};
      return jsonObject;
    }
    else {
      return jsonPathObject;
    }
  }

  parseJSONDataWithCallback (data, successcallback, failurecallback) {
    let jsonObject = {};
    if( typeof(data) == 'string' ) {
      try {
        jsonObject = JSON.parse(data);
        successcallback(jsonObject);
      }
      catch(e) {
        failurecallback(e);
      }
    }
    else if( typeof(data) == 'object') {
      successcallback(data);
    }
    else {
      failurecallback("Not a valid JSON");
    }
  }

  parseJSONData (data) {
    let jsonObject = {};
    if( typeof(data) == 'string' ) {
      try {
        jsonObject = JSON.parse(data);
      }
      catch(e) {
        e['snappMessage'] = 'The input data does not seem a JSON object';
        throw (e);
      }
      return jsonObject;
    }
    else if( typeof(data) == 'object') {
      return data;
    }
    else {
      return jsonObject;
    }
  }

  isValidJSON (data) {
    let jsonObject = {};
    if( typeof(data) == 'string' ) {
      try {
        jsonObject = JSON.parse(data);
        return true;
      }
      catch(e) {
        return false;
      }
    }
    else if( typeof(data) == 'object') {
      return true;
    }
    else {
      return false;
    }
  }

  covertToJSON (data) {
    // return this.parseJSONData(data);
    return JSON.stringify(data);
  }
}

/* harmony default export */ __webpack_exports__["a"] = JsonObject;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_object_text_object_module_js__ = __webpack_require__(0);
// ES6 imports


class LabelObject extends __WEBPACK_IMPORTED_MODULE_0__text_object_text_object_module_js__["a" /* default */] {

    constructor() {
        super(' .label');

        var self = this;

        this.getProperty['Max lines'] = function(objName) {
            return this.getElemFromName(objName).css('-webkit-line-clamp');
        };

        this.setProperty['Max lines'] = function(objName, value) {
            var elemSelector2 = '[obj-name= "' + objName + '"]';
            $(elemSelector2 + ' div.label').css({
                'overflow': 'hidden',
                'text-overflow': 'ellipsis',
                'display': '-webkit-box',
                '-webkit-line-clamp': value.toString(),
                '-webkit-box-orient': 'vertical',
                'height': 'auto',
                'padding':'0'
            });
        };
    }
}

// ES6 exports
/* harmony default export */ __webpack_exports__["a"] = LabelObject;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ES6 imports

class NetworkObject {

  constructor() {}

  createHTTPRequest (url, method) {
    let request = {};
    let protocol = url.split(':')[0];
    if( (method === 'GET' || method === 'POST' || method === 'PUT' || method === 'DELETE') &&
        (protocol === 'http' || protocol === 'https') ) {
      request.url = url;
      request.method = method;
      request.headers = {};
      request.data = {};
      return request;
    }
    else {
      this.HTTPUnsupportedRequest("We support basic http/https operations.<br>Request type can be one of GET/POST/PUT or DELETE");
      return request;
    }
  }

  addHTTPHeader (request, key , value) {
    request.headers[key] = value;
  }

  addHTTPParams (request, key, value) {
    request.data[key] = value;
  }

  setHTTPBody (request, body) {
    if( typeof body == 'object' ) {
      request.data = JSON.stringify(body);
    }
    else if (typeof body == 'string') {
      request.data = body;
    }
    else {
      request.data = "";
      throw new IllegalArgumentException("Body can be currently only of type string or json");
    }
  }

  setDataType (request, type) {
    request.dataType = type;
  }

  setProxyState (request, state) {
    request.proxy = state;
  }

  sendHTTPRequest (request, successcallback, failurecallback) {
    // let url = this.getSanitizedURL(request); // use to use the proxy
    let url = request.url;
    let method = request.method;
    let data = request.data;
    let dataType = request.dataType;
    let headers = request.headers;
    let parent = this;

    $.ajax(
      {
        url: url,
        type: method,
        headers: headers,
        dataType: dataType,
        data: data,
        success: function (response) {
          successcallback(response);
        },
        error: function(xhr, code, msg) {
          failurecallback(code + ': '+ msg);
        }
      });
  }

  getSanitizedURL (request) {
    let proxyUrl = "https://iot.snapp.click:8443/"; // backup 1337
    let isProxyRequired = true; //default is proxy required
    let url = request.url;

    if( (request.proxy != undefined) && (request.proxy === false) ) {
      isProxyRequired = false;
    }

    let sanitizedUrl = url;
    if (isProxyRequired) {
      // url = url.replace(/^.+:\/\//, ""); //Removes all possible protocols - NOTE: not needed with the latest proxy implementation
      sanitizedUrl = proxyUrl + url;
      return sanitizedUrl;
    } else {
      return url;
    }
  }

  //Define custom exceptions pertaining to network module here.

  HTTPUnsupportedRequest (msg) {
    let error = new Error(msg);
    error.name = 'HTTPUnsupportedRequest';
    //error.snappMessage = "something?";
    throw error;
  }

  //Define custom exceptions pertaining to network module here.
  HTTPNetworkException (msg) {
    let error = new Error(msg);
    error.name = 'HTTPNetworkException';
    //error.snappMessage = "something?";
    throw error;
  }
}

/* harmony default export */ __webpack_exports__["a"] = NetworkObject;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** @module B BaseObject*/

/**
 * Web Apps Javascript Distribution Library
 * Base implementation for the User Object
 *
 */
class BaseObject {

    constructor() {
        /**
         * Set of getProperty functions
         * the object key is the property name to be set/get
         *
         */
        this.getProperty = {
            width: (objName) => {
                return this.getElemFromName(objName).width();
            },
            height: (objName) => {
                return this.getElemFromName(objName).height();
            },
            x: (objName) => {
                var elem = this.getElemFromName(objName);
                return Math.round(parseFloat(elem.css('transform').split(',')[4]));
            },
            y: (objName) => {
                var elem = this.getElemFromName(objName);
                return Math.round(parseFloat(elem.css('transform').split(',')[5]));
            },
            Alpha: (objName) => {
                return this.getElemFromName(objName).css('opacity');
            },
            'Background color': (objName) => {
                return this.getElemFromName(objName).css('background-color');
            },
            'Horizontal scroll': (objName) => {
                return this.getElemFromName(objName).css('overflow-x');
            },
            'Vertical scroll': (objName) => {
                return this.getElemFromName(objName).css('overflow-y');
            },

        };

        /**
         * Set of setProperty functions
         * the object key is the property name to be set/get
         *
         */
        this.setProperty = {
            width: (objName, value) => {
                this.getElemFromName(objName).css('width', value + 'px');
            },
            height: (objName, value) => {
                this.getElemFromName(objName).css('height', value + 'px');
            },
            x: (objName, value) => {
                var elem = this.getElemFromName(objName);
                var yPos = Math.round(parseFloat(elem.css('transform').split(',')[5]));
                elem.css('transform', 'translate(' + value + 'px,' + yPos + 'px)');
            },
            y: (objName, value) => {
                var elem = this.getElemFromName(objName);
                var xPos = Math.round(parseFloat(elem.css('transform').split(',')[4]));
                elem.css('transform', 'translate(' + xPos + 'px,' + value + 'px)');
            },
            Alpha: (objName, value) => {
                this.getElemFromName(objName).css('opacity', value/100 );
            },
            'Background color': (objName, value) => {
                this.getElemFromName(objName).css('background-color', value);
            },
            'Horizontal scroll': (objName, value) => {
                this.getElemFromName(objName).css('overflow-x', 'hidden');
                if (value) this.getElemFromName(objName).css('overflow-x', 'scroll');
            },
            'Vertical scroll': (objName, value) => {
                this.getElemFromName(objName).css('overflow-y', 'hidden');
                if (value) this.getElemFromName(objName).css('overflow-y', 'scroll');
            },

        };
    }

    /**
     * Retrieves the element with a given object-name attribute
     * @param objName
     * @returns {*|jQuery|HTMLElement}
     */
    getElemFromName (objName) {
        return $('[obj-name= "' + objName + '"]');
    }

    /**
     * Generic removeGesture block implementation
     * @param objName
     * @param gesture
     */
    removeGesture (objName, gesture) {
        try {
            var elem = this.getElemFromName(objName);
            switch (gesture) {
                case "CLICK":
                    return elem.unbind('click');
                    break;
            }
        } catch (e) {
            throw(e);
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = BaseObject;




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_label_label_module_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_button_button_module_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_network_network_module_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_json_json_module_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_connio_connio_module_js__ = __webpack_require__(2);
// ES6 imports







var distLib = {};
distLib.Label = new __WEBPACK_IMPORTED_MODULE_0__objects_label_label_module_js__["a" /* default */]();
distLib.Button = new __WEBPACK_IMPORTED_MODULE_1__objects_button_button_module_js__["a" /* default */]();
distLib.Network = new __WEBPACK_IMPORTED_MODULE_2__objects_network_network_module_js__["a" /* default */]();
distLib.JSON = new __WEBPACK_IMPORTED_MODULE_3__objects_json_json_module_js__["a" /* default */]();
distLib.Connio = new __WEBPACK_IMPORTED_MODULE_4__objects_connio_connio_module_js__["a" /* default */]();

// setting the global variable
com = com || {};
com.fc = com.fc || {};
com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib = Object.assign(com.fc.JavaScriptDistLib, distLib);

/***/ })
/******/ ]);