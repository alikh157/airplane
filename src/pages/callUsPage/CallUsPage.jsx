import React, {useEffect, useState, useContext} from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {Result} from "../../components/result/Result";
import './callUsPage.css'

export const CallUsPage = () => {
    return (
        <div className='page-container'>
            <Header/>
            <ul>
                <li>
                    <h2 className="callUs-title">
                        تماس باما
                    </h2>
                </li>
            </ul>
            <div className="callUs-content">
                <div className="content-box">
                    <div className="text">
                        <p className="text-title">
                            آدرس:
                        </p>
                        <p className="text-content">
                            تهران محله ولنجک
                            خیابان طهماسب،
                            خیابان جوانگو
                            کوچه ملاحسنی
                            <br/>
                            جنب بانک صادرات
                            <br/>
                            پلاک 19 طبقه 10
                        </p>

                        <p className="text-title">
                            توضیحات:
                        </p>
                        <p className="text-content">
                            مشتریان عزیز و گرامی؛
                            اگر در خصوص خرید و یا مشاهده بلیط خود
                            سوال و یا ابهامی برای شما وجود دارد میتوانید
                            با شماره گیری یکی از شماره های زیر
                            پشتیبان های ما به صورت 24 ساعته پاسخ گوی سوالات شما خواهند بود.
                            امیدواریم سفرهای خوشی را با ما تجربه کنید.
                        </p>

                        <p className="text-title">
                            تلفن های تماس:
                        </p>
                        <p className="text-content">
                            021-88554415 --- 021-88554418 --- 021-88556378
                        </p>
                    </div>
                    <div className="map">
                        <iframe width="100%" height="440" frameBorder="0" scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20638.973867634948!2d51.37440529118167!3d35.717092602092585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sbr!4v1660317541434!5m2!1sen!2sbr"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}