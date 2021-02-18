import React from 'react';
import carIcon from "../../assets/img/mb_icon.png"
import classes from './CarCategory.module.css'

const CarCategory = () => {
    return (
        <ul className={classes.list}>
            <li className={classes.item}>
                <label>
                    <input name="category" type="radio" className={classes.checkbox}/>
                    <div className={classes.card}>
                        <div className={classes.title}>Станарт</div>
                        <div className={classes.subtitle}>Стоимость</div>
                        <div className={classes.price}>150 Р</div>
                        <div className={classes.imgWrapper}>
                            <img src={carIcon} alt=""/>
                        </div>
                    </div>
                </label>
            </li>
            <li className={classes.item}>
                <label>
                    <input name="category" type="radio" className={classes.checkbox}/>
                    <div className={classes.card}>
                        <div className={classes.title}>Бизнес</div>
                        <div className={classes.subtitle}>Стоимость</div>
                        <div className={classes.price}>250 Р</div>
                        <div className={classes.imgWrapper}>
                            <img src={carIcon} alt=""/>
                        </div>
                    </div>
                </label>
            </li>
            <li className={classes.item}>
                <label>
                    <input name="category" type="radio" className={classes.checkbox}/>
                    <div className={classes.card}>
                        <div className={classes.title}>Премиум</div>
                        <div className={classes.subtitle}>Стоимость</div>
                        <div className={classes.price}>350 Р</div>
                        <div className={classes.imgWrapper}>
                            <img src={carIcon} alt=""/>
                        </div>
                    </div>
                </label>
            </li>
        </ul>
    );
};

export default CarCategory;
