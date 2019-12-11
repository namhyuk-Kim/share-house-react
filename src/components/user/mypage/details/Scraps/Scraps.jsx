import React from "react";
import classnames from "classnames/bind";
import styled from "./_Scraps.module.scss";
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
