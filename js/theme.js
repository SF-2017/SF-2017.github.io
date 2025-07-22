document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const themeToggle = document.getElementById('theme-toggle');
    const backButton = document.getElementById('back-button');
    const langSelector = document.getElementById('language-selector');
    
    // 初始化主题 - 优先使用本地存储，其次使用系统偏好
    let currentTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // 应用主题函数
    const applyTheme = (theme) => {
        // 设置主题属性
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // 更新主题切换按钮图标
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
        }
        
        // 强制重绘语言选择框以确保样式更新
        if (langSelector) {
            langSelector.style.display = 'none';
            void langSelector.offsetHeight; // 触发重排
            langSelector.style.display = 'block';
        }
    };
    
    // 初始化主题
    applyTheme(currentTheme);
    
    // 主题切换按钮事件
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
        });
    }
    
    // 返回按钮功能
    if (backButton) {
        // 首页隐藏返回按钮
        if (window.location.pathname.endsWith('index.html') || 
            window.location.pathname === '/') {
            backButton.style.display = 'none';
        } else {
            // 更新返回按钮文本
            const updateBackButtonText = () => {
                const lang = localStorage.getItem('language') || 'zh-CN';
                const translations = {
                    'zh-CN': '返回',
                    'en': 'Back'
                };
                backButton.textContent = translations[lang] || '返回';
            };
            
            // 设置返回按钮点击事件
            backButton.addEventListener('click', () => {
                window.history.back();
            });
            
            // 初始化按钮文本
            updateBackButtonText();
            
            // 监听语言变化
            if (langSelector) {
                langSelector.addEventListener('change', updateBackButtonText);
            }
        }
    }
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {  // 只在用户未手动选择主题时响应
            currentTheme = e.matches ? 'dark' : 'light';
            applyTheme(currentTheme);
        }
    });
});

/**
 * 提供给其他脚本使用的主题切换API
 * @param {string} theme - 要切换的主题 ('light' 或 'dark')
 */
window.applyTheme = function(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // 更新按钮状态
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
};