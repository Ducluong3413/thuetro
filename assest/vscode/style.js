// Chuyển slide
var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("slide-chuyenanh")[0];
var Chuyen = 0;

function NextSlide() {
    Chuyen += KichThuoc;
    if (Chuyen >= ChuyenSlide.children.length * KichThuoc) {
        Chuyen = 0;
    }
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

function PreviousSlide() {
    Chuyen -= KichThuoc;
    if (Chuyen < 0) {
        Chuyen = (ChuyenSlide.children.length - 1) * KichThuoc;
    }
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

function StartAutoSlide() {
    intervalId = setInterval(NextSlide, 3000); // Thay đổi 3000 thành khoảng thời gian bạn muốn
}

function StopAutoSlide() {
    clearInterval(intervalId);
}

// Bắt đầu chuyển động tự động khi trang được tải
StartAutoSlide();

// Đăng nhập và đăng ký
document.addEventListener("DOMContentLoaded", function() {
    var loginLink = document.getElementById('login');
    var registerLink = document.querySelector('.register');
    var loginModal = document.getElementById('loginModal');
    var registerModal = document.getElementById('registerModal');

    loginLink.addEventListener('click', function() {
        registerModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    var loginCloseButton = document.querySelector('#loginModal .close');
    loginCloseButton.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    registerLink.addEventListener('click', function() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });

    var registerCloseButton = document.querySelector('#registerModal .close');
    registerCloseButton.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    var registerNewAccountLink = document.querySelector('#loginModal .body-no-have-account a');
    registerNewAccountLink.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });
});
