/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['control_forever'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_forever",
      "message0": "重复执行",
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "/c_arrow.svg",
          "width": 16,
          "height": 16,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_end"]
    });
  }
};

Blockly.Blocks['control_repeat'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_repeat",
      "message0": "重复执行 %1",
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "/c_arrow.svg",
          "width": 16,
          "height": 16,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_if'] = {
  /**
   * Block for if-then.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_if",
      "message0": "如果 %1",
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_if_else'] = {
  /**
   * Block for if-else.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_if_else",
      "message0": "如果 %1",
      "message1": "%1",
      "message2": "否则",
      "message3": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_stop'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    var ALL_SCRIPTS = 'all';
    var THIS_SCRIPT = 'this script';
    var OTHER_SCRIPTS = 'other scripts in sprite';
    var stopDropdown = new Blockly.FieldDropdown(function() {
      if (this.sourceBlock_ &&
          this.sourceBlock_.nextConnection &&
          this.sourceBlock_.nextConnection.isConnected()) {
        return [
          ['other scripts in sprite', OTHER_SCRIPTS]
        ];
      }
      return [['全部脚本', ALL_SCRIPTS],
        ['当前脚本', THIS_SCRIPT],
        ['角色的其他脚本', OTHER_SCRIPTS]
      ];
    }, function(option) {
      this.sourceBlock_.setNextStatement(option == OTHER_SCRIPTS);
    });
    this.appendDummyInput()
        .appendField('停止')
        .appendField(stopDropdown, 'STOP_OPTION');
    this.setCategory(Blockly.Categories.control);
    this.setColour(Blockly.Colours.control.primary,
      Blockly.Colours.control.secondary,
      Blockly.Colours.control.tertiary
    );
    this.setPreviousStatement(true);
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var hasNext = (this.getFieldValue('STOP_OPTION') == 'other scripts in sprite');
    container.setAttribute('hasnext', hasNext);
    return container;
  },
  domToMutation: function(xmlElement) {
    var hasNext = (xmlElement.getAttribute('hasnext') == 'true');
    this.setNextStatement(hasNext);
  }
};

Blockly.Blocks['control_wait'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_wait",
      "message0": "等待 %1 秒",
      "args0": [
        {
          "type": "input_value",
          "name": "DURATION"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_wait_until'] = {
  /**
   * Block to wait until a condition becomes true.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "保持等待，直到 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_repeat_until'] = {
  /**
   * Block for repeat until a condition becomes true.
   */
  init: function() {
    this.jsonInit({
      "message0": "重复执行，直到 %1",
      "message1": "%1",
      "message2": "%1",
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "/c_arrow.svg",
          "width": 16,
          "height": 16,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_start_as_clone'] = {
  /**
   * Block for "when I start as a clone" hat.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "当 我 被克隆",
      "message0": "当 我 被克隆",
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_hat"]
    });
  }
};

Blockly.Blocks['control_create_clone_of_menu'] = {
  /**
   * Create-clone drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "CLONE_OPTION",
            "options": [
              ['自己', '_myself_']
            ]
          }
        ],
        "extensions": ["colours_control", "output_string"]
      });
  }
};

Blockly.Blocks['control_create_clone_of'] = {
  /**
   * Block for "create clone of..."
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_start_as_clone",
      "message0": "克隆 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLONE_OPTION"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_delete_this_clone'] = {
  /**
   * Block for "delete this clone."
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "删除克隆",
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_end"]
    });
  }
};
