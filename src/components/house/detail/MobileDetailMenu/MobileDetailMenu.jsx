import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import styles from "./_MobileDetailMenu.module.scss";
import star_yellow from "assets/images/star_yellow.png";
import folder_add from "assets/images/folder_add.png";
import share from "assets/images/share.png";
import facebook_share from "assets/images/facebook_share.png";
import kakao_share from "assets/images/kakao_share.png";
import twitter_share from "assets/images/twitter_share.png";
import link_share from "assets/images/link_share.png";

const cx = classnames.bind(styles);

class MobileDetailMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houseData: this.props.HouseData
        };
    }

    render() {
        return (
            <div className={cx("fixed-info")}>
                <div className={cx("tag-box")}>
                    <button className={cx("nomination-btn")}>추천</button>
                    <button className={cx("primary-blue-btn")}>
                        {this.props.HouseData["RENT_TYPE_NAME_KO"]}
                    </button>
                    <span>{this.props.HouseData["HOUSE_TYPE"]}</span>
                </div>
                <h1>{this.props.HouseData["HOUSE_NAME_KO"]}</h1>

                <div className={cx("util-buttons")}>
                    <div>
                        <img src={star_yellow} alt="fav" />
                    </div>
                    <div>
                        <img src={folder_add} alt="folder" />
                    </div>
                    <div>
                        <img src={share} alt="share" />
                    </div>
                    <div className={cx("hover-util")}>
                        <Link to="/">
                            <img src={kakao_share} alt="kakao_share" />
                        </Link>

                        <Link to="/">
                            <img src={facebook_share} alt="kakao_share" />
                        </Link>

                        <Link to="/">
                            <img src={twitter_share} alt="kakao_share" />
                        </Link>

                        <Link to="/">
                            <img src={link_share} alt="kakao_share" />
                        </Link>
                    </div>
                    <button>
                        <img src={folder_add} alt="folder_add" />
                        비교함 (2)
                    </button>
                </div>
                <form>
                    <button>집주인과 상담하기</button>
                </form>
            </div>
        );
    }
}

export default MobileDetailMenu;
