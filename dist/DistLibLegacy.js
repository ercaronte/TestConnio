var com = com || {};
com.fc = com.fc || {};
com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};

com.fc.JavaScriptDistLib = Object.assign(com.fc.JavaScriptDistLib, {
    /**
     * Generic getProperty block implementation
     * @param objName Object Name
     * @param property
     * @returns {*}
     */
    getProperty: function (objName, property) {
        try {
            var elem = $('[obj-name= "' + objName + '"]');
            var value = null;
            switch (property) {
                case "width":
                    value = elem.width();
                    break;
                case "height":
                    value = elem.height();
                    break;
                case "x":
                    value = Math.round(parseFloat(elem.css('transform').split(',')[4]));
                    //value = elem.position().left;
                    break;
                case "y":
                    //value = elem.position().top;
                    value = Math.round(parseFloat(elem.css('transform').split(',')[5]));
                    break;
                case "Alpha":
                    value = elem.css('opacity');
                    break;
                case "Background color":
                    value = elem.css('background-color');
                    break;
                case "Horizontal scroll":
                    value = elem.css('overflow-x');
                    break;
                case "Vertical scroll":
                    value = elem.css('overflow-y');
                    break;
            }
            return value;
        } catch (e) {
            throw (e);
        }
    },

    /**
     * Generic setProperty block implementation
     * @param objName
     * @param property
     * @param value
     */
    setProperty: function (objName, property, value) {
        try {
            var elem = $('[obj-name= "' + objName + '"]');
            switch (property) {
                case "width":
                    elem.css('width', value + 'px');
                    break;
                case "height":
                    elem.css('height', value + 'px');
                    break;
                case "x":
                    //var yPos = Math.round(elem.position().top);
                    var yPos = Math.round(parseFloat(elem.css('transform').split(',')[5]));
                    elem.css('transform','translate('+value+'px,'+yPos+'px)');
                    break;
                case "y":
                    //var xPos = Math.round(elem.position().left);
                    var xPos = Math.round(parseFloat(elem.css('transform').split(',')[4]));
                    elem.css('transform','translate('+xPos+'px,'+value+'px)');
                    break;
                case "Alpha":
                    elem.css('opacity', value/100 );
                    break;
                case "Background color":
                    elem.css('background-color', value);
                    break;

                case "Horizontal scroll":
                    var code = elem.css('overflow-x', 'hidden');
                    if (value) {
                        code = elem.css('overflow-x', 'scroll');
                    }
                    break;
                case "Vertical scroll":
                    var code = elem.css('overflow-y', 'hidden');
                    if (value) {
                        code = elem.css('overflow-y', 'scroll');
                    }
                    break;
            }
        } catch (e) {
            throw (e);
        }
    },

    /**
     * Generic removeGesture block implementation
     * @param objName
     * @param property
     * @param value
     */
    removeGesture: function (objName, gesture) {
        try {
            var elem = $('[obj-name= "' + objName + '"]');
            switch (gesture) {
                case "CLICK":
                    return elem.unbind('click');
                    break;
            }
        } catch (e) {
            throw(e);
        }
    },

    /**
     * Generic action_hide block implementation
     * @param block
     */
    actionHide: function (block) {
        var object_name = block.getFieldValue('OBJECT');
        var elemSelector = '[obj-name="' + object_name + '"]';
        var code = "  $('"+elemSelector+ "').hide();";
        return code;
    },

    /**
     * Generic action_show block implementation
     * @param objName
     */
    actionShow: function (block) {
        var object_name = block.getFieldValue('OBJECT');
        var elemSelector = '[obj-name="' + object_name + '"]';
        var code = "  $('"+elemSelector+ "').show();";
        return code;
    },

    /**
     * Generic sensor_is_visible block implementation
     * @param objName
     */
    sensorIsVisible: function (block) {
        var object_name = block.getFieldValue('OBJECT');
        var elemSelector = '[obj-name="' + object_name + '"]';
        var code = "  $('"+elemSelector+ "').is(':visible')";
        return [code, Blockly.JavaScript.ORDER_NONE];
    },

    /**
     * With the new ES6 Dist Lib this file is referenced as external script
     * here the default 'production style' exception handling is defined
     */
    handleExceptionNative: function(e) {
        console.warn('Exception: ', e);

        if (window.parent) {
            window.parent.com.fc.JavaScriptGenerator.handleExceptionNative(e);
        }
    },

    //_handleException: function(e, message) {
    //    console.error('Exception: ', e, message);
    //},

    /**
     * Facilities for Javascript file generation
     */
    //toJsFile: function () {
    //    this.reset();
    //    return this.serialize(this, 1);
    //},
    //setDistMode: function (mode) {
    //    this.distMode = mode;
    //    if (this.distMode === 'preview') {
    //        com.fc.JavaScriptDistLib.handleException = com.fc.JavaScriptGenerator.handleException;
    //    }
    //    else {
    //        com.fc.JavaScriptDistLib.handleException = com.fc.JavaScriptDistLib._handleException;
    //    }
    //
    //},
    //_excludeFromSerialization: ['_excludeFromSerialization', 'toJsFile', 'setDistMode', 'serialize', 'reset'],
    //distMode: 'preview',
    //serialize: function(obj, level) {
    //    var serialization = '';
    //    var indentation = '  '.repeat(level);
    //    var thisObject = this;
    //
    //    switch (typeof obj) {
    //        case 'number':
    //            serialization += obj;
    //            break;
    //        case 'string':
    //            serialization += '\"' + obj + '\"';
    //            break;
    //        case 'object':
    //
    //            if (Array.isArray(obj)) {
    //                serialization += '[\n';
    //                obj.forEach( function(el) {serialization += indentation + thisObject.serialize(el, level + 1)  + ',\n';})
    //                serialization += indentation + ']';
    //            }
    //            else {
    //                if (obj !== null) {
    //                    serialization += '{\n';
    //                    Object.keys(obj).forEach( function(key) {
    //                        if (thisObject._excludeFromSerialization.indexOf(key) === -1) {
    //                            serialization += indentation + key.toString() + ': ' + thisObject.serialize(obj[key], level + 1) + ',\n';
    //                        }
    //                    });
    //                    serialization += indentation + '}';
    //                }
    //                else {
    //                    serialization += 'null';
    //                }
    //            }
    //            break;
    //        case 'function':
    //            serialization += obj.toString();
    //            break;
    //        default:
    //            throw('Unhandled typeof : ', typeof obj[key]);
    //    }
    //
    //    return serialization;
    //},
    reset: function() {
        var thisObject = this;
        Object.keys(thisObject).forEach( function(key) {
            if ((typeof thisObject[key].reset) === 'function') thisObject[key].reset();
            //console.log('type of:',typeof obj.reset);
        });
    }

});

