const translations = {
    'en': {
        // 通用
        'page_title': 'Homepage',
        'company_name': 'SF',
        'company_slogan': 'Caring for Today, Building for Tomorrow',
        'back': 'Back',
        'copyright': 'All Rights Reserved',
        
        // 导航菜单
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_studio': 'Studio',
        'nav_download': 'Software Downloads',
        
        // 首页
        'welcome_title': 'Welcome to SF',
        'welcome_text': 'SF is committed to providing customers with the highest quality products and services.',
        'services_title': 'Service Notice',
        'services_text': 'This site is not yet complete! Until June 1, 2025 (or until otherwise notified by Teams), the content on this page is for testing purposes only and may have many issues. Please disregard them.',
        
        // 关于SF页
        'about_title': 'About SF',
        'about_company': 'Introduction',
        'about_text': 'SF is a team composed of the founder and his friends.',
        'team_title': 'Team',
        'team_text': 'SF team members are distributed across different studios.',
        'values_title': 'Four Principles',
        'value1': 'Green',
        'value2': 'Coordination',
        'value3': 'Mutual Assistance',
        'value4': 'Standardization',
        
        // 下载页
        'download_title': 'Product Downloads',
        'product_title': 'Products',
        'product1_desc': 'Minecraft Config Tool',
        'product2_desc': 'Android Toolbag',
        'product3_desc': 'Punch System',
        'file_size': 'Size',
        'update_time': 'Update',
        'download_btn': 'Download',
        'system_req': 'System Requirements',
        'req1': 'Windows 10/11 or macOS 10.15+',
        'req2': '4GB Memory',
        'req3': '2GB Storage',
        'req4': 'Stable Internet Connection',
        
        // 工作室页
        'studio_title': 'Studio',
        'studio_slogan': 'The Perfect Fusion of Creativity and Technology',
        'about_studio_title': 'Studio',
        'about_studio_text': 'Here, SF creates innovative products and experiences.',
        'highlight1_title': 'Game and Software Studio',
        'highlight1_text': 'Creating satisfying software and games.',
        'highlight2_title': 'New Book Studio',
        'highlight2_text': 'Continuing to publish high-quality books after the book studio closed in 2022.',
        'highlight3_title': 'User and Development Services Studio',
        'highlight3_text': 'Cleaning the environment, repairing equipment... Seemingly small but indispensable tasks!',
        'team_subtitle': 'Team Member Introductions',
        'member1_name': 'Mario, Lin',
        'member1_position': '02',
        'member2_name': 'Thomas, Wang',
        'member2_position': '06',
        'member3_name': 'Mika, Li',
        'member3_position': '07',
        'environment_title': 'Work Environment',
        'environment_subtitle': 'The best place to inspire creativity (images to be updated)'
    },
   
    'zh-CN': {
        // 通用
        'page_title': '主页',
        'company_name': 'SF',
        'company_slogan': '心系当下，共建明天',
        'back': '返回',
        'copyright': '版权所有',
        
        // 导航菜单
        'nav_home': '首页',
        'nav_about': '关于',
        'nav_studio': '工作室',
        'nav_download': '软件下载',
        
        // 首页
        'welcome_title': '欢迎来到SF',
        'welcome_text': 'SF致力于为客户提供最优质的产品和服务。',
        'services_title': '服务提示',
        'services_text': '本站点尚未完成！在2025-6-1之前（或者Teams官方另行通知），本页面上的内容均为测试内容，可能出现较多问题，请勿理会。',
        
        // 关于SF页
        'about_title': '关于SF',
        'about_company': '简介',
        'about_text': 'SF是一个由创始人及他的朋友们组成的团队。',
        'team_title': '团队',
        'team_text': 'SF的团队成员分布在不同工作室中。',
        'values_title': '四条守则',
        'value1': '绿色',
        'value2': '协调',
        'value3': '互助',
        'value4': '规范',
        
        // 下载页
        'download_title': '产品下载',
        'product_title': '产品',
        'product1_desc': 'Minecraft Config Tool',
        'product2_desc': 'Android Toolbag',
        'product3_desc': 'Punch System',
        'file_size': '大小',
        'update_time': '更新',
        'download_btn': '下载',
        'system_req': '系统要求',
        'req1': 'Windows 10/11 或 macOS 10.15+',
        'req2': '4GB 内存',
        'req3': '2GB 存储',
        'req4': '稳定的网络连接',
        
        // 工作室页
        'studio_title': '工作室',
        'studio_slogan': '创意与技术的完美融合空间',
        'about_studio_title': '工作室',
        'about_studio_text': '在这里，SF打造创新的产品和体验。',
        'highlight1_title': '游戏和软件工作室',
        'highlight1_text': '制作令人满意的软件和游戏。',
        'highlight2_title': '新书本工作室',
        'highlight2_text': '替代2022年关闭的书本工作室，继续出版优质书本。',
        'highlight3_title': '用户和发展服务工作室',
        'highlight3_text': '清洁环境、修复设备……看似微小却不可或缺！',
        'team_subtitle': '团队成员介绍',
        'member1_name': 'Mario, Lin',
        'member1_position': '02',
        'member2_name': 'Thomas, Wang',
        'member2_position': '06',
        'member3_name': 'Mika, Li',
        'member3_position': '07',
        'environment_title': '工作环境',
        'environment_subtitle': '激发创意的最佳场所（图片有待更新）'
    }
};

// 初始化语言
let currentLang = localStorage.getItem('language') || 'zh-CN';

// 切换语言函数
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    applyTranslations();
    
    // 如果是在公告页面且已经加载了内容，重新加载当前页
    if (window.location.pathname.includes('announcements.html') && typeof loadPage === 'function') {
        const currentPage = paginationConfig?.currentPage || 1;
        loadPage(currentPage);
    }
}

// 应用翻译
function applyTranslations() {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else if (element.tagName === 'IMG') {
                element.alt = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
    
    // 更新语言选择器
    const selector = document.getElementById('language-selector');
    if (selector) selector.value = currentLang;
    
    // 更新页面语言属性
    document.documentElement.lang = currentLang;
}

// 初始化语言选择器
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = currentLang;
        selector.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
    
    applyTranslations();
});

// 暴露函数给全局作用域
window.changeLanguage = changeLanguage;
window.loadLanguageContent = applyTranslations;  // 为动态加载的内容提供翻译功能