


function diemXetTuyen() {

  var dChuan = document.getElementById("diemChuan").value;
  var dToan = document.getElementById("diemToan").value;
  var dAnh = document.getElementById("diemAnh").value;
  var dVan = document.getElementById("diemVan").value;
  var khuVuc =document.getElementById("khuVuc").value;
  var doiTuong =document.getElementById("doiTuong").value;
  dUT=0;
  if (khuVuc === "A") {
    dUT += 2;
  } else if (khuVuc === "B") {
    dUT += 1;
  } else if (khuVuc === "C") {
    dUT += 0.5;
  }

  if (doiTuong === 1) {
    dUT += 2.5;
  } else if (doiTuong === 2) {
    dUT += 1.5;
  } else if (doiTuong === 3) {
    dUT += 1;
  }
  
  var tongDiem = Number(dToan) + Number(dAnh) + Number(dVan) + Number(dUT);
  if (dToan == 0 || dAnh == 0 || dVan == 0) {
    document.getElementById("txtTuyenSinh").innerHTML = " Thí sinh liệt môn:  ";
  }
  else {
    if (tongDiem >= dChuan) {
      document.getElementById("txtTuyenSinh").innerHTML = " Thí sinh trúng tuyển:  " + tongDiem;
    }
    else {
      document.getElementById("txtTuyenSinh").innerHTML = " Thí sinh trượt:  " + tongDiem;
    }

  }

}

document.getElementById("tuyenSinh").onclick = diemXetTuyen;
