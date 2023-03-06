
define(function(require, exports, module) {
    let developerTaskList = require("developertasklist");
    let inprocessTaskList = require("inprocesstasklist");
    let mergeTaskList = require("mergetasklist");
    let reviewTaskList = require("reviewtasklist");

// ****************************************************************************************************************
// DEFINITIONS ****************************************************************************************************
// ****************************************************************************************************************



// ****************************************************************************************************************
// DEVELOPER WORKSPACE ********************************************************************************************
// ****************************************************************************************************************

    /**
    * 
    * constructor
    * 
    */
    class DeveloperWorkspace {
        constructor() {

            //properties
            this.projectName = undefined;
            this.branchName = undefined;

            //components
            this.developerTaskList = undefined;
            this.inprocessTaskList = undefined;
            this.mergeTaskList = undefined;
            this.reviewTaskList = undefined;

        }
    }

    /**
     * 
     * @param {Boolean} value 
     */
    DeveloperWorkspace.prototype.showDeveloperTaskListPanel = function(value) {
        let showPanel = "none";
        if (value) {
            showPanel = "block";
        }
        document.getElementById("list-1").style.display = showPanel;
    }

    /**
     * 
     * @param {Boolean} value 
     */
    DeveloperWorkspace.prototype.showInprocessTaskListPanel = function(value) {
        let showPanel = "none";
        if (value) {
            showPanel = "block";
        }
        document.getElementById("list-2").style.display = showPanel;
    }

    /**
     * 
     * @param {Boolean} value 
     */
    DeveloperWorkspace.prototype.showMergeTaskListPanel = function(value) {
        let showPanel = "none";
        if (value) {
            showPanel = "block";
        }
        document.getElementById("list-3").style.display = showPanel;
    }

    /**
     * 
     * @param {Boolean} value 
     */
    DeveloperWorkspace.prototype.showReviewTaskListPanel = function(value) {
        let showPanel = "none";
        if (value) {
            showPanel = "block";
        }
        document.getElementById("list-4").style.display = showPanel;
    }

    /**
     * 
     * @param {projectName} name 
     */
    DeveloperWorkspace.prototype.setProjectName = function(name) {
        this.projectName = name;
        document.getElementById("projectName").innerHTML = name;
    }

    /**
     * 
     * @param {branchName} name 
     */
    DeveloperWorkspace.prototype.setBranchName = function(name) {
        this.branchName = name;
        document.getElementById("projectName").innerHTML += `: ${name}`;
    }


// ****************************************************************************************************************
// INTERNAL FUNCTIONS *********************************************************************************************
// ****************************************************************************************************************



// ****************************************************************************************************************
// INITIALIZATION *************************************************************************************************
// ****************************************************************************************************************

    return DeveloperWorkspace;

});