/** Bài số 1
 * Mô hình 3 khối: số nguyên dương nhỏ nhất
 * Đầu vào:
 * - Tạo biến n, sum
 * Xử lý:
 * - Dùng vòng lặp tìm ra giá trị số nguyên dương nhỏ nhất
 * Đầu ra:
 * - Thông báo số nguyên dương nhỏ nhất
 */

function ketQua() {
  let n = 0;
  let sum = 0;
  while (sum < 10000) {
    n++;
    sum += n;
  }
  document.getElementById("alert1").innerHTML =
    "Số nguyên dương nhỏ nhất: " + n;
}

/** Bài số 2
 * Mô hình 3 khối: tính tổng
 * Đầu vào:
 * - Tạo biến x, n
 * Xử lý:
 * - Dom giá trị người dùng nhập
 * - Tạo biến mu, tinh, sum
 * - Dùng vòng lặp tính tổng lũy thừa
 * Đầu ra:
 * - Thông báo số nguyên dương nhỏ nhất
 */

function tinhTong() {
  let x = +document.getElementById("x").value;
  let n = +document.getElementById("n").value;
  let sum = 0;
  let mu = 1;
  let tinh = 0;
  while (mu <= n) {
    tinh = Math.pow(x, mu++);
    sum += tinh;
  }
  document.getElementById("alert2").innerHTML = "Tổng: " + sum;
}

/** Bài số 3
 * Mô hình 3 khối: tính giai thừa
 * Đầu vào:
 * - Tạo biến n
 * Xử lý:
 * - Dom giá trị người dùng nhập
 * - Tạo biến tinh, sum
 * - Dùng vòng lặp tính giai thừa
 * Đầu ra:
 * - Thông báo số giai thừa
 */

function tinhGiaiThua() {
  let n = +document.getElementById("num1").value;
  let sum = 1;
  let tinh = 0;
  for (let i = 1; i <= n; i++) {
    tinh = i * 1;
    sum *= tinh;
  }
  document.getElementById("alert3").innerHTML = "Giai thừa: " + sum;
}

/** Bài số 4
 * Mô hình 3 khối: tạo thẻ
 * Đầu vào:
 * - Tạo biến content=""
 * Xử lý:
 * - Dùng vòng lặp để tạo lập thẻ
 * Đầu ra:
 * - Thông báo các thẻ được tạo
 */
function taoThe() {
  var content = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2) {
      content += "<div class='bg-primary text-white  p-2'> Div Lẻ </div>";
    } else {
      content += "<div class='bg-danger text-white p-2'> Div Chẵn </div>";
    }
  }
  document.getElementById("alert4").innerHTML = content;
}

/** Bài số 5
 * Mô hình 3 khối: In số nguyên tố
 * Đầu vào:
 * - Tạo biến n
 * Xử lý:
 * - Dom giá trị người dùng nhập
 * - Tạo hàm kiemTraSoNguyenTo
 * - Tạo hàm inSo
 * Đầu ra:
 * - Thông báo dãy số nguyên tố
 */
// Cách 1:
// function inSo() {
//   let thongBao = "";
//   let n = +document.getElementById("num2").value;
//   for (let i = 2; i <= n; i++) {
//     var check = true;
//     for (let x = 2; x <= Math.sqrt(i); x++) {
//       if (i % x === 0) {
//         check = false;
//         break;
//       }
//     }
//     if (check){
//       thongBao += i +" ";
//     }
//   }
//   document.getElementById("alert5").innerHTML = thongBao;
// }


//Cách 2: 

function inSo(){
  let thongBao = "";
  let n = +document.getElementById("num2").value;
  for (let iSo = 2; iSo <= n ; iSo++){
    let kiemTra = kiemTraSoNguyenTo(iSo);
    if(kiemTra){
      thongBao += iSo + " ";
    }
  }
  document.getElementById("alert5").innerHTML = thongBao;
}

function kiemTraSoNguyenTo(number){
  let kiemTra = true;
  for(let i=2; i<=Math.sqrt(number);i++){
    if (number%i===0){
      kiemTra = false;
      break;
    }
  }
  return kiemTra;
}