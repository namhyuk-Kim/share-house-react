import React from "react";
import styles from "./_PasswordChange.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

class PasswordChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            re_newPassword: ""
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onClick = e => {
        e.preventDefault();
        var pattern1 = /[0-9]/;

        var pattern2 = /[a-zA-Z]/;

        var pattern3 = /[~!@#$%<>^&*]/;

        if (!this.state.oldPassword) {
            alert("이전 비밀번호를 입력해주세요.");
            return false;
        } else if (!this.state.newPassword) {
            alert("새 비밀번호를 입력해주세요.");
            return false;
        } else if (!this.state.re_newPassword) {
            alert("비밀번호 재확인을 입력해주세요.");
            return false;
        } else {
            if (this.state.newPassword.length < 8) {
                alert("비밀번호를 8자 이상으로 입력해주십시오");
                return false;
            } else if (
                !pattern1.test(this.state.newPassword) ||
                !pattern2.test(this.state.newPassword) ||
                !pattern3.test(this.state.newPassword)
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

                for (var i = 0; i < this.state.newPassword.length; i++) {
                    chr_pass_0 = this.state.newPassword.charAt(i);
                    chr_pass_1 = this.state.newPassword.charAt(i + 1);

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
            this.props.passwordChange(
                this.state.oldPassword,
                this.state.re_newPassword
            );
        }
    };

    render() {
        return (
            <div className={cx("chpw-wrap")}>
                <div>
                    <h1>비밀번호 변경</h1>
                    <p>비밀번호를 변경해 주세요.</p>
                    <form>
                        <input
                            type="password"
                            placeholder="비밀번호 변경"
                            name="oldPassword"
                            onChange={e => this.onChange(e)}
                        />
                        <input
                            type="password"
                            placeholder="새 비밀번호를 입력(8자리 이상)"
                            name="newPassword"
                            onChange={e => this.onChange(e)}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호 재확인"
                            name="re_newPassword"
                            onChange={e => this.onChange(e)}
                        />
                        <button onClick={e => this.onClick(e)}>
                            비밀번호 변경
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PasswordChange;
