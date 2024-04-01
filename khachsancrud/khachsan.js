var data = [
    {
        id : 221,
        name : "A41",
        price : 260000,
        image:"https://noithattrevietnam.com/uploaded/2019/12/1-thiet-ke-phong-ngu-khach-san%20%281%29.jpg",
        rate :4.0,
        mota :"2 giường"
    },
    {
        id : 222,
        name : "A42",
        price : 249000,
        image:"https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg",
        rate :4.5,
        mota :"1 giường"
    },
    {
        id : 101,
        name : "B43",
        price : 160000,
        image:"https://dyf.vn/wp-content/uploads/2021/01/tai-sao-thiet-ke-phong-ngu-khach-san-quan-trong-nhat.jpg",
        rate : 5.0,
        mota :"2 giường"
    },
]
function productlists(){
  for(let i = 0; i<=data.length-1;i++){
    var html = '<div class = "col-3" style ="padding-right:5px;">  ';
    html += '<div class="card" >';
    html += '<img src="'+data[i].image+'" class="card-img-top" style="height:200px;">';
    html += '<div class="card-body" style="margin:20px;">';
    html += '<h5 class="card-title" style="margin-bottom:20px;" >Phòng '+data[i].name+'</h5>';
    html += '<p class="card-text">Giá '+data[i].price+' vnd</p>';
    html += '<p class="card-text">Đánh giá '+data[i].rate+'</p>';
    html += '<a href="#" class="btn btn-primary" onclick="order()">đặt phòng</a>'
    html +='</div>';
    html +='</div>';
    html +='</div>';
    console.log(html);
    document.getElementById("room").innerHTML += html;
  }
}
function show(){
    var demo='';
    var d = 0;
    for(i in data){
      d++;
        demo += "<tr>";
        demo += "<td>"+(d)+"</td>"
        demo += "<td>"+data[i].id+"</td>"
        demo += "<td>"+data[i].name+"</td>"
        demo += "<td>"+data[i].price+"</td>"
        demo += "<td><img src= "+data[i].image+" style='width: 100px'></td>"
        demo += "<td>"+data[i].rate+"</td>"
        demo += "<td>"+data[i].mota+"</td>"
        demo += '<td href="#" class="btn btn-primary" onclick="editroom('+ i +')"><h4>Cập nhật phòng</h4></td>';
        demo += '<td href="#" class="btn btn-primary" onclick="deleteroom(' + i + ')"><h4>Xóa Phòng</h4></td>';
        demo += '<td href="#" class="btn btn-primary" onclick="detailroom(' + i + ')"><h4>Chi tiết Phòng</h4></td>';
        demo +="</tr>";
        console.log(demo);
        document.getElementById("tbl").innerHTML = demo;
    }
}
function create(){
    var a = { 
      id:document.getElementById("id").value,
      name :document.getElementById("name").value,
      price :document.getElementById("price").value,
      image:document.getElementById("image").value,
      rate:document.getElementById("rate").value,
      mota:document.getElementById("mota").value,
    }
    data.push(a);
    localStorage.setItem('Room',JSON.stringify(data));
    console.log(a)
    console.log(data)
    document.getElementById("searchForm").style.display = "none";
    document.getElementById("id").value='';
    document.getElementById("name").value='';
    document.getElementById("price").value='';
    document.getElementById("image").value='';
    document.getElementById("rate").value='';
    document.getElementById("mota").value='';
}
function editroom(index) {
    document.getElementById("stt").value = index;
    document.getElementById("editid").value = data[index].id;
    document.getElementById("editname").value = data[index].name;
    document.getElementById("editprice").value = data[index].price;
    document.getElementById("editimage").value = data[index].image;
    document.getElementById("editrate").value =data[index].rate;
    document.getElementById("editmota").value =data[index].mota;

    document.getElementById("editForm").style.display = "block";
    document.getElementById("searchForm").style.display = "none";
    document.getElementById("tbld").style.display = "none";
  }
function updateroom() {
    var indexupdate = parseInt(document.getElementById("stt").value);
    var newid = parseInt(document.getElementById("editid").value);
    var newname = document.getElementById("editname").value;
    var newprice = document.getElementById("editprice").value;
    var newimage = document.getElementById("editimage").value;
    var newrate = document.getElementById("editrate").value;
    var newmota = document.getElementById("editmota").value;
    if(newid && newname && newprice && newimage && newrate && newmota){
        data[indexupdate].id = newid;
        data[indexupdate].name = newname;
        data[indexupdate].price = newprice;
        data[indexupdate].image = newimage;
        data[indexupdate].rate = newrate;
        data[indexupdate].mota = newmota;
        show(data);
      }else{
          alert('Nhập dầy đủ thông tin');
        }
  
  }     
function deleteroom(index) {
    document.getElementById("stt").value = index;
    data.splice(index, 1);
    show(data);
  }
function detailroom(index){
  document.getElementById("stt").value = index ;
  for(i in data){
  demo ='';
  demo += "<h1>Chi tiết phòng</h1>"
  demo += "<p>Mã phòng : "+data[index].id+"</p>"
  demo += "<p>Tên phòng : "+data[index].name+"</p>"
  demo += "<p>Giá : "+data[index].price+"</p>"
  demo += "<p><img src= "+data[index].image+"></p>"
  demo += "<p>Đánh giá : "+data[index].rate+"</p>"
  demo += "<p>Mô tả : "+data[index].mota+"</p>"
  document.getElementById('tbld').innerHTML = demo;
  document.getElementById("tbld").style.display = "block";
  document.getElementById("editForm").style.display = "none";
  }
}  
function search(name){
  var name = document.getElementById("searchr").value;
  var result = data.filter(item => item.name.includes(name));
  var demo ='';
  if(name != ''){
    for(i = 0; i<result.length;i++){
        demo += "<tr>";
        demo += "<td>"+result[i].id+"</td>"
        demo += "<td>"+result[i].name+"</td>"
        demo += "<td>"+result[i].price+"</td>"
        demo += "<td><img src= "+result[i].image+" style='width: 100px'></td>"
        demo += "<td>"+result[i].rate+"</td>"
        demo +="</tr>";
        console.log(demo);
        document.getElementById('result').innerHTML = demo;
        document.getElementById("searchForm").style.display = "block";
    }
  }else{
    alert("Vui lòng nhập thông tin");
  }
}

function order(){
   alert("đặt thành công");
}