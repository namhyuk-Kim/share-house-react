import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Intro.module.scss";
import number1 from "assets/images/number01.png";
import number2 from "assets/images/number02.png";
import number3 from "assets/images/number03.png";
import number4 from "assets/images/number04.png";
import teams from "assets/images/teams.png";
import m_teams from "assets/images/img_team.png";

const cx = classnames.bind(styles);

class Intro extends React.Component {
    render() {
        return (
            <div className={cx("content")}>
                <div className={cx("intro-banner")}>
                    <div className={cx("title")}>
                        <h1>
                            당신에게 알맞은 집을 제공하기 위해
                            <br /> 연구하고 고민하는 Come & Stay 입니다.
                        </h1>
                    </div>
                </div>
                <div className={cx("advantages")}>
                    <p>
                        한국에서 잠자리에 대한 고민은
                        <br />
                        Come & Stay에 맡겨주세요.
                    </p>
                    <div className={cx("advantages-item-wrap")}>
                        <div className={cx("advantages-item")}>
                            직접 찾아가서 보고 확인한
                            <br /> 진짜 괜찮은 집만
                            <br /> 선보입니다.
                            <img src={number1} alt="number" />
                        </div>
                        <div className={cx("advantages-item")}>
                            게스트하우스와 쉐어하우
                            <br />
                            스, 원룸, 홈스테이 등 당신
                            <br />의 일정에 알맞은 방을 소개
                            <br />
                            합니다.
                            <img src={number2} alt="number" />
                        </div>
                        <div className={cx("advantages-item")}>
                            편안하고 안전한 잠자리를
                            <br /> 제공하기 위해 오늘도 좋은
                            <br /> 집을 찾고 있습니다.
                            <img src={number3} alt="number" />
                        </div>
                        <div className={cx("advantages-item")}>
                            한국에서의 행복한 추억을
                            <br /> 위해 Come & Stay는 다양
                            <br />한 정책들을 고민하고 있습
                            <br />
                            니다.
                            <img src={number4} alt="number" />
                        </div>
                    </div>
                    <p className={cx("info-text")}>
                        짧지만 긴 추억의 게스트하우스에서 마음도 함께 나누는
                        쉐어하우스,
                        <br /> 당신 만의 프라이빗 원룸, 당신의 한국 가족
                        홈스테이까지,
                        <br />
                        <span>
                            한국에서 방을 찾을 때는 언제나 Come & Stay 를
                            방문해주세요.
                        </span>
                    </p>
                </div>
                <div className={cx("teams")}>
                    <h1>The Come & Stay Team</h1>
                    <img src={teams} alt="teams" />
                    <img src={m_teams} alt="teams" />
                </div>
                <div className={cx("app_advert")}>
                    <h1>스마트폰에서도 편리한 Come & Stay App</h1>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                </div>
            </div>
        );
    }
}

export default Intro;
