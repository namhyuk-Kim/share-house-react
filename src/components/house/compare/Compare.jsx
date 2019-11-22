import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Compare.module.scss";
import compare1 from "assets/images/compare1.png";

const cx = classnames.bind(styles);

class Compare extends React.Component {
    render() {
        return (
            <div className={cx("compare")}>
                <div className={cx("compare-header")}>
                    <p>하우스 비교</p>
                </div>
                <div className={cx("compare-body")}>
                    <table>
                        <tbody>
                            <tr>
                                <td>하우스</td>
                                <td>
                                    <img src={compare1} alt="compare" />
                                    <h1>플랜A 성신여대점</h1>
                                    <span>(2019년 오픈)</span>
                                </td>
                                <td>
                                    <img src={compare1} alt="compare" />
                                    <h1>플랜A 성신여대점</h1>
                                    <span>(2019년 오픈)</span>
                                </td>
                                <td>
                                    <img src={compare1} alt="compare" />
                                    <h1>플랜A 성신여대점</h1>
                                    <span>(2019년 오픈)</span>
                                </td>
                                <td>
                                    <img src={compare1} alt="compare" />
                                    <h1>플랜A 성신여대점</h1>
                                    <span>(2019년 오픈)</span>
                                </td>
                            </tr>
                            <tr>
                                <td>물건종류</td>
                                <td>쉐어하우스</td>
                                <td>쉐어하우스</td>
                                <td>쉐어하우스</td>
                                <td>쉐어하우스</td>
                            </tr>
                            <tr>
                                <td>지역</td>
                                <td>동대문구 이문동</td>
                                <td>동대문구 이문동</td>
                                <td>동대문구 이문동</td>
                                <td>동대문구 이문동</td>
                            </tr>
                            <tr>
                                <td>인근지하철</td>
                                <td>
                                    <p>충정로 도보 5분</p>
                                    <p>아현역 도보 10분</p>
                                </td>
                                <td>
                                    <p>이화여대역 도보 10분 </p>
                                </td>
                                <td>
                                    <p>이화여대역 도보 10분 </p>
                                </td>
                                <td>
                                    <p>이화여대역 도보 10분 </p>
                                </td>
                            </tr>
                            <tr>
                                <td>인근대학교</td>
                                <td>
                                    <p>경희대학교</p>
                                </td>
                                <td>
                                    <p>경희대학교</p>
                                </td>
                                <td>
                                    <p>경희대학교</p>
                                </td>
                                <td>
                                    <p>경희대학교</p>
                                </td>
                            </tr>
                            <tr>
                                <td>주택형태</td>
                                <td>
                                    <p>아파트</p>
                                </td>
                                <td>
                                    <p>아파트</p>
                                </td>
                                <td>
                                    <p>아파트</p>
                                </td>
                                <td>
                                    <p>아파트</p>
                                </td>
                            </tr>
                            <tr>
                                <td>월 임대료</td>
                                <td>
                                    <p>35만원~52만원</p>
                                </td>
                                <td>
                                    <p>35만원~52만원</p>
                                </td>
                                <td>
                                    <p>35만원~52만원</p>
                                </td>
                                <td>
                                    <p>35만원~52만원</p>
                                </td>
                            </tr>
                            <tr>
                                <td>보증금</td>
                                <td>
                                    <p>35만원~52만원</p>
                                </td>
                                <td>
                                    <p>35만원~52만원</p>
                                </td>
                                <td>
                                    <p>35만원~52만원</p>
                                </td>
                                <td>
                                    <p>35만원~52만원</p>
                                </td>
                            </tr>
                            <tr>
                                <td>관리비</td>
                                <td>
                                    <p>4만원</p>
                                </td>
                                <td>
                                    <p>4만원</p>
                                </td>
                                <td>
                                    <p>4만원</p>
                                </td>
                                <td>
                                    <p>4만원</p>
                                </td>
                            </tr>
                            <tr>
                                <td>방수</td>
                                <td>
                                    <p>1인실 1개, 2인실 2개</p>
                                </td>
                                <td>
                                    <p>1인실 1개, 2인실 2개</p>
                                </td>
                                <td>
                                    <p>1인실 1개, 2인실 2개</p>
                                </td>
                                <td>
                                    <p>1인실 1개, 2인실 2개</p>
                                </td>
                            </tr>
                            <tr>
                                <td>입주조건</td>
                                <td>
                                    <p>여성전용, 반려동물 가능</p>
                                </td>
                                <td>
                                    <p>여성전용, 반려동물 가능</p>
                                </td>
                                <td>
                                    <p>여성전용, 반려동물 가능</p>
                                </td>
                                <td>
                                    <p>여성전용, 반려동물 가능</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Compare;
