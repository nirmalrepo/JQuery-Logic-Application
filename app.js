
jQuery(document).ready(function () {
    var rules_basic = {
        condition: 'AND',
        rules: [{
            id: 'price',
            operator: 'less',
            value: 10.25
        },]
    };


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
        //$log.info(e.value);
    });

    $(document).on('click', '.btn-sub-condtion', function () {
        var parent_elem_id = $(this).data('elem-id');
        var is_condition = $(this).data('condition');
        console.log(parent_elem_id);
        console.log(is_condition);
        var elem_id = Math.round(new Date().getTime() + (Math.random() * 100));
        var wrapper = (is_condition === 'yes') ? '#sub-yes_' + parent_elem_id : '#sub-no_' + parent_elem_id;
        $(wrapper).append('<div id="section_' + elem_id + '" class="sections">' +
            '<div id = "builder_' + elem_id + '" class= "builder col-md-10 col-md-offset-1" ></div >' +
            '<div class="col-md-12 conditions-section">' +
            '<div class="row-fluid">' +
            '<div class="col-md-5 col-md-offset-1 yes-block">' +
            '<p class="p-yes"><i class="glyphicon glyphicon-ok"></i> If True</p>' +
            '<div class="row-fluid"><button class="btn btn-primary btn-sub-condtion" data-elem-id="' + elem_id + '" data-condition = "yes" id="btn-sub-yes-condition_' + elem_id + '"><i class="glyphicon glyphicon-save"></i> condition</button>' +
            '</div>' +
            '<div class="row" id="sub-yes_' + elem_id + '"></div>' +
            '</div>' +
            '<div class="col-md-5 no-block">' +
            '<p class="p-no"><i class="glyphicon glyphicon-remove"></i> If False</p>' +
            '<div class="row-fluid"><button class="btn btn-primary btn-sub-condtion" data-elem-id="' + elem_id + '" data-condition = "no" id="btn-sub-no-condition_' + elem_id + '"><i class="glyphicon glyphicon-save"></i> condition</button>' +
            '<div class="row-fluid" id="sub-no_' + elem_id + '"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');

        jQuery('#builder_' + elem_id).queryBuilder({
            plugins: ['bt-tooltip-errors'],

            filters: [{
                id: 'name',
                label: 'Name',
                type: 'string'
            }, {
                id: 'category',
                label: 'Category',
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
                id: 'in_stock',
                label: 'In stock',
                type: 'integer',
                input: 'radio',
                values: {
                    1: 'Yes',
                    0: 'No'
                },
                operators: ['equal']
            }, {
                id: 'price',
                label: 'Price',
                type: 'double',
                validation: {
                    min: 0,
                    step: 0.01
                }
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
            rules: rules_basic
        });
    });

    $('#btn-json').click(function () {
        html = $("#container").html();
        const json = window.himalaya.parse(html)
        console.log('👉', json)
    });
    $('#btn-create').click(function () {
        var elem_id = Math.round(new Date().getTime() + (Math.random() * 100));
        $("#container").append('<div id="section_' + elem_id + '" class="sections row">' +
            '<div id = "builder_' + elem_id + '" class= "builder col-md-6 col-md-offset-3" ></div >' +
            '<div class="col-md-12 conditions-section">' +
            '<div class="row">' +
            '<div class="col-md-5 col-md-offset-1 yes-block">' +
            '<p class="p-yes"><i class="glyphicon glyphicon-ok"></i> If True</p>' +
            '<div class="row-fluid"><button class="btn btn-primary btn-sub-condtion" data-elem-id="' + elem_id + '" data-condition = "yes" id="btn-sub-yes-condition_' + elem_id + '"><i class="glyphicon glyphicon-save"></i> condition</button>' +
            '</div>' +
            '<div class="row-fluid" id="sub-yes_' + elem_id + '"></div>' +
            '</div>' +
            '<div class="col-md-5 no-block">' +
            '<p class="p-no"><i class="glyphicon glyphicon-remove"></i> If False</p>' +
            '<div class="row-fluid"><button class="btn btn-primary btn-sub-condtion" data-elem-id="' + elem_id + '" data-condition = "no" id="btn-sub-no-condition_' + elem_id + '"><i class="glyphicon glyphicon-save"></i> condition</button>' +
            '<div class="row-fluid" id="sub-no_' + elem_id + '"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
        jQuery('#builder_' + elem_id).queryBuilder({
            plugins: ['bt-tooltip-errors'],

            filters: [{
                id: 'name',
                label: 'Name',
                type: 'string'
            }, {
                id: 'category',
                label: 'Category',
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
                id: 'in_stock',
                label: 'In stock',
                type: 'integer',
                input: 'radio',
                values: {
                    1: 'Yes',
                    0: 'No'
                },
                operators: ['equal']
            }, {
                id: 'price',
                label: 'Price',
                type: 'double',
                validation: {
                    min: 0,
                    step: 0.01
                }
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
            rules: rules_basic
        });

    });
});
