'use strict';

goog.provide('Blockly.Blocks.dsp');

goog.require('Blockly.Blocks');

Blockly.Blocks.dsp.HUE = 130;

Blockly.Blocks['dsp_adc'] = {
   init: function() {
     this.setColour(Blockly.Blocks.dsp.HUE);
     this.setNextStatement(true, "Dsp");
     this.setDeletable(false);
     this.appendDummyInput()
         .appendField("Adc")
   }
};

Blockly.Blocks['dsp_dac'] = {
   init: function() {
     this.setColour(Blockly.Blocks.dsp.HUE);
     this.setDeletable(false);
     this.setPreviousStatement(true, "Dsp");
     this.appendDummyInput()
         .appendField("Dac")
   }
};

Blockly.Blocks['dsp_reverb'] = {
  init: function() {
    this.setColour(Blockly.Blocks.dsp.HUE);
    this.setPreviousStatement(true, "Dsp");
    this.setNextStatement(true, "Dsp");
    this.appendDummyInput()
        .appendField('Reverb')
    this.appendValueInput("ROOM_SIZE")
        .appendField("Room size")
    this.appendValueInput("DAMP")
        .appendField("High Freq. Damp")
  }
};

Blockly.Blocks['dsp_knobs'] = {
  init: function() {
    var knobs =
        [['B1', 'B1_var'],
         ['B2', 'B2_var'],
         ['B3', 'B3_var']];
    this.setColour(Blockly.Blocks.dsp.HUE);
    this.setOutput(true, 'Number');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(knobs), 'KNOB');
  }
};
