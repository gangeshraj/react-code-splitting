
function throttle(fn, wait) {
    var time = Date.now();
    // console.log(" toop going");
    return function() {
    //   console.log("going");
      if (((time + wait - Date.now()) < 0)) {
        fn();
        time = Date.now();
      }
    }
  }


export let onScrollChange = (cb,delay)=>{
    return throttle(cb,delay);
};



export let onSizeChange = (cb,delay)=>{
    return throttle(cb,delay);
};

