import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Detail.module.scss";
import detail1 from "assets/images/detail1.png";
import thumb1_s from "assets/images/thumb1_s.png";
import arrow_left from "assets/images/arrow_left.png";
import event_banner from "assets/images/Event.png";
import air_conditioner_stuff_on from "assets/images/air-conditioner-stuff-on.png";
import bidet_stuff_on from "assets/images/bidet-stuff-on.png";
import bookshelf_stuff_on from "assets/images/bookshelf-stuff-on.png";
import chair_stuff_on from "assets/images/chair-stuff-on.png";
import cleaner_stuff_on from "assets/images/cleaner-stuff-on.png";
import Clothes_dryer_stuff_on from "assets/images/Clothes-dryer-stuff-on.png";
import curtain_stuff_on from "assets/images/curtain-stuff-on.png";
import desktop_stuff_on from "assets/images/desktop-stuff-on.png";
import dryer_stuff_on from "assets/images/dryer-stuff-on.png";
import internet_stuff_icon from "assets/images/internet-stuff-icon.png";
import iron_stuff_on from "assets/images/iron-stuff-on.png";
import shoe_closet_stuff_on from "assets/images/shoe-closet-stuff-on.png";
import sofa_stuff_on from "assets/images/sofa-stuff-on.png";
import stand_light_stuff_on from "assets/images/stand-light-stuff-on.png";
import table_stuff_on from "assets/images/table-stuff-on.png";
import washer_stuff_on from "assets/images/washer-stuff-on.png";
import tv_stuff_on from "assets/images/tv-stuff-on.png";
import vr_see from "assets/images/vr-see.png";
import Glass from "assets/images/Search.png";
import location_map from "assets/images/location-map.png";
import profile from "assets/images/profile.png";
import comment from "assets/images/comment.png";
import heart from "assets/images/heart.png";
import card_image from "assets/images/card-image.png";
import floor from "assets/images/floor.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";
import folder_add from "assets/images/folder_add.png";
import share from "assets/images/share.png";
import facebook_share from "assets/images/facebook_share.png";
import kakao_share from "assets/images/kakao_share.png";
import twitter_share from "assets/images/twitter_share.png";
import link_share from "assets/images/link_share.png";
import caledar from "assets/images/caledar.png";
import chat_profile from "assets/images/chat-profile.png";
import m_event from "assets/images/m-event.png";
import store24 from "assets/images/24store.png";
import Bank from "assets/images/Bank.png";
import Cafe from "assets/images/Cafe.png";
import drug from "assets/images/drug.png";
import fastfood from "assets/images/fastfood.png";
import Hospital from "assets/images/Hospital.png";
import Hot from "assets/images/Hot.png";
import Landry from "assets/images/Landry.png";
import Mart from "assets/images/Mart.png";
import Movie from "assets/images/Movie.png";
import office from "assets/images/office.png";
import police from "assets/images/police.png";
import Drugstore from "assets/images/Drugstore.png";
import Daiso from "assets/images/Daiso.png";

const cx = classnames.bind(styles);

