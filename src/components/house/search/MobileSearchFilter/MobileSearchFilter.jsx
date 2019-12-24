import React from "react";
import styles from "./_MobileSearchFilter.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import InputRange from "react-input-range"; // input range 관련 패키지 받아옴
import "react-input-range/lib/css/index.css"; // input range 관련 패키지 css
import refresh from "assets/images/refesh.png";
import vr from "assets/images/list_vr.png";
import filter_vr from "assets/images/filter_vr.png";
import mobilevr from "assets/images/mobilevr.png";

const cx = classnames.bind(styles);

class MobileSearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deposit: { min: 0, max: 10 },
            monthly: { min: 0, max: 10 }
        };
    }
    render() {
        return (
            <div className={cx("filter-wrap")}>
                <div className={cx("filter-header")}>
                    <button className={cx("ham-menu")}>
                        <div className={cx("line")}></div>
                        <div className={cx("line")}></div>
                    </button>
                    <h2>검색조건 설정</h2>
                    <div>
                        <img src={refresh} alt="filter" />
                        초기화
                    </div>
                </div>
                <div className={cx("filter-body")}>
                    <div>
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
                        <div className={cx("vrhouse")}>
                            <div>
                                <img src={mobilevr} alt="vr" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className={cx("apply")}>적용하기</button>
            </div>
        );
    }
}

export default MobileSearchFilter;
