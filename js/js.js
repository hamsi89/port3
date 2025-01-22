const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);
document.body.classList.add('no-scroll');
 

const media_qur = {
    moba : "(max-width: 430px)",
    tab :"(min-width: 431px) and (max-width: 1024px)",
    pc : "(max-width: 1025px)",
}

gsap.fromTo(
    ".box",
    {
        y: "-200%",

    },
    {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "bounce.out", 
    }

);
const toggleBtns = document.querySelectorAll('.mode-btn'); 
const bartoggleBtn = document.querySelector('.bar-mode-btn'); 
const root = document.documentElement; 

toggleBtns.forEach((toggleBtn) => {
  toggleBtn.addEventListener('click', () => {
    const isDarkMode = root.classList.contains('dark-mode');

    if (isDarkMode) {
      root.classList.remove('dark-mode');
      toggleBtns.forEach((btn) => btn.classList.remove('dark-mode')); 
      if (bartoggleBtn) bartoggleBtn.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      toggleBtns.forEach((btn) => btn.classList.add('dark-mode')); 
      if (bartoggleBtn) bartoggleBtn.classList.add('dark-mode');
    }
  });
});
    const titles = document.querySelectorAll('.inner-title h2');

    const textElement = document.querySelector('#portfolio-text');


gsap.timeline()
    .to(textElement, {
        strokeDashoffset: 0,
        opacity: 1, 
        duration: 2, 
        ease: "power1.inOut",
       
    })
    .to(textElement, {
        fill: "#ff9f67", 
        stroke: "none", 
        duration: 1,
        ease: "power1.inOut",
    })


gsap.to('.menupath', {
    attr: { startOffset: "25%" },
    duration: 2,
    zIndex: 10,
    ease: "power1.inOut", 
})

gsap.to('.menu-ellipse', {
    y:"-20%",
    zIndex:10,
    duration : 2,
    scrollTrigger:{
        trigger:".header",
        start:"top top",
        ease: "power1.out",
        scrub:true,
    }
})



    gsap.to(".box", {
        y: -200, 
        duration: 2,
        scrollTrigger: {
            trigger: ".header",
            start: "top top",
            end: "bottom top",
            scrub: true,
            onEnterBack: () => gsap.to(".box", { y: 0, duration: 1 }), 
        },
    });

   
document.addEventListener("DOMContentLoaded", () => {
    // 버튼 클래스와 섹션 클래스 매핑
    const buttonSectionMap = [
        { buttonClass: ".about-btn", targetClass: ".about-section" },
        { buttonClass: ".work-btn", targetClass: ".project-section" },
        { buttonClass: ".skill-btn", targetClass: ".skill-section" },
    ];


    buttonSectionMap.forEach(({ buttonClass, targetClass }) => {
        const buttons = document.querySelectorAll(buttonClass);
        const targetSection = document.querySelector(targetClass);

        if (targetSection) {
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    gsap.to(window, {
                        duration: 2.5, // 애니메이션 지속 시간 (초)
                        scrollTo: {
                            y: targetSection, // 타겟 섹션
                            offsetY: 0, // 스크롤 오프셋 (필요시 조정)
                        },
                        ease: "power2.out", // Ease 효과
                    });
                });
            });
        }
    });
});


    gsap.fromTo(".line",
        {
            width: "0%",
        }, {
        width: "100%",
        duration: 1, 
        stagger: 0.2,

        scrollTrigger: {
            trigger: ".line-wrap",
            start: "top 50%",
            end: "bottom 80",

        }
    });

    gsap.to(".menu-bar", {
        bottom: "3%",
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            scrub: true,
        }
    })

    const eyes = document.querySelector('.eyes');

    const throttle = (callback, delay) => {
        let lastTime = 0;
        return (...args) => {
            const now = Date.now();
            if (now - lastTime >= delay) {
                lastTime = now;
                callback(...args);
            }
        };
    };
    
    const handleMouseMove = throttle((event) => {
        const rect = eyes.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
    
        let offsetX = (event.clientX - centerX) * 0.1;
        let offsetY = (event.clientY - centerY) * 0.1;
    
        offsetX = Math.max(Math.min(offsetX, 15), -15);
        offsetY = Math.max(Math.min(offsetY, 20), -20);
    
        eyes.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    }, 16);

    document.addEventListener('mousemove', handleMouseMove);

    gsap.to(".move-bar", {
        x: "40px",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        duration: 1,
    });
     
    new TypeIt(".type-it", {
        strings: ["Hello, World?", "Just Scroll!!"],
        deleteSpeed: 50,
        speed: 50,
        breakLines: false,
        nextStringDelay: 1000,
      }).go();
    


    

    gsap.to(".ae-icon", {
        motionPath: {
            path: [
                { x: 0, y: 0 },
                { x: 75, y: -40 },
                { x: 150, y: 0 },
                { x: 225, y: -40 },
                { x: 300, y: 0 },
            ],
            curviness: 1.25,
        },
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        duration: 1,
    });

    gsap.to(".ae-shadow", {
        x: 300,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        duration: 1,
    });

    const aboutSection = document.querySelector(".about-section");
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page-01",
        start: "top top",
        end: "+=5000",
        scrub: true,
        pin: true,
    }
});

