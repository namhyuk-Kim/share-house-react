import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import styled from "./_Mypage.module.scss";
import room1 from "assets/images/room1.png";
import room2 from "assets/images/room2.png";
import room3 from "assets/images/room3.png";
import room4 from "assets/images/room4.png";
import room5 from "assets/images/room5.png";
import room6 from "assets/images/room6.png";
import room7 from "assets/images/room7.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";
import check from "assets/images/check.png";
import plus_icon from "assets/images/Union.png";
import Recently from "components/user/mypage/details/Recently/Recently";
import Scraps from "components/user/mypage/details/Scraps/Scraps";
import Inquiry from "components/user/mypage/details/Inquiry/Inquiry";
import UserAccount from "components/user/mypage/details/UserAccount/UserAccount";
import InquiryDetail from "components/user/mypage/details/Inquiry/detail/InquiryDetail";

const cx = classnames.bind(styled);

class Mypage extends React.Component {
    render() {
        return (
            <div className={cx("mypage-wrap")}>
                <div className={cx("mypage-user-data")}>
                    <h1>김문영</h1>
                    <span>kimmy@naver.com</span>
                </div>
                <div className={cx("mypage-category")}>
                    <div className={cx("main-category")}>
                        <ul>
                            <li className={cx("primary-blue")}>
                                <Link to="/" className={cx("primary_blue")}>
                                    최근 본 하우스
                                </Link>
                            </li>
                            <li>
                                <Link to="/">관심하우스</Link>
                            </li>
                            <li>
                                <Link to="/">나의 스크랩</Link>
                            </li>
                            <li>
                                <Link to="/">입주문의</Link>
                            </li>
                            <li>
                                <Link to="/">개인정보</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <InquiryDetail />
            </div>
        );
    }
}

export default Mypage;
