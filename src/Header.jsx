import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Header() {
    const navigate = useNavigate();
    return (
        <nav class="bien-nav">
            <div class="bien-glass"></div>
            <div class="bien-glass-edge"></div>
            <div class='header'>
                <a class="logo-text" href='/'>
                    ЯТёрочка
                </a>
                <Button className="button-header" id="buttons-places" onClick={() => navigate('/places')}>Точки</Button>
                <Button className="button-header" id="buttons-workers" onClick={() => navigate('/workers')}>Работники</Button>
                <Button className="button-header" id="buttons-groups" onClick={() => navigate('/groups')}>Группы товаров</Button>
                <Button className="button-header" id="buttons-goods" onClick={() => navigate('/goods')}>Товары</Button>
                <Button className="button-header" id="buttons-history" onClick={() => navigate('/history')}>История покупок</Button>
            </div>
        </nav >
    )
}

export default Header