class Detail extends React.Component {
    render() {
        return (
            <div className={cx("detail-all-wrap")}>
                <div className={cx("detail-wrap")}>
                    <div className={cx("detail-content")}>
                        <div className={cx("detail-slider")}>
                            <button className={cx("type-button")}>
                                공용공간
                            </button>
                            <button className={cx("floor-button")}>
                                전경(평면도)
                            </button>
                            <select className={cx("room-selector")}>
                                <option>방F</option>
                            </select>
                            <button className={cx("vr-see")}>
                                <img src={vr_see} alt="vr-see" />
                                VR보기
                            </button>
                            <div className={cx("detail-slider-inner")}>
                                <div className={cx("inner-item")}>
                                    <img src={detail1} alt="room" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("thumb-changer")}>
                            <div className={cx("thumb-slide-left")}>
                                <img src={arrow_left} alt="arrow_left" />
                            </div>
                            <div className={cx("thumb-slide-right")}>
                                <img src={arrow_left} alt="arrow_left" />
                            </div>
                            <div className={cx("thumb-changer-slider")}>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                                <div>
                                    <img src={thumb1_s} alt="thumb1_s" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("house-content")}>
                            <div className={cx("content-category")}>
                                <button>하우스 상세정보</button>
                                <button>방 정보</button>
                                <button>하우스 시세</button>
                                <button>운영자 소개</button>
                            </div>
                            <div className={cx("content-event-banner")}>
                                <div>
                                    <img
                                        src={event_banner}
                                        alt="event-banner"
                                    />
                                    <img
                                        src={m_event}
                                        alt="하우스 이벤트 2019년 하반기 플랜A 마지막 입주자 할인 내용: 마지막 남아있는 한자리를 3개월 이상 계약시 월세를 20% 할인!! 대상:3개월 이상계약자.(자세한 내용은 문의 바랍니다.) 기간: 2019-09-03~2019-09-30"
                                    />
                                </div>
                            </div>
                            <div className={cx("more-information")}>
                                <h1>
                                    하우스 상세정보
                                    {/* <span>
                                    (역세권 2030 공공지원 민간임대 주택
                                    상세정보)
                                </span> */}
                                </h1>
                                <div className={cx("info-detail")}>
                                    <div>
                                        <div>
                                            <span>하우스오픈일</span>
                                            <h1>2019년</h1>
                                        </div>
                                        <div>
                                            <span>지역</span>
                                            <h1>서울시 용산구</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>보증금</span>
                                            <h1>300만원~300만원</h1>
                                        </div>
                                        <div>
                                            <span>월임대료</span>
                                            <h1>21.9만원~61.9만원</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("info-detail-more")}>
                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>
                                            <span>고정관리비/광열비</span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            5만원 / 1/N
                                        </div>
                                    </div>

                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>
                                            <span>방수</span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            1인실 13개<span>|</span> 화장실6개
                                        </div>
                                    </div>

                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>
                                            <span>입주조건</span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            최소 계약기간 90일,외국인 환영,학생
                                            환영,직장인 환영
                                        </div>
                                    </div>

                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>
                                            <span>제공서비스</span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            공유공간 청소,주방세제 제공,빨래세제
                                            제공,화장지 제공,전구 등 기타 소모품
                                            교체, 방역/방충,보안/안전
                                        </div>
                                    </div>

                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>
                                            <span>전용면적</span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            5.81㎡(15) / 16.06㎡(16) /
                                            17.66㎡(17) / 21.06㎡(21) /
                                            26.52㎡(26) / 35.37㎡(35A) /
                                            35.85㎡(35B)
                                        </div>
                                    </div>

                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>
                                            <span>입주대상</span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            입주대상: 서울시 거주 또는 직장이
                                            서울인 만 39세 미만의 대학생(15%),
                                            청년(30%), 신혼부부(55%) ※ 주택 및
                                            차량 보유자, 차량 운행자는 입주
                                            불가(단, 장애인 및 생업용자동차는
                                            예외)
                                        </div>
                                    </div>

                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>
                                            <span>기타</span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            개별난방,엘리베이터,반려동물 동반
                                            입주 가능
                                        </div>
                                    </div>

                                    <div className={cx("t-row")}>
                                        <div
                                            className={cx([
                                                "t-cell",
                                                "appender"
                                            ])}
                                        >
                                            <span>제공시설</span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            <div className={cx("t-row")}>
                                                <div className={cx("t-cell")}>
                                                    공용
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={sofa_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={desktop_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={chair_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={table_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={bookshelf_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={
                                                            internet_stuff_icon
                                                        }
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={
                                                            stand_light_stuff_on
                                                        }
                                                        alt="stuff"
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx("t-row")}>
                                                <div
                                                    className={cx("t-cell")}
                                                ></div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={tv_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={
                                                            air_conditioner_stuff_on
                                                        }
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={curtain_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={iron_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={
                                                            shoe_closet_stuff_on
                                                        }
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={bidet_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={washer_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx("t-row")}>
                                                <div
                                                    className={cx("t-cell")}
                                                ></div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={dryer_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={
                                                            Clothes_dryer_stuff_on
                                                        }
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={cleaner_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>
                                            <span></span>
                                        </div>
                                        <div className={cx("t-cell")}>
                                            <div className={cx("t-row")}>
                                                <div className={cx("t-cell")}>
                                                    주방
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={sofa_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={desktop_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={chair_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={table_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={bookshelf_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={
                                                            internet_stuff_icon
                                                        }
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={
                                                            stand_light_stuff_on
                                                        }
                                                        alt="stuff"
                                                    />
                                                </div>
                                            </div>

                                            <div className={cx("t-row")}>
                                                <div
                                                    className={cx([
                                                        "t-cell",
                                                        "appender"
                                                    ])}
                                                ></div>
                                                <div
                                                    className={cx([
                                                        "t-cell",
                                                        "appender"
                                                    ])}
                                                >
                                                    <img
                                                        src={dryer_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={
                                                            Clothes_dryer_stuff_on
                                                        }
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={cleaner_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={cleaner_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={cleaner_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                                <div className={cx("t-cell")}>
                                                    <img
                                                        src={cleaner_stuff_on}
                                                        alt="stuff"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("t-row")}>
                                        <div className={cx("t-cell")}>기타</div>
                                        <div className={cx("t-cell")}>
                                            전열교환기,KT텔레캅 보안,룸별 도어락
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("room_infomation")}>
                                    <h1>
                                        방정보
                                        <span data-select={"false"}>
                                            공실만 보기
                                        </span>
                                        <span data-select={"true"}>
                                            전체방 보기
                                        </span>
                                    </h1>
                                    <div className={cx("room-info-table")}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>방이름</th>
                                                    <th>타입</th>
                                                    <th>보증금</th>
                                                    <th>월세</th>
                                                    <th>입주가능일</th>
                                                    <th>상태</th>
                                                    <th>제공시설</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Room E</td>
                                                    <td>2인실</td>
                                                    <td>100만원 ~ 150만원</td>
                                                    <td>42만원 ~ 45만원</td>
                                                    <td>즉시</td>
                                                    <td>공실</td>
                                                    <td>
                                                        <img
                                                            src={Glass}
                                                            alt="more"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>방설명</td>
                                                    <td colSpan="6">
                                                        싱글침대 2개
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>제공시설</td>
                                                    <td colSpan="6">
                                                        책상,의자,스탠드,옷장,커튼,이불,배게,싱글침대,이층침대,벙커침대,화장대,롬에어컨,선풍기,수납장
                                                    </td>
                                                </tr>
                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Room E</td>
                                                    <td>2인실</td>
                                                    <td>100만원 ~ 150만원</td>
                                                    <td>42만원 ~ 45만원</td>
                                                    <td>즉시</td>
                                                    <td>공실</td>
                                                    <td>
                                                        <img
                                                            src={Glass}
                                                            alt="more"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className={cx("dp-none")}>
                                                    <td>방설명</td>
                                                    <td colSpan="6">
                                                        싱글침대 2개
                                                    </td>
                                                </tr>
                                                <tr className={cx("dp-none")}>
                                                    <td>제공시설</td>
                                                    <td colSpan="6">
                                                        책상,의자,스탠드,옷장,커튼,이불,배게,싱글침대,이층침대,벙커침대,화장대,롬에어컨,선풍기,수납장
                                                    </td>
                                                </tr>
                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Room E</td>
                                                    <td>2인실</td>
                                                    <td>100만원 ~ 150만원</td>
                                                    <td>42만원 ~ 45만원</td>
                                                    <td>즉시</td>
                                                    <td>공실</td>
                                                    <td>
                                                        <img
                                                            src={Glass}
                                                            alt="more"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className={cx("dp-none")}>
                                                    <td>방설명</td>
                                                    <td colSpan="6">
                                                        싱글침대 2개
                                                    </td>
                                                </tr>
                                                <tr className={cx("dp-none")}>
                                                    <td>제공시설</td>
                                                    <td colSpan="6">
                                                        책상,의자,스탠드,옷장,커튼,이불,배게,싱글침대,이층침대,벙커침대,화장대,롬에어컨,선풍기,수납장
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className={cx([
                                        "room_infomation-young",
                                        "dp-none"
                                    ])}
                                >
                                    <h1>방정보</h1>
                                    <div className={cx("floor-infomation")}>
                                        <div className={cx("infomation-left")}>
                                            <div data-selected="true">
                                                Room A(12.9㎡)
                                            </div>
                                            <div>Room B(12.9㎡)</div>
                                            <div>Room C(12.9㎡)</div>
                                        </div>
                                        <div className={cx("infomation-right")}>
                                            <img src={floor} alt="floor" />
                                        </div>
                                        <div className={cx("clear")}></div>
                                    </div>
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th rowSpan="2">
                                                        전용면적
                                                        <br />
                                                        (㎡)
                                                    </th>
                                                    <th rowSpan="2">
                                                        계약면적
                                                        <br />
                                                        (㎡)
                                                    </th>
                                                    <th colspan="3">
                                                        보증금 및 월세
                                                    </th>
                                                    <th rowSpan="2">관리비</th>
                                                    <th rowSpan="2">
                                                        제공시설
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>보증금비율 30%</th>
                                                    <th>보증금비율 35%</th>
                                                    <th>보증금비율 40%</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>15.81</td>
                                                    <td>40.81</td>
                                                    <td>
                                                        4000만원
                                                        <br />
                                                        34.6만원
                                                    </td>
                                                    <td>
                                                        4000만원
                                                        <br />
                                                        34.6만원
                                                    </td>
                                                    <td>
                                                        5000만원
                                                        <br />
                                                        37만원
                                                    </td>
                                                    <td>
                                                        계약면적 평당
                                                        <br />
                                                        5000원
                                                    </td>
                                                    <td>
                                                        <img
                                                            src={Glass}
                                                            alt="더보기"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>15.81</td>
                                                    <td>40.81</td>
                                                    <td>
                                                        4000만원
                                                        <br />
                                                        34.6만원
                                                    </td>
                                                    <td>
                                                        4000만원
                                                        <br />
                                                        34.6만원
                                                    </td>
                                                    <td>
                                                        5000만원
                                                        <br />
                                                        37만원
                                                    </td>
                                                    <td>
                                                        계약면적 평당
                                                        <br />
                                                        5000원
                                                    </td>
                                                    <td>
                                                        <img
                                                            src={Glass}
                                                            alt="더보기"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>15.81</td>
                                                    <td>40.81</td>
                                                    <td>
                                                        4000만원
                                                        <br />
                                                        34.6만원
                                                    </td>
                                                    <td>
                                                        4000만원
                                                        <br />
                                                        34.6만원
                                                    </td>
                                                    <td>
                                                        5000만원
                                                        <br />
                                                        37만원
                                                    </td>
                                                    <td>
                                                        계약면적 평당
                                                        <br />
                                                        5000원
                                                    </td>
                                                    <td>
                                                        <img
                                                            src={Glass}
                                                            alt="더보기"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className={cx(["public-space", "dp-none"])}
                                >
                                    <h1>공용공간</h1>
                                    <div className={cx("space-info")}>
                                        <h1>북카페</h1>
                                        <p>
                                            조용하게 커피를 마시며 책을 읽을 수
                                            있는 공간
                                        </p>
                                        <span className={cx("target-ou")}>
                                            사용대상: 청년주택 입주자 수용
                                        </span>
                                        <span className={cx("personnel")}>
                                            인원: 최대 45명
                                        </span>
                                        <span className={cx("facility")}>
                                            시설: 2, 4, 8인용 테이블, 책장 등
                                        </span>
                                        <span className={cx("usage-time")}>
                                            사용시간: 24시간 개방
                                        </span>
                                    </div>
                                    <div className={cx("space-info")}>
                                        <h1>회의실</h1>
                                        <p>
                                            조용하게 커피를 마시며 책을 읽을 수
                                            있는 공간
                                        </p>
                                        <span className={cx("target-ou")}>
                                            사용대상: 청년주택 입주자 수용
                                        </span>
                                        <span className={cx("personnel")}>
                                            인원: 최대 45명
                                        </span>
                                        <span className={cx("facility")}>
                                            시설: 2, 4, 8인용 테이블, 책장 등
                                        </span>
                                        <span className={cx("usage-time")}>
                                            사용시간: 24시간 개방
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("house-location")}>
                                    <h1>하우스 소개</h1>
                                    <div className={cx("house-location-map")}>
                                        <img
                                            src={location_map}
                                            alt="location-map"
                                        />
                                    </div>
                                    <div className={cx("map-icons")}>
                                        <h3>맵 아이콘</h3>
                                        <div>
                                            <div className={cx("icons")}>
                                                <img
                                                    src={Hospital}
                                                    alt="map-icon"
                                                />
                                                <span>병원</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={Bank}
                                                    alt="map-icon"
                                                />
                                                <span>은행</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={Daiso}
                                                    alt="map-icon"
                                                />
                                                <span>다이소</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={Drugstore}
                                                    alt="map-icon"
                                                />
                                                <span>드럭스토어</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={fastfood}
                                                    alt="map-icon"
                                                />
                                                <span>패스트푸드</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={Cafe}
                                                    alt="map-icon"
                                                />
                                                <span>카폐베이커리</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={Landry}
                                                    alt="map-icon"
                                                />
                                                <span>세탁소</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={drug}
                                                    alt="map-icon"
                                                />
                                                <span>약국</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={Mart}
                                                    alt="map-icon"
                                                />
                                                <span>마트</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={store24}
                                                    alt="map-icon"
                                                />
                                                <span>편의점</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={Movie}
                                                    alt="map-icon"
                                                />
                                                <span>영화관</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={police}
                                                    alt="map-icon"
                                                />
                                                <span>경찰서</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img
                                                    src={office}
                                                    alt="map-icon"
                                                />
                                                <span>주민센터</span>
                                            </div>

                                            <div className={cx("icons")}>
                                                <img src={Hot} alt="map-icon" />
                                                <span>핫플레이스</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("house-location-info")}>
                                        <div className={cx("train-info")}>
                                            <div className={cx("info-items")}>
                                                <span
                                                    className={cx(
                                                        "train-number1"
                                                    )}
                                                >
                                                    1
                                                </span>
                                                외대 앞
                                            </div>
                                        </div>
                                        <div className={cx("walk-info")}>
                                            <p>창신역 6호선 도보 3분</p>
                                            <p>한성대입구역 4호선 도보 5분</p>
                                        </div>
                                        <div className={cx("house-info")}>
                                            모던한 북유럽스타일로 천장산 아래
                                            위치해 있어 산책하기 좋고, 공기가
                                            깨끗합니다.
                                            <br /> 아파트 7층으로 이문동의
                                            야경을 한 눈에 감상할 수 있습니다.
                                            한국어대학교, 경희대학교,
                                            <br /> 한국예술종합학교의 후문이
                                            만나는 곳으로, 각 대학 모두 도보
                                            5분이면 입구에 도착합니다.
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("master-info")}>
                                    <div className={cx("profile")}>
                                        <div>
                                            <img src={profile} alt="profile" />
                                        </div>
                                    </div>
                                    <div className={cx("info-content")}>
                                        <h1>팸하우스</h1>
                                        <p>
                                            <b>
                                                20개 하우스 운영중 │ 운영시작
                                                2015년
                                            </b>
                                        </p>
                                        <span>
                                            서울 및 수도권 지역의 전월세 비용
                                            증가 현상으로 인하여 수도권 대학에
                                            진학 및 취업 대상인 청년들의 삶의
                                            터전에 대한 사회적 문제가 고조되고
                                            있습니다. 그러나 대학 및 지자체에서
                                            운영하는 기숙사의 수용률은 현저하게
                                            낮게 평가되어 문제 해결에 대한
                                            근본적인 대안은 될 수 없는
                                            상태입니다. 또한, 이러한 청년들의
                                            보금자리에 관한 사회적 문제들을
                                            해결하기 위하여 정부 및 지차체에서
                                            다양한 정책을 펼치고 있으나 수도권
                                            및 주요 대학 주변에 기숙사 설립과
                                            보금자리 구축 사업은 한계가 있어
                                            보입니다. 당 회사는 이러한 문제점
                                            해결을 위한 대안으로 공유경제에
                                            입각한 주거 사업모델인 쉐어 하우스를
                                            운영함에 따라 청년들의 주거와 관련된
                                            사회적 문제들을 해결하겠습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("house-story")}>
                                    <h1>팸하우스 스토리</h1>
                                    <div className={cx("story-cards-wrap")}>
                                        <div className={cx("story-card")}>
                                            <div className={cx("card-image")}>
                                                <img
                                                    src={card_image}
                                                    alt="card"
                                                />
                                            </div>
                                            <div className={cx("card-title")}>
                                                쉐어하우스에서는 별도의 가전을
                                                살필요가 없어요.
                                            </div>
                                            <div className={cx("card-footer")}>
                                                <span>2019.01.02</span>
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
                                        <div className={cx("story-card")}>
                                            <div className={cx("card-image")}>
                                                <img
                                                    src={card_image}
                                                    alt="card"
                                                />
                                            </div>
                                            <div className={cx("card-title")}>
                                                쉐어하우스에서는 별도의 가전을
                                                살필요가 없어요.
                                            </div>
                                            <div className={cx("card-footer")}>
                                                <span>2019.01.02</span>
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
                                        <div className={cx("story-card")}>
                                            <div className={cx("card-image")}>
                                                <img
                                                    src={card_image}
                                                    alt="card"
                                                />
                                            </div>
                                            <div className={cx("card-title")}>
                                                쉐어하우스에서는 별도의 가전을
                                                살필요가 없어요.
                                            </div>
                                            <div className={cx("card-footer")}>
                                                <span>2019.01.02</span>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("fixed-info")}>
                    <div className={cx("tag-box")}>
                        <button className={cx("nomination-btn")}>추천</button>
                        <button className={cx("primary-blue-btn")}>
                            쉐어하우스
                        </button>
                        <span>아파트</span>
                    </div>
                    <h1>단비 쉐어하우스 숙대입구 4호점</h1>
                    <p className={"info-notice"}>
                        공실 확인은 아래 집주인과 상의하기를 클릭해주세요.
                    </p>
                    <form>
                        <select defaultValue="">
                            <option value="">
                                이 하우스는 현재 만실입니다.
                            </option>
                        </select>
                        <button>집주인과 상담하기</button>
                    </form>
                    <div className={cx("util-buttons")}>
                        <div>
                            <img src={star_yellow} alt="fav" />
                        </div>
                        <div>
                            <img src={folder_add} alt="folder" />
                        </div>
                        <div>
                            <img src={share} alt="share" />
                        </div>
                        <div className={cx("hover-util")}>
                            <Link to="/">
                                <img src={kakao_share} alt="kakao_share" />
                            </Link>

                            <Link to="/">
                                <img src={facebook_share} alt="kakao_share" />
                            </Link>

                            <Link to="/">
                                <img src={twitter_share} alt="kakao_share" />
                            </Link>

                            <Link to="/">
                                <img src={link_share} alt="kakao_share" />
                            </Link>
                        </div>
                        <button>
                            <img src={folder_add} alt="folder_add" />
                            비교함 (2)
                        </button>
                    </div>
                    <div className={cx("chating")}>
                        <div className={cx("chating-head")}>
                            <h1>문의하기</h1>
                            <p>전화문의 0504-777-7777</p>
                        </div>
                        <div className={cx("date-selector")}>
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
            </div>
        );
    }
}

export default Detail;
