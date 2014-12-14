if (Meteor.isClient) {

    var SessionChecker = {
        null: function (session) {
            if (Session.get(session) === null) {
                return true;
            }
        },
        boolean: function (session) {
            if (typeof Session.get(session) === "boolean") {
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
        number: function (session) {
            if (typeof Session.get(session) === "number") {
                return true;
            }
        },
        string: function (session) {
            if (typeof Session.get(session) === "string") {
                return true;
            }  
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

            if (SessionChecker.boolean(this)) {
                return '<i>' + Session.get(this) + '</i>';
            } else 

            if (SessionChecker.number(this)) {
                return Session.get(this);
            } else 


            if (SessionChecker.string(this)) {
                return '"' + Session.get(this) + '"';
            } else 

            if (SessionChecker.array(this)) {
                return "[" + Session.get(this) + "]";
            } else {

                return "Object";
            } 
        }
    });

    Template.body.events({
        'click .SessionInspector_row': function () {
            var oldValue = Session.get(this);
            var newValue = prompt("What would you like to change the value of this Session variable to?");
            
            if (newValue === "" || newValue === null || newValue === undefined)  {
                console.log("SessionInspector: Prompt entry cannot be empty. For null value, enter null.");
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
        },
        'click .SessionInspector_header': function () {
            $("#SessionInspector").hide();
        }
    });

}