
define(function(require) {
    let devWorkspace = require("developerworkspace");
    let menu = require("menu")


// ****************************************************************************************************************
// SETUP SITE *****************************************************************************************************
// ****************************************************************************************************************

    let newMenu = new menu();

    document.body.addEventListener("mouseup", e => {
        newMenu.closeMenus(e);
    })

    let menuButton = document.getElementById("menu-btn");
    menuButton.addEventListener("click", newMenu.openMenu);

    let themeMenuItem = document.getElementById("menu-item-theme");
    themeMenuItem.addEventListener("click", newMenu.showThemes);

    //Setup Themes
    const switcher = document.querySelector('#theme-switcher');
    const doc = document.firstElementChild;

    switcher.addEventListener('input', e => {
        setTheme(e.target.value);
    })

    const setTheme = theme => {
        doc.setAttribute('color-scheme', theme);
        newMenu.closeThemes();
    }


    // change to auto after development and move 'checked' in html    
    setTheme("light");

// ****************************************************************************************************************
// SETUP DEVELOPER WORKSPACE **************************************************************************************
// ****************************************************************************************************************

    let newWorkspace = new devWorkspace();
    newWorkspace.setProjectName("Code Flow Project");

    newWorkspace.showDeveloperTaskListPanel(true);

    let newButton = document.getElementById("new-dev-btn");
    newButton.addEventListener("click", newWorkspace.addNewTask);









    return newWorkspace;
    
});
