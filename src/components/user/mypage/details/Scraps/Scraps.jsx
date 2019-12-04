import React from "react";
import classnames from "classnames/bind";
import styled from "./_Scraps.module.scss";
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
import stroy_image from "assets/images/stroy-image.png";
import heart from "assets/images/heart.png";
import comment from "assets/images/comment.png";

const cx = classnames.bind(styled);

class Scraps extends React.Component {
    render() {
        return (
            <>
                <div className={cx("story")}>
                    <div>
                        <div className={cx("story-card")}>
                            <div className={cx("card-image")}>
                                <img src={stroy_image} alt="card" />
                            </div>
                            <div className={cx("card-title")}>
                                쉐어하우스에서는 별도의 가전을 살필요가 없어요.
                            </div>
                            <div className={cx("card-footer")}>
                                <span>2019.01.02</span>
                                <span>
                                    <img src={heart} alt="heart" />
                                    123
                                </span>
                                <span>
                                    <img src={comment} alt="comment" />2
                                </span>
                            </div>
                        </div>
                        <div className={cx("story-card")}>
                            <div className={cx("card-image")}>
                                <img src={stroy_image} alt="card" />
                            </div>
                            <div className={cx("card-title")}>
                                쉐어하우스에서는 별도의 가전을 살필요가 없어요.
                            </div>
                            <div className={cx("card-footer")}>
                                <span>2019.01.02</span>
                                <span>
                                    <img src={heart} alt="heart" />
                                    123
                                </span>
                                <span>
                                    <img src={comment} alt="comment" />2
                                </span>
                            </div>
                        </div>
                        <div className={cx("story-card")}>
                            <div className={cx("card-image")}>
                                <img src={stroy_image} alt="card" />
                            </div>
                            <div className={cx("card-title")}>
                                쉐어하우스에서는 별도의 가전을 살필요가 없어요.
                            </div>
                            <div className={cx("card-footer")}>
                                <span>2019.01.02</span>
                                <span>
                                    <img src={heart} alt="heart" />
                                    123
                                </span>
                                <span>
                                    <img src={comment} alt="comment" />2
                                </span>
                            </div>
                        </div>
                        <div className={cx("story-card")}>
                            <div className={cx("card-image")}>
                                <img src={stroy_image} alt="card" />
                            </div>
                            <div className={cx("card-title")}>
                                쉐어하우스에서는 별도의 가전을 살필요가 없어요.
                            </div>
                            <div className={cx("card-footer")}>
                                <span>2019.01.02</span>
                                <span>
                                    <img src={heart} alt="heart" />
                                    123
                                </span>
                                <span>
                                    <img src={comment} alt="comment" />2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("story")}>
                    <div>
                        <div className={cx("story-card")}>
                            <div className={cx("card-image")}>
                                <img src={stroy_image} alt="card" />
                            </div>
                            <div className={cx("card-title")}>
                                쉐어하우스에서는 별도의 가전을 살필요가 없어요.
                            </div>
                            <div className={cx("card-footer")}>
                                <span>2019.01.02</span>
                                <span>
                                    <img src={heart} alt="heart" />
                                    123
                                </span>
                                <span>
                                    <img src={comment} alt="comment" />2
                                </span>
                            </div>
                        </div>
                        <div className={cx("story-card")}>
                            <div className={cx("card-image")}>
                                <img src={stroy_image} alt="card" />
                            </div>
                            <div className={cx("card-title")}>
                                쉐어하우스에서는 별도의 가전을 살필요가 없어요.
                            </div>
                            <div className={cx("card-footer")}>
                                <span>2019.01.02</span>
                                <span>
                                    <img src={heart} alt="heart" />
                                    123
                                </span>
                                <span>
                                    <img src={comment} alt="comment" />2
                                </span>
                            </div>
                        </div>
                        <div className={cx("story-card")}>
                            <div className={cx("card-image")}>
                                <img src={stroy_image} alt="card" />
                            </div>
                            <div className={cx("card-title")}>
                                쉐어하우스에서는 별도의 가전을 살필요가 없어요.
                            </div>
                            <div className={cx("card-footer")}>
                                <span>2019.01.02</span>
                                <span>
                                    <img src={heart} alt="heart" />
                                    123
                                </span>
                                <span>
                                    <img src={comment} alt="comment" />2
                                </span>
                            </div>
                        </div>
                        <div className={cx("story-card")}>
                            <div className={cx("card-image")}>
                                <img src={stroy_image} alt="card" />
                            </div>
                            <div className={cx("card-title")}>
                                쉐어하우스에서는 별도의 가전을 살필요가 없어요.
                            </div>
                            <div className={cx("card-footer")}>
                                <span>2019.01.02</span>
                                <span>
                                    <img src={heart} alt="heart" />
                                    123
                                </span>
                                <span>
                                    <img src={comment} alt="comment" />2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Scraps;
