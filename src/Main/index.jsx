import React from "react";
import css from "../Main/Main.module.css";
import logo from "../img/logo.svg";
import mainLogo from "../img/mainLikeLogo.svg";
import ava from "../img/ava.svg";
import place from "../img/ChoseThePlace.svg";
import location from "../img/location.svg";
import buildings from "../img/buildings.svg";
import desing from "../img/design.svg";
import house from "../img/house.svg";

import first from "../img/1.svg";
import second from "../img/2.svg";
import third from "../img/3.svg";
import fourth from "../img/4.svg";
import fifth from "../img/5.svg";
import sixs from "../img/6.svg";

import bed from "../img/bed-ico.svg";
import bath from "../img/bath-ico.svg";
import door from "../img/door-ico.svg";

import twoP from "../img/2p.svg";
import threeP from "../img/3p.svg";
import fourP from "../img/4p.svg";
import fiveP from "../img/5p.svg";
import sixP from "../img/6p.svg";

import writing1 from "../img/writing1.svg";
import writing2 from "../img/writing2.svg";
import writing3 from "../img/writing3.svg";

import footerLogo from "../img/footer-logo.svg";

import inIco from "../img/in.svg";
import facebookIco from "../img/facebook.svg";
import instaIco from "../img/insta.svg";
import twitterIco from "../img/twitter.svg";

