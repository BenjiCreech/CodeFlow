
define(function(require, exports, module) {



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
            this.task = undefined;
            this.taskContainer = undefined;
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

        await showNewTaskDialogBox();

        return devList.appendChild(f.taskContainer);
    }

    /**
     * 
     */
    async function showNewTaskDialogBox() {
        let newDialog = document.getElementById('new-dialog');
        await newDialog.showModal();
    }

    /**
     * @param {DeveloperTask} f
     * @returns {newId} string
     */
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