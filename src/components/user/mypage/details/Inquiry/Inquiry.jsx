import React from "react";
import classnames from "classnames/bind";
import styled from "./_Inquiry.module.scss";
import { Link } from "react-router-dom";
import MobileInquiry from "components/user/mypage/details/MobileInquiry/MobileInquiry";

const cx = classnames.bind(styled);

class Inquiry extends React.Component {
    render() {
        return (
            <>
                <div className={cx("Inquiry")}>
                    <div>
                        <button>삭제</button>
                        <table className={cx("inquiry-list")}>
                            <thead>
                                <tr>
                                    <th width="3%">
                                        <label>
                                            <input
                                                type="checkbox"
                                                defaultValue="false"
                                            />
                                        </label>
                                    </th>
                                    <th width="13.5%">구분</th>
                                    <th width="17.5%">지점</th>
                                    <th width="60%">내용</th>
                                    <th width="7%">일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                defaultValue="false"
                                            />
                                        </label>
                                    </td>
                                    <td>쉐어하우스</td>
                                    <td>플랜A 길음성신여대점</td>
                                    <td className={cx("content")}>
                                        <Link to="/user/mypage/inquiry/detail">
                                            네, 고객님 문의주셔서 감사합니다.
                                            저희 길음...
                                        </Link>
                                    </td>
                                    <td>24분전</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                defaultValue="false"
                                            />
                                        </label>
                                    </td>
                                    <td>쉐어하우스</td>
                                    <td>플랜A 길음성신여대점</td>
                                    <td className={cx("content")}>
                                        <Link to="/user/mypage/inquiry/detail">
                                            네, 고객님 문의주셔서 감사합니다.
                                            저희 길음...
                                        </Link>
                                    </td>
                                    <td>1시간 전</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                defaultValue="false"
                                            />
                                        </label>
                                    </td>
                                    <td>쉐어하우스</td>
                                    <td>플랜A 길음성신여대점</td>
                                    <td className={cx("content")}>
                                        <Link to="/user/mypage/inquiry/detail">
                                            네, 고객님 문의주셔서 감사합니다.
                                            저희 길음...
                                        </Link>
                                    </td>
                                    <td>1일전</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                defaultValue="false"
                                            />
                                        </label>
                                    </td>
                                    <td>쉐어하우스</td>
                                    <td>플랜A 길음성신여대점</td>
                                    <td className={cx("content")}>
                                        <Link to="/user/mypage/inquiry/detail">
                                            네, 고객님 문의주셔서 감사합니다.
                                            저희 길음...
                                        </Link>
                                    </td>
                                    <td>2019.09.20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <MobileInquiry />
            </>
        );
    }
}

export default Inquiry;
