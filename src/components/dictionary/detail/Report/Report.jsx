import React from "react";
import classnames from "classnames/bind";
import styles from "./_Dictionary.module.scss";
import { Link } from "react-router-dom";
import heart from "assets/images/heart.png";
import comment from "assets/images/comment.png";
import dictionary_image from "assets/images/dictionary-item.png";
import user_avata from "assets/images/user-avata.png";
import Image from "assets/images/default-image.png";

const cx = classnames.bind(styles);

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ArticleArr: []
        };
    }

    onImageError = e => {
        e.currentTarget.src = Image;
    };

    componentDidMount() {
        this.props.ArticleContent().then(array => {
            this.setState({
                ArticleArr: array
            });
        });
    }

    render() {
        return (
            <div className={cx("dictionary-wrap")}>
                <div className={cx("dictionary-contents")}>
                    <div className={cx("contents-list")}>
                        <div className={cx("houselife-report")}>
                            <div>
                                {this.state.ArticleArr.filter(
                                    items =>
                                        items["CATEGORY_NAME"] ===
                                        "쉐어하우스 리포트"
                                ).map(items => {
                                    return (
                                        <div
                                            className={cx("third-cols")}
                                            key={items["ARTICLE_ID"]}
                                        >
                                            <div className={cx("image-cover")}>
                                                <img
                                                    src={
                                                        items["INFO_THUMB_URL"]
                                                    }
                                                    alt="게시물 이미지"
                                                    onError={this.onImageError}
                                                />
                                            </div>
                                            <h3>
                                                {items["ARTICLE_TYPE"] !==
                                                "1" ? (
                                                    <a
                                                        href={
                                                            items["ARTICLE_URL"]
                                                        }
                                                        target="_blank"
                                                    >
                                                        {items["TITLE"]}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={
                                                            "/article/" +
                                                            items["ARTICLE_ID"]
                                                        }
                                                    >
                                                        {items["TITLE"]}
                                                    </Link>
                                                )}
                                            </h3>
                                            {items["WRITER"] !== "" && (
                                                <div
                                                    className={cx("publisher")}
                                                >
                                                    <span
                                                        className={cx(
                                                            "profile"
                                                        )}
                                                    >
                                                        <img
                                                            src={user_avata}
                                                            alt="user-avata"
                                                        />
                                                    </span>
                                                    {items["WRITER"]}
                                                </div>
                                            )}
                                            <div className={cx("card-footer")}>
                                                <span>
                                                    {items["CREATE_DT"]}
                                                </span>
                                                <span>
                                                    <img
                                                        src={heart}
                                                        alt="heart"
                                                    />
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
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Report;
