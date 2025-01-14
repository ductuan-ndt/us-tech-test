// 2. Bài toán Two Sum
// Mô Tả
//     Cho một mảng số nguyên nums và một số nguyên target, hãy tìm tất cả các cặp chỉ số của hai số trong mảng mà tổng của chúng bằng target. Giả định rằng có thể có nhiều cặp thỏa mãn điều kiện này, và bạn cần trả về tất cả các cặp chỉ số khác nhau.

// Đầu Vào
//     Một mảng số nguyên nums với độ dài n (1 ≤ n ≤ 10^4) chứa các số nguyên. Các số trong mảng có thể là số dương, số âm hoặc số không.
//     Một số nguyên target (−10^9 ≤ target ≤ 10^9) là tổng mà bạn cần tìm.
// Đầu Ra
//     Trả về một mảng hai chiều chứa tất cả các cặp chỉ số (i, j) (0 ≤ i < j < n) sao cho nums[i] + nums[j] == target.
//     Nếu không tìm thấy cặp nào, hãy trả về mảng rỗng.
// Điều Kiện
//     Không sử dụng cùng một phần tử hai lần để tạo thành tổng.
//     Các chỉ số trong các cặp trả về phải là duy nhất và không trùng lặp.
//     Thứ tự của các cặp trong kết quả không quan trọng.

function twoSum(nums, target) {
    const result = [];
    const map = new Map(); // Sử dụng hash map để lưu các phần tử đã duyệt qua

    for (let i = 0; i < nums.length; i++) {
        const element = target - nums[i];

        if (map.has(element)) {
            result.push([map.get(element), i]); // Lấy chỉ số của element và chỉ số hiện tại
        }

        // Lưu giá trị hiện tại và chỉ số của nó vào hash map
        map.set(nums[i], i);
    }

    return result;
}

console.log(twoSum([2, -5, 8, 2, 1, 4, 5], 3));
//[ [ 1, 2 ], [ 3, 4 ] ]