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

goog.provide('Blockly.Blocks.sensing');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['sensing_touchingobject'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "碰到 %1?",
      "args0": [
        {
          "type": "input_value",
          "name": "TOUCHINGOBJECTMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_touchingobjectmenu'] = {
  /**
   * "Touching [Object]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TOUCHINGOBJECTMENU",
            "options": [
              ['鼠标指针', '_mouse_'],
              ['边缘', '_edge_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_touchingcolor'] = {
  /**
   * Block to Report if its touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "碰到颜色 %1?",
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_coloristouchingcolor'] = {
  /**
   * Block to Report if a color is touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "颜色 %1 碰到 %2?",
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        },
        {
          "type": "input_value",
          "name": "COLOR2"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_distanceto'] = {
  /**
   * Block to Report distance to another Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "到 %1 的距离",
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCETOMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_distancetomenu'] = {
  /**
   * "Distance to [Object]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DISTANCETOMENU",
            "options": [
              ['鼠标指针', '_mouse_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_askandwait'] = {
  /**
   * Block to ask a question and wait
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "ask %1 and wait",
      "args0": [
        {
          "type": "input_value",
          "name": "QUESTION"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_answer'] = {
  /**
   * Block to report answer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "answer",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_keypressed'] = {
  /**
   * Block to Report if a key is pressed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "按下 %1 ?",
      "args0": [
        {
          "type": "input_value",
          "name": "KEY_OPTION"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_keyoptions'] = {
  /**
   * Options for Keys
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "KEY_OPTION",
          "options": [
            ['空格键', 'space'],
            ['左移键', 'left arrow'],
            ['右移键', 'right arrow'],
            ['下移键', 'down arrow'],
            ['上移键', 'up arrow'],
            ['任意键', 'any'],
            ['a', 'a'],
            ['b', 'b'],
            ['c', 'c'],
            ['d', 'd'],
            ['e', 'e'],
            ['f', 'f'],
            ['g', 'g'],
            ['h', 'h'],
            ['i', 'i'],
            ['j', 'j'],
            ['k', 'k'],
            ['l', 'l'],
            ['m', 'm'],
            ['n', 'n'],
            ['o', 'o'],
            ['p', 'p'],
            ['q', 'q'],
            ['r', 'r'],
            ['s', 's'],
            ['t', 't'],
            ['u', 'u'],
            ['v', 'v'],
            ['w', 'w'],
            ['x', 'x'],
            ['y', 'y'],
            ['z', 'z'],
            ['0', '0'],
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['5', '5'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9']
          ]
        }
      ],
      "extensions": ["colours_sensing", "output_string"]
    });
  }
};

Blockly.Blocks['sensing_mousedown'] = {
  /**
   * Block to Report if the mouse is down.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "按下鼠标?",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_mousex'] = {
  /**
   * Block to report mouse's x position
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "鼠标的 x 坐标",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_mousey'] = {
  /**
   * Block to report mouse's y position
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "鼠标的 y 坐标",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_loudness'] = {
  /**
   * Block to report loudness
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "响度",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_videoon'] = {
  /**
   * Block to Report the Video [Motion/Direction] of the Stage or Sprite (Not added Sprite's Option).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "video %1 on %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VIDEOONMENU1"
        },
        {
          "type": "input_value",
          "name": "VIDEOONMENU2"
        }
      ],
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_videoonmenuone'] = {
  /**
   * "Video [Motion/Direction] of [Stage]" First Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOONMENU1",
            "options": [
              ['motion', 'MOTION'],
              ['direction', 'DIRECTION']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};
Blockly.Blocks['sensing_videoonmenutwo'] = {
  /**
   * "Video [Motion/Direction] of [Stage]" Second Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOONMENU2",
            "options": [
              ['舞台', 'STAGE']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_videotoggle'] = {
  /**
   * Block to toggle video
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "turn video %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VIDEOTOGGLEMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_videotogglemenu'] = {
  /**
   * "Turn Video [On/Off/On-flipped]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOTOGGLEMENU",
            "options": [
              ['on', 'ON'],
              ['off', 'OFF'],
              ['on-flipped', 'ONFLIPPED']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_setvideotransparency'] = {
  /**
   * Block to set the video transparency to a certain percent
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "set video transparency to %1%",
      "args0": [
        {
          "type": "input_value",
          "name": "TRANSPARENCY"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_timer'] = {
  /**
   * Block to report timer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "计时器",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_resettimer'] = {
  /**
   * Block to reset timer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "计时器归零",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_of_property_menu'] = {
  /**
   * "_ of *" properties menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "PROPERTY",
            "options": [
              ['x 坐标', 'x position'],
              ['y 坐标', 'y position'],
              ['方向', 'direction'],
              ['造型编号', 'costume #'],
              ['造型名称', 'costume name'],
              ['大小', 'size'],
              ['音量', 'volume'],
              ['背景编号', 'backdrop #'],
              ['背景名称', 'backdrop name']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_of_object_menu'] = {
  /**
   * "* of _" object menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OBJECT",
            "options": [
              ['角色', 'Sprite1'],
              ['舞台', '_stage_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};


Blockly.Blocks['sensing_of'] = {
  /**
   * Block to report properties of sprites.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 的 %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OBJECT"
        },
        {
          "type": "input_value",
          "name": "PROPERTY"
        }
      ],
      "output": true,
      "category": Blockly.Categories.sensing,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing"]
    });
  }
};

Blockly.Blocks['sensing_current'] = {
  /**
   * Block to Report the current option.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "当前 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CURRENTMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_currentmenu'] = {
  /**
   * "Current [Options]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "CURRENTMENU",
            "options": [
              ['年', 'YEAR'],
              ['月', 'MONTH'],
              ['日', 'DATE'],
              ['星期', 'DAYOFWEEK'],
              ['时', 'HOUR'],
              ['分', 'MINUTE'],
              ['秒', 'SECOND']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_dayssince2000'] = {
  /**
   * Block to report days since 2000
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "从2000到今天的天数",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_username'] = {
  /**
   * Block to report user's username
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "username",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};
