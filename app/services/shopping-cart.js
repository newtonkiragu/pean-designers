import Ember from 'ember';

export default Ember.Service.extend({
	items: [],
	app(item) {
		this.get('item').pushObject(item);
	}
});
