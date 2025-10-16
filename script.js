// Lấy tất cả các nút có class 'like-btn'
const likeButtons = document.querySelectorAll('.like-btn');

// Lặp qua từng nút và thêm sự kiện click
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Kiểm tra trạng thái hiện tại
        if (button.classList.contains('liked')) {
            // Nếu đã thích, thì bỏ thích
            button.classList.remove('liked');
            button.textContent = 'Thích (Like)';
        } else {
            // Nếu chưa thích, thì thích
            button.classList.add('liked');
            button.textContent = 'Đã thích';
        }
    });
});