const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);




const media_qur = {
    tablet : "(max-width: 430px)",
    moba :"(min-width: 431px) and (max-width: 1024px)",
    tablet : "(max-width: 1025px)",
}


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




    gsap.from(".human", {

        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            scrub:true,
        }
    })


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
        fill: "#333333", // Fill the text after stroke animation
        stroke: "none", // Remove stroke
        duration: 1,
        ease: "power1.inOut",
    })

    .to(textElement, {
        fill: "currentColor", // Fill the text after stroke animation
       
    });


gsap.to('.menupath', {
    attr: { startOffset: "25%" },
    duration: 2,
    ease: "power1.inOut", // 이징 함수
})

gsap.to('.menu-ellipse', {
    y:"-20%",
    duration : 2,
    scrollTrigger:{
        trigger:".header",
        start:"top top",
        ease: "power1.out",
        scrub:true,
    }
})

    gsap.fromTo(
        ".box",
        {
            y: -200,

        },
        {
            y: 0,
            duration: 1, // 각 애니메이션의 지속시간
            stagger: 0.2, // 순차적 시작 (0.2초 간격)
            ease: "bounce.out", // 흔들리는 효과
        }
    );

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


    document.addEventListener('mousemove', (event) => {
        const eyes = document.querySelector('.eyes');
        const rect = eyes.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        let offsetX = (event.clientX - centerX) * 0.1;
        let offsetY = (event.clientY - centerY) * 0.1;

        // Limit the x-axis movement to a maximum of 20px
        offsetX = Math.max(Math.min(offsetX, 20), -20);

        // Limit the y-axis movement to a maximum of 30px
        offsetY = Math.max(Math.min(offsetY, 30), -30);

        eyes.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    });


    gsap.to(".move-bar", {
        x: "40px",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        duration: 1,
    });

    gsap.to(".pointer", {
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
    const projectAnimation = gsap.timeline();

    // 각 프로젝트 애니메이션 설정
    const projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
        // 프로젝트 요소 애니메이션 추가
        projectAnimation.from(project, {
            y: 400, // 아래에서 위로 이동
            autoAlpha: 0, // 투명도 애니메이션
            duration: 1, // 애니메이션 지속 시간
            ease: "power2.out", // 부드러운 애니메이션
        })



        // 각 프로젝트의 .contribution p 애니메이션 추가
        const contributions = project.querySelectorAll(".contribution p"); // 복수 요소 선택
        contributions.forEach((contribution) => {
            projectAnimation.to(contribution, {
                backgroundSize: "100% 100%", // 배경이 완전히 채워짐
                duration: 1, // 애니메이션 지속 시간
                ease: "power1.inOut",

            })
                .addPause("+=0.5"); // 1초의 간격 추가
        });
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
        markers: false, // 디버그 마커 숨김
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
                start: "top 30%",
                end: "top top",
                scrub: true,
            }
        })
    });

    videoInfos.forEach(e => {
        gsap.to(e, {
            x: "10%",
            scrollTrigger: {
                trigger: e,
                start: "top 50%",
                end: "bottom top",
                scrub: true,
            }
        })
    });


    const imageWrap = document.querySelector('.image-wrap');

    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    const images = document.querySelectorAll('.image-wrap img');
    images.forEach((img) => {
        img.setAttribute('draggable', false);
    });


    imageWrap.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX; // 드래그 시작 지점
        imageWrap.style.cursor = 'grabbing';
    });

    imageWrap.addEventListener('mouseup', () => {
        isDragging = false;
        prevTranslate = currentTranslate; // 드래그 종료 후 위치 저장
        imageWrap.style.cursor = 'grab';
    });

    imageWrap.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            prevTranslate = currentTranslate;
            imageWrap.style.cursor = 'grab';
        }
    });

    imageWrap.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const currentX = e.pageX;
        const movementX = currentX - startX; // 이동한 거리 계산
        currentTranslate = prevTranslate + movementX;

        // 이동 적용
        imageWrap.style.transform = `translateX(${currentTranslate}px)`;
    });

    const skillSection = document.querySelector(".skill-section");
    const icon01 = skillSection.querySelector(".icon-01")
    const icon02 = skillSection.querySelector(".icon-02")
    const icon03 = skillSection.querySelector(".icon-03")


    const skills = skillSection.querySelectorAll(".skill");
    const skillhead = skillSection.querySelector(".skill-title");
    const skillHeadWidth = skillhead.offsetWidth;
    const additionalLeft = "21.875vw";


    skills.forEach((skill, index) => {
        skill.style.left = `${additionalLeft + skillHeadWidth * index}px`;

        const currentWidth = skill.offsetWidth;
        if (index > 0) {
            skill.style.width = `${currentWidth - additionalLeft - skillHeadWidth * index}px`;
        }
    });


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: skillSection,
            start: "top top",
            end: "+=2000",
            scrub: true,
            anticipatePin: 1,
            pin: true,
            markers: true,
        },
    });


    tl.from(".skill-01", {
        x: "90%",
    });
    tl.from(".skill-02", {
        x: "100%",
    });
    tl.from(".skill-03", {
        x: "100%",
    });

    const aboutSection = document.querySelector(".about-section")

    gsap.to(".human",{
        left: "10%",
        scrollTrigger: {
            trigger: videoSection,
            start: "top 80%",
            end: "top top",
            scrub: true,
        },

    })

    gsap.to(".human", {
        left: "50%",
        y: "0%",

        scale: 0.7,

        scrollTrigger: {
            trigger: aboutSection,
            start: "top 80%",
            end: "top top",
            scrub: true,
        },

    })

    gsap.to(".human", {
        left:"50%",
        y: "100%",

        scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
            end: "top top",
            scrub: true,
        },
    })



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
