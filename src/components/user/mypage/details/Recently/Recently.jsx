import React from "react";
import classnames from "classnames/bind";
import styled from "./_Recently.module.scss";
import { Link } from "react-router-dom";
import room1 from "assets/images/room1.png";
import room2 from "assets/images/room2.png";
import room3 from "assets/images/room3.png";
import room4 from "assets/images/room4.png";
import star_yellow from "assets/images/star_yellow.png";
import star_gray from "assets/images/Star_gray.png";
import check from "assets/images/check.png";
import plus_icon from "assets/images/Union.png";
import Image from "assets/images/default-image.png";

const cx = classnames.bind(styled);

class Recently extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favhouselist: [],
            favhouselist_len: 0
        };
    }

    onImageError = e => {
        e.currentTarget.src = Image;
    };

    componentWillMount() {
        if (JSON.stringify(this.props.cookies) === "{}") {
            return false;
        } else {
            console.log(this.props.SeeFavHouse());
            this.props.SeeFavHouse().then(value => {
                const NextState = this.state;
                NextState["favhouselist"] = value.houseList;
                NextState["favhouselist_len"] = value.houseList.length;
                this.setState(NextState);
            });
        }
    }

    render() {
        return (
            <>
                <div className={cx("popularity")}>
                    <div className={cx("content")}>
                        {this.props.thispage === "Recently" ? (
                            <>
                                <h2>{this.state.favhouselist_len} 하우스</h2>
                                <button>삭제하기</button>
                                {/* 아래는 최근본 하우스가 존재할경우 나오는 컨탠츠들 */}
                                <div className={cx("recently-viewed-items")}>
                                    {this.props.viewdhouse_len > 0 ? (
                                        this.props.viewdhouse_arr.map(items => {
                                            return (
                                                <div>
                                                    <div>
                                                        {this.state
                                                            .favhouselist_len >
                                                        0 ? (
                                                            this.state.favhouselist.some(
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
                                                                src={star_gray}
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
                            </>
                        ) : (
                            <>
                                {/* <h2>8 하우스</h2>
                                <button>삭제하기</button> */}

                                <div className={cx("recently-viewed-items")}>
                                    {this.state.favhouselist_len > 0 ? (
                                        this.state.favhouselist.map(items => {
                                            return (
                                                <div>
                                                    <div>
                                                        <img
                                                            src={star_yellow}
                                                            alt={"star_gray"}
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
                            </>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default Recently;
