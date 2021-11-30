import React from "react";
import {connect} from "react-redux";

export const store = (props: any) => {
    return <div></div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(store);
