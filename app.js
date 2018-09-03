
jQuery(document).ready(function () {
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

    function createConditionalSection(elem_id, section_type, selector) {
        var html = '<div id="section_' + elem_id + '" class="';
        html += (section_type == 'main') ? ' sections"' : ' sub-sections"';
        html += ' ><div id = "builder_' + elem_id + '" class= "builder col-md-10';
        html += (section_type == 'main') ? ' col-md-6 col-md-offset-3"' : ' col-md-10 col-md-offset-1"';
        html += '></div >' +
            '<div class="col-md-12 conditions-section" id=" conditions-section_' + elem_id + '">' +
            '<div class="row-fluid">' +
            '<div class="col-md-5 col-md-offset-1 yes-block">' +
            '<p class="p-yes"><i class="glyphicon glyphicon-ok"></i> If True</p>' +
            '<div class="row-fluid"> <div class="col-md-5 col-md-offset-4 action_container"><select class="select_action" id="btn-sub-yes-select-action_' + elem_id + '"> <option value="">select action</option> <option value="condition">Condition</option><option value="action">Action</option></select>' +
            '<button class="btn btn-outline-primary btn-sub-condtion" data-elem-id="' + elem_id + '" data-condition = "yes" id="btn-sub-yes-condition_' + elem_id + '">select</button>' +
            '</div>' +
            '<div class="col-md-5 col-md-offset-4 add_more_actions_container hidden">' +
            '<button type="button" class="btn btn-xs btn-success btn-add-action" data-elem-id="' + elem_id + '" id="btn-add-action_' + elem_id + '" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Add action</button>' +
            '<button type="button" class="btn btn-xs btn-success btn-clear-action" data-elem-id="' + elem_id + '" id="btn-clear-action_' + elem_id + '" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Clear Actions</button>' +
            '<div style="clear:both"></div>' +
            '</div></div>' +
            '<div class="row-fluid sub-yes" id="sub-yes_' + elem_id + '"></div>' +
            '</div>' +
            '<div class="col-md-5 no-block">' +
            '<p class="p-no"><i class="glyphicon glyphicon-remove"></i> If False</p>' +
            '<div class="row-fluid"> <div class="col-md-5 col-md-offset-4 action_container"><select class="select_action" id="btn-sub-no-select-action_' + elem_id + '"> <option value="">select action</option> <option value="condition">Condition</option><option value="action">Action</option></select><button class="btn btn-outline-primary btn-sub-condtion" data-elem-id="' + elem_id + '" data-condition = "no" id="btn-sub-no-condition_' + elem_id + '">select</button>' +
            '</div>' +
            '<div class="col-md-5 col-md-offset-4 add_more_actions_container hidden">' +
            '<button type="button" class="btn btn-xs btn-success" data-add="rule"><i class="glyphicon glyphicon-plus"></i> Add action</button>' +
            '<button type="button" class="btn btn-xs btn-success" data-add="rule">         <i class="glyphicon glyphicon-plus"></i> Clear Actions</button>' +
            '<div style="clear:both"></div>' +
            '</div></div>' +
            '<div class="row-fluid sub-no" id="sub-no_' + elem_id + '"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        $(selector).append(html);
    }

    function createActionSection(elem_id, section_type, selector) {
        var html = '<div id="section_' + elem_id + '" class="';
        html += (section_type == 'main') ? ' sections"' : 'sub-sections"';
        html += ' ><div id = "action_builder_' + elem_id + '" class= "builder col-md-10';
        html += (section_type == 'main') ? ' col-md-6 col-md-offset-3"' : ' col-md-10 col-md-offset-1"';
        html += ' ></div></div>';

        $(selector).append(html);
    }

    function queryActionBuilder(elem_id, count) {
        var html = '<div id="action_builder_' + elem_id + '_rule_' + count + '" class="action-container">' +
            '<div class="rule-header">' +
            '<div class="btn-group pull-right rule-actions" > <button type="button" class="btn btn-xs btn-danger" data-delete="rule">' +
            '<i class="glyphicon glyphicon-remove"></i>' +
            'Delete </button> </div >' +
            '</div >' +
            '<div class="rule-operator-container"><select class="form-control " name="builder_1536013433750_rule_0_operator">' +
            '< option value = "-1" > select action</option >' +
            '<option>Set Value</option>' +
            '<option>Show</option>' +
            '<option>Show (dont toggle)</option>' +
            '<option>Show (and content)</option>' +
            '<option> Hide</option></select ></div >' +
            '<div class="rule-filter-container"><select class="form-control" name="action_builder_' + elem_id + '_rule_' + count + '_filter">' +
            '<option value="-1">------</option>' +
            '<option value="FIELD_4">FIELD_4</option>' +
            '<option value="FIELD_5">FIELD_5</option>' +
            '<option value="FIELD_6">FIELD_6</option>' +
            '<option value="id">Identifier</option> </select></div>' +
            '<div class="rule-value-container"><input class="form-control" type="text" name="action_builder_' + elem_id + '_rule_' + count + '_value_' + count + '"></div>' +
            '</div>'

        $('#action_builder_' + elem_id).append(html)
    }
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

    /****************************************************************
                            Triggers and Changers QueryBuilder
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
        //$('#builder').queryBuilder('setRules', rules_basic);
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
        console.log(parent_elem_id);
        console.log(is_condition);
        var elem_id = Math.round(new Date().getTime() + (Math.random() * 100));
        var select_yes_no = (is_condition === 'yes') ? $('#btn-sub-yes-select-action_' + parent_elem_id).val() : $('#btn-sub-no-select-action_' + parent_elem_id).val();
        var action_type = (select_yes_no == 'condition') ? 'condition' : (select_yes_no == 'action') ? 'action' : '';
        var wrapper = (is_condition === 'yes') ? '#sub-yes_' + parent_elem_id : '#sub-no_' + parent_elem_id;
        console.log(action_type);
        if (action_type == 'condition') {
            createConditionalSection(elem_id, 'sub', wrapper)
            queryRulesBuilder(elem_id)
        } else if (action_type == 'action') {
            console.log('action')
            $(this).parent().addClass('hidden');
            // $('.action_container').addClass('hidden');
            $(this).closest('.row-fluid').find('.add_more_actions_container').removeClass('hidden');
            createActionSection(elem_id, 'sub', wrapper)
            queryActionBuilder(elem_id, 1);
        }


    });

    $('#btn-create-rules').click(function () {
        var elem_id = Math.round(new Date().getTime() + (Math.random() * 100));
        createConditionalSection(elem_id, 'main', '#container')
        queryRulesBuilder(elem_id);
    });
    $('body').on("click", '#btn-save-rules', function () {
        // $('#btn-save-rules').on('click', function () {
        var ruleSet = {};
        var set = [];
        ruleSet['name'] = 'Rule_' + Math.round(new Date().getTime() + (Math.random() * 100));
        $('.sections').each(function () {
            var sectionId = $(this).attr('id');
            var commonID = sectionId.split('_')[1];
            var builderElement = $('#builder_' + commonID);
            var item = {};
            item['section_id'] = sectionId;
            if (builderElement.length) {
                item['condition'] = $(builderElement).queryBuilder('getRules')
            }
            var sub_rule_set = {};
            var sub_set = [];
            $(this).find('.yes-block .sub-sections').each(function () {
                var sub_sectionId = $(this).attr('id');
                var sub_commonID = sub_sectionId.split('_')[1];
                var sub_builderElement = $('#builder_' + sub_commonID);
                var sub_item = {};
                sub_item['section_id'] = sub_sectionId;
                if (sub_builderElement.length) {
                    sub_item['condition'] = $(sub_builderElement).queryBuilder('getRules')
                }

                sub_set.push(sub_item);
            });
            sub_rule_set['set'] = sub_set;
            item['if_yes'] = sub_rule_set;
            set.push(item);
        });
        ruleSet['set'] = set;
        console.log(JSON.stringify(ruleSet, undefined, 2));

    });

    $(document).on('click', '.btn-add-action', function () {
        var parent_elem_id = $(this).data('elem-id');

        var count = $('#action_builder_' + parent_elem_id + ' > div').length;
        console.log(count)
        queryActionBuilder(parent_elem_id, count);
    });
});
