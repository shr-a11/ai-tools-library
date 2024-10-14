document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            alert('搜索功能正在开发中：' + this.value);
        }
    });

    const categoryLinks = document.querySelectorAll('.categories a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('分类页面正在开发中：' + this.dataset.category);
        });
    });

    const toolLinks = document.querySelectorAll('.tool-link');
    toolLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('工具详情页面正在开发中：' + this.dataset.tool);
        });
    });
});
