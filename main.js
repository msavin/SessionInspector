if (Meteor.isClient) {
	Session.set("Array", ["Chicken","Peas","Tomatoes"]);
	Session.set("String", "v1.0.1");
	Session.set("Number", 43);
	Session.set("True", true);
	Session.set("False", false);
	Session.set("Null", null);
	Session.set("Object", {
		'value1': 'one',
		'value2': 'two',
		'value3': 'three',
	});
}
