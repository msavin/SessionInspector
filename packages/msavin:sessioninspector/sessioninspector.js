if (Meteor.isClient) {
    


    Object.observe(Session.keys, function (changes) { 
        var SessionInspector_Keys = Object.getOwnPropertyNames(Session.keys);
        Session.set("SessionInspector", SessionInspector_Keys);
    });

    
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
        SessionInspector_supported: function () {
            if (Session.get("SessionInspector")) {
                return true;
            }
        },
        SessionItems: function () {
            // Hide the SessionInspector session
            var array = Session.get("SessionInspector");

            var i = array.indexOf("SessionInspector");
            if (i != -1) {
                array.splice(i, 1)
            }
            // Return just the developers sessions
            return array;
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
            
            // var value = prompt("What would you like to change the value of this Session variable to?");
            
            // if (value === "" || value === null || value === undefined)  {
            //     console.log("SessionInspector: Prompt entry cannot be empty. To set null value, enter null.");
            // } else {

            //     switch (value) {
            //         case "false":
            //             Session.set(this, false);
            //             break;
            //         case "true":
            //             Session.set(this, true);
            //             break;
            //         case "null":
            //             Session.set(this, null);
            //             value = "null";
            //             break;
            //         default:
            //             Session.set(this, value);
            //             break;
            //     }
            // }
            console.log(Session.get(this))
                
        },
        'click .SessionInspector_header': function () {
            $("#SessionInspector").hide();
        }
    });

}