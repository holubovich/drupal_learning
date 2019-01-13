/**
 * @file plugin.js
 */

CKEDITOR.plugins.add('widgetdropcap', {
  icons: 'widgetdropcap',
  init: function (editor) {
    'use strict';
    editor.addCommand('widgetdropcap', new CKEDITOR.dialogCommand('widgetdropcapDialog'));
    editor.ui.addButton('widgetdropcap', {
      label: 'Insert Dropcap',
      command: 'widgetdropcap',
      icon: this.path + 'icons/widgetdropcap.png',
      toolbar: 'insert'
    });
    CKEDITOR.dialog.add('widgetdropcapDialog', this.path + 'dialogs/widgetdropcap.js');
  }
});
