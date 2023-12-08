import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav class="bien-nav">
                <div class="bien-glass"></div>
                <div class="bien-glass-edge"></div>
                <div class='header'>
                    <a class="logo-text">
                        ЯТёрочка
                    </a>
                    <button class="button-header">Точки</button>
                    <button class="button-header">Работники</button>
                    <button class="button-header">Группы товаров</button>
                    <button class="button-header">Товары</button>
                    <button class="button-header">История покупок</button>
                </div>
            </nav>
        )
    }
}

export default Header