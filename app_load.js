
jQuery(document).ready(function () {
  // var json_object = {
  //   "name": "Rule_1536980001875",
  //   "set": [
  //     {
  //       "section_id": "1536966564604",
  //       "section_type": "main",
  //       "type": "condition",
  //       "condition": {
  //         "condition": "AND",
  //         "rules": [
  //           {
  //             "id": "FIELD_4",
  //             "field": "FIELD_4",
  //             "type": "string",
  //             "input": "text",
  //             "operator": "equal",
  //             "value": 10
  //           }
  //         ],
  //         "valid": true
  //       },
  //       "if_yes": [
  //         {
  //           "section_id": "1536966567360",
  //           "section_type": "sub",
  //           "type": "condition",
  //           "condition": {
  //             "condition": "AND",
  //             "rules": [
  //               {
  //                 "id": "FIELD_4",
  //                 "field": "FIELD_4",
  //                 "type": "string",
  //                 "input": "text",
  //                 "operator": "equal",
  //                 "value": "11"
  //               }
  //             ],
  //             "valid": true
  //           },
  //           "if_yes": [
  //             {
  //               "section_id": "1536966577075",
  //               "section_type": "sub",
  //               "type": "condition",
  //               "condition": {
  //                 "condition": "AND",
  //                 "rules": [
  //                   {
  //                     "id": "FIELD_4",
  //                     "field": "FIELD_4",
  //                     "type": "string",
  //                     "input": "text",
  //                     "operator": "equal",
  //                     "value": "13"
  //                   }
  //                 ],
  //                 "valid": true
  //               },
  //               "if_yes": [],
  //               "if_no": []
  //             }
  //           ],
  //           "if_no": []
  //         }
  //       ],
  //       "if_no": [
  //         {
  //           "section_id": "1536966571849",
  //           "section_type": "sub",
  //           "type": "condition",
  //           "condition": {
  //             "condition": "AND",
  //             "rules": [
  //               {
  //                 "id": "FIELD_4",
  //                 "field": "FIELD_4",
  //                 "type": "string",
  //                 "input": "text",
  //                 "operator": "equal",
  //                 "value": "12"
  //               }
  //             ],
  //             "valid": true
  //           },
  //           "if_yes": [
  //             {
  //               "section_id": "1536979986375",
  //               "section_type": "sub",
  //               "type": "condition",
  //               "condition": {
  //                 "condition": "AND",
  //                 "rules": [
  //                   {
  //                     "id": "FIELD_4",
  //                     "field": "FIELD_4",
  //                     "type": "string",
  //                     "input": "text",
  //                     "operator": "equal",
  //                     "value": 10
  //                   }
  //                 ],
  //                 "valid": true
  //               },
  //               "if_yes": [],
  //               "if_no": [
  //                 {
  //                   "section_id": "1536979988978",
  //                   "section_type": "sub",
  //                   "type": "condition",
  //                   "condition": {
  //                     "condition": "AND",
  //                     "rules": [
  //                       {
  //                         "id": "FIELD_4",
  //                         "field": "FIELD_4",
  //                         "type": "string",
  //                         "input": "text",
  //                         "operator": "equal",
  //                         "value": 10
  //                       }
  //                     ],
  //                     "valid": true
  //                   },
  //                   "if_yes": [],
  //                   "if_no": []
  //                 }
  //               ]
  //             }
  //           ],
  //           "if_no": []
  //         }
  //       ]
  //     },
  //     {
  //       "section_id": "1536979991104",
  //       "section_type": "main",
  //       "type": "condition",
  //       "condition": {
  //         "condition": "AND",
  //         "rules": [
  //           {
  //             "id": "FIELD_4",
  //             "field": "FIELD_4",
  //             "type": "string",
  //             "input": "text",
  //             "operator": "equal",
  //             "value": "122"
  //           }
  //         ],
  //         "valid": true
  //       },
  //       "if_yes": [],
  //       "if_no": []
  //     }
  //   ]
  // }

  var json_object = {
    "name": "Rule_1537004937997",
    "set": [
      {
        "section_id": "1537004897472",
        "section_type": "main",
        "type": "condition",
        "condition": {
          "condition": "AND",
          "rules": [
            {
              "id": "FIELD_4",
              "field": "FIELD_4",
              "type": "string",
              "input": "text",
              "operator": "equal",
              "value": 10
            }
          ],
          "valid": true
        },
        "if_yes": [
          {
            "section_id": "1537004900817",
            "section_type": "sub",
            "type": "condition",
            "condition": {
              "condition": "AND",
              "rules": [
                {
                  "id": "FIELD_4",
                  "field": "FIELD_4",
                  "type": "string",
                  "input": "text",
                  "operator": "equal",
                  "value": 10
                }
              ],
              "valid": true
            },
            "if_yes": [
              {
                "section_id": "1537004903369",
                "section_type": "sub",
                "type": "condition",
                "condition": {
                  "condition": "AND",
                  "rules": [
                    {
                      "id": "FIELD_4",
                      "field": "FIELD_4",
                      "type": "string",
                      "input": "text",
                      "operator": "equal",
                      "value": 10
                    }
                  ],
                  "valid": true
                },
                "if_yes": [],
                "if_no": [
                  {
                    "section_id": "1537004909326",
                    "section_type": "sub",
                    "type": "condition",
                    "condition": {
                      "condition": "AND",
                      "rules": [
                        {
                          "id": "FIELD_4",
                          "field": "FIELD_4",
                          "type": "string",
                          "input": "text",
                          "operator": "equal",
                          "value": 10
                        }
                      ],
                      "valid": true
                    },
                    "if_yes": [],
                    "if_no": []
                  }
                ]
              }
            ],
            "if_no": [
              {
                "section_id": "1537004905812",
                "section_type": "sub",
                "type": "condition",
                "condition": {
                  "condition": "AND",
                  "rules": [
                    {
                      "id": "FIELD_4",
                      "field": "FIELD_4",
                      "type": "string",
                      "input": "text",
                      "operator": "equal",
                      "value": 10
                    }
                  ],
                  "valid": true
                },
                "if_yes": [
                  {
                    "section_id": "1537004911784",
                    "section_type": "sub",
                    "type": "condition",
                    "condition": {
                      "condition": "AND",
                      "rules": [
                        {
                          "id": "FIELD_4",
                          "field": "FIELD_4",
                          "type": "string",
                          "input": "text",
                          "operator": "equal",
                          "value": 10
                        }
                      ],
                      "valid": true
                    },
                    "if_yes": [
                      {
                        "section_id": "1537004914623",
                        "section_type": "sub",
                        "type": "condition",
                        "condition": {
                          "condition": "AND",
                          "rules": [
                            {
                              "id": "FIELD_4",
                              "field": "FIELD_4",
                              "type": "string",
                              "input": "text",
                              "operator": "equal",
                              "value": 10
                            }
                          ],
                          "valid": true
                        },
                        "if_yes": [],
                        "if_no": []
                      }
                    ],
                    "if_no": []
                  }
                ],
                "if_no": [
                  {
                    "section_id": "1537004918729",
                    "section_type": "sub",
                    "type": "condition",
                    "condition": {
                      "condition": "AND",
                      "rules": [
                        {
                          "id": "FIELD_4",
                          "field": "FIELD_4",
                          "type": "string",
                          "input": "text",
                          "operator": "equal",
                          "value": 10
                        }
                      ],
                      "valid": true
                    },
                    "if_yes": [
                      {
                        "section_id": "1537004923795",
                        "section_type": "sub",
                        "type": "action",
                        "parent_elem_id": 1537004918729,
                        "action_condtion": "yes",
                        "condition": {
                          "actionType": "Set Value",
                          "field": "-1",
                          "actionValue": ""
                        }
                      }
                    ],
                    "if_no": [
                      {
                        "section_id": "1537004928039",
                        "section_type": "sub",
                        "type": "action",
                        "parent_elem_id": 1537004918729,
                        "action_condtion": "no",
                        "condition": {
                          "actionType": "Set Value",
                          "field": "-1",
                          "actionValue": ""
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "if_no": []
      }
    ]
  }

  createLogicTree(json_object.set, '#container');

  function queryBuilderOnLoad(item) {
    jQuery('#builder_' + item.section_id).queryBuilder({
      plugins: ['bt-tooltip-errors'],

      filters: [{
        id: 'FIELD_4',
        label: 'FIELD_4',
        type: 'string'
      }, {
        id: 'FIELD_5',
        label: 'FIELD_5',
        type: 'integer',
        input: 'select',
        values: {
          1: 'Books',
          2: 'Movies',
          3: 'Music',
          4: 'Tools',
          5: 'Goodies',
          6: 'Clothes'
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
      }, {
        id: 'FIELD_6',
        label: 'FIELD_6',
        type: 'integer',
        input: 'radio',
        values: {
          1: 'Yes',
          0: 'No'
        },
        operators: ['equal']
      }, {
        id: 'id',
        label: 'Identifier',
        type: 'string',
        placeholder: '____-____-____',
        operators: ['equal', 'not_equal'],
        validation: {
          format: /^.{4}-.{4}-.{4}$/
        }
      }],
      rules: item.condition,
    });
  }

  function buildConditionSections(item, wrapper) {
    var html = '<div id="section_' + item.section_id + '" class="logics ';
    html += (item.section_type == 'main') ? 'sections"' : ' sub-sections"';
    html += ' ><div id = "builder_' + item.section_id + '" class= "condition builder"';
    html += '></div >' +
      '<div class="container conditions-section" id="conditions-section_' + item.section_id + '">' +
      '<div class="row-fluid">' +
      '<div class="yes-block" id="yes-block_' + item.section_id + '">' +
      '<p class="p-yes"><i class="glyphicon glyphicon-ok"></i> If True</p>' +
      '<div class="row-fluid"> <div class="col-md-5 action_select"  id="action_select_yes_' + item.section_id + '"><select class="select_action" id="btn-sub-yes-select-action_' + item.section_id + '"> <option value="">select action</option> <option value="condition">Condition</option><option value="action">Action</option></select>' +
      '<button class="btn btn-outline-primary btn-sub-condtion" data-elem-id="' + item.section_id + '" data-condition = "yes" id="btn-sub-yes-condition_' + item.section_id + '">select</button>' +
      '</div>' +
      '<div class="col-md-5  add_more_actions_container hidden" id="add_more_actions_container_yes_' + item.section_id + '">' +
      '<button type="button" class="btn btn-xs btn-success btn-add-action" data-elem-id="' + item.section_id + '" data-condition = "yes" id="btn-add-action_yes_' + item.section_id + '" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Add action</button>' +
      '<button type="button" class="btn btn-xs btn-success btn-clear-action" data-elem-id="' + item.section_id + '" data-condition = "yes" id="btn-clear-action_yes_' + item.section_id + '" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Clear All</button>' +
      '<div style="clear:both"></div>' +
      '</div></div>' +
      '<div class="row-fluid sub-yes sub-logic" id="sub-yes_' + item.section_id + '"></div>' +
      '</div>' +
      '<div class="no-block" id="no-block_' + item.section_id + '">' +
      '<p class="p-no"><i class="glyphicon glyphicon-remove"></i> If False</p>' +
      '<div class="row-fluid"> <div class="col-md-5 action_select"  id="action_select_no_' + item.section_id + '"><select class="select_action" id="btn-sub-no-select-action_' + item.section_id + '"> <option value="">select action</option> <option value="condition">Condition</option><option value="action">Action</option></select><button class="btn btn-outline-primary btn-sub-condtion" data-elem-id="' + item.section_id + '" data-condition = "no" id="btn-sub-no-condition_' + item.section_id + '">select</button>' +
      '</div>' +
      '<div class="col-md-5 add_more_actions_container hidden" id="add_more_actions_container_no_' + item.section_id + '">' +
      '<button type="button" class="btn btn-xs btn-success btn-add-action" data-elem-id="' + item.section_id + '"  data-condition = "no" id="btn-add-action_no_' + item.section_id + '" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Add action</button>' +
      '<button type="button" class="btn btn-xs btn-success btn-clear-action"  data-elem-id="' + item.section_id + '" data-condition = "no" id="btn-clear-action_no_' + item.section_id + '"  data-add="rule">         <i class="glyphicon glyphicon-plus"></i> Clear All</button>' +
      '<div style="clear:both"></div>' +
      '</div></div>' +
      '<div class="row-fluid sub-no sub-logic" id="sub-no_' + item.section_id + '"></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
    $(wrapper).append(html);
    queryBuilderOnLoad(item);


    item.if_yes && createLogicTree(item.if_yes, '#sub-yes_' + item.section_id);
    item.if_no && createLogicTree(item.if_no, '#sub-no_' + item.section_id);
  }
  function createActionSection(elem_id, section_type, selector, parent_elem_id) {
    var html = '<div id="section_' + elem_id + '"  data-parent-id="' + parent_elem_id + '"  class="logics ';
    html += (section_type == 'main') ? 'sections"' : ' sub-sections"';
    html += ' ><div id = "builder_' + elem_id + '" class= "builder actions form-inline query-builder"';
    html += ' ><div class="rules-group-container"> </div></div></div>';

    $(selector).append(html);
  }

  function queryActionBuilder(elem_id) {
    var html = '<div class="rules-group-body action-container" id="action_container_' + elem_id + '">' +
      '<div class="rules-list">' +
      '<div id="action_builder_' + elem_id + '_rule" class="rule-container">' +
      '<div class="rule-header">' +
      '<div class="btn-group pull-right rule-actions" > <button type="button" class="btn btn-xs btn-danger remove-action" data-delete="rule" data-elem-id="' + elem_id + '">' +
      '<i class="glyphicon glyphicon-remove"></i>' +
      'Delete </button> </div >' +
      '</div >' +
      '<div class="rule-operator-container"><select class="form-control " id="action_builder_rule_operator_' + elem_id + '">' +
      '< option value = "-1" > select action</option >' +
      '<option>Set Value</option>' +
      '<option>Show</option>' +
      '<option>Show (dont toggle)</option>' +
      '<option>Show (and content)</option>' +
      '<option> Hide</option></select ></div >' +
      '<div class="rule-filter-container"><select class="form-control" id="action_builder_rule_filter_' + elem_id + '">' +
      '<option value="-1">------</option>' +
      '<option value="FIELD_4">FIELD_4</option>' +
      '<option value="FIELD_5">FIELD_5</option>' +
      '<option value="FIELD_6">FIELD_6</option>' +
      '<option value="id">Identifier</option> </select></div>' +
      '<div class="rule-value-container"><input class="form-control" type="text" id="action_builder_rule_value_' + elem_id + '"></div>' +
      '</div>' +
      '</div>';

    $('#builder_' + elem_id + ' .rules-group-container').append(html)
  }
  function buildActionSections(item) {
    console.log(item)
    var wrapper = item.action_condtion == 'yes' ? '#sub-yes_' + item.parent_elem_id : '#sub-no_' + item.parent_elem_id;

    createActionSection(item.section_id, 'sub', wrapper, item.parent_elem_id)
    queryActionBuilder(item.section_id, 1);
  }

  function createLogicTree(json_object, wrapper) {
    // console.log(wrapper)
    // console.log(json_object)
    $.each(json_object, function (i, item) {
      item.type == 'condition' && buildConditionSections(item, wrapper);
      item.type == 'action' && buildActionSections(item);

      if ((item.section_type == 'main')) {
        // $('#yes-block_' + item.section_id).css('width', '50%');
        // $('#no-block_' + item.section_id).css('width', '50%');

      }
    });
  }

});
