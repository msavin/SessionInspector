if (Meteor.isClient) {
	Session.set("Salad", ["Chicken","Peas","Tomatoes"]);
	Session.set("Meteor", "v1.0.1");
	Session.set("True", true);
	Session.set("False", false);
	Session.set("Null", null);
	Session.set("Object", {
		'value1': 'one',
		'value2': 'two',
		'value3': 'three',
	});
}
