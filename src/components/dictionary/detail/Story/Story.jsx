import React from "react";
import classnames from "classnames/bind";
import styles from "./_Dictionary.module.scss";
import heart from "assets/images/heart.png";
import comment from "assets/images/comment.png";
import stroy_image from "assets/images/stroy-image.png";

const cx = classnames.bind(styles);

class Story extends React.Component {
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
                        <div className={cx("story")}>
                            <div>
                                {this.state.ArticleArr.filter(
                                    items =>
                                        items["CATEGORY_NAME"] ===
                                        "쉐어하우스 스토리"
                                ).map((items, index) => {
                                    return (
                                        <div
                                            className={cx("story-card")}
                                            key={items["ARTICLE_ID"]}
                                        >
                                            <div className={cx("card-image")}>
                                                <img
                                                    src={
                                                        items["INFO_THUMB_URL"]
                                                    }
                                                    alt="card"
                                                />
                                            </div>
                                            <div className={cx("card-title")}>
                                                <a
                                                    href={items["ARTICLE_URL"]}
                                                    target="_BLANK"
                                                >
                                                    {items["TITLE"]}
                                                </a>
                                            </div>
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

export default Story;
