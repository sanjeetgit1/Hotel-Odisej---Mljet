function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

function hoteling(){
     var t1 =gsap.timeline();
t1.from(" .center ",{
    y:70,
  scale:1.5,
    scrollTrigger :{
        trigger:".center",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top 20%",
        scrub:1, 
    
       
    }

})

t1.from(" #svg1 ,.buttom",{
    y:-100,
    duration:1,
    delay:1,
})
t1.to(" .hoteling img",{
    scale:1.02,
   duration:3,
})

}
hoteling();

function texte(){
  var h1Elem = document.querySelectorAll("#page1 h1 ")

h1Elem.forEach(function(elem){
    var textContainer = elem.textContent
    var splitedText = textContainer.split("")

    clutter = "";
    splitedText.forEach(function(elem){
        clutter += `<span>${elem}</span>`
    })
  elem.innerHTML = clutter;

})


gsap.from("#page1 h1 span",{
  scale:0.4,
  color:"#434B34",
    stagger:1,
  scrollTrigger:{
      trigger:"#page1 h1  ",
      scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top -10%",
      scrub:2,

  }
  
})

}
texte();

function texte1(){
  var h1Elem = document.querySelectorAll(".texts h1 ")

h1Elem.forEach(function(elem){
    var textContainer = elem.textContent
    var splitedText = textContainer.split("")

    clutter = "";
    splitedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
  elem.innerHTML = clutter;

})


gsap.from(".texts h1 span",{
  
  color:"#E3E3C4",
    stagger:1,
  scrollTrigger:{
      trigger:".texts h1 span ",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:2

  }
  
})

}
texte1();
function page1(){
  gsap.to("#loco1",{
  scale:2.5
})
 gsap.to("#loco1",{
 x:-200,
 x:200,
 scrollTrigger:{
  trigger:"#loco1  ",
  scroller:"#main",
  // markers:true,
  start:"top 90%",
  end:"top 0%",
  scrub:1

}
  
 })
}

page1();
function page1part2(){
  gsap.to("#loco2",{
  scale:3
})
 gsap.to("#loco2",{
 x:-200,
 x:200,
 scrollTrigger:{
  trigger:"#loco2 ",
  scroller:"#main",
  // markers:true,
  start:"top 90%",
  end:"top 0%",
  scrub:1

}
  
 })
}

page1part2();

function leftimages(){
  var tl = gsap.timeline();

  tl.from(".lefttext    ",{
    y:-10,
       stagger:1,
   
    opacity:0,
    scrollTrigger:{
      trigger:".lefttext  ",
      scroller:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 20%",
      scrub:2 ,
   
    }

  })
}
leftimages();
function rightimages(){
  var tl = gsap.timeline();

tl.from("#img1 ",{
  y:-10,
  
  stagger:3,
  opacity:0,
  scrollTrigger:{
    trigger:".rightimage ",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
    end:"top 10%",
    scrub:2
  }

})
tl.from("#img2 ",{
  y:-10,
  
  stagger:3,
  opacity:0,
  scrollTrigger:{
    trigger:".rightimage ",
    scroller:"#main",
    // markers:true,
    start:"top 0%",
    end:"top -10%",
    scrub:2
  }

})

}
rightimages();

function page3(){
  gsap.from(".mincontainer1",{
    x:"-120%",
   duration:1,
   delay:1,
    stagger:1,

    scrollTrigger:{
      scroller:"#main",
      trigger:".mincontainer1",
      start:"top 80%",
      end:"top 10%",
      // markers:true,
      scrub:2
    }
  })
}
page3();
function swiper(){
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
swiper();
function page5part2(){
  gsap.to("#loco-part2",{
    scale:2,
    rotate:180,
  })
   gsap.to("#loco-part2",{
   x:-200,
   x:200,
   scrollTrigger:{
    trigger:"#page5  ",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 20%",
    scrub:1
  
  }
    
   })
  }
  page5part2();
function page5part3(){
  gsap.to("#loco-part3",{
    scale:2.9,
    rotate:180,
  })
   gsap.to("#loco-part3",{
   x:-200,
   x:200,
   scrollTrigger:{
    trigger:"#page5 ",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 20%",
    scrub:1
  
  }
    
   })
  }
  page5part3();

  function page5part4(){
var t2 = gsap.timeline();

t2.from(".paragraph ,.Restaurant1,.Restaurant2 ,.Restaurant3",{
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:".paragraph,.Restaurant1,.Restaurant2 ,.Restaurant3",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top 40%",
    scrub:1,
  }
})
t2.from(".location",{
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:".location",
    scroller:"#main",
    // markers:true,
    start:"top 75%",
    end:"top 60%",
    scrub:1,
  }
})
  }
  page5part4();
  
  function texte2(){
    var h1Elem = document.querySelectorAll(".textes h1 ")
  
  h1Elem.forEach(function(elem){
      var textContainer = elem.textContent
      var splitedText = textContainer.split("")
  
      clutter = "";
      splitedText.forEach(function(e){
          clutter += `<span>${e}</span>`
      })
    elem.innerHTML = clutter;
  
  })
  
  
  gsap.from(".textes h1 span",{
    
    color:"#043F5D",
      stagger:1,
    scrollTrigger:{
        trigger:".textes h1 span ",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
        scrub:2
  
    }
    
  })
  
  }
  texte2();

  function page5loco(){
  
      gsap.to("#page5-loco1",{
      scale:2.5
    })
     gsap.to("#page5-loco1",{
     x:-200,
     x:200,
     scrollTrigger:{
      trigger:"#page5-loco1  ",
      scroller:"#main",
      // markers:true,
      start:"top 90%",
      end:"top 0%",
      scrub:1
    
    }
      
     })
     gsap.to("#page5-loco2",{
      scale:2.7
    })
     gsap.to("#page5-loco2",{
     x:-200,
     x:200,
     scrollTrigger:{
      trigger:"#page5-loco2 ",
      scroller:"#main",
      // markers:true,
      start:"top 90%",
      end:"top 0%",
      scrub:1
    
    }
      
     })
    }
    
