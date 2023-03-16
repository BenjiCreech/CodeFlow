
define(function(require) {
    let devWorkspace = require("developerworkspace");


    //Setup Developer Workspace
    let newWorkspace = new devWorkspace();
    newWorkspace.setProjectName("Code Flow Project");

    newWorkspace.showDeveloperTaskListPanel(true);

    let newButton = document.getElementById("new-dev-btn");
    newButton.addEventListener("click", newWorkspace.addNewTask);


//Setup Themes
const switcher = document.querySelector('#theme-switcher')
const doc = document.firstElementChild

switcher.addEventListener('input', e => {
    setTheme(e.target.value);
})

const setTheme = theme =>
  doc.setAttribute('color-scheme', theme)

















    return newWorkspace;
    
});
