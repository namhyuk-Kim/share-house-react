import React, { createRef } from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import _ from "lodash";
import InputRange from "react-input-range"; // input range 관련 패키지 받아옴
import "react-input-range/lib/css/index.css"; // input range 관련 패키지 css

import styles from "./_Search.module.scss";
import filter from "assets/images/filter.png";
import refresh from "assets/images/refesh.png";
import search_icon from "assets/images/Search.png";
import folder_add from "assets/images/folder_add.png";
import star from "assets/images/star_yellow.png";
import vr from "assets/images/list_vr.png";
import folder_add_w from "assets/images/folder_add_w.png";
import remove from "assets/images/Remove.png";
import filter_vr from "assets/images/filter_vr.png";
import category2 from "assets/images/subway.png";
import category1 from "assets/images/school.png";
import category4 from "assets/images/house.png";
import category3 from "assets/images/pin.png";

const cx = classnames.bind(styles);

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = createRef();
        this.state = {
            NORTH: 0,
            SOUTH: 0,
            EAST: 0,
            WEST: 0,
            deposit: { min: 0, max: 10 },
            monthly: { min: 0, max: 10 },
            ShowFlilter: false,
            Isfocus: false,
            NowSearchKeyword: "",
            NowSearchKeyHelper: []
        };
    }

    componentDidMount() {
        this.PullSearchHelper = _.debounce(this.PullSearchHelper, 500, {
            maxWait: 1000
        });

        const options = {
            center: new window.kakao.maps.LatLng(37.5837, 127.009393),
            level: 3,
            position: new window.kakao.maps.LatLng(37.5837, 127.009393)
        };

        this.map = new window.kakao.maps.Map(this.mapRef, options);
    } //지도 생성 및 객체 리턴

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

    onChange = e => {
        let NextState = e.target.value;

        if (!e.target.value) {
            return;
        }

        this.setState({
            NowSearchKeyword: NextState
        });

        this.PullSearchHelper();
    };

    PullSearchHelper = e => {
        this.props.SearchNomination(this.state.NowSearchKeyword).then(value => {
            this.setState({ ...this.state, NowSearchKeyHelper: value });
        });
    };

    SearchKeyword = async key => {
        let nextState = this.state;

        const array = nextState["NowSearchKeyHelper"][key];

        const juso = new window.kakao.maps.LatLng(
            array["LATITUDE"],
            array["LONGITUDE"]
        );

        this.map.setCenter(juso);

        const bounds = this.map.getBounds();

        const swLatLng = bounds.getSouthWest();

        // 영역의 북동쪽 좌표를 얻어옵니다
        const neLatLng = bounds.getNorthEast();

        // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다

        nextState["SOUTH"] = swLatLng.getLat();
        nextState["WEST"] = swLatLng.getLng();
        nextState["NORTH"] = neLatLng.getLat();
        nextState["EAST"] = neLatLng.getLng();

        this.setState(nextState);

        const { SearchList } = this.props;
        const {
            page,
            rows,
            NORTH,
            SOUTH,
            EAST,
            WEST,
            SHAREHOUSE,
            HOUSE2030,
            PREMIUM_HOUSE
        } = this.state;

        await SearchList({
            page,
            rows,
            NORTH,
            SOUTH,
            EAST,
            WEST,
            SHAREHOUSE,
            HOUSE2030,
            PREMIUM_HOUSE
        });

        const { houseLoad, houseList } = this.props;

        if (!houseLoad) {
            let marker = [];

            houseList.forEach(item => {
                if (item === null || "") return null;
                marker.push({
                    title: item["HOUSE_NAME"],
                    latlng: new window.kakao.maps.LatLng(
                        item["LATITUDE"],
                        item["LONGITUDE"]
                    )
                });
            });

            for (let item of marker) {
                new window.kakao.maps.Marker({
                    map: this.map,
                    position: item["latlng"],
                    title: item["title"]
                });
            }
        }
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

    render() {
        const { NowSearchKeyHelper } = this.state;
        return (
            <div className={cx("search-wrap")}>
                <div className={cx("search-bar")}>
                    <form onSubmit={null}>
                        <label className={cx("search")}>
                            <input
                                type="text"
                                placeholder="지역/지하철/대학교/하우스 명"
                                onFocus={() => this.SearchHelp("Focus")}
                                onBlur={() => this.SearchHelp("Blur")}
                                onChange={this.onChange}
                                className={cx("search-input")}
                            />
                            <div>
                                <button>
                                    <img src={search_icon} alt="filter" />
                                </button>
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

                        <div className={cx("deposit")}>
                            <h3>보증금</h3>
                            <div>
                                <InputRange
                                    value={this.state.deposit}
                                    onChange={deposit =>
                                        this.setState({ deposit })
                                    }
                                />
                            </div>
                            <div className={cx("range-helper")}>
                                <span>0</span>
                                <span>5천만</span>
                                <span>최대</span>
                            </div>
                            <h3>월세</h3>
                            <div>
                                <InputRange
                                    value={this.state.monthly}
                                    onChange={monthly =>
                                        this.setState({ monthly })
                                    }
                                />
                            </div>
                            <div className={cx("range-helper")}>
                                <span>0</span>
                                <span>50만원</span>
                                <span>최대</span>
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
                <div
                    className={cx("search-help")}
                    data-help-toggle={this.state.Isfocus}
                >
                    {NowSearchKeyHelper.map((item, index) => {
                        if (item["CATEGORY"] === "1") {
                            return (
                                <div
                                    className={cx("help-content")}
                                    key={index}
                                    onClick={() => this.SearchKeyword(index)}
                                >
                                    <img src={category1} alt="대학교" />
                                    <p>{item["KEYWORD"]}</p>
                                </div>
                            );
                        } else if (item["CATEGORY"] === "2") {
                            return (
                                <div
                                    className={cx("help-content")}
                                    key={index}
                                    onClick={() => this.SearchKeyword(index)}
                                >
                                    <img src={category2} alt="지하철" />
                                    <p>{item["KEYWORD"]}</p>
                                </div>
                            );
                        } else if (item["CATEGORY"] === "3") {
                            return (
                                <div
                                    className={cx("help-content")}
                                    key={index}
                                    onClick={() => this.SearchKeyword(index)}
                                >
                                    <img src={category3} alt="법정동 주소" />
                                    <p>{item["KEYWORD"]}</p>
                                </div>
                            );
                        } else if (item["CATEGORY"] === "4") {
                            return (
                                <div
                                    className={cx("help-content")}
                                    key={index}
                                    onClick={() => this.SearchKeyword(index)}
                                >
                                    <img src={category4} alt="하우스명" />
                                    <p>{item["KEYWORD"]}</p>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className={cx("search-result")}>
                    <div
                        className={cx("search-result-left")}
                        ref={ref => (this.mapRef = ref)}
                    ></div>
                    <div className={cx("search-result-right")}>
                        <div className={cx("result-head")}>
                            <p>
                                검색 하우스&nbsp;&nbsp;
                                <span>&nbsp;{this.props.totalCount}</span>개
                            </p>
                            <button>
                                <img src={folder_add} alt="folder_add" />
                                비교함 (2)
                            </button>
                        </div>
                        <div className={cx("result-body")}>
                            {!this.props.houseLoad &&
                                this.props.houseList.map((item, index) => (
                                    <div
                                        className={cx("result-item")}
                                        key={index}
                                    >
                                        <div className={cx("item-img")}>
                                            <img
                                                src={item["INFO_THUMB_URL"]}
                                                alt={item["HOUSE_NAME"]}
                                            />
                                            {item["IS_FAVORITED_YN"] ===
                                                "Y" && (
                                                <img
                                                    src={star}
                                                    alt="star"
                                                    className={cx("star")}
                                                />
                                            )}
                                            {item["VR_HOUSE_YN"] === "Y" && (
                                                <img
                                                    src={vr}
                                                    alt="vr"
                                                    className={cx("vr")}
                                                />
                                            )}
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
                                                    className={cx(
                                                        "nomination-btn"
                                                    )}
                                                >
                                                    추천
                                                </button>
                                                <button
                                                    className={cx(
                                                        "primary-blue-btn"
                                                    )}
                                                >
                                                    {item["RENT_TYPE_NAME"]}
                                                </button>
                                                <span>
                                                    {item["HOUSE_TYPE_NAME"]}
                                                </span>
                                            </div>
                                            <span className={cx("item-title")}>
                                                <Link to="/house/houseid">
                                                    {item["HOUSE_NAME"]}
                                                </Link>
                                            </span>
                                            <span
                                                className={cx("item-location")}
                                            >
                                                {item["ADDRESS"]}
                                            </span>
                                            <div className={cx("item-price")}>
                                                <p>
                                                    <span>월세</span>
                                                    <span>
                                                        {item["RENTFEE"]}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>보증금</span>
                                                    <span>
                                                        {item["DEPOSIT"]}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
