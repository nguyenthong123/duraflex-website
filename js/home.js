document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Xóa active class từ tất cả buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Xóa active class từ tất cả content
            tabContents.forEach(content => content.classList.remove('active'));

            // Thêm active class cho button được click
            button.classList.add('active');
            // Hiện content tương ứng
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});