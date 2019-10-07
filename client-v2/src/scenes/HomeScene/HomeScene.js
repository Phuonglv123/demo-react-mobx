import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from 'mobx';

class HomeScene extends Component {
    async componentDidMount(): void {
        await this.props.ProductStore.getCategoriesStrore();
        await this.props.ProductStore.getAllItemStore();
    }

    render() {
        const allCat = toJS(this.props.ProductStore.AllCategories);
        const item = toJS(this.props.ProductStore.AllItem);
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
