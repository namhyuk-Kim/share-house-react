import React from "react";
import classnames from "classnames/bind";
import styles from "./_Register.module.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const cx = classnames.bind(styles);

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EMAIL: "", // 이메일
            MEMBER_NAME: "", // 회원 실명
            GENDER: "M", // 성별
            BIRTHYEAR: "", // 출생년도 4자리 ex ) 2000
            NEW_PASSWORD: "", // 비밀번호
            RE_NEW_PASSWORD: "", // 비밀번호 확인
            NATION_CODE: "", // 국가코드
            NOTICE_YN: "N", // 메일 수신동의
            NATION_ARR: [],
            hasValue: false // 현재 모든 필수정보가 입력되었는지
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.hasAllValue();
    };

    empty = str => {
        if (str.trim() === "") {
            return true;
        } else {
            return false;
        }
    };

    hasAllValue = () => {
        let NexthasValue = false;
        if (
            ((!this.empty(this.state.EMAIL),
            !this.empty(this.state.MEMBER_NAME),
            !this.empty(this.state.GENDER),
            !this.empty(this.state.BIRTHYEAR),
            !this.empty(this.state.NEW_PASSWORD),
            !this.empty(this.state.RE_NEW_PASSWORD)),
            !this.empty(this.state.NATION_CODE))
        ) {
            NexthasValue = true;
            this.setState({
                hasValue: NexthasValue
            });
        }
    };

    register = e => {
        e.preventDefault();

        if (this.empty(this.state.EMAIL)) {
            alert("이메일을 입력해 주세요.");
            return false;
        } else {
            const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규식
            if (!emailRule.test(this.state.EMAIL)) {
                alert("올바른 이메일 형식이 아닙니다.");
                return false;
            }
        }

        if (this.empty(this.state.MEMBER_NAME)) {
            alert("회원명을 입력해주세요.");
            return false;
        }

        if (this.empty(this.state.GENDER)) {
            alert("성별을 선택해주세요.");
            return false;
        }

        if (this.empty(this.state.BIRTHYEAR)) {
            alert("생년을 입력해주세요.'");
            return false;
        }

        if (this.empty(this.state.NEW_PASSWORD)) {
            alert("비밀번호를 입력해주세요.");
            return false;
        } else {
            var pattern1 = /[0-9]/;

            var pattern2 = /[a-zA-Z]/;

            var pattern3 = /[~!@#$%<>^&*]/;

            if (this.state.NEW_PASSWORD.length < 8) {
                alert("비밀번호를 8자 이상으로 입력해주십시오");
                return false;
            } else if (
                !pattern1.test(this.state.NEW_PASSWORD) ||
                !pattern2.test(this.state.NEW_PASSWORD) ||
                !pattern3.test(this.state.NEW_PASSWORD)
            ) {
                alert(
                    "비밀번호는 영문+숫자+특수기호 조합으로 구성하여야합니다."
                );
                return false;
            } else {
                var SamePass_0 = 0; //동일문자 카운트
                var SamePass_1 = 0; //연속성(+) 카운드
                var SamePass_2 = 0; //연속성(-) 카운드

                var chr_pass_0;
                var chr_pass_1;

                for (var i = 0; i < this.state.NEW_PASSWORD.length; i++) {
                    chr_pass_0 = this.state.NEW_PASSWORD.charAt(i);
                    chr_pass_1 = this.state.NEW_PASSWORD.charAt(i + 1);

                    //동일문자 카운트
                    if (chr_pass_0 === chr_pass_1) {
                        SamePass_0 = SamePass_0 + 1;
                    } // if

                    //연속성(+) 카운드
                    if (
                        chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) ===
                        1
                    ) {
                        SamePass_1 = SamePass_1 + 1;
                    } // if

                    //연속성(-) 카운드
                    if (
                        chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) ===
                        -1
                    ) {
                        SamePass_2 = SamePass_2 + 1;
                    } // if
                } // for

                if (SamePass_0 > 1) {
                    alert("동일문자를 3번 이상 사용할 수 없습니다.");
                    return false;
                } // if

                if (SamePass_1 > 1 || SamePass_2 > 1) {
                    alert(
                        "연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다."
                    );
                    return false;
                } // if
            }
        }

        if (this.empty(this.state.RE_NEW_PASSWORD)) {
            alert("비밀번호 확인을 입력해주세요.");
            return false;
        } else {
            if (this.state.NEW_PASSWORD !== this.state.RE_NEW_PASSWORD) {
                alert(
                    "입력하신 비밀번호와 재 입력하신 비밀번호가 일치하지 않습니다."
                );
                return false;
            }
        }

        if (this.empty(this.state.NATION_CODE)) {
            if (this.state.NATION_CODE === "") {
                alert("국가를 선택해주세요.");
                return false;
            }
        }

        this.props.RegisterNormal({
            EMAIL: this.state.EMAIL,
            MEMBER_NAME: this.state.MEMBER_NAME,
            GENDER: this.state.GENDER,
            BIRTHYEAR: this.state.BIRTHYEAR,
            NEW_PASSWORD: this.state.NEW_PASSWORD,
            NATION_CODE: this.state.NATION_CODE,
            NOTICE_YN: this.state.NOTICE_YN
        });
        window.location.replace("/user/registerDone");
    };

    onClick = e => {
        if (e.target.name !== "NOTICE_YN") {
            this.setState({
                [e.target.name]: e.target.value
            });
        } else {
            if (e.target.value === this.state.NOTICE_YN) {
                this.setState({
                    [e.target.name]: "N"
                });
            } else {
                this.setState({
                    [e.target.name]: e.target.value
                });
            }
        }
    };

    componentDidMount() {
        this.props.NationCodes().then(value => {
            this.setState({
                NATION_ARR: value
            });
        });
    }

    render() {
        const { NATION_ARR } = this.state;
        return (
            <div className={cx("content")}>
                <div className={cx("register")}>
                    <div className={cx("register-left")}>
                        <h1>
                            함께하는 즐거움
                            <br /> <span>‘공유’</span>와 <span>‘교류’</span>가
                            매력적인
                            <br />
                            쉐어하우스
                        </h1>
                        <p>지금 바로 가입하세요!</p>
                        <div className={cx("clear")}></div>
                    </div>
                    <div className={cx("register-right")}>
                        <div>
                            <h1>회원가입</h1>
                            <form>
                                <label className={cx("email_box")}>
                                    <input
                                        name="EMAIL"
                                        type="email"
                                        placeholder="이메일 주소 입력"
                                        className={cx("email_check")}
                                        onChange={this.handleChange}
                                    />
                                    {this.state.EMAIL !== "" && (
                                        <button>이메일 인증</button>
                                    )}
                                </label>
                                <input
                                    name="MEMBER_NAME"
                                    type="text"
                                    placeholder="이름 *"
                                    required
                                    onChange={this.handleChange}
                                />
                                <div className={cx("genders")}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="GENDER"
                                            defaultChecked
                                            value="M"
                                            onChange={this.onClick}
                                        />
                                        <div className={cx("gender-box")}>
                                            남성
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="GENDER"
                                            value="F"
                                            onChange={this.onClick}
                                        />
                                        <div className={cx("gender-box")}>
                                            여성
                                        </div>
                                    </label>
                                </div>
                                <input
                                    name="BIRTHYEAR"
                                    type="text"
                                    placeholder="출생년도(숫자4자리입력) *"
                                    required
                                    onChange={this.handleChange}
                                />
                                <select
                                    name="NATION_CODE"
                                    type="text"
                                    required
                                    onChange={this.handleChange}
                                >
                                    <option
                                        value=""
                                        data-default
                                        defaultChecked
                                    >
                                        국적을 선택해 주세요 *
                                    </option>
                                    {NATION_ARR.map(item => {
                                        return (
                                            item.code !== "0" && (
                                                <option
                                                    key={item.code}
                                                    value={item.code}
                                                    data-default
                                                    defaultChecked
                                                >
                                                    {item.name}
                                                </option>
                                            )
                                        );
                                    })}
                                </select>
                                <input
                                    name="NEW_PASSWORD"
                                    type="password"
                                    placeholder="비밀번호 입력(8자리 이상) *"
                                    required
                                    onChange={this.handleChange}
                                />
                                <input
                                    name="RE_NEW_PASSWORD"
                                    type="password"
                                    placeholder="비밀번호 확인 *"
                                    required
                                    onChange={this.handleChange}
                                />
                                <label>
                                    <input
                                        type="checkbox"
                                        name="NOTICE_YN"
                                        value="Y"
                                        onClick={this.onClick}
                                    />
                                    공실 및 신규오픈 하우스 정보가 담긴 뉴스레터
                                    수신동의
                                </label>
                                <p>
                                    회원가입을 함으로써 이용약관,개인정보 수집
                                    및 이용, 메일수신에동의하시게 됩니다.
                                </p>
                                <input
                                    type="submit"
                                    onClick={e => this.register(e)}
                                    value="회원가입"
                                />
                                <div>
                                    <span className={cx("primary_blue")}>
                                        이미 Come&Stay 회원입니다.
                                    </span>
                                    <Link to="login">로그인</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={cx("clear")}></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);
