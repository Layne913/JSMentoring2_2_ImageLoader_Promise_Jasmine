 "use strict";
class ImageLoader {

  constructor() {
    this._store = {};
    this._count = 1;
  }

  load(images, image) {
    let total = Object.keys(images).length;
    let promise;
      Object.getOwnPropertyNames(images).forEach((key, index) => {

        promise = new Promise((resolve, reject) => {
        let url = images[key];
        let img = image;
        img.src = url;
        this._store[key] = img;

        img.onload = () => {
          resolve(this._count);
        }

        img.onerror = (err) => {
            reject(err);
        }
       });

    promise.then((val) => {
          if (val === total) {
            this.onComplete();
          } else {
            this.onLoading(val, total);
          }


        })
        .catch((err) => {
          console.log(err);
        })
    });

  }



 onComplete() {
    console.log("loading  Completed");
 }

 onLoading(count, total) {
    console.log("currently completed loading " + count + " out of" + total);
    this._count ++;
 }

 getCount() {
  return this._count;
 }

 getStore() {
  return this._store;
 }
}

let images = {
  img1:'https://pixabay.com/static/uploads/photo/2015/02/10/21/28/flower-631765_960_720.jpg',
  img2:'https://static.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg'
}

module.exports = ImageLoader;

// let browserImage  = new Image();
// const loader = new ImageLoader();
// loader.load(images, browserImage)