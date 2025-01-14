// 1. Thuật toán kiểm tra chuỗi đối xứng.

// Cho một chuỗi s, viết một thuật toán để kiểm tra xem chuỗi đó có phải là chuỗi đối xứng hay không. Một chuỗi đối xứng là chuỗi có thứ tự ký tự giống nhau
// khi đọc từ trái sang phải và từ phải sang trái. Ví dụ: "radar" và "level" là các chuỗi đối xứng.

// Đầu Vào
//     Một chuỗi s chứa các ký tự chữ cái, chữ số và ký tự đặc biệt (0 ≤ độ dài của s ≤ 10^5).
// Đầu Ra
//     Trả về true nếu chuỗi s là chuỗi đối xứng, ngược lại trả về false.

// Ví Dụ
//     Ví Dụ 1:
//         Input: "level"
//         Output: true
//         Giải Thích: "level" đọc từ trái sang phải và từ phải sang trái đều giống nhau.
//     Ví Dụ 2:
//         Input: "hello"
//         Output: false
//         Giải Thích: "hello" không giống nhau khi đọc từ hai chiều.

// Hàm kiểm tra chuỗi đối xứng
const checkString = (s) => {
    // Đảo ngược chuỗi
    const reversed = s.split('').reverse().join('');
    // So sánh chuỗi ban đầu và chuỗi đã đảo ngược
    return s === reversed;
}

// Đầu tiên, chúng ta sử dụng hàm readline để lấy đầu vào từ người dùng
const readline = require('readline');

// Tạo giao diện readline để nhập dữ liệu từ console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Nhập chuỗi s từ người dùng
rl.question('Nhập chuỗi s: ', (s) => {
    // Kiểm tra độ dài của s
    if (s.length >= 0 && s.length <= 100000) {
        if (checkString(s) == true) {
            console.log(checkString(s), '- là chuỗi đối xứng');
        }
        else
            console.log(checkString(s), '- không là chuỗi đối xứng');
    }
    else {
        console.log('Độ dài phải nằm trong khoảng từ 0 đến 100000.');
    }
    // Đóng giao diện readline
    rl.close();
});