var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.MapContainer = {
  maps: {},
  //markers: [],

  reset: function() {
    if (com.fc.JavaScriptDistLib.distMode === 'deploy') this.maps = {};
    //this.markers.length = 0;
  },
  setProperty: function (objName, property, value) {
  },

  getProperty: function (objName, property) {
  },

  mapViewSetZoom: function(mapName, zoom) {
    return this.maps[mapName].setZoom(zoom);
  },

  toggleMapUserInteraction: function (mapName, interaction) {
    var options = {
      draggable: false,
      scrollwheel: false,
      panControl: false,
      zoom: this.maps[mapName].getZoom(),
    };
    if (interaction) {
      var options = {
        draggable: true,
        scrollwheel: true,
        panControl: true,
        zoom: this.maps[mapName].getZoom(),
      };
    }
    var newOptions = this.maps[mapName].setOptions(options);
    return newOptions;
  },

  setLocationForMarker: function (marker,location) {
    var latlng = new google.maps.LatLng(location.lat, location.lng);
    marker.setPosition(latlng);
  },

  createMarkerWithImage: function (image, label) {
    var marker = new google.maps.Marker({ title: label, icon: image });
    //this.markers.push(marker);
    return marker;
  },

  addMarkerToMap: function (mapName, marker) {
    marker.setMap(this.maps[mapName]);
  },

  setMarkerLabel: function (text, marker) {
    return marker.setTitle(text);
  },

  setMarkerImage: function (image, marker) {
    return marker.setIcon(image);
  },
  removeMarker: function (marker) {
    return marker.setMap(null);
  },
  mapViewSetLocation: function (mapName, location, animation) {
    var latlng = new google.maps.LatLng(location.lat, location.lng);
    this.maps[mapName].setCenter(latlng);
  },
  MapException: function  (snappMessage, msg) {
    this.name = "MapException";
    this.snappMessage = snappMessage;
    //custom message from snapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
  }
}



com.fc.JavaScriptDistLib.MapContainer.MapException.prototype = Object.create(Error.prototype);
com.fc.JavaScriptDistLib.MapContainer.MapException.prototype.constructor = com.fc.JavaScriptDistLib.MapContainer.MapException;



/* Graph Stubs */

var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.GraphContainer = {
  setProperty: function (objName, property, value) {
    try {
      var elemSelector = '[obj-name="' + objName + '"]';
      var elem = $(elemSelector);

      var graph;
      $(elemSelector).find('.c3').each(function() {
        graph = $(this).data('c3-chart'); 
      });
      switch (property) {
        case "width":
        case "height":
        case "x":
        case "y":
          com.fc.JavaScriptDistLib.setProperty(objName, property, value);
        break;
        case "Type":
          graph.transform(value);
        break;
        case "BG Color":
          $(elemSelector).find('#fcLine').css('background-color',value);
        break;
        case "Legends":
          var show = 'visible';
          if (!value) {
            show = 'hidden';
          }
          // var xAxisLabel = d3.select(id).selectAll('text.c3-axis-x-label').style("visibility", show);
          // var yAxisLabel = d3.select(id).selectAll('text.c3-axis-y-label').style("visibility", show);
          d3.select(elemSelector).selectAll('g.c3-legend-item').style("visibility", show);
        break;
        case "Grid":
          var show = 'visible';
          if (!value) {
            show = 'hidden';
          }
          d3.select(elemSelector).selectAll('g.c3-grid').style('visibility',show);
        break;
        case "X Axis Color":
          d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('path').style("stroke", value);
        break;
        case "Y Axis Color":
          d3.select(elemSelector).selectAll('g.c3-axis-y').selectAll('path').style("stroke", value);
        break;
        case "X Axis Text Color":
          d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('text').selectAll('tspan').style("fill", value);
        break;
        case "Y Axis Text Color":
          d3.select(elemSelector).selectAll('g.c3-axis-y').selectAll('text').selectAll('tspan').style("fill", value);
        break;
        case "X Axis Line Width":
          d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('path').style("stroke-width", value);
        break;
        case "Y Axis Line Width":
          d3.select(elemSelector).selectAll('g.c3-axis-y').selectAll('path').style("stroke-width", value);
        break;
        case "Legend Text":
          d3.select(elemSelector).selectAll('text.c3-axis-x-label').style("stroke", value);
          d3.select(elemSelector).selectAll('text.c3-axis-y-label').style("stroke", value);
          d3.select(elemSelector).selectAll('g.c3-legend-item').selectAll('text').style("stroke", val);
        break;
        case "Fill Alpha":
          d3.select(elemSelector).selectAll('.c3-area ').style('opacity',value/100);
          d3.select(elemSelector).selectAll('g.c3-chart-bars ').selectAll('path').style('opacity',value/100);
        break;
        case "Line Width":
          d3.select(elemSelector).selectAll('g.c3-chart-lines').selectAll('path').style("stroke-width", value);
        break;
        case "Line Circle Color":
          d3.select(elemSelector).selectAll('circle').style("stroke", value);
          d3.select(elemSelector).selectAll('circle').style("fill", value);
        break;
        case "Circle Radius":
          d3.select(elemSelector).selectAll('circle').attr('r',value);
        break;
        case "X Axis Text":
          graph.axis.labels({x: value});
        break;
        case "Y Axis Text":
          graph.axis.labels({y: value});
        break;
        case "Fill Color":
          d3.select(elemSelector).selectAll('.c3-area ').style('fill',value);
        break;
        case "Bar Color":
          d3.select(elemSelector).selectAll('g.c3-chart-bar').selectAll('path').style('fill',value)
        break;
        case "Draw Line Values":
          var show = 'visible';
          if (!value) {
            show = 'hidden';
          }
          d3.select(elemSelector).selectAll('g.c3-chart-text').selectAll('text').style("visibility", show);
        break;
        case "Axis Font Size":
          d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('text').selectAll('tspan').style('font-size',value);
          d3.select(elemSelector).selectAll('g.c3-axis-y').selectAll('text').selectAll('tspan').style('font-size',value);
          d3.select(elemSelector).selectAll('text.c3-text').style('font-size',value);
        break;
        case "Line Filled":
          if (value) {
            graph.transform('area');
          } else {
            graph.transform('line');
          }
        break;
        case "Smooth Line":
          if (value) {
            graph.transform('area-spline');
          } else {
            graph.transform('area');
          }
        break;
      }
    } catch (e) {
      throw new GraphException(e);
    }
  },
  getProperty: function ( objName, property) {
    try {
      var elemSelector = '[obj-name= "' + objName + '"]';
      var elem = $(elemSelector);
      var value;
      var graph;
      $(elemSelector).find('.c3').each(function() {
        graph = $(this).data('c3-chart'); 
      });
      switch (property) {
        case "width":
        case "height":
        case "x":
        case "y":
          value  = com.fc.JavaScriptDistLib.getProperty( objName, property);
        break;
        case "Type":
          value = graph.type;
        break;
        case "BG Color":
          value = $(elemSelector).find('#fcLine').css('background-color');
        break;
        case "Legends":
          value = d3.select(elemSelector).selectAll('g.c3-legend-item').style("visibility");
        break;
        case "Grid":
          value = d3.select(elemSelector).selectAll('g.c3-grid').style('visibility');
        break;
        case "X Axis Color":
          value = d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('path').style("stroke");
        break;
        case "Y Axis Color":
          value = d3.select(elemSelector).selectAll('g.c3-axis-y').selectAll('path').style("stroke");
        break;
        case "X Axis Text Color":
          value = d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('text').selectAll('tspan').style("fill");
        break;
        case "Y Axis Text Color":
          value = d3.select(elemSelector).selectAll('g.c3-axis-y').selectAll('text').selectAll('tspan').style("fill");
        break;
        case "X Axis Line Width":
          value = d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('path').style("stroke-width");
        break;
        case "Y Axis Line Width":
          value = d3.select(elemSelector).selectAll('g.c3-axis-y').selectAll('path').style("stroke-width");
        break;
        case "Legend Text":
          value = d3.select(elemSelector).selectAll('text.c3-axis-x-label').style("stroke");
        break;
        case "Fill Alpha":
          value = d3.select(elemSelector).selectAll('.c3-area ').style('opacity') * 100;
        break;
        case "Line Width":
          value = d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('path').style("stroke-width");
        break;
        case "Line Circle Color":
          value = d3.select(elemSelector).selectAll('circle').style("stroke");
        break;
        case "Circle Radius":
          value = d3.select(elemSelector).selectAll('circle').attr('r');
        break;
        case "X Axis Text":
          value = d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('text').html();
        break;
        case "Y Axis Text":
          value = d3.select(elemSelector).selectAll('g.c3-axis-y').selectAll('text').html();
        break;
        case "Fill Color":
          value = d3.select(elemSelector).selectAll('.c3-area ').style('fill');
        break;
        case "Bar Color":
          value = d3.select(elemSelector).selectAll('g.c3-chart-bar').selectAll('path').style('fill');
        break;
        case "Draw Line Values":
          value = d3.select(elemSelector).selectAll('g.c3-chart-text').style("opacity");
        break;
        case "Axis Font Size":
          value = d3.select(elemSelector).selectAll('g.c3-axis-x').selectAll('text').selectAll('tspan').style('font-size');
        break;
        
      }
      return value;
    } catch (e) {
      throw new GraphException(e);
    }
  },
  createChartWithList: function (objName,xArr,yArr,name) {
    var elemSelector = '[obj-name= "' + objName + '"]';
    var elem = $(elemSelector);
    var value;
    var graph;
    $(elemSelector).find('.c3').each(function() {
      graph = $(this).data('c3-chart'); 
    });
    var xAxisData = [];
    var yAxisData = [];

    if( yArr!=null ) {
      var populateXAxis = false;
     
      if( xArr!=null ) {
        for(var xIndex=0; xIndex<xArr.length; xIndex++) {
          xAxisData.push(xArr[xIndex]);
        }
      }
      else {
        populateXAxis = true;
      }
      yAxisData.push(name);
      for(var i=0; i<yArr.length; i++) {
        yAxisData.push(yArr[i]);
        if( populateXAxis ) {
          xAxisData.push(i);
        }
      }
      var chartData = {};
      chartData.columns = [];
      //chartData.columns.push(xAxisData);
      chartData.columns.push(yAxisData);
      chartData.categories = xAxisData;
      chartData.unload = true;

      var updatedChart = graph.load(chartData);
      return updatedChart;
    } else {
      throw new GraphException(e);
    }
  },
  addChartTransition: function (objName,x,y) {
    var elemSelector = '[obj-name= "' + objName + '"]';
    var elem = $(elemSelector);
    var value;
    var graph;
    $(elemSelector).find('.c3').each(function() {
      graph = $(this).data('c3-chart'); 
    });
    var dataArr = [graph.data()[0].id];
    var graphInitArr = [graph.data()[0].id];
    for (var i=0;i<graph.data()[0].values.length;i++) {
      graphInitArr.push(0); // ReInit the Graph
    }
    for (var i=0;i<graph.data()[0].values.length;i++) {
      dataArr.push(graph.data()[0].values[i].value);
    }
    var initGraph = graph.load({
      columns: [
        graphInitArr,    
      ]
      
    });
    
    var updatedGraph = setTimeout(function () {

      graph.load({
        columns: [
          dataArr,    
        ]
      });
    },x);
    return [initGraph,updatedGraph];
  },
  addValuesToChart: function (objName,xVal,yVal,name) {
    var elemSelector = '[obj-name= "' + objName + '"]';
    var elem = $(elemSelector);
    var value;
    var graph;
    $(elemSelector).find('.c3').each(function() {
      graph = $(this).data('c3-chart'); 
    });

    var xAxisArr = graph.categories();
    xAxisArr.push(xVal);

    var yAxisArr = [name];

    var graphData = graph.data()[0].values;
    for (var i=0;i<graphData.length;i++) {
      yAxisArr.push(graphData[i].value);
    }
    yAxisArr.push(yVal);
    console.log (xAxisArr+yAxisArr);
    
    var chartData = {};
    chartData.columns = [];
    chartData.columns.push(yAxisArr);
    chartData.categories = xAxisArr;
    chartData.unload = true;

    var updatedChart = graph.load(chartData);
    return updatedChart;
  },
  GraphException: function  (snappMessage, msg) {
    this.name = "GraphException";
    this.snappMessage = snappMessage;
    //custom message from snapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
  }
}

