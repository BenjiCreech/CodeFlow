
define(function(require) {

    console.log("The beginning of this module loaded");
    let devWorkspace = require("./workspace/developerworkspace");
    let newWorkspace = new devWorkspace();
    newWorkspace.setProjectName("Code Flow Project");
    newWorkspace.setBranchName("master")

    return newWorkspace;
    
   console.log("The end of this module loaded");
});
