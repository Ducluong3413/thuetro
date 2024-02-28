        var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
        var ChuyenSlide = document.getElementsByClassName("slide-chuyenanh")[0];
        var Chuyen = 0;

        function NextSlide() {
            Chuyen += KichThuoc;
            if (Chuyen >= (ChuyenSlide.children.length - 1) * KichThuoc) {
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