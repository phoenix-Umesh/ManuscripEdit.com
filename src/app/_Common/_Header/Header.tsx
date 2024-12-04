"use client";
import Link from "next/link";
import Style from "./header.module.css";
import redirect, { redirectSameTab } from "../_functionality/Redirect";
// import { useRef } from "react";
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  return (
    <>
      <div className="header_top_menu pt-2 pb-2 bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-7">
              <div className="header_top_menu_address">
                <div className="header_top_menu_address_inner">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i>+91-904-002-3003 (IN) <i className="fa fa-phone" style={{ marginLeft: "8px" }}></i>+91-923-730-4004 (IN) <i className="fa fa-phone" style={{ marginLeft: "8px" }}></i>+1
                        (646)916-3476 (USA)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="header_top_menu_icon">
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <Link href={"https://www.facebook.com/Manuscriptedit"} target="_blank">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/manuscriptedit/" target="_blank">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@manuscriptedit." target="_blank">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-1 col-sm-2">
              <Link href={'/Discount'}><button className="BtnDiscount" style={{ width: "200px", borderRadius: '6px', border: 'none', color: '#a31e22' , background:'white'}}>
                Discount & Offers
              </button> </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sticky-header"
        className="techno_nav_manu d-md-none d-lg-block d-sm-none d-none"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="menu">
              <Link href={"/"} className="logo">
                <img style={{ width: "200px" }} className="down" src="/images/ManuscriptLogo.svg" alt=""></img>{" "}
                <img style={{ width: "200px" }} className="main_sticky" src="/images/ManuscriptLogo.svg" alt=""></img>
              </Link>
              <ul className="clearfix">
                <li>
                  <a href="#">SERVICES </a>
                  <ul >
                    <li >
                      <ul>
                        <li>
                          <Link href={"/EditingOverview"}>
                            <b>English Editing</b>
                          </Link>
                          <ul className={Style.subList}>
                            <li>
                              <Link href={"/EditingOverview"}>
                                Editing Overview
                              </Link>
                            </li>
                            <li>
                              <Link href={"/ProofReading"}>Proofreading</Link>
                            </li>
                            <li>
                              <Link href={"/SubEditing"}>
                                Substantive Editing
                              </Link>
                            </li>
                            <li>
                              <Link href={"/ExtensiveSubstantiveEditing"}>
                                Extensive Substantive Editing
                              </Link>
                            </li>
                            <li>
                              <Link href={"/CopyEdit"}>Copyediting</Link>
                            </li>
                            <li>
                              <Link href={"/PlagiarismCheckReduction"}>
                                Plagiarism check and reduction
                              </Link>
                            </li>
                            <li>
                              <Link href={"/TranslationOverview"}>
                                Translation Services
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <Link href={"/PackageService"}>
                            <b>Publication Support</b>
                          </Link>
                          <ul className={Style.subList}>
                            <li>
                              <Link href={"/PackageService"}>
                                Publication Package
                              </Link>
                            </li>
                            <li>
                              <Link href={"/JournalSel"}>
                                Journal Selection
                              </Link>
                            </li>
                            <li>
                              <Link href={"/JournalSub"}>
                                Journal Submission
                              </Link>
                            </li>
                            <li>
                              <Link href={"/ResponseToReviewer"}>
                                Response to Reviewer
                              </Link>
                            </li>
                            <li>
                              <Link href={"/PeerReview"}>
                                Peer Review&nbsp;&amp;&nbsp;Pre Submission
                              </Link>
                            </li>
                            <li>
                              <Link href={"/PosterCreation"}>
                                Poster Creation &amp; Design
                              </Link>
                            </li>
                            <li>
                              <Link href={"/Formatting"}>Formatting</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <Link href={"/Writing"}>
                            <b>Scientific / Academic Writing</b>
                          </Link>
                          <ul className={Style.subList}>
                            <li>
                              <Link href={"/Writing"}>Writing Overview</Link>
                            </li>
                            <li>
                              <Link href={"/MedicalWrite"}>
                                Medical Writing
                              </Link>
                            </li>
                            <li>
                              <Link href={"/ScientificWriting"}>
                                Scientific & Academic Writing
                              </Link>
                            </li>
                            <li>
                              <Link href={"/TechnicalWriting"}>
                                Technical Writing
                              </Link>
                            </li>
                            <li>
                              <Link href={"/MedicalRewrite"}>Rewriting</Link>
                            </li>
                            <li>
                              <Link href={"/StatisticalAnalysis"}>
                                Statistical Analysis
                              </Link>
                            </li>
                            <li>
                              <Link href={"/SystematicReview"}>
                                Systematic Review
                              </Link>
                            </li>
                            <li>
                              <Link href={"/MetaAnalysis"}>Meta Analysis</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <a href="#">
                            <b>Research Support</b>
                          </a>


                          <ul className={Style.subList}>
                            <li>
                              <Link href={"/ResearchSupportOverview"}>
                                Research Support Overview
                              </Link>
                            </li>
                            <li>
                              <Link href={"/EarlyStageResearchers"}>
                                Early Stage Researchers
                              </Link>
                            </li>
                            <li>
                              <Link href={"/MidCareerResearchers"}>
                                Mid-Career Researchers
                              </Link>
                            </li>
                            <li>
                              <Link href={"/FullyExperiencedResearchers"}>
                                Fully Experienced Researchers
                              </Link>
                            </li>
                            <li>
                              <Link href={"/ResearchEnhancementServices"}>
                                Research Enhancement Services
                              </Link>
                            </li>
                            <li>
                              <Link href={"/CitationBooster"}>
                                Citation Booster
                              </Link>
                            </li>
                            <li>
                              <Link href={"/MedicalDesign"}>
                                Illustration Services
                              </Link>
                            </li>
                            <li>
                              <Link href={"/PHDThesis"}>Phd Thesis</Link>
                            </li>
                            <li>
                              <Link href={"/MasterThesis"}>Master Thesis</Link>
                            </li>
                            <li>
                              <Link href={"/CustomizedServices"}>
                                Customized Services
                              </Link>
                            </li>
                            {/* <li>
                              <a
                                onClick={() => {
                                  redirectSameTab("corporate");
                                }}
                                href="#"
                              >
                                Corporate Services
                              </a>
                            </li> */}
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={"/"}>QUALITY</Link>
                  <ul>
                    <li>
                      <Link href={"/QualityDelivery"}>Quality & Delivery</Link>
                    </li>
                    <li>
                      <Link href={"https://secure.manuscriptedit.com/samplework"}>Request a Sample Editing</Link>
                    </li>
                    <li>
                      <Link href={"/FAQ"}>FAQs</Link>
                    </li>
                    <li>
                      <Link href={"/Process"}>How We Work</Link>
                    </li>
                    <li>
                      <Link href={"/QualityAssurance"}>Service Guarantee</Link>
                    </li>
                    <li>
                      <Link href={"/Process"}>Editorial Process</Link>
                    </li>
                    <li>
                      <Link href={"/Security"}>Confidentiality</Link>
                    </li>
                    <li>
                      <Link href={"/Testimonial"}>Testimonial</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    onClick={() => {
                      redirect("register");
                    }}
                    href="#"
                  >
                    SUBMIT MANUSCRIPT
                  </a>
                  <ul>
                    {/* <li><Link href={'/QualityDelivery'}>Submit Manuscript</Link></li> */}
                    <li>
                      <a
                        onClick={() => {
                          redirect("register");
                        }}
                        href="#"
                      >
                        Submit Manuscript
                      </a>
                    </li>
                    <li>
                      <Link href={"/Prices"}>Price Calculator</Link>
                    </li>
                    {/* <li><Link href={'/FAQ'}>Quotation</Link></li> */}
                    <li>
                      <Link href={"https://www.secure.manuscriptedit.com/quotation"}>
                        Quotation
                      </Link>
                    </li>
                    <li>
                      <Link href={"/PaymentMethod"}>Payment Method</Link>
                    </li>
                    <li>
                      <Link href={"/Discount"}>Discount & Offers</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">EDITOR</a>
                  <ul>
                    <li>
                      <Link href={"/EditorialPanel"}>Editor Profile</Link>
                    </li>
                    {/* <li>
                      <a
                        onClick={() => {
                          redirect("editorial-panel");
                        }}
                        href="#"
                      >
                        Editor Profile
                      </a>
                    </li> */}

                    <li>
                      <Link href={"/EditPanel"}>Editor Panel</Link>
                    </li>
                    {/* <li><Link href={'/FAQ'}>New Editor</Link></li> */}
                    <li>
                      <a
                        onClick={() => {
                          redirect("register1");
                        }}
                        href="#"
                      >
                        New Editor
                      </a>
                    </li>

                    {/* <li><Link href={'/Process'}>Editor Login</Link></li> */}
                    <li>
                      <a
                        onClick={() => {
                          redirect("logineditor");
                        }}
                        href="#"
                      >
                        Editor Login
                      </a>
                    </li>
                    <li>
                      <Link href={"/Career"}>Careers</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">MORE</a>
                  <ul>
                    <li>
                      <Link href={"/About"}>About Us</Link>
                    </li>
                    <li><Link href={'/ClientList'}>Client List</Link></li>
                    {/* <li>
                      <a
                        onClick={() => {
                          redirect("client-list");
                        }}
                        href="#"
                      >
                        Client List
                      </a>
                    </li> */}
                    <li><Link href={'/PartnerRecent'}>Recent Partners</Link></li>
                    {/* <li>
                      <a
                        onClick={() => {
                          redirect("partner-recent");
                        }}
                        href="#"
                      >
                        Recent Partners
                      </a>
                    </li> */}

                    <li><Link href={'/ContactUs'}>Contact us</Link></li>
                    {/* <li>
                      <a
                        onClick={() => {
                          redirect("contact-us");
                        }}
                        href="#"
                      >
                        Contact us
                      </a>
                    </li> */}
                    <li><Link href={'/NewsPromotions'}>News & Conferences</Link></li>
                    {/* <li>
                      <a
                        onClick={() => {
                          redirect("news-promotions");
                        }}
                        href="#"
                      >
                        News & Conferences
                      </a>
                    </li> */}

                    {/* <li><Link href={'/Process'}>Referral Partner Program</Link></li> */}
                    <li>
                      <a
                        onClick={() => {
                          redirect("register");
                        }}
                        href="#"
                      >
                        Referral Partner Program
                      </a>
                    </li>

                    <li><Link href={'/GlobalPartner2'}>Global Partner Program</Link></li>
                    {/* <li>
                      <a
                        onClick={() => {
                          redirect("partner");
                        }}
                        href="#"
                      >
                        Global Partner Program
                      </a>
                    </li> */}

                    {/* <li><Link href={'/Testimonial'}>Webinar Registration</Link></li> */}
                    {/* <li>
                      <a
                        onClick={() => {
                          redirect("wregistration");
                        }}
                        href="#"
                      >
                        Webinar Registration
                      </a>
                    </li> */}

                    <li>
                      <Link href={"https://secure.manuscriptedit.com/wregistration"}>
                        Webinar Registration
                      </Link>
                    </li>


                    <li><Link href={'https://scholar-hangout.manuscriptedit.com'}>Scholar Hangout</Link></li>
                    {/* <li>
                      <a
                        onClick={() => {
                          redirect("scholar-hangout");
                        }}
                        href="#"
                      >
                  Scholar Hangout
                      </a>
                    </li> */}
                  </ul>
                </li>
                <div className="donate-btn-header">
                  <a
                    className="dtbtn"
                    onClick={() => {
                      // redirect("register");
                      window.location.href =
                        "https://secure.manuscriptedit.com/register";
                    }}
                    href="#"
                  >
                    Sign Up | Sign In
                  </a>
                </div>

                <div className="donate-btn-header">
                  <a
                    className="dtbtn"
                    onClick={() => {
                      // redirect("register");
                      window.location.href =
                        "https://secure.manuscriptedit.com/quotation";
                    }}
                    href="#"
                  >
                    Request a Quote
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-area d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu">
          <nav className="techno_menu">
            <ul className="clearfix">
              <li>
                <a href="#">SERVICES </a>
                <ul>
                  <li>
                    <Link href={"/EditingOverview"}>
                      <b>English Editing</b>
                    </Link>
                    <ul className={Style.subList}>
                      <li>
                        <Link href={"/EditingOverview"}>Editing Overview</Link>
                      </li>
                      <li>
                        <Link href={"/ProofReading"}>Proofreading</Link>
                      </li>
                      <li>
                        <Link href={"/SubEditing"}>Substantive Editing</Link>
                      </li>
                      <li>
                        <Link href={"/ExtensiveSubstantiveEditing"}>
                          Extensive Substantive Editing
                        </Link>
                      </li>
                      <li>
                        <Link href={"/CopyEdit"}>Copyediting</Link>
                      </li>
                      <li>
                        <Link href={"/PlagiarismCheckReduction"}>
                          Plagiarism check and reduction
                        </Link>
                      </li>
                      <li>
                        <Link href={"/TranslationOverview"}>
                          Translation Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"/PackageService"}>
                      <b>Publication Support</b>
                    </Link>
                    <ul className={Style.subList}>
                      <li>
                        <Link href={"/PackageService"}>
                          Publication Package
                        </Link>
                      </li>
                      <li>
                        <Link href={"/JournalSel"}>Journal Selection</Link>
                      </li>
                      <li>
                        <Link href={"/JournalSub"}>Journal Submission</Link>
                      </li>
                      <li>
                        <Link href={"/ResponseToReviewer"}>
                          Response to Reviewer
                        </Link>
                      </li>
                      <li>
                        <Link href={"/PeerReview"}>
                          Peer Review&nbsp;&amp;&nbsp;Pre Submission
                        </Link>
                      </li>
                      <li>
                        <Link href={"/PosterCreation"}>
                          Poster Creation &amp; Design
                        </Link>
                      </li>
                      <li>
                        <Link href={"/Formatting"}>Formatting</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"/Writing"}>
                      <b>Writing & Rewriting</b>
                    </Link>
                    <ul className={Style.subList}>
                      <li>
                        <Link href={"/Writing"}>Writing Overview</Link>
                      </li>
                      <li>
                        <Link href={"/MedicalWrite"}>Medical Writing</Link>
                      </li>
                      <li>
                        <Link href={"/ScientificWriting"}>
                          Scientific Writing
                        </Link>
                      </li>
                      <li>
                        <Link href={"/TechnicalWriting"}>
                          Technical Writing
                        </Link>
                      </li>
                      <li>
                        <Link href={"/MedicalRewrite"}>Rewriting</Link>
                      </li>
                      <li>
                        <Link href={"/StatisticalAnalysis"}>
                          Statistical Analysis
                        </Link>
                      </li>
                      <li>
                        <Link href={"/SystematicReview"}>
                          Systematic Review
                        </Link>
                      </li>
                      <li>
                        <Link href={"/MetaAnalysis"}>Meta Analysis</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"/ResearchSupportOverview"}>
                      <b>Research Support</b>
                    </Link>
                    <ul className={Style.subList}>
                      <li>
                        <Link href={"/ResearchSupportOverview"}>
                          Research Support Overview
                        </Link>
                      </li>
                      <li>
                        <Link href={"/EarlyStageResearchers"}>
                          Early Stage Researchers
                        </Link>
                      </li>
                      <li>
                        <Link href={"/MidCareerResearchers"}>
                          Mid-Career Researchers
                        </Link>
                      </li>
                      <li>
                        <Link href={"/FullyExperiencedResearchers"}>
                          Fully Experienced Researchers
                        </Link>
                      </li>
                      <li>
                        <Link href={"/ResearchEnhancementServices"}>
                          Research Enhancement Services
                        </Link>
                      </li>
                      <li>
                        <Link href={"/CitationBooster"}>Citation Booster</Link>
                      </li>
                      <li>
                        <Link href={"/MedicalDesign"}>
                          Illustration Services
                        </Link>
                      </li>
                      <li>
                        <Link href={"/PHDThesis"}>Phd Thesis</Link>
                      </li>
                      <li>
                        <Link href={"/MasterThesis"}>Master Thesis</Link>
                      </li>
                      <li>
                        <Link href={"/CustomizedServices"}>
                          Customized Services
                        </Link>
                      </li>
                      {/* <li>
                        <Link href={"/Corporate"}>Corporate Services</Link>
                      </li> */}
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"#"}>QUALITY</Link>
                <ul>
                  <li>
                    <Link href={"/QualityDelivery"}>Quality & Delivery</Link>
                  </li>
                  <li>
                    <Link href={"https://secure.manuscriptedit.com/samplework"}>Request a Sample Editing</Link>
                  </li>
                  <li>
                    <Link href={"/FAQ"}>FAQs</Link>
                  </li>
                  <li>
                    <Link href={"/Process"}>How We Work</Link>
                  </li>
                  <li>
                    <Link href={"/QualityAssurance"}>Service Guarantee</Link>
                  </li>
                  <li>
                    <Link href={"/Process"}>Editorial Process</Link>
                  </li>
                  <li>
                    <Link href={"/Security"}>Confidentiality</Link>
                  </li>
                  <li>
                    <Link href={"/Testimonial"}>Testimonial</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                  href="#"
                >
                  SUBMIT MANUSCRIPT
                </a>
                <ul>
                  {/* <li><Link href={'/QualityDelivery'}>Submit Manuscript</Link></li> */}
                  <li>
                    <a
                      onClick={() => {
                        redirect("register");
                      }}
                      href="#"
                    >
                      Submit Manuscript
                    </a>
                  </li>
                  <li>
                    <Link href={"/Prices"}>Price Calculator</Link>
                  </li>
                  {/* <li><Link href={'/FAQ'}>Quotation</Link></li> */}
                  <li>
                    <Link href={"http://secure.manuscriptedit.com/quotation"}>
                      Quotation
                    </Link>
                  </li>
                  <li>
                    <Link href={"/PaymentMethod"}>Payment Method</Link>
                  </li>
                  <li>
                    <Link href={"/Discount"}>Discount</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">EDITOR</a>
                <ul>
                  <li>
                    <Link href={"/QualityDelivery"}>Editor Profile</Link>
                  </li>
                  {/* <li>
                    <a
                      onClick={() => {
                        redirect("editorial-panel");
                      }}
                      href="#"
                    >
                      Editor Profile
                    </a>
                  </li> */}

                  <li>
                    <Link href={"/EditPanel"}>Editor Panel</Link>
                  </li>
                  {/* <li><Link href={'/FAQ'}>New Editor</Link></li> */}
                  <li>
                    <a
                      onClick={() => {
                        redirect("register1");
                      }}
                      href="#"
                    >
                      New Editor
                    </a>
                  </li>

                  {/* <li><Link href={'/Process'}>Editor Login</Link></li> */}
                  <li>
                    <a
                      onClick={() => {
                        redirect("logineditor");
                      }}
                      href="#"
                    >
                      Editor Login
                    </a>
                  </li>
                  <li>
                    <Link href={"/Career"}>Careers</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">MORE</a>
                <ul>
                  <li>
                    <Link href={"/About"}>About Us</Link>
                  </li>
                  <li><Link href={'/'}>Client List</Link></li>
                  {/* <li>
                    <a
                      onClick={() => {
                        redirect("client-list");
                      }}
                      href="#"
                    >
                      Client List
                    </a>
                  </li> */}
                  {/* <li><Link href={'/PartnerRecent'}>Recent Partners</Link></li> */}
                  <li><Link href={'/PartnerRecent'}>Recent Partners</Link></li>
                  <li><Link href={'/ContactUs'}>Contact us</Link></li>
                  {/* <li>
                    <a
                      onClick={() => {
                        redirect("contact-us");
                      }}
                      href="#"
                    >
                      Contact us
                    </a>
                  </li> */}
                  <li><Link href={'/QualityAssurance'}>News & Conferences</Link></li>
                  {/* <li>
                    <a
                      onClick={() => {
                        redirect("news-promotions");
                      }}
                      href="#"
                    >
                      News & Conferences
                    </a>
                  </li> */}

                  {/* <li><Link href={'/Process'}>Referral Partner Program</Link></li> */}
                  <li>
                    <a
                      onClick={() => {
                        redirect("register");
                      }}
                      href="#"
                    >
                      Referral Partner Program
                    </a>
                  </li>

                  <li><Link href={'/GlobalPartner2'}>Global Partner Program</Link></li>
                  {/* <li>
                    <a
                      onClick={() => {
                        redirect("partner");
                      }}
                      href="#"
                    >
                      Global Partner Program
                    </a>
                  </li> */}

                  {/* <li><Link href={'/Testimonial'}>Webinar Registration</Link></li> */}
                  {/* <li>
                    <a
                      onClick={() => {
                        redirect("wregistration");
                      }}
                      href="#"
                    >
                      Webinar Registration
                    </a>
                  </li> */}

                  <li>
                    <Link href={"https://secure.manuscriptedit.com/wregistration"}>
                      Webinar Registration
                    </Link>
                  </li>

                  <li><Link href={'https://scholar-hangout.manuscriptedit.com'}>Scholar Hangout</Link></li>
                  {/* <li>
                    <a
                      onClick={() => {
                        redirect("scholar-hangout");
                      }}
                      href="#"
                    >
                      Blog
                    </a>
                  </li> */}
                </ul>
              </li>
              <div className="donate-btn-header">
                <a
                  className="dtbtn"
                  href="https://secure.manuscriptedit.com/register"
                >
                  Sign Up | Sign In
                </a>
              </div>

              <div className="donate-btn-header">
                <a
                  className="dtbtn"
                  onClick={() => {
                    // redirect("register");
                    window.location.href =
                      "https://secure.manuscriptedit.com/quotation";
                  }}
                  href="#"
                >
                  Request a Quote
                </a>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
