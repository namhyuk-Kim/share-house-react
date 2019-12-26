import React from "react";
import Dashed from "assets/images/dashed.png";
import classnames from "classnames/bind";
import styles from "./_Recomment.module.scss";

const cx = classnames.bind(styles);

class Recomment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }

    AddreComment = e => {
        e.preventDefault();
        if (JSON.stringify(this.props.cookies) === "{}") {
            alert("로그인 후 댓글을 작성하여주세요.");
            return false;
        } else {
            this.props.AddreComment(
                this.state.message,
                parseInt(this.props.org_seq)
            );
            window.location.reload();
        }
    };

    onChange = e => {
        let NextState = this.state;
        NextState["message"] = e.target.value;
        this.setState(NextState);
    };

    render() {
        return (
            <div className={cx("re-comment")}>
                <div>
                    <img src={Dashed} alt="dash" />
                </div>
                <div className={cx("add-re-comment")}>
                    <form className={cx("add-comment")}>
                        <input
                            type="text"
                            placeholder={
                                JSON.stringify(this.props.cookies) === "{}"
                                    ? "댓글을 작성하려면 로그인해 주세요."
                                    : "댓글을 작성하여 주세요."
                            }
                            onChange={e => this.onChange(e)}
                        />
                        <button onClick={e => this.AddreComment(e)}>
                            등록
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Recomment;
