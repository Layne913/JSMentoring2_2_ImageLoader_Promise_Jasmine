 "use strict";
 let jsdom = require("jsdom");

let ImageLoader = require('./promiseImageLoader');
let loader  = require('./loader');


describe('ImageLoader', () => {
  // it('testing the jasmine', () => {
  //   console.log('testing');
  //   expect(loader.getCount()).toEqual(1);
  // });

  // it('checking if the onloading function has been called', (done) => {
  //   let ll  = new loader()
  //   spyOn(ll, 'bindImageToDom');
  //   jsdom.env("https://iojs.org/dist/", ["http://code.jquery.com/jquery.min.js"], function(err, window) {
  //       // let image  = new window.Image();
  //      ll.loadImages(window);
  //      setTimeout(() => {
  //      expect(ll.bindImageToDom).toHaveBeenCalled();
  //     done();

  //      })

  //   });
  // }, 3000);

 it('checking if images have been saved into the _store', (done) => {
    let imageLoader = new ImageLoader()

    let images = {
      img1:'https://pixabay.com/static/uploads/photo/2015/02/10/21/28/flower-631765_960_720.jpg',
      img2:'https://static.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg'
    }

    spyOn(imageLoader, 'onComplete');

    jsdom.env("https://iojs.org/dist/", ["http://code.jquery.com/jquery.min.js"], function(err, window) {
       let image  = new window.Image();
       imageLoader.load(images, image);
       setTimeout(() => {
        expect(Object.keys(imageLoader.getStore()).length).toEqual(2);
      done();
       })
    });
  }, 3000);
})