com.fc.JavaScriptDistLib.GraphContainer.GraphException.prototype = Object.create(Error.prototype);
com.fc.JavaScriptDistLib.GraphContainer.GraphException.prototype.constructor = com.fc.JavaScriptDistLib.GraphContainer.GraphException;


//function setProperties(property, id, value) {
//    try {
//        switch (property) {
//            case "Alpha":
//                $('#' + id + '').css('opacity', value/100 );
//                break;
//            case "width":
//                $('#' + id + '').css('width', value + 'px');
//                break;
//            case "height":
//                $('#' + id + '').css('height', value + 'px');
//                break;
//            case "x":
//                var yPos = Math.round($('#' + id).position().top);
//                $('#'+id).css('transform','translate('+value+'px,'+yPos+'px)');
//                break;
//            case "y":
//                var xPos = Math.round($('#' + id).position().left);
//                $('#'+id).css('transform','translate('+xPos+'px,'+value+'px)');
//                break;
//            case "Background color":
//                $('#' + id + '').css('background-color', value);
//                break;
//
//            case "Horizontal scroll":
//                var code = $('#' + id + '').css('overflow-x', 'hidden');
//                if (value) {
//                    code = $('#' + id + '').css('overflow-x', 'scroll');
//                }
//            break;
//            case "Vertical scroll":
//                var code = $('#' + id + '').css('overflow-y', 'hidden');
//                if (value) {
//                    code = $('#' + id + ' *').css('overflow-y', 'scroll');
//                }
//            break;
//        }
//    } catch (e) {
//        throw (e);
//    }
//}

