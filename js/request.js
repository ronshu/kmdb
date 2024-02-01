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

async function getProducts() {
  const url = `https://yts.mx/api/v2/list_movies.json?limit=5&order_by=desc`;

  // url 주소에는 절대 공백이 들어가면 안된다.
  // 주소 : https://yts.mx/api#list_movies > http get 첫번재 줄 복붙?쿼리=값&쿼리&값

  try {
    //데이터 요청 및 응답시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    const movieWrapper = document.querySelector('.imgs');
    console.log(data.data.movies);
    const movies = data.data.movies;
    movies.forEach((movie) => {
      const imgEl = `<img src=${movie.medium_cover_image}>`;
      movieWrapper.insertAdjacentHTML('beforeend', imgEl);
    });
  } catch (error) {
    //실패 할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getProducts();
