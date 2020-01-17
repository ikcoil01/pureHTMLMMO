function getCurrentPosition(){
    if(firstRun){
      init();
      firstRun=false;
    }
      var currentPostions=document.body.style.backgroundPosition.split(" ");
    console.log(currentPostions);
      return currentPostions;
  }