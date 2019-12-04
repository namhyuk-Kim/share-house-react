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

class Comic extends React.Component {
    render() {
        return (
            <div className={cx("dictionary-wrap")}>
                <div className={cx("dictionary-contents")}>
                    <div className={cx("contents-list")}>
                        <div className={cx("comics")}>
                            <div>
                                <div>
                                    <div className={cx("comic-avata")}>
                                        <img src={comic_avata} alt="avata" />
                                    </div>
                                    <div className={cx("comic-info")}>
                                        <h4>Vol 9 입주시즌의 쉐어하우스</h4>
                                        <p>
                                            새로운 하우스 식구들과 함께하는
                                            회식시
                                            <br />
                                            "앞으로 친하게 지내 보아요"
                                        </p>
                                        <div className={cx("publisher")}>
                                            <span className={cx("profile")}>
                                                <img
                                                    src={user_avata}
                                                    alt="user-avata"
                                                />
                                            </span>
                                            쉐어하우스 플랜 A
                                        </div>
                                        <div className={cx("card-footer")}>
                                            <span>2019.01.02</span>
                                            <span>
                                                <img src={heart} alt="heart" />
                                                123
                                            </span>
                                            <span>
                                                <img
                                                    src={comment}
                                                    alt="comment"
                                                />
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cx("comic-avata")}>
                                        <img src={comic_avata} alt="avata" />
                                    </div>
                                    <div className={cx("comic-info")}>
                                        <h4>Vol 9 입주시즌의 쉐어하우스</h4>
                                        <p>
                                            새로운 하우스 식구들과 함께하는
                                            회식시
                                            <br />
                                            "앞으로 친하게 지내 보아요"
                                        </p>
                                        <div className={cx("publisher")}>
                                            <span className={cx("profile")}>
                                                <img
                                                    src={user_avata}
                                                    alt="user-avata"
                                                />
                                            </span>
                                            쉐어하우스 플랜 A
                                        </div>
                                        <div className={cx("card-footer")}>
                                            <span>2019.01.02</span>
                                            <span>
                                                <img src={heart} alt="heart" />
                                                123
                                            </span>
                                            <span>
                                                <img
                                                    src={comment}
                                                    alt="comment"
                                                />
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("comics")}>
                            <div>
                                <div>
                                    <div className={cx("comic-avata")}>
                                        <img src={comic_avata} alt="avata" />
                                    </div>
                                    <div className={cx("comic-info")}>
                                        <h4>Vol 9 입주시즌의 쉐어하우스</h4>
                                        <p>
                                            새로운 하우스 식구들과 함께하는
                                            회식시
                                            <br />
                                            "앞으로 친하게 지내 보아요"
                                        </p>
                                        <div className={cx("publisher")}>
                                            <span className={cx("profile")}>
                                                <img
                                                    src={user_avata}
                                                    alt="user-avata"
                                                />
                                            </span>
                                            쉐어하우스 플랜 A
                                        </div>
                                        <div className={cx("card-footer")}>
                                            <span>2019.01.02</span>
                                            <span>
                                                <img src={heart} alt="heart" />
                                                123
                                            </span>
                                            <span>
                                                <img
                                                    src={comment}
                                                    alt="comment"
                                                />
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cx("comic-avata")}>
                                        <img src={comic_avata} alt="avata" />
                                    </div>
                                    <div className={cx("comic-info")}>
                                        <h4>Vol 9 입주시즌의 쉐어하우스</h4>
                                        <p>
                                            새로운 하우스 식구들과 함께하는
                                            회식시
                                            <br />
                                            "앞으로 친하게 지내 보아요"
                                        </p>
                                        <div className={cx("publisher")}>
                                            <span className={cx("profile")}>
                                                <img
                                                    src={user_avata}
                                                    alt="user-avata"
                                                />
                                            </span>
                                            쉐어하우스 플랜 A
                                        </div>
                                        <div className={cx("card-footer")}>
                                            <span>2019.01.02</span>
                                            <span>
                                                <img src={heart} alt="heart" />
                                                123
                                            </span>
                                            <span>
                                                <img
                                                    src={comment}
                                                    alt="comment"
                                                />
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("comics")}>
                            <div>
                                <div>
                                    <div className={cx("comic-avata")}>
                                        <img src={comic_avata} alt="avata" />
                                    </div>
                                    <div className={cx("comic-info")}>
                                        <h4>Vol 9 입주시즌의 쉐어하우스</h4>
                                        <p>
                                            새로운 하우스 식구들과 함께하는
                                            회식시
                                            <br />
                                            "앞으로 친하게 지내 보아요"
                                        </p>
                                        <div className={cx("publisher")}>
                                            <span className={cx("profile")}>
                                                <img
                                                    src={user_avata}
                                                    alt="user-avata"
                                                />
                                            </span>
                                            쉐어하우스 플랜 A
                                        </div>
                                        <div className={cx("card-footer")}>
                                            <span>2019.01.02</span>
                                            <span>
                                                <img src={heart} alt="heart" />
                                                123
                                            </span>
                                            <span>
                                                <img
                                                    src={comment}
                                                    alt="comment"
                                                />
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cx("comic-avata")}>
                                        <img src={comic_avata} alt="avata" />
                                    </div>
                                    <div className={cx("comic-info")}>
                                        <h4>Vol 9 입주시즌의 쉐어하우스</h4>
                                        <p>
                                            새로운 하우스 식구들과 함께하는
                                            회식시
                                            <br />
                                            "앞으로 친하게 지내 보아요"
                                        </p>
                                        <div className={cx("publisher")}>
                                            <span className={cx("profile")}>
                                                <img
                                                    src={user_avata}
                                                    alt="user-avata"
                                                />
                                            </span>
                                            쉐어하우스 플랜 A
                                        </div>
                                        <div className={cx("card-footer")}>
                                            <span>2019.01.02</span>
                                            <span>
                                                <img src={heart} alt="heart" />
                                                123
                                            </span>
                                            <span>
                                                <img
                                                    src={comment}
                                                    alt="comment"
                                                />
                                                2
                                            </span>
                                        </div>
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

export default Comic;
