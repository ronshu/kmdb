const url = new URL(window.location.href);
const param = url.searchParams.get('id');
console.log(param);

/* ====== Common GET Request Function ====== */
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      //! : 아니라면
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

async function getDetails(id) {
  const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

  // url 주소에는 절대 공백이 들어가면 안된다.
  // 주소 : https://yts.mx/api#list_movies > http get 첫번재 줄 복붙?쿼리=값&쿼리&값

  try {
    //데이터 요청 및 응답시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    console.log(data);
  } catch (error) {
    //실패 할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getDetails(param);
// const numbers = document.querySelectorAll('.numbers span');

// numbers.forEach((number) => {
//   number.addEventListener('click', function () {
//     getProducts(this.textContent);
//   });
// });
