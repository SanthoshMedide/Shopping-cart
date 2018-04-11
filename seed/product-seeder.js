var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
var product = [
    new Product({
        imagePath: 'http://rapidmne.weebly.com/uploads/5/6/5/8/5658146/1136211_orig.jpg',
        title: 'A cute cat toy',
        description: 'Cant find better',
        price: 10
    }),
    new Product({
        imagePath: 'http://rapidmne.weebly.com/uploads/5/6/5/8/5658146/1136211_orig.jpg',
        title: 'A cute cat toy',
        description: 'Cant find better',
        price: 10
    }),
    new Product({
        imagePath: 'http://rapidmne.weebly.com/uploads/5/6/5/8/5658146/1136211_orig.jpg',
        title: 'A cute cat toy',
        description: 'Cant find better',
        price: 10
    })
];
var done =0;

for(var i=0;i<product.length;i++){
    product[i].save(function(err,result){
        done++;
        if(done === product.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}