//function getProperties(property, id) {
//    try {
//        var value = null;
//        switch (property) {
//            case "Alpha":
//                value = $('#' + id ).css('opacity');
//                break;
//            case "width":
//                value = $('#' + id ).width();
//                break;
//            case "height":
//                value = $('#' + id ).height();
//                break;
//            case "x":
//                value = $('#' + id ).position().left;
//                break;
//            case "y":
//                value = $('#' + id ).position().top;
//                break;
//            case "Background color":
//                value = $('#' + id ).css('background-color');
//                break;
//
//            case "Horizontal scroll":
//                value = $('#' + id ).css('overflow-x');
//                break;
//            case "Vertical scroll":
//                value = $('#' + id ).css('overflow-y');
//                break;
//        }
//        return value;
//    } catch (e) {
//        throw (e);
//    }
//}

//function containerRemoveGesture (id,gesture) {
//  try {
//    switch (gesture) {
//      case "CLICK":
//        return $('#'+id).unbind('click');
//      break;
//    }
//  } catch (e) {
//    throw(e);
//  }
//}

/* Image Object Stub Functions */
var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.Image = {
  createImageFromUrl: function (url,successCallBack) {
    successCallBack (url);
  },
  setProperty: function (objName, property, value) {
    try {
      var elemSelector = '[obj-name="' + objName + '"]';
      var elem = $(elemSelector);
      console.log (value);
      switch (property) {
        case "Image":
          elem.find('img').attr('src',value);
          break;
        case "width":
        case "height":
        case "Alpha":
        case "Background color":
        case "x":
        case "y":
          com.fc.JavaScriptDistLib.setProperty(objName, property, value);
        break;
        case "Scaling":
          switch (value) {
            case "stretch":
              $(elemSelector + ' img').css('width','inherit');
              $(elemSelector + ' img').css('height','inherit');
              $(elemSelector + ' img').attr('scale-type','stretch');
              break;
            case "fit":
              $(elemSelector + ' img').css('width','inherit');
              $(elemSelector + ' img').css('height','initial');
              $(elemSelector + ' img').attr('scale-type','fit');
              break;
            case "crop":
              $(elemSelector + ' img').css('width','initial');
              $(elemSelector + ' img').css('height','initial');
              $(elemSelector + ' img').attr('scale-type','crop');
              break;
          }
        break;
      }
    } catch (e) {
      throw new com.fc.JavaScriptDistLib.Image.ImageException(e);
    }
  },
  getProperty: function (objName, property) {
    try {
      var elemSelector = '[obj-name= "' + objName + '"]';
      var elem = $(elemSelector);
      var value;
      switch (property) {
        case "Image":
          value = elem.attr('src');
          break;
        case "width":
        case "height":
        case "x":
        case "y":
        case "Alpha":
        case "Background color":
          value = com.fc.JavaScriptDistLib.getProperty( objName, property);
          break;
        case "Scaling":
          value = elem.attr('scale-type');
          break;
      }
      return value;
    } catch (e) {
      throw new com.fc.JavaScriptDistLib.Image.ImageException(e);
    }
  },
  ImageException: function  (snappMessage, msg) {
    this.name = "ImageException";
    this.snappMessage = snappMessage;
    //custom message from snapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
  }
};
com.fc.JavaScriptDistLib.Image.ImageException.prototype = Object.create(Error.prototype);
com.fc.JavaScriptDistLib.Image.ImageException.prototype.constructor = com.fc.JavaScriptDistLib.Image.ImageException;

//function createImageFromUrl (url,successCallBack) {
//  successCallBack (url);
//}

//function changeImage (id,val) {
//  try {
//    return $('#'+id + ' img').attr('src',val);
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

//function changeImageBg (id,val) {
//  try {
//    return $('#'+id).css('background-color',val);
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}


//function changeImageAlpha (id,val) {
//  try {
//    return $('#'+id+ ' img').css('opacity',val/100);
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

//function changeImageWidth (id,val) {
//  try {
//    return $('#'+id).css('width',val+'px');
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}
//
//function changeImageHeight (id,val) {
//  try {
//    return $('#'+id).css('height',val+'px');
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}
//
//function changeImageXPos (id,val) {
//  try {
//    var yPos = Math.round($('#'+id).position().top);
//    var changedXPos = $('#'+id).css('transform','translate('+val+'px,'+yPos+'px)');
//    return changedXPos;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}
//
//function changeImageYPos (id,val) {
//  try {
//    var xPos = Math.round($('#'+id).position().left);
//    var changedYPos = $('#'+id).css('transform','translate('+xPos+'px,'+val+'px)');
//    return changedYPos;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}
//
//function changeImageScaling (id,val) {
//  try {
//    switch (val) {
//      case "stretch":
//        var width = $('#'+id + ' img').css('width','inherit');
//        var height = $('#'+id + ' img').css('height','inherit');
//        var attr = $('#'+id + ' img').attr('scale-type','stretch');
//        return [width,height,attr];
//      break;
//      case "fit":
//        var width = $('#'+id + ' img').css('width','inherit');
//        var height = $('#'+id + ' img').css('height','initial');
//        var attr = $('#'+id + ' img').attr('scale-type','fit');
//        return [width,height,attr];
//      break;
//      case "crop":
//        var width = $('#'+id + ' img').css('width','initial');
//        var height = $('#'+id + ' img').css('height','initial');
//        var attr = $('#'+id + ' img').attr('scale-type','crop');
//        return [width,height,attr];
//      break;
//    }
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

/* Get Properties */

//function getImage (id) {
//  try {
//    var image = $('#'+id+' img').attr('src');
//    return image;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

//function getImageAlpha (id) {
//  try {
//    var alpha = $('#'+id+' img').css('opacity');
//    return alpha * 100;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

//function getImageBg (id) {
//  try {
//    var bg = $('#'+id).css('background-color');
//    return bg;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

//function getImageWidth (id) {
//  try {
//    var width = $('#'+id).width();
//    return width;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}
//
//function getImageHeight (id) {
//  try {
//    var height = $('#'+id).height();
//    return height;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

//function getImageXPos (id) {
// try {
//    var xPos = $('#'+id).position().left;
//    return xPos;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}
//
//function getImageYPos (id) {
// try {
//    var yPos = $('#'+id).position().top;
//    return yPos;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}
//
//function getImageScaling (id) {
//  try {
//    var scaling = $('#'+id+ ' img').attr('scale-type');
//    return scaling;
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

//function imageRemoveGesture (id,gesture) {
//  try {
//    switch (gesture) {
//      case "CLICK":
//        return $('#'+id).unbind('click');
//      break;
//    }
//  } catch (e) {
//    throw new ImageException(e);
//  }
//}

//Define custom exceptions pertaining to network module here.
//function ImageException (snappMessage, msg) {
//    this.name = "ImageException";
//    this.snappMessage = snappMessage;
//    //custom message from smapp.
//    this.message = msg || snappMessage;
//    this.stack = (new Error()).stack;
//}
//ImageException.prototype = Object.create(Error.prototype);
//ImageException.prototype.constructor = ImageException;
/* TextBox Stubs */

