fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    let 상품수량 = data.length;
    let 전체가격 = 0;
    let 평균가격 = 0;
    for (const i of data) {
      전체가격 += i.price;
    }
    평균가격 = Math.round(전체가격 / 상품수량);
    console.log(상품수량);
    console.log(평균가격);
  });

document.querySelector(
  "#RECOMMTITLE > div > div.dd.detail-box > dl:nth-child(5) > dd:nth-child(4)"
);
