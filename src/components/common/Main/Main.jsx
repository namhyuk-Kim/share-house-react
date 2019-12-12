import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./_Main.module.scss";
import search from "assets/images/Search.png";
import room1 from "assets/images/room1.png";
import room2 from "assets/images/room2.png";
import room3 from "assets/images/room3.png";
import room4 from "assets/images/room4.png";
import room5 from "assets/images/room5.png";
import room6 from "assets/images/room6.png";
import room7 from "assets/images/room7.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";
import plus_icon from "assets/images/Union.png";
import InhabiMobile from "components/common/InhabiMobile/InhabiMobile";

const cx = classnames.bind(styles);

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            nowSearchPh: "지역"
        };
    }

    changeActive = e => {
        let selected = e;
        this.setState({
            active: selected
        });
        if (e === 0) {
            this.setState({
                nowSearchPh: "지역"
            });
        } else if (e === 1) {
            this.setState({
                nowSearchPh: "지역/지하철역/대학교/하우스 명"
            });
        } else {
            this.setState({
                nowSearchPh: "지역/지하철역"
            });
        }
    };

    SearchHasData = e => {
        // 글자수 확인하고 1자리 이상이면 입력이 된것으로 판단하고 x 자 띄워 줄거임 입력마다 확인이니 자리수가 0 이면 숨겨줌
        let Inputdata = e.target.value;
        console.log(Inputdata);
    };

    Search = e => {
        e.preventDefault();
        let CountChar = document.getElementsByClassName("main-search-input")[0]
            .value.length;
        if (CountChar < 2) {
            alert(
                "두 자리 이상 검색어를 입력하셔야 합니다. 검색어를 다시 입력해 주세요."
            );
            return false;
        }
        // 검색결과 가 나온 하우스 검색 페이지로 이동 + 값 post 방식으로 보낼거임
        window.location.href = "/house/search";
    };

    componentDidMount() {}

    render() {
        const { active } = this.state;

        return (
            <div>
                <div className={cx("content")}></div>
                <div className={cx("main-banner")}>
                    <div className={cx("title")}>
                        <h1>
                            Where do you
                            <br />
                            want to live?
                        </h1>
                    </div>

                    <div className={cx("tab")}>
                        <div className={cx("tab-menu-wrap")}>
                            <ul>
                                <li
                                    onClick={e => this.changeActive(0)}
                                    className={cx({ active: active === 0 })}
                                >
                                    2030 청년주택
                                </li>
                                <li
                                    onClick={e => this.changeActive(1)}
                                    className={cx({ active: active === 1 })}
                                >
                                    쉐어하우스
                                </li>
                                <li
                                    onClick={e => this.changeActive(2)}
                                    className={cx({ active: active === 2 })}
                                >
                                    원룸
                                </li>
                            </ul>
                            <form>
                                <input
                                    type="text"
                                    placeholder={this.state.nowSearchPh}
                                    className={cx("main-search-input")}
                                    onChange={e => this.SearchHasData(e)}
                                />
                                <button onClick={e => this.Search(e)}>
                                    검색
                                </button>
                                <img src={search} alt={"search"} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={cx("content")}>
                    <div className={cx("popularity")}>
                        <div className={cx("content")}>
                            <h2>Today's 인기하우스</h2>
                            <div className={cx("popularity-items")}>
                                <div>
                                    <div>
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
                                            2019년 서울시 영구임대주택
                                            예비입주자 모집
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
                                        <img
                                            src={star_gray}
                                            alt={"star_gray"}
                                        />
                                        <div className={cx("image-box")}>
                                            <img src={room2} alt={"room"} />
                                        </div>
                                        <div className={cx("types")}>
                                            <button>청년주택</button>
                                            <span>국민임대</span>
                                        </div>
                                        <div className={cx("title")}>
                                            2019년 서울시 영구임대주택
                                            예비입주자 모집
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
                                        <img
                                            src={star_gray}
                                            alt={"star_gray"}
                                        />
                                        <div className={cx("image-box")}>
                                            <img src={room3} alt={"room"} />
                                        </div>
                                        <div className={cx("types")}>
                                            <button>원룸</button>
                                        </div>
                                        <div className={cx("title")}>
                                            2019년 서울시 영구임대주택
                                            예비입주자 모집
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
                                        <img
                                            src={star_gray}
                                            alt={"star_gray"}
                                        />
                                        <div className={cx("image-box")}>
                                            <img src={room4} alt={"room"} />
                                        </div>
                                        <div className={cx("types")}>
                                            <button>청년주택</button>
                                            <span>국민임대</span>
                                        </div>
                                        <div className={cx("title")}>
                                            2019년 서울시 영구임대주택
                                            예비입주자 모집
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
                    <div className={cx("recently-viewed")}>
                        <div className={cx("content")}>
                            <h2>
                                최근 본 하우스&nbsp;&nbsp;&nbsp;
                                <span>|&nbsp;&nbsp;&nbsp; 관심 하우스</span>
                                <Link to="/">더보기</Link>
                            </h2>
                            <div className={cx("recently-viewed-items")}>
                                <div>
                                    <div>
                                        <img
                                            src={star_gray}
                                            alt={"star_gray"}
                                        />
                                        <div className={cx("image-box")}>
                                            <img src={room7} alt={"room"} />
                                        </div>
                                        <div className={cx("types")}>
                                            <button>청년주택</button>
                                            <span>국민임대</span>
                                        </div>
                                        <div className={cx("title")}>
                                            2019년 서울시 영구임대주택
                                            예비입주자 모집
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
                                        <img
                                            src={star_gray}
                                            alt={"star_gray"}
                                        />
                                        <div className={cx("image-box")}>
                                            <img src={room6} alt={"room"} />
                                        </div>
                                        <div className={cx("types")}>
                                            <button>청년주택</button>
                                            <span>국민임대</span>
                                        </div>
                                        <div className={cx("title")}>
                                            2019년 서울시 영구임대주택
                                            예비입주자 모집
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
                                        <img
                                            src={star_gray}
                                            alt={"star_gray"}
                                        />
                                        <div className={cx("image-box")}>
                                            <img src={room5} alt={"room"} />
                                        </div>
                                        <div className={cx("types")}>
                                            <button>청년주택</button>
                                            <span>국민임대</span>
                                        </div>
                                        <div className={cx("title")}>
                                            2019년 서울시 영구임대주택
                                            예비입주자 모집
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
                                    <div className={cx("more-house")}>
                                        <div className={cx("more-content")}>
                                            <span>
                                                아직 못 보신 더 많은 하우스가
                                                있어요!
                                            </span>
                                            <button>
                                                <img
                                                    src={plus_icon}
                                                    alt="plus"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("event-banner")}>
                        <div className={cx("content")}>
                            <div>
                                <h3>
                                    10월 입주 대상자 할로윈 파티
                                    <br />
                                    플랜 A 이벤트
                                </h3>
                                <Link to="/">자세히 보기</Link>
                            </div>
                            <div>
                                <h3>
                                    내 냥냥이의 건강한
                                    <br />
                                    여름나기 캠페인
                                </h3>
                                <Link to="/">자세히 보기</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("inhabitation")}>
                    <div className={cx("inhabi-text")}>
                        <h1>
                            Come&Stay의
                            <br />
                            청년주거 백과
                        </h1>
                    </div>
                    <div className={cx("inhabi-grid-content")}>
                        <div className={cx("inhabi-grid")}>
                            <div>
                                <h3>
                                    서울시 청년주택
                                    <br />
                                    <span>찾아보기</span>
                                </h3>
                                <p>
                                    그게 뭐야?
                                    <br />
                                    자가용이 안된다고?
                                </p>
                            </div>
                            <div>
                                <h3>
                                    쉐어하우스
                                    <br />
                                    <span>가이드</span>
                                </h3>
                                <p>
                                    쉐어하우스에
                                    <br />
                                    관한다양한 정보를
                                    <br />
                                    알고 싶다면
                                </p>
                            </div>
                            <div>
                                <h3>
                                    쉐어하우스
                                    <br />
                                    <span>스토리</span>
                                </h3>
                                <p>
                                    쉐어하우스 반려동물
                                    <br />
                                    밍키의 쉐어라이프
                                </p>
                            </div>
                            <div>
                                <h3>
                                    청년주택
                                    <br />
                                    <span>가이드</span>
                                </h3>
                                <p>
                                    청년주택에 관한
                                    <br />
                                    자세한 정보를
                                    <br />
                                    알고 싶다면
                                </p>
                            </div>
                            <div>
                                <h3>
                                    쉐어하우스
                                    <br />
                                    <span>사는 애 이야기</span>
                                </h3>
                                <p>
                                    Vol 9. 입주시즌에
                                    <br />
                                    벌어지는 일
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx("clear")}></div>
                </div>
                <InhabiMobile />
            </div>
        );
    }
}

export default Main;
