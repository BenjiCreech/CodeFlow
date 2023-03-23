
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
    class DialogBox {
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

    DialogBox.prototype.createNewTaskDialog = async function() {
        await showNewTaskDialogBox();
    }

// ****************************************************************************************************************
// INTERNAL FUNCTIONS *********************************************************************************************
// ****************************************************************************************************************

    /**
     * 
     */
    function buildTaskDialogLayout() {
        let container = document.getElementById("new-form-article");

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("for", "task-title");
        titleLabel.setAttribute("id", "task-title-label");
        titleLabel.innerHTML = "Task Title:";
        let s = titleLabel.style;
        s.marginLeft = "10px";
        s.marginRight =  "20px";
        s.width = "20%";
        s.fontSize = "16px";


        let titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "task-title");
        titleInput.setAttribute("name", "task-title");
        s = titleInput.style;
        s.marginRight = "10px";
        s.width = "80%";
        s.fontSize = "12px";
        s.backgroundColor = "var(--surface-3)";
        s.border = "1px solid var(--brand)";

        container.appendChild(titleLabel);
        container.appendChild(titleInput);

    }

    /**
     * 
     */
    async function showNewTaskDialogBox() {
        let newDialog = document.getElementById('new-dialog');
        await newDialog.showModal();
        buildTaskDialogLayout();
    }

// ****************************************************************************************************************
// INITIALIZATION *************************************************************************************************
// ****************************************************************************************************************

    return DialogBox;

});