// Sub-timelines
const mainAnimation = gsap.timeline();
mainAnimation
    .fromTo(".page-01 .main span", {
        y: "-100%"
    }, {
        y: "0",
        stagger: {
            each: 0.2,
            from: "random"
        }
    })
    .to(".page-01 .main", {
        opacity: 1,
        stagger: 0.2
    })
    .to(".page-01 .main span", {
        y: "-100%",
        stagger: {
            each: 0.2,
            from: "random"
        }
    });

const subAnimation = gsap.timeline();
subAnimation
    .to(".page-01 .sub span", {
        y: "-200%",
        opacity: 1,
        duration : 2,
        stagger: {
            each: 0.2
        }
    })
    .to(".page-01 .sub span", {
        y: "-500%",
        opacity: 1,
        stagger: {
            each: 0.2
        }
    });

const itemTitleAnimation = gsap.timeline();
itemTitleAnimation
    .to(".page-01 .item-title p", {
        y: "-150%",
        opacity: 1,
        stagger: {
            each: 0.2
        }
    })
    .to(".page-01 .item-title p", {
        y: "-150%",
        opacity: 1,
        stagger: {
            each: 0.2
        }
    });

const itemStoryAnimation = gsap.timeline();
itemStoryAnimation
    .to(".page-01 .item-story", {
        y: "-40%",
        opacity: 1
    })
    .to(".page-01 .item-story .item p", {
        opacity: 1,
        scale: 1,
        stagger: {
            each: 0.4
        }
    });

