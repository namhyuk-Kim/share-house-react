import React from "react";
import styled, { css } from "styled-components";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./_slider.module.scss";

import SliderButton from "assets/button/slider.png";

const cx = classNames.bind(styles);

class Slider extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            status: "wait",
            min: this.props.min,
            max: this.props.max,
            start: this.props.min,
            end: this.props.max
        };

        this.wrap = React.createRef();
    }

    onMouseDown = (e, type) => {
        this.setState({ status: "move" });
    };

    onMouseMove = (e, type) => {
        e.preventDefault();
        if (this.state.status === "wait") return;

        const startMin = 15;
        const width = this.wrap.clientWidth;
        const position = e.nativeEvent.pageX - this.wrap.offsetLeft;

        // console.log(
        //     position,
        //     width,
        //     position / width,
        //     (position / width) * 100
        // );

        let per = (position / width) * 100;
        per = per < 0 ? 0 : per > 100 ? 100 : per;

        // console.log(per);

        this.setState({
            [type]: this.state.max * (per / 100)
        });

        console.log(this.state.max * (per / 100));

        // e.nativeEvent.offsetX,
        // e.nativeEvent.offsetY
    };

    onMouseUp = e => {
        this.setState({ status: "wait" });
    };

    render() {
        return (
            <div
                className={cx("slider-wrap")}
                onMouseUp={this.onMouseUp}
                ref={ref => (this.wrap = ref)}
            >
                <Start
                    onMouseDown={e => this.onMouseDown(e, "start")}
                    onMouseMove={e => this.onMouseMove(e, "start")}
                    onMouseUp={this.onMouseUp}
                    max={this.state.max}
                    now={this.state.start}
                    className={cx("start")}
                >
                    <img src={SliderButton} alt="" />
                </Start>
                <End
                    onMouseDown={e => this.onMouseDown(e, "end")}
                    onMouseMove={e => this.onMouseMove(e, "end")}
                    onMouseUp={this.onMouseUp}
                    max={this.state.max}
                    now={this.state.end}
                    className={cx("end")}
                >
                    <img src={SliderButton} alt="" />
                </End>
            </div>
        );
    }
}

const Start = styled.div`
    width: 10px;
    height: 10px;

    position: absolute;
    top: 0;
    /* left: 0; */
    ${props =>
        css`
            left: ${(props.now / props.max) * 100}%;
        `}
    transform: translateX(-50%);

    & > img {
        width: 30px;
        height: 30px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const End = styled.div`
    width: 10px;
    height: 10px;

    position: absolute;
    top: 0;
    ${props =>
        css`
            left: ${(props.now / props.max) * 100}%;
        `}
    transform: translateX(-50%);

    & > img {
        width: 30px;
        height: 30px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
};

export default Slider;
