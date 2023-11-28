import React, { useState } from "react";

const Header = ({ isHidden }) => {
  // 페이지 새로고침 함수
  const handleRefresh = () => {
    window.location.reload();
    window.scrollTo(0, 0); //새로고침했을때 0.0으로 돌아감
  };

  return (
    <div
      className={`h-24 flex justify-center items-center text-2xl fixed w-full top-0 ${
        isHidden
          ? "bg-white opacity-75 border-b-2 border-gray border-solid"
          : ""
      }`}
      style={
        isHidden
          ? { borderTop: "none", borderLeft: "none", borderRight: "none" }
          : {}
      }
    >
      <div className="">
        <button
          className="w-[100px] left-[18px] absolute border-none bg-transparent"
          onClick={handleRefresh} // 클릭 이벤트
        >
          {isHidden ? (
            <img
              className="w-full h-full"
              src="https://www.socar.kr/images/logo-blue.svg"
              alt="top_banner"
            />
          ) : (
            <img
              className="w-full h-full"
              src="https://www.socar.kr/images/logo-w.svg"
              alt="top_banner"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
