import React from "react";
import styles from "./_PostDetail.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Back from "assets/images/back.png";
import main_image from "assets/images/main-image.png";
import content_image1 from "assets/images/content-image1.png";
import content_image2 from "assets/images/content-image2.png";
import Dashed from "assets/images/dashed.png";
import comment from "assets/images/comment.png";
import heart from "assets/images/heart.png";
import card_image from "assets/images/card-image.png";
import floor from "assets/images/floor.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";
import folder_add from "assets/images/folder_add.png";
import share from "assets/images/share.png";
import facebook_share from "assets/images/facebook_share.png";
import kakao_share from "assets/images/kakao_share.png";
import twitter_share from "assets/images/twitter_share.png";
import link_share from "assets/images/link_share.png";
import caledar from "assets/images/caledar.png";
import chat_profile from "assets/images/chat-profile.png";
import user_avata from "assets/images/user-avata.png";
import book_mark from "assets/images/bookmark.png";
import color_kakao from "assets/images/color_kakao.png";
import color_facebook from "assets/images/color_facebook.png";
import color_blog from "assets/images/color_blog.png";

const cx = classnames.bind(styles);

class PostDetail extends React.Component {
    render() {
        return (
            <div className={cx("Postdetail-wrap")}>
                <div className={cx("post-top-nav")}>
                    <img src={Back} alt="back-to-page" />
                    <span>슬기로운 하우스생활</span>
                </div>
                <div className={cx("post-wrap")}>
                    <div className={cx("post-content")}>
                        <div className={cx("main-image")}>
                            <img src={main_image} alt="img" />
                        </div>
                        <div className={cx("main-content")}>
                            <h2>
                                바로바로,세탁기 사용후,조리도구 사용후,공용공간
                                사용 후 바로
                                <br />
                                정리해 주세요. 그래야 해요.
                            </h2>
                            <p>
                                안녕하세요. 컴앤스테이 입니다.
                                <br />
                                서울시 역세권 청년주택 청년층 임대는 공공과
                                민간, 민간도 특별공급과 일반공급으로 나뉘는데요.
                                <br />
                                <br />
                                기본 조건만 맞는 미혼의 청년이라면 누구든지
                                입주대상자랍니다.
                                <br /> 궁금한 키워드가 있다면 CTRL+F눌러
                                확인해보세요.
                                <br />
                                <br />
                                현재 대학생이라면 여기를 눌러 공공임대 전형을
                                확인하거나
                                <br /> 아래로 스크롤해 민한임대 영역을
                                확인해주세요.
                            </p>
                            <img src={content_image1} alt="image1" />
                            <p>
                                기본 조건만 맞는 미혼의 청년이라면 누구든지
                                입주대상자랍니다.
                                <br /> 궁금한 키워드가 있다면 CTRL+F눌러
                                확인해보세요.
                                <br />
                                <br />
                                현재 대학생이라면 여기를 눌러 공공임대 전형을
                                확인하거나 아래로 스크롤해 민한임대 영역을
                                확인해주세요.
                            </p>
                            <img src={content_image2} alt="image2" />
                            <p>
                                청년층 공공임대는 대학생과 분리되어 딱!
                                사회초년생들을 대상으로 진행되는데요. 아직은
                                조금 낮선 사회, 내집 없는 설움도 버티며 서울에서
                                열심히 살고 있는 청년들에게 힘을 실어줄수 있을지
                                기<br />
                                대가 되는 부분입니다.
                                <br />
                                <br />
                                어떤 기준들이 있는지 한번 살펴볼까요?
                            </p>
                            <div className={cx("post-tags")}>
                                <span className={cx("post-tag")}># SH</span>
                                <span className={cx("post-tag")}>
                                    # 역세권청년주택
                                </span>
                                <span className={cx("post-tag")}>
                                    # 공공임대
                                </span>
                                <span className={cx("post-tag")}># 청년</span>
                                <span className={cx("post-tag")}>
                                    # 사회초년생
                                </span>
                                <span className={cx("post-tag")}># 퇴사</span>
                                <span className={cx("post-tag")}># 소득</span>
                            </div>
                        </div>

                        <div className={cx("post-comment")}>
                            <div className={cx("comment_count")}>
                                댓글
                                <span className={cx("primary_blue")}>
                                    &nbsp;152
                                </span>
                            </div>
                            <form className={cx("add-comment")}>
                                <input
                                    type="text"
                                    placeholder="댓글을 작성하시려면 로그인해 주세요."
                                />
                                <button>등록</button>
                            </form>
                            <div className={cx("comments")}>
                                <p>
                                    입주 2달을 앞두고 있습니다. 정보를 찾던 와중
                                    자꾸 안좋은 소리만 듣게 되는데요. 방음이
                                    너무 부실하다는 이야기가 많아서 실<br />
                                    제로 임대주택 거주중인 분들은 그런 문제가
                                    없는지요?
                                </p>
                                <button>답글</button>
                                <button>수정</button>
                                <button>삭제</button>
                                <div>
                                    <span className={cx("nickname")}>
                                        ser***
                                    </span>
                                    <span className={cx("add-date")}>
                                        2019-10-10
                                    </span>
                                </div>
                            </div>
                            <div className={cx("comments")}>
                                <p>
                                    입주 2달을 앞두고 있습니다. 정보를 찾던 와중
                                    자꾸 안좋은 소리만 듣게 되는데요. 방음이
                                    너무 부실하다는 이야기가 많아서 실<br />
                                    제로 임대주택 거주중인 분들은 그런 문제가
                                    없는지요?
                                </p>
                                <button>답글</button>
                                <button>수정</button>
                                <button>삭제</button>
                                <div className={cx("comment-data")}>
                                    <span className={cx("nickname")}>
                                        ser***
                                    </span>
                                    <span className={cx("add-date")}>
                                        2019-10-10
                                    </span>
                                </div>
                                <div className={cx("clear")}></div>
                                <div className={cx("re-comment")}>
                                    <div>
                                        <img src={Dashed} alt="dash" />
                                    </div>
                                    <div className={cx("re-comment-text")}>
                                        <p>
                                            입주 2달을 앞두고 있습니다. 정보를
                                            찾던 와중에 자꾸 안 좋은 소리만 듣게
                                            되는데요. 방음이 너무 부실하다는
                                            이야기가
                                            <br />
                                            많아서 실제로 임대주택 거주중인
                                            분들은 그런 문제가 없는지요?
                                        </p>
                                    </div>
                                    <button>수정</button>
                                    <button>삭제</button>
                                    <div className={cx("comment-data")}>
                                        <span className={cx("nickname")}>
                                            ser***
                                        </span>
                                        <span className={cx("add-date")}>
                                            2019-10-10
                                        </span>
                                    </div>
                                    <div className={cx("clear")}></div>
                                </div>
                            </div>
                            <div className={cx("comments")}>
                                <p>
                                    입주 2달을 앞두고 있습니다. 정보를 찾던 와중
                                    자꾸 안좋은 소리만 듣게 되는데요. 방음이
                                    너무 부실하다는 이야기가 많아서 실<br />
                                    제로 임대주택 거주중인 분들은 그런 문제가
                                    없는지요?
                                </p>
                                <button>답글취소</button>
                                <div className={cx("comment-data")}>
                                    <span className={cx("nickname")}>
                                        ser***
                                    </span>
                                    <span className={cx("add-date")}>
                                        2019-10-10
                                    </span>
                                </div>
                                <div className={cx("clear")}></div>
                                <div className={cx("re-comment")}>
                                    <div>
                                        <img src={Dashed} alt="dash" />
                                    </div>
                                    <div className={cx("add-re-comment")}>
                                        <form className={cx("add-comment")}>
                                            <input
                                                type="text"
                                                placeholder="댓글을 작성하시려면 로그인해 주세요."
                                            />
                                            <button>등록</button>
                                        </form>
                                    </div>
                                    <div className={cx("clear")}></div>
                                </div>
                            </div>
                            <div className={cx("comments")}>
                                <p>
                                    입주 2달을 앞두고 있습니다. 정보를 찾던 와중
                                    자꾸 안좋은 소리만 듣게 되는데요. 방음이
                                    너무 부실하다는 이야기가 많아서 실<br />
                                    제로 임대주택 거주중인 분들은 그런 문제가
                                    없는지요?
                                </p>
                                <button>답글</button>
                                <button>수정취소</button>
                                <button>삭제</button>
                                <div className={cx("comment-data")}>
                                    <span className={cx("nickname")}>
                                        ser***
                                    </span>
                                    <span className={cx("add-date")}>
                                        2019-10-10
                                    </span>
                                </div>
                                <div className={cx("clear")}></div>
                                <div className={cx("re-comment")}>
                                    <div>
                                        <img src={Dashed} alt="dash" />
                                    </div>
                                    <div className={cx("modi-re-comment")}>
                                        <form className={cx("modi-comment")}>
                                            <input
                                                type="text"
                                                defaultValue="입주 2달을 앞두고 있습니다. 정보를 찾던 와중에 자꾸 안좋은 소리만 듣게 되는데요. 방음이 너무 부실하다는"
                                            />
                                            <button>등록</button>
                                        </form>
                                    </div>
                                    <div className={cx("clear")}></div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("house-story")}>
                            <h1>팸하우스 스토리</h1>
                            <div className={cx("story-cards-wrap")}>
                                <div className={cx("story-card")}>
                                    <div className={cx("card-image")}>
                                        <img src={card_image} alt="card" />
                                    </div>
                                    <div className={cx("card-title")}>
                                        쉐어하우스 밤에 통화시에 주의해아...
                                    </div>
                                </div>
                                <div className={cx("story-card")}>
                                    <div className={cx("card-image")}>
                                        <img src={card_image} alt="card" />
                                    </div>
                                    <div className={cx("card-title")}>
                                        쉐어하우스 밤에 통화시에 주의해아...
                                    </div>
                                </div>
                                <div className={cx("story-card")}>
                                    <div className={cx("card-image")}>
                                        <img src={card_image} alt="card" />
                                    </div>
                                    <div className={cx("card-title")}>
                                        쉐어하우스 밤에 통화시에 주의해아...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

                    <button className={cx("like")}>
                        <img src={heart} alt="icon" /> 좋아요&nbsp;{"1"}
                    </button>
                    <button className={cx("scrap")}>
                        <img src={book_mark} alt="icon" /> 스크랩&nbsp;{"1"}
                    </button>

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
                </div>
            </div>
        );
    }
}

export default PostDetail;
