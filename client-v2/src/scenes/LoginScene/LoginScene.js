import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

class LoginScene extends Component {
    handleEmailChange = e => this.props.AuthStore.setUsername(e.target.value);
    handlePasswordChange = e => this.props.AuthStore.setPassword(e.target.value);
    handleSubmitForm = (e) => {
        e.preventDefault();
        const {username, password} = this.props.AuthStore.user;
        this.props.AuthStore.login({username, password})
            .then(() => {
                this.props.history.push('/admin');
            });
    };

    render() {
        return (
            <div className='row'>
                <div className='col-md-6 login-form mx-auto'>
                    <h3>Login to example react mobx</h3>
                    <form className='mt-5' onSubmit={this.handleSubmitForm}>
                        <div className='form-group'>
                            <input
                                type='text'
                                name='username'
                                className='form-control'
                                placeholder='Your Username'
                                // value={username}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                name='password'
                                className='form-control'
                                placeholder='Your Username'
                                // value={password}
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='submit'
                                className='btn btn-primary btn-block'
                                value='login'
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default inject('AuthStore')(withRouter(observer(LoginScene)))

