import react from 'react';
import './footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="footer-col">
                    <h4>درباره این شرکت</h4>
                    <ul>
                        <li><a href="#">یشسیس</a></li>
                        <li><a href="#">صضثضزشط</a></li>
                        <li><a href="#">الفقغفقغیزط</a></li>
                        <li><a href="#">شسصضطرظطظ شسیش</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>نشانی</h4>
                    <ul>
                        <li><a href="#">تهران</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>لینک ها</h4>
                    <ul>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">پیگیری بلیط</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">تماس باما</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>مشترک شدن</h4>
                    <div className="social-links">
                        <a href=""><FontAwesomeIcon icon={brands('instagram')}/></a>
                        <a href=""><FontAwesomeIcon icon={brands('telegram')}/></a>
                        <a href=""><FontAwesomeIcon icon={brands('twitter')}/></a>
                        <a href="#"><FontAwesomeIcon icon={brands('whatsapp')}/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
