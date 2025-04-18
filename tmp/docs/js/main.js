document.addEventListener('DOMContentLoaded', function() {
    // 更新页脚年份
    document.querySelector('.copyright p').innerHTML = `© ${new Date().getFullYear()} 先问AI. 版权所有.`;
    
    // 处理轮播图展示
    const dots = document.querySelectorAll('.showcase-dot');
    const prevBtn = document.querySelector('.showcase-controls div:first-child');
    const nextBtn = document.querySelector('.showcase-controls div:last-child');
    let currentSlide = 2; // 默认是第三个点（索引为2）是活跃的
    
    // 如果存在轮播图控制元素
    if (dots.length > 0 && prevBtn && nextBtn) {
        // 设置当前活跃的点
        updateActiveDot();
        
        // 上一张
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + dots.length) % dots.length;
            updateActiveDot();
        });
        
        // 下一张
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % dots.length;
            updateActiveDot();
        });
        
        // 点击导航点
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentSlide = index;
                updateActiveDot();
            });
        });
    }
    
    function updateActiveDot() {
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // 滚动时添加导航栏背景
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            } else {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            }
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 