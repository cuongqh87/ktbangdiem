document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Get references to the buttons
    const pasteButton = document.getElementById('paste-data-button');
    const checkButton = document.getElementById('check-data-button');
    const checkSpecialButton = document.getElementById('check-special-ability-button');
    const editButton = document.getElementById('edit-data-button');
    const copyButton = document.getElementById('copy-data-button');

    // Get reference to the data table container
    const dataTableDiv = document.getElementById('data-table');
    console.log('Data Table Div found:', !!dataTableDiv);

    // Get references to the class links in the navigation
    const classLinks = document.querySelectorAll('nav ul li a');

    console.log('Found class links:', classLinks.length);

    // Biến lưu lớp hiện hành (1,2,3,4,5)
    let currentClassNumber = null;

    // Hàm tạo HTML cho bảng dựa trên lớp
    const generateTableHTML = (classNumber) => {
        console.log(`Generating table for Class ${classNumber}`);
        currentClassNumber = classNumber; // Lưu lại lớp hiện hành
        let theadHTML = '';
        if (classNumber === 1 || classNumber === 2) {
            theadHTML = `
                <thead>
                    <tr>
                        <th rowspan="3">STT</th>
                        <th rowspan="3">Mã lớp</th>
                        <th rowspan="3">Mã học sinh</th>
                        <th rowspan="3">Họ tên</th>
                        <th rowspan="3">Ngày sinh</th>
                        <th colspan="13">Môn học và hoạt động giáo dục</th>
                        <th colspan="8">Năng lực cốt lõi</th>
                        <th colspan="5">Phẩm chất chủ yếu</th>
                        <th rowspan="3">Hoàn thành chương trình lớp học</th>
                        <th rowspan="3">Lên lớp</th>
                        <th rowspan="3">Xếp loại</th>
                    </tr>
                    <tr>
                        <th colspan="2">Toán</th>
                        <th colspan="2">Tiếng việt</th>
                        <th rowspan="1">Đạo đức</th>
                        <th rowspan="1">Tự nhiên và xã hội</th>
                        <th rowspan="1">Ngoại ngữ</th>
                        <th rowspan="1">Tiếng dân tộc</th>
                        <th rowspan="1">TH-CN (Tin học)</th>
                        <th rowspan="1">Nghệ thuật (Âm nhạc)</th>
                        <th rowspan="1">Nghệ thuật (Mĩ thuật)</th>
                        <th rowspan="1">Hoạt động trải nghiệm</th>
                        <th rowspan="1">Giáo dục thể chất</th>
                        <th colspan="3">Năng lực chung</th>
                        <th colspan="5">Năng lực đặc thù</th>
                        <th rowspan="2">Yêu nước</th>
                        <th rowspan="2">Nhân ái</th>
                        <th rowspan="2">Chăm chỉ</th>
                        <th rowspan="2">Trung thực</th>
                        <th rowspan="2">Trách nhiệm</th>
                    </tr>
                    <tr>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Tự chủ và tự học</th>
                        <th>Giao tiếp và hợp tác</th>
                        <th>Giải quyết vấn đề và sáng tạo</th>
                        <th>Ngôn ngữ</th>
                        <th>Tính toán</th>
                        <th>Khoa học</th>
                        <th>Thẩm mĩ</th>
                        <th>Thể chất</th>
                    </tr>
                </thead>
            `;
        } else if (classNumber === 3) {
            theadHTML = `
                <thead>
                    <tr>
                        <th rowspan="3">STT</th>
                        <th rowspan="3">Mã lớp</th>
                        <th rowspan="3">Mã định danh Bộ GD&ĐT</th>
                        <th rowspan="3">Họ tên</th>
                        <th rowspan="3">Ngày sinh</th>
                        <th colspan="17">Môn học và hoạt động giáo dục</th>
                        <th colspan="10">Năng lực cốt lõi</th>
                        <th colspan="5">Phẩm chất chủ yếu</th>
                        <th rowspan="3">Hoàn thành chương trình lớp học</th>
                        <th rowspan="3">Lên lớp</th>
                        <th rowspan="3">Xếp loại</th>
                    </tr>
                    <tr>
                        <th colspan="2">Toán</th>
                        <th colspan="2">Tiếng việt</th>
                        <th rowspan="1">Đạo đức</th>
                        <th rowspan="1">Tự nhiên và xã hội</th>
                        <th colspan="2">Ngoại ngữ</th>
                        <th colspan="2">TH-CN (Tin học)</th>
                        <th rowspan="1">Tiếng dân tộc</th>
                        <th colspan="2">TH-CN (Công nghệ)</th>
                        <th rowspan="1">Nghệ thuật (Âm nhạc)</th>
                        <th rowspan="1">Nghệ thuật (Mĩ thuật)</th>
                        <th rowspan="1">Hoạt động trải nghiệm</th>
                        <th rowspan="1">Giáo dục thể chất</th>
                        <th colspan="3">Năng lực chung</th>
                        <th colspan="7">Năng lực đặc thù</th>
                        <th rowspan="2">Yêu nước</th>
                        <th rowspan="2">Nhân ái</th>
                        <th rowspan="2">Chăm chỉ</th>
                        <th rowspan="2">Trung thực</th>
                        <th rowspan="2">Trách nhiệm</th>
                    </tr>
                    <tr>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        
                                       
                        <th>Tự chủ và tự học</th>
                        <th>Giao tiếp và hợp tác</th>
                        <th>Giải quyết vấn đề và sáng tạo</th>
                        <th>Ngôn ngữ</th>
                        <th>Tính toán</th>
                        <th>Khoa học</th>
                        <th>Công nghệ</th>
                        <th>Tin học</th>
                        <th>Thẩm mĩ</th>
                        <th>Thể chất</th>
                    </tr>
                </thead>
            `;
        } else if (classNumber === 4 || classNumber === 5) {
            theadHTML = `
                <thead>
                    <tr>
                        <th rowspan="3">STT</th>
                        <th rowspan="3">Mã lớp</th>
                        <th rowspan="3">Mã định danh Bộ GD&ĐT</th>
                        <th rowspan="3">Họ tên</th>
                        <th rowspan="3">Ngày sinh</th>
                        <th colspan="20">Môn học và hoạt động giáo dục</th>
                        <th colspan="10">Năng lực cốt lõi</th>
                        <th colspan="5">Phẩm chất chủ yếu</th>
                        <th rowspan="3">Hoàn thành chương trình lớp học</th>
                        <th rowspan="3">Lên lớp</th>
                        <th rowspan="3">Xếp loại</th>
                    </tr>
                    <tr>
                        <th colspan="2">Toán</th>
                        <th colspan="2">Tiếng việt</th>
                        <!-- "Đạo đức" là cột đơn nên không được kiểm tra -->
                        <th rowspan="1">Đạo đức</th>
                        <th colspan="2">Lịch sử &amp; Địa lí</th>
                        <th colspan="2">Ngoại ngữ</th>
                        <th colspan="2">TH-CN (Tin học)</th>
                        <th colspan="2">Khoa học</th>
                        <!-- "Tiếng dân tộc" là cột đơn -->
                        <th rowspan="1">Tiếng dân tộc</th>
                        <th colspan="2">TH-CN (Công nghệ)</th>
                        <th rowspan="1">Nghệ thuật (Âm nhạc)</th>
                        <th rowspan="1">Nghệ thuật (Mĩ thuật)</th>
                        <th rowspan="1">Hoạt động trải nghiệm</th>
                        <th rowspan="1">Giáo dục thể chất</th>
                        <th colspan="3">Năng lực chung</th>
                        <th colspan="7">Năng lực đặc thù</th>
                        <th rowspan="2">Yêu nước</th>
                        <th rowspan="2">Nhân ái</th>
                        <th rowspan="2">Chăm chỉ</th>
                        <th rowspan="2">Trung thực</th>
                        <th rowspan="2">Trách nhiệm</th>
                    </tr>
                    <tr>
                        <!-- Với Lớp 4/5, chỉ kiểm tra các cặp có 2 cột -->
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <!-- Cột Đạo đức và Tiếng dân tộc là cột đơn, bỏ qua -->
                        <th></th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <th></th>
                        <th>Mức đạt được</th>
                        <th>Điểm KTĐK</th>
                        <!-- Các cột sau không thuộc nhóm kiểm tra -->
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Mức đạt được</th>
                        <th>Tự chủ và tự học</th>
                        <th>Giao tiếp và hợp tác</th>
                        <th>Giải quyết vấn đề và sáng tạo</th>
                        <th>Ngôn ngữ</th>
                        <th>Tính toán</th>
                        <th>Khoa học</th>
                        <th>Công nghệ</th>
                        <th>Tin học</th>
                        <th>Thẩm mĩ</th>
                        <th>Thể chất</th>
                    </tr>
                </thead>
            `;
        } else {
             // Trả về bảng rỗng hoặc thông báo nếu lớp không được hỗ trợ
             return `<h2>Không hỗ trợ hiển thị bảng cho Lớp ${classNumber}</h2>`;
        }
        return `
            <table>
                ${theadHTML}
                <tbody>
                    <!-- Dữ liệu sẽ được dán vào đây -->
                </tbody>
            </table>
        `;
    };

    // Add click event listeners to the class links
    if (classLinks.length > 0) {
        classLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                const classId = link.id; // e.g., 'class1'
                const classNumber = parseInt(classId.replace('class', ''), 10);

                if (dataTableDiv) {
                    dataTableDiv.innerHTML = generateTableHTML(classNumber);
                } else {
                    console.error('Data table container not found!');
                }
            });
        });
    } else {
        console.log('No class links found.');
    }

    // Xử lý sự kiện dán dữ liệu từ Excel
    if (pasteButton && dataTableDiv) {
        pasteButton.addEventListener('click', () => {
            const pastedText = prompt("Dán Dữ liệu từ Excel vào đây (Ctrl+V):");
            if (pastedText) {
                const rows = pastedText.trim().split('\n');
                let tableBodyHTML = '';
                rows.forEach(row => {
                    const cells = row.split('\t');
                    tableBodyHTML += '<tr>';
                    cells.forEach(cell => {
                        tableBodyHTML += `<td>${cell}</td>`;
                    });
                    tableBodyHTML += '</tr>';
                });
                const tbody = dataTableDiv.querySelector('tbody');
                if (tbody) {
                    tbody.innerHTML = tableBodyHTML;
                } else {
                    alert("Vui lòng nhấp vào một lớp trước để tạo bảng.");
                }
            }
        });
    }

    // Xử lý sự kiện nút kiểm tra dữ liệu cho các môn có 2 cột (Mức đạt được & Điểm KTĐK)
    if (checkButton && dataTableDiv) {
        checkButton.addEventListener('click', () => {
            if (!currentClassNumber) {
                alert("Vui lòng chọn lớp trước khi kiểm tra.");
                return;
            }
            const tbody = dataTableDiv.querySelector('tbody');
            if (!tbody) return;
            const rows = tbody.querySelectorAll('tr');
            let subjectPairs = [];
            if (currentClassNumber === 1 || currentClassNumber === 2) {
                subjectPairs = [
                    { name: "Toán", rateIndex: 5, scoreIndex: 6 },
                    { name: "Tiếng việt", rateIndex: 7, scoreIndex: 8 }
                ];
            } else if (currentClassNumber === 3) {
                // Cập nhật subjectPairs cho Lớp 3
                subjectPairs = [
                    { name: "Toán", rateIndex: 5, scoreIndex: 6 },
                    { name: "Tiếng việt", rateIndex: 7, scoreIndex: 8 },
                    { name: "Ngoại ngữ", rateIndex: 11, scoreIndex: 12 }, // Thêm Ngoại ngữ
                    { name: "TH-CN (Tin học)", rateIndex: 13, scoreIndex: 14 }, // Thêm TH-CN (Tin học)
                    { name: "TH-CN (Công nghệ)", rateIndex: 16, scoreIndex: 17 } // Thêm TH-CN (Công nghệ)
                ];
            } else if (currentClassNumber === 4 || currentClassNumber === 5) {
                // Chỉ kiểm tra các môn có cấu trúc 2 cột:
                subjectPairs = [
                    { name: "Toán", rateIndex: 5, scoreIndex: 6 },
                    { name: "Tiếng việt", rateIndex: 7, scoreIndex: 8 },
                    { name: "Lịch sử & Địa lí", rateIndex: 10, scoreIndex: 11 },
                    { name: "Ngoại ngữ", rateIndex: 12, scoreIndex: 13 },
                    { name: "TH-CN (Tin học)", rateIndex: 14, scoreIndex: 15 },
                    { name: "Khoa học", rateIndex: 16, scoreIndex: 17 }, // Sửa index Khoa học
                    { name: "TH-CN (Công nghệ)", rateIndex: 19, scoreIndex: 20 }
                ];
            } else {
                 alert("Chức năng kiểm tra kết quả giáo dục chưa hỗ trợ cho lớp này.");
                 return;
            }
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                subjectPairs.forEach(pair => {
                    // Đảm bảo hàng có đủ số cột trước khi truy cập
                    if (cells.length > pair.scoreIndex) {
                        const rateCell = cells[pair.rateIndex];
                        const scoreCell = cells[pair.scoreIndex];
                        const rate = rateCell.textContent.trim();
                        const score = scoreCell.textContent.trim();
                        let valid = false;
                        if (rate === 'T') {
                            valid = ['7', '8', '9', '10'].includes(score);
                        } else if (rate === 'H') {
                            valid = ['5', '6'].includes(score);
                        } else if (rate === 'C') {
                            valid = ['1', '2', '3', '4'].includes(score);
                        }
                        if (!valid) {
                            rateCell.style.backgroundColor = 'red';
                            scoreCell.style.backgroundColor = 'red';
                        } else {
                            rateCell.style.backgroundColor = '';
                            scoreCell.style.backgroundColor = '';
                        }
                    }
                });
            });
        });
    }

    // Phát triển chức năng mới: Kiểm tra Năng lực đặc thù
    if (checkSpecialButton && dataTableDiv) {
        checkSpecialButton.addEventListener('click', () => {
            if (!currentClassNumber) {
                alert("Vui lòng chọn lớp trước khi kiểm tra năng lực đặc thù.");
                return;
            }
            const tbody = dataTableDiv.querySelector('tbody');
            if (!tbody) return;
            const rows = tbody.querySelectorAll('tr');

            let specialChecks = [];
            let checkThamMy = false; // Flag để kiểm tra năng lực Thẩm mĩ riêng cho Lớp 4,5
            let checkThamMyClass3 = false; // Flag để kiểm tra năng lực Thẩm mĩ riêng cho Lớp 3

            // Định nghĩa các cặp kiểm tra dựa theo lớp
            if (currentClassNumber === 1 || currentClassNumber === 2) {
                // Cấu hình kiểm tra cho Lớp 1, 2 (dựa trên cấu trúc bảng)
                specialChecks = [
                    { subject: "Toán", rateIndex: 5, abilityIndex: 22, color: "yellow" }, // Toán: Mức đạt được (5) vs Tính toán (22)
                    { subject: "Tiếng Việt", rateIndex: 7, abilityIndex: 21, color: "orange" }, // Tiếng Việt: Mức đạt được (7) vs Ngôn ngữ (21)
                    { subject: "Tự nhiên và xã hội", rateIndex: 10, abilityIndex: 23, color: "brown" }, // TNXH: Mức đạt được (10) vs Khoa học (23)
                    { subject: "Giáo dục thể chất", rateIndex: 17, abilityIndex: 25, color: "violet" } // GDTC: Mức đạt được (17) vs Thể chất (25)
                ];
                // Không bật cờ checkThamMy cho Lớp 1,2 vì xử lý riêng bên dưới
                checkThamMy = false;
                checkThamMyClass3 = false;
            } else if (currentClassNumber === 3) {
                // Cấu hình kiểm tra cho Lớp 3 (dựa trên cấu trúc bảng mới)
                specialChecks = [
                    { subject: "Toán", rateIndex: 5, abilityIndex: 26, color: "yellow" }, // Toán: Mức đạt được (5) vs Tính toán (26)
                    { subject: "Tiếng Việt", rateIndex: 7, abilityIndex: 25, color: "orange" }, // Tiếng Việt: Mức đạt được (7) vs Ngôn ngữ (25)
                    { subject: "Tự nhiên và xã hội", rateIndex: 10, abilityIndex: 27, color: "brown" }, // TNXH: Mức đạt được (10) vs Khoa học (27)
                    { subject: "TH-CN (Tin học)", rateIndex: 13, abilityIndex: 29, color: "lightblue" }, // TH-CN (Tin học): Mức đạt được (13) vs Tin học (29)
                    { subject: "TH-CN (Công nghệ)", rateIndex: 16, abilityIndex: 28, color: "lightgreen" }, // TH-CN (Công nghệ): Mức đạt được (16) vs Công nghệ (28)
                    { subject: "Giáo dục thể chất", rateIndex: 21, abilityIndex: 31, color: "violet" } // GDTC: Mức đạt được (21) vs Thể chất (31)
                ];
                 checkThamMy = false; // Không bật cờ checkThamMy cho Lớp 3
                 checkThamMyClass3 = true; // Bật cờ kiểm tra Thẩm mĩ cho Lớp 3
            } else if (currentClassNumber === 4 || currentClassNumber === 5) {
                // Cấu hình kiểm tra cho Lớp 4, 5 (cấu hình cũ)
                specialChecks = [
                    { subject: "Toán", rateIndex: 5, abilityIndex: 29, color: "yellow" },
                    { subject: "Tiếng Việt", rateIndex: 7, abilityIndex: 28, color: "orange" },
                    { subject: "Khoa học", rateIndex: 16, abilityIndex: 30, color: "brown" }, // rateIndex 16
                    { subject: "Tin học", rateIndex: 14, abilityIndex: 32, color: "lightblue" },
                    { subject: "Công nghệ", rateIndex: 19, abilityIndex: 31, color: "lightgreen" },
                    { subject: "Giáo dục thể chất", rateIndex: 24, abilityIndex: 34, color: "violet" }
                ];
                checkThamMy = true; // Bật cờ kiểm tra Thẩm mĩ cho Lớp 4,5
                checkThamMyClass3 = false;
            } else {
                 alert("Chức năng kiểm tra năng lực đặc thù chưa hỗ trợ cho lớp này.");
                 return;
            }

            // Kiểm tra các cặp theo quy tắc: T=>T, H=>Đ, C=>C
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                specialChecks.forEach(check => {
                    // Đảm bảo hàng có đủ số cột trước khi truy cập
                    if (cells.length > Math.max(check.rateIndex, check.abilityIndex)) {
                        const rateCell = cells[check.rateIndex];
                        const abilityCell = cells[check.abilityIndex];
                        const rate = rateCell.textContent.trim();
                        const ability = abilityCell.textContent.trim();
                        let expected = "";
                        if (rate === "T") {
                            expected = "T";
                        } else if (rate === "H") {
                            expected = "Đ";
                        } else if (rate === "C") {
                            expected = "C";
                        }
                        if (ability !== expected) {
                            rateCell.style.backgroundColor = check.color;
                            abilityCell.style.backgroundColor = check.color;
                        } else {
                            rateCell.style.backgroundColor = "";
                            abilityCell.style.backgroundColor = "";
                        }
                    }
                });

                // Kiểm tra năng lực Thẩm mĩ cho Lớp 1, 2 (ô index 24) dựa trên Âm nhạc (index 14) và Mĩ thuật (index 15)
                if ((currentClassNumber === 1 || currentClassNumber === 2) && cells.length > 24 && cells.length > 14 && cells.length > 15) {
                     const amNhac = cells[14].textContent.trim();
                     const miMy = cells[15].textContent.trim();
                     const thamMyCell = cells[24];
                     const amNhacCell = cells[14]; // Lấy ô Âm nhạc
                     const miMyCell = cells[15]; // Lấy ô Mĩ thuật

                     let expected = "";

                     if (amNhac === "C" || miMy === "C") {
                         expected = "C";
                     } else if (amNhac === "T" && miMy === "T") {
                         expected = "T";
                     } else if (amNhac === "H" || miMy === "H") { // Sửa điều kiện: chỉ cần 1 môn là "H"
                         expected = "Đ";
                     }
                     // Có thể bổ sung xử lý khác nếu cần khi kết hợp "T" và "H).

                     const actual = thamMyCell.textContent.trim();
                     if (actual !== expected) {
                         thamMyCell.style.backgroundColor = "pink"; // Tô màu hồng cho Thẩm mĩ
                         amNhacCell.style.backgroundColor = "pink"; // Tô màu hồng cho Âm nhạc
                         miMyCell.style.backgroundColor = "pink"; // Tô màu hồng cho Mĩ thuật
                     } else {
                         thamMyCell.style.backgroundColor = "";
                         amNhacCell.style.backgroundColor = ""; // Xóa màu nền
                         miMyCell.style.backgroundColor = ""; // Xóa màu nền
                     }
                }

                // Kiểm tra năng lực Thẩm mĩ cho Lớp 3 (ô index 30) dựa trên Âm nhạc (index 18) và Mĩ thuật (index 19) - Cập nhật index
                if (checkThamMyClass3 && cells.length > 30 && cells.length > 18 && cells.length > 19) {
                    const amNhac = cells[18].textContent.trim(); // Cập nhật index
                    const miMy = cells[19].textContent.trim(); // Cập nhật index
                    const thamMyCell = cells[30];
                    const amNhacCell = cells[18]; // Cập nhật index
                    const miMyCell = cells[19]; // Cập nhật index

                    let expected = "";
                    if (amNhac === "C" || miMy === "C") {
                        expected = "C";
                    } else if (amNhac === "T" && miMy === "T") {
                        expected = "T";
                    } else if (amNhac === "H" || miMy === "H") {
                        expected = "Đ";
                    }

                    const actual = thamMyCell.textContent.trim();
                    if (actual !== expected) {
                        thamMyCell.style.backgroundColor = "pink"; // Tô màu hồng cho Thẩm mĩ
                        amNhacCell.style.backgroundColor = "pink"; // Tô màu hồng cho Âm nhạc
                        miMyCell.style.backgroundColor = "pink"; // Tô màu hồng cho Mĩ thuật
                    } else {
                        thamMyCell.style.backgroundColor = "";
                        amNhacCell.style.backgroundColor = ""; // Xóa màu nền
                        miMyCell.style.backgroundColor = ""; // Xóa màu nền
                    }
                }


                // Kiểm tra năng lực Thẩm mĩ (ô index 33) dựa trên 2 môn: Âm nhạc (index 21) và Mĩ thuật (index 22)
                // Chỉ áp dụng cho Lớp 4 và Lớp 5
                // Đảm bảo hàng có đủ số cột cho kiểm tra Thẩm mĩ
                if (checkThamMy && cells.length > 33 && cells.length > 21 && cells.length > 22) {
                    const amNhac = cells[21].textContent.trim(); // Lấy ô Âm nhạc
                    const miMy = cells[22].textContent.trim(); // Lấy ô Mĩ thuật
                    const thamMyCell = cells[33];
                    const amNhacCell = cells[21]; // Lấy ô Âm nhạc
                    const miMyCell = cells[22]; // Lấy ô Mĩ thuật

                    let expected = "";
                    // Nếu có ít nhất 1 môn "C"
                    if (amNhac === "C" || miMy === "C") {
                        expected = "C";
                    }
                    // Nếu cả 2 đều "T"
                    else if (amNhac === "T" && miMy === "T") {
                        expected = "T";
                    }
                    // Nếu có ít nhất 1 môn "H"
                    else if (amNhac === "H" || miMy === "H") { // Sửa điều kiện: chỉ cần 1 môn là "H"
                        expected = "Đ";
                    }
                    // Có thể bổ sung xử lý khác nếu cần khi kết hợp "T" và "H).

                    const actual = thamMyCell.textContent.trim();
                    if (actual !== expected) {
                        // Tô màu ô năng lực Thẩm mĩ nếu không khớp
                        thamMyCell.style.backgroundColor = "pink";
                        amNhacCell.style.backgroundColor = "pink"; // Tô màu hồng cho Âm nhạc
                        miMyCell.style.backgroundColor = "pink"; // Tô màu hồng cho Mĩ thuật
                    } else {
                        thamMyCell.style.backgroundColor = "";
                        amNhacCell.style.backgroundColor = ""; // Xóa màu nền
                        miMyCell.style.backgroundColor = ""; // Xóa màu nền
                    }
                }
            });
        });
    }

    // Xử lý sự kiện nút Sửa Dữ liệu
    if (editButton && dataTableDiv) {
        editButton.addEventListener('click', () => {
            if (!currentClassNumber) {
                alert("Vui lòng chọn lớp trước khi sửa dữ liệu.");
                return;
            }
            const tbody = dataTableDiv.querySelector('tbody');
            if (!tbody) return;
            const rows = tbody.querySelectorAll('tr');

            let subjectPairs = [];
            let specialChecks = [];
            let checkThamMy = false; // Flag để kiểm tra năng lực Thẩm mĩ riêng cho Lớp 4,5
            let checkThamMyClass3 = false; // Flag để kiểm tra năng lực Thẩm mĩ riêng cho Lớp 3

            // Định nghĩa các cặp kiểm tra dựa theo lớp (Tương tự như nút kiểm tra)
            if (currentClassNumber === 1 || currentClassNumber === 2) {
                subjectPairs = [
                    { name: "Toán", rateIndex: 5, scoreIndex: 6 },
                    { name: "Tiếng việt", rateIndex: 7, scoreIndex: 8 }
                ];
                 specialChecks = [
                    { subject: "Toán", rateIndex: 5, abilityIndex: 22 }, // Toán: Mức đạt được (5) vs Tính toán (22)
                    { subject: "Tiếng Việt", rateIndex: 7, abilityIndex: 21 }, // Tiếng Việt: Mức đạt được (7) vs Ngôn ngữ (21)
                    { subject: "Tự nhiên và xã hội", rateIndex: 10, abilityIndex: 23 }, // TNXH: Mức đạt được (10) vs Khoa học (23)
                    { subject: "Giáo dục thể chất", rateIndex: 17, abilityIndex: 25 } // GDTC: Mức đạt được (17) vs Thể chất (25)
                ];
                checkThamMy = false;
                checkThamMyClass3 = false;
            } else if (currentClassNumber === 3) {
                subjectPairs = [
                    { name: "Toán", rateIndex: 5, scoreIndex: 6 },
                    { name: "Tiếng việt", rateIndex: 7, scoreIndex: 8 },
                    { name: "Ngoại ngữ", rateIndex: 11, scoreIndex: 12 },
                    { name: "TH-CN (Tin học)", rateIndex: 13, scoreIndex: 14 },
                    { name: "TH-CN (Công nghệ)", rateIndex: 16, scoreIndex: 17 }
                ];
                 // Cấu hình kiểm tra cho Lớp 3 (dựa trên cấu trúc bảng mới)
                 specialChecks = [
                    { subject: "Toán", rateIndex: 5, abilityIndex: 26 }, // Toán: Mức đạt được (5) vs Tính toán (26)
                    { subject: "Tiếng Việt", rateIndex: 7, abilityIndex: 25 }, // Tiếng Việt: Mức đạt được (7) vs Ngôn ngữ (25)
                    { subject: "Tự nhiên và xã hội", rateIndex: 10, abilityIndex: 27 }, // TNXH: Mức đạt được (10) vs Khoa học (27)
                    { subject: "TH-CN (Tin học)", rateIndex: 13, abilityIndex: 29 }, // TH-CN (Tin học): Mức đạt được (13) vs Tin học (29)
                    { subject: "TH-CN (Công nghệ)", rateIndex: 16, abilityIndex: 28 }, // TH-CN (Công nghệ): Mức đạt được (16) vs Công nghệ (28)
                    { subject: "Giáo dục thể chất", rateIndex: 21, abilityIndex: 31 } // GDTC: Mức đạt được (21) vs Thể chất (31)
                ];
                checkThamMy = false;
                checkThamMyClass3 = true;
            } else if (currentClassNumber === 4 || currentClassNumber === 5) {
                subjectPairs = [
                    { name: "Toán", rateIndex: 5, scoreIndex: 6 },
                    { name: "Tiếng việt", rateIndex: 7, scoreIndex: 8 },
                    { name: "Lịch sử & Địa lí", rateIndex: 10, scoreIndex: 11 },
                    { name: "Ngoại ngữ", rateIndex: 12, scoreIndex: 13 },
                    { name: "TH-CN (Tin học)", rateIndex: 14, scoreIndex: 15 },
                    { name: "Khoa học", rateIndex: 16, scoreIndex: 17 },
                    { name: "TH-CN (Công nghệ)", rateIndex: 19, scoreIndex: 20 }
                ];
                 specialChecks = [
                    { subject: "Toán", rateIndex: 5, abilityIndex: 29 },
                    { subject: "Tiếng Việt", rateIndex: 7, abilityIndex: 28 },
                    { subject: "Khoa học", rateIndex: 16, abilityIndex: 30 }, // Corrected rateIndex for Khoa học
                    { subject: "Tin học", rateIndex: 14, abilityIndex: 32 },
                    { subject: "Công nghệ", rateIndex: 19, abilityIndex: 31 },
                    { subject: "Giáo dục thể chất", rateIndex: 24, abilityIndex: 34 }
                ];
                checkThamMy = true;
                checkThamMyClass3 = false;
            } else {
                 alert("Chức năng sửa dữ liệu chưa hỗ trợ cho lớp này.");
                 return;
            }

            rows.forEach(row => {
                const cells = row.querySelectorAll('td');

                // Sửa Mức đạt được dựa trên Điểm KTĐK
                subjectPairs.forEach(pair => {
                    if (cells.length > pair.scoreIndex) {
                        const rateCell = cells[pair.rateIndex];
                        const scoreCell = cells[pair.scoreIndex];
                        const score = parseInt(scoreCell.textContent.trim(), 10); // Chuyển điểm sang số

                        let expectedRate = "";
                        if (!isNaN(score)) { // Chỉ xử lý nếu điểm là số hợp lệ
                            if (score >= 7 && score <= 10) {
                                expectedRate = "T";
                            } else if (score >= 5 && score <= 6) {
                                expectedRate = "H";
                            } else if (score >= 1 && score <= 4) {
                                expectedRate = "C";
                            }
                            // Cập nhật Mức đạt được
                            rateCell.textContent = expectedRate;
                            // Xóa màu nền kiểm tra nếu có
                            rateCell.style.backgroundColor = "";
                            scoreCell.style.backgroundColor = "";
                        }
                    }
                });

                // Sửa Năng lực đặc thù dựa trên Mức đạt được
                specialChecks.forEach(check => {
                     if (cells.length > Math.max(check.rateIndex, check.abilityIndex)) {
                        const rateCell = cells[check.rateIndex];
                        const abilityCell = cells[check.abilityIndex];
                        const rate = rateCell.textContent.trim(); // Lấy mức đạt được đã được sửa (nếu có)

                        let expectedAbility = "";
                        if (rate === "T") {
                            expectedAbility = "T";
                        } else if (rate === "H") {
                            expectedAbility = "Đ";
                        } else if (rate === "C") {
                            expectedAbility = "C";
                        }
                        // Cập nhật Năng lực đặc thù
                        abilityCell.textContent = expectedAbility;
                        // Xóa màu nền kiểm tra nếu có
                        rateCell.style.backgroundColor = "";
                        abilityCell.style.backgroundColor = "";
                    }
                });

                // Sửa năng lực Thẩm mĩ cho Lớp 1, 2
                if ((currentClassNumber === 1 || currentClassNumber === 2) && cells.length > 24 && cells.length > 14 && cells.length > 15) {
                     const amNhac = cells[14].textContent.trim(); // Lấy mức đạt được Âm nhạc (có thể đã sửa)
                     const miMy = cells[15].textContent.trim(); // Lấy mức đạt được Mĩ thuật (có thể đã sửa)
                     const thamMyCell = cells[24];
                     const amNhacCell = cells[14];
                     const miMyCell = cells[15];

                     let expected = "";
                     if (amNhac === "C" || miMy === "C") {
                         expected = "C";
                     } else if (amNhac === "T" && miMy === "T") {
                         expected = "T";
                     } else if (amNhac === "H" || miMy === "H") {
                         expected = "Đ";
                     }
                     // Cập nhật năng lực Thẩm mĩ
                     thamMyCell.textContent = expected;
                     // Xóa màu nền kiểm tra nếu có
                     thamMyCell.style.backgroundColor = "";
                     amNhacCell.style.backgroundColor = "";
                     miMyCell.style.backgroundColor = "";
                }

                 // Sửa năng lực Thẩm mĩ cho Lớp 3 (ô index 30) dựa trên Âm nhạc (index 18) và Mĩ thuật (index 19) - Cập nhật index
                if (checkThamMyClass3 && cells.length > 30 && cells.length > 18 && cells.length > 19) {
                    const amNhac = cells[18].textContent.trim(); // Cập nhật index
                    const miMy = cells[19].textContent.trim(); // Cập nhật index
                    const thamMyCell = cells[30];
                    const amNhacCell = cells[18]; // Cập nhật index
                    const miMyCell = cells[19]; // Cập nhật index

                    let expected = "";
                    if (amNhac === "C" || miMy === "C") {
                        expected = "C";
                    } else if (amNhac === "T" && miMy === "T") {
                        expected = "T";
                    } else if (amNhac === "H" || miMy === "H") {
                        expected = "Đ";
                    }
                    // Cập nhật năng lực Thẩm mĩ
                    thamMyCell.textContent = expected;
                    // Xóa màu nền kiểm tra nếu có
                    thamMyCell.style.backgroundColor = "";
                    amNhacCell.style.backgroundColor = "";
                    miMyCell.style.backgroundColor = "";
                }

                 // Sửa năng lực Thẩm mĩ cho Lớp 4, 5
                if (checkThamMy && cells.length > 33 && cells.length > 21 && cells.length > 22) {
                    const amNhac = cells[21].textContent.trim(); // Lấy mức đạt được Âm nhạc (có thể đã sửa)
                    const miMy = cells[22].textContent.trim(); // Lấy mức đạt được Mĩ thuật (có thể đã sửa)
                    const thamMyCell = cells[33];
                    const amNhacCell = cells[21];
                    const miMyCell = cells[22];

                    let expected = "";
                    if (amNhac === "C" || miMy === "C") {
                        expected = "C";
                    } else if (amNhac === "T" && miMy === "T") {
                        expected = "T";
                    } else if (amNhac === "H" || miMy === "H") {
                        expected = "Đ";
                    }
                    // Cập nhật năng lực Thẩm mĩ
                    thamMyCell.textContent = expected;
                     // Xóa màu nền kiểm tra nếu có
                    thamMyCell.style.backgroundColor = "";
                    amNhacCell.style.backgroundColor = "";
                    miMyCell.style.backgroundColor = "";
                }
            });

            alert("Đã sửa dữ liệu theo quy tắc.");
        });
    }

    // Xử lý sự kiện nút Sao chép Dữ liệu
    if (copyButton && dataTableDiv) {
        copyButton.addEventListener('click', () => {
            const table = dataTableDiv.querySelector('table');
            if (!table) {
                alert("Không có dữ liệu bảng để sao chép.");
                return;
            }

            let data = '';
            // Chỉ chọn các hàng trong tbody (phần dữ liệu), bỏ qua thead (tiêu đề)
            const rows = table.querySelectorAll('tbody tr');

            rows.forEach(row => {
                const cells = row.querySelectorAll('td'); // Chỉ lấy ô dữ liệu (td)
                const rowData = [];
                cells.forEach(cell => {
                    // Lấy nội dung văn bản của ô
                    rowData.push(cell.textContent.trim());
                });
                // Nối các ô trong một hàng bằng tab, các hàng bằng xuống dòng
                data += rowData.join('\t') + '\n';
            });

            // Sử dụng Clipboard API để sao chép dữ liệu
            navigator.clipboard.writeText(data)
                .then(() => {
                    alert("Đã sao chép dữ liệu vào clipboard. Bạn có thể dán vào Excel.");
                })
                .catch(err => {
                    console.error('Lỗi khi sao chép dữ liệu: ', err);
                    alert("Không thể sao chép dữ liệu. Vui lòng thử lại hoặc sao chép thủ công.");
                });
        });
    }
});
