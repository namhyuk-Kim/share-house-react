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

class MainAll extends React.Component {
    render() {
        return (
            <div className={cx("dictionary-contents")}>
                <div className={cx("contents-list")}>
                    <h2>
                        슬기로운 하우스생활
                        <Link to="/">더보기</Link>
                    </h2>
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
                                    <Link to="/article/articleid">
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </Link>
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
                    <h2>
                        컴앤스테이툰
                        <Link to="/">더보기</Link>
                    </h2>
                    <div className={cx("comics")}>
                        <div>
                            <div>
                                <div className={cx("comic-avata")}>
                                    <img src={comic_avata} alt="avata" />
                                </div>
                                <div className={cx("comic-info")}>
                                    <h4>
                                        <Link to="/article/articleid">
                                            Vol 9 입주시즌의 쉐어하우스
                                        </Link>
                                    </h4>
                                    <p>
                                        새로운 하우스 식구들과 함께하는 회식시
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={cx("comic-avata")}>
                                    <img src={comic_avata} alt="avata" />
                                </div>
                                <div className={cx("comic-info")}>
                                    <h4>
                                        <Link to="/article/articleid">
                                            Vol 9 입주시즌의 쉐어하우스
                                        </Link>
                                    </h4>
                                    <p>
                                        새로운 하우스 식구들과 함께하는 회식시
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>
                        쉐어하우스 스토리
                        <Link to="/">더보기</Link>
                    </h2>
                    <div className={cx("story")}>
                        <div>
                            <div className={cx("story-card")}>
                                <div className={cx("card-image")}>
                                    <img src={stroy_image} alt="card" />
                                </div>
                                <div className={cx("card-title")}>
                                    <Link to="/article/articleid">
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        쉐어하우스에서는 별도의 가전을 살필요가
                                        없어요.
                                    </Link>
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
                    <h2>
                        쉐어하우스 리포트
                        <Link to="/">더보기</Link>
                    </h2>
                    <div className={cx("houselife-report")}>
                        <div>
                            <div className={cx("third-cols")}>
                                <div className={cx("image-cover")}>
                                    <img
                                        src={dictionary_image}
                                        alt="게시물 이미지"
                                    />
                                </div>
                                <h3>
                                    <Link to="/article/articleid">
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        쉐어하우스 입주자들과 함께하는 연말연시
                                    </Link>
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
                    <h2>
                        쉐어하우스 스토리
                        <Link to="/">더보기</Link>
                    </h2>
                    <div className={cx("young-house")}>
                        <div>
                            <div>
                                <div className={cx("comic-avata")}>
                                    <img src={young_house} alt="avata" />
                                </div>
                                <div className={cx("comic-info")}>
                                    <h4>
                                        <Link to="/article/articleid">
                                            역세권 2030 청년주택 :
                                            청년(층)편(공공임대,
                                            <br /> 민간임대조건)
                                        </Link>
                                    </h4>
                                    <p>
                                        새로운 하우스 식구들과 함께하는 회식시
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={cx("comic-avata")}>
                                    <img src={young_house} alt="avata" />
                                </div>
                                <div className={cx("comic-info")}>
                                    <h4>
                                        <Link to="/article/articleid">
                                            역세권 2030 청년주택 :
                                            청년(층)편(공공임대,
                                            <br /> 민간임대조건)
                                        </Link>
                                    </h4>
                                    <p>
                                        새로운 하우스 식구들과 함께하는 회식시
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
                                            <img src={comment} alt="comment" />2
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>
                        청년임대주택 알아보기
                        <Link to="/">더보기</Link>
                    </h2>
                    <div className={cx("young-house-info")}>
                        <div>
                            <div className={cx("third-cols")}>
                                <div className={cx("image-cover")}>
                                    <img
                                        src={dictionary_image}
                                        alt="게시물 이미지"
                                    />
                                </div>
                                <h3>
                                    <Link to="/article/articleid">
                                        행복주택 입주조건 알아보기
                                        <br /> 서울시 청년주택과 다른 점은?
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        행복주택 입주조건 알아보기
                                        <br /> 서울시 청년주택과 다른 점은?
                                    </Link>
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
                                    <Link to="/article/articleid">
                                        행복주택 입주조건 알아보기
                                        <br /> 서울시 청년주택과 다른 점은?
                                    </Link>
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
        );
    }
}

export default MainAll;
