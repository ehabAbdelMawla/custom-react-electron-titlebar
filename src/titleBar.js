import React, { Component } from "react";
import "./style.css";
import path from "path";
const { ipcRenderer } = window.require("electron");

class TitleBar extends Component {

    closeProgram = () => {
        ipcRenderer.invoke("close-event");
    };

    toggleWindowSize = () => {
        ipcRenderer.invoke("unmaximize-event");
    };
    hideWindow = () => {
        ipcRenderer.invoke("minimize-event");
    };
    render() {
        let { options } = this.props
        return ( <
            section id = "titleBar"
            style = {
                { background: options.backgroundColor }
            } >
            <
            ul style = {
                { color: options.iconsColor }
            } >
            <
            li id = "closeBtn"
            onClick = { this.closeProgram } >
            <
            i className = { options.closeIconClass } > < /i> < /
            li > <
            li onClick = { this.toggleWindowSize } >
            <
            i className = {
                options.maximizeIconClass
            } > < /i> < /
            li > <
            li onClick = { this.hideWindow } >
            <
            i className = {
                options.minimizeIconClass
            } > < /i> < /
            li > <
            /ul> <
            div > {
                options.icon && document.querySelector('link[rel="icon"]') ? ( <
                    img src = { document.querySelector('link[rel="icon"]').href }
                    draggable = "false" /
                    >
                ) : (
                    ""
                )
            }

            <
            p style = {
                { color: options.titleColor }
            } > { options.title ? options.title : "" } <
            /p> < /
            div > <
            /section>
        );
    }
}

export default TitleBar;