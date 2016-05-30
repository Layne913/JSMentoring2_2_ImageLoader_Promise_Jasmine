'use strict';
module.exports =  class Loader {

constructor () {
 this.counter = 0;

}
 loadImages(window) {
  let counter  = 0;

    this.getImageUrls().then((urls) => {
        urls.forEach((u) => {
           let img  = new window.Image();

        img.onload = () => {
         };
         this.bindImageToDom(img, u);

        });

    console.log('Second');

    });

    console.log('First')
}

 bindImageToDom(img, src){
  this.counter++;
  console.log(this.counter);
  img.src = src;
}


 getImageUrls () {
  return new Promise(function(resolve, reject) {
    let images = [
    'https://pixabay.com/static/uploads/photo/2015/02/10/21/28/flower-631765_960_720.jpg',
  'https://static.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg'
  ]

  resolve(images);
  })
}

}
// new Loader().loadImages();


// describe('when getting all images' , function {

//   it('should return two ursl', (done) => {

//       getImageUrls()
//         .then((data) => {
//             expect(data.length).equals(2);
//         })
//   } )
// })



