sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("theapp.controller.View1", {
        onInit() {
        },
        onLogin: function () {
            var username = this.getView().byId("id1");
            var password = this.getView().byId("id2");

            var user = "admin";
            var pass = "ad12";

            //checks if the username input field is empty.
            //if true, shows an error message:"please enter username!"
            if (username.getValue() === '') {
                MessageBox.error("Please enter username!");
                return;
                //if the user name is not empty, this checks if the password field is empty
                //if true, shows an error message:"Please enter password"
            } else if (password.getValue() === '') {
                MessageBox.error("Please enter password!");
                //If both username and password are provided, it goes to the next step to validate the credentials
            } else {
                //Compares the entered username and password with pre-defined correct values (user and pass).
                //If they match,shows a success message:"Login uccessfull"
                if (username.getValue() === user && password.getValue() === pass) {
                    MessageBox.success("Login uccessfull!");
                    //If the entered username or password is incorrect,shows an error message:"Invalid username and Password" and stops further execution
                } else {
                    MessageBox.error("Invalid username and Password");
                    return;
                }
            }
        },
        onPassword: function () {
            //Get the password input field
            var oPasswordInput = this.getView().byId("id2");
            //Get the current type of the input field
            var currentType = oPasswordInput.getType();
            //Toggle between "Password" and "Text"
            //Toggle means to switch between two states. In this case, it refers to switching the password visibility between hidden and visible by clicking the icon 

            if (currentType === "Password") {
                oPasswordInput.setType("Text"); //show the password
                oPasswordInput.setValueHelpIconSrc("sap-icon://show"); //change icon to show

            } else {
                oPasswordInput.setType("Password"); //Hide the password
                oPasswordInput.setValueHelpIconSrc("sap-icon://hide"); //change icon to show
            }
        }
    });
});