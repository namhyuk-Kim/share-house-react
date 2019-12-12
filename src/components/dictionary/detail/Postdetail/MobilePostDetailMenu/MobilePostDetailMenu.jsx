import React from "react";
import classnames from "classnames/bind";
import styles from "./_MobilePostDetailMenu.module.scss";
import user_avata from "assets/images/user-avata.png";
import book_mark from "assets/images/bookmark.png";
import color_kakao from "assets/images/color_kakao.png";
import color_facebook from "assets/images/color_facebook.png";
import color_blog from "assets/images/color_blog.png";
import heart from "assets/images/heart.png";
import link_share from "assets/images/link_share.png";

const cx = classnames.bind(styles);

class MobilePostDetailMenu extends React.Component {
    render() {
        return (
            <div className={cx("fixed-info")}>
                <h3 className={cx("primary_blue")}>슬기로운 하우스 생활</h3>
                <h1>
                    바로바로,세탁기 사용 후,조리도구
                    <br />
                    &nbsp;사용후, 공용공간 사용 후 바로 정리
                </h1>

                <div className={cx("publisher")}>
                    <span className={cx("profile")}>
                        <img src={user_avata} alt="user-avata" />
                    </span>
                    쉐어하우스 플랜 A
                </div>
                <span className={cx("write-date")}>2019.01.02</span>

                <div className={cx("util-buttons")}>
                    <div>
                        <img src={color_kakao} alt="icon" />
                    </div>
                    <div>
                        <img src={color_facebook} alt="icon" />
                    </div>
                    <div>
                        <img src={color_blog} alt="icon" />
                    </div>
                    <div>
                        <img src={link_share} alt="icon" />
                    </div>
                </div>

                <button className={cx("like")}>
                    <img src={heart} alt="icon" /> 좋아요&nbsp;{"1"}
                </button>
                <button className={cx("scrap")}>
                    <img src={book_mark} alt="icon" /> 스크랩&nbsp;{"1"}
                </button>

                <div className={cx("clear")}></div>
            </div>
        );
    }
}

export default MobilePostDetailMenu;
