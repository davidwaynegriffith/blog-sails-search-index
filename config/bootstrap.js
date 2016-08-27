/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  var products = [{ brand: 'Apple', model: 'Macbook Air', price: 1299, description: 'This is a macbook air...' },{ brand: 'Apple', model: 'Macbook Pro', price: 1999, description: 'This is a macbook pro...' },{ brand: 'Apple', model: 'iPad Pro', price: 1299, description: 'This is an iPad Pro...' }];
  var reviews = [{ title: 'Review of the Apple Macbook Air', author: 'David G', body: 'This macbook air is the greatest thing...' }];

  Product.create(products).exec(function (err, products) {
    if (err) console.log(err);
    console.log('Products created:', products);
    Review.create(reviews).exec(function (err, reviews) {
      if (err) console.log(err);
      console.log('Reviews created:', reviews);
      cb();
    });
  });

};