function setTextValue (id,val) {
  try {
    return $('#' + id +  ' input').val(val);
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setTextFontSize (id,val) {
  try {
    return $('#' + id +  ' input').css('font-size',val+'px');
  } catch (e) {
    throw new TextBoxException(e); 
  }
}

function setTextAlpha (id,val) {
  try {
    return $('#' + id +  ' input').css('opacity',val/100);
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setTextWidth (id,val) {
  try {
    $('#' + id +  ' input').css('width',val+'px');
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setTextHeight (id,val) {
  try {
    $('#' + id +  ' input').css('height',val+'px');
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setTextXPos (id,val) {
  try {
    var yPos = Math.round($('#'+id).position().top);
    var changedXPos = $('#'+id).css('transform','translate('+val+'px,'+yPos+'px)');
    return changedXPos;
  } catch (e) {
    throw new TextBoxException(e);
  } 
}

function setTextYPos (id,val) {
  try {
    var xPos = Math.round($('#'+id).position().left);
    var changedYPos = $('#'+id).css('transform','translate('+xPos+'px,'+val+'px)');
    return changedYPos;
  } catch (e) {
    throw new TextBoxException(e);
  } 
}

function setTextAlignment (id,val) {
  try {
    if ( (val.toLowerCase() == 'left') || (val.toLowerCase() == 'center') || (val.toLowerCase() == 'right') ) {
      return $('#'+id+' input').css('text-align',val.toLowerCase());
    } else {
      throw new TextBoxException("Alignment shoube be 'left' / 'center", 'right');
    }
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setTextVerticalAlignment (id,val) {
  try {
    if ( (val.toLowerCase() == 'top') || (val.toLowerCase() == 'middle') || (val.toLowerCase() == 'bottom') ) {
      return $('#'+id+' input').css('vertical-align',val.toLowerCase());
    } else {
      throw new TextBoxException("Alignment shoube be 'top' / 'middle", 'bottom');
    }
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setTextFontStyle (id,val) {
  try {
    if ( (val.toLowerCase() == 'normal') || (val.toLowerCase() == 'italic') || (val.toLowerCase() == 'oblique') || (val.toLowerCase() == 'bold') ) {
      return $('#'+id+' input').css('font-style',val.toLowerCase());
    } else {
      throw new TextBoxException("Font Style should be 'normal' / 'italic", 'oblique');
    }
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setTextFontFamily (id,val) {
  try {
    return $('#'+id+' input').css('font-family',val);
  } catch (e) {
    throw new TextBoxException (e);
  }
}

function setTextbackgroundColor (id,val) {
  try {
    return $('#'+id+' input').css('background-color',val);
  } catch (e) {
    throw new TextBoxException (e); 
  }
}

function setTextColor (id,val) {
  try {
    return $('#'+id+' input').css('color',val);
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function toggleTextEnabled (id,val) {
  try {
    $('#'+id+' input').attr('disabled',!val);
  } catch (e) {
   throw new TextBoxException(e); 
  }
}

function setPasswordChars (id,val) {
  try {
    var inputType = 'text';
    if (val)
      inputType = 'password';
    $('#'+id+' input').attr('type',inputType);
  } catch (e) { 
    throw new TextBoxException(e);
  }
}

function setMaxChars (id,val) {
  try {
    $('#'+id+' input').attr('maxlength',val);
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setMaxLines (id,val) {
  try {

  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setInputType (id,val) {
  try {
    switch (val) {
      case "numeric":
      case "number":
        var inputType = "number";
      break;
      case "email":
        var inputType = "email";
      break;
      default:
        var inputType = "text"
      break;
    }
    return $('#' + id +  ' input').attr('type',inputType);
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function setNavigationOrder (id,val) {
  try {

  } catch (e) {
    throw new TextBoxException(e); 
  }
}

/* Get Properties */

function getTextValue (id) {
  try {
    return $('#' + id +  ' input').val();
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getTextFontSize (id) {
  try {
    return $('#' + id +  ' input').css('font-size');
  } catch (e) {
    throw new TextBoxException(e); 
  }
}

function getTextAlpha (id) {
  try {
    return $('#' + id +  ' input').css('opacity') * 100;
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getTextWidth (id) {
  try {
    return $('#' + id +  ' input').width();
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getTextHeight (id) {
  try {
    return $('#' + id +  ' input').height();
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getTextXPos (id) {
  try {
    return Math.round($('#'+id).position().left);
  } catch (e) {
    throw new TextBoxException(e);
  } 
}

function getTextYPos (id) {
  try {
    return Math.round($('#'+id).position().top);
  } catch (e) {
    throw new TextBoxException(e);
  } 
}

function getTextAlignment (id) {
  try {
    return $('#'+id+' input').css('text-align');
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getTextVerticalAlignment (id) {
  try {
    return $('#'+id+' input').css('vertical-align');
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getTextFontStyle (id) {
  try {
    return $('#'+id+' input').css('font-style');
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getTextFontFamily (id) {
  try {
    return $('#'+id+' input').css('font-family');
  } catch (e) {
    throw new TextBoxException (e);
  }
}

function getTextbackgroundColor (id) {
  try {
    return $('#'+id+' input').css('background-color');
  } catch (e) {
    throw new TextBoxException (e); 
  }
}

function getTextColor (id) {
  try {
    return $('#'+id+' input').css('color');
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getTextEnabled (id) {
  try {
    var disabled = $('#'+id+' input').attr('disabled');
    return !disabled;
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getPasswordChars (id) {
  try {
    var inputType = $('#'+id+' input').attr('type');
    var isPassword = false;
    if (inputType == 'password')
      isPassword = true;
    return isPassword;
  } catch (e) { 
    throw new TextBoxException(e);
  }
}

function getMaxChars (id) {
  try {
    return $('#'+id+' input').attr('maxlength');
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getInputType (id) {
  try {
    return $('#'+id+' input').attr('type');
  } catch (e) {
    throw new TextBoxException(e);
  }
}

function getNavigationOrder (id) {
  try {

  } catch (e) {
    throw new TextBoxException(e);
  }
}

//Define custom exceptions pertaining to network module here.
function TextBoxException (snappMessage, msg) {
    this.name = "TextBoxException";
    this.snappMessage = snappMessage;
    //custom message from smapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
}
TextBoxException.prototype = Object.create(Error.prototype);
TextBoxException.prototype.constructor = TextBoxException;
/* Location Stubs */
var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.Location = {

	locationCreate: function(lat,lng) {
	  var locationObj = {lat: lat, lng: lng};
	  return locationObj;
	},

	locationGetLatitude: function(loc) {
		return loc.lat;
	},

	locationGetLongitude: function(loc) {
		return loc.lng;
	},

	createLocationFromText: function (text, successCallback, errorCallback) {
		console.log ("createLocationFromText " + text);
		var locationArr = text.split(",");
		if( locationArr.length == 2 ) {
			console.log (locationArr);
			var latitude = locationArr[0];
			var longitude = locationArr[1];
			var locationObj = {lat: latitude, lng: longitude};
			successCallback (locationObj);
		}
		else {
			errorCallback ("Invalid Location");
		}
	},
}


/**
 * Created by Oscar Rangel on 21/12/16.
 */

var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.TimeLibrary = {
    createTime: function(time) {
        var t = time.match(/^(\d{2}):(\d{2})(\s)(\w{2})(\s)(\d{2})\/(\d{2})\/(\d{4})$/);
        if (t ===null)
            return null;
        var d=+t[6], m=+t[7], y=+t[8], sub=t[4], h=+t[1], min=+t[2];
        if (sub.toString().toLowerCase().localeCompare("pm") == 0)
            h=h+12;
        else if(sub.toString().toLowerCase().localeCompare("am") != 0)
            return sub;
        return new Date(y,m-1,d,h,min);
    },
    createTimeNow: function() {
        return new Date();
    },
    createTimeFromTimestamp: function(timestamp) {
        return new Date(Number(timestamp));
    },
    createTimestampFromTime: function(time) {
    return new Date(time).getTime();
    },
    textFromTime: function(time, op) {
      var dateTime =  new Date(time);

      switch(op){
        case "DATE_TIME_12":
            var H = dateTime.getHours();
            var M = dateTime.getMinutes();
            var m = dateTime.getMonth()+1;
            var d = dateTime.getDate();
            var y = dateTime.getFullYear();
            var a = "AM";
            if (H>12){
                H = H-12;
                a = "PM"
            }
            if (M.toString().length == 1) {
                M = "0" + M;
            }
            return H + ":" + M + " " + a + " " + d + "/" + m + "/" + y;

        case "DATE_TIME_12_US":
            var H = dateTime.getHours();
            var M = dateTime.getMinutes();
            var m = dateTime.getMonth()+1;
            var d = dateTime.getDate();
            var y = dateTime.getFullYear();
            var a = "AM";
            if (H>12){
                H = H-12;
                a = "PM"
            }
            if (M.toString().length == 1) {
                M = "0" + M;
            }
            return H + ":" + M + " " + a + " " + m + "/" + d + "/" + y;

        case "DATE_TIME_24":
            var H = dateTime.getHours();
            var M = dateTime.getMinutes();
            var m = dateTime.getMonth()+1;
            var d = dateTime.getDate();
            var y = dateTime.getFullYear();
            if (M.toString().length == 1) {
                M = "0" + M;
            }
            return H + ":" + M + " " + d + "/" + m + "/" + y;

        case "DATE_TIME_24_US":
            var H = dateTime.getHours();
            var M = dateTime.getMinutes();
            var m = dateTime.getMonth()+1;
            var d = dateTime.getDate();
            var y = dateTime.getFullYear();
            if (M.toString().length == 1) {
                M = "0" + M;
            }
            return H + ":" + M + " " + m + "/" + d + "/" + y;

        case "TIME_12":
            var H = dateTime.getHours();
            var M = dateTime.getMinutes();
            var a = "AM";
            if (H>12){
                H = H-12;
                a = "PM"
            }
            return H + ":" + M + " " + a;

        case "TIME_24":
            var H = dateTime.getHours();
            var M = dateTime.getMinutes();
            return H + ":" + M;

        case "DATE":
            var m = dateTime.getMonth()+1;
            var d = dateTime.getDate();
            var y = dateTime.getFullYear();
            return d + "/" + m + "/" + y;

        case "DATE_US":
            var m = dateTime.getMonth()+1;
            var d = dateTime.getDate();
            var y = dateTime.getFullYear();
            return m + "/" + d + "/" + y;

        default:
            return "";
      }
    },
    elapsedComponent: function(timestamp, num){
        return Math.floor(timestamp/num);
    },
    elapsedComponentsFromTime: function(time, components) {
        var dateTime =  new Date(time.getTime());
        var dateZeroTime = new Date(0);
        var y = dateTime.getUTCFullYear() - dateZeroTime.getUTCFullYear();
        var m =  dateTime.getUTCMonth() - dateZeroTime.getUTCMonth();
        var d =  dateTime.getUTCDate() - dateZeroTime.getUTCDate();
        var h =  dateTime.getUTCHours() - dateZeroTime.getUTCHours();
        var M =  dateTime.getUTCMinutes() - dateZeroTime.getUTCMinutes();
        var s =  dateTime.getUTCSeconds() - dateZeroTime.getUTCSeconds();

        switch(components) {
            case "S":
                return [s];
            case "SM":
                return [M,s];
            case "SMH":
                return [h,M,s];
            case "SMHD":
                return [d,h,M,s];
            case "SMHDM":
                return [m,d,h,M,s];
            case "SMHDMY":
                return [y,m,d,h,M,s];
            default:
                return [];
        }
    },
    componentsFromTime: function(time, components) {
        var dateTime =  new Date(time);
        switch(components) {
            case "S":
                return [dateTime.getSeconds()];
            case "SM":
                return [dateTime.getMinutes(), dateTime.getSeconds()];
            case "SMH":
                return [dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds()];
            case "SMHD":
                return [dateTime.getDate(), dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds()];
            case "SMHDM":
                return [dateTime.getMonth()+1, dateTime.getDate(), dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds()];
            case "SMHDMY":
                return [dateTime.getFullYear(), dateTime.getMonth()+1, dateTime.getDate(), dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds()];
            default:
                return [];
        }
    },

    numberDayOfWeekFromDate: function(time){
        var dateTime =  new Date(time);
        if (dateTime.getDay() == 0)
            return 7;
        return dateTime.getDay();

    },
    stringDayOfWeekFromDate: function(time) {
        var dateTime =  new Date(time);
        var ar = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
        return ar[dateTime.getDay()];
    },
    createTimeInterval: function( sec, min, hou, day, mon, yea){
        return [sec,min,hou,day,mon,yea];
    },
    addIntervalFromTime: function(time, timeInt) {
        if (timeInt.constructor !== Array || timeInt.length != 6){
            return new Date(time);
        }
        var elap = this.componentsFromTime(time, "SMHDMY");
        var year = elap[0] + Number(timeInt[5]);
        var month = (elap[1] - 1) + Number(timeInt[4]);
        var day = elap[2] + Number(timeInt[3]);
        var hours = elap[3] + Number(timeInt[2]);
        var min =elap[4] + Number(timeInt[1]);
        var sec = elap[5] + Number(timeInt[0]);
        return new Date(year, month, day, hours, min, sec);
        //var retTime = new Date(time);
        //retTime.setSeconds(retTime.getSeconds() + Number(timeInt[0]));
        //retTime.setMinutes(retTime.getMinutes() + Number(timeInt[1]));
        //retTime.setHours(retTime.getHours() + Number(timeInt[2]));
        //retTime.setDate(retTime.getDate() + Number(timeInt[3]));
        //retTime.setMonth(retTime.getMonth() + Number(timeInt[4]));
        //retTime.setFullYear(retTime.getFullYear() + Number(timeInt[5]));
        //return retTime;
    },
    subtractIntervalFromTime: function(time, timeInt) {
        if (timeInt.constructor !== Array || timeInt.length != 6){
            return time;
        }
        var elap = this.componentsFromTime(time, "SMHDMY");
        var year = elap[0] - Number(timeInt[5]);
        var month = (elap[1] - 1) - Number(timeInt[4]);
        var day = elap[2] - Number(timeInt[3]);
        var hours = elap[3] - Number(timeInt[2]);
        var min =elap[4] - Number(timeInt[1]);
        var sec = elap[5] - Number(timeInt[0]);
        return new Date(year, month, day, hours, min, sec);
        //var retTime = new Date(time);
        //retTime.setSeconds(retTime.getSeconds() - Number(timeInt[0]));
        //retTime.setMinutes(retTime.getMinutes() - Number(timeInt[1]));
        //retTime.setHours(retTime.getHours() - Number(timeInt[2]));
        //retTime.setDate(retTime.getDate() - Number(timeInt[3]));
        //retTime.setMonth(retTime.getMonth() - Number(timeInt[4]));
        //retTime.setFullYear(retTime.getFullYear() - Number(timeInt[5]));
        //return retTime;
    },
    TimeLibException: function  (snappMessage, msg) {
        this.name = "TimeLibException";
        this.snappMessage = snappMessage;
        //custom message from snapp.
        this.message = msg || snappMessage;
        this.stack = (new Error()).stack;
    }
}

com.fc.JavaScriptDistLib.TimeLibrary.TimeLibException.prototype = Object.create(Error.prototype);
com.fc.JavaScriptDistLib.TimeLibrary.TimeLibException.prototype.constructor = com.fc.JavaScriptDistLib.TimeLibrary.TimeLibException;

/* Code generator for the Math Library object
 ** Created by Oscar Rangel on 7/12/2016
 */


var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.MathLibrary = {
    toNumber: function (num) {
        if (this.isNumber(num)) {
            return Number(num);
        }
        return null;
    },
    isNumber: function (o) {
        return ! isNaN(o-0) && o !== null && o !== "" && o !== false && o !== true;
    },
    mathCompare: function (num1, comp, num2) {
        switch (comp) {
            case "EQ":
                return this.toNumber(num1) == this.toNumber(num2);
            case "NEQ":
                return this.toNumber(num1) != this.toNumber(num2);
            case "LT":
                return this.toNumber(num1) < this.toNumber(num2);
            case "LTE":
                return this.toNumber(num1) <= this.toNumber(num2);
            case "GT":
                return this.toNumber(num1) > this.toNumber(num2);
            case "GTE":
                return this.toNumber(num1) >= this.toNumber(num2);
            default:
                return false;
        }
    },
    mathMinMax: function (num1, comp, num2) {
        switch (comp) {
            case "MIN":
                return Math.min(this.toNumber(num1), this.toNumber(num2));
            case "MAX":
                return Math.max(this.toNumber(num1), this.toNumber(num2));
            default:
                return 0;
        }
    },
    mathModulo: function (num1, comp, num2) {
        switch (comp) {
            case "MODULO":
                return this.toNumber(num1)%this.toNumber(num2);
            case "QUOTIENT":
                return Math.floor(this.toNumber(num1)/this.toNumber(num2));
            default:
                return 0;
        }
    },
    mathConversionRadDeg: function (comp, num) {
        switch (comp) {
            case "DEGTORAD":
                return this.toNumber(num) * (Math.PI/180);
            case "RADTODEG":
                return this.toNumber(num) * (180/Math.PI);
            default:
                return 0;
        }
    },
    mathRoundPrecision: function (num,percision) {
        return Math.round(this.toNumber(num) * Math.pow(10, this.toNumber(percision))) / Math.pow(10, this.toNumber(percision))
    },
    MathLibException: function  (snappMessage, msg) {
        this.name = "MathLibException";
        this.snappMessage = snappMessage;
        //custom message from snapp.
        this.message = msg || snappMessage;
        this.stack = (new Error()).stack;
    }
};

com.fc.JavaScriptDistLib.MathLibrary.MathLibException.prototype = Object.create(Error.prototype);
com.fc.JavaScriptDistLib.MathLibrary.MathLibException.prototype.constructor = com.fc.JavaScriptDistLib.MathLibrary.MathLibException;
/* Code generator for Text Library object
 ** Created by Oscar Rangel on 13/12/2016
 */

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.TextLib = {

    textComparison: function(text1, comp, text2) {
        switch (comp) {
            case "LESS":
                return text1.toString() < text2.toString();
            case "EQUAL":
                return text1.toString() == text2.toString();
            case "GREATER":
                return text1.toString() > text2.toString();
            default:
                return false;
        }
    },

    textTrim: function(text) {
        return text.toString().trim();
    },

    textChangeCase: function(text, comp) {
        switch (comp) {
            case "UPPERCASE":
                return text.toString().toUpperCase();
            case "LOWERCASE":
                return text.toString().toLowerCase();
            default:
                return "";
        }
    },

    textSubstring: function(text, from, length) {
        return text.toString().substring(toNumber(from),toNumber(from) + toNumber(length));
    },


    textContains: function(string, substring) {
        return ((string.toString().indexOf(substring)) !== -1);
    },

    textIndexOf: function(string, substring) {
        return string.toString().indexOf(substring);
    },

    textSplitAt: function(text, index) {
        return [text.toString().substring(0, toNumber(index)), text.toString().substring(toNumber(index))];
    },

    textSplitWith: function(string, separator) {
        return string.toString().split(separator.toString());
    },

    textReplace: function(textFrom, textTo, textSource) {
        var returnText = textSource.toString();
        while (returnText.indexOf(textFrom.toString()) !== -1){
            returnText = returnText.toString().replace(textFrom.toString(),textTo.toString());
        }
        return returnText;
    },

    isText: function(text) {
        return (typeof text === 'string' || text instanceof String);
    },

    convertToText: function(data) {
        if( jQuery.isXMLDoc( data ) ) {
            return  (new XMLSerializer()).serializeToString(data);
        }
        else if( jQuery.isArray( data ) )  {
            return data.toString();
        }
        else if( typeof data == 'string' ) {
            return data;
        }
        else {
            return JSON.stringify(data);
        }
    }
}
/* Code generator for dictionary object
** Created by Harish Shanthi Kumar on 24/11/2016
*/

var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};

com.fc.JavaScriptDistLib.Dictionary = {
  createEmptyDictionary: function () {
    var dict = {};
    return dict;
  },
  removeAllKeys: function (dictionary) {
    for( var key in dictionary ) {
      delete dictionary[key];
    }
  },
  getKeys: function (dictionary) {
    var keys = [];
    for( var key in dictionary ) {
      keys.push(key);
    }
    return keys;
  },
  getDictValue: function (dictionary,key) {
    return dictionary[key];
  },
  setDictValue: function (dictionary,key,value) {
    return dictionary[key] = value;
  },
  removeDictKey: function (dictionary,key) {
    return delete dictionary[key];
  },
  conatinedInDict: function (dictionary,key) {
    return (dictionary[key] != undefined ) ? true : false;
  },
}
/* Gauge Stubs */

var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.Gauge = {
  setProperty: function (objName, property, value) {
    try {
      var elemSelector = '[obj-name="' + objName + '"]';
      var elem = $(elemSelector);
      var gauge;
      $(elemSelector).find('.c3').each(function() {
        gauge = $(this).data('c3-chart'); 
      });
      switch (property) {
        case "width":
        case "height":
        case "x":
        case "y":
          com.fc.JavaScriptDistLib.setProperty(objName, property, value);
        break;
        case "Alpha":
          d3.selectAll(elemSelector).style('opacity', value/100)
        break;
        case "Background color":
          $(elemSelector + ' svg').css("background-color",value);  
        break;
        case "Current Value":
          gauge.load({columns: [['data', value]]});
          break;
        case "Maximum Value":
          gauge.internal.config.gauge_max = value;
          var gaugeData = gauge.data();
          var gaugeCurrVal = gaugeData[0].values[0].value;
          gauge.load({columns: [['data', gaugeCurrVal]]});
        break;
        case "Minimum Value":
          gauge.internal.config.gauge_min = value;
          var gaugeData = gauge.data();
          var gaugeCurrVal = gaugeData[0].values[0].value;
          gauge.load({columns: [['data', gaugeCurrVal]]});  
        break;
        case "track color":
          d3.selectAll(elemSelector + ' path.c3-chart-arcs-background').style('fill', value)
        break;
        case "pointer color":
          d3.selectAll(elemSelector).select('path.c3-arc-data').style('fill', value);  
        break;
        case "track width":
          gauge.internal.config.gauge_width = value;
          var gaugeData = gauge.data();
          var gaugeCurrVal = gaugeData[0].values[0].value;
          gauge.load({columns: [['data', gaugeCurrVal]]});
        break;
      }
    } catch (e) {
      throw new com.fc.JavaScriptDistLib.Gauge.GaugeException(e);
    }
  },
  getProperty: function ( objName, property) {
    try {
      var elemSelector = '[obj-name= "' + objName + '"]';
      var elem = $(elemSelector);
      var gauge;
      $(elemSelector).find('.c3').each(function() {
        gauge = $(this).data('c3-chart'); 
      });
      var value;
      switch (property) {
        case "width":
        case "height":
        case "x":
        case "y":
          value  = com.fc.JavaScriptDistLib.getProperty( objName, property);
        break;
        case "Alpha":
          value  =  $(elemSelector).css('opacity') * 100;
        break;
        case "Background color":
          value  = $(elemSelector).find('#fcGauge').css("background-color");
        break;
        case "Current Value":
          value  = gauge.data()[0].values[0].value;
        break;
        case "Maximum Value":
          value = gauge.internal.config.gauge_max;
        break;
        case "Minimum Value":
          value = gauge.internal.config.gauge_min;
        break;
        case "track color":
          value = d3.selectAll(elemSelector + ' path.c3-chart-arcs-background').style('fill');
        break;
        case "pointer color":
          value = d3.selectAll(elemSelector).select('path.c3-arc-data').style('fill');
          break;
        case "track width":
          value = gauge.internal.config.gauge_width;
        break;
      }
      return value;
    } catch (e) {
      throw new com.fc.JavaScriptDistLib.Gauge.GaugeException(e);
    }
  },GaugeException : function (snappMessage, msg) {
    this.name = "GaugeException";
    this.snappMessage = snappMessage;
    //custom message from smapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
  }
}

com.fc.JavaScriptDistLib.Gauge.GaugeException.prototype = Object.create(Error.prototype);
com.fc.JavaScriptDistLib.Gauge.GaugeException.prototype.constructor = com.fc.JavaScriptDistLib.Gauge.GaugeException;
/* Code generator for list object
** Created by Harish Shanthi Kumar on 09/12/2016
*/

var com = com || {};
com.fc = com.fc || {};

com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.ListLibrary = {
  listAdd: function (list,item) {
    return list.push(item);
  },
  listContains: function (list,item) {
    return (list.indexOf(item) > -1) ? true : false;
  },
  listAppend: function (list1,list2) {
    return list1.concat(list2);
  },
  listCheck: function (list) {
    return (list instanceof Array) ? true: false;
  },
  listEmpty: function (list) {
    return list.length = 0;
  },
  listOrder: function (list,order) {
    list.sort(function(a, b){
      if( order == "ASCENDING" ) {
        return a-b;
      }
      else {
        return b-a;
      }
    });
  },
  ListLibException: function  (snappMessage, msg) {
    this.name = "ListLibException";
    this.snappMessage = snappMessage;
    //custom message from snapp.
    this.message = msg || snappMessage;
    this.stack = (new Error()).stack;
  }
};

com.fc.JavaScriptDistLib.ListLibrary.ListLibException.prototype = Object.create(Error.prototype);
com.fc.JavaScriptDistLib.ListLibrary.ListLibException.prototype.constructor = com.fc.JavaScriptDistLib.ListLibrary.ListLibException;
/* Stub for connio object
** Created by Harish Shanthi Kumar on 16/12/2016
*/

class ConnioCore {

	constructor() {
    this.config = {
      BaseURL: null,
      App: null,
      KEY: null,
      Secret: null,
      MQTTHost: null,
      MQTTPort: null,
      MQTTCientID: null,
      MQTTUsername: null,
      MQTTPassword: null,
      MQTTTopic: null,
      MQTTClient: null,
      MQTTMessageRecvCallback: null
    }
	}

	configure(config) {
	  let properties;
	  if (config) {
	    properties = JSON.parse(config);
    }
		else if( !this.config.BaseURL ) {
      let connioSO = Creator.currentProject.serviceModel.getServiceObject('Connio');
      properties = connioSO.attributes.attrs;
    }
    if (properties) {
			this.config.BaseURL = properties.api.url;
			this.config.App = properties.api.app;
			this.config.KEY = properties.api.key;
			this.config.Secret = properties.api.secret;
			this.config.MQTTHost = properties.mqtt.host;
			this.config.MQTTPort = Number(properties.mqtt.port);
			this.config.MQTTCientID = properties.mqtt.clientId;
			this.config.MQTTUsername = properties.mqtt.username;
			this.config.MQTTPassword = properties.mqtt.password;
			this.config.MQTTTopic = "connio/apps/" + this.config.App + "/devices/#";
		}
	}

	connioConfigure(key, secret, callback) {
		this.configure();
		this.config.KEY = key;
		this.config.Secret = secret;
		this.connioMQTTMessageRecvCallback = callback;
	}

	connioGetDeviceProfiles(successcallback) {
		let parent = this;
		this.configure();
		let url = this.config.BaseURL + "/v2/deviceprofiles";
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
					console.log("Could not get the profiles. Could be network error");
				}
	  	});
	}

	connioGetDevices(filter, successcallback) {
		let parent = this;
		this.configure();
		let url = this.config.BaseURL + "/v2/devices?profile=" + filter;
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
	  				console.log("Could not get the devices.");
				}
	  	});
	}

	connioGetProperties(profile, successcallback) {
		let parent = this;
		this.configure();
		let url = this.config.BaseURL + "/v2/deviceprofiles/" + profile + "/properties";
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
	  				console.log("Could not get the properties.");
				}
	  	});
	}
}

// export class to a global variable for use of the JavaScriptDistLib (only)
var com = com || {};
com.fc = com.fc || {};
com.fc.JavaScriptDistLib = com.fc.JavaScriptDistLib || {};
com.fc.JavaScriptDistLib.ConnioCore = ConnioCore;
