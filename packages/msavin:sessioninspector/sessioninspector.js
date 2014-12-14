if (Meteor.isClient) {

    var SessionChecker = {
        null: function (value) {
            if (value === null) {
                return true;
            }
        },
        boolean: function (value) {
            if (typeof value === "boolean") {
                return true;
            }
        },
        array: function(value) {
            if ($.isArray(value)) {
                return true;
            }
        },
        number: function (value) {
            if (typeof value === "number") {
                return true;
            }
        },
        string: function (value) {
            if (typeof value === "string") {
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
            
            var value = Session.get(this);

            switch (true) {
                case SessionChecker.null(value):
                    return '<i>null</i>';
                    break;
                case SessionChecker.boolean(value):
                    return '<i>' + value + '</i>';
                    break;
                case SessionChecker.number(value):
                    return value;
                    break;
                case SessionChecker.string(value):
                    return '"' + value + '"';
                    break;
                case SessionChecker.array(value):
                    return "[" + value + "]";
                    break;
                default:
                    return "<i>Object</i>";
                    break;
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

                switch (newValue) {
                    case "false":
                        Session.set(this, false);
                        break;
                    case "true":
                        Session.set(this, true);
                        break;
                    case "null":
                        Session.set(this, null);
                        newValue = "null";
                        break;
                    default:
                        Session.set(this, newValue);
                        break;
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