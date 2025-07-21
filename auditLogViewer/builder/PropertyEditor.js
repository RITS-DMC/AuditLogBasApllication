sap.ui.define([
    "sap/ui/model/resource/ResourceModel",
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function (ResourceModel, PropertyEditor) {
    "use strict";
    var oFormContainer;
    return PropertyEditor.extend( "rpm.custom.plugins.auditLogViewer.builder.PropertyEditor" ,{

		constructor: function(sId, mSettings){
			PropertyEditor.apply(this, arguments);
			
			this.setI18nKeyPrefix("customComponentListConfig.");
			this.setResourceBundleName("rpm.custom.plugins.auditLogViewer.i18n.builder");
			this.setPluginResourceBundleName("rpm.custom.plugins.auditLogViewer.i18n.i18n");
		},
		addPropertyEditorContent: function(oPropertyFormContainer){
			var oData = this.getPropertyData();
			this.addInputField(oPropertyFormContainer, "title", oData);
            
            oFormContainer = oPropertyFormContainer;
		},
		getDefaultPropertyData: function(){
			return  {
                        "title" : "Title"
			        };
		}
	});
});