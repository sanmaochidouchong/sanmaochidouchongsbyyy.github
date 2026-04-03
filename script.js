// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            // 检查是否是跨页面链接
            if (targetId.includes('html')) {
                // 跨页面链接，直接跳转
                window.location.href = targetId;
            } else {
                // 页面内锚点，平滑滚动
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 导航栏滚动效果
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('bg-white', 'shadow-md');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('bg-white', 'shadow-md');
                nav.classList.add('bg-transparent');
            }
        });
    }

    // 回到顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
    backToTopButton.className = 'fixed bottom-6 right-6 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center opacity-0 invisible transition-all duration-300 hover:bg-blue-600 z-50';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.add('opacity-0', 'invisible');
            backToTopButton.classList.remove('opacity-100', 'visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 页面加载动画
    const loader = document.createElement('div');
    loader.className = 'fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50';
    loader.innerHTML = '<div class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>';
    document.body.appendChild(loader);

    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('opacity-0');
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(function() {
                loader.remove();
            }, 500);
        }, 500);
    });
});