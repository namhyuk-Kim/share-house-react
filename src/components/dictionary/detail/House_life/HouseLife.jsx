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

class Dictionary extends React.Component {
    render() {
        return (
            <div className={cx("dictionary-wrap")}>
                <div className={cx("dictionary-search")}>
                    <h1>청년주거 백과</h1>
                    <p>
                        청년들의 더 나은 주거환경과 올바른 주거문화 형성을 위한
                        <br />
                        다양한 정보를 제공해 드립니다.
                    </p>
                    <form>
                        <input
                            type="text"
                            placeholder="검색어를 입력해주세요."
                        ></input>
                        <button>검색</button>
                        <img src={search} alt={"search"} />
                    </form>
                </div>
                <div className={cx("dictionary-category")}>
                    <div className={cx("main-category")}>
                        <ul>
                            <li>
                                <Link to="/" className={cx("primary_blue")}>
                                    ALL
                                </Link>
                            </li>
                            <li>
                                <Link to="/">쉐어하우스</Link>
                            </li>
                            <li>
                                <Link to="/">서울시 청년주택</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("sub-category")}>
                        <ul>
                            <li>
                                <Link to="/">슬기로운 하우스생활</Link>
                            </li>
                            <li>
                                <Link to="/" className={cx("primary_blue")}>
                                    컴앤스테이툰
                                </Link>
                            </li>
                            <li>
                                <Link to="/">쉐어하우스 스토리</Link>
                            </li>
                            <li>
                                <Link to="/">쉐어하우스 리포트</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx("dictionary-contents")}>
                    <div className={cx("contents-list")}>
                        <div className={cx("houselife-items")}>
                            <div>
                                <div className={cx("third-cols")}>
                                    <div className={cx("image-cover")}>
                                        <img
                                            src={dictionary_image}
                                            alt="게시물 이미지"
                                        />
                                    </div>
                                    <h3>
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </h3>
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("third-cols")}>
                                    <div className={cx("image-cover")}>
                                        <img
                                            src={dictionary_image}
                                            alt="게시물 이미지"
                                        />
                                    </div>
                                    <h3>
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </h3>
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("third-cols")}>
                                    <div className={cx("image-cover")}>
                                        <img
                                            src={dictionary_image}
                                            alt="게시물 이미지"
                                        />
                                    </div>
                                    <h3>
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </h3>
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("houselife-items")}>
                            <div>
                                <div className={cx("third-cols")}>
                                    <div className={cx("image-cover")}>
                                        <img
                                            src={dictionary_image}
                                            alt="게시물 이미지"
                                        />
                                    </div>
                                    <h3>
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </h3>
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("third-cols")}>
                                    <div className={cx("image-cover")}>
                                        <img
                                            src={dictionary_image}
                                            alt="게시물 이미지"
                                        />
                                    </div>
                                    <h3>
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </h3>
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("third-cols")}>
                                    <div className={cx("image-cover")}>
                                        <img
                                            src={dictionary_image}
                                            alt="게시물 이미지"
                                        />
                                    </div>
                                    <h3>
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </h3>
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

export default Dictionary;
