function GaugeSet() {
	var ms2kn = 1.94384
	var gSize = 350
	
  this.speed = new steelseries.Radial('speedCanvas', {
    gaugeType: steelseries.GaugeType.TYPE4,
    frameDesign: steelseries.FrameDesign.TILTED_BLACK,
    size: gSize,
    titleString: "SOG",
    unitString: "knots",
    lcdVisible: true,
    maxValue: 10,
    maxMeasuredValue: 0,
    maxMeasuredValueVisible: true,
    thresholdVisible: false,
    ledVisible: false,
    pointerType: steelseries.PointerType.TYPE4
  });

  this.depth = new steelseries.Radial('depthCanvas', {
    gaugeType: steelseries.GaugeType.TYPE4,
    frameDesign: steelseries.FrameDesign.TILTED_BLACK,
    size: gSize,
    section: [
      steelseries.Section(0, 4, 'rgba(255, 0, 0, 0.3)'),
      steelseries.Section(4, 8, 'rgba(220, 220, 0, 0.3)')
    ],
    titleString: "Depth",
    unitString: "m",
    lcdVisible: true,
    maxValue: 20,
    maxMeasuredValue: 0,
    maxMeasuredValueVisible: true,
    thresholdVisible: false,
    ledVisible: false,
    pointerType: steelseries.PointerType.TYPE2
  });

  this.pitch = new steelseries.Radial('pitchCanvas', {
    gaugeType: steelseries.GaugeType.TYPE4,
    frameDesign: steelseries.FrameDesign.TILTED_BLACK,
    size: gSize,
    titleString: "Pitch",
    unitString: "Grad",
    lcdVisible: true,
    minValue: -30,
    maxValue: 30,
    maxMeasuredValue: 0,
    maxMeasuredValueVisible: false,
    thresholdVisible: false,
    ledVisible: false,
    pointerType: steelseries.PointerType.TYPE2
  });
    
  this.roll = new steelseries.Radial('rollCanvas', {
    gaugeType: steelseries.GaugeType.TYPE4,
    frameDesign: steelseries.FrameDesign.TILTED_BLACK,
    size: gSize,
    titleString: "Roll",
    unitString: "Grad",
    lcdVisible: true,
    minValue: -30,
    maxValue: 30,
    maxMeasuredValue: 0,
    maxMeasuredValueVisible: false,
    thresholdVisible: false,
    ledVisible: false,
    pointerType: steelseries.PointerType.TYPE2
  });
   
  this.compass = new steelseries.Compass('compassCanvas', {
    frameDesign: steelseries.FrameDesign.TILTED_BLACK,
    size: gSize,
    rotateFace: true,
    pointerType: steelseries.PointerType.TYPE5
  });

  this.wind = new steelseries.WindDirection('windCanvas', {
    frameDesign: steelseries.FrameDesign.TILTED_BLACK,
    size: gSize,
    lcdVisible: true,
    degreeScaleHalf: true,
    pointSymbolsVisible: false,
    pointerType: steelseries.PointerType.TYPE5,
  });
   
  this.airp = new steelseries.Radial('airpCanvas', {
        gaugeType: steelseries.GaugeType.TYPE4,
        frameDesign: steelseries.FrameDesign.TILTED_BLACK,
        size: gSize,
        titleString: "Airpressure",
        unitString: "mbar",
        lcdVisible: true,
        minValue: 950,
        maxValue: 1050,
        maxMeasuredValue: 0,
        maxMeasuredValueVisible: false,
        thresholdVisible: false,
        ledVisible: false,
        pointerType: steelseries.PointerType.TYPE2
    });
    
    this.airt = new steelseries.Radial('airtCanvas', {
        gaugeType: steelseries.GaugeType.TYPE4,
        frameDesign: steelseries.FrameDesign.TILTED_BLACK,
        size: gSize,
        titleString: "Airtemp",
        unitString: "C",
        lcdVisible: true,
        minValue: -5,
        maxValue: 40,
        maxMeasuredValue: 0,
        maxMeasuredValueVisible: true,
        thresholdVisible: false,
        ledVisible: false,
        pointerType: steelseries.PointerType.TYPE2
    });
    
    this.engt = new steelseries.Radial('engtCanvas', {
        gaugeType: steelseries.GaugeType.TYPE4,
        frameDesign: steelseries.FrameDesign.TILTED_BLACK,
        size: gSize,
        section: [
            steelseries.Section(100,120, 'rgba(255, 0, 0, 0.3)'),
            steelseries.Section(90,100, 'rgba(220, 220, 0, 0.3)')
        ],
        titleString: "Engine temp",
        unitString: "C",
        lcdVisible: true,
        minValue: 10,
        maxValue: 120,
        maxMeasuredValue: 0,
        maxMeasuredValueVisible: true,
        thresholdVisible: false,
        ledVisible: false,
        pointerType: steelseries.PointerType.TYPE2
    });
    
    this.watert = new steelseries.Radial('watertCanvas', {
        gaugeType: steelseries.GaugeType.TYPE4,
        frameDesign: steelseries.FrameDesign.TILTED_BLACK,
        size: gSize,
        section: [
            steelseries.Section(4,15, 'rgba(0, 0, 220, 0.3)'),
            steelseries.Section(25,30, 'rgba(220, 0, 0, 0.3)')
        ],
        titleString: "Water temp",
        unitString: "C",
        lcdVisible: true,
        minValue: 4,
        maxValue: 30,
        maxMeasuredValue: 0,
        maxMeasuredValueVisible: true,
        thresholdVisible: false,
        ledVisible: false,
        pointerType: steelseries.PointerType.TYPE2
    });
    
    this.windspap = new steelseries.Radial('windspapCanvas', {
        gaugeType: steelseries.GaugeType.TYPE4,
        frameDesign: steelseries.FrameDesign.TILTED_BLACK,
        size: gSize,
        section: [
            steelseries.Section(27,40, 'rgba(220, 0, 0, 0.3)')
        ],
        titleString: "Wind speed",
        unitString: "kt",
        lcdVisible: true,
        minValue: 0,
        maxValue: 40,
        maxMeasuredValue: 0,
        maxMeasuredValueVisible: true,
        thresholdVisible: false,
        ledVisible: false,
        pointerType: steelseries.PointerType.TYPE2
    });
    
    this.windsptr = new steelseries.Radial('windsptrCanvas', {
        gaugeType: steelseries.GaugeType.TYPE4,
        frameDesign: steelseries.FrameDesign.TILTED_BLACK,
        size: gSize,
        section: [
            steelseries.Section(27,40, 'rgba(220, 0, 0, 0.3)')
        ],
        titleString: "Wind speed true",
        unitString: "kt",
        lcdVisible: true,
        minValue: 0,
        maxValue: 40,
        maxMeasuredValue: 0,
        maxMeasuredValueVisible: true,
        thresholdVisible: false,
        ledVisible: false,
        pointerType: steelseries.PointerType.TYPE2
    });
    
    this.revolutions = new steelseries.Radial('revolutionsCanvas', {
        gaugeType: steelseries.GaugeType.TYPE4,
        frameDesign: steelseries.FrameDesign.TILTED_BLACK,
        size: gSize,
        section: [
            steelseries.Section(3400, 4000, 'rgba(255, 0, 0, 0.3)'),
            steelseries.Section(3000, 3400, 'rgba(220, 220, 0, 0.3)')
        ],
        titleString: "rpm",
        unitString: "1/min",
        lcdVisible: true,
        minValue: 500,
        maxValue: 4000,
        maxMeasuredValue: 0,
        maxMeasuredValueVisible: true,
        thresholdVisible: false,
        ledVisible: false,
        pointerType: steelseries.PointerType.TYPE2
    });

    this.revolutions = new steelseries.Radial('revolutionsCanvas', {
        gaugeType: steelseries.GaugeType.TYPE4,
        frameDesign: steelseries.FrameDesign.TILTED_BLACK,
        size: gSize,
        section: [
            steelseries.Section(3400, 4000, 'rgba(255, 0, 0, 0.3)'),
            steelseries.Section(3000, 3400, 'rgba(220, 220, 0, 0.3)')
        ],
        titleString: "rpm",
        unitString: "1/min",
        lcdVisible: true,
        minValue: 500,
        maxValue: 4000,
        maxMeasuredValue: 0,
        maxMeasuredValueVisible: true,
        thresholdVisible: false,
        ledVisible: false,
        pointerType: steelseries.PointerType.TYPE2
    });


    
    average = [0, 0, 0];
    averagep = 0;

  this.eventHandlers = {
    "navigation.speedOverGround": function(value) {
      if (value != null) {
        this.speed.setValue(value*ms2kn);
      }
    }.bind(this),
    "environment.depth.belowTransducer": function (value) {
      this.depth.setValue(value);
    }.bind(this),
    "environment.wind.angleApparent": function(value) {
    this.wind.setValueLatest(value * 57.29577951);
    average[averagep] = value * 57.29577951 / 3
    average[0] + average[1] + average[2]
    averagep++;
    if (averagep > 2)
    averagep = 0;
    this.wind.setValueAverage(average[0] + average[1] + average[2]);   
    }.bind(this),
    "navigation.headingMagnetic": function(value) {
      this.compass.setValue(value * 57.29577951);
    }.bind(this),
    "environment.wind.speedApparent": function(value) {
      this.windspap.setValue(value * ms2kn);
    }.bind(this),
    "environment.wind.speedTrue": function(value) {
      this.windsptr.setValue(value * ms2kn);
    }.bind(this),
    "navigation.attitude.pitch": function (value) {
      this.pitch.setValue(value * 57.29577951);
    }.bind(this),
    "navigation.attitude.roll": function (value) {
      this.roll.setValue(value * 57.29577951);
        }.bind(this),
    "environment.outside.temperature": function (value) {
      this.airt.setValue(value -273.15 );
    }.bind(this),
    "environment.outside.pressure": function (value) {
      this.airp.setValue(value/100);
    }.bind(this),
    "propulsion.port.oilTemperature": function (value) {
      this.engt.setValue(value -273.15);
    }.bind(this),
    "environment.water.temperature": function (value) {
      this.watert.setValue(value -273.15);
    }.bind(this),
    "propulsion.starboard.revolutions": function (value) {
    this.revolutions.setValue(value*60);
    }.bind(this)
  }
  this.dispatch = this.doDispatch.bind(this);
};

GaugeSet.prototype = {
  doDispatch: function dispatch(delta) {
    if (delta.context === 'vessels.' + this.selfId && delta.updates) {
      var that  = this;
      delta.updates.forEach(function(update) {
        update.values.forEach(function(value) {
          if (that.eventHandlers[value.path] && typeof that.eventHandlers[value.path] === 'function') {
            that.eventHandlers[value.path](value.value);
          }
        })
      })
    }
  },
  zero: function() {
    this.speed.setValue(0);
    this.wind.setValueLatest(0);
    this.wind.setValueAverage(0);
    this.windspap.setValue(0);
    this.windsptr.setValue(0);
    this.compass.setValue(0);
    this.depth.setValue(0);
    this.pitch.setValue(0);
    this.airp.setValue(0);
    this.airt.setValue(0);
    this.engt.setValue(0);
    this.watert.setValue(0);
    this.pitch.setValue(0);
    this.revolution.setValue(0);

  },
  setSelfId: function(selfId) {
    this.selfId = selfId;
  }
}



module.exports.GaugeSet = GaugeSet;