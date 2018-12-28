var con = document.getElementById('con');
var input = document.getElementById('input');
var find = document.getElementById('find')

//渲染数据

var xhr = new XMLHttpRequest();
xhr.open('get', '/api/list', true);
xhr.onload = function(res) {
    if (res.target.status == 200) {
        //console.log(res.target.response)
        var data = JSON.parse(res.target.response).data;
        var html = ''
        data.forEach((i) => {
            html += `<dl data-id="${i.id}">
                            <dt>
                                    <img src="${i.img}" alt="">
                                </dt>
                            <dd>
                                <p>【${i.title}】</p>
                                <p>${i.add}</p>
                                <p>
                                    <span>￥${i.price}</span>
                                    <span>${i.people}人易购</span>
                                </p>
                            </dd>
                            </dl>`
        })
        con.innerHTML = html
    }
}
xhr.send()


//搜索
find.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/api/find', true);
    xhr.onload = function(res) {
        if (res.target.status == 200) {
            //console.log(res.target.response)
            var data = JSON.parse(res.target.response);
            if (data.code == 0) {
                alert(data.mes)
            } else {
                con.innerHTML = `<dl data-id="${data.data.id}">
                                <dt>
                                        <img src="${data.data.img}" alt="">
                                    </dt>
                                <dd>
                                    <p>【${data.data.title}】</p>
                                    <p>${data.data.add}</p>
                                    <p>
                                        <span>￥${data.data.price}</span>
                                        <span>${data.data.people}人易购</span>
                                    </p>
                                </dd>
                                </dl>`
            }

        }
    }
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded,charser=utf-8")
    xhr.send('title=' + input.value)
}