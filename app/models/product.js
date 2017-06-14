import DS from 'ember-data';

export default DS.Model.extend({
	  // id: DS.attr(),
      name:DS.attr(),
      brandedName: DS.attr(),
      brandedName: DS.attr(),
      unbrandedName: DS.attr(),
      currency: DS.attr(),
      priceLabel: DS.attr()
});