export const MainPage = () => {
  return (
    <div>
      {/* header */}
      <section className={css.header}>
        <img src={logo} alt="logo" />
        <ul className={css.navigation}>
          <li>Listings</li>
          <li>Newsroom</li>
          <li>Contact</li>
          <li>Our team</li>
        </ul>
      </section>
      {/* main */}
      <section className={css.main}>
        <div className={css.cover}>
          <img src={mainLogo} alt="mainLogo" className={css.mainLogo} />
          <h1 className={css.mainText}>
            We're here to help you find a new home.
          </h1>
          <div className={css.arrowDown}>&#129123;</div>
        </div>
      </section>
      {/* our goal */}
      <section className={css.ourGoal}>
        <div className={css.wrapperOurG}>
          <div className={css.ourG}>
            <p className={css.orangeTx}>OUR GOAL</p>
            <h2 className={css.oGMainTx}>
              We are dedicated to finding a house that you'll love.
            </h2>
          </div>
          <div className={css.personAva}>
            <p className={css.ogSimpleTx}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              <br />
              <br />
              Interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus
              nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
              risus tristique posuere.
            </p>
            <div className={css.person}>
              <img src={ava} alt="ava" />
              <div>
                <p className={css.ogName}>Ava Orn</p>
                <span className={css.ogPost}>Managing Broker</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* how to chose */}
      <section className={css.howToChose}>
        <div className={css.topPart}>
          <p className={css.choseOrangeTx}>Our requirements</p>
          <h1 className={css.choseMainTx}>How we choose our listings.</h1>
          <p className={css.choseInfoTx}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus.
          </p>
        </div>
        <div className={css.chose}>
          <img src={place} alt="place" className={css.place} />
          <div className={css.placecards}>
            <div className={css.location}>
              <img src={location} alt="location" />
              <p>Stellar locations</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className={css.location}>
              <img src={buildings} alt="buildings" />
              <p>High quality builds</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className={css.location}>
              <img src={desing} alt="desing" />
              <p>Expert interior design</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* img */}
      <img src={house} alt="house" className={css.bigPicOfHouse} />
      {/* what we have */}
      <section className={css.whatWeHave}>
        <div className={css.whTopPart}>
          <p className={css.whorangeTx}>Current listings</p>
          <h1 className={css.whMainTx}>What we have in store for you.</h1>
          <p className={css.whInfoTx}>
            Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
            Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
            ultrices, ut faucibus orci tincidunt.
          </p>
        </div>
        <div className={css.whRenderCards}>
          <div className={css.whCard}>
            <img src={first} alt="one" />
            <span className={css.whCardSmallText}>HOUSE</span>
            <p className={css.whCarBigText}>California St.</p>
            <div className={css.whIcons}>
              <div className={css.bedIcon}>
                <img src={bed} alt="bed" />
                <span>16 beds</span>
              </div>
              <div className={css.bathIcon}>
                <img src={bath} alt="bed" />
                <span>2 bathrooms</span>
              </div>
              <div className={css.doorIcon}>
                <img src={door} alt="bed" />
                <span>11 rooms</span>
              </div>
            </div>
          </div>
          <div className={css.whCard}>
            <img src={second} alt="two" />
            <span className={css.whCardSmallText}>VILLA</span>
            <p className={css.whCarBigText}>Welford Gardens</p>
            <div className={css.whIcons}>
              <div className={css.bedIcon}>
                <img src={bed} alt="bed" />
                <span>12 beds</span>
              </div>
              <div className={css.bathIcon}>
                <img src={bath} alt="bed" />
                <span>3 bathrooms</span>
              </div>
              <div className={css.doorIcon}>
                <img src={door} alt="bed" />
                <span>16 rooms</span>
              </div>
            </div>
          </div>
          <div className={css.whCard}>
            <img src={third} alt="three" />
            <span className={css.whCardSmallText}>HOUSE</span>
            <p className={css.whCarBigText}>The Grove</p>
            <div className={css.whIcons}>
              <div className={css.bedIcon}>
                <img src={bed} alt="bed" />
                <span>12 beds</span>
              </div>
              <div className={css.bathIcon}>
                <img src={bath} alt="bed" />
                <span>2 bathrooms</span>
              </div>
              <div className={css.doorIcon}>
                <img src={door} alt="bed" />
                <span>14 rooms</span>
              </div>
            </div>
          </div>
          <div className={css.whCard}>
            <img src={fourth} alt="four" />
            <span className={css.whCardSmallText}>Apartment</span>
            <p className={css.whCarBigText}>Wallace St.</p>
            <div className={css.whIcons}>
              <div className={css.bedIcon}>
                <img src={bed} alt="bed" />
                <span>10 beds</span>
              </div>
              <div className={css.bathIcon}>
                <img src={bath} alt="bed" />
                <span>2 bathrooms</span>
              </div>
              <div className={css.doorIcon}>
                <img src={door} alt="bed" />
                <span>8 rooms</span>
              </div>
            </div>
          </div>
          <div className={css.whCard}>
            <img src={fifth} alt="five" />
            <span className={css.whCardSmallText}>Apartment</span>
            <p className={css.whCarBigText}>Dwight Way</p>
            <div className={css.whIcons}>
              <div className={css.bedIcon}>
                <img src={bed} alt="bed" />
                <span>8 beds</span>
              </div>
              <div className={css.bathIcon}>
                <img src={bath} alt="bed" />
                <span>1 bathrooms</span>
              </div>
              <div className={css.doorIcon}>
                <img src={door} alt="bed" />
                <span>6 rooms</span>
              </div>
            </div>
          </div>
          <div className={css.whCard}>
            <img src={sixs} alt="six" />
            <span className={css.whCardSmallText}>HOUSE</span>
            <p className={css.whCarBigText}>North Avenue</p>
            <div className={css.whIcons}>
              <div className={css.bedIcon}>
                <img src={bed} alt="bed" />
                <span>14 beds</span>
              </div>
              <div className={css.bathIcon}>
                <img src={bath} alt="bed" />
                <span>3 bathrooms</span>
              </div>
              <div className={css.doorIcon}>
                <img src={door} alt="bed" />
                <span>11 rooms</span>
              </div>
            </div>
          </div>
        </div>
        <a href="!#" className={css.whShowAll}>
          Show all listings
        </a>
      </section>
      {/* meet our team */}
      <section className={css.meetOurTeam}>
        <div className={css.meatOurTeamItems}>
          <div className={css.motLeftPart}>
            <p className={css.motOrangeTx}>Our people</p>
            <h2 className={css.motBigTx}>
              Meet our team of dedicated and talented agents.
            </h2>
            <p className={css.motSmallTx}>
              Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
              nisi ultrices, ut faucibus orci tincidunt.
            </p>
            <a href="!#">
              <p className={css.motArrowTx}>View our team</p>
            </a>
          </div>
          <div className={css.motRightPart}>
            <div className={css.motPerson}>
              <img src={ava} alt="1" />
              <div>
                <p className={css.ogName}>Ava Orn</p>
                <span className={css.ogPost}>Managing Broker</span>
              </div>
            </div>
            <div className={css.motPerson}>
              <img src={twoP} alt="2" />
              <div>
                <p className={css.ogName}>David Sporer</p>
                <span className={css.ogPost}>Agent</span>
              </div>
            </div>
            <div className={css.motPerson}>
              <img src={threeP} alt="3" />
              <div>
                <p className={css.ogName}>Ella Hessel</p>
                <span className={css.ogPost}>Agent</span>
              </div>
            </div>
            <div className={css.motPerson}>
              <img src={fourP} alt="4" />
              <div>
                <p className={css.ogName}>Trevor Torphy</p>
                <span className={css.ogPost}>Agent</span>
              </div>
            </div>
            <div className={css.motPerson}>
              <img src={fiveP} alt="5" />
              <div>
                <p className={css.ogName}>Daryl Gislason</p>
                <span className={css.ogPost}>REALTOR</span>
              </div>
            </div>
            <div className={css.motPerson}>
              <img src={sixP} alt="6" />
              <div>
                <p className={css.ogName}>Amanda Giovanni</p>
                <span className={css.ogPost}>REALTOR</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={css.writingFromEstate}>
        <p className={css.writingOrangeTx}>Newsroom</p>
        <h2 className={css.writingBigTx}>Writing from Estate.</h2>
        <div className={css.writingCards}>
          <div className={css.writingCard}>
            <img src={writing1} alt="1" />
            <p className={css.writingCardOrangeTx}>Press release</p>
            <p className={css.writingInfoTx}>
              Market watch: are condos still a good investment?
            </p>
            <span className={css.writingDate}>August 12, 2021</span>
          </div>
          <div className={css.writingCard}>
            <img src={writing2} alt="2" />
            <p className={css.writingCardOrangeTx}>Announcement</p>
            <p className={css.writingInfoTx}>The history of great design</p>
            <span className={css.writingDate}>August 12, 2021</span>
          </div>
          <div className={css.writingCard}>
            <img src={writing3} alt="3" />
            <p className={css.writingCardOrangeTx}>Company news</p>
            <p className={css.writingInfoTx}>
              Designers who changed everything
            </p>
            <span className={css.writingDate}>August 12, 2021</span>
          </div>
        </div>
        <a href="!#">
          <p className={css.writingArrowTx}>Newsroom</p>
        </a>
      </section>
      <section>{/* hard */}</section>
      <section className={css.getInTouch}>
        <p className={css.getInTouchQuestion}>Seen enough?</p>
        <h2 className={css.getInTouchMainTx}>Get in touch with us today.</h2>
        <p className={css.getInTouchInfoTx}>
          Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
          ut faucibus orci tincidunt.
        </p>
        <div className={css.getInTouchButtons}>
          <button>Contact</button>
          <button>See listings</button>
        </div>
      </section>
      <section className={css.footer}>
        <div className={css.footerInfo}>
          <img src={footerLogo} alt="footer-logo" className={css.footerLogo} />
          <div className={css.footerNav}>
            <div className={css.footerFirst}>
              <p className={css.footerOrangeTx}>Pages</p>
              <ul className={css.footerLi}>
                <li>Start</li>
                <li>Listings</li>
                <li>Listings alt. 2</li>
                <li>Contact</li>
                <li>Legal</li>
              </ul>
            </div>
            <div className={css.footerSecond}>
              <p className={css.footerOrangeTx}>Company</p>
              <ul className={css.footerLi}>
                <li>About</li>
                <li>Our team</li>
                <li>Newsroom</li>
              </ul>
            </div>
            <div className={css.footerThird}>
              <p className={css.footerOrangeTx}>Utility</p>
              <ul className={css.footerLi}>
                <li>Instructions</li>
                <li>Style guide</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>404</li>
              </ul>
            </div>
            <div className={css.footerFourth}>
              <p className={css.footerOrangeTx}>Newsletter</p>
              <span>
                Subscribe to our (infrequent) newsletter where we share news
                about upcoming listings and projects.
              </span>
              <input type="text" placeholder="Email" />
              <button>Submit</button>
            </div>
          </div>
          <div className={css.footerUnder}>
            <p>© Estate, LLC. All rights reserved. Powered by Webflow</p>
            <div className={css.footerIcons}>
              <a href="#!"><img src={inIco} alt="in" /></a>
              <a href="#!"><img src={facebookIco} alt="facebook" /></a>
              <a href="#!"><img src={instaIco} alt="insta" /></a>
              <a href="#!"><img src={twitterIco} alt="tw" /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
