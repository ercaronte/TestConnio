$(document).ready(function() {
  var temp;
  var nextTest;

  function Test1() {
    // Block#: 229
    temp = '<h2>Test 1</h2>Testing Get device with filter<br><br>';
    // Block#: 231
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 233
    com.fc.JavaScriptDistLib.Connio.connioGetDevices('_dpf_807651864374550548',
      function(devices) {
        // Block#: 235
        temp = String(temp) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.covertToJSON(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(devices, '$.results[:].name'))));
        // Block#: 243
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }

  function Test2() {
    // Block#: 246
    temp = '<h2>Test 2</h2>Testing Read data<br><br>';
    // Block#: 248
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 250
    com.fc.JavaScriptDistLib.Connio.connioReadData('_dev_807652890532634093',
      function(data) {
        // Block#: 252
        temp = String(temp) + String(com.fc.JavaScriptDistLib.Connio.connionGetValue(data, 'mostRecent', 'soilHumidity'));
        // Block#: 258
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      },
      function(error_data) {
        // Block#: 260
        temp = String(temp) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data));
        // Block#: 265
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }

  function Test3() {
    // Block#: 268
    temp = '<h2>Test 3</h2>Testing Hystorical data<br><br>';
    // Block#: 270
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 272
    com.fc.JavaScriptDistLib.Connio.connioReadHistorical('_dev_807652890532634093', 'temperature', com.fc.JavaScriptDistLib.TimeLibrary.createTime("12:00 AM 31/01/2017"), com.fc.JavaScriptDistLib.TimeLibrary.createTime("08:00 AM 28/02/2017"), true, 3,
      function(time_list, value_list) {
        // Block#: 279
        temp = [temp, (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.covertToJSON(time_list))), '<br><br>', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.covertToJSON(value_list)))].join('');
        // Block#: 289
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      },
      function(error_data) {
        // Block#: 291
        temp = String(temp) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data));
        // Block#: 296
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }

  function Test4() {
    // Block#: 299
    temp = '<h2>Test 4</h2>Testing Write data to device<br><br>';
    // Block#: 301
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 303
    com.fc.JavaScriptDistLib.Connio.connioWriteData('_dev_807652890532634093', 25, 'soilHumidity',
      function() {
        // Block#: 307
        temp = String(temp) + String('Done!');
        // Block#: 311
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      },
      function(error_data) {
        // Block#: 313
        temp = String(temp) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data));
        // Block#: 318
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }

  function Test5() {
    // Block#: 321
    temp = '<h2>Test 5</h2>MQTT<br><br>';
    // Block#: 323
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 325
    com.fc.JavaScriptDistLib.Connio.connioStartTrackingPropertyChanges(on_connio_property_updated); // Block#: 326
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button", 'Click here to stop MQTT');
  }

  function Test6() {
    // Block#: 329
    temp = '<h2>Test 5</h2>MQTT stoped<br><br>';
    // Block#: 331
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 333
    com.fc.JavaScriptDistLib.Connio.connioStopTrackingPropertyChanges(); // Block#: 334
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button", 'Run Next Test');
  }

  function Test7() {
    // Block#: 352
    temp = '<h2>Test 7</h2>Url not found<br><br>';
    // Block#: 354
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
  }
  // Block#: 180
  function on_Button_click() {
    try {
      // Block#: 181
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button", 'Run next test'); // Block#: 183
      if(nextTest == 1) {
        // Block#: 187
        Test1();
        // Block#: 188
        nextTest = 2;
      } else if(nextTest == 2) {
        // Block#: 193
        Test2();
        // Block#: 194
        nextTest = 3;
      } else if(nextTest == 3) {
        // Block#: 199
        Test3();
        // Block#: 200
        nextTest = 4;
      } else if(nextTest == 4) {
        // Block#: 205
        Test4();
        // Block#: 206
        nextTest = 5;
      } else if(nextTest == 5) {
        // Block#: 211
        nextTest = 6;
        // Block#: 213
        Test5();
      } else if(nextTest == 6) {
        // Block#: 217
        nextTest = 7;
        // Block#: 219
        Test6();
      } else {
        // Block#: 220
        Test7();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  // Block#: 221
  function on_Button2_click() {
    try {
      // Block#: 222
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button2", 'initliazed!'); // Block#: 224
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("Button2", '#009900'); // Block#: 226
      nextTest = 1;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button2"]').on('click', on_Button2_click);
  // Block#: 336
  function on_connio_property_updated(device_id, property, value) {
    try {
      // Block#: 337
      temp = [temp, (com.fc.JavaScriptDistLib.TextLib.convertToText(device_id)), ', ', (com.fc.JavaScriptDistLib.TextLib.convertToText(property)), ', ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '<br>'].join('');
      // Block#: 349
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Connio.configure('{"api":{"url":"https://api.connio.com","app":"_app_796713082971687907","key":"_key_796713086353217836","secret":"2b05db40845242c09899346fca8da8ff"},"mqtt":{"host":"mqtt.connio.com","port":"8001","secure":true,"clientId":"_api_822826112907525233","username":"_key_822826112904411459","password":"cddd9bed10324fcea3ccef36e37924fa"}}');
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 353952-416763-994069-778432
