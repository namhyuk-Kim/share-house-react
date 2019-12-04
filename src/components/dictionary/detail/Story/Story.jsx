import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Dictionary.module.scss";
import search from "assets/images/Search.png";
import heart from "assets/images/heart.png";
import comment from "assets/images/comment.png";
import dictionary_image from "assets/images/dictionary-item.png";
import user_avata from "assets/images/user-avata.png";
import comic_avata from "assets/images/comic-avata.png";
import card_image from "assets/images/card-image.png";
import stroy_image from "assets/images/stroy-image.png";
import young_house from "assets/images/young-house.png";

const cx = classnames.bind(styles);

class Story extends React.Component {
    render() {
        return (
            <div className={cx("dictionary-wrap")}>
                <div className={cx("dictionary-contents")}>
                    <div className={cx("contents-list")}>
                        <div className={cx("story")}>
                            <div>
                                <div className={cx("story-card")}>
                                    <div className={cx("card-image")}>
                                        <img src={stroy_image} alt="card" />
                                    </div>
                                    <div className={cx("card-title")}>
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
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
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
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
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
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
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
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
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
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
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
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
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
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
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Story;
