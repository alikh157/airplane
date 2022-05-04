import react from 'react';
import './footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="footer-col">
                    <h4>درباره این شرکت
                        <div className="underline"><span></span></div>
                    </h4>
                    <ul>
                        <li><a href="#">یشسیس</a></li>
                        <li><a href="#">صضثضزشط</a></li>
                        <li><a href="#">الفقغفقغیزط</a></li>
                        <li><a href="#">شسصضطرظطظ شسیش</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>نشانی
                        <div className="underline"><span></span></div>
                    </h4>
                    <ul>
                        <li><a href="#">
                            تهران محله ولنجک
                            خیابان طهماسب،
                            <br/>
                            خیابان جوانگو
                            کوچه ملاحسنی
                            <br/>
                            جنب بانک صادرات
                            <br/>
                            پلاک 19 طبقه 10
                        </a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>لینک ها
                        <div className="underline"><span></span></div>
                    </h4>
                    <ul>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">پیگیری بلیط</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">تماس باما</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4> مشترک شدن
                        <div className="underline"><span></span></div>
                    </h4>
                    <div className="social-links">
                        <a href=""><FontAwesomeIcon icon={brands('instagram')}/></a>
                        <a href=""><FontAwesomeIcon icon={brands('telegram')}/></a>
                        <a href=""><FontAwesomeIcon icon={brands('twitter')}/></a>
                        <a href="#"><FontAwesomeIcon icon={brands('whatsapp')}/></a>
                    </div>
                    <form className={"newsletter"}>
                        <FontAwesomeIcon className={"far"} icon={regular('envelope')}/>
                        <input type="email" placeholder="Enter your email" required={true}/>
                        <button type={"submit"}>
                            <FontAwesomeIcon className={"fas"} icon={solid('arrow-right')}/>
                        </button>
                    </form>
                </div>
            </div>
            <div className="copy-right">
                <hr/>
                    <p style={{'textAlign':"left" ,'direction':'ltr'}}>@copy right license of alikh157 project 2022</p>
            </div>
        </footer>
    );
};
export default Footer;
