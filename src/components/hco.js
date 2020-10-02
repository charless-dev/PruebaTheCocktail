import React from "react";

export default function hoc(Component) {
    return class extends React.Component {
        constructor (props) {
            super()
            this.state = {
                color: "#da892a"
            };
        }   
        render() {
            const { color } = this.state;
            return <Component color= { color } {...this.props} />;
        }
    }
  }