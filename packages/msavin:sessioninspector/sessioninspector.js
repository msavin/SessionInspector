
if (Meteor.isClient) {

    var SessionChecker = {
        null: function (session) {
            if (Session.get(session) === null) {
                return true;
            }
        },
        true: function (session) {
            if (Session.get(session) === true) {
                return true;
            }
        },
        false: function (session) {
            if (Session.get(session) === false) {
                return true;
            }
        },
        array: function(session) {

            var session  = Session.get(session),
                isArray  = $.isArray(session);

            if (isArray) {
                return true;
            }
        },
        object: function () {
            // 
        } 
    }

    Template.body.helpers({
        SessionItems: function () {
            var SessionKeys = Object.getOwnPropertyNames(Session.keys)
            return SessionKeys;
        },
        value: function () {
            
            if (SessionChecker.null(this)) {
                return '<i>null</i>';
            } else

            if (SessionChecker.true(this)) {
                return '<i>true</i>';
            } else 

            if (SessionChecker.false(this)) {
                return '<i>false</i>';
            } else 

            if (SessionChecker.array(this)) {
                return "[" + Session.get(this) + "]";
            } else 

            if (SessionChecker.object(this)) {
                // fuck it
            }

            return Session.get(this);
        }
    });

    Template.body.events({
        'click .SessionInspector_row': function () {
            if (typeof(Session.get(this)) === "object") {
                console.log(Session.get(this));
            } else {
                var oldValue = Session.get(this);
                
                
                var newValue = prompt("What would you like to change the value of this Session variable to?");
                
                if (newValue === "") {
                    Console.log("SessionInspector: Prompt entry cannot be empty. For null value, enter null.")
                } else {
                    // Detect user entry

                    if (newValue === "false") {
                        Session.set(this, false);
                    } else if (newValue === "true") {
                        Session.set(this, true);
                    } else if (newValue === "null") {
                        Session.set(this, null);
                        newValue = "null";
                    } else { 
                        Session.set(this, newValue);
                    }
                    
                    // Alert user
                    console.log("SessionInspector: Session " + this + " changed from " + oldValue + " to " + newValue + ".");
                }  
            }
        },
        'click .SessionInspector_header': function () {
            $("#SessionInspector").hide();
        }
    });

}