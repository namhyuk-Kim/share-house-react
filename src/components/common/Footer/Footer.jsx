import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_Footer.module.scss";
import apple from "assets/images/apple.png";
import google from "assets/images/google_play.png";
import korea from "assets/images/korea.png";
import usa from "assets/images/usa.png";
import facebook from "assets/images/Facebook.png";
import n_blog from "assets/images/n_blog.png";
import instargram from "assets/images/Instagram.png";
import n_post from "assets/images/n_post.png";

const cx = classnames.bind(styles);

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={cx("content")}>
                    <div className={cx("introduce")}>
                        <div>
                            <div className={cx("download")}>
                                <Link to="#">
                                    <img src={apple} alt={"download-apple"} />
                                </Link>
                                <Link to="#">
                                    <img src={google} alt={"download-google"} />
                                </Link>
                            </div>
                            <h3>컴앤스테이</h3>
                            <ul>
                                <li>
                                    <a href="/company/intro">회사소개</a>
                                </li>
                                <li>
                                    <a href="/company/terms">
                                        &nbsp;&nbsp;|&nbsp;&nbsp;이용약관
                                    </a>
                                </li>
                                <li>
                                    <a href="/company/Privacy">
                                        &nbsp;&nbsp;|&nbsp;&nbsp;개인정보
                                        취급방침
                                    </a>
                                </li>
                                <li>
                                    <Link to="/">
                                        &nbsp;&nbsp;|&nbsp;&nbsp;고객문의
                                    </Link>
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
                    <div className={cx("navigation")}>
                        <div className={cx("language")}>
                            <div>
                                <Link to="#">
                                    <img src={korea} alt="korea" />
                                    <span>한국어</span>
                                </Link>
                            </div>

                            <div>
                                <Link to="#">
                                    <img src={usa} alt="usa" />
                                    <span>ENGLISH</span>
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
                        <div className={cx("clear")}></div>
                        <div className={cx("f_navigation")}>
                            <ul>
                                <li>
                                    <div>
                                        <Link to="#">서울시 청년주택</Link>
                                        <Link to="#">
                                            청년임대주택 알아보기
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="#">슬기로운 하우스생활</Link>
                                        <Link to="#">컴앤스테이툰</Link>
                                        <Link to="#">쉐어하우스 스토리</Link>
                                        <Link to="#">
                                            쉐어하우스 시장보고서
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link to="#">하우스 검색</Link>
                                        <Link to="#">마이페이지</Link>
                                        <Link to="#">비즈페이지</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
