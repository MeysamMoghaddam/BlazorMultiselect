// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function multiselectTag(tagId, EnableHTML, ButtonClass, InheritClass, ButtonWidth, ButtonContainer, DropRight, DropUp, SelectedClass, MaxHeight, IncludeSelectAllOption, IncludeSelectAllIfMoreThan, SelectAllText, SelectAllValue, SelectAllName, SelectAllNumber, SelectAllJustVisible, EnableFiltering, EnableCaseInsensitiveFiltering, EnableFullValueFiltering, EnableClickableOptGroups, EnableCollapsibleOptGroups, CollapseOptGroupsByDefault, FilterPlaceholder, FilterBehavior, IncludeFilterClearBtn, PreventInputChangeEvent, NonSelectedText, NSelectedText, AllSelectedText, NumberDisplayed, DisableIfEmpty, DisabledText, DelimiterText, IncludeResetOption, IncludeResetDivider, ResetText) {
    $('#' + tagId).multiselect({
        // allows HTML content
        enableHTML: EnableHTML,

        // CSS class of the multiselect button
        buttonClass: ButtonClass,

        // inherits the class of the button from the original select
        inheritClass: InheritClass,

        // width of the multiselect button
        buttonWidth: ButtonWidth,

        // container that holds both the button as well as the dropdown
        buttonContainer: ButtonContainer,

        // places the dropdown on the right side
        dropRight: DropRight,

        // places the dropdown on the top
        dropUp: DropUp,

        // CSS class of the selected option
        selectedClass: SelectedClass,

        // maximum height of the dropdown menu
        // if maximum height is exceeded a scrollbar will be displayed
        maxHeight: MaxHeight,

        // includes Select All Option
        includeSelectAllOption: IncludeSelectAllOption,

        // shows the Select All Option if options are more than ...
        includeSelectAllIfMoreThan: IncludeSelectAllIfMoreThan,

        // Lable of Select All
        selectAllText: SelectAllText,

        // the select all option is added as additional option within the select
        // o distinguish this option from the original options the value used for the select all option can be configured using the selectAllValue option.
        selectAllValue: SelectAllValue,

        // control the name given to the select all option
        selectAllName: SelectAllName,

        // if true, the number of selected options will be shown in parantheses when all options are seleted. 
        selectAllNumber: SelectAllNumber,

        // setting both includeSelectAllOption and enableFiltering to true, the select all option does always select only the visible option
        // with setting selectAllJustVisible to false this behavior is changed such that always all options (irrespective of whether they are visible) are selected
        selectAllJustVisible: SelectAllJustVisible,

        // enables filtering
        enableFiltering: EnableFiltering,

        // determines if is case sensitive when filtering
        enableCaseInsensitiveFiltering: EnableCaseInsensitiveFiltering,

        // enables full value filtering
        enableFullValueFiltering: EnableFullValueFiltering,

        // if true, optgroup's will be clickable, allowing to easily select multiple options belonging to the same group
        enableClickableOptGroups: EnableClickableOptGroups,

        // enables collapsible OptGroups
        enableCollapsibleOptGroups: EnableCollapsibleOptGroups,

        // collapses all OptGroups on init
        collapseOptGroupsByDefault: CollapseOptGroupsByDefault,

        // placeholder of filter filed
        filterPlaceholder: FilterPlaceholder,

        // possible options: 'text', 'value', 'both'
        filterBehavior: FilterBehavior,

        // includes clear button inside the filter filed
        includeFilterClearBtn: IncludeFilterClearBtn,

        // prevents input change event
        preventInputChangeEvent: PreventInputChangeEvent,

        // message to display when no option is selected
        nonSelectedText: NonSelectedText,

        // message to display if more than numberDisplayed options are selected
        nSelectedText: NSelectedText,

        // message to display if all options are selected
        allSelectedText: AllSelectedText,

        // determines if too many options would be displayed
        numberDisplayed: NumberDisplayed,

        // disables the multiselect if empty
        disableIfEmpty: DisableIfEmpty,

        // message to display if the multiselect is disabled
        disabledText: DisabledText,

        // the separator for the list of selected items for mouse-over
        delimiterText: DelimiterText,

        // includes Reset Option
        includeResetOption: IncludeResetOption,

        // includes Rest Divider
        includeResetDivider: IncludeResetDivider,

        // lable of Reset  Option
        resetText: ResetText,

        onChange: function (element, checked) {
            var value = $('#' + tagId).val();
            DotNet.invokeMethodAsync('BlazorMultiselect', 'onMultiChangeValue', value );
        },
        onSelectAll: function () {
            var value = $('#' + tagId).val();
            DotNet.invokeMethodAsync('BlazorMultiselect', 'onMultiChangeValue', value);
        }

    });
}
