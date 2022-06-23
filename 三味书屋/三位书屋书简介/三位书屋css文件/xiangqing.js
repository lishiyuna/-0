var currUrl = decodeURIComponent(location.href.split('#')[0]);
console.log(currUrl);

async function tun(index) {
  try {
    let { data } = await axios({
      method: "get",
      url: 'http://192.168.0.165:3005/books',

      params: {
        id: index,
      }
    })
    console.log(index);
    console.log(data.data);
    // console.log(data.data[0].rate);

    xing(data)
    pop(data)

  }
  catch (e) {
    console.log(e);
  }
}

async function tu() {
  try {

    let { data: da } = await axios({
      method: "get",
      url: 'http://192.168.0.165:3005/books'
    })
    //  shu(data)

    console.log(da);
    po(da)

  }
  catch (e) {
    console.log(e);
  }
}

console.log();
let a = currUrl.split('=').slice(1)
let b = Number(a)
console.log(b);
tun(b)
console.log(currUrl);
if (currUrl.includes('id')) {
  function pop(data) {
    // if(currUrl.has('id')){
    //   alert(111)
    // }

    console.log(data.data[0].coverImg);
    $('.box>img').attr('src', data.data[0].coverImg)
    $('#nie').html(data.data[0].name)
    $('#rong').html(data.data[0].author)
    $('#jie').html(data.data[0].desc)
    $('input').val(data.data[0].name)
    $('.sousuo').val(data.data[0].name)
  }
}
else {
  tu()
  function po(da) {
    console.log(da.data[0].coverImg);
    $('.box>img').attr('src', da.data[0].coverImg)
    $('#nie').html(da.data[0].name)
    $('#rong').html(da.data[0].author)
    $('#jie').html(da.data[0].desc)
    $('input').val(da.data[0].name)
    $('.sousuo').val(da.data[0].name)
  }
}
// function shu(data) {
//   // console.log(ren);
//   $('.btn').click(function () {
//     // let a = $('.sousuo').val()
//     if ($('.sousuo').val()) {
//       $('.bo').css('display', 'block')
//       //获取模糊化搜索的内容 

//       async function shuwu(val) {
//         let { data: ren } = await axios({
//           method: 'get',
//           url: 'http://192.168.0.165:3005/books',
//           params: {
//             name_like: val
//           }
//         }
//         )
//         console.log(ren);
//         console.log(`${ren.data[0].name}作者:${ren.data[0].author}`);
//         // console.log($('.kaung').html());
//         $('.kaung').html(`${ren.data[0].name}作者:${ren.data[0].author}`)
//         console.log(ren.data[0].id);
//         $('.bo>a').attr('href', `../三位书屋书简介/index.html?id=${ren.data[0].id}`)

//         // console.log($('.sr-only').val());

//       }
//       shuwu($('.sousuo').val())
//     } else {
//       $('.bo').css('display', 'none')
//     }
//   })

// }


 console.log([...currUrl]);

function xing(data) {
  console.log(data.data[0].rate);
  let a = data.data[0].rate
  layui.use('rate', function () {
    var rate = layui.rate;
    rate.render({
      elem: '#test1',
      length: 10,
      value: a,
      theme: '#000099',
      half: true,
      text: true,
      readonly: true,
    });
    this.span.text(arrs[value] || (value + "星"));
  });
}

$('.input-group-addon').click(function () {
  // alert(111)
  async function tu(val) {
    try {
      let { data: da } = await axios({
        method: "get",
        url: 'http://192.168.0.165:3005/books',
        params: {
          name_like: val
        }
      }
      )
     // console.log(da.data[0].id);
      location.assign('file:///D:/visurl/%E6%89%80%E6%9C%89%E8%B5%84%E6%BA%90/%E4%B8%89%E5%91%B3%E4%B9%A6%E5%B1%8B/%E4%B8%89%E4%BD%8D%E4%B9%A6%E5%B1%8B%E4%B9%A6%E7%AE%80%E4%BB%8B/xiangqing.html?id='+ da.data[0].id)
    }
    catch (e) {
      console.log(e);
    }
  }

  tu(`${$('.sousuo').val()}`)
})