// Adding sub-timelines to the main timeline
aboutTl
    .add(mainAnimation)
    .add(subAnimation)
    .add(itemTitleAnimation)
    .add(itemStoryAnimation);

    


    const aboutTl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page-02",
            start:"top top",
            end:"+=2000",
           scrub:true,
            pin:true,
        }
    })
 
 
   aboutTl2.fromTo(".page-02 .main span",{
    y:"-200%"},{
    y:"0",
    stagger:0.2,
    stagger: {
        each: 0.2, 
        from: "random", 
        }
})
  

    aboutTl2.to(".page-02 .main", {
        opacity:1,
        stagger:0.2,
        
    });
    
    aboutTl2.to(".page-02 .main span",{
        y:"-100%",
        stagger: {
            each: 0.2, 
            from: "random", 
            }
    })





    
    const projectAnimation = gsap.timeline({});
    const projectSection = document.querySelector(".project-section")
    const projects = document.querySelectorAll(".project");
    const projectTitle = projectSection.querySelector(".section-title h3")
   

    
    projects.forEach((project, index) => {
     

        const scrollText = project.querySelector(".scroll-text");
        
       

       
        projectAnimation.from(project, {
            y: 400, 
            autoAlpha: 0, 
            duration: 1, 
            ease: "power2.out", 
        });
        
        projectAnimation.to(scrollText,{
            y: "0%", 
            duration: 1, 
            ease: "power2.out",
        })

        const siteImg = project.querySelector(".left");
        projectAnimation.from(siteImg, {
            y: 400, 
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out",
        })

        const proInfo = project.querySelectorAll(".info");
        projectAnimation.from(proInfo, {
            y: 400, 
            autoAlpha: 0, 
            duration: 4, 
            ease: "power2.out",
            stagger: 0.2,
        })

     
    });

    


    ScrollTrigger.create({
        animation: projectAnimation,
        trigger: ".project-section",
        start: "top top", 
        end: "+=5000",
        scrub: true, 
        pin: true,
        anticipatePin: 1, 
       
        stagger: 1, 
    });

    const hoverTargets = document.querySelectorAll('.hover-target');
    const hoverText = document.querySelector('.hover-text');
  
    // 마우스 움직임에 따라 hover-text 위치 이동
    document.addEventListener("mousemove", (e) => {
      gsap.to(hoverText, {
        x: e.clientX - 70,
        y: e.clientY - 20,
        duration: 0.1, // 부드러운 움직임
      });
    });
  
    // hover-target 위에 마우스가 들어오면 hover-text 보이기
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        gsap.to(hoverText, {
          opacity: 1, // 보이게 하기
          duration: 0.3, // 페이드 효과
        });
      });
  
      // hover-target에서 마우스가 나가면 hover-text 숨기기
      target.addEventListener('mouseleave', () => {
        gsap.to(hoverText, {
          opacity: 0, // 숨기기
          duration: 0.3, // 페이드 효과
        });
      });
    });
  
    gsap.to(".pointer.motion", {
        x: "40px",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        duration: 1,
    });



    const videoSection = document.querySelector('.video-section')
    const videos = videoSection.querySelectorAll('video')
    const videoInfos = videoSection.querySelectorAll('.video-info')

    videos.forEach(e => {
        gsap.to(e, {
            y: "-30%",
            scrollTrigger: {
                trigger: e,
                start: "top 90%",
                end: "bottom top",
                scrub: true,
            }
        })
    });

    videoInfos.forEach(e => {
        gsap.to(e, {
            x: "20%",
            scrollTrigger: {
                trigger: e,
                start: "top 90%",
                end: "bottom top",
                scrub: true,
            }
        })
    });
 

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".image-section", 
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin:true,
        },
    });
    
    tl.to(".image-section .section-title", {
        y: "-100%",
        autoAlpha: 1,
        opacity: 1,
        duration:1,
    });
    
    tl.from(".image-box", {
        rotate: "-10deg",
        x: 0,
        y: 0,
        duration :5,
        stagger: {
            amount: 0.5, 
            from: "end", 
        },
       
    });
    const imageSection = document.querySelector('.image-section');
    const imageBoxs = imageSection.querySelectorAll('.image-box');
    

    gsap.to('.image-scroll-text', {
        x:"-50vw",
        scrollTrigger:{
            trigger: ".image-section",
            start: "top bottom", //
            end: "bottom top", 
       
            scrub:true,
        }
    })

    const skillSection = document.querySelector(".skill-section");
    const icon01 = skillSection.querySelector(".icon-01")
    const icon02 = skillSection.querySelector(".icon-02")
    const icon03 = skillSection.querySelector(".icon-03")


    const skills = skillSection.querySelectorAll(".skill");
    const skillhead = skillSection.querySelector(".skill-title");



    const skillUi = skillSection.querySelectorAll('.ui'); 

    const Uitl = gsap.timeline({
        repeat: -1, 
    });
    
    
    skillUi.forEach(ui => {
        Uitl.to(ui, {
            y: -10,          
            duration: 0.3,    
            fill: "#EDED00", 
        }).to(ui, {
            y: 0,          
            duration: 0.3,
            fill: "#333333",   
        });
    });

    const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill-01", 
          start: "top 50%", 
          end: "bottom top",
     
          scrub:true,
        },
      });
      
 
      timeline
      .fromTo(
        ".skill-01 .skill-title h6",
        { y: "100%"},
        { y: "0%", duration: 1, ease: "power2.out"}, 
      )

        .fromTo(
          ".skill-01 .image svg",
          { y: "100%" }, 
          { y: "0", duration: 1,stagger: 0.2 },
        ) 
        .fromTo(
          ".skill-01 .icon-wrap .icon",
          { y: "100%",
            opacity:0
           }, 
          { y: "0", duration: 1, stagger: 0.5, opacity:1  },
            "0.5"
        );

        const timeline2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".skill-02",
              start: "top 50%",
              end: "bottom top",
             
              scrub:true,
            },
          });
          
          
          timeline2
          .fromTo(
            ".skill-02 .skill-title h6",
            { y: "100%"}, 
            { y: "0", duration: 0.5, ease: "power2.out"}, 
           
          )
    
          timeline2.fromTo(
              ".skill-02 .image svg",
              { y: "70%",}, 
              { y: "-50%", duration: 2,stagger: 0.2,} 
            ) 
        
        
    gsap.to('.ui-bar', {
        x:"100%",
        duration : 2,
        repeat : -1,
        yoyo : true,
        ease : "power4.inOut"
    })

    gsap.to(".human",{
        opacity:0,
        y:"100%",
        scrollTrigger: {
            trigger: ".project-section",
            start: "top 50%",
            end: "top top",
            scrub: true,
        },

    })

    gsap.to(".human",{
        width:"35%",
        left: "10%",
        opacity :1,

        y:"0",
        scrollTrigger: {
            trigger: videoSection,
            start: "top 80%",
            end: "top top",
            scrub: true,
        },

    })
