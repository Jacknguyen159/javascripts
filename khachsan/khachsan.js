var data = [
    {
        id : 1,
        name : "A41",
        price : 260000,
        image:"https://oldsailor.com.vn/vnt_upload/product/09_2022/6587ee02d79c13c24a8d13.jpg",
        rate :4.0
    },
    {
        id : 2,
        name : "A42",
        price : 249000,
        image:"https://bizweb.dktcdn.net/100/287/440/products/ao-khoac-nam-kaki-dep-local-brand-2.jpg?v=1628678692670",
        rate :4.5,
    },
    {
        id : 3,
        name : "A43",
        price : 160000,
        image:"https://product.hstatic.net/200000255805/product/tai_xuong_-_2023-05-30t164439.314_03fd5eafdd774a7d8dac28da18530830_master.jpg",
        rate : 5.0
    },
]

function show(){
    var demo='';
    var d = 0;
    for(let i = 0; i<data.length;i++){
      d++;
        demo += "<tr>";
        demo += "<td>"+(d)+"</td>"
        demo += "<td>"+data[i].name+"</td>"
        demo += "<td>"+data[i].price+"</td>"
        demo += "<td><img src= "+data[i].image+"></td>"
        demo += "<td>"+data[i].rate+"<i class='fa fa-star'></i></td>"
        demo += '<td href="#" class="btn btn-primary" onclick="editroom('+ i +')"><a>Cập nhật phòng</a></td>';
        demo += '<td href="#" class="btn btn-primary" onclick="deleteroom(' + i + ')"><a>Xóa Phòng</a></td>';
        demo +="</tr>";
        console.log(demo);
        document.getElementById("tbl").innerHTML = demo;
    }
}
function create(){
    var a = { 
      name :document.getElementById("name").value,
      price :document.getElementById("price").value,
      image:document.getElementById("image").value,
      rate:document.getElementById("rate").value,
    }
    data.push(a);
    console.log(a)
    console.log(data)

      document.getElementById("id").value = "";
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
      document.getElementById("image").value = "";
      document.getElementById("rate").value = "";
}
function editroom(index) {
    document.getElementById("editid").value = index;
    document.getElementById("editname").value = data[index].name;
    document.getElementById("editprice").value = data[index].price;
    document.getElementById("editimage").value = data[index].image;
    document.getElementById("editrate").value =data[index].rate;

    document.getElementById("editForm").style.display = "block";
  }

  function updateroom() {
    var indexupdate = parseInt(document.getElementById("editid").value);
    var newname = document.getElementById("editname").value;
    var newprice = document.getElementById("editprice").value;
    var newimage = document.getElementById("editimage").value;
    var newrate = document.getElementById("editrate").value;
        data[indexupdate].name = newname;
        data[indexupdate].price = newprice;
        data[indexupdate].image = newimage;
        data[indexupdate].rate = newrate;

    document.getElementById("editForm").style.display = "none";
    console.log(data);
    show(data);
  }
function deleteroom(index) {
    data.splice(index, 1);
    show(data);
  }
function order(){
   alert("mua thành công");
}
