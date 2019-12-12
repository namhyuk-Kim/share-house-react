import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import styles from "./_MobileFooter.module.scss";
import apple from "assets/images/apple.png";
import google from "assets/images/google_play.png";
import korea from "assets/images/korea.png";
import usa from "assets/images/usa.png";
import facebook from "assets/images/Facebook.png";
import n_blog from "assets/images/n_blog.png";
import instargram from "assets/images/Instagram.png";
import n_post from "assets/images/n_post.png";

const cx = classnames.bind(styles);

class MobileFooter extends React.Component {
    render() {
        return (
            <footer className={cx("m-footer")}>
                <div className={cx("content")}>
                    <div className={cx("download-app")}>
                        <a
                            href="https://apps.apple.com/kr/app/%EC%BB%B4%EC%95%A4%EC%8A%A4%ED%85%8C%EC%9D%B4/id1089462100"
                            target="_blank"
                        >
                            <img src={apple} alt={"download-apple"} />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.thecomenstay&hl=ko"
                            target="_blank"
                        >
                            <img src={google} alt={"download-google"} />
                        </a>
                    </div>
                    <div className={cx("language-sns")}>
                        <div className={cx("language")}>
                            <div>
                                <Link to="#">
                                    <img src={korea} alt="korea" />
                                </Link>
                            </div>

                            <div>
                                <Link to="#">
                                    <img src={usa} alt="usa" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx("sns")}>
                            <div>
                                <Link to="#">
                                    <img src={facebook} alt="facebook" />
                                </Link>
                            </div>

                            <div>
                                <Link to="#">
                                    <img src={instargram} alt="instargram" />
                                </Link>
                            </div>

                            <div>
                                <Link to="#">
                                    <img src={n_blog} alt="n_blog" />
                                </Link>
                            </div>

                            <div>
                                <Link to="#">
                                    <img src={n_post} alt="n_post" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx("clear")}></div>
                    <div className={cx("company-info")}>
                        <h3>컴앤스테이</h3>
                        <ul>
                            <li>
                                <a href="/company/intro">회사소개</a>
                            </li>
                            <li>
                                <a href="/company/terms">이용약관</a>
                            </li>
                            <li>
                                <a href="/company/Privacy">개인정보 취급방침</a>
                            </li>
                            <li>
                                <Link to="/">고객문의</Link>
                            </li>
                        </ul>
                        <div className={cx("copy")}>
                            <p>
                                서울특별시 성북구 삼선교로 16길 116
                                한성대상상큐브 A208호
                                <br />
                                대표 : 김문영&nbsp;&nbsp;사업자 등록번호
                                182-81-00280
                                <br />
                                COPYRIGHT ⓒ Come&stay Co.Ltd.ALL RIGHTS
                                RESERVED.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default MobileFooter;
