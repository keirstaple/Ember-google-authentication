import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  post: DS.belongsTo('post')
});
