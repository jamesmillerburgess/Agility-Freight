import { Template } from 'meteor/templating';

import './file-field.html';
import './file-field.less';

Template.fileField.onRendered(function onRendered() {
  $(this.find('.value'))[0].innerText = this.data.value;
});