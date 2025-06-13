document.addEventListener('DOMContentLoaded', function() {
    
    // 客户案例的选项卡功能
    const tabsContainer = document.querySelector('.tabs');
    if (tabsContainer) {
        const tabLinks = tabsContainer.querySelectorAll('.tab-link');
        
        tabLinks.forEach(link => {
            link.addEventListener('click', () => {
                // 移除所有按钮的 active class
                tabLinks.forEach(btn => btn.classList.remove('active'));
                
                // 给当前点击的按钮添加 active class
                link.classList.add('active');
                
                // 在这里可以添加逻辑来过滤下面的案例内容
                // 例如： const filter = link.textContent;
                console.log('切换到: ' + link.textContent);
            });
        });
    }

    const slides = document.getElementById('slides');
    const dotsContainer = document.getElementById('dots');

    // 检查元素是否存在，防止在其他页面报错
    if (slides && dotsContainer) {
        const totalSlides = slides.children.length;
        let index = 0;

        // 创建导航点
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.dataset.index = i;
            dot.onclick = () => {
                index = i;
                updateSlider();
            };
            dotsContainer.appendChild(dot);
        }

        function updateSlider() {
            slides.style.transform = `translateX(-${index * 100}%)`;
            Array.from(dotsContainer.children).forEach((dot, i) =>
                dot.classList.toggle('active', i === index)
            );
        }

        updateSlider(); // 初始显示

        // 设置定时器自动轮播
        setInterval(() => {
            index = (index + 1) % totalSlides;
            updateSlider();
        }, 3000); // 每3秒切换
    }

});