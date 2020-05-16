const FORM_DEFS = {
  /**
   * REMEASURE FORM
   */
  remeasure: {
    table: 'measure',
    header: 'Remeasure form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
              {
                column_name: "TreeID",
                label: "TreeID",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                readonly: true,
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "tag",
                label: "Tag",
                html_element: "input",
                readonly: true,
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: 'species',
                label: "Species",
                html_element: 'select',
                readonly: true,
                default_option: 'No previous value...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'SpeciesList',
                },
              },
              {
                id: 'prev_status',
                column_name: 'status',
                label: "Previous status",
                html_element: 'select',
                disabled: true,
                default_option: 'No previous value...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'StatusList',
                },
              },
              {
                column_name: 'status',
                label: "Status",
                html_element: 'select',
                readonly: true,
                default_option: 'Failed to load status...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'StatusList',
                },
              },
              {
                column_name: 'comments',
                label: "Previous comments",
                disabled: true,
                html_element: "textarea",
                html_attributes: { rows: 3 },
                data_attributes: { prev_action: 'replace' },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Details',
        sections: [
          {
            inputs: [
              {
                id: 'dbh_r',
                column_name: 'dbh',
                label: 'DBH (cm)',
                html_element: 'input',
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'prepend' },
              },
              {
                raw_html: '<!-- modal option1 (if dbhVal < 5) --> <div class="modal fade" id="dbh_check_op1_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="dbh_check_op1_Label_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="dbh_check_op1_Label_r">DBH Check</h5> </div> <div class="modal-body"> <p>Dbh is less than previous - is that correct?</p> <button type="button" id="yes_dbh_op1_r" class="btn btn-primary">Yes</button> <button type="button" id="no_dbh_op1_r" class="btn btn-danger">No</button> </div> </div> </div> </div>'
              },
              {
                raw_html: '<!-- modal option2(if dbhVal > 10) --> <div class="modal fade" id="dbh_check_op2_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="dbh_check_op2_Label_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="dbh_check_op2_Label_r">DBH Check</h5> </div> <div class="modal-body"> <p>Dbh increased > 5 cm - is that correct?</p> <button type="button" id="yes_dbh_op2_r" class="btn btn-primary">Yes</button> <button type="button" id="no_dbh_op2_r" class="btn btn-danger">No</button> </div> </div> </div> </div>'
              },
              {
                id: 'overall_vigor_r',
                column_name: 'overall_vigor',
                label: 'Overall vigor (OV)',
                html_element: 'select',
                data_attributes: { options_list: 'TreeVigorList' },
              },
              {
                id: 'main_stem_r',
                column_name: 'main_stem',
                label: 'Main stem (MS)',
                html_element: 'select',
                data_attributes: { 
                  prev_action: 'prepend',
                  options_list: 'MainStemList',
                },
              },
              {
                id: 'rooting_r',
                column_name: 'rooting',
                label: 'Rooting',
                html_element: 'select',
                data_attributes: {
                  prev_action: 'prepend',
                  options_list: 'RootingList',
                },
              },
              {
                id: 'lean_angle_r',
                column_name: 'lean_angle',
                label: 'Lean angle (deg)',
                invalid_feedback: 'Lean angle must be within the range 0-120.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 0,
                  max: 120,
                },
                data_attributes: { prev_action: 'prepend' },
              },
              {
                raw_html: '<!-- Lean Angle Check Modal (must be in range 0 to 120) --> <div class="modal fade" id="lean_angl_check_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="lean_angl_Label_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="lean_angl_Label_r">Lean Angle Check</h5> </div> <div class="modal-body"> <p>Lean angle must be within the range 0-120.</p> <button type="button" id="ok_lean_angl_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'crown_percentage_r',
                column_name: 'crown_percentage',
                label: 'Crown percentage',
                invalid_feedback: 'Crown % must be within the range 0-100.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 0,
                  max: 100,
                },
              },
              {
                raw_html: '<!-- Option 1  (mainStemVal == 2 && crownPrctVal == 100) --> <div class="modal fade" id="crwn_pct_check_op1_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="crwn_pct_Label_op1_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="crwn_pct_Label_op1_r">Crown Percentage Check</h5> </div> <div class="modal-body"> <p>If main stem is 2 then crown % must be < 100%.</p> <button type="button" id="ok_crwn_pct_op1_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 2  (must be in range 0 to 100) --> <div class="modal fade" id="crwn_pct_check_op2_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="crwn_pct_Label_op2_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="crwn_pct_Label_op2_r">Crown Percentage Check</h5> </div> <div class="modal-body"> <p>Crown percentage must be within the range 0-100.</p> <button type="button" id="ok_crwn_pct_op2_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'tree_percentage_r',
                column_name: 'tree_percentage',
                label: 'Tree percentage',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                },
              },
              {
                raw_html: '<!-- Option 1  (treePctVal < crownPctVal) --> <div class="modal fade" id="tree_pct_check_op1_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op1_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op1_r">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>Tree % cannot be less then crown %.</p> <button type="button" id="ok_tree_pct_op1_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 2  (treePctVal === 100 && mainStemVal === 2) --> <div class="modal fade" id="tree_pct_check_op2_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op2_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op2_r">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>Tree % cannot be less than 100% if Main_Stem=2 (broken).</p> <button type="button" id="ok_tree_pct_op2_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 3 (treePctVal < 100 && mainStemVal === 1) --> <div class="modal fade" id="tree_pct_check_op3_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op3_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op3_r">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>If tree % < 100 then Main_Stem must be 2 or 3 (broken).</p> <button type="button" id="ok_tree_pct_op3_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 4 (treePctVal < 0 || treePctVal > 100) --> <div class="modal fade" id="tree_pct_check_op4_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op4_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op4_r">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>Tree percentage must be within the range 0-100.</p> <button type="button" id="ok_tree_pct_op4_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'mapping',
        header: 'Mapping',
        collapsable: true,
        collapsed: true,
        sections: [
          {
            inputs: [
              {
                id: 'from_tag_r',
                column_name: 'from_tag',
                label: 'From (tag)',
                html_element: 'input',
                html_attributes: { type: 'number' },
              },
              {
                id: 'distance_r',
                column_name: 'distance',
                label: 'Distance (m)',
                invalid_feedback: 'Distance must be within the range 0.1-25.0',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 0.1,
                  max: 25.0,
                },
              },
              {
                raw_html: '<!-- Distance Option 1  (distanceVal < 0.1 || distanceVal > 25.0) --> <div class="modal fade" id="distance_check_op1_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="distance_check_Label_op1_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="distance_check_Label_op1_r">Distance Check</h5> </div> <div class="modal-body"> <p>Distance must be within the range 0.1-25.0</p> <button type="button" id="ok_distance_check_op1_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Distance Option 2 (distanceVal > 10) --> <div class="modal fade" id="distance_check_op2_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="distance_check_Label_op2_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="distance_check_Label_op1_r">Distance Check</h5> </div> <div class="modal-body"> <p>Distance > 10m? Check entry or choose a closer tree.</p> <button type="button" id="ok_distance_check_op2_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'azimuth_r',
                column_name: 'azimuth',
                label: 'Azimuth',
                invalid_feedback: 'Azimuth must be within the range 0-360',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  min: 0,
                  max: 360,
                },
              },
              {
                raw_html: '<!-- Azimuth Check Modal--> <div class="modal fade" id="azimuth_check_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="azimuth_check_Label_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="azimuth_check_Label_r">Azimuth Check</h5> </div> <div class="modal-body"> <p>Azimuth must be within the range 0 and 360.</p> <button type="button" id="ok_azimuth_check_r" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
            ],// inputs
          },
        ],// sections
      },
      {
        id: 'comments',
        header: 'Comments',
        sections: [
          {
            inputs: [
              {
                column_name: 'comment_1',
                label: 'Comment 1',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_2',
                label: 'Comment 2',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_3',
                label: 'Comment 3',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_custom',
                label: 'Custom comment',
                html_element: 'textarea',
                html_attributes: { rows: 3 },
              },
            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },

  /**
   * INGROWTH FORM
   */
  ingrowth: {
    table: 'measure',
    header: 'Ingrowth form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "tag",
                label: "Tag",
                html_element: "input",
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Details',
        sections: [
          {
            inputs: [
              {
                id: 'species_i',
                column_name: 'species',
                label: "Species",
                html_element: 'select',
                default_option: 'Please select a species...',
                data_attributes: {
                  options_list: 'SpeciesList',
                },
              },
              {
                id: 'dbh_i',
                column_name: 'dbh',
                label: 'DBH (cm)',
                html_element: 'input',
                html_attributes: { type: 'number' },
              },
              {
                raw_html: '<!-- modal option1(if dbhVal < 5) --> <div class="modal fade" id="dbh_check_op1_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="dbh_check_op1_Label_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="dbh_check_op1_Label_i">DBH Check</h5> </div> <div class="modal-body"> <p>Dbh is < 5 cm - is that correct?</p> <button type="button" id="yes_dbh_op1_i" class="btn btn-primary">Yes</button> <button type="button" id="no_dbh_op1_i" class="btn btn-danger">No</button> </div> </div> </div> </div>'
              },
              {
                raw_html: '<!-- modal option2(if dbhVal > 10) --> <div class="modal fade" id="dbh_check_op2_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="dbh_check_op2_Label_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="dbh_check_op2_Label_i">DBH Check</h5> </div> <div class="modal-body"> <p>Dbh > 10 cm - is that correct?</p> <button type="button" id="yes_dbh_op2_i" class="btn btn-primary">Yes</button> <button type="button" id="no_dbh_op2_i" class="btn btn-danger">No</button> </div> </div> </div> </div>'
              },
              {
                id: 'status_i',
                column_name: 'status',
                label: "Status",
                html_element: 'select',
                data_attributes: { options_list: 'StatusList' },
              },
              {
                id: 'canopy_class_i',
                column_name: 'canopy_class',
                label: "Canopy class",
                html_element: 'select',
                data_attributes: { options_list: 'CanopyClassList' },
              },
              {
                id: 'crown_ratio_i',
                column_name: 'crown_ratio',
                label: 'Crown ratio (%)',
                invalid_feedback: 'Crown ratio must be within the range 1-100.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 1,
                  max: 100,
                },
              },
              {
                raw_html: '<!-- Crown Ratio Check Modal--> <div class="modal fade" id="crown_ratio_check_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="crown_ratio_check_Label_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="crown_ratio_check_Label_i">Crown Ratio Check</h5> </div> <div class="modal-body"> <p>Crown ratio must be within the range 1-100.</p> <button type="button" id="ok_crown_ratio_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'overall_vigor_i',
                column_name: 'overall_vigor',
                label: 'Overall vigor (OV)',
                html_element: 'select',
                data_attributes: { options_list: 'TreeVigorList' },
              },
              {
                id: 'main_stem_i',
                column_name: 'main_stem',
                label: 'Main stem (MS)',
                html_element: 'select',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'MainStemList',
                },
              },
              {
                id: 'rooting_i',
                column_name: 'rooting',
                label: 'Rooting',
                html_element: 'select',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'RootingList',
                },
              },
              {
                id: 'lean_angle_i',
                column_name: 'lean_angle',
                label: 'Lean angle (deg)',
                invalid_feedback: 'Lean angle must be within the range 0-120.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 0,
                  max: 120,
                },
              },
              {
                raw_html: '<!-- Lean Angle check modal (must be in range 0 to 120) --> <div class="modal fade" id="lean_angl_check_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="lean_angl_Label_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="lean_angl_Label_i">Lean Angle Check</h5> </div> <div class="modal-body"> <p>Lean angle must be within the range 0-120.</p> <button type="button" id="ok_lean_angl_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'crown_percentage_i',
                column_name: 'crown_percentage',
                label: 'Crown percentage',
                invalid_feedback: 'Crown % must be within the range 0-100.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 0,
                  max: 100,
                },
              },
              {
                raw_html: '<!-- Option 1 (mainStemVal == 2 && crownPrctVal == 100) --> <div class="modal fade" id="crwn_pct_check_op1_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="crwn_pct_Label_op1_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="crwn_pct_Label_op1_i">Crown Percentage Check</h5> </div> <div class="modal-body"> <p>If main stem is 2 then crown % must be < 100%.</p> <button type="button" id="ok_crwn_pct_op1_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 2  (must be in range 0 to 100) --> <div class="modal fade" id="crwn_pct_check_op2_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="crwn_pct_Label_op2_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="crwn_pct_Label_op2_i">Crown Percentage Check</h5> </div> <div class="modal-body"> <p>Crown percentage must be within the range 0-100.</p> <button type="button" id="ok_crwn_pct_op2_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'tree_percentage_i',
                column_name: 'tree_percentage',
                label: 'Tree percentage',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                },
              },
              {
                raw_html: '<!-- Option 1  (treePctVal < crownPctVal) --> <div class="modal fade" id="tree_pct_check_op1_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op1_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op1_i">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>Tree % cannot be less then crown %.</p> <button type="button" id="ok_tree_pct_op1_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 2  (treePctVal < 0 || treePctVal > 100) --> <div class="modal fade" id="tree_pct_check_op2_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op2_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op2_i">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>Tree percentage must be within the range 0-100.</p> <button type="button" id="ok_tree_pct_op2_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'mapping',
        header: 'Mapping',
        collapsable: true,
        sections: [
          {
            inputs: [
              {
                id: 'from_tag_i',
                column_name: 'from_tag',
                label: 'From (tag)',
                html_element: 'input',
                html_attributes: { type: 'number' },
              },
              {
                id: 'distance_i',
                column_name: 'distance',
                label: 'Distance (m)',
                invalid_feedback: 'Distance must be within the range 0.1-25.0',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 0.1,
                  max: 25.0,
                },
              },
              {
                raw_html: '<!-- Distance Option 1  (distanceVal < 0.1 || distanceVal > 25.0) --> <div class="modal fade" id="distance_check_op1_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="distance_check_Label_op1_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="distance_check_Label_op1_i">Distance Check</h5> </div> <div class="modal-body"> <p>Distance must be within the range 0.1-25.0</p> <button type="button" id="ok_distance_check_op1_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Distance Option 2 (distanceVal > 10) --> <div class="modal fade" id="distance_check_op2_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="distance_check_Label_op2_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="distance_check_Label_op1_i">Distance Check</h5> </div> <div class="modal-body"> <p>Distance > 10m? Check entry or choose a closer tree.</p> <button type="button" id="ok_distance_check_op2_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'azimuth_i',
                column_name: 'azimuth',
                label: 'Azimuth',
                invalid_feedback: 'Azimuth must be within the range 0-360',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  min: 0,
                  max: 360,
                },
              },
              {
                raw_html: '<!-- Azimuth Check --> <div class="modal fade" id="azimuth_check_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="azimuth_check_Label_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="azimuth_check_Label_i">Azimuth Check</h5> </div> <div class="modal-body"> <p>Azimuth must be within the range 0 and 360.</p> <button type="button" id="ok_azimuth_check_i" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
            ],// inputs
          },
        ],// sections
      },
      {
        id: 'comments',
        header: 'Comments',
        sections: [
          {
            inputs: [
              {
                column_name: 'comment_1',
                label: 'Comment 1',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_2',
                label: 'Comment 2',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_3',
                label: 'Comment 3',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_custom',
                label: 'Custom comment',
                html_element: 'textarea',
                html_attributes: { rows: 3 },
              },
            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },

  /**
   * MORTALITY FORM
   */
  mortality: {
    table: 'mortality',
    header: 'Mortality form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
              {
                column_name: "TreeID",
                label: "TreeID",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                readonly: true,
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "tag",
                label: "Tag",
                html_element: "input",
                readonly: true,
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: 'species',
                label: "Species",
                html_element: 'select',
                disabled: true,
                default_option: 'No previous value...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'SpeciesList',
                },
              },
              {
                id: 'prev_status',
                column_name: 'status',
                label: "Previous status",
                html_element: 'select',
                disabled: true,
                default_option: 'No previous value...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'StatusList',
                },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Details',
        sections: [
          {
            inputs: [
              {
                id: 'main_stem_m',
                column_name: 'main_stem',
                label: 'Main stem (MS)',
                html_element: 'select',
                data_attributes: {
                  prev_action: 'prepend',
                  options_list: 'MainStemList',
                },
              },
              {
                id: 'rooting_m',
                column_name: 'rooting',
                label: 'Rooting',
                html_element: 'select',
                data_attributes: {
                  prev_action: 'prepend',
                  options_list: 'RootingList',
                },
              },
              {
                id: 'lean_angle_m',
                column_name: 'lean_angle',
                label: 'Lean angle (deg)',
                invalid_feedback: 'Lean angle must be within the range 0-120.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 0,
                  max: 120,
                },
                data_attributes: { prev_action: 'prepend' },
              },
              {
                raw_html: '<!-- Option 1 (must be in range 0 to 120) --> <div class="modal fade" id="lean_angl_check_op1_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="lean_angl_Label_op1_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="lean_angl_Label_op1_m">Lean Angle Check</h5> </div> <div class="modal-body"> <p>Lean angle must be within the range 0-120.</p> <button type="button" id="ok_lean_angl_op1_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 2 warning (leanAnglVal > 100)--> <div class="modal fade" id="lean_angl_check_op2_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="lean_angl_Label_op2_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="lean_angl_Label_op2_m">Lean Angle Check</h5> </div> <div class="modal-body"> <p>Lean angle > 100 deg - check it again.</p> <button type="button" id="ok_lean_angl_op2_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'crown_percentage_m',
                column_name: 'crown_percentage',
                label: 'Crown percentage',
                invalid_feedback: 'Crown % must be within the range 0-100.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: 0,
                  max: 100,
                },
              },
              {
                raw_html: '<!-- Option 1 (mainStemVal == 2 && crownPrctVal == 100) --> <div class="modal fade" id="crwn_pct_check_op1_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="crwn_pct_Label_op1_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="crwn_pct_Label_op1_m">Crown Percentage Check</h5> </div> <div class="modal-body"> <p>If main stem is 2 then crown % must be < 100%.</p> <button type="button" id="ok_crwn_pct_op1_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 2  (must be in range 0 to 100) --> <div class="modal fade" id="crwn_pct_check_op2_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="crwn_pct_Label_op2_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="crwn_pct_Label_op2_m">Crown Percentage Check</h5> </div> <div class="modal-body"> <p>Crown percentage must be within the range 0-100.</p> <button type="button" id="ok_crwn_pct_op2_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'tree_percentage_m',
                column_name: 'tree_percentage',
                label: 'Tree percentage',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                },
              },
              {
                raw_html: '<!-- Option 1  (treePctVal < crownPctVal) --> <div class="modal fade" id="tree_pct_check_op1_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op1_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op1_m">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>Tree % cannot be less then crown %.</p> <button type="button" id="ok_tree_pct_op1_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 2  (treePctVal === 100 && mainStemVal === 2) --> <div class="modal fade" id="tree_pct_check_op2_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op2_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op2_m">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>Tree % cannot be less than 100% if Main_Stem=2 (broken).</p> <button type="button" id="ok_tree_pct_op2_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 3 (treePctVal < 100 && mainStemVal === 1) --> <div class="modal fade" id="tree_pct_check_op3_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op3_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op3_m">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>If tree % < 100 then Main_Stem must be 2 or 3 (broken).</p> <button type="button" id="ok_tree_pct_op3_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                raw_html: '<!-- Option 4 (treePctVal < 0 || treePctVal > 100) --> <div class="modal fade" id="tree_pct_check_op4_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="tree_pct_Label_op4_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="tree_pct_Label_op4_m">Tree Percentage Check</h5> </div> <div class="modal-body"> <p>Tree percentage must be within the range 0-100.</p> <button type="button" id="ok_tree_pct_op4_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'ground_percentage_m',
                column_name: 'ground_percentage',
                label: 'Ground percentage',
                invalid_feedback: 'Ground percentage must be within the range -1 - 100.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: -1,
                  max: 100,
                },
              },
              {
                raw_html: '<!-- Ground Percentage Check --> <div class="modal fade" id="ground_pct_check_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="ground_pct_Label_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="ground_pct_Label_m">Ground Percentage Check</h5> </div> <div class="modal-body"> <p>Ground percentage must be within the range -1 - 100.</p> <button type="button" id="ok_ground_pct_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
              {
                id: 'support_percentage_m',
                column_name: 'support_percentage',
                label: 'Support percentage',
                invalid_feedback: 'Support percentage must be within the range -1 - 100.',
                html_element: 'input',
                html_attributes: {
                  type: 'number',
                  step: 0.01,
                  min: -1,
                  max: 100,
                },
              },
              {
                raw_html: '<!-- Support Percentage Check --> <div class="modal fade" id="support_pct_check_m" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="support_pct_Label_m" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="support_pct_Label_m">Ground Percentage Check</h5> </div> <div class="modal-body"> <p>Support percentage must be within the range -1 - 100.</p> <button type="button" id="ok_support_pct_m" class="btn btn-primary">Ok</button> </div> </div> </div> </div>',
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'conditions',
        header: 'Conditions',
        sections: [
          {
            inputs: [
              {
                column_name: 'condition_1',
                label: 'Condition 1',
                html_element: 'select',
                data_attributes: { options_list: 'ConditionList' },
              },
              {
                column_name: 'condition_2',
                label: 'Condition 2',
                html_element: 'select',
                data_attributes: { options_list: 'ConditionList' },
              },
              {
                column_name: 'condition_3',
                label: 'Condition 3',
                html_element: 'select',
                data_attributes: { options_list: 'ConditionList' },
              },
              {
                column_name: 'condition_4',
                label: 'Condition 4',
                html_element: 'select',
                data_attributes: { options_list: 'ConditionList' },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'proximate_predisposing',
        header: 'Proximate/Predisposing',
        sections: [
          {
            inputs: [
              {
                column_name: 'proximate',
                label: 'Proximate',
                html_element: 'select',
                data_attributes: { options_list: 'ProximatePredisposingList' },
              },
              {
                column_name: 'predisposing',
                label: 'Predisposing',
                html_element: 'select',
                data_attributes: { options_list: 'ProximatePredisposingList' },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'comments_previous',
        header: 'Previous comments',
        collapsable: true,
        collapsed: true,
        sections: [
          {
            inputs: [
              {
                column_name: 'comments',
                label: "Previous comments",
                disabled: true,
                html_element: "textarea",
                html_attributes: { rows: 3 },
                data_attributes: { prev_action: 'replace' },
              },
            ],// inputs
          },
        ],// sections
      },
      {
        id: 'comments',
        header: 'Comments',
        sections: [
          {
            inputs: [
              {
                column_name: 'comment_1',
                label: 'Comment 1',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_2',
                label: 'Comment 2',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_3',
                label: 'Comment 3',
                html_element: 'select',
                data_attributes: { options_list: 'CommentList' },
              },
              {
                column_name: 'comment_custom',
                label: 'Custom comment',
                html_element: 'textarea',
                html_attributes: { rows: 3 },
              },
            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },

  /**
   * STAND DOC FORM
   */
  stand_doc: {
    table: "stand_doc",
    header: "Stand Documentation Form",
    cards: [
      {
        id: "stand_info",
        header: "Stand Info.",
        collapsable: false,
        collapsed: null,
        sections: [
          {
            inputs: [
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
              },
              {
                column_name: "update_directions",
                label: "Update directions",
                html_element: "textarea",
                html_attributes: {rows: 3},
              },
              {
                column_name: "disturbance",
                label: "Disturbance",
                html_element: "textarea",
                html_attributes: {rows: 3},
              },
              {
                column_name: "plot_posts",
                label: "Plot posts",
                html_element: "textarea",
                html_attributes: {rows: 3},
              },
              {
                column_name: "hours_worked",
                label: "Update directions",
                html_element: "textarea",
                html_attributes: {rows: 3},
              },
              {
                column_name: "est_ingrowth",
                label: "Estimated ingrowth",
                html_element: "textarea",
                html_attributes: {rows: 3},
              },
            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },

};

Object.freeze(Utils);
