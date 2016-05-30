class ImageLoader {

  constructor() {
    this._store ={};
  }

  load(images, callback) {

     let total = Object.keys(images).length;

     let count = 0;

      Object.getOwnPropertyNames(images).forEach((key) => {
      let url = images[key];

      let img = new Image();
      img.src = url;

      img.onload = () => {
        console.log('load ' + count);
        this._store[key] = img;

        count ++;
        if(count === total ) {
          callback();

        }
      }

      img.onerror = (e) => {
          callback(e);
      }
    });

  }

}



let images = {
  img1:'https://images.all-free-download.com/images/graphiclarge/daisy_pollen_flower_220533.jpg',
  img2:'https://pixabay.com/static/uploads/photo/2015/02/10/21/28/flower-631765_960_720.jpg',
  img3:'https://static.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg',

}

const loader = new ImageLoader();
loader.load(images, () => {
  console.log('loaded');
})

module.exports = ImageLoader;
//asychronize programming
//callback will be called after all images loaded in this function


//Promises
//return promise
//show the progress bar
//loader.on('progress', (current, total) = > {
//   console.log()
// })
//event emiter event class
//unit test, load proper /abstact image, mocks,spies, don't use image itself