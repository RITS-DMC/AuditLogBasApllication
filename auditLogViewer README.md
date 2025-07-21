**1. Clone the auditLogViewer Folder**

    - Clone the auditLogViewer Folder into the following path inside your plugin project: (yourPlugin/webapp/auditLogViewer)
    - Open and Identify data-name in your plugin’s index.html file.
    - Identify the value of the data-name attribute (e.g., rits.extension.plugin). This will be used in the upcoming search-and-replace operations
    
**2. Search and Replace in the Cloned Folder**

    - Right-click on the cloned folder auditLogViewer.
    - Select "Find in Folder".
    - Perform the following search-and-replace operations:
        i. Replace 1:
            - Use this in the Search field: rpm.custom.plugins
            - Use this in the replace field: rits.extension.plugin
            - Click "Replace All Icon".
        ii. Replace 2:
            - Use this in the Search field: rpm/custom/plugins
            - Convert your data-name (e.g., rits.extension.plugin) to a folder path by replacing dots . with slashes / (e.g., rits/extension/plugin).
            - Use this in the replace field: rits/extension/plugin
            - Click "Replace All Icon".
            
**3. Update component.json**

    - Open the file: yourPlugin/webapp/designer/component.json
    - Inside the components list, add an entry for the plugin with the following structure:
    
          {
            "id": "auditLogViewer",
            "type": "VIEW_PLUGIN",
            "allowMultipleInstances": true,
            "name": "rpm.custom.plugins.auditLogViewer",
            "propertyEditor": "rpm.custom.plugins.auditLogViewer.builder.PropertyEditor",
            "i18n": "rpm.custom.plugins.auditLogViewer.i18n.i18n",
            "supportedPodTypes": ["OTHER"]
          }
          
    **Important Note: After pasting the above JSON:
          i. Ensure provider matches the correct plugin path. It should be: <data-name with yourPlugin name>. For example, if your data-name is rits.extension.plugin, then it becomes: rits.extension.plugin.auditLogViewer. Same like this need to do it for propertyEditor, i18n also.**
          
**4. Build and Deploy Your Plugin**

      - Build your plugin project using your standard build process.
      - Deploy it to your target environment.
      
