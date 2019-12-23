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
            }
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
