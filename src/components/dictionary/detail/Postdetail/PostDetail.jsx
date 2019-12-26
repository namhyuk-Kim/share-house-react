import React from "react";
import styles from "./_PostDetail.module.scss";
import classnames from "classnames/bind";
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2
} from "react-html-parser";
import Back from "assets/images/back.png";
import main_image from "assets/images/main-image.png";
import content_image1 from "assets/images/content-image1.png";
import content_image2 from "assets/images/content-image2.png";
import Dashed from "assets/images/dashed.png";
import heart from "assets/images/heart.png";
import card_image from "assets/images/card-image.png";
import link_share from "assets/images/link_share.png";
// import caledar from "assets/images/caledar.png";
import user_avata from "assets/images/user-avata.png";
import book_mark from "assets/images/bookmark.png";
import color_kakao from "assets/images/color_kakao.png";
import color_facebook from "assets/images/color_facebook.png";
import color_blog from "assets/images/color_blog.png";

import MobilePostDetailMenu from "./MobilePostDetailMenu/MobilePostDetailMenu";
import Recomment from "./recomment/Recomment";

const cx = classnames.bind(styles);

class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            comment_len: "",
            article: [],
            cookies: this.props.cookies,
            comment: "",
            RecommentVis: false,
            visIndex: -1
        };
    }

    AddComment = e => {
        e.preventDefault();
        if (JSON.stringify(this.props.cookies) === "{}") {
            alert("로그인 후 댓글을 등록할 수 있습니다.");
        } else {
            this.props.AddComment(this.state.comment);
            window.location.reload();
        }
    };

    // AddreComment = (e, orgseq) => {
    //     e.preventDefault();
    //     if (JSON.stringify(this.props.cookies) === "{}") {
    //         alert("로그인 후 댓글을 등록할 수 있습니다.");
    //     } else {
    //         this.props.AddComment(this.state.comment, orgseq);
    //         window.location.reload();
    //     }
    // };

    showreComment = (e, index, seq) => {
        e.preventDefault();
        let NextState = this.state;
        NextState["RecommentVis"] = !NextState["RecommentVis"];
        NextState["visIndex"] = index;
        this.setState(NextState);
    };

    onChange = e => {
        let NextState = this.state;
        NextState["comment"] = e.target.value;
        this.setState(NextState);
    };

    componentDidMount() {
        this.props.ContentDetail().then(value => {
            let NextState = this.state;

            NextState["commentList"] = value["commentList"];
            NextState["article"] = value["article"];
            NextState["comment_len"] = value["commentList"].length;
            this.setState(NextState);
        });
    }

    render() {
        return (
            <div className={cx("Postdetail-wrap")}>
                <div className={cx("post-top-nav")}>
                    <img src={Back} alt="back-to-page" />
                    <span>{this.state.article["CATEGORY_NAME"]}</span>
                </div>
                <div className={cx("post-wrap")}>
                    <div className={cx("post-content")}>
                        <div className={cx("main-image")}>
                            <img
                                src={this.state.article["INFO_PIC_URL"]}
                                alt="img"
                            />
                        </div>
                        <MobilePostDetailMenu article={this.state.article} />
                        <div className={cx("main-content")}>
                            {ReactHtmlParser(this.state.article["CONTENTS"])}
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
                                    &nbsp;{this.state.comment_len}
                                </span>
                            </div>
                            <form className={cx("add-comment")}>
                                <input
                                    type="text"
                                    placeholder={
                                        JSON.stringify(this.props.cookies) ===
                                        "{}"
                                            ? "댓글을 작성하려면 로그인해 주세요."
                                            : "댓글을 작성하여 주세요."
                                    }
                                    onChange={e => this.onChange(e)}
                                />
                                <button onClick={e => this.AddComment(e)}>
                                    등록
                                </button>
                            </form>
                            {this.state.commentList
                                .filter(value => value["IS_REPLY"] === "N")
                                .map((item, index) => {
                                    return (
                                        <>
                                            <div className={cx("comments")}>
                                                <p>{item["MESSAGE"]}</p>

                                                <>
                                                    {this.state.RecommentVis ? (
                                                        this.state.visIndex ===
                                                        index ? (
                                                            <button
                                                                onClick={e =>
                                                                    this.showreComment(
                                                                        e,
                                                                        index,
                                                                        item[
                                                                            "SEQ"
                                                                        ]
                                                                    )
                                                                }
                                                            >
                                                                답글취소
                                                            </button>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    onClick={e =>
                                                                        this.showreComment(
                                                                            e
                                                                        )
                                                                    }
                                                                >
                                                                    답글
                                                                </button>
                                                                <button>
                                                                    수정
                                                                </button>
                                                                <button>
                                                                    삭제
                                                                </button>
                                                            </>
                                                        )
                                                    ) : (
                                                        <>
                                                            <button
                                                                onClick={e =>
                                                                    this.showreComment(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                답글
                                                            </button>
                                                            <button>
                                                                수정
                                                            </button>
                                                            <button>
                                                                삭제
                                                            </button>
                                                        </>
                                                    )}
                                                </>

                                                <div
                                                    className={cx(
                                                        "comment-data"
                                                    )}
                                                >
                                                    <span
                                                        className={cx(
                                                            "nickname"
                                                        )}
                                                    >
                                                        {item["NICK_NAME"]}
                                                    </span>
                                                    <span
                                                        className={cx(
                                                            "add-date"
                                                        )}
                                                    >
                                                        {item["CREATE_DT"]}
                                                    </span>
                                                </div>

                                                <div
                                                    className={cx("clear")}
                                                ></div>
                                                {this.state.RecommentVis ? (
                                                    this.state.visIndex ===
                                                    index ? (
                                                        <Recomment
                                                            cookies={
                                                                this.props
                                                                    .cookies
                                                            }
                                                            org_seq={
                                                                item["SEQ"]
                                                            }
                                                            AddreComment={
                                                                this.props
                                                                    .AddComment
                                                            }
                                                        />
                                                    ) : null
                                                ) : null}
                                                {this.state.commentList
                                                    .filter(value => {
                                                        if (
                                                            value[
                                                                "IS_REPLY"
                                                            ] === "Y" &&
                                                            value["ORG_SEQ"] ===
                                                                item["ORG_SEQ"]
                                                        ) {
                                                            return (
                                                                value[
                                                                    "IS_REPLY"
                                                                ] === "Y" &&
                                                                value[
                                                                    "ORG_SEQ"
                                                                ] ===
                                                                    item[
                                                                        "ORG_SEQ"
                                                                    ]
                                                            );
                                                        }
                                                    })
                                                    .map(item => {
                                                        return (
                                                            <>
                                                                <div
                                                                    className={cx(
                                                                        "re-comment"
                                                                    )}
                                                                >
                                                                    <div>
                                                                        <img
                                                                            src={
                                                                                Dashed
                                                                            }
                                                                            alt="dash"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className={cx(
                                                                            "re-comment-text"
                                                                        )}
                                                                    >
                                                                        <p>
                                                                            {
                                                                                item[
                                                                                    "MESSAGE"
                                                                                ]
                                                                            }
                                                                        </p>
                                                                        <>
                                                                            {this
                                                                                .state
                                                                                .RecommentVis ? (
                                                                                this
                                                                                    .state
                                                                                    .visIndex ===
                                                                                index ? (
                                                                                    <button
                                                                                        onClick={e =>
                                                                                            this.showreComment(
                                                                                                e,
                                                                                                index,
                                                                                                item[
                                                                                                    "SEQ"
                                                                                                ]
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        답글취소
                                                                                    </button>
                                                                                ) : (
                                                                                    <>
                                                                                        <button
                                                                                            onClick={e =>
                                                                                                this.showreComment(
                                                                                                    e
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            답글
                                                                                        </button>
                                                                                        <button>
                                                                                            수정
                                                                                        </button>
                                                                                        <button>
                                                                                            삭제
                                                                                        </button>
                                                                                    </>
                                                                                )
                                                                            ) : (
                                                                                <>
                                                                                    <button
                                                                                        onClick={e =>
                                                                                            this.showreComment(
                                                                                                e,
                                                                                                index
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        답글
                                                                                    </button>
                                                                                    <button>
                                                                                        수정
                                                                                    </button>
                                                                                    <button>
                                                                                        삭제
                                                                                    </button>
                                                                                </>
                                                                            )}
                                                                        </>
                                                                    </div>

                                                                    <div
                                                                        className={cx(
                                                                            "comment-data"
                                                                        )}
                                                                    >
                                                                        <span
                                                                            className={cx(
                                                                                "nickname"
                                                                            )}
                                                                        >
                                                                            {
                                                                                item[
                                                                                    "NICK_NAME"
                                                                                ]
                                                                            }
                                                                        </span>
                                                                        <span
                                                                            className={cx(
                                                                                "add-date"
                                                                            )}
                                                                        >
                                                                            {
                                                                                item[
                                                                                    "CREATE_DT"
                                                                                ]
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className={cx(
                                                                            "clear"
                                                                        )}
                                                                    ></div>
                                                                    {this.state
                                                                        .RecommentVis ? (
                                                                        this
                                                                            .state
                                                                            .visIndex ===
                                                                        index ? (
                                                                            <Recomment
                                                                                cookies={
                                                                                    this
                                                                                        .props
                                                                                        .cookies
                                                                                }
                                                                                org_seq={
                                                                                    item[
                                                                                        "SEQ"
                                                                                    ]
                                                                                }
                                                                                AddreComment={
                                                                                    this
                                                                                        .props
                                                                                        .AddComment
                                                                                }
                                                                            />
                                                                        ) : null
                                                                    ) : null}
                                                                </div>
                                                            </>
                                                        );
                                                    })}
                                            </div>
                                        </>
                                    );
                                })}
                            {/* <div className={cx("comments")}>
                                <p>
                                    입주 2달을 앞두고 있습니다. 정보를 찾던 와중
                                    자꾸 안좋은 소리만 듣게 되는데요. 방음이
                                    너무 부실하다는 이야기가 많아서 실 제로
                                    임대주택 거주중인 분들은 그런 문제가
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
                                            이야기가 많아서 실제로 임대주택
                                            거주중인 분들은 그런 문제가
                                            없는지요?
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
                                    너무 부실하다는 이야기가 많아서 실 제로
                                    임대주택 거주중인 분들은 그런 문제가
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
                                    너무 부실하다는 이야기가 많아서 실 제로
                                    임대주택 거주중인 분들은 그런 문제가
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
                            </div> */}
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
                    <h3 className={cx("primary_blue")}>
                        {this.state.article["CATEGORY_NAME"]}
                    </h3>
                    <h1>{this.state.article["TITLE"]}</h1>

                    {this.state.article["WRITER"] !== "" && (
                        <div className={cx("publisher")}>
                            <span className={cx("profile")}>
                                <img src={user_avata} alt="user-avata" />
                            </span>
                            {this.state.article["WRITER"]}
                        </div>
                    )}
                    <span className={cx("write-date")}>
                        {this.state.article["CREATE_DT"]}
                    </span>

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
