import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./_Main.module.scss";
import search from "assets/images/Search.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";
import plus_icon from "assets/images/Union.png";
import Image from "assets/images/default-image.png";

import InhabiMobile from "components/common/InhabiMobile/InhabiMobile";
import Popup from "components/common/Popup/Popup";
import Login from "components/user/Login/Login";

const cx = classnames.bind(styles);

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            nowSearchPh: "지역",
            favhouselist: [],
            favhouselist_len: "",
            viewtype: "recent",
            isModalOpen: false
        };
    }

    openModal = e => {
        if (e !== undefined && e !== null) {
            e.preventDefault();
        }
        this.setState({ isModalOpen: true });
    };

    closeModal = e => {
        this.setState({ isModalOpen: false });
    };

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
    };

    ChangeView = () => {
        const NextState = this.state;
        if (NextState["viewtype"] === "recent") {
            if (JSON.stringify(this.props.cookies) === "{}") {
                this.openModal();
                return false;
            } else {
                NextState["viewtype"] = "favhouse";
                this.setState({ NextState });
            }
        } else if (NextState["viewtype"] === "favhouse") {
            NextState["viewtype"] = "recent";
            this.setState({ NextState });
        }
    };

    MoreSee = e => {
        e.preventDefault();
        if (JSON.stringify(this.props.cookies) === "{}") {
            this.openModal();
            return false;
        } else {
            if (this.state.viewtype === "recent") {
                window.location.replace("/user/mypage");
            } else if (this.state.viewtype === "favhouse") {
                window.location.replace("/user/mypage");
            }
        }
    };

    AddFav = (e, houseid) => {
        e.preventDefault();
        if (JSON.stringify(this.props.cookies) === "{}") {
            this.openModal();
            return false;
        } else {
            this.props.AddFavHouse(houseid);
            alert(
                "관심 하우스에 담겼습니다.\n마이페이지에서 확인하실 수 있습니다."
            );
            return;
        }
    };

    Search = e => {
        e.preventDefault();
        let CountChar = document.getElementsByClassName("main-search-input")[0]
            .value.length;
        if (CountChar < 2) {
            alert(
                "두 자리 이상 검색어를 입력하셔야 합니다.\n검색어를 다시 입력해 주세요."
            );
            return false;
        }
        // 검색결과 가 나온 하우스 검색 페이지로 이동 + 값 post 방식으로 보낼거임
        window.location.href = "/search";
    };

    onImageError = e => {
        e.currentTarget.src = Image;
    };

    MoreContent = () => {
        window.location.replace("/search");
    };

    componentWillMount() {
        if (JSON.stringify(this.props.cookies) === "{}") {
            return false;
        } else {
            this.props.SeeFavHouse().then(value => {
                const NextState = this.state;
                NextState["favhouselist"] = value.houseList;
                NextState["favhouselist_len"] = value.houseList.length;
                this.setState(NextState);
            });
        }
    }

    render() {
        const { active, favhouselist, favhouselist_len } = this.state;
        const myStorage = localStorage;

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
                    {this.props.todayHouse_len !== 0 && (
                        <div className={cx("popularity")}>
                            <div className={cx("content")}>
                                <h2>Today's 인기하우스</h2>
                                <div className={cx("popularity-items")}>
                                    {this.props.todayHouseArr.map(
                                        (item, index) => {
                                            return (
                                                <div key={item["HOUSE_ID"]}>
                                                    <div>
                                                        {favhouselist_len >
                                                        0 ? (
                                                            favhouselist.some(
                                                                value => {
                                                                    if (
                                                                        value[
                                                                            "HOUSE_ID"
                                                                        ] ===
                                                                        item[
                                                                            "HOUSE_ID"
                                                                        ]
                                                                    ) {
                                                                        return true;
                                                                    } else {
                                                                        return false;
                                                                    }
                                                                }
                                                            ) ? (
                                                                <img
                                                                    src={
                                                                        star_yellow
                                                                    }
                                                                    alt={
                                                                        "star_yellow"
                                                                    }
                                                                    onClick={e =>
                                                                        this.AddFav(
                                                                            e,
                                                                            item[
                                                                                "HOUSE_ID"
                                                                            ]
                                                                        )
                                                                    }
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={
                                                                        star_gray
                                                                    }
                                                                    alt={
                                                                        "star_yellow"
                                                                    }
                                                                    onClick={e =>
                                                                        this.AddFav(
                                                                            e,
                                                                            item[
                                                                                "HOUSE_ID"
                                                                            ]
                                                                        )
                                                                    }
                                                                />
                                                            )
                                                        ) : (
                                                            <img
                                                                src={star_gray}
                                                                alt={
                                                                    "star_yellow"
                                                                }
                                                                onClick={e =>
                                                                    this.AddFav(
                                                                        e,
                                                                        item[
                                                                            "HOUSE_ID"
                                                                        ]
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                        <div
                                                            className={cx(
                                                                "image-box"
                                                            )}
                                                        >
                                                            <img
                                                                src={
                                                                    item[
                                                                        "INFO_THUMB_URL"
                                                                    ]
                                                                }
                                                                onError={
                                                                    this
                                                                        .onImageError
                                                                }
                                                                alt={"room"}
                                                            />
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                "types"
                                                            )}
                                                        >
                                                            <button>
                                                                {
                                                                    item[
                                                                        "RENT_TYPE_NAME"
                                                                    ]
                                                                }
                                                            </button>
                                                            <span>
                                                                {
                                                                    item[
                                                                        "HOUSE_TYPE_NAME"
                                                                    ]
                                                                }
                                                            </span>
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                "title"
                                                            )}
                                                        >
                                                            <Link
                                                                to={
                                                                    item[
                                                                        "HOUSE_URL"
                                                                    ]
                                                                }
                                                            >
                                                                {item[
                                                                    "BRAND_NAME"
                                                                ] +
                                                                    item[
                                                                        "HOUSE_NAME"
                                                                    ]}
                                                            </Link>
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                "location"
                                                            )}
                                                        >
                                                            <span>
                                                                {
                                                                    item[
                                                                        "ADDRESS"
                                                                    ]
                                                                }
                                                            </span>
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                "price"
                                                            )}
                                                        >
                                                            <p>
                                                                <span>
                                                                    월세&nbsp;
                                                                </span>
                                                                <span>
                                                                    {
                                                                        item[
                                                                            "RENTFEE"
                                                                        ]
                                                                    }
                                                                </span>
                                                            </p>
                                                            <p>
                                                                <span>
                                                                    보증금
                                                                </span>
                                                                <span>
                                                                    {
                                                                        item[
                                                                            "DEPOSIT"
                                                                        ]
                                                                    }
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={cx("recently-viewed")}>
                        <div className={cx("content")}>
                            <h2>
                                <span
                                    onClick={() => this.ChangeView()}
                                    className={
                                        this.state.viewtype === "recent"
                                            ? cx("seltype")
                                            : null
                                    }
                                >
                                    최근 본 하우스
                                </span>
                                &nbsp;&nbsp;&nbsp;|
                                <span
                                    onClick={() => this.ChangeView()}
                                    className={
                                        this.state.viewtype === "favhouse"
                                            ? cx("seltype")
                                            : null
                                    }
                                >
                                    &nbsp;&nbsp;&nbsp; 관심 하우스
                                </span>
                                <Link to="/" onClick={e => this.MoreSee(e)}>
                                    더보기
                                </Link>
                            </h2>
                            {this.state.viewtype === "recent" ? (
                                <div className={cx("recently-viewed-items")}>
                                    {this.props.viewdhouse_len > 0 ? (
                                        this.props.viewdhouse_arr
                                            .filter((item, index) => index < 4)
                                            .map(items => {
                                                return (
                                                    <div>
                                                        <div>
                                                            {favhouselist_len >
                                                            0 ? (
                                                                favhouselist.some(
                                                                    value => {
                                                                        if (
                                                                            value[
                                                                                "HOUSE_ID"
                                                                            ] ===
                                                                            items[
                                                                                "HOUSE_ID"
                                                                            ]
                                                                        ) {
                                                                            return true;
                                                                        } else {
                                                                            return false;
                                                                        }
                                                                    }
                                                                ) ? (
                                                                    <img
                                                                        src={
                                                                            star_yellow
                                                                        }
                                                                        alt={
                                                                            "star_yellow"
                                                                        }
                                                                        onClick={e =>
                                                                            this.AddFav(
                                                                                e,
                                                                                items[
                                                                                    "HOUSE_ID"
                                                                                ]
                                                                            )
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <img
                                                                        src={
                                                                            star_gray
                                                                        }
                                                                        alt={
                                                                            "star_yellow"
                                                                        }
                                                                        onClick={e =>
                                                                            this.AddFav(
                                                                                e,
                                                                                items[
                                                                                    "HOUSE_ID"
                                                                                ]
                                                                            )
                                                                        }
                                                                    />
                                                                )
                                                            ) : (
                                                                <img
                                                                    src={
                                                                        star_gray
                                                                    }
                                                                    alt={
                                                                        "star_yellow"
                                                                    }
                                                                    onClick={e =>
                                                                        this.AddFav(
                                                                            e,
                                                                            items[
                                                                                "HOUSE_ID"
                                                                            ]
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                            <div
                                                                className={cx(
                                                                    "image-box"
                                                                )}
                                                            >
                                                                <img
                                                                    src={
                                                                        items[
                                                                            "INFO_THUMB_URL"
                                                                        ]
                                                                    }
                                                                    alt={"room"}
                                                                />
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    "types"
                                                                )}
                                                            >
                                                                <button>
                                                                    {
                                                                        items[
                                                                            "RENT_TYPE_NAME"
                                                                        ]
                                                                    }
                                                                </button>
                                                                <span>
                                                                    {
                                                                        items[
                                                                            "HOUSE_TYPE_NAME"
                                                                        ]
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    "title"
                                                                )}
                                                            >
                                                                <Link
                                                                    to={
                                                                        items[
                                                                            "HOUSE_URL"
                                                                        ]
                                                                    }
                                                                >
                                                                    {items[
                                                                        "BRAND_NAME"
                                                                    ] +
                                                                        items[
                                                                            "HOUSE_NAME"
                                                                        ]}
                                                                </Link>
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    "location"
                                                                )}
                                                            >
                                                                <span>
                                                                    {
                                                                        items[
                                                                            "ADDRESS"
                                                                        ]
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    "price"
                                                                )}
                                                            >
                                                                <p>
                                                                    <span>
                                                                        월세
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            items[
                                                                                "RENTFEE"
                                                                            ]
                                                                        }
                                                                    </span>
                                                                </p>
                                                                <p>
                                                                    <span>
                                                                        보증금
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            items[
                                                                                "DEPOSIT"
                                                                            ]
                                                                        }
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                    ) : (
                                        <>
                                            <div
                                                className={cx("more-house")}
                                                onClick={this.MoreContent}
                                            >
                                                <div
                                                    className={cx(
                                                        "more-content"
                                                    )}
                                                >
                                                    <span>
                                                        아직 못 보신 더 많은
                                                        하우스가 있어요!
                                                    </span>
                                                    <button>
                                                        <img
                                                            src={plus_icon}
                                                            alt="plus"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div className={cx("recently-viewed-items")}>
                                    {this.state.favhouselist_len > 0 ? (
                                        this.state.favhouselist
                                            .filter((item, index) => index < 4)
                                            .map(items => {
                                                return (
                                                    <div>
                                                        <div>
                                                            <img
                                                                src={
                                                                    star_yellow
                                                                }
                                                                alt={
                                                                    "star_gray"
                                                                }
                                                            />
                                                            <div
                                                                className={cx(
                                                                    "image-box"
                                                                )}
                                                            >
                                                                <img
                                                                    src={
                                                                        items[
                                                                            "INFO_THUMB_URL"
                                                                        ]
                                                                    }
                                                                    alt={"room"}
                                                                    onError={
                                                                        this
                                                                            .onImageError
                                                                    }
                                                                />
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    "types"
                                                                )}
                                                            >
                                                                <button>
                                                                    {
                                                                        items[
                                                                            "RENT_TYPE_NAME"
                                                                        ]
                                                                    }
                                                                </button>
                                                                <span>
                                                                    {
                                                                        items[
                                                                            "HOUSE_TYPE_NAME"
                                                                        ]
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    "title"
                                                                )}
                                                            >
                                                                <Link
                                                                    to={
                                                                        items[
                                                                            "HOUSE_URL"
                                                                        ]
                                                                    }
                                                                >
                                                                    {items[
                                                                        "BRAND_NAME"
                                                                    ] +
                                                                        items[
                                                                            "HOUSE_NAME"
                                                                        ]}
                                                                </Link>
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    "location"
                                                                )}
                                                            >
                                                                <span>
                                                                    {
                                                                        items[
                                                                            "ADDRESS"
                                                                        ]
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div
                                                                className={cx(
                                                                    "price"
                                                                )}
                                                            >
                                                                <p>
                                                                    <span>
                                                                        월세
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            items[
                                                                                "RENTFEE"
                                                                            ]
                                                                        }
                                                                    </span>
                                                                </p>
                                                                <p>
                                                                    <span>
                                                                        보증금
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            items[
                                                                                "DEPOSIT"
                                                                            ]
                                                                        }
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                    ) : (
                                        <>
                                            <div className={cx("more-house")}>
                                                <div
                                                    className={cx(
                                                        "more-content"
                                                    )}
                                                >
                                                    <span>
                                                        아직 못 보신 더 많은
                                                        하우스가 있어요!
                                                    </span>
                                                    <button>
                                                        <img
                                                            src={plus_icon}
                                                            alt="plus"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
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
                    <div className={cx("inhabi-content")}>
                        <div className={cx("inhabi-contents-left")}>
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
                        <div className={cx("inhabi-contents-right")}>
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
                        </div>
                        <div className={cx("clear")}></div>
                    </div>
                    <div className={cx("clear")}></div>
                </div>
                <InhabiMobile />
                <Popup
                    closeModal={this.closeModal}
                    isModalOpen={this.state.isModalOpen}
                >
                    <Login
                        closeModal={this.closeModal}
                        isModalOpen={this.state.isModalOpen}
                    />
                </Popup>
            </div>
        );
    }
}

export default Main;
