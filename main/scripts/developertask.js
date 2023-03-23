
define(function(require, exports, module) {
    let dialogBox = require("components/dialogbox");


// ****************************************************************************************************************
// DEFINITIONS ****************************************************************************************************
// ****************************************************************************************************************

    let taskIdNumber = 0;

// ****************************************************************************************************************
// DEVELOPER WORKSPACE ********************************************************************************************
// ****************************************************************************************************************

    /**
    * 
    * constructor
    * 
    */
    class DeveloperTask {
        constructor() {
            // properties
            this.devAssigned = undefined;
            this.isAssigned = false;
            this.isCollapsed = true;
            this.metaIsHidden = true;
            this.reqListCount = undefined;
            this.reviewerAssigned = undefined;
            this.task = undefined;

            // components
            this.attachmentPanel = undefined;
            this.collapseButton = undefined;
            this.editButton = undefined;
            this.expandButton = undefined;
            this.footerBar = undefined;
            this.notesPanel = undefined;
            this.reqList = undefined;
            this.taskContainer = undefined;
            this.taskHeader = undefined;
            this.taskMetaData = undefined;
        }
    }

    DeveloperTask.prototype.newTask = function() {
        return handleNew();
    }

    DeveloperTask.prototype.collapseTask = function() {

    }

    DeveloperTask.prototype.expandTask = function() {

    }


// ****************************************************************************************************************
// INTERNAL FUNCTIONS *********************************************************************************************
// ****************************************************************************************************************

    /**
     * 
     */
    async function handleNew() {
        let f = this;
        let devList = document.getElementById("list-1");
        f.taskContainer = document.createElement("div");
        f.taskContainer.setAttribute("class", "dev-task");
        f.taskContainer.setAttribute("id", generateNewTaskID());

        let newTaskDialogBox = new dialogBox();
        await newTaskDialogBox.createNewTaskDialog();

        return devList.appendChild(f.taskContainer);
    }

    /**
     * @param {DeveloperTask} f
     * @returns {newId} string
     */
    // Maybe move this in to a utilities module
    function generateNewTaskID() {
        taskIdNumber++;
        let newId = "task-" + taskIdNumber;
        return newId;
    }

    /**
     * 
     */
    function taskStyles() {

    }

// ****************************************************************************************************************
// INITIALIZATION *************************************************************************************************
// ****************************************************************************************************************

    return DeveloperTask;

});