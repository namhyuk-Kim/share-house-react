import React from "react";
import classnames from "classnames/bind";
import styled from "./_Inquiry.module.scss";
import room1 from "assets/images/room1.png";
import room2 from "assets/images/room2.png";
import room3 from "assets/images/room3.png";
import room4 from "assets/images/room4.png";
import room5 from "assets/images/room5.png";
import room6 from "assets/images/room6.png";
import room7 from "assets/images/room7.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";
import check from "assets/images/check.png";
import plus_icon from "assets/images/Union.png";
import stroy_image from "assets/images/stroy-image.png";
import heart from "assets/images/heart.png";
import comment from "assets/images/comment.png";

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
                                        네, 고객님 문의주셔서 감사합니다. 저희
                                        길음...
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
                                        네, 고객님 문의주셔서 감사합니다. 저희
                                        길음...
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
                                        네, 고객님 문의주셔서 감사합니다. 저희
                                        길음...
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
                                        네, 고객님 문의주셔서 감사합니다. 저희
                                        길음...
                                    </td>
                                    <td>2019.09.20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default Inquiry;
