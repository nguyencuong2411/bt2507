function tienDien(){
    var tenkh=document.getElementById("ten").value;
    var soKwh = parseFloat(document.getElementById("sodien").value);
    var tienTra ;
    if (soKwh <= 50) {
        tienTra = soKwh * 500;
      } else if (soKwh <= 100) {
        tienTra = 50 * 500 + (soKwh - 50) * 650;
      } else if (soKwh <= 200) {
        tienTra = 50 * 500 + 50 * 650 + (soKwh - 100) * 850;
      } else if (soKwh <= 350) {
        tienTra = 50 * 500 + 50 * 650 + 100 * 850 + (soKwh - 200) * 1100;
      } else {
        tienTra = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwh - 350) * 1300;
      }
      document.getElementById("txtTen").innerHTML = "Tên kh: " + tenkh;
      document.getElementById("txtTien").innerHTML = " Tổng tiền:  " + tienTra;

}
document.getElementById("tinhTien").onclick =tienDien;