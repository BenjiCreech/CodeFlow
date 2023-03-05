
define(function(require, exports, module) {

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
    DeveloperWorkspace.prototype.addDeveloperTaskListPanel = function(value) {

    }

    /**
     * 
     * @param {Boolean} value 
     */
    DeveloperWorkspace.prototype.addInprocessTaskListPanel = function(value) {

    }

    /**
     * 
     * @param {Boolean} value 
     */
    DeveloperWorkspace.prototype.addMergeTaskListPanel = function(value) {

    }

    /**
     * 
     * @param {Boolean} value 
     */
    DeveloperWorkspace.prototype.addReviewTaskListPanel = function(value) {

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

    return DeveloperWorkspace

});