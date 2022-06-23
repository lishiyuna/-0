var myChart = echarts.init(document.getElementById('main'));
async function substr(){
    try{
        let data=await axios({
            method: 'get',
            url: 'http://192.168.0.165:3005/books?_sort=rate&_order=desc',
            // params: {
            //     // _sort:rate,
            //     _order:asc,
            //   },
        }) 
        console.log(data.data.data);
        debugg(data)
    }catch(e){
        console.log(e);
    }
}
substr()
let a=[]
function debugg(data){
    for(let item in data.data.data){
       let arr={}
      // console.log(data.data.data[item].name);
        arr.stock=data.data.data[item].name
        arr.fundPost=data.data.data[item].rate
        a.push(arr)
    }
    console.log(a);
      rew(a)
    
}
function rew(a){
    var data=a

function contains(arr, dst) {
    var i = arr.length;
    while ((i -= 1)) {
        if (arr[i] == dst) {
            return i;
        }
    }
    return false;
}

var attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: "#EB3B5A" },
        { offset: 1, color: "#FE9C5A" },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: "#FA8231" },
        { offset: 1, color: "#FFD14C" },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: "#F7B731" },
        { offset: 1, color: "#FFEE96" },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: "#395CFE" },
        { offset: 1, color: "#2EC7CF" },
    ]),
];
var attackSourcesColor1 = [
    "#EB3B5A",
    "#FA8231",
    "#F7B731",
    "#3860FC",
    "#1089E7",
    "#F57474",
    "#56D0E3",
    "#1089E7",
    "#F57474",
    "#1089E7",
    "#F57474",
    "#F57474",
];
var attaData = [];
var attaName = [];
var topName = [];
data.forEach((it, index) => {
    attaData[index] = parseFloat(it.fundPost).toFixed(2);
    attaName[index] = it.stock;

});
var salvProMax = []; //背景按最大值
for (let i = 0; i < attaData.length; i++) {
    salvProMax.push(attaData[0]);
}
function attackSourcesDataFmt(sData) {
    var sss = [];
    sData.forEach(function (item, i) {
        let itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i],
        };
        sss.push({
            value: item,
            itemStyle: itemStyle,
        });
    });
    return sss;
}

var option = {
    backgroundColor: "#000",
    tooltip: {
        show: false,
        backgroundColor: "rgba(3,169,244, 0.5)", //背景颜色（此时为默认色）
        textStyle: {
            fontSize: 20,
        },
    },
    color: ["#F7B731"],
    legend: {
        pageIconSize: [12, 12],
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
            //图例文字的样式
            fontSize: 30,
            color: "#fff",
        },
        selectedMode: false,
        //改标题名
        data: ["三味书屋排行榜"],
    },
    grid: {
        left: "5%",
        right: "2%",
        width: "80%",
        bottom: "2%",
        top: "8%",
        containLabel: true,
    },
    xAxis: {
        type: "value",

        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: [
        {
            type: "category",
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisPointer: {
                label: {
                    show: true,
                    //margin: 30
                },
            },
            pdaaing: [5, 0, 0, 0],
            postion: "right",
            data: attaName,
            axisLabel: {
                margin: 30,
                fontSize: 10,
                align: "left",
                padding: [2, 0, 0, 0],
                color: "#000",
                rich: {
                    nt1: {
                        color: "#fff",
                        backgroundColor: attackSourcesColor1[0],
                        width: 20,
                        height: 20,
                        fontSize: 15,
                        align: "center",
                        borderRadius: 100,
                        lineHeight: "5",
                        padding: [0, 1, 2, 1],
                        // padding:[0,0,2,0],
                    },
                    nt2: {
                        color: "#fff",
                        backgroundColor: attackSourcesColor1[1],
                        width: 20,
                        height: 20,
                        fontSize: 15,
                        align: "center",
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                    },
                    nt3: {
                        color: "#fff",
                        backgroundColor: attackSourcesColor1[2],
                        width: 20,
                        height: 20,
                        fontSize: 15,
                        align: "center",
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                    },
                    nt: {
                        color: "#fff",
                        backgroundColor: attackSourcesColor1[3],
                        width: 20,
                        height: 20,
                        fontSize: 15,
                        align: "center",
                        lineHeight: 3,
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                        lineHeight: 5,
                    },
                },
                formatter: function (value, index) {
                    index = contains(attaName, value) + 1;
                    if (index - 1 < 3) {
                        return ["{nt" + index + "|" + index + "}"].join("\n");
                    } else {
                        return ["{nt|" + index + "}"].join("\n");
                    }
                },
            },
        },
        {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: "18",
                },
            },
            data: attackSourcesDataFmt(attaName),
        },
        {
            //名称
            type: "category",
            offset: -10,
            position: "left",
            axisLabel: {
                color: `#fff`,
                fontSize: 20,
            },
            axisLine: {
                show: false,
            },
            inverse: false,
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: ["#fff"],
                align: "left",
                verticalAlign: "bottom",
                lineHeight: 32,
                fontSize: 20,
            },
            data: topName,
        },
    ],
    series: [
        {  
            zlevel: 1,
            name: "三味书屋排行榜",
            type: "bar",
            //表单横向的宽度
            barWidth: "15px",
            //表单的速度
            animationDuration: 1500,
            data: attackSourcesDataFmt(attaData),
            align: "center",
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                },
            },
            label: {
                show: true,
                fontSize: 10,
                color: "#fff",
                textBorderWidth: 2,
                padding: [2, 0, 0, 0],
            },
        },
        {
            name: "三味书屋排行榜",
            type: "bar",
            barWidth: 15,
            barGap: "-100%",
            margin: "20",
            data: salvProMax,
            textStyle: {
                //图例文字的样式
                fontSize: 20,
                color: "#fff",
            },
            itemStyle: {
                normal: {
                    color: "#05325F",
                    //width:"100%",
                    fontSize: 20,
                    barBorderRadius: 30,
                },
            },
        },
    ],
};
myChart.setOption(option);
}

