class ImageLoader {

  constructor() {
    this._store ={};
  }

  load(images, callback) {
     let total = Object.keys(images).length;

     let count = 0;

    Object.getOwnPropertyNames(images).forEach((key) => {
      let url = images(key);

      let img = new Image();
      img.src= url;

      img.onload = () => {
        this._store[key] = img;

        count ++;
        if(count === total ) {
          callback();
          console.log('loaded');
        }
      }

      img.onerror = (e) => {
          cd(e);
      }
    })

  }

}


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