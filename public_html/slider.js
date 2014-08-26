
/*  Purpose: To create a responsive slider, that changes
 * slide at a set interval. When it reaches the end of the set
 * it goes back to the first slide.
 * 
 *   Additional Thoughts:
 *   Generate buttons automatically
 *   It should expand and contract without need for further coding  */




// Establish the variables

     $('.slider').each(function(){
   
    // Variables
 
    var timeout,                                            // Timer
     $this = $(this),                                       // Current Slider
     $group = $this.find('.slide-group'),                   // Selects the slide group
     buttonArray = [],
     currentIndex = 0,                                      // Sets the currentIndex to 0
     $slides = $this.find('.slide'),                        // Selects a slide
     $img = $this.find('.slideimg');                        // Selects all the images           
     
     // Finds the width of the slide-group, by multiplying
     // the no. of slides by 100
     $group.width($slides.length * 100 + "%");         
       
     // Finds the size of each image.
     $img.width( (100 / $slides.length + "%") );
    
    function move(newIndex){
       
       
        advance();
       if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }
        
       
        $group.css("transform", "translateX(" +    Math.min(Math.max(parseInt(newIndex), 0), $slides.length - 1) * -(100 / $slides.length) + "%)"); 
        currentIndex = Math.min(Math.max(parseInt(newIndex), 0),$slides.length - 1);
        console.log(currentIndex);
        console.log(newIndex);
    }
 
    
    function advance(){
         if (timeout){
            
            clearTimeout(timeout);
            timeout = null;
            
        }
       
        
        timeout = setTimeout(function(){
     
     
     if(currentIndex < ($slides.length - 1)){                                               //If not the last slide
         move(currentIndex + 1);
                                                                               
     }
     else{
         move(0);                                                                            // Reset
     }
        
 },3000);                                                                                   // Every 3 seconds

    }
    
    advance();
     
    var myElement = document.getElementById('slider');
    var hammertime = new Hammer(myElement);
   
    hammertime.on('swiperight', function (ev) {
        console.log(ev);
        move(currentIndex - 1);
   
    });
    
    hammertime.on('swipeleft', function () {
       
        move(currentIndex + 1);
    });
    
});

