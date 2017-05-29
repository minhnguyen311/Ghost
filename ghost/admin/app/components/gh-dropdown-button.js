import Component from 'ember-component';
import DropdownMixin from 'ghost-admin/mixins/dropdown-mixin';
import injectService from 'ember-service/inject';

export default Component.extend(DropdownMixin, {
    tagName: 'button',
    attributeBindings: ['href', 'role'],
    role: 'button',

    // matches with the dropdown this button toggles
    dropdownName: null,

    dropdown: injectService(),

    // Notify dropdown service this dropdown should be toggled
    click(event) {
        this._super(event);
        this.get('dropdown').toggleDropdown(this.get('dropdownName'), this);

        if (this.get('tagName') === 'a') {
            return false;
        }
    }
});
