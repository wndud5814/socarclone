import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const maxCount = 9226684; // 최대치 설정

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const updatedCount = prevCount + 456;

        if (updatedCount >= maxCount) {
          clearInterval(interval); // 최대치에 도달하면 interval을 멈춤
          return maxCount; // 최대치로 설정
        }

        return updatedCount;
      });
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-sky-500 animate-counter">
      {count.toLocaleString()}
    </span>
  );
};

const B = () => {
  return (
    <div className=" flex-col flex items-center justify-center ">
      <div className=" items-start justify-center flex-col flex  p-96  m-20 ">
        <h2 className=" text-6xl mb-10 font-bold">24시간 언제나</h2>
        <p className="  mb-10  text-xl  text-gray-400  ">
          <p className="font-semibold">한밤중이나 주말에도 </p>
          <p className="font-semibold">스마트폰으로 시간에 구애받지 않고</p>
          <p className="font-semibold">쏘카와 함께이동하세요</p>
        </p>
        <div style={{ marginBottom: "100px" }}>
          <img className=" " src="./background/Cmain.jpg" />
        </div>
        <h2 className=" text-6xl mb-10 font-bold ">원하는 곳에서</h2>
        <p className="  mb-10  text-xl  text-gray-400  ">
          <p className="font-semibold">내 주변 3분 거리 쏘카존에서 </p>
          <p className="font-semibold">혹은 내가 있는 곳으로 쏘카를 불러</p>
          <p className="font-semibold">어디서나 편하게 출발하세요.</p>
        </p>
        <div style={{ marginBottom: "100px" }}>
          <img className="" src="./background/Bmain.jpg" />
        </div>
        <h2 className=" text-6xl mb-10 font-bold ">필요한 시간만큼</h2>
        <p className="  mb-10  text-xl  text-gray-400  ">
          <p className="font-semibold">간단한 장보기부터 주말여행까지</p>
          <p className="font-semibold">10분 단위로 원하는 만큼만 이용하세요.</p>
        </p>
        <div style={{ marginBottom: "100px" }}>
          <img className="" src="./background/Amain.jpg" />
        </div>
        <h2 className=" text-6xl mb-10 font-bold ">다양한 차종을</h2>
        <p className="  mb-10  text-xl  text-gray-400  ">
          <p className="font-semibold">연인과의 드라이브부터 가족 캠핑까지</p>
          <p className="font-semibold">상황에 맞게 50여 종의 차량을 </p>
          <p className="font-semibold">선택해서 이용하세요.</p>
        </p>
        <div style={{ marginBottom: "100px" }}>
          <img className="" src="./background/Dmain.jpg" />
        </div>
      </div>
      <div className="bg-gray-100 w-full h-96  ">
        <div className="text-gray-500  text-4xl text-center m-24  ">
          <span className="text-sky-500 font-semibold animate-counter ">
            <Counter />{" "}
          </span>
          명의 회원이 쏘카와
          <p>함께하고 있습니다.</p>
          지금 바로 쏘카 드라이브를
          <p>시작하세요.</p>
        </div>
      </div>
    </div>
  );
};

export default B;
