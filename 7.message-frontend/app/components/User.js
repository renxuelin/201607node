import React from 'react';
import {Link} from 'react-router';
export default class User extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <ul className="nav nav-tabs nav-stacked" role="tablist">
                        <li><Link to="/user/add">新增用户</Link></li>
                        <li><Link to="/user/list">用户列表</Link></li>
                    </ul>
                </div>
                <div className="col-md-8">
                    {this.props.children}
                </div>
            </div>
        )
    }
}