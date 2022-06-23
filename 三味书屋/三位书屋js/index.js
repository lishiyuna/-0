


async function fun() {
  try {
    let data = await axios({
      method: 'get',
      url: 'http://192.168.0.165:3005/books',
    })
    console.log(data.data);
    // console.log(data.data.data);
    tushu(data)
    shu(data)
    //获取前五个书的图片
    let data1 = await axios({
      method: 'get',
      url: 'http://192.168.0.165:3005/books',
      params: {
         _sort: 'rate',
         _order: 'desc',
         _start:0,
         _limit: 5
      },
    })
      console.log(data1.data);
    paixu(data1)


    //获取模糊化搜索的内容
    // async function shuwu(value) {
    //   let { data: ren } = await axios({
    //     method: 'get',
    //     url: 'http://192.168.0.165:3005/books',
    //     params: {
    //       name_like:value
    //     }
    //   }
    //   )
    //   shu(ren)
    //   console.log(ren.data);
    // }




  } catch (e) {
    console.log(e);
  }
}
fun()
// 
//搜索框的内容识别
function shu(ren) {
  $('.btn').click(function () {
    // let a = $('.sousuo').val()
    if ($('.sousuo').val()) {
      $('.bo').css('display', 'block')
      //获取模糊化搜索的内容

      async function shuwu(val) {
        let { data: ren } = await axios({
          method: 'get',
          url: 'http://192.168.0.165:3005/books',
          params: {
            name_like: val
          }
        }
        )
        console.log(ren);
        console.log(`${ren.data[0].name}作者:${ren.data[0].author}`);
        // console.log($('.kaung').html());
        console.log(ren.data);
        $('.kaung').html(`${ren.data[0].name}作者:${ren.data[0].author}`)
        console.log(ren.data[0].id);
        $('.bo>a').attr('href',`../三位书屋书简介/index.html?id=${ren.data[0].id}`)
        
        // console.log($('.sr-only').val());

      }
      shuwu($('.sousuo').val())

    } else {
      $('.bo').css('display', 'none')
    }
  })

}




//首页轮播图
function tushu(data) {
  $('.swiper-wrapper').empty()
  for (let item in data.data.data) {
    let a = data.data.data
    let ren = $(`
        <div class="swiper-slide">
        <a href="../三位书屋书简介/index.html?id=${a[item].id}">
        <img src="${a[item].coverImg}" alt="" calss="tuimg"></a>
        </div>
      `)
    // $('.swiper-slide').append($('.tuimg'))
    $('.swiper-wrapper').append(ren)
    // console.log(data.data.data[item].coverImg);
  }

  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

//下面前五名排序
function paixu(data1) {
  let data = data1.data.data
  for (let item in data) {
     console.log(data[item].id);
    let img = $(`
      <a href="../三位书屋书简介/index.html?id=${data[item].id}">
       <img src="${data[item].coverImg}" alt=""></a
>`)
    $('.nav-ranking').append(img)
  }
}





