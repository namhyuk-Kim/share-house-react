import React from "react";
import classnames from "classnames/bind";
import styled from "./_Recently.module.scss";
import room1 from "assets/images/room1.png";
import room2 from "assets/images/room2.png";
import room3 from "assets/images/room3.png";
import room4 from "assets/images/room4.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";
import check from "assets/images/check.png";
import plus_icon from "assets/images/Union.png";

const cx = classnames.bind(styled);

class Recently extends React.Component {
    render() {
        return (
            <>
                <div className={cx("popularity")}>
                    <div className={cx("content")}>
                        <h2>8 하우스</h2>
                        <button>삭제하기</button>
                        {/* 아래는 최근본 하우스가 존재할경우 나오는 컨탠츠들 */}
                        <div className={cx("popularity-items")}>
                            <div>
                                <div>
                                    <div className={cx("check")}>
                                        <img src={check} alt="check-box" />
                                    </div>
                                    <img
                                        src={star_yellow}
                                        alt={"star_yellow"}
                                    />
                                    <div className={cx("image-box")}>
                                        <img src={room1} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>쉐어하우스</button>
                                        <span>아파트</span>
                                    </div>
                                    <div className={cx("title")}>
                                        플랜A 길음성신여대점
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
                                        <p>
                                            <span>월세&nbsp;</span>
                                            <span>38만원 ~ 55만원</span>
                                        </p>
                                        <p>
                                            <span>보증금</span>
                                            <span>150만원 ~ 150만원</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={cx("check")}>
                                        <img src={check} alt="check-box" />
                                    </div>
                                    <img src={star_gray} alt={"star_gray"} />
                                    <div className={cx("image-box")}>
                                        <img src={room2} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>청년주택</button>
                                        <span>국민임대</span>
                                    </div>
                                    <div className={cx("title")}>
                                        2019년 서울시 영구임대주택 예비입주자
                                        모집
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
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
                            <div>
                                <div>
                                    <div className={cx("check")}>
                                        <img src={check} alt="check-box" />
                                    </div>
                                    <img src={star_gray} alt={"star_gray"} />
                                    <div className={cx("image-box")}>
                                        <img src={room3} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>원룸</button>
                                    </div>
                                    <div className={cx("title")}>
                                        2019년 서울시 영구임대주택 예비입주자
                                        모집
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
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
                                {/* 아래는 만약 본 하우스가 없는경우 나오는 컨탠츠 */}
                                <div className={cx("more-house")}>
                                    <div className={cx("more-content")}>
                                        <span>
                                            아직 못 보신 더 많은 하우스가
                                            있어요!
                                        </span>
                                        <button>
                                            <img src={plus_icon} alt="plus" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("popularity")}>
                    <div className={cx("content")}>
                        <div className={cx("popularity-items")}>
                            <div>
                                <div>
                                    <div className={cx("check")}>
                                        <img src={check} alt="check-box" />
                                    </div>
                                    <img
                                        src={star_yellow}
                                        alt={"star_yellow"}
                                    />
                                    <div className={cx("image-box")}>
                                        <img src={room1} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>쉐어하우스</button>
                                        <span>아파트</span>
                                    </div>
                                    <div className={cx("title")}>
                                        플랜A 길음성신여대점
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
                                        <p>
                                            <span>월세&nbsp;</span>
                                            <span>38만원 ~ 55만원</span>
                                        </p>
                                        <p>
                                            <span>보증금</span>
                                            <span>150만원 ~ 150만원</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={cx("check")}>
                                        <img src={check} alt="check-box" />
                                    </div>
                                    <img src={star_gray} alt={"star_gray"} />
                                    <div className={cx("image-box")}>
                                        <img src={room2} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>청년주택</button>
                                        <span>국민임대</span>
                                    </div>
                                    <div className={cx("title")}>
                                        2019년 서울시 영구임대주택 예비입주자
                                        모집
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
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
                            <div>
                                <div>
                                    <div className={cx("check")}>
                                        <img src={check} alt="check-box" />
                                    </div>
                                    <img src={star_gray} alt={"star_gray"} />
                                    <div className={cx("image-box")}>
                                        <img src={room3} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>원룸</button>
                                    </div>
                                    <div className={cx("title")}>
                                        2019년 서울시 영구임대주택 예비입주자
                                        모집
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
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
                                <div>
                                    <div className={cx("check")}>
                                        <img src={check} alt="check-box" />
                                    </div>
                                    <img src={star_gray} alt={"star_gray"} />
                                    <div className={cx("image-box")}>
                                        <img src={room4} alt={"room"} />
                                    </div>
                                    <div className={cx("types")}>
                                        <button>청년주택</button>
                                        <span>국민임대</span>
                                    </div>
                                    <div className={cx("title")}>
                                        2019년 서울시 영구임대주택 예비입주자
                                        모집
                                    </div>
                                    <div className={cx("location")}>
                                        <span>
                                            성북구 길음동, 길음역 도보 5분
                                        </span>
                                    </div>
                                    <div className={cx("price")}>
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
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Recently;
