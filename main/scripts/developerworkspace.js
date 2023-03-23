
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

    DeveloperWorkspace.prototype.addNewTask = function() {
        return developerTaskList.prototype.addNewTask();
    }

    DeveloperWorkspace.prototype.openMenu = function() {
        openMenu();
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



// ****************************************************************************************************************
// INTERNAL FUNCTIONS *********************************************************************************************
// ****************************************************************************************************************

    function openMenu() {
        let menuItems = document.getElementById("menu-items");
        let display = menuItems.style.display;
        if (display == "grid") {
            menuItems.style.display = "none";
        } else {
            menuItems.style.display = "grid";
        }
    }

// ****************************************************************************************************************
// INITIALIZATION *************************************************************************************************
// ****************************************************************************************************************

    return DeveloperWorkspace;

});