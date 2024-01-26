import s from "./c.module.css"
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import logo2 from "../../img/logo2.png"
import logo3 from "../../img/logo3.jpg"
import logo4 from "../../img/logo4.jpg"
import logo5 from "../../img/196dpr.jpg"
import logo6 from "../../img/logo6.jpg"
import img1 from "../../img/img1.png"
import img2 from "../../img/img2.png"


function Header() {
    return (

        <div className={s.white}>

            <div className={s.body}>

                <div className={s.box}>

                    <Link to="/">
                        <div className={s.imgBox3}>
                            <img className={s.img2} src={logo6} alt="logo" />
                            {/* <img className={s.img} src={logo4} alt="logo" /> */}

                        </div>
                    </Link>
                    <Link to="/">
                        <div className={s.imgBox3}>
                            <img className={s.img2} src={logo5} alt="logo" />
                            {/* <img className={s.img} src={logo4} alt="logo" /> */}

                        </div>
                    </Link>
                </div>
                <div className={s.links}>
                    <div className={s.imgBox2} >
                        <img className={s.img} src={img1} alt="-=" />
                    </div>
                    <Link to="/"><button className={s.btnw}>Գլխ․ էջ</button></Link>
                    <Link to="/xndir"><button className={s.btnw}>Ի՞նչն է խնդիրը</button></Link>
                    <Link to="/lucum"><button className={s.btnw}>Լուծման եղանակներ</button></Link>
                    <Link to="/audio"><button className={s.btnw}>Հարցազրույց</button></Link>
                    <div className={s.imgBox2}>
                        <img className={s.img} src={img2} alt="=-" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;