import React, { createRef } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import styled from "./_InquiryDetail.module.scss";
import chat_profile from "assets/images/chat-profile.png";
import room from "assets/images/room7.png";
import star from "assets/images/star_yellow.png";
import call from "assets/images/call.png";
const cx = classnames.bind(styled);

class InquiryDetail extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = createRef();
    }

    componentDidMount() {
        const options = {
            center: new window.kakao.maps.LatLng(37.468532, 126.887356),
            level: 3,
            position: new window.kakao.maps.LatLng(37.468532, 126.887356)
        };
        this.map = new window.kakao.maps.Map(this.mapRef, options);
    } //지도 생성 및 객체 리턴

    render() {
        return (
            <>
                <div className={cx("inquiryDetail-wrap")}>
                    <div>
                        <h1>
                            문의하기 / <span>플랜 A 길음성신 여대점</span>
                        </h1>
                    </div>
                    <div className={cx("Detail-left")}>
                        <div
                            className={cx("map")}
                            ref={ref => (this.mapRef = ref)}
                        >
                            {/* <img src={map} alt="지도" /> */}
                        </div>
                        <div className={cx("info-card")}>
                            <div className={cx("result-item")}>
                                <div className={cx("item-img")}>
                                    <img src={room} alt="room" />
                                    <img
                                        src={star}
                                        alt="star"
                                        className={cx("star")}
                                    />
                                </div>
                                <div className={cx("item-content")}>
                                    <div className={cx("types")}>
                                        <button
                                            className={cx("primary-blue-btn")}
                                        >
                                            쉐어하우스
                                        </button>
                                        <span>아파트</span>
                                    </div>
                                    <span className={cx("item-title")}>
                                        <Link to="/house/detail">
                                            마이빌리지
                                        </Link>
                                    </span>
                                    <span className={cx("item-location")}>
                                        성북구 길음동,길음역 도보5분
                                    </span>
                                    <div className={cx("item-price")}>
                                        <p>
                                            <span>월세</span>
                                            <span>38만원 ~ 55만원</span>
                                        </p>
                                        <p>
                                            <span>보증금</span>
                                            <span>150만원 ~ 150만원</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("phonecall")}>
                                <img src={call} alt="call" />
                                <p>
                                    <span className={cx("primary-blue")}>
                                        전화 문의 <b>0504-777-7777</b>
                                    </span>
                                    <br />
                                    컴앤스테이에서 제공하는 안심번호입니다.
                                </p>
                            </div>
                            <span>
                                컴앤스테이에서 보고 연락 드렸다고 말씀하시면
                                친절하게 안내 받으실 수 있습니다.
                            </span>
                        </div>
                    </div>
                    <div className={cx("Detail-right")}>
                        <div className={cx("chating")}>
                            <div className={cx("date-selector")}>
                                <span>입실</span>
                                <select>
                                    <option value="Room E (12.9 m2) | 2인실">
                                        Room E (12.9 m2) | 2인실
                                    </option>
                                </select>
                                <span>입주희망일</span>
                                <input
                                    type="date"
                                    placeholder="체크인"
                                    className={cx("start-date")}
                                />
                                {/* <img src={caledar} alt="caledar" /> 달력아이콘 */}
                                <input
                                    type="date"
                                    placeholder="체크아웃"
                                    className={cx("end-date")}
                                />
                                {/* <img src={caledar} alt="caledar" /> 달력아이콘 */}
                            </div>
                            <div className={cx("chat-body")}>
                                <div className={cx("user-chat")}>
                                    <div className={cx("chat")}>
                                        안녕하세요. 혹시 12월 20일에 입주
                                        가능한가요?
                                        <span className={cx("time-line")}>
                                            19.02.12
                                        </span>
                                    </div>

                                    <span className="clear"></span>
                                </div>
                                <div className={cx("admin-chat")}>
                                    <div className={cx("chat-profile")}>
                                        <img src={chat_profile} alt="profile" />
                                    </div>
                                    <div className={cx("chat")}>
                                        안녕하세요. 고객님 2019년 12월 20일로
                                        원하시나요?
                                        <span className={cx("time-line")}>
                                            19.02.12
                                        </span>
                                    </div>

                                    <span className="clear"></span>
                                </div>
                                <div className={cx("user-chat")}>
                                    <div className={cx("chat")}>
                                        네, 보증금을 낮출 수 있는지 궁금합니다.
                                        <span className={cx("time-line")}>
                                            19.02.12
                                        </span>
                                    </div>

                                    <span className="clear"></span>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className={cx("chat-sender")}>
                                <input
                                    type="text"
                                    placeholder="메시지를 입력하세요."
                                />
                                <div className={cx("icon")}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("clear")}></div>
                </div>
            </>
        );
    }
}

export default InquiryDetail;
