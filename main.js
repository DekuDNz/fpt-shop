// nếu giá 20 tr - 30 tr giảm 10 %
// nếu giá > 30 tr giảm 20%

var listDienThoai = document.querySelector(".discount-table");

function domValue(param) {
  var dom = document.querySelector(param);
  return dom;
}

// dom input

var inputName = domValue("#name");
var inputPrice = domValue("#price");
var inputPicture = domValue("#picture");
var buttonAdd = domValue("#addButton");
// console.log("nut ten ", inputName);
// console.log("nut gia ", inputPrice);
// console.log("nut bam ", buttonAdd);
buttonAdd.addEventListener("click", submitSP);

// danh sach san pham
var danhSachSanPham = [
  {
    id: 1,
    name: "IPhone 14 Pro Max 128GB",
    originalPrice: 29990000,
    discountPrice: 4100000,
    afterDiscount: 25890000,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg",
    zalo: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/9/638036094193162159_zalopay.jpg",
    kredivo:
      "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Flip5 5G 256GB",
    originalPrice: 25990000,
    discountPrice: 5500000,
    afterDiscount: 20490000,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/28/638288178412655978_samsung-galaxy-z-flip5-xanh-dd-tragop.jpg",
    zalo: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/9/638036094193162159_zalopay.jpg",
    kredivo:
      "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
    techcom:
      "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/3/638030631557655754_logo-techcombank.jpg",
  },
  {
    id: 3,
    name: "OPPO Reno8 T 4G 256GB",
    originalPrice: 8490000,
    discountPrice: 1500000,
    afterDiscount: 6990000,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155148198300095_oppo-reno8-t-4g-dd.jpg",

    kredivo:
      "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
  },
  {
    id: 4,
    name: "Laptop Asus TUF Gaming FX506HF-HN017W i5-11400H",
    originalPrice: 21990000,
    discountPrice: 4500000,
    afterDiscount: 17490000,
    img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/19/638175165816785780_asus-tuf-gaming-fx506hf-den-dd-moi.jpg",
    zalo: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/9/638036094193162159_zalopay.jpg",
    techcom:
      "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/3/638030631557655754_logo-techcombank.jpg",
    kredivo:
      "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
    qr: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/1/638002156152811193_Logo-VNPAYQR.png",
  },
];
// function submit san phan
function submitSP() {
  var namesanpham = inputName.value;
  var giasanpham = Number(inputPrice.value);
  var anhsanpham = inputPicture.value;

  if (namesanpham && giasanpham && anhsanpham) {
    var discountPriceA = discount10percentage(giasanpham);

    var afterDiscountA = giasanpham - discountPriceA;
    console.log("gia san pham", giasanpham);
    var newsanpham = {
      id: danhSachSanPham.length + 1,
      name: namesanpham,
      originalPrice: giasanpham,
      img: anhsanpham,
      discountPrice: discountPriceA,
      afterDiscount: afterDiscountA,
      zalo: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/9/638036094193162159_zalopay.jpg",
      techcom:
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/3/638030631557655754_logo-techcombank.jpg",
      kredivo:
        "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png",
      qr: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/1/638002156152811193_Logo-VNPAYQR.png",
    };
    danhSachSanPham.push(newsanpham);
    listSanPham();
  } else {
    alert("Vui long nhap thong tin");
  }
}

// function list san pham
function listSanPham() {
  str = "";
  danhSachSanPham.map((dienthoai, index) => {
    var ten = dienthoai.name.toUpperCase();
    var giagoc = numberWithDot(dienthoai.originalPrice);
    var giadagiam = numberWithDot(dienthoai.afterDiscount);
    console.log("gia da giam", giadagiam);
    var giagiam = numberWithDot(dienthoai.discountPrice);

    var hinhanh = dienthoai.img;
    var anhzalo = dienthoai.zalo;
    var anhtechcom = dienthoai.techcom;
    var anhkredivo = dienthoai.kredivo;
    var anhqr = dienthoai.qr;

    str += `
        <div class="discount-table-child">
        <div class="discount-img">
          <img
            src= ${hinhanh}
            alt=""
            class="image-phone"
            width="140px"
          />

          <span class="tragop">Tra gop 0% </span>
          <p class="giam">Giam : <span> ${giagiam}</span> d</p>
        </div>
        <div class="discount-content">
          <h4>${ten}</h4>
          <div class="discount-price">
            <p class="main-price-color"><span>${giadagiam} d</span></p>
            <p class="discount-price-color">${giagoc} d</p>
          </div>
          <div class="payment-method">
            <div class="zalo-box">
              <img
                src=${anhzalo}
                alt=""
                class="img-zalo"
              />
              <p class="content content-zalo">Giảm ngay 5% qua Zalo</p>
            </div>
            <div class="kredivo-box">
              <img
                src=${anhkredivo}
                alt=""
                class="img-kredivo"
              />
              <p class="content content-kredivo">
                Giảm ngay 5% qua Kredivo
              </p>
            </div>
            <div class="techcom-box">
              <img
                src=${anhtechcom}
                alt=""
                class="img-techcom"
              />
              <p class="content content-tech">
                Giảm ngay 1.000.000d qua VNPPAY-QR
              </p>
            </div>
            <div class="QR-box">
              <img
                src=${anhqr}
                alt=""
                class="img-QR"
              />

              <p class="content content-QR">Giảm ngay 300.000d qua Tech</p>
            </div>
          </div>
        </div>
      </div>
       `;
  });

  listDienThoai.innerHTML = str;
}

listSanPham();

// function format number
function numberWithDot(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// function giam gia 10%
function discount10percentage(x) {
  var discountPercent = 0;

  if (x > 20000000 && x < 30000000) {
    discountPercent = 10;
  } else if (x > 30000000) {
    discountPercent = 20;
  }
  var discountPrice = (discountPercent / 100) * x;

  return discountPrice;
}
