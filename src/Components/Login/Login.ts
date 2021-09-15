import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { LoginCss } from "./LoginCss";
import { User } from "../../Models/Entities/User";
import type { HTMLElementEventType } from "../../Types/Types";
import { helperFunctions } from "../../Helpers/HelperFunctions";
import { LoginViewModel } from "../../Models/ViewModels/LoginViewModel";
import { UserController } from "../../Controllers/UserController";
import { store } from "../../Store/Store";
import "jquery";


@customElement('log-in')
class Login extends LitElement {
    static styles = [LoginCss];

    @property({ attribute: false })
    user: User = new User();

    render() {
        return html`${this.views.render()}`;
    }

    get views() {

        interface My {
            render: () => TemplateResult
        }

        let my: My = { render: () => html`` }; let dis = this;

        my.render = () => {
            return html`
                <div class="center">
                    <h1>Xos Gelmisiniz</h1>
                    <p>Profile daxil olmaq ucun zehmet olmasa <br> Istifadeci adi ve parol daxil edin </p>
                    <form @submit="${this.events.onSubmit}">
                        <div class="txt_field">
                            <input type="text" required .value="${this.user.username}" name="username" data-prop="username"
                                @input="${dis.events.onInput}" />
                            <span></span>
                            <label>Istifadeci adi</label>
                        </div>
                        <div class="txt_field">
                            <input type="password" required .value="${dis.user.password}" name="password" data-prop="password"
                                @input="${dis.events.onInput}">
                            <span></span>
                            <label>Parol</label>
                        </div>
                        <div class="pass">Parolu unutmusunuz ?</div>
                
                        <input type="submit" value="Login">
                        <div class="signup_link">
                            Hesabiniz yoxdur ? <a href="sigin.html">Qeydiyyatdan kec</a>
                        </div>
                    </form>
                </div>
            `;
        };

        return my;
    }

    get events() {
        interface My {
            onSubmit?: Function;
            onInput?: Function
        }

        let my: My = {}; let dis = this;

        my.onInput = (e: HTMLElementEventType<HTMLInputElement>) => {
            let target = e.currentTarget || e.target;
            let { value, dataset } = target;

            dis.user[dataset.prop as keyof User] = value;
            dis.user = Object.assign({}, dis.user);
        };

        my.onSubmit = async (e: HTMLElementEventType<HTMLFormElement>) => {
            e.preventDefault();
            let target = e.currentTarget || e.target;

            let obj = <LoginViewModel>helperFunctions.serializedArrayToobject($(target).serializeArray());

            await store.getUserValidateResponse(obj);

            console.log({ obj });
        };

        return my;
    }

}
