const C = () => {
  return (
    <div className="overflow-auto w-full p-40 md:p-40 lg:p-40 xl:p-40 relative bg-gray-800">
      {C}
      <section>
        <ul className=" flex  ">
          <button className=" m-2">
            <img src=" https://www.socar.kr/images/i-instagram.svg" />
          </button>
          <button className=" m-2">
            <img src=" https://www.socar.kr/images/i-facebook.svg" />
          </button>
          <button className=" m-2">
            <img src=" https://www.socar.kr/images/i-youtube.svg" />
          </button>
          <button className=" m-2">
            <img src=" https://www.socar.kr/images/i-blog.svg" />
          </button>
        </ul>
        <ul className="flex text-white ">
          <li className=" m-2">회사소개</li>
          <li className=" m-2">인재채용</li>
          <li className=" m-2">나눔카</li>
          <li className=" m-2">이용약관</li>
          <li className=" m-2">개인정보처리방침</li>
          <li className=" m-2">위치정보 이용약관</li>
          <li className=" m-2">차량손해면책제도</li>
        </ul>
      </section>
      <ul className=" text-gray-500">
        <li>주소. 제주특별자치도 제주시 연미길 42 (오라삼동)</li>
        <li>전화. 1661-3315</li>
        <li>팩스. 02-6969-9333</li>
        <li>© 2023 SOCAR All rights reserved.</li>
      </ul>
      <div className=" flex text-gray-500">
        <p>(주)쏘카 통신판매업 사업자정보 확인</p>
        <p>
          신고: 제 2019-제주오라-3호, 사업자등록번호: 616-81-90529, 대표자:
          박재욱
        </p>
      </div>
    </div>
  );
};

export default C;
