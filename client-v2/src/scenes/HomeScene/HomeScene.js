import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from 'mobx';

class HomeScene extends Component {
    async componentDidMount(): void {
        await this.props.ProductStore.getCategoriesStrore();
    }

    render() {
        const allCat = toJS(this.props.ProductStore.AllCategories);
        return (
            <div>
                <ul>
                    {allCat.map((i, index) => (
                        <li key={index}>{i.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default inject('ProductStore')(withRouter(observer(HomeScene)))