/*
    if (window.matchMedia("(min-width: 1025px)").matches) {
    gsap.to(".human", {
        x: "134%",
        y: "10%",
        width:"30%",
        duration: 3,
     
        scrollTrigger: {
            trigger: ".about-section",
            start: "top bottom",
            end : "top top",
            
            scrub: true,
            markers:true,
        },

    })
    }
    
 */
 
    const bigImageWrap = document.querySelector(".bigimg-wrap");
    const bigImages = bigImageWrap.querySelectorAll(".image");
    const imageBoxes = document.querySelectorAll(".box-wrap .image-box img");
    const modal = document.querySelector(".modal")

    // 스크롤 이벤트 핸들러
    function handleScroll() {
        if (bigImageWrap.classList.contains("active")) {
            bigImageWrap.classList.remove("active");
            bigImages.forEach(img => img.classList.remove("active"));
            modal.classList.remove("active")
    
            window.removeEventListener("scroll", handleScroll); // 스크롤 이벤트 제거
        }
    }

    // 이미지 박스 클릭 시 동작
    imageBoxes.forEach((imageBox, index) => {
        imageBox.addEventListener("click", function () {
            bigImages.forEach(img => img.classList.remove("active"));
            bigImages[index].classList.add("active");
            bigImageWrap.classList.add("active");
            modal.classList.add("active")

            window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 등록
        });
    });

    // 빅이미지 클릭 시 초기 상태로 복귀
    bigImageWrap.addEventListener("click", function () {
        bigImageWrap.classList.remove("active");
        bigImages.forEach(img => img.classList.remove("active"));
        modal.classList.remove("active")
     
        window.removeEventListener("scroll", handleScroll); // 스크롤 이벤트 제거
    });

    gsap.to(".human", {
        y: "-80%",
        x: "120%",
        scale:0.4,
        scaleX: -1,


        scrollTrigger: {
            trigger: ".footer .inner",
            start: "top bottom",
            end: "top top",
            scrub: true
        },
    });



    const icons = aboutSection.querySelectorAll('.icon');
    const animations = [];
    
 
    icons.forEach((icon, index) => {
        const animation = gsap.to(icon, {
            motionPath: {
                path: '#circlePath',
                align: '#circlePath',
                alignOrigin: [0.5, 0.5],
                start: index / icons.length,
                end: (index + 1) / icons.length,
            },
            duration: 15    ,
            repeat: -1,
            ease: "none"
        });
    
   
        animations.push(animation);
    });
    

    icons.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
            animations.forEach(animation => animation.timeScale(0.2)); 
        });
    
        icon.addEventListener('mouseleave', () => {
            animations.forEach(animation => animation.timeScale(1)); 
        });
    });

    const jelloHorizontal = () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".footer", 
                start: "top 80%",   
                toggleActions: "play none none none",
            },
        })
            .to(".footer", { scaleX: 1.25, scaleY: 0.75, duration: 0.2, ease: "power1.inOut" })
            .to(".footer", { scaleX: 0.75, scaleY: 1.25, duration: 0.2, ease: "power1.inOut" })
            .to(".footer", { scaleX: 1.15, scaleY: 0.85, duration: 0.2, ease: "power1.inOut" })
            .to(".footer", { scaleX: 0.95, scaleY: 1.05, duration: 0.15, ease: "power1.inOut" })
            .to(".footer", { scaleX: 1.05, scaleY: 0.95, duration: 0.15, ease: "power1.inOut" })
            .to(".footer", { scaleX: 1, scaleY: 1, duration: 0.2, ease: "power1.inOut" });
    };

    jelloHorizontal();
