import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Main.module.scss";
import banner from "assets/images/visaul_img01.png";
import search from "assets/images/Search.png";
import room1 from "assets/images/room1.png";
import room2 from "assets/images/room2.png";
import room3 from "assets/images/room3.png";
import room4 from "assets/images/room4.png";
import room5 from "assets/images/room5.png";
import room6 from "assets/images/room6.png";
import room7 from "assets/images/room7.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";

const cx = classnames.bind(styles);

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    changeActive = e => {
        let selected = e;
        this.setState({
            active: selected
        });
    };

    render() {
        const { active } = this.state;
        return (
            <div className={cx("content")}>
                <div className={cx("main-banner")}>
                    <div className={cx("title")}>
                        <h1>
                            Where do you
                            <br />
                            want to live?
                        </h1>
                    </div>
                    <div className={cx("tab")}>
                        <div className={cx("tab-menu-wrap")}>
                            <ul>
                                <li
                                    onClick={e => this.changeActive(0)}
                                    className={cx({ active: active === 0 })}
                                >
                                    2030 청년주택
                                </li>
                                <li
                                    onClick={e => this.changeActive(1)}
                                    className={cx({ active: active === 1 })}
                                >
                                    쉐어하우스
                                </li>
                                <li
                                    onClick={() => this.changeActive(2)}
                                    className={cx({ active: active === 2 })}
                                >
                                    원룸
                                </li>
                            </ul>
                            <form>
                                <input type="text" placeholder="지역"></input>
                                <button>검색</button>
                                <img src={search} alt={"search"} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={cx("popularity")}>
                    <div className={cx("content")}>
                        <h2>Today's 인기하우스</h2>
                        <div className={cx("popularity-items")}>
                            <div>
                                <div>
                                    <img
                                        src={star_yellow}
                                        alt={"star_yellow"}
                                    />
                                    <div className={cx("image-box")}>
                                        <img src={room1} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>쉐어하우스</button>
                                        <span>아파트</span>
                                    </div>
                                    <div className={cx("title")}>
                                        플랜A 길음성신여대점
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
                                        <p>
                                            <span>월세</span>
                                            <span>38만원 ~ 55만원</span>
                                        </p>
                                        <p>
                                            <span>보증금</span>
                                            <span>150만원 ~ 150만원</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={star_gray} alt={"star_gray"} />
                                    <div className={cx("image-box")}>
                                        <img src={room2} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>청년주택</button>
                                        <span>국민임대</span>
                                    </div>
                                    <div className={cx("title")}>
                                        2019년 서울시 영구임대주택 예비입주자
                                        모집
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
                                        <p>
                                            <span>월세</span>
                                            <span>38만원 ~ 55만원</span>
                                        </p>
                                        <p>
                                            <span>보증금</span>
                                            <span>150만원 ~ 150만원</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={star_gray} alt={"star_gray"} />
                                    <div className={cx("image-box")}>
                                        <img src={room3} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>원룸</button>
                                    </div>
                                    <div className={cx("title")}>
                                        2019년 서울시 영구임대주택 예비입주자
                                        모집
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
                                        <p>
                                            <span>월세</span>
                                            <span>38만원 ~ 55만원</span>
                                        </p>
                                        <p>
                                            <span>보증금</span>
                                            <span>150만원 ~ 150만원</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={star_gray} alt={"star_gray"} />
                                    <div className={cx("image-box")}>
                                        <img src={room4} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>청년주택</button>
                                        <span>국민임대</span>
                                    </div>
                                    <div className={cx("title")}>
                                        2019년 서울시 영구임대주택 예비입주자
                                        모집
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
                                        <p>
                                            <span>월세</span>
                                            <span>38만원 ~ 55만원</span>
                                        </p>
                                        <p>
                                            <span>보증금</span>
                                            <span>150만원 ~ 150만원</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
