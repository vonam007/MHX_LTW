// Lấy tham chiếu đến form
const form = document.getElementById('form_contain');

// Đăng ký một hàm xử lý sự kiện khi form được submit
form.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let state = document.getElementById('state').value;
    let breed = document.getElementById('breed').value;

    // Kiểm tra dữ liệu
    if (name == '') {
        alert('Vui lòng nhập tên!');
        return;
    
    } else if (state == '') {
        alert('Vui lòng chọn lại giai đoạn phát triển!');
        return;
    }
    else if (breed == '') {
        alert('Vui lòng nhập loài!');
        return;
    }
    console.log(name);
    console.log(state);
    console.log(breed);

    // Submit form
    let CardContain = document.getElementById('cat_card_contain');
    let tag = await getTag();
    let url_cat = 'https://cataas.com/cat?tag=' + tag;
    let color = randomColor();
    console.log(color);
    let temptext = '<div class="cat_card" style="background-color:'+color+';"><div class="cat_card_img"><img src="'+ url_cat +'" alt="" class="cat_img"></div><ul class="cat_card_info"><li class="cat_name">' + name + '</li><li class="cat_breed">' + breed + '</li><li class="cat_state">'+ state + '</li></ul></div>';
    CardContain.innerHTML += temptext;

    
});

async function getTag() {
    try {
        const response = await fetch('./Source/cats_tag.json');
        const data = await response.json();
        const tags = data.tags;
        const randomTag = tags[Math.floor(Math.random() * tags.length)];
        console.log(randomTag); 
        return randomTag;
    } catch (error) {
      console.log('Đã xảy ra lỗi khi đọc file JSON: ', error);
    }
}

function randomColor() {
    // Tạo ba giá trị ngẫu nhiên từ 0 đến 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
    // Chuyển đổi các giá trị thành giá trị hex và kết hợp chúng lại thành một chuỗi màu sắc đầy đủ
    var color = "#" + r.toString(16).substring(0, 2) + g.toString(16).substring(0, 2) + b.toString(16).substring(0, 2);
  
    return color;
}