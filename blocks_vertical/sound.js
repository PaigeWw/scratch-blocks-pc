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

goog.provide('Blockly.Blocks.sound');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['sound_sounds_menu'] = {
  /**
   * Sound effects drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SOUND_MENU",
            "options": [
              ['1', '0'],
              ['2', '1'],
              ['3', '2'],
              ['4', '3'],
              ['5', '4'],
              ['6', '5'],
              ['7', '6'],
              ['8', '7'],
              ['9', '8'],
              ['10', '9']
            ]
          }
        ],
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "extensions": ["output_string"]
      });
  }
};

Blockly.Blocks['sound_play'] = {
  /**
   * Block to play sound.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "播放声音 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_playuntildone'] = {
  /**
   * Block to play sound until done.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "播放声音 %1 直到结束",
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_stopallsounds'] = {
  /**
   * Block to stop all sounds
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "停止全部声音",
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_drums_menu'] = {
  /**
   * Drums drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DRUM",
            "options": [
              [' Snare Drum', '1'],
              [' Bass Drum', '2'],
              [' Side Stick', '3'],
              [' Crash Cymbal', '4'],
              [' Open Hi-Hat', '5'],
              [' Closed Hi-Hat', '6'],
              [' Tambourine', '7'],
              [' Hand Clap', '8'],
              [' Claves', '9'],
              [' Wood Block', '10'],
              [' Cowbell', '11'],
              [' Triangle', '12'],
              [' Bongo', '13'],
              [' Conga', '14'],
              [' Cabasa', '15'],
              [' Guiro', '16'],
              [' Vibraslap', '17'],
              [' Open Cuica', '18']
            ]
          }
        ],
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "extensions": ["output_string"]
      });
  }
};

Blockly.Blocks['sound_playdrumforbeats'] = {
  /**
   * Block to play a drum for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "弹奏鼓声 %1 %2 拍",
      "args0": [
        {
          "type": "input_value",
          "name": "DRUM"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_restforbeats'] = {
  /**
   * Block to rest for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "休止 %1 拍",
      "args0": [
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_playnoteforbeats'] = {
  /**
   * Block to play a certain note for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "弹奏音符 %1  %2 拍",
      "args0": [
        {
          "type": "input_value",
          "name": "NOTE"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_effects_menu_options'] = [
  ['pitch', 'PITCH'],
  ['pan left/right', 'PAN']
];

Blockly.Blocks['sound_seteffectto'] = {
  /**
   * Block to set the audio effect
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "set %1 effect to %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": Blockly.Blocks['sound_effects_menu_options']
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};


Blockly.Blocks['sound_changeeffectby'] = {
  /**
   * Block to change the audio effect
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "change %1 effect by %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": Blockly.Blocks['sound_effects_menu_options']
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_cleareffects'] = {
  /**
   * Block to clear audio effects
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "清除所有声音特效",
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_instruments_menu'] = {
  /**
   * Instruments drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "INSTRUMENT",
            "options": [
              ['钢琴', '1'],
              ['电子琴', '2'],
              ['风琴', '3'],
              ['吉他', '4'],
              ['电吉他', '5'],
              ['贝斯', '6'],
              ['拨奏乐器', '7'],
              ['大提琴', '8'],
              ['长号', '9'],
              ['单簧管', '10'],
              ['萨克斯管', '11'],
              ['长笛', '12'],
              ['木笛', '13'],
              ['低音管', '14'],
              ['唱诗班', '15'],
              ['抖音琴', '16'],
              ['音乐盒', '17'],
              ['钢鼓', '18'],
              ['马林巴琴', '19'],
              ['合成领奏', '20'],
              ['合成长音', '21']
            ]
          }
        ],
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "extensions": ["output_string"]
      });
  }
};

Blockly.Blocks['sound_setinstrumentto'] = {
  /**
   * Block to set the sprite's instrument
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将 乐器 置为 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INSTRUMENT"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_changevolumeby'] = {
  /**
   * Block to change the sprite's volume by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将 音量 增加 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_setvolumeto'] = {
  /**
   * Block to set the sprite's volume to a certain percent
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将 音量 置为 %1%",
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_volume'] = {
  /**
   * Block to report volume
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "音量",
      "category": Blockly.Categories.sound,
      "checkboxInFlyout": true,
      "extensions": ["colours_sounds", "output_number"]
    });
  }
};

Blockly.Blocks['sound_changetempoby'] = {
  /**
   * Block to change the sprite's tempo by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将 节奏 增加 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEMPO"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_settempotobpm'] = {
  /**
   * Block to set the sprite's volume to a certain bpm
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将 节奏 置为 %1 bpm",
      "args0": [
        {
          "type": "input_value",
          "name": "TEMPO"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_tempo'] = {
  /**
   * Block to report tempo
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "节奏",
      "category": Blockly.Categories.sound,
      "checkboxInFlyout": true,
      "extensions": ["colours_sounds", "output_number"]
    });
  }
};