page5loco();

function page6(){
  var h1Elem = document.querySelectorAll(".page6-texts h1 ")

  h1Elem.forEach(function(elem){
      var textContainer = elem.textContent
      var splitedText = textContainer.split("")
  
      clutter = "";
      splitedText.forEach(function(elem){
          clutter += `<span>${elem}</span>`
      })
    elem.innerHTML = clutter;
  
  })
  
  
  gsap.from(".page6-texts h1 span",{
    scale:0.4,
    color:"#E3E3C4",
      stagger:1,
    scrollTrigger:{
        trigger:".page6-texts h1  ",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:3
  
    }
    
  })

  
  
}
page6();

function page6part1(){
    gsap.from(".relax-text h1,.relax-text p,.relax-text h2",{
    opacity:0,
    stagger:1,

  y:10,
    scrollTrigger:{
        trigger:".relax-text h1,.relax-text p,.relax-text h2",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top -10%",
        scrub:3
  
    }
  })
    gsap.to(".leftimg img",{
  
   x:-600,
    scrollTrigger:{
        trigger:".leftimg img",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top -10%",
        scrub:1
  
    }
  })
    gsap.to(".rightimg img",{
  
   x:500,
    scrollTrigger:{
        trigger:".rightimg img",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top -10%",
        scrub:1
  
    }
  })
}
page6part1();

function page8part1(){
  gsap.to("#loco-part4",{
    scale:2,
    rotate:180,
  })
   gsap.to("#loco-part4",{
   x:-200,
   x:200,
   scrollTrigger:{
    trigger:"#page8  ",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 20%",
    scrub:1
  }
   })
  gsap.to("#loco-part5",{
    scale:2.2,
    rotate:180,
  })
   gsap.to("#loco-part5",{
   x:-200,
   x:200,
   scrollTrigger:{
    trigger:"#page8  ",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 20%",
    scrub:1
  } 
  })
  }
  page8part1();
  function page8part2(){
    var h1Elem = document.querySelectorAll(".treetext1 h1 ")
  
    h1Elem.forEach(function(elem){
        var textContainer = elem.textContent
        var splitedText = textContainer.split("")
    
        clutter = "";
        splitedText.forEach(function(elem){
            clutter += `<span>${elem}</span>`
        })
      elem.innerHTML = clutter;
    
    })
    
    
    gsap.from(".treetext1 h1 span",{
      scale:0.4,
      color:"#434B34",
        stagger:1,
      scrollTrigger:{
          trigger:".treetext1 h1  ",
          scroller:"#main",
          // markers:true,
          start:"top 70%",
          end:"top 40%",
          scrub:1
    
      }
      
    })
    gsap.from(".treetext2 p",{
opacity:0,
y:50,
scrollTrigger:{
  trigger:".treetext2 p",
  scroller:"#main",
  // markers:true,
  start:"top 80%",
  end:"top 50%",
  scrub:1,
}
    })
  
    
    
  }
  page8part2();
  function page8part3(){
    gsap.from("#image3,#image2,#image1",{
      opacity:0,
      y:10,
      stagger:1,
      scrollTrigger:{
        trigger:"#image3,#image2,#image1",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 80%",
        scrub:1,
      }
    })
    gsap.from(".discover",{
      opacity:0,
      y:10,
      stagger:3,
      scrollTrigger:{
        trigger:".discover",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 50%",
        scrub:1,
      }
    })
  }
  page8part3();

  function page9(){
    var t2 = gsap.timeline();
    t2.from(".uppertext1 h1, .uppertext1 p",{
      opacity:0,
      y:10,
      stagger:1,
      scrollTrigger:{
        trigger:".uppertext1 h1, .uppertext1 p",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:1,
      }
    })
    t2.from(".leftimages img ",{
      opacity:0,
      y:10,
      stagger:1,
      scrollTrigger:{
        trigger:".leftimages img",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:1,
      }
    })
    t2.from(".righttext h1,.righttext p, .righttext h3 ",{
      opacity:0,
      y:10,
      stagger:1,
      scrollTrigger:{
        trigger:".righttext h1,.righttext p, .righttext h3",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:1,
      }
    })
    t2.from(".righttext1 h1,.righttext1 p, .righttext1 h3 ",{
      opacity:0,
      y:10,
      stagger:1,
      scrollTrigger:{
        trigger:".righttext1 h1,.righttext1 p, .righttext1 h3",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:1,
      }
    })
    t2.from(".leftimages1 img ",{
      opacity:0,
      y:10,
      stagger:1,
      scrollTrigger:{
        trigger:".leftimages1 img",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:1,
      }
    })
  }
  page9();