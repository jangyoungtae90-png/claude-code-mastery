/* ============================================
   개발자 포트폴리오 - 메인 JavaScript
   ============================================ */

// DOM 요소 캐싱
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillBars = document.querySelectorAll('.skill-bar');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');

// 모바일 메뉴 상태
let isMenuOpen = false;

/* ============================================
   1. 네비게이션 바 - 스크롤 시 그림자 추가
   ============================================ */
function initNavbar() {
    // 패시브 리스너로 성능 최적화
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('shadow-active');
        } else {
            navbar.classList.remove('shadow-active');
        }
    }, { passive: true });
}

/* ============================================
   2. 모바일 메뉴 - 햄버거 토글
   ============================================ */
function initMobileMenu() {
    // 햄버거 버튼 클릭 이벤트
    hamburger.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        hamburger.classList.toggle('active', isMenuOpen);
        mobileMenu.classList.toggle('hidden', !isMenuOpen);
    });

    // 메뉴 링크 클릭 시 메뉴 닫기
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            hamburger.classList.remove('active');
            mobileMenu.classList.add('hidden');
        });
    });

    // ESC 키 누를 때 메뉴 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            isMenuOpen = false;
            hamburger.classList.remove('active');
            mobileMenu.classList.add('hidden');
        }
    });
}

/* ============================================
   3. 활성 네비게이션 링크 - IntersectionObserver 사용
   ============================================ */
function initActiveNav() {
    // IntersectionObserver 옵션 설정
    const options = {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px' // 뷰포트 중단점 기준
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 모든 링크의 active 클래스 제거
                navLinks.forEach(link => link.classList.remove('active'));

                // 현재 섹션에 해당하는 링크에 active 클래스 추가
                const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, options);

    // 모든 섹션 관찰
    sections.forEach(section => observer.observe(section));
}

/* ============================================
   4. 스킬 프로그레스 바 - 애니메이션
   ============================================ */
function initSkillBars() {
    // IntersectionObserver로 각 바를 감시
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 애니메이션 클래스 추가
                entry.target.classList.add('animate');
                // 한 번만 실행되도록 관찰 중단
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 모든 스킬 바 관찰
    skillBars.forEach(bar => observer.observe(bar));
}

/* ============================================
   5. 프로젝트 필터링
   ============================================ */
function initProjectFilter() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 활성 버튼 업데이트
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
                btn.classList.add('bg-white', 'text-gray-600', 'border-gray-300');
            });
            button.classList.remove('bg-white', 'text-gray-600', 'border-gray-300');
            button.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');

            // 필터 값 가져오기
            const filterValue = button.getAttribute('data-filter');

            // 카드 표시/숨김
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    // fade-in 애니메이션
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.3s ease-out';
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

/* ============================================
   6. 스무스 스크롤 - 앵커 링크
   ============================================ */
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // # 로 시작하는 앵커 링크만 처리
            if (href.startsWith('#')) {
                e.preventDefault();

                const target = document.querySelector(href);
                if (target) {
                    // 네비게이션 바 높이 계산 (고정 헤더)
                    const headerHeight = navbar.offsetHeight;
                    const targetTop = target.offsetTop - headerHeight;

                    // 스무스 스크롤
                    window.scrollTo({
                        top: targetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ============================================
   7. 문의 폼 - 유효성 검증
   ============================================ */
function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 폼 유효성 검증
        let isValid = true;
        const formInputs = contactForm.querySelectorAll('input, textarea');

        formInputs.forEach(input => {
            const errorMessage = input.nextElementSibling;

            // 빈 값 체크
            if (!input.value.trim()) {
                isValid = false;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.textContent = '이 필드는 필수입니다.';
                    errorMessage.classList.remove('hidden');
                }
                input.classList.add('border-red-500');
            } else {
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.classList.add('hidden');
                }
                input.classList.remove('border-red-500');
            }

            // 이메일 형식 검증
            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.textContent = '올바른 이메일 형식을 입력해주세요.';
                        errorMessage.classList.remove('hidden');
                    }
                    input.classList.add('border-red-500');
                }
            }
        });

        if (isValid) {
            // 성공 메시지 표시 (실제 전송은 백엔드가 필요함)
            alert('메시지가 전송되었습니다!\n(샘플이므로 실제 전송은 이루어지지 않습니다.)');
            contactForm.reset();
        }
    });

    // 입력 중 에러 메시지 제거
    contactForm.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => {
            const errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.classList.add('hidden');
            }
            input.classList.remove('border-red-500');
        });
    });
}

/* ============================================
   8. AOS (Animate On Scroll) 초기화
   ============================================ */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
}

/* ============================================
   9. 초기화 함수 - DOMContentLoaded 실행
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // 모든 초기화 함수 실행
    initNavbar();
    initMobileMenu();
    initActiveNav();
    initSkillBars();
    initProjectFilter();
    initSmoothScroll();
    initContactForm();
    initAOS();

    console.log('✅ 포트폴리오 초기화 완료!');
});
