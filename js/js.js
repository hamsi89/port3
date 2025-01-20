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
        duration: 1, // 각 애니메이션의 지속시간
        stagger: 0.2, // 순차적 시작 (0.2초 간격)
        ease: "bounce.out", // 흔들리는 효과
    }
);

const toggleBtn = document.querySelector('.header-mode');


toggleBtn.addEventListener('click', () => {
  const root = document.documentElement;
  console.log('Button clicked!'); // 로그 출력

  if (root.classList.contains('dark-mode')) {
    root.classList.remove('dark-mode');
    toggleBtn.classList.remove('dark-mode');
  } else {
    root.classList.add('dark-mode');
    toggleBtn.classList.add('dark-mode');
  }
});


    const titles = document.querySelectorAll('.inner-title h2');

    const textElement = document.querySelector('#portfolio-text');

// GSAP animation for SVG text stroke
gsap.timeline()
    .to(textElement, {
        strokeDashoffset: 0, // Reveal the stroke
        opacity: 1, // Fade in the text
        duration: 2, // Animation duration
        ease: "power1.inOut",
       
    })
    .to(textElement, {
        fill: "#ff9f67", // Fill the text after stroke animation
        stroke: "none", // Remove stroke
        duration: 1,
        ease: "power1.inOut",
    })


