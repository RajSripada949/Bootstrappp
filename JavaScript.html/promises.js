const prom = new Promise((resolve.reject)={
    setTimeout(() => {
      resolve("Promise fulfilled after 2 seconds");
    
    },2000);
  })
  
  myPromise
      .then(mess)=>console.log(mess))
      .catch((error) => {
        console.log(srror+"Failing");
      });