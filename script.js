$(document).ready(function() {
  var temp;
  var nextTest;

  function Test1() {
    // Block#: 50
    temp = '<h2>Test 1</h2>Testing Get device with filter<br><br>';
    // Block#: 52
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 54
    com.fc.JavaScriptDistLib.Connio.connioGetDevices('_dpf_807651864374550548',
      function(devices) {
        // Block#: 56
        temp = String(temp) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.covertToJSON(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(devices, '$.results[:].name'))));
        // Block#: 64
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }

  function Test2() {
    // Block#: 67
    temp = '<h2>Test 2</h2>Testing Read data<br><br>';
    // Block#: 69
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 71
    com.fc.JavaScriptDistLib.Connio.connioReadData('_dev_807652890532634093',
      function(data) {
        // Block#: 73
        temp = String(temp) + String(com.fc.JavaScriptDistLib.Connio.connionGetValue(data, 'mostRecent', 'soilHumidity'));
        // Block#: 79
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      },
      function(error_data) {
        // Block#: 81
        temp = String(temp) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data));
        // Block#: 86
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }

  function Test3() {
    // Block#: 89
    temp = '<h2>Test 3</h2>Testing Hystorical data<br><br>';
    // Block#: 91
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 93
    com.fc.JavaScriptDistLib.Connio.connioReadHistorical('_dev_807652890532634093', 'temperature', com.fc.JavaScriptDistLib.TimeLibrary.createTime("12:00 AM 31/01/2017"), com.fc.JavaScriptDistLib.TimeLibrary.createTime("08:00 AM 28/02/2017"), true, 3,
      function(time_list, value_list) {
        // Block#: 100
        temp = [temp, (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.covertToJSON(time_list))), '<br><br>', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.covertToJSON(value_list)))].join('');
        // Block#: 110
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      },
      function(error_data) {
        // Block#: 112
        temp = String(temp) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data));
        // Block#: 117
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }

  function Test4() {
    // Block#: 120
    temp = '<h2>Test 4</h2>Testing Write data to device<br><br>';
    // Block#: 122
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 124
    com.fc.JavaScriptDistLib.Connio.connioWriteData('_dev_807652890532634093', 25, 'soilHumidity',
      function() {
        // Block#: 128
        temp = String(temp) + String('Done!');
        // Block#: 132
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      },
      function(error_data) {
        // Block#: 134
        temp = String(temp) + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data));
        // Block#: 139
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }

  function Test5() {
    // Block#: 142
    temp = '<h2>Test 5</h2>MQTT<br><br>';
    // Block#: 144
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 146
    com.fc.JavaScriptDistLib.Connio.connioStartTrackingPropertyChanges(on_connio_property_updated); // Block#: 147
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button", 'Click here to stop MQTT');
  }

  function Test6() {
    // Block#: 150
    temp = '<h2>Test 5</h2>MQTT stoped<br><br>';
    // Block#: 152
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 154
    com.fc.JavaScriptDistLib.Connio.connioStopTrackingPropertyChanges(); // Block#: 155
    com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button", 'Run Next Test');
  }

  function Test7() {
    // Block#: 173
    temp = '<h2>Test 7</h2>Url not found<br><br>';
    // Block#: 175
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
  }
  // Block#: 1
  function on_Button_click() {
    try {
      // Block#: 2
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button", 'Run next test'); // Block#: 4
      if(nextTest == 1) {
        // Block#: 8
        Test1();
        // Block#: 9
        nextTest = 2;
      } else if(nextTest == 2) {
        // Block#: 14
        Test2();
        // Block#: 15
        nextTest = 3;
      } else if(nextTest == 3) {
        // Block#: 20
        Test3();
        // Block#: 21
        nextTest = 4;
      } else if(nextTest == 4) {
        // Block#: 26
        Test4();
        // Block#: 27
        nextTest = 5;
      } else if(nextTest == 5) {
        // Block#: 32
        nextTest = 6;
        // Block#: 34
        Test5();
      } else if(nextTest == 6) {
        // Block#: 38
        nextTest = 7;
        // Block#: 40
        Test6();
      } else {
        // Block#: 41
        Test7();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  // Block#: 42
  function on_Button2_click() {
    try {
      // Block#: 43
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button2", 'initliazed!'); // Block#: 45
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("Button2", '#009900'); // Block#: 47
      nextTest = 1;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button2"]').on('click', on_Button2_click);
  // Block#: 157
  function on_connio_property_updated(device_id, property, value) {
    try {
      // Block#: 158
      temp = [temp, (com.fc.JavaScriptDistLib.TextLib.convertToText(device_id)), ', ', (com.fc.JavaScriptDistLib.TextLib.convertToText(property)), ', ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '<br>'].join('');
      // Block#: 170
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Connio.configure('{"api":{"url":"https://api.connio.com","app":"_app_796713082971687907","key":"_key_796713086353217836","secret":"2b05db40845242c09899346fca8da8ff"},"mqtt":{"host":"mqtt.connio.com","port":"8001","secure":true,"clientId":"_api_822826112907525233","username":"_key_822826112904411459","password":"cddd9bed10324fcea3ccef36e37924fa"}}');
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 361764-808115-968344-164579
