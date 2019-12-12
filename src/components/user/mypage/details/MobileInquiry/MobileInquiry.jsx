import React from "react";
import classnames from "classnames/bind";
import styles from "./_MobileInquiry.module.scss";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

class MobileInquiry extends React.Component {
    render() {
        return (
            <div>
                <div className={cx("inquery")}>
                    <div className={cx("inquery_header")}>
                        <div>
                            <label>
                                <input type="checkbox" defaultValue="false" />
                            </label>
                            <button>삭제하기</button>
                        </div>
                    </div>
                    <div className={cx("inquery_body")}>
                        <div className={cx("inquery_left")}>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultValue="false"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={cx("inquery_right")}>
                            <div>
                                <span>쉐어하우스</span>
                                <span>플랜A길음성신여대점</span>
                                <span>24분전</span>
                            </div>
                            <div>
                                <Link to="/user/mypage/inquiry/detail">
                                    네,고객님 문의 주셔서 감사합니다. 저희
                                    길음...
                                </Link>
                            </div>
                        </div>
                        <div className={cx("clear")}></div>
                    </div>

                    <div className={cx("inquery_body")}>
                        <div className={cx("inquery_left")}>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultValue="false"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={cx("inquery_right")}>
                            <div>
                                <span>쉐어하우스</span>
                                <span>플랜A길음성신여대점</span>
                                <span>24분전</span>
                            </div>
                            <div>
                                <Link to="/user/mypage/inquiry/detail">
                                    네,고객님 문의 주셔서 감사합니다. 저희
                                    길음...
                                </Link>
                            </div>
                        </div>
                        <div className={cx("clear")}></div>
                    </div>

                    <div className={cx("inquery_body")}>
                        <div className={cx("inquery_left")}>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultValue="false"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={cx("inquery_right")}>
                            <div>
                                <span>쉐어하우스</span>
                                <span>플랜A길음성신여대점</span>
                                <span>24분전</span>
                            </div>
                            <div>
                                <Link to="/user/mypage/inquiry/detail">
                                    네,고객님 문의 주셔서 감사합니다. 저희
                                    길음...
                                </Link>
                            </div>
                        </div>
                        <div className={cx("clear")}></div>
                    </div>

                    <div className={cx("inquery_body")}>
                        <div className={cx("inquery_left")}>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultValue="false"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={cx("inquery_right")}>
                            <div>
                                <span>쉐어하우스</span>
                                <span>플랜A길음성신여대점</span>
                                <span>24분전</span>
                            </div>
                            <div>
                                <Link to="/user/mypage/inquiry/detail">
                                    네,고객님 문의 주셔서 감사합니다. 저희
                                    길음...
                                </Link>
                            </div>
                        </div>
                        <div className={cx("clear")}></div>
                    </div>

                    <div className={cx("inquery_body")}>
                        <div className={cx("inquery_left")}>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultValue="false"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={cx("inquery_right")}>
                            <div>
                                <span>쉐어하우스</span>
                                <span>플랜A길음성신여대점</span>
                                <span>24분전</span>
                            </div>
                            <div>
                                <Link to="/user/mypage/inquiry/detail">
                                    네,고객님 문의 주셔서 감사합니다. 저희
                                    길음...
                                </Link>
                            </div>
                        </div>
                        <div className={cx("clear")}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileInquiry;
