import React from "react";
import classnames from "classnames/bind";
import styles from "./_Dictionary.module.scss";
import { Link } from "react-router-dom";
import heart from "assets/images/heart.png";
import comment from "assets/images/comment.png";
import dictionary_image from "assets/images/dictionary-item.png";
import user_avata from "assets/images/user-avata.png";

const cx = classnames.bind(styles);

class Dictionary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ArticleArr: []
        };
    }

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
                        <div className={cx("houselife-items")}>
                            <div>
                                {this.state.ArticleArr.filter(
                                    items =>
                                        items["CATEGORY_NAME"] ===
                                        "슬기로운 하우스 생활"
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
                                                    alt="슬기로운 하우스생활"
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

export default Dictionary;
