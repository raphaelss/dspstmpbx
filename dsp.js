'use strict';

goog.provide('Blockly.Blocks.dsp');

goog.require('Blockly.Blocks');

goog.provide('Blockly.JavaScript.dsp');

goog.require('Blockly.JavaScript');

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

Blockly.JavaScript['dsp_adc'] = function(block) {
  return 'adc();\n';
};

Blockly.JavaScript['dsp_dac'] = function(block) {
  return 'dac();\n';
};

Blockly.JavaScript['dsp_knobs'] = function(block) {
  return [block.getFieldValue('KNOB'), Blockly.JavaScript.ORDER_ATOMIC];
};

function define_block(name, input_array) {
  var dsp_name = 'dsp_' + name.toLowerCase().replace(" ", "_");
  Blockly.Blocks[dsp_name] = {
    init: function() {
      this.setColour(Blockly.Blocks.dsp.HUE);
      this.setPreviousStatement(true, "Dsp");
      this.setNextStatement(true, "Dsp");
      this.appendDummyInput().appendField(name);
      for (var i = 0; i < input_array.length; ++i) {
        this.appendValueInput(input_array[i]).appendField(input_array[i]);
      }
    }
  }

  Blockly.JavaScript[dsp_name] = function(block) {
    var str = dsp_name + '(';
    for (var i = 0; i < input_array.length - 1; ++i) {
      str = str + (Blockly.JavaScript.valueToCode(block, input_array[i],
          Blockly.JavaScript.ORDER_ATOMIC) || '0') + ", ";
    }
    str = str + (Blockly.JavaScript.valueToCode(block, input_array[i],
        Blockly.JavaScript.ORDER_ATOMIC) || '0') + ");\n";
  }
}
