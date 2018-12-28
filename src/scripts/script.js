var con = document.getElementById('con')
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