gsap.to('.menupath', {
    attr: { startOffset: "25%" },
    duration: 2,
    zIndex: 10,
    ease: "power1.inOut", // 이징 함수
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
        y: -200, // 위로 이동
        duration: 2,
        scrollTrigger: {
            trigger: ".header",
            start: "top top",
            end: "bottom top",
            scrub: true,
            onEnterBack: () => gsap.to(".box", { y: 0, duration: 1 }), // 되돌릴 때 y: 0
        },
    });






    gsap.fromTo(".line",
        {
            width: "0%",
        }, {
        width: "100%",
        duration: 1, // 각 애니메이션의 지속시간
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
    }, 16); // 60FPS 제한
    
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
    

    gsap.to(".pointer.motion", {
        x: "40px",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        duration: 1,
    });

    

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
        end: "+=3000",
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





    
    const projectAnimation = gsap.timeline();

    // 각 프로젝트 애니메이션 설정
    const projectSection = document.querySelector(".project-section")
    const projects = document.querySelectorAll(".project");
    const projectTitle = projectSection.querySelector(".section-title h3")
   

    
    projects.forEach((project, index) => {
        // 프로젝트 요소 애니메이션 추가

        const scrollText = project.querySelector(".scroll-text");
        
       

       
        projectAnimation.from(project, {
            y: 400, // 아래에서 위로 이동
            autoAlpha: 0, // 투명도 애니메이션
            duration: 1, // 애니메이션 지속 시간
            ease: "power2.out", // 부드러운 애니메이션
        });
        
        projectAnimation.to(scrollText,{
            y: "0%", // 아래에서 위로 이동
            duration: 1, // 애니메이션 지속 시간
            ease: "power2.out", // 부드러운 애니메이션
        })

        const siteImg = project.querySelector(".left");
        projectAnimation.from(siteImg, {
            y: 400, // 아래에서 위로 이동
            autoAlpha: 0, // 투명도 애니메이션
            duration: 1, // 애니메이션 지속 시간
            ease: "power2.out", // 부드러운 애니메이션
        })

        const proInfo = project.querySelectorAll(".info");
        projectAnimation.from(proInfo, {
            y: 400, // 아래에서 위로 이동
            autoAlpha: 0, // 투명도 애니메이션
            duration: 1, // 애니메이션 지속 시간
            ease: "power2.out", // 부드러운 애니메이션
            stagger: 0.2,
        })

     
    });

    

    // ScrollTrigger 생성
    ScrollTrigger.create({
        animation: projectAnimation,
        trigger: ".project-section",
        start: "top top", // 섹션이 뷰포트 상단에 닿으면 시작
        end: "+=5000", // 전체 애니메이션 지속 길이
        scrub: true, // 스크롤과 동기화
        pin: true, // 섹션 고정
        anticipatePin: 1, // 핀 동작 예측
       
        stagger: 1, // 각 프로젝트 간 0.3초의 간격 추가
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
            start: "top -20%",
            end: "+=500",
            scrub: true,
            pin:true,
        },
    });
    
    tl.to(".image-section .section-title", {
        y: "130%",
        autoAlpha: 1,
        opacity: 1,
    });
    
    tl.from(".image-box", {
        rotate: "-10deg",
        x: 0,
        y: 0,
        duration :2,
        stagger: {
            amount: 0.5, // 전체 애니메이션 소요 시간
            from: "end", // 역순으로 애니메이션 시작
        },
    });



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



    const skillUi = skillSection.querySelectorAll('.ui'); // 모든 .ui 요소를 선택

    // GSAP 타임라인 생성
    const Uitl = gsap.timeline({
        repeat: -1, // 전체 타임라인을 무한 반복 
    });
    
    // 각 요소를 순차적으로 추가
    skillUi.forEach(ui => {
        Uitl.to(ui, {
            y: -10,          // y축으로 10px 이동
            duration: 0.3,     // 애니메이션 지속 시간 1초
            fill: "#EDED00", // 색상을 노란색으로 변경
        }).to(ui, {
            y: 0,           // 다시 원래 위치로 돌아옴
            duration: 0.3,
            fill: "#333333",    // 애니메이션 지속 시간 1초
        });
    });

    const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill-01", // 트리거 요소
          start: "top 50%", // 스크롤 시작 지점
          end: "bottom top", // 스크롤 종료 지점
     
          scrub:true,
        },
      });
      
      // 타임라인에 애니메이션 추가
      timeline
      .fromTo(
        ".skill-01 .skill-title h6",
        { y: "100%"}, // 초기 상태
        { y: "0%", duration: 1, ease: "power2.out"}, // 최종 상태
       
      )

        .fromTo(
          ".skill-01 .image svg",
          { y: "100%" }, // 초기 상태
          { y: "0", duration: 1,stagger: 0.2 } // 최종 상태
        ) 
        .fromTo(
          ".skill-01 .icon-wrap .icon",
          { y: "100%",
            opacity:0
           }, // 초기 상태
          { y: "0", duration: 1, stagger: 0.5, opacity:1  }, // 최종 상태 및 stagger 설정
            "0.5"
        );

        const timeline2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".skill-02", // 트리거 요소
              start: "top 50%", // 스크롤 시작 지점
              end: "bottom top", // 스크롤 종료 지점
             
              scrub:true,
            },
          });
          
          // 타임라인에 애니메이션 추가
          timeline2
          .fromTo(
            ".skill-02 .skill-title h6",
            { y: "100%"}, // 초기 상태
            { y: "0", duration: 0.5, ease: "power2.out"}, // 최종 상태
           
          )
    
          timeline2.fromTo(
              ".skill-02 .image svg",
              { y: "70%",}, // 초기 상태
              { y: "-50%", duration: 2,stagger: 0.2,} // 최종 상태
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
 


    gsap.to(".human", {
        y: "-80%",
        x: "120%",
        scale:0.4,
        scaleX: -1,


        scrollTrigger: {
            trigger: ".footer .inner",
            start: "top bottom",
            end: "top top",
            scrub: true,
            markers:true,
        },
    });



    const icons = aboutSection.querySelectorAll('.icon');

    // 전체 애니메이션 객체를 저장할 배열
    const animations = [];
    
    // 각 아이콘에 대해 애니메이션 설정
    icons.forEach((icon, index) => {
        const animation = gsap.to(icon, {
            motionPath: {
                path: '#circlePath',
                align: '#circlePath',
                alignOrigin: [0.5, 0.5],
                start: index / icons.length * 10,
                end: (index + 1) / icons.length * 10,
            },
            duration: 15,
            repeat: -1,
            ease: "none"
        });
    
        // 애니메이션 객체 저장
        animations.push(animation);
    });
    
    // 전체 애니메이션 일시 정지 및 재개 처리
    icons.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
            animations.forEach(animation => animation.timeScale(0.2)); // 전체 애니메이션 정지
        });
    
        icon.addEventListener('mouseleave', () => {
            animations.forEach(animation => animation.timeScale(1)); // 전체 애니메이션 재개
        });
    });

    const jelloHorizontal = () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".footer", // 트리거 요소
                start: "top 80%",   // 트리거 시작 위치
                toggleActions: "play none none none", // 애니메이션 재생 설정
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
