import React, { createRef } from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import InputRange from "react-input-range"; // input range 관련 패키지 받아옴
import "react-input-range/lib/css/index.css"; // input range 관련 패키지 css
import styles from "./_Search.module.scss";
import filter from "assets/images/filter.png";
import refresh from "assets/images/refesh.png";
import search_icon from "assets/images/Search.png";
import folder_add from "assets/images/folder_add.png";
import room1 from "assets/images/result-room1.png";
import room2 from "assets/images/result-room2.png";
import room3 from "assets/images/result-room3.png";
import room4 from "assets/images/result-room4.png";
import room5 from "assets/images/result-room5.png";
import star from "assets/images/star_yellow.png";
import vr from "assets/images/list_vr.png";
import folder_add_w from "assets/images/folder_add_w.png";
import remove from "assets/images/Remove.png";
import filter_vr from "assets/images/filter_vr.png";
import subway from "assets/images/subway.png";
import school from "assets/images/school.png";
import house from "assets/images/house.png";
import pin from "assets/images/pin.png";
import Compare from "components/house/compare/Compare";
import Slider from "../slider/slider";

const cx = classnames.bind(styles);

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = createRef();
        this.state = {
            value: { min: 0, max: 100000000 },
            ShowFlilter: false,
            Isfocus: false
        };
    }

    filter_toggle = () => {
        // 필터버튼 눌러서 나오게함
        this.setState({
            ShowFlilter: !this.state.ShowFlilter
        });
    };

    SearchHelp = type => {
        // 포커스 들어오면 검색창 자동완성 나오게 함
        let types = type;
        this.setState({
            Isfocus: types === "Focus" ? true : false,
            ShowFlilter: types === "Focus" ? false : false
        });
    };

    ResetShow = e => {
        // 검색창에 값있으면 검색창 내용 한번에 지워주는 버튼 나오게함
        let NextValue = e.target.value;
        let reset_btn = document.getElementsByClassName(cx("search-clear"));
        if (NextValue !== "") {
            reset_btn[0].style.display = "flex";
        } else {
            reset_btn[0].style.display = "none";
        }
    };

    componentDidMount() {
        const options = {
            center: new window.kakao.maps.LatLng(37.468532, 126.887356),
            level: 3,
            position: new window.kakao.maps.LatLng(37.468532, 126.887356)
        };
        this.map = new window.kakao.maps.Map(this.mapRef, options);
    } //지도 생성 및 객체 리턴
    // ShowCompare = () => {
    // 작동안됨.. [html은 넣어주는데 변환안됨]
    //     var contents = document.getElementsByClassName(cx("search-wrap"))[0]
    //         .innerHTML;
    //     var newContents = (contents += "<Compare />");
    //     document.getElementsByClassName(
    //         cx("search-wrap")
    //     )[0].innerHTML = newContents;
    // };

    render() {
        return (
            <div className={cx("search-wrap")}>
                <div className={cx("search-bar")}>
                    <form>
                        <label className={cx("search")}>
                            <input
                                type="text"
                                placeholder="지역/지하철/대학교/하우스 명"
                                onFocus={() => this.SearchHelp("Focus")}
                                onBlur={() => this.SearchHelp("Blur")}
                                onChange={e => this.ResetShow(e)}
                                className={cx("search-input")}
                            />
                            <div>
                                <img src={search_icon} alt="filter" />
                            </div>
                            <div
                                className={cx("search-clear")}
                                onClick={e => this.reseter(e, "search-input")}
                            >
                                <img src={remove} alt="remove" />
                            </div>
                        </label>
                        <label className={cx("filter-bar")}>
                            <span className={cx("filter-tag")}>
                                <input
                                    type="text"
                                    readOnly
                                    defaultValue={"쉐어하우스"}
                                />
                                <img src={remove} alt="remove" />
                            </span>
                            <div>
                                <img src={refresh} alt="filter" />
                                초기화
                            </div>
                        </label>
                        <label
                            className={cx("filter-push")}
                            onClick={() => this.filter_toggle()}
                        >
                            <div>
                                <img src={filter} alt="filter" />
                                <span>필터</span>
                            </div>
                        </label>
                        <div className={cx("clear")}></div>
                    </form>
                </div>
                <div
                    className={cx("filter-list")}
                    data-filter_toggle={this.state.ShowFlilter}
                >
                    <div>
                        <div>
                            <div className={cx("vrhouse")}>
                                <h3>VR하우스 보기</h3>
                                <div>
                                    <img src={filter_vr} alt="vr" />
                                </div>
                            </div>
                            <div className={cx("trade-type")}>
                                <h3>거래 유형</h3>
                                <div>
                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        <div>쉐어하우스</div>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <div>원룸/투룸</div>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <div>청년주택</div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={cx("deposit")}>
                                <h3>보증금</h3>
                                <div>
                                    <Slider min={0} max={10} />
                                </div>
                                <h3>월세</h3>
                                <div>
                                    <InputRange
                                        value={this.state.value}
                                        onChange={value =>
                                            this.setState({ value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className={cx("residency")}>
                                <h3>입주조건</h3>
                                <div>
                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        <div>여성전용</div>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <div>남성전용</div>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <div>남여공통</div>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <div>신규오픈</div>
                                    </label>
                                </div>
                                <h3>추가조건</h3>
                                <div>
                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        <div>반려동물</div>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <div>보증금조절</div>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <div>외국인가능</div>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <div>즉시입주</div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={cx("search-help")}
                    data-help-toggle={this.state.Isfocus}
                >
                    <div className={cx("help-content")}>
                        <img src={subway} alt="지하철" />
                        <p>회기역</p>
                    </div>
                    <div className={cx("help-content")}>
                        <img src={school} alt="학교" />
                        <p>회기역</p>
                    </div>
                    <div className={cx("help-content")}>
                        <img src={house} alt="집" />
                        <p>회기역</p>
                    </div>
                    <div className={cx("help-content")}>
                        <img src={pin} alt="핀" />
                        <p>회기역</p>
                    </div>
                </div>
                <div className={cx("search-result")}>
                    <div
                        className={cx("search-result-left")}
                        ref={ref => (this.mapRef = ref)}
                    >
                        {/* 지도 Api 들어갈자리임 */}
                    </div>
                    <div className={cx("search-result-right")}>
                        <div className={cx("result-head")}>
                            <p>
                                검색 하우스&nbsp;&nbsp;<span>&nbsp;40</span>개
                            </p>
                            <button>
                                <img src={folder_add} alt="folder_add" />
                                비교함 (2)
                            </button>
                        </div>
                        <div className={cx("result-body")}>
                            <div className={cx("result-item")}>
                                <div className={cx("item-img")}>
                                    <img src={room1} alt="room" />
                                    <img
                                        src={star}
                                        alt="star"
                                        className={cx("star")}
                                    />
                                    <img
                                        src={vr}
                                        alt="vr"
                                        className={cx("vr")}
                                    />
                                    <div className={cx("add-compare")}>
                                        <img
                                            src={folder_add_w}
                                            alt="folder_add_w"
                                        />
                                        비교함담기
                                    </div>
                                </div>
                                <div className={cx("item-content")}>
                                    <div className={cx("types")}>
                                        <button
                                            className={cx("nomination-btn")}
                                        >
                                            추천
                                        </button>
                                        <button
                                            className={cx("primary-blue-btn")}
                                        >
                                            쉐어하우스
                                        </button>
                                        <span>아파트</span>
                                    </div>
                                    <span className={cx("item-title")}>
                                        <Link to="/house/houseid">
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
                            <div className={cx("result-item")}>
                                <div className={cx("item-img")}>
                                    <img src={room2} alt="room" />
                                    <img
                                        src={star}
                                        alt="star"
                                        className={cx("star")}
                                    />
                                    <img
                                        src={vr}
                                        alt="vr"
                                        className={cx("vr")}
                                    />
                                    <div className={cx("add-compare")}>
                                        <img
                                            src={folder_add_w}
                                            alt="folder_add_w"
                                        />
                                        비교함담기
                                    </div>
                                </div>
                                <div className={cx("item-content")}>
                                    <div className={cx("types")}>
                                        <button
                                            className={cx("nomination-btn")}
                                        >
                                            추천
                                        </button>
                                        <button
                                            className={cx("primary-blue-btn")}
                                        >
                                            쉐어하우스
                                        </button>
                                        <span>아파트</span>
                                    </div>
                                    <span className={cx("item-title")}>
                                        <Link to="/house/houseid">
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
                            <div className={cx("result-item")}>
                                <div className={cx("item-img")}>
                                    <img src={room3} alt="room" />
                                    <img
                                        src={star}
                                        alt="star"
                                        className={cx("star")}
                                    />
                                    <img
                                        src={vr}
                                        alt="vr"
                                        className={cx("vr")}
                                    />
                                    <div className={cx("add-compare")}>
                                        <img
                                            src={folder_add_w}
                                            alt="folder_add_w"
                                        />
                                        비교함담기
                                    </div>
                                </div>
                                <div className={cx("item-content")}>
                                    <div className={cx("types")}>
                                        <button
                                            className={cx("nomination-btn")}
                                        >
                                            추천
                                        </button>
                                        <button
                                            className={cx("primary-blue-btn")}
                                        >
                                            쉐어하우스
                                        </button>
                                        <span>아파트</span>
                                    </div>
                                    <span className={cx("item-title")}>
                                        <Link to="/house/houseid">
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
                            <div className={cx("result-item")}>
                                <div className={cx("item-img")}>
                                    <img src={room4} alt="room" />
                                    <img
                                        src={star}
                                        alt="star"
                                        className={cx("star")}
                                    />
                                    <img
                                        src={vr}
                                        alt="vr"
                                        className={cx("vr")}
                                    />
                                    <div className={cx("add-compare")}>
                                        <img
                                            src={folder_add_w}
                                            alt="folder_add_w"
                                        />
                                        비교함담기
                                    </div>
                                </div>
                                <div className={cx("item-content")}>
                                    <div className={cx("types")}>
                                        <button
                                            className={cx("nomination-btn")}
                                        >
                                            추천
                                        </button>
                                        <button
                                            className={cx("primary-blue-btn")}
                                        >
                                            쉐어하우스
                                        </button>
                                        <span>아파트</span>
                                    </div>
                                    <span className={cx("item-title")}>
                                        <Link to="/house/houseid">
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
                            <div className={cx("result-item")}>
                                <div className={cx("item-img")}>
                                    <img src={room5} alt="room" />
                                    <img
                                        src={star}
                                        alt="star"
                                        className={cx("star")}
                                    />
                                    <div className={cx("add-compare")}>
                                        <img
                                            src={folder_add_w}
                                            alt="folder_add_w"
                                        />
                                        비교함담기
                                    </div>
                                    <img
                                        src={vr}
                                        alt="vr"
                                        className={cx("vr")}
                                    />
                                </div>
                                <div className={cx("item-content")}>
                                    <div className={cx("types")}>
                                        <button
                                            className={cx("nomination-btn")}
                                        >
                                            추천
                                        </button>
                                        <button
                                            className={cx("primary-blue-btn")}
                                        >
                                            쉐어하우스
                                        </button>
                                        <span>아파트</span>
                                    </div>
                                    <span className={cx("item-title")}>
                                        <Link to="/house/houseid">
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
                        </div>
                    </div>
                    <div className={cx("clear'")}></div>
                </div>
                <div className={cx("clear")}></div>
            </div>
        );
    }
}

export default Search;
