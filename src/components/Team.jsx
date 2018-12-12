import React, { Component } from "react";
import Navigation from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";
import DrJohn from "../images/drjohn.jpg";
import Sam from "../images/sam.jpg";
import Vassiliki from "../images/vassia.jpg";
import Isabella from "../images/isabellasPicture.jpg";
import Jacob from "../images/jacob.jpg";
import Daniel from "../images/DanielMbogoh.jpg";
import Popup from "./Popup.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default class Team extends Component {
  constructor() {
    super();
    this.state = {
      popup: "close"
    };
    // this.handleCloseBioPopup = this.handleCloseBioPopup.bind(this);
  }

  handleBioPopup() {
    this.setState({
      popup: "open"
    });
  }

  handleCloseBioPopup = () => {
    this.setState({
      popup: "close"
    });
    console.log("hello");
  };

  render() {
    return (
      <div>
        <div>
          <ScrollToTop />
          <Navigation />
        </div>
        <header>
          <div className="team" />
          <div className="teamQuote">
            <div className="primaryHeading">
              We believe everyone deserves a chance to learn
            </div>
          </div>
        </header>
        <section id="section-team">
          <div className="teamHeading">
            <div className="primaryHeading">Team</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={DrJohn} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">
                    Dr. John Mucoki
                  </div>
                  <div className="member__information--role">
                    Program Manager & Dean of Students
                  </div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#johnPopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="johnPopup" className="johnPopup">
                <div className="johnPopup__content">
                  <div className="johnPopup__right">
                    <a href="#section-team" className="johnPopup__close">
                      &times;
                    </a>
                    <figure className="johnPopup__right--shape">
                      <img
                        className="johnPopup__right--img"
                        src={DrJohn}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="johnPopup__left">
                  John is a Physician, humanitarian and liaison. 
                  He has great passion in uplifting the vulnerable in some of the most hard to reach and under-served communities in order for them  to get necessary skills to uplift their lives. 
                  Jijenge Academy came up as a result of the gap that John saw from high school graduates in the orphanages struggling to get college education or even jobs having no employability skills. 
                  He coordinates the program to ensure it runs smoothly, reaches out to potential local donors to support the students with basic needs, and scouts for internship opportunities as well as apprenticeship for the high school graduates.  
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={Vassiliki} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">
                    Vassiliki Daskalakis
                  </div>
                  <div className="member__information--role">CEO</div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#popup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="popup" className="popup">
                <div className="popup__content">
                  <div className="popup__right">
                    <a href="#section-team" className="popup__close">
                      &times;
                    </a>
                    <figure className="popup__right--shape">
                      <img
                        className="popup__right--img"
                        src={Vassiliki}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="popup__left">
                    My name is Vas, I'm a former JPM investment banker who moved
                    from NY to Nairobi to raise Series A rounds for startups &
                    SMEs across East Africa with I-Dev International. Jijenge
                    Academy developed organically from our work with a local
                    orphanage to stop graduated high school students
                    from returning back to the slums from which they were
                    rescued. I've been on the ground in Nairobi for the past
                    year, training students in employability and positioning
                    Jijenge as a pipeline partner to feed our candidates to high
                    growth Kenyan Tech Companies.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={Jacob} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">Jacob Reisch</div>
                  <div className="member__information--role">Board Member</div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#jakePopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="jakePopup" className="jakePopup">
                <div className="jakePopup__content">
                  <div className="jakePopup__right">
                    <a href="#section-team" className="jakePopup__close">
                      &times;
                    </a>
                    <figure className="jakePopup__right--shape">
                      <img
                        className="jakePopup__right--img"
                        src={Jacob}
                        alt="Jacob Reisch"
                      />
                    </figure>
                  </div>
                  <div className="jakePopup__left">
                    Jake Reisch is a Forbes 30 Under 30 entrepreneur and CEO of
                    Eversound, a specialized audio technology for the 75+. Jake
                    started building startups during his Junior year at Cornell
                    University when he founded Party Headphones, an audio
                    provider for the special events industry. Jake was selected
                    as a Young Global Shaper by the World Economic Forum, was
                    the 2016 SBA Young Entrepreneur of the Year for New England
                    and is a member of Cornell University’s
                    Entrepreneurship@Cornell Advisory Council.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={Isabella} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">
                    Isabella Beltran
                  </div>
                  <div className="member__information--role">
                    Software Engineer
                  </div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#isabellaPopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="isabellaPopup" className="isabellaPopup">
                <div className="isabellaPopup__content">
                  <div className="isabellaPopup__right">
                    <a href="#section-team" className="isabellaPopup__close">
                      &times;
                    </a>
                    <figure className="isabellaPopup__right--shape">
                      <img
                        className="isabellaPopup__right--img"
                        src={Isabella}
                        alt="Isabella Beltran"
                      />
                    </figure>
                  </div>
                  <div className="isabellaPopup__left">
                  I’m a full-stack software engineer helping impactful organizations reach their highest potential.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={Sam} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">Sam Langer</div>
                  <div className="member__information--role">Board Member</div>
                  {/* <div className="member__information--jijenge">Jijenge</div> */}
                </div>
              </div>
              <div className="member__bio">
                <a href="#samPopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="samPopup" className="samPopup">
                <div className="samPopup__content">
                  <div className="samPopup__right">
                    <a href="#section-team" className="samPopup__close">
                      &times;
                    </a>
                    <figure className="samPopup__right--shape">
                      <img
                        className="samPopup__right--img"
                        src={Sam}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="samPopup__left">
                    Sam Langer graduated from Cornell University with a degree
                    in Psychology and Religious studies. Sam teaches meditation
                    and is involved in organizing events in the New York area
                    based around improving well being. Sam believes in a world
                    where every human has the opportunity to live their highest
                    dream.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={Daniel} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">Daniel Mbogoh</div>
                  <div className="member__information--role">
                    Director of Communications
                  </div>
                  {/* <div className="member__information--jijenge">Jijenge</div> */}
                </div>
              </div>
              <div className="member__bio">
                <a href="#danielPopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="danielPopup" className="danielPopup">
                <div className="danielPopup__content">
                  <div className="danielPopup__right">
                    <a href="#section-team" className="danielPopup__close">
                      &times;
                    </a>
                    <figure className="danielPopup__right--shape">
                      <img
                        className="danielPopup__right--img"
                        src={Daniel}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="danielPopup__left">
                    Daniel Mbogoh is a community development professional with
                    exceptional leadership skills and 10+ years of experience in
                    implementing innovative community development programs. His
                    commitment to a career in community development work has
                    connected him to his passion—creating positive and
                    meaningful change in people's lives. Currently, he is
                    working as the programmes manager for Village Voices—a
                    community-based organization working to empower rural women
                    in Kenya.Village Voices programmes are focused on providing
                    women with the knowledge, skills, tools and resources
                    necessary to not only actively participate in, but grow to
                    lead community development projects. Daniel is also the
                    founder and director of FilmCity International, a nonprofit
                    film organization dedicated to telling the stories of
                    charitable and not-for-profit organizations, advocacy and
                    educational groups, youth and women’s projects and other
                    non-profit organizations in Kenya through film.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
