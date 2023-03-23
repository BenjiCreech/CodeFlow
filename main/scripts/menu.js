
define(function(require, exports, module) {
    let developerTaskList = require("developertasklist");
    let inprocessTaskList = require("inprocesstasklist");
    let mergeTaskList = require("mergetasklist");
    let reviewTaskList = require("reviewtasklist");

// ****************************************************************************************************************
// DEFINITIONS ****************************************************************************************************
// ****************************************************************************************************************



// ****************************************************************************************************************
// MENU ***********************************************************************************************************
// ****************************************************************************************************************

    /**
    * 
    * constructor
    * 
    */
    class Menu {
        constructor() {
            //properties

            //components

        }
    }

    Menu.prototype.closeMenus = function(e) {
        closeMenus(e);
    }

    Menu.prototype.closeThemes = function() {
        let menuItems = document.getElementById("menu-items");
        let themes = document.getElementById("theme-container");
        menuItems.style.visibility = "hidden";
        themes.style.visibility = "hidden";
    }

    Menu.prototype.openMenu = function() {
        openMenu();
    }

    Menu.prototype.showThemes = function() {
        openThemesDropdown();
    }

// ****************************************************************************************************************
// INTERNAL FUNCTIONS *********************************************************************************************
// ****************************************************************************************************************

    function closeMenus(e) {
        let menuItems = document.getElementById("menu-items");
        let themes = document.getElementById("theme-container");
        let themeMenuItem = document.getElementById("menu-item-theme");
        let menuButton = document.getElementById("menu-btn");

        // If Menu is closed bail out
        if (menuItems.style.visibility != "visible") {
            return;
        }

        if (menuButton.contains(e.target)) {
            themes.style.visibility = "hidden";
        }

        if (!menuItems.contains(e.target) && !themes.contains(e.target) && !menuButton.contains(e.target)) {
            menuItems.style.visibility = "hidden";
            themes.style.visibility = "hidden";
        }

        if (menuItems.contains(e.target) && !themeMenuItem.contains(e.target)) {
            themes.style.visibility = "hidden";
        }
    }

    function openMenu() {
        let menuItems = document.getElementById("menu-items");
        let value = menuItems.style.visibility;

        if (value == "visible") {
           return menuItems.style.visibility = "hidden";
        } else {
           return menuItems.style.visibility = "visible";
        }
    }

    function openThemesDropdown() {
        let themes = document.getElementById("theme-container");
        let value = themes.style.visibility;
        if (value == "visible") {
            themes.style.visibility = "hidden";
        } else {
            themes.style.visibility = "visible";
        }
    }

// ****************************************************************************************************************
// INITIALIZATION *************************************************************************************************
// ****************************************************************************************************************

    return Menu;

});