
jQuery(document).ready(function () {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    if (id != null) {

        if (id == '1') {
            var json_object = {
                "name": "Rule_1538976735174",
                "set": [
                    {
                        "description": "Rule One",
                        "section_id": "1538976683428",
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
                                "description": "Test",
                                "section_id": "1538976690603",
                                "section_type": "sub",
                                "type": "action",
                                "parent_elem_id": 1538976683428,
                                "action_condtion": "yes",
                                "action": {
                                    "action_type": "Show",
                                    "apply_to": "Entire Form",
                                    "field": "FIELD_4",
                                    "action_value": ""
                                }
                            }
                        ],
                        "if_no": [
                            {
                                "description": "Test 2",
                                "section_id": "1538976702943",
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
                                        },
                                        {
                                            "id": "FIELD_5",
                                            "field": "FIELD_5",
                                            "type": "integer",
                                            "input": "select",
                                            "operator": "equal",
                                            "value": 1
                                        }
                                    ],
                                    "valid": true
                                },
                                "if_yes": [
                                    {
                                        "description": "Test 3",
                                        "section_id": "1538976715384",
                                        "section_type": "sub",
                                        "type": "action",
                                        "parent_elem_id": 1538976702943,
                                        "action_condtion": "yes",
                                        "action": {
                                            "action_type": "Hide Form",
                                            "apply_to": "-1",
                                            "field": "FIELD_4",
                                            "action_value": ""
                                        }
                                    }
                                ],
                                "if_no": []
                            }
                        ]
                    }
                ]
            }
        } else {
            json_object = {
                "name": "Rule_1538976885979",
                "set": [
                    {
                        "description": "Rule Two",
                        "section_id": "1538976832055",
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
                                    "value": "11"
                                },
                                {
                                    "id": "FIELD_5",
                                    "field": "FIELD_5",
                                    "type": "integer",
                                    "input": "select",
                                    "operator": "equal",
                                    "value": 1
                                },
                                {
                                    "id": "FIELD_6",
                                    "field": "FIELD_6",
                                    "type": "integer",
                                    "input": "radio",
                                    "operator": "equal",
                                    "value": 1
                                }
                            ],
                            "valid": true
                        },
                        "if_yes": [
                            {
                                "description": "Test",
                                "section_id": "1538976853334",
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
                                        "description": "Test",
                                        "section_id": "1538976860151",
                                        "section_type": "sub",
                                        "type": "action",
                                        "parent_elem_id": 1538976853334,
                                        "action_condtion": "yes",
                                        "action": {
                                            "action_type": "Disable",
                                            "apply_to": "Entire Form",
                                            "field": "FIELD_4",
                                            "action_value": ""
                                        }
                                    }
                                ],
                                "if_no": [
                                    {
                                        "description": "Test",
                                        "section_id": "1538976871267",
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
                                                "description": "Tesr",
                                                "section_id": "1538976875287",
                                                "section_type": "sub",
                                                "type": "action",
                                                "parent_elem_id": 1538976871267,
                                                "action_condtion": "yes",
                                                "action": {
                                                    "action_type": "Hide (don\"t toggle)",
                                                    "apply_to": "Current Repeat",
                                                    "field": "FIELD_4",
                                                    "action_value": ""
                                                }
                                            }
                                        ],
                                        "if_no": []
                                    }
                                ]
                            }
                        ],
                        "if_no": []
                    }
                ]
            }
        }
        createLogicTree(json_object.set, '#container');
    }

    var rules_basic = {
        condition: 'AND',
        rules: [{
            id: 'FIELD_4',
            operator: 'equal',
            value: 10
        },],
        flags: {
            no_add_group: true
        },
    };


    /**
     *Toggle Input Description Visibility
     *
     * @param {string} id
     */
    function toggle_visibility(id) {
        var e = document.getElementById(id);
        if (e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }

    /**
     *Create a conditional section
     *
     * @param {string} elem_id
     * @param {string} section_type
     * @param {object} selector
     * @param {string} super_parent_elem_id
     */

    function createConditionalSection(elem_id, section_type, selector, super_parent_elem_id = '', type = 'create') {
        var html = '<div id="section_' + elem_id + '" class="condition-section logics ';
        html += (section_type == 'main') ? 'sections"' : ' sub-sections"';
        html += ' ><a class="close-thik" data-type="condition"></a><div class="add-more-section" data-id="' + elem_id + '">';
        html += '<button type="button" data-id="' + elem_id + '" data-type="' + section_type + '" id="btn-add-more-section_' + elem_id + '" class="btn btn-default btn-add-more-section">';
        html += '<span class="glyphicon glyphicon-plus-sign"></span></button><h1 class="down-arrow">&#x2193</h1></div>';
        if (section_type != 'main') {

        }
        html += '<a href="#" class="toggle-input" data-input-id="input-description_' + elem_id + '">Enter rule description</a><input class="form-control input-description" id="input-description_' + elem_id + '" type="text" placeholder="Enter description">';
        html += '<div id = "builder_' + elem_id + '" class= "condition builder"';
        html += '></div ><h1 class="dash-down-arrow">&#x21e3</h1>' +
            '<div class="container conditions-section" id="conditions-section_' + elem_id + '">' +
            '<div class="row-fluid">' +
            '<div class="yes-block" id="yes-block_' + elem_id + '">' +
            '<p class="p-yes"><i class="glyphicon glyphicon-ok"></i> If True</p>' +
            '<div class="row-fluid action-container">' +
            '<div class="col-md-5 action_select"  id="action_select_yes_' + elem_id + '">' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-value= "action" data-elem-id="' + elem_id + '" data-super-parent-elem-id="' + super_parent_elem_id + '" data-condition = "yes" id="btn-sub-yes-action_' + elem_id + '">+ Action</button>' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-value= "condition" data-elem-id="' + elem_id + '" data-super-parent-elem-id="' + super_parent_elem_id + '" data-condition = "yes" id="btn-sub-yes-condition_' + elem_id + '">+ Condition</button>' +
            '</div>' +
            '<div class="col-md-5  add_more_actions_container hidden" id="add_more_actions_container_yes_' + elem_id + '">' +
            '<button type="button" class="btn btn-xs btn-success btn-add-action" data-elem-id="' + elem_id + '" data-condition = "yes" id="btn-add-action_yes_' + elem_id + '" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Add action</button>' +
            '<button type="button" class="btn btn-xs btn-success btn-clear-action" data-elem-id="' + elem_id + '" data-condition = "yes" id="btn-clear-action_yes_' + elem_id + '" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Clear All</button>' +
            '<div style="clear:both"></div>' +
            '</div></div>' +
            '<div class="row-fluid sub-yes sub-logic" id="sub-yes_' + elem_id + '"></div>' +
            '</div>' +
            '<div class="no-block" id="no-block_' + elem_id + '">' +
            '<p class="p-no"><i class="glyphicon glyphicon-remove"></i> If False</p>' +
            '<div class="row-fluid action-container">' +
            '<div class="col-md-5 action_select"  id="action_select_no_' + elem_id + '">' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-value= "action" data-elem-id="' + elem_id + '" data-condition = "no" id="btn-sub-no-action_' + elem_id + '">+ Action</button>' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-value= "condition" data-elem-id="' + elem_id + '"  data-condition = "no" id="btn-sub-no-condition_' + elem_id + '">+ Condition</button>' +
            '</div>' +
            '<div class="col-md-5 add_more_actions_container hidden" id="add_more_actions_container_no_' + elem_id + '">' +
            '<button type="button" class="btn btn-xs btn-success btn-add-action" data-elem-id="' + elem_id + '"  data-super-parent-elem-id="' + super_parent_elem_id + '" data-condition = "no" id="btn-add-action_no_' + elem_id + '" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Add action</button>' +
            '<button type="button" class="btn btn-xs btn-success btn-clear-action"  data-elem-id="' + elem_id + '" data-condition = "no" id="btn-clear-action_no_' + elem_id + '"  data-add="rule">         <i class="glyphicon glyphicon-plus"></i> Clear All</button>' +
            '<div style="clear:both"></div>' +
            '</div></div>' +
            '<div class="row-fluid sub-no sub-logic" id="sub-no_' + elem_id + '"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';


        (type == 'more') ? $(html).insertBefore(selector) : $(selector).append(html);
        if ((section_type == 'main')) {
            $('#yes-block_' + elem_id).css('width', '750px');
            $('#no-block_' + elem_id).css('width', '750px');

        }

    }

    /**
     * Create an action section wrapper
     *
     * @param {string} elem_id
     * @param {string} section_type
     * @param {object} selector
     * @param {string} parent_elem_id
     */
    function createActionSection(elem_id, section_type, selector, parent_elem_id) {
        var html = '<div id="section_' + elem_id + '" data-parent-id="' + parent_elem_id + '" class="logics action-section';
        html += (section_type == 'main') ? 'sections"' : ' sub-sections"';
        html += ' ><a class="close-thik" data-type="action"></a>';
        if (section_type != 'main') {
            html += '<a href="#" class="toggle-input" data-input-id="input-description_' + elem_id + '">Enter rule description</a><input class="form-control input-description" id="input-description_' + elem_id + '" type="text" placeholder="Enter description">'
        }
        html += ' <div id = "builder_' + elem_id + '" class= "builder actions form-inline query-builder"';
        html += ' ><div class="rules-group-container"> </div></div></div>';

        $(selector).append(html);
    }

    /**
     *Create an action section
     *
     * @param {string} elem_id
     */
    function queryActionBuilder(elem_id) {
        var html = '<div class="rules-group-body action-container" id="action_container_' + elem_id + '">' +
            '<div class="rules-list">' +
            '<div id="action_builder_' + elem_id + '_rule" class="rule-container">' +
            '<div class="rule-operator-container">' +
            '<select class="form-control action-ctrl" id="action_builder_rule_operator_' + elem_id + '">' +
            '<option value = "-1">Select action</option>' +
            '<option>Set Value</option>' +
            '<option>Show</option>' +
            '<option>Show (don"t toggle)</option>' +
            '<option>Show (and content)</option>' +
            '<option>Hide</option>' +
            '<option>Hide (don"t toggle)</option > ' +
            '<option>Hide and clear values</option>' +
            '<option>Enable</option>' +
            '<option>Enable (don"t toggle)</option>' +
            '<option>Disable</option>' +
            '<option>Disable (don"t toggle)</option>' +
            '<option>Show Message Box</option>' +
            '<option>Show Form</option>' +
            '<option>Hide Form </option>' +
            '<option>Set Document Template</option>' +
            '<option>Append Document Template</option>' +
            '</select ></div >' +
            '<div class="rule-operator-container">' +
            '<select class="form-control " id="action_builder_rule_apply_to_' + elem_id + '">' +
            '<option value = "-1"> Apply to</option>' +
            '<option>Current Repeat</option>' +
            '<option>Entire Form</option>' +
            '</select ></div >' +
            '<div class="rule-filter-container"><select class="form-control" id="action_builder_rule_filter_' + elem_id + '">' +
            '<option value="-1">Select field</option>' +
            '<option value="FIELD_4">FIELD_4</option>' +
            '<option value="FIELD_5">FIELD_5</option>' +
            '<option value="FIELD_6">FIELD_6</option>' +
            '</select></div>' +
            '<div class="rule-value-container"><input class="form-control" type="text" id="action_builder_rule_value_' + elem_id + '"></div>' +
            '</div>' +
            '</div>';

        $('#builder_' + elem_id + ' .rules-group-container').append(html)
    }


    /**
     *JQuery query builder for conditional section
     *
     * @param {string} elem_id
     */
    function queryRulesBuilder(elem_id) {
        jQuery('#builder_' + elem_id).queryBuilder({
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
            rules: rules_basic,
        });
    }


    /**
     *Create an action set json object
     *
     * @param {string} parent_elem_id
     * @returns {object}
     */
    function getActionSetJson(parent_elem_id) {
        var action_type = $('#action_builder_rule_operator_' + parent_elem_id).val();
        var apply_to = $('#action_builder_rule_apply_to_' + parent_elem_id).val();
        var field = $('#action_builder_rule_filter_' + parent_elem_id).val();
        var action_value = $('#action_builder_rule_value_' + parent_elem_id).val();
        var action_object = {
            'action_type': action_type,
            'apply_to': apply_to,
            'field': field,
            'action_value': action_value
        }
        return action_object;
    }


    /**
     *Recursive function to create logic app object tree including all the nodes
     *
     * @param {object} element
     * @returns {Array}
     */
    function dfs(element) {
        var set = [];
        element.children('.logics').each(function () {
            var sectionId = $(this).attr('id');
            var commonID = sectionId.split('_')[1];
            var child_yes = $('#sub-yes_' + commonID);
            var child_no = $('#sub-no_' + commonID);
            var builderElement = $('#builder_' + commonID);
            var item = {};
            item.description = $('#input-description_' + commonID).val();
            item.section_id = commonID;
            item.section_type = ($(this).hasClass('sub-sections')) ? 'sub' : 'main';
            if (builderElement.length) {
                if (builderElement.hasClass('condition')) {
                    item.type = 'condition';
                    item.condition = $(builderElement).queryBuilder('getRules');
                    item.if_yes = dfs($(child_yes));
                    item.if_no = dfs($(child_no));
                } else {
                    item.type = 'action';
                    item.parent_elem_id = $(this).data('parent-id')
                    item.action_condtion = $(this).parent().hasClass('sub-yes') ? 'yes' : 'no';
                    item.action = getActionSetJson(commonID)
                }
            }
            set.push(item);
        });
        return set;

    }


    /**
     *Show or hide the action fields
     *
     * @param {object} e
     * @param {string} [type='create']
     */
    function showHideActionValues(e, type = 'create') {
        var commonID = $(e).attr('id').split('_')[4];
        var value = type == 'edit' ? e.val() : e.value;
        var ctrl = $(e).closest('.rule-container').find('.rule-value-container');
        var fieldselect = $('#action_builder_rule_filter_' + commonID);
        var applyto = $('#action_builder_rule_apply_to_' + commonID);

        if (value == 'Set Value' || value == 'Show Message Box' || value == 'Set Document Template' || value == 'Append Document Template') {
            $('#action_builder_rule_value_' + commonID).prop('disabled', false);
        }
        else {

            if (value == "Show Form" || value == "Hide Form") {
                $(applyto).first().prop('disabled', true);
            } else {
                $(applyto).first().prop('disabled', false);
            }

            $('#action_builder_rule_value_' + commonID).val('');
            $('#action_builder_rule_value_' + commonID).prop('disabled', true);
        }

        if (value == 'Show Message Box') {
            $(fieldselect).first().prop('disabled', true);
            $(fieldselect).first().prop('disabled', true);
            $(applyto).first().prop('disabled', true);
            $(applyto).first().prop('disabled', true);

        }
        else {
            $(fieldselect).first().prop('disabled', false);
            $(fieldselect).first().prop('disabled', false);

            if (value == "Show Form" || value == "Hide Form") {
                $(applyto).first().prop('disabled', true);
                $(applyto).first().prop('disabled', true);

            } else {
                $(applyto).first().prop('disabled', false);
                $(applyto).first().prop('disabled', false);
            }

        }

        if (value == 'Set Document Template' || value == 'Append Document Template') {
            $(applyto).first().prop('disabled', true)
            $(fieldselect).first().prop('disabled', true)
            $(ctrl).first().find('input').prop('disabled', false)
        }

    }

    /****************************************************************
                          Logic Application loading functions
  *****************************************************************/


    /**
     * Remove gruop rule from the condtions
     *
     * @param {object} queryCondition
     * @returns {object}
     */
    function getItemWithNoGroupRule(queryCondition) {
        var flags = {
            no_add_group: true
        }
        queryCondition.flags = flags
        return queryCondition;
    }
    /**
     * Jquery query builder on load
     *
     * @param {*} item
     */
    function queryBuilderOnLoad(item) {

        var itemWithNoGroupRule = getItemWithNoGroupRule(item.condition)
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

    /**
     * Create an action section on load
     *
     * @param {string} elem_id
     * @param {object} rule
     */
    function queryActionBuilderOnLoad(elem_id, rule) {

        var html = '<div class="rules-group-body action-container" id="action_container_' + elem_id + '">' +
            '<div class="rules-list">' +
            '<div id="action_builder_' + elem_id + '_rule" class="rule-container">' +
            '<div class="rule-operator-container">' +
            '<select class="form-control action-ctrl" id="action_builder_rule_operator_' + elem_id + '">' +
            '<option value = "-1">Select action</option>' +
            '<option>Set Value</option>' +
            '<option>Show</option>' +
            '<option>Show (don"t toggle)</option>' +
            '<option>Show (and content)</option>' +
            '<option>Hide</option>' +
            '<option>Hide (don"t toggle)</option > ' +
            '<option>Hide and clear values</option>' +
            '<option>Enable</option>' +
            '<option>Enable (don"t toggle)</option>' +
            '<option>Disable</option>' +
            '<option>Disable (don"t toggle)</option>' +
            '<option>Show Message Box</option>' +
            '<option>Show Form</option>' +
            '<option>Hide Form </option>' +
            '<option>Set Document Template</option>' +
            '<option>Append Document Template</option>' +
            '</select ></div >' +
            '<div class="rule-operator-container">' +
            '<select class="form-control " id="action_builder_rule_apply_to_' + elem_id + '">' +
            '<option value = "-1"> Apply to</option>' +
            '<option>Current Repeat</option>' +
            '<option>Entire Form</option>' +
            '</select ></div >' +
            '<div class="rule-filter-container"><select class="form-control" id="action_builder_rule_filter_' + elem_id + '">' +
            '<option value="-1">Select field</option>' +
            '<option value="FIELD_4">FIELD_4</option>' +
            '<option value="FIELD_5">FIELD_5</option>' +
            '<option value="FIELD_6">FIELD_6</option>' +
            '</select></div>' +
            '<div class="rule-value-container"><input class="form-control" type="text" id="action_builder_rule_value_' + elem_id + '"></div>' +
            '</div>' +
            '</div>';

        $('#builder_' + elem_id + ' .rules-group-container').append(html)
        $('#action_builder_rule_operator_' + elem_id).val(rule.action_type)
        $('#action_builder_rule_filter_' + elem_id).val(rule.field)
        $('#action_builder_rule_value_' + elem_id).val(rule.action_value)
        $('#action_builder_rule_apply_to_' + elem_id).val(rule.apply_to)
        showHideActionValues($('#action_builder_rule_operator_' + elem_id), 'edit')
    }

    /**
     *Build an ACTION section on object load
     *
     * @param {Object} item
     */
    function buildActionSectionsOnLoad(item) {
        var wrapper = item.action_condtion == 'yes' ? '#sub-yes_' + item.parent_elem_id : '#sub-no_' + item.parent_elem_id;

        createActionSectionLoad(item.section_id, 'sub', wrapper, item.parent_elem_id, item.description)
        queryActionBuilderOnLoad(item.section_id, item.action);
    }

    /**
     *Build condition section on object load
     *
     * @param {object} item
     * @param {string} wrapper
     */
    function buildConditionSectionsOnLoad(item, wrapper) {
        var html = '<div id="section_' + item.section_id + '" class="condition-section logics ';
        html += (item.section_type == 'main') ? 'sections"' : ' sub-sections"';
        html += ' ><a class="close-thik" data-type="condition"></a><div class="add-more-section" data-id="' + item.section_id + '"><button type="button" data-type="' + item.section_type + '" data-id="' + item.section_id + '" id="btn-add-more-section_' + item.section_id + '" class="btn btn-default btn-add-more-section"><span class="glyphicon glyphicon-plus-sign"></span></button><h1 class="down-arrow">&#x2193</h1></div>';
        // if (item.section_type != 'main') {
        //     html += '<input class="form-control" id="input-description_' + item.section_id + '" type="text" placeholder="Enter description">'
        // }
        html += '<a href="#" class="toggle-input" data-input-id="input-description_' + item.section_id + '">Enter rule description</a><input class="form-control input-description" id="input-description_' + item.section_id + '" type="text" placeholder="Enter description">'
        html += ' <div id = "builder_' + item.section_id + '" class= "condition builder"';
        html += '></div ><h1 class="dash-down-arrow">&#x21e3</h1>' +
            '<div class="container conditions-section" id="conditions-section_' + item.section_id + '">' +
            '<div class="row-fluid">' +
            '<div class="yes-block" id="yes-block_' + item.section_id + '">' +
            '<p class="p-yes"><i class="glyphicon glyphicon-ok"></i> If True</p>' +
            '<div class="row-fluid action-container">' +
            '<div class="col-md-5 action_select"  id="action_select_yes_' + item.section_id + '">' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-value= "action" data-elem-id="' + item.section_id + '"  data-condition = "yes" id="btn-sub-yes-action_' + item.section_id + '">+ Action</button>' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-value= "condition" data-elem-id="' + item.section_id + '"  data-condition = "yes" id="btn-sub-yes-condition_' + item.section_id + '">+ Condition</button>' +
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
            '<div class="row-fluid action-container">' +
            '<div class="col-md-5 action_select"  id="action_select_no_' + item.section_id + '">' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-value= "action" data-elem-id="' + item.section_id + '"  data-condition = "no" id="btn-sub-no-action_' + item.section_id + '">+ Action</button>' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-value= "condition" data-elem-id="' + item.section_id + '" data-condition = "no" id="btn-sub-no-condition_' + item.section_id + '">+ Condition</button>' +
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
        $('#input-description_' + item.section_id).val(item.description);
        (item.description.length) && $('#input-description_' + item.section_id).css('display', 'block');
        queryBuilderOnLoad(item);


        item.if_yes && createLogicTree(item.if_yes, '#sub-yes_' + item.section_id);
        item.if_no && createLogicTree(item.if_no, '#sub-no_' + item.section_id);
    }


    /**
     * Build an action section wrapper on load
     *
     * @param {string} elem_id
     * @param {string} section_type
     * @param {object} selector
     * @param {string} parent_elem_id
     * @param {string} description
     */
    function createActionSectionLoad(elem_id, section_type, selector, parent_elem_id, description) {
        var html = '<div id="section_' + elem_id + '" data-parent-id="' + parent_elem_id + '" class="action-section logics ';
        html += (section_type == 'main') ? 'sections"' : ' sub-sections"';
        html += ' ><a  class="close-thik" data-type="action"></a>';
        if (section_type != 'main') {
            html += '<input class="form-control" id="input-description_' + elem_id + '" type="text" placeholder="Enter description">'
        }
        html += ' <div id = "builder_' + elem_id + '" class= "builder actions form-inline query-builder"';
        html += ' ><div class="rules-group-container"> </div></div></div>';

        $(selector).append(html);
        $('#input-description_' + elem_id).val(description);
    }


    /**
     * Show or hide action section buttons
     *
     */
    function showHideActionOrConditionButtons() {
        var parent = $('.action-section').parent().parent();
        parent.children('.action-container').find('.action_select').addClass('hidden');
        parent.children('.action-container').find('.add_more_actions_container').removeClass('hidden');
    }

    /**
     * Create Logic tree
     *
     * @param {object} json_object
     * @param {string} wrapper
     */
    function createLogicTree(json_object, wrapper) {
        $.each(json_object, function (i, item) {
            item.type == 'condition' && buildConditionSectionsOnLoad(item, wrapper);
            item.type == 'action' && buildActionSectionsOnLoad(item);
        });

        showHideActionOrConditionButtons();
    }

    /****************************************************************
                            Triggers and Changers
    *****************************************************************/

    $('#btn-get').on('click', function () {
        var result = $('#builder').queryBuilder('getRules');
        if (!$.isEmptyObject(result)) {
            alert(JSON.stringify(result, null, 2));
        }
        else {
            console.log("invalid object :");
        }
        console.log(result);
    });

    $('#btn-reset').on('click', function () {
        $('#builder').queryBuilder('reset');
    });

    $('#btn-set').on('click', function () {
        var result = $('#builder').queryBuilder('getRules');
        if (!$.isEmptyObject(result)) {
            rules_basic = result;
        }
    });

    //When rules changed :
    $('#builder').on('getRules.queryBuilder.filter', function (e) {
    });

    $(document).on('click', '.btn-sub-condtion', function () {
        var parent_elem_id = $(this).data('elem-id');
        var is_condition = $(this).data('condition');
        var elem_id = Math.round(new Date().getTime() + (Math.random() * 100));
        var select_yes_no = $(this).data('value');
        var action_type = (select_yes_no == 'condition') ? 'condition' : (select_yes_no == 'action') ? 'action' : '';
        var wrapper = (is_condition === 'yes') ? '#sub-yes_' + parent_elem_id : '#sub-no_' + parent_elem_id;


        if ($('#section_' + parent_elem_id).hasClass('sections')) {
            if (is_condition === 'yes') {
                $('#section_' + parent_elem_id + ' .yes-block').removeAttr('style');
            } else {
                $('#section_' + parent_elem_id + ' .no-block').removeAttr('style');
            }

        }
        if (action_type == 'condition') {
            createConditionalSection(elem_id, 'sub', wrapper, parent_elem_id)
            queryRulesBuilder(elem_id)
        } else if (action_type == 'action') {
            $(this).parent().addClass('hidden');
            $(this).closest('.row-fluid').find('.add_more_actions_container').removeClass('hidden');
            $(wrapper).html('');
            createActionSection(elem_id, 'sub', wrapper, parent_elem_id)
            queryActionBuilder(elem_id, 1);
        }

        $(".btn-danger").contents().filter(function () { return this.nodeType == 3; }).remove();
    });

    $('#btn-create-rules').click(function () {
        var elem_id = Math.round(new Date().getTime() + (Math.random() * 100));
        createConditionalSection(elem_id, 'main', '#container', null)
        queryRulesBuilder(elem_id);
        $(".btn-danger").contents().filter(function () { return this.nodeType == 3; }).remove();
    });


    $('body').on("click", '#btn-save-rules', function () {
        var ruleSet = {};
        ruleSet['name'] = 'Rule_' + Math.round(new Date().getTime() + (Math.random() * 100));
        ruleSet['set'] = dfs($('#container'));
        console.log(JSON.stringify(ruleSet, undefined, 2));
    });

    $(document).on('click', '.btn-add-action', function () {
        var parent_elem_id = $(this).data('elem-id');
        var is_condition = $(this).data('condition');
        elem_id = Math.round(new Date().getTime() + (Math.random() * 100));
        var wrapper = (is_condition === 'yes') ? '#sub-yes_' + parent_elem_id : '#sub-no_' + parent_elem_id;
        createActionSection(elem_id, 'sub', wrapper, parent_elem_id)
        queryActionBuilder(elem_id);
    });

    $(document).on('click', '.btn-clear-action', function () {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    var parent_elem_id = $(this).data('elem-id');
                    var is_condition = $(this).data('condition');
                    if (is_condition === 'yes') {
                        var wrapper = '#sub-yes_' + parent_elem_id;
                        var action_select = '#action_select_yes_' + parent_elem_id;
                    } else {
                        wrapper = '#sub-no_' + parent_elem_id;
                        action_select = '#action_select_no_' + parent_elem_id;
                    }
                    $(wrapper).html('');
                    $(action_select).removeClass('hidden');
                    $(this).closest('.add_more_actions_container').addClass('hidden');
                }
            });

    });

    $(document).on('click', '.remove-action', function () {
        $(this).closest('.action-container').remove();
    });

    $(document).on('change', '.action-ctrl', function () {
        showHideActionValues(this)
    });

    $(document).on('click', '.btn-add-more-section', function () {
        var elem_id = Math.round(new Date().getTime() + (Math.random() * 100));
        var section = '#section_' + $(this).data('id');
        var type = $(this).data('type')
        createConditionalSection(elem_id, type, section, null, 'more')
        queryRulesBuilder(elem_id);
        $(".btn-danger").contents().filter(function () { return this.nodeType == 3; }).remove();
    });


    $(document).on('click', '.close-thik', function (e) {
        e.preventDefault();
        var type = $(this).data('type');
        var parent_elem_id = $(this).parent('.logics').data('parent-id');
        var parent_sub_logic = $(this).parent('.logics').parent('.sub-logic');
        var no_of_actions = parent_sub_logic.hasClass('sub-yes') ? $('#sub-yes_' + parent_elem_id).children('.logics').length : $('#sub-no_' + parent_elem_id).children('.logics').length;
        var action_select = parent_sub_logic.hasClass('sub-yes') ? '#action_select_yes_' + parent_elem_id : '#action_select_no_' + parent_elem_id;
        var action_container = parent_sub_logic.hasClass('sub-yes') ? '#add_more_actions_container_yes_' + parent_elem_id : '#add_more_actions_container_no_' + parent_elem_id;
        if (no_of_actions == 1 && type == "action") {
            $(action_select).removeClass('hidden');
            $(action_container).addClass('hidden');
            parent_sub_logic.html('');
        }

        $(this).closest('.logics').remove();
    });

    $(document).on('click', '.btn', function (e) {
        $(".btn-danger").contents().filter(function () { return this.nodeType == 3; }).remove();
    });

    $(document).on('click', '.toggle-input', function (e) {
        e.preventDefault();
        toggle_visibility($(this).data('input-id'))
    });

});
