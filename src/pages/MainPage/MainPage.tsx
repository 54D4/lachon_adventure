import AlkoProgres from "../../componets/AlkoProgres/AlkoProgres";
import LachonBar from "../../componets/LachonBar/LachonBar";
import FriendsBar from "../../componets/friendsBar/FriendsBar";
import Main from "../../componets/main/Main";
import "./mainPage.css";

import Header from "../../Header/Header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="mainPage">
        <LachonBar />
        <AlkoProgres />
        <Main />
        <FriendsBar />
      </div>
    </div>
  );
};

export default MainPage;
