'use strict';

goog.provide('Blockly.JavaScript.dsp');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['dsp_adc'] = function(block) {
  return 'adc();\n';
};

Blockly.JavaScript['dsp_dac'] = function(block) {
  return 'dac();\n';
};

Blockly.JavaScript['dsp_knobs'] = function(block) {
  return [block.getFieldValue('KNOB'), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['dsp_reverb'] = function(block) {
  var room_size = Blockly.JavaScript.valueToCode(block, 'ROOM_SIZE',
      Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var damp = Blockly.JavaScript.valueToCode(block, 'DAMP',
      Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return 'reverb(' + room_size + ', ' + damp + ');\n';
};
