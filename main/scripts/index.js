
define(function(require) {
    let devWorkspace = require("developerworkspace");


    //Setup Developer Workspace
    let newWorkspace = new devWorkspace();
    newWorkspace.setProjectName("Code Flow Project");
    newWorkspace.setBranchName("developer-workspace")

    newWorkspace.showDeveloperTaskListPanel(false)

















    return newWorkspace;
    
});
