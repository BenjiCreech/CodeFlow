

requirejs.config({
    baseUrl: 'main',
    paths: {
        //from menu
        developerworkspace: "./menu/developerworkspace",

        //from components
        developertask: "./components/developertask",
        inprocesstask: "./components/inprocesstask",
        mergetask: "./components/mergetask",
        reviewtask: "./components/reviewtask",

        //from workspace
        developertasklist: "./workspace/developertasklist",
        inprocesstasklist: "./workspace/inprocesstasklist",
        mergetasklist: "./workspace/mergetasklist",
        reviewtasklist: "./workspace/reviewtasklist"
    }
});

define(function(require, exports, module) {
    let devWorkspace = require("./menu/developerworkspace.js");

    let newWorkspace = new devWorkspace();
    newWorkspace.setProjectName("Code Flow Project");
    newWorkspace.setBranchName("master")
});
