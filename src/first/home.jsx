import s from "./home.module.css";
import logo from "../assets/logo.jpg";
import diner from "../assets/diner.webp";
import shoes from "../assets/shoes.jpg";
import shirt from "../assets/shirt.jpg";
import sss from "../assets/sss.jpg";
import ring from "../assets/ring.jpg";
import proten from "../assets/proten.jpg";
import mask from "../assets/mask.jpg";

import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";

const Home=()=>{
    const [click,setClick]=useState(false);
    const handelclick=()=>setClick(!click);
    return(<>
    <nav className={s.nav} >
        <div className={s.nav_left}>
            <img src={logo} alt="" /></div>
            <div className={s.nav_center}>
            <input type="text" placeholder="Search for product"/>
            <span className={s.search}><FaSearch/></span>
            <div className={s.bars} onClick={handelclick}>
            <li className={click?"fas fa-times":"fas fa-bars"}></li>
          </div>
        </div>
        <div className={`${click?s.navmenu:s.nav_rigth}`}>
            <ul>
                <li className={`${s.list_items} ${s.active}`} id={s.active}><a href="#">Home</a></li>
                <li className={s.list_items}><a href="#">About</a></li>
                <li className={s.list_items}><a href="https://forms.visme.co/formsPlayer/n08y89g3-email-contact-form">Contact</a></li>
            </ul>
        </div>
    </nav>
    <div className={`${s.landing}`}>
        <h1 >Welcome to Shop <span>Card</span></h1>
        <p>The Leading Online shopping platform</p>
    </div>

    <hr />

    <div className={`${s.boss}`}>
        <h1 className={s.h1}>Top Product</h1>
        <div className={s.boss_body}>
        <div className={`${click?s.left_active:s.boss_left}`}>
            <div className={`${s.boss_left_catagory}`}>
                <h1>Catagory</h1>
                <div className={s.catagory_body}>
                <label>
                <input type="checkbox" />
                <span>Mens Collection</span>
            </label>
            <label>
                <input type="checkbox" />
                <span>Womens</span>
            </label>
            <label>
                <input type="checkbox" />
                <span>Kids</span>
            </label>
            <label>
                <input type="checkbox"/>
                <span>Kitchen</span>
            </label>
            </div>
            </div>
            <div className={`${s.boss_left_catagory}`}>
                <h1>Price</h1>
                <div className={s.catagory_body}>
                <label>
                <input type="radio" name="price" />
                <span>Mens Collection</span>
            </label>
            <label>
                <input type="radio" name="price" />
                <span>Womens</span>
            </label>
            <label>
                <input type="radio" name="price" />
                <span>Kids</span>
            </label>
            <label>
                <input type="radio" name="price"/>
                <span>Kitchen</span>
            </label>
            </div>
            <button className={s.catagory_button}>Reset Filter</button>
            </div>
        </div>
        <div className={s.boss_right_above}>
        <div className={`${s.boss_right}`}>
            <div className={s.boss_right_card}>
                <img src={shirt} alt="" />
                <h2 >Anime Shirt...</h2>
                <p id={s.price}>$100</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button id={s.buy}>buy now</button>
                <button id={s.add}>+card</button>
            </div>
            <div className={s.boss_right_card}>
                <img src={sss} alt="" />
                <h2>2 in 1 straightener...</h2>
                <p id={s.price}>$185</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button id={s.buy}>buy now</button>
                <button id={s.add}>+card</button>
            </div>
            <div className={s.boss_right_card}>
                <img src={ring} alt="" />
                <h2>Anime Rings...</h2>
                <p id={s.price}>$50</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button id={s.buy}>buy now</button>
                <button id={s.add}>+card</button>
            </div>
            </div>

            <div className={`${s.boss_right}`}>
            <div className={s.boss_right_card}>
                <img src={shoes} alt="" />
                <h2 >Men Shoes...</h2>
                <p id={s.price}>$150</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button id={s.buy}>buy now</button>
                <button id={s.add}>+card</button>
            </div>
            <div className={s.boss_right_card}>
                <img src={proten} alt="" />
                <h2>Proten powder...</h2>
                <p id={s.price}>$250</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button id={s.buy}>buy now</button>
                <button id={s.add}>+card</button>
            </div>
            <div className={s.boss_right_card}>
                <img src={mask} alt="" />
                <h2>Mask...</h2>
                <p id={s.price}>$85</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button id={s.buy}>buy now</button>
                <button id={s.add}>+card</button>
            </div>
            </div>
            </div>
        </div>
    </div>
    <div className={s.footer}>
    <p>&copy; {new Date().getFullYear()}Present by Shopcard.com</p>
    </div>
    </>)
}
export default Home;